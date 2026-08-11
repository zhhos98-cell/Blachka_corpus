#!/usr/bin/env python3
"""Build an exact locator/source-authority crosswalk without rewriting research data.

The crosswalk treats an exact public URL as an access/source node and records every
current Source/Auction JSON location that points to it. Shared locators therefore
become explicit graph edges between registers, but records are never merged and
URL similarity is never promoted to identity.
"""

from __future__ import annotations

import hashlib
import json
import re
from collections import Counter, defaultdict
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
OUT_JSON = ROOT / "schemas" / "generated" / "source-authority-crosswalk.json"
OUT_MD = ROOT / "docs" / "audits" / "2026-08-11" / "source-authority-crosswalk-audit-2026-08-11.md"
URL_RE = re.compile(r"https?://[^\s\]\[\)\(<>\"']+")


def source_files() -> list[Path]:
    files = sorted((ROOT / "sources").glob("*-register.json"))
    files += sorted(
        p for p in (ROOT / "auctions").glob("*.json")
        if p.name != "data-manifest.json"
    )
    return files


def role_for(path: str) -> str:
    p = path.lower()
    if any(token in p for token in (
        "archive_targets", "archive_target", "receiving_side_archives",
        "receiving_side_archive_targets", "external_archive_targets",
        "government_archive_target", "route_archive_priorities",
    )):
        return "archive_target"
    if any(token in p for token in (
        "next_retrieval", "next_search", "next_actions", "priority_targets",
        "next_targets", "next_recovery", "next_step",
    )):
        return "future_retrieval"
    if "secondary_locator" in p:
        return "secondary_locator"
    if "official_locator" in p or "official_url" in p:
        return "official_locator"
    if "stable_locator" in p:
        return "stable_locator"
    if any(token in p for token in (
        "exact_aggregator_lot_url", "primary_lot_page", "source_url",
        "web_source", "inventory_url",
    )):
        return "access_locator"
    if "evidence" in p or ".sources" in p or ".source" in p:
        return "evidence_source"
    if "archive" in p:
        return "archive_locator"
    if "locator" in p or "url" in p:
        return "locator"
    return "embedded_url"


def walk(value, path: str = ""):
    if isinstance(value, dict):
        for key, child in value.items():
            child_path = f"{path}.{key}" if path else key
            yield from walk(child, child_path)
    elif isinstance(value, list):
        for i, child in enumerate(value):
            yield from walk(child, f"{path}[{i}]")
    elif isinstance(value, str):
        for match in URL_RE.findall(value):
            locator = match.rstrip(".,;")
            if locator:
                yield locator, path


def main() -> None:
    occurrences: dict[str, list[dict]] = defaultdict(list)
    files = source_files()

    for file_path in files:
        payload = json.loads(file_path.read_text(encoding="utf-8"))
        rel = file_path.relative_to(ROOT).as_posix()
        layer = rel.split("/", 1)[0]
        for locator, path in walk(payload):
            parsed = urlsplit(locator)
            occurrences[locator].append({
                "file": rel,
                "layer": layer,
                "path": path,
                "role": role_for(path),
                "host": parsed.netloc.lower(),
            })

    nodes = []
    role_counts = Counter()
    host_nodes: dict[str, set[str]] = defaultdict(set)
    host_files: dict[str, set[str]] = defaultdict(set)
    host_occurrences = Counter()

    for locator in sorted(occurrences):
        occs = occurrences[locator]
        files_used = sorted({o["file"] for o in occs})
        layers = sorted({o["layer"] for o in occs})
        roles = sorted({o["role"] for o in occs})
        host = urlsplit(locator).netloc.lower()
        for role in roles:
            role_counts[role] += 1
        host_nodes[host].add(locator)
        host_files[host].update(files_used)
        host_occurrences[host] += len(occs)
        nodes.append({
            "node_id": "SRCNODE-" + hashlib.sha256(locator.encode("utf-8")).hexdigest()[:16],
            "locator": locator,
            "host": host,
            "occurrence_count": len(occs),
            "file_count": len(files_used),
            "layers": layers,
            "roles": roles,
            "shared_across_files": len(files_used) > 1,
            "cross_layer": len(layers) > 1,
            "occurrences": occs,
        })

    domains = [
        {
            "host": host,
            "unique_locator_count": len(host_nodes[host]),
            "file_count": len(host_files[host]),
            "occurrence_count": host_occurrences[host],
            "layers": sorted({
                file.split("/", 1)[0]
                for file in host_files[host]
            }),
        }
        for host in sorted(host_nodes)
    ]

    shared = [n for n in nodes if n["shared_across_files"]]
    cross_layer = [n for n in nodes if n["cross_layer"]]
    payload = {
        "schema_version": "1.0.0",
        "generated_date": "2026-08-11",
        "purpose": "Exact source/locator authority crosswalk for current Source registers and Auction JSON layers.",
        "guard": "A shared locator establishes a shared access/source node only. It does not prove that the surrounding evidence records are duplicates, semantically equivalent, or safe to merge.",
        "matching_rule": "Exact URL after terminal prose punctuation removal only; no hostname, path, query, fragment, redirect, or trailing-slash canonicalization.",
        "input_file_count": len(files),
        "locator_node_count": len(nodes),
        "shared_locator_node_count": len(shared),
        "cross_layer_locator_node_count": len(cross_layer),
        "host_count": len(domains),
        "role_node_counts": dict(sorted(role_counts.items())),
        "nodes": nodes,
        "domains": domains,
    }
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    top_shared = sorted(shared, key=lambda n: (-n["file_count"], -n["occurrence_count"], n["locator"]))[:15]
    top_domains = sorted(domains, key=lambda d: (-d["file_count"], -d["unique_locator_count"], d["host"]))[:15]
    lines = [
        "# Source authority / locator crosswalk audit · 11 August 2026",
        "",
        "This read-only crosswalk turns exact public locators into authority nodes and records which current Source/Auction registers point to each node. A node is an access/source identity, not a merged evidence record.",
        "",
        f"- Input JSON files: **{len(files)}**.",
        f"- Exact locator nodes: **{len(nodes)}**.",
        f"- Locator nodes used by more than one file: **{len(shared)}**.",
        f"- Locator nodes shared across Sources and Auctions: **{len(cross_layer)}**.",
        f"- Distinct hosts: **{len(domains)}**.",
        "",
        "## Highest-connectivity locators",
        "",
    ]
    for node in top_shared:
        lines.append(
            f"- **{node['file_count']} files / {node['occurrence_count']} occurrences** — `{node['locator']}` — roles: {', '.join(node['roles'])}."
        )
    lines += ["", "## Highest-connectivity hosts", ""]
    for domain in top_domains:
        lines.append(
            f"- `{domain['host']}` — **{domain['file_count']} files**, {domain['unique_locator_count']} exact locators, {domain['occurrence_count']} occurrences."
        )
    lines += [
        "",
        "## Use rule",
        "",
        "The crosswalk is suitable for source reuse analysis, register navigation, provenance routing, and later UI projection. It must not drive record deletion, evidence flattening, or fuzzy URL consolidation. Two different URLs on the same host remain different nodes unless a later source-level review proves equivalence.",
        "",
        "Machine-readable detail: `../../../schemas/generated/source-authority-crosswalk.json`.",
        "",
    ]
    OUT_MD.parent.mkdir(parents=True, exist_ok=True)
    OUT_MD.write_text("\n".join(lines), encoding="utf-8")
    print(
        f"Source authority crosswalk: {len(files)} files, {len(nodes)} locators, "
        f"{len(shared)} shared, {len(cross_layer)} cross-layer, {len(domains)} hosts"
    )


if __name__ == "__main__":
    main()

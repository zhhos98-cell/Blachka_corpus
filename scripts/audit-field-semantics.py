#!/usr/bin/env python3
"""Audit recurring field roles in Sources/Auctions without rewriting data.

This is deliberately descriptive. It groups field names by functional role so
naming drift can be inspected without implying that similarly named evidence
fields are semantically interchangeable.
"""

from __future__ import annotations

import json
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_JSON = ROOT / "schemas" / "generated" / "field-semantic-role-map.json"
OUT_MD = ROOT / "docs" / "audits" / "2026-08-11" / "field-semantic-audit-2026-08-11.md"

GROUPS = {
    "guard_or_limit": {
        "description": "Caveat, scope limit, or evidence-use restriction. Similar function does not imply identical epistemic force.",
        "keys": {
            "guard", "methodological_guard", "evidence_guard", "blaschka_guard",
            "catalogue_guard", "source_guard", "coverage_guard", "date_guard",
            "material_guard", "transaction_guard", "identity_guard",
        },
    },
    "interpretive_observation": {
        "description": "Interpretive synthesis or observation produced from the register rather than a locator or raw record.",
        "keys": {
            "research_observation", "network_observation", "material_observation",
            "comparative_observation", "operational_observation",
        },
    },
    "research_value": {
        "description": "Statement of why a record matters for the project. Kept separate from evidence description.",
        "keys": {"research_value", "research_significance", "analytical_value"},
    },
    "future_work": {
        "description": "Retrieval, comparison, or follow-up work rather than completed evidence.",
        "keys": {
            "next_retrieval", "next_actions", "next_targets", "priority_targets",
            "archive_targets", "route_archive_priorities", "research_questions",
            "comparative_questions", "research_question",
        },
    },
    "locator_or_source": {
        "description": "Repository/source/locator metadata. Same role can still encode different levels of archival precision.",
        "keys": {
            "locator", "locators", "repository", "archive", "collection",
            "reference", "references", "source", "sources", "publication",
            "collection_number", "receiving_repository",
        },
    },
    "identity_or_status": {
        "description": "Stable/local identity or status metadata. Status labels remain governed by their local vocabulary.",
        "keys": {"id", "record_id", "status", "status_vocabulary"},
    },
    "evidence_description": {
        "description": "Evidence statement or content description. These are not normalized because their evidentiary unit varies by register.",
        "keys": {
            "evidence", "finding_aid_evidence", "direct_invoice_evidence",
            "secondary_content_claim", "content_note", "catalogue_crosscheck",
            "auction_evidence", "auction_record",
        },
    },
}


def jtype(value):
    if value is None:
        return "null"
    if isinstance(value, bool):
        return "boolean"
    if isinstance(value, int) and not isinstance(value, bool):
        return "integer"
    if isinstance(value, float):
        return "number"
    if isinstance(value, str):
        return "string"
    if isinstance(value, list):
        return "array"
    if isinstance(value, dict):
        return "object"
    return type(value).__name__


def walk(value, file_name, path, rows):
    if isinstance(value, dict):
        for key, child in value.items():
            child_path = f"{path}.{key}" if path else key
            rows[key]["occurrences"] += 1
            rows[key]["files"].add(file_name)
            rows[key]["types"][jtype(child)] += 1
            rows[key]["paths"].add(child_path)
            walk(child, file_name, child_path, rows)
    elif isinstance(value, list):
        for i, child in enumerate(value):
            walk(child, file_name, f"{path}[]", rows)


def role_for(key):
    for role, spec in GROUPS.items():
        if key in spec["keys"]:
            return role
    if key.endswith("_guard"):
        return "guard_or_limit"
    if key.endswith("_observation"):
        return "interpretive_observation"
    if key.startswith("next_"):
        return "future_work"
    if key.endswith("_locator") or key.endswith("_locators"):
        return "locator_or_source"
    if key.endswith("_evidence"):
        return "evidence_description"
    return None


def main():
    files = []
    files.extend(sorted((ROOT / "sources").glob("*-register.json")))
    files.extend(sorted(
        p for p in (ROOT / "auctions").glob("*.json")
        if p.name != "data-manifest.json"
    ))

    rows = defaultdict(lambda: {
        "occurrences": 0,
        "files": set(),
        "types": Counter(),
        "paths": set(),
    })
    for path in files:
        payload = json.loads(path.read_text(encoding="utf-8"))
        walk(payload, path.relative_to(ROOT).as_posix(), "", rows)

    fields = []
    role_members = defaultdict(list)
    for key in sorted(rows):
        info = rows[key]
        role = role_for(key)
        row = {
            "field": key,
            "role": role,
            "occurrences": info["occurrences"],
            "file_count": len(info["files"]),
            "types": dict(sorted(info["types"].items())),
            "files": sorted(info["files"]),
            "sample_paths": sorted(info["paths"])[:12],
        }
        fields.append(row)
        if role:
            role_members[role].append(key)

    role_summary = []
    for role, spec in GROUPS.items():
        members = sorted(set(role_members.get(role, [])))
        role_summary.append({
            "role": role,
            "description": spec["description"],
            "field_count": len(members),
            "fields": members,
            "normalization_policy": "map_only_do_not_rename",
        })

    payload = {
        "schema_version": "1.0.0",
        "generated_date": "2026-08-11",
        "purpose": "Descriptive semantic-role map for recurring field names in current Source and Auction JSON. It identifies naming drift without changing evidence-bearing records.",
        "guard": "Role similarity is not semantic identity. This inventory must not be used to rename, merge, or reinterpret canonical fields automatically.",
        "input_file_count": len(files),
        "distinct_field_names": len(fields),
        "role_groups": role_summary,
        "fields": fields,
    }
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    lines = [
        "# Field semantic-role audit · 11 August 2026",
        "",
        "This audit recursively inventories field names across current Source registers and Auction JSON layers. It maps functional similarity only; no research data are rewritten and no two fields are declared semantically identical merely because they occupy a similar role.",
        "",
        f"- Input JSON files: **{len(files)}**.",
        f"- Distinct field names encountered: **{len(fields)}**.",
        "",
        "## Role families",
        "",
    ]
    for item in role_summary:
        fields_text = ", ".join(f"`{x}`" for x in item["fields"]) or "None currently detected"
        lines.append(f"### {item['role']}")
        lines.append("")
        lines.append(item["description"])
        lines.append("")
        lines.append(f"Detected fields ({item['field_count']}): {fields_text}.")
        lines.append("")

    lines.extend([
        "## What can and cannot be standardized",
        "",
        "1. **Safe to standardize at the tooling layer:** metadata envelope validation, manifest generation, field-role inventory, checksums, and documentation vocabulary for maintenance scripts.",
        "2. **Map but do not rename:** guard fields, observation fields, research-value fields, future-work fields, locator/source fields, and evidence-description fields. Their names often encode the question that produced the register.",
        "3. **Do not flatten:** `evidence`, `research_value`, and `*_guard` are analytically different layers. Evidence describes the source basis; research value states why it matters; a guard constrains permissible inference.",
        "4. **Do not globalize status:** status labels remain local unless a later reviewed crosswalk proves equivalence. The separate status-vocabulary audit found no repeated explicit label across the four current local vocabularies.",
        "5. **Naming drift is now observable without destructive cleanup:** future new registers can prefer documented field roles while historical registers remain intact.",
        "",
        "Machine-readable detail: `../../../schemas/generated/field-semantic-role-map.json`.",
    ])
    OUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Semantic-role audit: {len(files)} files, {len(fields)} distinct field names")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Build a compact public projection of shared source locators for the Sources page.

This script reads the derived source-authority crosswalk plus Source/Auction manifests.
It selects only exact locators that are both reused across research files and actually
linked from sources/index.html. It never edits evidence-bearing registers.
"""

from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CROSSWALK = ROOT / "schemas" / "generated" / "source-authority-crosswalk.json"
SOURCE_MANIFEST = ROOT / "sources" / "register-manifest.json"
AUCTION_MANIFEST = ROOT / "auctions" / "data-manifest.json"
SOURCE_HTML = ROOT / "sources" / "index.html"
OUT = ROOT / "sources" / "source-reuse-ui.json"

HREF_RE = re.compile(r'href=["\'](https?://[^"\']+)["\']', re.I)


def trim_title(value: str) -> str:
    title = str(value or "").strip()
    prefix = "The Blaschka Object Network — "
    if title.startswith(prefix):
        title = title[len(prefix):]
    return title


def labels() -> dict[str, str]:
    result: dict[str, str] = {}
    source_data = json.loads(SOURCE_MANIFEST.read_text(encoding="utf-8"))
    for item in source_data.get("registers", []):
        path = item.get("path")
        if path:
            result[f"sources/{path}"] = trim_title(item.get("title") or path)

    auction_data = json.loads(AUCTION_MANIFEST.read_text(encoding="utf-8"))
    for item in auction_data.get("files", []):
        path = item.get("path")
        if path:
            result[f"auctions/{path}"] = trim_title(item.get("title") or path)
    return result


def main() -> None:
    crosswalk = json.loads(CROSSWALK.read_text(encoding="utf-8"))
    page = SOURCE_HTML.read_text(encoding="utf-8")
    linked = {html.unescape(value) for value in HREF_RE.findall(page)}
    file_labels = labels()

    entries = []
    for node in crosswalk.get("nodes", []):
        locator = node.get("locator")
        if not locator or locator not in linked or not node.get("shared_across_files"):
            continue

        contexts = []
        seen_files = set()
        for occurrence in node.get("occurrences", []):
            file = occurrence.get("file")
            if not file or file in seen_files:
                continue
            seen_files.add(file)
            contexts.append({
                "file": file,
                "layer": occurrence.get("layer"),
                "label": file_labels.get(file, Path(file).stem.replace("-", " ").title()),
            })

        contexts.sort(key=lambda item: (item.get("layer") != "sources", item.get("label", "").lower()))
        entries.append({
            "locator": locator,
            "project_part_count": len(contexts),
            "contexts": contexts,
        })

    entries.sort(key=lambda item: item["locator"])
    payload = {
        "schema_version": "1.0.0",
        "generated_date": crosswalk.get("generated_date"),
        "purpose": "Compact Sources-page projection of exact locators reused across multiple research files.",
        "guard": "Counts expose reuse only. They do not mean the linked research records are duplicates or equivalent.",
        "matching_rule": "Exact public URL only; no fuzzy URL consolidation.",
        "entry_count": len(entries),
        "entries": entries,
    }
    OUT.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")
    print(f"Source reuse UI projection: {len(entries)} shared locators linked from Sources page")


if __name__ == "__main__":
    main()

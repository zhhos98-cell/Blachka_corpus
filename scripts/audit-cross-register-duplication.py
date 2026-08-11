#!/usr/bin/env python3
"""Audit exact cross-register duplication without rewriting research data.

The audit is deliberately conservative: only exact IDs, exact URLs, exact long
strings, and byte-equivalent JSON objects are compared. Similarity is not treated
as identity and no canonical merge is proposed automatically.
"""

from __future__ import annotations

import hashlib
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_JSON = ROOT / "schemas" / "generated" / "cross-register-duplication-index.json"
OUT_MD = ROOT / "docs" / "cross-register-duplication-audit-2026-08-11.md"
URL_RE = re.compile(r"https?://[^\s\]\[\)\(<>\"']+")


def stable_json(value):
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


def digest(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def walk(value, file_name, path, ids, urls, strings, objects):
    if isinstance(value, dict):
        if len(value) >= 3:
            text = stable_json(value)
            objects[digest(text)]["json"] = text
            objects[digest(text)]["locations"].append({"file": file_name, "path": path or "$"})
        for key, child in value.items():
            child_path = f"{path}.{key}" if path else key
            if key in {"id", "record_id"} and isinstance(child, str):
                ids[child].append({"file": file_name, "path": child_path, "key": key})
            walk(child, file_name, child_path, ids, urls, strings, objects)
    elif isinstance(value, list):
        for i, child in enumerate(value):
            walk(child, file_name, f"{path}[{i}]", ids, urls, strings, objects)
    elif isinstance(value, str):
        if len(value) >= 120:
            strings[digest(value)]["text"] = value
            strings[digest(value)]["locations"].append({"file": file_name, "path": path})
        for url in URL_RE.findall(value):
            url = url.rstrip(".,;:")
            urls[url].append({"file": file_name, "path": path})


def cross_file(locations):
    return len({x["file"] for x in locations}) > 1


def main():
    files = list(sorted((ROOT / "sources").glob("*-register.json")))
    files.extend(sorted(
        p for p in (ROOT / "auctions").glob("*.json")
        if p.name != "data-manifest.json"
    ))

    ids = defaultdict(list)
    urls = defaultdict(list)
    strings = defaultdict(lambda: {"text": None, "locations": []})
    objects = defaultdict(lambda: {"json": None, "locations": []})

    for path in files:
        payload = json.loads(path.read_text(encoding="utf-8"))
        walk(payload, path.relative_to(ROOT).as_posix(), "", ids, urls, strings, objects)

    duplicate_ids = [
        {"id": key, "locations": locs}
        for key, locs in sorted(ids.items())
        if cross_file(locs)
    ]
    duplicate_urls = [
        {"url": key, "file_count": len({x["file"] for x in locs}), "locations": locs}
        for key, locs in sorted(urls.items())
        if cross_file(locs)
    ]
    duplicate_strings = []
    for key, item in sorted(strings.items()):
        if cross_file(item["locations"]):
            duplicate_strings.append({
                "sha256": key,
                "length": len(item["text"]),
                "file_count": len({x["file"] for x in item["locations"]}),
                "text": item["text"],
                "locations": item["locations"],
            })
    duplicate_objects = []
    for key, item in sorted(objects.items()):
        if cross_file(item["locations"]):
            parsed = json.loads(item["json"])
            duplicate_objects.append({
                "sha256": key,
                "key_count": len(parsed) if isinstance(parsed, dict) else None,
                "file_count": len({x["file"] for x in item["locations"]}),
                "object": parsed,
                "locations": item["locations"],
            })

    payload = {
        "schema_version": "1.0.0",
        "generated_date": "2026-08-11",
        "purpose": "Exact cross-register duplication audit for current Source registers and Auction JSON layers.",
        "guard": "Repeated locators or prose do not prove duplicate evidence units. This index is diagnostic only and must not drive automatic merges or deletions.",
        "input_file_count": len(files),
        "duplicate_id_count": len(duplicate_ids),
        "duplicate_url_count": len(duplicate_urls),
        "duplicate_long_string_count": len(duplicate_strings),
        "duplicate_object_count": len(duplicate_objects),
        "duplicate_ids": duplicate_ids,
        "duplicate_urls": duplicate_urls,
        "duplicate_long_strings": duplicate_strings,
        "duplicate_objects": duplicate_objects,
    }
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    lines = [
        "# Cross-register duplication audit · 11 August 2026",
        "",
        "This audit compares exact values only across current Source registers and Auction JSON layers. It does not fuzzy-match people, objects, institutions, evidence, or prose, and it does not modify canonical data.",
        "",
        f"- Input files: **{len(files)}**.",
        f"- IDs reused across more than one file: **{len(duplicate_ids)}**.",
        f"- Exact URLs reused across more than one file: **{len(duplicate_urls)}**.",
        f"- Exact strings ≥120 characters reused across more than one file: **{len(duplicate_strings)}**.",
        f"- Exact JSON objects (≥3 keys) reused across more than one file: **{len(duplicate_objects)}**.",
        "",
        "## Interpretation",
        "",
        "- A repeated **ID** is the highest-priority integrity signal because an identifier is expected to identify one evidence unit within its intended namespace. Every cross-file reuse requires review before any merge decision.",
        "- A repeated **URL** is usually a shared source or access route, not duplicated evidence. It is useful for building source crosswalks but is not a reason to delete records.",
        "- Repeated **long prose** may be deliberate guard text, shared source description, or copy-forward drift. Exact repetition is a candidate for documentation-level factoring only when the wording has no record-specific evidentiary function.",
        "- Repeated **objects** are stronger evidence of duplicated structured data, but even byte-equivalent objects can legitimately appear in different analytical registers. Prefer a cross-reference layer over destructive deduplication unless one file is explicitly derived from another.",
        "",
    ]
    if duplicate_ids:
        lines.append("### Cross-file IDs")
        lines.append("")
        for item in duplicate_ids[:50]:
            where = ", ".join(sorted({x["file"] for x in item["locations"]}))
            lines.append(f"- `{item['id']}` — {where}")
        lines.append("")
    lines.append("Machine-readable detail: `../schemas/generated/cross-register-duplication-index.json`.")
    OUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(
        "Cross-register duplication: "
        f"ids={len(duplicate_ids)} urls={len(duplicate_urls)} "
        f"long_strings={len(duplicate_strings)} objects={len(duplicate_objects)}"
    )


if __name__ == "__main__":
    main()

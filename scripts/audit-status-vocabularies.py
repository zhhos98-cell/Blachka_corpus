#!/usr/bin/env python3
"""Inventory explicit status vocabularies without normalizing them."""

from __future__ import annotations

import hashlib
import json
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCES = ROOT / "sources"
SCHEMAS = ROOT / "schemas"
DOCS = ROOT / "docs"
JSON_OUT = SCHEMAS / "status-vocabulary-inventory.json"
MD_OUT = DOCS / "status-vocabulary-audit-2026-08-11.md"


def canonical(value) -> str:
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


def digest(value) -> str:
    return hashlib.sha256(canonical(value).encode("utf-8")).hexdigest()[:12]


def main() -> None:
    vocabularies = []
    term_occurrences = defaultdict(list)

    for path in sorted(SOURCES.glob("*-register.json")):
        payload = json.loads(path.read_text(encoding="utf-8"))
        vocab = payload.get("status_vocabulary")
        if not isinstance(vocab, dict):
            continue
        terms = []
        for term, definition in vocab.items():
            row = {
                "term": term,
                "definition": definition,
                "definition_hash": digest(definition),
            }
            terms.append(row)
            term_occurrences[term].append({"path": path.name, **row})
        vocabularies.append({
            "path": path.name,
            "term_count": len(terms),
            "vocabulary_hash": digest(vocab),
            "terms": terms,
        })

    repeated = {}
    identical_repeat_count = 0
    conflicting_repeat_count = 0
    for term, rows in sorted(term_occurrences.items()):
        if len(rows) < 2:
            continue
        hashes = sorted({row["definition_hash"] for row in rows})
        classification = "identical_definition" if len(hashes) == 1 else "definition_conflict"
        if classification == "identical_definition":
            identical_repeat_count += 1
        else:
            conflicting_repeat_count += 1
        repeated[term] = {
            "classification": classification,
            "definition_variant_count": len(hashes),
            "occurrences": rows,
        }

    inventory = {
        "schema_version": "1.0.0",
        "generated_date": "2026-08-11",
        "purpose": "Inventory of explicit top-level status_vocabulary objects in Source registers. No status terms or definitions are rewritten.",
        "guard": "Same spelling is not treated as same meaning unless definitions match exactly or a later research review maps them explicitly.",
        "files_with_status_vocabulary": len(vocabularies),
        "unique_status_terms": len(term_occurrences),
        "repeated_status_terms": len(repeated),
        "repeated_terms_with_identical_definition": identical_repeat_count,
        "repeated_terms_with_definition_conflict": conflicting_repeat_count,
        "vocabularies": vocabularies,
        "repeated_terms": repeated,
    }
    SCHEMAS.mkdir(exist_ok=True)
    JSON_OUT.write_text(json.dumps(inventory, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    lines = [
        "# Status vocabulary audit · 11 August 2026",
        "",
        "This audit compares only explicit top-level `status_vocabulary` objects in the current Source registers. It does not rename, merge, or reinterpret any status.",
        "",
        f"- Files with explicit `status_vocabulary`: **{len(vocabularies)}**.",
        f"- Unique status labels: **{len(term_occurrences)}**.",
        f"- Labels repeated across more than one vocabulary: **{len(repeated)}**.",
        f"- Repeated labels with byte-equivalent JSON definitions: **{identical_repeat_count}**.",
        f"- Repeated labels whose definitions differ: **{conflicting_repeat_count}**.",
        "",
        "## Vocabularies",
        "",
    ]
    for vocab in vocabularies:
        lines.append(f"- `{vocab['path']}` — {vocab['term_count']} terms; vocabulary hash `{vocab['vocabulary_hash']}`.")
    lines.extend(["", "## Repeated terms", ""])
    if not repeated:
        lines.append("No status label occurs in more than one explicit vocabulary. A global vocabulary would therefore add abstraction without eliminating duplication.")
    else:
        for term, info in repeated.items():
            paths = ", ".join(f"`{row['path']}`" for row in info["occurrences"])
            lines.append(
                f"- `{term}` — **{info['classification']}** across {paths}; "
                f"{info['definition_variant_count']} definition variant(s)."
            )
    lines.extend([
        "",
        "## Decision rule",
        "",
        "A shared vocabulary file should contain only terms whose definitions are identical across current uses, or terms later linked by an explicit reviewed mapping. Conflicting or file-specific statuses remain local. The inventory is evidence about schema reuse, not authority to edit the underlying registers.",
        "",
        "Machine-readable detail: `../schemas/status-vocabulary-inventory.json`.",
        "",
    ])
    MD_OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Status vocabularies: {len(vocabularies)}")
    print(f"Repeated terms: {len(repeated)}; conflicts: {conflicting_repeat_count}")


if __name__ == "__main__":
    main()

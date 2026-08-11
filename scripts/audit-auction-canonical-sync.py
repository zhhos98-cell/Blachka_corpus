#!/usr/bin/env python3
"""Audit Auction support-layer references against canonical auction-data.json.

No canonical values are changed. The report checks resolvable record links and
compares declared canonical_fields_to_update with current canonical values.
"""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
AUCTIONS = ROOT / "auctions"
OUT_JSON = ROOT / "schemas" / "generated" / "auction-canonical-sync-audit.json"
OUT_MD = ROOT / "docs" / "audits" / "2026-08-11" / "auction-canonical-sync-audit-2026-08-11.md"

REFERENCE_KEYS = {
    "canonical_record_id",
    "canonical_record_ids",
    "probable_same_object_as",
    "probable_reoffer_of",
}


def walk(value, file_name, path, refs, update_blocks):
    if isinstance(value, dict):
        for key, child in value.items():
            child_path = f"{path}.{key}" if path else key
            if key in REFERENCE_KEYS:
                values = child if isinstance(child, list) else [child]
                for target in values:
                    if isinstance(target, str):
                        refs.append({
                            "file": file_name,
                            "path": child_path,
                            "key": key,
                            "target": target,
                        })
            walk(child, file_name, child_path, refs, update_blocks)

        if "canonical_fields_to_update" in value and isinstance(value["canonical_fields_to_update"], dict):
            targets = []
            if isinstance(value.get("canonical_record_id"), str):
                targets = [value["canonical_record_id"]]
            elif isinstance(value.get("canonical_record_ids"), list):
                targets = [x for x in value["canonical_record_ids"] if isinstance(x, str)]
            update_blocks.append({
                "file": file_name,
                "path": path or "$",
                "targets": targets,
                "declared_update_needed": value.get("canonical_update_needed"),
                "fields": value["canonical_fields_to_update"],
            })
    elif isinstance(value, list):
        for i, child in enumerate(value):
            walk(child, file_name, f"{path}[{i}]", refs, update_blocks)


def main():
    canonical_path = AUCTIONS / "auction-data.json"
    canonical = json.loads(canonical_path.read_text(encoding="utf-8"))
    records = canonical.get("records", [])
    by_id = {r.get("record_id"): r for r in records if isinstance(r.get("record_id"), str)}

    refs = []
    update_blocks = []
    for path in sorted(AUCTIONS.glob("*.json")):
        if path.name in {"auction-data.json", "data-manifest.json"}:
            continue
        payload = json.loads(path.read_text(encoding="utf-8"))
        walk(payload, path.name, "", refs, update_blocks)

    # Also check canonical internal reoffer links.
    for i, record in enumerate(records):
        for key in ("probable_same_object_as", "probable_reoffer_of"):
            target = record.get(key)
            if isinstance(target, str):
                refs.append({
                    "file": "auction-data.json",
                    "path": f"records[{i}].{key}",
                    "key": key,
                    "target": target,
                })

    for ref in refs:
        ref["resolved"] = ref["target"] in by_id

    update_results = []
    field_counts = {"already_applied": 0, "pending": 0, "conflict_or_review": 0, "unresolved_target": 0}
    for block in update_blocks:
        targets = block["targets"]
        if not targets:
            update_results.append({**block, "status": "no_canonical_target_declared", "comparisons": []})
            continue
        comparisons = []
        for target in targets:
            record = by_id.get(target)
            if record is None:
                comparisons.append({"target": target, "status": "unresolved_target"})
                field_counts["unresolved_target"] += 1
                continue
            for field, desired in block["fields"].items():
                current = record.get(field)
                if current == desired:
                    status = "already_applied"
                elif current is None and desired is not None:
                    status = "pending"
                else:
                    status = "conflict_or_review"
                field_counts[status] += 1
                comparisons.append({
                    "target": target,
                    "field": field,
                    "current": current,
                    "declared_value": desired,
                    "status": status,
                })
        statuses = {x.get("status") for x in comparisons}
        if statuses == {"already_applied"}:
            block_status = "fully_applied"
        elif "unresolved_target" in statuses:
            block_status = "unresolved_target"
        elif "conflict_or_review" in statuses:
            block_status = "review_required"
        elif "pending" in statuses:
            block_status = "pending"
        else:
            block_status = "mixed_or_empty"
        update_results.append({**block, "status": block_status, "comparisons": comparisons})

    unresolved_refs = [x for x in refs if not x["resolved"]]
    payload = {
        "schema_version": "1.0.0",
        "generated_date": "2026-08-11",
        "purpose": "Read-only integrity audit of Auction support-layer references and declared canonical updates against auction-data.json.",
        "guard": "Pending or conflicting fields are review targets only. This audit does not authorize automatic mutation of canonical auction records.",
        "canonical_record_count": len(by_id),
        "reference_count": len(refs),
        "unresolved_reference_count": len(unresolved_refs),
        "references": refs,
        "update_block_count": len(update_results),
        "field_status_counts": field_counts,
        "update_blocks": update_results,
    }
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    lines = [
        "# Auction canonical-sync audit · 11 August 2026",
        "",
        "This is a read-only comparison between Auction supporting JSON layers and canonical `auction-data.json`. It checks explicit record references and declared `canonical_fields_to_update`; it does not apply changes.",
        "",
        f"- Canonical auction records: **{len(by_id)}**.",
        f"- Explicit canonical/reoffer references checked: **{len(refs)}**.",
        f"- Unresolved references: **{len(unresolved_refs)}**.",
        f"- Declared update blocks: **{len(update_results)}**.",
        f"- Update fields already applied: **{field_counts['already_applied']}**.",
        f"- Update fields still pending because canonical is empty: **{field_counts['pending']}**.",
        f"- Update fields requiring review because canonical has a different non-null value: **{field_counts['conflict_or_review']}**.",
        "",
    ]
    if unresolved_refs:
        lines.extend(["## Unresolved references", ""])
        for ref in unresolved_refs:
            lines.append(f"- `{ref['target']}` from `{ref['file']}:{ref['path']}`")
        lines.append("")

    lines.extend(["## Declared canonical updates", ""])
    for block in update_results:
        lines.append(f"- `{block['file']}:{block['path']}` — **{block['status']}**")
        for cmp in block["comparisons"]:
            if "field" in cmp:
                lines.append(
                    f"  - `{cmp['target']}.{cmp['field']}` — {cmp['status']}; "
                    f"current={json.dumps(cmp['current'], ensure_ascii=False)}; "
                    f"declared={json.dumps(cmp['declared_value'], ensure_ascii=False)}"
                )
            else:
                lines.append(f"  - `{cmp['target']}` — {cmp['status']}")
    lines.extend([
        "",
        "A `pending` result means the supporting layer contains a proposed value while the canonical field is currently null/missing. A `conflict_or_review` result means both layers contain non-null values that differ; neither is automatically preferred.",
        "",
        "Machine-readable detail: `../../../schemas/generated/auction-canonical-sync-audit.json`.",
    ])
    OUT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(
        f"Auction canonical sync: refs={len(refs)} unresolved={len(unresolved_refs)} "
        f"updates={len(update_results)} pending={field_counts['pending']} "
        f"review={field_counts['conflict_or_review']}"
    )


if __name__ == "__main__":
    main()

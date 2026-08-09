#!/usr/bin/env python3
"""Export the CLOSED_2026-08-09 155-entry microscope-slide catalogue.

This exporter does not use the heuristic CORE_19C classifier to decide
membership. It reads the closure-derived active IDs produced by
`build_frozen_strict_membership.py`, filters the prepared canonical survey, and
writes both a full backend export and a compact research-facing export.

Use `--prepare` on a clean checkout to merge the modular survey batches first.
The preparation step mutates the runtime 07A file in the checkout but does not
commit it.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
import subprocess
import sys
from pathlib import Path
from typing import Any

from build_frozen_strict_membership import write_frozen_membership

SURVEY = Path("data/survey/07A_Global_Microscope_Slide_Collections_Survey.csv")
ACTIVE = Path("data/normalized/scope_19c_active_ids.json")
OUT_DIR = Path("outputs/final_catalogue")
EXPECTED_COUNT = 155

COMPACT_FIELDS = [
    "entry_id",
    "country",
    "institution_current",
    "institution_historical",
    "collection_title_or_search_entry",
    "source_type",
    "source_url",
    "stable_id_pattern",
    "slide_certainty",
    "stated_count",
    "harvestable_item_count",
    "person_or_collection_name",
    "relationship_phrase",
    "date_range",
    "subject_scope",
    "physical_structure",
    "provenance_value",
    "event_side_hooks",
    "notes",
]


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def read_survey() -> tuple[list[str], list[dict[str, str]]]:
    with SURVEY.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        fields = list(reader.fieldnames or [])
        return fields, list(reader)


def write_csv(path: Path, fields: list[str], rows: list[dict[str, str]]) -> None:
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields, lineterminator="\n", extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def write_jsonl(path: Path, rows: list[dict[str, str]]) -> None:
    with path.open("w", encoding="utf-8") as f:
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False, separators=(",", ":")) + "\n")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--prepare",
        action="store_true",
        help="Run prepare_survey_inputs.py before export; useful on a clean checkout.",
    )
    parser.add_argument("--output", type=Path, default=OUT_DIR)
    args = parser.parse_args()

    if args.prepare:
        subprocess.run([sys.executable, "scripts/prepare_survey_inputs.py"], check=True)

    frozen_report = write_frozen_membership()
    active_payload = json.loads(ACTIVE.read_text(encoding="utf-8"))
    active_ids = list(active_payload.get("entry_ids", []))
    if len(active_ids) != EXPECTED_COUNT or len(set(active_ids)) != EXPECTED_COUNT:
        raise ValueError(f"Frozen active membership is not exactly {EXPECTED_COUNT} unique IDs")

    fields, all_rows = read_survey()
    by_id = {row.get("entry_id", ""): row for row in all_rows}
    missing = [entry_id for entry_id in active_ids if entry_id not in by_id]
    if missing:
        raise ValueError(f"Prepared survey is missing frozen IDs: {missing}")

    # Preserve closure/batch order rather than sorting alphabetically.
    rows = [by_id[entry_id] for entry_id in active_ids]
    if len(rows) != EXPECTED_COUNT:
        raise ValueError(f"Final export count drifted: {len(rows)}")

    for required in COMPACT_FIELDS:
        if required not in fields:
            raise ValueError(f"Compact export field missing from survey schema: {required}")

    out = args.output
    out.mkdir(parents=True, exist_ok=True)
    full_csv = out / "GLOBAL_MICROSCOPE_SLIDE_CATALOGUE_19C_BACKEND.csv"
    compact_csv = out / "GLOBAL_MICROSCOPE_SLIDE_CATALOGUE_19C.csv"
    jsonl = out / "GLOBAL_MICROSCOPE_SLIDE_CATALOGUE_19C.jsonl"
    manifest_path = out / "GLOBAL_MICROSCOPE_SLIDE_CATALOGUE_19C_MANIFEST.json"

    write_csv(full_csv, fields, rows)
    write_csv(compact_csv, COMPACT_FIELDS, rows)
    write_jsonl(jsonl, rows)

    manifest: dict[str, Any] = {
        "schema_version": "global-microscope-slide-catalogue-19c-export-v1-07AR",
        "status": "CLOSED_2026-08-09",
        "historical_scope": "1800-1899",
        "canonical_discovery_entries": 307,
        "frozen_strict_entries": len(rows),
        "membership_source": "07K-07AQ provisional strict batches + 07AR canonicalisation contract",
        "membership_schema": active_payload.get("schema_version", ""),
        "membership_report": "outputs/frozen_strict_membership.json",
        "row_order": "frozen closure/batch order",
        "files": {
            full_csv.name: {"rows": len(rows), "sha256": sha256(full_csv)},
            compact_csv.name: {"rows": len(rows), "sha256": sha256(compact_csv)},
            jsonl.name: {"rows": len(rows), "sha256": sha256(jsonl)},
        },
        "quantity_rule": "Counts, serial positions, identifiers, containers, cabinet capacities, current aggregates and database rows remain separate namespaces.",
        "relationship_rule": "Relationship phrases are preserved as source claims and are not flattened into ownership or preparation attribution.",
        "reopening_policy": "Any new discovery or corrected attribution belongs to a later version/reopening and does not silently alter this export.",
        "frozen_membership_counts": frozen_report.get("counts", {}),
    }
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print(f"Exported frozen microscope-slide catalogue: {len(rows)} rows -> {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

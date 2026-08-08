#!/usr/bin/env python3
"""Prepare modular survey inputs before validation or harvesting.

The repository keeps a canonical 07A survey table and optional expansion batches
such as 07B, 07C, 07D, etc. This script merges every matching expansion batch in
the checked-out workspace so existing validators and harvesters can keep reading
the canonical file.

It also merges optional site-adapter expansion JSON files into the canonical
adapter registry. The script does not fetch remote data and does not commit the
merged runtime files back to the repository.
"""

from __future__ import annotations

import csv
import json
from pathlib import Path
from typing import Any

SURVEY_DIR = Path("data/survey")
CANONICAL_SURVEY = SURVEY_DIR / "07A_Global_Microscope_Slide_Collections_Survey.csv"
CANONICAL_ADAPTERS = SURVEY_DIR / "site_adapters.json"
PREP_REPORT = Path("outputs/prepare_survey_inputs.json")

SURVEY_EXPANSION_GLOB = "07*_Global_Microscope_Slide_Collections*.csv"
ADAPTER_EXPANSION_GLOB = "site_adapters_expansion_*.json"


def read_csv(path: Path) -> tuple[list[str], list[dict[str, str]]]:
    with path.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        if reader.fieldnames is None:
            raise ValueError(f"No CSV header: {path}")
        return list(reader.fieldnames), list(reader)


def write_csv(path: Path, fieldnames: list[str], rows: list[dict[str, str]]) -> None:
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)


def expansion_survey_paths() -> list[Path]:
    """Return every modular survey batch except the canonical 07A file."""
    return [
        path
        for path in sorted(SURVEY_DIR.glob(SURVEY_EXPANSION_GLOB))
        if path.resolve() != CANONICAL_SURVEY.resolve()
    ]


def merge_surveys() -> dict[str, Any]:
    fieldnames, rows = read_csv(CANONICAL_SURVEY)
    seen = {row["entry_id"] for row in rows}
    added: list[str] = []
    skipped_duplicates: list[str] = []
    sources: list[str] = []

    for path in expansion_survey_paths():
        sources.append(str(path))
        next_fields, next_rows = read_csv(path)
        if next_fields != fieldnames:
            raise ValueError(f"Header mismatch in {path}")
        for row in next_rows:
            entry_id = row["entry_id"]
            if entry_id in seen:
                skipped_duplicates.append(entry_id)
                continue
            rows.append(row)
            seen.add(entry_id)
            added.append(entry_id)

    write_csv(CANONICAL_SURVEY, fieldnames, rows)
    return {
        "canonical_survey": str(CANONICAL_SURVEY),
        "expansion_sources": sources,
        "added_rows": added,
        "skipped_duplicate_rows": skipped_duplicates,
        "total_rows_after_merge": len(rows),
    }


def merge_adapters() -> dict[str, Any]:
    registry = json.loads(CANONICAL_ADAPTERS.read_text(encoding="utf-8"))
    adapters = registry.setdefault("adapters", [])
    seen = {item.get("site_adapter") for item in adapters}
    added: list[str] = []
    skipped_duplicates: list[str] = []
    sources: list[str] = []

    for path in sorted(SURVEY_DIR.glob(ADAPTER_EXPANSION_GLOB)):
        sources.append(str(path))
        expansion = json.loads(path.read_text(encoding="utf-8"))
        for item in expansion.get("adapters", []):
            key = item.get("site_adapter")
            if not key:
                continue
            if key in seen:
                skipped_duplicates.append(key)
                continue
            adapters.append(item)
            seen.add(key)
            added.append(key)

    CANONICAL_ADAPTERS.write_text(json.dumps(registry, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return {
        "canonical_adapters": str(CANONICAL_ADAPTERS),
        "expansion_sources": sources,
        "added_adapters": added,
        "skipped_duplicate_adapters": skipped_duplicates,
        "total_adapters_after_merge": len(adapters),
    }


def main() -> int:
    PREP_REPORT.parent.mkdir(parents=True, exist_ok=True)
    report = {
        "schema_version": "slide-survey-prep-v2-modular-glob",
        "survey": merge_surveys(),
        "adapters": merge_adapters(),
    }
    PREP_REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(f"Prepared survey inputs. Report: {PREP_REPORT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

#!/usr/bin/env python3
"""Restrict the prepared runtime survey to CORE_19C entries.

Run only after `audit_19c_scope.py`. The full merged survey remains preserved in
Git history and in the audit outputs; this script rewrites the checked-out
runtime canonical CSV so downstream batch planning and harvesting see only
verified nineteenth-century entries.
"""

from __future__ import annotations

import csv
import json
from pathlib import Path

SURVEY_PATH = Path("data/survey/07A_Global_Microscope_Slide_Collections_Survey.csv")
ACTIVE_IDS_PATH = Path("data/normalized/scope_19c_active_ids.json")
FULL_SNAPSHOT_PATH = Path("outputs/full_merged_survey_before_19c_filter.csv")
FILTER_REPORT = Path("outputs/scope_19c_filter_report.json")


def main() -> int:
    if not ACTIVE_IDS_PATH.exists():
        raise FileNotFoundError("Run scripts/audit_19c_scope.py before applying the 19C filter")

    active = set(json.loads(ACTIVE_IDS_PATH.read_text(encoding="utf-8")).get("entry_ids", []))

    with SURVEY_PATH.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        fieldnames = list(reader.fieldnames or [])
        rows = list(reader)

    FULL_SNAPSHOT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with FULL_SNAPSHOT_PATH.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)

    kept = [row for row in rows if row.get("entry_id") in active]
    excluded = [row.get("entry_id", "") for row in rows if row.get("entry_id") not in active]

    with SURVEY_PATH.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(kept)

    FILTER_REPORT.write_text(
        json.dumps(
            {
                "schema_version": "slide-survey-19c-runtime-filter-v1",
                "rows_before_filter": len(rows),
                "core_19c_rows_after_filter": len(kept),
                "excluded_from_downstream_harvest": len(excluded),
                "excluded_entry_ids": excluded,
            },
            ensure_ascii=False,
            indent=2,
            sort_keys=True,
        )
        + "\n",
        encoding="utf-8",
    )

    print(f"19C runtime filter: {len(rows)} -> {len(kept)} active rows")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

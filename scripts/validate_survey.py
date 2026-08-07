#!/usr/bin/env python3
"""Validate the UK/US microscope-slide survey table.

This script is deliberately conservative. It checks that survey rows retain
relationship language and do not silently flatten ownership claims.
"""

from __future__ import annotations

import csv
import sys
from collections import Counter
from pathlib import Path

SURVEY_PATH = Path("data/survey/07A_UK_US_Microscope_Slide_Collections_Survey.csv")
REPORT_PATH = Path("outputs/run_report.md")

REQUIRED_COLUMNS = [
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
    "image_level",
    "label_visibility",
    "provenance_value",
    "automation_feasibility",
    "event_side_hooks",
    "exclude_reason",
    "notes",
]

ALLOWED_COUNTRIES = {"UK", "US"}
ALLOWED_PROVENANCE = {"A", "B", "C", "D"}
ALLOWED_AUTOMATION = {"manual only", "static HTML", "paginated HTML", "API", "downloadable finding aid", "IIIF", "blocked"}
RISK_TERMS = ("lantern slide", "photographic slide", "glass plate negative", "35mm slide")
OWNERSHIP_COLLAPSE_TERMS = ("owner", "owned by")
RELATIONSHIP_TERMS = (
    "prepared by",
    "mounted by",
    "collected by",
    "from the collection of",
    "belonging to",
    "donated by",
    "transferred from",
    "presented to",
    "lent by",
    "assembled by",
    "received by",
)


def load_rows(path: Path) -> list[dict[str, str]]:
    if not path.exists():
        raise FileNotFoundError(f"Survey table not found: {path}")
    with path.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        if reader.fieldnames != REQUIRED_COLUMNS:
            missing = [c for c in REQUIRED_COLUMNS if c not in (reader.fieldnames or [])]
            extra = [c for c in (reader.fieldnames or []) if c not in REQUIRED_COLUMNS]
            raise ValueError(f"Unexpected columns. Missing={missing}; extra={extra}")
        return list(reader)


def validate(rows: list[dict[str, str]]) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []
    ids = Counter(row["entry_id"] for row in rows)

    for entry_id, count in ids.items():
        if count > 1:
            errors.append(f"Duplicate entry_id: {entry_id}")

    for i, row in enumerate(rows, start=2):
        rid = row["entry_id"] or f"row {i}"
        if row["country"] not in ALLOWED_COUNTRIES:
            errors.append(f"{rid}: country must be UK or US, got {row['country']!r}")
        if row["provenance_value"] not in ALLOWED_PROVENANCE:
            errors.append(f"{rid}: provenance_value must be A/B/C/D, got {row['provenance_value']!r}")
        if row["automation_feasibility"] not in ALLOWED_AUTOMATION:
            errors.append(f"{rid}: unsupported automation_feasibility {row['automation_feasibility']!r}")

        joined = " ".join(row.values()).lower()
        if any(term in joined for term in RISK_TERMS) and not row["exclude_reason"]:
            warnings.append(f"{rid}: slide-media risk term present; add exclude_reason or clarify microscope-slide certainty.")

        relationship = row["relationship_phrase"].lower()
        if any(term in relationship for term in OWNERSHIP_COLLAPSE_TERMS):
            warnings.append(f"{rid}: avoid flattening relations into ownership; preserve source phrase.")
        if relationship and not any(term in relationship for term in RELATIONSHIP_TERMS):
            warnings.append(f"{rid}: relationship_phrase may need normalization or source-language preservation: {row['relationship_phrase']!r}")

        if row["automation_feasibility"] != "manual only" and not row["source_url"]:
            errors.append(f"{rid}: automated row lacks source_url")
        if row["provenance_value"] in {"A", "B"} and not (row["person_or_collection_name"] or row["physical_structure"] or row["stated_count"]):
            warnings.append(f"{rid}: A/B row should preserve person, count, or physical batch structure.")

    return errors, warnings


def write_report(rows: list[dict[str, str]], errors: list[str], warnings: list[str]) -> None:
    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    country_counts = Counter(row["country"] for row in rows)
    value_counts = Counter(row["provenance_value"] for row in rows)
    automation_counts = Counter(row["automation_feasibility"] for row in rows)

    lines = [
        "# Slide survey validation report",
        "",
        f"Rows: {len(rows)}",
        f"Countries: {dict(country_counts)}",
        f"Provenance values: {dict(value_counts)}",
        f"Automation feasibility: {dict(automation_counts)}",
        "",
        f"Errors: {len(errors)}",
    ]
    lines.extend(f"- {e}" for e in errors)
    lines.append("")
    lines.append(f"Warnings: {len(warnings)}")
    lines.extend(f"- {w}" for w in warnings)
    REPORT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    try:
        rows = load_rows(SURVEY_PATH)
        errors, warnings = validate(rows)
        write_report(rows, errors, warnings)
    except Exception as exc:  # noqa: BLE001
        print(f"VALIDATION FAILED: {exc}", file=sys.stderr)
        return 2

    print(f"Validated {len(rows)} rows. Report: {REPORT_PATH}")
    if warnings:
        print(f"Warnings: {len(warnings)}")
    if errors:
        print(f"Errors: {len(errors)}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

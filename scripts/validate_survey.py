#!/usr/bin/env python3
"""Validate the global microscope-slide survey table.

The survey is not a general ownership table. It keeps source relationship
phrases intact so that "belonging to", "prepared by", "mounted by",
"donated by", "lent by", and related statements are not flattened into one
ownership field.
"""

from __future__ import annotations

import csv
import re
import sys
from collections import Counter
from pathlib import Path
from typing import Any

SURVEY_PATH = Path("data/survey/07A_Global_Microscope_Slide_Collections_Survey.csv")
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
    "site_adapter",
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

ALLOWED_PROVENANCE = {"A", "B", "C", "D"}
ALLOWED_AUTOMATION = {
    "manual only",
    "static HTML",
    "paginated HTML",
    "API",
    "downloadable finding aid",
    "IIIF",
    "blocked",
}
ALLOWED_SITE_ADAPTERS = {
    "nhm_microscope_digitisation",
    "nhm_collection_static",
    "kew_collection_static",
    "kew_digitisation_static",
    "oumnh_project_static",
    "smg_object_type_search",
    "wellcome_work_static",
    "wellcome_search",
    "rms_quekett_manual",
    "oac_finding_aid",
    "smithsonian_search",
    "mczbase_manual",
    "cornell_candidate_manual",
    "powerhouse_object_static",
    "museums_victoria_object_static",
    "senckenberg_virmisco_static",
    "bsm_database_static",
    "naturalis_collection_static",
    "mnhn_deflandre_literature_manual",
    "dissco_method_static",
}
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
    "held by",
    "digitised by",
    "developed by",
    "produced by",
    "used by",
    "inscribed names",
    "part of",
    "hosted by",
)


def safe_text(value: Any) -> str:
    """Return a stable string for CSV cells and malformed extra-field lists."""
    if value is None:
        return ""
    if isinstance(value, list):
        return " | ".join(safe_text(v) for v in value)
    return str(value)


def is_valid_country_scope(value: str) -> bool:
    """Accept ISO-like country tags plus GLOBAL and multi-country tags.

    Examples: UK, US, DE, AU, NL, FR, GLOBAL, UK-US, FR/DE.
    The field is a survey scope marker rather than a diplomatic country name.
    """
    return bool(re.fullmatch(r"GLOBAL|[A-Z]{2,3}([-/][A-Z]{2,3})*", value))


def load_rows(path: Path) -> list[dict[str, Any]]:
    if not path.exists():
        raise FileNotFoundError(f"Survey table not found: {path}")
    with path.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        if reader.fieldnames != REQUIRED_COLUMNS:
            missing = [c for c in REQUIRED_COLUMNS if c not in (reader.fieldnames or [])]
            extra = [c for c in (reader.fieldnames or []) if c not in REQUIRED_COLUMNS]
            raise ValueError(f"Unexpected columns. Missing={missing}; extra={extra}")
        return list(reader)


def validate(rows: list[dict[str, Any]]) -> tuple[list[str], list[str]]:
    errors: list[str] = []
    warnings: list[str] = []

    ids = Counter(safe_text(row.get("entry_id")) for row in rows)
    for entry_id, count in ids.items():
        if count > 1:
            errors.append(f"Duplicate entry_id: {entry_id}")

    for i, row in enumerate(rows, start=2):
        rid = safe_text(row.get("entry_id")) or f"row {i}"

        if None in row:
            errors.append(f"{rid}: malformed CSV row has extra values beyond header: {safe_text(row[None])}")

        country = safe_text(row.get("country"))
        if not is_valid_country_scope(country):
            errors.append(f"{rid}: country must be ISO-like scope or GLOBAL, got {country!r}")
        if safe_text(row.get("provenance_value")) not in ALLOWED_PROVENANCE:
            errors.append(
                f"{rid}: provenance_value must be A/B/C/D, got {safe_text(row.get('provenance_value'))!r}"
            )
        if safe_text(row.get("automation_feasibility")) not in ALLOWED_AUTOMATION:
            errors.append(f"{rid}: unsupported automation_feasibility {safe_text(row.get('automation_feasibility'))!r}")
        if safe_text(row.get("site_adapter")) not in ALLOWED_SITE_ADAPTERS:
            errors.append(f"{rid}: unsupported site_adapter {safe_text(row.get('site_adapter'))!r}")

        joined = " ".join(safe_text(v) for v in row.values()).lower()
        if any(term in joined for term in RISK_TERMS) and not safe_text(row.get("exclude_reason")):
            warnings.append(f"{rid}: slide-media risk term present; add exclude_reason or clarify microscope-slide certainty.")

        relationship = safe_text(row.get("relationship_phrase")).lower()
        if any(term in relationship for term in OWNERSHIP_COLLAPSE_TERMS):
            warnings.append(f"{rid}: avoid flattening relations into ownership; preserve source phrase.")
        if relationship and not any(term in relationship for term in RELATIONSHIP_TERMS):
            warnings.append(
                f"{rid}: relationship_phrase may need normalization or source-language preservation: "
                f"{safe_text(row.get('relationship_phrase'))!r}"
            )

        if safe_text(row.get("automation_feasibility")) not in {"manual only", "blocked"} and not safe_text(row.get("source_url")):
            errors.append(f"{rid}: automated row lacks source_url")

        if safe_text(row.get("automation_feasibility")) == "manual only" and safe_text(row.get("site_adapter")).endswith("_search"):
            warnings.append(f"{rid}: manual-only row uses a search adapter name; use a *_manual adapter or enable harvesting.")

        if safe_text(row.get("provenance_value")) in {"A", "B"} and not (
            safe_text(row.get("person_or_collection_name"))
            or safe_text(row.get("physical_structure"))
            or safe_text(row.get("stated_count"))
        ):
            warnings.append(f"{rid}: A/B row should preserve person, count, or physical batch structure.")

        if "slide" not in safe_text(row.get("slide_certainty")).lower() and not safe_text(row.get("exclude_reason")):
            warnings.append(f"{rid}: slide_certainty does not explicitly say slide/slides.")

        if safe_text(row.get("provenance_value")) == "D" and not safe_text(row.get("exclude_reason")):
            warnings.append(f"{rid}: D-grade row should state why it is method-only, weak, or excluded.")

    return errors, warnings


def write_report(rows: list[dict[str, Any]], errors: list[str], warnings: list[str]) -> None:
    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    country_counts = Counter(safe_text(row.get("country")) for row in rows)
    value_counts = Counter(safe_text(row.get("provenance_value")) for row in rows)
    automation_counts = Counter(safe_text(row.get("automation_feasibility")) for row in rows)
    adapter_counts = Counter(safe_text(row.get("site_adapter")) for row in rows)

    lines = [
        "# Slide survey validation report",
        "",
        f"Rows: {len(rows)}",
        f"Countries/scopes: {dict(country_counts)}",
        f"Provenance values: {dict(value_counts)}",
        f"Automation feasibility: {dict(automation_counts)}",
        f"Site adapters: {dict(adapter_counts)}",
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

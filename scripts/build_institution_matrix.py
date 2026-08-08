#!/usr/bin/env python3
"""Build a one-click Actions matrix for institution-specific slide harvesting."""

from __future__ import annotations

import argparse
import csv
import json
import re
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlparse

SURVEY = Path("data/survey/07A_Global_Microscope_Slide_Collections_Survey.csv")
ACTIVE = Path("data/normalized/scope_19c_active_ids.json")
PROFILES = Path("data/survey/institution_harvest_profiles.json")
OUT = Path("outputs/institution_harvest_matrix.json")
SKIP_AUTOMATION = {"manual only", "blocked"}


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-") or "institution"


def load_rows() -> list[dict[str, str]]:
    with SURVEY.open(newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def load_active() -> set[str]:
    if not ACTIVE.exists():
        return set()
    payload = json.loads(ACTIVE.read_text(encoding="utf-8"))
    return set(payload.get("entry_ids", []))


def host_of(url: str) -> str:
    try:
        return urlparse(url).hostname or ""
    except Exception:
        return ""


def choose_profile(institution: str, rows: list[dict[str, str]], profiles: dict[str, dict]) -> str:
    for key, profile in profiles.items():
        if profile.get("fallback"):
            continue
        if any(re.search(pat, institution, flags=re.I) for pat in profile.get("institution_patterns", [])):
            return key
        hosts = set(profile.get("match_hosts", []))
        if hosts and any(host_of(row.get("source_url", "")) in hosts for row in rows):
            return key

    automations = {row.get("automation_feasibility", "") for row in rows}
    if automations & {"API", "IIIF"}:
        return "generic_structured"
    if "paginated HTML" in automations:
        return "generic_catalogue"
    if "downloadable finding aid" in automations:
        return "generic_document"
    return "generic_seed"


def bundle_match(bundle: str, institution: str, profile: dict, rows: list[dict[str, str]]) -> bool:
    if bundle == "all-automatable":
        return True
    if bundle == "high-yield":
        return "high-yield" in profile.get("tags", [])
    if bundle == "uk-high-yield":
        return "high-yield" in profile.get("tags", []) and any(row.get("country") == "UK" for row in rows)

    text = " ".join([
        institution,
        *[row.get("collection_title_or_search_entry", "") for row in rows],
        *[row.get("subject_scope", "") for row in rows],
        *[row.get("person_or_collection_name", "") for row in rows],
    ]).lower()
    if bundle == "diatoms":
        return "diatom" in text
    if bundle == "medical-histology":
        return bool(re.search(r"histolog|patholog|anatom|medical|dental|embryolog|neurol|malaria", text))
    if bundle == "geology-petrology":
        return bool(re.search(r"petrograph|geolog|thin[- ]section|mineral|rock|palaeobot|fossil wood", text))
    return False


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--bundle", default="high-yield", choices=[
        "high-yield", "all-automatable", "uk-high-yield", "diatoms",
        "medical-histology", "geology-petrology", "single",
    ])
    parser.add_argument("--institution-key", default="")
    parser.add_argument("--github-output", default="")
    args = parser.parse_args()

    cfg = json.loads(PROFILES.read_text(encoding="utf-8"))
    profiles = cfg["profiles"]
    rows = load_rows()
    active = load_active()
    if active:
        rows = [row for row in rows if row.get("entry_id") in active]

    grouped: dict[str, list[dict[str, str]]] = defaultdict(list)
    names: dict[str, str] = {}
    for row in rows:
        if row.get("automation_feasibility", "") in SKIP_AUTOMATION:
            continue
        institution = row.get("institution_current", "").strip()
        if not institution:
            continue
        key = slugify(institution)
        grouped[key].append(row)
        names[key] = institution

    include = []
    for key in sorted(grouped):
        institution = names[key]
        inst_rows = grouped[key]
        profile_key = choose_profile(institution, inst_rows, profiles)
        profile = profiles[profile_key]
        if args.bundle == "single":
            if key != args.institution_key:
                continue
        elif not bundle_match(args.bundle, institution, profile, inst_rows):
            continue
        include.append({
            "institution_key": key,
            "institution": institution,
            "profile": profile_key,
            "row_count": len(inst_rows),
        })

    payload = {
        "schema_version": "slide-survey-institution-matrix-v1",
        "bundle": args.bundle,
        "active_strict_only": bool(active),
        "institution_count": len(include),
        "include": include,
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    matrix = json.dumps({"include": include}, ensure_ascii=False, separators=(",", ":"))
    print(matrix)
    if args.github_output:
        with Path(args.github_output).open("a", encoding="utf-8") as f:
            f.write(f"matrix={matrix}\n")
            f.write(f"institution_count={len(include)}\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

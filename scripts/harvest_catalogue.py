#!/usr/bin/env python3
"""Custom metadata harvest for UK/US microscope-slide survey entries.

This is not a universal crawler. It is a registry-driven set of small site
adapters for known collection entrances. Each adapter preserves collection-
scale evidence: counts, collection names, relationship phrases, source URLs,
object-page patterns, physical structure, and warning flags.

Safety limits:
- dry-run is the default;
- full mode fetches public metadata HTML/text only;
- no login, paywall, anti-bot, robots, IIIF image, or bulk-image bypass;
- every fetched page is capped at MAX_BYTES;
- failed fetches are written into the plan rather than hidden.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import html
import json
import re
import time
import urllib.error
import urllib.request
from collections.abc import Iterable
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

SURVEY_PATH = Path("data/survey/07A_UK_US_Microscope_Slide_Collections_Survey.csv")
RAW_DIR = Path("data/raw/catalogue_pages")
NORMALIZED_DIR = Path("data/normalized")
REPORT_PATH = Path("outputs/harvest_plan.json")
REGISTRY_PATH = Path("outputs/adapter_registry_snapshot.json")

USER_AGENT = "Blachka-corpus-slide-survey/0.2 (+site-adapter metadata-only; no image bulk download)"
SKIP_AUTOMATION = {"manual only", "blocked"}
MAX_BYTES = 2_000_000


@dataclass(frozen=True)
class Adapter:
    key: str
    label: str
    expected_terms: tuple[str, ...]
    item_url_pattern: str = ""
    notes: str = ""


ADAPTERS: dict[str, Adapter] = {
    "smg_object_type_search": Adapter(
        key="smg_object_type_search",
        label="Science Museum Group object_type microscope-slide search",
        expected_terms=("microscope slide", "object", "maker", "date"),
        item_url_pattern="collection.sciencemuseumgroup.org.uk/objects/{object_id}",
        notes="Use for SMG object-type result pages; promote maker/date clusters, not mere item existence.",
    ),
    "wellcome_work_static": Adapter(
        key="wellcome_work_static",
        label="Wellcome static work page",
        expected_terms=("Timothy Lewis", "microscope slides", "belonging to", "Wellcome"),
        item_url_pattern="wellcomecollection.org/works/{work_id}",
        notes="Use for single Wellcome work pages where the relationship phrase itself matters.",
    ),
    "wellcome_search": Adapter(
        key="wellcome_search",
        label="Wellcome microscope-slide search",
        expected_terms=("microscope slides", "works", "Wellcome"),
        item_url_pattern="wellcomecollection.org/works/{work_id}",
        notes="Use for broad Wellcome search pages; filter photographic and lantern-slide noise before promotion.",
    ),
    "nhm_collections_landing_manual": Adapter(
        key="nhm_collections_landing_manual",
        label="NHM London manual landing-page target",
        expected_terms=("collection", "specimen", "microscope"),
        notes="Manual placeholder until a stable catalogue endpoint is fixed.",
    ),
    "rms_quekett_manual": Adapter(
        key="rms_quekett_manual",
        label="RMS/Quekett manual archive target",
        expected_terms=("microscope slides", "Quekett", "Royal Microscopical Society"),
        notes="Object-side endpoint not fixed; local corpus currently supplies stronger event-side evidence.",
    ),
    "oac_finding_aid": Adapter(
        key="oac_finding_aid",
        label="Online Archive of California finding aid",
        expected_terms=("Hartshorn-Bolles", "microscope slides", "wooden cabinet", "50 drawers", "Bolles", "Hartshorn"),
        item_url_pattern="oac.cdlib.org/findaid/ark:/{ark}",
        notes="Collection-scale finding aid; count and physical cabinet structure are more important than thin items.",
    ),
    "smithsonian_search": Adapter(
        key="smithsonian_search",
        label="Smithsonian collections search",
        expected_terms=("microscope slide", "Smithsonian", "collection"),
        item_url_pattern="collections.si.edu/search/detail/{unit_code}_{id}",
        notes="Broad search adapter; must filter photographic slides and unrelated slide media.",
    ),
    "mczbase_manual": Adapter(
        key="mczbase_manual",
        label="Harvard MCZbase manual target",
        expected_terms=("MCZ", "microscope slide", "specimen"),
        notes="Manual placeholder until stable MCZbase query shape is selected.",
    ),
    "cornell_candidate_manual": Adapter(
        key="cornell_candidate_manual",
        label="Cornell candidate manual target",
        expected_terms=("microscope slide", "teaching", "biology"),
        notes="Candidate only; needs a specific collection/finding-aid URL before automation.",
    ),
}


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "entry"


def safe_text(value: Any) -> str:
    if value is None:
        return ""
    if isinstance(value, list):
        return " | ".join(safe_text(v) for v in value)
    return str(value)


def load_rows() -> list[dict[str, str]]:
    with SURVEY_PATH.open(newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def iter_harvestable(rows: Iterable[dict[str, str]], entry_ids: set[str], adapters: set[str]) -> Iterable[dict[str, str]]:
    for row in rows:
        if entry_ids and row.get("entry_id") not in entry_ids:
            continue
        if adapters and row.get("site_adapter") not in adapters:
            continue
        yield row


def fetch_url(url: str) -> tuple[bytes, str]:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=30) as resp:  # noqa: S310 - public metadata fetcher
        content_type = resp.headers.get("content-type", "")
        body = resp.read(MAX_BYTES)
    return body, content_type


def html_to_text(raw: str) -> str:
    raw = re.sub(r"(?is)<script.*?</script>", " ", raw)
    raw = re.sub(r"(?is)<style.*?</style>", " ", raw)
    raw = re.sub(r"(?is)<[^>]+>", " ", raw)
    raw = html.unescape(raw)
    raw = re.sub(r"\s+", " ", raw)
    return raw.strip()


def extract_title(raw: str) -> str:
    match = re.search(r"(?is)<title[^>]*>(.*?)</title>", raw)
    if not match:
        return ""
    return html_to_text(match.group(1))


def extract_urls(raw: str, source_url: str) -> list[str]:
    hrefs = re.findall(r"(?i)href=[\"']([^\"']+)[\"']", raw)
    urls: list[str] = []
    for href in hrefs:
        if href.startswith("#") or href.lower().startswith(("javascript:", "mailto:")):
            continue
        if href.startswith("/"):
            base = re.match(r"^(https?://[^/]+)", source_url)
            if base:
                href = base.group(1) + href
        urls.append(href)
    seen: set[str] = set()
    out: list[str] = []
    for url in urls:
        if url not in seen:
            seen.add(url)
            out.append(url)
    return out[:200]


def find_term_hits(text: str, expected_terms: Iterable[str]) -> tuple[list[str], list[str]]:
    text_lower = text.lower()
    found: list[str] = []
    missing: list[str] = []
    for term in expected_terms:
        if term.lower() in text_lower:
            found.append(term)
        else:
            missing.append(term)
    return found, missing


def count_candidates(text: str) -> list[str]:
    patterns = [
        r"\b(?:about|approximately|approx\.?|c\.|circa)\s+[\d,]+\b",
        r"\b[\d,]+\s+(?:microscope slides|slides|specimens|objects|drawers|cabinets)\b",
        r"\b(?:one|two|three|four|five|six|seven|eight|nine|ten|fifty)\s+(?:drawers|cabinets|slides|objects)\b",
    ]
    candidates: list[str] = []
    for pattern in patterns:
        candidates.extend(re.findall(pattern, text, flags=re.I))
    seen: set[str] = set()
    out: list[str] = []
    for cand in candidates:
        normal = " ".join(cand.split())
        if normal.lower() not in seen:
            seen.add(normal.lower())
            out.append(normal)
    return out[:20]


def classify_media_risks(text: str) -> list[str]:
    risks = []
    text_lower = text.lower()
    for risk in ("lantern slide", "photographic slide", "glass plate negative", "35mm slide"):
        if risk in text_lower:
            risks.append(risk)
    return risks


def build_record(row: dict[str, str], raw_text: str, body: bytes, content_type: str, fetched_utc: str) -> dict[str, Any]:
    adapter = ADAPTERS[row["site_adapter"]]
    text = html_to_text(raw_text)
    found, missing = find_term_hits(text, adapter.expected_terms)
    urls = extract_urls(raw_text, row.get("source_url", ""))

    return {
        "schema_version": "slide-survey-site-adapter-record-v1",
        "entry_id": row.get("entry_id"),
        "country": row.get("country"),
        "institution_current": row.get("institution_current"),
        "collection_title_or_search_entry": row.get("collection_title_or_search_entry"),
        "source_type": row.get("source_type"),
        "source_url": row.get("source_url"),
        "site_adapter": adapter.key,
        "adapter_label": adapter.label,
        "adapter_notes": adapter.notes,
        "item_url_pattern": adapter.item_url_pattern or row.get("stable_id_pattern"),
        "relationship_phrase": row.get("relationship_phrase"),
        "person_or_collection_name": row.get("person_or_collection_name"),
        "slide_certainty": row.get("slide_certainty"),
        "stated_count": row.get("stated_count"),
        "harvestable_item_count": row.get("harvestable_item_count"),
        "date_range": row.get("date_range"),
        "subject_scope": row.get("subject_scope"),
        "physical_structure": row.get("physical_structure"),
        "label_visibility": row.get("label_visibility"),
        "provenance_value": row.get("provenance_value"),
        "automation_feasibility": row.get("automation_feasibility"),
        "event_side_hooks": row.get("event_side_hooks"),
        "content_type": content_type,
        "byte_length": len(body),
        "source_sha256": hashlib.sha256(body).hexdigest(),
        "fetched_utc": fetched_utc,
        "extracted_title": extract_title(raw_text),
        "adapter_expected_terms_found": found,
        "adapter_expected_terms_missing": missing,
        "count_candidates": count_candidates(text),
        "media_risk_terms_found": classify_media_risks(text),
        "sample_urls": urls[:25],
        "text_sample": text[:4000],
    }


def build_plan_record(row: dict[str, str], mode: str, fetched_utc: str) -> dict[str, Any]:
    adapter = ADAPTERS.get(row.get("site_adapter", ""))
    automation = row.get("automation_feasibility", "")
    source_url = row.get("source_url", "")
    if automation in SKIP_AUTOMATION:
        action = "skip_manual_or_blocked"
    elif not source_url:
        action = "skip_missing_source_url"
    elif mode == "dry-run":
        action = "would_fetch_with_site_adapter"
    else:
        action = "fetch_with_site_adapter"

    return {
        "entry_id": row.get("entry_id"),
        "country": row.get("country"),
        "institution_current": row.get("institution_current"),
        "collection_title_or_search_entry": row.get("collection_title_or_search_entry"),
        "source_url": source_url,
        "automation_feasibility": automation,
        "site_adapter": row.get("site_adapter"),
        "adapter_label": adapter.label if adapter else "",
        "mode": mode,
        "action": action,
        "fetched_utc": fetched_utc,
    }


def write_json(path: Path, obj: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def write_jsonl(path: Path, records: list[dict[str, Any]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        for rec in records:
            f.write(json.dumps(rec, ensure_ascii=False, sort_keys=True) + "\n")


def parse_csv_set(values: list[str] | None) -> set[str]:
    out: set[str] = set()
    for value in values or []:
        for part in value.split(","):
            part = part.strip()
            if part:
                out.add(part)
    return out


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--mode", choices=["dry-run", "full"], default="dry-run")
    parser.add_argument("--delay", type=float, default=2.0)
    parser.add_argument("--entry-id", action="append", help="Limit to one or more entry_id values. Comma-separated values are accepted.")
    parser.add_argument("--adapter", action="append", help="Limit to one or more site_adapter keys. Comma-separated values are accepted.")
    parser.add_argument("--fail-on-fetch-error", action="store_true")
    args = parser.parse_args()

    rows = load_rows()
    entry_ids = parse_csv_set(args.entry_id)
    adapters = parse_csv_set(args.adapter)
    selected = list(iter_harvestable(rows, entry_ids, adapters))
    now = datetime.now(timezone.utc).isoformat()

    RAW_DIR.mkdir(parents=True, exist_ok=True)
    NORMALIZED_DIR.mkdir(parents=True, exist_ok=True)

    plan: list[dict[str, Any]] = []
    collection_records: list[dict[str, Any]] = []
    fetch_errors = 0

    for row in selected:
        plan_record = build_plan_record(row, args.mode, now)
        plan.append(plan_record)

        if plan_record["action"] != "fetch_with_site_adapter":
            continue

        try:
            body, content_type = fetch_url(row["source_url"])
            sha256 = hashlib.sha256(body).hexdigest()
            raw_path = RAW_DIR / f"{slugify(row['entry_id'])}.html"
            raw_path.write_bytes(body)
            raw_text = body.decode("utf-8", errors="replace")
            record = build_record(row, raw_text, body, content_type, now)
            record["raw_path"] = str(raw_path)
            collection_records.append(record)
            plan_record.update(
                {
                    "action": "fetched_with_site_adapter",
                    "content_type": content_type,
                    "byte_length": len(body),
                    "source_sha256": sha256,
                    "raw_path": str(raw_path),
                }
            )
        except urllib.error.HTTPError as exc:
            fetch_errors += 1
            plan_record.update({"action": "fetch_failed", "error": f"HTTP {exc.code}"})
        except Exception as exc:  # noqa: BLE001
            fetch_errors += 1
            plan_record.update({"action": "fetch_failed", "error": repr(exc)})

        time.sleep(max(args.delay, 0))

    registry = {
        "schema_version": "slide-survey-site-adapter-registry-v1",
        "adapters": {
            key: {
                "label": adapter.label,
                "expected_terms": list(adapter.expected_terms),
                "item_url_pattern": adapter.item_url_pattern,
                "notes": adapter.notes,
            }
            for key, adapter in ADAPTERS.items()
        },
    }

    write_json(REPORT_PATH, plan)
    write_json(REGISTRY_PATH, registry)
    write_jsonl(NORMALIZED_DIR / "collections_seed.jsonl", collection_records)

    print(f"Mode: {args.mode}")
    print(f"Rows: {len(rows)}; selected: {len(selected)}; fetched records: {len(collection_records)}")
    print(f"Plan: {REPORT_PATH}")
    print(f"Adapter registry: {REGISTRY_PATH}")
    if fetch_errors and args.fail_on_fetch_error:
        print(f"Fetch errors: {fetch_errors}")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

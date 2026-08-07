#!/usr/bin/env python3
"""Dry-run or conservative HTML harvest for microscope-slide survey entries.

This script is intentionally narrow:
- It reads the survey CSV.
- It skips manual-only, blocked, and rows without URLs.
- In dry-run mode it writes a plan only.
- In full mode it fetches HTML/text metadata pages only, never bulk images.
- It does not bypass login, paywalls, anti-bot checks, robots controls, or IIIF image delivery.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable

SURVEY_PATH = Path("data/survey/07A_UK_US_Microscope_Slide_Collections_Survey.csv")
RAW_DIR = Path("data/raw/catalogue_pages")
NORMALIZED_DIR = Path("data/normalized")
REPORT_PATH = Path("outputs/harvest_plan.json")

USER_AGENT = "Blachka-corpus-slide-survey/0.1 (+metadata-only; no image bulk download)"
SKIP_AUTOMATION = {"manual only", "blocked"}
TEXT_EXTENSIONS = {".html", ".htm", ".txt", ".json", ".xml"}


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "entry"


def load_rows() -> list[dict[str, str]]:
    with SURVEY_PATH.open(newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def iter_harvestable(rows: Iterable[dict[str, str]]) -> Iterable[dict[str, str]]:
    for row in rows:
        if row.get("automation_feasibility") in SKIP_AUTOMATION:
            continue
        if not row.get("source_url"):
            continue
        yield row


def fetch_url(url: str) -> tuple[bytes, str]:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=30) as resp:  # noqa: S310 - explicit public metadata fetcher
        content_type = resp.headers.get("content-type", "")
        body = resp.read(2_000_000)
    return body, content_type


def write_jsonl(path: Path, records: list[dict[str, object]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        for rec in records:
            f.write(json.dumps(rec, ensure_ascii=False, sort_keys=True) + "\n")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--mode", choices=["dry-run", "full"], default="dry-run")
    parser.add_argument("--delay", type=float, default=2.0)
    args = parser.parse_args()

    rows = load_rows()
    harvestable = list(iter_harvestable(rows))
    now = datetime.now(timezone.utc).isoformat()

    plan: list[dict[str, object]] = []
    collection_records: list[dict[str, object]] = []

    RAW_DIR.mkdir(parents=True, exist_ok=True)
    NORMALIZED_DIR.mkdir(parents=True, exist_ok=True)

    for row in harvestable:
        entry_id = row["entry_id"]
        url = row["source_url"]
        record: dict[str, object] = {
            "entry_id": entry_id,
            "country": row.get("country"),
            "institution_current": row.get("institution_current"),
            "collection_title_or_search_entry": row.get("collection_title_or_search_entry"),
            "source_url": url,
            "automation_feasibility": row.get("automation_feasibility"),
            "mode": args.mode,
            "fetched_utc": now,
        }

        if args.mode == "dry-run":
            record["action"] = "would_fetch_metadata_page"
            plan.append(record)
            continue

        try:
            body, content_type = fetch_url(url)
            sha256 = hashlib.sha256(body).hexdigest()
            out = RAW_DIR / f"{slugify(entry_id)}.bin"
            if any(url.lower().split("?")[0].endswith(ext) for ext in TEXT_EXTENSIONS) or "text" in content_type or "html" in content_type or "json" in content_type or "xml" in content_type:
                out = RAW_DIR / f"{slugify(entry_id)}.html"
            out.write_bytes(body)
            record.update(
                {
                    "action": "fetched_metadata_page",
                    "content_type": content_type,
                    "byte_length": len(body),
                    "sha256": sha256,
                    "raw_path": str(out),
                }
            )
            text_sample = body[:4000].decode("utf-8", errors="replace")
            collection_records.append(
                {
                    "entry_id": entry_id,
                    "country": row.get("country"),
                    "institution_current": row.get("institution_current"),
                    "collection_title_or_search_entry": row.get("collection_title_or_search_entry"),
                    "source_url": url,
                    "relationship_phrase": row.get("relationship_phrase"),
                    "slide_certainty": row.get("slide_certainty"),
                    "stated_count": row.get("stated_count"),
                    "physical_structure": row.get("physical_structure"),
                    "source_sha256": sha256,
                    "text_sample": text_sample,
                }
            )
        except urllib.error.HTTPError as exc:
            record.update({"action": "fetch_failed", "error": f"HTTP {exc.code}"})
        except Exception as exc:  # noqa: BLE001
            record.update({"action": "fetch_failed", "error": repr(exc)})
        plan.append(record)
        time.sleep(max(args.delay, 0))

    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    REPORT_PATH.write_text(json.dumps(plan, ensure_ascii=False, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    write_jsonl(NORMALIZED_DIR / "collections_seed.jsonl", collection_records)

    print(f"Mode: {args.mode}")
    print(f"Rows: {len(rows)}; harvestable: {len(harvestable)}")
    print(f"Plan: {REPORT_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

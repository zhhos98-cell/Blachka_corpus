#!/usr/bin/env python3
"""Read-only structural checks for derived/public data.

The validator does not rewrite research records. It checks relationships between
canonical data, derived payloads, and public/archived file placement.
"""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def main() -> None:
    canonical_path = ROOT / "people" / "people-data.json"
    ui_path = ROOT / "people" / "people-ui.json"
    canonical = load(canonical_path)
    ui = load(ui_path)

    records = canonical.get("records", [])
    if canonical.get("record_count") != len(records):
        raise SystemExit("People canonical record_count does not match records length")
    if len(ui.get("records", [])) != len(records):
        raise SystemExit("People UI record count does not match canonical data")

    stale_public = list((ROOT / "people").glob("people-part-*.json"))
    if stale_public or (ROOT / "people" / "people-records.json").exists():
        raise SystemExit("Legacy People shards remain in the public data directory")

    archive_register = load(ROOT / "sources" / "global-archive-register.json")
    ids = [entry.get("id") for entry in archive_register.get("entries", [])]
    if len(ids) != len(set(ids)):
        raise SystemExit("Duplicate IDs in global archive register")

    for path in (ROOT / "sources").glob("*.json"):
        load(path)

    print(f"People canonical/UI records: {len(records)}")
    print(f"Global archive register entries: {len(ids)}")
    print("Public JSON structural checks: OK")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Build the public People payload from the canonical authority dataset.

This script is intentionally one-way: it reads people/people-data.json and writes
people/people-ui.json. It never mutates the canonical source.
"""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "people" / "people-data.json"
OUTPUT = ROOT / "people" / "people-ui.json"
UI_FIELDS = (
    "slug",
    "name",
    "sort",
    "aka",
    "dates",
    "group",
    "roles",
    "bio",
    "open",
    "project",
    "external",
)
EMPTY = (None, "", [], {})


def main() -> None:
    full = json.loads(SOURCE.read_text(encoding="utf-8"))
    records = full.get("records", [])
    declared = full.get("record_count")
    if declared is not None and declared != len(records):
        raise SystemExit(
            f"Canonical record_count={declared} but records contains {len(records)} entries"
        )

    projected = []
    for record in records:
        slim = {key: record.get(key) for key in UI_FIELDS if record.get(key) not in EMPTY}
        projected.append(slim)

    if len(projected) != len(records):
        raise SystemExit("People projection lost records")

    payload = {"groups": full.get("groups", {}), "records": projected}
    OUTPUT.write_text(
        json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + "\n",
        encoding="utf-8",
    )
    print(f"people-data.json: {len(records)} records")
    print(f"people-ui.json: {OUTPUT.stat().st_size} bytes")


if __name__ == "__main__":
    main()

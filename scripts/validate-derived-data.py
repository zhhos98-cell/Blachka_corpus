#!/usr/bin/env python3
"""Read-only structural checks for derived/public data.

The validator does not rewrite research records. It checks relationships between
canonical data, derived payloads, manifests, and public/archived file placement.
"""

from __future__ import annotations

import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


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

    sources_dir = ROOT / "sources"
    archive_register = load(sources_dir / "global-archive-register.json")
    ids = [entry.get("id") for entry in archive_register.get("entries", [])]
    if len(ids) != len(set(ids)):
        raise SystemExit("Duplicate IDs in global archive register")
    if archive_register.get("entry_count") != len(archive_register.get("entries", [])):
        raise SystemExit("Global archive register entry_count does not match entries length")

    source_json = sorted(sources_dir.glob("*.json"))
    for path in source_json:
        load(path)

    manifest_path = sources_dir / "register-manifest.json"
    if not manifest_path.exists():
        raise SystemExit("Source register manifest is missing")
    manifest = load(manifest_path)
    actual_registers = sorted(path.name for path in sources_dir.glob("*-register.json"))
    manifest_rows = manifest.get("registers", [])
    manifest_paths = [row.get("path") for row in manifest_rows]
    if manifest.get("register_count") != len(actual_registers):
        raise SystemExit("Source register manifest count does not match current files")
    if manifest_paths != actual_registers:
        raise SystemExit("Source register manifest paths do not match current files")

    for row in manifest_rows:
        path = sources_dir / row["path"]
        if row.get("bytes") != path.stat().st_size:
            raise SystemExit(f"Manifest byte count is stale for {path.name}")
        if row.get("sha256") != sha256(path):
            raise SystemExit(f"Manifest checksum is stale for {path.name}")

    print(f"People canonical/UI records: {len(records)}")
    print(f"Global archive register entries: {len(ids)}")
    print(f"Source register manifest entries: {len(actual_registers)}")
    print("Public JSON structural checks: OK")


if __name__ == "__main__":
    main()

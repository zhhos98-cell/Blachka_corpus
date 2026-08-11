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


def validate_manifest(directory: Path, manifest_name: str, glob_pattern: str, rows_key: str, count_key: str) -> int:
    manifest_path = directory / manifest_name
    if not manifest_path.exists():
        raise SystemExit(f"Manifest is missing: {manifest_path.relative_to(ROOT)}")
    manifest = load(manifest_path)
    actual = sorted(
        path.name
        for path in directory.glob(glob_pattern)
        if path.name != manifest_name
    )
    rows = manifest.get(rows_key, [])
    paths = [row.get("path") for row in rows]
    if manifest.get(count_key) != len(actual):
        raise SystemExit(f"Manifest count does not match current files: {manifest_name}")
    if paths != actual:
        raise SystemExit(f"Manifest paths do not match current files: {manifest_name}")
    for row in rows:
        path = directory / row["path"]
        if row.get("bytes") != path.stat().st_size:
            raise SystemExit(f"Manifest byte count is stale for {path}")
        if row.get("sha256") != sha256(path):
            raise SystemExit(f"Manifest checksum is stale for {path}")
    return len(actual)


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

    for path in sorted(sources_dir.glob("*.json")):
        load(path)
    source_count = validate_manifest(
        sources_dir,
        "register-manifest.json",
        "*-register.json",
        "registers",
        "register_count",
    )

    auctions_dir = ROOT / "auctions"
    auction_data = load(auctions_dir / "auction-data.json")
    auction_ids = [record.get("record_id") for record in auction_data.get("records", [])]
    if len(auction_ids) != len(set(auction_ids)):
        raise SystemExit("Duplicate record_id values in canonical auction-data.json")
    for path in sorted(auctions_dir.glob("*.json")):
        load(path)
    auction_count = validate_manifest(
        auctions_dir,
        "data-manifest.json",
        "*.json",
        "files",
        "file_count",
    )

    print(f"People canonical/UI records: {len(records)}")
    print(f"Global archive register entries: {len(ids)}")
    print(f"Source register manifest entries: {source_count}")
    print(f"Auction JSON manifest entries: {auction_count}")
    print("Public JSON structural checks: OK")


if __name__ == "__main__":
    main()

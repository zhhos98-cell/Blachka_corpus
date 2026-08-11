#!/usr/bin/env python3
"""Build deterministic structural manifests for Sources and Auctions.

This script inventories file shape, checksums and non-evidentiary metadata only.
It never rewrites evidence-bearing Source or Auction records.
"""

from __future__ import annotations

import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def generated_value(payload: dict):
    return next(
        (
            payload.get(key)
            for key in ("generated_date", "generated", "updated")
            if isinstance(payload.get(key), str)
        ),
        None,
    )


def row_for(path: Path, role: str) -> dict:
    payload = json.loads(path.read_text(encoding="utf-8"))
    row = {
        "path": path.name,
        "role": role,
        "bytes": path.stat().st_size,
        "sha256": sha256(path),
        "top_level_keys": sorted(payload.keys()),
        "list_fields": {
            key: len(value)
            for key, value in payload.items()
            if isinstance(value, list)
        },
    }
    if payload.get("schema_version") is not None:
        row["schema_version"] = str(payload["schema_version"])
    if isinstance(payload.get("title"), str):
        row["title"] = payload["title"]
    generated = generated_value(payload)
    if generated:
        row["generated"] = generated
    return row


def write_manifest(output: Path, payload: dict) -> None:
    output.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def build_sources() -> int:
    directory = ROOT / "sources"
    rows = [
        row_for(
            path,
            "cross_institution_canonical" if path.name == "global-archive-register.json" else "topic_register",
        )
        for path in sorted(directory.glob("*-register.json"))
    ]
    write_manifest(
        directory / "register-manifest.json",
        {
            "schema_version": "1.0.0",
            "purpose": "Structural inventory of current public Source registers. Checksums and shapes are descriptive; evidence values remain in the registers themselves.",
            "register_count": len(rows),
            "registers": rows,
        },
    )
    return len(rows)


def build_auctions() -> int:
    directory = ROOT / "auctions"
    output = directory / "data-manifest.json"
    rows = [
        row_for(
            path,
            "canonical_auction_table" if path.name == "auction-data.json" else "supporting_research_layer",
        )
        for path in sorted(directory.glob("*.json"))
        if path.name != output.name
    ]
    write_manifest(
        output,
        {
            "schema_version": "1.0.0",
            "purpose": "Structural inventory of the Auction provenance JSON layer. Only auction-data.json is canonical lot data; other JSON files retain their separate research/audit roles.",
            "file_count": len(rows),
            "files": rows,
        },
    )
    return len(rows)


def main() -> None:
    source_count = build_sources()
    auction_count = build_auctions()
    print(f"Source register manifest: {source_count} files")
    print(f"Auction data manifest: {auction_count} files")


if __name__ == "__main__":
    main()

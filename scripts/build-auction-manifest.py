#!/usr/bin/env python3
"""Build a deterministic structural manifest for Auction JSON layers.

`auction-data.json` is the canonical lot table. Other JSON files remain supporting
research layers as documented by auctions/README.md. This script inventories
shape/checksums only and never rewrites auction evidence.
"""

from __future__ import annotations

import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
AUCTIONS = ROOT / "auctions"
OUTPUT = AUCTIONS / "data-manifest.json"


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main() -> None:
    rows = []
    for path in sorted(AUCTIONS.glob("*.json")):
        if path.name == OUTPUT.name:
            continue
        payload = json.loads(path.read_text(encoding="utf-8"))
        list_fields = {
            key: len(value)
            for key, value in payload.items()
            if isinstance(value, list)
        }
        row = {
            "path": path.name,
            "role": "canonical_auction_table" if path.name == "auction-data.json" else "supporting_research_layer",
            "bytes": path.stat().st_size,
            "sha256": sha256(path),
            "top_level_keys": sorted(payload.keys()),
            "list_fields": list_fields,
        }
        if payload.get("schema_version") is not None:
            row["schema_version"] = str(payload["schema_version"])
        if isinstance(payload.get("title"), str):
            row["title"] = payload["title"]
        generated = next(
            (
                payload.get(key)
                for key in ("generated_date", "generated", "updated")
                if isinstance(payload.get(key), str)
            ),
            None,
        )
        if generated:
            row["generated"] = generated
        rows.append(row)

    manifest = {
        "schema_version": "1.0.0",
        "purpose": "Structural inventory of the Auction provenance JSON layer. Only auction-data.json is canonical lot data; other JSON files retain their separate research/audit roles.",
        "file_count": len(rows),
        "files": rows,
    }
    OUTPUT.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Auction data manifest: {len(rows)} files")


if __name__ == "__main__":
    main()

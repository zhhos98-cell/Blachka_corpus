#!/usr/bin/env python3
"""Build a deterministic structural manifest for public Source registers.

The manifest describes file shape and checksums only. It does not rewrite or
interpret any evidence-bearing register values.
"""

from __future__ import annotations

import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCES = ROOT / "sources"
OUTPUT = SOURCES / "register-manifest.json"


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main() -> None:
    rows = []
    for path in sorted(SOURCES.glob("*-register.json")):
        payload = json.loads(path.read_text(encoding="utf-8"))
        list_fields = {
            key: len(value)
            for key, value in payload.items()
            if isinstance(value, list)
        }
        title = payload.get("title")
        if not isinstance(title, str):
            title = None
        schema_version = payload.get("schema_version")
        if schema_version is not None:
            schema_version = str(schema_version)
        generated = next(
            (
                payload.get(key)
                for key in ("generated_date", "generated", "updated")
                if isinstance(payload.get(key), str)
            ),
            None,
        )
        row = {
            "path": path.name,
            "role": "cross_institution_canonical" if path.name == "global-archive-register.json" else "topic_register",
            "bytes": path.stat().st_size,
            "sha256": sha256(path),
            "top_level_keys": sorted(payload.keys()),
            "list_fields": list_fields,
        }
        if schema_version is not None:
            row["schema_version"] = schema_version
        if title:
            row["title"] = title
        if generated:
            row["generated"] = generated
        rows.append(row)

    manifest = {
        "schema_version": "1.0.0",
        "purpose": "Structural inventory of current public Source registers. Checksums and shapes are descriptive; evidence values remain in the registers themselves.",
        "register_count": len(rows),
        "registers": rows,
    }
    OUTPUT.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Source register manifest: {len(rows)} files")


if __name__ == "__main__":
    main()

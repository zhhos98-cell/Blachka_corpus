#!/usr/bin/env python3
"""Sanitize modern secondary-literature full text from the public backend bundle.

This is intentionally narrow: it only edits six known source paths under
05B_blaschka_literature_technical/secondary_literature/. Archival OCR and
historical primary-source text elsewhere in the bundle are untouched.
"""
from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
from typing import Any

BUNDLE = Path("research_backend/04_99_other_backend.json")
MANIFEST = Path("research_backend/00_MANIFEST.json")

TARGETS = {
    "05B_blaschka_literature_technical/secondary_literature/01_Taxonomic_revision_1888_catalogue_2018_pdf.json",
    "05B_blaschka_literature_technical/secondary_literature/02_Blaschka_models_Irish_institutions_2016_pdf.json",
    "05B_blaschka_literature_technical/secondary_literature/03_UCD_Blaschka_collection_history_2013_pdf.json",
    "05B_blaschka_literature_technical/secondary_literature/04_Cheeseman_Ward_correspondence_2019_pdf.json",
    "05B_blaschka_literature_technical/secondary_literature/05_Los_modelos_Blaschka_2014_pdf.json",
    "05B_blaschka_literature_technical/secondary_literature/06_Canterbury_Museum_Blaschka_catalogue_2017_pdf.json",
}

POLICY = (
    "Modern secondary-literature full text omitted from the public repository; "
    "bibliographic/provenance metadata retained. Full research text remains in the private archive."
)


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def compact_json_bytes(data: Any) -> bytes:
    return (json.dumps(data, ensure_ascii=False, separators=(",", ":")) + "\n").encode("utf-8")


def sanitize_bundle(data: dict[str, Any]) -> tuple[dict[str, Any], dict[str, int]]:
    items = data.get("items")
    if not isinstance(items, list):
        raise ValueError("bundle.items must be a list")

    seen: set[str] = set()
    removed_chars = 0
    removed_page_text_fields = 0

    for item in items:
        if not isinstance(item, dict):
            continue
        source_path = item.get("source_path")
        if source_path not in TARGETS:
            continue
        if source_path in seen:
            raise ValueError(f"duplicate target source_path: {source_path}")
        seen.add(source_path)

        content = item.get("content")
        if not isinstance(content, dict):
            raise ValueError(f"target content is not an object: {source_path}")

        pages = content.get("pages", [])
        if not isinstance(pages, list):
            raise ValueError(f"target pages is not a list: {source_path}")

        for page in pages:
            if not isinstance(page, dict):
                raise ValueError(f"target page is not an object: {source_path}")
            text = page.pop("text", None)
            if text is not None:
                if not isinstance(text, str):
                    raise ValueError(f"target page text is not a string: {source_path}")
                removed_chars += len(text)
                removed_page_text_fields += 1

        content["public_text_removed"] = True
        content["public_text_removal_policy"] = POLICY
        content["public_removed_page_text_fields"] = len(pages)
        item["public_content_sanitized"] = True
        item["public_removed_fields"] = ["content.pages[*].text"]

    missing = TARGETS - seen
    if missing:
        raise ValueError("missing target source paths: " + ", ".join(sorted(missing)))

    data["public_rights_sanitization"] = {
        "policy_version": "2026-08-17-v1",
        "target_count": len(TARGETS),
        "targets": sorted(TARGETS),
        "removed_field": "content.pages[*].text",
        "reason": POLICY,
    }
    return data, {
        "targets": len(seen),
        "removed_chars": removed_chars,
        "removed_page_text_fields": removed_page_text_fields,
    }


def update_manifest(manifest: dict[str, Any], bundle_bytes: bytes) -> dict[str, Any]:
    bundles = manifest.get("bundles")
    if not isinstance(bundles, list):
        raise ValueError("manifest.bundles must be a list")
    matches = [b for b in bundles if isinstance(b, dict) and b.get("file") == BUNDLE.name]
    if len(matches) != 1:
        raise ValueError(f"expected exactly one manifest bundle entry for {BUNDLE.name}")
    entry = matches[0]
    entry["size_bytes"] = len(bundle_bytes)
    entry["sha256"] = sha256_bytes(bundle_bytes)

    manifest["all_source_json_preserved"] = False
    manifest["public_rights_sanitization"] = {
        "policy_version": "2026-08-17-v1",
        "sanitized_bundle": BUNDLE.name,
        "modern_secondary_records_sanitized": len(TARGETS),
        "source_records_retained": True,
        "note": POLICY,
    }
    return manifest


def check(bundle: dict[str, Any], manifest: dict[str, Any], bundle_bytes: bytes) -> None:
    items = bundle.get("items", [])
    found = 0
    for item in items:
        if not isinstance(item, dict) or item.get("source_path") not in TARGETS:
            continue
        found += 1
        content = item.get("content", {})
        if content.get("public_text_removed") is not True:
            raise AssertionError(f"missing public_text_removed marker: {item.get('source_path')}")
        pages = content.get("pages", [])
        if any(isinstance(p, dict) and "text" in p for p in pages):
            raise AssertionError(f"public page text remains: {item.get('source_path')}")
    if found != len(TARGETS):
        raise AssertionError(f"found {found} targets; expected {len(TARGETS)}")

    matches = [b for b in manifest.get("bundles", []) if isinstance(b, dict) and b.get("file") == BUNDLE.name]
    if len(matches) != 1:
        raise AssertionError("manifest target bundle entry missing or duplicated")
    entry = matches[0]
    if entry.get("size_bytes") != len(bundle_bytes):
        raise AssertionError("manifest size_bytes does not match sanitized bundle")
    if entry.get("sha256") != sha256_bytes(bundle_bytes):
        raise AssertionError("manifest sha256 does not match sanitized bundle")
    if manifest.get("all_source_json_preserved") is not False:
        raise AssertionError("manifest must state all_source_json_preserved=false after public redaction")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--bundle", type=Path, default=BUNDLE)
    ap.add_argument("--manifest", type=Path, default=MANIFEST)
    mode = ap.add_mutually_exclusive_group(required=True)
    mode.add_argument("--in-place", action="store_true")
    mode.add_argument("--check", action="store_true")
    args = ap.parse_args()

    bundle = json.loads(args.bundle.read_text(encoding="utf-8"))
    manifest = json.loads(args.manifest.read_text(encoding="utf-8"))

    if args.in_place:
        bundle, stats = sanitize_bundle(bundle)
        bundle_bytes = compact_json_bytes(bundle)
        manifest = update_manifest(manifest, bundle_bytes)
        args.bundle.write_bytes(bundle_bytes)
        args.manifest.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(json.dumps(stats, sort_keys=True))
        return 0

    bundle_bytes = args.bundle.read_bytes()
    check(bundle, manifest, bundle_bytes)
    print(f"PASS: {len(TARGETS)} modern secondary-literature records contain no public page text")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

# Research backend snapshot — 2026-08-17

This directory contains the cleaned, flat research-corpus snapshot prepared on 2026-08-17.

Authoritative inventory: `00_MANIFEST.json`.

Contents:
- 11 `01_core_*.json` bundles: UK microscopy core corpus.
- 4 `02_extensions_*.json` bundles: extended nineteenth-century microscopy corpus.
- `03_BNA.json`: British Newspaper Archive-derived research records and derived views.
- `04_99_other_backend.json`: Blaschka, cross-project, technical, archival, and other backend material.

Packaging state:
- source snapshot: `backend_clean_v8_2026-08-17`
- flat web bundle: 17 payload files + 1 manifest
- 196 source JSON objects preserved in the bundles
- no PDFs are retained in this snapshot
- OCR/platform boilerplate and other high-confidence technical noise were removed during cleaning
- this is a working research corpus, not a byte-for-byte forensic preservation copy of the original inputs

The files were moved here from the repository root without rewriting their blob contents, so their uploaded Git object identity remains unchanged.

Rights note: this research backend mixes public-domain historical OCR with extracted metadata/text from later scholarly and archival sources. In particular, `04_99_other_backend.json` requires rights review before being treated as an openly redistributable dataset. Its presence in this public repository should not be read as an open-license declaration.

The public-facing site should use curated data under the normal site/data structure rather than depending directly on these backend bundles.
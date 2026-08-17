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
- 196 source-record identities remain represented in the bundles
- no PDFs are retained in this snapshot
- OCR/platform boilerplate and other high-confidence technical noise were removed during cleaning
- this is a working research corpus, not a byte-for-byte forensic preservation copy of the original inputs

The files were originally moved here from the repository root without rewriting their blob contents. On 2026-08-17, the public copy of `04_99_other_backend.json` was deliberately sanitized for rights reasons: page-level extracted full text was removed from six modern secondary-literature records while their filenames, identifiers, source hashes, page counts and other provenance metadata were retained. Archival OCR and nineteenth-century primary-source text were not targeted by that sanitization. `00_MANIFEST.json` records the resulting public bundle hash and sanitization state.

The full research copies of the six modern secondary works belong in the private research archive, not in this public repository. Current-tree sanitization does not erase older Git objects from repository history; any history rewrite, if ever required, is a separate destructive operation and is not implied by this cleanup.

The public-facing site should use curated data under the normal site/data structure rather than depending directly on these backend bundles.

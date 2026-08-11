# Source registers

This directory contains the public source index and machine-readable registers used to support documentary reconstruction. Register files are evidence-management layers, not substitutes for the underlying archives or publications.

## Canonical conventions

- `global-archive-register.json` is the canonical cross-institution archive register. As of 11 August 2026 it includes the seven records formerly held in the 10 August supplement.
- Topic-specific `*-register.json` files remain separate when they encode distinct research questions, evidence guards, or operational chains. Similar filenames alone are not a reason to merge them.
- IDs, status values, archival references, guards, locators, and evidence language should not be silently normalised. A schema cleanup may add metadata or vocabulary definitions, but changes to evidential claims require research review.
- Historical supplements and superseded generated layers are preserved under `archive/data/` rather than kept beside current public inputs.

Run `python scripts/validate-derived-data.py` for read-only structural checks across the current public JSON layer.

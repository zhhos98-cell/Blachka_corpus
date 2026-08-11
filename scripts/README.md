# Repository maintenance scripts

These scripts operate on derived/public structure. They do not have authority to revise historical evidence.

- `build-people-ui.py` — projects canonical `people/people-data.json` into the smaller public `people/people-ui.json` payload.
- `build-source-register-manifest.py` — inventories current `sources/*-register.json` files by checksum and structural shape.
- `build-auction-manifest.py` — inventories the Auction JSON layer while keeping `auction-data.json` distinct from supporting research files.
- `standardize-public-shell.py` — keeps the static Cases, Sources and Bibliography navigation shell aligned with the canonical site navigation and current shared asset keys.
- `validate-derived-data.py` — read-only integrity checks for People projection counts, Source/Auction manifests, global archive-register IDs, Auction canonical record IDs, JSON parseability, and active/archive placement assumptions.

Mutation rules are defined in `docs/data-layers.md`. In particular, these tools must not silently alter evidence status, archival references, stable IDs, quotations, OCR readings, uncertainty language, or anything under `research/data/` as a side effect of interface maintenance.

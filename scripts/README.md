# Repository maintenance scripts

These scripts operate on derived/public structure. They do not have authority to revise historical evidence.

- `build-people-ui.py` — projects canonical `people/people-data.json` into the smaller public `people/people-ui.json` payload.
- `build-structural-manifests.py` — rebuilds both `sources/register-manifest.json` and `auctions/data-manifest.json` from current public JSON without rewriting research records.
- `audit-json-schema-families.py` — profiles exact top-level key/type families and repeated list-item shapes into `schemas/generated/schema-family-profile.json` plus a dated audit note.
- `audit-status-vocabularies.py` — inventories explicit local `status_vocabulary` definitions and detects repeated labels or definition conflicts without normalizing them.
- `audit-field-semantics.py` — recursively maps recurring field names into functional roles so naming drift is visible without renaming canonical fields.
- `audit-cross-register-duplication.py` — finds exact cross-file ID reuse, shared URLs, repeated long strings, and byte-equivalent structured objects; it is diagnostic and never deduplicates records automatically.
- `standardize-public-shell.py` — keeps the static Cases, Sources and Bibliography navigation shell aligned with the canonical site navigation and current shared asset keys.
- `validate-derived-data.py` — read-only integrity checks for People projection counts, Source/Auction manifests, minimal metadata envelopes, global archive-register IDs, Auction canonical record IDs, JSON parseability, and active/archive placement assumptions.

Prospective field naming is documented in `docs/json-field-conventions.md` and machine-readable in `schemas/field-role-conventions.json`. These conventions do not authorize migration of existing research fields.

Mutation rules are defined in `docs/data-layers.md`. In particular, these tools must not silently alter evidence status, archival references, stable IDs, quotations, OCR readings, uncertainty language, or anything under `research/data/` as a side effect of interface maintenance.

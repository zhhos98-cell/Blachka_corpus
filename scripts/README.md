# Repository maintenance scripts

These scripts operate on derived/public structure. They do not have authority to revise historical evidence.

- `build-people-ui.py` — projects canonical `people/people-data.json` into the smaller public `people/people-ui.json` payload.
- `build-structural-manifests.py` — rebuilds both `sources/register-manifest.json` and `auctions/data-manifest.json` from current public JSON without rewriting research records.
- `build-source-authority-crosswalk.py` — builds an exact-URL authority graph across current Source/Auction JSON, recording reuse by register, field path and functional role without merging evidence records.
- `build-source-reuse-ui.py` — projects only shared exact locators that are actually linked from the public Sources page into `sources/source-reuse-ui.json`; the UI uses this small file for collapsed “used in … parts of the project” reverse-index hints.
- `audit-json-schema-families.py` — profiles exact top-level key/type families and repeated list-item shapes into `schemas/generated/schema-family-profile.json` plus a dated audit note.
- `audit-status-vocabularies.py` — inventories explicit local `status_vocabulary` definitions and detects repeated labels or definition conflicts without normalizing them.
- `audit-field-semantics.py` — recursively maps recurring field names into functional roles so naming drift is visible without renaming canonical fields.
- `audit-cross-register-duplication.py` — finds exact cross-file ID reuse, shared URLs, repeated long strings, and byte-equivalent structured objects; it is diagnostic and never deduplicates records automatically.
- `audit-auction-canonical-sync.py` — checks Auction support-layer references and declared `canonical_fields_to_update` against canonical `auction-data.json` without applying changes.
- `standardize-public-shell.py` — keeps the static Cases, Sources and Bibliography navigation shell aligned with the canonical site navigation and current shared asset keys.
- `validate-derived-data.py` — read-only integrity checks for People projection counts, Source/Auction manifests, minimal metadata envelopes, the compact Sources reuse projection, global archive-register IDs, Auction canonical record IDs, JSON parseability, and active/archive placement assumptions.

Prospective field naming is documented in `docs/json-field-conventions.md` and machine-readable in `schemas/field-role-conventions.json`. Source-authority semantics are documented in `docs/source-authority-model.md`.

Mutation rules are defined in `docs/data-layers.md`. In particular, these tools must not silently alter evidence status, archival references, stable IDs, quotations, OCR readings, uncertainty language, or anything under `research/data/` as a side effect of interface maintenance.

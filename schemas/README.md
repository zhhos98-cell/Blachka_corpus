# Schemas and structural profiles

This directory contains non-evidentiary structural tooling for the public JSON layers. It does not define historical truth and must not be used to normalize conflicting evidence.

`source-register-envelope.schema.json` validates only the four fields currently universal across all Source registers: `schema_version`, `generated_date`, `title`, and `scope`. `auction-layer-envelope.schema.json` validates the three universal Auction fields and permits the near-universal `purpose` field. Both schemas deliberately allow additional properties so topic-specific evidence remains untouched.

`field-role-conventions.json` records prospective preferred field names for new data. It is an authoring convention, not a migration map: every role explicitly forbids automatic rewriting of existing canonical fields.

Generated inventories live under `generated/`:

- `schema-family-profile.json` describes exact top-level key/type signatures and repeated list-item shapes;
- `status-vocabulary-inventory.json` compares explicit local status vocabularies;
- `field-semantic-role-map.json` inventories current naming drift by functional role;
- `cross-register-duplication-index.json` records exact cross-file IDs, URLs, long strings, and structured-object duplication;
- `auction-canonical-sync-audit.json` checks Auction support-layer references and declared canonical updates against the current canonical lot table;
- `source-authority-crosswalk.json` turns exact public locators into derived authority nodes and records every Source/Auction register/path that points to them.

The source-authority crosswalk is a navigation/maintenance graph, not a citation authority file. Its `SRCNODE-*` identifiers are deterministic derived IDs tied to exact locators; they must not replace archival references, source citations, or canonical research identifiers. See `../docs/source-authority-model.md`.

Structural similarity is only a candidate for shared tooling; it does not establish semantic equivalence. Vocabulary files may be added here only after definitions have been compared. Repeated labels are not to be collapsed merely because their spelling matches. Research mutation rules remain governed by `../docs/data-layers.md`, with prospective field practice documented in `../docs/json-field-conventions.md`.

# Schemas and structural profiles

This directory contains non-evidentiary structural tooling for the public JSON layers. It does not define historical truth and must not be used to normalize conflicting evidence.

`source-register-envelope.schema.json` validates only the four fields currently universal across all Source registers: `schema_version`, `generated_date`, `title`, and `scope`. `auction-layer-envelope.schema.json` validates the three universal Auction fields and permits the near-universal `purpose` field. Both schemas deliberately allow additional properties so topic-specific evidence remains untouched.

`generated/schema-family-profile.json` is a generated descriptive audit of exact top-level key/type signatures and repeated list-item shapes. Structural similarity is only a candidate for shared tooling; it does not establish semantic equivalence.

Generated inventories live under `generated/`. Vocabulary files may be added here only after definitions have been compared. Repeated labels are not to be collapsed merely because their spelling matches. Research mutation rules remain governed by `../docs/data-layers.md`.

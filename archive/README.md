# Archive

This directory preserves retired project artefacts that are no longer active inputs or runtime dependencies but still have provenance, comparison, or rollback value.

- `data/` — historical generated data, retired shards, manifests, and supplements after canonical flattening;
- `ui/` — superseded frontend layers retained after active-reference audits;
- `workflows/` — retired GitHub Actions definitions stored here so they remain passive;
- `bibliography/` — historical bibliography build passes removed from the live bibliography runtime;
- `research/` — superseded research working-state snapshots retained with their original Git blobs;
- `pull-requests/` — PR-specific research evidence preserved on `main` before superseded historical PRs are closed.

Archived files should normally remain byte-for-byte unchanged. Document discovered inconsistencies in an adjacent README instead of rewriting the historical artefact. Current canonical and derived-data rules are in `docs/data-layers.md`.

Housekeeping rule: moving material here must not silently promote, normalize, or reinterpret it. Each archival relocation should preserve original blob identity where practical and record what remains canonical elsewhere in the repository.

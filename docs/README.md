# Project documentation

The `docs/` root is reserved for stable project policy and architecture. Dated diagnostics belong under `audits/`; historical design material and implementation notes remain in their existing subdirectories.

## Stable policy and architecture

- `architecture.md` — public-site architecture and implementation boundaries.
- `data-layers.md` — canonical, derived, archived, and mutation rules for research data.
- `json-field-conventions.md` — prospective field naming for new or substantially rebuilt JSON; not a migration rule for existing evidence.
- `source-authority-model.md` — exact-locator authority nodes, occurrence edges, host summaries, and safe public use of the derived source graph.
- `record-architecture-v1.md` — record-level architecture.
- `navigation-model.md` — canonical public navigation model.
- `design-guidelines.md` — durable interface principles.
- `site-performance.md` — performance policy and current structural strategy.

## Historical and diagnostic material

- `audits/` — dated visual, structural, semantic, duplication, authority-crosswalk, and integrity audits.
- `design-history/` — superseded or historical design documentation.
- `development/` — implementation/development notes that are not stable policy.

Repository scripts and machine-readable schema tooling are documented separately in `../scripts/README.md` and `../schemas/README.md`.

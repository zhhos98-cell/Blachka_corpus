# Repository architecture

The repository serves three related purposes and keeps them visibly distinct:

1. a public, stable GitHub Pages site;
2. a research workspace that preserves evidence, uncertainty, working tables, and handoff state;
3. an archive for retired generated data and implementation layers that remain useful for provenance or rollback.

The data-mutation boundary is defined in [`data-layers.md`](data-layers.md).

## 1. Public routes

Public URLs stay shallow and readable:

- `/` — landing page
- `/cases/` — documentary cases
- `/map/` — collections map
- `/map/rudolf-1892/` — Rudolf Blaschka 1892 journey
- `/people/` — people authority interface
- `/bibliography/` — bibliography and exports
- `/sources/` — source index
- `/auctions/` — auction/provenance records
- `/about/` — scope and method
- `/rights/` — rights and image credits
- `/privacy/` — privacy notice
- `/accessibility/` — accessibility statement

Public routes should not be renamed simply to make the repository tree look cleaner. Stable fragments and machine-readable public paths are treated the same way when external use is plausible.

## 2. Shared site assets

The active frontend is framework-free. Shared assets remain at shallow paths where moving them would create churn without a runtime benefit:

- `styles.css` and `secondary.css` — active base layers;
- `navigation-shell.css` — canonical navigation shell;
- `accessibility.css` and `accessibility.js` — accessibility behavior;
- `typography-garamond.css` and `assets/fonts/` — reading typography;
- `mobile-v3.css` — active responsive layer still imported by page-family CSS;
- `unified-ui.js` — cross-page navigation/accessibility normalization while static shells are gradually standardized.

Page-family CSS/JS stays beside its route where that improves maintenance. Historical consolidated bundles and superseded iterative layers have been moved to `archive/ui/2026-08-11/` after an active-reference audit.

Future frontend consolidation should be behavioral, not cosmetic: remove a shared layer only after every active selector or behavior has an explicit replacement.

## 3. Research workspace

`/research/` is a handoff and evidence-management layer, not merely website content.

- `research/data/` contains canonical census and baseline tables.
- `research/working/` contains bounded investigations, ingest priorities, deltas, and temporary structured outputs.
- `research/logs/` contains detailed dated runs.
- `research/bibliography/` contains research-question-specific bibliographies.
- `research/RESEARCH_LOG.md` records decisions and corrections across runs.

Promotion rule: a working JSON should become canonical only when its evidential status and schema are stable enough to support repeated use. Frontend cleanup does not mutate `research/data/`.

## 4. Public evidence directories

`/sources/`, `/auctions/`, `/bibliography/`, and `/people/` contain both public interfaces and structured data because the relationship to the route remains explicit.

Current canonical/derived examples:

- `people/people-data.json` — canonical authority records;
- `people/people-ui.json` — derived interface projection;
- `sources/global-archive-register.json` — canonical cross-institution archive register;
- topic-specific Source registers — separate evidence modules where research questions and guards differ.

Do not merge topic-specific registers solely because filenames or institutions overlap. Consolidation is appropriate when a file explicitly declares itself a supplement or generated fragment of one canonical parent and record values can be preserved.

## 5. Documentation, tooling, and archive

- `/scripts/` — reproducible builders and read-only structural validators for derived/public data.
- `/docs/development/` — implementation notes that remain useful.
- `/docs/design-history/` — superseded layout experiments and design checkpoints.
- `/archive/data/` — retired generated data, historical shards and flattened supplements.
- `/archive/ui/` — retired frontend code retained for a release cycle or historical comparison.
- `/archive/workflows/` — retired workflows retained as passive provenance.

Files under `.github/workflows/` are executable configuration; retired workflows belong in `archive/workflows/` instead.

## 6. Naming rules

- Public route names: stable, lowercase, semantic.
- Canonical research tables: short noun phrases (`current_holders.csv`, `census.csv`).
- Derived data: semantic name tied to its consumer or projection (`people-ui.json`), with a documented canonical source.
- Working outputs: descriptive names with dates only when the date is analytically meaningful.
- Avoid new canonical filenames such as `pass17`, `v4`, `final2`, or `new`. Version history belongs in Git.
- Historical files may retain old names unchanged when archived; provenance is more important than cosmetic normalization.

## 7. Cleanup order

Repository cleanup should occur in this order:

1. identify the canonical source and current runtime consumers;
2. distinguish evidence-bearing data from generated projections;
3. freeze stable URLs and identifiers;
4. make derived transformations reproducible where practical;
5. consolidate only value-preserving supplements/fragments with a declared canonical parent;
6. verify the active site and structural invariants;
7. move superseded files to `archive/` rather than rewriting their history;
8. delete archived implementation material only after the replacement has proved stable and provenance value is negligible.

This order keeps the repository legible without turning housekeeping into an undocumented research edit.

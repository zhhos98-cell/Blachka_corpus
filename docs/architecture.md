# Repository architecture

The repository serves two different purposes and keeps them visibly separate:

1. a public, stable GitHub Pages site;
2. a research workspace that preserves evidence, uncertainty, working tables, and handoff state.

## 1. Public routes

Public URLs stay shallow and readable:

- `/` — landing page
- `/cases/` — documentary cases
- `/bibliography/` — bibliography and exports
- `/sources/` — source index
- `/auctions/` — auction/provenance records
- `/privacy/` — privacy notice

These directories may contain page-specific CSS, JavaScript, and data when keeping them close to the route improves maintenance. Public routes should not be renamed simply to make the repository tree look cleaner.

## 2. Shared site assets

Shared binary assets belong under `/assets/`. Fonts are the first shared assets moved there. The iterative frontend currently still has several root-level CSS and JavaScript layers; they should be consolidated before relocation so the repository does not merely hide technical debt inside a folder.

Target after consolidation:

```text
assets/
├── css/
│   ├── core.css
│   ├── home.css
│   ├── subpages.css
│   └── motion.css
├── js/
│   ├── site.js
│   ├── home.js
│   └── motion.js
└── fonts/
```

The important rule is behavioral stability: consolidate in the same cascade/execution order, verify desktop/tablet/mobile behavior, then remove superseded pass files.

## 3. Research workspace

`/research/` is a handoff layer, not the full provenance backend.

- `research/data/` contains canonical working tables and baselines.
- `research/working/` contains bounded investigations, ingest priorities, deltas, and temporary structured outputs.
- `research/logs/` contains detailed dated runs.
- `research/bibliography/` contains research-question-specific bibliographies.
- `research/RESEARCH_LOG.md` records decisions and corrections across runs.

Promotion rule: a working JSON should move into a canonical table only when its evidential status and schema are stable enough to support repeated use.

## 4. Public evidence directories

`/sources/`, `/auctions/`, and `/bibliography/` currently mix public page code with structured research records. This is acceptable while the public page consumes those records directly or while their relationship to the route remains clear. Future cleanup should prefer local subdirectories such as `data/`, `runtime/`, and `legacy/` rather than moving all research JSON into one global dumping ground.

Suggested pattern:

```text
sources/
├── index.html
├── sources.css
├── sources-az.js
├── data/
└── legacy/
```

The same pattern can be used for auctions and bibliography.

## 5. Documentation and archive

- `/docs/development/` — implementation notes that remain useful.
- `/docs/design-history/` — superseded layout experiments and design checkpoints.
- `/archive/` — retired code or workflows kept only for provenance/recovery.

Retired workflows do not remain under `.github/workflows/`, because files there are executable configuration rather than passive documentation.

## 6. Naming rules

- Public route names: stable, lowercase, semantic.
- Canonical research tables: short noun phrases (`current_holders.csv`, `census.csv`).
- Working outputs: descriptive names with dates only when the date is analytically meaningful.
- Avoid version-number filenames (`pass17`, `v4`) for new canonical code. Version history belongs in Git. Existing pass files should be retired during consolidation rather than renamed one by one.

## 7. Frontend consolidation order

The current interface was produced by rapid iterative passes. Cleanup should occur in this order:

1. freeze the present visual behavior;
2. identify active versus unreferenced files;
3. merge CSS in actual cascade order;
4. merge JavaScript only where execution order is explicit and safe;
5. update page references;
6. verify desktop, tablet, phone, reduced-motion, and keyboard behavior;
7. move superseded files to `archive/ui/` for one release cycle;
8. delete them after the replacement has proved stable.

This avoids the common failure mode in which a repository becomes visually tidy while runtime behavior becomes harder to debug.

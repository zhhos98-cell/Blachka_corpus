# The Blaschka Object Network

A lightweight digital research project tracing Blaschka glass models through workshop records, transactions, transport, collections, conservation, rediscovery, and present custody.

**Live site:** https://zhhos98-cell.github.io/Blachka_corpus/

## Public site

The GitHub Pages layer is intentionally static-first and keeps stable public URLs:

- [`index.html`](index.html) — project landing page
- [`cases/`](cases/) — documentary case studies
- [`map/`](map/) — collections map
- [`map/rudolf-1892/`](map/rudolf-1892/) — Rudolf Blaschka's 1892 journey and knowledge flows
- [`people/`](people/) — authority records for people in the network
- [`bibliography/`](bibliography/) — chronological bibliography, selection and export
- [`sources/`](sources/) — primary-source and repository index
- [`auctions/`](auctions/) — selected auction appearances used as provenance evidence
- [`about/`](about/) — scope, method, evidence policy and contact
- [`rights/`](rights/) — copyright, image credits and reuse information
- [`privacy/`](privacy/) — privacy and data-handling notice
- [`accessibility/`](accessibility/) — accessibility statement and known limitations

Public URLs are treated as stable. Research files, generated UI payloads and historical implementation files are distinguished rather than mixed together as equivalent sources.

## Data layers

The repository now uses three explicit data layers.

1. **Canonical research data** — evidence-bearing files that are edited only through research review. Examples include [`research/data/`](research/data/), [`people/people-data.json`](people/people-data.json), and current source registers.
2. **Derived public data** — reproducible projections used by the interface. [`people/people-ui.json`](people/people-ui.json), for example, is generated from the canonical People authority file and is not an independent research source.
3. **Historical / retired data** — superseded shards, supplements and implementation artefacts retained under [`archive/`](archive/) for provenance or rollback.

See [`docs/data-layers.md`](docs/data-layers.md) for the mutation rules. Structural cleanup must not silently alter evidence status, archival references, guards, locators, uncertainty language or stable identifiers.

## Research state

The durable working state lives under [`research/`](research/):

- [`research/data/`](research/data/) — canonical census and survey tables
- [`research/working/`](research/working/) — bounded current investigations and ingest priorities
- [`research/logs/`](research/logs/) — dated research-run notes
- [`research/bibliography/`](research/bibliography/) — project-specific working bibliographies
- [`research/RESEARCH_LOG.md`](research/RESEARCH_LOG.md) — decisions, corrections, discoveries, and handoff notes
- [`research/README.md`](research/README.md) — method, baseline definitions, data rules, and session protocol

The census layer and deeper provenance layer remain distinct. A secure surviving collection can enter the census while purchase, shipment, object identifiers, or conservation history remain unresolved.

## Repository map

```text
.
├── index.html                 # GitHub Pages landing page
├── cases/                     # public documentary cases
├── map/                       # collections map + Rudolf 1892 journey
├── people/                    # canonical People data + derived public payload
├── bibliography/              # public bibliography + data/tools
├── sources/                   # public source index + evidence registers
├── auctions/                  # public auction route + auction research records
├── about/                     # public project/method route
├── rights/                    # public image-rights route
├── privacy/                   # public privacy route
├── accessibility/             # public accessibility route
├── assets/
│   └── fonts/                 # local web fonts, public subset and full fallback
├── research/
│   ├── data/                  # canonical census/baseline tables
│   ├── working/               # active bounded research files
│   ├── logs/                  # detailed dated research logs
│   └── bibliography/          # working research bibliographies
├── scripts/                   # reproducible derived-data builders and validators
├── docs/
│   ├── architecture.md        # repository/public/research separation
│   ├── data-layers.md         # canonical / derived / archive mutation contract
│   ├── record-architecture-v1.md
│   ├── site-performance.md
│   ├── development/
│   └── design-history/
├── archive/
│   ├── data/                  # retired generated data and historical supplements
│   ├── ui/                    # retired frontend layers retained for rollback
│   └── workflows/             # retired workflow definitions
├── .nojekyll
├── sitemap.xml
└── README.md
```

## Current implementation

The site remains framework-free: static HTML, CSS, JavaScript, JSON/CSV, and GitHub Pages. Long Sources and Bibliography pages remain static HTML by design so browser Find, indexing, stable fragments and no-JavaScript reading continue to work.

The August 10–11 cleanup removed the obsolete Sources pass requests, detached Cases and Sources from the historical `site-core.css` bundle, retired the old Cases visual matrix, and moved unreferenced iterative UI layers out of the repository root into `archive/ui/2026-08-11/`. The active interface now uses page-family CSS with the shared navigation and accessibility layers rather than a single historical mega-bundle.

People uses [`people/people-data.json`](people/people-data.json) as its canonical authority file and [`people/people-ui.json`](people/people-ui.json) as the smaller interface projection. The old seventeen People shards and their stale manifest are preserved unchanged under `archive/data/people-shards-2026-08-10/`. Regenerate the public payload with `python scripts/build-people-ui.py`.

The global archive register has also been flattened: the seven records from the 10 August supplement are now part of the canonical [`sources/global-archive-register.json`](sources/global-archive-register.json), while the historical supplement is retained under `archive/data/`. Topic-specific source registers remain separate where they encode distinct evidence chains or research questions.

EB Garamond is served locally. A corpus-derived public subset is used for ordinary page text, with the full variable font retained as a missing-glyph fallback; the OFL notice remains in `assets/fonts/`.

The performance contract is recorded in [`docs/site-performance.md`](docs/site-performance.md). Further optimization should be driven by browser measurements and actual transfer/render costs rather than by file size alone.

## Validation

Derived-data cleanup is reproducible and read-only with respect to canonical research sources:

```bash
python scripts/build-people-ui.py
python scripts/validate-derived-data.py
```

The validator checks canonical/derived People counts, the absence of retired People shards from the public directory, duplicate IDs in the global archive register, and JSON parseability for current Source registers.

## Record architecture

[`docs/record-architecture-v1.md`](docs/record-architecture-v1.md) defines the public-data contract for durable identifiers, record versions, citation, evidence and uncertainty. Objects, institutions, orders, shipments, people, sources and claims receive stable identifiers; evidence/content changes drive record versions, while interface changes do not.

The intended public record layer exposes preferred citation, research status, open questions and evidence relations. Versioned CSV/JSON snapshots come before an API. A moderated correction form remains deferred until spam filtering, retention and privacy handling are specified rather than simulated in static UI.

## Privacy and rights

The current site runs no project analytics, advertising tracker, marketing cookie or email subscriber database. Updates are RSS-only. Voluntary correspondence, GitHub Pages hosting and externally served open images are described in [`privacy/`](privacy/).

Image reuse and attribution are consolidated in [`rights/`](rights/). The internal audit at [`docs/development/legal-rights-audit-2026-08-10.md`](docs/development/legal-rights-audit-2026-08-10.md) records the rights checks used during publication.

## Evidence rules

The project separates source-supported object or transaction connections, useful comparisons that do not establish physical identity, and open or unresolved joins. Shared catalogue numbers, model types, successor institutions or nearby register numbers are routing evidence unless a source closes the object-level identity.

## Status

Research prototype under active development. The public site exposes selected, sourceable material; the repository retains uncertainty, competing readings and unresolved provenance in the research layer.

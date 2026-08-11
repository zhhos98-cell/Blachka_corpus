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

The repository uses three explicit data layers.

1. **Canonical research data** — evidence-bearing files edited only through research review. Examples include [`research/data/`](research/data/), [`people/people-data.json`](people/people-data.json), current Source registers, and the canonical Auction lot table.
2. **Derived public/structural data** — reproducible projections, manifests and diagnostics. [`people/people-ui.json`](people/people-ui.json), for example, is generated from the canonical People authority file and is not an independent research source.
3. **Historical / retired data** — superseded shards, supplements and implementation artefacts retained under [`archive/`](archive/) for provenance or rollback.

See [`docs/data-layers.md`](docs/data-layers.md) for mutation rules, [`docs/json-field-conventions.md`](docs/json-field-conventions.md) for prospective naming conventions, and [`docs/source-authority-model.md`](docs/source-authority-model.md) for the derived exact-locator graph. Structural cleanup must not silently alter evidence status, archival references, guards, locators, uncertainty language, OCR readings or stable identifiers.

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
├── sources/                   # public source index + evidence registers + structural manifest
├── auctions/                  # public auction route + canonical/supporting research layers
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
├── scripts/                   # reproducible builders, validators and read-only audits
├── schemas/                   # minimal schemas + prospective field conventions
│   └── generated/             # generated structural/semantic/authority indexes
├── docs/
│   ├── README.md              # documentation map
│   ├── architecture.md        # repository/public/research separation
│   ├── data-layers.md         # canonical / derived / archive mutation contract
│   ├── json-field-conventions.md
│   ├── source-authority-model.md
│   ├── record-architecture-v1.md
│   ├── site-performance.md
│   ├── audits/                # dated diagnostic reports
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

The August 10–11 cleanup removed the obsolete Sources pass requests, detached Cases and Sources from the historical `site-core.css` bundle, retired the old Cases visual matrix, and moved unreferenced iterative UI layers out of the repository root into `archive/ui/2026-08-11/`. The active interface now uses page-family CSS with shared navigation and accessibility layers rather than a single historical mega-bundle.

People uses [`people/people-data.json`](people/people-data.json) as its canonical authority file and [`people/people-ui.json`](people/people-ui.json) as the smaller interface projection. The old seventeen People shards and their stale manifest are preserved unchanged under `archive/data/people-shards-2026-08-10/`.

Sources and Auctions retain heterogeneous evidence structures rather than being flattened into generic tables. [`sources/register-manifest.json`](sources/register-manifest.json) inventories the 34 current Source registers structurally; [`auctions/data-manifest.json`](auctions/data-manifest.json) inventories the Auction JSON layer while preserving [`auctions/auction-data.json`](auctions/auction-data.json) as the canonical lot table and the other files as supporting research/audit layers.

The global archive register has been flattened only where a supplement explicitly belonged to the same canonical register: seven records from the 10 August supplement are now part of [`sources/global-archive-register.json`](sources/global-archive-register.json), while the historical supplement remains under `archive/data/`. Topic-specific registers remain separate where they encode distinct evidence chains or research questions.

Minimal metadata envelope schemas and prospective field conventions live under [`schemas/`](schemas/). Generated schema-family, vocabulary, semantic-role, duplication, canonical-sync and exact-locator authority diagnostics live under [`schemas/generated/`](schemas/generated/); dated human-readable reports live under [`docs/audits/`](docs/audits/). These derived layers are descriptive and never feed edits back into canonical evidence automatically.

The exact-locator authority graph maps repeated public URLs back to every Source/Auction register and field path that uses them. It can support later source-network navigation, but a shared URL remains only a shared access/source node: it does not collapse the surrounding evidence records or replace archival references.

EB Garamond is served locally. A corpus-derived public subset is used for ordinary page text, with the full variable font retained as a missing-glyph fallback; the OFL notice remains in `assets/fonts/`.

The performance contract is recorded in [`docs/site-performance.md`](docs/site-performance.md). Further optimization should be driven by browser measurements and actual transfer/render costs rather than file size alone.

## Validation and maintenance

Routine derived-data maintenance is reproducible and read-only with respect to canonical research evidence:

```bash
python scripts/build-people-ui.py
python scripts/build-structural-manifests.py
python scripts/build-source-authority-crosswalk.py
python scripts/validate-derived-data.py
```

The validator checks People canonical/derived counts, retired-shard placement, Source/Auction manifest checksums and file coverage, minimal metadata envelopes, duplicate canonical IDs, JSON parseability, and selected canonical/derived relationships.

Structural diagnostics are separate from routine regeneration:

```bash
python scripts/audit-json-schema-families.py
python scripts/audit-status-vocabularies.py
python scripts/audit-field-semantics.py
python scripts/audit-cross-register-duplication.py
python scripts/audit-auction-canonical-sync.py
```

These audits identify schema families, local vocabulary boundaries, naming drift, exact duplication and support-layer/canonical sync backlogs. They do not merge records or apply proposed canonical updates. See [`scripts/README.md`](scripts/README.md) and [`schemas/README.md`](schemas/README.md).

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

# The Blaschka Object Network

A lightweight digital research project tracing Blaschka glass models through workshop records, transactions, transport, collections, conservation, rediscovery, and present custody.

**Live site:** https://zhhos98-cell.github.io/Blachka_corpus/

## Public site

The GitHub Pages layer is intentionally small and stable:

- [`index.html`](index.html) — project landing page and cross-site search
- [`cases/`](cases/) — documentary case studies
- [`bibliography/`](bibliography/) — chronological bibliography, selection and export
- [`sources/`](sources/) — primary-source and repository index
- [`auctions/`](auctions/) — selected auction appearances used as provenance evidence
- [`about/`](about/) — scope, method, evidence policy and contact
- [`people/`](people/) — role-based biographies with stable person-record identifiers
- [`rights/`](rights/) — copyright, image credits and reuse information
- [`privacy/`](privacy/) — privacy and data-handling notice
- [`accessibility/`](accessibility/) — accessibility statement and known limitations

Public URLs are treated as stable. Research files and development notes are kept outside the public navigation.

## Research state

The durable working state lives under [`research/`](research/):

- [`research/data/`](research/data/) — census and survey tables
- [`research/working/`](research/working/) — bounded current investigations and ingest priorities
- [`research/logs/`](research/logs/) — dated research-run notes
- [`research/bibliography/`](research/bibliography/) — project-specific working bibliographies
- [`research/RESEARCH_LOG.md`](research/RESEARCH_LOG.md) — decisions, corrections, discoveries, and handoff notes
- [`research/README.md`](research/README.md) — method, baseline definitions, data rules, and session protocol

The census layer and the deeper provenance layer remain distinct. A secure surviving collection can enter the census while purchase, shipment, object identifiers, or conservation history remain unresolved.

## Repository map

```text
.
├── index.html                 # GitHub Pages landing page
├── cases/                     # public case-study route
├── bibliography/              # public bibliography route + frozen data/tools
├── sources/                   # public source index + source registers
├── auctions/                  # public auction route + auction research records
├── about/                     # public project/method route
├── people/                    # public role-based biography index
├── rights/                    # public copyright and image-credit route
├── privacy/                   # public privacy route
├── accessibility/             # public accessibility route
├── assets/
│   └── fonts/                 # local web fonts and retained type experiments
├── research/
│   ├── data/                  # canonical census/baseline tables
│   ├── working/               # active bounded research files
│   ├── logs/                  # detailed dated research logs
│   └── bibliography/          # working research bibliographies
├── docs/
│   ├── architecture.md        # repository and public/research separation
│   ├── record-architecture-v1.md # stable IDs, versions, citation/evidence/data contract
│   ├── development/           # implementation, privacy and rights audits
│   └── design-history/        # superseded design experiments and notes
├── archive/
│   └── workflows/             # retired workflows retained for provenance
├── .nojekyll
├── sitemap.xml
└── README.md
```

## Design and implementation

The site remains framework-free: static HTML, CSS, JavaScript, JSON/CSV, and GitHub Pages. EB Garamond is served locally for the reading layer; interface controls remain sans-serif.

The August 10 cleanup removed retired compact/editorial/portal/search/motion prototypes, the obsolete live-Zotero merge runtime, and duplicate style dependencies. Mobile subpages skip decorative glide/motion code, case maps and secondary case visuals. Phone navigation is deliberately non-sticky so mobile-browser chrome cannot cover it. The remaining major runtime debt is the historical Sources pass chain (`sources-pass13.js` through `sources-pass37.js`), now deferred until browser idle; it should eventually be flattened into one canonical source dataset plus one rendering/filter script.

## Record architecture

[`docs/record-architecture-v1.md`](docs/record-architecture-v1.md) freezes the next public-data contract before record UI is expanded. Objects, institutions, orders, shipments, people, sources and claims receive durable identifiers; evidence/content changes drive record versions; publication dates and `last_updated` remain distinct from interface changes.

The intended public record layer exposes a preferred citation, research status, open questions and evidence relations. Record-level evidence drawers come before claim-level drawers. Versioned CSV/JSON snapshots come before an API. A moderated correction form is deferred until spam filtering, retention and privacy handling are specified rather than being simulated in static UI.

## Privacy and rights

The current site runs no project analytics, advertising tracker, marketing cookie or email subscriber database. Updates are RSS-only. Voluntary correspondence, GitHub Pages hosting and externally served open images are described in [`privacy/`](privacy/).

Image reuse and attribution are consolidated in [`rights/`](rights/). The internal audit at [`docs/development/legal-rights-audit-2026-08-10.md`](docs/development/legal-rights-audit-2026-08-10.md) also records the high-risk UK rule that some pre-1989 unpublished archival literary works can remain protected until 31 December 2039.

## Evidence rules

The project separates:

- source-supported object or transaction connections;
- useful comparisons that do not establish physical identity;
- open or unresolved joins.

Shared catalogue numbers, model types, successor institutions, or nearby register numbers are treated as routing evidence unless a source closes the object-level identity.

## Development notes

Implementation notes and retired design experiments live in [`docs/`](docs/). Obsolete microscope-slide workflows have been removed from `.github/workflows/` and retained under [`archive/workflows/`](archive/workflows/) because the slide project now has its own repository.

## Status

Research prototype under active development. The public site exposes selected, sourceable material; the repository retains uncertainty, competing readings, and unresolved provenance in the research layer.
# The Blaschka Object Network

A lightweight digital research project tracing Blaschka glass models through workshop records, transactions, transport, collections, conservation, rediscovery, and present custody.

**Live site:** https://zhhos98-cell.github.io/Blachka_corpus/

## Public site

The GitHub Pages layer is intentionally small and stable:

- [`index.html`](index.html) — project landing page and cross-site search
- [`cases/`](cases/) — documentary case studies
- [`bibliography/`](bibliography/) — chronological bibliography, Zotero integration, selection and export
- [`sources/`](sources/) — primary-source and repository index
- [`auctions/`](auctions/) — selected auction appearances used as provenance evidence
- [`privacy/`](privacy/) — privacy and data-handling notice

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
├── bibliography/              # public bibliography route + bibliography data/tools
├── sources/                   # public source index + source registers
├── auctions/                  # public auction route + auction research records
├── privacy/                   # public privacy route
├── assets/
│   └── fonts/                 # local web fonts and retained type experiments
├── research/
│   ├── data/                  # canonical census/baseline tables
│   ├── working/               # active bounded research files
│   ├── logs/                  # detailed dated research logs
│   └── bibliography/          # working research bibliographies
├── docs/
│   ├── architecture.md        # repository and public/research separation
│   ├── development/           # implementation notes
│   └── design-history/        # superseded design experiments and notes
├── archive/
│   └── workflows/             # retired workflows retained for provenance
├── .nojekyll
├── sitemap.xml
└── README.md
```

## Design and implementation

The site remains framework-free: static HTML, CSS, JavaScript, JSON/CSV, and GitHub Pages. The presentation layer favors readable typography, large touch targets, soft geometry, progressive disclosure, and restrained motion. EB Garamond is served locally from the repository for the reading layer; interface controls remain sans-serif.

The current frontend still contains several iterative CSS/JS layers from rapid prototyping. They remain in place until they can be flattened without changing public behavior. The next code-maintenance pass should consolidate those runtime layers, rather than merely moving them into folders.

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

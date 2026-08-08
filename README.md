# The Blaschka Object Network

A research prototype tracing Blaschka glass models through workshop records, dealers, shipments, museum collections, damage, conservation, rediscovery, and present custody.

**Live site:** https://zhhos98-cell.github.io/Blachka_corpus/

## About the project

The Blaschka Object Network treats the surviving glass models as objects with documentary lives. The project connects workshop-side records with museum catalogues, correspondence, shipment and accounting evidence, later collection records, conservation histories, and current institutional custody.

The aim is to keep evidential layers visible. Confirmed transactions, shipment routes, object identifiers, later rediscoveries, and unresolved gaps are recorded separately instead of being collapsed into a single provenance narrative.

## Current prototype

The public site currently uses **Liverpool Museum / World Museum Liverpool, 1887** as its principal test case. The case follows an order from workshop manufacture and accounting through a marked freight shipment, then reconnects that nineteenth-century documentary chain with modern evidence for surviving Liverpool Blaschka models.

This remains a research and design prototype. It is being used to test typography, page structure, timeline presentation, source hierarchy, and the visual treatment of uncertainty before larger structured collection and object data are exposed publicly.

## Persistent research state

The repository now also carries a lightweight research handoff layer under [`research/`](research/). This is deliberately separate from the much larger provenance backend.

- [`research/README.md`](research/README.md) — method, the “68” baseline, data rules, and session protocol.
- [`research/census.csv`](research/census.csv) — working global census: one row per confirmed or candidate collection node, including `baseline_2017_match`.
- [`research/RESEARCH_LOG.md`](research/RESEARCH_LOG.md) — dated discoveries, corrections, decisions, and next actions.

The purpose is practical: a new research session can recover the current state directly from GitHub instead of requiring copied conversation history.

## Repository structure

```text
index.html              Public prototype page
styles.css              Core site typography and layout
compact.css             Compact-layout layer
enhancements.css        Additional visual behavior
secondary.css           Secondary-page styling
motion.js               Lightweight client-side motion
blog/                   Blog prototype material
auctions/               Auction prototype material
privacy/                Privacy material
research/               Persistent census and research handoff
.nojekyll                Keeps GitHub Pages deployment simple
README.md                Project and repository documentation
```

The public site remains a lightweight GitHub Pages implementation without a framework or build system. The large research backend is not duplicated into the public presentation layer.

## Research architecture

The project distinguishes a **census layer** from a **deep provenance layer**. A secure current holding can enter the census even if the nineteenth-century purchase chain is still incomplete. Selected collections can then be upgraded into deeper microhistories covering order, price, dealer, shipment, local registration, damage, conservation, movement, rediscovery, and current custody.

The historical figure of **68 surviving collections in the 2017 Corning map** is treated as a comparison baseline. The project aims to reconstruct that baseline, match present nodes against it, and identify defensible additions without conflating newly rediscovered institutions with genuinely post-baseline nodes.

## Development direction

Future versions are intended to move from the single-case prototype toward structured pages for institutions, objects, transactions, routes, dates, and evidence states. Public-facing pages will be generated from selected research data rather than manually duplicated.

## Status

Work in progress. The current site is a research and design prototype rather than a complete catalogue or finished scholarly edition.

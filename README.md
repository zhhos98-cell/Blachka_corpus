# The Blaschka Object Network

A research prototype tracing Blaschka glass models through workshop records, dealers, shipments, museum collections, damage, conservation, rediscovery, and present custody.

**Live site:** https://zhhos98-cell.github.io/Blachka_corpus/

## About the project

The Blaschka Object Network treats the surviving glass models as objects with documentary lives. The project connects workshop-side records with museum catalogues, correspondence, shipment and accounting evidence, later collection records, conservation histories, and current institutional custody.

The aim is to keep evidential layers visible. Confirmed transactions, shipment routes, object identifiers, later rediscoveries, and unresolved gaps are recorded separately instead of being collapsed into a single provenance narrative.

## Current prototype

The public site currently contains one test case: **Liverpool Museum / World Museum Liverpool, 1887**. The case follows an order from workshop manufacture and accounting through a marked freight shipment, then reconnects that nineteenth-century documentary chain with modern evidence for surviving Liverpool Blaschka models.

This is deliberately a small prototype. It is being used to test typography, page structure, timeline presentation, source hierarchy, and the visual treatment of uncertainty before the larger research backend is exposed through generated collection and object pages.

## Repository structure

```text
index.html   Public prototype page
styles.css   Site typography and layout
.nojekyll    Keeps GitHub Pages deployment simple
README.md    Project and repository documentation
```

At this stage the site is plain HTML and CSS, with no framework, build system, or client-side JavaScript. The research backend remains separate from the public presentation layer.

## Development direction

Future versions are intended to move from the single-case prototype toward structured pages for institutions, objects, transactions, routes, dates, and evidence states. Public-facing pages will be generated from selected research data rather than manually duplicated.

## Status

Work in progress. The current site is a research and design prototype rather than a complete catalogue or finished scholarly edition.

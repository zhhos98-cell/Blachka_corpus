# 2026-08-10 — Rudolf 1892 map interface pass 02

## Scope

This pass turns the first route prototype into a site-integrated research map whose primary task is to display knowledge production rather than travel alone.

## Problems identified

### 1. Homepage journey section rendered as blank

The 1892 homepage feature had inherited the global `.reveal` class. The homepage IntersectionObserver registered only the older project, origin, featured-case, contact and subscribe selectors. The new journey nodes therefore remained at `opacity: 0` indefinitely.

Fix:
- remove `reveal` from the journey feature heading and card in the static homepage HTML;
- keep a defensive `is-visible` fallback in `home-map-nav.js`;
- bump the homepage Map script URL so the browser cannot silently reuse the previous cached script.

### 2. `/map/rudolf-1892/` exposed a broken information architecture

`unified-ui.js` previously treated every secondary page as exactly one directory below repository root and hard-coded `prefix = '../'`. On the nested journey route this rewrote links toward `/map/cases/`, `/map/people/`, and similar invalid locations. It also marked `Map` as the current page merely because the pathname contained `/map/`, which made the journey look identical to the collections map in the global navigation.

Fix:
- derive the repository-root prefix from the static `.subpage-brand` link before rewriting the shell;
- preserve `../` for ordinary secondary pages and `../../` for `/map/rudolf-1892/`;
- make `Map` a grouped destination with two children: `Collections map` and `Rudolf 1892 journey`;
- mark the Map group as current while marking the actual child route inside the menu.

The navigation invariant is updated in `docs/navigation-model.md`.

## Knowledge-production redesign

The map now has three page-local reading modes.

### Journey

Purpose: establish chronology and distinguish documented bodily movement from the projected/public itinerary.

- numbered documented stops;
- solid route for documented movement;
- dashed route for the planned/public itinerary;
- public-route points retained only in this mode.

### Operations

Purpose: show what kind of work dominated each stop.

Current operation vocabulary:
- mobility / transit;
- field encounter;
- drawing / microscopy;
- preservation;
- material circulation;
- coordination / mediation;
- repair / receiving-side work;
- workshop reassembly.

Markers retain chronological numbers while changing colour by dominant operation.

### Flows

Purpose: separate Rudolf’s bodily route from the movement of knowledge-bearing material and instructions.

Current explicit overlays include:
- Cambridge → Jamaica: arrangements, introductions, Cameron’s field role;
- Jamaica → Cambridge: seeds, dried/preserved material, drawings;
- Cambridge → Oakland: remote coordination / telegraphic route decisions;
- San Diego → Cambridge: cacti, bulbs, later California supply;
- Colorado Springs → Hosterwitz: prospective seed-dealer and cultivation supply;
- Cambridge → Hosterwitz: accumulated drawings, specimens, seeds and reference material returning to the workshop.

Prospective supply is visually distinguished from documented transfers.

## Numbering system

Chronological sequence numbers are now stable reading anchors across three surfaces:

1. map marker;
2. right-hand evidence panel;
3. route index below the map.

Numbers are chronology only. They are not confidence rankings.

## Evidence-panel grammar

Each stop is now forced through the same four questions:

- Encountered
- Done
- Moved onward
- Enabled later

Strong nodes can also expose:
- Why this node matters
- Evidence anchor

This prevents the detail rail from becoming a travel diary and makes comparison across stops possible.

## Strong analytical nodes currently emphasized

- Cambridge first arrival — commission, receiving side, mediation and route preparation;
- Hope Garden — observation, microscopy, colour drawing, preservation and divided labour;
- Cambridge return — sorting/circulation and the newspaper information lag;
- San Diego — delayed plant supply continuing after bodily departure;
- Oakland — remote coordination and telegraphic route change;
- Colorado Springs — future seed supply designed during fieldwork;
- St. Louis — botanical institution functioning as a temporary workshop annex;
- Cambridge final return — repair, incoming material and fieldwork overlapping;
- Hosterwitz — reassembly of the distributed reference system into model production.

## Data architecture

Geographic chronology remains in:
- `map/rudolf-1892/route-data.js`

The interpretive overlay is now separated into:
- `map/rudolf-1892/knowledge-data.js`

Interaction logic is separated into:
- `map/rudolf-1892/map.js`

This keeps route reconstruction distinct from later analytical enrichment. New species-level chains, images, letters or object links can be added to the knowledge layer without rewriting the route geometry.

## Public-route caution retained

The page continues to distinguish:
- documented route;
- planned/public itinerary;
- material flow;
- information flow;
- prospective supply.

The Shasta / Darlingtonia problem remains outside the secure route and should not be added as a visited node until the German original / image has been checked.

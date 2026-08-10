# Public navigation model

This file records the public information-architecture invariant so page-specific work does not silently change navigation semantics.

## Header: primary destinations

The site name/brand is always the Home control. The header uses one fixed sequence on every public page:

1. Cases
2. Map
3. People
4. Bibliography
5. Sources
6. Auctions
7. About

`Map` is a grouped research destination rather than a single page label. Opening it exposes two explicit child routes:

- `Collections map` → `/map/`
- `Rudolf 1892 journey` → `/map/rudolf-1892/`

The Map trigger remains in the same header slot on every page. A child map route marks the Map group as current while also marking the relevant child route inside the menu. This avoids the previous ambiguity in which the 1892 journey looked like the collections map itself.

`Project` remains a homepage chapter (`/#project`) reached by scrolling or the homepage Explore cue; it is deliberately not a global navigation item.

## Visual shell invariant

The homepage header is the canonical visual model for every public route. Secondary pages do not maintain a separate navigation design.

- Header geometry uses the same 1440 px maximum shell and the same side gutters as Home.
- Brand typography, navigation font, pill geometry, hit targets, spacing and Map dropdown styling are shared.
- Secondary-page content may keep its narrower reading width; the header does not inherit that narrower width.
- Secondary headers are part of the normal document flow, matching the non-sticky Home header rather than introducing a separate sticky bar.
- Legacy uppercase labels, underline animations, missing Map links and page-specific header spacing are overridden by the canonical shell.
- Desktop navigation may use the same restrained glide/focus surface; the Map trigger participates in that interaction exactly like the direct links.
- On mobile the item order remains identical and the row may scroll horizontally. The Map dropdown remains fully reachable.

`navigation-shell.css`, `unified-ui.js`, and the small Home navigation normalizer are the shared implementation layer. Pages with their own filtering scripts must request the same unified shell rather than maintaining a parallel header.

## Footer: utility destinations only

The footer does not repeat the primary navigation. It carries only secondary tasks and governance material:

- Contact
- Image rights
- Privacy
- Accessibility
- RSS

The project name and copyright notice remain in the footer as identity/ownership information, not as another navigation menu.

## Page-local navigation

Filters, A–Z controls, bibliography selection/export tools, role indexes, case matrices, map reading modes and in-page chronology links belong inside the page body. They must never be promoted into the global header or footer.

For the Rudolf 1892 journey, `Journey / Operations / Flows` are page-local reading modes. They are not global destinations and therefore remain inside the research map page.

## Interaction invariants

- Brand always returns Home.
- Global items keep the same order and geometry on every route.
- Map is the only grouped primary destination; its two child routes remain explicit.
- Click/tap/keyboard activation opens the Map menu; child links perform navigation.
- Touch users receive the same two Map destinations as desktop users.
- The mobile header preserves the desktop item order even when it becomes horizontally scrollable.
- A reader entering `/map/rudolf-1892/` must never be given one-level-up links such as `/map/cases/`; nested pages calculate the repository root from the static brand link before the canonical shell rewrites navigation.
- The footer answers secondary questions after reading; it does not duplicate choices already available at the top.

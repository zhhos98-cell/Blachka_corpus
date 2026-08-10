# CSS bundle audit — 11 August 2026

This note freezes the current CSS-bundle anatomy before any destructive split. The visual invariant is the deployed site: the cleanup should remove redundant transfer and page-family leakage without redesigning live pages.

## Current bundles

### `site-core.css` — 108,100 source bytes

`site-core.css` is a historical concatenation rather than one coherent component. Its embedded section markers show at least these live layers, in cascade order:

1. `apple-unified.css`
2. `subpage-v2.css`
3. `fluid-motion.css`
4. `site-rhythm.css`
5. `site-polish.css`
6. `header-minimal.css`
7. `footer-legal.css`
8. `nav-glide.css`
9. `mobile-v3.css`
10. `mobile-fixes.css`
11. `accessibility.css`
12. `scale-balance.css`
13. `navigation-shell.css`

Several of these layers contain selectors for multiple page families. In particular, `site-rhythm.css`, `site-polish.css`, and `scale-balance.css` mix Home, Cases, Bibliography, Sources, Auctions, People, and generic subpage rules. This is the main reason a simple file-level split would still ship irrelevant selectors.

### `home-core.css` — 64,769 source bytes

`home-core.css` is also a concatenation. Its embedded markers show:

1. `site-polish.css`
2. `home-curation-v2.css`
3. `origin-divider.css`
4. `home-nav-glide.css`
5. `mobile-v3.css`
6. `accessibility.css`
7. `scale-balance.css`

The homepage therefore carries substantial secondary-page rules from the shared historical layers. Examples include Bibliography, Sources, Auctions, People, and Cases-directory selectors that cannot match the homepage DOM.

## Immediate duplicate-request fix

Before this audit, `unified-ui.js` requested `navigation-shell.css` on every secondary page and requested `nav-glide.css` after load/idle on eligible desktop clients. Both stylesheets are already embedded inside `site-core.css`.

The 11 August change removes those duplicate stylesheet requests on ordinary secondary pages. Bibliography remains the deliberate exception because it does not load `site-core.css`; it still receives the small shell directly and the glide stylesheet only after load/idle.

Using repository source sizes, this avoids up to 9,298 bytes of redundant uncompressed CSS requests on an ordinary desktop secondary page (`navigation-shell.css` 7,047 bytes + `nav-glide.css` 2,251 bytes). This figure is source size, not compressed transfer size.

## Safe split target

Do not split by old filename alone. The next pass should generate page-family bundles from selectors actually used by the live DOM while preserving current cascade order.

Proposed families:

- `site-shared.css`: typography variables, subpage frame, canonical shell, footer, accessibility, mobile shell, shared controls.
- `site-cases.css`: case directory, long case evidence blocks, case media/motion.
- `site-indexes.css`: shared long-index mechanics for People, Bibliography, and Sources.
- `site-bibliography.css`: bibliography-only selection/export and row rules.
- `site-sources.css`: Sources filters, A–Z controls, source-record layout.
- `site-auctions.css`: auction/provenance sequence and controls.
- `home-core.css`: rebuilt as homepage-only rules, retaining the existing public filename if possible so the change does not proliferate another historical layer.

## Required verification before replacing bundles

For each target family:

1. Record current stylesheet request list and source byte total.
2. Capture desktop and narrow-width screenshots or an equivalent visual comparison of the live page.
3. Preserve keyboard focus, reduced-motion, forced-colour/high-contrast, and no-JS readable states.
4. Preserve DOM-complete long indexes and browser Find behaviour.
5. Compare the rebuilt bundle against the current cascade before deleting historical chunks.
6. Only after deployed verification should redundant constituent files be deleted or moved to design history.

## Do not do

- Do not introduce another `passNN` stylesheet.
- Do not minify first and call that a structural cleanup.
- Do not replace static research indexes with client-side pagination merely to lower HTML bytes.
- Do not remove multilingual font coverage during this CSS pass.
- Do not change research content, evidence status, links, or public URLs as part of bundle work.

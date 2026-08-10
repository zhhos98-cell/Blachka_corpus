# Site performance policy

Updated: 11 August 2026

This project is a research site first. Performance work should preserve documentary density, stable URLs, browser searchability, source links, accessibility, and the ability to read long indexes without product-style pagination.

## Loading order

Treat public pages as three layers.

1. **Critical:** HTML content, primary page CSS, navigation, search/filter controls, the first meaningful image, and accessibility required for ordinary use.
2. **Deferred enhancement:** carousels, navigation glide, secondary case visuals, reveal effects, preloads for images the reader has not asked to see, and other decorative interaction.
3. **Research/data layer:** long indexes and machine-readable registers. Keep these complete and queryable, but avoid laying out or painting records far below the viewport before they are needed.

On `Save-Data`, `slow-2g`, or `2g`, optional animation and speculative media loading should be suppressed. Manual navigation and explicit user requests still work.

## Current implementation

- `navigation-shell.css` uses `content-visibility:auto` for source, bibliography, and people records so long static indexes remain in the DOM and searchable while offscreen layout/paint can be deferred.
- `cases/cases-page.js` loads the small directory interaction first and waits to load the 42,955-byte secondary visual bundle until scroll/idle; it skips that bundle on compact or Save-Data clients.
- `home-v2.js` gives the first hero image priority. Navigation glide and speculative carousel preloading now wait until after `load`/idle; automatic carousel traffic is disabled on reduced-motion or bandwidth-constrained clients while manual slide selection remains available.
- `unified-ui.js` treats nav glide as decoration. Secondary pages load it only after `load`/idle and skip it on reduced-motion, mobile/tablet, Save-Data, or 2G clients.
- The old `sources-pass14.js`–`sources-pass37.js` paths are temporary 90-byte no-op compatibility files. The public source records are already static in `sources/index.html`; the script tags should disappear when the Sources shell is next rebuilt.

## Current large assets / structural targets

Repository sizes at this checkpoint:

- `sources/index.html`: 166,780 bytes
- `site-core.css`: 108,100 bytes
- `home-core.css`: 64,769 bytes
- `cases-visuals-bundle.js`: 42,955 bytes
- `home-v2.js`: about 17 KB before the current small guard additions
- `assets/fonts/EBGaramond-VariableFont_wght.woff2`: 284,548 bytes

These figures are source sizes, not compressed transfer sizes and not measured browser timings.

## Next cleanup order

### A. Remove dead compatibility requests

When `sources/index.html` is next regenerated, delete its 24 legacy `sources-pass14.js`–`sources-pass37.js` script tags. After deployment and link verification, delete the no-op compatibility files themselves.

### B. Split CSS by page family

`home-core.css` and especially `site-core.css` are consolidated historical bundles containing rules for page families that do not need them. The next structural optimization should extract stable bundles rather than minify blindly:

- home shell + home sections;
- common subpage shell;
- cases;
- long indexes (People / Bibliography / Sources);
- auctions / specialist pages.

Keep the current rendered design as the visual invariant. Do not remove a selector merely because its filename looks legacy; first verify which live page uses it.

### C. Revisit long HTML only after a canonical data source exists

Sources and Bibliography are large because their records are written into HTML. Static HTML has real research advantages: immediate text, browser Find, indexing, resilient links, and no JavaScript dependency. Do not replace it with client-side hydration merely to reduce the initial document unless a canonical consolidated JSON source and a no-JS fallback are both in place.

If the indexes become substantially larger, prefer server/build-time partitioning or progressive rendering over product-style pagination.

### D. Font optimization last

The local EB Garamond variable font is the single largest local asset. Any subsetting must preserve the characters actually used by the multilingual bibliography and names. Keep `font-display:swap`. Do not trade missing diacritics or scripts for a smaller file.

## Guardrails

- Measure before and after structural changes; source byte counts alone are not a performance score.
- Preserve first meaningful content before decorative motion.
- Avoid speculative fetches for content a reader may never view.
- Respect `prefers-reduced-motion` and `Save-Data`.
- Keep search/filter interactions usable without waiting for optional visual bundles.
- Prefer one stable implementation over accumulating another `passNN` layer.
- Performance cleanup must not alter research claims, evidence status, URLs, or source attributions.

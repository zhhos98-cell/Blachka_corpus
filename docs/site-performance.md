# Site performance policy

Updated: 11 August 2026

This project is a research site first. Performance work should preserve documentary density, stable URLs, browser searchability, source links, accessibility, and the ability to read long indexes without product-style pagination.

## Loading order

Treat public pages as three layers.

1. **Critical:** HTML content, primary page CSS, navigation, search/filter controls, the first meaningful image, and accessibility required for ordinary use.
2. **Deferred enhancement:** map tiles and secondary visuals that are only needed after explicit interaction.
3. **Research/data layer:** long indexes and machine-readable registers. Keep these complete and queryable, but avoid laying out or painting records far below the viewport before they are needed.

On `Save-Data`, `slow-2g`, or `2g`, optional animation and speculative media loading should be suppressed. Manual navigation and explicit user requests still work.

## Current implementation

- `navigation-shell.css` uses `content-visibility:auto` for source, bibliography, and people records so long static indexes remain in the DOM and searchable while offscreen layout/paint can be deferred.
- The homepage is intentionally static-first: one hero image, no carousel, no speculative hero preload, no family hotspot layer, and no navigation-glide dependency.
- Cases use a static documentary directory. The old illustrative image matrix, flip-card interaction, and deferred visual bundle have been removed.
- `unified-ui.js` supplies the canonical navigation and accessibility layer without injecting the historical 108 KB `site-core.css` bundle into ordinary secondary pages.
- People no longer depends on `site-core.css`; its page-specific stylesheet carries the reading layout and long-list containment directly.
- Collections Map keeps the institution index usable even when Leaflet or tiles fail; scroll-wheel zoom is disabled to avoid trapping ordinary page scrolling.

## Structural targets still in progress

The remaining high-value work is structural rather than cosmetic:

- remove the obsolete `sources-pass14.js`–`sources-pass37.js` requests from the generated Sources HTML, then delete the no-op compatibility files;
- detach Cases and Sources from the historical `site-core.css` bundle after their required shared selectors are explicitly moved into their page-family styles;
- inspect the People data-loading path before deciding whether the current JSON should be partitioned or retained as one cacheable payload;
- audit the 284,548-byte EB Garamond variable font against the actual multilingual glyph set before any subsetting.

## CSS strategy

`site-core.css` and `home-core.css` are historical concatenations, not architectural units. Several constituent layers mix selectors for Home, Cases, Bibliography, Sources, Auctions, People, and generic subpages. Future cleanup should therefore be selector-aware rather than filename-aware.

The target architecture is:

- shared shell / typography / footer / accessibility;
- Cases;
- long-index mechanics shared by People / Bibliography / Sources where genuinely identical;
- Bibliography-specific controls and rows;
- Sources-specific filters and records;
- Auctions / specialist pages;
- homepage-only rules.

Do not reintroduce a consolidated mega-bundle simply to reduce request count. Small stable page-family styles are preferable when they remove unused CSS from the critical path.

## Long HTML

Sources and Bibliography remain static HTML because this preserves immediate text, browser Find, indexing, resilient fragment links, and no-JavaScript access. Document size alone is not a reason to replace them with client-side hydration.

If either index grows substantially, prefer build-time generation with the same static output semantics, or progressive rendering with a complete no-JS fallback. Product-style pagination is not an appropriate optimization for the research corpus.

## People data

A single JSON payload is not automatically a defect. Partition it only if measurement shows that readers routinely need a small subset and the split reduces transferred bytes without increasing request overhead, duplicate metadata, or implementation complexity. If the payload remains roughly 100 KB and is strongly cacheable, keeping it consolidated may be the better design.

## Font optimization

The local EB Garamond variable font is the largest local single asset. Subsetting is acceptable only after a reproducible glyph audit over the public HTML, bibliography, people names, source records, and any non-English text. Preserve diacritics and required scripts, retain `font-display:swap`, and keep the OFL notice. Do not trade missing glyphs for a smaller transfer.

## Guardrails

- Measure before and after structural changes; source byte counts alone are not a performance score.
- Preserve first meaningful content before decorative enhancement.
- Avoid speculative fetches for content a reader may never view.
- Respect `prefers-reduced-motion` and `Save-Data`.
- Keep search/filter interactions usable without optional visual dependencies.
- Prefer one stable implementation over accumulating another `passNN` layer.
- Performance cleanup must not alter research claims, evidence status, stable URLs, or source attributions.

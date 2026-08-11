# Site performance policy

Updated: 11 August 2026

This is a research site first. Performance work must preserve documentary density, stable URLs, browser searchability, source links, accessibility and the ability to read long indexes without product-style pagination.

## Current rule

Load what the reader needs to read or act. Do not preload, animate or decorate content merely because the interface can.

Critical content is HTML, the page’s own styles, navigation, search/filter controls, the first meaningful image and accessibility required for ordinary use. Maps and comparison images may load when their page needs them. Decorative motion, speculative image preloads, carousel logic and navigation animation are not part of the current runtime.

## Current implementation

- The homepage uses one hero image. The former carousel, speculative hero preloading, family-image hotspots and reveal system are gone.
- The homepage no longer loads `home-core.css`; it uses focused homepage styles instead.
- `unified-ui.js` no longer injects the historical 108 KB `site-core.css` bundle or navigation-glide assets. It provides the small current navigation shell and accessibility support.
- Small reading pages such as People, About, Auctions, Rights, Privacy and Accessibility no longer load `site-core.css`.
- Navigation glide has been removed from the live runtime and the standalone `nav-glide.js` / `nav-glide.css` files have been deleted.
- The Cases directory is a static documentary index. The unrelated illustrative thumbnail wall, `case-wall-media.js` and the 42,955-byte `cases-visuals-bundle.js` have been removed.
- Sources and other long indexes use `content-visibility:auto` so all records remain in the DOM and browser-searchable while offscreen layout and paint can be deferred.
- Collection-map scroll-wheel zoom is disabled so the map does not trap ordinary page scrolling. Reduced-motion preferences are respected when the index moves focus back to the map.

## Remaining structural debt

### Sources

`sources/index.html` is still a large static document and still contains 24 legacy `sources-pass14.js`–`sources-pass37.js` script tags. Their tiny no-op compatibility files prevent 404 errors but do **not** remove the 24 requests. The correct fix is to rebuild the Sources shell without those script tags, then delete the compatibility files. Static records should remain available without client-side hydration.

### Cases and Sources legacy CSS

The large static Cases and Sources documents still link the historical `site-core.css` bundle. Both pages need a controlled shell rebuild before that dependency can be removed safely. Cases also still links `enhancements.css`; unlike its old homepage animation rules, that file contains live case-figure, timeline and source-row rules, so it should be split rather than simply deleted.

### People data

People currently downloads the full JSON index before rendering. This is acceptable at the present corpus size but remains a future target if the index grows substantially. Any split must preserve direct links, search and a useful no-JavaScript route to the records.

### Font

The local EB Garamond variable font remains the largest local asset. Subsetting comes last and only after multilingual glyph coverage has been audited. Keep `font-display:swap`; never trade missing names or diacritics for a smaller file.

## Guardrails

- Measure before and after structural changes; source bytes alone are not a performance score.
- First meaningful content takes priority over motion and decoration.
- Avoid speculative fetches for material the reader has not asked to see.
- Respect `prefers-reduced-motion` and `Save-Data` where optional media remains.
- Keep search/filter interactions usable without optional visual code.
- Prefer one stable implementation over accumulating another `passNN` layer.
- Performance cleanup must not alter research claims, evidence status, URLs or source attribution.

The historical bundle anatomy remains recorded in [`development/css-bundle-audit-2026-08-11.md`](development/css-bundle-audit-2026-08-11.md). It is now a debt map, not a description of what every page loads.

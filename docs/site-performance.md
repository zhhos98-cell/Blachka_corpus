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

- Public subpage HTML now carries the canonical seven-slot navigation shell directly. JavaScript no longer rewrites the navigation tree after load.
- `navigation-shell.css` uses `content-visibility:auto` for source, bibliography, and people records so long static indexes remain in the DOM and searchable while offscreen layout/paint can be deferred.
- `unified-ui.js` is a small fail-safe runtime: it adds shell/accessibility assets only when absent, loads accessibility behavior, manages Map-menu dismissal, adds RSS metadata when needed, normalises external-image referrer policy, and supplies a skip link when the static page lacks one. It no longer contains `site-core` detection, page-CSS cache rewrites, or navigation `innerHTML` replacement.
- The homepage is intentionally static-first: one hero image, no carousel, no speculative hero preload, no family hotspot layer, and no navigation-glide dependency.
- Cases use a static documentary directory. The old illustrative image matrix, flip-card interaction, and deferred visual bundle have been removed.
- People, Cases and Sources no longer depend on `site-core.css` for their public critical path; their required typography, mobile, navigation and accessibility layers are explicit.
- Collections Map keeps the institution index usable even when Leaflet or tiles fail; scroll-wheel zoom is disabled to avoid trapping ordinary page scrolling.

## Completed structural cleanup · 11 August 2026

### Sources

The generated Sources HTML no longer requests `sources-pass14.js` through `sources-pass37.js`. The 24 no-op compatibility files were deleted after the static source index was confirmed to contain the actual public records. Sources also no longer loads the historical 108 KB `site-core.css` bundle; it loads its page-family CSS plus the small shared navigation and accessibility layers directly.

The Sources document remains static HTML by design. That preserves immediate text, browser Find, indexing, resilient links and no-JavaScript access. Its document size should not be reduced by converting the research corpus into client-side hydration merely for a smaller initial HTML figure.

The current `*-register.json` layer is inventoried by `sources/register-manifest.json`. The manifest records structural shape and checksums without rewriting evidence-bearing register values.

### Cases

Cases no longer loads `site-core.css` or the retired `case-wall-matrix.css`. The page-family stylesheet now owns the documentary directory and intro rules directly, while shared navigation and accessibility CSS are explicit. This removes historical cross-family CSS from the Cases critical path without changing the ten case narratives or evidence links.

### People

The full authority dataset remains `people-data.json` at 103,740 bytes and continues to serve as the canonical machine-readable authority record. The public interface fetches `people-ui.json`, a 90,331-byte projection containing only fields actually used by the A–Z list, search, role filtering, biographies, open questions and links. All 153 records are retained, and the projection has been rebuilt from canonical data with zero diff.

The retired `people-part-01.json`–`people-part-17.json` shards and their stale manifest are no longer public inputs. They are preserved unchanged under `archive/data/people-shards-2026-08-10/` for provenance.

### Auctions

`auction-data.json` remains the single canonical public-auction lot table. Supporting routers, crosslinks, bounded audits and negative-control JSON files remain separate rather than being flattened into lot facts. `auctions/data-manifest.json` inventories the sixteen current Auction JSON layers structurally and verifies canonical `record_id` uniqueness without reconciling evidence conflicts.

### EB Garamond

The original variable font remains in the repository at 284,548 bytes. A public-corpus subset generated from current site HTML, JSON, JavaScript and XML is 101,632 bytes and is now the first font face requested by active page families. The full original font remains in the CSS stack as a missing-glyph fallback, so a future or unusual character can still render without silently sacrificing coverage.

Font cache keys were refreshed across active page families. The OFL notice and `font-display:swap` are retained.

## CSS strategy

`site-core.css`, `home-core.css`, and related historical UI layers were moved unchanged to `archive/ui/2026-08-11/` after an active-reference audit found no public runtime consumers. They remain available as rollback/provenance material for one release cycle, but they are not active architectural units.

The target architecture remains:

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

## Next measurement work

The remaining performance task is measurement rather than another speculative rewrite: compare real browser request waterfalls, transferred compressed bytes, first contentful paint and interaction on representative desktop/mobile connections. Source byte counts are useful architecture signals, but they are not a browser performance score.

After measurement, the next candidates should come from observed transfer/render costs. Do not split People further, remove the full font fallback, or restructure the long static indexes without evidence that the change improves real browsing behavior.

## Guardrails

- Measure before and after structural changes; source byte counts alone are not a performance score.
- Preserve first meaningful content before decorative enhancement.
- Avoid speculative fetches for content a reader may never view.
- Respect `prefers-reduced-motion` and `Save-Data`.
- Keep search/filter interactions usable without optional visual dependencies.
- Prefer one stable implementation over accumulating another `passNN` layer.
- Performance cleanup must not alter research claims, evidence status, stable URLs, or source attributions.

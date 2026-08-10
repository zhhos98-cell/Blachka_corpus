# Public-site design guidelines

Last reviewed: 2026-08-10

This note defines the visual QA rules for the Blaschka Object Network. It is intentionally stricter than a general style guide: assume every surface, rule, statistic, animation and decorative layer needs to justify itself.

## Core principle

Content is the primary layer. Navigation and controls form a distinct functional layer. Decorative material must remain subordinate to both.

Reference principles:
- Apple HIG — hierarchy, simplicity, layout, materials, motion: https://developer.apple.com/design/human-interface-guidelines/
- Rijksmuseum collection discovery — browse/search paths remain distinct and content-led: https://www.rijksmuseum.nl/en/collection/discover
- GOV.UK Design System — controls are explicit, consistent and action-led: https://design-system.service.gov.uk/components/
- WCAG 2.2 — minimum target size and visible focus: https://www.w3.org/TR/WCAG22/

## 1. Divider budget

Use spacing first, typography second, a rule third.

- A major page section may use one structural divider when the transition would otherwise be ambiguous.
- Do not put a border around a group and then add borders between every item inside it.
- Dense bibliography, source and auction lists should normally be separated by vertical rhythm rather than a rule per record.
- A line that does not communicate hierarchy, grouping, state or action should be removed.

## 2. Surface budget

- Rounded or translucent surfaces are reserved for controls, navigation and deliberate feature imagery.
- Body text, citations, source notes, dates and metadata should not become cards by default.
- Avoid nested cards.
- Avoid glass/material effects in the content layer.

## 3. Typography

- EB Garamond is the reading face for narrative, bibliography and long-form evidence.
- System sans-serif is the interface face for navigation, controls, metadata labels and status feedback.
- Headings establish hierarchy through scale and spacing; do not add an underline simply because a heading starts a section.
- Keep reading measure broad enough that long citations do not collapse into narrow columns.

## 4. Controls

- Controls should look interactive before hover.
- Prefer one primary action per local context.
- Group related controls by proximity and shared alignment, not by a large enclosing box.
- Pointer targets should comfortably exceed WCAG minimums; mobile controls should generally approach 40–44px in height.
- Keyboard focus remains explicit even when mouse hover is subtle.

## 5. Search and discovery

- Home search asks the user what corpus to search and then routes them to the relevant page.
- Results pages may expose filters after the user arrives; avoid reproducing a database query form on the landing page.
- Cases homepage = featured discovery.
- Cases directory = browse index.
- Individual case = evidence-rich object/history view.
- Bibliography = reading list with optional selection/export tools.

## 6. Motion

- Motion communicates continuity, hover/focus feedback or page change.
- Prefer opacity and transform; avoid blur-heavy reveal systems.
- Animate sections, not hundreds of bibliography/source rows.
- Frequent controls need short feedback, not theatrical movement.
- Respect `prefers-reduced-motion`.

## 7. Images and background layers

- One dominant image per visual field.
- Secondary images may overlap only when they clarify editorial hierarchy.
- Maps and chronology graphics are either information or atmosphere; do not make the same layer compete as both.
- Background maps should occupy negative space and fade before reaching long text.
- Decorative watermarks should be extremely low contrast and should disappear on small screens when they compromise reading.

## 8. Responsive QA widths

Check at minimum:
- 390px phone
- 430px large phone
- 768px tablet
- 1024px small laptop/tablet landscape
- 1440px desktop
- 1920px wide desktop

At every width ask:
1. What is the first thing the eye sees?
2. What is the next likely action?
3. Is any line, box, statistic, label or animation competing with those two answers?
4. Would deleting one visible element improve the page?

## Useful contrast cases

### Patterns to borrow

**Apple HIG**
Clear hierarchy between content and functional controls; concise motion; large, comfortable controls; progressive disclosure.

**Rijksmuseum collection discovery**
Search, browse, thematic discovery and object content are distinct paths instead of one overloaded interface.

**GOV.UK Design System**
Control meaning is explicit. Primary actions remain visually legible and components are consistent.

### Patterns to avoid for this project

**Large aggregator search interfaces**
The Smithsonian Collections Search Center demonstrates a valid pattern for tens of millions of heterogeneous records, but its many pre-search checkboxes, categories, counts and repository choices would be excessive for this project's much smaller, curated corpus. Do not copy aggregator-level control density onto the Blaschka landing pages.

**Dashboard drift**
Avoid turning research metadata into badges, cards, progress meters or pseudo-statistics merely because the data exists.

**Separator accumulation**
Avoid the combination of: outer bordered panel + inner group dividers + heading rule + per-row rules. At most one of these should usually survive in a single visual field.

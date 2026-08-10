# Public-site design guidelines

Last reviewed: 2026-08-10

This note defines the visual QA rules for the Blaschka Object Network. It is intentionally stricter than a general style guide: assume every surface, rule, statistic, animation, offset and decorative layer is wrong until it justifies itself in context.

## Core principle

Content is the primary layer. Navigation and controls form a distinct functional layer. Decorative material remains subordinate to both. A page should look composed before borders, animation or background effects are added.

Reference principles:
- Apple HIG — hierarchy, simplicity, layout, materials, motion: https://developer.apple.com/design/human-interface-guidelines/
- Rijksmuseum collection discovery — browse/search paths remain distinct and content-led: https://www.rijksmuseum.nl/en/collection/discover
- V&A collections — search and browse are explicit discovery paths: https://www.vam.ac.uk/collections
- GOV.UK Design System — consistent responsive spacing and explicit controls: https://design-system.service.gov.uk/styles/spacing/
- USWDS — reusable spacing tokens instead of page-by-page arbitrary values: https://designsystem.digital.gov/design-tokens/spacing-units/
- WCAG 2.2 — minimum target size and visible focus: https://www.w3.org/TR/WCAG22/

## 1. Spatial rhythm

The public site uses a compact spacing vocabulary instead of unrelated per-component values. Current canonical tokens live in `site-rhythm.css`.

Use the smallest distance that makes the relationship unambiguous:
- 6–10px: metadata within one item, label to control, link line below citation
- 16px: closely related text/control spacing
- 24px: normal item padding or heading-to-body transition
- 36–52px: subsection transition
- 76–104px: major page/section transition

Responsive layouts reduce the larger intervals first. Small internal intervals remain relatively stable so controls and citations do not collapse on mobile.

## 2. Optical spacing and alignment

Mathematical equality does not guarantee visual alignment. Judge the visible edge of type and imagery.

- Text must never appear to kiss a border. If a rule survives, leave enough space for the rule to read as structure rather than an underline accidentally attached to nearby text.
- A border surrounding controls needs larger internal padding than the gap between related controls. If that cannot be achieved elegantly, remove the border.
- Labels align to the visible control group they describe, not to an arbitrary container edge.
- Checkbox, year and citation columns align independently. Do not position the checkbox by a negative left offset from the citation.
- Image captions align with the image edge and sit closer to their image than to the next text block.
- When two columns begin at the same visual level, align their first meaningful content baseline rather than merely their container tops.
- Avoid unexplained 1–8px offsets. Small offsets are allowed only for genuine optical correction.

## 3. Divider budget

Use spacing first, typography second, a rule third.

- A major page section may use one structural divider when the transition would otherwise be ambiguous.
- Do not put a border around a group and then add borders between every item inside it.
- Dense bibliography, source and auction lists normally use vertical rhythm rather than a rule per record.
- A line that does not communicate hierarchy, grouping, state or action is removed.
- Never combine outer bordered panel + heading rule + per-row rules in one visual field.

## 4. Surface budget

- Rounded or translucent surfaces are reserved for controls, navigation and deliberate feature imagery.
- Body text, citations, source notes, dates and metadata do not become cards by default.
- Avoid nested cards.
- Avoid glass/material effects in the content layer.
- A hover background can indicate a clickable row without making the row look permanently boxed.

## 5. Typography

- EB Garamond is the reading face for narrative, bibliography and long-form evidence.
- System sans-serif is the interface face for navigation, controls, metadata labels and status feedback.
- Headings establish hierarchy through scale and spacing; do not add an underline simply because a heading starts a section.
- Keep reading measure broad enough that long citations do not collapse into narrow columns.
- UI labels should remain visibly secondary to citation and narrative text.

## 6. Controls

- Controls look interactive before hover.
- Prefer one primary action per local context.
- Group related controls by proximity and shared alignment, not by a large enclosing box.
- Pointer targets comfortably exceed WCAG minimums; mobile controls generally approach 40–44px in height.
- Keyboard focus remains explicit even when mouse hover is subtle.
- Button labels should have enough internal padding to appear centred optically, especially in rounded pills.

## 7. Search and discovery

- Home search asks the user what corpus to search and then routes them to the relevant page.
- Results pages may expose filters after the user arrives; avoid reproducing a database query form on the landing page.
- Cases homepage = featured discovery.
- Cases directory = browse index.
- Individual case = evidence-rich object/history view.
- Bibliography = reading list with optional selection/export tools.

## 8. Motion

- Motion communicates continuity, hover/focus feedback or page change.
- Prefer opacity and transform; avoid blur-heavy reveal systems.
- Animate sections, not hundreds of bibliography/source rows.
- Frequent controls need short feedback, not theatrical movement.
- Respect `prefers-reduced-motion`.

## 9. Images and background layers

- One dominant image per visual field.
- Secondary images may overlap only when they clarify editorial hierarchy.
- Maps and chronology graphics are either information or atmosphere; do not make the same layer compete as both.
- Background maps occupy negative space and fade before reaching long text.
- Decorative watermarks are extremely low contrast and disappear on small screens when they compromise reading.

## 10. Responsive QA widths

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
4. Does text have a natural distance from the nearest edge, image, border and neighbour?
5. Are controls and their labels visibly one group?
6. Are columns optically aligned, or merely numerically aligned?
7. Would deleting one visible element improve the page?

## Useful contrast cases

### Patterns to borrow

**Apple HIG**
Clear hierarchy between content and functional controls; concise motion; comfortable hit areas; progressive disclosure.

**Rijksmuseum collection discovery**
Search, browse, thematic discovery and object content are distinct paths instead of one overloaded interface.

**V&A Collections**
A large collection can expose focused search and browse themes without turning every introductory element into a panel.

**GOV.UK / USWDS**
Spacing behaves as a system. Repeated intervals make complex pages feel intentional even when individual components differ.

### Patterns to avoid for this project

**Large aggregator search interfaces**
Interfaces designed for millions of heterogeneous records often need many pre-search checkboxes, categories, counts and repository choices. That density is excessive for this smaller curated corpus. Do not copy aggregator-level control density onto the Blaschka landing pages.

**Dashboard drift**
Avoid turning research metadata into badges, cards, progress meters or pseudo-statistics merely because the data exists.

**Separator accumulation**
Avoid the combination of outer bordered panel + inner group dividers + heading rule + per-row rules. At most one of these should usually survive in a single visual field.

**Accidental geometry**
Avoid tiny unexplained offsets, uneven internal padding, text sitting too close to rules, controls that are technically centred but visually low/high, and columns that align by box rather than by visible content.
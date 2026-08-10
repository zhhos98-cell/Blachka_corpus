# Public navigation model

This file records the public information-architecture invariant so page-specific work does not silently change navigation semantics.

## Header: primary destinations

The site name/brand is always the Home control. The header then uses one fixed sequence on every public page:

1. Project — homepage project chapter (`/#project`)
2. Cases
3. People
4. Bibliography
5. Sources
6. Auctions
7. About

Entering a page must not reorder, add, remove or rename these destinations. The current primary page receives `aria-current="page"` but stays in exactly the same slot. The Project anchor is not treated as the current page on secondary routes.

The point is spatial memory: after one page, the reader should already know where every primary destination will be on the next page.

## Footer: utility destinations only

The footer does not repeat the primary navigation. It carries only secondary tasks and governance material:

- Contact
- Image rights
- Privacy
- Accessibility
- RSS

The project name and copyright notice remain in the footer as identity/ownership information, not as another navigation menu. People is no longer duplicated in the footer because it is a primary research destination.

## Page-local navigation

Filters, A–Z controls, bibliography selection/export tools, role indexes, case matrices and in-page chronology links belong inside the page body. They must never be promoted into the global header or footer.

## Interaction invariants

- Brand always returns Home.
- Global items keep the same order and geometry on every route.
- Hover can preview or highlight; hover must never navigate.
- Click/tap/keyboard activation performs navigation or selection.
- Touch users must receive the same core information without hover.
- The mobile header preserves the desktop item order even when it becomes horizontally scrollable.
- A reader entering any route should not need to relearn where a global destination lives.
- The footer answers secondary questions after reading; it does not duplicate the choices already available at the top.

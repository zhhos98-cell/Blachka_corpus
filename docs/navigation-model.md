# Public navigation model

This file records the public information-architecture invariant so page-specific work does not silently change navigation semantics.

## Header: primary destinations

The site name/brand is always the Home control. The header then uses one fixed sequence on every public page:

1. Project — homepage project chapter (`/#project`)
2. Cases
3. Bibliography
4. Sources
5. Auctions
6. About

Entering a page must not reorder, add, remove or rename these destinations. A current primary page may receive `aria-current="page"`; the Project anchor is not treated as the current page on secondary routes.

## Footer: utility destinations

The footer does not repeat the primary navigation. It carries secondary tasks and governance material:

- People
- Contact
- Image rights
- Privacy
- Accessibility
- RSS

The project name and copyright notice remain in the footer as identity/ownership information, not as another navigation menu.

## Page-local navigation

Filters, A–Z controls, bibliography selection/export tools, role indexes, case matrices and in-page chronology links belong inside the page body. They must never be promoted into the global header or footer.

## Interaction invariants

- Hover can preview or highlight; hover must never navigate.
- Click/tap/keyboard activation performs navigation or selection.
- Touch users must receive the same core information without hover.
- The mobile header preserves the desktop item order even when it becomes horizontally scrollable.
- A reader entering any route should not need to relearn where a global destination lives.
- The footer should answer secondary questions after reading, not duplicate the choices already available at the top.

# Frozen 155 → UK microscopy corpus expansion queue — v1

This is a **derived routing layer** over the sealed `CLOSED_2026-08-09` 155-entry microscope-slide catalogue. It does not alter the frozen catalogue or reopen discovery.

The purpose is to use surviving-object nodes to decide what textual material is worth adding next to the nineteenth-century microscopy corpus.

## Current text corpus used for routing

Literal routing checks were run against the seven current UK microscopy masters:

- `01A_UK_Microscopy_Core_Early_Central_1844-1877`
- `01B_UK_Microscopy_Core_Professional_1869-1886`
- `01C_UK_Microscopy_Core_Clubs_Popular_Local_1865-1886`
- `02A_UK_Microscopy_Extensions_1847-1867`
- `02B_UK_Microscopy_Extensions_1868-1875`
- `02C_UK_Microscopy_Extensions_1876-1883_and_Special_OCR`
- `03_UK_Microscopy_BNA_MASTER`

The practical corpus window is therefore treated as approximately **1844-1886**. A node wholly after 1886 or before 1844 receives a priority penalty unless its historical chain crosses into the current corpus window.

## Important limitation

`exact actor` and `distinctive surname` signals are routing evidence only. They are fixed-string/OCR presence tests, not verified historical hits. Counts can be inflated by repeated metadata, indexes, OCR duplicates, or repeated source units. Every positive signal still requires inspection of the actual text context before it becomes evidence.

## Queue structure

The external planning workbook/CSV separates four tracks:

1. **Expansion gaps** — event-rich, trade-rich, or serial-set object nodes with no or weak reliable actor signal in the present textual corpus.
2. **Immediate bridges** — object nodes whose named actors already have exact literal signals in the current corpus, making them strong candidates for rapid object↔text closure.
3. **Serial sets** — published/distributed numbered preparations, kept separate because serial endpoints are not surviving-slide totals.
4. **Custody gaps** — surviving nodes for which the museum-facing object source gives present custody but no explicit historical acquisition/transfer route.

The queue also stores suggested source families, three bounded search strings, event hooks, corpus-window fit, and manual status fields.

## v1 routing counts

- 155 frozen object nodes routed.
- Priority: **7 P1**, **30 P2**, **38 P3**, **80 P4**.
- Actor-routing signal: **25 strong exact**, **14 moderate exact**, **12 weak exact**, **30 multi-corpus surname-only**, **6 surname-only**, **68 no reliable actor signal**.
- 21 nodes form the first `Expansion_Gaps` sheet after current-window and canonical-saturation adjustments.
- 32 nodes form the first `Immediate_Bridges` sheet.
- 7 nodes are isolated as published/distributed `Serial_Sets`.
- 76 nodes are marked as `Custody_Gaps`.

## P1 tranche

The first short tranche is deliberately small:

- `UK-UCL-GRANT-MUSEUM-HISTORICAL-SLIDES-MID19C-MIXED` — Robert Edmund Grant / dealer-slide / borrowing and purchase trail.
- `US-FARLOW-HL-SMITH-DIATOMACEARUM-1876` — Hamilton Lanphere Smith; published/distributed diatom set; no reliable exact-actor signal in the present UK corpus.
- `AU-POWERHOUSE-BOX-19-SLIDES-1860` — Dancer / Watson object node already has exact corpus signals and is an immediate bridge rather than a new-name gap.
- `UK-STANDREWS-CHARLES-COLLINS-SLIDES` — commercial zoological slides, sale/purchase route, no reliable actor signal yet.
- `UK-STANDREWS-NAPOLI-FRITZ-MEYER-SLIDES-1881` — Naples teaching/commercial distribution route, inside the corpus window.
- `US-FARLOW-EULENSTEIN-DIATOMACEARUM-1867` — Eulenstein numbered/published diatom set; only weaker surname-level routing signal.
- `US-FARLOW-KITTON-NORFOLK-DIATOMS-1885` — Kitton numbered/published diatom set; only weaker surname-level routing signal.

Canonical Quekett/RMS material is not allowed to dominate the queue merely because it produces many corpus hits; it is retained only where a specific object/event gap warrants inspection.

## Recommended use

For each queue row:

1. run the bounded actor + object / actor + event / actor + hook queries;
2. inspect actual text context;
3. record source ID, page/date, and the exact relationship asserted;
4. set `text_hit_verified` only after contextual review;
5. add genuinely new source units to the text corpus;
6. never infer preparation from ownership/use, and never collapse serial endpoints, cabinet capacities, current aggregates, or database rows into slide counts.

This layer is intended to replace open-ended periodical sweeping with object-generated, event-specific corpus expansion.
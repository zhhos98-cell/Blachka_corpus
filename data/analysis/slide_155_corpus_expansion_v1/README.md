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
- `US-FARLOW-HL-SMITH-DIATOMACEARUM-1876` — Hamilton Lanphere Smith; published/distributed diatom set.
- `AU-POWERHOUSE-BOX-19-SLIDES-1860` — Dancer / Watson object node; control bridge rather than a new-name gap.
- `UK-STANDREWS-CHARLES-COLLINS-SLIDES` — commercial zoological slides and sale route.
- `UK-STANDREWS-NAPOLI-FRITZ-MEYER-SLIDES-1881` — Naples preparation/distribution route.
- `US-FARLOW-EULENSTEIN-DIATOMACEARUM-1867` — Eulenstein numbered/published diatom set.
- `US-FARLOW-KITTON-NORFOLK-DIATOMS-1885` — Kitton numbered/published diatom set.

Canonical Quekett/RMS material is not allowed to dominate the queue merely because it produces many corpus hits; it is retained only where a specific object/event gap warrants inspection.

## First contextual verification pass

The literal-routing layer understated several actors because initials, OCR variants and name forms disrupted exact matching. Contextual reading of the corpus nevertheless validated the object-first method very quickly.

### Eulenstein

Direct contemporary material is already present. QJMS 1867 pp. 64-65 describes two series, slide format, labelling, five 100-species parts and ordering through R. & J. Beck. *Science-Gossip* 1867 p. 188 describes five sections of 100 mounted slides and solicits English diatom gatherings. QJMS 1869 pp. 325-326 records Eulenstein's purchase of the late Dr Arnott's diatom material and his readiness to issue series from it. The 1869 Arnott event is retained as related circulation evidence, not silently equated with the surviving 1867 Farlow set.

### Charles Collins

The corpus directly closes the commercial fish-scale/fish-skin series. *Science-Gossip* 1884 p. 87 identifies the issuing slide maker as Charles Collins Jr., nephew of the better-known microscope maker. An 1885 advertisement in the *Journal of Microscopy and Natural Science* lists three priced `Special` Micro Slide series and states that Collins Jr.'s slides were stocked at the senior Collins shop. The RMS bibliography also points to *Microscopical News* IV (1884), p. 109, which remains a bounded source-ingest target. Senior and junior Collins remain separate identities.

### Fritz Meyer / Stazione Zoologica Napoli

JRMS 1880 p. 700 reports Naples slides sent to the Society through A. W. Waters and says a Fritz Meyer-managed department had begun large-scale preparation of microscopical objects, with a list forthcoming. Quekett proceedings in 1882 p. 194 record chick-embryo specimens explicitly prepared by Fritz Meyer. The obvious next primary source is the sixteen-page 1881 Naples price catalogue described by St Andrews.

### H. L. Smith

The corpus already contains strong actor/circulation evidence, but not yet the primary American text for the specific published set. The RMS cabinet report records 146 diatom slides presented by Smith in 1867; these predate the 1876-1888 set and are kept separate. Quekett 1876 p. 177 contains Smith's own mounting method. Most importantly, JRMS 1878 p. 304 gives a precise bibliographic pointer to `Notes on Century III of the Species Typicae Diatomacearum` in the August American microscopy journal. That American item is now a P1 ingest target.

### Kitton

The current corpus directly closes at least the first two published Norfolk slide series. *Science-Gossip* 1884 p. 260 reports the first series issued in a case, with named slides and catalogue; the 1885 volume p. 18 reports the second series of the `Century`. Quekett 1885 p. 178 supplies the link to Kitton's broader Norfolk diatom list. A contemporary notice/prospectus for Series III-IV remains a bounded follow-up if the full four-series publication sequence is needed.

The verified rows are stored in `OBJECT_TEXT_BRIDGES_V1.csv`; sources still worth adding are isolated in `OPEN_PRIMARY_SOURCE_TARGETS_V1.csv`.

## Recommended use

For each queue row:

1. run the bounded actor + object / actor + event / actor + hook queries;
2. inspect actual text context;
3. record source ID, page/date, and the exact relationship asserted;
4. set `text_hit_verified` only after contextual review;
5. add genuinely new source units to the text corpus;
6. never infer preparation from ownership/use, and never collapse serial endpoints, cabinet capacities, current aggregates, or database rows into slide counts.

This layer is intended to replace open-ended periodical sweeping with object-generated, event-specific corpus expansion.
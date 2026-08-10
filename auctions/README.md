# Auction provenance layer

This directory records public auction appearances and market-adjacent provenance evidence for Blaschka models. The layer exists to close custody gaps, not to operate as a price guide.

## Admission rule

Include a public auction appearance when the checked sources do not explicitly identify the buyer as a museum, university or comparable institutional collection. If an institutional buyer is explicitly documented, that acquisition belongs in the collection/provenance layer instead.

Earlier institutional custody does not exclude a later market appearance. Auction appearance does not prove private ownership. Unknown buyers remain `post_sale_custody: open`. Qualified attributions stay qualified. Estimates, hammer prices, buyer-premium-inclusive prices, passed lots, withdrawn lots and conflicting platform statuses are never silently normalised.

## Canonical state · 10 August 2026

`auction-data.json` remains deliberately conservative:

- **11** included lot records
- **7** auction-event groups
- **13** physical-object appearances reported by those lots
- earliest canonical public-auction record: **2005**
- latest canonical record: **2026**
- **1** high-confidence inferred reoffer link
- **2** records with explicit result/status conflicts
- **6** original rejected false positives retained in the canonical file

A supplementary 2023 Wimbledon cluster adds **5 further rejected lots**, so the researched rejected-lot corpus is at least **11** across canonical and supplementary layers. The included-lot count remains 11.

The historical market search reaches earlier than the canonical table. A December **1904** *Museums Journal* notice offered **300 Blaschka invertebrate models** from the Philip Brookes Mason estate, but the documented endpoint is Mrs Mason's **1909 institutional sale to Glasgow Museums for £275**. That institutional purchase remains outside the auction count.

## Structured files

- `auction-data.json` — canonical public-auction lot table.
- `auction-provenance-crosslinks.json` — inferred collector/object links, dealer evidence, prior institutional labels and other cross-source evidence that must not be flattened into lot facts.
- `auction-historical-market-seeds.json` — pre-2005 and market-adjacent research seeds.
- `auction-newspaper-audit.json` — bounded reuse of the project's BNA query matrix.
- `auction-catalogue-recoveries.json` — sale codes, exact lot numbers and single-owner sale context recovered after initial ingest.
- `auction-archive-router.json` — archive series, exact identifiers and order of attack after generic web search reached diminishing returns.
- `berlin-krefeld-provenance-audit.json` — HU versus Museum für Naturkunde provenance audit for Krefeld 2025 lots 26–27.
- `krefeld-hydractinia-156-crosswalk.json` — resolves lot 27 `Stachelpolyp` to *Hydractinia echinata* and Blaschka model-design no. **156**.
- `auction-science-museum-recipient-audit.json` — public-web audit of the Science Museum 1925–27 recipient problem.
- `science-museum-register-neighborhoods.json` — exact old-number split between Cardiff institutional transfer and later Christie’s market circulation.
- `ucl-science-museum-transfer-candidate-audit.json` — partitions eight public UCL Blaschka accessions by provenance evidence.
- `ucl-catalogue-card-index-router.json` — routes the unresolved UCL transfer through the Lankester catalogue, early card index and MDA cards.
- `auction-false-positive-wimbledon-2023.json` — five shell-and-wax lots explicitly catalogued `in the manner of` the Blaschkas; retained as a negative-control cluster.
- `auction-historical-catalogue-family-worklist.json` — old Christie’s, Sotheby’s, Phillips and Bonhams catalogue families to screen at full-catalogue level when scans/OCR become available.
- `auction-catalogue-library-holdings-router.json` — institutional holdings for the high-priority scientific/model catalogue family, especially UCLA Clark and Museo Galileo.

## Current high-value findings

### Grisebach 2015

The `Serpula contortuplicata / L. No. 343` appearance is **ORANGERIE. Selected Objects**, sale **249**, lot **483**, Berlin, 26 November 2015. The primary Grisebach object page and realized result remain open.

### Christie’s 2019 / Peter Petrou / Science Museum

Lots 46–48 were sold in a Christie’s sale explicitly presented as the collection of **Peter Petrou**. The safe chain is:

`Science Museum 1877 → deaccession 1925–27 → unresolved ownership gap → Peter Petrou collection/sale context by Jan 2019 → Christie’s → buyer open`

No direct Science Museum-to-Petrou transfer or acquisition date is inferred.

### Krefeld 2025 / Berlin

Lot 27 `Stachelpolyp` can be normalized to ***Hydractinia echinata***; Cornell identifies the model design as Blaschka no. **156**.

The project's complete transcription of the published MfN `OS001-02 Blaschka Glasmodelle` inventory has **40 rows**, minimum **59** explicitly stated physical components and **28** distinct catalogue-number segments. It contains no *Hydractinia echinata*, `Stachelpolyp` or no. 156. This is a strong negative for the present published OS001-02 inventory only.

HU remains the stronger next route because both Krefeld lots carry `Zoolog. Institut Universität, Berlin` labels and HU documents a **1970 reduction** involving gifts, losses and transfers to MfN. The 1970 event is a provenance window, not an object-level disposal date.

The Berlin archive route is explicit: HU historical inventories and reduction files; MfN `S001`, `S003`, `S004-04` and `S005-02`. MfN physical archive access is currently suspended, so remote file-level enquiry is the immediate route.

### Science Museum register neighbourhoods

Cardiff transfer records and Christie’s 2019 lots expose mixed dispersal at consecutive-number scale:

- `1877-360` → Christie’s/private-market survival
- `1877-361` → Cardiff institutional transfer
- `1877-380` → Cardiff institutional transfer
- `1877-381` → Christie’s/private-market survival

Adjacency does **not** prove shared shipment, ownership or workshop set. It makes the register neighbourhood a high-value archival search unit. Priority bundles are `360/361` and `376/380/381/385/397`.

The same crosswalk exposes a model-number conflict around **330**: Cardiff and Cornell associate no. 330 with `Pontobdella (Hirudo) vittata`; James D. Julia's 2005 auction record transcribes its card as `Pontobdella Muricata, L. No 330`. Preserve the conflict. Shared catalogue number means repeated model design, not shared physical object.

### UCL provenance partition

Eight public UCL Blaschka accession anchors now partition as:

- **3 explicit Lankester layer**: `LDUCZ-P130`, `P161`, `P191`
- **1 independently pre-transfer UCL object**: `LDUCZ-C182`, documented in a 1911 Practical Zoology notebook
- **4 unresolved early-UCL versus Science-Museum candidates**: `P202`, `P196`, `C373`, `S73`
- **0 publicly indexed object-level Science Museum assignments** so far

Current UCL sources use `1890` for the Lankester catalogue/collection field, while a UCL documentation-history article says the first catalogue was published in `1891` and describes it as part catalogue, part wishlist. Both source-native date claims remain visible.

UCL's **early-1900s–1970s card index** spans the 1925–27 Science Museum transfer and is now the highest-value UCL source. Later MDA cards may preserve acquisition and conservation fields but can conflict with one another.

### Wimbledon 2023 false-positive cluster

Wimbledon Auctions, 13 February 2023, lots **33–37**, forms a concentrated search-engine false positive. All five headings say `IN THE MANNER OF LEOPOLD AND RUDOLF BLASCHKA`; the objects are explicitly shell-and-wax / shell-and-waxwork anatomical sea-snail models.

Displayed hammers were £500, £340, £480, £550 and £200. These prices are **not Blaschka market evidence**. The five lots are rejected because attribution is expressly qualified and the material tradition is different.

High-precision review triggers now include `in the manner of`, `shell and wax`, `waxwork` and `papier-mâché`. They trigger inspection, not automatic rejection.

### Historical catalogue families and holdings

Passes 16–17 move beyond maker-name indexing into catalogue-family and institutional-holdings discovery. No listed catalogue is treated as containing Blaschka material until its lot text is screened.

Highest-priority families remain:

1. Christie’s scientific / medical / engineering models.
2. Christie’s Natural History.
3. Bonhams science / technology / marine.
4. Phillips Scientific Instruments.
5. Sotheby’s English/Continental/European glass.

The Christie’s scientific/model family is now materially stronger than initially mapped. It includes 29 May 1997, 8 Apr and 28 May 1998, 15 Apr 1999, 11 Apr 2002, 10 Apr 2003, 8 Apr 2004, and then explicit scientific/natural-history crossover sales in **2005**: 7 Apr `Exceptional Scientific and Engineering Works of Art, including Natural History`, 29 Jun `Scientific and Medical Works of Art and Natural History`, and 19 Oct `Scientific, Medical and Engineering Works of Art, Instruments and Natural History`.

Institutional holdings reduce the need to buy isolated scans:

- **William Andrews Clark Memorial Library, UCLA** has a 144-linear-foot auction-catalogue collection open to researchers. It specifically catalogs Christie’s South Kensington `MSI-8351`, 15 Apr 1999, `Exceptional Scientific and Engineering Works of Art, Instruments and Models`, Box 65; and `MSI-9355`, 11 Apr 2002, Box 71.
- **Museo Galileo Library** records a continuing Christie’s South Kensington holding `Scientific and engineering works of art, instruments and models`, **1997–2001**, followed by `Scientific, medical and engineering works of art`, **2002–2006**. It also separately holds the 7 Apr 2005 catalogue explicitly including Natural History.

These are holdings, not digitized negatives. The next step is to determine issue-level coverage and remote reproduction/consultation before paying for commercial scans.

Christie’s also retains individual historical lot pages from these sale families. Targeted maker-name searching of those pages has not produced an older physical Blaschka model so far, but search-engine absence is not equivalent to a complete browse of every lot.

Once any catalogue scan is obtained, screen the **entire catalogue**, not the first hit, using maker variants plus object-class terms such as `glass model`, `zoological model`, `natural history model`, `teaching model`, `jellyfish`, `sea anemone`, `coral`, `hydroid`, `mollusc`, `slug`, `worm`, `Dresden`, `L. No.` and `Nr.`.

## Research logs

Detailed decisions are preserved in `../research/logs/` through:

- `2026-08-10-auction-deep-sweep-pass14-ucl-card-index-router.md`
- `2026-08-10-auction-deep-sweep-pass15-wimbledon-wax-false-positive-cluster.md`
- `2026-08-10-auction-deep-sweep-pass16-historical-catalogue-families.md`
- `2026-08-10-auction-deep-sweep-pass17-institutional-catalogue-holdings.md`

Earlier pass01 and pass03–pass13 logs remain in the same directory.

## Public page state

`index.html` is selective rather than a backend dump. It surfaces the Christie’s 2019 ex-Science Museum cases, the `360/361` and `380/381` split-afterlife finding, Krefeld 2025 lots 26–27, lot 27's *Hydractinia echinata* / no. 156 resolution, the unresolved Krefeld 2026 status conflict, and a short Wimbledon 2023 exclusion note explaining why `in the manner of` shell-and-wax models are not counted.

Pages should be refreshed for a new object-level provenance bridge, genuinely new auction appearance or a materially useful public scope clarification. Archive-routing-only passes do not require cosmetic page churn.

## Next search order

1. Determine issue-level coverage and remote consultation/reproduction options for Museo Galileo's 1997–2006 Christie’s scientific/model series; use UCLA Clark sale codes as stable controls.
2. Search surviving Christie’s lot archives for the 1997–2005 sequence with object-class/taxon terms before obtaining scans.
3. UCL early card index / MDA cards; recover the twenty Lankester Blaschka entries and Sarah Parker's `GMZ_Blaschkas` document.
4. Recover any UCL old Science Museum numbers and cross them against `science-museum-register-neighborhoods.json`.
5. Science Museum `CORP/SCM/02/02/7/421` → relevant 1925–27 nominal files → `CORP/SCM/Z/048`, keyed by paired number neighbourhoods.
6. HU historical inventory and 1886 / 1968–70 transfer-reduction records for *Hydractinia echinata*, `Stachelpolyp`, no. 156, `ZI` and `IfZ`.
7. MfN remote routing into `S001`, `S003`, `S004-04` and `S005-02` while physical access is suspended.
8. Krefeld lot-photo/label audit; keep lot 26 taxonomically open.
9. Glasgow Mason `1909.66` files and the 1904 sale-notice context.
10. Identify George Loudon's unnamed London dealer and English public-school source.

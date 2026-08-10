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
- **6** original rejected false-positive records retained in the canonical file

A supplementary 2023 Wimbledon cluster now adds **5 further rejected lots**, so the researched rejected-lot corpus is at least **11** across canonical and supplementary layers. The included-lot count remains 11.

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

More important, UCL says its **second catalogue system was a card index begun in the early 1900s and continued into the 1970s**. That system spans the 1925–27 Science Museum transfer and is now the highest-value UCL source. Later MDA cards may preserve acquisition and conservation fields but can conflict with one another.

### Wimbledon 2023 false-positive cluster

Wimbledon Auctions, 13 February 2023, lots **33–37**, forms a concentrated search-engine false positive. All five headings say `IN THE MANNER OF LEOPOLD AND RUDOLF BLASCHKA`; the objects are explicitly shell-and-wax / shell-and-waxwork anatomical sea-snail models.

Displayed hammers were £500, £340, £480, £550 and £200. These prices are **not Blaschka market evidence**. The five lots are rejected because attribution is expressly qualified and the material tradition is different. Their Blaschka-heavy literature citations explain why maker-name search engines retrieve them so aggressively.

High-precision review triggers now include `in the manner of`, `shell and wax`, `waxwork` and `papier-mâché`. They trigger inspection, not automatic rejection, because contextual provenance can legitimately mention comparative wax models.

### Historical catalogue families now mapped

Pass 16 moves beyond maker-name web indexes into catalogue-family discovery. No listed catalogue is treated as containing Blaschka material until its lot text is screened.

Highest-priority families:

1. **Christie’s scientific / medical / engineering models**, especially 4 Jul 1991 `Scientific and Medical Instruments, Models, Tools and Other Apparatus` and 29 May 1997 `Scientific and Engineering Works of Art, Instruments and Models`.
2. **Christie’s Natural History**, especially 19 May and 11 Nov 1998, then 19 Oct 1999 and 4 Jun 2001.
3. **Bonhams science / technology / marine**, especially 20 May 1989 `Science & Technology for the Collector` and 25 Feb 2004 `Science and Marine`.
4. **Phillips Scientific Instruments**, mapped at 1980, 1986, 1988 and 1995.
5. **Sotheby’s English/Continental/European glass**, a dense family mapped from the 1960s into the 2000s; initial full-catalogue priority is the 1978–1986 run.

The Catalog Star exposes metadata and paid scan availability for many of these catalogues. Exact-title open-web / Internet Archive searches did not recover free scans for several sampled A-priority catalogues in this pass. That is a bounded discovery result, not a catalogue-level negative.

Once any scan is acquired, screen the **entire catalogue**, not the first hit, using maker variants plus object-class terms such as `glass model`, `zoological model`, `natural history model`, `teaching model`, `jellyfish`, `sea anemone`, `coral`, `hydroid`, `mollusc`, `slug`, `worm`, `Dresden`, `L. No.` and `Nr.`.

## Research logs

Detailed decisions are preserved in `../research/logs/` through:

- `2026-08-10-auction-deep-sweep-pass14-ucl-card-index-router.md`
- `2026-08-10-auction-deep-sweep-pass15-wimbledon-wax-false-positive-cluster.md`
- `2026-08-10-auction-deep-sweep-pass16-historical-catalogue-families.md`

Earlier pass01 and pass03–pass13 logs remain in the same directory.

## Public page state

`index.html` is selective rather than a backend dump. It currently surfaces the Christie’s 2019 ex-Science Museum cases, the `360/361` and `380/381` split-afterlife finding, Krefeld 2025 lots 26–27, lot 27's *Hydractinia echinata* / no. 156 resolution, and the unresolved Krefeld 2026 platform-status conflict.

Pages should be refreshed for a new object-level provenance bridge, genuinely new auction appearance or a materially useful public scope clarification. Archive-routing-only passes do not require cosmetic page churn.

## Next search order

1. Screen exact-title web/library traces for the A-priority Christie’s, Bonhams and Phillips catalogue families in `auction-historical-catalogue-family-worklist.json`.
2. UCL early card index / MDA cards for the eight named accessions; recover the twenty Lankester Blaschka entries and Sarah Parker's `GMZ_Blaschkas` document.
3. Recover any UCL old Science Museum numbers and cross them against `science-museum-register-neighborhoods.json`.
4. Science Museum `CORP/SCM/02/02/7/421` → relevant 1925–27 nominal files → `CORP/SCM/Z/048`, keyed by paired number neighbourhoods.
5. HU historical inventory and 1886 / 1968–70 transfer-reduction records for *Hydractinia echinata*, `Stachelpolyp`, no. 156, `ZI` and `IfZ`.
6. MfN remote routing into `S001`, `S003`, `S004-04` and `S005-02` while physical access is suspended.
7. Krefeld lot-photo/label audit; keep lot 26 taxonomically open.
8. Glasgow Mason `1909.66` files and the 1904 sale-notice context.
9. Identify George Loudon's unnamed London dealer and English public-school source.
10. Expand catalogue families only after the current A-priority runs are screened or blocked by access.

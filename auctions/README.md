# Auction provenance layer

This directory records public auction appearances and market-adjacent provenance evidence for Blaschka models. The layer is designed to close custody gaps, not to operate as a price guide.

## Admission rule

Include a public auction appearance when the checked sources do not explicitly identify the buyer as a museum, university or comparable institutional collection. If an institutional buyer is explicitly documented, that acquisition belongs in the collection/provenance layer instead.

Earlier institutional custody does not exclude a later market appearance: deaccessioned objects can remain here when they subsequently enter an open market record. Auction appearance does not prove private ownership. Unknown buyers remain `post_sale_custody: open`.

Qualified attributions stay qualified. Estimates, hammer prices, buyer-premium-inclusive prices, passed lots, withdrawn lots and conflicting platform statuses are never silently normalised.

## Canonical state · 10 August 2026

`auction-data.json` remains deliberately conservative:

- **11** included lot records
- **7** auction-event groups
- **13** physical-object appearances reported by those lots
- earliest canonical public-auction record recovered: **2005**
- latest canonical record: **2026**
- **1** high-confidence inferred reoffer link
- **2** records with explicit result/status conflicts
- **6** rejected false positives retained for control

The historical market search reaches earlier than the canonical auction table. A December **1904** *Museums Journal* notice offered **300 Blaschka invertebrate models** from the Philip Brookes Mason estate, but the documented Blaschka-specific endpoint is Mrs Mason's **1909 institutional sale to Glasgow Museums for £275**. That institutional purchase remains outside the auction count.

## Structured files

- `auction-data.json` — canonical public-auction lot table.
- `auction-provenance-crosslinks.json` — inferred collector/object links, dealer evidence, prior institutional labels and other cross-source evidence that must not be flattened into lot facts.
- `auction-historical-market-seeds.json` — pre-2005 and market-adjacent research seeds.
- `auction-newspaper-audit.json` — bounded reuse of the project's BNA query matrix.
- `auction-catalogue-recoveries.json` — sale codes, exact lot numbers and single-owner sale context recovered after initial ingest.
- `auction-archive-router.json` — archive series, exact identifiers and order of attack after generic web search reached diminishing returns.
- `berlin-krefeld-provenance-audit.json` — separation of HU teaching-collection evidence from Museum für Naturkunde evidence for Krefeld 2025 lots 26–27.
- `krefeld-hydractinia-156-crosswalk.json` — resolves Krefeld lot 27 `Stachelpolyp` to *Hydractinia echinata* and Blaschka model-design no. **156**.
- `auction-science-museum-recipient-audit.json` — public-web audit of the Science Museum 1925–27 recipient problem.
- `science-museum-register-neighborhoods.json` — exact old-number split between Cardiff institutional transfer and later Christie’s market circulation.
- `ucl-science-museum-transfer-candidate-audit.json` — partitions eight public UCL Blaschka accessions by provenance evidence.
- `ucl-catalogue-card-index-router.json` — routes the unresolved UCL transfer through the 1890/1891 catalogue, early-1900s–1970s card index and later MDA cards.

## Current high-value findings

### 1. Grisebach 2015 is now sale- and lot-level identifiable

The `Serpula contortuplicata / L. No. 343` appearance is **ORANGERIE. Selected Objects**, sale **249**, lot **483**, Berlin, 26 November 2015. The exact primary Grisebach object page and realized result remain open, so the recovery is stored without pretending primary-page closure.

### 2. Christie’s 2019 now has a defensible pre-sale collection layer

Lots 46–48 were sold in a Christie’s sale explicitly presented as the collection of **Peter Petrou**. The safe chain is:

`Science Museum 1877 → deaccession 1925–27 → unresolved ownership gap → Peter Petrou collection/sale context by Jan 2019 → Christie’s → buyer open`

No direct Science Museum-to-Petrou transfer or acquisition date is inferred.

### 3. Krefeld 2025 lot 27 has an exact model-design key

The auction title `Stachelpolyp` can be normalized to ***Hydractinia echinata***. Cornell's Blaschka catalogue identifies that design as **no. 156**.

The project's complete transcription of the published MfN `OS001-02 Blaschka Glasmodelle` inventory contains **40 rows**, minimum **59** explicitly stated physical components and **28** distinct Blaschka catalogue-number segments. It contains no *Hydractinia echinata*, `Stachelpolyp` or no. **156**.

That is a strong negative for the **present published OS001-02 inventory only**. It does not prove that Berlin never held the design or that the object never passed through MfN.

HU remains the stronger next provenance route because both Krefeld lots carry `Zoolog. Institut Universität, Berlin` labels and HU documents a **1970 collection reduction** involving gifts, losses and transfers to MfN. The 1970 event is a provenance window, not an object-level disposal date.

The Berlin archive route is now explicit: HU historical inventories and reduction files, plus MfN record groups `S001`, `S003`, `S004-04` and `S005-02`. MfN physical archive access is currently suspended during Museum Evolution work, so the immediate route is remote file-level enquiry plus HU documentation.

### 4. Science Museum dispersal is mixed at consecutive-register-number scale

Cardiff's transferred collection and Christie’s 2019 lots produce two unusually strong old-number controls:

- `1877-360` → Christie’s/private-market survival
- `1877-361` → Cardiff institutional transfer

and

- `1877-380` → Cardiff institutional transfer
- `1877-381` → Christie’s/private-market survival

Adjacency does **not** prove shared shipment, transfer schedule, ownership or workshop set. It makes the register neighbourhood a high-value archival search unit. Priority bundles are now `360/361` and `376/380/381/385/397`.

The same crosswalk exposes a model-number conflict around **330**: Cardiff and Cornell associate no. 330 with `Pontobdella (Hirudo) vittata`, while the 2005 James D. Julia auction record transcribes its card as `Pontobdella Muricata, L. No 330`. Preserve the source conflict. Shared catalogue number means repeated model design, not shared physical object.

### 5. UCL transfer candidate pool has narrowed without inference

Current public UCL evidence gives eight named Blaschka accessions.

Three are explicitly in the `Lankester 1890 Grant Museum Catalogue` layer:

- `LDUCZ-P130` — *Clione limacina*
- `LDUCZ-P161` — *Ercolania funerea*
- `LDUCZ-P191` — *Arion ater*

`LDUCZ-C182` — *Haliclystus auricula* — is independently documented in a **1911 Practical Zoology student notebook**, so that physical accession was already at UCL before the Science Museum 1925–27 transfer. It is therefore excluded from the Science Museum transfer candidate pool, although its exact relationship to the twenty Lankester catalogue appearances remains open.

Four public accessions remain unresolved between an early UCL layer and the later Science Museum transfer:

- `LDUCZ-P202` — *Limax arborum*
- `LDUCZ-P196` — *Arianta arbustorum*
- `LDUCZ-C373` — *Actinia equina*
- `LDUCZ-S73` — female sea cucumber, taxon still open

No publicly indexed current UCL accession has yet been explicitly assigned object-by-object to the Science Museum transfer.

### 6. UCL documentation history changes the next move

Current UCL sources call the relevant Lankester document the **1890** printed catalogue / `Lankester 1890 Grant Museum Catalogue`. A UCL documentation-history article says the first catalogue was **published in 1891** and describes it as **part catalogue, part wishlist**. Both date labels are retained until bibliographically resolved.

More important, UCL states that the **second cataloguing system was a card index begun in the early 1900s and continued into the 1970s**. That series spans the 1925–27 Science Museum transfer and is now the highest-value UCL provenance target. Later MDA cards, mainly from the 1980s, can preserve acquisition and conservation data but may contain conflicting entries.

The documentation query is therefore no longer “search the public UCL catalogue for Blaschka.” It is: recover early card-index / MDA entries for the eight named control accessions and look specifically for acquisition source, previous institution, old `1877-xxx` / `1888-xx` numbers, E.-numbers, historical labels and Blaschka/Ward model numbers.

A second UCL target remains Sarah E. Parker's legacy document **`Blaschka Glass Models at the Grant Museum`** (`GMZ_Blaschkas`), cited by UCL in 2015 but not recovered in the current public-web pass.

## Research logs

Detailed provenance and search decisions are preserved in `../research/logs/`:

- `2026-08-10-auction-deep-sweep-pass01.md`
- `2026-08-10-auction-deep-sweep-pass03-provenance-crosslinks.md`
- `2026-08-10-auction-deep-sweep-pass04-early-market-and-archive-seeds.md`
- `2026-08-10-auction-deep-sweep-pass05-newspaper-matrix-reuse.md`
- `2026-08-10-auction-deep-sweep-pass06-catalogue-identifiers.md`
- `2026-08-10-auction-deep-sweep-pass07-archive-router.md`
- `2026-08-10-auction-deep-sweep-pass08-berlin-hu-krefeld-provenance.md`
- `2026-08-10-auction-deep-sweep-pass09-science-museum-recipient-web-audit.md`
- `2026-08-10-auction-deep-sweep-pass10-krefeld-hydractinia-156.md`
- `2026-08-10-auction-deep-sweep-pass11-berlin-archive-series-router.md`
- `2026-08-10-auction-deep-sweep-pass12-science-museum-register-neighborhoods.md`
- `2026-08-10-auction-deep-sweep-pass13-ucl-transfer-candidate-audit.md`
- `2026-08-10-auction-deep-sweep-pass14-ucl-card-index-router.md`

## Public page state

`index.html` is intentionally selective rather than a dump of the backend. It currently surfaces:

- the Christie’s 2019 ex-Science Museum lots;
- the `1877-360/361` and `1877-380/381` split-afterlife finding;
- Krefeld 2025 lots 26–27;
- lot 27's *Hydractinia echinata* / no. 156 resolution and the HU/MfN provenance caveat;
- the unresolved 2026 Krefeld platform-status conflict.

Pages should be refreshed when a new object-level provenance bridge, genuinely new auction appearance or materially clearer public explanation appears. Archive-routing-only passes do not need cosmetic page churn.

## Next search order

1. UCL early-1900s–1970s card index and later MDA cards for P130/P161/P191/C182 controls and P202/P196/C373/S73 unresolved objects.
2. Recover the twenty Blaschka entries in the Lankester 1890/1891 catalogue and Sarah Parker's `GMZ_Blaschkas` document.
3. Recover any UCL old Science Museum numbers and cross them against `science-museum-register-neighborhoods.json`.
4. Science Museum `CORP/SCM/02/02/7/421` → relevant 1925–27 nominal files → `CORP/SCM/Z/048`, keyed by paired number neighbourhoods.
5. HU historical inventory and 1886 / 1968–70 transfer-reduction records for *Hydractinia echinata*, `Stachelpolyp`, no. 156, `ZI` and `IfZ`.
6. MfN remote routing into `S001`, `S003`, `S004-04` and `S005-02` while physical archive access is suspended.
7. Krefeld lot-photo/label audit; keep lot 26 taxonomically open.
8. Glasgow Mason `1909.66` purchase files and the 1904 sale notice context.
9. Identify George Loudon's unnamed London dealer and English public-school source.
10. Return to broad old-auction catalogue families only after these routes generate new names, taxa, model numbers or provenance anchors.

# Auction provenance layer

This directory contains the public auction page and the structured market-provenance backend used to support it.

## Files

- `index.html` — selective public presentation.
- `auction-data.json` — canonical structured auction lot records recovered from public auction-house and aggregator archives.
- `auction-provenance-crosslinks.json` — supplementary cross-source layer for inferred object/collector matches, prior institutional labels, dealer-market dispersals, date conflicts and other evidence that should not be flattened into canonical lot facts without an explicit bridge.
- `auction-historical-market-seeds.json` — pre-2005 and market-adjacent worklist: sale notices, estate/dealer dispersals, deaccession-register neighbourhoods and institutional-label targets used to search beyond maker-name indexes without inflating the public-auction count.

## Admission rule

The auction layer is for provenance gaps, deaccession-to-market events, and later public market appearances. It is **not** a price guide.

Include an attributed Blaschka model when a public auction record exists and the checked sources do not explicitly identify the buyer as a museum, university, or comparable institutional collection. If an institutional buyer is explicitly documented, that acquisition belongs in the collection/provenance layer instead. Earlier institutional custody does not by itself exclude a later auction appearance; deaccessioned objects can therefore remain here when they subsequently enter an open market record.

Auction appearance does not prove private ownership. If the buyer is undisclosed, post-sale custody stays open. Qualified attributions remain qualified. Estimates, hammer prices, buyer-premium-inclusive prices, passed lots, withdrawn lots, and conflicting platform statuses are never silently normalised into one result field.

Dealer-mediated transactions, collector testimony, estate sale notices and institutional labels can be highly valuable provenance evidence without being auction events. These are retained in the cross-link / historical-seed files when they help identify a dispersal route or possible object identity, but they do not increase the canonical auction lot count.

## Current research state

The first deep searchable-web pass was completed on 10 August 2026. It covers directly searchable auction houses and major aggregators with multilingual spelling variants, plus a broad negative targeted pass over additional houses. The coverage statement is deliberately bounded: failure to find a result through web/domain search does not prove that an older or unindexed auction catalogue contains no Blaschka material.

The earliest **canonical public-auction lot** recovered so far remains James D. Julia in **2005**. The historical market search now reaches back earlier: a December **1904** *Museums Journal* notice offered **300 Blaschka invertebrate models** from the Philip Brookes Mason estate. That notice does not enter the canonical auction count because the documented Blaschka-specific endpoint is Mrs Mason's **1909 institutional sale to Glasgow Museums for £275**; the exact 1909 quantity remains unresolved.

A cross-link pass tied the 2015 Grisebach `Serpula contortuplicata / L. No. 343` appearance to the sale title `ORANGERIE. Selected Objects` and established a strong but still inferential match to George Loudon's first-person account of buying a Blaschka Serpulidae model at auction in Berlin. It also established that **both** Krefeld 2025 Blaschka lots carry `Zoolog. Institut Universität, Berlin` labels, creating a new institutional-provenance and dating problem that now requires an MfN/HU register crosswalk. The archived Museum für Naturkunde Historical Division page exposes the exact inventory target `OS001-02 Blaschka Glasmodelle`; its PDF URL is recorded in the historical-seed file even though the current research runtime could not fetch the PDF body.

The historical-seed pass also adds two search strategies that should matter more than another generic maker-name sweep: identify the unnamed English public school and London dealer behind part of George Loudon's collection, and search Science Museum 1925–27 disposal **register-number neighbourhoods** because adjacent 1877 inventory numbers demonstrably split between later institutional and private-market pathways.

Detailed method and evidence are recorded in:

- `../research/logs/2026-08-10-auction-deep-sweep-pass01.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass03-provenance-crosslinks.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass04-early-market-and-archive-seeds.md`

## Next search layer

Priority now shifts to older digitised and printed sale catalogues, library auction-catalogue collections, dealer archives, newspaper sale notices, school/university collection dispersals, and any licensed art-price databases that can expose verifiable source metadata. Search should increasingly proceed by **sale-catalogue family and provenance seed**, not only by maker-name indexing: scientific instruments, natural-history cabinets, teaching apparatus, museum duplicates, school closures, named collectors, old institutional labels, model numbers, taxa and former museum inventory numbers can all recover lots missed by weak OCR or absent maker attribution.

False positives, count wording conflicts and spelling variants are retained in the structured backend/search logs to prevent repeated rediscovery or accidental conversion of ambiguous market evidence into settled provenance.

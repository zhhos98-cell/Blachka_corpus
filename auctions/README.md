# Auction provenance layer

This directory contains the public auction page and the structured market-provenance backend used to support it.

## Files

- `index.html` — selective public presentation.
- `auction-data.json` — canonical structured auction lot records recovered from public auction-house and aggregator archives.
- `auction-provenance-crosslinks.json` — supplementary cross-source layer for inferred object/collector matches, prior institutional labels, dealer-market dispersals, date conflicts and other evidence that should not be flattened into canonical lot facts without an explicit bridge.

## Admission rule

The auction layer is for provenance gaps, deaccession-to-market events, and later public market appearances. It is **not** a price guide.

Include an attributed Blaschka model when a public auction record exists and the checked sources do not explicitly identify the buyer as a museum, university, or comparable institutional collection. If an institutional buyer is explicitly documented, that acquisition belongs in the collection/provenance layer instead. Earlier institutional custody does not by itself exclude a later auction appearance; deaccessioned objects can therefore remain here when they subsequently enter an open market record.

Auction appearance does not prove private ownership. If the buyer is undisclosed, post-sale custody stays open. Qualified attributions remain qualified. Estimates, hammer prices, buyer-premium-inclusive prices, passed lots, withdrawn lots, and conflicting platform statuses are never silently normalised into one result field.

Dealer-mediated transactions, collector testimony and institutional labels can be highly valuable provenance evidence without being auction events. These are retained in `auction-provenance-crosslinks.json` when they help identify a dispersal route or possible object identity, but they do not increase the canonical auction lot count.

## Current research state

The first deep searchable-web pass was completed on 10 August 2026. It covers directly searchable auction houses and major aggregators with multilingual spelling variants, plus a broad negative targeted pass over additional houses. The coverage statement is deliberately bounded: failure to find a result through web/domain search does not prove that an older or unindexed auction catalogue contains no Blaschka material.

A later cross-link pass tied the 2015 Grisebach `Serpula contortuplicata / L. No. 343` appearance to the sale title `ORANGERIE. Selected Objects` and established a strong but still inferential match to George Loudon's first-person account of buying a Blaschka Serpulidae model at auction in Berlin. It also established that **both** Krefeld 2025 Blaschka lots carry `Zoolog. Institut Universität, Berlin` labels, creating a new institutional-provenance and dating problem that now requires an MfN/HU register crosswalk.

Detailed method and evidence are recorded in:

- `../research/logs/2026-08-10-auction-deep-sweep-pass01.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass03-provenance-crosslinks.md`

## Next search layer

Priority now shifts to older digitised and printed sale catalogues, library auction-catalogue collections, dealer archives, newspaper sale notices, school/university collection dispersals, and any licensed art-price databases that can expose verifiable source metadata. Search should increasingly proceed by **sale-catalogue family and provenance seed**, not only by maker-name indexing: scientific instruments, natural-history cabinets, teaching apparatus, museum duplicates, school closures, named collectors, old institutional labels, model numbers and taxa can all recover lots missed by weak OCR or absent maker attribution.

False positives and spelling variants are retained in the structured backend/search logs to prevent repeated rediscovery.

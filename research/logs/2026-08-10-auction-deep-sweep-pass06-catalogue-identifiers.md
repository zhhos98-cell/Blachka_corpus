# 2026-08-10 — Auction deep sweep, pass 06: catalogue identifiers and single-owner sale context

## Result

Two previously open metadata fields can now be tightened without increasing the canonical auction count. The 2015 Grisebach `Serpula contortuplicata / L. No. 343` record belongs to **ORANGERIE. Selected Objects, sale code 249, lot 483**, held in Berlin on 26 November 2015. The 2019 Christie’s Science Museum trio can also be placed explicitly in the **Peter Petrou collection/sale context** by January 2019, while their 1925–27-to-Petrou intermediate provenance remains open.

Structured supplement: `../../auctions/auction-catalogue-recoveries.json`.

## 1. Grisebach 2015: sale code 249, lot 483

The first auction pass had only the date, Grisebach attribution, object description and estimate because Invaluable’s artist index did not print an obvious lot number in the visible listing. The sale can now be reconstructed at catalogue level from several independent pieces.

Open Library catalogue metadata, imported from a Harvard University record, places `Orangerie: ausgewählte Objekte` at **sale code 249**, Berlin, 26 November 2015, covering lots **400–485**. Grisebach’s own press release independently confirms that the ORANGERIE Selected Objects auction took place on 26 November 2015. Invaluable’s sold-lot index identifies the Blaschka `Serpula contortuplicata`, `L. No. 343`, in that Grisebach sale with the EUR 3,000–5,000 estimate. Most importantly, the exact Invaluable lot URL resolves the identifier in its slug as **483**:

`https://www.invaluable.com/auction-lot/leopold-and-rudolph-blaschka-model-of-a-serpulida-483-c-a084c25853`

The current runtime could not fetch that exact lot page body, so the record is encoded carefully: **lot 483 is high-confidence from the exact aggregator URL**, while the original Grisebach object page and realized result remain unrecovered. The canonical JSON still contains null fields for lot/title from pass 01; `auction-catalogue-recoveries.json` is the authoritative delta until the canonical file is regenerated.

Sources:
- Invaluable Blaschka sold-lot index: https://www.invaluable.com/artist/blaschka-leopold-49ejcqcd3j/sold-at-auction-prices/
- exact Invaluable lot URL above
- Grisebach press: https://www.grisebach.com/en/auction-house/press/the-orangerie-selected-objects-auction-tells-the-story-of-the-world-in-100-objects-from-andrea-pisano-to-gunter-sachs
- Open Library / Harvard-derived sale metadata: https://openlibrary.org/works/OL43709635W/Third_floor

## 2. Christie's 2019: Peter Petrou becomes a defensible pre-sale custody/context layer

Christie’s official press release describes the 30 January 2019 auction as offering **the collection of Peter Petrou**, comprising 150 lots. Peter and Leonora Petrou themselves describe accepting Christie’s offer to host a `Peter Petrou sale` after more than forty years of exhibiting and collecting. Lots 46, 47 and 48 are the three ex-Science Museum Blaschka models already captured in the auction backend.

This supports a more precise lifecycle sequence:

`Science Museum 1877 -> deaccessioned 1925–27 -> unresolved ownership/custody gap -> Peter Petrou collection/sale context by Jan 2019 -> Christie's 30 Jan 2019 -> buyer unknown`

The middle gap stays open. Nothing recovered in the targeted searches shows when Petrou acquired Science Museum `1877-381`, `1877-360` or `1877-376`, from whom he acquired them, or whether they travelled together after deaccession. The sale title alone is not converted into a direct Science Museum -> Petrou transfer.

Sources:
- Christie’s official press release: https://press.christies.com/press-release-peter-petrou-tales-of-the-unexpected-nbsplondon-30-january/
- Christie’s lots 46–48 already stored in `auction-data.json`.

## 3. Count effect

No new physical auction lot is added by this pass. The canonical total remains **11 lot records / 7 event groups**. This is intentional. Pass 06 improves identifiers and custody context instead of treating better metadata as a new market event.

## Next actions

1. Search Grisebach’s object archive and archived catalogue PDFs for lot 483 to recover the primary page, any provenance paragraph and the realized result.
2. Search Peter Petrou dealer/exhibition catalogues and archival interviews for the three Science Museum numbers, with special attention to acquisition source and date.
3. Regenerate the canonical `auction-data.json` once several delta files have accumulated, folding in `ORANGERIE. Selected Objects`, sale code 249 and lot 483 while preserving source-type distinctions.
4. Continue the provenance-seeded pre-2005 sweep rather than broad `Blaschka auction` searching.

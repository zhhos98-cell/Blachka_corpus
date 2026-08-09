# 2026-08-10 — Auction deep sweep, pass 03: provenance cross-links

## Purpose

This pass continued the auction survey without inflating the canonical lot count. The emphasis shifted from simple maker-name discovery to cross-linking market records with collector testimony, institutional labels, deaccession histories and current institutional catalogues. The governing auction rule remains unchanged: an explicit institutional buyer belongs in the collection/provenance layer; prior institutional custody followed by later market appearance remains admissible; an undisclosed buyer never becomes a private owner by inference.

Structured output: `../../auctions/auction-provenance-crosslinks.json`.

## 1. Grisebach 2015: the Serpula record can now be tied to the ORANGERIE sale and probably to George Loudon

Invaluable's public artist index continues to preserve the 26 November 2015 Grisebach record for a Blaschka Serpulidae model labelled `Serpula contortuplicata` and `L. No. 343`, estimated at EUR 3,000-5,000. Grisebach's own 2015 press material identifies the relevant 26 November crossover-object sale as **ORANGERIE. Selected Objects**.

A much more consequential cross-link comes from George Loudon's first-person Corning Museum of Glass guest post. Loudon says that he had recently found a Blaschka Serpulidae worm at auction in Berlin. The illustrated object is identified as `Serpula contortuplicata`, measured 6 x 9 cm diameter and photographed in Berlin in 2015. These details align closely with the Grisebach/Invaluable record: same rare taxon, same city, same year, same object class and essentially matching dimensions.

The match is encoded as `strong_cross_source_inference_not_explicit_buyer_record`. Loudon's text does not name Grisebach, a lot number or `L. No. 343`; therefore the project does not yet state that Loudon was the documented buyer. The exact Grisebach object page, lot number, result and buyer bridge remain open.

Sources:
- https://www.invaluable.com/artist/blaschka-leopold-49ejcqcd3j/sold-at-auction-prices/
- https://www.grisebach.com/en/auction-house/press/the-orangerie-selected-objects-auction-tells-the-story-of-the-world-in-100-objects-from-andrea-pisano-to-gunter-sachs
- https://blog.cmog.org/2016/modern-day-cabinet-curiosity

## 2. Loudon's London-dealer purchases are important provenance leads but are not auction lots

Loudon's Corning account also records an earlier sequence of purchases from an unnamed London dealer: first three Blaschka slugs, then a sea anemone, then ten slugs/snails plus a Portuguese man o' war. According to the dealer as reported by Loudon, the material came from an English school that had closed or disposed of its natural-history teaching material for financial reasons. A separate Masterpiece interview likewise describes a London dealer and a public school quietly disposing of Blaschka models.

This is high-value provenance material because it may identify a presently missing school collection and a private-market dispersal chain. It is excluded from the auction lot count because the sources describe dealer purchases, not a public auction. The unresolved targets are the dealer, school, disposal date, invoices/stock books, model numbers and object-level crosswalk.

Sources:
- https://blog.cmog.org/2016/modern-day-cabinet-curiosity
- https://www.masterpiecefair.com/collection-stories/george-loudon

## 3. Krefeld 2025: both Blaschka lots carry Berlin Zoological Institute labels

The first pass had captured the Berlin label on Krefeld lot 26. The primary German auction-house page now closes the same field for **lot 27** as well. It explicitly transcribes an adhesive label `Zoolog. Institut Universität, Berlin / handschriftlich botanische Bezeichnung` and supplies a condition note: light use/soiling to the case, small corner cracks to the top and right panes, otherwise overall good condition. Lot 27 hammered at EUR 30,000. Lot 26 hammered at EUR 28,000 and Drouot transcribes the same institutional label form.

This changes the analytical status of the 2025 event: the two adjacent lots were not merely generic Blaschka objects. Both carry evidence of prior Berlin university zoological custody. The exact Berlin branch, inventory number, deaccession route and date remain unresolved.

A chronological conflict is now explicit. Krefeld catalogues both objects `around 1870`, while Museum für Naturkunde Berlin's institutional account states that all Berlin Blaschka models in the historical university/museum collection were created between 1884 and 1889. Neither layer is silently corrected. The label establishes prior institutional association; it does not by itself prove that each object belongs to the surviving MfN/HU register or that the auction dating is impossible.

Sources:
- lot 27 primary: https://www.kunstunddesign-auktionen.de/de/auktionen/K-15/glasmodell-stachelpolyp-um-1870-137452/
- Krefeld results: https://www.kunstunddesign-auktionen.de/de/auktionen/K-15/ergebnisliste/
- lot 26 Drouot: https://www.gazette-drouot.com/lots/28984163-leopold-and-rudolf-blaschka----
- Berlin institutional collection history: https://artsandculture.google.com/story/works-of-art-for-science-museum-fuer-naturkunde-berlin/MwVBFWmlRzwzPQ?hl=en
- MfN object-collection guide: https://www.museumfuernaturkunde.berlin/en/research/object-collection-historical-divison
- HU comparative teaching-model record: https://www.sammlungen.hu-berlin.de/objekte/zoologische-lehrsammlung/8312/

The next high-value action is to inspect the MfN `OS001-02 Blaschka Glasmodelle` inventory and HU's zoological teaching collection for dimensions, taxon, old label wording and movement/deaccession fields matching lots 26 and 27.

## 4. Christie's 2019 lot 46: the £10,000 result remains secondary, but the source is now stable

The Christie's primary lot page still does not expose a realized price in the public text recovered here. Emma Reynard's current page explicitly captions the exact `Physalia physalis`, Science Museum `1877-381`, as sold for £10,000 on 30 January 2019 at Christie's London. The project therefore retains the £10,000 figure as a secondary-reported result, now with a stable current URL, pending a primary Christie's result record.

Sources:
- https://www.christies.com/en/lot/lot-6188456
- https://www.emmareynard.com/small-glass-houses/2021/8/31/leopold-and-rudolf-blaschka-1857-1939

## 5. Science Museum deaccession context: useful boundary, no invented intermediate owner

UCL Grant Museum states that when the Science Museum deaccessioned its glass model collection in 1925-1927, models were transferred to UCL and six other institutions. This confirms that the Science Museum event was a broader redistribution, not simply disposal into a private market. It does not identify Christie's 2019 objects `1877-381`, `1877-360` or `1877-376` as having passed through any particular recipient institution. No intermediate owner is therefore inserted into those three auction chains.

Source:
- https://www.ucl.ac.uk/museums-collections/grant-museum-zoology/highlights/blaschka-glass-models-invertebrates

## 6. Continuation search: no new vetted physical lot promoted

A second maker-name and catalogue-fragment sweep rechecked Invaluable, The Saleroom, Auctionet, Barnebys, Lot-tissimo, Grisebach's public archive/press, James D. Julia's legacy domain and English/German/French/Italian query variants, including exact phrases such as `Blaschka's Modelle` and `L. No.`. No additional physical Blaschka auction lot met the promotion threshold in this pass.

This is a bounded negative result only. Search engines do not exhaust old sale catalogues. The remaining discovery frontier is older PDF and print catalogues, library sale-catalogue collections, scientific-instrument and natural-history dispersals, named school/university deaccessions, newspaper auction notices and subscriber databases used only as lead generators where source metadata can subsequently be verified.

## Next actions

1. Grisebach: recover exact Serpula lot number, object-archive URL, realized result and buyer bridge.
2. Berlin/Krefeld: crosswalk lots 26-27 against MfN `OS001-02` and HU teaching-collection records; resolve the c.1870 versus 1884-1889 chronology as an evidential conflict rather than by preference.
3. Loudon: identify the unnamed London dealer and English school, then check whether any public auction preceded or followed the dealer dispersal.
4. Pre-2005: search sale-catalogue families rather than maker-name indexes, especially scientific instruments, natural-history cabinets, educational apparatus, school closures and museum duplicate sales.
5. Continue preserving false positives and spelling variants so repeated runs do not rediscover the same photographic works, surname collisions or `in the manner of` objects.

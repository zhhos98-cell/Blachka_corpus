# 2026-08-10 — Auction deep sweep, pass 02: legacy and secondary catalogue discovery

## Aim

After the directly searchable auction-house pass, this stage probed older and less structured discovery routes: generic web indexes, digitised-book catalogues, sale-catalogue references, art-price indexes, and spelling variants that could surface records omitted by current auction-house search interfaces.

## Searches and result

Targeted searches combined `Blaschka`, `Blashka`, `Blauschka`, and `Blaschke` with `auction`, `sale catalogue`, `auction catalogue`, `glass model`, `marine`, `jellyfish`, `sea anemone`, German/French/Italian auction vocabulary, and older-year ranges. Additional targeted routes included Google Books catalogue records, Internet Archive/HathiTrust/Gallica discovery queries, MutualArt, Prices4Antiques, LotSearch and general auction-index results.

No additional **confirmed physical Blaschka auction lot** beyond the eleven canonical records in `../../auctions/auction-data.json` was recovered in this pass. This is a bounded search result, not a claim of historical completeness.

## Useful secondary-index observations

- Prices4Antiques exposes a `Blashka, Marine Leach, Blown Glass, Germany, 5 inch` record. Its description matches the James D. Julia `Pontobdella` object already captured in the canonical dataset, so it is a cross-index rather than a new auction event.
- MutualArt's current Leopold Blaschka profile exposes two auction results and identifies the 2026 Krefeld coral as a current record-price entry. This appears to index the recent Krefeld material rather than supplying a new older lot.
- Invaluable remains the strongest open secondary lead for the 2015 Grisebach `Serpula contortuplicata`, L. No. 343 record.
- Google Books and other digitised-catalogue queries surfaced many general glass sale catalogues but no searchable Blaschka-specific hit that met the project's attribution threshold.

## Negative-space warning

Older sale catalogues are poorly searchable at object level. A catalogue can exist online while its OCR, index, metadata or snippet view fails to expose the maker name. Therefore the next legacy stage should proceed by **catalogue-family sampling**, not by maker-name search alone: scientific instruments and teaching collections; natural-history collections; curiosities and museum duplicates; deaccession sales; glass and scientific-model sales; named collector estates; and dealer dispersals.

## Next concrete route

1. Build a dated candidate list of digitised sale catalogues from major houses and library collections, prioritising natural history / scientific instruments / museum duplicates rather than decorative-glass catalogues generally.
2. Search catalogue full text where OCR is available for `Blaschka`, spelling variants, catalogue numbers (`L. No.` / `Nr.`), taxon names from known models, and institutional inventory numbers.
3. Cross-check any pre-2005 hit against later market appearances to detect repeated physical objects.
4. Keep the institutional-buyer exclusion in force: explicit museum/university acquisitions migrate to the collection/provenance layer rather than inflating the auction corpus.

# 2026-08-10 — Auction deep sweep, pass 04: early market and archive seeds

## Result in one sentence

The canonical public-auction boundary remains **2005**, but the market/provenance search boundary can now be pushed back securely to a **December 1904 sale announcement for 300 Blaschka invertebrate models from the Philip Brookes Mason estate**. Because the documented endpoint is Glasgow Museums' institutional purchase in 1909, this event is deliberately excluded from the canonical auction lot count and retained as a historical market seed.

Structured worklist: `../../auctions/auction-historical-market-seeds.json`.

## 1. Philip Brookes Mason: 1904 market announcement, 1909 institutional resolution

Corning Museum of Glass reproduces and identifies a December 1904 *Museums Journal* announcement offering **300 Blaschka invertebrate models** for sale by the widow of Dr Philip B. Mason. The same research account states that Mrs Mason eventually sold her husband's Blaschka models to Glasgow Museums in **1909 for £275**.

The project's pre-existing Glasgow provenance module independently encodes the same lifecycle: Mason's private collection -> estate custody after his 1903 death -> December 1904 sale notice for 300 models -> 1909 municipal purchase by Glasgow Museums for £275, with `1909.66` retained as a candidate accession group. The exact quantity actually acquired by Glasgow remains unresolved; 300 is therefore kept as the 1904 advertised quantity and is never back-projected as the 1909 intake.

This case is also useful for a methodological distinction. Mason's wider estate demonstrably involved auctions: biographical collection sources state that his Lepidoptera were sold at auction, and that Stevens sold his library on 17 May, 21 June and 12 July 1904. A separate modern Shapira-scroll literature sometimes generalises this into the widow selling Mason's whole collection at auction. The Blaschka-specific evidence recovered here is narrower and safer: a *Museums Journal* sale announcement followed by an institutional purchase. Until a sale catalogue is recovered that explicitly lists the Blaschkas, the project does not call the 300-model event an auction.

Sources:
- Corning Museum of Glass: https://blog.cmog.org/2016/4747-models-174-collections-25-countries-and-counting
- UK Beetle Recording Mason biography: https://coleoptera.org.uk/node/23291
- Project provenance module: `30_Blaschka_Glasgow_Museums_Philip_Brookes_Mason_300_Model_1909_275_Pound_Private_to_Municipal_1909_66_Numbered_Objects_2026-08-07.json`

## 2. George Loudon: dealer dispersal is a stronger lead than treating every later interview as a count

The Loudon material now yields a practical provenance-search seed. In a Masterpiece collecting interview, Loudon says that he found Blaschka models for sale through a **London dealer**, who said that the material came from a **public school** quietly disposing of it. His first-person Corning account describes multiple purchases from a London dealer: an initial group of slugs, a sea anemone, and later additional slugs/snails plus a Portuguese man o' war.

The buyer route is therefore encoded as an unnamed English public school -> unnamed London dealer -> George Loudon. It is not an auction event unless an auction catalogue or sale notice is independently recovered.

A public-count guard was added because apparently contradictory later descriptions could otherwise generate a false disposal narrative. Intermediatheque's official 2019 exhibition announcement states that its 50-item Loudon exhibition included **14 Blaschka glass specimens**. A 2024 interview calls the Portuguese man o' war and the Serpulidae model Loudon's two glass Blaschka pieces / pride and joy. The project does not infer that twelve models were sold or lost between these dates. The later wording may be highlighting favourite pieces or a narrower category; object-level disposition evidence is required before any count reduction is accepted.

Sources:
- Intermediatheque 2019: https://www.intermediatheque.jp/en/press/view/id/PR053/year/2019/module/default
- Masterpiece interview: https://www.masterpiecefair.com/blog-details/89/masterpiece-collecting-stories-george-loudon
- Corning first-person account: https://blog.cmog.org/2016/modern-day-cabinet-curiosity
- 2024 interview version: https://auctiondaily.com/news/george-loudon-exhibits-his-cabinet-of-curiosities-in-venice/

## 3. Science Museum 1925–27: search the register neighbourhood, not only the maker name

UCL states that Science Museum Blaschka models were transferred to UCL and six other institutions when the glass-model collection was deaccessioned in 1925–27. The project's Science Museum transaction-hub reconstruction shows a useful pattern: adjacent historical register numbers can later split between institutional and market pathways.

Examples already captured:
- `1877-360` -> private circulation -> Christie's 2019 lot 47;
- `1877.361` -> Cardiff -> NMW `27.407.09`;
- `1877-376` -> private circulation -> Christie's 2019 lot 48;
- `1877.380` -> Cardiff -> NMW `27.407.07`;
- `1877-381` -> private circulation -> Christie's 2019 lot 46;
- `1877.385` -> Cardiff -> NMW `27.407.06`.

This changes the search strategy for older auction catalogues. Exact Science Museum register numbers and neighbouring number ranges can be searched independently of `Blaschka`. A twentieth-century catalogue might describe a fragile zoological teaching model under taxon, inventory number, former museum or generic `glass model` wording while omitting the maker entirely.

Sources:
- UCL Grant Museum: https://www.ucl.ac.uk/museums-collections/grant-museum-zoology/highlights/blaschka-glass-models-invertebrates
- Christie's 2019 lots 46–48
- Project module: `21_Blaschka_Science_Museum_Group_South_Kensington_1877_1888_Dispersal_1925_1927_Transaction_Hub_2026-08-07.json`

## 4. Berlin 2025 lots: exact inventory target recovered, file still inaccessible in current runtime

Museum für Naturkunde's archived Historical Division page identifies `OS 001` as the object-model collection and explicitly links an **`Inventarliste OS001-02 Blaschka Glasmodelle`**. The resolved file URL is:

`https://website-archiv.museumfuernaturkunde.berlin/sites/default/files/221010_Inventarliste_OS001-02_Blaschka.pdf`

The current research runtime can resolve the link but cannot fetch the PDF body. The inventory remains a very high-priority target because both Krefeld 2025 Blaschka lots carry `Zoolog. Institut Universität, Berlin` labels. An object-level OS001-02/HU crosswalk could potentially supply old identifiers, taxon, condition/movement history, or evidence for when the models left institutional custody.

The dating conflict remains open: Krefeld catalogues both objects around 1870, whereas Museum für Naturkunde's institutional account states that all Berlin Blaschka models in its historical collection were made between 1884 and 1889. Neither date layer is overwritten.

Sources:
- archived MfN object collection page: https://www.museumfuernaturkunde.berlin/en/research/object-collection-historical-divison
- Berlin collection context: https://artsandculture.google.com/story/works-of-art-for-science-museum-fuer-naturkunde-berlin/MwVBFWmlRzwzPQ?hl=en

## 5. Pre-2005 catalogue sweep remains negative at the public-lot threshold

The continuation pass searched Google Books auction-catalogue indexing, Internet Archive/HathiTrust-targeted web indexing, Stevens/Mason estate queries, natural-history and scientific-instrument auction terminology, historical newspaper sale/auction queries, and exact label fragments including `L. No. 330`, `L. No. 343`, `Blaschka's Modelle`, and `Blaschka Modelle Dresden`.

No additional pre-2005 physical Blaschka **public-auction lot** was independently verified. This leaves James D. Julia 2005 as the earliest canonical public-auction lot recovered so far. The result is deliberately bounded. Print-only catalogues, subscriber databases, poor OCR, anonymous `glass model` descriptions and unindexed local auction records remain the main blind spots.

## Next pass

The next efficient route is provenance-led rather than maker-name-led:

1. Mason: recover the full 1904 *Museums Journal* notice and search Stevens/estate catalogues for any Blaschka-specific listing without assuming there was one.
2. Loudon: identify the London dealer and public school; then search school closure/disposal records and local auction catalogues.
3. Science Museum: reconstruct the full 1925–27 disposal register and search register-number neighbourhoods across auction/dealer catalogues.
4. Berlin: obtain OS001-02, then search lots 26/27 backwards by old label, taxon and inventory metadata.
5. Continue pre-2005 sale catalogues by collection family: scientific apparatus, zoological teaching aids, museum duplicates, school laboratories, private natural-history museums and named collector estates.

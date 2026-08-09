# 2026-08-10 — Auction deep sweep, pass 07: archive router and diminishing-return boundary

## Result

The open-web maker-name search has now reached a clear diminishing-return boundary. No twelfth qualifying physical auction lot was promoted in this pass. Instead, the remaining high-value auction/provenance gaps were converted into an archive router with exact record identifiers, search keys and order of attack: `../../auctions/auction-archive-router.json`.

The central methodological change is deliberate: **index before composite file; exact historical object number before generic maker name; prior institution before generic auction house**.

## 1. Science Museum 1925–27: exact archive route already exists in the project backend

The project's dedicated Science Museum recipient audit had already established that UCL and Cardiff are only two of seven institutional recipients named at aggregate level; five institutions remain unidentified. It also separated these transfers from at least three exact-number objects that later entered private circulation and appeared at Christie's in 2019. The missing step is now archival rather than web-discovery.

The highest-priority targets are:

- `CORP/SCM/02/02/7/421` — **Nominal File: Arrangements, Transfer and Disposal of Exhibits - Index, 1913 to 1960**. This should be checked first to identify nominal-file numbers, subject headings, recipient institutions and possible disposal categories in the 1925–27 window.
- `CORP/SCM/02/02/7/11/1-7/101/2` — public title preserved in the project audit as **Nominal File: Arrangements, Transfer and Disposal of Exhibits - parts 11/1 to 101/3, 1920 to 1927**. The identifier/title mismatch at the endpoint (`101/2` versus title through `101/3`) remains explicit rather than silently corrected.
- `CORP/SCM/Z/048` — Museum Store Registers. The Science Museum Group's public catalogue for child `CORP/SCM/Z/048/01` explicitly states that these registers record objects in running-number sequence with notes on store location and **ultimate disposal**. Public archive navigation also exposes later child ranges such as `/02` and `/04`.
- `CORP/SCM/Z/039/02` — rough copy of entries in the Register of Science Library for objects in the Western Galleries and Educational Division, 1877–1900. This is open access and starts exactly at the year of the main Science Museum Blaschka registration cohort.

Official current catalogue sources:
- https://collection.sciencemuseumgroup.org.uk/documents/aa110149903 (`CORP/SCM/Z/048/01`)
- https://collection.sciencemuseumgroup.org.uk/documents/aa110135491 (`CORP/SCM/Z/039/02`)

The search keys are the old object numbers, not only `Blaschka`: `1877-360`, `1877-361`, `1877-376`, `1877-380`, `1877-381`, `1877-385`, `1877-397`, plus known 1888-numbered transfer objects. This is especially high-yield because neighbouring historical numbers already split between Cardiff institutional transfer and later private-market pathways.

## 2. Why the archive route is better than another web sweep

UCL's current page confirms that Science Museum Blaschka models were deaccessioned between 1925 and 1927 and transferred to UCL plus six other institutions. The project backend has already confirmed Cardiff as one of those six, with 62 models in 1927, leaving five names unresolved. Public web searching of plausible British holders had already failed the three-part threshold (`Blaschka object + Science Museum provenance + 1925–27 transfer`). The remaining evidence is therefore expected in transfer/disposal files and store-register annotations, not in another list of current Blaschka collections.

Sources:
- UCL: https://www.ucl.ac.uk/museums-collections/grant-museum-zoology/highlights/blaschka-glass-models-invertebrates
- project module `23_Blaschka_Science_Museum_1925_1927_Recipient_Identification_Transfer_Disposal_Archive_Audit_2026-08-07.json`

## 3. Mason 1904 remains a market notice, not an auction lot

The Corning Museum of Glass page gives the exact historical framing we need: a December 1904 *Museums Journal* announcement offered **300 Blaschka invertebrate models** for sale by Philip B. Mason's widow. The same research states that Mrs Mason eventually sold Mason's Blaschka models to Glasgow Museums in 1909 for £275.

This pushes the historical market boundary to 1904 but leaves the canonical public-auction boundary at 2005. Wider Mason estate sources document auctions of other material, including Stevens library sales in 1904, but this does not establish that the advertised Blaschka set itself went to auction. The auction module therefore preserves the distinction between **sale notice / private-to-municipal transaction** and **public auction**.

Sources:
- https://blog.cmog.org/2016/4747-models-174-collections-25-countries-and-counting
- https://coleoptera.org.uk/node/23291

## 4. Loudon: public-school dispersal still lacks the two names that matter

George Loudon states that he found Blaschkas for sale with a London dealer and that they came from a public school quietly disposing of them. This is one of the best provenance seeds in the current market layer because identification of either the dealer or the school could expose invoices, school museum inventories, closure/disposal records, local auctions or later dealer catalogues. The current web material still does not name either party.

Source:
- https://www.masterpiecefair.com/blog-details/89/masterpiece-collecting-stories-george-loudon

## 5. Berlin/Krefeld: object register before market speculation

The two 2025 Krefeld lots both carry `Zoolog. Institut Universität, Berlin` labels. Museum für Naturkunde's institutional history says Berlin University obtained around 150 models/model series, with 66 surviving at two locations, and that the Berlin models were made between 1884 and 1889. This conflicts with Krefeld's `around 1870` dating and makes the exact historical inventory more valuable than stylistic redating.

The archived MfN page exposes the target `Inventarliste OS001-02 Blaschka Glasmodelle`; the resolved PDF URL is already stored in the router. The runtime still cannot fetch its body, so no object crosswalk is fabricated.

Source:
- https://artsandculture.google.com/story/works-of-art-for-science-museum-fuer-naturkunde-berlin/MwVBFWmlRzwzPQ?hl=en

## 6. New-lot search status

Exact-label and catalogue-number searches (`L. No. 330`, `L. No. 343`, `Blaschka's Modelle`, older German/English auction variants) again returned the already-known Julia 2005 and Grisebach 2015 records or institutional collection pages. Invaluable's current public artist index exposes only the three 2019 Christie's models, the 2015 Grisebach model and a photographic false positive among its visible Blaschka-related auction entries. No additional physical model met the admission rule.

This does not mean the auction corpus is complete. It means the open indexed web is no longer the highest-yield surface. Print-only catalogues, weak OCR, subscriber price databases, dealer stock books, school closure files and archival disposal registers remain the meaningful frontier.

## Next move

The strongest next action is documentary, in this order:

1. Science Museum transfer/disposal index `CORP/SCM/02/02/7/421`.
2. Relevant portions of the 1920–27 transfer composite after index routing.
3. Store-register ultimate-disposal annotations using exact 1877/1888 numbers.
4. Berlin OS001-02 inventory for Krefeld 2025 crosswalk.
5. Glasgow 1909.66 register / Mason purchase paperwork.
6. Loudon dealer/school identification.

Only after those routes are exhausted is another broad auction-house sweep likely to be efficient.

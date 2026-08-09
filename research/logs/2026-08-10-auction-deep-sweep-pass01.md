# 2026-08-10 — Auction deep sweep, pass 01

## Purpose and scope

This pass treats auction catalogues as a provenance-gap layer rather than a market-price project. The public auction rule already used by the site is retained:

- include an attributed Blaschka model when there is a public auction record and the checked sources do **not** explicitly identify the buyer as a museum, university, or comparable institutional collection;
- if an institutional buyer is explicitly documented, the acquisition belongs in the collection/provenance layer instead of the auction layer;
- earlier institutional ownership does not disqualify a later market appearance, so deaccessioned museum material can be retained when it subsequently re-enters public market documentation;
- auction appearance does not prove private ownership; an undisclosed buyer leaves post-sale custody open;
- estimates, hammer prices, buyer-premium-inclusive prices, passed lots, and conflicting platform statuses remain separate evidential states.

Canonical structured output for this pass: `auctions/auction-data.json`.

## Search method

The run began with auction houses and aggregators whose archives are directly searchable or substantially indexed on the open web. Queries were repeated with spelling variants and multilingual market vocabulary, including `Blaschka`, `Blashka`, `Blauschka`, `Blaschke`, `Leopold und Rudolf Blaschka`, `Blaschka Glasmodell`, `modèle en verre Blaschka`, `modello in vetro Blaschka`, and object terms such as sea anemone, jellyfish, coral, marine invertebrate and glass model.

High-signal sources checked in this pass included James D. Julia's legacy archive, Cheffins, Grisebach/Invaluable, Christie's, Kunst & Design Auktionshaus Krefeld, LiveAuctioneers, Gazette Drouot, The Saleroom and AskART. A broader targeted negative pass also covered Dreweatts, Woolley & Wallis, Tennants, Sworders, Roseberys, Chiswick, Special Auction Services, Dominic Winter, Neumeister, Quittenbaum, Van Ham, Lempertz, Dorotheum, im Kinsky, Hargesheimer, Dr. Fischer, Artcurial, Ader, Tajan, Piasa, Pandolfini, Cambi, Il Ponte, Balclis, Skinner, Hindman, Freeman's, Rago, Doyle, Sotheby's, Bonhams, Heritage, Auctionet, Barnebys and Lot-tissimo. A negative targeted web/domain pass is **not** evidence that an archive contains no Blaschka lot; older unindexed catalogues remain a major next stage.

## Included records

### James D. Julia, 2005 — probable reoffer of Pontobdella no. 330

Two legacy catalogue pages describe what is very probably the same model twice in 2005.

- Winter 2005, lot 480A: `Pontobdella Muricata, L. No 330`, 5 in long x 3/4 in widest, condition `Very good`, estimate $1,000–3,000. The legacy result display is `$0.00`; this is preserved literally and is not interpreted as a confirmed hammer or sale result.
- Samoset 2005, lot 561: the same taxon/label, dimensions, condition, estimate and wording; the archive displays $1,150. James D. Julia states that legacy reported prices include hammer plus buyer's premium, so this is not stored as a hammer price.

The exact shared label (`L. No 330`) plus identical dimensions, description, condition and estimate make a same-object reoffer highly likely, but the two records remain separate until image-level confirmation.

### Grisebach, 26 November 2015 — Serpula no. 343

Invaluable's indexed sold-lot record preserves a Grisebach appearance for a glass model of a Serpulidae worm with interior label `Blaschka’s Modelle / Dresden. / Serpula contortuplicata. / L. No. 343`, estimate €3,000–5,000. The exact primary Grisebach lot page, lot number and realized result were not recovered in this pass. The market record gives the date as `Circa 1900` while attributing it jointly to Leopold and Rudolph Blaschka; that wording is preserved as market metadata rather than silently normalised.

### Cheffins, 30 November 2016, lot 621 — three qualified jellyfish models

Cheffins sold three nineteenth-century glass jellyfish models for £4,600 under the qualified description `possibly by Rudolf Blaschka`. The group is therefore retained as a **tentative auction attribution**, not as three verified Blaschka objects. The catalogue records iron rods, ebonised turned bases, one paper label reading `Cyclops?`, and losses including damage during viewing.

### Christie's London, 30 January 2019, lots 46–48 — Science Museum deaccessions

All three models have unusually useful institutional identifiers and explicit historical custody:

- lot 46, `Physalia physalis`, Science Museum `1877-381`, with later replacement to the top bulb;
- lot 47, `Polyclonia frondosa`, Science Museum `1877-360`, described as reassembled;
- lot 48, jellyfish, Science Museum `1877-376`, on an iron rod stand.

Christie's states that the models were acquired by the Science Museum in 1877 and deaccessioned in 1925–27. They remain in the auction layer because the 2019 buyers are not publicly identified. Lot 46's sale-room estimate was revised to £10,000–15,000. A secondary report gives a £10,000 sale result for lot 46; it is stored only as secondary-reported pending primary confirmation. Primary realized results for lots 47 and 48 remain open.

### Kunst & Design Auktionshaus, Krefeld, 10 May 2025, lots 26–27

The auction house reports hammer prices of €28,000 for a sea-anemone model and €30,000 for a stinging/spiny-polyp model. Drouot adds a valuable provenance clue for lot 26: an adhesive label reading `Zoolog. Institut Universität, Berlin` followed by a handwritten botanical designation. That label is recorded as prior institutional provenance only; it says nothing about the 2025 buyer.

### Kunst & Design Auktionshaus, Krefeld, 16 May 2026, lots 39–40 — unresolved result conflict

The auction house's own results page lists €5,000 hammer prices for both lots 39 and 40. LiveAuctioneers marks both `Lot Passed`. This is kept as an explicit platform conflict rather than reconciled by assumption. Lot 40 is a `Corallium rubrum` model and the auction-house page gives provenance as a private collection in Austria.

## Rejected false positives retained for future search hygiene

- Wimbledon Auctions / The Saleroom, 13 February 2023, lots 33–37: catalogued `IN THE MANNER OF LEOPOLD AND RUDOLF BLASCHKA`; shell-and-wax anatomical models rather than attributed Blaschka glass.
- Phillips London, 3 November 2016: Guido Mocafico, *Selected Images from Leopold and Rudolf Blaschka*, twelve chromogenic prints. Relevant reception/market material, but not Blaschka objects.
- Skinner, 11 May 2018, lot 129: Christopher Williams photograph of a Blaschka-labelled model; not the model itself.
- Dorotheum: Josef von Blaschka nobility diploma; unrelated name collision.
- Dr. Fischer: Casparus Blaschka silver wine jug; unrelated maker.
- Sotheby's: Wenzel Blaschka silver plates; unrelated maker.

## Current structured-state summary

Pass 01 contains 11 included lot records across 7 auction-event groups. One event, Cheffins lot 621, contains three physical objects, so the lots describe 13 physical-object appearances. This is deliberately **not** treated as 13 unique models because the two 2005 James D. Julia records are probably a reoffer of the same `L. No 330` object.

## Open tasks for pass 02+

1. Recover the exact Grisebach 26 November 2015 primary lot page, lot number and result.
2. Resolve what James D. Julia's Winter 2005 `$0.00` display actually means and compare the two 2005 lot images to close the reoffer inference.
3. Recover primary realized results for Christie's 2019 lots 47–48 and independently confirm the secondary £10,000 result for lot 46.
4. Resolve the 2026 Krefeld / LiveAuctioneers passed-versus-hammer contradiction.
5. Move beyond directly searchable live web catalogues into digitised PDF and printed auction catalogues, library sale-catalogue holdings, dealer archives and newspaper auction notices, especially pre-2005.
6. Use paywalled art-price databases only as lead generators unless the relevant metadata can be checked directly under public or licensed access.
7. Continue searching with spelling variants because the 2005 James D. Julia archive uses `Blashka` and other databases contain `Blauschka`/`Blaschke` noise.

This pass establishes a reusable market-provenance backend. Future public-page additions should be generated selectively from the structured data rather than turning the auction page into a price list.

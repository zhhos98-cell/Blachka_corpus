# Auction deep sweep — pass 18: Christie’s historical scientific/natural-history lot archive

Date: 2026-08-10

## Purpose

Passes 16–17 mapped the Christie’s scientific/model catalogue family and located institutional copies. This pass uses the surviving public Christie’s lot archive as an intermediate layer before full-catalogue scans are available.

This is a **bounded web-index audit**, not a complete catalogue screen.

## Target sequence

The pass concentrates on:

- 29 May 1997 — `Scientific and Engineering Works of Art, Instruments and Models` — 255 lots from catalogue metadata.
- 8 Apr 1998 — `Exceptional Scientific and Engineering Works of Art, Instruments and Models`.
- 15 Apr 1999 — same family, sale MSI-8351, institutional copy at UCLA Clark.
- 7 Apr 2005 — `Exceptional Scientific and Engineering Works of Art, including Natural History and the William L. Camp Jr Spectacle Collection`.
- 29 Jun 2005 — `Scientific and Medical Works of Art and Natural History` — 306 lots from catalogue metadata.
- 19 Oct 2005 — `Scientific, Medical and Engineering Works of Art, Instruments and Natural History` — sale catalogue 5650.

## What survives publicly

Christie’s still exposes old individual lot pages and some sale landing pages from these categories.

Useful controls:

- A Philippe Danfrie astrolabe page cites the South Kensington 8 Apr 1998 catalogue and lot 50.
- A 2005 model-locomotive page carries the end-of-sale notice for the 7 Apr 2005 scientific/natural-history sale.
- Later scholarly provenance for a Coignet nocturnal independently cites the 7 Apr 2005 sale, lot 586.
- A Christie’s pocket-globe page cites the 19 Oct 2005 `Scientific, Medical and Engineering Works of Art and Natural History`, sale catalogue **5650**, lot 140.

These controls prove the family is represented in Christie’s surviving lot archive, even though the current text runtime does not expose a reliable complete browse of every historical lot.

## Query matrix

Run against exact/near-exact sale-title phrases with `site:christies.com/en/lot/lot-`:

Maker variants:

- Blaschka
- Blashka
- Blauschka
- Blaschke

Workshop / label vocabulary:

- Dresden
- Blaschka's Modelle / Blaschka’s Modelle
- L. No.
- Nr.

Object classes:

- glass model
- zoological model
- anatomical model
- natural history model
- teaching model

Taxonomic/common vocabulary:

- jellyfish / jelly fish
- sea anemone
- coral
- hydroid
- mollusc
- slug
- worm

## Result

No additional qualifying pre-2019 physical Blaschka glass-model lot was recovered from the **currently indexed Christie’s historical lot pages** in this pass.

That is intentionally weaker than a catalogue negative. The search index returns many category contaminants—locomotive models, globes, microscopes, bottles and other scientific objects—and may omit unindexed lots. Christie’s sale landing pages also expose browse counts inconsistently and cannot be equated automatically with printed catalogue totals.

Therefore all six target sales remain `full_catalogue_unscreened`.

## New sale-level metadata tightened

- 29 Jun 2005 catalogue: **306 lots**.
- 19 Oct 2005 sale: catalogue **5650**.
- 7 Apr 2005 sale definitely extended to at least lot **586**, based on independent scholarly provenance; this should not be converted into a total-lot count without the catalogue.

## Decision

Canonical auction table unchanged at 11 included lots.

Structured output:
`../../auctions/christies-scientific-lot-archive-audit.json`

## Next move

The next gain cannot come from repeating the same Christie’s maker-name queries. Priority is complete-catalogue access through Museo Galileo / UCLA Clark / other institutional holdings, then whole-catalogue OCR.

In parallel, another useful zero-cost route remains the old **sale title + object taxon/model number** search, especially model numbers already known to recur across institutions and markets. That should be used to prioritize catalogues before any paid scan request.

README is synchronized in this pass. Pages is left unchanged because this is a bounded negative/access result rather than a new object-level provenance bridge.

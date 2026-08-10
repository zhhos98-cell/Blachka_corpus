# Auction deep sweep — pass 15: Wimbledon 2023 wax-model false-positive cluster

Date: 2026-08-10

## Why this pass

Deep maker-name auction searching surfaced a concentrated group that looks promising in search results because every heading contains `LEOPOLD AND RUDOLF BLASCHKA`. Inspection shows that the catalogue itself expressly withholds direct attribution and describes a different material tradition. This is precisely the kind of result that can pollute a Blaschka auction dataset if search snippets are ingested without reading the lot.

## Sale

Wimbledon Auctions, `Antiques and Collectables`, 13 February 2023.

Easy Live Auctioneers' sale page lists lots 33–37 consecutively. All five sold.

Sale page:
https://www.easyliveauction.com/catalogue/04f16fb842974e50a8d3d49bfb88be6e/0af8d24542e81eb9357e7ef448a6646f/antiques-and-collectables/

## The cluster

All five headings begin:

`IN THE MANNER OF LEOPOLD AND RUDOLF BLASCHKA`

The objects are shell-and-wax / shell-and-waxwork anatomical models, not Blaschka glass models.

- Lot 33 — one Oliva Maura / Oliva Vidua shell-and-wax anatomical model — hammer £500.
- Lot 34 — two shell-and-waxwork sea-snail models, Harpa Ventricosa and an Oliva model — hammer £340.
- Lot 35 — three shell-and-waxwork models, Bulla Ampulla, Conus Textile, Strombus Luhuanus — hammer £480.
- Lot 36 — two shell-and-wax models, Voluta Undulata and Cypraea tigris — hammer £550.
- Lot 37 — two shell-and-wax models, Eburna Spiratus and Struthiolaria Crenulata — hammer £200.

Title-level count: ten catalogued model units across five lots. Lot 34 contains (a)/(b) wording inside the second model description, so the auction title's count of two is retained rather than inventing an extra physical-model unit.

The five displayed hammer amounts sum to £2,070. That sum is retained only as metadata for the rejected cluster; it is not Blaschka market evidence.

## Why these must be rejected

Three independent guards all point the same way:

1. Attribution is explicitly **`in the manner of`**, not Leopold/Rudolf Blaschka.
2. Medium is shell plus wax/waxwork, not glass.
3. The lot descriptions cite UCL and Australian Museum Blaschka literature precisely to discuss nineteenth-century alternatives such as papier-mâché and wax models. Blaschka literature in the bibliography is contextual evidence, not a maker attribution.

Therefore these lots do not enter `auction-data.json` and do not change the canonical 11-lot count.

## Search-contamination lesson

This cluster explains a recurring retrieval problem. Search engines see `Leopold and Rudolf Blaschka` in the heading and literature and rank the lots as maker hits. A dataset built from snippets could easily count all five as auctioned Blaschkas.

Future high-precision exclusion terms now include:

- `in the manner of`
- `shell and wax`
- `shell and waxwork`
- `papier-mâché`
- `wax model`

These terms do not justify auto-rejection without inspection, because genuine Blaschka-related provenance can mention wax comparanda. They do trigger mandatory lot-level review before promotion.

## Backend effect

Created:
`../../auctions/auction-false-positive-wimbledon-2023.json`

The original canonical backend retained six rejected false-positive records. This pass adds five supplementary rejected lots. Thus the researched rejected-lot corpus is now at least eleven, while the canonical included-lot table remains unchanged.

## Next move

The Wimbledon result confirms that maker-name indexing alone is saturated with contextual/manner-of contamination. The next pass therefore moves one level outward: map old auction-catalogue **families** that are plausibly high-yield but not lot-text indexed—scientific instruments/models, natural history, and English/Continental glass—and record which catalogues can be obtained as scans rather than pretending public search has exhausted them.

Pages update decision: add a short exclusion note on the public Auctions page after this research block, because the Wimbledon cluster explains the site's scope rule to readers and is a materially clearer public explanation rather than a backend-only route.

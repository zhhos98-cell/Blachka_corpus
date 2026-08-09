# 2026-08-10 — Auction deep sweep, pass 05: reuse of the historical BNA matrix

## Why reuse this file

The earlier microscopy/material-transfer project already contained a small maker-specific newspaper submatrix for Blaschka/Blaschke glass models. Rather than pretending the auction project is starting from zero, this pass imports the evidential boundary of those query runs into the auction research state. The structured audit is `../../auctions/auction-newspaper-audit.json`.

## What the earlier BNA run actually covered

The original matrix was run on the British Newspaper Archive on 24 July 2026 for 1850–1886. Four rows matter directly here:

- `F09` — `glass models auction`: 123,990 displayed hits, eight screened, no retained article/event; explicitly classified as semantic noise and unusable without maker or institutional anchors.
- `F10` — `Blaschka presented`: results present but dynamic count unreliable; two previews screened, none retained.
- `F11` — `Blaschke presented models`: four displayed hits, all four screened, two articles/two events retained; this exact query row is the only one of the four that was fully screened.
- `F12` — `Blaschka purchased models`: results present but count unreliable; one visible lead screened and it did not prove purchase.

The important methodological point is that only `F11` supports a clean query-level closure. The other three are bounded partial/negative rows, not absence proofs.

## F11 retained two institutional acquisitions, both excluded from the auction layer

### Edinburgh, 24 August 1867 report

The matrix classifies `BNA-E0010 / BNA-A0035` as a verified institutional purchase by the Edinburgh Museum of Natural History: a set of Leopold Blaschke glass models of sea anemones and allied forms was purchased for the zoological collection. Price and intermediary remain absent. Under the current auction policy this is a collection/provenance event and is not counted as an auction-market appearance.

### The Field, 18 March 1871

`BNA-E0026 / BNA-A0059`, *The Field*, p. 13, article title `Glass Models Recently Acquired`, preserves a preview stating that an interesting set of glass models of Medusae and Molluscs by Blaschke, Dresden, had been recently acquired by purchase. The institution name is missing from the retained preview. The original matrix explicitly warns against merging this notice with Edinburgh 1867.

Again, the event stays outside the auction layer because the surviving wording is institutional-acquisition language. It is useful as a provenance lead, especially because it may represent a separate British collection, but it is not evidence for a public auction.

## Search consequence

This BNA reuse makes a generic nineteenth-century maker-name rerun less useful than provenance-seeded newspaper work. The next newspaper queries should therefore be built around:

- Philip Brookes Mason / Mrs Mason + Blaschka / models / 300 / for sale / museum;
- exact Science Museum inventory numbers such as `1877-360`, `1877-376`, `1877-381` and adjacent ranges;
- `Zoolog. Institut Universität, Berlin` and taxon/morphology language for the two Krefeld 2025 lots;
- George Loudon + unnamed public school + London dealer, once either party is identified;
- exact model labels/numbers such as `L. No. 330`, `L. No. 343`, `Blaschka's Modelle`, `Serpula contortuplicata`, `Pontobdella muricata`.

The generic `glass models auction` formulation is now recorded as a known failure mode rather than something to keep rerunning.

## Evidence source

All query counts, statuses and retained-event classifications in this pass derive from `microscopy_first_round_1850_1886.xlsx`, especially the `Query Log`, `Events`, `Articles`, `Objects`, `Buyers` and `Outcomes` sheets. No missing institution or buyer is supplied by inference.

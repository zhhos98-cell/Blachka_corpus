# Auction deep sweep — pass 10: Krefeld lot 27 / Hydractinia echinata / Blaschka no. 156

Date: 2026-08-10

## Research question

Can the generic Krefeld 2025 catalogue wording `Stachelpolyp` be converted into an exact taxon/model number, and does that exact key connect the auction object to the surviving Berlin inventories?

This pass follows the auction-layer admission rule already fixed in `auctions/README.md`: the goal is provenance recovery, not market-price aggregation. No institutional acquisition is added to the canonical auction count, and catalogue/model numbers are not treated as unique physical-object serial numbers.

## 1. Auction anchor

Kunst & Design Auktionshaus, K-15, 10 May 2025, lot 27:

- catalogue title: `Glasmodell Stachelpolyp, um 1870`
- dimensions: 13 × 18 × 10 cm
- label: `Zoolog. Institut Universität, Berlin / handwritten botanical designation`
- hammer: EUR 30,000
- primary lot page: https://www.kunstunddesign-auktionen.de/de/auktionen/K-15/highlights/glasmodell-stachelpolyp-um-1870-137452/

The auction dating remains preserved literally as market metadata.

## 2. Taxonomic closure

Universität Leipzig's Zoologische Sammlung publicly illustrates a Blaschka model explicitly captioned `Stachelpolyp (Hydractinia echinata)`.

Source: https://www.lw.uni-leipzig.de/institut-fuer-biologie/abteilungen/molekulare-evolution-und-systematik-der-tiere/zoologische-sammlung

Result: Krefeld lot 27 can be normalized at the taxonomic-name level to **Hydractinia echinata**.

Guard: this resolves the name, not the identity of the physical auction object.

## 3. Blaschka catalogue-number closure

Cornell University Library Digital Collections records its Hydractinia echinata model as:

- Blaschka Number: **156**
- Cornell Number: 381
- Original Blaschka Species Name: Hydractinia echinata

Source: https://digital.library.cornell.edu/catalog/ss%3A20107896

Result: `Hydractinia echinata`, `Stachelpolyp`, and **Blaschka no. 156** become exact search keys for the Berlin provenance problem.

Guard: no. 156 is a catalogue/model-design number and does not uniquely serialize a single physical model.

## 4. Complete MfN OS001-02 cross-check

The project's previously assembled Berlin backend contains a complete transcription of the published Museum für Naturkunde `OS001-02 Blaschka Glasmodelle` inventory:

- 40 inventory rows
- minimum 59 explicitly stated physical components
- 28 distinct Blaschka catalogue-number segments

Exact searches across that complete transcription for `Hydractinia`, `Hydractinia echinata`, `Stachelpolyp`, and catalogue number `156` produced **no match**.

This is a meaningful negative for the *presently published OS001-02 inventory*. It is not evidence that Berlin never owned a Hydractinia no. 156, nor that an object could not have passed through MfN before the present inventory was constituted.

The same inventory contains several actiniarian/zoantharian records relevant to Krefeld lot 26 only as future comparison candidates: OS001-02 25 `Actinia equina`; OS001-02 30 `Anemonia sulcata`; OS001-02 35 `Epizoanthus couchii` / Blaschka no. 117. None is promoted to an identity match.

## 5. HU branch becomes higher priority

Humboldt University's collection biography records a 1970 decision to reduce the Zoologische Lehrsammlung. Parts were given away, many preparations were lost, and other material was transferred to the Museum für Naturkunde.

Source: https://www.sammlungen.hu-berlin.de/sammlungen/zoologische-lehrsammlung/

Because lot 27 bears the `Zoolog. Institut Universität, Berlin` label formula, because that label style is independently documented in the HU collection, and because Hydractinia/no. 156 is absent from the complete current MfN OS001-02 transcription, the HU historical inventory and 1968–1970 reduction files now outrank another generic Berlin/MfN web search.

Guard: the 1970 event is a documentary window, not an object-level disposal date for lot 27.

## 6. Rakow design-archive seed

The Rakow Research Library MS 0013 finding aid includes `Hydractinia echinata` in the marine-invertebrate drawings. That creates a future design-comparison route once the exact drawing image/record and the auction object's photographs can be inspected side by side.

Design similarity must remain separate from provenance identity.

## 7. Decision and backend effect

- Canonical auction count: unchanged.
- Krefeld lot 27: taxon normalized to `Hydractinia echinata` in supplementary crosswalk only; original auction wording remains preserved.
- New exact search key: `Blaschka no. 156`.
- Direct match to current MfN OS001-02: unsupported by the complete published inventory transcription.
- HU/Zoologisches Institut historical teaching-stock route: strengthened, still unproven.
- Krefeld lot 26: remains taxonomically unresolved.

Structured output: `../../auctions/krefeld-hydractinia-156-crosswalk.json`.

## 8. Next run

1. HU historical inventory/acquisition search: `Hydractinia echinata`, `Stachelpolyp`, `156`.
2. HU 1968–1970 gift/loss/transfer documentation using those exact keys.
3. Krefeld lot 27 image-level label audit for additional handwriting, inventory numbers or catalogue numbers.
4. Rakow Hydractinia drawing inspection.
5. Continue Science Museum number-led archive routing in parallel; do not substitute generic maker-name searching for exact identifiers.

## Public-page update

The Auctions GitHub Pages page should be updated in this pass with a short research note beneath the 2025 Krefeld case. It should communicate the Hydractinia/no. 156 resolution and the MfN/HU distinction while explicitly stating that the 1970 dispersal is not yet an object-level provenance bridge.

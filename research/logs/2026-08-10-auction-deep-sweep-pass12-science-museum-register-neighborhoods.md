# Auction deep sweep — pass 12: Science Museum register neighborhoods and split afterlives

Date: 2026-08-10

## Question

The previous Science Museum work identified both institutional transfers and later private-market survivals from the 1925–1927 Blaschka deaccession. Can exact historical register numbers demonstrate that split at a finer scale and improve the archive search unit?

## 1. Cardiff supplies the institutional side of the split

The project backend's Cardiff curatorial inventory preserves historical Science Museum register numbers on transferred objects. High-value examples include:

- `1877-361` → Cardiff `27.407.09` → *Charybdea periphyllum*.
- `1877-380` → Cardiff `27.407.07` → *Physalia arethusa*.
- `1877-385` → Cardiff `27.407.06` → *Physophora myzonema*.
- `1877-397` → Cardiff `27.407.08` → *Velella sinistra*.

The same Cardiff layer also preserves many earlier 1877 register numbers and a separate 1888 layer, including `1888-25`, `1888-33`, and `1888-45`. This confirms that the population dispersed in 1927 was not reducible to one 1877 order/cohort.

## 2. Christie’s supplies the market side

Christie's 2019 Peter Petrou sale preserves painted ex-Science Museum numbers:

- `1877-360` → *Polyclonia frondosa* → lot 47 → market reappearance.
- `1877-376` → unidentified jellyfish → lot 48 → market reappearance.
- `1877-381` → *Physalia physalis* → lot 46 → market reappearance.

Christie's explicitly states Science Museum acquisition in 1877 and deaccession in 1925–27 for the numbered lots.

## 3. Two consecutive-number splits

### 1877-360 / 1877-361

`1877-360` later appears at Christie's; `1877-361` is documented in Cardiff's 1927 institutional transfer.

This is a one-number adjacency with two different downstream provenance regimes.

### 1877-380 / 1877-381

`1877-380` is documented at Cardiff; `1877-381` later appears at Christie's.

Again, consecutive Science Museum numbers split between institutional transfer and later market circulation.

The second pair is especially suggestive because both downstream descriptions use *Physalia* names. That taxonomic proximity must remain descriptive, not converted into a claim that the two physical objects were one set or duplicated model type without the original register/catalogue evidence.

## 4. Methodological consequence

The archive search unit should now be the **register neighborhood**, not the maker name alone.

Priority bundles:

- `1877-360 / 361`
- `1877-376 / 380 / 381 / 385 / 397`

The target question for the Science Museum records is no longer simply “where did the Blaschkas go?” It is whether one disposal schedule or store register records adjacent numbers with different disposition annotations: Cardiff, another institution, sale, transfer, destruction, or another category.

Register adjacency itself is not provenance evidence. It is a routing device until the administrative logic of the original 1877 number sequence is understood.

## 5. Model-design crosslink: no. 330

A second useful result emerged from the Cardiff exact-number crosswalk:

- Science Museum `1877-202` → Cardiff `27.406.10` → `Pontobdella (Hirudo) vittata` → Ward/Blaschka catalogue no. **330**.
- Cornell's digital Blaschka collection likewise assigns no. **330** to old name `Pontobdella (Hirudo) vittata`, current portal name `Trachelobdella lubrica`.
- Museum Wales publicly discusses its `Pontobdella (Hirudo) vittata` model and notes that it still survives on an original packing card.
- James D. Julia's 2005 auction record, however, transcribes its original cardboard label as `Pontobdella Muricata, L. No 330`.

This produces a source-level **taxon/label conflict** around the same catalogue number. It should not be silently harmonised. The robust statement is that no. 330 is a recurring model-design key across institutional and market records; the Julia label transcription conflicts with the catalogue/cross-collection naming attached to that number.

Shared no. 330 does not imply that the Cardiff, Cornell, Glasgow or Julia examples are the same physical model.

## 6. Backend effect

New structured file:

`../../auctions/science-museum-register-neighborhoods.json`

It records:

- the two consecutive split pairs;
- additional Cardiff and market anchors in the 360–397 range;
- selected earlier 1877 and separate 1888 Cardiff crosswalks;
- the no. 330 institutional/market design crosslink and naming conflict;
- exact archive targets and evidential guards.

Canonical auction count remains unchanged.

## 7. Next pass

1. Search Science Museum public archive metadata and any indexed catalogue text for the paired neighborhoods `360/361` and `380/381`.
2. Recover the administrative logic of the original 1877 registration sequence before interpreting adjacency beyond routing value.
3. Search UCL-derived Blaschka records for old Science Museum numbers; a third destination number in the same neighborhood would further tighten the dispersal map.
4. Preserve 1888 register numbers separately when routing the 1927 Cardiff transfer.
5. Keep the Julia no. 330 taxon conflict open until an image of the original label or a primary historical catalogue can adjudicate the wording.

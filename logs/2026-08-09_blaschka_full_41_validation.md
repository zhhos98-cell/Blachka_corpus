# Blaschka surviving-collection census — full 41-node validation

Date: 2026-08-09

## Result

All 41 institution-level nodes in the current 2026 census were re-audited against their cited current institutional, catalogue, exhibition, collection-science, or conservation evidence. No duplicate institution-level node was deleted. The census therefore remains **41 current-proof nodes**, but the validation pass materially changes several count and baseline fields.

The audit is recorded row by row in `data/blaschka_census/2026_full_validation_audit_41_2026-08-09.csv`.

## Material corrections

1. **Humboldt-Universität Berlin:** the previous value `65` was unsafe as an HU-only count. Published 65/66 figures describe surviving Berlin material divided across two locations/institutions. Current HU object records prove physical survival and institutional custody, but no secure HU-only aggregate has yet been recovered. HU `current_count` is therefore blank. Museum für Naturkunde remains a separate 40-record current node. No HU subtotal is derived by subtraction because the Berlin-wide and MfN figures have different dates/scopes.

2. **Cornell University:** current count is upgraded from blank to `about 570`. Cornell's current collection overview distinguishes the physical collection from the much smaller digitised-image subset.

3. **Trinity College Dublin:** current count is normalised to `>50` from a recent institutional collections guide. The older `nearly 60`, the 2016 55-model Zoology count, and the 82-model institution-wide count are retained as distinct dated scopes.

4. **Derby Museums:** fresh current evidence proves `>=1`; the exact one-model figure is retained as Corning's 2016 baseline state rather than silently projected into 2026.

5. **Australian Museum:** `nearly 100` is retained as a 2020 count layer, while separate July 2026 institutional pages provide fresh custody confirmation. The record now distinguishes count date from custody date.

6. **Academy of Natural Sciences / Drexel:** the live ArchivesSpace finding aid gives 48 models but explicitly describes the collection state as of May 2012. The row is therefore flagged `CURRENT_CATALOGUE_REVERIFY` with `48 [May 2012]`, rather than presenting 48 as a fresh 2026 recount. The 53-item archival extent remains separate from model count.

7. **Naturhistorisches Museum Wien:** first-party NHMW evidence supports 50 owned objects. A secondary/recent 40-model statement is preserved as an unresolved scope/date conflict; it does not overwrite the institution's own 50 count.

## Baseline-classification correction

The validation pass separates four different claims that had begun to blur together:

- `DIRECT_PRE2017_CORNING_YES`: Corning 2016 itself explicitly identifies the current collection. Current 41-node members in this class are Cornell, Derby, University of Wisconsin-Madison, University of Vienna, and Australian Museum.
- `PRE2017_KNOWN_SURVIVOR`: a reliable pre-2017 study establishes survival, but the exact 2017 Corning map pin/current-status row has not been recovered. Current 41-node members are National Museum of Ireland, Trinity College Dublin, University College Cork, and University of Galway.
- `BASELINE_CONFLICT`: Trento. The 2025 paper points back to Ruggiero and Larson 2017 for prior knowledge, while the same research group's 2022 abstract calls the two school nuclei and five objects previously unknown/unidentified. This is preserved as a source-layer conflict.
- `DELTA_STRONG_UNRESOLVED`: Pavia. The 2022 rediscovery language and 2025 physical/conservation work make it the strongest post-2017 delta candidate, but no direct proof yet establishes absence from the 2017 map.

All other current nodes remain `UNRESOLVED` for baseline matching until the 2017 pin-level list is reconstructed. **No current node is assigned `baseline_2017_match=no`.**

## Identity and duplicate audit

The following superficially adjacent holdings remain separate nodes:

- Naturhistorisches Museum Wien versus University of Vienna Zoological Collection. University models displayed at NHMW are a loan/display subset, not a third collection.
- Museum für Naturkunde Berlin versus Humboldt-Universität Zoologische Lehrsammlung. The 65/66 Berlin aggregate spans two locations and must not be assigned wholesale to HU.
- Fondazione Scienza e Tecnica Firenze versus University of Florence / La Specola.
- Natural History Museum London versus UCL Grant Museum.
- National Museum of Ireland, Trinity College Dublin, University College Cork, University of Galway, and UCD are distinct institutional collections.

No census-node deletion was required after this identity audit.

## Freshness result

- 40/41 nodes have sufficiently recent or live evidence to retain their current-survival row as presently structured, including cases where the exact count remains open.
- ANSP/Drexel remains in the census because its live institutional catalogue is strong evidence for the collection, but the stated 48-model physical state is explicitly dated May 2012 and needs fresh count/custody reverification.
- UCD remains outside the 41-node current census: 117 models were located in the 2016 Irish survey, but no sufficiently direct 2024-2026 UCD custody/display/CMS statement was recovered in this pass.
- Queen's University Belfast remains a historical negative control because the nineteenth-century order is secure while the 2016 survey could no longer locate the collection.

## Current inference ceiling

This validation does **not** prove that the worldwide surviving total exceeds 68. The 2017 baseline still needs pin-level reconstruction. Pavia remains the strongest candidate for a genuine post-2017 addition; Trento remains conflicted. The validated 41-node census should therefore be used as a current-proof comparison set, not as a partial numerical subtraction from 68.

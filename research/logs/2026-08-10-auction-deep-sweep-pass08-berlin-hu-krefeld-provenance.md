# 2026-08-10 — Auction deep sweep, pass 08: Berlin HU / Krefeld provenance

## Why this pass

Krefeld 2025 lots 26 and 27 both carry labels transcribed as `Zoolog. Institut Universität, Berlin`. Earlier work had treated this broadly as a Berlin institutional clue and routed it toward the Museum für Naturkunde `OS001-02 Blaschka Glasmodelle` inventory. A fresh institutional search shows that this needs a two-branch model: the Humboldt University Zoologische Lehrsammlung and the Museum für Naturkunde historical collections must be kept distinct.

Structured output: `../../auctions/berlin-krefeld-provenance-audit.json`.

## Auction evidence

- Krefeld lot 26: sea anemone, catalogued around 1870, 10 x 13 x 13 cm, label `Zoolog. Institut Universität, Berlin / [handwritten botanical designation]`, hammer EUR 28,000.
- Krefeld lot 27: stinging polyp, catalogued around 1870, 13 x 18 x 10 cm, the same institutional label wording, hammer EUR 30,000.

The auction dating remains market metadata. It is not corrected in this pass.

## Humboldt University teaching collection

The Humboldt University Scientific Collections portal documents a Zoologische Lehrsammlung founded by Franz Eilhard Schulze on 1 April 1884. Its collection biography is important for provenance reconstruction:

- material entered from an anatomical-zootomical collection at foundation;
- a large zoological transfer from the Zoologisches Museum occurred on 19 February 1886;
- in 1970 the section decided to reduce the teaching collection; parts were given away, many specimens were lost, and other parts were transferred by staff to the Museum für Naturkunde.

The 1970 event is therefore a genuine dispersal window. It is **not** yet a disposal event for either Krefeld lot.

## Current HU Blaschka proof

The HU portal exposes multiple surviving Blaschka teaching models with object IDs, inventory numbers and dates, including:

- 8308 / 14.1.2.3-3, *Lanice conchilega*, 1885;
- 8310 / 14.1.2.5-6, *Spirorbis spirorbis*, 1887;
- 8311 / 14.1.2.2-6, *Arenicola marina*, 1885;
- 8312 / 14.1.2.4-1, *Sabellaria alveolata*, 1887, with a documented purchase price of 3 Mark;
- 8314 / 14.1.1.2-6, *Proceraea cornuta*, 1887;
- 8317 / 4.4.2-1, *Heliosphaera actinota*, 1885;
- 8320 / 4.3.1-1, *Actinophrys sol*, 1885.

These records establish a real HU Blaschka teaching corpus, but none currently provides an object-level match to Krefeld lot 26 or 27.

## Label-style corroboration

Two HU teaching-collection microscope-slide records independently preserve printed labels reading `Zoolog. Institut/ Universität Berlin`:

- HU object 15970, *Asterias rubens* Brachiolaria;
- HU object 15872, *Sagitta* sp.

This is high-value evidence because the wording is essentially the same institutional formula transcribed from the Krefeld labels. It substantially strengthens a historical HU Zoologisches Institut association. It still does not supply a Krefeld inventory number, date of exit or title history.

## HU versus Museum für Naturkunde

The HU collection history explicitly says Schulze built a university teaching collection independent of the zoological museum in 1884. Later, during the 1970 reduction, some teaching material could be moved to the Museum für Naturkunde. Therefore `HU Zoologische Lehrsammlung` and `MfN OS001-02` are sequentially connectable but not interchangeable collections.

The archived Museum für Naturkunde Historical Division page still exposes the inventory target `Inventarliste OS001-02 Blaschka Glasmodelle`. The PDF URL is known, but the PDF body was not recovered by the current research runtime.

## Dating conflict

Krefeld dates both objects around 1870. The current HU examples found in this pass are dated 1885 or 1887, and the teaching collection itself was founded in 1884. This raises a real chronology problem but does not justify replacing the auction date. An older Blaschka object could have entered a later-founded collection, and the exact Krefeld objects remain unidentified.

## Current hypothesis ordering

1. Former HU Zoologische Lehrsammlung / Zoologisches Institut stock: plausible and now strongly supported at label-style level, but unproven object by object.
2. Exit during/after the documented 1970 HU collection reduction: plausible event window, no object bridge yet.
3. Transfer HU -> Museum für Naturkunde -> later market: possible because the 1970 biography records transfers to MfN; still unproven.
4. Another Berlin university zoological-institute stock sequence: remains possible until an old inventory number is recovered.

## Next actions

The next search should no longer start with auction-house names. It should start with HU historic inventory and 1968-1970 collection-reduction records, then the MfN OS001-02 list. Candidate object taxon/model numbers can then be compared against Krefeld images, dimensions and handwritten labels.

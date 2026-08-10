# Auction deep sweep — pass 14: UCL catalogue chronology and card-index provenance router

Date: 2026-08-10

## Why this pass

Pass 13 reduced the eight publicly named UCL Blaschka accessions to three explicit Lankester records, one pre-1925 UCL control and four unresolved objects. Public object pages still expose no old Science Museum registration number. This pass asks which historical UCL documentation system actually spans the 1925–1927 transfer and therefore deserves priority.

## 1. The Lankester catalogue has a date-label discrepancy that must stay visible

Current UCL sources use `1890`:

- the current Blaschka highlight says twenty models appear in an **1890 printed museum catalogue** compiled by E. Ray Lankester;
- current Collections Online records for P130, P161 and P191 use the collection field `Blaschka Glass Model Collection, Lankester 1890 Grant Museum Catalogue`.

A UCL documentation-history article from 2013 instead says the first catalogue of the collection was **published by E. Ray Lankester in 1891**.

Sources:
- https://www.ucl.ac.uk/museums-collections/grant-museum-zoology/highlights/blaschka-glass-models-invertebrates
- https://blogs.ucl.ac.uk/museums/2013/10/31/from-the-vollies-loose-ends-and-key-information/

Decision: preserve `1890` as the source-native current collection-field label and retain `1891` as a bibliographic publication-date claim to be resolved later. Do not silently harmonise them.

## 2. UCL itself warns that the first catalogue is not a clean acquisition register

The same 2013 documentation-history piece describes the first Lankester catalogue as **part catalogue, part wishlist**. Another UCL discussion of lost labels explains that early collection documentation does not perfectly map onto present objects and that some listed material may never have been in the museum.

Source:
https://blogs.ucl.ac.uk/museums/2013/08/01/grant-museum-objects-on-tour-lost-labels/

This confirms the guard already used in the backend: a match in the twenty Blaschka appearances would be strong routing evidence, but it would still need object-level corroboration.

## 3. The second documentation system is the crucial Science Museum bridge

UCL states that the next cataloguing attempt after the Lankester catalogue was a **card index begun in the early 1900s and continued until the 1970s**.

That range directly spans:

- C182's known UCL teaching use in 1911;
- the Science Museum deaccession/transfer in 1925–1927;
- later renumbering and collection moves.

This card-index series is therefore the highest-value UCL source for identifying which present accessions entered from the Science Museum and whether old `1877-xxx`, `1888-xx`, `E.` or other previous-institution numbers were recorded.

## 4. MDA cards form a third documentation layer

UCL identifies the MDA cards as the third major cataloguing attempt, dating mainly from the 1980s. A 2013 project sorted about **1,500 handwritten MDA cards** and cross-referenced them with the database. UCL says these cards can record accession number, specimen type, scientific name, collection place/date, acquisition and conservation information. It also warns that some specimens have multiple cards carrying different or conflicting data.

This matters because an MDA card may preserve a previous acquisition source even where the current public Axiell record shows only the object description and collection field.

Source:
https://blogs.ucl.ac.uk/museums/2013/10/31/from-the-vollies-loose-ends-and-key-information/

## 5. Documentation controls fixed

Use four known-control objects to interpret the historical cards before classifying the unresolved set:

- P130, P161, P191 — explicit current Lankester records;
- C182 — independently documented at UCL in 1911, so impossible as a 1925–27 Science Museum transfer.

Unresolved targets remain:

- P202 *Limax arborum*;
- P196 *Arianta arbustorum*;
- C373 *Actinia equina*;
- S73, female sea cucumber.

The card-index search should ask how the four controls are represented first. That will show which old-number and provenance fields mean what before applying them to the unresolved objects.

## 6. Exact fields to recover

For each target accession:

- historical/alternative numbers with scheme labels;
- accession or first-entry date;
- source / donor / vendor / transferring institution;
- previous museum number;
- any `1877-xxx`, `1888-xx`, or `E.` number;
- label transcription;
- Blaschka/Ward catalogue number;
- historical taxon;
- mount/card/case description;
- condition/conservation annotations;
- cross-references between early card index and later MDA card.

## 7. Current public catalogue is not an exhaustion test

A targeted search for `Science Museum` combined with `Grant Museum`, `LDUCZ`, and `Blaschka` did not expose an indexed object-level UCL record carrying a Science Museum provenance field.

This is deliberately retained only as a bounded negative. UCL explicitly says its online catalogue is ongoing and not comprehensive, and UCL staff have documented substantial information living only on cards, labels, archives and object surfaces.

## 8. Structured output

Created:
`../../auctions/ucl-catalogue-card-index-router.json`

It records:

- the 1890/1891 date-label discrepancy;
- first-catalogue wishlist caveat;
- early-1900s–1970s card-index priority;
- 1980s MDA card layer and field vocabulary;
- control and unresolved accessions;
- Science Museum identifier formats to search;
- a tightly scoped UCL research-request packet.

Canonical auction count remains unchanged.

## 9. Next run

1. Search for digital traces, references or archival descriptions of the Grant Museum early card index / MDA cards tied specifically to the eight Blaschka accessions.
2. Recover Sarah E. Parker's legacy `GMZ_Blaschkas` document if possible.
3. Search the current UCL catalogue more aggressively for additional Blaschka detail records beyond P130/P161/P191; any newly indexed record may expose a collection field or alternative number that changes the candidate pool.
4. Search non-Blaschka UCL records known to have come from the Science Museum to learn how previous-institution provenance is encoded in Axiell, without assuming Blaschka records use the same pattern.
5. Keep Pages unchanged this pass: pass 12 already added the object-level Science Museum register split, while pass 14 is archive-routing infrastructure rather than a new public provenance edge.

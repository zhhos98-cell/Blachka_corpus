# Microscope-slide corpus expansion — progress log

Date: 2026-08-09
Branch: `slide-survey-actions-pilot`

This log records derived analytical work after the frozen survey closure. It does not reopen or modify the `CLOSED_2026-08-09` census.

## 1. Frozen survey sealed

- Canonical discovery layer: **307** unique entries.
- Strict nineteenth-century layer: **155** entries.
- Closure arithmetic is executable through `scripts/build_frozen_strict_membership.py`.
- Final export/QC produced 155 unique rows and passed the final validation layer.
- Future discoveries require a later reopening/version.

## 2. Derived 155 analysis layer

`data/analysis/slide_155_analysis_v1/` was created as a read-only analytical layer over the 155 surviving-object/provenance nodes.

Fields include unit level, production period, subject cluster, institutional/commercial context, circulation mode, count namespace and historical actor role. Source wording and frozen membership remain unchanged.

The layer is intended to support object-first research questions rather than to manufacture a uniform collection-count dataset from heterogeneous nodes.

## 3. Object-first corpus-expansion queue

`data/analysis/slide_155_corpus_expansion_v1/` routes surviving-object nodes against the seven existing UK microscopy text masters.

Initial routing counts:

- 155 nodes routed;
- priority: 7 P1, 30 P2, 38 P3, 80 P4;
- 21 expansion gaps;
- 32 immediate bridges;
- 7 serial sets;
- 76 custody gaps.

Literal actor matches are routing signals only. Contextual reading remains mandatory before a historical relation is recorded.

## 4. First verified object-to-text bridges

Bounded contextual verification established useful maker/trade/publication relations for:

- Theodor Eulenstein;
- Charles Collins Jr.;
- Hamilton Lanphere Smith;
- Frederic Kitton;
- Fritz Meyer / Stazione Zoologica Napoli.

Verified rows are stored in `OBJECT_TEXT_BRIDGES_V1.csv`. Outstanding bounded source items are stored in `OPEN_PRIMARY_SOURCE_TARGETS_V1.csv`.

## 5. P1 source targets 1–2

### H. L. Smith

The correct August 1878 journal/volume for the Century III notice was identified and the digitized volume located. A stronger direct source was already present in the UK corpus: *Monthly Microscopical Journal* XVII (1877), pp. 100-101, describing Century I as 100 slides in five pasteboard trays with numbered labels/catalogue and exchange-derived material.

### Charles Collins Jr.

The exact 1884 `Fish Scales` notice was bibliographically located at *Microscopical News and Northern Microscopist* IV, p. 109; a source-specific transcription identifies a 48-species series. Existing 1884-1885 British evidence already closes the commercial series and retail route. Primary page-image ingestion is optional.

## 6. P1 source target 3 — Naples catalogue

The primary Naples price catalogue was located in *Mittheilungen aus der Zoologischen Station zu Neapel*, Bd. II, pp. 238-253. The catalogue text is signed **Neapel, August 1880**.

The uploaded IA DJVU text was parsed into **423 sequential historical catalogue offerings**. The 423 figure is an offering count, not a surviving-slide count.

Historical group counts:

- Protozoa 4;
- Coelenterata 33;
- Echinodermata 49;
- Vermes 33;
- Arthropoda 57;
- Mollusca in the source classification 54;
- Vertebrata 193.

Price parsing remains deliberately partial: 148 row prices are securely aligned; 275 remain unresolved because OCR detached/reordered table columns.

The catalogue establishes Fritz Meyer as director/organizer of the preparation department, not as personal preparer of all 423 offerings.

## 7. Naples → UK circulation crosswalk

The first British crosswalk records eight physical/object circulation events, plus separate catalogue-reception and method-circulation evidence.

The evidence distinguishes:

- finished-slide circulation;
- biological specimen circulation followed by British remanufacture;
- circulation of preparation methods.

Arthur Pennington's 1884 *Cerianthus solitarius* case is retained as `OFF_CATALOGUE_REWORKING`: the specimen came from Naples, but Pennington stained, embedded, sectioned and mounted it in Britain.

## 8. First item-level catalogue → Britain closure

Reverse taxon/preparation matching recovered the detailed exhibit list for the **9 June 1880 Royal Microscopical Society** shipment.

- `R24204`, JRMS p. 733: the Station donated **12 slides** through A. W. Waters; Mr Crisp called attention to them and they were exhibited under microscopes.
- `R24207`, JRMS p. 736: all twelve physical slides are named.

Comparison against the Naples 423 catalogue yields **nine exact/strong item matches**:

`42, 43, 67, 68, 71, 72, 86, 182, 186`.

Three are bounded:

- *Ascetta bianca* → `5|6`;
- *Asteracanthion/Asterias glacialis* larva → `43-49`;
- *Amphioxus lanceolatus* → `231|232`.

The row-level mapping is `NAPLES_1880_RMS_12_SLIDES_ITEM_CROSSWALK_V1.csv`.

This is a defensible **catalogue offering → named British physical slide shipment/exhibition** closure. It is not yet a `catalogue → Britain → surviving St Andrews slide` identity; all surviving-object identity fields remain `NOT_ASSERTED`.

## 9. Current next step

Continue only bounded reverse matching around already known British Naples events. Highest-value targets are detailed exhibit lists adjacent to:

- the 1883 F. Jeffrey Bell nineteen-slide RMS event;
- the 1881 Crisp RMS selection;
- the 1882 C. Baker RMS Conversazione display.

Search taxon + preparation-stage combinations only after an explicit Naples relation has been established. Common taxa alone are insufficient evidence.

Do not resume general-purpose harvesting, do not reopen the 307/155 discovery census, and do not equate shared catalogue taxonomy with physical-object identity.

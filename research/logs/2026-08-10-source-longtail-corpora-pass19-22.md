# Source long-tail and corpus expansion — passes 19–22

Date: 10 August 2026

## Purpose

This pass moves the Sources page beyond repository discovery toward sources that can be ingested, retrieved or tested at document level. The main rule remains unchanged: a same-period dealer record is not a Blaschka record unless the item itself, a finding aid, or a source-based archival reconstruction establishes the connection.

## 1. Direct digitised correspondence corpus

Biodiversity Heritage Library hosts **Rudolf Blaschka letters to Walter Deane, 1895–1927**, contributed by Harvard University Botany Libraries. The item exposes page images, downloadable PDF, JPEG 2000 and OCR/text, plus individually dated correspondence parts. BHL's Rudolf Blaschka creator index exposes 80 chapter/article/treatment records, dominated by the correspondence parts.

This source is therefore promoted from a bibliographic locator to an ingestible primary-source corpus. The first ingest must remain low-interpretation: displayed archival label, structured BHL date, page identifier, sender/recipient and raw OCR before thematic coding.

### Metadata guard

BHL contains visible conflicts between displayed labels and structured dates. Examples include May 12 1899 / structured 1889-05-12; Jul. 7 1913 / structured 1912-07-13; and Sep. 19 1923 / structured 1921-11-19. The project will preserve both fields and resolve them only against the manuscript image.

Canonical data: `sources/digitized-correspondence-register.json`.

## 2. Damon long-tail business documents

Three additional Damon corpora were isolated.

- **Smithsonian SIA RU007095**, Joseph Ashmead Clay and John Randolph Clay Papers: Box 1 includes 26 detailed specimen lists, 1861–1865, with financial information about purchases and exchanges. Robert Damon is named among the dealers together with Richard Talling and William S. Vaux. This is a pre-agency control for Damon's commercial paperwork, not Blaschka evidence.
- **Archivo del Museo Nacional de Ciencias Naturales / Simurg**: catalogues of fossils and rocks from Robert F. Damon's Weymouth collection and a French note of species sent to Castañon, Monge y Cia, 1885–1906. The start date overlaps the Blaschka agency period but the catalogued objects are fossils and rocks.
- **British Library Add MS 42579, f. 221**: Robert Damon to Richard Owen, 1859. This is an early dealer-network witness only.

## 3. Frič longitudinal control

A published reconstruction of the Grigore Antipa Museum acquisition used five Frič–Antipa letters (nos. 168–172, February 1907–November 1908), old jar labels, Antipa's inventory, museum registers and National Archives material. The historic acquisition recorded 908 items, with 642 surviving when catalogued. It is post-Blaschka marine production and therefore remains a longitudinal dealer-process control. Its value is structural: dealer correspondence, lists/inventory and surviving objects can be cross-walked in one receiving institution.

Canonical data for Damon and Frič: `sources/dealer-longtail-document-register.json`.

## 4. Charles Francis Adams personal archive

The 1885 Auckland correspondence already establishes Adams as the person who safely delivered Ward-supplied Blaschka models and participated in the £20 triangular settlement. Illinois History and Lincoln Collections preserves **Charles Francis Adams Diary, 1884–1887**, collection 782, a 160-page account including daily entries for travel to New Zealand and Auckland Museum work from 15 January to 12 July 1885.

The finding aid does not claim Blaschka content. The diary is therefore a targeted personal archive for the exact handoff/handling chronology, not yet a Blaschka document. A useful negative result would also be recorded if the diary omits an event that is explicit in dealer correspondence.

Canonical data: `sources/mobile-intermediary-register.json`.

## 5. UCD / Royal College of Science transaction gap

The published reconstruction of the 13 June 1885 UCD/Royal College of Science order reports a base invoice of 495 Reichsmarks and two later-looking lines in thicker ink/different handwriting: `commission “r”: 124 / 619`. The authors interpreted the 124-Mark addition as probably made by an intermediary after Leopold Blaschka signed and sent the invoice.

UCD Archives preserves **IE UCDA RCSI, Records of the Royal College of Science for Ireland, 1867–1929** (7 boxes, 115 bound volumes). Catalogue descriptions identify consolidated College accounts for 1883–1885 and order books/journal for equipment and supplies for 1867–1916. These are now exact receiving-side retrieval targets for the unidentified commission.

The project does not expand `r` into a person/company and does not assign the commission to Damon, Ward or any other actor without documentary proof.

Canonical data: `sources/transaction-gap-register.json`.

## Decision

The Sources page now distinguishes four increasingly useful source levels: repository → named series/file → direct digitised/document-level record → ingestible corpus. Future source expansion should favour the last two levels. Broad repository discovery may continue only when it produces a named retrievable unit or closes a specific transaction gap.

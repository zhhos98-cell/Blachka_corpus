# Rudolf 1892 taxonomic-alias stress test pass 20 — 13 August 2026

## Purpose

Pass 19 produced a minimum Tempe collecting packet and suggested that only some field references later became glass models. That result immediately creates a source-critical problem: the Blaschka lists span decades of changing botanical nomenclature, while Harvard's current herbarium records use modern determinations. A simple exact-name comparison can therefore manufacture false negatives. It can also manufacture false positives when two historical generic names look close but now resolve to different species.

This pass stress-tests `selective conversion` against current taxonomic synonymy. The purpose is narrow. Current taxonomic databases are used as **alias maps for searching the historical corpus**, not as replacements for the names on nineteenth-century sheets, drawings or model labels.

The result strengthens rather than dissolves the pass19 finding:

> **Selective conversion survives nomenclatural expansion.**

The most useful new result is methodological. Historical generic transfers can create very persuasive false crosswalks. In this corpus, *Acmispon/Hosackia/Lotus* is the clearest example.

---

## 1. Method

For each currently indexed Tempe taxon without a secure model descendant, I expanded the search through historically plausible synonyms supplied by Royal Botanic Gardens, Kew's Plants of the World Online. For *Acmispon maritimus*, ITIS supplied the relevant verified synonym pair when the indexed Kew result did not expose the species synonym list clearly.

Each alias was then searched case-insensitively across the mounted full `05B_Blaschka_Digital_Archive_Literature_Technical_MASTER(1).json`.

A zero count remains a **corpus-search negative**, not proof of historical absence. The audit asks whether nomenclature rescues an apparent field-reference/model relationship. It does not assume the loaded model/drawing corpus is exhaustive.

---

## 2. Brassica nigra: modern generic reassignment does not produce a hidden match

The HUH packet contains **GH 00672769, *Brassica nigra***, collected at Tempe on 18 April 1892.

POWO currently treats *Brassica nigra* as a synonym of *Mutarda nigra*. It also records the homotypic names *Sinapis nigra* and *Sisymbrium nigrum*. These are exactly the kind of names that could hide a nineteenth-century model-list match.

Search across 05B:

- `Brassica nigra` — 0
- `Mutarda nigra` — 0
- `Sinapis nigra` — 0
- `Sisymbrium nigrum` — 0

So the current absence is not an artefact of the most obvious generic reassignment.

The modern accepted-name choice should not be back-projected into 1892. What matters here is simply that synonym expansion did not reveal a model/drawing record.

---

## 3. Daucus pusillus: a fairly broad nineteenth-century synonym net still returns zero

For **GH 00973362, *Daucus pusillus***, POWO lists several synonyms already available in the nineteenth century, including *Babiron pusillum*, *Daucus australis*, *D. brevifolius*, *D. hispidifolius*, *D. montevidensis* and *D. scaber*.

All of these, plus the accepted name, return zero exact string occurrences in 05B.

This matters because the Daucus row is no longer just an exact-modern-name negative. The current model corpus also fails under a reasonably broad historical alias search.

---

## 4. Erodium cicutarium: the obvious Linnaean synonym is absent

**GH 01863429, *Erodium cicutarium***, was collected at Tempe on 21 April 1892.

POWO lists **Geranium cicutarium L.** as the homotypic synonym. Both `Erodium cicutarium` and `Geranium cicutarium` return zero in 05B.

POWO records a very large synonym set for this species, so this row remains only a first historical-name pass. Still, the most obvious pre-1892 alternative has been checked and does not connect the specimen to a Blaschka model record.

---

## 5. Cryptantha maritima: the 1885 basionym also returns zero

**GH 02024320, *Cryptantha maritima***, is especially clean chronologically. POWO lists **Krynitzkia maritima Greene**, published in 1885, as its homotypic synonym. Both names were therefore available in the period relevant to Rudolf's journey/workshop return.

Neither `Cryptantha maritima` nor `Krynitzkia maritima` occurs in 05B.

This is a good control because the alias is historically plausible rather than a twentieth-century nomenclatural invention.

---

## 6. Lycium fremontii: model 343 stays separate

The Tempe sheet **GH 00939452** is *Lycium fremontii*, collected 20 April 1892. POWO accepts the species and records nineteenth-century names including **Lycium gracilipes** and *Lycium fremontii* var. *gracilipes*.

Neither `Lycium fremontii` nor `Lycium gracilipes` appears in 05B.

The model corpus does contain **model 343, Lycium vulgare**, inside the seventh shipment. That is a same-genus neighbor, not a synonym-level match. It should therefore remain outside the Tempe specimen lineage.

This is exactly the sort of crosswalk that would become tempting if we only searched by genus.

---

## 7. Eriogonum inflatum: repeated field sheets do not collapse into the later E. fasciculatum model

Tempe preserves two independently indexed sheets of **Eriogonum inflatum**, dated 21 and 22 April 1892. POWO accepts *E. inflatum* and lists *Eriogonum glaucum* Small as a later synonym.

05B contains neither `Eriogonum inflatum` nor `Eriogonum glaucum`.

It does contain **Eriogonum fasciculatum** three times: in the Corning preparatory-drawing layer and as **model 580**, shipped only in January 1896. Current taxonomy does not turn *E. fasciculatum* into a synonym of the Tempe taxon. The same-genus relationship therefore remains an explicit negative control.

This row is useful temporally as well as taxonomically. The repeated 1892 sampling survived in herbarium form, while a different *Eriogonum* species entered the glass-model pipeline years later.

---

## 8. Acmispon maritimus: the dangerous false positive

The most important audit concerns **GH 01963615, Acmispon maritimus**, collected at Tempe on 21 April 1892.

ITIS verifies *Acmispon maritimus* var. *maritima* with the synonym **Hosackia maritima Nutt.**, together with *Lotus salsuginosus* var. *salsuginosus*. None of `Acmispon maritimus`, `Hosackia maritima`, `Lotus salsuginosus` or `Anisolotus maritimus` appears in 05B.

But 05B **does** contain a Corning preparatory drawing titled:

`Hosackia strigosa, 1892 or 1895`.

At first glance this is extremely tempting: same historical genus, same field-trip date window, same western flora. Current taxonomic control shows why it must be rejected. POWO treats **Hosackia strigosa Nutt.** as a homotypic synonym of **Acmispon strigosus**, a separate accepted species. POWO also places an illegitimate later homonym `Hosackia maritima Torr.` under *Acmispon strigosus*, which makes raw-name matching even more treacherous.

So:

`GH 01963615 Acmispon maritimus ≠ Corning Hosackia strigosa drawing`.

This is more useful than finding another match. It exposes a concrete failure mode in digital historical crosswalking: **taxonomic name mobility can masquerade as object/reference continuity**.

---

## 9. Result: the Tempe packet remains asymmetric after synonym expansion

The audit does not produce a hidden series of specimen-to-model pairs. Hoffmannseggia/model 433 remains the only currently secure specimen-to-later-model branch in the minimum packet.

Three apparent near-matches should now be frozen as controls:

- *Lycium fremontii* ≠ model 343 *Lycium vulgare*;
- *Eriogonum inflatum* ≠ model/drawing *Eriogonum fasciculatum*;
- *Acmispon maritimus* ≠ Corning drawing *Hosackia strigosa*.

This substantially improves the `selective conversion` claim because it no longer depends on naive exact-name matching. We have actively tried to dissolve the asymmetry through synonym expansion and instead uncovered name-based false positives.

The first-order formulation can now be sharpened:

> **The workshop selected among field references, while later taxonomy selected among names. Reconstructing the 1892 pipeline therefore requires keeping reference continuity and nomenclatural continuity analytically separate.**

---

## 10. A second guard: the digital herbarium is itself incomplete

Harvard's current specimen-search page says the Herbaria steward approximately **six million specimens**, of which about **1.8 million are digitized and searchable**, with new records added daily. Harvard explicitly invites inquiries for material not yet databased.

That means the pass19 nine-sheet Tempe packet is correctly called a **minimum digital packet**. The absence of an Abronia sheet, or of additional Ganong-Blaschka sheets, cannot be promoted into historical absence.

This gives us two independent negative-evidence guards:

1. a model-list negative can be defeated by historical synonymy;
2. a herbarium-database negative can be defeated by incomplete digitization.

The argument is stronger if both remain visible instead of being silently normalized away.

---

## 11. Consequence for the paper

A useful larger distinction is emerging between three kinds of continuity:

- **material continuity**: the same physical specimen/object persists;
- **reference continuity**: one field encounter generates a later representation without requiring the same object to travel continuously;
- **name continuity**: taxonomic labels remain stable or can be reconciled across time.

The Hoffmannseggia case has strong reference continuity while its names change. The Acmispon/Hosackia case shows that apparent name similarity can exist without reference continuity. The Tempe packet lets the paper demonstrate both phenomena using the same few days of collecting.

This is probably more valuable than adding more points to the map. It gives us a reason why historical transport reconstruction needs a source-critical layer between `place` and `object`.

---

## Files created

- `research/working/rudolf-1892-tempe-taxonomic-alias-audit_2026-08-13.json`
- `research/logs/2026-08-13-rudolf-1892-taxonomic-alias-audit-pass20.md`

Public map unchanged.

## Next priority

The next genuinely high-yield move is to reconstruct the **complete collector-level Ganong & Blaschka 1892 HUH packet**, or get as close to complete as the public database permits, then inspect original sheet labels. That will let us distinguish current HUH determinations from the names actually attached to the specimens in 1892 and move from a taxonomic stress test to a document-level field-reference history.

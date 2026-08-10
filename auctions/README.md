# Auction provenance layer

This directory contains the public auction page and the structured market-provenance backend used to support it.

## Files

- `index.html` — selective public presentation.
- `auction-data.json` — canonical structured auction lot records recovered from public auction-house and aggregator archives.
- `auction-provenance-crosslinks.json` — supplementary cross-source layer for inferred object/collector matches, prior institutional labels, dealer-market dispersals, date conflicts and other evidence that should not be flattened into canonical lot facts without an explicit bridge.
- `auction-historical-market-seeds.json` — pre-2005 and market-adjacent worklist: sale notices, estate/dealer dispersals, deaccession-register neighbourhoods and institutional-label targets used to search beyond maker-name indexes without inflating the public-auction count.
- `auction-newspaper-audit.json` — bounded reuse of the project's historical British Newspaper Archive query matrix, including maker-specific Blaschka/Blaschke searches, query-level completeness flags and explicit exclusion of institutional acquisitions from the auction layer.
- `auction-catalogue-recoveries.json` — later catalogue-level closures such as sale codes, exact lot numbers and single-owner sale context that improve existing records without creating duplicate auction events.
- `auction-archive-router.json` — exact archival record identifiers, object-number search keys and order of attack for unresolved deaccession/market chains once generic web search reaches diminishing returns.
- `berlin-krefeld-provenance-audit.json` — dedicated audit separating Humboldt University's Zoologische Lehrsammlung from the Museum für Naturkunde branch behind the `Zoolog. Institut Universität, Berlin` labels on Krefeld 2025 lots 26–27.
- `krefeld-hydractinia-156-crosswalk.json` — pass-10 crosswalk resolving Krefeld lot 27's `Stachelpolyp` to `Hydractinia echinata`, recovering Blaschka catalogue no. 156, and checking that exact key against the complete project transcription of the published MfN OS001-02 inventory.
- `auction-science-museum-recipient-audit.json` — bounded public-web audit of the Science Museum 1925–27 dispersal, retaining UCL and Cardiff as the two currently secure named recipients and routing the remaining five names into archive work.
- `science-museum-register-neighborhoods.json` — pass-12 object-number crosswalk showing consecutive Science Museum register numbers splitting between Cardiff institutional transfer and later private-market circulation, plus the Blaschka no. 330 institutional/auction naming conflict.
- `ucl-science-museum-transfer-candidate-audit.json` — pass-13 partition of eight publicly named UCL Blaschka accessions into explicit Lankester records, one pre-transfer UCL teaching object, and four still-unresolved candidates for the Lankester-versus-Science-Museum provenance problem.

## Admission rule

The auction layer is for provenance gaps, deaccession-to-market events, and later public market appearances. It is **not** a price guide.

Include an attributed Blaschka model when a public auction record exists and the checked sources do not explicitly identify the buyer as a museum, university or comparable institutional collection. If an institutional buyer is explicitly documented, that acquisition belongs in the collection/provenance layer instead. Earlier institutional custody does not by itself exclude a later auction appearance; deaccessioned objects can therefore remain here when they subsequently enter an open market record.

Auction appearance does not prove private ownership. If the buyer is undisclosed, post-sale custody stays open. Qualified attributions remain qualified. Estimates, hammer prices, buyer-premium-inclusive prices, passed lots, withdrawn lots and conflicting platform statuses are never silently normalised into one result field.

Dealer-mediated transactions, collector testimony, estate sale notices and institutional labels can be highly valuable provenance evidence without being auction events. These are retained in the cross-link / historical-seed files when they help identify a dispersal route or possible object identity, but they do not increase the canonical auction lot count.

## Current research state

The first deep searchable-web pass was completed on 10 August 2026. It covers directly searchable auction houses and major aggregators with multilingual spelling variants, plus a broad negative targeted pass over additional houses. The coverage statement is deliberately bounded: failure to find a result through web/domain search does not prove that an older or unindexed auction catalogue contains no Blaschka material.

The canonical public-auction table remains deliberately conservative at **11 lot records across 7 auction-event groups**. The earliest canonical public-auction lot recovered so far remains James D. Julia in **2005**. The historical market search reaches earlier: a December **1904** *Museums Journal* notice offered **300 Blaschka invertebrate models** from the Philip Brookes Mason estate. That notice does not enter the canonical auction count because the documented Blaschka-specific endpoint is Mrs Mason's **1909 institutional sale to Glasgow Museums for £275**; the exact 1909 quantity remains unresolved.

The 2015 Grisebach `Serpula contortuplicata / L. No. 343` appearance has been tightened to **ORANGERIE. Selected Objects, sale code 249, lot 483**, Berlin, 26 November 2015. The original Grisebach object page and realized result remain open, so this is stored as catalogue recovery rather than primary-page closure.

The Christie’s 2019 Science Museum material now has a defensible pre-sale custody/context layer. Christie’s explicitly described the auction as the collection of Peter Petrou, so the safe chain is `Science Museum 1877 -> deaccession 1925–27 -> unresolved gap -> Peter Petrou collection/sale context by Jan 2019 -> Christie’s auction -> buyer open`. No direct Science Museum-to-Petrou transfer or acquisition date is inferred.

### Berlin branch: from generic provenance to exact model key

The Krefeld 2025 lots can no longer be routed simply to a generic “Berlin” collection. Both lots carry labels transcribed as `Zoolog. Institut Universität, Berlin`. Humboldt University's current collections portal independently preserves essentially the same printed label formula, `Zoolog. Institut/ Universität Berlin`, on objects in its Zoologische Lehrsammlung. The same portal also exposes multiple surviving Blaschka teaching models with HU inventory numbers and dates of 1885 or 1887.

The HU collection biography adds a high-value dispersal event: in **1970** a decision was made to reduce the teaching collection; parts were given away, many specimens were lost, and other material was transferred to the Museum für Naturkunde. This creates a plausible route by which historically labelled teaching material could have left stable HU custody. It does **not** prove that Krefeld lot 26 or 27 left in 1970.

Pass 10 materially sharpens lot 27. The German auction title `Stachelpolyp` can be normalized to **Hydractinia echinata**: Universität Leipzig's Zoologische Sammlung uses the explicit caption `Stachelpolyp (Hydractinia echinata)` for a Blaschka model. Cornell's Blaschka digital collection then supplies the exact model-design key **Blaschka no. 156** for `Hydractinia echinata`.

That key has now been checked against the project's complete transcription of the published Museum für Naturkunde `OS001-02 Blaschka Glasmodelle` inventory: **40 rows, minimum 59 explicitly stated physical components, 28 distinct Blaschka catalogue-number segments**. No `Hydractinia echinata`, `Stachelpolyp`, or catalogue no. `156` occurs in those 40 rows. This is a meaningful negative for the presently published OS001-02 inventory, not proof that Berlin never held such a model or that the object never passed through MfN. It does, however, make the HU historical teaching-stock and reduction/dispersal records the stronger next route.

Pass 11 turns that conclusion into named archive series. HU records an additional **19 February 1886 transfer from the Zoologisches Museum into the teaching collection, including 80 Coelenterata**, so a HU teaching object need not have originated as a direct post-1884 purchase. The HU online object list is explicitly a `Teil-Katalog`; its current 1,339 records therefore cannot support a complete-inventory negative. Current HU records also preserve old identifier systems such as `ZI` and `IfZ`, which are now included as exact search keys alongside `Hydractinia echinata`, `Stachelpolyp`, and no. 156.

MfN's records-collection tectonic now supplies the administrative route behind the current object inventory: `S001` Zoologisches Museum (1810–1888), `S003` Zoologisches Institut der Universität (1889–1960), `S004-04` Institut für Spezielle Zoologie und Zoologisches Museum der HU (1960–1968), and `S005-02` Bereich Zoologisches Museum (1969 onward). `S003` and `S004-04` are the highest-value MfN-held series for pre-1968 institutional files; `S001` can test the 1886 museum-to-teaching transfer; and `S005-02` can test material entering MfN after the HU collection reduction. Exact file identifiers remain unresolved.

A practical constraint is now recorded in the router: MfN states that its records collection is inaccessible from **1 July 2026 until approximately Q4 2027** during Museum Evolution work, although targeted email information requests remain possible. The immediate Berlin route is therefore a compact remote query to the archive plus HU historical-inventory work, rather than a planned physical sweep.

HU and Museum für Naturkunde remain distinct institutional branches. The HU teaching collection was founded independently in 1884; MfN has a separate OS001-02 inventory; and HU records later transfers of some teaching material to MfN. The earlier pass-08 runtime note that the OS001-02 PDF body was unavailable is superseded for research purposes by reuse of the project's previously captured complete 40-row transcription.

Krefeld lot 26 remains taxonomically open. The MfN inventory contains possible actiniarian/zoantharian comparison records such as `Actinia equina`, `Anemonia sulcata`, and `Epizoanthus couchii`, but none is promoted to an identity match without the auction object's handwritten taxon, a catalogue number, or stronger image evidence.

The Krefeld `around 1870` dating remains untouched as auction metadata. Current HU examples and the Berlin acquisition chronology make the date worth testing, but collection chronology alone cannot redetermine an unidentified physical object.

### Science Museum branch: register numbers reveal mixed dispersal at object scale

UCL states that the Science Museum's 1925–27 deaccession transferred Blaschka models to UCL and six other institutions. Cardiff / Amgueddfa Cymru is independently secure as one of those six, with **62 models transferred in 1927**. A fresh targeted public-web pass did not securely recover a third recipient. That is recorded as a bounded negative result, not an exhaustive historical claim.

Pass 12 sharpens the dispersal from collection level to exact historical register neighborhoods. The Cardiff curatorial inventory preserves `1877-361` as *Charybdea periphyllum* at NMW `27.407.09`, while Christie’s later market record preserves immediately preceding `1877-360` as *Polyclonia frondosa*. A second consecutive pair splits in the opposite direction: Cardiff holds `1877-380` as *Physalia arethusa*, while Christie’s lot 46 preserves `1877-381` as *Physalia physalis*. In both cases, consecutive Science Museum numbers now occupy different provenance regimes.

This does **not** prove that adjacent numbers were transferred together or constituted one workshop set. It does establish register neighborhoods such as `360/361` and `376/380/381/385/397` as more powerful archival search units than the maker name alone. The priority question for the transfer/disposal papers is whether those neighboring numbers appear on common schedules with divergent disposition annotations.

The same Cardiff crosswalk also clarifies Blaschka catalogue no. **330**. Science Museum `1877-202`, transferred to Cardiff as NMW `27.406.10`, is recorded as `Pontobdella (Hirudo) vittata`, catalogue no. 330; Cornell likewise associates no. 330 with old name `Pontobdella (Hirudo) vittata`. James D. Julia's 2005 auction page, however, transcribes its original label as `Pontobdella Muricata, L. No 330`. That discrepancy is retained as a source-level taxon/label conflict. Shared no. 330 demonstrates repeated circulation of one catalogue/model design; it does not make the Cardiff, Cornell, Glasgow or Julia examples the same physical object.

The next Science Museum route remains archival and number-led: `CORP/SCM/02/02/7/421` transfer/disposal index -> relevant 1920–27 nominal files -> `CORP/SCM/Z/048` store-register ultimate-disposal annotations, now queried by paired number neighborhoods as well as individual identifiers.

### UCL branch: one transfer candidate eliminated without guessing

Pass 13 revisits the eight publicly named UCL Blaschka accessions. Three current Collections Online records are explicitly assigned to the `Lankester 1890 Grant Museum Catalogue` layer: `LDUCZ-P130` (*Clione limacina*), `LDUCZ-P161` (*Ercolania funerea*), and `LDUCZ-P191` (*Arion ater*). Five public anchors had previously remained unassigned between the Lankester and Science Museum layers.

One of those five can now be removed from the Science Museum transfer candidate pool. UCL's own 2017 object-history feature identifies `LDUCZ-C182`, *Haliclystus auricula*, in a **1911 Practical Zoology student notebook**. The same surviving accession was therefore in UCL teaching use well before the 1925–27 Science Museum deaccession. C182 is now classified as `pre-transfer UCL custody confirmed`; its exact relationship to the twenty entries in Lankester's 1890 catalogue remains open.

The public partition is therefore now **3 explicit Lankester + 1 independently pre-transfer + 4 unresolved + 0 explicitly Science Museum**. The four remaining unresolved accession anchors are `LDUCZ-P202` (*Limax arborum*), `LDUCZ-P196` (*Arianta arbustorum*), `LDUCZ-C373` (*Actinia equina*), and `LDUCZ-S73` (female sea cucumber, taxon unresolved). UCL explicitly warns that its online catalogue is incomplete, so failure to recover a collection field or old Science Museum number for these four is not a provenance negative.

Two documentary targets now outrank another generic UCL web search. First, UCL elsewhere describes the `1890 Lankester Grant Museum Catalogue` as its earliest accession register; recovering its twenty Blaschka entries could remove further objects from the Science Museum candidate pool, though catalogue appearance still requires corroboration. Second, a 2015 UCL feature cites Sarah E. Parker's now-dead `Blaschka Glass Models at the Grant Museum` document (`GMZ_Blaschkas`), which may preserve an earlier model list or provenance distinctions that disappeared from currently indexed records.

### Loudon dealer route

George Loudon's first-person accounts remain a separate dealer-provenance problem: a London dealer supplied his first Blaschkas and said they came from an English public school / school natural-history department being disposed of for financial reasons. No dealer or school name was recovered in the present open-web pass. This route stays outside the canonical auction count unless a public auction event is found.

## Detailed logs

- `../research/logs/2026-08-10-auction-deep-sweep-pass01.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass03-provenance-crosslinks.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass04-early-market-and-archive-seeds.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass05-newspaper-matrix-reuse.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass06-catalogue-identifiers.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass07-archive-router.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass08-berlin-hu-krefeld-provenance.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass09-science-museum-recipient-web-audit.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass10-krefeld-hydractinia-156.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass11-berlin-archive-series-router.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass12-science-museum-register-neighborhoods.md`
- `../research/logs/2026-08-10-auction-deep-sweep-pass13-ucl-transfer-candidate-audit.md`

## Next search layer

Priority remains away from another broad auction-house sweep. The immediate order is:

1. Recover the twenty Blaschka entries in UCL's 1890 Lankester register and Sarah E. Parker's legacy `GMZ_Blaschkas` document; compare P202/P196/C373/S73 against those historical entries before asking which public UCL objects might belong to the Science Museum transfer.
2. Seek a UCL Blaschka collections export or documentation response with `Collection`, `Alternative Number`, historical labels and previous-institution numbers; ask specifically for any `1877-xxx` or `1888-xx` Science Museum identifiers.
3. Science Museum archive metadata and later archive access: search the paired register neighborhoods `1877-360/361` and `1877-380/381`, then the wider `376/380/381/385/397` cluster; recover the administrative logic of the 1877 numbering before interpreting adjacency historically.
4. HU historical inventory plus 1886-transfer and 1968–1970 reduction/gift/transfer/loss records using exact keys `Hydractinia echinata`, `Stachelpolyp`, **Blaschka no. 156**, `ZI`, and `IfZ`.
5. MfN archive remote routing into `S001`, `S003`, `S004-04`, and `S005-02`; physical records access is currently suspended, so seek file-level identifiers by email before any later visit.
6. Image-level audit of Krefeld lot 27 for any additional label, handwritten taxon, catalogue number or old inventory number; keep lot 26 open until equivalent evidence appears.
7. Rakow MS 0013 `Hydractinia echinata` drawing record as a design-comparison source, without converting visual similarity into provenance proof.
8. Glasgow `1909.66` / Mason purchase files.
9. Identification of Loudon's London dealer and English public school.
10. Return to old auction catalogues only after these routes yield new names, catalogue numbers, taxa or provenance anchors.

False positives, count wording conflicts, inferred identities and spelling variants are retained in the structured backend/search logs to prevent repeated rediscovery or accidental conversion of ambiguous market evidence into settled provenance.

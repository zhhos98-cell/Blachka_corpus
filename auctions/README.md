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
- `auction-science-museum-recipient-audit.json` — bounded public-web audit of the Science Museum 1925–27 dispersal, retaining UCL and Cardiff as the two currently secure named recipients and routing the remaining five names into archive work.

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

### Berlin branch: a major provenance refinement

The Krefeld 2025 lots can no longer be routed simply to a generic “Berlin” collection. Both lots carry labels transcribed as `Zoolog. Institut Universität, Berlin`. Humboldt University's current collections portal independently preserves essentially the same printed label formula, `Zoolog. Institut/ Universität Berlin`, on objects in its Zoologische Lehrsammlung. The same portal also exposes multiple surviving Blaschka teaching models with HU inventory numbers and dates of 1885 or 1887.

The HU collection biography adds a high-value dispersal event: in **1970** a decision was made to reduce the teaching collection; parts were given away, many specimens were lost, and other material was transferred to the Museum für Naturkunde. This creates a plausible route by which historically labelled teaching material could have left stable HU custody. It does **not** prove that Krefeld lot 26 or 27 left in 1970.

HU and Museum für Naturkunde are therefore now treated as distinct institutional branches. The HU teaching collection was founded independently in 1884; MfN has a separate historical Blaschka inventory target, `OS001-02 Blaschka Glasmodelle`; and HU records later transfers of some teaching material to MfN. Object-level matching remains open. The Krefeld `around 1870` dating also remains untouched: current HU examples found in this pass are dated 1885/1887, but collection chronology alone cannot redetermine an unidentified auction object.

### Science Museum branch: public web exhausted before archive routing

UCL states that the Science Museum's 1925–27 deaccession transferred Blaschka models to UCL and six other institutions. Cardiff / Amgueddfa Cymru is independently secure as one of those six, with **62 models transferred in 1927**. A fresh targeted public-web pass did not securely recover a third recipient. That is recorded as a bounded negative result, not an exhaustive historical claim.

The next Science Museum route is therefore archival and number-led: `CORP/SCM/02/02/7/421` transfer/disposal index -> relevant 1920–27 nominal files -> `CORP/SCM/Z/048` store-register ultimate-disposal annotations. Exact numbers such as `1877-360`, `1877-376` and `1877-381` already demonstrate that the deaccession produced later market survivals as well as institutional transfers.

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

## Next search layer

Priority now shifts away from another broad auction-house sweep. The immediate order is:

1. HU Zoologische Lehrsammlung historical inventory plus 1968–1970 reduction/gift/transfer/loss records for the two Krefeld objects.
2. MfN `OS001-02` inventory as a separate Berlin branch and possible HU-to-MfN transfer endpoint.
3. Science Museum transfer/disposal index and store registers keyed by exact 1877 object numbers.
4. Glasgow `1909.66` / Mason purchase files.
5. Identification of Loudon's London dealer and English public school.
6. Return to old auction catalogues only after these routes yield new names, catalogue numbers, taxa or provenance anchors.

False positives, count wording conflicts, inferred identities and spelling variants are retained in the structured backend/search logs to prevent repeated rediscovery or accidental conversion of ambiguous market evidence into settled provenance.

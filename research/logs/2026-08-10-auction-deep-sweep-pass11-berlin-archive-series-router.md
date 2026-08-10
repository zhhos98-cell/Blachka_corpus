# Auction deep sweep — pass 11: Berlin archive-series routing after Hydractinia no. 156

Date: 2026-08-10

## Why this pass

Pass 10 converted Krefeld 2025 lot 27 from a generic `Stachelpolyp` into the exact search keys `Hydractinia echinata` and Blaschka catalogue no. 156. The complete published MfN OS001-02 inventory transcription contains no such row. The next task is therefore to identify the administrative record groups that could preserve the object's earlier Berlin history, rather than treating the current object inventory as the only archive layer.

## 1. Humboldt collection biography adds two historical transfer points

The HU Zoologische Lehrsammlung portal states:

- 1 April 1884: Franz Eilhard Schulze founded the independent teaching collection / Zoologisches Institut.
- 19 February 1886: a large transfer from the Zoologisches Museum entered the teaching collection, including **80 Coelenterata** alongside many other zoological groups.
- 1968: institutional merger during the third university reform.
- 1970: the teaching collection was deliberately reduced; material was given away, lost, or transferred to the Museum für Naturkunde.

Primary collection biography:
https://www.sammlungen.hu-berlin.de/sammlungen/zoologische-lehrsammlung/

The 1886 transfer is important because it blocks a simplistic chronology in which every HU teaching object must have been purchased directly by Schulze after 1884. An older zoological object could have entered the teaching collection by transfer. This still does not prove that either Krefeld model followed that path.

## 2. HU online catalogue is explicitly partial

HU calls the online object list a **Teil-Katalog** and currently exposes 1,339 objects for the Zoologische Lehrsammlung.

Source:
https://www.sammlungen.hu-berlin.de/objekte/zoologische-lehrsammlung/

Therefore:

- failure to find `Hydractinia echinata` in the public HU portal is only a bounded negative;
- it cannot be used as an argument that HU never held Blaschka no. 156;
- historical inventory books and disposal records remain necessary.

The portal also demonstrates that old teaching-collection identifier layers survive in current records. Examples elsewhere in the collection retain historical prefixes such as `ZI` and `IfZ`. Those prefixes should now be included among the label/inventory search keys for the Krefeld objects.

## 3. Museum für Naturkunde records-series tectonic

MfN's official records-collection overview identifies the following administrative record groups:

- `S001` — Zoologisches Museum, 1810–1888.
- `S003` — Zoologisches Institut der Universität, 1889–1960.
- `S004-04` — Institut für Spezielle Zoologie und Zoologisches Museum der HU zu Berlin, 1960–1968.
- `S005-02` — Bereich Zoologisches Museum, 1969 onward.

Official overview:
https://www.museumfuernaturkunde.berlin/en/research/records-collection-chronological-overview

These series establish an archive route distinct from OS001-02:

### S001
Potentially relevant to the museum side of the 19 February 1886 transfer into Schulze's teaching collection. Search for transfer schedules, Coelenterata, teaching material, models, and any Blaschka/Dresden wording.

### S003
Highest-value MfN-held administrative series for the historical Zoologisches Institut after 1889. Search exact keys:

- `Hydractinia echinata`
- `Stachelpolyp`
- `Blaschka 156`
- `Glasmodelle`
- `Lehrsammlung`
- `Zoologisches Institut`
- `ZI`

### S004-04
Bridge from 1960 to the 1968 institutional reorganisation. Search inventories and movement/transfer records that might preserve old teaching-collection numbers immediately before the 1970 reduction.

### S005-02
Museum-side records after 1969. Useful for material transferred **into MfN** from the HU teaching collection around the 1970 reduction. It should not be mistaken for the HU-side disposal record itself.

## 4. Current access constraint changes the tactic

MfN's current archive page states that the records collection is inaccessible from **1 July 2026 until approximately Q4 2027** during Museum Evolution work. It nevertheless accepts email information requests.

Archive contact:
`archiv@mfn.berlin`

Current access page:
https://www.museumfuernaturkunde.berlin/forschung/sammlung/archiv/schriftgutbestand/

This means the immediate zero-cost route is no longer “visit and scan S003”. It is a tightly scoped remote query asking whether the archive can identify file-level references under S001/S003/S004-04/S005-02 for Hydractinia/no.156, Blaschka glass models, Lehrsammlung movements, or the 1970 incoming transfer.

## 5. Archive-query packet now fixed

### Lot 27 exact key packet

- Hydractinia echinata
- Stachelpolyp
- Blaschka no. 156 / Nr. 156
- `Zoolog. Institut Universität, Berlin`
- old identifiers beginning `ZI` or `IfZ`
- dimensions from auction: display case 13 × 18 × 10 cm

### Institutional event packet

- 19 February 1886 transfer from Zoologisches Museum to teaching collection; 80 Coelenterata
- 1968 merger/reorganisation
- 1970 reduction: gift / loss / transfer to MfN

### Object-class packet

- Glasmodell / Glasmodelle
- Lehrmodell
- zoologisches Modell
- Coelenterata / Hydrozoa
- Lehrsammlung

## 6. Evidential effect

This pass does **not** add a provenance edge to the canonical object chain. It changes the routing confidence:

- direct current MfN OS001-02 match for lot 27: unsupported;
- historical HU/Zoologisches Institut custody: plausible and increasingly testable;
- 1970 HU reduction as exit event: plausible window, still unproven;
- MfN S003/S004-04 and HU historical inventories: now named archival targets rather than generic “Berlin archive” tasks.

## 7. Backend changes

`auctions/auction-archive-router.json` upgraded to schema 1.2.0 with:

- Hydractinia / Stachelpolyp / no.156 exact search keys;
- 1886 transfer event;
- HU `ZI` / `IfZ` old-identifier strategy;
- MfN S001, S003, S004-04, S005-02 record-series routing;
- current MfN access closure and remote-query strategy;
- correction of the obsolete claim that the OS001-02 inventory body still needed to be obtained.

## 8. Next pass

Two routes now run in parallel:

1. Berlin: search any publicly indexed references to S003/S004-04 file-level identifiers, old ZI/IfZ numbers, and Hydractinia/no.156; if no file-level metadata surfaces, preserve a ready-to-send archive query rather than repeatedly searching generic web pages.
2. Science Museum: continue exact-number disposal routing for 1877-360/376/381 and adjacent institutional-transfer numbers.

The public Auctions page was already refreshed in pass 10, so no second cosmetic page edit is necessary in this pass unless a new object-level provenance edge is recovered.

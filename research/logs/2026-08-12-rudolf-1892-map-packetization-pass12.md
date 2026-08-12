# Rudolf 1892 map packetization pass 12 — 12 August 2026

## Purpose

Synchronize the full-corpus / GitHub / web calibration in pass 11 back into the public Rudolf 1892 map without turning the page into an undifferentiated spider web. This pass treats the person route and object routes as separate but coupled structures and promotes only packet movements that have enough source support to survive a public evidential guard.

The public claim is tightened from “a workshop on the move” to:

> The workshop worked at distance by being decomposed into differently transportable parts.

`Packet`, `handoff`, `handoff authority`, and `controlled decomposition` remain project analytical terms, not historical actor categories unless a primary source independently supplies equivalent wording.

## Source-critical actions before UI expansion

1. Rebuilt `PACK-1892-CUSTOMS-OPENING` in `sources/packing-feedback-unpacking-register.json` from the direct 1892 sequence.
   - Case marks are now U.B. 346–350, grounded in BLA-D00016 / 015:16.
   - BLA-D00695 / 017:49 supports five boxes reaching the museum on 19 February, their visually good condition, the porter removing outer packing, Goodale opening one case, and the Datura model being well preserved.
   - BLA-D00028 / 015:28 supports a later customs sample of about eight specimens in excellent condition.
   - The previous derived wording `L.B. 1–5` and blanket `without even a scratch` statement were removed. Sampled good condition is not generalized to unopened contents.
2. June 1892 accumulated repair remains detached from U.B. 346–350. The two severe cases are linked backward to the “first consignment” wording, not to the January 1892 shipment.
3. The 30 January 1892 Elbe sailing is used as a matching external sailing, not as a cargo-manifest identification. The public map preserves this distinction in the node guard.

## Packet set promoted to the public map

### G — U.B. 346–350 / glass cases

Direction: westbound freight.

Sequence: Hosterwitz → Bremen forwarding → Elbe / Atlantic crossing → New York bonded transit → Boston broker/customs chain → Harvard Botanical Museum.

Historical function: shows a finished-model consignment changing administrative and material state while moving independently of Rudolf. New York → Boston is marked as bonded movement rather than generic freight.

### R — repair-material packet

Direction: westbound post.

Source: BLA-D00654 / 017:7, 2 February 1892.

Rudolf asks Hosterwitz to send regular dry pigments, Hausenblase, prepared lime and possibly a Glasreiber in small separately wrapped quantities described as examples without value, care of Goodale. The source directly establishes the request and packaging design; dispatch/receipt have not yet been isolated. The route is therefore drawn as requested/prospective rather than completed movement.

Historical function: demonstrates that maker mobility did not carry the whole workshop. Repair capacity itself had to be decomposed into embodied skill plus a postal material packet.

### S — Cambridge seed packet

Direction: eastbound post.

Source: BLA-D00695 / 017:49, now tightly dated to 19 February 1892 by the translated header/postal context.

Rudolf says he sent about twenty-nine species of Cambridge Botanic Garden seeds as sample without value and encoded sowing-treatment signs. The same letter records the five model boxes reaching Harvard at noon.

Historical function: creates an exceptionally clean same-day counterflow. Finished glass reaches Cambridge while seed material and instructions leave Cambridge for Hosterwitz.

### B — cryptogamic reference books

Direction: eastbound reference supply.

Sources: Goodale, 27 July and 26 August 1892.

Goodale says it is impracticable to send the needed books from the Harvard Library, so he will buy fresh copies from publishers; by late August he expects the works of reference to reach Rudolf by mid-September. Exact shipment and receipt remain open.

Historical function: institutionally immobile library access is converted into transportable duplicate books after the traveller has already returned. The textual reference clock therefore remains separate from the person clock.

## Deliberately deferred from the public packet map

- preserved journey specimens still missing on 5 July after Rudolf’s return;
- Jamaica and western field-reference packets at object-by-object level;
- the 1893 return of selected American plants as finished glass models;
- exact UPU classification of the repair and seed packets;
- the exact Elbe bill of lading / freight manifest / customs bond.

These remain in the research ledger or pass 11 until origin/destination/date geometry is sufficiently precise for a public map. The Flows layer may continue to show process-level relations without claiming packet-level reconstruction.

## UI / map changes

1. Retitle page from **A workshop on the move** to **A workshop in transit**.
2. Keep the large full-width map and lower evidence strip established in pass 10.
3. Retain the orthogonal controls:
   - analytical mode: Journey / Work / Flows;
   - route scope: Person / Objects / Both.
4. Object markers now use packet-specific letter-number labels rather than a single global O-series:
   - G1…G6 glass cases;
   - R1…R2 repair materials;
   - S1…S2 seeds;
   - B1…B2 books.
5. Journey mode colours lines by packet identity. Work mode recolours object nodes/segments by handoff regime such as forwarding, bond, post, procurement, customs opening and reassembly.
6. Segment grammar now distinguishes direct movement, ocean legs, bonded transit, postal movement, requested movement and expected/prospective delivery.
7. Object detail vocabulary is revised to `Packet / Handoff / Handler or authority / State change / What the source allows`.
8. The packet directory now explains direction, status, evidence guard and date range rather than presenting every object route as equally certain.
9. The Sources section adds the matching Elbe departure context, NARA RG36 as the correct customs archive environment, and Boston Fruit Company records as commercial-infrastructure context. These are explicitly separated from direct cargo evidence.

## Data architecture

- Canonical/working evidential packet register: `research/working/rudolf-1892-map-packets-pass12_2026-08-12.json`.
- Derived public projection: `map/rudolf-1892/object-route-data.js`.
- Public behaviour: `map/rudolf-1892/map.js`.
- Public narrative/layout: `map/rudolf-1892/index.html`.
- Corrected longitudinal receiving source: `sources/packing-feedback-unpacking-register.json`.

This preserves the repository rule that the public JS payload is a derived interface layer rather than an independent research source.

## Current analytical result

The map can now display the central 1892 braid without pretending that all movement has the same evidential status:

- models westbound as freight and bonded merchandise;
- Rudolf westbound as passenger;
- repair materials westbound as a requested postal micro-packet;
- seeds eastbound as a dispatched postal packet;
- books eastbound after Rudolf’s return as newly purchased reference copies.

The stronger claim is therefore visible rather than merely stated: the workshop did not travel as a unit. It worked at distance through controlled decomposition, heterogeneous transport regimes, temporary handoff authority, and asynchronous reassembly.

# Rudolf 1892 map layout + object-route implementation pass 10 — 12 August 2026

## Purpose

Implement the transport/handoff calibration in the actual GitHub Pages map rather than as a separate illustration. The immediate design decision was to let the map occupy the full horizontal workspace, move the existing evidence/detail panel below it, and add a first independent object route for U.B. 346–350 while preserving the existing Journey / Work / Flows analytical modes.

## Implementation result

The public Rudolf 1892 page is now structurally two-dimensional rather than person-route-with-sidebar.

### 1. Full-width map

The former `journey-layout` split the workspace into a large map column and a sticky right-hand detail panel (`1.75fr + .72fr`). That grid has been removed. The map now occupies the full width of the map workspace; the project content width was raised from 1500px to 1680px and the desktop map is allowed to reach 78vh / 940px with a 690px minimum height.

The former right-hand evidence panel is retained, not discarded. It now sits immediately below the map as a horizontal evidence strip. For Rudolf nodes it preserves the existing `Seen / Work / Carried on / Later` fields. This keeps close reading available without sacrificing map width.

### 2. Two independent control dimensions

`Journey / Work / Flows` remain the analytical modes. A second control dimension has been added:

- `Person`
- `Objects`
- `Both`

This avoids conflating analytical mode with entity type. `Journey` can therefore be read as Rudolf alone, a reconstructed object packet alone, or both at once. `Work` can colour bodily stops by recorded activity while colouring object nodes by handoff regime. `Flows` can retain the existing material / information / decision / reference / return relations while an object packet remains visible as an independently moving entity.

### 3. First object packet: U.B. 346–350

A new public data file, `map/rudolf-1892/object-route-data.js`, introduces the first independent object packet:

`U.B. 346–350 · five cases · 60 plant models · 329 analytical details`

The working public sequence is:

`Hosterwitz → Bremen forwarding → Atlantic freight → New York → in bond toward Boston → Boston receiving/customs chain → Harvard Botanical Museum`

The visual grammar is intentionally different from Rudolf's numbered circular route. Object handoff nodes are square markers. Segment style changes with the transport regime instead of using one generic dashed line: forwarding, ocean transit, bonded transit, broker/customs handling, and museum unpacking can therefore remain distinguishable.

The object detail strip changes fields to:

- `Object`
- `Handoff`
- `Handler`
- `State change`
- `What the source allows`
- `Evidence`

This makes the object route a sequence of transfers and transformations rather than a second itinerary of place names.

### 4. Object packet directory

A new `Packets and handoffs` section sits below Rudolf's route directory. The directory is packet-first rather than place-first. Selecting U.B. 346–350 reveals and fits that packet's route and opens its first handoff. Later packets can be added without turning every material movement into another numbered bodily stop.

## Source-critical guards retained

The first packet is deliberately narrow.

- The 20 January 1892 letter directly supports U.B. 346–350, 60 models, 329 analytical details, railway freight, the Bremen-agent route, New York, and `in Bond to Boston` (`BLA-D00016 / 015:16`).
- Bremen is a documented forwarding node, but exact railway-arrival and steamer-loading dates are left open.
- Harvard-side correspondence supports arrival advice naming the `Elbe`, transfer of papers to E. A. Snow, museum delivery, staged unpacking, customs participation and sampled good condition. The public route does not invent an exact sailing date.
- Passenger customs and freight/bonded customs remain distinct. Rudolf's own Hoboken/Sandy Hook declaration sequence is not reused as the cargo's customs history.
- The June 1892 repair sequence remains outside U.B. 346–350. Goodale identifies the two severe New York-custom-house breaks as belonging to the `first consignment`; they are therefore not drawn onto this February packet.
- The suspect derived `PACK-1892-CUSTOMS-OPENING` formulation (`L.B. 1–5`, `without even a scratch`) is not used as the source for the new packet. Direct 1892 passages and the pass-09 source guards control the public wording.
- The mid-Atlantic point is a cartographic transit anchor for an ocean segment, not a claimed physical observation or handoff location.

## Files changed

- `map/rudolf-1892/index.html` — full-width workspace, route-scope controls, horizontal person/object evidence strip, packet directory, revised method text and new data-script load.
- `map/rudolf-1892/styles.css` — full-width map geometry, horizontal evidence layout, object-route palette/markers, packet cards, responsive rules, restored mobile-link and reduced-motion guards.
- `map/rudolf-1892/map.js` — independent object layers, Person/Objects/Both scope logic, object details, packet selection, object-regime styling, scope-aware legends/copy and bounds handling.
- `map/rudolf-1892/object-route-data.js` — first source-critical object packet.
- this log.

## Deployment / QA

GitHub Pages reported a successful legacy Pages build from `main` after the implementation. Build `1146748140` completed with status `built` and no error for commit `81877f4ac6432c1c27a5d3938874fac4c39135e4` on 12 August 2026. The repository Pages configuration continues to serve `main` from `/` at the established project URL.

Repository-level verification after the build confirmed that the current public HTML loads `object-route-data.js` before the revised `map.js`, contains the expected Person / Objects / Both controls and the horizontal object/person detail fields, and that the current object packet file carries the source guards above.

No browser-level visual regression automation exists in the repository for this map, so the next manual page view should check only presentation-level details: whether the enlarged map height is comfortable on the user's normal desktop, whether the two control rows need tighter spacing, and whether the Boston/Harvard markers need local offsetting at high zoom. These are UI refinements rather than unresolved source or data problems.

## Next expansion

Do not immediately flood the map with every movement. Add packets one at a time, using the same entity/handoff schema. High-value next candidates are:

1. `Cambridge seeds → Hosterwitz` — especially strong because the seed dispatch and the five-case Harvard arrival occur in the same letter, creating a literal counterflow moment.
2. preserved journey specimens whose arrival lagged behind Rudolf's return to Hosterwitz.
3. Cambridge-purchased reference books sent to the workshop after Rudolf's return.
4. selected American plants later returning to Harvard as finished glass models.

The first packet establishes the architecture. Subsequent packets should increase historical explanatory power, not merely line density.

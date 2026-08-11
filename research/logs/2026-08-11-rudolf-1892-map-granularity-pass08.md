# 2026-08-11 — Rudolf 1892 map granularity pass 08

## Scope

This pass synchronizes the finer trip / knowledge-production research back into the public `map/rudolf-1892/` interface without converting inference into extra visited stops.

## Route granularity

The documented numbered route remains unchanged. Instead, the 24 April Maricopa → Los Angeles railway day now carries four corridor-level overlays:

1. Maricopa → Yuma — morning-to-midday direct-observation window.
2. Yuma → California desert → Salton / Indio — secure ecological sequence with exact milepoints open.
3. Salton / Indio → Banning / San Jacinto approach — critical late-afternoon / twilight window.
4. Banning → Los Angeles — negative daylight control because the approximately 22:00 Los Angeles arrival is well after twilight.

The purpose is to keep sketchbook pp. 12–13 securely inside the 24 April rail sequence while refusing to pin the unresolved massif to a false point. The darker final segment explicitly represents an exclusion rather than a positive geolocation.

## Darlingtonia decision chain

The Oakland / Colorado / St. Louis sequence is now rendered at a finer epistemic scale.

- Oakland, 18 May: proposed Shasta diversion cost roughly four days and $70; Ganong proposes telegraphing Goodale.
- The party moves after about thirty-six hours without a usable reply.
- Colorado Springs: Goodale's delayed instruction catches up after movement and says they should not go to Shasta.
- Shasta therefore remains outside the documented route.
- St. Louis, 31 May: Darlingtonia in flower becomes available in a botanical-garden workroom; Rudolf makes a colour sketch and preserves a good specimen in alcohol.
- Rakow/Corning finding-aid metadata records a preparatory `Darlingtonia californica` drawing as identifier 133264, box 16 folder 85.
- Rudolf's 1900 attribution letter identifies Harvard model 444 as Darlingtonia.

The public Flows view now draws the decision-latency sequence and the St. Louis → Hosterwitz reference chain separately. The chain remains explicitly closed only at taxon/model-number level; a unique one-to-one genealogy from the 1892 sketch through drawing 133264 to model 444 remains unproved.

## Post-return reassembly queue

Hosterwitz is no longer treated as an instantaneous endpoint.

- Rudolf is home by 30 June.
- By 5 July he has resumed work on plants already flowering in the local garden.
- Preserved journey specimens have not yet arrived.
- Those specimens are to be selected later for future consignments.
- Goodale continues procuring / forwarding reference literature for cryptogamic work in July–August.
- By January 1893 a later consignment can include a few American plants.

The Flows layer therefore distinguishes traveller return, delayed specimen return, later reference-book movement, and workshop selection.

## Public UI changes

`map/rudolf-1892/source-data.js`
- adds source-backed node overrides and enhancements for Oakland, Colorado Springs, St. Louis and Hosterwitz;
- adds four `observationSegments`;
- adds `flowAdditions` for decision latency, Darlingtonia reference conversion, return/reassembly lag, and post-return reference-book circulation;
- expands node links for the new high-value evidence nodes.

`map/rudolf-1892/map.js`
- merges canonical flows with source-backed additions;
- renders corridor-level observation / exclusion overlays only in Journey mode;
- supports optional flow bend points so several transatlantic processes do not collapse onto one line;
- expands flow vocabulary to material, information, decision lag, reference chain, return/queue and future supply;
- uses source-data summary/category overrides in the detail panel.

`map/rudolf-1892/index.html`
- changes the thesis line to `People, specimens, books and decisions moved on different clocks.`;
- explains that corridor overlays are not additional visited nodes;
- updates the method text to include canceled route targets and asynchronous post-return reassembly;
- cache-bumps `source-data.js` and `map.js`.

## Evidential guard

No Shasta route node was added. No exact location was assigned to the unresolved 24 April sketchbook massif. No direct genealogy was asserted between one specific 1892 Darlingtonia sketch and Model 444. The map gains granularity by adding process and corridor resolution, not by manufacturing point precision.
# 2026-08-11 — Rudolf 1892 public map railway-clock sync

## Scope

This pass moves the strongest results of the backend railway-clock audit into the public `map/rudolf-1892/` dossier. It is a bounded frontend synchronization rather than a general publication of all sketchbook hypotheses.

## Public corrections made

### Maricopa · 24 April 1892

The public map now treats Maricopa primarily as a railway-junction / transit-observation node rather than as evidence for a separate collecting excursion.

- place and date are secure from correspondence/cards and dated sketchbook views;
- the westbound Southern Pacific time of about 6:35 a.m. is shown only as a close contextual control from the `Arizona Republican`, 29 May 1892;
- the map explicitly distinguishes secure presence from the weaker proposition that a formal field excursion occurred there;
- the analytical text now states that railway waiting and transit could themselves become observation time.

### Maricopa → Los Angeles · 24 April 1892

Los Angeles has been added as a documented overnight route node so that the long 24 April rail passage is visible as a corridor rather than collapsed into a direct Maricopa–San Diego jump.

The evidence panel reconstructs Rudolf’s next-day sequence:

Maricopa → Yuma → California desert → Salton depression → San Jacinto approach → Los Angeles.

The reported Los Angeles arrival “at 10” is displayed as `ca. 22:00`, explicitly labelled a high-confidence inference. The overnight stay and next-morning 8:45 departure are secure; the 10 p.m. reading is the interpretation that best fits those constraints.

This node carries the interpretive claim that railway time functioned as epistemic infrastructure: timetable, daylight, moving view, sketch/notes and next-day ecological narration belong to one evidence chain.

### San Diego · corrected to 25 April 1892, 13:00

The former public working date of 30 April has been replaced by the secure arrival date and time:

- San Diego letter header: 25 April 1892;
- Rudolf: arrival at 1 p.m.;
- Los Angeles departure: 8:45 a.m.;
- Pacific sighting: about 10 a.m.;
- 26 April letter independently confirms that the party was already working around San Diego the previous afternoon.

The San Diego node now separates arrival chronology from the later 30 April correspondence and describes hotel-based drawing/microscope work beginning by 26 April.

## Source-layer changes

`map/rudolf-1892/source-data.js` now:

- uses the corrected `san-diego-1892-04-25` stable node ID;
- adds Maricopa and Los Angeles evidence enhancements;
- links Maricopa to the 29 May 1892 timetable control;
- adds the Harvard archive link to the corrected San Diego node;
- preserves the Rakow catalogue / delivered-PDF discrepancy instead of presenting the catalogue’s Tempe beginning as if the current surrogate independently confirmed it.

## Public method note

The page method text now states two guards explicitly:

1. a dated place can prove presence without proving a separate collecting excursion;
2. a timetable can constrain an observation window without proving an exact train unless issue/date evidence closes the match.

## Cache invalidation

The public page now requests:

- `route-data.js?v=20260811-2`
- `knowledge-data.js?v=20260811-2`
- `source-data.js?v=20260811-2`

so the corrected data are not hidden by the earlier browser cache.

## Files changed

- `map/rudolf-1892/route-data.js`
- `map/rudolf-1892/knowledge-data.js`
- `map/rudolf-1892/source-data.js`
- `map/rudolf-1892/index.html`

## Deliberately still outside this sync

The more granular Hesperia viewpoint model and Port Antonio/Folly Point view-sector hypothesis remain backend research layers for a later spatial-publication pass. No sketchbook images, derived polygons or exact-viewpoint claims were published here.

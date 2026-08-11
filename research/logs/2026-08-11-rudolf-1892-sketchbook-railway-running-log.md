# 2026-08-11 — Rudolf 1892 sketchbook + railway-clock running log

Status: ACTIVE RUNNING LOG. Append or revise during research rather than waiting for an end-of-pass summary.

## Publication boundary

- Sketchbook images, thumbnails, inferred view sectors, DEM/horizon results and image-derived spatial layers remain backend-only unless explicitly approved later.
- Public map changes are separate, bounded sync passes. This running log records research state, including corrections that may still be pending public synchronization.

## Current evidence stack

### Rakow sketchbook

Rakow BIB 87384 / Alma MMS 99873843504126. Supplied digital surrogate: `Rakow_1000043361_BlaschkaSketchbook.pdf`, 30 filmed pages. Most physical pages were blank and not filmed.

Current strong page-level matches:

- pp. 4–5: `Wüste bei Maricopa (Arizona) / 24. April 1892` — secure visual reading.
- pp. 8–9: high-probability `Cactus-Wüste bei Maricopa (Arizona) / 24. April 1892`; botanical note probably `Opuntia bigelovii`.
- pp. 12–13: uncaptioned rocky/desert massif; now tightly assigned to the 24 April Maricopa→Yuma→California desert→Salton→San Jacinto rail-observation corridor, but mountain and milepoint unresolved.
- p. 17: distinctive Yucca/Joshua-tree desert and high mountain backdrop; strong Hesperia 5 May match from correspondence/ecology, not from a secure place/date inscription.
- p. 23: probable Port Antonio harbour view; Folly Point lighthouse is now the strongest landmark candidate, Navy Island plausible but weaker.
- pp. 21/25: probable same laid-in Jamaica/Port Antonio visual group, still undiagnostic.
- p. 26: Bremen address/business working notes.
- p. 27: secure `Von New York bis Bremen sind 880 geographische Meilen`.
- p. 28: nonblank but unresolved numerical/geographical working note; do not OCR-force.

Important catalogue/surrogate conflict: Rakow catalogue says the beginning sketch is captioned Tempe, Arizona, 22 April 1892. In the delivered 30-page PDF, no filmed leaf has yet been securely identified as that Tempe page; the earliest clearly legible dated landscape is Maricopa, 24 April. Preserve both statements.

## Spatial refinement

### Maricopa

1892 Maricopa is the final/current railroad-junction site established in 1887, not an older Maricopa Wells/Maricopaville location.

Interpretive correction: the 24 April views are best treated as `transit_observation_area` evidence, not proof of a separate Maricopa collecting excursion. Rudolf's 22 April letter says they would finish Tempe, go to Maricopa to spend the night, then take the Sunday-morning California train. Dated Maricopa cards/sketches confirm 24 April presence.

Same-year timetable control: `Arizona Republican`, 29 May 1892, gives Southern Pacific westbound at Maricopa about 6:35 a.m. Treat as strong contextual control, not issue-specific proof for 24 April.

Sierra Estrella remains the leading mountain-range hypothesis for pp. 5/9; Table Top Mountains retained as alternative. Exact viewpoint remains low confidence pending DEM horizon profiles.

### Hesperia

Strong image-text match for 5 May. Infrastructure anchor localized to the historic depot/hotel cluster around Spruce Street / Hesperia Road using historical-marker and townsite controls. The p.17 viewpoint should remain a broader morning-excursion field area because Rudolf distinguishes the dawn hotel/station view from a later substantial desert excursion.

General mountain view sector from depot proxy: southeast toward San Bernardino high country; specific summit unresolved.

### Port Antonio

p.23: Port Antonio overall high-probability; Folly Point lighthouse very strong candidate because the visible tower is horizontally banded and Folly Point was built in 1888. Navy Island remains plausible but less secure.

Recommended geometry remains a broad offshore northern-to-northeastern harbour approach/departure sector, not a point.

## Railway-clock audit: 22–26 April 1892

Primary correspondence currently gives the strongest chronological skeleton:

- Fri 22 Apr: Tempe wagon excursion; plan to finish next day, overnight Maricopa, Sunday train.
- Sat 23 Apr: Tempe→Maricopa transfer inferred from forward plan and next-day records.
- Sun 24 Apr early morning: Maricopa; two dated sketchbook landscapes. Same-year close timetable control suggests westbound about 6:35 a.m.
- Sun 24 Apr: rail sequence Maricopa→Yuma→California salt desert→Salton depression→San Jacinto approach. Rudolf's 25 Apr letter explicitly describes this as the preceding day's sequence.
- Sun 24 Apr ca. 22:00: Los Angeles arrival is high-confidence inference from Rudolf's `at 10`, overnight wording, 8:45 next-morning departure and 25 Apr 13:00 San Diego arrival.
- Mon 25 Apr 08:45: Los Angeles departure, Rudolf-reported.
- Mon 25 Apr ca. 10:00: Pacific Ocean first seen/reached, exact coastal milepoint unresolved.
- Mon 25 Apr 13:00: San Diego arrival, secure from letter header + explicit arrival statement.
- Tue 26 Apr: hotel-based work already underway in San Diego.
- 30 Apr: later San Diego correspondence; not arrival.

Sketchbook pp. 12–13 can therefore be dated to 24 April with high confidence at corridor level.

### Clock-standard control: Pacific time

A very useful independent primary control has now been recovered in the official itinerary for President Benjamin Harrison's April 1891 Southern Pacific journey. The itinerary explicitly converts El Paso from Central time to Pacific time, then continues to label Tucson, Yuma and Los Angeles on Pacific time. Yuma and Los Angeles station minutes in that itinerary belong to a presidential special and are **not** substituted for Rudolf's ordinary service, but the document is strong evidence for the Southern Pacific clock convention on this western segment.

This materially strengthens the decision to compare Rudolf's Maricopa/Yuma/California clock sequence against a fixed Pacific-time daylight model while still preserving historical-clock uncertainty.

### New clock control: Yuma

A near-contemporary primary timetable printed in the `Arizona Sentinel`, 6 June 1891, reproduces Southern Pacific Pacific System times (table stated in effect from June 15, 1890). Despite noisy OCR, the westbound row can be read as a **12:40 p.m. departure from Yuma** toward Banning, Colton, Los Angeles, Santa Barbara, Sacramento, San Francisco, Portland, Ogden and the East/West coast network.

This is not an exact 24 April 1892 timetable and is therefore retained one evidential grade below the May 1892 Maricopa control. But the combined pattern is striking:

`Maricopa ~06:35 → Yuma ~12:40 → Los Angeles ~22:00`

That sequence independently fits Rudolf's own Sunday-morning departure, same-day desert narrative and overnight Los Angeles arrival. Treat it as a provisional railway-clock skeleton pending issue-level 1892 confirmation.

A complementary archive target has now been identified: Yuma County Library District's Arizona Historical Digital/ephemera holdings list **Southern Pacific – Timetables, 1887–1976** together with additional Southern Pacific material from 1877–1899. If online extraction fails, this is a focused institutional target for the exact April 1892 schedule.

## Daylight-window audit — 24 April 1892

A structured backend calculation is now stored at `research/data/rudolf-1892-daylight-window-audit_2026-08-11.json`. It uses NOAA-style solar equations and converts the astronomical events to a fixed UTC-8/Pacific comparison clock. This is an exclusion model, not a claim about every local clock.

Rounded working values:

| Place | Sunrise | Sunset | Civil dusk |
|---|---:|---:|---:|
| Maricopa | 04:47 | 18:06 | 18:32 |
| Yuma | 04:58 | 18:16 | 18:42 |
| Salton area | 05:02 | 18:22 | 18:48 |
| Indio | 05:03 | 18:23 | 18:50 |
| Banning | 05:05 | 18:26 | 18:53 |
| Colton | 05:07 | 18:28 | 18:55 |
| Los Angeles | 05:10 | 18:32 | 18:58 |

Consequences:

- Maricopa ~06:35 is unambiguously daylight, roughly 1h48 after modeled sunrise; modeled solar altitude is about 21°.
- Yuma ~12:40 is strong midday daylight; modeled solar altitude is about 65°.
- The critical illumination transition is the Salton/Indio→Banning/San Jacinto approach, where sunset falls around 18:22–18:26 and civil dusk around 18:48–18:53.
- Los Angeles ~22:00 is far after twilight. Therefore p.12/13, if it represents a directly observed landscape rather than a later memory sketch, should not be assigned to the final Colton→Los Angeles night approach.
- Viable direct-observation windows remain morning Arizona/Yuma, lower Colorado/California desert, Salton/Coachella afternoon, and late-afternoon/twilight San Jacinto/Banning approach.

A deliberately crude elapsed-time plausibility check uses Yuma→Los Angeles = 249 miles in the 1891 Harrison itinerary and Banning = 88 miles from Los Angeles in a near-contemporary regional description. If one falsely assumed uniform running speed between the provisional Yuma 12:40 and Rudolf-derived Los Angeles ~22:00, the Banning mileage would fall around 18:40–18:45: almost exactly sunset/civil twilight. This is **not** being used as a timetable. Its only value is to show why real station rows are likely to be decisive and why Rudolf's visual observation of snow-covered San Jacinto is temporally plausible as a late-day event.

## External timetable recovery — live status

### 1. Official Railway Guide, 1892

NAOTC identifies a March–April 1892 `Official Railway Guide`, Google Books volume ID `qrwsAQAAMAAJ`. Google Books/Google Play also exposes a January 1892 guide as a free full volume. NAOTC cautions that Google's old-guide metadata often labels these scans generically as a `Freight Service Edition`, so the volume contents rather than the edition label must control use.

Station-by-station Southern Pacific pages have not yet been extracted.

### 2. Southern Pacific `Sunset Route`, January 1892 — David Rumsey

The exact LUNA record for the timetable/text volume has been recovered:

- list number: `3139B`
- LUNA media ID: `RUMSEY~8~1~22065~760032`
- title: Southern Pacific Company, `California, Texas, Mexico And Arizona ... Sunset route`, January 1892
- object description: 20 pages of timetables and travel information
- related map: list no. `3139.001`, LUNA media ID `RUMSEY~8~1~22066~760030`, image no. `3139001`; metadata explicitly notes timetables on the verso.

Rumsey's official LUNA API documentation confirms that media records can expose downloadable image URLs and IIIF manifests. Direct retrieval of this specific timetable remains obstructed by verification/tool-safe URL restrictions; source identification is secure, binary extraction pending.

### 3. Streamliner Memories copy of the 1892 SP timetable

A Streamliner Memories post confirms an 18.3 MB Southern Pacific 1892 timetable derived from the Rumsey material. Its description says the table contains roughly 300 intermediate stops between New Orleans and San Francisco and identifies the train as the `Sunset` Pacific Express. Preview image filename resolves to `SP92TT.jpg`; a stable downloadable PDF endpoint has not yet been verified.

### 4. Wx4 1892 Los Angeles timetable

Wx4's timetable index explicitly lists:

- `1892-01-00 SP Sunset Route - David Rumsey`
- `1892-05-01 SP Los Angeles`

The 1 May Los Angeles public timetable is only six days after Rudolf's 24–25 April passage and is potentially an unusually strong local control. Direct PDF remains behind browser verification.

### 5. Southern California Railway / Santa Fe, Los Angeles–San Diego

A same-year reproduction has been located: Historic Broadway San Diego reproduces a **Southern California Railway / Santa Fe Route schedule from the National City Record, 29 September 1892**. Five months later than Rudolf's passage, so it cannot control April times by itself, but it is a useful same-year corporate/local schedule and may expose station order and service pattern.

The 1892 Southern California Railway promotional map confirms the Los Angeles–Orange County–Oceanside–San Diego network. Exact April/May station times remain the target.

### 6. Southern Pacific archival control at Yuma

Yuma County Library District holdings list Southern Pacific timetable material covering 1887–1976 and related 1877–1899 ephemera. This is the best identified institutional fallback for exact-date timetable acquisition.

## Structured data created in this pass

- `research/data/rudolf-1892-provisional-railway-clock-table_2026-08-11.json` — separates A/A-/B/C evidence grades and keeps exact reported times distinct from proxies/inference.
- `research/data/rudolf-1892-daylight-window-audit_2026-08-11.json` — solar windows and p.12/13 daylight exclusions.

## Next research action

1. Recover actual schedule panels from Rumsey 3139B or an 1892 `Official Railway Guide`.
2. Recover an issue-level April/May 1892 Yuma/Maricopa Southern Pacific table; if unavailable online, prepare a narrow Yuma Library request.
3. Recover the Wx4 1 May 1892 Los Angeles public timetable or an equivalent newspaper reproduction.
4. Recover an April/May 1892 Southern California Railway / Santa Fe Los Angeles–San Diego table.
5. Replace the crude elapsed-time check with actual Salton/Indio/Banning/Colton rows, then calculate sun altitude/azimuth at those exact passage times before attempting DEM skyline elimination.

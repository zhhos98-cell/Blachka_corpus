# 2026-08-11 — Rudolf 1892 trip pass 06: Shasta cancelled, telegraph latency, Colorado route

Status: ROUTE CORRECTION / KNOWLEDGE-PRODUCTION LINK. This note supplements `2026-08-11-rudolf-1892-sketchbook-railway-running-log.md` and `2026-08-11-rudolf-1892-darlingtonia-chain-pass05.md`. It resolves a previously open itinerary question without changing the public map yet.

## Route result

Shasta should be treated as a **proposed but cancelled leg**, not as a secure visited stop.

The sequence is unusually clear once the contemporary letters are read together:

1. **18 May, San Francisco/Oakland — proposal.** In `BLA-D00856`, `017:210` (German original `BLA-D00853`, `017:207`), Rudolf describes `Darlingtonia californica` as a Goodale priority. The plant's locality near Shasta would require roughly four days and cost $70. Ganong proposes a telegram to Goodale. Rudolf says they will decide that day and leave for either Shasta or Colorado Springs.
2. **Oakland — communication lag.** In the postscript preserved in German at `BLA-D00870`, `017:224`, and translated in `BLA-D00874`, `017:228`, Rudolf says they waited **36 hours** in Oakland without receiving Goodale's reply. They therefore continued toward Colorado.
3. **22 May, Colorado Springs — physical route closed.** A postcard at `BLA-D00865`, `017:219`, is explicitly dated `Colorado Springs 22. Mai 1892` and says Rudolf arrived at about **4 a.m.** The longer English translation `BLA-D00873`, `017:227`, gives **4:10 a.m.** after an uninterrupted journey of **three days and three nights**.
4. **22 May follow-up — remote decision arrives after movement.** `BLA-D00874`, `017:228`, says the telegraphic answer finally arrived: they **should not go to Shasta**.
5. **31 May, St Louis — target recovered elsewhere.** `BLA-D00896`, `017:251`, records Darlingtonia in bloom in the botanical garden; Rudolf makes a colour sketch and preserves a good specimen in alcohol.

The secure itinerary is therefore:

`San Francisco / Oakland → [Shasta proposed; telegram sent; 36 h wait; no reply] → eastward rail route → Colorado Springs, 22 May → St Louis, 31 May`

and **not**:

`San Francisco / Oakland → Shasta → Colorado Springs`.

## The transcontinental segment from Rudolf's own route description

`BLA-D00873`, `017:227`, gives a continuous travel narrative after leaving the Bay Area. The train crosses the Sacramento River on a large steam ferry; passes Sacramento; receives a second locomotive for the Sierra Nevada; runs through snow forest and long snow sheds/barriers; reaches Nevada the next morning; crosses Utah and the salt-desert / Great Salt Lake region; then climbs the Rockies, with Rudolf explicitly mentioning Leadville at about 10,200 feet before arrival in Colorado Springs. He had also sent a postcard from Ogden on the Great Salt Lake.

This is enough to treat the broad corridor as primary-source secure even before exact 1892 timetable rows are recovered:

`Bay Area → Sacramento → Sierra Nevada → Nevada → Utah / Ogden / Great Salt Lake → Rockies / Leadville corridor → Colorado Springs`

Exact train numbers, station times and railroad-company handoffs remain tasks for the railway running log. The current source supports route geography and elapsed travel time, not an exact timetable reconstruction.

## Why the telegram matters analytically

This episode gives a better model of knowledge production than a simple statement that patrons financed travel. Goodale had remote authority over whether a costly detour was worthwhile; Ganong introduced telegraphy as the mechanism for consulting him; the message still failed to arrive within the party's 36-hour waiting window; Rudolf and Ganong moved before the answer caught up with them; only in Colorado did the negative decision become known. The telegraph reduced communication time but did not collapse it. Travel, hotel time, message routing and institutional schedules remained misaligned.

The resulting chain is:

`uncertain target value → cost/time calculation → delegated remote decision → telegraphic latency → traveller acts under incomplete information → later reply ratifies/corrects route → desired plant obtained through another institution`

For the paper this is useful because the knowledge system contains **decision latency** as well as transport latency. The itinerary is made by partially synchronized actors. Cambridge can govern the trip at a distance, but its instructions reach a moving field party through a communications infrastructure with its own temporal grain.

## Darlingtonia as substitution rather than failed collection

Once Shasta is removed as a visited node, the St Louis encounter becomes sharper. The expensive habitat trip was cancelled. Nine days after the Colorado Springs arrival, Rudolf encountered the desired plant flowering in an institutional collection and immediately converted it into two reference media: a colour sketch and an alcohol specimen. The later archive contains a `Darlingtonia californica` preparatory drawing, identifier `133264`, while Rudolf's 7 Aug 1900 model-attribution letter identifies `444. Darlingtonia` among the Harvard models (`BLA-D01748`, `020:277`).

The historical sequence therefore demonstrates **functional substitution**:

`habitat access planned → habitat access cancelled → cultivated institutional access → visual + preserved reference → workshop object`

This is stronger than saying that botanical gardens saved time. Here the garden replaces a route that had been explicitly costed, debated and cancelled.

## Translation audit generated by the route closure

`BLA-D00896`, `017:251`, contains an English clause saying Darlingtonia was the plant “because of which we travelled to the Shasta Mountains.” That statement conflicts with the explicit 22 May telegram account and the continuous Bay Area → Colorado route narrative. Until the German original of the 31 May letter is checked, the clause should be tagged as a **translation/OCR anomaly**, not used to reopen Shasta as an itinerary node.

This is worth preserving as a methodological example: route reconstruction requires cross-document consistency checks. A fluent translation can be less reliable than a sequence of postcards, dated letters and transport descriptions.

## Map/data consequences, held for later implementation

When the public dataset is next revised:

- Shasta should appear, if at all, as a `planned_target` / `cancelled_route` node or decision edge rather than a journey stop.
- Oakland should carry a `coordination` operation: telegram to Goodale + 36-hour waiting period.
- Colorado Springs should carry a `communication_received` event: negative Shasta decision arrives after the route has already changed.
- St Louis should link back to the cancelled Shasta target through a `substitution` or `reference_recovery` edge for Darlingtonia.
- The travel layer should keep the broad Bay Area → Sacramento → Sierra → Nevada → Utah → Rockies → Colorado corridor distinct from exact timetable claims.

## Next trip checks

1. Recover the exact rail timetable for the Bay Area → Colorado Springs segment and test Rudolf's “three days and three nights” against scheduled elapsed time.
2. Identify the probable Oakland/San Francisco departure date and service from the 18 May letter, the 36-hour waiting statement and the 22 May 04:10 arrival.
3. Match the Ogden postcard to its postmark and place it against the timetable.
4. Check the German original of the 31 May St Louis letter to explain the false/ambiguous Shasta clause.
5. Keep this route correction synchronized with the Darlingtonia object-chain log; the two are now one analytical case rather than separate itinerary and object notes.

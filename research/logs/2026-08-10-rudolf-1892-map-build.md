# 2026-08-10 — Rudolf Blaschka 1892 journey: research sync and map-page build brief

## Purpose of this sync

This log consolidates the present research state on Rudolf Blaschka's 1892 American and Jamaican journey and translates it into a website-ready map page. The page is intended for the Blaschka site as a dedicated subpage rather than as a note inside the research backend alone.

The central interpretive result remains stable:

**The 1892 journey is best understood as a mobile extension of the Blaschka workshop.**

Rudolf did not simply travel in order to "collect plants." The correspondence shows a distributed chain of observation, drawing, microscopy, specimen preservation, seed and bulb circulation, local mediation, botanical-garden work space, postal forwarding, telegraphic decision-making, and later reassembly in Hosterwitz.

## Core source base used in this sync

- `04_Blaschka_Archive_015-040_MASTER.json`
- `05B_Blaschka_Digital_Archive_Literature_Technical_MASTER(1).json`
- `Rudolf_Blaschka_America_1892_MASTER.csv`
- `Rudolf_Blaschka_America_1892_sources.csv`
- `06_Blaschka_Global_Object_Archive_Provenance_BACKEND_MASTER_2026-08-10_v4_through_49(2).json`

The website page should cite the correspondence backbone in 04, but it should also make clear that the visual route can be expanded by the ephemera in 05B: passenger list, railway timetable, maps, travel insurance, and photographs.

## Editorial rules carried into the map

1. **Separate planned/public route from documented movement.**
   Newspaper items continued to circulate projected route statements after Rudolf had already moved on.

2. **Separate movement from evidence form.**
   Each route stop may include different evidence types: field observation, colour drawing, microscope work, alcohol preservation, dried specimens, seeds, bulbs, cacti, or institutional work rooms.

3. **Keep unresolved points unresolved.**
   Shasta / Darlingtonia remains flagged as unresolved and is therefore shown only in the notes, not as a secure visited node.

4. **Do not collapse knowledge production into drawing alone.**
   The route page must foreground the multiple reference media through which living plants became future glass models.

## Present argument in compact form

A workable chain for the page:

**living plant / locality → field encounter → drawing / microscope study / alcohol specimen / dried specimen / seed / bulb → circulation by hand, post, or later supply → Hosterwitz reassembly → glass model**

The page should therefore read less like a tourist itinerary and more like a workflow map.

## Route logic for the page

### Documented route nodes

- Bremen, 1 Feb 1892
- S.S. *Saale*, 2 Feb 1892
- Cambridge, Massachusetts, 15 Feb 1892
- Annotto Bay / north-coast Jamaica phase, 1 Mar 1892 (retrospectively described)
- Hope Garden, Kingston, 6 Mar 1892
- Cambridge return, c. 5 Apr 1892
- Chicago, 14 Apr 1892
- Tempe, 20 Apr 1892
- Maricopa, 24 Apr 1892
- San Diego, 30 Apr 1892
- San Diego to San Bernardino, 4 May 1892
- Banning, 6 May 1892
- Agua Caliente, 9 May 1892
- Oakland, 15 May 1892
- Elko, 20 May 1892
- Colorado Springs, 22–29 May 1892
- St. Louis, 31 May 1892
- Chicago, 5 Jun 1892
- Niagara / Buffalo / Clifton corridor, 6 Jun 1892
- Cambridge, 10 Jun 1892
- New York, 17 Jun 1892
- S.S. *Aller*, 18 Jun 1892
- Hosterwitz, 30 Jun 1892

### Planned/public route line

The page should also show, as a separate dashed line or secondary layer, the projected route publicly described in letters and newspapers:

Cambridge → Chicago → Missouri → Kansas → Colorado → New Mexico → Arizona → San Diego / Los Angeles → San Francisco → Colorado return.

This second line is important because it visualizes information lag and public itinerary circulation.

## Strong knowledge-production examples to surface in marker details

### Jamaica

- Cameron procured plants and prepared preserved material.
- Rudolf worked with microscope and drawing materials.
- Hope / Castleton provided work rooms.
- Knowledge forms: field observation, coloured drawing, dried herbarium specimens, preserved material in white rum and water.
- Count conflict to preserve: 106 studied species in a letter versus 116 coloured drawings in the Jamaican botanical report.

### San Diego

- Orcutt expanded access to plant material.
- Rudolf reported around 36 species completed.
- Small box of cacti and flowering bulbs sent onward.
- Later supply of seeds and bulbs continued after Rudolf had already left California.

### St. Louis

- Local botanical-garden work room became a temporary workshop station.
- Rudolf made a colour sketch and preserved a specimen in alcohol.

### Cambridge return

- The journey does not end cleanly when travel stops.
- Rudolf repaired Harvard models, received further Californian material, and prepared departure.
- By 5 July in Hosterwitz he reports that he has already resumed model production on plants then flowering in the garden, while preserved material from the journey will guide later selection.

## Website build decision

A dedicated page is created under the existing public map route:

- `map/rudolf-1892/`

This follows the repository architecture: the root-level `/map/` remains the collection/custody map, while the 1892 page is a focused spatial research dossier beneath it.

## GitHub integration decision

The public page reuses the site-wide subpage header/footer and shared CSS shell, with page-specific map styles kept locally under `map/rudolf-1892/`. The global navigation remains unchanged; the new dossier is reached contextually from the map system rather than becoming another global-navigation destination.

## Files prepared in this package

- `index.html` — standalone page layout with hero, interpretive summary, map canvas, details drawer, legend, and method notes.
- `styles.css` — page-specific styling.
- `route-data.js` — documented nodes, public/planned nodes, and route polylines.

## UI logic

- Main screen is a large map.
- Markers are clickable.
- Clicking a marker opens or updates a details panel.
- A “next / previous stop” control is included.
- Two route layers are visible: documented route and planned/public route.
- Marker popups remain short; the full detail panel carries the denser note.
- The detail panel is built to support later addition of thumbnails or archival images.

## Immediate follow-up suggestions

1. Add a sidebar filter by knowledge-production type.
2. Add archival image thumbnails once the relevant URLs are normalized.
3. Add a miniature timeline beneath the map.
4. Add a toggle that switches between “travel route” and “knowledge chain” emphasis.
5. Add Robert Cameron as a person record in the site’s people layer if he is still absent.

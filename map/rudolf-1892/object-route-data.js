window.RUDOLF_1892_OBJECT_ROUTE_DATA = {
  analyticalNote: 'Packet, handoff and controlled decomposition are analytical terms used by the project. They are not actor categories unless a primary source independently uses corresponding language.',
  packets: [
    {
      id: 'ub-346-350',
      code: 'G',
      legend: 'glass cases',
      color: '#88936b',
      direction: 'westbound freight',
      title: 'U.B. 346–350',
      subtitle: 'Five cases · 60 plant models · 329 analytical details',
      dateRange: '20 January–February 1892',
      status: 'direct primary chain; vessel match externally corroborated, cargo manifest still open',
      summary: 'The largest Blaschka consignment yet was dispatched separately from Rudolf. It became railway freight, an ocean shipment, bonded merchandise, a broker/customs problem and finally unpacked museum objects.',
      nodes: [
        {
          id: 'ub-host', title: 'Hosterwitz', date: '20–21 Jan 1892', lat: 51.02, lng: 13.84,
          type: 'dispatch', action: 'Packed / dispatched', handler: 'Leopold and Rudolf Blaschka',
          state: 'Finished models become five numbered freight cases.',
          detail: 'The 20 January letter announces railway dispatch the following day of U.B. 346–350, containing 60 models and 329 analytical details. Finishing this largest consignment so far also delayed Rudolf’s own departure.',
          evidence: 'BLA-D00016 / 015:16', confidence: 'high'
        },
        {
          id: 'ub-bremen', title: 'Bremen forwarding', date: 'late Jan 1892', lat: 53.08, lng: 8.80,
          type: 'forwarder', action: 'Forwarding handoff', handler: 'Ehrhorn, Emden & Mayer',
          state: 'Rail freight enters the Bremen forwarding and ocean-carrier chain.',
          detail: 'The dispatch letter names the Bremen agents and gives New York, in bond to Boston, as the route. Exact rail arrival and loading time remain open.',
          evidence: 'BLA-D00016; forwarder-longitudinal-register.json', confidence: 'medium-high', lineKind: 'guarded',
          routeGuard: 'Bremen is directly named as the forwarding node; the exact station-to-quay sequence is not reconstructed.'
        },
        {
          id: 'ub-elbe', title: 'Elbe / Atlantic crossing', date: 'matching sailing: 30 Jan 1892', lat: 48.5, lng: -32,
          type: 'ocean', action: 'Ocean freight', handler: 'Norddeutscher Lloyd / ocean-carrier chain',
          state: 'The five cases cross independently of Rudolf’s later passenger voyage.',
          detail: 'Goodale’s receiving correspondence identifies the five cases as arriving by Elbe. The Bremen departure database lists an Elbe sailing for the United States on 30 January 1892, fitting the chronology.',
          evidence: 'BLA-D00024 / 015:24; Bremen emigration-ship departure database; pass 11', confidence: 'medium-high',
          routeGuard: 'The 30 January sailing is a strong vessel/date match, not yet a bill of lading or cargo-manifest identification.'
        },
        {
          id: 'ub-newyork', title: 'New York', date: 'Feb 1892', lat: 40.71, lng: -74.01,
          type: 'bond', action: 'Bonded transit', handler: 'U.S. customs / designated bonded-carrier chain',
          state: 'Imported freight remains in a customs-controlled relation while moving onward to Boston.',
          detail: 'The workshop instruction explicitly states New York “in Bond to Boston.” This administrative state is distinct from Rudolf’s passenger-customs processing.',
          evidence: 'BLA-D00016 / 015:16; U.S. immediate-transportation regime contextualized in pass 11', confidence: 'high'
        },
        {
          id: 'ub-boston', title: 'Boston receiving chain', date: 'Feb 1892', lat: 42.36, lng: -71.06,
          type: 'broker', action: 'Papers / customs handoff', handler: 'E. A. Snow and customs-side intermediaries',
          state: 'Shipping papers and cases enter the Boston clearance and museum-delivery sequence.',
          detail: 'Goodale transferred the incoming papers to E. A. Snow. Later correspondence places Capt. Wales of the Custom House inside the opening/inspection chain.',
          evidence: 'BLA-D00024, BLA-D00028; Harvard receiving correspondence', confidence: 'high'
        },
        {
          id: 'ub-harvard', title: 'Harvard Botanical Museum', date: '19–late Feb 1892', lat: 42.378, lng: -71.116,
          type: 'unpack', action: 'Museum unpacking / customs inspection', handler: 'Museum porter, George L. Goodale, customs inspector; later Capt. Wales / Ganong',
          state: 'Freight cases become inspectable and unpacked museum objects.',
          detail: 'On 19 February five boxes reached the museum and looked well preserved. The porter removed outer packing; Goodale opened a case and examined Datura arborea, which was well preserved; further opening awaited customs. A later sample of about eight specimens was reported in excellent condition.',
          evidence: 'BLA-D00695 / 017:49; BLA-D00028 / 015:28', confidence: 'high',
          routeGuard: 'The sampled good condition is not generalized to unopened contents.'
        }
      ]
    },
    {
      id: 'repair-materials',
      code: 'R',
      legend: 'repair materials',
      color: '#a56f5d',
      direction: 'westbound post',
      title: 'Repair-material packet',
      subtitle: 'Dry pigments · isinglass · prepared lime · possible glass-rubbing tool',
      dateRange: 'requested 2 February 1892',
      status: 'direct request and packaging instructions; dispatch/receipt not yet isolated',
      summary: 'Rudolf’s body could not carry the whole repair workshop. He asked Hosterwitz to detach selected pigments and materials, repackage them as small postal samples and send them to Cambridge in care of Goodale.',
      nodes: [
        {
          id: 'repair-hosterwitz', title: 'Hosterwitz workshop', date: 'after request of 2 Feb 1892', lat: 51.02, lng: 13.84,
          type: 'postal', action: 'Postal packet requested from workshop', handler: 'Leopold Blaschka / Hosterwitz workshop',
          state: 'Workshop chemistry and tools are reduced to small, separately wrapped mailable quantities.',
          detail: 'Rudolf asked for regular dry paints from Weingärtner and others, each in a small envelope inside heavier covers, plus Hausenblase, prepared lime and, if possible, a Glasreiber. He described the paint quantities as examples without value.',
          evidence: 'BLA-D00654 / 017:7', confidence: 'high for request; receipt unresolved'
        },
        {
          id: 'repair-cambridge', title: 'Cambridge / care of Goodale', date: 'intended after Rudolf’s return from Jamaica', lat: 42.378, lng: -71.116,
          type: 'receipt', action: 'Repair capacity intended to catch up with maker', handler: 'Rudolf Blaschka / George L. Goodale as postal care address',
          state: 'A fragment of the Hosterwitz material workshop is intended to become usable repair stock in Cambridge.',
          detail: 'Rudolf explicitly asked that the materials be sent quickly so he would receive them in time when he returned to Cambridge. The present corpus has not yet isolated the receipt wrapper or receipt letter.',
          evidence: 'BLA-D00654 / 017:7; pass 11 UPU-context calibration', confidence: 'high for intended movement; medium for completed receipt', lineKind: 'requested',
          routeGuard: 'Dashed as a requested postal movement because dispatch and receipt are not yet independently documented.'
        }
      ]
    },
    {
      id: 'cambridge-seeds',
      code: 'S',
      legend: 'Cambridge seeds',
      color: '#6f8f7b',
      direction: 'eastbound post',
      title: 'Cambridge seed packet',
      subtitle: 'About 29 species · cultivation signs / instructions',
      dateRange: '19 February 1892',
      status: 'direct dispatch; workshop receipt not yet isolated',
      summary: 'On the same day the five model boxes reached Harvard, Rudolf sent a reverse-moving packet of about twenty-nine seed species to Hosterwitz with encoded sowing instructions.',
      nodes: [
        {
          id: 'seed-cambridge', title: 'Cambridge Botanic Garden', date: '19 Feb 1892', lat: 42.378, lng: -71.116,
          type: 'postal', action: 'Seeds dispatched as sample without value', handler: 'Rudolf Blaschka',
          state: 'Cultivable botanical potential becomes a portable seed packet plus written treatment signs.',
          detail: 'Rudolf says he sent about 29 species that day and explains signs for sowing in pots, transplanting or direct outdoor sowing.',
          evidence: 'BLA-D00695 / 017:49', confidence: 'high'
        },
        {
          id: 'seed-hosterwitz', title: 'Hosterwitz workshop garden', date: 'arrival date unresolved', lat: 51.02, lng: 13.84,
          type: 'receipt', action: 'Seed packet enters workshop cultivation horizon', handler: 'Leopold Blaschka / workshop household',
          state: 'American botanical material is positioned for cultivation rather than represented only as drawing or preserved specimen.',
          detail: 'The destination is explicit in Rudolf’s letter to his father; an exact receipt date for this packet has not yet been isolated.',
          evidence: 'BLA-D00695 / 017:49', confidence: 'high for dispatch and destination; receipt date open', lineKind: 'postal',
          routeGuard: 'The postal corridor is schematic; no intermediate post-office itinerary is asserted.'
        }
      ]
    },
    {
      id: 'reference-books',
      code: 'B',
      legend: 'reference books',
      color: '#7d819d',
      direction: 'eastbound reference supply',
      title: 'Cryptogamic reference books',
      subtitle: 'Fresh copies bought because Harvard Library copies could not practically travel',
      dateRange: '27 July–mid September 1892',
      status: 'direct procurement decision and expected delivery; exact dispatch/receipt open',
      summary: 'Post-return workshop work still depended on material that remained in Cambridge. Goodale converted immobile library access into transportable duplicate books by buying fresh copies from publishers.',
      nodes: [
        {
          id: 'books-cambridge', title: 'Cambridge / publishers', date: '27 Jul 1892', lat: 42.378, lng: -71.116,
          type: 'procurement', action: 'Fresh copies ordered for transatlantic use', handler: 'George L. Goodale / publishers',
          state: 'Institutionally immobile library reference becomes a purchasable duplicate intended for Hosterwitz.',
          detail: 'Goodale wrote that it was not practicable to send the needed books from the Library, so he would obtain fresh copies from the publishers for the cryptogamic work.',
          evidence: 'Goodale letter, 27 Jul 1892; archive OCR; pass 07/pass 11', confidence: 'high'
        },
        {
          id: 'books-hosterwitz', title: 'Hosterwitz workshop', date: 'expected by mid-Sep 1892', lat: 51.02, lng: 13.84,
          type: 'reassembly', action: 'Reference infrastructure catches up after the traveller', handler: 'Blaschka workshop',
          state: 'Textual reference is reassembled with drawings, preserved material and local workshop work.',
          detail: 'By 26 August Goodale expected the works of reference to reach Rudolf by the middle of September. The exact shipment and receipt record remains to be isolated.',
          evidence: 'Goodale letters, 27 Jul and 26 Aug 1892; 015:115 / archive OCR', confidence: 'high for procurement/expected delivery; exact receipt open', lineKind: 'prospective',
          routeGuard: 'The line records an intended/expected transatlantic supply relation, not a reconstructed postal or freight itinerary.'
        }
      ]
    }
  ]
};

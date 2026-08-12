window.RUDOLF_1892_OBJECT_ROUTE_DATA = {
  packets: [
    {
      id: 'ub-346-350',
      title: 'U.B. 346–350',
      subtitle: 'Five cases · 60 plant models · 329 analytical details',
      dateRange: '20 January–February 1892',
      status: 'direct primary sequence with guarded intermediate geography',
      summary: 'The largest Blaschka consignment yet was dispatched separately from Rudolf. It entered a railway-forwarding-ocean-bonded-customs chain before museum unpacking at Harvard.',
      nodes: [
        {
          id: 'ub-host',
          title: 'Hosterwitz',
          date: '20–21 Jan 1892',
          lat: 51.02,
          lng: 13.84,
          type: 'dispatch',
          action: 'Packed / dispatched',
          handler: 'Leopold and Rudolf Blaschka',
          state: 'Finished models become five numbered freight cases.',
          detail: 'Letter of 20 January announces railway dispatch the following day of U.B. 346–350, containing 60 models and 329 analytical details.',
          evidence: 'BLA-D00016 / 015:16',
          confidence: 'high'
        },
        {
          id: 'ub-bremen',
          title: 'Bremen forwarding',
          date: 'late Jan 1892',
          lat: 53.08,
          lng: 8.80,
          type: 'forwarder',
          action: 'Forwarding handoff',
          handler: 'Ehrhorn, Emden & Mayer',
          state: 'Rail freight enters the Bremen forwarding and ocean-carrier chain.',
          detail: 'The dispatch letter names the Bremen agents and gives New York, in bond to Boston, as the route. Exact rail arrival and steamer-loading dates remain open.',
          evidence: 'BLA-D00016; longitudinal forwarder register',
          confidence: 'medium-high'
        },
        {
          id: 'ub-atlantic',
          title: 'Atlantic freight',
          date: 'late Jan–Feb 1892',
          lat: 48.5,
          lng: -32,
          type: 'ocean',
          action: 'Ocean freight',
          handler: 'Ocean carrier; arrival advice identifies Elbe',
          state: 'The five cases travel independently of Rudolf’s passenger crossing.',
          detail: 'Goodale later received advice that five cases of glass models had arrived by the Elbe. The exact sailing date is not asserted here.',
          evidence: 'Harvard receiving correspondence; pass 09 calibration',
          confidence: 'medium-high'
        },
        {
          id: 'ub-newyork',
          title: 'New York',
          date: 'Feb 1892',
          lat: 40.71,
          lng: -74.01,
          type: 'bond',
          action: 'Bonded transit',
          handler: 'Customs / forwarding chain',
          state: 'Imported freight is routed onward under bond rather than treated as final New York delivery.',
          detail: 'The workshop instruction explicitly states New York “in Bond to Boston.” This is distinct from Rudolf’s passenger-customs processing.',
          evidence: 'BLA-D00016 / 015:16',
          confidence: 'high'
        },
        {
          id: 'ub-boston',
          title: 'Boston receiving chain',
          date: 'Feb 1892',
          lat: 42.36,
          lng: -71.06,
          type: 'broker',
          action: 'Papers / customs handoff',
          handler: 'E. A. Snow and customs-side intermediaries',
          state: 'Shipping papers and cases enter the Boston clearance / museum-delivery sequence.',
          detail: 'Goodale transferred the incoming papers to E. A. Snow. Later correspondence places Capt. Wales of the Custom House inside the opening/inspection chain.',
          evidence: 'Harvard receiving correspondence; pass 09 calibration',
          confidence: 'high'
        },
        {
          id: 'ub-harvard',
          title: 'Harvard Botanical Museum',
          date: 'Feb 1892',
          lat: 42.378,
          lng: -71.116,
          type: 'unpack',
          action: 'Museum unpacking / customs inspection',
          handler: 'Goodale, museum porter, customs inspector; later Capt. Wales / Ganong',
          state: 'Freight cases become inspectable and unpacked museum objects.',
          detail: 'The five boxes were brought up to the museum; an outer packing layer was removed, Goodale opened a case and examined Datura arborea, while further opening waited for the customs inspector. A later sample of about eight pieces was reported in excellent condition.',
          evidence: 'BLA-D00695 / 017:49 and Harvard receiving correspondence',
          confidence: 'high'
        }
      ]
    }
  ]
};

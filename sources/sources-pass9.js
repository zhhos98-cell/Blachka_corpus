(() => {
  const intermediaryHeading = document.querySelector('#intermediaries-title');
  const intermediarySection = intermediaryHeading?.closest('.source-section');
  if (!intermediarySection || document.querySelector('#ware-logistics-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'ware-logistics-title');
  section.innerHTML = `
    <p class="source-kicker">Longitudinal logistics</p>
    <h2 id="ware-logistics-title">Ware Collection: transatlantic forwarding, customs and clearance</h2>
    <p class="source-note">The Harvard botanical-model correspondence preserves repeated handoffs that can be followed across decades: workshop packing, Bremen forwarding, ocean carriage, bonded movement, customs brokerage, inspection, museum unpacking and repair. Canonical route register: <a href="ware-transatlantic-logistics-register.json" target="_blank" rel="noopener">ware-transatlantic-logistics-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '1906 · Dresden–Bremen–Boston/Cambridge',
      title: 'Ehrhorn, Emden & Mayer → Norddeutscher Lloyd → E. A. Snow → Boston customs inspector → Harvard.',
      meta: 'Rudolf’s 27 October dispatch letter says the cases left Dresden for Bremen for the next North German Lloyd steamer, via Ehrhorn, Emden & Mayer; the shipment was insured and accompanied by a consular invoice. An adjacent workshop letter names Friedrich der Große as carrying the models. On 14 November Goodale wrote that the incoming boxes had been consigned to E. A. Snow, formerly a State Street custom-house broker, and ordered customs-supervised unpacking at the University Museum. The vessel link remains guarded pending date/image collation.',
      links: '<a href="https://www.arcinsys.niedersachsen.de/arcinsys/detailAction.action?detailid=b17014" target="_blank" rel="noopener">Norddeutscher Lloyd archive, StAB 7.2010 ↗</a> · <a href="https://www.archives.gov/boston/finding-aids/maritime.html" target="_blank" rel="noopener">National Archives Boston maritime/customs records ↗</a>'
    },
    {
      type: '1923 · export control and customs brokerage',
      title: 'Four cases R.B. 1–4: German export/customs control → Ehrhorn, Emden & Mayer → New York → in bond to Boston → E. A. Snow / T. D. Downing Co. → Harvard.',
      meta: 'The 1923 correspondence records four sealed cases, export permission and customs intervention in Germany, forwarding through Bremen, and bonded movement from New York to Boston. A surviving T. D. Downing Co. invoice to Harvard, ref. L 16091, covers the same four RB 1/4 packages and itemises ocean freight and customs-entry charges; it also names Eastern Steamship Lines. This is a rare point where a workshop shipment and an American customs-broker document survive in the same archival chain.',
      links: '<a href="https://www.archives.gov/research/guide-fed-records/groups/036.html/1000" target="_blank" rel="noopener">U.S. Customs Service RG 36 ↗</a> · <a href="https://sova.si.edu/record/nmah.ac.0060.s01.01.steamboats/ref835" target="_blank" rel="noopener">Eastern Steamship Lines archival context, Smithsonian ↗</a>'
    },
    {
      type: '1929 · packing material becomes regulated material',
      title: 'Four outer cases, twenty-seven framed boxes, customs reclassification and local repair.',
      meta: 'The April 1929 workshop specification separates model value from four cases, twenty-seven framed boxes, packing material, packing wages, transport to the Dresden railway and a consular certificate. Receiving-side records show the shipment reaching Harvard with only slight breakage, while straw/hay used to protect the glass became a customs and plant-quarantine problem. The same packing material therefore functioned both as physical protection and as a border-regulated commodity.',
      links: '<a href="https://www.archives.gov/boston/finding-aids/maritime.html" target="_blank" rel="noopener">National Archives Boston customs research guide ↗</a> · <a href="https://www.historicnewengland.org/explore/collections-access/gusn/289065" target="_blank" rel="noopener">1929 Eastern Steamship Lines route ephemera ↗</a>'
    },
    {
      type: 'Carrier archive · Bremen / Hamburg',
      title: 'Staatsarchiv Bremen, StAB 7.2010 — Norddeutscher Lloyd, 1858–1985.',
      meta: 'The official finding aid is unusually useful about archival loss. Bremen holds only a fragment of the former corporate archive; approximately one thousand “ship files” containing photographs, voyage reports, passenger lists and cargo papers were transferred to the Hapag-Lloyd archive in Hamburg. This means the carrier archive is real but split, and early Blaschka cargo survival cannot be assumed from the corporate fonds alone.',
      links: '<a href="https://www.arcinsys.niedersachsen.de/arcinsys/detailAction.action?detailid=b17014" target="_blank" rel="noopener">StAB 7.2010 full finding aid ↗</a>'
    },
    {
      type: 'Customs archive · Boston',
      title: 'National Archives at Boston — Record Group 36, Records of the U.S. Customs Service.',
      meta: 'NARA’s Boston holdings document imports and exports, vessel entrance and clearance, cargo and maritime administration across the period of the Harvard shipments. These records are now a specific retrieval target for the 1906, 1923 and 1929 Blaschka consignments, especially customs entry, bonded movement, inspection, warehouse or manifest evidence.',
      links: '<a href="https://www.archives.gov/boston/holdings/rg-001-049.html" target="_blank" rel="noopener">NARA Boston RG 36 holdings ↗</a> · <a href="https://www.archives.gov/boston/finding-aids/maritime.html" target="_blank" rel="noopener">Customs and maritime finding guide ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '9';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  intermediarySection.insertAdjacentElement('afterend', section);
})();

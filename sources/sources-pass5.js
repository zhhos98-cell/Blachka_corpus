(() => {
  const archivesSection = document.querySelector('#archives-title')?.closest('.source-section');
  if (!archivesSection || document.querySelector('#dealer-archives-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-archives-title');
  section.innerHTML = `
    <p class="source-kicker">Dealers and distribution</p>
    <h2 id="dealer-archives-title">Dealer archives and dispersed business correspondence</h2>
    <p class="source-note">The dealer-source sweep is now closed at broad discovery level. Ward survives as a concentrated personal and corporate archive in Rochester; Damon and Frič must be reconstructed across workshop and customer-side records. Further additions are evidence-led rather than general searches. Canonical machine-readable register: <a href="dealer-archive-register.json" target="_blank" rel="noopener">dealer-archive-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'North America · intact dealer and corporate archive',
      title: 'University of Rochester — Henry Augustus Ward Papers (A.W23) and Ward’s Natural Science Establishment Papers (D.231).',
      meta: 'The strongest surviving dealer archive in the network. Rochester identifies Ward as a collection of record and preserves both his papers and the corporate archive. Direct Blaschka-linked dealer evidence can already be joined to the 1879 Ward advertising pamphlet at ANSP, the Auckland Cheeseman–Ward transaction sequence, the Boston Society invoice layer, and the 1893 Columbian Museum contract. Customer-side Ward files also survive at Smithsonian, Canterbury/Haast, Cornell and the Bayerisches Hauptstaatsarchiv. The next task is item-level retrieval inside A.W23/D.231, not more generic Ward discovery.',
      links: '<a href="https://www.library.rochester.edu/rbscp/special-collections-development-and-management" target="_blank" rel="noopener">Rochester collection of record ↗</a> · <a href="https://archivalcollections.drexel.edu/agents/corporate_entities/72" target="_blank" rel="noopener">ANSP 1879 Ward pamphlet ↗</a> · <a href="https://siarchives.si.edu/collections/siris_arc_216765" target="_blank" rel="noopener">Smithsonian Ward correspondence ↗</a>'
    },
    {
      type: 'Great Britain and Ireland · distributed dealer archive',
      title: 'Robert Damon / Robert Ferris Damon — reconstructed from Rakow workshop records and customer-side archives.',
      meta: 'No dedicated Damon corporate fonds has been identified in the public-catalogue sweep. Rakow preserves the strongest Blaschka business sequence: agency arrangements, British Museum and school orders, packing, insurance, breakage, and later Jeypore and Liverpool finance/routing. McGill adds a controlled 1877–1881 corpus of ten Robert Damon letters to John William Dawson plus one letter to Damon; NHM preserves a much wider Damon purchasing relationship; BayHStA has a dealer-specific 1873 file; Morgan and Te Papa preserve same-period business correspondence. The McGill letters remain unassigned to Blaschka until their texts are inspected.',
      links: '<a href="https://archivalcollections.library.mcgill.ca/index.php/damon-robert" target="_blank" rel="noopener">McGill Damon 10+1 correspondence ↗</a> · <a href="https://www.nhm.ac.uk/CalmView/Record.aspx?id=PX32&amp;src=CalmView.Persons" target="_blank" rel="noopener">NHM Damon authority and records ↗</a> · <a href="https://www.themorgan.org/literary-historical/191319" target="_blank" rel="noopener">Ruskin–Damon letters ↗</a>'
    },
    {
      type: 'Austria-Hungary and international resale · distributed dealer archive',
      title: 'Václav Frič / V. Frič — workshop correspondence plus institutional dealer files from Prague to Berlin, Munich, Hildesheim, Madrid and Sydney.',
      meta: 'No complete V. Frič company fonds has been identified, but the distributed archive is now substantial. Rakow preserves the 1884 Frič shipment/gift sequence; Australian Museum records directly reconstruct its 1879–1883 Blaschka procurement through Frič; Prague closes the four-model 1884 gift; Museum für Naturkunde Berlin explicitly lists correspondence with Frič’s Prague natural-history trade; Hildesheim has an 1880 dealer-specific acquisition file; BayHStA has a Frič acquisition file for 1864–1869 and 1883; Madrid preserves a digitised 1885 Frič business letter. Berlin’s written records are currently inaccessible and are expected to reopen in Q4 2027.',
      links: '<a href="https://www.museumfuernaturkunde.berlin/en/research/collection/archive/document-collection/" target="_blank" rel="noopener">MfN written records / Frič correspondence ↗</a> · <a href="https://www.arcinsys.niedersachsen.de/arcinsys/list.action?nodeid=g312285&amp;page=1" target="_blank" rel="noopener">Hildesheim Frič acquisition file ↗</a> · <a href="https://simurg.csic.es/view/CSICAR000061499/carta-de-vaclav-fric-a-ignacio-bolivar-sobre-oferta-de-compra-de-insectos" target="_blank" rel="noopener">Madrid 1885 Frič letter ↗</a>'
    },
    {
      type: 'Cross-dealer control · one receiving institution, three dealer files',
      title: 'Bayerisches Hauptstaatsarchiv — Zoologische Staatssammlung 113, 124 and 127: Frič, Damon and Ward.',
      meta: 'The same acquisition series preserves dealer-specific files for V. Frič (1864–1869, 1883), Robert Damon (1873), and Ward’s Museum of Mineralogy, Geology & Zoology (1875). This is the cleanest comparative archive yet found for studying how one nineteenth-century zoological institution documented three different natural-history dealers. The files are not counted as Blaschka evidence until inspected, but they provide an unusually controlled archive for dealer practice.',
      links: '<a href="https://www.gda.bayern.de/service/findmitteldatenbank/Kapitel/a1f20232-b9e9-410d-9ba2-131684437bc8" target="_blank" rel="noopener">BayHStA Zoologische Staatssammlung acquisition files ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '5';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  archivesSection.insertAdjacentElement('beforebegin', section);
})();

(() => {
  const archivesSection = document.querySelector('#archives-title')?.closest('.source-section');
  if (!archivesSection || document.querySelector('#dealer-archives-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-archives-title');
  section.innerHTML = `
    <p class="source-kicker">Dealers and distribution</p>
    <h2 id="dealer-archives-title">Dealer archives and dispersed business correspondence</h2>
    <p class="source-note">Dealer records are indexed separately because archival survival is structurally uneven. Ward has a named personal and corporate archive in Rochester. Damon and Frič currently survive as distributed archives across workshop drafts, customer correspondence and museum acquisition files. Machine-readable register: <a href="dealer-archive-register.json" target="_blank" rel="noopener">dealer-archive-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'North America · intact dealer and corporate archive',
      title: 'University of Rochester — Henry Augustus Ward Papers, 1840–1933 (A.W23), and Ward’s Natural Science Establishment Papers, 1876–1988 (D.231).',
      meta: 'The strongest surviving dealer archive in the network. Rochester explicitly identifies Ward as a collection of record and preserves both his papers and the corporate archive of Ward’s Natural Science Establishment. Ruthanna Dyer’s study of North-American Blaschka teaching collections explicitly used purchase records from the Henry Augustus Ward papers alongside Blaschka workshop notebooks. The receiving-side network can be extended through Auckland’s Cheeseman–Ward files and the Haast family correspondence in New Zealand.',
      links: '<a href="https://www.library.rochester.edu/rbscp/special-collections-development-and-management" target="_blank" rel="noopener">Rochester collection statement ↗</a> · <a href="https://wardproject.org/" target="_blank" rel="noopener">Ward Project ↗</a> · <a href="https://natlib.govt.nz/records/22356344" target="_blank" rel="noopener">Haast–Ward correspondence ↗</a>'
    },
    {
      type: 'Great Britain and Ireland · dispersed dealer correspondence',
      title: 'Robert Damon / Robert Ferris Damon — Weymouth business records reconstructed across the Rakow, McGill, NHM, Bavarian, Morgan and Te Papa archives.',
      meta: 'No dedicated Damon corporate fonds has yet been identified in this project pass. The workshop-side core is unusually precise: Rakow Box 13 preserves the September 1880 sole-agency draft, the 1883 British Museum/Marlborough order sequence, requests for packing money and later damage correspondence; the Lieferungs-Buch preserves model lists and dispatch data. McGill independently catalogues ten letters written by Robert Damon between 1877 and 1881 plus one letter to him. NHM Archives preserves named Damon transaction files, including DF/ZOO/200/19/70, DF/ZOO/200/20/106–108 and Robert F. Damon’s 1884 letter DF/PAL/100/20/11. BayHStA, Zoologische Staatssammlung 124 is a dedicated 1873 acquisition file for Damon. The Morgan Library additionally preserves thirteen Ruskin letters to Damon from 1884–1885, useful for the wider dealer business but separate from Blaschka transactions.',
      links: '<a href="https://archivalcollections.library.mcgill.ca/index.php/damon-robert" target="_blank" rel="noopener">McGill: ten Damon letters + one incoming ↗</a> · <a href="https://www.nhm.ac.uk/CalmView/Record.aspx?id=PX32&amp;src=CalmView.Persons" target="_blank" rel="noopener">NHM Damon authority / records ↗</a> · <a href="https://www.gda.bayern.de/service/findmitteldatenbank/Kapitel/a1f20232-b9e9-410d-9ba2-131684437bc8" target="_blank" rel="noopener">BayHStA dealer files ↗</a> · <a href="https://www.themorgan.org/literary-historical/191319" target="_blank" rel="noopener">Morgan: Ruskin–Damon letters ↗</a> · <a href="https://collections.tepapa.govt.nz/object/293561" target="_blank" rel="noopener">Te Papa Damon letter ↗</a>'
    },
    {
      type: 'Austria-Hungary and international resale · dispersed dealer correspondence',
      title: 'Václav Frič / V. Frič natural-history business, Prague — workshop correspondence plus receiving-side dealer files from Sydney, Prague, Munich and Madrid.',
      meta: 'No dedicated V. Frič corporate archive has yet been identified. The commercial trail is nevertheless increasingly concrete. Rakow preserves the 8 November 1884 workshop draft to Frič; Australian Museum Trustee Minutes, Outward Letter Books and purchase correspondence reconstruct the 1879–1883 Blaschka procurement route and three mixed consignments; Prague’s National Museum accession evidence closes the 1884 Frič-mediated gift. BayHStA, Zoologische Staatssammlung 113 is a dedicated Frič acquisition file covering 1864–1869 and 1883. Madrid adds a fully digitised dealer letter: Archivo del Museo Nacional de Ciencias Naturales ACN0364/007, Václav Frič to Ignacio Bolívar, 18 July 1885, explicitly catalogued under V. Fric. Lehrmittel und Naturalien-Handlung. It concerns insects, not Blaschka models, and is retained as direct evidence of the firm’s international sales correspondence in the same period.',
      links: '<a href="https://australian.museum/about/history/stories/researching-the-blaschka-glass-models/" target="_blank" rel="noopener">Australian Museum Frič correspondence reconstruction ↗</a> · <a href="https://publikace.nm.cz/en/historical-museum/national-museum-archives" target="_blank" rel="noopener">National Museum Archives, Prague ↗</a> · <a href="https://www.gda.bayern.de/service/findmitteldatenbank/Kapitel/a1f20232-b9e9-410d-9ba2-131684437bc8" target="_blank" rel="noopener">BayHStA Frič file 113 ↗</a> · <a href="https://simurg.csic.es/view/CSICAR000061499/carta-de-vaclav-fric-a-ignacio-bolivar-sobre-oferta-de-compra-de-insectos" target="_blank" rel="noopener">Madrid: Frič–Bolívar letter, ACN0364/007 ↗</a> · <a href="https://publikace.nm.cz/en/periodicals/jotnmpnhs/191-1/obchod-s-prirodninami-v-fric-a-jeho-prinos-mineralogicke-sbirce-narodniho-muzea-praha" target="_blank" rel="noopener">V. Frič business history ↗</a>'
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

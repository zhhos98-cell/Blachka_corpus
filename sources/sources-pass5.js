(() => {
  const archivesSection = document.querySelector('#archives-title')?.closest('.source-section');
  if (!archivesSection || document.querySelector('#dealer-archives-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-archives-title');
  section.innerHTML = `
    <p class="source-kicker">Dealers and distribution</p>
    <h2 id="dealer-archives-title">Dealer archives and dispersed business correspondence</h2>
    <p class="source-note">The three documented commercial routes are treated differently according to archival survival. Ward has a named personal and corporate archive in Rochester; Damon and Frič currently have to be reconstructed across workshop-side and customer-side records. Machine-readable register: <a href="dealer-archive-register.json" target="_blank" rel="noopener">dealer-archive-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'North America · intact dealer and corporate archive',
      title: 'University of Rochester — Henry Augustus Ward Papers, 1840–1933 (A.W23), and Ward’s Natural Science Establishment Papers, 1876–1988 (D.231).',
      meta: 'The strongest surviving dealer archive in the network. Rochester explicitly identifies Ward as a collection of record and preserves both his papers and the corporate archive of Ward’s Natural Science Establishment. Corning’s global-census work states that sales to United States customers were reconstructed from the Henry A. Ward papers. For Blaschka research this is the principal dealer-side source for customer correspondence, catalogues, orders, pricing, sales and institutional distribution.',
      links: '<a href="https://www.library.rochester.edu/rbscp/special-collections-development-and-management" target="_blank" rel="noopener">Rochester collection statement ↗</a> · <a href="https://wardproject.org/" target="_blank" rel="noopener">Ward Project ↗</a>'
    },
    {
      type: 'Great Britain and Ireland · dispersed dealer correspondence',
      title: 'Robert Damon / Robert Ferris Damon — Weymouth business records dispersed across the Rakow, McGill, Natural History Museum, Te Papa and other institutional archives.',
      meta: 'No dedicated Damon corporate fonds has yet been identified in this project pass. The Blaschka workshop archive preserves the core agency correspondence, including the 1880 sole-agency arrangement and later disputes over payment, packing and breakage. Customer-side survival is unusually broad: McGill catalogues ten Robert Damon letters from 1877–1881 in the Dawson-Harrington Families Fonds; NHM Archives lists Damon correspondence and purchase records in Zoology and Palaeontology, including Robert F. Damon in 1884; Te Papa has a Damon business letter from 1889; and the Bayerisches Hauptstaatsarchiv has a dealer-specific 1873 acquisition file for Robert Damon. These records require item-level checking before any individual document is assigned to a Blaschka transaction.',
      links: '<a href="https://archivalcollections.library.mcgill.ca/index.php/damon-robert" target="_blank" rel="noopener">McGill Damon correspondence ↗</a> · <a href="https://www.nhm.ac.uk/CalmView/Record.aspx?id=PX32&amp;src=CalmView.Persons" target="_blank" rel="noopener">NHM Damon authority / records ↗</a> · <a href="https://collections.tepapa.govt.nz/object/293561" target="_blank" rel="noopener">Te Papa Damon letter ↗</a> · <a href="https://www.gda.bayern.de/service/findmitteldatenbank/Kapitel/a1f20232-b9e9-410d-9ba2-131684437bc8" target="_blank" rel="noopener">Bavarian acquisition files ↗</a>'
    },
    {
      type: 'Austria-Hungary and international resale · dispersed dealer correspondence',
      title: 'Václav Frič / V. Frič natural-history business, Prague — workshop correspondence plus receiving-side acquisition files.',
      meta: 'No dedicated V. Frič company archive has yet been identified in this project pass. The surviving business trail is nevertheless strong. Rakow workshop notebooks preserve correspondence with Frič, including the 8 November 1884 shipment/gift sequence. Australian Museum Trustee Minutes, Outward Letter Books and purchase correspondence reconstruct the 1879–1883 Frič procurement route and three mixed consignments containing Blaschka models. Prague’s National Museum accession record closes the 1884 Frič-mediated gift, while the Bayerisches Hauptstaatsarchiv separately lists a dealer-specific acquisition file for V. Frič. The National Museum took over remaining company natural-history stock when the firm ended in 1959; this stock transfer is kept distinct from the unresolved question of surviving company papers.',
      links: '<a href="https://australian.museum/about/history/stories/researching-the-blaschka-glass-models/" target="_blank" rel="noopener">Australian Museum Frič correspondence reconstruction ↗</a> · <a href="https://www.nm.cz/en/historical-museum/national-museum-archives" target="_blank" rel="noopener">National Museum Archives, Prague ↗</a> · <a href="https://publikace.nm.cz/en/periodicals/jotnmpnhs/191-1/obchod-s-prirodninami-v-fric-a-jeho-prinos-mineralogicke-sbirce-narodniho-muzea-praha" target="_blank" rel="noopener">V. Frič business history / National Museum holdings ↗</a> · <a href="https://www.gda.bayern.de/service/findmitteldatenbank/Kapitel/a1f20232-b9e9-410d-9ba2-131684437bc8" target="_blank" rel="noopener">Bavarian dealer acquisition files ↗</a>'
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

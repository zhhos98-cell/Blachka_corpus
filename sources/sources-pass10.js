(() => {
  const logisticsHeading = document.querySelector('#ware-logistics-title');
  const logisticsSection = logisticsHeading?.closest('.source-section');
  if (!logisticsSection || document.querySelector('#customs-regulation-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'customs-regulation-title');
  section.innerHTML = `
    <p class="source-kicker">Border regimes</p>
    <h2 id="customs-regulation-title">Customs, export control and plant quarantine</h2>
    <p class="source-note">Border agencies generated their own classifications of the models and their packing. This layer indexes the government archives needed to follow export permission, customs valuation, bonded movement, inspection and plant-quarantine intervention: <a href="customs-regulation-register.json" target="_blank" rel="noopener">customs-regulation-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Germany · 1923 export/customs administration',
      title: 'Sächsisches Staatsarchiv — Oberfinanzpräsident Dresden (11177) and the post-1919 Saxon customs administration.',
      meta: 'Rudolf’s 1923 shipment encountered export permission, export-tax valuation and physical customs revision before the four R.B. cases could leave Dresden. The Landesfinanzamt/Oberfinanzpräsident Dresden supervised customs and excise through Abteilung II and the customs officers in its district. No Blaschka government file has yet been isolated, so these are jurisdiction-level retrieval targets rather than direct transaction records.',
      links: '<a href="https://www.archiv.sachsen.de/archiv/bestand.jsp?bestandid=11177&amp;oid=02.04.01.01&amp;syg_id=139233" target="_blank" rel="noopener">11177 Oberfinanzpräsident Dresden ↗</a> · <a href="https://www.archiv.sachsen.de/archiv/bestand.jsp?oid=02.04.01.03" target="_blank" rel="noopener">Saxon customs-office holdings ↗</a>'
    },
    {
      type: 'United States · customs archive',
      title: 'National Archives at Boston — Record Group 36, Records of the U.S. Customs Service.',
      meta: 'The Harvard correspondence repeatedly places the models inside Boston customs procedure: broker consignment and supervised unpacking in 1906, bonded movement and a customs-entry invoice in 1923, and border intervention again in 1929. RG 36 preserves the port-level administrative environment for imports, exports, vessel entrance and clearance, cargo and customs handling and is now a transaction-specific retrieval target rather than a generic repository lead.',
      links: '<a href="https://www.archives.gov/boston/finding-aids/maritime.html" target="_blank" rel="noopener">NARA Boston maritime/customs guide ↗</a> · <a href="https://www.archives.gov/research/guide-fed-records/groups/036.html" target="_blank" rel="noopener">RG 36 federal records guide ↗</a>'
    },
    {
      type: 'United States · plant quarantine archive',
      title: 'National Archives — Record Group 7, Bureau of Entomology and Plant Quarantine and predecessors.',
      meta: 'The 1929 Blaschka shipment shows that border regulation could attach to packing straw rather than to the glass models. RG 7 includes Bureau of Plant Quarantine records from 1912 onward, foreign-plant-quarantine records, Plant Quarantine Division correspondence and reports from 1927–1951, and violation cases from 1926–1941. These series provide a concrete archival route for testing how the packing material was classified and enforced at the border.',
      links: '<a href="https://www.archives.gov/research/guide-fed-records/groups/007.html" target="_blank" rel="noopener">RG 7 Bureau of Entomology and Plant Quarantine ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '10';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  logisticsSection.insertAdjacentElement('afterend', section);
})();

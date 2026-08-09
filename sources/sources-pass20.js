(() => {
  const docsHeading = document.querySelector('#dealer-documents-title');
  const docsSection = docsHeading?.closest('.source-section');
  if (!docsSection || document.querySelector('#dealer-longtail-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-longtail-title');
  section.innerHTML = `
    <p class="source-kicker">Dealer long tail</p>
    <h2 id="dealer-longtail-title">Specimen lists, catalogues and correspondence beyond the Blaschka files</h2>
    <p class="source-note">These sources do not enlarge the list of Blaschka dealers. They expose the ordinary paperwork of Damon and Frič in other transactions, giving controls for catalogue use, lists, prices, exchanges, dispatch and museum inventory. Canonical guard and locators: <a href="dealer-longtail-document-register.json" target="_blank" rel="noopener">dealer-longtail-document-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Damon · Smithsonian · 1861–1865',
      title: 'SIA RU007095, Box 1 — twenty-six specimen lists with financial information.',
      meta: 'The Joseph Ashmead Clay and John Randolph Clay Papers contain detailed mineral specimen lists and accounts of material bought, sold and exchanged. Robert Damon is named among the dealers together with Richard Talling and William S. Vaux. This predates the documented Blaschka agency and is used strictly as a control for Damon’s list, purchase and exchange paperwork.',
      links: '<a href="https://siarchives.si.edu/collections/siris_arc_217253" target="_blank" rel="noopener">Smithsonian finding aid ↗</a>'
    },
    {
      type: 'Damon · Madrid · 1885–1906',
      title: 'Museo Nacional de Ciencias Naturales: Robert F. Damon catalogues and dispatch note.',
      meta: 'Simurg catalogues a group of fossil and rock catalogues from Damon’s Weymouth collection together with a French note listing species sent to Castañon, Monge y Cia. The material begins in June 1885, directly overlapping the Blaschka agency years, but concerns fossils and rocks rather than glass models. Its value is documentary form, not object attribution.',
      links: '<a href="https://simurg.csic.es/browse/collection/1176699" target="_blank" rel="noopener">MNCN / Simurg catalogue ↗</a>'
    },
    {
      type: 'Damon · British Library · 1859',
      title: 'Add MS 42579, f. 221 — Robert Damon to Richard Owen.',
      meta: 'The British Library catalogue identifies a 1859 letter from Robert Damon, geologist, to Richard Owen. It is an early network witness showing Damon in direct correspondence with a major British natural-history authority; it is not treated as Blaschka evidence.',
      links: '<a href="https://searcharchives.bl.uk/catalog/040-002003171" target="_blank" rel="noopener">British Library catalogue ↗</a>'
    },
    {
      type: 'Frič · Bucharest · 1907–1908',
      title: 'Grigore Antipa Museum: Frič–Antipa letters nos. 168–172 cross-walked to inventory, labels and surviving objects.',
      meta: 'A published archival reconstruction used five Frič letters, old labels, Antipa’s inventory, museum registers and national archival material to reconstruct a purchase from V. Frič’s Prague business. The historical collection recorded 908 items and 642 survived when catalogued. This postdates Blaschka marine-model production, so it functions as a longitudinal control for what a relatively complete Frič dealer-to-museum paper chain can look like.',
      links: '<a href="https://olteniastudiisicomunicaristiintelenaturii.ro/v34_2.html" target="_blank" rel="noopener">2018 catalogue study / PDF access ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '20';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  docsSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass21.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

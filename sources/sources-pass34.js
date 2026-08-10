(() => {
  const reservoirHeading = document.querySelector('#dealer-correspondence-reservoirs-title');
  const reservoirSection = reservoirHeading?.closest('.source-section');
  if (!reservoirSection || document.querySelector('#dealer-sales-print-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-sales-print-title');
  section.innerHTML = `
    <p class="source-kicker">Catalogues as infrastructure</p>
    <h2 id="dealer-sales-print-title">Sales print made distant natural history orderable</h2>
    <p class="source-note">Dealer catalogues and bulletins did more than advertise. They named, grouped and stabilised objects as selectable commodities before a customer wrote an order. Direct Blaschka sales print is kept separate from general dealer controls: <a href="dealer-sales-print-register.json" target="_blank" rel="noopener">dealer-sales-print-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Frič · c.1886 · direct Blaschka dealer catalogue',
      title: 'A forty-three-page Václav Frič naturalia catalogue reportedly survives in the NHM London 1886 Zoological Department correspondence, locator 29/139.',
      meta: 'J. P. Short’s archival citation describes a catalogue that places Blaschka holothurians, corals, medusae and sea anemones inside a much broader inventory of naturalia and markets the glass marine forms for inland teaching. This is unusually strong evidence that the models entered an existing commercial taxonomy rather than a separate glass-art market. The project retains 29/139 as a precise published archival locator until it is cross-walked to the current NHM item catalogue and the original pages are inspected.',
      links: '<a href="dealer-sales-print-register.json" target="_blank" rel="noopener">archival locator and evidence guard ↗</a>'
    },
    {
      type: 'Ward · 1879 · direct Blaschka sales print',
      title: 'ANSP-2012-060: Ward pamphlet advertising the American Blaschka agency.',
      meta: 'The Academy’s Blaschka archival context identifies the Ward pamphlet as advertising the glass models and directing customers toward a separate catalogue. Agency status was therefore itself printed and circulated as commercial information.',
      links: '<a href="https://archivalcollections.drexel.edu/repositories/3/resources/842" target="_blank" rel="noopener">ANSP finding aid ↗</a>'
    },
    {
      type: 'Damon · 1857–1859 · pre-agency catalogue controls',
      title: 'Robert Damon used printed shell catalogues decades before taking the Blaschka agency.',
      meta: "BHL records Damon’s 1857 catalogue of British and Irish shells, while a complete 1859 Generic catalogue of recent & fossil shells by S. P. Woodward survives with the imprint “Printed for R. Damon” at Weymouth. These publications give a baseline for Damon's use of taxonomy, lists and printed selection before glass models entered his commercial repertoire.",
      links: '<a href="https://commons.wikimedia.org/wiki/File:Generic_catalogue_of_recent_%26_fossil_shells_%28IA_genericcatalogue00wood%29.pdf" target="_blank" rel="noopener">1859 Damon catalogue ↗</a> · <a href="https://www.biodiversitylibrary.org/" target="_blank" rel="noopener">BHL ↗</a>'
    },
    {
      type: 'Ward · 1881–1886 · dealer house serial',
      title: '<em>Ward’s natural science bulletin</em>, vols. 1–3.',
      meta: 'The public-domain run of Ward’s own bulletin gives a searchable commercial voice for the firm during the mature Blaschka-sales period. No uninspected page is promoted as Blaschka evidence; the value is the possibility of comparing product announcements, institutional customers and ordering language across models and ordinary natural-history goods.',
      links: '<a href="https://www.biodiversitylibrary.org/item/212981" target="_blank" rel="noopener">BHL bulletin run ↗</a>'
    },
    {
      type: 'Frič · 1889 · exhibition sales print',
      title: '<em>Exposition universelle de 1889, à Paris: V. Frič, Naturaliste à Prague, 1544-II</em>.',
      meta: 'Grant Museum research cites this four-page Prague-printed exhibition guide while reconstructing Frič’s preparations and teaching materials. A standalone digitised primary copy is still a retrieval target, so the entry is bibliographic rather than a source transcription.',
      links: '<a href="https://blogs.ucl.ac.uk/museums/2016/11/11/specimen-of-the-week-265-termite-collection/" target="_blank" rel="noopener">Grant Museum bibliographic witness ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '34';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  reservoirSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass35.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();
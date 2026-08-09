(() => {
  const upstreamHeading = document.querySelector('#upstream-living-supply-title');
  const upstreamSection = upstreamHeading?.closest('.source-section');
  if (!upstreamSection || document.querySelector('#marine-stations-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'marine-stations-title');
  section.innerHTML = `
    <p class="source-kicker">Institutional supply before manufacture</p>
    <h2 id="marine-stations-title">Naples and Trieste: marine stations behind the workshop</h2>
    <p class="source-note">The inward supply of reference animals was not only a dealer/exchange story. Two marine stations now have named archive systems and distinct Blaschka links: preserved specimens from Naples and living animals from Trieste. Canonical register: <a href="upstream-institutional-specimen-supply-register.json" target="_blank" rel="noopener">upstream-institutional-specimen-supply-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Naples · 4 February 1877 · preserved reference animals',
      title: 'A Leopold Blaschka letter in the Stazione Zoologica archive specifies 41 preserved marine animals for glass-model work.',
      meta: 'Drew Harvell reports examining the letter in Naples and identifies the date, quantity and purpose: a 41-item preserved-animal list intended to help the workshop construct scientifically accurate replicas. Separate Blaschka scholarship cites Anton Dohrn archive material from March and November 1877. The February request and later 1877 documents have not yet been cross-walked, so request, fulfilment and follow-up remain distinct until the files are retrieved.',
      links: '<a href="https://www.sej.org/publications/between-lines/scientist-finds-natures-art-beneath-seas" target="_blank" rel="noopener">Harvell account of 1877 archive letter ↗</a> · <a href="https://szn.it/en/research/marine-animal-conservation-and-public-engagement/functional-areas-cape/darwin-dohrn-museum-dadom-historical-archives/historical-archives" target="_blank" rel="noopener">SZN Historical Archive ↗</a>'
    },
    {
      type: 'Naples · institutional supply infrastructure',
      title: 'ASZN preserves correspondence, general-affairs registers and copybooks; the station itself sold preserved preparations internationally.',
      meta: 'The official Stazione Zoologica history states that biological samples and preparations became a revenue stream and were sold to museums, universities, schools and individuals. Archivi della Scienza describes the institutional archive as 353 folders, 643 files and 3 boxes, including administration, budgets, study tables, correspondence and scientific activity records. This makes the 1877 Blaschka request a targeted transaction inside a documented specimen-supply institution rather than an isolated anecdote.',
      links: '<a href="https://szn.it/en/who-we-are/our-history" target="_blank" rel="noopener">SZN institutional history ↗</a> · <a href="https://www.archividellascienza.org/en/archivio/IT-MUST-GUI001-002183" target="_blank" rel="noopener">Stazione Zoologica archival fonds ↗</a>'
    },
    {
      type: 'Trieste · living animals in Dresden',
      title: 'Rudolf Blaschka explicitly says the home seawater tanks contained animals sent by the Imperial Austrian Zoological Station at Trieste.',
      meta: 'In the workshop/family history preserved in the project OCR, Rudolf describes a room filled with seawater tanks supplied partly from Trieste and partly from England and northern coasts, then says that in this way their zoological model work improved. This is direct primary evidence that a marine station fed living observational material into the workshop.',
      links: '<a href="upstream-institutional-specimen-supply-register.json" target="_blank" rel="noopener">Trieste direct-source record ↗</a>'
    },
    {
      type: 'Vienna · controlled administrative comparator',
      title: 'The Austrian Ministry archive preserves parallel Signatur 2A series for Zoological Station Naples and Zoological Station Trieste.',
      meta: 'The Allgemeines Verwaltungsarchiv lists Naples files for 1874–1906 and 1907–1939 alongside Trieste files for 1873–1903, 1904–1908, 1909–1911 and 1912–1921. The structure is valuable because the two stations enter Blaschka production through different material channels while being documented inside one ministry system. The Naples ministry files are not assumed to contain the 1877 Blaschka purchase.',
      links: '<a href="https://www.archivinformationssystem.at/archivplansuche.aspx?ID=1324310" target="_blank" rel="noopener">Austrian State Archives station series ↗</a>'
    },
    {
      type: 'Trieste · 1878 supply comparator, not Blaschka',
      title: 'Schönbrunn Menagerie thanked Eduard Graeffe at the Trieste station for animals sent in January 1878.',
      meta: 'AT-OeStA/HHStA HA MI Schönbrunn 11-1-8 independently shows the station dispatching animals to an inland Viennese institution in the same decade. It does not document a Blaschka consignment; it is retained because it confirms the transport function implied by Rudolf’s later account and offers a possible documentary model for station-to-inland shipment.',
      links: '<a href="https://www.archivinformationssystem.at/archivplansuche.aspx?ID=4421337" target="_blank" rel="noopener">Schönbrunn 1878 file group ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '27';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  upstreamSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass28.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

(() => {
  const docsHeading = document.querySelector('#dealer-documents-title');
  const docsSection = docsHeading?.closest('.source-section');
  if (!docsSection || document.querySelector('#dealer-correspondence-reservoirs-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-correspondence-reservoirs-title');
  section.innerHTML = `
    <p class="source-kicker">Distributed dealer archives</p>
    <h2 id="dealer-correspondence-reservoirs-title">Correspondence reservoirs beyond the named dealer fonds</h2>
    <p class="source-note">The absence of a surviving corporate archive does not mean the business disappeared from the archive. Customer and collector papers preserve substantial dealer correspondence, invoices and freight records. These are coded as dealer-business evidence until Blaschka content is explicit: <a href="dealer-correspondence-reservoir-register.json" target="_blank" rel="noopener">dealer-correspondence-reservoir-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Damon · Florence · 1865–1873',
      title: 'Archivio di Stato di Firenze — Paulucci correspondence, ASFI-APXA box 51: thirty-six Robert Damon letters.',
      meta: 'The 2024 inventory of Marianna Paulucci’s malacological correspondence identifies thirty-six English-language letters from Robert Damon of Weymouth. The larger archive also preserves seller correspondence, purchase invoices and dealer shell lists. This is currently the largest single customer-side Damon letter cluster isolated by the project, but it predates the documented Blaschka agency and is not silently treated as glass-model correspondence.',
      links: '<a href="https://revue-colligo.fr/index.php?id=95&view=article" target="_blank" rel="noopener">Paulucci correspondence inventory ↗</a>'
    },
    {
      type: 'Damon · Philadelphia · 1868',
      title: 'ANSP Conchological Section papers — Box 4, Folder 24: Damon invoice for British shells.',
      meta: 'The finding aid gives a concrete dealer invoice rather than a name-only correspondence hit: “Damon, R. Invoice … British Shells, 1868.” It sits beside cash books, ledgers, receipts, vouchers and other dealer records, making the receiving institution’s financial series a high-value control for later Damon invoices and remittances.',
      links: '<a href="https://findingaids.library.upenn.edu/records/ANSP_ANSP.COLL.0081" target="_blank" rel="noopener">ANSP Conchological Section finding aid ↗</a>'
    },
    {
      type: 'Ward · Missouri · 1889',
      title: 'University of Missouri Archives — (UW:1/4/1), Box 7, FF 2G: correspondence, payment requests and bills of lading.',
      meta: 'The file concerns Ward’s Natural Science Establishment and the purchase of the elephant “Emperor” and other museum specimens. The inventory explicitly lists requests for payment and bills of lading. Although unrelated to Blaschka models on present evidence, it preserves the sort of document bundle expected around a dealer-mediated museum shipment in the same commercial period.',
      links: '<a href="https://muarchives.missouri.edu/uw-rg1-s1-4.html" target="_blank" rel="noopener">Missouri archival inventory ↗</a>'
    },
    {
      type: 'Damon + Frič · Moscow · customer-side archive',
      title: 'State Darwin Museum — A. F. Kots correspondence includes Robert F. Damon and V. Frič natural-history-business records.',
      meta: 'The museum’s digital archive indexes Damon correspondence and a separate record under “V.Fric in Prag, Naturalien-Handlung” within the Kots papers. Public discovery metadata is too thin to assign Blaschka content or force dates, so these remain uninspected dealer-network records. Their value is comparative: the same later museum-building archive preserves multiple natural-history suppliers.',
      links: '<a href="https://www.darwinmuseum.ru/foundation/xmlui/discover?filter_0=%D0%9E%D0%A4-12497&filtertype_0=Fond" target="_blank" rel="noopener">State Darwin Museum archival discovery ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '33';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  docsSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass34.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

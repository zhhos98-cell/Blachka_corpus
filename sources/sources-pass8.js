(() => {
  const docsHeading = document.querySelector('#dealer-documents-title');
  const docsSection = docsHeading?.closest('.source-section');
  if (!docsSection || document.querySelector('#intermediaries-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'intermediaries-title');
  section.innerHTML = `
    <p class="source-kicker">Beyond the dealer</p>
    <h2 id="intermediaries-title">Forwarders, carriers and payment intermediaries</h2>
    <p class="source-note">The circulation chain did not end with the dealer. Named forwarding agents, shipping companies, banks and travelling preparators are recorded separately so that “shipment” can be reconstructed as a sequence of institutions and documents. Machine-readable register: <a href="commercial-intermediary-register.json" target="_blank" rel="noopener">commercial-intermediary-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Trieste–Bombay · ocean carrier archive',
      title: 'Civico Museo del Mare di Trieste — Archivio del Lloyd Triestino di Navigazione, 1801–1988.',
      meta: 'The Jeypore workshop correspondence names the Austro-Hungarian Lloyd at Trieste as ocean carrier for packages LB 285–286 to Bombay. The surviving Lloyd corporate collection contains correspondence, cost tables, schedules and routes, movement-of-goods tables, import/export values, receipts, contracts, accounting notes, bills of lading and bills of exchange. No Blaschka manifest has yet been isolated, but this is now the strongest carrier-side archive target in the project.',
      links: '<a href="https://www.archividellascienza.org/en/archivio/IT-MUST-GUI001-002072" target="_blank" rel="noopener">Lloyd archive description ↗</a> · <a href="https://museodelmaretrieste.it/en/lloyd/" target="_blank" rel="noopener">Civic Maritime Museum Lloyd collection ↗</a>'
    },
    {
      type: 'Bombay · forwarding and agency-house archive bridge',
      title: 'The London Archives — Grindlays and Company: Accounting and Financial, GB 0074 CLC/B/207/GR01, 1861–[1920].',
      meta: 'Workshop correspondence directs the Jeypore shipment to Grindlay & Groom in Bombay after sea carriage. The London archive catalogue records Grindlay & Co branch firms at Calcutta from 1854 and Bombay from 1865 and preserves ledgers from 1861 onward. This is a candidate bridge, not yet a recovered Jeypore record: the surviving sub-fonds must be checked for 1887 Bombay transactions before any direct connection is claimed.',
      links: '<a href="https://atom.aim25.com/index.php/grindlays-and-company-accounting-and-financial" target="_blank" rel="noopener">CLC/B/207/GR01 finding aid ↗</a> · <a href="https://www.natwestgroup.com/heritage/companies/grindlays-bank-ltd.html" target="_blank" rel="noopener">Grindlays corporate history / later holdings ↗</a>'
    },
    {
      type: 'Hamburg · unresolved forwarding archive',
      title: 'M. O. W. Möller, Hamburg — forwarding point for Liverpool case I.B. 268.',
      meta: 'The 1887 workshop dispatch evidence explicitly names M. O. W. Möller as the Hamburg forwarding point for the Liverpool Museum case. A dedicated company archive has not yet been located. Hamburg’s digitised address-book series includes the 1887 volume and is retained as the next identity-resolution route. No modern Möller firm is equated with this historical actor without a contemporary directory match.',
      links: '<a href="https://adressbuecher.sub.uni-hamburg.de/" target="_blank" rel="noopener">Hamburg digitised address books ↗</a>'
    },
    {
      type: 'Auckland · mobile human intermediary',
      title: 'Charles Francis Adams — carrier-preparator and payment intermediary in the 1885 Auckland transaction.',
      meta: 'Auckland evidence shows that circulation could be carried by a person rather than a formal shipping firm. Adams safely delivered the Ward-supplied Blaschka models and participated in a triangular settlement linking museum debt, his own account with Ward and Ward’s Australian creditor. The evidence survives in the Cheeseman–Ward manuscript correspondence rather than in a separately identified Adams business archive.',
      links: '<a href="https://doi.org/10.32912/ram.2019.54.2" target="_blank" rel="noopener">Auckland archival reconstruction / Records of Auckland Museum ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '8';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  docsSection.insertAdjacentElement('afterend', section);
})();

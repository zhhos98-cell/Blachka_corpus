(() => {
  const mollerHeading = document.querySelector('#moller-forwarding-title');
  const mollerSection = mollerHeading?.closest('.source-section');
  if (!mollerSection || document.querySelector('#consular-documentation-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'consular-documentation-title');
  section.innerHTML = `
    <p class="source-kicker">Route paperwork</p>
    <h2 id="consular-documentation-title">Consular certificates, invoices and route path-dependence</h2>
    <p class="source-note">Consular paperwork appears repeatedly in the Harvard shipping chain and sometimes constrained route choice itself. Direct workshop documents are separated from the U.S. government archive in which post-side certification records may survive: <a href="consular-documentation-register.json" target="_blank" rel="noopener">consular-documentation-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '1906 · declared shipment value',
      title: 'An insured Harvard shipment accompanied by a consular invoice valued at about three years of work.',
      meta: 'Rudolf’s dispatch letter places insurance and consular valuation alongside Bremen forwarding and ocean carriage. The declared-value document is analytically separate from workshop model prices and from the freight or customs charges later paid in the United States.',
      links: '<a href="consular-documentation-register.json" target="_blank" rel="noopener">1906 consular-invoice record ↗</a>'
    },
    {
      type: '1922 · postwar institutional return',
      title: '“We have now the American consulate again in Bremen.”',
      meta: 'While planning renewed shipments after the war, Rudolf explicitly treated the return of the American consulate in Bremen as progress toward restoring the old commercial order. In the same letter he described export declaration, licensing and taxation as continuing uncertainties. Consular presence was part of usable commercial infrastructure, not background diplomacy.',
      links: '<a href="consular-documentation-register.json" target="_blank" rel="noopener">1922 Bremen record ↗</a>'
    },
    {
      type: '1929 · paperwork constrains the route',
      title: 'A cheaper direct-Boston steamer is rejected because it would require new consular documentation.',
      meta: 'Ehrhorn, Emden & Mayer proposed direct carriage to Boston. Rudolf kept the New York-in-bond-to-Boston itinerary because changing the route after documentation had been prepared would require a new consular certificate/invoice and delay the shipment. Administrative paperwork therefore produced observable logistical path-dependence.',
      links: '<a href="consular-documentation-register.json" target="_blank" rel="noopener">1929 route-document record ↗</a>'
    },
    {
      type: 'Government archive · U.S. Foreign Service posts',
      title: 'National Archives RG 84 — Records of Foreign Service Posts of the Department of State.',
      meta: 'NARA states that consular-post records can include certifications of merchandise, cargo and vessel records, shipping fees and local business correspondence; German consular-post records survive across the relevant period. Exact Bremen records must still be located through the post finding aids. RG 84 is therefore the government-side retrieval universe, not yet a Blaschka-specific citation.',
      links: '<a href="https://www.archives.gov/research/foreign-policy/state-dept/rg-84" target="_blank" rel="noopener">RG 84 overview ↗</a> · <a href="https://www.archives.gov/research/foreign-policy/state-dept/rg-84/finding-aids" target="_blank" rel="noopener">Foreign Service post finding aids ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '16';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  mollerSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass17.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

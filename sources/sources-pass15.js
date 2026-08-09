(() => {
  const paymentHeading = document.querySelector('#payment-regulation-title');
  const paymentSection = paymentHeading?.closest('.source-section');
  if (!paymentSection || document.querySelector('#moller-forwarding-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'moller-forwarding-title');
  section.innerHTML = `
    <p class="source-kicker">British and Irish forwarding route</p>
    <h2 id="moller-forwarding-title">M. Otto W. Möller, Hamburg: a recurrent corridor, 1886–1887</h2>
    <p class="source-note">A wider re-read of the workshop business records shows that Möller was not confined to Marlborough and Liverpool. The Hamburg node recurs across Galway, Cardiff, Dublin Museum and later English orders, with case marks and dealer-account layers preserved at shipment level. Canonical register: <a href="moller-hamburg-forwarding-register.json" target="_blank" rel="noopener">moller-hamburg-forwarding-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '28 January 1886 · Galway and Cardiff',
      title: 'Cases I.B. 269 and L.B. 270 move together through M. Otto W. Möller.',
      meta: 'One Damon letter sends the Galway Natural History Museum order to Prof. R. J. Anderson and the Cardiff University Museum order to Prof. Parker through the same Hamburg forwarder. The invoices are 288 and 197 Marks and exactly exhaust 485 Marks of prepayment. The 290-Mark parenthetical attached to the Galway case is OCR-ambiguous and is not silently labelled as insurance.',
      links: '<a href="moller-hamburg-forwarding-register.json" target="_blank" rel="noopener">Galway / Cardiff transaction record ↗</a>'
    },
    {
      type: '1886 · Dublin Museum instalments',
      title: 'Cases L.B. 271–272 and later 275–276: a large museum order split across repeated Hamburg consignments.',
      meta: 'The first Dublin Museum consignment required two cases and carried a 380-Mark invoice against 264 Marks prepaid. A later July dispatch again names the Hamburg forwarder for two cases and closes a 900-Mark invoice/prepayment account. Case-prefix OCR varies and remains guarded, but the repeated forwarding relationship and instalment structure are clear.',
      links: '<a href="moller-hamburg-forwarding-register.json" target="_blank" rel="noopener">Dublin Museum records ↗</a>'
    },
    {
      type: '11 October 1887 · Marlborough College',
      title: 'Case I.B. 266, insured for 200 Marks, forwarded through M. Otto W. Möller.',
      meta: 'The letter combines destination, case identity, insurance, forwarder, invoice and account balance: I.B. 266, 200 Marks insurance and a 196-Mark invoice against Damon’s prepaid credit.',
      links: '<a href="moller-hamburg-forwarding-register.json" target="_blank" rel="noopener">Marlborough I.B. 266 record ↗</a>'
    },
    {
      type: 'November–December 1887 · Liverpool Museum',
      title: 'I.B. 268: model value, packing estimate, Hamburg forwarding and rolling Damon credit remain distinct.',
      meta: 'The Liverpool sequence separates 247 Marks for models from an additional packing estimate and a later 268-Mark dispatch invoice. The case moves by freight to M. O. W. Möller for onward Liverpool dispatch while residual Damon credit is carried into other institutional orders.',
      links: '<a href="moller-hamburg-forwarding-register.json" target="_blank" rel="noopener">Liverpool I.B. 268 record ↗</a>'
    },
    {
      type: 'Archive target · Hamburg',
      title: 'Resolve the historical firm before searching a company archive.',
      meta: 'No secure corporate fonds has yet surfaced. The next task is identity resolution in the 1886–1887 Hamburg address books: legal firm name, occupation, principals and street address first; Handelsregister, Chamber of Commerce and Staatsarchiv records second. A modern Möller firm is not treated as successor without that bridge.',
      links: '<a href="https://adressbuecher.sub.uni-hamburg.de/" target="_blank" rel="noopener">Hamburg digitised address books ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '15';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  paymentSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass16.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

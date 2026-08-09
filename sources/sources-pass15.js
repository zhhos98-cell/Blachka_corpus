(() => {
  const paymentHeading = document.querySelector('#payment-regulation-title');
  const paymentSection = paymentHeading?.closest('.source-section');
  if (!paymentSection || document.querySelector('#moller-forwarding-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'moller-forwarding-title');
  section.innerHTML = `
    <p class="source-kicker">British forwarding route</p>
    <h2 id="moller-forwarding-title">M. Otto W. Möller, Hamburg: Marlborough and Liverpool, 1887</h2>
    <p class="source-note">Workshop business records now show that the Hamburg forwarder previously known only from the Liverpool case was reused for another Damon-mediated British consignment. The two transactions are retained at document level in <a href="moller-hamburg-forwarding-register.json" target="_blank" rel="noopener">moller-hamburg-forwarding-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '11 October 1887 · Marlborough College',
      title: 'Case I.B. 266, insured for 200 Marks, forwarded through M. Otto W. Möller in Hamburg.',
      meta: 'The workshop letter to Damon states that the case had been sent on 8 October, identifies Marlborough College as the destination, gives 200 Marks insurance, names M. Otto W. Möller as the Hamburg forwarder, and states an invoice of 196 Marks against Damon\'s prepaid account. One document therefore preserves object destination, case identity, insurance, forwarder, invoice and account balance together.',
      links: '<a href="moller-hamburg-forwarding-register.json" target="_blank" rel="noopener">Marlborough I.B. 266 record ↗</a>'
    },
    {
      type: 'November–December 1887 · Liverpool Museum',
      title: 'Case I.B. 268: model value, packing estimate, Hamburg forwarding and rolling Damon credit remain distinct documentary layers.',
      meta: 'A 23 November letter says 247 Marks prepaid for Liverpool covered models only and asks for about 50 Marks more for packing. The later dispatch letter sends I.B. 268 by freight to M. O. W. Möller for immediate forwarding to Liverpool and states a 268-Mark invoice while carrying Damon credit onward to Galway and Cardiff. The insurance figure in this OCR record remains ambiguous and is deliberately left unresolved.',
      links: '<a href="moller-hamburg-forwarding-register.json" target="_blank" rel="noopener">Liverpool I.B. 268 record ↗</a>'
    },
    {
      type: 'Archive target · Hamburg',
      title: 'Resolve the historical firm before searching a company archive.',
      meta: 'Exact-name web searches have not yet produced a secure corporate fonds. The next source task is narrower: identify M. Otto W. Möller in the 1887 Hamburg address books, establish the legal firm name, occupation and address, and only then pursue Handelsregister, Chamber of Commerce or Staatsarchiv records. No modern Möller forwarding company is treated as a successor without that bridge.',
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

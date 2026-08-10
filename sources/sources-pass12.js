(() => {
  const workshopHeading = document.querySelector('#workshop-logistics-docs-title');
  const workshopSection = workshopHeading?.closest('.source-section');
  if (!workshopSection || document.querySelector('#forwarder-continuity-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'forwarder-continuity-title');
  section.innerHTML = `
    <p class="source-kicker">Commercial continuity</p>
    <h2 id="forwarder-continuity-title">Ehrhorn, Emden & Mayer: a forwarding relationship across four decades</h2>
    <p class="source-note">Workshop correspondence documents repeated use of the same Bremen forwarding firm from at least 1891 to 1929. The evidence is now separated from generic carrier history because the firm supplied procedural memory: routes, bookings, documents, advice and handoffs. Machine-readable register: <a href="forwarder-longitudinal-register.json" target="_blank" rel="noopener">forwarder-longitudinal-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '1891 · five cases to Harvard',
      title: 'Bremen forwarding and Bremerhaven–New York coordination.',
      meta: 'Leopold and Rudolf wrote that five large cases had gone to Bremen and would leave Bremerhaven for New York by express steamer; Ehrhorn, Emden & Mayer would send the shipping advice. This is the earliest direct dated use of the firm currently isolated in the project corpus.',
      links: '<a href="forwarder-longitudinal-register.json" target="_blank" rel="noopener">1891 evidence record ↗</a>'
    },
    {
      type: '1892 · travel as well as freight',
      title: 'Rudolf’s Bremen journey: the firm supplied travel documents and connected him to Norddeutscher Lloyd.',
      meta: 'Rudolf described the firm as “our agent”; its comptoir was beside his hotel and it provided his travel documents before he sailed on the Saale. The relationship therefore exceeded crate forwarding and connected the workshop to a broader mobility infrastructure.',
      links: '<a href="forwarder-longitudinal-register.json" target="_blank" rel="noopener">1892 evidence record ↗</a>'
    },
    {
      type: '1906 · insured Harvard consignment',
      title: 'Forwarder, North German Lloyd, insurance and consular invoice in one dispatch.',
      meta: 'The October 1906 dispatch letter places the firm between Dresden and the next North German Lloyd steamer and records insurance plus a consular invoice. The forwarding relationship therefore sat at the junction between physical carriage and documentary preparation.',
      links: '<a href="forwarder-longitudinal-register.json" target="_blank" rel="noopener">1906 evidence record ↗</a>'
    },
    {
      type: '1922–1923 · postwar regulatory memory',
      title: '“Our old forwarding agents”: route advice, no-repacking requirement and bonded movement.',
      meta: 'In 1922 Rudolf explicitly called Ehrhorn, Emden & Mayer the family’s old forwarding agents while seeking advice on how to avoid repacking under changed export rules. In 1923 the firm again arranged the steamer to New York before the four cases travelled in bond to Boston and into E. A. Snow’s customs-broker chain.',
      links: '<a href="forwarder-longitudinal-register.json" target="_blank" rel="noopener">1922–1923 evidence record ↗</a>'
    },
    {
      type: '1929 · route choice and documentary inertia',
      title: 'Cheaper direct Boston route rejected; President Harding booked for New York.',
      meta: 'The firm proposed a cheaper direct Boston service, but Rudolf rejected it because changing route would require new consular paperwork and delay. Two days later he reported that the cases had been loaded aboard President Harding for New York. Rudolf retrospectively described the New York-in-bond-to-Boston route as used since 1888; that date is retained as his recollection until an 1888 transaction document is isolated.',
      links: '<a href="forwarder-longitudinal-register.json" target="_blank" rel="noopener">1929 evidence record ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '12';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  workshopSection.insertAdjacentElement('afterend', section);

  const loadDeepSourcePasses = () => {
    if (document.querySelector('script[src*="sources-pass13.js"]')) return;
    const next = document.createElement('script');
    next.src = 'sources-pass13.js?v=20260810-1';
    next.defer = true;
    document.body.appendChild(next);
  };
  if ('requestIdleCallback' in window) requestIdleCallback(loadDeepSourcePasses, {timeout:900});
  else setTimeout(loadDeepSourcePasses, 260);
})();

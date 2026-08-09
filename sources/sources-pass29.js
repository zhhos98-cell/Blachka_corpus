(() => {
  const stationHeading = document.querySelector('#marine-stations-title');
  const stationSection = stationHeading?.closest('.source-section');
  if (!stationSection || document.querySelector('#trieste-reciprocal-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'trieste-reciprocal-title');
  section.innerHTML = `
    <p class="source-kicker">A bidirectional scientific exchange</p>
    <h2 id="trieste-reciprocal-title">Trieste ↔ Dresden: live animals one way, glass models the other</h2>
    <p class="source-note">University of Vienna collection research makes the Trieste relation unusually explicit: living marine animals began moving to Dresden from 1878, while glass models moved back into the Vienna/Graz/Trieste zoological network. The 1880 rupture shows that these two directions were institutionally coupled. Register: <a href="trieste-reciprocal-exchange-register.json" target="_blank" rel="noopener">trieste-reciprocal-exchange-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'from 1878 · Trieste → Dresden',
      title: 'Living marine animals reached the Blaschka workshop from the k.k. Zoological Station.',
      meta: 'University of Vienna states that Dresden joined Vienna and Graz as a destination for Trieste live-animal shipments from 1878. The workshop kept several aquaria for close observation. Rudolf’s own later account independently says the Dresden seawater tanks contained animals sent by the Imperial Austrian Zoological Station at Trieste and directly links this access to improved zoological models.',
      links: '<a href="https://bibliothek.univie.ac.at/sammlungen/objekt_des_monats/003878.html" target="_blank" rel="noopener">University of Vienna reconstruction ↗</a> · <a href="trieste-reciprocal-exchange-register.json" target="_blank" rel="noopener">source cross-walk ↗</a>'
    },
    {
      type: '1880 · rupture',
      title: 'A routing dispute over finished models threatened the quality of incoming living animals.',
      meta: 'Carl Claus wanted Blaschka models sent to the Vienna institute instead of directly to the Trieste station. Leopold resisted because he feared that the quality of live-animal shipments would suffer and subsequently had to seek other marine-animal suppliers. This is not a simple buyer–seller disagreement: administrative routing in the outward model chain altered access to epistemically valuable material in the inward chain.',
      links: '<a href="https://bibliothek.univie.ac.at/sammlungen/objekt_des_monats/003878.html" target="_blank" rel="noopener">Vienna chronology ↗</a>'
    },
    {
      type: 'packing and selection · living cargo',
      title: 'Jars, padded baskets, express delivery, temperature windows and survival selection shaped what could be observed.',
      meta: 'University of Vienna describes snails, anemones, mussels and seahorses travelling in jars nested in padded baskets, by express or urgent delivery and only when temperatures allowed. Only robust animals survived. Transportability therefore selected the living reference material before representation began.',
      links: '<a href="trieste-reciprocal-exchange-register.json" target="_blank" rel="noopener">living-cargo logistics ↗</a>'
    },
    {
      type: '1884–1887 · restored exchange',
      title: 'Marine animals resumed; Claus ordered 38 models, then 77 more, followed by a probable final 21-model order in 1887.',
      meta: 'By 1884 Leopold was again receiving requested marine animals, mainly mussels and snails, from Trieste. University of Vienna then records two Claus orders of 38 and 77 models, with a further 21-model order in February 1887. The exact money/non-money terms still require underlying archival documents.',
      links: '<a href="https://bibliothek.univie.ac.at/sammlungen/objekt_des_monats/003878.html" target="_blank" rel="noopener">University of Vienna order chronology ↗</a>'
    },
    {
      type: 'Research consequence',
      title: 'This is a reciprocal circuit, not a one-direction supply chain.',
      meta: 'Trieste supplied living organisms that changed the workshop’s capacity to observe; the Blaschkas supplied durable representations that changed the zoological institutes’ capacity to teach and display. The same relationship linked biological survival, model quality, routing and institutional authority. It provides an unusually strong case for studying circulation as mutually dependent flows.',
      links: '<a href="trieste-reciprocal-exchange-register.json" target="_blank" rel="noopener">reciprocal-circuit schema ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '29';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  stationSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass30.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

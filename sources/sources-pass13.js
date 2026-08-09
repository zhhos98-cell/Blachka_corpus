(() => {
  const forwarderHeading = document.querySelector('#forwarder-continuity-title');
  const forwarderSection = forwarderHeading?.closest('.source-section');
  if (!forwarderSection || document.querySelector('#packing-feedback-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'packing-feedback-title');
  section.innerHTML = `
    <p class="source-kicker">Packing as a feedback system</p>
    <h2 id="packing-feedback-title">Packing, customs opening, skilled unpacking and repair</h2>
    <p class="source-note">The Ware correspondence preserves both sides of the shipment. Workshop technique can therefore be read against customs opening, receiver skill, breakage, repair and feedback into later packing. Machine-readable register: <a href="packing-feedback-unpacking-register.json" target="_blank" rel="noopener">packing-feedback-unpacking-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '1892 · customs opening and condition feedback',
      title: 'Five cases L.B. 1–5: the first opened before a customs inspector in Cambridge.',
      meta: 'The early Ware Collection correspondence already embeds customs opening in the receipt procedure. Rudolf later reported from Cambridge that the five boxes had arrived, that the first was opened before a customs inspector, and that the contents were found without even a scratch before the other cases were opened over the following days.',
      links: '<a href="packing-feedback-unpacking-register.json" target="_blank" rel="noopener">1892 event record ↗</a>'
    },
    {
      type: '1930 · procedural source',
      title: '“Method of preparing the models for Transportation.”',
      meta: 'The source describes a complete temporary transport system: cardboard plate, strong cardboard box, crushed tissue paper immobilising dependent parts, pinewood outer box, straw between inner units, then an outer bale of straw and burlap. After customs opening at the Museum the models were removed from the temporary supports and transferred to plaster plaques. Transportation therefore ended in remounting, not merely in arrival.',
      links: '<a href="packing-feedback-unpacking-register.json" target="_blank" rel="noopener">1930 method record ↗</a>'
    },
    {
      type: '15 December 1930 · receiver-to-workshop feedback',
      title: 'Oakes Ames: tissue-paper support for vibration, and a warning about hay.',
      meta: 'Ames advised that leaves should be supported with tissue paper because transit still involved vibration and danger of damage even under careful handling. He separately warned that inspectors were very strict about plant material used for packing. The receiver was therefore contributing both mechanical and regulatory knowledge to the next shipment.',
      links: '<a href="packing-feedback-unpacking-register.json" target="_blank" rel="noopener">1930 feedback record ↗</a>'
    },
    {
      type: '1932 · unpacking expertise',
      title: 'Three cases, twenty-one models, one small break: Rudolf credits Louis Bierweiler’s skill.',
      meta: 'Harvard called the September 1932 consignment its most satisfactory Blaschka shipment from the standpoint of condition. Rudolf’s October reply makes the success analytically more interesting: some models were complicated to unpack, and he explicitly credited Bierweiler’s skill and carefulness. Successful transport depended on trained receiving practice as well as packing.',
      links: '<a href="packing-feedback-unpacking-register.json" target="_blank" rel="noopener">1932 unpacking record ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '13';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  forwarderSection.insertAdjacentElement('afterend', section);
})();

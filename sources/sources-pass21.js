(() => {
  const intermediaryHeading = document.querySelector('#intermediaries-title');
  const intermediarySection = intermediaryHeading?.closest('.source-section');
  if (!intermediarySection || document.querySelector('#mobile-intermediary-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'mobile-intermediary-title');
  section.innerHTML = `
    <p class="source-kicker">Human carriage</p>
    <h2 id="mobile-intermediary-title">Charles Francis Adams: a personal diary behind the Auckland handoff</h2>
    <p class="source-note">Auckland’s Blaschka transaction already identifies Adams as the person who safely delivered Ward’s glass models. His own 1884–1887 diary now supplies a separate personal archive for testing the exact travel, handoff and handling chronology. Register: <a href="mobile-intermediary-register.json" target="_blank" rel="noopener">mobile-intermediary-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'University of Illinois · personal papers · collection 782',
      title: 'Charles Francis Adams Diary, 1884–1887 — 160-page account.',
      meta: 'Illinois History and Lincoln Collections describes Adams’s journey from Illinois to San Francisco and Auckland and daily entries for his Auckland Museum work from 15 January to 12 July 1885. He prepared birds, fish and marine invertebrates and recorded local movement including wharf and ship visits. The finding aid itself does not say that Blaschka models appear in the diary, so the diary is a targeted retrieval source rather than an asserted Blaschka document.',
      links: '<a href="https://archon.library.illinois.edu/ihlc/index.php?p=collections/controlcard&amp;id=778" target="_blank" rel="noopener">Illinois diary finding aid ↗</a>'
    },
    {
      type: 'Cross-archive question',
      title: 'Can a museum/dealer statement that Adams “safely delivered” the models be matched to a dated entry by the carrier himself?',
      meta: 'The Auckland Cheeseman–Ward correspondence establishes Adams’s role independently. The diary can therefore be read narrowly for the package’s arrival, wharf or ship handling, museum handoff, unpacking, condition, labels or payment. A diary silence would also matter: it would show how an object transfer visible in dealer correspondence could remain ordinary enough to disappear from a worker’s daily narrative.',
      links: '<a href="mobile-intermediary-register.json" target="_blank" rel="noopener">cross-archive retrieval questions ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '21';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  intermediarySection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass22.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

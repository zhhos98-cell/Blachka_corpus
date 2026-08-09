(() => {
  const longtailHeading = document.querySelector('#dealer-longtail-title');
  const longtailSection = longtailHeading?.closest('.source-section');
  if (!longtailSection || document.querySelector('#cornell-ward-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'cornell-ward-title');
  section.innerHTML = `
    <p class="source-kicker">One institution, several documentary lives</p>
    <h2 id="cornell-ward-title">Cornell: Ward procurement, loan, restoration and redisplay</h2>
    <p class="source-note">Cornell now offers a long receiving-side archive from nineteenth-century Ward correspondence to later custody and restoration. The original purchase chronology remains deliberately open. Retrieval register: <a href="cornell-ward-retrieval-register.json" target="_blank" rel="noopener">cornell-ward-retrieval-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '1885 · direct archival locator / content pending',
      title: 'John Henry and Anna Botsford Comstock papers, Box 2 Folder 7 — three Henry Augustus Ward letters, 3, 8 and 23 October 1885.',
      meta: 'Cornell’s official finding aid securely identifies the three Ward letters. William Warmus later reported that the 23 October letter concerns a shipment of glass models and separately described a 16 October 1882 Ward-to-President White letter about “beautiful glass models” of jellyfish/medusae. Those content claims remain guarded until the manuscripts are inspected; the 1882 letter still lacks a stable archival reference in this pass.',
      links: '<a href="https://rmc.library.cornell.edu/EAD/htmldocs/RMA00025.html" target="_blank" rel="noopener">Comstock papers finding aid ↗</a> · <a href="https://www.warmus.com/Blaschka%20Sea%20Creatures%20Cornell%20Warmus.htm" target="_blank" rel="noopener">Warmus chronology claim ↗</a>'
    },
    {
      type: '1963, 1990 · custody archive',
      title: 'Elaine D. Engst papers, Box 1 Folder 66 — correspondence on the permanent loan of the Blaschka models to Corning.',
      meta: 'This folder is a precise receiving-side custody target for ownership language, loan conditions, model lists and the institutional memory of the Corning relationship.',
      links: '<a href="https://rmc.library.cornell.edu/EAD/htmldocs/RMA04088.html" target="_blank" rel="noopener">Engst papers finding aid ↗</a>'
    },
    {
      type: '1993–2006 · restoration and collection afterlife',
      title: 'Barlow Ware papers, Box 4 Folders 18–19 — restoration project and Blaschka collections.',
      meta: 'Folder 18 is the 2006 Blaschka Marine Invertebrate Collection restoration project binder and unveiling record; Folder 19 holds photographs, publications, clippings and material on the Cornell and Harvard collections from 1993–2006. These are afterlife records, not substitutes for the original acquisition file.',
      links: '<a href="https://rmc.library.cornell.edu/EAD/htmldocs/RMA02587.html" target="_blank" rel="noopener">Barlow Ware papers ↗</a>'
    },
    {
      type: '2003 · exhibition-making archive',
      title: 'Albert R. Mann Library exhibition materials, Box 3 — “Blaschka Glass Invertebrates,” March–July 2003.',
      meta: 'The exhibition file adds a modern interpretation layer: how the rediscovered collection was selected, framed and presented to a new audience. Cornell therefore preserves multiple documentary lives of the same collection across procurement, custody, restoration and redisplay.',
      links: '<a href="https://rmc.library.cornell.edu/EAD/htmldocs/RMA03601.html" target="_blank" rel="noopener">Mann Library exhibition materials ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '23';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  longtailSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass24.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

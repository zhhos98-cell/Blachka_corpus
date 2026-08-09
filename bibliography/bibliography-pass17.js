(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="17"]')) return;

  const records = [
    {
      year: 2010,
      citation: 'Susan S. Lang, “Mann Showcases Scientifically Accurate Glass Sea Life Sculptures by Famed Artists,” <em>Cornell Chronicle</em>, 7 June 2010.',
      links: '<a href="https://news.cornell.edu/stories/2010/06/fantastic-display-glass-sea-creatures-opens" target="_blank" rel="noopener">Cornell Chronicle ↗</a>'
    },
    {
      year: 2014,
      citation: 'Alvin Powell, “Undersea Life, Clear as Glass,” <em>Harvard Gazette</em>, 3 July 2014. On the restored Blaschka invertebrate collection and the permanent <em>Sea Creatures in Glass</em> exhibition.',
      links: '<a href="https://news.harvard.edu/gazette/story/2014/07/undersea-life-clear-as-glass/" target="_blank" rel="noopener">Harvard Gazette ↗</a>'
    },
    {
      year: 2014,
      citation: 'Megan Gambino, “College Students Studied These Mail-Order Sea Creatures in the Late 1800s,” <em>Smithsonian Magazine</em>, 3 September 2014. On Harvard’s restored Blaschka marine models, Ward’s distribution, and nineteenth-century teaching use.',
      links: '<a href="https://www.smithsonianmag.com/arts-culture/college-students-studied-these-mail-order-sea-creatures-in-the-late-1800s-180952499/" target="_blank" rel="noopener">Smithsonian Magazine ↗</a>'
    },
    {
      year: 2016,
      citation: 'Julie Leibach, “A Tale of Two Glassworkers and Their Marine Marvels,” <em>Science Friday</em>, 13 May 2016. Published in connection with Corning’s <em>Fragile Legacy</em> exhibition and Drew Harvell’s <em>A Sea of Glass</em>.',
      links: '<a href="https://www.sciencefriday.com/articles/a-tale-of-two-glassworkers-and-their-marine-marvels/" target="_blank" rel="noopener">Science Friday ↗</a>'
    },
    {
      year: 2017,
      citation: 'Kerstin Barndt and Alice Goff, “The Museum of Vitreous Ecology: Blaschka Glass Models at Michigan,” University of Michigan, 2017. Exhibition publication.',
      links: '<a href="https://lsa.umich.edu/german/news-events/all-news/search-news/the-museum-of-vitreous-ecology.html" target="_blank" rel="noopener">University of Michigan ↗</a>'
    },
    {
      year: 2020,
      citation: 'N. Astrid R. van Giffen, “CSI (Conservation Special Investigation): Blaschka,” <em>Corning Museum of Glass Blog</em>, 1 December 2020. On reconstructing object identities, original support cards, and conservation evidence in the Cornell collection.',
      links: '<a href="https://blog.cmog.org/2020/csi-conservation-special-investigation-blaschka" target="_blank" rel="noopener">Corning Museum of Glass ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '17';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1883–2026 · seventeenth expanded pass';

  if (!document.querySelector('script[data-bib-pass18-loader]')) {
    const pass18 = document.createElement('script');
    pass18.src = 'bibliography-pass18.js?v=20260809-1';
    pass18.dataset.bibPass18Loader = 'true';
    document.head.appendChild(pass18);
  }
})();

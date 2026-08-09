(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="33"]')) return;

  const harvardArchive = 'https://hollisarchives.lib.harvard.edu/catalog/ecb00006';

  const records = [
    {
      year: 1994,
      citation: '“Museum Acquires More Blaschka Materials,” <em>Spring Newsletter</em>, The Corning Museum of Glass, Spring 1994. [Institutional acquisition notice; archival copy illustrated with Blaschka studio curios, glass eyes, Rudolf Blaschka’s bench, and a drawing of <em>Octopus macropus</em>.]',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Blaschka archive / Series VIII publication register ↗</a> · <a href="https://glasscollection.cmog.org/objects/30665/workbench" target="_blank" rel="noopener">Corning workbench provenance record ↗</a>`
    },
    {
      year: 2001,
      citation: 'Julie Flaherty, “Even Antique Glass Flowers Need to Be Rejuvenated,” <em>The New York Times</em>, 22 August 2001. [Direct conservation feature on the Harvard Glass Flowers.]',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Blaschka archive / Series VIII publication register ↗</a>`
    },
    {
      year: 2001,
      citation: '“‘Glass Flowers’ Gallery to Close for Renovations,” <em>Harvard Gazette</em>, 15 November 2001. [Institutional record of gallery renovation alongside the separate Glass Flowers conservation project.]',
      links: '<a href="https://news.harvard.edu/gazette/story/2001/11/glass-flowers-gallery-to-close-for-renovations/" target="_blank" rel="noopener">Harvard Gazette ↗</a>'
    },
    {
      year: 2003,
      citation: '<em>Blaschka Glass Invertebrates</em>, Albert R. Mann Library, Cornell University Library, exhibition, March–July 2003. [Official archival exhibit record.]',
      links: '<a href="https://rmc.library.cornell.edu/EAD/htmldocs/RMA03601.html" target="_blank" rel="noopener">Cornell Rare and Manuscript Collections finding aid ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '33';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · thirty-third expanded pass';

  if (!document.querySelector('script[data-bib-pass34-loader]')) {
    const pass34 = document.createElement('script');
    pass34.src = 'bibliography-pass34.js?v=20260809-1';
    pass34.dataset.bibPass34Loader = 'true';
    document.head.appendChild(pass34);
  }
})();

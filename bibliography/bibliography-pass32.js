(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="32"]')) return;

  const harvardArchive = 'https://hollisarchives.lib.harvard.edu/catalog/ecb00006';

  const records = [
    {
      year: 1994,
      citation: 'Henri Reiling, “Unieke collectie glazen dieren,” <em>Nieuwsbrief Conservering en Restauratie</em>, no. 7 (April 1994). [Dutch; direct article on a Blaschka glass-animal collection. Pagination not supplied by the archival publication register.]',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Blaschka archive / Series VIII publication register ↗</a>`
    },
    {
      year: 1994,
      citation: 'Metta Winter, “Case of the Lost Octopus,” <em>Agriculture &amp; Life Sciences News</em>, November 1994. [Cornell collection feature; archival copy illustrated with an octopus, squid, burrowing worm and sea-anemone models.]',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Blaschka archive / Series VIII publication register ↗</a>`
    },
    {
      year: 1999,
      citation: 'Werner Felgendreher, “Glasblumen von Leopold und Rudolf Blaschka aus Hosterwitz,” <em>Der Elbhang-Kurier</em>, July 1999. [German; direct Blaschka/Hosterwitz feature. Pagination not supplied by the archival publication register.]',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Blaschka archive / Series VIII publication register ↗</a>`
    },
    {
      year: 1999,
      citation: '“Blaschka Marine Animals Unveiled,” <em>Agriculture and Life Sciences News</em>, May 1999. [Cornell institutional collection/reception item; author and pagination not identified in the archival publication register.]',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Blaschka archive / Series VIII publication register ↗</a>`
    },
    {
      year: 1999,
      citation: '“Blaschka Glass Invertebrate Models,” <em>Newsletter</em>, Museum of Natural History, University of Illinois, May 1999. [Institutional collection item; author and pagination not identified in the archival publication register.]',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Blaschka archive / Series VIII publication register ↗</a>`
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '32';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · thirty-second expanded pass';
})();

(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="21"]')) return;

  const harvardArchive = 'https://hollisarchives.lib.harvard.edu/catalog/ecb00006';

  const records = [
    {
      year: 1893,
      citation: 'F.B.W., “Flowers that Fade Not,” <em>Boston Evening Transcript</em>, 1893. [Recorded in Harvard Series VIII: Publications Referencing Leopold and Rudolf Blaschka and Glass Flower Exhibit.]',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Blaschka archives / Series VIII ↗</a>`
    },
    {
      year: 1893,
      citation: 'George Lincoln Goodale, “The Blaschka Glass Flower Collection,” <em>Harvard Graduates’ Magazine</em> 2 (1893).',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a> · <a href="https://www.researchgate.net/publication/404152047_Glaswelten_Materielle_Kulturen_zwischen_Zeigen_und_Verbergen" target="_blank" rel="noopener">Later scholarly citation to Goodale 1893 ↗</a>'
    },
    {
      year: 1901,
      citation: 'No author listed, “The Blaschka Glass Models in the Harvard University Museum,” <em>Harvard Summer School Bulletin</em>, 1901.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 1922,
      citation: 'No author listed, “More ‘Glass Flowers’ at Harvard,” <em>Science</em>, 1922.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 1922,
      citation: 'No author listed, “Glass Grasses Now for the Harvard Museum,” <em>Boston Evening Transcript</em>, 14 February 1922.',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a> · <a href="https://citeseerx.ist.psu.edu/document?doi=38b3ea5123c44a122defdd256f717b3bff644d45&repid=rep1&type=pdf" target="_blank" rel="noopener">Later scholarly citation with date ↗</a>'
    },
    {
      year: 1932,
      citation: 'No author listed, “Harvard Adds Glass Flower Exhibits with New Shipment to Agassiz Museum,” <em>Christian Science Monitor</em>, 1932.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 1932,
      citation: 'No author listed, “University Museum to Show New Glass Plants,” <em>Harvard Crimson</em>, 1932.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 1932,
      citation: 'Max Grossman, “The Amazing Human Drama Behind New Glass Flowers at Harvard,” <em>Boston Post</em>, 1932.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 1936,
      citation: 'No author listed, “Harvard’s Glassified Garden,” <em>Christian Science Monitor</em>, 1936.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 1937,
      citation: 'No author listed, “Secret Art to Die as Man Goes Blind Who Made Harvard Glass Flowers,” <em>Boston Sunday Herald</em>, 1937.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 1937,
      citation: 'No author listed, “Blaschka’s Retirement Marks ‘Glass Flower’ Collection End,” <em>Christian Science Monitor</em>, 1937.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 1938,
      citation: 'No author listed, “Bohemian Maker’s Retirement Completes Harvard’s Glass-Flower Collection,” <em>Life</em>, 28 February 1938, 24.',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a> · <a href="https://books.google.com/books?q=%22Bohemian+maker%27s+retirement+completes+Harvard+glass-flower+collection%22" target="_blank" rel="noopener">Google Books / LIFE search ↗</a>'
    },
    {
      year: 1939,
      citation: 'No author listed, “Secret of Harvard Glass Flowers Dies with Maker, 82, in Germany,” <em>Boston Herald</em>, 3 May 1939.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Blaschka newspaper archive record ↗</a>`
    },
    {
      year: 2001,
      citation: 'Karen Wright, “Works in Progress: Glass Disease,” <em>Discover</em>, January 2001. On deterioration and the early Harvard Glass Flowers conservation programme.',
      links: '<a href="https://www.discovermagazine.com/works-in-progress-21-5586" target="_blank" rel="noopener">Discover Magazine ↗</a>'
    },
    {
      year: 2017,
      citation: 'Noémie Jennifer, “120 Years Later, Harvard’s Garden of Glass Flowers Is Still in Bloom,” <em>VICE</em>, 18 July 2017.',
      links: '<a href="https://www.vice.com/en/article/120-years-later-harvards-garden-of-glass-flowers-is-still-in-bloom/" target="_blank" rel="noopener">VICE ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '21';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1883–2026 · twenty-first expanded pass';
})();

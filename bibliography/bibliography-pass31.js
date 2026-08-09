(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="31"]')) return;

  const harvardArchive = 'https://hollisarchives.lib.harvard.edu/catalog/ecb00006';

  const records = [
    {
      year: 1995,
      citation: 'Bruno P. Kremer, “Die glasernen Wunder aus Sachsen,” <em>Kosmos</em>, March 1995. [German; direct feature on Leopold and Rudolf Blaschka and the Harvard Glass Flowers.]',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Blaschka archive / Series VIII publication register ↗</a>`
    },
    {
      year: 1995,
      citation: 'Henri Reiling, “Levend Glas,” <em>Wetenschap-Cultuur En Samenleving</em>, 10 October 1995. [Dutch; direct Blaschka feature.]',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Blaschka archive / Series VIII publication register ↗</a>`
    },
    {
      year: 1996,
      citation: 'Susan M. Rossi-Wilcox, “Blaschka Glass Flowers,” <em>Glass Art</em>, November–December 1996. [Direct Glass Flowers article; distinct from Rossi-Wilcox’s 1996 Glass Art Society conference paper.]',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Blaschka archive / Series VIII publication register ↗</a>`
    },
    {
      year: 2007,
      citation: 'Harriet Baskas, “At Corning, Art That Imitates Life — Astonishingly,” <em>NPR</em>, 25 June 2007. [On Corning’s <em>Botanical Wonders</em> exhibition, the Harvard Glass Flowers, Blaschka drawings, tools and earlier marine-model work.]',
      links: '<a href="https://www.wlrn.org/npr-breaking-news/2007-06-25/at-corning-art-that-imitates-life-astonishingly" target="_blank" rel="noopener">NPR syndication / WLRN full article ↗</a> · <a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard Series VIII register ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '31';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · thirty-first expanded pass';
})();

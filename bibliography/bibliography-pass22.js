(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="22"]')) return;

  const harvardArchive = 'https://hollisarchives.lib.harvard.edu/catalog/ecb00006';

  const records = [
    {
      year: 1937,
      citation: 'Charles P. Haven, “Ware Family, Glass Flower Patrons, Gave President to Harvard,” <em>Boston Sunday Post</em>, 17 January 1937.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a> · <a href="https://thecela.org/wp-content/uploads/LRR_13_POPULAR-RECEPTION-FOR-HARVARDS-GLASS-FLOWERS.pdf" target="_blank" rel="noopener">2024 reception study confirming date ↗</a>`
    },
    {
      year: 1937,
      citation: 'No author listed, “The Harvard University Collection of Glass Flowers,” <em>Science</em>, 1937.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 1937,
      citation: 'E. L. Yordan, “Harvard’s Unique Glass Flowers,” <em>New York Times Magazine</em>, 1937.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 1937,
      citation: 'Anne Roorbach, “Harvard’s Glass Flowers,” <em>American German Review</em>, 1937.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 1968,
      citation: 'Clarence T. Hubbard, “The Fascinating Glass Art of the Blaschkas,” <em>Antiques Journal</em>, August 1968.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 1986,
      citation: 'Wolfgang Joost, “Marine Invertebraten aus Glas, BLASCHKA-Modelle im Museum der Natur Gotha,” <em>Abhandlungen und Berichte des Museums der Natur Gotha</em> 13 (1986): 51–52 + 2 plates. [German]',
      links: '<a href="https://www.zobodat.at/biografien/Joost_Wolfgang_EntBer_48_0143-0150.pdf" target="_blank" rel="noopener">ZOBODAT author bibliography ↗</a> · <a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>'
    },
    {
      year: 1987,
      citation: 'Leslie Ware, “Forever Flowers of Glass and Magic,” <em>Audubon</em>, 1987.',
      links: `<a href="${harvardArchive}" target="_blank" rel="noopener">Harvard Series VIII archive record ↗</a>`
    },
    {
      year: 2005,
      citation: 'Ann Barger Hannum, “Flowers with Deep Latin American Roots Bloom in Cambridge: The Glass Flowers at the Harvard Museum of Natural History,” <em>ReVista: Harvard Review of Latin America</em> 3, no. 1 (Fall 2004/Winter 2005).',
      links: '<a href="https://revista.drclas.harvard.edu/flowers-with-deep-latin-american-roots-bloom-in-cambridge/" target="_blank" rel="noopener">Harvard ReVista full article ↗</a> · <a href="https://bpb-us-e1.wpmucdn.com/websites.harvard.edu/dist/1/19/files/2020/07/flora_and_fauna.pdf" target="_blank" rel="noopener">Original issue PDF ↗</a>'
    },
    {
      year: 2006,
      citation: 'Steve Bradt, “Eclipsed for Decades, Harvard’s Glass Animals Step Out,” <em>Harvard Gazette</em>, 14 December 2006. On the restored MCZ Blaschka invertebrates and <em>The Glass Sea Treasures of Harvard: The Age of Darwin</em>.',
      links: '<a href="https://news.harvard.edu/gazette/story/2006/12/eclipsed-for-decades-harvards-glass-animals-step-out/" target="_blank" rel="noopener">Harvard Gazette ↗</a>'
    },
    {
      year: 2020,
      citation: 'Donald H. Pfister and Jennifer Brown, “Glass Flowers at Harvard: Blaschka’s Botanical Masterpieces,” <em>Journal of Antiques and Collectibles</em>, 29 June 2020.',
      links: '<a href="https://journalofantiques.com/digital-publications/joac-magazine/features/inspired-plants-glass-flowers-window-botanical-education/" target="_blank" rel="noopener">Journal of Antiques and Collectibles full article ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '22';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1883–2026 · twenty-second expanded pass';
})();

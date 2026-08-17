(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="11"]')) return;

  const records = [
    {
      year: 1883,
      citation: 'James Troop, “Botany at Harvard University,” <em>Botanical Gazette</em> 8(4): 202–204. [Entry retained from Harvard Series VIII; page span bounded by the next article in the BHL issue record.]',
      links: '<a href="https://www.biodiversitylibrary.org/page/5167982" target="_blank" rel="noopener">BHL bibliographic locator ↗</a> · <a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard Series VIII discovery source ↗</a>'
    },
    {
      year: 1894,
      citation: 'F. A. Flückiger, “Die Glasmodelle im Botanischen Museum der Harvard University,” <em>Pharmaceutische Rundschau</em> 12: 202–203. [German]',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard Series VIII discovery source ↗</a> · <a href="https://www.zobodat.at/pdf/Ber-Naturwiss-Ver-fuer-Schwaben_114_0006-0018.pdf" target="_blank" rel="noopener">Bibliographic cross-check ↗</a>'
    },
    {
      year: 1915,
      citation: 'Herman O. Mueller, “Animals of Blown Glass,” <em>The American Museum Journal</em> 15: 399–404.',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard Series VIII discovery source ↗</a> · <a href="https://archive.org/details/americanmuseumjo15amer" target="_blank" rel="noopener">Volume catalogue / scan locator ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '11';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1883–2026 · eleventh expanded pass';
})();

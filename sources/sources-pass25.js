(() => {
  const harvardHeading = document.querySelector('#harvard-digital-archive-title');
  const harvardSection = harvardHeading?.closest('.source-section');
  if (!harvardSection || document.querySelector('#rakow-open-business-books-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'rakow-open-business-books-title');
  section.innerHTML = `
    <p class="source-kicker">Open workshop business corpus</p>
    <h2 id="rakow-open-business-books-title">Rakow order books: customers, sales and accounts as downloadable primary sources</h2>
    <p class="source-note">Two of the workshop’s core commercial books are already identified by the Corning Museum of Glass as downloadable PDFs. They should be treated as corpus sources, with the page images as archival authority and project OCR as a search layer: <a href="rakow-open-business-books-register.json" target="_blank" rel="noopener">rakow-open-business-books-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '1869–1871 · open order book',
      title: '<em>Notizbüchel für 1869–1870</em> — LRBC MS 0013, Box 24.',
      meta: 'Corning’s global-census reconstruction explicitly names this book as a source for original European Blaschka collections and says it is downloadable as a PDF. The working date span extends into 1871. A page-level ingest can recover customer, place, order and early-distribution data without relying on later museum histories.',
      links: '<a href="https://cmog.primo.exlibrisgroup.com/permalink/01CORNING_INST/1m7c70c/alma99873833504126" target="_blank" rel="noopener">Rakow catalogue / digital record ↗</a>'
    },
    {
      type: '1872–1887 · open business/account book',
      title: '<em>Geschäfts-Anmerkungen</em> — LRBC MS 0013, Box 23, Folder 64.',
      meta: 'Corning likewise identifies this volume as a downloadable primary source used to reconstruct original collections. Published archival work locates the Jahres-Rechnung 1872 and Geschäfts-Uebersicht 1873 inside it. This is a high-value corpus for annual sales, dealer shares, payments and institutional customers across the period when the international model trade expanded.',
      links: '<a href="https://cmog.primo.exlibrisgroup.com/permalink/01CORNING_INST/1m7c70c/alma99618813504126" target="_blank" rel="noopener">Rakow catalogue / digital record ↗</a>'
    },
    {
      type: 'Corpus rule',
      title: 'Historical customer, current holder and dealer intermediary remain separate entities.',
      meta: 'The business books can identify who ordered or paid at a given date; they cannot by themselves prove where the same objects are today. The ingest therefore keeps transaction identity apart from the current-collection census and uses model numbers, quantities and later institutional records only for explicit cross-walks.',
      links: '<a href="rakow-open-business-books-register.json" target="_blank" rel="noopener">business-book schema ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '25';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  harvardSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass26.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

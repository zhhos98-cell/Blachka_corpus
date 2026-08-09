(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="10"]')) return;

  const records = [
    {
      year: 2010,
      citation: 'Aurélie Michel, “Les modèles en verre d’invertébrés marins des Blaschka : de l’objet pédagogique à l’œuvre d’art,” <em>Histoire de l’art</em> 67: 71–82. [French]',
      links: '<a href="https://www.persee.fr/doc/hista_0992-2059_2010_num_67_1_3335" target="_blank" rel="noopener">Persée full text ↗</a> · <a href="https://doi.org/10.3406/hista.2010.3335" target="_blank" rel="noopener">DOI ↗</a>'
    },
    {
      year: 2024,
      citation: 'Silvia Ferucci and Gemma Giani, “La produzione Blaschka: studio e restauro di cinque esemplari sconosciuti, appartenenti alle collezioni di due Licei da Trento e Pavia,” in Marina Uboldi, Simone G. Lerma, and Marta Bagnasco, eds., <em>Il vetro nel Medioevo. Atti delle XXI Giornate Nazionali di Studio sul Vetro (Genova, 28–29 maggio 2022)</em>, 265–274. Cremona, 2024. ISBN 978-88-945347-2-6. [Italian]',
      links: '<a href="https://www.storiadelvetro.it/giornate-di-studio/" target="_blank" rel="noopener">AIHV proceedings record ↗</a> · <a href="https://www.storiadelvetro.it/wp-content/uploads/2022/05/XXI-Giornate-AIHV_Genova-2022_Abstract_compr.pdf" target="_blank" rel="noopener">Open conference abstract ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '10';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1894–2026 · tenth expanded pass';
})();

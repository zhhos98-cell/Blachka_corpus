(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="9"]')) return;

  const records = [
    {
      year: 1998,
      citation: 'Christa Riedl-Dorn, <em>Das Haus der Wunder: Zur Geschichte des Naturhistorischen Museums in Wien</em>. Wien: Holzhausen, 1998. 308 pp. ISBN 3-900518-91-2. Includes the museum’s Blaschka holdings in its institutional history. [German]',
      links: '<a href="https://www.nhm.at/forschung/archiv_fuer_wissenschaftsgeschichte/sammlungen/weiterfuehrende_literatur_zur_abteilung" target="_blank" rel="noopener">Naturhistorisches Museum Wien ↗</a> · <a href="https://erdteilallegorien.univie.ac.at/biblio/haus-der-wunder" target="_blank" rel="noopener">University of Vienna bibliographic record ↗</a>'
    },
    {
      year: 2026,
      citation: 'Florian Huber, “Fragile Natur: Die Glasobjekte von Leopold und Rudolf Blaschka,” in Margarete Vöhringer and Christof Windgätter, eds., <em>Glaswelten: Materielle Kultur zwischen Zeigen und Verbergen</em>, 95–105. Berlin: Kulturverlag Kadmos, 2026. [German]',
      links: '<a href="https://www.kulturverlag-kadmos.de/programm/details/glaswelten" target="_blank" rel="noopener">Publisher record + open-access volume ↗</a> · <a href="https://doi.org/10.55309/h8nj26p0" target="_blank" rel="noopener">DOI ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '9';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1894–2026 · ninth expanded pass';
})();

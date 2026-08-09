(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="18"]')) return;

  const records = [
    {
      year: 1831,
      citation: 'T.-P. Danger, <em>The Art of Glass-Blowing; or, Plain Instructions for Making the Chemical and Philosophical Instruments Which Are Formed of Glass</em>. London: Bumpus & Griffin, 1831. x + 112 pp. Free translation of <em>L’art du souffleur à la lampe</em>. [Material-context source; blowpipe, glass and enamel working, scientific instruments.]',
      links: '<a href="https://www.gutenberg.org/ebooks/55266" target="_blank" rel="noopener">Project Gutenberg full text ↗</a> · <a href="https://openlibrary.org/books/OL6040235M/The_art_of_glass-blowing" target="_blank" rel="noopener">Open Library record ↗</a>'
    },
    {
      year: 1862,
      citation: 'Eugène Péligot, <em>Douze leçons sur l’art de la verrerie</em>. Paris: Imprimerie Bourdier et Cie, 1862. 116 pp. [French; material-context source.]',
      links: '<a href="https://annales.ensmp.fr/numeros/ANN_1862_S06_02/ANN_1862_S06_02.pdf" target="_blank" rel="noopener">Annales des Mines contemporary bibliography ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield composite-volume record ↗</a>'
    },
    {
      year: 1877,
      citation: 'Eugène Péligot, <em>Le verre: son histoire, sa fabrication</em>. Paris: G. Masson, 1877. iii + 495 pp. [French; material-context source; manufacture, glass composition and historical practice.]',
      links: '<a href="https://search.worldcat.org/fr/title/2741436" target="_blank" rel="noopener">WorldCat record ↗</a> · <a href="https://ci.nii.ac.jp/ncid/BA71129339" target="_blank" rel="noopener">CiNii bibliographic record ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a>'
    },
    {
      year: 1910,
      citation: 'Bernard D. Bolas, <em>Glass-Blowing: Applied to Laboratory Work; Containing Also the Elements of Decorative Glass-Blowing</em>. London: Routledge / Dawbarn & Ward, [1910]. 61 pp. The Homeworker’s Series, no. 12. [Material-context source.]',
      links: '<a href="https://ci.nii.ac.jp/ncid/BA66490334" target="_blank" rel="noopener">CiNii bibliographic record ↗</a> · <a href="https://asgs-glass.org/wp-content/uploads/2018/05/ASGS-Proceedings-1998.pdf" target="_blank" rel="noopener">ASGS scientific-glassblowing bibliography ↗</a>'
    },
    {
      year: 1918,
      citation: 'Henri Vigreux, <em>Le soufflage du verre dans les laboratoires scientifiques et industriels</em>. Paris: Dunod et Pinat, 1918. xiii + 248 pp. [French; material-context source; scientific and industrial laboratory glassblowing.]',
      links: '<a href="https://les-souffleurs-de-la-science.fr/ouvrage-dhenri-vigreux/" target="_blank" rel="noopener">Association Française des Souffleurs de Verre Scientifiques ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield 1918/1920 editions ↗</a>'
    },
    {
      year: 1923,
      citation: 'H. P. Waran, <em>Elements of Glass-Blowing</em>. London: G. Bell and Sons, 1923. ix + 116 pp. [Material-context source; research-student glass apparatus and repair.]',
      links: '<a href="https://www.nature.com/articles/112201c0" target="_blank" rel="noopener">Contemporary <em>Nature</em> review ↗</a> · <a href="https://asgs-glass.org/wp-content/uploads/2018/05/ASGS-Proceedings-1998.pdf" target="_blank" rel="noopener">ASGS scientific-glassblowing bibliography ↗</a>'
    },
    {
      year: 1924,
      citation: 'Carl Woytacek, <em>Lehrbuch der Glasbläserei: eine Anleitung zur Erlernung derselben und Anwendung in wissenschaftlichen und technischen Laboratorien sowie im Unterrichte an Fortbildungs- und höheren Gewerbeschulen</em>. Hamburg: Meissner, 1924. xii + 279 pp. [German; material-context source.]',
      links: '<a href="https://jyu.finna.fi/Record/vaari.1165512" target="_blank" rel="noopener">Finnish National Repository Library record ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a>'
    },
    {
      year: 1937,
      citation: 'M. C. Nokes, <em>Modern Glass Working and Laboratory Technique</em>. London: William Heinemann, 1937. xiv + 153 pp. [Material-context source; laboratory glass, manipulation, repair and apparatus.]',
      links: '<a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a> · <a href="https://electronicsandbooks.com/edt/manual/Magazine/J/Journal%20of%20the%20Chemical%20Society%20%28Resumed%29%20UK/1938/JR93800BB001.pdf" target="_blank" rel="noopener">Chemical Society library record ↗</a>'
    },
    {
      year: 1943,
      citation: 'R. H. Wright, <em>Manual of Laboratory Glass-Blowing</em>. Brooklyn, NY: Chemical Publishing Co., 1943. ix + 90 pp. and 11 plates. [Material-context source; glass composition, tools, fundamental and advanced apparatus construction.]',
      links: '<a href="https://www.nature.com/articles/154193d0" target="_blank" rel="noopener">Contemporary <em>Nature</em> review ↗</a> · <a href="https://ci.nii.ac.jp/ncid/BA10503668" target="_blank" rel="noopener">CiNii bibliographic record ↗</a>'
    },
    {
      year: 1946,
      citation: 'Julius D. Heldman, <em>Techniques of Glass Manipulation in Scientific Research</em>. New York: Prentice-Hall, 1946. xii + 132 pp. Prentice-Hall Chemistry Series. [Material-context source.]',
      links: '<a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a> · <a href="https://asgs-glass.org/wp-content/uploads/2018/05/ASGS-Proceedings-1998.pdf" target="_blank" rel="noopener">ASGS scientific-glassblowing bibliography ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '18';
    article.dataset.year = String(record.year);
    article.dataset.bibContext = 'material';
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1831–2026 · eighteenth expanded pass';
})();

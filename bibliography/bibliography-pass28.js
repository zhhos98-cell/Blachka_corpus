(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="28"]')) return;

  const records = [
    {
      year: 2016,
      citation: 'Claudia Feigl, “Glasmodell einer Blumenkohlqualle,” <em>Objekt des Monats</em>, Die Sammlungen an der Universität Wien, January 2016. [German; Vienna Blaschka collection, teaching use, manufacture and display history.]',
      links: '<a href="https://bibliothek.univie.ac.at/sammlungen/objekt_des_monats/003866.html" target="_blank" rel="noopener">University of Vienna ↗</a>'
    },
    {
      year: 2017,
      citation: 'Claudia Feigl, “Glasmodell eines Röhrenpolypen,” <em>Objekt des Monats</em>, Die Sammlungen an der Universität Wien, January 2017. [German; reconstructs the Vienna–Trieste–Blaschka exchange and order history.]',
      links: '<a href="https://bibliothek.univie.ac.at/sammlungen/objekt_des_monats/003878.html" target="_blank" rel="noopener">University of Vienna ↗</a>'
    },
    {
      year: 2018,
      citation: 'Maximilian Petrasko, “Glasmodell einer Seenelke,” <em>Objekt des Monats</em>, Die Sammlungen an der Universität Wien, August 2018. [German; Blaschka catalogue identification, teaching use, material analysis, CT research and exhibition history.]',
      links: '<a href="https://bibliothek.univie.ac.at/sammlungen/objekt_des_monats/003898.html" target="_blank" rel="noopener">University of Vienna ↗</a>'
    },
    {
      year: 2019,
      citation: 'Ines Kaffka, “Glasbläserkunst für die Wissenschaft: Lupenreine Täuschungen,” <em>Der Spiegel</em>, 18 July 2019. [German; on Guido Mocafico’s photographic documentation of Blaschka marine models across European collections.]',
      links: '<a href="https://www.spiegel.de/stil/leopold-und-rudolf-blaschka-meerestiere-aus-glas-a-1277977.html" target="_blank" rel="noopener">Der Spiegel ↗</a>'
    },
    {
      year: 2020,
      citation: 'Claudia Feigl, “Die Glasmodelle mariner Wirbelloser von Leopold und Rudolf Blaschka als Ergebnis eines Netzwerks europäischer Wissenschaftler des ausgehenden 19. Jahrhunderts,” in Johannes Seidl and Ingrid Kästner, eds., <em>Tauschen und Schenken: Wissenschaftliche Sammlungen als Resultat europäischer Zusammenarbeit</em>, 57–72. Europäische Wissenschaftsbeziehungen 20. Düren: Shaker Verlag, 2020. [German]',
      links: '<a href="https://www.researchgate.net/publication/345006479_Die_Flora_exsiccata_Austro-Hungarica_des_Anton_Kerner_von_Marilaun_1831-1898_ein_europaisches_Sammelprojekt_und_antinationalistischer_Vermittler_zwischen_den_Volkern_der_Habsburgermonarchie" target="_blank" rel="noopener">Full volume / contents and imprint ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '28';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · twenty-eighth expanded pass';
})();

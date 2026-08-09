(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="16"]')) return;

  const records = [
    {
      year: 2003,
      citation: 'Henri Reiling, “Beter dan de natuur” [“Better than Nature”], in Jan Brand and Alex de Vries, eds., <em>NEO</em>, 221–235. Utrecht: Centraal Museum, 2003. [Dutch]',
      links: '<a href="https://produccioncientifica.ucm.es/documentos/61973b5ccac2990acf7bb4c4" target="_blank" rel="noopener">Complutense bibliographic cross-check ↗</a> · <a href="https://www.pedocs.de/volltexte/2013/7211/pdf/Haeder_Kunstformen_als_Wissensrepraesentationen.pdf" target="_blank" rel="noopener">Later Blaschka bibliography / English-translation citation ↗</a>'
    },
    {
      year: 2006,
      citation: 'Meike Niepelt, “Ein Meer aus Kunst und Wissenschaft: Leopold und Rudolf Blaschka: Kunsthandwerker, Glasmodelleure, Naturforscher,” in Karlheinz Wiegmann and Meike Niepelt, eds., <em>Kunstformen des Meeres: Zoologische Glasmodelle von Leopold und Rudolf Blaschka 1863–1890</em>, 13–36. Tübinger Kataloge 74. Tübingen: Stadtmuseum Tübingen, 2006. [German]',
      links: '<a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener">Open Stadtmuseum Tübingen catalogue PDF ↗</a>'
    },
    {
      year: 2009,
      citation: 'Henri Reiling, “Über Blaschkas Glasmodelle und die zeitgenössische Naturgeschichte, mit einem Anhang über Brendels botanische Modelle,” in Michael Kaasch and Joachim Kaasch, eds., <em>Natur und Kultur</em>, <em>Verhandlungen zur Geschichte und Theorie der Biologie</em> 14, 267–282. Berlin: Verlag für Wissenschaft und Bildung, 2009. [German]',
      links: '<a href="https://bibliothek.univie.ac.at/sammlungen/objekt_des_monats/003848.html" target="_blank" rel="noopener">University of Vienna bibliographic record ↗</a> · <a href="https://revistas.ucm.es/index.php/ANHA/en/article/view/78052" target="_blank" rel="noopener">Later scholarly bibliography ↗</a>'
    },
    {
      year: 2012,
      citation: 'Sonja Häder, “Kunstformen als Wissensrepräsentationen: Die naturwissenschaftlichen Glasmodelle von Leopold (1822–1895) und Rudolf (1857–1939) Blaschka,” in Karin Priem, Gudrun M. König, and Rita Casale, eds., <em>Die Materialität der Erziehung: Kulturelle und soziale Aspekte pädagogischer Objekte</em>, 200–217. <em>Zeitschrift für Pädagogik</em>, Beiheft 58. Weinheim and Basel: Beltz, 2012. [German]',
      links: '<a href="https://www.pedocs.de/volltexte/2013/7211/pdf/Haeder_Kunstformen_als_Wissensrepraesentationen.pdf" target="_blank" rel="noopener">peDOCS full text ↗</a> · <a href="https://doi.org/10.25656/01:7211" target="_blank" rel="noopener">DOI ↗</a>'
    },
    {
      year: 2015,
      citation: 'C. Giles Miller, “The Blaschka Glass Models of Marine Invertebrates at the NHM, London,” <em>The Palaeontology Newsletter</em> 89: 69–72.',
      links: '<a href="https://palass.org/sites/default/files/media/publications/newsletters/number_89/number89.pdf" target="_blank" rel="noopener">Palaeontological Association full issue PDF ↗</a>'
    },
    {
      year: 2016,
      citation: 'Elizabeth R. Brill, “Attention to Detail: Restoring the Collection of Blaschka Marine Invertebrates,” in Elizabeth R. Brill and Florian Huber, eds., <em>Sea Creatures in Glass: The Blaschka Marine Animals at Harvard</em>, 17–23. New York: Scala Arts Publishers, 2016.',
      links: '<a href="https://www.si.edu/object/sea-creatures-glass-blaschka-marine-animals-harvard-elizabeth-r-brill-florian-huber-photography%3Asiris_sil_1155849" target="_blank" rel="noopener">Smithsonian Libraries catalogue record ↗</a> · <a href="https://www.researchgate.net/publication/321951450_Ideas_made_glass_Blaschka_glass_models_at_Canterbury_Museum" target="_blank" rel="noopener">Canterbury bibliography cross-check ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '16';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1883–2026 · sixteenth expanded pass';

  if (!document.querySelector('script[data-bib-pass17-loader]')) {
    const pass17 = document.createElement('script');
    pass17.src = 'bibliography-pass17.js?v=20260809-1';
    pass17.dataset.bibPass17Loader = 'true';
    document.head.appendChild(pass17);
  }
})();
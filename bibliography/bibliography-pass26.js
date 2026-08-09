(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="26"]')) return;

  const records = [
    {
      year: 2011,
      citation: 'Vladimír Dufek, <em>Genealogie hodkovického sklářského rodu Blaschků</em>. Praha, 2011. 19 pp. [Czech; genealogy of the Blaschka glassmaking family.]',
      links: '<a href="https://antikvariat11.cz/kategorie/umeni-estetika-vytvarna-vychova" target="_blank" rel="noopener">Czech bibliographic listing ↗</a> · <a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard Blaschka archive genealogy context ↗</a>'
    },
    {
      year: 2012,
      citation: 'Vladimír Dufek, <em>Skleněný svět Blaschků</em>. 2nd expanded ed. Praha: V. Dufek, 2012. 60 pp. ISBN 978-80-260-2882-6. [Czech]',
      links: '<a href="https://www.ptejteseknihovny.cz/dotazy/cesko-nemecky-fond-budoucnosti-1" target="_blank" rel="noopener">Czech library bibliographic record ↗</a>'
    },
    {
      year: 2012,
      citation: 'Vladimír Dufek, <em>Blaschkas Glaswelt</em>. 1st ed. Prague: Vladimír Dufek, 2012. 52 pp. ISBN 978-80-254-9558-2. [German; includes bibliographical references, pp. 50–52.]',
      links: '<a href="https://openlibrary.org/works/OL32212489W/Blaschkas_Glaswelt" target="_blank" rel="noopener">Harvard-derived bibliographic record ↗</a>'
    },
    {
      year: 2012,
      citation: 'Zuzana Cílová and Vladimír Dufek, “Průzkum chemického složení zbytků skla z bývalé dílny Leopolda Blaschky a jeho syna Rudolfa,” <em>Keramický zpravodaj</em> 28, no. 2 (2012): 10–14. [Czech; chemical analysis of glass remnants from the former Blaschka workshop.]',
      links: '<a href="https://katalog.cbvk.cz/arl-cbvk/cs/detail-cbvk_us_cat-0380493-Keramicky-zpravodaj/" target="_blank" rel="noopener">Jihočeská vědecká knihovna issue record ↗</a> · <a href="https://www.silis.cz/keramicky-zpravodaj/uvod" target="_blank" rel="noopener">Keramický zpravodaj journal information ↗</a>'
    },
    {
      year: 2014,
      citation: 'Sabine Hackethal, “Maritime Creatures Made of Glass,” in Heinz Peter Brogiato and Klaus-Peter Kiedel, eds., <em>Research Travel Exploration: The Lifeworlds of the Leibniz Association Archives</em>, 38–39. Halle (Saale): Mitteldeutscher Verlag, 2014.',
      links: '<a href="https://www.museumfuernaturkunde.berlin/de/museum/heute/team/sabine.hackethal" target="_blank" rel="noopener">Museum für Naturkunde author bibliography ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '26';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · twenty-sixth expanded pass';
})();

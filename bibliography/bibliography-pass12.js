(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="12"]')) return;

  const records = [
    {
      year: 2006,
      citation: 'Nigel T. Monaghan, Julia D. Sigwart, and Catherine A. McGuinness, <em>Blaschka Glass Models</em>. Dublin: National Museum of Ireland, 2006. 12 pp. ISBN 0-901777-56-0.',
      links: '<a href="https://www.museum.ie/en-IE/Collections-Research/Natural-History-Collections/Collections-List/Blaschka-Glass" target="_blank" rel="noopener">National Museum of Ireland bibliography ↗</a> · <a href="https://obnb.uk/p13576342-blaschka-glass-models" target="_blank" rel="noopener">OBNB catalogue record ↗</a>'
    },
    {
      year: 2018,
      citation: 'Andreas Beitin and Roger Diederen, eds., <em>Lust der Täuschung: Von antiker Kunst bis zur Virtual Reality</em>. Munich: Hirmer, 2018. 264 pp. ISBN 978-3-7774-3139-0. Exhibition catalogue. [German]',
      links: '<a href="https://www.kunsthalle-muc.de/lust-der-taeuschung/" target="_blank" rel="noopener">Kunsthalle München exhibition record ↗</a> · <a href="https://stadtgeschichte-muenchen.de/literatur/d_literatur.php?id=9176" target="_blank" rel="noopener">Bibliographic record ↗</a>'
    },
    {
      year: 2021,
      citation: 'Marc Gundel and Martina Padberg, with Rita E. Täuber, eds., <em>Fragile – Alles aus Glas! Grenzbereiche des Skulpturalen</em>. Cologne: Snoeck, 2021. 160 pp. ISBN 978-3-86442-375-8. Exhibition catalogue; includes a Blaschka <em>Carmarina hastata</em> model in its art-historical framing of glass. [German]',
      links: '<a href="https://snoeck.de/shop/fragile-alles-aus-glas/" target="_blank" rel="noopener">Publisher catalogue record ↗</a> · <a href="https://museen.heilbronn.de/fileadmin/daten/museen/KH_Ausstellungen/KH_Ausstellung_Fragile/Katalog_Fragile.pdf" target="_blank" rel="noopener">Museum catalogue record ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '12';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1883–2026 · twelfth expanded pass';
})();

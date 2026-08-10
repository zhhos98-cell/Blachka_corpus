(() => {
  if (!window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260810-4';
    ui.defer = true;
    document.head.appendChild(ui);
  }

  const intro = document.querySelector('.source-intro');
  const firstSection = document.querySelector('.source-section');
  const list = firstSection?.querySelector('.source-list');
  if (!intro || !list || list.querySelector('[data-source-pass="2"]')) return;

  if (!document.querySelector('.entry-first-note')) {
    const note = document.createElement('p');
    note.className = 'source-note entry-first-note';
    note.textContent = 'Entry-first policy: this index records bibliographic identity, copy or repository location, and stable catalogue locators first. Full text is retrieved only when a specific research question requires it.';
    intro.insertAdjacentElement('afterend', note);
  }

  const records = [
    {date:'1863 · contemporary notice',citation:'Ludwig Reichenbach, “Marine-Aquarien mit Actinien oder Strahlblumenpolypen in naturgetreuen Modellen,” <em>Leopoldina</em>, 4. Heft (1863).',meta:'Contemporary Dresden notice associated with the earliest phase of Leopold Blaschka’s marine models. Recorded here as a source entry; no local full-text copy is being harvested.',links:'<a href="https://de.wikisource.org/wiki/Haan:Heinrich_Gottlieb_Ludwig_Reichenbach" target="_blank" rel="noopener">Reichenbach bibliography locator ↗</a>'},
    {date:'1864 · contemporary notice',citation:'Ludwig Reichenbach, “Glasmodelle lebender Schnecken,” <em>Allgemeine naturhistorische Zeitung</em> (1864): 231.',meta:'A second contemporary notice documenting glass models of living snails. Retained as metadata first, pending copy-level bibliographic collation.',links:'<a href="https://de.wikisource.org/wiki/Haan:Heinrich_Gottlieb_Ludwig_Reichenbach" target="_blank" rel="noopener">Reichenbach bibliography locator ↗</a>'},
    {date:'ca. 1870 / acquired 1871 · workshop catalogue',citation:'Leopold Blaschka, <em>Marine Aquarien mit Actinien: Blumenpolypen u.s.w. Zierde für elegante Zimmer wie zur Belehrung für Unterrichtsanstalten und für Museen künstlich und höchst naturgetreu dargestellt</em>. Dresden, [ca. 1870].',meta:'The Tübingen catalogue identifies a Natural History Museum London copy whose cover note records acquisition in 1871. The catalogue is described as listing 271 models.',links:'<a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener">Tübingen bibliographic record ↗</a>'},
    {date:'ca. 1872 / 1874 · workshop price list',citation:'Leopold Blaschka, <em>Wenig bekannte Seethiere, welche man in natürlichen Exemplaren in Sammlungen nicht aufbewahren kann in höchst naturgetreuen lebensfrischen und dauerhaften Modellen</em>. 3. Aufl. Dresden, [ca. 1872 / 1874].',meta:'Copy-level dating remains deliberately open. Tübingen describes the third edition as [ca. 1872] and notes a British Library acquisition estimate of 1874; Google Books metadata dates the third-edition price list to January 1874.',links:'<a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener">Tübingen catalogue note ↗</a> · <a href="https://play.google.com/store/books/details?id=qUlBy2c148AC" target="_blank" rel="noopener">Google Books metadata ↗</a>'},
    {date:'1885 · workshop catalogue',citation:'Leopold Blaschka, <em>Katalog über Blaschka’s Modelle von wirbellosen Thieren dargestellt von Leopold Blaschka in Hosterwitz bei Dresden</em>. Stolpen: Druck Gustav Winter, 1885.',meta:'The Tübingen exhibition catalogue reproduces the title and identifies the copy as National Museums and Galleries of Wales, with the scan supplied by Sternwarte Kremsmünster.',links:'<a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener">Tübingen copy-level locator ↗</a>'}
  ];

  [...records].reverse().forEach(record => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '2';
    article.innerHTML = `<p class="source-type">${record.date}</p><h3>${record.citation}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.prepend(article);
  });
})();
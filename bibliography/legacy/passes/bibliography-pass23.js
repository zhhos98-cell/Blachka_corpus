(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="23"]')) return;

  const tuebingen = 'https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf';

  const records = [
    {
      year: 1870,
      citation: 'Leopold Blaschka, <em>Marine Aquarien mit Actinien: Blumenpolypen u.s.w. Zierde für elegante Zimmer wie zur Belehrung für Unterrichtsanstalten und für Museen künstlich und höchst naturgetreu dargestellt</em>. Dresden, c. 1870–1871. [German; early workshop catalogue / price-list tradition.]',
      links: `<a href="${tuebingen}" target="_blank" rel="noopener">Tübingen 2006 sourcebook / bibliographic record ↗</a>`
    },
    {
      year: 1874,
      citation: 'Leopold Blaschka, <em>Wenig bekannte Seethiere, welche man in natürlichen Exemplaren in Sammlungen nicht aufbewahren kann, in höchst naturgetreuen, lebensfrischen und dauerhaften Modellen</em>. 3rd ed. Dresden, 1874. [German; price list.]',
      links: '<a href="https://play.google.com/store/books/details/Leopold_Blaschka_Wenig_bekannte_Seethiere_in_h%C3%B6chs?id=qUlBy2c148AC" target="_blank" rel="noopener">Google Books / digitized 1874 edition ↗</a> · <a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener">Tübingen bibliography ↗</a>'
    },
    {
      year: 1878,
      citation: 'Henry A. Ward, <em>Catalogue of Glass Models of Invertebrate Animals: H. A. Ward’s Natural Science Establishment, Rochester, N.Y.</em> Rochester, NY: E. R. Andrews Book and Job Printer, 1878. [Commercial catalogue for Blaschka invertebrate models.]',
      links: '<a href="https://search.worldcat.org/title/Catalogue-of-glass-models-of-invertebrate-animals/oclc/21804505" target="_blank" rel="noopener">WorldCat 1878 record ↗</a> · <a href="https://opac.museogalileo.it/imss/search?dls=true&h=any_bc&o=score&p=582&q=Fortescue%2C+Peter%2C+Sir%2C+1620+or+21-1685&s=25&t=1&v=l" target="_blank" rel="noopener">Museo Galileo catalogue record ↗</a>'
    },
    {
      year: 1881,
      citation: 'Rudolf Blaschka, “Hydroidquallen oder Craspedoten,” <em>Sitzungs-Berichte der Naturwissenschaftlichen Gesellschaft ISIS zu Dresden</em>, Jahrgang 1880 (Dresden, 1881): 45–49. [German]',
      links: `<a href="${tuebingen}" target="_blank" rel="noopener">Tübingen bibliography ↗</a> · <a href="https://www.zobodat.at/pdf/Archiv-Naturgeschichte_48-2_0577-0690.pdf" target="_blank" rel="noopener">Contemporary bibliographic notice ↗</a>`
    },
    {
      year: 1888,
      citation: 'Henry A. Ward, <em>Catalogue of Glass Models of Invertebrate Animals</em>. Rochester, NY: Judson J. Withall Book and Job Printer, 1888. [Expanded Ward catalogue of Blaschka invertebrate models.]',
      links: '<a href="https://onlinebooks.library.upenn.edu/webbin/book/lookupname?key=Ward%2C+Henry+A.+%28Henry+Augustus%29%2C+1834-1906" target="_blank" rel="noopener">Online Books Page / HathiTrust route ↗</a> · <a href="https://cms.canterburymuseum.com/assets/Canterbury-Museum-Records-2017.pdf?v=1678162143" target="_blank" rel="noopener">Published bibliography confirming 1888 imprint ↗</a>'
    },
    {
      year: 1990,
      citation: 'David Whitehouse, “The Amazing Blaschkas,” <em>The Glass Art Society Journal</em> (1990): 78–84.',
      links: `<a href="${tuebingen}" target="_blank" rel="noopener">Tübingen bibliography ↗</a> · <a href="https://www.warmus.com/Blaschka%20Sea%20Creatures%20Cornell%20Warmus.htm" target="_blank" rel="noopener">Warmus endnote cross-check ↗</a>`
    },
    {
      year: 1991,
      citation: 'David Whitehouse, “The Blaschka Animals,” <em>Glass</em>, no. 44 (Summer 1991): 36.',
      links: '<a href="https://www.warmus.com/Blaschka%20Sea%20Creatures%20Cornell%20Warmus.htm" target="_blank" rel="noopener">Warmus endnote cross-check ↗</a> · <a href="https://irishmuseums.org/wp-content/uploads/2026/03/Museum-Ireland-Vol-13-2003-Irish-Museums-Association.pdf" target="_blank" rel="noopener">Museum Ireland bibliography cross-check ↗</a>'
    },
    {
      year: 1993,
      citation: 'Rika Smith McNally and Nancy Buschini, “The Harvard Glass Flowers: Materials and Techniques,” <em>Journal of the American Institute for Conservation</em> 32, no. 3 (1993): 231–240.',
      links: '<a href="https://doi.org/10.1179/019713693806124893" target="_blank" rel="noopener">DOI / Taylor & Francis ↗</a> · <a href="https://cool.culturalheritage.org/jaic/articles/jaic32-03-002.html" target="_blank" rel="noopener">Conservation Online full text ↗</a>'
    },
    {
      year: 1997,
      citation: 'Gerhard Scholtz, “Glasmodell eines marinen Polychaeten aus der Werkstatt von Leopold und Rudolf Blaschka,” in Christoph von Campenhausen, ed., <em>Andenken Zoologischer Vergangenheit</em>, 78–79. Mainz, 1997. [German]',
      links: '<a href="https://www.biologie.hu-berlin.de/de/gruppenseiten/compzool/till-ramm/people/publikationen-gerhard-scholtz/%40%40download/file/Publikationen.pdf" target="_blank" rel="noopener">Humboldt-Universität author bibliography ↗</a>'
    },
    {
      year: 2001,
      citation: 'William Warmus, “More Than Art: The Blaschka Marine Invertebrates,” <em>Glass</em>, Summer 2001. [Published essay on the Cornell collection; illustrated author web version available.]',
      links: '<a href="https://www.warmus.com/Blaschka%20Sea%20Creatures%20Cornell%20Warmus.htm" target="_blank" rel="noopener">Author’s illustrated web version ↗</a> · <a href="https://www.warmus.com/resume.htm" target="_blank" rel="noopener">Author publication list ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '23';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · twenty-third expanded pass';

  if (!document.querySelector('script[data-bib-pass24-loader]')) {
    const pass24 = document.createElement('script');
    pass24.src = 'bibliography-pass24.js?v=20260809-1';
    pass24.dataset.bibPass24Loader = 'true';
    document.head.appendChild(pass24);
  }
})();

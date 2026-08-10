(() => {
  const printHeading = document.querySelector('#dealer-sales-print-title');
  const printSection = printHeading?.closest('.source-section');
  if (!printSection || document.querySelector('#dealer-upstream-supply-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-upstream-supply-title');
  section.innerHTML = `
    <p class="source-kicker">Before resale</p>
    <h2 id="dealer-upstream-supply-title">Dealers assembled supply before they distributed it</h2>
    <p class="source-note">Ward, Damon and Frič were embedded in upstream collecting and preservation systems as well as downstream sales. The evidence below is deliberately comparative: specimen procurement does not become Blaschka evidence unless a source explicitly joins the transactions. Canonical register: <a href="dealer-upstream-supply-register.json" target="_blank" rel="noopener">dealer-upstream-supply-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Ward · commissioned collecting · 1873–1879',
      title: 'William T. Hornaday’s early expeditions show Ward’s Natural Science Establishment extending upstream into field collecting and preservation.',
      meta: 'The Library of Congress chronology records Hornaday joining Ward in 1873 and then undertaking expeditions to Florida, Cuba and the Bahamas, South America, and from 1877 to 1879 India, Ceylon, the Malay Peninsula and Borneo. A contemporary Nature review states that Ward sent him to India to collect zoological desiderata, especially skins and skeletons. Ward therefore generated supply through expedition labour and preservation expertise rather than merely reselling what arrived in Rochester.',
      links: '<a href="https://findingaids.loc.gov/repositories/19/resources/5431" target="_blank" rel="noopener">Hornaday Papers finding aid ↗</a> · <a href="https://www.nature.com/articles/033173a0" target="_blank" rel="noopener">1885 Nature review ↗</a>'
    },
    {
      type: 'Damon · collector → dealer → museum',
      title: 'NHM acquisition records expose the upstream people behind Damon’s stock.',
      meta: 'The NHM Damon authority record identifies mollusca from Table Cape, Tasmania, collected by R. M. Johnston and purchased from Damon; another record describes American Silurian fossils sent by Paul Mohr through Damon. These are not Blaschka transactions. They show Damon acting as an aggregator and routing point for material gathered by other collectors before institutional resale.',
      links: '<a href="https://www.nhm.ac.uk/CalmView/Record.aspx?id=PX32&amp;src=CalmView.Persons" target="_blank" rel="noopener">NHM Damon acquisition network ↗</a>'
    },
    {
      type: 'Frič · West Africa → Prague · preservation infrastructure',
      title: 'Frič sent collecting containers outward before specimens travelled back to his Prague business.',
      meta: 'Grant Museum research reports that Frič wrote to Enrique Stanko Vráz in Africa requesting specimens and sent crates with alcohol-filled glass containers for preservation and shipment to Prague. Surviving termite preparations retain multiple securing bands; their jars were originally protected against leakage with paraffin-wax paper and twine. This is a strong comparator for Blaschka packing because the dealer was already managing fragile containers, internal stabilisation, preservation media and long-distance transit in another product category.',
      links: '<a href="https://blogs.ucl.ac.uk/museums/2016/11/11/specimen-of-the-week-265-termite-collection/" target="_blank" rel="noopener">Grant Museum Frič–Vráz reconstruction ↗</a>'
    },
    {
      type: 'Commercial implication',
      title: 'The dealer had two directional material problems: making nature collectable upstream and making commodities distributable downstream.',
      meta: 'Ward commissioned collectors; Damon connected named collectors to museum buyers; Frič supplied preservation containers to field collectors. Their later handling of Blaschka models therefore entered businesses already skilled at classifying, preserving, packing, documenting and routing difficult natural-history material. This comparison does not collapse specimens and models into one category; it gives us a control for asking what glass changed in an existing logistics system.',
      links: '<a href="dealer-upstream-supply-register.json" target="_blank" rel="noopener">comparative questions ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '35';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  printSection.insertAdjacentElement('afterend', section);
})();

(() => {
  const dealerHeading = document.querySelector('#dealer-archives-title');
  const dealerSection = dealerHeading?.closest('.source-section');
  if (!dealerSection || document.querySelector('#dealer-comparators-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-comparators-title');
  section.innerHTML = `
    <p class="source-kicker">Commercial comparison</p>
    <h2 id="dealer-comparators-title">Dealer ecology and transaction comparators</h2>
    <p class="source-note">These records are controls, not additional Blaschka dealers. They preserve comparable nineteenth-century natural-history trade in the same archives, institutions, or commercial workflows and help separate object-specific practices from ordinary dealer procedure. Machine-readable register: <a href="dealer-comparator-register.json" target="_blank" rel="noopener">dealer-comparator-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Germany · controlled receiving-side dealer series',
      title: 'Bayerisches Hauptstaatsarchiv — Zoologische Staatssammlung acquisition files: Frič 113, Schlüter & Söhne 123, Damon 124, Ward 127, and adjacent dealer files.',
      meta: 'The same zoological institution filed acquisitions from all three documented Blaschka dealer routes alongside competing natural-history traders. The files are not automatically Blaschka records. Their value is comparative: one administrative system can be used to compare ordering, catalogues, prices, receipts, exchange and other acquisition paperwork across dealers.',
      links: '<a href="https://www.gda.bayern.de/service/findmitteldatenbank/Kapitel/a1f20232-b9e9-410d-9ba2-131684437bc8" target="_blank" rel="noopener">BayHStA Zoologische Staatssammlung finding aid ↗</a>'
    },
    {
      type: 'Germany · local dealer ecology, 1878–1884',
      title: 'Stadtarchiv Hildesheim — Best. 741, Zoologische Sammlung allgemein: V. Frič, H. Putze, Hugo Schilling, L. W. Schaufuss and Museum Godeffroy acquisition files.',
      meta: 'Hildesheim preserves a second controlled receiving-side archive. Frič file Nr. 301 (1880) sits in the same filing structure as H. Putze’s zoological-anatomical teaching-aid establishment (Nr. 304, 1880–1884), Hugo Schilling’s natural-history business (Nr. 306, 1878–1901), L. W. Schaufuss (Nr. 305, 1867–1882) and Museum Godeffroy (Nr. 294, 1878–1884). This is useful for comparing how one museum documented models, teaching aids and natural specimens without assuming Blaschka content.',
      links: '<a href="https://www.arcinsys.niedersachsen.de/arcinsys/list.action?nodeid=g312285&page=1" target="_blank" rel="noopener">Hildesheim dealer acquisition series ↗</a>'
    },
    {
      type: 'United Kingdom · same-period Damon business process',
      title: 'The Morgan Library & Museum — John Ruskin letters to Robert Damon, MA 1406.1–18, 1884–1885.',
      meta: 'Not Blaschka correspondence, but an unusually compact control for Damon’s ordinary dealer workflow. Individual letters document selection from a shipment, return of a catalogue, cheque payment, goods sent on approval, requests for catalogues, retained and returned items, and later reconciliation through a list of what the customer kept. The sequence supplies a process vocabulary against which Damon-mediated Blaschka orders can be tested.',
      links: '<a href="https://www.themorgan.org/literary-historical/191319" target="_blank" rel="noopener">Collection record ↗</a> · <a href="https://www.themorgan.org/literary-historical/308686" target="_blank" rel="noopener">3 July 1884 shipment / catalogue / cheque ↗</a> · <a href="https://www.themorgan.org/literary-historical/308773" target="_blank" rel="noopener">31 December 1885 reconciliation ↗</a>'
    },
    {
      type: 'United States · dealer-published primary source',
      title: 'Ward’s Natural Science Bulletin, vols. 1–3 (1881–1886), Ward’s Natural Science Establishment.',
      meta: 'A public-domain run of Ward’s own commercial bulletin preserved by Smithsonian Libraries and Archives and digitised through BHL. It can be searched as dealer-produced evidence for catalogue circulation, product announcements, customer language and the wider commercial setting in which Blaschka models were marketed.',
      links: '<a href="https://www.biodiversitylibrary.org/item/212981" target="_blank" rel="noopener">BHL digitised run ↗</a>'
    },
    {
      type: 'Germany · dealer correspondence holding-level comparator',
      title: 'Museum für Naturkunde Berlin — Historical Image and Document Collections, records holding S: correspondence with Václav Frič’s natural-history trade and Firma Umlauff.',
      meta: 'The official archive description names correspondence with both Frič’s Prague natural-history trade and Firma Umlauff within the museum’s written-record holdings. The chronological overview places pre-1889 zoological records in S001, making that the first subdivision to inspect for Blaschka-era Frič material, but this is a chronological target rather than an item-level assignment. Written-record access is currently suspended during relocation.',
      links: '<a href="https://www.museumfuernaturkunde.berlin/en/research/records-collection" target="_blank" rel="noopener">MfN records holding S ↗</a> · <a href="https://www.museumfuernaturkunde.berlin/en/research/records-collection-chronological-overview" target="_blank" rel="noopener">Chronological overview ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '6';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  dealerSection.insertAdjacentElement('afterend', section);
})();

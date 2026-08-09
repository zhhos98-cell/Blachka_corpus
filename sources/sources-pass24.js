(() => {
  const digitizedHeading = document.querySelector('#digitized-correspondence-title');
  const digitizedSection = digitizedHeading?.closest('.source-section');
  if (!digitizedSection || document.querySelector('#harvard-digital-archive-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'harvard-digital-archive-title');
  section.innerHTML = `
    <p class="source-kicker">Harvard digital archive at scale</p>
    <h2 id="harvard-digital-archive-title">ecb00006: correspondence, artwork, labels and photographs already online</h2>
    <p class="source-note">The Harvard Blaschka/Ware finding aid is itself a large digital-source environment, not merely a pointer to a physical archive. HOLLIS currently reports 2,749 components and 897 digital-content components; the latter is a catalogue metric, not a count of letters. Corpus map: <a href="harvard-digital-archive-register.json" target="_blank" rel="noopener">harvard-digital-archive-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Series I · 1870–1957 · most correspondence digitised',
      title: 'Blaschka studio correspondence and Ware correspondence are already linked to digital surrogates.',
      meta: 'HOLLIS states that most Series I correspondence is digitised, explicitly including Blaschka studio correspondence (circa 1870–1944) and Ware correspondence (1887–1936). The studio subseries is chiefly Rudolf’s letters to Leopold and Karolina during his 1892 United States trip and summer 1895. The Ware sequence is chronological and is dominated by Rudolf Blaschka, George Lincoln Goodale, Mary Lee Ware and Oakes Ames.',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">ecb00006 finding aid ↗</a> · <a href="https://hollisarchives.lib.harvard.edu/catalog.html?f%5Baccess%5D%5B%5D=online&amp;f%5Bcollection%5D%5B%5D=The+Archives+of+Rudolf+and+Leopold+Blaschka+and+the+Ware+Collection+of+Blaschka+Glass+Models+of+Plants%2C+1886-2020" target="_blank" rel="noopener">digital-content search ↗</a>'
    },
    {
      type: 'Series II + V · visual/object documentation',
      title: 'Artwork is almost wholly digitised; most model/section labels and the Glass Flowers photograph corpus are digitised as well.',
      meta: 'This creates a second corpus type beside letters: drawings can be related to model planning and observation, labels to scientific naming and mounting, and photographs to teaching, display and conservation. These layers should remain separate during ingest even when they refer to the same model.',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006_ecb00006c00899" target="_blank" rel="noopener">model and section labels ↗</a>'
    },
    {
      type: 'Series III · physical logistics evidence',
      title: 'Original boxes and mailing material survive with workshop tools, cullet, rods, dyes and solvents.',
      meta: 'The ephemera/artifacts series keeps a material layer outside the digital correspondence corpus. For circulation research the original boxes and mailing material are especially important: they can test the relationship between written packing instructions and the actual material technologies of transport. Access is restricted because many objects are fragile.',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006_ecb00006c00008" target="_blank" rel="noopener">Blaschka ephemera and artifacts ↗</a>'
    },
    {
      type: 'Corpus method',
      title: 'The bottleneck is now normalization and cross-walking, not finding Harvard material.',
      meta: 'The finding aid can be downloaded as CSV. A useful ingest sequence is therefore hierarchy first, digital-surrogate URLs second, text/image extraction third, and only then cross-repository matching with the BHL Deane corpus and Rakow workshop OCR. Copies, drafts and enclosures must not be deduplicated merely because dates and correspondents match.',
      links: '<a href="harvard-digital-archive-register.json" target="_blank" rel="noopener">Harvard corpus architecture ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '24';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  digitizedSection.insertAdjacentElement('afterend', section);
})();

(() => {
  const publishedHeading = document.querySelector('#published-title');
  const publishedSection = publishedHeading?.closest('.source-section');
  if (!publishedSection || document.querySelector('#digitized-correspondence-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'digitized-correspondence-title');
  section.innerHTML = `
    <p class="source-kicker">Open digital corpus</p>
    <h2 id="digitized-correspondence-title">Rudolf Blaschka to Walter Deane, 1895–1927</h2>
    <p class="source-note">Harvard University Botany Libraries has digitised a substantial direct correspondence corpus through the Biodiversity Heritage Library. This is now treated as an ingestible primary-source corpus rather than a bibliographic pointer. Machine-readable register: <a href="digitized-correspondence-register.json" target="_blank" rel="noopener">digitized-correspondence-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Harvard / BHL · direct digitised primary corpus',
      title: 'Rudolf Blaschka letters to Walter Deane, 1895–1927.',
      meta: 'The BHL item supplies page images, PDF, JPEG 2000 and downloadable OCR/text. Its table of contents exposes individually dated letters and postcards from 23 October 1895 through 10 December 1927, plus notes, extracts and some connected correspondence involving G. L. Goodale and others. BHL describes the principal letters as botanical and personal; topic coding must be done from the pages rather than inferred from the date range.',
      links: '<a href="https://www.biodiversitylibrary.org/item/158899" target="_blank" rel="noopener">BHL digitised item ↗</a> · <a href="https://www.biodiversitylibrary.org/creator/128193" target="_blank" rel="noopener">Rudolf Blaschka BHL creator index ↗</a>'
    },
    {
      type: 'Persistent part-level surrogates · Plazi / Zenodo',
      title: 'Individual BHL correspondence parts also survive as separately downloadable PDFs with Zenodo DOIs.',
      meta: 'Verified examples include Dec. 11, 1902 (BHL part 298530 / Zenodo 16317608), Jan. 13, 1907 (part 298540 / Zenodo 16317615), Apr. 30, 1911 (part 298555 / Zenodo 16401767), Aug. 29, 1921 (part 298576 / Zenodo 16345213) and Dec. 10, 1927 (part 298587 / Zenodo 16401769). These are persistent PDF mirrors deposited by Plazi from BHL, useful for part-level citation and retrieval; they do not independently correct BHL metadata.',
      links: '<a href="https://zenodo.org/records/16317608" target="_blank" rel="noopener">1902 example ↗</a> · <a href="https://zenodo.org/records/16345213" target="_blank" rel="noopener">1921 example ↗</a> · <a href="https://zenodo.org/records/16401769" target="_blank" rel="noopener">1927 example ↗</a>'
    },
    {
      type: 'Metadata guard · do not silently normalize dates',
      title: 'Several BHL structured dates conflict with the displayed archival labels.',
      meta: 'Examples include “May 12, 1899” paired with structured date 1889-05-12; “Jul. 7, 1913” paired with 1912-07-13; and “Sep. 19, 1923” paired with 1921-11-19. The corpus register therefore stores archival display label and structured metadata as separate fields until the manuscript image is checked.',
      links: '<a href="digitized-correspondence-register.json" target="_blank" rel="noopener">date-conflict register ↗</a>'
    },
    {
      type: 'Corpus-building value',
      title: 'A second Harvard text layer that can be cross-walked against the Ware and workshop business archives.',
      meta: 'Because the Deane set is openly downloadable and extends across pre-war, wartime and postwar decades, it can be searched as a continuous correspondence corpus. The immediate task is low-interpretation ingest: sender/recipient/date/page first, then people, plants/models, money, workshop labour, travel, shipment, regulation and institutional relations.',
      links: '<a href="https://www.biodiversitylibrary.org/bibliography/83900" target="_blank" rel="noopener">Walter Deane correspondence collection context ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '19';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  publishedSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass20.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

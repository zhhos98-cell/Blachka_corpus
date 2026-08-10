(() => {
  const modularityHeading = document.querySelector('#production-modularity-title');
  const modularitySection = modularityHeading?.closest('.source-section');
  if (!modularitySection || document.querySelector('#production-crosswalk-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'production-crosswalk-title');
  section.innerHTML = `
    <p class="source-kicker">Drawing ↔ hidden construction</p>
    <h2 id="production-crosswalk-title">Sea cucumbers: a schematic drawing matches the joins inside model Nr. 284</h2>
    <p class="source-note">Conservation can turn a workshop drawing into construction evidence at exact model-number level. Corning’s examination of three 1885 sea-cucumber models reveals a repeated segmented body scheme with individual variation: <a href="workshop-production-crosswalk-register.json" target="_blank" rel="noopener">workshop-production-crosswalk-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Blaschka Nr. 287 · Cornell L.17.3.63-8',
      title: 'Three body sections joined end-to-end, originally concealed beneath paint and adhesive.',
      meta: 'Corning conservators initially suspected two dark areas were later repairs. Examination showed that they were original workshop joins where one tubular glass section slots into another. This distinction matters for provenance and repair history: a visible break-like line can be manufacture rather than damage.',
      links: '<a href="https://blog.cmog.org/2017/secret-glass-sea-cucumbers" target="_blank" rel="noopener">Corning conservation study ↗</a>'
    },
    {
      type: 'Nrs. 282, 284, 287 · repeated construction',
      title: 'Three related models use joins in nearly the same places while retaining different section shapes and surface treatments.',
      meta: 'The repeated scheme creates a similar serpentine body, but small differences make each model appear individually lifelike. Standardization and variation therefore coexist inside the same production family rather than forming opposite modes of manufacture.',
      links: '<a href="workshop-production-crosswalk-register.json" target="_blank" rel="noopener">three-model comparison ↗</a>'
    },
    {
      type: 'Nr. 284 · exact drawing/object match',
      title: 'A digitised schematic drawing divides the body into three sections at exactly the join locations found in the finished model.',
      meta: 'This is unusually strong workshop evidence because it connects archival planning to hidden object structure, rather than matching only external appearance. It gives us a template for model-number-level production history: drawing → section plan → assembled glass body → paint/adhesive → later conservation visibility.',
      links: '<a href="https://blog.cmog.org/2017/secret-glass-sea-cucumbers" target="_blank" rel="noopener">drawing/object crosswalk ↗</a>'
    },
    {
      type: 'Cause still open',
      title: 'Why three sections? The archive currently supports the fact of planning, not its cause.',
      meta: 'Corning suggests two possibilities—limits in available glass tubing or simplification of production—but explicitly leaves the question unresolved. The source index retains that uncertainty. Business books, component stock and supply invoices may eventually distinguish material constraint from workflow optimization.',
      links: '<a href="workshop-production-crosswalk-register.json" target="_blank" rel="noopener">evidence guard and next targets ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '32';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  modularitySection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass33.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

(() => {
  if (!window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260810-14';
    ui.defer = true;
    document.head.appendChild(ui);
  }

  const css = document.querySelector('link[href*="bibliography.css"]');
  if (css) css.href = 'bibliography.css?v=20260810-7';

  const list = document.querySelector('.bib-list');
  if (!list) return;
  const clean = value => String(value || '').replace(/\s+/g, ' ').trim();
  const fold = value => clean(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const normDOI = value => clean(value).replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '').toLowerCase().replace(/[.,;]+$/, '');
  const doiOf = node => {
    for (const link of node.querySelectorAll('.bib-links a')) {
      try { const url = new URL(link.href); if (url.hostname.toLowerCase() === 'doi.org') return normDOI(url.href); } catch {}
    }
    const match = clean(node.textContent).match(/10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i);
    return match ? normDOI(match[0]) : '';
  };
  const seenDOI = new Set(), seenCitation = new Set();
  [...list.querySelectorAll('.bib-entry')].forEach(node => {
    const year = clean(node.querySelector('.bib-year')?.textContent || node.dataset.year || '');
    const citation = clean(node.querySelector('h3')?.textContent || '');
    const doi = doiOf(node), citationKey = `${year}|${fold(citation)}`;
    if ((doi && seenDOI.has(doi)) || seenCitation.has(citationKey)) { node.remove(); return; }
    if (doi) seenDOI.add(doi); if (citation) seenCitation.add(citationKey); if (year) node.dataset.year = year;
  });
  document.documentElement.classList.add('bibliography-frozen-ready');
  document.dispatchEvent(new Event('BibliographyReady', { bubbles:true }));
})();
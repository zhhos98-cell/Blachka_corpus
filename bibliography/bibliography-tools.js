(() => {
  const list = document.querySelector('.bib-list');
  const section = document.querySelector('.bib-section');
  const intro = document.querySelector('.page-intro');
  if (!list || !section || document.querySelector('.bib-tools')) return;

  const style = document.createElement('style');
  style.id = 'bib-tools-style';
  style.textContent = `
    .bib-tools {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px 26px;
      margin: 18px 0 30px;
      padding: 14px 0 16px;
      border-top: 1px solid rgba(242,238,233,.16);
      border-bottom: 1px solid rgba(242,238,233,.16);
      font-family: Arial, Helvetica, sans-serif;
    }
    .bib-tools-group {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }
    .bib-tools-label,
    .bib-tools-status,
    .bib-tools-note {
      margin: 0;
      color: rgba(242,238,233,.58);
      font-size: .66rem;
      line-height: 1.4;
    }
    .bib-tools-label {
      margin-right: 3px;
      font-weight: 700;
      letter-spacing: .07em;
      text-transform: uppercase;
    }
    .bib-tool-button {
      min-height: 34px;
      padding: 0 11px;
      border: 1px solid rgba(242,238,233,.3);
      background: transparent;
      color: rgba(242,238,233,.88);
      font: 600 .66rem/1 Arial, Helvetica, sans-serif;
      letter-spacing: .025em;
      cursor: pointer;
    }
    .bib-tool-button:hover,
    .bib-tool-button:focus-visible {
      border-color: rgba(242,238,233,.62);
      color: #fff;
      outline: none;
    }
    .bib-tool-button[aria-pressed="true"] {
      background: rgba(242,238,233,.11);
      border-color: rgba(242,238,233,.56);
      color: #fff;
    }
    .bib-tools-meta {
      flex-basis: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 8px 18px;
      padding-top: 2px;
    }
    @media (max-width: 720px) {
      .bib-tools { display: block; }
      .bib-tools-group + .bib-tools-group { margin-top: 12px; }
      .bib-tools-meta { margin-top: 12px; }
    }
  `;
  document.head.appendChild(style);

  const toolbar = document.createElement('div');
  toolbar.className = 'bib-tools';
  toolbar.setAttribute('aria-label', 'Bibliography sorting and export tools');
  toolbar.innerHTML = `
    <div class="bib-tools-group" role="group" aria-label="Sort bibliography">
      <span class="bib-tools-label">Sort</span>
      <button class="bib-tool-button" type="button" data-sort="year" aria-pressed="true">Year ↑</button>
      <button class="bib-tool-button" type="button" data-sort="author" aria-pressed="false">Author A–Z</button>
    </div>
    <div class="bib-tools-group" role="group" aria-label="Export bibliography">
      <span class="bib-tools-label">Export</span>
      <button class="bib-tool-button" type="button" data-export="csv">CSV</button>
      <button class="bib-tool-button" type="button" data-export="csl">CSL JSON · Zotero</button>
    </div>
    <div class="bib-tools-meta">
      <p class="bib-tools-status" aria-live="polite"></p>
      <p class="bib-tools-note">Author sorting uses the first credited author or organization; anonymous items sort by title. CSL JSON is Zotero-importable and preserves the working citation, year, source URLs, and a best-effort title while field-level normalization continues.</p>
    </div>
  `;

  if (intro) intro.insertAdjacentElement('afterend', toolbar);
  else section.insertAdjacentElement('beforebegin', toolbar);

  const collator = new Intl.Collator(['en', 'de', 'fr'], { sensitivity: 'base', numeric: true });
  let mode = 'year';
  let observer;

  const entries = () => [...list.querySelectorAll('.bib-entry')];
  const clean = (value) => String(value || '').replace(/\s+/g, ' ').trim();
  const citationText = (node) => clean(node.querySelector('h3')?.textContent);
  const yearOf = (node) => Number.parseInt(node.querySelector('.bib-year')?.textContent || node.dataset.year || '9999', 10);

  const organizationPattern = /\b(Museum|Museums|University|Universität|Harvard|Stadt|Fondazione|National|Australian|Amgueddfa|Musées|Society|Institute|Institution|College|Library|Press|Department)\b/i;

  const authorSortKey = (node) => {
    const citation = citationText(node);
    if (!citation) return '';
    if (/^[“\"']/u.test(citation)) return citation.replace(/^[“\"']+/, '');

    const firstComma = citation.indexOf(',');
    const firstSegment = clean(firstComma >= 0 ? citation.slice(0, firstComma) : citation);
    if (!firstSegment) return citation;
    if (organizationPattern.test(firstSegment)) return firstSegment;

    const tokens = firstSegment
      .replace(/\b(Jr\.?|Sr\.?|II|III|IV)$/i, '')
      .trim()
      .split(/\s+/);
    return tokens.at(-1) || firstSegment;
  };

  const titleGuess = (node) => {
    const heading = node.querySelector('h3');
    const text = citationText(node);
    if (!heading || !text) return '';
    const quoted = text.match(/“([^”]+)”/u);
    if (quoted) return clean(quoted[1]);
    const emphasis = heading.querySelector('em');
    if (emphasis) return clean(emphasis.textContent);
    return text;
  };

  const urlsOf = (node) => [...node.querySelectorAll('.bib-links a')].map((a) => a.href).filter(Boolean);
  const labelsOf = (node) => [...node.querySelectorAll('.bib-links a')].map((a) => clean(a.textContent.replace(/↗/g, ''))).filter(Boolean);

  const applySort = () => {
    const rows = entries().map((node, index) => ({
      node,
      index,
      year: yearOf(node),
      author: authorSortKey(node),
      citation: citationText(node)
    }));

    if (observer) observer.disconnect();

    rows.sort((a, b) => {
      if (mode === 'author') {
        return collator.compare(a.author, b.author) || (a.year - b.year) || collator.compare(a.citation, b.citation) || (a.index - b.index);
      }
      return (a.year - b.year) || (a.index - b.index);
    }).forEach(({ node }) => list.appendChild(node));

    toolbar.querySelectorAll('[data-sort]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.sort === mode));
    });
    updateStatus();
    if (observer) observer.observe(list, { childList: true });
  };

  const updateStatus = () => {
    const count = entries().length;
    const status = toolbar.querySelector('.bib-tools-status');
    if (status) status.textContent = `${count} records · ${mode === 'author' ? 'author A–Z' : 'year ascending'}`;
  };

  const csvCell = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;

  const download = (filename, text, type) => {
    const blob = new Blob([text], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const exportCsv = () => {
    const header = ['year', 'sort_author', 'title', 'citation', 'source_labels', 'source_urls'];
    const rows = entries().map((node) => [
      yearOf(node),
      authorSortKey(node),
      titleGuess(node),
      citationText(node),
      labelsOf(node).join(' | '),
      urlsOf(node).join(' | ')
    ]);
    const csv = '\ufeff' + [header, ...rows].map((row) => row.map(csvCell).join(',')).join('\r\n');
    download('blaschka-working-bibliography.csv', csv, 'text/csv;charset=utf-8');
  };

  const exportCsl = () => {
    const data = entries().map((node, index) => {
      const urls = urlsOf(node);
      const item = {
        id: `blaschka-bib-${String(index + 1).padStart(3, '0')}`,
        type: 'article',
        title: titleGuess(node),
        issued: { 'date-parts': [[yearOf(node)]] },
        note: `Full working citation: ${citationText(node)}`
      };
      if (urls[0]) item.URL = urls[0];
      if (urls.length > 1) item.note += ` Additional source URLs: ${urls.slice(1).join(' | ')}`;
      return item;
    });
    download('blaschka-working-bibliography.json', JSON.stringify(data, null, 2) + '\n', 'application/json;charset=utf-8');
  };

  toolbar.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    if (button.dataset.sort) {
      mode = button.dataset.sort;
      applySort();
      return;
    }

    if (button.dataset.export === 'csv') exportCsv();
    if (button.dataset.export === 'csl') exportCsl();
  });

  let scheduled = false;
  observer = new MutationObserver((mutations) => {
    if (!mutations.some((mutation) => mutation.addedNodes.length)) return;
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applySort();
    });
  });
  observer.observe(list, { childList: true });

  applySort();
})();

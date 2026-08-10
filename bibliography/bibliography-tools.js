(() => {
  if (!window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260810-8';
    ui.defer = true;
    document.head.appendChild(ui);
  }

  const list = document.querySelector('.bib-list');
  const section = document.querySelector('.bib-section');
  const intro = document.querySelector('.page-intro');
  if (!list || !section || document.querySelector('.bib-tools')) return;

  document.querySelector('.bib-scope')?.remove();
  document.querySelector('.bib-note')?.remove();

  const clean = value => String(value || '').replace(/\s+/g, ' ').trim();
  const fold = value => clean(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const entries = () => [...list.querySelectorAll('.bib-entry')];
  const citationText = node => clean(node.querySelector('h3')?.textContent || '');
  const yearOf = node => Number.parseInt(node.querySelector('.bib-year')?.textContent || node.dataset.year || '9999', 10);
  const urlsOf = node => [...node.querySelectorAll('.bib-links a')].map(a => a.href).filter(Boolean);

  const titleGuess = node => {
    const heading = node.querySelector('h3');
    const text = citationText(node);
    const quoted = text.match(/[“"]([^”"]+)[”"]/u);
    if (quoted) return clean(quoted[1]);
    const emphasis = heading?.querySelector('em');
    return emphasis ? clean(emphasis.textContent) : text;
  };

  const authorCredit = node => {
    const citation = citationText(node);
    const title = titleGuess(node);
    if (!citation || !title || citation.startsWith('“') || citation.startsWith('"')) return '';
    const i = citation.indexOf(title);
    if (i <= 0) return '';
    return clean(citation.slice(0, i).replace(/[,“”"'.\s]+$/g, ''));
  };

  const doiOf = node => {
    for (const href of urlsOf(node)) {
      try {
        const u = new URL(href);
        if (u.hostname.toLowerCase() === 'doi.org') return decodeURIComponent(u.pathname.replace(/^\//, ''));
      } catch {}
    }
    return '';
  };

  const isbnOf = node => {
    const m = citationText(node).match(/\bISBN(?:-1[03])?\s*[:#]?\s*((?:97[89][\s-]?)?\d[\d\s-]{7,16}[\dXx])\b/i);
    return m ? m[1].replace(/[\s-]/g, '') : '';
  };

  const toolbar = document.createElement('div');
  toolbar.className = 'bib-tools';
  toolbar.setAttribute('aria-label', 'Bibliography tools');
  toolbar.innerHTML = `
    <div class="bib-tools-group"><span class="bib-tools-label">Sort</span><button class="bib-tool-button" type="button" data-sort="year" aria-pressed="true">Year ↑</button><button class="bib-tool-button" type="button" data-sort="author" aria-pressed="false">Author A–Z</button></div>
    <div class="bib-tools-group"><span class="bib-tools-label">Select</span><button class="bib-tool-button" type="button" data-select="visible">Visible</button><button class="bib-tool-button" type="button" data-select="clear">Clear</button><span class="bib-selected-count" aria-live="polite">0 selected</span></div>
    <div class="bib-tools-group"><span class="bib-tools-label">Export</span><button class="bib-tool-button" type="button" data-export="bib">BibTeX</button><button class="bib-tool-button" type="button" data-export="ris">RIS</button><button class="bib-tool-button" type="button" data-export="csv">CSV</button></div>
    <p class="bib-export-note">Select individual references, or export the current visible list.</p>`;
  if (intro) intro.insertAdjacentElement('afterend', toolbar); else section.insertAdjacentElement('beforebegin', toolbar);

  const community = document.createElement('section');
  community.className = 'bib-community';
  community.innerHTML = `<p class="bib-community-label">Blaschka Bibliothek</p><p class="bib-community-copy"><a href="https://www.zotero.org/groups/6634544/blaschka_bibliothek" target="_blank" rel="noopener noreferrer">Shared Zotero library ↗</a> · additions and corrections welcome.</p>`;
  toolbar.insertAdjacentElement('afterend', community);

  const query = clean(new URLSearchParams(location.search).get('q') || '');
  let queryBanner = null;
  if (query) {
    queryBanner = document.createElement('div');
    queryBanner.className = 'bib-query-banner';
    queryBanner.innerHTML = `<span>Search</span><strong></strong><em></em><a href="./">Clear</a>`;
    queryBanner.querySelector('strong').textContent = `“${query}”`;
    community.insertAdjacentElement('afterend', queryBanner);
  }

  const selected = new Set();
  let sortMode = 'year';

  const entryKey = (node, index) => node.dataset.selectionKey || (node.dataset.selectionKey = `bib-${yearOf(node)}-${index}-${fold(titleGuess(node)).slice(0,32).replace(/[^a-z0-9]+/g,'-')}`);

  const attachSelection = () => {
    entries().forEach((node,index) => {
      const key = entryKey(node,index);
      if (node.querySelector(':scope > .bib-select')) return;
      const label = document.createElement('label');
      label.className = 'bib-select';
      label.title = 'Select this reference for export';
      label.innerHTML = `<input type="checkbox" aria-label="Select reference for export"><span aria-hidden="true"></span>`;
      node.prepend(label);
      label.querySelector('input').addEventListener('change', event => {
        if (event.target.checked) selected.add(key); else selected.delete(key);
        updateSelected();
      });
    });
  };

  const updateSelected = () => {
    const count = toolbar.querySelector('.bib-selected-count');
    if (count) count.textContent = `${selected.size} selected`;
  };

  const applyFilter = () => {
    const q = fold(query);
    let visible = 0;
    entries().forEach(node => {
      const show = !q || fold(`${citationText(node)} ${urlsOf(node).join(' ')}`).includes(q);
      node.hidden = !show;
      if (show) visible += 1;
    });
    if (queryBanner) queryBanner.querySelector('em').textContent = `${visible} matching record${visible === 1 ? '' : 's'}`;
  };

  const applySort = () => {
    const rows = entries().map((node,index) => ({node,index,year:yearOf(node),author:fold(authorCredit(node) || titleGuess(node))}));
    rows.sort((a,b) => sortMode === 'author'
      ? a.author.localeCompare(b.author) || a.year - b.year || a.index - b.index
      : a.year - b.year || a.index - b.index);
    rows.forEach(({node}) => list.appendChild(node));
    toolbar.querySelectorAll('[data-sort]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.sort === sortMode)));
    applyFilter();
  };

  const exportNodes = () => {
    const all = entries();
    if (selected.size) return all.filter((node,index) => selected.has(entryKey(node,index)));
    return all.filter(node => !node.hidden);
  };

  const download = (filename,text,type) => {
    const blob = new Blob([text], {type});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const csvCell = value => {
    const s = String(value ?? '');
    return /[",\r\n]/.test(s) ? `"${s.replace(/"/g,'""')}"` : s;
  };

  const asCSV = nodes => ['year,author,title,citation,doi,url', ...nodes.map(node => [yearOf(node),authorCredit(node),titleGuess(node),citationText(node),doiOf(node),urlsOf(node)[0] || ''].map(csvCell).join(','))].join('\n') + '\n';

  const asBib = nodes => nodes.map((node,i) => {
    const year = yearOf(node);
    const title = titleGuess(node).replace(/[{}]/g,'');
    const author = authorCredit(node).replace(/[{}]/g,'').replace(/\s+and\s+/g,' and ');
    const doi = doiOf(node);
    const isbn = isbnOf(node);
    const url = urlsOf(node)[0] || '';
    return `@misc{blaschka_${year}_${String(i+1).padStart(3,'0')},\n  title = {${title}},\n  author = {${author}},\n  year = {${year}}${doi?`,\n  doi = {${doi}}`:''}${isbn?`,\n  isbn = {${isbn}}`:''}${url?`,\n  url = {${url}}`:''}\n}`;
  }).join('\n\n') + '\n';

  const asRIS = nodes => nodes.map(node => {
    const lines = ['TY  - GEN', `TI  - ${titleGuess(node)}`];
    if (authorCredit(node)) lines.push(`AU  - ${authorCredit(node)}`);
    lines.push(`PY  - ${yearOf(node)}`);
    if (doiOf(node)) lines.push(`DO  - ${doiOf(node)}`);
    if (urlsOf(node)[0]) lines.push(`UR  - ${urlsOf(node)[0]}`);
    lines.push(`N1  - ${citationText(node)}`, 'ER  - ');
    return lines.join('\n');
  }).join('\n\n') + '\n';

  toolbar.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.sort) {
      sortMode = button.dataset.sort;
      applySort();
      return;
    }
    if (button.dataset.select === 'visible') {
      entries().forEach((node,index) => {
        if (!node.hidden) {
          selected.add(entryKey(node,index));
          const box = node.querySelector('.bib-select input');
          if (box) box.checked = true;
        }
      });
      updateSelected();
      return;
    }
    if (button.dataset.select === 'clear') {
      selected.clear();
      entries().forEach(node => {
        const box = node.querySelector('.bib-select input');
        if (box) box.checked = false;
      });
      updateSelected();
      return;
    }
    const kind = button.dataset.export;
    if (!kind) return;
    const nodes = exportNodes();
    if (!nodes.length) return;
    const suffix = selected.size ? `selected-${selected.size}` : query ? 'search-results' : 'working-bibliography';
    if (kind === 'csv') download(`blaschka-${suffix}.csv`, '\ufeff' + asCSV(nodes), 'text/csv;charset=utf-8');
    if (kind === 'bib') download(`blaschka-${suffix}.bib`, asBib(nodes), 'application/x-bibtex;charset=utf-8');
    if (kind === 'ris') download(`blaschka-${suffix}.ris`, asRIS(nodes), 'application/x-research-info-systems;charset=utf-8');
  });

  attachSelection();
  applySort();
  updateSelected();
})();
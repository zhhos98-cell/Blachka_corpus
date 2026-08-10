(() => {
  const list = document.querySelector('.bib-list');
  const section = document.querySelector('.bib-section');
  const intro = document.querySelector('.page-intro');
  if (!list || !section || document.querySelector('.bib-tools')) return;

  document.querySelector('.bib-scope')?.remove();
  document.querySelector('.bib-note')?.remove();

  const SOURCE_ID = 'info:sid/zhhos98-cell.github.io:Blachka_corpus';
  const clean = value => String(value || '').replace(/\s+/g, ' ').trim();
  const fold = value => clean(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const entries = () => [...list.querySelectorAll('.bib-entry')];
  const citationText = node => clean(node.querySelector('h3')?.textContent);
  const yearOf = node => Number.parseInt(node.querySelector('.bib-year')?.textContent || node.dataset.year || '9999', 10);
  const urlsOf = node => [...node.querySelectorAll('.bib-links a')].map(a => a.href).filter(Boolean);
  const labelsOf = node => [...node.querySelectorAll('.bib-links a')].map(a => clean(a.textContent.replace(/↗/g, ''))).filter(Boolean);

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
    return clean(citation.slice(0, i).replace(/[,“”"'.\s]+$/g, '')).replace(/,\s+with\s+/i, ', ');
  };

  const organizationPattern = /\b(Museum|Museums|University|Universität|Harvard|Stadt|Fondazione|National|Australian|Amgueddfa|Musées|Society|Institute|Institution|College|Library|Press|Department|Scientific American|Life|Boston Post)\b/i;

  const authorNames = node => {
    const credit = authorCredit(node);
    if (!credit) return [];
    if (organizationPattern.test(credit) && !/\band\b/i.test(credit)) return [credit];
    return credit
      .replace(/\s+et\s+al\.?$/i, '')
      .replace(/,\s+and\s+/gi, '|')
      .replace(/\s+and\s+/gi, '|')
      .replace(/,\s+(?=[A-ZÀ-ÖØ-Þ][A-Za-zÀ-ÖØ-öø-ÿ.'-]+(?:\s|$))/g, '|')
      .split('|')
      .map(clean)
      .filter(Boolean);
  };

  const splitName = name => {
    if (!name || organizationPattern.test(name)) return { literal:name || '' };
    const parts = name.split(/\s+/);
    if (parts.length < 2) return { literal:name };
    const particles = new Set(['da','de','del','der','di','du','la','le','van','von']);
    let start = parts.length - 1;
    while (start > 0 && particles.has(parts[start - 1].toLowerCase())) start--;
    return { given:parts.slice(0,start).join(' '), family:parts.slice(start).join(' ') };
  };

  const doiOf = node => {
    for (const url of urlsOf(node)) {
      try {
        const u = new URL(url);
        if (u.hostname.toLowerCase() === 'doi.org') return decodeURIComponent(u.pathname.replace(/^\//, ''));
      } catch {}
    }
    const match = citationText(node).match(/10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i);
    return match ? match[0].replace(/[.,;]+$/, '') : '';
  };

  const isbnOf = node => {
    const text = `${citationText(node)} ${urlsOf(node).join(' ')}`;
    const explicit = text.match(/\bISBN(?:-1[03])?\s*[:#]?\s*((?:97[89][\s-]?)?\d[\d\s-]{7,16}[\dXx])\b/i);
    if (explicit) return explicit[1].replace(/[\s-]/g, '');
    const candidates = text.match(/\b97[89]\d{10}\b/g) || [];
    return candidates[0] || '';
  };

  const itemKind = node => {
    const citation = citationText(node);
    if (/\b(dissertation|thesis|mémoire|masterarbeit|diplomarbeit)\b/i.test(citation)) return 'thesis';
    if (/[“"][^”"]+[”"]/u.test(citation)) return 'article';
    if (node.querySelector('h3 em')) return 'book';
    return 'article';
  };

  const journalMeta = node => {
    const heading = node.querySelector('h3');
    const journal = clean(heading?.querySelector('em')?.textContent);
    const citation = citationText(node);
    if (!journal || !citation.includes(journal)) return { journal:'', volume:'', issue:'', pages:'', spage:'', epage:'' };
    const tail = citation.slice(citation.indexOf(journal) + journal.length);
    const m = tail.match(/\s+(\d+(?:\.\d+)?)(?:\s*\(([^)]+)\)|,\s*(?:no\.|nos\.|issue)\s*([^,:()]+))?\s*:\s*([0-9A-Za-z]+(?:\s*[–—-]\s*[0-9A-Za-z]+)?)/i);
    const pages = m ? clean(m[4]).replace(/\s+/g, '') : '';
    const p = pages.split(/[–—-]/).map(clean).filter(Boolean);
    return { journal, volume:m?.[1] || '', issue:clean(m?.[2] || m?.[3] || ''), pages, spage:p[0] || '', epage:p[1] || '' };
  };

  const bookMeta = node => {
    const citation = citationText(node);
    const title = titleGuess(node);
    const tail = title && citation.includes(title) ? citation.slice(citation.indexOf(title) + title.length) : citation;
    const m = tail.match(/(?:\.\s*)?([^.:;]+):\s*([^.;]+?)(?:\.|$)/);
    return { place:clean(m?.[1] || ''), publisher:clean(m?.[2] || '') };
  };

  const firstURL = node => urlsOf(node)[0] || '';

  function contextObject(node) {
    const params = new URLSearchParams();
    const kind = itemKind(node);
    const title = titleGuess(node);
    const authors = authorNames(node).map(splitName);
    const first = authors[0];
    const doi = doiOf(node);
    const isbn = isbnOf(node);
    const url = firstURL(node);

    params.set('url_ver', 'Z39.88-2004');
    params.set('ctx_ver', 'Z39.88-2004');
    params.set('rfr_id', SOURCE_ID);

    if (kind === 'book' || kind === 'thesis') {
      params.set('rft_val_fmt', 'info:ofi/fmt:kev:mtx:book');
      params.set('rft.genre', 'book');
      params.set('rft.btitle', title);
      const book = bookMeta(node);
      if (book.place) params.set('rft.place', book.place);
      if (book.publisher) params.set('rft.pub', book.publisher);
      if (isbn) params.set('rft.isbn', isbn);
    } else {
      params.set('rft_val_fmt', 'info:ofi/fmt:kev:mtx:journal');
      params.set('rft.genre', 'article');
      params.set('rft.atitle', title);
      const j = journalMeta(node);
      if (j.journal) params.set('rft.jtitle', j.journal);
      if (j.volume) params.set('rft.volume', j.volume);
      if (j.issue) params.set('rft.issue', j.issue);
      if (j.pages) params.set('rft.pages', j.pages);
      if (j.spage) params.set('rft.spage', j.spage);
      if (j.epage) params.set('rft.epage', j.epage);
    }

    params.set('rft.date', String(yearOf(node)));
    authors.forEach(a => params.append('rft.au', a.literal || [a.given,a.family].filter(Boolean).join(' ')));
    if (first && !first.literal) {
      if (first.family) params.set('rft.aulast', first.family);
      if (first.given) params.set('rft.aufirst', first.given);
    }
    if (doi) params.append('rft_id', `info:doi/${doi}`);
    if (url) params.append('rft_id', url);
    return params.toString();
  }

  let notifyTimer;
  const attachZoteroMetadata = node => {
    if (node.querySelector(':scope > .Z3988')) return false;
    const span = document.createElement('span');
    span.className = 'Z3988 zotero-coins';
    span.title = contextObject(node);
    span.hidden = true;
    span.setAttribute('aria-hidden', 'true');
    span.dataset.zoteroTitle = titleGuess(node);
    span.dataset.zoteroYear = String(yearOf(node));
    span.dataset.zoteroAuthors = String(authorNames(node).length);
    const doi = doiOf(node), isbn = isbnOf(node);
    if (doi) span.dataset.zoteroDoi = doi;
    if (isbn) span.dataset.zoteroIsbn = isbn;
    node.appendChild(span);
    return true;
  };

  const notifyZotero = () => {
    clearTimeout(notifyTimer);
    notifyTimer = setTimeout(() => document.dispatchEvent(new Event('ZoteroItemUpdated', { bubbles:true, cancelable:true })), 120);
  };

  const style = document.createElement('style');
  style.id = 'bib-tools-style';
  style.textContent = `
    .bib-tools{display:flex;flex-wrap:wrap;align-items:center;gap:12px 24px;margin:18px 0 24px;padding:14px 0 16px;border-top:1px solid rgba(242,238,233,.16);border-bottom:1px solid rgba(242,238,233,.16);font-family:Arial,Helvetica,sans-serif}
    .bib-tools-group{display:flex;flex-wrap:wrap;align-items:center;gap:7px}.bib-tools-label{margin-right:3px;color:rgba(242,238,233,.52);font-size:.62rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase}.bib-tool-button{min-height:32px;padding:0 10px;border:0;border-bottom:1px solid rgba(242,238,233,.3);background:transparent;color:rgba(242,238,233,.86);font:600 .65rem/1 Arial,Helvetica,sans-serif;letter-spacing:.02em;cursor:pointer}.bib-tool-button:hover,.bib-tool-button:focus-visible{border-color:#f2eee9;color:#fff;outline:none}.bib-tool-button[aria-pressed="true"]{border-color:var(--accent);color:#fff}.bib-tools-selection{margin-left:auto}.bib-selected-count{min-width:74px;color:rgba(242,238,233,.6);font-size:.64rem}.bib-export-note{flex-basis:100%;margin:0;color:rgba(242,238,233,.45);font-size:.61rem;line-height:1.4}.bib-query-banner{display:flex;flex-wrap:wrap;align-items:baseline;gap:8px 14px;margin:-4px 0 24px;padding:11px 0 14px;border-bottom:1px solid rgba(242,238,233,.13);font-family:Arial,Helvetica,sans-serif}.bib-query-banner span{color:rgba(242,238,233,.48);font-size:.61rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase}.bib-query-banner strong{color:#f2eee9;font-size:.82rem}.bib-query-banner em{color:rgba(242,238,233,.52);font-size:.63rem;font-style:normal}.bib-query-banner a{margin-left:auto;color:#f2eee9;font-size:.63rem;text-underline-offset:3px}.bib-community{max-width:920px;margin:-6px 0 28px;font-family:Arial,Helvetica,sans-serif}.bib-community-label{margin:0 0 6px;color:rgba(242,238,233,.55);font-size:.63rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase}.bib-community-copy{margin:0;color:rgba(242,238,233,.75);font-size:.8rem;line-height:1.6}.bib-community-copy a{color:#f2eee9;text-underline-offset:3px}.bib-select{position:absolute;left:-34px;top:18px;display:grid;place-items:center;width:24px;height:24px;cursor:pointer}.bib-select input{position:absolute;opacity:0;pointer-events:none}.bib-select span{width:13px;height:13px;border:1px solid rgba(242,238,233,.34);background:transparent;transition:background .18s ease,border-color .18s ease}.bib-select input:checked+span{border-color:#d3997f;background:#d3997f;box-shadow:inset 0 0 0 3px #1d1714}.bib-select input:focus-visible+span{outline:2px solid rgba(211,153,127,.52);outline-offset:3px}.bib-entry{position:relative}.bib-entry[hidden]{display:none!important}.bib-entry.is-selected{transform:translateX(5px)}
    @media(max-width:760px){.bib-tools{align-items:flex-start}.bib-tools-selection{margin-left:0}.bib-query-banner a{margin-left:0}.bib-select{position:relative;left:auto;top:auto;float:left;margin:2px 10px 4px 0}.bib-entry.is-selected{transform:none}.bib-export-note{font-size:.59rem}}
  `;
  document.head.appendChild(style);

  const toolbar = document.createElement('div');
  toolbar.className = 'bib-tools';
  toolbar.setAttribute('aria-label', 'Bibliography sorting, selection and export tools');
  toolbar.innerHTML = `
    <div class="bib-tools-group" role="group" aria-label="Sort bibliography"><span class="bib-tools-label">Sort</span><button class="bib-tool-button" type="button" data-sort="year" aria-pressed="true">Year ↑</button><button class="bib-tool-button" type="button" data-sort="author" aria-pressed="false">Author A–Z</button></div>
    <div class="bib-tools-group bib-tools-selection" role="group" aria-label="Select bibliography records"><span class="bib-tools-label">Select</span><button class="bib-tool-button" type="button" data-select="visible">Visible</button><button class="bib-tool-button" type="button" data-select="clear">Clear</button><span class="bib-selected-count" aria-live="polite">0 selected</span></div>
    <div class="bib-tools-group" role="group" aria-label="Export bibliography"><span class="bib-tools-label">Export</span><button class="bib-tool-button" type="button" data-export="bib">BibTeX</button><button class="bib-tool-button" type="button" data-export="ris">RIS</button><button class="bib-tool-button" type="button" data-export="csl">CSL JSON</button><button class="bib-tool-button" type="button" data-export="csv">CSV</button><button class="bib-tool-button" type="button" data-export="tsv">TSV</button></div>
    <p class="bib-export-note">Tick individual references to export only those records. With nothing selected, export uses the current visible bibliography.</p>`;
  if (intro) intro.insertAdjacentElement('afterend', toolbar); else section.insertAdjacentElement('beforebegin', toolbar);

  const community = document.createElement('section');
  community.className = 'bib-community';
  community.setAttribute('aria-label', 'Shared Zotero library');
  community.innerHTML = `<p class="bib-community-label">Blaschka Bibliothek</p><p class="bib-community-copy"><a href="https://www.zotero.org/groups/6634544/blaschka_bibliothek" target="_blank" rel="noopener">Open / join the shared Zotero library ↗</a>. Additions, corrected metadata, better copies and duplicate reports are welcome.</p>`;
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

  const liveScript = document.createElement('script');
  liveScript.src = 'zotero-live.js?v=20260810-1';
  liveScript.defer = true;
  document.head.appendChild(liveScript);

  const keepCommunityConcise = () => {
    const copy = community.querySelector('.bib-community-copy');
    if (copy && copy.dataset.concise !== 'true') {
      copy.dataset.concise = 'true';
      copy.innerHTML = `<a href="https://www.zotero.org/groups/6634544/blaschka_bibliothek" target="_blank" rel="noopener">Open / join the Blaschka Bibliothek ↗</a>. The live library is merged with this working bibliography; additions and corrections are welcome.`;
    }
    const label = community.querySelector('.bib-community-label');
    if (label) label.textContent = 'Blaschka Bibliothek';
  };
  keepCommunityConcise();
  new MutationObserver(keepCommunityConcise).observe(community, {childList:true, subtree:true});

  const selected = new Set();
  const collator = new Intl.Collator(['en','de','fr','it','es'], { sensitivity:'base', numeric:true });
  let mode = 'year';
  let observer;

  const entryKey = (node,index) => node.dataset.selectionKey || (node.dataset.selectionKey = node.dataset.zoteroKey ? `zotero-${node.dataset.zoteroKey}` : `site-${yearOf(node)}-${index}-${fold(titleGuess(node)).slice(0,42).replace(/[^a-z0-9]+/g,'-')}`);

  const updateSelectedCount = () => {
    const count = selected.size;
    const el = toolbar.querySelector('.bib-selected-count');
    if (el) el.textContent = `${count} selected`;
  };

  const attachSelection = (node,index) => {
    const key = entryKey(node,index);
    let label = node.querySelector(':scope > .bib-select');
    if (!label) {
      label = document.createElement('label');
      label.className = 'bib-select';
      label.title = 'Select this reference for export';
      label.innerHTML = `<input type="checkbox" aria-label="Select reference for export"><span aria-hidden="true"></span>`;
      node.prepend(label);
      const input = label.querySelector('input');
      input.addEventListener('change', () => {
        if (input.checked) selected.add(key); else selected.delete(key);
        node.classList.toggle('is-selected', input.checked);
        updateSelectedCount();
      });
    }
    const input = label.querySelector('input');
    const checked = selected.has(key);
    input.checked = checked;
    node.classList.toggle('is-selected', checked);
  };

  const applyFilter = () => {
    const q = fold(query);
    let visible = 0;
    entries().forEach(node => {
      const show = !q || fold(`${citationText(node)} ${labelsOf(node).join(' ')} ${urlsOf(node).join(' ')}`).includes(q);
      node.hidden = !show;
      if (show) visible++;
    });
    if (queryBanner) queryBanner.querySelector('em').textContent = `${visible} matching record${visible === 1 ? '' : 's'}`;
  };

  const authorSortKey = node => {
    const names = authorNames(node);
    if (!names.length) return titleGuess(node);
    const parsed = splitName(names[0]);
    return parsed.family || parsed.literal || names[0];
  };

  const applySort = () => {
    const rows = entries().map((node,index) => ({ node,index,year:yearOf(node),author:authorSortKey(node),citation:citationText(node) }));
    if (observer) observer.disconnect();
    rows.sort((a,b) => mode === 'author'
      ? collator.compare(a.author,b.author) || (a.year-b.year) || collator.compare(a.citation,b.citation) || (a.index-b.index)
      : (a.year-b.year) || (a.index-b.index)
    ).forEach(({node}) => list.appendChild(node));

    let changed = false;
    entries().forEach((node,index) => {
      attachSelection(node,index);
      if (attachZoteroMetadata(node)) changed = true;
    });
    applyFilter();
    toolbar.querySelectorAll('[data-sort]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.sort === mode)));
    updateSelectedCount();
    if (changed) notifyZotero();
    if (observer) observer.observe(list,{childList:true});
  };

  const exportNodes = () => {
    const all = entries();
    if (selected.size) return all.filter((node,index) => selected.has(entryKey(node,index)));
    return all.filter(node => !node.hidden);
  };

  const csvCell = (value, delimiter=',') => {
    const s = String(value ?? '');
    return /["\r\n]/.test(s) || s.includes(delimiter) ? `"${s.replace(/"/g,'""')}"` : s;
  };

  const rowsForExport = nodes => nodes.map(node => ({
    year:yearOf(node),
    author:authorCredit(node),
    title:titleGuess(node),
    citation:citationText(node),
    doi:doiOf(node),
    isbn:isbnOf(node),
    source_labels:labelsOf(node).join(' | '),
    source_urls:urlsOf(node).join(' | ')
  }));

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

  const tabular = (nodes,delimiter) => {
    const rows = rowsForExport(nodes);
    const header = Object.keys(rows[0] || {year:'',author:'',title:'',citation:'',doi:'',isbn:'',source_labels:'',source_urls:''});
    return [header.join(delimiter), ...rows.map(r => header.map(k => csvCell(r[k],delimiter)).join(delimiter))].join('\n') + '\n';
  };

  const csl = nodes => nodes.map((node,index) => {
    const names = authorNames(node).map(splitName).map(a => a.literal ? {literal:a.literal} : {given:a.given,family:a.family});
    const kind = itemKind(node);
    const item = {
      id:`blaschka-bib-${String(index+1).padStart(3,'0')}`,
      type:kind === 'book' ? 'book' : kind === 'thesis' ? 'thesis' : 'article-journal',
      title:titleGuess(node),
      issued:{'date-parts':[[yearOf(node)]]},
      note:`Full working citation: ${citationText(node)}`
    };
    if (names.length) item.author = names;
    const doi = doiOf(node), isbn = isbnOf(node), url = firstURL(node);
    if (doi) item.DOI = doi;
    if (isbn) item.ISBN = isbn;
    if (url) item.URL = url;
    return item;
  });

  const bib = nodes => rowsForExport(nodes).map((r,i) => {
    const node = nodes[i];
    const type = itemKind(node) === 'book' ? 'book' : itemKind(node) === 'thesis' ? 'phdthesis' : 'article';
    return `@${type}{blaschka_${r.year}_${String(i+1).padStart(3,'0')},\n  title = {${r.title.replace(/[{}]/g,'')}},\n  author = {${r.author.replace(/,\s+and\s+|\s+and\s+/g,' and ')}},\n  year = {${r.year}}${r.doi?`,\n  doi = {${r.doi}}`:''}${r.isbn?`,\n  isbn = {${r.isbn}}`:''}${r.source_urls?`,\n  url = {${r.source_urls.split(' | ')[0]}}`:''},\n  note = {${r.citation.replace(/[{}]/g,'')}}\n}`;
  }).join('\n\n') + '\n';

  const ris = nodes => nodes.map(node => {
    const lines = [`TY  - ${itemKind(node)==='book'?'BOOK':itemKind(node)==='thesis'?'THES':'JOUR'}`, `TI  - ${titleGuess(node)}`];
    authorNames(node).forEach(a => lines.push(`AU  - ${a}`));
    lines.push(`PY  - ${yearOf(node)}`);
    const doi = doiOf(node), isbn = isbnOf(node), url = firstURL(node);
    if (doi) lines.push(`DO  - ${doi}`);
    if (isbn) lines.push(`SN  - ${isbn}`);
    if (url) lines.push(`UR  - ${url}`);
    lines.push(`N1  - ${citationText(node)}`, 'ER  - ');
    return lines.join('\n');
  }).join('\n\n') + '\n';

  toolbar.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;

    if (button.dataset.sort) {
      mode = button.dataset.sort;
      applySort();
      return;
    }

    if (button.dataset.select === 'visible') {
      entries().forEach((node,index) => {
        if (!node.hidden) selected.add(entryKey(node,index));
      });
      applySort();
      return;
    }

    if (button.dataset.select === 'clear') {
      selected.clear();
      applySort();
      return;
    }

    const kind = button.dataset.export;
    if (!kind) return;
    const nodes = exportNodes();
    if (!nodes.length) return;
    const suffix = selected.size ? `selected-${selected.size}` : query ? 'search-results' : 'working-bibliography';
    if (kind === 'csv') download(`blaschka-${suffix}.csv`, '\ufeff' + tabular(nodes,','), 'text/csv;charset=utf-8');
    if (kind === 'tsv') download(`blaschka-${suffix}.tsv`, tabular(nodes,'\t'), 'text/tab-separated-values;charset=utf-8');
    if (kind === 'csl') download(`blaschka-${suffix}.csl.json`, JSON.stringify(csl(nodes),null,2)+'\n', 'application/json;charset=utf-8');
    if (kind === 'bib') download(`blaschka-${suffix}.bib`, bib(nodes), 'application/x-bibtex;charset=utf-8');
    if (kind === 'ris') download(`blaschka-${suffix}.ris`, ris(nodes), 'application/x-research-info-systems;charset=utf-8');
  });

  let scheduled = false;
  observer = new MutationObserver(mutations => {
    if (!mutations.some(m => [...m.addedNodes].some(n => n.nodeType === Node.ELEMENT_NODE))) return;
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applySort();
    });
  });
  observer.observe(list, {childList:true});
  applySort();
})();
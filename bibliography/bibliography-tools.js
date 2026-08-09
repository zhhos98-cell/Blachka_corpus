(() => {
  const list = document.querySelector('.bib-list');
  const section = document.querySelector('.bib-section');
  const intro = document.querySelector('.page-intro');
  if (!list || !section || document.querySelector('.bib-tools')) return;

  const SOURCE_ID = 'info:sid/zhhos98-cell.github.io:Blachka_corpus';
  const clean = value => String(value || '').replace(/\s+/g, ' ').trim();
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
    if (!name || organizationPattern.test(name)) return { literal: name || '' };
    const parts = name.split(/\s+/);
    if (parts.length < 2) return { literal: name };
    const particles = new Set(['da','de','del','der','di','du','la','le','van','von']);
    let start = parts.length - 1;
    while (start > 0 && particles.has(parts[start - 1].toLowerCase())) start--;
    return { given: parts.slice(0, start).join(' '), family: parts.slice(start).join(' ') };
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
    if (/\b(dissertation|thesis|mémoire)\b/i.test(citation)) return 'thesis';
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
    authors.forEach(a => params.append('rft.au', a.literal || [a.given, a.family].filter(Boolean).join(' ')));
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
    .bib-tools{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:16px 26px;margin:18px 0 30px;padding:14px 0 16px;border-top:1px solid rgba(242,238,233,.16);border-bottom:1px solid rgba(242,238,233,.16);font-family:Arial,Helvetica,sans-serif}
    .bib-tools-group{display:flex;flex-wrap:wrap;align-items:center;gap:8px}.bib-tools-label,.bib-tools-status,.bib-tools-note{margin:0;color:rgba(242,238,233,.58);font-size:.66rem;line-height:1.4}.bib-tools-label{margin-right:3px;font-weight:700;letter-spacing:.07em;text-transform:uppercase}.bib-tool-button{min-height:34px;padding:0 11px;border:1px solid rgba(242,238,233,.3);background:transparent;color:rgba(242,238,233,.88);font:600 .66rem/1 Arial,Helvetica,sans-serif;letter-spacing:.025em;cursor:pointer}.bib-tool-button:hover,.bib-tool-button:focus-visible{border-color:rgba(242,238,233,.62);color:#fff;outline:none}.bib-tool-button[aria-pressed="true"]{background:rgba(242,238,233,.11);border-color:rgba(242,238,233,.56);color:#fff}.bib-tools-meta{flex-basis:100%;display:flex;flex-wrap:wrap;gap:8px 18px;padding-top:2px}@media(max-width:720px){.bib-tools{display:block}.bib-tools-group+.bib-tools-group{margin-top:12px}.bib-tools-meta{margin-top:12px}}
  `;
  document.head.appendChild(style);

  const toolbar = document.createElement('div');
  toolbar.className = 'bib-tools';
  toolbar.setAttribute('aria-label', 'Bibliography sorting and export tools');
  toolbar.innerHTML = `
    <div class="bib-tools-group" role="group" aria-label="Sort bibliography"><span class="bib-tools-label">Sort</span><button class="bib-tool-button" type="button" data-sort="year" aria-pressed="true">Year ↑</button><button class="bib-tool-button" type="button" data-sort="author" aria-pressed="false">Author A–Z</button></div>
    <div class="bib-tools-group" role="group" aria-label="Export bibliography"><span class="bib-tools-label">Export</span><button class="bib-tool-button" type="button" data-export="csv">CSV</button><button class="bib-tool-button" type="button" data-export="tsv">TSV</button><button class="bib-tool-button" type="button" data-export="csl">CSL JSON</button><button class="bib-tool-button" type="button" data-export="bib">BibTeX</button><button class="bib-tool-button" type="button" data-export="ris">RIS</button></div>
    <div class="bib-tools-meta"><p class="bib-tools-status" aria-live="polite"></p><p class="bib-tools-note">Zotero Connector metadata is embedded per record. DOI, ISBN, title, authors, year, journal/book fields and stable URLs are exposed where they can be recovered safely from the working citation.</p></div>`;
  if (intro) intro.insertAdjacentElement('afterend', toolbar); else section.insertAdjacentElement('beforebegin', toolbar);

  const collator = new Intl.Collator(['en','de','fr','it','es'], { sensitivity:'base', numeric:true });
  let mode = 'year', observer;
  const authorSortKey = node => {
    const names = authorNames(node);
    if (!names.length) return titleGuess(node);
    const parsed = splitName(names[0]);
    return parsed.family || parsed.literal || names[0];
  };

  const updateStatus = () => {
    const status = toolbar.querySelector('.bib-tools-status');
    if (status) status.textContent = `${entries().length} records · ${mode === 'author' ? 'author A–Z' : 'year ascending'} · Zotero-ready`;
  };

  const applySort = () => {
    const rows = entries().map((node,index) => ({node,index,year:yearOf(node),author:authorSortKey(node),citation:citationText(node)}));
    if (observer) observer.disconnect();
    rows.sort((a,b) => mode === 'author' ? collator.compare(a.author,b.author)||(a.year-b.year)||collator.compare(a.citation,b.citation)||(a.index-b.index) : (a.year-b.year)||(a.index-b.index)).forEach(({node}) => list.appendChild(node));
    let changed = false;
    entries().forEach(node => { if (attachZoteroMetadata(node)) changed = true; });
    toolbar.querySelectorAll('[data-sort]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.sort === mode)));
    updateStatus();
    if (changed) notifyZotero();
    if (observer) observer.observe(list,{childList:true});
  };

  const csvCell = (value, delimiter=',') => { const s=String(value??''); return /["\r\n]/.test(s)||s.includes(delimiter) ? `"${s.replace(/"/g,'""')}"` : s; };
  const rowsForExport = () => entries().map(node => ({year:yearOf(node),author:authorCredit(node),title:titleGuess(node),citation:citationText(node),doi:doiOf(node),isbn:isbnOf(node),source_labels:labelsOf(node).join(' | '),source_urls:urlsOf(node).join(' | ')}));
  const download = (filename,text,type) => { const blob=new Blob([text],{type}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000); };
  const tabular = delimiter => { const rows=rowsForExport(), header=Object.keys(rows[0]||{}); return [header.join(delimiter),...rows.map(r=>header.map(k=>csvCell(r[k],delimiter)).join(delimiter))].join('\n')+'\n'; };
  const csl = () => entries().map((node,index) => { const names=authorNames(node).map(splitName).map(a=>a.literal?{literal:a.literal}:{given:a.given,family:a.family}); const item={id:`blaschka-bib-${String(index+1).padStart(3,'0')}`,type:itemKind(node)==='book'?'book':'article-journal',title:titleGuess(node),issued:{'date-parts':[[yearOf(node)]]},note:`Full working citation: ${citationText(node)}`}; if(names.length)item.author=names; const doi=doiOf(node),isbn=isbnOf(node),url=firstURL(node); if(doi)item.DOI=doi;if(isbn)item.ISBN=isbn;if(url)item.URL=url;return item; });
  const bib = () => rowsForExport().map((r,i)=>`@${itemKind(entries()[i])==='book'?'book':'article'}{blaschka_${r.year}_${String(i+1).padStart(3,'0')},\n  title = {${r.title.replace(/[{}]/g,'')}},\n  author = {${r.author.replace(/,\s+and\s+|\s+and\s+/g,' and ')}},\n  year = {${r.year}}${r.doi?`,\n  doi = {${r.doi}}`:''}${r.isbn?`,\n  isbn = {${r.isbn}}`:''}${r.source_urls?`,\n  url = {${r.source_urls.split(' | ')[0]}}`:''},\n  note = {${r.citation.replace(/[{}]/g,'')}}\n}`).join('\n\n')+'\n';
  const ris = () => entries().map(node => { const lines=[`TY  - ${itemKind(node)==='book'?'BOOK':'JOUR'}`,`TI  - ${titleGuess(node)}`]; authorNames(node).forEach(a=>lines.push(`AU  - ${a}`)); lines.push(`PY  - ${yearOf(node)}`); const doi=doiOf(node),isbn=isbnOf(node),url=firstURL(node); if(doi)lines.push(`DO  - ${doi}`);if(isbn)lines.push(`SN  - ${isbn}`);if(url)lines.push(`UR  - ${url}`);lines.push(`N1  - ${citationText(node)}`,'ER  - '); return lines.join('\n'); }).join('\n\n')+'\n';

  toolbar.addEventListener('click', event => {
    const button = event.target.closest('button'); if (!button) return;
    if (button.dataset.sort) { mode=button.dataset.sort;applySort();return; }
    const kind=button.dataset.export;
    if(kind==='csv')download('blaschka-working-bibliography.csv','\ufeff'+tabular(','),'text/csv;charset=utf-8');
    if(kind==='tsv')download('blaschka-working-bibliography.tsv',tabular('\t'),'text/tab-separated-values;charset=utf-8');
    if(kind==='csl')download('blaschka-working-bibliography.csl.json',JSON.stringify(csl(),null,2)+'\n','application/json;charset=utf-8');
    if(kind==='bib')download('blaschka-working-bibliography.bib',bib(),'application/x-bibtex;charset=utf-8');
    if(kind==='ris')download('blaschka-working-bibliography.ris',ris(),'application/x-research-info-systems;charset=utf-8');
  });

  let scheduled=false;
  observer = new MutationObserver(mutations => {
    if (!mutations.some(m => [...m.addedNodes].some(n => n.nodeType===Node.ELEMENT_NODE))) return;
    if (scheduled) return;
    scheduled=true;
    requestAnimationFrame(()=>{scheduled=false;applySort();});
  });
  observer.observe(list,{childList:true});
  applySort();
})();

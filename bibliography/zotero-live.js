(() => {
  const GROUP_ID = '6634544';
  const GROUP_URL = 'https://www.zotero.org/groups/6634544/blaschka_bibliothek';
  const API_URL = `https://api.zotero.org/groups/${GROUP_ID}/items/top`;
  const CACHE_KEY = 'blaschka-zotero-live-v1';
  const CACHE_MS = 10 * 60 * 1000;

  const list = document.querySelector('.bib-list');
  const community = document.querySelector('.bib-community');
  if (!list || !community || document.querySelector('#zotero-live-style')) return;

  const style = document.createElement('style');
  style.id = 'zotero-live-style';
  style.textContent = `
    .bib-community-live{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:18px 28px;align-items:end;max-width:none;margin:-10px 0 34px;padding:18px 0 20px;border-top:1px solid rgba(242,238,233,.14);border-bottom:1px solid rgba(242,238,233,.14)}
    .bib-community-live .bib-community-copy{max-width:920px}.bib-community-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}.bib-community-action{display:inline-flex;align-items:center;min-height:34px;padding:0 11px;border:1px solid rgba(242,238,233,.3);color:rgba(242,238,233,.9);font:600 .66rem/1 Arial,Helvetica,sans-serif;letter-spacing:.025em;text-decoration:none}.bib-community-action:hover,.bib-community-action:focus-visible{border-color:rgba(242,238,233,.62);color:#fff;outline:none}.bib-zotero-status{grid-column:1/-1;margin:0;color:rgba(242,238,233,.5);font:500 .66rem/1.45 Arial,Helvetica,sans-serif}.bib-entry[data-zotero-live="true"] .bib-links a[data-zotero-link="true"]{text-decoration-style:dotted}
    @media(max-width:760px){.bib-community-live{display:block}.bib-community-actions{justify-content:flex-start;margin-top:14px}.bib-zotero-status{margin-top:12px}}
  `;
  document.head.appendChild(style);

  community.classList.add('bib-community-live');
  community.innerHTML = `
    <div>
      <p class="bib-community-label">Shared Zotero library</p>
      <p class="bib-community-copy">This page keeps the full site bibliography and adds a live layer from the public <strong>Blaschka Bibliothek</strong>. Zotero records are merged into the bibliography at display time, so additions and metadata improvements can appear without a site commit. The Zotero library is supplementary: historical and grey literature without stable identifiers may still exist only in the site bibliography. Researchers, curators, conservators, librarians, students, and other interested contributors are welcome to join and help maintain the shared library.</p>
    </div>
    <div class="bib-community-actions"><a class="bib-community-action" href="${GROUP_URL}" target="_blank" rel="noopener">Open / join Zotero ↗</a></div>
    <p class="bib-zotero-status" aria-live="polite">Connecting the live Zotero layer…</p>`;

  const status = community.querySelector('.bib-zotero-status');
  const clean = value => String(value || '').replace(/\s+/g, ' ').trim();
  const stripHTML = value => {
    const temp = document.createElement('div');
    temp.innerHTML = String(value || '');
    return clean(temp.textContent || '');
  };
  const normDOI = value => clean(value).replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '').toLowerCase().replace(/[.,;]+$/, '');
  const normISBN = value => clean(value).replace(/[^0-9Xx]/g, '').toUpperCase();
  const normTitle = value => clean(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const staticTitle = node => {
    const heading = node.querySelector('h3');
    const text = clean(heading?.textContent);
    const quoted = text.match(/[“"]([^”"]+)[”"]/u);
    if (quoted) return clean(quoted[1]);
    const emphasis = heading?.querySelector('em');
    return emphasis ? clean(emphasis.textContent) : text;
  };
  const staticDOI = node => {
    for (const a of node.querySelectorAll('.bib-links a')) {
      try {
        const u = new URL(a.href);
        if (u.hostname.toLowerCase() === 'doi.org') return normDOI(u.href);
      } catch {}
    }
    const m = clean(node.textContent).match(/10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i);
    return m ? normDOI(m[0]) : '';
  };
  const staticISBN = node => {
    const m = clean(node.textContent).match(/\bISBN(?:-1[03])?\s*[:#]?\s*((?:97[89][\s-]?)?\d[\d\s-]{7,16}[\dXx])\b/i);
    return m ? normISBN(m[1]) : '';
  };

  const buildIndex = () => {
    const idx = { doi:new Map(), isbn:new Map(), title:new Map() };
    [...list.querySelectorAll('.bib-entry:not([data-zotero-live="true"])')].forEach(node => {
      const doi = staticDOI(node), isbn = staticISBN(node), title = normTitle(staticTitle(node));
      if (doi) idx.doi.set(doi, node);
      if (isbn) idx.isbn.set(isbn, node);
      if (title && title.length >= 8) idx.title.set(title, node);
    });
    return idx;
  };

  const creatorsOf = data => (data.creators || []).map(c => clean(c.name || [c.firstName, c.lastName].filter(Boolean).join(' '))).filter(Boolean);
  const authorsText = data => {
    const names = creatorsOf(data);
    if (!names.length) return '';
    if (names.length === 1) return names[0];
    if (names.length === 2) return `${names[0]} and ${names[1]}`;
    return `${names.slice(0, -1).join(', ')}, and ${names[names.length - 1]}`;
  };
  const yearOf = data => {
    const m = clean(data.date).match(/(?:1[5-9]|20)\d{2}/);
    return m ? m[0] : 'n.d.';
  };
  const zoteroItemURL = item => item?.links?.alternate?.href || `${GROUP_URL}/items/${item.key || ''}`;
  const itemDOI = data => normDOI(data.DOI || '');
  const itemISBN = data => {
    const raw = clean(data.ISBN || '').split(/[;,]/)[0];
    return normISBN(raw);
  };
  const venueParts = data => {
    const parts = [];
    const container = clean(data.publicationTitle || data.bookTitle || data.proceedingsTitle || data.series || '');
    if (container) parts.push(container);
    if (data.volume) parts.push(`vol. ${clean(data.volume)}`);
    if (data.issue) parts.push(`no. ${clean(data.issue)}`);
    if (data.pages) parts.push(clean(data.pages));
    if (!container && data.publisher) parts.push(clean(data.publisher));
    return parts;
  };
  const articleLike = type => new Set(['journalArticle','magazineArticle','newspaperArticle','conferencePaper','bookSection','encyclopediaArticle','dictionaryEntry']).has(type);

  const appendLinks = (node, item, data) => {
    let links = node.querySelector('.bib-links');
    if (!links) {
      links = document.createElement('p');
      links.className = 'bib-links';
      node.querySelector('div')?.appendChild(links);
    }
    const existing = [...links.querySelectorAll('a')].map(a => a.href);
    const parts = [];
    const doi = itemDOI(data);
    if (doi && !existing.some(h => normDOI(h) === doi)) parts.push({href:`https://doi.org/${doi}`, label:'DOI ↗'});
    const url = clean(data.url);
    if (url && !existing.includes(url)) parts.push({href:url, label:'Source ↗'});
    const zurl = zoteroItemURL(item);
    if (zurl && !existing.includes(zurl)) parts.push({href:zurl, label:'Zotero ↗', zotero:true});
    parts.forEach((part, i) => {
      if (links.childNodes.length) links.appendChild(document.createTextNode(' · '));
      const a = document.createElement('a');
      a.href = part.href;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = part.label;
      if (part.zotero) a.dataset.zoteroLink = 'true';
      links.appendChild(a);
    });
  };

  const createEntry = item => {
    const data = item.data || {};
    const title = stripHTML(data.title);
    if (!title) return null;
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.sourcePass = 'zotero-live';
    article.dataset.zoteroLive = 'true';
    article.dataset.zoteroKey = item.key || data.key || '';

    const year = document.createElement('p');
    year.className = 'bib-year';
    year.textContent = yearOf(data);
    article.appendChild(year);

    const body = document.createElement('div');
    const h3 = document.createElement('h3');
    const author = authorsText(data);
    if (author) h3.appendChild(document.createTextNode(`${author}, `));
    if (articleLike(data.itemType)) {
      h3.appendChild(document.createTextNode('“'));
      h3.appendChild(document.createTextNode(title));
      h3.appendChild(document.createTextNode(',”'));
    } else {
      const em = document.createElement('em');
      em.textContent = title;
      h3.appendChild(em);
    }
    const venue = venueParts(data);
    if (venue.length) {
      h3.appendChild(document.createTextNode(' '));
      if (data.publicationTitle || data.bookTitle || data.proceedingsTitle) {
        const em = document.createElement('em');
        em.textContent = venue.shift();
        h3.appendChild(em);
        if (venue.length) h3.appendChild(document.createTextNode(`, ${venue.join(', ')}`));
      } else {
        h3.appendChild(document.createTextNode(venue.join(', ')));
      }
      h3.appendChild(document.createTextNode('.'));
    }
    body.appendChild(h3);
    article.appendChild(body);
    appendLinks(article, item, data);
    return article;
  };

  const slim = item => ({key:item.key, links:item.links, data:item.data});
  const readCache = () => {
    try {
      const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
      if (cached && Array.isArray(cached.items) && Date.now() - cached.time < CACHE_MS) return cached.items;
    } catch {}
    return null;
  };
  const writeCache = items => {
    try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({time:Date.now(), items:items.map(slim)})); } catch {}
  };

  const fetchAll = async () => {
    const cached = readCache();
    if (cached) return cached;
    const items = [];
    let start = 0;
    for (let page = 0; page < 30; page++) {
      const url = new URL(API_URL);
      url.searchParams.set('format', 'json');
      url.searchParams.set('include', 'data');
      url.searchParams.set('limit', '100');
      url.searchParams.set('start', String(start));
      url.searchParams.set('sort', 'date');
      url.searchParams.set('direction', 'asc');
      url.searchParams.set('v', '3');
      const response = await fetch(url.toString(), {mode:'cors', credentials:'omit'});
      if (!response.ok) throw new Error(`Zotero API ${response.status}`);
      const batch = await response.json();
      if (!Array.isArray(batch)) throw new Error('Unexpected Zotero response');
      const usable = batch.filter(item => !['attachment','note','annotation'].includes(item?.data?.itemType));
      items.push(...usable);
      if (batch.length < 100) break;
      start += batch.length;
    }
    writeCache(items);
    return items;
  };

  const merge = items => {
    const idx = buildIndex();
    const addedKeys = new Set([...list.querySelectorAll('.bib-entry[data-zotero-key]')].map(n => n.dataset.zoteroKey));
    items.forEach(item => {
      const data = item.data || {};
      if (addedKeys.has(item.key)) return;
      const doi = itemDOI(data);
      const isbn = itemISBN(data);
      const title = normTitle(stripHTML(data.title));
      const match = (doi && idx.doi.get(doi)) || (isbn && idx.isbn.get(isbn)) || (title && idx.title.get(title));
      if (match) {
        appendLinks(match, item, data);
        if (doi) idx.doi.set(doi, match);
        if (isbn) idx.isbn.set(isbn, match);
        if (title) idx.title.set(title, match);
        return;
      }
      const node = createEntry(item);
      if (!node) return;
      list.appendChild(node);
      if (doi) idx.doi.set(doi, node);
      if (isbn) idx.isbn.set(isbn, node);
      if (title) idx.title.set(title, node);
    });
  };

  fetchAll().then(items => {
    merge(items);
    status.textContent = 'Live Zotero records are merged with the site bibliography. Repository-only records remain in place.';
    document.dispatchEvent(new Event('ZoteroItemUpdated', {bubbles:true, cancelable:true}));
  }).catch(error => {
    console.warn('Blaschka Zotero live layer unavailable:', error);
    status.textContent = 'The live Zotero layer is temporarily unavailable; the complete site bibliography remains available.';
  });
})();
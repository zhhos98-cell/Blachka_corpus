(() => {
  if (!window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260810-1';
    document.head.appendChild(ui);
  }

  const main = document.querySelector('.subpage-main');
  const intro = document.querySelector('.source-intro');
  if (!main || !intro || document.querySelector('.source-az')) return;

  const clean = value => String(value || '').replace(/\s+/g, ' ').trim();
  const fold = value => clean(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  const titleForSort = node => clean(node.querySelector('h3')?.textContent)
    .replace(/^[“"'‘’]+/, '')
    .replace(/^the\s+/i, '');

  const countryRules = [
    ['United States', /\bUnited States\b|Harvard|Cornell|Rochester|Tufts|Vassar|Smithsonian|Corning Museum|New York|Boston|Cambridge,? Massachusetts/i],
    ['United Kingdom', /\bUnited Kingdom\b|Oxford|Cambridge|Dundee|Liverpool|London|Manchester|Nottingham|St Andrews|Cardiff|Wales|British Library|Natural History Museum London/i],
    ['Germany', /\bGermany\b|Dresden|Hamburg|Bremen|Berlin|Tübingen|Reichsbank|Bundesarchiv|SLUB|MDZ|Bayerische Staatsbibliothek/i],
    ['France', /\bFrance\b|Paris|MNHN|Muséum national/i],
    ['Italy', /\bItaly\b|Firenze|Florence|Naples|Napoli|Pavia|Padua/i],
    ['Belgium', /\bBelgium\b|Liège|Liege|Meise|Antwerp/i],
    ['Austria', /\bAustria\b|Vienna|Wien/i],
    ['Netherlands', /\bNetherlands\b|Utrecht/i],
    ['Ireland', /\bIreland\b|Dublin|Galway|Belfast/i],
    ['Australia', /\bAustralia\b|Melbourne|Sydney/i],
    ['New Zealand', /\bNew Zealand\b|Auckland|Te Papa/i],
    ['Canada', /\bCanada\b|Montreal|McGill/i],
    ['Mexico', /\bMexico\b|México|UNAM/i],
    ['Argentina', /\bArgentina\b|La Plata/i],
    ['Japan', /\bJapan\b|Tokyo|Tōkyō/i],
    ['South Africa', /\bSouth Africa\b|Cape Town|UCT|Iziko/i],
    ['Denmark', /\bDenmark\b|Copenhagen/i],
    ['Sweden', /\bSweden\b/i],
    ['Czech Republic', /\bCzech\b|Prague/i],
    ['Portugal', /\bPortugal\b|Coimbra/i],
    ['Spain', /\bSpain\b|Madrid|Cajal/i],
    ['Switzerland', /\bSwitzerland\b|Zurich|Zürich/i]
  ];

  const sourceKind = node => {
    const section = node.closest('.source-section');
    const heading = clean(section?.querySelector('h2')?.textContent);
    const kicker = clean(section?.querySelector('.source-kicker')?.textContent);
    const text = `${clean(node.textContent)} ${heading} ${kicker}`;
    if (/Repositories used for source discovery|Discovery infrastructure/i.test(`${heading} ${kicker}`)) return 'Discovery portal';
    if (/correspondence|letters?\b|outward letter|inward letter/i.test(text)) return 'Correspondence';
    if (/archive|finding aid|fonds\b|papers\b|record group|manuscript/i.test(text)) return 'Archive / manuscript';
    if (/catalogue|price list|inventory|register|ledger|database|index card|card catalogue/i.test(text)) return 'Catalogue / register';
    if (/freight|shipping|forwarder|customs|consular|bank|payment|dealer|commercial|invoice|order|account/i.test(text)) return 'Commercial / logistical';
    if (/published|journal|paper|notice|workshop-authored|contemporary|sales literature/i.test(text)) return 'Published primary source';
    if (/collection|museum|specimen|object/i.test(text)) return 'Institutional collection';
    return 'Other source';
  };

  const regionOf = node => {
    const text = clean(node.textContent);
    const hits = countryRules.filter(([, pattern]) => pattern.test(text)).map(([name]) => name);
    if (hits.length === 1) return hits[0];
    if (hits.length > 1) return 'Transnational';
    return 'Unspecified';
  };

  const sectionLabel = node => {
    const section = node.closest('.source-section');
    return clean(section?.querySelector('.source-kicker')?.textContent || section?.querySelector('h2')?.textContent || 'Sources');
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const browser = document.createElement('section');
  browser.className = 'source-az';
  browser.setAttribute('aria-labelledby', 'source-az-title');
  browser.innerHTML = `
    <div class="source-az-heading">
      <p class="source-kicker">Browse the source index</p>
      <h2 id="source-az-title">A–Z Sources</h2>
      <p class="source-az-dek">Browse archives, catalogues, correspondence, institutional collections, published primary material and discovery routes. Search matches titles, descriptions and source labels.</p>
    </div>
    <form class="source-az-filters" role="search">
      <label><span>Source kind</span><select data-filter="kind"><option value="">All source kinds</option></select></label>
      <label><span>Region</span><select data-filter="region"><option value="">All regions</option></select></label>
      <label class="source-az-search"><span>Search</span><div><input type="search" data-filter="q" placeholder="Search sources" autocomplete="off"><button type="submit">Go</button></div></label>
    </form>
    <nav class="source-az-alpha" aria-label="Browse sources by first letter">
      <button type="button" data-letter="" aria-pressed="true">All</button>
      ${alphabet.map(letter => `<button type="button" data-letter="${letter}" aria-pressed="false">${letter}</button>`).join('')}
      <button type="button" data-letter="#" aria-pressed="false">#</button>
    </nav>
    <div class="source-az-reset" hidden><span>Filtered view</span><button type="button">Clear filters / browse all sources</button></div>
    <div class="source-az-results" aria-live="polite"></div>
  `;
  intro.insertAdjacentElement('afterend', browser);

  const results = browser.querySelector('.source-az-results');
  const kindSelect = browser.querySelector('[data-filter="kind"]');
  const regionSelect = browser.querySelector('[data-filter="region"]');
  const searchInput = browser.querySelector('[data-filter="q"]');
  const resetBar = browser.querySelector('.source-az-reset');
  const resetButton = resetBar.querySelector('button');
  let letter = '';
  let records = [];

  const firstLetter = title => {
    const stripped = clean(title).replace(/^[“"'‘’]+/, '').replace(/^the\s+/i, '');
    const first = stripped.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').charAt(0).toUpperCase();
    return /[A-Z]/.test(first) ? first : '#';
  };

  const readRecords = () => {
    records = [...main.querySelectorAll('.source-section .source-entry')].map((node, index) => {
      const title = clean(node.querySelector('h3')?.textContent);
      return {
        node,
        index,
        title,
        sortTitle: titleForSort(node),
        letter: firstLetter(title),
        kind: sourceKind(node),
        region: regionOf(node),
        section: sectionLabel(node),
        haystack: fold(`${title} ${node.querySelector('.source-type')?.textContent || ''} ${node.querySelector('.source-meta')?.textContent || ''} ${sectionLabel(node)}`)
      };
    }).filter(record => record.title);
  };

  const populateSelect = (select, values, current) => {
    const first = select.options[0].outerHTML;
    select.innerHTML = first + values.map(value => `<option value="${value.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}">${value}</option>`).join('');
    select.value = values.includes(current) ? current : '';
  };

  const syncFilterOptions = () => {
    const currentKind = kindSelect.value;
    const currentRegion = regionSelect.value;
    const kinds = [...new Set(records.map(r => r.kind))].sort();
    const regions = [...new Set(records.map(r => r.region))].sort((a,b) => {
      if (a === 'Unspecified') return 1;
      if (b === 'Unspecified') return -1;
      if (a === 'Transnational') return 1;
      if (b === 'Transnational') return -1;
      return a.localeCompare(b);
    });
    populateSelect(kindSelect, kinds, currentKind);
    populateSelect(regionSelect, regions, currentRegion);
  };

  const updateURL = () => {
    const params = new URLSearchParams(location.search);
    const set = (key, value) => value ? params.set(key, value) : params.delete(key);
    set('q', clean(searchInput.value));
    set('kind', kindSelect.value);
    set('region', regionSelect.value);
    set('a', letter);
    const query = params.toString();
    history.replaceState(null, '', `${location.pathname}${query ? `?${query}` : ''}${location.hash}`);
  };

  const render = () => {
    const q = fold(searchInput.value);
    const kind = kindSelect.value;
    const region = regionSelect.value;
    const filtered = records.filter(record =>
      (!q || record.haystack.includes(q)) &&
      (!kind || record.kind === kind) &&
      (!region || record.region === region) &&
      (!letter || record.letter === letter)
    ).sort((a,b) => a.sortTitle.localeCompare(b.sortTitle, undefined, {sensitivity:'base', numeric:true}) || a.index - b.index);

    const availableLetters = new Set(records
      .filter(record => (!q || record.haystack.includes(q)) && (!kind || record.kind === kind) && (!region || record.region === region))
      .map(record => record.letter));

    browser.querySelectorAll('[data-letter]').forEach(button => {
      const key = button.dataset.letter;
      button.setAttribute('aria-pressed', String(key === letter));
      button.disabled = Boolean(key && !availableLetters.has(key));
    });

    results.innerHTML = '';
    if (!filtered.length) {
      results.innerHTML = '<p class="source-az-empty">No sources match these filters.</p>';
    } else {
      let activeLetter = null;
      filtered.forEach(record => {
        if (record.letter !== activeLetter) {
          activeLetter = record.letter;
          const heading = document.createElement('h3');
          heading.className = 'source-az-letter';
          heading.textContent = activeLetter;
          results.appendChild(heading);
        }
        const clone = record.node.cloneNode(true);
        clone.classList.add('source-az-entry');
        clone.removeAttribute('id');
        clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
        const context = document.createElement('p');
        context.className = 'source-az-context';
        context.textContent = `${record.kind} · ${record.region} · ${record.section}`;
        clone.querySelector('h3')?.insertAdjacentElement('afterend', context);
        results.appendChild(clone);
      });
    }

    resetBar.hidden = !(q || kind || region || letter);
    document.body.classList.add('sources-az-ready');
    updateURL();
  };

  const loadURL = () => {
    const params = new URLSearchParams(location.search);
    searchInput.value = params.get('q') || '';
    kindSelect.value = params.get('kind') || '';
    regionSelect.value = params.get('region') || '';
    const requestedLetter = (params.get('a') || '').toUpperCase();
    letter = alphabet.includes(requestedLetter) || requestedLetter === '#' ? requestedLetter : '';
  };

  const rebuild = () => {
    readRecords();
    syncFilterOptions();
    render();
  };

  browser.querySelector('form').addEventListener('submit', event => { event.preventDefault(); render(); });
  kindSelect.addEventListener('change', render);
  regionSelect.addEventListener('change', render);
  searchInput.addEventListener('input', render);
  browser.querySelector('.source-az-alpha').addEventListener('click', event => {
    const button = event.target.closest('[data-letter]');
    if (!button || button.disabled) return;
    letter = button.dataset.letter;
    render();
  });
  resetButton.addEventListener('click', () => {
    searchInput.value = '';
    kindSelect.value = '';
    regionSelect.value = '';
    letter = '';
    render();
  });
  window.addEventListener('popstate', () => { loadURL(); render(); });

  readRecords();
  syncFilterOptions();
  loadURL();
  render();

  let timer;
  const observer = new MutationObserver(mutations => {
    if (!mutations.some(m => [...m.addedNodes].some(node => node.nodeType === Node.ELEMENT_NODE && (node.matches?.('.source-section,.source-entry') || node.querySelector?.('.source-entry'))))) return;
    clearTimeout(timer);
    timer = setTimeout(rebuild, 80);
  });
  observer.observe(main, {childList:true,subtree:true});
})();

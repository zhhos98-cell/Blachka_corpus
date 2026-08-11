(() => {
  if (!window.__blaschkaUnifiedUI && !window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260811-5';
    ui.defer = true;
    document.head.appendChild(ui);
  }

  const browser = document.querySelector('.source-az');
  if (!browser) return;
  document.body.classList.add('sources-az-ready', 'sources-static');

  const clean = value => String(value || '').replace(/\s+/g, ' ').trim();
  const fold = value => clean(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const firstLetter = title => {
    const stripped = clean(title).replace(/^[“"'‘’]+/, '').replace(/^the\s+/i, '');
    const first = stripped.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').charAt(0).toUpperCase();
    return /[A-Z]/.test(first) ? first : '#';
  };

  const kindSelect = browser.querySelector('[data-filter="kind"]');
  const regionSelect = browser.querySelector('[data-filter="region"]');
  const searchInput = browser.querySelector('[data-filter="q"]');
  const resetBar = browser.querySelector('.source-az-reset');
  const results = browser.querySelector('.source-az-results');
  const empty = document.createElement('p');
  empty.className = 'source-az-empty';
  empty.textContent = 'No sources match these filters.';
  let letter = '';

  const records = [...browser.querySelectorAll('.source-az-entry')].map(node => {
    const title = clean(node.querySelector('h3')?.textContent);
    const context = clean(node.querySelector('.source-az-context')?.textContent);
    const parts = context.split(' · ');
    return {
      node,
      letter: firstLetter(title),
      kind: parts[0] || 'Other',
      region: parts[1] || 'Unspecified',
      haystack: fold(`${title} ${node.querySelector('.source-type')?.textContent || ''} ${node.querySelector('.source-meta')?.textContent || ''} ${context}`)
    };
  });
  const letterHeads = [...browser.querySelectorAll('.source-az-letter')];

  const updateURL = () => {
    const params = new URLSearchParams(location.search);
    const set = (key, value) => value ? params.set(key, value) : params.delete(key);
    set('q', clean(searchInput?.value));
    set('kind', kindSelect?.value || '');
    set('region', regionSelect?.value || '');
    set('a', letter);
    const query = params.toString();
    history.replaceState(null, '', `${location.pathname}${query ? `?${query}` : ''}${location.hash}`);
  };

  const apply = () => {
    const q = fold(searchInput?.value);
    const kind = kindSelect?.value || '';
    const region = regionSelect?.value || '';
    let visible = 0;
    const available = new Set();

    records.forEach(record => {
      const base = (!q || record.haystack.includes(q)) && (!kind || record.kind === kind) && (!region || record.region === region);
      if (base) available.add(record.letter);
      const show = base && (!letter || record.letter === letter);
      record.node.hidden = !show;
      if (show) visible += 1;
    });

    letterHeads.forEach(head => {
      const key = clean(head.textContent);
      head.hidden = !records.some(record => !record.node.hidden && record.letter === key);
    });
    browser.querySelectorAll('[data-letter]').forEach(button => {
      const key = button.dataset.letter || '';
      button.setAttribute('aria-pressed', String(key === letter));
      button.disabled = Boolean(key && !available.has(key));
    });

    if (!visible && results && !empty.isConnected) results.appendChild(empty);
    else if (visible && empty.isConnected) empty.remove();
    if (resetBar) resetBar.hidden = !(q || kind || region || letter);
    updateURL();
  };

  const loadURL = () => {
    const params = new URLSearchParams(location.search);
    if (searchInput) searchInput.value = params.get('q') || '';
    const kind = params.get('kind') || '';
    const region = params.get('region') || '';
    if (kindSelect && [...kindSelect.options].some(option => option.value === kind)) kindSelect.value = kind;
    if (regionSelect && [...regionSelect.options].some(option => option.value === region)) regionSelect.value = region;
    const requested = (params.get('a') || '').toUpperCase();
    letter = /^[A-Z#]$/.test(requested) ? requested : '';
  };

  const attachReuseIndex = async () => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection?.saveData || /(^|-)2g$/i.test(connection?.effectiveType || '')) return;

    try {
      const response = await fetch('source-reuse-ui.json?v=20260811-1', { cache: 'force-cache' });
      if (!response.ok) return;
      const data = await response.json();
      const byLocator = new Map((data.entries || []).map(item => [item.locator, item]));

      records.forEach(record => {
        const contexts = new Map();
        record.node.querySelectorAll('.source-links a[href^="http"]').forEach(link => {
          const item = byLocator.get(link.getAttribute('href'));
          if (!item) return;
          (item.contexts || []).forEach(context => {
            if (context?.file && context?.label) contexts.set(context.file, context);
          });
        });
        if (contexts.size < 2) return;

        const details = document.createElement('details');
        details.className = 'source-reuse';
        const summary = document.createElement('summary');
        summary.textContent = `Used in ${contexts.size} parts of the project`;
        const list = document.createElement('ul');

        [...contexts.values()].forEach(context => {
          const item = document.createElement('li');
          if (context.layer === 'auctions') {
            const layer = document.createElement('span');
            layer.className = 'source-reuse-layer';
            layer.textContent = 'Auction research';
            item.append(layer, document.createTextNode(' · '));
          }
          item.append(document.createTextNode(context.label));
          list.appendChild(item);
        });

        details.append(summary, list);
        const links = record.node.querySelector('.source-links');
        if (links) links.insertAdjacentElement('afterend', details);
      });
    } catch (_) {
      // Reverse-index enrichment is optional; the source index remains complete without it.
    }
  };

  browser.querySelector('form')?.addEventListener('submit', event => { event.preventDefault(); apply(); });
  kindSelect?.addEventListener('change', apply);
  regionSelect?.addEventListener('change', apply);
  let timer;
  searchInput?.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(apply, 90); });
  browser.querySelector('.source-az-alpha')?.addEventListener('click', event => {
    const button = event.target.closest('[data-letter]');
    if (!button || button.disabled) return;
    letter = button.dataset.letter || '';
    apply();
  });
  resetBar?.querySelector('button')?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (kindSelect) kindSelect.value = '';
    if (regionSelect) regionSelect.value = '';
    letter = '';
    apply();
  });
  window.addEventListener('popstate', () => { loadURL(); apply(); });

  loadURL();
  apply();
  if ('requestIdleCallback' in window) requestIdleCallback(attachReuseIndex, { timeout: 1800 });
  else setTimeout(attachReuseIndex, 650);
})();

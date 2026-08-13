(() => {
  const shellCss = [...document.querySelectorAll('link[rel="stylesheet"]')].find(link => link.href.includes('navigation-shell.css'));
  if (shellCss) shellCss.href = 'navigation-shell.css?v=20260811-2';

  const addScript = (src, token) => {
    if ([...document.scripts].some(script => script.src.includes(token))) return;
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  };
  addScript('accessibility.js?v=20260810-2', 'accessibility.js');

  const main = document.getElementById('main-content');
  if (main && !document.querySelector('.ui-skip-link')) {
    const skip = document.createElement('a');
    skip.className = 'ui-skip-link';
    skip.href = '#main-content';
    skip.textContent = 'Skip to content';
    document.body.prepend(skip);
  }

  const closeMapMenus = except => {
    document.querySelectorAll('.nav-map-menu[open]').forEach(menu => {
      if (menu !== except) menu.removeAttribute('open');
    });
  };
  document.addEventListener('click', event => {
    const menu = event.target.closest('.nav-map-menu');
    if (menu) {
      closeMapMenus(menu);
      return;
    }
    closeMapMenus(null);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMapMenus(null);
  });

  const form = document.getElementById('network-search');
  const input = document.getElementById('network-search-input');
  const scope = document.getElementById('network-search-scope');
  const status = document.getElementById('network-search-status');
  if (!form || !input || !scope) return;

  const placeholders = {
    cases:'Liverpool, Auckland, Tufts…',
    people:'Ward, Ganong, curator…',
    bibliography:'author, title, year…',
    sources:'archive, invoice, Dresden…',
    auctions:'house, lot, catalogue number…'
  };
  const routes = { cases:'cases/', people:'people/', bibliography:'bibliography/', sources:'sources/', auctions:'auctions/' };

  const updatePlaceholder = () => {
    input.placeholder = placeholders[scope.value] || placeholders.cases;
    if (status) status.textContent = '';
  };
  scope.addEventListener('change', updatePlaceholder);
  updatePlaceholder();

  form.addEventListener('submit', event => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) {
      if (status) status.textContent = 'Enter a search term.';
      input.focus();
      return;
    }
    location.href = `${routes[scope.value] || routes.cases}?q=${encodeURIComponent(query)}`;
  });

  const style = document.createElement('style');
  style.textContent = `
    .network-quicklinks{display:flex;flex-wrap:wrap;gap:7px;margin:11px 8px 0;align-items:center;font:600 .66rem/1 var(--ui)}
    .network-quicklinks a,.network-quicklinks button{display:inline-flex;align-items:center;min-height:31px;padding:0 11px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(20,14,12,.22);color:rgba(255,255,255,.82);text-decoration:none;cursor:pointer;backdrop-filter:blur(9px);transition:background .2s ease,transform .2s ease,border-color .2s ease}
    .network-quicklinks a:hover,.network-quicklinks button:hover{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.34);transform:translateY(-1px)}
    .network-quicklinks .network-quicklinks-label{padding-right:3px;color:rgba(255,255,255,.5);font-weight:520;letter-spacing:.04em;text-transform:uppercase}
    @media (max-width:680px){.network-quicklinks{margin-left:4px;margin-right:4px}.network-quicklinks-label{width:100%;margin-bottom:1px}}
  `;
  document.head.appendChild(style);

  if (!form.querySelector('.network-quicklinks')) {
    const quick = document.createElement('div');
    quick.className = 'network-quicklinks';
    quick.setAttribute('aria-label', 'Quick exploration');
    quick.innerHTML = '<span class="network-quicklinks-label">Explore</span><button type="button" data-random-case>Random trail</button><a href="cases/prague/">New · Prague</a><a href="cases/field-museum/">New · Field Museum</a><a href="cases/geneva/">New · Geneva</a>';
    form.appendChild(quick);

    const randomRoutes = [
      'cases/#sample-liverpool',
      'cases/#sample-auckland',
      'cases/#sample-florence',
      'cases/#sample-tufts',
      'cases/#sample-michigan',
      'cases/#sample-mexico',
      'cases/#sample-newcastle',
      'cases/#sample-nottingham',
      'cases/#sample-vassar',
      'cases/#sample-milwaukee',
      'cases/prague/',
      'cases/field-museum/',
      'cases/geneva/'
    ];
    quick.querySelector('[data-random-case]')?.addEventListener('click', () => {
      const destination = randomRoutes[Math.floor(Math.random() * randomRoutes.length)];
      location.href = destination;
    });
  }

  const viewAll = document.querySelector('.feature-footer .view-all');
  if (viewAll) viewAll.textContent = 'View all thirteen cases ↗';
})();
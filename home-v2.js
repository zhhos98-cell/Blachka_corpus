(() => {
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
  const routes = {
    cases:'cases/',
    people:'people/',
    bibliography:'bibliography/',
    sources:'sources/',
    auctions:'auctions/'
  };

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
})();

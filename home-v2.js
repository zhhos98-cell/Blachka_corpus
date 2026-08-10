(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!document.querySelector('link[href*="home-nav-glide.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'home-nav-glide.css?v=20260810-1';
    document.head.appendChild(link);
  }
  if (!document.querySelector('script[src*="nav-glide.js"]')) {
    const script = document.createElement('script');
    script.src = 'nav-glide.js?v=20260810-1';
    script.defer = true;
    document.head.appendChild(script);
  }

  const form = document.getElementById('network-search');
  const input = document.getElementById('network-search-input');
  const scope = document.getElementById('network-search-scope');
  const status = document.getElementById('network-search-status');

  if (form && input && scope) {
    const placeholders = {
      cases:'e.g. Liverpool, Auckland, Tufts',
      bibliography:'e.g. Daston, 2008, conservation',
      sources:'e.g. HOLLIS, Ward, invoice, Dresden',
      auctions:'e.g. Christie’s, Berlin, catalogue number'
    };
    const routes = {
      bibliography:'bibliography/',
      sources:'sources/',
      auctions:'auctions/',
      cases:'cases/'
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
  }

  if (reduced) return;

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold:.08, rootMargin:'0px 0px -6% 0px' });

  document.querySelectorAll('.reveal').forEach(node => observer.observe(node));
})();

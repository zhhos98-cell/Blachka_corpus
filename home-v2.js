(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

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

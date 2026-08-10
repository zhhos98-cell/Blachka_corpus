(() => {
  if (window.__blaschkaFluidMotion) return;
  window.__blaschkaFluidMotion = true;

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('ui-fluid-motion');

  const selectors = [
    '.subpage .page-intro > *',
    '.cases-directory-copy',
    '.cases-page .case-index-table',
    '.sample-main > h2',
    '.sample-main > .standfirst',
    '.case-figure',
    '.status',
    '.bib-community',
    '.bib-tools',
    '.source-az-heading',
    '.source-az-filters',
    '.market-scope',
    '.auction-case > h2',
    '.market-note',
    '.home-contact .contact-grid'
  ].join(',');

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('ui-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold:.07, rootMargin:'0px 0px -5% 0px' });

  const register = (root = document) => {
    const nodes = root.matches?.(selectors) ? [root] : [...(root.querySelectorAll?.(selectors) || [])];
    nodes.forEach((node,index) => {
      if (node.classList.contains('ui-reveal') || node.classList.contains('reveal')) return;
      node.classList.add('ui-reveal');
      node.style.setProperty('--ui-reveal-delay', `${Math.min(index,2) * 34}ms`);
      observer.observe(node);
    });
  };

  register(document);

  const mutationObserver = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) register(node);
      }
    }
  });
  mutationObserver.observe(document.body,{childList:true,subtree:true});

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#') || href === '#') return;
    let target;
    try { target = document.querySelector(href); } catch { return; }
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
    history.pushState(null,'',href);
  }, {passive:false});
})();

(() => {
  if (window.__blaschkaFluidMotion) return;
  window.__blaschkaFluidMotion = true;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  document.documentElement.classList.add('ui-fluid-motion');

  const selectors = [
    '.subpage .page-intro > *',
    '.cases-directory-copy > *',
    '.cases-page .case-index-row',
    '.sample-main > h2',
    '.sample-main > .standfirst',
    '.case-figure',
    '.timeline .event',
    '.status > div',
    '.source-row',
    '.bib-community',
    '.bib-entry',
    '.source-az-heading > *',
    '.source-az-entry',
    '.market-scope > *',
    '.auction-case',
    '.auction-lot',
    '.market-note > *',
    '.home-contact .contact-grid > *'
  ].join(',');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('ui-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .055, rootMargin: '0px 0px -4% 0px' });

  const register = (root = document) => {
    const nodes = root.matches?.(selectors) ? [root] : [...root.querySelectorAll?.(selectors) || []];
    let sequence = 0;
    nodes.forEach((el) => {
      if (el.classList.contains('reveal') || el.classList.contains('ui-reveal')) return;
      el.classList.add('ui-reveal');
      /* Keep stagger short so lists feel connected instead of theatrical. */
      el.style.setProperty('--ui-reveal-delay', `${Math.min(sequence % 4, 3) * 38}ms`);
      sequence += 1;
      observer.observe(el);
    });
  };

  register(document);

  const mutationObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) register(node);
      }
    }
  });
  mutationObserver.observe(document.body, { childList:true, subtree:true });

  /* Same-page navigation keeps spatial continuity and avoids abrupt anchor jumps. */
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#') || href === '#') return;
    let target;
    try { target = document.querySelector(href); } catch { return; }
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior:'smooth', block:'start' });
    history.pushState(null, '', href);
  }, { passive:false });
})();

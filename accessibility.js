(() => {
  if (window.__blaschkaAccessibility) return;
  window.__blaschkaAccessibility = true;

  const main = document.querySelector('main');
  if (main) {
    if (!main.id) main.id = 'main-content';
    if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1');
  }

  const skip = document.querySelector('.ui-skip-link');
  if (skip && main) {
    skip.href = `#${main.id}`;
    skip.addEventListener('click', () => {
      requestAnimationFrame(() => main.focus({ preventScroll: true }));
    });
  }

  let newWindowDescription = document.getElementById('a11y-new-window-description');
  if (!newWindowDescription) {
    newWindowDescription = document.createElement('span');
    newWindowDescription.id = 'a11y-new-window-description';
    newWindowDescription.className = 'a11y-sr-only';
    newWindowDescription.textContent = 'Opens in a new tab.';
    document.body.appendChild(newWindowDescription);
  }

  const enhanceRoot = (root = document) => {
    root.querySelectorAll?.('a[target="_blank"]').forEach(link => {
      const rel = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
      rel.add('noopener');
      rel.add('noreferrer');
      link.setAttribute('rel', [...rel].join(' '));
      if (!link.hasAttribute('aria-describedby')) link.setAttribute('aria-describedby', newWindowDescription.id);
    });

    root.querySelectorAll?.('img:not([alt])').forEach(img => {
      const hidden = img.closest('[aria-hidden="true"],.case-thumb,.decorative');
      if (hidden) {
        img.alt = '';
        return;
      }
      const caption = img.closest('figure')?.querySelector('figcaption');
      img.alt = caption ? caption.textContent.replace(/\s+/g, ' ').trim().slice(0, 220) : '';
    });

    root.querySelectorAll?.('button:not([type])').forEach(button => {
      if (!button.closest('form')) button.type = 'button';
    });

    root.querySelectorAll?.('.network-search-status,.bib-selected-count,.source-az-status,.auction-query-empty').forEach(node => {
      if (!node.hasAttribute('aria-live')) node.setAttribute('aria-live', 'polite');
    });

    root.querySelectorAll?.('.case-index-row').forEach((row, index) => {
      const back = row.querySelector('.case-tile-back');
      if (!back) return;
      if (!back.id) back.id = `case-preview-${index + 1}`;
      if (!row.hasAttribute('aria-describedby')) row.setAttribute('aria-describedby', back.id);
    });
  };

  enhanceRoot(document);

  document.querySelectorAll('.origin-bio[data-bio-person]').forEach(section => {
    const key = section.dataset.bioPerson;
    if (!section.id) section.id = `family-bio-${key}`;
    document.querySelectorAll(`.family-person[data-person="${key}"] button,.family-mobile-nav [data-mobile-person="${key}"]`).forEach(button => {
      button.setAttribute('aria-controls', section.id);
    });
  });

  /* Source records are assembled progressively. Keep enhancement work incremental and bounded. */
  let queued = false;
  const pending = new Set();
  const flush = () => {
    queued = false;
    pending.forEach(node => enhanceRoot(node));
    pending.clear();
  };
  const observer = new MutationObserver(records => {
    records.forEach(record => record.addedNodes.forEach(node => {
      if (node instanceof Element) pending.add(node);
    }));
    if (!pending.size || queued) return;
    queued = true;
    if ('requestIdleCallback' in window) requestIdleCallback(flush, { timeout: 450 });
    else setTimeout(flush, 80);
  });
  observer.observe(document.body, { childList: true, subtree: true });
  setTimeout(() => observer.disconnect(), 15000);
})();

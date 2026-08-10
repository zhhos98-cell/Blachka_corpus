(() => {
  if (window.__blaschkaNavGlide) return;
  window.__blaschkaNavGlide = true;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const setup = nav => {
    if (!nav || nav.querySelector(':scope > .nav-glider')) return;
    const items = [...nav.children].map(node => {
      if (node.matches('a')) return node;
      if (node.matches('.nav-map-menu')) return node.querySelector(':scope > .nav-map-trigger');
      return null;
    }).filter(Boolean);
    if (!items.length) return;

    const glider = document.createElement('span');
    glider.className = 'nav-glider';
    glider.setAttribute('aria-hidden','true');
    nav.prepend(glider);

    const active = items.find(item => item.matches('[aria-current="page"],.is-current')) || null;

    const move = item => {
      const navRect = nav.getBoundingClientRect();
      const rect = item.getBoundingClientRect();
      nav.style.setProperty('--nav-glider-x', `${rect.left - navRect.left}px`);
      nav.style.setProperty('--nav-glider-w', `${rect.width}px`);
      nav.style.setProperty('--nav-glider-opacity', '1');
    };

    const settle = () => active ? move(active) : nav.style.setProperty('--nav-glider-opacity','0');
    items.forEach(item => {
      item.addEventListener('pointerenter', () => move(item));
      item.addEventListener('focus', () => move(item));
    });
    nav.addEventListener('pointerleave', settle);
    nav.addEventListener('focusout', event => {
      if (!nav.contains(event.relatedTarget)) settle();
    });

    requestAnimationFrame(settle);
    addEventListener('resize', settle, {passive:true});
  };

  const init = () => document.querySelectorAll('.top-nav,.subpage-nav').forEach(setup);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();

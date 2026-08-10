(() => {
  if (window.__blaschkaNavGlide) return;
  window.__blaschkaNavGlide = true;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const setup = nav => {
    if (!nav || nav.querySelector(':scope > .nav-glider')) return;
    const links = [...nav.querySelectorAll(':scope > a')];
    if (!links.length) return;

    const glider = document.createElement('span');
    glider.className = 'nav-glider';
    glider.setAttribute('aria-hidden','true');
    nav.prepend(glider);

    const active = links.find(link => link.matches('[aria-current="page"]')) || links[0];

    const move = link => {
      const navRect = nav.getBoundingClientRect();
      const rect = link.getBoundingClientRect();
      nav.style.setProperty('--nav-glider-x', `${rect.left - navRect.left}px`);
      nav.style.setProperty('--nav-glider-w', `${rect.width}px`);
      nav.style.setProperty('--nav-glider-opacity', '1');
    };

    const settle = () => active ? move(active) : nav.style.setProperty('--nav-glider-opacity','0');
    links.forEach(link => {
      link.addEventListener('pointerenter', () => move(link));
      link.addEventListener('focus', () => move(link));
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

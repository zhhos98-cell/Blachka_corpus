(() => {
  const nav = document.querySelector('.top-nav');
  if (nav && !nav.querySelector('.nav-map-menu')) {
    const oldMap = nav.querySelector('a[href="map/"]');
    const menu = document.createElement('details');
    menu.className = 'nav-map-menu';
    menu.innerHTML = '<summary class="nav-map-trigger">Map</summary><div class="nav-map-panel"><a href="map/">Collections map</a><a href="map/rudolf-1892/">Rudolf 1892 journey</a></div>';
    if (oldMap) oldMap.replaceWith(menu);
    else {
      const cases = nav.querySelector('a[href="cases/"]');
      if (cases) cases.insertAdjacentElement('afterend', menu);
      else nav.prepend(menu);
    }
  }

  document.querySelectorAll('.journey-feature .reveal').forEach(node => node.classList.add('is-visible'));

  const closeMenus = except => {
    document.querySelectorAll('.nav-map-menu[open]').forEach(menu => { if (menu !== except) menu.removeAttribute('open'); });
  };
  document.addEventListener('click', event => {
    const menu = event.target.closest('.nav-map-menu');
    if (menu) { closeMenus(menu); return; }
    closeMenus(null);
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenus(null); });
})();

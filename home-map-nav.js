(() => {
  const shellCss = [...document.querySelectorAll('link[rel="stylesheet"]')].find(link => link.href.includes('navigation-shell.css'));
  if (shellCss) shellCss.href = 'navigation-shell.css?v=20260811-1';

  const nav = document.querySelector('.top-nav');
  if (nav) {
    nav.innerHTML = [
      '<a href="cases/">Cases</a>',
      '<details class="nav-map-menu"><summary class="nav-map-trigger">Map</summary><div class="nav-map-panel"><a href="map/">Collections map</a><a href="map/rudolf-1892/">Rudolf 1892 journey</a></div></details>',
      '<a href="people/">People</a>',
      '<a href="bibliography/">Bibliography</a>',
      '<a href="sources/">Sources</a>',
      '<a href="auctions/">Auctions</a>',
      '<a href="about/">About</a>'
    ].join('');
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

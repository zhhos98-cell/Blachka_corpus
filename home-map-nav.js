(() => {
  const nav = document.querySelector('.top-nav');
  if (!nav || nav.querySelector('a[href="map/"]')) return;
  const link = document.createElement('a');
  link.href = 'map/';
  link.textContent = 'Map';
  const cases = nav.querySelector('a[href="cases/"]');
  if (cases) cases.insertAdjacentElement('afterend', link);
  else nav.prepend(link);
})();

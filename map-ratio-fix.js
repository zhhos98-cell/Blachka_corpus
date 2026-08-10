(() => {
  const addStylesheet = (href, key) => {
    if (document.querySelector(`link[data-${key}]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.dataset[key] = 'true';
    document.head.appendChild(link);
  };

  addStylesheet('portal-pass4.css?v=20260810-1', 'portalPass4');

  const refineHomepage = () => {
    if (document.body.classList.contains('subpage')) return;

    /* The selector already tells visitors where they are searching; remove the duplicate links/helper line. */
    document.querySelector('.network-search-mode')?.remove();
    document.querySelector('.network-search-links')?.remove();

    const columns = document.querySelector('.origin-columns');
    if (columns && columns.dataset.compact !== 'true') {
      columns.dataset.compact = 'true';
      columns.innerHTML = `
        <p><strong>Leopold Blaschka (1822–1895)</strong> came from a Bohemian glassworking family. After the deaths of his wife and son in 1850 and his father in 1852, he sailed to the United States in 1853. Becalmed for two weeks, he drew jellyfish and other marine invertebrates whose translucent forms suggested glass as a material for scientific modelling.</p>
        <p>By the 1860s Leopold was producing marine models in Dresden. <strong>Rudolf Blaschka (1857–1939)</strong> joined the workshop in 1876, and together they supplied museums and universities internationally. From 1890 the workshop worked exclusively on Harvard’s Glass Flowers. This project follows the earlier zoological models through sale, shipment, use, damage, dispersal, rediscovery and present custody.</p>`;
    }

    const source = document.querySelector('.origin-source');
    if (source && source.dataset.compact !== 'true') {
      source.dataset.compact = 'true';
      source.innerHTML = `Chronology: <a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard Blaschka archive ↗</a> · <a href="https://press.cmog.org/2016/blaschka-glass-marine-creatures-exhibition-opens-may-2016" target="_blank" rel="noopener">Corning Museum of Glass ↗</a> · <a href="bibliography/">bibliography ↗</a>`;
    }

    const caption = document.querySelector('.origin-photo figcaption p');
    if (caption && caption.dataset.compact !== 'true') {
      caption.dataset.compact = 'true';
      caption.innerHTML = `Rudolf, Leopold and Caroline Blaschka in the garden. Public domain. <a href="https://commons.wikimedia.org/wiki/File:Rudolf,_Leopold_and_Caroline_Blaschka_in_garden_cropped.jpg" target="_blank" rel="noopener">Wikimedia Commons ↗</a>`;
    }
  };

  const applyMaps = (root = document) => {
    root.querySelectorAll?.('.case-map-bg.map-v3 svg').forEach((svg) => {
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    });
  };

  refineHomepage();
  applyMaps();

  const observer = new MutationObserver((records) => {
    let homepageChanged = false;
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (!(node instanceof Element)) continue;
        if (node.matches?.('.origin-story,.network-search') || node.querySelector?.('.origin-story,.network-search')) homepageChanged = true;
        if (node.matches?.('.case-map-bg.map-v3')) applyMaps(node.parentElement || node);
        else if (node.querySelector?.('.case-map-bg.map-v3')) applyMaps(node);
      }
    }
    if (homepageChanged) refineHomepage();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

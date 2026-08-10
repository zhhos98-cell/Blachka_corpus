(() => {
  const applyMaps = (root = document) => {
    root.querySelectorAll?.('.case-map-bg.map-v3 svg').forEach(svg => {
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    });
  };

  applyMaps();

  const observer = new MutationObserver(records => {
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (!(node instanceof Element)) continue;
        if (node.matches?.('.case-map-bg.map-v3') || node.querySelector?.('.case-map-bg.map-v3')) {
          applyMaps(node.matches?.('.case-map-bg.map-v3') ? node.parentElement || node : node);
        }
      }
    }
  });
  observer.observe(document.body, {childList:true, subtree:true});
})();

(() => {
  const styleId = 'case-map-ratio-fix';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @media (min-width: 901px) {
        .sample.map-v3-host > .case-map-bg.map-v3 {
          top: clamp(54px, 7vh, 104px) !important;
          bottom: auto !important;
          left: 50% !important;
          width: min(100vw, 1600px) !important;
          height: clamp(560px, 58vw, 860px) !important;
          max-height: 82vh !important;
          transform: translateX(-50%) !important;
          overflow: hidden !important;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 7%, #000 84%, transparent 100%);
          mask-image: linear-gradient(to bottom, transparent 0, #000 7%, #000 84%, transparent 100%);
        }
        .case-map-bg.map-v3 svg {
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
          overflow: visible !important;
        }
      }
      @media (max-width: 900px) {
        .sample.map-v3-host > .case-map-bg.map-v3 {
          top: 0 !important;
          bottom: 0 !important;
          height: auto !important;
          max-height: none !important;
          width: 100vw !important;
          -webkit-mask-image: none;
          mask-image: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  const apply = (root = document) => {
    root.querySelectorAll?.('.case-map-bg.map-v3 svg').forEach((svg) => {
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    });
  };

  apply();
  const observer = new MutationObserver((records) => {
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (!(node instanceof Element)) continue;
        if (node.matches?.('.case-map-bg.map-v3')) apply(node.parentElement || node);
        else if (node.querySelector?.('.case-map-bg.map-v3')) apply(node);
      }
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

(() => {
  const reciprocalHeading = document.querySelector('#trieste-reciprocal-title');
  const reciprocalSection = reciprocalHeading?.closest('.source-section');
  if (!reciprocalSection || document.querySelector('#reference-ecology-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'reference-ecology-title');
  section.innerHTML = `
    <p class="source-kicker">What counted as a reference?</p>
    <h2 id="reference-ecology-title">Images, preserved bodies, living animals and workshop drawings</h2>
    <p class="source-note">The Blaschkas did not work from a single evidential medium. Their source environment combined printed natural-history images, preserved specimens, live organisms and drawings made in the workshop. Each made different features portable and introduced different distortions: <a href="reference-material-ecology-register.json" target="_blank" rel="noopener">reference-material-ecology-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Published image · portable but already interpreted',
      title: 'Leopold copied Müller’s <em>Zoologia danica</em>; Müller and Gosse remained active reference sources even after the workshop had an aquarium.',
      meta: 'Corning identifies watercolours copied directly from Otto Friedrich Müller’s 1778 illustrations and states that Leopold and Rudolf continued to base drawings on published images by Müller and Philip Henry Gosse. Australian Museum research likewise links some surviving models back to catalogue numbers and specific illustrations in Gosse. A model could therefore reproduce the decisions of an earlier illustrator as well as the anatomy of an organism.',
      links: '<a href="https://blog.cmog.org/2016/exploring-archives-sketchbooks-artists-mind-externalized" target="_blank" rel="noopener">Corning sketchbook evidence ↗</a> · <a href="https://australian.museum/about/history/stories/identifying-the-museums-blaschka-glass-models/" target="_blank" rel="noopener">Australian object/image crosswalk ↗</a>'
    },
    {
      type: 'Preserved specimen · three-dimensional but altered',
      title: 'Naples made marine bodies portable at the cost of preservation effects.',
      meta: 'The reported 4 February 1877 Leopold letter requests 41 preserved marine animals from the Naples station for glass-model work. Corning also names preserved invertebrates among the sources for preparatory drawings. Preservation therefore solved distance while introducing its own problems of distortion, colour loss and fixation.',
      links: '<a href="upstream-institutional-specimen-supply-register.json" target="_blank" rel="noopener">Naples source chain ↗</a> · <a href="https://press.cmog.org/2016/blaschka-glass-marine-creatures-exhibition-opens-may-2016" target="_blank" rel="noopener">Corning reference-source statement ↗</a>'
    },
    {
      type: 'Living organism · dynamic but hard to transport',
      title: 'Trieste and Weymouth supplied colour, posture and behaviour only if the animals survived the journey.',
      meta: 'Rudolf directly links living animals in Dresden seawater tanks to improved zoological modelling. Trieste records and the Smith correspondence show that temperature, packing, transit time and biological robustness selected which organisms could arrive usable. “Life” was therefore not an unmediated reference condition; it was a logistics-dependent achievement.',
      links: '<a href="trieste-reciprocal-exchange-register.json" target="_blank" rel="noopener">Trieste living-reference chain ↗</a> · <a href="upstream-living-specimen-supply-register.json" target="_blank" rel="noopener">Weymouth living-reference chain ↗</a>'
    },
    {
      type: 'Workshop drawing · translation layer',
      title: 'Drawings stabilized information from heterogeneous sources before glassmaking.',
      meta: 'Corning describes preparatory pencil, watercolor, coloured-pencil and ink studies with notes and marginalia derived from published illustrations, preserved invertebrates and living creatures. The drawing can therefore be treated as an epistemic work surface where incompatible reference media were selected, enlarged, corrected or recombined.',
      links: '<a href="reference-material-ecology-register.json" target="_blank" rel="noopener">reference-mode schema ↗</a>'
    },
    {
      type: 'Research consequence',
      title: 'Accuracy was produced by navigating between media, not by moving progressively from bad images to direct observation.',
      meta: 'Printed images remained useful after live aquaria existed; preserved and living specimens solved different problems; workshop drawings mediated among them. A history of Blaschka accuracy should therefore ask which reference medium was available for a particular model, what it made visible, and what logistical or representational failure it introduced.',
      links: '<a href="reference-material-ecology-register.json" target="_blank" rel="noopener">coding axes ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '30';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  reciprocalSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass31.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

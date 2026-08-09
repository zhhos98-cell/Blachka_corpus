(() => {
  const referenceHeading = document.querySelector('#reference-ecology-title');
  const referenceSection = referenceHeading?.closest('.source-section');
  if (!referenceSection || document.querySelector('#production-modularity-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'production-modularity-title');
  section.innerHTML = `
    <p class="source-kicker">Order and assembly</p>
    <h2 id="production-modularity-title">Orders could trigger assembly from premade component stock</h2>
    <p class="source-note">Corning’s surviving workshop material complicates any simple order → make-from-scratch chronology. Labelled matchboxes contain premade parts that were stored before orders and assembled later into finished models: <a href="workshop-production-modularity-register.json" target="_blank" rel="noopener">workshop-production-modularity-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Object evidence · accession 93.3.74-4',
      title: 'A matchbox survives with 197 premade glass parts for marine animals.',
      meta: 'Corning states that the Blaschkas produced different body parts ahead of time to streamline and standardize production. Only after an order arrived were appropriate parts compiled into a model with wire and glue and then painted and embellished. The box itself is labelled and illustrated, making internal stock organization materially visible.',
      links: '<a href="https://glasscollection.cmog.org/objects/25057/component" target="_blank" rel="noopener">Corning object record ↗</a>'
    },
    {
      type: 'Workshop stock · forty matchboxes',
      title: 'Premade anemone bodies, sea-jelly domes, sea-star disks, eyes and other tiny elements formed a component inventory.',
      meta: 'Corning’s related object records describe forty matchboxes and identify recurring component types. Several boxes contain hundreds of small parts. This does not prove that every model followed one standardized recipe, but it does establish anticipatory production and internal classification before a customer order was assembled.',
      links: '<a href="https://glasscollection.cmog.org/objects/25058/component" target="_blank" rel="noopener">assorted-parts box ↗</a> · <a href="https://glasscollection.cmog.org/objects/42007/model" target="_blank" rel="noopener">preformed model parts ↗</a>'
    },
    {
      type: 'Chronology guard',
      title: 'The date of an order is not automatically the start date of fabrication.',
      meta: 'If generic or repeatable glass elements already existed in labelled stock, the order could initiate selection, assembly, finishing, mounting and packing rather than all glassmaking. Lead times and labour estimates in correspondence should therefore be read against the workshop’s component inventory, not against an assumption that every ordered object began as raw glass.',
      links: '<a href="workshop-production-modularity-register.json" target="_blank" rel="noopener">production-chain guard ↗</a>'
    },
    {
      type: 'Crosswalk opportunity',
      title: 'Catalogue number + order book + component label + finished object can become one production-history chain.',
      meta: 'The open Rakow business books establish when customers ordered; surviving matchbox labels and illustrations expose internal stock categories; finished models preserve repeated forms and joins. Cross-walking these layers may distinguish what was standardized in advance from what was customized after an order.',
      links: '<a href="rakow-open-business-books-register.json" target="_blank" rel="noopener">open business books ↗</a> · <a href="workshop-production-modularity-register.json" target="_blank" rel="noopener">component-stock register ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '31';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  referenceSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass32.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();

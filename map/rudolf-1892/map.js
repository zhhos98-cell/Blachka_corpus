(() => {
  const routeData = window.RUDOLF_1892_ROUTE_DATA;
  const knowledgeData = window.RUDOLF_1892_KNOWLEDGE_DATA;
  const sourceData = window.RUDOLF_1892_SOURCE_DATA || { nodeOverrides:{}, nodeEnhancements:{}, nodeLinks:{} };
  if (!routeData || !knowledgeData || typeof L === 'undefined') return;

  const documented = routeData.documentedRoute;
  const planned = routeData.plannedPublicRoute;
  const knowledge = knowledgeData.nodes;
  const operations = knowledgeData.operationTypes;
  const flows = knowledgeData.flows;
  const overrides = sourceData.nodeOverrides || {};
  const enhancements = sourceData.nodeEnhancements || {};
  const linksByNode = sourceData.nodeLinks || {};
  const byId = new Map(documented.map((item, index) => [item.id, { ...item, index }]));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const displayItem = item => ({ ...item, ...(overrides[item.id] || {}) });
  const displayKnowledge = item => ({ ...(knowledge[item.id] || fallbackKnowledge(item)), ...(enhancements[item.id] || {}) });

  const map = L.map('journey-map', { scrollWheelZoom: true, worldCopyJump: false, zoomControl: true });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const routeLayer = L.layerGroup().addTo(map);
  const plannedLayer = L.layerGroup().addTo(map);
  const markerLayer = L.layerGroup().addTo(map);
  const flowLayer = L.layerGroup().addTo(map);
  const plannedPointLayer = L.layerGroup().addTo(map);

  const documentedLine = L.polyline(documented.map(d => [d.lat, d.lng]), {
    color: '#b67a51', weight: 4, opacity: .92, lineCap: 'round'
  }).addTo(routeLayer);

  const plannedLine = L.polyline(planned.map(d => [d.lat, d.lng]), {
    color: '#71889a', weight: 2.6, opacity: .82, dashArray: '7 9', lineCap: 'round'
  }).addTo(plannedLayer);

  planned.forEach(item => {
    L.circleMarker([item.lat, item.lng], {
      radius: 3.5, color: '#71889a', fillColor: '#71889a', fillOpacity: .72, weight: 1
    }).addTo(plannedPointLayer).bindTooltip(`<strong>${item.title}</strong><br>${item.note}`, { direction: 'top' });
  });

  const markerMap = new Map();
  const flowNodeIds = new Set(flows.flatMap(flow => [flow.from, flow.to]));
  let currentIndex = 0;

  const pad = value => String(value).padStart(2, '0');
  const numberFor = index => pad(index + 1);

  function fallbackKnowledge(item) {
    return {
      primary: 'transit',
      encountered: item.summary,
      done: item.detail,
      moved: 'The travelling party, working notes and accumulated reference material.',
      enabled: 'The journey’s distributed working record could continue into the next stop.'
    };
  }

  function markerIcon(item, index, mode) {
    const nodeKnowledge = { ...(knowledge[item.id] || {}), ...(enhancements[item.id] || {}) };
    const op = operations[nodeKnowledge.primary] || operations.transit;
    const color = mode === 'operations' ? op.color : '#b67a51';
    const faded = mode === 'flows' && !flowNodeIds.has(item.id);
    return L.divIcon({
      className: 'journey-numbered-icon',
      html: `<span class="journey-marker${faded ? ' is-muted' : ''}" style="--marker-color:${color}">${numberFor(index)}</span>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
      popupAnchor: [0, -16]
    });
  }

  documented.forEach((rawItem, index) => {
    const item = displayItem(rawItem);
    const marker = L.marker([rawItem.lat, rawItem.lng], { icon: markerIcon(rawItem, index, 'journey') }).addTo(markerLayer);
    marker.bindPopup(`<strong>${numberFor(index)} · ${item.title}</strong><br>${item.date}<br><span>${rawItem.summary}</span>`);
    marker.on('click', () => setDetail(index, true));
    markerMap.set(rawItem.id, marker);
  });

  const allGroup = L.featureGroup([documentedLine, plannedLine, ...Array.from(markerMap.values())]);
  const allBounds = allGroup.getBounds().pad(.12);
  map.fitBounds(allBounds);

  const detailNo = document.getElementById('detail-no');
  const detailDate = document.getElementById('detail-date');
  const detailTitle = document.getElementById('detail-title');
  const detailSummary = document.getElementById('detail-summary');
  const detailTags = document.getElementById('detail-tags');
  const detailEncountered = document.getElementById('detail-encountered');
  const detailDone = document.getElementById('detail-done');
  const detailMoved = document.getElementById('detail-moved');
  const detailEnabled = document.getElementById('detail-enabled');
  const detailWhy = document.getElementById('detail-why');
  const detailWhyBlock = document.getElementById('detail-why-block');
  const detailSource = document.getElementById('detail-source');
  const detailLinks = document.getElementById('detail-links');
  const routeIndex = document.getElementById('route-index');
  const modeCopy = document.getElementById('mode-copy');
  const modeLegend = document.getElementById('mode-legend');

  function renderNodeLinks(item) {
    if (!detailLinks) return;
    detailLinks.innerHTML = '';
    const links = linksByNode[item.id] || [];
    detailLinks.hidden = links.length === 0;
    links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = `<span>${link.kind}</span><b>${link.label}</b><i aria-hidden="true">↗</i>`;
      detailLinks.appendChild(a);
    });
  }

  function setDetail(index, focusMap = false) {
    currentIndex = index;
    const rawItem = documented[index];
    const item = displayItem(rawItem);
    const k = displayKnowledge(rawItem);
    detailNo.textContent = numberFor(index);
    detailDate.textContent = item.date;
    detailTitle.textContent = item.title;
    detailSummary.textContent = rawItem.summary;
    detailEncountered.textContent = k.encountered;
    detailDone.textContent = k.done;
    detailMoved.textContent = k.moved;
    detailEnabled.textContent = k.enabled;
    detailTags.innerHTML = '';
    (rawItem.category || []).slice(0, 6).forEach(tag => {
      const span = document.createElement('span');
      span.className = 'journey-tag';
      span.textContent = tag;
      detailTags.appendChild(span);
    });
    if (k.why) {
      detailWhyBlock.hidden = false;
      detailWhy.textContent = k.why;
    } else {
      detailWhyBlock.hidden = true;
      detailWhy.textContent = '';
    }
    detailSource.textContent = k.source || 'Correspondence sequence in the 1892 archive layer';
    renderNodeLinks(rawItem);

    routeIndex.querySelectorAll('[data-route-index]').forEach(button => {
      const active = Number(button.dataset.routeIndex) === index;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-current', active ? 'step' : 'false');
    });

    markerMap.forEach((marker, id) => {
      const node = byId.get(id);
      marker.setZIndexOffset(node.index === index ? 500 : 0);
      const el = marker.getElement()?.querySelector('.journey-marker');
      if (el) el.classList.toggle('is-active', node.index === index);
    });

    if (focusMap) {
      const marker = markerMap.get(rawItem.id);
      const targetZoom = Math.max(map.getZoom(), 5);
      if (reduced) map.setView([rawItem.lat, rawItem.lng], targetZoom);
      else map.flyTo([rawItem.lat, rawItem.lng], targetZoom, { duration: .7 });
      marker?.openPopup();
    }
  }

  documented.forEach((rawItem, index) => {
    const item = displayItem(rawItem);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'route-index-item';
    button.dataset.routeIndex = index;
    button.innerHTML = `<span class="route-index-no">${numberFor(index)}</span><span class="route-index-copy"><strong>${item.title}</strong><small>${item.date}</small></span>`;
    button.addEventListener('click', () => setDetail(index, true));
    routeIndex.appendChild(button);
  });

  function renderFlows() {
    flowLayer.clearLayers();
    flows.forEach(flow => {
      const from = byId.get(flow.from);
      const to = byId.get(flow.to);
      if (!from || !to) return;
      const color = flow.type === 'material' ? '#6f91a4' : flow.type === 'information' ? '#8a718c' : '#9b8866';
      const line = L.polyline([[from.lat, from.lng], [to.lat, to.lng]], {
        color,
        weight: flow.status === 'prospective' ? 2.2 : 3,
        opacity: .9,
        dashArray: flow.status === 'prospective' ? '4 8' : '9 7',
        lineCap: 'round'
      }).addTo(flowLayer);
      line.bindTooltip(`<strong>${flow.label}</strong><br>${flow.status}`, { sticky: true });
    });
  }

  const modeCopyText = {
    journey: '<strong>Journey</strong> follows Rudolf’s documented movement. The dashed route preserves the itinerary that circulated publicly even when the traveller had already moved on.',
    operations: '<strong>Operations</strong> recolours each numbered stop by its dominant working operation: encounter, drawing, preservation, circulation, coordination, repair, reassembly or transit.',
    flows: '<strong>Flows</strong> separates Rudolf’s bodily route from the movement of plants, specimens, drawings, instructions and later supply. Greyed nodes are outside the selected flow network.'
  };

  function renderLegend(mode) {
    if (mode === 'operations') {
      modeLegend.innerHTML = Object.entries(operations).map(([key, op]) => `<span><i style="--legend-color:${op.color}"></i>${op.label}</span>`).join('');
      return;
    }
    if (mode === 'flows') {
      modeLegend.innerHTML = '<span><i style="--legend-color:#6f91a4"></i>material</span><span><i style="--legend-color:#8a718c"></i>information / instruction</span><span><i style="--legend-color:#9b8866"></i>prospective supply</span>';
      return;
    }
    modeLegend.innerHTML = '<span><i style="--legend-color:#b67a51"></i>documented movement</span><span><i class="is-dashed" style="--legend-color:#71889a"></i>planned / public itinerary</span>';
  }

  function setMode(mode) {
    document.querySelectorAll('[data-map-mode]').forEach(button => {
      const active = button.dataset.mapMode === mode;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    modeCopy.innerHTML = modeCopyText[mode];
    renderLegend(mode);

    if (map.hasLayer(plannedLayer)) map.removeLayer(plannedLayer);
    if (map.hasLayer(plannedPointLayer)) map.removeLayer(plannedPointLayer);
    if (map.hasLayer(flowLayer)) map.removeLayer(flowLayer);

    documentedLine.setStyle({ opacity: mode === 'journey' ? .92 : mode === 'operations' ? .28 : .15, weight: mode === 'journey' ? 4 : 2 });
    if (mode === 'journey') {
      map.addLayer(plannedLayer);
      map.addLayer(plannedPointLayer);
    }
    if (mode === 'flows') {
      renderFlows();
      map.addLayer(flowLayer);
    }

    documented.forEach((item, index) => {
      markerMap.get(item.id)?.setIcon(markerIcon(item, index, mode));
    });
    setDetail(currentIndex, false);
  }

  document.querySelectorAll('[data-map-mode]').forEach(button => {
    button.addEventListener('click', () => setMode(button.dataset.mapMode));
  });

  document.getElementById('prev-stop').addEventListener('click', () => setDetail((currentIndex - 1 + documented.length) % documented.length, true));
  document.getElementById('next-stop').addEventListener('click', () => setDetail((currentIndex + 1) % documented.length, true));
  document.getElementById('reset-view').addEventListener('click', () => map.fitBounds(allBounds));

  setMode('journey');
  setDetail(0, false);
})();

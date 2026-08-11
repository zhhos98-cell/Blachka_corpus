(() => {
  const routeData = window.RUDOLF_1892_ROUTE_DATA;
  const knowledgeData = window.RUDOLF_1892_KNOWLEDGE_DATA;
  const sourceData = window.RUDOLF_1892_SOURCE_DATA || { nodeOverrides:{}, nodeEnhancements:{}, nodeLinks:{} };
  const visualMatches = window.RUDOLF_1892_VISUAL_MATCHES || [];
  if (!routeData || !knowledgeData || typeof L === 'undefined') return;

  const documented = routeData.documentedRoute;
  const planned = routeData.plannedPublicRoute;
  const knowledge = knowledgeData.nodes;
  const operations = knowledgeData.operationTypes;
  const flows = [...(knowledgeData.flows || []), ...(sourceData.flowAdditions || [])];
  const observationSegments = sourceData.observationSegments || [];
  const overrides = sourceData.nodeOverrides || {};
  const enhancements = sourceData.nodeEnhancements || {};
  const linksByNode = sourceData.nodeLinks || {};
  const byId = new Map(documented.map((item, index) => [item.id, { ...item, index }]));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const operationLabels = {
    transit: 'Travel',
    observe: 'Fieldwork',
    draw: 'Drawing / microscopy',
    preserve: 'Preservation',
    circulate: 'Moving material',
    coordinate: 'Coordination',
    repair: 'Repair',
    reassemble: 'Workshop'
  };

  const flowColors = {
    material: '#6f91a4',
    information: '#8a718c',
    prospective: '#9b8866',
    decision: '#a56558',
    reference: '#71836a',
    queue: '#b08b59'
  };

  const displayItem = item => ({ ...item, ...(overrides[item.id] || {}) });
  const displayKnowledge = item => ({ ...(knowledge[item.id] || fallbackKnowledge(item)), ...(enhancements[item.id] || {}) });

  const map = L.map('journey-map', { scrollWheelZoom: true, worldCopyJump: false, zoomControl: true });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(map);

  const routeLayer = L.layerGroup().addTo(map);
  const plannedLayer = L.layerGroup().addTo(map);
  const markerLayer = L.layerGroup().addTo(map);
  const flowLayer = L.layerGroup().addTo(map);
  const corridorLayer = L.layerGroup();
  const plannedPointLayer = L.layerGroup().addTo(map);
  const visualMatchLayer = L.layerGroup().addTo(map);

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

  function renderObservationSegments() {
    corridorLayer.clearLayers();
    observationSegments.forEach(segment => {
      const isExclusion = segment.kind === 'exclusion';
      const line = L.polyline([segment.from, segment.to], {
        color: isExclusion ? '#655d58' : '#d39a79',
        weight: isExclusion ? 4.2 : 6,
        opacity: isExclusion ? .55 : .34,
        dashArray: isExclusion ? '2 8' : '12 7',
        lineCap: 'round'
      }).addTo(corridorLayer);
      line.bindTooltip(
        `<strong>${segment.title}</strong><br>${segment.time}<br>${segment.summary}<br><span>${segment.note}</span>`,
        { sticky: true, className: 'journey-corridor-tooltip' }
      );
    });
  }

  renderObservationSegments();

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
      moved: 'Rudolf, his working material and the record accumulated so far.',
      enabled: 'Work could continue at the next stop.'
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
      iconSize: [34, 34], iconAnchor: [17, 17]
    });
  }

  function visualMatchIcon() {
    return L.divIcon({
      className: 'journey-visual-match-icon',
      html: '<span class="journey-match-marker"><span>S</span></span>',
      iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -13]
    });
  }

  function visualMatchPopup(match) {
    const imagePosition = match.imagePosition || 'center';
    return `<article class="journey-match-card">
      <a class="journey-match-image-link" href="${match.sourceUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open image source and rights information">
        <img class="journey-match-image" src="${match.image}" alt="${match.alt}" loading="lazy" decoding="async" style="object-position:${imagePosition}">
      </a>
      <div class="journey-match-body">
        <p class="journey-match-kicker">Sketchbook match · ${match.page}</p>
        <p class="journey-match-status">${match.status}</p>
        <h3 class="journey-match-title">${match.title}</h3>
        <p class="journey-match-summary">${match.summary}</p>
        <p class="journey-match-source"><strong>${match.sourceLabel}</strong>${match.rights}<br><a href="${match.sourceUrl}" target="_blank" rel="noopener noreferrer">Source &amp; rights ↗</a></p>
      </div>
    </article>`;
  }

  function renderVisualMatches() {
    visualMatches.forEach(match => {
      const marker = L.marker([match.lat, match.lng], {
        icon: visualMatchIcon(), keyboard: true, riseOnHover: true,
        title: `Sketchbook match: ${match.title}`
      }).addTo(visualMatchLayer);

      marker.bindPopup(visualMatchPopup(match), {
        className: 'visual-match-popup', maxWidth: 340, minWidth: 280, autoPan: false, closeButton: true
      });

      let closeTimer = 0;
      const cancelClose = () => {
        if (closeTimer) clearTimeout(closeTimer);
        closeTimer = 0;
      };
      const scheduleClose = () => {
        cancelClose();
        closeTimer = setTimeout(() => {
          const popupEl = marker.getPopup()?.getElement();
          if (!popupEl || !popupEl.matches(':hover')) marker.closePopup();
        }, 180);
      };
      marker.on('mouseover', () => { cancelClose(); marker.openPopup(); });
      marker.on('mouseout', scheduleClose);
      marker.on('popupopen', () => {
        const popupEl = marker.getPopup()?.getElement();
        if (!popupEl || popupEl.dataset.hoverBound === 'true') return;
        popupEl.dataset.hoverBound = 'true';
        popupEl.addEventListener('mouseenter', cancelClose);
        popupEl.addEventListener('mouseleave', scheduleClose);
      });
    });
  }

  documented.forEach((rawItem, index) => {
    const item = displayItem(rawItem);
    const marker = L.marker([rawItem.lat, rawItem.lng], {
      icon: markerIcon(rawItem, index, 'journey'),
      title: `${numberFor(index)} · ${item.title} · ${item.date}`,
      riseOnHover: true
    }).addTo(markerLayer);
    marker.bindTooltip(`<strong>${numberFor(index)} · ${item.title}</strong><br>${item.date}`, { direction:'top', offset:[0,-12] });
    marker.on('click', () => setDetail(index, true));
    markerMap.set(rawItem.id, marker);
  });

  renderVisualMatches();

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
    detailSummary.textContent = item.summary || rawItem.summary;
    detailEncountered.textContent = k.encountered;
    detailDone.textContent = k.done;
    detailMoved.textContent = k.moved;
    detailEnabled.textContent = k.enabled;
    detailTags.innerHTML = '';
    (item.category || rawItem.category || []).slice(0, 4).forEach(tag => {
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
    detailSource.textContent = k.source || 'Correspondence sequence in the 1892 archive';
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
      const targetZoom = Math.max(map.getZoom(), 5);
      if (reduced) map.setView([rawItem.lat, rawItem.lng], targetZoom);
      else map.flyTo([rawItem.lat, rawItem.lng], targetZoom, { duration:.55 });
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
      const color = flowColors[flow.type] || flowColors.prospective;
      const via = Array.isArray(flow.via) ? flow.via : [];
      const points = [[from.lat, from.lng], ...via, [to.lat, to.lng]];
      const delayed = flow.status === 'delayed';
      const prospective = flow.status === 'prospective';
      const later = flow.status === 'documented_later';
      const dashArray = prospective ? '4 8' : delayed ? '2 8' : later ? '13 6' : '9 7';
      const line = L.polyline(points, {
        color,
        weight: prospective ? 2.2 : delayed ? 2.8 : 3,
        opacity: delayed ? .86 : .9,
        dashArray,
        lineCap:'round'
      }).addTo(flowLayer);
      const detail = flow.detail ? `<br><span>${flow.detail}</span>` : '';
      line.bindTooltip(`<strong>${flow.label}</strong>${detail}`, { sticky:true, className:'journey-flow-tooltip' });
    });
  }

  const modeCopyText = {
    journey: '<strong>Journey</strong> follows documented movement. The dashed public line remains separate; translucent rail segments show corridor-level observation windows without inventing extra stops.',
    operations: '<strong>Work</strong> colours each stop by the main activity recorded there.',
    flows: '<strong>Flows</strong> separates material, instructions, delayed decisions, reference chains and post-return reassembly from Rudolf’s bodily route.'
  };

  function matchLegend() {
    return visualMatches.length ? '<span><i class="is-match"></i>sketchbook match</span>' : '';
  }

  function renderLegend(mode) {
    if (mode === 'operations') {
      modeLegend.innerHTML = Object.entries(operations).map(([key, op]) => `<span><i style="--legend-color:${op.color}"></i>${operationLabels[key] || op.label}</span>`).join('') + matchLegend();
      return;
    }
    if (mode === 'flows') {
      modeLegend.innerHTML = '<span><i style="--legend-color:#6f91a4"></i>material</span><span><i style="--legend-color:#8a718c"></i>information</span><span><i style="--legend-color:#a56558"></i>decision lag</span><span><i style="--legend-color:#71836a"></i>reference chain</span><span><i style="--legend-color:#b08b59"></i>return / queue</span><span><i style="--legend-color:#9b8866"></i>future supply</span>' + matchLegend();
      return;
    }
    modeLegend.innerHTML = '<span><i style="--legend-color:#b67a51"></i>documented route</span><span><i class="is-dashed" style="--legend-color:#71889a"></i>reported route</span><span><i class="is-dashed" style="--legend-color:#d39a79"></i>observation corridor</span><span><i class="is-dashed" style="--legend-color:#655d58"></i>night / exclusion control</span>' + matchLegend();
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
    if (map.hasLayer(corridorLayer)) map.removeLayer(corridorLayer);

    documentedLine.setStyle({ opacity: mode === 'journey' ? .92 : mode === 'operations' ? .28 : .15, weight: mode === 'journey' ? 4 : 2 });
    if (mode === 'journey') {
      map.addLayer(plannedLayer);
      map.addLayer(plannedPointLayer);
      map.addLayer(corridorLayer);
    }
    if (mode === 'flows') {
      renderFlows();
      map.addLayer(flowLayer);
    }
    documented.forEach((item, index) => markerMap.get(item.id)?.setIcon(markerIcon(item, index, mode)));
    setDetail(currentIndex, false);
  }

  document.querySelectorAll('[data-map-mode]').forEach(button => button.addEventListener('click', () => setMode(button.dataset.mapMode)));
  document.getElementById('prev-stop').addEventListener('click', () => setDetail((currentIndex - 1 + documented.length) % documented.length, true));
  document.getElementById('next-stop').addEventListener('click', () => setDetail((currentIndex + 1) % documented.length, true));
  document.getElementById('reset-view').addEventListener('click', () => map.fitBounds(allBounds));

  setMode('journey');
  setDetail(0, false);
})();
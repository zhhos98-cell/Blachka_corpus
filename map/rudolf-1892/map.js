(() => {
  const routeData = window.RUDOLF_1892_ROUTE_DATA;
  const knowledgeData = window.RUDOLF_1892_KNOWLEDGE_DATA;
  const sourceData = window.RUDOLF_1892_SOURCE_DATA || { nodeOverrides:{}, nodeEnhancements:{}, nodeLinks:{} };
  const objectData = window.RUDOLF_1892_OBJECT_ROUTE_DATA || { packets:[] };
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
  const packets = objectData.packets || [];
  const objectNodes = packets.flatMap(packet => packet.nodes.map((node, index) => ({
    ...node,
    packetId: packet.id,
    packetTitle: packet.title,
    packetSubtitle: packet.subtitle,
    packetCode: packet.code || 'O',
    packetColor: packet.color || '#88936b',
    packetDirection: packet.direction || '',
    packetStatus: packet.status || '',
    packetIndex: index
  })));
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

  const objectTypeColors = {
    dispatch: '#9b7e63',
    forwarder: '#8f8a67',
    ocean: '#6f8794',
    bond: '#82758b',
    broker: '#8c806f',
    unpack: '#778b68',
    postal: '#8f6f79',
    receipt: '#768a72',
    conversion: '#9a805a',
    sorting: '#7f7c94',
    procurement: '#777f9a',
    delayed: '#a47a63',
    reassembly: '#7b8968'
  };

  const objectTypeLabels = {
    dispatch: 'dispatch',
    forwarder: 'forwarder',
    ocean: 'ocean',
    bond: 'bond',
    broker: 'broker / customs',
    unpack: 'unpacking',
    postal: 'postal packet',
    receipt: 'receipt / destination',
    conversion: 'media conversion',
    sorting: 'sorting',
    procurement: 'procurement',
    delayed: 'delayed / awaited',
    reassembly: 'workshop reassembly'
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
  const objectRouteLayer = L.layerGroup();
  const objectMarkerLayer = L.layerGroup();

  const documentedLine = L.polyline(documented.map(d => [d.lat, d.lng]), {
    color: '#b67a51', weight: 4, opacity: .92, lineCap: 'round'
  }).addTo(routeLayer);

  L.polyline(planned.map(d => [d.lat, d.lng]), {
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
  const objectMarkerMap = new Map();
  const flowNodeIds = new Set(flows.flatMap(flow => [flow.from, flow.to]));
  let currentIndex = 0;
  let currentObjectIndex = 0;
  let currentDetailKind = 'person';
  let currentMode = 'journey';
  let currentScope = 'person';
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

  function objectMarkerIcon(node, mode) {
    const color = mode === 'operations' ? (objectTypeColors[node.type] || node.packetColor) : node.packetColor;
    const label = `${node.packetCode}${node.packetIndex + 1}`;
    return L.divIcon({
      className: 'object-handoff-icon',
      html: `<span class="object-handoff-marker" style="background:${color}">${label}</span>`,
      iconSize: [30, 30], iconAnchor: [15, 15]
    });
  }

  function segmentStyle(packet, toNode, mode) {
    const color = mode === 'operations' ? (objectTypeColors[toNode.type] || packet.color || '#88936b') : (packet.color || '#88936b');
    const common = { color, weight: mode === 'operations' ? 3 : 3.2, opacity: mode === 'flows' ? .72 : mode === 'operations' ? .62 : .93, lineCap:'round' };
    if (toNode.lineKind === 'prospective' || toNode.lineKind === 'requested') return { ...common, dashArray:'3 9', opacity:.72 };
    if (toNode.lineKind === 'delayed') return { ...common, dashArray:'2 8', opacity:.82 };
    if (toNode.lineKind === 'postal') return { ...common, dashArray:'6 6' };
    if (toNode.lineKind === 'guarded') return { ...common, dashArray:'4 8', opacity:.78 };
    if (toNode.type === 'ocean') return { ...common, dashArray:'3 7' };
    if (toNode.type === 'bond') return { ...common, dashArray:'12 6', weight:3.5 };
    if (toNode.type === 'forwarder' || toNode.type === 'broker') return { ...common, dashArray:'8 5' };
    if (toNode.type === 'unpack' || toNode.type === 'receipt' || toNode.type === 'reassembly') return { ...common, weight:3.8 };
    return common;
  }

  function renderObjectRoutes(mode = currentMode) {
    objectRouteLayer.clearLayers();
    packets.forEach(packet => {
      for (let i = 0; i < packet.nodes.length - 1; i += 1) {
        const from = packet.nodes[i];
        const to = packet.nodes[i + 1];
        const line = L.polyline([[from.lat, from.lng], [to.lat, to.lng]], segmentStyle(packet, to, mode)).addTo(objectRouteLayer);
        const guard = to.routeGuard ? `<br><em>${to.routeGuard}</em>` : '';
        line.bindTooltip(`<strong>${packet.code || 'O'} · ${packet.title}</strong><br>${from.title} → ${to.title}<br><span>${to.action}</span>${guard}`, { sticky:true, className:'journey-flow-tooltip' });
      }
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
      const cancelClose = () => { if (closeTimer) clearTimeout(closeTimer); closeTimer = 0; };
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

  objectNodes.forEach((node, index) => {
    const marker = L.marker([node.lat, node.lng], {
      icon: objectMarkerIcon(node, 'journey'),
      title: `${node.packetCode} · ${node.packetTitle} · ${node.title} · ${node.date}`,
      riseOnHover: true
    }).addTo(objectMarkerLayer);
    marker.bindTooltip(`<strong>${node.packetCode} · ${node.packetTitle}</strong><br>${node.title} · ${node.date}<br>${node.action}`, { direction:'top', offset:[0,-10] });
    marker.on('click', () => setObjectDetail(index, true));
    objectMarkerMap.set(node.id, marker);
  });

  renderObjectRoutes('journey');
  renderVisualMatches();

  const personBounds = L.latLngBounds(documented.map(d => [d.lat, d.lng])).pad(.12);
  const objectBounds = objectNodes.length ? L.latLngBounds(objectNodes.map(d => [d.lat, d.lng])).pad(.14) : personBounds;
  const combinedBounds = L.latLngBounds([...documented.map(d => [d.lat, d.lng]), ...objectNodes.map(d => [d.lat, d.lng])]).pad(.12);
  map.fitBounds(personBounds);

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
  const personDetailContent = document.getElementById('person-detail-content');
  const objectDetailContent = document.getElementById('object-detail-content');
  const objectPacketList = document.getElementById('object-packet-list');

  const objectDetailNo = document.getElementById('object-detail-no');
  const objectDetailDate = document.getElementById('object-detail-date');
  const objectDetailTitle = document.getElementById('object-detail-title');
  const objectDetailSummary = document.getElementById('object-detail-summary');
  const objectDetailTags = document.getElementById('object-detail-tags');
  const objectDetailObject = document.getElementById('object-detail-object');
  const objectDetailAction = document.getElementById('object-detail-action');
  const objectDetailHandler = document.getElementById('object-detail-handler');
  const objectDetailState = document.getElementById('object-detail-state');
  const objectDetailDescription = document.getElementById('object-detail-description');
  const objectDetailSource = document.getElementById('object-detail-source');

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

  function showPersonDetail() {
    currentDetailKind = 'person';
    personDetailContent.hidden = false;
    objectDetailContent.hidden = true;
  }

  function showObjectDetail() {
    currentDetailKind = 'object';
    personDetailContent.hidden = true;
    objectDetailContent.hidden = false;
  }

  function setDetail(index, focusMap = false) {
    showPersonDetail();
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
    objectMarkerMap.forEach(marker => marker.getElement()?.querySelector('.object-handoff-marker')?.classList.remove('is-active'));

    if (focusMap) {
      const targetZoom = Math.max(map.getZoom(), 5);
      if (reduced) map.setView([rawItem.lat, rawItem.lng], targetZoom);
      else map.flyTo([rawItem.lat, rawItem.lng], targetZoom, { duration:.55 });
    }
  }

  function setObjectDetail(index, focusMap = false) {
    if (!objectNodes.length) return;
    showObjectDetail();
    currentObjectIndex = index;
    const node = objectNodes[index];
    objectDetailNo.textContent = `${node.packetCode}${node.packetIndex + 1}`;
    objectDetailNo.style.background = node.packetColor;
    objectDetailDate.textContent = node.date;
    objectDetailTitle.textContent = node.title;
    objectDetailSummary.textContent = node.detail;
    objectDetailObject.textContent = `${node.packetTitle}. ${node.packetSubtitle || ''}`.trim();
    objectDetailAction.textContent = node.action;
    objectDetailHandler.textContent = node.handler;
    objectDetailState.textContent = node.state;
    objectDetailDescription.textContent = node.routeGuard ? `${node.detail} Guard: ${node.routeGuard}` : node.detail;
    objectDetailSource.textContent = `${node.evidence} · confidence ${node.confidence}`;
    objectDetailTags.innerHTML = '';
    [node.packetDirection, objectTypeLabels[node.type] || node.type, node.packetStatus, node.confidence].filter(Boolean).forEach(tag => {
      const span = document.createElement('span');
      span.className = 'journey-tag';
      span.textContent = tag;
      objectDetailTags.appendChild(span);
    });

    objectMarkerMap.forEach((marker, id) => {
      const el = marker.getElement()?.querySelector('.object-handoff-marker');
      if (el) el.classList.toggle('is-active', id === node.id);
    });
    markerMap.forEach(marker => marker.getElement()?.querySelector('.journey-marker')?.classList.remove('is-active'));
    objectPacketList?.querySelectorAll('[data-object-packet]').forEach(button => button.classList.toggle('is-active', button.dataset.objectPacket === node.packetId));

    if (focusMap) {
      const targetZoom = Math.max(map.getZoom(), node.type === 'ocean' ? 3 : 5);
      if (reduced) map.setView([node.lat, node.lng], targetZoom);
      else map.flyTo([node.lat, node.lng], targetZoom, { duration:.55 });
    }
  }

  documented.forEach((rawItem, index) => {
    const item = displayItem(rawItem);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'route-index-item';
    button.dataset.routeIndex = index;
    button.innerHTML = `<span class="route-index-no">${numberFor(index)}</span><span class="route-index-copy"><strong>${item.title}</strong><small>${item.date}</small></span>`;
    button.addEventListener('click', () => {
      if (currentScope === 'objects') setScope('both', false);
      setDetail(index, true);
    });
    routeIndex.appendChild(button);
  });

  packets.forEach(packet => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'object-packet-card';
    button.dataset.objectPacket = packet.id;
    button.innerHTML = `<div><h3>${packet.code || 'O'} · ${packet.title}</h3><p>${packet.subtitle}</p><p>${packet.summary}</p><small>${packet.direction || ''}${packet.direction ? ' · ' : ''}${packet.dateRange} · ${packet.status}</small></div><span class="object-packet-count" style="background:${packet.color || '#88936b'}">${packet.code || packet.nodes.length}</span>`;
    button.addEventListener('click', () => {
      if (currentScope === 'person') setScope('both', false);
      const firstIndex = objectNodes.findIndex(node => node.packetId === packet.id);
      setObjectDetail(Math.max(firstIndex, 0), false);
      const packetBounds = L.latLngBounds(packet.nodes.map(node => [node.lat, node.lng])).pad(.18);
      map.fitBounds(packetBounds);
    });
    objectPacketList?.appendChild(button);
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

  function modeCopyText(mode, scope) {
    if (mode === 'operations') {
      if (scope === 'objects') return '<strong>Work</strong> recolours each object node by handoff regime: dispatch, forwarding, bonded movement, post, procurement, customs handling, receipt or reassembly.';
      if (scope === 'both') return '<strong>Work</strong> compares Rudolf’s recorded activities with the regimes through which freight, postal packets and references moved independently.';
      return '<strong>Work</strong> colours each stop by the main activity recorded there.';
    }
    if (mode === 'flows') {
      if (scope === 'objects') return '<strong>Flows</strong> keeps independently reconstructed packets visible while adding material, instruction, reference and delayed-return movements generated by the expedition.';
      if (scope === 'both') return '<strong>Flows</strong> overlays independently moving material, instructions, delayed decisions, reference chains and post-return reassembly on the bodily and packet routes.';
      return '<strong>Flows</strong> separates material, instructions, delayed decisions, reference chains and post-return reassembly from Rudolf’s bodily route.';
    }
    if (scope === 'objects') return '<strong>Journey</strong> follows packets that left the same project under different transport regimes. Solid, dashed and dotted segments distinguish directly reconstructed movement from postal, bonded, requested or guarded legs.';
    if (scope === 'both') return '<strong>Journey</strong> places Rudolf’s bodily route beside freight and postal packets. The workshop did not move as a unit: people, models, repair materials, seeds and books split apart and reassembled on different clocks.';
    return '<strong>Journey</strong> follows documented bodily movement. The dashed public line remains separate; translucent rail segments show corridor-level observation windows without inventing extra stops.';
  }

  function matchLegend() {
    return visualMatches.length && currentScope !== 'objects' ? '<span><i class="is-match"></i>sketchbook match</span>' : '';
  }

  function objectLegend() {
    if (currentScope === 'person') return '';
    return packets.map(packet => `<span><i class="is-dashed" style="--legend-color:${packet.color || '#88936b'}"></i>${packet.code || 'O'} ${packet.legend || packet.title}</span>`).join('');
  }

  function renderLegend(mode) {
    if (mode === 'operations') {
      const personOps = currentScope === 'objects' ? '' : Object.entries(operations).map(([key, op]) => `<span><i style="--legend-color:${op.color}"></i>${operationLabels[key] || op.label}</span>`).join('');
      const objectOps = currentScope === 'person' ? '' : Object.entries(objectTypeColors).map(([key, color]) => `<span><i class="is-square" style="--legend-color:${color}"></i>${objectTypeLabels[key] || key}</span>`).join('');
      modeLegend.innerHTML = personOps + objectOps + matchLegend();
      return;
    }
    if (mode === 'flows') {
      modeLegend.innerHTML = '<span><i style="--legend-color:#6f91a4"></i>material</span><span><i style="--legend-color:#8a718c"></i>information</span><span><i style="--legend-color:#a56558"></i>decision lag</span><span><i style="--legend-color:#71836a"></i>reference chain</span><span><i style="--legend-color:#b08b59"></i>return / queue</span><span><i style="--legend-color:#9b8866"></i>future supply</span>' + objectLegend() + matchLegend();
      return;
    }
    const personLegend = currentScope === 'objects' ? '' : '<span><i style="--legend-color:#b67a51"></i>documented person route</span><span><i class="is-dashed" style="--legend-color:#71889a"></i>reported route</span><span><i class="is-dashed" style="--legend-color:#d39a79"></i>observation corridor</span><span><i class="is-dashed" style="--legend-color:#655d58"></i>night / exclusion control</span>';
    modeLegend.innerHTML = personLegend + objectLegend() + matchLegend();
  }

  function removeIfPresent(layer) {
    if (map.hasLayer(layer)) map.removeLayer(layer);
  }

  function syncLayers() {
    [routeLayer, plannedLayer, plannedPointLayer, markerLayer, flowLayer, corridorLayer, visualMatchLayer, objectRouteLayer, objectMarkerLayer].forEach(removeIfPresent);
    const showPerson = currentScope === 'person' || currentScope === 'both';
    const showObjects = currentScope === 'objects' || currentScope === 'both';

    if (showPerson) {
      map.addLayer(routeLayer);
      map.addLayer(markerLayer);
      if (currentMode === 'journey') {
        map.addLayer(plannedLayer);
        map.addLayer(plannedPointLayer);
        map.addLayer(corridorLayer);
      }
      if (currentMode === 'flows') {
        renderFlows();
        map.addLayer(flowLayer);
      }
      map.addLayer(visualMatchLayer);
    } else if (currentMode === 'flows') {
      renderFlows();
      map.addLayer(flowLayer);
    }

    if (showObjects) {
      renderObjectRoutes(currentMode);
      map.addLayer(objectRouteLayer);
      map.addLayer(objectMarkerLayer);
    }

    documentedLine.setStyle({ opacity: currentMode === 'journey' ? .92 : currentMode === 'operations' ? .28 : .15, weight: currentMode === 'journey' ? 4 : 2 });
    documented.forEach((item, index) => markerMap.get(item.id)?.setIcon(markerIcon(item, index, currentMode)));
    objectNodes.forEach(node => objectMarkerMap.get(node.id)?.setIcon(objectMarkerIcon(node, currentMode)));
    modeCopy.innerHTML = modeCopyText(currentMode, currentScope);
    renderLegend(currentMode);

    if (currentDetailKind === 'object' && showObjects) setObjectDetail(currentObjectIndex, false);
    else if (showPerson) setDetail(currentIndex, false);
    else if (showObjects) setObjectDetail(currentObjectIndex, false);
  }

  function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('[data-map-mode]').forEach(button => {
      const active = button.dataset.mapMode === mode;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    syncLayers();
  }

  function setScope(scope, refit = true) {
    currentScope = scope;
    document.querySelectorAll('[data-route-scope]').forEach(button => {
      const active = button.dataset.routeScope === scope;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    syncLayers();
    if (refit) {
      const bounds = scope === 'person' ? personBounds : scope === 'objects' ? objectBounds : combinedBounds;
      map.fitBounds(bounds);
    }
  }

  function stepDetail(direction) {
    if (currentDetailKind === 'object' && objectNodes.length && currentScope !== 'person') {
      setObjectDetail((currentObjectIndex + direction + objectNodes.length) % objectNodes.length, true);
      return;
    }
    setDetail((currentIndex + direction + documented.length) % documented.length, true);
  }

  document.querySelectorAll('[data-map-mode]').forEach(button => button.addEventListener('click', () => setMode(button.dataset.mapMode)));
  document.querySelectorAll('[data-route-scope]').forEach(button => button.addEventListener('click', () => setScope(button.dataset.routeScope)));
  document.getElementById('prev-stop').addEventListener('click', () => stepDetail(-1));
  document.getElementById('next-stop').addEventListener('click', () => stepDetail(1));
  document.getElementById('reset-view').addEventListener('click', () => {
    const bounds = currentScope === 'person' ? personBounds : currentScope === 'objects' ? objectBounds : combinedBounds;
    map.fitBounds(bounds);
  });

  setMode('journey');
  setScope('person', false);
  setDetail(0, false);
})();

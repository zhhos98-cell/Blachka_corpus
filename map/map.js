(() => {
  const mapEl = document.getElementById('collection-map');
  const frame = document.querySelector('.map-frame');
  const note = document.getElementById('map-load-note');
  const list = document.getElementById('map-institution-list');
  const search = document.getElementById('map-search');
  const count = document.getElementById('map-result-count');
  if (!mapEl || !list) return;

  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const norm = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  const statusLabel = {confirmed:'Documented holding',partial:'Current detail incomplete',open:'Survival unresolved'};
  let records = [];
  let leafletMap = null;
  const markers = new Map();

  const renderList = () => {
    list.innerHTML = records.map(record => `<button class="map-institution" type="button" data-map-id="${esc(record.id)}" data-search="${esc([record.institution,record.city,record.country,record.count_display,record.summary].join(' '))}"><strong>${esc(record.institution)}</strong><small>${esc(record.city)} · ${esc(record.country)}</small><em>${esc(record.count_display)}</em></button>`).join('');
    list.querySelectorAll('.map-institution').forEach(button => button.addEventListener('click', () => {
      const marker = markers.get(button.dataset.mapId);
      if (!marker || !leafletMap) return;
      leafletMap.setView(marker.getLatLng(), Math.max(leafletMap.getZoom(), 7), {animate:true});
      marker.openPopup();
      mapEl.scrollIntoView({behavior:'smooth',block:'center'});
    }));
  };

  const applySearch = () => {
    const q = norm(search?.value || '');
    let shown = 0;
    records.forEach(record => {
      const match = !q || norm([record.institution,record.city,record.country,record.count_display,record.summary].join(' ')).includes(q);
      const button = list.querySelector(`[data-map-id="${CSS.escape(record.id)}"]`);
      if (button) button.hidden = !match;
      const marker = markers.get(record.id);
      if (marker && leafletMap) {
        const onMap = leafletMap.hasLayer(marker);
        if (match && !onMap) marker.addTo(leafletMap);
        if (!match && onMap) marker.removeFrom(leafletMap);
      }
      if (match) shown += 1;
    });
    if (count) count.textContent = q ? `${shown} of ${records.length} institutions` : `${records.length} institutions`;
  };

  const initMap = () => {
    if (!window.L) {
      if (note) note.textContent = 'Map tiles unavailable; use the institution index below.';
      return;
    }
    leafletMap = L.map(mapEl, {zoomControl:true,worldCopyJump:true,minZoom:2,maxZoom:12,attributionControl:true});
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom:19,
      attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>'
    }).addTo(leafletMap);

    records.forEach(record => {
      const size = record.status === 'open' ? 13 : 12;
      const icon = L.divIcon({className:'',html:`<span class="blaschka-dot blaschka-dot--${esc(record.status)}" style="display:block;width:${size}px;height:${size}px"></span>`,iconSize:[size,size],iconAnchor:[size/2,size/2]});
      const link = record.url ? `<a class="map-popup-link" href="${esc(record.url)}">Open related case →</a>` : '';
      const popup = `<p class="map-popup-status">${esc(statusLabel[record.status] || record.status)}</p><h3 class="map-popup-title">${esc(record.institution)}</h3><p class="map-popup-meta">${esc(record.city)} · ${esc(record.country)}</p><p class="map-popup-count">${esc(record.count_display)}</p><p class="map-popup-copy">${esc(record.summary)}</p>${link}`;
      const marker = L.marker([record.lat,record.lon], {icon,title:record.institution,keyboard:true,alt:record.institution}).bindTooltip(record.institution,{direction:'top',offset:[0,-7]}).bindPopup(popup,{maxWidth:330});
      marker.addTo(leafletMap);
      markers.set(record.id,marker);
    });

    const bounds = L.latLngBounds(records.map(record => [record.lat,record.lon]));
    leafletMap.fitBounds(bounds,{padding:[26,26],maxZoom:2});
    frame?.classList.add('is-ready');
    if (note) note.textContent = '';
    applySearch();
  };

  const fetchJSON = path => fetch(path).then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  });

  Promise.all([
    fetchJSON('map-data.json?v=20260810-2'),
    fetchJSON('map-data-census.json?v=20260810-2')
  ])
    .then(([baseData, censusData]) => {
      const merged = new Map();
      (baseData.institutions || []).forEach(record => merged.set(record.id, record));
      (censusData.institutions || []).forEach(record => {
        const prior = merged.get(record.id) || {};
        merged.set(record.id, {...prior, ...record});
      });
      records = [...merged.values()].filter(record => Number.isFinite(record.lat) && Number.isFinite(record.lon)).sort((a,b) => a.institution.localeCompare(b.institution,'en',{sensitivity:'base'}));
      renderList();
      const params = new URLSearchParams(location.search);
      if (search && params.get('q')) search.value = params.get('q');
      if (search) search.addEventListener('input',applySearch);
      if (count) count.textContent = `${records.length} institutions`;
      initMap();
      applySearch();
    })
    .catch(() => {
      if (note) note.textContent = 'Map data unavailable.';
      if (count) count.textContent = 'Institution data unavailable';
    });
})();

from pathlib import Path
import json
import re

# 1. One request for all People data instead of manifest + 16 part requests.
manifest_path = Path('people/people-records.json')
manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
records = []
for part in manifest.get('parts', []):
    payload = json.loads((manifest_path.parent / part).read_text(encoding='utf-8'))
    records.extend(payload.get('records', []))
people_data = {
    'schema_version': manifest.get('schema_version'),
    'generated': manifest.get('generated'),
    'site_section': manifest.get('site_section'),
    'record_count': len(records),
    'scope': manifest.get('scope'),
    'groups': manifest.get('groups', {}),
    'records': records,
}
Path('people/people-data.json').write_text(json.dumps(people_data, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')

people_js = Path('people/people.js')
text = people_js.read_text(encoding='utf-8')
old = """  fetch('people-records.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(manifest => {
      groups = manifest.groups || {};
      const parts = manifest.parts || [];
      return Promise.all(parts.map(path => fetch(path).then(response => {
        if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
        return response.json();
      })));
    })
    .then(parts => {
      records = parts.flatMap(part => part.records || []).sort((a,b) => (a.sort || a.name).localeCompare(b.sort || b.name, 'en', {sensitivity:'base'}));
"""
new = """  fetch('people-data.json', { cache:'force-cache' })
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(payload => {
      groups = payload.groups || {};
      records = (payload.records || []).sort((a,b) => (a.sort || a.name).localeCompare(b.sort || b.name, 'en', {sensitivity:'base'}));
"""
if old in text:
    people_js.write_text(text.replace(old, new), encoding='utf-8')
elif "fetch('people-data.json'" not in text:
    raise SystemExit('Expected People fetch block not found')

# 2. Sources: one JS request instead of eleven pass files plus A-Z runtime.
src_index = Path('sources/index.html')
text = src_index.read_text(encoding='utf-8')
text = re.sub(r'sources\.css\?v=[0-9-]+', 'sources.css?v=20260810-7', text)
text = re.sub(r'\n\s*<script src="sources-pass2\.js[^\n]*</script>.*?<script src="sources-az\.js[^\n]*</script>', '\n  <script src="sources-runtime.js?v=20260810-1" defer></script>', text, flags=re.S)
src_index.write_text(text, encoding='utf-8')

for path in [*Path('sources').glob('sources-pass*.js'), Path('sources/sources-runtime.js')]:
    t = path.read_text(encoding='utf-8')
    t = re.sub(r'sources\.css\?v=[0-9-]+', 'sources.css?v=20260810-7', t)
    path.write_text(t, encoding='utf-8')

src_css = Path('sources/sources.css')
t = src_css.read_text(encoding='utf-8')
t = re.sub(r'^@import url\("\.\./typography-garamond\.css[^\n]+\n', '', t)
t = re.sub(r'^@import url\("\.\./mobile-v3\.css[^\n]+\n', '', t)
src_css.write_text(t, encoding='utf-8')

# 3. Cases: five deferred visual scripts become one cached bundle.
cases_js = Path('cases/cases-page.js')
t = cases_js.read_text(encoding='utf-8')
start = t.find('  const loadSecondaryVisuals = async () => {')
end = t.find('\n\n  (async () => {', start)
if start != -1 and end != -1:
    replacement = "  const loadSecondaryVisuals = async () => {\n    if (compactViewport) return;\n    try { await loadScript('../cases-visuals-bundle.js?v=20260810-1'); }\n    catch (error) { console.error(error); }\n  };"
    t = t[:start] + replacement + t[end:]
cases_js.write_text(t, encoding='utf-8')

# 4. Homepage: enhancement CSS is static and the first hero request matches JS.
home = Path('index.html')
t = home.read_text(encoding='utf-8')
if 'home-core.css' not in t:
    t = t.replace('<link rel="stylesheet" href="navigation-shell.css?v=20260810-2">', '<link rel="stylesheet" href="navigation-shell.css?v=20260810-2">\n  <link rel="stylesheet" href="home-core.css?v=20260810-1">')
t = t.replace('DSC06169.jpg?width=1600', 'DSC06169.jpg?width=1800')
t = re.sub(r'home-v2\.js\?v=[0-9-]+', 'home-v2.js?v=20260810-10', t)
home.write_text(t, encoding='utf-8')

hv = Path('home-v2.js')
t = hv.read_text(encoding='utf-8')
t = re.sub(r"\n  addStyle\('site-polish\.css.*?addStyle\('navigation-shell\.css[^\n]+\n", '\n', t, flags=re.S)
t = t.replace('const imageWidth = compact ? 1280 : 2200;', 'const imageWidth = compact ? 1200 : 1800;')
t = t.replace("      ['Project','#project'],['Cases','cases/'],['People','people/'],['Bibliography','bibliography/'],\n      ['Sources','sources/'],['Auctions','auctions/'],['About','about/']", "      ['Cases','cases/'],['People','people/'],['Bibliography','bibliography/'],\n      ['Sources','sources/'],['Auctions','auctions/'],['About','about/']")
hv.write_text(t, encoding='utf-8')

# 5. Consolidated site-core is present in first paint on all public subpages except Bib.
public_subpages = [
    'about/index.html','accessibility/index.html','auctions/index.html','cases/index.html',
    'people/index.html','privacy/index.html','rights/index.html','sources/index.html'
]
for filename in public_subpages:
    p = Path(filename)
    t = p.read_text(encoding='utf-8')
    t = re.sub(r'\n\s*<link rel="stylesheet" href="\.\./(?:mobile-v3|navigation-shell|apple-unified|accessibility)\.css[^>]*>', '', t)
    if '../site-core.css' not in t:
        t = t.replace('</head>', '  <link rel="stylesheet" href="../site-core.css?v=20260810-1">\n</head>')
    t = re.sub(r'unified-ui\.js\?v=[0-9-]+', 'unified-ui.js?v=20260810-15', t)
    t = re.sub(r'people\.js\?v=[0-9-]+', 'people.js?v=20260810-3', t)
    t = re.sub(r'cases-page\.js\?v=[0-9-]+', 'cases-page.js?v=20260810-7', t)
    p.write_text(t, encoding='utf-8')

# Update every runtime reference so stale query-string caches cannot keep an old shell.
for p in Path('.').rglob('*.js'):
    t = p.read_text(encoding='utf-8')
    t2 = re.sub(r'unified-ui\.js\?v=[0-9-]+', 'unified-ui.js?v=20260810-15', t)
    if t2 != t:
        p.write_text(t2, encoding='utf-8')

from pathlib import Path
import re

# --- Homepage: let the browser pick the correct first hero image once. ---
home = Path('index.html')
text = home.read_text(encoding='utf-8')
hero_file = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Sea%20cucumber%2C%20model%20by%20Leopold%20and%20Rudolph%20Blaschka%2C%20glass%20-%20Harvard%20Museum%20of%20Comparative%20Zoology%20-%20DSC06169.jpg'
img_pattern = re.compile(r'<img class="hero-image"[^>]+>')
new_img = (
    f'<img class="hero-image" src="{hero_file}?width=1200" '
    f'srcset="{hero_file}?width=1200 1200w, {hero_file}?width=1800 1800w" '
    'sizes="100vw" alt="Blaschka glass sea cucumber model" decoding="async" '
    'fetchpriority="high" referrerpolicy="no-referrer">'
)
text, count = img_pattern.subn(new_img, text, count=1)
if count != 1:
    raise SystemExit('Homepage hero image element not found')
text = re.sub(r'home-v2\.js\?v=[0-9-]+', 'home-v2.js?v=20260810-11', text)
home.write_text(text, encoding='utf-8')

home_js = Path('home-v2.js')
t = home_js.read_text(encoding='utf-8')
t = t.replace('    heroImage.src = slides[0].src;\n', '')
old_preload = """    const preload = () => slides.slice(1).forEach(slide => { const img = new Image(); img.src = slide.src; });
    if ('requestIdleCallback' in window) requestIdleCallback(preload,{timeout:2500}); else setTimeout(preload,1200);
    updateMeta(0);
    startTimer();
"""
new_preload = """    const preloaded = new Set();
    const preloadSlide = index => {
      if (index === current || preloaded.has(index)) return;
      preloaded.add(index);
      const img = new Image();
      img.decoding = 'async';
      img.src = slides[index].src;
    };
    const queueNext = () => {
      const next = (current + 1) % slides.length;
      if ('requestIdleCallback' in window) requestIdleCallback(() => preloadSlide(next), {timeout:2200});
      else setTimeout(() => preloadSlide(next), 1000);
    };
    hero.addEventListener('transitionend', queueNext, {passive:true});
    queueNext();
    updateMeta(0);
    startTimer();
"""
if old_preload in t:
    t = t.replace(old_preload, new_preload)
home_js.write_text(t, encoding='utf-8')

# --- Cases: make all ten long-form cases part of the HTML instead of assembling them at runtime. ---
base = Path('cases/base-cases.html').read_text(encoding='utf-8').strip()
ext_js = Path('cases-v2.js').read_text(encoding='utf-8')
marker = "anchor.insertAdjacentHTML('afterend', `"
if marker not in ext_js:
    raise SystemExit('cases-v2 template marker not found')
extension = ext_js.split(marker, 1)[1].rsplit('`);', 1)[0].strip()
if base.count('<section class="sample') != 5 or extension.count('<section class="sample') != 5:
    raise SystemExit('Expected five base and five extension case sections')
combined = base + '\n\n' + extension

cases_index = Path('cases/index.html')
text = cases_index.read_text(encoding='utf-8')
text, count = re.subn(
    r'<div id="case-sections">.*?</div>\s*</main>',
    '<div id="case-sections">\n' + combined + '\n    </div>\n  </main>',
    text,
    count=1,
    flags=re.S,
)
if count != 1:
    raise SystemExit('Cases target container not found')
text = re.sub(r'cases-page\.js\?v=[0-9-]+', 'cases-page.js?v=20260810-8', text)
cases_index.write_text(text, encoding='utf-8')

lean_cases = r'''(() => {
  if (!window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260810-15';
    ui.defer = true;
    document.head.appendChild(ui);
  }

  const target = document.getElementById('case-sections');
  if (!target) return;
  const compactViewport = matchMedia('(max-width:900px)').matches;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const loadScript = src => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  const revealCases = () => {
    const samples = [...target.querySelectorAll('.sample')];
    if (compactViewport || reducedMotion || !('IntersectionObserver' in window)) {
      samples.forEach(sample => sample.classList.add('case-visible'));
      return;
    }
    samples.forEach(sample => sample.classList.add('case-enter'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('case-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold:.05, rootMargin:'0px 0px -4% 0px' });
    samples.forEach(sample => observer.observe(sample));
  };

  const applyIncomingSearch = () => {
    const raw = (new URLSearchParams(location.search).get('q') || '').trim();
    if (!raw) return;
    const q = raw.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const samples = [...target.querySelectorAll('.sample')];
    let visible = 0;
    samples.forEach(sample => {
      const haystack = (sample.textContent || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      const show = haystack.includes(q);
      sample.hidden = !show;
      if (show) visible++;
    });
    const intro = document.querySelector('.page-intro');
    if (intro && !document.querySelector('.cases-query-bar')) {
      const bar = document.createElement('div');
      bar.className = 'cases-query-bar';
      bar.innerHTML = `<span>Search</span><strong></strong><em></em><a href="./">Clear</a>`;
      bar.querySelector('strong').textContent = `“${raw}”`;
      bar.querySelector('em').textContent = `${visible} matching case${visible === 1 ? '' : 's'}`;
      intro.insertAdjacentElement('afterend', bar);
    }
  };

  const restoreHash = () => {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.slice(1));
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({block:'start'}));
  };

  const loadWall = () => loadScript('./case-wall-media.js?v=20260810-4').catch(console.error);
  const loadSecondaryVisuals = () => {
    if (compactViewport) return;
    loadScript('../cases-visuals-bundle.js?v=20260810-1').catch(console.error);
  };

  document.body.classList.add('cases-ready');
  applyIncomingSearch();
  revealCases();
  restoreHash();

  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadWall, {timeout:450});
    requestIdleCallback(loadSecondaryVisuals, {timeout:1200});
  } else {
    setTimeout(loadWall, 80);
    setTimeout(loadSecondaryVisuals, 360);
  }
})();
'''
Path('cases/cases-page.js').write_text(lean_cases, encoding='utf-8')

# --- Eliminate duplicate shell CSS declarations from pages already using site-core. ---
for filename in ['people/index.html', 'sources/index.html', 'cases/index.html', 'auctions/index.html', 'about/index.html', 'privacy/index.html', 'rights/index.html', 'accessibility/index.html']:
    p = Path(filename)
    if not p.exists():
        continue
    t = p.read_text(encoding='utf-8')
    if '../site-core.css' in t:
        t = re.sub(r'\n\s*<link rel="stylesheet" href="\.\./navigation-shell\.css[^>]*>', '', t)
    p.write_text(t, encoding='utf-8')

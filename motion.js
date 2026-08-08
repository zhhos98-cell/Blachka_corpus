(() => {
  const enhancementSheet = document.createElement('link');
  enhancementSheet.rel = 'stylesheet';
  enhancementSheet.href = 'enhancements.css';
  document.head.appendChild(enhancementSheet);

  const hero = document.querySelector('.hero');
  const navLinks = [...document.querySelectorAll('.top-nav a[href^="#"]')];
  const timeline = document.querySelector('.timeline');
  const caseMeter = document.querySelector('.case-meter span');
  const sample = document.querySelector('.sample');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const sectionTargets = navLinks
    .map((link) => {
      const target = document.querySelector(link.getAttribute('href'));
      return target ? { link, target } : null;
    })
    .filter(Boolean);

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const updateNavigation = () => {
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    document.documentElement.classList.toggle('nav-scrolled', heroBottom <= 82);

    const marker = 150;
    let active = null;
    sectionTargets.forEach((item) => {
      const rect = item.target.getBoundingClientRect();
      if (rect.top <= marker) active = item;
    });

    navLinks.forEach((link) => link.classList.remove('is-active'));
    if (active && heroBottom < window.innerHeight * 0.8) {
      active.link.classList.add('is-active');
    }
  };

  const updateDocumentaryProgress = () => {
    if (timeline) {
      const rect = timeline.getBoundingClientRect();
      const trigger = window.innerHeight * 0.52;
      const progress = clamp((trigger - rect.top) / Math.max(rect.height, 1), 0, 1);
      timeline.style.setProperty('--timeline-progress', `${(progress * 100).toFixed(2)}%`);
    }

    if (sample && caseMeter) {
      const rect = sample.getBoundingClientRect();
      const distance = Math.max(rect.height - window.innerHeight * 0.55, 1);
      const progress = clamp((window.innerHeight * 0.28 - rect.top) / distance, 0, 1);
      caseMeter.style.setProperty('--case-progress', `${(progress * 100).toFixed(2)}%`);
    }
  };

  let utilityTicking = false;
  const updateUtilities = () => {
    updateNavigation();
    updateDocumentaryProgress();
    utilityTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (utilityTicking) return;
    utilityTicking = true;
    requestAnimationFrame(updateUtilities);
  }, { passive: true });

  window.addEventListener('resize', updateUtilities, { passive: true });
  updateUtilities();

  if (reduced) return;

  document.documentElement.classList.add('motion-ready');

  const revealGroups = [
    ['.section-heading', 0],
    ['.project-lede > p', 110],
    ['.research-chain', 0],
    ['.evidence-key', 0],
    ['.project-item', 0],
    ['.sample-side', 0],
    ['.sample-main > h2', 0],
    ['.standfirst', 90],
    ['.case-figure', 0],
    ['.event', 55],
    ['.status', 0],
    ['.case-sources', 0],
    ['.source-note', 0],
    ['footer', 0]
  ];

  const items = [];
  revealGroups.forEach(([selector, stagger]) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${index * stagger}ms`);
      items.push(el);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -8% 0px'
  });

  items.forEach((item) => observer.observe(item));

  requestAnimationFrame(() => {
    document.documentElement.classList.add('hero-in');
  });

  const heroImage = document.querySelector('.hero-image');
  let heroTicking = false;

  const updateHero = () => {
    if (!heroImage) return;
    const y = Math.min(window.scrollY * 0.07, 42);
    heroImage.style.transform = `translate3d(0, ${y}px, 0) scale(1.025)`;
    heroTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (heroTicking) return;
    heroTicking = true;
    requestAnimationFrame(updateHero);
  }, { passive: true });

  updateHero();
})();

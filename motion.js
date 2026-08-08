(() => {
  const enhancementSheet = document.createElement('link');
  enhancementSheet.rel = 'stylesheet';
  enhancementSheet.href = 'enhancements.css';
  document.head.appendChild(enhancementSheet);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  document.documentElement.classList.add('motion-ready');

  const revealGroups = [
    ['.section-heading', 0],
    ['.project-lede > p', 110],
    ['.research-chain', 0],
    ['.project-item', 85],
    ['.sample-side', 0],
    ['.sample-main > h2', 0],
    ['.standfirst', 90],
    ['.case-figure', 0],
    ['.event', 70],
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
    threshold: 0.12,
    rootMargin: '0px 0px -9% 0px'
  });

  items.forEach((item) => observer.observe(item));

  requestAnimationFrame(() => {
    document.documentElement.classList.add('hero-in');
  });

  const heroImage = document.querySelector('.hero-image');
  let ticking = false;

  const updateHero = () => {
    if (!heroImage) return;
    const y = Math.min(window.scrollY * 0.07, 42);
    heroImage.style.transform = `translate3d(0, ${y}px, 0) scale(1.025)`;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateHero);
  }, { passive: true });

  updateHero();
})();

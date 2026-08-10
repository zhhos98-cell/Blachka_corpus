(() => {
  const wall = document.querySelector('.case-wall');
  if (!wall) return;

  const files = [
    'Blaschka Natural History Museum Londres 28072013 2.jpg',
    'Blaschka Grant Museum of Zoology Londres 05082013 1.jpg',
    'Blaschka Grant Museum of Zoology Londres 05082013 2.jpg',
    'Blaschka Grant Museum of Zoology Londres 05082013 3.jpg',
    'Blaschka Grant Museum of Zoology Londres 05082013 3 B.jpg',
    'Sea cucumber, model by Leopold and Rudolph Blaschka, glass - Harvard Museum of Comparative Zoology - DSC06169.jpg',
    'Museum Histoire Naturelle Geneva Blaschka Forskalia contorta 21102014.jpg',
    'Museum Histoire Naturelle Geneva Blaschka Aurelia aurita 21102014.jpg',
    'Museum Histoire Naturelle Geneva Blaschka Scyphozoa Jellyfish 21102014.jpg',
    'Museum Histoire Naturelle Geneva Blaschka Chiroteuthis veranyi 21102014.jpg'
  ];
  const src = file => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(file)}?width=520`;

  [...wall.querySelectorAll('.case-index-row')].forEach((row, index) => {
    const front = row.querySelector('.case-tile-front');
    if (!front) return;
    front.querySelector('.case-thumb')?.remove();
    const number = front.querySelector('.case-no');
    const thumb = document.createElement('span');
    thumb.className = 'case-thumb case-thumb--image case-thumb--illustrative';
    thumb.setAttribute('aria-hidden', 'true');
    thumb.innerHTML = `<img src="${src(files[index % files.length])}" alt="" loading="lazy" decoding="async">`;
    if (number) number.insertAdjacentElement('afterend', thumb);
    else front.prepend(thumb);
  });

  if (!wall.nextElementSibling?.classList.contains('case-wall-note')) {
    const note = document.createElement('p');
    note.className = 'case-wall-note';
    note.textContent = 'Visual index: illustrative CC0 Blaschka model photographs. Case-specific evidence and object identifications are given in the records below.';
    wall.insertAdjacentElement('afterend', note);
  }
})();
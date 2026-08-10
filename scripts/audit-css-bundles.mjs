#!/usr/bin/env node

import { readFile, stat } from 'node:fs/promises';
import { basename } from 'node:path';

const roots = ['site-core.css', 'home-core.css'];
const familyTests = [
  ['home', /(?:\.hero\b|\.project-|\.origin-|\.featured\b|\.feature-|\.home-|\.subscribe-|\.top-nav\b)/g],
  ['cases', /(?:\.cases-page\b|\.case-|\.sample\b|\.event\b|\.status\b|\.object-register)/g],
  ['bibliography', /(?:\.bib-|bibliography)/g],
  ['sources', /(?:\.source-|sources?\b)/g],
  ['auctions', /(?:\.auction-|\.market-)/g],
  ['people', /(?:\.people-|\.person-)/g],
  ['subpage-shell', /(?:\.subpage-|body\.subpage|\.page-intro\b|\.ui-skip-link\b)/g]
];

const markerPattern = /\/\* ---- ([^*]+?\.css) ---- \*\//g;

function countMatches(text, regex) {
  regex.lastIndex = 0;
  return [...text.matchAll(regex)].length;
}

function sections(text) {
  const markers = [...text.matchAll(markerPattern)].map(match => ({
    name: match[1].trim(),
    start: match.index,
    bodyStart: match.index + match[0].length
  }));
  return markers.map((marker, index) => ({
    name: marker.name,
    start: marker.start,
    end: markers[index + 1]?.start ?? text.length,
    bytes: Buffer.byteLength(text.slice(marker.start, markers[index + 1]?.start ?? text.length), 'utf8')
  }));
}

const report = {
  generated_at: new Date().toISOString(),
  note: 'Source-byte and selector-routing audit only; this is not a browser timing benchmark.',
  bundles: []
};

for (const file of roots) {
  const text = await readFile(file, 'utf8');
  const fileStat = await stat(file);
  const parts = sections(text);
  const duplicateMarkers = parts
    .map(part => part.name)
    .filter((name, index, names) => names.indexOf(name) !== index);

  report.bundles.push({
    file,
    basename: basename(file),
    bytes: fileStat.size,
    markers: parts,
    duplicate_markers: [...new Set(duplicateMarkers)],
    family_signal_counts: Object.fromEntries(
      familyTests.map(([name, regex]) => [name, countMatches(text, regex)])
    )
  });
}

const [site, home] = report.bundles;
report.cross_checks = {
  site_core_contains_navigation_shell: site.markers.some(part => part.name === 'navigation-shell.css'),
  site_core_contains_nav_glide: site.markers.some(part => part.name === 'nav-glide.css'),
  home_core_contains_secondary_family_signals: ['bibliography', 'sources', 'auctions', 'people', 'cases']
    .filter(name => (home.family_signal_counts[name] || 0) > 0),
  warning: 'A family signal is a routing heuristic, not proof that an individual selector is dead. Verify the live DOM and cascade before deleting CSS.'
};

console.log(JSON.stringify(report, null, 2));

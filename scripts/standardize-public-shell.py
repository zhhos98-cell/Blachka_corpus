#!/usr/bin/env python3
"""Standardize the static public navigation shell without touching page content."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def canonical_nav(current: str) -> str:
    def link(key: str, href: str, label: str) -> str:
        attr = ' aria-current="page"' if current == key else ''
        return f'<a href="{href}"{attr}>{label}</a>'

    return (
        '    <nav class="subpage-nav" aria-label="Site navigation">\n'
        f'      {link("cases", "../cases/", "Cases")}\n'
        '      <details class="nav-map-menu"><summary class="nav-map-trigger">Map</summary><div class="nav-map-panel"><a href="../map/">Collections map</a><a href="../map/rudolf-1892/">Rudolf 1892 journey</a></div></details>\n'
        f'      {link("people", "../people/", "People")}\n'
        f'      {link("bibliography", "../bibliography/", "Bibliography")}\n'
        f'      {link("sources", "../sources/", "Sources")}\n'
        f'      {link("auctions", "../auctions/", "Auctions")}\n'
        f'      {link("about", "../about/", "About")}\n'
        '    </nav>'
    )


def replace_nav(path: Path, current: str) -> None:
    text = path.read_text(encoding="utf-8")
    pattern = re.compile(r'    <nav class="subpage-nav" aria-label="Site navigation">.*?    </nav>', re.S)
    updated, count = pattern.subn(canonical_nav(current), text, count=1)
    if count != 1:
        raise SystemExit(f"Expected one subpage nav in {path}")
    path.write_text(updated, encoding="utf-8")


def ensure_bibliography_baseline() -> None:
    path = ROOT / "bibliography" / "index.html"
    text = path.read_text(encoding="utf-8")
    anchor = '  <link rel="stylesheet" href="../secondary.css">\n'
    addition = (
        anchor
        + '  <link rel="stylesheet" href="../navigation-shell.css?v=20260811-2">\n'
        + '  <link rel="stylesheet" href="../accessibility.css?v=20260810-2">\n'
    )
    if 'navigation-shell.css' not in text:
        if anchor not in text:
            raise SystemExit("Bibliography secondary.css anchor missing")
        text = text.replace(anchor, addition, 1)
    if '<main class="subpage-main">' in text:
        text = text.replace('<main class="subpage-main">', '<main class="subpage-main" id="main-content">', 1)
    path.write_text(text, encoding="utf-8")


def main() -> None:
    replace_nav(ROOT / "cases" / "index.html", "cases")
    replace_nav(ROOT / "sources" / "index.html", "sources")
    replace_nav(ROOT / "bibliography" / "index.html", "bibliography")
    ensure_bibliography_baseline()

    for path in ROOT.rglob("*.html"):
        if "archive" in path.parts:
            continue
        text = path.read_text(encoding="utf-8")
        updated = text.replace(
            'navigation-shell.css?v=20260811-1',
            'navigation-shell.css?v=20260811-2',
        )
        if updated != text:
            path.write_text(updated, encoding="utf-8")

    print("Static public shell standardized")


if __name__ == "__main__":
    main()

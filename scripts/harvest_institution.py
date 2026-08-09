#!/usr/bin/env python3
"""Bounded institution-specific metadata harvester for the frozen slide survey.

Each Actions matrix job handles one current institution. The institution profile
controls allowed hosts, page budget and relevant links. Only public metadata
HTML, JSON, CSV/text and small PDFs are fetched. Image binaries and IIIF image
tiles are deliberately excluded. Oversized PDFs are recorded as skipped URLs and
are never written as partial files into Actions artifacts.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import html
import json
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import deque
from datetime import datetime, timezone
from io import BytesIO
from pathlib import Path
from typing import Any

SURVEY = Path("data/survey/07A_Global_Microscope_Slide_Collections_Survey.csv")
ACTIVE = Path("data/normalized/scope_19c_active_ids.json")
PROFILES = Path("data/survey/institution_harvest_profiles.json")
OUT_ROOT = Path("outputs/institution_harvest")
USER_AGENT = "Blachka-corpus-slide-survey/1.0 (+bounded public metadata only)"
SKIP_AUTOMATION = {"manual only", "blocked"}
IMAGE_EXT = re.compile(r"\.(?:jpe?g|png|gif|webp|tiff?|bmp|jp2)(?:$|\?)", re.I)
IIIF_TILE = re.compile(r"/(?:full|pct:|square|!?\d+,\d+)/", re.I)
DEFAULT_MAX_PDF_BYTES = 5_000_000


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-") or "institution"


def load_rows() -> list[dict[str, str]]:
    with SURVEY.open(newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def load_active() -> set[str]:
    if not ACTIVE.exists():
        return set()
    return set(json.loads(ACTIVE.read_text(encoding="utf-8")).get("entry_ids", []))


def normalise_url(url: str, base: str = "") -> str:
    url = html.unescape((url or "").strip())
    if base:
        url = urllib.parse.urljoin(base, url)
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme not in {"http", "https"}:
        return ""
    return urllib.parse.urlunparse(parsed._replace(fragment=""))


def host_allowed(url: str, allowed_hosts: set[str]) -> bool:
    host = (urllib.parse.urlparse(url).hostname or "").lower()
    return bool(host) and any(host == allowed or host.endswith("." + allowed) for allowed in allowed_hosts)


def skip_binary(url: str) -> bool:
    return bool(IMAGE_EXT.search(url) or IIIF_TILE.search(url))


def _content_length(headers: Any) -> int | None:
    raw = headers.get("content-length", "")
    try:
        value = int(raw)
    except (TypeError, ValueError):
        return None
    return value if value >= 0 else None


def fetch(url: str, max_bytes: int, max_pdf_bytes: int) -> tuple[bytes, str, str, dict[str, Any]]:
    """Fetch a bounded metadata document.

    PDFs are special: if Content-Length already exceeds the configured PDF cap,
    the body is not read. If the server omits Content-Length, at most cap+1 bytes
    are read; an oversized response is discarded rather than stored truncated.
    Small PDFs are therefore always complete when passed to pypdf.
    """
    req = urllib.request.Request(url, headers={
        "User-Agent": USER_AGENT,
        "Accept": "text/html,application/json,application/ld+json,application/pdf,text/plain,text/csv;q=0.8,*/*;q=0.2",
    })
    with urllib.request.urlopen(req, timeout=35) as resp:  # noqa: S310
        ctype = resp.headers.get("content-type", "").split(";", 1)[0].strip().lower()
        final_url = resp.geturl()
        content_length = _content_length(resp.headers)
        is_pdf = "pdf" in ctype or final_url.lower().split("?", 1)[0].endswith(".pdf")

        if is_pdf and content_length is not None and content_length > max_pdf_bytes:
            return b"", ctype, final_url, {
                "skipped_large_pdf": True,
                "reason": "content-length-over-limit",
                "content_length": content_length,
                "limit_bytes": max_pdf_bytes,
            }

        read_limit = max_pdf_bytes if is_pdf else max_bytes
        body = resp.read(read_limit + 1)

    if is_pdf and len(body) > max_pdf_bytes:
        return b"", ctype, final_url, {
            "skipped_large_pdf": True,
            "reason": "stream-over-limit",
            "content_length": content_length,
            "limit_bytes": max_pdf_bytes,
        }

    truncated = (not is_pdf) and len(body) > max_bytes
    if truncated:
        body = body[:max_bytes]
    return body, ctype, final_url, {
        "skipped_large_pdf": False,
        "content_length": content_length,
        "truncated": truncated,
    }


def html_to_text(raw: str) -> str:
    raw = re.sub(r"(?is)<script\b[^>]*>.*?</script>", " ", raw)
    raw = re.sub(r"(?is)<style\b[^>]*>.*?</style>", " ", raw)
    raw = re.sub(r"(?is)<noscript\b[^>]*>.*?</noscript>", " ", raw)
    raw = re.sub(r"(?is)<[^>]+>", " ", raw)
    return re.sub(r"\s+", " ", html.unescape(raw)).strip()


def extract_title(raw: str) -> str:
    match = re.search(r"(?is)<title[^>]*>(.*?)</title>", raw)
    return html_to_text(match.group(1)) if match else ""


def extract_meta(raw: str) -> dict[str, str]:
    out: dict[str, str] = {}
    for tag in re.findall(r"(?is)<meta\b[^>]*>", raw):
        name = re.search(r"(?is)\b(?:name|property)\s*=\s*[\"']([^\"']+)[\"']", tag)
        content = re.search(r"(?is)\bcontent\s*=\s*[\"']([^\"']*)[\"']", tag)
        if name and content:
            key = html.unescape(name.group(1)).strip()
            val = html.unescape(content.group(1)).strip()
            if key and val and key not in out:
                out[key] = val
    return out


def extract_jsonld(raw: str) -> list[Any]:
    values: list[Any] = []
    for block in re.findall(r"(?is)<script[^>]+type=[\"']application/ld\+json[\"'][^>]*>(.*?)</script>", raw):
        try:
            values.append(json.loads(html.unescape(block.strip())))
        except Exception:
            pass
    return values[:20]


def extract_links(raw: str, base_url: str) -> list[tuple[str, str]]:
    links: list[tuple[str, str]] = []
    seen: set[str] = set()
    for href, label_html in re.findall(r"(?is)<a\b[^>]*href=[\"']([^\"']+)[\"'][^>]*>(.*?)</a>", raw):
        url = normalise_url(href, base_url)
        if not url or url in seen or skip_binary(url):
            continue
        seen.add(url)
        links.append((url, html_to_text(label_html)[:250]))
    for tag in re.findall(r"(?is)<link\b[^>]*>", raw):
        href = re.search(r"(?is)\bhref\s*=\s*[\"']([^\"']+)[\"']", tag)
        if not href:
            continue
        url = normalise_url(href.group(1), base_url)
        if not url or url in seen or skip_binary(url):
            continue
        descriptor = " ".join(re.findall(r"(?is)\b(?:rel|type)\s*=\s*[\"']([^\"']+)[\"']", tag))
        if re.search(r"iiif|json|manifest|alternate|metadata", descriptor, re.I):
            seen.add(url)
            links.append((url, descriptor[:250]))
    return links


def relevant_link(url: str, label: str, profile: dict[str, Any]) -> bool:
    hay = f"{url} {label}"
    if any(re.search(pat, hay, re.I) for pat in profile.get("deny_url_regex", [])):
        return False
    if any(re.search(pat, hay, re.I) for pat in profile.get("follow_url_regex", [])):
        return True
    lower = hay.lower()
    return any(term.lower() in lower for term in profile.get("follow_anchor_terms", []))


def count_candidates(text: str) -> list[str]:
    out: list[str] = []
    seen: set[str] = set()
    patterns = [
        r"\b(?:about|approximately|around|over|more than|ca\.?|circa)\s+[\d,]+\b",
        r"\b[\d,]+\s+(?:microscope slides|slides|preparations|specimens|objects|drawers|cabinets|boxes|trays|sections)\b",
    ]
    for pat in patterns:
        for item in re.findall(pat, text, re.I):
            item = " ".join(item.split())
            if item.lower() not in seen:
                seen.add(item.lower())
                out.append(item)
    return out[:30]


def identifier_candidates(text: str) -> list[str]:
    out: list[str] = []
    seen: set[str] = set()
    patterns = [
        r"\b[A-Z]{1,6}\s?\d{2,6}(?:[./-]\d{1,6})+\b",
        r"\b(?:accession|catalog(?:ue)?|registration|object|specimen|slide)\s*(?:no\.?|number|#|:)?\s*[A-Z0-9][A-Z0-9./-]{2,25}\b",
    ]
    for pat in patterns:
        for item in re.findall(pat, text, re.I):
            val = " ".join(item.split())
            if val.lower() not in seen:
                seen.add(val.lower())
                out.append(val)
    return out[:60]


def flatten_json(obj: Any, prefix: str = "", depth: int = 0, out: dict[str, Any] | None = None) -> dict[str, Any]:
    out = {} if out is None else out
    if depth > 4 or len(out) >= 120:
        return out
    if isinstance(obj, dict):
        for key, value in obj.items():
            path = f"{prefix}.{key}" if prefix else str(key)
            if isinstance(value, (str, int, float, bool)) or value is None:
                if len(str(value)) <= 2000:
                    out[path] = value
            elif isinstance(value, list) and len(value) <= 30 and all(isinstance(x, (str, int, float, bool)) or x is None for x in value):
                out[path] = value
            else:
                flatten_json(value, path, depth + 1, out)
            if len(out) >= 120:
                break
    elif isinstance(obj, list):
        for i, value in enumerate(obj[:20]):
            flatten_json(value, f"{prefix}[{i}]", depth + 1, out)
            if len(out) >= 120:
                break
    return out


def pdf_text(body: bytes) -> tuple[str, dict[str, Any]]:
    try:
        from pypdf import PdfReader
        reader = PdfReader(BytesIO(body))
        text = "\n".join((page.extract_text() or "") for page in reader.pages[:60])
        meta = {str(k): str(v) for k, v in (reader.metadata or {}).items()}
        return text, {"pages_total": len(reader.pages), "pdf_metadata": meta}
    except Exception as exc:
        return "", {"pdf_parse_error": repr(exc)}


def raw_name(url: str, idx: int, suffix: str) -> str:
    parsed = urllib.parse.urlparse(url)
    stem = slugify(f"{parsed.netloc}-{parsed.path}")[:140] or "page"
    return f"{idx:03d}-{stem}{suffix}"


def build_record(
    url: str,
    final_url: str,
    body: bytes,
    ctype: str,
    seed_ids: list[str],
    profile_key: str,
    idx: int,
    out_dir: Path,
    fetch_meta: dict[str, Any],
) -> tuple[dict[str, Any], list[tuple[str, str]]]:
    record: dict[str, Any] = {
        "schema_version": "slide-survey-institution-harvest-record-v2-small-pdf-only",
        "url": url,
        "final_url": final_url,
        "content_type": ctype,
        "byte_length": len(body),
        "response_content_length": fetch_meta.get("content_length"),
        "response_truncated": bool(fetch_meta.get("truncated")),
        "sha256": hashlib.sha256(body).hexdigest(),
        "fetched_utc": datetime.now(timezone.utc).isoformat(),
        "seed_entry_ids": seed_ids,
        "profile": profile_key,
    }
    discovered: list[tuple[str, str]] = []
    text = ""
    suffix = ".html"

    if "json" in ctype or final_url.lower().endswith((".json", "/manifest")):
        suffix = ".json"
        try:
            data = json.loads(body.decode("utf-8", errors="replace"))
            record["json_top_type"] = type(data).__name__
            record["json_flat"] = flatten_json(data)
            text = json.dumps(data, ensure_ascii=False)
        except Exception as exc:
            record["json_parse_error"] = repr(exc)
            text = body.decode("utf-8", errors="replace")
    elif "pdf" in ctype or final_url.lower().split("?", 1)[0].endswith(".pdf"):
        suffix = ".pdf"
        text, extra = pdf_text(body)
        record.update(extra)
    else:
        raw = body.decode("utf-8", errors="replace")
        record["title"] = extract_title(raw)
        record["meta"] = extract_meta(raw)
        record["jsonld"] = extract_jsonld(raw)
        discovered = extract_links(raw, final_url)
        text = html_to_text(raw)

    record["text_sample"] = text[:16000]
    record["count_candidates"] = count_candidates(text)
    record["identifier_candidates"] = identifier_candidates(text)
    raw_dir = out_dir / "raw"
    raw_dir.mkdir(parents=True, exist_ok=True)
    raw_path = raw_dir / raw_name(final_url, idx, suffix)
    raw_path.write_bytes(body)
    record["raw_path"] = str(raw_path)
    return record, discovered


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--institution-key", required=True)
    parser.add_argument("--profile", required=True)
    parser.add_argument("--mode", choices=["dry-run", "full"], default="full")
    parser.add_argument("--depth", choices=["quick", "balanced", "deep"], default="balanced")
    parser.add_argument("--delay", type=float, default=0.8)
    args = parser.parse_args()

    cfg = json.loads(PROFILES.read_text(encoding="utf-8"))
    defaults = cfg.get("defaults", {})
    profile = cfg["profiles"][args.profile]
    active = load_active()
    rows = load_rows()
    if active:
        rows = [row for row in rows if row.get("entry_id") in active]
    rows = [row for row in rows if slugify(row.get("institution_current", "")) == args.institution_key and row.get("automation_feasibility", "") not in SKIP_AUTOMATION]
    if not rows:
        raise SystemExit(f"No active automatable rows for {args.institution_key}")

    institution = rows[0].get("institution_current", args.institution_key)
    out_dir = OUT_ROOT / args.institution_key
    out_dir.mkdir(parents=True, exist_ok=True)
    seed_to_ids: dict[str, list[str]] = {}
    for row in rows:
        url = normalise_url(row.get("source_url", ""))
        if url:
            seed_to_ids.setdefault(url, []).append(row.get("entry_id", ""))

    factor = {"quick": 0.5, "balanced": 1.0, "deep": 2.0}[args.depth]
    page_budget = max(1, int(profile.get("page_budget", defaults.get("page_budget", 12)) * factor))
    page_budget = min(page_budget, int(defaults.get("absolute_page_cap", 120)))
    max_bytes = int(profile.get("max_bytes", defaults.get("max_bytes", 4000000)))
    max_pdf_bytes = int(profile.get("max_pdf_bytes", defaults.get("max_pdf_bytes", DEFAULT_MAX_PDF_BYTES)))
    allowed_hosts = {h.lower() for h in profile.get("allowed_hosts", [])}
    for seed in seed_to_ids:
        host = urllib.parse.urlparse(seed).hostname
        if host:
            allowed_hosts.add(host.lower())

    plan = {
        "schema_version": "slide-survey-institution-harvest-plan-v2-small-pdf-only",
        "institution_key": args.institution_key,
        "institution": institution,
        "profile": args.profile,
        "mode": args.mode,
        "depth": args.depth,
        "page_budget": page_budget,
        "max_pdf_bytes": max_pdf_bytes,
        "active_entry_ids": [row.get("entry_id") for row in rows],
        "seed_urls": list(seed_to_ids),
        "allowed_hosts": sorted(allowed_hosts),
    }
    (out_dir / "plan.json").write_text(json.dumps(plan, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    if args.mode == "dry-run":
        summary = {**plan, "status": "dry-run", "fetched": 0, "errors": 0, "skipped_large_pdfs": 0}
        (out_dir / "summary.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        return 0

    queue = deque((url, seed_to_ids[url]) for url in seed_to_ids)
    queued = set(seed_to_ids)
    fetched_urls: set[str] = set()
    records: list[dict[str, Any]] = []
    errors: list[dict[str, str]] = []
    skipped_large_pdfs: list[dict[str, Any]] = []

    while queue and len(fetched_urls) < page_budget:
        url, seed_ids = queue.popleft()
        if url in fetched_urls or skip_binary(url) or not host_allowed(url, allowed_hosts):
            continue
        fetched_urls.add(url)
        try:
            body, ctype, final_url, fetch_meta = fetch(url, max_bytes, max_pdf_bytes)
            if fetch_meta.get("skipped_large_pdf"):
                skipped_large_pdfs.append({
                    "url": url,
                    "final_url": final_url,
                    "content_type": ctype,
                    "reason": fetch_meta.get("reason"),
                    "content_length": fetch_meta.get("content_length"),
                    "limit_bytes": fetch_meta.get("limit_bytes"),
                    "seed_entry_ids": seed_ids,
                })
                continue

            record, discovered = build_record(
                url,
                final_url,
                body,
                ctype,
                seed_ids,
                args.profile,
                len(records) + 1,
                out_dir,
                fetch_meta,
            )
            records.append(record)
            for link_url, label in discovered:
                if link_url in queued or link_url in fetched_urls or skip_binary(link_url):
                    continue
                if host_allowed(link_url, allowed_hosts) and relevant_link(link_url, label, profile):
                    queued.add(link_url)
                    queue.append((link_url, seed_ids))
        except urllib.error.HTTPError as exc:
            errors.append({"url": url, "error": f"HTTP {exc.code}"})
        except Exception as exc:  # noqa: BLE001
            errors.append({"url": url, "error": repr(exc)})
        time.sleep(max(args.delay, 0.0))

    with (out_dir / "records.jsonl").open("w", encoding="utf-8") as f:
        for record in records:
            f.write(json.dumps(record, ensure_ascii=False, sort_keys=True) + "\n")

    ctype_counts: dict[str, int] = {}
    for record in records:
        key = record.get("content_type", "") or "unknown"
        ctype_counts[key] = ctype_counts.get(key, 0) + 1
    summary = {
        **plan,
        "status": "complete",
        "fetched": len(records),
        "errors": len(errors),
        "skipped_large_pdfs": len(skipped_large_pdfs),
        "skipped_large_pdf_detail": skipped_large_pdfs,
        "queued_remaining": len(queue),
        "page_budget_reached": len(fetched_urls) >= page_budget,
        "content_type_counts": ctype_counts,
        "errors_detail": errors,
    }
    (out_dir / "summary.json").write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(
        f"{institution}: fetched={len(records)} errors={len(errors)} "
        f"skipped_large_pdfs={len(skipped_large_pdfs)} budget={page_budget}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

#!/usr/bin/env python3
"""Profile JSON schema families without rewriting research data.

The audit groups files by exact top-level key/type signatures and reports repeated
list-item shapes. It is deliberately descriptive: similar field names do not
imply equivalent evidence semantics.
"""

from __future__ import annotations

import hashlib
import json
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCHEMAS = ROOT / "schemas"
DOCS = ROOT / "docs"
PROFILE_OUT = SCHEMAS / "generated" / "schema-family-profile.json"
REPORT_OUT = DOCS / "audits" / "2026-08-11" / "schema-family-audit-2026-08-11.md"


def jtype(value):
    if value is None:
        return "null"
    if isinstance(value, bool):
        return "boolean"
    if isinstance(value, int) and not isinstance(value, bool):
        return "integer"
    if isinstance(value, float):
        return "number"
    if isinstance(value, str):
        return "string"
    if isinstance(value, list):
        return "array"
    if isinstance(value, dict):
        return "object"
    return type(value).__name__


def signature(payload):
    pairs = [(key, jtype(payload[key])) for key in sorted(payload)]
    text = json.dumps(pairs, ensure_ascii=False, separators=(",", ":"))
    return hashlib.sha256(text.encode("utf-8")).hexdigest()[:12], pairs


def list_item_shapes(payload):
    result = {}
    for key, value in payload.items():
        if not isinstance(value, list):
            continue
        type_counts = Counter(jtype(item) for item in value)
        object_shapes = Counter()
        for item in value:
            if isinstance(item, dict):
                object_shapes[tuple(sorted(item.keys()))] += 1
        row = {
            "length": len(value),
            "item_types": dict(sorted(type_counts.items())),
        }
        if object_shapes:
            row["object_key_shapes"] = [
                {"keys": list(keys), "count": count}
                for keys, count in sorted(object_shapes.items(), key=lambda x: (-x[1], x[0]))
            ]
        result[key] = row
    return result


def load_group(name, paths):
    files = []
    field_frequency = Counter()
    field_type_frequency = defaultdict(Counter)
    families = defaultdict(list)
    repeated_list_fields = defaultdict(list)

    for path in sorted(paths):
        payload = json.loads(path.read_text(encoding="utf-8"))
        fid, pairs = signature(payload)
        keys = [key for key, _ in pairs]
        for key, typ in pairs:
            field_frequency[key] += 1
            field_type_frequency[key][typ] += 1
        list_shapes = list_item_shapes(payload)
        for field, shape in list_shapes.items():
            repeated_list_fields[field].append({"path": path.name, **shape})
        row = {
            "path": path.name,
            "signature": fid,
            "top_level": [{"field": key, "type": typ} for key, typ in pairs],
            "list_fields": list_shapes,
        }
        files.append(row)
        families[fid].append(path.name)

    n = len(files)
    exact_families = [
        {"signature": fid, "file_count": len(members), "files": sorted(members)}
        for fid, members in sorted(families.items(), key=lambda x: (-len(x[1]), x[0]))
    ]
    universal = sorted(field for field, count in field_frequency.items() if count == n)
    near_universal = [
        {"field": field, "count": count, "share": round(count / n, 4),
         "types": dict(sorted(field_type_frequency[field].items()))}
        for field, count in sorted(field_frequency.items(), key=lambda x: (-x[1], x[0]))
        if count < n and count / n >= 0.75
    ]
    repeated_lists = {
        field: rows for field, rows in sorted(repeated_list_fields.items()) if len(rows) >= 2
    }
    return {
        "name": name,
        "file_count": n,
        "exact_family_count": len(exact_families),
        "multi_file_family_count": sum(1 for row in exact_families if row["file_count"] > 1),
        "singleton_family_count": sum(1 for row in exact_families if row["file_count"] == 1),
        "universal_top_level_fields": universal,
        "near_universal_top_level_fields": near_universal,
        "field_frequency": [
            {"field": field, "count": count, "share": round(count / n, 4),
             "types": dict(sorted(field_type_frequency[field].items()))}
            for field, count in sorted(field_frequency.items(), key=lambda x: (-x[1], x[0]))
        ],
        "exact_families": exact_families,
        "repeated_list_fields": repeated_lists,
        "files": files,
    }


def format_group(group):
    lines = []
    lines.append(f"### {group['name']}")
    lines.append("")
    lines.append(
        f"- Files: **{group['file_count']}**; exact top-level key/type families: "
        f"**{group['exact_family_count']}**; multi-file families: **{group['multi_file_family_count']}**; "
        f"singleton families: **{group['singleton_family_count']}**."
    )
    universal = group["universal_top_level_fields"]
    lines.append(
        "- Universal top-level fields: "
        + (", ".join(f"`{x}`" for x in universal) if universal else "none")
        + "."
    )
    near = group["near_universal_top_level_fields"]
    if near:
        lines.append(
            "- Near-universal fields (≥75% but <100%): "
            + ", ".join(f"`{r['field']}` {r['count']}/{group['file_count']}" for r in near)
            + "."
        )
    else:
        lines.append("- Near-universal fields (≥75% but <100%): none.")
    lines.append("")
    lines.append("Exact families with more than one file:")
    lines.append("")
    multi = [row for row in group["exact_families"] if row["file_count"] > 1]
    if not multi:
        lines.append("- None. Every file has a distinct top-level key/type signature.")
    else:
        for row in multi:
            lines.append(
                f"- `{row['signature']}` · {row['file_count']} files: "
                + ", ".join(f"`{x}`" for x in row["files"])
            )
    lines.append("")
    lines.append("Most frequent top-level fields:")
    lines.append("")
    for row in group["field_frequency"][:15]:
        types = ", ".join(f"{k}:{v}" for k, v in row["types"].items())
        lines.append(
            f"- `{row['field']}` — {row['count']}/{group['file_count']} "
            f"({row['share']:.0%}); {types}."
        )
    lines.append("")
    repeated = group["repeated_list_fields"]
    lines.append(
        f"Repeated list-field names occurring in at least two files: **{len(repeated)}**. "
        "The profile records their item types and object-key shapes; repeated names are not treated as semantic equivalence."
    )
    lines.append("")
    return lines


def main():
    source_paths = sorted((ROOT / "sources").glob("*-register.json"))
    auction_paths = sorted(
        path for path in (ROOT / "auctions").glob("*.json")
        if path.name != "data-manifest.json"
    )

    sources = load_group("Sources registers", source_paths)
    auctions = load_group("Auction JSON layers", auction_paths)

    profile = {
        "schema_version": "1.0.0",
        "generated_date": "2026-08-11",
        "purpose": (
            "Descriptive structural profile for schema-family audit. It groups exact key/type shapes "
            "without changing or semantically normalizing evidence-bearing data."
        ),
        "guard": (
            "A repeated field name or exact structural signature is only a candidate for shared schema. "
            "Evidence semantics must be reviewed separately before any vocabulary or schema is imposed."
        ),
        "groups": {"sources": sources, "auctions": auctions},
    }
    PROFILE_OUT.parent.mkdir(parents=True, exist_ok=True)
    PROFILE_OUT.write_text(json.dumps(profile, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    lines = [
        "# JSON schema-family audit · 11 August 2026",
        "",
        "This is a structural audit of the current public Sources and Auctions JSON layers. It does not rewrite research records. Exact structural similarity is treated as a candidate for shared tooling, not as proof that two evidence fields mean the same thing.",
        "",
    ]
    lines.extend(format_group(sources))
    lines.extend(format_group(auctions))
    lines.extend([
        "## Interpretation",
        "",
        "1. Do not flatten the Sources registers into one generic table merely because they share envelope fields. Topic registers encode different research questions, guards and evidence units.",
        "2. A shared metadata envelope is safe only for fields that are demonstrably structural (for example schema/version/title/date metadata) and should remain permissive about topic-specific fields.",
        "3. Repeated list names such as `records`, `cases`, `sources`, `next_targets` or similar names require item-level shape and semantic review before `$ref` reuse.",
        "4. Status vocabularies should be extracted only where definitions are identical or explicitly mapped. Similar labels are not to be normalized by spelling alone.",
        "5. The next safe step is to define a minimal non-evidentiary envelope schema plus optional vocabulary registries, while leaving every current data file untouched.",
        "",
        "Machine-readable detail: `../../../schemas/generated/schema-family-profile.json`.",
        "",
    ])
    REPORT_OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {PROFILE_OUT.relative_to(ROOT)}")
    print(f"Wrote {REPORT_OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()

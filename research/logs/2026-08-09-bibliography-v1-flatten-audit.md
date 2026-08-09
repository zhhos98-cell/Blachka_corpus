# Bibliography v1.0 flatten and consistency audit

Date: 2026-08-09

## Result

- Historical base HTML entries: 89
- Historical pass files executed: 32 (bibliography-pass6.js through bibliography-pass37.js)
- Raw combined entries: 267
- Exact normalized citation+year duplicates removed: 1
- Frozen v1.0 entries: 266
- Chronological scope: 1870–2026
- Public scope label: Published literature and historical reception
- Entries lacking link blocks: 0
- Malformed link targets: 0
- Suspicious year values: 0
- Same normalized citation appearing under different years: 0

## Source-layer counts

- 6: 9
- 7: 12
- 8: 9
- 9: 2
- 10: 2
- 11: 3
- 12: 3
- 13: 4
- 14: 4
- 15: 3
- 16: 6
- 17: 6
- 18: 6
- 19: 10
- 20: 7
- 21: 15
- 22: 10
- 23: 10
- 24: 7
- 25: 4
- 26: 5
- 27: 4
- 28: 5
- 29: 3
- 30: 2
- 31: 4
- 32: 5
- 33: 4
- 34: 3
- 35: 1
- 36: 6
- 37: 3
- base: 89

## Exact duplicates removed

- 1. 2016: eva rydlová and ivana kopecká, “a blaschka glass model of an octopus from the national museum in prague,” journal of glass studies 58: 245–252. (kept source base; removed source 15)

## Cross-year duplicate flags

- None.

## Structural changes

- `bibliography/index.html` now contains the full static bibliography and no longer loads numbered pass scripts.
- `bibliography/bibliography-data.json` is the canonical machine-readable v1.0 source.
- Historical numbered pass scripts are retained under `bibliography/legacy/passes/` for provenance and debugging.
- Public process bookkeeping remains suppressed, matching the pass-37 interface state.
- `bibliography-tools.js` and `bibliography-form.js` remain active and unchanged.

## Freeze policy

The bibliography is frozen for this research phase. Future additions should be evidence-led and entered into the canonical dataset rather than restarting a general multilingual sweep.

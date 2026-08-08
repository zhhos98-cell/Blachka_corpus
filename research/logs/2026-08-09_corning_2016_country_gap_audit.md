# 2026-08-09 — Corning 2016 country-baseline gap audit

## Result

The present project tally and Corning's 2016 tally are both numerically **64**, but they are demonstrably different populations. This makes aggregate total-matching unsafe and gives us a more efficient route into the missing baseline: compare country distributions first, then resolve individual holder identities only where the distributions diverge.

Corning's 15 May 2016 article states **174** known historical collections, **64** current collections and **4,747** surviving models. Its published chart, *Blaschka Invertebrate Collections, by Country*, uses dark blue for `Current` and cyan for `Original`. The dark-blue bar heights were read as integer country counts and independently cross-checked because the reconstructed values sum exactly to the article's stated 64 current collections.

The project table currently contains 66 audit rows: 64 secure/secure-recent current holders, Görlitz as one `needs_fresh_recheck` candidate, and Queen's Belfast as one `historical_not_current` tombstone. Queen's is excluded from current arithmetic. Görlitz is kept separate until refreshed.

## Reconstructed 2016 current distribution and present project comparison

| Country | Corning current 2016 | Project secure 2026 | Recheck | Secure delta |
|---|---:|---:|---:|---:|
| Austria | 2 | 4 | 0 | +2 |
| Australia | 3 | 2 | 0 | -1 |
| Belgium | 1 | 1 | 0 | 0 |
| Canada | 1 | 1 | 0 | 0 |
| Czech Republic | 1 | 1 | 0 | 0 |
| Denmark | 0 | 0 | 0 | 0 |
| France | 1 | 1 | 0 | 0 |
| Germany | 9 | 6 | 1 | -3 |
| India | 0 | 0 | 0 | 0 |
| Ireland | 5 | 5 | 0 | 0 |
| Italy | 4 | 5 | 0 | +1 |
| Japan | 0 | 0 | 0 | 0 |
| Latvia | 0 | 0 | 0 | 0 |
| Lithuania | 0 | 0 | 0 | 0 |
| New Zealand | 2 | 3 | 0 | +1 |
| Panama | 0 | 0 | 0 | 0 |
| Poland | 0 | 0 | 0 | 0 |
| Russia | 0 | 0 | 0 | 0 |
| Serbia | 0 | 0 | 0 | 0 |
| Slovenia | 2 | 0 | 0 | -2 |
| Switzerland | 2 | 1 | 0 | -1 |
| Netherlands | 1 | 1 | 0 | 0 |
| Ukraine | 0 | 0 | 0 | 0 |
| United Kingdom | 20 | 19 | 0 | -1 |
| United States | 10 | 12 | 0 | +2 |

The machine-readable version is `research/country_baseline_2016.csv`.

## Interpretation

A negative country delta is immediately useful. Subject to comparable country/node normalization, the project is missing at least one holder from Australia, two from Slovenia, one from Switzerland and one from the United Kingdom. Germany is missing three against secure rows, or two if Görlitz is confirmed. These are finite recovery problems, unlike a global museum sweep.

A positive delta is weaker. Austria +2, Italy +1, New Zealand +1 and United States +2 may contain genuine rediscoveries or post-2016 additions, but they may also reflect collection splits, ownership normalization, institutions already known to Corning under another label, or differences between 2016 and the 2017 68-node baseline. No `baseline_2017_match = no` should be assigned from country arithmetic alone.

Mexico is absent from the 2016 chart's country universe but the current project has two Mexico City endpoints. This is a useful 2016→2017/post-2017 comparison lead, not proof that either node lies outside the 2017 68.

## Searches run in this pass

### Slovenia

English and Slovenian web searches for Blaschka + Slovenia/Ljubljana/natural-history/zoological-museum combinations did not recover institution-grade current-holder proof. Because Corning's chart requires two current Slovenian collections in 2016, the correct next move is to recover the identities from Corning-era source material or map data, then search the named successors. Do not guess likely Ljubljana institutions from country count alone.

### Switzerland

Geneva remains secure. Broad French/German searches did not yet identify the second 2016 Swiss holder. Current Geneva evidence remains strong; the deficit proves the search space is incomplete, not that Geneva should be split.

### Australia

Australian Museum and Museums Victoria remain secure. The 2016 chart requires a third Australian current collection. Earlier project screening of Queensland Museum found an 1885 proposal/catalogue-contact chain but no completed acquisition or surviving object, so Queensland cannot be promoted merely to fill the arithmetic gap. The third 2016 holder needs to be recovered from a named Corning/Reiling-era source or current object evidence.

### Corning map

The interactive map remains live at `dm.cmog.org/blaschka/blaschka_web.html` and its 2017 methodology is independently described as 179 discrete collections / 68 surviving. The rendered web shell does not expose pin metadata to ordinary text extraction. Recovering the underlying map dataset or a preserved pin list would convert the present country deficits into exact institution names and is now a high-value technical target.

## Baseline chronology correction

`survey_baselines.csv` was also expanded with the spring-1995 Meechan state: around **1,400 surviving models in 19 institutions** in the bounded Great Britain/Ireland survey, plus roughly **600 listed as lost or destroyed**. This should be treated as a later survey state, not a simple arithmetic correction to Meechan's 1994 twenty-three-institution discovery population.

## Next target order

1. **Slovenia:** recover both 2016 current-holder identities from Corning/map-era evidence.
2. **Germany:** resolve Görlitz, then identify the remaining baseline deficit against nine 2016 current collections.
3. **Australia:** identify the third 2016 current holder.
4. **Switzerland:** identify the second 2016 current holder.
5. **United Kingdom:** use Meechan inversion, King's/Birkbeck/Bedford leads and Science Museum dispersal only with current-object proof to recover the twentieth 2016 holder.
6. **2016→2017:** identify the four net additions that moved Corning from 64 current collections in 2016 to 68 surviving collections in the 2017 methodology.

## Tally after pass

No new institution was promoted in this pass. The working holder state remains **64 secure/secure-recent current holders + 1 Görlitz recheck + 1 Queen's Belfast historical exclusion**. The gain is methodological: the baseline reconstruction is now bounded by country and the largest missing blocks are explicit.
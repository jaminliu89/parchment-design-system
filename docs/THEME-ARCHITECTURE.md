# Parchment Theme Architecture

## Principle

Themes map semantic values to visual primitives. Components never contain theme-specific values — they consume semantic tokens.

```
Component
   ↓  (reads semantic token)
Semantic layer
   ↓  (theme resolves aliases)
Theme CSS variables
   ↓  (maps to primitive colors)
Primitive color values
```

Component code is theme-agnostic. Theme switch = swap CSS variable set, no component changes.

## Theme contract

Every theme must preserve:
- content hierarchy (ink → ink2 → ink3 → ink4)
- focus visibility (focus ring contrast ≥ 3:1)
- status recognition (good / warn / bad are distinct without relying on position alone)
- surface depth (page < content < raised)
- accessible contrast (ink on surface ≥ 7:1, ink2 on surface ≥ 4.5:1)

## Registered themes

| Theme | Accent signal | Tone | Use case |
|---|---|---|---|
| Parchment (default, 4.0) | `#000000` black | Pure B&W editorial | Creator OS, writing, editorial |
| NovelAgent | `#2E3A52` muted navy | Warm canvas + navy signal | Commercial tools, professional writing OS |

### NovelAgent theme (2026-08-16)

Extracted from the NovelAgent-OS writing prototype. The neutral base (canvas, surface, panel) stays warm and close to Parchment. The differentiator is the accent colour: muted navy (墨蓝) instead of warm brown, giving a more commercial/professional feel while keeping the same editorial warmth.

**Token file**: `parchment.theme-novelagent.tokens.json` (DTCG format)
**CSS runtime**: `dist/theme-novelagent.css` — apply via `<html class="theme-novelagent">` or `.theme-novelagent` on any subtree.

Key palette differences:

| Token | Parchment 4.0 (default) | NovelAgent |
|---|---|---|
| canvas/page | `#FAFAFA` | `#FAF8F3` |
| surface/content | `#FFFFFF` | `#FFFEFC` |
| panel/sidebar | `#F4F4F0` | `#F4F1E9` |
| line/border | `#E0E0E0` | `#E6E1D5` |
| ink/primary | `#1A1A1A` | `#211F1B` |
| signal/accent | `#000000` | `#2E3A52` |
| signalSoft | `#F0F0F0` | `#EDEFF3` |
| success | `#2E7D32` | `#7A9B7E` |
| warning | `#E65100` | `#B0803C` |
| error | `#C62828` | `#9A5E55` |

Typography:
- Parchment 4.0: UI = system sans, editorial = Instrument Serif / Georgia
- NovelAgent: UI = Noto Sans SC, editorial = Noto Serif SC + Source Serif 4

Note: Parchment's 4.0 palette is approximate — the default theme is monochrome editorial (black + white + structural grays), so comparing to NovelAgent's warmer neutral + navy accent highlights the different design intentions.

## Adding a new theme

1. Create `parchment.theme-<name>.tokens.json` — follow DTCG format, reference `parchment.v3.tokens.json` structure
2. Create `dist/theme-<name>.css` — CSS variable overrides matching both canonical (`--p-color-*`) and flat runtime (`--bg`, `--surface`, etc.) names
3. Add to the documentation table above
4. Validate: run `node scripts/generate-css-vars.js parchment.theme-<name>.tokens.json dist/theme-<name>.css` to confirm the DTCG path works

## Forbidden

- Inverted colours mechanically (light-on-dark ≠ dark-on-light)
- Component-specific dark overrides (use semantic tokens, not component hacks)
- Using accent colours to compensate for weak hierarchy
- Mixing theme palettes (no "partially NovelAgent, partially Parchment" — commit to one theme)
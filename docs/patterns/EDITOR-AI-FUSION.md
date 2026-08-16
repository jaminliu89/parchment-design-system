# Parchment Pattern — AI-Assisted Writing Editor (Fusion Reference)

## Purpose

This is an **additive pattern exploration** — a reference for building AI-assisted writing/coding editor surfaces using only Parchment v3.2 tokens and existing patterns (App Shell + Editor + AI Interaction). It does not modify the system.

## Source reference

NovelAgent-OS prototype — a writing operating system interface. Three-column layout: outline panel | writing canvas | AI/evolution panel. Warm neutral palette with ink blue accent.

## Mapping to Parchment patterns

| NovelAgent-OS Component | Parchment Pattern | Token Mapping |
|---|---|---|
| Topbar (brand + stats + actions) | App Shell Header | surface bg, line border, ink text |
| Left panel tabs (目录/设定集/智脑吸收) | Navigation (tab variant) | ink2 idle, ink/signalSoft active |
| Volume/chapter tree | Navigation (tree variant) | raised bg on hover, ink3 secondary, success/warning/line status dots |
| Lore cards | Surface (raised card) | raised bg, r12 border-radius, ink3 description |
| Upload zone | Empty state | dashed line border, surface bg on hover |
| Editor toolbar (场景卡/目标/冲突) | Header (secondary) | chip bg = signalSoft, ink text |
| Prose area | Editor Content Canvas | raised bg, serif font, 640px max-width |
| AI suggestion + flag marks | AI Interaction (suggestion state) | signalSoft underline gradient, warning underline for flags |
| Cursor animation | Editor (active state) | ink blink animation |
| Status bar | App Shell (footer bar) | surface bg, ink3 text |
| Rule chips | Tag/Pill (control variant) | r6 radius, signalSoft bg, ink text |
| Agent console | AI Interaction (status panel) | working = ink pulse, idle = line, done = success |
| Evolution flywheel | AI Interaction (processing state) | SVG ring: line track + ink/warning fill |
| Signal feed | AI Interaction (change report) | ink text, ink labels, signal bolds |
| Focus/immersive mode | App Shell (canvas-only variant) | side panels opacity 0 + pointer-events none |

## Color fusion strategy

Keep Parchment v3.2 tokens EXACTLY as defined. No custom colors.

| Role | Token Used | Notes |
|---|---|---|
| Page background | `canvas` (#F4F1EA) | Left/right panels |
| Content background | `raised` (#FFFDF8) | Editor prose area |
| Surface for panels | `surface` (#FAF8F3) | Topbar |
| Borders | `line` (#D9D4CA) | 1px solid |
| Primary text | `ink` (#181816) | Titles, nav active |
| Secondary text | `ink2` (#3C3B37) | Prose, tree labels |
| Tertiary text | `ink3` (#706D65) | Status, metadata |
| Placeholder | `ink4` (#9A968C) | Muted hints |
| Interactive accent | `signal` (#655D52) | Hover, borders |
| Soft interactive | `signalSoft` (#ECE7DE) | Chip bg, tab active bg |
| Status done | `success` (#50634F) | Green dot |
| Status progress | `warning` (#806544) | Amber dot, flag marks |
| Status error/loss | `error` (#7A5049) | (not used in demo) |

## Interaction contract

- Tab switching: toggle `active` class, show/hide panel display
- Focus/immersive mode: add `focus-mode` class to layout grid — side columns collapse to 0 width
- AI suggestion click: show context hint (pattern: `change preview → accept / reject`)
- Agent state indicators: CSS color-coded LED with pulse animation for "working"

## Responsive behavior

Desktop 3-column (260px + 1fr + 320px) → collapse side panels in focus-mode → tablet/mobile stack via drawer.

## Boundary (what this does NOT change)

- Does NOT modify `parchment.v3.tokens.json`
- Does NOT modify existing pattern docs
- Does NOT modify component specs (BUTTON.md, FORM-CONTROLS.md, etc.)
- Does NOT introduce new tokens or semantic colors
- Does NOT add emoji, gradients, glassmorphism, or glow effects
- Does NOT use blue as accent or brand color
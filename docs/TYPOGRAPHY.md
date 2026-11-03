# Parchment Typography System

## Purpose

Typography is the primary hierarchy mechanism. Components and screens must consume semantic text roles instead of inventing local font sizes.

## Type layers

```
Display
  ↓
Heading
  ↓
Body
  ↓
Label
  ↓
Metadata
  ↓
Mono
```

## Usage families

### Editorial
Used for creative content, scripts, stories, and primary authored material.

### UI
Used for controls, navigation, forms, and application chrome.

### Mono
Used for timestamps, technical information, identifiers, and AI traces.

## Family layers

Font families are named by role, not by typeface. Replacing Inter with another sans must not require touching a single component.

| Token | Role | Never used for |
|---|---|---|
| `typography.family.ui` | controls, navigation, metadata | long-form body |
| `typography.family.display` | headings, cover lines | interface chrome |
| `typography.family.editorial` | Latin-led long-form body | buttons |
| `typography.family.cnBody` | Chinese long-form body | interface chrome |
| `typography.family.mono` | code, timecode, parameters | body copy |

Runtime names are `--p-font-ui`, `--p-font-display`, `--p-font-editorial`, `--p-font-cn-body`, `--p-font-mono`. `--p-sans`, `--p-serif` and `--p-mono` stay as compatibility aliases.

Mono is never remapped to a serif. An editorial site may do that to avoid engineering texture; a creator workspace cannot, because code, timecode and parameter values require fixed advance width.

## Measure

Two line-length tokens, both in `ch`:

- `composition.measure.cn` = `36em` — Chinese body, 34–38 characters per line (one CJK glyph = one em)
- `composition.measure.latin` = `66ch` — Latin body, 60–72 characters per line

Apply as `max-width` on the text block, not on the section. A 720px reading column holding 56 Chinese characters is the most common Chinese editorial failure: the container is correct, the line is too long. Never express a Chinese measure in `ch` — `ch` is the width of `0`, roughly 0.6em, so `36ch` silently becomes a 60-character line.

Utility classes: `.p-measure-cn`, `.p-measure-latin`, `.p-body-cn`, `.p-display`.

## Font delivery

Chinese webfonts are the largest single payload item in a Chinese product. Never ship one full serif file.

- Subset by `unicode-range` and ship many slices; a healthy slice is 9–20 KB.
- Self-host. Google Fonts gives no slice-level control and adds a third-party domain.
- `font-display: swap`, and preload only the slices used above the fold.
- Record per-page font bytes in the PR against the payload gate.

## Rules

- Do not use color alone to create hierarchy.
- Do not create one-off font sizes in components.
- Weight, spacing, and grouping are part of hierarchy.
- Dense workspaces must preserve readability through rhythm, not decoration.

## Required states

Typography must define:

- truncation;
- multiline behavior;
- overflow handling;
- compact density;
- responsive scaling.

## Acceptance

A text treatment is compliant when its role can be traced to the typography token contract.

# Parchment Design System — Token Contract

**Status:** Canonical foundation

## Purpose

Tokens are the only source for visual decisions. Components and product screens must consume semantic tokens instead of creating local values.

## Token layers

```
Primitive values
      ↓
Semantic meaning
      ↓
Component usage
```

## Current foundation

The canonical token file is:

`parchment.v3.tokens.json`

It currently defines:

- neutral editorial color primitives;
- semantic page/content/text/border roles;
- typography families;
- shape values;
- icon geometry;
- spacing rhythm;
- density options;
- accessibility values.

## Editorial depth tokens

Four token groups separate an editorial surface from a generic SaaS card layout. All are semantic; components consume them, never raw values.

### Inverse band

`inverse` / `inverseText` / `inverseTextSecondary` / `inverseBorder`

A full-bleed band that cuts the page: statement section, cover block, subscribe strip. Under `[data-theme="dark"]` the band flips to near-white, so a band always holds the opposite polarity of the surrounding page — it never means "dark mode".

```
background: var(--p-band)
text:       var(--p-band-ink)
secondary:  var(--p-band-ink-2)
hairline:   var(--p-band-line)
```

Controls inside a band must restate their own border and text colour. `parchment.css` does this for `.p-band` already. Page-level ink on an inverse surface is invisible — that single failure is why this token group exists.

### Ink rule

`borderStrong` (`--p-line-strong`)

One ink-weight rule for section boundaries, table heads and block closings. `border` and `borderSubtle` stay hairlines. Never use `borderStrong` for an ordinary divider: if every line is strong, none of them is.

### Measure

`composition.measure.cn` = `36em`, `composition.measure.latin` = `66ch`

Line length is a typographic constraint, not a container width. `composition.content.reading` is how wide the reading column may be; measure is how many characters a line may hold.

`cn` is `36em`, not `36ch`, because one CJK glyph occupies exactly one em — `ch` measures the width of `0`, which is about 0.6em in a serif, so a `ch`-based Chinese measure silently produces a 60-character line. `latin` stays in `ch` at 66, because Latin advance width really is close to the digit width. Set measure first, then let the container be its ceiling.

### Editorial radius

`shape.editorial` = `2px`

Near-square surface for reading blocks, covers, quote panels and image plates. It does not replace `control` (8px) or `surface` (12px). Controls keep rounded geometry: a 2px button reads as a rendering bug, not as restraint.

## Rules

### Colors

Use semantic names in components.

Allowed:

- `text`
- `textSecondary`
- `border`
- `interactive`
- `signal`
- status meanings

Avoid:

- raw hex values inside components;
- feature-specific colors;
- decorative gradients without product purpose.

### Spacing

Use the spacing scale. Do not invent arbitrary gaps unless a documented exception exists.

### Shape

Controls, surfaces, and pills have different purposes. Do not convert every element into a rounded container.

### Icons

Icons follow one geometry contract:

- 20px grid;
- defined size steps;
- consistent stroke/cap/join;
- semantic naming.

## Next evolution

The token system will expand with:

- explicit dark mode mappings;
- component semantic aliases;
- motion tokens;
- elevation tokens;
- state tokens;
- generated platform outputs.

## Acceptance

A component is token-compliant when all visual decisions can be traced back to this contract.

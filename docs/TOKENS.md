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

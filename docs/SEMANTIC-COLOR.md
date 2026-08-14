# Parchment Semantic Color System

## Purpose

Semantic colors describe meaning, not appearance. Components must ask for a role (`text`, `surface`, `interactive`, `danger`) instead of choosing a pigment.

## Color layers

```
Primitive palette
      ↓
Semantic roles
      ↓
Component states
      ↓
Product patterns
```

## Core roles

### Surface

- page: application canvas
- surface: primary content containers
- raised: elevated content and overlays
- border: separation without visual noise

### Content

- text: primary readable content
- textSecondary: supporting information
- textTertiary: metadata
- textPlaceholder: temporary hints

### Interaction

- interactive: actionable controls
- interactiveHover: hover emphasis
- focus: keyboard-visible focus treatment
- selected: active selection state

### Status

Status colors communicate meaning only:

- success
- warning
- error
- informational signal

They must never become decorative brand colors.

## Component rule

A button does not use a hex value. It uses:

```
button.primary.background
button.primary.label
button.primary.hover
button.primary.focus
```

which resolve through semantic tokens.

## Dark mode contract

Dark mode is a semantic remapping, not a simple color inversion. Each role must preserve:

- hierarchy
- readability
- contrast
- state recognition
- material depth

## Acceptance

The color system is complete when components can switch themes without rewriting component styles.

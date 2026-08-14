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

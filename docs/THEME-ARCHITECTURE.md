# Parchment Theme Architecture

## Principle

Themes map semantic meaning to values. Components do not contain separate light/dark implementations.

```
Component
   ↓
Semantic token
   ↓
Theme value
   ↓
Primitive value
```

## Requirements

Every theme must preserve:

- content hierarchy;
- focus visibility;
- status recognition;
- surface depth;
- accessible contrast.

## Current scope

The existing token foundation supports the neutral editorial direction. This document defines the contract for completing light and dark mappings.

## Forbidden

- inverted colors mechanically;
- creating component-specific dark overrides;
- using accent colors to compensate for weak hierarchy.

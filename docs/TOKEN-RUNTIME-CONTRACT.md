# Parchment UI OS v2 — Token Runtime Contract

## Purpose

Convert static design tokens into a runtime foundation consumed by components, themes and Creator OS.

## Runtime Pipeline

Token Source
↓
Token Resolver
↓
CSS Variable Generator
↓
Theme Layer
↓
Component Runtime

## Contract

Each token must provide:

- stable name
- semantic meaning
- fallback value
- theme override capability
- component consumption rule

## Token Layers

### Primitive
Raw values:

- colors
- spacing
- typography
- shape
- density

### Semantic
Product meaning:

- page
- content
- text
- border
- interactive
- signal

### Component
Component-specific mapping.

## Runtime API Direction

```ts
getToken(name)
setTheme(theme)
resolveToken(component, state)
```

## Migration Rule

Existing Parchment tokens remain compatible. New UI OS layers must consume semantic tokens first.

# Parchment 4.0 — Architecture Contract

**Status:** Canonical layer contract / runtime implementation in progress

## Architecture objective

Parchment is built as a layered design system. Each layer has one responsibility and can only depend on layers below it.

```
Design principles
        ↓
Design tokens
        ↓
Primitives
        ↓
Components
        ↓
Patterns
        ↓
Role experiences
        ↓
Product screens
        ↓
Quality gates
```

## Dependency rules

### Tokens
Own visual decisions:
- color semantics
- typography
- spacing
- sizing
- radius
- borders
- elevation
- motion
- accessibility values

Components must consume tokens, never invent raw values.

### Primitives
Small reusable building blocks:
- icon wrapper
- text styles
- surface
- focus treatment
- layout primitives

Primitives must not know product context.

### Components
Reusable interaction units:
- button
- input
- dialog
- navigation item
- card
- feedback components

Every component owns anatomy, states, accessibility behavior and variants.

### Patterns
Workflow-level compositions:
- editor
- transcript
- asset library
- AI assistant
- workspace shell

Patterns combine components but do not redefine component behavior.

### Role experiences
Optimized views for:
- Creator
- Editor
- Director
- AI Assistant
- Reviewer
- Viewer
- Admin

Roles change priorities, not the underlying visual language.

### Quality gates
Every release passes:
- token audit
- component state audit
- accessibility audit
- responsive audit
- visual regression

## Ownership model

Product owns:
- user problems
- priorities
- acceptance criteria

Design system owns:
- visual contracts
- interaction contracts
- component governance

Engineering owns:
- implementation quality
- testing
- performance
- maintainability

No layer may bypass another layer to create a local exception without documentation.

## Source of truth

Execution order is controlled by `docs/MASTER-TASK.md`.
Product requirements are controlled by `docs/PRD.md`.
Machine-readable visual decisions are controlled by `parchment.v3.tokens.json` until the 4.0 migration renames the artifact without breaking consumers.
This architecture defines how those requirements become an implementable system.

## Version boundary

**Parchment 4.0** names the current Black & White Editorial design language. **UI OS v2** names the unfinished runtime architecture program; it is not a released design-system version. Historical v1/v2/v3 documents are migration evidence only and cannot override the canonical chain.

## Consumer contract

Products consume Parchment in this order: generated tokens, accessible primitives, workflow components, then product patterns. Local product CSS may position or compose those layers, but may not introduce a competing palette, component state model or icon family.

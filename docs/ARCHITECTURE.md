# Parchment Design System — Architecture Baseline

**Status:** Canonical architecture v1.0

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
This architecture defines how those requirements become an implementable system.

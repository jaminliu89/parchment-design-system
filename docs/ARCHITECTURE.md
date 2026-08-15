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

The canonical runtime also owns composition, motion and elevation values. The shell baseline is a 64px header, 240px navigation rail, 320px contextual inspector, 24px workspace gutter, 720px reading measure and 1440px maximum content width. These are defaults with responsive collapse rules, not reasons to force overflow on smaller screens.

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

Motion communicates intent: micro feedback, component transitions, container changes and page transitions use progressively longer tokenized durations. Default motion never bounces. Under `prefers-reduced-motion`, spatial transforms are removed while essential state changes remain perceivable.

### Patterns
Workflow-level compositions:
- editor
- transcript
- asset library
- AI assistant
- workspace shell

Patterns combine components but do not redefine component behavior.

AI patterns represent suggestion, processing, generated, applied, diff, conflict, attention, confidence and citation as behavior and state, never as a decorative color family. Suggestions remain subordinate until accepted; generated changes require a reversible representation; diff and conflict cannot rely on color alone.

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

## Runtime boundary

The token runtime resolves semantic values and generates platform artifacts. The UI runtime owns layout calculation, responsive behavior and interaction state. Accessible primitives own semantic HTML, keyboard operation, focus movement, dismissal and announcements. Components expose API, variants and states; patterns compose them; product applications provide domain data and workflows.

The runtime is headless at the behavior boundary: a product may select React or another supported renderer, but it may not fork token semantics or accessibility behavior. Light and dark are supported appearance modes; “Creator” and “Enterprise” are product configurations, not alternate visual themes.

## Source of truth

Execution order is controlled by `docs/MASTER-TASK.md`.
Product requirements are controlled by `docs/PRD.md`.
Machine-readable visual decisions are controlled by `parchment.v3.tokens.json` until the 4.0 migration renames the artifact without breaking consumers.
This architecture defines how those requirements become an implementable system.

## Version boundary

**Parchment 4.0** names the current Black & White Editorial design language. **UI OS v2** names the unfinished runtime architecture program; it is not a released design-system version. Historical v1/v2/v3 documents are migration evidence only and cannot override the canonical chain.

## Consumer contract

Products consume Parchment in this order: generated tokens, accessible primitives, workflow components, then product patterns. Local product CSS may position or compose those layers, but may not introduce a competing palette, component state model or icon family.

`parchment.css` currently implements the visual primitive layer only. Framework components remain responsible for semantic roles, controlled state, focus movement, dismissal, keyboard navigation and announcements. A CSS selector existing is not evidence that the corresponding accessible component is complete.

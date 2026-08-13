# Parchment Design System 3.0

> **Quiet Intelligence — Quiet UI / Strong Content / Precise Interaction**

Parchment 3.0 is a redesign of the design-system architecture for creator tools, AI workspaces, editors, and content products. The goal is not to accumulate components, but to make visual quality reproducible through a coherent system of **Visual DNA → Tokens → Components → Composition → AI Patterns → Quality Gates**.

## Status

**v3.0 rebuild in progress** on branch `parchment-3.0-rebuild`.

The existing v2.1 files remain available as the legacy reference while v3 is rebuilt from first principles.

## Architecture

```text
Visual DNA
    ↓
Primitive Tokens
    ↓
Semantic Tokens
    ↓
State Tokens
    ↓
Component Tokens
    ↓
Composition Tokens
    ↓
Components + Patterns
    ↓
AI-native Patterns
    ↓
Quality Gates
```

## v3.0 documents

- `PARCHMENT-3.0-ARCHITECTURE.md` — architecture, visual DNA, shape, elevation, motion, composition and AI principles
- `parchment.v3.tokens.json` — v3 foundation / semantic / state / composition / AI tokens
- `Parchment-DESIGN.md` — v2.1 legacy specification during migration
- `parchment.tokens.json` — v2.1 legacy token export during migration
- `parchment-preview.html` — v2.1 legacy preview; v3 preview migration follows the foundation pass

## Design principles

1. **Quiet, not empty** — visual restraint creates hierarchy rather than removing information.
2. **Content leads** — chrome stays quiet so the creator's work becomes the visual anchor.
3. **Shape has semantics** — pill, soft rectangle, rectangle, circle and text actions communicate different interaction levels.
4. **Elevation is semantic** — borders, surfaces and shadows express layer relationships; shadows are not banned, decoration is.
5. **Optical rhythm over mathematical sameness** — spacing and typography are tuned for perceived balance, including CJK/Latin differences.
6. **AI is a state, not a color** — generated, suggesting, processing, diff and conflict states must feel native to Parchment rather than becoming generic 'AI purple'.
7. **Composition is first-class** — a design system must define how components form workspaces, editors and reading surfaces.
8. **Every rule must be implementable and testable.**

## Migration rule

v2.1 is frozen as legacy. New components and product work should target v3 tokens and principles. Existing v2 files are migrated incrementally instead of being rewritten blindly.

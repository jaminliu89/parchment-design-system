# Parchment Design System — Engineering Quality Contract

**Status:** v1.0 baseline

## Purpose

Define the engineering rules that protect the design system from visual drift, implementation shortcuts, and undocumented exceptions.

## Implementation hierarchy

```text
Tokens
  ↓
Primitives
  ↓
Components
  ↓
Patterns
  ↓
Product surfaces
```

A lower layer cannot depend on a higher layer. Product code consumes the system; it does not redefine it.

## Naming rules

- Use semantic names, not visual descriptions.
- Prefer `surface-primary` over `white-card`.
- Prefer `action-primary` over `blue-button`.
- Component names describe purpose, not implementation.

## Styling rules

- No hard-coded colors in components.
- No arbitrary spacing values when a token exists.
- No local shadow/radius systems.
- No new icon family without design approval.
- Exceptions require documentation.

## Component requirements

Every component must define:

- anatomy;
- variants;
- default behavior;
- hover;
- active;
- focus;
- disabled;
- loading where applicable;
- error/success where applicable;
- responsive behavior;
- accessibility behavior;
- usage guidance.

## Validation gates

Before completion:

1. Type/build validation where available.
2. Component behavior validation.
3. Visual comparison against design contract.
4. Accessibility review.
5. Documentation update.

## Accessibility baseline

Components must support:

- keyboard interaction;
- visible focus;
- semantic labels;
- sufficient contrast;
- reduced motion preferences;
- appropriate touch targets.

## Change governance

A new visual pattern must first prove that existing primitives and components cannot solve the problem.

Avoid one-off UI. Every repeated pattern should become part of the system.

## Definition of done

Engineering work is complete only when implementation, verification, and documentation agree.

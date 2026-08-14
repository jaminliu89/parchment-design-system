# Parchment Pattern — AI Interaction

## Purpose

AI is a workflow capability, not a decorative product theme.

## Core model

```
Intent
 ↓
Processing
 ↓
Suggestion / Generation
 ↓
Review
 ↓
Apply / Reject
 ↓
Revision
```

## Required states

Every AI action should define:

- idle
- preparing
- processing
- generated
- applied
- rejected
- failed
- retry

## Interaction rules

- Generated work must be reversible.
- Changes should be inspectable before applying.
- AI output must not visually overpower user content.
- Avoid permanent AI gradients and unrelated accent colors.

## Diff model

For editing workflows:

```
Original
 ↓
Change Preview
 ↓
Accept / Reject
```

## Governance

AI surfaces consume existing tokens and components. They do not create a separate visual language.

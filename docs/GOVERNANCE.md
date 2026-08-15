# Parchment 4.0 — Governance and Maturity

## Maturity levels

1. **Exploratory** — product-local prototype; no compatibility promise.
2. **Candidate** — documented API and state matrix; accessibility review pending.
3. **Supported** — token-only visuals, interaction tests, responsive evidence and migration notes.
4. **Stable** — adopted by at least two workflows with visual regression and compatibility policy.
5. **Core** — system-critical; changes require consumer impact review and a deprecation window.

Only Supported, Stable and Core components belong in the public registry. CSS primitive coverage does not raise maturity by itself.

## Change process

Every addition starts with a user problem and reuse evidence. The proposal identifies the owning layer, API, tokens, accessibility behavior, responsive states and consumers. Review rejects local palette, radius, icon or state-model forks.

Breaking changes require a migration path, named affected consumers and a deprecation period. Deprecated capabilities first enter `CONSOLIDATE_THEN_DELETE`; unique behavior and data migrate, references reach zero, runtime and E2E checks pass, then the registry may promote them to `DELETE_READY`. Physical deletion is recorded by commit.

## Compatibility

Patch releases may fix behavior without changing the public contract. Minor releases may add backward-compatible variants. Major releases may remove a deprecated contract after migration evidence exists. Token renames are breaking when generated variable names change.

## Acceptance evidence

A release records:

- token and generated-artifact drift checks;
- contrast and non-color state checks;
- keyboard, focus, dismissal and announcement tests;
- responsive evidence at phone, tablet and desktop widths;
- reduced-motion behavior;
- component state matrix and visual regression;
- consumer runtime smoke/E2E results.

Documentation claims never substitute for executable evidence.

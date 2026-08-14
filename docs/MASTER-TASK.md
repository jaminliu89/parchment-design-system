# Parchment Design System — Master Task

## Current execution pointer

**Next eligible task: `P1-001 Canonical token source`.**

### P0-004 Engineering quality contract
**Status:** DONE
**Commit:** `c976373c8cdf436cb4158928b5f439397b37fa2f`

Define implementation conventions, naming, file structure, testing expectations, accessibility gates, visual regression strategy, and contribution rules.

## Execution protocol

For every `继续` or `开始` request:

1. Read this Master Task.
2. Select the highest-priority unfinished task whose dependencies are satisfied.
3. Inspect the real repository implementation before changing it.
4. Implement the smallest coherent change that closes that task.
5. Run applicable validation.
6. Update relevant documentation.
7. Commit focused changes.
8. Verify the commit.
9. Only then mark the task DONE.

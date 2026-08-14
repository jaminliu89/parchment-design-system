# Parchment Design System — Master Task

## Current execution pointer

**Next eligible task: `P1-004 Shape / Elevation / Motion system`.**

### P1-001 Canonical token source
**Status:** DONE
**Commit:** `8ea33a4ffd37853580805e0d8fd84b4662bb40a8`

### P1-002 Semantic color system
**Status:** DONE
**Commit:** `e468565e128eec934b53d637a2a8d57401ad0772`

### P1-003 Typography system
**Status:** DONE
**Commit:** `4207eb92d4af4789df6a39255e4f8faccc6e66ee`

Completed:
- typography contract;
- editorial/UI/mono usage model;
- hierarchy and truncation rules.

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

# Parchment Design System — Master Task

## Current execution pointer

**Next eligible task: `P0-004 Engineering quality contract`.**

### P0-003 Architecture baseline
**Status:** DONE
**Commit:** `26d11b868cf184bb31161385d954c46afa8698ea`

Create the canonical architecture for tokens → primitives → components → patterns → role surfaces → QA, including ownership and dependency direction.

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

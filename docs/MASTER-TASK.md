# Parchment Design System — Master Task

> Product ownership and execution contract. This file is the single execution queue for the design system.

## Mission

Turn Parchment into a production-grade, premium, restrained design system for creator tools and AI workspaces: coherent visual language, complete component coverage, explicit interaction states, accessible behavior, role-based UX, responsive behavior, and auditable implementation.

## Non-goals

- Do not chase isolated visual trends.
- Do not add features because they look impressive if they do not close a design-system gap.
- Do not reintroduce retired blue SaaS styling, mixed icon families, decorative icon containers, or uncontrolled pills.
- Do not mark a task Done without inspecting the real implementation and performing the applicable verification.

## Execution protocol

For every `继续` or `开始` request:

1. Read this Master Task.
2. Select the highest-priority unfinished task whose dependencies are satisfied.
3. Inspect the real repository implementation before changing it.
4. Implement the smallest coherent change that closes that task.
5. Run the applicable validation: syntax, structural, visual, accessibility, or build checks.
6. Update the relevant PRD, architecture, QA, ADR, engineering memory, or component documentation when the implementation changes their truth.
7. Commit the change with a focused message.
8. Re-read the changed files and verify the commit.
9. Only then mark the task `DONE` and move to the next eligible task.

## Priority and status

- `P0` = foundation / blocker
- `P1` = core system quality
- `P2` = coverage / refinement
- `P3` = optional polish
- `TODO` = not started
- `DOING` = currently being implemented
- `BLOCKED` = dependency or external access required
- `DONE` = implemented + verified + documented + committed

## Definition of Done

A task is `DONE` only if:

- the actual code/file has been inspected;
- the intended behavior is implemented;
- applicable automated/manual checks pass;
- the design contract is documented;
- no known regression is introduced;
- the change is committed;
- the task record is updated with the commit reference.

---

## Phase 0 — Product control plane

### P0-001 Master execution contract
**Status:** DONE

Create this Master Task and establish the non-drifting execution protocol.

**Acceptance:** this document exists and defines priority, dependencies, DoD, and execution rules.

### P0-002 Product requirements baseline
**Status:** DONE
**Commit:** `83058ec99aa8b90bfa71d2064e889f1eb3dedb9f`

Create a canonical PRD defining users, jobs-to-be-done, design principles, product surfaces, quality bar, and explicit non-goals.

### P0-003 Architecture baseline
**Status:** TODO
**Depends on:** P0-001

Create the canonical architecture for tokens → primitives → components → patterns → role surfaces → QA, including ownership and dependency direction.

### P0-004 Engineering quality contract
**Status:** TODO
**Depends on:** P0-003

Define implementation conventions, naming, file structure, testing expectations, accessibility gates, visual regression strategy, and contribution rules.

---

## Phase 1 — Foundations

### P1-001 Canonical token source
**Status:** TODO
**Depends on:** P0-002, P0-003

Consolidate duplicate token sources into one canonical token contract. Cover color, typography, spacing, sizing, density, radius, border, elevation, motion, focus, and semantic states.

### P1-002 Semantic color system
**Status:** TODO
**Depends on:** P1-001

Complete light/dark semantic colors without blue branding; ensure status colors are supplementary and accessible.

### P1-003 Typography system
**Status:** TODO
**Depends on:** P1-001

Define type scale, weights, line heights, tracking, editorial/display usage, UI text, metadata, code, truncation, and responsive rules.

### P1-004 Shape / elevation / motion system
**Status:** TODO
**Depends on:** P1-001

Unify radii, borders, shadows, transitions, focus rings, reduced motion, and density.

### P1-005 Iconography system
**Status:** TODO
**Depends on:** P1-001

Complete the one-family icon contract: grid, stroke, optical sizing, naming, semantics, states, and usage rules.

---

## Phase 2 — Core components

### P1-101 Button family
**Status:** TODO
**Depends on:** P1-001, P1-004

Primary, secondary, tertiary, destructive, icon-only, loading, disabled, focus, hover, active, compact and touch-safe variants.

### P1-102 Form controls
**Status:** TODO
**Depends on:** P1-101

Input, textarea, select, checkbox, radio, switch, slider and validation states.

### P1-103 Navigation controls
**Status:** TODO
**Depends on:** P1-005

Tabs, segmented controls, menus, breadcrumbs, command controls and navigation items.

### P1-104 Feedback primitives
**Status:** TODO
**Depends on:** P1-002, P1-004

Tooltip, popover, toast, alert, progress, spinner, skeleton, empty, loading and error states.

### P1-105 Surfaces and data display
**Status:** TODO
**Depends on:** P1-001

Card, panel, table, list, divider, avatar, badge/status and contextual action patterns.

### P1-106 Overlay system
**Status:** TODO
**Depends on:** P1-103, P1-104

Dialog, drawer, modal, popover layering, focus trap/return, escape behavior and mobile presentation.

---

## Phase 3 — Product patterns

### P1-201 App shell pattern
**Status:** TODO

Navigation, header, toolbar, content canvas, inspector and responsive shell.

### P1-202 Editor pattern
**Status:** TODO

Reading width, editing states, selection, metadata, actions and empty/error behavior.

### P1-203 Transcript / voice pattern
**Status:** TODO

Canonical `Speaker → Role → Spoken content → Time` hierarchy; no floating label soup; responsive collapse rules.

### P1-204 AI interaction pattern
**Status:** TODO

Suggestion, processing, generated, applied, diff, conflict and reversible states without permanent AI color theming.

### P1-205 Asset / library pattern
**Status:** TODO

Grid/list, filtering, selection, bulk actions, metadata and empty/loading/error states.

---

## Phase 4 — Role and screen audit

### P1-301 Role laboratory
**Status:** TODO

Audit Creator, Editor, Director, AI Assistant, Reviewer, Viewer and Admin against the same system.

### P1-302 Screen matrix
**Status:** TODO

Audit Dashboard, Project, Script, Transcript, Storyboard, Timeline, Assets, AI Panel and Settings.

### P1-303 Responsive audit
**Status:** TODO

Desktop, tablet and mobile behavior for every core pattern; no horizontal overflow; touch targets preserved.

### P1-304 Dark-mode audit
**Status:** TODO

Material inversion, contrast, hierarchy, borders, semantic signals and reduced visual noise.

---

## Phase 5 — Quality and release

### P1-401 Accessibility gate
**Status:** TODO

Keyboard navigation, focus visibility, semantics, target sizes, contrast, reduced motion and screen-reader naming.

### P1-402 Visual regression gate
**Status:** TODO

Create deterministic visual fixtures for core components and role screens.

### P1-403 Documentation system
**Status:** TODO

Component anatomy, usage, variants, states, Do/Don't, accessibility, content guidance and migration notes.

### P1-404 Final system audit
**Status:** TODO

Run the complete role/component/screen QA matrix and resolve every blocker before release.

### P1-405 Release baseline
**Status:** TODO

Version the completed system, update README and changelog, freeze the visual contract, and publish the final definition of done.

---

## Current execution pointer

**Next eligible task: `P0-003 Architecture baseline`.**

Do not skip ahead to visual polish while a higher-priority foundation task remains unfinished.

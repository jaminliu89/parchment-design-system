# Parchment Pattern Contracts

Patterns are reusable product structures built from Parchment components. They are not oversized components and they do not own product-specific business logic.

## Admission rule

A Pattern enters the official Parchment layer when its semantic structure survives multiple realistic workflow contexts without branching on one product's domain model. Patterns may define layout regions, state slots, responsive collapse rules, and composition constraints. They must not introduce a private palette, new interaction semantics that belong in a component, or product-local data fetching/state machines.

## Contract requirements

Every Pattern must document:

- semantic purpose and the problem it solves;
- named regions/slots and which are optional;
- responsive transformation at workspace, tablet, and narrow widths;
- accessibility ownership versus delegated component behavior;
- empty/loading/error implications when applicable;
- allowed composition and anti-patterns;
- maturity evidence from real consumer workflows before `stable`.

## First official Pattern set

### AppShell

Use for application-level navigation + primary content + optional inspector. Do not use inside another page as a generic three-column grid.

### PageHeader

Use for page identity, context/breadcrumb, description, and page-level actions. Do not use as a card header or section header.

### Section

Use to group a meaningful page region with heading/description/actions. Avoid deeply nested Sections; use components or plain semantic HTML for local grouping.

### ListItem

Use for repeated navigable/actionable rows such as files, search results, assets, and project entries. Domain-specific fields belong in `meta`/`actions`, not in new forks.

### EmptyState

Use when a meaningful collection/workflow has no content or no result. It must explain the state and provide a useful next action when one exists; do not use it as decorative whitespace.

### FormField

Use as the semantic composition boundary around a control, label/help/error messaging. The actual control retains its own accessibility and interaction contract.

### EditorShell

Use for editing workspaces with optional navigator, toolbar, central canvas, inspector, and status region. It owns workspace composition, not editor document state.

### InspectorLayout

Use when a primary surface is paired with a persistent contextual inspector. For transient help/details, prefer Dialog/Popover/Sheet rather than forcing an inspector layout.

### AssetLibrary

Use for creator asset/document collections combining filters, view controls, optional taxonomy/sidebar, content view, and empty state. It does not define asset domain schemas.

### AIWorkspace

Use for AI-assisted workflows where context, AI conversation/output, composer, status, and optional evidence/inspector must coexist. AI state must be represented by Parchment AI-native components rather than decorative AI theming.

## Maturity

Patterns start `experimental` or `alpha`. A Pattern cannot become `stable` from a showcase alone. It requires evidence from multiple real workflows, responsive validation, keyboard/accessibility review, and visual-regression coverage.

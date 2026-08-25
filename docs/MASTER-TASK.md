# Parchment Design System — Master Task

## Current execution pointer

**P4 — Reference validation / release-candidate hardening. IN PROGRESS.**

## Product/version contract

- Product: **Parchment**
- Current design language: **Parchment 4.0 · Black & White Editorial**
- Runtime architecture program: **Component Runtime 1.0 / UI OS v2 foundation**
- Current release status: **67 registry items across Core, Workspace, AI-native runtime and 16 official Patterns; package/showcase/test harness implemented**
- Reference consumers such as Creator OS validate Parchment; they do not own or fork Parchment component contracts.

## P0 — Canonical cleanup

- [x] Canonical 4.0 language, token and document alignment
- [x] Legacy source retirement and migration registry
- [x] Broken-reference cleanup and canonical source gates

## P1 — Token runtime

- [x] Validate DTCG token hierarchy and reference resolution
- [x] Generate committed CSS variables artifact
- [x] Add light/dark theme token contract
- [x] Migrate typography scale, composition, motion and neutral elevation tokens
- [ ] Add automated drift and contrast gates

## P2 — Component Runtime 1.0

### Foundation

- [x] CSS primitives + React/TypeScript runtime boundary
- [x] Radix headless adapter for stateful widgets
- [x] Runtime/workspace/AI/pattern CSS layers consuming tokens
- [x] Raw-hex and glyph-icon audit gates
- [x] Strict TypeScript contract
- [x] Complete shadcn-compatible registry + integrity gate
- [x] Evidence-based maturity inventory
- [x] Single-page showcase harness
- [x] Initial automated state/keyboard/accessibility smoke tests
- [x] ESM/CJS/declaration package build pipeline

### Runtime families

- [x] Golden 6 contract validation set
- [x] Core 30 baseline
- [x] Workspace foundation: SidebarNav, Toolbar, CommandPalette, TreeView/FileTree, SplitPane, ResizablePanel, PropertyPanel, ViewSwitcher, DataTable, Combobox
- [x] AI-native baseline: Status, Thinking, Message, Artifact, ToolCall, Approval, Diff, Conflict, Citation, Confidence, Error
- [ ] Remaining optional Core expansion: Toggle family, Slider, Number/Password input, TagsInput, Stepper, NavigationMenu, ContextMenu, AlertDialog, Drawer/Sheet, Toast, Stat, Timeline, CodeBlock, InlineEditor
- [ ] AIStreaming specialized controls
- [ ] AIRegenerate action contract

Optional expansion does not block Runtime 1.0 release unless reference validation proves a hard gap.

## P3 — Pattern Engine

Canonical contract: `docs/PATTERN-CONTRACTS.md`.

Implemented and registry-published:

- [x] AppShell
- [x] PageHeader
- [x] Section
- [x] ListItem
- [x] FormField
- [x] EmptyState
- [x] EditorShell
- [x] InspectorLayout
- [x] AssetLibrary
- [x] AIWorkspace
- [x] PropertyList
- [x] Loading/Error/Retry (`AsyncState`)
- [x] AI State Bar
- [x] SettingsSection
- [x] Search/Command Workspace
- [x] Review/Approval Workspace

Patterns remain alpha/experimental until multi-workflow reference and visual evidence are complete.

## P4 — Reference validation

- [ ] Validate against Creator OS as first real consumer without moving Parchment ownership into Creator OS
- [ ] Validate against at least one second creator/workspace workflow or product
- [ ] Record missing component/pattern evidence back into Parchment
- [ ] Responsive baselines at phone/tablet/desktop widths
- [ ] Automated visual regression baseline
- [ ] Expand keyboard/accessibility tests for interaction-rich experimental components

## P5 — Release

- [x] Registry/install guide
- [x] Migration guide
- [x] Component + Pattern showcase harness
- [x] Package exports for root/components/patterns/styles/tokens/registry
- [x] Release checklist aligned with evidence policy
- [ ] All required CI gates green on release-candidate commit
- [ ] Reference validation evidence complete
- [ ] Parchment Component Runtime 1.0 release/tag

## Governance rules

1. Parchment is the source of truth for tokens, interaction contracts, reusable components and cross-product patterns.
2. Products may compose Parchment but must not fork palette, state models, icon geometry or accessibility behavior.
3. Generic semantic components do not require three-page reuse evidence; Patterns require multi-workflow validation before `stable`.
4. Raw visual values belong to tokens/CSS. Dynamic geometry may use runtime CSS variables only when unavoidable.
5. Text/emoji glyphs may not substitute for product icons.
6. Stateful widgets must implement or delegate WAI-ARIA keyboard/focus behavior and carry automated evidence before `stable`.
7. Patterns own layout/composition semantics, never product-specific data fetching or business state machines.
8. Maturity levels: `experimental → alpha → beta → stable → deprecated`.
9. Optional component-count expansion must not displace release hardening or real-consumer evidence.

## Execution protocol

1. Read this Master Task.
2. Select the highest-priority unfinished release-hardening task.
3. Inspect existing contracts before implementation.
4. Implement inside Parchment first.
5. Validate token, type, accessibility, registry, package and visual contracts.
6. Update maturity evidence and docs.
7. Commit and verify CI.
8. Validate against real consumers when applicable.

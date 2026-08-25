# Parchment Design System — Master Task

## Current execution pointer

**P3 — Pattern Engine / first official product patterns. IN PROGRESS.**

## Product/version contract

- Product: **Parchment**
- Current design language: **Parchment 4.0 · Black & White Editorial**
- Runtime architecture program: **Component Runtime 1.0 / UI OS v2 foundation**
- Current release status: **61 registry items: Core + Workspace + AI-native runtime + first 10 product Patterns**
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
- [ ] Add drift and contrast gates

## P2 — Component Runtime 1.0

### Foundation

- [x] CSS primitives + React/TypeScript runtime boundary
- [x] Radix headless adapter for stateful widgets
- [x] Parchment runtime/workspace/AI CSS layers consuming tokens
- [x] Raw-hex and glyph-icon runtime audit gates
- [x] Strict TypeScript contract
- [x] shadcn-compatible root registry and registry integrity gate
- [x] Evidence-based component maturity inventory
- [ ] Story/showcase harness
- [ ] State matrix, keyboard tests and visual regression tests
- [ ] Package export/build pipeline and versioned release artifact

### Core checkpoint

- [x] Golden 6: Button, Input, Select, Dialog, Tabs, Card
- [x] Core 30 baseline
- [x] DataTable
- [x] Combobox experimental runtime
- [ ] Controls: Toggle, ToggleGroup, SegmentedControl, Slider
- [ ] Forms: NumberInput, PasswordInput
- [ ] Selection: TagsInput
- [ ] Navigation: Stepper, NavigationMenu
- [ ] Overlays: ContextMenu, AlertDialog, Drawer/Sheet
- [ ] Feedback: Toast
- [ ] Data display: Stat, Timeline, CodeBlock
- [ ] Editing: InlineEditor

### Workspace component family

- [x] SidebarNav
- [x] Toolbar
- [x] CommandPalette
- [x] TreeView / FileTree experimental runtime
- [x] SplitPane layout primitive
- [x] ResizablePanel interaction runtime
- [x] PropertyPanel
- [x] ViewSwitcher
- [ ] ListView / GridView
- [ ] AssetBrowser primitives

Workspace rule: interaction-rich components must not advance beyond `experimental`/`alpha` until keyboard, focus, pointer/touch and responsive evidence is automated.

### AI-native component family

Parchment represents AI through workflow state and semantics, not a decorative AI palette.

- [x] AIStatus
- [x] AIThinking
- [x] AIMessage
- [x] AIArtifact
- [x] AIToolCall
- [x] AIApproval
- [x] AIDiff
- [x] AIConflict
- [x] AICitation
- [x] AIConfidence
- [x] AIError
- [ ] AIStreaming specialized stream controls
- [ ] AIRegenerate action contract

## P3 — Pattern engine

Pattern admission requires stable semantics across multiple real workflows. `docs/PATTERN-CONTRACTS.md` is the canonical usage/admission contract.

### First official Pattern set

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

These patterns are implemented and registry-published but remain `alpha`/`experimental` until multi-workflow reference validation and visual/accessibility evidence are complete.

### Remaining Pattern set

- [ ] PropertyList
- [ ] Loading/Error/Retry flow
- [ ] AI State Bar
- [ ] SettingsSection
- [ ] Search/Command workspace
- [ ] Review/Approval workspace
- [ ] Responsive workspace pattern evidence

## P4 — Reference validation

- [ ] Validate against Creator OS as first real consumer without moving Parchment ownership into Creator OS
- [ ] Validate against at least one second creator/workspace product
- [ ] Record missing component/pattern evidence back into Parchment
- [ ] Responsive and visual regression baselines

## P5 — Release

- [ ] Registry/install guide
- [ ] Migration guide
- [ ] Component + Pattern showcase/playground
- [ ] Accessibility evidence
- [ ] Release checklist green
- [ ] Parchment Component Runtime 1.0 release

## Governance rules

1. Parchment is the source of truth for tokens, interaction contracts, reusable components and cross-product patterns.
2. Products may compose Parchment but must not fork palette, state models, icon geometry or accessibility behavior.
3. Generic semantic components do not require three-page reuse evidence; Patterns do require multi-workflow validation before `stable`.
4. Raw visual values belong to tokens/CSS. Dynamic geometry may use runtime CSS variables only when unavoidable.
5. Text/emoji glyphs may not substitute for product icons.
6. Stateful widgets must implement or delegate WAI-ARIA keyboard/focus behavior and carry automated evidence before `stable`.
7. Patterns own layout/composition semantics, never product-specific data fetching or business state machines.
8. Maturity levels: `experimental → alpha → beta → stable → deprecated`.

## Execution protocol

1. Read this Master Task.
2. Select the highest-priority unfinished task.
3. Inspect existing contracts before implementation.
4. Implement inside Parchment first.
5. Validate token, type, accessibility, registry and visual contracts.
6. Update maturity evidence and docs.
7. Commit and verify CI.
8. Validate against real consumers when applicable.

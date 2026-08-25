# Parchment Design System — Master Task

## Current execution pointer

**P2 — Component Runtime 1.0. IN PROGRESS.**

## Product/version contract

- Product: **Parchment**
- Current design language: **Parchment 4.0 · Black & White Editorial**
- Runtime architecture program: **Component Runtime 1.0 / UI OS v2 foundation**
- Current release status: **Specification + token runtime + CSS primitives ready / Core 30 React runtime implemented at alpha maturity**
- Reference consumers such as Creator OS validate Parchment; they do not own or fork Parchment component contracts.

## P0 — Canonical cleanup

- [x] Retire warm, cloud-white and gray-cast directions; white/black dominate while gray remains structural
- [x] Make README, tokens and Master agree on product/version/status
- [x] Update GitHub repository description
- [x] Consolidate PRD/Architecture version labels
- [x] Inventory every legacy/duplicate/broken reference
- [x] Mark unique legacy value migrated and references zero before `DELETE_READY`
- [x] Physically remove the final promoted legacy design monolith and rerun all gates
- [x] Remove broken README references and pass link audit
- [x] Retire legacy token, v3 architecture and UI OS v2 documents after migration gates pass

## P1 — Token runtime

- [x] Validate DTCG token hierarchy and reference resolution
- [x] Generate committed CSS variables artifact
- [x] Add light/dark theme token contract
- [x] Migrate typography scale, composition, motion and neutral elevation tokens
- [ ] Add drift and contrast gates

## P2 — Component Runtime 1.0

### Foundation

- [x] Publish checked CSS primitives for 10 component families
- [x] Establish `src/components` React + TypeScript runtime boundary
- [x] Establish Radix headless behavior adapter for stateful widgets
- [x] Add runtime stylesheet that consumes Parchment variables instead of product-local visual values
- [x] Add runtime audit gate forbidding raw visual hex in React components
- [x] Add runtime audit gate forbidding text/emoji glyphs as product icon substitutes
- [x] Add strict TypeScript declaration contract
- [x] Add root `registry.json` compatible with current shadcn registry schema
- [x] Add registry integrity gate for names, metadata and file existence
- [x] Add component maturity inventory (`docs/COMPONENT-MATURITY.md`)
- [ ] Story/showcase harness
- [ ] State matrix, keyboard tests and visual regression tests
- [ ] Package export/build pipeline and versioned release artifact

### Golden 6 — contract validation set

- [x] Button
- [x] Input
- [x] Select
- [x] Dialog
- [x] Tabs
- [x] Card

Golden 6 validates the full chain: token → CSS primitive → accessible/headless behavior → React API → runtime skin → consumer integration. Remaining components must follow the same contract rather than invent local APIs.

### Core 30 checkpoint

Implemented at `alpha` maturity:

- Controls: Button, IconButton
- Forms: Input, SearchInput, Textarea, Field
- Selection: Select, Checkbox, RadioGroup, Switch
- Surfaces/display: Card, Badge, StatusIndicator, Avatar, Separator, KeyValue, Kbd
- Navigation: Tabs, Breadcrumb, Pagination
- Overlays: Dialog, Tooltip, Popover, DropdownMenu
- Disclosure: Accordion, Collapsible
- Feedback: Progress, Spinner, Skeleton, Alert

### Remaining Core component families

- [ ] Controls: Toggle, ToggleGroup, SegmentedControl, Slider
- [ ] Forms: NumberInput, PasswordInput
- [ ] Selection: Combobox, TagsInput
- [ ] Navigation: Stepper, NavigationMenu
- [ ] Overlays: ContextMenu, AlertDialog, Drawer/Sheet
- [ ] Feedback: Toast
- [ ] Data display: DataTable, Stat, Timeline, CodeBlock
- [ ] Editing: InlineEditor

No component advances to `stable` before automated keyboard/state evidence, responsive behavior and visual regression are green.

### Workspace component family

- [ ] SidebarNav
- [ ] Toolbar
- [ ] CommandPalette
- [ ] TreeView / FileTree
- [ ] SplitPane / ResizablePanel
- [ ] Inspector / PropertyPanel
- [ ] ListView / GridView / ViewSwitcher
- [ ] AssetBrowser primitives

### AI-native component family

Parchment must represent AI as behavior/state, not a decorative color theme.

- [ ] AIStatus
- [ ] AIThinking / AIStreaming
- [ ] AIMessage / AIResponse
- [ ] AIArtifact
- [ ] AIToolCall
- [ ] AIApproval
- [ ] AIDiff
- [ ] AIConflict
- [ ] AICitation
- [ ] AIConfidence
- [ ] AIRegenerate / AIError

## P3 — Pattern engine

Pattern admission requires stable semantics across multiple real workflows. Component admission does not require three-page reuse when the interaction semantic is intrinsically generic.

- [ ] AppShell
- [ ] PageHeader
- [ ] Section
- [ ] ListItem
- [ ] PropertyList
- [ ] FormField
- [ ] EmptyState
- [ ] Loading/Error/Retry flow
- [ ] AI State Bar
- [ ] EditorShell
- [ ] InspectorLayout
- [ ] AssetLibrary
- [ ] AIWorkspace
- [ ] SettingsSection
- [ ] Responsive workspace patterns

## P4 — Reference validation

- [ ] Validate against Creator OS as first real consumer without moving Parchment ownership into Creator OS
- [ ] Validate against at least one second creator/workspace product
- [ ] Record missing component/pattern evidence back into Parchment
- [ ] Responsive and visual regression baselines

## P5 — Release

- [ ] Registry/install guide
- [ ] Migration guide
- [ ] Component showcase/playground
- [ ] Accessibility evidence
- [ ] Release checklist green
- [ ] Parchment Component Runtime 1.0 release

## Governance rules

1. Parchment is the source of truth for tokens, interaction contracts, reusable components and cross-product patterns.
2. Products may compose Parchment but must not fork its palette, component state model, icon geometry or accessibility behavior.
3. A semantic primitive/component enters the library when its interaction contract is generic and stable; it does not need three-page reuse evidence.
4. A Pattern enters the official layer only when it survives multiple real workflow contexts without product-specific branching.
5. Raw visual values are forbidden in React components; visual decisions belong to tokens/CSS runtime. Dynamic geometry may be expressed through runtime variables when unavoidable, but visual values remain token-owned.
6. Text/emoji glyphs may not substitute for product icons. Icon geometry remains governed by the Parchment icon contract.
7. Every stateful widget must delegate or implement the correct WAI-ARIA keyboard/focus behavior and carry test evidence before stable maturity.
8. Maturity levels: `experimental → alpha → beta → stable → deprecated`.

## Execution protocol

For every future change:

1. Read this Master Task.
2. Select highest-priority unfinished task.
3. Inspect implementation and existing contracts.
4. Implement inside Parchment first.
5. Validate token, type, accessibility and visual contracts.
6. Update documentation and maturity evidence.
7. Commit.
8. Verify against a real consumer when applicable.

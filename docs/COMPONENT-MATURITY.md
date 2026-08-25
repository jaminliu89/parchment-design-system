# Parchment Component Maturity

Maturity is evidence-based, not age-based.

- `experimental`: API or behavior may change without migration support.
- `alpha`: public contract exists; keyboard/state coverage is incomplete.
- `beta`: API is intended to hold; typecheck/audit pass and real-product validation has started.
- `stable`: state matrix, keyboard/ARIA evidence, responsive behavior and visual regression are green.
- `deprecated`: replacement and migration path are documented.

## Runtime inventory

| Component | Maturity | Behavior source | Notes |
| --- | --- | --- | --- |
| Button | alpha | native + Radix Slot | loading/disabled/asChild contract |
| IconButton | alpha | Button | accessible label required |
| Input | alpha | native | error/disabled/readonly contract |
| SearchInput | alpha | Input | injectable icon; clear action semantic |
| Textarea | alpha | native | error/disabled/readonly contract |
| Field | alpha | native | label/help/error semantic composition |
| Select | alpha | Radix Select | keyboard/focus behavior delegated; CSS geometry indicators |
| Checkbox | alpha | Radix Checkbox | checked/indeterminate/disabled; no glyph icons |
| RadioGroup | alpha | Radix Radio Group | roving keyboard behavior delegated |
| Switch | alpha | Radix Switch | checked/disabled/focus |
| Card | alpha | native | structural surface |
| Badge | alpha | native | semantic tones only |
| StatusIndicator | alpha | native | label + redundant state marker |
| Avatar | alpha | native | image/fallback/sizes |
| Tabs | alpha | Radix Tabs | keyboard/focus behavior delegated |
| Dialog | alpha | Radix Dialog | focus trap/dismiss/restore delegated |
| Tooltip | alpha | Radix Tooltip | pointer/focus behavior delegated |
| Popover | alpha | Radix Popover | anchor/dismiss/focus delegated |
| DropdownMenu | alpha | Radix Dropdown Menu | menu keyboard/submenu behavior delegated |
| Accordion | alpha | Radix Accordion | disclosure keyboard behavior delegated |
| Collapsible | alpha | Radix Collapsible | controlled/uncontrolled disclosure |
| Separator | alpha | native | decorative/semantic modes |
| Progress | alpha | native ARIA | determinate/indeterminate |
| Spinner | alpha | native status | reduced-motion styling |
| Skeleton | alpha | native | animated/static |
| Alert | alpha | native live semantics | status/error roles |
| Breadcrumb | alpha | native nav/list | current-page semantics |
| Pagination | alpha | native nav/button | current-page semantics |
| Kbd | alpha | native kbd | keyboard hint primitive |
| KeyValue | alpha | native dl/dt/dd | responsive metadata display |
| SidebarNav | alpha | native nav/button | active-page semantics; icons injected |
| Toolbar | alpha | native ARIA toolbar/group | grouping contract; roving focus not yet added |
| ViewSwitcher | alpha | native pressed buttons | exclusive-view behavior remains consumer-controlled |
| PropertyPanel | alpha | native aside/section | inspector structure and responsive collapse styling |
| SplitPane | experimental | native separator/layout | layout primitive only; drag-resize behavior intentionally not claimed |

## Current checkpoint

- 30 Core source-registry items plus first 5 Workspace primitives.
- Runtime source audit checks raw visual hex and forbidden icon glyph substitutions.
- Registry integrity gate checks duplicate names, file metadata and source-file existence.
- Components remain `alpha` until automated keyboard/state tests and visual-regression evidence exist.
- Workspace components with incomplete interaction semantics remain `experimental` rather than overstating maturity.

No component may advance to `stable` until automated interaction and visual evidence exists.

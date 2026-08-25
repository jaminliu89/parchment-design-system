# Parchment Component Maturity

Maturity is evidence-based, not age-based.

- `experimental`: API or behavior may change without migration support.
- `alpha`: public contract exists; keyboard/state coverage is incomplete.
- `beta`: API is intended to hold; typecheck/audit pass and real-product validation has started.
- `stable`: state matrix, keyboard/ARIA evidence, responsive behavior and visual regression are green.
- `deprecated`: replacement and migration path are documented.

## Runtime inventory

Core, Workspace and AI-native components remain at the previously recorded alpha/experimental levels. No component is promoted solely because the package or CI builds.

Key interaction maturity constraints remain:

- `Combobox`: experimental until active-descendant/arrow navigation evidence is complete.
- `TreeView / FileTree`: experimental until roving focus and full up/down navigation are automated.
- `SplitPane`: experimental layout primitive; `ResizablePanel` owns actual resize behavior.
- `CommandPalette`, `DataTable`, `ResizablePanel`: alpha pending broader reference-consumer evidence.
- AI-native components: alpha; semantics are present but visual-regression/reference evidence is still required.

## Automated evidence now present

- strict TypeScript typecheck
- runtime raw-hex and forbidden-glyph audit
- complete registry integrity audit
- Button loading/disabled state test
- Radix Tabs keyboard arrow-navigation smoke test
- AI lifecycle live-region semantic test
- axe-core accessibility smoke scan on representative runtime + Pattern content
- package bundle build for ESM/CJS/declaration outputs

## Current checkpoint

- 67 registry items spanning Core, Workspace, AI-native runtime and 16 official Patterns.
- Complete style cascade: runtime → workspace → AI → patterns.
- Single-page showcase harness exists for representative Core / Workspace / AI-native / Pattern states.
- Components and Patterns remain `alpha`/`experimental` until responsive visual regression and multi-workflow reference validation are complete.

No component or Pattern may advance to `stable` until its required automated interaction, responsive and visual evidence exists.

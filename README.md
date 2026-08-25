# Parchment 4.0

> **Black & White Editorial UI system for creator tools and AI workspaces.**

Parchment is the design, interaction and component system for creator tools and AI workspaces. Its canonical language is white space, black typography and primary actions, restrained structural grays, one icon geometry, semantic AI states and quiet chrome.

**Current status:** Specification ready · Token runtime available · CSS primitives available · **React Component Runtime 1.0 in progress (Golden 6 implemented).**

## Runtime architecture

Parchment is the source of truth. Product applications are reference consumers, not temporary owners of reusable component contracts.

```
Design principles
        ↓
Design tokens
        ↓
CSS / layout primitives
        ↓
Accessible headless behavior (Radix where appropriate)
        ↓
React + TypeScript components
        ↓
Workspace + AI-native patterns
        ↓
Reference consumers
        ↓
Quality evidence fed back into Parchment
```

### Golden 6 runtime components

The first contract-validation set is implemented under `src/components/`:

- Button
- Input
- Select
- Dialog
- Tabs
- Card

These are not a separate visual system. They consume the existing Parchment CSS/token language and add framework API, state ownership and accessible interaction behavior.

Import runtime styles with `src/runtime.css` while the package export pipeline is being finalized.

## Multi-theme variants

Parchment 4.0 is a **monochrome editorial** system by default. Theme variants may provide warmer or commercial identities without forking component behavior.

| Theme | Signal accent | Tone | Use case |
|---|---|---|---|
| Parchment (default, 4.0) | `#000000` black | Pure B&W editorial | Creator tools, writing, editorial |
| NovelAgent | `#2E3A52` muted navy | Warm canvas + navy accent | Commercial tools, professional writing OS |

See `docs/THEME-ARCHITECTURE.md` for the full theme contract and `parchment-theme-preview.html` for a live side-by-side comparison.

## Source of truth

1. `docs/MASTER-TASK.md` — execution order and release status.
2. `docs/PRD.md` — product and governance contract.
3. `parchment.v3.tokens.json` — canonical machine-readable tokens until the non-breaking 4.0 artifact rename.
4. `docs/ARCHITECTURE.md` — layer boundaries and consumption rules.
5. `docs/COMPONENT-CONTRACTS.md`, `docs/CONTENT-AND-STATES.md` and `docs/GOVERNANCE.md` — behavior, content and lifecycle contracts.
6. `src/components/` — framework runtime implementation, subordinate to the contracts above.

## Visual contract

- No warm, cool or gray-cast foundational canvas.
- White and near-white own the canvas and content surfaces; black and near-black own typography and primary actions.
- Gray is structural only: borders, disabled states, placeholders and secondary hierarchy.
- Color is reserved for functional success, warning and error meaning.
- Sans for interface, serif for editorial emphasis, mono for metadata.
- One icon family: 20px grid, 1.75px stroke, round caps/joins, `currentColor`.
- Controls use 8px radius; surfaces use 12px radius.
- Pills are semantic status only; circles are exceptional, not generic icon containers.
- Content > label > icon > chrome.
- No emoji/text glyphs as product icons in stable components.
- AI is behavior/state, not a permanent visual theme.
- Minimum interactive target: 44px; visible focus; reduced-motion support.

## Component governance

A semantic component is admitted when its interaction contract is generic and stable; it does not need arbitrary page-count reuse evidence. Patterns require evidence across multiple workflows before promotion.

Maturity is explicit: `experimental → alpha → beta → stable → deprecated`.

React components may not invent raw visual hex values. Visual decisions belong to the token/CSS runtime. Stateful widgets must provide WAI-ARIA keyboard/focus behavior and test evidence before reaching stable maturity.

## Planned families

Beyond the Golden 6, the runtime program is organized into four governed families:

- **Core UI:** controls, forms, selection, navigation, overlays, feedback, data display and disclosure.
- **Workspace:** sidebar, toolbar, command palette, tree/file navigation, split panes, inspector/property panels, list/grid views and asset-browser primitives.
- **AI-native:** thinking, streaming, response, artifact, tool call, approval, diff, conflict, citation, confidence, regenerate and error states.
- **Patterns:** AppShell, PageHeader, Section, FormField, EditorShell, InspectorLayout, AssetLibrary, AIWorkspace and responsive workflow compositions.

The complete execution order lives in `docs/MASTER-TASK.md`.

## Definition of done

A surface is ready only when it passes role-lab review at desktop/mobile and light/dark appearances; uses the same icon geometry and shape language; preserves content hierarchy without decorative chrome; and exposes AI state through semantics and structure rather than color alone.

A framework component is ready only when its API, states, keyboard/focus behavior, token usage, TypeScript contract and quality evidence are complete. CSS selectors alone are not evidence of accessible component completion.

Historical experiments are `CONSOLIDATE_THEN_DELETE`: they may not override the canonical sources above and may be physically removed only after unique references are migrated, references reach zero and release checks pass.

## Surface explorations

`explorations/` contains additive visual references — real creative-tool surfaces rebuilt with Parchment tokens. These are not system modifications. See `docs/patterns/EDITOR-AI-FUSION.md` for the fusion methodology.

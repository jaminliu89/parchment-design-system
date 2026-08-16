# Parchment 4.0

> **Black & White Editorial UI system for creator tools and AI workspaces.**

Parchment is the design and interaction system for creator tools and AI workspaces. Its canonical language is white space, black typography and primary actions, restrained structural grays, one icon geometry, semantic AI states and quiet chrome.

**Current status:** Specification ready · Token runtime available · CSS component primitives available · Accessible behavior engine in progress.

## Multi-theme variants

Parchment 4.0 is a **monochrome editorial** system by default. Theme variants are available for warmer / commercial visual identities:

| Theme | Signal accent | Tone | Use case |
|---|---|---|---|
| Parchment (default, 4.0) | `#000000` black | Pure B&W editorial | Creator OS, writing, editorial |
| NovelAgent | `#2E3A52` muted navy | Warm canvas + navy accent | Commercial tools, professional writing OS |

See `docs/THEME-ARCHITECTURE.md` for the full theme contract and `parchment-theme-preview.html` for a live side-by-side comparison.

## Source of truth

1. `docs/MASTER-TASK.md` — execution order and release status.
2. `docs/PRD.md` — product and governance contract.
3. `parchment.v3.tokens.json` — canonical machine-readable tokens.
4. `docs/ARCHITECTURE.md` — layer boundaries and consumption rules.
5. `docs/COMPONENT-CONTRACTS.md`, `docs/CONTENT-AND-STATES.md` and `docs/GOVERNANCE.md` — behavior, content and lifecycle contracts.

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
- No emoji/text glyphs as product icons; no mixed filled/outline icon sets.
- AI is behavior/state, not a permanent visual theme.
- Minimum interactive target: 44px; visible focus; reduced-motion support.

## Role hierarchy

`App Shell → Navigation → Header → Toolbar → Content → Transcript/Voice → AI → Inspector → Dialog → Empty/Loading/Error → Responsive`

## Source files

- `parchment.v3.tokens.json` — canonical tokens.
- `parchment-preview.html` — primary visual preview.
- `parchment-role-lab.html` — role/component walkthrough.
- `parchment-theme-preview.html` — side-by-side theme comparison.
- `parchment.theme-novelagent.tokens.json` — NovelAgent theme tokens.
- `dist/theme-novelagent.css` — NovelAgent runtime CSS.
- `docs/QUALITY-GATE.md` — visual, interaction and release gate.
- `docs/ICONOGRAPHY.md` — iconography contract.
- `docs/THEME-ARCHITECTURE.md` — theme contract and adding new themes.

## Definition of done

A surface is ready only when it passes role-lab review at desktop/mobile and light/dark appearances; uses the same icon geometry and shape language; preserves content hierarchy without decorative chrome; and exposes AI state through semantics and structure rather than color alone.

CSS classes are visual primitives, not a claim of accessible component completion. Dialog, tabs, switch and other stateful widgets still require semantic markup, keyboard behavior and runtime tests in the consuming framework.

Historical experiments are `CONSOLIDATE_THEN_DELETE`: they may not override the four sources of truth above and may be physically removed only after unique references are migrated, references reach zero and release checks pass.

## Surface explorations

`explorations/` contains additive visual references — real creative-tool surfaces rebuilt with Parchment tokens. These are not system modifications. See `docs/patterns/EDITOR-AI-FUSION.md` for the fusion methodology.
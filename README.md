# Parchment 4.0

> **Black & White Editorial UI system for creator tools and AI workspaces.**

Parchment is the design and interaction system for creator tools and AI workspaces. Its canonical language is white space, black typography and primary actions, restrained structural grays, one icon geometry, semantic AI states and quiet chrome.

**Current status:** Specification ready · Token runtime available · CSS component primitives available · Accessible behavior engine in progress.

## Source of truth

1. `docs/MASTER-TASK.md` — execution order and release status.
2. `docs/PRD.md` — product and governance contract.
3. `parchment.v3.tokens.json` — canonical machine-readable tokens.
4. `docs/ARCHITECTURE.md` — layer boundaries and consumption rules.
5. `docs/COMPONENT-CONTRACTS.md`, `docs/CONTENT-AND-STATES.md` and `docs/GOVERNANCE.md` — behavior, content and lifecycle contracts.

Version meaning is intentionally separated: **Parchment 4.0** is the current design-language program; **UI OS v2** is the unfinished runtime architecture program.

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
- AI is behavior/state, not a permanent purple visual theme.
- Minimum interactive target: 44px; visible focus; reduced-motion support.

## Role hierarchy

`App Shell → Navigation → Header → Toolbar → Content → Transcript/Voice → AI → Inspector → Dialog → Empty/Loading/Error → Responsive`

### Transcript / voice

Never stack floating tags beside spoken copy. Use a stable information row:

`Speaker → Role → Spoken content → Time`

AI suggestions, processing, diffs and conflicts are separate semantic rows/panels rather than decorative labels attached to every sentence.

## Source files

- `parchment.v3.tokens.json` — canonical tokens.
- `dist/parchment.tokens.css` — generated token runtime; never edit by hand.
- `parchment.css` — canonical CSS component primitives.
- `dist/parchment.css` — generated consumer artifact; never edit by hand.
- `parchment-preview.html` — primary visual preview.
- `parchment-role-lab.html` — role/component walkthrough.
- `docs/QUALITY-GATE.md` — canonical visual, interaction and release gate.
- `docs/ICONOGRAPHY.md` — iconography contract.
- `docs/COMPONENT-CONTRACTS.md` — semantic anatomy, state and interaction requirements.
- `docs/CONTENT-AND-STATES.md` — voice, empty/loading, i18n/RTL and data-presentation rules.
- `docs/GOVERNANCE.md` — maturity, compatibility, deprecation and acceptance evidence.

## Definition of done

A surface is ready only when it passes role-lab review at desktop/mobile and light/dark appearances; uses the same icon geometry and shape language; preserves content hierarchy without decorative chrome; and exposes AI state through semantics and structure rather than color alone.

CSS classes are visual primitives, not a claim of accessible component completion. Dialog, tabs, switch and other stateful widgets still require semantic markup, keyboard behavior and runtime tests in the consuming framework.

Historical experiments are `CONSOLIDATE_THEN_DELETE`: they may not override the four sources of truth above and may be physically removed only after unique references are migrated, references reach zero and release checks pass.

## Surface explorations

`explorations/` contains additive visual references — real creative-tool surfaces rebuilt with Parchment tokens. These are not system modifications. See `docs/patterns/EDITOR-AI-FUSION.md` for the fusion methodology.

---

## Support

Parchment is free and open-source. If it's been useful to you, there are a few ways to help keep it going.

**GitHub Sponsors** — the best way. Monthly or one-time, goes straight to keeping the lights on.
[github.com/sponsors/jaminliu89](https://github.com/sponsors/jaminliu89)

**WeChat / Alipay** — for folks in China who want to buy me a coffee.
[Scan the code →](docs/sponsor.html)

It's just one person working on this in between photography gigs, so anything helps. The system stays free either way — sponsorship just means fewer compromises and faster progress.

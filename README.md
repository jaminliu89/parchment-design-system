# Parchment Design System 3.2

> **Quiet Editorial — Content first / Precise interaction / Neutral visual language**

Parchment is a design system for creator tools and AI workspaces. The current source of truth is a restrained editorial system: warm neutral surfaces, carbon text, one icon family, deliberate typography, semantic AI states, and minimal chrome.

## Visual contract

- No blue as brand or primary UI color.
- Warm neutral surfaces + near-black primary text.
- Sans for interface, serif for editorial emphasis, mono for metadata.
- One icon family: 20px grid, 1.75px stroke, round caps/joins, `currentColor`.
- Controls use 9px radius; surfaces use 12px radius.
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
- `parchment-preview.html` — primary visual preview.
- `parchment-role-lab.html` — role/component walkthrough.
- `PARCHMENT_3_1_VISUAL_AUDIT.md` — visual language audit.
- `PARCHMENT_3_2_QA.md` — product-wide QA checklist.
- `PARCHMENT_ICONOGRAPHY_V3.md` — iconography contract.

## Definition of done

A surface is ready only when it passes role-lab review at desktop/mobile and light/dark appearances; uses the same icon geometry and shape language; preserves content hierarchy without decorative chrome; and exposes AI state through semantics and structure rather than color alone.

Historical experiments are reference material only and must not reintroduce the retired blue SaaS language, mixed icon families, decorative icon containers, or uncontrolled badge/pill usage.

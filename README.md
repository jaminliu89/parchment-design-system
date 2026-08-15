# Parchment Design System 3.3

> **Quiet Editorial — Stark Black & White / Modern Minimalism / Content First**

Parchment is a high-contrast editorial design system for creator tools and AI workspaces. The system uses stark black and white surfaces, crisp high-contrast typography, humanistic serif accents, precise interaction boundaries, and generous whitespace.

## Visual Contract

- **Stark Black & White**: Pure crisp contrast. Canvas `#F8F9FA`, Surface `#FFFFFF`, Primary Ink `#111215`. No warm beige/cream tones.
- **Strictly No Blue/Purple**: AI and brand states use structural semantics, typography, and contrast rather than blue or purple gradients.
- **Editorial Typography Hierarchy**: Sans (`Inter`) for UI/controls, Serif (`Instrument Serif`) for epic editorial emphasis, Mono (`DM Mono`) for metadata.
- **Consistent Radius System**: 8px (`--p-r-control`) for controls/buttons/inputs, 12px (`--p-r-surface`) for cards/panels/dialogs, Pills strictly for status chips.
- **Single Icon Family**: 20px grid, 1.75px stroke, round caps/joins, `currentColor`.
- **Generous Whitespace (留白)**: Content and typography dictate structure. Chrome is kept quiet and minimal.

## Component Inventory

Parchment 3.3 provides a complete set of design system components in CSS (`parchment.css` / `dist/parchment.css`):

1. **Button Suite**: Primary (solid ink), Secondary (outlined), Tertiary, Destructive, Icon-only, Loading states.
2. **Form Controls**: Text inputs, Textarea, Select, Checkboxes, Radio buttons, Toggle switches (`.p-switch`).
3. **Data Display & Tables**: Clean data tables (`.p-table`), Tab bars (`.p-tabs`), Status badges (`.p-badge`).
4. **Overlays & Feedback**: Dialog/Modal (`.p-dialog`), Toast notifications (`.p-toast`).
5. **AI & Voice Transcript**: Row-based transcript architecture (`Speaker | Role | Spoken Content | Time`).
6. **Workspace Shell**: Quiet rail navigation and main canvas layout.

## Source Files & Utilities

- `parchment.v3.tokens.json` — Canonical design tokens (DTCG format).
- `parchment.css` / `dist/parchment.css` — Core CSS component framework.
- `scripts/generate-css-vars.js` — Script to generate CSS custom properties from canonical tokens.
- `parchment-preview.html` — Full component visual showcase.
- `parchment-role-lab.html` — Interactive component role laboratory.

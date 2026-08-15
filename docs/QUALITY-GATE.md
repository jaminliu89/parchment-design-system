# Parchment 4.0 Quality Gate

This is the canonical visual, interaction and release gate. A checklist item is evidence only after the relevant source, runtime or browser check has run.

## Global contract

- [ ] White/near-white canvas and black/near-black primary actions; no warm, cloud-white, gray-cast or blue brand canvas
- [ ] No gradients, glass blur, glow, decorative shadow or emoji/text-glyph product icons
- [ ] 8px controls, 12px surfaces and pills only for compact semantic status
- [ ] One 20px geometric monoline icon family, 1.75px stroke, round caps/joins and `currentColor`
- [ ] Sans is the interface voice; serif is limited to deliberate editorial emphasis
- [ ] Content hierarchy remains legible with color removed
- [ ] Color supplements functional success, warning and error meaning only
- [ ] Every interactive target is at least 44px and has visible non-color-only focus
- [ ] Reduced motion removes non-essential animation

## Component behavior

- [ ] Buttons expose default, hover, active, focus, loading and disabled states
- [ ] Inputs share control geometry and reserve stable help/error space
- [ ] Tabs implement semantic roles, arrow-key navigation and selected state
- [ ] Dialogs trap focus, support Escape, label title/description and restore invoking focus
- [ ] Switches expose accessible name, state and keyboard operation
- [ ] Tables preserve headers and horizontal access on narrow viewports
- [ ] Toast/status announcements use the appropriate live-region behavior
- [ ] CSS visual primitives are not treated as proof of accessible framework behavior

## Creator workspace patterns

- [ ] App shell and navigation remain subordinate to content
- [ ] Toolbar has one clear primary action and quiet grouped secondary actions
- [ ] Transcript preserves `Speaker → Role → Spoken content → Time`; mobile drops metadata before content
- [ ] AI suggestions, processing, generated output, diff and conflict use explicit reversible structure
- [ ] Empty, loading and error states each provide one understandable recovery path
- [ ] Inspector, canvas and navigation retain the same hierarchy in light and dark modes

## Runtime and release evidence

- [ ] `npm run check` passes token resolution, artifact drift and forbidden-pattern guards
- [ ] README and canonical document links resolve
- [ ] No retired v1/v2/v3 file is referenced as current authority
- [ ] Desktop, tablet and 390px mobile have no horizontal overflow
- [ ] Keyboard/focus and screen-reader behavior is verified in the consuming framework
- [ ] Light/dark contrast and visual regression pass
- [ ] Migration notes identify consumer changes and rollback
- [ ] Release commit and distributed artifacts match

## Completion rule

Parchment 4.0 may be released only after all applicable checks above have observable evidence. Historical release claims are not inherited.

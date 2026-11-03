# Parchment Shape, Elevation & Motion Contract

## Purpose

Define the physical language of Parchment surfaces and interactions.

## Shape

Shape communicates component role, not decoration.

Recommended radius hierarchy:

- `radius-xs`: compact controls and dense utility UI
- `radius-sm`: buttons, inputs, small surfaces
- `radius-md`: cards and panels
- `radius-lg`: large workspace surfaces
- `radius-xl`: major containers only

Do not create arbitrary local radii.

### Editorial radius

`shape.editorial` = 2px.

Three radius roles ship, not five:

| Role | Value | Applies to |
|---|---|---|
| `control` | 8px | buttons, inputs, selects, switches |
| `surface` | 12px | cards, panels, sheets |
| `editorial` | 2px | reading blocks, covers, quote panels, image plates |

`editorial` exists because a near-square block reads as print while a 12px block reads as a product card. Do not lower `control` to `editorial` — a 2px button reads as broken, not restrained. Do not raise `editorial` to `surface` — a 12px reading plate reads as a widget.

The `radius-xs … radius-xl` scale documented earlier in this contract was never shipped; `parchment.v3.tokens.json` has carried `control`, `surface`, `small` and `pill` since 4.0, and adds `editorial` in this revision. Read the token file, not the prose.

## Elevation

Elevation is reserved for hierarchy:

- Level 0: flat content canvas
- Level 1: subtle separation
- Level 2: floating menus and popovers
- Level 3: dialogs and critical overlays

Avoid shadows as decoration.

## Motion

Motion explains state change.

Required contracts:

- consistent duration tokens;
- predictable easing;
- respect reduced motion preferences;
- no decorative animation without purpose.

Component motion belongs to the component contract, not individual screens.

## Acceptance

Every surface and transition must map back to this contract or a documented exception.

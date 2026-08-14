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

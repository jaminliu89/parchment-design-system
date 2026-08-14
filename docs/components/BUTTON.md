# Button Component Contract

## Purpose

Buttons represent intentional actions. They must communicate priority, intent, and state without visual noise.

## Variants

- Primary: highest priority action
- Secondary: supporting action
- Ghost: low emphasis utility action
- Destructive: irreversible or dangerous action
- Icon Button: compact icon-only action

## Sizes

Supported sizes:

- Compact
- Small
- Medium
- Large

No product surface may create custom button dimensions.

## States

Every button implementation must support:

- default
- hover
- pressed
- focus
- disabled
- loading

## Anatomy

Button = optional icon + label + state behavior.

Icons must follow the Iconography contract. Containers should not add decorative circles or squares unless the semantic pattern requires it.

## Rules

Do:

- use semantic tokens;
- preserve clear hierarchy;
- keep labels action-oriented;
- provide keyboard focus.

Do not:

- use gradients for normal actions;
- create one-off colors;
- mix unrelated radii;
- replace hierarchy with excessive badges.

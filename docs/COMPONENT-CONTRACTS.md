# Parchment 4.0 — Component Contract

## Required definition

Every component entry defines:

- purpose and non-goals;
- semantic anatomy and accessible name source;
- controlled and uncontrolled API boundary;
- variants, sizes and density behavior;
- default, hover, active, focus-visible, disabled, loading, error and empty states where applicable;
- keyboard, pointer, touch and screen-reader behavior;
- responsive composition and overflow behavior;
- test evidence and maturity level.

Visual CSS alone is never a completed component.

## Interaction baseline

Buttons use native `button` semantics and never communicate loading by disabling announcements. Inputs retain visible labels; placeholders are examples, not labels. Dialogs move focus inside, trap it while modal, close through an explicit path, and restore focus to the trigger. Menus, listboxes, tabs, accordions, trees and command palettes follow their WAI-ARIA interaction pattern instead of sharing one generic keyboard implementation.

Touch targets are at least 44px unless adjacent spacing provides an equivalent safe target. Focus remains visible in every appearance mode. Disabled elements are not the only place to explain why an action is unavailable.

## Density

Compact, regular and comfortable density adjust control height and spacing, not typography hierarchy or target semantics. Density is selected by workflow and input context; it is not a per-card decorative option. Touch-first surfaces default to comfortable.

## Composition rules

One surface owns one primary action. Toolbars group actions by task and use separators or spacing before adding containers. Forms place validation next to the affected field and provide a summary when submission fails. Tables retain column meaning at narrow widths through priority, horizontal containment or an explicit alternate view—never silent clipping.

Async actions preserve the last valid state, prevent duplicate submission and expose retry. Destructive actions support undo when reversible; otherwise they require confirmation proportional to impact.

## Component families

The governed families include controls, form fields, selection, navigation, overlays, feedback, data display, disclosure, editing and upload. A new family is accepted only when existing primitives cannot express its semantics without product-specific branching.

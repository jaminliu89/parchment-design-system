# Parchment Component Maturity

Maturity is evidence-based, not age-based.

- `experimental`: API or behavior may change without migration support.
- `alpha`: public contract exists; keyboard/state coverage is incomplete.
- `beta`: API is intended to hold; typecheck/audit pass and real-product validation has started.
- `stable`: state matrix, keyboard/ARIA evidence, responsive behavior and visual regression are green.
- `deprecated`: replacement and migration path are documented.

## Runtime inventory

| Component | Maturity | Behavior source | Notes |
| --- | --- | --- | --- |
| Button | alpha | native + Radix Slot | loading/disabled/asChild contract |
| Input | alpha | native | error/disabled/readonly contract |
| Textarea | alpha | native | error/disabled/readonly contract |
| Select | alpha | Radix Select | keyboard/focus behavior delegated |
| Checkbox | alpha | Radix Checkbox | checked/indeterminate/disabled |
| RadioGroup | alpha | Radix Radio Group | roving keyboard behavior delegated |
| Switch | alpha | Radix Switch | checked/disabled/focus |
| Card | alpha | native | structural surface |
| Badge | alpha | native | semantic tones only |
| Tabs | alpha | Radix Tabs | keyboard/focus behavior delegated |
| Dialog | alpha | Radix Dialog | focus trap/dismiss/restore delegated |
| Tooltip | alpha | Radix Tooltip | pointer/focus behavior delegated |
| Popover | alpha | Radix Popover | anchor/dismiss/focus delegated |
| DropdownMenu | alpha | Radix Dropdown Menu | menu keyboard/submenu behavior delegated |
| Accordion | alpha | Radix Accordion | disclosure keyboard behavior delegated |
| Separator | alpha | native | decorative/semantic modes |
| Progress | alpha | native ARIA | determinate/indeterminate |
| Spinner | alpha | native status | reduced-motion styling |
| Skeleton | alpha | native | animated/static |
| Alert | alpha | native live semantics | status/error roles |

No component may advance to `stable` until automated interaction and visual evidence exists.

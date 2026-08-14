# Parchment Form Controls

## Purpose

Form controls provide a consistent way to collect, validate, and edit information across creator workflows.

## Field anatomy

```
Field
 ├─ Label
 ├─ Control
 ├─ Description
 └─ Validation message
```

## Supported controls

- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch

## State contract

Every interactive control should define:

- default
- hover
- focus
- filled
- disabled
- readonly
- loading where applicable
- error
- success where applicable

## Rules

- Controls consume semantic tokens only.
- Labels and helper text follow typography hierarchy.
- Validation communicates cause and recovery, not only color.
- Switch is for immediate on/off settings, not form submission choices.
- Components must not create local spacing, radius, or color values.

## Accessibility

Controls require:

- keyboard operation
- visible focus
- semantic labels
- associated descriptions and errors
- sufficient target size

# Parchment Overlay System

## Purpose

Overlay components provide temporary focus layers without breaking the user's mental model.

## Components

- Dialog
- Drawer
- Modal
- Popover
- Menu surface

## Rules

All overlays must define:

- trigger relationship;
- placement behavior;
- stacking level;
- focus management;
- keyboard behavior;
- dismissal rules;
- mobile adaptation.

## Focus contract

Required behavior:

- move focus into overlay when opened;
- trap focus when modal behavior requires it;
- restore focus on close;
- support Escape dismissal where appropriate.

## Layering

Use elevation tokens only. Components must not create arbitrary z-index values.

## Mobile behavior

Desktop overlays may become:

- bottom sheets;
- full-screen panels;
- constrained dialogs.

The information hierarchy must remain unchanged.

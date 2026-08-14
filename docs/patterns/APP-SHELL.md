# Parchment App Shell Pattern

## Purpose

The App Shell defines the stable workspace frame for creator products.

## Structure

- Global Navigation
- Header / Command Bar
- Workspace Canvas
- Secondary Panel
- Inspector

## Rules

Navigation owns orientation, not temporary actions.
Header owns context and primary actions.
Canvas is the primary creative area.
Inspector provides contextual properties and AI assistance.

## Responsive

Desktop: navigation + canvas + inspector.
Tablet: collapsible navigation and drawer-based secondary panels.
Mobile: prioritize canvas and move secondary context into drawers.

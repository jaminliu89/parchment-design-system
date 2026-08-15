# Parchment Iconography Contract

## Purpose

Create one coherent icon language across the product.

## Rules

Icons must share:

- 20px coordinate grid;
- 1.75px monoline stroke;
- round caps and joins;
- `fill="none"` and `currentColor` by default;
- simple geometric construction with minimal anchor points;
- optical sizing rules for 16px, 18px, 20px and 24px render sizes;
- semantic kebab-case naming.

The visual reference is restrained editorial infrastructure: grid, block, channel, search, arrow and document forms should read as one precise geometric family. Reference products may inspire proportion, but copied trademarked assets and mixed third-party icon families are prohibited.

## Usage

Icons communicate actions, navigation, content type, status, and AI operations.

Do not:

- mix unrelated icon families;
- combine filled and outline variants without an explicit state contract;
- add decorative circles or squares without meaning;
- use color, gradients or glow to make an icon feel “AI”;
- use text glyphs, emoji or punctuation as production icons;
- use icons as replacement for hierarchy.

## Component rule

Icons are primitives. Containers, buttons, badges, and navigation define their own layout behavior.

Icon-only controls require an accessible name and a 44px minimum target. Decorative icons use `aria-hidden="true"`; meaningful standalone SVGs require an accessible label through the consuming component.

## Acceptance

Every icon usage should be understandable by name, consistent visually, and accessible. Audit at 16px and 20px for clipping, optical weight, pixel alignment and dark/light contrast.

# Migrating to Parchment Component Runtime 1.0

1. Import the complete Parchment style cascade from `parchment-design-system/styles.css`.
2. Replace product-local buttons, fields, overlays and workspace primitives with Parchment components.
3. Replace repeated application layouts with Parchment Patterns only where the semantic structure is shared across workflows.
4. Move product-local visual values into approved Parchment theme variables rather than editing component source.
5. Keep business state, data fetching and product-specific orchestration outside Patterns.
6. Validate keyboard reachability, visible focus, responsive behavior and semantic AI state before considering a migration complete.

Parchment remains the source of truth. A consumer may report missing contracts back to Parchment, but should not create a parallel component state model.
# Parchment Runtime Installation

## Package consumption

Install the package and its React peer dependencies, then import the runtime and the complete Parchment style cascade.

```tsx
import { Button, AIStatus, AppShell } from "parchment-design-system";
import "parchment-design-system/styles.css";
```

Focused imports are also available:

```tsx
import { Button } from "parchment-design-system/components";
import { AIWorkspace } from "parchment-design-system/patterns";
```

Token-only consumers may import `parchment-design-system/tokens.css`.

## Registry consumption

`registry.json` is the canonical shadcn-style distribution manifest. `registry:ui` entries are semantic components; `registry:block` entries are cross-product patterns.

## Contract

Consumers may compose and theme through documented `--p-*` variables. They must not fork component state semantics, replace product icons with text glyphs, or introduce raw visual values inside Parchment runtime source.

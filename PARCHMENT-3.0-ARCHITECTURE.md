# Parchment 3.0 — Architecture

## 01. Product thesis

Parchment is a visual operating system for creator products and AI workspaces.

**Quiet Intelligence** means:

- **Quiet UI** — chrome, borders and controls stay visually restrained.
- **Strong Content** — the user's work receives the strongest hierarchy.
- **Precise Interaction** — states, motion and affordances are explicit and predictable.

The system should feel calm before it feels impressive.

---

## 02. Visual DNA

### 2.1 Hierarchy

Every surface must answer three questions in order:

1. What is the user's current task?
2. What content is most important?
3. What action is available next?

Visual emphasis is created with this order:

`position → scale → whitespace → type → contrast → surface → border → elevation → accent`

Do not use color, shadow or decoration to solve a hierarchy problem that whitespace or typography can solve.

### 2.2 Surface hierarchy

```text
surface-0  canvas / page
surface-1  content / card
surface-2  raised / sticky / selected container
surface-3  floating / popover
surface-4  modal / command layer
```

A higher surface must have a reason to exist. Empty elevation is forbidden.

### 2.3 Shape language

Parchment no longer treats every control as a pill.

| Shape | Meaning | Typical use |
|---|---|---|
| pill | prominent, affirmative, compact | primary CTA, status chip |
| soft-rectangle | standard control | secondary button, input |
| rectangle | dense / structural | table, toolbar, editor control |
| circle | singular / symbolic | icon button, avatar |
| text | low emphasis | inline action, tertiary action |

Shape is semantic. Consistency means using the correct shape for the role, not making every component identical.

### 2.4 Contrast hierarchy

Use the smallest contrast necessary to communicate structure.

```text
primary content   → strongest
secondary content → moderate
tertiary metadata → quiet
chrome            → quietest
accent            → reserved for interaction / meaning
```

### 2.5 Optical rhythm

The system uses mathematical tokens as a starting point, then applies optical correction for typography, CJK text, icons and dense controls.

Never assume that equal numeric dimensions produce equal perceived dimensions.

---

## 03. Token architecture

```text
Primitive
  ↓
Semantic
  ↓
State
  ↓
Component
  ↓
Composition
  ↓
Theme / Density / Platform
```

### Primitive
Raw values only. Never consume primitives directly in product components.

### Semantic
Meaning such as `text.primary`, `surface.page`, `border.default`.

### State
Interaction state such as hover, pressed, selected, disabled, focus and invalid.

### Component
Component-specific contracts such as button height, input padding and dialog radius.

### Composition
Page and workspace geometry: shell, sidebar, canvas, inspector, reading width, toolbar and section rhythm.

---

## 04. Elevation and layers

Elevation is semantic, not decorative.

```text
0 canvas
1 contained surface
2 raised surface
3 popover / floating
4 modal
5 command / system overlay
```

Preferred progression:

`contrast → border → surface → shadow`

Shadow is allowed when it clarifies separation. It must never be used merely to make a component look expensive.

---

## 05. Motion grammar

Motion is described by **intent**, not only duration.

### Enter

`opacity 0→1 + translate 4px→0 + scale .98→1`

### Exit

`opacity 1→0 + translate 0→-4px + scale 1→.98`

### Expand

Use height/clip and opacity together; preserve spatial origin.

### Feedback

Use a short opacity/scale response. Never bounce by default.

### Motion levels

```text
micro     → 100–150ms
component → 150–220ms
container → 220–320ms
page      → 300–450ms
```

Respect `prefers-reduced-motion` by removing spatial transforms while retaining essential state changes.

---

## 06. Composition system

Composition is a first-class layer.

### App Shell

```text
┌──────────────────────────────────────┐
│ Header                               │
├────────┬──────────────────┬──────────┤
│ Nav    │ Primary Canvas   │ Inspector│
│        │                  │          │
└────────┴──────────────────┴──────────┘
```

### Workspace rules

- Navigation is secondary to the active canvas.
- Inspector content is contextual and collapsible.
- Toolbars use compact structural shapes rather than pill-heavy controls.
- The canvas receives the strongest whitespace budget.
- Reading surfaces use a constrained measure; editing surfaces may expand.

### Core composition tokens

```text
shell.header
shell.nav
workspace.canvas
workspace.inspector
workspace.gutter
content.reading
content.max
section.gap
```

---

## 07. Typography

Typography has two parallel concerns:

1. **UI typography** — fast scanning and controls.
2. **Content typography** — reading, writing and editorial hierarchy.

Serif is an editorial instrument, not a default decoration. Sans remains the primary UI voice.

CJK and Latin must be optically balanced. Line height, weight and tracking may differ when the perceived result is more consistent.

---

## 08. AI-native interaction

AI is represented as state and behavior, not a permanent visual theme.

Supported semantic states:

```text
ai.suggestion
ai.processing
ai.generated
ai.applied
ai.diff
ai.conflict
ai.attention
ai.confidence
ai.citation
```

Rules:

- Do not use purple as an automatic AI identifier.
- AI suggestions must remain visually subordinate to user-authored content until accepted.
- Generated changes need a reversible representation.
- Diff and conflict states must be distinguishable without relying on color alone.
- Processing states should communicate progress without creating visual noise.

---

## 09. Accessibility contract

Accessibility is a behavior contract, not a documentation claim.

Required for v3 components:

- keyboard operation
- visible focus
- semantic HTML / ARIA only when needed
- minimum touch target of 44px where applicable
- contrast checked for every semantic text/background pair
- non-color state indicators
- reduced-motion behavior

A component is not v3-complete until these behaviors can be tested.

---

## 10. Quality gate

Every v3 release must pass:

1. token reference audit
2. dark-mode audit
3. responsive audit
4. keyboard / focus audit
5. contrast audit
6. visual regression
7. component state matrix
8. composition smoke test

The target is not 'looks good in the preview'. The target is reproducible quality.

---

## 11. Migration from v2.1

v2.1 is a frozen reference. During migration:

- remove the universal-pill assumption
- replace direct color usage with semantic tokens
- replace generic shadow rules with elevation semantics
- remove emoji / text-glyph icons from UI examples
- move layout geometry into composition tokens
- add AI state tokens only where product behavior requires them

No v2 rule should be deleted merely because it is old; it should be replaced when a v3 principle provides a demonstrably better contract.

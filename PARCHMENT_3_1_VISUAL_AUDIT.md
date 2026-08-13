# Parchment 3.2 — Visual Role Audit

> Goal: remove the previous visual language rather than cosmetically patch it. The system is now neutral editorial, content-first, and iconically consistent.

## Global rules

- No blue as brand, primary action, focus, or AI accent.
- No gradients, glow, glass cards, or decorative shadows.
- One icon family: 20px grid / 1.75px stroke / round caps / round joins / currentColor.
- No emoji or text glyphs as product icons.
- No generic circular icon containers. Circle is reserved for avatar / singular status.
- Control radius: 8px. Surface radius: 12px. Status pill: 999px only.
- Content > label > icon > chrome.
- Pills communicate semantic status; they do not decorate copy.
- Minimum interactive target: 40px; compact contexts must preserve 44px accessible target via hit area.
- Focus must be visible without relying on color alone.
- Reduced motion is respected.

## Role walkthrough

### App shell
- Header is 64px and visually quiet.
- Navigation uses text-first items; icons are optional and secondary.
- Theme control is a square control, not a circular ornament.

### Navigation
- One active treatment: subtle surface fill + ink text.
- No mixed selected shapes.
- No colored icon tiles.

### Toolbar
- Icon buttons use the same 40px geometry as controls.
- Dividers are structural and sparse.
- Primary action is text-first.

### Transcript / voice
- Speaker, role, copy and timestamp have stable columns.
- Labels never float beside spoken text as a badge pile.
- AI suggestions occupy an explicit row/state, not a decorative tag attached to the sentence.
- Timestamp is metadata, not a pill.

### Tags / status
- Status pill is allowed only for compact semantic state.
- Long labels use normal text, not pills.
- Multiple status pills adjacent to content are a failure state.

### Iconography
- One visual family only.
- No outline/filled mixing within a control cluster.
- No circles around every icon.
- Icons reinforce labels; they do not become the label when ambiguous.

### Workspace
- Navigation rail is low contrast.
- Canvas receives the largest whitespace budget.
- Inspector is contextual and visually subordinate.
- Borders describe relationships; cards are not used to box every region.

### AI
- AI is a semantic behavior layer.
- Suggestion, processing, generated, applied, diff and conflict are states.
- No purple AI theme, sparkle decoration, or permanent AI glow.
- AI changes must be distinguishable structurally and be reversible.

### Empty / loading / error
- Empty states are editorial and concise.
- Loading uses restrained motion and text where needed.
- Error uses a muted semantic red, never saturated red UI chrome.

### Dark mode
- Invert surfaces and preserve hierarchy; do not simply darken the light palette.
- Neutral signal remains warm/stone rather than blue-gray.

### Mobile
- Navigation collapses without introducing a second icon language.
- Transcript changes from four columns to content-first layout.
- Controls retain touch-safe hit areas.

## Anti-patterns to reject

```text
[blue primary] + [blue badge] + [blue icon] + [circle icon]

[AI] [VOICE] [NEW] [12s] next to every sentence

○ search   □ edit   ◉ AI   pill status

card > card > card > card
```

## Acceptance gate

A page is not done until:

1. A first-time viewer can identify the content hierarchy in under three seconds.
2. Adjacent controls look like one product, not multiple component libraries.
3. Removing every icon leaves the layout understandable.
4. Removing every color except neutral still leaves states understandable through structure/labels.
5. There is no decorative shape whose only purpose is to make the UI look "AI" or "modern".
6. Transcript labels do not visually compete with spoken copy.
7. Desktop and mobile preserve the same visual grammar.

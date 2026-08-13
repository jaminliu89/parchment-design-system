# Parchment 3.2 — Full Role QA

## Acceptance model

A screen passes only when hierarchy, shape, iconography, semantic status, content density and responsive behavior all agree. Correct color alone is insufficient.

## Global gate

- [ ] No blue brand/UI accent
- [ ] No mixed icon libraries or icon styles
- [ ] No emoji/text glyphs used as product icons
- [ ] No decorative icon circles or square tiles
- [ ] 8px control radius / 12px surface radius / pills only for semantic status
- [ ] Primary action is neutral near-black / near-white
- [ ] Borders are quiet and shadows are sparse
- [ ] Content has greater visual weight than chrome
- [ ] Focus is visible without relying on color alone
- [ ] Minimum interactive target is 44px where touch interaction is expected
- [ ] Reduced-motion preference removes non-essential animation

## Role walkthrough

### 01 App shell
- [ ] Brand is typographic, not badge-like
- [ ] Header does not compete with page content
- [ ] Navigation uses one active treatment
- [ ] Theme control follows the same icon/control geometry

### 02 Navigation
- [ ] One icon family
- [ ] Icon and label share a stable baseline
- [ ] Active state is surface/weight change, not bright color
- [ ] No icon containers unless the control itself requires a hit area
- [ ] Section headings use metadata typography, not pills

### 03 Toolbar
- [ ] Primary action is visually singular
- [ ] Related actions are grouped
- [ ] Divider appears only between action groups
- [ ] Icon-only controls are 40px controls with accessible names
- [ ] Toolbar does not become a row of badges

### 04 Content / editor
- [ ] Reading width is controlled
- [ ] Editorial serif is used only where it improves reading/voice
- [ ] Metadata stays secondary
- [ ] Empty space is intentional
- [ ] Cards are not used merely to box every region

### 05 Voice / transcript
- [ ] Speaker, role, spoken content and timestamp have explicit hierarchy
- [ ] No floating label soup beside spoken text
- [ ] AI suggestion is structurally distinct from authored speech
- [ ] Time uses mono metadata styling
- [ ] Mobile collapses non-essential role information before content

Canonical structure:

```text
SPEAKER | ROLE | SPOKEN CONTENT | TIME
```

### 06 Tags / status
- [ ] Pill is reserved for compact semantic status
- [ ] Status does not become a decorative color system
- [ ] Multiple statuses do not visually overpower the content
- [ ] Dot + label is preferred when a pill adds no useful affordance

### 07 Forms
- [ ] Inputs share the same radius and height family as buttons
- [ ] Placeholder is quieter than entered content
- [ ] Focus is visible
- [ ] Error/help text has a stable reserved position
- [ ] Labels are not rendered as badges

### 08 Lists / tables
- [ ] Row hierarchy is established by typography and spacing first
- [ ] Leading icons are optional, never mandatory decoration
- [ ] Actions remain quiet until interaction
- [ ] Dividers are subtle
- [ ] Status is aligned consistently across rows

### 09 AI
- [ ] Suggestion, processing, generated, applied, diff and conflict are explicit states
- [ ] AI does not default to purple/gradient/glow
- [ ] Generated content is reversible
- [ ] Diff and conflict states are distinguishable structurally
- [ ] AI cannot visually overpower authored content

### 10 Dialog / popover
- [ ] One clear title
- [ ] One clear primary action
- [ ] Secondary action is quieter
- [ ] No nested card-in-card treatment unless content hierarchy requires it
- [ ] Focus returns to the invoking control

### 11 Empty / loading / error
- [ ] Empty state has one purpose and one next action
- [ ] Loading state does not produce decorative shimmer everywhere
- [ ] Error state explains recovery
- [ ] Status color is supplementary, not the only signal

### 12 Dark mode
- [ ] Dark mode is a material inversion, not a simple color swap
- [ ] Borders remain visible but quiet
- [ ] Text hierarchy remains intact
- [ ] Signal colors retain semantic contrast
- [ ] Shadows are reduced rather than intensified blindly

### 13 Responsive
- [ ] Desktop navigation can collapse without losing context
- [ ] Transcript preserves spoken content before metadata
- [ ] Toolbars prioritize primary actions
- [ ] Touch targets remain usable
- [ ] No horizontal overflow

## Icon QA

Canonical icon contract:

```text
20 × 20 grid
1.75px stroke
round cap
round join
currentColor
```

Reject any icon that introduces a competing visual language.

## Final visual test

View the page at normal scale for 5 seconds. The first thing perceived should be the user's content and task. If the first thing perceived is a badge, icon, border, card, AI effect, or navigation chrome, the screen fails and must be simplified.

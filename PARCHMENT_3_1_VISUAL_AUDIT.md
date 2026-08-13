# Parchment 3.1 Visual Audit

## Decision
Reset the visual language instead of polishing the current one. The old palette and mixed chrome created visual noise. Parchment now follows a neutral editorial direction: warm canvas, near-black typography, quiet borders, restrained earth signal, and one icon grammar.

## Reference principles
- Linear's March 2026 refresh: calmer, more consistent navigation and view controls; redrawn/resized icons; dimmer sidebars so content stands out.
- Raycast: a coherent outline icon family with shared stroke/radius rules and compact, action-first UI.
- Geist/Vercel: semantic neutral surfaces, borders, text/icon hierarchy, with color reserved for meaning.

## Non-negotiables
1. No blue as brand/accent color.
2. No mixed icon families.
3. No emoji or text glyphs used as product icons.
4. No decorative icon circles/squares in ordinary navigation.
5. Icon-only controls are square hit targets; the icon itself has no container unless the interaction needs one.
6. One radius language: 8px controls, 12px surfaces, 6px small structural elements; pills only for status.
7. Primary actions use ink, not accent color.
8. Signal color is semantic and sparse, never a gradient or glow.
9. Borders are structural, not decoration.
10. The canvas gets more visual weight than chrome.

## Role-by-role audit

### Navigation
- Quiet labels, one active treatment, 18–20px monochrome icons.
- No colored icon tiles.
- Active state is a neutral surface shift + text weight.

### Header
- One title, one context trail, one primary action zone.
- Avoid badge clusters beside titles.

### Content / Canvas
- Maximum whitespace. Avoid nested cards.
- Use separators only where relationships need clarification.

### Forms
- Labels sit above fields.
- Helper text is plain secondary text, not a pill.
- Validation uses semantic color + text/icon, never color alone.

### Tags / Labels
- Status tags may be pills.
- Category labels should be plain text or compact outlined labels.
- Do not put every metadata item in a rounded container.

### Voice / Copy / Transcript
- Spoken copy is content, not metadata.
- Remove decorative chips beside sentences.
- If speaker identity is needed: small mono/uppercase role label above the block; no circle unless it is an avatar.
- If timing is needed: align timestamp in a dedicated metadata column.

### AI
- AI is a behavior/state, not a permanent color theme.
- Suggestions use a quiet inset or margin marker.
- Generated text gets explicit state labels and reversible actions.
- Confidence/citation/diff are structured metadata, not floating badges.

### Tables / Lists
- Prefer rows and alignment over cards.
- Icons lead; text carries meaning; metadata recedes.

### Empty / Loading
- Empty states are typographic and spacious.
- Skeletons use surface contrast, not animation-heavy effects.

## Icon contract
20px base grid; 1.75px stroke; round caps/joins; currentColor. Optical centering over mathematical centering. 16px dense metadata, 18px normal UI, 20px primary controls, 24px feature-level. No mixed filled/outline families inside the same navigation or toolbar.

## Color contract
The palette is intentionally not blue and not a generic gray SaaS palette. Warm paper establishes identity; near-black establishes authority; muted earth signal establishes interaction/semantic emphasis. Success/warning/error are reserved for actual state communication.

## Quality gate
Before release, inspect every screen by role: shell, navigation, header, content, form, list, table, transcript/voice, AI panel, dialog, popover, empty, loading, error, dark mode, mobile. Reject any screen where a decorative container competes with content, icons change geometry, tags become noise, or color carries meaning without text/shape support.
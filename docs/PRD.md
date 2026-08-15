# Parchment 4.0 — Product Requirements

**Status:** Canonical product contract / implementation in progress
**Owner:** Product + Design Systems
**Source of truth:** `docs/MASTER-TASK.md`

## 1. Product definition

Parchment is a production-grade design system for creator software and AI-assisted creative workspaces. It should make complex creative workflows feel calm, precise, editorial, and highly legible rather than generic SaaS.

The system is not a collection of attractive components. It is a shared visual and interaction language that lets every product surface behave as one coherent product.

## 2. Product goals

1. **Coherence:** every component, state, icon, spacing decision, and surface follows one contract.
2. **Premium restraint:** visual quality comes from typography, proportion, hierarchy, materiality, and rhythm—not decoration.
3. **Creator-first clarity:** dense creative information remains scannable and controllable.
4. **AI without visual noise:** AI actions are understandable, reversible, and integrated into the workflow instead of becoming a permanent neon layer.
5. **Production readiness:** components have complete states, accessibility behavior, responsive rules, and implementation guidance.
6. **Scalability:** new products and screens can consume the same tokens and primitives without inventing local styles.

## 2.1 Desired character

Parchment should feel black-and-white led, slightly cold, humanistic, spacious, restrained, epic and modern-minimal. These qualities come from proportion, editorial typography, pacing and deliberate empty space—not cinematic effects or decorative spectacle.

- **Slightly cold:** crisp contrast and precise edges without blue-gray canvas tint.
- **Humanistic:** writing, imagery and human decisions remain warmer than the interface chrome.
- **Spacious:** empty space carries hierarchy and tempo; it is not leftover area.
- **Restrained:** one clear action and one clear reading order beat dense decoration.
- **Epic:** scale contrast and narrative rhythm create gravity without gradients, glow or ornamental drama.
- **Modern-minimal:** every visible element earns its place through information or interaction value.

## 3. Target users and jobs

### Creator
Needs to move from idea to publishable artifact quickly, with minimal cognitive overhead.

### Editor
Needs precision, dense information, reliable states, and predictable controls.

### Director
Needs to understand the whole creative plan, compare alternatives, and coordinate decisions.

### AI Assistant
Needs clear affordances for suggestion, generation, application, revision, and failure.

### Reviewer
Needs to inspect work, understand changes, and provide focused feedback.

### Viewer
Needs a clean, low-friction reading or presentation experience.

### Admin
Needs consistency, governance, configuration, and system-wide predictability.

## 4. Core product surfaces

The design system must support these representative surfaces:

- Dashboard
- Project workspace
- Script / writing editor
- Transcript / voice workspace
- Storyboard
- Timeline / sequencing
- Asset library
- AI assistant / generation panel
- Review / approval
- Settings

The system must also define shared empty, loading, error, success, permission, and offline states.

## 5. Experience principles

### 5.1 Hierarchy before decoration
A user should understand what matters first from type scale, spacing, grouping, and contrast—not from color or ornament.

Large editorial moments may use dramatic scale and generous negative space, but utility surfaces remain compact, legible and operational.

### 5.2 Quiet chrome
Navigation and utility UI should recede. The work remains the visual protagonist.

### 5.3 One visual language
No arbitrary mixture of rounded cards, circular icon containers, square icon tiles, unrelated gradients, or unrelated icon families.

### 5.4 Color is semantic
The product is visually led by black and white. White and near-white own foundational surfaces; black and near-black own content and primary actions. Gray is limited to structural hierarchy, while color exists only to communicate functional state—not brand decoration.

### 5.5 Density is intentional
Dense creator tools need compact controls, but every reduction in space must preserve scanability, touch safety, and hierarchy.

### 5.6 Every state is designed
Hover, focus, active, selected, disabled, loading, error, success, empty, and permission states are part of the product—not afterthoughts.

### 5.7 AI is reversible
Generated output should make it obvious what happened, what changed, and how to undo or reject it.

### 5.8 Content has authority
Labels, metadata, speaker roles, timestamps, helper text, and system messages must have a defined hierarchy. Decorative tags must never compete with primary content.

## 6. Quality bar

A production-ready component must satisfy all applicable requirements:

- token-driven styling;
- consistent anatomy and naming;
- complete interactive states;
- keyboard/focus behavior;
- accessible naming and contrast;
- responsive behavior;
- loading/error/empty behavior where relevant;
- composability without leaking implementation details;
- documented usage and anti-patterns;
- visual QA against the canonical reference.

## 7. Explicit visual decisions

### Retire
- warm, cloud-white, gray-cast, or tinted foundational canvases;
- blue primary SaaS treatment;
- mixed icon families;
- arbitrary icon circles and icon squares;
- excessive pills/tags;
- decorative gradients without semantic purpose;
- inconsistent corner radii;
- one-off shadows;
- component-local colors that bypass semantic tokens.

### Prefer
- white/near-white surfaces and black/near-black content;
- structural gray only for borders, disabled states, placeholders and secondary hierarchy;
- editorial typography and strong type hierarchy;
- disciplined spacing rhythm;
- subtle borders and elevation;
- consistent icon geometry;
- small, purposeful accent usage;
- content-first layouts;
- state changes communicated through structure, typography, and restrained semantic color.

## 8. Responsive requirements

The system must support desktop, tablet, and mobile. Components must define their minimum usable dimensions, collapse behavior, wrapping/truncation rules, and touch targets. Responsive changes must preserve hierarchy rather than merely shrinking desktop layouts.

## 9. Accessibility requirements

The baseline target is WCAG 2.2 AA where applicable. The system must provide visible focus, keyboard operation, semantic labeling, appropriate target sizes, sufficient contrast, reduced-motion behavior, and screen-reader-compatible status changes.

## 10. Governance

The Master Task controls execution order. New ideas do not change the mainline unless they close a documented system gap or are explicitly promoted to a higher-priority blocker. Local product requirements may extend the system, but may not silently fork its tokens or interaction contracts.

## 11. Acceptance of the product baseline

This PRD is complete when the implementation can be audited from one chain:

`Tokens → Primitives → Components → Patterns → Roles → Screens → Accessibility → Visual QA → Release`

A visual polish pass alone is not considered completion.

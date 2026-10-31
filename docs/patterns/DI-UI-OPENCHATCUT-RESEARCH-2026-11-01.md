# OpenChatCut — Design Intelligence candidate patterns
Status: source-inspected, geometry not measured, no visual E2E verification.
Reference: https://github.com/0xsline/OpenChatCut/blob/main/README_ZH.md official screenshots, https://openchatcut.com; src/theme.ts, src/skins.ts, src/components/InspectorPanel.tsx, src/components/PreviewPanel.tsx.
## Reusable patterns
- AI-editor layout: Agent chat / media tree / composited Preview / inspector / multitrack timeline with shared selection.
- State-coupled Inspector: inactive / clip / caption / multi-selected / keyframed; fold/unfold; tab state; current-frame context. Custom inspector components; shadcn/ui primitives only for shell and simple inputs.
- Preview quality: auto / original / proxy explicit states, minimize latency without making source/renderer state invisible.
- Theme token architecture: CSS vars --cc-bg, inset, panel, panel-alt, hover, border, text, accent, track and clip-kind colors; actual values from skins registry; semantic meanings, NOT arbitrary palette copying.
- Safe areas and visual geometry: test overlaid subtitle/MG vs face, framing and target aspect; require actual composed frames.
- Approval UX: read vs reversible-edit vs persistent local vs irreversible external, with consequence/recovery language in confirmation UI.
## Acceptance candidates
1440/1920/1024 layout screenshot and DOM geometry; resize and overflow; scrub-preview-inspector synchronization; clip/caption choice; drag and undo grouped history; proxy/render parity; reference capture of real composed frame; keyboard/focus; agent proposed vs committed state.
Do not treat the official screenshots as independently audited visuals; compare against Palmier and ChatCut in same-source tests.

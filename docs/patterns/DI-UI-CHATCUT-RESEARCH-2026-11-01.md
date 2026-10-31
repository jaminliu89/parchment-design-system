# ChatCut Design Intelligence — Visual/Interaction Findings
Status: competitor reference research, not captured pixel-accurate UI audit.
Official sources: https://chatcut.io/zh/features/ai-video-editor; https://chatcut.io/zh/features/ai-motion-graphics; https://chatcut.io/zh/features/ai-captions; https://chatcut.io/zh/prompt-library
Source workflow cross-check: https://github.com/ChatCut-Inc/agent-plugin/tree/main/codex/skills
## New candidate page modes
DI-UI-TRANSCRIPT-001 — editable word timeline dual-view, speaker blocks, word selection, seek sync, trim/undo, no-audio and async transcription states.
DI-UI-MOTION-001 — MG prompt, real visual references, style chooser, editable props/fonts/palette/motion, live compositing, timeline asset identity.
DI-UI-ASSET-GENERATION-001 — multi-model operation, reference asset, status/cost confirmation, variants, accept/reject, media bin, insert onto project timeline.
## Required tokens and states
Share existing parchment tokens and editor pattern; do not create a competing root theme. UX: coherent AI panel + preview + timeline; dedicated inspector for mutable generated assets. Include loading, pending, cancelled, failed, accepted, outdated, rebuilding, save/version conflict and asset-not-ready states. Real app screenshots needed before setting geometry baseline or claiming pixel parity.
## Acceptance
1. User can identify the output asset and editable scope.
2. Every word selection maps to traceable media frame range.
3. Generated MG retains editable properties and style metadata.
4. Agent commands and manual UI mutate one authoritative timeline.
5. Structure plus composited frames/audio verify success.
6. Keyboard, resize, zoom, reduced motion and error recovery tested.

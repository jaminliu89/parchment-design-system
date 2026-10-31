# Contextual Product Tour — Design Contract v0.1
Status: Research proposal, not implementation.
Reference: Palmier Pro 13-step user screenshots; Editor/Tour/TourController.swift and TourOverlay.swift; Home/Onboarding source.
## Features
Step registry; target selectors; dark scrim with spotlight region; anchored coachmark; progress x/N; Back/Next/Skip; complete/replay; persistent optional dismissal.
## States
not_started, locating_target, showing, transitioning, target_missing, suspended, completed, skipped. Missing target must not trap user; reposition on resize/panel mode/zoom.
## Design
Spotlight is only colored/high-salience border in dim background; tooltip should avoid target and viewport edges. Focus target and modal semantics require keyboard alternatives; reduced-motion support.
## Tokens & components
Shared semantic radius/z-layer/focus; custom SpotlightOverlay and TourController; shadcn Popover/Tooltip/Button/Progress used only when positioning/focus requirements fit.
## QA
13-step route screenshot regression, target rect tracking, focus/escape, back/skip persistence, small-window fallback, empty workspace, missing element, reopen after version change, accessibility narration.

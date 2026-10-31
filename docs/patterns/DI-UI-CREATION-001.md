# AI Creation Hub — Design Contract v1.0
Status: Proposed, not implemented. Reference: user-provided creation dashboard screenshots.
## Features & IA
Navigation: Home/Projects/Recent; central creation prompt; upload; model selector; preset shortcuts; grouped template galleries; recent projects; job history. P0: valid prompt, assets, model capability gate, submit, status, preview, export. P1: templates, search, reusable settings.
## States
idle -> typing -> ready -> validating -> submitting -> running -> completed; branches upload_error, submit_error, failed, offline, cancelled. Never clear prompt or assets after failure; no invented progress percentages.
## Geometry
Sidebar 272px, main max 1240px, composer max 808px/min-height 132px; gallery gap 16px; thumbnails 16:9; responsive collapse navigation, stacked controls.
## Tokens & shadcn/ui
Reuse semantic background/foreground/border/ring; composer Textarea+Button; model selector Select/Popover/Command; upload Input/Progress; card gallery Card/ScrollArea; jobs Tabs/Alert/Progress; Sidebar for navigation.
## Acceptance
No horizontal overflow at 390/768/1024/1440/1920; key edges aligned, active model authentic, upload failure recovery, keyboard focus, skeleton and error states, execution verified by backend, visual baseline plus geometry checks.

# Professional AI Video Editor — Design Contract v0.1
Status: Research proposal; not an implemented Zhijian UI.
Reference: Palmier Pro user screenshots; historical UI/WorkspaceLayout.swift, UI/AppTheme.swift, Inspector/InspectorView.swift, Timeline and Agent modules.
## Domain-specific features
Media tree+library, composited preview, clip Inspector (transform/grade/speed/audio/AI), multi-track time ruler, Agent chat, project/timeline tabs, export, project manager. Manual UI and Agent must share an authoritative edit command/undo/history layer.
## IA
Global bar, optional Agent dock, media browser, preview, inspector, bottom timeline. Workspace presets (editor/generation/direct/vertical) are a settings model; snapping panels and remembered layouts need testing.
## Interactions
Import, proxy/missing media, playback, scrub, drag, cut/ripple/slip, sync, keyframe, effects, caption, export; state idle/loading/playing/rendering/missing/offline/error/undoable. Use real frame/timecode semantics and boundary rules.
## Tokens
Candidate source-derived: 4px slider track, 10px thumb, 106px parameter label col, 96px color wheel, 180px curve editor; 9px visual curve point vs 30px hit zone. Palette layers from AppTheme historical Swift only, not asserted current version.
## Components
shadcn Resizable/Tabs/ScrollArea/Tooltip/Select/Slider/Popover/Dialog for app shell; custom timeline canvas/media renderer/curve editor/audio meter (do not pretend shadcn provides NLE).
## QA
Frame-accurate operations; A/V sync; source-vs-timeline semantics; multi-window/resizable behavior; screenshot/geometry comparison; Agent edit vs manual undo; render match and no lost edits.

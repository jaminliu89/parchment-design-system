# Agent Workflow Studio — Design Contract v1.0
Status: Proposed. Reference: OpenBot workflow screenshots.
## Functional IA
Build/Run modes; toolbar, node palette, main canvas, node inspector, collapsible run console, global navigation. P0 graph create/connect/validate/save/version/run/trace/failure; P1 approvals, branches, bounded loops, MCP & Skills, cost.
## Separate state models
Editor loading/clean/dirty/saving/invalid/published; Run queued/running/waiting_approval/succeeded/failed/cancelling/cancelled; Node pending/queued/running/blocked/failed/succeeded/skipped/timed_out. Published definition and run snapshot immutable; append run events.
## Geometry/Tokens
Topbar 56px, rail 56px, palette 256px, inspector 320px, console 240px, node 240px wide, grid 20px, ports 12px visual plus larger hit area. Mobile read/approve priority.
## Components
@xyflow/react node/edge canvas; shadcn Sidebar, Command, Resizable, Tabs, Sheet, AlertDialog, Button, Badge; custom typed ports, inspector, trace and approval surfaces. UI graph is not the execution engine.
## Gates
Type compatibility, DAG except bounded loops, service-side authorization, idempotent external actions, snapshot traceability, undo/redo, geometry, pan/zoom, keyboard access, 10/50/200 node performance tests.

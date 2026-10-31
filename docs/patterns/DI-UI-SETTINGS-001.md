# Product Settings Console — Design Contract v1.0
Status: Proposed. Reference: user-provided Qiaomu/OpenBot/Palmier settings screenshots.
## IA & features
Navigation by user intent (general, creation, models/AI, integrations, data/security, account/maintenance), then pages, then sections/items. Setting schema requires stable ID, label, description, type, scope, default/current/source, saveMode, validation, permission, secret handling, restart flag, rollback.
## States
loading, clean, dirty, validating, saving, saved, error, conflict, locked, restart-required. Immediate low-risk settings; explicit-save for credentials/complex groups; confirmed for destructive actions. Preserve dirty changes on failure.
## Geometry
Sidebar 272px; body max 820px; horizontal padding 48px; section gap 40px; row padding-y 16px; controls 240x36px; mobile Stacked and drawer navigation. Labels and controls align; exceptions documented.
## Tokens & components
Semantic themes plus settings-* geometry tokens. Sidebar/SidebarGroup, Field, Switch, Select, Input, Collapsible, Dialog, AlertDialog, Sonner, Progress; custom SettingRow, SecretInput, ProviderConfigDialog, SettingsSaveStatus.
## Gate
Test true persistence, conflict and rollback, offline, API-key non-disclosure, disabled explanations, restart state, accessibility, responsive geometries and real screenshots.

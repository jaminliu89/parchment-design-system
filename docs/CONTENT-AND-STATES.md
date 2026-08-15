# Parchment 4.0 — Content and State Contract

## Voice

Parchment uses direct, calm and specific language. Controls start with a verb and name the result: “保存草稿”, “导出字幕”, “重新连接”. Avoid slogans, blame, fake urgency and technical error codes without an explanation.

Error copy answers three questions in order: what failed, what was preserved, and what the user can do next. Destructive confirmation names the object and consequence. Success messages are brief and only appear when the resulting state is not already obvious.

## Empty states

An empty state is a valid product state, not decoration. It contains:

1. a precise state title;
2. one sentence explaining why the area is empty;
3. one primary next action when an action exists;
4. an optional secondary path such as import or documentation.

Search-with-no-results preserves the query and offers filter reset. Permission-empty states explain the missing capability without implying that data is absent. Error states must never masquerade as empty states.

## Loading and progress

- Use a skeleton when the final layout is known and loading is expected to be short.
- Use determinate progress when completion can be measured.
- Use an indeterminate spinner only for a compact action whose layout cannot be predicted.
- Preserve existing content during refresh; do not replace a usable screen with a blank loader.
- After 10 seconds, explain the delay and offer a safe retry or cancel path.
- AI processing exposes progress, cancellation and preserved user input where the operation permits it.

Reduced-motion mode removes shimmer and spatial motion. Loading status remains available to assistive technology without repetitive announcements.

## Internationalization

All product copy is externalized. Layouts tolerate at least 30% text expansion and do not encode meaning through text length. Use locale-aware date, number and time-zone formatting. Do not concatenate translated fragments.

RTL mirrors navigation, directional icons and layout flow, but not media playback direction, charts with fixed chronological axes, code or brand marks. Components expose logical properties (`inline-start`, `inline-end`) instead of hard-coded left/right assumptions.

## Data presentation

Charts use labels, shapes, patterns or direct values in addition to color. The current semantic palette is the only allowed color source; the retired graphite-blue chart sequence is not part of Parchment 4.0. Tables remain the accessible fallback for exact values.

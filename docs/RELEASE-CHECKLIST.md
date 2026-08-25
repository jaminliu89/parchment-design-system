# Parchment Component Runtime 1.0 — Release Checklist

## Required green gates

- [ ] Token generation/check
- [ ] CSS primitive generation/check
- [ ] TypeScript strict typecheck
- [ ] Runtime raw-value/glyph audit
- [ ] Complete registry integrity audit
- [ ] Runtime state + keyboard smoke tests
- [ ] axe-core accessibility smoke
- [ ] ESM/CJS + declaration bundle build
- [ ] Runtime CSS layer build
- [ ] Showcase covers representative Core / Workspace / AI-native / Pattern states

## Product/reference evidence

- [ ] Responsive behavior checked at phone/tablet/desktop widths
- [ ] Light/dark token themes checked
- [ ] Visual regression baseline recorded
- [ ] First real consumer validates runtime without forking Parchment contracts
- [ ] Second workflow/product validates official Patterns

A green package build does not automatically promote every component to `stable`. Interaction-rich components and Patterns remain alpha/experimental until their required evidence exists.

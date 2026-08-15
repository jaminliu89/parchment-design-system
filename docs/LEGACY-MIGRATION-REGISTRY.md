# Parchment Legacy Migration Registry

This registry prevents obsolete design directions from being deleted before their unique value is migrated and verified. `docs/MASTER-TASK.md` remains the execution authority.

## Lifecycle

`CONSOLIDATE_THEN_DELETE` → unique value migrated → references zero → runtime and visual checks pass → `DELETE_READY` → physical deletion.

No entry may skip a gate. A historical version label does not make a file safe to delete.

## Active inventory

| Asset | Current state | Unique value to migrate | Required zero-reference check |
|---|---|---|---|
| `Parchment-DESIGN.md` | `CONSOLIDATE_THEN_DELETE` | component anatomy, usage guidance and anti-patterns that remain valid without the retired cloud-white palette | no canonical or consumer link treats it as current |
| `parchment.tokens.json` | `CONSOLIDATE_THEN_DELETE` | any token category absent from `parchment.v3.tokens.json` | no generator, documentation or consumer import |
| `PARCHMENT-3.0-ARCHITECTURE.md` | `CONSOLIDATE_THEN_DELETE` | migration reasoning and component-layer decisions | no canonical or consumer link |
| `PARCHMENT_3_1_VISUAL_AUDIT.md` | `CONSOLIDATE_THEN_DELETE` | reusable visual QA criteria | no release gate depends on the historical filename |
| `PARCHMENT_3_2_QA.md` | `CONSOLIDATE_THEN_DELETE` | reusable product QA checks | no release gate depends on the historical filename |
| `docs/RELEASE-v1.0.md` | `CONSOLIDATE_THEN_DELETE` | release evidence worth retaining in changelog history | no current status page links to it as active release |
| `docs/UI-OS-V2-MASTER-TASK.md` | `CONSOLIDATE_THEN_DELETE` | unfinished runtime backlog | all eligible work represented in `docs/MASTER-TASK.md` |
| `docs/UI-OS-V2-ARCHITECTURE.md` | `CONSOLIDATE_THEN_DELETE` | runtime boundaries not yet present in `docs/ARCHITECTURE.md` | no unique architecture contract remains |

## Known reference correction

- The missing `PARCHMENT_ICONOGRAPHY_V3.md` README reference was migrated to `docs/ICONOGRAPHY.md` in Parchment 4.0.

## Promotion record

Nothing is `DELETE_READY`. Physical deletion is prohibited until the table records migrated evidence, zero references and passing runtime/visual verification.

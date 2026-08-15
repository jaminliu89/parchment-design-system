# Parchment Legacy Migration Registry

This registry prevents obsolete design directions from being deleted before their unique value is migrated and verified. `docs/MASTER-TASK.md` remains the execution authority.

## Lifecycle

`CONSOLIDATE_THEN_DELETE` → unique value migrated → references zero → runtime and visual checks pass → `DELETE_READY` → physical deletion.

No entry may skip a gate. A historical version label does not make a file safe to delete.

## Active inventory

| Asset | Current state | Unique value to migrate | Required zero-reference check |
|---|---|---|---|
| `Parchment-DESIGN.md` | `CONSOLIDATE_THEN_DELETE` | component anatomy, usage guidance and anti-patterns that remain valid without the retired cloud-white palette | no canonical or consumer link treats it as current |
| `parchment.tokens.json` | `DELETE_READY` | typography scale, motion and component-independent geometry migrated; cloud-white/graphite-blue palettes, universal radius scale and duplicated component styling explicitly retired | zero imports and links outside this registry; canonical token build/check passes |
| `PARCHMENT-3.0-ARCHITECTURE.md` | `DELETE_READY` | composition, motion, AI reversibility and accessibility boundaries migrated to canonical tokens and `docs/ARCHITECTURE.md` | zero canonical or consumer links outside this registry |
| `PARCHMENT_3_1_VISUAL_AUDIT.md` | `DELETE_READY` | reusable visual QA criteria migrated to `docs/QUALITY-GATE.md` | zero current references outside this registry; canonical checks pass |
| `PARCHMENT_3_2_QA.md` | `DELETE_READY` | reusable role/component QA migrated to `docs/QUALITY-GATE.md` | zero current references outside this registry; canonical checks pass |
| `docs/RELEASE-v1.0.md` | `DELETE_READY` | historical release claim replaced by evidence-based Parchment 4.0 release gate | zero current references outside this registry; canonical checks pass |
| `docs/UI-OS-V2-MASTER-TASK.md` | `DELETE_READY` | eligible runtime, component, pattern, Creator OS and release work migrated to `docs/MASTER-TASK.md`; obsolete alternate-theme plan rejected | all eligible work represented in canonical Master Task; zero links outside this registry |
| `docs/UI-OS-V2-ARCHITECTURE.md` | `DELETE_READY` | token/UI/component/pattern/product boundaries migrated to `docs/ARCHITECTURE.md` | no unique architecture contract remains; zero links outside this registry |

## Known reference correction

- The missing `PARCHMENT_ICONOGRAPHY_V3.md` README reference was migrated to `docs/ICONOGRAPHY.md` in Parchment 4.0.

## Promotion record

Only rows explicitly marked `DELETE_READY` may be physically removed. The registry retains the promotion evidence after deletion.

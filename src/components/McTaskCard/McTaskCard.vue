<script setup lang="ts">
import { computed } from 'vue'
import McBucketBadge from '../McBucketBadge/McBucketBadge.vue'

/**
 * McTaskCard — une échéance d'entretien.
 *
 * Répétée des dizaines de fois sur le lookup public, dans la flotte privée et
 * dans les emails : la factoriser ici évite la dérive garantie du copier-coller.
 *
 * Le DS reste i18n-agnostique — tous les libellés (seau, échéance, consommable)
 * sont composés par le consommateur, qui seul connaît sa locale et ses unités.
 */
const props = withDefaults(defineProps<{
  /** Libellé de la tâche, déjà traduit. */
  title: string
  bucket: 'past' | 'overdue' | 'due' | 'soon' | 'done'
  /** Libellé du seau, déjà traduit. */
  bucketLabel: string
  /** Échéance en clair : « à 250 h », « dépassé de 40 h ». */
  timing?: string
  /** Consommable : « ISO VG 46 (HV) ». Une spécification, jamais une marque. */
  consumable?: string
  /** Quantité concernée quand elle dépasse 1 (2 moteurs de translation…). */
  quantity?: number
  /** Précision d'emplacement, quand elle existe. */
  hint?: string
  /** OÙ intervenir — un élément par emplacement physique. */
  points?: { code: string, side: string | null, label: string, hint: string | null }[]
  /** COMMENT s'y prendre — la procédure, dans l'ordre. */
  steps?: { text: string, isWarning: boolean }[]
  /** Libellés localisés du dépliage (le DS est i18n-agnostique). */
  pointsLabel?: string
  stepsLabel?: string
  detailLabel?: string
  sideLabels?: Record<string, string>
}>(), {
  quantity: 1,
  // Défauts collection : une prop oubliée doit rendre un état vide, pas lever.
  points: () => [],
  steps: () => [],
  sideLabels: () => ({}),
  pointsLabel: 'Where',
  stepsLabel: 'How',
  detailLabel: 'Details',
})

/**
 * Le détail n'apparaît que s'il y a quelque chose à montrer : un dépliant vide
 * promet une aide qui n'existe pas, ce qui est pire que de ne rien proposer.
 */
const hasDetail = computed(() => props.points.length > 0 || props.steps.length > 0)
</script>

<template>
  <article class="mc-task">
    <div class="mc-task__head">
      <h3 class="mc-task__title">{{ title }}</h3>
      <McBucketBadge :bucket="bucket" :label="bucketLabel" size="sm" />
    </div>

    <p v-if="timing" class="mc-task__timing">{{ timing }}</p>
    <p v-if="hint" class="mc-task__hint">{{ hint }}</p>

    <ul v-if="consumable || quantity > 1" class="mc-task__meta">
      <li v-if="consumable">{{ consumable }}</li>
      <li v-if="quantity > 1">× {{ quantity }}</li>
    </ul>

    <!-- <details> natif : le navigateur porte l'état déplié/replié et l'annonce
         aux lecteurs d'écran. Rien à gérer, et ça fonctionne sans JavaScript. -->
    <details v-if="hasDetail" class="mc-task__detail">
      <summary class="mc-task__summary">{{ detailLabel }}</summary>

      <template v-if="points.length">
        <p class="mc-task__subtitle">{{ pointsLabel }}</p>
        <ol class="mc-task__points">
          <li v-for="point in points" :key="point.code">
            <span class="mc-task__point-label">{{ point.label }}</span>
            <span v-if="point.side && sideLabels[point.side]" class="mc-task__side">
              {{ sideLabels[point.side] }}
            </span>
            <span v-if="point.hint" class="mc-task__point-hint">{{ point.hint }}</span>
          </li>
        </ol>
      </template>

      <template v-if="steps.length">
        <p class="mc-task__subtitle">{{ stepsLabel }}</p>
        <ol class="mc-task__steps">
          <li
            v-for="(step, i) in steps" :key="i"
            :class="{ 'mc-task__step--warning': step.isWarning }"
          >{{ step.text }}</li>
        </ol>
      </template>
    </details>
  </article>
</template>

<style scoped>
.mc-task {
  background: var(--mc-color-surface, #fff);
  border: 1px solid var(--mc-color-border, #dce0e7);
  /* Le liseré reprend la couleur du seau : repère visuel en balayage rapide,
   * redondant avec la pastille — jamais porteur seul de l'information. */
  border-left: 3px solid var(--mc-color-border, #dce0e7);
  border-radius: var(--mc-radius-md, 8px);
  padding: var(--mc-space-md, 16px);
}
.mc-task:has(.mc-bucket--past)    { border-left-color: var(--mc-bucket-past, #b26a00); }
.mc-task:has(.mc-bucket--overdue) { border-left-color: var(--mc-bucket-overdue, #c0392b); }
.mc-task:has(.mc-bucket--due)     { border-left-color: var(--mc-bucket-due, #1560a8); }
.mc-task:has(.mc-bucket--soon)    { border-left-color: var(--mc-bucket-soon, #66707d); }

.mc-task__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--mc-space-sm, 8px);
  margin-bottom: var(--mc-space-xs, 4px);
}
.mc-task__title {
  margin: 0;
  font-size: var(--mc-text-md, 1rem);
  font-weight: 600;
  line-height: 1.3;
}
.mc-task__timing {
  margin: 0;
  font-size: var(--mc-text-sm, 0.875rem);
  color: var(--mc-color-muted, #5c6675);
}
.mc-task__hint {
  margin: var(--mc-space-xs, 4px) 0 0;
  font-size: var(--mc-text-xs, 0.75rem);
  color: var(--mc-color-muted, #5c6675);
}
.mc-task__meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mc-space-sm, 8px);
  margin: var(--mc-space-sm, 8px) 0 0;
  padding: 0;
  list-style: none;
  font-size: var(--mc-text-xs, 0.75rem);
  font-family: var(--mc-font-data, monospace);
  color: var(--mc-color-muted, #5c6675);
}
.mc-task__meta li {
  border: 1px solid var(--mc-color-border, #dce0e7);
  border-radius: var(--mc-radius-sm, 4px);
  padding: 2px 8px;
}

.mc-task__detail {
  margin-top: var(--mc-space-sm, 8px);
  border-top: 1px solid var(--mc-color-border, #dce0e7);
  padding-top: var(--mc-space-sm, 8px);
}
.mc-task__summary {
  /* Cible confortable : ce dépliant est utilisé avec des gants. */
  min-height: 32px;
  display: flex;
  align-items: center;
  font-size: var(--mc-text-xs, 0.75rem);
  font-weight: 700;
  color: var(--mc-color-blue-dark, #0e4478);
  cursor: pointer;
}
.mc-task__subtitle {
  margin: var(--mc-space-sm, 8px) 0 4px;
  font-size: var(--mc-text-xs, 0.75rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--mc-color-muted, #5c6675);
}
.mc-task__points,
.mc-task__steps {
  margin: 0;
  padding-left: 20px;
  font-size: var(--mc-text-sm, 0.875rem);
  line-height: 1.5;
}
.mc-task__points li,
.mc-task__steps li { margin-bottom: 6px; }
.mc-task__point-label { font-weight: 600; }
.mc-task__side {
  margin-left: 6px;
  font-size: var(--mc-text-xs, 0.75rem);
  border: 1px solid var(--mc-color-border, #dce0e7);
  border-radius: var(--mc-radius-full, 9999px);
  padding: 0 6px;
  color: var(--mc-color-muted, #5c6675);
}
.mc-task__point-hint {
  display: block;
  font-size: var(--mc-text-xs, 0.75rem);
  color: var(--mc-color-muted, #5c6675);
}
/* Une consigne de sécurité ne se distingue pas par la couleur seule : elle
 * porte aussi un liseré, lisible en noir et blanc comme en daltonisme. */
.mc-task__step--warning {
  font-weight: 600;
  color: var(--mc-color-error, #c0392b);
  border-left: 3px solid var(--mc-color-error, #c0392b);
  padding-left: 8px;
  margin-left: -11px;
  list-style-position: inside;
}
</style>

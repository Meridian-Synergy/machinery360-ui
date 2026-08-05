<script setup lang="ts">
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
withDefaults(defineProps<{
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
}>(), { quantity: 1 })
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
</style>

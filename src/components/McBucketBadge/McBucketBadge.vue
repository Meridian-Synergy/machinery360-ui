<script setup lang="ts">
/**
 * McBucketBadge — pastille de seau d'entretien.
 *
 * Les trois seaux (en retard / maintenant / bientôt) sont LE vocabulaire du
 * produit : ils doivent être identiques sur le site public, dans l'app et dans
 * les emails. D'où un composant, et des tokens `--mc-bucket-*` partagés plutôt
 * qu'une couleur choisie par écran.
 *
 * ⚠️ `past` vs `overdue` : le premier dit « c'était attendu », le second
 * « vous êtes en retard ». Le web public n'a aucun historique et n'a donc le
 * droit d'employer que `past` ; seule l'app, qui connaît la machine, peut
 * affirmer un retard. La couleur suit la certitude — ambre, pas rouge.
 *
 * ⚠️ La couleur ne porte JAMAIS l'information seule : le libellé, fourni par le
 * consommateur (le DS est i18n-agnostique), est toujours affiché. Un
 * daltonien ou une impression en noir et blanc doivent rester lisibles.
 */
withDefaults(defineProps<{
  bucket: 'past' | 'overdue' | 'due' | 'soon' | 'done'
  /** Libellé localisé — obligatoire en pratique, la couleur ne suffit pas. */
  label: string
  size?: 'sm' | 'md'
}>(), { size: 'md' })
</script>

<template>
  <span class="mc-bucket" :class="[`mc-bucket--${bucket}`, `mc-bucket--${size}`]">
    <span class="mc-bucket__dot" aria-hidden="true" />
    {{ label }}
  </span>
</template>

<style scoped>
.mc-bucket {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: var(--mc-radius-full, 9999px);
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  /* Teinte la surface du consommateur plutôt qu'un pastel figé : lisible dans
   * les deux thèmes parce que la base est son propre token de surface. */
  background: color-mix(in srgb, var(--mc-bucket-hue) 12%, var(--mc-color-surface, #fff));
  border: 1px solid color-mix(in srgb, var(--mc-bucket-hue) 40%, transparent);
  color: var(--mc-color-text, #2e3742);
}
.mc-bucket--sm { padding: 2px 8px;  font-size: var(--mc-text-xs, 0.75rem); }
.mc-bucket--md { padding: 4px 12px; font-size: var(--mc-text-sm, 0.875rem); }

.mc-bucket__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--mc-bucket-hue);
}

.mc-bucket--past    { --mc-bucket-hue: var(--mc-bucket-past, #b26a00); }
.mc-bucket--overdue { --mc-bucket-hue: var(--mc-bucket-overdue, #c0392b); }
.mc-bucket--due     { --mc-bucket-hue: var(--mc-bucket-due, #1560a8); }
.mc-bucket--soon    { --mc-bucket-hue: var(--mc-bucket-soon, #66707d); }
.mc-bucket--done    { --mc-bucket-hue: var(--mc-bucket-done, #157f4b); }
</style>

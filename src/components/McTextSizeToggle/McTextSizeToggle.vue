<script setup lang="ts">
import { computed } from 'vue'

/**
 * McTextSizeToggle — réglage de la taille du texte (A− / A / A+).
 *
 * ⚠️ Le composant ne TOUCHE À RIEN : il émet une valeur en pourcentage, et
 * c'est le consommateur qui l'applique (`--mc-font-scale` sur `<html>`) et la
 * persiste. Un composant DS qui écrirait dans le document serait impossible à
 * rendre dans Storybook sans effet de bord, et impossible à tester.
 *
 * **Prérequis côté consommateur** : toute la typographie en `rem`. Avec des
 * tailles en `px`, l'échelle n'a strictement aucun effet et le réglage paraît
 * cassé alors qu'il fonctionne.
 */
const props = withDefaults(defineProps<{
  /** Pourcentage courant. 100 = taille de référence. */
  modelValue?: number
  /** Libellés localisés — le DS est i18n-agnostique. */
  decreaseLabel?: string
  resetLabel?: string
  increaseLabel?: string
}>(), {
  modelValue: 100,
  decreaseLabel: 'Decrease text size',
  resetLabel: 'Reset text size',
  increaseLabel: 'Increase text size',
})

const emit = defineEmits<{ 'update:modelValue': [value: number] }>()

// Bornes volontairement resserrées : au-delà de 130 %, une barre de navigation
// horizontale se disloque, et l'utilisateur qui a besoin de plus est mieux servi
// par le zoom natif du navigateur, qui met toute la page à l'échelle.
const MIN = 90
const MAX = 130
const STEP = 10

const canDecrease = computed(() => props.modelValue > MIN)
const canIncrease = computed(() => props.modelValue < MAX)

const set = (value: number) => emit('update:modelValue', Math.min(MAX, Math.max(MIN, value)))
</script>

<template>
  <div class="mc-text-size" role="group">
    <button
      type="button" class="mc-text-size__btn mc-text-size__btn--sm"
      :aria-label="decreaseLabel" :disabled="!canDecrease"
      @click="set(modelValue - STEP)"
    >A−</button>

    <button
      type="button" class="mc-text-size__btn"
      :aria-label="resetLabel"
      :aria-pressed="modelValue === 100"
      @click="set(100)"
    >A</button>

    <button
      type="button" class="mc-text-size__btn mc-text-size__btn--lg"
      :aria-label="increaseLabel" :disabled="!canIncrease"
      @click="set(modelValue + STEP)"
    >A+</button>
  </div>
</template>

<style scoped>
.mc-text-size {
  display: inline-flex;
  /* ⚠️ CENTER et non baseline : avec `baseline`, le glyphe « A » remonte et se
   * désaligne des icônes voisines dans une barre de navigation. Piège vécu sur
   * wp360, corrigé une fois pour toutes ici. */
  align-items: center;
  gap: 2px;
  border: 1px solid var(--mc-color-border, #dce0e7);
  border-radius: var(--mc-radius-md, 8px);
  padding: 2px;
}

.mc-text-size__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* WCAG 2.5.8 : 24px minimum. Ces trois boutons vivent dans une barre dense,
   * donc on vise le seuil confortable sans faire exploser la hauteur. */
  min-width: 32px;
  min-height: 36px;
  padding: 0 6px;
  border: 0;
  border-radius: var(--mc-radius-sm, 4px);
  background: transparent;
  color: var(--mc-color-muted, #5c6675);
  font-family: inherit;
  /* Taille FIXE en rem indépendante de l'échelle : si ces boutons grossissaient
   * avec le réglage qu'ils commandent, l'utilisateur perdrait sa cible en la
   * réglant. */
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
}
.mc-text-size__btn--sm { font-size: 0.6875rem; }
.mc-text-size__btn--lg { font-size: 0.9375rem; }

.mc-text-size__btn:hover:not(:disabled) {
  background: var(--mc-color-bg, #f2f4f7);
  color: var(--mc-color-text, #2e3742);
}
.mc-text-size__btn[aria-pressed='true'] {
  background: var(--mc-color-bg, #f2f4f7);
  color: var(--mc-color-blue-dark, #0e4478);
}
.mc-text-size__btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>

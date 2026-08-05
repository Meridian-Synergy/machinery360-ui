<script setup lang="ts">
/**
 * McThemeToggle — bascule clair / sombre.
 *
 * Contrôlé : le composant émet, le consommateur persiste et pose
 * `data-theme` sur `<html>`. Un composant DS qui écrirait dans le document
 * serait irrendable en Storybook sans effet de bord.
 *
 * ⚠️ L'icône seule ne suffit pas : le bouton porte un nom accessible explicite
 * qui annonce l'ACTION (« passer en thème sombre »), pas l'état. Un lecteur
 * d'écran ne voit ni le soleil ni la lune.
 */
withDefaults(defineProps<{
  modelValue?: 'light' | 'dark'
  lightLabel?: string
  darkLabel?: string
}>(), {
  modelValue: 'light',
  lightLabel: 'Switch to light theme',
  darkLabel: 'Switch to dark theme',
})

const emit = defineEmits<{ 'update:modelValue': [theme: 'light' | 'dark'] }>()
</script>

<template>
  <button
    type="button"
    class="mc-theme"
    :aria-label="modelValue === 'dark' ? lightLabel : darkLabel"
    @click="emit('update:modelValue', modelValue === 'dark' ? 'light' : 'dark')"
  >
    <svg v-if="modelValue === 'dark'" viewBox="0 0 24 24" width="18" height="18"
         fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
            stroke-linecap="round" />
    </svg>
    <svg v-else viewBox="0 0 24 24" width="18" height="18"
         fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<style scoped>
.mc-theme {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* WCAG 2.5.8 : cible confortable, alignée sur les autres commandes de barre. */
  min-width: 44px;
  min-height: 44px;
  border: 1px solid var(--mc-color-border, #dce0e7);
  border-radius: var(--mc-radius-md, 8px);
  background: transparent;
  color: var(--mc-color-text, #2e3742);
  cursor: pointer;
}
.mc-theme:hover { border-color: var(--mc-color-slate, #66707d); }
</style>

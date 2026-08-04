<script setup lang="ts">
/**
 * McLoadingState — the canonical page/section loading block.
 *
 * Spinner + optional localized label, centered in a standard state container.
 * Built on McSpinner (the atom). Use this for a page or section that is
 * loading; for a small inline/widget loader use McSpinner directly.
 *
 * Never ship a text-only "Loading…" and never copy a spinner SVG into a page —
 * that is how a codebase ends up with seven different loading markups.
 *
 * The label is passed by the consumer (the DS is i18n-agnostic):
 *   <McLoadingState :label="t('common.loading')" />
 */
import McSpinner from '../McSpinner/McSpinner.vue'

withDefaults(defineProps<{
  /** Localized loading text; omit for a spinner-only block */
  label?: string
  /** Spinner diameter in pixels */
  size?: number
}>(), { size: 32 })
</script>

<template>
  <div class="mc-loading-state" role="status">
    <div class="mc-loading-state__icon"><McSpinner :size="size" /></div>
    <p v-if="label" class="mc-loading-state__label">{{ label }}</p>
  </div>
</template>

<style scoped>
.mc-loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--mc-space-sm, 8px);
  padding: var(--mc-space-2xl, 56px) var(--mc-space-lg, 24px);
  text-align: center;
}
.mc-loading-state__icon { opacity: 0.6; }
.mc-loading-state__label {
  margin: 0;
  font-size: var(--mc-text-sm, 0.875rem);
  font-weight: 600;
  color: var(--mc-color-muted, #5c6675);
}
</style>

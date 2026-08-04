<script setup lang="ts">
/**
 * McCard — the standard surface block.
 *
 * ⚠️ Uses the SURFACE token, never a hard-coded background. A card with a
 * hard-coded light background ("a light island on a dark page") turns
 * grey-on-grey the moment the consumer switches to the light theme — no
 * contrast, no shadow, invisible. Vécu wp360 2026-07-15.
 */
withDefaults(defineProps<{
  /** Removes the inner padding — for cards that host their own layout */
  flush?: boolean
  /** Semantic element to render */
  as?: string
}>(), { as: 'div' })
</script>

<template>
  <component :is="as" class="mc-card" :class="{ 'mc-card--flush': flush }">
    <slot />
  </component>
</template>

<style scoped>
.mc-card {
  background: var(--mc-color-surface, #fff);
  border: 1px solid var(--mc-color-border, #dce0e7);
  border-radius: var(--mc-radius-lg, 16px);
  box-shadow: var(--mc-shadow-xs, 0 1px 4px rgba(22, 28, 37, 0.06));
  padding: var(--mc-space-lg, 24px);
}
.mc-card--flush { padding: 0; }
</style>

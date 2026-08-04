<script setup lang="ts">
/**
 * McContainer — the shared horizontal content rail.
 *
 * Single source of truth for max-width + inline padding, so the left edge of
 * titles aligns vertically within a page and is identical across pages. Any
 * page that rolls its own max-width will drift from every other page.
 */
withDefaults(defineProps<{
  /** `narrow` for reading-width content (forms, articles) */
  width?: 'default' | 'narrow' | 'wide'
  /** Semantic element to render */
  as?: string
}>(), { width: 'default', as: 'div' })
</script>

<template>
  <component :is="as" class="mc-container" :class="`mc-container--${width}`">
    <slot />
  </component>
</template>

<style scoped>
.mc-container {
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--mc-rail-pad, 24px);
  max-width: var(--mc-rail-max, 1200px);
}
.mc-container--narrow { max-width: 720px; }
.mc-container--wide   { max-width: 1440px; }

@media (max-width: 640px) {
  .mc-container { padding-inline: var(--mc-rail-pad-mobile, 16px); }
}
</style>

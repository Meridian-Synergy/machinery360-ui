<script setup lang="ts">
import { computed } from 'vue'

/**
 * McAlert — inline message block (info / success / warning / error).
 *
 * Distinct from the three loading/empty/error states: this is a message ABOUT
 * something, not a state OF something. Don't use it as an empty state.
 *
 * The `assertive` variant is announced immediately by screen readers — reserve
 * it for errors the user must act on now; everything else stays polite.
 */
const props = withDefaults(defineProps<{
  variant?: 'info' | 'success' | 'warning' | 'error'
  /** Optional heading above the message */
  title?: string
  /** Announce immediately (role="alert") instead of politely */
  assertive?: boolean
}>(), { variant: 'info' })

const role = computed(() => (props.assertive || props.variant === 'error' ? 'alert' : 'status'))
</script>

<template>
  <div class="mc-alert" :class="`mc-alert--${variant}`" :role="role">
    <p v-if="title" class="mc-alert__title">{{ title }}</p>
    <div class="mc-alert__body"><slot /></div>
  </div>
</template>

<style scoped>
.mc-alert {
  border: 1px solid;
  border-left-width: 4px;
  border-radius: var(--mc-radius-md, 8px);
  padding: var(--mc-space-md, 16px);
  font-size: var(--mc-text-sm, 0.875rem);
  /* Tint the page surface with the status hue instead of hard-coding a pastel:
   * the result stays readable in both themes because it derives from the
   * consumer's own surface token. */
  background: color-mix(in srgb, var(--mc-alert-hue) 8%, var(--mc-color-surface, #fff));
  border-color: color-mix(in srgb, var(--mc-alert-hue) 45%, transparent);
  border-left-color: var(--mc-alert-hue);
  color: var(--mc-color-text, #2a3340);
}
.mc-alert--info    { --mc-alert-hue: var(--mc-color-info, #1e6fa8); }
.mc-alert--success { --mc-alert-hue: var(--mc-color-success, #157f4b); }
.mc-alert--warning { --mc-alert-hue: var(--mc-color-warning, #b26a00); }
.mc-alert--error   { --mc-alert-hue: var(--mc-color-error, #c0392b); }

.mc-alert__title {
  margin: 0 0 var(--mc-space-xs, 4px);
  font-weight: 700;
}
.mc-alert__body :deep(p:last-child) { margin-bottom: 0; }
.mc-alert__body :deep(p:first-child) { margin-top: 0; }
</style>

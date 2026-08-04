<script setup lang="ts">
import { computed } from 'vue'
import McSpinner from '../McSpinner/McSpinner.vue'

/**
 * McButton — the single CTA system for Machinery360.
 *
 * ⚠️ ONE button system per app. Never mix utility classes (.btn-*) with this
 * component in the same consumer: that is what produces divergent CTAs for the
 * same semantic action across pages (vécu wp360 2026-07-15). Before styling a
 * CTA, find the same semantic action elsewhere and replicate it exactly.
 *
 * Fixed semantic taxonomy — decided ONCE, not per screen:
 *   primary   → the page's main action
 *   secondary → neutral / back / cancel
 *   warning   → consequential but REVERSIBLE action
 *   danger    → destructive action
 *   ghost     → tertiary, inline
 *
 * Every variant is theme-adaptive: no `dark` prop, no hard-coded surface. A
 * variant that hard-codes a theme surface becomes invisible in the other theme.
 */
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  /** Renders <a> instead of <button> when set */
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  /** Shows a spinner and blocks interaction; keeps the label for layout stability */
  loading?: boolean
  block?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
})

const isDisabled = computed(() => props.disabled || props.loading)
const spinnerSize = computed(() => (props.size === 'lg' ? 18 : props.size === 'sm' ? 12 : 14))
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    class="mc-button"
    :class="[`mc-button--${variant}`, `mc-button--${size}`, { 'mc-button--block': block, 'mc-button--loading': loading }]"
    :href="href && !isDisabled ? href : undefined"
    :type="href ? undefined : type"
    :disabled="href ? undefined : isDisabled"
    :aria-disabled="href && isDisabled ? 'true' : undefined"
    :aria-busy="loading ? 'true' : undefined"
  >
    <McSpinner v-if="loading" :size="spinnerSize" class="mc-button__spinner" />
    <slot />
  </component>
</template>

<style scoped>
.mc-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--mc-space-sm, 8px);
  border: 1px solid transparent;
  border-radius: var(--mc-radius-md, 8px);
  font-family: inherit;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  cursor: pointer;
  transition: background var(--mc-transition-base, 0.2s ease),
              border-color var(--mc-transition-base, 0.2s ease),
              color var(--mc-transition-base, 0.2s ease);
}
.mc-button:disabled,
.mc-button[aria-disabled='true'] {
  opacity: 0.55;
  cursor: not-allowed;
}
.mc-button--block { width: 100%; }

/* Sizes — min-height keeps every variant on a 44px touch target at md/lg
 * (WCAG 2.5.8 asks 24px minimum; 44px is the comfortable target). */
.mc-button--sm { padding: 6px 12px;  font-size: var(--mc-text-xs, 0.75rem);   min-height: 32px; }
.mc-button--md { padding: 10px 18px; font-size: var(--mc-text-sm, 0.875rem);  min-height: 44px; }
.mc-button--lg { padding: 14px 26px; font-size: var(--mc-text-md, 1rem);      min-height: 52px; }

/* Primary — amber on any surface; white text works on both themes because the
 * amber is the constant, not the page background. */
.mc-button--primary {
  background: var(--mc-color-amber, #e07b18);
  color: #fff;
}
.mc-button--primary:hover:not(:disabled):not([aria-disabled='true']) {
  background: var(--mc-color-amber-dark, #b35f0c);
}

/* Secondary — outline, theme-adaptive: borrows the page's text/border tokens
 * rather than committing to a light or dark surface. */
.mc-button--secondary {
  background: transparent;
  border-color: var(--mc-color-border, #dce0e7);
  color: var(--mc-color-text, #2a3340);
}
.mc-button--secondary:hover:not(:disabled):not([aria-disabled='true']) {
  border-color: var(--mc-color-slate, #6b7583);
}

.mc-button--warning {
  background: var(--mc-color-warning, #b26a00);
  color: #fff;
}
.mc-button--danger {
  background: var(--mc-color-error, #c0392b);
  color: #fff;
}

.mc-button--ghost {
  background: transparent;
  color: var(--mc-color-amber-dark, #b35f0c);
}
.mc-button--ghost:hover:not(:disabled):not([aria-disabled='true']) {
  background: color-mix(in srgb, var(--mc-color-amber, #e07b18) 12%, transparent);
}

.mc-button__spinner { flex-shrink: 0; }
</style>

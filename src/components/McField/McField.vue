<script setup lang="ts">
import { computed, useId } from 'vue'

/**
 * McField — label + hint + error scaffolding around any control.
 *
 * Use directly when wrapping a control McInput doesn't cover (select, textarea,
 * a composite widget). McInput builds on this, so both look identical.
 *
 * The slot receives the ids to wire onto the control — always bind them, or the
 * hint and error text exist visually but are never announced:
 *   <McField label="Heures" hint="Relevé compteur" v-slot="{ controlId, describedBy }">
 *     <textarea :id="controlId" :aria-describedby="describedBy" />
 *   </McField>
 */
const props = withDefaults(defineProps<{
  label?: string
  hint?: string
  /** Error message; presence switches the field to its invalid state */
  error?: string
  required?: boolean
  /** Explicit id — otherwise one is generated */
  id?: string
  /** Visually hides the label while keeping it announced */
  hideLabel?: boolean
  /** Localized "(optional)" / "(required)" suffix — the DS is i18n-agnostic */
  requiredLabel?: string
}>(), {})

// useId() (Vue 3.5+) is stable across SSR and client hydration. A random id is
// NOT: the server renders one value, the client another, and Nuxt reports a
// hydration mismatch on every field — while `for`/`aria-describedby` silently
// point at nothing.
const generatedId = useId()
const controlId = computed(() => props.id ?? generatedId)
const hintId = computed(() => `${controlId.value}-hint`)
const errorId = computed(() => `${controlId.value}-error`)

/** Ids to put on `aria-describedby` of the control, in reading order. */
const describedBy = computed(() => {
  const ids = [props.hint ? hintId.value : null, props.error ? errorId.value : null].filter(Boolean)
  return ids.length ? ids.join(' ') : undefined
})
</script>

<template>
  <div class="mc-field" :class="{ 'mc-field--invalid': !!error }">
    <label
      v-if="label"
      class="mc-field__label"
      :class="{ 'mc-visually-hidden': hideLabel }"
      :for="controlId"
    >
      {{ label }}
      <span v-if="required && requiredLabel" class="mc-field__required">{{ requiredLabel }}</span>
    </label>

    <p v-if="hint" :id="hintId" class="mc-field__hint">{{ hint }}</p>

    <slot :control-id="controlId" :described-by="describedBy" :invalid="!!error" />

    <!-- Errors are announced when they appear, without stealing focus. -->
    <p v-if="error" :id="errorId" class="mc-field__error" role="alert">{{ error }}</p>
  </div>
</template>

<style scoped>
.mc-field {
  display: flex;
  flex-direction: column;
  gap: var(--mc-space-xs, 4px);
}
.mc-field__label {
  font-size: var(--mc-text-sm, 0.875rem);
  font-weight: 600;
  color: var(--mc-color-text, #2e3742);
}
.mc-field__required {
  font-weight: 400;
  color: var(--mc-color-muted, #5c6675);
}
.mc-field__hint {
  margin: 0;
  font-size: var(--mc-text-xs, 0.75rem);
  color: var(--mc-color-muted, #5c6675);
}
.mc-field__error {
  margin: 0;
  font-size: var(--mc-text-xs, 0.75rem);
  font-weight: 600;
  color: var(--mc-color-error, #c0392b);
}
</style>

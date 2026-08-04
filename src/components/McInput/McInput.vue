<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import McField from '../McField/McField.vue'

/**
 * McInput — the standard text input.
 *
 * ⚠️ inheritAttrs:false + v-bind="$attrs" ON THE INPUT. Without it, native
 * attributes (`required`, `minlength`, `name`, `inputmode`, `autocomplete`…)
 * land on the wrapper <div> and silently do nothing — a `required` that never
 * validates looks exactly like a working one. Vécu wp360/FDC. Binding
 * attributes by hand always misses one; forward them all.
 *
 * Password reveal (type="password", `revealable` defaults to true):
 * follows the GOV.UK pattern — the most user-tested with real screen-reader
 * users. The accessible NAME changes (Show ↔ Hide) and a polite live region
 * announces the state. Deliberately NO `aria-pressed`: GOV.UK tested it and
 * dropped it (uneven support + "pressed = shown, or about to show?"). Doing
 * both at once is the anti-pattern — double announcement.
 */
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  modelValue?: string | number
  type?: string
  label?: string
  hint?: string
  error?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  id?: string
  hideLabel?: string | boolean
  requiredLabel?: string
  /** Password reveal affordance — on by default so nobody forgets the eye */
  revealable?: boolean
  /** Localized reveal labels (DS is i18n-agnostic; English defaults) */
  revealLabel?: string
  hideRevealLabel?: string
  shownAnnouncement?: string
  hiddenAnnouncement?: string
}>(), {
  type: 'text',
  revealable: true,
  revealLabel: 'Show password',
  hideRevealLabel: 'Hide password',
  shownAnnouncement: 'Your password is visible',
  hiddenAnnouncement: 'Your password is hidden',
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const revealed = ref(false)
const inputEl = useTemplateRef<HTMLInputElement>('inputEl')

const isPassword = computed(() => props.type === 'password')
const showReveal = computed(() => isPassword.value && props.revealable && !props.disabled)
// Swap the type, never the autocomplete — password managers keep working while revealed.
const effectiveType = computed(() => (isPassword.value && revealed.value ? 'text' : props.type))
const announcement = computed(() =>
  revealed.value ? props.shownAnnouncement : props.hiddenAnnouncement,
)

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

// Re-mask on submit so a revealed password never stays on screen after login.
// Listening on the form (not the button) fires even with @submit.prevent.
function onFormSubmit() {
  revealed.value = false
}
let form: HTMLFormElement | null = null
onMounted(() => {
  form = inputEl.value?.form ?? null
  form?.addEventListener('submit', onFormSubmit)
})
onBeforeUnmount(() => form?.removeEventListener('submit', onFormSubmit))
</script>

<template>
  <McField
    :label="label"
    :hint="hint"
    :error="error"
    :required="required"
    :id="id"
    :hide-label="!!hideLabel"
    :required-label="requiredLabel"
  >
    <template #default="{ controlId, describedBy, invalid }">
      <div class="mc-input" :class="{ 'mc-input--invalid': invalid, 'mc-input--disabled': disabled }">
        <input
          :id="controlId"
          ref="inputEl"
          class="mc-input__control"
          :type="effectiveType"
          :value="modelValue"
          :placeholder="placeholder"
          :required="required"
          :disabled="disabled"
          :aria-describedby="describedBy"
          :aria-invalid="invalid ? 'true' : undefined"
          v-bind="$attrs"
          @input="onInput"
        >
        <button
          v-if="showReveal"
          type="button"
          class="mc-input__reveal"
          @click="revealed = !revealed"
        >
          {{ revealed ? hideRevealLabel : revealLabel }}
        </button>
      </div>

      <!-- The changing accessible name alone is not reliably announced; this is. -->
      <span v-if="showReveal" class="mc-visually-hidden" aria-live="polite">{{ announcement }}</span>
    </template>
  </McField>
</template>

<style scoped>
.mc-input {
  display: flex;
  align-items: stretch;
  gap: var(--mc-space-xs, 4px);
  background: var(--mc-color-surface, #fff);
  border: 1px solid var(--mc-color-border, #dce0e7);
  border-radius: var(--mc-radius-md, 8px);
  /* Follow the theme so the browser's own chrome (autofill, date/time picker
   * indicators, scrollbars) is drawn light or dark to match. Hard-coding
   * `dark` here paints the native picker glyph white on a light input —
   * invisible, and the user concludes there is no date helper at all. */
  color-scheme: var(--mc-scheme, light);
}
.mc-input:focus-within {
  border-color: var(--mc-color-amber, #e07b18);
}
.mc-input--invalid { border-color: var(--mc-color-error, #c0392b); }
.mc-input--disabled { opacity: 0.6; }

.mc-input__control {
  flex: 1;
  min-width: 0;
  min-height: 44px;
  padding: 10px 12px;
  border: 0;
  border-radius: inherit;
  background: transparent;
  color: var(--mc-color-text, #2a3340);
  font-family: inherit;
  font-size: var(--mc-text-md, 1rem);
}
.mc-input__control:focus { outline: none; }
.mc-input__control::placeholder { color: var(--mc-color-muted, #5c6675); }

/* Suppress the browser's own reveal control, else Edge shows two eyes. */
.mc-input__control::-ms-reveal,
.mc-input__control::-ms-clear { display: none; }

.mc-input__reveal {
  flex-shrink: 0;
  /* WCAG 2.5.8 asks 24px minimum for a target; 44 is the comfortable size. */
  min-height: 44px;
  padding-inline: 12px;
  border: 0;
  border-radius: inherit;
  background: transparent;
  color: var(--mc-color-amber-dark, #b35f0c);
  font-family: inherit;
  font-size: var(--mc-text-xs, 0.75rem);
  font-weight: 600;
  cursor: pointer;
}
</style>

<script setup lang="ts">
import McField from '../McField/McField.vue'

/**
 * McSelect — liste déroulante native.
 *
 * Volontairement le `<select>` du navigateur et non un dropdown maison : sur
 * mobile il ouvre le sélecteur natif, il est accessible sans travail, et il
 * gère la recherche au clavier. Un dropdown custom ne se justifie que s'il doit
 * afficher autre chose que du texte (drapeaux, vignettes).
 *
 * ⚠️ inheritAttrs:false + v-bind="$attrs" SUR le select : sans ça `required`,
 * `name` ou `autocomplete` atterrissent sur le <div> et ne font rien.
 */
defineOptions({ inheritAttrs: false })

withDefaults(defineProps<{
  modelValue?: string | number | null
  /** Défauté : un consommateur qui oublie `options` doit voir une liste vide, pas une exception. */
  options?: { value: string | number, label: string, disabled?: boolean }[]
  label?: string
  hint?: string
  error?: string
  /** Entrée neutre en tête de liste (« Choisir une marque… ») */
  placeholder?: string
  required?: boolean
  disabled?: boolean
  id?: string
  requiredLabel?: string
}>(), {
  options: () => [],
})

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <McField
    :label="label"
    :hint="hint"
    :error="error"
    :required="required"
    :id="id"
    :required-label="requiredLabel"
  >
    <template #default="{ controlId, describedBy, invalid }">
      <div class="mc-select" :class="{ 'mc-select--invalid': invalid, 'mc-select--disabled': disabled }">
        <select
          :id="controlId"
          class="mc-select__control"
          :value="modelValue ?? ''"
          :required="required"
          :disabled="disabled"
          :aria-describedby="describedBy"
          :aria-invalid="invalid ? 'true' : undefined"
          v-bind="$attrs"
          @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        >
          <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
          >
            {{ option.label }}
          </option>
        </select>
        <svg class="mc-select__chevron" viewBox="0 0 24 24" width="18" height="18"
             fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </template>
  </McField>
</template>

<style scoped>
.mc-select {
  position: relative;
  display: flex;
  align-items: center;
  background: var(--mc-color-surface, #fff);
  border: 1px solid var(--mc-color-border, #dce0e7);
  border-radius: var(--mc-radius-md, 8px);
  /* Suit le thème pour que la liste déroulante native soit dessinée assortie. */
  color-scheme: var(--mc-scheme, light);
}
.mc-select:focus-within { border-color: var(--mc-color-blue, #1560a8); }
.mc-select--invalid { border-color: var(--mc-color-error, #c0392b); }
.mc-select--disabled { opacity: 0.6; }

.mc-select__control {
  flex: 1;
  min-width: 0;
  min-height: 44px;
  padding: 10px 40px 10px 12px;
  border: 0;
  border-radius: inherit;
  background: transparent;
  color: var(--mc-color-text, #2e3742);
  font-family: inherit;
  font-size: var(--mc-text-md, 1rem);
  /* Le chevron maison remplace celui du navigateur, qui varie d'un OS à l'autre. */
  appearance: none;
}
.mc-select__control:focus { outline: none; }

.mc-select__chevron {
  position: absolute;
  right: 12px;
  pointer-events: none;
  color: var(--mc-color-muted, #5c6675);
}
</style>

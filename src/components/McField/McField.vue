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
  /**
   * Marqueur de champ obligatoire. Le DS étant i18n-agnostique, l'app passe le
   * libellé traduit (« obligatoire ») ; à défaut, l'astérisque s'affiche quand
   * même.
   *
   * ⚠️ Le défaut n'est PAS `undefined`, et c'est le cœur de la correction. Tant
   * que l'affichage dépendait d'une prop à penser, aucun formulaire ne la
   * passait : l'utilisateur découvrait qu'un champ était obligatoire en voyant
   * son enregistrement refusé. Un marqueur optionnel est un marqueur oublié.
   */
  requiredLabel?: string
}>(), { requiredLabel: '*' })

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
      <span v-if="required" class="mc-field__required">{{ requiredLabel }}</span>
    </label>

    <p v-if="hint" :id="hintId" class="mc-field__hint">{{ hint }}</p>

    <!--
      The control sits in its own box so it can be pushed to the BOTTOM of the
      field — see `.mc-field__control`. Without the wrapper there is no element
      to hang that rule on: a slot is not a box.
    -->
    <div class="mc-field__control">
      <slot :control-id="controlId" :described-by="describedBy" :invalid="!!error" />
    </div>

    <!-- Errors are announced when they appear, without stealing focus. -->
    <p v-if="error" :id="errorId" class="mc-field__error" role="alert">{{ error }}</p>
  </div>
</template>

<style scoped>
.mc-field {
  display: flex;
  flex-direction: column;
  gap: var(--mc-space-xs, 4px);
  /* Fields laid out side by side are stretched by their grid; this makes that
     height usable by the rule below. Alone, a field still measures its own
     content. */
  height: 100%;
}

/**
 * ⚠️ THE CONTROL IS PUSHED TO THE BOTTOM, and that is what keeps neighbouring
 * fields aligned.
 *
 * Two fields side by side rarely carry hints of the same height — « C'est votre
 * identifiant de connexion — il ne se modifie pas ici » wraps onto two lines
 * where « Sert aussi aux e-mails » takes one. The labels then line up while the
 * inputs sit one line apart, which reads as a mistake because it is one.
 *
 * ⚠️ Aligning the whole field to the bottom (`align-items: end` on the grid)
 * would fix the inputs and break the labels. Only the control moves.
 *
 * ⚠️ No effect on a field standing alone: with nothing stretching it, `auto`
 * has no free space to distribute.
 */
.mc-field__control {
  margin-top: auto;
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

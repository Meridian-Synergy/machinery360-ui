<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

/**
 * McLocaleSwitcher — sélecteur de langue à drapeaux.
 *
 * ⚠️ Dropdown maison, JAMAIS un `<select>` natif : le natif ne peut pas
 * afficher de drapeau et jure avec le reste de la charte.
 *
 * Le DS reste i18n-agnostique : le consommateur fournit la liste
 * `{ code, name, flag }` et pilote en `v-model`. Le composant n'appelle
 * jamais `setLocale` lui-même.
 *
 * Les drapeaux viennent de `flag-icons` (classes `fi fi-xx`). ⚠️ Sa feuille de
 * style est importée par l'APPLICATION, pas par le DS — qui n'émet que les
 * classes.
 */
const props = withDefaults(defineProps<{
  modelValue: string
  /** Défauté : un consommateur qui oublie la prop doit voir une liste vide, pas une exception. */
  locales?: { code: string, name: string, flag: string }[]
  /** Libellé accessible du déclencheur (le DS ne connaît pas la langue de l'app). */
  label?: string
}>(), {
  locales: () => [],
  label: 'Language',
})

const emit = defineEmits<{ 'update:modelValue': [code: string] }>()

const open = ref(false)
const root = useTemplateRef<HTMLElement>('root')

const current = computed(() =>
  props.locales.find(l => l.code === props.modelValue) ?? props.locales[0])

function select(code: string) {
  emit('update:modelValue', code)
  open.value = false
}

// Fermeture au clic extérieur : en phase de CAPTURE, sinon un clic sur un
// élément qui arrête la propagation laisserait le menu ouvert.
function onDocClick(e: MouseEvent) {
  if (open.value && root.value && !root.value.contains(e.target as Node)) open.value = false
}
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocClick, true)
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick, true)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div ref="root" class="mc-locale">
    <button
      type="button"
      class="mc-locale__trigger"
      :aria-label="label"
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click="open = !open"
    >
      <span v-if="current" :class="`fi fi-${current.flag}`" class="mc-locale__flag" aria-hidden="true" />
      <!-- Masqué sous 48rem : le nom est de toute façon répété dans la liste,
           et sur mobile le sélecteur ne doit pas manger une ligne entière. -->
      <span class="mc-locale__name">{{ current?.name }}</span>
      <svg class="mc-locale__chevron" viewBox="0 0 24 24" width="16" height="16"
           fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <ul v-if="open" class="mc-locale__menu" role="listbox" :aria-label="label">
      <li
        v-for="locale in locales"
        :key="locale.code"
        role="option"
        :aria-selected="locale.code === modelValue"
        class="mc-locale__option"
        :class="{ 'mc-locale__option--active': locale.code === modelValue }"
        tabindex="0"
        @click="select(locale.code)"
        @keydown.enter.prevent="select(locale.code)"
        @keydown.space.prevent="select(locale.code)"
      >
        <span :class="`fi fi-${locale.flag}`" class="mc-locale__flag" aria-hidden="true" />
        {{ locale.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.mc-locale { position: relative; }

.mc-locale__trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  /* WCAG 2.5.8 : 24px minimum pour une cible ; 44 reste confortable au pouce. */
  min-height: 44px;
  padding: 0 10px;
  border: 1px solid var(--mc-color-border, #dce0e7);
  border-radius: var(--mc-radius-md, 8px);
  background: transparent;
  color: var(--mc-color-text, #2e3742);
  font-family: inherit;
  font-size: var(--mc-text-sm, 0.875rem);
  font-weight: 600;
  cursor: pointer;
}
.mc-locale__trigger:hover { border-color: var(--mc-color-slate, #66707d); }

.mc-locale__flag {
  width: 20px;
  height: 15px;
  border-radius: 2px;
  flex-shrink: 0;
  /* Léger liseré : un drapeau à dominante blanche disparaîtrait sur fond clair. */
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12);
}

.mc-locale__menu {
  position: absolute;
  right: 0;
  top: calc(100% + 4px);
  z-index: 30;
  min-width: 180px;
  margin: 0;
  padding: 4px;
  list-style: none;
  background: var(--mc-color-surface, #ffffff);
  border: 1px solid var(--mc-color-border, #dce0e7);
  border-radius: var(--mc-radius-md, 8px);
  box-shadow: var(--mc-shadow-md, 0 4px 24px rgba(22, 28, 37, 0.12));
  max-height: 60vh;
  overflow-y: auto;
}
.mc-locale__option {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 40px;
  padding: 0 10px;
  border-radius: var(--mc-radius-sm, 4px);
  font-size: var(--mc-text-sm, 0.875rem);
  color: var(--mc-color-text, #2e3742);
  cursor: pointer;
}
.mc-locale__option:hover { background: var(--mc-color-bg, #f2f4f7); }
.mc-locale__option--active {
  font-weight: 700;
  color: var(--mc-color-blue-dark, #0e4478);
}

@media (max-width: 48rem) {
  /* Drapeau seul : le nom est répété dans la liste, et sur mobile chaque
   * pixel de la barre compte. */
  .mc-locale__name { display: none; }
  .mc-locale__trigger { padding: 0 8px; }
}
</style>

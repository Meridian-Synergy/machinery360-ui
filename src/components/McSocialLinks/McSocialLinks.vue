<script setup lang="ts">
import { computed } from 'vue'

/**
 * Liens de réseaux sociaux d'une marque, en icônes.
 *
 * ⚠️ Les icônes sont dessinées en DONNÉES DE TRACÉ, jamais en balisage injecté.
 * Une chaîne de HTML rendue par `v-html` devient une porte d'injection le jour où
 * sa source cesse d'être une constante du code — or ici les URL viennent de la
 * base, donc d'un formulaire.
 *
 * ⚠️ Une icône SEULE n'est pas un libellé. Chaque lien porte son nom de réseau en
 * texte masqué visuellement : sans lui, un lecteur d'écran annonce « lien » trois
 * fois de suite, et rien ne dit où l'on va.
 */
const props = withDefaults(defineProps<{
  /** `{ youtube: 'https://…', facebook: '…' }` — les clés inconnues sont ignorées. */
  links?: Record<string, string> | null
  /** Libellés traduits par réseau. Le DS ne connaît pas la langue de l'app. */
  labels?: Record<string, string>
  size?: number
}>(), { links: () => ({}), labels: () => ({}), size: 20 })

/** Tracés à 24×24, en aplat (`fill`) : les marques de réseaux sont des pleins. */
const ICONS: Record<string, string> = {
  youtube: 'M23 12s0-3.9-.5-5.8a3 3 0 0 0-2.1-2.1C18.5 3.6 12 3.6 12 3.6s-6.5 0-8.4.5A3 3 0 0 0 1.5 6.2C1 8.1 1 12 1 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 8.4.5 8.4.5s6.5 0 8.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8zM9.8 15.6V8.4l6.2 3.6-6.2 3.6z',
  facebook: 'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z',
  instagram: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6zm8.4-11.2a1.5 1.5 0 1 1-3.1 0 1.5 1.5 0 0 1 3.1 0z',
  linkedin: 'M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9.5h3V19zM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.6-2.5s-1.8 1.2-1.8 2.4V19h-3V9.5h2.9v1.3h.05c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19z',
  x: 'M18.2 2h3.3l-7.2 8.3L22.8 22h-6.6l-5.2-6.8L5 22H1.7l7.7-8.8L1.2 2h6.8l4.7 6.2L18.2 2zm-1.2 18h1.8L7.1 3.9H5.2L17 20z',
  tiktok: 'M16.6 5.8a4.8 4.8 0 0 1-1-1.8h-2.7v10.9a2.4 2.4 0 1 1-1.9-2.4V9.7a5.4 5.4 0 1 0 4.6 5.3V9.4c1 .7 2.3 1.1 3.6 1.1V7.8a4.8 4.8 0 0 1-2.6-2z',
}

/** Seuls les réseaux CONNUS et renseignés sont rendus. */
const entries = computed(() =>
  Object.entries(props.links ?? {})
    .filter(([key, url]) => ICONS[key] && typeof url === 'string' && url.trim())
    .map(([key, url]) => ({ key, url, path: ICONS[key]!, label: props.labels[key] ?? key })))
</script>

<template>
  <ul v-if="entries.length" class="mc-socials">
    <li v-for="e in entries" :key="e.key">
      <!-- ⚠️ `rel="noopener noreferrer"` : ces URL sont saisies, donc jamais
           sûres. Sans `noopener`, la page ouverte garde une poignée sur la
           nôtre. -->
      <a :href="e.url" target="_blank" rel="noopener noreferrer" class="mc-socials__link">
        <svg
          :width="size" :height="size" viewBox="0 0 24 24"
          fill="currentColor" aria-hidden="true"
        >
          <path :d="e.path" />
        </svg>
        <span class="mc-visually-hidden">{{ e.label }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.mc-socials { display: flex; gap: 10px; list-style: none; margin: 0; padding: 0; }
.mc-socials__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: var(--mc-radius-sm, 6px);
  color: var(--mc-color-muted, #5c6675);
}
.mc-socials__link:hover { color: var(--mc-color-blue, #1560a8); background: var(--mc-color-bg, #F2F4F7); }
.mc-socials__link:focus-visible { outline: var(--mc-focus-ring, 2px solid #1560a8); outline-offset: 2px; }
</style>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * McDocIcon — la vignette d'un document du référentiel.
 *
 * ⚠️ SVG, jamais d'emoji ni de glyphe détourné : l'emoji est rendu par la police
 * système, donc différent d'un OS à l'autre, et les lecteurs d'écran le
 * vocalisent au milieu du libellé.
 *
 * La vignette porte l'EXTENSION quand on la connaît (PDF, MP4…), et retombe sur
 * la silhouette de feuille sinon. Reconnaître un PDF d'un coup d'œil dans une
 * liste vaut mieux que lire « Manuel · manual · fr » trois fois de suite.
 */
const props = withDefaults(defineProps<{
  /** Type éditorial du document : manual, parts, quickstart, video, other. */
  kind?: string
  /** URL du document — sert à déduire l'extension réelle. */
  url?: string | null
  size?: number
}>(), { kind: 'other', url: null, size: 36 })

/**
 * L'extension prime sur le type éditorial : un « manuel » peut être une page
 * web, et c'est le FORMAT qui dit à l'utilisateur ce qui va s'ouvrir.
 */
const label = computed(() => {
  const match = (props.url ?? '').split(/[?#]/)[0]?.match(/\.([a-z0-9]{2,4})$/i)
  if (match) return match[1]!.toUpperCase()
  if (props.kind === 'video') return 'VIDÉO'
  return null
})

/** Une pastille par famille, pour que la liste se lise sans lire. */
const tone = computed(() => {
  const ext = label.value?.toLowerCase()
  if (ext === 'pdf') return 'pdf'
  if (props.kind === 'video' || ['mp4', 'mov', 'webm'].includes(ext ?? '')) return 'video'
  return 'page'
})
</script>

<template>
  <span
    class="mc-doc-icon" :class="`mc-doc-icon--${tone}`"
    :style="{ width: `${size}px`, height: `${Math.round(size * 1.25)}px` }"
  >
    <svg viewBox="0 0 32 40" class="mc-doc-icon__sheet" aria-hidden="true" focusable="false">
      <!-- Feuille au coin replié : la forme dit « document » sans un mot. -->
      <path
        d="M4 2h16l8 8v28a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
        fill="currentColor" opacity="0.12" />
      <path
        d="M4 2h16l8 8v28a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
      <path d="M20 2v8h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
    </svg>
    <span v-if="label" class="mc-doc-icon__ext">{{ label }}</span>
  </span>
</template>

<style scoped>
.mc-doc-icon {
  position: relative;
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  flex: none;
  /* Couleur portée par le conteneur : le SVG suit en `currentColor`, donc la
   * vignette s'adapte aux deux thèmes sans variante. */
  color: var(--mc-color-muted, #5c6675);
}
.mc-doc-icon--pdf { color: var(--mc-color-error, #c0392b); }
.mc-doc-icon--video { color: var(--mc-color-blue, #1560a8); }

.mc-doc-icon__sheet { position: absolute; inset: 0; width: 100%; height: 100%; }

/* L'extension est posée en bas de la feuille, sur un bandeau plein : c'est ce
 * qu'on lit en premier dans une liste. */
.mc-doc-icon__ext {
  position: relative;
  margin-bottom: 12%;
  padding: 1px 4px;
  border-radius: 2px;
  background: currentColor;
  color: var(--mc-color-surface, #ffffff);
  font-size: 0.5rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  line-height: 1.3;
}
</style>

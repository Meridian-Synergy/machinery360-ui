<script setup lang="ts">
// ⚠️ Import EXPLICITE : le DS est une bibliothèque Vue, pas une app Nuxt — il n'a
// aucun auto-import. Sans lui, le composant plante au montage (« computed is not
// defined »), ce qu'aucun typecheck ne signale.
import { computed } from 'vue'

/**
 * The initials of a person, in a coloured disc.
 *
 * ⚠️ Initials, never a photo. A profile picture would be one more thing to
 * upload, moderate, store and delete on request — for a marker whose only job is
 * to say *which account is signed in*. Initials answer that with nothing to
 * manage.
 *
 * ⚠️ The colour is DERIVED from the name, so it is stable for a given person and
 * differs between two accounts whose initials collide. It carries no meaning of
 * its own — it is a recognition aid, which is why the name is always exposed to
 * assistive technology rather than the colour.
 */
const props = withDefaults(defineProps<{
  /** Full name, e-mail, or anything identifying — initials are derived from it. */
  name: string
  /** Read by assistive technology; the disc itself is decorative. */
  label?: string
  size?: 'sm' | 'md'
}>(), { size: 'md', label: undefined })

/**
 * ⚠️ Two letters at most, and the SECOND word wins over the second letter:
 * « Denis Gosset » gives DG, not DE. A single word falls back to its first two
 * characters, and an e-mail is cut at the `@` — nobody is called « denis.gosset@… ».
 */
const initials = computed(() => {
  const cleaned = props.name.split('@')[0]!.replace(/[._-]+/g, ' ').trim()
  if (!cleaned) return '?'
  const words = cleaned.split(/\s+/).filter(Boolean)
  const raw = words.length > 1
    ? `${words[0]![0]}${words[1]![0]}`
    : cleaned.slice(0, 2)
  return raw.toUpperCase()
})

/**
 * ⚠️ A CLOSED palette, not a free hue from a hash.
 *
 * Hashing into `hsl()` is the usual shortcut and it silently produces
 * unreadable pairs — yellow-on-white, or a tone that vanishes on the dark
 * theme. These six are picked to carry white text at AA on both themes, and
 * that is checked once here rather than hoped for on every name.
 */
const PALETTE = [
  '#1560A8', // steel blue — the house colour
  '#0F766E', // teal
  '#7C3AED', // violet
  '#B45309', // amber, dark enough for white text
  '#BE123C', // crimson
  '#3F6212', // olive
] as const

const tone = computed(() => {
  let hash = 0
  for (const char of props.name) hash = (hash * 31 + char.charCodeAt(0)) >>> 0
  return PALETTE[hash % PALETTE.length]
})
</script>

<template>
  <span class="mc-avatar" :class="`mc-avatar--${size}`" :style="{ background: tone }">
    <span class="mc-visually-hidden">{{ label ?? name }}</span>
    <span aria-hidden="true">{{ initials }}</span>
  </span>
</template>

<style scoped>
.mc-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  border-radius: 999px;
  color: #fff;
  font-weight: 700;
  line-height: 1;
  /* ⚠️ Le disque garde sa taille quand l'utilisateur agrandit le texte : c'est
     un repère, pas du contenu, et il pousserait la barre haute hors de l'écran.
     Les libellés autour, eux, suivent le réglage. */
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
}
.mc-avatar--md { width: 34px; height: 34px; }
.mc-avatar--sm { width: 26px; height: 26px; font-size: 0.6875rem; }
</style>

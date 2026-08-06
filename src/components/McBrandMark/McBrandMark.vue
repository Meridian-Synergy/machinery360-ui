<script setup lang="ts">
import { computed, ref, watch } from 'vue'

/**
 * McBrandMark — la pastille d'une marque d'engin.
 *
 * ⚠️ Le logotype d'un constructeur ne nous appartient pas. On ne l'héberge donc
 * jamais : soit le catalogue porte l'URL du logo officiel, soit on dessine un
 * MONOGRAMME à partir du nom. Le repli n'est pas un pis-aller — c'est le
 * comportement par défaut, et il suffit à donner du relief à une fiche.
 *
 * La couleur du monogramme est dérivée du nom, donc stable dans le temps et
 * différente d'une marque à l'autre : deux engins de marques distinctes ne se
 * confondent pas dans une liste.
 */
const props = withDefaults(defineProps<{
  name: string
  /** URL du logo officiel. Absente ou en échec → monogramme. */
  logoUrl?: string | null
  size?: number
}>(), { logoUrl: null, size: 44 })

/**
 * Une URL qui 404 laisserait une image cassée — pire que pas d'image du tout.
 * On bascule alors sur le monogramme, et on se souvient de l'échec.
 */
const failed = ref(false)
watch(() => props.logoUrl, () => { failed.value = false })

const showLogo = computed(() => Boolean(props.logoUrl) && !failed.value)

/** Une ou deux lettres : « Rippa » → R, « JCB » → JC, « New Holland » → NH. */
const initials = computed(() => {
  const words = props.name.trim().split(/[\s-]+/).filter(Boolean)
  if (words.length === 0) return '?'
  if (words.length === 1) {
    const w = words[0]!
    return (w.length > 3 ? w.slice(0, 1) : w.slice(0, 2)).toUpperCase()
  }
  return (words[0]![0]! + words[1]![0]!).toUpperCase()
})

/**
 * Teinte dérivée du nom par une somme de codes de caractères.
 *
 * Le calcul doit rendre la MÊME couleur à chaque rendu — une teinte tirée au
 * hasard changerait à chaque navigation et la pastille cesserait d'être un
 * repère.
 */
const hue = computed(() => {
  let sum = 0
  for (const ch of props.name) sum = (sum * 31 + ch.charCodeAt(0)) % 360
  return sum
})
</script>

<template>
  <span
    class="mc-brand-mark"
    :class="{ 'mc-brand-mark--logo': showLogo }"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      fontSize: `${Math.round(size * 0.38)}px`,
      ...(showLogo ? {} : {
        background: `hsl(${hue}, 42%, 34%)`,
        color: `hsl(${hue}, 62%, 88%)`,
      }),
    }"
  >
    <img
      v-if="showLogo" :src="logoUrl!" :alt="name"
      class="mc-brand-mark__img" loading="lazy" @error="failed = true">
    <template v-else>{{ initials }}</template>
  </span>
</template>

<style scoped>
.mc-brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  border-radius: var(--mc-radius-md, 8px);
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 1;
  overflow: hidden;
  /* Le monogramme porte sa propre couleur de fond ; la bordure le pose sur la
   * surface sans qu'il flotte. */
  border: 1px solid var(--mc-color-border, #dce0e7);
}
/* Un logo officiel arrive sur fond clair ou transparent : on lui donne une
 * surface neutre plutôt que la teinte du monogramme. */
.mc-brand-mark--logo { background: var(--mc-color-white, #ffffff); padding: 4px; }
.mc-brand-mark__img { max-width: 100%; max-height: 100%; object-fit: contain; }
</style>

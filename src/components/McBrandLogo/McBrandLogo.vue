<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import McBrandMark from '../McBrandMark/McBrandMark.vue'

/**
 * McBrandLogo — le LOGOTYPE d'une marque, à son format naturel.
 *
 * Pendant de `McBrandMark`, et sa raison d'être tient en une phrase : un
 * logotype est HORIZONTAL. `McBrandMark` impose un carré ; y poser un logotype
 * l'écrase, et on perd à la fois le mot et le symbole.
 *
 * Ici, seule la HAUTEUR est contrainte. La largeur suit le rapport de l'image,
 * jusqu'à un plafond — c'est ce qui rend un logotype lisible, et c'est
 * exactement ce que le carré interdisait.
 *
 * ⚠️ Le repli n'est PAS l'icône carrée, c'est le monogramme. Un carré étiré sur
 * une bande large serait aussi laid que l'inverse.
 */
const props = withDefaults(defineProps<{
  name: string
  /** Logotype complet — l'image attendue ici. */
  logoUrl?: string | null
  /** Hauteur du logotype, en pixels. La largeur s'en déduit. */
  height?: number
  /**
   * Largeur maximale, en pixels. Sans plafond, un logotype très allongé pousse
   * le reste de la ligne hors de l'écran sur un téléphone.
   */
  maxWidth?: number
}>(), { logoUrl: null, height: 56, maxWidth: 220 })

/** Une URL qui 404 laisserait une image cassée — pire que pas d'image du tout. */
const failed = ref(false)
watch(() => props.logoUrl, () => { failed.value = false })

const showLogo = computed(() => Boolean(props.logoUrl) && !failed.value)
</script>

<template>
  <span
    v-if="showLogo"
    class="mc-brand-logo"
    :style="{ height: `${height}px`, maxWidth: `${maxWidth}px` }"
  >
    <img :src="logoUrl!" :alt="name" @error="failed = true">
  </span>

  <!-- Pas de logotype : le monogramme, à la même hauteur, pour que la ligne ne
       saute pas selon que la marque en a déposé un ou non. -->
  <McBrandMark v-else :name="name" :size="height" />
</template>

<style scoped>
.mc-brand-logo {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
}

.mc-brand-logo img {
  /* `contain` et non `cover` : on ne rogne JAMAIS un logotype — un logo amputé
   * de son mot n'est plus le logo de personne. */
  height: 100%;
  max-width: 100%;
  width: auto;
  object-fit: contain;
  display: block;
}
</style>

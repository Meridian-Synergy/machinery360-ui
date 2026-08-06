<script setup lang="ts">
import { computed, ref } from 'vue'

/**
 * McPointPlacer — poser un point sur l'image de référence d'un modèle.
 *
 * Pendant éditable de `McMachineDiagram` : celui-ci montre des points, celui-là
 * en fait poser un.
 *
 * ⚠️ Les coordonnées sont NORMALISÉES (0–1), jamais en pixels. L'image est
 * rendue à des tailles différentes selon l'écran ; un point stocké en pixels
 * désignerait un autre endroit sur un téléphone que sur un portable. C'est aussi
 * ce qui permet de comparer deux placements faits sur deux appareils.
 */
const props = withDefaults(defineProps<{
  src: string
  alt: string
  /** Points déjà posés sur ce modèle — pour ne pas redésigner le même. */
  existing?: { id: string, code: string, x: number, y: number, state?: string }[]
  /** Libellé du point qu'on demande de poser. */
  targetLabel?: string
  hint?: string
  disabled?: boolean
}>(), { existing: () => [], targetLabel: '', hint: '', disabled: false })

/** Position proposée, en coordonnées normalisées. */
const model = defineModel<{ x: number, y: number } | null>({ default: null })

const figure = ref<HTMLElement | null>(null)

/**
 * Convertit un événement de pointeur en coordonnées normalisées.
 *
 * ⚠️ On mesure l'IMAGE, pas son conteneur. Une image en `object-fit: contain`
 * laisse des bandes vides autour d'elle : mesurer le conteneur décalerait tous
 * les points de la largeur de ces bandes, silencieusement.
 */
function place(event: PointerEvent) {
  if (props.disabled) return
  const img = figure.value?.querySelector('img')
  if (!img) return

  const rect = img.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width
  const y = (event.clientY - rect.top) / rect.height

  // Un clic sur la bordure ne doit pas produire une coordonnée hors image.
  model.value = {
    x: Math.min(1, Math.max(0, Number(x.toFixed(4)))),
    y: Math.min(1, Math.max(0, Number(y.toFixed(4)))),
  }
}

/**
 * Déplacement au clavier — 1 % par pression, 5 % avec Maj.
 *
 * ⚠️ Sans ça, poser un point est impossible sans souris ni écran tactile. Une
 * tâche de contribution qui exclut une partie des contributeurs se prive
 * exactement des gens les plus méticuleux.
 */
function nudge(dx: number, dy: number, event: KeyboardEvent) {
  if (props.disabled || !model.value) return
  event.preventDefault()
  const step = event.shiftKey ? 0.05 : 0.01
  model.value = {
    x: Math.min(1, Math.max(0, model.value.x + dx * step)),
    y: Math.min(1, Math.max(0, model.value.y + dy * step)),
  }
}

const percent = (v: number) => `${(v * 100).toFixed(2)}%`
const placed = computed(() => model.value !== null)
</script>

<template>
  <div class="mc-placer">
    <p v-if="targetLabel" class="mc-placer__target">{{ targetLabel }}</p>
    <p v-if="hint" class="mc-placer__hint">{{ hint }}</p>

    <figure
      ref="figure"
      class="mc-placer__figure"
      :class="{ 'mc-placer__figure--disabled': disabled }"
      @pointerdown="place"
    >
      <img :src="src" :alt="alt" draggable="false">

      <!-- Les points DÉJÀ posés, en retrait : ils situent sans détourner. Sans
           eux, on redésigne le graisseur voisin sans le savoir. -->
      <span
        v-for="point in existing" :key="point.id"
        class="mc-placer__existing"
        :class="{ 'mc-placer__existing--disputed': point.state === 'disputed' }"
        :style="{ left: percent(point.x), top: percent(point.y) }"
        :title="point.code"
        aria-hidden="true"
      />

      <!-- Le point en cours, focusable : c'est lui qu'on déplace au clavier. -->
      <button
        v-if="model"
        type="button"
        class="mc-placer__pin"
        :style="{ left: percent(model.x), top: percent(model.y) }"
        :aria-label="targetLabel || alt"
        @click.stop
        @keydown.left="nudge(-1, 0, $event)"
        @keydown.right="nudge(1, 0, $event)"
        @keydown.up="nudge(0, -1, $event)"
        @keydown.down="nudge(0, 1, $event)"
      />
    </figure>

    <p class="mc-placer__coords" aria-live="polite">
      <template v-if="placed">{{ percent(model!.x) }} · {{ percent(model!.y) }}</template>
      <slot v-else name="empty" />
    </p>
  </div>
</template>

<style scoped>
.mc-placer__target { margin: 0 0 4px; font-weight: 700; }
.mc-placer__hint {
  margin: 0 0 12px;
  font-size: 0.875rem;
  color: var(--mc-color-muted, #5c6675);
  max-width: 65ch;
}

.mc-placer__figure {
  position: relative;
  margin: 0;
  display: inline-block;
  max-width: 100%;
  border: 1px solid var(--mc-color-border, #dce0e7);
  border-radius: var(--mc-radius-md, 8px);
  background: var(--mc-color-white, #ffffff);
  cursor: crosshair;
  /* Le geste de placement ne doit pas être avalé par le défilement tactile. */
  touch-action: none;
  overflow: hidden;
}
.mc-placer__figure--disabled { cursor: not-allowed; opacity: 0.6; }
.mc-placer__figure img { display: block; max-width: 100%; height: auto; user-select: none; }

.mc-placer__existing,
.mc-placer__pin {
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

/* Existant : discret, pour situer sans détourner l'attention du geste. */
.mc-placer__existing {
  width: 10px;
  height: 10px;
  background: var(--mc-color-slate, #66707d);
  border: 2px solid var(--mc-color-white, #fff);
  opacity: 0.7;
}
/* Un point contesté se distingue par sa FORME autant que par sa couleur :
 * l'information ne doit jamais tenir à la seule teinte. */
.mc-placer__existing--disputed {
  background: var(--mc-bucket-past, #b26a00);
  border-radius: 2px;
}

.mc-placer__pin {
  width: 18px;
  height: 18px;
  padding: 0;
  background: var(--mc-color-blue, #1560a8);
  border: 3px solid var(--mc-color-white, #fff);
  box-shadow: 0 0 0 1px var(--mc-color-blue, #1560a8);
  cursor: grab;
}
.mc-placer__pin:focus-visible {
  outline: var(--mc-focus-ring, 2px solid #1560a8);
  outline-offset: 3px;
}

.mc-placer__coords {
  margin: 8px 0 0;
  font-family: var(--mc-font-data, monospace);
  font-size: 0.8125rem;
  color: var(--mc-color-muted, #5c6675);
  min-height: 1.2em;
}
</style>

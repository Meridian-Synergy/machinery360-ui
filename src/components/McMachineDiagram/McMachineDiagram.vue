<script setup lang="ts">
import { computed, ref } from 'vue'

/**
 * McMachineDiagram — silhouette d'engin avec points repérés.
 *
 * ⚠️ Ce dessin est le NÔTRE. Il n'est pas décalqué d'une planche constructeur :
 * reproduire ou redessiner une planche de manuel serait une contrefaçon, alors
 * que le FAIT « il y a un graisseur au pied de flèche » est une réalité
 * mécanique que personne ne possède. On reprend l'information, jamais le trait.
 *
 * Conséquence heureuse : une seule silhouette par famille couvre tout le
 * catalogue — Rippa, Takeuchi, Kubota — au lieu d'une planche par modèle.
 *
 * ⚠️ Les libellés vivent HORS de l'image, en calque. Une vue sert donc les
 * 29 langues ; du texte incrusté en demanderait 29, et une flèche mal placée se
 * corrigerait au pixel au lieu d'être une ligne à modifier.
 */
const props = withDefaults(defineProps<{
  /** Points à repérer, coordonnées normalisées 0–1. */
  points?: { code: string, label: string, x: number, y: number, hint?: string | null }[]
  /** Famille d'engin — seule `mini-excavator` est dessinée pour l'instant. */
  shape?: 'mini-excavator'
  /** Titre accessible du schéma : une image sans description n'existe pas pour un lecteur d'écran. */
  title?: string
}>(), {
  points: () => [],
  shape: 'mini-excavator',
  title: 'Machine diagram',
})

const active = ref<string | null>(null)

// Coordonnées 0–1 → repère du viewBox.
const W = 400
const H = 260
const at = (p: { x: number, y: number }) => ({ cx: p.x * W, cy: p.y * H })

const numbered = computed(() => props.points.map((p, i) => ({ ...p, n: i + 1, ...at(p) })))
</script>

<template>
  <figure class="mc-diagram">
    <svg
      :viewBox="`0 0 ${W} ${H}`" class="mc-diagram__svg"
      role="img" :aria-label="title"
    >
      <!-- Silhouette : traits simples et reconnaissables. Le but est de SITUER,
           pas de représenter fidèlement une machine particulière. -->
      <g class="mc-diagram__body" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <!-- Train de roulement -->
        <rect x="112" y="196" width="256" height="42" rx="21" />
        <circle cx="140" cy="217" r="12" />
        <circle cx="340" cy="217" r="12" />
        <path d="M160 231h160" class="mc-diagram__hint" />

        <!-- Châssis et couronne d'orientation -->
        <path d="M190 196v-14h130v14" />
        <path d="M206 172h96" stroke-dasharray="4 3" />

        <!-- Tourelle, capot et arceau de cabine -->
        <path d="M206 172v-44h34l14-24h74a10 10 0 0 1 10 10v58" />
        <path d="M304 104V74h44v30" />
        <path d="M348 104v68" />
        <path d="M262 148h48v24h-48z" />

        <!-- Lame -->
        <path d="M92 196h44v-18H92z" />
        <path d="M136 186l52 8" />

        <!-- Flèche, balancier, godet -->
        <path d="M224 122L140 66l-28 40" stroke-width="9" />
        <path d="M112 106l-24 62" stroke-width="8" />
        <path d="M88 168l-22 12 4 24 28 6 10-22z" stroke-width="4" />

        <!-- Vérins -->
        <path d="M212 146l-72-48" stroke-dasharray="3 3" />
        <path d="M132 86l-46 38" stroke-dasharray="3 3" />
        <path d="M84 118l-16 44" stroke-dasharray="3 3" />
      </g>

      <!-- Repères : cercle numéroté, cliquable. -->
      <g class="mc-diagram__points">
        <g
          v-for="point in numbered" :key="point.code"
          class="mc-diagram__point"
          :class="{ 'mc-diagram__point--on': active === point.code }"
          tabindex="0" role="button"
          :aria-label="point.label"
          @click="active = active === point.code ? null : point.code"
          @keydown.enter.prevent="active = active === point.code ? null : point.code"
          @mouseenter="active = point.code"
          @mouseleave="active = null"
        >
          <circle :cx="point.cx" :cy="point.cy" r="11" class="mc-diagram__halo" />
          <circle :cx="point.cx" :cy="point.cy" r="8.5" class="mc-diagram__disc" />
          <text :x="point.cx" :y="point.cy + 3.2" class="mc-diagram__num">{{ point.n }}</text>
        </g>
      </g>
    </svg>

    <!-- La légende est du TEXTE, pas des pixels : traduisible, sélectionnable,
         lisible par un lecteur d'écran, et utilisable si le SVG ne charge pas. -->
    <figcaption class="mc-diagram__legend">
      <ol>
        <li
          v-for="point in numbered" :key="point.code"
          :class="{ 'mc-diagram__legend-item--on': active === point.code }"
          @mouseenter="active = point.code"
          @mouseleave="active = null"
        >
          <span class="mc-diagram__legend-num">{{ point.n }}</span>
          <span>
            {{ point.label }}
            <em v-if="point.hint">{{ point.hint }}</em>
          </span>
        </li>
      </ol>
    </figcaption>
  </figure>
</template>

<style scoped>
.mc-diagram {
  margin: 0;
  display: grid;
  gap: var(--mc-space-md, 16px);
}
@media (min-width: 44rem) {
  .mc-diagram { grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); align-items: start; }
}

.mc-diagram__svg {
  width: 100%;
  height: auto;
  background: var(--mc-color-surface, #ffffff);
  border: 1px solid var(--mc-color-border, #dce0e7);
  border-radius: var(--mc-radius-md, 8px);
}

.mc-diagram__body {
  stroke: var(--mc-color-slate, #66707d);
  stroke-width: 3;
}
.mc-diagram__hint { stroke-width: 2; opacity: 0.5; }

.mc-diagram__point { cursor: pointer; }
.mc-diagram__halo { fill: var(--mc-color-surface, #ffffff); opacity: 0.9; }
.mc-diagram__disc {
  fill: var(--mc-color-blue, #1560a8);
  transition: r var(--mc-transition-fast, 0.1s ease);
}
.mc-diagram__num {
  fill: #fff;
  font-size: 10px;
  font-weight: 700;
  text-anchor: middle;
  pointer-events: none;
}
.mc-diagram__point--on .mc-diagram__disc { fill: var(--mc-color-blue-dark, #0e4478); r: 11; }
.mc-diagram__point:focus-visible { outline: var(--mc-focus-ring, 2px solid #1560a8); }

.mc-diagram__legend ol {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: none;
}
.mc-diagram__legend li {
  display: flex;
  gap: 8px;
  align-items: baseline;
  padding: 4px 6px;
  border-radius: var(--mc-radius-sm, 4px);
  font-size: var(--mc-text-sm, 0.875rem);
  line-height: 1.4;
}
.mc-diagram__legend-item--on { background: var(--mc-color-bg, #f2f4f7); }
.mc-diagram__legend-num {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--mc-color-blue, #1560a8);
  color: #fff;
  font-size: var(--mc-text-xs, 0.75rem);
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.mc-diagram__legend em {
  display: block;
  font-style: normal;
  font-size: var(--mc-text-xs, 0.75rem);
  color: var(--mc-color-muted, #5c6675);
}
</style>

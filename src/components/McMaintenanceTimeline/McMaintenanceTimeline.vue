<script setup lang="ts">
import { computed } from 'vue'

/**
 * McMaintenanceTimeline — les échéances situées sur l'axe des heures.
 *
 * ⚠️ Une timeline par PALIER, jamais par occurrence.
 *
 * Les intervalles vont de 8 h à 2000 h. En échelle linéaire, tout le début
 * s'écrase contre l'origine et devient illisible ; et une tâche à 8 h produirait
 * des dizaines de points sur la vie d'une machine. On regroupe donc par palier
 * — 50 h, 200 h, 250 h, 500 h, 1000 h — ce qui est exactement la façon dont un
 * manuel constructeur s'organise, donc la structure mentale que l'utilisateur a
 * déjà.
 *
 * L'espacement est RÉGULIER et non proportionnel : c'est un fil de jalons, pas
 * une règle graduée. Un axe à l'échelle collerait 50 h et 250 h l'un contre
 * l'autre pour laisser un vide jusqu'à 2000 h.
 */
const props = withDefaults(defineProps<{
  /** Compteur courant, en heures. */
  hours: number
  /** Échéances : chacune porte le palier auquel elle tombe. */
  milestones?: { dueAtHours: number, bucket: 'past' | 'overdue' | 'due' | 'soon', count: number }[]
  /** Libellés localisés (le DS est i18n-agnostique). */
  nowLabel?: string
  hoursUnit?: string
  taskLabel?: (count: number) => string
  /**
   * Libellé du point d'ORIGINE (0 h). Absent = pas d'origine affichée.
   *
   * ⚠️ Sans lui, la frise commence au compteur courant et ne dit rien de la
   * distance parcourue : « 182 h · 200 h » se lit comme deux jalons voisins,
   * alors que l'un est presque toute la vie de la machine et l'autre le
   * prochain rendez-vous. Ancrer à zéro rend l'échelle lisible.
   */
  originLabel?: string
}>(), {
  milestones: () => [],
  nowLabel: 'Now',
  hoursUnit: 'h',
  originLabel: undefined,
})

/**
 * Le repère « maintenant » se glisse entre deux jalons, à sa place réelle dans
 * l'ordre — sans lui, l'utilisateur voit des échéances sans savoir de quel côté
 * il se trouve, ce qui est toute l'information qu'il cherche.
 */
const items = computed(() => {
  const sorted = [...props.milestones].sort((a, b) => a.dueAtHours - b.dueAtHours)
  const idx = sorted.findIndex(m => m.dueAtHours > props.hours)
  const at = idx === -1 ? sorted.length : idx

  // L'origine ne s'affiche que si le compteur l'a dépassée : sur une machine à
  // 0 h, « 0 h » et « vous êtes ici » désigneraient le même instant.
  const origin = props.originLabel && props.hours > 0
    ? [{ kind: 'origin' as const, dueAtHours: 0, bucket: 'past' as const, count: 0 }]
    : []

  return [
    ...origin,
    ...sorted.filter(m => m.dueAtHours > 0).slice(0, at).map(m => ({ kind: 'milestone' as const, ...m })),
    { kind: 'now' as const, dueAtHours: props.hours, bucket: 'due' as const, count: 0 },
    ...sorted.slice(at).map(m => ({ kind: 'milestone' as const, ...m })),
  ]
})
</script>

<template>
  <div class="mc-timeline">
    <ol class="mc-timeline__track">
      <li
        v-for="(item, i) in items" :key="`${item.kind}-${item.dueAtHours}-${i}`"
        class="mc-timeline__item"
        :class="[
          `mc-timeline__item--${item.kind === 'now' ? 'now' : item.bucket}`,
          {
            'mc-timeline__item--now': item.kind === 'now',
            'mc-timeline__item--origin': item.kind === 'origin',
          },
        ]"
      >
        <span class="mc-timeline__dot" aria-hidden="true" />
        <span class="mc-timeline__hours">
          {{ item.dueAtHours }} {{ hoursUnit }}
        </span>
        <span class="mc-timeline__label">
          <template v-if="item.kind === 'now'">{{ nowLabel }}</template>
          <template v-else-if="item.kind === 'origin'">{{ originLabel }}</template>
          <template v-else-if="taskLabel">{{ taskLabel(item.count) }}</template>
          <template v-else>{{ item.count }}</template>
        </span>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.mc-timeline {
  /* Défilement horizontal contenu : sur mobile, un fil de huit jalons ne tient
   * pas, et le faire déborder de la page casserait toute la mise en page. */
  overflow-x: auto;
  padding-bottom: 8px;
}

.mc-timeline__track {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin: 0;
  padding: 24px 4px 0;
  list-style: none;
  min-width: min-content;
}

.mc-timeline__item {
  position: relative;
  flex: 1 0 auto;
  min-width: 92px;
  padding: 0 6px;
  text-align: center;
  font-size: var(--mc-text-xs, 0.75rem);
}

/* Le fil : un trait continu derrière les pastilles. */
.mc-timeline__item::before {
  content: '';
  position: absolute;
  top: -12px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--mc-color-border, #dce0e7);
}
.mc-timeline__item:first-child::before { left: 50%; }
.mc-timeline__item:last-child::before { right: 50%; }

.mc-timeline__dot {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--mc-color-surface, #ffffff);
  border: 3px solid var(--mc-color-slate, #66707d);
}
.mc-timeline__item--past .mc-timeline__dot    { border-color: var(--mc-bucket-past, #b26a00); }
.mc-timeline__item--overdue .mc-timeline__dot { border-color: var(--mc-bucket-overdue, #c0392b); }
.mc-timeline__item--due .mc-timeline__dot     { border-color: var(--mc-bucket-due, #1560a8); }
.mc-timeline__item--soon .mc-timeline__dot    { border-color: var(--mc-bucket-soon, #66707d); }

/* « Maintenant » : repère plein et non cerclé, pour se distinguer d'une
 * échéance au premier coup d'œil — la forme porte l'information, pas seulement
 * la couleur. */
.mc-timeline__item--now .mc-timeline__dot {
  background: var(--mc-color-text, #2e3742);
  border-color: var(--mc-color-text, #2e3742);
  width: 12px;
  height: 12px;
  top: -17px;
}

/* L'origine est un repère de contexte, pas une échéance : elle s'efface au
 * profit de ce qui est actionnable. */
.mc-timeline__item--origin .mc-timeline__dot {
  border-color: var(--mc-color-slate, #66707d);
  background: var(--mc-color-slate, #66707d);
  width: 10px;
  height: 10px;
  top: -16px;
}
.mc-timeline__item--origin .mc-timeline__hours,
.mc-timeline__item--origin .mc-timeline__label { color: var(--mc-color-muted, #5c6675); }
.mc-timeline__item--origin .mc-timeline__hours { font-weight: 400; }

.mc-timeline__hours {
  display: block;
  font-family: var(--mc-font-data, monospace);
  font-weight: 700;
  color: var(--mc-color-text, #2e3742);
}
.mc-timeline__label {
  display: block;
  margin-top: 2px;
  color: var(--mc-color-muted, #5c6675);
  line-height: 1.3;
}
.mc-timeline__item--now .mc-timeline__label {
  color: var(--mc-color-text, #2e3742);
  font-weight: 700;
}
</style>

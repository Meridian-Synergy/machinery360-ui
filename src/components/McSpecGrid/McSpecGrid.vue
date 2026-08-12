<script setup lang="ts">
/**
 * McSpecGrid — les caractéristiques d'un engin, en tuiles à icônes.
 *
 * ⚠️ CE COMPOSANT N'A PAS ÉTÉ ÉCRIT DE ZÉRO. La décision « tuiles à icônes,
 * deux colonnes en mobile, quatre au-delà » existait déjà dans
 * `waypoint360-ui/src/components/WpSpecGrid`. C'est la DÉCISION qui est portée
 * ici, pas l'implémentation — trois choses en diffèrent, et chacune répond à un
 * besoin que l'original n'avait pas :
 *
 *   1. LE « NON CONNU » EST DE PREMIER RANG. `WpSpecGrid` prend `value: string`
 *      et affiche ce qu'on lui donne ; ici `value: null` a un rendu à lui. C'est
 *      toute la raison d'être de la grille sur ce produit : sur les 22 modèles
 *      Rippa dépouillés, deux n'ont aucune caractéristique publiée et la
 *      puissance de quatre autres est invérifiable. Masquer les trous ferait
 *      passer une fiche incomplète pour une fiche complète.
 *
 *   2. LES COULEURS SONT DES TOKENS. L'original fige un fond navy — la charte
 *      d'un autre produit. Ici tout passe par `--mc-*`, avec fallback.
 *
 *   3. PAS DE `v-html` POUR LES ICÔNES. L'original injecte du SVG en chaîne ;
 *      les tracés sont ici des `<path :d>` déclaratifs. Une icône n'a aucune
 *      raison d'ouvrir une porte à l'injection de balisage.
 *
 * ⚠️ LE DS RESTE i18n-AGNOSTIQUE : le consommateur passe les libellés ET les
 * valeurs DÉJÀ FORMATÉES. « 10,2 kW » ou « 10.2 kW » dépend de la locale, que ce
 * composant n'a pas à connaître.
 */
import { computed } from 'vue'

export interface McSpecItem {
  /** Clé contractuelle servie par l'API — sert à choisir l'icône. */
  key: string
  /** Libellé localisé par le consommateur. */
  label: string
  /** Valeur déjà formatée, unité comprise. `null` = non connu. */
  value: string | null
  /**
   * OÙ RENSEIGNER **CETTE** CARACTÉRISTIQUE — rendu seulement si `value` est
   * `null`.
   *
   * ⚠️ L'URL est CONSTRUITE PAR LE CONSOMMATEUR, jamais dérivée ici. Le DS ne
   * connaît ni le plan de route de l'app, ni le nom des paramètres : lui faire
   * concaténer `?spec=` + `key` l'aurait rendu solidaire d'une application
   * précise, et cassable par un déménagement de route qu'il ne verrait pas
   * passer.
   *
   * ⚠️ Distinct de `contributeHref`, qui vise la grille ENTIÈRE. Les deux
   * cohabitent : le lien global reste la porte pour qui veut aider sans savoir
   * quoi, celui-ci sert qui a l'information sous les yeux.
   */
  contributeHref?: string
}

const props = withDefaults(defineProps<{
  items: McSpecItem[]
  /** Le libellé du « non connu », localisé. Obligatoire : c'est du VRAI texte. */
  unknownLabel: string
  /** Titre de la section. */
  label?: string
  /** L'itération constructeur — « R13-4 ». Affichée telle quelle. */
  iteration?: string | null
  /** D'où viennent les valeurs, et comment l'annoncer. */
  source?: string | null
  sourceLabel?: string
  /** Invitation à contribuer, affichée seulement s'il manque quelque chose. */
  contributeLabel?: string
  contributeHref?: string
  /**
   * Le libellé du lien PAR TUILE — court, il se répète autant de fois qu'il
   * manque de valeurs.
   *
   * ⚠️ Il ne remplace pas `contributeLabel` : « Compléter les caractéristiques »
   * a un sens sous la grille et aucun dans une tuile de 120 px. Deux portées,
   * deux libellés.
   *
   * ⚠️ Le nom accessible du lien reprend le LIBELLÉ DE LA TUILE
   * (« Renseigner : Poids en ordre de marche »). Douze liens qui s'annoncent
   * tous « Renseigner » sont, pour un lecteur d'écran, douze fois le même lien.
   */
  contributeItemLabel?: string
}>(), {
  label: '',
  iteration: null,
  source: null,
  sourceLabel: '',
  contributeLabel: '',
  contributeHref: '',
  contributeItemLabel: '',
})

/**
 * Les tracés, par clé. Tableau de `d` : une icône à plusieurs traits n'a pas à
 * devenir une chaîne de balisage pour autant.
 *
 * ⚠️ Une clé inconnue retombe sur une icône neutre plutôt que sur un trou : le
 * jour où l'API servira une caractéristique de plus, la tuile s'affichera —
 * sans son icône, mais avec sa valeur. L'inverse (ne rien afficher) ferait
 * disparaître une donnée vraie pour un défaut d'illustration.
 */
const ICONS: Record<string, string[]> = {
  engine:            ['M4 9h3l2-3h6l2 3h3v7h-3v3H7v-3H4z', 'M9 12h6'],
  power:             ['M13 3 5 14h6l-1 7 8-11h-6z'],
  weight:            ['M6 8h12l2 12H4z', 'M9 8a3 3 0 0 1 6 0'],
  bucket:            ['M4 7h16l-2 10H6z', 'M8 17v3', 'M16 17v3'],
  digging_depth:     ['M12 4v13', 'm7 12 5 5 5-5', 'M4 20h16'],
  digging_reach:     ['M4 20 20 6', 'M14 6h6v6', 'M4 20h4'],
  dump_height:       ['M12 20V7', 'm7 12 5-5 5 5', 'M4 20h16'],
  travel_speed:      ['M12 13a8 8 0 0 1 8-8', 'M12 13 17 8', 'M4 19h16'],
  gradeability:      ['M4 19 20 7', 'M4 19h16', 'M4 19V7'],
  track_width:       ['M4 12h16', 'm7 9-3 3 3 3', 'm17 9 3 3-3 3'],
  transport_length:  ['M3 12h18', 'm6 9-3 3 3 3', 'm18 9 3 3-3 3', 'M9 5h6v14H9z'],
  transport_width:   ['M5 6v12', 'M19 6v12', 'M5 12h14'],
  transport_height:  ['M12 3v18', 'm9 6 3-3 3 3', 'm9 18 3 3 3-3'],
  fuel_tank:         ['M5 20V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v14', 'M4 20h12', 'M14 9h3v8a2 2 0 0 0 2 2'],
  hydraulic_pressure: ['M12 21a7 7 0 0 0 7-7c0-4-7-11-7-11S5 10 5 14a7 7 0 0 0 7 7z'],
  hydraulic_flow:    ['M4 8h10a3 3 0 0 1 0 6H7a3 3 0 0 0 0 6h13', 'M17 5l3 3-3 3'],
  battery:           ['M3 8h15v8H3z', 'M18 11h3v2h-3z', 'M7 12h6'],
  unknown:           ['M12 17h.01', 'M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7'],
}

const icon = (key: string) => ICONS[key] ?? ICONS.unknown!

const missingCount = computed(() => props.items.filter(i => i.value === null).length)
</script>

<template>
  <section v-if="items.length" class="mc-spec-grid">
    <header v-if="label || iteration" class="mc-spec-grid__head">
      <p v-if="label" class="mc-spec-grid__label">{{ label }}</p>
      <!--
        L'itération n'est pas décorative : Rippa fait évoluer un modèle sans le
        renommer. Le propriétaire d'une itération antérieure doit pouvoir voir,
        sans chercher, que ces cotes ne sont peut-être pas les siennes.
      -->
      <p v-if="iteration" class="mc-spec-grid__iteration">{{ iteration }}</p>
    </header>

    <ul class="mc-spec-grid__grid">
      <li
        v-for="item in items"
        :key="item.key"
        class="mc-spec-grid__card"
        :class="{ 'mc-spec-grid__card--unknown': item.value === null }"
      >
        <svg
          class="mc-spec-grid__icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            v-for="(d, i) in icon(item.value === null ? 'unknown' : item.key)"
            :key="i"
            :d="d"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span class="mc-spec-grid__key">{{ item.label }}</span>

        <!--
          ⚠️ Le « non connu » est du TEXTE, pas un style. Un tiret grisé se lit
          comme un zéro à l'impression, et un lecteur d'écran n'en dit rien.
        -->
        <span
          class="mc-spec-grid__val"
          :class="{ 'mc-spec-grid__val--unknown': item.value === null }"
        >{{ item.value ?? unknownLabel }}</span>

        <!--
          ⚠️ UN LIEN À CÔTÉ DU « NON CONNU », jamais À LA PLACE. Faire du « non
          connu » lui-même un lien donnerait douze liens nommés « non connu » —
          illisible au lecteur d'écran, et trompeur : le texte annoncerait un
          état, le lien promettrait une action.

          ⚠️ Le trou est le seul endroit où l'invitation a un sens. Sur une
          valeur connue, elle proposerait de corriger ce que personne n'a
          signalé comme faux — c'est le rôle du signalement, pas de la grille.
        -->
        <a
          v-if="item.value === null && item.contributeHref && contributeItemLabel"
          class="mc-spec-grid__fill"
          :href="item.contributeHref"
          :aria-label="`${contributeItemLabel} : ${item.label}`"
        >{{ contributeItemLabel }}</a>
      </li>
    </ul>

    <footer v-if="source || (contributeHref && missingCount)" class="mc-spec-grid__foot">
      <p v-if="source" class="mc-spec-grid__source">
        <span v-if="sourceLabel" class="mc-spec-grid__source-label">{{ sourceLabel }}</span>
        {{ source }}
      </p>
      <!--
        L'invitation n'apparaît QUE s'il manque quelque chose : proposer de
        compléter une grille complète use la proposition pour rien.
      -->
      <a
        v-if="contributeHref && contributeLabel && missingCount"
        class="mc-spec-grid__contribute"
        :href="contributeHref"
      >{{ contributeLabel }}</a>
    </footer>
  </section>
</template>

<style scoped>
.mc-spec-grid {
  padding: var(--mc-space-lg, 24px) 0;
}

.mc-spec-grid__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--mc-space-md, 16px);
  margin-bottom: var(--mc-space-md, 16px);
  flex-wrap: wrap;
}

.mc-spec-grid__label {
  font-family: var(--mc-font-display, sans-serif);
  font-size: var(--mc-text-xs, 0.75rem);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--mc-color-muted, #5C6675);
  margin: 0;
}

.mc-spec-grid__iteration {
  margin: 0;
  font-family: var(--mc-font-data, monospace);
  font-size: var(--mc-text-xs, 0.75rem);
  color: var(--mc-color-muted, #5C6675);
  border: 1px solid var(--mc-color-border, #DCE0E7);
  border-radius: var(--mc-radius-full, 9999px);
  padding: 2px 10px;
}

.mc-spec-grid__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--mc-space-sm, 8px);
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (min-width: 768px) {
  .mc-spec-grid__grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

.mc-spec-grid__card {
  display: flex;
  flex-direction: column;
  gap: var(--mc-space-xs, 4px);
  padding: 14px var(--mc-space-md, 16px);
  background: var(--mc-color-surface, #fff);
  border: 1px solid var(--mc-color-border, #DCE0E7);
  border-radius: var(--mc-radius-md, 8px);
  min-width: 0;
}

/*
 * La tuile inconnue est CREUSE, pas absente : trait discontinu, fond de page.
 * Elle se distingue au premier coup d'œil sans crier — ce n'est pas une erreur,
 * c'est une case à remplir.
 */
.mc-spec-grid__card--unknown {
  background: transparent;
  border-style: dashed;
}

.mc-spec-grid__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--mc-color-blue, #1560A8);
}

.mc-spec-grid__card--unknown .mc-spec-grid__icon {
  color: var(--mc-color-muted, #5C6675);
  opacity: 0.6;
}

.mc-spec-grid__key {
  font-family: var(--mc-font-display, sans-serif);
  font-size: var(--mc-text-xs, 0.75rem);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mc-color-muted, #5C6675);
}

.mc-spec-grid__val {
  font-size: var(--mc-text-md, 1rem);
  font-weight: 600;
  color: var(--mc-color-text, #2E3742);
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.mc-spec-grid__val--unknown {
  font-weight: 500;
  font-style: italic;
  color: var(--mc-color-muted, #5C6675);
}

.mc-spec-grid__foot {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--mc-space-md, 16px);
  flex-wrap: wrap;
  margin-top: var(--mc-space-md, 16px);
}

.mc-spec-grid__source {
  margin: 0;
  font-size: var(--mc-text-xs, 0.75rem);
  color: var(--mc-color-muted, #5C6675);
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.mc-spec-grid__source-label {
  font-weight: 600;
  margin-right: 4px;
}

.mc-spec-grid__contribute {
  font-size: var(--mc-text-sm, 0.875rem);
  font-weight: 600;
  color: var(--mc-color-blue, #1560A8);
  white-space: nowrap;
}

/*
 * ⚠️ AUCUNE RÈGLE DE THÈME SOMBRE ICI, ET C'EST VOULU : `tokens.css` remappe
 * déjà `--mc-color-blue` sur sa variante claire sous `[data-theme='dark']`,
 * parce que le bleu d'action tombe à 2,67:1 sur fond sombre. Redéclarer la
 * bascule dans le composant créerait un second endroit à corriger le jour où la
 * charte bougera — et c'est toujours celui-là qu'on oublie.
 */

/**
 * ⚠️ Discret par construction : la grille dit d'abord ce qu'on sait. Un lien
 * d'appel à contribution sur douze tuiles, en pleine couleur, transformerait
 * une fiche technique en formulaire.
 */
.mc-spec-grid__fill {
  margin-top: 2px;
  font-size: var(--mc-text-xs, 0.75rem);
  font-weight: 600;
  color: var(--mc-color-blue, #1560a8);
  text-decoration: none;
}
.mc-spec-grid__fill:hover { text-decoration: underline; }
.mc-spec-grid__fill:focus-visible {
  outline: var(--mc-focus-ring, 2px solid #1560a8);
  outline-offset: 2px;
  border-radius: var(--mc-radius-sm, 6px);
}
</style>

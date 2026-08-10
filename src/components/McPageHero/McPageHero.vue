<script setup lang="ts">
import McContainer from '../McContainer/McContainer.vue'

/**
 * Le bandeau de tête d'une page publique — titre, chapô, surtitre, actions.
 *
 * ⚠️ CE COMPOSANT EXISTE PARCE QUE SA CSS ÉTAIT ÉCRITE DIX FOIS. Mesuré sur
 * `machinery360-web` le 2026-08-10 : dix pages portaient un bandeau
 * rigoureusement identique — `--mc-color-steel`, texte blanc, `padding-block:
 * 48px` — sous DIX noms de classe différents (`hero`, `acc__hero`, `acct__hero`,
 * `acci__hero`, `page__hero`, `model__hero`, `brand__hero`, `brands__hero`,
 * `engine__hero`, `engines__hero`), chacun redéclaré dans son `<style scoped>`.
 *
 * ⚠️ Le problème n'était PAS l'apparence — elle était déjà homogène. C'était
 * l'absence de composant : la onzième page s'écrit à la main, un peu
 * différemment, et personne ne le voit. Six pages n'avaient d'ailleurs aucun
 * bandeau, dont deux pages de catalogue dont toutes les sœurs en ont un.
 *
 * ⚠️ PAS DE VARIANTE « légère » pour les pages légales. Une exception oblige à
 * connaître la règle ET sa dérogation — c'est exactement ce qui refabrique
 * l'hétérogénéité qu'on corrige. Une page sobre se contente de ne passer que
 * `title` : `eyebrow`, `lead` et les actions sont facultatifs.
 */
withDefaults(defineProps<{
  /** Le titre de la page. Rendu en `h1` : il n'y en a qu'un par page. */
  title: string
  /**
   * Le fil d'Ariane, du plus général au plus précis — SANS la page courante :
   * elle est déjà le `h1` juste en dessous.
   *
   * ⚠️ Un maillon sans `to` se rend en TEXTE, pas en lien mort. Le dernier
   * maillon d'un fil est le seul que l'on ne clique jamais, et un lien qui
   * ramène sur la page où l'on est déjà est une impasse annoncée comme un
   * chemin.
   *
   * ⚠️ C'est le fil VISIBLE. Les données structurées `BreadcrumbList` restent
   * l'affaire de `useBreadcrumb` côté site : les deux décrivent le même chemin
   * mais ne s'adressent pas au même lecteur, et le design system n'a pas à
   * connaître Schema.org.
   */
  breadcrumb?: { label: string, to?: string }[]
  /** Étiquette accessible du fil — traduite par le consommateur, jamais ici. */
  breadcrumbLabel?: string
  /** Surtitre court — rubrique, marque, famille. */
  eyebrow?: string
  /** Une phrase, pas un paragraphe : la lisibilité tombe au-delà de 68 caractères. */
  lead?: string
  /** Largeur du conteneur, alignée sur le corps de la page. */
  width?: 'default' | 'narrow' | 'wide'
}>(), {
  /**
   * ⚠️ Une FABRIQUE, pas `[]`. Un littéral serait partagé par toutes les
   * instances du composant : deux bandeaux sur la même page se renverraient le
   * même tableau, et une mutation de l'un toucherait l'autre.
   */
  breadcrumb: () => [],
})
</script>

<template>
  <section class="mc-page-hero">
    <McContainer :width="width">
      <!-- ⚠️ Un `nav` NOMMÉ : une page peut porter plusieurs `nav`, et sans
           étiquette un lecteur d'écran les annonce toutes « navigation ». -->
      <nav v-if="breadcrumb?.length" class="mc-page-hero__crumbs" :aria-label="breadcrumbLabel">
        <ol class="mc-page-hero__crumb-list">
          <li v-for="(crumb, i) in breadcrumb" :key="i" class="mc-page-hero__crumb">
            <component :is="crumb.to ? 'a' : 'span'" :href="crumb.to" class="mc-page-hero__crumb-link">
              {{ crumb.label }}
            </component>
            <!-- ⚠️ Le séparateur est DÉCORATIF et masqué : sans ça, un lecteur
                 d'écran énonce « barre oblique » entre chaque maillon. -->
            <span aria-hidden="true" class="mc-page-hero__sep">/</span>
          </li>
        </ol>
      </nav>
      <!-- ⚠️ Le surtitre vient AVANT le `h1` visuellement, mais il n'est pas un
           titre : le mettre en `h2` casserait le plan du document, et un lecteur
           d'écran annoncerait une section vide. -->
      <p v-if="eyebrow" class="mc-page-hero__eyebrow">{{ eyebrow }}</p>
      <h1 class="mc-page-hero__title">{{ title }}</h1>
      <p v-if="lead" class="mc-page-hero__lead">{{ lead }}</p>
      <div v-if="$slots.actions" class="mc-page-hero__actions">
        <slot name="actions" />
      </div>
    </McContainer>
  </section>
</template>

<style scoped>
.mc-page-hero {
  background: var(--mc-color-steel, #2e3742);
  color: #fff;
  padding-block: var(--mc-space-2xl, 48px);
  margin-bottom: var(--mc-space-lg, 24px);
}
.mc-page-hero__crumbs { margin-bottom: var(--mc-space-sm, 8px); }
.mc-page-hero__crumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: var(--mc-text-sm, 0.875rem);
}
.mc-page-hero__crumb { display: flex; align-items: center; gap: 6px; }
/* ⚠️ Le dernier séparateur disparaît en CSS plutôt qu'en `v-if` : la condition
   dans le template obligerait à connaître l'index, et se trompe au premier
   maillon masqué. */
.mc-page-hero__crumb:last-child .mc-page-hero__sep { display: none; }
.mc-page-hero__sep { opacity: 0.45; }
a.mc-page-hero__crumb-link {
  color: var(--mc-color-blue-on-dark, #74b4ee);
  text-decoration: underline;
  text-underline-offset: 2px;
}
span.mc-page-hero__crumb-link { opacity: 0.75; }

.mc-page-hero__eyebrow {
  margin: 0 0 6px;
  font-size: var(--mc-text-sm, 0.875rem);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  /* ⚠️ Le bleu SUR FOND SOMBRE, pas le bleu de marque : celui-ci descend à
     2,1:1 sur le navy et devient illisible. */
  color: var(--mc-color-blue-on-dark, #74b4ee);
}
.mc-page-hero__title {
  margin: 0 0 12px;
  /* La borne haute tient sur mobile sans césure ; la basse reste au-dessus du
     corps de texte. */
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.2;
}
.mc-page-hero__lead {
  margin: 0;
  /* ⚠️ 68 caractères : au-delà, l'œil perd la ligne suivante en revenant à la
     marge. C'est la seule contrainte de largeur du bandeau. */
  max-width: 68ch;
  opacity: 0.88;
  line-height: 1.6;
}
.mc-page-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mc-space-sm, 8px);
  margin-top: var(--mc-space-md, 16px);
}
</style>

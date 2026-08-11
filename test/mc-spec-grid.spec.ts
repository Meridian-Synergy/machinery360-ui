// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import McSpecGrid from '../src/components/McSpecGrid/McSpecGrid.vue'

const items = [
  { key: 'engine', label: 'Moteur', value: 'Kubota D722' },
  { key: 'power', label: 'Puissance', value: null },
  { key: 'weight', label: 'Poids', value: '1 323 kg' },
]

/**
 * LE « NON CONNU » EST LA RAISON D'ÊTRE DE CE COMPOSANT.
 *
 * ⚠️ Sur les 22 modèles Rippa dépouillés, la moitié a des trous : le R82 n'a pas
 * de portée publiable, le R10 pas de puissance (trois motorisations), aucune
 * grosse pelle ne porte de réservoir. Masquer une tuile vide ferait passer
 * « nous ne l'avons pas » pour « la machine ne l'a pas » — la seconde
 * affirmation est fausse, et le lecteur n'a aucun moyen de la vérifier.
 */
describe('McSpecGrid — le « non connu »', () => {
  it('garde la tuile et écrit le libellé en TOUTES LETTRES', () => {
    const w = mount(McSpecGrid, { props: { items, unknownLabel: 'Non connu' } })

    expect(w.findAll('.mc-spec-grid__card')).toHaveLength(3)
    // ⚠️ Du vrai texte, pas un tiret grisé : un tiret se lit comme un zéro à
    // l'impression, et un lecteur d'écran n'en dit rien.
    expect(w.text()).toContain('Non connu')
  })

  it('marque la tuile creuse d’une classe, pour qu’elle se distingue sans se cacher', () => {
    const w = mount(McSpecGrid, { props: { items, unknownLabel: 'Non connu' } })
    expect(w.findAll('.mc-spec-grid__card--unknown')).toHaveLength(1)
  })
})

describe('McSpecGrid — l’invitation à contribuer', () => {
  /**
   * ⚠️ Elle n'a de sens que s'il manque quelque chose. Proposer de compléter une
   * fiche complète use la proposition pour rien — et le jour où elle compterait,
   * elle serait déjà devenue du décor.
   */
  it('ne s’affiche pas quand toutes les valeurs sont connues', () => {
    const w = mount(McSpecGrid, {
      props: {
        items: items.map(i => ({ ...i, value: i.value ?? '10 kW' })),
        unknownLabel: 'Non connu',
        contributeLabel: 'Compléter',
        contributeHref: '/contribuer',
      },
    })
    expect(w.find('.mc-spec-grid__contribute').exists()).toBe(false)
  })

  it('s’affiche dès qu’une valeur manque', () => {
    const w = mount(McSpecGrid, {
      props: {
        items,
        unknownLabel: 'Non connu',
        contributeLabel: 'Compléter',
        contributeHref: '/contribuer',
      },
    })
    expect(w.find('.mc-spec-grid__contribute').attributes('href')).toBe('/contribuer')
  })
})

describe('McSpecGrid — les garde-fous', () => {
  /**
   * ⚠️ Rippa fait évoluer un modèle SANS le renommer : le « R13 Pro » vendu
   * aujourd'hui est un R13-4. Taire le numéro laisserait le propriétaire d'une
   * itération antérieure croire que ces cotes sont les siennes.
   */
  it('affiche l’itération constructeur quand elle est connue', () => {
    const w = mount(McSpecGrid, { props: { items, unknownLabel: '—', iteration: 'R13-4' } })
    expect(w.find('.mc-spec-grid__iteration').text()).toBe('R13-4')
  })

  it('ne rend rien du tout sans tuile — pas une section vide', () => {
    const w = mount(McSpecGrid, { props: { items: [], unknownLabel: 'Non connu' } })
    expect(w.find('.mc-spec-grid').exists()).toBe(false)
  })

  /**
   * ⚠️ Les icônes sont des `<path :d>` déclaratifs, jamais du `v-html`. Une clé
   * inconnue retombe sur l'icône neutre : une caractéristique nouvelle doit
   * s'afficher même sans son dessin — l'inverse ferait disparaître une donnée
   * vraie pour un défaut d'illustration.
   */
  it('dessine une icône même pour une clé qu’elle ne connaît pas', () => {
    const w = mount(McSpecGrid, {
      props: { items: [{ key: 'slew_speed', label: 'Rotation', value: '9 tr/min' }], unknownLabel: '—' },
    })
    expect(w.findAll('.mc-spec-grid__icon path').length).toBeGreaterThan(0)
    expect(w.html()).not.toContain('<span v-html')
  })
})

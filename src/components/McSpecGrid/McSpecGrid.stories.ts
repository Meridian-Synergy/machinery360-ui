import type { Meta, StoryObj } from '@storybook/vue3'
import McSpecGrid from './McSpecGrid.vue'

const meta: Meta<typeof McSpecGrid> = {
  title: 'Components/McSpecGrid',
  component: McSpecGrid,
}
export default meta

type Story = StoryObj<typeof McSpecGrid>

/** Une mini-pelle bien documentée : douze tuiles, aucune vide. */
const R13 = [
  { key: 'engine', label: 'Moteur', value: 'Kubota D722' },
  { key: 'power', label: 'Puissance', value: '10,2 kW' },
  { key: 'weight', label: 'Poids', value: '1 323 kg' },
  { key: 'bucket', label: 'Godet', value: '0,014 m³' },
  { key: 'digging_depth', label: 'Profondeur', value: '2 044 mm' },
  { key: 'digging_reach', label: 'Portée', value: '3 456 mm' },
  { key: 'dump_height', label: 'Déversement', value: '1 922 mm' },
  { key: 'travel_speed', label: 'Vitesse', value: '2,8 km/h' },
  { key: 'gradeability', label: 'Inclinaison', value: '30 %' },
  { key: 'track_width', label: 'Chenilles', value: '750 – 990 mm' },
  { key: 'fuel_tank', label: 'Réservoir', value: '10 L' },
  { key: 'hydraulic_pressure', label: 'Pression', value: '17 MPa' },
]

export const Complete: Story = {
  args: {
    label: 'Caractéristiques',
    iteration: 'R13-4',
    items: R13,
    unknownLabel: 'Non connu',
    sourceLabel: 'Source :',
    source: 'Fiche officielle rippa.com/product/mini-excavator-r13 · réservoir et pression : manuel R13 V4.1.1 p. 108',
  },
}

/**
 * ⚠️ LE CAS QUI JUSTIFIE LE COMPOSANT, et il n'a rien de marginal.
 *
 * Sur les 22 modèles Rippa dépouillés, la moitié a des trous : le R82 n'a pas de
 * portée publiable (sa fiche annonce 137,9 in pour 6 502 mm), le R10 n'a pas de
 * puissance (trois motorisations), et aucune grosse pelle ne porte de réservoir.
 *
 * La tuile creuse dit « nous ne l'avons pas ». Une tuile masquée dirait « cette
 * machine ne l'a pas » — ce qui est faux, et invérifiable par le lecteur.
 */
export const AvecTrous: Story = {
  name: 'Avec des « non connu »',
  args: {
    label: 'Caractéristiques',
    items: [
      { key: 'engine', label: 'Moteur', value: 'Yanmar' },
      { key: 'power', label: 'Puissance', value: '45 kW' },
      { key: 'weight', label: 'Poids', value: '8 200 kg' },
      { key: 'bucket', label: 'Godet', value: null },
      { key: 'digging_depth', label: 'Profondeur', value: '4 172 mm' },
      { key: 'digging_reach', label: 'Portée', value: null },
      { key: 'dump_height', label: 'Déversement', value: '5 257 mm' },
      { key: 'travel_speed', label: 'Vitesse', value: '4,4 km/h' },
      { key: 'transport_length', label: 'Longueur', value: null },
      { key: 'transport_width', label: 'Largeur', value: null },
      { key: 'transport_height', label: 'Hauteur', value: null },
    ],
    unknownLabel: 'Non connu',
    sourceLabel: 'Source :',
    source: 'Fiche officielle rippa.com/product/r82-small-excavator · portée non publiée : la ligne annonce 137,9 in pour 6 502 mm',
    contributeLabel: 'Compléter cette fiche →',
    contributeHref: '#',
  },
}

/**
 * La grille d'une chargeuse : son profil n'a ni profondeur ni portée de fouille
 * — les fiches Rippa n'en publient pas pour cette famille. C'est l'API qui
 * décide quelles tuiles servir, pas ce composant.
 */
export const Chargeuse: Story = {
  args: {
    label: 'Caractéristiques',
    items: [
      { key: 'engine', label: 'Moteur', value: 'Kubota D1105' },
      { key: 'power', label: 'Puissance', value: '18,4 kW' },
      { key: 'weight', label: 'Poids', value: '1 230 kg' },
      { key: 'bucket', label: 'Godet', value: '0,16 m³' },
      { key: 'dump_height', label: 'Déversement', value: '1 725 mm' },
      { key: 'travel_speed', label: 'Vitesse', value: '8 km/h' },
      { key: 'gradeability', label: 'Inclinaison', value: '30 %' },
      { key: 'transport_length', label: 'Longueur', value: '2 655 mm' },
      { key: 'transport_width', label: 'Largeur', value: '1 000 mm' },
      { key: 'transport_height', label: 'Hauteur', value: '1 810 mm' },
      { key: 'fuel_tank', label: 'Réservoir', value: null },
      { key: 'hydraulic_pressure', label: 'Pression', value: null },
    ],
    unknownLabel: 'Non connu',
    contributeLabel: 'Compléter cette fiche →',
    contributeHref: '#',
  },
}

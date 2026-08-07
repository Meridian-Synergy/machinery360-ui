import type { Meta, StoryObj } from '@storybook/vue3-vite'
import McPointPlacer from './McPointPlacer.vue'

const meta: Meta<typeof McPointPlacer> = { title: 'Composants/McPointPlacer', component: McPointPlacer }
export default meta
type Story = StoryObj<typeof McPointPlacer>

// Image de substitution : le composant n'a pas à connaître le vrai schéma.
const SRC = 'data:image/svg+xml;base64,' + btoa(
  `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="320">
     <rect width="480" height="320" fill="#eef1f6"/>
     <text x="240" y="165" text-anchor="middle" font-family="sans-serif"
           font-size="15" fill="#5c6675">image de référence du modèle</text>
   </svg>`)

export const Placement: Story = {
  render: () => ({
    components: { McPointPlacer },
    data: () => ({ point: null }),
    template: `
      <McPointPlacer
        v-model="point" :src="'${SRC}'" alt="Schéma du modèle"
        target-label="Axe de pied de flèche"
        hint="Cliquez à l'endroit exact du graisseur. Les points gris sont déjà repérés."
        :existing="[
          { id: '1', code: 'boom_foot', x: 0.42, y: 0.38 },
          { id: '2', code: 'arm_joint', x: 0.63, y: 0.55, state: 'disputed' },
        ]" />`,
  }),
}

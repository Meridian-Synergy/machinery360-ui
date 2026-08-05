import type { Meta, StoryObj } from '@storybook/vue3'
import McTaskCard from './McTaskCard.vue'
import McBucketBadge from '../McBucketBadge/McBucketBadge.vue'
import McSelect from '../McSelect/McSelect.vue'
import { ref } from 'vue'

const meta: Meta<typeof McTaskCard> = {
  title: 'Components/Entretien',
  component: McTaskCard,
  parameters: {
    docs: {
      description: {
        component:
          'Le vocabulaire des trois seaux — en retard / maintenant / bientôt — doit être '
          + 'identique sur le site public, dans l’app et dans les emails. D’où ces composants '
          + 'et les tokens --mc-bucket-*, plutôt qu’une couleur choisie par écran.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof McTaskCard>

export const Buckets: Story = {
  name: 'Les trois seaux',
  render: () => ({
    components: { McBucketBadge },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:12px">
        <McBucketBadge bucket="overdue" label="En retard" />
        <McBucketBadge bucket="due" label="Maintenant" />
        <McBucketBadge bucket="soon" label="Bientôt" />
        <McBucketBadge bucket="done" label="Fait" />
      </div>`,
  }),
}

export const Tasks: Story = {
  name: 'Échéances',
  render: () => ({
    components: { McTaskCard },
    template: `
      <div style="display:grid;gap:12px;max-width:520px">
        <McTaskCard
          title="Graisser la denture de la couronne d’orientation"
          bucket="overdue" bucket-label="En retard"
          timing="Dépassé de 12 h — était attendu à 150 h"
          consumable="Graisse NLGI 2" />
        <McTaskCard
          title="Vidanger l’huile moteur"
          bucket="due" bucket-label="Maintenant"
          timing="À 250 h"
          consumable="SAE 15W-40 (API CI-4 ou supérieur)" />
        <McTaskCard
          title="Vidanger l’huile des moteurs de translation"
          bucket="soon" bucket-label="Bientôt"
          timing="Dans 38 h — à 500 h"
          consumable="SAE 90 (API GL-4)" :quantity="2" />
      </div>`,
  }),
}

export const Select: Story = {
  name: 'McSelect',
  render: () => ({
    components: { McSelect },
    setup: () => ({
      brand: ref(''),
      options: [
        { value: 'rippa', label: 'Rippa' },
        { value: 'takeuchi', label: 'Takeuchi (bientôt)', disabled: true },
      ],
    }),
    template: `
      <div style="max-width:360px">
        <McSelect v-model="brand" :options="options" label="Marque"
                  placeholder="Choisir une marque…" required name="brand" />
        <p style="font-size:.8rem;color:var(--mc-color-muted)">Valeur : {{ brand || '—' }}</p>
      </div>`,
  }),
}

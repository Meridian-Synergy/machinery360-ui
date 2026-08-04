import type { Meta, StoryObj } from '@storybook/vue3'
import McAlert from './McAlert.vue'

const meta: Meta<typeof McAlert> = {
  title: 'Components/McAlert',
  component: McAlert,
}
export default meta

type Story = StoryObj<typeof McAlert>

export const Variants: Story = {
  render: () => ({
    components: { McAlert },
    template: `
      <div style="display:flex;flex-direction:column;gap:16px;max-width:640px">
        <McAlert variant="info" title="Plan générique">
          Ce modèle n’est pas encore catalogué : le plan affiché est celui de la famille
          « mini-pelle 1–3 t ».
        </McAlert>
        <McAlert variant="success">Relevé enregistré. Prochaine échéance à 250 h.</McAlert>
        <McAlert variant="warning" title="Échéance proche">
          Vidange moteur dans 12 h de fonctionnement.
        </McAlert>
        <McAlert variant="error" title="Échéance dépassée">
          Graissage de la couronne d’orientation en retard de 30 h.
        </McAlert>
      </div>`,
  }),
}

/**
 * The permanent disclaimer. Every surface that gives maintenance guidance
 * carries it — the manufacturer's manual is what counts, we are indicative.
 */
export const Disclaimer: Story = {
  render: () => ({
    components: { McAlert },
    template: `
      <div style="max-width:640px">
        <McAlert variant="info">
          Information donnée à titre indicatif. Le manuel du constructeur fait foi.
        </McAlert>
      </div>`,
  }),
}

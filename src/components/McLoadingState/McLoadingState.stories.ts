import type { Meta, StoryObj } from '@storybook/vue3'
import McLoadingState from './McLoadingState.vue'
import McSpinner from '../McSpinner/McSpinner.vue'

const meta: Meta<typeof McLoadingState> = {
  title: 'Components/Loading',
  component: McLoadingState,
  parameters: {
    docs: {
      description: {
        component:
          'Two scales, one system. McLoadingState for a page/section, McSpinner inline. '
          + 'Never a text-only "Loading…", never a spinner SVG copied into a page.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof McLoadingState>

export const Section: Story = {
  args: { label: 'Chargement du plan d’entretien…' },
}

export const SpinnerOnly: Story = {
  name: 'Spinner (inline)',
  render: () => ({
    components: { McSpinner },
    template: `
      <p style="display:flex;align-items:center;gap:8px">
        <McSpinner :size="14" /> Analyse du compteur en cours
      </p>`,
  }),
}

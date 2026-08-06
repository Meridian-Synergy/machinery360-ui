import type { Meta, StoryObj } from '@storybook/vue3-vite'
import McDocIcon from './McDocIcon.vue'

const meta: Meta<typeof McDocIcon> = { title: 'Composants/McDocIcon', component: McDocIcon }
export default meta
type Story = StoryObj<typeof McDocIcon>

/**
 * L'extension prime sur le type éditorial : c'est le FORMAT qui dit à
 * l'utilisateur ce qui va s'ouvrir.
 */
export const Formats: Story = {
  render: () => ({
    components: { McDocIcon },
    template: `
      <div style="display:flex;gap:20px;align-items:flex-end">
        <McDocIcon kind="manual" url="https://x/manuel-r13.pdf" />
        <McDocIcon kind="parts" url="https://x/pieces.pdf" />
        <McDocIcon kind="video" url="https://youtu.be/abc" />
        <McDocIcon kind="quickstart" url="https://shop.rippa.com/fr/pages/user-manual" />
      </div>`,
  }),
}

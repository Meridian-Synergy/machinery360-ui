import type { Meta, StoryObj } from '@storybook/vue3-vite'
import McBrandMark from './McBrandMark.vue'

const meta: Meta<typeof McBrandMark> = {
  title: 'Composants/McBrandMark',
  component: McBrandMark,
}
export default meta
type Story = StoryObj<typeof McBrandMark>

/**
 * Le monogramme est le comportement PAR DÉFAUT, pas un pis-aller : on n'héberge
 * pas le logotype d'un constructeur tiers.
 */
export const Monogrammes: Story = {
  render: () => ({
    components: { McBrandMark },
    template: `
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McBrandMark name="Rippa" />
        <McBrandMark name="JCB" />
        <McBrandMark name="New Holland" />
        <McBrandMark name="Kubota" />
        <McBrandMark name="Caterpillar" />
      </div>`,
  }),
}

export const Tailles: Story = {
  render: () => ({
    components: { McBrandMark },
    template: `
      <div style="display:flex;gap:12px;align-items:center">
        <McBrandMark name="Rippa" :size="28" />
        <McBrandMark name="Rippa" :size="44" />
        <McBrandMark name="Rippa" :size="64" />
      </div>`,
  }),
}

/** Une URL cassée retombe sur le monogramme : jamais d'image morte. */
export const LogoInjoignable: Story = {
  render: () => ({
    components: { McBrandMark },
    template: `<McBrandMark name="Rippa" logo-url="https://example.invalid/absent.png" :size="64" />`,
  }),
}

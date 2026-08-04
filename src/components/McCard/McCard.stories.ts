import type { Meta, StoryObj } from '@storybook/vue3'
import McCard from './McCard.vue'
import McContainer from '../McContainer/McContainer.vue'
import McButton from '../McButton/McButton.vue'

const meta: Meta<typeof McCard> = {
  title: 'Components/Layout',
  component: McCard,
}
export default meta

type Story = StoryObj<typeof McCard>

export const Card: Story = {
  render: () => ({
    components: { McCard, McButton },
    template: `
      <McCard style="max-width:420px">
        <h3 style="margin:0 0 8px">Rippa R13 Pro</h3>
        <p style="margin:0 0 16px;color:var(--mc-color-muted)">182 h au compteur</p>
        <McButton size="sm">Saisir un relevé</McButton>
      </McCard>`,
  }),
}

/**
 * The rail is the single source of truth for content width. A page that rolls
 * its own max-width drifts from every other page — titles stop aligning.
 */
export const ContentRail: Story = {
  name: 'Content rail',
  render: () => ({
    components: { McContainer, McCard },
    template: `
      <div style="background:var(--mc-color-bg);padding-block:24px">
        <McContainer>
          <McCard>Rail par défaut — 1200px</McCard>
        </McContainer>
        <McContainer width="narrow" style="margin-top:16px">
          <McCard>Rail « narrow » — 720px, largeur de lecture</McCard>
        </McContainer>
      </div>`,
  }),
}

import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import McTextSizeToggle from './McTextSizeToggle.vue'

const meta: Meta<typeof McTextSizeToggle> = {
  title: 'Components/McTextSizeToggle',
  component: McTextSizeToggle,
  parameters: {
    docs: {
      description: {
        component:
          'Le composant n’applique RIEN : il émet un pourcentage, le consommateur pose '
          + '`--mc-font-scale` sur `<html>` et le persiste. ⚠️ Prérequis : toute la typographie '
          + 'en `rem` — avec des `px`, le réglage paraît cassé alors qu’il fonctionne.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof McTextSizeToggle>

export const Playground: Story = {
  render: () => ({
    components: { McTextSizeToggle },
    setup: () => ({ size: ref(100) }),
    template: `
      <div>
        <McTextSizeToggle v-model="size" />
        <p :style="{ fontSize: (size / 100) + 'rem' }" style="margin-top:16px">
          Vidanger l’huile moteur — échéance à 250 h ({{ size }} %)
        </p>
      </div>`,
  }),
}

/** Aux bornes, les boutons se désactivent au lieu de ne rien faire en silence. */
export const Bornes: Story = {
  render: () => ({
    components: { McTextSizeToggle },
    setup: () => ({ min: ref(90), max: ref(130) }),
    template: `
      <div style="display:flex;gap:24px">
        <div><p style="font-size:.75rem">Minimum</p><McTextSizeToggle v-model="min" /></div>
        <div><p style="font-size:.75rem">Maximum</p><McTextSizeToggle v-model="max" /></div>
      </div>`,
  }),
}

import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import McThemeToggle from './McThemeToggle.vue'

const meta: Meta<typeof McThemeToggle> = {
  title: 'Components/McThemeToggle',
  component: McThemeToggle,
  parameters: {
    docs: {
      description: {
        component:
          'Contrôlé : le composant émet, le consommateur persiste et pose `data-theme` sur '
          + '`<html>`. ⚠️ Le nom accessible annonce l’ACTION (« passer en thème sombre »), pas '
          + 'l’état — un lecteur d’écran ne voit ni soleil ni lune.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof McThemeToggle>

export const Playground: Story = {
  render: () => ({
    components: { McThemeToggle },
    setup: () => ({ theme: ref<'light' | 'dark'>('light') }),
    template: `
      <div>
        <McThemeToggle v-model="theme" light-label="Passer en thème clair" dark-label="Passer en thème sombre" />
        <p style="margin-top:12px;font-size:.875rem">Thème : {{ theme }}</p>
      </div>`,
  }),
}

import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
// Le DS n'émet que les classes `fi fi-xx` : la feuille est importée par l'APP.
// Ici, uniquement pour que l'aperçu Storybook montre de vrais drapeaux.
import 'flag-icons/css/flag-icons.min.css'
import McLocaleSwitcher from './McLocaleSwitcher.vue'

const meta: Meta<typeof McLocaleSwitcher> = {
  title: 'Components/McLocaleSwitcher',
  component: McLocaleSwitcher,
  parameters: {
    docs: {
      description: {
        component:
          'Dropdown maison et non `<select>` natif : le natif ne sait pas afficher de drapeau. '
          + '⚠️ Drapeau ≠ langue — l’anglais prend `gb`, pas `en`. Sous 48rem, le nom disparaît '
          + 'et seul le drapeau reste : sur mobile le sélecteur ne doit pas manger une ligne.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof McLocaleSwitcher>

export const Playground: Story = {
  render: () => ({
    components: { McLocaleSwitcher },
    setup: () => ({
      locale: ref('fr'),
      locales: [
        { code: 'fr', name: 'Français', flag: 'fr' },
        // L'anglais prend le drapeau britannique : il n'existe pas de drapeau
        // « de langue », il faut le mapper explicitement.
        { code: 'en', name: 'English', flag: 'gb' },
        { code: 'de', name: 'Deutsch', flag: 'de' },
      ],
    }),
    template: `
      <div style="display:flex;justify-content:flex-end;padding:8px 0 200px">
        <McLocaleSwitcher v-model="locale" :locales="locales" label="Langue" />
      </div>`,
  }),
}

/** Sans `:locales`, un composant contrôlé doit rendre un état vide, pas crasher. */
export const SansLocales: Story = {
  name: 'Prop oubliée',
  render: () => ({
    components: { McLocaleSwitcher },
    setup: () => ({ locale: ref('fr') }),
    template: '<McLocaleSwitcher v-model="locale" label="Langue" />',
  }),
}

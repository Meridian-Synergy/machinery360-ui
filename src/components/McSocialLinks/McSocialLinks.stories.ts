import type { Meta, StoryObj } from '@storybook/vue3-vite'
import McSocialLinks from './McSocialLinks.vue'

/** Les liens sociaux d'une marque, en icônes plutôt qu'en URL brutes. */
const meta = {
  title: 'Marque/McSocialLinks',
  component: McSocialLinks,
  args: {
    labels: { youtube: 'YouTube', facebook: 'Facebook', instagram: 'Instagram' },
  },
} satisfies Meta<typeof McSocialLinks>

export default meta
type Story = StoryObj<typeof meta>

export const DeuxReseaux: Story = {
  args: { links: { youtube: 'https://youtube.com/@x', facebook: 'https://facebook.com/x' } },
}

export const TousLesReseaux: Story = {
  args: {
    links: {
      youtube: 'https://youtube.com/@x', facebook: 'https://facebook.com/x',
      instagram: 'https://instagram.com/x', linkedin: 'https://linkedin.com/company/x',
      x: 'https://x.com/x', tiktok: 'https://tiktok.com/@x',
    },
  },
}

/** Une clé inconnue ne rend rien plutôt qu'une icône par défaut trompeuse. */
export const ReseauInconnu: Story = {
  args: { links: { youtube: 'https://youtube.com/@x', myspace: 'https://myspace.com/x' } },
}

/** Aucun lien : le composant ne rend RIEN, pas une liste vide. */
export const Aucun: Story = { args: { links: {} } }

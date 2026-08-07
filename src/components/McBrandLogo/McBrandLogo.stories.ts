import type { Meta, StoryObj } from '@storybook/vue3-vite'
import McBrandLogo from './McBrandLogo.vue'

/**
 * Le logotype à son format naturel — le pendant large de `McBrandMark`.
 *
 * La comparaison « logotype dans un carré » vs « logotype dans sa bande » est
 * l'objet même de ce composant : c'est elle qu'il faut regarder.
 */
const meta = {
  title: 'Marque/McBrandLogo',
  component: McBrandLogo,
  args: { name: 'Rippa', height: 56 },
} satisfies Meta<typeof McBrandLogo>

export default meta
type Story = StoryObj<typeof meta>

/** Un logotype horizontal typique : un symbole et un mot. */
const WIDE = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60">
     <rect width="240" height="60" fill="#1560a8"/>
     <circle cx="30" cy="30" r="18" fill="#f5a623"/>
     <text x="60" y="40" font-family="sans-serif" font-size="28" fill="#fff">RIPPA</text>
   </svg>`)

export const Logotype: Story = { args: { logoUrl: WIDE } }

/** Sans logotype déposé : le monogramme, à la même hauteur. */
export const SansLogotype: Story = { args: { logoUrl: null } }

/** Plafond de largeur : un logotype très allongé ne pousse pas la ligne dehors. */
export const TresAllonge: Story = {
  args: {
    logoUrl: 'data:image/svg+xml;utf8,' + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 60">
         <rect width="800" height="60" fill="#0f2a44"/>
         <text x="20" y="40" font-family="sans-serif" font-size="28" fill="#fff">MARQUE TRES TRES LONGUE</text>
       </svg>`),
    maxWidth: 220,
  },
}

/** Une URL cassée ne doit jamais laisser une image morte : repli monogramme. */
export const UrlCassee: Story = { args: { logoUrl: 'https://example.invalid/absent.png' } }

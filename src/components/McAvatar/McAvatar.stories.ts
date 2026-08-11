import type { Meta, StoryObj } from '@storybook/vue3-vite'
import McAvatar from './McAvatar.vue'

const meta: Meta<typeof McAvatar> = {
  title: 'Composants/McAvatar',
  component: McAvatar,
}
export default meta
type Story = StoryObj<typeof McAvatar>

/**
 * L'initiale de qui est connecté, dans la barre haute. Deux lettres au plus, et
 * le SECOND MOT l'emporte sur la seconde lettre : « Denis Gosset » donne DG.
 */
export const Personnes: Story = {
  render: () => ({
    components: { McAvatar },
    template: `
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McAvatar name="Denis Gosset" />
        <McAvatar name="Marie Dupont" />
        <McAvatar name="Jean-Pierre Martin" />
        <McAvatar name="Alex" />
      </div>`,
  }),
}

/**
 * ⚠️ Une adresse e-mail est coupée au `@` et ses séparateurs deviennent des
 * espaces : personne ne s'appelle « denis.gosset@… ». C'est le repli quand le
 * profil n'a pas encore de nom — donc le cas le plus fréquent à l'inscription.
 */
export const DepuisUneAdresse: Story = {
  render: () => ({
    components: { McAvatar },
    template: `
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McAvatar name="denis.gosset@meridian-synergy.com" />
        <McAvatar name="contact@rippa.fr" />
        <McAvatar name="jean-luc.picard@exemple.fr" />
      </div>`,
  }),
}

/**
 * ⚠️ La couleur est DÉRIVÉE du nom : stable pour une personne, différente pour
 * deux comptes dont les initiales se ressemblent. Elle ne porte aucun sens —
 * c'est une aide à la reconnaissance, et le nom reste lu par les technologies
 * d'assistance.
 *
 * Palette FERMÉE de six tons : un `hsl()` tiré d'un hash produit tôt ou tard du
 * jaune sur blanc, ou un ton qui disparaît en thème sombre.
 */
export const Palette: Story = {
  render: () => ({
    components: { McAvatar },
    template: `
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McAvatar v-for="n in ['Anne A','Bruno B','Carla C','David D','Elsa E','Farid F','Gina G','Hugo H']"
                  :key="n" :name="n" />
      </div>`,
  }),
}

export const Tailles: Story = {
  render: () => ({
    components: { McAvatar },
    template: `
      <div style="display:flex;gap:12px;align-items:center">
        <McAvatar name="Denis Gosset" size="sm" />
        <McAvatar name="Denis Gosset" size="md" />
      </div>`,
  }),
}

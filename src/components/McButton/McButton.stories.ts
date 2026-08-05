import type { Meta, StoryObj } from '@storybook/vue3'
import McButton from './McButton.vue'

const meta: Meta<typeof McButton> = {
  title: 'Components/McButton',
  component: McButton,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'warning', 'danger', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: { variant: 'primary', size: 'md' },
}
export default meta

type Story = StoryObj<typeof McButton>

export const Playground: Story = {
  render: args => ({
    components: { McButton },
    setup: () => ({ args }),
    template: '<McButton v-bind="args">Enregistrer le relevé</McButton>',
  }),
}

/**
 * The fixed taxonomy — decided once, never per screen. Reproduce these exact
 * variants for the same semantic action rather than inventing a look that
 * "seems right": divergent CTAs are a structural defect, not a matter of taste.
 */
export const Taxonomy: Story = {
  render: () => ({
    components: { McButton },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton variant="primary">Action principale</McButton>
        <McButton variant="secondary">Annuler / retour</McButton>
        <McButton variant="warning">Action réversible</McButton>
        <McButton variant="danger">Supprimer</McButton>
        <McButton variant="ghost">Action tertiaire</McButton>
      </div>`,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { McButton },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton size="sm">Small</McButton>
        <McButton size="md">Medium</McButton>
        <McButton size="lg">Large</McButton>
      </div>`,
  }),
}

export const States: Story = {
  render: () => ({
    components: { McButton },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton loading>Chargement</McButton>
        <McButton disabled>Désactivé</McButton>
        <McButton href="#">Lien</McButton>
        <McButton as="a" href="#" disabled>Lien désactivé</McButton>
      </div>`,
  }),
}

/**
 * Naviguer DANS l'app : `:as="NuxtLink"`, jamais `href`.
 *
 * `href` rend un `<a>` nu, dont le clic recharge la page entière — en SPA cela
 * refait l'init de session et repart d'un écran blanc. On garde `href` pour les
 * liens sortants (un manuel constructeur, une doc externe) et `as` pour tout ce
 * qui reste dans l'app.
 */
export const AsLink: Story = {
  render: () => ({
    components: { McButton },
    template: `
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton as="a" href="#">Navigation interne (ici : &lt;a&gt;, en app : NuxtLink)</McButton>
        <McButton href="https://example.com" variant="secondary">Lien sortant</McButton>
      </div>`,
  }),
}

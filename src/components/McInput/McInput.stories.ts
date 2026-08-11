import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import McInput from './McInput.vue'

const meta: Meta<typeof McInput> = {
  title: 'Components/McInput',
  component: McInput,
  args: { label: 'Compteur horaire', placeholder: '0' },
}
export default meta

type Story = StoryObj<typeof McInput>

export const Playground: Story = {
  render: args => ({
    components: { McInput },
    setup: () => ({ args, value: ref('') }),
    template: '<McInput v-bind="args" v-model="value" style="max-width:360px" />',
  }),
}

export const WithHintAndError: Story = {
  name: 'Hint & error',
  render: () => ({
    components: { McInput },
    setup: () => ({ a: ref('182'), b: ref('') }),
    template: `
      <div style="display:flex;flex-direction:column;gap:20px;max-width:360px">
        <McInput v-model="a" label="Compteur horaire" hint="Relevé affiché au tableau de bord" />
        <McInput v-model="b" label="Compteur horaire" error="Valeur inférieure au dernier relevé (182 h)" />
      </div>`,
  }),
}

/**
 * `required` is forwarded to the <input> via $attrs. Submitting empty must
 * trigger the browser's native validation — if it doesn't, the attribute landed
 * on the wrapper div and does nothing.
 */
export const NativeAttributesForwarded: Story = {
  name: 'Native attributes forwarded',
  render: () => ({
    components: { McInput },
    setup: () => ({ value: ref('') }),
    template: `
      <form style="display:flex;flex-direction:column;gap:16px;max-width:360px" @submit.prevent>
        <McInput v-model="value" label="Numéro de série" required minlength="4" name="serial"
                 inputmode="text" hint="Requis, 4 caractères minimum" />
        <button type="submit">Valider (doit bloquer si vide)</button>
      </form>`,
  }),
}

/**
 * GOV.UK reveal pattern: the accessible NAME changes, and a polite live region
 * announces the state. No aria-pressed — doing both is a double announcement.
 * Submitting the form re-masks the password.
 */
export const PasswordReveal: Story = {
  name: 'Password reveal',
  render: () => ({
    components: { McInput },
    setup: () => ({ value: ref('correct horse battery') }),
    template: `
      <form style="display:flex;flex-direction:column;gap:16px;max-width:360px" @submit.prevent>
        <McInput v-model="value" type="password" label="Mot de passe" autocomplete="current-password"
                 reveal-label="Afficher le mot de passe" hide-reveal-label="Masquer le mot de passe"
                 shown-announcement="Mot de passe visible" hidden-announcement="Mot de passe masqué" />
        <button type="submit">Se connecter (re-masque le champ)</button>
      </form>`,
  }),
}

/**
 * DEUX CHAMPS CÔTE À CÔTE, AUX INDICATIONS INÉGALES.
 *
 * ⚠️ Le cas qui a produit le défaut, signalé sur l'écran de compte : une
 * indication de deux lignes à gauche, d'une seule à droite. Les étiquettes
 * s'alignaient, les champs non — décalés d'exactement une ligne.
 *
 * ⚠️ La correction pousse le CONTRÔLE en bas de son champ, jamais le champ
 * entier : aligner le tout par le bas remettrait les saisies en face, mais
 * décalerait les étiquettes.
 */
export const CoteACote: Story = {
  name: 'Deux champs côte à côte',
  render: () => ({
    components: { McInput },
    setup: () => ({ email: ref(''), lang: ref('Français') }),
    template: `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:620px">
        <McInput v-model="email" label="Adresse e-mail"
                 hint="C'est votre identifiant de connexion — il ne se modifie pas ici." />
        <McInput v-model="lang" label="Langue"
                 hint="Sert aussi aux e-mails, qui partent hors session." />
      </div>`,
  }),
}

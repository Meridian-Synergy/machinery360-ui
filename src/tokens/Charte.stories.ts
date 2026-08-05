import type { Meta, StoryObj } from '@storybook/vue3'

/**
 * Living documentation of the charter. Switch the theme in the toolbar — every
 * swatch below reads its value from the token layer, so this page is also the
 * proof that both themes resolve.
 */
const meta: Meta = {
  title: 'Charte/Palette',
  parameters: {
    docs: {
      description: {
        component:
          'Charte Machinery360 — bleu acier (action) sur anthracite (structure). '
          + 'Déclinaison délibérée des couleurs Rippa (RAL 5017 / RAL 7016), jamais leurs '
          + 'valeurs : marque tierce, on reste voisin sans être identique.',
      },
    },
  },
}
export default meta

type Story = StoryObj

const swatch = (token: string, label: string) => `
  <div style="display:flex;align-items:center;gap:12px">
    <span style="width:56px;height:56px;border-radius:8px;flex-shrink:0;
                 border:1px solid var(--mc-color-border);background:var(${token})"></span>
    <span>
      <strong style="display:block;font-size:14px">${label}</strong>
      <code style="font-size:12px;color:var(--mc-color-muted)">${token}</code>
    </span>
  </div>`

export const Brand: Story = {
  render: () => ({
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        ${swatch('--mc-color-blue', 'Bleu — action')}
        ${swatch('--mc-color-blue-dark', 'Bleu foncé — survol, texte sur clair')}
        ${swatch('--mc-color-amber', 'Ambre — attention (échéance incertaine)')}
        ${swatch('--mc-color-steel', 'Anthracite — structure')}
        ${swatch('--mc-color-steel-deep', 'Steel deep — dark bg')}
        ${swatch('--mc-color-slate', 'Slate — secondary')}
      </div>`,
  }),
}

export const Surfaces: Story = {
  render: () => ({
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        ${swatch('--mc-color-bg', 'Page background')}
        ${swatch('--mc-color-surface', 'Raised surface')}
        ${swatch('--mc-color-border', 'Border')}
        ${swatch('--mc-color-text', 'Text')}
        ${swatch('--mc-color-muted', 'Muted text')}
      </div>`,
  }),
}

/**
 * The product's core semantic — the three answers to "where do I stand?".
 * Defined once here so the web lookup, the app and the emails agree.
 */
export const MaintenanceBuckets: Story = {
  name: 'Maintenance buckets',
  render: () => ({
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        ${swatch('--mc-bucket-past', 'Past — attendu, historique inconnu (web)')}
        ${swatch('--mc-bucket-overdue', 'Overdue — retard avéré (app)')}
        ${swatch('--mc-bucket-due', 'Due — à faire maintenant')}
        ${swatch('--mc-bucket-soon', 'Soon — bientôt')}
        ${swatch('--mc-bucket-done', 'Done — fait')}
      </div>`,
  }),
}

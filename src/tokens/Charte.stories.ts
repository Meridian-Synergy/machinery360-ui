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
          'Machinery360 charter — amber (action) on steel (structure). '
          + 'The amber is a deliberate declination, NOT the Rippa brand colour: Rippa is a '
          + 'third-party trademark and we use a neighbouring hue until a written agreement exists.',
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
        ${swatch('--mc-color-amber', 'Amber — primary action')}
        ${swatch('--mc-color-amber-dark', 'Amber dark — on light bg')}
        ${swatch('--mc-color-steel', 'Steel — structure')}
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
        ${swatch('--mc-bucket-overdue', 'Overdue — past due')}
        ${swatch('--mc-bucket-due', 'Due — do it now')}
        ${swatch('--mc-bucket-soon', 'Soon — coming up')}
        ${swatch('--mc-bucket-done', 'Done — completed')}
      </div>`,
  }),
}

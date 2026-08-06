// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import McBrandMark from '../src/components/McBrandMark/McBrandMark.vue'

/**
 * La pastille doit choisir la BONNE image, et se replier sans rien casser.
 *
 * ⚠️ Le repli est l'enjeu : un logotype horizontal écrasé dans un carré de 40 px
 * est pire que pas d'image. On préfère alors le monogramme.
 */
describe('McBrandMark', () => {
  it('préfère l\'icône carrée au logotype', () => {
    const w = mount(McBrandMark, {
      props: { name: 'Rippa', iconUrl: '/icon.png', logoUrl: '/logo.png' },
    })
    expect(w.find('img').attributes('src')).toBe('/icon.png')
  })

  it('utilise le logotype quand aucune icône n\'est fournie', () => {
    const w = mount(McBrandMark, { props: { name: 'Rippa', logoUrl: '/logo.png' } })
    expect(w.find('img').attributes('src')).toBe('/logo.png')
  })

  it('dessine un monogramme sans aucune image', () => {
    const w = mount(McBrandMark, { props: { name: 'New Holland' } })
    expect(w.find('img').exists()).toBe(false)
    expect(w.text()).toBe('NH')
  })

  it('retombe sur le monogramme si l\'image échoue', async () => {
    const w = mount(McBrandMark, { props: { name: 'Rippa', iconUrl: '/absent.png' } })
    await w.find('img').trigger('error')
    expect(w.find('img').exists()).toBe(false)
    expect(w.text()).toBe('R')
  })
})

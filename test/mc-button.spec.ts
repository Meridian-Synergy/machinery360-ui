// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import McButton from '../src/components/McButton/McButton.vue'

/**
 * McButton rend trois choses selon le contexte, et chacune a un piège propre.
 *
 * Le `disabled` d'un `<button>` bloque le clic ; sur un `<a>` il est purement
 * décoratif. Un composant qui poserait `disabled` sur un lien donnerait un CTA
 * grisé qui navigue quand même — c'est ce que ces tests interdisent.
 */
describe('McButton', () => {
  it('rend un <button> par défaut', () => {
    const w = mount(McButton, { slots: { default: 'Go' } })
    expect(w.element.tagName).toBe('BUTTON')
    expect(w.attributes('type')).toBe('button')
  })

  it('rend un <a> quand href est fourni', () => {
    const w = mount(McButton, { props: { href: '/x' } })
    expect(w.element.tagName).toBe('A')
    expect(w.attributes('href')).toBe('/x')
    // `type` sur un <a> désigne le type MIME de la cible : le laisser passer
    // annoncerait au navigateur un contenu qui n'existe pas.
    expect(w.attributes('type')).toBeUndefined()
  })

  it('rend le composant passé à `as`', () => {
    const Stub = { name: 'LinkStub', template: '<span><slot /></span>' }
    const w = mount(McButton, { props: { as: Stub }, slots: { default: 'Nav' } })
    expect(w.element.tagName).toBe('SPAN')
    expect(w.text()).toBe('Nav')
  })

  it('désactive un lien par aria-disabled, jamais par l\'attribut disabled', () => {
    const w = mount(McButton, { props: { href: '/x', disabled: true } })
    expect(w.attributes('aria-disabled')).toBe('true')
    expect(w.attributes('disabled')).toBeUndefined()
    // Sans href, le lien ne mène nulle part : la désactivation est effective
    // et pas seulement annoncée.
    expect(w.attributes('href')).toBeUndefined()
  })

  it('désactive un bouton par l\'attribut natif, pas par aria-disabled', () => {
    const w = mount(McButton, { props: { disabled: true } })
    expect(w.attributes('disabled')).toBeDefined()
    expect(w.attributes('aria-disabled')).toBeUndefined()
  })

  it('bloque aussi un lien mis en chargement', () => {
    const w = mount(McButton, { props: { as: 'a', href: '/x', loading: true } })
    expect(w.attributes('aria-disabled')).toBe('true')
    expect(w.attributes('aria-busy')).toBe('true')
    expect(w.attributes('href')).toBeUndefined()
  })
})

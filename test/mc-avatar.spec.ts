// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import McAvatar from '../src/components/McAvatar/McAvatar.vue'

const initials = (name: string) =>
  mount(McAvatar, { props: { name } }).find('[aria-hidden="true"]').text()

const colour = (name: string) =>
  mount(McAvatar, { props: { name } }).attributes('style')

/**
 * L'initiale de qui est connecté. Deux règles seulement, et toutes deux se
 * trompent facilement.
 */
describe('McAvatar', () => {
  it('prend la première lettre de DEUX MOTS, pas les deux premières lettres', () => {
    // « Denis Gosset » donne DG. « DE » serait la faute la plus naturelle, et la
    // plus inutile : deux collègues d'un même prénom se ressembleraient.
    expect(initials('Denis Gosset')).toBe('DG')
    expect(initials('Marie Dupont')).toBe('MD')
  })

  it('se replie sur deux lettres quand il n\'y a qu\'un mot', () => {
    expect(initials('Alex')).toBe('AL')
  })

  /**
   * ⚠️ Le cas le plus FRÉQUENT, pas un cas limite : à l'inscription, le profil
   * n'a pas encore de nom et l'app ne dispose que de l'adresse. Sans découpe,
   * le disque afficherait « DE » pour « denis.gosset@… » — la lettre du domaine
   * de messagerie, qui ne distingue personne.
   */
  it('coupe une adresse e-mail au @ et lit ses séparateurs', () => {
    expect(initials('denis.gosset@meridian-synergy.com')).toBe('DG')
    expect(initials('jean-luc.picard@exemple.fr')).toBe('JL')
    expect(initials('contact@rippa.fr')).toBe('CO')
  })

  it('ne casse pas sur une chaîne vide', () => {
    expect(initials('   ')).toBe('?')
  })

  /**
   * ⚠️ La couleur est STABLE pour une personne — sinon le repère ne repère
   * rien — et diffère entre deux comptes dont les initiales se ressemblent.
   */
  it('donne toujours la même couleur au même nom', () => {
    expect(colour('Denis Gosset')).toBe(colour('Denis Gosset'))
  })

  it('distingue deux personnes aux mêmes initiales', () => {
    expect(colour('Denis Gosset')).not.toBe(colour('Diane Girard'))
  })

  /**
   * ⚠️ Le NOM reste lisible par les technologies d'assistance : le disque ne
   * dit que deux lettres et une couleur, ce qui n'identifie personne à l'oreille.
   */
  it('expose le nom complet, pas seulement les initiales', () => {
    const w = mount(McAvatar, { props: { name: 'Denis Gosset' } })
    expect(w.find('.mc-visually-hidden').text()).toBe('Denis Gosset')
  })

  it('accepte un libellé distinct du nom affiché', () => {
    const w = mount(McAvatar, { props: { name: 'Denis Gosset', label: 'Mon compte' } })
    expect(w.find('.mc-visually-hidden').text()).toBe('Mon compte')
  })
})

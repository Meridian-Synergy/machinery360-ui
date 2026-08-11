// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import McField from '../src/components/McField/McField.vue'
import McInput from '../src/components/McInput/McInput.vue'

/**
 * DEUX CHAMPS CÔTE À CÔTE ALIGNENT LEURS CONTRÔLES.
 *
 * ⚠️ Signalé sur l'écran de compte : « C'est votre identifiant de connexion —
 * il ne se modifie pas ici » tient sur deux lignes là où « Sert aussi aux
 * e-mails » en prend une. Les étiquettes s'alignaient, les champs non — décalés
 * d'exactement une ligne d'indication, ce qui se lit comme une erreur parce que
 * c'en est une.
 *
 * ⚠️ La correction ne peut pas vivre dans la page : le défaut apparaît partout
 * où deux champs voisins portent des indications de longueurs différentes,
 * c'est-à-dire partout.
 */
describe('McField — alignement des contrôles', () => {
  it('enveloppe le contrôle dans une boîte à lui', () => {
    // Sans wrapper, il n'y a aucun élément sur lequel accrocher la règle :
    // un slot n'est pas une boîte.
    const w = mount(McField, {
      props: { label: 'Adresse e-mail' },
      slots: { default: '<input class="probe">' },
    })
    expect(w.find('.mc-field__control').exists()).toBe(true)
    expect(w.find('.mc-field__control .probe').exists()).toBe(true)
  })

  it('garde le contrôle APRÈS l\'étiquette et l\'indication', () => {
    // L'ordre du document porte le sens : on lit le nom du champ, puis ce qu'il
    // attend, puis on saisit.
    const w = mount(McField, {
      props: { label: 'Adresse e-mail', hint: 'Identifiant de connexion' },
      slots: { default: '<input class="probe">' },
    })
    const classes = [...w.element.children].map(el => el.className)
    expect(classes).toEqual(['mc-field__label', 'mc-field__hint', 'mc-field__control'])
  })

  it('laisse le message d\'erreur en dernier', () => {
    // ⚠️ L'erreur reste SOUS le contrôle : la remonter la ferait lire avant la
    // saisie qu'elle commente.
    const w = mount(McField, {
      props: { label: 'Adresse e-mail', error: 'Adresse invalide' },
      slots: { default: '<input class="probe">' },
    })
    const classes = [...w.element.children].map(el => el.className)
    expect(classes[classes.length - 1]).toContain('mc-field__error')
  })

  it('vaut aussi pour McInput, qui passe par McField', () => {
    const w = mount(McInput, { props: { label: 'Langue', hint: 'Sert aussi aux e-mails' } })
    expect(w.find('.mc-field__control .mc-input').exists()).toBe(true)
  })
})

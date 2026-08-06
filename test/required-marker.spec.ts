// @vitest-environment happy-dom
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import McField from '../src/components/McField/McField.vue'
import McInput from '../src/components/McInput/McInput.vue'
import McSelect from '../src/components/McSelect/McSelect.vue'

/**
 * Un champ obligatoire doit se VOIR, sans que le consommateur ait à y penser.
 *
 * ⚠️ Le marqueur existait déjà, mais conditionné à une prop `requiredLabel` que
 * l'app devait passer. Aucun formulaire ne la passait : l'utilisateur découvrait
 * qu'un champ était obligatoire en voyant son enregistrement refusé, sans savoir
 * lequel. Un marqueur optionnel est un marqueur oublié — d'où ces tests, qui
 * verrouillent le comportement PAR DÉFAUT, celui qu'on obtient sans rien faire.
 */
const COMPONENTS_DIR = join(import.meta.dirname, '..', 'src', 'components')

describe('marqueur de champ obligatoire', () => {
  it('s\'affiche sans qu\'on passe de libellé', () => {
    const w = mount(McField, { props: { label: 'Titre', required: true } })
    expect(w.find('.mc-field__required').exists()).toBe(true)
    expect(w.find('.mc-field__required').text()).toBe('*')
  })

  it('laisse l\'app fournir son libellé traduit', () => {
    const w = mount(McField, { props: { label: 'Titre', required: true, requiredLabel: 'obligatoire' } })
    expect(w.find('.mc-field__required').text()).toBe('obligatoire')
  })

  it('ne marque rien quand le champ est facultatif', () => {
    const w = mount(McField, { props: { label: 'Titre' } })
    expect(w.find('.mc-field__required').exists()).toBe(false)
  })

  /**
   * Les enveloppes sont le VRAI point d'usage : personne ne monte un McField nu
   * dans un formulaire. Un défaut qui ne traverserait pas l'enveloppe laisserait
   * le défaut d'origine intact.
   */
  it.each([['McInput', McInput], ['McSelect', McSelect]] as const)(
    '%s marque aussi par défaut', (_name, component) => {
      const w = mount(component, { props: { label: 'Titre', required: true } })
      // ⚠️ Vérifier le TEXTE, pas seulement la présence du nœud : un marqueur
      // vide passe le test d'existence et ne se voit pas à l'écran. C'est
      // exactement l'état dans lequel le composant se trouvait.
      expect(w.find('.mc-field__required').text()).not.toBe('')
    })

  /**
   * Garde de non-régression : tout composant qui accepte `required` doit finir
   * par rendre le marqueur — directement, ou en déléguant à McField. Sans cette
   * garde, un futur composant de saisie réintroduirait le trou en silence.
   */
  it('tout composant acceptant `required` rend ou délègue le marqueur', () => {
    const offenders: string[] = []

    for (const dir of readdirSync(COMPONENTS_DIR, { withFileTypes: true })) {
      if (!dir.isDirectory()) continue
      const file = join(COMPONENTS_DIR, dir.name, `${dir.name}.vue`)
      let src: string
      try { src = readFileSync(file, 'utf8') }
      catch { continue }

      if (!/^\s*required\?:\s*boolean/m.test(src)) continue

      const rendersMarker = src.includes('mc-field__required')
      const delegatesToField = /:required(-label)?=/.test(src) && src.includes('McField')
      if (!rendersMarker && !delegatesToField) offenders.push(dir.name)
    }

    expect(offenders).toEqual([])
  })
})

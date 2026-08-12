import { describe, expect, it } from 'vitest'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import McSelect from '../src/components/McSelect/McSelect.vue'

/**
 * LE RENDU SERVEUR SÉLECTIONNE VRAIMENT L'OPTION COURANTE.
 *
 * ⚠️ Vue ne traduit un `:value` de `<select>` en attribut `selected` que pour
 * `v-model`. Avec une liaison simple — ce que fait ce composant, parce qu'il
 * expose `modelValue` — le HTML livré par le serveur ne sélectionne RIEN : le
 * navigateur affiche la première option, c'est-à-dire le libellé neutre, alors
 * que la valeur est posée. L'hydratation corrige ensuite, en silence.
 *
 * ⚠️ MESURÉ LE 2026-08-12 sur `machinery360-web/distributeurs` : la liste
 * arrivait filtrée sur la France et le menu annonçait « Tous les pays ». Le
 * contrôle contredisait la page qu'il commande — devant un robot, un lecteur
 * sans JavaScript, ou simplement avant l'hydratation.
 *
 * ⚠️ Ce test rend au SERVEUR, pas dans happy-dom. Monté dans un DOM, le
 * composant passe : c'est le navigateur qui applique la propriété `value`. Le
 * défaut n'existe qu'en chaîne de caractères — donc seul un rendu en chaîne
 * peut le voir.
 */
const OPTIONS = [
  { value: 'FR', label: 'France (10)' },
  { value: 'DE', label: 'Allemagne (5)' },
]

const render = (props: Record<string, unknown>) =>
  renderToString(createSSRApp({ render: () => h(McSelect, props) }))

describe('McSelect — rendu serveur', () => {
  it('marque `selected` sur l’option courante', async () => {
    const html = await render({ modelValue: 'FR', options: OPTIONS, placeholder: 'Tous les pays' })
    expect(html).toMatch(/<option value="FR"[^>]*selected/)
    expect(html, 'l’autre option est sélectionnée aussi').not.toMatch(/<option value="DE"[^>]*selected/)
  })

  it('laisse le libellé neutre sélectionné quand rien n’est choisi', async () => {
    const html = await render({ modelValue: '', options: OPTIONS, placeholder: 'Tous les pays' })
    /**
     * ⚠️ `value` SANS guillemets. Le rendu serveur de Vue écrit une chaîne vide
     * en attribut nu — `<option value disabled selected>` — ce qui est
     * strictement équivalent à `value=""` en HTML. Une première version de ce
     * test exigeait `value=""` et échouait sur un composant correct : le garde
     * accusait le code au lieu de se corriger lui-même.
     */
    expect(html).toMatch(/<option value(=""|\s)[^>]*selected/)
    expect(html).not.toMatch(/<option value="FR"[^>]*selected/)
  })

  it('compare en chaîne, pour les listes numériques', async () => {
    /**
     * ⚠️ Une option peut porter un `number` (`{ value: 2024 }`) là où le modèle
     * porte la chaîne rendue par le `<select>`. `2024 === '2024'` est faux, et
     * la sélection se perdrait sur les seules listes numériques — c'est-à-dire
     * là où personne ne pense à regarder.
     */
    const html = await render({
      modelValue: '2024',
      options: [{ value: 2023, label: '2023' }, { value: 2024, label: '2024' }],
    })
    expect(html).toMatch(/<option value="2024"[^>]*selected/)
    expect(html).not.toMatch(/<option value="2023"[^>]*selected/)
  })
})

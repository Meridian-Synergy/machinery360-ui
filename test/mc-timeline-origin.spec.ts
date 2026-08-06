// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import McMaintenanceTimeline from '../src/components/McMaintenanceTimeline/McMaintenanceTimeline.vue'

/**
 * La frise doit s'ancrer à zéro : « 182 h · 200 h » se lit comme deux jalons
 * voisins, alors que l'un est presque toute la vie de la machine.
 */
const MILESTONES = [{ dueAtHours: 200, bucket: 'soon' as const, count: 4 }]

const hours = (w: ReturnType<typeof mount>) =>
  w.findAll('.mc-timeline__hours').map(n => n.text())

describe('McMaintenanceTimeline — origine', () => {
  it('place l\'origine en tête quand un libellé est fourni', () => {
    const w = mount(McMaintenanceTimeline, {
      props: { hours: 182, milestones: MILESTONES, originLabel: 'Mise en service' },
    })
    expect(hours(w)).toEqual(['0 h', '182 h', '200 h'])
  })

  it('n\'affiche aucune origine sans libellé — le comportement d\'avant', () => {
    const w = mount(McMaintenanceTimeline, { props: { hours: 182, milestones: MILESTONES } })
    expect(hours(w)).toEqual(['182 h', '200 h'])
  })

  it('n\'affiche pas d\'origine sur une machine à zéro heure', () => {
    // Sinon « 0 h » et « vous êtes ici » désignent le même instant, côte à côte.
    const w = mount(McMaintenanceTimeline, {
      props: { hours: 0, milestones: MILESTONES, originLabel: 'Mise en service' },
    })
    expect(hours(w)).toEqual(['0 h', '200 h'])
    expect(w.findAll('.mc-timeline__item--origin')).toHaveLength(0)
  })
})

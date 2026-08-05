import type { Meta, StoryObj } from '@storybook/vue3'
import McMaintenanceTimeline from './McMaintenanceTimeline.vue'

const meta: Meta<typeof McMaintenanceTimeline> = {
  title: 'Components/McMaintenanceTimeline',
  component: McMaintenanceTimeline,
  parameters: {
    docs: {
      description: {
        component:
          '⚠️ Une timeline par PALIER, jamais par occurrence. Les intervalles vont de 8 h à '
          + '2000 h : en échelle linéaire le début s’écrase, et une tâche à 8 h produirait des '
          + 'dizaines de points. On regroupe par palier — 50, 200, 250, 500, 1000 h — ce qui est '
          + 'exactement la façon dont un manuel constructeur s’organise.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof McMaintenanceTimeline>

const fr = (n: number) => (n > 1 ? `${n} points` : `${n} point`)

export const Milieu: Story = {
  name: 'Compteur entre deux paliers',
  args: {
    hours: 182,
    nowLabel: 'Vous êtes ici',
    taskLabel: fr,
    milestones: [
      { dueAtHours: 50, bucket: 'past', count: 3 },
      { dueAtHours: 200, bucket: 'soon', count: 4 },
      { dueAtHours: 250, bucket: 'soon', count: 3 },
      { dueAtHours: 500, bucket: 'soon', count: 5 },
      { dueAtHours: 1000, bucket: 'soon', count: 4 },
    ],
  },
}

export const SurEcheance: Story = {
  name: 'Compteur sur une échéance',
  args: {
    hours: 250,
    nowLabel: 'Vous êtes ici',
    taskLabel: fr,
    milestones: [
      { dueAtHours: 200, bucket: 'past', count: 4 },
      { dueAtHours: 250, bucket: 'due', count: 3 },
      { dueAtHours: 500, bucket: 'soon', count: 5 },
    ],
  },
}

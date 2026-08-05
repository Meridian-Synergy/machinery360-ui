import type { Meta, StoryObj } from '@storybook/vue3'
import McMachineDiagram from './McMachineDiagram.vue'

const meta: Meta<typeof McMachineDiagram> = {
  title: 'Components/McMachineDiagram',
  component: McMachineDiagram,
  parameters: {
    docs: {
      description: {
        component:
          '⚠️ Dessin MAISON, jamais décalqué d’une planche constructeur : reproduire une planche '
          + 'de manuel serait une contrefaçon, alors que « il y a un graisseur au pied de flèche » '
          + 'est un fait mécanique que personne ne possède. Conséquence heureuse : une silhouette '
          + 'par famille couvre tout le catalogue, au lieu d’une planche par modèle. '
          + 'Les libellés vivent hors de l’image — une vue, 29 langues.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof McMachineDiagram>

export const GraissageMiniPelle: Story = {
  name: 'Points de graissage — mini-pelle',
  args: {
    title: 'Points de graissage d’une mini-pelle',
    points: [
      { code: 'boom_foot', label: 'Axe de pied de flèche', x: 0.56, y: 0.47, hint: 'Articulation sur la tourelle' },
      { code: 'boom_cyl_base', label: 'Axe de fond de vérin de flèche', x: 0.53, y: 0.56, hint: null },
      { code: 'boom_cyl_rod', label: 'Axe de tige de vérin de flèche', x: 0.36, y: 0.39, hint: null },
      { code: 'arm_joint', label: 'Axe flèche / balancier', x: 0.245, y: 0.30, hint: 'Le coude' },
      { code: 'arm_cyl_base', label: 'Axe de fond de vérin de balancier', x: 0.33, y: 0.33, hint: null },
      { code: 'arm_cyl_rod', label: 'Axe de tige de vérin de balancier', x: 0.215, y: 0.415, hint: null },
      { code: 'bucket_joint', label: 'Axe d’articulation du godet', x: 0.15, y: 0.635, hint: null },
      { code: 'bucket_linkage', label: 'Axes de biellettes', x: 0.145, y: 0.60, hint: null },
      { code: 'blade_cyl_base', label: 'Axe de fond de vérin de lame', x: 0.36, y: 0.72, hint: null },
      { code: 'slew_teeth', label: 'Graisseur de denture de couronne', x: 0.545, y: 0.625, hint: 'Sous la tourelle' },
    ],
  },
}

/** Sans points, le schéma reste utile : il situe la machine. */
export const SansPoints: Story = {
  name: 'Aucun point',
  args: { title: 'Silhouette seule' },
}

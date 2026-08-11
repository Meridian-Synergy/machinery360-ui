import{M as t}from"./McButton-CGhSEO_o.js";import"./iframe-B2prD8b5.js";import"./preload-helper-PPVm8Dsz.js";import"./McSpinner-C8jC_jkd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Components/McButton",component:t,argTypes:{variant:{control:"select",options:["primary","secondary","warning","danger","ghost"]},size:{control:"select",options:["sm","md","lg"]}},args:{variant:"primary",size:"md"}},r={render:s=>({components:{McButton:t},setup:()=>({args:s}),template:'<McButton v-bind="args">Enregistrer le relevé</McButton>'})},e={render:()=>({components:{McButton:t},template:`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton variant="primary">Action principale</McButton>
        <McButton variant="secondary">Annuler / retour</McButton>
        <McButton variant="warning">Action réversible</McButton>
        <McButton variant="danger">Supprimer</McButton>
        <McButton variant="ghost">Action tertiaire</McButton>
      </div>`})},a={render:()=>({components:{McButton:t},template:`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton size="sm">Small</McButton>
        <McButton size="md">Medium</McButton>
        <McButton size="lg">Large</McButton>
      </div>`})},o={render:()=>({components:{McButton:t},template:`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton loading>Chargement</McButton>
        <McButton disabled>Désactivé</McButton>
        <McButton href="#">Lien</McButton>
        <McButton as="a" href="#" disabled>Lien désactivé</McButton>
      </div>`})},n={render:()=>({components:{McButton:t},template:`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton as="a" href="#">Navigation interne (ici : &lt;a&gt;, en app : NuxtLink)</McButton>
        <McButton href="https://example.com" variant="secondary">Lien sortant</McButton>
      </div>`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      McButton
    },
    setup: () => ({
      args
    }),
    template: '<McButton v-bind="args">Enregistrer le relevé</McButton>'
  })
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McButton
    },
    template: \`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton variant="primary">Action principale</McButton>
        <McButton variant="secondary">Annuler / retour</McButton>
        <McButton variant="warning">Action réversible</McButton>
        <McButton variant="danger">Supprimer</McButton>
        <McButton variant="ghost">Action tertiaire</McButton>
      </div>\`
  })
}`,...e.parameters?.docs?.source},description:{story:`The fixed taxonomy — decided once, never per screen. Reproduce these exact
variants for the same semantic action rather than inventing a look that
"seems right": divergent CTAs are a structural defect, not a matter of taste.`,...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McButton
    },
    template: \`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton size="sm">Small</McButton>
        <McButton size="md">Medium</McButton>
        <McButton size="lg">Large</McButton>
      </div>\`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McButton
    },
    template: \`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton loading>Chargement</McButton>
        <McButton disabled>Désactivé</McButton>
        <McButton href="#">Lien</McButton>
        <McButton as="a" href="#" disabled>Lien désactivé</McButton>
      </div>\`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McButton
    },
    template: \`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton as="a" href="#">Navigation interne (ici : &lt;a&gt;, en app : NuxtLink)</McButton>
        <McButton href="https://example.com" variant="secondary">Lien sortant</McButton>
      </div>\`
  })
}`,...n.parameters?.docs?.source},description:{story:"Naviguer DANS l'app : `:as=\"NuxtLink\"`, jamais `href`.\n\n`href` rend un `<a>` nu, dont le clic recharge la page entière — en SPA cela\nrefait l'init de session et repart d'un écran blanc. On garde `href` pour les\nliens sortants (un manuel constructeur, une doc externe) et `as` pour tout ce\nqui reste dans l'app.",...n.parameters?.docs?.description}}};const m=["Playground","Taxonomy","Sizes","States","AsLink"];export{n as AsLink,r as Playground,a as Sizes,o as States,e as Taxonomy,m as __namedExportsOrder,d as default};

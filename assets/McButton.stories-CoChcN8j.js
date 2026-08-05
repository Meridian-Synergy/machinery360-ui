import{M as e}from"./McButton-DejvLVag.js";import"./iframe-DBGXweBW.js";import"./preload-helper-PPVm8Dsz.js";import"./McSpinner-CSuSutjD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Components/McButton",component:e,argTypes:{variant:{control:"select",options:["primary","secondary","warning","danger","ghost"]},size:{control:"select",options:["sm","md","lg"]}},args:{variant:"primary",size:"md"}},n={render:o=>({components:{McButton:e},setup:()=>({args:o}),template:'<McButton v-bind="args">Enregistrer le relevé</McButton>'})},t={render:()=>({components:{McButton:e},template:`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton variant="primary">Action principale</McButton>
        <McButton variant="secondary">Annuler / retour</McButton>
        <McButton variant="warning">Action réversible</McButton>
        <McButton variant="danger">Supprimer</McButton>
        <McButton variant="ghost">Action tertiaire</McButton>
      </div>`})},r={render:()=>({components:{McButton:e},template:`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton size="sm">Small</McButton>
        <McButton size="md">Medium</McButton>
        <McButton size="lg">Large</McButton>
      </div>`})},a={render:()=>({components:{McButton:e},template:`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton loading>Chargement</McButton>
        <McButton disabled>Désactivé</McButton>
        <McButton href="#">Lien</McButton>
      </div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      McButton
    },
    setup: () => ({
      args
    }),
    template: '<McButton v-bind="args">Enregistrer le relevé</McButton>'
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source},description:{story:`The fixed taxonomy — decided once, never per screen. Reproduce these exact
variants for the same semantic action rather than inventing a look that
"seems right": divergent CTAs are a structural defect, not a matter of taste.`,...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McButton
    },
    template: \`
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
        <McButton loading>Chargement</McButton>
        <McButton disabled>Désactivé</McButton>
        <McButton href="#">Lien</McButton>
      </div>\`
  })
}`,...a.parameters?.docs?.source}}};const d=["Playground","Taxonomy","Sizes","States"];export{n as Playground,r as Sizes,a as States,t as Taxonomy,d as __namedExportsOrder,m as default};

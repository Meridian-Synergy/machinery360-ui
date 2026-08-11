import{M as r}from"./McBrandMark-CODkzsgu.js";import"./iframe-Ce9vwnt2.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Composants/McBrandMark",component:r},e={render:()=>({components:{McBrandMark:r},template:`
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McBrandMark name="Rippa" />
        <McBrandMark name="JCB" />
        <McBrandMark name="New Holland" />
        <McBrandMark name="Kubota" />
        <McBrandMark name="Caterpillar" />
      </div>`})},n={render:()=>({components:{McBrandMark:r},template:`
      <div style="display:flex;gap:12px;align-items:center">
        <McBrandMark name="Rippa" :size="28" />
        <McBrandMark name="Rippa" :size="44" />
        <McBrandMark name="Rippa" :size="64" />
      </div>`})},a={render:()=>({components:{McBrandMark:r},template:'<McBrandMark name="Rippa" logo-url="https://example.invalid/absent.png" :size="64" />'})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McBrandMark
    },
    template: \`
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McBrandMark name="Rippa" />
        <McBrandMark name="JCB" />
        <McBrandMark name="New Holland" />
        <McBrandMark name="Kubota" />
        <McBrandMark name="Caterpillar" />
      </div>\`
  })
}`,...e.parameters?.docs?.source},description:{story:`Le monogramme est le comportement PAR DÉFAUT, pas un pis-aller : on n'héberge
pas le logotype d'un constructeur tiers.`,...e.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McBrandMark
    },
    template: \`
      <div style="display:flex;gap:12px;align-items:center">
        <McBrandMark name="Rippa" :size="28" />
        <McBrandMark name="Rippa" :size="44" />
        <McBrandMark name="Rippa" :size="64" />
      </div>\`
  })
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McBrandMark
    },
    template: \`<McBrandMark name="Rippa" logo-url="https://example.invalid/absent.png" :size="64" />\`
  })
}`,...a.parameters?.docs?.source},description:{story:"Une URL cassée retombe sur le monogramme : jamais d'image morte.",...a.parameters?.docs?.description}}};const i=["Monogrammes","Tailles","LogoInjoignable"];export{a as LogoInjoignable,e as Monogrammes,n as Tailles,i as __namedExportsOrder,m as default};

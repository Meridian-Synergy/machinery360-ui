import{e as c,f as i,w as d,n as l,r as m,o as p,i as u}from"./iframe-Bb6POLqs.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{M}from"./McButton-DGR_Rgjz.js";import"./preload-helper-PPVm8Dsz.js";import"./McSpinner-9hW31VTT.js";const r=c({__name:"McCard",props:{flush:{type:Boolean},as:{default:"div"}},setup(e){return(o,C)=>(p(),i(m(e.as),{class:l(["mc-card",{"mc-card--flush":e.flush}])},{default:d(()=>[u(o.$slots,"default",{},void 0,!0)]),_:3},8,["class"]))}}),s=f(r,[["__scopeId","data-v-63565fb3"]]);r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{exportName:"default",displayName:"McCard",description:"",tags:{},props:[{name:"flush",description:"Removes the inner padding — for cards that host their own layout",required:!1,type:{name:"boolean"}},{name:"as",description:"Semantic element to render",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McCard/McCard.vue"]});const t=c({__name:"McContainer",props:{width:{default:"default"},as:{default:"div"}},setup(e){return(o,C)=>(p(),i(m(e.as),{class:l(["mc-container",`mc-container--${e.width}`])},{default:d(()=>[u(o.$slots,"default",{},void 0,!0)]),_:3},8,["class"]))}}),h=f(t,[["__scopeId","data-v-22feaa47"]]);t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"McContainer",description:"",tags:{},props:[{name:"width",description:"`narrow` for reading-width content (forms, articles)",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"narrow"'},{name:'"wide"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"as",description:"Semantic element to render",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'div'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McContainer/McContainer.vue"]});const x={title:"Components/Layout",component:s},n={render:()=>({components:{McCard:s,McButton:M},template:`
      <McCard style="max-width:420px">
        <h3 style="margin:0 0 8px">Rippa R13 Pro</h3>
        <p style="margin:0 0 16px;color:var(--mc-color-muted)">182 h au compteur</p>
        <McButton size="sm">Saisir un relevé</McButton>
      </McCard>`})},a={name:"Content rail",render:()=>({components:{McContainer:h,McCard:s},template:`
      <div style="background:var(--mc-color-bg);padding-block:24px">
        <McContainer>
          <McCard>Rail par défaut — 1200px</McCard>
        </McContainer>
        <McContainer width="narrow" style="margin-top:16px">
          <McCard>Rail « narrow » — 720px, largeur de lecture</McCard>
        </McContainer>
      </div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McCard,
      McButton
    },
    template: \`
      <McCard style="max-width:420px">
        <h3 style="margin:0 0 8px">Rippa R13 Pro</h3>
        <p style="margin:0 0 16px;color:var(--mc-color-muted)">182 h au compteur</p>
        <McButton size="sm">Saisir un relevé</McButton>
      </McCard>\`
  })
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Content rail',
  render: () => ({
    components: {
      McContainer,
      McCard
    },
    template: \`
      <div style="background:var(--mc-color-bg);padding-block:24px">
        <McContainer>
          <McCard>Rail par défaut — 1200px</McCard>
        </McContainer>
        <McContainer width="narrow" style="margin-top:16px">
          <McCard>Rail « narrow » — 720px, largeur de lecture</McCard>
        </McContainer>
      </div>\`
  })
}`,...a.parameters?.docs?.source},description:{story:`The rail is the single source of truth for content width. A page that rolls
its own max-width drifts from every other page — titles stop aligning.`,...a.parameters?.docs?.description}}};const R=["Card","ContentRail"];export{n as Card,a as ContentRail,R as __namedExportsOrder,x as default};

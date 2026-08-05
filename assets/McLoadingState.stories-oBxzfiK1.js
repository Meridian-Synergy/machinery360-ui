import{e as i,j as s,p as c,z as p,t as l,h as d,o}from"./iframe-BYkfA92X.js";import{M as r}from"./McSpinner-B92kwwWP.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const u={class:"mc-loading-state",role:"status"},g={class:"mc-loading-state__icon"},_={key:0,class:"mc-loading-state__label"},a=i({__name:"McLoadingState",props:{label:{},size:{default:32}},setup(t){return(f,y)=>(o(),s("div",u,[c("div",g,[p(r,{size:t.size},null,8,["size"])]),t.label?(o(),s("p",_,l(t.label),1)):d("",!0)]))}}),S=m(a,[["__scopeId","data-v-dcf5fee4"]]);a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"McLoadingState",description:"",tags:{},props:[{name:"label",description:"Localized loading text; omit for a spinner-only block",required:!1,type:{name:"string"}},{name:"size",description:"Spinner diameter in pixels",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"32"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McLoadingState/McLoadingState.vue"]});const z={title:"Components/Loading",component:S,parameters:{docs:{description:{component:'Two scales, one system. McLoadingState for a page/section, McSpinner inline. Never a text-only "Loading…", never a spinner SVG copied into a page.'}}}},e={args:{label:"Chargement du plan d’entretien…"}},n={name:"Spinner (inline)",render:()=>({components:{McSpinner:r},template:`
      <p style="display:flex;align-items:center;gap:8px">
        <McSpinner :size="14" /> Analyse du compteur en cours
      </p>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Chargement du plan d’entretien…'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Spinner (inline)',
  render: () => ({
    components: {
      McSpinner
    },
    template: \`
      <p style="display:flex;align-items:center;gap:8px">
        <McSpinner :size="14" /> Analyse du compteur en cours
      </p>\`
  })
}`,...n.parameters?.docs?.source}}};const L=["Section","SpinnerOnly"];export{e as Section,n as SpinnerOnly,L as __namedExportsOrder,z as default};

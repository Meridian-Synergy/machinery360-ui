import{e as d,j as s,t as m,h as p,p as u,i as f,n as v,g as h,o as c}from"./iframe-DzYrQLRZ.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const M=["role"],g={key:0,class:"mc-alert__title"},y={class:"mc-alert__body"},a=d({__name:"McAlert",props:{variant:{default:"info"},title:{},assertive:{type:Boolean}},setup(t){const i=t,o=h(()=>i.assertive||i.variant==="error"?"alert":"status");return(l,_)=>(c(),s("div",{class:v(["mc-alert",`mc-alert--${t.variant}`]),role:o.value},[t.title?(c(),s("p",g,m(t.title),1)):p("",!0),u("div",y,[f(l.$slots,"default",{},void 0,!0)])],10,M))}}),r=A(a,[["__scopeId","data-v-4c58cfae"]]);a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"McAlert",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'info'"}},{name:"title",description:"Optional heading above the message",required:!1,type:{name:"string"}},{name:"assertive",description:'Announce immediately (role="alert") instead of politely',required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McAlert/McAlert.vue"]});const C={title:"Components/McAlert",component:r},n={render:()=>({components:{McAlert:r},template:`
      <div style="display:flex;flex-direction:column;gap:16px;max-width:640px">
        <McAlert variant="info" title="Plan générique">
          Ce modèle n’est pas encore catalogué : le plan affiché est celui de la famille
          « mini-pelle 1–3 t ».
        </McAlert>
        <McAlert variant="success">Relevé enregistré. Prochaine échéance à 250 h.</McAlert>
        <McAlert variant="warning" title="Échéance proche">
          Vidange moteur dans 12 h de fonctionnement.
        </McAlert>
        <McAlert variant="error" title="Échéance dépassée">
          Graissage de la couronne d’orientation en retard de 30 h.
        </McAlert>
      </div>`})},e={render:()=>({components:{McAlert:r},template:`
      <div style="max-width:640px">
        <McAlert variant="info">
          Information donnée à titre indicatif. Le manuel du constructeur fait foi.
        </McAlert>
      </div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McAlert
    },
    template: \`
      <div style="display:flex;flex-direction:column;gap:16px;max-width:640px">
        <McAlert variant="info" title="Plan générique">
          Ce modèle n’est pas encore catalogué : le plan affiché est celui de la famille
          « mini-pelle 1–3 t ».
        </McAlert>
        <McAlert variant="success">Relevé enregistré. Prochaine échéance à 250 h.</McAlert>
        <McAlert variant="warning" title="Échéance proche">
          Vidange moteur dans 12 h de fonctionnement.
        </McAlert>
        <McAlert variant="error" title="Échéance dépassée">
          Graissage de la couronne d’orientation en retard de 30 h.
        </McAlert>
      </div>\`
  })
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McAlert
    },
    template: \`
      <div style="max-width:640px">
        <McAlert variant="info">
          Information donnée à titre indicatif. Le manuel du constructeur fait foi.
        </McAlert>
      </div>\`
  })
}`,...e.parameters?.docs?.source},description:{story:`The permanent disclaimer. Every surface that gives maintenance guidance
carries it — the manufacturer's manual is what counts, we are indicative.`,...e.parameters?.docs?.description}}};const q=["Variants","Disclaimer"];export{e as Disclaimer,n as Variants,q as __namedExportsOrder,C as default};

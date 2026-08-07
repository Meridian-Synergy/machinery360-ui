import{e as T,f as y,v as l,i as u,o as M,r as o}from"./iframe-UnUpR88b.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const V={class:"mc-text-size",role:"group"},_=["aria-label","disabled"],h=["aria-label","aria-pressed"],L=["aria-label","disabled"],p=90,g=130,f=10,n=T({__name:"McTextSizeToggle",props:{modelValue:{default:100},decreaseLabel:{default:"Decrease text size"},resetLabel:{default:"Reset text size"},increaseLabel:{default:"Increase text size"}},emits:["update:modelValue"],setup(e,{emit:x}){const m=e,z=x,v=u(()=>m.modelValue>p),b=u(()=>m.modelValue<g),i=c=>z("update:modelValue",Math.min(g,Math.max(p,c)));return(c,t)=>(M(),y("div",V,[l("button",{type:"button",class:"mc-text-size__btn mc-text-size__btn--sm","aria-label":e.decreaseLabel,disabled:!v.value,onClick:t[0]||(t[0]=d=>i(e.modelValue-f))},"A−",8,_),l("button",{type:"button",class:"mc-text-size__btn","aria-label":e.resetLabel,"aria-pressed":e.modelValue===100,onClick:t[1]||(t[1]=d=>i(100))},"A",8,h),l("button",{type:"button",class:"mc-text-size__btn mc-text-size__btn--lg","aria-label":e.increaseLabel,disabled:!b.value,onClick:t[2]||(t[2]=d=>i(e.modelValue+f))},"A+",8,L)]))}}),r=S(n,[["__scopeId","data-v-c565f13b"]]);n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"McTextSizeToggle",description:"",tags:{},props:[{name:"modelValue",description:"Pourcentage courant. 100 = taille de référence.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"decreaseLabel",description:"Libellés localisés — le DS est i18n-agnostique.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Decrease text size'"}},{name:"resetLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Reset text size'"}},{name:"increaseLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Increase text size'"}}],events:[{name:"update:modelValue",type:{names:["number"]}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McTextSizeToggle/McTextSizeToggle.vue"]});const N={title:"Components/McTextSizeToggle",component:r,parameters:{docs:{description:{component:"Le composant n’applique RIEN : il émet un pourcentage, le consommateur pose `--mc-font-scale` sur `<html>` et le persiste. ⚠️ Prérequis : toute la typographie en `rem` — avec des `px`, le réglage paraît cassé alors qu’il fonctionne."}}}},s={render:()=>({components:{McTextSizeToggle:r},setup:()=>({size:o(100)}),template:`
      <div>
        <McTextSizeToggle v-model="size" />
        <p :style="{ fontSize: (size / 100) + 'rem' }" style="margin-top:16px">
          Vidanger l’huile moteur — échéance à 250 h ({{ size }} %)
        </p>
      </div>`})},a={render:()=>({components:{McTextSizeToggle:r},setup:()=>({min:o(90),max:o(130)}),template:`
      <div style="display:flex;gap:24px">
        <div><p style="font-size:.75rem">Minimum</p><McTextSizeToggle v-model="min" /></div>
        <div><p style="font-size:.75rem">Maximum</p><McTextSizeToggle v-model="max" /></div>
      </div>`})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McTextSizeToggle
    },
    setup: () => ({
      size: ref(100)
    }),
    template: \`
      <div>
        <McTextSizeToggle v-model="size" />
        <p :style="{ fontSize: (size / 100) + 'rem' }" style="margin-top:16px">
          Vidanger l’huile moteur — échéance à 250 h ({{ size }} %)
        </p>
      </div>\`
  })
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McTextSizeToggle
    },
    setup: () => ({
      min: ref(90),
      max: ref(130)
    }),
    template: \`
      <div style="display:flex;gap:24px">
        <div><p style="font-size:.75rem">Minimum</p><McTextSizeToggle v-model="min" /></div>
        <div><p style="font-size:.75rem">Maximum</p><McTextSizeToggle v-model="max" /></div>
      </div>\`
  })
}`,...a.parameters?.docs?.source},description:{story:"Aux bornes, les boutons se désactivent au lieu de ne rien faire en silence.",...a.parameters?.docs?.description}}};const A=["Playground","Bornes"];export{a as Bornes,s as Playground,A as __namedExportsOrder,N as default};

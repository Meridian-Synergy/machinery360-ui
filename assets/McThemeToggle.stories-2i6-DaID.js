import{e as d,o,j as n,q as r,y as u}from"./iframe-DrPw77Oy.js";import{_ as c}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const h=["aria-label"],p={key:0,viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"},g={key:1,viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"},l=d({__name:"McThemeToggle",props:{modelValue:{default:"light"},lightLabel:{default:"Switch to light theme"},darkLabel:{default:"Switch to dark theme"}},emits:["update:modelValue"],setup(t,{emit:s}){const i=s;return(f,e)=>(o(),n("button",{type:"button",class:"mc-theme","aria-label":t.modelValue==="dark"?t.lightLabel:t.darkLabel,onClick:e[0]||(e[0]=k=>i("update:modelValue",t.modelValue==="dark"?"light":"dark"))},[t.modelValue==="dark"?(o(),n("svg",p,[...e[1]||(e[1]=[r("circle",{cx:"12",cy:"12",r:"4"},null,-1),r("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4","stroke-linecap":"round"},null,-1)])])):(o(),n("svg",g,[...e[2]||(e[2]=[r("path",{d:"M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z","stroke-linejoin":"round"},null,-1)])]))],8,h))}}),m=c(l,[["__scopeId","data-v-8c3a734f"]]);l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"McThemeToggle",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:'"light"'},{name:'"dark"'}]},defaultValue:{func:!1,value:"'light'"}},{name:"lightLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Switch to light theme'"}},{name:"darkLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Switch to dark theme'"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:'"light"'},{name:'"dark"'}]}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McThemeToggle/McThemeToggle.vue"]});const M={title:"Components/McThemeToggle",component:m,parameters:{docs:{description:{component:"Contrôlé : le composant émet, le consommateur persiste et pose `data-theme` sur `<html>`. ⚠️ Le nom accessible annonce l’ACTION (« passer en thème sombre »), pas l’état — un lecteur d’écran ne voit ni soleil ni lune."}}}},a={render:()=>({components:{McThemeToggle:m},setup:()=>({theme:u("light")}),template:`
      <div>
        <McThemeToggle v-model="theme" light-label="Passer en thème clair" dark-label="Passer en thème sombre" />
        <p style="margin-top:12px;font-size:.875rem">Thème : {{ theme }}</p>
      </div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McThemeToggle
    },
    setup: () => ({
      theme: ref<'light' | 'dark'>('light')
    }),
    template: \`
      <div>
        <McThemeToggle v-model="theme" light-label="Passer en thème clair" dark-label="Passer en thème sombre" />
        <p style="margin-top:12px;font-size:.875rem">Thème : {{ theme }}</p>
      </div>\`
  })
}`,...a.parameters?.docs?.source}}};const y=["Playground"];export{a as Playground,y as __namedExportsOrder,M as default};

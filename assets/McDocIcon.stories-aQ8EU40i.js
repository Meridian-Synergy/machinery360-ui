import{e as m,j as i,q as t,t as f,h,n as v,l as k,g as l,o as u}from"./iframe-CM6uMHEs.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const y={key:0,class:"mc-doc-icon__ext"},o=m({__name:"McDocIcon",props:{kind:{default:"other"},url:{default:null},size:{default:36}},setup(a){const r=a,s=l(()=>{const e=(r.url??"").split(/[?#]/)[0]?.match(/\.([a-z0-9]{2,4})$/i);return e?e[1].toUpperCase():r.kind==="video"?"VIDÉO":null}),p=l(()=>{const e=s.value?.toLowerCase();return e==="pdf"?"pdf":r.kind==="video"||["mp4","mov","webm"].includes(e??"")?"video":"page"});return(e,c)=>(u(),i("span",{class:k(["mc-doc-icon",`mc-doc-icon--${p.value}`]),style:v({width:`${a.size}px`,height:`${Math.round(a.size*1.25)}px`})},[c[0]||(c[0]=t("svg",{viewBox:"0 0 32 40",class:"mc-doc-icon__sheet","aria-hidden":"true",focusable:"false"},[t("path",{d:"M4 2h16l8 8v28a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",fill:"currentColor",opacity:"0.12"}),t("path",{d:"M4 2h16l8 8v28a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linejoin":"round"}),t("path",{d:"M20 2v8h8",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linejoin":"round"})],-1)),s.value?(u(),i("span",y,f(s.value),1)):h("",!0)],6))}}),d=x(o,[["__scopeId","data-v-9f95e461"]]);o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"McDocIcon",description:"",tags:{},props:[{name:"kind",description:"Type éditorial du document : manual, parts, quickstart, video, other.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'other'"}},{name:"url",description:"URL du document — sert à déduire l'extension réelle.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"size",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"36"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McDocIcon/McDocIcon.vue"]});const D={title:"Composants/McDocIcon",component:d},n={render:()=>({components:{McDocIcon:d},template:`
      <div style="display:flex;gap:20px;align-items:flex-end">
        <McDocIcon kind="manual" url="https://x/manuel-r13.pdf" />
        <McDocIcon kind="parts" url="https://x/pieces.pdf" />
        <McDocIcon kind="video" url="https://youtu.be/abc" />
        <McDocIcon kind="quickstart" url="https://shop.rippa.com/fr/pages/user-manual" />
      </div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McDocIcon
    },
    template: \`
      <div style="display:flex;gap:20px;align-items:flex-end">
        <McDocIcon kind="manual" url="https://x/manuel-r13.pdf" />
        <McDocIcon kind="parts" url="https://x/pieces.pdf" />
        <McDocIcon kind="video" url="https://youtu.be/abc" />
        <McDocIcon kind="quickstart" url="https://shop.rippa.com/fr/pages/user-manual" />
      </div>\`
  })
}`,...n.parameters?.docs?.source},description:{story:`L'extension prime sur le type éditorial : c'est le FORMAT qui dit à
l'utilisateur ce qui va s'ouvrir.`,...n.parameters?.docs?.description}}};const _=["Formats"];export{n as Formats,_ as __namedExportsOrder,D as default};

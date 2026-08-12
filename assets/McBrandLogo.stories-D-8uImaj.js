import{e as d,w as g,f as p,u,n as f,j as h,r as x,i as y,o as m}from"./iframe-DWOgK6S3.js";import{M as v}from"./McBrandMark-CwvbooPS.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const w=["src","alt"],n=d({__name:"McBrandLogo",props:{name:{},logoUrl:{default:null},height:{default:56},maxWidth:{default:220}},setup(e){const l=e,t=x(!1);g(()=>l.logoUrl,()=>{t.value=!1});const c=y(()=>!!l.logoUrl&&!t.value);return(M,i)=>c.value?(m(),p("span",{key:0,class:"mc-brand-logo",style:f({height:`${e.height}px`,maxWidth:`${e.maxWidth}px`})},[u("img",{src:e.logoUrl,alt:e.name,onError:i[0]||(i[0]=E=>t.value=!0)},null,40,w)],4)):(m(),h(v,{key:1,name:e.name,size:e.height},null,8,["name","size"]))}}),L=U(n,[["__scopeId","data-v-f084fdd7"]]);n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"McBrandLogo",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}},{name:"logoUrl",description:"Logotype complet — l'image attendue ici.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"height",description:"Hauteur du logotype, en pixels. La largeur s'en déduit.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"56"}},{name:"maxWidth",description:`Largeur maximale, en pixels. Sans plafond, un logotype très allongé pousse
le reste de la ligne hors de l'écran sur un téléphone.`,required:!1,type:{name:"number"},defaultValue:{func:!1,value:"220"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McBrandLogo/McBrandLogo.vue"]});const I={title:"Marque/McBrandLogo",component:L,args:{name:"Rippa",height:56},parameters:{docs:{description:{component:`Le logotype à son format naturel — le pendant large de \`McBrandMark\`.

La comparaison « logotype dans un carré » vs « logotype dans sa bande » est
l'objet même de ce composant : c'est elle qu'il faut regarder.`}}}},B="data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60">
     <rect width="240" height="60" fill="#1560a8"/>
     <circle cx="30" cy="30" r="18" fill="#f5a623"/>
     <text x="60" y="40" font-family="sans-serif" font-size="28" fill="#fff">RIPPA</text>
   </svg>`),r={args:{logoUrl:B}},a={args:{logoUrl:null}},o={args:{logoUrl:"data:image/svg+xml;utf8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 60">
         <rect width="800" height="60" fill="#0f2a44"/>
         <text x="20" y="40" font-family="sans-serif" font-size="28" fill="#fff">MARQUE TRES TRES LONGUE</text>
       </svg>`),maxWidth:220}},s={args:{logoUrl:"https://example.invalid/absent.png"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    logoUrl: WIDE
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    logoUrl: null
  }
}`,...a.parameters?.docs?.source},description:{story:"Sans logotype déposé : le monogramme, à la même hauteur.",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    logoUrl: 'data:image/svg+xml;utf8,' + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 60">
         <rect width="800" height="60" fill="#0f2a44"/>
         <text x="20" y="40" font-family="sans-serif" font-size="28" fill="#fff">MARQUE TRES TRES LONGUE</text>
       </svg>\`),
    maxWidth: 220
  }
}`,...o.parameters?.docs?.source},description:{story:"Plafond de largeur : un logotype très allongé ne pousse pas la ligne dehors.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    logoUrl: 'https://example.invalid/absent.png'
  }
}`,...s.parameters?.docs?.source},description:{story:"Une URL cassée ne doit jamais laisser une image morte : repli monogramme.",...s.parameters?.docs?.description}}};const W=["Logotype","SansLogotype","TresAllonge","UrlCassee"];export{r as Logotype,a as SansLogotype,o as TresAllonge,s as UrlCassee,W as __namedExportsOrder,I as default};

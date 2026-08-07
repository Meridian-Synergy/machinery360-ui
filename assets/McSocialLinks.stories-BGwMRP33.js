import{e as k,f as o,F as f,s as b,p as x,i as g,o as c,v as m,t as y}from"./iframe-B5LkNHTM.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const v={key:0,class:"mc-socials"},L=["href"],z=["width","height"],M=["d"],V={class:"mc-visually-hidden"},u=k({__name:"McSocialLinks",props:{links:{default:()=>({})},labels:{default:()=>({})},size:{default:20}},setup(l){const p=l,d={youtube:"M23 12s0-3.9-.5-5.8a3 3 0 0 0-2.1-2.1C18.5 3.6 12 3.6 12 3.6s-6.5 0-8.4.5A3 3 0 0 0 1.5 6.2C1 8.1 1 12 1 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 8.4.5 8.4.5s6.5 0 8.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8zM9.8 15.6V8.4l6.2 3.6-6.2 3.6z",facebook:"M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z",instagram:"M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6zm8.4-11.2a1.5 1.5 0 1 1-3.1 0 1.5 1.5 0 0 1 3.1 0z",linkedin:"M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V9.5h3V19zM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.6-2.5s-1.8 1.2-1.8 2.4V19h-3V9.5h2.9v1.3h.05c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19z",x:"M18.2 2h3.3l-7.2 8.3L22.8 22h-6.6l-5.2-6.8L5 22H1.7l7.7-8.8L1.2 2h6.8l4.7 6.2L18.2 2zm-1.2 18h1.8L7.1 3.9H5.2L17 20z",tiktok:"M16.6 5.8a4.8 4.8 0 0 1-1-1.8h-2.7v10.9a2.4 2.4 0 1 1-1.9-2.4V9.7a5.4 5.4 0 1 0 4.6 5.3V9.4c1 .7 2.3 1.1 3.6 1.1V7.8a4.8 4.8 0 0 1-2.6-2z"},h=g(()=>Object.entries(p.links??{}).filter(([e,s])=>d[e]&&typeof s=="string"&&s.trim()).map(([e,s])=>({key:e,url:s,path:d[e],label:p.labels[e]??e})));return(e,s)=>h.value.length?(c(),o("ul",v,[(c(!0),o(f,null,b(h.value,n=>(c(),o("li",{key:n.key},[m("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",class:"mc-socials__link"},[(c(),o("svg",{width:l.size,height:l.size,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[m("path",{d:n.path},null,8,M)],8,z)),m("span",V,y(n.label),1)],8,L)]))),128))])):x("",!0)}}),S=_(u,[["__scopeId","data-v-7a7c83d5"]]);u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"McSocialLinks",description:"",tags:{},props:[{name:"links",description:"`{ youtube: 'https://…', facebook: '…' }` — les clés inconnues sont ignorées.",required:!1,type:{name:"union",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}]},{name:"null"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"labels",description:"Libellés traduits par réseau. Le DS ne connaît pas la langue de l'app.",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"size",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"20"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McSocialLinks/McSocialLinks.vue"]});const I={title:"Marque/McSocialLinks",component:S,args:{labels:{youtube:"YouTube",facebook:"Facebook",instagram:"Instagram"}},parameters:{docs:{description:{component:"Les liens sociaux d'une marque, en icônes plutôt qu'en URL brutes."}}}},r={args:{links:{youtube:"https://youtube.com/@x",facebook:"https://facebook.com/x"}}},i={args:{links:{youtube:"https://youtube.com/@x",facebook:"https://facebook.com/x",instagram:"https://instagram.com/x",linkedin:"https://linkedin.com/company/x",x:"https://x.com/x",tiktok:"https://tiktok.com/@x"}}},a={args:{links:{youtube:"https://youtube.com/@x",myspace:"https://myspace.com/x"}}},t={args:{links:{}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    links: {
      youtube: 'https://youtube.com/@x',
      facebook: 'https://facebook.com/x'
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    links: {
      youtube: 'https://youtube.com/@x',
      facebook: 'https://facebook.com/x',
      instagram: 'https://instagram.com/x',
      linkedin: 'https://linkedin.com/company/x',
      x: 'https://x.com/x',
      tiktok: 'https://tiktok.com/@x'
    }
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    links: {
      youtube: 'https://youtube.com/@x',
      myspace: 'https://myspace.com/x'
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"Une clé inconnue ne rend rien plutôt qu'une icône par défaut trompeuse.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    links: {}
  }
}`,...t.parameters?.docs?.source},description:{story:"Aucun lien : le composant ne rend RIEN, pas une liste vide.",...t.parameters?.docs?.description}}};const N=["DeuxReseaux","TousLesReseaux","ReseauInconnu","Aucun"];export{t as Aucun,r as DeuxReseaux,a as ReseauInconnu,i as TousLesReseaux,N as __namedExportsOrder,I as default};

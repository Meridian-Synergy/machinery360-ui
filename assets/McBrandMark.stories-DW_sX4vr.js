import{e as k,s as B,j as d,F as v,p as y,t as x,n as h,l as z,v as b,g as o,o as u}from"./iframe-CM6uMHEs.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const R=["src","alt"],i=k({__name:"McBrandMark",props:{name:{},iconUrl:{default:null},logoUrl:{default:null},size:{default:44}},setup(r){const n=r,m=b(!1);B(()=>[n.iconUrl,n.logoUrl],()=>{m.value=!1});const M=o(()=>n.iconUrl||n.logoUrl||null),p=o(()=>!!M.value&&!m.value),f=o(()=>{const e=n.name.trim().split(/[\s-]+/).filter(Boolean);if(e.length===0)return"?";if(e.length===1){const a=e[0];return(a.length>3?a.slice(0,1):a.slice(0,2)).toUpperCase()}return(e[0][0]+e[1][0]).toUpperCase()}),g=o(()=>{let e=0;for(const a of n.name)e=(e*31+a.charCodeAt(0))%360;return e});return(e,a)=>(u(),d("span",{class:z(["mc-brand-mark",{"mc-brand-mark--logo":p.value}]),style:h({width:`${r.size}px`,height:`${r.size}px`,fontSize:`${Math.round(r.size*.38)}px`,...p.value?{}:{background:`hsl(${g.value}, 42%, 34%)`,color:`hsl(${g.value}, 62%, 88%)`}})},[p.value?(u(),d("img",{key:0,src:M.value,alt:r.name,class:"mc-brand-mark__img",loading:"lazy",onError:a[0]||(a[0]=w=>m.value=!0)},null,40,R)):(u(),d(v,{key:1},[y(x(f.value),1)],64))],6))}}),c=U(i,[["__scopeId","data-v-f45e5de7"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"McBrandMark",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}},{name:"iconUrl",description:`Pastille CARRÉE, pour les listes. Prioritaire sur \`logoUrl\`.

⚠️ Un logotype est horizontal — un symbole et un mot côte à côte. Réduit à
40 px dans une pastille carrée, il devient illisible : on perd le mot ET le
symbole. D'où deux entrées distinctes plutôt qu'une seule image étirée.`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"logoUrl",description:"Logotype complet. Utilisé si aucune icône carrée n'est fournie.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"size",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"44"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McBrandMark/McBrandMark.vue"]});const N={title:"Composants/McBrandMark",component:c},s={render:()=>({components:{McBrandMark:c},template:`
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McBrandMark name="Rippa" />
        <McBrandMark name="JCB" />
        <McBrandMark name="New Holland" />
        <McBrandMark name="Kubota" />
        <McBrandMark name="Caterpillar" />
      </div>`})},l={render:()=>({components:{McBrandMark:c},template:`
      <div style="display:flex;gap:12px;align-items:center">
        <McBrandMark name="Rippa" :size="28" />
        <McBrandMark name="Rippa" :size="44" />
        <McBrandMark name="Rippa" :size="64" />
      </div>`})},t={render:()=>({components:{McBrandMark:c},template:'<McBrandMark name="Rippa" logo-url="https://example.invalid/absent.png" :size="64" />'})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:`Le monogramme est le comportement PAR DÉFAUT, pas un pis-aller : on n'héberge
pas le logotype d'un constructeur tiers.`,...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McBrandMark
    },
    template: \`<McBrandMark name="Rippa" logo-url="https://example.invalid/absent.png" :size="64" />\`
  })
}`,...t.parameters?.docs?.source},description:{story:"Une URL cassée retombe sur le monogramme : jamais d'image morte.",...t.parameters?.docs?.description}}};const S=["Monogrammes","Tailles","LogoInjoignable"];export{t as LogoInjoignable,s as Monogrammes,l as Tailles,S as __namedExportsOrder,N as default};

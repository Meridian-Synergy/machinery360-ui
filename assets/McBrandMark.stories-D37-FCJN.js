import{e as f,s as k,j as p,F as B,p as v,t as y,n as h,l as x,v as z,g as d,o as u}from"./iframe-CqlfC1nB.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const R=["src","alt"],l=f({__name:"McBrandMark",props:{name:{},logoUrl:{default:null},size:{default:44}},setup(n){const o=n,i=z(!1);k(()=>o.logoUrl,()=>{i.value=!1});const c=d(()=>!!o.logoUrl&&!i.value),g=d(()=>{const e=o.name.trim().split(/[\s-]+/).filter(Boolean);if(e.length===0)return"?";if(e.length===1){const a=e[0];return(a.length>3?a.slice(0,1):a.slice(0,2)).toUpperCase()}return(e[0][0]+e[1][0]).toUpperCase()}),M=d(()=>{let e=0;for(const a of o.name)e=(e*31+a.charCodeAt(0))%360;return e});return(e,a)=>(u(),p("span",{class:x(["mc-brand-mark",{"mc-brand-mark--logo":c.value}]),style:h({width:`${n.size}px`,height:`${n.size}px`,fontSize:`${Math.round(n.size*.38)}px`,...c.value?{}:{background:`hsl(${M.value}, 42%, 34%)`,color:`hsl(${M.value}, 62%, 88%)`}})},[c.value?(u(),p("img",{key:0,src:n.logoUrl,alt:n.name,class:"mc-brand-mark__img",loading:"lazy",onError:a[0]||(a[0]=w=>i.value=!0)},null,40,R)):(u(),p(B,{key:1},[v(y(g.value),1)],64))],6))}}),m=b(l,[["__scopeId","data-v-49b4adca"]]);l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"McBrandMark",description:"",tags:{},props:[{name:"name",required:!0,type:{name:"string"}},{name:"logoUrl",description:"URL du logo officiel. Absente ou en échec → monogramme.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"size",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"44"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McBrandMark/McBrandMark.vue"]});const L={title:"Composants/McBrandMark",component:m},r={render:()=>({components:{McBrandMark:m},template:`
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McBrandMark name="Rippa" />
        <McBrandMark name="JCB" />
        <McBrandMark name="New Holland" />
        <McBrandMark name="Kubota" />
        <McBrandMark name="Caterpillar" />
      </div>`})},t={render:()=>({components:{McBrandMark:m},template:`
      <div style="display:flex;gap:12px;align-items:center">
        <McBrandMark name="Rippa" :size="28" />
        <McBrandMark name="Rippa" :size="44" />
        <McBrandMark name="Rippa" :size="64" />
      </div>`})},s={render:()=>({components:{McBrandMark:m},template:'<McBrandMark name="Rippa" logo-url="https://example.invalid/absent.png" :size="64" />'})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:`Le monogramme est le comportement PAR DÉFAUT, pas un pis-aller : on n'héberge
pas le logotype d'un constructeur tiers.`,...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McBrandMark
    },
    template: \`<McBrandMark name="Rippa" logo-url="https://example.invalid/absent.png" :size="64" />\`
  })
}`,...s.parameters?.docs?.source},description:{story:"Une URL cassée retombe sur le monogramme : jamais d'image morte.",...s.parameters?.docs?.description}}};const N=["Monogrammes","Tailles","LogoInjoignable"];export{s as LogoInjoignable,r as Monogrammes,t as Tailles,N as __namedExportsOrder,L as default};

import{e as q,E as C,f as n,t as c,p,u as g,F as h,s as k,C as u,D as V,n as b,h as v,g as L,q as S,G as N,i as j,o as i,r as F}from"./iframe-DWOgK6S3.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const B={class:"mc-placer"},$={key:0,class:"mc-placer__target"},A={key:1,class:"mc-placer__hint"},D=["src","alt"],E=["title"],K=["aria-label"],R={class:"mc-placer__coords","aria-live":"polite"},f=q({__name:"McPointPlacer",props:N({src:{},alt:{},existing:{default:()=>[]},targetLabel:{default:""},hint:{default:""},disabled:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const y=a,l=C(a,"modelValue"),x=F(null);function M(s){if(y.disabled)return;const t=x.value?.querySelector("img");if(!t)return;const e=t.getBoundingClientRect(),d=(s.clientX-e.left)/e.width,w=(s.clientY-e.top)/e.height;l.value={x:Math.min(1,Math.max(0,Number(d.toFixed(4)))),y:Math.min(1,Math.max(0,Number(w.toFixed(4))))}}function o(s,t,e){if(y.disabled||!l.value)return;e.preventDefault();const d=e.shiftKey?.05:.01;l.value={x:Math.min(1,Math.max(0,l.value.x+s*d)),y:Math.min(1,Math.max(0,l.value.y+t*d))}}const r=s=>`${(s*100).toFixed(2)}%`,_=j(()=>l.value!==null);return(s,t)=>(i(),n("div",B,[a.targetLabel?(i(),n("p",$,c(a.targetLabel),1)):p("",!0),a.hint?(i(),n("p",A,c(a.hint),1)):p("",!0),g("figure",{ref_key:"figure",ref:x,class:v(["mc-placer__figure",{"mc-placer__figure--disabled":a.disabled}]),onPointerdown:M},[g("img",{src:a.src,alt:a.alt,draggable:"false"},null,8,D),(i(!0),n(h,null,k(a.existing,e=>(i(),n("span",{key:e.id,class:v(["mc-placer__existing",{"mc-placer__existing--disputed":e.state==="disputed"}]),style:b({left:r(e.x),top:r(e.y)}),title:e.code,"aria-hidden":"true"},null,14,E))),128)),l.value?(i(),n("button",{key:0,type:"button",class:"mc-placer__pin",style:b({left:r(l.value.x),top:r(l.value.y)}),"aria-label":a.targetLabel||a.alt,onClick:t[0]||(t[0]=V(()=>{},["stop"])),onKeydown:[t[1]||(t[1]=u(e=>o(-1,0,e),["left"])),t[2]||(t[2]=u(e=>o(1,0,e),["right"])),t[3]||(t[3]=u(e=>o(0,-1,e),["up"])),t[4]||(t[4]=u(e=>o(0,1,e),["down"]))]},null,44,K)):p("",!0)],34),g("p",R,[_.value?(i(),n(h,{key:0},[L(c(r(l.value.x))+" · "+c(r(l.value.y)),1)],64)):S(s.$slots,"empty",{},void 0,!0,1)])]))}}),P=z(f,[["__scopeId","data-v-175c38bb"]]);f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"McPointPlacer",description:"",tags:{},props:[{name:"src",required:!0,type:{name:"string"}},{name:"alt",required:!0,type:{name:"string"}},{name:"existing",description:"Points déjà posés sur ce modèle — pour ne pas redésigner le même.",required:!1,type:{name:"Array",elements:[{name:"{ id: string, code: string, x: number, y: number, state?: string }"}]},defaultValue:{func:!1,value:"() => []"}},{name:"targetLabel",description:"Libellé du point qu'on demande de poser.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"hint",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"empty"}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McPointPlacer/McPointPlacer.vue"]});const X={title:"Composants/McPointPlacer",component:P},I="data:image/svg+xml;base64,"+btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="480" height="320">
     <rect width="480" height="320" fill="#eef1f6"/>
     <text x="240" y="165" text-anchor="middle" font-family="sans-serif"
           font-size="15" fill="#5c6675">image de référence du modèle</text>
   </svg>`),m={render:()=>({components:{McPointPlacer:P},data:()=>({point:null}),template:`
      <McPointPlacer
        v-model="point" :src="'${I}'" alt="Schéma du modèle"
        target-label="Axe de pied de flèche"
        hint="Cliquez à l'endroit exact du graisseur. Les points gris sont déjà repérés."
        :existing="[
          { id: '1', code: 'boom_foot', x: 0.42, y: 0.38 },
          { id: '2', code: 'arm_joint', x: 0.63, y: 0.55, state: 'disputed' },
        ]" />`})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McPointPlacer
    },
    data: () => ({
      point: null
    }),
    template: \`
      <McPointPlacer
        v-model="point" :src="'\${SRC}'" alt="Schéma du modèle"
        target-label="Axe de pied de flèche"
        hint="Cliquez à l'endroit exact du graisseur. Les points gris sont déjà repérés."
        :existing="[
          { id: '1', code: 'boom_foot', x: 0.42, y: 0.38 },
          { id: '2', code: 'arm_joint', x: 0.63, y: 0.55, state: 'disputed' },
        ]" />\`
  })
}`,...m.parameters?.docs?.source}}};const Y=["Placement"];export{m as Placement,Y as __namedExportsOrder,X as default};

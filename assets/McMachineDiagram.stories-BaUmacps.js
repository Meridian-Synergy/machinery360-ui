import{e as f,f as l,B as M,u as t,F as p,s as _,i as A,o as s,C as k,D as w,h as b,t as r,g as S,p as D,r as P}from"./iframe-Ce9vwnt2.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const C={class:"mc-diagram"},N=["viewBox","aria-label"],V={class:"mc-diagram__points"},$=["aria-label","onClick","onKeydown","onMouseenter"],j=["cx","cy"],B=["cx","cy"],L=["x","y"],z={class:"mc-diagram__legend"},F=["onMouseenter"],G={class:"mc-diagram__legend-num"},I={key:0},v=400,g=260,u=f({__name:"McMachineDiagram",props:{points:{default:()=>[]},shape:{default:"mini-excavator"},title:{default:"Machine diagram"}},setup(m){const x=m,a=P(null),y=d=>({cx:d.x*v,cy:d.y*g}),h=A(()=>x.points.map((d,n)=>({...d,n:n+1,...y(d)})));return(d,n)=>(s(),l("figure",C,[(s(),l("svg",{viewBox:`0 0 ${v} ${g}`,class:"mc-diagram__svg",role:"img","aria-label":m.title},[n[2]||(n[2]=M('<g class="mc-diagram__body" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-361cdb8e><rect x="112" y="196" width="256" height="42" rx="21" data-v-361cdb8e></rect><circle cx="140" cy="217" r="12" data-v-361cdb8e></circle><circle cx="340" cy="217" r="12" data-v-361cdb8e></circle><path d="M160 231h160" class="mc-diagram__hint" data-v-361cdb8e></path><path d="M190 196v-14h130v14" data-v-361cdb8e></path><path d="M206 172h96" stroke-dasharray="4 3" data-v-361cdb8e></path><path d="M206 172v-44h34l14-24h74a10 10 0 0 1 10 10v58" data-v-361cdb8e></path><path d="M304 104V74h44v30" data-v-361cdb8e></path><path d="M348 104v68" data-v-361cdb8e></path><path d="M262 148h48v24h-48z" data-v-361cdb8e></path><path d="M92 196h44v-18H92z" data-v-361cdb8e></path><path d="M136 186l52 8" data-v-361cdb8e></path><path d="M224 122L140 66l-28 40" stroke-width="9" data-v-361cdb8e></path><path d="M112 106l-24 62" stroke-width="8" data-v-361cdb8e></path><path d="M88 168l-22 12 4 24 28 6 10-22z" stroke-width="4" data-v-361cdb8e></path><path d="M212 146l-72-48" stroke-dasharray="3 3" data-v-361cdb8e></path><path d="M132 86l-46 38" stroke-dasharray="3 3" data-v-361cdb8e></path><path d="M84 118l-16 44" stroke-dasharray="3 3" data-v-361cdb8e></path></g>',1)),t("g",V,[(s(!0),l(p,null,_(h.value,e=>(s(),l("g",{key:e.code,class:b(["mc-diagram__point",{"mc-diagram__point--on":a.value===e.code}]),tabindex:"0",role:"button","aria-label":e.label,onClick:c=>a.value=a.value===e.code?null:e.code,onKeydown:k(w(c=>a.value=a.value===e.code?null:e.code,["prevent"]),["enter"]),onMouseenter:c=>a.value=e.code,onMouseleave:n[0]||(n[0]=c=>a.value=null)},[t("circle",{cx:e.cx,cy:e.cy,r:"11",class:"mc-diagram__halo"},null,8,j),t("circle",{cx:e.cx,cy:e.cy,r:"8.5",class:"mc-diagram__disc"},null,8,B),t("text",{x:e.cx,y:e.cy+3.2,class:"mc-diagram__num"},r(e.n),9,L)],42,$))),128))])],8,N)),t("figcaption",z,[t("ol",null,[(s(!0),l(p,null,_(h.value,e=>(s(),l("li",{key:e.code,class:b({"mc-diagram__legend-item--on":a.value===e.code}),onMouseenter:c=>a.value=e.code,onMouseleave:n[1]||(n[1]=c=>a.value=null)},[t("span",G,r(e.n),1),t("span",null,[S(r(e.label)+" ",1),e.hint?(s(),l("em",I,r(e.hint),1)):D("",!0)])],42,F))),128))])])]))}}),K=q(u,[["__scopeId","data-v-361cdb8e"]]);u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"McMachineDiagram",description:"",tags:{},props:[{name:"points",description:"Points à repérer, coordonnées normalisées 0–1.",required:!1,type:{name:"Array",elements:[{name:"{ code: string, label: string, x: number, y: number, hint?: string | null }"}]},defaultValue:{func:!1,value:"() => []"}},{name:"shape",description:"Famille d'engin — seule `mini-excavator` est dessinée pour l'instant.",required:!1,type:{name:'"mini-excavator"'},defaultValue:{func:!1,value:"'mini-excavator'"}},{name:"title",description:"Titre accessible du schéma : une image sans description n'existe pas pour un lecteur d'écran.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Machine diagram'"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McMachineDiagram/McMachineDiagram.vue"]});const T={title:"Components/McMachineDiagram",component:K,parameters:{docs:{description:{component:"⚠️ Dessin MAISON, jamais décalqué d’une planche constructeur : reproduire une planche de manuel serait une contrefaçon, alors que « il y a un graisseur au pied de flèche » est un fait mécanique que personne ne possède. Conséquence heureuse : une silhouette par famille couvre tout le catalogue, au lieu d’une planche par modèle. Les libellés vivent hors de l’image — une vue, 29 langues."}}}},o={name:"Points de graissage — mini-pelle",args:{title:"Points de graissage d’une mini-pelle",points:[{code:"boom_foot",label:"Axe de pied de flèche",x:.56,y:.47,hint:"Articulation sur la tourelle"},{code:"boom_cyl_base",label:"Axe de fond de vérin de flèche",x:.53,y:.56,hint:null},{code:"boom_cyl_rod",label:"Axe de tige de vérin de flèche",x:.36,y:.39,hint:null},{code:"arm_joint",label:"Axe flèche / balancier",x:.245,y:.3,hint:"Le coude"},{code:"arm_cyl_base",label:"Axe de fond de vérin de balancier",x:.33,y:.33,hint:null},{code:"arm_cyl_rod",label:"Axe de tige de vérin de balancier",x:.215,y:.415,hint:null},{code:"bucket_joint",label:"Axe d’articulation du godet",x:.15,y:.635,hint:null},{code:"bucket_linkage",label:"Axes de biellettes",x:.145,y:.6,hint:null},{code:"blade_cyl_base",label:"Axe de fond de vérin de lame",x:.36,y:.72,hint:null},{code:"slew_teeth",label:"Graisseur de denture de couronne",x:.545,y:.625,hint:"Sous la tourelle"}]}},i={name:"Aucun point",args:{title:"Silhouette seule"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Points de graissage — mini-pelle',
  args: {
    title: 'Points de graissage d’une mini-pelle',
    points: [{
      code: 'boom_foot',
      label: 'Axe de pied de flèche',
      x: 0.56,
      y: 0.47,
      hint: 'Articulation sur la tourelle'
    }, {
      code: 'boom_cyl_base',
      label: 'Axe de fond de vérin de flèche',
      x: 0.53,
      y: 0.56,
      hint: null
    }, {
      code: 'boom_cyl_rod',
      label: 'Axe de tige de vérin de flèche',
      x: 0.36,
      y: 0.39,
      hint: null
    }, {
      code: 'arm_joint',
      label: 'Axe flèche / balancier',
      x: 0.245,
      y: 0.30,
      hint: 'Le coude'
    }, {
      code: 'arm_cyl_base',
      label: 'Axe de fond de vérin de balancier',
      x: 0.33,
      y: 0.33,
      hint: null
    }, {
      code: 'arm_cyl_rod',
      label: 'Axe de tige de vérin de balancier',
      x: 0.215,
      y: 0.415,
      hint: null
    }, {
      code: 'bucket_joint',
      label: 'Axe d’articulation du godet',
      x: 0.15,
      y: 0.635,
      hint: null
    }, {
      code: 'bucket_linkage',
      label: 'Axes de biellettes',
      x: 0.145,
      y: 0.60,
      hint: null
    }, {
      code: 'blade_cyl_base',
      label: 'Axe de fond de vérin de lame',
      x: 0.36,
      y: 0.72,
      hint: null
    }, {
      code: 'slew_teeth',
      label: 'Graisseur de denture de couronne',
      x: 0.545,
      y: 0.625,
      hint: 'Sous la tourelle'
    }]
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Aucun point',
  args: {
    title: 'Silhouette seule'
  }
}`,...i.parameters?.docs?.source},description:{story:"Sans points, le schéma reste utile : il situe la machine.",...i.parameters?.docs?.description}}};const W=["GraissageMiniPelle","SansPoints"];export{o as GraissageMiniPelle,i as SansPoints,W as __namedExportsOrder,T as default};

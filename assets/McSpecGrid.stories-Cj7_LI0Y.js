import{e as _,f as n,t as r,p as l,u as m,F as b,s as h,g as M,i as L,o as a,h as v}from"./iframe-T1BMsMVR.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const C={key:0,class:"mc-spec-grid"},q={key:0,class:"mc-spec-grid__head"},P={key:0,class:"mc-spec-grid__label"},S={key:1,class:"mc-spec-grid__iteration"},H={class:"mc-spec-grid__grid"},V={class:"mc-spec-grid__icon",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false"},R=["d"],N={class:"mc-spec-grid__key"},x={key:1,class:"mc-spec-grid__foot"},I={key:0,class:"mc-spec-grid__source"},G={key:0,class:"mc-spec-grid__source-label"},A=["href"],c=_({__name:"McSpecGrid",props:{items:{},unknownLabel:{},label:{default:""},iteration:{default:null},source:{default:null},sourceLabel:{default:""},contributeLabel:{default:""},contributeHref:{default:""}},setup(e){const g=e,d={engine:["M4 9h3l2-3h6l2 3h3v7h-3v3H7v-3H4z","M9 12h6"],power:["M13 3 5 14h6l-1 7 8-11h-6z"],weight:["M6 8h12l2 12H4z","M9 8a3 3 0 0 1 6 0"],bucket:["M4 7h16l-2 10H6z","M8 17v3","M16 17v3"],digging_depth:["M12 4v13","m7 12 5 5 5-5","M4 20h16"],digging_reach:["M4 20 20 6","M14 6h6v6","M4 20h4"],dump_height:["M12 20V7","m7 12 5-5 5 5","M4 20h16"],travel_speed:["M12 13a8 8 0 0 1 8-8","M12 13 17 8","M4 19h16"],gradeability:["M4 19 20 7","M4 19h16","M4 19V7"],track_width:["M4 12h16","m7 9-3 3 3 3","m17 9 3 3-3 3"],transport_length:["M3 12h18","m6 9-3 3 3 3","m18 9 3 3-3 3","M9 5h6v14H9z"],transport_width:["M5 6v12","M19 6v12","M5 12h14"],transport_height:["M12 3v18","m9 6 3-3 3 3","m9 18 3 3 3-3"],fuel_tank:["M5 20V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v14","M4 20h12","M14 9h3v8a2 2 0 0 0 2 2"],hydraulic_pressure:["M12 21a7 7 0 0 0 7-7c0-4-7-11-7-11S5 10 5 14a7 7 0 0 0 7 7z"],hydraulic_flow:["M4 8h10a3 3 0 0 1 0 6H7a3 3 0 0 0 0 6h13","M17 5l3 3-3 3"],battery:["M3 8h15v8H3z","M18 11h3v2h-3z","M7 12h6"],unknown:["M12 17h.01","M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7"]},k=i=>d[i]??d.unknown,p=L(()=>g.items.filter(i=>i.value===null).length);return(i,F)=>e.items.length?(a(),n("section",C,[e.label||e.iteration?(a(),n("header",q,[e.label?(a(),n("p",P,r(e.label),1)):l("",!0),e.iteration?(a(),n("p",S,r(e.iteration),1)):l("",!0)])):l("",!0),m("ul",H,[(a(!0),n(b,null,h(e.items,t=>(a(),n("li",{key:t.key,class:v(["mc-spec-grid__card",{"mc-spec-grid__card--unknown":t.value===null}])},[(a(),n("svg",V,[(a(!0),n(b,null,h(k(t.value===null?"unknown":t.key),(y,f)=>(a(),n("path",{key:f,d:y,stroke:"currentColor","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"},null,8,R))),128))])),m("span",N,r(t.label),1),m("span",{class:v(["mc-spec-grid__val",{"mc-spec-grid__val--unknown":t.value===null}])},r(t.value??e.unknownLabel),3)],2))),128))]),e.source||e.contributeHref&&p.value?(a(),n("footer",x,[e.source?(a(),n("p",I,[e.sourceLabel?(a(),n("span",G,r(e.sourceLabel),1)):l("",!0),M(" "+r(e.source),1)])):l("",!0),e.contributeHref&&e.contributeLabel&&p.value?(a(),n("a",{key:1,class:"mc-spec-grid__contribute",href:e.contributeHref},r(e.contributeLabel),9,A)):l("",!0)])):l("",!0)])):l("",!0)}}),D=w(c,[["__scopeId","data-v-7aa2c298"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"McSpecGrid",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"McSpecItem"}]}},{name:"unknownLabel",description:"Le libellé du « non connu », localisé. Obligatoire : c'est du VRAI texte.",required:!0,type:{name:"string"}},{name:"label",description:"Titre de la section.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"iteration",description:"L'itération constructeur — « R13-4 ». Affichée telle quelle.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"source",description:"D'où viennent les valeurs, et comment l'annoncer.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"sourceLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"contributeLabel",description:"Invitation à contribuer, affichée seulement s'il manque quelque chose.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"contributeHref",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McSpecGrid/McSpecGrid.vue"]});const W={title:"Components/McSpecGrid",component:D},z=[{key:"engine",label:"Moteur",value:"Kubota D722"},{key:"power",label:"Puissance",value:"10,2 kW"},{key:"weight",label:"Poids",value:"1 323 kg"},{key:"bucket",label:"Godet",value:"0,014 m³"},{key:"digging_depth",label:"Profondeur",value:"2 044 mm"},{key:"digging_reach",label:"Portée",value:"3 456 mm"},{key:"dump_height",label:"Déversement",value:"1 922 mm"},{key:"travel_speed",label:"Vitesse",value:"2,8 km/h"},{key:"gradeability",label:"Inclinaison",value:"30 %"},{key:"track_width",label:"Chenilles",value:"750 – 990 mm"},{key:"fuel_tank",label:"Réservoir",value:"10 L"},{key:"hydraulic_pressure",label:"Pression",value:"17 MPa"}],o={args:{label:"Caractéristiques",iteration:"R13-4",items:z,unknownLabel:"Non connu",sourceLabel:"Source :",source:"Fiche officielle rippa.com/product/mini-excavator-r13 · réservoir et pression : manuel R13 V4.1.1 p. 108"}},u={name:"Avec des « non connu »",args:{label:"Caractéristiques",items:[{key:"engine",label:"Moteur",value:"Yanmar"},{key:"power",label:"Puissance",value:"45 kW"},{key:"weight",label:"Poids",value:"8 200 kg"},{key:"bucket",label:"Godet",value:null},{key:"digging_depth",label:"Profondeur",value:"4 172 mm"},{key:"digging_reach",label:"Portée",value:null},{key:"dump_height",label:"Déversement",value:"5 257 mm"},{key:"travel_speed",label:"Vitesse",value:"4,4 km/h"},{key:"transport_length",label:"Longueur",value:null},{key:"transport_width",label:"Largeur",value:null},{key:"transport_height",label:"Hauteur",value:null}],unknownLabel:"Non connu",sourceLabel:"Source :",source:"Fiche officielle rippa.com/product/r82-small-excavator · portée non publiée : la ligne annonce 137,9 in pour 6 502 mm",contributeLabel:"Compléter cette fiche →",contributeHref:"#"}},s={args:{label:"Caractéristiques",items:[{key:"engine",label:"Moteur",value:"Kubota D1105"},{key:"power",label:"Puissance",value:"18,4 kW"},{key:"weight",label:"Poids",value:"1 230 kg"},{key:"bucket",label:"Godet",value:"0,16 m³"},{key:"dump_height",label:"Déversement",value:"1 725 mm"},{key:"travel_speed",label:"Vitesse",value:"8 km/h"},{key:"gradeability",label:"Inclinaison",value:"30 %"},{key:"transport_length",label:"Longueur",value:"2 655 mm"},{key:"transport_width",label:"Largeur",value:"1 000 mm"},{key:"transport_height",label:"Hauteur",value:"1 810 mm"},{key:"fuel_tank",label:"Réservoir",value:null},{key:"hydraulic_pressure",label:"Pression",value:null}],unknownLabel:"Non connu",contributeLabel:"Compléter cette fiche →",contributeHref:"#"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Caractéristiques',
    iteration: 'R13-4',
    items: R13,
    unknownLabel: 'Non connu',
    sourceLabel: 'Source :',
    source: 'Fiche officielle rippa.com/product/mini-excavator-r13 · réservoir et pression : manuel R13 V4.1.1 p. 108'
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Avec des « non connu »',
  args: {
    label: 'Caractéristiques',
    items: [{
      key: 'engine',
      label: 'Moteur',
      value: 'Yanmar'
    }, {
      key: 'power',
      label: 'Puissance',
      value: '45 kW'
    }, {
      key: 'weight',
      label: 'Poids',
      value: '8 200 kg'
    }, {
      key: 'bucket',
      label: 'Godet',
      value: null
    }, {
      key: 'digging_depth',
      label: 'Profondeur',
      value: '4 172 mm'
    }, {
      key: 'digging_reach',
      label: 'Portée',
      value: null
    }, {
      key: 'dump_height',
      label: 'Déversement',
      value: '5 257 mm'
    }, {
      key: 'travel_speed',
      label: 'Vitesse',
      value: '4,4 km/h'
    }, {
      key: 'transport_length',
      label: 'Longueur',
      value: null
    }, {
      key: 'transport_width',
      label: 'Largeur',
      value: null
    }, {
      key: 'transport_height',
      label: 'Hauteur',
      value: null
    }],
    unknownLabel: 'Non connu',
    sourceLabel: 'Source :',
    source: 'Fiche officielle rippa.com/product/r82-small-excavator · portée non publiée : la ligne annonce 137,9 in pour 6 502 mm',
    contributeLabel: 'Compléter cette fiche →',
    contributeHref: '#'
  }
}`,...u.parameters?.docs?.source},description:{story:`⚠️ LE CAS QUI JUSTIFIE LE COMPOSANT, et il n'a rien de marginal.

Sur les 22 modèles Rippa dépouillés, la moitié a des trous : le R82 n'a pas de
portée publiable (sa fiche annonce 137,9 in pour 6 502 mm), le R10 n'a pas de
puissance (trois motorisations), et aucune grosse pelle ne porte de réservoir.

La tuile creuse dit « nous ne l'avons pas ». Une tuile masquée dirait « cette
machine ne l'a pas » — ce qui est faux, et invérifiable par le lecteur.`,...u.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Caractéristiques',
    items: [{
      key: 'engine',
      label: 'Moteur',
      value: 'Kubota D1105'
    }, {
      key: 'power',
      label: 'Puissance',
      value: '18,4 kW'
    }, {
      key: 'weight',
      label: 'Poids',
      value: '1 230 kg'
    }, {
      key: 'bucket',
      label: 'Godet',
      value: '0,16 m³'
    }, {
      key: 'dump_height',
      label: 'Déversement',
      value: '1 725 mm'
    }, {
      key: 'travel_speed',
      label: 'Vitesse',
      value: '8 km/h'
    }, {
      key: 'gradeability',
      label: 'Inclinaison',
      value: '30 %'
    }, {
      key: 'transport_length',
      label: 'Longueur',
      value: '2 655 mm'
    }, {
      key: 'transport_width',
      label: 'Largeur',
      value: '1 000 mm'
    }, {
      key: 'transport_height',
      label: 'Hauteur',
      value: '1 810 mm'
    }, {
      key: 'fuel_tank',
      label: 'Réservoir',
      value: null
    }, {
      key: 'hydraulic_pressure',
      label: 'Pression',
      value: null
    }],
    unknownLabel: 'Non connu',
    contributeLabel: 'Compléter cette fiche →',
    contributeHref: '#'
  }
}`,...s.parameters?.docs?.source},description:{story:`La grille d'une chargeuse : son profil n'a ni profondeur ni portée de fouille
— les fiches Rippa n'en publient pas pour cette famille. C'est l'API qui
décide quelles tuiles servir, pas ce composant.`,...s.parameters?.docs?.description}}};const B=["Complete","AvecTrous","Chargeuse"];export{u as AvecTrous,s as Chargeuse,o as Complete,B as __namedExportsOrder,W as default};

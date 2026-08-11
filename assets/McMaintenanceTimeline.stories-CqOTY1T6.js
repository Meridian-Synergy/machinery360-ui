import{e as A,f as s,u as l,F as c,s as _,i as H,o,h as L,t as u,g as d}from"./iframe-Ce9vwnt2.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const w={class:"mc-timeline"},v={class:"mc-timeline__track"},M={class:"mc-timeline__hours"},x={class:"mc-timeline__label"},b=A({__name:"McMaintenanceTimeline",props:{hours:{},milestones:{default:()=>[]},nowLabel:{default:"Now"},hoursUnit:{default:"h"},taskLabel:{},originLabel:{default:void 0}},setup(n){const a=n,f=H(()=>{const r=[...a.milestones].sort((t,g)=>t.dueAtHours-g.dueAtHours),i=r.findIndex(t=>t.dueAtHours>a.hours),e=i===-1?r.length:i;return[...a.originLabel&&a.hours>0?[{kind:"origin",dueAtHours:0,bucket:"past",count:0}]:[],...r.filter(t=>t.dueAtHours>0).slice(0,e).map(t=>({kind:"milestone",...t})),{kind:"now",dueAtHours:a.hours,bucket:"due",count:0},...r.slice(e).map(t=>({kind:"milestone",...t}))]});return(r,i)=>(o(),s("div",w,[l("ol",v,[(o(!0),s(c,null,_(f.value,(e,k)=>(o(),s("li",{key:`${e.kind}-${e.dueAtHours}-${k}`,class:L(["mc-timeline__item",[`mc-timeline__item--${e.kind==="now"?"now":e.bucket}`,{"mc-timeline__item--now":e.kind==="now","mc-timeline__item--origin":e.kind==="origin"}]])},[i[0]||(i[0]=l("span",{class:"mc-timeline__dot","aria-hidden":"true"},null,-1)),l("span",M,u(e.dueAtHours)+" "+u(n.hoursUnit),1),l("span",x,[e.kind==="now"?(o(),s(c,{key:0},[d(u(n.nowLabel),1)],64)):e.kind==="origin"?(o(),s(c,{key:1},[d(u(n.originLabel),1)],64)):n.taskLabel?(o(),s(c,{key:2},[d(u(n.taskLabel(e.count)),1)],64)):(o(),s(c,{key:3},[d(u(e.count),1)],64))])],2))),128))])]))}}),q=y(b,[["__scopeId","data-v-3abc2a37"]]);b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:"default",displayName:"McMaintenanceTimeline",description:"",tags:{},props:[{name:"hours",description:"Compteur courant, en heures.",required:!0,type:{name:"number"}},{name:"milestones",description:"Échéances : chacune porte le palier auquel elle tombe.",required:!1,type:{name:"Array",elements:[{name:"{ dueAtHours: number, bucket: 'past' | 'overdue' | 'due' | 'soon', count: number }"}]},defaultValue:{func:!1,value:"() => []"}},{name:"nowLabel",description:"Libellés localisés (le DS est i18n-agnostique).",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Now'"}},{name:"hoursUnit",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'h'"}},{name:"taskLabel",required:!1,type:{name:"TSFunctionType"}},{name:"originLabel",description:`Libellé du point d'ORIGINE (0 h). Absent = pas d'origine affichée.

⚠️ Sans lui, la frise commence au compteur courant et ne dit rien de la
distance parcourue : « 182 h · 200 h » se lit comme deux jalons voisins,
alors que l'un est presque toute la vie de la machine et l'autre le
prochain rendez-vous. Ancrer à zéro rend l'échelle lisible.`,required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McMaintenanceTimeline/McMaintenanceTimeline.vue"]});const N={title:"Components/McMaintenanceTimeline",component:q,parameters:{docs:{description:{component:"⚠️ Une timeline par PALIER, jamais par occurrence. Les intervalles vont de 8 h à 2000 h : en échelle linéaire le début s’écrase, et une tâche à 8 h produirait des dizaines de points. On regroupe par palier — 50, 200, 250, 500, 1000 h — ce qui est exactement la façon dont un manuel constructeur s’organise."}}}},h=n=>n>1?`${n} points`:`${n} point`,m={name:"Compteur entre deux paliers",args:{hours:182,nowLabel:"Vous êtes ici",taskLabel:h,milestones:[{dueAtHours:50,bucket:"past",count:3},{dueAtHours:200,bucket:"soon",count:4},{dueAtHours:250,bucket:"soon",count:3},{dueAtHours:500,bucket:"soon",count:5},{dueAtHours:1e3,bucket:"soon",count:4}]}},p={name:"Compteur sur une échéance",args:{hours:250,nowLabel:"Vous êtes ici",taskLabel:h,milestones:[{dueAtHours:200,bucket:"past",count:4},{dueAtHours:250,bucket:"due",count:3},{dueAtHours:500,bucket:"soon",count:5}]}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Compteur entre deux paliers',
  args: {
    hours: 182,
    nowLabel: 'Vous êtes ici',
    taskLabel: fr,
    milestones: [{
      dueAtHours: 50,
      bucket: 'past',
      count: 3
    }, {
      dueAtHours: 200,
      bucket: 'soon',
      count: 4
    }, {
      dueAtHours: 250,
      bucket: 'soon',
      count: 3
    }, {
      dueAtHours: 500,
      bucket: 'soon',
      count: 5
    }, {
      dueAtHours: 1000,
      bucket: 'soon',
      count: 4
    }]
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Compteur sur une échéance',
  args: {
    hours: 250,
    nowLabel: 'Vous êtes ici',
    taskLabel: fr,
    milestones: [{
      dueAtHours: 200,
      bucket: 'past',
      count: 4
    }, {
      dueAtHours: 250,
      bucket: 'due',
      count: 3
    }, {
      dueAtHours: 500,
      bucket: 'soon',
      count: 5
    }]
  }
}`,...p.parameters?.docs?.source}}};const S=["Milieu","SurEcheance"];export{m as Milieu,p as SurEcheance,S as __namedExportsOrder,N as default};

import{e as _,j as s,p as c,F as i,k as A,g as H,o,n as L,t as r,m as k}from"./iframe-GCCbba0m.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const w={class:"mc-timeline"},y={class:"mc-timeline__track"},M={class:"mc-timeline__hours"},x={class:"mc-timeline__label"},d=_({__name:"McMaintenanceTimeline",props:{hours:{},milestones:{default:()=>[]},nowLabel:{default:"Now"},hoursUnit:{default:"h"},taskLabel:{}},setup(n){const p=n,h=H(()=>{const u=[...p.milestones].sort((t,f)=>t.dueAtHours-f.dueAtHours),a=u.findIndex(t=>t.dueAtHours>p.hours),e=a===-1?u.length:a;return[...u.slice(0,e).map(t=>({kind:"milestone",...t})),{kind:"now",dueAtHours:p.hours,bucket:"due",count:0},...u.slice(e).map(t=>({kind:"milestone",...t}))]});return(u,a)=>(o(),s("div",w,[c("ol",y,[(o(!0),s(i,null,A(h.value,(e,t)=>(o(),s("li",{key:`${e.kind}-${e.dueAtHours}-${t}`,class:L(["mc-timeline__item",[`mc-timeline__item--${e.kind==="now"?"now":e.bucket}`,{"mc-timeline__item--now":e.kind==="now"}]])},[a[0]||(a[0]=c("span",{class:"mc-timeline__dot","aria-hidden":"true"},null,-1)),c("span",M,r(e.dueAtHours)+" "+r(n.hoursUnit),1),c("span",x,[e.kind==="now"?(o(),s(i,{key:0},[k(r(n.nowLabel),1)],64)):n.taskLabel?(o(),s(i,{key:1},[k(r(n.taskLabel(e.count)),1)],64)):(o(),s(i,{key:2},[k(r(e.count),1)],64))])],2))),128))])]))}}),v=g(d,[["__scopeId","data-v-4e337732"]]);d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"McMaintenanceTimeline",description:"",tags:{},props:[{name:"hours",description:"Compteur courant, en heures.",required:!0,type:{name:"number"}},{name:"milestones",description:"Échéances : chacune porte le palier auquel elle tombe.",required:!1,type:{name:"Array",elements:[{name:"{ dueAtHours: number, bucket: 'past' | 'overdue' | 'due' | 'soon', count: number }"}]},defaultValue:{func:!1,value:"() => []"}},{name:"nowLabel",description:"Libellés localisés (le DS est i18n-agnostique).",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Now'"}},{name:"hoursUnit",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'h'"}},{name:"taskLabel",required:!1,type:{name:"TSFunctionType"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McMaintenanceTimeline/McMaintenanceTimeline.vue"]});const C={title:"Components/McMaintenanceTimeline",component:v,parameters:{docs:{description:{component:"⚠️ Une timeline par PALIER, jamais par occurrence. Les intervalles vont de 8 h à 2000 h : en échelle linéaire le début s’écrase, et une tâche à 8 h produirait des dizaines de points. On regroupe par palier — 50, 200, 250, 500, 1000 h — ce qui est exactement la façon dont un manuel constructeur s’organise."}}}},b=n=>n>1?`${n} points`:`${n} point`,l={name:"Compteur entre deux paliers",args:{hours:182,nowLabel:"Vous êtes ici",taskLabel:b,milestones:[{dueAtHours:50,bucket:"past",count:3},{dueAtHours:200,bucket:"soon",count:4},{dueAtHours:250,bucket:"soon",count:3},{dueAtHours:500,bucket:"soon",count:5},{dueAtHours:1e3,bucket:"soon",count:4}]}},m={name:"Compteur sur une échéance",args:{hours:250,nowLabel:"Vous êtes ici",taskLabel:b,milestones:[{dueAtHours:200,bucket:"past",count:4},{dueAtHours:250,bucket:"due",count:3},{dueAtHours:500,bucket:"soon",count:5}]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const N=["Milieu","SurEcheance"];export{l as Milieu,m as SurEcheance,N as __namedExportsOrder,C as default};

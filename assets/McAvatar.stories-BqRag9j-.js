import{e as A,f as g,u as d,t as m,n as y,h as M,i as u,o as x}from"./iframe-Ce9vwnt2.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const D={class:"mc-visually-hidden"},w={"aria-hidden":"true"},c=A({__name:"McAvatar",props:{name:{},label:{default:void 0},size:{default:"md"}},setup(i){const l=i,v=u(()=>{const e=l.name.split("@")[0].replace(/[._-]+/g," ").trim();if(!e)return"?";const a=e.split(/\s+/).filter(Boolean);return(a.length>1?`${a[0][0]}${a[1][0]}`:e.slice(0,2)).toUpperCase()}),p=["#1560A8","#0F766E","#7C3AED","#B45309","#BE123C","#3F6212"],f=u(()=>{let e=0;for(const a of l.name)e=e*31+a.charCodeAt(0)>>>0;return p[e%p.length]});return(e,a)=>(x(),g("span",{class:M(["mc-avatar",`mc-avatar--${i.size}`]),style:y({background:f.value})},[d("span",D,m(i.label??i.name),1),d("span",w,m(v.value),1)],6))}}),r=h(c,[["__scopeId","data-v-a52b8db5"]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"McAvatar",description:"",tags:{},props:[{name:"name",description:"Full name, e-mail, or anything identifying — initials are derived from it.",required:!0,type:{name:"string"}},{name:"label",description:"Read by assistive technology; the disc itself is decorative.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'}]},defaultValue:{func:!1,value:"'md'"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McAvatar/McAvatar.vue"]});const G={title:"Composants/McAvatar",component:r},n={render:()=>({components:{McAvatar:r},template:`
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McAvatar name="Denis Gosset" />
        <McAvatar name="Marie Dupont" />
        <McAvatar name="Jean-Pierre Martin" />
        <McAvatar name="Alex" />
      </div>`})},s={render:()=>({components:{McAvatar:r},template:`
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McAvatar name="denis.gosset@meridian-synergy.com" />
        <McAvatar name="contact@rippa.fr" />
        <McAvatar name="jean-luc.picard@exemple.fr" />
      </div>`})},t={render:()=>({components:{McAvatar:r},template:`
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McAvatar v-for="n in ['Anne A','Bruno B','Carla C','David D','Elsa E','Farid F','Gina G','Hugo H']"
                  :key="n" :name="n" />
      </div>`})},o={render:()=>({components:{McAvatar:r},template:`
      <div style="display:flex;gap:12px;align-items:center">
        <McAvatar name="Denis Gosset" size="sm" />
        <McAvatar name="Denis Gosset" size="md" />
      </div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McAvatar
    },
    template: \`
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McAvatar name="Denis Gosset" />
        <McAvatar name="Marie Dupont" />
        <McAvatar name="Jean-Pierre Martin" />
        <McAvatar name="Alex" />
      </div>\`
  })
}`,...n.parameters?.docs?.source},description:{story:`L'initiale de qui est connecté, dans la barre haute. Deux lettres au plus, et
le SECOND MOT l'emporte sur la seconde lettre : « Denis Gosset » donne DG.`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McAvatar
    },
    template: \`
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McAvatar name="denis.gosset@meridian-synergy.com" />
        <McAvatar name="contact@rippa.fr" />
        <McAvatar name="jean-luc.picard@exemple.fr" />
      </div>\`
  })
}`,...s.parameters?.docs?.source},description:{story:"⚠️ Une adresse e-mail est coupée au `@` et ses séparateurs deviennent des\nespaces : personne ne s'appelle « denis.gosset@… ». C'est le repli quand le\nprofil n'a pas encore de nom — donc le cas le plus fréquent à l'inscription.",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McAvatar
    },
    template: \`
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <McAvatar v-for="n in ['Anne A','Bruno B','Carla C','David D','Elsa E','Farid F','Gina G','Hugo H']"
                  :key="n" :name="n" />
      </div>\`
  })
}`,...t.parameters?.docs?.source},description:{story:`⚠️ La couleur est DÉRIVÉE du nom : stable pour une personne, différente pour
deux comptes dont les initiales se ressemblent. Elle ne porte aucun sens —
c'est une aide à la reconnaissance, et le nom reste lu par les technologies
d'assistance.

Palette FERMÉE de six tons : un \`hsl()\` tiré d'un hash produit tôt ou tard du
jaune sur blanc, ou un ton qui disparaît en thème sombre.`,...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McAvatar
    },
    template: \`
      <div style="display:flex;gap:12px;align-items:center">
        <McAvatar name="Denis Gosset" size="sm" />
        <McAvatar name="Denis Gosset" size="md" />
      </div>\`
  })
}`,...o.parameters?.docs?.source}}};const B=["Personnes","DepuisUneAdresse","Palette","Tailles"];export{s as DepuisUneAdresse,t as Palette,n as Personnes,o as Tailles,B as __namedExportsOrder,G as default};

import{e as g,j as t,q as l,p as x,t as n,l as y,o as a,A as L,h as i,F as c,k as f,g as V,f as C,w as S,m as w,v as T}from"./iframe-Cjtf2tzy.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{M as N}from"./McField-DAVqiAvz.js";import"./preload-helper-PPVm8Dsz.js";const p=g({__name:"McBucketBadge",props:{bucket:{},label:{},size:{default:"md"}},setup(e){return(d,r)=>(a(),t("span",{class:y(["mc-bucket",[`mc-bucket--${e.bucket}`,`mc-bucket--${e.size}`]])},[r[0]||(r[0]=l("span",{class:"mc-bucket__dot","aria-hidden":"true"},null,-1)),x(" "+n(e.label),1)],2))}}),B=v(p,[["__scopeId","data-v-ac9f3057"]]);p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"McBucketBadge",description:"",tags:{},props:[{name:"bucket",required:!0,type:{name:"union",elements:[{name:'"past"'},{name:'"overdue"'},{name:'"due"'},{name:'"soon"'},{name:'"done"'}]}},{name:"label",description:"Libellé localisé — obligatoire en pratique, la couleur ne suffit pas.",required:!0,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'}]},defaultValue:{func:!1,value:"'md'"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McBucketBadge/McBucketBadge.vue"]});const I={class:"mc-task"},A={class:"mc-task__head"},E={class:"mc-task__title"},D={key:0,class:"mc-task__timing"},$={key:1,class:"mc-task__hint"},j={key:2,class:"mc-task__meta"},G={key:0},F={key:1},z={key:3,class:"mc-task__detail"},O={class:"mc-task__summary"},P={class:"mc-task__subtitle"},W={class:"mc-task__points"},R={class:"mc-task__point-label"},H={key:0,class:"mc-task__side"},U={key:1,class:"mc-task__point-hint"},Q={class:"mc-task__subtitle"},J={class:"mc-task__steps"},k=g({__name:"McTaskCard",props:{title:{},bucket:{},bucketLabel:{},timing:{},consumable:{},quantity:{default:1},hint:{},points:{default:()=>[]},steps:{default:()=>[]},pointsLabel:{default:"Where"},stepsLabel:{default:"How"},detailLabel:{default:"Details"},sideLabels:{default:()=>({})}},setup(e){const d=e,r=V(()=>d.points.length>0||d.steps.length>0);return(q,M)=>(a(),t("article",I,[l("div",A,[l("h3",E,n(e.title),1),L(B,{bucket:e.bucket,label:e.bucketLabel,size:"sm"},null,8,["bucket","label"])]),e.timing?(a(),t("p",D,n(e.timing),1)):i("",!0),e.hint?(a(),t("p",$,n(e.hint),1)):i("",!0),e.consumable||e.quantity>1?(a(),t("ul",j,[e.consumable?(a(),t("li",G,n(e.consumable),1)):i("",!0),e.quantity>1?(a(),t("li",F,"× "+n(e.quantity),1)):i("",!0)])):i("",!0),r.value?(a(),t("details",z,[l("summary",O,n(e.detailLabel),1),e.points.length?(a(),t(c,{key:0},[l("p",P,n(e.pointsLabel),1),l("ol",W,[(a(!0),t(c,null,f(e.points,s=>(a(),t("li",{key:s.code},[l("span",R,n(s.label),1),s.side&&e.sideLabels[s.side]?(a(),t("span",H,n(e.sideLabels[s.side]),1)):i("",!0),s.hint?(a(),t("span",U,n(s.hint),1)):i("",!0)]))),128))])],64)):i("",!0),e.steps.length?(a(),t(c,{key:1},[l("p",Q,n(e.stepsLabel),1),l("ol",J,[(a(!0),t(c,null,f(e.steps,(s,u)=>(a(),t("li",{key:u,class:y({"mc-task__step--warning":s.isWarning})},n(s.text),3))),128))])],64)):i("",!0)])):i("",!0)]))}}),_=v(k,[["__scopeId","data-v-cb688fd3"]]);k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:"default",displayName:"McTaskCard",description:"",tags:{},props:[{name:"title",description:"Libellé de la tâche, déjà traduit.",required:!0,type:{name:"string"}},{name:"bucket",required:!0,type:{name:"union",elements:[{name:'"past"'},{name:'"overdue"'},{name:'"due"'},{name:'"soon"'},{name:'"done"'}]}},{name:"bucketLabel",description:"Libellé du seau, déjà traduit.",required:!0,type:{name:"string"}},{name:"timing",description:"Échéance en clair : « à 250 h », « dépassé de 40 h ».",required:!1,type:{name:"string"}},{name:"consumable",description:"Consommable : « ISO VG 46 (HV) ». Une spécification, jamais une marque.",required:!1,type:{name:"string"}},{name:"quantity",description:"Quantité concernée quand elle dépasse 1 (2 moteurs de translation…).",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"hint",description:"Précision d'emplacement, quand elle existe.",required:!1,type:{name:"string"}},{name:"points",description:"OÙ intervenir — un élément par emplacement physique.",required:!1,type:{name:"Array",elements:[{name:"{ code: string, side: string | null, label: string, hint: string | null }"}]},defaultValue:{func:!1,value:"() => []"}},{name:"steps",description:"COMMENT s'y prendre — la procédure, dans l'ordre.",required:!1,type:{name:"Array",elements:[{name:"{ text: string, isWarning: boolean }"}]},defaultValue:{func:!1,value:"() => []"}},{name:"pointsLabel",description:"Libellés localisés du dépliage (le DS est i18n-agnostique).",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Where'"}},{name:"stepsLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'How'"}},{name:"detailLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Details'"}},{name:"sideLabels",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"string"}]},defaultValue:{func:!1,value:"() => ({})"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McTaskCard/McTaskCard.vue"]});const K=["id","value","required","disabled","aria-describedby","aria-invalid"],X={key:0,value:"",disabled:""},Y=["value","disabled"],h=g({inheritAttrs:!1,__name:"McSelect",props:{modelValue:{},options:{default:()=>[]},label:{},hint:{},error:{},placeholder:{},required:{type:Boolean},disabled:{type:Boolean},id:{},requiredLabel:{}},emits:["update:modelValue"],setup(e){return(d,r)=>(a(),C(N,{label:e.label,hint:e.hint,error:e.error,required:e.required,id:e.id,"required-label":e.requiredLabel},{default:S(({controlId:q,describedBy:M,invalid:s})=>[l("div",{class:y(["mc-select",{"mc-select--invalid":s,"mc-select--disabled":e.disabled}])},[l("select",w({id:q,class:"mc-select__control",value:e.modelValue??"",required:e.required,disabled:e.disabled,"aria-describedby":M,"aria-invalid":s?"true":void 0},d.$attrs,{onChange:r[0]||(r[0]=u=>d.$emit("update:modelValue",u.target.value))}),[e.placeholder?(a(),t("option",X,n(e.placeholder),1)):i("",!0),(a(!0),t(c,null,f(e.options,u=>(a(),t("option",{key:u.value,value:u.value,disabled:u.disabled},n(u.label),9,Y))),128))],16,K),r[1]||(r[1]=l("svg",{class:"mc-select__chevron",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"},[l("path",{d:"M6 9l6 6 6-6","stroke-linecap":"round","stroke-linejoin":"round"})],-1))],2)]),_:1},8,["label","hint","error","required","id","required-label"]))}}),Z=v(h,[["__scopeId","data-v-7aadfdc3"]]);h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{description:`McSelect — liste déroulante native.

Volontairement le \`<select>\` du navigateur et non un dropdown maison : sur
mobile il ouvre le sélecteur natif, il est accessible sans travail, et il
gère la recherche au clavier. Un dropdown custom ne se justifie que s'il doit
afficher autre chose que du texte (drapeaux, vignettes).

⚠️ inheritAttrs:false + v-bind="$attrs" SUR le select : sans ça \`required\`,
\`name\` ou \`autocomplete\` atterrissent sur le <div> et ne font rien.`,tags:{},exportName:"default",displayName:"McSelect",props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]}},{name:"options",description:"Défauté : un consommateur qui oublie `options` doit voir une liste vide, pas une exception.",required:!1,type:{name:"Array",elements:[{name:"{ value: string | number, label: string, disabled?: boolean }"}]},defaultValue:{func:!1,value:"() => []"}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"placeholder",description:"Entrée neutre en tête de liste (« Choisir une marque… »)",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}},{name:"requiredLabel",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McSelect/McSelect.vue"]});const se={title:"Components/Entretien",component:_,parameters:{docs:{description:{component:"Le vocabulaire des trois seaux — en retard / maintenant / bientôt — doit être identique sur le site public, dans l’app et dans les emails. D’où ces composants et les tokens --mc-bucket-*, plutôt qu’une couleur choisie par écran."}}}},o={name:"Les trois seaux",render:()=>({components:{McBucketBadge:B},template:`
      <div style="display:flex;flex-wrap:wrap;gap:12px">
        <McBucketBadge bucket="overdue" label="En retard" />
        <McBucketBadge bucket="due" label="Maintenant" />
        <McBucketBadge bucket="soon" label="Bientôt" />
        <McBucketBadge bucket="done" label="Fait" />
      </div>`})},m={name:"Échéances",render:()=>({components:{McTaskCard:_},template:`
      <div style="display:grid;gap:12px;max-width:520px">
        <McTaskCard
          title="Graisser la denture de la couronne d’orientation"
          bucket="overdue" bucket-label="En retard"
          timing="Dépassé de 12 h — était attendu à 150 h"
          consumable="Graisse NLGI 2" />
        <McTaskCard
          title="Vidanger l’huile moteur"
          bucket="due" bucket-label="Maintenant"
          timing="À 250 h"
          consumable="SAE 15W-40 (API CI-4 ou supérieur)" />
        <McTaskCard
          title="Vidanger l’huile des moteurs de translation"
          bucket="soon" bucket-label="Bientôt"
          timing="Dans 38 h — à 500 h"
          consumable="SAE 90 (API GL-4)" :quantity="2" />
      </div>`})},b={name:"McSelect",render:()=>({components:{McSelect:Z},setup:()=>({brand:T(""),options:[{value:"rippa",label:"Rippa"},{value:"takeuchi",label:"Takeuchi (bientôt)",disabled:!0}]}),template:`
      <div style="max-width:360px">
        <McSelect v-model="brand" :options="options" label="Marque"
                  placeholder="Choisir une marque…" required name="brand" />
        <p style="font-size:.8rem;color:var(--mc-color-muted)">Valeur : {{ brand || '—' }}</p>
      </div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Les trois seaux',
  render: () => ({
    components: {
      McBucketBadge
    },
    template: \`
      <div style="display:flex;flex-wrap:wrap;gap:12px">
        <McBucketBadge bucket="overdue" label="En retard" />
        <McBucketBadge bucket="due" label="Maintenant" />
        <McBucketBadge bucket="soon" label="Bientôt" />
        <McBucketBadge bucket="done" label="Fait" />
      </div>\`
  })
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Échéances',
  render: () => ({
    components: {
      McTaskCard
    },
    template: \`
      <div style="display:grid;gap:12px;max-width:520px">
        <McTaskCard
          title="Graisser la denture de la couronne d’orientation"
          bucket="overdue" bucket-label="En retard"
          timing="Dépassé de 12 h — était attendu à 150 h"
          consumable="Graisse NLGI 2" />
        <McTaskCard
          title="Vidanger l’huile moteur"
          bucket="due" bucket-label="Maintenant"
          timing="À 250 h"
          consumable="SAE 15W-40 (API CI-4 ou supérieur)" />
        <McTaskCard
          title="Vidanger l’huile des moteurs de translation"
          bucket="soon" bucket-label="Bientôt"
          timing="Dans 38 h — à 500 h"
          consumable="SAE 90 (API GL-4)" :quantity="2" />
      </div>\`
  })
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'McSelect',
  render: () => ({
    components: {
      McSelect
    },
    setup: () => ({
      brand: ref(''),
      options: [{
        value: 'rippa',
        label: 'Rippa'
      }, {
        value: 'takeuchi',
        label: 'Takeuchi (bientôt)',
        disabled: true
      }]
    }),
    template: \`
      <div style="max-width:360px">
        <McSelect v-model="brand" :options="options" label="Marque"
                  placeholder="Choisir une marque…" required name="brand" />
        <p style="font-size:.8rem;color:var(--mc-color-muted)">Valeur : {{ brand || '—' }}</p>
      </div>\`
  })
}`,...b.parameters?.docs?.source}}};const le=["Buckets","Tasks","Select"];export{o as Buckets,b as Select,m as Tasks,le as __namedExportsOrder,se as default};

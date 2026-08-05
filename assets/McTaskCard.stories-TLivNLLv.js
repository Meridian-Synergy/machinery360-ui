import{e as k,o as a,j as t,p as i,m as B,t as r,n as f,z as x,h as l,f as C,w as S,y as V,F as _,k as w,x as L}from"./iframe-DlngQknY.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{M as T}from"./McField-DDb_b2a9.js";import"./preload-helper-PPVm8Dsz.js";const m=k({__name:"McBucketBadge",props:{bucket:{},label:{},size:{default:"md"}},setup(e){return(d,n)=>(a(),t("span",{class:f(["mc-bucket",[`mc-bucket--${e.bucket}`,`mc-bucket--${e.size}`]])},[n[0]||(n[0]=i("span",{class:"mc-bucket__dot","aria-hidden":"true"},null,-1)),B(" "+r(e.label),1)],2))}}),y=h(m,[["__scopeId","data-v-d74003e0"]]);m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"McBucketBadge",description:"",tags:{},props:[{name:"bucket",required:!0,type:{name:"union",elements:[{name:'"past"'},{name:'"overdue"'},{name:'"due"'},{name:'"soon"'},{name:'"done"'}]}},{name:"label",description:"Libellé localisé — obligatoire en pratique, la couleur ne suffit pas.",required:!0,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'}]},defaultValue:{func:!1,value:"'md'"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McBucketBadge/McBucketBadge.vue"]});const I={class:"mc-task"},N={class:"mc-task__head"},E={class:"mc-task__title"},A={key:0,class:"mc-task__timing"},$={key:1,class:"mc-task__hint"},j={key:2,class:"mc-task__meta"},G={key:0},z={key:1},b=k({__name:"McTaskCard",props:{title:{},bucket:{},bucketLabel:{},timing:{},consumable:{},quantity:{default:1},hint:{}},setup(e){return(d,n)=>(a(),t("article",I,[i("div",N,[i("h3",E,r(e.title),1),x(y,{bucket:e.bucket,label:e.bucketLabel,size:"sm"},null,8,["bucket","label"])]),e.timing?(a(),t("p",A,r(e.timing),1)):l("",!0),e.hint?(a(),t("p",$,r(e.hint),1)):l("",!0),e.consumable||e.quantity>1?(a(),t("ul",j,[e.consumable?(a(),t("li",G,r(e.consumable),1)):l("",!0),e.quantity>1?(a(),t("li",z,"× "+r(e.quantity),1)):l("",!0)])):l("",!0)]))}}),v=h(b,[["__scopeId","data-v-7f14ae5f"]]);b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:"default",displayName:"McTaskCard",description:"",tags:{},props:[{name:"title",description:"Libellé de la tâche, déjà traduit.",required:!0,type:{name:"string"}},{name:"bucket",required:!0,type:{name:"union",elements:[{name:'"past"'},{name:'"overdue"'},{name:'"due"'},{name:'"soon"'},{name:'"done"'}]}},{name:"bucketLabel",description:"Libellé du seau, déjà traduit.",required:!0,type:{name:"string"}},{name:"timing",description:"Échéance en clair : « à 250 h », « dépassé de 40 h ».",required:!1,type:{name:"string"}},{name:"consumable",description:"Consommable : « ISO VG 46 (HV) ». Une spécification, jamais une marque.",required:!1,type:{name:"string"}},{name:"quantity",description:"Quantité concernée quand elle dépasse 1 (2 moteurs de translation…).",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"hint",description:"Précision d'emplacement, quand elle existe.",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McTaskCard/McTaskCard.vue"]});const F=["id","value","required","disabled","aria-describedby","aria-invalid"],D={key:0,value:"",disabled:""},P=["value","disabled"],p=k({inheritAttrs:!1,__name:"McSelect",props:{modelValue:{},options:{default:()=>[]},label:{},hint:{},error:{},placeholder:{},required:{type:Boolean},disabled:{type:Boolean},id:{},requiredLabel:{}},emits:["update:modelValue"],setup(e){return(d,n)=>(a(),C(T,{label:e.label,hint:e.hint,error:e.error,required:e.required,id:e.id,"required-label":e.requiredLabel},{default:S(({controlId:q,describedBy:M,invalid:g})=>[i("div",{class:f(["mc-select",{"mc-select--invalid":g,"mc-select--disabled":e.disabled}])},[i("select",V({id:q,class:"mc-select__control",value:e.modelValue??"",required:e.required,disabled:e.disabled,"aria-describedby":M,"aria-invalid":g?"true":void 0},d.$attrs,{onChange:n[0]||(n[0]=s=>d.$emit("update:modelValue",s.target.value))}),[e.placeholder?(a(),t("option",D,r(e.placeholder),1)):l("",!0),(a(!0),t(_,null,w(e.options,s=>(a(),t("option",{key:s.value,value:s.value,disabled:s.disabled},r(s.label),9,P))),128))],16,F),n[1]||(n[1]=i("svg",{class:"mc-select__chevron",viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"},[i("path",{d:"M6 9l6 6 6-6","stroke-linecap":"round","stroke-linejoin":"round"})],-1))],2)]),_:1},8,["label","hint","error","required","id","required-label"]))}}),O=h(p,[["__scopeId","data-v-f550306f"]]);p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{description:`McSelect — liste déroulante native.

Volontairement le \`<select>\` du navigateur et non un dropdown maison : sur
mobile il ouvre le sélecteur natif, il est accessible sans travail, et il
gère la recherche au clavier. Un dropdown custom ne se justifie que s'il doit
afficher autre chose que du texte (drapeaux, vignettes).

⚠️ inheritAttrs:false + v-bind="$attrs" SUR le select : sans ça \`required\`,
\`name\` ou \`autocomplete\` atterrissent sur le <div> et ne font rien.`,tags:{},exportName:"default",displayName:"McSelect",props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]}},{name:"options",description:"Défauté : un consommateur qui oublie `options` doit voir une liste vide, pas une exception.",required:!1,type:{name:"Array",elements:[{name:"{ value: string | number, label: string, disabled?: boolean }"}]},defaultValue:{func:!1,value:"() => []"}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"placeholder",description:"Entrée neutre en tête de liste (« Choisir une marque… »)",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}},{name:"requiredLabel",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McSelect/McSelect.vue"]});const Q={title:"Components/Entretien",component:v,parameters:{docs:{description:{component:"Le vocabulaire des trois seaux — en retard / maintenant / bientôt — doit être identique sur le site public, dans l’app et dans les emails. D’où ces composants et les tokens --mc-bucket-*, plutôt qu’une couleur choisie par écran."}}}},u={name:"Les trois seaux",render:()=>({components:{McBucketBadge:y},template:`
      <div style="display:flex;flex-wrap:wrap;gap:12px">
        <McBucketBadge bucket="overdue" label="En retard" />
        <McBucketBadge bucket="due" label="Maintenant" />
        <McBucketBadge bucket="soon" label="Bientôt" />
        <McBucketBadge bucket="done" label="Fait" />
      </div>`})},c={name:"Échéances",render:()=>({components:{McTaskCard:v},template:`
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
      </div>`})},o={name:"McSelect",render:()=>({components:{McSelect:O},setup:()=>({brand:L(""),options:[{value:"rippa",label:"Rippa"},{value:"takeuchi",label:"Takeuchi (bientôt)",disabled:!0}]}),template:`
      <div style="max-width:360px">
        <McSelect v-model="brand" :options="options" label="Marque"
                  placeholder="Choisir une marque…" required name="brand" />
        <p style="font-size:.8rem;color:var(--mc-color-muted)">Valeur : {{ brand || '—' }}</p>
      </div>`})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const J=["Buckets","Tasks","Select"];export{u as Buckets,o as Select,c as Tasks,J as __namedExportsOrder,Q as default};

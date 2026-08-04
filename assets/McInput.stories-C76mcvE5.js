import{e as S,j as l,n as M,q as P,t as o,h as d,i as R,g as n,o as r,u as $,s as H,v as O,f as D,x as T,y as u,w as U,m as k,z as j}from"./iframe-BhB8QeAx.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const z=["for"],Y={key:0,class:"mc-field__required"},G=["id"],K=["id"],g=S({__name:"McField",props:{label:{},hint:{},error:{},required:{type:Boolean},id:{},hideLabel:{type:Boolean},requiredLabel:{}},setup(e){const m=e,t=$(),s=n(()=>m.id??t),a=n(()=>`${s.value}-hint`),c=n(()=>`${s.value}-error`),f=n(()=>{const i=[m.hint?a.value:null,m.error?c.value:null].filter(Boolean);return i.length?i.join(" "):void 0});return(i,I)=>(r(),l("div",{class:M(["mc-field",{"mc-field--invalid":!!e.error}])},[e.label?(r(),l("label",{key:0,class:M(["mc-field__label",{"mc-visually-hidden":e.hideLabel}]),for:s.value},[P(o(e.label)+" ",1),e.required&&e.requiredLabel?(r(),l("span",Y,o(e.requiredLabel),1)):d("",!0)],10,z)):d("",!0),e.hint?(r(),l("p",{key:1,id:a.value,class:"mc-field__hint"},o(e.hint),9,G)):d("",!0),R(i.$slots,"default",{controlId:s.value,describedBy:f.value,invalid:!!e.error},void 0,!0),e.error?(r(),l("p",{key:2,id:c.value,class:"mc-field__error",role:"alert"},o(e.error),9,K)):d("",!0)],2))}}),W=A(g,[["__scopeId","data-v-dfbe193e"]]);g.__docgenInfo=Object.assign({displayName:g.name??g.__name},{exportName:"default",displayName:"McField",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",description:"Error message; presence switches the field to its invalid state",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"id",description:"Explicit id — otherwise one is generated",required:!1,type:{name:"string"}},{name:"hideLabel",description:"Visually hides the label while keeping it announced",required:!1,type:{name:"boolean"}},{name:"requiredLabel",description:'Localized "(optional)" / "(required)" suffix — the DS is i18n-agnostic',required:!1,type:{name:"string"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"control-id",title:"binding"},{name:"described-by",title:"binding"},{name:"invalid",title:"binding"}]}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McField/McField.vue"]});const J=["id","type","value","placeholder","required","disabled","aria-describedby","aria-invalid"],Q={key:0,class:"mc-visually-hidden","aria-live":"polite"},w=S({inheritAttrs:!1,__name:"McInput",props:{modelValue:{},type:{default:"text"},label:{},hint:{},error:{},placeholder:{},required:{type:Boolean},disabled:{type:Boolean},id:{},hideLabel:{type:[String,Boolean]},requiredLabel:{},revealable:{type:Boolean,default:!0},revealLabel:{default:"Show password"},hideRevealLabel:{default:"Hide password"},shownAnnouncement:{default:"Your password is visible"},hiddenAnnouncement:{default:"Your password is hidden"}},emits:["update:modelValue"],setup(e,{emit:m}){const t=e,s=m,a=u(!1),c=T("inputEl"),f=n(()=>t.type==="password"),i=n(()=>f.value&&t.revealable&&!t.disabled),I=n(()=>f.value&&a.value?"text":t.type),B=n(()=>a.value?t.shownAnnouncement:t.hiddenAnnouncement);function E(x){s("update:modelValue",x.target.value)}function V(){a.value=!1}let q=null;return H(()=>{q=c.value?.form??null,q?.addEventListener("submit",V)}),O(()=>q?.removeEventListener("submit",V)),(x,L)=>(r(),D(W,{label:e.label,hint:e.hint,error:e.error,required:e.required,id:e.id,"hide-label":!!e.hideLabel,"required-label":e.requiredLabel},{default:U(({controlId:C,describedBy:F,invalid:N})=>[k("div",{class:M(["mc-input",{"mc-input--invalid":N,"mc-input--disabled":e.disabled}])},[k("input",j({id:C,ref_key:"inputEl",ref:c,class:"mc-input__control",type:I.value,value:e.modelValue,placeholder:e.placeholder,required:e.required,disabled:e.disabled,"aria-describedby":F,"aria-invalid":N?"true":void 0},x.$attrs,{onInput:E}),null,16,J),i.value?(r(),l("button",{key:0,type:"button",class:"mc-input__reveal",onClick:L[0]||(L[0]=X=>a.value=!a.value)},o(a.value?e.hideRevealLabel:e.revealLabel),1)):d("",!0)],2),i.value?(r(),l("span",Q,o(B.value),1)):d("",!0)]),_:1},8,["label","hint","error","required","id","hide-label","required-label"]))}}),v=A(w,[["__scopeId","data-v-6d560509"]]);w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{description:'McInput — the standard text input.\n\n⚠️ inheritAttrs:false + v-bind="$attrs" ON THE INPUT. Without it, native\nattributes (`required`, `minlength`, `name`, `inputmode`, `autocomplete`…)\nland on the wrapper <div> and silently do nothing — a `required` that never\nvalidates looks exactly like a working one. Vécu wp360/FDC. Binding\nattributes by hand always misses one; forward them all.\n\nPassword reveal (type="password", `revealable` defaults to true):\nfollows the GOV.UK pattern — the most user-tested with real screen-reader\nusers. The accessible NAME changes (Show ↔ Hide) and a polite live region\nannounces the state. Deliberately NO `aria-pressed`: GOV.UK tested it and\ndropped it (uneven support + "pressed = shown, or about to show?"). Doing\nboth at once is the anti-pattern — double announcement.',tags:{},exportName:"default",displayName:"McInput",props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}},{name:"hideLabel",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"requiredLabel",required:!1,type:{name:"string"}},{name:"revealable",description:"Password reveal affordance — on by default so nobody forgets the eye",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"revealLabel",description:"Localized reveal labels (DS is i18n-agnostic; English defaults)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Show password'"}},{name:"hideRevealLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Hide password'"}},{name:"shownAnnouncement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Your password is visible'"}},{name:"hiddenAnnouncement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Your password is hidden'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McInput/McInput.vue"]});const ae={title:"Components/McInput",component:v,args:{label:"Compteur horaire",placeholder:"0"}},h={render:e=>({components:{McInput:v},setup:()=>({args:e,value:u("")}),template:'<McInput v-bind="args" v-model="value" style="max-width:360px" />'})},y={name:"Hint & error",render:()=>({components:{McInput:v},setup:()=>({a:u("182"),b:u("")}),template:`
      <div style="display:flex;flex-direction:column;gap:20px;max-width:360px">
        <McInput v-model="a" label="Compteur horaire" hint="Relevé affiché au tableau de bord" />
        <McInput v-model="b" label="Compteur horaire" error="Valeur inférieure au dernier relevé (182 h)" />
      </div>`})},p={name:"Native attributes forwarded",render:()=>({components:{McInput:v},setup:()=>({value:u("")}),template:`
      <form style="display:flex;flex-direction:column;gap:16px;max-width:360px" @submit.prevent>
        <McInput v-model="value" label="Numéro de série" required minlength="4" name="serial"
                 inputmode="text" hint="Requis, 4 caractères minimum" />
        <button type="submit">Valider (doit bloquer si vide)</button>
      </form>`})},b={name:"Password reveal",render:()=>({components:{McInput:v},setup:()=>({value:u("correct horse battery")}),template:`
      <form style="display:flex;flex-direction:column;gap:16px;max-width:360px" @submit.prevent>
        <McInput v-model="value" type="password" label="Mot de passe" autocomplete="current-password"
                 reveal-label="Afficher le mot de passe" hide-reveal-label="Masquer le mot de passe"
                 shown-announcement="Mot de passe visible" hidden-announcement="Mot de passe masqué" />
        <button type="submit">Se connecter (re-masque le champ)</button>
      </form>`})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      McInput
    },
    setup: () => ({
      args,
      value: ref('')
    }),
    template: '<McInput v-bind="args" v-model="value" style="max-width:360px" />'
  })
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Hint & error',
  render: () => ({
    components: {
      McInput
    },
    setup: () => ({
      a: ref('182'),
      b: ref('')
    }),
    template: \`
      <div style="display:flex;flex-direction:column;gap:20px;max-width:360px">
        <McInput v-model="a" label="Compteur horaire" hint="Relevé affiché au tableau de bord" />
        <McInput v-model="b" label="Compteur horaire" error="Valeur inférieure au dernier relevé (182 h)" />
      </div>\`
  })
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Native attributes forwarded',
  render: () => ({
    components: {
      McInput
    },
    setup: () => ({
      value: ref('')
    }),
    template: \`
      <form style="display:flex;flex-direction:column;gap:16px;max-width:360px" @submit.prevent>
        <McInput v-model="value" label="Numéro de série" required minlength="4" name="serial"
                 inputmode="text" hint="Requis, 4 caractères minimum" />
        <button type="submit">Valider (doit bloquer si vide)</button>
      </form>\`
  })
}`,...p.parameters?.docs?.source},description:{story:"`required` is forwarded to the <input> via $attrs. Submitting empty must\ntrigger the browser's native validation — if it doesn't, the attribute landed\non the wrapper div and does nothing.",...p.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Password reveal',
  render: () => ({
    components: {
      McInput
    },
    setup: () => ({
      value: ref('correct horse battery')
    }),
    template: \`
      <form style="display:flex;flex-direction:column;gap:16px;max-width:360px" @submit.prevent>
        <McInput v-model="value" type="password" label="Mot de passe" autocomplete="current-password"
                 reveal-label="Afficher le mot de passe" hide-reveal-label="Masquer le mot de passe"
                 shown-announcement="Mot de passe visible" hidden-announcement="Mot de passe masqué" />
        <button type="submit">Se connecter (re-masque le champ)</button>
      </form>\`
  })
}`,...b.parameters?.docs?.source},description:{story:`GOV.UK reveal pattern: the accessible NAME changes, and a polite live region
announces the state. No aria-pressed — doing both is a double announcement.
Submitting the form re-masks the password.`,...b.parameters?.docs?.description}}};const te=["Playground","WithHintAndError","NativeAttributesForwarded","PasswordReveal"];export{p as NativeAttributesForwarded,b as PasswordReveal,h as Playground,y as WithHintAndError,te as __namedExportsOrder,ae as default};

import{e as k,x as P,y as R,j as B,k as D,z as H,r as a,o as v,u as w,h as O,m as T,f as q,t as M,p as I,i as o}from"./iframe-DWOgK6S3.js";import{M as F}from"./McField-CH0XwlJy.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const G=["id","type","value","placeholder","required","disabled","aria-describedby","aria-invalid"],Y={key:0,class:"mc-visually-hidden","aria-live":"polite"},m=k({inheritAttrs:!1,__name:"McInput",props:{modelValue:{},type:{default:"text"},label:{},hint:{},error:{},placeholder:{},required:{type:Boolean},disabled:{type:Boolean},id:{},hideLabel:{type:[String,Boolean]},requiredLabel:{},revealable:{type:Boolean,default:!0},revealLabel:{default:"Show password"},hideRevealLabel:{default:"Hide password"},shownAnnouncement:{default:"Your password is visible"},hiddenAnnouncement:{default:"Your password is hidden"}},emits:["update:modelValue"],setup(e,{emit:A}){const t=e,C=A,n=a(!1),f=H("inputEl"),b=o(()=>t.type==="password"),h=o(()=>b.value&&t.revealable&&!t.disabled),L=o(()=>b.value&&n.value?"text":t.type),V=o(()=>n.value?t.shownAnnouncement:t.hiddenAnnouncement);function N(c){C("update:modelValue",c.target.value)}function y(){n.value=!1}let p=null;return P(()=>{p=f.value?.form??null,p?.addEventListener("submit",y)}),R(()=>p?.removeEventListener("submit",y)),(c,g)=>(v(),B(F,{label:e.label,hint:e.hint,error:e.error,required:e.required,id:e.id,"hide-label":!!e.hideLabel,"required-label":e.requiredLabel},{default:D(({controlId:S,describedBy:E,invalid:x})=>[w("div",{class:O(["mc-input",{"mc-input--invalid":x,"mc-input--disabled":e.disabled}])},[w("input",T({id:S,ref_key:"inputEl",ref:f,class:"mc-input__control",type:L.value,value:e.modelValue,placeholder:e.placeholder,required:e.required,disabled:e.disabled,"aria-describedby":E,"aria-invalid":x?"true":void 0},c.$attrs,{onInput:N}),null,16,G),h.value?(v(),q("button",{key:0,type:"button",class:"mc-input__reveal",onClick:g[0]||(g[0]=$=>n.value=!n.value)},M(n.value?e.hideRevealLabel:e.revealLabel),1)):I("",!0)],2),h.value?(v(),q("span",Y,M(V.value),1)):I("",!0)]),_:1},8,["label","hint","error","required","id","hide-label","required-label"]))}}),r=U(m,[["__scopeId","data-v-0ffc9d07"]]);m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{description:'McInput — the standard text input.\n\n⚠️ inheritAttrs:false + v-bind="$attrs" ON THE INPUT. Without it, native\nattributes (`required`, `minlength`, `name`, `inputmode`, `autocomplete`…)\nland on the wrapper <div> and silently do nothing — a `required` that never\nvalidates looks exactly like a working one. Vécu wp360/FDC. Binding\nattributes by hand always misses one; forward them all.\n\nPassword reveal (type="password", `revealable` defaults to true):\nfollows the GOV.UK pattern — the most user-tested with real screen-reader\nusers. The accessible NAME changes (Show ↔ Hide) and a polite live region\nannounces the state. Deliberately NO `aria-pressed`: GOV.UK tested it and\ndropped it (uneven support + "pressed = shown, or about to show?"). Doing\nboth at once is the anti-pattern — double announcement.',tags:{},exportName:"default",displayName:"McInput",props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}},{name:"hideLabel",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"requiredLabel",required:!1,type:{name:"string"}},{name:"revealable",description:"Password reveal affordance — on by default so nobody forgets the eye",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"revealLabel",description:"Localized reveal labels (DS is i18n-agnostic; English defaults)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Show password'"}},{name:"hideRevealLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Hide password'"}},{name:"shownAnnouncement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Your password is visible'"}},{name:"hiddenAnnouncement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Your password is hidden'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McInput/McInput.vue"]});const X={title:"Components/McInput",component:r,args:{label:"Compteur horaire",placeholder:"0"}},d={render:e=>({components:{McInput:r},setup:()=>({args:e,value:a("")}),template:'<McInput v-bind="args" v-model="value" style="max-width:360px" />'})},u={name:"Hint & error",render:()=>({components:{McInput:r},setup:()=>({a:a("182"),b:a("")}),template:`
      <div style="display:flex;flex-direction:column;gap:20px;max-width:360px">
        <McInput v-model="a" label="Compteur horaire" hint="Relevé affiché au tableau de bord" />
        <McInput v-model="b" label="Compteur horaire" error="Valeur inférieure au dernier relevé (182 h)" />
      </div>`})},s={name:"Native attributes forwarded",render:()=>({components:{McInput:r},setup:()=>({value:a("")}),template:`
      <form style="display:flex;flex-direction:column;gap:16px;max-width:360px" @submit.prevent>
        <McInput v-model="value" label="Numéro de série" required minlength="4" name="serial"
                 inputmode="text" hint="Requis, 4 caractères minimum" />
        <button type="submit">Valider (doit bloquer si vide)</button>
      </form>`})},i={name:"Password reveal",render:()=>({components:{McInput:r},setup:()=>({value:a("correct horse battery")}),template:`
      <form style="display:flex;flex-direction:column;gap:16px;max-width:360px" @submit.prevent>
        <McInput v-model="value" type="password" label="Mot de passe" autocomplete="current-password"
                 reveal-label="Afficher le mot de passe" hide-reveal-label="Masquer le mot de passe"
                 shown-announcement="Mot de passe visible" hidden-announcement="Mot de passe masqué" />
        <button type="submit">Se connecter (re-masque le champ)</button>
      </form>`})},l={name:"Deux champs côte à côte",render:()=>({components:{McInput:r},setup:()=>({email:a(""),lang:a("Français")}),template:`
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:620px">
        <McInput v-model="email" label="Adresse e-mail"
                 hint="C'est votre identifiant de connexion — il ne se modifie pas ici." />
        <McInput v-model="lang" label="Langue"
                 hint="Sert aussi aux e-mails, qui partent hors session." />
      </div>`})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:"`required` is forwarded to the <input> via $attrs. Submitting empty must\ntrigger the browser's native validation — if it doesn't, the attribute landed\non the wrapper div and does nothing.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:`GOV.UK reveal pattern: the accessible NAME changes, and a polite live region
announces the state. No aria-pressed — doing both is a double announcement.
Submitting the form re-masks the password.`,...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Deux champs côte à côte',
  render: () => ({
    components: {
      McInput
    },
    setup: () => ({
      email: ref(''),
      lang: ref('Français')
    }),
    template: \`
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:620px">
        <McInput v-model="email" label="Adresse e-mail"
                 hint="C'est votre identifiant de connexion — il ne se modifie pas ici." />
        <McInput v-model="lang" label="Langue"
                 hint="Sert aussi aux e-mails, qui partent hors session." />
      </div>\`
  })
}`,...l.parameters?.docs?.source},description:{story:`DEUX CHAMPS CÔTE À CÔTE, AUX INDICATIONS INÉGALES.

⚠️ Le cas qui a produit le défaut, signalé sur l'écran de compte : une
indication de deux lignes à gauche, d'une seule à droite. Les étiquettes
s'alignaient, les champs non — décalés d'exactement une ligne.

⚠️ La correction pousse le CONTRÔLE en bas de son champ, jamais le champ
entier : aligner le tout par le bas remettrait les saisies en face, mais
décalerait les étiquettes.`,...l.parameters?.docs?.description}}};const J=["Playground","WithHintAndError","NativeAttributesForwarded","PasswordReveal","CoteACote"];export{l as CoteACote,s as NativeAttributesForwarded,i as PasswordReveal,d as Playground,u as WithHintAndError,J as __namedExportsOrder,X as default};

import{e as k,q as C,s as P,f as R,w as B,v as H,x as r,o as c,p as w,n as O,y as F,j as x,t as q,h as M,g as o}from"./iframe-DlngQknY.js";import{M as D}from"./McField-DDb_b2a9.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const U=["id","type","value","placeholder","required","disabled","aria-describedby","aria-invalid"],Y={key:0,class:"mc-visually-hidden","aria-live":"polite"},u=k({inheritAttrs:!1,__name:"McInput",props:{modelValue:{},type:{default:"text"},label:{},hint:{},error:{},placeholder:{},required:{type:Boolean},disabled:{type:Boolean},id:{},hideLabel:{type:[String,Boolean]},requiredLabel:{},revealable:{type:Boolean,default:!0},revealLabel:{default:"Show password"},hideRevealLabel:{default:"Hide password"},shownAnnouncement:{default:"Your password is visible"},hiddenAnnouncement:{default:"Your password is hidden"}},emits:["update:modelValue"],setup(e,{emit:I}){const a=e,V=I,t=r(!1),v=H("inputEl"),b=o(()=>a.type==="password"),f=o(()=>b.value&&a.revealable&&!a.disabled),N=o(()=>b.value&&t.value?"text":a.type),A=o(()=>t.value?a.shownAnnouncement:a.hiddenAnnouncement);function L(p){V("update:modelValue",p.target.value)}function h(){t.value=!1}let m=null;return C(()=>{m=v.value?.form??null,m?.addEventListener("submit",h)}),P(()=>m?.removeEventListener("submit",h)),(p,y)=>(c(),R(D,{label:e.label,hint:e.hint,error:e.error,required:e.required,id:e.id,"hide-label":!!e.hideLabel,"required-label":e.requiredLabel},{default:B(({controlId:S,describedBy:E,invalid:g})=>[w("div",{class:O(["mc-input",{"mc-input--invalid":g,"mc-input--disabled":e.disabled}])},[w("input",F({id:S,ref_key:"inputEl",ref:v,class:"mc-input__control",type:N.value,value:e.modelValue,placeholder:e.placeholder,required:e.required,disabled:e.disabled,"aria-describedby":E,"aria-invalid":g?"true":void 0},p.$attrs,{onInput:L}),null,16,U),f.value?(c(),x("button",{key:0,type:"button",class:"mc-input__reveal",onClick:y[0]||(y[0]=$=>t.value=!t.value)},q(t.value?e.hideRevealLabel:e.revealLabel),1)):M("",!0)],2),f.value?(c(),x("span",Y,q(A.value),1)):M("",!0)]),_:1},8,["label","hint","error","required","id","hide-label","required-label"]))}}),l=T(u,[["__scopeId","data-v-7c2b42ce"]]);u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{description:'McInput — the standard text input.\n\n⚠️ inheritAttrs:false + v-bind="$attrs" ON THE INPUT. Without it, native\nattributes (`required`, `minlength`, `name`, `inputmode`, `autocomplete`…)\nland on the wrapper <div> and silently do nothing — a `required` that never\nvalidates looks exactly like a working one. Vécu wp360/FDC. Binding\nattributes by hand always misses one; forward them all.\n\nPassword reveal (type="password", `revealable` defaults to true):\nfollows the GOV.UK pattern — the most user-tested with real screen-reader\nusers. The accessible NAME changes (Show ↔ Hide) and a polite live region\nannounces the state. Deliberately NO `aria-pressed`: GOV.UK tested it and\ndropped it (uneven support + "pressed = shown, or about to show?"). Doing\nboth at once is the anti-pattern — double announcement.',tags:{},exportName:"default",displayName:"McInput",props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"label",required:!1,type:{name:"string"}},{name:"hint",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"id",required:!1,type:{name:"string"}},{name:"hideLabel",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"}]}},{name:"requiredLabel",required:!1,type:{name:"string"}},{name:"revealable",description:"Password reveal affordance — on by default so nobody forgets the eye",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"revealLabel",description:"Localized reveal labels (DS is i18n-agnostic; English defaults)",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Show password'"}},{name:"hideRevealLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Hide password'"}},{name:"shownAnnouncement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Your password is visible'"}},{name:"hiddenAnnouncement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Your password is hidden'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McInput/McInput.vue"]});const z={title:"Components/McInput",component:l,args:{label:"Compteur horaire",placeholder:"0"}},i={render:e=>({components:{McInput:l},setup:()=>({args:e,value:r("")}),template:'<McInput v-bind="args" v-model="value" style="max-width:360px" />'})},d={name:"Hint & error",render:()=>({components:{McInput:l},setup:()=>({a:r("182"),b:r("")}),template:`
      <div style="display:flex;flex-direction:column;gap:20px;max-width:360px">
        <McInput v-model="a" label="Compteur horaire" hint="Relevé affiché au tableau de bord" />
        <McInput v-model="b" label="Compteur horaire" error="Valeur inférieure au dernier relevé (182 h)" />
      </div>`})},n={name:"Native attributes forwarded",render:()=>({components:{McInput:l},setup:()=>({value:r("")}),template:`
      <form style="display:flex;flex-direction:column;gap:16px;max-width:360px" @submit.prevent>
        <McInput v-model="value" label="Numéro de série" required minlength="4" name="serial"
                 inputmode="text" hint="Requis, 4 caractères minimum" />
        <button type="submit">Valider (doit bloquer si vide)</button>
      </form>`})},s={name:"Password reveal",render:()=>({components:{McInput:l},setup:()=>({value:r("correct horse battery")}),template:`
      <form style="display:flex;flex-direction:column;gap:16px;max-width:360px" @submit.prevent>
        <McInput v-model="value" type="password" label="Mot de passe" autocomplete="current-password"
                 reveal-label="Afficher le mot de passe" hide-reveal-label="Masquer le mot de passe"
                 shown-announcement="Mot de passe visible" hidden-announcement="Mot de passe masqué" />
        <button type="submit">Se connecter (re-masque le champ)</button>
      </form>`})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:"`required` is forwarded to the <input> via $attrs. Submitting empty must\ntrigger the browser's native validation — if it doesn't, the attribute landed\non the wrapper div and does nothing.",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:`GOV.UK reveal pattern: the accessible NAME changes, and a polite live region
announces the state. No aria-pressed — doing both is a double announcement.
Submitting the form re-masks the password.`,...s.parameters?.docs?.description}}};const J=["Playground","WithHintAndError","NativeAttributesForwarded","PasswordReveal"];export{n as NativeAttributesForwarded,s as PasswordReveal,i as Playground,d as WithHintAndError,J as __namedExportsOrder,z as default};

import{e as V,q as C,s as E,j as o,p as t,n as g,h as L,t as x,F as D,k as q,x as v,g as B,v as N,o as s,A as w,B as k,m as $}from"./iframe-BYkfA92X.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const F=["aria-label","aria-expanded"],K={class:"mc-locale__name"},P=["aria-label"],A=["aria-selected","onClick","onKeydown"],d=V({__name:"McLocaleSwitcher",props:{modelValue:{},locales:{default:()=>[]},label:{default:"Language"}},emits:["update:modelValue"],setup(n,{emit:S}){const u=n,M=S,a=v(!1),m=N("root"),p=B(()=>u.locales.find(l=>l.code===u.modelValue)??u.locales[0]);function f(l){M("update:modelValue",l),a.value=!1}function y(l){a.value&&m.value&&!m.value.contains(l.target)&&(a.value=!1)}function b(l){l.key==="Escape"&&(a.value=!1)}return C(()=>{document.addEventListener("click",y,!0),document.addEventListener("keydown",b)}),E(()=>{document.removeEventListener("click",y,!0),document.removeEventListener("keydown",b)}),(l,c)=>(s(),o("div",{ref_key:"root",ref:m,class:"mc-locale"},[t("button",{type:"button",class:"mc-locale__trigger","aria-label":n.label,"aria-expanded":a.value,"aria-haspopup":"listbox",onClick:c[0]||(c[0]=e=>a.value=!a.value)},[p.value?(s(),o("span",{key:0,class:g([`fi fi-${p.value.flag}`,"mc-locale__flag"]),"aria-hidden":"true"},null,2)):L("",!0),t("span",K,x(p.value?.name),1),c[1]||(c[1]=t("svg",{class:"mc-locale__chevron",viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"},[t("path",{d:"M6 9l6 6 6-6","stroke-linecap":"round","stroke-linejoin":"round"})],-1))],8,F),a.value?(s(),o("ul",{key:0,class:"mc-locale__menu",role:"listbox","aria-label":n.label},[(s(!0),o(D,null,q(n.locales,e=>(s(),o("li",{key:e.code,role:"option","aria-selected":e.code===n.modelValue,class:g(["mc-locale__option",{"mc-locale__option--active":e.code===n.modelValue}]),tabindex:"0",onClick:_=>f(e.code),onKeydown:[w(k(_=>f(e.code),["prevent"]),["enter"]),w(k(_=>f(e.code),["prevent"]),["space"])]},[t("span",{class:g([`fi fi-${e.flag}`,"mc-locale__flag"]),"aria-hidden":"true"},null,2),$(" "+x(e.name),1)],42,A))),128))],8,P)):L("",!0)],512))}}),h=j(d,[["__scopeId","data-v-54f99fb7"]]);d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"McLocaleSwitcher",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"string"}},{name:"locales",description:"Défauté : un consommateur qui oublie la prop doit voir une liste vide, pas une exception.",required:!1,type:{name:"Array",elements:[{name:"{ code: string, name: string, flag: string }"}]},defaultValue:{func:!1,value:"() => []"}},{name:"label",description:"Libellé accessible du déclencheur (le DS ne connaît pas la langue de l'app).",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Language'"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/home/runner/work/machinery360-ui/machinery360-ui/src/components/McLocaleSwitcher/McLocaleSwitcher.vue"]});const z={title:"Components/McLocaleSwitcher",component:h,parameters:{docs:{description:{component:"Dropdown maison et non `<select>` natif : le natif ne sait pas afficher de drapeau. ⚠️ Drapeau ≠ langue — l’anglais prend `gb`, pas `en`. Sous 48rem, le nom disparaît et seul le drapeau reste : sur mobile le sélecteur ne doit pas manger une ligne."}}}},i={render:()=>({components:{McLocaleSwitcher:h},setup:()=>({locale:v("fr"),locales:[{code:"fr",name:"Français",flag:"fr"},{code:"en",name:"English",flag:"gb"},{code:"de",name:"Deutsch",flag:"de"}]}),template:`
      <div style="display:flex;justify-content:flex-end;padding:8px 0 200px">
        <McLocaleSwitcher v-model="locale" :locales="locales" label="Langue" />
      </div>`})},r={name:"Prop oubliée",render:()=>({components:{McLocaleSwitcher:h},setup:()=>({locale:v("fr")}),template:'<McLocaleSwitcher v-model="locale" label="Langue" />'})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      McLocaleSwitcher
    },
    setup: () => ({
      locale: ref('fr'),
      locales: [{
        code: 'fr',
        name: 'Français',
        flag: 'fr'
      },
      // L'anglais prend le drapeau britannique : il n'existe pas de drapeau
      // « de langue », il faut le mapper explicitement.
      {
        code: 'en',
        name: 'English',
        flag: 'gb'
      }, {
        code: 'de',
        name: 'Deutsch',
        flag: 'de'
      }]
    }),
    template: \`
      <div style="display:flex;justify-content:flex-end;padding:8px 0 200px">
        <McLocaleSwitcher v-model="locale" :locales="locales" label="Langue" />
      </div>\`
  })
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Prop oubliée',
  render: () => ({
    components: {
      McLocaleSwitcher
    },
    setup: () => ({
      locale: ref('fr')
    }),
    template: '<McLocaleSwitcher v-model="locale" label="Langue" />'
  })
}`,...r.parameters?.docs?.source},description:{story:"Sans `:locales`, un composant contrôlé doit rendre un état vide, pas crasher.",...r.parameters?.docs?.description}}};const R=["Playground","SansLocales"];export{i as Playground,r as SansLocales,R as __namedExportsOrder,z as default};

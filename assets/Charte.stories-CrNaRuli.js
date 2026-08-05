const n={title:"Charte/Palette",parameters:{docs:{description:{component:"Charte Machinery360 — bleu acier (action) sur anthracite (structure). Déclinaison délibérée des couleurs Rippa (RAL 5017 / RAL 7016), jamais leurs valeurs : marque tierce, on reste voisin sans être identique."}}}},e=(c,o)=>`
  <div style="display:flex;align-items:center;gap:12px">
    <span style="width:56px;height:56px;border-radius:8px;flex-shrink:0;
                 border:1px solid var(--mc-color-border);background:var(${c})"></span>
    <span>
      <strong style="display:block;font-size:14px">${o}</strong>
      <code style="font-size:12px;color:var(--mc-color-muted)">${c}</code>
    </span>
  </div>`,r={render:()=>({template:`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        ${e("--mc-color-blue","Bleu — action")}
        ${e("--mc-color-blue-dark","Bleu foncé — survol, texte sur clair")}
        ${e("--mc-color-amber","Ambre — attention (échéance incertaine)")}
        ${e("--mc-color-steel","Anthracite — structure")}
        ${e("--mc-color-steel-deep","Steel deep — dark bg")}
        ${e("--mc-color-slate","Slate — secondary")}
      </div>`})},a={render:()=>({template:`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        ${e("--mc-color-bg","Page background")}
        ${e("--mc-color-surface","Raised surface")}
        ${e("--mc-color-border","Border")}
        ${e("--mc-color-text","Text")}
        ${e("--mc-color-muted","Muted text")}
      </div>`})},t={name:"Maintenance buckets",render:()=>({template:`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        ${e("--mc-bucket-past","Past — attendu, historique inconnu (web)")}
        ${e("--mc-bucket-overdue","Overdue — retard avéré (app)")}
        ${e("--mc-bucket-due","Due — à faire maintenant")}
        ${e("--mc-bucket-soon","Soon — bientôt")}
        ${e("--mc-bucket-done","Done — fait")}
      </div>`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        \${swatch('--mc-color-blue', 'Bleu — action')}
        \${swatch('--mc-color-blue-dark', 'Bleu foncé — survol, texte sur clair')}
        \${swatch('--mc-color-amber', 'Ambre — attention (échéance incertaine)')}
        \${swatch('--mc-color-steel', 'Anthracite — structure')}
        \${swatch('--mc-color-steel-deep', 'Steel deep — dark bg')}
        \${swatch('--mc-color-slate', 'Slate — secondary')}
      </div>\`
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        \${swatch('--mc-color-bg', 'Page background')}
        \${swatch('--mc-color-surface', 'Raised surface')}
        \${swatch('--mc-color-border', 'Border')}
        \${swatch('--mc-color-text', 'Text')}
        \${swatch('--mc-color-muted', 'Muted text')}
      </div>\`
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Maintenance buckets',
  render: () => ({
    template: \`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        \${swatch('--mc-bucket-past', 'Past — attendu, historique inconnu (web)')}
        \${swatch('--mc-bucket-overdue', 'Overdue — retard avéré (app)')}
        \${swatch('--mc-bucket-due', 'Due — à faire maintenant')}
        \${swatch('--mc-bucket-soon', 'Soon — bientôt')}
        \${swatch('--mc-bucket-done', 'Done — fait')}
      </div>\`
  })
}`,...t.parameters?.docs?.source},description:{story:`The product's core semantic — the three answers to "where do I stand?".
Defined once here so the web lookup, the app and the emails agree.`,...t.parameters?.docs?.description}}};const s=["Brand","Surfaces","MaintenanceBuckets"];export{r as Brand,t as MaintenanceBuckets,a as Surfaces,s as __namedExportsOrder,n as default};

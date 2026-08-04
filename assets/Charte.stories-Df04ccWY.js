const s={title:"Charte/Palette",parameters:{docs:{description:{component:"Machinery360 charter — amber (action) on steel (structure). The amber is a deliberate declination, NOT the Rippa brand colour: Rippa is a third-party trademark and we use a neighbouring hue until a written agreement exists."}}}},e=(o,c)=>`
  <div style="display:flex;align-items:center;gap:12px">
    <span style="width:56px;height:56px;border-radius:8px;flex-shrink:0;
                 border:1px solid var(--mc-color-border);background:var(${o})"></span>
    <span>
      <strong style="display:block;font-size:14px">${c}</strong>
      <code style="font-size:12px;color:var(--mc-color-muted)">${o}</code>
    </span>
  </div>`,t={render:()=>({template:`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        ${e("--mc-color-amber","Amber — primary action")}
        ${e("--mc-color-amber-dark","Amber dark — on light bg")}
        ${e("--mc-color-steel","Steel — structure")}
        ${e("--mc-color-steel-deep","Steel deep — dark bg")}
        ${e("--mc-color-slate","Slate — secondary")}
      </div>`})},a={render:()=>({template:`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        ${e("--mc-color-bg","Page background")}
        ${e("--mc-color-surface","Raised surface")}
        ${e("--mc-color-border","Border")}
        ${e("--mc-color-text","Text")}
        ${e("--mc-color-muted","Muted text")}
      </div>`})},r={name:"Maintenance buckets",render:()=>({template:`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        ${e("--mc-bucket-overdue","Overdue — past due")}
        ${e("--mc-bucket-due","Due — do it now")}
        ${e("--mc-bucket-soon","Soon — coming up")}
        ${e("--mc-bucket-done","Done — completed")}
      </div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        \${swatch('--mc-color-amber', 'Amber — primary action')}
        \${swatch('--mc-color-amber-dark', 'Amber dark — on light bg')}
        \${swatch('--mc-color-steel', 'Steel — structure')}
        \${swatch('--mc-color-steel-deep', 'Steel deep — dark bg')}
        \${swatch('--mc-color-slate', 'Slate — secondary')}
      </div>\`
  })
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Maintenance buckets',
  render: () => ({
    template: \`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px">
        \${swatch('--mc-bucket-overdue', 'Overdue — past due')}
        \${swatch('--mc-bucket-due', 'Due — do it now')}
        \${swatch('--mc-bucket-soon', 'Soon — coming up')}
        \${swatch('--mc-bucket-done', 'Done — completed')}
      </div>\`
  })
}`,...r.parameters?.docs?.source},description:{story:`The product's core semantic — the three answers to "where do I stand?".
Defined once here so the web lookup, the app and the emails agree.`,...r.parameters?.docs?.description}}};const n=["Brand","Surfaces","MaintenanceBuckets"];export{t as Brand,r as MaintenanceBuckets,a as Surfaces,n as __namedExportsOrder,s as default};

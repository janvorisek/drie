import{_,a as h,c as p,b as m}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.fc97b491.js";import{_ as f}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.8e1261b2.js";import{_ as u}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.79c9fb7c.js";import{_ as b}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.3a713f82.js";import{_ as x}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.acfcb8b0.js";import{_ as y}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.9731caf5.js";import{_ as g}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.132b05f6.js";import{_ as M}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.5d6fc8d5.js";import{V as $}from"./chunks/v-tweakpane.b538878e.js";import{d as v,k as w,o as i,c as n,m as a,a as t,w as o,u as e,e as C,q as l,f as S}from"./app.97673a72.js";const B={class:"example-with-props"},P={class:"example"},T={class:"example-props"},k=v({__name:"MeshBasicMaterial",setup(c){const s=w({color:"#666666",transparent:!1,opacity:1}),d=r=>{r.addInput(s,"color"),r.addInput(s,"transparent"),r.addInput(s,"opacity",{min:0,max:1})};return(r,O)=>(i(),n("div",B,[a("div",P,[t(e(m),{antialias:!0},{default:o(()=>[t(e(f),{position:[2,2,3],up:[0,0,1]},{default:o(()=>[t(e(_))]),_:1}),t(e(h),{background:"#f9f9f9"},{default:o(()=>[t(e(b),null,{default:o(()=>[t(e(p),{color:s.color,transparent:s.transparent,opacity:s.opacity},null,8,["color","transparent","opacity"]),t(e(y),{name:"geo"})]),_:1}),t(e(u),null,{default:o(()=>[t(e(g),{geometry:"geo"}),t(e(M),{color:"black"})]),_:1}),t(e(x),{size:2})]),_:1})]),_:1})]),a("div",T,[t(e($),{pane:{title:"Properties"},onOnPaneCreated:d})])]))}});const D=a("h1",{id:"meshbasicmaterial",tabindex:"-1"},[l("MeshBasicMaterial "),a("a",{class:"header-anchor",href:"#meshbasicmaterial","aria-hidden":"true"},"#")],-1),N=a("p",null,"A material for drawing geometries in a simple shaded (flat or wireframe) way.",-1),V=a("p",null,"This material is not affected by lights.",-1),A=a("h2",{id:"example",tabindex:"-1"},[l("Example "),a("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#")],-1),E=S('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color </code></td><td>Color of the material.</td><td>union</td><td></td></tr><tr><td><code>side </code></td><td>Defines which side of faces will be rendered - front, back or both. Represtented by <code>THREE.Side</code>.</td><td>Side</td><td>FrontSide</td></tr><tr><td><code>opacity </code></td><td>Float in the range of <code>0.0 - 1.0</code> indicating how transparent the material is.</td><td>number</td><td>1</td></tr><tr><td><code>transparent </code></td><td>Defines whether this material is transparent.</td><td>boolean</td><td>false</td></tr><tr><td><code>vertexColors</code></td><td>Defines whether vertex coloring is used.</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td></td><td></td></tr></tbody></table><hr>',5),Q=JSON.parse('{"title":"MeshBasicMaterial","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"components/Materials/MeshBasicMaterial.md"}'),I={name:"components/Materials/MeshBasicMaterial.md"},U=Object.assign(I,{setup(c){return(s,d)=>{const r=C("ClientOnly");return i(),n("div",null,[D,N,V,A,t(r,null,{default:o(()=>[t(k)]),_:1}),E])}}});export{Q as __pageData,U as default};
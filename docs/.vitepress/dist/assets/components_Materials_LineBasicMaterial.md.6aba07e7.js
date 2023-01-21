import{_ as l,a as p,c as m,b as f}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.db6547a3.js";import{_ as h}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.6f31866b.js";import{_ as u}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.ca0b0615.js";import{_ as b}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.30bca2e2.js";import{_ as g}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.841b004e.js";import{_ as x}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.08f0ccc4.js";import{_ as y}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.e3c6a777.js";import{_ as L}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.1c741468.js";import{V as T}from"./chunks/v-tweakpane.86944bd1.js";import{d as $,k as C,o as s,c as d,m as i,a as t,w as r,u as e,e as P,f as c}from"./app.aca0c04b.js";const S={class:"example-with-props"},v={class:"example"},A={class:"example-props"},B=$({__name:"LineBasicMaterial",setup(_){const a=C({color:"#000000",transparent:!1,opacity:1}),n=o=>{o.addInput(a,"color"),o.addInput(a,"transparent"),o.addInput(a,"opacity",{min:0,max:1})};return(o,I)=>(s(),d("div",S,[i("div",v,[t(e(f),{antialias:!0},{default:r(()=>[t(e(h),{position:[1.5,1.5,1],up:[0,0,1]},{default:r(()=>[t(e(l))]),_:1},8,["position"]),t(e(p),{background:"#f9f9f9"},{default:r(()=>[t(e(b),null,{default:r(()=>[t(e(m),{transparent:!0,opacity:0}),t(e(x),{name:"geo"})]),_:1}),t(e(u),null,{default:r(()=>[t(e(y),{geometry:"geo"}),t(e(L),{color:a.color,transparent:a.transparent,opacity:a.opacity},null,8,["color","transparent","opacity"])]),_:1}),t(e(g),{size:1})]),_:1})]),_:1})]),i("div",A,[t(e(T),{pane:{title:"Properties"},onOnPaneCreated:n})])]))}});const M=c('<h1 id="linebasicmaterial" tabindex="-1">LineBasicMaterial <a class="header-anchor" href="#linebasicmaterial" aria-hidden="true">#</a></h1><p>A material for drawing line geometries.</p><p>Suitable for <a href="/components/Objects/Line"><code>&lt;Line /&gt;</code></a>, <a href="/components/Objects/LineSegments"><code>&lt;LineSegments /&gt;</code></a> or <a href="/components/Objects/LineLoop"><code>&lt;LineLoop /&gt;</code></a>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',4),O=c('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color </code></td><td>Color of the material.</td><td>union</td><td>0xffffff</td></tr><tr><td><code>name </code></td><td>Name of the material</td><td>string</td><td>&quot;&quot;</td></tr><tr><td><code>opacity </code></td><td>Float in the range of <code>0.0 - 1.0</code> indicating how transparent the material is.</td><td>number</td><td>1</td></tr><tr><td><code>transparent</code></td><td>Defines whether this material is transparent.</td><td>boolean</td><td>false</td></tr></tbody></table><hr>',3),J=JSON.parse('{"title":"LineBasicMaterial","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/Materials/LineBasicMaterial.md"}'),V={name:"components/Materials/LineBasicMaterial.md"},G=Object.assign(V,{setup(_){return(a,n)=>{const o=P("ClientOnly");return s(),d("div",null,[M,t(o,null,{default:r(()=>[t(B)]),_:1}),O])}}});export{J as __pageData,G as default};
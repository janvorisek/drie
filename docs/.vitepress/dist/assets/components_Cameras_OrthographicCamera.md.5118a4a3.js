import{_ as m,a as p,b as u,c as f}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.1fe01182.js";import{_ as g}from"./chunks/OrthographicCamera.vue_vue_type_script_setup_true_lang.01b5862d.js";import{_ as b,a as C}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.3d05143c.js";import{_ as v}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.5021394b.js";import{_ as T}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.235eb272.js";import{_ as x}from"./chunks/EdgesGeometry.vue_vue_type_script_setup_true_lang.b2415dd9.js";import{d as $,r as k,o as d,c as n,a as t,w as a,u as e,F as c,b as l,e as O,f as h}from"./app.77d838e0.js";const S={class:"example"},y=$({__name:"OrthographicCamera",setup(_){const o=k([0,0,0]);return window.setInterval(()=>{const s=Date.now()/1e3;o.value=[0,0,Math.cos(s)]},10),(s,i)=>(d(),n("div",S,[t(e(u),{ref:"renderer",antialias:!0},{default:a(()=>[t(e(g),{position:[25,10,10],up:[0,0,1]},{default:a(()=>[t(e(m),{target:[25,0,0]})]),_:1}),t(e(p),{background:"#f9f9f9"},{default:a(()=>[(d(),n(c,null,l(6,r=>t(e(v),{rotation:o.value,position:[r*7.5,0,0]},{default:a(()=>[t(e(f),{color:"#aaa"}),t(e(T),{name:`cube${r}`,width:5,height:5,depth:2},null,8,["name"])]),_:2},1032,["rotation","position"])),64)),(d(),n(c,null,l(6,r=>t(e(b),{rotation:o.value,position:[r*7.5,0,0]},{default:a(()=>[t(e(x),{geometry:`cube${r}`},null,8,["geometry"]),t(e(C),{color:"#333"})]),_:2},1032,["rotation","position"])),64))]),_:1})]),_:1},512)]))}}),P=h('<h1 id="orthographiccamera" tabindex="-1">OrthographicCamera <a class="header-anchor" href="#orthographiccamera" aria-hidden="true">#</a></h1><p>This component manages <a href="https://threejs.org/docs/#api/en/cameras/OrthographicCamera" target="_blank" rel="noreferrer"><code>THREE.OrthographicCamera</code></a>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',3),V=h('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>far </code></td><td>Camera frustum far plane.<br>Must be greater than the current value of near plane.</td><td>number</td><td>2000</td></tr><tr><td><code>lookAt </code></td><td>Camera target</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>name </code></td><td>Camera name</td><td>string</td><td>&quot;&quot;</td></tr><tr><td><code>near </code></td><td>Camera frustum near plane.<br>The valid range is greater than 0 and less than the current value of the far plane.<br>Note that, unlike for the OrthographicCamera, 0 is not a valid value for a PerspectiveCamera&#39;s near plane.</td><td>number</td><td>0.1</td></tr><tr><td><code>position </code></td><td>Camera position</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>up </code></td><td>Camera up vector</td><td>Vector3Like</td><td>[0, 1, 0]</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td></td><td></td></tr></tbody></table><hr>',5),R=JSON.parse('{"title":"OrthographicCamera","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"components/Cameras/OrthographicCamera.md"}'),A={name:"components/Cameras/OrthographicCamera.md"},j=Object.assign(A,{setup(_){return(o,s)=>{const i=O("ClientOnly");return d(),n("div",null,[P,t(i,null,{default:a(()=>[t(y)]),_:1}),V])}}});export{R as __pageData,j as default};

import{_ as p,a as m,b as u}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.25647115.js";import{_ as f}from"./chunks/OrthographicCamera.vue_vue_type_script_setup_true_lang.13dbf3eb.js";import{_ as g}from"./chunks/OrbitControls.vue_vue_type_script_setup_true_lang.af8d0c48.js";import{_ as b}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.6923d9b0.js";import{_ as C}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.0ef126c2.js";import{_ as x}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.c1749804.js";import{_ as v}from"./chunks/EdgesGeometry.vue_vue_type_script_setup_true_lang.c7ffaaed.js";import{_ as k}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.cecb3bea.js";import{d as T,r as $,o as d,c as n,a as e,w as r,u as t,F as h,b as l,e as O,f as c}from"./app.62c82040.js";const y={class:"example"},S=T({__name:"OrthographicCamera",setup(_){const o=$([0,0,0]);return window.setInterval(()=>{const s=Date.now()/1e3;o.value=[0,0,Math.cos(s)]},10),(s,i)=>(d(),n("div",y,[e(t(m),{ref:"renderer",antialias:!0},{default:r(()=>[e(t(f),{position:[25,10,10],up:[0,0,1]},{default:r(()=>[e(t(g),{target:[25,0,0]})]),_:1}),e(t(p),{background:"#f9f9f9"},{default:r(()=>[(d(),n(h,null,l(6,a=>e(t(C),{key:a,rotation:o.value,position:[a*7.5,0,0]},{default:r(()=>[e(t(u),{color:"#aaa"}),e(t(x),{name:`cube${a}`,width:5,height:5,depth:2},null,8,["name"])]),_:2},1032,["rotation","position"])),64)),(d(),n(h,null,l(6,a=>e(t(b),{key:a,rotation:o.value,position:[a*7.5,0,0]},{default:r(()=>[e(t(v),{geometry:`cube${a}`},null,8,["geometry"]),e(t(k),{color:"#333"})]),_:2},1032,["rotation","position"])),64))]),_:1})]),_:1},512)]))}}),E=c('<h1 id="orthographiccamera" tabindex="-1">OrthographicCamera <a class="header-anchor" href="#orthographiccamera" aria-hidden="true">#</a></h1><p>This component manages <a href="https://threejs.org/docs/#api/en/cameras/OrthographicCamera" target="_blank" rel="noreferrer"><code>THREE.OrthographicCamera</code></a>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',3),P=c('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>far </code></td><td>Camera frustum far plane.<br>Must be greater than the current value of near plane.</td><td>number</td><td>2000</td></tr><tr><td><code>lookAt </code></td><td>Camera target</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>name </code></td><td>Camera name</td><td>string</td><td>&quot;&quot;</td></tr><tr><td><code>near </code></td><td>Camera frustum near plane.<br>The valid range is greater than 0 and less than the current value of the far plane.<br>Note that, unlike for the OrthographicCamera, 0 is not a valid value for a PerspectiveCamera&#39;s near plane.</td><td>number</td><td>0.1</td></tr><tr><td><code>position </code></td><td>Camera position</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>up </code></td><td>Camera up vector</td><td>Vector3Like</td><td>[0, 1, 0]</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td></td><td></td></tr></tbody></table><h2 id="expose" tabindex="-1">Expose <a class="header-anchor" href="#expose" aria-hidden="true">#</a></h2><h3 id="three" tabindex="-1">three <a class="header-anchor" href="#three" aria-hidden="true">#</a></h3><blockquote></blockquote><hr>',8),j=JSON.parse('{"title":"OrthographicCamera","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Expose","slug":"expose","link":"#expose","children":[{"level":3,"title":"three","slug":"three","link":"#three","children":[]}]}],"relativePath":"components/Cameras/OrthographicCamera.md"}'),V={name:"components/Cameras/OrthographicCamera.md"},F=Object.assign(V,{setup(_){return(o,s)=>{const i=O("ClientOnly");return d(),n("div",null,[E,e(i,null,{default:r(()=>[e(S)]),_:1}),P])}}});export{j as __pageData,F as default};

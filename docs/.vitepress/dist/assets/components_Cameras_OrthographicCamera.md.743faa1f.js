import{_ as c,a as l,b as _,c as p,d as m,e as u}from"./chunks/MeshLambertMaterial.vue_vue_type_script_setup_true_lang.2781c8aa.js";import{_ as f}from"./chunks/OrthographicCamera.vue_vue_type_script_setup_true_lang.c411f76a.js";import{d as g,r as C,o as s,c as n,a as t,w as a,u as e,b,e as i}from"./app.d1f87fcd.js";const x={class:"example"},T=g({__name:"OrthographicCamera",setup(h){const r=C([0,0,0]);return window.setInterval(()=>{const d=Date.now()/1e3;r.value=[Math.cos(d),0,0]},10),(d,o)=>(s(),n("div",x,[t(e(u),{ref:"renderer",antialias:!0},{default:a(()=>[t(e(f),{position:[10,10,10],up:[0,0,1]},{default:a(()=>[t(e(c))]),_:1}),t(e(l),{background:"#f9f9f9"},{default:a(()=>[t(e(_),{rotation:r.value},{default:a(()=>[t(e(p),{color:"blue"}),t(e(m),{width:15,height:10})]),_:1},8,["rotation"])]),_:1})]),_:1},512)]))}}),k=i('<h1 id="orthographiccamera" tabindex="-1">OrthographicCamera <a class="header-anchor" href="#orthographiccamera" aria-hidden="true">#</a></h1><p>This component manages <a href="https://threejs.org/docs/#api/en/cameras/OrthographicCamera" target="_blank" rel="noreferrer"><code>THREE.OrthographicCamera</code></a>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',3),v=i('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>Camera name</td><td>string</td><td>-</td><td>&quot;&quot;</td></tr><tr><td>up</td><td>Camera up vector</td><td>Vector3Like</td><td>-</td><td>[0, 1, 0]</td></tr><tr><td>position</td><td>Camera position</td><td>Vector3Like</td><td>-</td><td>[0, 0, 0]</td></tr><tr><td>lookAt</td><td>Camera target</td><td>Vector3Like</td><td>-</td><td>[0, 0, 0]</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td></td><td></td></tr></tbody></table><hr>',5),P=JSON.parse('{"title":"OrthographicCamera","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"components/Cameras/OrthographicCamera.md"}'),O={name:"components/Cameras/OrthographicCamera.md"},y=Object.assign(O,{setup(h){return(r,d)=>{const o=b("ClientOnly");return s(),n("div",null,[k,t(o,null,{default:a(()=>[t(T)]),_:1}),v])}}});export{P as __pageData,y as default};
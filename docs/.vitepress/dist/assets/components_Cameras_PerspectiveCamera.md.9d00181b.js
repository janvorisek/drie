import{_ as l,a as _,b as h,c as p,d as m,e as u}from"./chunks/MeshLambertMaterial.vue_vue_type_script_setup_true_lang.2781c8aa.js";import{_ as f}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.82674332.js";import{d as C,r as v,o,c as n,a as t,w as a,u as e,b,e as i}from"./app.d1f87fcd.js";const x={class:"example"},P=C({__name:"PerspectiveCamera",setup(c){const r=v([0,0,0]);return window.setInterval(()=>{const s=Date.now()/1e3;r.value=[Math.cos(s),0,0]},10),(s,d)=>(o(),n("div",x,[t(e(u),{ref:"renderer",antialias:!0},{default:a(()=>[t(e(f),{position:[10,10,10],up:[0,0,1]},{default:a(()=>[t(e(l))]),_:1}),t(e(_),{background:"#f9f9f9"},{default:a(()=>[t(e(h),{rotation:r.value},{default:a(()=>[t(e(p),{color:"blue"}),t(e(m),{width:15,height:10})]),_:1},8,["rotation"])]),_:1})]),_:1},512)]))}}),T=i('<h1 id="perspectivecamera" tabindex="-1">PerspectiveCamera <a class="header-anchor" href="#perspectivecamera" aria-hidden="true">#</a></h1><p>This component manages <a href="https://threejs.org/docs/#api/en/cameras/PerspectiveCamera" target="_blank" rel="noreferrer"><code>THREE.PerspectiveCamera</code></a>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',3),g=i('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>Camera name</td><td>string</td><td>-</td><td>&quot;&quot;</td></tr><tr><td>up</td><td>Camera up vector</td><td>Vector3Like</td><td>-</td><td>[0, 1, 0]</td></tr><tr><td>position</td><td>Camera position</td><td>Vector3Like</td><td>-</td><td>[0, 0, 0]</td></tr><tr><td>lookAt</td><td>Camera target</td><td>Vector3Like</td><td>-</td><td>[0, 0, 0]</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td></td><td></td></tr></tbody></table><hr>',5),y=JSON.parse('{"title":"PerspectiveCamera","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"components/Cameras/PerspectiveCamera.md"}'),k={name:"components/Cameras/PerspectiveCamera.md"},A=Object.assign(k,{setup(c){return(r,s)=>{const d=b("ClientOnly");return o(),n("div",null,[T,t(d,null,{default:a(()=>[t(P)]),_:1}),g])}}});export{y as __pageData,A as default};
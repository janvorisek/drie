import{_ as g,a as C,c as d,b as j}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.9a3cc64b.js";import{_ as $}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.85206f0b.js";import{_ as m}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.b1063996.js";import{_}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.d35280e6.js";import{_ as P}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.ab0ce57d.js";import{_ as S}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.94b27e49.js";import{_ as V}from"./chunks/CircleGeometry.vue_vue_type_script_setup_true_lang.fe5d178b.js";import{_ as B}from"./chunks/ConeGeometry.vue_vue_type_script_setup_true_lang.39ffb0f8.js";import{_ as R}from"./chunks/CylinderGeometry.vue_vue_type_script_setup_true_lang.bf4fdbf4.js";import{_ as z}from"./chunks/PlaneGeometry.vue_vue_type_script_setup_true_lang.7a77b88d.js";import{_ as A}from"./chunks/RingGeometry.vue_vue_type_script_setup_true_lang.ab7b9b54.js";import{_ as N}from"./chunks/SphereGeometry.vue_vue_type_script_setup_true_lang.6aa6b850.js";import{_ as p}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.30348f6f.js";import{_ as u}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.a1d0ee9a.js";import{V as T}from"./chunks/v-tweakpane.e4917e37.js";import{d as w,k as M,r as f,o as i,c as v,m as y,a as t,w as a,u as e,s,t as c,e as O,q as b,f as I}from"./app.8cb58532.js";const L={class:"example-with-props"},D={class:"example"},E={class:"example-props"},W=w({__name:"Mesh",setup(G){const o=M({color:"#666666",object:"BoxGeometry",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1}}),l=f([0,0,0]),r=f([0,0,0]),n=f([1,1,1]),k=()=>{l.value=[o.position.x,o.position.y,o.position.z],r.value=[o.rotation.x,o.rotation.y,o.rotation.z],n.value=[o.scale.x,o.scale.y,o.scale.z]},x=h=>{h.addInput(o,"object",{label:"geometry",options:{BoxGeometry:"BoxGeometry",CircleGeometry:"CircleGeometry",ConeGeometry:"ConeGeometry",CylinderGeometry:"CylinderGeometry",PlaneGeometry:"PlaneGeometry",RingGeometry:"RingGeometry",SphereGeometry:"SphereGeometry"}}),h.addInput(o,"position"),h.addInput(o,"rotation"),h.addInput(o,"scale",{x:{min:0},y:{min:0},z:{min:0}})};return(h,Q)=>(i(),v("div",L,[y("div",D,[t(e(j),{antialias:!0,"on-before-render":k},{default:a(()=>[t(e($),{position:[0,2,3]},{default:a(()=>[t(e(g))]),_:1}),t(e(C),{background:"#f9f9f9"},{default:a(()=>[o.object==="CircleGeometry"?(i(),s(e(_),{key:0,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(V),{name:"CircleGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="CircleGeometry"?(i(),s(e(m),{key:1,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(p),{geometry:"CircleGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="BoxGeometry"?(i(),s(e(_),{key:2,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(S),{name:"BoxGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="BoxGeometry"?(i(),s(e(m),{key:3,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(p),{geometry:"BoxGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="ConeGeometry"?(i(),s(e(_),{key:4,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(B),{name:"ConeGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="ConeGeometry"?(i(),s(e(m),{key:5,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(p),{geometry:"ConeGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="CylinderGeometry"?(i(),s(e(_),{key:6,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(R),{name:"CylinderGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="CylinderGeometry"?(i(),s(e(m),{key:7,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(p),{geometry:"CylinderGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="PlaneGeometry"?(i(),s(e(_),{key:8,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(z),{name:"PlaneGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="PlaneGeometry"?(i(),s(e(m),{key:9,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(p),{geometry:"PlaneGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="RingGeometry"?(i(),s(e(_),{key:10,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(A),{name:"RingGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="RingGeometry"?(i(),s(e(m),{key:11,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(p),{geometry:"RingGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="SphereGeometry"?(i(),s(e(_),{key:12,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(N),{name:"SphereGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="SphereGeometry"?(i(),s(e(m),{key:13,position:l.value,rotation:r.value,scale:n.value},{default:a(()=>[t(e(p),{geometry:"SphereGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),t(e(P),{size:2})]),_:1})]),_:1})]),y("div",E,[t(e(T),{pane:{title:"Properties"},onOnPaneCreated:x})])]))}});const q=y("h1",{id:"mesh",tabindex:"-1"},[b("Mesh "),y("a",{class:"header-anchor",href:"#mesh","aria-hidden":"true"},"#")],-1),J=y("p",null,"Component representing triangular polygon mesh based objects.",-1),F=y("h2",{id:"example",tabindex:"-1"},[b("Example "),y("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#")],-1),H=I('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>castShadow </code></td><td>Whether the object gets rendered into shadow map.</td><td>boolean</td><td>false</td></tr><tr><td><code>position </code></td><td>A <a href="/types#vector3like">Vector3Like</a> representing the object&#39;s local position.</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>receiveShadow</code></td><td>Whether the material receives shadows.</td><td>boolean</td><td>false</td></tr><tr><td><code>rotation </code></td><td>A <a href="/types#vector3like">Vector3Like</a> representing local rotation (see Euler angles), in radians.</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>scale </code></td><td>A <a href="/types#vector3like">Vector3Like</a> representing the object&#39;s local scale.</td><td>Vector3Like</td><td>[1, 1, 1]</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td></td><td></td></tr></tbody></table><hr>',5),_e=JSON.parse('{"title":"Mesh","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"components/Objects/Mesh.md"}'),K={name:"components/Objects/Mesh.md"},pe=Object.assign(K,{setup(G){return(o,l)=>{const r=O("ClientOnly");return i(),v("div",null,[q,J,F,t(r,null,{default:a(()=>[t(W)]),_:1}),H])}}});export{_e as __pageData,pe as default};

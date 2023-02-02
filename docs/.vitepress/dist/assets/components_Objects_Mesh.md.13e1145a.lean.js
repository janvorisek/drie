import{b as k,c as d,_ as x}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.748abb6c.js";import{_ as D}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.f7f80909.js";import{_ as F}from"./chunks/OrbitControls.vue_vue_type_script_setup_true_lang.4486bf42.js";import{_ as p}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.862816f1.js";import{_ as m}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.6dfa410c.js";import{_ as j}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.d3044266.js";import{_ as B}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.fd13fc48.js";import{_ as A}from"./chunks/CircleGeometry.vue_vue_type_script_setup_true_lang.c05bd49e.js";import{_ as S}from"./chunks/ConeGeometry.vue_vue_type_script_setup_true_lang.526ed22c.js";import{_ as $}from"./chunks/CylinderGeometry.vue_vue_type_script_setup_true_lang.39bf49fb.js";import{_ as P}from"./chunks/PlaneGeometry.vue_vue_type_script_setup_true_lang.abd3a038.js";import{_ as T}from"./chunks/RingGeometry.vue_vue_type_script_setup_true_lang.b9dac33e.js";import{_ as V}from"./chunks/SphereGeometry.vue_vue_type_script_setup_true_lang.83183be3.js";import{_ as h}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.30beb9e5.js";import{_ as u}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.974bda8d.js";import{V as E}from"./chunks/v-tweakpane.80ea458d.js";import{d as M,m as w,l as y,o as l,c as v,f,e as t,w as a,u as e,y as i,z as c,b as R,a as b}from"./app.b0bbb7e4.js";const z={class:"example-with-props"},N={class:"example"},O={class:"example-props"},I=M({__name:"Mesh",setup(g){const o=w({color:"#666666",object:"BoxGeometry",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1}}),r=y([0,0,0]),s=y([0,0,0]),n=y([1,1,1]),C=()=>{r.value=[o.position.x,o.position.y,o.position.z],s.value=[o.rotation.x,o.rotation.y,o.rotation.z],n.value=[o.scale.x,o.scale.y,o.scale.z]},G=_=>{_.addInput(o,"object",{label:"geometry",options:{BoxGeometry:"BoxGeometry",CircleGeometry:"CircleGeometry",ConeGeometry:"ConeGeometry",CylinderGeometry:"CylinderGeometry",PlaneGeometry:"PlaneGeometry",RingGeometry:"RingGeometry",SphereGeometry:"SphereGeometry"}}),_.addInput(o,"position"),_.addInput(o,"rotation"),_.addInput(o,"scale",{x:{min:0},y:{min:0},z:{min:0}})};return(_,W)=>(l(),v("div",z,[f("div",N,[t(e(x),{antialias:!0,"on-before-render":C},{default:a(()=>[t(e(D),{position:[0,2,3]},{default:a(()=>[t(e(F))]),_:1}),t(e(k),{background:"#f9f9f9"},{default:a(()=>[o.object==="CircleGeometry"?(l(),i(e(m),{key:0,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(A),{name:"CircleGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="CircleGeometry"?(l(),i(e(p),{key:1,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(h),{geometry:"CircleGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="BoxGeometry"?(l(),i(e(m),{key:2,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(B),{name:"BoxGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="BoxGeometry"?(l(),i(e(p),{key:3,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(h),{geometry:"BoxGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="ConeGeometry"?(l(),i(e(m),{key:4,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(S),{name:"ConeGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="ConeGeometry"?(l(),i(e(p),{key:5,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(h),{geometry:"ConeGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="CylinderGeometry"?(l(),i(e(m),{key:6,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e($),{name:"CylinderGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="CylinderGeometry"?(l(),i(e(p),{key:7,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(h),{geometry:"CylinderGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="PlaneGeometry"?(l(),i(e(m),{key:8,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(P),{name:"PlaneGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="PlaneGeometry"?(l(),i(e(p),{key:9,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(h),{geometry:"PlaneGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="RingGeometry"?(l(),i(e(m),{key:10,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(T),{name:"RingGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="RingGeometry"?(l(),i(e(p),{key:11,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(h),{geometry:"RingGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="SphereGeometry"?(l(),i(e(m),{key:12,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(V),{name:"SphereGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="SphereGeometry"?(l(),i(e(p),{key:13,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(h),{geometry:"SphereGeometry"}),t(e(u),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),t(e(j),{size:2})]),_:1})]),_:1})]),f("div",O,[t(e(E),{pane:{title:"Properties"},onOnPaneCreated:G})])]))}});const q=b("",4),L=b("",10),de=JSON.parse('{"title":"Mesh","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[{"level":3,"title":"Code","slug":"code","link":"#code","children":[]}]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Expose","slug":"expose","link":"#expose","children":[{"level":3,"title":"three","slug":"three","link":"#three","children":[]}]}],"relativePath":"components/Objects/Mesh.md"}'),U={name:"components/Objects/Mesh.md"},pe=Object.assign(U,{setup(g){return(o,r)=>{const s=R("ClientOnly");return l(),v("div",null,[q,t(s,null,{default:a(()=>[t(I)]),_:1}),L])}}});export{de as __pageData,pe as default};

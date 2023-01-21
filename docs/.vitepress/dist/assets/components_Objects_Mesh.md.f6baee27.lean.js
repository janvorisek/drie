import{_ as k,a as x,c as d,b as D}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.722b57a5.js";import{_ as F}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.2c3aa58e.js";import{_ as p}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.77f65d43.js";import{_ as m}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.d49c149e.js";import{_ as j}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.cced652d.js";import{_ as B}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.90f10629.js";import{_ as A}from"./chunks/CircleGeometry.vue_vue_type_script_setup_true_lang.d13ec2ac.js";import{_ as S}from"./chunks/ConeGeometry.vue_vue_type_script_setup_true_lang.62eb1f02.js";import{_ as $}from"./chunks/CylinderGeometry.vue_vue_type_script_setup_true_lang.dc6fab71.js";import{_ as P}from"./chunks/PlaneGeometry.vue_vue_type_script_setup_true_lang.fba743c6.js";import{_ as T}from"./chunks/RingGeometry.vue_vue_type_script_setup_true_lang.d6dd6166.js";import{_ as V}from"./chunks/SphereGeometry.vue_vue_type_script_setup_true_lang.87e7d421.js";import{_ as u}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.06119b93.js";import{_ as y}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.9a8ae0bc.js";import{V as w}from"./chunks/v-tweakpane.edcc5aaf.js";import{d as M,k as E,r as h,o as l,c as v,m as f,a as t,w as a,u as e,x as i,y as c,e as R,f as b}from"./app.774a1709.js";const O={class:"example-with-props"},z={class:"example"},I={class:"example-props"},N=M({__name:"Mesh",setup(g){const o=E({color:"#666666",object:"BoxGeometry",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1}}),r=h([0,0,0]),s=h([0,0,0]),n=h([1,1,1]),C=()=>{r.value=[o.position.x,o.position.y,o.position.z],s.value=[o.rotation.x,o.rotation.y,o.rotation.z],n.value=[o.scale.x,o.scale.y,o.scale.z]},G=_=>{_.addInput(o,"object",{label:"geometry",options:{BoxGeometry:"BoxGeometry",CircleGeometry:"CircleGeometry",ConeGeometry:"ConeGeometry",CylinderGeometry:"CylinderGeometry",PlaneGeometry:"PlaneGeometry",RingGeometry:"RingGeometry",SphereGeometry:"SphereGeometry"}}),_.addInput(o,"position"),_.addInput(o,"rotation"),_.addInput(o,"scale",{x:{min:0},y:{min:0},z:{min:0}})};return(_,W)=>(l(),v("div",O,[f("div",z,[t(e(D),{antialias:!0,"on-before-render":C},{default:a(()=>[t(e(F),{position:[0,2,3]},{default:a(()=>[t(e(k))]),_:1}),t(e(x),{background:"#f9f9f9"},{default:a(()=>[o.object==="CircleGeometry"?(l(),i(e(m),{key:0,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(A),{name:"CircleGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="CircleGeometry"?(l(),i(e(p),{key:1,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(u),{geometry:"CircleGeometry"}),t(e(y),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="BoxGeometry"?(l(),i(e(m),{key:2,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(B),{name:"BoxGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="BoxGeometry"?(l(),i(e(p),{key:3,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(u),{geometry:"BoxGeometry"}),t(e(y),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="ConeGeometry"?(l(),i(e(m),{key:4,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(S),{name:"ConeGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="ConeGeometry"?(l(),i(e(p),{key:5,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(u),{geometry:"ConeGeometry"}),t(e(y),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="CylinderGeometry"?(l(),i(e(m),{key:6,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e($),{name:"CylinderGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="CylinderGeometry"?(l(),i(e(p),{key:7,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(u),{geometry:"CylinderGeometry"}),t(e(y),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="PlaneGeometry"?(l(),i(e(m),{key:8,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(P),{name:"PlaneGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="PlaneGeometry"?(l(),i(e(p),{key:9,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(u),{geometry:"PlaneGeometry"}),t(e(y),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="RingGeometry"?(l(),i(e(m),{key:10,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(T),{name:"RingGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="RingGeometry"?(l(),i(e(p),{key:11,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(u),{geometry:"RingGeometry"}),t(e(y),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="SphereGeometry"?(l(),i(e(m),{key:12,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(d),{color:o.color},null,8,["color"]),t(e(V),{name:"SphereGeometry"})]),_:1},8,["position","rotation","scale"])):c("",!0),o.object==="SphereGeometry"?(l(),i(e(p),{key:13,position:r.value,rotation:s.value,scale:n.value},{default:a(()=>[t(e(u),{geometry:"SphereGeometry"}),t(e(y),{color:"black"})]),_:1},8,["position","rotation","scale"])):c("",!0),t(e(j),{size:2})]),_:1})]),_:1})]),f("div",I,[t(e(w),{pane:{title:"Properties"},onOnPaneCreated:G})])]))}});const L=b("",4),q=b("",7),ce=JSON.parse('{"title":"Mesh","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[{"level":3,"title":"Code","slug":"code","link":"#code","children":[]}]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"components/Objects/Mesh.md"}'),U={name:"components/Objects/Mesh.md"},de=Object.assign(U,{setup(g){return(o,r)=>{const s=R("ClientOnly");return l(),v("div",null,[L,t(s,null,{default:a(()=>[t(N)]),_:1}),q])}}});export{ce as __pageData,de as default};

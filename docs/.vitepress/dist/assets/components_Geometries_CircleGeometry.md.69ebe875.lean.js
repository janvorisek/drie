import{_ as F,a as i,k as y,D as d,b as m}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.727239dc.js";import{_ as C}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.26bc956f.js";import{_ as u}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.a946f3b3.js";import{_ as h}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.0ce02e34.js";import{_}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.dabe6f17.js";import{_ as A}from"./chunks/CircleGeometry.vue_vue_type_script_setup_true_lang.8c02da31.js";import{_ as f}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.2d540da8.js";import{_ as g}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.a51887b1.js";import{V as b}from"./chunks/v-tweakpane.2c6287ff.js";import{d as v,k as E,o as p,c as r,m as l,a as s,w as t,u as a,e as q,f as c}from"./app.46be9210.js";const x={class:"example-with-props"},S={class:"example"},P={class:"example-props"},k=v({__name:"CircleGeometry",setup(D){const n=E({radius:3,segments:32,thetaStart:0,thetaLength:2*Math.PI}),o=e=>{e.addInput(n,"radius",{min:1,max:10}),e.addInput(n,"segments",{min:3,max:64,step:1}),e.addInput(n,"thetaStart",{min:0,max:2*Math.PI}),e.addInput(n,"thetaLength",{min:0,max:2*Math.PI})};return(e,M)=>(p(),r("div",x,[l("div",S,[s(a(m),{ref:"renderer",antialias:!0},{default:t(()=>[s(a(C),{position:[5,5,5],up:[0,0,1]},{default:t(()=>[s(a(F))]),_:1}),s(a(i),{background:"#f9f9f9"},{default:t(()=>[s(a(h),null,{default:t(()=>[s(a(y),{side:a(d)},null,8,["side"]),s(a(A),{name:"geo",radius:n.radius,segments:n.segments,"theta-start":n.thetaStart,"theta-length":n.thetaLength},null,8,["radius","segments","theta-start","theta-length"])]),_:1}),s(a(u),null,{default:t(()=>[s(a(f),{geometry:"geo"}),s(a(g),{color:"black"})]),_:1}),s(a(_),{size:4})]),_:1})]),_:1},512)]),l("div",P,[s(a(b),{pane:{title:"Properties"},onOnPaneCreated:o})])]))}});const T=c("",5),I=c("",4),H=JSON.parse('{"title":"CircleGeometry","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/Geometries/CircleGeometry.md"}'),G={name:"components/Geometries/CircleGeometry.md"},J=Object.assign(G,{setup(D){return(n,o)=>{const e=q("ClientOnly");return p(),r("div",null,[T,s(e,null,{default:t(()=>[s(k)]),_:1}),I])}}});export{H as __pageData,J as default};
import{b as y,o as i,D as F,_ as d}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.9dbe4f45.js";import{_ as C}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.056ca4bf.js";import{_ as m}from"./chunks/OrbitControls.vue_vue_type_script_setup_true_lang.037923a5.js";import{_ as h}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.51e2f96a.js";import{_ as u}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.f260913a.js";import{_ as A}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.b023c40d.js";import{_}from"./chunks/CircleGeometry.vue_vue_type_script_setup_true_lang.5aee1d6f.js";import{_ as f}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.b696b97d.js";import{_ as g}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.3654d2e2.js";import{V as b}from"./chunks/v-tweakpane.2e9e58e6.js";import{d as E,m as v,o as p,c as r,f as t,e as s,w as o,u as a,b as x,a as c}from"./app.3db908d8.js";const q={class:"example-with-props"},k={class:"example"},S={class:"example-props"},P=E({__name:"CircleGeometry",setup(D){const e=v({radius:3,segments:32,thetaStart:0,thetaLength:2*Math.PI}),l=n=>{n.addInput(e,"radius",{min:1,max:10}),n.addInput(e,"segments",{min:3,max:64,step:1}),n.addInput(e,"thetaStart",{min:0,max:2*Math.PI}),n.addInput(e,"thetaLength",{min:0,max:2*Math.PI})};return(n,M)=>(p(),r("div",q,[t("div",k,[s(a(d),{ref:"renderer",antialias:!0},{default:o(()=>[s(a(C),{position:[5,5,5],up:[0,0,1]},{default:o(()=>[s(a(m))]),_:1}),s(a(y),{background:"#f9f9f9"},{default:o(()=>[s(a(u),null,{default:o(()=>[s(a(i),{side:a(F)},null,8,["side"]),s(a(_),{name:"geo",radius:e.radius,segments:e.segments,"theta-start":e.thetaStart,"theta-length":e.thetaLength},null,8,["radius","segments","theta-start","theta-length"])]),_:1}),s(a(h),null,{default:o(()=>[s(a(f),{geometry:"geo"}),s(a(g),{color:"black"})]),_:1}),s(a(A),{size:4})]),_:1})]),_:1},512)]),t("div",S,[s(a(b),{pane:{title:"Properties"},onOnPaneCreated:l})])]))}});const T=c("",5),G=c("",10),J=JSON.parse('{"title":"CircleGeometry","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Expose","slug":"expose","link":"#expose","children":[{"level":3,"title":"three","slug":"three","link":"#three","children":[]}]}],"relativePath":"components/Geometries/CircleGeometry.md"}'),I={name:"components/Geometries/CircleGeometry.md"},Y=Object.assign(I,{setup(D){return(e,l)=>{const n=x("ClientOnly");return p(),r("div",null,[T,s(n,null,{default:o(()=>[s(P)]),_:1}),G])}}});export{J as __pageData,Y as default};
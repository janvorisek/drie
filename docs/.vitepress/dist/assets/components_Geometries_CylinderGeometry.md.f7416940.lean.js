import{_ as y,k as d,D as F,a as i}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.6d9097cd.js";import{_ as m}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.fc33458a.js";import{_ as h}from"./chunks/OrbitControls.vue_vue_type_script_setup_true_lang.a7896d86.js";import{_ as u}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.252900bf.js";import{_ as C}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.411c795d.js";import{_}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.9b2db203.js";import{_ as A}from"./chunks/CylinderGeometry.vue_vue_type_script_setup_true_lang.45ac26f5.js";import{_ as f}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.749259c1.js";import{_ as g}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.248291d1.js";import{V as E}from"./chunks/v-tweakpane.de5ac47f.js";import{d as b,k as q,o as p,c as r,l,a,w as o,u as n,e as v,f as c}from"./app.ecc63a90.js";const S={class:"example-with-props"},x={class:"example"},P={class:"example-props"},T=b({__name:"CylinderGeometry",setup(D){const s=q({radiusTop:1,radiusBottom:1,height:4,radialSegments:24,heightSegments:1,openEnded:!1,thetaStart:0,thetaLength:2*Math.PI}),e=t=>{t.addInput(s,"radiusTop",{min:1,max:5}),t.addInput(s,"radiusBottom",{min:1,max:5}),t.addInput(s,"height",{min:1,max:10}),t.addInput(s,"radialSegments",{min:3,max:64,step:1}),t.addInput(s,"heightSegments",{min:1,max:20,step:1}),t.addInput(s,"openEnded",{}),t.addInput(s,"thetaStart",{min:0,max:2*Math.PI}),t.addInput(s,"thetaLength",{min:0,max:2*Math.PI})};return(t,G)=>(p(),r("div",S,[l("div",x,[a(n(i),{ref:"renderer",antialias:!0},{default:o(()=>[a(n(m),{position:[5,5,5],up:[0,0,1]},{default:o(()=>[a(n(h))]),_:1}),a(n(y),{background:"#f9f9f9"},{default:o(()=>[a(n(C),null,{default:o(()=>[a(n(d),{side:n(F)},null,8,["side"]),a(n(A),{name:"geo","radius-top":s.radiusTop,"radius-bottom":s.radiusBottom,height:s.height,"radial-segments":s.radialSegments,"height-segments":s.heightSegments,"open-ended":s.openEnded,"theta-start":s.thetaStart,"theta-length":s.thetaLength},null,8,["radius-top","radius-bottom","height","radial-segments","height-segments","open-ended","theta-start","theta-length"])]),_:1}),a(n(u),null,{default:o(()=>[a(n(f),{geometry:"geo"}),a(n(g),{color:"black"})]),_:1}),a(n(_),{size:4})]),_:1})]),_:1},512)]),l("div",P,[a(n(E),{pane:{title:"Properties"},onOnPaneCreated:e})])]))}});const k=c("",4),I=c("",4),J=JSON.parse('{"title":"CylinderGeometry","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/Geometries/CylinderGeometry.md"}'),M={name:"components/Geometries/CylinderGeometry.md"},K=Object.assign(M,{setup(D){return(s,e)=>{const t=v("ClientOnly");return p(),r("div",null,[k,a(t,null,{default:o(()=>[a(T)]),_:1}),I])}}});export{J as __pageData,K as default};

import{_ as d,a as F,k as i,b as y}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.db6547a3.js";import{_ as h}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.6f31866b.js";import{_ as m}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.ca0b0615.js";import{_ as C}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.30bca2e2.js";import{_}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.841b004e.js";import{_ as g}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.08f0ccc4.js";import{_ as u}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.e3c6a777.js";import{_ as A}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.1c741468.js";import{V as f}from"./chunks/v-tweakpane.86944bd1.js";import{d as x,k as b,o as p,c as r,m as l,a as s,w as t,u as n,e as E,f as c}from"./app.aca0c04b.js";const v={class:"example-with-props"},S={class:"example"},q={class:"example-props"},w=x({__name:"BoxGeometry",setup(D){const a=b({width:5,height:3,depth:2,widthSegments:1,heightSegments:1,depthSegments:1}),o=e=>{e.addInput(a,"width",{min:1,max:10}),e.addInput(a,"height",{min:1,max:10}),e.addInput(a,"depth",{min:1,max:10}),e.addInput(a,"widthSegments",{min:1,max:10,step:1}),e.addInput(a,"heightSegments",{min:1,max:10,step:1}),e.addInput(a,"depthSegments",{min:1,max:10,step:1})};return(e,B)=>(p(),r("div",v,[l("div",S,[s(n(y),{antialias:!0},{default:t(()=>[s(n(h),{position:[5,5,5],up:[0,0,1]},{default:t(()=>[s(n(d))]),_:1}),s(n(F),{background:"#f9f9f9"},{default:t(()=>[s(n(C),null,{default:t(()=>[s(n(i)),s(n(g),{name:"geo",width:a.width,height:a.height,depth:a.depth,"width-segments":a.widthSegments,"height-segments":a.heightSegments,"depth-segments":a.depthSegments},null,8,["width","height","depth","width-segments","height-segments","depth-segments"])]),_:1}),s(n(m),null,{default:t(()=>[s(n(u),{geometry:"geo"}),s(n(A),{color:"black"})]),_:1}),s(n(_),{size:3})]),_:1})]),_:1})]),l("div",q,[s(n(f),{pane:{title:"Properties"},onOnPaneCreated:o})])]))}});const k=c("",4),P=c("",4),X=JSON.parse('{"title":"BoxGeometry","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/Geometries/BoxGeometry.md"}'),T={name:"components/Geometries/BoxGeometry.md"},Y=Object.assign(T,{setup(D){return(a,o)=>{const e=E("ClientOnly");return p(),r("div",null,[k,s(e,null,{default:t(()=>[s(w)]),_:1}),P])}}});export{X as __pageData,Y as default};
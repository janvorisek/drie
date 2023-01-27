import{y,c as l,C as D,_ as C,b as F,a as g}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.25647115.js";import{_ as A}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.41177333.js";import{_ as x}from"./chunks/OrbitControls.vue_vue_type_script_setup_true_lang.af8d0c48.js";import{_ as b}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.6923d9b0.js";import{_ as S}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.0ef126c2.js";import{_ as z}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.fe0f63a1.js";import{_ as v}from"./chunks/CircleGeometry.vue_vue_type_script_setup_true_lang.8a396ffa.js";import{_ as L}from"./chunks/EdgesGeometry.vue_vue_type_script_setup_true_lang.c7ffaaed.js";import{d as m,i as c,p as T,k as E,o as _,c as u,l as h,a as s,w as r,u as n,e as M,f}from"./app.62c82040.js";import{V as k}from"./chunks/v-tweakpane.ad34b253.js";const P={name:"LineDashedMaterial",render:()=>null},$=m({...P,props:{color:{default:16777215},scale:{default:1},dashSize:{default:3},gapSize:{default:1},name:{default:""},opacity:{default:1},transparent:{type:Boolean,default:!1}},setup(p,{expose:t}){const a=p,e=new y({color:a.color});e.name=a.name;const i=c("addMaterial");i(e);const d=c("mesh",null);d&&(d.material=e);function o(){e.color=new D(a.color),e.scale=a.scale,e.dashSize=a.dashSize,e.gapSize=a.gapSize,e.opacity=a.opacity,e.transparent=a.transparent,e.needsUpdate=!0}return o(),l(a,"color",o),l(a,"scale",o),l(a,"dashSize",o),l(a,"gapSize",o),l(a,"opacity",o),l(a,"transparent",o),T("material",e),t({three:e}),{props:a,three:e,addMaterial:i,mesh:d,applyProps:o}}}),w={class:"example-with-props"},I={class:"example"},O={class:"example-props"},V=m({__name:"LineDashedMaterial",setup(p){const t=E({color:"#000000",scale:1,dashSize:.25,gapSize:.1,transparent:!1,opacity:1}),a=e=>{e.addInput(t,"color"),e.addInput(t,"scale",{min:.1,max:2}),e.addInput(t,"dashSize",{min:.01,max:1}),e.addInput(t,"gapSize",{min:.01,max:1}),e.addInput(t,"transparent"),e.addInput(t,"opacity",{min:0,max:1})};return(e,i)=>(_(),u("div",w,[h("div",I,[s(n(g),{antialias:!0},{default:r(()=>[s(n(A),{position:[.1,0,2],up:[0,0,1]},{default:r(()=>[s(n(x))]),_:1},8,["position"]),s(n(C),{background:"#f9f9f9"},{default:r(()=>[s(n(S),null,{default:r(()=>[s(n(F),{transparent:!0,opacity:0}),s(n(v),{name:"geo",radius:1})]),_:1}),s(n(b),null,{default:r(()=>[s(n(L),{geometry:"geo"}),s(n($),{color:t.color,scale:t.scale,"dash-size":t.dashSize,"gap-size":t.gapSize,transparent:t.transparent,opacity:t.opacity},null,8,["color","scale","dash-size","gap-size","transparent","opacity"])]),_:1}),s(n(z),{size:1})]),_:1})]),_:1})]),h("div",O,[s(n(k),{pane:{title:"Properties"},onOnPaneCreated:a})])]))}});const N=f("",4),q=f("",9),X=JSON.parse('{"title":"LineDashedMaterial","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Expose","slug":"expose","link":"#expose","children":[{"level":3,"title":"three","slug":"three","link":"#three","children":[]}]}],"relativePath":"components/Materials/LineDashedMaterial.md"}'),B={name:"components/Materials/LineDashedMaterial.md"},Z=Object.assign(B,{setup(p){return(t,a)=>{const e=M("ClientOnly");return _(),u("div",null,[N,s(e,null,{default:r(()=>[s(V)]),_:1}),q])}}});export{X as __pageData,Z as default};

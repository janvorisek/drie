import{_ as u,b as f,a as y}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.25647115.js";import{_ as D}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.41177333.js";import{_ as C}from"./chunks/OrbitControls.vue_vue_type_script_setup_true_lang.af8d0c48.js";import{_ as F}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.6923d9b0.js";import{_ as b}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.0ef126c2.js";import{_ as A}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.fe0f63a1.js";import{_ as g}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.c1749804.js";import{_ as x}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.bd5d8c04.js";import{_ as v}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.cecb3bea.js";import{V as M}from"./chunks/v-tweakpane.ad34b253.js";import{d as k,k as E,o as p,c as h,l as t,a as e,w as o,u as a,r as B,v as $,e as d,x as r,f as w}from"./app.62c82040.js";const T={class:"example-with-props"},S={class:"example"},P={class:"example-props"},N=k({__name:"MeshBasicMaterial",setup(_,{expose:n}){const s=E({color:"#666666",transparent:!1,opacity:1}),i=l=>{l.addInput(s,"color"),l.addInput(s,"transparent"),l.addInput(s,"opacity",{min:0,max:1})};return n(s),(l,c)=>(p(),h("div",T,[t("div",S,[e(a(y),{antialias:!0},{default:o(()=>[e(a(D),{position:[2,2,3],up:[0,0,1]},{default:o(()=>[e(a(C))]),_:1}),e(a(u),{background:"#f9f9f9"},{default:o(()=>[e(a(b),null,{default:o(()=>[e(a(f),{color:s.color,transparent:s.transparent,opacity:s.opacity},null,8,["color","transparent","opacity"]),e(a(g),{name:"geo"})]),_:1}),e(a(F),null,{default:o(()=>[e(a(x),{geometry:"geo"}),e(a(v),{color:"black"})]),_:1}),e(a(A),{size:2})]),_:1})]),_:1})]),t("div",P,[e(a(M),{pane:{title:"Properties"},onOnPaneCreated:i})])]))}});const V=t("h1",{id:"meshbasicmaterial",tabindex:"-1"},[r("MeshBasicMaterial "),t("a",{class:"header-anchor",href:"#meshbasicmaterial","aria-hidden":"true"},"#")],-1),q=t("p",null,"A material for drawing geometries in a simple shaded (flat or wireframe) way.",-1),R=t("p",null,"This material is not affected by lights.",-1),I=t("h2",{id:"example",tabindex:"-1"},[r("Example "),t("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#")],-1),O=t("h3",{id:"code",tabindex:"-1"},[r("Code "),t("a",{class:"header-anchor",href:"#code","aria-hidden":"true"},"#")],-1),H=t("p",null,[r("Note: "),t("em",null,"The following code is updated according to the properties set above.")],-1),L=w("",11),ae=JSON.parse('{"title":"MeshBasicMaterial","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[{"level":3,"title":"Code","slug":"code","link":"#code","children":[]}]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Expose","slug":"expose","link":"#expose","children":[{"level":3,"title":"three","slug":"three","link":"#three","children":[]}]}],"relativePath":"components/Materials/MeshBasicMaterial.md"}'),j={name:"components/Materials/MeshBasicMaterial.md"},te=Object.assign(j,{setup(_){const n=B(""),s=$(()=>`<MeshBasicMaterial
  color="${n.value.color}"
  :transparent="${n.value.transparent}"
  :opacity="${Math.round(n.value.opacity*100)/100}"
/>`);return(i,l)=>{const c=d("ClientOnly"),m=d("LiveCodeBlock");return p(),h("div",null,[V,q,R,I,e(c,null,{default:o(()=>[e(N,{ref_key:"demo",ref:n},null,512)]),_:1}),O,H,e(c,null,{default:o(()=>[e(m,{lang:"vue-html",code:a(s)},null,8,["code"])]),_:1}),L])}}});export{ae as __pageData,te as default};

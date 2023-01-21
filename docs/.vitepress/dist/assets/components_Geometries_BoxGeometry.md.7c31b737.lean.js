import{_ as u,a as f,k as x,b as S}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.722b57a5.js";import{_ as b}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.2c3aa58e.js";import{_ as w}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.77f65d43.js";import{_ as v}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.d49c149e.js";import{_ as y}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.cced652d.js";import{_ as $}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.90f10629.js";import{_ as T}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.06119b93.js";import{_ as C}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.9a8ae0bc.js";import{V as B}from"./chunks/v-tweakpane.edcc5aaf.js";import{d as k,k as G,o as m,c,m as s,a as e,w as n,u as d,r as N,q as P,e as h,f as l,s as _}from"./app.774a1709.js";const I={class:"example-with-props"},A={class:"example"},V={class:"example-props"},E=k({__name:"BoxGeometry",setup(p,{expose:o}){const t=G({width:5,height:3,depth:2,widthSegments:1,heightSegments:1,depthSegments:1}),i=a=>{a.addInput(t,"width",{min:1,max:10}),a.addInput(t,"height",{min:1,max:10}),a.addInput(t,"depth",{min:1,max:10}),a.addInput(t,"widthSegments",{min:1,max:10,step:1}),a.addInput(t,"heightSegments",{min:1,max:10,step:1}),a.addInput(t,"depthSegments",{min:1,max:10,step:1})};return o(t),(a,r)=>(m(),c("div",I,[s("div",A,[e(d(S),{antialias:!0},{default:n(()=>[e(d(b),{position:[5,5,5],up:[0,0,1]},{default:n(()=>[e(d(u))]),_:1}),e(d(f),{background:"#f9f9f9"},{default:n(()=>[e(d(v),null,{default:n(()=>[e(d(x)),e(d($),{name:"geo",width:t.width,height:t.height,depth:t.depth,"width-segments":t.widthSegments,"height-segments":t.heightSegments,"depth-segments":t.depthSegments},null,8,["width","height","depth","width-segments","height-segments","depth-segments"])]),_:1}),e(d(w),null,{default:n(()=>[e(d(T),{geometry:"geo"}),e(d(C),{color:"black"})]),_:1}),e(d(y),{size:3})]),_:1})]),_:1})]),s("div",V,[e(d(B),{pane:{title:"Properties"},onOnPaneCreated:i})])]))}});const D=l("",4),O=s("h3",{id:"code",tabindex:"-1"},[_("Code "),s("a",{class:"header-anchor",href:"#code","aria-hidden":"true"},"#")],-1),M=s("p",null,[_("Note: "),s("em",null,"The following code is updated according to the properties set above.")],-1),R=l("",3),K=JSON.parse('{"title":"BoxGeometry","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[{"level":3,"title":"Code","slug":"code","link":"#code","children":[]}]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/Geometries/BoxGeometry.md"}'),q={name:"components/Geometries/BoxGeometry.md"},Q=Object.assign(q,{setup(p){const o=N(""),t=P(()=>`<BoxGeometry
  :width="${Math.round(o.value.width*100)/100}"
  :height="${Math.round(o.value.height*100)/100}"
  :depth="${Math.round(o.value.depth*100)/100}"
  :widthSegments="${o.value.widthSegments}"
  :heightSegments="${o.value.heightSegments}"
  :depthSegments="${o.value.depthSegments}"
/>`);return(i,a)=>{const r=h("ClientOnly"),g=h("LiveCodeBlock");return m(),c("div",null,[D,e(r,null,{default:n(()=>[e(E,{ref_key:"demo",ref:o},null,512)]),_:1}),O,M,e(r,null,{default:n(()=>[e(g,{lang:"vue-html",code:d(t)},null,8,["code"])]),_:1}),R])}}});export{K as __pageData,Q as default};

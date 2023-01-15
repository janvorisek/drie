import{B as b,d as o,R,j as S,_ as E,a as q,k as v,D as k,b as G}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.2f35c12c.js";import{_ as T}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.8b818305.js";import{_ as x,a as P}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.062cd60c.js";import{_ as $}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.fb28ceaa.js";import{_ as M}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.1b3a917a.js";import{d,i as F,k as w,o as m,c as u,a,w as l,u as n,e as N,f as h}from"./app.9ea36c0b.js";import{_ as j}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.08d727de.js";const I={name:"RingGeometry",render:()=>null},O=d({...I,props:{name:{default:""},innerRadius:{default:.5},outerRadius:{default:1},thetaSegments:{default:32},phiSegments:{default:1},thetaStart:{default:0},thetaLength:{default:2*Math.PI}},setup(r,{expose:c}){const s=r,p=F("mesh");function i(D,C,_,f,A,g){return new R(D,C,_,f,A,g)}const t=w(new b);t.name=s.name,p.geometry=t;const y=F("addGeometry");y(t);function e(){const D=i(s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);S(t,D)}return e(),o(s,"innerRadius",e),o(s,"outerRadius",e),o(s,"thetaSegments",e),o(s,"phiSegments",e),o(s,"thetaStart",e),o(s,"thetaLength",e),c({three:t}),{props:s,mesh:p,makeRing:i,three:t,addGeometry:y,redoGeometry:e}}}),B={class:"example"},V=d({__name:"RingGeometry",setup(r){return(c,s)=>(m(),u("div",B,[a(n(G),{ref:"renderer",antialias:!0},{default:l(()=>[a(n(T),{position:[3,3,4],up:[0,0,1]},{default:l(()=>[a(n(E))]),_:1}),a(n(q),{background:"#f9f9f9"},{default:l(()=>[a(n($),null,{default:l(()=>[a(n(v),{side:n(k)},null,8,["side"]),a(n(O),{name:"geo","inner-radius":1.5,"outer-radius":3},null,8,["inner-radius"])]),_:1}),a(n(x),null,{default:l(()=>[a(n(j),{geometry:"geo"}),a(n(P),{color:"black"})]),_:1}),a(n(M),{size:3})]),_:1})]),_:1},512)]))}}),L=h("",4),z=h("",4),Z=JSON.parse('{"title":"RingGeometry","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/Geometries/RingGeometry.md"}'),H={name:"components/Geometries/RingGeometry.md"},ss=Object.assign(H,{setup(r){return(c,s)=>{const p=N("ClientOnly");return m(),u("div",null,[L,a(p,null,{default:l(()=>[a(V)]),_:1}),z])}}});export{Z as __pageData,ss as default};

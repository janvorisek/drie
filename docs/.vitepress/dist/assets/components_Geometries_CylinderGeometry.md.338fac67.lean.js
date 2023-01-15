import{B as q,d as e,q as S,j as v,_ as T,a as k,k as G,D as P,b as x}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.e80ec362.js";import{_ as M}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.a2c8e4b6.js";import{_ as $,a as B,b as w}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.f718c98b.js";import{_ as N}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.4be33d3d.js";import{d as i,i as d,k as R,o as m,c as u,a,w as l,u as n,e as I,f as h}from"./app.532ca5b6.js";import{_ as j}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.6bc8460b.js";const O={name:"CylinderGeometry",render:()=>null},V=i({...O,props:{name:{default:""},radiusTop:{default:1},radiusBottom:{default:1},height:{default:1},radialSegments:{default:32},heightSegments:{default:1},openEnded:{type:Boolean,default:!1},thetaStart:{default:0},thetaLength:{default:2*Math.PI}},setup(r,{expose:c}){const s=r,p=d("mesh");function y(D,C,f,A,_,g,E,b){return new S(D,C,f,A,_,g,E,b)}const t=R(new q);t.name=s.name,p.geometry=t;const F=d("addGeometry");F(t);function o(){const D=y(s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);v(t,D)}return o(),e(s,"radiusTop",o),e(s,"radiusBottom",o),e(s,"height",o),e(s,"radialSegments",o),e(s,"heightSegments",o),e(s,"openEnded",o),e(s,"thetaStart",o),e(s,"thetaLength",o),c({three:t}),{props:s,mesh:p,makeCylinder:y,three:t,addGeometry:F,redoGeometry:o}}}),L={class:"example"},H=i({__name:"CylinderGeometry",setup(r){return(c,s)=>(m(),u("div",L,[a(n(x),{ref:"renderer",antialias:!0},{default:l(()=>[a(n(M),{position:[4,4,7],up:[0,0,1]},{default:l(()=>[a(n(T))]),_:1}),a(n(k),{background:"#f9f9f9"},{default:l(()=>[a(n($),{rotation:[Math.PI/2,0,0]},{default:l(()=>[a(n(G),{side:n(P)},null,8,["side"]),a(n(V),{name:"geo","radius-top":2,"radius-bottom":2,height:5,"radial-segments":12})]),_:1},8,["rotation"]),a(n(B),{rotation:[Math.PI/2,0,0]},{default:l(()=>[a(n(j),{geometry:"geo"}),a(n(w),{color:"black"})]),_:1},8,["rotation"]),a(n(N),{size:5})]),_:1})]),_:1},512)]))}}),z=h("",4),J=h("",4),ss=JSON.parse('{"title":"CylinderGeometry","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/Geometries/CylinderGeometry.md"}'),K={name:"components/Geometries/CylinderGeometry.md"},as=Object.assign(K,{setup(r){return(c,s)=>{const p=I("ClientOnly");return m(),u("div",null,[z,a(p,null,{default:l(()=>[a(H)]),_:1}),J])}}});export{ss as __pageData,as as default};

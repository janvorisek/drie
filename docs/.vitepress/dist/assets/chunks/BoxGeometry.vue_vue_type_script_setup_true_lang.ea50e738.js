import{B as l,c as m,i as S,j as w}from"./TextureLoader.vue_vue_type_script_setup_true_lang.e293ee15.js";import{d as y,k as G,i as h}from"../app.aa0e4490.js";const _={name:"BoxGeometry",render:()=>null},k=y({..._,props:{name:{default:""},width:{default:1},height:{default:1},depth:{default:1},widthSegments:{default:1},heightSegments:{default:1},depthSegments:{default:1}},setup(r,{expose:i}){const e=r;function s(a,p,f,g,u,c){return new S(a,p,f,g,u,c)}const n=G(new l);n.name=e.name;const o=h("mesh",null);o&&(o.geometry=n);const d=h("addGeometry");d(n);function t(){const a=s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments);w(n,a)}return t(),m(e,"name",()=>{n.name=e.name}),m(e,"width",t),m(e,"height",t),m(e,"depth",t),m(e,"widthSegments",t),m(e,"heightSegments",t),m(e,"depthSegments",t),i({three:n}),{props:e,makeBox:s,three:n,mesh:o,addGeometry:d,redoGeometry:t}}});export{k as _};
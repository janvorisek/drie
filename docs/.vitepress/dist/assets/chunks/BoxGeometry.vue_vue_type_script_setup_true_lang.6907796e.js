import{B as c,d as m,i as S,j as w}from"./TextureLoader.vue_vue_type_script_setup_true_lang.727239dc.js";import{d as y,k as G,i as h}from"../app.46be9210.js";const _={name:"BoxGeometry",render:()=>null},k=y({..._,props:{name:{default:""},width:{default:1},height:{default:1},depth:{default:1},widthSegments:{default:1},heightSegments:{default:1},depthSegments:{default:1}},setup(r,{expose:i}){const e=r;function d(a,p,f,g,u,l){return new S(a,p,f,g,u,l)}const n=G(new c);n.name=e.name;const o=h("mesh",null);o&&(o.geometry=n);const s=h("addGeometry");s(n);function t(){const a=d(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments);w(n,a)}return t(),m(e,"name",()=>{n.name=e.name}),m(e,"width",t),m(e,"height",t),m(e,"depth",t),m(e,"widthSegments",t),m(e,"heightSegments",t),m(e,"depthSegments",t),i({three:n}),{props:e,makeBox:d,three:n,mesh:o,addGeometry:s,redoGeometry:t}}});export{k as _};
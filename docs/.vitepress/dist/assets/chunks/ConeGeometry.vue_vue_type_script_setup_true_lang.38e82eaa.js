import{B as y,d as a,p as S,j as G}from"./TextureLoader.vue_vue_type_script_setup_true_lang.727239dc.js";import{d as _,k as C,i as m}from"../app.46be9210.js";const k={name:"ConeGeometry",render:()=>null},L=_({...k,props:{name:{default:""},radius:{default:1},height:{default:1},radialSegments:{default:32},heightSegments:{default:1},openEnded:{type:Boolean,default:!1},thetaStart:{default:0},thetaLength:{default:2*Math.PI}},setup(h,{expose:i}){const e=h;function d(r,l,u,f,p,g,c){return new S(r,l,u,f,p,g,c)}const n=C(new y);n.name=e.name;const o=m("mesh",null);o&&(o.geometry=n);const s=m("addGeometry");s(n);function t(){const r=d(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength);G(n,r)}return t(),a(e,"radius",t),a(e,"height",t),a(e,"radialSegments",t),a(e,"heightSegments",t),a(e,"openEnded",t),a(e,"thetaStart",t),a(e,"thetaLength",t),i({three:n}),{props:e,makeCone:d,three:n,mesh:o,addGeometry:s,redoGeometry:t}}});export{L as _};
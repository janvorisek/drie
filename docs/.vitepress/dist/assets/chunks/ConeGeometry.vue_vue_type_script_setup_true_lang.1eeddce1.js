import{B as y,d as a,p as S,j as G}from"./TextureLoader.vue_vue_type_script_setup_true_lang.fa9f1c1e.js";import{d as _,i as m,k as C}from"../app.bb6a552b.js";const k={name:"ConeGeometry",render:()=>null},L=_({...k,props:{name:{default:""},radius:{default:1},height:{default:1},radialSegments:{default:32},heightSegments:{default:1},openEnded:{type:Boolean,default:!1},thetaStart:{default:0},thetaLength:{default:2*Math.PI}},setup(h,{expose:i}){const e=h,r=m("mesh");function d(o,l,u,f,p,g,c){return new S(o,l,u,f,p,g,c)}const n=C(new y);n.name=e.name,r.geometry=n;const s=m("addGeometry");s(n);function t(){const o=d(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength);G(n,o)}return t(),a(e,"radius",t),a(e,"height",t),a(e,"radialSegments",t),a(e,"heightSegments",t),a(e,"openEnded",t),a(e,"thetaStart",t),a(e,"thetaLength",t),i({three:n}),{props:e,mesh:r,makeCone:d,three:n,addGeometry:s,redoGeometry:t}}});export{L as _};
import{B as S,d as n,u as C,i as G,E as m}from"./TextureLoader.vue_vue_type_script_setup_true_lang.9dbe4f45.js";import{d as _,m as E,i as h,j as B}from"../app.3db908d8.js";const j={name:"ConeGeometry",render:()=>null},k=_({...j,props:{name:{default:""},radius:{default:1},height:{default:1},radialSegments:{default:32},heightSegments:{default:1},openEnded:{type:Boolean,default:!1},thetaStart:{default:0},thetaLength:{default:2*Math.PI}},setup(i,{expose:u}){const e=i;function d(r,l,f,g,p,c,y){return new C(r,l,f,g,p,c,y)}const a=E(new S);a.name=e.name;const o=h("mesh",null);o&&(o.geometry=a);const s=h("addGeometry");s(a);function t(){const r=d(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength);G(a,r),m.geometryChanged(e.name,a),o&&m.object3DChanged(o.name,o)}return B(t),n(e,"radius",t),n(e,"height",t),n(e,"radialSegments",t),n(e,"heightSegments",t),n(e,"openEnded",t),n(e,"thetaStart",t),n(e,"thetaLength",t),u({three:a}),{props:e,makeCone:d,three:a,mesh:o,addGeometry:s,redoGeometry:t}}});export{k as _};
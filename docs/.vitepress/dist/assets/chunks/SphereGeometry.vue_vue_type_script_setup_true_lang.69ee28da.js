import{B as l,d as a,S as y,j as G}from"./TextureLoader.vue_vue_type_script_setup_true_lang.2f35c12c.js";import{d as _,i as m,k as L}from"../app.9ea36c0b.js";const w={name:"SphereGeometry",render:()=>null},j=_({...w,props:{name:{default:""},radius:{default:1},widthSegments:{default:32},heightSegments:{default:16},phiStart:{default:0},phiLength:{default:2*Math.PI},thetaStart:{default:0},thetaLength:{default:Math.PI}},setup(d,{expose:i}){const e=d,h=m("mesh");function s(r,p,u,f,g,S,c){return new y(r,p,u,f,g,S,c)}const n=L(new l);n.name=e.name,h.geometry=n;const o=m("addGeometry");o(n);function t(){const r=s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength);G(n,r)}return t(),a(e,"radius",t),a(e,"widthSegments",t),a(e,"heightSegments",t),a(e,"phiStart",t),a(e,"phiLength",t),a(e,"thetaStart",t),a(e,"thetaLength",t),i({three:n}),{props:e,mesh:h,makeSphere:s,three:n,addGeometry:o,redoGeometry:t}}});export{j as _};
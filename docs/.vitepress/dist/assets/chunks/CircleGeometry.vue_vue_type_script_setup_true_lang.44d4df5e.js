import{B as h,d as n,o as p,j as y}from"./TextureLoader.vue_vue_type_script_setup_true_lang.db6547a3.js";import{d as g,k as G,i as d}from"../app.aca0c04b.js";const _={name:"CircleGeometry",render:()=>null},L=g({..._,props:{name:{default:""},radius:{default:1},segments:{default:32},thetaStart:{default:0},thetaLength:{default:2*Math.PI}},setup(c,{expose:u}){const e=c;function s(o,i,l,f){return new p(o,i,l,f)}const t=G(new h);t.name=e.name;const r=d("mesh",null);r&&(r.geometry=t);const m=d("addGeometry");m(t);function a(){const o=s(e.radius,e.segments,e.thetaStart,e.thetaLength);y(t,o)}return a(),n(e,"radius",a),n(e,"segments",a),n(e,"thetaStart",a),n(e,"thetaLength",a),u({three:t}),{props:e,makeCircle:s,three:t,mesh:r,addGeometry:m,redoGeometry:a}}});export{L as _};
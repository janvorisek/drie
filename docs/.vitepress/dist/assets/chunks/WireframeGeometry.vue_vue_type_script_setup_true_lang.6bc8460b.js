import{B as g,d as f,W as l,j as G}from"./TextureLoader.vue_vue_type_script_setup_true_lang.e80ec362.js";import{d as h,i as s,k as w,g as d,n as y}from"../app.532ca5b6.js";const _={name:"WireframeGeometry",render:()=>null},W=h({..._,props:{geometry:null},setup(u,{expose:p}){const e=u,c=s("mesh"),t=w(new g);c.geometry=t;const r=s("getGeometry"),i=s("addGeometry");i(t);function o(){const a=new l(r(e.geometry));G(t,a)}let m=d(r(e.geometry),()=>{o()},{deep:!0,immediate:!0});f(e,"geometry",()=>{m(),m=d(r(e.geometry),()=>{o()},{immediate:!0,deep:!0})});const n=()=>{r(e.geometry)===void 0?y(()=>n):o()};return y(()=>n),p({three:t}),{props:e,mesh:c,three:t,getGeometry:r,addGeometry:i,redoGeometry:o,get unwatch(){return m},set unwatch(a){m=a},waitUntilGeometryChanged:n}}});export{W as _};
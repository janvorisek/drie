import{B as l,d as f,E as G,j as h}from"./TextureLoader.vue_vue_type_script_setup_true_lang.db6547a3.js";import{d as w,k as _,i,g as u,n as y}from"../app.aca0c04b.js";const k={name:"EdgesGeometry",render:()=>null},j=w({...k,props:{geometry:null},setup(p,{expose:g}){const e=p,t=_(new l),n=i("mesh",null);n&&(n.geometry=t);const o=i("getGeometry"),c=i("addGeometry");c(t);function r(){const a=new G(o(e.geometry));h(t,a);const d=n;"isLine"in d&&d.computeLineDistances()}let s=u(o(e.geometry),()=>{r()},{deep:!0,immediate:!0});f(e,"geometry",()=>{s(),s=u(o(e.geometry),()=>{r()},{immediate:!0,deep:!0})});const m=()=>{o(e.geometry)===void 0?y(()=>m):r()};return y(()=>m),g({three:t}),{props:e,three:t,mesh:n,getGeometry:o,addGeometry:c,redoGeometry:r,get unwatch(){return s},set unwatch(a){s=a},waitUntilGeometryChanged:m}}});export{j as _};

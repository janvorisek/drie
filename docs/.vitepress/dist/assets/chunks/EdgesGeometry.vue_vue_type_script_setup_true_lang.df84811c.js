import{B as p,E as y,n as f,i as u}from"./TextureLoader.vue_vue_type_script_setup_true_lang.748abb6c.js";import{d as l,m as g,i}from"../app.b0bbb7e4.js";const G={name:"EdgesGeometry",render:()=>null},E=l({...G,props:{geometry:null},setup(a,{expose:c}){const n=a,e=g(new p),o=i("mesh",null);o&&(o.geometry=e);const s=i("addGeometry");s(e);function r(t){const d=new f(t);u(e,d);const m=o;"isLine"in m&&m.computeLineDistances()}return y.geometryChanged.on(n.geometry,t=>{r(t)}),c({three:e}),{props:n,three:e,mesh:o,addGeometry:s,redoGeometry:r}}});export{E as _};

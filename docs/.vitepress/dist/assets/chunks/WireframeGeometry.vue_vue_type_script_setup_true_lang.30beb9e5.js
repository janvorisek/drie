import{B as p,E as y,W as d,i as u}from"./TextureLoader.vue_vue_type_script_setup_true_lang.748abb6c.js";import{d as l,m as G,i}from"../app.b0bbb7e4.js";const _={name:"WireframeGeometry",render:()=>null},B=l({..._,props:{geometry:null},setup(a,{expose:c}){const n=a,e=G(new p),o=i("mesh",null);o&&(o.geometry=e);const r=i("addGeometry");r(e);function s(t){const f=new d(t);u(e,f);const m=o;"isLine"in m&&m.computeLineDistances()}return y.geometryChanged.on(n.geometry,t=>{s(t)}),c({three:e}),{props:n,three:e,mesh:o,addGeometry:r,redoGeometry:s}}});export{B as _};

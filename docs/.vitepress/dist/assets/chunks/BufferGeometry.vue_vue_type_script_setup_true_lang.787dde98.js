import{B as y,n as h,j as G}from"./MeshNormalMaterial.vue_vue_type_script_setup_true_lang.241415a8.js";import{d as _,i as u,k as g,g as d}from"../app.d5209427.js";const v={name:"BufferGeometry",render:()=>null},B=_({...v,props:{name:{default:""},vertices:{default:()=>[]},faces:{default:()=>[]}},setup(p,{expose:l}){const e=p,c=u("mesh");function s(t,m){const o=new y,i=new Float32Array(t.length);for(let n=0;n<t.length;n++)i[n]=t[n];return o.setAttribute("position",new h(i,3)),e.faces.length>0&&o.setIndex(m),o.computeVertexNormals(),o}const r=g(s(e.vertices,e.faces));r.name=e.name,c.geometry=r;const f=u("addGeometry");f(r);function a(t,m){const o=s(t,m);G(r,o)}return d(()=>e.vertices,t=>{a(t,e.faces)},{deep:!0,immediate:!0}),d(()=>e.faces,t=>{a(e.vertices,t)},{deep:!0,immediate:!0}),l({three:r}),{props:e,mesh:c,makeGeometry:s,three:r,addGeometry:f,redoGeometry:a}}});export{B as _};

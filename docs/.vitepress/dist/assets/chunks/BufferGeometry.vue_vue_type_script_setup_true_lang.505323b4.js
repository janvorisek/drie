import{B as f,r as o,j as p}from"./TextureLoader.vue_vue_type_script_setup_true_lang.be3ddad7.js";import{d as A,k as v,i as c,g as i}from"../app.57cb307c.js";const w={name:"BufferGeometry",render:()=>null},h=A({...w,props:{name:{default:""},vertices:{default:()=>[]},faces:{default:()=>[]},uvs:{default:()=>[]},normals:{type:[Array,Boolean],default:!1}},setup(l,{expose:d}){const e=l;function u(){const t=new f,y=new Float32Array(e.vertices);if(t.setAttribute("position",new o(y,3)),e.uvs.length>0){const n=new Float32Array(e.uvs);t.setAttribute("uv",new o(n,2))}if(e.normals===!0&&(t.computeVertexNormals(),t.attributes.normal.needsUpdate=!0),Array.isArray(e.normals)){const n=new Float32Array(e.normals);t.setAttribute("normal",new o(n,3))}return e.faces.length>0&&t.setIndex(e.faces),t}const r=v(new f);r.name=e.name;const s=c("mesh",null);s&&(s.geometry=r);const m=c("addGeometry");m(r);function a(){const t=u();p(r,t)}return a(),i(()=>e.vertices,t=>{a()},{deep:!0}),i(()=>e.faces,t=>{a()},{deep:!0}),d({three:r}),{props:e,makeGeometry:u,three:r,mesh:s,addGeometry:m,redoGeometry:a}}});export{h as _};
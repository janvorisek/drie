import{B as f,s as o,j as A,E as c}from"./TextureLoader.vue_vue_type_script_setup_true_lang.98bdc661.js";import{d as v,k as h,i,h as w,g as l}from"../app.97bf5fb5.js";const g={name:"BufferGeometry",render:()=>null},b=v({...g,props:{name:{default:""},vertices:{default:()=>[]},faces:{default:()=>[]},uvs:{default:()=>[]},normals:{type:[Array,Boolean],default:!1}},setup(d,{expose:y}){const e=d;function m(){const t=new f,p=new Float32Array(e.vertices);if(t.setAttribute("position",new o(p,3)),e.uvs.length>0){const s=new Float32Array(e.uvs);t.setAttribute("uv",new o(s,2))}if(e.normals===!0&&(t.computeVertexNormals(),t.attributes.normal.needsUpdate=!0),Array.isArray(e.normals)){const s=new Float32Array(e.normals);t.setAttribute("normal",new o(s,3))}return e.faces.length>0&&t.setIndex(e.faces),t}const r=h(new f);r.name=e.name;const a=i("mesh",null);a&&(a.geometry=r);const u=i("addGeometry");u(r);function n(){const t=m();A(r,t),c.geometryChanged(e.name,r),a&&c.object3DChanged(a.name,a)}return w(n),l(()=>e.vertices,t=>{n()},{deep:!0}),l(()=>e.faces,t=>{n()},{deep:!0}),y({three:r}),{props:e,makeGeometry:m,three:r,mesh:a,addGeometry:u,redoGeometry:n}}});export{b as _};

import{B as c,d as o,y as p,i as y,E as d}from"./TextureLoader.vue_vue_type_script_setup_true_lang.9dbe4f45.js";import{d as w,m as G,i as h,j as _}from"../app.3db908d8.js";const S={name:"PlaneGeometry",render:()=>null},j=w({...S,props:{name:{default:""},width:{default:1},height:{default:1},widthSegments:{default:1},heightSegments:{default:1}},setup(i,{expose:f}){const e=i;function s(m,g,l,u){return new p(m,g,l,u)}const t=G(new c);t.name=e.name;const n=h("mesh",null);n&&(n.geometry=t);const r=h("addGeometry");r(t);function a(){const m=s(e.width,e.height,e.widthSegments,e.heightSegments);y(t,m),d.geometryChanged(e.name,t),n&&d.object3DChanged(n.name,n)}return _(a),o(e,"width",a),o(e,"height",a),o(e,"widthSegments",a),o(e,"heightSegments",a),f({three:t}),{props:e,makePlane:s,three:t,mesh:n,addGeometry:r,redoGeometry:a}}});export{j as _};
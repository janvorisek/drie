import{B as p,d as r,t as g,i as y,E as d}from"./TextureLoader.vue_vue_type_script_setup_true_lang.748abb6c.js";import{d as C,m as G,i as u,j as _}from"../app.b0bbb7e4.js";const j={name:"CircleGeometry",render:()=>null},S=C({...j,props:{name:{default:""},radius:{default:1},segments:{default:32},thetaStart:{default:0},thetaLength:{default:2*Math.PI}},setup(c,{expose:i}){const e=c;function s(o,f,h,l){return new g(o,f,h,l)}const t=G(new p);t.name=e.name;const a=u("mesh",null);a&&(a.geometry=t);const m=u("addGeometry");m(t);function n(){const o=s(e.radius,e.segments,e.thetaStart,e.thetaLength);y(t,o),d.geometryChanged(e.name,t),a&&d.object3DChanged(a.name,a)}return _(n),r(e,"radius",n),r(e,"segments",n),r(e,"thetaStart",n),r(e,"thetaLength",n),i({three:t}),{props:e,makeCircle:s,three:t,mesh:a,addGeometry:m,redoGeometry:n}}});export{S as _};
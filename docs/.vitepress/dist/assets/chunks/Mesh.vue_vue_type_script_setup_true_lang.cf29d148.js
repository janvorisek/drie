import{B as l,M as p,e as f,h as s}from"./MeshNormalMaterial.vue_vue_type_script_setup_true_lang.f90d2e93.js";import{d as w,m as u,g as r,p as m,k as S}from"../app.65f91dbf.js";const B=w({__name:"Mesh",props:{position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]},castShadow:{type:Boolean,default:!1},receiveShadow:{type:Boolean,default:!1}},setup(n,{expose:c}){const a=n,d=u("scene"),i=new l,h=new p,e=new f(i,h);e.castShadow=!0,e.receiveShadow=!0,d.add(e),s(a,"position",e),s(a,"rotation",e),s(a,"scale",e);function t(o){e.castShadow=o.castShadow,e.receiveShadow=o.receiveShadow}return t(a),r(()=>a.castShadow,()=>t(a)),r(()=>a.receiveShadow,()=>t(a)),m("mesh",e),c({three:e}),(o,v)=>S(o.$slots,"default")}});export{B as _};

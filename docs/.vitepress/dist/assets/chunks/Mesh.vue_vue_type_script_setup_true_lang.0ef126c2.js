import{B as f,M as u,g,m as w,h as s,c as n,f as y}from"./TextureLoader.vue_vue_type_script_setup_true_lang.25647115.js";import{d as S,i as r,h as M,j as v,p as _,m as B}from"../app.62c82040.js";const b=S({__name:"Mesh",props:{castShadow:{type:Boolean,default:!1},geometry:{default:null},material:{default:null},position:{default:()=>[0,0,0]},receiveShadow:{type:Boolean,default:!1},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(c,{expose:l}){const a=c,i=r("scene"),d=new f,m=new u,e=new g(d,m);e.castShadow=!0,e.receiveShadow=!0,w(e),s(a,"position",e),s(a,"rotation",e),s(a,"scale",e);function o(){e.castShadow=a.castShadow,e.receiveShadow=a.receiveShadow}o(),n(a,"castShadow",o),n(a,"receiveShadow",o);const p=r("getGeometry"),h=r("getMaterial");return M(()=>{if(a.geometry){const t=p(a.geometry);e.geometry=t}if(a.material){const t=h(a.material);e.material=t}}),v(()=>{i.remove(e),y(e)}),_("mesh",e),l({three:e}),(t,P)=>B(t.$slots,"default")}});export{b as _};
import{l as f,G as p,h as r}from"./TextureLoader.vue_vue_type_script_setup_true_lang.314f0bf0.js";import{d as u,i as h,g as m,p as w,l as _}from"../app.4630d546.js";const g=u({__name:"OBJLoader",props:{castShadow:{type:Boolean,default:!1},position:{default:()=>[0,0,0]},receiveShadow:{type:Boolean,default:!1},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]},url:null},emits:["load","progress","error"],setup(l,{expose:d,emit:t}){const o=l,c=new f,i=h("scene"),e=new p;e.castShadow=!0,e.receiveShadow=!0,i.add(e),r(o,"position",e),r(o,"rotation",e),r(o,"scale",e);function n(){c.load(o.url,function(a){for(const s of a.children)e.add(s),s.material=e.material,r(o,"position",e,!1),r(o,"rotation",e,!1),r(o,"scale",e,!1);t("load",a)},function(a){t("progress",a)},function(a){t("error",a)})}return n(),m(()=>o.url,()=>n()),w("mesh",e),d({three:e}),(a,s)=>_(a.$slots,"default")}});export{g as _};
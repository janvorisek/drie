import{P as d,v as m}from"./MeshLambertMaterial.vue_vue_type_script_setup_true_lang.9200eb40.js";import{d as u,j as s,g as f,f as v,p as h,h as l}from"../app.6bd9e14c.js";const w={name:"PerspectiveCamera"},C=u({...w,props:{name:{default:""},up:{default:()=>[0,1,0]}},setup(c,{expose:i}){const a=c,e=new d(75,window.innerWidth/window.innerHeight*1e3,.1,1e3);e.position.set(10,10,10),e.lookAt(0,0,0),e.updateProjectionMatrix(),s("addCamera")(e);const p=s("canvas");f(()=>{a.name&&(e.name=a.name),new ResizeObserver(t=>{t.forEach(r=>{e.aspect=r.contentRect.width/r.contentRect.height,e.updateProjectionMatrix()})}).observe(p.value)});function o(n){const t=m(n.up);e.up.set(t.x,t.y,t.z)}return o(a),v(a,()=>o(a)),h("parentCamera",e),i({three:e}),(n,t)=>l(n.$slots,"default")}});export{C as _};

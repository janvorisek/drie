import{O as d,h as o}from"./MeshNormalMaterial.vue_vue_type_script_setup_true_lang.f69525e7.js";import{d as u,m as c,i as f,p as h,k as l}from"../app.b237c323.js";const v={name:"OrthographicCamera"},b=u({...v,props:{name:{default:""},up:{default:()=>[0,1,0]},position:{default:()=>[0,0,0]},lookAt:{default:()=>[0,0,0]}},setup(p,{expose:i}){const t=p,e=new d(-10,10,10,-10,.1,1e3);e.lookAt(0,0,0),e.updateProjectionMatrix(),c("addCamera")(e);const m=c("canvas");return f(()=>{t.name&&(e.name=t.name),new ResizeObserver(r=>{r.forEach(n=>{const s=n.contentRect.width/n.contentRect.height;e.left=e.bottom*s,e.right=e.top*s,e.updateProjectionMatrix()})}).observe(m.value)}),o(t,"position",e),o(t,"up",e),o(t,"lookAt",e),h("parentCamera",e),i({three:e}),(a,r)=>l(a.$slots,"default")}});export{b as _};

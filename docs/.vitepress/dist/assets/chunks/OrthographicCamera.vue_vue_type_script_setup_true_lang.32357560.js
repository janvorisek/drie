import{O as u,h as o,d as c}from"./MeshNormalMaterial.vue_vue_type_script_setup_true_lang.68e695b1.js";import{d as m,i,h,p as v,l as _}from"../app.c64fee77.js";const b={name:"OrthographicCamera"},P=m({...b,props:{far:{default:2e3},lookAt:{default:()=>[0,0,0]},name:{default:""},near:{default:.1},position:{default:()=>[0,0,0]},up:{default:()=>[0,1,0]}},setup(d,{expose:f}){const a=d,e=new u(-10,10,10,-10,.1,1e3);e.lookAt(0,0,0),e.updateProjectionMatrix(),i("addCamera")(e);const l=i("canvas");h(()=>{a.name&&(e.name=a.name),new ResizeObserver(n=>{n.forEach(s=>{const p=s.contentRect.width/s.contentRect.height;e.left=e.bottom*p,e.right=e.top*p,e.updateProjectionMatrix()})}).observe(l.value)}),o(a,"position",e),o(a,"up",e),o(a,"lookAt",e);function t(){e.near=a.near,e.far=a.far,e.updateProjectionMatrix()}return t(),c(a,"near",t),c(a,"far",t),v("parentCamera",e),f({three:e}),(r,n)=>_(r.$slots,"default")}});export{P as _};
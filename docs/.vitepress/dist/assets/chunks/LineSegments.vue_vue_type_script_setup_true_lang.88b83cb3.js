import{B as m,L as p,e as l,m as d,h as o,f}from"./TextureLoader.vue_vue_type_script_setup_true_lang.98bdc661.js";import{d as u,i as h,j as _,p as g,m as L}from"../app.97bf5fb5.js";const S=u({__name:"LineSegments",props:{position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(s,{expose:n}){const t=s,a=h("scene"),r=new m,i=new p({color:"black"}),e=new l(r,i);return d(e),o(t,"position",e),o(t,"rotation",e),o(t,"scale",e),_(()=>{a.remove(e),f(e)}),g("mesh",e),n({three:e}),(c,j)=>L(c.$slots,"default")}});export{S as _};
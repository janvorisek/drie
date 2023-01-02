import{B as L,e as r,S as P,g as G,m as b,C as m,n as C,h as u}from"./MeshNormalMaterial.vue_vue_type_script_setup_true_lang.cabf5f60.js";import{d as p,l as d,g as $,f as c}from"../app.37e28129.js";const B={name:"SphereGeometry",render:()=>null},j=p({...B,props:{name:{default:""},radius:{default:1},widthSegments:{default:8},heightSegments:{default:6},phiStart:{default:0},phiLength:{default:2*Math.PI},thetaStart:{default:0},thetaLength:{default:Math.PI}},setup(i,{expose:h}){const t=i,o=d("mesh");function e(l,f,g,S,y,_,w){return new P(l,f,g,S,y,_,w)}const n=$(new L);n.name=t.name,o.geometry=n;const a=d("addGeometry");a(n);function s(){const l=e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength);G(n,l)}return r(t,"radius",s),r(t,"widthSegments",s),r(t,"heightSegments",s),r(t,"phiStart",s),r(t,"phiLength",s),r(t,"thetaStart",s),r(t,"thetaLength",s),h({three:n}),{props:t,mesh:o,makeSphere:e,three:n,addGeometry:a,redoGeometry:s}}}),k={name:"AmbientLight",render:()=>null},v=p({...k,props:{color:{default:16777215},intensity:{default:1}},setup(i,{expose:h}){const t=i,o=d("scene"),e=new b;o.add(e);function n(a){e.color=new m(a.color),e.intensity=a.intensity}return n(t),c(()=>t.color,()=>n(t)),c(()=>t.intensity,()=>n(t)),h({three:e}),{props:t,scene:o,three:e,applyProps:n}}}),A={name:"PointLight",render:()=>null},x=p({...A,props:{position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]},color:{default:16777215},intensity:{default:1},castShadow:{type:Boolean,default:!1}},setup(i,{expose:h}){const t=i,o=d("scene"),e=new C;o.add(e),u(t,"position",e),u(t,"rotation",e),u(t,"scale",e);function n(a){e.color=new m(a.color),e.intensity=a.intensity,e.castShadow=a.castShadow}return n(t),c(()=>t.color,()=>n(t)),c(()=>t.intensity,()=>n(t)),c(()=>t.castShadow,()=>n(t)),h({three:e}),{props:t,scene:o,three:e,applyProps:n}}});export{j as _,x as a,v as b};

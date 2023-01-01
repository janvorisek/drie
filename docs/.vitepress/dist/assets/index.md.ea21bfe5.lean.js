import{B as V,f as I,g as E,h as f,A as O,v as H,i as R,j as J,S as W,C as b,k as F,l as q,T as K,m as Q,_ as A,a as U,b as M,c as k,d as X,D as z,n as Y,e as Z,V as ee}from"./chunks/MeshLambertMaterial.vue_vue_type_script_setup_true_lang.2781c8aa.js";import{_ as te}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.82674332.js";import{_ as ae}from"./chunks/OrthographicCamera.vue_vue_type_script_setup_true_lang.c411f76a.js";import{d as _,j as g,p as x,h as L,r as u,f as w,g as se,o as C,c as j,a as r,w as p,u as o,b as ne,e as oe,i as T,k as re,V as ie}from"./app.d1f87fcd.js";const le=_({__name:"Points",props:{position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(c,{expose:i}){const e=c,a=g("scene"),t=new V,s=new I({color:"red",sizeAttenuation:!1,size:2}),n=new E(t,s);return a.add(n),f(e,"position",n),f(e,"rotation",n),f(e,"scale",n),x("mesh",n),i({three:n}),(v,d)=>L(v.$slots,"default")}}),ce=_({__name:"AxesHelper",props:{size:{default:1},position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(c,{expose:i}){const e=c,a=g("scene"),t=new O(e.size);return a.add(t),f(e,"position",t),f(e,"rotation",t),f(e,"scale",t),x("mesh",t),i({three:t}),(s,n)=>L(s.$slots,"default")}}),ue={name:"BufferGeometry",render:()=>null},he=_({...ue,props:{vertices:{default:()=>[]},faces:{default:()=>[]}},setup(c,{expose:i}){const e=c,a=g("mesh");function t(n,v){const d=new V,h=new Float32Array(n.length*3);for(let m=0;m<n.length;m++){const y=H(n[m]);h[m*3]=y[0],h[m*3+1]=y[1],h[m*3+2]=y[2]}return d.setAttribute("position",new R(h,3)),d}const s=u(t(e.vertices,e.faces));return a.geometry=s.value,w(e,()=>{a.geometry.dispose(),a.geometry=t(e.vertices),a.geometry.computeVertexNormals(),s.value=a.geometry}),i({three:s}),{props:e,mesh:a,makeGeometry:t,three:s}}}),de={name:"PlaneGeometry",render:()=>null},me=_({...de,props:{width:{default:1},height:{default:1},widthSegments:{default:1},heightSegments:{default:1}},setup(c,{expose:i}){const e=c,a=g("mesh");function t(n,v,d,h){return new J(n,v,d,h)}const s=u(t(e.width,e.height,e.widthSegments,e.heightSegments));return a.geometry=s.value,w(e,()=>{a.geometry.dispose(),a.geometry=t(e.width,e.height,e.widthSegments,e.heightSegments),s.value=a.geometry}),i({three:s}),{props:e,mesh:a,makePlane:t,three:s}}}),pe={name:"SphereGeometry",render:()=>null},_e=_({...pe,props:{radius:{default:1},widthSegments:{default:8},heightSegments:{default:6},phiStart:{default:0},phiLength:{default:2*Math.PI},thetaStart:{default:0},thetaLength:{default:Math.PI}},setup(c,{expose:i}){const e=c,a=g("mesh");function t(n,v,d,h,m,y,l){return new W(n,v,d,h,m,y,l)}const s=u(t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength));return a.geometry=s.value,w(e,()=>{a.geometry.dispose(),a.geometry=t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength),s.value=a.geometry}),i({three:s}),{props:e,mesh:a,makeSphere:t,three:s}}}),fe={name:"PointsMaterial",render:()=>null},ge=_({...fe,props:{color:{default:16777215},sizeAttenuation:{type:Boolean,default:!0},size:{default:1}},setup(c,{expose:i}){const e=c,a=g("mesh"),t=new I({color:e.color,sizeAttenuation:e.sizeAttenuation,size:e.size});a.material=t;function s(n){n.color&&(t.color=new b(n.color)),n.size&&(t.size=n.size),n.sizeAttenuation!==void 0&&(t.sizeAttenuation=n.sizeAttenuation)}return s(e),w(e,()=>s(e)),x("material",t),i({three:t}),{props:e,mesh:a,three:t,applyProps:s}}}),ve={name:"AmbientLight",render:()=>null},ye=_({...ve,props:{color:{default:16777215},intensity:{default:1}},setup(c,{expose:i}){const e=c,a=g("scene"),t=new F;a.add(t);function s(n){t.color=new b(n.color),t.intensity=n.intensity}return s(e),w(e,()=>s(e)),i({three:t}),{props:e,scene:a,three:t,applyProps:s}}}),we={name:"PointLight",render:()=>null},Se=_({...we,props:{position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]},color:{default:16777215},intensity:{default:1},castShadow:{type:Boolean,default:!1}},setup(c,{expose:i}){const e=c,a=g("scene"),t=new q;a.add(t),f(e,"position",t),f(e,"rotation",t),f(e,"scale",t);function s(n){t.color=new b(n.color),t.intensity=n.intensity,t.castShadow=n.castShadow}return s(e),w(e,()=>s(e)),i({three:t}),{props:e,scene:a,three:t,applyProps:s}}}),$e={name:"Texture",render:()=>null},Me=_({...$e,props:{url:null},setup(c,{expose:i}){const e=c,a=g("material"),t=u(new K);function s(n){"map"in a&&(a.map=new Q().load(n.url))}return s(e),w(e,()=>s(e)),i({three:t}),{props:e,material:a,three:t,applyProps:s}}}),be={class:"example",style:{height:"400px"}},xe=_({__name:"Welcome",setup(c){const i=u([0,0,0]),e=u([0,0,0]),a=u([]),t=u(1),s=u(1),n=u(1),v=new ee(5,-1,0),d=u("rgb(255,0,0)"),h=u("rgb(255,0,0)");se(()=>{let l=24,$=2,P=1;for(let S=0;S<l;S++){const B=$*Math.cos(2*Math.PI/l*S),D=P*Math.sin(2*Math.PI/l*S),N=$*Math.cos(2*Math.PI/l*(S+1)),G=P*Math.sin(2*Math.PI/l*(S+1));a.value.push([B,D,0]),a.value.push([N,G,0]),a.value.push([0,0,0])}}),window.setInterval(()=>{const l=Date.now()/1e3;d.value=`rgb(${Math.round(Math.cos(l)*50+100)}, ${Math.round((Math.sin(l)+1)/2*200+50)}, 100)`,h.value=`rgb(${Math.round(Math.cos(l)*50+200)}, ${Math.round(Math.sin(l)*50+100)}, 50)`,n.value=Math.cos(l)+2,s.value=Math.sin(l*5)*.5+1,t.value=Math.sin(l)+1,i.value=[Math.cos(l),Math.sin(l),Math.sin(l)],e.value=[Math.cos(l)*Math.PI,0,0]},10);const m=u("cam1"),y=u({});return(l,$)=>(C(),j("div",be,[r(o(Z),{ref_key:"renderer",ref:y,camera:m.value,antialias:!0,"shadow-map-enabled":""},{default:p(()=>[r(o(te),{name:"cam1",position:[10,10,10],up:[0,0,1]},{default:p(()=>[r(o(A))]),_:1}),r(o(ae),{name:"cam2"},{default:p(()=>[r(o(A))]),_:1}),r(o(U),{background:"#f9f9f9"},{default:p(()=>[r(o(Se),{position:[0,0,10],intensity:.25,"cast-shadow":!0},null,8,["intensity"]),r(o(ye),{color:16777215}),r(o(le),{position:o(v)},{default:p(()=>[r(o(ge),{color:d.value,"size-attenuation":!1,size:4},null,8,["color"]),r(o(_e),{radius:n.value,"width-segments":12,"height-segments":12},null,8,["radius"])]),_:1},8,["position"]),r(o(M),{position:i.value,rotation:e.value,"cast-shadow":!0},{default:p(()=>[r(o(k),null,{default:p(()=>[r(o(Me),{url:"https://threejs.org/examples/textures/crate.gif"})]),_:1}),r(o(X),{width:t.value+1,height:t.value*2+1},null,8,["width","height"])]),_:1},8,["position","rotation"]),r(o(M),{position:[-5,0,0],scale:[s.value,1,1]},{default:p(()=>[r(o(k),{color:h.value,side:o(z)},null,8,["color","side"]),r(o(he),{vertices:a.value},null,8,["vertices"])]),_:1},8,["scale"]),r(o(M),{position:[0,0,-3],"receive-shadow":!0},{default:p(()=>[r(o(Y),{color:"#cccccc",side:o(z)},null,8,["side"]),r(o(me),{width:20,height:20})]),_:1}),r(o(ce),{size:3})]),_:1})]),_:1},8,["camera"])]))}}),Pe=oe("",4),Ae=T("h2",{id:"the-authors",tabindex:"-1"},[re("The Authors "),T("a",{class:"header-anchor",href:"#the-authors","aria-hidden":"true"},"#")],-1),Le=JSON.parse('{"title":"Drie","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"The Authors","slug":"the-authors","link":"#the-authors","children":[]}],"relativePath":"index.md"}'),ke={name:"index.md"},Ce=Object.assign(ke,{setup(c){const i=[{avatar:"https://avatars.githubusercontent.com/u/26581833",name:"Jan Vorisek",title:"Creator",links:[{icon:"github",link:"https://github.com/janvorisek"},{icon:"twitter",link:"https://twitter.com/janvorisekdev"}]}];return(e,a)=>{const t=ne("ClientOnly");return C(),j("div",null,[Pe,r(t,null,{default:p(()=>[r(xe)]),_:1}),Ae,r(o(ie),{size:"small",members:i})])}}});export{Le as __pageData,Ce as default};
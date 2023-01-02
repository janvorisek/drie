import{B as I,p as C,q,h as $,r as L,i as R,C as W,T as F,s as H,_ as P,a as K,c as k,D as x,m as T,b as Q,V as U}from"./chunks/MeshNormalMaterial.vue_vue_type_script_setup_true_lang.35bd2cfd.js";import{_ as X}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.5a4e4c6e.js";import{_ as Y}from"./chunks/OrthographicCamera.vue_vue_type_script_setup_true_lang.fc6b0025.js";import{_ as z}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.d312d9c8.js";import{d as w,m as b,p as j,k as Z,h as D,g as M,r as l,i as ee,o as N,c as S,a,w as u,u as t,e as te,f as ae,l as V,q as se,V as oe}from"./app.bce43a5f.js";import{_ as ne}from"./chunks/OBJLoader.vue_vue_type_script_setup_true_lang.152a52c0.js";import{_ as re}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.06be320b.js";import{_ as ie}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.35764c99.js";import{_ as ce}from"./chunks/PlaneGeometry.vue_vue_type_script_setup_true_lang.a3ef9781.js";import{a as le,b as ue,_ as de}from"./chunks/PointLight.vue_vue_type_script_setup_true_lang.c3ce57e9.js";const me=w({__name:"Points",props:{position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(m,{expose:c}){const e=m,i=b("scene"),o=new I,n=new C({color:"red",sizeAttenuation:!1,size:2}),s=new q(o,n);return i.add(s),$(e,"position",s),$(e,"rotation",s),$(e,"scale",s),j("mesh",s),c({three:s}),(h,d)=>Z(h.$slots,"default")}}),he={name:"BufferGeometry",render:()=>null},_e=w({...he,props:{name:{default:""},vertices:{default:()=>[]},faces:{default:()=>[]}},setup(m,{expose:c}){const e=m,i=b("mesh");function o(d,v){const _=new I,g=new Float32Array(d.length);for(let p=0;p<d.length;p++)g[p]=d[p];return _.setAttribute("position",new L(g,3)),_.computeVertexNormals(),_}const n=D(o(e.vertices,e.faces));n.name=e.name,i.geometry=n;const s=b("addGeometry");s(n);function h(d){const v=o(d);R(n,v)}return M(()=>e.vertices,d=>{h(d)},{deep:!0,immediate:!0}),c({three:n}),{props:e,mesh:i,makeGeometry:o,three:n,addGeometry:s,redoGeometry:h}}}),pe={name:"PointsMaterial",render:()=>null},fe=w({...pe,props:{color:{default:16777215},sizeAttenuation:{type:Boolean,default:!0},size:{default:1}},setup(m,{expose:c}){const e=m,i=b("mesh"),o=new C({color:e.color,sizeAttenuation:e.sizeAttenuation,size:e.size});i.material=o;function n(s){s.color&&(o.color=new W(s.color)),s.size&&(o.size=s.size),s.sizeAttenuation!==void 0&&(o.sizeAttenuation=s.sizeAttenuation)}return n(e),M(()=>e.color,()=>n(e)),M(()=>e.size,()=>n(e)),M(()=>e.sizeAttenuation,()=>n(e)),j("material",o),c({three:o}),{props:e,mesh:i,three:o,applyProps:n}}}),ve={name:"TextureLoader",render:()=>null},ge=w({...ve,props:{url:null},setup(m,{expose:c}){const e=m,i=b("material"),o=l(new F);function n(s){"map"in i&&(i.map=new H().load(s.url))}return n(e),M(()=>e.url,()=>n(e)),c({three:o}),{props:e,material:i,three:o,applyProps:n}}}),Me={class:"example",style:{height:"400px"}},be=w({__name:"Welcome",setup(m){const c=l([0,0,0]),e=l([0,0,0]),i=D([]),o=l(1),n=l(1),s=l(1),h=l(1),d=new U(5,-1,0),v=l("rgb(255,0,0)"),_=l("rgb(255,0,0)"),g=l("rgb(255,0,0)");ee(()=>{let r=24,y=2,A=1;for(let f=0;f<r;f++){const G=y*Math.cos(2*Math.PI/r*f),O=A*Math.sin(2*Math.PI/r*f),E=y*Math.cos(2*Math.PI/r*(f+1)),J=A*Math.sin(2*Math.PI/r*(f+1));i.push(G,O,0),i.push(E,J,0),i.push(0,0,1)}}),window.setInterval(()=>{const r=Date.now()/1e3;v.value=`rgb(${Math.round(Math.cos(r)*50+100)}, ${Math.round((Math.sin(r)+1)/2*200+50)}, 100)`,_.value=`rgb(${Math.round(Math.cos(r)*50+200)}, ${Math.round(Math.sin(r)*50+100)}, 50)`,g.value=`rgb(${Math.round(Math.cos(r*2)*100+100)}, 50, ${Math.round(Math.sin(r)*50+100)})`,h.value=Math.cos(r)+2,n.value=Math.sin(r*3)*3,s.value=Math.sin(r*2)*.5+1,o.value=Math.sin(r)+1,c.value=[Math.cos(r),Math.sin(r),Math.sin(r)],e.value=[Math.cos(r)*Math.PI,0,0]},10);const p=l("cam1"),B=l({});return(r,y)=>(N(),S("div",Me,[a(t(Q),{ref_key:"renderer",ref:B,camera:p.value,antialias:!0,"frame-limit":30,"shadow-map-enabled":""},{default:u(()=>[a(t(X),{name:"cam1",position:[5,5,5],up:[0,0,1]},{default:u(()=>[a(t(P))]),_:1}),a(t(Y),{name:"cam2"},{default:u(()=>[a(t(P))]),_:1}),a(t(K),{background:"#f9f9f9"},{default:u(()=>[a(t(le),{position:[0,0,10],intensity:.25,"cast-shadow":!0},null,8,["intensity"]),a(t(ue),{color:16777215}),a(t(me),{position:t(d)},{default:u(()=>[a(t(fe),{color:v.value,"size-attenuation":!1,size:4},null,8,["color"]),a(t(de),{radius:h.value,"width-segments":12,"height-segments":12},null,8,["radius"])]),_:1},8,["position"]),a(t(z),{position:c.value,rotation:e.value,scale:[s.value,s.value,s.value],"cast-shadow":!0},{default:u(()=>[a(t(k),null,{default:u(()=>[a(t(ge),{url:"https://threejs.org/examples/textures/crate.gif"})]),_:1}),a(t(ie),{width:o.value+1,height:o.value*2+1},null,8,["width","height"])]),_:1},8,["position","rotation","scale"]),a(t(z),{position:[-5,0,0],scale:[s.value+.5,1,n.value],"cast-shadow":!0},{default:u(()=>[a(t(k),{color:_.value,side:t(x)},null,8,["color","side"]),a(t(_e),{vertices:i},null,8,["vertices"])]),_:1},8,["scale"]),a(t(z),{position:[0,0,-3],"receive-shadow":!0},{default:u(()=>[a(t(T),{color:"#cccccc",side:t(x)},null,8,["side"]),a(t(ce),{width:20,height:20})]),_:1}),a(t(ne),{position:[3,0,0],rotation:[Math.PI/2,Math.cos(Date.now()/1e3)*Math.PI,0],scale:[20,20,20],url:"https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"},{default:u(()=>[a(t(T),{color:g.value,side:t(x)},null,8,["color","side"])]),_:1},8,["rotation"]),a(t(re),{size:3})]),_:1})]),_:1},8,["camera"])]))}}),we=ae("",4),ye=V("h2",{id:"authors",tabindex:"-1"},[se("Authors "),V("a",{class:"header-anchor",href:"#authors","aria-hidden":"true"},"#")],-1),De=JSON.parse('{"title":"Drie","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Authors","slug":"authors","link":"#authors","children":[]}],"relativePath":"index.md"}'),$e={name:"index.md"},Ne=Object.assign($e,{setup(m){const c=[{avatar:"https://avatars.githubusercontent.com/u/26581833",name:"Jan Vorisek",title:"Creator",links:[{icon:"github",link:"https://github.com/janvorisek"},{icon:"twitter",link:"https://twitter.com/janvorisekdev"}]}];return(e,i)=>{const o=te("ClientOnly");return N(),S("div",null,[we,a(o,null,{default:u(()=>[a(be)]),_:1}),ye,a(t(oe),{size:"small",members:c})])}}});export{De as __pageData,Ne as default};

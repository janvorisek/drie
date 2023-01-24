import{F as U,h as g,C as q,V as K,_ as Q,b as C,H as X,D as v,I as k,a as Y}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.6d9097cd.js";import{_ as Z}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.fc33458a.js";import{_ as ee}from"./chunks/OrthographicCamera.vue_vue_type_script_setup_true_lang.b1917dd2.js";import{_ as D}from"./chunks/OrbitControls.vue_vue_type_script_setup_true_lang.a7896d86.js";import{_ as V}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.252900bf.js";import{_ as b}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.411c795d.js";import{_ as te,a as ae}from"./chunks/PointsMaterial.vue_vue_type_script_setup_true_lang.3f322b3d.js";import{_ as se}from"./chunks/OBJLoader.vue_vue_type_script_setup_true_lang.79d08dda.js";import{_ as oe}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.9b2db203.js";import{_ as ie}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.5bc31ab1.js";import{_ as ne}from"./chunks/BufferGeometry.vue_vue_type_script_setup_true_lang.0902ec46.js";import{_ as re}from"./chunks/PlaneGeometry.vue_vue_type_script_setup_true_lang.3ceecb8a.js";import{_ as le}from"./chunks/SphereGeometry.vue_vue_type_script_setup_true_lang.fb630b83.js";import{_ as I}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.749259c1.js";import{_ as T}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.248291d1.js";import{_ as ce}from"./chunks/AmbientLight.vue_vue_type_script_setup_true_lang.f2e978ed.js";import{d as A,i as de,g as w,k as j,r,h as he,o as z,c as B,l as m,a as t,w as n,u as e,e as me,f as E,V as ue}from"./app.ecc63a90.js";import{V as G}from"./chunks/v-tweakpane.de5ac47f.js";const pe={name:"PointLight",render:()=>null},_e=A({...pe,props:{castShadow:{type:Boolean,default:!1},color:{default:16777215},intensity:{default:1},position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(u,{expose:s}){const o=u,h=de("scene"),i=new U;h.add(i),g(o,"position",i),g(o,"rotation",i),g(o,"scale",i);function l(c){i.color=new q(c.color),i.intensity=c.intensity,i.castShadow=c.castShadow}return l(o),w(()=>o.color,()=>l(o)),w(()=>o.intensity,()=>l(o)),w(()=>o.castShadow,()=>l(o)),s({three:i}),{props:o,scene:h,three:i,applyProps:l}}}),fe={class:"example",style:{height:"200px"}},ge={class:"demo-welcome"},ve=A({__name:"Welcome",setup(u){const s=j({pos:{x:0,y:0,z:2},s2:1,radius:1,planeWidth:20,planeHeight:5}),o=a=>{a.addInput(s,"pos",{label:"Crate position"}),a.addInput(s,"planeWidth",{label:"Plane width",min:1,max:30}),a.addInput(s,"planeHeight",{label:"Plane height",min:1,max:10})},h=a=>{a.addMonitor(s,"s2",{view:"graph",min:0,max:2,label:"Crate scale"}),a.addMonitor(s,"radius",{view:"graph",min:.5,max:3.5,label:"Sphere radius"})},i=r([0,0,2]),l=r([0,0,0]),c=j([]),p=r(1),_=r(1),N=new K(10,0,0),y=r("rgb(255,0,0)"),M=r("rgb(255,0,0)"),x=r("rgb(255,0,0)");he(()=>{let a=24,f=3,$=2;for(let d=0;d<a;d++){const P=f*Math.cos(2*Math.PI/a*d),F=Math.sin(P),H=$*Math.sin(2*Math.PI/a*d)+F,S=f*Math.cos(2*Math.PI/a*(d+1)),L=Math.sin(S),J=$*Math.sin(2*Math.PI/a*(d+1))+L;c.push(P,H,0),c.push(S,J,0),c.push(0,0,1)}});const W=()=>{const a=Date.now()/1e3;y.value=`rgb(${Math.round(Math.cos(a)*50+100)}, ${Math.round((Math.sin(a)+1)/2*200+50)}, 100)`,M.value=`rgb(${Math.round(Math.cos(a)*50+200)}, ${Math.round(Math.sin(a)*50+100)}, 50)`,x.value=`rgb(${Math.round(Math.cos(a*2)*100+100)}, 50, ${Math.round(Math.sin(a)*50+100)})`,s.radius=Math.cos(a)+2,_.value=Math.sin(a*3)*3,s.s2=Math.sin(a*2)*.5+1,p.value=Math.sin(a)+1,l.value=[Math.cos(a)*Math.PI,0,0],i.value=[s.pos.x,s.pos.y,s.pos.z]},O=r("cam1"),R=r({});return(a,f)=>(z(),B("div",null,[m("div",fe,[t(e(Y),{ref_key:"renderer",ref:R,"on-before-render":W,camera:O.value,antialias:!0,"frame-limit":30,"shadow-map-enabled":""},{default:n(()=>[t(e(Z),{name:"cam1",position:[0,6,5],up:[0,0,1]},{default:n(()=>[t(e(D))]),_:1}),t(e(ee),{name:"cam2"},{default:n(()=>[t(e(D))]),_:1}),t(e(Q),{background:"#f9f9f9"},{default:n(()=>[t(e(_e),{position:[0,0,10],intensity:.25,"cast-shadow":!0},null,8,["intensity"]),t(e(ce),{color:16777215}),t(e(te),{position:e(N)},{default:n(()=>[t(e(ae),{color:y.value,"size-attenuation":!1,size:4},null,8,["color"]),t(e(le),{radius:s.radius,"width-segments":12,"height-segments":12},null,8,["radius"])]),_:1},8,["position"]),t(e(b),{position:i.value,rotation:l.value,scale:[s.s2,s.s2,s.s2],"cast-shadow":!0},{default:n(()=>[t(e(C),null,{default:n(()=>[t(e(X),{url:"https://threejs.org/examples/textures/crate.gif"})]),_:1}),t(e(ie),{width:p.value+1,height:p.value*2+1},null,8,["width","height"])]),_:1},8,["position","rotation","scale"]),t(e(b),{position:[-8,0,0],scale:[s.s2+.5,1,_.value],"cast-shadow":!0},{default:n(()=>[t(e(C),{color:M.value,side:e(v)},null,8,["color","side"]),t(e(ne),{name:"weirdGeo",vertices:c},null,8,["vertices"])]),_:1},8,["scale"]),t(e(V),{position:[-8,0,0],scale:[s.s2+.5,1,_.value]},{default:n(()=>[t(e(T),{color:"black"}),t(e(I),{geometry:"weirdGeo"})]),_:1},8,["scale"]),t(e(b),{position:[0,0,-3],"receive-shadow":!0},{default:n(()=>[t(e(k),{color:"#aaa",side:e(v)},null,8,["side"]),t(e(re),{name:"plane",width:s.planeWidth,height:s.planeHeight,"width-segments":3,"height-segments":3},null,8,["width","height"])]),_:1}),t(e(V),{position:[0,0,-3]},{default:n(()=>[t(e(T),{color:"black"}),t(e(I),{geometry:"plane"})]),_:1}),t(e(se),{position:[3,0,0],rotation:[Math.PI/2,Math.cos(Date.now()/1e3)*Math.PI,0],scale:[20,20,20],url:"https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"},{default:n(()=>[t(e(k),{color:x.value,side:e(v)},null,8,["color","side"])]),_:1},8,["rotation"]),t(e(oe),{size:3})]),_:1})]),_:1},8,["camera"])]),m("div",ge,[m("div",null,[t(e(G),{pane:{title:"Set properties"},onOnPaneCreated:o})]),m("div",null,[t(e(G),{pane:{title:"Props watcher"},onOnPaneCreated:h})])])]))}}),be=E("",6),we=E("",5),We=JSON.parse('{"title":"Drie","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Authors","slug":"authors","link":"#authors","children":[]}],"relativePath":"index.md"}'),ye={name:"index.md"},Oe=Object.assign(ye,{setup(u){const s=[{avatar:"https://avatars.githubusercontent.com/u/26581833",name:"Jan Vorisek",title:"Creator",links:[{icon:"github",link:"https://github.com/janvorisek"},{icon:"twitter",link:"https://twitter.com/janvorisekdev"}]}];return(o,h)=>{const i=me("ClientOnly");return z(),B("div",null,[be,t(i,null,{default:n(()=>[t(ve)]),_:1}),we,t(e(ue),{size:"small",members:s})])}}});export{We as __pageData,Oe as default};

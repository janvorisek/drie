import{x as K,C as z,y as Q,h as b,V as X,_ as k,a as Y,c as D,z as Z,D as v,F as V,b as ee}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.b469b9f8.js";import{_ as te}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.ad6c811a.js";import{_ as ae}from"./chunks/OrthographicCamera.vue_vue_type_script_setup_true_lang.d410ce7d.js";import{_ as I}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.e6758a90.js";import{_ as w}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.df2e32ef.js";import{_ as se,a as oe}from"./chunks/PointsMaterial.vue_vue_type_script_setup_true_lang.46d338bd.js";import{_ as ie}from"./chunks/OBJLoader.vue_vue_type_script_setup_true_lang.0a1e70f6.js";import{_ as ne}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.c3fabaed.js";import{_ as re}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.c35ee74e.js";import{_ as le}from"./chunks/BufferGeometry.vue_vue_type_script_setup_true_lang.c8f8cd96.js";import{_ as ce}from"./chunks/PlaneGeometry.vue_vue_type_script_setup_true_lang.9d8ddb0d.js";import{_ as de}from"./chunks/SphereGeometry.vue_vue_type_script_setup_true_lang.2f1fc01c.js";import{_ as T}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.0fe8e9a7.js";import{_ as j}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.b99d34e6.js";import{d as y,i as B,g as u,k as A,r as c,h as he,o as E,c as N,m as p,a as t,w as r,u as e,e as me,f as W,V as ue}from"./app.a200304c.js";import{V as G}from"./chunks/v-tweakpane.399fad25.js";const pe={name:"AmbientLight",render:()=>null},_e=y({...pe,props:{color:{default:16777215},intensity:{default:1}},setup(m,{expose:s}){const o=m,d=B("scene"),i=new K;d.add(i);function n(l){i.color=new z(l.color),i.intensity=l.intensity}return n(o),u(()=>o.color,()=>n(o)),u(()=>o.intensity,()=>n(o)),s({three:i}),{props:o,scene:d,three:i,applyProps:n}}}),fe={name:"PointLight",render:()=>null},ge=y({...fe,props:{castShadow:{type:Boolean,default:!1},color:{default:16777215},intensity:{default:1},position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(m,{expose:s}){const o=m,d=B("scene"),i=new Q;d.add(i),b(o,"position",i),b(o,"rotation",i),b(o,"scale",i);function n(l){i.color=new z(l.color),i.intensity=l.intensity,i.castShadow=l.castShadow}return n(o),u(()=>o.color,()=>n(o)),u(()=>o.intensity,()=>n(o)),u(()=>o.castShadow,()=>n(o)),s({three:i}),{props:o,scene:d,three:i,applyProps:n}}}),be={class:"example",style:{height:"200px"}},ve={class:"demo-welcome"},we=y({__name:"Welcome",setup(m){const s=A({pos:{x:0,y:0,z:2},s2:1,radius:1,planeWidth:20,planeHeight:5}),o=a=>{a.addInput(s,"pos",{label:"Crate position"}),a.addInput(s,"planeWidth",{label:"Plane width",min:1,max:30}),a.addInput(s,"planeHeight",{label:"Plane height",min:1,max:10})},d=a=>{a.addMonitor(s,"s2",{view:"graph",min:0,max:2,label:"Crate scale"}),a.addMonitor(s,"radius",{view:"graph",min:.5,max:3.5,label:"Sphere radius"})},i=c([0,0,2]),n=c([0,0,0]),l=A([]),_=c(1),f=c(1),L=new X(10,0,0),M=c("rgb(255,0,0)"),x=c("rgb(255,0,0)"),$=c("rgb(255,0,0)");he(()=>{let a=24,g=3,P=2;for(let h=0;h<a;h++){const S=g*Math.cos(2*Math.PI/a*h),H=Math.sin(S),J=P*Math.sin(2*Math.PI/a*h)+H,C=g*Math.cos(2*Math.PI/a*(h+1)),U=Math.sin(C),q=P*Math.sin(2*Math.PI/a*(h+1))+U;l.push(S,J,0),l.push(C,q,0),l.push(0,0,1)}});const O=()=>{const a=Date.now()/1e3;M.value=`rgb(${Math.round(Math.cos(a)*50+100)}, ${Math.round((Math.sin(a)+1)/2*200+50)}, 100)`,x.value=`rgb(${Math.round(Math.cos(a)*50+200)}, ${Math.round(Math.sin(a)*50+100)}, 50)`,$.value=`rgb(${Math.round(Math.cos(a*2)*100+100)}, 50, ${Math.round(Math.sin(a)*50+100)})`,s.radius=Math.cos(a)+2,f.value=Math.sin(a*3)*3,s.s2=Math.sin(a*2)*.5+1,_.value=Math.sin(a)+1,n.value=[Math.cos(a)*Math.PI,0,0],i.value=[s.pos.x,s.pos.y,s.pos.z]},R=c("cam1"),F=c({});return(a,g)=>(E(),N("div",null,[p("div",be,[t(e(ee),{ref_key:"renderer",ref:F,"on-before-render":O,camera:R.value,antialias:!0,"frame-limit":30,"shadow-map-enabled":""},{default:r(()=>[t(e(te),{name:"cam1",position:[0,6,5],up:[0,0,1]},{default:r(()=>[t(e(k))]),_:1}),t(e(ae),{name:"cam2"},{default:r(()=>[t(e(k))]),_:1}),t(e(Y),{background:"#f9f9f9"},{default:r(()=>[t(e(ge),{position:[0,0,10],intensity:.25,"cast-shadow":!0},null,8,["intensity"]),t(e(_e),{color:16777215}),t(e(se),{position:e(L)},{default:r(()=>[t(e(oe),{color:M.value,"size-attenuation":!1,size:4},null,8,["color"]),t(e(de),{radius:s.radius,"width-segments":12,"height-segments":12},null,8,["radius"])]),_:1},8,["position"]),t(e(w),{position:i.value,rotation:n.value,scale:[s.s2,s.s2,s.s2],"cast-shadow":!0},{default:r(()=>[t(e(D),null,{default:r(()=>[t(e(Z),{url:"https://threejs.org/examples/textures/crate.gif"})]),_:1}),t(e(re),{width:_.value+1,height:_.value*2+1},null,8,["width","height"])]),_:1},8,["position","rotation","scale"]),t(e(w),{position:[-8,0,0],scale:[s.s2+.5,1,f.value],"cast-shadow":!0},{default:r(()=>[t(e(D),{color:x.value,side:e(v)},null,8,["color","side"]),t(e(le),{name:"weirdGeo",vertices:l},null,8,["vertices"])]),_:1},8,["scale"]),t(e(I),{position:[-8,0,0],scale:[s.s2+.5,1,f.value]},{default:r(()=>[t(e(j),{color:"black"}),t(e(T),{geometry:"weirdGeo"})]),_:1},8,["scale"]),t(e(w),{position:[0,0,-3],"receive-shadow":!0},{default:r(()=>[t(e(V),{color:"#aaa",side:e(v)},null,8,["side"]),t(e(ce),{name:"plane",width:s.planeWidth,height:s.planeHeight,"width-segments":3,"height-segments":3},null,8,["width","height"])]),_:1}),t(e(I),{position:[0,0,-3]},{default:r(()=>[t(e(j),{color:"black"}),t(e(T),{geometry:"plane"})]),_:1}),t(e(ie),{position:[3,0,0],rotation:[Math.PI/2,Math.cos(Date.now()/1e3)*Math.PI,0],scale:[20,20,20],url:"https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"},{default:r(()=>[t(e(V),{color:$.value,side:e(v)},null,8,["color","side"])]),_:1},8,["rotation"]),t(e(ne),{size:3})]),_:1})]),_:1},8,["camera"])]),p("div",ve,[p("div",null,[t(e(G),{pane:{title:"Set properties"},onOnPaneCreated:o})]),p("div",null,[t(e(G),{pane:{title:"Props watcher"},onOnPaneCreated:d})])])]))}}),ye=W('<h1 id="drie" tabindex="-1">Drie <a class="header-anchor" href="#drie" aria-hidden="true">#</a></h1><p>Drie is a Vue 3 component library that makes it easy for developers to add 3D rendering to their web applications using the <a href="https://threejs.org/" target="_blank" rel="noreferrer"><code>three.js</code></a> library. It&#39;s written in TypeScript and uses the Composition API.</p><p>Drie allows for an intuitive and declarative approach to building complex 3D scenes and integrating them into both existing and new Vue projects. Drie aims to be the go-to choice for building 3D web applications with Vue and three.js.</p><p>To start using Drie see the <a href="/getting-started">Getting started</a> page.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><p>Use mouse or touch to rotate the scene. This example illustrates capabilities of Drie.</p>',6),Me=W('<h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><p>Drie implements components for the common three.js classes. Some additional features not directly implemented in three.js are available as well.</p><p>Notable features include:</p><ul><li>Auto resizing of WebGL canvas (including PerspectiveCamera aspect ratio update)</li><li>Raycasting as mouse events</li><li>FPS Limiter</li><li><a href="/raycasting">Raycasting</a> with mouse events</li><li>Simple usage of geometry utilities (see <a href="./components/Geometries/EdgesGeometry">EdgesGeometry</a> or <a href="./components/Geometries/WireframeGeometry">WireframeGeometry</a>)</li><li>Simple geometries (e.g., <a href="./components/Geometries/BoxGeometry">BoxGeometry</a>) have reactive properties. Drie handles regeneration of the geometry internally.</li></ul><h2 id="authors" tabindex="-1">Authors <a class="header-anchor" href="#authors" aria-hidden="true">#</a></h2>',5),We=JSON.parse('{"title":"Drie","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Authors","slug":"authors","link":"#authors","children":[]}],"relativePath":"index.md"}'),xe={name:"index.md"},Le=Object.assign(xe,{setup(m){const s=[{avatar:"https://avatars.githubusercontent.com/u/26581833",name:"Jan Vorisek",title:"Creator",links:[{icon:"github",link:"https://github.com/janvorisek"},{icon:"twitter",link:"https://twitter.com/janvorisekdev"}]}];return(o,d)=>{const i=me("ClientOnly");return E(),N("div",null,[ye,t(i,null,{default:r(()=>[t(we)]),_:1}),Me,t(e(ue),{size:"small",members:s})])}}});export{We as __pageData,Le as default};

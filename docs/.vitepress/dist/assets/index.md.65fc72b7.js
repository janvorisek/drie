import{v as K,C as W,w as Q,h as v,V as X,_ as k,a as Y,c as D,x as Z,D as b,y as V,b as ee}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.fa9f1c1e.js";import{_ as te}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.d8a9fda9.js";import{_ as ae}from"./chunks/OrthographicCamera.vue_vue_type_script_setup_true_lang.65eec17b.js";import{_ as I}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.b0b87acd.js";import{_ as y}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.202577da.js";import{_ as se,a as oe}from"./chunks/PointsMaterial.vue_vue_type_script_setup_true_lang.f59a1c59.js";import{_ as ne}from"./chunks/OBJLoader.vue_vue_type_script_setup_true_lang.cd0f96cc.js";import{_ as ie}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.2855905f.js";import{_ as re}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.e7e59b94.js";import{_ as le}from"./chunks/BufferGeometry.vue_vue_type_script_setup_true_lang.d892f974.js";import{_ as ce}from"./chunks/PlaneGeometry.vue_vue_type_script_setup_true_lang.baf47a78.js";import{_ as de}from"./chunks/SphereGeometry.vue_vue_type_script_setup_true_lang.1c62d425.js";import{_ as T}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.d1d6313b.js";import{_ as j}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.54068e3e.js";import{d as w,i as z,g as u,k as A,r as c,h as he,o as B,c as E,m as p,a as t,w as r,u as e,e as me,f as N,V as ue}from"./app.bb6a552b.js";import{V as G}from"./chunks/v-tweakpane.782e6895.js";const pe={name:"AmbientLight",render:()=>null},_e=w({...pe,props:{color:{default:16777215},intensity:{default:1}},setup(m,{expose:s}){const o=m,d=z("scene"),n=new K;d.add(n);function i(l){n.color=new W(l.color),n.intensity=l.intensity}return i(o),u(()=>o.color,()=>i(o)),u(()=>o.intensity,()=>i(o)),s({three:n}),{props:o,scene:d,three:n,applyProps:i}}}),fe={name:"PointLight",render:()=>null},ge=w({...fe,props:{castShadow:{type:Boolean,default:!1},color:{default:16777215},intensity:{default:1},position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(m,{expose:s}){const o=m,d=z("scene"),n=new Q;d.add(n),v(o,"position",n),v(o,"rotation",n),v(o,"scale",n);function i(l){n.color=new W(l.color),n.intensity=l.intensity,n.castShadow=l.castShadow}return i(o),u(()=>o.color,()=>i(o)),u(()=>o.intensity,()=>i(o)),u(()=>o.castShadow,()=>i(o)),s({three:n}),{props:o,scene:d,three:n,applyProps:i}}}),ve={class:"example",style:{height:"200px"}},be={style:{display:"flex",gap:"24px","flex-direction":"row","justify-content":"center","margin-top":"24px"}},ye=w({__name:"Welcome",setup(m){const s=A({pos:{x:0,y:0,z:2},s2:1,radius:1,planeWidth:20,planeHeight:5}),o=a=>{a.addInput(s,"pos",{label:"Crate position"}),a.addInput(s,"planeWidth",{label:"Plane width",min:1,max:30}),a.addInput(s,"planeHeight",{label:"Plane height",min:1,max:10})},d=a=>{a.addMonitor(s,"s2",{view:"graph",min:0,max:2,label:"Crate scale"}),a.addMonitor(s,"radius",{view:"graph",min:.5,max:3.5,label:"Sphere radius"})},n=c([0,0,2]),i=c([0,0,0]),l=A([]),_=c(1),f=c(1),L=new X(10,0,0),x=c("rgb(255,0,0)"),M=c("rgb(255,0,0)"),$=c("rgb(255,0,0)");he(()=>{let a=24,g=3,P=2;for(let h=0;h<a;h++){const S=g*Math.cos(2*Math.PI/a*h),H=Math.sin(S),J=P*Math.sin(2*Math.PI/a*h)+H,C=g*Math.cos(2*Math.PI/a*(h+1)),U=Math.sin(C),q=P*Math.sin(2*Math.PI/a*(h+1))+U;l.push(S,J,0),l.push(C,q,0),l.push(0,0,1)}});const O=()=>{const a=Date.now()/1e3;x.value=`rgb(${Math.round(Math.cos(a)*50+100)}, ${Math.round((Math.sin(a)+1)/2*200+50)}, 100)`,M.value=`rgb(${Math.round(Math.cos(a)*50+200)}, ${Math.round(Math.sin(a)*50+100)}, 50)`,$.value=`rgb(${Math.round(Math.cos(a*2)*100+100)}, 50, ${Math.round(Math.sin(a)*50+100)})`,s.radius=Math.cos(a)+2,f.value=Math.sin(a*3)*3,s.s2=Math.sin(a*2)*.5+1,_.value=Math.sin(a)+1,i.value=[Math.cos(a)*Math.PI,0,0],n.value=[s.pos.x,s.pos.y,s.pos.z]},R=c("cam1"),F=c({});return(a,g)=>(B(),E("div",null,[p("div",ve,[t(e(ee),{ref_key:"renderer",ref:F,"on-before-render":O,camera:R.value,antialias:!0,"frame-limit":30,"shadow-map-enabled":""},{default:r(()=>[t(e(te),{name:"cam1",position:[0,6,5],up:[0,0,1]},{default:r(()=>[t(e(k))]),_:1}),t(e(ae),{name:"cam2"},{default:r(()=>[t(e(k))]),_:1}),t(e(Y),{background:"#f9f9f9"},{default:r(()=>[t(e(ge),{position:[0,0,10],intensity:.25,"cast-shadow":!0},null,8,["intensity"]),t(e(_e),{color:16777215}),t(e(se),{position:e(L)},{default:r(()=>[t(e(oe),{color:x.value,"size-attenuation":!1,size:4},null,8,["color"]),t(e(de),{radius:s.radius,"width-segments":12,"height-segments":12},null,8,["radius"])]),_:1},8,["position"]),t(e(y),{position:n.value,rotation:i.value,scale:[s.s2,s.s2,s.s2],"cast-shadow":!0},{default:r(()=>[t(e(D),null,{default:r(()=>[t(e(Z),{url:"https://threejs.org/examples/textures/crate.gif"})]),_:1}),t(e(re),{width:_.value+1,height:_.value*2+1},null,8,["width","height"])]),_:1},8,["position","rotation","scale"]),t(e(y),{position:[-8,0,0],scale:[s.s2+.5,1,f.value],"cast-shadow":!0},{default:r(()=>[t(e(D),{color:M.value,side:e(b)},null,8,["color","side"]),t(e(le),{name:"weirdGeo",vertices:l},null,8,["vertices"])]),_:1},8,["scale"]),t(e(I),{position:[-8,0,0],scale:[s.s2+.5,1,f.value]},{default:r(()=>[t(e(j),{color:"black"}),t(e(T),{geometry:"weirdGeo"})]),_:1},8,["scale"]),t(e(y),{position:[0,0,-3],"receive-shadow":!0},{default:r(()=>[t(e(V),{color:"#aaa",side:e(b)},null,8,["side"]),t(e(ce),{name:"plane",width:s.planeWidth,height:s.planeHeight,"width-segments":3,"height-segments":3},null,8,["width","height"])]),_:1}),t(e(I),{position:[0,0,-3]},{default:r(()=>[t(e(j),{color:"black"}),t(e(T),{geometry:"plane"})]),_:1}),t(e(ne),{position:[3,0,0],rotation:[Math.PI/2,Math.cos(Date.now()/1e3)*Math.PI,0],scale:[20,20,20],url:"https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"},{default:r(()=>[t(e(V),{color:$.value,side:e(b)},null,8,["color","side"])]),_:1},8,["rotation"]),t(e(ie),{size:3})]),_:1})]),_:1},8,["camera"])]),p("div",be,[p("div",null,[t(e(G),{pane:{title:"Set properties"},onOnPaneCreated:o})]),p("div",null,[t(e(G),{pane:{title:"Props watcher"},onOnPaneCreated:d})])])]))}});const we=N('<h1 id="drie" tabindex="-1">Drie <a class="header-anchor" href="#drie" aria-hidden="true">#</a></h1><p>Drie is a Vue 3 component library that makes it easy for developers to add 3D rendering to their web applications using the <a href="https://threejs.org/" target="_blank" rel="noreferrer"><code>three.js</code></a> library. It&#39;s written in TypeScript and uses the Composition API.</p><p>Drie allows for an intuitive and declarative approach to building complex 3D scenes and integrating them into both existing and new Vue projects. Drie aims to be the go-to choice for building 3D web applications with Vue and three.js.</p><p>To start using Drie see the <a href="/getting-started">Getting started</a> page.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><p>Use mouse or touch to rotate the scene. This example illustrates capabilities of Drie.</p>',6),xe=N('<h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><p>Drie implements components for the common three.js classes. Some additional features not directly implemented in three.js are available as well.</p><p>Notable features include:</p><ul><li>Auto resizing of WebGL canvas (including PerspectiveCamera aspect ratio update)</li><li>Raycasting as mouse events</li><li>FPS Limiter</li><li>Simple usage of geometry utilities (see <a href="./components/Geometries/EdgesGeometry">EdgesGeometry</a> or <a href="./components/Geometries/WireframeGeometry">WireframeGeometry</a>)</li><li>Simple geometries (e.g., <a href="./components/Geometries/BoxGeometry">BoxGeometry</a>) have reactive properties. Drie handles regeneration of the geometry internally.</li></ul><h2 id="authors" tabindex="-1">Authors <a class="header-anchor" href="#authors" aria-hidden="true">#</a></h2>',5),Ne=JSON.parse('{"title":"Drie","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Authors","slug":"authors","link":"#authors","children":[]}],"relativePath":"index.md"}'),Me={name:"index.md"},Le=Object.assign(Me,{setup(m){const s=[{avatar:"https://avatars.githubusercontent.com/u/26581833",name:"Jan Vorisek",title:"Creator",links:[{icon:"github",link:"https://github.com/janvorisek"},{icon:"twitter",link:"https://twitter.com/janvorisekdev"}]}];return(o,d)=>{const n=me("ClientOnly");return B(),E("div",null,[we,t(n,null,{default:r(()=>[t(ye)]),_:1}),xe,t(e(ue),{size:"small",members:s})])}}});export{Ne as __pageData,Le as default};
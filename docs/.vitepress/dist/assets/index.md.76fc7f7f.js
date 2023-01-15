import{B as U,s as G,t as H,m as q,h as _,f as K,C as y,u as Q,v as X,V as Y,_ as D,a as Z,c as S,w as ee,D as w,x as T,b as te}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.2f35c12c.js";import{_ as ae}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.8b818305.js";import{_ as se}from"./chunks/OrthographicCamera.vue_vue_type_script_setup_true_lang.4f226095.js";import{_ as j,a as V}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.062cd60c.js";import{_ as b}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.fb28ceaa.js";import{d as p,i as g,j as oe,p as I,l as ne,g as m,r as u,k as ie,h as re,o as E,c as B,a,w as l,u as t,e as le,f as L,V as ce}from"./app.9ea36c0b.js";import{_ as ue}from"./chunks/OBJLoader.vue_vue_type_script_setup_true_lang.a98d361d.js";import{_ as he}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.1b3a917a.js";import{_ as me}from"./chunks/BoxGeometry.vue_vue_type_script_setup_true_lang.2d8b96e9.js";import{_ as de}from"./chunks/BufferGeometry.vue_vue_type_script_setup_true_lang.158e0722.js";import{_ as _e}from"./chunks/PlaneGeometry.vue_vue_type_script_setup_true_lang.3290b93a.js";import{_ as pe}from"./chunks/SphereGeometry.vue_vue_type_script_setup_true_lang.69ee28da.js";import{_ as C}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.08d727de.js";const fe=p({__name:"Points",props:{position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(h,{expose:c}){const e=h,r=g("scene"),s=new U,n=new G({color:"red",sizeAttenuation:!1,size:2}),o=new H(s,n);return q(o),_(e,"position",o),_(e,"rotation",o),_(e,"scale",o),oe(()=>{r.remove(o),K(o)}),I("mesh",o),c({three:o}),(f,M)=>ne(f.$slots,"default")}}),ge={name:"PointsMaterial",render:()=>null},ve=p({...ge,props:{color:{default:16777215},sizeAttenuation:{type:Boolean,default:!0},size:{default:1}},setup(h,{expose:c}){const e=h,r=g("mesh"),s=new G({color:e.color,sizeAttenuation:e.sizeAttenuation,size:e.size});r.material=s;function n(o){o.color&&(s.color=new y(o.color)),o.size&&(s.size=o.size),o.sizeAttenuation!==void 0&&(s.sizeAttenuation=o.sizeAttenuation)}return n(e),m(()=>e.color,()=>n(e)),m(()=>e.size,()=>n(e)),m(()=>e.sizeAttenuation,()=>n(e)),I("material",s),c({three:s}),{props:e,mesh:r,three:s,applyProps:n}}}),we={name:"AmbientLight",render:()=>null},be=p({...we,props:{color:{default:16777215},intensity:{default:1}},setup(h,{expose:c}){const e=h,r=g("scene"),s=new Q;r.add(s);function n(o){s.color=new y(o.color),s.intensity=o.intensity}return n(e),m(()=>e.color,()=>n(e)),m(()=>e.intensity,()=>n(e)),c({three:s}),{props:e,scene:r,three:s,applyProps:n}}}),ye={name:"PointLight",render:()=>null},Me=p({...ye,props:{castShadow:{type:Boolean,default:!1},color:{default:16777215},intensity:{default:1},position:{default:()=>[0,0,0]},rotation:{default:()=>[0,0,0]},scale:{default:()=>[1,1,1]}},setup(h,{expose:c}){const e=h,r=g("scene"),s=new X;r.add(s),_(e,"position",s),_(e,"rotation",s),_(e,"scale",s);function n(o){s.color=new y(o.color),s.intensity=o.intensity,s.castShadow=o.castShadow}return n(e),m(()=>e.color,()=>n(e)),m(()=>e.intensity,()=>n(e)),m(()=>e.castShadow,()=>n(e)),c({three:s}),{props:e,scene:r,three:s,applyProps:n}}}),$e={class:"example",style:{height:"200px"}},xe=p({__name:"Welcome",setup(h){const c=u([0,0,0]),e=u([0,0,0]),r=ie([]),s=u(1),n=u(1),o=u(1),f=u(1),M=new Y(10,0,0),$=u("rgb(255,0,0)"),x=u("rgb(255,0,0)"),P=u("rgb(255,0,0)");re(()=>{let i=24,v=3,z=2;for(let d=0;d<i;d++){const A=v*Math.cos(2*Math.PI/i*d),R=Math.sin(A),W=z*Math.sin(2*Math.PI/i*d)+R,k=v*Math.cos(2*Math.PI/i*(d+1)),F=Math.sin(k),J=z*Math.sin(2*Math.PI/i*(d+1))+F;r.push(A,W,0),r.push(k,J,0),r.push(0,0,1)}}),window.setInterval(()=>{const i=Date.now()/1e3;$.value=`rgb(${Math.round(Math.cos(i)*50+100)}, ${Math.round((Math.sin(i)+1)/2*200+50)}, 100)`,x.value=`rgb(${Math.round(Math.cos(i)*50+200)}, ${Math.round(Math.sin(i)*50+100)}, 50)`,P.value=`rgb(${Math.round(Math.cos(i*2)*100+100)}, 50, ${Math.round(Math.sin(i)*50+100)})`,f.value=Math.cos(i)+2,n.value=Math.sin(i*3)*3,o.value=Math.sin(i*2)*.5+1,s.value=Math.sin(i)+1,c.value=[Math.cos(i)-1,Math.sin(i),Math.sin(i)],e.value=[Math.cos(i)*Math.PI,0,0]},10);const N=u("cam1"),O=u({});return(i,v)=>(E(),B("div",$e,[a(t(te),{ref_key:"renderer",ref:O,camera:N.value,antialias:!0,"frame-limit":30,"shadow-map-enabled":""},{default:l(()=>[a(t(ae),{name:"cam1",position:[0,5,5],up:[0,0,1]},{default:l(()=>[a(t(D))]),_:1}),a(t(se),{name:"cam2"},{default:l(()=>[a(t(D))]),_:1}),a(t(Z),{background:"#f9f9f9"},{default:l(()=>[a(t(Me),{position:[0,0,10],intensity:.25,"cast-shadow":!0},null,8,["intensity"]),a(t(be),{color:16777215}),a(t(fe),{position:t(M)},{default:l(()=>[a(t(ve),{color:$.value,"size-attenuation":!1,size:4},null,8,["color"]),a(t(pe),{radius:f.value,"width-segments":12,"height-segments":12},null,8,["radius"])]),_:1},8,["position"]),a(t(b),{position:c.value,rotation:e.value,scale:[o.value,o.value,o.value],"cast-shadow":!0},{default:l(()=>[a(t(S),null,{default:l(()=>[a(t(ee),{url:"https://threejs.org/examples/textures/crate.gif"})]),_:1}),a(t(me),{width:s.value+1,height:s.value*2+1},null,8,["width","height"])]),_:1},8,["position","rotation","scale"]),a(t(b),{position:[-8,0,0],scale:[o.value+.5,1,n.value],"cast-shadow":!0},{default:l(()=>[a(t(S),{color:x.value,side:t(w)},null,8,["color","side"]),a(t(de),{name:"weirdGeo",vertices:r},null,8,["vertices"])]),_:1},8,["scale"]),a(t(j),{position:[-8,0,0],scale:[o.value+.5,1,n.value]},{default:l(()=>[a(t(V),{color:"black"}),a(t(C),{geometry:"weirdGeo"})]),_:1},8,["scale"]),a(t(b),{position:[0,0,-3],"receive-shadow":!0},{default:l(()=>[a(t(T),{color:"#aaa",side:t(w)},null,8,["side"]),a(t(_e),{name:"plane",width:20,height:5,"width-segments":3,"height-segments":3})]),_:1}),a(t(j),{position:[0,0,-3]},{default:l(()=>[a(t(V),{color:"black"}),a(t(C),{geometry:"plane"})]),_:1}),a(t(ue),{position:[3,0,0],rotation:[Math.PI/2,Math.cos(Date.now()/1e3)*Math.PI,0],scale:[20,20,20],url:"https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"},{default:l(()=>[a(t(T),{color:P.value,side:t(w)},null,8,["color","side"])]),_:1},8,["rotation"]),a(t(he),{size:3})]),_:1})]),_:1},8,["camera"])]))}}),Pe=L('<h1 id="drie" tabindex="-1">Drie <a class="header-anchor" href="#drie" aria-hidden="true">#</a></h1><p>Drie is a Vue 3 component library that makes it easy for developers to add 3D rendering to their web applications using the <a href="https://threejs.org/" target="_blank" rel="noreferrer"><code>three.js</code></a> library. It&#39;s written in TypeScript and uses the Composition API.</p><p>Drie allows for an intuitive and declarative approach to building complex 3D scenes and integrating them into both existing and new Vue projects. Drie aims to be the go-to choice for building 3D web applications with Vue and three.js.</p><p>To start using Drie see the <a href="/getting-started">Getting started</a> page.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2><p>Use mouse or touch to rotate the scene. This example illustrates capabilities of Drie.</p>',6),ze=L('<h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h2><p>Drie implements components for the common three.js classes. Some additional features not directly implemented in three.js are available as well.</p><p>Notable features include:</p><ul><li>Auto resizing of WebGL canvas (including PerspectiveCamera aspect ratio update)</li><li>Raycasting as mouse events</li><li>FPS Limiter</li><li>Simple usage of geometry utilities (see <a href="./components/Geometries/EdgesGeometry">EdgesGeometry</a> or <a href="./components/Geometries/WireframeGeometry">WireframeGeometry</a>)</li><li>Simple geometries (e.g., <a href="./components/Geometries/BoxGeometry">BoxGeometry</a>) have reactive properties. Drie handles regeneration of the geometry internally.</li></ul><h2 id="authors" tabindex="-1">Authors <a class="header-anchor" href="#authors" aria-hidden="true">#</a></h2>',5),Oe=JSON.parse('{"title":"Drie","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Authors","slug":"authors","link":"#authors","children":[]}],"relativePath":"index.md"}'),Ae={name:"index.md"},Re=Object.assign(Ae,{setup(h){const c=[{avatar:"https://avatars.githubusercontent.com/u/26581833",name:"Jan Vorisek",title:"Creator",links:[{icon:"github",link:"https://github.com/janvorisek"},{icon:"twitter",link:"https://twitter.com/janvorisekdev"}]}];return(e,r)=>{const s=le("ClientOnly");return E(),B("div",null,[Pe,a(s,null,{default:l(()=>[a(xe)]),_:1}),ze,a(t(ce),{size:"small",members:c})])}}});export{Oe as __pageData,Re as default};

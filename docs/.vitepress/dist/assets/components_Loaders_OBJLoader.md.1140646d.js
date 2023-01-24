import{_ as l,k as h,a as p}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.6d9097cd.js";import{_}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.fc33458a.js";import{_ as m}from"./chunks/OrbitControls.vue_vue_type_script_setup_true_lang.a7896d86.js";import{_ as f}from"./chunks/OBJLoader.vue_vue_type_script_setup_true_lang.79d08dda.js";import{_ as u}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.9b2db203.js";import{d as b,o,c as a,a as t,w as d,u as e,e as g,f as r}from"./app.ecc63a90.js";const v={class:"example"},k=b({__name:"OBJLoader",setup(s){return(n,i)=>(o(),a("div",v,[t(e(p),{ref:"renderer",antialias:!0},{default:d(()=>[t(e(_),{position:[3,3,5],up:[0,0,1]},{default:d(()=>[t(e(m))]),_:1}),t(e(l),{background:"#f9f9f9"},{default:d(()=>[t(e(f),{position:[0,0,-1.6],rotation:[Math.PI/2,Math.PI,0],scale:[20,20,20],url:"https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"},{default:d(()=>[t(e(h))]),_:1},8,["position","rotation"]),t(e(u),{size:3})]),_:1})]),_:1},512)]))}}),x=r('<h1 id="objloader" tabindex="-1">OBJLoader <a class="header-anchor" href="#objloader" aria-hidden="true">#</a></h1><p>This component manages <a href="https://threejs.org/docs/#examples/en/loaders/OBJLoader" target="_blank" rel="noreferrer"><code>THREE.OBJLoader</code></a>.</p><p><code>&lt;OBJLoader&gt;</code> behaves as a <a href="/components/Objects/Group"><code>&lt;Group&gt;</code></a> containing meshes loaded from the <code>.obj</code> file.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',4),L=r('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>castShadow </code></td><td>Whether the object gets rendered into shadow map.</td><td>boolean</td><td>false</td></tr><tr><td><code>position </code></td><td>A <a href="/types#vector3like">Vector3Like</a> representing the object&#39;s local position.</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>receiveShadow</code></td><td>Whether the material receives shadows.</td><td>boolean</td><td>false</td></tr><tr><td><code>rotation </code></td><td>A <a href="/types#vector3like">Vector3Like</a> representing local rotation (see Euler angles), in radians.</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>scale </code></td><td>A <a href="/types#vector3like">Vector3Like</a> representing the object&#39;s local scale.</td><td>Vector3Like</td><td>[1, 1, 1]</td></tr><tr><td><code>url </code></td><td>A string containing the path/URL of the <code>.obj</code> file.</td><td>string</td><td></td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Event name</th><th>Properties</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td><strong>group</strong> <code>Group</code> - An instance of <code>THREE.Group</code></td><td>Emitted when OBJ file is successfuly loaded, parsed and added to the scene.</td></tr><tr><td>progress</td><td></td><td>Emmited on XHR progress</td></tr><tr><td>error</td><td></td><td>Emitted on XHR error or OBJ parsing error</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td></td><td></td></tr></tbody></table><hr>',7),V=JSON.parse('{"title":"OBJLoader","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"components/Loaders/OBJLoader.md"}'),E={name:"components/Loaders/OBJLoader.md"},A=Object.assign(E,{setup(s){return(n,i)=>{const c=g("ClientOnly");return o(),a("div",null,[x,t(c,null,{default:d(()=>[t(k)]),_:1}),L])}}});export{V as __pageData,A as default};

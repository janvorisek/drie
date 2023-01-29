import{_ as i,a as h}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.e293ee15.js";import{_ as u}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.625208db.js";import{_ as m}from"./chunks/OrbitControls.vue_vue_type_script_setup_true_lang.7ef495bc.js";import{_ as a}from"./chunks/GLTFLoader.vue_vue_type_script_setup_true_lang.2437bfc2.js";import{_}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.5b8f6858.js";import{_ as F}from"./chunks/AmbientLight.vue_vue_type_script_setup_true_lang.9608a7e1.js";import{d as y,o as s,c as n,a as e,w as o,u as t,e as f,f as r}from"./app.aa0e4490.js";const g={class:"example"},b=y({__name:"GLTFLoader",setup(d){return(l,c)=>(s(),n("div",g,[e(t(h),{ref:"renderer",antialias:!0},{default:o(()=>[e(t(u),{position:[3,3,5],up:[0,0,1]},{default:o(()=>[e(t(m))]),_:1}),e(t(i),{background:"#f9f9f9"},{default:o(()=>[e(t(F)),e(t(a),{url:"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb",position:[0,-3,0],scale:[100,100,100]}),e(t(a),{url:"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lantern/glTF-Binary/Lantern.glb",position:[2,-4,0],scale:[.1,.1,.1],rotation:[Math.PI/2,Math.PI,0]},null,8,["scale","rotation"]),e(t(_),{size:3})]),_:1})]),_:1},512)]))}}),D=r('<h1 id="gltfloader" tabindex="-1">GLTFLoader <a class="header-anchor" href="#gltfloader" aria-hidden="true">#</a></h1><p>This component asynchronously loads glTF file. Assets may be provided either in JSON (<code>.gltf</code>) or binary (<code>.glb</code>) format. External files store textures (<code>.jpg</code>, <code>.png</code>) and additional binary data (<code>.bin</code>).</p><p>A glTF asset may deliver one or more scenes, including meshes, materials, textures, skins, skeletons, morph targets, animations, lights, and/or cameras.</p><p><code>&lt;GLTFLoader&gt;</code> behaves as a <a href="/components/Objects/Group"><code>&lt;Group&gt;</code></a>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',5),T=r(`<div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GLTFLoader</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">position</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">, -</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">scale</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>castShadow </code></td><td>Whether the object gets rendered into shadow map.</td><td>boolean</td><td>false</td></tr><tr><td><code>enableRaycasting</code></td><td>Component will emit mouse events when raycasting is enabled</td><td>boolean</td><td>false</td></tr><tr><td><code>onClick </code></td><td>Callback to be fired when Group content clicked.</td><td>TSFunctionType</td><td>() =&gt; null</td></tr><tr><td><code>onMouseMove </code></td><td>Callback to be fired when mouse-moving over Group content.</td><td>TSFunctionType</td><td>() =&gt; null</td></tr><tr><td><code>onMouseEnter </code></td><td>Callback to be fired when Group content entered by mouse.</td><td>TSFunctionType</td><td>() =&gt; null</td></tr><tr><td><code>onMouseLeave </code></td><td>Callback to be fired when Group content left by mouse.</td><td>TSFunctionType</td><td>() =&gt; null</td></tr><tr><td><code>position </code></td><td>A <a href="/types#vector3like">Vector3Like</a> representing the object&#39;s local position.</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>receiveShadow </code></td><td>Whether the material receives shadows.</td><td>boolean</td><td>false</td></tr><tr><td><code>rotation </code></td><td>A <a href="/types#vector3like">Vector3Like</a> representing local rotation (see Euler angles), in radians.</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>scale </code></td><td>A <a href="/types#vector3like">Vector3Like</a> representing the object&#39;s local scale.</td><td>Vector3Like</td><td>[1, 1, 1]</td></tr><tr><td><code>url </code></td><td>A string containing the path/URL of the <code>.obj</code> file.</td><td>string</td><td></td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Event name</th><th>Properties</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td><strong>group</strong> <code>Group</code> - An instance of <code>THREE.Group</code></td><td>Emitted when OBJ file is successfuly loaded, parsed and added to the scene.</td></tr><tr><td>progress</td><td></td><td>Emmited on XHR progress</td></tr><tr><td>error</td><td></td><td>Emitted on XHR error or OBJ parsing error</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td></td><td></td></tr></tbody></table><h2 id="expose" tabindex="-1">Expose <a class="header-anchor" href="#expose" aria-hidden="true">#</a></h2><h3 id="three" tabindex="-1">three <a class="header-anchor" href="#three" aria-hidden="true">#</a></h3><blockquote><p>Exposes <code>THREE.Group</code> entity containing Mesh[] loaded by the <code>GLTFLoader</code></p></blockquote><hr>`,11),S=JSON.parse('{"title":"GLTFLoader","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Expose","slug":"expose","link":"#expose","children":[{"level":3,"title":"three","slug":"three","link":"#three","children":[]}]}],"relativePath":"components/Loaders/GLTFLoader.md"}'),v={name:"components/Loaders/GLTFLoader.md"},w=Object.assign(v,{setup(d){return(l,c)=>{const p=f("ClientOnly");return s(),n("div",null,[D,e(p,null,{default:o(()=>[e(b)]),_:1}),T])}}});export{S as __pageData,w as default};
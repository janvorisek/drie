import{_ as D,a as F,k as y,D as i,b as d}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.d1345e8b.js";import{_ as m}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.f6d7f253.js";import{_ as C}from"./chunks/LineSegments.vue_vue_type_script_setup_true_lang.bb0ce6a4.js";import{_ as u}from"./chunks/Mesh.vue_vue_type_script_setup_true_lang.25d355a3.js";import{_}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.83ea3ce6.js";import{_ as h}from"./chunks/RingGeometry.vue_vue_type_script_setup_true_lang.cfb8c6f4.js";import{_ as A}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.5e9d9a4e.js";import{_ as f}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.83f18775.js";import{d as g,o,c as e,a as s,w as n,u as a,e as b,f as l}from"./app.35f292b2.js";const E={class:"example"},q=g({__name:"RingGeometry",setup(t){return(p,r)=>(o(),e("div",E,[s(a(d),{ref:"renderer",antialias:!0},{default:n(()=>[s(a(m),{position:[3,3,4],up:[0,0,1]},{default:n(()=>[s(a(D))]),_:1}),s(a(F),{background:"#f9f9f9"},{default:n(()=>[s(a(u),null,{default:n(()=>[s(a(y),{side:a(i)},null,8,["side"]),s(a(h),{name:"geo","inner-radius":1.5,"outer-radius":3},null,8,["inner-radius"])]),_:1}),s(a(C),null,{default:n(()=>[s(a(A),{geometry:"geo"}),s(a(f),{color:"black"})]),_:1}),s(a(_),{size:3})]),_:1})]),_:1},512)]))}}),v=l('<h1 id="ringgeometry" tabindex="-1">RingGeometry <a class="header-anchor" href="#ringgeometry" aria-hidden="true">#</a></h1><p><code>RingGeometry</code> is a simple component for a two-dimensional ring geometry.</p><p>Any modifications to the properties will update the underlying <a href="https://threejs.org/docs/#api/en/core/BufferGeometry" target="_blank" rel="noreferrer"><code>THREE.BufferGeometry</code></a>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',4),R=l(`<details class="details custom-block"><summary>Click me to view the example code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width: 100vh; height: 100vh;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Renderer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:antialias</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PerspectiveCamera</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:position</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[3, 3, 3]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:up</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0, 0, 1]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">OrbitControls</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PerspectiveCamera</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Scene</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">background</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#f9f9f9</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Mesh</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MeshNormalMaterial</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:side</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DoubleSide</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">RingGeometry</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Mesh</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Scene</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Renderer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DoubleSide</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Renderer</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Scene</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@janvorisek/drie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PerspectiveCamera</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">OrbitControls</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@janvorisek/drie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Mesh</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">RingGeometry</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MeshNormalMaterial</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@janvorisek/drie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name </code></td><td>Name of the geometry.</td><td>string</td><td>&quot;&quot;</td></tr><tr><td><code>innerRadius </code></td><td>Inner radius of the ring.<br>Must be smaller than <code>outerRadius</code>.</td><td>number</td><td>0.5</td></tr><tr><td><code>outerRadius </code></td><td>Outer radius of the ring.<br>Must be greater than <code>innerRadius</code>.</td><td>number</td><td>1</td></tr><tr><td><code>thetaSegments</code></td><td>Number of radial segments.<br>A higher number means the ring will be more round<br>Minimum value is <code>3</code>.</td><td>number</td><td>32</td></tr><tr><td><code>phiSegments </code></td><td>Number of segments over the ring thickness.</td><td>number</td><td>1</td></tr><tr><td><code>thetaStart </code></td><td>Start angle for first segment.</td><td>number</td><td>0</td></tr><tr><td><code>thetaLength </code></td><td>The central angle, often called theta, of the circular sector.<br>The default is <code>2π</code>, which makes for a complete circle.</td><td>number</td><td>2 * Math.PI</td></tr></tbody></table><hr>`,4),O=JSON.parse('{"title":"RingGeometry","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/Geometries/RingGeometry.md"}'),S={name:"components/Geometries/RingGeometry.md"},I=Object.assign(S,{setup(t){return(p,r)=>{const c=b("ClientOnly");return o(),e("div",null,[v,s(c,null,{default:n(()=>[s(q)]),_:1}),R])}}});export{O as __pageData,I as default};
import{_ as D,a as i,k as F,b as y}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.fc97b491.js";import{_ as d}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.8e1261b2.js";import{_ as m}from"./chunks/OBJLoader.vue_vue_type_script_setup_true_lang.c7f525b0.js";import{_ as C}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.acfcb8b0.js";import{d as u,o,c as t,a as s,w as n,u as a,e as h,f as l}from"./app.97673a72.js";const A={class:"example"},b=u({__name:"OrbitControls",setup(e){return(p,r)=>(o(),t("div",A,[s(a(y),{ref:"renderer",antialias:!0},{default:n(()=>[s(a(d),{position:[5,5,5],up:[0,0,1]},{default:n(()=>[s(a(D))]),_:1}),s(a(i),{background:"#f9f9f9"},{default:n(()=>[s(a(m),{position:[0,0,-.6],rotation:[Math.PI/2,Math.PI,0],scale:[20,20,20],url:"https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj"},{default:n(()=>[s(a(F))]),_:1},8,["position","rotation"]),s(a(C),{size:3})]),_:1})]),_:1},512)]))}}),f=l('<h1 id="orbitcontrols" tabindex="-1">OrbitControls <a class="header-anchor" href="#orbitcontrols" aria-hidden="true">#</a></h1><p>This component manages <a href="https://threejs.org/docs/#examples/en/controls/OrbitControls" target="_blank" rel="noreferrer"><code>THREE.OrbitControls</code></a>.</p><p><code>&lt;OrbitControls&gt;</code> must be passed to <a href="/components/Cameras/PerspectiveCamera"><code>&lt;PerspectiveCamera&gt;</code></a> or <a href="/components/Cameras/OrthographicCamera"><code>&lt;OrthographicCamera&gt;</code></a></p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',4),_=l(`<details class="details custom-block"><summary>Click me to view the example code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width: 100vh; height: 100vh;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Renderer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:antialias</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PerspectiveCamera</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:position</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[5, 5, 5]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:up</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0, 0, 1]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">OrbitControls</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PerspectiveCamera</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Scene</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">background</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#f9f9f9</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">OBJLoader</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:position</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0, 0, -0.6]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:rotation</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[Math.PI / 2, Math.PI, 0]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">:scale</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[20, 20, 20]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://raw.githubusercontent.com/alecjacobson/common-3d-test-models/master/data/stanford-bunny.obj</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MeshNormalMaterial</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">OBJLoader</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">AxesHelper</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Scene</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Renderer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Renderer</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Scene</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@janvorisek/drie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PerspectiveCamera</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">OrbitControls</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@janvorisek/drie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">OBJLoader</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MeshNormalMaterial</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@janvorisek/drie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">AxesHelper</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@janvorisek/drie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>enablePan </code></td><td>Enable or disable camera panning.</td><td>boolean</td><td>true</td></tr><tr><td><code>enableRotate </code></td><td>Enable or disable horizontal and vertical rotation of the camera.<br>Note that it is possible to disable a single axis by setting the min and max of the polar angle or azimuth angle to the same value, which will cause the vertical or horizontal rotation to be fixed at that value.</td><td>boolean</td><td>true</td></tr><tr><td><code>enableZoom </code></td><td>Enable or disable zooming (dollying) of the camera.</td><td>boolean</td><td>true</td></tr><tr><td><code>minZoom </code></td><td>How far you can zoom in.<br><code>OrthographicCamera</code> only.</td><td>number</td><td>0</td></tr><tr><td><code>maxZoom </code></td><td>How far you can zoom out.<br><code>OrthographicCamera</code> only.</td><td>number</td><td>Infinity</td></tr><tr><td><code>minDistance </code></td><td>How far you can dolly in.<br><code>PerspectiveCamera</code> only.</td><td>number</td><td>0</td></tr><tr><td><code>maxDistance </code></td><td>How far you can dolly out.<br><code>PerspectiveCamera</code> only.</td><td>number</td><td>Infinity</td></tr><tr><td><code>minPolarAngle </code></td><td>How far you can orbit vertically, lower limit.<br>Range is 0 to Math.PI radians</td><td>number</td><td>0</td></tr><tr><td><code>maxPolarAngle </code></td><td>How far you can orbit vertically, upper limit.<br>Range is 0 to Math.PI radians</td><td>number</td><td>Math.PI</td></tr><tr><td><code>minAzimuthAngle</code></td><td>How far you can orbit horizontally, lower limit.<br>If set, the interval [min, max] must be a sub-interval of [-2π, 2π], with (max - min &lt; 2π).</td><td>number</td><td>Infinity</td></tr><tr><td><code>maxAzimuthAngle</code></td><td>How far you can orbit horizontally, upper limit.<br>If set, the interval [min, max] must be a sub-interval of [-2π, 2π], with (max - min &lt; 2π).</td><td>number</td><td>Infinity</td></tr><tr><td><code>target </code></td><td>The focus point of the controls.</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr></tbody></table><hr>`,4),O=JSON.parse('{"title":"OrbitControls","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/Controls/OrbitControls.md"}'),g={name:"components/Controls/OrbitControls.md"},w=Object.assign(g,{setup(e){return(p,r)=>{const c=h("ClientOnly");return o(),t("div",null,[f,s(c,null,{default:n(()=>[s(b)]),_:1}),_])}}});export{O as __pageData,w as default};
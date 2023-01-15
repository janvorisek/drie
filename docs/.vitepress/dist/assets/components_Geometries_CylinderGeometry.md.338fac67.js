import{B as q,d as e,q as S,j as v,_ as T,a as k,k as G,D as P,b as x}from"./chunks/TextureLoader.vue_vue_type_script_setup_true_lang.e80ec362.js";import{_ as M}from"./chunks/PerspectiveCamera.vue_vue_type_script_setup_true_lang.a2c8e4b6.js";import{_ as $,a as B,b as w}from"./chunks/LineBasicMaterial.vue_vue_type_script_setup_true_lang.f718c98b.js";import{_ as N}from"./chunks/AxesHelper.vue_vue_type_script_setup_true_lang.4be33d3d.js";import{d as i,i as d,k as R,o as m,c as u,a,w as l,u as n,e as I,f as h}from"./app.532ca5b6.js";import{_ as j}from"./chunks/WireframeGeometry.vue_vue_type_script_setup_true_lang.6bc8460b.js";const O={name:"CylinderGeometry",render:()=>null},V=i({...O,props:{name:{default:""},radiusTop:{default:1},radiusBottom:{default:1},height:{default:1},radialSegments:{default:32},heightSegments:{default:1},openEnded:{type:Boolean,default:!1},thetaStart:{default:0},thetaLength:{default:2*Math.PI}},setup(r,{expose:c}){const s=r,p=d("mesh");function y(D,C,f,A,_,g,E,b){return new S(D,C,f,A,_,g,E,b)}const t=R(new q);t.name=s.name,p.geometry=t;const F=d("addGeometry");F(t);function o(){const D=y(s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);v(t,D)}return o(),e(s,"radiusTop",o),e(s,"radiusBottom",o),e(s,"height",o),e(s,"radialSegments",o),e(s,"heightSegments",o),e(s,"openEnded",o),e(s,"thetaStart",o),e(s,"thetaLength",o),c({three:t}),{props:s,mesh:p,makeCylinder:y,three:t,addGeometry:F,redoGeometry:o}}}),L={class:"example"},H=i({__name:"CylinderGeometry",setup(r){return(c,s)=>(m(),u("div",L,[a(n(x),{ref:"renderer",antialias:!0},{default:l(()=>[a(n(M),{position:[4,4,7],up:[0,0,1]},{default:l(()=>[a(n(T))]),_:1}),a(n(k),{background:"#f9f9f9"},{default:l(()=>[a(n($),{rotation:[Math.PI/2,0,0]},{default:l(()=>[a(n(G),{side:n(P)},null,8,["side"]),a(n(V),{name:"geo","radius-top":2,"radius-bottom":2,height:5,"radial-segments":12})]),_:1},8,["rotation"]),a(n(B),{rotation:[Math.PI/2,0,0]},{default:l(()=>[a(n(j),{geometry:"geo"}),a(n(w),{color:"black"})]),_:1},8,["rotation"]),a(n(N),{size:5})]),_:1})]),_:1},512)]))}}),z=h('<h1 id="cylindergeometry" tabindex="-1">CylinderGeometry <a class="header-anchor" href="#cylindergeometry" aria-hidden="true">#</a></h1><p><code>CylinderGeometry</code> is a simple component for creating a cylinder with given <code>topRadius</code>, <code>bottomRadius</code> and <code>height</code>.</p><p>Any modifications to the properties will update the underlying <a href="https://threejs.org/docs/#api/en/core/BufferGeometry" target="_blank" rel="noreferrer"><code>THREE.BufferGeometry</code></a>.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',4),J=h(`<details class="details custom-block"><summary>Click me to view the example code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width: 100vh; height: 100vh;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Renderer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">renderer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:antialias</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">PerspectiveCamera</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:position</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[4, 4, 7]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:up</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0, 0, 1]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">OrbitControls</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">PerspectiveCamera</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Scene</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">background</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#f9f9f9</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Mesh</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:rotation</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[Math.PI / 2, 0, 0]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MeshNormalMaterial</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:side</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">DoubleSide</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">CylinderGeometry</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">geo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:radius-top</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:radius-bottom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:radial-segments</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
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
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Mesh</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CylinderGeometry</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MeshNormalMaterial</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@janvorisek/drie</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></details><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name </code></td><td>Name of the geometry.</td><td>string</td><td>&quot;&quot;</td></tr><tr><td><code>radiusTop </code></td><td>Radius of the cylinder at the top.</td><td>number</td><td>1</td></tr><tr><td><code>radiusBottom </code></td><td>Radius of the cylinder at the bottom.</td><td>number</td><td>1</td></tr><tr><td><code>height </code></td><td>Height of the cylinder.</td><td>number</td><td>1</td></tr><tr><td><code>radialSegments</code></td><td>Number of segmented faces around the circumference of the cylinder.<br>Minimum value is <code>3</code>.</td><td>number</td><td>32</td></tr><tr><td><code>heightSegments</code></td><td>Number of rows of faces along the height of the cylinder.<br>Minimum value is <code>3</code>.</td><td>number</td><td>1</td></tr><tr><td><code>openEnded </code></td><td>A Boolean indicating whether the base of the cylinder is open or capped.<br>Default is <code>false</code>, meaning capped.</td><td>boolean</td><td>false</td></tr><tr><td><code>thetaStart </code></td><td>Start angle for first segment.</td><td>number</td><td>0</td></tr><tr><td><code>thetaLength </code></td><td>The central angle, often called theta, of the circular sector.<br>The default is <code>2π</code>, which makes for a complete cylinder.</td><td>number</td><td>2 * Math.PI</td></tr></tbody></table><hr>`,4),ss=JSON.parse('{"title":"CylinderGeometry","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/Geometries/CylinderGeometry.md"}'),K={name:"components/Geometries/CylinderGeometry.md"},as=Object.assign(K,{setup(r){return(c,s)=>{const p=I("ClientOnly");return m(),u("div",null,[z,a(p,null,{default:l(()=>[a(H)]),_:1}),J])}}});export{ss as __pageData,as as default};

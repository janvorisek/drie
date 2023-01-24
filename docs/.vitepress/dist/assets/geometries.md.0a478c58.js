import{_ as e,o as s,c as a,f as l}from"./app.a90b9b83.js";const d=JSON.parse('{"title":"Geometries","description":"","frontmatter":{},"headers":[],"relativePath":"geometries.md"}'),n={name:"geometries.md"},o=l(`<h1 id="geometries" tabindex="-1">Geometries <a class="header-anchor" href="#geometries" aria-hidden="true">#</a></h1><p>Geometry components are simply passed to the corresponding mesh.</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-BaLcG" id="tab-ErkSmzn" checked="checked"><label for="tab-ErkSmzn">Mesh</label><input type="radio" name="group-BaLcG" id="tab-qzvKA2w"><label for="tab-qzvKA2w">Points</label><input type="radio" name="group-BaLcG" id="tab-cdyl6gW"><label for="tab-cdyl6gW">LineSegments</label></div><div class="blocks"><div class="language-template active"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Mesh</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MeshBasicMaterial</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">BoxGeometry</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Mesh</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Points</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PointsMaterial</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">SphereGeometry</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Points</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">LineSegments</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">LineBasicMaterial</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">black</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PlaneGeometry</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">LineSegments</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></div></div><p>General <a href="/components/Geometries/BufferGeometry">BufferGeometry</a> is available with reactive vertices, faces and uvs support. The props are passed as flat arrays.</p><p>The following basic geometries are supported:</p><ul><li><a href="./components/Geometries/BoxGeometry">BoxGeometry</a></li><li><a href="./components/Geometries/CircleGeometry">CircleGeometry</a></li><li><a href="./components/Geometries/ConeGeometry">ConeGeometry</a></li><li><a href="./components/Geometries/CylinderGeometry">CylinderGeometry</a></li><li><a href="./components/Geometries/PlaneGeometry">PlaneGeometry</a></li><li><a href="./components/Geometries/RingGeometry">RingGeometry</a></li><li><a href="./components/Geometries/SphereGeometry">SphereGeometry</a></li></ul><p>Some utility geometries are supported as well:</p><ul><li><a href="./components/Geometries/EdgesGeometry">EdgesGeometry</a></li><li><a href="./components/Geometries/WireframeGeometry">WireframeGeometry</a></li></ul><p>Additional geometries are implemented:</p><ul><li><a href="./components/Geometries/ParametricGeometry">ParametricGeometry</a></li></ul>`,10),t=[o];function p(r,i,c,y,F,m){return s(),a("div",null,t)}const h=e(n,[["render",p]]);export{d as __pageData,h as default};

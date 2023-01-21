import{_ as t,o as e,c as d,f as a}from"./app.aca0c04b.js";const f=JSON.parse('{"title":"InstancedMesh","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"components/Objects/InstancedMesh.md"}'),r={name:"components/Objects/InstancedMesh.md"},o=a('<h1 id="instancedmesh" tabindex="-1">InstancedMesh <a class="header-anchor" href="#instancedmesh" aria-hidden="true">#</a></h1><p>A special version of Mesh with instanced rendering support. Use InstancedMesh if you have to render a large number of objects with the same geometry and material but with different world transformations. The usage of InstancedMesh will help you to reduce the number of draw calls and thus improve the overall rendering performance in your application.</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>castShadow </code></td><td>Whether the object gets rendered into shadow map.</td><td>boolean</td><td>false</td></tr><tr><td><code>count </code></td><td>The number of instances.</td><td>number</td><td></td></tr><tr><td><code>geometry </code></td><td>Optional name of the geometry.<br>This allows reusing of the geometry.</td><td>union</td><td>null</td></tr><tr><td><code>material </code></td><td>Optional name of the material.<br>This allows reusing of the material.</td><td>union</td><td>null</td></tr><tr><td><code>receiveShadow</code></td><td>Whether the material receives shadows.</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td></td><td></td></tr></tbody></table><hr>',7),s=[o];function n(h,i,c,l,p,m){return e(),d("div",null,s)}const _=t(r,[["render",n]]);export{f as __pageData,_ as default};

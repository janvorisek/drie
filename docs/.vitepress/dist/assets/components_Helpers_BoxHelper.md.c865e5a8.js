import{_ as e,o as t,c as d,a as r}from"./app.b0bbb7e4.js";const m=JSON.parse('{"title":"BoxHelper","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":2,"title":"Expose","slug":"expose","link":"#expose","children":[{"level":3,"title":"three","slug":"three","link":"#three","children":[]}]}],"relativePath":"components/Helpers/BoxHelper.md"}'),o={name:"components/Helpers/BoxHelper.md"},a=r('<h1 id="boxhelper" tabindex="-1">BoxHelper <a class="header-anchor" href="#boxhelper" aria-hidden="true">#</a></h1><p>Helper object to graphically show the world-axis-aligned bounding box around an object.</p><p>Ulike the three.js helper, this component crates a box mesh around the target mesh.</p><p>If you are interested in showing line segments around, you can use transparent BoxHelper in combination with LineSegments and EdgesGeometry.</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>castShadow </code></td><td>Whether the object gets rendered into shadow map.</td><td>boolean</td><td>false</td></tr><tr><td><code>material </code></td><td>Optional name of the material.<br>This allows reusing of the material.</td><td>union</td><td>null</td></tr><tr><td><code>mesh </code></td><td>Name of the target mesh.</td><td>string</td><td>&quot;&quot;</td></tr><tr><td><code>name </code></td><td>Name of the box Mesh.</td><td>string</td><td>&quot;&quot;</td></tr><tr><td><code>position </code></td><td>A <a href="/advanced/types#vector3like">Vector3Like</a> representing the object&#39;s local position.</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>receiveShadow</code></td><td>Whether the material receives shadows.</td><td>boolean</td><td>false</td></tr><tr><td><code>rotation </code></td><td>A <a href="/advanced/types#vector3like">Vector3Like</a> representing local rotation (see Euler angles), in radians.</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>scale </code></td><td>A <a href="/advanced/types#vector3like">Vector3Like</a> representing the object&#39;s local scale.</td><td>Vector3Like</td><td>[1, 1, 1]</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td></td><td></td></tr></tbody></table><h2 id="expose" tabindex="-1">Expose <a class="header-anchor" href="#expose" aria-hidden="true">#</a></h2><h3 id="three" tabindex="-1">three <a class="header-anchor" href="#three" aria-hidden="true">#</a></h3><blockquote></blockquote><hr>',12),s=[a];function n(h,i,l,c,p,u){return t(),d("div",null,s)}const _=e(o,[["render",n]]);export{m as __pageData,_ as default};

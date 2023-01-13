import{_ as e,o as t,c as r,f as o}from"./app.2b92af8d.js";const g=JSON.parse('{"title":"Group","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[]}],"relativePath":"components/Objects/Group.md"}'),s={name:"components/Objects/Group.md"},d=o('<h1 id="group" tabindex="-1">Group <a class="header-anchor" href="#group" aria-hidden="true">#</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>enableRaycasting</code></td><td>Component will emit mouse events when raycasting is enabled</td><td>boolean</td><td>false</td></tr><tr><td><code>position </code></td><td>A <a href="/types#vector3like">Vector3Like</a> representing the object&#39;s local position.</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>rotation </code></td><td>A <a href="/types#vector3like">Vector3Like</a> representing local rotation (see Euler angles), in radians.</td><td>Vector3Like</td><td>[0, 0, 0]</td></tr><tr><td><code>scale </code></td><td>A <a href="/types#vector3like">Vector3Like</a> representing the object&#39;s local scale.</td><td>Vector3Like</td><td>[1, 1, 1]</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>Event name</th><th>Properties</th><th>Description</th></tr></thead><tbody><tr><td>click</td><td><strong>is</strong> <code>Intersection[]</code> - An array of <a href="https://github.com/three-types/three-ts-types/blob/master/types/three/src/core/Raycaster.d.ts#L16" target="_blank" rel="noreferrer"><code>Intersection</code></a> being clicked.<br><strong>pointer</strong> <code>Vector2</code> - A <code>THREE.Vector2</code> representing relative element coordinates on the canvas</td><td>Emitted when Object3Ds are clicked.</td></tr><tr><td>mousemove</td><td><strong>is</strong> <code>Intersection[]</code> - An array of <a href="https://github.com/three-types/three-ts-types/blob/master/types/three/src/core/Raycaster.d.ts#L16" target="_blank" rel="noreferrer"><code>Intersection</code></a> mousemoved over.<br><strong>pointer</strong> <code>Vector2</code> - A <code>THREE.Vector2</code> representing relative element coordinates on the canvas</td><td>Emitted when mouse is moved over Object3Ds.</td></tr><tr><td>mouseenter</td><td><strong>is</strong> <code>Intersection[]</code> - An array of <a href="https://github.com/three-types/three-ts-types/blob/master/types/three/src/core/Raycaster.d.ts#L16" target="_blank" rel="noreferrer"><code>Intersection</code></a> entered by mouse.<br><strong>pointer</strong> <code>Vector2</code> - A <code>THREE.Vector2</code> representing relative element coordinates on the canvas</td><td>Emitted when mouse enters Object3Ds.</td></tr><tr><td>mouseleave</td><td><strong>is</strong> <code>Intersection[]</code> - An array of <a href="https://github.com/three-types/three-ts-types/blob/master/types/three/src/core/Raycaster.d.ts#L16" target="_blank" rel="noreferrer"><code>Intersection</code></a> left by mouse.<br><strong>pointer</strong> <code>Vector2</code> - A <code>THREE.Vector2</code> representing relative element coordinates on the canvas</td><td>Emitted when mouse leaves Object3Ds.</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td></td><td></td></tr></tbody></table><hr>',8),n=[d];function a(c,i,h,l,p,b){return t(),r("div",null,n)}const u=e(s,[["render",a]]);export{g as __pageData,u as default};

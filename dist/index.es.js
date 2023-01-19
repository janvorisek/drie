import { watch as S, inject as p, onMounted as be, onUnmounted as Z, defineComponent as P, reactive as U, ref as ne, provide as A, openBlock as ht, createElementBlock as gt, Fragment as yt, renderSlot as k, createElementVNode as bt, nextTick as ce } from "vue";
import { Vector3 as z, Raycaster as $e, Vector2 as N, WebGLRenderer as _t, Scene as wt, Color as Y, PerspectiveCamera as vt, OrthographicCamera as Lt, EventDispatcher as Pt, MOUSE as Q, TOUCH as ee, Quaternion as je, Spherical as Ne, Group as _e, BufferGeometry as R, LineBasicMaterial as X, Line as Mt, LineLoop as St, LineSegments as ge, MeshBasicMaterial as Qe, Mesh as ye, PointsMaterial as ae, Points as le, Loader as Et, FileLoader as xt, Float32BufferAttribute as te, Material as Ue, MeshPhongMaterial as At, AxesHelper as Ot, BoxGeometry as Ct, BufferAttribute as Ve, CircleGeometry as Tt, ConeGeometry as Gt, CylinderGeometry as Rt, EdgesGeometry as zt, PlaneGeometry as kt, RingGeometry as Dt, SphereGeometry as It, WireframeGeometry as Bt, LineDashedMaterial as $t, FrontSide as we, MeshLambertMaterial as jt, MeshNormalMaterial as Nt, AmbientLight as Ut, PointLight as Vt, ClampToEdgeWrapping as Fe, Texture as Ft, TextureLoader as Ht } from "three";
const He = (r) => r === void 0 ? new z(0, 0, 0) : "x" in r ? new z(r.x, r.y, r.z) : new z(r[0], r[1], r[2]), Ye = (r, o, e) => {
  e[r].isVector3 ? e[r].set(o.x, o.y, o.z) : "isEuler" in e[r] && e[r].setFromVector3(o);
}, v = (r, o, e, t = !0) => {
  if (e !== null) {
    if (r[o] !== void 0) {
      const n = He(r[o]);
      Ye(o, n, e);
    }
    t && S(
      () => r[o],
      () => {
        if (r[o] !== void 0) {
          const n = He(r[o]);
          Ye(o, n, e);
        }
      }
    );
  }
}, u = (r, o, e) => {
  S(
    () => r[o],
    () => {
      e();
    }
  );
};
function V(r, o) {
  o.hasAttribute("position") && (r.setAttribute("position", o.getAttribute("position")), r.attributes.position.needsUpdate = !0, r.computeVertexNormals(), r.computeBoundingBox(), r.computeBoundingSphere()), o.hasAttribute("normal") && (r.setAttribute("normal", o.getAttribute("normal")), r.attributes.normal.needsUpdate = !0), o.hasAttribute("uv") && (r.setAttribute("uv", o.getAttribute("uv")), r.attributes.uv.needsUpdate = !0), r.setIndex(o.getIndex());
}
function W(r) {
  if (r.children.length > 0)
    for (let o = r.children.length - 1; o >= 0; o--)
      W(r.children[o]);
  if (r.geometry && r.geometry.dispose(), r.material)
    if (r.material.length)
      for (let o = 0; o < r.material.length; ++o)
        r.material[o].map && r.material[o].map.dispose(), r.material[o].lightMap && r.material[o].lightMap.dispose(), r.material[o].bumpMap && r.material[o].bumpMap.dispose(), r.material[o].normalMap && r.material[o].normalMap.dispose(), r.material[o].specularMap && r.material[o].specularMap.dispose(), r.material[o].envMap && r.material[o].envMap.dispose(), r.material[o].dispose();
    else
      r.material.map && r.material.map.dispose(), r.material.lightMap && r.material.lightMap.dispose(), r.material.bumpMap && r.material.bumpMap.dispose(), r.material.normalMap && r.material.normalMap.dispose(), r.material.specularMap && r.material.specularMap.dispose(), r.material.envMap && r.material.envMap.dispose(), r.material.dispose();
  return r.removeFromParent(), !0;
}
function oe(r) {
  const o = p("scene"), e = p("parent", void 0);
  be(() => {
    e ? e.add(r) : o.add(r);
  }), Z(() => {
    e ? e.remove(r) : o.remove(r);
  });
}
function Yt(r, o, e) {
  const t = p("camera"), n = p("canvas");
  p("scene");
  const a = (f) => {
    const y = new $e(), m = Ze(f);
    y.setFromCamera(m, t.value);
    const b = y.intersectObjects(r);
    b.length > 0 && e("click", b, m);
  };
  let s = !1, i = [];
  const c = (f) => {
    const y = new $e(), m = Ze(f);
    y.setFromCamera(m, t.value);
    const b = y.intersectObjects(r);
    b.length > 0 ? (i = b, s === !1 && e("mouseenter", b, m), s = !0, e("mousemove", b, m)) : (s && e("mouseleave", i, m), s = !1, i = []);
  };
  be(() => {
    if (o.enableRaycasting) {
      if ((n == null ? void 0 : n.value) == null)
        return;
      n == null || n.value.addEventListener("click", a), n == null || n.value.addEventListener("mousemove", c);
    }
  }), Z(() => {
    if (o.enableRaycasting) {
      if ((n == null ? void 0 : n.value) == null)
        return;
      n == null || n.value.removeEventListener("click", a), n == null || n.value.removeEventListener("mousemove", c);
    }
  }), S(
    () => o.enableRaycasting,
    (f) => {
      f ? (n == null || n.value.addEventListener("click", a), n == null || n.value.addEventListener("mousemove", c)) : (n == null || n.value.removeEventListener("click", a), n == null || n.value.removeEventListener("mousemove", c));
    }
  );
}
function Ze(r) {
  const o = new N(), e = r.currentTarget.getBoundingClientRect();
  return o.x = (r.clientX - e.left) / e.width * 2 - 1, o.y = -((r.clientY - e.top) / e.height) * 2 + 1, o;
}
const Zt = /* @__PURE__ */ P({
  __name: "Renderer",
  props: {
    camera: null,
    autoResize: { type: Boolean, default: !0 },
    onBeforeRender: { type: Function, default: () => {
    } },
    antialias: { type: Boolean, default: !1 },
    frameLimit: { default: 60 },
    alpha: { type: Boolean, default: !1 },
    shadowMapEnabled: { type: Boolean, default: !1 }
  },
  setup(r, { expose: o }) {
    const e = r;
    let t = null;
    const n = [], a = U([]);
    let s = ne(null);
    const i = ne([]), c = ne([]), f = ne();
    A("canvas", f);
    let y = Date.now(), m = 1e3 / e.frameLimit;
    S(
      () => e.camera,
      (h) => b(h)
    );
    const b = (h) => {
      if (h) {
        const M = i.value.find((L) => L.name === h);
        M === void 0 && (s.value = null), s.value = M;
      } else
        s.value = i.value[0];
    };
    function d(h) {
      t !== null && (t.shadowMap.enabled = h.shadowMapEnabled, m = 1e3 / h.frameLimit);
    }
    be(() => {
      t = new _t({ canvas: f.value, antialias: e.antialias, alpha: !0 }), t.setSize(1, 1), d(e), b(e.camera), new ResizeObserver((M) => {
        M.forEach((L) => {
          t && e.autoResize && t.setSize(L.contentRect.width, L.contentRect.height);
        });
      }).observe(f.value.parentElement), _();
    }), Z(() => {
      for (let h of n)
        W(h);
    });
    function _() {
      requestAnimationFrame(_);
      const h = Date.now(), M = h - y;
      if (!(m > -1 && M < m)) {
        if (y = h - M % m, e.onBeforeRender && e.onBeforeRender(), c.value.length > 0 && s.value)
          for (const L of c.value)
            L.value !== null && (L.value.object.uuid === s.value.uuid ? (L.value.enabled = !0, L.value.update()) : L.value.enabled = !1);
        if (s.value && t)
          for (const L of n)
            t.render(L, s.value);
      }
    }
    return d(e), S(
      () => e.shadowMapEnabled,
      () => d(e)
    ), S(
      () => e.frameLimit,
      () => d(e)
    ), A("addCamera", (h) => i.value.push(h)), A("addScene", (h) => n.push(h)), A("addGeometry", (h) => a.push(h)), A("getGeometry", (h) => a.find((M) => M.name === h)), A("addControls", (h) => c.value.push(h)), A("camera", s), o({ three: t }), (h, M) => (ht(), gt(yt, null, [
      k(h.$slots, "default"),
      bt("canvas", {
        ref_key: "canvas",
        ref: f
      }, null, 512)
    ], 64));
  }
}), Xt = /* @__PURE__ */ P({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(r, { expose: o }) {
    const e = r, t = new wt();
    A("scene", t), p("addScene")(t);
    function n(a) {
      a.background && (t.background = new Y(a.background));
    }
    return n(e), S(
      () => e.background,
      () => n(e)
    ), o({ three: t }), (a, s) => k(a.$slots, "default");
  }
}), Wt = {
  name: "PerspectiveCamera"
}, Kt = /* @__PURE__ */ P({
  ...Wt,
  props: {
    aspect: { default: 1 },
    autoResize: { type: Boolean, default: !0 },
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(r, { expose: o }) {
    const e = r, t = new vt(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    p("addCamera")(t);
    const n = p("canvas");
    S(n, () => {
      new ResizeObserver((i) => {
        i.forEach((c) => {
          e.autoResize && (t.aspect = c.contentRect.width / c.contentRect.height, t.updateProjectionMatrix());
        });
      }).observe(n.value);
    }), v(e, "position", t), v(e, "up", t), v(e, "lookAt", t);
    function a() {
      t.name = e.name, e.autoResize || (t.aspect = e.aspect), t.near = e.near, t.far = e.far, t.updateProjectionMatrix();
    }
    return a(), u(e, "name", a), u(e, "aspect", a), u(e, "near", a), u(e, "far", a), A("parentCamera", t), o({ three: t }), (s, i) => k(s.$slots, "default");
  }
}), qt = {
  name: "OrthographicCamera"
}, Jt = /* @__PURE__ */ P({
  ...qt,
  props: {
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(r, { expose: o }) {
    const e = r, t = new Lt(-10, 10, 10, -10, 0.1, 1e3);
    t.lookAt(0, 0, 0), t.updateProjectionMatrix(), p("addCamera")(t);
    const n = p("canvas");
    S(n, () => {
      new ResizeObserver((i) => {
        i.forEach((c) => {
          const f = c.contentRect.width / c.contentRect.height;
          t.left = t.bottom * f, t.right = t.top * f, t.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), v(e, "position", t), v(e, "up", t), v(e, "lookAt", t);
    function a() {
      t.name = e.name, t.near = e.near, t.far = e.far, t.updateProjectionMatrix();
    }
    return a(), u(e, "name", a), u(e, "near", a), u(e, "far", a), A("parentCamera", t), o({ three: t }), (s, i) => k(s.$slots, "default");
  }
}), Xe = { type: "change" }, pe = { type: "start" }, We = { type: "end" };
class Qt extends Pt {
  constructor(o, e) {
    super(), e === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), e === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = o, this.domElement = e, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new z(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Q.ROTATE, MIDDLE: Q.DOLLY, RIGHT: Q.PAN }, this.touches = { ONE: ee.ROTATE, TWO: ee.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return i.phi;
    }, this.getAzimuthalAngle = function() {
      return i.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(l) {
      l.addEventListener("keydown", ze), this._domElementKeyEvents = l;
    }, this.saveState = function() {
      t.target0.copy(t.target), t.position0.copy(t.object.position), t.zoom0 = t.object.zoom;
    }, this.reset = function() {
      t.target.copy(t.target0), t.object.position.copy(t.position0), t.object.zoom = t.zoom0, t.object.updateProjectionMatrix(), t.dispatchEvent(Xe), t.update(), a = n.NONE;
    }, this.update = function() {
      const l = new z(), g = new je().setFromUnitVectors(o.up, new z(0, 1, 0)), T = g.clone().invert(), G = new z(), j = new je(), J = 2 * Math.PI;
      return function() {
        const Be = t.object.position;
        l.copy(Be).sub(t.target), l.applyQuaternion(g), i.setFromVector3(l), t.autoRotate && a === n.NONE && K(se()), t.enableDamping ? (i.theta += c.theta * t.dampingFactor, i.phi += c.phi * t.dampingFactor) : (i.theta += c.theta, i.phi += c.phi);
        let F = t.minAzimuthAngle, H = t.maxAzimuthAngle;
        return isFinite(F) && isFinite(H) && (F < -Math.PI ? F += J : F > Math.PI && (F -= J), H < -Math.PI ? H += J : H > Math.PI && (H -= J), F <= H ? i.theta = Math.max(F, Math.min(H, i.theta)) : i.theta = i.theta > (F + H) / 2 ? Math.max(F, i.theta) : Math.min(H, i.theta)), i.phi = Math.max(t.minPolarAngle, Math.min(t.maxPolarAngle, i.phi)), i.makeSafe(), i.radius *= f, i.radius = Math.max(t.minDistance, Math.min(t.maxDistance, i.radius)), t.enableDamping === !0 ? t.target.addScaledVector(y, t.dampingFactor) : t.target.add(y), l.setFromSpherical(i), l.applyQuaternion(T), Be.copy(t.target).add(l), t.object.lookAt(t.target), t.enableDamping === !0 ? (c.theta *= 1 - t.dampingFactor, c.phi *= 1 - t.dampingFactor, y.multiplyScalar(1 - t.dampingFactor)) : (c.set(0, 0, 0), y.set(0, 0, 0)), f = 1, m || G.distanceToSquared(t.object.position) > s || 8 * (1 - j.dot(t.object.quaternion)) > s ? (t.dispatchEvent(Xe), G.copy(t.object.position), j.copy(t.object.quaternion), m = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      t.domElement.removeEventListener("contextmenu", ke), t.domElement.removeEventListener("pointerdown", Te), t.domElement.removeEventListener("pointercancel", Ge), t.domElement.removeEventListener("wheel", Re), t.domElement.removeEventListener("pointermove", me), t.domElement.removeEventListener("pointerup", de), t._domElementKeyEvents !== null && t._domElementKeyEvents.removeEventListener("keydown", ze);
    };
    const t = this, n = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let a = n.NONE;
    const s = 1e-6, i = new Ne(), c = new Ne();
    let f = 1;
    const y = new z();
    let m = !1;
    const b = new N(), d = new N(), _ = new N(), h = new N(), M = new N(), L = new N(), C = new N(), E = new N(), O = new N(), w = [], D = {};
    function se() {
      return 2 * Math.PI / 60 / 60 * t.autoRotateSpeed;
    }
    function I() {
      return Math.pow(0.95, t.zoomSpeed);
    }
    function K(l) {
      c.theta -= l;
    }
    function x(l) {
      c.phi -= l;
    }
    const $ = function() {
      const l = new z();
      return function(T, G) {
        l.setFromMatrixColumn(G, 0), l.multiplyScalar(-T), y.add(l);
      };
    }(), ve = function() {
      const l = new z();
      return function(T, G) {
        t.screenSpacePanning === !0 ? l.setFromMatrixColumn(G, 1) : (l.setFromMatrixColumn(G, 0), l.crossVectors(t.object.up, l)), l.multiplyScalar(T), y.add(l);
      };
    }(), q = function() {
      const l = new z();
      return function(T, G) {
        const j = t.domElement;
        if (t.object.isPerspectiveCamera) {
          const J = t.object.position;
          l.copy(J).sub(t.target);
          let re = l.length();
          re *= Math.tan(t.object.fov / 2 * Math.PI / 180), $(2 * T * re / j.clientHeight, t.object.matrix), ve(2 * G * re / j.clientHeight, t.object.matrix);
        } else
          t.object.isOrthographicCamera ? ($(T * (t.object.right - t.object.left) / t.object.zoom / j.clientWidth, t.object.matrix), ve(G * (t.object.top - t.object.bottom) / t.object.zoom / j.clientHeight, t.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), t.enablePan = !1);
      };
    }();
    function ue(l) {
      t.object.isPerspectiveCamera ? f /= l : t.object.isOrthographicCamera ? (t.object.zoom = Math.max(t.minZoom, Math.min(t.maxZoom, t.object.zoom * l)), t.object.updateProjectionMatrix(), m = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), t.enableZoom = !1);
    }
    function Le(l) {
      t.object.isPerspectiveCamera ? f *= l : t.object.isOrthographicCamera ? (t.object.zoom = Math.max(t.minZoom, Math.min(t.maxZoom, t.object.zoom / l)), t.object.updateProjectionMatrix(), m = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), t.enableZoom = !1);
    }
    function Pe(l) {
      b.set(l.clientX, l.clientY);
    }
    function et(l) {
      C.set(l.clientX, l.clientY);
    }
    function Me(l) {
      h.set(l.clientX, l.clientY);
    }
    function tt(l) {
      d.set(l.clientX, l.clientY), _.subVectors(d, b).multiplyScalar(t.rotateSpeed);
      const g = t.domElement;
      K(2 * Math.PI * _.x / g.clientHeight), x(2 * Math.PI * _.y / g.clientHeight), b.copy(d), t.update();
    }
    function nt(l) {
      E.set(l.clientX, l.clientY), O.subVectors(E, C), O.y > 0 ? ue(I()) : O.y < 0 && Le(I()), C.copy(E), t.update();
    }
    function at(l) {
      M.set(l.clientX, l.clientY), L.subVectors(M, h).multiplyScalar(t.panSpeed), q(L.x, L.y), h.copy(M), t.update();
    }
    function ot(l) {
      l.deltaY < 0 ? Le(I()) : l.deltaY > 0 && ue(I()), t.update();
    }
    function st(l) {
      let g = !1;
      switch (l.code) {
        case t.keys.UP:
          q(0, t.keyPanSpeed), g = !0;
          break;
        case t.keys.BOTTOM:
          q(0, -t.keyPanSpeed), g = !0;
          break;
        case t.keys.LEFT:
          q(t.keyPanSpeed, 0), g = !0;
          break;
        case t.keys.RIGHT:
          q(-t.keyPanSpeed, 0), g = !0;
          break;
      }
      g && (l.preventDefault(), t.update());
    }
    function Se() {
      if (w.length === 1)
        b.set(w[0].pageX, w[0].pageY);
      else {
        const l = 0.5 * (w[0].pageX + w[1].pageX), g = 0.5 * (w[0].pageY + w[1].pageY);
        b.set(l, g);
      }
    }
    function Ee() {
      if (w.length === 1)
        h.set(w[0].pageX, w[0].pageY);
      else {
        const l = 0.5 * (w[0].pageX + w[1].pageX), g = 0.5 * (w[0].pageY + w[1].pageY);
        h.set(l, g);
      }
    }
    function xe() {
      const l = w[0].pageX - w[1].pageX, g = w[0].pageY - w[1].pageY, T = Math.sqrt(l * l + g * g);
      C.set(0, T);
    }
    function rt() {
      t.enableZoom && xe(), t.enablePan && Ee();
    }
    function it() {
      t.enableZoom && xe(), t.enableRotate && Se();
    }
    function Ae(l) {
      if (w.length == 1)
        d.set(l.pageX, l.pageY);
      else {
        const T = fe(l), G = 0.5 * (l.pageX + T.x), j = 0.5 * (l.pageY + T.y);
        d.set(G, j);
      }
      _.subVectors(d, b).multiplyScalar(t.rotateSpeed);
      const g = t.domElement;
      K(2 * Math.PI * _.x / g.clientHeight), x(2 * Math.PI * _.y / g.clientHeight), b.copy(d);
    }
    function Oe(l) {
      if (w.length === 1)
        M.set(l.pageX, l.pageY);
      else {
        const g = fe(l), T = 0.5 * (l.pageX + g.x), G = 0.5 * (l.pageY + g.y);
        M.set(T, G);
      }
      L.subVectors(M, h).multiplyScalar(t.panSpeed), q(L.x, L.y), h.copy(M);
    }
    function Ce(l) {
      const g = fe(l), T = l.pageX - g.x, G = l.pageY - g.y, j = Math.sqrt(T * T + G * G);
      E.set(0, j), O.set(0, Math.pow(E.y / C.y, t.zoomSpeed)), ue(O.y), C.copy(E);
    }
    function lt(l) {
      t.enableZoom && Ce(l), t.enablePan && Oe(l);
    }
    function ct(l) {
      t.enableZoom && Ce(l), t.enableRotate && Ae(l);
    }
    function Te(l) {
      t.enabled !== !1 && (w.length === 0 && (t.domElement.setPointerCapture(l.pointerId), t.domElement.addEventListener("pointermove", me), t.domElement.addEventListener("pointerup", de)), pt(l), l.pointerType === "touch" ? dt(l) : ut(l));
    }
    function me(l) {
      t.enabled !== !1 && (l.pointerType === "touch" ? ft(l) : mt(l));
    }
    function de(l) {
      De(l), w.length === 0 && (t.domElement.releasePointerCapture(l.pointerId), t.domElement.removeEventListener("pointermove", me), t.domElement.removeEventListener("pointerup", de)), t.dispatchEvent(We), a = n.NONE;
    }
    function Ge(l) {
      De(l);
    }
    function ut(l) {
      let g;
      switch (l.button) {
        case 0:
          g = t.mouseButtons.LEFT;
          break;
        case 1:
          g = t.mouseButtons.MIDDLE;
          break;
        case 2:
          g = t.mouseButtons.RIGHT;
          break;
        default:
          g = -1;
      }
      switch (g) {
        case Q.DOLLY:
          if (t.enableZoom === !1)
            return;
          et(l), a = n.DOLLY;
          break;
        case Q.ROTATE:
          if (l.ctrlKey || l.metaKey || l.shiftKey) {
            if (t.enablePan === !1)
              return;
            Me(l), a = n.PAN;
          } else {
            if (t.enableRotate === !1)
              return;
            Pe(l), a = n.ROTATE;
          }
          break;
        case Q.PAN:
          if (l.ctrlKey || l.metaKey || l.shiftKey) {
            if (t.enableRotate === !1)
              return;
            Pe(l), a = n.ROTATE;
          } else {
            if (t.enablePan === !1)
              return;
            Me(l), a = n.PAN;
          }
          break;
        default:
          a = n.NONE;
      }
      a !== n.NONE && t.dispatchEvent(pe);
    }
    function mt(l) {
      if (t.enabled !== !1)
        switch (a) {
          case n.ROTATE:
            if (t.enableRotate === !1)
              return;
            tt(l);
            break;
          case n.DOLLY:
            if (t.enableZoom === !1)
              return;
            nt(l);
            break;
          case n.PAN:
            if (t.enablePan === !1)
              return;
            at(l);
            break;
        }
    }
    function Re(l) {
      t.enabled === !1 || t.enableZoom === !1 || a !== n.NONE || (l.preventDefault(), t.dispatchEvent(pe), ot(l), t.dispatchEvent(We));
    }
    function ze(l) {
      t.enabled === !1 || t.enablePan === !1 || st(l);
    }
    function dt(l) {
      switch (Ie(l), w.length) {
        case 1:
          switch (t.touches.ONE) {
            case ee.ROTATE:
              if (t.enableRotate === !1)
                return;
              Se(), a = n.TOUCH_ROTATE;
              break;
            case ee.PAN:
              if (t.enablePan === !1)
                return;
              Ee(), a = n.TOUCH_PAN;
              break;
            default:
              a = n.NONE;
          }
          break;
        case 2:
          switch (t.touches.TWO) {
            case ee.DOLLY_PAN:
              if (t.enableZoom === !1 && t.enablePan === !1)
                return;
              rt(), a = n.TOUCH_DOLLY_PAN;
              break;
            case ee.DOLLY_ROTATE:
              if (t.enableZoom === !1 && t.enableRotate === !1)
                return;
              it(), a = n.TOUCH_DOLLY_ROTATE;
              break;
            default:
              a = n.NONE;
          }
          break;
        default:
          a = n.NONE;
      }
      a !== n.NONE && t.dispatchEvent(pe);
    }
    function ft(l) {
      switch (Ie(l), a) {
        case n.TOUCH_ROTATE:
          if (t.enableRotate === !1)
            return;
          Ae(l), t.update();
          break;
        case n.TOUCH_PAN:
          if (t.enablePan === !1)
            return;
          Oe(l), t.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (t.enableZoom === !1 && t.enablePan === !1)
            return;
          lt(l), t.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (t.enableZoom === !1 && t.enableRotate === !1)
            return;
          ct(l), t.update();
          break;
        default:
          a = n.NONE;
      }
    }
    function ke(l) {
      t.enabled !== !1 && l.preventDefault();
    }
    function pt(l) {
      w.push(l);
    }
    function De(l) {
      delete D[l.pointerId];
      for (let g = 0; g < w.length; g++)
        if (w[g].pointerId == l.pointerId) {
          w.splice(g, 1);
          return;
        }
    }
    function Ie(l) {
      let g = D[l.pointerId];
      g === void 0 && (g = new N(), D[l.pointerId] = g), g.set(l.pageX, l.pageY);
    }
    function fe(l) {
      const g = l.pointerId === w[0].pointerId ? w[1] : w[0];
      return D[g.pointerId];
    }
    t.domElement.addEventListener("contextmenu", ke), t.domElement.addEventListener("pointerdown", Te), t.domElement.addEventListener("pointercancel", Ge), t.domElement.addEventListener("wheel", Re, { passive: !1 }), this.update();
  }
}
const en = {
  name: "OrbitControls",
  render: () => null
}, tn = /* @__PURE__ */ P({
  ...en,
  props: {
    enablePan: { type: Boolean, default: !0 },
    enableRotate: { type: Boolean, default: !0 },
    enableZoom: { type: Boolean, default: !0 },
    minZoom: { default: 0 },
    maxZoom: { default: 1 / 0 },
    minDistance: { default: 0 },
    maxDistance: { default: 1 / 0 },
    minPolarAngle: { default: 0 },
    maxPolarAngle: { default: Math.PI },
    minAzimuthAngle: { default: 1 / 0 },
    maxAzimuthAngle: { default: 1 / 0 },
    target: { default: () => [0, 0, 0] }
  },
  setup(r, { expose: o }) {
    const e = r, t = ne(null);
    p("addControls")(t);
    const n = p("parentCamera"), a = p("canvas");
    function s() {
      t.value != null && (t.value.enablePan = e.enablePan, t.value.enableRotate = e.enableRotate, t.value.enableZoom = e.enableZoom, t.value.minZoom = e.minZoom, t.value.maxZoom = e.maxZoom, t.value.minDistance = e.minDistance, t.value.maxDistance = e.maxDistance, t.value.minPolarAngle = e.minPolarAngle, t.value.maxPolarAngle = e.maxPolarAngle, t.value.minAzimuthAngle = e.minAzimuthAngle, t.value.maxAzimuthAngle = e.maxAzimuthAngle);
    }
    let i = !1;
    const c = () => {
      a.value && (i || (t.value = new Qt(n, a.value), s(), v(e, "target", t.value), i = !0));
    };
    return S(a, () => {
      c();
    }), s(), u(e, "enablePan", s), u(e, "enableRotate", s), u(e, "enableZoom", s), u(e, "minZoom", s), u(e, "maxZoom", s), u(e, "minDistance", s), u(e, "maxDistance", s), u(e, "minPolarAngle", s), u(e, "maxPolarAngle", s), u(e, "minAzimuthAngle", s), u(e, "maxAzimuthAngle", s), o({ three: t }), { props: e, three: t, camera: n, canvas: a, applyProps: s, get boundCamera() {
      return i;
    }, set boundCamera(f) {
      i = f;
    }, tryBindCamera: c };
  }
}), nn = /* @__PURE__ */ P({
  __name: "Group",
  props: {
    enableRaycasting: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  emits: ["click", "mousemove", "mouseenter", "mouseleave"],
  setup(r, { expose: o, emit: e }) {
    const t = r, n = new _e();
    return oe(n), v(t, "position", n), v(t, "rotation", n), v(t, "scale", n), Yt(n.children, t, e), A("parent", n), o({ three: n }), (a, s) => k(a.$slots, "default");
  }
}), an = /* @__PURE__ */ P({
  __name: "Line",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("scene"), n = new R(), a = new X({ color: "black" }), s = new Mt(n, a);
    return oe(s), v(e, "position", s), v(e, "rotation", s), v(e, "scale", s), Z(() => {
      t.remove(s), W(s);
    }), A("mesh", s), o({ three: s }), (i, c) => k(i.$slots, "default");
  }
}), on = /* @__PURE__ */ P({
  __name: "LineLoop",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("scene"), n = new R(), a = new X({ color: "black" }), s = new St(n, a);
    return oe(s), v(e, "position", s), v(e, "rotation", s), v(e, "scale", s), Z(() => {
      t.remove(s), W(s);
    }), A("mesh", s), o({ three: s }), (i, c) => k(i.$slots, "default");
  }
}), sn = /* @__PURE__ */ P({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("scene"), n = new R(), a = new X({ color: "black" }), s = new ge(n, a);
    return oe(s), v(e, "position", s), v(e, "rotation", s), v(e, "scale", s), Z(() => {
      t.remove(s), W(s);
    }), A("mesh", s), o({ three: s }), (i, c) => k(i.$slots, "default");
  }
}), rn = /* @__PURE__ */ P({
  __name: "Mesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("scene"), n = new R(), a = new Qe(), s = new ye(n, a);
    s.castShadow = !0, s.receiveShadow = !0, oe(s), v(e, "position", s), v(e, "rotation", s), v(e, "scale", s);
    function i() {
      s.castShadow = e.castShadow, s.receiveShadow = e.receiveShadow;
    }
    return i(), u(e, "castShadow", i), u(e, "receiveShadow", i), Z(() => {
      t.remove(s), W(s);
    }), A("mesh", s), o({ three: s }), (c, f) => k(c.$slots, "default");
  }
}), ln = /* @__PURE__ */ P({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("scene"), n = new R(), a = new ae({ color: "red", sizeAttenuation: !1, size: 2 }), s = new le(n, a);
    return oe(s), v(e, "position", s), v(e, "rotation", s), v(e, "scale", s), Z(() => {
      t.remove(s), W(s);
    }), A("mesh", s), o({ three: s }), (i, c) => k(i.$slots, "default");
  }
}), cn = /^[og]\s*(.+)?/, un = /^mtllib /, mn = /^usemtl /, dn = /^usemap /, Ke = new z(), he = new z(), qe = new z(), Je = new z(), B = new z(), ie = new Y();
function fn() {
  const r = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(o, e) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = o, this.object.fromDeclaration = e !== !1;
        return;
      }
      const t = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: o || "",
        fromDeclaration: e !== !1,
        geometry: {
          vertices: [],
          normals: [],
          colors: [],
          uvs: [],
          hasUVIndices: !1
        },
        materials: [],
        smooth: !0,
        startMaterial: function(n, a) {
          const s = this._finalize(!1);
          s && (s.inherited || s.groupCount <= 0) && this.materials.splice(s.index, 1);
          const i = {
            index: this.materials.length,
            name: n || "",
            mtllib: Array.isArray(a) && a.length > 0 ? a[a.length - 1] : "",
            smooth: s !== void 0 ? s.smooth : this.smooth,
            groupStart: s !== void 0 ? s.groupEnd : 0,
            groupEnd: -1,
            groupCount: -1,
            inherited: !1,
            clone: function(c) {
              const f = {
                index: typeof c == "number" ? c : this.index,
                name: this.name,
                mtllib: this.mtllib,
                smooth: this.smooth,
                groupStart: 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: !1
              };
              return f.clone = this.clone.bind(f), f;
            }
          };
          return this.materials.push(i), i;
        },
        currentMaterial: function() {
          if (this.materials.length > 0)
            return this.materials[this.materials.length - 1];
        },
        _finalize: function(n) {
          const a = this.currentMaterial();
          if (a && a.groupEnd === -1 && (a.groupEnd = this.geometry.vertices.length / 3, a.groupCount = a.groupEnd - a.groupStart, a.inherited = !1), n && this.materials.length > 1)
            for (let s = this.materials.length - 1; s >= 0; s--)
              this.materials[s].groupCount <= 0 && this.materials.splice(s, 1);
          return n && this.materials.length === 0 && this.materials.push({
            name: "",
            smooth: this.smooth
          }), a;
        }
      }, t && t.name && typeof t.clone == "function") {
        const n = t.clone(0);
        n.inherited = !0, this.object.materials.push(n);
      }
      this.objects.push(this.object);
    },
    finalize: function() {
      this.object && typeof this.object._finalize == "function" && this.object._finalize(!0);
    },
    parseVertexIndex: function(o, e) {
      const t = parseInt(o, 10);
      return (t >= 0 ? t - 1 : t + e / 3) * 3;
    },
    parseNormalIndex: function(o, e) {
      const t = parseInt(o, 10);
      return (t >= 0 ? t - 1 : t + e / 3) * 3;
    },
    parseUVIndex: function(o, e) {
      const t = parseInt(o, 10);
      return (t >= 0 ? t - 1 : t + e / 2) * 2;
    },
    addVertex: function(o, e, t) {
      const n = this.vertices, a = this.object.geometry.vertices;
      a.push(n[o + 0], n[o + 1], n[o + 2]), a.push(n[e + 0], n[e + 1], n[e + 2]), a.push(n[t + 0], n[t + 1], n[t + 2]);
    },
    addVertexPoint: function(o) {
      const e = this.vertices;
      this.object.geometry.vertices.push(e[o + 0], e[o + 1], e[o + 2]);
    },
    addVertexLine: function(o) {
      const e = this.vertices;
      this.object.geometry.vertices.push(e[o + 0], e[o + 1], e[o + 2]);
    },
    addNormal: function(o, e, t) {
      const n = this.normals, a = this.object.geometry.normals;
      a.push(n[o + 0], n[o + 1], n[o + 2]), a.push(n[e + 0], n[e + 1], n[e + 2]), a.push(n[t + 0], n[t + 1], n[t + 2]);
    },
    addFaceNormal: function(o, e, t) {
      const n = this.vertices, a = this.object.geometry.normals;
      Ke.fromArray(n, o), he.fromArray(n, e), qe.fromArray(n, t), B.subVectors(qe, he), Je.subVectors(Ke, he), B.cross(Je), B.normalize(), a.push(B.x, B.y, B.z), a.push(B.x, B.y, B.z), a.push(B.x, B.y, B.z);
    },
    addColor: function(o, e, t) {
      const n = this.colors, a = this.object.geometry.colors;
      n[o] !== void 0 && a.push(n[o + 0], n[o + 1], n[o + 2]), n[e] !== void 0 && a.push(n[e + 0], n[e + 1], n[e + 2]), n[t] !== void 0 && a.push(n[t + 0], n[t + 1], n[t + 2]);
    },
    addUV: function(o, e, t) {
      const n = this.uvs, a = this.object.geometry.uvs;
      a.push(n[o + 0], n[o + 1]), a.push(n[e + 0], n[e + 1]), a.push(n[t + 0], n[t + 1]);
    },
    addDefaultUV: function() {
      const o = this.object.geometry.uvs;
      o.push(0, 0), o.push(0, 0), o.push(0, 0);
    },
    addUVLine: function(o) {
      const e = this.uvs;
      this.object.geometry.uvs.push(e[o + 0], e[o + 1]);
    },
    addFace: function(o, e, t, n, a, s, i, c, f) {
      const y = this.vertices.length;
      let m = this.parseVertexIndex(o, y), b = this.parseVertexIndex(e, y), d = this.parseVertexIndex(t, y);
      if (this.addVertex(m, b, d), this.addColor(m, b, d), i !== void 0 && i !== "") {
        const _ = this.normals.length;
        m = this.parseNormalIndex(i, _), b = this.parseNormalIndex(c, _), d = this.parseNormalIndex(f, _), this.addNormal(m, b, d);
      } else
        this.addFaceNormal(m, b, d);
      if (n !== void 0 && n !== "") {
        const _ = this.uvs.length;
        m = this.parseUVIndex(n, _), b = this.parseUVIndex(a, _), d = this.parseUVIndex(s, _), this.addUV(m, b, d), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(o) {
      this.object.geometry.type = "Points";
      const e = this.vertices.length;
      for (let t = 0, n = o.length; t < n; t++) {
        const a = this.parseVertexIndex(o[t], e);
        this.addVertexPoint(a), this.addColor(a);
      }
    },
    addLineGeometry: function(o, e) {
      this.object.geometry.type = "Line";
      const t = this.vertices.length, n = this.uvs.length;
      for (let a = 0, s = o.length; a < s; a++)
        this.addVertexLine(this.parseVertexIndex(o[a], t));
      for (let a = 0, s = e.length; a < s; a++)
        this.addUVLine(this.parseUVIndex(e[a], n));
    }
  };
  return r.startObject("", !1), r;
}
class pn extends Et {
  constructor(o) {
    super(o), this.materials = null;
  }
  load(o, e, t, n) {
    const a = this, s = new xt(this.manager);
    s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(o, function(i) {
      try {
        e(a.parse(i));
      } catch (c) {
        n ? n(c) : console.error(c), a.manager.itemError(o);
      }
    }, t, n);
  }
  setMaterials(o) {
    return this.materials = o, this;
  }
  parse(o) {
    const e = new fn();
    o.indexOf(`\r
`) !== -1 && (o = o.replace(/\r\n/g, `
`)), o.indexOf(`\\
`) !== -1 && (o = o.replace(/\\\n/g, ""));
    const t = o.split(`
`);
    let n = "", a = "", s = 0, i = [];
    const c = typeof "".trimLeft == "function";
    for (let m = 0, b = t.length; m < b; m++)
      if (n = t[m], n = c ? n.trimLeft() : n.trim(), s = n.length, s !== 0 && (a = n.charAt(0), a !== "#"))
        if (a === "v") {
          const d = n.split(/\s+/);
          switch (d[0]) {
            case "v":
              e.vertices.push(
                parseFloat(d[1]),
                parseFloat(d[2]),
                parseFloat(d[3])
              ), d.length >= 7 ? (ie.setRGB(
                parseFloat(d[4]),
                parseFloat(d[5]),
                parseFloat(d[6])
              ).convertSRGBToLinear(), e.colors.push(ie.r, ie.g, ie.b)) : e.colors.push(void 0, void 0, void 0);
              break;
            case "vn":
              e.normals.push(
                parseFloat(d[1]),
                parseFloat(d[2]),
                parseFloat(d[3])
              );
              break;
            case "vt":
              e.uvs.push(
                parseFloat(d[1]),
                parseFloat(d[2])
              );
              break;
          }
        } else if (a === "f") {
          const _ = n.slice(1).trim().split(/\s+/), h = [];
          for (let L = 0, C = _.length; L < C; L++) {
            const E = _[L];
            if (E.length > 0) {
              const O = E.split("/");
              h.push(O);
            }
          }
          const M = h[0];
          for (let L = 1, C = h.length - 1; L < C; L++) {
            const E = h[L], O = h[L + 1];
            e.addFace(
              M[0],
              E[0],
              O[0],
              M[1],
              E[1],
              O[1],
              M[2],
              E[2],
              O[2]
            );
          }
        } else if (a === "l") {
          const d = n.substring(1).trim().split(" ");
          let _ = [];
          const h = [];
          if (n.indexOf("/") === -1)
            _ = d;
          else
            for (let M = 0, L = d.length; M < L; M++) {
              const C = d[M].split("/");
              C[0] !== "" && _.push(C[0]), C[1] !== "" && h.push(C[1]);
            }
          e.addLineGeometry(_, h);
        } else if (a === "p") {
          const _ = n.slice(1).trim().split(" ");
          e.addPointGeometry(_);
        } else if ((i = cn.exec(n)) !== null) {
          const d = (" " + i[0].slice(1).trim()).slice(1);
          e.startObject(d);
        } else if (mn.test(n))
          e.object.startMaterial(n.substring(7).trim(), e.materialLibraries);
        else if (un.test(n))
          e.materialLibraries.push(n.substring(7).trim());
        else if (dn.test(n))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (a === "s") {
          if (i = n.split(" "), i.length > 1) {
            const _ = i[1].trim().toLowerCase();
            e.object.smooth = _ !== "0" && _ !== "off";
          } else
            e.object.smooth = !0;
          const d = e.object.currentMaterial();
          d && (d.smooth = e.object.smooth);
        } else {
          if (n === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + n + '"');
        }
    e.finalize();
    const f = new _e();
    if (f.materialLibraries = [].concat(e.materialLibraries), !(e.objects.length === 1 && e.objects[0].geometry.vertices.length === 0) === !0)
      for (let m = 0, b = e.objects.length; m < b; m++) {
        const d = e.objects[m], _ = d.geometry, h = d.materials, M = _.type === "Line", L = _.type === "Points";
        let C = !1;
        if (_.vertices.length === 0)
          continue;
        const E = new R();
        E.setAttribute("position", new te(_.vertices, 3)), _.normals.length > 0 && E.setAttribute("normal", new te(_.normals, 3)), _.colors.length > 0 && (C = !0, E.setAttribute("color", new te(_.colors, 3))), _.hasUVIndices === !0 && E.setAttribute("uv", new te(_.uvs, 2));
        const O = [];
        for (let D = 0, se = h.length; D < se; D++) {
          const I = h[D], K = I.name + "_" + I.smooth + "_" + C;
          let x = e.materials[K];
          if (this.materials !== null) {
            if (x = this.materials.create(I.name), M && x && !(x instanceof X)) {
              const $ = new X();
              Ue.prototype.copy.call($, x), $.color.copy(x.color), x = $;
            } else if (L && x && !(x instanceof ae)) {
              const $ = new ae({ size: 10, sizeAttenuation: !1 });
              Ue.prototype.copy.call($, x), $.color.copy(x.color), $.map = x.map, x = $;
            }
          }
          x === void 0 && (M ? x = new X() : L ? x = new ae({ size: 1, sizeAttenuation: !1 }) : x = new At(), x.name = I.name, x.flatShading = !I.smooth, x.vertexColors = C, e.materials[K] = x), O.push(x);
        }
        let w;
        if (O.length > 1) {
          for (let D = 0, se = h.length; D < se; D++) {
            const I = h[D];
            E.addGroup(I.groupStart, I.groupCount, D);
          }
          M ? w = new ge(E, O) : L ? w = new le(E, O) : w = new ye(E, O);
        } else
          M ? w = new ge(E, O[0]) : L ? w = new le(E, O[0]) : w = new ye(E, O[0]);
        w.name = d.name, f.add(w);
      }
    else if (e.vertices.length > 0) {
      const m = new ae({ size: 1, sizeAttenuation: !1 }), b = new R();
      b.setAttribute("position", new te(e.vertices, 3)), e.colors.length > 0 && e.colors[0] !== void 0 && (b.setAttribute("color", new te(e.colors, 3)), m.vertexColors = !0);
      const d = new le(b, m);
      f.add(d);
    }
    return f;
  }
}
const hn = /* @__PURE__ */ P({
  __name: "OBJLoader",
  props: {
    castShadow: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    url: null
  },
  emits: ["load", "progress", "error"],
  setup(r, { expose: o, emit: e }) {
    const t = r, n = new pn(), a = p("scene"), s = new _e();
    s.castShadow = !0, s.receiveShadow = !0, a.add(s), v(t, "position", s), v(t, "rotation", s), v(t, "scale", s);
    function i() {
      n.load(
        t.url,
        function(c) {
          for (const f of c.children)
            s.add(f), f.material = s.material, v(t, "position", s, !1), v(t, "rotation", s, !1), v(t, "scale", s, !1);
          e("load", c);
        },
        function(c) {
          e("progress", c);
        },
        function(c) {
          e("error", c);
        }
      );
    }
    return i(), S(
      () => t.url,
      () => i()
    ), A("mesh", s), o({
      three: s
    }), (c, f) => k(c.$slots, "default");
  }
}), gn = /* @__PURE__ */ P({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("scene"), n = new Ot(e.size);
    return t.add(n), v(e, "position", n), v(e, "rotation", n), v(e, "scale", n), A("mesh", n), o({ three: n }), (a, s) => k(a.$slots, "default");
  }
}), yn = {
  name: "BoxGeometry",
  render: () => null
}, bn = /* @__PURE__ */ P({
  ...yn,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh");
    function n(c, f, y, m, b, d) {
      return new Ct(c, f, y, m, b, d);
    }
    const a = U(new R());
    a.name = e.name, t.geometry = a;
    const s = p("addGeometry");
    s(a);
    function i() {
      const c = n(
        e.width,
        e.height,
        e.depth,
        e.widthSegments,
        e.heightSegments,
        e.depthSegments
      );
      V(a, c);
    }
    return i(), u(e, "name", () => {
      a.name = e.name;
    }), u(e, "width", i), u(e, "height", i), u(e, "depth", i), u(e, "widthSegments", i), u(e, "heightSegments", i), u(e, "depthSegments", i), o({ three: a }), { props: e, mesh: t, makeBox: n, three: a, addGeometry: s, redoGeometry: i };
  }
}), _n = {
  name: "BufferGeometry",
  render: () => null
}, wn = /* @__PURE__ */ P({
  ..._n,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] },
    uvs: { default: () => [] }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh");
    function n(c, f, y) {
      const m = new R(), b = new Float32Array(c), d = new Float32Array(y);
      return m.setAttribute("position", new Ve(b, 3)), m.setAttribute("uv", new Ve(d, 2)), e.faces.length > 0 && m.setIndex(f), m;
    }
    const a = U(n(e.vertices, e.faces, e.uvs));
    a.name = e.name, t.geometry = a;
    const s = p("addGeometry");
    s(a);
    function i(c, f, y) {
      const m = n(c, f, y);
      V(a, m);
    }
    return S(
      () => e.vertices,
      (c) => {
        i(c, e.faces, e.uvs);
      },
      { deep: !0, immediate: !0 }
    ), S(
      () => e.faces,
      (c) => {
        i(e.vertices, c, e.uvs);
      },
      { deep: !0, immediate: !0 }
    ), o({ three: a }), { props: e, mesh: t, makeGeometry: n, three: a, addGeometry: s, redoGeometry: i };
  }
}), vn = {
  name: "CircleGeometry",
  render: () => null
}, Ln = /* @__PURE__ */ P({
  ...vn,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    segments: { default: 32 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh");
    function n(c, f, y, m) {
      return new Tt(c, f, y, m);
    }
    const a = U(new R());
    a.name = e.name, t.geometry = a;
    const s = p("addGeometry");
    s(a);
    function i() {
      const c = n(e.radius, e.segments, e.thetaStart, e.thetaLength);
      V(a, c);
    }
    return i(), u(e, "radius", i), u(e, "segments", i), u(e, "thetaStart", i), u(e, "thetaLength", i), o({ three: a }), { props: e, mesh: t, makeCircle: n, three: a, addGeometry: s, redoGeometry: i };
  }
}), Pn = {
  name: "ConeGeometry",
  render: () => null
}, Mn = /* @__PURE__ */ P({
  ...Pn,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    height: { default: 1 },
    radialSegments: { default: 32 },
    heightSegments: { default: 1 },
    openEnded: { type: Boolean, default: !1 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh");
    function n(c, f, y, m, b, d, _) {
      return new Gt(c, f, y, m, b, d, _);
    }
    const a = U(new R());
    a.name = e.name, t.geometry = a;
    const s = p("addGeometry");
    s(a);
    function i() {
      const c = n(
        e.radius,
        e.height,
        e.radialSegments,
        e.heightSegments,
        e.openEnded,
        e.thetaStart,
        e.thetaLength
      );
      V(a, c);
    }
    return i(), u(e, "radius", i), u(e, "height", i), u(e, "radialSegments", i), u(e, "heightSegments", i), u(e, "openEnded", i), u(e, "thetaStart", i), u(e, "thetaLength", i), o({ three: a }), { props: e, mesh: t, makeCone: n, three: a, addGeometry: s, redoGeometry: i };
  }
}), Sn = {
  name: "CylinderGeometry",
  render: () => null
}, En = /* @__PURE__ */ P({
  ...Sn,
  props: {
    name: { default: "" },
    radiusTop: { default: 1 },
    radiusBottom: { default: 1 },
    height: { default: 1 },
    radialSegments: { default: 32 },
    heightSegments: { default: 1 },
    openEnded: { type: Boolean, default: !1 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh");
    function n(c, f, y, m, b, d, _, h) {
      return new Rt(
        c,
        f,
        y,
        m,
        b,
        d,
        _,
        h
      );
    }
    const a = U(new R());
    a.name = e.name, t.geometry = a;
    const s = p("addGeometry");
    s(a);
    function i() {
      const c = n(
        e.radiusTop,
        e.radiusBottom,
        e.height,
        e.radialSegments,
        e.heightSegments,
        e.openEnded,
        e.thetaStart,
        e.thetaLength
      );
      V(a, c);
    }
    return i(), u(e, "radiusTop", i), u(e, "radiusBottom", i), u(e, "height", i), u(e, "radialSegments", i), u(e, "heightSegments", i), u(e, "openEnded", i), u(e, "thetaStart", i), u(e, "thetaLength", i), o({ three: a }), { props: e, mesh: t, makeCylinder: n, three: a, addGeometry: s, redoGeometry: i };
  }
}), xn = {
  name: "EdgesGeometry",
  render: () => null
}, An = /* @__PURE__ */ P({
  ...xn,
  props: {
    geometry: null
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh"), n = U(new R());
    t.geometry = n;
    const a = p("getGeometry"), s = p("addGeometry");
    s(n);
    function i() {
      const y = new zt(a(e.geometry));
      V(n, y);
      const m = t;
      "isLine" in m && m.computeLineDistances();
    }
    let c = S(
      a(e.geometry),
      () => {
        i();
      },
      { deep: !0, immediate: !0 }
    );
    u(e, "geometry", () => {
      c(), c = S(
        a(e.geometry),
        () => {
          i();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const f = () => {
      a(e.geometry) === void 0 ? ce(() => f) : i();
    };
    return ce(() => f), o({ three: n }), { props: e, mesh: t, three: n, getGeometry: a, addGeometry: s, redoGeometry: i, get unwatch() {
      return c;
    }, set unwatch(y) {
      c = y;
    }, waitUntilGeometryChanged: f };
  }
}), On = {
  name: "PlaneGeometry",
  render: () => null
}, Cn = /* @__PURE__ */ P({
  ...On,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh");
    function n(c, f, y, m) {
      return new kt(c, f, y, m);
    }
    const a = U(new R());
    a.name = e.name, t.geometry = a;
    const s = p("addGeometry");
    s(a);
    function i() {
      const c = n(e.width, e.height, e.widthSegments, e.heightSegments);
      V(a, c);
    }
    return i(), u(e, "width", i), u(e, "height", i), u(e, "widthSegments", i), u(e, "heightSegments", i), o({ three: a }), { props: e, mesh: t, makePlane: n, three: a, addGeometry: s, redoGeometry: i };
  }
}), Tn = {
  name: "RingGeometry",
  render: () => null
}, Gn = /* @__PURE__ */ P({
  ...Tn,
  props: {
    name: { default: "" },
    innerRadius: { default: 0.5 },
    outerRadius: { default: 1 },
    thetaSegments: { default: 32 },
    phiSegments: { default: 1 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh");
    function n(c, f, y, m, b, d) {
      return new Dt(c, f, y, m, b, d);
    }
    const a = U(new R());
    a.name = e.name, t.geometry = a;
    const s = p("addGeometry");
    s(a);
    function i() {
      const c = n(
        e.innerRadius,
        e.outerRadius,
        e.thetaSegments,
        e.phiSegments,
        e.thetaStart,
        e.thetaLength
      );
      V(a, c);
    }
    return i(), u(e, "innerRadius", i), u(e, "outerRadius", i), u(e, "thetaSegments", i), u(e, "phiSegments", i), u(e, "thetaStart", i), u(e, "thetaLength", i), o({ three: a }), { props: e, mesh: t, makeRing: n, three: a, addGeometry: s, redoGeometry: i };
  }
}), Rn = {
  name: "SphereGeometry",
  render: () => null
}, zn = /* @__PURE__ */ P({
  ...Rn,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    widthSegments: { default: 32 },
    heightSegments: { default: 16 },
    phiStart: { default: 0 },
    phiLength: { default: 2 * Math.PI },
    thetaStart: { default: 0 },
    thetaLength: { default: Math.PI }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh");
    function n(c, f, y, m, b, d, _) {
      return new It(c, f, y, m, b, d, _);
    }
    const a = U(new R());
    a.name = e.name, t.geometry = a;
    const s = p("addGeometry");
    s(a);
    function i() {
      const c = n(
        e.radius,
        e.widthSegments,
        e.heightSegments,
        e.phiStart,
        e.phiLength,
        e.thetaStart,
        e.thetaLength
      );
      V(a, c);
    }
    return i(), u(e, "radius", i), u(e, "widthSegments", i), u(e, "heightSegments", i), u(e, "phiStart", i), u(e, "phiLength", i), u(e, "thetaStart", i), u(e, "thetaLength", i), o({ three: a }), { props: e, mesh: t, makeSphere: n, three: a, addGeometry: s, redoGeometry: i };
  }
}), kn = {
  name: "WireframeGeometry",
  render: () => null
}, Dn = /* @__PURE__ */ P({
  ...kn,
  props: {
    geometry: null
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh"), n = U(new R());
    t.geometry = n;
    const a = p("getGeometry"), s = p("addGeometry");
    s(n);
    function i() {
      const y = new Bt(a(e.geometry));
      V(n, y);
      const m = t;
      "isLine" in m && m.computeLineDistances();
    }
    let c = S(
      a(e.geometry),
      () => {
        i();
      },
      { deep: !0, immediate: !0 }
    );
    u(e, "geometry", () => {
      c(), c = S(
        a(e.geometry),
        () => {
          i();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const f = () => {
      a(e.geometry) === void 0 ? ce(() => f) : i();
    };
    return ce(() => f), o({ three: n }), { props: e, mesh: t, three: n, getGeometry: a, addGeometry: s, redoGeometry: i, get unwatch() {
      return c;
    }, set unwatch(y) {
      c = y;
    }, waitUntilGeometryChanged: f };
  }
}), In = {
  name: "LineBasicMaterial",
  render: () => null
}, Bn = /* @__PURE__ */ P({
  ...In,
  props: {
    color: { default: 16777215 },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh"), n = new X({ color: e.color });
    t.material = n;
    function a() {
      e.color && (n.color = new Y(e.color)), n.opacity = e.opacity, n.transparent = e.transparent, n.needsUpdate = !0;
    }
    return a(), u(e, "color", a), u(e, "opacity", a), u(e, "transparent", a), A("material", n), o({ three: n }), { props: e, mesh: t, three: n, applyProps: a };
  }
}), $n = {
  name: "LineDashedMaterial",
  render: () => null
}, jn = /* @__PURE__ */ P({
  ...$n,
  props: {
    color: { default: 16777215 },
    scale: { default: 1 },
    dashSize: { default: 3 },
    gapSize: { default: 1 },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh"), n = new $t({ color: e.color });
    t.material = n;
    function a() {
      n.color = new Y(e.color), n.scale = e.scale, n.dashSize = e.dashSize, n.gapSize = e.gapSize, n.opacity = e.opacity, n.transparent = e.transparent, n.needsUpdate = !0;
    }
    return a(), u(e, "color", a), u(e, "scale", a), u(e, "dashSize", a), u(e, "gapSize", a), u(e, "opacity", a), u(e, "transparent", a), A("material", n), o({ three: n }), { props: e, mesh: t, three: n, applyProps: a };
  }
}), Nn = {
  name: "MeshBasicMaterial"
}, Un = /* @__PURE__ */ P({
  ...Nn,
  props: {
    color: null,
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh"), n = new Qe();
    t.material = n;
    function a() {
      e.color !== void 0 && (n.color = new Y(e.color)), n.side = e.side, n.opacity = e.opacity, n.transparent = e.transparent, n.vertexColors = e.vertexColors, n.needsUpdate = !0;
    }
    return a(), A("material", n), u(e, "color", a), u(e, "side", a), u(e, "opacity", a), u(e, "transparent", a), u(e, "vertexColors", a), o({ three: n }), (s, i) => k(s.$slots, "default");
  }
}), Vn = {
  name: "MeshLambertMaterial"
}, Fn = /* @__PURE__ */ P({
  ...Vn,
  props: {
    color: { default: 16777215 },
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh"), n = new jt();
    t.material = n;
    function a(s) {
      s.color && (n.color = new Y(s.color)), s.side && (n.side = s.side);
    }
    return a(e), S(
      () => e.color,
      () => a(e)
    ), S(
      () => e.side,
      () => a(e)
    ), S(
      () => e.opacity,
      () => {
        n.opacity = e.opacity;
      },
      { immediate: !0 }
    ), S(
      () => e.transparent,
      () => {
        n.transparent = e.transparent;
      },
      { immediate: !0 }
    ), A("material", n), o({ three: n }), (s, i) => k(s.$slots, "default");
  }
}), Hn = {
  name: "PointsMaterial",
  render: () => null
}, Yn = /* @__PURE__ */ P({
  ...Hn,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh"), n = new ae({ color: e.color, sizeAttenuation: e.sizeAttenuation, size: e.size });
    t.material = n;
    function a() {
      n.color = new Y(e.color), n.size = e.size, n.sizeAttenuation = e.sizeAttenuation, n.opacity = e.opacity, n.transparent = e.transparent, n.needsUpdate = !0;
    }
    return a(), u(e, "color", a), u(e, "size", a), u(e, "sizeAttenuation", a), u(e, "opacity", a), u(e, "transparent", a), A("material", n), o({ three: n }), { props: e, mesh: t, three: n, applyProps: a };
  }
}), Zn = {
  name: "MeshNormalMaterial"
}, Xn = /* @__PURE__ */ P({
  ...Zn,
  props: {
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("mesh"), n = new Nt();
    return t.material = n, S(
      () => e.side,
      () => {
        n.side = e.side;
      },
      { immediate: !0 }
    ), S(
      () => e.opacity,
      () => {
        n.opacity = e.opacity;
      },
      { immediate: !0 }
    ), S(
      () => e.transparent,
      () => {
        n.transparent = e.transparent;
      },
      { immediate: !0 }
    ), A("material", n), o({ three: n }), (a, s) => k(a.$slots, "default");
  }
}), Wn = {
  name: "AmbientLight",
  render: () => null
}, Kn = /* @__PURE__ */ P({
  ...Wn,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("scene"), n = new Ut();
    t.add(n);
    function a(s) {
      n.color = new Y(s.color), n.intensity = s.intensity;
    }
    return a(e), S(
      () => e.color,
      () => a(e)
    ), S(
      () => e.intensity,
      () => a(e)
    ), o({ three: n }), { props: e, scene: t, three: n, applyProps: a };
  }
}), qn = {
  name: "PointLight",
  render: () => null
}, Jn = /* @__PURE__ */ P({
  ...qn,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("scene"), n = new Vt();
    t.add(n), v(e, "position", n), v(e, "rotation", n), v(e, "scale", n);
    function a(s) {
      n.color = new Y(s.color), n.intensity = s.intensity, n.castShadow = s.castShadow;
    }
    return a(e), S(
      () => e.color,
      () => a(e)
    ), S(
      () => e.intensity,
      () => a(e)
    ), S(
      () => e.castShadow,
      () => a(e)
    ), o({ three: n }), { props: e, scene: t, three: n, applyProps: a };
  }
}), Qn = {
  name: "TextureLoader",
  render: () => null
}, ea = /* @__PURE__ */ P({
  ...Qn,
  props: {
    url: null,
    wrapS: { default: Fe },
    wrapT: { default: Fe }
  },
  setup(r, { expose: o }) {
    const e = r, t = p("material"), n = ne(new Ft());
    function a() {
      n.value = new Ht().load(e.url), "map" in t && (t.map = n.value), s();
    }
    function s() {
      n.value.wrapS = e.wrapS, n.value.wrapT = e.wrapT, n.value.needsUpdate = !0;
    }
    return a(), u(e, "url", a), u(e, "wrapS", s), u(e, "wrapT", s), o({ three: n }), { props: e, material: t, three: n, load: a, applyProps: s };
  }
});
function aa(r) {
  r.component("Renderer", Zt), r.component("Scene", Xt), r.component("PerspectiveCamera", Kt), r.component("OrthographicCamera", Jt), r.component("OrbitControls", tn), r.component("Group", nn), r.component("Line", an), r.component("LineLoop", on), r.component("LineSegments", sn), r.component("Mesh", rn), r.component("Points", ln), r.component("OBJLoader", hn), r.component("AxesHelper", gn), r.component("BoxGeometry", bn), r.component("BufferGeometry", wn), r.component("CircleGeometry", Ln), r.component("ConeGeometry", Mn), r.component("CylinderGeometry", En), r.component("EdgesGeometry", An), r.component("PlaneGeometry", Cn), r.component("RingGeometry", Gn), r.component("SphereGeometry", zn), r.component("WireframeGeometry", Dn), r.component("LineBasicMaterial", Bn), r.component("LineDashedMaterial", jn), r.component("MeshBasicMaterial", Un), r.component("MeshLambertMaterial", Fn), r.component("PointsMaterial", Yn), r.component("MeshNormalMaterial", Xn), r.component("AmbientLight", Kn), r.component("PointLight", Jn), r.component("TextureLoader", ea);
}
export {
  Kn as AmbientLight,
  gn as AxesHelper,
  bn as BoxGeometry,
  wn as BufferGeometry,
  Ln as CircleGeometry,
  Mn as ConeGeometry,
  En as CylinderGeometry,
  An as EdgesGeometry,
  nn as Group,
  an as Line,
  Bn as LineBasicMaterial,
  jn as LineDashedMaterial,
  on as LineLoop,
  sn as LineSegments,
  rn as Mesh,
  Un as MeshBasicMaterial,
  Fn as MeshLambertMaterial,
  Xn as MeshNormalMaterial,
  hn as OBJLoader,
  tn as OrbitControls,
  Jt as OrthographicCamera,
  Kt as PerspectiveCamera,
  Cn as PlaneGeometry,
  Jn as PointLight,
  ln as Points,
  Yn as PointsMaterial,
  Zt as Renderer,
  Gn as RingGeometry,
  Xt as Scene,
  zn as SphereGeometry,
  ea as TextureLoader,
  Dn as WireframeGeometry,
  aa as install
};

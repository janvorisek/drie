import { watch as O, inject as S, onMounted as it, onUnmounted as _e, defineComponent as I, ref as Oe, reactive as ce, provide as D, openBlock as Vn, createElementBlock as Zn, Fragment as Kn, createElementVNode as $n, renderSlot as te, shallowRef as Qn, nextTick as ft } from "vue";
import { Vector3 as x, Raycaster as It, Vector2 as z, WebGLRenderer as qn, Scene as Wn, Color as Y, PerspectiveCamera as Sn, OrthographicCamera as xn, EventDispatcher as vn, MOUSE as Se, TOUCH as Xe, Quaternion as re, Spherical as Qt, Euler as Jn, Matrix4 as yt, Object3D as mt, MeshBasicMaterial as we, LineBasicMaterial as xe, CylinderGeometry as se, BoxGeometry as ne, BufferGeometry as X, Float32BufferAttribute as pe, Mesh as v, OctahedronGeometry as ct, Line as ye, SphereGeometry as An, TorusGeometry as Ke, PlaneGeometry as Ln, DoubleSide as Pn, Group as je, InstancedMesh as es, LineLoop as Rn, LineSegments as gt, PointsMaterial as Fe, Points as tt, Loader as In, LoaderUtils as He, FileLoader as Ft, SpotLight as ts, PointLight as Cn, DirectionalLight as On, sRGBEncoding as ze, MeshPhysicalMaterial as Ue, TangentSpaceNormalMap as ns, Interpolant as ss, TextureLoader as Nn, ImageBitmapLoader as os, InterleavedBuffer as is, InterleavedBufferAttribute as as, BufferAttribute as nt, LinearFilter as kn, LinearMipmapLinearFilter as Dn, RepeatWrapping as Ct, Material as st, MeshStandardMaterial as jt, PropertyBinding as rs, SkinnedMesh as cs, MathUtils as ls, InterpolateLinear as Gn, AnimationClip as us, Bone as ds, Skeleton as hs, TriangleFanDrawMode as Fn, NearestFilter as ps, NearestMipmapNearestFilter as fs, LinearMipmapNearestFilter as ms, NearestMipmapLinearFilter as gs, ClampToEdgeWrapping as Ot, MirroredRepeatWrapping as ys, InterpolateDiscrete as ws, FrontSide as wt, Texture as Nt, TriangleStripDrawMode as _s, VectorKeyframeTrack as bs, QuaternionKeyframeTrack as qt, NumberKeyframeTrack as Ms, Box3 as Es, Sphere as Ts, MeshPhongMaterial as Ss, AxesHelper as xs, CircleGeometry as vs, ConeGeometry as As, EdgesGeometry as Ls, Curve as Ps, RingGeometry as Rs, WireframeGeometry as Is, LineDashedMaterial as Cs, MeshLambertMaterial as Os, MeshNormalMaterial as Ns, AmbientLight as ks, HemisphereLight as Ds } from "three";
const Wt = (c) => c === void 0 ? new x(0, 0, 0) : "x" in c ? new x(c.x, c.y, c.z) : new x(c[0], c[1], c[2]), Jt = (c) => c === void 0 ? new z(0, 0) : "x" in c ? new z(c.x, c.y) : new z(c[0], c[1]), en = (c, s, t) => {
  t[c].isVector3 ? t[c].set(s.x, s.y, s.z) : "isEuler" in t[c] && t[c].setFromVector3(s);
}, R = (c, s, t, e = !0) => {
  if (t !== null) {
    if (c[s] !== void 0) {
      const n = Wt(c[s]);
      en(s, n, t);
    }
    e && O(
      () => c[s],
      () => {
        if (c[s] !== void 0) {
          const n = Wt(c[s]);
          en(s, n, t);
        }
      }
    );
  }
}, tn = (c, s, t) => {
  t[c].isVector2 && t[c].set(s.x, s.y);
}, nn = (c, s, t, e = !0) => {
  if (t !== null) {
    if (c[s] !== void 0) {
      const n = Jt(c[s]);
      tn(s, n, t);
    }
    e && O(
      () => c[s],
      () => {
        if (c[s] !== void 0) {
          const n = Jt(c[s]);
          tn(s, n, t);
        }
      }
    );
  }
}, g = (c, s, t) => {
  O(
    () => c[s],
    () => {
      t();
    }
  );
};
function fe(c, s) {
  s.hasAttribute("position") && (c.setAttribute("position", s.getAttribute("position")), c.attributes.position.needsUpdate = !0), s.hasAttribute("normal") && (c.setAttribute("normal", s.getAttribute("normal")), c.attributes.normal.needsUpdate = !0), s.hasAttribute("uv") && (c.setAttribute("uv", s.getAttribute("uv")), c.attributes.uv.needsUpdate = !0), c.setIndex(s.getIndex());
}
function ve(c) {
  if (c.children.length > 0)
    for (let s = c.children.length - 1; s >= 0; s--)
      ve(c.children[s]);
  if (c.geometry && c.geometry.dispose(), c.material)
    if (c.material.length)
      for (let s = 0; s < c.material.length; ++s)
        c.material[s].map && c.material[s].map.dispose(), c.material[s].lightMap && c.material[s].lightMap.dispose(), c.material[s].bumpMap && c.material[s].bumpMap.dispose(), c.material[s].normalMap && c.material[s].normalMap.dispose(), c.material[s].specularMap && c.material[s].specularMap.dispose(), c.material[s].envMap && c.material[s].envMap.dispose(), c.material[s].dispose();
    else
      c.material.map && c.material.map.dispose(), c.material.lightMap && c.material.lightMap.dispose(), c.material.bumpMap && c.material.bumpMap.dispose(), c.material.normalMap && c.material.normalMap.dispose(), c.material.specularMap && c.material.specularMap.dispose(), c.material.envMap && c.material.envMap.dispose(), c.material.dispose();
  return c.removeFromParent(), !0;
}
function Ae(c) {
  const s = S("scene"), t = S("parent", void 0);
  it(() => {
    t ? t.add(c) : s.add(c);
  }), _e(() => {
    t ? t.remove(c) : s.remove(c);
  });
}
function Ht(c, s) {
  const t = S("camera"), e = S("canvas");
  S("scene");
  const n = (r) => {
    if (s.onClick === null)
      return;
    const l = new It(), d = sn(r);
    l.setFromCamera(d, t.value);
    const u = l.intersectObjects(c);
    u.length > 0 && s.onClick(u, d);
  };
  let i = !1, o = [];
  const a = (r) => {
    if (s.onMouseEnter === null && s.onMouseMove === null && s.onMouseLeave === null)
      return;
    const l = new It(), d = sn(r);
    l.setFromCamera(d, t.value);
    const u = l.intersectObjects(c);
    u.length > 0 ? (o = u, i === !1 && s.onMouseEnter !== null && s.onMouseEnter(u, d), i = !0, s.onMouseLeave !== null && s.onMouseMove(u, d)) : (i && s.onMouseLeave !== null && s.onMouseLeave(o, d), i = !1, o = []);
  };
  it(() => {
    if (s.enableRaycasting) {
      if ((e == null ? void 0 : e.value) == null)
        return;
      e == null || e.value.addEventListener("click", n), e == null || e.value.addEventListener("mousemove", a);
    }
  }), _e(() => {
    if (s.enableRaycasting) {
      if ((e == null ? void 0 : e.value) == null)
        return;
      e == null || e.value.removeEventListener("click", n), e == null || e.value.removeEventListener("mousemove", a);
    }
  }), O(
    () => s.enableRaycasting,
    (r) => {
      r ? (e == null || e.value.addEventListener("click", n), e == null || e.value.addEventListener("mousemove", a)) : (e == null || e.value.removeEventListener("click", n), e == null || e.value.removeEventListener("mousemove", a));
    }
  );
}
function sn(c) {
  const s = new z(), t = c.currentTarget.getBoundingClientRect();
  return s.x = (c.clientX - t.left) / t.width * 2 - 1, s.y = -((c.clientY - t.top) / t.height) * 2 + 1, s;
}
const Gs = /* @__PURE__ */ I({
  __name: "Renderer",
  props: {
    alpha: { type: Boolean, default: !1 },
    antialias: { type: Boolean, default: !1 },
    autoResize: { type: Boolean, default: !0 },
    camera: null,
    height: { default: 0 },
    frameLimit: { default: 60 },
    onBeforeRender: { type: Function, default: () => {
    } },
    shadowMapEnabled: { type: Boolean, default: !1 },
    width: { default: 0 }
  },
  setup(c, { expose: s }) {
    const t = c;
    let e = Oe(null);
    const n = [], i = ce([]), o = ce([]);
    let a = Oe(null);
    const r = Oe([]), l = Oe([]), d = Oe();
    D("canvas", d);
    let u = !0, p = Date.now(), h = 1e3 / t.frameLimit;
    O(
      () => t.camera,
      (m) => y(m)
    );
    const y = (m) => {
      if (m) {
        const M = r.value.find((E) => E.name === m);
        M === void 0 && (a.value = null), a.value = M;
      } else
        a.value = r.value[0];
    };
    function _() {
      e.value !== null && (e.value.shadowMap.enabled = t.shadowMapEnabled, h = 1e3 / t.frameLimit, t.autoResize || e.value.setSize(t.width, t.height));
    }
    it(() => {
      e.value = new qn({ canvas: d.value, antialias: t.antialias, alpha: t.alpha }), e.value.setSize(1, 1), _(), y(t.camera), new ResizeObserver((M) => {
        M.forEach((E) => {
          e.value && t.autoResize && e.value.setSize(E.contentRect.width, E.contentRect.height);
        });
      }).observe(d.value.parentElement), b();
    }), _e(() => {
      for (let m of n)
        ve(m);
    });
    function b() {
      if (requestAnimationFrame(b), e.value === null)
        return;
      const m = Date.now(), M = m - p;
      if (!(h > -1 && M < h)) {
        if (p = m - M % h, t.onBeforeRender && t.onBeforeRender(), l.value.length > 0 && a.value)
          for (const E of l.value)
            E.value !== null && (E.value.object.uuid === a.value.uuid ? (E.value.enabled = u, E.value.update()) : E.value.enabled = !1);
        if (a.value && e)
          for (const E of n)
            e.value.render(E, a.value);
      }
    }
    return _(), O(
      () => t.shadowMapEnabled,
      () => _()
    ), O(
      () => t.frameLimit,
      () => _()
    ), O(
      () => t.width,
      () => _()
    ), O(
      () => t.height,
      () => _()
    ), D("addCamera", (m) => r.value.push(m)), D("addScene", (m) => n.push(m)), D("addGeometry", (m) => i.push(m)), D("getGeometry", (m) => i.find((M) => M.name === m)), D("addMaterial", (m) => o.push(m)), D("getMaterial", (m) => o.find((M) => M.name === m)), D("addControls", (m) => l.value.push(m)), D("enableAllControls", () => {
      u = !0;
    }), D("disableAllControls", () => {
      u = !1;
    }), D("camera", a), s({
      three: e
    }), (m, M) => (Vn(), Zn(Kn, null, [
      $n("canvas", {
        ref_key: "canvas",
        ref: d
      }, null, 512),
      te(m.$slots, "default")
    ], 64));
  }
}), Fs = /* @__PURE__ */ I({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(c, { expose: s }) {
    const t = c, e = new Wn();
    D("scene", e), S("addScene")(e);
    function n(i) {
      i.background && (e.background = new Y(i.background));
    }
    return n(t), O(
      () => t.background,
      () => n(t)
    ), s({ three: e }), (i, o) => te(i.$slots, "default");
  }
}), js = {
  name: "PerspectiveCamera"
}, Hs = /* @__PURE__ */ I({
  ...js,
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
  setup(c, { expose: s }) {
    const t = c, e = new Sn(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    S("addCamera")(e);
    const n = S("canvas");
    O(n, () => {
      new ResizeObserver((a) => {
        a.forEach((r) => {
          t.autoResize && (e.aspect = r.contentRect.width / r.contentRect.height, e.updateProjectionMatrix());
        });
      }).observe(n.value);
    }), R(t, "position", e), R(t, "up", e), R(t, "lookAt", e);
    function i() {
      e.name = t.name, t.autoResize || (e.aspect = t.aspect), e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return i(), g(t, "name", i), g(t, "aspect", i), g(t, "near", i), g(t, "far", i), D("parentCamera", e), s({ three: e }), (o, a) => te(o.$slots, "default");
  }
}), zs = {
  name: "OrthographicCamera"
}, Us = /* @__PURE__ */ I({
  ...zs,
  props: {
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(c, { expose: s }) {
    const t = c, e = new xn(-10, 10, 10, -10, 0.1, 1e3);
    e.lookAt(0, 0, 0), e.updateProjectionMatrix(), S("addCamera")(e);
    const n = S("canvas");
    O(n, () => {
      new ResizeObserver((a) => {
        a.forEach((r) => {
          const l = r.contentRect.width / r.contentRect.height;
          e.left = e.bottom * l, e.right = e.top * l, e.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), R(t, "position", e), R(t, "up", e), R(t, "lookAt", e);
    function i() {
      e.name = t.name, e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return i(), g(t, "name", i), g(t, "near", i), g(t, "far", i), D("parentCamera", e), s({ three: e }), (o, a) => te(o.$slots, "default");
  }
}), on = { type: "change" }, Tt = { type: "start" }, an = { type: "end" };
class Bs extends vn {
  constructor(s, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = s, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new x(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Se.ROTATE, MIDDLE: Se.DOLLY, RIGHT: Se.PAN }, this.touches = { ONE: Xe.ROTATE, TWO: Xe.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(f) {
      f.addEventListener("keydown", Yt), this._domElementKeyEvents = f;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(on), e.update(), i = n.NONE;
    }, this.update = function() {
      const f = new x(), L = new re().setFromUnitVectors(s.up, new x(0, 1, 0)), q = L.clone().invert(), ee = new x(), he = new re(), Be = 2 * Math.PI;
      return function() {
        const $t = e.object.position;
        f.copy($t).sub(e.target), f.applyQuaternion(L), a.setFromVector3(f), e.autoRotate && i === n.NONE && $(F()), e.enableDamping ? (a.theta += r.theta * e.dampingFactor, a.phi += r.phi * e.dampingFactor) : (a.theta += r.theta, a.phi += r.phi);
        let Me = e.minAzimuthAngle, Ee = e.maxAzimuthAngle;
        return isFinite(Me) && isFinite(Ee) && (Me < -Math.PI ? Me += Be : Me > Math.PI && (Me -= Be), Ee < -Math.PI ? Ee += Be : Ee > Math.PI && (Ee -= Be), Me <= Ee ? a.theta = Math.max(Me, Math.min(Ee, a.theta)) : a.theta = a.theta > (Me + Ee) / 2 ? Math.max(Me, a.theta) : Math.min(Ee, a.theta)), a.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(e.minDistance, Math.min(e.maxDistance, a.radius)), e.enableDamping === !0 ? e.target.addScaledVector(d, e.dampingFactor) : e.target.add(d), f.setFromSpherical(a), f.applyQuaternion(q), $t.copy(e.target).add(f), e.object.lookAt(e.target), e.enableDamping === !0 ? (r.theta *= 1 - e.dampingFactor, r.phi *= 1 - e.dampingFactor, d.multiplyScalar(1 - e.dampingFactor)) : (r.set(0, 0, 0), d.set(0, 0, 0)), l = 1, u || ee.distanceToSquared(e.object.position) > o || 8 * (1 - he.dot(e.object.quaternion)) > o ? (e.dispatchEvent(on), ee.copy(e.object.position), he.copy(e.object.quaternion), u = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", Vt), e.domElement.removeEventListener("pointerdown", Ne), e.domElement.removeEventListener("pointercancel", Bt), e.domElement.removeEventListener("wheel", Xt), e.domElement.removeEventListener("pointermove", bt), e.domElement.removeEventListener("pointerup", Mt), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", Yt);
    };
    const e = this, n = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let i = n.NONE;
    const o = 1e-6, a = new Qt(), r = new Qt();
    let l = 1;
    const d = new x();
    let u = !1;
    const p = new z(), h = new z(), y = new z(), _ = new z(), b = new z(), m = new z(), M = new z(), E = new z(), A = new z(), T = [], k = {};
    function F() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function G() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function $(f) {
      r.theta -= f;
    }
    function N(f) {
      r.phi -= f;
    }
    const V = function() {
      const f = new x();
      return function(q, ee) {
        f.setFromMatrixColumn(ee, 0), f.multiplyScalar(-q), d.add(f);
      };
    }(), oe = function() {
      const f = new x();
      return function(q, ee) {
        e.screenSpacePanning === !0 ? f.setFromMatrixColumn(ee, 1) : (f.setFromMatrixColumn(ee, 0), f.crossVectors(e.object.up, f)), f.multiplyScalar(q), d.add(f);
      };
    }(), U = function() {
      const f = new x();
      return function(q, ee) {
        const he = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const Be = e.object.position;
          f.copy(Be).sub(e.target);
          let rt = f.length();
          rt *= Math.tan(e.object.fov / 2 * Math.PI / 180), V(2 * q * rt / he.clientHeight, e.object.matrix), oe(2 * ee * rt / he.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (V(q * (e.object.right - e.object.left) / e.object.zoom / he.clientWidth, e.object.matrix), oe(ee * (e.object.top - e.object.bottom) / e.object.zoom / he.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function Z(f) {
      e.object.isPerspectiveCamera ? l /= f : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * f)), e.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function H(f) {
      e.object.isPerspectiveCamera ? l *= f : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / f)), e.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function le(f) {
      p.set(f.clientX, f.clientY);
    }
    function W(f) {
      M.set(f.clientX, f.clientY);
    }
    function ie(f) {
      _.set(f.clientX, f.clientY);
    }
    function Q(f) {
      h.set(f.clientX, f.clientY), y.subVectors(h, p).multiplyScalar(e.rotateSpeed);
      const L = e.domElement;
      $(2 * Math.PI * y.x / L.clientHeight), N(2 * Math.PI * y.y / L.clientHeight), p.copy(h), e.update();
    }
    function Le(f) {
      E.set(f.clientX, f.clientY), A.subVectors(E, M), A.y > 0 ? Z(G()) : A.y < 0 && H(G()), M.copy(E), e.update();
    }
    function Pe(f) {
      b.set(f.clientX, f.clientY), m.subVectors(b, _).multiplyScalar(e.panSpeed), U(m.x, m.y), _.copy(b), e.update();
    }
    function be(f) {
      f.deltaY < 0 ? H(G()) : f.deltaY > 0 && Z(G()), e.update();
    }
    function Ve(f) {
      let L = !1;
      switch (f.code) {
        case e.keys.UP:
          U(0, e.keyPanSpeed), L = !0;
          break;
        case e.keys.BOTTOM:
          U(0, -e.keyPanSpeed), L = !0;
          break;
        case e.keys.LEFT:
          U(e.keyPanSpeed, 0), L = !0;
          break;
        case e.keys.RIGHT:
          U(-e.keyPanSpeed, 0), L = !0;
          break;
      }
      L && (f.preventDefault(), e.update());
    }
    function Re() {
      if (T.length === 1)
        p.set(T[0].pageX, T[0].pageY);
      else {
        const f = 0.5 * (T[0].pageX + T[1].pageX), L = 0.5 * (T[0].pageY + T[1].pageY);
        p.set(f, L);
      }
    }
    function Ze() {
      if (T.length === 1)
        _.set(T[0].pageX, T[0].pageY);
      else {
        const f = 0.5 * (T[0].pageX + T[1].pageX), L = 0.5 * (T[0].pageY + T[1].pageY);
        _.set(f, L);
      }
    }
    function at() {
      const f = T[0].pageX - T[1].pageX, L = T[0].pageY - T[1].pageY, q = Math.sqrt(f * f + L * L);
      M.set(0, q);
    }
    function w() {
      e.enableZoom && at(), e.enablePan && Ze();
    }
    function P() {
      e.enableZoom && at(), e.enableRotate && Re();
    }
    function K(f) {
      if (T.length == 1)
        h.set(f.pageX, f.pageY);
      else {
        const q = Et(f), ee = 0.5 * (f.pageX + q.x), he = 0.5 * (f.pageY + q.y);
        h.set(ee, he);
      }
      y.subVectors(h, p).multiplyScalar(e.rotateSpeed);
      const L = e.domElement;
      $(2 * Math.PI * y.x / L.clientHeight), N(2 * Math.PI * y.y / L.clientHeight), p.copy(h);
    }
    function J(f) {
      if (T.length === 1)
        b.set(f.pageX, f.pageY);
      else {
        const L = Et(f), q = 0.5 * (f.pageX + L.x), ee = 0.5 * (f.pageY + L.y);
        b.set(q, ee);
      }
      m.subVectors(b, _).multiplyScalar(e.panSpeed), U(m.x, m.y), _.copy(b);
    }
    function ue(f) {
      const L = Et(f), q = f.pageX - L.x, ee = f.pageY - L.y, he = Math.sqrt(q * q + ee * ee);
      E.set(0, he), A.set(0, Math.pow(E.y / M.y, e.zoomSpeed)), Z(A.y), M.copy(E);
    }
    function me(f) {
      e.enableZoom && ue(f), e.enablePan && J(f);
    }
    function Ut(f) {
      e.enableZoom && ue(f), e.enableRotate && K(f);
    }
    function Ne(f) {
      e.enabled !== !1 && (T.length === 0 && (e.domElement.setPointerCapture(f.pointerId), e.domElement.addEventListener("pointermove", bt), e.domElement.addEventListener("pointerup", Mt)), Yn(f), f.pointerType === "touch" ? Bn(f) : zn(f));
    }
    function bt(f) {
      e.enabled !== !1 && (f.pointerType === "touch" ? Xn(f) : Un(f));
    }
    function Mt(f) {
      Zt(f), T.length === 0 && (e.domElement.releasePointerCapture(f.pointerId), e.domElement.removeEventListener("pointermove", bt), e.domElement.removeEventListener("pointerup", Mt)), e.dispatchEvent(an), i = n.NONE;
    }
    function Bt(f) {
      Zt(f);
    }
    function zn(f) {
      let L;
      switch (f.button) {
        case 0:
          L = e.mouseButtons.LEFT;
          break;
        case 1:
          L = e.mouseButtons.MIDDLE;
          break;
        case 2:
          L = e.mouseButtons.RIGHT;
          break;
        default:
          L = -1;
      }
      switch (L) {
        case Se.DOLLY:
          if (e.enableZoom === !1)
            return;
          W(f), i = n.DOLLY;
          break;
        case Se.ROTATE:
          if (f.ctrlKey || f.metaKey || f.shiftKey) {
            if (e.enablePan === !1)
              return;
            ie(f), i = n.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            le(f), i = n.ROTATE;
          }
          break;
        case Se.PAN:
          if (f.ctrlKey || f.metaKey || f.shiftKey) {
            if (e.enableRotate === !1)
              return;
            le(f), i = n.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            ie(f), i = n.PAN;
          }
          break;
        default:
          i = n.NONE;
      }
      i !== n.NONE && e.dispatchEvent(Tt);
    }
    function Un(f) {
      if (e.enabled !== !1)
        switch (i) {
          case n.ROTATE:
            if (e.enableRotate === !1)
              return;
            Q(f);
            break;
          case n.DOLLY:
            if (e.enableZoom === !1)
              return;
            Le(f);
            break;
          case n.PAN:
            if (e.enablePan === !1)
              return;
            Pe(f);
            break;
        }
    }
    function Xt(f) {
      e.enabled === !1 || e.enableZoom === !1 || i !== n.NONE || (f.preventDefault(), e.dispatchEvent(Tt), be(f), e.dispatchEvent(an));
    }
    function Yt(f) {
      e.enabled === !1 || e.enablePan === !1 || Ve(f);
    }
    function Bn(f) {
      switch (Kt(f), T.length) {
        case 1:
          switch (e.touches.ONE) {
            case Xe.ROTATE:
              if (e.enableRotate === !1)
                return;
              Re(), i = n.TOUCH_ROTATE;
              break;
            case Xe.PAN:
              if (e.enablePan === !1)
                return;
              Ze(), i = n.TOUCH_PAN;
              break;
            default:
              i = n.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case Xe.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              w(), i = n.TOUCH_DOLLY_PAN;
              break;
            case Xe.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              P(), i = n.TOUCH_DOLLY_ROTATE;
              break;
            default:
              i = n.NONE;
          }
          break;
        default:
          i = n.NONE;
      }
      i !== n.NONE && e.dispatchEvent(Tt);
    }
    function Xn(f) {
      switch (Kt(f), i) {
        case n.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          K(f), e.update();
          break;
        case n.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          J(f), e.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          me(f), e.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          Ut(f), e.update();
          break;
        default:
          i = n.NONE;
      }
    }
    function Vt(f) {
      e.enabled !== !1 && f.preventDefault();
    }
    function Yn(f) {
      T.push(f);
    }
    function Zt(f) {
      delete k[f.pointerId];
      for (let L = 0; L < T.length; L++)
        if (T[L].pointerId == f.pointerId) {
          T.splice(L, 1);
          return;
        }
    }
    function Kt(f) {
      let L = k[f.pointerId];
      L === void 0 && (L = new z(), k[f.pointerId] = L), L.set(f.pageX, f.pageY);
    }
    function Et(f) {
      const L = f.pointerId === T[0].pointerId ? T[1] : T[0];
      return k[L.pointerId];
    }
    e.domElement.addEventListener("contextmenu", Vt), e.domElement.addEventListener("pointerdown", Ne), e.domElement.addEventListener("pointercancel", Bt), e.domElement.addEventListener("wheel", Xt, { passive: !1 }), this.update();
  }
}
const Xs = {
  name: "OrbitControls",
  render: () => null
}, Ys = /* @__PURE__ */ I({
  ...Xs,
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
  setup(c, { expose: s }) {
    const t = c, e = Oe(null);
    S("addControls")(e);
    const n = S("parentCamera"), i = S("canvas");
    function o() {
      e.value != null && (e.value.enablePan = t.enablePan, e.value.enableRotate = t.enableRotate, e.value.enableZoom = t.enableZoom, e.value.minZoom = t.minZoom, e.value.maxZoom = t.maxZoom, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance, e.value.minPolarAngle = t.minPolarAngle, e.value.maxPolarAngle = t.maxPolarAngle, e.value.minAzimuthAngle = t.minAzimuthAngle, e.value.maxAzimuthAngle = t.maxAzimuthAngle);
    }
    let a = !1;
    const r = () => {
      i.value && (a || (e.value = new Bs(n, i.value), o(), R(t, "target", e.value), a = !0));
    };
    return O(i, () => {
      r();
    }), o(), g(t, "enablePan", o), g(t, "enableRotate", o), g(t, "enableZoom", o), g(t, "minZoom", o), g(t, "maxZoom", o), g(t, "minDistance", o), g(t, "maxDistance", o), g(t, "minPolarAngle", o), g(t, "maxPolarAngle", o), g(t, "minAzimuthAngle", o), g(t, "maxAzimuthAngle", o), s({ three: e }), { props: t, three: e, camera: n, canvas: i, applyProps: o, get boundCamera() {
      return a;
    }, set boundCamera(l) {
      a = l;
    }, tryBindCamera: r };
  }
}), St = { type: "change" }, xt = { type: "start" }, vt = { type: "end" };
class Vs extends vn {
  constructor(s, t) {
    super(), t === void 0 && console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
    const e = this, n = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };
    this.object = s, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.screen = { left: 0, top: 0, width: 0, height: 0 }, this.rotateSpeed = 1, this.zoomSpeed = 1.2, this.panSpeed = 0.3, this.noRotate = !1, this.noZoom = !1, this.noPan = !1, this.staticMoving = !1, this.dynamicDampingFactor = 0.2, this.minDistance = 0, this.maxDistance = 1 / 0, this.keys = ["KeyA", "KeyS", "KeyD"], this.mouseButtons = { LEFT: Se.ROTATE, MIDDLE: Se.DOLLY, RIGHT: Se.PAN }, this.target = new x();
    const i = 1e-6, o = new x();
    let a = 1, r = n.NONE, l = n.NONE, d = 0, u = 0, p = 0;
    const h = new x(), y = new z(), _ = new z(), b = new x(), m = new z(), M = new z(), E = new z(), A = new z(), T = [], k = {};
    this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.up0 = this.object.up.clone(), this.zoom0 = this.object.zoom, this.handleResize = function() {
      const w = e.domElement.getBoundingClientRect(), P = e.domElement.ownerDocument.documentElement;
      e.screen.left = w.left + window.pageXOffset - P.clientLeft, e.screen.top = w.top + window.pageYOffset - P.clientTop, e.screen.width = w.width, e.screen.height = w.height;
    };
    const F = function() {
      const w = new z();
      return function(K, J) {
        return w.set(
          (K - e.screen.left) / e.screen.width,
          (J - e.screen.top) / e.screen.height
        ), w;
      };
    }(), G = function() {
      const w = new z();
      return function(K, J) {
        return w.set(
          (K - e.screen.width * 0.5 - e.screen.left) / (e.screen.width * 0.5),
          (e.screen.height + 2 * (e.screen.top - J)) / e.screen.width
        ), w;
      };
    }();
    this.rotateCamera = function() {
      const w = new x(), P = new re(), K = new x(), J = new x(), ue = new x(), me = new x();
      return function() {
        me.set(_.x - y.x, _.y - y.y, 0);
        let Ne = me.length();
        Ne ? (h.copy(e.object.position).sub(e.target), K.copy(h).normalize(), J.copy(e.object.up).normalize(), ue.crossVectors(J, K).normalize(), J.setLength(_.y - y.y), ue.setLength(_.x - y.x), me.copy(J.add(ue)), w.crossVectors(me, h).normalize(), Ne *= e.rotateSpeed, P.setFromAxisAngle(w, Ne), h.applyQuaternion(P), e.object.up.applyQuaternion(P), b.copy(w), p = Ne) : !e.staticMoving && p && (p *= Math.sqrt(1 - e.dynamicDampingFactor), h.copy(e.object.position).sub(e.target), P.setFromAxisAngle(b, p), h.applyQuaternion(P), e.object.up.applyQuaternion(P)), y.copy(_);
      };
    }(), this.zoomCamera = function() {
      let w;
      r === n.TOUCH_ZOOM_PAN ? (w = d / u, d = u, e.object.isPerspectiveCamera ? h.multiplyScalar(w) : e.object.isOrthographicCamera ? (e.object.zoom /= w, e.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")) : (w = 1 + (M.y - m.y) * e.zoomSpeed, w !== 1 && w > 0 && (e.object.isPerspectiveCamera ? h.multiplyScalar(w) : e.object.isOrthographicCamera ? (e.object.zoom /= w, e.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")), e.staticMoving ? m.copy(M) : m.y += (M.y - m.y) * this.dynamicDampingFactor);
    }, this.panCamera = function() {
      const w = new z(), P = new x(), K = new x();
      return function() {
        if (w.copy(A).sub(E), w.lengthSq()) {
          if (e.object.isOrthographicCamera) {
            const ue = (e.object.right - e.object.left) / e.object.zoom / e.domElement.clientWidth, me = (e.object.top - e.object.bottom) / e.object.zoom / e.domElement.clientWidth;
            w.x *= ue, w.y *= me;
          }
          w.multiplyScalar(h.length() * e.panSpeed), K.copy(h).cross(e.object.up).setLength(w.x), K.add(P.copy(e.object.up).setLength(w.y)), e.object.position.add(K), e.target.add(K), e.staticMoving ? E.copy(A) : E.add(w.subVectors(A, E).multiplyScalar(e.dynamicDampingFactor));
        }
      };
    }(), this.checkDistances = function() {
      (!e.noZoom || !e.noPan) && (h.lengthSq() > e.maxDistance * e.maxDistance && (e.object.position.addVectors(e.target, h.setLength(e.maxDistance)), m.copy(M)), h.lengthSq() < e.minDistance * e.minDistance && (e.object.position.addVectors(e.target, h.setLength(e.minDistance)), m.copy(M)));
    }, this.update = function() {
      h.subVectors(e.object.position, e.target), e.noRotate || e.rotateCamera(), e.noZoom || e.zoomCamera(), e.noPan || e.panCamera(), e.object.position.addVectors(e.target, h), e.object.isPerspectiveCamera ? (e.checkDistances(), e.object.lookAt(e.target), o.distanceToSquared(e.object.position) > i && (e.dispatchEvent(St), o.copy(e.object.position))) : e.object.isOrthographicCamera ? (e.object.lookAt(e.target), (o.distanceToSquared(e.object.position) > i || a !== e.object.zoom) && (e.dispatchEvent(St), o.copy(e.object.position), a = e.object.zoom)) : console.warn("THREE.TrackballControls: Unsupported camera type");
    }, this.reset = function() {
      r = n.NONE, l = n.NONE, e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.up.copy(e.up0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), h.subVectors(e.object.position, e.target), e.object.lookAt(e.target), e.dispatchEvent(St), o.copy(e.object.position), a = e.object.zoom;
    };
    function $(w) {
      e.enabled !== !1 && (T.length === 0 && (e.domElement.setPointerCapture(w.pointerId), e.domElement.addEventListener("pointermove", N), e.domElement.addEventListener("pointerup", V)), Ve(w), w.pointerType === "touch" ? Q(w) : H(w));
    }
    function N(w) {
      e.enabled !== !1 && (w.pointerType === "touch" ? Le(w) : le(w));
    }
    function V(w) {
      e.enabled !== !1 && (w.pointerType === "touch" ? Pe(w) : W(), Re(w), T.length === 0 && (e.domElement.releasePointerCapture(w.pointerId), e.domElement.removeEventListener("pointermove", N), e.domElement.removeEventListener("pointerup", V)));
    }
    function oe(w) {
      Re(w);
    }
    function U(w) {
      e.enabled !== !1 && (window.removeEventListener("keydown", U), l === n.NONE && (w.code === e.keys[n.ROTATE] && !e.noRotate ? l = n.ROTATE : w.code === e.keys[n.ZOOM] && !e.noZoom ? l = n.ZOOM : w.code === e.keys[n.PAN] && !e.noPan && (l = n.PAN)));
    }
    function Z() {
      e.enabled !== !1 && (l = n.NONE, window.addEventListener("keydown", U));
    }
    function H(w) {
      if (r === n.NONE)
        switch (w.button) {
          case e.mouseButtons.LEFT:
            r = n.ROTATE;
            break;
          case e.mouseButtons.MIDDLE:
            r = n.ZOOM;
            break;
          case e.mouseButtons.RIGHT:
            r = n.PAN;
            break;
        }
      const P = l !== n.NONE ? l : r;
      P === n.ROTATE && !e.noRotate ? (_.copy(G(w.pageX, w.pageY)), y.copy(_)) : P === n.ZOOM && !e.noZoom ? (m.copy(F(w.pageX, w.pageY)), M.copy(m)) : P === n.PAN && !e.noPan && (E.copy(F(w.pageX, w.pageY)), A.copy(E)), e.dispatchEvent(xt);
    }
    function le(w) {
      const P = l !== n.NONE ? l : r;
      P === n.ROTATE && !e.noRotate ? (y.copy(_), _.copy(G(w.pageX, w.pageY))) : P === n.ZOOM && !e.noZoom ? M.copy(F(w.pageX, w.pageY)) : P === n.PAN && !e.noPan && A.copy(F(w.pageX, w.pageY));
    }
    function W() {
      r = n.NONE, e.dispatchEvent(vt);
    }
    function ie(w) {
      if (e.enabled !== !1 && e.noZoom !== !0) {
        switch (w.preventDefault(), w.deltaMode) {
          case 2:
            m.y -= w.deltaY * 0.025;
            break;
          case 1:
            m.y -= w.deltaY * 0.01;
            break;
          default:
            m.y -= w.deltaY * 25e-5;
            break;
        }
        e.dispatchEvent(xt), e.dispatchEvent(vt);
      }
    }
    function Q(w) {
      switch (Ze(w), T.length) {
        case 1:
          r = n.TOUCH_ROTATE, _.copy(G(T[0].pageX, T[0].pageY)), y.copy(_);
          break;
        default:
          r = n.TOUCH_ZOOM_PAN;
          const P = T[0].pageX - T[1].pageX, K = T[0].pageY - T[1].pageY;
          u = d = Math.sqrt(P * P + K * K);
          const J = (T[0].pageX + T[1].pageX) / 2, ue = (T[0].pageY + T[1].pageY) / 2;
          E.copy(F(J, ue)), A.copy(E);
          break;
      }
      e.dispatchEvent(xt);
    }
    function Le(w) {
      switch (Ze(w), T.length) {
        case 1:
          y.copy(_), _.copy(G(w.pageX, w.pageY));
          break;
        default:
          const P = at(w), K = w.pageX - P.x, J = w.pageY - P.y;
          u = Math.sqrt(K * K + J * J);
          const ue = (w.pageX + P.x) / 2, me = (w.pageY + P.y) / 2;
          A.copy(F(ue, me));
          break;
      }
    }
    function Pe(w) {
      switch (T.length) {
        case 0:
          r = n.NONE;
          break;
        case 1:
          r = n.TOUCH_ROTATE, _.copy(G(w.pageX, w.pageY)), y.copy(_);
          break;
        case 2:
          r = n.TOUCH_ZOOM_PAN, _.copy(G(w.pageX - y.x, w.pageY - y.y)), y.copy(_);
          break;
      }
      e.dispatchEvent(vt);
    }
    function be(w) {
      e.enabled !== !1 && w.preventDefault();
    }
    function Ve(w) {
      T.push(w);
    }
    function Re(w) {
      delete k[w.pointerId];
      for (let P = 0; P < T.length; P++)
        if (T[P].pointerId == w.pointerId) {
          T.splice(P, 1);
          return;
        }
    }
    function Ze(w) {
      let P = k[w.pointerId];
      P === void 0 && (P = new z(), k[w.pointerId] = P), P.set(w.pageX, w.pageY);
    }
    function at(w) {
      const P = w.pointerId === T[0].pointerId ? T[1] : T[0];
      return k[P.pointerId];
    }
    this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", be), e.domElement.removeEventListener("pointerdown", $), e.domElement.removeEventListener("pointercancel", oe), e.domElement.removeEventListener("wheel", ie), e.domElement.removeEventListener("pointermove", N), e.domElement.removeEventListener("pointerup", V), window.removeEventListener("keydown", U), window.removeEventListener("keyup", Z);
    }, this.domElement.addEventListener("contextmenu", be), this.domElement.addEventListener("pointerdown", $), this.domElement.addEventListener("pointercancel", oe), this.domElement.addEventListener("wheel", ie, { passive: !1 }), window.addEventListener("keydown", U), window.addEventListener("keyup", Z), this.handleResize(), this.update();
  }
}
const Zs = {
  name: "TrackballControls",
  render: () => null
}, Ks = /* @__PURE__ */ I({
  ...Zs,
  props: {
    minDistance: { default: 0 },
    maxDistance: { default: 1 / 0 },
    panSpeed: { default: 0.3 },
    rotateSpeed: { default: 1 },
    zoomSpeed: { default: 1.2 }
  },
  setup(c, { expose: s }) {
    const t = c, e = Oe(null);
    S("addControls")(e);
    const n = S("parentCamera"), i = S("canvas");
    function o() {
      e.value != null && (e.value.rotateSpeed = t.rotateSpeed, e.value.zoomSpeed = t.zoomSpeed, e.value.panSpeed = t.panSpeed, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance);
    }
    let a = !1;
    const r = () => {
      if (!i.value || a)
        return;
      e.value = new Vs(n, i.value), new ResizeObserver((d) => {
        d.forEach((u) => {
          var p;
          (p = e.value) == null || p.handleResize();
        });
      }).observe(i.value), o(), a = !0;
    };
    return O(i, () => {
      r();
    }), o(), g(t, "panSpeed", o), g(t, "rotateSpeed", o), g(t, "zoomSpeed", o), g(t, "minDistance", o), g(t, "maxDistance", o), s({ three: e }), { props: t, three: e, camera: n, canvas: i, applyProps: o, get boundCamera() {
      return a;
    }, set boundCamera(l) {
      a = l;
    }, tryBindCamera: r };
  }
}), ke = new It(), ae = new x(), Ie = new x(), B = new re(), rn = {
  X: new x(1, 0, 0),
  Y: new x(0, 1, 0),
  Z: new x(0, 0, 1)
}, At = { type: "change" }, cn = { type: "mouseDown" }, ln = { type: "mouseUp", mode: null }, un = { type: "objectChange" };
class $s extends mt {
  constructor(s, t) {
    super(), t === void 0 && (console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'), t = document), this.isTransformControls = !0, this.visible = !1, this.domElement = t, this.domElement.style.touchAction = "none";
    const e = new to();
    this._gizmo = e, this.add(e);
    const n = new no();
    this._plane = n, this.add(n);
    const i = this;
    function o(M, E) {
      let A = E;
      Object.defineProperty(i, M, {
        get: function() {
          return A !== void 0 ? A : E;
        },
        set: function(T) {
          A !== T && (A = T, n[M] = T, e[M] = T, i.dispatchEvent({ type: M + "-changed", value: T }), i.dispatchEvent(At));
        }
      }), i[M] = E, n[M] = E, e[M] = E;
    }
    o("camera", s), o("object", void 0), o("enabled", !0), o("axis", null), o("mode", "translate"), o("translationSnap", null), o("rotationSnap", null), o("scaleSnap", null), o("space", "world"), o("size", 1), o("dragging", !1), o("showX", !0), o("showY", !0), o("showZ", !0);
    const a = new x(), r = new x(), l = new re(), d = new re(), u = new x(), p = new re(), h = new x(), y = new x(), _ = new x(), b = 0, m = new x();
    o("worldPosition", a), o("worldPositionStart", r), o("worldQuaternion", l), o("worldQuaternionStart", d), o("cameraPosition", u), o("cameraQuaternion", p), o("pointStart", h), o("pointEnd", y), o("rotationAxis", _), o("rotationAngle", b), o("eye", m), this._offset = new x(), this._startNorm = new x(), this._endNorm = new x(), this._cameraScale = new x(), this._parentPosition = new x(), this._parentQuaternion = new re(), this._parentQuaternionInv = new re(), this._parentScale = new x(), this._worldScaleStart = new x(), this._worldQuaternionInv = new re(), this._worldScale = new x(), this._positionStart = new x(), this._quaternionStart = new re(), this._scaleStart = new x(), this._getPointer = Qs.bind(this), this._onPointerDown = Ws.bind(this), this._onPointerHover = qs.bind(this), this._onPointerMove = Js.bind(this), this._onPointerUp = eo.bind(this), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointermove", this._onPointerHover), this.domElement.addEventListener("pointerup", this._onPointerUp);
  }
  updateMatrixWorld() {
    this.object !== void 0 && (this.object.updateMatrixWorld(), this.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : this.object.parent.matrixWorld.decompose(this._parentPosition, this._parentQuaternion, this._parentScale), this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this._worldScale), this._parentQuaternionInv.copy(this._parentQuaternion).invert(), this._worldQuaternionInv.copy(this.worldQuaternion).invert()), this.camera.updateMatrixWorld(), this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this._cameraScale), this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(), super.updateMatrixWorld(this);
  }
  pointerHover(s) {
    if (this.object === void 0 || this.dragging === !0)
      return;
    ke.setFromCamera(s, this.camera);
    const t = Lt(this._gizmo.picker[this.mode], ke);
    t ? this.axis = t.object.name : this.axis = null;
  }
  pointerDown(s) {
    if (!(this.object === void 0 || this.dragging === !0 || s.button !== 0) && this.axis !== null) {
      ke.setFromCamera(s, this.camera);
      const t = Lt(this._plane, ke, !0);
      t && (this.object.updateMatrixWorld(), this.object.parent.updateMatrixWorld(), this._positionStart.copy(this.object.position), this._quaternionStart.copy(this.object.quaternion), this._scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart), this.pointStart.copy(t.point).sub(this.worldPositionStart)), this.dragging = !0, cn.mode = this.mode, this.dispatchEvent(cn);
    }
  }
  pointerMove(s) {
    const t = this.axis, e = this.mode, n = this.object;
    let i = this.space;
    if (e === "scale" ? i = "local" : (t === "E" || t === "XYZE" || t === "XYZ") && (i = "world"), n === void 0 || t === null || this.dragging === !1 || s.button !== -1)
      return;
    ke.setFromCamera(s, this.camera);
    const o = Lt(this._plane, ke, !0);
    if (o) {
      if (this.pointEnd.copy(o.point).sub(this.worldPositionStart), e === "translate")
        this._offset.copy(this.pointEnd).sub(this.pointStart), i === "local" && t !== "XYZ" && this._offset.applyQuaternion(this._worldQuaternionInv), t.indexOf("X") === -1 && (this._offset.x = 0), t.indexOf("Y") === -1 && (this._offset.y = 0), t.indexOf("Z") === -1 && (this._offset.z = 0), i === "local" && t !== "XYZ" ? this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale) : this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale), n.position.copy(this._offset).add(this._positionStart), this.translationSnap && (i === "local" && (n.position.applyQuaternion(B.copy(this._quaternionStart).invert()), t.search("X") !== -1 && (n.position.x = Math.round(n.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (n.position.y = Math.round(n.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (n.position.z = Math.round(n.position.z / this.translationSnap) * this.translationSnap), n.position.applyQuaternion(this._quaternionStart)), i === "world" && (n.parent && n.position.add(ae.setFromMatrixPosition(n.parent.matrixWorld)), t.search("X") !== -1 && (n.position.x = Math.round(n.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (n.position.y = Math.round(n.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (n.position.z = Math.round(n.position.z / this.translationSnap) * this.translationSnap), n.parent && n.position.sub(ae.setFromMatrixPosition(n.parent.matrixWorld))));
      else if (e === "scale") {
        if (t.search("XYZ") !== -1) {
          let a = this.pointEnd.length() / this.pointStart.length();
          this.pointEnd.dot(this.pointStart) < 0 && (a *= -1), Ie.set(a, a, a);
        } else
          ae.copy(this.pointStart), Ie.copy(this.pointEnd), ae.applyQuaternion(this._worldQuaternionInv), Ie.applyQuaternion(this._worldQuaternionInv), Ie.divide(ae), t.search("X") === -1 && (Ie.x = 1), t.search("Y") === -1 && (Ie.y = 1), t.search("Z") === -1 && (Ie.z = 1);
        n.scale.copy(this._scaleStart).multiply(Ie), this.scaleSnap && (t.search("X") !== -1 && (n.scale.x = Math.round(n.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Y") !== -1 && (n.scale.y = Math.round(n.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Z") !== -1 && (n.scale.z = Math.round(n.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
      } else if (e === "rotate") {
        this._offset.copy(this.pointEnd).sub(this.pointStart);
        const a = 20 / this.worldPosition.distanceTo(ae.setFromMatrixPosition(this.camera.matrixWorld));
        t === "E" ? (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this._startNorm.copy(this.pointStart).normalize(), this._endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1) : t === "XYZE" ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(), this.rotationAngle = this._offset.dot(ae.copy(this.rotationAxis).cross(this.eye)) * a) : (t === "X" || t === "Y" || t === "Z") && (this.rotationAxis.copy(rn[t]), ae.copy(rn[t]), i === "local" && ae.applyQuaternion(this.worldQuaternion), this.rotationAngle = this._offset.dot(ae.cross(this.eye).normalize()) * a), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), i === "local" && t !== "E" && t !== "XYZE" ? (n.quaternion.copy(this._quaternionStart), n.quaternion.multiply(B.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv), n.quaternion.copy(B.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), n.quaternion.multiply(this._quaternionStart).normalize());
      }
      this.dispatchEvent(At), this.dispatchEvent(un);
    }
  }
  pointerUp(s) {
    s.button === 0 && (this.dragging && this.axis !== null && (ln.mode = this.mode, this.dispatchEvent(ln)), this.dragging = !1, this.axis = null);
  }
  dispose() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerHover), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.traverse(function(s) {
      s.geometry && s.geometry.dispose(), s.material && s.material.dispose();
    });
  }
  attach(s) {
    return this.object = s, this.visible = !0, this;
  }
  detach() {
    return this.object = void 0, this.visible = !1, this.axis = null, this;
  }
  reset() {
    this.enabled && this.dragging && (this.object.position.copy(this._positionStart), this.object.quaternion.copy(this._quaternionStart), this.object.scale.copy(this._scaleStart), this.dispatchEvent(At), this.dispatchEvent(un), this.pointStart.copy(this.pointEnd));
  }
  getRaycaster() {
    return ke;
  }
  getMode() {
    return this.mode;
  }
  setMode(s) {
    this.mode = s;
  }
  setTranslationSnap(s) {
    this.translationSnap = s;
  }
  setRotationSnap(s) {
    this.rotationSnap = s;
  }
  setScaleSnap(s) {
    this.scaleSnap = s;
  }
  setSize(s) {
    this.size = s;
  }
  setSpace(s) {
    this.space = s;
  }
  update() {
    console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.");
  }
}
function Qs(c) {
  if (this.domElement.ownerDocument.pointerLockElement)
    return {
      x: 0,
      y: 0,
      button: c.button
    };
  {
    const s = this.domElement.getBoundingClientRect();
    return {
      x: (c.clientX - s.left) / s.width * 2 - 1,
      y: -(c.clientY - s.top) / s.height * 2 + 1,
      button: c.button
    };
  }
}
function qs(c) {
  if (this.enabled)
    switch (c.pointerType) {
      case "mouse":
      case "pen":
        this.pointerHover(this._getPointer(c));
        break;
    }
}
function Ws(c) {
  this.enabled && (document.pointerLockElement || this.domElement.setPointerCapture(c.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.pointerHover(this._getPointer(c)), this.pointerDown(this._getPointer(c)));
}
function Js(c) {
  this.enabled && this.pointerMove(this._getPointer(c));
}
function eo(c) {
  this.enabled && (this.domElement.releasePointerCapture(c.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.pointerUp(this._getPointer(c)));
}
function Lt(c, s, t) {
  const e = s.intersectObject(c, !0);
  for (let n = 0; n < e.length; n++)
    if (e[n].object.visible || t)
      return e[n];
  return !1;
}
const lt = new Jn(), j = new x(0, 1, 0), dn = new x(0, 0, 0), hn = new yt(), ut = new re(), pt = new re(), ge = new x(), pn = new yt(), Je = new x(1, 0, 0), De = new x(0, 1, 0), et = new x(0, 0, 1), dt = new x(), $e = new x(), Qe = new x();
class to extends mt {
  constructor() {
    super(), this.isTransformControlsGizmo = !0, this.type = "TransformControlsGizmo";
    const s = new we({
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      toneMapped: !1,
      transparent: !0
    }), t = new xe({
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      toneMapped: !1,
      transparent: !0
    }), e = s.clone();
    e.opacity = 0.15;
    const n = t.clone();
    n.opacity = 0.5;
    const i = s.clone();
    i.color.setHex(16711680);
    const o = s.clone();
    o.color.setHex(65280);
    const a = s.clone();
    a.color.setHex(255);
    const r = s.clone();
    r.color.setHex(16711680), r.opacity = 0.5;
    const l = s.clone();
    l.color.setHex(65280), l.opacity = 0.5;
    const d = s.clone();
    d.color.setHex(255), d.opacity = 0.5;
    const u = s.clone();
    u.opacity = 0.25;
    const p = s.clone();
    p.color.setHex(16776960), p.opacity = 0.25, s.clone().color.setHex(16776960);
    const y = s.clone();
    y.color.setHex(7895160);
    const _ = new se(0, 0.04, 0.1, 12);
    _.translate(0, 0.05, 0);
    const b = new ne(0.08, 0.08, 0.08);
    b.translate(0, 0.04, 0);
    const m = new X();
    m.setAttribute("position", new pe([0, 0, 0, 1, 0, 0], 3));
    const M = new se(75e-4, 75e-4, 0.5, 3);
    M.translate(0, 0.25, 0);
    function E(H, le) {
      const W = new Ke(H, 75e-4, 3, 64, le * Math.PI * 2);
      return W.rotateY(Math.PI / 2), W.rotateX(Math.PI / 2), W;
    }
    function A() {
      const H = new X();
      return H.setAttribute("position", new pe([0, 0, 0, 1, 1, 1], 3)), H;
    }
    const T = {
      X: [
        [new v(_, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
        [new v(_, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
        [new v(M, i), [0, 0, 0], [0, 0, -Math.PI / 2]]
      ],
      Y: [
        [new v(_, o), [0, 0.5, 0]],
        [new v(_, o), [0, -0.5, 0], [Math.PI, 0, 0]],
        [new v(M, o)]
      ],
      Z: [
        [new v(_, a), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
        [new v(_, a), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
        [new v(M, a), null, [Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new v(new ct(0.1, 0), u.clone()), [0, 0, 0]]
      ],
      XY: [
        [new v(new ne(0.15, 0.15, 0.01), d.clone()), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new v(new ne(0.15, 0.15, 0.01), r.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new v(new ne(0.15, 0.15, 0.01), l.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ]
    }, k = {
      X: [
        [new v(new se(0.2, 0, 0.6, 4), e), [0.3, 0, 0], [0, 0, -Math.PI / 2]],
        [new v(new se(0.2, 0, 0.6, 4), e), [-0.3, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new v(new se(0.2, 0, 0.6, 4), e), [0, 0.3, 0]],
        [new v(new se(0.2, 0, 0.6, 4), e), [0, -0.3, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new v(new se(0.2, 0, 0.6, 4), e), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
        [new v(new se(0.2, 0, 0.6, 4), e), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new v(new ct(0.2, 0), e)]
      ],
      XY: [
        [new v(new ne(0.2, 0.2, 0.01), e), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new v(new ne(0.2, 0.2, 0.01), e), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new v(new ne(0.2, 0.2, 0.01), e), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ]
    }, F = {
      START: [
        [new v(new ct(0.01, 2), n), null, null, null, "helper"]
      ],
      END: [
        [new v(new ct(0.01, 2), n), null, null, null, "helper"]
      ],
      DELTA: [
        [new ye(A(), n), null, null, null, "helper"]
      ],
      X: [
        [new ye(m, n.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ],
      Y: [
        [new ye(m, n.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]
      ],
      Z: [
        [new ye(m, n.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]
      ]
    }, G = {
      XYZE: [
        [new v(E(0.5, 1), y), null, [0, Math.PI / 2, 0]]
      ],
      X: [
        [new v(E(0.5, 0.5), i)]
      ],
      Y: [
        [new v(E(0.5, 0.5), o), null, [0, 0, -Math.PI / 2]]
      ],
      Z: [
        [new v(E(0.5, 0.5), a), null, [0, Math.PI / 2, 0]]
      ],
      E: [
        [new v(E(0.75, 1), p), null, [0, Math.PI / 2, 0]]
      ]
    }, $ = {
      AXIS: [
        [new ye(m, n.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ]
    }, N = {
      XYZE: [
        [new v(new An(0.25, 10, 8), e)]
      ],
      X: [
        [new v(new Ke(0.5, 0.1, 4, 24), e), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]
      ],
      Y: [
        [new v(new Ke(0.5, 0.1, 4, 24), e), [0, 0, 0], [Math.PI / 2, 0, 0]]
      ],
      Z: [
        [new v(new Ke(0.5, 0.1, 4, 24), e), [0, 0, 0], [0, 0, -Math.PI / 2]]
      ],
      E: [
        [new v(new Ke(0.75, 0.1, 2, 24), e)]
      ]
    }, V = {
      X: [
        [new v(b, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
        [new v(M, i), [0, 0, 0], [0, 0, -Math.PI / 2]],
        [new v(b, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new v(b, o), [0, 0.5, 0]],
        [new v(M, o)],
        [new v(b, o), [0, -0.5, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new v(b, a), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
        [new v(M, a), [0, 0, 0], [Math.PI / 2, 0, 0]],
        [new v(b, a), [0, 0, -0.5], [-Math.PI / 2, 0, 0]]
      ],
      XY: [
        [new v(new ne(0.15, 0.15, 0.01), d), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new v(new ne(0.15, 0.15, 0.01), r), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new v(new ne(0.15, 0.15, 0.01), l), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new v(new ne(0.1, 0.1, 0.1), u.clone())]
      ]
    }, oe = {
      X: [
        [new v(new se(0.2, 0, 0.6, 4), e), [0.3, 0, 0], [0, 0, -Math.PI / 2]],
        [new v(new se(0.2, 0, 0.6, 4), e), [-0.3, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new v(new se(0.2, 0, 0.6, 4), e), [0, 0.3, 0]],
        [new v(new se(0.2, 0, 0.6, 4), e), [0, -0.3, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new v(new se(0.2, 0, 0.6, 4), e), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
        [new v(new se(0.2, 0, 0.6, 4), e), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]
      ],
      XY: [
        [new v(new ne(0.2, 0.2, 0.01), e), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new v(new ne(0.2, 0.2, 0.01), e), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new v(new ne(0.2, 0.2, 0.01), e), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new v(new ne(0.2, 0.2, 0.2), e), [0, 0, 0]]
      ]
    }, U = {
      X: [
        [new ye(m, n.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ],
      Y: [
        [new ye(m, n.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]
      ],
      Z: [
        [new ye(m, n.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]
      ]
    };
    function Z(H) {
      const le = new mt();
      for (const W in H)
        for (let ie = H[W].length; ie--; ) {
          const Q = H[W][ie][0].clone(), Le = H[W][ie][1], Pe = H[W][ie][2], be = H[W][ie][3], Ve = H[W][ie][4];
          Q.name = W, Q.tag = Ve, Le && Q.position.set(Le[0], Le[1], Le[2]), Pe && Q.rotation.set(Pe[0], Pe[1], Pe[2]), be && Q.scale.set(be[0], be[1], be[2]), Q.updateMatrix();
          const Re = Q.geometry.clone();
          Re.applyMatrix4(Q.matrix), Q.geometry = Re, Q.renderOrder = 1 / 0, Q.position.set(0, 0, 0), Q.rotation.set(0, 0, 0), Q.scale.set(1, 1, 1), le.add(Q);
        }
      return le;
    }
    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = Z(T)), this.add(this.gizmo.rotate = Z(G)), this.add(this.gizmo.scale = Z(V)), this.add(this.picker.translate = Z(k)), this.add(this.picker.rotate = Z(N)), this.add(this.picker.scale = Z(oe)), this.add(this.helper.translate = Z(F)), this.add(this.helper.rotate = Z($)), this.add(this.helper.scale = Z(U)), this.picker.translate.visible = !1, this.picker.rotate.visible = !1, this.picker.scale.visible = !1;
  }
  updateMatrixWorld(s) {
    const e = (this.mode === "scale" ? "local" : this.space) === "local" ? this.worldQuaternion : pt;
    this.gizmo.translate.visible = this.mode === "translate", this.gizmo.rotate.visible = this.mode === "rotate", this.gizmo.scale.visible = this.mode === "scale", this.helper.translate.visible = this.mode === "translate", this.helper.rotate.visible = this.mode === "rotate", this.helper.scale.visible = this.mode === "scale";
    let n = [];
    n = n.concat(this.picker[this.mode].children), n = n.concat(this.gizmo[this.mode].children), n = n.concat(this.helper[this.mode].children);
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      o.visible = !0, o.rotation.set(0, 0, 0), o.position.copy(this.worldPosition);
      let a;
      if (this.camera.isOrthographicCamera ? a = (this.camera.top - this.camera.bottom) / this.camera.zoom : a = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), o.scale.set(1, 1, 1).multiplyScalar(a * this.size / 4), o.tag === "helper") {
        o.visible = !1, o.name === "AXIS" ? (o.position.copy(this.worldPositionStart), o.visible = !!this.axis, this.axis === "X" && (B.setFromEuler(lt.set(0, 0, 0)), o.quaternion.copy(e).multiply(B), Math.abs(j.copy(Je).applyQuaternion(e).dot(this.eye)) > 0.9 && (o.visible = !1)), this.axis === "Y" && (B.setFromEuler(lt.set(0, 0, Math.PI / 2)), o.quaternion.copy(e).multiply(B), Math.abs(j.copy(De).applyQuaternion(e).dot(this.eye)) > 0.9 && (o.visible = !1)), this.axis === "Z" && (B.setFromEuler(lt.set(0, Math.PI / 2, 0)), o.quaternion.copy(e).multiply(B), Math.abs(j.copy(et).applyQuaternion(e).dot(this.eye)) > 0.9 && (o.visible = !1)), this.axis === "XYZE" && (B.setFromEuler(lt.set(0, Math.PI / 2, 0)), j.copy(this.rotationAxis), o.quaternion.setFromRotationMatrix(hn.lookAt(dn, j, De)), o.quaternion.multiply(B), o.visible = this.dragging), this.axis === "E" && (o.visible = !1)) : o.name === "START" ? (o.position.copy(this.worldPositionStart), o.visible = this.dragging) : o.name === "END" ? (o.position.copy(this.worldPosition), o.visible = this.dragging) : o.name === "DELTA" ? (o.position.copy(this.worldPositionStart), o.quaternion.copy(this.worldQuaternionStart), ae.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), ae.applyQuaternion(this.worldQuaternionStart.clone().invert()), o.scale.copy(ae), o.visible = this.dragging) : (o.quaternion.copy(e), this.dragging ? o.position.copy(this.worldPositionStart) : o.position.copy(this.worldPosition), this.axis && (o.visible = this.axis.search(o.name) !== -1));
        continue;
      }
      o.quaternion.copy(e), this.mode === "translate" || this.mode === "scale" ? (o.name === "X" && Math.abs(j.copy(Je).applyQuaternion(e).dot(this.eye)) > 0.99 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "Y" && Math.abs(j.copy(De).applyQuaternion(e).dot(this.eye)) > 0.99 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "Z" && Math.abs(j.copy(et).applyQuaternion(e).dot(this.eye)) > 0.99 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "XY" && Math.abs(j.copy(et).applyQuaternion(e).dot(this.eye)) < 0.2 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "YZ" && Math.abs(j.copy(Je).applyQuaternion(e).dot(this.eye)) < 0.2 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "XZ" && Math.abs(j.copy(De).applyQuaternion(e).dot(this.eye)) < 0.2 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1)) : this.mode === "rotate" && (ut.copy(e), j.copy(this.eye).applyQuaternion(B.copy(e).invert()), o.name.search("E") !== -1 && o.quaternion.setFromRotationMatrix(hn.lookAt(this.eye, dn, De)), o.name === "X" && (B.setFromAxisAngle(Je, Math.atan2(-j.y, j.z)), B.multiplyQuaternions(ut, B), o.quaternion.copy(B)), o.name === "Y" && (B.setFromAxisAngle(De, Math.atan2(j.x, j.z)), B.multiplyQuaternions(ut, B), o.quaternion.copy(B)), o.name === "Z" && (B.setFromAxisAngle(et, Math.atan2(j.y, j.x)), B.multiplyQuaternions(ut, B), o.quaternion.copy(B))), o.visible = o.visible && (o.name.indexOf("X") === -1 || this.showX), o.visible = o.visible && (o.name.indexOf("Y") === -1 || this.showY), o.visible = o.visible && (o.name.indexOf("Z") === -1 || this.showZ), o.visible = o.visible && (o.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ), o.material._color = o.material._color || o.material.color.clone(), o.material._opacity = o.material._opacity || o.material.opacity, o.material.color.copy(o.material._color), o.material.opacity = o.material._opacity, this.enabled && this.axis && (o.name === this.axis || this.axis.split("").some(function(r) {
        return o.name === r;
      })) && (o.material.color.setHex(16776960), o.material.opacity = 1);
    }
    super.updateMatrixWorld(s);
  }
}
class no extends v {
  constructor() {
    super(
      new Ln(1e5, 1e5, 2, 2),
      new we({ visible: !1, wireframe: !0, side: Pn, transparent: !0, opacity: 0.1, toneMapped: !1 })
    ), this.isTransformControlsPlane = !0, this.type = "TransformControlsPlane";
  }
  updateMatrixWorld(s) {
    let t = this.space;
    switch (this.position.copy(this.worldPosition), this.mode === "scale" && (t = "local"), dt.copy(Je).applyQuaternion(t === "local" ? this.worldQuaternion : pt), $e.copy(De).applyQuaternion(t === "local" ? this.worldQuaternion : pt), Qe.copy(et).applyQuaternion(t === "local" ? this.worldQuaternion : pt), j.copy($e), this.mode) {
      case "translate":
      case "scale":
        switch (this.axis) {
          case "X":
            j.copy(this.eye).cross(dt), ge.copy(dt).cross(j);
            break;
          case "Y":
            j.copy(this.eye).cross($e), ge.copy($e).cross(j);
            break;
          case "Z":
            j.copy(this.eye).cross(Qe), ge.copy(Qe).cross(j);
            break;
          case "XY":
            ge.copy(Qe);
            break;
          case "YZ":
            ge.copy(dt);
            break;
          case "XZ":
            j.copy(Qe), ge.copy($e);
            break;
          case "XYZ":
          case "E":
            ge.set(0, 0, 0);
            break;
        }
        break;
      case "rotate":
      default:
        ge.set(0, 0, 0);
    }
    ge.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (pn.lookAt(ae.set(0, 0, 0), ge, j), this.quaternion.setFromRotationMatrix(pn)), super.updateMatrixWorld(s);
  }
}
const so = {
  name: "TransformControls",
  render: () => null
}, oo = /* @__PURE__ */ I({
  ...so,
  props: {
    mode: { default: "translate" },
    position: null,
    rotationSnap: { default: null },
    showX: { type: Boolean, default: !0 },
    showY: { type: Boolean, default: !0 },
    showZ: { type: Boolean, default: !0 },
    size: { default: 1 },
    translationSnap: { default: null }
  },
  setup(c, { expose: s }) {
    const t = c, e = Qn(null), n = S("scene"), i = S("mesh", null), o = S("parent", void 0), a = S("camera"), r = S("canvas"), l = S("enableAllControls"), d = S("disableAllControls");
    function u() {
      e.value != null && (e.value.mode = t.mode, e.value.size = t.size, e.value.showX = t.showX, e.value.showY = t.showY, e.value.showZ = t.showZ, e.value.translationSnap = t.translationSnap, e.value.rotationSnap = t.rotationSnap);
    }
    let p = !1;
    const h = () => {
      !r.value && !a.value || p || (e.value = new $s(a.value, r.value), R(t, "position", e.value), i ? e.value.attach(i) : o && e.value.attach(o), e.value.addEventListener("dragging-changed", function(y) {
        y.value ? d() : l();
      }), n.add(e.value), u(), p = !0);
    };
    return O(
      r,
      () => {
        h();
      },
      {
        immediate: !0
      }
    ), u(), g(t, "mode", u), g(t, "size", u), g(t, "showX", u), g(t, "showY", u), g(t, "showZ", u), g(t, "rotationSnap", u), g(t, "translationSnap", u), _e(() => {
      n.remove(e.value), ve(e.value);
    }), s({ three: e }), { props: t, three: e, scene: n, mesh: i, parent: o, camera: a, canvas: r, enableAllControls: l, disableAllControls: d, applyProps: u, get boundCamera() {
      return p;
    }, set boundCamera(y) {
      p = y;
    }, tryBindCamera: h };
  }
}), io = /* @__PURE__ */ I({
  __name: "Group",
  props: {
    enableRaycasting: { type: Boolean, default: !1 },
    onClick: { type: Function, default: () => null },
    onMouseMove: { type: Function, default: () => null },
    onMouseEnter: { type: Function, default: () => null },
    onMouseLeave: { type: Function, default: () => null },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: s }) {
    const t = c, e = new je();
    return Ae(e), R(t, "position", e), R(t, "rotation", e), R(t, "scale", e), Ht(e.children, t), D("parent", e), s({ three: e }), (n, i) => te(n.$slots, "default");
  }
}), ao = /* @__PURE__ */ I({
  __name: "InstancedMesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    count: null,
    geometry: { default: null },
    material: { default: null },
    receiveShadow: { type: Boolean, default: !1 }
  },
  setup(c, { expose: s }) {
    const t = c, e = S("scene"), n = new X(), i = new we(), o = new es(n, i, t.count);
    o.castShadow = !0, o.receiveShadow = !0, Ae(o);
    function a() {
      o.castShadow = t.castShadow, o.receiveShadow = t.receiveShadow;
    }
    a(), g(t, "castShadow", a), g(t, "receiveShadow", a);
    const r = S("getGeometry"), l = S("getMaterial");
    return it(() => {
      if (t.geometry) {
        const d = r(t.geometry);
        o.geometry = d;
      }
      if (t.material) {
        const d = l(t.material);
        o.material = d;
      }
    }), _e(() => {
      e.remove(o), ve(o);
    }), D("mesh", o), s({ three: o }), (d, u) => te(d.$slots, "default");
  }
}), ro = /* @__PURE__ */ I({
  __name: "Line",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: s }) {
    const t = c, e = S("scene"), n = new X(), i = new xe({ color: "black" }), o = new ye(n, i);
    return Ae(o), R(t, "position", o), R(t, "rotation", o), R(t, "scale", o), _e(() => {
      e.remove(o), ve(o);
    }), D("mesh", o), s({ three: o }), (a, r) => te(a.$slots, "default");
  }
}), co = /* @__PURE__ */ I({
  __name: "LineLoop",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: s }) {
    const t = c, e = S("scene"), n = new X(), i = new xe({ color: "black" }), o = new Rn(n, i);
    return Ae(o), R(t, "position", o), R(t, "rotation", o), R(t, "scale", o), _e(() => {
      e.remove(o), ve(o);
    }), D("mesh", o), s({ three: o }), (a, r) => te(a.$slots, "default");
  }
}), lo = /* @__PURE__ */ I({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: s }) {
    const t = c, e = S("scene"), n = new X(), i = new xe({ color: "black" }), o = new gt(n, i);
    return Ae(o), R(t, "position", o), R(t, "rotation", o), R(t, "scale", o), _e(() => {
      e.remove(o), ve(o);
    }), D("mesh", o), s({ three: o }), (a, r) => te(a.$slots, "default");
  }
}), uo = /* @__PURE__ */ I({
  __name: "Mesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    geometry: { default: null },
    material: { default: null },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: s }) {
    const t = c, e = S("scene"), n = new X(), i = new we(), o = new v(n, i);
    o.castShadow = !0, o.receiveShadow = !0, Ae(o), R(t, "position", o), R(t, "rotation", o), R(t, "scale", o);
    function a() {
      o.castShadow = t.castShadow, o.receiveShadow = t.receiveShadow;
    }
    a(), g(t, "castShadow", a), g(t, "receiveShadow", a);
    const r = S("getGeometry"), l = S("getMaterial");
    return it(() => {
      if (t.geometry) {
        const d = r(t.geometry);
        o.geometry = d;
      }
      if (t.material) {
        const d = l(t.material);
        o.material = d;
      }
    }), _e(() => {
      e.remove(o), ve(o);
    }), D("mesh", o), s({ three: o }), (d, u) => te(d.$slots, "default");
  }
}), ho = /* @__PURE__ */ I({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: s }) {
    const t = c, e = S("scene"), n = new X(), i = new Fe({ color: "red", sizeAttenuation: !1, size: 2 }), o = new tt(n, i);
    return Ae(o), R(t, "position", o), R(t, "rotation", o), R(t, "scale", o), _e(() => {
      e.remove(o), ve(o);
    }), D("mesh", o), s({ three: o }), (a, r) => te(a.$slots, "default");
  }
});
class po extends In {
  constructor(s) {
    super(s), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new wo(t);
    }), this.register(function(t) {
      return new xo(t);
    }), this.register(function(t) {
      return new vo(t);
    }), this.register(function(t) {
      return new bo(t);
    }), this.register(function(t) {
      return new Mo(t);
    }), this.register(function(t) {
      return new Eo(t);
    }), this.register(function(t) {
      return new To(t);
    }), this.register(function(t) {
      return new yo(t);
    }), this.register(function(t) {
      return new So(t);
    }), this.register(function(t) {
      return new _o(t);
    }), this.register(function(t) {
      return new mo(t);
    }), this.register(function(t) {
      return new Ao(t);
    });
  }
  load(s, t, e, n) {
    const i = this;
    let o;
    this.resourcePath !== "" ? o = this.resourcePath : this.path !== "" ? o = this.path : o = He.extractUrlBase(s), this.manager.itemStart(s);
    const a = function(l) {
      n ? n(l) : console.error(l), i.manager.itemError(s), i.manager.itemEnd(s);
    }, r = new Ft(this.manager);
    r.setPath(this.path), r.setResponseType("arraybuffer"), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(s, function(l) {
      try {
        i.parse(l, o, function(d) {
          t(d), i.manager.itemEnd(s);
        }, a);
      } catch (d) {
        a(d);
      }
    }, e, a);
  }
  setDRACOLoader(s) {
    return this.dracoLoader = s, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(s) {
    return this.ktx2Loader = s, this;
  }
  setMeshoptDecoder(s) {
    return this.meshoptDecoder = s, this;
  }
  register(s) {
    return this.pluginCallbacks.indexOf(s) === -1 && this.pluginCallbacks.push(s), this;
  }
  unregister(s) {
    return this.pluginCallbacks.indexOf(s) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(s), 1), this;
  }
  parse(s, t, e, n) {
    let i;
    const o = {}, a = {};
    if (typeof s == "string")
      i = s;
    else if (He.decodeText(new Uint8Array(s, 0, 4)) === jn) {
      try {
        o[C.KHR_BINARY_GLTF] = new Lo(s);
      } catch (u) {
        n && n(u);
        return;
      }
      i = o[C.KHR_BINARY_GLTF].content;
    } else
      i = He.decodeText(new Uint8Array(s));
    const r = JSON.parse(i);
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new zo(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let d = 0; d < this.pluginCallbacks.length; d++) {
      const u = this.pluginCallbacks[d](l);
      a[u.name] = u, o[u.name] = !0;
    }
    if (r.extensionsUsed)
      for (let d = 0; d < r.extensionsUsed.length; ++d) {
        const u = r.extensionsUsed[d], p = r.extensionsRequired || [];
        switch (u) {
          case C.KHR_MATERIALS_UNLIT:
            o[u] = new go();
            break;
          case C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            o[u] = new Io();
            break;
          case C.KHR_DRACO_MESH_COMPRESSION:
            o[u] = new Po(r, this.dracoLoader);
            break;
          case C.KHR_TEXTURE_TRANSFORM:
            o[u] = new Ro();
            break;
          case C.KHR_MESH_QUANTIZATION:
            o[u] = new Co();
            break;
          default:
            p.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(o), l.setPlugins(a), l.parse(e, n);
  }
  parseAsync(s, t) {
    const e = this;
    return new Promise(function(n, i) {
      e.parse(s, t, n, i);
    });
  }
}
function fo() {
  let c = {};
  return {
    get: function(s) {
      return c[s];
    },
    add: function(s, t) {
      c[s] = t;
    },
    remove: function(s) {
      delete c[s];
    },
    removeAll: function() {
      c = {};
    }
  };
}
const C = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
};
class mo {
  constructor(s) {
    this.parser = s, this.name = C.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const s = this.parser, t = this.parser.json.nodes || [];
    for (let e = 0, n = t.length; e < n; e++) {
      const i = t[e];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && s._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(s) {
    const t = this.parser, e = "light:" + s;
    let n = t.cache.get(e);
    if (n)
      return n;
    const i = t.json, r = ((i.extensions && i.extensions[this.name] || {}).lights || [])[s];
    let l;
    const d = new Y(16777215);
    r.color !== void 0 && d.fromArray(r.color);
    const u = r.range !== void 0 ? r.range : 0;
    switch (r.type) {
      case "directional":
        l = new On(d), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new Cn(d), l.distance = u;
        break;
      case "spot":
        l = new ts(d), l.distance = u, r.spot = r.spot || {}, r.spot.innerConeAngle = r.spot.innerConeAngle !== void 0 ? r.spot.innerConeAngle : 0, r.spot.outerConeAngle = r.spot.outerConeAngle !== void 0 ? r.spot.outerConeAngle : Math.PI / 4, l.angle = r.spot.outerConeAngle, l.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + r.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, r.intensity !== void 0 && (l.intensity = r.intensity), l.name = t.createUniqueName(r.name || "light_" + s), n = Promise.resolve(l), t.cache.add(e, n), n;
  }
  createNodeAttachment(s) {
    const t = this, e = this.parser, i = e.json.nodes[s], a = (i.extensions && i.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(r) {
      return e._getNodeRef(t.cache, a, r);
    });
  }
}
class go {
  constructor() {
    this.name = C.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return we;
  }
  extendParams(s, t, e) {
    const n = [];
    s.color = new Y(1, 1, 1), s.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const o = i.baseColorFactor;
        s.color.fromArray(o), s.opacity = o[3];
      }
      i.baseColorTexture !== void 0 && n.push(e.assignTexture(s, "map", i.baseColorTexture, ze));
    }
    return Promise.all(n);
  }
}
class yo {
  constructor(s) {
    this.parser = s, this.name = C.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(s, t) {
    const n = this.parser.json.materials[s];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class wo {
  constructor(s) {
    this.parser = s, this.name = C.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(s, t) {
    const e = this.parser, n = e.json.materials[s];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], o = n.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && i.push(e.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && i.push(e.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (i.push(e.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new z(a, a);
    }
    return Promise.all(i);
  }
}
class _o {
  constructor(s) {
    this.parser = s, this.name = C.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(s, t) {
    const e = this.parser, n = e.json.materials[s];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], o = n.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && i.push(e.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && i.push(e.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(i);
  }
}
class bo {
  constructor(s) {
    this.parser = s, this.name = C.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(s, t) {
    const e = this.parser, n = e.json.materials[s];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new Y(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = n.extensions[this.name];
    return o.sheenColorFactor !== void 0 && t.sheenColor.fromArray(o.sheenColorFactor), o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && i.push(e.assignTexture(t, "sheenColorMap", o.sheenColorTexture, ze)), o.sheenRoughnessTexture !== void 0 && i.push(e.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(i);
  }
}
class Mo {
  constructor(s) {
    this.parser = s, this.name = C.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(s, t) {
    const e = this.parser, n = e.json.materials[s];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], o = n.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && i.push(e.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(i);
  }
}
class Eo {
  constructor(s) {
    this.parser = s, this.name = C.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(s, t) {
    const e = this.parser, n = e.json.materials[s];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], o = n.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && i.push(e.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Y(a[0], a[1], a[2]), Promise.all(i);
  }
}
class To {
  constructor(s) {
    this.parser = s, this.name = C.KHR_MATERIALS_IOR;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(s, t) {
    const n = this.parser.json.materials[s];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class So {
  constructor(s) {
    this.parser = s, this.name = C.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(s) {
    const e = this.parser.json.materials[s];
    return !e.extensions || !e.extensions[this.name] ? null : Ue;
  }
  extendMaterialParams(s, t) {
    const e = this.parser, n = e.json.materials[s];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], o = n.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && i.push(e.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Y(a[0], a[1], a[2]), o.specularColorTexture !== void 0 && i.push(e.assignTexture(t, "specularColorMap", o.specularColorTexture, ze)), Promise.all(i);
  }
}
class xo {
  constructor(s) {
    this.parser = s, this.name = C.KHR_TEXTURE_BASISU;
  }
  loadTexture(s) {
    const t = this.parser, e = t.json, n = e.textures[s];
    if (!n.extensions || !n.extensions[this.name])
      return null;
    const i = n.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(s, i.source, o);
  }
}
class vo {
  constructor(s) {
    this.parser = s, this.name = C.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(s) {
    const t = this.name, e = this.parser, n = e.json, i = n.textures[s];
    if (!i.extensions || !i.extensions[t])
      return null;
    const o = i.extensions[t], a = n.images[o.source];
    let r = e.textureLoader;
    if (a.uri) {
      const l = e.options.manager.getHandler(a.uri);
      l !== null && (r = l);
    }
    return this.detectSupport().then(function(l) {
      if (l)
        return e.loadTextureImage(s, o.source, r);
      if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return e.loadTexture(s);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(s) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        s(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Ao {
  constructor(s) {
    this.name = C.EXT_MESHOPT_COMPRESSION, this.parser = s;
  }
  loadBufferView(s) {
    const t = this.parser.json, e = t.bufferViews[s];
    if (e.extensions && e.extensions[this.name]) {
      const n = e.extensions[this.name], i = this.parser.getDependency("buffer", n.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return Promise.all([i, o.ready]).then(function(a) {
        const r = n.byteOffset || 0, l = n.byteLength || 0, d = n.count, u = n.byteStride, p = new ArrayBuffer(d * u), h = new Uint8Array(a[0], r, l);
        return o.decodeGltfBuffer(new Uint8Array(p), d, u, h, n.mode, n.filter), p;
      });
    } else
      return null;
  }
}
const jn = "glTF", qe = 12, fn = { JSON: 1313821514, BIN: 5130562 };
class Lo {
  constructor(s) {
    this.name = C.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(s, 0, qe);
    if (this.header = {
      magic: He.decodeText(new Uint8Array(s.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== jn)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const e = this.header.length - qe, n = new DataView(s, qe);
    let i = 0;
    for (; i < e; ) {
      const o = n.getUint32(i, !0);
      i += 4;
      const a = n.getUint32(i, !0);
      if (i += 4, a === fn.JSON) {
        const r = new Uint8Array(s, qe + i, o);
        this.content = He.decodeText(r);
      } else if (a === fn.BIN) {
        const r = qe + i;
        this.body = s.slice(r, r + o);
      }
      i += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Po {
  constructor(s, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = C.KHR_DRACO_MESH_COMPRESSION, this.json = s, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(s, t) {
    const e = this.json, n = this.dracoLoader, i = s.extensions[this.name].bufferView, o = s.extensions[this.name].attributes, a = {}, r = {}, l = {};
    for (const d in o) {
      const u = Dt[d] || d.toLowerCase();
      a[u] = o[d];
    }
    for (const d in s.attributes) {
      const u = Dt[d] || d.toLowerCase();
      if (o[d] !== void 0) {
        const p = e.accessors[s.attributes[d]], h = ot[p.componentType];
        l[u] = h, r[u] = p.normalized === !0;
      }
    }
    return t.getDependency("bufferView", i).then(function(d) {
      return new Promise(function(u) {
        n.decodeDracoFile(d, function(p) {
          for (const h in p.attributes) {
            const y = p.attributes[h], _ = r[h];
            _ !== void 0 && (y.normalized = _);
          }
          u(p);
        }, a, l);
      });
    });
  }
}
class Ro {
  constructor() {
    this.name = C.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(s, t) {
    return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (s = s.clone(), t.offset !== void 0 && s.offset.fromArray(t.offset), t.rotation !== void 0 && (s.rotation = t.rotation), t.scale !== void 0 && s.repeat.fromArray(t.scale), s.needsUpdate = !0), s;
  }
}
class kt extends jt {
  constructor(s) {
    super(), this.isGLTFSpecularGlossinessMaterial = !0;
    const t = [
      "#ifdef USE_SPECULARMAP",
      "	uniform sampler2D specularMap;",
      "#endif"
    ].join(`
`), e = [
      "#ifdef USE_GLOSSINESSMAP",
      "	uniform sampler2D glossinessMap;",
      "#endif"
    ].join(`
`), n = [
      "vec3 specularFactor = specular;",
      "#ifdef USE_SPECULARMAP",
      "	vec4 texelSpecular = texture2D( specularMap, vUv );",
      "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	specularFactor *= texelSpecular.rgb;",
      "#endif"
    ].join(`
`), i = [
      "float glossinessFactor = glossiness;",
      "#ifdef USE_GLOSSINESSMAP",
      "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );",
      "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	glossinessFactor *= texelGlossiness.a;",
      "#endif"
    ].join(`
`), o = [
      "PhysicalMaterial material;",
      "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
      "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
      "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
      "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
      "material.roughness += geometryRoughness;",
      "material.roughness = min( material.roughness, 1.0 );",
      "material.specularColor = specularFactor;"
    ].join(`
`), a = {
      specular: { value: new Y().setHex(16777215) },
      glossiness: { value: 1 },
      specularMap: { value: null },
      glossinessMap: { value: null }
    };
    this._extraUniforms = a, this.onBeforeCompile = function(r) {
      for (const l in a)
        r.uniforms[l] = a[l];
      r.fragmentShader = r.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", e).replace("#include <roughnessmap_fragment>", n).replace("#include <metalnessmap_fragment>", i).replace("#include <lights_physical_fragment>", o);
    }, Object.defineProperties(this, {
      specular: {
        get: function() {
          return a.specular.value;
        },
        set: function(r) {
          a.specular.value = r;
        }
      },
      specularMap: {
        get: function() {
          return a.specularMap.value;
        },
        set: function(r) {
          a.specularMap.value = r, r ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP;
        }
      },
      glossiness: {
        get: function() {
          return a.glossiness.value;
        },
        set: function(r) {
          a.glossiness.value = r;
        }
      },
      glossinessMap: {
        get: function() {
          return a.glossinessMap.value;
        },
        set: function(r) {
          a.glossinessMap.value = r, r ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV);
        }
      }
    }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(s);
  }
  copy(s) {
    return super.copy(s), this.specularMap = s.specularMap, this.specular.copy(s.specular), this.glossinessMap = s.glossinessMap, this.glossiness = s.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this;
  }
}
class Io {
  constructor() {
    this.name = C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = [
      "color",
      "map",
      "lightMap",
      "lightMapIntensity",
      "aoMap",
      "aoMapIntensity",
      "emissive",
      "emissiveIntensity",
      "emissiveMap",
      "bumpMap",
      "bumpScale",
      "normalMap",
      "normalMapType",
      "displacementMap",
      "displacementScale",
      "displacementBias",
      "specularMap",
      "specular",
      "glossinessMap",
      "glossiness",
      "alphaMap",
      "envMap",
      "envMapIntensity"
    ];
  }
  getMaterialType() {
    return kt;
  }
  extendParams(s, t, e) {
    const n = t.extensions[this.name];
    s.color = new Y(1, 1, 1), s.opacity = 1;
    const i = [];
    if (Array.isArray(n.diffuseFactor)) {
      const o = n.diffuseFactor;
      s.color.fromArray(o), s.opacity = o[3];
    }
    if (n.diffuseTexture !== void 0 && i.push(e.assignTexture(s, "map", n.diffuseTexture, ze)), s.emissive = new Y(0, 0, 0), s.glossiness = n.glossinessFactor !== void 0 ? n.glossinessFactor : 1, s.specular = new Y(1, 1, 1), Array.isArray(n.specularFactor) && s.specular.fromArray(n.specularFactor), n.specularGlossinessTexture !== void 0) {
      const o = n.specularGlossinessTexture;
      i.push(e.assignTexture(s, "glossinessMap", o)), i.push(e.assignTexture(s, "specularMap", o, ze));
    }
    return Promise.all(i);
  }
  createMaterial(s) {
    const t = new kt(s);
    return t.fog = !0, t.color = s.color, t.map = s.map === void 0 ? null : s.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = s.aoMap === void 0 ? null : s.aoMap, t.aoMapIntensity = 1, t.emissive = s.emissive, t.emissiveIntensity = s.emissiveIntensity === void 0 ? 1 : s.emissiveIntensity, t.emissiveMap = s.emissiveMap === void 0 ? null : s.emissiveMap, t.bumpMap = s.bumpMap === void 0 ? null : s.bumpMap, t.bumpScale = 1, t.normalMap = s.normalMap === void 0 ? null : s.normalMap, t.normalMapType = ns, s.normalScale && (t.normalScale = s.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = s.specularMap === void 0 ? null : s.specularMap, t.specular = s.specular, t.glossinessMap = s.glossinessMap === void 0 ? null : s.glossinessMap, t.glossiness = s.glossiness, t.alphaMap = null, t.envMap = s.envMap === void 0 ? null : s.envMap, t.envMapIntensity = 1, t;
  }
}
class Co {
  constructor() {
    this.name = C.KHR_MESH_QUANTIZATION;
  }
}
class zt extends ss {
  constructor(s, t, e, n) {
    super(s, t, e, n);
  }
  copySampleValue_(s) {
    const t = this.resultBuffer, e = this.sampleValues, n = this.valueSize, i = s * n * 3 + n;
    for (let o = 0; o !== n; o++)
      t[o] = e[i + o];
    return t;
  }
}
zt.prototype.interpolate_ = function(c, s, t, e) {
  const n = this.resultBuffer, i = this.sampleValues, o = this.valueSize, a = o * 2, r = o * 3, l = e - s, d = (t - s) / l, u = d * d, p = u * d, h = c * r, y = h - r, _ = -2 * p + 3 * u, b = p - u, m = 1 - _, M = b - u + d;
  for (let E = 0; E !== o; E++) {
    const A = i[y + E + o], T = i[y + E + a] * l, k = i[h + E + o], F = i[h + E] * l;
    n[E] = m * A + M * T + _ * k + b * F;
  }
  return n;
};
const Oo = new re();
class No extends zt {
  interpolate_(s, t, e, n) {
    const i = super.interpolate_(s, t, e, n);
    return Oo.fromArray(i).normalize().toArray(i), i;
  }
}
const Te = {
  FLOAT: 5126,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, ot = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, mn = {
  9728: ps,
  9729: kn,
  9984: fs,
  9985: ms,
  9986: gs,
  9987: Dn
}, gn = {
  33071: Ot,
  33648: ys,
  10497: Ct
}, yn = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Dt = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Ce = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, ko = {
  CUBICSPLINE: void 0,
  LINEAR: Gn,
  STEP: ws
}, Pt = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Do(c) {
  return c.DefaultMaterial === void 0 && (c.DefaultMaterial = new jt({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: wt
  })), c.DefaultMaterial;
}
function We(c, s, t) {
  for (const e in t.extensions)
    c[e] === void 0 && (s.userData.gltfExtensions = s.userData.gltfExtensions || {}, s.userData.gltfExtensions[e] = t.extensions[e]);
}
function Ge(c, s) {
  s.extras !== void 0 && (typeof s.extras == "object" ? Object.assign(c.userData, s.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + s.extras));
}
function Go(c, s, t) {
  let e = !1, n = !1, i = !1;
  for (let l = 0, d = s.length; l < d; l++) {
    const u = s[l];
    if (u.POSITION !== void 0 && (e = !0), u.NORMAL !== void 0 && (n = !0), u.COLOR_0 !== void 0 && (i = !0), e && n && i)
      break;
  }
  if (!e && !n && !i)
    return Promise.resolve(c);
  const o = [], a = [], r = [];
  for (let l = 0, d = s.length; l < d; l++) {
    const u = s[l];
    if (e) {
      const p = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : c.attributes.position;
      o.push(p);
    }
    if (n) {
      const p = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : c.attributes.normal;
      a.push(p);
    }
    if (i) {
      const p = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : c.attributes.color;
      r.push(p);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(a),
    Promise.all(r)
  ]).then(function(l) {
    const d = l[0], u = l[1], p = l[2];
    return e && (c.morphAttributes.position = d), n && (c.morphAttributes.normal = u), i && (c.morphAttributes.color = p), c.morphTargetsRelative = !0, c;
  });
}
function Fo(c, s) {
  if (c.updateMorphTargets(), s.weights !== void 0)
    for (let t = 0, e = s.weights.length; t < e; t++)
      c.morphTargetInfluences[t] = s.weights[t];
  if (s.extras && Array.isArray(s.extras.targetNames)) {
    const t = s.extras.targetNames;
    if (c.morphTargetInfluences.length === t.length) {
      c.morphTargetDictionary = {};
      for (let e = 0, n = t.length; e < n; e++)
        c.morphTargetDictionary[t[e]] = e;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function jo(c) {
  const s = c.extensions && c.extensions[C.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return s ? t = "draco:" + s.bufferView + ":" + s.indices + ":" + wn(s.attributes) : t = c.indices + ":" + wn(c.attributes) + ":" + c.mode, t;
}
function wn(c) {
  let s = "";
  const t = Object.keys(c).sort();
  for (let e = 0, n = t.length; e < n; e++)
    s += t[e] + ":" + c[t[e]] + ";";
  return s;
}
function Gt(c) {
  switch (c) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Ho(c) {
  return c.search(/\.jpe?g($|\?)/i) > 0 || c.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : c.search(/\.webp($|\?)/i) > 0 || c.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
class zo {
  constructor(s = {}, t = {}) {
    this.json = s, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new fo(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    const e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, n = navigator.userAgent.indexOf("Firefox") > -1, i = n ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
    typeof createImageBitmap > "u" || e || n && i < 98 ? this.textureLoader = new Nn(this.options.manager) : this.textureLoader = new os(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Ft(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(s) {
    this.extensions = s;
  }
  setPlugins(s) {
    this.plugins = s;
  }
  parse(s, t) {
    const e = this, n = this.json, i = this.extensions;
    this.cache.removeAll(), this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([
        e.getDependencies("scene"),
        e.getDependencies("animation"),
        e.getDependencies("camera")
      ]);
    }).then(function(o) {
      const a = {
        scene: o[0][n.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: n.asset,
        parser: e,
        userData: {}
      };
      We(i, a, n), Ge(a, n), Promise.all(e._invokeAll(function(r) {
        return r.afterRoot && r.afterRoot(a);
      })).then(function() {
        s(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const s = this.json.nodes || [], t = this.json.skins || [], e = this.json.meshes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const o = t[n].joints;
      for (let a = 0, r = o.length; a < r; a++)
        s[o[a]].isBone = !0;
    }
    for (let n = 0, i = s.length; n < i; n++) {
      const o = s[n];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (e[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  _addNodeRef(s, t) {
    t !== void 0 && (s.refs[t] === void 0 && (s.refs[t] = s.uses[t] = 0), s.refs[t]++);
  }
  _getNodeRef(s, t, e) {
    if (s.refs[t] <= 1)
      return e;
    const n = e.clone(), i = (o, a) => {
      const r = this.associations.get(o);
      r != null && this.associations.set(a, r);
      for (const [l, d] of o.children.entries())
        i(d, a.children[l]);
    };
    return i(e, n), n.name += "_instance_" + s.uses[t]++, n;
  }
  _invokeOne(s) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let e = 0; e < t.length; e++) {
      const n = s(t[e]);
      if (n)
        return n;
    }
    return null;
  }
  _invokeAll(s) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const e = [];
    for (let n = 0; n < t.length; n++) {
      const i = s(t[n]);
      i && e.push(i);
    }
    return e;
  }
  getDependency(s, t) {
    const e = s + ":" + t;
    let n = this.cache.get(e);
    if (!n) {
      switch (s) {
        case "scene":
          n = this.loadScene(t);
          break;
        case "node":
          n = this.loadNode(t);
          break;
        case "mesh":
          n = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          n = this.loadAccessor(t);
          break;
        case "bufferView":
          n = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          n = this.loadBuffer(t);
          break;
        case "material":
          n = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          n = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          n = this.loadSkin(t);
          break;
        case "animation":
          n = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          n = this.loadCamera(t);
          break;
        default:
          throw new Error("Unknown type: " + s);
      }
      this.cache.add(e, n);
    }
    return n;
  }
  getDependencies(s) {
    let t = this.cache.get(s);
    if (!t) {
      const e = this, n = this.json[s + (s === "mesh" ? "es" : "s")] || [];
      t = Promise.all(n.map(function(i, o) {
        return e.getDependency(s, o);
      })), this.cache.add(s, t);
    }
    return t;
  }
  loadBuffer(s) {
    const t = this.json.buffers[s], e = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && s === 0)
      return Promise.resolve(this.extensions[C.KHR_BINARY_GLTF].body);
    const n = this.options;
    return new Promise(function(i, o) {
      e.load(He.resolveURL(t.uri, n.path), i, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(s) {
    const t = this.json.bufferViews[s];
    return this.getDependency("buffer", t.buffer).then(function(e) {
      const n = t.byteLength || 0, i = t.byteOffset || 0;
      return e.slice(i, i + n);
    });
  }
  loadAccessor(s) {
    const t = this, e = this.json, n = this.json.accessors[s];
    if (n.bufferView === void 0 && n.sparse === void 0)
      return Promise.resolve(null);
    const i = [];
    return n.bufferView !== void 0 ? i.push(this.getDependency("bufferView", n.bufferView)) : i.push(null), n.sparse !== void 0 && (i.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(i).then(function(o) {
      const a = o[0], r = yn[n.type], l = ot[n.componentType], d = l.BYTES_PER_ELEMENT, u = d * r, p = n.byteOffset || 0, h = n.bufferView !== void 0 ? e.bufferViews[n.bufferView].byteStride : void 0, y = n.normalized === !0;
      let _, b;
      if (h && h !== u) {
        const m = Math.floor(p / h), M = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + m + ":" + n.count;
        let E = t.cache.get(M);
        E || (_ = new l(a, m * h, n.count * h / d), E = new is(_, h / d), t.cache.add(M, E)), b = new as(E, r, p % h / d, y);
      } else
        a === null ? _ = new l(n.count * r) : _ = new l(a, p, n.count * r), b = new nt(_, r, y);
      if (n.sparse !== void 0) {
        const m = yn.SCALAR, M = ot[n.sparse.indices.componentType], E = n.sparse.indices.byteOffset || 0, A = n.sparse.values.byteOffset || 0, T = new M(o[1], E, n.sparse.count * m), k = new l(o[2], A, n.sparse.count * r);
        a !== null && (b = new nt(b.array.slice(), b.itemSize, b.normalized));
        for (let F = 0, G = T.length; F < G; F++) {
          const $ = T[F];
          if (b.setX($, k[F * r]), r >= 2 && b.setY($, k[F * r + 1]), r >= 3 && b.setZ($, k[F * r + 2]), r >= 4 && b.setW($, k[F * r + 3]), r >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return b;
    });
  }
  loadTexture(s) {
    const t = this.json, e = this.options, i = t.textures[s].source, o = t.images[i];
    let a = this.textureLoader;
    if (o.uri) {
      const r = e.manager.getHandler(o.uri);
      r !== null && (a = r);
    }
    return this.loadTextureImage(s, i, a);
  }
  loadTextureImage(s, t, e) {
    const n = this, i = this.json, o = i.textures[s], a = i.images[t], r = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[r])
      return this.textureCache[r];
    const l = this.loadImageSource(t, e).then(function(d) {
      d.flipY = !1, o.name && (d.name = o.name);
      const p = (i.samplers || {})[o.sampler] || {};
      return d.magFilter = mn[p.magFilter] || kn, d.minFilter = mn[p.minFilter] || Dn, d.wrapS = gn[p.wrapS] || Ct, d.wrapT = gn[p.wrapT] || Ct, n.associations.set(d, { textures: s }), d;
    }).catch(function() {
      return null;
    });
    return this.textureCache[r] = l, l;
  }
  loadImageSource(s, t) {
    const e = this, n = this.json, i = this.options;
    if (this.sourceCache[s] !== void 0)
      return this.sourceCache[s].then((u) => u.clone());
    const o = n.images[s], a = self.URL || self.webkitURL;
    let r = o.uri || "", l = !1;
    if (o.bufferView !== void 0)
      r = e.getDependency("bufferView", o.bufferView).then(function(u) {
        l = !0;
        const p = new Blob([u], { type: o.mimeType });
        return r = a.createObjectURL(p), r;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + s + " is missing URI and bufferView");
    const d = Promise.resolve(r).then(function(u) {
      return new Promise(function(p, h) {
        let y = p;
        t.isImageBitmapLoader === !0 && (y = function(_) {
          const b = new Nt(_);
          b.needsUpdate = !0, p(b);
        }), t.load(He.resolveURL(u, i.path), y, void 0, h);
      });
    }).then(function(u) {
      return l === !0 && a.revokeObjectURL(r), u.userData.mimeType = o.mimeType || Ho(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", r), u;
    });
    return this.sourceCache[s] = d, d;
  }
  assignTexture(s, t, e, n) {
    const i = this;
    return this.getDependency("texture", e.index).then(function(o) {
      if (e.texCoord !== void 0 && e.texCoord != 0 && !(t === "aoMap" && e.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + e.texCoord + " for texture " + t + " not yet supported."), i.extensions[C.KHR_TEXTURE_TRANSFORM]) {
        const a = e.extensions !== void 0 ? e.extensions[C.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const r = i.associations.get(o);
          o = i.extensions[C.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), i.associations.set(o, r);
        }
      }
      return n !== void 0 && (o.encoding = n), s[t] = o, o;
    });
  }
  assignFinalMaterial(s) {
    const t = s.geometry;
    let e = s.material;
    const n = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (s.isPoints) {
      const a = "PointsMaterial:" + e.uuid;
      let r = this.cache.get(a);
      r || (r = new Fe(), st.prototype.copy.call(r, e), r.color.copy(e.color), r.map = e.map, r.sizeAttenuation = !1, this.cache.add(a, r)), e = r;
    } else if (s.isLine) {
      const a = "LineBasicMaterial:" + e.uuid;
      let r = this.cache.get(a);
      r || (r = new xe(), st.prototype.copy.call(r, e), r.color.copy(e.color), this.cache.add(a, r)), e = r;
    }
    if (n || i || o) {
      let a = "ClonedMaterial:" + e.uuid + ":";
      e.isGLTFSpecularGlossinessMaterial && (a += "specular-glossiness:"), n && (a += "derivative-tangents:"), i && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let r = this.cache.get(a);
      r || (r = e.clone(), i && (r.vertexColors = !0), o && (r.flatShading = !0), n && (r.normalScale && (r.normalScale.y *= -1), r.clearcoatNormalScale && (r.clearcoatNormalScale.y *= -1)), this.cache.add(a, r), this.associations.set(r, this.associations.get(e))), e = r;
    }
    e.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), s.material = e;
  }
  getMaterialType() {
    return jt;
  }
  loadMaterial(s) {
    const t = this, e = this.json, n = this.extensions, i = e.materials[s];
    let o;
    const a = {}, r = i.extensions || {}, l = [];
    if (r[C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      const u = n[C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      o = u.getMaterialType(), l.push(u.extendParams(a, i, t));
    } else if (r[C.KHR_MATERIALS_UNLIT]) {
      const u = n[C.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), l.push(u.extendParams(a, i, t));
    } else {
      const u = i.pbrMetallicRoughness || {};
      if (a.color = new Y(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const p = u.baseColorFactor;
        a.color.fromArray(p), a.opacity = p[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", u.baseColorTexture, ze)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(p) {
        return p.getMaterialType && p.getMaterialType(s);
      }), l.push(Promise.all(this._invokeAll(function(p) {
        return p.extendMaterialParams && p.extendMaterialParams(s, a);
      })));
    }
    i.doubleSided === !0 && (a.side = Pn);
    const d = i.alphaMode || Pt.OPAQUE;
    if (d === Pt.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, d === Pt.MASK && (a.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && o !== we && (l.push(t.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new z(1, 1), i.normalTexture.scale !== void 0)) {
      const u = i.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    return i.occlusionTexture !== void 0 && o !== we && (l.push(t.assignTexture(a, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && o !== we && (a.emissive = new Y().fromArray(i.emissiveFactor)), i.emissiveTexture !== void 0 && o !== we && l.push(t.assignTexture(a, "emissiveMap", i.emissiveTexture, ze)), Promise.all(l).then(function() {
      let u;
      return o === kt ? u = n[C.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a) : u = new o(a), i.name && (u.name = i.name), Ge(u, i), t.associations.set(u, { materials: s }), i.extensions && We(n, u, i), u;
    });
  }
  createUniqueName(s) {
    const t = rs.sanitizeNodeName(s || "");
    let e = t;
    for (let n = 1; this.nodeNamesUsed[e]; ++n)
      e = t + "_" + n;
    return this.nodeNamesUsed[e] = !0, e;
  }
  loadGeometries(s) {
    const t = this, e = this.extensions, n = this.primitiveCache;
    function i(a) {
      return e[C.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(r) {
        return _n(r, a, t);
      });
    }
    const o = [];
    for (let a = 0, r = s.length; a < r; a++) {
      const l = s[a], d = jo(l), u = n[d];
      if (u)
        o.push(u.promise);
      else {
        let p;
        l.extensions && l.extensions[C.KHR_DRACO_MESH_COMPRESSION] ? p = i(l) : p = _n(new X(), l, t), n[d] = { primitive: l, promise: p }, o.push(p);
      }
    }
    return Promise.all(o);
  }
  loadMesh(s) {
    const t = this, e = this.json, n = this.extensions, i = e.meshes[s], o = i.primitives, a = [];
    for (let r = 0, l = o.length; r < l; r++) {
      const d = o[r].material === void 0 ? Do(this.cache) : this.getDependency("material", o[r].material);
      a.push(d);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(r) {
      const l = r.slice(0, r.length - 1), d = r[r.length - 1], u = [];
      for (let h = 0, y = d.length; h < y; h++) {
        const _ = d[h], b = o[h];
        let m;
        const M = l[h];
        if (b.mode === Te.TRIANGLES || b.mode === Te.TRIANGLE_STRIP || b.mode === Te.TRIANGLE_FAN || b.mode === void 0)
          m = i.isSkinnedMesh === !0 ? new cs(_, M) : new v(_, M), m.isSkinnedMesh === !0 && !m.geometry.attributes.skinWeight.normalized && m.normalizeSkinWeights(), b.mode === Te.TRIANGLE_STRIP ? m.geometry = bn(m.geometry, _s) : b.mode === Te.TRIANGLE_FAN && (m.geometry = bn(m.geometry, Fn));
        else if (b.mode === Te.LINES)
          m = new gt(_, M);
        else if (b.mode === Te.LINE_STRIP)
          m = new ye(_, M);
        else if (b.mode === Te.LINE_LOOP)
          m = new Rn(_, M);
        else if (b.mode === Te.POINTS)
          m = new tt(_, M);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + b.mode);
        Object.keys(m.geometry.morphAttributes).length > 0 && Fo(m, i), m.name = t.createUniqueName(i.name || "mesh_" + s), Ge(m, i), b.extensions && We(n, m, b), t.assignFinalMaterial(m), u.push(m);
      }
      for (let h = 0, y = u.length; h < y; h++)
        t.associations.set(u[h], {
          meshes: s,
          primitives: h
        });
      if (u.length === 1)
        return u[0];
      const p = new je();
      t.associations.set(p, { meshes: s });
      for (let h = 0, y = u.length; h < y; h++)
        p.add(u[h]);
      return p;
    });
  }
  loadCamera(s) {
    let t;
    const e = this.json.cameras[s], n = e[e.type];
    if (!n) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return e.type === "perspective" ? t = new Sn(ls.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : e.type === "orthographic" && (t = new xn(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), e.name && (t.name = this.createUniqueName(e.name)), Ge(t, e), Promise.resolve(t);
  }
  loadSkin(s) {
    const t = this.json.skins[s], e = { joints: t.joints };
    return t.inverseBindMatrices === void 0 ? Promise.resolve(e) : this.getDependency("accessor", t.inverseBindMatrices).then(function(n) {
      return e.inverseBindMatrices = n, e;
    });
  }
  loadAnimation(s) {
    const e = this.json.animations[s], n = [], i = [], o = [], a = [], r = [];
    for (let l = 0, d = e.channels.length; l < d; l++) {
      const u = e.channels[l], p = e.samplers[u.sampler], h = u.target, y = h.node !== void 0 ? h.node : h.id, _ = e.parameters !== void 0 ? e.parameters[p.input] : p.input, b = e.parameters !== void 0 ? e.parameters[p.output] : p.output;
      n.push(this.getDependency("node", y)), i.push(this.getDependency("accessor", _)), o.push(this.getDependency("accessor", b)), a.push(p), r.push(h);
    }
    return Promise.all([
      Promise.all(n),
      Promise.all(i),
      Promise.all(o),
      Promise.all(a),
      Promise.all(r)
    ]).then(function(l) {
      const d = l[0], u = l[1], p = l[2], h = l[3], y = l[4], _ = [];
      for (let m = 0, M = d.length; m < M; m++) {
        const E = d[m], A = u[m], T = p[m], k = h[m], F = y[m];
        if (E === void 0)
          continue;
        E.updateMatrix(), E.matrixAutoUpdate = !0;
        let G;
        switch (Ce[F.path]) {
          case Ce.weights:
            G = Ms;
            break;
          case Ce.rotation:
            G = qt;
            break;
          case Ce.position:
          case Ce.scale:
          default:
            G = bs;
            break;
        }
        const $ = E.name ? E.name : E.uuid, N = k.interpolation !== void 0 ? ko[k.interpolation] : Gn, V = [];
        Ce[F.path] === Ce.weights ? E.traverse(function(U) {
          U.morphTargetInfluences && V.push(U.name ? U.name : U.uuid);
        }) : V.push($);
        let oe = T.array;
        if (T.normalized) {
          const U = Gt(oe.constructor), Z = new Float32Array(oe.length);
          for (let H = 0, le = oe.length; H < le; H++)
            Z[H] = oe[H] * U;
          oe = Z;
        }
        for (let U = 0, Z = V.length; U < Z; U++) {
          const H = new G(
            V[U] + "." + Ce[F.path],
            A.array,
            oe,
            N
          );
          k.interpolation === "CUBICSPLINE" && (H.createInterpolant = function(W) {
            const ie = this instanceof qt ? No : zt;
            return new ie(this.times, this.values, this.getValueSize() / 3, W);
          }, H.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), _.push(H);
        }
      }
      const b = e.name ? e.name : "animation_" + s;
      return new us(b, void 0, _);
    });
  }
  createNodeMesh(s) {
    const t = this.json, e = this, n = t.nodes[s];
    return n.mesh === void 0 ? null : e.getDependency("mesh", n.mesh).then(function(i) {
      const o = e._getNodeRef(e.meshCache, n.mesh, i);
      return n.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh)
          for (let r = 0, l = n.weights.length; r < l; r++)
            a.morphTargetInfluences[r] = n.weights[r];
      }), o;
    });
  }
  loadNode(s) {
    const t = this.json, e = this.extensions, n = this, i = t.nodes[s], o = i.name ? n.createUniqueName(i.name) : "";
    return function() {
      const a = [], r = n._invokeOne(function(l) {
        return l.createNodeMesh && l.createNodeMesh(s);
      });
      return r && a.push(r), i.camera !== void 0 && a.push(n.getDependency("camera", i.camera).then(function(l) {
        return n._getNodeRef(n.cameraCache, i.camera, l);
      })), n._invokeAll(function(l) {
        return l.createNodeAttachment && l.createNodeAttachment(s);
      }).forEach(function(l) {
        a.push(l);
      }), Promise.all(a);
    }().then(function(a) {
      let r;
      if (i.isBone === !0 ? r = new ds() : a.length > 1 ? r = new je() : a.length === 1 ? r = a[0] : r = new mt(), r !== a[0])
        for (let l = 0, d = a.length; l < d; l++)
          r.add(a[l]);
      if (i.name && (r.userData.name = i.name, r.name = o), Ge(r, i), i.extensions && We(e, r, i), i.matrix !== void 0) {
        const l = new yt();
        l.fromArray(i.matrix), r.applyMatrix4(l);
      } else
        i.translation !== void 0 && r.position.fromArray(i.translation), i.rotation !== void 0 && r.quaternion.fromArray(i.rotation), i.scale !== void 0 && r.scale.fromArray(i.scale);
      return n.associations.has(r) || n.associations.set(r, {}), n.associations.get(r).nodes = s, r;
    });
  }
  loadScene(s) {
    const t = this.json, e = this.extensions, n = this.json.scenes[s], i = this, o = new je();
    n.name && (o.name = i.createUniqueName(n.name)), Ge(o, n), n.extensions && We(e, o, n);
    const a = n.nodes || [], r = [];
    for (let l = 0, d = a.length; l < d; l++)
      r.push(Hn(a[l], o, t, i));
    return Promise.all(r).then(function() {
      const l = (d) => {
        const u = /* @__PURE__ */ new Map();
        for (const [p, h] of i.associations)
          (p instanceof st || p instanceof Nt) && u.set(p, h);
        return d.traverse((p) => {
          const h = i.associations.get(p);
          h != null && u.set(p, h);
        }), u;
      };
      return i.associations = l(o), o;
    });
  }
}
function Hn(c, s, t, e) {
  const n = t.nodes[c];
  return e.getDependency("node", c).then(function(i) {
    if (n.skin === void 0)
      return i;
    let o;
    return e.getDependency("skin", n.skin).then(function(a) {
      o = a;
      const r = [];
      for (let l = 0, d = o.joints.length; l < d; l++)
        r.push(e.getDependency("node", o.joints[l]));
      return Promise.all(r);
    }).then(function(a) {
      return i.traverse(function(r) {
        if (!r.isMesh)
          return;
        const l = [], d = [];
        for (let u = 0, p = a.length; u < p; u++) {
          const h = a[u];
          if (h) {
            l.push(h);
            const y = new yt();
            o.inverseBindMatrices !== void 0 && y.fromArray(o.inverseBindMatrices.array, u * 16), d.push(y);
          } else
            console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', o.joints[u]);
        }
        r.bind(new hs(l, d), r.matrixWorld);
      }), i;
    });
  }).then(function(i) {
    s.add(i);
    const o = [];
    if (n.children) {
      const a = n.children;
      for (let r = 0, l = a.length; r < l; r++) {
        const d = a[r];
        o.push(Hn(d, i, t, e));
      }
    }
    return Promise.all(o);
  });
}
function Uo(c, s, t) {
  const e = s.attributes, n = new Es();
  if (e.POSITION !== void 0) {
    const a = t.json.accessors[e.POSITION], r = a.min, l = a.max;
    if (r !== void 0 && l !== void 0) {
      if (n.set(
        new x(r[0], r[1], r[2]),
        new x(l[0], l[1], l[2])
      ), a.normalized) {
        const d = Gt(ot[a.componentType]);
        n.min.multiplyScalar(d), n.max.multiplyScalar(d);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = s.targets;
  if (i !== void 0) {
    const a = new x(), r = new x();
    for (let l = 0, d = i.length; l < d; l++) {
      const u = i[l];
      if (u.POSITION !== void 0) {
        const p = t.json.accessors[u.POSITION], h = p.min, y = p.max;
        if (h !== void 0 && y !== void 0) {
          if (r.setX(Math.max(Math.abs(h[0]), Math.abs(y[0]))), r.setY(Math.max(Math.abs(h[1]), Math.abs(y[1]))), r.setZ(Math.max(Math.abs(h[2]), Math.abs(y[2]))), p.normalized) {
            const _ = Gt(ot[p.componentType]);
            r.multiplyScalar(_);
          }
          a.max(r);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    n.expandByVector(a);
  }
  c.boundingBox = n;
  const o = new Ts();
  n.getCenter(o.center), o.radius = n.min.distanceTo(n.max) / 2, c.boundingSphere = o;
}
function _n(c, s, t) {
  const e = s.attributes, n = [];
  function i(o, a) {
    return t.getDependency("accessor", o).then(function(r) {
      c.setAttribute(a, r);
    });
  }
  for (const o in e) {
    const a = Dt[o] || o.toLowerCase();
    a in c.attributes || n.push(i(e[o], a));
  }
  if (s.indices !== void 0 && !c.index) {
    const o = t.getDependency("accessor", s.indices).then(function(a) {
      c.setIndex(a);
    });
    n.push(o);
  }
  return Ge(c, s), Uo(c, s, t), Promise.all(n).then(function() {
    return s.targets !== void 0 ? Go(c, s.targets, t) : c;
  });
}
function bn(c, s) {
  let t = c.getIndex();
  if (t === null) {
    const o = [], a = c.getAttribute("position");
    if (a !== void 0) {
      for (let r = 0; r < a.count; r++)
        o.push(r);
      c.setIndex(o), t = c.getIndex();
    } else
      return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), c;
  }
  const e = t.count - 2, n = [];
  if (s === Fn)
    for (let o = 1; o <= e; o++)
      n.push(t.getX(0)), n.push(t.getX(o)), n.push(t.getX(o + 1));
  else
    for (let o = 0; o < e; o++)
      o % 2 === 0 ? (n.push(t.getX(o)), n.push(t.getX(o + 1)), n.push(t.getX(o + 2))) : (n.push(t.getX(o + 2)), n.push(t.getX(o + 1)), n.push(t.getX(o)));
  n.length / 3 !== e && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  const i = c.clone();
  return i.setIndex(n), i;
}
const Bo = /* @__PURE__ */ I({
  __name: "GLTFLoader",
  props: {
    castShadow: { type: Boolean, default: !1 },
    enableRaycasting: { type: Boolean, default: !1 },
    onClick: { type: Function, default: () => null },
    onMouseMove: { type: Function, default: () => null },
    onMouseEnter: { type: Function, default: () => null },
    onMouseLeave: { type: Function, default: () => null },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    url: null
  },
  emits: ["load", "progress", "error"],
  setup(c, { expose: s, emit: t }) {
    const e = c, n = new po(), i = new je();
    i.castShadow = !0, i.receiveShadow = !0, Ae(i), R(e, "position", i), R(e, "rotation", i), R(e, "scale", i);
    function o() {
      n.load(
        e.url,
        function(r) {
          R(e, "position", i, !1), R(e, "rotation", i, !1), R(e, "scale", i, !1), i.add(r.scene), a(), t("load", r.scene);
        },
        function(r) {
          t("progress", r);
        },
        function(r) {
          t("error", r);
        }
      );
    }
    function a() {
      if (i.children.length !== 0)
        for (const r of i.children[0].children)
          r.castShadow = e.castShadow, r.receiveShadow = e.receiveShadow;
    }
    return a(), O(
      () => e.url,
      () => o(),
      {
        immediate: !0
      }
    ), Ht(i.children, e), D("mesh", i), s({
      three: i
    }), (r, l) => te(r.$slots, "default");
  }
}), Xo = /^[og]\s*(.+)?/, Yo = /^mtllib /, Vo = /^usemtl /, Zo = /^usemap /, Mn = new x(), Rt = new x(), En = new x(), Tn = new x(), de = new x(), ht = new Y();
function Ko() {
  const c = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(s, t) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = s, this.object.fromDeclaration = t !== !1;
        return;
      }
      const e = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: s || "",
        fromDeclaration: t !== !1,
        geometry: {
          vertices: [],
          normals: [],
          colors: [],
          uvs: [],
          hasUVIndices: !1
        },
        materials: [],
        smooth: !0,
        startMaterial: function(n, i) {
          const o = this._finalize(!1);
          o && (o.inherited || o.groupCount <= 0) && this.materials.splice(o.index, 1);
          const a = {
            index: this.materials.length,
            name: n || "",
            mtllib: Array.isArray(i) && i.length > 0 ? i[i.length - 1] : "",
            smooth: o !== void 0 ? o.smooth : this.smooth,
            groupStart: o !== void 0 ? o.groupEnd : 0,
            groupEnd: -1,
            groupCount: -1,
            inherited: !1,
            clone: function(r) {
              const l = {
                index: typeof r == "number" ? r : this.index,
                name: this.name,
                mtllib: this.mtllib,
                smooth: this.smooth,
                groupStart: 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: !1
              };
              return l.clone = this.clone.bind(l), l;
            }
          };
          return this.materials.push(a), a;
        },
        currentMaterial: function() {
          if (this.materials.length > 0)
            return this.materials[this.materials.length - 1];
        },
        _finalize: function(n) {
          const i = this.currentMaterial();
          if (i && i.groupEnd === -1 && (i.groupEnd = this.geometry.vertices.length / 3, i.groupCount = i.groupEnd - i.groupStart, i.inherited = !1), n && this.materials.length > 1)
            for (let o = this.materials.length - 1; o >= 0; o--)
              this.materials[o].groupCount <= 0 && this.materials.splice(o, 1);
          return n && this.materials.length === 0 && this.materials.push({
            name: "",
            smooth: this.smooth
          }), i;
        }
      }, e && e.name && typeof e.clone == "function") {
        const n = e.clone(0);
        n.inherited = !0, this.object.materials.push(n);
      }
      this.objects.push(this.object);
    },
    finalize: function() {
      this.object && typeof this.object._finalize == "function" && this.object._finalize(!0);
    },
    parseVertexIndex: function(s, t) {
      const e = parseInt(s, 10);
      return (e >= 0 ? e - 1 : e + t / 3) * 3;
    },
    parseNormalIndex: function(s, t) {
      const e = parseInt(s, 10);
      return (e >= 0 ? e - 1 : e + t / 3) * 3;
    },
    parseUVIndex: function(s, t) {
      const e = parseInt(s, 10);
      return (e >= 0 ? e - 1 : e + t / 2) * 2;
    },
    addVertex: function(s, t, e) {
      const n = this.vertices, i = this.object.geometry.vertices;
      i.push(n[s + 0], n[s + 1], n[s + 2]), i.push(n[t + 0], n[t + 1], n[t + 2]), i.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addVertexPoint: function(s) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[s + 0], t[s + 1], t[s + 2]);
    },
    addVertexLine: function(s) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[s + 0], t[s + 1], t[s + 2]);
    },
    addNormal: function(s, t, e) {
      const n = this.normals, i = this.object.geometry.normals;
      i.push(n[s + 0], n[s + 1], n[s + 2]), i.push(n[t + 0], n[t + 1], n[t + 2]), i.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addFaceNormal: function(s, t, e) {
      const n = this.vertices, i = this.object.geometry.normals;
      Mn.fromArray(n, s), Rt.fromArray(n, t), En.fromArray(n, e), de.subVectors(En, Rt), Tn.subVectors(Mn, Rt), de.cross(Tn), de.normalize(), i.push(de.x, de.y, de.z), i.push(de.x, de.y, de.z), i.push(de.x, de.y, de.z);
    },
    addColor: function(s, t, e) {
      const n = this.colors, i = this.object.geometry.colors;
      n[s] !== void 0 && i.push(n[s + 0], n[s + 1], n[s + 2]), n[t] !== void 0 && i.push(n[t + 0], n[t + 1], n[t + 2]), n[e] !== void 0 && i.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addUV: function(s, t, e) {
      const n = this.uvs, i = this.object.geometry.uvs;
      i.push(n[s + 0], n[s + 1]), i.push(n[t + 0], n[t + 1]), i.push(n[e + 0], n[e + 1]);
    },
    addDefaultUV: function() {
      const s = this.object.geometry.uvs;
      s.push(0, 0), s.push(0, 0), s.push(0, 0);
    },
    addUVLine: function(s) {
      const t = this.uvs;
      this.object.geometry.uvs.push(t[s + 0], t[s + 1]);
    },
    addFace: function(s, t, e, n, i, o, a, r, l) {
      const d = this.vertices.length;
      let u = this.parseVertexIndex(s, d), p = this.parseVertexIndex(t, d), h = this.parseVertexIndex(e, d);
      if (this.addVertex(u, p, h), this.addColor(u, p, h), a !== void 0 && a !== "") {
        const y = this.normals.length;
        u = this.parseNormalIndex(a, y), p = this.parseNormalIndex(r, y), h = this.parseNormalIndex(l, y), this.addNormal(u, p, h);
      } else
        this.addFaceNormal(u, p, h);
      if (n !== void 0 && n !== "") {
        const y = this.uvs.length;
        u = this.parseUVIndex(n, y), p = this.parseUVIndex(i, y), h = this.parseUVIndex(o, y), this.addUV(u, p, h), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(s) {
      this.object.geometry.type = "Points";
      const t = this.vertices.length;
      for (let e = 0, n = s.length; e < n; e++) {
        const i = this.parseVertexIndex(s[e], t);
        this.addVertexPoint(i), this.addColor(i);
      }
    },
    addLineGeometry: function(s, t) {
      this.object.geometry.type = "Line";
      const e = this.vertices.length, n = this.uvs.length;
      for (let i = 0, o = s.length; i < o; i++)
        this.addVertexLine(this.parseVertexIndex(s[i], e));
      for (let i = 0, o = t.length; i < o; i++)
        this.addUVLine(this.parseUVIndex(t[i], n));
    }
  };
  return c.startObject("", !1), c;
}
class $o extends In {
  constructor(s) {
    super(s), this.materials = null;
  }
  load(s, t, e, n) {
    const i = this, o = new Ft(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(s, function(a) {
      try {
        t(i.parse(a));
      } catch (r) {
        n ? n(r) : console.error(r), i.manager.itemError(s);
      }
    }, e, n);
  }
  setMaterials(s) {
    return this.materials = s, this;
  }
  parse(s) {
    const t = new Ko();
    s.indexOf(`\r
`) !== -1 && (s = s.replace(/\r\n/g, `
`)), s.indexOf(`\\
`) !== -1 && (s = s.replace(/\\\n/g, ""));
    const e = s.split(`
`);
    let n = "", i = "", o = 0, a = [];
    const r = typeof "".trimLeft == "function";
    for (let u = 0, p = e.length; u < p; u++)
      if (n = e[u], n = r ? n.trimLeft() : n.trim(), o = n.length, o !== 0 && (i = n.charAt(0), i !== "#"))
        if (i === "v") {
          const h = n.split(/\s+/);
          switch (h[0]) {
            case "v":
              t.vertices.push(
                parseFloat(h[1]),
                parseFloat(h[2]),
                parseFloat(h[3])
              ), h.length >= 7 ? (ht.setRGB(
                parseFloat(h[4]),
                parseFloat(h[5]),
                parseFloat(h[6])
              ).convertSRGBToLinear(), t.colors.push(ht.r, ht.g, ht.b)) : t.colors.push(void 0, void 0, void 0);
              break;
            case "vn":
              t.normals.push(
                parseFloat(h[1]),
                parseFloat(h[2]),
                parseFloat(h[3])
              );
              break;
            case "vt":
              t.uvs.push(
                parseFloat(h[1]),
                parseFloat(h[2])
              );
              break;
          }
        } else if (i === "f") {
          const y = n.slice(1).trim().split(/\s+/), _ = [];
          for (let m = 0, M = y.length; m < M; m++) {
            const E = y[m];
            if (E.length > 0) {
              const A = E.split("/");
              _.push(A);
            }
          }
          const b = _[0];
          for (let m = 1, M = _.length - 1; m < M; m++) {
            const E = _[m], A = _[m + 1];
            t.addFace(
              b[0],
              E[0],
              A[0],
              b[1],
              E[1],
              A[1],
              b[2],
              E[2],
              A[2]
            );
          }
        } else if (i === "l") {
          const h = n.substring(1).trim().split(" ");
          let y = [];
          const _ = [];
          if (n.indexOf("/") === -1)
            y = h;
          else
            for (let b = 0, m = h.length; b < m; b++) {
              const M = h[b].split("/");
              M[0] !== "" && y.push(M[0]), M[1] !== "" && _.push(M[1]);
            }
          t.addLineGeometry(y, _);
        } else if (i === "p") {
          const y = n.slice(1).trim().split(" ");
          t.addPointGeometry(y);
        } else if ((a = Xo.exec(n)) !== null) {
          const h = (" " + a[0].slice(1).trim()).slice(1);
          t.startObject(h);
        } else if (Vo.test(n))
          t.object.startMaterial(n.substring(7).trim(), t.materialLibraries);
        else if (Yo.test(n))
          t.materialLibraries.push(n.substring(7).trim());
        else if (Zo.test(n))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (i === "s") {
          if (a = n.split(" "), a.length > 1) {
            const y = a[1].trim().toLowerCase();
            t.object.smooth = y !== "0" && y !== "off";
          } else
            t.object.smooth = !0;
          const h = t.object.currentMaterial();
          h && (h.smooth = t.object.smooth);
        } else {
          if (n === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + n + '"');
        }
    t.finalize();
    const l = new je();
    if (l.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let u = 0, p = t.objects.length; u < p; u++) {
        const h = t.objects[u], y = h.geometry, _ = h.materials, b = y.type === "Line", m = y.type === "Points";
        let M = !1;
        if (y.vertices.length === 0)
          continue;
        const E = new X();
        E.setAttribute("position", new pe(y.vertices, 3)), y.normals.length > 0 && E.setAttribute("normal", new pe(y.normals, 3)), y.colors.length > 0 && (M = !0, E.setAttribute("color", new pe(y.colors, 3))), y.hasUVIndices === !0 && E.setAttribute("uv", new pe(y.uvs, 2));
        const A = [];
        for (let k = 0, F = _.length; k < F; k++) {
          const G = _[k], $ = G.name + "_" + G.smooth + "_" + M;
          let N = t.materials[$];
          if (this.materials !== null) {
            if (N = this.materials.create(G.name), b && N && !(N instanceof xe)) {
              const V = new xe();
              st.prototype.copy.call(V, N), V.color.copy(N.color), N = V;
            } else if (m && N && !(N instanceof Fe)) {
              const V = new Fe({ size: 10, sizeAttenuation: !1 });
              st.prototype.copy.call(V, N), V.color.copy(N.color), V.map = N.map, N = V;
            }
          }
          N === void 0 && (b ? N = new xe() : m ? N = new Fe({ size: 1, sizeAttenuation: !1 }) : N = new Ss(), N.name = G.name, N.flatShading = !G.smooth, N.vertexColors = M, t.materials[$] = N), A.push(N);
        }
        let T;
        if (A.length > 1) {
          for (let k = 0, F = _.length; k < F; k++) {
            const G = _[k];
            E.addGroup(G.groupStart, G.groupCount, k);
          }
          b ? T = new gt(E, A) : m ? T = new tt(E, A) : T = new v(E, A);
        } else
          b ? T = new gt(E, A[0]) : m ? T = new tt(E, A[0]) : T = new v(E, A[0]);
        T.name = h.name, l.add(T);
      }
    else if (t.vertices.length > 0) {
      const u = new Fe({ size: 1, sizeAttenuation: !1 }), p = new X();
      p.setAttribute("position", new pe(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (p.setAttribute("color", new pe(t.colors, 3)), u.vertexColors = !0);
      const h = new tt(p, u);
      l.add(h);
    }
    return l;
  }
}
const Qo = /* @__PURE__ */ I({
  __name: "OBJLoader",
  props: {
    castShadow: { type: Boolean, default: !1 },
    enableRaycasting: { type: Boolean, default: !1 },
    onClick: { type: Function, default: () => null },
    onMouseMove: { type: Function, default: () => null },
    onMouseEnter: { type: Function, default: () => null },
    onMouseLeave: { type: Function, default: () => null },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    url: null
  },
  emits: ["load", "progress", "error"],
  setup(c, { expose: s, emit: t }) {
    const e = c, n = new $o(), i = new je();
    Ae(i), R(e, "position", i), R(e, "rotation", i), R(e, "scale", i);
    function o() {
      n.load(
        e.url,
        function(r) {
          for (const l of r.children)
            "material" in i && (l.material = i.material);
          i.add(r), a(), t("load", r);
        },
        function(r) {
          t("progress", r);
        },
        function(r) {
          t("error", r);
        }
      );
    }
    function a() {
      if (i.children.length !== 0)
        for (const r of i.children[0].children)
          r.castShadow = e.castShadow, r.receiveShadow = e.receiveShadow;
    }
    return a(), O(
      () => e.url,
      () => o(),
      {
        immediate: !0
      }
    ), Ht(i.children, e), D("mesh", i), s({
      three: i
    }), (r, l) => te(r.$slots, "default");
  }
}), qo = /* @__PURE__ */ I({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: s }) {
    const t = c, e = S("scene"), n = new xs(t.size);
    return e.add(n), R(t, "position", n), R(t, "rotation", n), R(t, "scale", n), D("mesh", n), s({ three: n }), (i, o) => te(i.$slots, "default");
  }
}), Wo = {
  name: "BoxGeometry",
  render: () => null
}, Jo = /* @__PURE__ */ I({
  ...Wo,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(c, { expose: s }) {
    const t = c;
    function e(r, l, d, u, p, h) {
      return new ne(r, l, d, u, p, h);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const o = S("addGeometry");
    o(n);
    function a() {
      const r = e(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments
      );
      fe(n, r);
    }
    return a(), g(t, "name", () => {
      n.name = t.name;
    }), g(t, "width", a), g(t, "height", a), g(t, "depth", a), g(t, "widthSegments", a), g(t, "heightSegments", a), g(t, "depthSegments", a), s({
      three: n
    }), { props: t, makeBox: e, three: n, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), ei = {
  name: "BufferGeometry",
  render: () => null
}, ti = /* @__PURE__ */ I({
  ...ei,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] },
    uvs: { default: () => [] },
    normals: { type: [Array, Boolean], default: !1 }
  },
  setup(c, { expose: s }) {
    const t = c;
    function e() {
      const r = new X(), l = new Float32Array(t.vertices);
      if (r.setAttribute("position", new nt(l, 3)), t.uvs.length > 0) {
        const d = new Float32Array(t.uvs);
        r.setAttribute("uv", new nt(d, 2));
      }
      if (t.normals === !0 && (r.computeVertexNormals(), r.attributes.normal.needsUpdate = !0), Array.isArray(t.normals)) {
        const d = new Float32Array(t.normals);
        r.setAttribute("normal", new nt(d, 3));
      }
      return t.faces.length > 0 && r.setIndex(t.faces), r;
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const o = S("addGeometry");
    o(n);
    function a() {
      const r = e();
      fe(n, r);
    }
    return a(), O(
      () => t.vertices,
      (r) => {
        a();
      },
      { deep: !0 }
    ), O(
      () => t.faces,
      (r) => {
        a();
      },
      { deep: !0 }
    ), s({
      three: n
    }), { props: t, makeGeometry: e, three: n, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), ni = {
  name: "CircleGeometry",
  render: () => null
}, si = /* @__PURE__ */ I({
  ...ni,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    segments: { default: 32 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(c, { expose: s }) {
    const t = c;
    function e(r, l, d, u) {
      return new vs(r, l, d, u);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const o = S("addGeometry");
    o(n);
    function a() {
      const r = e(t.radius, t.segments, t.thetaStart, t.thetaLength);
      fe(n, r);
    }
    return a(), g(t, "radius", a), g(t, "segments", a), g(t, "thetaStart", a), g(t, "thetaLength", a), s({
      three: n
    }), { props: t, makeCircle: e, three: n, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), oi = {
  name: "ConeGeometry",
  render: () => null
}, ii = /* @__PURE__ */ I({
  ...oi,
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
  setup(c, { expose: s }) {
    const t = c;
    function e(r, l, d, u, p, h, y) {
      return new As(r, l, d, u, p, h, y);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const o = S("addGeometry");
    o(n);
    function a() {
      const r = e(
        t.radius,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength
      );
      fe(n, r);
    }
    return a(), g(t, "radius", a), g(t, "height", a), g(t, "radialSegments", a), g(t, "heightSegments", a), g(t, "openEnded", a), g(t, "thetaStart", a), g(t, "thetaLength", a), s({
      three: n
    }), { props: t, makeCone: e, three: n, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), ai = {
  name: "CylinderGeometry",
  render: () => null
}, ri = /* @__PURE__ */ I({
  ...ai,
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
  setup(c, { expose: s }) {
    const t = c;
    function e(r, l, d, u, p, h, y, _) {
      return new se(
        r,
        l,
        d,
        u,
        p,
        h,
        y,
        _
      );
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const o = S("addGeometry");
    o(n);
    function a() {
      const r = e(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength
      );
      fe(n, r);
    }
    return a(), g(t, "radiusTop", a), g(t, "radiusBottom", a), g(t, "height", a), g(t, "radialSegments", a), g(t, "heightSegments", a), g(t, "openEnded", a), g(t, "thetaStart", a), g(t, "thetaLength", a), s({
      three: n
    }), { props: t, makeCylinder: e, three: n, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), ci = {
  name: "EdgesGeometry",
  render: () => null
}, li = /* @__PURE__ */ I({
  ...ci,
  props: {
    geometry: null
  },
  setup(c, { expose: s }) {
    const t = c, e = ce(new X()), n = S("mesh", null);
    n && (n.geometry = e);
    const i = S("getGeometry"), o = S("addGeometry");
    o(e);
    function a() {
      const d = new Ls(i(t.geometry));
      fe(e, d);
      const u = n;
      "isLine" in u && u.computeLineDistances();
    }
    let r = O(
      i(t.geometry),
      () => {
        a();
      },
      { deep: !0, immediate: !0 }
    );
    g(t, "geometry", () => {
      r(), r = O(
        i(t.geometry),
        () => {
          a();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const l = () => {
      i(t.geometry) === void 0 ? ft(() => l) : a();
    };
    return ft(() => l), s({
      three: e
    }), { props: t, three: e, mesh: n, getGeometry: i, addGeometry: o, redoGeometry: a, get unwatch() {
      return r;
    }, set unwatch(d) {
      r = d;
    }, waitUntilGeometryChanged: l };
  }
});
class _t extends X {
  constructor(s = (n, i, o) => o.set(n, i, Math.cos(n) * Math.sin(i)), t = 8, e = 8) {
    super(), this.type = "ParametricGeometry", this.parameters = {
      func: s,
      slices: t,
      stacks: e
    };
    const n = [], i = [], o = [], a = [], r = 1e-5, l = new x(), d = new x(), u = new x(), p = new x(), h = new x();
    s.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
    const y = t + 1;
    for (let _ = 0; _ <= e; _++) {
      const b = _ / e;
      for (let m = 0; m <= t; m++) {
        const M = m / t;
        s(M, b, d), i.push(d.x, d.y, d.z), M - r >= 0 ? (s(M - r, b, u), p.subVectors(d, u)) : (s(M + r, b, u), p.subVectors(u, d)), b - r >= 0 ? (s(M, b - r, u), h.subVectors(d, u)) : (s(M, b + r, u), h.subVectors(u, d)), l.crossVectors(p, h).normalize(), o.push(l.x, l.y, l.z), a.push(M, b);
      }
    }
    for (let _ = 0; _ < e; _++)
      for (let b = 0; b < t; b++) {
        const m = _ * y + b, M = _ * y + b + 1, E = (_ + 1) * y + b + 1, A = (_ + 1) * y + b;
        n.push(m, M, A), n.push(M, E, A);
      }
    this.setIndex(n), this.setAttribute("position", new pe(i, 3)), this.setAttribute("normal", new pe(o, 3)), this.setAttribute("uv", new pe(a, 2));
  }
}
const Ye = {
  klein: function(c, s, t) {
    s *= Math.PI, c *= 2 * Math.PI, s = s * 2;
    let e, n;
    s < Math.PI ? (e = 3 * Math.cos(s) * (1 + Math.sin(s)) + 2 * (1 - Math.cos(s) / 2) * Math.cos(s) * Math.cos(c), n = -8 * Math.sin(s) - 2 * (1 - Math.cos(s) / 2) * Math.sin(s) * Math.cos(c)) : (e = 3 * Math.cos(s) * (1 + Math.sin(s)) + 2 * (1 - Math.cos(s) / 2) * Math.cos(c + Math.PI), n = -8 * Math.sin(s));
    const i = -2 * (1 - Math.cos(s) / 2) * Math.sin(c);
    t.set(e, i, n);
  },
  plane: function(c, s) {
    return function(t, e, n) {
      const i = t * c, o = 0, a = e * s;
      n.set(i, o, a);
    };
  },
  mobius: function(c, s, t) {
    c = c - 0.5;
    const e = 2 * Math.PI * s, n = 2, i = Math.cos(e) * (n + c * Math.cos(e / 2)), o = Math.sin(e) * (n + c * Math.cos(e / 2)), a = c * Math.sin(e / 2);
    t.set(i, o, a);
  },
  mobius3d: function(c, s, t) {
    c *= Math.PI, s *= 2 * Math.PI, c = c * 2;
    const e = c / 2, n = 2.25, i = 0.125, o = 0.65;
    let a = i * Math.cos(s) * Math.cos(e) - o * Math.sin(s) * Math.sin(e);
    const r = i * Math.cos(s) * Math.sin(e) + o * Math.sin(s) * Math.cos(e), l = (n + a) * Math.sin(c);
    a = (n + a) * Math.cos(c), t.set(a, l, r);
  }
};
Ye.TubeGeometry = class extends _t {
  constructor(s, t = 64, e = 1, n = 8, i = !1) {
    const o = t + 1, a = s.computeFrenetFrames(t, i), r = a.tangents, l = a.normals, d = a.binormals, u = new x();
    function p(h, y, _) {
      y *= 2 * Math.PI;
      const b = Math.floor(h * (o - 1));
      s.getPointAt(h, u);
      const m = l[b], M = d[b], E = -e * Math.cos(y), A = e * Math.sin(y);
      u.x += E * m.x + A * M.x, u.y += E * m.y + A * M.y, u.z += E * m.z + A * M.z, _.copy(u);
    }
    super(p, t, n), this.tangents = r, this.normals = l, this.binormals = d, this.path = s, this.segments = t, this.radius = e, this.segmentsRadius = n, this.closed = i;
  }
};
Ye.TorusKnotGeometry = class extends Ye.TubeGeometry {
  constructor(s = 200, t = 40, e = 64, n = 8, i = 2, o = 3) {
    class a extends Ps {
      getPoint(p, h = new x()) {
        const y = h;
        p *= Math.PI * 2;
        const _ = 0.5, b = (1 + _ * Math.cos(o * p)) * Math.cos(i * p), m = (1 + _ * Math.cos(o * p)) * Math.sin(i * p), M = _ * Math.sin(o * p);
        return y.set(b, m, M).multiplyScalar(s);
      }
    }
    const r = e, l = n, d = new a();
    super(d, r, t, l, !0, !1), this.radius = s, this.tube = t, this.segmentsT = e, this.segmentsR = n, this.p = i, this.q = o;
  }
};
Ye.SphereGeometry = class extends _t {
  constructor(s, t, e) {
    function n(i, o, a) {
      i *= Math.PI, o *= 2 * Math.PI;
      const r = s * Math.sin(i) * Math.cos(o), l = s * Math.sin(i) * Math.sin(o), d = s * Math.cos(i);
      a.set(r, l, d);
    }
    super(n, t, e);
  }
};
Ye.PlaneGeometry = class extends _t {
  constructor(s, t, e, n) {
    function i(o, a, r) {
      const l = o * s, d = 0, u = a * t;
      r.set(l, d, u);
    }
    super(i, e, n);
  }
};
const ui = {
  name: "Parametriceometry",
  render: () => null
}, di = /* @__PURE__ */ I({
  ...ui,
  props: {
    name: { default: "" },
    function: { type: Function, default: Ye.klein },
    slices: { default: 8 },
    stacks: { default: 8 }
  },
  setup(c, { expose: s }) {
    const t = c;
    function e(r, l, d) {
      return new _t(r, l, d);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const o = S("addGeometry");
    o(n);
    function a() {
      const r = e(t.function, t.slices, t.stacks);
      fe(n, r);
    }
    return a(), g(t, "function", a), g(t, "stacks", a), g(t, "slices", a), s({
      three: n
    }), { props: t, makePlane: e, three: n, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), hi = {
  name: "PlaneGeometry",
  render: () => null
}, pi = /* @__PURE__ */ I({
  ...hi,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(c, { expose: s }) {
    const t = c;
    function e(r, l, d, u) {
      return new Ln(r, l, d, u);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const o = S("addGeometry");
    o(n);
    function a() {
      const r = e(t.width, t.height, t.widthSegments, t.heightSegments);
      fe(n, r);
    }
    return a(), g(t, "width", a), g(t, "height", a), g(t, "widthSegments", a), g(t, "heightSegments", a), s({
      three: n
    }), { props: t, makePlane: e, three: n, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), fi = {
  name: "RingGeometry",
  render: () => null
}, mi = /* @__PURE__ */ I({
  ...fi,
  props: {
    name: { default: "" },
    innerRadius: { default: 0.5 },
    outerRadius: { default: 1 },
    thetaSegments: { default: 32 },
    phiSegments: { default: 1 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(c, { expose: s }) {
    const t = c;
    function e(r, l, d, u, p, h) {
      return new Rs(r, l, d, u, p, h);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const o = S("addGeometry");
    o(n);
    function a() {
      const r = e(
        t.innerRadius,
        t.outerRadius,
        t.thetaSegments,
        t.phiSegments,
        t.thetaStart,
        t.thetaLength
      );
      fe(n, r);
    }
    return a(), g(t, "innerRadius", a), g(t, "outerRadius", a), g(t, "thetaSegments", a), g(t, "phiSegments", a), g(t, "thetaStart", a), g(t, "thetaLength", a), s({
      three: n
    }), { props: t, makeRing: e, three: n, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), gi = {
  name: "SphereGeometry",
  render: () => null
}, yi = /* @__PURE__ */ I({
  ...gi,
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
  setup(c, { expose: s }) {
    const t = c;
    function e(r, l, d, u, p, h, y) {
      return new An(r, l, d, u, p, h, y);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const o = S("addGeometry");
    o(n);
    function a() {
      const r = e(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength
      );
      fe(n, r);
    }
    return a(), g(t, "radius", a), g(t, "widthSegments", a), g(t, "heightSegments", a), g(t, "phiStart", a), g(t, "phiLength", a), g(t, "thetaStart", a), g(t, "thetaLength", a), s({
      three: n
    }), { props: t, makeSphere: e, three: n, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), wi = {
  name: "WireframeGeometry",
  render: () => null
}, _i = /* @__PURE__ */ I({
  ...wi,
  props: {
    geometry: null
  },
  setup(c, { expose: s }) {
    const t = c, e = ce(new X()), n = S("mesh", null);
    n && (n.geometry = e);
    const i = S("getGeometry"), o = S("addGeometry");
    o(e);
    function a() {
      const d = new Is(i(t.geometry));
      fe(e, d);
      const u = n;
      "isLine" in u && u.computeLineDistances();
    }
    let r = O(
      i(t.geometry),
      () => {
        a();
      },
      { deep: !0, immediate: !0 }
    );
    g(t, "geometry", () => {
      r(), r = O(
        i(t.geometry),
        () => {
          a();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const l = () => {
      i(t.geometry) === void 0 ? ft(() => l) : a();
    };
    return ft(() => l), s({
      three: e
    }), { props: t, three: e, mesh: n, getGeometry: i, addGeometry: o, redoGeometry: a, get unwatch() {
      return r;
    }, set unwatch(d) {
      r = d;
    }, waitUntilGeometryChanged: l };
  }
}), bi = {
  name: "LineBasicMaterial",
  render: () => null
}, Mi = /* @__PURE__ */ I({
  ...bi,
  props: {
    color: { default: 16777215 },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(c, { expose: s }) {
    const t = c, e = new xe({ color: t.color });
    e.name = t.name;
    const n = S("addMaterial");
    n(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function o() {
      t.color && (e.color = new Y(t.color)), e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return o(), g(t, "color", o), g(t, "opacity", o), g(t, "transparent", o), D("material", e), s({
      three: e
    }), { props: t, three: e, addMaterial: n, mesh: i, applyProps: o };
  }
}), Ei = {
  name: "LineDashedMaterial",
  render: () => null
}, Ti = /* @__PURE__ */ I({
  ...Ei,
  props: {
    color: { default: 16777215 },
    scale: { default: 1 },
    dashSize: { default: 3 },
    gapSize: { default: 1 },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(c, { expose: s }) {
    const t = c, e = new Cs({ color: t.color });
    e.name = t.name;
    const n = S("addMaterial");
    n(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function o() {
      e.color = new Y(t.color), e.scale = t.scale, e.dashSize = t.dashSize, e.gapSize = t.gapSize, e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return o(), g(t, "color", o), g(t, "scale", o), g(t, "dashSize", o), g(t, "gapSize", o), g(t, "opacity", o), g(t, "transparent", o), D("material", e), s({
      three: e
    }), { props: t, three: e, addMaterial: n, mesh: i, applyProps: o };
  }
}), Si = {
  name: "MeshBasicMaterial"
}, xi = /* @__PURE__ */ I({
  ...Si,
  props: {
    color: null,
    side: { default: wt },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(c, { expose: s }) {
    const t = c, e = new we();
    e.name = t.name, S("addMaterial")(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function o() {
      t.color !== void 0 && (e.color = new Y(t.color)), e.side = t.side, e.opacity = t.opacity, e.transparent = t.transparent, e.vertexColors = t.vertexColors, e.needsUpdate = !0;
    }
    return o(), D("material", e), g(t, "color", o), g(t, "side", o), g(t, "opacity", o), g(t, "transparent", o), g(t, "vertexColors", o), s({
      three: e
    }), (a, r) => te(a.$slots, "default");
  }
}), vi = {
  name: "MeshLambertMaterial"
}, Ai = /* @__PURE__ */ I({
  ...vi,
  props: {
    color: { default: 16777215 },
    name: { default: "" },
    side: { default: wt },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(c, { expose: s }) {
    const t = c, e = new Os();
    e.name = t.name, S("addMaterial")(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function o(a) {
      a.color && (e.color = new Y(a.color)), a.side && (e.side = a.side);
    }
    return o(t), O(
      () => t.color,
      () => o(t)
    ), O(
      () => t.side,
      () => o(t)
    ), O(
      () => t.opacity,
      () => {
        e.opacity = t.opacity;
      },
      { immediate: !0 }
    ), O(
      () => t.transparent,
      () => {
        e.transparent = t.transparent;
      },
      { immediate: !0 }
    ), D("material", e), s({
      three: e
    }), (a, r) => te(a.$slots, "default");
  }
}), Li = {
  name: "PointsMaterial",
  render: () => null
}, Pi = /* @__PURE__ */ I({
  ...Li,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    name: { default: "" },
    size: { default: 1 },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(c, { expose: s }) {
    const t = c, e = new Fe({ color: t.color, sizeAttenuation: t.sizeAttenuation, size: t.size });
    e.name = t.name;
    const n = S("mesh", null), i = S("addMaterial");
    i(e), n && (n.material = e);
    function o() {
      e.color = new Y(t.color), e.size = t.size, e.sizeAttenuation = t.sizeAttenuation, e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return o(), g(t, "color", o), g(t, "size", o), g(t, "sizeAttenuation", o), g(t, "opacity", o), g(t, "transparent", o), D("material", e), s({
      three: e
    }), { props: t, three: e, mesh: n, addMaterial: i, applyProps: o };
  }
}), Ri = {
  name: "MeshNormalMaterial"
}, Ii = /* @__PURE__ */ I({
  ...Ri,
  props: {
    side: { default: wt },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(c, { expose: s }) {
    const t = c, e = new Ns();
    e.name = t.name, S("addMaterial")(e);
    const i = S("mesh", null);
    return i && (i.material = e), O(
      () => t.side,
      () => {
        e.side = t.side;
      },
      { immediate: !0 }
    ), O(
      () => t.opacity,
      () => {
        e.opacity = t.opacity;
      },
      { immediate: !0 }
    ), O(
      () => t.transparent,
      () => {
        e.transparent = t.transparent;
      },
      { immediate: !0 }
    ), D("material", e), s({
      three: e
    }), (o, a) => te(o.$slots, "default");
  }
}), Ci = {
  name: "AmbientLight",
  render: () => null
}, Oi = /* @__PURE__ */ I({
  ...Ci,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(c, { expose: s }) {
    const t = c, e = S("scene"), n = new ks();
    e.add(n);
    function i(o) {
      n.color = new Y(o.color), n.intensity = o.intensity;
    }
    return i(t), O(
      () => t.color,
      () => i(t)
    ), O(
      () => t.intensity,
      () => i(t)
    ), s({ three: n }), { props: t, scene: e, three: n, applyProps: i };
  }
}), Ni = {
  name: "DirectionalLight",
  render: () => null
}, ki = /* @__PURE__ */ I({
  ...Ni,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(c, { expose: s }) {
    const t = c, e = S("scene"), n = new On();
    e.add(n);
    function i() {
      n.color = new Y(t.color), n.intensity = t.intensity;
    }
    return i(), g(t, "color", i), g(t, "intensity", i), s({ three: n }), { props: t, scene: e, three: n, applyProps: i };
  }
}), Di = {
  name: "HemisphereLight",
  render: () => null
}, Gi = /* @__PURE__ */ I({
  ...Di,
  props: {
    groundColor: { default: 16777215 },
    intensity: { default: 1 },
    skyColor: { default: 16777215 }
  },
  setup(c, { expose: s }) {
    const t = c, e = S("scene"), n = new Ds();
    e.add(n);
    function i() {
      n.color = new Y(t.skyColor), n.groundColor = new Y(t.groundColor), n.intensity = t.intensity;
    }
    return i(), g(t, "skyColor", i), g(t, "groundColor", i), g(t, "intensity", i), s({ three: n }), { props: t, scene: e, three: n, applyProps: i };
  }
}), Fi = {
  name: "PointLight",
  render: () => null
}, ji = /* @__PURE__ */ I({
  ...Fi,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: s }) {
    const t = c, e = S("scene"), n = new Cn();
    e.add(n), R(t, "position", n), R(t, "rotation", n), R(t, "scale", n);
    function i(o) {
      n.color = new Y(o.color), n.intensity = o.intensity, n.castShadow = o.castShadow;
    }
    return i(t), O(
      () => t.color,
      () => i(t)
    ), O(
      () => t.intensity,
      () => i(t)
    ), O(
      () => t.castShadow,
      () => i(t)
    ), s({ three: n }), { props: t, scene: e, three: n, applyProps: i };
  }
}), Hi = {
  name: "TextureLoader",
  render: () => null
}, zi = /* @__PURE__ */ I({
  ...Hi,
  props: {
    offset: { default: () => [0, 0] },
    repeat: { default: () => [1, 1] },
    rotation: { default: 0 },
    url: null,
    wrapS: { default: Ot },
    wrapT: { default: Ot }
  },
  setup(c, { expose: s }) {
    const t = c, e = S("material"), n = Oe(new Nt());
    function i() {
      new Nn().loadAsync(t.url).then((a) => {
        n.value = a, nn(t, "offset", n.value), nn(t, "repeat", n.value), "map" in e && (e.map = n.value, e.needsUpdate = !0), o();
      });
    }
    function o() {
      n.value.wrapS = t.wrapS, n.value.wrapT = t.wrapT, n.value.rotation = t.rotation, n.value.needsUpdate = !0;
    }
    return i(), g(t, "url", i), g(t, "wrapS", o), g(t, "wrapT", o), g(t, "rotation", o), s({ three: n }), { props: t, material: e, three: n, load: i, applyProps: o };
  }
});
function Ki(c) {
  c.component("Renderer", Gs), c.component("Scene", Fs), c.component("PerspectiveCamera", Hs), c.component("OrthographicCamera", Us), c.component("OrbitControls", Ys), c.component("TrackballControls", Ks), c.component("TransformControls", oo), c.component("Group", io), c.component("InstancedMesh", ao), c.component("Line", ro), c.component("LineLoop", co), c.component("LineSegments", lo), c.component("Mesh", uo), c.component("Points", ho), c.component("GLTFLoader", Bo), c.component("OBJLoader", Qo), c.component("AxesHelper", qo), c.component("BoxGeometry", Jo), c.component("BufferGeometry", ti), c.component("CircleGeometry", si), c.component("ConeGeometry", ii), c.component("CylinderGeometry", ri), c.component("EdgesGeometry", li), c.component("ParametricGeometry", di), c.component("PlaneGeometry", pi), c.component("RingGeometry", mi), c.component("SphereGeometry", yi), c.component("WireframeGeometry", _i), c.component("LineBasicMaterial", Mi), c.component("LineDashedMaterial", Ti), c.component("MeshBasicMaterial", xi), c.component("MeshLambertMaterial", Ai), c.component("PointsMaterial", Pi), c.component("MeshNormalMaterial", Ii), c.component("AmbientLight", Oi), c.component("DirectionalLight", ki), c.component("HemisphereLight", Gi), c.component("PointLight", ji), c.component("TextureLoader", zi);
}
export {
  Oi as AmbientLight,
  qo as AxesHelper,
  Jo as BoxGeometry,
  ti as BufferGeometry,
  si as CircleGeometry,
  ii as ConeGeometry,
  ri as CylinderGeometry,
  ki as DirectionalLight,
  li as EdgesGeometry,
  Bo as GLTFLoader,
  io as Group,
  Gi as HemisphereLight,
  ao as InstancedMesh,
  ro as Line,
  Mi as LineBasicMaterial,
  Ti as LineDashedMaterial,
  co as LineLoop,
  lo as LineSegments,
  uo as Mesh,
  xi as MeshBasicMaterial,
  Ai as MeshLambertMaterial,
  Ii as MeshNormalMaterial,
  Qo as OBJLoader,
  Ys as OrbitControls,
  Us as OrthographicCamera,
  di as ParametricGeometry,
  Hs as PerspectiveCamera,
  pi as PlaneGeometry,
  ji as PointLight,
  ho as Points,
  Pi as PointsMaterial,
  Gs as Renderer,
  mi as RingGeometry,
  Fs as Scene,
  yi as SphereGeometry,
  zi as TextureLoader,
  Ks as TrackballControls,
  oo as TransformControls,
  _i as WireframeGeometry,
  Ki as install
};

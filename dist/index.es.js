import { watch as C, inject as S, onMounted as it, onUnmounted as _e, defineComponent as O, ref as Oe, reactive as ce, provide as k, openBlock as Xn, createElementBlock as Yn, Fragment as Vn, createElementVNode as Zn, renderSlot as te, shallowRef as Kn, nextTick as ft } from "vue";
import { Vector3 as x, Vector2 as z, Raycaster as It, WebGLRenderer as $n, Scene as Qn, Color as K, PerspectiveCamera as Tn, OrthographicCamera as Sn, EventDispatcher as xn, MOUSE as Se, TOUCH as Xe, Quaternion as re, Spherical as $t, Euler as qn, Matrix4 as yt, Object3D as mt, MeshBasicMaterial as we, LineBasicMaterial as xe, CylinderGeometry as se, BoxGeometry as ne, BufferGeometry as X, Float32BufferAttribute as pe, Mesh as A, OctahedronGeometry as ct, Line as ye, SphereGeometry as An, TorusGeometry as Ke, PlaneGeometry as vn, DoubleSide as Ln, Group as Fe, InstancedMesh as Wn, LineLoop as Pn, LineSegments as gt, PointsMaterial as Ge, Points as tt, Loader as Rn, LoaderUtils as je, FileLoader as Ft, SpotLight as Jn, PointLight as In, DirectionalLight as es, sRGBEncoding as He, MeshPhysicalMaterial as ze, TangentSpaceNormalMap as ts, Interpolant as ns, TextureLoader as On, ImageBitmapLoader as ss, InterleavedBuffer as os, InterleavedBufferAttribute as is, BufferAttribute as nt, LinearFilter as Cn, LinearMipmapLinearFilter as Nn, RepeatWrapping as Ot, Material as st, MeshStandardMaterial as jt, PropertyBinding as as, SkinnedMesh as rs, MathUtils as cs, InterpolateLinear as Dn, AnimationClip as ls, Bone as us, Skeleton as hs, TriangleFanDrawMode as kn, NearestFilter as ds, NearestMipmapNearestFilter as ps, LinearMipmapNearestFilter as fs, NearestMipmapLinearFilter as ms, ClampToEdgeWrapping as Ct, MirroredRepeatWrapping as gs, InterpolateDiscrete as ys, FrontSide as wt, Texture as Nt, TriangleStripDrawMode as ws, VectorKeyframeTrack as _s, QuaternionKeyframeTrack as Qt, NumberKeyframeTrack as bs, Box3 as Ms, Sphere as Es, MeshPhongMaterial as Ts, AxesHelper as Ss, CircleGeometry as xs, ConeGeometry as As, EdgesGeometry as vs, Curve as Ls, RingGeometry as Ps, WireframeGeometry as Rs, LineDashedMaterial as Is, MeshLambertMaterial as Os, MeshNormalMaterial as Cs, AmbientLight as Ns } from "three";
const qt = (c) => c === void 0 ? new x(0, 0, 0) : "x" in c ? new x(c.x, c.y, c.z) : new x(c[0], c[1], c[2]), Wt = (c) => c === void 0 ? new z(0, 0) : "x" in c ? new z(c.x, c.y) : new z(c[0], c[1]), Jt = (c, o, t) => {
  t[c].isVector3 ? t[c].set(o.x, o.y, o.z) : "isEuler" in t[c] && t[c].setFromVector3(o);
}, R = (c, o, t, e = !0) => {
  if (t !== null) {
    if (c[o] !== void 0) {
      const n = qt(c[o]);
      Jt(o, n, t);
    }
    e && C(
      () => c[o],
      () => {
        if (c[o] !== void 0) {
          const n = qt(c[o]);
          Jt(o, n, t);
        }
      }
    );
  }
}, en = (c, o, t) => {
  t[c].isVector2 && t[c].set(o.x, o.y);
}, tn = (c, o, t, e = !0) => {
  if (t !== null) {
    if (c[o] !== void 0) {
      const n = Wt(c[o]);
      en(o, n, t);
    }
    e && C(
      () => c[o],
      () => {
        if (c[o] !== void 0) {
          const n = Wt(c[o]);
          en(o, n, t);
        }
      }
    );
  }
}, w = (c, o, t) => {
  C(
    () => c[o],
    () => {
      t();
    }
  );
};
function fe(c, o) {
  o.hasAttribute("position") && (c.setAttribute("position", o.getAttribute("position")), c.attributes.position.needsUpdate = !0), o.hasAttribute("normal") && (c.setAttribute("normal", o.getAttribute("normal")), c.attributes.normal.needsUpdate = !0), o.hasAttribute("uv") && (c.setAttribute("uv", o.getAttribute("uv")), c.attributes.uv.needsUpdate = !0), c.setIndex(o.getIndex());
}
function Ae(c) {
  if (c.children.length > 0)
    for (let o = c.children.length - 1; o >= 0; o--)
      Ae(c.children[o]);
  if (c.geometry && c.geometry.dispose(), c.material)
    if (c.material.length)
      for (let o = 0; o < c.material.length; ++o)
        c.material[o].map && c.material[o].map.dispose(), c.material[o].lightMap && c.material[o].lightMap.dispose(), c.material[o].bumpMap && c.material[o].bumpMap.dispose(), c.material[o].normalMap && c.material[o].normalMap.dispose(), c.material[o].specularMap && c.material[o].specularMap.dispose(), c.material[o].envMap && c.material[o].envMap.dispose(), c.material[o].dispose();
    else
      c.material.map && c.material.map.dispose(), c.material.lightMap && c.material.lightMap.dispose(), c.material.bumpMap && c.material.bumpMap.dispose(), c.material.normalMap && c.material.normalMap.dispose(), c.material.specularMap && c.material.specularMap.dispose(), c.material.envMap && c.material.envMap.dispose(), c.material.dispose();
  return c.removeFromParent(), !0;
}
function Ue(c) {
  const o = S("scene"), t = S("parent", void 0);
  it(() => {
    t ? t.add(c) : o.add(c);
  }), _e(() => {
    t ? t.remove(c) : o.remove(c);
  });
}
function Ds(c, o, t) {
  const e = S("camera"), n = S("canvas");
  S("scene");
  const i = (l) => {
    const h = new It(), u = nn(l);
    h.setFromCamera(u, e.value);
    const d = h.intersectObjects(c);
    d.length > 0 && t("click", d, u);
  };
  let s = !1, a = [];
  const r = (l) => {
    const h = new It(), u = nn(l);
    h.setFromCamera(u, e.value);
    const d = h.intersectObjects(c);
    d.length > 0 ? (a = d, s === !1 && t("mouseenter", d, u), s = !0, t("mousemove", d, u)) : (s && t("mouseleave", a, u), s = !1, a = []);
  };
  it(() => {
    if (o.enableRaycasting) {
      if ((n == null ? void 0 : n.value) == null)
        return;
      n == null || n.value.addEventListener("click", i), n == null || n.value.addEventListener("mousemove", r);
    }
  }), _e(() => {
    if (o.enableRaycasting) {
      if ((n == null ? void 0 : n.value) == null)
        return;
      n == null || n.value.removeEventListener("click", i), n == null || n.value.removeEventListener("mousemove", r);
    }
  }), C(
    () => o.enableRaycasting,
    (l) => {
      l ? (n == null || n.value.addEventListener("click", i), n == null || n.value.addEventListener("mousemove", r)) : (n == null || n.value.removeEventListener("click", i), n == null || n.value.removeEventListener("mousemove", r));
    }
  );
}
function nn(c) {
  const o = new z(), t = c.currentTarget.getBoundingClientRect();
  return o.x = (c.clientX - t.left) / t.width * 2 - 1, o.y = -((c.clientY - t.top) / t.height) * 2 + 1, o;
}
const ks = /* @__PURE__ */ O({
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
  setup(c, { expose: o }) {
    const t = c;
    let e = Oe(null);
    const n = [], i = ce([]), s = ce([]);
    let a = Oe(null);
    const r = Oe([]), l = Oe([]), h = Oe();
    k("canvas", h);
    let u = !0, d = Date.now(), p = 1e3 / t.frameLimit;
    C(
      () => t.camera,
      (m) => g(m)
    );
    const g = (m) => {
      if (m) {
        const M = r.value.find((E) => E.name === m);
        M === void 0 && (a.value = null), a.value = M;
      } else
        a.value = r.value[0];
    };
    function _() {
      e.value !== null && (e.value.shadowMap.enabled = t.shadowMapEnabled, p = 1e3 / t.frameLimit, t.autoResize || e.value.setSize(t.width, t.height));
    }
    it(() => {
      e.value = new $n({ canvas: h.value, antialias: t.antialias, alpha: t.alpha }), e.value.setSize(1, 1), _(), g(t.camera), new ResizeObserver((M) => {
        M.forEach((E) => {
          e.value && t.autoResize && e.value.setSize(E.contentRect.width, E.contentRect.height);
        });
      }).observe(h.value.parentElement), b();
    }), _e(() => {
      for (let m of n)
        Ae(m);
    });
    function b() {
      if (requestAnimationFrame(b), e.value === null)
        return;
      const m = Date.now(), M = m - d;
      if (!(p > -1 && M < p)) {
        if (d = m - M % p, t.onBeforeRender && t.onBeforeRender(), l.value.length > 0 && a.value)
          for (const E of l.value)
            E.value !== null && (E.value.object.uuid === a.value.uuid ? (E.value.enabled = u, E.value.update()) : E.value.enabled = !1);
        if (a.value && e)
          for (const E of n)
            e.value.render(E, a.value);
      }
    }
    return _(), C(
      () => t.shadowMapEnabled,
      () => _()
    ), C(
      () => t.frameLimit,
      () => _()
    ), C(
      () => t.width,
      () => _()
    ), C(
      () => t.height,
      () => _()
    ), k("addCamera", (m) => r.value.push(m)), k("addScene", (m) => n.push(m)), k("addGeometry", (m) => i.push(m)), k("getGeometry", (m) => i.find((M) => M.name === m)), k("addMaterial", (m) => s.push(m)), k("getMaterial", (m) => s.find((M) => M.name === m)), k("addControls", (m) => l.value.push(m)), k("enableAllControls", () => {
      u = !0;
    }), k("disableAllControls", () => {
      u = !1;
    }), k("camera", a), o({ three: e }), (m, M) => (Xn(), Yn(Vn, null, [
      Zn("canvas", {
        ref_key: "canvas",
        ref: h
      }, null, 512),
      te(m.$slots, "default")
    ], 64));
  }
}), Gs = /* @__PURE__ */ O({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(c, { expose: o }) {
    const t = c, e = new Qn();
    k("scene", e), S("addScene")(e);
    function n(i) {
      i.background && (e.background = new K(i.background));
    }
    return n(t), C(
      () => t.background,
      () => n(t)
    ), o({ three: e }), (i, s) => te(i.$slots, "default");
  }
}), Fs = {
  name: "PerspectiveCamera"
}, js = /* @__PURE__ */ O({
  ...Fs,
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
  setup(c, { expose: o }) {
    const t = c, e = new Tn(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    S("addCamera")(e);
    const n = S("canvas");
    C(n, () => {
      new ResizeObserver((a) => {
        a.forEach((r) => {
          t.autoResize && (e.aspect = r.contentRect.width / r.contentRect.height, e.updateProjectionMatrix());
        });
      }).observe(n.value);
    }), R(t, "position", e), R(t, "up", e), R(t, "lookAt", e);
    function i() {
      e.name = t.name, t.autoResize || (e.aspect = t.aspect), e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return i(), w(t, "name", i), w(t, "aspect", i), w(t, "near", i), w(t, "far", i), k("parentCamera", e), o({ three: e }), (s, a) => te(s.$slots, "default");
  }
}), Hs = {
  name: "OrthographicCamera"
}, zs = /* @__PURE__ */ O({
  ...Hs,
  props: {
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(c, { expose: o }) {
    const t = c, e = new Sn(-10, 10, 10, -10, 0.1, 1e3);
    e.lookAt(0, 0, 0), e.updateProjectionMatrix(), S("addCamera")(e);
    const n = S("canvas");
    C(n, () => {
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
    return i(), w(t, "name", i), w(t, "near", i), w(t, "far", i), k("parentCamera", e), o({ three: e }), (s, a) => te(s.$slots, "default");
  }
}), sn = { type: "change" }, Tt = { type: "start" }, on = { type: "end" };
class Us extends xn {
  constructor(o, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = o, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new x(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Se.ROTATE, MIDDLE: Se.DOLLY, RIGHT: Se.PAN }, this.touches = { ONE: Xe.ROTATE, TWO: Xe.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(f) {
      f.addEventListener("keydown", Xt), this._domElementKeyEvents = f;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(sn), e.update(), i = n.NONE;
    }, this.update = function() {
      const f = new x(), L = new re().setFromUnitVectors(o.up, new x(0, 1, 0)), q = L.clone().invert(), ee = new x(), de = new re(), Be = 2 * Math.PI;
      return function() {
        const Kt = e.object.position;
        f.copy(Kt).sub(e.target), f.applyQuaternion(L), a.setFromVector3(f), e.autoRotate && i === n.NONE && $(F()), e.enableDamping ? (a.theta += r.theta * e.dampingFactor, a.phi += r.phi * e.dampingFactor) : (a.theta += r.theta, a.phi += r.phi);
        let Me = e.minAzimuthAngle, Ee = e.maxAzimuthAngle;
        return isFinite(Me) && isFinite(Ee) && (Me < -Math.PI ? Me += Be : Me > Math.PI && (Me -= Be), Ee < -Math.PI ? Ee += Be : Ee > Math.PI && (Ee -= Be), Me <= Ee ? a.theta = Math.max(Me, Math.min(Ee, a.theta)) : a.theta = a.theta > (Me + Ee) / 2 ? Math.max(Me, a.theta) : Math.min(Ee, a.theta)), a.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(e.minDistance, Math.min(e.maxDistance, a.radius)), e.enableDamping === !0 ? e.target.addScaledVector(h, e.dampingFactor) : e.target.add(h), f.setFromSpherical(a), f.applyQuaternion(q), Kt.copy(e.target).add(f), e.object.lookAt(e.target), e.enableDamping === !0 ? (r.theta *= 1 - e.dampingFactor, r.phi *= 1 - e.dampingFactor, h.multiplyScalar(1 - e.dampingFactor)) : (r.set(0, 0, 0), h.set(0, 0, 0)), l = 1, u || ee.distanceToSquared(e.object.position) > s || 8 * (1 - de.dot(e.object.quaternion)) > s ? (e.dispatchEvent(sn), ee.copy(e.object.position), de.copy(e.object.quaternion), u = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", Yt), e.domElement.removeEventListener("pointerdown", Ce), e.domElement.removeEventListener("pointercancel", Ut), e.domElement.removeEventListener("wheel", Bt), e.domElement.removeEventListener("pointermove", bt), e.domElement.removeEventListener("pointerup", Mt), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", Xt);
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
    const s = 1e-6, a = new $t(), r = new $t();
    let l = 1;
    const h = new x();
    let u = !1;
    const d = new z(), p = new z(), g = new z(), _ = new z(), b = new z(), m = new z(), M = new z(), E = new z(), v = new z(), T = [], D = {};
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
    const Y = function() {
      const f = new x();
      return function(q, ee) {
        f.setFromMatrixColumn(ee, 0), f.multiplyScalar(-q), h.add(f);
      };
    }(), oe = function() {
      const f = new x();
      return function(q, ee) {
        e.screenSpacePanning === !0 ? f.setFromMatrixColumn(ee, 1) : (f.setFromMatrixColumn(ee, 0), f.crossVectors(e.object.up, f)), f.multiplyScalar(q), h.add(f);
      };
    }(), U = function() {
      const f = new x();
      return function(q, ee) {
        const de = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const Be = e.object.position;
          f.copy(Be).sub(e.target);
          let rt = f.length();
          rt *= Math.tan(e.object.fov / 2 * Math.PI / 180), Y(2 * q * rt / de.clientHeight, e.object.matrix), oe(2 * ee * rt / de.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (Y(q * (e.object.right - e.object.left) / e.object.zoom / de.clientWidth, e.object.matrix), oe(ee * (e.object.top - e.object.bottom) / e.object.zoom / de.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function V(f) {
      e.object.isPerspectiveCamera ? l /= f : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * f)), e.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function H(f) {
      e.object.isPerspectiveCamera ? l *= f : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / f)), e.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function le(f) {
      d.set(f.clientX, f.clientY);
    }
    function W(f) {
      M.set(f.clientX, f.clientY);
    }
    function ie(f) {
      _.set(f.clientX, f.clientY);
    }
    function Q(f) {
      p.set(f.clientX, f.clientY), g.subVectors(p, d).multiplyScalar(e.rotateSpeed);
      const L = e.domElement;
      $(2 * Math.PI * g.x / L.clientHeight), N(2 * Math.PI * g.y / L.clientHeight), d.copy(p), e.update();
    }
    function ve(f) {
      E.set(f.clientX, f.clientY), v.subVectors(E, M), v.y > 0 ? V(G()) : v.y < 0 && H(G()), M.copy(E), e.update();
    }
    function Le(f) {
      b.set(f.clientX, f.clientY), m.subVectors(b, _).multiplyScalar(e.panSpeed), U(m.x, m.y), _.copy(b), e.update();
    }
    function be(f) {
      f.deltaY < 0 ? H(G()) : f.deltaY > 0 && V(G()), e.update();
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
    function Pe() {
      if (T.length === 1)
        d.set(T[0].pageX, T[0].pageY);
      else {
        const f = 0.5 * (T[0].pageX + T[1].pageX), L = 0.5 * (T[0].pageY + T[1].pageY);
        d.set(f, L);
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
    function y() {
      e.enableZoom && at(), e.enablePan && Ze();
    }
    function P() {
      e.enableZoom && at(), e.enableRotate && Pe();
    }
    function Z(f) {
      if (T.length == 1)
        p.set(f.pageX, f.pageY);
      else {
        const q = Et(f), ee = 0.5 * (f.pageX + q.x), de = 0.5 * (f.pageY + q.y);
        p.set(ee, de);
      }
      g.subVectors(p, d).multiplyScalar(e.rotateSpeed);
      const L = e.domElement;
      $(2 * Math.PI * g.x / L.clientHeight), N(2 * Math.PI * g.y / L.clientHeight), d.copy(p);
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
      const L = Et(f), q = f.pageX - L.x, ee = f.pageY - L.y, de = Math.sqrt(q * q + ee * ee);
      E.set(0, de), v.set(0, Math.pow(E.y / M.y, e.zoomSpeed)), V(v.y), M.copy(E);
    }
    function me(f) {
      e.enableZoom && ue(f), e.enablePan && J(f);
    }
    function zt(f) {
      e.enableZoom && ue(f), e.enableRotate && Z(f);
    }
    function Ce(f) {
      e.enabled !== !1 && (T.length === 0 && (e.domElement.setPointerCapture(f.pointerId), e.domElement.addEventListener("pointermove", bt), e.domElement.addEventListener("pointerup", Mt)), Bn(f), f.pointerType === "touch" ? zn(f) : jn(f));
    }
    function bt(f) {
      e.enabled !== !1 && (f.pointerType === "touch" ? Un(f) : Hn(f));
    }
    function Mt(f) {
      Vt(f), T.length === 0 && (e.domElement.releasePointerCapture(f.pointerId), e.domElement.removeEventListener("pointermove", bt), e.domElement.removeEventListener("pointerup", Mt)), e.dispatchEvent(on), i = n.NONE;
    }
    function Ut(f) {
      Vt(f);
    }
    function jn(f) {
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
    function Hn(f) {
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
            ve(f);
            break;
          case n.PAN:
            if (e.enablePan === !1)
              return;
            Le(f);
            break;
        }
    }
    function Bt(f) {
      e.enabled === !1 || e.enableZoom === !1 || i !== n.NONE || (f.preventDefault(), e.dispatchEvent(Tt), be(f), e.dispatchEvent(on));
    }
    function Xt(f) {
      e.enabled === !1 || e.enablePan === !1 || Ve(f);
    }
    function zn(f) {
      switch (Zt(f), T.length) {
        case 1:
          switch (e.touches.ONE) {
            case Xe.ROTATE:
              if (e.enableRotate === !1)
                return;
              Pe(), i = n.TOUCH_ROTATE;
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
              y(), i = n.TOUCH_DOLLY_PAN;
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
    function Un(f) {
      switch (Zt(f), i) {
        case n.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          Z(f), e.update();
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
          zt(f), e.update();
          break;
        default:
          i = n.NONE;
      }
    }
    function Yt(f) {
      e.enabled !== !1 && f.preventDefault();
    }
    function Bn(f) {
      T.push(f);
    }
    function Vt(f) {
      delete D[f.pointerId];
      for (let L = 0; L < T.length; L++)
        if (T[L].pointerId == f.pointerId) {
          T.splice(L, 1);
          return;
        }
    }
    function Zt(f) {
      let L = D[f.pointerId];
      L === void 0 && (L = new z(), D[f.pointerId] = L), L.set(f.pageX, f.pageY);
    }
    function Et(f) {
      const L = f.pointerId === T[0].pointerId ? T[1] : T[0];
      return D[L.pointerId];
    }
    e.domElement.addEventListener("contextmenu", Yt), e.domElement.addEventListener("pointerdown", Ce), e.domElement.addEventListener("pointercancel", Ut), e.domElement.addEventListener("wheel", Bt, { passive: !1 }), this.update();
  }
}
const Bs = {
  name: "OrbitControls",
  render: () => null
}, Xs = /* @__PURE__ */ O({
  ...Bs,
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
  setup(c, { expose: o }) {
    const t = c, e = Oe(null);
    S("addControls")(e);
    const n = S("parentCamera"), i = S("canvas");
    function s() {
      e.value != null && (e.value.enablePan = t.enablePan, e.value.enableRotate = t.enableRotate, e.value.enableZoom = t.enableZoom, e.value.minZoom = t.minZoom, e.value.maxZoom = t.maxZoom, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance, e.value.minPolarAngle = t.minPolarAngle, e.value.maxPolarAngle = t.maxPolarAngle, e.value.minAzimuthAngle = t.minAzimuthAngle, e.value.maxAzimuthAngle = t.maxAzimuthAngle);
    }
    let a = !1;
    const r = () => {
      i.value && (a || (e.value = new Us(n, i.value), s(), R(t, "target", e.value), a = !0));
    };
    return C(i, () => {
      r();
    }), s(), w(t, "enablePan", s), w(t, "enableRotate", s), w(t, "enableZoom", s), w(t, "minZoom", s), w(t, "maxZoom", s), w(t, "minDistance", s), w(t, "maxDistance", s), w(t, "minPolarAngle", s), w(t, "maxPolarAngle", s), w(t, "minAzimuthAngle", s), w(t, "maxAzimuthAngle", s), o({ three: e }), { props: t, three: e, camera: n, canvas: i, applyProps: s, get boundCamera() {
      return a;
    }, set boundCamera(l) {
      a = l;
    }, tryBindCamera: r };
  }
}), St = { type: "change" }, xt = { type: "start" }, At = { type: "end" };
class Ys extends xn {
  constructor(o, t) {
    super(), t === void 0 && console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
    const e = this, n = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };
    this.object = o, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.screen = { left: 0, top: 0, width: 0, height: 0 }, this.rotateSpeed = 1, this.zoomSpeed = 1.2, this.panSpeed = 0.3, this.noRotate = !1, this.noZoom = !1, this.noPan = !1, this.staticMoving = !1, this.dynamicDampingFactor = 0.2, this.minDistance = 0, this.maxDistance = 1 / 0, this.keys = ["KeyA", "KeyS", "KeyD"], this.mouseButtons = { LEFT: Se.ROTATE, MIDDLE: Se.DOLLY, RIGHT: Se.PAN }, this.target = new x();
    const i = 1e-6, s = new x();
    let a = 1, r = n.NONE, l = n.NONE, h = 0, u = 0, d = 0;
    const p = new x(), g = new z(), _ = new z(), b = new x(), m = new z(), M = new z(), E = new z(), v = new z(), T = [], D = {};
    this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.up0 = this.object.up.clone(), this.zoom0 = this.object.zoom, this.handleResize = function() {
      const y = e.domElement.getBoundingClientRect(), P = e.domElement.ownerDocument.documentElement;
      e.screen.left = y.left + window.pageXOffset - P.clientLeft, e.screen.top = y.top + window.pageYOffset - P.clientTop, e.screen.width = y.width, e.screen.height = y.height;
    };
    const F = function() {
      const y = new z();
      return function(Z, J) {
        return y.set(
          (Z - e.screen.left) / e.screen.width,
          (J - e.screen.top) / e.screen.height
        ), y;
      };
    }(), G = function() {
      const y = new z();
      return function(Z, J) {
        return y.set(
          (Z - e.screen.width * 0.5 - e.screen.left) / (e.screen.width * 0.5),
          (e.screen.height + 2 * (e.screen.top - J)) / e.screen.width
        ), y;
      };
    }();
    this.rotateCamera = function() {
      const y = new x(), P = new re(), Z = new x(), J = new x(), ue = new x(), me = new x();
      return function() {
        me.set(_.x - g.x, _.y - g.y, 0);
        let Ce = me.length();
        Ce ? (p.copy(e.object.position).sub(e.target), Z.copy(p).normalize(), J.copy(e.object.up).normalize(), ue.crossVectors(J, Z).normalize(), J.setLength(_.y - g.y), ue.setLength(_.x - g.x), me.copy(J.add(ue)), y.crossVectors(me, p).normalize(), Ce *= e.rotateSpeed, P.setFromAxisAngle(y, Ce), p.applyQuaternion(P), e.object.up.applyQuaternion(P), b.copy(y), d = Ce) : !e.staticMoving && d && (d *= Math.sqrt(1 - e.dynamicDampingFactor), p.copy(e.object.position).sub(e.target), P.setFromAxisAngle(b, d), p.applyQuaternion(P), e.object.up.applyQuaternion(P)), g.copy(_);
      };
    }(), this.zoomCamera = function() {
      let y;
      r === n.TOUCH_ZOOM_PAN ? (y = h / u, h = u, e.object.isPerspectiveCamera ? p.multiplyScalar(y) : e.object.isOrthographicCamera ? (e.object.zoom /= y, e.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")) : (y = 1 + (M.y - m.y) * e.zoomSpeed, y !== 1 && y > 0 && (e.object.isPerspectiveCamera ? p.multiplyScalar(y) : e.object.isOrthographicCamera ? (e.object.zoom /= y, e.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")), e.staticMoving ? m.copy(M) : m.y += (M.y - m.y) * this.dynamicDampingFactor);
    }, this.panCamera = function() {
      const y = new z(), P = new x(), Z = new x();
      return function() {
        if (y.copy(v).sub(E), y.lengthSq()) {
          if (e.object.isOrthographicCamera) {
            const ue = (e.object.right - e.object.left) / e.object.zoom / e.domElement.clientWidth, me = (e.object.top - e.object.bottom) / e.object.zoom / e.domElement.clientWidth;
            y.x *= ue, y.y *= me;
          }
          y.multiplyScalar(p.length() * e.panSpeed), Z.copy(p).cross(e.object.up).setLength(y.x), Z.add(P.copy(e.object.up).setLength(y.y)), e.object.position.add(Z), e.target.add(Z), e.staticMoving ? E.copy(v) : E.add(y.subVectors(v, E).multiplyScalar(e.dynamicDampingFactor));
        }
      };
    }(), this.checkDistances = function() {
      (!e.noZoom || !e.noPan) && (p.lengthSq() > e.maxDistance * e.maxDistance && (e.object.position.addVectors(e.target, p.setLength(e.maxDistance)), m.copy(M)), p.lengthSq() < e.minDistance * e.minDistance && (e.object.position.addVectors(e.target, p.setLength(e.minDistance)), m.copy(M)));
    }, this.update = function() {
      p.subVectors(e.object.position, e.target), e.noRotate || e.rotateCamera(), e.noZoom || e.zoomCamera(), e.noPan || e.panCamera(), e.object.position.addVectors(e.target, p), e.object.isPerspectiveCamera ? (e.checkDistances(), e.object.lookAt(e.target), s.distanceToSquared(e.object.position) > i && (e.dispatchEvent(St), s.copy(e.object.position))) : e.object.isOrthographicCamera ? (e.object.lookAt(e.target), (s.distanceToSquared(e.object.position) > i || a !== e.object.zoom) && (e.dispatchEvent(St), s.copy(e.object.position), a = e.object.zoom)) : console.warn("THREE.TrackballControls: Unsupported camera type");
    }, this.reset = function() {
      r = n.NONE, l = n.NONE, e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.up.copy(e.up0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), p.subVectors(e.object.position, e.target), e.object.lookAt(e.target), e.dispatchEvent(St), s.copy(e.object.position), a = e.object.zoom;
    };
    function $(y) {
      e.enabled !== !1 && (T.length === 0 && (e.domElement.setPointerCapture(y.pointerId), e.domElement.addEventListener("pointermove", N), e.domElement.addEventListener("pointerup", Y)), Ve(y), y.pointerType === "touch" ? Q(y) : H(y));
    }
    function N(y) {
      e.enabled !== !1 && (y.pointerType === "touch" ? ve(y) : le(y));
    }
    function Y(y) {
      e.enabled !== !1 && (y.pointerType === "touch" ? Le(y) : W(), Pe(y), T.length === 0 && (e.domElement.releasePointerCapture(y.pointerId), e.domElement.removeEventListener("pointermove", N), e.domElement.removeEventListener("pointerup", Y)));
    }
    function oe(y) {
      Pe(y);
    }
    function U(y) {
      e.enabled !== !1 && (window.removeEventListener("keydown", U), l === n.NONE && (y.code === e.keys[n.ROTATE] && !e.noRotate ? l = n.ROTATE : y.code === e.keys[n.ZOOM] && !e.noZoom ? l = n.ZOOM : y.code === e.keys[n.PAN] && !e.noPan && (l = n.PAN)));
    }
    function V() {
      e.enabled !== !1 && (l = n.NONE, window.addEventListener("keydown", U));
    }
    function H(y) {
      if (r === n.NONE)
        switch (y.button) {
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
      P === n.ROTATE && !e.noRotate ? (_.copy(G(y.pageX, y.pageY)), g.copy(_)) : P === n.ZOOM && !e.noZoom ? (m.copy(F(y.pageX, y.pageY)), M.copy(m)) : P === n.PAN && !e.noPan && (E.copy(F(y.pageX, y.pageY)), v.copy(E)), e.dispatchEvent(xt);
    }
    function le(y) {
      const P = l !== n.NONE ? l : r;
      P === n.ROTATE && !e.noRotate ? (g.copy(_), _.copy(G(y.pageX, y.pageY))) : P === n.ZOOM && !e.noZoom ? M.copy(F(y.pageX, y.pageY)) : P === n.PAN && !e.noPan && v.copy(F(y.pageX, y.pageY));
    }
    function W() {
      r = n.NONE, e.dispatchEvent(At);
    }
    function ie(y) {
      if (e.enabled !== !1 && e.noZoom !== !0) {
        switch (y.preventDefault(), y.deltaMode) {
          case 2:
            m.y -= y.deltaY * 0.025;
            break;
          case 1:
            m.y -= y.deltaY * 0.01;
            break;
          default:
            m.y -= y.deltaY * 25e-5;
            break;
        }
        e.dispatchEvent(xt), e.dispatchEvent(At);
      }
    }
    function Q(y) {
      switch (Ze(y), T.length) {
        case 1:
          r = n.TOUCH_ROTATE, _.copy(G(T[0].pageX, T[0].pageY)), g.copy(_);
          break;
        default:
          r = n.TOUCH_ZOOM_PAN;
          const P = T[0].pageX - T[1].pageX, Z = T[0].pageY - T[1].pageY;
          u = h = Math.sqrt(P * P + Z * Z);
          const J = (T[0].pageX + T[1].pageX) / 2, ue = (T[0].pageY + T[1].pageY) / 2;
          E.copy(F(J, ue)), v.copy(E);
          break;
      }
      e.dispatchEvent(xt);
    }
    function ve(y) {
      switch (Ze(y), T.length) {
        case 1:
          g.copy(_), _.copy(G(y.pageX, y.pageY));
          break;
        default:
          const P = at(y), Z = y.pageX - P.x, J = y.pageY - P.y;
          u = Math.sqrt(Z * Z + J * J);
          const ue = (y.pageX + P.x) / 2, me = (y.pageY + P.y) / 2;
          v.copy(F(ue, me));
          break;
      }
    }
    function Le(y) {
      switch (T.length) {
        case 0:
          r = n.NONE;
          break;
        case 1:
          r = n.TOUCH_ROTATE, _.copy(G(y.pageX, y.pageY)), g.copy(_);
          break;
        case 2:
          r = n.TOUCH_ZOOM_PAN, _.copy(G(y.pageX - g.x, y.pageY - g.y)), g.copy(_);
          break;
      }
      e.dispatchEvent(At);
    }
    function be(y) {
      e.enabled !== !1 && y.preventDefault();
    }
    function Ve(y) {
      T.push(y);
    }
    function Pe(y) {
      delete D[y.pointerId];
      for (let P = 0; P < T.length; P++)
        if (T[P].pointerId == y.pointerId) {
          T.splice(P, 1);
          return;
        }
    }
    function Ze(y) {
      let P = D[y.pointerId];
      P === void 0 && (P = new z(), D[y.pointerId] = P), P.set(y.pageX, y.pageY);
    }
    function at(y) {
      const P = y.pointerId === T[0].pointerId ? T[1] : T[0];
      return D[P.pointerId];
    }
    this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", be), e.domElement.removeEventListener("pointerdown", $), e.domElement.removeEventListener("pointercancel", oe), e.domElement.removeEventListener("wheel", ie), e.domElement.removeEventListener("pointermove", N), e.domElement.removeEventListener("pointerup", Y), window.removeEventListener("keydown", U), window.removeEventListener("keyup", V);
    }, this.domElement.addEventListener("contextmenu", be), this.domElement.addEventListener("pointerdown", $), this.domElement.addEventListener("pointercancel", oe), this.domElement.addEventListener("wheel", ie, { passive: !1 }), window.addEventListener("keydown", U), window.addEventListener("keyup", V), this.handleResize(), this.update();
  }
}
const Vs = {
  name: "TrackballControls",
  render: () => null
}, Zs = /* @__PURE__ */ O({
  ...Vs,
  props: {
    minDistance: { default: 0 },
    maxDistance: { default: 1 / 0 },
    panSpeed: { default: 0.3 },
    rotateSpeed: { default: 1 },
    zoomSpeed: { default: 1.2 }
  },
  setup(c, { expose: o }) {
    const t = c, e = Oe(null);
    S("addControls")(e);
    const n = S("parentCamera"), i = S("canvas");
    function s() {
      e.value != null && (e.value.rotateSpeed = t.rotateSpeed, e.value.zoomSpeed = t.zoomSpeed, e.value.panSpeed = t.panSpeed, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance);
    }
    let a = !1;
    const r = () => {
      i.value && (a || (e.value = new Ys(n, i.value), s(), a = !0));
    };
    return C(i, () => {
      r();
    }), s(), w(t, "panSpeed", s), w(t, "rotateSpeed", s), w(t, "zoomSpeed", s), w(t, "minDistance", s), w(t, "maxDistance", s), o({ three: e }), { props: t, three: e, camera: n, canvas: i, applyProps: s, get boundCamera() {
      return a;
    }, set boundCamera(l) {
      a = l;
    }, tryBindCamera: r };
  }
}), Ne = new It(), ae = new x(), Re = new x(), B = new re(), an = {
  X: new x(1, 0, 0),
  Y: new x(0, 1, 0),
  Z: new x(0, 0, 1)
}, vt = { type: "change" }, rn = { type: "mouseDown" }, cn = { type: "mouseUp", mode: null }, ln = { type: "objectChange" };
class Ks extends mt {
  constructor(o, t) {
    super(), t === void 0 && (console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'), t = document), this.isTransformControls = !0, this.visible = !1, this.domElement = t, this.domElement.style.touchAction = "none";
    const e = new eo();
    this._gizmo = e, this.add(e);
    const n = new to();
    this._plane = n, this.add(n);
    const i = this;
    function s(M, E) {
      let v = E;
      Object.defineProperty(i, M, {
        get: function() {
          return v !== void 0 ? v : E;
        },
        set: function(T) {
          v !== T && (v = T, n[M] = T, e[M] = T, i.dispatchEvent({ type: M + "-changed", value: T }), i.dispatchEvent(vt));
        }
      }), i[M] = E, n[M] = E, e[M] = E;
    }
    s("camera", o), s("object", void 0), s("enabled", !0), s("axis", null), s("mode", "translate"), s("translationSnap", null), s("rotationSnap", null), s("scaleSnap", null), s("space", "world"), s("size", 1), s("dragging", !1), s("showX", !0), s("showY", !0), s("showZ", !0);
    const a = new x(), r = new x(), l = new re(), h = new re(), u = new x(), d = new re(), p = new x(), g = new x(), _ = new x(), b = 0, m = new x();
    s("worldPosition", a), s("worldPositionStart", r), s("worldQuaternion", l), s("worldQuaternionStart", h), s("cameraPosition", u), s("cameraQuaternion", d), s("pointStart", p), s("pointEnd", g), s("rotationAxis", _), s("rotationAngle", b), s("eye", m), this._offset = new x(), this._startNorm = new x(), this._endNorm = new x(), this._cameraScale = new x(), this._parentPosition = new x(), this._parentQuaternion = new re(), this._parentQuaternionInv = new re(), this._parentScale = new x(), this._worldScaleStart = new x(), this._worldQuaternionInv = new re(), this._worldScale = new x(), this._positionStart = new x(), this._quaternionStart = new re(), this._scaleStart = new x(), this._getPointer = $s.bind(this), this._onPointerDown = qs.bind(this), this._onPointerHover = Qs.bind(this), this._onPointerMove = Ws.bind(this), this._onPointerUp = Js.bind(this), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointermove", this._onPointerHover), this.domElement.addEventListener("pointerup", this._onPointerUp);
  }
  updateMatrixWorld() {
    this.object !== void 0 && (this.object.updateMatrixWorld(), this.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : this.object.parent.matrixWorld.decompose(this._parentPosition, this._parentQuaternion, this._parentScale), this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this._worldScale), this._parentQuaternionInv.copy(this._parentQuaternion).invert(), this._worldQuaternionInv.copy(this.worldQuaternion).invert()), this.camera.updateMatrixWorld(), this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this._cameraScale), this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(), super.updateMatrixWorld(this);
  }
  pointerHover(o) {
    if (this.object === void 0 || this.dragging === !0)
      return;
    Ne.setFromCamera(o, this.camera);
    const t = Lt(this._gizmo.picker[this.mode], Ne);
    t ? this.axis = t.object.name : this.axis = null;
  }
  pointerDown(o) {
    if (!(this.object === void 0 || this.dragging === !0 || o.button !== 0) && this.axis !== null) {
      Ne.setFromCamera(o, this.camera);
      const t = Lt(this._plane, Ne, !0);
      t && (this.object.updateMatrixWorld(), this.object.parent.updateMatrixWorld(), this._positionStart.copy(this.object.position), this._quaternionStart.copy(this.object.quaternion), this._scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart), this.pointStart.copy(t.point).sub(this.worldPositionStart)), this.dragging = !0, rn.mode = this.mode, this.dispatchEvent(rn);
    }
  }
  pointerMove(o) {
    const t = this.axis, e = this.mode, n = this.object;
    let i = this.space;
    if (e === "scale" ? i = "local" : (t === "E" || t === "XYZE" || t === "XYZ") && (i = "world"), n === void 0 || t === null || this.dragging === !1 || o.button !== -1)
      return;
    Ne.setFromCamera(o, this.camera);
    const s = Lt(this._plane, Ne, !0);
    if (s) {
      if (this.pointEnd.copy(s.point).sub(this.worldPositionStart), e === "translate")
        this._offset.copy(this.pointEnd).sub(this.pointStart), i === "local" && t !== "XYZ" && this._offset.applyQuaternion(this._worldQuaternionInv), t.indexOf("X") === -1 && (this._offset.x = 0), t.indexOf("Y") === -1 && (this._offset.y = 0), t.indexOf("Z") === -1 && (this._offset.z = 0), i === "local" && t !== "XYZ" ? this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale) : this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale), n.position.copy(this._offset).add(this._positionStart), this.translationSnap && (i === "local" && (n.position.applyQuaternion(B.copy(this._quaternionStart).invert()), t.search("X") !== -1 && (n.position.x = Math.round(n.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (n.position.y = Math.round(n.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (n.position.z = Math.round(n.position.z / this.translationSnap) * this.translationSnap), n.position.applyQuaternion(this._quaternionStart)), i === "world" && (n.parent && n.position.add(ae.setFromMatrixPosition(n.parent.matrixWorld)), t.search("X") !== -1 && (n.position.x = Math.round(n.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (n.position.y = Math.round(n.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (n.position.z = Math.round(n.position.z / this.translationSnap) * this.translationSnap), n.parent && n.position.sub(ae.setFromMatrixPosition(n.parent.matrixWorld))));
      else if (e === "scale") {
        if (t.search("XYZ") !== -1) {
          let a = this.pointEnd.length() / this.pointStart.length();
          this.pointEnd.dot(this.pointStart) < 0 && (a *= -1), Re.set(a, a, a);
        } else
          ae.copy(this.pointStart), Re.copy(this.pointEnd), ae.applyQuaternion(this._worldQuaternionInv), Re.applyQuaternion(this._worldQuaternionInv), Re.divide(ae), t.search("X") === -1 && (Re.x = 1), t.search("Y") === -1 && (Re.y = 1), t.search("Z") === -1 && (Re.z = 1);
        n.scale.copy(this._scaleStart).multiply(Re), this.scaleSnap && (t.search("X") !== -1 && (n.scale.x = Math.round(n.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Y") !== -1 && (n.scale.y = Math.round(n.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Z") !== -1 && (n.scale.z = Math.round(n.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
      } else if (e === "rotate") {
        this._offset.copy(this.pointEnd).sub(this.pointStart);
        const a = 20 / this.worldPosition.distanceTo(ae.setFromMatrixPosition(this.camera.matrixWorld));
        t === "E" ? (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this._startNorm.copy(this.pointStart).normalize(), this._endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1) : t === "XYZE" ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(), this.rotationAngle = this._offset.dot(ae.copy(this.rotationAxis).cross(this.eye)) * a) : (t === "X" || t === "Y" || t === "Z") && (this.rotationAxis.copy(an[t]), ae.copy(an[t]), i === "local" && ae.applyQuaternion(this.worldQuaternion), this.rotationAngle = this._offset.dot(ae.cross(this.eye).normalize()) * a), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), i === "local" && t !== "E" && t !== "XYZE" ? (n.quaternion.copy(this._quaternionStart), n.quaternion.multiply(B.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv), n.quaternion.copy(B.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), n.quaternion.multiply(this._quaternionStart).normalize());
      }
      this.dispatchEvent(vt), this.dispatchEvent(ln);
    }
  }
  pointerUp(o) {
    o.button === 0 && (this.dragging && this.axis !== null && (cn.mode = this.mode, this.dispatchEvent(cn)), this.dragging = !1, this.axis = null);
  }
  dispose() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerHover), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.traverse(function(o) {
      o.geometry && o.geometry.dispose(), o.material && o.material.dispose();
    });
  }
  attach(o) {
    return this.object = o, this.visible = !0, this;
  }
  detach() {
    return this.object = void 0, this.visible = !1, this.axis = null, this;
  }
  reset() {
    this.enabled && this.dragging && (this.object.position.copy(this._positionStart), this.object.quaternion.copy(this._quaternionStart), this.object.scale.copy(this._scaleStart), this.dispatchEvent(vt), this.dispatchEvent(ln), this.pointStart.copy(this.pointEnd));
  }
  getRaycaster() {
    return Ne;
  }
  getMode() {
    return this.mode;
  }
  setMode(o) {
    this.mode = o;
  }
  setTranslationSnap(o) {
    this.translationSnap = o;
  }
  setRotationSnap(o) {
    this.rotationSnap = o;
  }
  setScaleSnap(o) {
    this.scaleSnap = o;
  }
  setSize(o) {
    this.size = o;
  }
  setSpace(o) {
    this.space = o;
  }
  update() {
    console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.");
  }
}
function $s(c) {
  if (this.domElement.ownerDocument.pointerLockElement)
    return {
      x: 0,
      y: 0,
      button: c.button
    };
  {
    const o = this.domElement.getBoundingClientRect();
    return {
      x: (c.clientX - o.left) / o.width * 2 - 1,
      y: -(c.clientY - o.top) / o.height * 2 + 1,
      button: c.button
    };
  }
}
function Qs(c) {
  if (this.enabled)
    switch (c.pointerType) {
      case "mouse":
      case "pen":
        this.pointerHover(this._getPointer(c));
        break;
    }
}
function qs(c) {
  this.enabled && (document.pointerLockElement || this.domElement.setPointerCapture(c.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.pointerHover(this._getPointer(c)), this.pointerDown(this._getPointer(c)));
}
function Ws(c) {
  this.enabled && this.pointerMove(this._getPointer(c));
}
function Js(c) {
  this.enabled && (this.domElement.releasePointerCapture(c.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.pointerUp(this._getPointer(c)));
}
function Lt(c, o, t) {
  const e = o.intersectObject(c, !0);
  for (let n = 0; n < e.length; n++)
    if (e[n].object.visible || t)
      return e[n];
  return !1;
}
const lt = new qn(), j = new x(0, 1, 0), un = new x(0, 0, 0), hn = new yt(), ut = new re(), pt = new re(), ge = new x(), dn = new yt(), Je = new x(1, 0, 0), De = new x(0, 1, 0), et = new x(0, 0, 1), ht = new x(), $e = new x(), Qe = new x();
class eo extends mt {
  constructor() {
    super(), this.isTransformControlsGizmo = !0, this.type = "TransformControlsGizmo";
    const o = new we({
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
    }), e = o.clone();
    e.opacity = 0.15;
    const n = t.clone();
    n.opacity = 0.5;
    const i = o.clone();
    i.color.setHex(16711680);
    const s = o.clone();
    s.color.setHex(65280);
    const a = o.clone();
    a.color.setHex(255);
    const r = o.clone();
    r.color.setHex(16711680), r.opacity = 0.5;
    const l = o.clone();
    l.color.setHex(65280), l.opacity = 0.5;
    const h = o.clone();
    h.color.setHex(255), h.opacity = 0.5;
    const u = o.clone();
    u.opacity = 0.25;
    const d = o.clone();
    d.color.setHex(16776960), d.opacity = 0.25, o.clone().color.setHex(16776960);
    const g = o.clone();
    g.color.setHex(7895160);
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
    function v() {
      const H = new X();
      return H.setAttribute("position", new pe([0, 0, 0, 1, 1, 1], 3)), H;
    }
    const T = {
      X: [
        [new A(_, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
        [new A(_, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
        [new A(M, i), [0, 0, 0], [0, 0, -Math.PI / 2]]
      ],
      Y: [
        [new A(_, s), [0, 0.5, 0]],
        [new A(_, s), [0, -0.5, 0], [Math.PI, 0, 0]],
        [new A(M, s)]
      ],
      Z: [
        [new A(_, a), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
        [new A(_, a), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
        [new A(M, a), null, [Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new A(new ct(0.1, 0), u.clone()), [0, 0, 0]]
      ],
      XY: [
        [new A(new ne(0.15, 0.15, 0.01), h.clone()), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new A(new ne(0.15, 0.15, 0.01), r.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new A(new ne(0.15, 0.15, 0.01), l.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ]
    }, D = {
      X: [
        [new A(new se(0.2, 0, 0.6, 4), e), [0.3, 0, 0], [0, 0, -Math.PI / 2]],
        [new A(new se(0.2, 0, 0.6, 4), e), [-0.3, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new A(new se(0.2, 0, 0.6, 4), e), [0, 0.3, 0]],
        [new A(new se(0.2, 0, 0.6, 4), e), [0, -0.3, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new A(new se(0.2, 0, 0.6, 4), e), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
        [new A(new se(0.2, 0, 0.6, 4), e), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new A(new ct(0.2, 0), e)]
      ],
      XY: [
        [new A(new ne(0.2, 0.2, 0.01), e), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new A(new ne(0.2, 0.2, 0.01), e), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new A(new ne(0.2, 0.2, 0.01), e), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ]
    }, F = {
      START: [
        [new A(new ct(0.01, 2), n), null, null, null, "helper"]
      ],
      END: [
        [new A(new ct(0.01, 2), n), null, null, null, "helper"]
      ],
      DELTA: [
        [new ye(v(), n), null, null, null, "helper"]
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
        [new A(E(0.5, 1), g), null, [0, Math.PI / 2, 0]]
      ],
      X: [
        [new A(E(0.5, 0.5), i)]
      ],
      Y: [
        [new A(E(0.5, 0.5), s), null, [0, 0, -Math.PI / 2]]
      ],
      Z: [
        [new A(E(0.5, 0.5), a), null, [0, Math.PI / 2, 0]]
      ],
      E: [
        [new A(E(0.75, 1), d), null, [0, Math.PI / 2, 0]]
      ]
    }, $ = {
      AXIS: [
        [new ye(m, n.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ]
    }, N = {
      XYZE: [
        [new A(new An(0.25, 10, 8), e)]
      ],
      X: [
        [new A(new Ke(0.5, 0.1, 4, 24), e), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]
      ],
      Y: [
        [new A(new Ke(0.5, 0.1, 4, 24), e), [0, 0, 0], [Math.PI / 2, 0, 0]]
      ],
      Z: [
        [new A(new Ke(0.5, 0.1, 4, 24), e), [0, 0, 0], [0, 0, -Math.PI / 2]]
      ],
      E: [
        [new A(new Ke(0.75, 0.1, 2, 24), e)]
      ]
    }, Y = {
      X: [
        [new A(b, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
        [new A(M, i), [0, 0, 0], [0, 0, -Math.PI / 2]],
        [new A(b, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new A(b, s), [0, 0.5, 0]],
        [new A(M, s)],
        [new A(b, s), [0, -0.5, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new A(b, a), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
        [new A(M, a), [0, 0, 0], [Math.PI / 2, 0, 0]],
        [new A(b, a), [0, 0, -0.5], [-Math.PI / 2, 0, 0]]
      ],
      XY: [
        [new A(new ne(0.15, 0.15, 0.01), h), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new A(new ne(0.15, 0.15, 0.01), r), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new A(new ne(0.15, 0.15, 0.01), l), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new A(new ne(0.1, 0.1, 0.1), u.clone())]
      ]
    }, oe = {
      X: [
        [new A(new se(0.2, 0, 0.6, 4), e), [0.3, 0, 0], [0, 0, -Math.PI / 2]],
        [new A(new se(0.2, 0, 0.6, 4), e), [-0.3, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new A(new se(0.2, 0, 0.6, 4), e), [0, 0.3, 0]],
        [new A(new se(0.2, 0, 0.6, 4), e), [0, -0.3, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new A(new se(0.2, 0, 0.6, 4), e), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
        [new A(new se(0.2, 0, 0.6, 4), e), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]
      ],
      XY: [
        [new A(new ne(0.2, 0.2, 0.01), e), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new A(new ne(0.2, 0.2, 0.01), e), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new A(new ne(0.2, 0.2, 0.01), e), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new A(new ne(0.2, 0.2, 0.2), e), [0, 0, 0]]
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
    function V(H) {
      const le = new mt();
      for (const W in H)
        for (let ie = H[W].length; ie--; ) {
          const Q = H[W][ie][0].clone(), ve = H[W][ie][1], Le = H[W][ie][2], be = H[W][ie][3], Ve = H[W][ie][4];
          Q.name = W, Q.tag = Ve, ve && Q.position.set(ve[0], ve[1], ve[2]), Le && Q.rotation.set(Le[0], Le[1], Le[2]), be && Q.scale.set(be[0], be[1], be[2]), Q.updateMatrix();
          const Pe = Q.geometry.clone();
          Pe.applyMatrix4(Q.matrix), Q.geometry = Pe, Q.renderOrder = 1 / 0, Q.position.set(0, 0, 0), Q.rotation.set(0, 0, 0), Q.scale.set(1, 1, 1), le.add(Q);
        }
      return le;
    }
    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = V(T)), this.add(this.gizmo.rotate = V(G)), this.add(this.gizmo.scale = V(Y)), this.add(this.picker.translate = V(D)), this.add(this.picker.rotate = V(N)), this.add(this.picker.scale = V(oe)), this.add(this.helper.translate = V(F)), this.add(this.helper.rotate = V($)), this.add(this.helper.scale = V(U)), this.picker.translate.visible = !1, this.picker.rotate.visible = !1, this.picker.scale.visible = !1;
  }
  updateMatrixWorld(o) {
    const e = (this.mode === "scale" ? "local" : this.space) === "local" ? this.worldQuaternion : pt;
    this.gizmo.translate.visible = this.mode === "translate", this.gizmo.rotate.visible = this.mode === "rotate", this.gizmo.scale.visible = this.mode === "scale", this.helper.translate.visible = this.mode === "translate", this.helper.rotate.visible = this.mode === "rotate", this.helper.scale.visible = this.mode === "scale";
    let n = [];
    n = n.concat(this.picker[this.mode].children), n = n.concat(this.gizmo[this.mode].children), n = n.concat(this.helper[this.mode].children);
    for (let i = 0; i < n.length; i++) {
      const s = n[i];
      s.visible = !0, s.rotation.set(0, 0, 0), s.position.copy(this.worldPosition);
      let a;
      if (this.camera.isOrthographicCamera ? a = (this.camera.top - this.camera.bottom) / this.camera.zoom : a = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), s.scale.set(1, 1, 1).multiplyScalar(a * this.size / 4), s.tag === "helper") {
        s.visible = !1, s.name === "AXIS" ? (s.position.copy(this.worldPositionStart), s.visible = !!this.axis, this.axis === "X" && (B.setFromEuler(lt.set(0, 0, 0)), s.quaternion.copy(e).multiply(B), Math.abs(j.copy(Je).applyQuaternion(e).dot(this.eye)) > 0.9 && (s.visible = !1)), this.axis === "Y" && (B.setFromEuler(lt.set(0, 0, Math.PI / 2)), s.quaternion.copy(e).multiply(B), Math.abs(j.copy(De).applyQuaternion(e).dot(this.eye)) > 0.9 && (s.visible = !1)), this.axis === "Z" && (B.setFromEuler(lt.set(0, Math.PI / 2, 0)), s.quaternion.copy(e).multiply(B), Math.abs(j.copy(et).applyQuaternion(e).dot(this.eye)) > 0.9 && (s.visible = !1)), this.axis === "XYZE" && (B.setFromEuler(lt.set(0, Math.PI / 2, 0)), j.copy(this.rotationAxis), s.quaternion.setFromRotationMatrix(hn.lookAt(un, j, De)), s.quaternion.multiply(B), s.visible = this.dragging), this.axis === "E" && (s.visible = !1)) : s.name === "START" ? (s.position.copy(this.worldPositionStart), s.visible = this.dragging) : s.name === "END" ? (s.position.copy(this.worldPosition), s.visible = this.dragging) : s.name === "DELTA" ? (s.position.copy(this.worldPositionStart), s.quaternion.copy(this.worldQuaternionStart), ae.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), ae.applyQuaternion(this.worldQuaternionStart.clone().invert()), s.scale.copy(ae), s.visible = this.dragging) : (s.quaternion.copy(e), this.dragging ? s.position.copy(this.worldPositionStart) : s.position.copy(this.worldPosition), this.axis && (s.visible = this.axis.search(s.name) !== -1));
        continue;
      }
      s.quaternion.copy(e), this.mode === "translate" || this.mode === "scale" ? (s.name === "X" && Math.abs(j.copy(Je).applyQuaternion(e).dot(this.eye)) > 0.99 && (s.scale.set(1e-10, 1e-10, 1e-10), s.visible = !1), s.name === "Y" && Math.abs(j.copy(De).applyQuaternion(e).dot(this.eye)) > 0.99 && (s.scale.set(1e-10, 1e-10, 1e-10), s.visible = !1), s.name === "Z" && Math.abs(j.copy(et).applyQuaternion(e).dot(this.eye)) > 0.99 && (s.scale.set(1e-10, 1e-10, 1e-10), s.visible = !1), s.name === "XY" && Math.abs(j.copy(et).applyQuaternion(e).dot(this.eye)) < 0.2 && (s.scale.set(1e-10, 1e-10, 1e-10), s.visible = !1), s.name === "YZ" && Math.abs(j.copy(Je).applyQuaternion(e).dot(this.eye)) < 0.2 && (s.scale.set(1e-10, 1e-10, 1e-10), s.visible = !1), s.name === "XZ" && Math.abs(j.copy(De).applyQuaternion(e).dot(this.eye)) < 0.2 && (s.scale.set(1e-10, 1e-10, 1e-10), s.visible = !1)) : this.mode === "rotate" && (ut.copy(e), j.copy(this.eye).applyQuaternion(B.copy(e).invert()), s.name.search("E") !== -1 && s.quaternion.setFromRotationMatrix(hn.lookAt(this.eye, un, De)), s.name === "X" && (B.setFromAxisAngle(Je, Math.atan2(-j.y, j.z)), B.multiplyQuaternions(ut, B), s.quaternion.copy(B)), s.name === "Y" && (B.setFromAxisAngle(De, Math.atan2(j.x, j.z)), B.multiplyQuaternions(ut, B), s.quaternion.copy(B)), s.name === "Z" && (B.setFromAxisAngle(et, Math.atan2(j.y, j.x)), B.multiplyQuaternions(ut, B), s.quaternion.copy(B))), s.visible = s.visible && (s.name.indexOf("X") === -1 || this.showX), s.visible = s.visible && (s.name.indexOf("Y") === -1 || this.showY), s.visible = s.visible && (s.name.indexOf("Z") === -1 || this.showZ), s.visible = s.visible && (s.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ), s.material._color = s.material._color || s.material.color.clone(), s.material._opacity = s.material._opacity || s.material.opacity, s.material.color.copy(s.material._color), s.material.opacity = s.material._opacity, this.enabled && this.axis && (s.name === this.axis || this.axis.split("").some(function(r) {
        return s.name === r;
      })) && (s.material.color.setHex(16776960), s.material.opacity = 1);
    }
    super.updateMatrixWorld(o);
  }
}
class to extends A {
  constructor() {
    super(
      new vn(1e5, 1e5, 2, 2),
      new we({ visible: !1, wireframe: !0, side: Ln, transparent: !0, opacity: 0.1, toneMapped: !1 })
    ), this.isTransformControlsPlane = !0, this.type = "TransformControlsPlane";
  }
  updateMatrixWorld(o) {
    let t = this.space;
    switch (this.position.copy(this.worldPosition), this.mode === "scale" && (t = "local"), ht.copy(Je).applyQuaternion(t === "local" ? this.worldQuaternion : pt), $e.copy(De).applyQuaternion(t === "local" ? this.worldQuaternion : pt), Qe.copy(et).applyQuaternion(t === "local" ? this.worldQuaternion : pt), j.copy($e), this.mode) {
      case "translate":
      case "scale":
        switch (this.axis) {
          case "X":
            j.copy(this.eye).cross(ht), ge.copy(ht).cross(j);
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
            ge.copy(ht);
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
    ge.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (dn.lookAt(ae.set(0, 0, 0), ge, j), this.quaternion.setFromRotationMatrix(dn)), super.updateMatrixWorld(o);
  }
}
const no = {
  name: "TransformControls",
  render: () => null
}, so = /* @__PURE__ */ O({
  ...no,
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
  setup(c, { expose: o }) {
    const t = c, e = Kn(null), n = S("scene"), i = S("mesh", null), s = S("parent", void 0), a = S("camera"), r = S("canvas"), l = S("enableAllControls"), h = S("disableAllControls");
    function u() {
      e.value != null && (e.value.mode = t.mode, e.value.size = t.size, e.value.showX = t.showX, e.value.showY = t.showY, e.value.showZ = t.showZ, e.value.translationSnap = t.translationSnap, e.value.rotationSnap = t.rotationSnap);
    }
    let d = !1;
    const p = () => {
      !r.value && !a.value || d || (e.value = new Ks(a.value, r.value), R(t, "position", e.value), i ? e.value.attach(i) : s && e.value.attach(s), e.value.addEventListener("dragging-changed", function(g) {
        g.value ? h() : l();
      }), n.add(e.value), u(), d = !0);
    };
    return C(r, () => {
      p();
    }), u(), w(t, "mode", u), w(t, "size", u), w(t, "showX", u), w(t, "showY", u), w(t, "showZ", u), w(t, "rotationSnap", u), w(t, "translationSnap", u), _e(() => {
      n.remove(e.value), Ae(e.value);
    }), o({ three: e }), { props: t, three: e, scene: n, mesh: i, parent: s, camera: a, canvas: r, enableAllControls: l, disableAllControls: h, applyProps: u, get boundCamera() {
      return d;
    }, set boundCamera(g) {
      d = g;
    }, tryBindCamera: p };
  }
}), oo = /* @__PURE__ */ O({
  __name: "Group",
  props: {
    enableRaycasting: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  emits: ["click", "mousemove", "mouseenter", "mouseleave"],
  setup(c, { expose: o, emit: t }) {
    const e = c, n = new Fe();
    return Ue(n), R(e, "position", n), R(e, "rotation", n), R(e, "scale", n), Ds(n.children, e, t), k("parent", n), o({ three: n }), (i, s) => te(i.$slots, "default");
  }
}), io = /* @__PURE__ */ O({
  __name: "InstancedMesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    count: null,
    geometry: { default: null },
    material: { default: null },
    receiveShadow: { type: Boolean, default: !1 }
  },
  setup(c, { expose: o }) {
    const t = c, e = S("scene"), n = new X(), i = new we(), s = new Wn(n, i, t.count);
    s.castShadow = !0, s.receiveShadow = !0, Ue(s);
    function a() {
      s.castShadow = t.castShadow, s.receiveShadow = t.receiveShadow;
    }
    a(), w(t, "castShadow", a), w(t, "receiveShadow", a);
    const r = S("getGeometry"), l = S("getMaterial");
    return it(() => {
      if (t.geometry) {
        const h = r(t.geometry);
        s.geometry = h;
      }
      if (t.material) {
        const h = l(t.material);
        s.material = h;
      }
    }), _e(() => {
      e.remove(s), Ae(s);
    }), k("mesh", s), o({ three: s }), (h, u) => te(h.$slots, "default");
  }
}), ao = /* @__PURE__ */ O({
  __name: "Line",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: o }) {
    const t = c, e = S("scene"), n = new X(), i = new xe({ color: "black" }), s = new ye(n, i);
    return Ue(s), R(t, "position", s), R(t, "rotation", s), R(t, "scale", s), _e(() => {
      e.remove(s), Ae(s);
    }), k("mesh", s), o({ three: s }), (a, r) => te(a.$slots, "default");
  }
}), ro = /* @__PURE__ */ O({
  __name: "LineLoop",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: o }) {
    const t = c, e = S("scene"), n = new X(), i = new xe({ color: "black" }), s = new Pn(n, i);
    return Ue(s), R(t, "position", s), R(t, "rotation", s), R(t, "scale", s), _e(() => {
      e.remove(s), Ae(s);
    }), k("mesh", s), o({ three: s }), (a, r) => te(a.$slots, "default");
  }
}), co = /* @__PURE__ */ O({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: o }) {
    const t = c, e = S("scene"), n = new X(), i = new xe({ color: "black" }), s = new gt(n, i);
    return Ue(s), R(t, "position", s), R(t, "rotation", s), R(t, "scale", s), _e(() => {
      e.remove(s), Ae(s);
    }), k("mesh", s), o({ three: s }), (a, r) => te(a.$slots, "default");
  }
}), lo = /* @__PURE__ */ O({
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
  setup(c, { expose: o }) {
    const t = c, e = S("scene"), n = new X(), i = new we(), s = new A(n, i);
    s.castShadow = !0, s.receiveShadow = !0, Ue(s), R(t, "position", s), R(t, "rotation", s), R(t, "scale", s);
    function a() {
      s.castShadow = t.castShadow, s.receiveShadow = t.receiveShadow;
    }
    a(), w(t, "castShadow", a), w(t, "receiveShadow", a);
    const r = S("getGeometry"), l = S("getMaterial");
    return it(() => {
      if (t.geometry) {
        const h = r(t.geometry);
        s.geometry = h;
      }
      if (t.material) {
        const h = l(t.material);
        s.material = h;
      }
    }), _e(() => {
      e.remove(s), Ae(s);
    }), k("mesh", s), o({ three: s }), (h, u) => te(h.$slots, "default");
  }
}), uo = /* @__PURE__ */ O({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: o }) {
    const t = c, e = S("scene"), n = new X(), i = new Ge({ color: "red", sizeAttenuation: !1, size: 2 }), s = new tt(n, i);
    return Ue(s), R(t, "position", s), R(t, "rotation", s), R(t, "scale", s), _e(() => {
      e.remove(s), Ae(s);
    }), k("mesh", s), o({ three: s }), (a, r) => te(a.$slots, "default");
  }
});
class ho extends Rn {
  constructor(o) {
    super(o), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new yo(t);
    }), this.register(function(t) {
      return new So(t);
    }), this.register(function(t) {
      return new xo(t);
    }), this.register(function(t) {
      return new _o(t);
    }), this.register(function(t) {
      return new bo(t);
    }), this.register(function(t) {
      return new Mo(t);
    }), this.register(function(t) {
      return new Eo(t);
    }), this.register(function(t) {
      return new go(t);
    }), this.register(function(t) {
      return new To(t);
    }), this.register(function(t) {
      return new wo(t);
    }), this.register(function(t) {
      return new fo(t);
    }), this.register(function(t) {
      return new Ao(t);
    });
  }
  load(o, t, e, n) {
    const i = this;
    let s;
    this.resourcePath !== "" ? s = this.resourcePath : this.path !== "" ? s = this.path : s = je.extractUrlBase(o), this.manager.itemStart(o);
    const a = function(l) {
      n ? n(l) : console.error(l), i.manager.itemError(o), i.manager.itemEnd(o);
    }, r = new Ft(this.manager);
    r.setPath(this.path), r.setResponseType("arraybuffer"), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(o, function(l) {
      try {
        i.parse(l, s, function(h) {
          t(h), i.manager.itemEnd(o);
        }, a);
      } catch (h) {
        a(h);
      }
    }, e, a);
  }
  setDRACOLoader(o) {
    return this.dracoLoader = o, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(o) {
    return this.ktx2Loader = o, this;
  }
  setMeshoptDecoder(o) {
    return this.meshoptDecoder = o, this;
  }
  register(o) {
    return this.pluginCallbacks.indexOf(o) === -1 && this.pluginCallbacks.push(o), this;
  }
  unregister(o) {
    return this.pluginCallbacks.indexOf(o) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(o), 1), this;
  }
  parse(o, t, e, n) {
    let i;
    const s = {}, a = {};
    if (typeof o == "string")
      i = o;
    else if (je.decodeText(new Uint8Array(o, 0, 4)) === Gn) {
      try {
        s[I.KHR_BINARY_GLTF] = new vo(o);
      } catch (u) {
        n && n(u);
        return;
      }
      i = s[I.KHR_BINARY_GLTF].content;
    } else
      i = je.decodeText(new Uint8Array(o));
    const r = JSON.parse(i);
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new Ho(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](l);
      a[u.name] = u, s[u.name] = !0;
    }
    if (r.extensionsUsed)
      for (let h = 0; h < r.extensionsUsed.length; ++h) {
        const u = r.extensionsUsed[h], d = r.extensionsRequired || [];
        switch (u) {
          case I.KHR_MATERIALS_UNLIT:
            s[u] = new mo();
            break;
          case I.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            s[u] = new Ro();
            break;
          case I.KHR_DRACO_MESH_COMPRESSION:
            s[u] = new Lo(r, this.dracoLoader);
            break;
          case I.KHR_TEXTURE_TRANSFORM:
            s[u] = new Po();
            break;
          case I.KHR_MESH_QUANTIZATION:
            s[u] = new Io();
            break;
          default:
            d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(s), l.setPlugins(a), l.parse(e, n);
  }
  parseAsync(o, t) {
    const e = this;
    return new Promise(function(n, i) {
      e.parse(o, t, n, i);
    });
  }
}
function po() {
  let c = {};
  return {
    get: function(o) {
      return c[o];
    },
    add: function(o, t) {
      c[o] = t;
    },
    remove: function(o) {
      delete c[o];
    },
    removeAll: function() {
      c = {};
    }
  };
}
const I = {
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
class fo {
  constructor(o) {
    this.parser = o, this.name = I.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const o = this.parser, t = this.parser.json.nodes || [];
    for (let e = 0, n = t.length; e < n; e++) {
      const i = t[e];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && o._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(o) {
    const t = this.parser, e = "light:" + o;
    let n = t.cache.get(e);
    if (n)
      return n;
    const i = t.json, r = ((i.extensions && i.extensions[this.name] || {}).lights || [])[o];
    let l;
    const h = new K(16777215);
    r.color !== void 0 && h.fromArray(r.color);
    const u = r.range !== void 0 ? r.range : 0;
    switch (r.type) {
      case "directional":
        l = new es(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new In(h), l.distance = u;
        break;
      case "spot":
        l = new Jn(h), l.distance = u, r.spot = r.spot || {}, r.spot.innerConeAngle = r.spot.innerConeAngle !== void 0 ? r.spot.innerConeAngle : 0, r.spot.outerConeAngle = r.spot.outerConeAngle !== void 0 ? r.spot.outerConeAngle : Math.PI / 4, l.angle = r.spot.outerConeAngle, l.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + r.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, r.intensity !== void 0 && (l.intensity = r.intensity), l.name = t.createUniqueName(r.name || "light_" + o), n = Promise.resolve(l), t.cache.add(e, n), n;
  }
  createNodeAttachment(o) {
    const t = this, e = this.parser, i = e.json.nodes[o], a = (i.extensions && i.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(r) {
      return e._getNodeRef(t.cache, a, r);
    });
  }
}
class mo {
  constructor() {
    this.name = I.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return we;
  }
  extendParams(o, t, e) {
    const n = [];
    o.color = new K(1, 1, 1), o.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const s = i.baseColorFactor;
        o.color.fromArray(s), o.opacity = s[3];
      }
      i.baseColorTexture !== void 0 && n.push(e.assignTexture(o, "map", i.baseColorTexture, He));
    }
    return Promise.all(n);
  }
}
class go {
  constructor(o) {
    this.parser = o, this.name = I.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(o, t) {
    const n = this.parser.json.materials[o];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class yo {
  constructor(o) {
    this.parser = o, this.name = I.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(o) {
    const e = this.parser.json.materials[o];
    return !e.extensions || !e.extensions[this.name] ? null : ze;
  }
  extendMaterialParams(o, t) {
    const e = this.parser, n = e.json.materials[o];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], s = n.extensions[this.name];
    if (s.clearcoatFactor !== void 0 && (t.clearcoat = s.clearcoatFactor), s.clearcoatTexture !== void 0 && i.push(e.assignTexture(t, "clearcoatMap", s.clearcoatTexture)), s.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = s.clearcoatRoughnessFactor), s.clearcoatRoughnessTexture !== void 0 && i.push(e.assignTexture(t, "clearcoatRoughnessMap", s.clearcoatRoughnessTexture)), s.clearcoatNormalTexture !== void 0 && (i.push(e.assignTexture(t, "clearcoatNormalMap", s.clearcoatNormalTexture)), s.clearcoatNormalTexture.scale !== void 0)) {
      const a = s.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new z(a, a);
    }
    return Promise.all(i);
  }
}
class wo {
  constructor(o) {
    this.parser = o, this.name = I.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(o) {
    const e = this.parser.json.materials[o];
    return !e.extensions || !e.extensions[this.name] ? null : ze;
  }
  extendMaterialParams(o, t) {
    const e = this.parser, n = e.json.materials[o];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], s = n.extensions[this.name];
    return s.iridescenceFactor !== void 0 && (t.iridescence = s.iridescenceFactor), s.iridescenceTexture !== void 0 && i.push(e.assignTexture(t, "iridescenceMap", s.iridescenceTexture)), s.iridescenceIor !== void 0 && (t.iridescenceIOR = s.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), s.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = s.iridescenceThicknessMinimum), s.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = s.iridescenceThicknessMaximum), s.iridescenceThicknessTexture !== void 0 && i.push(e.assignTexture(t, "iridescenceThicknessMap", s.iridescenceThicknessTexture)), Promise.all(i);
  }
}
class _o {
  constructor(o) {
    this.parser = o, this.name = I.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(o) {
    const e = this.parser.json.materials[o];
    return !e.extensions || !e.extensions[this.name] ? null : ze;
  }
  extendMaterialParams(o, t) {
    const e = this.parser, n = e.json.materials[o];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new K(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const s = n.extensions[this.name];
    return s.sheenColorFactor !== void 0 && t.sheenColor.fromArray(s.sheenColorFactor), s.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = s.sheenRoughnessFactor), s.sheenColorTexture !== void 0 && i.push(e.assignTexture(t, "sheenColorMap", s.sheenColorTexture, He)), s.sheenRoughnessTexture !== void 0 && i.push(e.assignTexture(t, "sheenRoughnessMap", s.sheenRoughnessTexture)), Promise.all(i);
  }
}
class bo {
  constructor(o) {
    this.parser = o, this.name = I.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(o) {
    const e = this.parser.json.materials[o];
    return !e.extensions || !e.extensions[this.name] ? null : ze;
  }
  extendMaterialParams(o, t) {
    const e = this.parser, n = e.json.materials[o];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], s = n.extensions[this.name];
    return s.transmissionFactor !== void 0 && (t.transmission = s.transmissionFactor), s.transmissionTexture !== void 0 && i.push(e.assignTexture(t, "transmissionMap", s.transmissionTexture)), Promise.all(i);
  }
}
class Mo {
  constructor(o) {
    this.parser = o, this.name = I.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(o) {
    const e = this.parser.json.materials[o];
    return !e.extensions || !e.extensions[this.name] ? null : ze;
  }
  extendMaterialParams(o, t) {
    const e = this.parser, n = e.json.materials[o];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], s = n.extensions[this.name];
    t.thickness = s.thicknessFactor !== void 0 ? s.thicknessFactor : 0, s.thicknessTexture !== void 0 && i.push(e.assignTexture(t, "thicknessMap", s.thicknessTexture)), t.attenuationDistance = s.attenuationDistance || 0;
    const a = s.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new K(a[0], a[1], a[2]), Promise.all(i);
  }
}
class Eo {
  constructor(o) {
    this.parser = o, this.name = I.KHR_MATERIALS_IOR;
  }
  getMaterialType(o) {
    const e = this.parser.json.materials[o];
    return !e.extensions || !e.extensions[this.name] ? null : ze;
  }
  extendMaterialParams(o, t) {
    const n = this.parser.json.materials[o];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = n.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class To {
  constructor(o) {
    this.parser = o, this.name = I.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(o) {
    const e = this.parser.json.materials[o];
    return !e.extensions || !e.extensions[this.name] ? null : ze;
  }
  extendMaterialParams(o, t) {
    const e = this.parser, n = e.json.materials[o];
    if (!n.extensions || !n.extensions[this.name])
      return Promise.resolve();
    const i = [], s = n.extensions[this.name];
    t.specularIntensity = s.specularFactor !== void 0 ? s.specularFactor : 1, s.specularTexture !== void 0 && i.push(e.assignTexture(t, "specularIntensityMap", s.specularTexture));
    const a = s.specularColorFactor || [1, 1, 1];
    return t.specularColor = new K(a[0], a[1], a[2]), s.specularColorTexture !== void 0 && i.push(e.assignTexture(t, "specularColorMap", s.specularColorTexture, He)), Promise.all(i);
  }
}
class So {
  constructor(o) {
    this.parser = o, this.name = I.KHR_TEXTURE_BASISU;
  }
  loadTexture(o) {
    const t = this.parser, e = t.json, n = e.textures[o];
    if (!n.extensions || !n.extensions[this.name])
      return null;
    const i = n.extensions[this.name], s = t.options.ktx2Loader;
    if (!s) {
      if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(o, i.source, s);
  }
}
class xo {
  constructor(o) {
    this.parser = o, this.name = I.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(o) {
    const t = this.name, e = this.parser, n = e.json, i = n.textures[o];
    if (!i.extensions || !i.extensions[t])
      return null;
    const s = i.extensions[t], a = n.images[s.source];
    let r = e.textureLoader;
    if (a.uri) {
      const l = e.options.manager.getHandler(a.uri);
      l !== null && (r = l);
    }
    return this.detectSupport().then(function(l) {
      if (l)
        return e.loadTextureImage(o, s.source, r);
      if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return e.loadTexture(o);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(o) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        o(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Ao {
  constructor(o) {
    this.name = I.EXT_MESHOPT_COMPRESSION, this.parser = o;
  }
  loadBufferView(o) {
    const t = this.parser.json, e = t.bufferViews[o];
    if (e.extensions && e.extensions[this.name]) {
      const n = e.extensions[this.name], i = this.parser.getDependency("buffer", n.buffer), s = this.parser.options.meshoptDecoder;
      if (!s || !s.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return Promise.all([i, s.ready]).then(function(a) {
        const r = n.byteOffset || 0, l = n.byteLength || 0, h = n.count, u = n.byteStride, d = new ArrayBuffer(h * u), p = new Uint8Array(a[0], r, l);
        return s.decodeGltfBuffer(new Uint8Array(d), h, u, p, n.mode, n.filter), d;
      });
    } else
      return null;
  }
}
const Gn = "glTF", qe = 12, pn = { JSON: 1313821514, BIN: 5130562 };
class vo {
  constructor(o) {
    this.name = I.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(o, 0, qe);
    if (this.header = {
      magic: je.decodeText(new Uint8Array(o.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Gn)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const e = this.header.length - qe, n = new DataView(o, qe);
    let i = 0;
    for (; i < e; ) {
      const s = n.getUint32(i, !0);
      i += 4;
      const a = n.getUint32(i, !0);
      if (i += 4, a === pn.JSON) {
        const r = new Uint8Array(o, qe + i, s);
        this.content = je.decodeText(r);
      } else if (a === pn.BIN) {
        const r = qe + i;
        this.body = o.slice(r, r + s);
      }
      i += s;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Lo {
  constructor(o, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = I.KHR_DRACO_MESH_COMPRESSION, this.json = o, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(o, t) {
    const e = this.json, n = this.dracoLoader, i = o.extensions[this.name].bufferView, s = o.extensions[this.name].attributes, a = {}, r = {}, l = {};
    for (const h in s) {
      const u = kt[h] || h.toLowerCase();
      a[u] = s[h];
    }
    for (const h in o.attributes) {
      const u = kt[h] || h.toLowerCase();
      if (s[h] !== void 0) {
        const d = e.accessors[o.attributes[h]], p = ot[d.componentType];
        l[u] = p, r[u] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", i).then(function(h) {
      return new Promise(function(u) {
        n.decodeDracoFile(h, function(d) {
          for (const p in d.attributes) {
            const g = d.attributes[p], _ = r[p];
            _ !== void 0 && (g.normalized = _);
          }
          u(d);
        }, a, l);
      });
    });
  }
}
class Po {
  constructor() {
    this.name = I.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(o, t) {
    return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (o = o.clone(), t.offset !== void 0 && o.offset.fromArray(t.offset), t.rotation !== void 0 && (o.rotation = t.rotation), t.scale !== void 0 && o.repeat.fromArray(t.scale), o.needsUpdate = !0), o;
  }
}
class Dt extends jt {
  constructor(o) {
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
`), s = [
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
      specular: { value: new K().setHex(16777215) },
      glossiness: { value: 1 },
      specularMap: { value: null },
      glossinessMap: { value: null }
    };
    this._extraUniforms = a, this.onBeforeCompile = function(r) {
      for (const l in a)
        r.uniforms[l] = a[l];
      r.fragmentShader = r.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", e).replace("#include <roughnessmap_fragment>", n).replace("#include <metalnessmap_fragment>", i).replace("#include <lights_physical_fragment>", s);
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
    }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(o);
  }
  copy(o) {
    return super.copy(o), this.specularMap = o.specularMap, this.specular.copy(o.specular), this.glossinessMap = o.glossinessMap, this.glossiness = o.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this;
  }
}
class Ro {
  constructor() {
    this.name = I.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = [
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
    return Dt;
  }
  extendParams(o, t, e) {
    const n = t.extensions[this.name];
    o.color = new K(1, 1, 1), o.opacity = 1;
    const i = [];
    if (Array.isArray(n.diffuseFactor)) {
      const s = n.diffuseFactor;
      o.color.fromArray(s), o.opacity = s[3];
    }
    if (n.diffuseTexture !== void 0 && i.push(e.assignTexture(o, "map", n.diffuseTexture, He)), o.emissive = new K(0, 0, 0), o.glossiness = n.glossinessFactor !== void 0 ? n.glossinessFactor : 1, o.specular = new K(1, 1, 1), Array.isArray(n.specularFactor) && o.specular.fromArray(n.specularFactor), n.specularGlossinessTexture !== void 0) {
      const s = n.specularGlossinessTexture;
      i.push(e.assignTexture(o, "glossinessMap", s)), i.push(e.assignTexture(o, "specularMap", s, He));
    }
    return Promise.all(i);
  }
  createMaterial(o) {
    const t = new Dt(o);
    return t.fog = !0, t.color = o.color, t.map = o.map === void 0 ? null : o.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = o.aoMap === void 0 ? null : o.aoMap, t.aoMapIntensity = 1, t.emissive = o.emissive, t.emissiveIntensity = o.emissiveIntensity === void 0 ? 1 : o.emissiveIntensity, t.emissiveMap = o.emissiveMap === void 0 ? null : o.emissiveMap, t.bumpMap = o.bumpMap === void 0 ? null : o.bumpMap, t.bumpScale = 1, t.normalMap = o.normalMap === void 0 ? null : o.normalMap, t.normalMapType = ts, o.normalScale && (t.normalScale = o.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = o.specularMap === void 0 ? null : o.specularMap, t.specular = o.specular, t.glossinessMap = o.glossinessMap === void 0 ? null : o.glossinessMap, t.glossiness = o.glossiness, t.alphaMap = null, t.envMap = o.envMap === void 0 ? null : o.envMap, t.envMapIntensity = 1, t;
  }
}
class Io {
  constructor() {
    this.name = I.KHR_MESH_QUANTIZATION;
  }
}
class Ht extends ns {
  constructor(o, t, e, n) {
    super(o, t, e, n);
  }
  copySampleValue_(o) {
    const t = this.resultBuffer, e = this.sampleValues, n = this.valueSize, i = o * n * 3 + n;
    for (let s = 0; s !== n; s++)
      t[s] = e[i + s];
    return t;
  }
}
Ht.prototype.interpolate_ = function(c, o, t, e) {
  const n = this.resultBuffer, i = this.sampleValues, s = this.valueSize, a = s * 2, r = s * 3, l = e - o, h = (t - o) / l, u = h * h, d = u * h, p = c * r, g = p - r, _ = -2 * d + 3 * u, b = d - u, m = 1 - _, M = b - u + h;
  for (let E = 0; E !== s; E++) {
    const v = i[g + E + s], T = i[g + E + a] * l, D = i[p + E + s], F = i[p + E] * l;
    n[E] = m * v + M * T + _ * D + b * F;
  }
  return n;
};
const Oo = new re();
class Co extends Ht {
  interpolate_(o, t, e, n) {
    const i = super.interpolate_(o, t, e, n);
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
}, fn = {
  9728: ds,
  9729: Cn,
  9984: ps,
  9985: fs,
  9986: ms,
  9987: Nn
}, mn = {
  33071: Ct,
  33648: gs,
  10497: Ot
}, gn = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, kt = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Ie = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, No = {
  CUBICSPLINE: void 0,
  LINEAR: Dn,
  STEP: ys
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
function We(c, o, t) {
  for (const e in t.extensions)
    c[e] === void 0 && (o.userData.gltfExtensions = o.userData.gltfExtensions || {}, o.userData.gltfExtensions[e] = t.extensions[e]);
}
function ke(c, o) {
  o.extras !== void 0 && (typeof o.extras == "object" ? Object.assign(c.userData, o.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + o.extras));
}
function ko(c, o, t) {
  let e = !1, n = !1, i = !1;
  for (let l = 0, h = o.length; l < h; l++) {
    const u = o[l];
    if (u.POSITION !== void 0 && (e = !0), u.NORMAL !== void 0 && (n = !0), u.COLOR_0 !== void 0 && (i = !0), e && n && i)
      break;
  }
  if (!e && !n && !i)
    return Promise.resolve(c);
  const s = [], a = [], r = [];
  for (let l = 0, h = o.length; l < h; l++) {
    const u = o[l];
    if (e) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : c.attributes.position;
      s.push(d);
    }
    if (n) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : c.attributes.normal;
      a.push(d);
    }
    if (i) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : c.attributes.color;
      r.push(d);
    }
  }
  return Promise.all([
    Promise.all(s),
    Promise.all(a),
    Promise.all(r)
  ]).then(function(l) {
    const h = l[0], u = l[1], d = l[2];
    return e && (c.morphAttributes.position = h), n && (c.morphAttributes.normal = u), i && (c.morphAttributes.color = d), c.morphTargetsRelative = !0, c;
  });
}
function Go(c, o) {
  if (c.updateMorphTargets(), o.weights !== void 0)
    for (let t = 0, e = o.weights.length; t < e; t++)
      c.morphTargetInfluences[t] = o.weights[t];
  if (o.extras && Array.isArray(o.extras.targetNames)) {
    const t = o.extras.targetNames;
    if (c.morphTargetInfluences.length === t.length) {
      c.morphTargetDictionary = {};
      for (let e = 0, n = t.length; e < n; e++)
        c.morphTargetDictionary[t[e]] = e;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Fo(c) {
  const o = c.extensions && c.extensions[I.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return o ? t = "draco:" + o.bufferView + ":" + o.indices + ":" + yn(o.attributes) : t = c.indices + ":" + yn(c.attributes) + ":" + c.mode, t;
}
function yn(c) {
  let o = "";
  const t = Object.keys(c).sort();
  for (let e = 0, n = t.length; e < n; e++)
    o += t[e] + ":" + c[t[e]] + ";";
  return o;
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
function jo(c) {
  return c.search(/\.jpe?g($|\?)/i) > 0 || c.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : c.search(/\.webp($|\?)/i) > 0 || c.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
class Ho {
  constructor(o = {}, t = {}) {
    this.json = o, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new po(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    const e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, n = navigator.userAgent.indexOf("Firefox") > -1, i = n ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
    typeof createImageBitmap > "u" || e || n && i < 98 ? this.textureLoader = new On(this.options.manager) : this.textureLoader = new ss(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Ft(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(o) {
    this.extensions = o;
  }
  setPlugins(o) {
    this.plugins = o;
  }
  parse(o, t) {
    const e = this, n = this.json, i = this.extensions;
    this.cache.removeAll(), this._invokeAll(function(s) {
      return s._markDefs && s._markDefs();
    }), Promise.all(this._invokeAll(function(s) {
      return s.beforeRoot && s.beforeRoot();
    })).then(function() {
      return Promise.all([
        e.getDependencies("scene"),
        e.getDependencies("animation"),
        e.getDependencies("camera")
      ]);
    }).then(function(s) {
      const a = {
        scene: s[0][n.scene || 0],
        scenes: s[0],
        animations: s[1],
        cameras: s[2],
        asset: n.asset,
        parser: e,
        userData: {}
      };
      We(i, a, n), ke(a, n), Promise.all(e._invokeAll(function(r) {
        return r.afterRoot && r.afterRoot(a);
      })).then(function() {
        o(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const o = this.json.nodes || [], t = this.json.skins || [], e = this.json.meshes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n].joints;
      for (let a = 0, r = s.length; a < r; a++)
        o[s[a]].isBone = !0;
    }
    for (let n = 0, i = o.length; n < i; n++) {
      const s = o[n];
      s.mesh !== void 0 && (this._addNodeRef(this.meshCache, s.mesh), s.skin !== void 0 && (e[s.mesh].isSkinnedMesh = !0)), s.camera !== void 0 && this._addNodeRef(this.cameraCache, s.camera);
    }
  }
  _addNodeRef(o, t) {
    t !== void 0 && (o.refs[t] === void 0 && (o.refs[t] = o.uses[t] = 0), o.refs[t]++);
  }
  _getNodeRef(o, t, e) {
    if (o.refs[t] <= 1)
      return e;
    const n = e.clone(), i = (s, a) => {
      const r = this.associations.get(s);
      r != null && this.associations.set(a, r);
      for (const [l, h] of s.children.entries())
        i(h, a.children[l]);
    };
    return i(e, n), n.name += "_instance_" + o.uses[t]++, n;
  }
  _invokeOne(o) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let e = 0; e < t.length; e++) {
      const n = o(t[e]);
      if (n)
        return n;
    }
    return null;
  }
  _invokeAll(o) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const e = [];
    for (let n = 0; n < t.length; n++) {
      const i = o(t[n]);
      i && e.push(i);
    }
    return e;
  }
  getDependency(o, t) {
    const e = o + ":" + t;
    let n = this.cache.get(e);
    if (!n) {
      switch (o) {
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
          throw new Error("Unknown type: " + o);
      }
      this.cache.add(e, n);
    }
    return n;
  }
  getDependencies(o) {
    let t = this.cache.get(o);
    if (!t) {
      const e = this, n = this.json[o + (o === "mesh" ? "es" : "s")] || [];
      t = Promise.all(n.map(function(i, s) {
        return e.getDependency(o, s);
      })), this.cache.add(o, t);
    }
    return t;
  }
  loadBuffer(o) {
    const t = this.json.buffers[o], e = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && o === 0)
      return Promise.resolve(this.extensions[I.KHR_BINARY_GLTF].body);
    const n = this.options;
    return new Promise(function(i, s) {
      e.load(je.resolveURL(t.uri, n.path), i, void 0, function() {
        s(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(o) {
    const t = this.json.bufferViews[o];
    return this.getDependency("buffer", t.buffer).then(function(e) {
      const n = t.byteLength || 0, i = t.byteOffset || 0;
      return e.slice(i, i + n);
    });
  }
  loadAccessor(o) {
    const t = this, e = this.json, n = this.json.accessors[o];
    if (n.bufferView === void 0 && n.sparse === void 0)
      return Promise.resolve(null);
    const i = [];
    return n.bufferView !== void 0 ? i.push(this.getDependency("bufferView", n.bufferView)) : i.push(null), n.sparse !== void 0 && (i.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(i).then(function(s) {
      const a = s[0], r = gn[n.type], l = ot[n.componentType], h = l.BYTES_PER_ELEMENT, u = h * r, d = n.byteOffset || 0, p = n.bufferView !== void 0 ? e.bufferViews[n.bufferView].byteStride : void 0, g = n.normalized === !0;
      let _, b;
      if (p && p !== u) {
        const m = Math.floor(d / p), M = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + m + ":" + n.count;
        let E = t.cache.get(M);
        E || (_ = new l(a, m * p, n.count * p / h), E = new os(_, p / h), t.cache.add(M, E)), b = new is(E, r, d % p / h, g);
      } else
        a === null ? _ = new l(n.count * r) : _ = new l(a, d, n.count * r), b = new nt(_, r, g);
      if (n.sparse !== void 0) {
        const m = gn.SCALAR, M = ot[n.sparse.indices.componentType], E = n.sparse.indices.byteOffset || 0, v = n.sparse.values.byteOffset || 0, T = new M(s[1], E, n.sparse.count * m), D = new l(s[2], v, n.sparse.count * r);
        a !== null && (b = new nt(b.array.slice(), b.itemSize, b.normalized));
        for (let F = 0, G = T.length; F < G; F++) {
          const $ = T[F];
          if (b.setX($, D[F * r]), r >= 2 && b.setY($, D[F * r + 1]), r >= 3 && b.setZ($, D[F * r + 2]), r >= 4 && b.setW($, D[F * r + 3]), r >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return b;
    });
  }
  loadTexture(o) {
    const t = this.json, e = this.options, i = t.textures[o].source, s = t.images[i];
    let a = this.textureLoader;
    if (s.uri) {
      const r = e.manager.getHandler(s.uri);
      r !== null && (a = r);
    }
    return this.loadTextureImage(o, i, a);
  }
  loadTextureImage(o, t, e) {
    const n = this, i = this.json, s = i.textures[o], a = i.images[t], r = (a.uri || a.bufferView) + ":" + s.sampler;
    if (this.textureCache[r])
      return this.textureCache[r];
    const l = this.loadImageSource(t, e).then(function(h) {
      h.flipY = !1, s.name && (h.name = s.name);
      const d = (i.samplers || {})[s.sampler] || {};
      return h.magFilter = fn[d.magFilter] || Cn, h.minFilter = fn[d.minFilter] || Nn, h.wrapS = mn[d.wrapS] || Ot, h.wrapT = mn[d.wrapT] || Ot, n.associations.set(h, { textures: o }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[r] = l, l;
  }
  loadImageSource(o, t) {
    const e = this, n = this.json, i = this.options;
    if (this.sourceCache[o] !== void 0)
      return this.sourceCache[o].then((u) => u.clone());
    const s = n.images[o], a = self.URL || self.webkitURL;
    let r = s.uri || "", l = !1;
    if (s.bufferView !== void 0)
      r = e.getDependency("bufferView", s.bufferView).then(function(u) {
        l = !0;
        const d = new Blob([u], { type: s.mimeType });
        return r = a.createObjectURL(d), r;
      });
    else if (s.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + o + " is missing URI and bufferView");
    const h = Promise.resolve(r).then(function(u) {
      return new Promise(function(d, p) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(_) {
          const b = new Nt(_);
          b.needsUpdate = !0, d(b);
        }), t.load(je.resolveURL(u, i.path), g, void 0, p);
      });
    }).then(function(u) {
      return l === !0 && a.revokeObjectURL(r), u.userData.mimeType = s.mimeType || jo(s.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", r), u;
    });
    return this.sourceCache[o] = h, h;
  }
  assignTexture(o, t, e, n) {
    const i = this;
    return this.getDependency("texture", e.index).then(function(s) {
      if (e.texCoord !== void 0 && e.texCoord != 0 && !(t === "aoMap" && e.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + e.texCoord + " for texture " + t + " not yet supported."), i.extensions[I.KHR_TEXTURE_TRANSFORM]) {
        const a = e.extensions !== void 0 ? e.extensions[I.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const r = i.associations.get(s);
          s = i.extensions[I.KHR_TEXTURE_TRANSFORM].extendTexture(s, a), i.associations.set(s, r);
        }
      }
      return n !== void 0 && (s.encoding = n), o[t] = s, s;
    });
  }
  assignFinalMaterial(o) {
    const t = o.geometry;
    let e = o.material;
    const n = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, s = t.attributes.normal === void 0;
    if (o.isPoints) {
      const a = "PointsMaterial:" + e.uuid;
      let r = this.cache.get(a);
      r || (r = new Ge(), st.prototype.copy.call(r, e), r.color.copy(e.color), r.map = e.map, r.sizeAttenuation = !1, this.cache.add(a, r)), e = r;
    } else if (o.isLine) {
      const a = "LineBasicMaterial:" + e.uuid;
      let r = this.cache.get(a);
      r || (r = new xe(), st.prototype.copy.call(r, e), r.color.copy(e.color), this.cache.add(a, r)), e = r;
    }
    if (n || i || s) {
      let a = "ClonedMaterial:" + e.uuid + ":";
      e.isGLTFSpecularGlossinessMaterial && (a += "specular-glossiness:"), n && (a += "derivative-tangents:"), i && (a += "vertex-colors:"), s && (a += "flat-shading:");
      let r = this.cache.get(a);
      r || (r = e.clone(), i && (r.vertexColors = !0), s && (r.flatShading = !0), n && (r.normalScale && (r.normalScale.y *= -1), r.clearcoatNormalScale && (r.clearcoatNormalScale.y *= -1)), this.cache.add(a, r), this.associations.set(r, this.associations.get(e))), e = r;
    }
    e.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), o.material = e;
  }
  getMaterialType() {
    return jt;
  }
  loadMaterial(o) {
    const t = this, e = this.json, n = this.extensions, i = e.materials[o];
    let s;
    const a = {}, r = i.extensions || {}, l = [];
    if (r[I.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      const u = n[I.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      s = u.getMaterialType(), l.push(u.extendParams(a, i, t));
    } else if (r[I.KHR_MATERIALS_UNLIT]) {
      const u = n[I.KHR_MATERIALS_UNLIT];
      s = u.getMaterialType(), l.push(u.extendParams(a, i, t));
    } else {
      const u = i.pbrMetallicRoughness || {};
      if (a.color = new K(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        a.color.fromArray(d), a.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", u.baseColorTexture, He)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), s = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(o);
      }), l.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(o, a);
      })));
    }
    i.doubleSided === !0 && (a.side = Ln);
    const h = i.alphaMode || Pt.OPAQUE;
    if (h === Pt.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, h === Pt.MASK && (a.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && s !== we && (l.push(t.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new z(1, 1), i.normalTexture.scale !== void 0)) {
      const u = i.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    return i.occlusionTexture !== void 0 && s !== we && (l.push(t.assignTexture(a, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && s !== we && (a.emissive = new K().fromArray(i.emissiveFactor)), i.emissiveTexture !== void 0 && s !== we && l.push(t.assignTexture(a, "emissiveMap", i.emissiveTexture, He)), Promise.all(l).then(function() {
      let u;
      return s === Dt ? u = n[I.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a) : u = new s(a), i.name && (u.name = i.name), ke(u, i), t.associations.set(u, { materials: o }), i.extensions && We(n, u, i), u;
    });
  }
  createUniqueName(o) {
    const t = as.sanitizeNodeName(o || "");
    let e = t;
    for (let n = 1; this.nodeNamesUsed[e]; ++n)
      e = t + "_" + n;
    return this.nodeNamesUsed[e] = !0, e;
  }
  loadGeometries(o) {
    const t = this, e = this.extensions, n = this.primitiveCache;
    function i(a) {
      return e[I.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(r) {
        return wn(r, a, t);
      });
    }
    const s = [];
    for (let a = 0, r = o.length; a < r; a++) {
      const l = o[a], h = Fo(l), u = n[h];
      if (u)
        s.push(u.promise);
      else {
        let d;
        l.extensions && l.extensions[I.KHR_DRACO_MESH_COMPRESSION] ? d = i(l) : d = wn(new X(), l, t), n[h] = { primitive: l, promise: d }, s.push(d);
      }
    }
    return Promise.all(s);
  }
  loadMesh(o) {
    const t = this, e = this.json, n = this.extensions, i = e.meshes[o], s = i.primitives, a = [];
    for (let r = 0, l = s.length; r < l; r++) {
      const h = s[r].material === void 0 ? Do(this.cache) : this.getDependency("material", s[r].material);
      a.push(h);
    }
    return a.push(t.loadGeometries(s)), Promise.all(a).then(function(r) {
      const l = r.slice(0, r.length - 1), h = r[r.length - 1], u = [];
      for (let p = 0, g = h.length; p < g; p++) {
        const _ = h[p], b = s[p];
        let m;
        const M = l[p];
        if (b.mode === Te.TRIANGLES || b.mode === Te.TRIANGLE_STRIP || b.mode === Te.TRIANGLE_FAN || b.mode === void 0)
          m = i.isSkinnedMesh === !0 ? new rs(_, M) : new A(_, M), m.isSkinnedMesh === !0 && !m.geometry.attributes.skinWeight.normalized && m.normalizeSkinWeights(), b.mode === Te.TRIANGLE_STRIP ? m.geometry = _n(m.geometry, ws) : b.mode === Te.TRIANGLE_FAN && (m.geometry = _n(m.geometry, kn));
        else if (b.mode === Te.LINES)
          m = new gt(_, M);
        else if (b.mode === Te.LINE_STRIP)
          m = new ye(_, M);
        else if (b.mode === Te.LINE_LOOP)
          m = new Pn(_, M);
        else if (b.mode === Te.POINTS)
          m = new tt(_, M);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + b.mode);
        Object.keys(m.geometry.morphAttributes).length > 0 && Go(m, i), m.name = t.createUniqueName(i.name || "mesh_" + o), ke(m, i), b.extensions && We(n, m, b), t.assignFinalMaterial(m), u.push(m);
      }
      for (let p = 0, g = u.length; p < g; p++)
        t.associations.set(u[p], {
          meshes: o,
          primitives: p
        });
      if (u.length === 1)
        return u[0];
      const d = new Fe();
      t.associations.set(d, { meshes: o });
      for (let p = 0, g = u.length; p < g; p++)
        d.add(u[p]);
      return d;
    });
  }
  loadCamera(o) {
    let t;
    const e = this.json.cameras[o], n = e[e.type];
    if (!n) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return e.type === "perspective" ? t = new Tn(cs.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : e.type === "orthographic" && (t = new Sn(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), e.name && (t.name = this.createUniqueName(e.name)), ke(t, e), Promise.resolve(t);
  }
  loadSkin(o) {
    const t = this.json.skins[o], e = { joints: t.joints };
    return t.inverseBindMatrices === void 0 ? Promise.resolve(e) : this.getDependency("accessor", t.inverseBindMatrices).then(function(n) {
      return e.inverseBindMatrices = n, e;
    });
  }
  loadAnimation(o) {
    const e = this.json.animations[o], n = [], i = [], s = [], a = [], r = [];
    for (let l = 0, h = e.channels.length; l < h; l++) {
      const u = e.channels[l], d = e.samplers[u.sampler], p = u.target, g = p.node !== void 0 ? p.node : p.id, _ = e.parameters !== void 0 ? e.parameters[d.input] : d.input, b = e.parameters !== void 0 ? e.parameters[d.output] : d.output;
      n.push(this.getDependency("node", g)), i.push(this.getDependency("accessor", _)), s.push(this.getDependency("accessor", b)), a.push(d), r.push(p);
    }
    return Promise.all([
      Promise.all(n),
      Promise.all(i),
      Promise.all(s),
      Promise.all(a),
      Promise.all(r)
    ]).then(function(l) {
      const h = l[0], u = l[1], d = l[2], p = l[3], g = l[4], _ = [];
      for (let m = 0, M = h.length; m < M; m++) {
        const E = h[m], v = u[m], T = d[m], D = p[m], F = g[m];
        if (E === void 0)
          continue;
        E.updateMatrix(), E.matrixAutoUpdate = !0;
        let G;
        switch (Ie[F.path]) {
          case Ie.weights:
            G = bs;
            break;
          case Ie.rotation:
            G = Qt;
            break;
          case Ie.position:
          case Ie.scale:
          default:
            G = _s;
            break;
        }
        const $ = E.name ? E.name : E.uuid, N = D.interpolation !== void 0 ? No[D.interpolation] : Dn, Y = [];
        Ie[F.path] === Ie.weights ? E.traverse(function(U) {
          U.morphTargetInfluences && Y.push(U.name ? U.name : U.uuid);
        }) : Y.push($);
        let oe = T.array;
        if (T.normalized) {
          const U = Gt(oe.constructor), V = new Float32Array(oe.length);
          for (let H = 0, le = oe.length; H < le; H++)
            V[H] = oe[H] * U;
          oe = V;
        }
        for (let U = 0, V = Y.length; U < V; U++) {
          const H = new G(
            Y[U] + "." + Ie[F.path],
            v.array,
            oe,
            N
          );
          D.interpolation === "CUBICSPLINE" && (H.createInterpolant = function(W) {
            const ie = this instanceof Qt ? Co : Ht;
            return new ie(this.times, this.values, this.getValueSize() / 3, W);
          }, H.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), _.push(H);
        }
      }
      const b = e.name ? e.name : "animation_" + o;
      return new ls(b, void 0, _);
    });
  }
  createNodeMesh(o) {
    const t = this.json, e = this, n = t.nodes[o];
    return n.mesh === void 0 ? null : e.getDependency("mesh", n.mesh).then(function(i) {
      const s = e._getNodeRef(e.meshCache, n.mesh, i);
      return n.weights !== void 0 && s.traverse(function(a) {
        if (a.isMesh)
          for (let r = 0, l = n.weights.length; r < l; r++)
            a.morphTargetInfluences[r] = n.weights[r];
      }), s;
    });
  }
  loadNode(o) {
    const t = this.json, e = this.extensions, n = this, i = t.nodes[o], s = i.name ? n.createUniqueName(i.name) : "";
    return function() {
      const a = [], r = n._invokeOne(function(l) {
        return l.createNodeMesh && l.createNodeMesh(o);
      });
      return r && a.push(r), i.camera !== void 0 && a.push(n.getDependency("camera", i.camera).then(function(l) {
        return n._getNodeRef(n.cameraCache, i.camera, l);
      })), n._invokeAll(function(l) {
        return l.createNodeAttachment && l.createNodeAttachment(o);
      }).forEach(function(l) {
        a.push(l);
      }), Promise.all(a);
    }().then(function(a) {
      let r;
      if (i.isBone === !0 ? r = new us() : a.length > 1 ? r = new Fe() : a.length === 1 ? r = a[0] : r = new mt(), r !== a[0])
        for (let l = 0, h = a.length; l < h; l++)
          r.add(a[l]);
      if (i.name && (r.userData.name = i.name, r.name = s), ke(r, i), i.extensions && We(e, r, i), i.matrix !== void 0) {
        const l = new yt();
        l.fromArray(i.matrix), r.applyMatrix4(l);
      } else
        i.translation !== void 0 && r.position.fromArray(i.translation), i.rotation !== void 0 && r.quaternion.fromArray(i.rotation), i.scale !== void 0 && r.scale.fromArray(i.scale);
      return n.associations.has(r) || n.associations.set(r, {}), n.associations.get(r).nodes = o, r;
    });
  }
  loadScene(o) {
    const t = this.json, e = this.extensions, n = this.json.scenes[o], i = this, s = new Fe();
    n.name && (s.name = i.createUniqueName(n.name)), ke(s, n), n.extensions && We(e, s, n);
    const a = n.nodes || [], r = [];
    for (let l = 0, h = a.length; l < h; l++)
      r.push(Fn(a[l], s, t, i));
    return Promise.all(r).then(function() {
      const l = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, p] of i.associations)
          (d instanceof st || d instanceof Nt) && u.set(d, p);
        return h.traverse((d) => {
          const p = i.associations.get(d);
          p != null && u.set(d, p);
        }), u;
      };
      return i.associations = l(s), s;
    });
  }
}
function Fn(c, o, t, e) {
  const n = t.nodes[c];
  return e.getDependency("node", c).then(function(i) {
    if (n.skin === void 0)
      return i;
    let s;
    return e.getDependency("skin", n.skin).then(function(a) {
      s = a;
      const r = [];
      for (let l = 0, h = s.joints.length; l < h; l++)
        r.push(e.getDependency("node", s.joints[l]));
      return Promise.all(r);
    }).then(function(a) {
      return i.traverse(function(r) {
        if (!r.isMesh)
          return;
        const l = [], h = [];
        for (let u = 0, d = a.length; u < d; u++) {
          const p = a[u];
          if (p) {
            l.push(p);
            const g = new yt();
            s.inverseBindMatrices !== void 0 && g.fromArray(s.inverseBindMatrices.array, u * 16), h.push(g);
          } else
            console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', s.joints[u]);
        }
        r.bind(new hs(l, h), r.matrixWorld);
      }), i;
    });
  }).then(function(i) {
    o.add(i);
    const s = [];
    if (n.children) {
      const a = n.children;
      for (let r = 0, l = a.length; r < l; r++) {
        const h = a[r];
        s.push(Fn(h, i, t, e));
      }
    }
    return Promise.all(s);
  });
}
function zo(c, o, t) {
  const e = o.attributes, n = new Ms();
  if (e.POSITION !== void 0) {
    const a = t.json.accessors[e.POSITION], r = a.min, l = a.max;
    if (r !== void 0 && l !== void 0) {
      if (n.set(
        new x(r[0], r[1], r[2]),
        new x(l[0], l[1], l[2])
      ), a.normalized) {
        const h = Gt(ot[a.componentType]);
        n.min.multiplyScalar(h), n.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = o.targets;
  if (i !== void 0) {
    const a = new x(), r = new x();
    for (let l = 0, h = i.length; l < h; l++) {
      const u = i[l];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], p = d.min, g = d.max;
        if (p !== void 0 && g !== void 0) {
          if (r.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), r.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), r.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), d.normalized) {
            const _ = Gt(ot[d.componentType]);
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
  const s = new Es();
  n.getCenter(s.center), s.radius = n.min.distanceTo(n.max) / 2, c.boundingSphere = s;
}
function wn(c, o, t) {
  const e = o.attributes, n = [];
  function i(s, a) {
    return t.getDependency("accessor", s).then(function(r) {
      c.setAttribute(a, r);
    });
  }
  for (const s in e) {
    const a = kt[s] || s.toLowerCase();
    a in c.attributes || n.push(i(e[s], a));
  }
  if (o.indices !== void 0 && !c.index) {
    const s = t.getDependency("accessor", o.indices).then(function(a) {
      c.setIndex(a);
    });
    n.push(s);
  }
  return ke(c, o), zo(c, o, t), Promise.all(n).then(function() {
    return o.targets !== void 0 ? ko(c, o.targets, t) : c;
  });
}
function _n(c, o) {
  let t = c.getIndex();
  if (t === null) {
    const s = [], a = c.getAttribute("position");
    if (a !== void 0) {
      for (let r = 0; r < a.count; r++)
        s.push(r);
      c.setIndex(s), t = c.getIndex();
    } else
      return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), c;
  }
  const e = t.count - 2, n = [];
  if (o === kn)
    for (let s = 1; s <= e; s++)
      n.push(t.getX(0)), n.push(t.getX(s)), n.push(t.getX(s + 1));
  else
    for (let s = 0; s < e; s++)
      s % 2 === 0 ? (n.push(t.getX(s)), n.push(t.getX(s + 1)), n.push(t.getX(s + 2))) : (n.push(t.getX(s + 2)), n.push(t.getX(s + 1)), n.push(t.getX(s)));
  n.length / 3 !== e && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  const i = c.clone();
  return i.setIndex(n), i;
}
const Uo = /* @__PURE__ */ O({
  __name: "GLTFLoader",
  props: {
    castShadow: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    url: null
  },
  emits: ["load", "progress", "error"],
  setup(c, { expose: o, emit: t }) {
    const e = c, n = new ho(), i = S("scene"), s = new Fe();
    s.castShadow = !0, s.receiveShadow = !0, i.add(s), R(e, "position", s), R(e, "rotation", s), R(e, "scale", s);
    function a() {
      n.load(
        e.url,
        function(l) {
          R(e, "position", s, !1), R(e, "rotation", s, !1), R(e, "scale", s, !1), s.add(l.scene), r(), t("load", l.scene);
        },
        function(l) {
          t("progress", l);
        },
        function(l) {
          t("error", l);
        }
      );
    }
    function r() {
      if (s.children.length !== 0)
        for (const l of s.children[0].children)
          l.castShadow = e.castShadow, l.receiveShadow = e.receiveShadow;
    }
    return r(), C(
      () => e.url,
      () => a(),
      {
        immediate: !0
      }
    ), k("mesh", s), o({
      three: s
    }), (l, h) => te(l.$slots, "default");
  }
}), Bo = /^[og]\s*(.+)?/, Xo = /^mtllib /, Yo = /^usemtl /, Vo = /^usemap /, bn = new x(), Rt = new x(), Mn = new x(), En = new x(), he = new x(), dt = new K();
function Zo() {
  const c = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(o, t) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = o, this.object.fromDeclaration = t !== !1;
        return;
      }
      const e = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: o || "",
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
          const s = this._finalize(!1);
          s && (s.inherited || s.groupCount <= 0) && this.materials.splice(s.index, 1);
          const a = {
            index: this.materials.length,
            name: n || "",
            mtllib: Array.isArray(i) && i.length > 0 ? i[i.length - 1] : "",
            smooth: s !== void 0 ? s.smooth : this.smooth,
            groupStart: s !== void 0 ? s.groupEnd : 0,
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
            for (let s = this.materials.length - 1; s >= 0; s--)
              this.materials[s].groupCount <= 0 && this.materials.splice(s, 1);
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
    parseVertexIndex: function(o, t) {
      const e = parseInt(o, 10);
      return (e >= 0 ? e - 1 : e + t / 3) * 3;
    },
    parseNormalIndex: function(o, t) {
      const e = parseInt(o, 10);
      return (e >= 0 ? e - 1 : e + t / 3) * 3;
    },
    parseUVIndex: function(o, t) {
      const e = parseInt(o, 10);
      return (e >= 0 ? e - 1 : e + t / 2) * 2;
    },
    addVertex: function(o, t, e) {
      const n = this.vertices, i = this.object.geometry.vertices;
      i.push(n[o + 0], n[o + 1], n[o + 2]), i.push(n[t + 0], n[t + 1], n[t + 2]), i.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addVertexPoint: function(o) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[o + 0], t[o + 1], t[o + 2]);
    },
    addVertexLine: function(o) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[o + 0], t[o + 1], t[o + 2]);
    },
    addNormal: function(o, t, e) {
      const n = this.normals, i = this.object.geometry.normals;
      i.push(n[o + 0], n[o + 1], n[o + 2]), i.push(n[t + 0], n[t + 1], n[t + 2]), i.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addFaceNormal: function(o, t, e) {
      const n = this.vertices, i = this.object.geometry.normals;
      bn.fromArray(n, o), Rt.fromArray(n, t), Mn.fromArray(n, e), he.subVectors(Mn, Rt), En.subVectors(bn, Rt), he.cross(En), he.normalize(), i.push(he.x, he.y, he.z), i.push(he.x, he.y, he.z), i.push(he.x, he.y, he.z);
    },
    addColor: function(o, t, e) {
      const n = this.colors, i = this.object.geometry.colors;
      n[o] !== void 0 && i.push(n[o + 0], n[o + 1], n[o + 2]), n[t] !== void 0 && i.push(n[t + 0], n[t + 1], n[t + 2]), n[e] !== void 0 && i.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addUV: function(o, t, e) {
      const n = this.uvs, i = this.object.geometry.uvs;
      i.push(n[o + 0], n[o + 1]), i.push(n[t + 0], n[t + 1]), i.push(n[e + 0], n[e + 1]);
    },
    addDefaultUV: function() {
      const o = this.object.geometry.uvs;
      o.push(0, 0), o.push(0, 0), o.push(0, 0);
    },
    addUVLine: function(o) {
      const t = this.uvs;
      this.object.geometry.uvs.push(t[o + 0], t[o + 1]);
    },
    addFace: function(o, t, e, n, i, s, a, r, l) {
      const h = this.vertices.length;
      let u = this.parseVertexIndex(o, h), d = this.parseVertexIndex(t, h), p = this.parseVertexIndex(e, h);
      if (this.addVertex(u, d, p), this.addColor(u, d, p), a !== void 0 && a !== "") {
        const g = this.normals.length;
        u = this.parseNormalIndex(a, g), d = this.parseNormalIndex(r, g), p = this.parseNormalIndex(l, g), this.addNormal(u, d, p);
      } else
        this.addFaceNormal(u, d, p);
      if (n !== void 0 && n !== "") {
        const g = this.uvs.length;
        u = this.parseUVIndex(n, g), d = this.parseUVIndex(i, g), p = this.parseUVIndex(s, g), this.addUV(u, d, p), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(o) {
      this.object.geometry.type = "Points";
      const t = this.vertices.length;
      for (let e = 0, n = o.length; e < n; e++) {
        const i = this.parseVertexIndex(o[e], t);
        this.addVertexPoint(i), this.addColor(i);
      }
    },
    addLineGeometry: function(o, t) {
      this.object.geometry.type = "Line";
      const e = this.vertices.length, n = this.uvs.length;
      for (let i = 0, s = o.length; i < s; i++)
        this.addVertexLine(this.parseVertexIndex(o[i], e));
      for (let i = 0, s = t.length; i < s; i++)
        this.addUVLine(this.parseUVIndex(t[i], n));
    }
  };
  return c.startObject("", !1), c;
}
class Ko extends Rn {
  constructor(o) {
    super(o), this.materials = null;
  }
  load(o, t, e, n) {
    const i = this, s = new Ft(this.manager);
    s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(o, function(a) {
      try {
        t(i.parse(a));
      } catch (r) {
        n ? n(r) : console.error(r), i.manager.itemError(o);
      }
    }, e, n);
  }
  setMaterials(o) {
    return this.materials = o, this;
  }
  parse(o) {
    const t = new Zo();
    o.indexOf(`\r
`) !== -1 && (o = o.replace(/\r\n/g, `
`)), o.indexOf(`\\
`) !== -1 && (o = o.replace(/\\\n/g, ""));
    const e = o.split(`
`);
    let n = "", i = "", s = 0, a = [];
    const r = typeof "".trimLeft == "function";
    for (let u = 0, d = e.length; u < d; u++)
      if (n = e[u], n = r ? n.trimLeft() : n.trim(), s = n.length, s !== 0 && (i = n.charAt(0), i !== "#"))
        if (i === "v") {
          const p = n.split(/\s+/);
          switch (p[0]) {
            case "v":
              t.vertices.push(
                parseFloat(p[1]),
                parseFloat(p[2]),
                parseFloat(p[3])
              ), p.length >= 7 ? (dt.setRGB(
                parseFloat(p[4]),
                parseFloat(p[5]),
                parseFloat(p[6])
              ).convertSRGBToLinear(), t.colors.push(dt.r, dt.g, dt.b)) : t.colors.push(void 0, void 0, void 0);
              break;
            case "vn":
              t.normals.push(
                parseFloat(p[1]),
                parseFloat(p[2]),
                parseFloat(p[3])
              );
              break;
            case "vt":
              t.uvs.push(
                parseFloat(p[1]),
                parseFloat(p[2])
              );
              break;
          }
        } else if (i === "f") {
          const g = n.slice(1).trim().split(/\s+/), _ = [];
          for (let m = 0, M = g.length; m < M; m++) {
            const E = g[m];
            if (E.length > 0) {
              const v = E.split("/");
              _.push(v);
            }
          }
          const b = _[0];
          for (let m = 1, M = _.length - 1; m < M; m++) {
            const E = _[m], v = _[m + 1];
            t.addFace(
              b[0],
              E[0],
              v[0],
              b[1],
              E[1],
              v[1],
              b[2],
              E[2],
              v[2]
            );
          }
        } else if (i === "l") {
          const p = n.substring(1).trim().split(" ");
          let g = [];
          const _ = [];
          if (n.indexOf("/") === -1)
            g = p;
          else
            for (let b = 0, m = p.length; b < m; b++) {
              const M = p[b].split("/");
              M[0] !== "" && g.push(M[0]), M[1] !== "" && _.push(M[1]);
            }
          t.addLineGeometry(g, _);
        } else if (i === "p") {
          const g = n.slice(1).trim().split(" ");
          t.addPointGeometry(g);
        } else if ((a = Bo.exec(n)) !== null) {
          const p = (" " + a[0].slice(1).trim()).slice(1);
          t.startObject(p);
        } else if (Yo.test(n))
          t.object.startMaterial(n.substring(7).trim(), t.materialLibraries);
        else if (Xo.test(n))
          t.materialLibraries.push(n.substring(7).trim());
        else if (Vo.test(n))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (i === "s") {
          if (a = n.split(" "), a.length > 1) {
            const g = a[1].trim().toLowerCase();
            t.object.smooth = g !== "0" && g !== "off";
          } else
            t.object.smooth = !0;
          const p = t.object.currentMaterial();
          p && (p.smooth = t.object.smooth);
        } else {
          if (n === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + n + '"');
        }
    t.finalize();
    const l = new Fe();
    if (l.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let u = 0, d = t.objects.length; u < d; u++) {
        const p = t.objects[u], g = p.geometry, _ = p.materials, b = g.type === "Line", m = g.type === "Points";
        let M = !1;
        if (g.vertices.length === 0)
          continue;
        const E = new X();
        E.setAttribute("position", new pe(g.vertices, 3)), g.normals.length > 0 && E.setAttribute("normal", new pe(g.normals, 3)), g.colors.length > 0 && (M = !0, E.setAttribute("color", new pe(g.colors, 3))), g.hasUVIndices === !0 && E.setAttribute("uv", new pe(g.uvs, 2));
        const v = [];
        for (let D = 0, F = _.length; D < F; D++) {
          const G = _[D], $ = G.name + "_" + G.smooth + "_" + M;
          let N = t.materials[$];
          if (this.materials !== null) {
            if (N = this.materials.create(G.name), b && N && !(N instanceof xe)) {
              const Y = new xe();
              st.prototype.copy.call(Y, N), Y.color.copy(N.color), N = Y;
            } else if (m && N && !(N instanceof Ge)) {
              const Y = new Ge({ size: 10, sizeAttenuation: !1 });
              st.prototype.copy.call(Y, N), Y.color.copy(N.color), Y.map = N.map, N = Y;
            }
          }
          N === void 0 && (b ? N = new xe() : m ? N = new Ge({ size: 1, sizeAttenuation: !1 }) : N = new Ts(), N.name = G.name, N.flatShading = !G.smooth, N.vertexColors = M, t.materials[$] = N), v.push(N);
        }
        let T;
        if (v.length > 1) {
          for (let D = 0, F = _.length; D < F; D++) {
            const G = _[D];
            E.addGroup(G.groupStart, G.groupCount, D);
          }
          b ? T = new gt(E, v) : m ? T = new tt(E, v) : T = new A(E, v);
        } else
          b ? T = new gt(E, v[0]) : m ? T = new tt(E, v[0]) : T = new A(E, v[0]);
        T.name = p.name, l.add(T);
      }
    else if (t.vertices.length > 0) {
      const u = new Ge({ size: 1, sizeAttenuation: !1 }), d = new X();
      d.setAttribute("position", new pe(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (d.setAttribute("color", new pe(t.colors, 3)), u.vertexColors = !0);
      const p = new tt(d, u);
      l.add(p);
    }
    return l;
  }
}
const $o = /* @__PURE__ */ O({
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
  setup(c, { expose: o, emit: t }) {
    const e = c, n = new Ko(), i = S("scene"), s = new Fe();
    i.add(s), R(e, "position", s), R(e, "rotation", s), R(e, "scale", s);
    function a() {
      n.load(
        e.url,
        function(l) {
          for (const h of l.children)
            "material" in s && (h.material = s.material);
          s.add(l), r(), t("load", l);
        },
        function(l) {
          t("progress", l);
        },
        function(l) {
          t("error", l);
        }
      );
    }
    function r() {
      if (s.children.length !== 0)
        for (const l of s.children[0].children)
          l.castShadow = e.castShadow, l.receiveShadow = e.receiveShadow;
    }
    return r(), C(
      () => e.url,
      () => a(),
      {
        immediate: !0
      }
    ), k("mesh", s), o({
      three: s
    }), (l, h) => te(l.$slots, "default");
  }
}), Qo = /* @__PURE__ */ O({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: o }) {
    const t = c, e = S("scene"), n = new Ss(t.size);
    return e.add(n), R(t, "position", n), R(t, "rotation", n), R(t, "scale", n), k("mesh", n), o({ three: n }), (i, s) => te(i.$slots, "default");
  }
}), qo = {
  name: "BoxGeometry",
  render: () => null
}, Wo = /* @__PURE__ */ O({
  ...qo,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(c, { expose: o }) {
    const t = c;
    function e(r, l, h, u, d, p) {
      return new ne(r, l, h, u, d, p);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const s = S("addGeometry");
    s(n);
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
    return a(), w(t, "name", () => {
      n.name = t.name;
    }), w(t, "width", a), w(t, "height", a), w(t, "depth", a), w(t, "widthSegments", a), w(t, "heightSegments", a), w(t, "depthSegments", a), o({ three: n }), { props: t, makeBox: e, three: n, mesh: i, addGeometry: s, redoGeometry: a };
  }
}), Jo = {
  name: "BufferGeometry",
  render: () => null
}, ei = /* @__PURE__ */ O({
  ...Jo,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] },
    uvs: { default: () => [] },
    normals: { type: [Array, Boolean], default: !1 }
  },
  setup(c, { expose: o }) {
    const t = c;
    function e() {
      const r = new X(), l = new Float32Array(t.vertices);
      if (r.setAttribute("position", new nt(l, 3)), t.uvs.length > 0) {
        const h = new Float32Array(t.uvs);
        r.setAttribute("uv", new nt(h, 2));
      }
      if (t.normals === !0 && (r.computeVertexNormals(), r.attributes.normal.needsUpdate = !0), Array.isArray(t.normals)) {
        const h = new Float32Array(t.normals);
        r.setAttribute("normal", new nt(h, 3));
      }
      return t.faces.length > 0 && r.setIndex(t.faces), r;
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const s = S("addGeometry");
    s(n);
    function a() {
      const r = e();
      fe(n, r);
    }
    return a(), C(
      () => t.vertices,
      (r) => {
        a();
      },
      { deep: !0 }
    ), C(
      () => t.faces,
      (r) => {
        a();
      },
      { deep: !0 }
    ), o({ three: n }), { props: t, makeGeometry: e, three: n, mesh: i, addGeometry: s, redoGeometry: a };
  }
}), ti = {
  name: "CircleGeometry",
  render: () => null
}, ni = /* @__PURE__ */ O({
  ...ti,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    segments: { default: 32 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(c, { expose: o }) {
    const t = c;
    function e(r, l, h, u) {
      return new xs(r, l, h, u);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const s = S("addGeometry");
    s(n);
    function a() {
      const r = e(t.radius, t.segments, t.thetaStart, t.thetaLength);
      fe(n, r);
    }
    return a(), w(t, "radius", a), w(t, "segments", a), w(t, "thetaStart", a), w(t, "thetaLength", a), o({ three: n }), { props: t, makeCircle: e, three: n, mesh: i, addGeometry: s, redoGeometry: a };
  }
}), si = {
  name: "ConeGeometry",
  render: () => null
}, oi = /* @__PURE__ */ O({
  ...si,
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
  setup(c, { expose: o }) {
    const t = c;
    function e(r, l, h, u, d, p, g) {
      return new As(r, l, h, u, d, p, g);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const s = S("addGeometry");
    s(n);
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
    return a(), w(t, "radius", a), w(t, "height", a), w(t, "radialSegments", a), w(t, "heightSegments", a), w(t, "openEnded", a), w(t, "thetaStart", a), w(t, "thetaLength", a), o({ three: n }), { props: t, makeCone: e, three: n, mesh: i, addGeometry: s, redoGeometry: a };
  }
}), ii = {
  name: "CylinderGeometry",
  render: () => null
}, ai = /* @__PURE__ */ O({
  ...ii,
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
  setup(c, { expose: o }) {
    const t = c;
    function e(r, l, h, u, d, p, g, _) {
      return new se(
        r,
        l,
        h,
        u,
        d,
        p,
        g,
        _
      );
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const s = S("addGeometry");
    s(n);
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
    return a(), w(t, "radiusTop", a), w(t, "radiusBottom", a), w(t, "height", a), w(t, "radialSegments", a), w(t, "heightSegments", a), w(t, "openEnded", a), w(t, "thetaStart", a), w(t, "thetaLength", a), o({ three: n }), { props: t, makeCylinder: e, three: n, mesh: i, addGeometry: s, redoGeometry: a };
  }
}), ri = {
  name: "EdgesGeometry",
  render: () => null
}, ci = /* @__PURE__ */ O({
  ...ri,
  props: {
    geometry: null
  },
  setup(c, { expose: o }) {
    const t = c, e = ce(new X()), n = S("mesh", null);
    n && (n.geometry = e);
    const i = S("getGeometry"), s = S("addGeometry");
    s(e);
    function a() {
      const h = new vs(i(t.geometry));
      fe(e, h);
      const u = n;
      "isLine" in u && u.computeLineDistances();
    }
    let r = C(
      i(t.geometry),
      () => {
        a();
      },
      { deep: !0, immediate: !0 }
    );
    w(t, "geometry", () => {
      r(), r = C(
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
    return ft(() => l), o({ three: e }), { props: t, three: e, mesh: n, getGeometry: i, addGeometry: s, redoGeometry: a, get unwatch() {
      return r;
    }, set unwatch(h) {
      r = h;
    }, waitUntilGeometryChanged: l };
  }
});
class _t extends X {
  constructor(o = (n, i, s) => s.set(n, i, Math.cos(n) * Math.sin(i)), t = 8, e = 8) {
    super(), this.type = "ParametricGeometry", this.parameters = {
      func: o,
      slices: t,
      stacks: e
    };
    const n = [], i = [], s = [], a = [], r = 1e-5, l = new x(), h = new x(), u = new x(), d = new x(), p = new x();
    o.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
    const g = t + 1;
    for (let _ = 0; _ <= e; _++) {
      const b = _ / e;
      for (let m = 0; m <= t; m++) {
        const M = m / t;
        o(M, b, h), i.push(h.x, h.y, h.z), M - r >= 0 ? (o(M - r, b, u), d.subVectors(h, u)) : (o(M + r, b, u), d.subVectors(u, h)), b - r >= 0 ? (o(M, b - r, u), p.subVectors(h, u)) : (o(M, b + r, u), p.subVectors(u, h)), l.crossVectors(d, p).normalize(), s.push(l.x, l.y, l.z), a.push(M, b);
      }
    }
    for (let _ = 0; _ < e; _++)
      for (let b = 0; b < t; b++) {
        const m = _ * g + b, M = _ * g + b + 1, E = (_ + 1) * g + b + 1, v = (_ + 1) * g + b;
        n.push(m, M, v), n.push(M, E, v);
      }
    this.setIndex(n), this.setAttribute("position", new pe(i, 3)), this.setAttribute("normal", new pe(s, 3)), this.setAttribute("uv", new pe(a, 2));
  }
}
const Ye = {
  klein: function(c, o, t) {
    o *= Math.PI, c *= 2 * Math.PI, o = o * 2;
    let e, n;
    o < Math.PI ? (e = 3 * Math.cos(o) * (1 + Math.sin(o)) + 2 * (1 - Math.cos(o) / 2) * Math.cos(o) * Math.cos(c), n = -8 * Math.sin(o) - 2 * (1 - Math.cos(o) / 2) * Math.sin(o) * Math.cos(c)) : (e = 3 * Math.cos(o) * (1 + Math.sin(o)) + 2 * (1 - Math.cos(o) / 2) * Math.cos(c + Math.PI), n = -8 * Math.sin(o));
    const i = -2 * (1 - Math.cos(o) / 2) * Math.sin(c);
    t.set(e, i, n);
  },
  plane: function(c, o) {
    return function(t, e, n) {
      const i = t * c, s = 0, a = e * o;
      n.set(i, s, a);
    };
  },
  mobius: function(c, o, t) {
    c = c - 0.5;
    const e = 2 * Math.PI * o, n = 2, i = Math.cos(e) * (n + c * Math.cos(e / 2)), s = Math.sin(e) * (n + c * Math.cos(e / 2)), a = c * Math.sin(e / 2);
    t.set(i, s, a);
  },
  mobius3d: function(c, o, t) {
    c *= Math.PI, o *= 2 * Math.PI, c = c * 2;
    const e = c / 2, n = 2.25, i = 0.125, s = 0.65;
    let a = i * Math.cos(o) * Math.cos(e) - s * Math.sin(o) * Math.sin(e);
    const r = i * Math.cos(o) * Math.sin(e) + s * Math.sin(o) * Math.cos(e), l = (n + a) * Math.sin(c);
    a = (n + a) * Math.cos(c), t.set(a, l, r);
  }
};
Ye.TubeGeometry = class extends _t {
  constructor(o, t = 64, e = 1, n = 8, i = !1) {
    const s = t + 1, a = o.computeFrenetFrames(t, i), r = a.tangents, l = a.normals, h = a.binormals, u = new x();
    function d(p, g, _) {
      g *= 2 * Math.PI;
      const b = Math.floor(p * (s - 1));
      o.getPointAt(p, u);
      const m = l[b], M = h[b], E = -e * Math.cos(g), v = e * Math.sin(g);
      u.x += E * m.x + v * M.x, u.y += E * m.y + v * M.y, u.z += E * m.z + v * M.z, _.copy(u);
    }
    super(d, t, n), this.tangents = r, this.normals = l, this.binormals = h, this.path = o, this.segments = t, this.radius = e, this.segmentsRadius = n, this.closed = i;
  }
};
Ye.TorusKnotGeometry = class extends Ye.TubeGeometry {
  constructor(o = 200, t = 40, e = 64, n = 8, i = 2, s = 3) {
    class a extends Ls {
      getPoint(d, p = new x()) {
        const g = p;
        d *= Math.PI * 2;
        const _ = 0.5, b = (1 + _ * Math.cos(s * d)) * Math.cos(i * d), m = (1 + _ * Math.cos(s * d)) * Math.sin(i * d), M = _ * Math.sin(s * d);
        return g.set(b, m, M).multiplyScalar(o);
      }
    }
    const r = e, l = n, h = new a();
    super(h, r, t, l, !0, !1), this.radius = o, this.tube = t, this.segmentsT = e, this.segmentsR = n, this.p = i, this.q = s;
  }
};
Ye.SphereGeometry = class extends _t {
  constructor(o, t, e) {
    function n(i, s, a) {
      i *= Math.PI, s *= 2 * Math.PI;
      const r = o * Math.sin(i) * Math.cos(s), l = o * Math.sin(i) * Math.sin(s), h = o * Math.cos(i);
      a.set(r, l, h);
    }
    super(n, t, e);
  }
};
Ye.PlaneGeometry = class extends _t {
  constructor(o, t, e, n) {
    function i(s, a, r) {
      const l = s * o, h = 0, u = a * t;
      r.set(l, h, u);
    }
    super(i, e, n);
  }
};
const li = {
  name: "Parametriceometry",
  render: () => null
}, ui = /* @__PURE__ */ O({
  ...li,
  props: {
    name: { default: "" },
    function: { type: Function, default: Ye.klein },
    slices: { default: 8 },
    stacks: { default: 8 }
  },
  setup(c, { expose: o }) {
    const t = c;
    function e(r, l, h) {
      return new _t(r, l, h);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const s = S("addGeometry");
    s(n);
    function a() {
      const r = e(t.function, t.slices, t.stacks);
      fe(n, r);
    }
    return a(), w(t, "function", a), w(t, "stacks", a), w(t, "slices", a), o({ three: n }), { props: t, makePlane: e, three: n, mesh: i, addGeometry: s, redoGeometry: a };
  }
}), hi = {
  name: "PlaneGeometry",
  render: () => null
}, di = /* @__PURE__ */ O({
  ...hi,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(c, { expose: o }) {
    const t = c;
    function e(r, l, h, u) {
      return new vn(r, l, h, u);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const s = S("addGeometry");
    s(n);
    function a() {
      const r = e(t.width, t.height, t.widthSegments, t.heightSegments);
      fe(n, r);
    }
    return a(), w(t, "width", a), w(t, "height", a), w(t, "widthSegments", a), w(t, "heightSegments", a), o({ three: n }), { props: t, makePlane: e, three: n, mesh: i, addGeometry: s, redoGeometry: a };
  }
}), pi = {
  name: "RingGeometry",
  render: () => null
}, fi = /* @__PURE__ */ O({
  ...pi,
  props: {
    name: { default: "" },
    innerRadius: { default: 0.5 },
    outerRadius: { default: 1 },
    thetaSegments: { default: 32 },
    phiSegments: { default: 1 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(c, { expose: o }) {
    const t = c;
    function e(r, l, h, u, d, p) {
      return new Ps(r, l, h, u, d, p);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const s = S("addGeometry");
    s(n);
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
    return a(), w(t, "innerRadius", a), w(t, "outerRadius", a), w(t, "thetaSegments", a), w(t, "phiSegments", a), w(t, "thetaStart", a), w(t, "thetaLength", a), o({ three: n }), { props: t, makeRing: e, three: n, mesh: i, addGeometry: s, redoGeometry: a };
  }
}), mi = {
  name: "SphereGeometry",
  render: () => null
}, gi = /* @__PURE__ */ O({
  ...mi,
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
  setup(c, { expose: o }) {
    const t = c;
    function e(r, l, h, u, d, p, g) {
      return new An(r, l, h, u, d, p, g);
    }
    const n = ce(new X());
    n.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = n);
    const s = S("addGeometry");
    s(n);
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
    return a(), w(t, "radius", a), w(t, "widthSegments", a), w(t, "heightSegments", a), w(t, "phiStart", a), w(t, "phiLength", a), w(t, "thetaStart", a), w(t, "thetaLength", a), o({ three: n }), { props: t, makeSphere: e, three: n, mesh: i, addGeometry: s, redoGeometry: a };
  }
}), yi = {
  name: "WireframeGeometry",
  render: () => null
}, wi = /* @__PURE__ */ O({
  ...yi,
  props: {
    geometry: null
  },
  setup(c, { expose: o }) {
    const t = c, e = ce(new X()), n = S("mesh", null);
    n && (n.geometry = e);
    const i = S("getGeometry"), s = S("addGeometry");
    s(e);
    function a() {
      const h = new Rs(i(t.geometry));
      fe(e, h);
      const u = n;
      "isLine" in u && u.computeLineDistances();
    }
    let r = C(
      i(t.geometry),
      () => {
        a();
      },
      { deep: !0, immediate: !0 }
    );
    w(t, "geometry", () => {
      r(), r = C(
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
    return ft(() => l), o({ three: e }), { props: t, three: e, mesh: n, getGeometry: i, addGeometry: s, redoGeometry: a, get unwatch() {
      return r;
    }, set unwatch(h) {
      r = h;
    }, waitUntilGeometryChanged: l };
  }
}), _i = {
  name: "LineBasicMaterial",
  render: () => null
}, bi = /* @__PURE__ */ O({
  ..._i,
  props: {
    color: { default: 16777215 },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(c, { expose: o }) {
    const t = c, e = new xe({ color: t.color });
    e.name = t.name;
    const n = S("addMaterial");
    n(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function s() {
      t.color && (e.color = new K(t.color)), e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return s(), w(t, "color", s), w(t, "opacity", s), w(t, "transparent", s), k("material", e), o({ three: e }), { props: t, three: e, addMaterial: n, mesh: i, applyProps: s };
  }
}), Mi = {
  name: "LineDashedMaterial",
  render: () => null
}, Ei = /* @__PURE__ */ O({
  ...Mi,
  props: {
    color: { default: 16777215 },
    scale: { default: 1 },
    dashSize: { default: 3 },
    gapSize: { default: 1 },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(c, { expose: o }) {
    const t = c, e = new Is({ color: t.color });
    e.name = t.name;
    const n = S("addMaterial");
    n(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function s() {
      e.color = new K(t.color), e.scale = t.scale, e.dashSize = t.dashSize, e.gapSize = t.gapSize, e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return s(), w(t, "color", s), w(t, "scale", s), w(t, "dashSize", s), w(t, "gapSize", s), w(t, "opacity", s), w(t, "transparent", s), k("material", e), o({ three: e }), { props: t, three: e, addMaterial: n, mesh: i, applyProps: s };
  }
}), Ti = {
  name: "MeshBasicMaterial"
}, Si = /* @__PURE__ */ O({
  ...Ti,
  props: {
    color: null,
    side: { default: wt },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(c, { expose: o }) {
    const t = c, e = new we();
    e.name = t.name, S("addMaterial")(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function s() {
      t.color !== void 0 && (e.color = new K(t.color)), e.side = t.side, e.opacity = t.opacity, e.transparent = t.transparent, e.vertexColors = t.vertexColors, e.needsUpdate = !0;
    }
    return s(), k("material", e), w(t, "color", s), w(t, "side", s), w(t, "opacity", s), w(t, "transparent", s), w(t, "vertexColors", s), o({ three: e }), (a, r) => te(a.$slots, "default");
  }
}), xi = {
  name: "MeshLambertMaterial"
}, Ai = /* @__PURE__ */ O({
  ...xi,
  props: {
    color: { default: 16777215 },
    name: { default: "" },
    side: { default: wt },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(c, { expose: o }) {
    const t = c, e = new Os();
    e.name = t.name, S("addMaterial")(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function s(a) {
      a.color && (e.color = new K(a.color)), a.side && (e.side = a.side);
    }
    return s(t), C(
      () => t.color,
      () => s(t)
    ), C(
      () => t.side,
      () => s(t)
    ), C(
      () => t.opacity,
      () => {
        e.opacity = t.opacity;
      },
      { immediate: !0 }
    ), C(
      () => t.transparent,
      () => {
        e.transparent = t.transparent;
      },
      { immediate: !0 }
    ), k("material", e), o({ three: e }), (a, r) => te(a.$slots, "default");
  }
}), vi = {
  name: "PointsMaterial",
  render: () => null
}, Li = /* @__PURE__ */ O({
  ...vi,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    name: { default: "" },
    size: { default: 1 },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(c, { expose: o }) {
    const t = c, e = new Ge({ color: t.color, sizeAttenuation: t.sizeAttenuation, size: t.size });
    e.name = t.name;
    const n = S("mesh", null), i = S("addMaterial");
    i(e), n && (n.material = e);
    function s() {
      e.color = new K(t.color), e.size = t.size, e.sizeAttenuation = t.sizeAttenuation, e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return s(), w(t, "color", s), w(t, "size", s), w(t, "sizeAttenuation", s), w(t, "opacity", s), w(t, "transparent", s), k("material", e), o({ three: e }), { props: t, three: e, mesh: n, addMaterial: i, applyProps: s };
  }
}), Pi = {
  name: "MeshNormalMaterial"
}, Ri = /* @__PURE__ */ O({
  ...Pi,
  props: {
    side: { default: wt },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(c, { expose: o }) {
    const t = c, e = new Cs();
    e.name = t.name, S("addMaterial")(e);
    const i = S("mesh", null);
    return i && (i.material = e), C(
      () => t.side,
      () => {
        e.side = t.side;
      },
      { immediate: !0 }
    ), C(
      () => t.opacity,
      () => {
        e.opacity = t.opacity;
      },
      { immediate: !0 }
    ), C(
      () => t.transparent,
      () => {
        e.transparent = t.transparent;
      },
      { immediate: !0 }
    ), k("material", e), o({ three: e }), (s, a) => te(s.$slots, "default");
  }
}), Ii = {
  name: "AmbientLight",
  render: () => null
}, Oi = /* @__PURE__ */ O({
  ...Ii,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(c, { expose: o }) {
    const t = c, e = S("scene"), n = new Ns();
    e.add(n);
    function i(s) {
      n.color = new K(s.color), n.intensity = s.intensity;
    }
    return i(t), C(
      () => t.color,
      () => i(t)
    ), C(
      () => t.intensity,
      () => i(t)
    ), o({ three: n }), { props: t, scene: e, three: n, applyProps: i };
  }
}), Ci = {
  name: "PointLight",
  render: () => null
}, Ni = /* @__PURE__ */ O({
  ...Ci,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(c, { expose: o }) {
    const t = c, e = S("scene"), n = new In();
    e.add(n), R(t, "position", n), R(t, "rotation", n), R(t, "scale", n);
    function i(s) {
      n.color = new K(s.color), n.intensity = s.intensity, n.castShadow = s.castShadow;
    }
    return i(t), C(
      () => t.color,
      () => i(t)
    ), C(
      () => t.intensity,
      () => i(t)
    ), C(
      () => t.castShadow,
      () => i(t)
    ), o({ three: n }), { props: t, scene: e, three: n, applyProps: i };
  }
}), Di = {
  name: "TextureLoader",
  render: () => null
}, ki = /* @__PURE__ */ O({
  ...Di,
  props: {
    offset: { default: () => [0, 0] },
    repeat: { default: () => [1, 1] },
    rotation: { default: 0 },
    url: null,
    wrapS: { default: Ct },
    wrapT: { default: Ct }
  },
  setup(c, { expose: o }) {
    const t = c, e = S("material"), n = Oe(new Nt());
    function i() {
      new On().loadAsync(t.url).then((a) => {
        n.value = a, "map" in e && (e.map = n.value, e.needsUpdate = !0), s();
      });
    }
    function s() {
      n.value.wrapS = t.wrapS, n.value.wrapT = t.wrapT, n.value.rotation = t.rotation, n.value.needsUpdate = !0;
    }
    return i(), w(t, "url", i), w(t, "wrapS", s), w(t, "wrapT", s), w(t, "rotation", s), tn(t, "offset", n.value), tn(t, "repeat", n.value), o({ three: n }), { props: t, material: e, three: n, load: i, applyProps: s };
  }
});
function Bi(c) {
  c.component("Renderer", ks), c.component("Scene", Gs), c.component("PerspectiveCamera", js), c.component("OrthographicCamera", zs), c.component("OrbitControls", Xs), c.component("TrackballControls", Zs), c.component("TransformControls", so), c.component("Group", oo), c.component("InstancedMesh", io), c.component("Line", ao), c.component("LineLoop", ro), c.component("LineSegments", co), c.component("Mesh", lo), c.component("Points", uo), c.component("GLTFLoader", Uo), c.component("OBJLoader", $o), c.component("AxesHelper", Qo), c.component("BoxGeometry", Wo), c.component("BufferGeometry", ei), c.component("CircleGeometry", ni), c.component("ConeGeometry", oi), c.component("CylinderGeometry", ai), c.component("EdgesGeometry", ci), c.component("ParametricGeometry", ui), c.component("PlaneGeometry", di), c.component("RingGeometry", fi), c.component("SphereGeometry", gi), c.component("WireframeGeometry", wi), c.component("LineBasicMaterial", bi), c.component("LineDashedMaterial", Ei), c.component("MeshBasicMaterial", Si), c.component("MeshLambertMaterial", Ai), c.component("PointsMaterial", Li), c.component("MeshNormalMaterial", Ri), c.component("AmbientLight", Oi), c.component("PointLight", Ni), c.component("TextureLoader", ki);
}
export {
  Oi as AmbientLight,
  Qo as AxesHelper,
  Wo as BoxGeometry,
  ei as BufferGeometry,
  ni as CircleGeometry,
  oi as ConeGeometry,
  ai as CylinderGeometry,
  ci as EdgesGeometry,
  Uo as GLTFLoader,
  oo as Group,
  io as InstancedMesh,
  ao as Line,
  bi as LineBasicMaterial,
  Ei as LineDashedMaterial,
  ro as LineLoop,
  co as LineSegments,
  lo as Mesh,
  Si as MeshBasicMaterial,
  Ai as MeshLambertMaterial,
  Ri as MeshNormalMaterial,
  $o as OBJLoader,
  Xs as OrbitControls,
  zs as OrthographicCamera,
  ui as ParametricGeometry,
  js as PerspectiveCamera,
  di as PlaneGeometry,
  Ni as PointLight,
  uo as Points,
  Li as PointsMaterial,
  ks as Renderer,
  fi as RingGeometry,
  Gs as Scene,
  gi as SphereGeometry,
  ki as TextureLoader,
  Zs as TrackballControls,
  so as TransformControls,
  wi as WireframeGeometry,
  Bi as install
};

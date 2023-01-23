import { watch as C, inject as b, onMounted as we, onUnmounted as oe, defineComponent as O, ref as se, reactive as F, provide as z, openBlock as Mt, createElementBlock as vt, Fragment as Et, renderSlot as U, createElementVNode as Pt, nextTick as xe } from "vue";
import { Vector3 as T, Raycaster as nt, Vector2 as j, WebGLRenderer as St, Scene as Lt, Color as ae, PerspectiveCamera as xt, OrthographicCamera as At, EventDispatcher as ft, MOUSE as te, TOUCH as de, Quaternion as Ue, Spherical as ot, Group as Ye, BufferGeometry as D, MeshBasicMaterial as Ze, InstancedMesh as Ot, LineBasicMaterial as ce, Line as Tt, LineLoop as Ct, LineSegments as Ve, Mesh as Fe, PointsMaterial as pe, Points as Le, Loader as kt, FileLoader as zt, Float32BufferAttribute as ne, Material as at, MeshPhongMaterial as jt, AxesHelper as Rt, BoxGeometry as Gt, BufferAttribute as st, CircleGeometry as Dt, ConeGeometry as It, CylinderGeometry as Nt, EdgesGeometry as Bt, Curve as $t, PlaneGeometry as Ut, RingGeometry as Vt, SphereGeometry as Ft, WireframeGeometry as Yt, LineDashedMaterial as Zt, FrontSide as He, MeshLambertMaterial as Ht, MeshNormalMaterial as Xt, AmbientLight as Kt, PointLight as Wt, ClampToEdgeWrapping as rt, Texture as qt, TextureLoader as Qt } from "three";
const it = (r) => r === void 0 ? new T(0, 0, 0) : "x" in r ? new T(r.x, r.y, r.z) : new T(r[0], r[1], r[2]), ct = (r, s, t) => {
  t[r].isVector3 ? t[r].set(s.x, s.y, s.z) : "isEuler" in t[r] && t[r].setFromVector3(s);
}, x = (r, s, t, e = !0) => {
  if (t !== null) {
    if (r[s] !== void 0) {
      const n = it(r[s]);
      ct(s, n, t);
    }
    e && C(
      () => r[s],
      () => {
        if (r[s] !== void 0) {
          const n = it(r[s]);
          ct(s, n, t);
        }
      }
    );
  }
}, m = (r, s, t) => {
  C(
    () => r[s],
    () => {
      t();
    }
  );
};
function W(r, s) {
  s.hasAttribute("position") && (r.setAttribute("position", s.getAttribute("position")), r.attributes.position.needsUpdate = !0, r.computeVertexNormals(), r.computeBoundingBox(), r.computeBoundingSphere()), s.hasAttribute("normal") && (r.setAttribute("normal", s.getAttribute("normal")), r.attributes.normal.needsUpdate = !0), s.hasAttribute("uv") && (r.setAttribute("uv", s.getAttribute("uv")), r.attributes.uv.needsUpdate = !0), r.setIndex(s.getIndex());
}
function re(r) {
  if (r.children.length > 0)
    for (let s = r.children.length - 1; s >= 0; s--)
      re(r.children[s]);
  if (r.geometry && r.geometry.dispose(), r.material)
    if (r.material.length)
      for (let s = 0; s < r.material.length; ++s)
        r.material[s].map && r.material[s].map.dispose(), r.material[s].lightMap && r.material[s].lightMap.dispose(), r.material[s].bumpMap && r.material[s].bumpMap.dispose(), r.material[s].normalMap && r.material[s].normalMap.dispose(), r.material[s].specularMap && r.material[s].specularMap.dispose(), r.material[s].envMap && r.material[s].envMap.dispose(), r.material[s].dispose();
    else
      r.material.map && r.material.map.dispose(), r.material.lightMap && r.material.lightMap.dispose(), r.material.bumpMap && r.material.bumpMap.dispose(), r.material.normalMap && r.material.normalMap.dispose(), r.material.specularMap && r.material.specularMap.dispose(), r.material.envMap && r.material.envMap.dispose(), r.material.dispose();
  return r.removeFromParent(), !0;
}
function le(r) {
  const s = b("scene"), t = b("parent", void 0);
  we(() => {
    t ? t.add(r) : s.add(r);
  }), oe(() => {
    t ? t.remove(r) : s.remove(r);
  });
}
function Jt(r, s, t) {
  const e = b("camera"), n = b("canvas");
  b("scene");
  const a = (d) => {
    const f = new nt(), h = lt(d);
    f.setFromCamera(h, e.value);
    const w = f.intersectObjects(r);
    w.length > 0 && t("click", w, h);
  };
  let o = !1, i = [];
  const l = (d) => {
    const f = new nt(), h = lt(d);
    f.setFromCamera(h, e.value);
    const w = f.intersectObjects(r);
    w.length > 0 ? (i = w, o === !1 && t("mouseenter", w, h), o = !0, t("mousemove", w, h)) : (o && t("mouseleave", i, h), o = !1, i = []);
  };
  we(() => {
    if (s.enableRaycasting) {
      if ((n == null ? void 0 : n.value) == null)
        return;
      n == null || n.value.addEventListener("click", a), n == null || n.value.addEventListener("mousemove", l);
    }
  }), oe(() => {
    if (s.enableRaycasting) {
      if ((n == null ? void 0 : n.value) == null)
        return;
      n == null || n.value.removeEventListener("click", a), n == null || n.value.removeEventListener("mousemove", l);
    }
  }), C(
    () => s.enableRaycasting,
    (d) => {
      d ? (n == null || n.value.addEventListener("click", a), n == null || n.value.addEventListener("mousemove", l)) : (n == null || n.value.removeEventListener("click", a), n == null || n.value.removeEventListener("mousemove", l));
    }
  );
}
function lt(r) {
  const s = new j(), t = r.currentTarget.getBoundingClientRect();
  return s.x = (r.clientX - t.left) / t.width * 2 - 1, s.y = -((r.clientY - t.top) / t.height) * 2 + 1, s;
}
const en = /* @__PURE__ */ O({
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
  setup(r, { expose: s }) {
    const t = r;
    let e = se(null);
    const n = [], a = F([]), o = F([]);
    let i = se(null);
    const l = se([]), d = se([]), f = se();
    z("canvas", f);
    let h = Date.now(), w = 1e3 / t.frameLimit;
    C(
      () => t.camera,
      (y) => p(y)
    );
    const p = (y) => {
      if (y) {
        const v = l.value.find((E) => E.name === y);
        v === void 0 && (i.value = null), i.value = v;
      } else
        i.value = l.value[0];
    };
    function g() {
      e.value !== null && (e.value.shadowMap.enabled = t.shadowMapEnabled, w = 1e3 / t.frameLimit, t.autoResize || e.value.setSize(t.width, t.height));
    }
    we(() => {
      e.value = new St({ canvas: f.value, antialias: t.antialias, alpha: t.alpha }), e.value.setSize(1, 1), g(), p(t.camera), new ResizeObserver((v) => {
        v.forEach((E) => {
          e.value && t.autoResize && e.value.setSize(E.contentRect.width, E.contentRect.height);
        });
      }).observe(f.value.parentElement), M();
    }), oe(() => {
      for (let y of n)
        re(y);
    });
    function M() {
      if (requestAnimationFrame(M), e.value === null)
        return;
      const y = Date.now(), v = y - h;
      if (!(w > -1 && v < w)) {
        if (h = y - v % w, t.onBeforeRender && t.onBeforeRender(), d.value.length > 0 && i.value)
          for (const E of d.value)
            E.value !== null && (E.value.object.uuid === i.value.uuid ? (E.value.enabled = !0, E.value.update()) : E.value.enabled = !1);
        if (i.value && e)
          for (const E of n)
            e.value.render(E, i.value);
      }
    }
    return g(), C(
      () => t.shadowMapEnabled,
      () => g()
    ), C(
      () => t.frameLimit,
      () => g()
    ), C(
      () => t.width,
      () => g()
    ), C(
      () => t.height,
      () => g()
    ), z("addCamera", (y) => l.value.push(y)), z("addScene", (y) => n.push(y)), z("addGeometry", (y) => a.push(y)), z("getGeometry", (y) => a.find((v) => v.name === y)), z("addMaterial", (y) => o.push(y)), z("getMaterial", (y) => o.find((v) => v.name === y)), z("addControls", (y) => d.value.push(y)), z("camera", i), s({ three: e }), (y, v) => (Mt(), vt(Et, null, [
      U(y.$slots, "default"),
      Pt("canvas", {
        ref_key: "canvas",
        ref: f
      }, null, 512)
    ], 64));
  }
}), tn = /* @__PURE__ */ O({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(r, { expose: s }) {
    const t = r, e = new Lt();
    z("scene", e), b("addScene")(e);
    function n(a) {
      a.background && (e.background = new ae(a.background));
    }
    return n(t), C(
      () => t.background,
      () => n(t)
    ), s({ three: e }), (a, o) => U(a.$slots, "default");
  }
}), nn = {
  name: "PerspectiveCamera"
}, on = /* @__PURE__ */ O({
  ...nn,
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
  setup(r, { expose: s }) {
    const t = r, e = new xt(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    b("addCamera")(e);
    const n = b("canvas");
    C(n, () => {
      new ResizeObserver((i) => {
        i.forEach((l) => {
          t.autoResize && (e.aspect = l.contentRect.width / l.contentRect.height, e.updateProjectionMatrix());
        });
      }).observe(n.value);
    }), x(t, "position", e), x(t, "up", e), x(t, "lookAt", e);
    function a() {
      e.name = t.name, t.autoResize || (e.aspect = t.aspect), e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return a(), m(t, "name", a), m(t, "aspect", a), m(t, "near", a), m(t, "far", a), z("parentCamera", e), s({ three: e }), (o, i) => U(o.$slots, "default");
  }
}), an = {
  name: "OrthographicCamera"
}, sn = /* @__PURE__ */ O({
  ...an,
  props: {
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(r, { expose: s }) {
    const t = r, e = new At(-10, 10, 10, -10, 0.1, 1e3);
    e.lookAt(0, 0, 0), e.updateProjectionMatrix(), b("addCamera")(e);
    const n = b("canvas");
    C(n, () => {
      new ResizeObserver((i) => {
        i.forEach((l) => {
          const d = l.contentRect.width / l.contentRect.height;
          e.left = e.bottom * d, e.right = e.top * d, e.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), x(t, "position", e), x(t, "up", e), x(t, "lookAt", e);
    function a() {
      e.name = t.name, e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return a(), m(t, "name", a), m(t, "near", a), m(t, "far", a), z("parentCamera", e), s({ three: e }), (o, i) => U(o.$slots, "default");
  }
}), ut = { type: "change" }, De = { type: "start" }, mt = { type: "end" };
class rn extends ft {
  constructor(s, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = s, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new T(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: te.ROTATE, MIDDLE: te.DOLLY, RIGHT: te.PAN }, this.touches = { ONE: de.ROTATE, TWO: de.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return i.phi;
    }, this.getAzimuthalAngle = function() {
      return i.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(c) {
      c.addEventListener("keydown", qe), this._domElementKeyEvents = c;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(ut), e.update(), a = n.NONE;
    }, this.update = function() {
      const c = new T(), P = new Ue().setFromUnitVectors(s.up, new T(0, 1, 0)), N = P.clone().invert(), $ = new T(), K = new Ue(), me = 2 * Math.PI;
      return function() {
        const tt = e.object.position;
        c.copy(tt).sub(e.target), c.applyQuaternion(P), i.setFromVector3(c), e.autoRotate && a === n.NONE && Q(Y()), e.enableDamping ? (i.theta += l.theta * e.dampingFactor, i.phi += l.phi * e.dampingFactor) : (i.theta += l.theta, i.phi += l.phi);
        let J = e.minAzimuthAngle, ee = e.maxAzimuthAngle;
        return isFinite(J) && isFinite(ee) && (J < -Math.PI ? J += me : J > Math.PI && (J -= me), ee < -Math.PI ? ee += me : ee > Math.PI && (ee -= me), J <= ee ? i.theta = Math.max(J, Math.min(ee, i.theta)) : i.theta = i.theta > (J + ee) / 2 ? Math.max(J, i.theta) : Math.min(ee, i.theta)), i.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, i.phi)), i.makeSafe(), i.radius *= d, i.radius = Math.max(e.minDistance, Math.min(e.maxDistance, i.radius)), e.enableDamping === !0 ? e.target.addScaledVector(f, e.dampingFactor) : e.target.add(f), c.setFromSpherical(i), c.applyQuaternion(N), tt.copy(e.target).add(c), e.object.lookAt(e.target), e.enableDamping === !0 ? (l.theta *= 1 - e.dampingFactor, l.phi *= 1 - e.dampingFactor, f.multiplyScalar(1 - e.dampingFactor)) : (l.set(0, 0, 0), f.set(0, 0, 0)), d = 1, h || $.distanceToSquared(e.object.position) > o || 8 * (1 - K.dot(e.object.quaternion)) > o ? (e.dispatchEvent(ut), $.copy(e.object.position), K.copy(e.object.quaternion), h = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", Qe), e.domElement.removeEventListener("pointerdown", ie), e.domElement.removeEventListener("pointercancel", Ke), e.domElement.removeEventListener("wheel", We), e.domElement.removeEventListener("pointermove", je), e.domElement.removeEventListener("pointerup", Re), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", qe);
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
    let a = n.NONE;
    const o = 1e-6, i = new ot(), l = new ot();
    let d = 1;
    const f = new T();
    let h = !1;
    const w = new j(), p = new j(), g = new j(), M = new j(), y = new j(), v = new j(), E = new j(), L = new j(), A = new j(), _ = [], I = {};
    function Y() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function R() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function Q(c) {
      l.theta -= c;
    }
    function k(c) {
      l.phi -= c;
    }
    const V = function() {
      const c = new T();
      return function(N, $) {
        c.setFromMatrixColumn($, 0), c.multiplyScalar(-N), f.add(c);
      };
    }(), fe = function() {
      const c = new T();
      return function(N, $) {
        e.screenSpacePanning === !0 ? c.setFromMatrixColumn($, 1) : (c.setFromMatrixColumn($, 0), c.crossVectors(e.object.up, c)), c.multiplyScalar(N), f.add(c);
      };
    }(), X = function() {
      const c = new T();
      return function(N, $) {
        const K = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const me = e.object.position;
          c.copy(me).sub(e.target);
          let Pe = c.length();
          Pe *= Math.tan(e.object.fov / 2 * Math.PI / 180), V(2 * N * Pe / K.clientHeight, e.object.matrix), fe(2 * $ * Pe / K.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (V(N * (e.object.right - e.object.left) / e.object.zoom / K.clientWidth, e.object.matrix), fe($ * (e.object.top - e.object.bottom) / e.object.zoom / K.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function ue(c) {
      e.object.isPerspectiveCamera ? d /= c : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * c)), e.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function _e(c) {
      e.object.isPerspectiveCamera ? d *= c : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / c)), e.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function Me(c) {
      w.set(c.clientX, c.clientY);
    }
    function Oe(c) {
      E.set(c.clientX, c.clientY);
    }
    function ge(c) {
      M.set(c.clientX, c.clientY);
    }
    function Te(c) {
      p.set(c.clientX, c.clientY), g.subVectors(p, w).multiplyScalar(e.rotateSpeed);
      const P = e.domElement;
      Q(2 * Math.PI * g.x / P.clientHeight), k(2 * Math.PI * g.y / P.clientHeight), w.copy(p), e.update();
    }
    function Ce(c) {
      L.set(c.clientX, c.clientY), A.subVectors(L, E), A.y > 0 ? ue(R()) : A.y < 0 && _e(R()), E.copy(L), e.update();
    }
    function ke(c) {
      y.set(c.clientX, c.clientY), v.subVectors(y, M).multiplyScalar(e.panSpeed), X(v.x, v.y), M.copy(y), e.update();
    }
    function ve(c) {
      c.deltaY < 0 ? _e(R()) : c.deltaY > 0 && ue(R()), e.update();
    }
    function ze(c) {
      let P = !1;
      switch (c.code) {
        case e.keys.UP:
          X(0, e.keyPanSpeed), P = !0;
          break;
        case e.keys.BOTTOM:
          X(0, -e.keyPanSpeed), P = !0;
          break;
        case e.keys.LEFT:
          X(e.keyPanSpeed, 0), P = !0;
          break;
        case e.keys.RIGHT:
          X(-e.keyPanSpeed, 0), P = !0;
          break;
      }
      P && (c.preventDefault(), e.update());
    }
    function ye() {
      if (_.length === 1)
        w.set(_[0].pageX, _[0].pageY);
      else {
        const c = 0.5 * (_[0].pageX + _[1].pageX), P = 0.5 * (_[0].pageY + _[1].pageY);
        w.set(c, P);
      }
    }
    function be() {
      if (_.length === 1)
        M.set(_[0].pageX, _[0].pageY);
      else {
        const c = 0.5 * (_[0].pageX + _[1].pageX), P = 0.5 * (_[0].pageY + _[1].pageY);
        M.set(c, P);
      }
    }
    function Ee() {
      const c = _[0].pageX - _[1].pageX, P = _[0].pageY - _[1].pageY, N = Math.sqrt(c * c + P * P);
      E.set(0, N);
    }
    function u() {
      e.enableZoom && Ee(), e.enablePan && be();
    }
    function S() {
      e.enableZoom && Ee(), e.enableRotate && ye();
    }
    function G(c) {
      if (_.length == 1)
        p.set(c.pageX, c.pageY);
      else {
        const N = Ge(c), $ = 0.5 * (c.pageX + N.x), K = 0.5 * (c.pageY + N.y);
        p.set($, K);
      }
      g.subVectors(p, w).multiplyScalar(e.rotateSpeed);
      const P = e.domElement;
      Q(2 * Math.PI * g.x / P.clientHeight), k(2 * Math.PI * g.y / P.clientHeight), w.copy(p);
    }
    function B(c) {
      if (_.length === 1)
        y.set(c.pageX, c.pageY);
      else {
        const P = Ge(c), N = 0.5 * (c.pageX + P.x), $ = 0.5 * (c.pageY + P.y);
        y.set(N, $);
      }
      v.subVectors(y, M).multiplyScalar(e.panSpeed), X(v.x, v.y), M.copy(y);
    }
    function Z(c) {
      const P = Ge(c), N = c.pageX - P.x, $ = c.pageY - P.y, K = Math.sqrt(N * N + $ * $);
      L.set(0, K), A.set(0, Math.pow(L.y / E.y, e.zoomSpeed)), ue(A.y), E.copy(L);
    }
    function q(c) {
      e.enableZoom && Z(c), e.enablePan && B(c);
    }
    function Xe(c) {
      e.enableZoom && Z(c), e.enableRotate && G(c);
    }
    function ie(c) {
      e.enabled !== !1 && (_.length === 0 && (e.domElement.setPointerCapture(c.pointerId), e.domElement.addEventListener("pointermove", je), e.domElement.addEventListener("pointerup", Re)), _t(c), c.pointerType === "touch" ? bt(c) : gt(c));
    }
    function je(c) {
      e.enabled !== !1 && (c.pointerType === "touch" ? wt(c) : yt(c));
    }
    function Re(c) {
      Je(c), _.length === 0 && (e.domElement.releasePointerCapture(c.pointerId), e.domElement.removeEventListener("pointermove", je), e.domElement.removeEventListener("pointerup", Re)), e.dispatchEvent(mt), a = n.NONE;
    }
    function Ke(c) {
      Je(c);
    }
    function gt(c) {
      let P;
      switch (c.button) {
        case 0:
          P = e.mouseButtons.LEFT;
          break;
        case 1:
          P = e.mouseButtons.MIDDLE;
          break;
        case 2:
          P = e.mouseButtons.RIGHT;
          break;
        default:
          P = -1;
      }
      switch (P) {
        case te.DOLLY:
          if (e.enableZoom === !1)
            return;
          Oe(c), a = n.DOLLY;
          break;
        case te.ROTATE:
          if (c.ctrlKey || c.metaKey || c.shiftKey) {
            if (e.enablePan === !1)
              return;
            ge(c), a = n.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            Me(c), a = n.ROTATE;
          }
          break;
        case te.PAN:
          if (c.ctrlKey || c.metaKey || c.shiftKey) {
            if (e.enableRotate === !1)
              return;
            Me(c), a = n.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            ge(c), a = n.PAN;
          }
          break;
        default:
          a = n.NONE;
      }
      a !== n.NONE && e.dispatchEvent(De);
    }
    function yt(c) {
      if (e.enabled !== !1)
        switch (a) {
          case n.ROTATE:
            if (e.enableRotate === !1)
              return;
            Te(c);
            break;
          case n.DOLLY:
            if (e.enableZoom === !1)
              return;
            Ce(c);
            break;
          case n.PAN:
            if (e.enablePan === !1)
              return;
            ke(c);
            break;
        }
    }
    function We(c) {
      e.enabled === !1 || e.enableZoom === !1 || a !== n.NONE || (c.preventDefault(), e.dispatchEvent(De), ve(c), e.dispatchEvent(mt));
    }
    function qe(c) {
      e.enabled === !1 || e.enablePan === !1 || ze(c);
    }
    function bt(c) {
      switch (et(c), _.length) {
        case 1:
          switch (e.touches.ONE) {
            case de.ROTATE:
              if (e.enableRotate === !1)
                return;
              ye(), a = n.TOUCH_ROTATE;
              break;
            case de.PAN:
              if (e.enablePan === !1)
                return;
              be(), a = n.TOUCH_PAN;
              break;
            default:
              a = n.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case de.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              u(), a = n.TOUCH_DOLLY_PAN;
              break;
            case de.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              S(), a = n.TOUCH_DOLLY_ROTATE;
              break;
            default:
              a = n.NONE;
          }
          break;
        default:
          a = n.NONE;
      }
      a !== n.NONE && e.dispatchEvent(De);
    }
    function wt(c) {
      switch (et(c), a) {
        case n.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          G(c), e.update();
          break;
        case n.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          B(c), e.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          q(c), e.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          Xe(c), e.update();
          break;
        default:
          a = n.NONE;
      }
    }
    function Qe(c) {
      e.enabled !== !1 && c.preventDefault();
    }
    function _t(c) {
      _.push(c);
    }
    function Je(c) {
      delete I[c.pointerId];
      for (let P = 0; P < _.length; P++)
        if (_[P].pointerId == c.pointerId) {
          _.splice(P, 1);
          return;
        }
    }
    function et(c) {
      let P = I[c.pointerId];
      P === void 0 && (P = new j(), I[c.pointerId] = P), P.set(c.pageX, c.pageY);
    }
    function Ge(c) {
      const P = c.pointerId === _[0].pointerId ? _[1] : _[0];
      return I[P.pointerId];
    }
    e.domElement.addEventListener("contextmenu", Qe), e.domElement.addEventListener("pointerdown", ie), e.domElement.addEventListener("pointercancel", Ke), e.domElement.addEventListener("wheel", We, { passive: !1 }), this.update();
  }
}
const cn = {
  name: "OrbitControls",
  render: () => null
}, ln = /* @__PURE__ */ O({
  ...cn,
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
  setup(r, { expose: s }) {
    const t = r, e = se(null);
    b("addControls")(e);
    const n = b("parentCamera"), a = b("canvas");
    function o() {
      e.value != null && (e.value.enablePan = t.enablePan, e.value.enableRotate = t.enableRotate, e.value.enableZoom = t.enableZoom, e.value.minZoom = t.minZoom, e.value.maxZoom = t.maxZoom, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance, e.value.minPolarAngle = t.minPolarAngle, e.value.maxPolarAngle = t.maxPolarAngle, e.value.minAzimuthAngle = t.minAzimuthAngle, e.value.maxAzimuthAngle = t.maxAzimuthAngle);
    }
    let i = !1;
    const l = () => {
      a.value && (i || (e.value = new rn(n, a.value), o(), x(t, "target", e.value), i = !0));
    };
    return C(a, () => {
      l();
    }), o(), m(t, "enablePan", o), m(t, "enableRotate", o), m(t, "enableZoom", o), m(t, "minZoom", o), m(t, "maxZoom", o), m(t, "minDistance", o), m(t, "maxDistance", o), m(t, "minPolarAngle", o), m(t, "maxPolarAngle", o), m(t, "minAzimuthAngle", o), m(t, "maxAzimuthAngle", o), s({ three: e }), { props: t, three: e, camera: n, canvas: a, applyProps: o, get boundCamera() {
      return i;
    }, set boundCamera(d) {
      i = d;
    }, tryBindCamera: l };
  }
}), Ie = { type: "change" }, Ne = { type: "start" }, Be = { type: "end" };
class un extends ft {
  constructor(s, t) {
    super(), t === void 0 && console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
    const e = this, n = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };
    this.object = s, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.screen = { left: 0, top: 0, width: 0, height: 0 }, this.rotateSpeed = 1, this.zoomSpeed = 1.2, this.panSpeed = 0.3, this.noRotate = !1, this.noZoom = !1, this.noPan = !1, this.staticMoving = !1, this.dynamicDampingFactor = 0.2, this.minDistance = 0, this.maxDistance = 1 / 0, this.keys = ["KeyA", "KeyS", "KeyD"], this.mouseButtons = { LEFT: te.ROTATE, MIDDLE: te.DOLLY, RIGHT: te.PAN }, this.target = new T();
    const a = 1e-6, o = new T();
    let i = 1, l = n.NONE, d = n.NONE, f = 0, h = 0, w = 0;
    const p = new T(), g = new j(), M = new j(), y = new T(), v = new j(), E = new j(), L = new j(), A = new j(), _ = [], I = {};
    this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.up0 = this.object.up.clone(), this.zoom0 = this.object.zoom, this.handleResize = function() {
      const u = e.domElement.getBoundingClientRect(), S = e.domElement.ownerDocument.documentElement;
      e.screen.left = u.left + window.pageXOffset - S.clientLeft, e.screen.top = u.top + window.pageYOffset - S.clientTop, e.screen.width = u.width, e.screen.height = u.height;
    };
    const Y = function() {
      const u = new j();
      return function(G, B) {
        return u.set(
          (G - e.screen.left) / e.screen.width,
          (B - e.screen.top) / e.screen.height
        ), u;
      };
    }(), R = function() {
      const u = new j();
      return function(G, B) {
        return u.set(
          (G - e.screen.width * 0.5 - e.screen.left) / (e.screen.width * 0.5),
          (e.screen.height + 2 * (e.screen.top - B)) / e.screen.width
        ), u;
      };
    }();
    this.rotateCamera = function() {
      const u = new T(), S = new Ue(), G = new T(), B = new T(), Z = new T(), q = new T();
      return function() {
        q.set(M.x - g.x, M.y - g.y, 0);
        let ie = q.length();
        ie ? (p.copy(e.object.position).sub(e.target), G.copy(p).normalize(), B.copy(e.object.up).normalize(), Z.crossVectors(B, G).normalize(), B.setLength(M.y - g.y), Z.setLength(M.x - g.x), q.copy(B.add(Z)), u.crossVectors(q, p).normalize(), ie *= e.rotateSpeed, S.setFromAxisAngle(u, ie), p.applyQuaternion(S), e.object.up.applyQuaternion(S), y.copy(u), w = ie) : !e.staticMoving && w && (w *= Math.sqrt(1 - e.dynamicDampingFactor), p.copy(e.object.position).sub(e.target), S.setFromAxisAngle(y, w), p.applyQuaternion(S), e.object.up.applyQuaternion(S)), g.copy(M);
      };
    }(), this.zoomCamera = function() {
      let u;
      l === n.TOUCH_ZOOM_PAN ? (u = f / h, f = h, e.object.isPerspectiveCamera ? p.multiplyScalar(u) : e.object.isOrthographicCamera ? (e.object.zoom /= u, e.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")) : (u = 1 + (E.y - v.y) * e.zoomSpeed, u !== 1 && u > 0 && (e.object.isPerspectiveCamera ? p.multiplyScalar(u) : e.object.isOrthographicCamera ? (e.object.zoom /= u, e.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")), e.staticMoving ? v.copy(E) : v.y += (E.y - v.y) * this.dynamicDampingFactor);
    }, this.panCamera = function() {
      const u = new j(), S = new T(), G = new T();
      return function() {
        if (u.copy(A).sub(L), u.lengthSq()) {
          if (e.object.isOrthographicCamera) {
            const Z = (e.object.right - e.object.left) / e.object.zoom / e.domElement.clientWidth, q = (e.object.top - e.object.bottom) / e.object.zoom / e.domElement.clientWidth;
            u.x *= Z, u.y *= q;
          }
          u.multiplyScalar(p.length() * e.panSpeed), G.copy(p).cross(e.object.up).setLength(u.x), G.add(S.copy(e.object.up).setLength(u.y)), e.object.position.add(G), e.target.add(G), e.staticMoving ? L.copy(A) : L.add(u.subVectors(A, L).multiplyScalar(e.dynamicDampingFactor));
        }
      };
    }(), this.checkDistances = function() {
      (!e.noZoom || !e.noPan) && (p.lengthSq() > e.maxDistance * e.maxDistance && (e.object.position.addVectors(e.target, p.setLength(e.maxDistance)), v.copy(E)), p.lengthSq() < e.minDistance * e.minDistance && (e.object.position.addVectors(e.target, p.setLength(e.minDistance)), v.copy(E)));
    }, this.update = function() {
      p.subVectors(e.object.position, e.target), e.noRotate || e.rotateCamera(), e.noZoom || e.zoomCamera(), e.noPan || e.panCamera(), e.object.position.addVectors(e.target, p), e.object.isPerspectiveCamera ? (e.checkDistances(), e.object.lookAt(e.target), o.distanceToSquared(e.object.position) > a && (e.dispatchEvent(Ie), o.copy(e.object.position))) : e.object.isOrthographicCamera ? (e.object.lookAt(e.target), (o.distanceToSquared(e.object.position) > a || i !== e.object.zoom) && (e.dispatchEvent(Ie), o.copy(e.object.position), i = e.object.zoom)) : console.warn("THREE.TrackballControls: Unsupported camera type");
    }, this.reset = function() {
      l = n.NONE, d = n.NONE, e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.up.copy(e.up0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), p.subVectors(e.object.position, e.target), e.object.lookAt(e.target), e.dispatchEvent(Ie), o.copy(e.object.position), i = e.object.zoom;
    };
    function Q(u) {
      e.enabled !== !1 && (_.length === 0 && (e.domElement.setPointerCapture(u.pointerId), e.domElement.addEventListener("pointermove", k), e.domElement.addEventListener("pointerup", V)), ze(u), u.pointerType === "touch" ? Te(u) : _e(u));
    }
    function k(u) {
      e.enabled !== !1 && (u.pointerType === "touch" ? Ce(u) : Me(u));
    }
    function V(u) {
      e.enabled !== !1 && (u.pointerType === "touch" ? ke(u) : Oe(), ye(u), _.length === 0 && (e.domElement.releasePointerCapture(u.pointerId), e.domElement.removeEventListener("pointermove", k), e.domElement.removeEventListener("pointerup", V)));
    }
    function fe(u) {
      ye(u);
    }
    function X(u) {
      e.enabled !== !1 && (window.removeEventListener("keydown", X), d === n.NONE && (u.code === e.keys[n.ROTATE] && !e.noRotate ? d = n.ROTATE : u.code === e.keys[n.ZOOM] && !e.noZoom ? d = n.ZOOM : u.code === e.keys[n.PAN] && !e.noPan && (d = n.PAN)));
    }
    function ue() {
      e.enabled !== !1 && (d = n.NONE, window.addEventListener("keydown", X));
    }
    function _e(u) {
      if (l === n.NONE)
        switch (u.button) {
          case e.mouseButtons.LEFT:
            l = n.ROTATE;
            break;
          case e.mouseButtons.MIDDLE:
            l = n.ZOOM;
            break;
          case e.mouseButtons.RIGHT:
            l = n.PAN;
            break;
        }
      const S = d !== n.NONE ? d : l;
      S === n.ROTATE && !e.noRotate ? (M.copy(R(u.pageX, u.pageY)), g.copy(M)) : S === n.ZOOM && !e.noZoom ? (v.copy(Y(u.pageX, u.pageY)), E.copy(v)) : S === n.PAN && !e.noPan && (L.copy(Y(u.pageX, u.pageY)), A.copy(L)), e.dispatchEvent(Ne);
    }
    function Me(u) {
      const S = d !== n.NONE ? d : l;
      S === n.ROTATE && !e.noRotate ? (g.copy(M), M.copy(R(u.pageX, u.pageY))) : S === n.ZOOM && !e.noZoom ? E.copy(Y(u.pageX, u.pageY)) : S === n.PAN && !e.noPan && A.copy(Y(u.pageX, u.pageY));
    }
    function Oe() {
      l = n.NONE, e.dispatchEvent(Be);
    }
    function ge(u) {
      if (e.enabled !== !1 && e.noZoom !== !0) {
        switch (u.preventDefault(), u.deltaMode) {
          case 2:
            v.y -= u.deltaY * 0.025;
            break;
          case 1:
            v.y -= u.deltaY * 0.01;
            break;
          default:
            v.y -= u.deltaY * 25e-5;
            break;
        }
        e.dispatchEvent(Ne), e.dispatchEvent(Be);
      }
    }
    function Te(u) {
      switch (be(u), _.length) {
        case 1:
          l = n.TOUCH_ROTATE, M.copy(R(_[0].pageX, _[0].pageY)), g.copy(M);
          break;
        default:
          l = n.TOUCH_ZOOM_PAN;
          const S = _[0].pageX - _[1].pageX, G = _[0].pageY - _[1].pageY;
          h = f = Math.sqrt(S * S + G * G);
          const B = (_[0].pageX + _[1].pageX) / 2, Z = (_[0].pageY + _[1].pageY) / 2;
          L.copy(Y(B, Z)), A.copy(L);
          break;
      }
      e.dispatchEvent(Ne);
    }
    function Ce(u) {
      switch (be(u), _.length) {
        case 1:
          g.copy(M), M.copy(R(u.pageX, u.pageY));
          break;
        default:
          const S = Ee(u), G = u.pageX - S.x, B = u.pageY - S.y;
          h = Math.sqrt(G * G + B * B);
          const Z = (u.pageX + S.x) / 2, q = (u.pageY + S.y) / 2;
          A.copy(Y(Z, q));
          break;
      }
    }
    function ke(u) {
      switch (_.length) {
        case 0:
          l = n.NONE;
          break;
        case 1:
          l = n.TOUCH_ROTATE, M.copy(R(u.pageX, u.pageY)), g.copy(M);
          break;
        case 2:
          l = n.TOUCH_ZOOM_PAN, M.copy(R(u.pageX - g.x, u.pageY - g.y)), g.copy(M);
          break;
      }
      e.dispatchEvent(Be);
    }
    function ve(u) {
      e.enabled !== !1 && u.preventDefault();
    }
    function ze(u) {
      _.push(u);
    }
    function ye(u) {
      delete I[u.pointerId];
      for (let S = 0; S < _.length; S++)
        if (_[S].pointerId == u.pointerId) {
          _.splice(S, 1);
          return;
        }
    }
    function be(u) {
      let S = I[u.pointerId];
      S === void 0 && (S = new j(), I[u.pointerId] = S), S.set(u.pageX, u.pageY);
    }
    function Ee(u) {
      const S = u.pointerId === _[0].pointerId ? _[1] : _[0];
      return I[S.pointerId];
    }
    this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", ve), e.domElement.removeEventListener("pointerdown", Q), e.domElement.removeEventListener("pointercancel", fe), e.domElement.removeEventListener("wheel", ge), e.domElement.removeEventListener("pointermove", k), e.domElement.removeEventListener("pointerup", V), window.removeEventListener("keydown", X), window.removeEventListener("keyup", ue);
    }, this.domElement.addEventListener("contextmenu", ve), this.domElement.addEventListener("pointerdown", Q), this.domElement.addEventListener("pointercancel", fe), this.domElement.addEventListener("wheel", ge, { passive: !1 }), window.addEventListener("keydown", X), window.addEventListener("keyup", ue), this.handleResize(), this.update();
  }
}
const mn = {
  name: "TrackballControls",
  render: () => null
}, dn = /* @__PURE__ */ O({
  ...mn,
  props: {
    minDistance: { default: 0 },
    maxDistance: { default: 1 / 0 },
    panSpeed: { default: 0.3 },
    rotateSpeed: { default: 1 },
    zoomSpeed: { default: 1.2 }
  },
  setup(r, { expose: s }) {
    const t = r, e = se(null);
    b("addControls")(e);
    const n = b("parentCamera"), a = b("canvas");
    function o() {
      e.value != null && (e.value.rotateSpeed = t.rotateSpeed, e.value.zoomSpeed = t.zoomSpeed, e.value.panSpeed = t.panSpeed, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance);
    }
    let i = !1;
    const l = () => {
      a.value && (i || (e.value = new un(n, a.value), o(), i = !0));
    };
    return C(a, () => {
      l();
    }), o(), m(t, "panSpeed", o), m(t, "rotateSpeed", o), m(t, "zoomSpeed", o), m(t, "minDistance", o), m(t, "maxDistance", o), s({ three: e }), { props: t, three: e, camera: n, canvas: a, applyProps: o, get boundCamera() {
      return i;
    }, set boundCamera(d) {
      i = d;
    }, tryBindCamera: l };
  }
}), pn = /* @__PURE__ */ O({
  __name: "Group",
  props: {
    enableRaycasting: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  emits: ["click", "mousemove", "mouseenter", "mouseleave"],
  setup(r, { expose: s, emit: t }) {
    const e = r, n = new Ye();
    return le(n), x(e, "position", n), x(e, "rotation", n), x(e, "scale", n), Jt(n.children, e, t), z("parent", n), s({ three: n }), (a, o) => U(a.$slots, "default");
  }
}), hn = /* @__PURE__ */ O({
  __name: "InstancedMesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    count: null,
    geometry: { default: null },
    material: { default: null },
    receiveShadow: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = b("scene"), n = new D(), a = new Ze(), o = new Ot(n, a, t.count);
    o.castShadow = !0, o.receiveShadow = !0, le(o);
    function i() {
      o.castShadow = t.castShadow, o.receiveShadow = t.receiveShadow;
    }
    i(), m(t, "castShadow", i), m(t, "receiveShadow", i);
    const l = b("getGeometry"), d = b("getMaterial");
    return we(() => {
      if (t.geometry) {
        const f = l(t.geometry);
        o.geometry = f;
      }
      if (t.material) {
        const f = d(t.material);
        o.material = f;
      }
    }), oe(() => {
      e.remove(o), re(o);
    }), z("mesh", o), s({ three: o }), (f, h) => U(f.$slots, "default");
  }
}), fn = /* @__PURE__ */ O({
  __name: "Line",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const t = r, e = b("scene"), n = new D(), a = new ce({ color: "black" }), o = new Tt(n, a);
    return le(o), x(t, "position", o), x(t, "rotation", o), x(t, "scale", o), oe(() => {
      e.remove(o), re(o);
    }), z("mesh", o), s({ three: o }), (i, l) => U(i.$slots, "default");
  }
}), gn = /* @__PURE__ */ O({
  __name: "LineLoop",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const t = r, e = b("scene"), n = new D(), a = new ce({ color: "black" }), o = new Ct(n, a);
    return le(o), x(t, "position", o), x(t, "rotation", o), x(t, "scale", o), oe(() => {
      e.remove(o), re(o);
    }), z("mesh", o), s({ three: o }), (i, l) => U(i.$slots, "default");
  }
}), yn = /* @__PURE__ */ O({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const t = r, e = b("scene"), n = new D(), a = new ce({ color: "black" }), o = new Ve(n, a);
    return le(o), x(t, "position", o), x(t, "rotation", o), x(t, "scale", o), oe(() => {
      e.remove(o), re(o);
    }), z("mesh", o), s({ three: o }), (i, l) => U(i.$slots, "default");
  }
}), bn = /* @__PURE__ */ O({
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
  setup(r, { expose: s }) {
    const t = r, e = b("scene"), n = new D(), a = new Ze(), o = new Fe(n, a);
    o.castShadow = !0, o.receiveShadow = !0, le(o), x(t, "position", o), x(t, "rotation", o), x(t, "scale", o);
    function i() {
      o.castShadow = t.castShadow, o.receiveShadow = t.receiveShadow;
    }
    i(), m(t, "castShadow", i), m(t, "receiveShadow", i);
    const l = b("getGeometry"), d = b("getMaterial");
    return we(() => {
      if (t.geometry) {
        const f = l(t.geometry);
        o.geometry = f;
      }
      if (t.material) {
        const f = d(t.material);
        o.material = f;
      }
    }), oe(() => {
      e.remove(o), re(o);
    }), z("mesh", o), s({ three: o }), (f, h) => U(f.$slots, "default");
  }
}), wn = /* @__PURE__ */ O({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const t = r, e = b("scene"), n = new D(), a = new pe({ color: "red", sizeAttenuation: !1, size: 2 }), o = new Le(n, a);
    return le(o), x(t, "position", o), x(t, "rotation", o), x(t, "scale", o), oe(() => {
      e.remove(o), re(o);
    }), z("mesh", o), s({ three: o }), (i, l) => U(i.$slots, "default");
  }
}), _n = /^[og]\s*(.+)?/, Mn = /^mtllib /, vn = /^usemtl /, En = /^usemap /, dt = new T(), $e = new T(), pt = new T(), ht = new T(), H = new T(), Se = new ae();
function Pn() {
  const r = {
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
        startMaterial: function(n, a) {
          const o = this._finalize(!1);
          o && (o.inherited || o.groupCount <= 0) && this.materials.splice(o.index, 1);
          const i = {
            index: this.materials.length,
            name: n || "",
            mtllib: Array.isArray(a) && a.length > 0 ? a[a.length - 1] : "",
            smooth: o !== void 0 ? o.smooth : this.smooth,
            groupStart: o !== void 0 ? o.groupEnd : 0,
            groupEnd: -1,
            groupCount: -1,
            inherited: !1,
            clone: function(l) {
              const d = {
                index: typeof l == "number" ? l : this.index,
                name: this.name,
                mtllib: this.mtllib,
                smooth: this.smooth,
                groupStart: 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: !1
              };
              return d.clone = this.clone.bind(d), d;
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
            for (let o = this.materials.length - 1; o >= 0; o--)
              this.materials[o].groupCount <= 0 && this.materials.splice(o, 1);
          return n && this.materials.length === 0 && this.materials.push({
            name: "",
            smooth: this.smooth
          }), a;
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
      const n = this.vertices, a = this.object.geometry.vertices;
      a.push(n[s + 0], n[s + 1], n[s + 2]), a.push(n[t + 0], n[t + 1], n[t + 2]), a.push(n[e + 0], n[e + 1], n[e + 2]);
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
      const n = this.normals, a = this.object.geometry.normals;
      a.push(n[s + 0], n[s + 1], n[s + 2]), a.push(n[t + 0], n[t + 1], n[t + 2]), a.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addFaceNormal: function(s, t, e) {
      const n = this.vertices, a = this.object.geometry.normals;
      dt.fromArray(n, s), $e.fromArray(n, t), pt.fromArray(n, e), H.subVectors(pt, $e), ht.subVectors(dt, $e), H.cross(ht), H.normalize(), a.push(H.x, H.y, H.z), a.push(H.x, H.y, H.z), a.push(H.x, H.y, H.z);
    },
    addColor: function(s, t, e) {
      const n = this.colors, a = this.object.geometry.colors;
      n[s] !== void 0 && a.push(n[s + 0], n[s + 1], n[s + 2]), n[t] !== void 0 && a.push(n[t + 0], n[t + 1], n[t + 2]), n[e] !== void 0 && a.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addUV: function(s, t, e) {
      const n = this.uvs, a = this.object.geometry.uvs;
      a.push(n[s + 0], n[s + 1]), a.push(n[t + 0], n[t + 1]), a.push(n[e + 0], n[e + 1]);
    },
    addDefaultUV: function() {
      const s = this.object.geometry.uvs;
      s.push(0, 0), s.push(0, 0), s.push(0, 0);
    },
    addUVLine: function(s) {
      const t = this.uvs;
      this.object.geometry.uvs.push(t[s + 0], t[s + 1]);
    },
    addFace: function(s, t, e, n, a, o, i, l, d) {
      const f = this.vertices.length;
      let h = this.parseVertexIndex(s, f), w = this.parseVertexIndex(t, f), p = this.parseVertexIndex(e, f);
      if (this.addVertex(h, w, p), this.addColor(h, w, p), i !== void 0 && i !== "") {
        const g = this.normals.length;
        h = this.parseNormalIndex(i, g), w = this.parseNormalIndex(l, g), p = this.parseNormalIndex(d, g), this.addNormal(h, w, p);
      } else
        this.addFaceNormal(h, w, p);
      if (n !== void 0 && n !== "") {
        const g = this.uvs.length;
        h = this.parseUVIndex(n, g), w = this.parseUVIndex(a, g), p = this.parseUVIndex(o, g), this.addUV(h, w, p), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(s) {
      this.object.geometry.type = "Points";
      const t = this.vertices.length;
      for (let e = 0, n = s.length; e < n; e++) {
        const a = this.parseVertexIndex(s[e], t);
        this.addVertexPoint(a), this.addColor(a);
      }
    },
    addLineGeometry: function(s, t) {
      this.object.geometry.type = "Line";
      const e = this.vertices.length, n = this.uvs.length;
      for (let a = 0, o = s.length; a < o; a++)
        this.addVertexLine(this.parseVertexIndex(s[a], e));
      for (let a = 0, o = t.length; a < o; a++)
        this.addUVLine(this.parseUVIndex(t[a], n));
    }
  };
  return r.startObject("", !1), r;
}
class Sn extends kt {
  constructor(s) {
    super(s), this.materials = null;
  }
  load(s, t, e, n) {
    const a = this, o = new zt(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(s, function(i) {
      try {
        t(a.parse(i));
      } catch (l) {
        n ? n(l) : console.error(l), a.manager.itemError(s);
      }
    }, e, n);
  }
  setMaterials(s) {
    return this.materials = s, this;
  }
  parse(s) {
    const t = new Pn();
    s.indexOf(`\r
`) !== -1 && (s = s.replace(/\r\n/g, `
`)), s.indexOf(`\\
`) !== -1 && (s = s.replace(/\\\n/g, ""));
    const e = s.split(`
`);
    let n = "", a = "", o = 0, i = [];
    const l = typeof "".trimLeft == "function";
    for (let h = 0, w = e.length; h < w; h++)
      if (n = e[h], n = l ? n.trimLeft() : n.trim(), o = n.length, o !== 0 && (a = n.charAt(0), a !== "#"))
        if (a === "v") {
          const p = n.split(/\s+/);
          switch (p[0]) {
            case "v":
              t.vertices.push(
                parseFloat(p[1]),
                parseFloat(p[2]),
                parseFloat(p[3])
              ), p.length >= 7 ? (Se.setRGB(
                parseFloat(p[4]),
                parseFloat(p[5]),
                parseFloat(p[6])
              ).convertSRGBToLinear(), t.colors.push(Se.r, Se.g, Se.b)) : t.colors.push(void 0, void 0, void 0);
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
        } else if (a === "f") {
          const g = n.slice(1).trim().split(/\s+/), M = [];
          for (let v = 0, E = g.length; v < E; v++) {
            const L = g[v];
            if (L.length > 0) {
              const A = L.split("/");
              M.push(A);
            }
          }
          const y = M[0];
          for (let v = 1, E = M.length - 1; v < E; v++) {
            const L = M[v], A = M[v + 1];
            t.addFace(
              y[0],
              L[0],
              A[0],
              y[1],
              L[1],
              A[1],
              y[2],
              L[2],
              A[2]
            );
          }
        } else if (a === "l") {
          const p = n.substring(1).trim().split(" ");
          let g = [];
          const M = [];
          if (n.indexOf("/") === -1)
            g = p;
          else
            for (let y = 0, v = p.length; y < v; y++) {
              const E = p[y].split("/");
              E[0] !== "" && g.push(E[0]), E[1] !== "" && M.push(E[1]);
            }
          t.addLineGeometry(g, M);
        } else if (a === "p") {
          const g = n.slice(1).trim().split(" ");
          t.addPointGeometry(g);
        } else if ((i = _n.exec(n)) !== null) {
          const p = (" " + i[0].slice(1).trim()).slice(1);
          t.startObject(p);
        } else if (vn.test(n))
          t.object.startMaterial(n.substring(7).trim(), t.materialLibraries);
        else if (Mn.test(n))
          t.materialLibraries.push(n.substring(7).trim());
        else if (En.test(n))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (a === "s") {
          if (i = n.split(" "), i.length > 1) {
            const g = i[1].trim().toLowerCase();
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
    const d = new Ye();
    if (d.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let h = 0, w = t.objects.length; h < w; h++) {
        const p = t.objects[h], g = p.geometry, M = p.materials, y = g.type === "Line", v = g.type === "Points";
        let E = !1;
        if (g.vertices.length === 0)
          continue;
        const L = new D();
        L.setAttribute("position", new ne(g.vertices, 3)), g.normals.length > 0 && L.setAttribute("normal", new ne(g.normals, 3)), g.colors.length > 0 && (E = !0, L.setAttribute("color", new ne(g.colors, 3))), g.hasUVIndices === !0 && L.setAttribute("uv", new ne(g.uvs, 2));
        const A = [];
        for (let I = 0, Y = M.length; I < Y; I++) {
          const R = M[I], Q = R.name + "_" + R.smooth + "_" + E;
          let k = t.materials[Q];
          if (this.materials !== null) {
            if (k = this.materials.create(R.name), y && k && !(k instanceof ce)) {
              const V = new ce();
              at.prototype.copy.call(V, k), V.color.copy(k.color), k = V;
            } else if (v && k && !(k instanceof pe)) {
              const V = new pe({ size: 10, sizeAttenuation: !1 });
              at.prototype.copy.call(V, k), V.color.copy(k.color), V.map = k.map, k = V;
            }
          }
          k === void 0 && (y ? k = new ce() : v ? k = new pe({ size: 1, sizeAttenuation: !1 }) : k = new jt(), k.name = R.name, k.flatShading = !R.smooth, k.vertexColors = E, t.materials[Q] = k), A.push(k);
        }
        let _;
        if (A.length > 1) {
          for (let I = 0, Y = M.length; I < Y; I++) {
            const R = M[I];
            L.addGroup(R.groupStart, R.groupCount, I);
          }
          y ? _ = new Ve(L, A) : v ? _ = new Le(L, A) : _ = new Fe(L, A);
        } else
          y ? _ = new Ve(L, A[0]) : v ? _ = new Le(L, A[0]) : _ = new Fe(L, A[0]);
        _.name = p.name, d.add(_);
      }
    else if (t.vertices.length > 0) {
      const h = new pe({ size: 1, sizeAttenuation: !1 }), w = new D();
      w.setAttribute("position", new ne(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (w.setAttribute("color", new ne(t.colors, 3)), h.vertexColors = !0);
      const p = new Le(w, h);
      d.add(p);
    }
    return d;
  }
}
const Ln = /* @__PURE__ */ O({
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
  setup(r, { expose: s, emit: t }) {
    const e = r, n = new Sn(), a = b("scene"), o = new Ye();
    o.castShadow = !0, o.receiveShadow = !0, a.add(o), x(e, "position", o), x(e, "rotation", o), x(e, "scale", o);
    function i() {
      n.load(
        e.url,
        function(l) {
          for (const d of l.children)
            o.add(d), d.material = o.material, x(e, "position", o, !1), x(e, "rotation", o, !1), x(e, "scale", o, !1);
          t("load", l);
        },
        function(l) {
          t("progress", l);
        },
        function(l) {
          t("error", l);
        }
      );
    }
    return i(), C(
      () => e.url,
      () => i()
    ), z("mesh", o), s({
      three: o
    }), (l, d) => U(l.$slots, "default");
  }
}), xn = /* @__PURE__ */ O({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const t = r, e = b("scene"), n = new Rt(t.size);
    return e.add(n), x(t, "position", n), x(t, "rotation", n), x(t, "scale", n), z("mesh", n), s({ three: n }), (a, o) => U(a.$slots, "default");
  }
}), An = {
  name: "BoxGeometry",
  render: () => null
}, On = /* @__PURE__ */ O({
  ...An,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(r, { expose: s }) {
    const t = r;
    function e(l, d, f, h, w, p) {
      return new Gt(l, d, f, h, w, p);
    }
    const n = F(new D());
    n.name = t.name;
    const a = b("mesh", null);
    a && (a.geometry = n);
    const o = b("addGeometry");
    o(n);
    function i() {
      const l = e(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments
      );
      W(n, l);
    }
    return i(), m(t, "name", () => {
      n.name = t.name;
    }), m(t, "width", i), m(t, "height", i), m(t, "depth", i), m(t, "widthSegments", i), m(t, "heightSegments", i), m(t, "depthSegments", i), s({ three: n }), { props: t, makeBox: e, three: n, mesh: a, addGeometry: o, redoGeometry: i };
  }
}), Tn = {
  name: "BufferGeometry",
  render: () => null
}, Cn = /* @__PURE__ */ O({
  ...Tn,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] },
    uvs: { default: () => [] }
  },
  setup(r, { expose: s }) {
    const t = r;
    function e(l, d, f) {
      const h = new D(), w = new Float32Array(l), p = new Float32Array(f);
      return h.setAttribute("position", new st(w, 3)), h.setAttribute("uv", new st(p, 2)), t.faces.length > 0 && h.setIndex(d), h;
    }
    const n = F(e(t.vertices, t.faces, t.uvs));
    n.name = t.name;
    const a = b("mesh", null);
    a && (a.geometry = n);
    const o = b("addGeometry");
    o(n);
    function i(l, d, f) {
      const h = e(l, d, f);
      W(n, h);
    }
    return C(
      () => t.vertices,
      (l) => {
        i(l, t.faces, t.uvs);
      },
      { deep: !0, immediate: !0 }
    ), C(
      () => t.faces,
      (l) => {
        i(t.vertices, l, t.uvs);
      },
      { deep: !0, immediate: !0 }
    ), s({ three: n }), { props: t, makeGeometry: e, three: n, mesh: a, addGeometry: o, redoGeometry: i };
  }
}), kn = {
  name: "CircleGeometry",
  render: () => null
}, zn = /* @__PURE__ */ O({
  ...kn,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    segments: { default: 32 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(r, { expose: s }) {
    const t = r;
    function e(l, d, f, h) {
      return new Dt(l, d, f, h);
    }
    const n = F(new D());
    n.name = t.name;
    const a = b("mesh", null);
    a && (a.geometry = n);
    const o = b("addGeometry");
    o(n);
    function i() {
      const l = e(t.radius, t.segments, t.thetaStart, t.thetaLength);
      W(n, l);
    }
    return i(), m(t, "radius", i), m(t, "segments", i), m(t, "thetaStart", i), m(t, "thetaLength", i), s({ three: n }), { props: t, makeCircle: e, three: n, mesh: a, addGeometry: o, redoGeometry: i };
  }
}), jn = {
  name: "ConeGeometry",
  render: () => null
}, Rn = /* @__PURE__ */ O({
  ...jn,
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
  setup(r, { expose: s }) {
    const t = r;
    function e(l, d, f, h, w, p, g) {
      return new It(l, d, f, h, w, p, g);
    }
    const n = F(new D());
    n.name = t.name;
    const a = b("mesh", null);
    a && (a.geometry = n);
    const o = b("addGeometry");
    o(n);
    function i() {
      const l = e(
        t.radius,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength
      );
      W(n, l);
    }
    return i(), m(t, "radius", i), m(t, "height", i), m(t, "radialSegments", i), m(t, "heightSegments", i), m(t, "openEnded", i), m(t, "thetaStart", i), m(t, "thetaLength", i), s({ three: n }), { props: t, makeCone: e, three: n, mesh: a, addGeometry: o, redoGeometry: i };
  }
}), Gn = {
  name: "CylinderGeometry",
  render: () => null
}, Dn = /* @__PURE__ */ O({
  ...Gn,
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
  setup(r, { expose: s }) {
    const t = r;
    function e(l, d, f, h, w, p, g, M) {
      return new Nt(
        l,
        d,
        f,
        h,
        w,
        p,
        g,
        M
      );
    }
    const n = F(new D());
    n.name = t.name;
    const a = b("mesh", null);
    a && (a.geometry = n);
    const o = b("addGeometry");
    o(n);
    function i() {
      const l = e(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength
      );
      W(n, l);
    }
    return i(), m(t, "radiusTop", i), m(t, "radiusBottom", i), m(t, "height", i), m(t, "radialSegments", i), m(t, "heightSegments", i), m(t, "openEnded", i), m(t, "thetaStart", i), m(t, "thetaLength", i), s({ three: n }), { props: t, makeCylinder: e, three: n, mesh: a, addGeometry: o, redoGeometry: i };
  }
}), In = {
  name: "EdgesGeometry",
  render: () => null
}, Nn = /* @__PURE__ */ O({
  ...In,
  props: {
    geometry: null
  },
  setup(r, { expose: s }) {
    const t = r, e = F(new D()), n = b("mesh", null);
    n && (n.geometry = e);
    const a = b("getGeometry"), o = b("addGeometry");
    o(e);
    function i() {
      const f = new Bt(a(t.geometry));
      W(e, f);
      const h = n;
      "isLine" in h && h.computeLineDistances();
    }
    let l = C(
      a(t.geometry),
      () => {
        i();
      },
      { deep: !0, immediate: !0 }
    );
    m(t, "geometry", () => {
      l(), l = C(
        a(t.geometry),
        () => {
          i();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const d = () => {
      a(t.geometry) === void 0 ? xe(() => d) : i();
    };
    return xe(() => d), s({ three: e }), { props: t, three: e, mesh: n, getGeometry: a, addGeometry: o, redoGeometry: i, get unwatch() {
      return l;
    }, set unwatch(f) {
      l = f;
    }, waitUntilGeometryChanged: d };
  }
});
class Ae extends D {
  constructor(s = (n, a, o) => o.set(n, a, Math.cos(n) * Math.sin(a)), t = 8, e = 8) {
    super(), this.type = "ParametricGeometry", this.parameters = {
      func: s,
      slices: t,
      stacks: e
    };
    const n = [], a = [], o = [], i = [], l = 1e-5, d = new T(), f = new T(), h = new T(), w = new T(), p = new T();
    s.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
    const g = t + 1;
    for (let M = 0; M <= e; M++) {
      const y = M / e;
      for (let v = 0; v <= t; v++) {
        const E = v / t;
        s(E, y, f), a.push(f.x, f.y, f.z), E - l >= 0 ? (s(E - l, y, h), w.subVectors(f, h)) : (s(E + l, y, h), w.subVectors(h, f)), y - l >= 0 ? (s(E, y - l, h), p.subVectors(f, h)) : (s(E, y + l, h), p.subVectors(h, f)), d.crossVectors(w, p).normalize(), o.push(d.x, d.y, d.z), i.push(E, y);
      }
    }
    for (let M = 0; M < e; M++)
      for (let y = 0; y < t; y++) {
        const v = M * g + y, E = M * g + y + 1, L = (M + 1) * g + y + 1, A = (M + 1) * g + y;
        n.push(v, E, A), n.push(E, L, A);
      }
    this.setIndex(n), this.setAttribute("position", new ne(a, 3)), this.setAttribute("normal", new ne(o, 3)), this.setAttribute("uv", new ne(i, 2));
  }
}
const he = {
  klein: function(r, s, t) {
    s *= Math.PI, r *= 2 * Math.PI, s = s * 2;
    let e, n;
    s < Math.PI ? (e = 3 * Math.cos(s) * (1 + Math.sin(s)) + 2 * (1 - Math.cos(s) / 2) * Math.cos(s) * Math.cos(r), n = -8 * Math.sin(s) - 2 * (1 - Math.cos(s) / 2) * Math.sin(s) * Math.cos(r)) : (e = 3 * Math.cos(s) * (1 + Math.sin(s)) + 2 * (1 - Math.cos(s) / 2) * Math.cos(r + Math.PI), n = -8 * Math.sin(s));
    const a = -2 * (1 - Math.cos(s) / 2) * Math.sin(r);
    t.set(e, a, n);
  },
  plane: function(r, s) {
    return function(t, e, n) {
      const a = t * r, o = 0, i = e * s;
      n.set(a, o, i);
    };
  },
  mobius: function(r, s, t) {
    r = r - 0.5;
    const e = 2 * Math.PI * s, n = 2, a = Math.cos(e) * (n + r * Math.cos(e / 2)), o = Math.sin(e) * (n + r * Math.cos(e / 2)), i = r * Math.sin(e / 2);
    t.set(a, o, i);
  },
  mobius3d: function(r, s, t) {
    r *= Math.PI, s *= 2 * Math.PI, r = r * 2;
    const e = r / 2, n = 2.25, a = 0.125, o = 0.65;
    let i = a * Math.cos(s) * Math.cos(e) - o * Math.sin(s) * Math.sin(e);
    const l = a * Math.cos(s) * Math.sin(e) + o * Math.sin(s) * Math.cos(e), d = (n + i) * Math.sin(r);
    i = (n + i) * Math.cos(r), t.set(i, d, l);
  }
};
he.TubeGeometry = class extends Ae {
  constructor(s, t = 64, e = 1, n = 8, a = !1) {
    const o = t + 1, i = s.computeFrenetFrames(t, a), l = i.tangents, d = i.normals, f = i.binormals, h = new T();
    function w(p, g, M) {
      g *= 2 * Math.PI;
      const y = Math.floor(p * (o - 1));
      s.getPointAt(p, h);
      const v = d[y], E = f[y], L = -e * Math.cos(g), A = e * Math.sin(g);
      h.x += L * v.x + A * E.x, h.y += L * v.y + A * E.y, h.z += L * v.z + A * E.z, M.copy(h);
    }
    super(w, t, n), this.tangents = l, this.normals = d, this.binormals = f, this.path = s, this.segments = t, this.radius = e, this.segmentsRadius = n, this.closed = a;
  }
};
he.TorusKnotGeometry = class extends he.TubeGeometry {
  constructor(s = 200, t = 40, e = 64, n = 8, a = 2, o = 3) {
    class i extends $t {
      getPoint(w, p = new T()) {
        const g = p;
        w *= Math.PI * 2;
        const M = 0.5, y = (1 + M * Math.cos(o * w)) * Math.cos(a * w), v = (1 + M * Math.cos(o * w)) * Math.sin(a * w), E = M * Math.sin(o * w);
        return g.set(y, v, E).multiplyScalar(s);
      }
    }
    const l = e, d = n, f = new i();
    super(f, l, t, d, !0, !1), this.radius = s, this.tube = t, this.segmentsT = e, this.segmentsR = n, this.p = a, this.q = o;
  }
};
he.SphereGeometry = class extends Ae {
  constructor(s, t, e) {
    function n(a, o, i) {
      a *= Math.PI, o *= 2 * Math.PI;
      const l = s * Math.sin(a) * Math.cos(o), d = s * Math.sin(a) * Math.sin(o), f = s * Math.cos(a);
      i.set(l, d, f);
    }
    super(n, t, e);
  }
};
he.PlaneGeometry = class extends Ae {
  constructor(s, t, e, n) {
    function a(o, i, l) {
      const d = o * s, f = 0, h = i * t;
      l.set(d, f, h);
    }
    super(a, e, n);
  }
};
const Bn = {
  name: "Parametriceometry",
  render: () => null
}, $n = /* @__PURE__ */ O({
  ...Bn,
  props: {
    name: { default: "" },
    function: { type: Function, default: he.klein },
    slices: { default: 8 },
    stacks: { default: 8 }
  },
  setup(r, { expose: s }) {
    const t = r;
    function e(l, d, f) {
      return new Ae(l, d, f);
    }
    const n = F(new D());
    n.name = t.name;
    const a = b("mesh", null);
    a && (a.geometry = n);
    const o = b("addGeometry");
    o(n);
    function i() {
      const l = e(t.function, t.slices, t.stacks);
      W(n, l);
    }
    return i(), m(t, "function", i), m(t, "stacks", i), m(t, "slices", i), s({ three: n }), { props: t, makePlane: e, three: n, mesh: a, addGeometry: o, redoGeometry: i };
  }
}), Un = {
  name: "PlaneGeometry",
  render: () => null
}, Vn = /* @__PURE__ */ O({
  ...Un,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(r, { expose: s }) {
    const t = r;
    function e(l, d, f, h) {
      return new Ut(l, d, f, h);
    }
    const n = F(new D());
    n.name = t.name;
    const a = b("mesh", null);
    a && (a.geometry = n);
    const o = b("addGeometry");
    o(n);
    function i() {
      const l = e(t.width, t.height, t.widthSegments, t.heightSegments);
      W(n, l);
    }
    return i(), m(t, "width", i), m(t, "height", i), m(t, "widthSegments", i), m(t, "heightSegments", i), s({ three: n }), { props: t, makePlane: e, three: n, mesh: a, addGeometry: o, redoGeometry: i };
  }
}), Fn = {
  name: "RingGeometry",
  render: () => null
}, Yn = /* @__PURE__ */ O({
  ...Fn,
  props: {
    name: { default: "" },
    innerRadius: { default: 0.5 },
    outerRadius: { default: 1 },
    thetaSegments: { default: 32 },
    phiSegments: { default: 1 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(r, { expose: s }) {
    const t = r;
    function e(l, d, f, h, w, p) {
      return new Vt(l, d, f, h, w, p);
    }
    const n = F(new D());
    n.name = t.name;
    const a = b("mesh", null);
    a && (a.geometry = n);
    const o = b("addGeometry");
    o(n);
    function i() {
      const l = e(
        t.innerRadius,
        t.outerRadius,
        t.thetaSegments,
        t.phiSegments,
        t.thetaStart,
        t.thetaLength
      );
      W(n, l);
    }
    return i(), m(t, "innerRadius", i), m(t, "outerRadius", i), m(t, "thetaSegments", i), m(t, "phiSegments", i), m(t, "thetaStart", i), m(t, "thetaLength", i), s({ three: n }), { props: t, makeRing: e, three: n, mesh: a, addGeometry: o, redoGeometry: i };
  }
}), Zn = {
  name: "SphereGeometry",
  render: () => null
}, Hn = /* @__PURE__ */ O({
  ...Zn,
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
  setup(r, { expose: s }) {
    const t = r;
    function e(l, d, f, h, w, p, g) {
      return new Ft(l, d, f, h, w, p, g);
    }
    const n = F(new D());
    n.name = t.name;
    const a = b("mesh", null);
    a && (a.geometry = n);
    const o = b("addGeometry");
    o(n);
    function i() {
      const l = e(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength
      );
      W(n, l);
    }
    return i(), m(t, "radius", i), m(t, "widthSegments", i), m(t, "heightSegments", i), m(t, "phiStart", i), m(t, "phiLength", i), m(t, "thetaStart", i), m(t, "thetaLength", i), s({ three: n }), { props: t, makeSphere: e, three: n, mesh: a, addGeometry: o, redoGeometry: i };
  }
}), Xn = {
  name: "WireframeGeometry",
  render: () => null
}, Kn = /* @__PURE__ */ O({
  ...Xn,
  props: {
    geometry: null
  },
  setup(r, { expose: s }) {
    const t = r, e = F(new D()), n = b("mesh", null);
    n && (n.geometry = e);
    const a = b("getGeometry"), o = b("addGeometry");
    o(e);
    function i() {
      const f = new Yt(a(t.geometry));
      W(e, f);
      const h = n;
      "isLine" in h && h.computeLineDistances();
    }
    let l = C(
      a(t.geometry),
      () => {
        i();
      },
      { deep: !0, immediate: !0 }
    );
    m(t, "geometry", () => {
      l(), l = C(
        a(t.geometry),
        () => {
          i();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const d = () => {
      a(t.geometry) === void 0 ? xe(() => d) : i();
    };
    return xe(() => d), s({ three: e }), { props: t, three: e, mesh: n, getGeometry: a, addGeometry: o, redoGeometry: i, get unwatch() {
      return l;
    }, set unwatch(f) {
      l = f;
    }, waitUntilGeometryChanged: d };
  }
}), Wn = {
  name: "LineBasicMaterial",
  render: () => null
}, qn = /* @__PURE__ */ O({
  ...Wn,
  props: {
    color: { default: 16777215 },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = new ce({ color: t.color });
    e.name = t.name;
    const n = b("addMaterial");
    n(e);
    const a = b("mesh", null);
    a && (a.material = e);
    function o() {
      t.color && (e.color = new ae(t.color)), e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return o(), m(t, "color", o), m(t, "opacity", o), m(t, "transparent", o), z("material", e), s({ three: e }), { props: t, three: e, addMaterial: n, mesh: a, applyProps: o };
  }
}), Qn = {
  name: "LineDashedMaterial",
  render: () => null
}, Jn = /* @__PURE__ */ O({
  ...Qn,
  props: {
    color: { default: 16777215 },
    scale: { default: 1 },
    dashSize: { default: 3 },
    gapSize: { default: 1 },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = new Zt({ color: t.color });
    e.name = t.name;
    const n = b("addMaterial");
    n(e);
    const a = b("mesh", null);
    a && (a.material = e);
    function o() {
      e.color = new ae(t.color), e.scale = t.scale, e.dashSize = t.dashSize, e.gapSize = t.gapSize, e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return o(), m(t, "color", o), m(t, "scale", o), m(t, "dashSize", o), m(t, "gapSize", o), m(t, "opacity", o), m(t, "transparent", o), z("material", e), s({ three: e }), { props: t, three: e, addMaterial: n, mesh: a, applyProps: o };
  }
}), eo = {
  name: "MeshBasicMaterial"
}, to = /* @__PURE__ */ O({
  ...eo,
  props: {
    color: null,
    side: { default: He },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = new Ze();
    e.name = t.name, b("addMaterial")(e);
    const a = b("mesh", null);
    a && (a.material = e);
    function o() {
      t.color !== void 0 && (e.color = new ae(t.color)), e.side = t.side, e.opacity = t.opacity, e.transparent = t.transparent, e.vertexColors = t.vertexColors, e.needsUpdate = !0;
    }
    return o(), z("material", e), m(t, "color", o), m(t, "side", o), m(t, "opacity", o), m(t, "transparent", o), m(t, "vertexColors", o), s({ three: e }), (i, l) => U(i.$slots, "default");
  }
}), no = {
  name: "MeshLambertMaterial"
}, oo = /* @__PURE__ */ O({
  ...no,
  props: {
    color: { default: 16777215 },
    name: { default: "" },
    side: { default: He },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = new Ht();
    e.name = t.name, b("addMaterial")(e);
    const a = b("mesh", null);
    a && (a.material = e);
    function o(i) {
      i.color && (e.color = new ae(i.color)), i.side && (e.side = i.side);
    }
    return o(t), C(
      () => t.color,
      () => o(t)
    ), C(
      () => t.side,
      () => o(t)
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
    ), z("material", e), s({ three: e }), (i, l) => U(i.$slots, "default");
  }
}), ao = {
  name: "PointsMaterial",
  render: () => null
}, so = /* @__PURE__ */ O({
  ...ao,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    name: { default: "" },
    size: { default: 1 },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = new pe({ color: t.color, sizeAttenuation: t.sizeAttenuation, size: t.size });
    e.name = t.name;
    const n = b("mesh", null), a = b("addMaterial");
    a(e), n && (n.material = e);
    function o() {
      e.color = new ae(t.color), e.size = t.size, e.sizeAttenuation = t.sizeAttenuation, e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return o(), m(t, "color", o), m(t, "size", o), m(t, "sizeAttenuation", o), m(t, "opacity", o), m(t, "transparent", o), z("material", e), s({ three: e }), { props: t, three: e, mesh: n, addMaterial: a, applyProps: o };
  }
}), ro = {
  name: "MeshNormalMaterial"
}, io = /* @__PURE__ */ O({
  ...ro,
  props: {
    side: { default: He },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = new Xt();
    e.name = t.name, b("addMaterial")(e);
    const a = b("mesh", null);
    return a && (a.material = e), C(
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
    ), z("material", e), s({ three: e }), (o, i) => U(o.$slots, "default");
  }
}), co = {
  name: "AmbientLight",
  render: () => null
}, lo = /* @__PURE__ */ O({
  ...co,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = b("scene"), n = new Kt();
    e.add(n);
    function a(o) {
      n.color = new ae(o.color), n.intensity = o.intensity;
    }
    return a(t), C(
      () => t.color,
      () => a(t)
    ), C(
      () => t.intensity,
      () => a(t)
    ), s({ three: n }), { props: t, scene: e, three: n, applyProps: a };
  }
}), uo = {
  name: "PointLight",
  render: () => null
}, mo = /* @__PURE__ */ O({
  ...uo,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const t = r, e = b("scene"), n = new Wt();
    e.add(n), x(t, "position", n), x(t, "rotation", n), x(t, "scale", n);
    function a(o) {
      n.color = new ae(o.color), n.intensity = o.intensity, n.castShadow = o.castShadow;
    }
    return a(t), C(
      () => t.color,
      () => a(t)
    ), C(
      () => t.intensity,
      () => a(t)
    ), C(
      () => t.castShadow,
      () => a(t)
    ), s({ three: n }), { props: t, scene: e, three: n, applyProps: a };
  }
}), po = {
  name: "TextureLoader",
  render: () => null
}, ho = /* @__PURE__ */ O({
  ...po,
  props: {
    url: null,
    wrapS: { default: rt },
    wrapT: { default: rt }
  },
  setup(r, { expose: s }) {
    const t = r, e = b("material"), n = se(new qt());
    function a() {
      new Qt().loadAsync(t.url).then((i) => {
        n.value = i, "map" in e && (e.map = n.value, e.needsUpdate = !0), o();
      });
    }
    function o() {
      n.value.wrapS = t.wrapS, n.value.wrapT = t.wrapT, n.value.needsUpdate = !0;
    }
    return a(), m(t, "url", a), m(t, "wrapS", o), m(t, "wrapT", o), s({ three: n }), { props: t, material: e, three: n, load: a, applyProps: o };
  }
});
function Mo(r) {
  r.component("Renderer", en), r.component("Scene", tn), r.component("PerspectiveCamera", on), r.component("OrthographicCamera", sn), r.component("OrbitControls", ln), r.component("TrackballControls", dn), r.component("Group", pn), r.component("InstancedMesh", hn), r.component("Line", fn), r.component("LineLoop", gn), r.component("LineSegments", yn), r.component("Mesh", bn), r.component("Points", wn), r.component("OBJLoader", Ln), r.component("AxesHelper", xn), r.component("BoxGeometry", On), r.component("BufferGeometry", Cn), r.component("CircleGeometry", zn), r.component("ConeGeometry", Rn), r.component("CylinderGeometry", Dn), r.component("EdgesGeometry", Nn), r.component("ParametricGeometry", $n), r.component("PlaneGeometry", Vn), r.component("RingGeometry", Yn), r.component("SphereGeometry", Hn), r.component("WireframeGeometry", Kn), r.component("LineBasicMaterial", qn), r.component("LineDashedMaterial", Jn), r.component("MeshBasicMaterial", to), r.component("MeshLambertMaterial", oo), r.component("PointsMaterial", so), r.component("MeshNormalMaterial", io), r.component("AmbientLight", lo), r.component("PointLight", mo), r.component("TextureLoader", ho);
}
export {
  lo as AmbientLight,
  xn as AxesHelper,
  On as BoxGeometry,
  Cn as BufferGeometry,
  zn as CircleGeometry,
  Rn as ConeGeometry,
  Dn as CylinderGeometry,
  Nn as EdgesGeometry,
  pn as Group,
  hn as InstancedMesh,
  fn as Line,
  qn as LineBasicMaterial,
  Jn as LineDashedMaterial,
  gn as LineLoop,
  yn as LineSegments,
  bn as Mesh,
  to as MeshBasicMaterial,
  oo as MeshLambertMaterial,
  io as MeshNormalMaterial,
  Ln as OBJLoader,
  ln as OrbitControls,
  sn as OrthographicCamera,
  $n as ParametricGeometry,
  on as PerspectiveCamera,
  Vn as PlaneGeometry,
  mo as PointLight,
  wn as Points,
  so as PointsMaterial,
  en as Renderer,
  Yn as RingGeometry,
  tn as Scene,
  Hn as SphereGeometry,
  ho as TextureLoader,
  dn as TrackballControls,
  Kn as WireframeGeometry,
  Mo as install
};

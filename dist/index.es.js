import { watch as P, inject as h, onMounted as _e, onUnmounted as Z, defineComponent as M, reactive as V, ref as ne, provide as A, openBlock as pt, createElementBlock as gt, Fragment as yt, renderSlot as k, createElementVNode as _t, nextTick as ce } from "vue";
import { Vector3 as z, Raycaster as $e, Vector2 as N, WebGLRenderer as bt, Scene as wt, Color as Y, PerspectiveCamera as vt, OrthographicCamera as Lt, EventDispatcher as Pt, MOUSE as Q, TOUCH as ee, Quaternion as je, Spherical as Ne, Group as be, BufferGeometry as R, LineBasicMaterial as X, Line as Mt, LineLoop as St, LineSegments as ge, MeshBasicMaterial as Qe, Mesh as ye, PointsMaterial as oe, Points as le, Loader as Et, FileLoader as xt, Float32BufferAttribute as te, Material as Ve, MeshPhongMaterial as At, AxesHelper as Ot, BoxGeometry as Ct, BufferAttribute as Ue, CircleGeometry as Tt, ConeGeometry as Gt, CylinderGeometry as Rt, EdgesGeometry as zt, PlaneGeometry as kt, RingGeometry as Dt, SphereGeometry as It, WireframeGeometry as Bt, LineDashedMaterial as $t, FrontSide as we, MeshLambertMaterial as jt, MeshNormalMaterial as Nt, AmbientLight as Vt, PointLight as Ut, ClampToEdgeWrapping as Fe, Texture as Ft, TextureLoader as Ht } from "three";
const He = (s) => s === void 0 ? new z(0, 0, 0) : "x" in s ? new z(s.x, s.y, s.z) : new z(s[0], s[1], s[2]), Ye = (s, r, e) => {
  e[s].isVector3 ? e[s].set(r.x, r.y, r.z) : "isEuler" in e[s] && e[s].setFromVector3(r);
}, v = (s, r, e, t = !0) => {
  if (e !== null) {
    if (s[r] !== void 0) {
      const n = He(s[r]);
      Ye(r, n, e);
    }
    t && P(
      () => s[r],
      () => {
        if (s[r] !== void 0) {
          const n = He(s[r]);
          Ye(r, n, e);
        }
      }
    );
  }
}, u = (s, r, e) => {
  P(
    () => s[r],
    () => {
      e();
    }
  );
};
function U(s, r) {
  r.hasAttribute("position") && (s.setAttribute("position", r.getAttribute("position")), s.attributes.position.needsUpdate = !0, s.computeVertexNormals(), s.computeBoundingBox(), s.computeBoundingSphere()), r.hasAttribute("normal") && (s.setAttribute("normal", r.getAttribute("normal")), s.attributes.normal.needsUpdate = !0), r.hasAttribute("uv") && (s.setAttribute("uv", r.getAttribute("uv")), s.attributes.uv.needsUpdate = !0), s.setIndex(r.getIndex());
}
function W(s) {
  if (s.children.length > 0)
    for (let r = s.children.length - 1; r >= 0; r--)
      W(s.children[r]);
  if (s.geometry && s.geometry.dispose(), s.material)
    if (s.material.length)
      for (let r = 0; r < s.material.length; ++r)
        s.material[r].map && s.material[r].map.dispose(), s.material[r].lightMap && s.material[r].lightMap.dispose(), s.material[r].bumpMap && s.material[r].bumpMap.dispose(), s.material[r].normalMap && s.material[r].normalMap.dispose(), s.material[r].specularMap && s.material[r].specularMap.dispose(), s.material[r].envMap && s.material[r].envMap.dispose(), s.material[r].dispose();
    else
      s.material.map && s.material.map.dispose(), s.material.lightMap && s.material.lightMap.dispose(), s.material.bumpMap && s.material.bumpMap.dispose(), s.material.normalMap && s.material.normalMap.dispose(), s.material.specularMap && s.material.specularMap.dispose(), s.material.envMap && s.material.envMap.dispose(), s.material.dispose();
  return s.removeFromParent(), !0;
}
function ae(s) {
  const r = h("scene"), e = h("parent", void 0);
  _e(() => {
    e ? e.add(s) : r.add(s);
  }), Z(() => {
    e ? e.remove(s) : r.remove(s);
  });
}
function Yt(s, r, e) {
  const t = h("camera"), n = h("canvas");
  h("scene");
  const o = (f) => {
    const y = new $e(), m = Ze(f);
    y.setFromCamera(m, t.value);
    const _ = y.intersectObjects(s);
    _.length > 0 && e("click", _, m);
  };
  let a = !1, i = [];
  const c = (f) => {
    const y = new $e(), m = Ze(f);
    y.setFromCamera(m, t.value);
    const _ = y.intersectObjects(s);
    _.length > 0 ? (i = _, a === !1 && e("mouseenter", _, m), a = !0, e("mousemove", _, m)) : (a && e("mouseleave", i, m), a = !1, i = []);
  };
  _e(() => {
    r.enableRaycasting && (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c));
  }), Z(() => {
    r.enableRaycasting && (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
  }), P(
    () => r.enableRaycasting,
    (f) => {
      f ? (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c)) : (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
    }
  );
}
function Ze(s) {
  const r = new N();
  return r.x = (s.pageX - s.currentTarget.offsetLeft) / s.currentTarget.offsetWidth * 2 - 1, r.y = -((s.pageY - s.currentTarget.offsetTop) / s.currentTarget.offsetHeight) * 2 + 1, r;
}
const Zt = /* @__PURE__ */ M({
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
  setup(s, { expose: r }) {
    const e = s;
    let t = null;
    const n = [], o = V([]);
    let a = ne(null);
    const i = ne([]), c = ne([]), f = ne();
    A("canvas", f);
    let y = Date.now(), m = 1e3 / e.frameLimit;
    P(
      () => e.camera,
      (p) => _(p)
    );
    const _ = (p) => {
      if (p) {
        const S = i.value.find((L) => L.name === p);
        S === void 0 && (a.value = null), a.value = S;
      } else
        a.value = i.value[0];
    };
    function d(p) {
      t !== null && (t.shadowMap.enabled = p.shadowMapEnabled, m = 1e3 / p.frameLimit);
    }
    _e(() => {
      t = new bt({ canvas: f.value, antialias: e.antialias, alpha: !0 }), t.setSize(1, 1), d(e), _(e.camera), new ResizeObserver((S) => {
        S.forEach((L) => {
          t && e.autoResize && t.setSize(L.contentRect.width, L.contentRect.height);
        });
      }).observe(f.value.parentElement), b();
    }), Z(() => {
      for (let p of n)
        W(p);
    });
    function b() {
      requestAnimationFrame(b);
      const p = Date.now(), S = p - y;
      if (!(m > -1 && S < m)) {
        if (y = p - S % m, e.onBeforeRender && e.onBeforeRender(), c.value.length > 0 && a.value)
          for (const L of c.value)
            L.value !== null && (L.value.object.uuid === a.value.uuid ? (L.value.enabled = !0, L.value.update()) : L.value.enabled = !1);
        if (a.value && t)
          for (const L of n)
            t.render(L, a.value);
      }
    }
    return d(e), P(
      () => e.shadowMapEnabled,
      () => d(e)
    ), P(
      () => e.frameLimit,
      () => d(e)
    ), A("addCamera", (p) => i.value.push(p)), A("addScene", (p) => n.push(p)), A("addGeometry", (p) => o.push(p)), A("getGeometry", (p) => o.find((S) => S.name === p)), A("addControls", (p) => c.value.push(p)), A("camera", a), r({ three: t }), (p, S) => (pt(), gt(yt, null, [
      k(p.$slots, "default"),
      _t("canvas", {
        ref_key: "canvas",
        ref: f
      }, null, 512)
    ], 64));
  }
}), Xt = /* @__PURE__ */ M({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(s, { expose: r }) {
    const e = s, t = new wt();
    A("scene", t), h("addScene")(t);
    function n(o) {
      o.background && (t.background = new Y(o.background));
    }
    return n(e), P(
      () => e.background,
      () => n(e)
    ), r({ three: t }), (o, a) => k(o.$slots, "default");
  }
}), Wt = {
  name: "PerspectiveCamera"
}, Kt = /* @__PURE__ */ M({
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
  setup(s, { expose: r }) {
    const e = s, t = new vt(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    h("addCamera")(t);
    const n = h("canvas");
    P(n, () => {
      const a = new ResizeObserver((i) => {
        i.forEach((c) => {
          e.autoResize && (t.aspect = c.contentRect.width / c.contentRect.height, t.updateProjectionMatrix());
        });
      });
      console.log(n.value), a.observe(n.value);
    }), v(e, "position", t), v(e, "up", t), v(e, "lookAt", t);
    function o() {
      t.name = e.name, e.autoResize || (t.aspect = e.aspect), t.near = e.near, t.far = e.far, t.updateProjectionMatrix();
    }
    return o(), u(e, "name", o), u(e, "aspect", o), u(e, "near", o), u(e, "far", o), A("parentCamera", t), r({ three: t }), (a, i) => k(a.$slots, "default");
  }
}), qt = {
  name: "OrthographicCamera"
}, Jt = /* @__PURE__ */ M({
  ...qt,
  props: {
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(s, { expose: r }) {
    const e = s, t = new Lt(-10, 10, 10, -10, 0.1, 1e3);
    t.lookAt(0, 0, 0), t.updateProjectionMatrix(), h("addCamera")(t);
    const n = h("canvas");
    P(n, () => {
      new ResizeObserver((i) => {
        i.forEach((c) => {
          const f = c.contentRect.width / c.contentRect.height;
          t.left = t.bottom * f, t.right = t.top * f, t.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), v(e, "position", t), v(e, "up", t), v(e, "lookAt", t);
    function o() {
      t.name = e.name, t.near = e.near, t.far = e.far, t.updateProjectionMatrix();
    }
    return o(), u(e, "name", o), u(e, "near", o), u(e, "far", o), A("parentCamera", t), r({ three: t }), (a, i) => k(a.$slots, "default");
  }
}), Xe = { type: "change" }, he = { type: "start" }, We = { type: "end" };
class Qt extends Pt {
  constructor(r, e) {
    super(), e === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), e === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = r, this.domElement = e, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new z(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Q.ROTATE, MIDDLE: Q.DOLLY, RIGHT: Q.PAN }, this.touches = { ONE: ee.ROTATE, TWO: ee.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
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
      t.target.copy(t.target0), t.object.position.copy(t.position0), t.object.zoom = t.zoom0, t.object.updateProjectionMatrix(), t.dispatchEvent(Xe), t.update(), o = n.NONE;
    }, this.update = function() {
      const l = new z(), g = new je().setFromUnitVectors(r.up, new z(0, 1, 0)), T = g.clone().invert(), G = new z(), j = new je(), J = 2 * Math.PI;
      return function() {
        const Be = t.object.position;
        l.copy(Be).sub(t.target), l.applyQuaternion(g), i.setFromVector3(l), t.autoRotate && o === n.NONE && K(se()), t.enableDamping ? (i.theta += c.theta * t.dampingFactor, i.phi += c.phi * t.dampingFactor) : (i.theta += c.theta, i.phi += c.phi);
        let F = t.minAzimuthAngle, H = t.maxAzimuthAngle;
        return isFinite(F) && isFinite(H) && (F < -Math.PI ? F += J : F > Math.PI && (F -= J), H < -Math.PI ? H += J : H > Math.PI && (H -= J), F <= H ? i.theta = Math.max(F, Math.min(H, i.theta)) : i.theta = i.theta > (F + H) / 2 ? Math.max(F, i.theta) : Math.min(H, i.theta)), i.phi = Math.max(t.minPolarAngle, Math.min(t.maxPolarAngle, i.phi)), i.makeSafe(), i.radius *= f, i.radius = Math.max(t.minDistance, Math.min(t.maxDistance, i.radius)), t.enableDamping === !0 ? t.target.addScaledVector(y, t.dampingFactor) : t.target.add(y), l.setFromSpherical(i), l.applyQuaternion(T), Be.copy(t.target).add(l), t.object.lookAt(t.target), t.enableDamping === !0 ? (c.theta *= 1 - t.dampingFactor, c.phi *= 1 - t.dampingFactor, y.multiplyScalar(1 - t.dampingFactor)) : (c.set(0, 0, 0), y.set(0, 0, 0)), f = 1, m || G.distanceToSquared(t.object.position) > a || 8 * (1 - j.dot(t.object.quaternion)) > a ? (t.dispatchEvent(Xe), G.copy(t.object.position), j.copy(t.object.quaternion), m = !1, !0) : !1;
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
    let o = n.NONE;
    const a = 1e-6, i = new Ne(), c = new Ne();
    let f = 1;
    const y = new z();
    let m = !1;
    const _ = new N(), d = new N(), b = new N(), p = new N(), S = new N(), L = new N(), C = new N(), E = new N(), O = new N(), w = [], D = {};
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
      _.set(l.clientX, l.clientY);
    }
    function et(l) {
      C.set(l.clientX, l.clientY);
    }
    function Me(l) {
      p.set(l.clientX, l.clientY);
    }
    function tt(l) {
      d.set(l.clientX, l.clientY), b.subVectors(d, _).multiplyScalar(t.rotateSpeed);
      const g = t.domElement;
      K(2 * Math.PI * b.x / g.clientHeight), x(2 * Math.PI * b.y / g.clientHeight), _.copy(d), t.update();
    }
    function nt(l) {
      E.set(l.clientX, l.clientY), O.subVectors(E, C), O.y > 0 ? ue(I()) : O.y < 0 && Le(I()), C.copy(E), t.update();
    }
    function ot(l) {
      S.set(l.clientX, l.clientY), L.subVectors(S, p).multiplyScalar(t.panSpeed), q(L.x, L.y), p.copy(S), t.update();
    }
    function at(l) {
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
        _.set(w[0].pageX, w[0].pageY);
      else {
        const l = 0.5 * (w[0].pageX + w[1].pageX), g = 0.5 * (w[0].pageY + w[1].pageY);
        _.set(l, g);
      }
    }
    function Ee() {
      if (w.length === 1)
        p.set(w[0].pageX, w[0].pageY);
      else {
        const l = 0.5 * (w[0].pageX + w[1].pageX), g = 0.5 * (w[0].pageY + w[1].pageY);
        p.set(l, g);
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
      b.subVectors(d, _).multiplyScalar(t.rotateSpeed);
      const g = t.domElement;
      K(2 * Math.PI * b.x / g.clientHeight), x(2 * Math.PI * b.y / g.clientHeight), _.copy(d);
    }
    function Oe(l) {
      if (w.length === 1)
        S.set(l.pageX, l.pageY);
      else {
        const g = fe(l), T = 0.5 * (l.pageX + g.x), G = 0.5 * (l.pageY + g.y);
        S.set(T, G);
      }
      L.subVectors(S, p).multiplyScalar(t.panSpeed), q(L.x, L.y), p.copy(S);
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
      t.enabled !== !1 && (w.length === 0 && (t.domElement.setPointerCapture(l.pointerId), t.domElement.addEventListener("pointermove", me), t.domElement.addEventListener("pointerup", de)), ht(l), l.pointerType === "touch" ? dt(l) : ut(l));
    }
    function me(l) {
      t.enabled !== !1 && (l.pointerType === "touch" ? ft(l) : mt(l));
    }
    function de(l) {
      De(l), w.length === 0 && (t.domElement.releasePointerCapture(l.pointerId), t.domElement.removeEventListener("pointermove", me), t.domElement.removeEventListener("pointerup", de)), t.dispatchEvent(We), o = n.NONE;
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
          et(l), o = n.DOLLY;
          break;
        case Q.ROTATE:
          if (l.ctrlKey || l.metaKey || l.shiftKey) {
            if (t.enablePan === !1)
              return;
            Me(l), o = n.PAN;
          } else {
            if (t.enableRotate === !1)
              return;
            Pe(l), o = n.ROTATE;
          }
          break;
        case Q.PAN:
          if (l.ctrlKey || l.metaKey || l.shiftKey) {
            if (t.enableRotate === !1)
              return;
            Pe(l), o = n.ROTATE;
          } else {
            if (t.enablePan === !1)
              return;
            Me(l), o = n.PAN;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && t.dispatchEvent(he);
    }
    function mt(l) {
      if (t.enabled !== !1)
        switch (o) {
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
            ot(l);
            break;
        }
    }
    function Re(l) {
      t.enabled === !1 || t.enableZoom === !1 || o !== n.NONE || (l.preventDefault(), t.dispatchEvent(he), at(l), t.dispatchEvent(We));
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
              Se(), o = n.TOUCH_ROTATE;
              break;
            case ee.PAN:
              if (t.enablePan === !1)
                return;
              Ee(), o = n.TOUCH_PAN;
              break;
            default:
              o = n.NONE;
          }
          break;
        case 2:
          switch (t.touches.TWO) {
            case ee.DOLLY_PAN:
              if (t.enableZoom === !1 && t.enablePan === !1)
                return;
              rt(), o = n.TOUCH_DOLLY_PAN;
              break;
            case ee.DOLLY_ROTATE:
              if (t.enableZoom === !1 && t.enableRotate === !1)
                return;
              it(), o = n.TOUCH_DOLLY_ROTATE;
              break;
            default:
              o = n.NONE;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && t.dispatchEvent(he);
    }
    function ft(l) {
      switch (Ie(l), o) {
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
          o = n.NONE;
      }
    }
    function ke(l) {
      t.enabled !== !1 && l.preventDefault();
    }
    function ht(l) {
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
}, tn = /* @__PURE__ */ M({
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
  setup(s, { expose: r }) {
    const e = s, t = ne(null);
    h("addControls")(t);
    const n = h("parentCamera"), o = h("canvas");
    function a() {
      t.value != null && (t.value.enablePan = e.enablePan, t.value.enableRotate = e.enableRotate, t.value.enableZoom = e.enableZoom, t.value.minZoom = e.minZoom, t.value.maxZoom = e.maxZoom, t.value.minDistance = e.minDistance, t.value.maxDistance = e.maxDistance, t.value.minPolarAngle = e.minPolarAngle, t.value.maxPolarAngle = e.maxPolarAngle, t.value.minAzimuthAngle = e.minAzimuthAngle, t.value.maxAzimuthAngle = e.maxAzimuthAngle);
    }
    let i = !1;
    const c = () => {
      o.value && (i || (t.value = new Qt(n, o.value), a(), v(e, "target", t.value), i = !0));
    };
    return P(o, () => {
      c();
    }), a(), u(e, "enablePan", a), u(e, "enableRotate", a), u(e, "enableZoom", a), u(e, "minZoom", a), u(e, "maxZoom", a), u(e, "minDistance", a), u(e, "maxDistance", a), u(e, "minPolarAngle", a), u(e, "maxPolarAngle", a), u(e, "minAzimuthAngle", a), u(e, "maxAzimuthAngle", a), r({ three: t }), { props: e, three: t, camera: n, canvas: o, applyProps: a, get boundCamera() {
      return i;
    }, set boundCamera(f) {
      i = f;
    }, tryBindCamera: c };
  }
}), nn = /* @__PURE__ */ M({
  __name: "Group",
  props: {
    enableRaycasting: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  emits: ["click", "mousemove", "mouseenter", "mouseleave"],
  setup(s, { expose: r, emit: e }) {
    const t = s, n = new be();
    return ae(n), v(t, "position", n), v(t, "rotation", n), v(t, "scale", n), Yt(n.children, t, e), A("parent", n), r({ three: n }), (o, a) => k(o.$slots, "default");
  }
}), on = /* @__PURE__ */ M({
  __name: "Line",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("scene"), n = new R(), o = new X({ color: "black" }), a = new Mt(n, o);
    return ae(a), v(e, "position", a), v(e, "rotation", a), v(e, "scale", a), Z(() => {
      t.remove(a), W(a);
    }), A("mesh", a), r({ three: a }), (i, c) => k(i.$slots, "default");
  }
}), an = /* @__PURE__ */ M({
  __name: "LineLoop",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("scene"), n = new R(), o = new X({ color: "black" }), a = new St(n, o);
    return ae(a), v(e, "position", a), v(e, "rotation", a), v(e, "scale", a), Z(() => {
      t.remove(a), W(a);
    }), A("mesh", a), r({ three: a }), (i, c) => k(i.$slots, "default");
  }
}), sn = /* @__PURE__ */ M({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("scene"), n = new R(), o = new X({ color: "black" }), a = new ge(n, o);
    return ae(a), v(e, "position", a), v(e, "rotation", a), v(e, "scale", a), Z(() => {
      t.remove(a), W(a);
    }), A("mesh", a), r({ three: a }), (i, c) => k(i.$slots, "default");
  }
}), rn = /* @__PURE__ */ M({
  __name: "Mesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("scene"), n = new R(), o = new Qe(), a = new ye(n, o);
    a.castShadow = !0, a.receiveShadow = !0, ae(a), v(e, "position", a), v(e, "rotation", a), v(e, "scale", a);
    function i() {
      a.castShadow = e.castShadow, a.receiveShadow = e.receiveShadow;
    }
    return i(), u(e, "castShadow", i), u(e, "receiveShadow", i), Z(() => {
      t.remove(a), W(a);
    }), A("mesh", a), r({ three: a }), (c, f) => k(c.$slots, "default");
  }
}), ln = /* @__PURE__ */ M({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("scene"), n = new R(), o = new oe({ color: "red", sizeAttenuation: !1, size: 2 }), a = new le(n, o);
    return ae(a), v(e, "position", a), v(e, "rotation", a), v(e, "scale", a), Z(() => {
      t.remove(a), W(a);
    }), A("mesh", a), r({ three: a }), (i, c) => k(i.$slots, "default");
  }
}), cn = /^[og]\s*(.+)?/, un = /^mtllib /, mn = /^usemtl /, dn = /^usemap /, Ke = new z(), pe = new z(), qe = new z(), Je = new z(), B = new z(), ie = new Y();
function fn() {
  const s = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(r, e) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = r, this.object.fromDeclaration = e !== !1;
        return;
      }
      const t = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: r || "",
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
        startMaterial: function(n, o) {
          const a = this._finalize(!1);
          a && (a.inherited || a.groupCount <= 0) && this.materials.splice(a.index, 1);
          const i = {
            index: this.materials.length,
            name: n || "",
            mtllib: Array.isArray(o) && o.length > 0 ? o[o.length - 1] : "",
            smooth: a !== void 0 ? a.smooth : this.smooth,
            groupStart: a !== void 0 ? a.groupEnd : 0,
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
          const o = this.currentMaterial();
          if (o && o.groupEnd === -1 && (o.groupEnd = this.geometry.vertices.length / 3, o.groupCount = o.groupEnd - o.groupStart, o.inherited = !1), n && this.materials.length > 1)
            for (let a = this.materials.length - 1; a >= 0; a--)
              this.materials[a].groupCount <= 0 && this.materials.splice(a, 1);
          return n && this.materials.length === 0 && this.materials.push({
            name: "",
            smooth: this.smooth
          }), o;
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
    parseVertexIndex: function(r, e) {
      const t = parseInt(r, 10);
      return (t >= 0 ? t - 1 : t + e / 3) * 3;
    },
    parseNormalIndex: function(r, e) {
      const t = parseInt(r, 10);
      return (t >= 0 ? t - 1 : t + e / 3) * 3;
    },
    parseUVIndex: function(r, e) {
      const t = parseInt(r, 10);
      return (t >= 0 ? t - 1 : t + e / 2) * 2;
    },
    addVertex: function(r, e, t) {
      const n = this.vertices, o = this.object.geometry.vertices;
      o.push(n[r + 0], n[r + 1], n[r + 2]), o.push(n[e + 0], n[e + 1], n[e + 2]), o.push(n[t + 0], n[t + 1], n[t + 2]);
    },
    addVertexPoint: function(r) {
      const e = this.vertices;
      this.object.geometry.vertices.push(e[r + 0], e[r + 1], e[r + 2]);
    },
    addVertexLine: function(r) {
      const e = this.vertices;
      this.object.geometry.vertices.push(e[r + 0], e[r + 1], e[r + 2]);
    },
    addNormal: function(r, e, t) {
      const n = this.normals, o = this.object.geometry.normals;
      o.push(n[r + 0], n[r + 1], n[r + 2]), o.push(n[e + 0], n[e + 1], n[e + 2]), o.push(n[t + 0], n[t + 1], n[t + 2]);
    },
    addFaceNormal: function(r, e, t) {
      const n = this.vertices, o = this.object.geometry.normals;
      Ke.fromArray(n, r), pe.fromArray(n, e), qe.fromArray(n, t), B.subVectors(qe, pe), Je.subVectors(Ke, pe), B.cross(Je), B.normalize(), o.push(B.x, B.y, B.z), o.push(B.x, B.y, B.z), o.push(B.x, B.y, B.z);
    },
    addColor: function(r, e, t) {
      const n = this.colors, o = this.object.geometry.colors;
      n[r] !== void 0 && o.push(n[r + 0], n[r + 1], n[r + 2]), n[e] !== void 0 && o.push(n[e + 0], n[e + 1], n[e + 2]), n[t] !== void 0 && o.push(n[t + 0], n[t + 1], n[t + 2]);
    },
    addUV: function(r, e, t) {
      const n = this.uvs, o = this.object.geometry.uvs;
      o.push(n[r + 0], n[r + 1]), o.push(n[e + 0], n[e + 1]), o.push(n[t + 0], n[t + 1]);
    },
    addDefaultUV: function() {
      const r = this.object.geometry.uvs;
      r.push(0, 0), r.push(0, 0), r.push(0, 0);
    },
    addUVLine: function(r) {
      const e = this.uvs;
      this.object.geometry.uvs.push(e[r + 0], e[r + 1]);
    },
    addFace: function(r, e, t, n, o, a, i, c, f) {
      const y = this.vertices.length;
      let m = this.parseVertexIndex(r, y), _ = this.parseVertexIndex(e, y), d = this.parseVertexIndex(t, y);
      if (this.addVertex(m, _, d), this.addColor(m, _, d), i !== void 0 && i !== "") {
        const b = this.normals.length;
        m = this.parseNormalIndex(i, b), _ = this.parseNormalIndex(c, b), d = this.parseNormalIndex(f, b), this.addNormal(m, _, d);
      } else
        this.addFaceNormal(m, _, d);
      if (n !== void 0 && n !== "") {
        const b = this.uvs.length;
        m = this.parseUVIndex(n, b), _ = this.parseUVIndex(o, b), d = this.parseUVIndex(a, b), this.addUV(m, _, d), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(r) {
      this.object.geometry.type = "Points";
      const e = this.vertices.length;
      for (let t = 0, n = r.length; t < n; t++) {
        const o = this.parseVertexIndex(r[t], e);
        this.addVertexPoint(o), this.addColor(o);
      }
    },
    addLineGeometry: function(r, e) {
      this.object.geometry.type = "Line";
      const t = this.vertices.length, n = this.uvs.length;
      for (let o = 0, a = r.length; o < a; o++)
        this.addVertexLine(this.parseVertexIndex(r[o], t));
      for (let o = 0, a = e.length; o < a; o++)
        this.addUVLine(this.parseUVIndex(e[o], n));
    }
  };
  return s.startObject("", !1), s;
}
class hn extends Et {
  constructor(r) {
    super(r), this.materials = null;
  }
  load(r, e, t, n) {
    const o = this, a = new xt(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(r, function(i) {
      try {
        e(o.parse(i));
      } catch (c) {
        n ? n(c) : console.error(c), o.manager.itemError(r);
      }
    }, t, n);
  }
  setMaterials(r) {
    return this.materials = r, this;
  }
  parse(r) {
    const e = new fn();
    r.indexOf(`\r
`) !== -1 && (r = r.replace(/\r\n/g, `
`)), r.indexOf(`\\
`) !== -1 && (r = r.replace(/\\\n/g, ""));
    const t = r.split(`
`);
    let n = "", o = "", a = 0, i = [];
    const c = typeof "".trimLeft == "function";
    for (let m = 0, _ = t.length; m < _; m++)
      if (n = t[m], n = c ? n.trimLeft() : n.trim(), a = n.length, a !== 0 && (o = n.charAt(0), o !== "#"))
        if (o === "v") {
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
        } else if (o === "f") {
          const b = n.slice(1).trim().split(/\s+/), p = [];
          for (let L = 0, C = b.length; L < C; L++) {
            const E = b[L];
            if (E.length > 0) {
              const O = E.split("/");
              p.push(O);
            }
          }
          const S = p[0];
          for (let L = 1, C = p.length - 1; L < C; L++) {
            const E = p[L], O = p[L + 1];
            e.addFace(
              S[0],
              E[0],
              O[0],
              S[1],
              E[1],
              O[1],
              S[2],
              E[2],
              O[2]
            );
          }
        } else if (o === "l") {
          const d = n.substring(1).trim().split(" ");
          let b = [];
          const p = [];
          if (n.indexOf("/") === -1)
            b = d;
          else
            for (let S = 0, L = d.length; S < L; S++) {
              const C = d[S].split("/");
              C[0] !== "" && b.push(C[0]), C[1] !== "" && p.push(C[1]);
            }
          e.addLineGeometry(b, p);
        } else if (o === "p") {
          const b = n.slice(1).trim().split(" ");
          e.addPointGeometry(b);
        } else if ((i = cn.exec(n)) !== null) {
          const d = (" " + i[0].slice(1).trim()).slice(1);
          e.startObject(d);
        } else if (mn.test(n))
          e.object.startMaterial(n.substring(7).trim(), e.materialLibraries);
        else if (un.test(n))
          e.materialLibraries.push(n.substring(7).trim());
        else if (dn.test(n))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (o === "s") {
          if (i = n.split(" "), i.length > 1) {
            const b = i[1].trim().toLowerCase();
            e.object.smooth = b !== "0" && b !== "off";
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
    const f = new be();
    if (f.materialLibraries = [].concat(e.materialLibraries), !(e.objects.length === 1 && e.objects[0].geometry.vertices.length === 0) === !0)
      for (let m = 0, _ = e.objects.length; m < _; m++) {
        const d = e.objects[m], b = d.geometry, p = d.materials, S = b.type === "Line", L = b.type === "Points";
        let C = !1;
        if (b.vertices.length === 0)
          continue;
        const E = new R();
        E.setAttribute("position", new te(b.vertices, 3)), b.normals.length > 0 && E.setAttribute("normal", new te(b.normals, 3)), b.colors.length > 0 && (C = !0, E.setAttribute("color", new te(b.colors, 3))), b.hasUVIndices === !0 && E.setAttribute("uv", new te(b.uvs, 2));
        const O = [];
        for (let D = 0, se = p.length; D < se; D++) {
          const I = p[D], K = I.name + "_" + I.smooth + "_" + C;
          let x = e.materials[K];
          if (this.materials !== null) {
            if (x = this.materials.create(I.name), S && x && !(x instanceof X)) {
              const $ = new X();
              Ve.prototype.copy.call($, x), $.color.copy(x.color), x = $;
            } else if (L && x && !(x instanceof oe)) {
              const $ = new oe({ size: 10, sizeAttenuation: !1 });
              Ve.prototype.copy.call($, x), $.color.copy(x.color), $.map = x.map, x = $;
            }
          }
          x === void 0 && (S ? x = new X() : L ? x = new oe({ size: 1, sizeAttenuation: !1 }) : x = new At(), x.name = I.name, x.flatShading = !I.smooth, x.vertexColors = C, e.materials[K] = x), O.push(x);
        }
        let w;
        if (O.length > 1) {
          for (let D = 0, se = p.length; D < se; D++) {
            const I = p[D];
            E.addGroup(I.groupStart, I.groupCount, D);
          }
          S ? w = new ge(E, O) : L ? w = new le(E, O) : w = new ye(E, O);
        } else
          S ? w = new ge(E, O[0]) : L ? w = new le(E, O[0]) : w = new ye(E, O[0]);
        w.name = d.name, f.add(w);
      }
    else if (e.vertices.length > 0) {
      const m = new oe({ size: 1, sizeAttenuation: !1 }), _ = new R();
      _.setAttribute("position", new te(e.vertices, 3)), e.colors.length > 0 && e.colors[0] !== void 0 && (_.setAttribute("color", new te(e.colors, 3)), m.vertexColors = !0);
      const d = new le(_, m);
      f.add(d);
    }
    return f;
  }
}
const pn = /* @__PURE__ */ M({
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
  setup(s, { expose: r, emit: e }) {
    const t = s, n = new hn(), o = h("scene"), a = new be();
    a.castShadow = !0, a.receiveShadow = !0, o.add(a), v(t, "position", a), v(t, "rotation", a), v(t, "scale", a);
    function i() {
      n.load(
        t.url,
        function(c) {
          for (const f of c.children)
            a.add(f), f.material = a.material, v(t, "position", a, !1), v(t, "rotation", a, !1), v(t, "scale", a, !1);
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
    return i(), P(
      () => t.url,
      () => i()
    ), A("mesh", a), r({
      three: a
    }), (c, f) => k(c.$slots, "default");
  }
}), gn = /* @__PURE__ */ M({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("scene"), n = new Ot(e.size);
    return t.add(n), v(e, "position", n), v(e, "rotation", n), v(e, "scale", n), A("mesh", n), r({ three: n }), (o, a) => k(o.$slots, "default");
  }
}), yn = {
  name: "BoxGeometry",
  render: () => null
}, _n = /* @__PURE__ */ M({
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
  setup(s, { expose: r }) {
    const e = s, t = h("mesh");
    function n(c, f, y, m, _, d) {
      return new Ct(c, f, y, m, _, d);
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
    function i() {
      const c = n(
        e.width,
        e.height,
        e.depth,
        e.widthSegments,
        e.heightSegments,
        e.depthSegments
      );
      U(o, c);
    }
    return i(), u(e, "name", () => {
      o.name = e.name;
    }), u(e, "width", i), u(e, "height", i), u(e, "depth", i), u(e, "widthSegments", i), u(e, "heightSegments", i), u(e, "depthSegments", i), r({ three: o }), { props: e, mesh: t, makeBox: n, three: o, addGeometry: a, redoGeometry: i };
  }
}), bn = {
  name: "BufferGeometry",
  render: () => null
}, wn = /* @__PURE__ */ M({
  ...bn,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] },
    uvs: { default: () => [] }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("mesh");
    function n(c, f, y) {
      const m = new R(), _ = new Float32Array(c), d = new Float32Array(y);
      return m.setAttribute("position", new Ue(_, 3)), m.setAttribute("uv", new Ue(d, 2)), e.faces.length > 0 && m.setIndex(f), m;
    }
    const o = V(n(e.vertices, e.faces, e.uvs));
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
    function i(c, f, y) {
      const m = n(c, f, y);
      U(o, m);
    }
    return P(
      () => e.vertices,
      (c) => {
        i(c, e.faces, e.uvs);
      },
      { deep: !0, immediate: !0 }
    ), P(
      () => e.faces,
      (c) => {
        i(e.vertices, c, e.uvs);
      },
      { deep: !0, immediate: !0 }
    ), r({ three: o }), { props: e, mesh: t, makeGeometry: n, three: o, addGeometry: a, redoGeometry: i };
  }
}), vn = {
  name: "CircleGeometry",
  render: () => null
}, Ln = /* @__PURE__ */ M({
  ...vn,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    segments: { default: 32 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("mesh");
    function n(c, f, y, m) {
      return new Tt(c, f, y, m);
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
    function i() {
      const c = n(e.radius, e.segments, e.thetaStart, e.thetaLength);
      U(o, c);
    }
    return i(), u(e, "radius", i), u(e, "segments", i), u(e, "thetaStart", i), u(e, "thetaLength", i), r({ three: o }), { props: e, mesh: t, makeCircle: n, three: o, addGeometry: a, redoGeometry: i };
  }
}), Pn = {
  name: "ConeGeometry",
  render: () => null
}, Mn = /* @__PURE__ */ M({
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
  setup(s, { expose: r }) {
    const e = s, t = h("mesh");
    function n(c, f, y, m, _, d, b) {
      return new Gt(c, f, y, m, _, d, b);
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
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
      U(o, c);
    }
    return i(), u(e, "radius", i), u(e, "height", i), u(e, "radialSegments", i), u(e, "heightSegments", i), u(e, "openEnded", i), u(e, "thetaStart", i), u(e, "thetaLength", i), r({ three: o }), { props: e, mesh: t, makeCone: n, three: o, addGeometry: a, redoGeometry: i };
  }
}), Sn = {
  name: "CylinderGeometry",
  render: () => null
}, En = /* @__PURE__ */ M({
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
  setup(s, { expose: r }) {
    const e = s, t = h("mesh");
    function n(c, f, y, m, _, d, b, p) {
      return new Rt(
        c,
        f,
        y,
        m,
        _,
        d,
        b,
        p
      );
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
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
      U(o, c);
    }
    return i(), u(e, "radiusTop", i), u(e, "radiusBottom", i), u(e, "height", i), u(e, "radialSegments", i), u(e, "heightSegments", i), u(e, "openEnded", i), u(e, "thetaStart", i), u(e, "thetaLength", i), r({ three: o }), { props: e, mesh: t, makeCylinder: n, three: o, addGeometry: a, redoGeometry: i };
  }
}), xn = {
  name: "EdgesGeometry",
  render: () => null
}, An = /* @__PURE__ */ M({
  ...xn,
  props: {
    geometry: null
  },
  setup(s, { expose: r }) {
    const e = s, t = h("mesh"), n = V(new R());
    t.geometry = n;
    const o = h("getGeometry"), a = h("addGeometry");
    a(n);
    function i() {
      const y = new zt(o(e.geometry));
      U(n, y);
      const m = t;
      "isLine" in m && m.computeLineDistances();
    }
    let c = P(
      o(e.geometry),
      () => {
        i();
      },
      { deep: !0, immediate: !0 }
    );
    u(e, "geometry", () => {
      c(), c = P(
        o(e.geometry),
        () => {
          i();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const f = () => {
      o(e.geometry) === void 0 ? ce(() => f) : i();
    };
    return ce(() => f), r({ three: n }), { props: e, mesh: t, three: n, getGeometry: o, addGeometry: a, redoGeometry: i, get unwatch() {
      return c;
    }, set unwatch(y) {
      c = y;
    }, waitUntilGeometryChanged: f };
  }
}), On = {
  name: "PlaneGeometry",
  render: () => null
}, Cn = /* @__PURE__ */ M({
  ...On,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("mesh");
    function n(c, f, y, m) {
      return new kt(c, f, y, m);
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
    function i() {
      const c = n(e.width, e.height, e.widthSegments, e.heightSegments);
      U(o, c);
    }
    return i(), u(e, "width", i), u(e, "height", i), u(e, "widthSegments", i), u(e, "heightSegments", i), r({ three: o }), { props: e, mesh: t, makePlane: n, three: o, addGeometry: a, redoGeometry: i };
  }
}), Tn = {
  name: "RingGeometry",
  render: () => null
}, Gn = /* @__PURE__ */ M({
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
  setup(s, { expose: r }) {
    const e = s, t = h("mesh");
    function n(c, f, y, m, _, d) {
      return new Dt(c, f, y, m, _, d);
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
    function i() {
      const c = n(
        e.innerRadius,
        e.outerRadius,
        e.thetaSegments,
        e.phiSegments,
        e.thetaStart,
        e.thetaLength
      );
      U(o, c);
    }
    return i(), u(e, "innerRadius", i), u(e, "outerRadius", i), u(e, "thetaSegments", i), u(e, "phiSegments", i), u(e, "thetaStart", i), u(e, "thetaLength", i), r({ three: o }), { props: e, mesh: t, makeRing: n, three: o, addGeometry: a, redoGeometry: i };
  }
}), Rn = {
  name: "SphereGeometry",
  render: () => null
}, zn = /* @__PURE__ */ M({
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
  setup(s, { expose: r }) {
    const e = s, t = h("mesh");
    function n(c, f, y, m, _, d, b) {
      return new It(c, f, y, m, _, d, b);
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
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
      U(o, c);
    }
    return i(), u(e, "radius", i), u(e, "widthSegments", i), u(e, "heightSegments", i), u(e, "phiStart", i), u(e, "phiLength", i), u(e, "thetaStart", i), u(e, "thetaLength", i), r({ three: o }), { props: e, mesh: t, makeSphere: n, three: o, addGeometry: a, redoGeometry: i };
  }
}), kn = {
  name: "WireframeGeometry",
  render: () => null
}, Dn = /* @__PURE__ */ M({
  ...kn,
  props: {
    geometry: null
  },
  setup(s, { expose: r }) {
    const e = s, t = h("mesh"), n = V(new R());
    t.geometry = n;
    const o = h("getGeometry"), a = h("addGeometry");
    a(n);
    function i() {
      const y = new Bt(o(e.geometry));
      U(n, y);
      const m = t;
      "isLine" in m && m.computeLineDistances();
    }
    let c = P(
      o(e.geometry),
      () => {
        i();
      },
      { deep: !0, immediate: !0 }
    );
    u(e, "geometry", () => {
      c(), c = P(
        o(e.geometry),
        () => {
          i();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const f = () => {
      o(e.geometry) === void 0 ? ce(() => f) : i();
    };
    return ce(() => f), r({ three: n }), { props: e, mesh: t, three: n, getGeometry: o, addGeometry: a, redoGeometry: i, get unwatch() {
      return c;
    }, set unwatch(y) {
      c = y;
    }, waitUntilGeometryChanged: f };
  }
}), In = {
  name: "LineBasicMaterial",
  render: () => null
}, Bn = /* @__PURE__ */ M({
  ...In,
  props: {
    color: { default: 16777215 }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("mesh"), n = new X({ color: e.color });
    t.material = n;
    function o() {
      e.color && (n.color = new Y(e.color)), n.needsUpdate = !0;
    }
    return o(), u(e, "color", o), A("material", n), r({ three: n }), { props: e, mesh: t, three: n, applyProps: o };
  }
}), $n = {
  name: "LineDashedMaterial",
  render: () => null
}, jn = /* @__PURE__ */ M({
  ...$n,
  props: {
    color: { default: 16777215 },
    scale: { default: 1 },
    dashSize: { default: 3 },
    gapSize: { default: 1 }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("mesh"), n = new $t({ color: e.color });
    t.material = n;
    function o() {
      n.color = new Y(e.color), n.scale = e.scale, n.dashSize = e.dashSize, n.gapSize = e.gapSize, n.needsUpdate = !0;
    }
    return o(), u(e, "color", o), u(e, "scale", o), u(e, "dashSize", o), u(e, "gapSize", o), A("material", n), r({ three: n }), { props: e, mesh: t, three: n, applyProps: o };
  }
}), Nn = {
  name: "MeshBasicMaterial"
}, Vn = /* @__PURE__ */ M({
  ...Nn,
  props: {
    color: null,
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("mesh"), n = new Qe();
    t.material = n;
    function o() {
      e.color !== void 0 && (n.color = new Y(e.color)), n.side = e.side, n.opacity = e.opacity, n.transparent = e.transparent, n.vertexColors = e.vertexColors, n.needsUpdate = !0;
    }
    return o(), A("material", n), u(e, "color", o), u(e, "side", o), u(e, "opacity", o), u(e, "transparent", o), u(e, "vertexColors", o), r({ three: n }), (a, i) => k(a.$slots, "default");
  }
}), Un = {
  name: "MeshLambertMaterial"
}, Fn = /* @__PURE__ */ M({
  ...Un,
  props: {
    color: { default: 16777215 },
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("mesh"), n = new jt();
    t.material = n;
    function o(a) {
      a.color && (n.color = new Y(a.color)), a.side && (n.side = a.side);
    }
    return o(e), P(
      () => e.color,
      () => o(e)
    ), P(
      () => e.side,
      () => o(e)
    ), P(
      () => e.opacity,
      () => {
        n.opacity = e.opacity;
      },
      { immediate: !0 }
    ), P(
      () => e.transparent,
      () => {
        n.transparent = e.transparent;
      },
      { immediate: !0 }
    ), A("material", n), r({ three: n }), (a, i) => k(a.$slots, "default");
  }
}), Hn = {
  name: "PointsMaterial",
  render: () => null
}, Yn = /* @__PURE__ */ M({
  ...Hn,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("mesh"), n = new oe({ color: e.color, sizeAttenuation: e.sizeAttenuation, size: e.size });
    t.material = n;
    function o(a) {
      a.color && (n.color = new Y(a.color)), a.size && (n.size = a.size), a.sizeAttenuation !== void 0 && (n.sizeAttenuation = a.sizeAttenuation);
    }
    return o(e), P(
      () => e.color,
      () => o(e)
    ), P(
      () => e.size,
      () => o(e)
    ), P(
      () => e.sizeAttenuation,
      () => o(e)
    ), A("material", n), r({ three: n }), { props: e, mesh: t, three: n, applyProps: o };
  }
}), Zn = {
  name: "MeshNormalMaterial"
}, Xn = /* @__PURE__ */ M({
  ...Zn,
  props: {
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("mesh"), n = new Nt();
    return t.material = n, P(
      () => e.side,
      () => {
        n.side = e.side;
      },
      { immediate: !0 }
    ), P(
      () => e.opacity,
      () => {
        n.opacity = e.opacity;
      },
      { immediate: !0 }
    ), P(
      () => e.transparent,
      () => {
        n.transparent = e.transparent;
      },
      { immediate: !0 }
    ), A("material", n), r({ three: n }), (o, a) => k(o.$slots, "default");
  }
}), Wn = {
  name: "AmbientLight",
  render: () => null
}, Kn = /* @__PURE__ */ M({
  ...Wn,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("scene"), n = new Vt();
    t.add(n);
    function o(a) {
      n.color = new Y(a.color), n.intensity = a.intensity;
    }
    return o(e), P(
      () => e.color,
      () => o(e)
    ), P(
      () => e.intensity,
      () => o(e)
    ), r({ three: n }), { props: e, scene: t, three: n, applyProps: o };
  }
}), qn = {
  name: "PointLight",
  render: () => null
}, Jn = /* @__PURE__ */ M({
  ...qn,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("scene"), n = new Ut();
    t.add(n), v(e, "position", n), v(e, "rotation", n), v(e, "scale", n);
    function o(a) {
      n.color = new Y(a.color), n.intensity = a.intensity, n.castShadow = a.castShadow;
    }
    return o(e), P(
      () => e.color,
      () => o(e)
    ), P(
      () => e.intensity,
      () => o(e)
    ), P(
      () => e.castShadow,
      () => o(e)
    ), r({ three: n }), { props: e, scene: t, three: n, applyProps: o };
  }
}), Qn = {
  name: "TextureLoader",
  render: () => null
}, eo = /* @__PURE__ */ M({
  ...Qn,
  props: {
    url: null,
    wrapS: { default: Fe },
    wrapT: { default: Fe }
  },
  setup(s, { expose: r }) {
    const e = s, t = h("material"), n = ne(new Ft());
    function o() {
      n.value = new Ht().load(e.url), "map" in t && (t.map = n.value), a();
    }
    function a() {
      n.value.wrapS = e.wrapS, n.value.wrapT = e.wrapT, n.value.needsUpdate = !0;
    }
    return o(), u(e, "url", o), u(e, "wrapS", a), u(e, "wrapT", a), r({ three: n }), { props: e, material: t, three: n, load: o, applyProps: a };
  }
});
function oo(s) {
  s.component("Renderer", Zt), s.component("Scene", Xt), s.component("PerspectiveCamera", Kt), s.component("OrthographicCamera", Jt), s.component("OrbitControls", tn), s.component("Group", nn), s.component("Line", on), s.component("LineLoop", an), s.component("LineSegments", sn), s.component("Mesh", rn), s.component("Points", ln), s.component("OBJLoader", pn), s.component("AxesHelper", gn), s.component("BoxGeometry", _n), s.component("BufferGeometry", wn), s.component("CircleGeometry", Ln), s.component("ConeGeometry", Mn), s.component("CylinderGeometry", En), s.component("EdgesGeometry", An), s.component("PlaneGeometry", Cn), s.component("RingGeometry", Gn), s.component("SphereGeometry", zn), s.component("WireframeGeometry", Dn), s.component("LineBasicMaterial", Bn), s.component("LineDashedMaterial", jn), s.component("MeshBasicMaterial", Vn), s.component("MeshLambertMaterial", Fn), s.component("PointsMaterial", Yn), s.component("MeshNormalMaterial", Xn), s.component("AmbientLight", Kn), s.component("PointLight", Jn), s.component("TextureLoader", eo);
}
export {
  Kn as AmbientLight,
  gn as AxesHelper,
  _n as BoxGeometry,
  wn as BufferGeometry,
  Ln as CircleGeometry,
  Mn as ConeGeometry,
  En as CylinderGeometry,
  An as EdgesGeometry,
  nn as Group,
  on as Line,
  Bn as LineBasicMaterial,
  jn as LineDashedMaterial,
  an as LineLoop,
  sn as LineSegments,
  rn as Mesh,
  Vn as MeshBasicMaterial,
  Fn as MeshLambertMaterial,
  Xn as MeshNormalMaterial,
  pn as OBJLoader,
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
  eo as TextureLoader,
  Dn as WireframeGeometry,
  oo as install
};

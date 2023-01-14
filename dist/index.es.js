import { watch as _, inject as y, onMounted as ae, onUnmounted as ee, defineComponent as L, reactive as H, ref as J, provide as S, openBlock as ht, createElementBlock as pt, Fragment as gt, renderSlot as G, createElementVNode as yt, nextTick as ce } from "vue";
import { Vector3 as z, Raycaster as Ne, Vector2 as B, WebGLRenderer as bt, Scene as vt, Color as U, PerspectiveCamera as wt, OrthographicCamera as _t, EventDispatcher as Pt, MOUSE as W, TOUCH as K, Quaternion as Be, Spherical as $e, Group as ve, BufferGeometry as $, LineBasicMaterial as oe, LineSegments as ye, MeshBasicMaterial as Je, Mesh as be, PointsMaterial as Q, Points as le, Loader as Mt, FileLoader as xt, Float32BufferAttribute as q, Material as Ve, MeshPhongMaterial as At, AxesHelper as Lt, BoxGeometry as Et, BufferAttribute as Fe, EdgesGeometry as St, PlaneGeometry as Ot, SphereGeometry as Tt, WireframeGeometry as Ct, FrontSide as we, MeshLambertMaterial as Rt, MeshNormalMaterial as zt, AmbientLight as kt, PointLight as Dt, Texture as Gt, TextureLoader as It } from "three";
const Ue = (s) => s === void 0 ? new z(0, 0, 0) : "x" in s ? new z(s.x, s.y, s.z) : new z(s[0], s[1], s[2]), He = (s, a, t) => {
  t[s].isVector3 ? t[s].set(a.x, a.y, a.z) : "isEuler" in t[s] && t[s].setFromVector3(a);
}, x = (s, a, t, e = !0) => {
  if (t !== null) {
    if (s[a] !== void 0) {
      const n = Ue(s[a]);
      He(a, n, t);
    }
    e && _(
      () => s[a],
      () => {
        if (s[a] !== void 0) {
          const n = Ue(s[a]);
          He(a, n, t);
        }
      }
    );
  }
}, w = (s, a, t) => {
  _(
    () => s[a],
    () => {
      t();
    }
  );
};
function te(s, a) {
  a.hasAttribute("position") && (s.setAttribute("position", a.getAttribute("position")), s.attributes.position.needsUpdate = !0, s.computeVertexNormals(), s.computeBoundingBox(), s.computeBoundingSphere()), a.hasAttribute("normal") && (s.setAttribute("normal", a.getAttribute("normal")), s.attributes.normal.needsUpdate = !0), a.hasAttribute("uv") && (s.setAttribute("uv", a.getAttribute("uv")), s.attributes.uv.needsUpdate = !0), s.setIndex(a.getIndex());
}
function se(s) {
  if (s.children.length > 0)
    for (let a = s.children.length - 1; a >= 0; a--)
      se(s.children[a]);
  if (s.geometry && s.geometry.dispose(), s.material)
    if (s.material.length)
      for (let a = 0; a < s.material.length; ++a)
        s.material[a].map && s.material[a].map.dispose(), s.material[a].lightMap && s.material[a].lightMap.dispose(), s.material[a].bumpMap && s.material[a].bumpMap.dispose(), s.material[a].normalMap && s.material[a].normalMap.dispose(), s.material[a].specularMap && s.material[a].specularMap.dispose(), s.material[a].envMap && s.material[a].envMap.dispose(), s.material[a].dispose();
    else
      s.material.map && s.material.map.dispose(), s.material.lightMap && s.material.lightMap.dispose(), s.material.bumpMap && s.material.bumpMap.dispose(), s.material.normalMap && s.material.normalMap.dispose(), s.material.specularMap && s.material.specularMap.dispose(), s.material.envMap && s.material.envMap.dispose(), s.material.dispose();
  return s.removeFromParent(), !0;
}
function ue(s) {
  const a = y("scene"), t = y("parent", void 0);
  ae(() => {
    t ? t.add(s) : a.add(s);
  }), ee(() => {
    t ? t.remove(s) : a.remove(s);
  });
}
function jt(s, a, t) {
  const e = y("camera"), n = y("canvas");
  y("scene");
  const o = (m) => {
    const v = new Ne(), d = Ye(m);
    v.setFromCamera(d, e.value);
    const g = v.intersectObjects(s);
    g.length > 0 && t("click", g, d);
  };
  let i = !1, l = [];
  const c = (m) => {
    const v = new Ne(), d = Ye(m);
    v.setFromCamera(d, e.value);
    const g = v.intersectObjects(s);
    g.length > 0 ? (l = g, i === !1 && t("mouseenter", g, d), i = !0, t("mousemove", g, d)) : (i && t("mouseleave", l, d), i = !1, l = []);
  };
  ae(() => {
    a.enableRaycasting && (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c));
  }), ee(() => {
    a.enableRaycasting && (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
  }), _(
    () => a.enableRaycasting,
    (m) => {
      m ? (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c)) : (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
    }
  );
}
function Ye(s) {
  const a = new B();
  return a.x = (s.pageX - s.currentTarget.offsetLeft) / s.currentTarget.offsetWidth * 2 - 1, a.y = -((s.pageY - s.currentTarget.offsetTop) / s.currentTarget.offsetHeight) * 2 + 1, a;
}
const Nt = /* @__PURE__ */ L({
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
  setup(s, { expose: a }) {
    const t = s;
    let e = null;
    const n = [], o = H([]);
    let i = J(null);
    const l = J([]), c = J([]), m = J();
    S("canvas", m);
    let v = Date.now(), d = 1e3 / t.frameLimit;
    _(
      () => t.camera,
      (h) => g(h)
    );
    const g = (h) => {
      if (h) {
        const M = l.value.find((P) => P.name === h);
        M === void 0 && (i.value = null), i.value = M;
      } else
        i.value = l.value[0];
    };
    function u(h) {
      e !== null && (e.shadowMap.enabled = h.shadowMapEnabled, d = 1e3 / h.frameLimit);
    }
    ae(() => {
      e = new bt({ canvas: m.value, antialias: t.antialias, alpha: !0 }), e.setSize(1, 1), u(t), g(t.camera), new ResizeObserver((M) => {
        M.forEach((P) => {
          e && t.autoResize && e.setSize(P.contentRect.width, P.contentRect.height);
        });
      }).observe(m.value.parentElement), p();
    }), ee(() => {
      for (let h of n)
        se(h);
    });
    function p() {
      requestAnimationFrame(p);
      const h = Date.now(), M = h - v;
      if (!(d > -1 && M < d)) {
        if (v = h - M % d, t.onBeforeRender && t.onBeforeRender(), c.value.length > 0 && i)
          for (const P of c.value)
            P.value !== null && (P.value.object.uuid === i.value.uuid ? (P.value.enabled = !0, P.value.update()) : P.value.enabled = !1);
        if (i && e)
          for (const P of n)
            e.render(P, i.value);
      }
    }
    return u(t), _(
      () => t.shadowMapEnabled,
      () => u(t)
    ), _(
      () => t.frameLimit,
      () => u(t)
    ), S("addCamera", (h) => l.value.push(h)), S("addScene", (h) => n.push(h)), S("addGeometry", (h) => o.push(h)), S("getGeometry", (h) => o.find((M) => M.name === h)), S("addControls", (h) => c.value.push(h)), S("camera", i), a({ three: e }), (h, M) => (ht(), pt(gt, null, [
      G(h.$slots, "default"),
      yt("canvas", {
        ref_key: "canvas",
        ref: m
      }, null, 512)
    ], 64));
  }
}), Bt = /* @__PURE__ */ L({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(s, { expose: a }) {
    const t = s, e = new vt();
    S("scene", e), y("addScene")(e);
    function n(o) {
      o.background && (e.background = new U(o.background));
    }
    return n(t), _(
      () => t.background,
      () => n(t)
    ), a({ three: e }), (o, i) => G(o.$slots, "default");
  }
}), $t = {
  name: "PerspectiveCamera"
}, Vt = /* @__PURE__ */ L({
  ...$t,
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
  setup(s, { expose: a }) {
    const t = s, e = new wt(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    y("addCamera")(e);
    const n = y("canvas");
    ae(() => {
      t.name && (e.name = t.name), new ResizeObserver((l) => {
        l.forEach((c) => {
          t.autoResize && (e.aspect = c.contentRect.width / c.contentRect.height, e.updateProjectionMatrix());
        });
      }).observe(n.value);
    }), x(t, "position", e), x(t, "up", e), x(t, "lookAt", e);
    function o() {
      t.autoResize || (e.aspect = t.aspect), e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return o(), w(t, "aspect", o), w(t, "near", o), w(t, "far", o), S("parentCamera", e), a({ three: e }), (i, l) => G(i.$slots, "default");
  }
}), Ft = {
  name: "OrthographicCamera"
}, Ut = /* @__PURE__ */ L({
  ...Ft,
  props: {
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(s, { expose: a }) {
    const t = s, e = new _t(-10, 10, 10, -10, 0.1, 1e3);
    e.lookAt(0, 0, 0), e.updateProjectionMatrix(), y("addCamera")(e);
    const n = y("canvas");
    ae(() => {
      t.name && (e.name = t.name), new ResizeObserver((l) => {
        l.forEach((c) => {
          const m = c.contentRect.width / c.contentRect.height;
          e.left = e.bottom * m, e.right = e.top * m, e.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), x(t, "position", e), x(t, "up", e), x(t, "lookAt", e);
    function o() {
      e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return o(), w(t, "near", o), w(t, "far", o), S("parentCamera", e), a({ three: e }), (i, l) => G(i.$slots, "default");
  }
}), Ze = { type: "change" }, pe = { type: "start" }, Xe = { type: "end" };
class Ht extends Pt {
  constructor(a, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = a, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new z(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: W.ROTATE, MIDDLE: W.DOLLY, RIGHT: W.PAN }, this.touches = { ONE: K.ROTATE, TWO: K.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return l.phi;
    }, this.getAzimuthalAngle = function() {
      return l.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(r) {
      r.addEventListener("keydown", ke), this._domElementKeyEvents = r;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(Ze), e.update(), o = n.NONE;
    }, this.update = function() {
      const r = new z(), f = new Be().setFromUnitVectors(a.up, new z(0, 1, 0)), C = f.clone().invert(), R = new z(), N = new Be(), X = 2 * Math.PI;
      return function() {
        const je = e.object.position;
        r.copy(je).sub(e.target), r.applyQuaternion(f), l.setFromVector3(r), e.autoRotate && o === n.NONE && Y(ne()), e.enableDamping ? (l.theta += c.theta * e.dampingFactor, l.phi += c.phi * e.dampingFactor) : (l.theta += c.theta, l.phi += c.phi);
        let V = e.minAzimuthAngle, F = e.maxAzimuthAngle;
        return isFinite(V) && isFinite(F) && (V < -Math.PI ? V += X : V > Math.PI && (V -= X), F < -Math.PI ? F += X : F > Math.PI && (F -= X), V <= F ? l.theta = Math.max(V, Math.min(F, l.theta)) : l.theta = l.theta > (V + F) / 2 ? Math.max(V, l.theta) : Math.min(F, l.theta)), l.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= m, l.radius = Math.max(e.minDistance, Math.min(e.maxDistance, l.radius)), e.enableDamping === !0 ? e.target.addScaledVector(v, e.dampingFactor) : e.target.add(v), r.setFromSpherical(l), r.applyQuaternion(C), je.copy(e.target).add(r), e.object.lookAt(e.target), e.enableDamping === !0 ? (c.theta *= 1 - e.dampingFactor, c.phi *= 1 - e.dampingFactor, v.multiplyScalar(1 - e.dampingFactor)) : (c.set(0, 0, 0), v.set(0, 0, 0)), m = 1, d || R.distanceToSquared(e.object.position) > i || 8 * (1 - N.dot(e.object.quaternion)) > i ? (e.dispatchEvent(Ze), R.copy(e.object.position), N.copy(e.object.quaternion), d = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", De), e.domElement.removeEventListener("pointerdown", Ce), e.domElement.removeEventListener("pointercancel", Re), e.domElement.removeEventListener("wheel", ze), e.domElement.removeEventListener("pointermove", de), e.domElement.removeEventListener("pointerup", fe), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", ke);
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
    let o = n.NONE;
    const i = 1e-6, l = new $e(), c = new $e();
    let m = 1;
    const v = new z();
    let d = !1;
    const g = new B(), u = new B(), p = new B(), h = new B(), M = new B(), P = new B(), T = new B(), A = new B(), O = new B(), b = [], k = {};
    function ne() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function D() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function Y(r) {
      c.theta -= r;
    }
    function E(r) {
      c.phi -= r;
    }
    const j = function() {
      const r = new z();
      return function(C, R) {
        r.setFromMatrixColumn(R, 0), r.multiplyScalar(-C), v.add(r);
      };
    }(), _e = function() {
      const r = new z();
      return function(C, R) {
        e.screenSpacePanning === !0 ? r.setFromMatrixColumn(R, 1) : (r.setFromMatrixColumn(R, 0), r.crossVectors(e.object.up, r)), r.multiplyScalar(C), v.add(r);
      };
    }(), Z = function() {
      const r = new z();
      return function(C, R) {
        const N = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const X = e.object.position;
          r.copy(X).sub(e.target);
          let ie = r.length();
          ie *= Math.tan(e.object.fov / 2 * Math.PI / 180), j(2 * C * ie / N.clientHeight, e.object.matrix), _e(2 * R * ie / N.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (j(C * (e.object.right - e.object.left) / e.object.zoom / N.clientWidth, e.object.matrix), _e(R * (e.object.top - e.object.bottom) / e.object.zoom / N.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function me(r) {
      e.object.isPerspectiveCamera ? m /= r : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * r)), e.object.updateProjectionMatrix(), d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function Pe(r) {
      e.object.isPerspectiveCamera ? m *= r : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / r)), e.object.updateProjectionMatrix(), d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function Me(r) {
      g.set(r.clientX, r.clientY);
    }
    function Qe(r) {
      T.set(r.clientX, r.clientY);
    }
    function xe(r) {
      h.set(r.clientX, r.clientY);
    }
    function et(r) {
      u.set(r.clientX, r.clientY), p.subVectors(u, g).multiplyScalar(e.rotateSpeed);
      const f = e.domElement;
      Y(2 * Math.PI * p.x / f.clientHeight), E(2 * Math.PI * p.y / f.clientHeight), g.copy(u), e.update();
    }
    function tt(r) {
      A.set(r.clientX, r.clientY), O.subVectors(A, T), O.y > 0 ? me(D()) : O.y < 0 && Pe(D()), T.copy(A), e.update();
    }
    function nt(r) {
      M.set(r.clientX, r.clientY), P.subVectors(M, h).multiplyScalar(e.panSpeed), Z(P.x, P.y), h.copy(M), e.update();
    }
    function ot(r) {
      r.deltaY < 0 ? Pe(D()) : r.deltaY > 0 && me(D()), e.update();
    }
    function at(r) {
      let f = !1;
      switch (r.code) {
        case e.keys.UP:
          Z(0, e.keyPanSpeed), f = !0;
          break;
        case e.keys.BOTTOM:
          Z(0, -e.keyPanSpeed), f = !0;
          break;
        case e.keys.LEFT:
          Z(e.keyPanSpeed, 0), f = !0;
          break;
        case e.keys.RIGHT:
          Z(-e.keyPanSpeed, 0), f = !0;
          break;
      }
      f && (r.preventDefault(), e.update());
    }
    function Ae() {
      if (b.length === 1)
        g.set(b[0].pageX, b[0].pageY);
      else {
        const r = 0.5 * (b[0].pageX + b[1].pageX), f = 0.5 * (b[0].pageY + b[1].pageY);
        g.set(r, f);
      }
    }
    function Le() {
      if (b.length === 1)
        h.set(b[0].pageX, b[0].pageY);
      else {
        const r = 0.5 * (b[0].pageX + b[1].pageX), f = 0.5 * (b[0].pageY + b[1].pageY);
        h.set(r, f);
      }
    }
    function Ee() {
      const r = b[0].pageX - b[1].pageX, f = b[0].pageY - b[1].pageY, C = Math.sqrt(r * r + f * f);
      T.set(0, C);
    }
    function st() {
      e.enableZoom && Ee(), e.enablePan && Le();
    }
    function it() {
      e.enableZoom && Ee(), e.enableRotate && Ae();
    }
    function Se(r) {
      if (b.length == 1)
        u.set(r.pageX, r.pageY);
      else {
        const C = he(r), R = 0.5 * (r.pageX + C.x), N = 0.5 * (r.pageY + C.y);
        u.set(R, N);
      }
      p.subVectors(u, g).multiplyScalar(e.rotateSpeed);
      const f = e.domElement;
      Y(2 * Math.PI * p.x / f.clientHeight), E(2 * Math.PI * p.y / f.clientHeight), g.copy(u);
    }
    function Oe(r) {
      if (b.length === 1)
        M.set(r.pageX, r.pageY);
      else {
        const f = he(r), C = 0.5 * (r.pageX + f.x), R = 0.5 * (r.pageY + f.y);
        M.set(C, R);
      }
      P.subVectors(M, h).multiplyScalar(e.panSpeed), Z(P.x, P.y), h.copy(M);
    }
    function Te(r) {
      const f = he(r), C = r.pageX - f.x, R = r.pageY - f.y, N = Math.sqrt(C * C + R * R);
      A.set(0, N), O.set(0, Math.pow(A.y / T.y, e.zoomSpeed)), me(O.y), T.copy(A);
    }
    function rt(r) {
      e.enableZoom && Te(r), e.enablePan && Oe(r);
    }
    function lt(r) {
      e.enableZoom && Te(r), e.enableRotate && Se(r);
    }
    function Ce(r) {
      e.enabled !== !1 && (b.length === 0 && (e.domElement.setPointerCapture(r.pointerId), e.domElement.addEventListener("pointermove", de), e.domElement.addEventListener("pointerup", fe)), ft(r), r.pointerType === "touch" ? mt(r) : ct(r));
    }
    function de(r) {
      e.enabled !== !1 && (r.pointerType === "touch" ? dt(r) : ut(r));
    }
    function fe(r) {
      Ge(r), b.length === 0 && (e.domElement.releasePointerCapture(r.pointerId), e.domElement.removeEventListener("pointermove", de), e.domElement.removeEventListener("pointerup", fe)), e.dispatchEvent(Xe), o = n.NONE;
    }
    function Re(r) {
      Ge(r);
    }
    function ct(r) {
      let f;
      switch (r.button) {
        case 0:
          f = e.mouseButtons.LEFT;
          break;
        case 1:
          f = e.mouseButtons.MIDDLE;
          break;
        case 2:
          f = e.mouseButtons.RIGHT;
          break;
        default:
          f = -1;
      }
      switch (f) {
        case W.DOLLY:
          if (e.enableZoom === !1)
            return;
          Qe(r), o = n.DOLLY;
          break;
        case W.ROTATE:
          if (r.ctrlKey || r.metaKey || r.shiftKey) {
            if (e.enablePan === !1)
              return;
            xe(r), o = n.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            Me(r), o = n.ROTATE;
          }
          break;
        case W.PAN:
          if (r.ctrlKey || r.metaKey || r.shiftKey) {
            if (e.enableRotate === !1)
              return;
            Me(r), o = n.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            xe(r), o = n.PAN;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && e.dispatchEvent(pe);
    }
    function ut(r) {
      if (e.enabled !== !1)
        switch (o) {
          case n.ROTATE:
            if (e.enableRotate === !1)
              return;
            et(r);
            break;
          case n.DOLLY:
            if (e.enableZoom === !1)
              return;
            tt(r);
            break;
          case n.PAN:
            if (e.enablePan === !1)
              return;
            nt(r);
            break;
        }
    }
    function ze(r) {
      e.enabled === !1 || e.enableZoom === !1 || o !== n.NONE || (r.preventDefault(), e.dispatchEvent(pe), ot(r), e.dispatchEvent(Xe));
    }
    function ke(r) {
      e.enabled === !1 || e.enablePan === !1 || at(r);
    }
    function mt(r) {
      switch (Ie(r), b.length) {
        case 1:
          switch (e.touches.ONE) {
            case K.ROTATE:
              if (e.enableRotate === !1)
                return;
              Ae(), o = n.TOUCH_ROTATE;
              break;
            case K.PAN:
              if (e.enablePan === !1)
                return;
              Le(), o = n.TOUCH_PAN;
              break;
            default:
              o = n.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case K.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              st(), o = n.TOUCH_DOLLY_PAN;
              break;
            case K.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
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
      o !== n.NONE && e.dispatchEvent(pe);
    }
    function dt(r) {
      switch (Ie(r), o) {
        case n.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          Se(r), e.update();
          break;
        case n.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          Oe(r), e.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          rt(r), e.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          lt(r), e.update();
          break;
        default:
          o = n.NONE;
      }
    }
    function De(r) {
      e.enabled !== !1 && r.preventDefault();
    }
    function ft(r) {
      b.push(r);
    }
    function Ge(r) {
      delete k[r.pointerId];
      for (let f = 0; f < b.length; f++)
        if (b[f].pointerId == r.pointerId) {
          b.splice(f, 1);
          return;
        }
    }
    function Ie(r) {
      let f = k[r.pointerId];
      f === void 0 && (f = new B(), k[r.pointerId] = f), f.set(r.pageX, r.pageY);
    }
    function he(r) {
      const f = r.pointerId === b[0].pointerId ? b[1] : b[0];
      return k[f.pointerId];
    }
    e.domElement.addEventListener("contextmenu", De), e.domElement.addEventListener("pointerdown", Ce), e.domElement.addEventListener("pointercancel", Re), e.domElement.addEventListener("wheel", ze, { passive: !1 }), this.update();
  }
}
const Yt = {
  name: "OrbitControls",
  render: () => null
}, Zt = /* @__PURE__ */ L({
  ...Yt,
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
  setup(s, { expose: a }) {
    const t = s, e = J(null);
    y("addControls")(e);
    const n = y("parentCamera"), o = y("canvas");
    function i() {
      e.value != null && (e.value.enablePan = t.enablePan, e.value.enableRotate = t.enableRotate, e.value.enableZoom = t.enableZoom, e.value.minZoom = t.minZoom, e.value.maxZoom = t.maxZoom, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance, e.value.minPolarAngle = t.minPolarAngle, e.value.maxPolarAngle = t.maxPolarAngle, e.value.minAzimuthAngle = t.minAzimuthAngle, e.value.maxAzimuthAngle = t.maxAzimuthAngle);
    }
    return _(o, () => {
      e.value = new Ht(n, o.value), i(), x(t, "target", e.value);
    }), i(), w(t, "enablePan", i), w(t, "enableRotate", i), w(t, "enableZoom", i), w(t, "minZoom", i), w(t, "maxZoom", i), w(t, "minDistance", i), w(t, "maxDistance", i), w(t, "minPolarAngle", i), w(t, "maxPolarAngle", i), w(t, "minAzimuthAngle", i), w(t, "maxAzimuthAngle", i), a({ three: e }), { props: t, three: e, camera: n, canvas: o, applyProps: i };
  }
}), Xt = /* @__PURE__ */ L({
  __name: "Group",
  props: {
    enableRaycasting: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  emits: ["click", "mousemove", "mouseenter", "mouseleave"],
  setup(s, { expose: a, emit: t }) {
    const e = s, n = new ve();
    return ue(n), x(e, "position", n), x(e, "rotation", n), x(e, "scale", n), jt(n.children, e, t), S("parent", n), a({ three: n }), (o, i) => G(o.$slots, "default");
  }
}), Wt = /* @__PURE__ */ L({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("scene"), n = new $(), o = new oe({ color: "black" }), i = new ye(n, o);
    return ue(i), x(t, "position", i), x(t, "rotation", i), x(t, "scale", i), ee(() => {
      e.remove(i), se(i);
    }), S("mesh", i), a({ three: i }), (l, c) => G(l.$slots, "default");
  }
}), Kt = /* @__PURE__ */ L({
  __name: "Mesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("scene"), n = new $(), o = new Je(), i = new be(n, o);
    i.castShadow = !0, i.receiveShadow = !0, ue(i), x(t, "position", i), x(t, "rotation", i), x(t, "scale", i);
    function l() {
      i.castShadow = t.castShadow, i.receiveShadow = t.receiveShadow;
    }
    return l(), w(t, "castShadow", l), w(t, "receiveShadow", l), ee(() => {
      e.remove(i), se(i);
    }), S("mesh", i), a({ three: i }), (c, m) => G(c.$slots, "default");
  }
}), qt = /* @__PURE__ */ L({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("scene"), n = new $(), o = new Q({ color: "red", sizeAttenuation: !1, size: 2 }), i = new le(n, o);
    return ue(i), x(t, "position", i), x(t, "rotation", i), x(t, "scale", i), ee(() => {
      e.remove(i), se(i);
    }), S("mesh", i), a({ three: i }), (l, c) => G(l.$slots, "default");
  }
}), Jt = /^[og]\s*(.+)?/, Qt = /^mtllib /, en = /^usemtl /, tn = /^usemap /, We = new z(), ge = new z(), Ke = new z(), qe = new z(), I = new z(), re = new U();
function nn() {
  const s = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(a, t) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = a, this.object.fromDeclaration = t !== !1;
        return;
      }
      const e = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: a || "",
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
        startMaterial: function(n, o) {
          const i = this._finalize(!1);
          i && (i.inherited || i.groupCount <= 0) && this.materials.splice(i.index, 1);
          const l = {
            index: this.materials.length,
            name: n || "",
            mtllib: Array.isArray(o) && o.length > 0 ? o[o.length - 1] : "",
            smooth: i !== void 0 ? i.smooth : this.smooth,
            groupStart: i !== void 0 ? i.groupEnd : 0,
            groupEnd: -1,
            groupCount: -1,
            inherited: !1,
            clone: function(c) {
              const m = {
                index: typeof c == "number" ? c : this.index,
                name: this.name,
                mtllib: this.mtllib,
                smooth: this.smooth,
                groupStart: 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: !1
              };
              return m.clone = this.clone.bind(m), m;
            }
          };
          return this.materials.push(l), l;
        },
        currentMaterial: function() {
          if (this.materials.length > 0)
            return this.materials[this.materials.length - 1];
        },
        _finalize: function(n) {
          const o = this.currentMaterial();
          if (o && o.groupEnd === -1 && (o.groupEnd = this.geometry.vertices.length / 3, o.groupCount = o.groupEnd - o.groupStart, o.inherited = !1), n && this.materials.length > 1)
            for (let i = this.materials.length - 1; i >= 0; i--)
              this.materials[i].groupCount <= 0 && this.materials.splice(i, 1);
          return n && this.materials.length === 0 && this.materials.push({
            name: "",
            smooth: this.smooth
          }), o;
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
    parseVertexIndex: function(a, t) {
      const e = parseInt(a, 10);
      return (e >= 0 ? e - 1 : e + t / 3) * 3;
    },
    parseNormalIndex: function(a, t) {
      const e = parseInt(a, 10);
      return (e >= 0 ? e - 1 : e + t / 3) * 3;
    },
    parseUVIndex: function(a, t) {
      const e = parseInt(a, 10);
      return (e >= 0 ? e - 1 : e + t / 2) * 2;
    },
    addVertex: function(a, t, e) {
      const n = this.vertices, o = this.object.geometry.vertices;
      o.push(n[a + 0], n[a + 1], n[a + 2]), o.push(n[t + 0], n[t + 1], n[t + 2]), o.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addVertexPoint: function(a) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[a + 0], t[a + 1], t[a + 2]);
    },
    addVertexLine: function(a) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[a + 0], t[a + 1], t[a + 2]);
    },
    addNormal: function(a, t, e) {
      const n = this.normals, o = this.object.geometry.normals;
      o.push(n[a + 0], n[a + 1], n[a + 2]), o.push(n[t + 0], n[t + 1], n[t + 2]), o.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addFaceNormal: function(a, t, e) {
      const n = this.vertices, o = this.object.geometry.normals;
      We.fromArray(n, a), ge.fromArray(n, t), Ke.fromArray(n, e), I.subVectors(Ke, ge), qe.subVectors(We, ge), I.cross(qe), I.normalize(), o.push(I.x, I.y, I.z), o.push(I.x, I.y, I.z), o.push(I.x, I.y, I.z);
    },
    addColor: function(a, t, e) {
      const n = this.colors, o = this.object.geometry.colors;
      n[a] !== void 0 && o.push(n[a + 0], n[a + 1], n[a + 2]), n[t] !== void 0 && o.push(n[t + 0], n[t + 1], n[t + 2]), n[e] !== void 0 && o.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addUV: function(a, t, e) {
      const n = this.uvs, o = this.object.geometry.uvs;
      o.push(n[a + 0], n[a + 1]), o.push(n[t + 0], n[t + 1]), o.push(n[e + 0], n[e + 1]);
    },
    addDefaultUV: function() {
      const a = this.object.geometry.uvs;
      a.push(0, 0), a.push(0, 0), a.push(0, 0);
    },
    addUVLine: function(a) {
      const t = this.uvs;
      this.object.geometry.uvs.push(t[a + 0], t[a + 1]);
    },
    addFace: function(a, t, e, n, o, i, l, c, m) {
      const v = this.vertices.length;
      let d = this.parseVertexIndex(a, v), g = this.parseVertexIndex(t, v), u = this.parseVertexIndex(e, v);
      if (this.addVertex(d, g, u), this.addColor(d, g, u), l !== void 0 && l !== "") {
        const p = this.normals.length;
        d = this.parseNormalIndex(l, p), g = this.parseNormalIndex(c, p), u = this.parseNormalIndex(m, p), this.addNormal(d, g, u);
      } else
        this.addFaceNormal(d, g, u);
      if (n !== void 0 && n !== "") {
        const p = this.uvs.length;
        d = this.parseUVIndex(n, p), g = this.parseUVIndex(o, p), u = this.parseUVIndex(i, p), this.addUV(d, g, u), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(a) {
      this.object.geometry.type = "Points";
      const t = this.vertices.length;
      for (let e = 0, n = a.length; e < n; e++) {
        const o = this.parseVertexIndex(a[e], t);
        this.addVertexPoint(o), this.addColor(o);
      }
    },
    addLineGeometry: function(a, t) {
      this.object.geometry.type = "Line";
      const e = this.vertices.length, n = this.uvs.length;
      for (let o = 0, i = a.length; o < i; o++)
        this.addVertexLine(this.parseVertexIndex(a[o], e));
      for (let o = 0, i = t.length; o < i; o++)
        this.addUVLine(this.parseUVIndex(t[o], n));
    }
  };
  return s.startObject("", !1), s;
}
class on extends Mt {
  constructor(a) {
    super(a), this.materials = null;
  }
  load(a, t, e, n) {
    const o = this, i = new xt(this.manager);
    i.setPath(this.path), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(a, function(l) {
      try {
        t(o.parse(l));
      } catch (c) {
        n ? n(c) : console.error(c), o.manager.itemError(a);
      }
    }, e, n);
  }
  setMaterials(a) {
    return this.materials = a, this;
  }
  parse(a) {
    const t = new nn();
    a.indexOf(`\r
`) !== -1 && (a = a.replace(/\r\n/g, `
`)), a.indexOf(`\\
`) !== -1 && (a = a.replace(/\\\n/g, ""));
    const e = a.split(`
`);
    let n = "", o = "", i = 0, l = [];
    const c = typeof "".trimLeft == "function";
    for (let d = 0, g = e.length; d < g; d++)
      if (n = e[d], n = c ? n.trimLeft() : n.trim(), i = n.length, i !== 0 && (o = n.charAt(0), o !== "#"))
        if (o === "v") {
          const u = n.split(/\s+/);
          switch (u[0]) {
            case "v":
              t.vertices.push(
                parseFloat(u[1]),
                parseFloat(u[2]),
                parseFloat(u[3])
              ), u.length >= 7 ? (re.setRGB(
                parseFloat(u[4]),
                parseFloat(u[5]),
                parseFloat(u[6])
              ).convertSRGBToLinear(), t.colors.push(re.r, re.g, re.b)) : t.colors.push(void 0, void 0, void 0);
              break;
            case "vn":
              t.normals.push(
                parseFloat(u[1]),
                parseFloat(u[2]),
                parseFloat(u[3])
              );
              break;
            case "vt":
              t.uvs.push(
                parseFloat(u[1]),
                parseFloat(u[2])
              );
              break;
          }
        } else if (o === "f") {
          const p = n.slice(1).trim().split(/\s+/), h = [];
          for (let P = 0, T = p.length; P < T; P++) {
            const A = p[P];
            if (A.length > 0) {
              const O = A.split("/");
              h.push(O);
            }
          }
          const M = h[0];
          for (let P = 1, T = h.length - 1; P < T; P++) {
            const A = h[P], O = h[P + 1];
            t.addFace(
              M[0],
              A[0],
              O[0],
              M[1],
              A[1],
              O[1],
              M[2],
              A[2],
              O[2]
            );
          }
        } else if (o === "l") {
          const u = n.substring(1).trim().split(" ");
          let p = [];
          const h = [];
          if (n.indexOf("/") === -1)
            p = u;
          else
            for (let M = 0, P = u.length; M < P; M++) {
              const T = u[M].split("/");
              T[0] !== "" && p.push(T[0]), T[1] !== "" && h.push(T[1]);
            }
          t.addLineGeometry(p, h);
        } else if (o === "p") {
          const p = n.slice(1).trim().split(" ");
          t.addPointGeometry(p);
        } else if ((l = Jt.exec(n)) !== null) {
          const u = (" " + l[0].slice(1).trim()).slice(1);
          t.startObject(u);
        } else if (en.test(n))
          t.object.startMaterial(n.substring(7).trim(), t.materialLibraries);
        else if (Qt.test(n))
          t.materialLibraries.push(n.substring(7).trim());
        else if (tn.test(n))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (o === "s") {
          if (l = n.split(" "), l.length > 1) {
            const p = l[1].trim().toLowerCase();
            t.object.smooth = p !== "0" && p !== "off";
          } else
            t.object.smooth = !0;
          const u = t.object.currentMaterial();
          u && (u.smooth = t.object.smooth);
        } else {
          if (n === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + n + '"');
        }
    t.finalize();
    const m = new ve();
    if (m.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let d = 0, g = t.objects.length; d < g; d++) {
        const u = t.objects[d], p = u.geometry, h = u.materials, M = p.type === "Line", P = p.type === "Points";
        let T = !1;
        if (p.vertices.length === 0)
          continue;
        const A = new $();
        A.setAttribute("position", new q(p.vertices, 3)), p.normals.length > 0 && A.setAttribute("normal", new q(p.normals, 3)), p.colors.length > 0 && (T = !0, A.setAttribute("color", new q(p.colors, 3))), p.hasUVIndices === !0 && A.setAttribute("uv", new q(p.uvs, 2));
        const O = [];
        for (let k = 0, ne = h.length; k < ne; k++) {
          const D = h[k], Y = D.name + "_" + D.smooth + "_" + T;
          let E = t.materials[Y];
          if (this.materials !== null) {
            if (E = this.materials.create(D.name), M && E && !(E instanceof oe)) {
              const j = new oe();
              Ve.prototype.copy.call(j, E), j.color.copy(E.color), E = j;
            } else if (P && E && !(E instanceof Q)) {
              const j = new Q({ size: 10, sizeAttenuation: !1 });
              Ve.prototype.copy.call(j, E), j.color.copy(E.color), j.map = E.map, E = j;
            }
          }
          E === void 0 && (M ? E = new oe() : P ? E = new Q({ size: 1, sizeAttenuation: !1 }) : E = new At(), E.name = D.name, E.flatShading = !D.smooth, E.vertexColors = T, t.materials[Y] = E), O.push(E);
        }
        let b;
        if (O.length > 1) {
          for (let k = 0, ne = h.length; k < ne; k++) {
            const D = h[k];
            A.addGroup(D.groupStart, D.groupCount, k);
          }
          M ? b = new ye(A, O) : P ? b = new le(A, O) : b = new be(A, O);
        } else
          M ? b = new ye(A, O[0]) : P ? b = new le(A, O[0]) : b = new be(A, O[0]);
        b.name = u.name, m.add(b);
      }
    else if (t.vertices.length > 0) {
      const d = new Q({ size: 1, sizeAttenuation: !1 }), g = new $();
      g.setAttribute("position", new q(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (g.setAttribute("color", new q(t.colors, 3)), d.vertexColors = !0);
      const u = new le(g, d);
      m.add(u);
    }
    return m;
  }
}
const an = /* @__PURE__ */ L({
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
  setup(s, { expose: a, emit: t }) {
    const e = s, n = new on(), o = y("scene"), i = new ve();
    i.castShadow = !0, i.receiveShadow = !0, o.add(i), x(e, "position", i), x(e, "rotation", i), x(e, "scale", i);
    function l() {
      n.load(
        e.url,
        function(c) {
          for (const m of c.children)
            i.add(m), m.material = i.material, x(e, "position", i, !1), x(e, "rotation", i, !1), x(e, "scale", i, !1);
          t("load", c);
        },
        function(c) {
          t("progress", c);
        },
        function(c) {
          t("error", c);
        }
      );
    }
    return l(), _(
      () => e.url,
      () => l()
    ), S("mesh", i), a({
      three: i
    }), (c, m) => G(c.$slots, "default");
  }
}), sn = /* @__PURE__ */ L({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("scene"), n = new Lt(t.size);
    return e.add(n), x(t, "position", n), x(t, "rotation", n), x(t, "scale", n), S("mesh", n), a({ three: n }), (o, i) => G(o.$slots, "default");
  }
}), rn = {
  name: "BoxGeometry",
  render: () => null
}, ln = /* @__PURE__ */ L({
  ...rn,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("mesh");
    function n(c, m, v, d, g, u) {
      return new Et(c, m, v, d, g, u);
    }
    const o = H(new $());
    o.name = t.name, e.geometry = o;
    const i = y("addGeometry");
    i(o);
    function l() {
      const c = n(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments
      );
      te(o, c);
    }
    return l(), w(t, "name", () => {
      o.name = t.name;
    }), w(t, "width", l), w(t, "height", l), w(t, "depth", l), w(t, "widthSegments", l), w(t, "heightSegments", l), w(t, "depthSegments", l), a({ three: o }), { props: t, mesh: e, makeBox: n, three: o, addGeometry: i, redoGeometry: l };
  }
}), cn = {
  name: "BufferGeometry",
  render: () => null
}, un = /* @__PURE__ */ L({
  ...cn,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] },
    uvs: { default: () => [] }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("mesh");
    function n(c, m, v) {
      const d = new $(), g = new Float32Array(c), u = new Float32Array(v);
      return d.setAttribute("position", new Fe(g, 3)), d.setAttribute("uv", new Fe(u, 2)), t.faces.length > 0 && d.setIndex(m), d;
    }
    const o = H(n(t.vertices, t.faces, t.uvs));
    o.name = t.name, e.geometry = o;
    const i = y("addGeometry");
    i(o);
    function l(c, m, v) {
      const d = n(c, m, v);
      te(o, d);
    }
    return _(
      () => t.vertices,
      (c) => {
        l(c, t.faces, t.uvs);
      },
      { deep: !0, immediate: !0 }
    ), _(
      () => t.faces,
      (c) => {
        l(t.vertices, c, t.uvs);
      },
      { deep: !0, immediate: !0 }
    ), a({ three: o }), { props: t, mesh: e, makeGeometry: n, three: o, addGeometry: i, redoGeometry: l };
  }
}), mn = {
  name: "EdgesGeometry",
  render: () => null
}, dn = /* @__PURE__ */ L({
  ...mn,
  props: {
    geometry: null
  },
  setup(s, { expose: a }) {
    const t = s, e = y("mesh"), n = H(new $());
    e.geometry = n;
    const o = y("getGeometry"), i = y("addGeometry");
    i(n);
    function l() {
      const v = new St(o(t.geometry));
      te(n, v);
    }
    let c = _(
      o(t.geometry),
      () => {
        l();
      },
      { deep: !0, immediate: !0 }
    );
    w(t, "geometry", () => {
      c(), c = _(
        o(t.geometry),
        () => {
          l();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const m = () => {
      o(t.geometry) === void 0 ? ce(() => m) : l();
    };
    return ce(() => m), a({ three: n }), { props: t, mesh: e, three: n, getGeometry: o, addGeometry: i, redoGeometry: l, get unwatch() {
      return c;
    }, set unwatch(v) {
      c = v;
    }, waitUntilGeometryChanged: m };
  }
}), fn = {
  name: "PlaneGeometry",
  render: () => null
}, hn = /* @__PURE__ */ L({
  ...fn,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("mesh");
    function n(c, m, v, d) {
      return new Ot(c, m, v, d);
    }
    const o = H(new $());
    o.name = t.name, e.geometry = o;
    const i = y("addGeometry");
    i(o);
    function l() {
      const c = n(t.width, t.height, t.widthSegments, t.heightSegments);
      te(o, c);
    }
    return l(), w(t, "width", l), w(t, "height", l), w(t, "widthSegments", l), w(t, "heightSegments", l), a({ three: o }), { props: t, mesh: e, makePlane: n, three: o, addGeometry: i, redoGeometry: l };
  }
}), pn = {
  name: "SphereGeometry",
  render: () => null
}, gn = /* @__PURE__ */ L({
  ...pn,
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
  setup(s, { expose: a }) {
    const t = s, e = y("mesh");
    function n(c, m, v, d, g, u, p) {
      return new Tt(c, m, v, d, g, u, p);
    }
    const o = H(new $());
    o.name = t.name, e.geometry = o;
    const i = y("addGeometry");
    i(o);
    function l() {
      const c = n(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength
      );
      te(o, c);
    }
    return l(), w(t, "radius", l), w(t, "widthSegments", l), w(t, "heightSegments", l), w(t, "phiStart", l), w(t, "phiLength", l), w(t, "thetaStart", l), w(t, "thetaLength", l), a({ three: o }), { props: t, mesh: e, makeSphere: n, three: o, addGeometry: i, redoGeometry: l };
  }
}), yn = {
  name: "WireframeGeometry",
  render: () => null
}, bn = /* @__PURE__ */ L({
  ...yn,
  props: {
    geometry: null
  },
  setup(s, { expose: a }) {
    const t = s, e = y("mesh"), n = H(new $());
    e.geometry = n;
    const o = y("getGeometry"), i = y("addGeometry");
    i(n);
    function l() {
      const v = new Ct(o(t.geometry));
      te(n, v);
    }
    let c = _(
      o(t.geometry),
      () => {
        l();
      },
      { deep: !0, immediate: !0 }
    );
    w(t, "geometry", () => {
      c(), c = _(
        o(t.geometry),
        () => {
          l();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const m = () => {
      o(t.geometry) === void 0 ? ce(() => m) : l();
    };
    return ce(() => m), a({ three: n }), { props: t, mesh: e, three: n, getGeometry: o, addGeometry: i, redoGeometry: l, get unwatch() {
      return c;
    }, set unwatch(v) {
      c = v;
    }, waitUntilGeometryChanged: m };
  }
}), vn = {
  name: "LineBasicMaterial",
  render: () => null
}, wn = /* @__PURE__ */ L({
  ...vn,
  props: {
    color: { default: 16777215 }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("mesh"), n = new oe({ color: t.color });
    e.material = n;
    function o(i) {
      i.color && (n.color = new U(i.color));
    }
    return o(t), _(
      () => t.color,
      () => o(t)
    ), S("material", n), a({ three: n }), { props: t, mesh: e, three: n, applyProps: o };
  }
}), _n = {
  name: "MeshBasicMaterial"
}, Pn = /* @__PURE__ */ L({
  ..._n,
  props: {
    color: null,
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("mesh"), n = new Je();
    return e.material = n, _(
      () => t.color,
      () => {
        t.color !== void 0 && (n.color = new U(t.color));
      },
      { immediate: !0 }
    ), _(
      () => t.side,
      () => {
        n.side = t.side;
      },
      { immediate: !0 }
    ), _(
      () => t.opacity,
      () => {
        n.opacity = t.opacity;
      },
      { immediate: !0 }
    ), _(
      () => t.transparent,
      () => {
        n.transparent = t.transparent;
      },
      { immediate: !0 }
    ), _(
      () => t.vertexColors,
      () => {
        n.vertexColors = t.vertexColors;
      },
      { immediate: !0 }
    ), S("material", n), a({ three: n }), (o, i) => G(o.$slots, "default");
  }
}), Mn = {
  name: "MeshLambertMaterial"
}, xn = /* @__PURE__ */ L({
  ...Mn,
  props: {
    color: { default: 16777215 },
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("mesh"), n = new Rt();
    e.material = n;
    function o(i) {
      i.color && (n.color = new U(i.color)), i.side && (n.side = i.side);
    }
    return o(t), _(
      () => t.color,
      () => o(t)
    ), _(
      () => t.side,
      () => o(t)
    ), _(
      () => t.opacity,
      () => {
        n.opacity = t.opacity;
      },
      { immediate: !0 }
    ), _(
      () => t.transparent,
      () => {
        n.transparent = t.transparent;
      },
      { immediate: !0 }
    ), S("material", n), a({ three: n }), (i, l) => G(i.$slots, "default");
  }
}), An = {
  name: "PointsMaterial",
  render: () => null
}, Ln = /* @__PURE__ */ L({
  ...An,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("mesh"), n = new Q({ color: t.color, sizeAttenuation: t.sizeAttenuation, size: t.size });
    e.material = n;
    function o(i) {
      i.color && (n.color = new U(i.color)), i.size && (n.size = i.size), i.sizeAttenuation !== void 0 && (n.sizeAttenuation = i.sizeAttenuation);
    }
    return o(t), _(
      () => t.color,
      () => o(t)
    ), _(
      () => t.size,
      () => o(t)
    ), _(
      () => t.sizeAttenuation,
      () => o(t)
    ), S("material", n), a({ three: n }), { props: t, mesh: e, three: n, applyProps: o };
  }
}), En = {
  name: "MeshNormalMaterial"
}, Sn = /* @__PURE__ */ L({
  ...En,
  props: {
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("mesh"), n = new zt();
    return e.material = n, _(
      () => t.side,
      () => {
        n.side = t.side;
      },
      { immediate: !0 }
    ), _(
      () => t.opacity,
      () => {
        n.opacity = t.opacity;
      },
      { immediate: !0 }
    ), _(
      () => t.transparent,
      () => {
        n.transparent = t.transparent;
      },
      { immediate: !0 }
    ), S("material", n), a({ three: n }), (o, i) => G(o.$slots, "default");
  }
}), On = {
  name: "AmbientLight",
  render: () => null
}, Tn = /* @__PURE__ */ L({
  ...On,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("scene"), n = new kt();
    e.add(n);
    function o(i) {
      n.color = new U(i.color), n.intensity = i.intensity;
    }
    return o(t), _(
      () => t.color,
      () => o(t)
    ), _(
      () => t.intensity,
      () => o(t)
    ), a({ three: n }), { props: t, scene: e, three: n, applyProps: o };
  }
}), Cn = {
  name: "PointLight",
  render: () => null
}, Rn = /* @__PURE__ */ L({
  ...Cn,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = y("scene"), n = new Dt();
    e.add(n), x(t, "position", n), x(t, "rotation", n), x(t, "scale", n);
    function o(i) {
      n.color = new U(i.color), n.intensity = i.intensity, n.castShadow = i.castShadow;
    }
    return o(t), _(
      () => t.color,
      () => o(t)
    ), _(
      () => t.intensity,
      () => o(t)
    ), _(
      () => t.castShadow,
      () => o(t)
    ), a({ three: n }), { props: t, scene: e, three: n, applyProps: o };
  }
}), zn = {
  name: "TextureLoader",
  render: () => null
}, kn = /* @__PURE__ */ L({
  ...zn,
  props: {
    url: null
  },
  setup(s, { expose: a }) {
    const t = s, e = y("material"), n = J(new Gt());
    function o(i) {
      "map" in e && (e.map = new It().load(i.url));
    }
    return o(t), _(
      () => t.url,
      () => o(t)
    ), a({ three: n }), { props: t, material: e, three: n, applyProps: o };
  }
});
function In(s) {
  s.component("Renderer", Nt), s.component("Scene", Bt), s.component("PerspectiveCamera", Vt), s.component("OrthographicCamera", Ut), s.component("OrbitControls", Zt), s.component("Group", Xt), s.component("LineSegments", Wt), s.component("Mesh", Kt), s.component("Points", qt), s.component("OBJLoader", an), s.component("AxesHelper", sn), s.component("BoxGeometry", ln), s.component("BufferGeometry", un), s.component("EdgesGeometry", dn), s.component("PlaneGeometry", hn), s.component("SphereGeometry", gn), s.component("WireframeGeometry", bn), s.component("LineBasicMaterial", wn), s.component("MeshBasicMaterial", Pn), s.component("MeshLambertMaterial", xn), s.component("PointsMaterial", Ln), s.component("MeshNormalMaterial", Sn), s.component("AmbientLight", Tn), s.component("PointLight", Rn), s.component("TextureLoader", kn);
}
export {
  Tn as AmbientLight,
  sn as AxesHelper,
  ln as BoxGeometry,
  un as BufferGeometry,
  dn as EdgesGeometry,
  Xt as Group,
  wn as LineBasicMaterial,
  Wt as LineSegments,
  Kt as Mesh,
  Pn as MeshBasicMaterial,
  xn as MeshLambertMaterial,
  Sn as MeshNormalMaterial,
  an as OBJLoader,
  Zt as OrbitControls,
  Ut as OrthographicCamera,
  Vt as PerspectiveCamera,
  hn as PlaneGeometry,
  Rn as PointLight,
  qt as Points,
  Ln as PointsMaterial,
  Nt as Renderer,
  Bt as Scene,
  gn as SphereGeometry,
  kn as TextureLoader,
  bn as WireframeGeometry,
  In as install
};

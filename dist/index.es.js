import { watch as v, inject as b, onMounted as ae, onUnmounted as ee, defineComponent as E, reactive as H, ref as J, provide as S, openBlock as ft, createElementBlock as ht, Fragment as pt, renderSlot as G, createElementVNode as gt, nextTick as ce } from "vue";
import { Vector3 as z, Raycaster as Ne, Vector2 as B, WebGLRenderer as yt, Scene as bt, Color as U, PerspectiveCamera as wt, OrthographicCamera as _t, EventDispatcher as vt, MOUSE as W, TOUCH as K, Quaternion as Be, Spherical as $e, Group as we, BufferGeometry as $, LineBasicMaterial as oe, LineSegments as ye, MeshBasicMaterial as qe, Mesh as be, PointsMaterial as Q, Points as le, Loader as Pt, FileLoader as Mt, Float32BufferAttribute as q, Material as Ve, MeshPhongMaterial as Lt, AxesHelper as xt, BoxGeometry as Et, BufferAttribute as At, EdgesGeometry as St, PlaneGeometry as Ot, SphereGeometry as Tt, WireframeGeometry as Ct, FrontSide as _e, MeshLambertMaterial as Rt, MeshNormalMaterial as zt, AmbientLight as kt, PointLight as Dt, Texture as Gt, TextureLoader as It } from "three";
const Fe = (s) => s === void 0 ? new z(0, 0, 0) : "x" in s ? new z(s.x, s.y, s.z) : new z(s[0], s[1], s[2]), Ue = (s, a, t) => {
  t[s].isVector3 ? t[s].set(a.x, a.y, a.z) : "isEuler" in t[s] && t[s].setFromVector3(a);
}, L = (s, a, t, e = !0) => {
  if (t !== null) {
    if (s[a] !== void 0) {
      const n = Fe(s[a]);
      Ue(a, n, t);
    }
    e && v(
      () => s[a],
      () => {
        if (s[a] !== void 0) {
          const n = Fe(s[a]);
          Ue(a, n, t);
        }
      }
    );
  }
}, _ = (s, a, t) => {
  v(
    () => s[a],
    () => {
      t();
    }
  );
};
function te(s, a) {
  a.hasAttribute("position") && (s.setAttribute("position", a.getAttribute("position")), s.attributes.position.needsUpdate = !0), a.hasAttribute("normal") && (s.setAttribute("normal", a.getAttribute("normal")), s.attributes.normal.needsUpdate = !0), a.hasAttribute("uv") && (s.setAttribute("uv", a.getAttribute("uv")), s.attributes.uv.needsUpdate = !0), s.setIndex(a.getIndex());
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
  const a = b("scene"), t = b("parent", void 0);
  ae(() => {
    t ? t.add(s) : a.add(s);
  }), ee(() => {
    t ? t.remove(s) : a.remove(s);
  });
}
function jt(s, a, t) {
  const e = b("camera"), n = b("canvas");
  b("scene");
  const o = (m) => {
    const y = new Ne(), h = He(m);
    y.setFromCamera(h, e.value);
    const p = y.intersectObjects(s);
    p.length > 0 && t("click", p, h);
  };
  let i = !1, l = [];
  const c = (m) => {
    const y = new Ne(), h = He(m);
    y.setFromCamera(h, e.value);
    const p = y.intersectObjects(s);
    p.length > 0 ? (l = p, i === !1 && t("mouseenter", p, h), i = !0, t("mousemove", p, h)) : (i && t("mouseleave", l, h), i = !1, l = []);
  };
  ae(() => {
    a.enableRaycasting && (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c));
  }), ee(() => {
    a.enableRaycasting && (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
  }), v(
    () => a.enableRaycasting,
    (m) => {
      m ? (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c)) : (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
    }
  );
}
function He(s) {
  const a = new B();
  return a.x = (s.pageX - s.currentTarget.offsetLeft) / s.currentTarget.offsetWidth * 2 - 1, a.y = -((s.pageY - s.currentTarget.offsetTop) / s.currentTarget.offsetHeight) * 2 + 1, a;
}
const Nt = /* @__PURE__ */ E({
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
    let y = Date.now(), h = 1e3 / t.frameLimit;
    v(
      () => t.camera,
      (f) => p(f)
    );
    const p = (f) => {
      if (f) {
        const M = l.value.find((P) => P.name === f);
        M === void 0 && (i.value = null), i.value = M;
      } else
        i.value = l.value[0];
    };
    function u(f) {
      e !== null && (e.shadowMap.enabled = f.shadowMapEnabled, h = 1e3 / f.frameLimit);
    }
    ae(() => {
      e = new yt({ canvas: m.value, antialias: t.antialias, alpha: !0 }), e.setSize(1, 1), u(t), p(t.camera), new ResizeObserver((M) => {
        M.forEach((P) => {
          e && t.autoResize && e.setSize(P.contentRect.width, P.contentRect.height);
        });
      }).observe(m.value.parentElement), g();
    }), ee(() => {
      for (let f of n)
        se(f);
    });
    function g() {
      requestAnimationFrame(g);
      const f = Date.now(), M = f - y;
      if (!(h > -1 && M < h)) {
        if (y = f - M % h, t.onBeforeRender && t.onBeforeRender(), c.value.length > 0 && i)
          for (const P of c.value)
            P.value !== null && (P.value.object.uuid === i.value.uuid ? (P.value.enabled = !0, P.value.update()) : P.value.enabled = !1);
        if (i && e)
          for (const P of n)
            e.render(P, i.value);
      }
    }
    return u(t), v(
      () => t.shadowMapEnabled,
      () => u(t)
    ), v(
      () => t.frameLimit,
      () => u(t)
    ), S("addCamera", (f) => l.value.push(f)), S("addScene", (f) => n.push(f)), S("addGeometry", (f) => o.push(f)), S("getGeometry", (f) => o.find((M) => M.name === f)), S("addControls", (f) => c.value.push(f)), S("camera", i), a({ three: e }), (f, M) => (ft(), ht(pt, null, [
      G(f.$slots, "default"),
      gt("canvas", {
        ref_key: "canvas",
        ref: m
      }, null, 512)
    ], 64));
  }
}), Bt = /* @__PURE__ */ E({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(s, { expose: a }) {
    const t = s, e = new bt();
    S("scene", e), b("addScene")(e);
    function n(o) {
      o.background && (e.background = new U(o.background));
    }
    return n(t), v(
      () => t.background,
      () => n(t)
    ), a({ three: e }), (o, i) => G(o.$slots, "default");
  }
}), $t = {
  name: "PerspectiveCamera"
}, Vt = /* @__PURE__ */ E({
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
    b("addCamera")(e);
    const n = b("canvas");
    ae(() => {
      t.name && (e.name = t.name), new ResizeObserver((l) => {
        l.forEach((c) => {
          t.autoResize && (e.aspect = c.contentRect.width / c.contentRect.height, e.updateProjectionMatrix());
        });
      }).observe(n.value);
    }), L(t, "position", e), L(t, "up", e), L(t, "lookAt", e);
    function o() {
      t.autoResize || (e.aspect = t.aspect), e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return o(), _(t, "aspect", o), _(t, "near", o), _(t, "far", o), S("parentCamera", e), a({ three: e }), (i, l) => G(i.$slots, "default");
  }
}), Ft = {
  name: "OrthographicCamera"
}, Ut = /* @__PURE__ */ E({
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
    e.lookAt(0, 0, 0), e.updateProjectionMatrix(), b("addCamera")(e);
    const n = b("canvas");
    ae(() => {
      t.name && (e.name = t.name), new ResizeObserver((l) => {
        l.forEach((c) => {
          const m = c.contentRect.width / c.contentRect.height;
          e.left = e.bottom * m, e.right = e.top * m, e.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), L(t, "position", e), L(t, "up", e), L(t, "lookAt", e);
    function o() {
      e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return o(), _(t, "near", o), _(t, "far", o), S("parentCamera", e), a({ three: e }), (i, l) => G(i.$slots, "default");
  }
}), Ye = { type: "change" }, pe = { type: "start" }, Ze = { type: "end" };
class Ht extends vt {
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
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(Ye), e.update(), o = n.NONE;
    }, this.update = function() {
      const r = new z(), d = new Be().setFromUnitVectors(a.up, new z(0, 1, 0)), C = d.clone().invert(), R = new z(), N = new Be(), X = 2 * Math.PI;
      return function() {
        const je = e.object.position;
        r.copy(je).sub(e.target), r.applyQuaternion(d), l.setFromVector3(r), e.autoRotate && o === n.NONE && Y(ne()), e.enableDamping ? (l.theta += c.theta * e.dampingFactor, l.phi += c.phi * e.dampingFactor) : (l.theta += c.theta, l.phi += c.phi);
        let V = e.minAzimuthAngle, F = e.maxAzimuthAngle;
        return isFinite(V) && isFinite(F) && (V < -Math.PI ? V += X : V > Math.PI && (V -= X), F < -Math.PI ? F += X : F > Math.PI && (F -= X), V <= F ? l.theta = Math.max(V, Math.min(F, l.theta)) : l.theta = l.theta > (V + F) / 2 ? Math.max(V, l.theta) : Math.min(F, l.theta)), l.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= m, l.radius = Math.max(e.minDistance, Math.min(e.maxDistance, l.radius)), e.enableDamping === !0 ? e.target.addScaledVector(y, e.dampingFactor) : e.target.add(y), r.setFromSpherical(l), r.applyQuaternion(C), je.copy(e.target).add(r), e.object.lookAt(e.target), e.enableDamping === !0 ? (c.theta *= 1 - e.dampingFactor, c.phi *= 1 - e.dampingFactor, y.multiplyScalar(1 - e.dampingFactor)) : (c.set(0, 0, 0), y.set(0, 0, 0)), m = 1, h || R.distanceToSquared(e.object.position) > i || 8 * (1 - N.dot(e.object.quaternion)) > i ? (e.dispatchEvent(Ye), R.copy(e.object.position), N.copy(e.object.quaternion), h = !1, !0) : !1;
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
    const y = new z();
    let h = !1;
    const p = new B(), u = new B(), g = new B(), f = new B(), M = new B(), P = new B(), T = new B(), x = new B(), O = new B(), w = [], k = {};
    function ne() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function D() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function Y(r) {
      c.theta -= r;
    }
    function A(r) {
      c.phi -= r;
    }
    const j = function() {
      const r = new z();
      return function(C, R) {
        r.setFromMatrixColumn(R, 0), r.multiplyScalar(-C), y.add(r);
      };
    }(), ve = function() {
      const r = new z();
      return function(C, R) {
        e.screenSpacePanning === !0 ? r.setFromMatrixColumn(R, 1) : (r.setFromMatrixColumn(R, 0), r.crossVectors(e.object.up, r)), r.multiplyScalar(C), y.add(r);
      };
    }(), Z = function() {
      const r = new z();
      return function(C, R) {
        const N = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const X = e.object.position;
          r.copy(X).sub(e.target);
          let ie = r.length();
          ie *= Math.tan(e.object.fov / 2 * Math.PI / 180), j(2 * C * ie / N.clientHeight, e.object.matrix), ve(2 * R * ie / N.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (j(C * (e.object.right - e.object.left) / e.object.zoom / N.clientWidth, e.object.matrix), ve(R * (e.object.top - e.object.bottom) / e.object.zoom / N.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function me(r) {
      e.object.isPerspectiveCamera ? m /= r : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * r)), e.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function Pe(r) {
      e.object.isPerspectiveCamera ? m *= r : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / r)), e.object.updateProjectionMatrix(), h = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function Me(r) {
      p.set(r.clientX, r.clientY);
    }
    function Je(r) {
      T.set(r.clientX, r.clientY);
    }
    function Le(r) {
      f.set(r.clientX, r.clientY);
    }
    function Qe(r) {
      u.set(r.clientX, r.clientY), g.subVectors(u, p).multiplyScalar(e.rotateSpeed);
      const d = e.domElement;
      Y(2 * Math.PI * g.x / d.clientHeight), A(2 * Math.PI * g.y / d.clientHeight), p.copy(u), e.update();
    }
    function et(r) {
      x.set(r.clientX, r.clientY), O.subVectors(x, T), O.y > 0 ? me(D()) : O.y < 0 && Pe(D()), T.copy(x), e.update();
    }
    function tt(r) {
      M.set(r.clientX, r.clientY), P.subVectors(M, f).multiplyScalar(e.panSpeed), Z(P.x, P.y), f.copy(M), e.update();
    }
    function nt(r) {
      r.deltaY < 0 ? Pe(D()) : r.deltaY > 0 && me(D()), e.update();
    }
    function ot(r) {
      let d = !1;
      switch (r.code) {
        case e.keys.UP:
          Z(0, e.keyPanSpeed), d = !0;
          break;
        case e.keys.BOTTOM:
          Z(0, -e.keyPanSpeed), d = !0;
          break;
        case e.keys.LEFT:
          Z(e.keyPanSpeed, 0), d = !0;
          break;
        case e.keys.RIGHT:
          Z(-e.keyPanSpeed, 0), d = !0;
          break;
      }
      d && (r.preventDefault(), e.update());
    }
    function xe() {
      if (w.length === 1)
        p.set(w[0].pageX, w[0].pageY);
      else {
        const r = 0.5 * (w[0].pageX + w[1].pageX), d = 0.5 * (w[0].pageY + w[1].pageY);
        p.set(r, d);
      }
    }
    function Ee() {
      if (w.length === 1)
        f.set(w[0].pageX, w[0].pageY);
      else {
        const r = 0.5 * (w[0].pageX + w[1].pageX), d = 0.5 * (w[0].pageY + w[1].pageY);
        f.set(r, d);
      }
    }
    function Ae() {
      const r = w[0].pageX - w[1].pageX, d = w[0].pageY - w[1].pageY, C = Math.sqrt(r * r + d * d);
      T.set(0, C);
    }
    function at() {
      e.enableZoom && Ae(), e.enablePan && Ee();
    }
    function st() {
      e.enableZoom && Ae(), e.enableRotate && xe();
    }
    function Se(r) {
      if (w.length == 1)
        u.set(r.pageX, r.pageY);
      else {
        const C = he(r), R = 0.5 * (r.pageX + C.x), N = 0.5 * (r.pageY + C.y);
        u.set(R, N);
      }
      g.subVectors(u, p).multiplyScalar(e.rotateSpeed);
      const d = e.domElement;
      Y(2 * Math.PI * g.x / d.clientHeight), A(2 * Math.PI * g.y / d.clientHeight), p.copy(u);
    }
    function Oe(r) {
      if (w.length === 1)
        M.set(r.pageX, r.pageY);
      else {
        const d = he(r), C = 0.5 * (r.pageX + d.x), R = 0.5 * (r.pageY + d.y);
        M.set(C, R);
      }
      P.subVectors(M, f).multiplyScalar(e.panSpeed), Z(P.x, P.y), f.copy(M);
    }
    function Te(r) {
      const d = he(r), C = r.pageX - d.x, R = r.pageY - d.y, N = Math.sqrt(C * C + R * R);
      x.set(0, N), O.set(0, Math.pow(x.y / T.y, e.zoomSpeed)), me(O.y), T.copy(x);
    }
    function it(r) {
      e.enableZoom && Te(r), e.enablePan && Oe(r);
    }
    function rt(r) {
      e.enableZoom && Te(r), e.enableRotate && Se(r);
    }
    function Ce(r) {
      e.enabled !== !1 && (w.length === 0 && (e.domElement.setPointerCapture(r.pointerId), e.domElement.addEventListener("pointermove", de), e.domElement.addEventListener("pointerup", fe)), dt(r), r.pointerType === "touch" ? ut(r) : lt(r));
    }
    function de(r) {
      e.enabled !== !1 && (r.pointerType === "touch" ? mt(r) : ct(r));
    }
    function fe(r) {
      Ge(r), w.length === 0 && (e.domElement.releasePointerCapture(r.pointerId), e.domElement.removeEventListener("pointermove", de), e.domElement.removeEventListener("pointerup", fe)), e.dispatchEvent(Ze), o = n.NONE;
    }
    function Re(r) {
      Ge(r);
    }
    function lt(r) {
      let d;
      switch (r.button) {
        case 0:
          d = e.mouseButtons.LEFT;
          break;
        case 1:
          d = e.mouseButtons.MIDDLE;
          break;
        case 2:
          d = e.mouseButtons.RIGHT;
          break;
        default:
          d = -1;
      }
      switch (d) {
        case W.DOLLY:
          if (e.enableZoom === !1)
            return;
          Je(r), o = n.DOLLY;
          break;
        case W.ROTATE:
          if (r.ctrlKey || r.metaKey || r.shiftKey) {
            if (e.enablePan === !1)
              return;
            Le(r), o = n.PAN;
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
            Le(r), o = n.PAN;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && e.dispatchEvent(pe);
    }
    function ct(r) {
      if (e.enabled !== !1)
        switch (o) {
          case n.ROTATE:
            if (e.enableRotate === !1)
              return;
            Qe(r);
            break;
          case n.DOLLY:
            if (e.enableZoom === !1)
              return;
            et(r);
            break;
          case n.PAN:
            if (e.enablePan === !1)
              return;
            tt(r);
            break;
        }
    }
    function ze(r) {
      e.enabled === !1 || e.enableZoom === !1 || o !== n.NONE || (r.preventDefault(), e.dispatchEvent(pe), nt(r), e.dispatchEvent(Ze));
    }
    function ke(r) {
      e.enabled === !1 || e.enablePan === !1 || ot(r);
    }
    function ut(r) {
      switch (Ie(r), w.length) {
        case 1:
          switch (e.touches.ONE) {
            case K.ROTATE:
              if (e.enableRotate === !1)
                return;
              xe(), o = n.TOUCH_ROTATE;
              break;
            case K.PAN:
              if (e.enablePan === !1)
                return;
              Ee(), o = n.TOUCH_PAN;
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
              at(), o = n.TOUCH_DOLLY_PAN;
              break;
            case K.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              st(), o = n.TOUCH_DOLLY_ROTATE;
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
    function mt(r) {
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
          it(r), e.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          rt(r), e.update();
          break;
        default:
          o = n.NONE;
      }
    }
    function De(r) {
      e.enabled !== !1 && r.preventDefault();
    }
    function dt(r) {
      w.push(r);
    }
    function Ge(r) {
      delete k[r.pointerId];
      for (let d = 0; d < w.length; d++)
        if (w[d].pointerId == r.pointerId) {
          w.splice(d, 1);
          return;
        }
    }
    function Ie(r) {
      let d = k[r.pointerId];
      d === void 0 && (d = new B(), k[r.pointerId] = d), d.set(r.pageX, r.pageY);
    }
    function he(r) {
      const d = r.pointerId === w[0].pointerId ? w[1] : w[0];
      return k[d.pointerId];
    }
    e.domElement.addEventListener("contextmenu", De), e.domElement.addEventListener("pointerdown", Ce), e.domElement.addEventListener("pointercancel", Re), e.domElement.addEventListener("wheel", ze, { passive: !1 }), this.update();
  }
}
const Yt = {
  name: "OrbitControls",
  render: () => null
}, Zt = /* @__PURE__ */ E({
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
    b("addControls")(e);
    const n = b("parentCamera"), o = b("canvas");
    function i() {
      e.value != null && (e.value.enablePan = t.enablePan, e.value.enableRotate = t.enableRotate, e.value.enableZoom = t.enableZoom, e.value.minZoom = t.minZoom, e.value.maxZoom = t.maxZoom, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance, e.value.minPolarAngle = t.minPolarAngle, e.value.maxPolarAngle = t.maxPolarAngle, e.value.minAzimuthAngle = t.minAzimuthAngle, e.value.maxAzimuthAngle = t.maxAzimuthAngle);
    }
    return v(o, () => {
      e.value = new Ht(n, o.value), i(), L(t, "target", e.value);
    }), i(), _(t, "enablePan", i), _(t, "enableRotate", i), _(t, "enableZoom", i), _(t, "minZoom", i), _(t, "maxZoom", i), _(t, "minDistance", i), _(t, "maxDistance", i), _(t, "minPolarAngle", i), _(t, "maxPolarAngle", i), _(t, "minAzimuthAngle", i), _(t, "maxAzimuthAngle", i), a({ three: e }), { props: t, three: e, camera: n, canvas: o, applyProps: i };
  }
}), Xt = /* @__PURE__ */ E({
  __name: "Group",
  props: {
    enableRaycasting: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  emits: ["click", "mousemove", "mouseenter", "mouseleave"],
  setup(s, { expose: a, emit: t }) {
    const e = s, n = new we();
    return ue(n), L(e, "position", n), L(e, "rotation", n), L(e, "scale", n), jt(n.children, e, t), S("parent", n), a({ three: n }), (o, i) => G(o.$slots, "default");
  }
}), Wt = /* @__PURE__ */ E({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("scene"), n = new $(), o = new oe({ color: "black" }), i = new ye(n, o);
    return ue(i), L(t, "position", i), L(t, "rotation", i), L(t, "scale", i), ee(() => {
      e.remove(i), se(i);
    }), S("mesh", i), a({ three: i }), (l, c) => G(l.$slots, "default");
  }
}), Kt = /* @__PURE__ */ E({
  __name: "Mesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("scene"), n = new $(), o = new qe(), i = new be(n, o);
    i.castShadow = !0, i.receiveShadow = !0, ue(i), L(t, "position", i), L(t, "rotation", i), L(t, "scale", i);
    function l() {
      i.castShadow = t.castShadow, i.receiveShadow = t.receiveShadow;
    }
    return l(), _(t, "castShadow", l), _(t, "receiveShadow", l), ee(() => {
      e.remove(i), se(i);
    }), S("mesh", i), a({ three: i }), (c, m) => G(c.$slots, "default");
  }
}), qt = /* @__PURE__ */ E({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("scene"), n = new $(), o = new Q({ color: "red", sizeAttenuation: !1, size: 2 }), i = new le(n, o);
    return ue(i), L(t, "position", i), L(t, "rotation", i), L(t, "scale", i), ee(() => {
      e.remove(i), se(i);
    }), S("mesh", i), a({ three: i }), (l, c) => G(l.$slots, "default");
  }
}), Jt = /^[og]\s*(.+)?/, Qt = /^mtllib /, en = /^usemtl /, tn = /^usemap /, Xe = new z(), ge = new z(), We = new z(), Ke = new z(), I = new z(), re = new U();
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
      Xe.fromArray(n, a), ge.fromArray(n, t), We.fromArray(n, e), I.subVectors(We, ge), Ke.subVectors(Xe, ge), I.cross(Ke), I.normalize(), o.push(I.x, I.y, I.z), o.push(I.x, I.y, I.z), o.push(I.x, I.y, I.z);
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
      const y = this.vertices.length;
      let h = this.parseVertexIndex(a, y), p = this.parseVertexIndex(t, y), u = this.parseVertexIndex(e, y);
      if (this.addVertex(h, p, u), this.addColor(h, p, u), l !== void 0 && l !== "") {
        const g = this.normals.length;
        h = this.parseNormalIndex(l, g), p = this.parseNormalIndex(c, g), u = this.parseNormalIndex(m, g), this.addNormal(h, p, u);
      } else
        this.addFaceNormal(h, p, u);
      if (n !== void 0 && n !== "") {
        const g = this.uvs.length;
        h = this.parseUVIndex(n, g), p = this.parseUVIndex(o, g), u = this.parseUVIndex(i, g), this.addUV(h, p, u), this.object.geometry.hasUVIndices = !0;
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
class on extends Pt {
  constructor(a) {
    super(a), this.materials = null;
  }
  load(a, t, e, n) {
    const o = this, i = new Mt(this.manager);
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
    for (let h = 0, p = e.length; h < p; h++)
      if (n = e[h], n = c ? n.trimLeft() : n.trim(), i = n.length, i !== 0 && (o = n.charAt(0), o !== "#"))
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
          const g = n.slice(1).trim().split(/\s+/), f = [];
          for (let P = 0, T = g.length; P < T; P++) {
            const x = g[P];
            if (x.length > 0) {
              const O = x.split("/");
              f.push(O);
            }
          }
          const M = f[0];
          for (let P = 1, T = f.length - 1; P < T; P++) {
            const x = f[P], O = f[P + 1];
            t.addFace(
              M[0],
              x[0],
              O[0],
              M[1],
              x[1],
              O[1],
              M[2],
              x[2],
              O[2]
            );
          }
        } else if (o === "l") {
          const u = n.substring(1).trim().split(" ");
          let g = [];
          const f = [];
          if (n.indexOf("/") === -1)
            g = u;
          else
            for (let M = 0, P = u.length; M < P; M++) {
              const T = u[M].split("/");
              T[0] !== "" && g.push(T[0]), T[1] !== "" && f.push(T[1]);
            }
          t.addLineGeometry(g, f);
        } else if (o === "p") {
          const g = n.slice(1).trim().split(" ");
          t.addPointGeometry(g);
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
            const g = l[1].trim().toLowerCase();
            t.object.smooth = g !== "0" && g !== "off";
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
    const m = new we();
    if (m.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let h = 0, p = t.objects.length; h < p; h++) {
        const u = t.objects[h], g = u.geometry, f = u.materials, M = g.type === "Line", P = g.type === "Points";
        let T = !1;
        if (g.vertices.length === 0)
          continue;
        const x = new $();
        x.setAttribute("position", new q(g.vertices, 3)), g.normals.length > 0 && x.setAttribute("normal", new q(g.normals, 3)), g.colors.length > 0 && (T = !0, x.setAttribute("color", new q(g.colors, 3))), g.hasUVIndices === !0 && x.setAttribute("uv", new q(g.uvs, 2));
        const O = [];
        for (let k = 0, ne = f.length; k < ne; k++) {
          const D = f[k], Y = D.name + "_" + D.smooth + "_" + T;
          let A = t.materials[Y];
          if (this.materials !== null) {
            if (A = this.materials.create(D.name), M && A && !(A instanceof oe)) {
              const j = new oe();
              Ve.prototype.copy.call(j, A), j.color.copy(A.color), A = j;
            } else if (P && A && !(A instanceof Q)) {
              const j = new Q({ size: 10, sizeAttenuation: !1 });
              Ve.prototype.copy.call(j, A), j.color.copy(A.color), j.map = A.map, A = j;
            }
          }
          A === void 0 && (M ? A = new oe() : P ? A = new Q({ size: 1, sizeAttenuation: !1 }) : A = new Lt(), A.name = D.name, A.flatShading = !D.smooth, A.vertexColors = T, t.materials[Y] = A), O.push(A);
        }
        let w;
        if (O.length > 1) {
          for (let k = 0, ne = f.length; k < ne; k++) {
            const D = f[k];
            x.addGroup(D.groupStart, D.groupCount, k);
          }
          M ? w = new ye(x, O) : P ? w = new le(x, O) : w = new be(x, O);
        } else
          M ? w = new ye(x, O[0]) : P ? w = new le(x, O[0]) : w = new be(x, O[0]);
        w.name = u.name, m.add(w);
      }
    else if (t.vertices.length > 0) {
      const h = new Q({ size: 1, sizeAttenuation: !1 }), p = new $();
      p.setAttribute("position", new q(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (p.setAttribute("color", new q(t.colors, 3)), h.vertexColors = !0);
      const u = new le(p, h);
      m.add(u);
    }
    return m;
  }
}
const an = /* @__PURE__ */ E({
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
    const e = s, n = new on(), o = b("scene"), i = new we();
    i.castShadow = !0, i.receiveShadow = !0, o.add(i), L(e, "position", i), L(e, "rotation", i), L(e, "scale", i);
    function l() {
      n.load(
        e.url,
        function(c) {
          for (const m of c.children)
            i.add(m), m.material = i.material, L(e, "position", i, !1), L(e, "rotation", i, !1), L(e, "scale", i, !1);
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
    return l(), v(
      () => e.url,
      () => l()
    ), S("mesh", i), a({
      three: i
    }), (c, m) => G(c.$slots, "default");
  }
}), sn = /* @__PURE__ */ E({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("scene"), n = new xt(t.size);
    return e.add(n), L(t, "position", n), L(t, "rotation", n), L(t, "scale", n), S("mesh", n), a({ three: n }), (o, i) => G(o.$slots, "default");
  }
}), rn = {
  name: "BoxGeometry",
  render: () => null
}, ln = /* @__PURE__ */ E({
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
    const t = s, e = b("mesh");
    function n(c, m, y, h, p, u) {
      return new Et(c, m, y, h, p, u);
    }
    const o = H(new $());
    o.name = t.name, e.geometry = o;
    const i = b("addGeometry");
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
    return l(), _(t, "name", () => {
      o.name = t.name;
    }), _(t, "width", l), _(t, "height", l), _(t, "depth", l), _(t, "widthSegments", l), _(t, "heightSegments", l), _(t, "depthSegments", l), a({ three: o }), { props: t, mesh: e, makeBox: n, three: o, addGeometry: i, redoGeometry: l };
  }
}), cn = {
  name: "BufferGeometry",
  render: () => null
}, un = /* @__PURE__ */ E({
  ...cn,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh");
    function n(c, m) {
      const y = new $(), h = new Float32Array(c.length);
      for (let p = 0; p < c.length; p++)
        h[p] = c[p];
      return y.setAttribute("position", new At(h, 3)), t.faces.length > 0 && y.setIndex(m), y.computeVertexNormals(), y;
    }
    const o = H(n(t.vertices, t.faces));
    o.name = t.name, e.geometry = o;
    const i = b("addGeometry");
    i(o);
    function l(c, m) {
      const y = n(c, m);
      te(o, y);
    }
    return v(
      () => t.vertices,
      (c) => {
        l(c, t.faces);
      },
      { deep: !0, immediate: !0 }
    ), v(
      () => t.faces,
      (c) => {
        l(t.vertices, c);
      },
      { deep: !0, immediate: !0 }
    ), a({ three: o }), { props: t, mesh: e, makeGeometry: n, three: o, addGeometry: i, redoGeometry: l };
  }
}), mn = {
  name: "EdgesGeometry",
  render: () => null
}, dn = /* @__PURE__ */ E({
  ...mn,
  props: {
    geometry: null
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = H(new $());
    e.geometry = n;
    const o = b("getGeometry"), i = b("addGeometry");
    i(n);
    function l() {
      const y = new St(o(t.geometry));
      te(n, y);
    }
    let c = v(
      o(t.geometry),
      () => {
        l();
      },
      { deep: !0, immediate: !0 }
    );
    _(t, "geometry", () => {
      c(), c = v(
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
    }, set unwatch(y) {
      c = y;
    }, waitUntilGeometryChanged: m };
  }
}), fn = {
  name: "PlaneGeometry",
  render: () => null
}, hn = /* @__PURE__ */ E({
  ...fn,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh");
    function n(c, m, y, h) {
      return new Ot(c, m, y, h);
    }
    const o = H(new $());
    o.name = t.name, e.geometry = o;
    const i = b("addGeometry");
    i(o);
    function l() {
      const c = n(t.width, t.height, t.widthSegments, t.heightSegments);
      te(o, c);
    }
    return l(), _(t, "width", l), _(t, "height", l), _(t, "widthSegments", l), _(t, "heightSegments", l), a({ three: o }), { props: t, mesh: e, makePlane: n, three: o, addGeometry: i, redoGeometry: l };
  }
}), pn = {
  name: "SphereGeometry",
  render: () => null
}, gn = /* @__PURE__ */ E({
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
    const t = s, e = b("mesh");
    function n(c, m, y, h, p, u, g) {
      return new Tt(c, m, y, h, p, u, g);
    }
    const o = H(new $());
    o.name = t.name, e.geometry = o;
    const i = b("addGeometry");
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
    return l(), _(t, "radius", l), _(t, "widthSegments", l), _(t, "heightSegments", l), _(t, "phiStart", l), _(t, "phiLength", l), _(t, "thetaStart", l), _(t, "thetaLength", l), a({ three: o }), { props: t, mesh: e, makeSphere: n, three: o, addGeometry: i, redoGeometry: l };
  }
}), yn = {
  name: "WireframeGeometry",
  render: () => null
}, bn = /* @__PURE__ */ E({
  ...yn,
  props: {
    geometry: null
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = H(new $());
    e.geometry = n;
    const o = b("getGeometry"), i = b("addGeometry");
    i(n);
    function l() {
      const y = new Ct(o(t.geometry));
      te(n, y);
    }
    let c = v(
      o(t.geometry),
      () => {
        l();
      },
      { deep: !0, immediate: !0 }
    );
    _(t, "geometry", () => {
      c(), c = v(
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
    }, set unwatch(y) {
      c = y;
    }, waitUntilGeometryChanged: m };
  }
}), wn = {
  name: "LineBasicMaterial",
  render: () => null
}, _n = /* @__PURE__ */ E({
  ...wn,
  props: {
    color: { default: 16777215 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = new oe({ color: t.color });
    e.material = n;
    function o(i) {
      i.color && (n.color = new U(i.color));
    }
    return o(t), v(
      () => t.color,
      () => o(t)
    ), S("material", n), a({ three: n }), { props: t, mesh: e, three: n, applyProps: o };
  }
}), vn = {
  name: "MeshBasicMaterial"
}, Pn = /* @__PURE__ */ E({
  ...vn,
  props: {
    color: null,
    side: { default: _e },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = new qe();
    return e.material = n, v(
      () => t.color,
      () => {
        t.color !== void 0 && (n.color = new U(t.color));
      },
      { immediate: !0 }
    ), v(
      () => t.side,
      () => {
        n.side = t.side;
      },
      { immediate: !0 }
    ), v(
      () => t.opacity,
      () => {
        n.opacity = t.opacity;
      },
      { immediate: !0 }
    ), v(
      () => t.transparent,
      () => {
        n.transparent = t.transparent;
      },
      { immediate: !0 }
    ), v(
      () => t.vertexColors,
      () => {
        n.vertexColors = t.vertexColors;
      },
      { immediate: !0 }
    ), S("material", n), a({ three: n }), (o, i) => G(o.$slots, "default");
  }
}), Mn = {
  name: "MeshLambertMaterial"
}, Ln = /* @__PURE__ */ E({
  ...Mn,
  props: {
    color: { default: 16777215 },
    side: { default: _e },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = new Rt();
    e.material = n;
    function o(i) {
      i.color && (n.color = new U(i.color)), i.side && (n.side = i.side);
    }
    return o(t), v(
      () => t.color,
      () => o(t)
    ), v(
      () => t.side,
      () => o(t)
    ), v(
      () => t.opacity,
      () => {
        n.opacity = t.opacity;
      },
      { immediate: !0 }
    ), v(
      () => t.transparent,
      () => {
        n.transparent = t.transparent;
      },
      { immediate: !0 }
    ), S("material", n), a({ three: n }), (i, l) => G(i.$slots, "default");
  }
}), xn = {
  name: "PointsMaterial",
  render: () => null
}, En = /* @__PURE__ */ E({
  ...xn,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = new Q({ color: t.color, sizeAttenuation: t.sizeAttenuation, size: t.size });
    e.material = n;
    function o(i) {
      i.color && (n.color = new U(i.color)), i.size && (n.size = i.size), i.sizeAttenuation !== void 0 && (n.sizeAttenuation = i.sizeAttenuation);
    }
    return o(t), v(
      () => t.color,
      () => o(t)
    ), v(
      () => t.size,
      () => o(t)
    ), v(
      () => t.sizeAttenuation,
      () => o(t)
    ), S("material", n), a({ three: n }), { props: t, mesh: e, three: n, applyProps: o };
  }
}), An = {
  name: "MeshNormalMaterial"
}, Sn = /* @__PURE__ */ E({
  ...An,
  props: {
    side: { default: _e },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = new zt();
    return e.material = n, v(
      () => t.side,
      () => {
        n.side = t.side;
      },
      { immediate: !0 }
    ), v(
      () => t.opacity,
      () => {
        n.opacity = t.opacity;
      },
      { immediate: !0 }
    ), v(
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
}, Tn = /* @__PURE__ */ E({
  ...On,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("scene"), n = new kt();
    e.add(n);
    function o(i) {
      n.color = new U(i.color), n.intensity = i.intensity;
    }
    return o(t), v(
      () => t.color,
      () => o(t)
    ), v(
      () => t.intensity,
      () => o(t)
    ), a({ three: n }), { props: t, scene: e, three: n, applyProps: o };
  }
}), Cn = {
  name: "PointLight",
  render: () => null
}, Rn = /* @__PURE__ */ E({
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
    const t = s, e = b("scene"), n = new Dt();
    e.add(n), L(t, "position", n), L(t, "rotation", n), L(t, "scale", n);
    function o(i) {
      n.color = new U(i.color), n.intensity = i.intensity, n.castShadow = i.castShadow;
    }
    return o(t), v(
      () => t.color,
      () => o(t)
    ), v(
      () => t.intensity,
      () => o(t)
    ), v(
      () => t.castShadow,
      () => o(t)
    ), a({ three: n }), { props: t, scene: e, three: n, applyProps: o };
  }
}), zn = {
  name: "TextureLoader",
  render: () => null
}, kn = /* @__PURE__ */ E({
  ...zn,
  props: {
    url: null
  },
  setup(s, { expose: a }) {
    const t = s, e = b("material"), n = J(new Gt());
    function o(i) {
      "map" in e && (e.map = new It().load(i.url));
    }
    return o(t), v(
      () => t.url,
      () => o(t)
    ), a({ three: n }), { props: t, material: e, three: n, applyProps: o };
  }
});
function In(s) {
  s.component("Renderer", Nt), s.component("Scene", Bt), s.component("PerspectiveCamera", Vt), s.component("OrthographicCamera", Ut), s.component("OrbitControls", Zt), s.component("Group", Xt), s.component("LineSegments", Wt), s.component("Mesh", Kt), s.component("Points", qt), s.component("OBJLoader", an), s.component("AxesHelper", sn), s.component("BoxGeometry", ln), s.component("BufferGeometry", un), s.component("EdgesGeometry", dn), s.component("PlaneGeometry", hn), s.component("SphereGeometry", gn), s.component("WireframeGeometry", bn), s.component("LineBasicMaterial", _n), s.component("MeshBasicMaterial", Pn), s.component("MeshLambertMaterial", Ln), s.component("PointsMaterial", En), s.component("MeshNormalMaterial", Sn), s.component("AmbientLight", Tn), s.component("PointLight", Rn), s.component("TextureLoader", kn);
}
export {
  Tn as AmbientLight,
  sn as AxesHelper,
  ln as BoxGeometry,
  un as BufferGeometry,
  dn as EdgesGeometry,
  Xt as Group,
  _n as LineBasicMaterial,
  Wt as LineSegments,
  Kt as Mesh,
  Pn as MeshBasicMaterial,
  Ln as MeshLambertMaterial,
  Sn as MeshNormalMaterial,
  an as OBJLoader,
  Zt as OrbitControls,
  Ut as OrthographicCamera,
  Vt as PerspectiveCamera,
  hn as PlaneGeometry,
  Rn as PointLight,
  qt as Points,
  En as PointsMaterial,
  Nt as Renderer,
  Bt as Scene,
  gn as SphereGeometry,
  kn as TextureLoader,
  bn as WireframeGeometry,
  In as install
};

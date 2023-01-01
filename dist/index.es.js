import { defineComponent as O, ref as G, provide as R, watch as v, onMounted as he, openBlock as at, createElementBlock as it, Fragment as rt, renderSlot as B, createElementVNode as lt, inject as L } from "vue";
import { WebGLRenderer as ct, Scene as ut, Color as U, Vector3 as C, PerspectiveCamera as ht, OrthographicCamera as dt, EventDispatcher as ft, MOUSE as X, TOUCH as K, Quaternion as Te, Spherical as je, Vector2 as V, BufferGeometry as Q, MeshBasicMaterial as Fe, Mesh as ue, PointsMaterial as q, Points as ne, Loader as mt, FileLoader as pt, Group as $e, Float32BufferAttribute as W, LineBasicMaterial as re, Material as Ce, MeshPhongMaterial as gt, LineSegments as Re, AxesHelper as bt, BoxGeometry as yt, BufferAttribute as wt, PlaneGeometry as _t, SphereGeometry as vt, FrontSide as Ge, MeshLambertMaterial as Pt, AmbientLight as Et, PointLight as St, Texture as Lt, TextureLoader as Mt } from "three";
const xt = /* @__PURE__ */ O({
  __name: "Renderer",
  props: {
    camera: null,
    autoResize: { type: Boolean, default: !0 },
    onBeforeRender: { type: Function, default: () => {
    } },
    antialias: { type: Boolean, default: !1 },
    shadowMapEnabled: { type: Boolean, default: !1 }
  },
  setup(r, { expose: a }) {
    const t = r;
    let e = null;
    const n = [];
    let o = null;
    const i = G([]), l = G([]), d = G();
    R("canvas", d);
    let y = Date.now();
    const E = 1e3 / 30;
    v(
      () => t.camera,
      (c) => m(c)
    );
    const m = (c) => {
      if (c) {
        const b = i.value.find((p) => p.name === c);
        b === void 0 && (o = null), o = b;
      } else
        o = i.value[0];
    };
    function g(c) {
      e !== null && (e.shadowMap.enabled = c.shadowMapEnabled);
    }
    he(() => {
      e = new ct({ canvas: d.value, antialias: t.antialias }), e.setSize(1, 1), g(t), m(t.camera), new ResizeObserver((b) => {
        b.forEach((p) => {
          e && t.autoResize && e.setSize(p.contentRect.width, p.contentRect.height);
        });
      }).observe(d.value.parentElement), u();
    });
    function u() {
      requestAnimationFrame(u);
      const c = Date.now(), b = c - y;
      if (!(b < E)) {
        if (y = c - b % E, t.onBeforeRender && t.onBeforeRender(), l.value.length > 0 && o)
          for (const p of l.value)
            p.value !== null && (p.value.object.uuid === o.uuid ? (p.value.enabled = !0, p.value.update()) : p.value.enabled = !1);
        if (o && e)
          for (const p of n)
            e.render(p, o);
      }
    }
    return g(t), v(
      () => t.shadowMapEnabled,
      () => g(t)
    ), R("addCamera", (c) => i.value.push(c)), R("addScene", (c) => n.push(c)), R("addControls", (c) => l.value.push(c)), a({ three: e }), (c, b) => (at(), it(rt, null, [
      B(c.$slots, "default"),
      lt("canvas", {
        ref_key: "canvas",
        ref: d
      }, null, 512)
    ], 64));
  }
}), Ot = /* @__PURE__ */ O({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(r, { expose: a }) {
    const t = r, e = new ut();
    R("scene", e), L("addScene")(e);
    function n(o) {
      o.background && (e.background = new U(o.background));
    }
    return n(t), v(
      () => t.background,
      () => n(t)
    ), a({ three: e }), (o, i) => B(o.$slots, "default");
  }
}), ze = (r) => r === void 0 ? new C(0, 0, 0) : "x" in r ? new C(r.x, r.y, r.z) : new C(r[0], r[1], r[2]), De = (r, a, t) => {
  t[r].isVector3 ? t[r].set(a.x, a.y, a.z) : "isEuler" in t[r] && t[r].setFromVector3(a);
}, w = (r, a, t, e = !0) => {
  if (r[a] !== void 0) {
    const n = ze(r[a]);
    if ("isGroup" in t)
      for (const o of t.children)
        w(r, a, o, !1);
    else
      De(a, n, t);
  }
  e && v(
    () => r[a],
    () => {
      if (r[a] !== void 0) {
        const n = ze(r[a]);
        if ("isGroup" in t)
          for (const o of t.children)
            w(r, a, o, !1);
        else
          De(a, n, t);
      }
    }
  );
}, j = (r, a, t) => {
  v(
    () => r[a],
    () => t
  );
}, At = {
  name: "PerspectiveCamera"
}, Tt = /* @__PURE__ */ O({
  ...At,
  props: {
    name: { default: "" },
    up: { default: () => [0, 1, 0] },
    position: { default: () => [0, 0, 0] },
    lookAt: { default: () => [0, 0, 0] }
  },
  setup(r, { expose: a }) {
    const t = r, e = new ht(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    L("addCamera")(e);
    const n = L("canvas");
    he(() => {
      t.name && (e.name = t.name), new ResizeObserver((l) => {
        l.forEach((d) => {
          e.aspect = d.contentRect.width / d.contentRect.height, e.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), w(t, "position", e), w(t, "up", e), w(t, "lookAt", e);
    function o(i) {
    }
    return v(t, () => void 0), R("parentCamera", e), a({ three: e }), (i, l) => B(i.$slots, "default");
  }
}), jt = {
  name: "OrthographicCamera"
}, Ct = /* @__PURE__ */ O({
  ...jt,
  props: {
    name: { default: "" },
    up: { default: () => [0, 1, 0] },
    position: { default: () => [0, 0, 0] },
    lookAt: { default: () => [0, 0, 0] }
  },
  setup(r, { expose: a }) {
    const t = r, e = new dt(-30, 30, 30, -30, 0.1, 1e3);
    e.lookAt(0, 0, 0), e.updateProjectionMatrix(), L("addCamera")(e), he(() => {
      t.name && (e.name = t.name);
    }), w(t, "position", e), w(t, "up", e), w(t, "lookAt", e);
    function n(o) {
    }
    return v(t, () => void 0), R("parentCamera", e), a({ three: e }), (o, i) => B(o.$slots, "default");
  }
}), ke = { type: "change" }, le = { type: "start" }, Ie = { type: "end" };
class Rt extends ft {
  constructor(a, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = a, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new C(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: X.ROTATE, MIDDLE: X.DOLLY, RIGHT: X.PAN }, this.touches = { ONE: K.ROTATE, TWO: K.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return l.phi;
    }, this.getAzimuthalAngle = function() {
      return l.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(s) {
      s.addEventListener("keydown", Le), this._domElementKeyEvents = s;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(ke), e.update(), o = n.NONE;
    }, this.update = function() {
      const s = new C(), h = new Te().setFromUnitVectors(a.up, new C(0, 1, 0)), A = h.clone().invert(), T = new C(), N = new Te(), Z = 2 * Math.PI;
      return function() {
        const Ae = e.object.position;
        s.copy(Ae).sub(e.target), s.applyQuaternion(h), l.setFromVector3(s), e.autoRotate && o === n.NONE && H(J()), e.enableDamping ? (l.theta += d.theta * e.dampingFactor, l.phi += d.phi * e.dampingFactor) : (l.theta += d.theta, l.phi += d.phi);
        let F = e.minAzimuthAngle, $ = e.maxAzimuthAngle;
        return isFinite(F) && isFinite($) && (F < -Math.PI ? F += Z : F > Math.PI && (F -= Z), $ < -Math.PI ? $ += Z : $ > Math.PI && ($ -= Z), F <= $ ? l.theta = Math.max(F, Math.min($, l.theta)) : l.theta = l.theta > (F + $) / 2 ? Math.max(F, l.theta) : Math.min($, l.theta)), l.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= y, l.radius = Math.max(e.minDistance, Math.min(e.maxDistance, l.radius)), e.enableDamping === !0 ? e.target.addScaledVector(E, e.dampingFactor) : e.target.add(E), s.setFromSpherical(l), s.applyQuaternion(A), Ae.copy(e.target).add(s), e.object.lookAt(e.target), e.enableDamping === !0 ? (d.theta *= 1 - e.dampingFactor, d.phi *= 1 - e.dampingFactor, E.multiplyScalar(1 - e.dampingFactor)) : (d.set(0, 0, 0), E.set(0, 0, 0)), y = 1, m || T.distanceToSquared(e.object.position) > i || 8 * (1 - N.dot(e.object.quaternion)) > i ? (e.dispatchEvent(ke), T.copy(e.object.position), N.copy(e.object.quaternion), m = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", Me), e.domElement.removeEventListener("pointerdown", Pe), e.domElement.removeEventListener("pointercancel", Ee), e.domElement.removeEventListener("wheel", Se), e.domElement.removeEventListener("pointermove", se), e.domElement.removeEventListener("pointerup", ae), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", Le);
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
    const i = 1e-6, l = new je(), d = new je();
    let y = 1;
    const E = new C();
    let m = !1;
    const g = new V(), u = new V(), c = new V(), b = new V(), p = new V(), S = new V(), x = new V(), _ = new V(), M = new V(), f = [], z = {};
    function J() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function D() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function H(s) {
      d.theta -= s;
    }
    function P(s) {
      d.phi -= s;
    }
    const I = function() {
      const s = new C();
      return function(A, T) {
        s.setFromMatrixColumn(T, 0), s.multiplyScalar(-A), E.add(s);
      };
    }(), de = function() {
      const s = new C();
      return function(A, T) {
        e.screenSpacePanning === !0 ? s.setFromMatrixColumn(T, 1) : (s.setFromMatrixColumn(T, 0), s.crossVectors(e.object.up, s)), s.multiplyScalar(A), E.add(s);
      };
    }(), Y = function() {
      const s = new C();
      return function(A, T) {
        const N = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const Z = e.object.position;
          s.copy(Z).sub(e.target);
          let ee = s.length();
          ee *= Math.tan(e.object.fov / 2 * Math.PI / 180), I(2 * A * ee / N.clientHeight, e.object.matrix), de(2 * T * ee / N.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (I(A * (e.object.right - e.object.left) / e.object.zoom / N.clientWidth, e.object.matrix), de(T * (e.object.top - e.object.bottom) / e.object.zoom / N.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function oe(s) {
      e.object.isPerspectiveCamera ? y /= s : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * s)), e.object.updateProjectionMatrix(), m = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function fe(s) {
      e.object.isPerspectiveCamera ? y *= s : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / s)), e.object.updateProjectionMatrix(), m = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function me(s) {
      g.set(s.clientX, s.clientY);
    }
    function Ue(s) {
      x.set(s.clientX, s.clientY);
    }
    function pe(s) {
      b.set(s.clientX, s.clientY);
    }
    function He(s) {
      u.set(s.clientX, s.clientY), c.subVectors(u, g).multiplyScalar(e.rotateSpeed);
      const h = e.domElement;
      H(2 * Math.PI * c.x / h.clientHeight), P(2 * Math.PI * c.y / h.clientHeight), g.copy(u), e.update();
    }
    function Ye(s) {
      _.set(s.clientX, s.clientY), M.subVectors(_, x), M.y > 0 ? oe(D()) : M.y < 0 && fe(D()), x.copy(_), e.update();
    }
    function Ze(s) {
      p.set(s.clientX, s.clientY), S.subVectors(p, b).multiplyScalar(e.panSpeed), Y(S.x, S.y), b.copy(p), e.update();
    }
    function Xe(s) {
      s.deltaY < 0 ? fe(D()) : s.deltaY > 0 && oe(D()), e.update();
    }
    function Ke(s) {
      let h = !1;
      switch (s.code) {
        case e.keys.UP:
          Y(0, e.keyPanSpeed), h = !0;
          break;
        case e.keys.BOTTOM:
          Y(0, -e.keyPanSpeed), h = !0;
          break;
        case e.keys.LEFT:
          Y(e.keyPanSpeed, 0), h = !0;
          break;
        case e.keys.RIGHT:
          Y(-e.keyPanSpeed, 0), h = !0;
          break;
      }
      h && (s.preventDefault(), e.update());
    }
    function ge() {
      if (f.length === 1)
        g.set(f[0].pageX, f[0].pageY);
      else {
        const s = 0.5 * (f[0].pageX + f[1].pageX), h = 0.5 * (f[0].pageY + f[1].pageY);
        g.set(s, h);
      }
    }
    function be() {
      if (f.length === 1)
        b.set(f[0].pageX, f[0].pageY);
      else {
        const s = 0.5 * (f[0].pageX + f[1].pageX), h = 0.5 * (f[0].pageY + f[1].pageY);
        b.set(s, h);
      }
    }
    function ye() {
      const s = f[0].pageX - f[1].pageX, h = f[0].pageY - f[1].pageY, A = Math.sqrt(s * s + h * h);
      x.set(0, A);
    }
    function We() {
      e.enableZoom && ye(), e.enablePan && be();
    }
    function qe() {
      e.enableZoom && ye(), e.enableRotate && ge();
    }
    function we(s) {
      if (f.length == 1)
        u.set(s.pageX, s.pageY);
      else {
        const A = ie(s), T = 0.5 * (s.pageX + A.x), N = 0.5 * (s.pageY + A.y);
        u.set(T, N);
      }
      c.subVectors(u, g).multiplyScalar(e.rotateSpeed);
      const h = e.domElement;
      H(2 * Math.PI * c.x / h.clientHeight), P(2 * Math.PI * c.y / h.clientHeight), g.copy(u);
    }
    function _e(s) {
      if (f.length === 1)
        p.set(s.pageX, s.pageY);
      else {
        const h = ie(s), A = 0.5 * (s.pageX + h.x), T = 0.5 * (s.pageY + h.y);
        p.set(A, T);
      }
      S.subVectors(p, b).multiplyScalar(e.panSpeed), Y(S.x, S.y), b.copy(p);
    }
    function ve(s) {
      const h = ie(s), A = s.pageX - h.x, T = s.pageY - h.y, N = Math.sqrt(A * A + T * T);
      _.set(0, N), M.set(0, Math.pow(_.y / x.y, e.zoomSpeed)), oe(M.y), x.copy(_);
    }
    function Je(s) {
      e.enableZoom && ve(s), e.enablePan && _e(s);
    }
    function Qe(s) {
      e.enableZoom && ve(s), e.enableRotate && we(s);
    }
    function Pe(s) {
      e.enabled !== !1 && (f.length === 0 && (e.domElement.setPointerCapture(s.pointerId), e.domElement.addEventListener("pointermove", se), e.domElement.addEventListener("pointerup", ae)), st(s), s.pointerType === "touch" ? nt(s) : et(s));
    }
    function se(s) {
      e.enabled !== !1 && (s.pointerType === "touch" ? ot(s) : tt(s));
    }
    function ae(s) {
      xe(s), f.length === 0 && (e.domElement.releasePointerCapture(s.pointerId), e.domElement.removeEventListener("pointermove", se), e.domElement.removeEventListener("pointerup", ae)), e.dispatchEvent(Ie), o = n.NONE;
    }
    function Ee(s) {
      xe(s);
    }
    function et(s) {
      let h;
      switch (s.button) {
        case 0:
          h = e.mouseButtons.LEFT;
          break;
        case 1:
          h = e.mouseButtons.MIDDLE;
          break;
        case 2:
          h = e.mouseButtons.RIGHT;
          break;
        default:
          h = -1;
      }
      switch (h) {
        case X.DOLLY:
          if (e.enableZoom === !1)
            return;
          Ue(s), o = n.DOLLY;
          break;
        case X.ROTATE:
          if (s.ctrlKey || s.metaKey || s.shiftKey) {
            if (e.enablePan === !1)
              return;
            pe(s), o = n.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            me(s), o = n.ROTATE;
          }
          break;
        case X.PAN:
          if (s.ctrlKey || s.metaKey || s.shiftKey) {
            if (e.enableRotate === !1)
              return;
            me(s), o = n.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            pe(s), o = n.PAN;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && e.dispatchEvent(le);
    }
    function tt(s) {
      if (e.enabled !== !1)
        switch (o) {
          case n.ROTATE:
            if (e.enableRotate === !1)
              return;
            He(s);
            break;
          case n.DOLLY:
            if (e.enableZoom === !1)
              return;
            Ye(s);
            break;
          case n.PAN:
            if (e.enablePan === !1)
              return;
            Ze(s);
            break;
        }
    }
    function Se(s) {
      e.enabled === !1 || e.enableZoom === !1 || o !== n.NONE || (s.preventDefault(), e.dispatchEvent(le), Xe(s), e.dispatchEvent(Ie));
    }
    function Le(s) {
      e.enabled === !1 || e.enablePan === !1 || Ke(s);
    }
    function nt(s) {
      switch (Oe(s), f.length) {
        case 1:
          switch (e.touches.ONE) {
            case K.ROTATE:
              if (e.enableRotate === !1)
                return;
              ge(), o = n.TOUCH_ROTATE;
              break;
            case K.PAN:
              if (e.enablePan === !1)
                return;
              be(), o = n.TOUCH_PAN;
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
              We(), o = n.TOUCH_DOLLY_PAN;
              break;
            case K.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              qe(), o = n.TOUCH_DOLLY_ROTATE;
              break;
            default:
              o = n.NONE;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && e.dispatchEvent(le);
    }
    function ot(s) {
      switch (Oe(s), o) {
        case n.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          we(s), e.update();
          break;
        case n.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          _e(s), e.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          Je(s), e.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          Qe(s), e.update();
          break;
        default:
          o = n.NONE;
      }
    }
    function Me(s) {
      e.enabled !== !1 && s.preventDefault();
    }
    function st(s) {
      f.push(s);
    }
    function xe(s) {
      delete z[s.pointerId];
      for (let h = 0; h < f.length; h++)
        if (f[h].pointerId == s.pointerId) {
          f.splice(h, 1);
          return;
        }
    }
    function Oe(s) {
      let h = z[s.pointerId];
      h === void 0 && (h = new V(), z[s.pointerId] = h), h.set(s.pageX, s.pageY);
    }
    function ie(s) {
      const h = s.pointerId === f[0].pointerId ? f[1] : f[0];
      return z[h.pointerId];
    }
    e.domElement.addEventListener("contextmenu", Me), e.domElement.addEventListener("pointerdown", Pe), e.domElement.addEventListener("pointercancel", Ee), e.domElement.addEventListener("wheel", Se, { passive: !1 }), this.update();
  }
}
const zt = {
  name: "OrbitControls",
  render: () => null
}, Dt = /* @__PURE__ */ O({
  ...zt,
  props: {
    name: null
  },
  setup(r, { expose: a }) {
    const t = r, e = G(null);
    L("addControls")(e);
    const n = L("parentCamera"), o = L("canvas");
    return v(o, () => {
      e.value = new Rt(n, o.value);
    }), a({ three: e.value }), { props: t, three: e, camera: n, canvas: o };
  }
}), kt = /* @__PURE__ */ O({
  __name: "Mesh",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    castShadow: { type: Boolean, default: !1 },
    receiveShadow: { type: Boolean, default: !1 }
  },
  setup(r, { expose: a }) {
    const t = r, e = L("scene"), n = new Q(), o = new Fe(), i = new ue(n, o);
    i.castShadow = !0, i.receiveShadow = !0, e.add(i), w(t, "position", i), w(t, "rotation", i), w(t, "scale", i);
    function l(d) {
      i.castShadow = d.castShadow, i.receiveShadow = d.receiveShadow;
    }
    return l(t), v(
      () => t.castShadow,
      () => l(t)
    ), v(
      () => t.receiveShadow,
      () => l(t)
    ), R("mesh", i), a({ three: i }), (d, y) => B(d.$slots, "default");
  }
}), It = /* @__PURE__ */ O({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: a }) {
    const t = r, e = L("scene"), n = new Q(), o = new q({ color: "red", sizeAttenuation: !1, size: 2 }), i = new ne(n, o);
    return e.add(i), w(t, "position", i), w(t, "rotation", i), w(t, "scale", i), R("mesh", i), a({ three: i }), (l, d) => B(l.$slots, "default");
  }
}), Nt = /^[og]\s*(.+)?/, Vt = /^mtllib /, Bt = /^usemtl /, Ft = /^usemap /, Ne = new C(), ce = new C(), Ve = new C(), Be = new C(), k = new C(), te = new U();
function $t() {
  const r = {
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
            clone: function(d) {
              const y = {
                index: typeof d == "number" ? d : this.index,
                name: this.name,
                mtllib: this.mtllib,
                smooth: this.smooth,
                groupStart: 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: !1
              };
              return y.clone = this.clone.bind(y), y;
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
      Ne.fromArray(n, a), ce.fromArray(n, t), Ve.fromArray(n, e), k.subVectors(Ve, ce), Be.subVectors(Ne, ce), k.cross(Be), k.normalize(), o.push(k.x, k.y, k.z), o.push(k.x, k.y, k.z), o.push(k.x, k.y, k.z);
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
    addFace: function(a, t, e, n, o, i, l, d, y) {
      const E = this.vertices.length;
      let m = this.parseVertexIndex(a, E), g = this.parseVertexIndex(t, E), u = this.parseVertexIndex(e, E);
      if (this.addVertex(m, g, u), this.addColor(m, g, u), l !== void 0 && l !== "") {
        const c = this.normals.length;
        m = this.parseNormalIndex(l, c), g = this.parseNormalIndex(d, c), u = this.parseNormalIndex(y, c), this.addNormal(m, g, u);
      } else
        this.addFaceNormal(m, g, u);
      if (n !== void 0 && n !== "") {
        const c = this.uvs.length;
        m = this.parseUVIndex(n, c), g = this.parseUVIndex(o, c), u = this.parseUVIndex(i, c), this.addUV(m, g, u), this.object.geometry.hasUVIndices = !0;
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
  return r.startObject("", !1), r;
}
class Gt extends mt {
  constructor(a) {
    super(a), this.materials = null;
  }
  load(a, t, e, n) {
    const o = this, i = new pt(this.manager);
    i.setPath(this.path), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(a, function(l) {
      try {
        t(o.parse(l));
      } catch (d) {
        n ? n(d) : console.error(d), o.manager.itemError(a);
      }
    }, e, n);
  }
  setMaterials(a) {
    return this.materials = a, this;
  }
  parse(a) {
    const t = new $t();
    a.indexOf(`\r
`) !== -1 && (a = a.replace(/\r\n/g, `
`)), a.indexOf(`\\
`) !== -1 && (a = a.replace(/\\\n/g, ""));
    const e = a.split(`
`);
    let n = "", o = "", i = 0, l = [];
    const d = typeof "".trimLeft == "function";
    for (let m = 0, g = e.length; m < g; m++)
      if (n = e[m], n = d ? n.trimLeft() : n.trim(), i = n.length, i !== 0 && (o = n.charAt(0), o !== "#"))
        if (o === "v") {
          const u = n.split(/\s+/);
          switch (u[0]) {
            case "v":
              t.vertices.push(
                parseFloat(u[1]),
                parseFloat(u[2]),
                parseFloat(u[3])
              ), u.length >= 7 ? (te.setRGB(
                parseFloat(u[4]),
                parseFloat(u[5]),
                parseFloat(u[6])
              ).convertSRGBToLinear(), t.colors.push(te.r, te.g, te.b)) : t.colors.push(void 0, void 0, void 0);
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
          const c = n.slice(1).trim().split(/\s+/), b = [];
          for (let S = 0, x = c.length; S < x; S++) {
            const _ = c[S];
            if (_.length > 0) {
              const M = _.split("/");
              b.push(M);
            }
          }
          const p = b[0];
          for (let S = 1, x = b.length - 1; S < x; S++) {
            const _ = b[S], M = b[S + 1];
            t.addFace(
              p[0],
              _[0],
              M[0],
              p[1],
              _[1],
              M[1],
              p[2],
              _[2],
              M[2]
            );
          }
        } else if (o === "l") {
          const u = n.substring(1).trim().split(" ");
          let c = [];
          const b = [];
          if (n.indexOf("/") === -1)
            c = u;
          else
            for (let p = 0, S = u.length; p < S; p++) {
              const x = u[p].split("/");
              x[0] !== "" && c.push(x[0]), x[1] !== "" && b.push(x[1]);
            }
          t.addLineGeometry(c, b);
        } else if (o === "p") {
          const c = n.slice(1).trim().split(" ");
          t.addPointGeometry(c);
        } else if ((l = Nt.exec(n)) !== null) {
          const u = (" " + l[0].slice(1).trim()).slice(1);
          t.startObject(u);
        } else if (Bt.test(n))
          t.object.startMaterial(n.substring(7).trim(), t.materialLibraries);
        else if (Vt.test(n))
          t.materialLibraries.push(n.substring(7).trim());
        else if (Ft.test(n))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (o === "s") {
          if (l = n.split(" "), l.length > 1) {
            const c = l[1].trim().toLowerCase();
            t.object.smooth = c !== "0" && c !== "off";
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
    const y = new $e();
    if (y.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let m = 0, g = t.objects.length; m < g; m++) {
        const u = t.objects[m], c = u.geometry, b = u.materials, p = c.type === "Line", S = c.type === "Points";
        let x = !1;
        if (c.vertices.length === 0)
          continue;
        const _ = new Q();
        _.setAttribute("position", new W(c.vertices, 3)), c.normals.length > 0 && _.setAttribute("normal", new W(c.normals, 3)), c.colors.length > 0 && (x = !0, _.setAttribute("color", new W(c.colors, 3))), c.hasUVIndices === !0 && _.setAttribute("uv", new W(c.uvs, 2));
        const M = [];
        for (let z = 0, J = b.length; z < J; z++) {
          const D = b[z], H = D.name + "_" + D.smooth + "_" + x;
          let P = t.materials[H];
          if (this.materials !== null) {
            if (P = this.materials.create(D.name), p && P && !(P instanceof re)) {
              const I = new re();
              Ce.prototype.copy.call(I, P), I.color.copy(P.color), P = I;
            } else if (S && P && !(P instanceof q)) {
              const I = new q({ size: 10, sizeAttenuation: !1 });
              Ce.prototype.copy.call(I, P), I.color.copy(P.color), I.map = P.map, P = I;
            }
          }
          P === void 0 && (p ? P = new re() : S ? P = new q({ size: 1, sizeAttenuation: !1 }) : P = new gt(), P.name = D.name, P.flatShading = !D.smooth, P.vertexColors = x, t.materials[H] = P), M.push(P);
        }
        let f;
        if (M.length > 1) {
          for (let z = 0, J = b.length; z < J; z++) {
            const D = b[z];
            _.addGroup(D.groupStart, D.groupCount, z);
          }
          p ? f = new Re(_, M) : S ? f = new ne(_, M) : f = new ue(_, M);
        } else
          p ? f = new Re(_, M[0]) : S ? f = new ne(_, M[0]) : f = new ue(_, M[0]);
        f.name = u.name, y.add(f);
      }
    else if (t.vertices.length > 0) {
      const m = new q({ size: 1, sizeAttenuation: !1 }), g = new Q();
      g.setAttribute("position", new W(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (g.setAttribute("color", new W(t.colors, 3)), m.vertexColors = !0);
      const u = new ne(g, m);
      y.add(u);
    }
    return y;
  }
}
const Ut = /* @__PURE__ */ O({
  __name: "OBJLoader",
  props: {
    url: null,
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    castShadow: { type: Boolean, default: !1 },
    receiveShadow: { type: Boolean, default: !1 }
  },
  setup(r, { expose: a }) {
    const t = r, e = new Gt(), n = L("scene"), o = new $e();
    o.castShadow = !0, o.receiveShadow = !0, n.add(o), w(t, "position", o), w(t, "rotation", o), w(t, "scale", o);
    function i() {
      e.load(
        t.url,
        function(l) {
          for (const d of l.children)
            o.children.push(d), d.material = o.material, w(t, "position", o, !1), w(t, "rotation", o, !1), w(t, "scale", o, !1);
        },
        function(l) {
          console.log(l.loaded / l.total * 100 + "% loaded");
        },
        function(l) {
          console.log("ERROR: OBJ file could not be loaded");
        }
      );
    }
    return i(), v(
      () => t.url,
      () => i()
    ), R("mesh", o), a({ three: o }), (l, d) => B(l.$slots, "default");
  }
}), Ht = /* @__PURE__ */ O({
  __name: "AxesHelper",
  props: {
    size: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: a }) {
    const t = r, e = L("scene"), n = new bt(t.size);
    return e.add(n), w(t, "position", n), w(t, "rotation", n), w(t, "scale", n), R("mesh", n), a({ three: n }), (o, i) => B(o.$slots, "default");
  }
}), Yt = {
  name: "BoxGeometry",
  render: () => null
}, Zt = /* @__PURE__ */ O({
  ...Yt,
  props: {
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(r, { expose: a }) {
    const t = r, e = L("mesh");
    function n(l, d, y, E, m, g) {
      return new yt(l, d, y, E, m, g);
    }
    const o = G(
      n(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
    );
    e.geometry = o.value;
    function i() {
      e.geometry.dispose(), e.geometry = n(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments
      ), o.value = e.geometry;
    }
    return j(t, "width", i), j(t, "height", i), j(t, "depth", i), j(t, "widthSegments", i), j(t, "heightSegments", i), j(t, "depthSegments", i), a({ three: o }), { props: t, mesh: e, makeBox: n, three: o, redoGeometry: i };
  }
}), Xt = {
  name: "BufferGeometry",
  render: () => null
}, Kt = /* @__PURE__ */ O({
  ...Xt,
  props: {
    vertices: { default: () => [] },
    faces: { default: () => [] }
  },
  setup(r, { expose: a }) {
    const t = r, e = L("mesh");
    function n(l, d) {
      const y = new Q(), E = new Float32Array(l.length);
      for (let m = 0; m < l.length; m++)
        E[m] = l[m];
      return y.setAttribute("position", new wt(E, 3)), y;
    }
    const o = G(n(t.vertices, t.faces));
    e.geometry = o.value;
    function i(l) {
      e.geometry.dispose(), e.geometry = n(l), e.geometry.computeVertexNormals(), o.value = e.geometry;
    }
    return v(
      () => t.vertices,
      (l) => {
        i(l);
      },
      { deep: !0, immediate: !0 }
    ), a({ three: o }), { props: t, mesh: e, makeGeometry: n, three: o, redoGeometry: i };
  }
}), Wt = {
  name: "PlaneGeometry",
  render: () => null
}, qt = /* @__PURE__ */ O({
  ...Wt,
  props: {
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(r, { expose: a }) {
    const t = r, e = L("mesh");
    function n(l, d, y, E) {
      return new _t(l, d, y, E);
    }
    const o = G(n(t.width, t.height, t.widthSegments, t.heightSegments));
    e.geometry = o.value;
    function i() {
      e.geometry.dispose(), e.geometry = n(t.width, t.height, t.widthSegments, t.heightSegments), o.value = e.geometry;
    }
    return j(t, "width", i), j(t, "height", i), j(t, "widthSegments", i), j(t, "heightSegments", i), a({ three: o }), { props: t, mesh: e, makePlane: n, three: o, redoGeometry: i };
  }
}), Jt = {
  name: "SphereGeometry",
  render: () => null
}, Qt = /* @__PURE__ */ O({
  ...Jt,
  props: {
    radius: { default: 1 },
    widthSegments: { default: 8 },
    heightSegments: { default: 6 },
    phiStart: { default: 0 },
    phiLength: { default: 2 * Math.PI },
    thetaStart: { default: 0 },
    thetaLength: { default: Math.PI }
  },
  setup(r, { expose: a }) {
    const t = r, e = L("mesh");
    function n(l, d, y, E, m, g, u) {
      return new vt(l, d, y, E, m, g, u);
    }
    const o = G(
      n(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength
      )
    );
    e.geometry = o.value;
    function i() {
      e.geometry.dispose(), e.geometry = n(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength
      ), o.value = e.geometry;
    }
    return j(t, "radius", i), j(t, "widthSegments", i), j(t, "heightSegments", i), j(t, "phiStart", i), j(t, "phiLength", i), j(t, "thetaStart", i), j(t, "thetaLength", i), a({ three: o }), { props: t, mesh: e, makeSphere: n, three: o, redoGeometry: i };
  }
}), en = {
  name: "MeshBasicMaterial"
}, tn = /* @__PURE__ */ O({
  ...en,
  props: {
    color: { default: 16777215 },
    side: { default: Ge }
  },
  setup(r, { expose: a }) {
    const t = r, e = L("mesh"), n = new Fe();
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
    ), R("material", n), a({ three: n }), (i, l) => B(i.$slots, "default");
  }
}), nn = {
  name: "MeshLambertMaterial"
}, on = /* @__PURE__ */ O({
  ...nn,
  props: {
    color: { default: 16777215 },
    side: { default: Ge }
  },
  setup(r, { expose: a }) {
    const t = r, e = L("mesh"), n = new Pt();
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
    ), R("material", n), a({ three: n }), (i, l) => B(i.$slots, "default");
  }
}), sn = {
  name: "PointsMaterial",
  render: () => null
}, an = /* @__PURE__ */ O({
  ...sn,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 }
  },
  setup(r, { expose: a }) {
    const t = r, e = L("mesh"), n = new q({ color: t.color, sizeAttenuation: t.sizeAttenuation, size: t.size });
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
    ), R("material", n), a({ three: n }), { props: t, mesh: e, three: n, applyProps: o };
  }
}), rn = {
  name: "AmbientLight",
  render: () => null
}, ln = /* @__PURE__ */ O({
  ...rn,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(r, { expose: a }) {
    const t = r, e = L("scene"), n = new Et();
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
}), cn = {
  name: "PointLight",
  render: () => null
}, un = /* @__PURE__ */ O({
  ...cn,
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    color: { default: 16777215 },
    intensity: { default: 1 },
    castShadow: { type: Boolean, default: !1 }
  },
  setup(r, { expose: a }) {
    const t = r, e = L("scene"), n = new St();
    e.add(n), w(t, "position", n), w(t, "rotation", n), w(t, "scale", n);
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
}), hn = {
  name: "Texture",
  render: () => null
}, dn = /* @__PURE__ */ O({
  ...hn,
  props: {
    url: null
  },
  setup(r, { expose: a }) {
    const t = r, e = L("material"), n = G(new Lt());
    function o(i) {
      "map" in e && (e.map = new Mt().load(i.url));
    }
    return o(t), v(
      () => t.url,
      () => o(t)
    ), a({ three: n }), { props: t, material: e, three: n, applyProps: o };
  }
});
function pn(r) {
  r.component("Renderer", xt), r.component("Scene", Ot), r.component("PerspectiveCamera", Tt), r.component("OrthographicCamera", Ct), r.component("OrbitControls", Dt), r.component("Mesh", kt), r.component("Points", It), r.component("OBJLoader", Ut), r.component("AxesHelper", Ht), r.component("BoxGeometry", Zt), r.component("BufferGeometry", Kt), r.component("PlaneGeometry", qt), r.component("SphereGeometry", Qt), r.component("MeshBasicMaterial", tn), r.component("MeshLambertMaterial", on), r.component("PointsMaterial", an), r.component("AmbientLight", ln), r.component("PointLight", un), r.component("Texture", dn);
}
export {
  ln as AmbientLight,
  Ht as AxesHelper,
  Zt as BoxGeometry,
  Kt as BufferGeometry,
  kt as Mesh,
  tn as MeshBasicMaterial,
  on as MeshLambertMaterial,
  Ut as OBJLoader,
  Dt as OrbitControls,
  Ct as OrthographicCamera,
  Tt as PerspectiveCamera,
  qt as PlaneGeometry,
  un as PointLight,
  It as Points,
  an as PointsMaterial,
  xt as Renderer,
  Ot as Scene,
  Qt as SphereGeometry,
  dn as Texture,
  pn as install
};

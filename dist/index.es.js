import { watch as g, defineComponent as S, ref as U, provide as D, onMounted as me, onUnmounted as it, openBlock as rt, createElementBlock as lt, Fragment as ct, renderSlot as B, createElementVNode as ut, inject as E } from "vue";
import { Vector3 as z, WebGLRenderer as mt, Scene as dt, Color as G, PerspectiveCamera as ht, OrthographicCamera as ft, EventDispatcher as pt, MOUSE as X, TOUCH as K, Quaternion as Ce, Spherical as ze, Vector2 as V, BufferGeometry as Q, MeshBasicMaterial as $e, Mesh as ue, PointsMaterial as q, Points as ne, Loader as gt, FileLoader as yt, Group as Ue, Float32BufferAttribute as W, LineBasicMaterial as re, Material as De, MeshPhongMaterial as bt, LineSegments as Re, AxesHelper as wt, BoxGeometry as _t, BufferAttribute as vt, PlaneGeometry as Pt, SphereGeometry as Mt, FrontSide as de, MeshLambertMaterial as xt, MeshNormalMaterial as At, AmbientLight as Et, PointLight as Lt, Texture as St, TextureLoader as Ot } from "three";
const Ie = (r) => r === void 0 ? new z(0, 0, 0) : "x" in r ? new z(r.x, r.y, r.z) : new z(r[0], r[1], r[2]), ke = (r, s, t) => {
  t[r].isVector3 ? t[r].set(s.x, s.y, s.z) : "isEuler" in t[r] && t[r].setFromVector3(s);
}, v = (r, s, t, e = !0) => {
  if (r[s] !== void 0) {
    const n = Ie(r[s]);
    if ("isGroup" in t)
      for (const o of t.children)
        v(r, s, o, !1);
    else
      ke(s, n, t);
  }
  e && g(
    () => r[s],
    () => {
      if (r[s] !== void 0) {
        const n = Ie(r[s]);
        if ("isGroup" in t)
          for (const o of t.children)
            v(r, s, o, !1);
        else
          ke(s, n, t);
      }
    }
  );
}, _ = (r, s, t) => {
  g(
    () => r[s],
    () => t
  );
};
function Ge(r) {
  if (r.children.length > 0)
    for (let s = r.children.length - 1; s >= 0; s--)
      Ge(r.children[s]);
  if (r.geometry && r.geometry.dispose(), r.material)
    if (r.material.length)
      for (let s = 0; s < r.material.length; ++s)
        r.material[s].map && r.material[s].map.dispose(), r.material[s].lightMap && r.material[s].lightMap.dispose(), r.material[s].bumpMap && r.material[s].bumpMap.dispose(), r.material[s].normalMap && r.material[s].normalMap.dispose(), r.material[s].specularMap && r.material[s].specularMap.dispose(), r.material[s].envMap && r.material[s].envMap.dispose(), r.material[s].dispose();
    else
      r.material.map && r.material.map.dispose(), r.material.lightMap && r.material.lightMap.dispose(), r.material.bumpMap && r.material.bumpMap.dispose(), r.material.normalMap && r.material.normalMap.dispose(), r.material.specularMap && r.material.specularMap.dispose(), r.material.envMap && r.material.envMap.dispose(), r.material.dispose();
  return r.removeFromParent(), !0;
}
const Tt = /* @__PURE__ */ S({
  __name: "Renderer",
  props: {
    camera: null,
    autoResize: { type: Boolean, default: !0 },
    onBeforeRender: { type: Function, default: () => {
    } },
    antialias: { type: Boolean, default: !1 },
    alpha: { type: Boolean, default: !1 },
    shadowMapEnabled: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r;
    let e = null;
    const n = [];
    let o = null;
    const i = U([]), l = U([]), m = U();
    D("canvas", m);
    let y = Date.now();
    const x = 1e3 / 30;
    g(
      () => t.camera,
      (c) => f(c)
    );
    const f = (c) => {
      if (c) {
        const w = i.value.find((p) => p.name === c);
        w === void 0 && (o = null), o = w;
      } else
        o = i.value[0];
    };
    function b(c) {
      e !== null && (e.shadowMap.enabled = c.shadowMapEnabled);
    }
    me(() => {
      e = new mt({ canvas: m.value, antialias: t.antialias, alpha: !0 }), e.setSize(1, 1), b(t), f(t.camera), new ResizeObserver((w) => {
        w.forEach((p) => {
          e && t.autoResize && e.setSize(p.contentRect.width, p.contentRect.height);
        });
      }).observe(m.value.parentElement), u();
    }), it(() => {
      for (let c of n)
        Ge(c);
    });
    function u() {
      requestAnimationFrame(u);
      const c = Date.now(), w = c - y;
      if (!(w < x)) {
        if (y = c - w % x, t.onBeforeRender && t.onBeforeRender(), l.value.length > 0 && o)
          for (const p of l.value)
            p.value !== null && (p.value.object.uuid === o.uuid ? (p.value.enabled = !0, p.value.update()) : p.value.enabled = !1);
        if (o && e)
          for (const p of n)
            e.render(p, o);
      }
    }
    return b(t), g(
      () => t.shadowMapEnabled,
      () => b(t)
    ), D("addCamera", (c) => i.value.push(c)), D("addScene", (c) => n.push(c)), D("addControls", (c) => l.value.push(c)), s({ three: e }), (c, w) => (rt(), lt(ct, null, [
      B(c.$slots, "default"),
      ut("canvas", {
        ref_key: "canvas",
        ref: m
      }, null, 512)
    ], 64));
  }
}), Ct = /* @__PURE__ */ S({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(r, { expose: s }) {
    const t = r, e = new dt();
    D("scene", e), E("addScene")(e);
    function n(o) {
      o.background && (e.background = new G(o.background));
    }
    return n(t), g(
      () => t.background,
      () => n(t)
    ), s({ three: e }), (o, i) => B(o.$slots, "default");
  }
}), zt = {
  name: "PerspectiveCamera"
}, Dt = /* @__PURE__ */ S({
  ...zt,
  props: {
    name: { default: "" },
    up: { default: () => [0, 1, 0] },
    position: { default: () => [0, 0, 0] },
    lookAt: { default: () => [0, 0, 0] }
  },
  setup(r, { expose: s }) {
    const t = r, e = new ht(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    E("addCamera")(e);
    const n = E("canvas");
    me(() => {
      t.name && (e.name = t.name), new ResizeObserver((l) => {
        l.forEach((m) => {
          e.aspect = m.contentRect.width / m.contentRect.height, e.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), v(t, "position", e), v(t, "up", e), v(t, "lookAt", e);
    function o(i) {
    }
    return g(t, () => void 0), D("parentCamera", e), s({ three: e }), (i, l) => B(i.$slots, "default");
  }
}), Rt = {
  name: "OrthographicCamera"
}, It = /* @__PURE__ */ S({
  ...Rt,
  props: {
    name: { default: "" },
    up: { default: () => [0, 1, 0] },
    position: { default: () => [0, 0, 0] },
    lookAt: { default: () => [0, 0, 0] }
  },
  setup(r, { expose: s }) {
    const t = r, e = new ft(-30, 30, 30, -30, 0.1, 1e3);
    e.lookAt(0, 0, 0), e.updateProjectionMatrix(), E("addCamera")(e), me(() => {
      t.name && (e.name = t.name);
    }), v(t, "position", e), v(t, "up", e), v(t, "lookAt", e);
    function n(o) {
    }
    return g(t, () => void 0), D("parentCamera", e), s({ three: e }), (o, i) => B(o.$slots, "default");
  }
}), Ne = { type: "change" }, le = { type: "start" }, je = { type: "end" };
class kt extends pt {
  constructor(s, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = s, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new z(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: X.ROTATE, MIDDLE: X.DOLLY, RIGHT: X.PAN }, this.touches = { ONE: K.ROTATE, TWO: K.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return l.phi;
    }, this.getAzimuthalAngle = function() {
      return l.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(a) {
      a.addEventListener("keydown", Ee), this._domElementKeyEvents = a;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(Ne), e.update(), o = n.NONE;
    }, this.update = function() {
      const a = new z(), d = new Ce().setFromUnitVectors(s.up, new z(0, 1, 0)), T = d.clone().invert(), C = new z(), j = new Ce(), Z = 2 * Math.PI;
      return function() {
        const Te = e.object.position;
        a.copy(Te).sub(e.target), a.applyQuaternion(d), l.setFromVector3(a), e.autoRotate && o === n.NONE && H(J()), e.enableDamping ? (l.theta += m.theta * e.dampingFactor, l.phi += m.phi * e.dampingFactor) : (l.theta += m.theta, l.phi += m.phi);
        let F = e.minAzimuthAngle, $ = e.maxAzimuthAngle;
        return isFinite(F) && isFinite($) && (F < -Math.PI ? F += Z : F > Math.PI && (F -= Z), $ < -Math.PI ? $ += Z : $ > Math.PI && ($ -= Z), F <= $ ? l.theta = Math.max(F, Math.min($, l.theta)) : l.theta = l.theta > (F + $) / 2 ? Math.max(F, l.theta) : Math.min($, l.theta)), l.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= y, l.radius = Math.max(e.minDistance, Math.min(e.maxDistance, l.radius)), e.enableDamping === !0 ? e.target.addScaledVector(x, e.dampingFactor) : e.target.add(x), a.setFromSpherical(l), a.applyQuaternion(T), Te.copy(e.target).add(a), e.object.lookAt(e.target), e.enableDamping === !0 ? (m.theta *= 1 - e.dampingFactor, m.phi *= 1 - e.dampingFactor, x.multiplyScalar(1 - e.dampingFactor)) : (m.set(0, 0, 0), x.set(0, 0, 0)), y = 1, f || C.distanceToSquared(e.object.position) > i || 8 * (1 - j.dot(e.object.quaternion)) > i ? (e.dispatchEvent(Ne), C.copy(e.object.position), j.copy(e.object.quaternion), f = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", Le), e.domElement.removeEventListener("pointerdown", Me), e.domElement.removeEventListener("pointercancel", xe), e.domElement.removeEventListener("wheel", Ae), e.domElement.removeEventListener("pointermove", ae), e.domElement.removeEventListener("pointerup", se), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", Ee);
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
    const i = 1e-6, l = new ze(), m = new ze();
    let y = 1;
    const x = new z();
    let f = !1;
    const b = new V(), u = new V(), c = new V(), w = new V(), p = new V(), A = new V(), O = new V(), P = new V(), L = new V(), h = [], R = {};
    function J() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function I() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function H(a) {
      m.theta -= a;
    }
    function M(a) {
      m.phi -= a;
    }
    const N = function() {
      const a = new z();
      return function(T, C) {
        a.setFromMatrixColumn(C, 0), a.multiplyScalar(-T), x.add(a);
      };
    }(), he = function() {
      const a = new z();
      return function(T, C) {
        e.screenSpacePanning === !0 ? a.setFromMatrixColumn(C, 1) : (a.setFromMatrixColumn(C, 0), a.crossVectors(e.object.up, a)), a.multiplyScalar(T), x.add(a);
      };
    }(), Y = function() {
      const a = new z();
      return function(T, C) {
        const j = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const Z = e.object.position;
          a.copy(Z).sub(e.target);
          let ee = a.length();
          ee *= Math.tan(e.object.fov / 2 * Math.PI / 180), N(2 * T * ee / j.clientHeight, e.object.matrix), he(2 * C * ee / j.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (N(T * (e.object.right - e.object.left) / e.object.zoom / j.clientWidth, e.object.matrix), he(C * (e.object.top - e.object.bottom) / e.object.zoom / j.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function oe(a) {
      e.object.isPerspectiveCamera ? y /= a : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * a)), e.object.updateProjectionMatrix(), f = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function fe(a) {
      e.object.isPerspectiveCamera ? y *= a : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / a)), e.object.updateProjectionMatrix(), f = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function pe(a) {
      b.set(a.clientX, a.clientY);
    }
    function He(a) {
      O.set(a.clientX, a.clientY);
    }
    function ge(a) {
      w.set(a.clientX, a.clientY);
    }
    function Ye(a) {
      u.set(a.clientX, a.clientY), c.subVectors(u, b).multiplyScalar(e.rotateSpeed);
      const d = e.domElement;
      H(2 * Math.PI * c.x / d.clientHeight), M(2 * Math.PI * c.y / d.clientHeight), b.copy(u), e.update();
    }
    function Ze(a) {
      P.set(a.clientX, a.clientY), L.subVectors(P, O), L.y > 0 ? oe(I()) : L.y < 0 && fe(I()), O.copy(P), e.update();
    }
    function Xe(a) {
      p.set(a.clientX, a.clientY), A.subVectors(p, w).multiplyScalar(e.panSpeed), Y(A.x, A.y), w.copy(p), e.update();
    }
    function Ke(a) {
      a.deltaY < 0 ? fe(I()) : a.deltaY > 0 && oe(I()), e.update();
    }
    function We(a) {
      let d = !1;
      switch (a.code) {
        case e.keys.UP:
          Y(0, e.keyPanSpeed), d = !0;
          break;
        case e.keys.BOTTOM:
          Y(0, -e.keyPanSpeed), d = !0;
          break;
        case e.keys.LEFT:
          Y(e.keyPanSpeed, 0), d = !0;
          break;
        case e.keys.RIGHT:
          Y(-e.keyPanSpeed, 0), d = !0;
          break;
      }
      d && (a.preventDefault(), e.update());
    }
    function ye() {
      if (h.length === 1)
        b.set(h[0].pageX, h[0].pageY);
      else {
        const a = 0.5 * (h[0].pageX + h[1].pageX), d = 0.5 * (h[0].pageY + h[1].pageY);
        b.set(a, d);
      }
    }
    function be() {
      if (h.length === 1)
        w.set(h[0].pageX, h[0].pageY);
      else {
        const a = 0.5 * (h[0].pageX + h[1].pageX), d = 0.5 * (h[0].pageY + h[1].pageY);
        w.set(a, d);
      }
    }
    function we() {
      const a = h[0].pageX - h[1].pageX, d = h[0].pageY - h[1].pageY, T = Math.sqrt(a * a + d * d);
      O.set(0, T);
    }
    function qe() {
      e.enableZoom && we(), e.enablePan && be();
    }
    function Je() {
      e.enableZoom && we(), e.enableRotate && ye();
    }
    function _e(a) {
      if (h.length == 1)
        u.set(a.pageX, a.pageY);
      else {
        const T = ie(a), C = 0.5 * (a.pageX + T.x), j = 0.5 * (a.pageY + T.y);
        u.set(C, j);
      }
      c.subVectors(u, b).multiplyScalar(e.rotateSpeed);
      const d = e.domElement;
      H(2 * Math.PI * c.x / d.clientHeight), M(2 * Math.PI * c.y / d.clientHeight), b.copy(u);
    }
    function ve(a) {
      if (h.length === 1)
        p.set(a.pageX, a.pageY);
      else {
        const d = ie(a), T = 0.5 * (a.pageX + d.x), C = 0.5 * (a.pageY + d.y);
        p.set(T, C);
      }
      A.subVectors(p, w).multiplyScalar(e.panSpeed), Y(A.x, A.y), w.copy(p);
    }
    function Pe(a) {
      const d = ie(a), T = a.pageX - d.x, C = a.pageY - d.y, j = Math.sqrt(T * T + C * C);
      P.set(0, j), L.set(0, Math.pow(P.y / O.y, e.zoomSpeed)), oe(L.y), O.copy(P);
    }
    function Qe(a) {
      e.enableZoom && Pe(a), e.enablePan && ve(a);
    }
    function et(a) {
      e.enableZoom && Pe(a), e.enableRotate && _e(a);
    }
    function Me(a) {
      e.enabled !== !1 && (h.length === 0 && (e.domElement.setPointerCapture(a.pointerId), e.domElement.addEventListener("pointermove", ae), e.domElement.addEventListener("pointerup", se)), st(a), a.pointerType === "touch" ? ot(a) : tt(a));
    }
    function ae(a) {
      e.enabled !== !1 && (a.pointerType === "touch" ? at(a) : nt(a));
    }
    function se(a) {
      Se(a), h.length === 0 && (e.domElement.releasePointerCapture(a.pointerId), e.domElement.removeEventListener("pointermove", ae), e.domElement.removeEventListener("pointerup", se)), e.dispatchEvent(je), o = n.NONE;
    }
    function xe(a) {
      Se(a);
    }
    function tt(a) {
      let d;
      switch (a.button) {
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
        case X.DOLLY:
          if (e.enableZoom === !1)
            return;
          He(a), o = n.DOLLY;
          break;
        case X.ROTATE:
          if (a.ctrlKey || a.metaKey || a.shiftKey) {
            if (e.enablePan === !1)
              return;
            ge(a), o = n.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            pe(a), o = n.ROTATE;
          }
          break;
        case X.PAN:
          if (a.ctrlKey || a.metaKey || a.shiftKey) {
            if (e.enableRotate === !1)
              return;
            pe(a), o = n.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            ge(a), o = n.PAN;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && e.dispatchEvent(le);
    }
    function nt(a) {
      if (e.enabled !== !1)
        switch (o) {
          case n.ROTATE:
            if (e.enableRotate === !1)
              return;
            Ye(a);
            break;
          case n.DOLLY:
            if (e.enableZoom === !1)
              return;
            Ze(a);
            break;
          case n.PAN:
            if (e.enablePan === !1)
              return;
            Xe(a);
            break;
        }
    }
    function Ae(a) {
      e.enabled === !1 || e.enableZoom === !1 || o !== n.NONE || (a.preventDefault(), e.dispatchEvent(le), Ke(a), e.dispatchEvent(je));
    }
    function Ee(a) {
      e.enabled === !1 || e.enablePan === !1 || We(a);
    }
    function ot(a) {
      switch (Oe(a), h.length) {
        case 1:
          switch (e.touches.ONE) {
            case K.ROTATE:
              if (e.enableRotate === !1)
                return;
              ye(), o = n.TOUCH_ROTATE;
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
              qe(), o = n.TOUCH_DOLLY_PAN;
              break;
            case K.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              Je(), o = n.TOUCH_DOLLY_ROTATE;
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
    function at(a) {
      switch (Oe(a), o) {
        case n.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          _e(a), e.update();
          break;
        case n.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          ve(a), e.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          Qe(a), e.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          et(a), e.update();
          break;
        default:
          o = n.NONE;
      }
    }
    function Le(a) {
      e.enabled !== !1 && a.preventDefault();
    }
    function st(a) {
      h.push(a);
    }
    function Se(a) {
      delete R[a.pointerId];
      for (let d = 0; d < h.length; d++)
        if (h[d].pointerId == a.pointerId) {
          h.splice(d, 1);
          return;
        }
    }
    function Oe(a) {
      let d = R[a.pointerId];
      d === void 0 && (d = new V(), R[a.pointerId] = d), d.set(a.pageX, a.pageY);
    }
    function ie(a) {
      const d = a.pointerId === h[0].pointerId ? h[1] : h[0];
      return R[d.pointerId];
    }
    e.domElement.addEventListener("contextmenu", Le), e.domElement.addEventListener("pointerdown", Me), e.domElement.addEventListener("pointercancel", xe), e.domElement.addEventListener("wheel", Ae, { passive: !1 }), this.update();
  }
}
const Nt = {
  name: "OrbitControls",
  render: () => null
}, jt = /* @__PURE__ */ S({
  ...Nt,
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
    maxAzimuthAngle: { default: 1 / 0 }
  },
  setup(r, { expose: s }) {
    const t = r, e = U(null);
    E("addControls")(e);
    const n = E("parentCamera"), o = E("canvas");
    function i() {
      e.value != null && (e.value.enablePan = t.enablePan, e.value.enableRotate = t.enableRotate, e.value.enableZoom = t.enableZoom, e.value.minZoom = t.minZoom, e.value.maxZoom = t.maxZoom, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance, e.value.minPolarAngle = t.minPolarAngle, e.value.maxPolarAngle = t.maxPolarAngle, e.value.minAzimuthAngle = t.minAzimuthAngle, e.value.maxAzimuthAngle = t.maxAzimuthAngle);
    }
    return g(o, () => {
      e.value = new kt(n, o.value), i();
    }), i(), _(t, "enablePan", i), _(t, "enableRotate", i), _(t, "enableZoom", i), _(t, "minZoom", i), _(t, "maxZoom", i), _(t, "minDistance", i), _(t, "maxDistance", i), _(t, "minPolarAngle", i), _(t, "maxPolarAngle", i), _(t, "minAzimuthAngle", i), _(t, "maxAzimuthAngle", i), s({ three: e.value }), { props: t, three: e, camera: n, canvas: o, applyProps: i };
  }
}), Bt = /* @__PURE__ */ S({
  __name: "Mesh",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    castShadow: { type: Boolean, default: !1 },
    receiveShadow: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("scene"), n = new Q(), o = new $e(), i = new ue(n, o);
    i.castShadow = !0, i.receiveShadow = !0, e.add(i), v(t, "position", i), v(t, "rotation", i), v(t, "scale", i);
    function l(m) {
      i.castShadow = m.castShadow, i.receiveShadow = m.receiveShadow;
    }
    return l(t), g(
      () => t.castShadow,
      () => l(t)
    ), g(
      () => t.receiveShadow,
      () => l(t)
    ), D("mesh", i), s({ three: i }), (m, y) => B(m.$slots, "default");
  }
}), Vt = /* @__PURE__ */ S({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("scene"), n = new Q(), o = new q({ color: "red", sizeAttenuation: !1, size: 2 }), i = new ne(n, o);
    return e.add(i), v(t, "position", i), v(t, "rotation", i), v(t, "scale", i), D("mesh", i), s({ three: i }), (l, m) => B(l.$slots, "default");
  }
}), Ft = /^[og]\s*(.+)?/, $t = /^mtllib /, Ut = /^usemtl /, Gt = /^usemap /, Be = new z(), ce = new z(), Ve = new z(), Fe = new z(), k = new z(), te = new G();
function Ht() {
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
            clone: function(m) {
              const y = {
                index: typeof m == "number" ? m : this.index,
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
      const n = this.vertices, o = this.object.geometry.vertices;
      o.push(n[s + 0], n[s + 1], n[s + 2]), o.push(n[t + 0], n[t + 1], n[t + 2]), o.push(n[e + 0], n[e + 1], n[e + 2]);
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
      const n = this.normals, o = this.object.geometry.normals;
      o.push(n[s + 0], n[s + 1], n[s + 2]), o.push(n[t + 0], n[t + 1], n[t + 2]), o.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addFaceNormal: function(s, t, e) {
      const n = this.vertices, o = this.object.geometry.normals;
      Be.fromArray(n, s), ce.fromArray(n, t), Ve.fromArray(n, e), k.subVectors(Ve, ce), Fe.subVectors(Be, ce), k.cross(Fe), k.normalize(), o.push(k.x, k.y, k.z), o.push(k.x, k.y, k.z), o.push(k.x, k.y, k.z);
    },
    addColor: function(s, t, e) {
      const n = this.colors, o = this.object.geometry.colors;
      n[s] !== void 0 && o.push(n[s + 0], n[s + 1], n[s + 2]), n[t] !== void 0 && o.push(n[t + 0], n[t + 1], n[t + 2]), n[e] !== void 0 && o.push(n[e + 0], n[e + 1], n[e + 2]);
    },
    addUV: function(s, t, e) {
      const n = this.uvs, o = this.object.geometry.uvs;
      o.push(n[s + 0], n[s + 1]), o.push(n[t + 0], n[t + 1]), o.push(n[e + 0], n[e + 1]);
    },
    addDefaultUV: function() {
      const s = this.object.geometry.uvs;
      s.push(0, 0), s.push(0, 0), s.push(0, 0);
    },
    addUVLine: function(s) {
      const t = this.uvs;
      this.object.geometry.uvs.push(t[s + 0], t[s + 1]);
    },
    addFace: function(s, t, e, n, o, i, l, m, y) {
      const x = this.vertices.length;
      let f = this.parseVertexIndex(s, x), b = this.parseVertexIndex(t, x), u = this.parseVertexIndex(e, x);
      if (this.addVertex(f, b, u), this.addColor(f, b, u), l !== void 0 && l !== "") {
        const c = this.normals.length;
        f = this.parseNormalIndex(l, c), b = this.parseNormalIndex(m, c), u = this.parseNormalIndex(y, c), this.addNormal(f, b, u);
      } else
        this.addFaceNormal(f, b, u);
      if (n !== void 0 && n !== "") {
        const c = this.uvs.length;
        f = this.parseUVIndex(n, c), b = this.parseUVIndex(o, c), u = this.parseUVIndex(i, c), this.addUV(f, b, u), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(s) {
      this.object.geometry.type = "Points";
      const t = this.vertices.length;
      for (let e = 0, n = s.length; e < n; e++) {
        const o = this.parseVertexIndex(s[e], t);
        this.addVertexPoint(o), this.addColor(o);
      }
    },
    addLineGeometry: function(s, t) {
      this.object.geometry.type = "Line";
      const e = this.vertices.length, n = this.uvs.length;
      for (let o = 0, i = s.length; o < i; o++)
        this.addVertexLine(this.parseVertexIndex(s[o], e));
      for (let o = 0, i = t.length; o < i; o++)
        this.addUVLine(this.parseUVIndex(t[o], n));
    }
  };
  return r.startObject("", !1), r;
}
class Yt extends gt {
  constructor(s) {
    super(s), this.materials = null;
  }
  load(s, t, e, n) {
    const o = this, i = new yt(this.manager);
    i.setPath(this.path), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(s, function(l) {
      try {
        t(o.parse(l));
      } catch (m) {
        n ? n(m) : console.error(m), o.manager.itemError(s);
      }
    }, e, n);
  }
  setMaterials(s) {
    return this.materials = s, this;
  }
  parse(s) {
    const t = new Ht();
    s.indexOf(`\r
`) !== -1 && (s = s.replace(/\r\n/g, `
`)), s.indexOf(`\\
`) !== -1 && (s = s.replace(/\\\n/g, ""));
    const e = s.split(`
`);
    let n = "", o = "", i = 0, l = [];
    const m = typeof "".trimLeft == "function";
    for (let f = 0, b = e.length; f < b; f++)
      if (n = e[f], n = m ? n.trimLeft() : n.trim(), i = n.length, i !== 0 && (o = n.charAt(0), o !== "#"))
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
          const c = n.slice(1).trim().split(/\s+/), w = [];
          for (let A = 0, O = c.length; A < O; A++) {
            const P = c[A];
            if (P.length > 0) {
              const L = P.split("/");
              w.push(L);
            }
          }
          const p = w[0];
          for (let A = 1, O = w.length - 1; A < O; A++) {
            const P = w[A], L = w[A + 1];
            t.addFace(
              p[0],
              P[0],
              L[0],
              p[1],
              P[1],
              L[1],
              p[2],
              P[2],
              L[2]
            );
          }
        } else if (o === "l") {
          const u = n.substring(1).trim().split(" ");
          let c = [];
          const w = [];
          if (n.indexOf("/") === -1)
            c = u;
          else
            for (let p = 0, A = u.length; p < A; p++) {
              const O = u[p].split("/");
              O[0] !== "" && c.push(O[0]), O[1] !== "" && w.push(O[1]);
            }
          t.addLineGeometry(c, w);
        } else if (o === "p") {
          const c = n.slice(1).trim().split(" ");
          t.addPointGeometry(c);
        } else if ((l = Ft.exec(n)) !== null) {
          const u = (" " + l[0].slice(1).trim()).slice(1);
          t.startObject(u);
        } else if (Ut.test(n))
          t.object.startMaterial(n.substring(7).trim(), t.materialLibraries);
        else if ($t.test(n))
          t.materialLibraries.push(n.substring(7).trim());
        else if (Gt.test(n))
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
    const y = new Ue();
    if (y.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let f = 0, b = t.objects.length; f < b; f++) {
        const u = t.objects[f], c = u.geometry, w = u.materials, p = c.type === "Line", A = c.type === "Points";
        let O = !1;
        if (c.vertices.length === 0)
          continue;
        const P = new Q();
        P.setAttribute("position", new W(c.vertices, 3)), c.normals.length > 0 && P.setAttribute("normal", new W(c.normals, 3)), c.colors.length > 0 && (O = !0, P.setAttribute("color", new W(c.colors, 3))), c.hasUVIndices === !0 && P.setAttribute("uv", new W(c.uvs, 2));
        const L = [];
        for (let R = 0, J = w.length; R < J; R++) {
          const I = w[R], H = I.name + "_" + I.smooth + "_" + O;
          let M = t.materials[H];
          if (this.materials !== null) {
            if (M = this.materials.create(I.name), p && M && !(M instanceof re)) {
              const N = new re();
              De.prototype.copy.call(N, M), N.color.copy(M.color), M = N;
            } else if (A && M && !(M instanceof q)) {
              const N = new q({ size: 10, sizeAttenuation: !1 });
              De.prototype.copy.call(N, M), N.color.copy(M.color), N.map = M.map, M = N;
            }
          }
          M === void 0 && (p ? M = new re() : A ? M = new q({ size: 1, sizeAttenuation: !1 }) : M = new bt(), M.name = I.name, M.flatShading = !I.smooth, M.vertexColors = O, t.materials[H] = M), L.push(M);
        }
        let h;
        if (L.length > 1) {
          for (let R = 0, J = w.length; R < J; R++) {
            const I = w[R];
            P.addGroup(I.groupStart, I.groupCount, R);
          }
          p ? h = new Re(P, L) : A ? h = new ne(P, L) : h = new ue(P, L);
        } else
          p ? h = new Re(P, L[0]) : A ? h = new ne(P, L[0]) : h = new ue(P, L[0]);
        h.name = u.name, y.add(h);
      }
    else if (t.vertices.length > 0) {
      const f = new q({ size: 1, sizeAttenuation: !1 }), b = new Q();
      b.setAttribute("position", new W(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (b.setAttribute("color", new W(t.colors, 3)), f.vertexColors = !0);
      const u = new ne(b, f);
      y.add(u);
    }
    return y;
  }
}
const Zt = /* @__PURE__ */ S({
  __name: "OBJLoader",
  props: {
    url: null,
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    castShadow: { type: Boolean, default: !1 },
    receiveShadow: { type: Boolean, default: !1 }
  },
  emits: ["load", "progress", "error"],
  setup(r, { expose: s, emit: t }) {
    const e = r, n = new Yt(), o = E("scene"), i = new Ue();
    i.castShadow = !0, i.receiveShadow = !0, o.add(i), v(e, "position", i), v(e, "rotation", i), v(e, "scale", i);
    function l() {
      n.load(
        e.url,
        function(m) {
          for (const y of m.children)
            i.children.push(y), y.material = i.material, v(e, "position", i, !1), v(e, "rotation", i, !1), v(e, "scale", i, !1);
          t("load", m);
        },
        function(m) {
          t("progress", m);
        },
        function(m) {
          t("error", m);
        }
      );
    }
    return l(), g(
      () => e.url,
      () => l()
    ), D("mesh", i), s({
      three: i
    }), (m, y) => B(m.$slots, "default");
  }
}), Xt = /* @__PURE__ */ S({
  __name: "AxesHelper",
  props: {
    size: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("scene"), n = new wt(t.size);
    return e.add(n), v(t, "position", n), v(t, "rotation", n), v(t, "scale", n), D("mesh", n), s({ three: n }), (o, i) => B(o.$slots, "default");
  }
}), Kt = {
  name: "BoxGeometry",
  render: () => null
}, Wt = /* @__PURE__ */ S({
  ...Kt,
  props: {
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("mesh");
    function n(l, m, y, x, f, b) {
      return new _t(l, m, y, x, f, b);
    }
    const o = U(
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
    return _(t, "width", i), _(t, "height", i), _(t, "depth", i), _(t, "widthSegments", i), _(t, "heightSegments", i), _(t, "depthSegments", i), s({ three: o }), { props: t, mesh: e, makeBox: n, three: o, redoGeometry: i };
  }
}), qt = {
  name: "BufferGeometry",
  render: () => null
}, Jt = /* @__PURE__ */ S({
  ...qt,
  props: {
    vertices: { default: () => [] },
    faces: { default: () => [] }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("mesh");
    function n(l, m) {
      const y = new Q(), x = new Float32Array(l.length);
      for (let f = 0; f < l.length; f++)
        x[f] = l[f];
      return y.setAttribute("position", new vt(x, 3)), y;
    }
    const o = U(n(t.vertices, t.faces));
    e.geometry = o.value;
    function i(l) {
      e.geometry.dispose(), e.geometry = n(l), e.geometry.computeVertexNormals(), o.value = e.geometry;
    }
    return g(
      () => t.vertices,
      (l) => {
        i(l);
      },
      { deep: !0, immediate: !0 }
    ), s({ three: o }), { props: t, mesh: e, makeGeometry: n, three: o, redoGeometry: i };
  }
}), Qt = {
  name: "PlaneGeometry",
  render: () => null
}, en = /* @__PURE__ */ S({
  ...Qt,
  props: {
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("mesh");
    function n(l, m, y, x) {
      return new Pt(l, m, y, x);
    }
    const o = U(n(t.width, t.height, t.widthSegments, t.heightSegments));
    e.geometry = o.value;
    function i() {
      e.geometry.dispose(), e.geometry = n(t.width, t.height, t.widthSegments, t.heightSegments), o.value = e.geometry;
    }
    return _(t, "width", i), _(t, "height", i), _(t, "widthSegments", i), _(t, "heightSegments", i), s({ three: o }), { props: t, mesh: e, makePlane: n, three: o, redoGeometry: i };
  }
}), tn = {
  name: "SphereGeometry",
  render: () => null
}, nn = /* @__PURE__ */ S({
  ...tn,
  props: {
    radius: { default: 1 },
    widthSegments: { default: 8 },
    heightSegments: { default: 6 },
    phiStart: { default: 0 },
    phiLength: { default: 2 * Math.PI },
    thetaStart: { default: 0 },
    thetaLength: { default: Math.PI }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("mesh");
    function n(l, m, y, x, f, b, u) {
      return new Mt(l, m, y, x, f, b, u);
    }
    const o = U(
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
    return _(t, "radius", i), _(t, "widthSegments", i), _(t, "heightSegments", i), _(t, "phiStart", i), _(t, "phiLength", i), _(t, "thetaStart", i), _(t, "thetaLength", i), s({ three: o }), { props: t, mesh: e, makeSphere: n, three: o, redoGeometry: i };
  }
}), on = {
  name: "MeshBasicMaterial"
}, an = /* @__PURE__ */ S({
  ...on,
  props: {
    color: null,
    side: { default: de },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("mesh"), n = new $e();
    return e.material = n, g(
      () => t.color,
      () => {
        t.color !== void 0 && (n.color = new G(t.color));
      },
      { immediate: !0 }
    ), g(
      () => t.side,
      () => {
        n.side = t.side;
      },
      { immediate: !0 }
    ), g(
      () => t.opacity,
      () => {
        n.opacity = t.opacity;
      },
      { immediate: !0 }
    ), g(
      () => t.transparent,
      () => {
        n.transparent = t.transparent;
      },
      { immediate: !0 }
    ), g(
      () => t.vertexColors,
      () => {
        n.vertexColors = t.vertexColors;
      },
      { immediate: !0 }
    ), D("material", n), s({ three: n }), (o, i) => B(o.$slots, "default");
  }
}), sn = {
  name: "MeshLambertMaterial"
}, rn = /* @__PURE__ */ S({
  ...sn,
  props: {
    color: { default: 16777215 },
    side: { default: de },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("mesh"), n = new xt();
    e.material = n;
    function o(i) {
      i.color && (n.color = new G(i.color)), i.side && (n.side = i.side);
    }
    return o(t), g(
      () => t.color,
      () => o(t)
    ), g(
      () => t.side,
      () => o(t)
    ), g(
      () => t.opacity,
      () => {
        n.opacity = t.opacity;
      },
      { immediate: !0 }
    ), g(
      () => t.transparent,
      () => {
        n.transparent = t.transparent;
      },
      { immediate: !0 }
    ), D("material", n), s({ three: n }), (i, l) => B(i.$slots, "default");
  }
}), ln = {
  name: "PointsMaterial",
  render: () => null
}, cn = /* @__PURE__ */ S({
  ...ln,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("mesh"), n = new q({ color: t.color, sizeAttenuation: t.sizeAttenuation, size: t.size });
    e.material = n;
    function o(i) {
      i.color && (n.color = new G(i.color)), i.size && (n.size = i.size), i.sizeAttenuation !== void 0 && (n.sizeAttenuation = i.sizeAttenuation);
    }
    return o(t), g(
      () => t.color,
      () => o(t)
    ), g(
      () => t.size,
      () => o(t)
    ), g(
      () => t.sizeAttenuation,
      () => o(t)
    ), D("material", n), s({ three: n }), { props: t, mesh: e, three: n, applyProps: o };
  }
}), un = {
  name: "MeshNormalMaterial"
}, mn = /* @__PURE__ */ S({
  ...un,
  props: {
    side: { default: de },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("mesh"), n = new At();
    return e.material = n, g(
      () => t.side,
      () => {
        n.side = t.side;
      },
      { immediate: !0 }
    ), g(
      () => t.opacity,
      () => {
        n.opacity = t.opacity;
      },
      { immediate: !0 }
    ), g(
      () => t.transparent,
      () => {
        n.transparent = t.transparent;
      },
      { immediate: !0 }
    ), D("material", n), s({ three: n }), (o, i) => B(o.$slots, "default");
  }
}), dn = {
  name: "AmbientLight",
  render: () => null
}, hn = /* @__PURE__ */ S({
  ...dn,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("scene"), n = new Et();
    e.add(n);
    function o(i) {
      n.color = new G(i.color), n.intensity = i.intensity;
    }
    return o(t), g(
      () => t.color,
      () => o(t)
    ), g(
      () => t.intensity,
      () => o(t)
    ), s({ three: n }), { props: t, scene: e, three: n, applyProps: o };
  }
}), fn = {
  name: "PointLight",
  render: () => null
}, pn = /* @__PURE__ */ S({
  ...fn,
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    color: { default: 16777215 },
    intensity: { default: 1 },
    castShadow: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const t = r, e = E("scene"), n = new Lt();
    e.add(n), v(t, "position", n), v(t, "rotation", n), v(t, "scale", n);
    function o(i) {
      n.color = new G(i.color), n.intensity = i.intensity, n.castShadow = i.castShadow;
    }
    return o(t), g(
      () => t.color,
      () => o(t)
    ), g(
      () => t.intensity,
      () => o(t)
    ), g(
      () => t.castShadow,
      () => o(t)
    ), s({ three: n }), { props: t, scene: e, three: n, applyProps: o };
  }
}), gn = {
  name: "TextureLoader",
  render: () => null
}, yn = /* @__PURE__ */ S({
  ...gn,
  props: {
    url: null
  },
  setup(r, { expose: s }) {
    const t = r, e = E("material"), n = U(new St());
    function o(i) {
      "map" in e && (e.map = new Ot().load(i.url));
    }
    return o(t), g(
      () => t.url,
      () => o(t)
    ), s({ three: n }), { props: t, material: e, three: n, applyProps: o };
  }
});
function _n(r) {
  r.component("Renderer", Tt), r.component("Scene", Ct), r.component("PerspectiveCamera", Dt), r.component("OrthographicCamera", It), r.component("OrbitControls", jt), r.component("Mesh", Bt), r.component("Points", Vt), r.component("OBJLoader", Zt), r.component("AxesHelper", Xt), r.component("BoxGeometry", Wt), r.component("BufferGeometry", Jt), r.component("PlaneGeometry", en), r.component("SphereGeometry", nn), r.component("MeshBasicMaterial", an), r.component("MeshLambertMaterial", rn), r.component("PointsMaterial", cn), r.component("MeshNormalMaterial", mn), r.component("AmbientLight", hn), r.component("PointLight", pn), r.component("TextureLoader", yn);
}
export {
  hn as AmbientLight,
  Xt as AxesHelper,
  Wt as BoxGeometry,
  Jt as BufferGeometry,
  Bt as Mesh,
  an as MeshBasicMaterial,
  rn as MeshLambertMaterial,
  mn as MeshNormalMaterial,
  Zt as OBJLoader,
  jt as OrbitControls,
  It as OrthographicCamera,
  Dt as PerspectiveCamera,
  en as PlaneGeometry,
  pn as PointLight,
  Vt as Points,
  cn as PointsMaterial,
  Tt as Renderer,
  Ct as Scene,
  nn as SphereGeometry,
  yn as TextureLoader,
  _n as install
};

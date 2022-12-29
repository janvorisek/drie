import { defineComponent as P, ref as v, openBlock as Te, createElementBlock as Ae, createTextVNode as Ge, createElementVNode as ve, toDisplayString as Ve, unref as We, watch as w, onMounted as Q, provide as A, Fragment as qe, renderSlot as C, inject as E } from "vue";
import { WebGLRenderer as Qe, Scene as Je, Color as J, Vector3 as S, PerspectiveCamera as et, OrthographicCamera as tt, EventDispatcher as nt, MOUSE as Y, TOUCH as H, Quaternion as we, Spherical as Me, Vector2 as T, BufferGeometry as ee, MeshBasicMaterial as xe, Mesh as ot, PointsMaterial as Le, Points as at, AxesHelper as st, BoxGeometry as it, BufferAttribute as rt, SphereGeometry as ct, FrontSide as lt } from "three";
const ut = /* @__PURE__ */ P({
  __name: "MyComponent",
  props: {
    name: null
  },
  setup(s) {
    const n = s.name || v("MyComponent");
    return (e, o) => (Te(), Ae("div", null, [
      Ge(" Hello, this is "),
      ve("mark", null, Ve(We(n)), 1)
    ]));
  }
}), Mt = /* @__PURE__ */ P({
  __name: "Renderer",
  props: {
    camera: null,
    autoResize: { type: Boolean, default: !0 },
    onBeforeRender: { type: Function, default: () => {
    } },
    antialias: { type: Boolean, default: !1 }
  },
  setup(s, { expose: l }) {
    const n = s;
    let e = null;
    const o = [];
    let a = null;
    const r = v([]), c = v([]), p = v();
    let b = Date.now();
    const h = 1e3 / 30;
    w(
      () => n.camera,
      (m) => _(m)
    );
    const _ = (m) => {
      if (m) {
        const g = r.value.find((f) => f.name === m);
        g === void 0 && (a = null), a = g;
      } else
        a = r.value[0];
    };
    Q(() => {
      var g;
      e = new Qe({ canvas: p.value, antialias: n.antialias }), e.setSize(1, 1), _(n.camera), new ResizeObserver((f) => {
        f.forEach((x) => {
          e && n.autoResize && e.setSize(x.contentRect.width, x.contentRect.height);
        });
      }).observe((g = p.value) == null ? void 0 : g.parentElement), M();
    });
    function M() {
      requestAnimationFrame(M);
      const m = Date.now(), g = m - b;
      if (!(g < h)) {
        if (b = m - g % h, n.onBeforeRender && n.onBeforeRender(), c.value.length > 0 && a)
          for (const f of c.value)
            f.value !== null && (f.value.object.uuid === a.uuid ? (f.value.enabled = !0, f.value.update()) : f.value.enabled = !1);
        if (a && e)
          for (const f of o)
            e.render(f, a);
      }
    }
    function k(m) {
    }
    return w(n, () => void 0), A("canvas", p), A("addCamera", (m) => r.value.push(m)), A("addScene", (m) => o.push(m)), A("addControls", (m) => c.value.push(m)), l({ three: e }), (m, g) => (Te(), Ae(qe, null, [
      C(m.$slots, "default"),
      ve("canvas", {
        ref_key: "canvas",
        ref: p
      }, null, 512)
    ], 64));
  }
}), Ot = /* @__PURE__ */ P({
  __name: "Scene",
  props: {
    background: null
  },
  setup(s, { expose: l }) {
    const n = s, e = new Je();
    A("scene", e), E("addScene")(e);
    function o(a) {
      a.background && (e.background = new J(a.background));
    }
    return o(n), w(n, () => o(n)), l({ three: e }), (a, r) => C(a.$slots, "default");
  }
}), D = (s) => s === void 0 ? new S(0, 0, 0) : "x" in s ? new S(s.x, s.y, s.z) : new S(s[0], s[1], s[2]), pt = (s) => s === void 0 ? [0, 0, 0] : "x" in s ? [s.x, s.y, s.z] : s, te = (s, l) => {
  if (s.position) {
    const n = D(s.position);
    l.position.set(n.x, n.y, n.z);
  }
  w(
    () => s.position,
    () => {
      if (s.position) {
        const n = D(s.position);
        l.position.set(n.x, n.y, n.z);
      }
    }
  );
}, ne = (s, l) => {
  if (s.rotation) {
    const n = D(s.rotation);
    l.rotation.setFromVector3(n);
  }
  w(
    () => s.rotation,
    () => {
      if (s.rotation) {
        const n = D(s.rotation);
        l.rotation.setFromVector3(n), l.updateMatrixWorld();
      }
    }
  );
}, Re = (s, l) => {
  if (s.scale) {
    const n = D(s.scale);
    l.scale.set(n.x, n.y, n.z);
  }
  w(
    () => s.scale,
    () => {
      if (s.scale) {
        const n = D(s.scale);
        l.scale.set(n.x, n.y, n.z);
      }
    }
  );
}, mt = {
  name: "PerspectiveCamera"
}, St = /* @__PURE__ */ P({
  ...mt,
  props: {
    name: { default: "" },
    up: { default: () => [0, 1, 0] }
  },
  setup(s, { expose: l }) {
    const n = s, e = new et(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    e.position.set(10, 10, 10), e.lookAt(0, 0, 0), e.updateProjectionMatrix(), E("addCamera")(e);
    const o = E("canvas");
    Q(() => {
      n.name && (e.name = n.name), new ResizeObserver((c) => {
        c.forEach((p) => {
          e.aspect = p.contentRect.width / p.contentRect.height, e.updateProjectionMatrix();
        });
      }).observe(o.value);
    });
    function a(r) {
      const c = D(r.up);
      e.up.set(c.x, c.y, c.z);
    }
    return a(n), w(n, () => a(n)), A("parentCamera", e), l({ three: e }), (r, c) => C(r.$slots, "default");
  }
}), ht = {
  name: "OrthographicCamera"
}, Tt = /* @__PURE__ */ P({
  ...ht,
  props: {
    name: null
  },
  setup(s, { expose: l }) {
    const n = s, e = new tt(-30, 30, 30, -30, 0.1, 1e3);
    return e.position.set(10, 10, 10), e.lookAt(0, 0, 0), e.updateProjectionMatrix(), E("addCamera")(e), Q(() => {
      n.name && (e.name = n.name);
    }), A("parentCamera", e), l({ three: e }), (o, a) => C(o.$slots, "default");
  }
}), Oe = { type: "change" }, q = { type: "start" }, Se = { type: "end" };
class ft extends nt {
  constructor(l, n) {
    super(), this.object = l, this.domElement = n, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new S(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Y.ROTATE, MIDDLE: Y.DOLLY, RIGHT: Y.PAN }, this.touches = { ONE: H.ROTATE, TWO: H.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return c.phi;
    }, this.getAzimuthalAngle = function() {
      return c.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(t) {
      t.addEventListener("keydown", ye), this._domElementKeyEvents = t;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(Oe), e.update(), a = o.NONE;
    }, this.update = function() {
      const t = new S(), i = new we().setFromUnitVectors(l.up, new S(0, 1, 0)), d = i.clone().invert(), y = new S(), O = new we(), I = 2 * Math.PI;
      return function() {
        const Pe = e.object.position;
        t.copy(Pe).sub(e.target), t.applyQuaternion(i), c.setFromVector3(t), e.autoRotate && a === o.NONE && F(ke()), e.enableDamping ? (c.theta += p.theta * e.dampingFactor, c.phi += p.phi * e.dampingFactor) : (c.theta += p.theta, c.phi += p.phi);
        let L = e.minAzimuthAngle, R = e.maxAzimuthAngle;
        return isFinite(L) && isFinite(R) && (L < -Math.PI ? L += I : L > Math.PI && (L -= I), R < -Math.PI ? R += I : R > Math.PI && (R -= I), L <= R ? c.theta = Math.max(L, Math.min(R, c.theta)) : c.theta = c.theta > (L + R) / 2 ? Math.max(L, c.theta) : Math.min(R, c.theta)), c.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, c.phi)), c.makeSafe(), c.radius *= b, c.radius = Math.max(e.minDistance, Math.min(e.maxDistance, c.radius)), e.enableDamping === !0 ? e.target.addScaledVector(h, e.dampingFactor) : e.target.add(h), t.setFromSpherical(c), t.applyQuaternion(d), Pe.copy(e.target).add(t), e.object.lookAt(e.target), e.enableDamping === !0 ? (p.theta *= 1 - e.dampingFactor, p.phi *= 1 - e.dampingFactor, h.multiplyScalar(1 - e.dampingFactor)) : (p.set(0, 0, 0), h.set(0, 0, 0)), b = 1, _ || y.distanceToSquared(e.object.position) > r || 8 * (1 - O.dot(e.object.quaternion)) > r ? (e.dispatchEvent(Oe), y.copy(e.object.position), O.copy(e.object.quaternion), _ = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", be), e.domElement.removeEventListener("pointerdown", fe), e.domElement.removeEventListener("pointercancel", de), e.domElement.removeEventListener("wheel", ge), e.domElement.removeEventListener("pointermove", G), e.domElement.removeEventListener("pointerup", V), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", ye);
    };
    const e = this, o = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let a = o.NONE;
    const r = 1e-6, c = new Me(), p = new Me();
    let b = 1;
    const h = new S();
    let _ = !1;
    const M = new T(), k = new T(), m = new T(), g = new T(), f = new T(), x = new T(), z = new T(), N = new T(), $ = new T(), u = [], B = {};
    function ke() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function K() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function F(t) {
      p.theta -= t;
    }
    function U(t) {
      p.phi -= t;
    }
    const oe = function() {
      const t = new S();
      return function(d, y) {
        t.setFromMatrixColumn(y, 0), t.multiplyScalar(-d), h.add(t);
      };
    }(), ae = function() {
      const t = new S();
      return function(d, y) {
        e.screenSpacePanning === !0 ? t.setFromMatrixColumn(y, 1) : (t.setFromMatrixColumn(y, 0), t.crossVectors(e.object.up, t)), t.multiplyScalar(d), h.add(t);
      };
    }(), j = function() {
      const t = new S();
      return function(d, y) {
        const O = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const I = e.object.position;
          t.copy(I).sub(e.target);
          let Z = t.length();
          Z *= Math.tan(e.object.fov / 2 * Math.PI / 180), oe(2 * d * Z / O.clientHeight, e.object.matrix), ae(2 * y * Z / O.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (oe(d * (e.object.right - e.object.left) / e.object.zoom / O.clientWidth, e.object.matrix), ae(y * (e.object.top - e.object.bottom) / e.object.zoom / O.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function X(t) {
      e.object.isPerspectiveCamera ? b /= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * t)), e.object.updateProjectionMatrix(), _ = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function se(t) {
      e.object.isPerspectiveCamera ? b *= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / t)), e.object.updateProjectionMatrix(), _ = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function ie(t) {
      M.set(t.clientX, t.clientY);
    }
    function De(t) {
      z.set(t.clientX, t.clientY);
    }
    function re(t) {
      g.set(t.clientX, t.clientY);
    }
    function Ce(t) {
      k.set(t.clientX, t.clientY), m.subVectors(k, M).multiplyScalar(e.rotateSpeed);
      const i = e.domElement;
      F(2 * Math.PI * m.x / i.clientHeight), U(2 * Math.PI * m.y / i.clientHeight), M.copy(k), e.update();
    }
    function ze(t) {
      N.set(t.clientX, t.clientY), $.subVectors(N, z), $.y > 0 ? X(K()) : $.y < 0 && se(K()), z.copy(N), e.update();
    }
    function Ne(t) {
      f.set(t.clientX, t.clientY), x.subVectors(f, g).multiplyScalar(e.panSpeed), j(x.x, x.y), g.copy(f), e.update();
    }
    function je(t) {
      t.deltaY < 0 ? se(K()) : t.deltaY > 0 && X(K()), e.update();
    }
    function Ie(t) {
      let i = !1;
      switch (t.code) {
        case e.keys.UP:
          t.ctrlKey || t.metaKey || t.shiftKey ? U(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : j(0, e.keyPanSpeed), i = !0;
          break;
        case e.keys.BOTTOM:
          t.ctrlKey || t.metaKey || t.shiftKey ? U(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : j(0, -e.keyPanSpeed), i = !0;
          break;
        case e.keys.LEFT:
          t.ctrlKey || t.metaKey || t.shiftKey ? F(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : j(e.keyPanSpeed, 0), i = !0;
          break;
        case e.keys.RIGHT:
          t.ctrlKey || t.metaKey || t.shiftKey ? F(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : j(-e.keyPanSpeed, 0), i = !0;
          break;
      }
      i && (t.preventDefault(), e.update());
    }
    function ce() {
      if (u.length === 1)
        M.set(u[0].pageX, u[0].pageY);
      else {
        const t = 0.5 * (u[0].pageX + u[1].pageX), i = 0.5 * (u[0].pageY + u[1].pageY);
        M.set(t, i);
      }
    }
    function le() {
      if (u.length === 1)
        g.set(u[0].pageX, u[0].pageY);
      else {
        const t = 0.5 * (u[0].pageX + u[1].pageX), i = 0.5 * (u[0].pageY + u[1].pageY);
        g.set(t, i);
      }
    }
    function ue() {
      const t = u[0].pageX - u[1].pageX, i = u[0].pageY - u[1].pageY, d = Math.sqrt(t * t + i * i);
      z.set(0, d);
    }
    function Ye() {
      e.enableZoom && ue(), e.enablePan && le();
    }
    function He() {
      e.enableZoom && ue(), e.enableRotate && ce();
    }
    function pe(t) {
      if (u.length == 1)
        k.set(t.pageX, t.pageY);
      else {
        const d = W(t), y = 0.5 * (t.pageX + d.x), O = 0.5 * (t.pageY + d.y);
        k.set(y, O);
      }
      m.subVectors(k, M).multiplyScalar(e.rotateSpeed);
      const i = e.domElement;
      F(2 * Math.PI * m.x / i.clientHeight), U(2 * Math.PI * m.y / i.clientHeight), M.copy(k);
    }
    function me(t) {
      if (u.length === 1)
        f.set(t.pageX, t.pageY);
      else {
        const i = W(t), d = 0.5 * (t.pageX + i.x), y = 0.5 * (t.pageY + i.y);
        f.set(d, y);
      }
      x.subVectors(f, g).multiplyScalar(e.panSpeed), j(x.x, x.y), g.copy(f);
    }
    function he(t) {
      const i = W(t), d = t.pageX - i.x, y = t.pageY - i.y, O = Math.sqrt(d * d + y * y);
      N.set(0, O), $.set(0, Math.pow(N.y / z.y, e.zoomSpeed)), X($.y), z.copy(N);
    }
    function $e(t) {
      e.enableZoom && he(t), e.enablePan && me(t);
    }
    function Fe(t) {
      e.enableZoom && he(t), e.enableRotate && pe(t);
    }
    function fe(t) {
      e.enabled !== !1 && (u.length === 0 && (e.domElement.setPointerCapture(t.pointerId), e.domElement.addEventListener("pointermove", G), e.domElement.addEventListener("pointerup", V)), Xe(t), t.pointerType === "touch" ? Ue(t) : Be(t));
    }
    function G(t) {
      e.enabled !== !1 && (t.pointerType === "touch" ? Ze(t) : Ke(t));
    }
    function V(t) {
      _e(t), u.length === 0 && (e.domElement.releasePointerCapture(t.pointerId), e.domElement.removeEventListener("pointermove", G), e.domElement.removeEventListener("pointerup", V)), e.dispatchEvent(Se), a = o.NONE;
    }
    function de(t) {
      _e(t);
    }
    function Be(t) {
      let i;
      switch (t.button) {
        case 0:
          i = e.mouseButtons.LEFT;
          break;
        case 1:
          i = e.mouseButtons.MIDDLE;
          break;
        case 2:
          i = e.mouseButtons.RIGHT;
          break;
        default:
          i = -1;
      }
      switch (i) {
        case Y.DOLLY:
          if (e.enableZoom === !1)
            return;
          De(t), a = o.DOLLY;
          break;
        case Y.ROTATE:
          if (t.ctrlKey || t.metaKey || t.shiftKey) {
            if (e.enablePan === !1)
              return;
            re(t), a = o.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            ie(t), a = o.ROTATE;
          }
          break;
        case Y.PAN:
          if (t.ctrlKey || t.metaKey || t.shiftKey) {
            if (e.enableRotate === !1)
              return;
            ie(t), a = o.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            re(t), a = o.PAN;
          }
          break;
        default:
          a = o.NONE;
      }
      a !== o.NONE && e.dispatchEvent(q);
    }
    function Ke(t) {
      switch (a) {
        case o.ROTATE:
          if (e.enableRotate === !1)
            return;
          Ce(t);
          break;
        case o.DOLLY:
          if (e.enableZoom === !1)
            return;
          ze(t);
          break;
        case o.PAN:
          if (e.enablePan === !1)
            return;
          Ne(t);
          break;
      }
    }
    function ge(t) {
      e.enabled === !1 || e.enableZoom === !1 || a !== o.NONE || (t.preventDefault(), e.dispatchEvent(q), je(t), e.dispatchEvent(Se));
    }
    function ye(t) {
      e.enabled === !1 || e.enablePan === !1 || Ie(t);
    }
    function Ue(t) {
      switch (Ee(t), u.length) {
        case 1:
          switch (e.touches.ONE) {
            case H.ROTATE:
              if (e.enableRotate === !1)
                return;
              ce(), a = o.TOUCH_ROTATE;
              break;
            case H.PAN:
              if (e.enablePan === !1)
                return;
              le(), a = o.TOUCH_PAN;
              break;
            default:
              a = o.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case H.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              Ye(), a = o.TOUCH_DOLLY_PAN;
              break;
            case H.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              He(), a = o.TOUCH_DOLLY_ROTATE;
              break;
            default:
              a = o.NONE;
          }
          break;
        default:
          a = o.NONE;
      }
      a !== o.NONE && e.dispatchEvent(q);
    }
    function Ze(t) {
      switch (Ee(t), a) {
        case o.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          pe(t), e.update();
          break;
        case o.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          me(t), e.update();
          break;
        case o.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          $e(t), e.update();
          break;
        case o.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          Fe(t), e.update();
          break;
        default:
          a = o.NONE;
      }
    }
    function be(t) {
      e.enabled !== !1 && t.preventDefault();
    }
    function Xe(t) {
      u.push(t);
    }
    function _e(t) {
      delete B[t.pointerId];
      for (let i = 0; i < u.length; i++)
        if (u[i].pointerId == t.pointerId) {
          u.splice(i, 1);
          return;
        }
    }
    function Ee(t) {
      let i = B[t.pointerId];
      i === void 0 && (i = new T(), B[t.pointerId] = i), i.set(t.pageX, t.pageY);
    }
    function W(t) {
      const i = t.pointerId === u[0].pointerId ? u[1] : u[0];
      return B[i.pointerId];
    }
    e.domElement.addEventListener("contextmenu", be), e.domElement.addEventListener("pointerdown", fe), e.domElement.addEventListener("pointercancel", de), e.domElement.addEventListener("wheel", ge, { passive: !1 }), this.update();
  }
}
const dt = {
  name: "OrbitControls",
  render: () => null
}, At = /* @__PURE__ */ P({
  ...dt,
  props: {
    name: null
  },
  setup(s, { expose: l }) {
    const n = s, e = v(null);
    E("addControls")(e);
    const o = E("parentCamera"), a = E("canvas");
    return w(a, () => {
      e.value = new ft(o, a.value);
    }), l({ three: e.value }), { props: n, three: e, camera: o, canvas: a };
  }
}), vt = /* @__PURE__ */ P({
  __name: "Mesh",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: l }) {
    const n = s, e = E("scene"), o = new ee(), a = new xe(), r = new ot(o, a);
    return e.add(r), te(n, r), ne(n, r), Re(n, r), A("mesh", r), l({ three: r }), (c, p) => C(c.$slots, "default");
  }
}), xt = /* @__PURE__ */ P({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: l }) {
    const n = s, e = E("scene"), o = new ee(), a = new Le({ color: "red", sizeAttenuation: !1, size: 2 }), r = new at(o, a);
    return e.add(r), te(n, r), ne(n, r), Re(n, r), A("mesh", r), l({ three: r }), (c, p) => C(c.$slots, "default");
  }
}), Lt = /* @__PURE__ */ P({
  __name: "AxesHelper",
  props: {
    size: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: l }) {
    const n = s, e = E("scene"), o = new st(n.size);
    return e.add(o), te(n, o), ne(n, o), A("mesh", o), l({ three: o }), (a, r) => C(a.$slots, "default");
  }
}), gt = {
  name: "BoxGeometry",
  render: () => null
}, Rt = /* @__PURE__ */ P({
  ...gt,
  props: {
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(s, { expose: l }) {
    const n = s, e = E("mesh");
    function o(r, c, p, b, h, _) {
      return new it(r, c, p, b, h, _);
    }
    const a = v(
      o(n.width, n.height, n.depth, n.widthSegments, n.heightSegments, n.depthSegments)
    );
    return e.geometry = a.value, w(n, () => {
      e.geometry = o(
        n.width,
        n.height,
        n.depth,
        n.widthSegments,
        n.heightSegments,
        n.depthSegments
      ), a.value = e.geometry;
    }), l({ three: a }), { props: n, mesh: e, makeBox: o, three: a };
  }
}), yt = {
  name: "BufferGeometry",
  render: () => null
}, kt = /* @__PURE__ */ P({
  ...yt,
  props: {
    vertices: { default: () => [] },
    faces: { default: () => [] }
  },
  setup(s, { expose: l }) {
    const n = s, e = E("mesh");
    function o(r, c) {
      const p = new ee(), b = new Float32Array(r.length * 3);
      for (let h = 0; h < r.length; h++) {
        const _ = pt(r[h]);
        b[h * 3] = _[0], b[h * 3 + 1] = _[1], b[h * 3 + 2] = _[2];
      }
      return p.setAttribute("position", new rt(b, 3)), p;
    }
    const a = v(o(n.vertices, n.faces));
    return e.geometry = a.value, w(n, () => {
      e.geometry = o(n.vertices), a.value = e.geometry;
    }), l({ three: a }), { props: n, mesh: e, makeGeometry: o, three: a };
  }
}), bt = {
  name: "SphereGeometry",
  render: () => null
}, Dt = /* @__PURE__ */ P({
  ...bt,
  props: {
    radius: { default: 1 },
    widthSegments: { default: 8 },
    heightSegments: { default: 6 },
    phiStart: { default: 0 },
    phiLength: { default: 2 * Math.PI },
    thetaStart: { default: 0 },
    thetaLength: { default: Math.PI }
  },
  setup(s, { expose: l }) {
    const n = s, e = E("mesh");
    function o(r, c, p, b, h, _, M) {
      return new ct(r, c, p, b, h, _, M);
    }
    const a = v(
      o(
        n.radius,
        n.widthSegments,
        n.heightSegments,
        n.phiStart,
        n.phiLength,
        n.thetaStart,
        n.thetaLength
      )
    );
    return e.geometry = a.value, w(n, () => {
      e.geometry = o(
        n.radius,
        n.widthSegments,
        n.heightSegments,
        n.phiStart,
        n.phiLength,
        n.thetaStart,
        n.thetaLength
      ), a.value = e.geometry;
    }), l({ three: a }), { props: n, mesh: e, makeSphere: o, three: a };
  }
}), _t = {
  name: "MeshBasicMaterial",
  render: () => null
}, Ct = /* @__PURE__ */ P({
  ..._t,
  props: {
    color: { default: 16777215 },
    side: { default: lt }
  },
  setup(s, { expose: l }) {
    const n = s, e = E("mesh"), o = v(new xe());
    e.material = o.value;
    function a(r) {
      r.color && (o.value.color = new J(r.color)), r.side && (o.value.side = r.side);
    }
    return a(n), w(n, () => a(n)), l({ three: o }), { props: n, mesh: e, three: o, applyProps: a };
  }
}), Et = {
  name: "PointsMaterial",
  render: () => null
}, zt = /* @__PURE__ */ P({
  ...Et,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 }
  },
  setup(s, { expose: l }) {
    const n = s, e = E("mesh"), o = v(
      new Le({ color: n.color, sizeAttenuation: n.sizeAttenuation, size: n.size })
    );
    e.material = o.value;
    function a(r) {
      r.color && (o.value.color = new J(r.color)), r.size && (o.value.size = r.size), r.sizeAttenuation !== void 0 && (o.value.sizeAttenuation = r.sizeAttenuation);
    }
    return a(n), w(n, () => a(n)), l({ three: o }), { props: n, mesh: e, three: o, applyProps: a };
  }
});
function Nt(s) {
  s.component("MyComponent", ut);
}
export {
  Lt as AxesHelper,
  Rt as BoxGeometry,
  kt as BufferGeometry,
  vt as Mesh,
  Ct as MeshBasicMaterial,
  At as OrbitControls,
  Tt as OrthographicCamera,
  St as PerspectiveCamera,
  xt as Points,
  zt as PointsMaterial,
  Mt as Renderer,
  Ot as Scene,
  Dt as SphereGeometry,
  Nt as install
};

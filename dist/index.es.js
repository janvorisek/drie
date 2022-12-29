import { defineComponent as _, ref as k, provide as M, watch as p, onMounted as ee, openBlock as Ze, createElementBlock as Xe, Fragment as Ve, renderSlot as C, createElementVNode as Ke, inject as f } from "vue";
import { WebGLRenderer as We, Scene as qe, Color as B, Vector3 as T, PerspectiveCamera as Qe, OrthographicCamera as Je, EventDispatcher as et, MOUSE as $, TOUCH as Y, Quaternion as Se, Spherical as Me, Vector2 as A, BufferGeometry as te, MeshBasicMaterial as ve, Mesh as tt, PointsMaterial as Ae, Points as nt, AxesHelper as ot, BoxGeometry as at, BufferAttribute as st, PlaneGeometry as it, SphereGeometry as rt, FrontSide as Le, MeshLambertMaterial as ct, AmbientLight as lt, PointLight as ut, Texture as mt, TextureLoader as dt } from "three";
const ht = /* @__PURE__ */ _({
  __name: "Renderer",
  props: {
    camera: null,
    autoResize: { type: Boolean, default: !0 },
    onBeforeRender: { type: Function, default: () => {
    } },
    antialias: { type: Boolean, default: !1 },
    shadowMapEnabled: { type: Boolean, default: !1 }
  },
  setup(s, { expose: r }) {
    const t = s;
    let e = null;
    const o = [];
    let a = null;
    const i = k([]), l = k([]), u = k();
    M("canvas", u);
    let g = Date.now();
    const h = 1e3 / 30;
    p(
      () => t.camera,
      (d) => E(d)
    );
    const E = (d) => {
      if (d) {
        const w = i.value.find((y) => y.name === d);
        w === void 0 && (a = null), a = w;
      } else
        a = i.value[0];
    };
    function S(d) {
      e !== null && (e.shadowMap.enabled = d.shadowMapEnabled);
    }
    ee(() => {
      var w;
      e = new We({ canvas: u.value, antialias: t.antialias }), e.setSize(1, 1), S(t), E(t.camera), new ResizeObserver((y) => {
        y.forEach((L) => {
          e && t.autoResize && e.setSize(L.contentRect.width, L.contentRect.height);
        });
      }).observe((w = u.value) == null ? void 0 : w.parentElement), v();
    });
    function v() {
      requestAnimationFrame(v);
      const d = Date.now(), w = d - g;
      if (!(w < h)) {
        if (g = d - w % h, t.onBeforeRender && t.onBeforeRender(), l.value.length > 0 && a)
          for (const y of l.value)
            y.value !== null && (y.value.object.uuid === a.uuid ? (y.value.enabled = !0, y.value.update()) : y.value.enabled = !1);
        if (a && e)
          for (const y of o)
            e.render(y, a);
      }
    }
    return S(t), p(t, () => S(t)), M("addCamera", (d) => i.value.push(d)), M("addScene", (d) => o.push(d)), M("addControls", (d) => l.value.push(d)), r({ three: e }), (d, w) => (Ze(), Xe(Ve, null, [
      C(d.$slots, "default"),
      Ke("canvas", {
        ref_key: "canvas",
        ref: u
      }, null, 512)
    ], 64));
  }
}), ft = /* @__PURE__ */ _({
  __name: "Scene",
  props: {
    background: null
  },
  setup(s, { expose: r }) {
    const t = s, e = new qe();
    M("scene", e), f("addScene")(e);
    function o(a) {
      a.background && (e.background = new B(a.background));
    }
    return o(t), p(t, () => o(t)), r({ three: e }), (a, i) => C(a.$slots, "default");
  }
}), D = (s) => s === void 0 ? new T(0, 0, 0) : "x" in s ? new T(s.x, s.y, s.z) : new T(s[0], s[1], s[2]), pt = (s) => s === void 0 ? [0, 0, 0] : "x" in s ? [s.x, s.y, s.z] : s, Z = (s, r) => {
  if (s.position) {
    const t = D(s.position);
    r.position.set(t.x, t.y, t.z);
  }
  p(
    () => s.position,
    () => {
      if (s.position) {
        const t = D(s.position);
        r.position.set(t.x, t.y, t.z);
      }
    }
  );
}, X = (s, r) => {
  if (s.rotation) {
    const t = D(s.rotation);
    r.rotation.setFromVector3(t);
  }
  p(
    () => s.rotation,
    () => {
      if (s.rotation) {
        const t = D(s.rotation);
        r.rotation.setFromVector3(t), r.updateMatrixWorld();
      }
    }
  );
}, ne = (s, r) => {
  if (s.scale) {
    const t = D(s.scale);
    r.scale.set(t.x, t.y, t.z);
  }
  p(
    () => s.scale,
    () => {
      if (s.scale) {
        const t = D(s.scale);
        r.scale.set(t.x, t.y, t.z);
      }
    }
  );
}, gt = {
  name: "PerspectiveCamera"
}, yt = /* @__PURE__ */ _({
  ...gt,
  props: {
    name: { default: "" },
    up: { default: () => [0, 1, 0] }
  },
  setup(s, { expose: r }) {
    const t = s, e = new Qe(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    e.position.set(10, 10, 10), e.lookAt(0, 0, 0), e.updateProjectionMatrix(), f("addCamera")(e);
    const o = f("canvas");
    ee(() => {
      t.name && (e.name = t.name), new ResizeObserver((l) => {
        l.forEach((u) => {
          e.aspect = u.contentRect.width / u.contentRect.height, e.updateProjectionMatrix();
        });
      }).observe(o.value);
    });
    function a(i) {
      const l = D(i.up);
      e.up.set(l.x, l.y, l.z);
    }
    return a(t), p(t, () => a(t)), M("parentCamera", e), r({ three: e }), (i, l) => C(i.$slots, "default");
  }
}), bt = {
  name: "OrthographicCamera"
}, _t = /* @__PURE__ */ _({
  ...bt,
  props: {
    name: { default: "" },
    up: { default: () => [0, 1, 0] }
  },
  setup(s, { expose: r }) {
    const t = s, e = new Je(-30, 30, 30, -30, 0.1, 1e3);
    e.position.set(10, 10, 10), e.lookAt(0, 0, 0), e.updateProjectionMatrix(), f("addCamera")(e), ee(() => {
      t.name && (e.name = t.name);
    });
    function o(a) {
      const i = D(a.up);
      e.up.set(i.x, i.y, i.z);
    }
    return o(t), p(t, () => o(t)), M("parentCamera", e), r({ three: e }), (a, i) => C(a.$slots, "default");
  }
}), Oe = { type: "change" }, J = { type: "start" }, Te = { type: "end" };
class wt extends et {
  constructor(r, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = r, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new T(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: $.ROTATE, MIDDLE: $.DOLLY, RIGHT: $.PAN }, this.touches = { ONE: Y.ROTATE, TWO: Y.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return l.phi;
    }, this.getAzimuthalAngle = function() {
      return l.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(n) {
      n.addEventListener("keydown", be), this._domElementKeyEvents = n;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(Oe), e.update(), a = o.NONE;
    }, this.update = function() {
      const n = new T(), c = new Se().setFromUnitVectors(r.up, new T(0, 1, 0)), b = c.clone().invert(), P = new T(), O = new Se(), I = 2 * Math.PI;
      return function() {
        const Ee = e.object.position;
        n.copy(Ee).sub(e.target), n.applyQuaternion(c), l.setFromVector3(n), e.autoRotate && a === o.NONE && V(xe()), e.enableDamping ? (l.theta += u.theta * e.dampingFactor, l.phi += u.phi * e.dampingFactor) : (l.theta += u.theta, l.phi += u.phi);
        let x = e.minAzimuthAngle, R = e.maxAzimuthAngle;
        return isFinite(x) && isFinite(R) && (x < -Math.PI ? x += I : x > Math.PI && (x -= I), R < -Math.PI ? R += I : R > Math.PI && (R -= I), x <= R ? l.theta = Math.max(x, Math.min(R, l.theta)) : l.theta = l.theta > (x + R) / 2 ? Math.max(x, l.theta) : Math.min(R, l.theta)), l.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= g, l.radius = Math.max(e.minDistance, Math.min(e.maxDistance, l.radius)), e.enableDamping === !0 ? e.target.addScaledVector(h, e.dampingFactor) : e.target.add(h), n.setFromSpherical(l), n.applyQuaternion(b), Ee.copy(e.target).add(n), e.object.lookAt(e.target), e.enableDamping === !0 ? (u.theta *= 1 - e.dampingFactor, u.phi *= 1 - e.dampingFactor, h.multiplyScalar(1 - e.dampingFactor)) : (u.set(0, 0, 0), h.set(0, 0, 0)), g = 1, E || P.distanceToSquared(e.object.position) > i || 8 * (1 - O.dot(e.object.quaternion)) > i ? (e.dispatchEvent(Oe), P.copy(e.object.position), O.copy(e.object.quaternion), E = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", _e), e.domElement.removeEventListener("pointerdown", pe), e.domElement.removeEventListener("pointercancel", ge), e.domElement.removeEventListener("wheel", ye), e.domElement.removeEventListener("pointermove", W), e.domElement.removeEventListener("pointerup", q), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", be);
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
    const i = 1e-6, l = new Me(), u = new Me();
    let g = 1;
    const h = new T();
    let E = !1;
    const S = new A(), v = new A(), d = new A(), w = new A(), y = new A(), L = new A(), z = new A(), N = new A(), H = new A(), m = [], F = {};
    function xe() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function G() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function V(n) {
      u.theta -= n;
    }
    function oe(n) {
      u.phi -= n;
    }
    const ae = function() {
      const n = new T();
      return function(b, P) {
        n.setFromMatrixColumn(P, 0), n.multiplyScalar(-b), h.add(n);
      };
    }(), se = function() {
      const n = new T();
      return function(b, P) {
        e.screenSpacePanning === !0 ? n.setFromMatrixColumn(P, 1) : (n.setFromMatrixColumn(P, 0), n.crossVectors(e.object.up, n)), n.multiplyScalar(b), h.add(n);
      };
    }(), j = function() {
      const n = new T();
      return function(b, P) {
        const O = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const I = e.object.position;
          n.copy(I).sub(e.target);
          let U = n.length();
          U *= Math.tan(e.object.fov / 2 * Math.PI / 180), ae(2 * b * U / O.clientHeight, e.object.matrix), se(2 * P * U / O.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (ae(b * (e.object.right - e.object.left) / e.object.zoom / O.clientWidth, e.object.matrix), se(P * (e.object.top - e.object.bottom) / e.object.zoom / O.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function K(n) {
      e.object.isPerspectiveCamera ? g /= n : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * n)), e.object.updateProjectionMatrix(), E = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function ie(n) {
      e.object.isPerspectiveCamera ? g *= n : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / n)), e.object.updateProjectionMatrix(), E = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function re(n) {
      S.set(n.clientX, n.clientY);
    }
    function Re(n) {
      z.set(n.clientX, n.clientY);
    }
    function ce(n) {
      w.set(n.clientX, n.clientY);
    }
    function ke(n) {
      v.set(n.clientX, n.clientY), d.subVectors(v, S).multiplyScalar(e.rotateSpeed);
      const c = e.domElement;
      V(2 * Math.PI * d.x / c.clientHeight), oe(2 * Math.PI * d.y / c.clientHeight), S.copy(v), e.update();
    }
    function Ce(n) {
      N.set(n.clientX, n.clientY), H.subVectors(N, z), H.y > 0 ? K(G()) : H.y < 0 && ie(G()), z.copy(N), e.update();
    }
    function De(n) {
      y.set(n.clientX, n.clientY), L.subVectors(y, w).multiplyScalar(e.panSpeed), j(L.x, L.y), w.copy(y), e.update();
    }
    function ze(n) {
      n.deltaY < 0 ? ie(G()) : n.deltaY > 0 && K(G()), e.update();
    }
    function Ne(n) {
      let c = !1;
      switch (n.code) {
        case e.keys.UP:
          j(0, e.keyPanSpeed), c = !0;
          break;
        case e.keys.BOTTOM:
          j(0, -e.keyPanSpeed), c = !0;
          break;
        case e.keys.LEFT:
          j(e.keyPanSpeed, 0), c = !0;
          break;
        case e.keys.RIGHT:
          j(-e.keyPanSpeed, 0), c = !0;
          break;
      }
      c && (n.preventDefault(), e.update());
    }
    function le() {
      if (m.length === 1)
        S.set(m[0].pageX, m[0].pageY);
      else {
        const n = 0.5 * (m[0].pageX + m[1].pageX), c = 0.5 * (m[0].pageY + m[1].pageY);
        S.set(n, c);
      }
    }
    function ue() {
      if (m.length === 1)
        w.set(m[0].pageX, m[0].pageY);
      else {
        const n = 0.5 * (m[0].pageX + m[1].pageX), c = 0.5 * (m[0].pageY + m[1].pageY);
        w.set(n, c);
      }
    }
    function me() {
      const n = m[0].pageX - m[1].pageX, c = m[0].pageY - m[1].pageY, b = Math.sqrt(n * n + c * c);
      z.set(0, b);
    }
    function je() {
      e.enableZoom && me(), e.enablePan && ue();
    }
    function Ie() {
      e.enableZoom && me(), e.enableRotate && le();
    }
    function de(n) {
      if (m.length == 1)
        v.set(n.pageX, n.pageY);
      else {
        const b = Q(n), P = 0.5 * (n.pageX + b.x), O = 0.5 * (n.pageY + b.y);
        v.set(P, O);
      }
      d.subVectors(v, S).multiplyScalar(e.rotateSpeed);
      const c = e.domElement;
      V(2 * Math.PI * d.x / c.clientHeight), oe(2 * Math.PI * d.y / c.clientHeight), S.copy(v);
    }
    function he(n) {
      if (m.length === 1)
        y.set(n.pageX, n.pageY);
      else {
        const c = Q(n), b = 0.5 * (n.pageX + c.x), P = 0.5 * (n.pageY + c.y);
        y.set(b, P);
      }
      L.subVectors(y, w).multiplyScalar(e.panSpeed), j(L.x, L.y), w.copy(y);
    }
    function fe(n) {
      const c = Q(n), b = n.pageX - c.x, P = n.pageY - c.y, O = Math.sqrt(b * b + P * P);
      N.set(0, O), H.set(0, Math.pow(N.y / z.y, e.zoomSpeed)), K(H.y), z.copy(N);
    }
    function $e(n) {
      e.enableZoom && fe(n), e.enablePan && he(n);
    }
    function Ye(n) {
      e.enableZoom && fe(n), e.enableRotate && de(n);
    }
    function pe(n) {
      e.enabled !== !1 && (m.length === 0 && (e.domElement.setPointerCapture(n.pointerId), e.domElement.addEventListener("pointermove", W), e.domElement.addEventListener("pointerup", q)), Ue(n), n.pointerType === "touch" ? Fe(n) : Be(n));
    }
    function W(n) {
      e.enabled !== !1 && (n.pointerType === "touch" ? Ge(n) : He(n));
    }
    function q(n) {
      we(n), m.length === 0 && (e.domElement.releasePointerCapture(n.pointerId), e.domElement.removeEventListener("pointermove", W), e.domElement.removeEventListener("pointerup", q)), e.dispatchEvent(Te), a = o.NONE;
    }
    function ge(n) {
      we(n);
    }
    function Be(n) {
      let c;
      switch (n.button) {
        case 0:
          c = e.mouseButtons.LEFT;
          break;
        case 1:
          c = e.mouseButtons.MIDDLE;
          break;
        case 2:
          c = e.mouseButtons.RIGHT;
          break;
        default:
          c = -1;
      }
      switch (c) {
        case $.DOLLY:
          if (e.enableZoom === !1)
            return;
          Re(n), a = o.DOLLY;
          break;
        case $.ROTATE:
          if (n.ctrlKey || n.metaKey || n.shiftKey) {
            if (e.enablePan === !1)
              return;
            ce(n), a = o.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            re(n), a = o.ROTATE;
          }
          break;
        case $.PAN:
          if (n.ctrlKey || n.metaKey || n.shiftKey) {
            if (e.enableRotate === !1)
              return;
            re(n), a = o.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            ce(n), a = o.PAN;
          }
          break;
        default:
          a = o.NONE;
      }
      a !== o.NONE && e.dispatchEvent(J);
    }
    function He(n) {
      if (e.enabled !== !1)
        switch (a) {
          case o.ROTATE:
            if (e.enableRotate === !1)
              return;
            ke(n);
            break;
          case o.DOLLY:
            if (e.enableZoom === !1)
              return;
            Ce(n);
            break;
          case o.PAN:
            if (e.enablePan === !1)
              return;
            De(n);
            break;
        }
    }
    function ye(n) {
      e.enabled === !1 || e.enableZoom === !1 || a !== o.NONE || (n.preventDefault(), e.dispatchEvent(J), ze(n), e.dispatchEvent(Te));
    }
    function be(n) {
      e.enabled === !1 || e.enablePan === !1 || Ne(n);
    }
    function Fe(n) {
      switch (Pe(n), m.length) {
        case 1:
          switch (e.touches.ONE) {
            case Y.ROTATE:
              if (e.enableRotate === !1)
                return;
              le(), a = o.TOUCH_ROTATE;
              break;
            case Y.PAN:
              if (e.enablePan === !1)
                return;
              ue(), a = o.TOUCH_PAN;
              break;
            default:
              a = o.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case Y.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              je(), a = o.TOUCH_DOLLY_PAN;
              break;
            case Y.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              Ie(), a = o.TOUCH_DOLLY_ROTATE;
              break;
            default:
              a = o.NONE;
          }
          break;
        default:
          a = o.NONE;
      }
      a !== o.NONE && e.dispatchEvent(J);
    }
    function Ge(n) {
      switch (Pe(n), a) {
        case o.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          de(n), e.update();
          break;
        case o.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          he(n), e.update();
          break;
        case o.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          $e(n), e.update();
          break;
        case o.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          Ye(n), e.update();
          break;
        default:
          a = o.NONE;
      }
    }
    function _e(n) {
      e.enabled !== !1 && n.preventDefault();
    }
    function Ue(n) {
      m.push(n);
    }
    function we(n) {
      delete F[n.pointerId];
      for (let c = 0; c < m.length; c++)
        if (m[c].pointerId == n.pointerId) {
          m.splice(c, 1);
          return;
        }
    }
    function Pe(n) {
      let c = F[n.pointerId];
      c === void 0 && (c = new A(), F[n.pointerId] = c), c.set(n.pageX, n.pageY);
    }
    function Q(n) {
      const c = n.pointerId === m[0].pointerId ? m[1] : m[0];
      return F[c.pointerId];
    }
    e.domElement.addEventListener("contextmenu", _e), e.domElement.addEventListener("pointerdown", pe), e.domElement.addEventListener("pointercancel", ge), e.domElement.addEventListener("wheel", ye, { passive: !1 }), this.update();
  }
}
const Pt = {
  name: "OrbitControls",
  render: () => null
}, Et = /* @__PURE__ */ _({
  ...Pt,
  props: {
    name: null
  },
  setup(s, { expose: r }) {
    const t = s, e = k(null);
    f("addControls")(e);
    const o = f("parentCamera"), a = f("canvas");
    return p(a, () => {
      e.value = new wt(o, a.value);
    }), r({ three: e.value }), { props: t, three: e, camera: o, canvas: a };
  }
}), St = /* @__PURE__ */ _({
  __name: "Mesh",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    castShadow: { type: Boolean, default: !1 },
    receiveShadow: { type: Boolean, default: !1 }
  },
  setup(s, { expose: r }) {
    const t = s, e = f("scene"), o = new te(), a = new ve(), i = new tt(o, a);
    i.castShadow = !0, i.receiveShadow = !0, e.add(i), Z(t, i), X(t, i), ne(t, i);
    function l(u) {
      i.castShadow = u.castShadow, i.receiveShadow = u.receiveShadow;
    }
    return l(t), p(t, () => l(t)), M("mesh", i), r({ three: i }), (u, g) => C(u.$slots, "default");
  }
}), Mt = /* @__PURE__ */ _({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: r }) {
    const t = s, e = f("scene"), o = new te(), a = new Ae({ color: "red", sizeAttenuation: !1, size: 2 }), i = new nt(o, a);
    return e.add(i), Z(t, i), X(t, i), ne(t, i), M("mesh", i), r({ three: i }), (l, u) => C(l.$slots, "default");
  }
}), Ot = /* @__PURE__ */ _({
  __name: "AxesHelper",
  props: {
    size: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: r }) {
    const t = s, e = f("scene"), o = new ot(t.size);
    return e.add(o), Z(t, o), X(t, o), M("mesh", o), r({ three: o }), (a, i) => C(a.$slots, "default");
  }
}), Tt = {
  name: "BoxGeometry",
  render: () => null
}, vt = /* @__PURE__ */ _({
  ...Tt,
  props: {
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(s, { expose: r }) {
    const t = s, e = f("mesh");
    function o(i, l, u, g, h, E) {
      return new at(i, l, u, g, h, E);
    }
    const a = k(
      o(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
    );
    return e.geometry = a.value, p(t, () => {
      e.geometry = o(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments
      ), a.value = e.geometry;
    }), r({ three: a }), { props: t, mesh: e, makeBox: o, three: a };
  }
}), At = {
  name: "BufferGeometry",
  render: () => null
}, Lt = /* @__PURE__ */ _({
  ...At,
  props: {
    vertices: { default: () => [] },
    faces: { default: () => [] }
  },
  setup(s, { expose: r }) {
    const t = s, e = f("mesh");
    function o(i, l) {
      const u = new te(), g = new Float32Array(i.length * 3);
      for (let h = 0; h < i.length; h++) {
        const E = pt(i[h]);
        g[h * 3] = E[0], g[h * 3 + 1] = E[1], g[h * 3 + 2] = E[2];
      }
      return u.setAttribute("position", new st(g, 3)), u;
    }
    const a = k(o(t.vertices, t.faces));
    return e.geometry = a.value, p(t, () => {
      e.geometry = o(t.vertices), e.geometry.computeVertexNormals(), a.value = e.geometry;
    }), r({ three: a }), { props: t, mesh: e, makeGeometry: o, three: a };
  }
}), xt = {
  name: "PlaneGeometry",
  render: () => null
}, Rt = /* @__PURE__ */ _({
  ...xt,
  props: {
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(s, { expose: r }) {
    const t = s, e = f("mesh");
    function o(i, l, u, g) {
      return new it(i, l, u, g);
    }
    const a = k(o(t.width, t.height, t.widthSegments, t.heightSegments));
    return e.geometry = a.value, p(t, () => {
      e.geometry = o(t.width, t.height, t.widthSegments, t.heightSegments), a.value = e.geometry;
    }), r({ three: a }), { props: t, mesh: e, makePlane: o, three: a };
  }
}), kt = {
  name: "SphereGeometry",
  render: () => null
}, Ct = /* @__PURE__ */ _({
  ...kt,
  props: {
    radius: { default: 1 },
    widthSegments: { default: 8 },
    heightSegments: { default: 6 },
    phiStart: { default: 0 },
    phiLength: { default: 2 * Math.PI },
    thetaStart: { default: 0 },
    thetaLength: { default: Math.PI }
  },
  setup(s, { expose: r }) {
    const t = s, e = f("mesh");
    function o(i, l, u, g, h, E, S) {
      return new rt(i, l, u, g, h, E, S);
    }
    const a = k(
      o(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength
      )
    );
    return e.geometry = a.value, p(t, () => {
      e.geometry = o(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength
      ), a.value = e.geometry;
    }), r({ three: a }), { props: t, mesh: e, makeSphere: o, three: a };
  }
}), Dt = {
  name: "MeshBasicMaterial"
}, zt = /* @__PURE__ */ _({
  ...Dt,
  props: {
    color: { default: 16777215 },
    side: { default: Le }
  },
  setup(s, { expose: r }) {
    const t = s, e = f("mesh"), o = new ve();
    e.material = o;
    function a(i) {
      i.color && (o.color = new B(i.color)), i.side && (o.side = i.side);
    }
    return a(t), p(t, () => a(t)), M("material", o), r({ three: o }), (i, l) => C(i.$slots, "default");
  }
}), Nt = {
  name: "MeshLambertMaterial"
}, jt = /* @__PURE__ */ _({
  ...Nt,
  props: {
    color: { default: 16777215 },
    side: { default: Le }
  },
  setup(s, { expose: r }) {
    const t = s, e = f("mesh"), o = new ct();
    e.material = o;
    function a(i) {
      i.color && (o.color = new B(i.color)), i.side && (o.side = i.side);
    }
    return a(t), p(t, () => a(t)), M("material", o), r({ three: o }), (i, l) => C(i.$slots, "default");
  }
}), It = {
  name: "PointsMaterial",
  render: () => null
}, $t = /* @__PURE__ */ _({
  ...It,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 }
  },
  setup(s, { expose: r }) {
    const t = s, e = f("mesh"), o = new Ae({ color: t.color, sizeAttenuation: t.sizeAttenuation, size: t.size });
    e.material = o;
    function a(i) {
      i.color && (o.color = new B(i.color)), i.size && (o.size = i.size), i.sizeAttenuation !== void 0 && (o.sizeAttenuation = i.sizeAttenuation);
    }
    return a(t), p(t, () => a(t)), M("material", o), r({ three: o }), { props: t, mesh: e, three: o, applyProps: a };
  }
}), Yt = {
  name: "AmbientLight",
  render: () => null
}, Bt = /* @__PURE__ */ _({
  ...Yt,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(s, { expose: r }) {
    const t = s, e = f("scene"), o = new lt();
    e.add(o);
    function a(i) {
      o.color = new B(i.color), o.intensity = i.intensity;
    }
    return a(t), p(t, () => a(t)), r({ three: o }), { props: t, scene: e, three: o, applyProps: a };
  }
}), Ht = {
  name: "PointLight",
  render: () => null
}, Ft = /* @__PURE__ */ _({
  ...Ht,
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    color: { default: 16777215 },
    intensity: { default: 1 },
    castShadow: { type: Boolean, default: !1 }
  },
  setup(s, { expose: r }) {
    const t = s, e = f("scene"), o = new ut();
    e.add(o), Z(t, o), X(t, o), ne(t, o);
    function a(i) {
      o.color = new B(i.color), o.intensity = i.intensity, o.castShadow = i.castShadow;
    }
    return a(t), p(t, () => a(t)), r({ three: o }), { props: t, scene: e, three: o, applyProps: a };
  }
}), Gt = {
  name: "Texture",
  render: () => null
}, Ut = /* @__PURE__ */ _({
  ...Gt,
  props: {
    url: null
  },
  setup(s, { expose: r }) {
    const t = s, e = f("material"), o = k(new mt());
    function a(i) {
      "map" in e && (e.map = new dt().load(i.url));
    }
    return a(t), p(t, () => a(t)), r({ three: o }), { props: t, material: e, three: o, applyProps: a };
  }
});
function Vt(s) {
  s.component("Renderer", ht), s.component("Scene", ft), s.component("PerspectiveCamera", yt), s.component("OrthographicCamera", _t), s.component("OrbitControls", Et), s.component("Mesh", St), s.component("Points", Mt), s.component("AxesHelper", Ot), s.component("BoxGeometry", vt), s.component("BufferGeometry", Lt), s.component("PlaneGeometry", Rt), s.component("SphereGeometry", Ct), s.component("MeshBasicMaterial", zt), s.component("MeshLambertMaterial", jt), s.component("PointsMaterial", $t), s.component("AmbientLight", Bt), s.component("PointLight", Ft), s.component("Texture", Ut);
}
export {
  Bt as AmbientLight,
  Ot as AxesHelper,
  vt as BoxGeometry,
  Lt as BufferGeometry,
  St as Mesh,
  zt as MeshBasicMaterial,
  jt as MeshLambertMaterial,
  Et as OrbitControls,
  _t as OrthographicCamera,
  yt as PerspectiveCamera,
  Rt as PlaneGeometry,
  Ft as PointLight,
  Mt as Points,
  $t as PointsMaterial,
  ht as Renderer,
  ft as Scene,
  Ct as SphereGeometry,
  Ut as Texture,
  Vt as install
};

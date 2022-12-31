import { defineComponent as w, ref as k, provide as O, watch as _, onMounted as Q, openBlock as Fe, createElementBlock as Ue, Fragment as Ze, renderSlot as C, createElementVNode as Xe, inject as p } from "vue";
import { WebGLRenderer as Ve, Scene as Ke, Color as B, Vector3 as v, PerspectiveCamera as We, OrthographicCamera as qe, EventDispatcher as Qe, MOUSE as $, TOUCH as Y, Quaternion as we, Spherical as Pe, Vector2 as L, BufferGeometry as J, MeshBasicMaterial as Oe, Mesh as Je, PointsMaterial as Te, Points as et, AxesHelper as tt, BoxGeometry as nt, BufferAttribute as ot, PlaneGeometry as at, SphereGeometry as st, FrontSide as ve, MeshLambertMaterial as it, AmbientLight as rt, PointLight as ct, Texture as lt, TextureLoader as ut } from "three";
const mt = /* @__PURE__ */ w({
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
    const n = s;
    let e = null;
    const o = [];
    let a = null;
    const i = k([]), l = k([]), u = k();
    O("canvas", u);
    let g = Date.now();
    const f = 1e3 / 30;
    _(
      () => n.camera,
      (d) => S(d)
    );
    const S = (d) => {
      if (d) {
        const E = i.value.find((h) => h.name === d);
        E === void 0 && (a = null), a = E;
      } else
        a = i.value[0];
    };
    function M(d) {
      e !== null && (e.shadowMap.enabled = d.shadowMapEnabled);
    }
    Q(() => {
      e = new Ve({ canvas: u.value, antialias: n.antialias }), e.setSize(1, 1), M(n), S(n.camera), new ResizeObserver((E) => {
        E.forEach((h) => {
          e && n.autoResize && e.setSize(h.contentRect.width, h.contentRect.height);
        });
      }).observe(u.value.parentElement), A();
    });
    function A() {
      requestAnimationFrame(A);
      const d = Date.now(), E = d - g;
      if (!(E < f)) {
        if (g = d - E % f, n.onBeforeRender && n.onBeforeRender(), l.value.length > 0 && a)
          for (const h of l.value)
            h.value !== null && (h.value.object.uuid === a.uuid ? (h.value.enabled = !0, h.value.update()) : h.value.enabled = !1);
        if (a && e)
          for (const h of o)
            e.render(h, a);
      }
    }
    return M(n), _(n, () => M(n)), O("addCamera", (d) => i.value.push(d)), O("addScene", (d) => o.push(d)), O("addControls", (d) => l.value.push(d)), r({ three: e }), (d, E) => (Fe(), Ue(Ze, null, [
      C(d.$slots, "default"),
      Xe("canvas", {
        ref_key: "canvas",
        ref: u
      }, null, 512)
    ], 64));
  }
}), dt = /* @__PURE__ */ w({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(s, { expose: r }) {
    const n = s, e = new Ke();
    O("scene", e), p("addScene")(e);
    function o(a) {
      a.background && (e.background = new B(a.background));
    }
    return o(n), _(n, () => o(n)), r({ three: e }), (a, i) => C(a.$slots, "default");
  }
}), Ee = (s) => s === void 0 ? new v(0, 0, 0) : "x" in s ? new v(s.x, s.y, s.z) : new v(s[0], s[1], s[2]), ft = (s) => s === void 0 ? [0, 0, 0] : "x" in s ? [s.x, s.y, s.z] : s, b = (s, r, n) => {
  if (s[r] !== void 0) {
    const e = Ee(s[r]);
    n[r].isVector3 ? n[r].set(e.x, e.y, e.z) : typeof n[r] == "function" && n[r](e.x, e.y, e.z);
  }
  _(
    () => s[r],
    () => {
      if (s[r] !== void 0) {
        const e = Ee(s[r]);
        n[r].isVector3 ? n[r].set(e.x, e.y, e.z) : typeof n[r] == "function" && n[r](e.x, e.y, e.z);
      }
    }
  );
}, ht = {
  name: "PerspectiveCamera"
}, pt = /* @__PURE__ */ w({
  ...ht,
  props: {
    name: { default: "" },
    up: { default: () => [0, 1, 0] },
    position: { default: () => [0, 0, 0] },
    lookAt: { default: () => [0, 0, 0] }
  },
  setup(s, { expose: r }) {
    const n = s, e = new We(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    p("addCamera")(e);
    const o = p("canvas");
    Q(() => {
      n.name && (e.name = n.name), new ResizeObserver((l) => {
        l.forEach((u) => {
          e.aspect = u.contentRect.width / u.contentRect.height, e.updateProjectionMatrix();
        });
      }).observe(o.value);
    }), b(n, "position", e), b(n, "up", e), b(n, "lookAt", e);
    function a(i) {
    }
    return _(n, () => void 0), O("parentCamera", e), r({ three: e }), (i, l) => C(i.$slots, "default");
  }
}), gt = {
  name: "OrthographicCamera"
}, yt = /* @__PURE__ */ w({
  ...gt,
  props: {
    name: { default: "" },
    up: { default: () => [0, 1, 0] },
    position: { default: () => [0, 0, 0] },
    lookAt: { default: () => [0, 0, 0] }
  },
  setup(s, { expose: r }) {
    const n = s, e = new qe(-30, 30, 30, -30, 0.1, 1e3);
    e.lookAt(0, 0, 0), e.updateProjectionMatrix(), p("addCamera")(e), Q(() => {
      n.name && (e.name = n.name);
    }), b(n, "position", e), b(n, "up", e), b(n, "lookAt", e);
    function o(a) {
    }
    return _(n, () => void 0), O("parentCamera", e), r({ three: e }), (a, i) => C(a.$slots, "default");
  }
}), Se = { type: "change" }, q = { type: "start" }, Me = { type: "end" };
class bt extends Qe {
  constructor(r, n) {
    super(), n === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), n === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = r, this.domElement = n, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new v(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: $.ROTATE, MIDDLE: $.DOLLY, RIGHT: $.PAN }, this.touches = { ONE: Y.ROTATE, TWO: Y.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return l.phi;
    }, this.getAzimuthalAngle = function() {
      return l.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(t) {
      t.addEventListener("keydown", pe), this._domElementKeyEvents = t;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(Se), e.update(), a = o.NONE;
    }, this.update = function() {
      const t = new v(), c = new we().setFromUnitVectors(r.up, new v(0, 1, 0)), y = c.clone().invert(), P = new v(), T = new we(), I = 2 * Math.PI;
      return function() {
        const _e = e.object.position;
        t.copy(_e).sub(e.target), t.applyQuaternion(c), l.setFromVector3(t), e.autoRotate && a === o.NONE && Z(Ae()), e.enableDamping ? (l.theta += u.theta * e.dampingFactor, l.phi += u.phi * e.dampingFactor) : (l.theta += u.theta, l.phi += u.phi);
        let x = e.minAzimuthAngle, R = e.maxAzimuthAngle;
        return isFinite(x) && isFinite(R) && (x < -Math.PI ? x += I : x > Math.PI && (x -= I), R < -Math.PI ? R += I : R > Math.PI && (R -= I), x <= R ? l.theta = Math.max(x, Math.min(R, l.theta)) : l.theta = l.theta > (x + R) / 2 ? Math.max(x, l.theta) : Math.min(R, l.theta)), l.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= g, l.radius = Math.max(e.minDistance, Math.min(e.maxDistance, l.radius)), e.enableDamping === !0 ? e.target.addScaledVector(f, e.dampingFactor) : e.target.add(f), t.setFromSpherical(l), t.applyQuaternion(y), _e.copy(e.target).add(t), e.object.lookAt(e.target), e.enableDamping === !0 ? (u.theta *= 1 - e.dampingFactor, u.phi *= 1 - e.dampingFactor, f.multiplyScalar(1 - e.dampingFactor)) : (u.set(0, 0, 0), f.set(0, 0, 0)), g = 1, S || P.distanceToSquared(e.object.position) > i || 8 * (1 - T.dot(e.object.quaternion)) > i ? (e.dispatchEvent(Se), P.copy(e.object.position), T.copy(e.object.quaternion), S = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", ge), e.domElement.removeEventListener("pointerdown", de), e.domElement.removeEventListener("pointercancel", fe), e.domElement.removeEventListener("wheel", he), e.domElement.removeEventListener("pointermove", V), e.domElement.removeEventListener("pointerup", K), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", pe);
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
    const i = 1e-6, l = new Pe(), u = new Pe();
    let g = 1;
    const f = new v();
    let S = !1;
    const M = new L(), A = new L(), d = new L(), E = new L(), h = new L(), D = new L(), z = new L(), N = new L(), H = new L(), m = [], G = {};
    function Ae() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function F() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function Z(t) {
      u.theta -= t;
    }
    function ee(t) {
      u.phi -= t;
    }
    const te = function() {
      const t = new v();
      return function(y, P) {
        t.setFromMatrixColumn(P, 0), t.multiplyScalar(-y), f.add(t);
      };
    }(), ne = function() {
      const t = new v();
      return function(y, P) {
        e.screenSpacePanning === !0 ? t.setFromMatrixColumn(P, 1) : (t.setFromMatrixColumn(P, 0), t.crossVectors(e.object.up, t)), t.multiplyScalar(y), f.add(t);
      };
    }(), j = function() {
      const t = new v();
      return function(y, P) {
        const T = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const I = e.object.position;
          t.copy(I).sub(e.target);
          let U = t.length();
          U *= Math.tan(e.object.fov / 2 * Math.PI / 180), te(2 * y * U / T.clientHeight, e.object.matrix), ne(2 * P * U / T.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (te(y * (e.object.right - e.object.left) / e.object.zoom / T.clientWidth, e.object.matrix), ne(P * (e.object.top - e.object.bottom) / e.object.zoom / T.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function X(t) {
      e.object.isPerspectiveCamera ? g /= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * t)), e.object.updateProjectionMatrix(), S = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function oe(t) {
      e.object.isPerspectiveCamera ? g *= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / t)), e.object.updateProjectionMatrix(), S = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function ae(t) {
      M.set(t.clientX, t.clientY);
    }
    function Le(t) {
      z.set(t.clientX, t.clientY);
    }
    function se(t) {
      E.set(t.clientX, t.clientY);
    }
    function xe(t) {
      A.set(t.clientX, t.clientY), d.subVectors(A, M).multiplyScalar(e.rotateSpeed);
      const c = e.domElement;
      Z(2 * Math.PI * d.x / c.clientHeight), ee(2 * Math.PI * d.y / c.clientHeight), M.copy(A), e.update();
    }
    function Re(t) {
      N.set(t.clientX, t.clientY), H.subVectors(N, z), H.y > 0 ? X(F()) : H.y < 0 && oe(F()), z.copy(N), e.update();
    }
    function ke(t) {
      h.set(t.clientX, t.clientY), D.subVectors(h, E).multiplyScalar(e.panSpeed), j(D.x, D.y), E.copy(h), e.update();
    }
    function Ce(t) {
      t.deltaY < 0 ? oe(F()) : t.deltaY > 0 && X(F()), e.update();
    }
    function De(t) {
      let c = !1;
      switch (t.code) {
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
      c && (t.preventDefault(), e.update());
    }
    function ie() {
      if (m.length === 1)
        M.set(m[0].pageX, m[0].pageY);
      else {
        const t = 0.5 * (m[0].pageX + m[1].pageX), c = 0.5 * (m[0].pageY + m[1].pageY);
        M.set(t, c);
      }
    }
    function re() {
      if (m.length === 1)
        E.set(m[0].pageX, m[0].pageY);
      else {
        const t = 0.5 * (m[0].pageX + m[1].pageX), c = 0.5 * (m[0].pageY + m[1].pageY);
        E.set(t, c);
      }
    }
    function ce() {
      const t = m[0].pageX - m[1].pageX, c = m[0].pageY - m[1].pageY, y = Math.sqrt(t * t + c * c);
      z.set(0, y);
    }
    function ze() {
      e.enableZoom && ce(), e.enablePan && re();
    }
    function Ne() {
      e.enableZoom && ce(), e.enableRotate && ie();
    }
    function le(t) {
      if (m.length == 1)
        A.set(t.pageX, t.pageY);
      else {
        const y = W(t), P = 0.5 * (t.pageX + y.x), T = 0.5 * (t.pageY + y.y);
        A.set(P, T);
      }
      d.subVectors(A, M).multiplyScalar(e.rotateSpeed);
      const c = e.domElement;
      Z(2 * Math.PI * d.x / c.clientHeight), ee(2 * Math.PI * d.y / c.clientHeight), M.copy(A);
    }
    function ue(t) {
      if (m.length === 1)
        h.set(t.pageX, t.pageY);
      else {
        const c = W(t), y = 0.5 * (t.pageX + c.x), P = 0.5 * (t.pageY + c.y);
        h.set(y, P);
      }
      D.subVectors(h, E).multiplyScalar(e.panSpeed), j(D.x, D.y), E.copy(h);
    }
    function me(t) {
      const c = W(t), y = t.pageX - c.x, P = t.pageY - c.y, T = Math.sqrt(y * y + P * P);
      N.set(0, T), H.set(0, Math.pow(N.y / z.y, e.zoomSpeed)), X(H.y), z.copy(N);
    }
    function je(t) {
      e.enableZoom && me(t), e.enablePan && ue(t);
    }
    function Ie(t) {
      e.enableZoom && me(t), e.enableRotate && le(t);
    }
    function de(t) {
      e.enabled !== !1 && (m.length === 0 && (e.domElement.setPointerCapture(t.pointerId), e.domElement.addEventListener("pointermove", V), e.domElement.addEventListener("pointerup", K)), Ge(t), t.pointerType === "touch" ? Be(t) : $e(t));
    }
    function V(t) {
      e.enabled !== !1 && (t.pointerType === "touch" ? He(t) : Ye(t));
    }
    function K(t) {
      ye(t), m.length === 0 && (e.domElement.releasePointerCapture(t.pointerId), e.domElement.removeEventListener("pointermove", V), e.domElement.removeEventListener("pointerup", K)), e.dispatchEvent(Me), a = o.NONE;
    }
    function fe(t) {
      ye(t);
    }
    function $e(t) {
      let c;
      switch (t.button) {
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
          Le(t), a = o.DOLLY;
          break;
        case $.ROTATE:
          if (t.ctrlKey || t.metaKey || t.shiftKey) {
            if (e.enablePan === !1)
              return;
            se(t), a = o.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            ae(t), a = o.ROTATE;
          }
          break;
        case $.PAN:
          if (t.ctrlKey || t.metaKey || t.shiftKey) {
            if (e.enableRotate === !1)
              return;
            ae(t), a = o.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            se(t), a = o.PAN;
          }
          break;
        default:
          a = o.NONE;
      }
      a !== o.NONE && e.dispatchEvent(q);
    }
    function Ye(t) {
      if (e.enabled !== !1)
        switch (a) {
          case o.ROTATE:
            if (e.enableRotate === !1)
              return;
            xe(t);
            break;
          case o.DOLLY:
            if (e.enableZoom === !1)
              return;
            Re(t);
            break;
          case o.PAN:
            if (e.enablePan === !1)
              return;
            ke(t);
            break;
        }
    }
    function he(t) {
      e.enabled === !1 || e.enableZoom === !1 || a !== o.NONE || (t.preventDefault(), e.dispatchEvent(q), Ce(t), e.dispatchEvent(Me));
    }
    function pe(t) {
      e.enabled === !1 || e.enablePan === !1 || De(t);
    }
    function Be(t) {
      switch (be(t), m.length) {
        case 1:
          switch (e.touches.ONE) {
            case Y.ROTATE:
              if (e.enableRotate === !1)
                return;
              ie(), a = o.TOUCH_ROTATE;
              break;
            case Y.PAN:
              if (e.enablePan === !1)
                return;
              re(), a = o.TOUCH_PAN;
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
              ze(), a = o.TOUCH_DOLLY_PAN;
              break;
            case Y.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              Ne(), a = o.TOUCH_DOLLY_ROTATE;
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
    function He(t) {
      switch (be(t), a) {
        case o.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          le(t), e.update();
          break;
        case o.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          ue(t), e.update();
          break;
        case o.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          je(t), e.update();
          break;
        case o.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          Ie(t), e.update();
          break;
        default:
          a = o.NONE;
      }
    }
    function ge(t) {
      e.enabled !== !1 && t.preventDefault();
    }
    function Ge(t) {
      m.push(t);
    }
    function ye(t) {
      delete G[t.pointerId];
      for (let c = 0; c < m.length; c++)
        if (m[c].pointerId == t.pointerId) {
          m.splice(c, 1);
          return;
        }
    }
    function be(t) {
      let c = G[t.pointerId];
      c === void 0 && (c = new L(), G[t.pointerId] = c), c.set(t.pageX, t.pageY);
    }
    function W(t) {
      const c = t.pointerId === m[0].pointerId ? m[1] : m[0];
      return G[c.pointerId];
    }
    e.domElement.addEventListener("contextmenu", ge), e.domElement.addEventListener("pointerdown", de), e.domElement.addEventListener("pointercancel", fe), e.domElement.addEventListener("wheel", he, { passive: !1 }), this.update();
  }
}
const _t = {
  name: "OrbitControls",
  render: () => null
}, wt = /* @__PURE__ */ w({
  ..._t,
  props: {
    name: null
  },
  setup(s, { expose: r }) {
    const n = s, e = k(null);
    p("addControls")(e);
    const o = p("parentCamera"), a = p("canvas");
    return _(a, () => {
      e.value = new bt(o, a.value);
    }), r({ three: e.value }), { props: n, three: e, camera: o, canvas: a };
  }
}), Pt = /* @__PURE__ */ w({
  __name: "Mesh",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    castShadow: { type: Boolean, default: !1 },
    receiveShadow: { type: Boolean, default: !1 }
  },
  setup(s, { expose: r }) {
    const n = s, e = p("scene"), o = new J(), a = new Oe(), i = new Je(o, a);
    i.castShadow = !0, i.receiveShadow = !0, e.add(i), b(n, "position", i), b(n, "rotation", i), b(n, "scale", i);
    function l(u) {
      i.castShadow = u.castShadow, i.receiveShadow = u.receiveShadow;
    }
    return l(n), _(n, () => l(n)), O("mesh", i), r({ three: i }), (u, g) => C(u.$slots, "default");
  }
}), Et = /* @__PURE__ */ w({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: r }) {
    const n = s, e = p("scene"), o = new J(), a = new Te({ color: "red", sizeAttenuation: !1, size: 2 }), i = new et(o, a);
    return e.add(i), b(n, "position", i), b(n, "rotation", i), b(n, "scale", i), O("mesh", i), r({ three: i }), (l, u) => C(l.$slots, "default");
  }
}), St = /* @__PURE__ */ w({
  __name: "AxesHelper",
  props: {
    size: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: r }) {
    const n = s, e = p("scene"), o = new tt(n.size);
    return e.add(o), b(n, "position", o), b(n, "rotation", o), b(n, "scale", o), O("mesh", o), r({ three: o }), (a, i) => C(a.$slots, "default");
  }
}), Mt = {
  name: "BoxGeometry",
  render: () => null
}, Ot = /* @__PURE__ */ w({
  ...Mt,
  props: {
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(s, { expose: r }) {
    const n = s, e = p("mesh");
    function o(i, l, u, g, f, S) {
      return new nt(i, l, u, g, f, S);
    }
    const a = k(
      o(n.width, n.height, n.depth, n.widthSegments, n.heightSegments, n.depthSegments)
    );
    return e.geometry = a.value, _(n, () => {
      e.geometry.dispose(), e.geometry = o(
        n.width,
        n.height,
        n.depth,
        n.widthSegments,
        n.heightSegments,
        n.depthSegments
      ), a.value = e.geometry;
    }), r({ three: a }), { props: n, mesh: e, makeBox: o, three: a };
  }
}), Tt = {
  name: "BufferGeometry",
  render: () => null
}, vt = /* @__PURE__ */ w({
  ...Tt,
  props: {
    vertices: { default: () => [] },
    faces: { default: () => [] }
  },
  setup(s, { expose: r }) {
    const n = s, e = p("mesh");
    function o(i, l) {
      const u = new J(), g = new Float32Array(i.length * 3);
      for (let f = 0; f < i.length; f++) {
        const S = ft(i[f]);
        g[f * 3] = S[0], g[f * 3 + 1] = S[1], g[f * 3 + 2] = S[2];
      }
      return u.setAttribute("position", new ot(g, 3)), u;
    }
    const a = k(o(n.vertices, n.faces));
    return e.geometry = a.value, _(n, () => {
      e.geometry.dispose(), e.geometry = o(n.vertices), e.geometry.computeVertexNormals(), a.value = e.geometry;
    }), r({ three: a }), { props: n, mesh: e, makeGeometry: o, three: a };
  }
}), At = {
  name: "PlaneGeometry",
  render: () => null
}, Lt = /* @__PURE__ */ w({
  ...At,
  props: {
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(s, { expose: r }) {
    const n = s, e = p("mesh");
    function o(i, l, u, g) {
      return new at(i, l, u, g);
    }
    const a = k(o(n.width, n.height, n.widthSegments, n.heightSegments));
    return e.geometry = a.value, _(n, () => {
      e.geometry.dispose(), e.geometry = o(n.width, n.height, n.widthSegments, n.heightSegments), a.value = e.geometry;
    }), r({ three: a }), { props: n, mesh: e, makePlane: o, three: a };
  }
}), xt = {
  name: "SphereGeometry",
  render: () => null
}, Rt = /* @__PURE__ */ w({
  ...xt,
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
    const n = s, e = p("mesh");
    function o(i, l, u, g, f, S, M) {
      return new st(i, l, u, g, f, S, M);
    }
    const a = k(
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
    return e.geometry = a.value, _(n, () => {
      e.geometry.dispose(), e.geometry = o(
        n.radius,
        n.widthSegments,
        n.heightSegments,
        n.phiStart,
        n.phiLength,
        n.thetaStart,
        n.thetaLength
      ), a.value = e.geometry;
    }), r({ three: a }), { props: n, mesh: e, makeSphere: o, three: a };
  }
}), kt = {
  name: "MeshBasicMaterial"
}, Ct = /* @__PURE__ */ w({
  ...kt,
  props: {
    color: { default: 16777215 },
    side: { default: ve }
  },
  setup(s, { expose: r }) {
    const n = s, e = p("mesh"), o = new Oe();
    e.material = o;
    function a(i) {
      i.color && (o.color = new B(i.color)), i.side && (o.side = i.side);
    }
    return a(n), _(n, () => a(n)), O("material", o), r({ three: o }), (i, l) => C(i.$slots, "default");
  }
}), Dt = {
  name: "MeshLambertMaterial"
}, zt = /* @__PURE__ */ w({
  ...Dt,
  props: {
    color: { default: 16777215 },
    side: { default: ve }
  },
  setup(s, { expose: r }) {
    const n = s, e = p("mesh"), o = new it();
    e.material = o;
    function a(i) {
      i.color && (o.color = new B(i.color)), i.side && (o.side = i.side);
    }
    return a(n), _(n, () => a(n)), O("material", o), r({ three: o }), (i, l) => C(i.$slots, "default");
  }
}), Nt = {
  name: "PointsMaterial",
  render: () => null
}, jt = /* @__PURE__ */ w({
  ...Nt,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 }
  },
  setup(s, { expose: r }) {
    const n = s, e = p("mesh"), o = new Te({ color: n.color, sizeAttenuation: n.sizeAttenuation, size: n.size });
    e.material = o;
    function a(i) {
      i.color && (o.color = new B(i.color)), i.size && (o.size = i.size), i.sizeAttenuation !== void 0 && (o.sizeAttenuation = i.sizeAttenuation);
    }
    return a(n), _(n, () => a(n)), O("material", o), r({ three: o }), { props: n, mesh: e, three: o, applyProps: a };
  }
}), It = {
  name: "AmbientLight",
  render: () => null
}, $t = /* @__PURE__ */ w({
  ...It,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(s, { expose: r }) {
    const n = s, e = p("scene"), o = new rt();
    e.add(o);
    function a(i) {
      o.color = new B(i.color), o.intensity = i.intensity;
    }
    return a(n), _(n, () => a(n)), r({ three: o }), { props: n, scene: e, three: o, applyProps: a };
  }
}), Yt = {
  name: "PointLight",
  render: () => null
}, Bt = /* @__PURE__ */ w({
  ...Yt,
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    color: { default: 16777215 },
    intensity: { default: 1 },
    castShadow: { type: Boolean, default: !1 }
  },
  setup(s, { expose: r }) {
    const n = s, e = p("scene"), o = new ct();
    e.add(o), b(n, "position", o), b(n, "rotation", o), b(n, "scale", o);
    function a(i) {
      o.color = new B(i.color), o.intensity = i.intensity, o.castShadow = i.castShadow;
    }
    return a(n), _(n, () => a(n)), r({ three: o }), { props: n, scene: e, three: o, applyProps: a };
  }
}), Ht = {
  name: "Texture",
  render: () => null
}, Gt = /* @__PURE__ */ w({
  ...Ht,
  props: {
    url: null
  },
  setup(s, { expose: r }) {
    const n = s, e = p("material"), o = k(new lt());
    function a(i) {
      "map" in e && (e.map = new ut().load(i.url));
    }
    return a(n), _(n, () => a(n)), r({ three: o }), { props: n, material: e, three: o, applyProps: a };
  }
});
function Zt(s) {
  s.component("Renderer", mt), s.component("Scene", dt), s.component("PerspectiveCamera", pt), s.component("OrthographicCamera", yt), s.component("OrbitControls", wt), s.component("Mesh", Pt), s.component("Points", Et), s.component("AxesHelper", St), s.component("BoxGeometry", Ot), s.component("BufferGeometry", vt), s.component("PlaneGeometry", Lt), s.component("SphereGeometry", Rt), s.component("MeshBasicMaterial", Ct), s.component("MeshLambertMaterial", zt), s.component("PointsMaterial", jt), s.component("AmbientLight", $t), s.component("PointLight", Bt), s.component("Texture", Gt);
}
export {
  $t as AmbientLight,
  St as AxesHelper,
  Ot as BoxGeometry,
  vt as BufferGeometry,
  Pt as Mesh,
  Ct as MeshBasicMaterial,
  zt as MeshLambertMaterial,
  wt as OrbitControls,
  yt as OrthographicCamera,
  pt as PerspectiveCamera,
  Lt as PlaneGeometry,
  Bt as PointLight,
  Et as Points,
  jt as PointsMaterial,
  mt as Renderer,
  dt as Scene,
  Rt as SphereGeometry,
  Gt as Texture,
  Zt as install
};

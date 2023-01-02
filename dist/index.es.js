import { watch as g, defineComponent as L, reactive as H, ref as te, provide as T, onMounted as pe, onUnmounted as ct, openBlock as ut, createElementBlock as mt, Fragment as dt, renderSlot as k, createElementVNode as ft, inject as _, nextTick as ie } from "vue";
import { Vector3 as R, WebGLRenderer as ht, Scene as pt, Color as F, PerspectiveCamera as gt, OrthographicCamera as yt, EventDispatcher as bt, MOUSE as W, TOUCH as K, Quaternion as Ge, Spherical as Ie, Vector2 as $, BufferGeometry as j, LineBasicMaterial as ne, LineSegments as fe, MeshBasicMaterial as He, Mesh as he, PointsMaterial as J, Points as se, Loader as wt, FileLoader as _t, Group as Ye, Float32BufferAttribute as q, Material as ke, MeshPhongMaterial as vt, AxesHelper as Pt, BoxGeometry as Mt, BufferAttribute as At, EdgesGeometry as xt, PlaneGeometry as Et, SphereGeometry as Lt, WireframeGeometry as St, FrontSide as ge, MeshLambertMaterial as Ot, MeshNormalMaterial as Tt, AmbientLight as Ct, PointLight as zt, Texture as Rt, TextureLoader as Dt } from "three";
const Ne = (i) => i === void 0 ? new R(0, 0, 0) : "x" in i ? new R(i.x, i.y, i.z) : new R(i[0], i[1], i[2]), Be = (i, a, t) => {
  t[i].isVector3 ? t[i].set(a.x, a.y, a.z) : "isEuler" in t[i] && t[i].setFromVector3(a);
}, A = (i, a, t, e = !0) => {
  if (t !== null) {
    if (i[a] !== void 0) {
      const n = Ne(i[a]);
      if ("isGroup" in t)
        for (const o of t.children)
          A(i, a, o, !1);
      else
        Be(a, n, t);
    }
    e && g(
      () => i[a],
      () => {
        if (i[a] !== void 0) {
          const n = Ne(i[a]);
          if ("isGroup" in t)
            for (const o of t.children)
              A(i, a, o, !1);
          else
            Be(a, n, t);
        }
      }
    );
  }
}, M = (i, a, t) => {
  g(
    () => i[a],
    () => {
      t();
    }
  );
};
function Q(i, a) {
  a.hasAttribute("position") && (i.setAttribute("position", a.getAttribute("position")), i.attributes.position.needsUpdate = !0), a.hasAttribute("normal") && (i.setAttribute("normal", a.getAttribute("normal")), i.attributes.normal.needsUpdate = !0), a.hasAttribute("uv") && (i.setAttribute("uv", a.getAttribute("uv")), i.attributes.uv.needsUpdate = !0), i.setIndex(a.getIndex());
}
function Ze(i) {
  if (i.children.length > 0)
    for (let a = i.children.length - 1; a >= 0; a--)
      Ze(i.children[a]);
  if (i.geometry && i.geometry.dispose(), i.material)
    if (i.material.length)
      for (let a = 0; a < i.material.length; ++a)
        i.material[a].map && i.material[a].map.dispose(), i.material[a].lightMap && i.material[a].lightMap.dispose(), i.material[a].bumpMap && i.material[a].bumpMap.dispose(), i.material[a].normalMap && i.material[a].normalMap.dispose(), i.material[a].specularMap && i.material[a].specularMap.dispose(), i.material[a].envMap && i.material[a].envMap.dispose(), i.material[a].dispose();
    else
      i.material.map && i.material.map.dispose(), i.material.lightMap && i.material.lightMap.dispose(), i.material.bumpMap && i.material.bumpMap.dispose(), i.material.normalMap && i.material.normalMap.dispose(), i.material.specularMap && i.material.specularMap.dispose(), i.material.envMap && i.material.envMap.dispose(), i.material.dispose();
  return i.removeFromParent(), !0;
}
const Gt = /* @__PURE__ */ L({
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
  setup(i, { expose: a }) {
    const t = i;
    let e = null;
    const n = [], o = H([]);
    let s = null;
    const l = te([]), c = te([]), f = te();
    T("canvas", f);
    let v = Date.now();
    const y = 1e3 / 30;
    g(
      () => t.camera,
      (d) => b(d)
    );
    const b = (d) => {
      if (d) {
        const P = l.value.find((w) => w.name === d);
        P === void 0 && (s = null), s = P;
      } else
        s = l.value[0];
    };
    function u(d) {
      e !== null && (e.shadowMap.enabled = d.shadowMapEnabled);
    }
    pe(() => {
      e = new ht({ canvas: f.value, antialias: t.antialias, alpha: !0 }), e.setSize(1, 1), u(t), b(t.camera), new ResizeObserver((P) => {
        P.forEach((w) => {
          e && t.autoResize && e.setSize(w.contentRect.width, w.contentRect.height);
        });
      }).observe(f.value.parentElement), h();
    }), ct(() => {
      for (let d of n)
        Ze(d);
    });
    function h() {
      requestAnimationFrame(h);
      const d = Date.now(), P = d - v;
      if (!(P < y)) {
        if (v = d - P % y, t.onBeforeRender && t.onBeforeRender(), c.value.length > 0 && s)
          for (const w of c.value)
            w.value !== null && (w.value.object.uuid === s.uuid ? (w.value.enabled = !0, w.value.update()) : w.value.enabled = !1);
        if (s && e)
          for (const w of n)
            e.render(w, s);
      }
    }
    return u(t), g(
      () => t.shadowMapEnabled,
      () => u(t)
    ), T("addCamera", (d) => l.value.push(d)), T("addScene", (d) => n.push(d)), T("addGeometry", (d) => o.push(d)), T("getGeometry", (d) => o.find((P) => P.name === d)), T("addControls", (d) => c.value.push(d)), a({ three: e }), (d, P) => (ut(), mt(dt, null, [
      k(d.$slots, "default"),
      ft("canvas", {
        ref_key: "canvas",
        ref: f
      }, null, 512)
    ], 64));
  }
}), It = /* @__PURE__ */ L({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(i, { expose: a }) {
    const t = i, e = new pt();
    T("scene", e), _("addScene")(e);
    function n(o) {
      o.background && (e.background = new F(o.background));
    }
    return n(t), g(
      () => t.background,
      () => n(t)
    ), a({ three: e }), (o, s) => k(o.$slots, "default");
  }
}), kt = {
  name: "PerspectiveCamera"
}, Nt = /* @__PURE__ */ L({
  ...kt,
  props: {
    name: { default: "" },
    up: { default: () => [0, 1, 0] },
    position: { default: () => [0, 0, 0] },
    lookAt: { default: () => [0, 0, 0] }
  },
  setup(i, { expose: a }) {
    const t = i, e = new gt(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    _("addCamera")(e);
    const n = _("canvas");
    pe(() => {
      t.name && (e.name = t.name), new ResizeObserver((l) => {
        l.forEach((c) => {
          e.aspect = c.contentRect.width / c.contentRect.height, e.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), A(t, "position", e), A(t, "up", e), A(t, "lookAt", e);
    function o(s) {
    }
    return g(t, () => void 0), T("parentCamera", e), a({ three: e }), (s, l) => k(s.$slots, "default");
  }
}), Bt = {
  name: "OrthographicCamera"
}, jt = /* @__PURE__ */ L({
  ...Bt,
  props: {
    name: { default: "" },
    up: { default: () => [0, 1, 0] },
    position: { default: () => [0, 0, 0] },
    lookAt: { default: () => [0, 0, 0] }
  },
  setup(i, { expose: a }) {
    const t = i, e = new yt(-10, 10, 10, -10, 0.1, 1e3);
    e.lookAt(0, 0, 0), e.updateProjectionMatrix(), _("addCamera")(e);
    const n = _("canvas");
    pe(() => {
      t.name && (e.name = t.name), new ResizeObserver((l) => {
        l.forEach((c) => {
          const f = c.contentRect.width / c.contentRect.height;
          e.left = e.bottom * f, e.right = e.top * f, e.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), A(t, "position", e), A(t, "up", e), A(t, "lookAt", e);
    function o(s) {
    }
    return g(t, () => void 0), T("parentCamera", e), a({ three: e }), (s, l) => k(s.$slots, "default");
  }
}), je = { type: "change" }, me = { type: "start" }, $e = { type: "end" };
class $t extends bt {
  constructor(a, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = a, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: W.ROTATE, MIDDLE: W.DOLLY, RIGHT: W.PAN }, this.touches = { ONE: K.ROTATE, TWO: K.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return l.phi;
    }, this.getAzimuthalAngle = function() {
      return l.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(r) {
      r.addEventListener("keydown", Te), this._domElementKeyEvents = r;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(je), e.update(), o = n.NONE;
    }, this.update = function() {
      const r = new R(), m = new Ge().setFromUnitVectors(a.up, new R(0, 1, 0)), C = m.clone().invert(), z = new R(), B = new Ge(), X = 2 * Math.PI;
      return function() {
        const De = e.object.position;
        r.copy(De).sub(e.target), r.applyQuaternion(m), l.setFromVector3(r), e.autoRotate && o === n.NONE && Y(ee()), e.enableDamping ? (l.theta += c.theta * e.dampingFactor, l.phi += c.phi * e.dampingFactor) : (l.theta += c.theta, l.phi += c.phi);
        let V = e.minAzimuthAngle, U = e.maxAzimuthAngle;
        return isFinite(V) && isFinite(U) && (V < -Math.PI ? V += X : V > Math.PI && (V -= X), U < -Math.PI ? U += X : U > Math.PI && (U -= X), V <= U ? l.theta = Math.max(V, Math.min(U, l.theta)) : l.theta = l.theta > (V + U) / 2 ? Math.max(V, l.theta) : Math.min(U, l.theta)), l.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= f, l.radius = Math.max(e.minDistance, Math.min(e.maxDistance, l.radius)), e.enableDamping === !0 ? e.target.addScaledVector(v, e.dampingFactor) : e.target.add(v), r.setFromSpherical(l), r.applyQuaternion(C), De.copy(e.target).add(r), e.object.lookAt(e.target), e.enableDamping === !0 ? (c.theta *= 1 - e.dampingFactor, c.phi *= 1 - e.dampingFactor, v.multiplyScalar(1 - e.dampingFactor)) : (c.set(0, 0, 0), v.set(0, 0, 0)), f = 1, y || z.distanceToSquared(e.object.position) > s || 8 * (1 - B.dot(e.object.quaternion)) > s ? (e.dispatchEvent(je), z.copy(e.object.position), B.copy(e.object.quaternion), y = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", Ce), e.domElement.removeEventListener("pointerdown", Le), e.domElement.removeEventListener("pointercancel", Se), e.domElement.removeEventListener("wheel", Oe), e.domElement.removeEventListener("pointermove", le), e.domElement.removeEventListener("pointerup", ce), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", Te);
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
    const s = 1e-6, l = new Ie(), c = new Ie();
    let f = 1;
    const v = new R();
    let y = !1;
    const b = new $(), u = new $(), h = new $(), d = new $(), P = new $(), w = new $(), O = new $(), x = new $(), S = new $(), p = [], D = {};
    function ee() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function G() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function Y(r) {
      c.theta -= r;
    }
    function E(r) {
      c.phi -= r;
    }
    const N = function() {
      const r = new R();
      return function(C, z) {
        r.setFromMatrixColumn(z, 0), r.multiplyScalar(-C), v.add(r);
      };
    }(), ye = function() {
      const r = new R();
      return function(C, z) {
        e.screenSpacePanning === !0 ? r.setFromMatrixColumn(z, 1) : (r.setFromMatrixColumn(z, 0), r.crossVectors(e.object.up, r)), r.multiplyScalar(C), v.add(r);
      };
    }(), Z = function() {
      const r = new R();
      return function(C, z) {
        const B = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const X = e.object.position;
          r.copy(X).sub(e.target);
          let oe = r.length();
          oe *= Math.tan(e.object.fov / 2 * Math.PI / 180), N(2 * C * oe / B.clientHeight, e.object.matrix), ye(2 * z * oe / B.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (N(C * (e.object.right - e.object.left) / e.object.zoom / B.clientWidth, e.object.matrix), ye(z * (e.object.top - e.object.bottom) / e.object.zoom / B.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function re(r) {
      e.object.isPerspectiveCamera ? f /= r : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * r)), e.object.updateProjectionMatrix(), y = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function be(r) {
      e.object.isPerspectiveCamera ? f *= r : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / r)), e.object.updateProjectionMatrix(), y = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function we(r) {
      b.set(r.clientX, r.clientY);
    }
    function Xe(r) {
      O.set(r.clientX, r.clientY);
    }
    function _e(r) {
      d.set(r.clientX, r.clientY);
    }
    function We(r) {
      u.set(r.clientX, r.clientY), h.subVectors(u, b).multiplyScalar(e.rotateSpeed);
      const m = e.domElement;
      Y(2 * Math.PI * h.x / m.clientHeight), E(2 * Math.PI * h.y / m.clientHeight), b.copy(u), e.update();
    }
    function Ke(r) {
      x.set(r.clientX, r.clientY), S.subVectors(x, O), S.y > 0 ? re(G()) : S.y < 0 && be(G()), O.copy(x), e.update();
    }
    function qe(r) {
      P.set(r.clientX, r.clientY), w.subVectors(P, d).multiplyScalar(e.panSpeed), Z(w.x, w.y), d.copy(P), e.update();
    }
    function Je(r) {
      r.deltaY < 0 ? be(G()) : r.deltaY > 0 && re(G()), e.update();
    }
    function Qe(r) {
      let m = !1;
      switch (r.code) {
        case e.keys.UP:
          Z(0, e.keyPanSpeed), m = !0;
          break;
        case e.keys.BOTTOM:
          Z(0, -e.keyPanSpeed), m = !0;
          break;
        case e.keys.LEFT:
          Z(e.keyPanSpeed, 0), m = !0;
          break;
        case e.keys.RIGHT:
          Z(-e.keyPanSpeed, 0), m = !0;
          break;
      }
      m && (r.preventDefault(), e.update());
    }
    function ve() {
      if (p.length === 1)
        b.set(p[0].pageX, p[0].pageY);
      else {
        const r = 0.5 * (p[0].pageX + p[1].pageX), m = 0.5 * (p[0].pageY + p[1].pageY);
        b.set(r, m);
      }
    }
    function Pe() {
      if (p.length === 1)
        d.set(p[0].pageX, p[0].pageY);
      else {
        const r = 0.5 * (p[0].pageX + p[1].pageX), m = 0.5 * (p[0].pageY + p[1].pageY);
        d.set(r, m);
      }
    }
    function Me() {
      const r = p[0].pageX - p[1].pageX, m = p[0].pageY - p[1].pageY, C = Math.sqrt(r * r + m * m);
      O.set(0, C);
    }
    function et() {
      e.enableZoom && Me(), e.enablePan && Pe();
    }
    function tt() {
      e.enableZoom && Me(), e.enableRotate && ve();
    }
    function Ae(r) {
      if (p.length == 1)
        u.set(r.pageX, r.pageY);
      else {
        const C = ue(r), z = 0.5 * (r.pageX + C.x), B = 0.5 * (r.pageY + C.y);
        u.set(z, B);
      }
      h.subVectors(u, b).multiplyScalar(e.rotateSpeed);
      const m = e.domElement;
      Y(2 * Math.PI * h.x / m.clientHeight), E(2 * Math.PI * h.y / m.clientHeight), b.copy(u);
    }
    function xe(r) {
      if (p.length === 1)
        P.set(r.pageX, r.pageY);
      else {
        const m = ue(r), C = 0.5 * (r.pageX + m.x), z = 0.5 * (r.pageY + m.y);
        P.set(C, z);
      }
      w.subVectors(P, d).multiplyScalar(e.panSpeed), Z(w.x, w.y), d.copy(P);
    }
    function Ee(r) {
      const m = ue(r), C = r.pageX - m.x, z = r.pageY - m.y, B = Math.sqrt(C * C + z * z);
      x.set(0, B), S.set(0, Math.pow(x.y / O.y, e.zoomSpeed)), re(S.y), O.copy(x);
    }
    function nt(r) {
      e.enableZoom && Ee(r), e.enablePan && xe(r);
    }
    function ot(r) {
      e.enableZoom && Ee(r), e.enableRotate && Ae(r);
    }
    function Le(r) {
      e.enabled !== !1 && (p.length === 0 && (e.domElement.setPointerCapture(r.pointerId), e.domElement.addEventListener("pointermove", le), e.domElement.addEventListener("pointerup", ce)), lt(r), r.pointerType === "touch" ? it(r) : at(r));
    }
    function le(r) {
      e.enabled !== !1 && (r.pointerType === "touch" ? rt(r) : st(r));
    }
    function ce(r) {
      ze(r), p.length === 0 && (e.domElement.releasePointerCapture(r.pointerId), e.domElement.removeEventListener("pointermove", le), e.domElement.removeEventListener("pointerup", ce)), e.dispatchEvent($e), o = n.NONE;
    }
    function Se(r) {
      ze(r);
    }
    function at(r) {
      let m;
      switch (r.button) {
        case 0:
          m = e.mouseButtons.LEFT;
          break;
        case 1:
          m = e.mouseButtons.MIDDLE;
          break;
        case 2:
          m = e.mouseButtons.RIGHT;
          break;
        default:
          m = -1;
      }
      switch (m) {
        case W.DOLLY:
          if (e.enableZoom === !1)
            return;
          Xe(r), o = n.DOLLY;
          break;
        case W.ROTATE:
          if (r.ctrlKey || r.metaKey || r.shiftKey) {
            if (e.enablePan === !1)
              return;
            _e(r), o = n.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            we(r), o = n.ROTATE;
          }
          break;
        case W.PAN:
          if (r.ctrlKey || r.metaKey || r.shiftKey) {
            if (e.enableRotate === !1)
              return;
            we(r), o = n.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            _e(r), o = n.PAN;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && e.dispatchEvent(me);
    }
    function st(r) {
      if (e.enabled !== !1)
        switch (o) {
          case n.ROTATE:
            if (e.enableRotate === !1)
              return;
            We(r);
            break;
          case n.DOLLY:
            if (e.enableZoom === !1)
              return;
            Ke(r);
            break;
          case n.PAN:
            if (e.enablePan === !1)
              return;
            qe(r);
            break;
        }
    }
    function Oe(r) {
      e.enabled === !1 || e.enableZoom === !1 || o !== n.NONE || (r.preventDefault(), e.dispatchEvent(me), Je(r), e.dispatchEvent($e));
    }
    function Te(r) {
      e.enabled === !1 || e.enablePan === !1 || Qe(r);
    }
    function it(r) {
      switch (Re(r), p.length) {
        case 1:
          switch (e.touches.ONE) {
            case K.ROTATE:
              if (e.enableRotate === !1)
                return;
              ve(), o = n.TOUCH_ROTATE;
              break;
            case K.PAN:
              if (e.enablePan === !1)
                return;
              Pe(), o = n.TOUCH_PAN;
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
              et(), o = n.TOUCH_DOLLY_PAN;
              break;
            case K.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              tt(), o = n.TOUCH_DOLLY_ROTATE;
              break;
            default:
              o = n.NONE;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && e.dispatchEvent(me);
    }
    function rt(r) {
      switch (Re(r), o) {
        case n.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          Ae(r), e.update();
          break;
        case n.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          xe(r), e.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          nt(r), e.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          ot(r), e.update();
          break;
        default:
          o = n.NONE;
      }
    }
    function Ce(r) {
      e.enabled !== !1 && r.preventDefault();
    }
    function lt(r) {
      p.push(r);
    }
    function ze(r) {
      delete D[r.pointerId];
      for (let m = 0; m < p.length; m++)
        if (p[m].pointerId == r.pointerId) {
          p.splice(m, 1);
          return;
        }
    }
    function Re(r) {
      let m = D[r.pointerId];
      m === void 0 && (m = new $(), D[r.pointerId] = m), m.set(r.pageX, r.pageY);
    }
    function ue(r) {
      const m = r.pointerId === p[0].pointerId ? p[1] : p[0];
      return D[m.pointerId];
    }
    e.domElement.addEventListener("contextmenu", Ce), e.domElement.addEventListener("pointerdown", Le), e.domElement.addEventListener("pointercancel", Se), e.domElement.addEventListener("wheel", Oe, { passive: !1 }), this.update();
  }
}
const Vt = {
  name: "OrbitControls",
  render: () => null
}, Ut = /* @__PURE__ */ L({
  ...Vt,
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
  setup(i, { expose: a }) {
    const t = i, e = te(null);
    _("addControls")(e);
    const n = _("parentCamera"), o = _("canvas");
    function s() {
      e.value != null && (e.value.enablePan = t.enablePan, e.value.enableRotate = t.enableRotate, e.value.enableZoom = t.enableZoom, e.value.minZoom = t.minZoom, e.value.maxZoom = t.maxZoom, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance, e.value.minPolarAngle = t.minPolarAngle, e.value.maxPolarAngle = t.maxPolarAngle, e.value.minAzimuthAngle = t.minAzimuthAngle, e.value.maxAzimuthAngle = t.maxAzimuthAngle);
    }
    return g(o, () => {
      e.value = new $t(n, o.value), s(), A(t, "target", e.value, !1);
    }), s(), M(t, "enablePan", s), M(t, "enableRotate", s), M(t, "enableZoom", s), M(t, "minZoom", s), M(t, "maxZoom", s), M(t, "minDistance", s), M(t, "maxDistance", s), M(t, "minPolarAngle", s), M(t, "maxPolarAngle", s), M(t, "minAzimuthAngle", s), M(t, "maxAzimuthAngle", s), A(t, "target", e.value), a({ three: e.value }), { props: t, three: e, camera: n, canvas: o, applyProps: s };
  }
}), Ft = /* @__PURE__ */ L({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("scene"), n = new j(), o = new ne({ color: "black" }), s = new fe(n, o);
    return e.add(s), A(t, "position", s), A(t, "rotation", s), A(t, "scale", s), T("mesh", s), a({ three: s }), (l, c) => k(l.$slots, "default");
  }
}), Ht = /* @__PURE__ */ L({
  __name: "Mesh",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    castShadow: { type: Boolean, default: !1 },
    receiveShadow: { type: Boolean, default: !1 }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("scene"), n = new j(), o = new He(), s = new he(n, o);
    s.castShadow = !0, s.receiveShadow = !0, e.add(s), A(t, "position", s), A(t, "rotation", s), A(t, "scale", s);
    function l(c) {
      s.castShadow = c.castShadow, s.receiveShadow = c.receiveShadow;
    }
    return l(t), g(
      () => t.castShadow,
      () => l(t)
    ), g(
      () => t.receiveShadow,
      () => l(t)
    ), T("mesh", s), a({ three: s }), (c, f) => k(c.$slots, "default");
  }
}), Yt = /* @__PURE__ */ L({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("scene"), n = new j(), o = new J({ color: "red", sizeAttenuation: !1, size: 2 }), s = new se(n, o);
    return e.add(s), A(t, "position", s), A(t, "rotation", s), A(t, "scale", s), T("mesh", s), a({ three: s }), (l, c) => k(l.$slots, "default");
  }
}), Zt = /^[og]\s*(.+)?/, Xt = /^mtllib /, Wt = /^usemtl /, Kt = /^usemap /, Ve = new R(), de = new R(), Ue = new R(), Fe = new R(), I = new R(), ae = new F();
function qt() {
  const i = {
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
          const s = this._finalize(!1);
          s && (s.inherited || s.groupCount <= 0) && this.materials.splice(s.index, 1);
          const l = {
            index: this.materials.length,
            name: n || "",
            mtllib: Array.isArray(o) && o.length > 0 ? o[o.length - 1] : "",
            smooth: s !== void 0 ? s.smooth : this.smooth,
            groupStart: s !== void 0 ? s.groupEnd : 0,
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
          return this.materials.push(l), l;
        },
        currentMaterial: function() {
          if (this.materials.length > 0)
            return this.materials[this.materials.length - 1];
        },
        _finalize: function(n) {
          const o = this.currentMaterial();
          if (o && o.groupEnd === -1 && (o.groupEnd = this.geometry.vertices.length / 3, o.groupCount = o.groupEnd - o.groupStart, o.inherited = !1), n && this.materials.length > 1)
            for (let s = this.materials.length - 1; s >= 0; s--)
              this.materials[s].groupCount <= 0 && this.materials.splice(s, 1);
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
      Ve.fromArray(n, a), de.fromArray(n, t), Ue.fromArray(n, e), I.subVectors(Ue, de), Fe.subVectors(Ve, de), I.cross(Fe), I.normalize(), o.push(I.x, I.y, I.z), o.push(I.x, I.y, I.z), o.push(I.x, I.y, I.z);
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
    addFace: function(a, t, e, n, o, s, l, c, f) {
      const v = this.vertices.length;
      let y = this.parseVertexIndex(a, v), b = this.parseVertexIndex(t, v), u = this.parseVertexIndex(e, v);
      if (this.addVertex(y, b, u), this.addColor(y, b, u), l !== void 0 && l !== "") {
        const h = this.normals.length;
        y = this.parseNormalIndex(l, h), b = this.parseNormalIndex(c, h), u = this.parseNormalIndex(f, h), this.addNormal(y, b, u);
      } else
        this.addFaceNormal(y, b, u);
      if (n !== void 0 && n !== "") {
        const h = this.uvs.length;
        y = this.parseUVIndex(n, h), b = this.parseUVIndex(o, h), u = this.parseUVIndex(s, h), this.addUV(y, b, u), this.object.geometry.hasUVIndices = !0;
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
      for (let o = 0, s = a.length; o < s; o++)
        this.addVertexLine(this.parseVertexIndex(a[o], e));
      for (let o = 0, s = t.length; o < s; o++)
        this.addUVLine(this.parseUVIndex(t[o], n));
    }
  };
  return i.startObject("", !1), i;
}
class Jt extends wt {
  constructor(a) {
    super(a), this.materials = null;
  }
  load(a, t, e, n) {
    const o = this, s = new _t(this.manager);
    s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(a, function(l) {
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
    const t = new qt();
    a.indexOf(`\r
`) !== -1 && (a = a.replace(/\r\n/g, `
`)), a.indexOf(`\\
`) !== -1 && (a = a.replace(/\\\n/g, ""));
    const e = a.split(`
`);
    let n = "", o = "", s = 0, l = [];
    const c = typeof "".trimLeft == "function";
    for (let y = 0, b = e.length; y < b; y++)
      if (n = e[y], n = c ? n.trimLeft() : n.trim(), s = n.length, s !== 0 && (o = n.charAt(0), o !== "#"))
        if (o === "v") {
          const u = n.split(/\s+/);
          switch (u[0]) {
            case "v":
              t.vertices.push(
                parseFloat(u[1]),
                parseFloat(u[2]),
                parseFloat(u[3])
              ), u.length >= 7 ? (ae.setRGB(
                parseFloat(u[4]),
                parseFloat(u[5]),
                parseFloat(u[6])
              ).convertSRGBToLinear(), t.colors.push(ae.r, ae.g, ae.b)) : t.colors.push(void 0, void 0, void 0);
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
          const h = n.slice(1).trim().split(/\s+/), d = [];
          for (let w = 0, O = h.length; w < O; w++) {
            const x = h[w];
            if (x.length > 0) {
              const S = x.split("/");
              d.push(S);
            }
          }
          const P = d[0];
          for (let w = 1, O = d.length - 1; w < O; w++) {
            const x = d[w], S = d[w + 1];
            t.addFace(
              P[0],
              x[0],
              S[0],
              P[1],
              x[1],
              S[1],
              P[2],
              x[2],
              S[2]
            );
          }
        } else if (o === "l") {
          const u = n.substring(1).trim().split(" ");
          let h = [];
          const d = [];
          if (n.indexOf("/") === -1)
            h = u;
          else
            for (let P = 0, w = u.length; P < w; P++) {
              const O = u[P].split("/");
              O[0] !== "" && h.push(O[0]), O[1] !== "" && d.push(O[1]);
            }
          t.addLineGeometry(h, d);
        } else if (o === "p") {
          const h = n.slice(1).trim().split(" ");
          t.addPointGeometry(h);
        } else if ((l = Zt.exec(n)) !== null) {
          const u = (" " + l[0].slice(1).trim()).slice(1);
          t.startObject(u);
        } else if (Wt.test(n))
          t.object.startMaterial(n.substring(7).trim(), t.materialLibraries);
        else if (Xt.test(n))
          t.materialLibraries.push(n.substring(7).trim());
        else if (Kt.test(n))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (o === "s") {
          if (l = n.split(" "), l.length > 1) {
            const h = l[1].trim().toLowerCase();
            t.object.smooth = h !== "0" && h !== "off";
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
    const f = new Ye();
    if (f.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let y = 0, b = t.objects.length; y < b; y++) {
        const u = t.objects[y], h = u.geometry, d = u.materials, P = h.type === "Line", w = h.type === "Points";
        let O = !1;
        if (h.vertices.length === 0)
          continue;
        const x = new j();
        x.setAttribute("position", new q(h.vertices, 3)), h.normals.length > 0 && x.setAttribute("normal", new q(h.normals, 3)), h.colors.length > 0 && (O = !0, x.setAttribute("color", new q(h.colors, 3))), h.hasUVIndices === !0 && x.setAttribute("uv", new q(h.uvs, 2));
        const S = [];
        for (let D = 0, ee = d.length; D < ee; D++) {
          const G = d[D], Y = G.name + "_" + G.smooth + "_" + O;
          let E = t.materials[Y];
          if (this.materials !== null) {
            if (E = this.materials.create(G.name), P && E && !(E instanceof ne)) {
              const N = new ne();
              ke.prototype.copy.call(N, E), N.color.copy(E.color), E = N;
            } else if (w && E && !(E instanceof J)) {
              const N = new J({ size: 10, sizeAttenuation: !1 });
              ke.prototype.copy.call(N, E), N.color.copy(E.color), N.map = E.map, E = N;
            }
          }
          E === void 0 && (P ? E = new ne() : w ? E = new J({ size: 1, sizeAttenuation: !1 }) : E = new vt(), E.name = G.name, E.flatShading = !G.smooth, E.vertexColors = O, t.materials[Y] = E), S.push(E);
        }
        let p;
        if (S.length > 1) {
          for (let D = 0, ee = d.length; D < ee; D++) {
            const G = d[D];
            x.addGroup(G.groupStart, G.groupCount, D);
          }
          P ? p = new fe(x, S) : w ? p = new se(x, S) : p = new he(x, S);
        } else
          P ? p = new fe(x, S[0]) : w ? p = new se(x, S[0]) : p = new he(x, S[0]);
        p.name = u.name, f.add(p);
      }
    else if (t.vertices.length > 0) {
      const y = new J({ size: 1, sizeAttenuation: !1 }), b = new j();
      b.setAttribute("position", new q(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (b.setAttribute("color", new q(t.colors, 3)), y.vertexColors = !0);
      const u = new se(b, y);
      f.add(u);
    }
    return f;
  }
}
const Qt = /* @__PURE__ */ L({
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
  setup(i, { expose: a, emit: t }) {
    const e = i, n = new Jt(), o = _("scene"), s = new Ye();
    s.castShadow = !0, s.receiveShadow = !0, o.add(s), A(e, "position", s), A(e, "rotation", s), A(e, "scale", s);
    function l() {
      n.load(
        e.url,
        function(c) {
          for (const f of c.children)
            s.children.push(f), f.material = s.material, A(e, "position", s, !1), A(e, "rotation", s, !1), A(e, "scale", s, !1);
          t("load", c), resolve(c);
        },
        function(c) {
          t("progress", c);
        },
        function(c) {
          t("error", c);
        }
      );
    }
    return l(), g(
      () => e.url,
      () => l()
    ), T("mesh", s), a({
      three: s
    }), (c, f) => k(c.$slots, "default");
  }
}), en = /* @__PURE__ */ L({
  __name: "AxesHelper",
  props: {
    size: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("scene"), n = new Pt(t.size);
    return e.add(n), A(t, "position", n), A(t, "rotation", n), A(t, "scale", n), T("mesh", n), a({ three: n }), (o, s) => k(o.$slots, "default");
  }
}), tn = {
  name: "BoxGeometry",
  render: () => null
}, nn = /* @__PURE__ */ L({
  ...tn,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("mesh");
    function n(c, f, v, y, b, u) {
      return new Mt(c, f, v, y, b, u);
    }
    const o = H(new j());
    o.name = t.name, e.geometry = o;
    const s = _("addGeometry");
    s(o);
    function l() {
      const c = n(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments
      );
      Q(o, c);
    }
    return l(), M(t, "name", () => {
      o.name = t.name;
    }), M(t, "width", l), M(t, "height", l), M(t, "depth", l), M(t, "widthSegments", l), M(t, "heightSegments", l), M(t, "depthSegments", l), a({ three: o }), { props: t, mesh: e, makeBox: n, three: o, addGeometry: s, redoGeometry: l };
  }
}), on = {
  name: "BufferGeometry",
  render: () => null
}, an = /* @__PURE__ */ L({
  ...on,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("mesh");
    function n(c, f) {
      const v = new j(), y = new Float32Array(c.length);
      for (let b = 0; b < c.length; b++)
        y[b] = c[b];
      return v.setAttribute("position", new At(y, 3)), v.computeVertexNormals(), v;
    }
    const o = H(n(t.vertices, t.faces));
    o.name = t.name, e.geometry = o;
    const s = _("addGeometry");
    s(o);
    function l(c) {
      const f = n(c);
      Q(o, f);
    }
    return g(
      () => t.vertices,
      (c) => {
        l(c);
      },
      { deep: !0, immediate: !0 }
    ), a({ three: o }), { props: t, mesh: e, makeGeometry: n, three: o, addGeometry: s, redoGeometry: l };
  }
}), sn = {
  name: "EdgesGeometry",
  render: () => null
}, rn = /* @__PURE__ */ L({
  ...sn,
  props: {
    geometry: null
  },
  setup(i, { expose: a }) {
    const t = i, e = _("mesh"), n = H(new j());
    e.geometry = n;
    const o = _("getGeometry"), s = _("addGeometry");
    s(n);
    function l() {
      const v = new xt(o(t.geometry));
      Q(n, v);
    }
    let c = g(
      o(t.geometry),
      () => {
        l();
      },
      { deep: !0, immediate: !0 }
    );
    M(t, "geometry", () => {
      c(), c = g(
        o(t.geometry),
        () => {
          l();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const f = () => {
      o(t.geometry) === void 0 ? ie(() => f) : l();
    };
    return ie(() => f), a({ three: n }), { props: t, mesh: e, three: n, getGeometry: o, addGeometry: s, redoGeometry: l, get unwatch() {
      return c;
    }, set unwatch(v) {
      c = v;
    }, waitUntilGeometryChanged: f };
  }
}), ln = {
  name: "PlaneGeometry",
  render: () => null
}, cn = /* @__PURE__ */ L({
  ...ln,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("mesh");
    function n(c, f, v, y) {
      return new Et(c, f, v, y);
    }
    const o = H(new j());
    o.name = t.name, e.geometry = o;
    const s = _("addGeometry");
    s(o);
    function l() {
      const c = n(t.width, t.height, t.widthSegments, t.heightSegments);
      Q(o, c);
    }
    return l(), M(t, "width", l), M(t, "height", l), M(t, "widthSegments", l), M(t, "heightSegments", l), a({ three: o }), { props: t, mesh: e, makePlane: n, three: o, addGeometry: s, redoGeometry: l };
  }
}), un = {
  name: "SphereGeometry",
  render: () => null
}, mn = /* @__PURE__ */ L({
  ...un,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    widthSegments: { default: 8 },
    heightSegments: { default: 6 },
    phiStart: { default: 0 },
    phiLength: { default: 2 * Math.PI },
    thetaStart: { default: 0 },
    thetaLength: { default: Math.PI }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("mesh");
    function n(c, f, v, y, b, u, h) {
      return new Lt(c, f, v, y, b, u, h);
    }
    const o = H(new j());
    o.name = t.name, e.geometry = o;
    const s = _("addGeometry");
    s(o);
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
      Q(o, c);
    }
    return l(), M(t, "radius", l), M(t, "widthSegments", l), M(t, "heightSegments", l), M(t, "phiStart", l), M(t, "phiLength", l), M(t, "thetaStart", l), M(t, "thetaLength", l), a({ three: o }), { props: t, mesh: e, makeSphere: n, three: o, addGeometry: s, redoGeometry: l };
  }
}), dn = {
  name: "WireframeGeometry",
  render: () => null
}, fn = /* @__PURE__ */ L({
  ...dn,
  props: {
    geometry: null
  },
  setup(i, { expose: a }) {
    const t = i, e = _("mesh"), n = H(new j());
    e.geometry = n;
    const o = _("getGeometry"), s = _("addGeometry");
    s(n);
    function l() {
      const v = new St(o(t.geometry));
      Q(n, v);
    }
    let c = g(
      o(t.geometry),
      () => {
        l();
      },
      { deep: !0, immediate: !0 }
    );
    M(t, "geometry", () => {
      c(), c = g(
        o(t.geometry),
        () => {
          l();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const f = () => {
      o(t.geometry) === void 0 ? ie(() => f) : l();
    };
    return ie(() => f), a({ three: n }), { props: t, mesh: e, three: n, getGeometry: o, addGeometry: s, redoGeometry: l, get unwatch() {
      return c;
    }, set unwatch(v) {
      c = v;
    }, waitUntilGeometryChanged: f };
  }
}), hn = {
  name: "LineBasicMaterial",
  render: () => null
}, pn = /* @__PURE__ */ L({
  ...hn,
  props: {
    color: { default: 16777215 }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("mesh"), n = new ne({ color: t.color });
    e.material = n;
    function o(s) {
      s.color && (n.color = new F(s.color));
    }
    return o(t), g(
      () => t.color,
      () => o(t)
    ), T("material", n), a({ three: n }), { props: t, mesh: e, three: n, applyProps: o };
  }
}), gn = {
  name: "MeshBasicMaterial"
}, yn = /* @__PURE__ */ L({
  ...gn,
  props: {
    color: null,
    side: { default: ge },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("mesh"), n = new He();
    return e.material = n, g(
      () => t.color,
      () => {
        t.color !== void 0 && (n.color = new F(t.color));
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
    ), T("material", n), a({ three: n }), (o, s) => k(o.$slots, "default");
  }
}), bn = {
  name: "MeshLambertMaterial"
}, wn = /* @__PURE__ */ L({
  ...bn,
  props: {
    color: { default: 16777215 },
    side: { default: ge },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("mesh"), n = new Ot();
    e.material = n;
    function o(s) {
      s.color && (n.color = new F(s.color)), s.side && (n.side = s.side);
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
    ), T("material", n), a({ three: n }), (s, l) => k(s.$slots, "default");
  }
}), _n = {
  name: "PointsMaterial",
  render: () => null
}, vn = /* @__PURE__ */ L({
  ..._n,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("mesh"), n = new J({ color: t.color, sizeAttenuation: t.sizeAttenuation, size: t.size });
    e.material = n;
    function o(s) {
      s.color && (n.color = new F(s.color)), s.size && (n.size = s.size), s.sizeAttenuation !== void 0 && (n.sizeAttenuation = s.sizeAttenuation);
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
    ), T("material", n), a({ three: n }), { props: t, mesh: e, three: n, applyProps: o };
  }
}), Pn = {
  name: "MeshNormalMaterial"
}, Mn = /* @__PURE__ */ L({
  ...Pn,
  props: {
    side: { default: ge },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("mesh"), n = new Tt();
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
    ), T("material", n), a({ three: n }), (o, s) => k(o.$slots, "default");
  }
}), An = {
  name: "AmbientLight",
  render: () => null
}, xn = /* @__PURE__ */ L({
  ...An,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("scene"), n = new Ct();
    e.add(n);
    function o(s) {
      n.color = new F(s.color), n.intensity = s.intensity;
    }
    return o(t), g(
      () => t.color,
      () => o(t)
    ), g(
      () => t.intensity,
      () => o(t)
    ), a({ three: n }), { props: t, scene: e, three: n, applyProps: o };
  }
}), En = {
  name: "PointLight",
  render: () => null
}, Ln = /* @__PURE__ */ L({
  ...En,
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    color: { default: 16777215 },
    intensity: { default: 1 },
    castShadow: { type: Boolean, default: !1 }
  },
  setup(i, { expose: a }) {
    const t = i, e = _("scene"), n = new zt();
    e.add(n), A(t, "position", n), A(t, "rotation", n), A(t, "scale", n);
    function o(s) {
      n.color = new F(s.color), n.intensity = s.intensity, n.castShadow = s.castShadow;
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
    ), a({ three: n }), { props: t, scene: e, three: n, applyProps: o };
  }
}), Sn = {
  name: "TextureLoader",
  render: () => null
}, On = /* @__PURE__ */ L({
  ...Sn,
  props: {
    url: null
  },
  setup(i, { expose: a }) {
    const t = i, e = _("material"), n = te(new Rt());
    function o(s) {
      "map" in e && (e.map = new Dt().load(s.url));
    }
    return o(t), g(
      () => t.url,
      () => o(t)
    ), a({ three: n }), { props: t, material: e, three: n, applyProps: o };
  }
});
function zn(i) {
  i.component("Renderer", Gt), i.component("Scene", It), i.component("PerspectiveCamera", Nt), i.component("OrthographicCamera", jt), i.component("OrbitControls", Ut), i.component("LineSegments", Ft), i.component("Mesh", Ht), i.component("Points", Yt), i.component("OBJLoader", Qt), i.component("AxesHelper", en), i.component("BoxGeometry", nn), i.component("BufferGeometry", an), i.component("EdgesGeometry", rn), i.component("PlaneGeometry", cn), i.component("SphereGeometry", mn), i.component("WireframeGeometry", fn), i.component("LineBasicMaterial", pn), i.component("MeshBasicMaterial", yn), i.component("MeshLambertMaterial", wn), i.component("PointsMaterial", vn), i.component("MeshNormalMaterial", Mn), i.component("AmbientLight", xn), i.component("PointLight", Ln), i.component("TextureLoader", On);
}
export {
  xn as AmbientLight,
  en as AxesHelper,
  nn as BoxGeometry,
  an as BufferGeometry,
  rn as EdgesGeometry,
  pn as LineBasicMaterial,
  Ft as LineSegments,
  Ht as Mesh,
  yn as MeshBasicMaterial,
  wn as MeshLambertMaterial,
  Mn as MeshNormalMaterial,
  Qt as OBJLoader,
  Ut as OrbitControls,
  jt as OrthographicCamera,
  Nt as PerspectiveCamera,
  cn as PlaneGeometry,
  Ln as PointLight,
  Yt as Points,
  vn as PointsMaterial,
  Gt as Renderer,
  It as Scene,
  mn as SphereGeometry,
  On as TextureLoader,
  fn as WireframeGeometry,
  zn as install
};

import { watch as v, inject as g, onMounted as ae, onUnmounted as te, defineComponent as S, reactive as V, ref as Q, provide as A, openBlock as pt, createElementBlock as gt, Fragment as yt, renderSlot as D, createElementVNode as bt, nextTick as ce } from "vue";
import { Vector3 as R, Raycaster as Be, Vector2 as $, WebGLRenderer as _t, Scene as wt, Color as Y, PerspectiveCamera as vt, OrthographicCamera as Pt, EventDispatcher as Mt, MOUSE as K, TOUCH as q, Quaternion as Ne, Spherical as $e, Group as _e, BufferGeometry as z, LineBasicMaterial as oe, LineSegments as ye, MeshBasicMaterial as Qe, Mesh as be, PointsMaterial as ee, Points as le, Loader as Lt, FileLoader as St, Float32BufferAttribute as J, Material as Ve, MeshPhongMaterial as Et, AxesHelper as xt, BoxGeometry as At, BufferAttribute as Fe, CircleGeometry as Ot, ConeGeometry as Tt, CylinderGeometry as Ct, EdgesGeometry as Gt, PlaneGeometry as Rt, RingGeometry as zt, SphereGeometry as kt, WireframeGeometry as It, FrontSide as we, MeshLambertMaterial as Dt, MeshNormalMaterial as jt, AmbientLight as Bt, PointLight as Nt, ClampToEdgeWrapping as Ue, Texture as $t, TextureLoader as Vt } from "three";
const He = (s) => s === void 0 ? new R(0, 0, 0) : "x" in s ? new R(s.x, s.y, s.z) : new R(s[0], s[1], s[2]), Ye = (s, a, e) => {
  e[s].isVector3 ? e[s].set(a.x, a.y, a.z) : "isEuler" in e[s] && e[s].setFromVector3(a);
}, L = (s, a, e, t = !0) => {
  if (e !== null) {
    if (s[a] !== void 0) {
      const n = He(s[a]);
      Ye(a, n, e);
    }
    t && v(
      () => s[a],
      () => {
        if (s[a] !== void 0) {
          const n = He(s[a]);
          Ye(a, n, e);
        }
      }
    );
  }
}, u = (s, a, e) => {
  v(
    () => s[a],
    () => {
      e();
    }
  );
};
function F(s, a) {
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
  const a = g("scene"), e = g("parent", void 0);
  ae(() => {
    e ? e.add(s) : a.add(s);
  }), te(() => {
    e ? e.remove(s) : a.remove(s);
  });
}
function Ft(s, a, e) {
  const t = g("camera"), n = g("canvas");
  g("scene");
  const o = (d) => {
    const y = new Be(), f = Ze(d);
    y.setFromCamera(f, t.value);
    const b = y.intersectObjects(s);
    b.length > 0 && e("click", b, f);
  };
  let r = !1, l = [];
  const c = (d) => {
    const y = new Be(), f = Ze(d);
    y.setFromCamera(f, t.value);
    const b = y.intersectObjects(s);
    b.length > 0 ? (l = b, r === !1 && e("mouseenter", b, f), r = !0, e("mousemove", b, f)) : (r && e("mouseleave", l, f), r = !1, l = []);
  };
  ae(() => {
    a.enableRaycasting && (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c));
  }), te(() => {
    a.enableRaycasting && (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
  }), v(
    () => a.enableRaycasting,
    (d) => {
      d ? (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c)) : (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
    }
  );
}
function Ze(s) {
  const a = new $();
  return a.x = (s.pageX - s.currentTarget.offsetLeft) / s.currentTarget.offsetWidth * 2 - 1, a.y = -((s.pageY - s.currentTarget.offsetTop) / s.currentTarget.offsetHeight) * 2 + 1, a;
}
const Ut = /* @__PURE__ */ S({
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
    const e = s;
    let t = null;
    const n = [], o = V([]);
    let r = Q(null);
    const l = Q([]), c = Q([]), d = Q();
    A("canvas", d);
    let y = Date.now(), f = 1e3 / e.frameLimit;
    v(
      () => e.camera,
      (h) => b(h)
    );
    const b = (h) => {
      if (h) {
        const M = l.value.find((P) => P.name === h);
        M === void 0 && (r.value = null), r.value = M;
      } else
        r.value = l.value[0];
    };
    function m(h) {
      t !== null && (t.shadowMap.enabled = h.shadowMapEnabled, f = 1e3 / h.frameLimit);
    }
    ae(() => {
      t = new _t({ canvas: d.value, antialias: e.antialias, alpha: !0 }), t.setSize(1, 1), m(e), b(e.camera), new ResizeObserver((M) => {
        M.forEach((P) => {
          t && e.autoResize && t.setSize(P.contentRect.width, P.contentRect.height);
        });
      }).observe(d.value.parentElement), _();
    }), te(() => {
      for (let h of n)
        se(h);
    });
    function _() {
      requestAnimationFrame(_);
      const h = Date.now(), M = h - y;
      if (!(f > -1 && M < f)) {
        if (y = h - M % f, e.onBeforeRender && e.onBeforeRender(), c.value.length > 0 && r)
          for (const P of c.value)
            P.value !== null && (P.value.object.uuid === r.value.uuid ? (P.value.enabled = !0, P.value.update()) : P.value.enabled = !1);
        if (r && t)
          for (const P of n)
            t.render(P, r.value);
      }
    }
    return m(e), v(
      () => e.shadowMapEnabled,
      () => m(e)
    ), v(
      () => e.frameLimit,
      () => m(e)
    ), A("addCamera", (h) => l.value.push(h)), A("addScene", (h) => n.push(h)), A("addGeometry", (h) => o.push(h)), A("getGeometry", (h) => o.find((M) => M.name === h)), A("addControls", (h) => c.value.push(h)), A("camera", r), a({ three: t }), (h, M) => (pt(), gt(yt, null, [
      D(h.$slots, "default"),
      bt("canvas", {
        ref_key: "canvas",
        ref: d
      }, null, 512)
    ], 64));
  }
}), Ht = /* @__PURE__ */ S({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(s, { expose: a }) {
    const e = s, t = new wt();
    A("scene", t), g("addScene")(t);
    function n(o) {
      o.background && (t.background = new Y(o.background));
    }
    return n(e), v(
      () => e.background,
      () => n(e)
    ), a({ three: t }), (o, r) => D(o.$slots, "default");
  }
}), Yt = {
  name: "PerspectiveCamera"
}, Zt = /* @__PURE__ */ S({
  ...Yt,
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
    const e = s, t = new vt(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    g("addCamera")(t);
    const n = g("canvas");
    ae(() => {
      e.name && (t.name = e.name), new ResizeObserver((l) => {
        l.forEach((c) => {
          e.autoResize && (t.aspect = c.contentRect.width / c.contentRect.height, t.updateProjectionMatrix());
        });
      }).observe(n.value);
    }), L(e, "position", t), L(e, "up", t), L(e, "lookAt", t);
    function o() {
      e.autoResize || (t.aspect = e.aspect), t.near = e.near, t.far = e.far, t.updateProjectionMatrix();
    }
    return o(), u(e, "aspect", o), u(e, "near", o), u(e, "far", o), A("parentCamera", t), a({ three: t }), (r, l) => D(r.$slots, "default");
  }
}), Xt = {
  name: "OrthographicCamera"
}, Wt = /* @__PURE__ */ S({
  ...Xt,
  props: {
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(s, { expose: a }) {
    const e = s, t = new Pt(-10, 10, 10, -10, 0.1, 1e3);
    t.lookAt(0, 0, 0), t.updateProjectionMatrix(), g("addCamera")(t);
    const n = g("canvas");
    ae(() => {
      e.name && (t.name = e.name), new ResizeObserver((l) => {
        l.forEach((c) => {
          const d = c.contentRect.width / c.contentRect.height;
          t.left = t.bottom * d, t.right = t.top * d, t.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), L(e, "position", t), L(e, "up", t), L(e, "lookAt", t);
    function o() {
      t.near = e.near, t.far = e.far, t.updateProjectionMatrix();
    }
    return o(), u(e, "near", o), u(e, "far", o), A("parentCamera", t), a({ three: t }), (r, l) => D(r.$slots, "default");
  }
}), Xe = { type: "change" }, pe = { type: "start" }, We = { type: "end" };
class Kt extends Mt {
  constructor(a, e) {
    super(), e === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), e === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = a, this.domElement = e, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: K.ROTATE, MIDDLE: K.DOLLY, RIGHT: K.PAN }, this.touches = { ONE: q.ROTATE, TWO: q.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return l.phi;
    }, this.getAzimuthalAngle = function() {
      return l.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(i) {
      i.addEventListener("keydown", ze), this._domElementKeyEvents = i;
    }, this.saveState = function() {
      t.target0.copy(t.target), t.position0.copy(t.object.position), t.zoom0 = t.object.zoom;
    }, this.reset = function() {
      t.target.copy(t.target0), t.object.position.copy(t.position0), t.object.zoom = t.zoom0, t.object.updateProjectionMatrix(), t.dispatchEvent(Xe), t.update(), o = n.NONE;
    }, this.update = function() {
      const i = new R(), p = new Ne().setFromUnitVectors(a.up, new R(0, 1, 0)), C = p.clone().invert(), G = new R(), N = new Ne(), W = 2 * Math.PI;
      return function() {
        const je = t.object.position;
        i.copy(je).sub(t.target), i.applyQuaternion(p), l.setFromVector3(i), t.autoRotate && o === n.NONE && Z(ne()), t.enableDamping ? (l.theta += c.theta * t.dampingFactor, l.phi += c.phi * t.dampingFactor) : (l.theta += c.theta, l.phi += c.phi);
        let U = t.minAzimuthAngle, H = t.maxAzimuthAngle;
        return isFinite(U) && isFinite(H) && (U < -Math.PI ? U += W : U > Math.PI && (U -= W), H < -Math.PI ? H += W : H > Math.PI && (H -= W), U <= H ? l.theta = Math.max(U, Math.min(H, l.theta)) : l.theta = l.theta > (U + H) / 2 ? Math.max(U, l.theta) : Math.min(H, l.theta)), l.phi = Math.max(t.minPolarAngle, Math.min(t.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= d, l.radius = Math.max(t.minDistance, Math.min(t.maxDistance, l.radius)), t.enableDamping === !0 ? t.target.addScaledVector(y, t.dampingFactor) : t.target.add(y), i.setFromSpherical(l), i.applyQuaternion(C), je.copy(t.target).add(i), t.object.lookAt(t.target), t.enableDamping === !0 ? (c.theta *= 1 - t.dampingFactor, c.phi *= 1 - t.dampingFactor, y.multiplyScalar(1 - t.dampingFactor)) : (c.set(0, 0, 0), y.set(0, 0, 0)), d = 1, f || G.distanceToSquared(t.object.position) > r || 8 * (1 - N.dot(t.object.quaternion)) > r ? (t.dispatchEvent(Xe), G.copy(t.object.position), N.copy(t.object.quaternion), f = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      t.domElement.removeEventListener("contextmenu", ke), t.domElement.removeEventListener("pointerdown", Ce), t.domElement.removeEventListener("pointercancel", Ge), t.domElement.removeEventListener("wheel", Re), t.domElement.removeEventListener("pointermove", de), t.domElement.removeEventListener("pointerup", fe), t._domElementKeyEvents !== null && t._domElementKeyEvents.removeEventListener("keydown", ze);
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
    const r = 1e-6, l = new $e(), c = new $e();
    let d = 1;
    const y = new R();
    let f = !1;
    const b = new $(), m = new $(), _ = new $(), h = new $(), M = new $(), P = new $(), T = new $(), E = new $(), O = new $(), w = [], k = {};
    function ne() {
      return 2 * Math.PI / 60 / 60 * t.autoRotateSpeed;
    }
    function I() {
      return Math.pow(0.95, t.zoomSpeed);
    }
    function Z(i) {
      c.theta -= i;
    }
    function x(i) {
      c.phi -= i;
    }
    const B = function() {
      const i = new R();
      return function(C, G) {
        i.setFromMatrixColumn(G, 0), i.multiplyScalar(-C), y.add(i);
      };
    }(), ve = function() {
      const i = new R();
      return function(C, G) {
        t.screenSpacePanning === !0 ? i.setFromMatrixColumn(G, 1) : (i.setFromMatrixColumn(G, 0), i.crossVectors(t.object.up, i)), i.multiplyScalar(C), y.add(i);
      };
    }(), X = function() {
      const i = new R();
      return function(C, G) {
        const N = t.domElement;
        if (t.object.isPerspectiveCamera) {
          const W = t.object.position;
          i.copy(W).sub(t.target);
          let re = i.length();
          re *= Math.tan(t.object.fov / 2 * Math.PI / 180), B(2 * C * re / N.clientHeight, t.object.matrix), ve(2 * G * re / N.clientHeight, t.object.matrix);
        } else
          t.object.isOrthographicCamera ? (B(C * (t.object.right - t.object.left) / t.object.zoom / N.clientWidth, t.object.matrix), ve(G * (t.object.top - t.object.bottom) / t.object.zoom / N.clientHeight, t.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), t.enablePan = !1);
      };
    }();
    function me(i) {
      t.object.isPerspectiveCamera ? d /= i : t.object.isOrthographicCamera ? (t.object.zoom = Math.max(t.minZoom, Math.min(t.maxZoom, t.object.zoom * i)), t.object.updateProjectionMatrix(), f = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), t.enableZoom = !1);
    }
    function Pe(i) {
      t.object.isPerspectiveCamera ? d *= i : t.object.isOrthographicCamera ? (t.object.zoom = Math.max(t.minZoom, Math.min(t.maxZoom, t.object.zoom / i)), t.object.updateProjectionMatrix(), f = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), t.enableZoom = !1);
    }
    function Me(i) {
      b.set(i.clientX, i.clientY);
    }
    function et(i) {
      T.set(i.clientX, i.clientY);
    }
    function Le(i) {
      h.set(i.clientX, i.clientY);
    }
    function tt(i) {
      m.set(i.clientX, i.clientY), _.subVectors(m, b).multiplyScalar(t.rotateSpeed);
      const p = t.domElement;
      Z(2 * Math.PI * _.x / p.clientHeight), x(2 * Math.PI * _.y / p.clientHeight), b.copy(m), t.update();
    }
    function nt(i) {
      E.set(i.clientX, i.clientY), O.subVectors(E, T), O.y > 0 ? me(I()) : O.y < 0 && Pe(I()), T.copy(E), t.update();
    }
    function ot(i) {
      M.set(i.clientX, i.clientY), P.subVectors(M, h).multiplyScalar(t.panSpeed), X(P.x, P.y), h.copy(M), t.update();
    }
    function at(i) {
      i.deltaY < 0 ? Pe(I()) : i.deltaY > 0 && me(I()), t.update();
    }
    function st(i) {
      let p = !1;
      switch (i.code) {
        case t.keys.UP:
          X(0, t.keyPanSpeed), p = !0;
          break;
        case t.keys.BOTTOM:
          X(0, -t.keyPanSpeed), p = !0;
          break;
        case t.keys.LEFT:
          X(t.keyPanSpeed, 0), p = !0;
          break;
        case t.keys.RIGHT:
          X(-t.keyPanSpeed, 0), p = !0;
          break;
      }
      p && (i.preventDefault(), t.update());
    }
    function Se() {
      if (w.length === 1)
        b.set(w[0].pageX, w[0].pageY);
      else {
        const i = 0.5 * (w[0].pageX + w[1].pageX), p = 0.5 * (w[0].pageY + w[1].pageY);
        b.set(i, p);
      }
    }
    function Ee() {
      if (w.length === 1)
        h.set(w[0].pageX, w[0].pageY);
      else {
        const i = 0.5 * (w[0].pageX + w[1].pageX), p = 0.5 * (w[0].pageY + w[1].pageY);
        h.set(i, p);
      }
    }
    function xe() {
      const i = w[0].pageX - w[1].pageX, p = w[0].pageY - w[1].pageY, C = Math.sqrt(i * i + p * p);
      T.set(0, C);
    }
    function rt() {
      t.enableZoom && xe(), t.enablePan && Ee();
    }
    function it() {
      t.enableZoom && xe(), t.enableRotate && Se();
    }
    function Ae(i) {
      if (w.length == 1)
        m.set(i.pageX, i.pageY);
      else {
        const C = he(i), G = 0.5 * (i.pageX + C.x), N = 0.5 * (i.pageY + C.y);
        m.set(G, N);
      }
      _.subVectors(m, b).multiplyScalar(t.rotateSpeed);
      const p = t.domElement;
      Z(2 * Math.PI * _.x / p.clientHeight), x(2 * Math.PI * _.y / p.clientHeight), b.copy(m);
    }
    function Oe(i) {
      if (w.length === 1)
        M.set(i.pageX, i.pageY);
      else {
        const p = he(i), C = 0.5 * (i.pageX + p.x), G = 0.5 * (i.pageY + p.y);
        M.set(C, G);
      }
      P.subVectors(M, h).multiplyScalar(t.panSpeed), X(P.x, P.y), h.copy(M);
    }
    function Te(i) {
      const p = he(i), C = i.pageX - p.x, G = i.pageY - p.y, N = Math.sqrt(C * C + G * G);
      E.set(0, N), O.set(0, Math.pow(E.y / T.y, t.zoomSpeed)), me(O.y), T.copy(E);
    }
    function lt(i) {
      t.enableZoom && Te(i), t.enablePan && Oe(i);
    }
    function ct(i) {
      t.enableZoom && Te(i), t.enableRotate && Ae(i);
    }
    function Ce(i) {
      t.enabled !== !1 && (w.length === 0 && (t.domElement.setPointerCapture(i.pointerId), t.domElement.addEventListener("pointermove", de), t.domElement.addEventListener("pointerup", fe)), ht(i), i.pointerType === "touch" ? dt(i) : ut(i));
    }
    function de(i) {
      t.enabled !== !1 && (i.pointerType === "touch" ? ft(i) : mt(i));
    }
    function fe(i) {
      Ie(i), w.length === 0 && (t.domElement.releasePointerCapture(i.pointerId), t.domElement.removeEventListener("pointermove", de), t.domElement.removeEventListener("pointerup", fe)), t.dispatchEvent(We), o = n.NONE;
    }
    function Ge(i) {
      Ie(i);
    }
    function ut(i) {
      let p;
      switch (i.button) {
        case 0:
          p = t.mouseButtons.LEFT;
          break;
        case 1:
          p = t.mouseButtons.MIDDLE;
          break;
        case 2:
          p = t.mouseButtons.RIGHT;
          break;
        default:
          p = -1;
      }
      switch (p) {
        case K.DOLLY:
          if (t.enableZoom === !1)
            return;
          et(i), o = n.DOLLY;
          break;
        case K.ROTATE:
          if (i.ctrlKey || i.metaKey || i.shiftKey) {
            if (t.enablePan === !1)
              return;
            Le(i), o = n.PAN;
          } else {
            if (t.enableRotate === !1)
              return;
            Me(i), o = n.ROTATE;
          }
          break;
        case K.PAN:
          if (i.ctrlKey || i.metaKey || i.shiftKey) {
            if (t.enableRotate === !1)
              return;
            Me(i), o = n.ROTATE;
          } else {
            if (t.enablePan === !1)
              return;
            Le(i), o = n.PAN;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && t.dispatchEvent(pe);
    }
    function mt(i) {
      if (t.enabled !== !1)
        switch (o) {
          case n.ROTATE:
            if (t.enableRotate === !1)
              return;
            tt(i);
            break;
          case n.DOLLY:
            if (t.enableZoom === !1)
              return;
            nt(i);
            break;
          case n.PAN:
            if (t.enablePan === !1)
              return;
            ot(i);
            break;
        }
    }
    function Re(i) {
      t.enabled === !1 || t.enableZoom === !1 || o !== n.NONE || (i.preventDefault(), t.dispatchEvent(pe), at(i), t.dispatchEvent(We));
    }
    function ze(i) {
      t.enabled === !1 || t.enablePan === !1 || st(i);
    }
    function dt(i) {
      switch (De(i), w.length) {
        case 1:
          switch (t.touches.ONE) {
            case q.ROTATE:
              if (t.enableRotate === !1)
                return;
              Se(), o = n.TOUCH_ROTATE;
              break;
            case q.PAN:
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
            case q.DOLLY_PAN:
              if (t.enableZoom === !1 && t.enablePan === !1)
                return;
              rt(), o = n.TOUCH_DOLLY_PAN;
              break;
            case q.DOLLY_ROTATE:
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
      o !== n.NONE && t.dispatchEvent(pe);
    }
    function ft(i) {
      switch (De(i), o) {
        case n.TOUCH_ROTATE:
          if (t.enableRotate === !1)
            return;
          Ae(i), t.update();
          break;
        case n.TOUCH_PAN:
          if (t.enablePan === !1)
            return;
          Oe(i), t.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (t.enableZoom === !1 && t.enablePan === !1)
            return;
          lt(i), t.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (t.enableZoom === !1 && t.enableRotate === !1)
            return;
          ct(i), t.update();
          break;
        default:
          o = n.NONE;
      }
    }
    function ke(i) {
      t.enabled !== !1 && i.preventDefault();
    }
    function ht(i) {
      w.push(i);
    }
    function Ie(i) {
      delete k[i.pointerId];
      for (let p = 0; p < w.length; p++)
        if (w[p].pointerId == i.pointerId) {
          w.splice(p, 1);
          return;
        }
    }
    function De(i) {
      let p = k[i.pointerId];
      p === void 0 && (p = new $(), k[i.pointerId] = p), p.set(i.pageX, i.pageY);
    }
    function he(i) {
      const p = i.pointerId === w[0].pointerId ? w[1] : w[0];
      return k[p.pointerId];
    }
    t.domElement.addEventListener("contextmenu", ke), t.domElement.addEventListener("pointerdown", Ce), t.domElement.addEventListener("pointercancel", Ge), t.domElement.addEventListener("wheel", Re, { passive: !1 }), this.update();
  }
}
const qt = {
  name: "OrbitControls",
  render: () => null
}, Jt = /* @__PURE__ */ S({
  ...qt,
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
    const e = s, t = Q(null);
    g("addControls")(t);
    const n = g("parentCamera"), o = g("canvas");
    function r() {
      t.value != null && (t.value.enablePan = e.enablePan, t.value.enableRotate = e.enableRotate, t.value.enableZoom = e.enableZoom, t.value.minZoom = e.minZoom, t.value.maxZoom = e.maxZoom, t.value.minDistance = e.minDistance, t.value.maxDistance = e.maxDistance, t.value.minPolarAngle = e.minPolarAngle, t.value.maxPolarAngle = e.maxPolarAngle, t.value.minAzimuthAngle = e.minAzimuthAngle, t.value.maxAzimuthAngle = e.maxAzimuthAngle);
    }
    return v(o, () => {
      t.value = new Kt(n, o.value), r(), L(e, "target", t.value);
    }), r(), u(e, "enablePan", r), u(e, "enableRotate", r), u(e, "enableZoom", r), u(e, "minZoom", r), u(e, "maxZoom", r), u(e, "minDistance", r), u(e, "maxDistance", r), u(e, "minPolarAngle", r), u(e, "maxPolarAngle", r), u(e, "minAzimuthAngle", r), u(e, "maxAzimuthAngle", r), a({ three: t }), { props: e, three: t, camera: n, canvas: o, applyProps: r };
  }
}), Qt = /* @__PURE__ */ S({
  __name: "Group",
  props: {
    enableRaycasting: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  emits: ["click", "mousemove", "mouseenter", "mouseleave"],
  setup(s, { expose: a, emit: e }) {
    const t = s, n = new _e();
    return ue(n), L(t, "position", n), L(t, "rotation", n), L(t, "scale", n), Ft(n.children, t, e), A("parent", n), a({ three: n }), (o, r) => D(o.$slots, "default");
  }
}), en = /* @__PURE__ */ S({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("scene"), n = new z(), o = new oe({ color: "black" }), r = new ye(n, o);
    return ue(r), L(e, "position", r), L(e, "rotation", r), L(e, "scale", r), te(() => {
      t.remove(r), se(r);
    }), A("mesh", r), a({ three: r }), (l, c) => D(l.$slots, "default");
  }
}), tn = /* @__PURE__ */ S({
  __name: "Mesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("scene"), n = new z(), o = new Qe(), r = new be(n, o);
    r.castShadow = !0, r.receiveShadow = !0, ue(r), L(e, "position", r), L(e, "rotation", r), L(e, "scale", r);
    function l() {
      r.castShadow = e.castShadow, r.receiveShadow = e.receiveShadow;
    }
    return l(), u(e, "castShadow", l), u(e, "receiveShadow", l), te(() => {
      t.remove(r), se(r);
    }), A("mesh", r), a({ three: r }), (c, d) => D(c.$slots, "default");
  }
}), nn = /* @__PURE__ */ S({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("scene"), n = new z(), o = new ee({ color: "red", sizeAttenuation: !1, size: 2 }), r = new le(n, o);
    return ue(r), L(e, "position", r), L(e, "rotation", r), L(e, "scale", r), te(() => {
      t.remove(r), se(r);
    }), A("mesh", r), a({ three: r }), (l, c) => D(l.$slots, "default");
  }
}), on = /^[og]\s*(.+)?/, an = /^mtllib /, sn = /^usemtl /, rn = /^usemap /, Ke = new R(), ge = new R(), qe = new R(), Je = new R(), j = new R(), ie = new Y();
function ln() {
  const s = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(a, e) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = a, this.object.fromDeclaration = e !== !1;
        return;
      }
      const t = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: a || "",
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
          const r = this._finalize(!1);
          r && (r.inherited || r.groupCount <= 0) && this.materials.splice(r.index, 1);
          const l = {
            index: this.materials.length,
            name: n || "",
            mtllib: Array.isArray(o) && o.length > 0 ? o[o.length - 1] : "",
            smooth: r !== void 0 ? r.smooth : this.smooth,
            groupStart: r !== void 0 ? r.groupEnd : 0,
            groupEnd: -1,
            groupCount: -1,
            inherited: !1,
            clone: function(c) {
              const d = {
                index: typeof c == "number" ? c : this.index,
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
          return this.materials.push(l), l;
        },
        currentMaterial: function() {
          if (this.materials.length > 0)
            return this.materials[this.materials.length - 1];
        },
        _finalize: function(n) {
          const o = this.currentMaterial();
          if (o && o.groupEnd === -1 && (o.groupEnd = this.geometry.vertices.length / 3, o.groupCount = o.groupEnd - o.groupStart, o.inherited = !1), n && this.materials.length > 1)
            for (let r = this.materials.length - 1; r >= 0; r--)
              this.materials[r].groupCount <= 0 && this.materials.splice(r, 1);
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
    parseVertexIndex: function(a, e) {
      const t = parseInt(a, 10);
      return (t >= 0 ? t - 1 : t + e / 3) * 3;
    },
    parseNormalIndex: function(a, e) {
      const t = parseInt(a, 10);
      return (t >= 0 ? t - 1 : t + e / 3) * 3;
    },
    parseUVIndex: function(a, e) {
      const t = parseInt(a, 10);
      return (t >= 0 ? t - 1 : t + e / 2) * 2;
    },
    addVertex: function(a, e, t) {
      const n = this.vertices, o = this.object.geometry.vertices;
      o.push(n[a + 0], n[a + 1], n[a + 2]), o.push(n[e + 0], n[e + 1], n[e + 2]), o.push(n[t + 0], n[t + 1], n[t + 2]);
    },
    addVertexPoint: function(a) {
      const e = this.vertices;
      this.object.geometry.vertices.push(e[a + 0], e[a + 1], e[a + 2]);
    },
    addVertexLine: function(a) {
      const e = this.vertices;
      this.object.geometry.vertices.push(e[a + 0], e[a + 1], e[a + 2]);
    },
    addNormal: function(a, e, t) {
      const n = this.normals, o = this.object.geometry.normals;
      o.push(n[a + 0], n[a + 1], n[a + 2]), o.push(n[e + 0], n[e + 1], n[e + 2]), o.push(n[t + 0], n[t + 1], n[t + 2]);
    },
    addFaceNormal: function(a, e, t) {
      const n = this.vertices, o = this.object.geometry.normals;
      Ke.fromArray(n, a), ge.fromArray(n, e), qe.fromArray(n, t), j.subVectors(qe, ge), Je.subVectors(Ke, ge), j.cross(Je), j.normalize(), o.push(j.x, j.y, j.z), o.push(j.x, j.y, j.z), o.push(j.x, j.y, j.z);
    },
    addColor: function(a, e, t) {
      const n = this.colors, o = this.object.geometry.colors;
      n[a] !== void 0 && o.push(n[a + 0], n[a + 1], n[a + 2]), n[e] !== void 0 && o.push(n[e + 0], n[e + 1], n[e + 2]), n[t] !== void 0 && o.push(n[t + 0], n[t + 1], n[t + 2]);
    },
    addUV: function(a, e, t) {
      const n = this.uvs, o = this.object.geometry.uvs;
      o.push(n[a + 0], n[a + 1]), o.push(n[e + 0], n[e + 1]), o.push(n[t + 0], n[t + 1]);
    },
    addDefaultUV: function() {
      const a = this.object.geometry.uvs;
      a.push(0, 0), a.push(0, 0), a.push(0, 0);
    },
    addUVLine: function(a) {
      const e = this.uvs;
      this.object.geometry.uvs.push(e[a + 0], e[a + 1]);
    },
    addFace: function(a, e, t, n, o, r, l, c, d) {
      const y = this.vertices.length;
      let f = this.parseVertexIndex(a, y), b = this.parseVertexIndex(e, y), m = this.parseVertexIndex(t, y);
      if (this.addVertex(f, b, m), this.addColor(f, b, m), l !== void 0 && l !== "") {
        const _ = this.normals.length;
        f = this.parseNormalIndex(l, _), b = this.parseNormalIndex(c, _), m = this.parseNormalIndex(d, _), this.addNormal(f, b, m);
      } else
        this.addFaceNormal(f, b, m);
      if (n !== void 0 && n !== "") {
        const _ = this.uvs.length;
        f = this.parseUVIndex(n, _), b = this.parseUVIndex(o, _), m = this.parseUVIndex(r, _), this.addUV(f, b, m), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(a) {
      this.object.geometry.type = "Points";
      const e = this.vertices.length;
      for (let t = 0, n = a.length; t < n; t++) {
        const o = this.parseVertexIndex(a[t], e);
        this.addVertexPoint(o), this.addColor(o);
      }
    },
    addLineGeometry: function(a, e) {
      this.object.geometry.type = "Line";
      const t = this.vertices.length, n = this.uvs.length;
      for (let o = 0, r = a.length; o < r; o++)
        this.addVertexLine(this.parseVertexIndex(a[o], t));
      for (let o = 0, r = e.length; o < r; o++)
        this.addUVLine(this.parseUVIndex(e[o], n));
    }
  };
  return s.startObject("", !1), s;
}
class cn extends Lt {
  constructor(a) {
    super(a), this.materials = null;
  }
  load(a, e, t, n) {
    const o = this, r = new St(this.manager);
    r.setPath(this.path), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(a, function(l) {
      try {
        e(o.parse(l));
      } catch (c) {
        n ? n(c) : console.error(c), o.manager.itemError(a);
      }
    }, t, n);
  }
  setMaterials(a) {
    return this.materials = a, this;
  }
  parse(a) {
    const e = new ln();
    a.indexOf(`\r
`) !== -1 && (a = a.replace(/\r\n/g, `
`)), a.indexOf(`\\
`) !== -1 && (a = a.replace(/\\\n/g, ""));
    const t = a.split(`
`);
    let n = "", o = "", r = 0, l = [];
    const c = typeof "".trimLeft == "function";
    for (let f = 0, b = t.length; f < b; f++)
      if (n = t[f], n = c ? n.trimLeft() : n.trim(), r = n.length, r !== 0 && (o = n.charAt(0), o !== "#"))
        if (o === "v") {
          const m = n.split(/\s+/);
          switch (m[0]) {
            case "v":
              e.vertices.push(
                parseFloat(m[1]),
                parseFloat(m[2]),
                parseFloat(m[3])
              ), m.length >= 7 ? (ie.setRGB(
                parseFloat(m[4]),
                parseFloat(m[5]),
                parseFloat(m[6])
              ).convertSRGBToLinear(), e.colors.push(ie.r, ie.g, ie.b)) : e.colors.push(void 0, void 0, void 0);
              break;
            case "vn":
              e.normals.push(
                parseFloat(m[1]),
                parseFloat(m[2]),
                parseFloat(m[3])
              );
              break;
            case "vt":
              e.uvs.push(
                parseFloat(m[1]),
                parseFloat(m[2])
              );
              break;
          }
        } else if (o === "f") {
          const _ = n.slice(1).trim().split(/\s+/), h = [];
          for (let P = 0, T = _.length; P < T; P++) {
            const E = _[P];
            if (E.length > 0) {
              const O = E.split("/");
              h.push(O);
            }
          }
          const M = h[0];
          for (let P = 1, T = h.length - 1; P < T; P++) {
            const E = h[P], O = h[P + 1];
            e.addFace(
              M[0],
              E[0],
              O[0],
              M[1],
              E[1],
              O[1],
              M[2],
              E[2],
              O[2]
            );
          }
        } else if (o === "l") {
          const m = n.substring(1).trim().split(" ");
          let _ = [];
          const h = [];
          if (n.indexOf("/") === -1)
            _ = m;
          else
            for (let M = 0, P = m.length; M < P; M++) {
              const T = m[M].split("/");
              T[0] !== "" && _.push(T[0]), T[1] !== "" && h.push(T[1]);
            }
          e.addLineGeometry(_, h);
        } else if (o === "p") {
          const _ = n.slice(1).trim().split(" ");
          e.addPointGeometry(_);
        } else if ((l = on.exec(n)) !== null) {
          const m = (" " + l[0].slice(1).trim()).slice(1);
          e.startObject(m);
        } else if (sn.test(n))
          e.object.startMaterial(n.substring(7).trim(), e.materialLibraries);
        else if (an.test(n))
          e.materialLibraries.push(n.substring(7).trim());
        else if (rn.test(n))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (o === "s") {
          if (l = n.split(" "), l.length > 1) {
            const _ = l[1].trim().toLowerCase();
            e.object.smooth = _ !== "0" && _ !== "off";
          } else
            e.object.smooth = !0;
          const m = e.object.currentMaterial();
          m && (m.smooth = e.object.smooth);
        } else {
          if (n === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + n + '"');
        }
    e.finalize();
    const d = new _e();
    if (d.materialLibraries = [].concat(e.materialLibraries), !(e.objects.length === 1 && e.objects[0].geometry.vertices.length === 0) === !0)
      for (let f = 0, b = e.objects.length; f < b; f++) {
        const m = e.objects[f], _ = m.geometry, h = m.materials, M = _.type === "Line", P = _.type === "Points";
        let T = !1;
        if (_.vertices.length === 0)
          continue;
        const E = new z();
        E.setAttribute("position", new J(_.vertices, 3)), _.normals.length > 0 && E.setAttribute("normal", new J(_.normals, 3)), _.colors.length > 0 && (T = !0, E.setAttribute("color", new J(_.colors, 3))), _.hasUVIndices === !0 && E.setAttribute("uv", new J(_.uvs, 2));
        const O = [];
        for (let k = 0, ne = h.length; k < ne; k++) {
          const I = h[k], Z = I.name + "_" + I.smooth + "_" + T;
          let x = e.materials[Z];
          if (this.materials !== null) {
            if (x = this.materials.create(I.name), M && x && !(x instanceof oe)) {
              const B = new oe();
              Ve.prototype.copy.call(B, x), B.color.copy(x.color), x = B;
            } else if (P && x && !(x instanceof ee)) {
              const B = new ee({ size: 10, sizeAttenuation: !1 });
              Ve.prototype.copy.call(B, x), B.color.copy(x.color), B.map = x.map, x = B;
            }
          }
          x === void 0 && (M ? x = new oe() : P ? x = new ee({ size: 1, sizeAttenuation: !1 }) : x = new Et(), x.name = I.name, x.flatShading = !I.smooth, x.vertexColors = T, e.materials[Z] = x), O.push(x);
        }
        let w;
        if (O.length > 1) {
          for (let k = 0, ne = h.length; k < ne; k++) {
            const I = h[k];
            E.addGroup(I.groupStart, I.groupCount, k);
          }
          M ? w = new ye(E, O) : P ? w = new le(E, O) : w = new be(E, O);
        } else
          M ? w = new ye(E, O[0]) : P ? w = new le(E, O[0]) : w = new be(E, O[0]);
        w.name = m.name, d.add(w);
      }
    else if (e.vertices.length > 0) {
      const f = new ee({ size: 1, sizeAttenuation: !1 }), b = new z();
      b.setAttribute("position", new J(e.vertices, 3)), e.colors.length > 0 && e.colors[0] !== void 0 && (b.setAttribute("color", new J(e.colors, 3)), f.vertexColors = !0);
      const m = new le(b, f);
      d.add(m);
    }
    return d;
  }
}
const un = /* @__PURE__ */ S({
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
  setup(s, { expose: a, emit: e }) {
    const t = s, n = new cn(), o = g("scene"), r = new _e();
    r.castShadow = !0, r.receiveShadow = !0, o.add(r), L(t, "position", r), L(t, "rotation", r), L(t, "scale", r);
    function l() {
      n.load(
        t.url,
        function(c) {
          for (const d of c.children)
            r.add(d), d.material = r.material, L(t, "position", r, !1), L(t, "rotation", r, !1), L(t, "scale", r, !1);
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
    return l(), v(
      () => t.url,
      () => l()
    ), A("mesh", r), a({
      three: r
    }), (c, d) => D(c.$slots, "default");
  }
}), mn = /* @__PURE__ */ S({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("scene"), n = new xt(e.size);
    return t.add(n), L(e, "position", n), L(e, "rotation", n), L(e, "scale", n), A("mesh", n), a({ three: n }), (o, r) => D(o.$slots, "default");
  }
}), dn = {
  name: "BoxGeometry",
  render: () => null
}, fn = /* @__PURE__ */ S({
  ...dn,
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
    const e = s, t = g("mesh");
    function n(c, d, y, f, b, m) {
      return new At(c, d, y, f, b, m);
    }
    const o = V(new z());
    o.name = e.name, t.geometry = o;
    const r = g("addGeometry");
    r(o);
    function l() {
      const c = n(
        e.width,
        e.height,
        e.depth,
        e.widthSegments,
        e.heightSegments,
        e.depthSegments
      );
      F(o, c);
    }
    return l(), u(e, "name", () => {
      o.name = e.name;
    }), u(e, "width", l), u(e, "height", l), u(e, "depth", l), u(e, "widthSegments", l), u(e, "heightSegments", l), u(e, "depthSegments", l), a({ three: o }), { props: e, mesh: t, makeBox: n, three: o, addGeometry: r, redoGeometry: l };
  }
}), hn = {
  name: "BufferGeometry",
  render: () => null
}, pn = /* @__PURE__ */ S({
  ...hn,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] },
    uvs: { default: () => [] }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("mesh");
    function n(c, d, y) {
      const f = new z(), b = new Float32Array(c), m = new Float32Array(y);
      return f.setAttribute("position", new Fe(b, 3)), f.setAttribute("uv", new Fe(m, 2)), e.faces.length > 0 && f.setIndex(d), f;
    }
    const o = V(n(e.vertices, e.faces, e.uvs));
    o.name = e.name, t.geometry = o;
    const r = g("addGeometry");
    r(o);
    function l(c, d, y) {
      const f = n(c, d, y);
      F(o, f);
    }
    return v(
      () => e.vertices,
      (c) => {
        l(c, e.faces, e.uvs);
      },
      { deep: !0, immediate: !0 }
    ), v(
      () => e.faces,
      (c) => {
        l(e.vertices, c, e.uvs);
      },
      { deep: !0, immediate: !0 }
    ), a({ three: o }), { props: e, mesh: t, makeGeometry: n, three: o, addGeometry: r, redoGeometry: l };
  }
}), gn = {
  name: "CircleGeometry",
  render: () => null
}, yn = /* @__PURE__ */ S({
  ...gn,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    segments: { default: 32 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("mesh");
    function n(c, d, y, f) {
      return new Ot(c, d, y, f);
    }
    const o = V(new z());
    o.name = e.name, t.geometry = o;
    const r = g("addGeometry");
    r(o);
    function l() {
      const c = n(e.radius, e.segments, e.thetaStart, e.thetaLength);
      F(o, c);
    }
    return l(), u(e, "radius", l), u(e, "segments", l), u(e, "thetaStart", l), u(e, "thetaLength", l), a({ three: o }), { props: e, mesh: t, makeCircle: n, three: o, addGeometry: r, redoGeometry: l };
  }
}), bn = {
  name: "ConeGeometry",
  render: () => null
}, _n = /* @__PURE__ */ S({
  ...bn,
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
  setup(s, { expose: a }) {
    const e = s, t = g("mesh");
    function n(c, d, y, f, b, m, _) {
      return new Tt(c, d, y, f, b, m, _);
    }
    const o = V(new z());
    o.name = e.name, t.geometry = o;
    const r = g("addGeometry");
    r(o);
    function l() {
      const c = n(
        e.radius,
        e.height,
        e.radialSegments,
        e.heightSegments,
        e.openEnded,
        e.thetaStart,
        e.thetaLength
      );
      F(o, c);
    }
    return l(), u(e, "radius", l), u(e, "height", l), u(e, "radialSegments", l), u(e, "heightSegments", l), u(e, "openEnded", l), u(e, "thetaStart", l), u(e, "thetaLength", l), a({ three: o }), { props: e, mesh: t, makeCone: n, three: o, addGeometry: r, redoGeometry: l };
  }
}), wn = {
  name: "CylinderGeometry",
  render: () => null
}, vn = /* @__PURE__ */ S({
  ...wn,
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
  setup(s, { expose: a }) {
    const e = s, t = g("mesh");
    function n(c, d, y, f, b, m, _, h) {
      return new Ct(
        c,
        d,
        y,
        f,
        b,
        m,
        _,
        h
      );
    }
    const o = V(new z());
    o.name = e.name, t.geometry = o;
    const r = g("addGeometry");
    r(o);
    function l() {
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
      F(o, c);
    }
    return l(), u(e, "radiusTop", l), u(e, "radiusBottom", l), u(e, "height", l), u(e, "radialSegments", l), u(e, "heightSegments", l), u(e, "openEnded", l), u(e, "thetaStart", l), u(e, "thetaLength", l), a({ three: o }), { props: e, mesh: t, makeCylinder: n, three: o, addGeometry: r, redoGeometry: l };
  }
}), Pn = {
  name: "EdgesGeometry",
  render: () => null
}, Mn = /* @__PURE__ */ S({
  ...Pn,
  props: {
    geometry: null
  },
  setup(s, { expose: a }) {
    const e = s, t = g("mesh"), n = V(new z());
    t.geometry = n;
    const o = g("getGeometry"), r = g("addGeometry");
    r(n);
    function l() {
      const y = new Gt(o(e.geometry));
      F(n, y);
    }
    let c = v(
      o(e.geometry),
      () => {
        l();
      },
      { deep: !0, immediate: !0 }
    );
    u(e, "geometry", () => {
      c(), c = v(
        o(e.geometry),
        () => {
          l();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const d = () => {
      o(e.geometry) === void 0 ? ce(() => d) : l();
    };
    return ce(() => d), a({ three: n }), { props: e, mesh: t, three: n, getGeometry: o, addGeometry: r, redoGeometry: l, get unwatch() {
      return c;
    }, set unwatch(y) {
      c = y;
    }, waitUntilGeometryChanged: d };
  }
}), Ln = {
  name: "PlaneGeometry",
  render: () => null
}, Sn = /* @__PURE__ */ S({
  ...Ln,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("mesh");
    function n(c, d, y, f) {
      return new Rt(c, d, y, f);
    }
    const o = V(new z());
    o.name = e.name, t.geometry = o;
    const r = g("addGeometry");
    r(o);
    function l() {
      const c = n(e.width, e.height, e.widthSegments, e.heightSegments);
      F(o, c);
    }
    return l(), u(e, "width", l), u(e, "height", l), u(e, "widthSegments", l), u(e, "heightSegments", l), a({ three: o }), { props: e, mesh: t, makePlane: n, three: o, addGeometry: r, redoGeometry: l };
  }
}), En = {
  name: "RingGeometry",
  render: () => null
}, xn = /* @__PURE__ */ S({
  ...En,
  props: {
    name: { default: "" },
    innerRadius: { default: 0.5 },
    outerRadius: { default: 1 },
    thetaSegments: { default: 32 },
    phiSegments: { default: 1 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("mesh");
    function n(c, d, y, f, b, m) {
      return new zt(c, d, y, f, b, m);
    }
    const o = V(new z());
    o.name = e.name, t.geometry = o;
    const r = g("addGeometry");
    r(o);
    function l() {
      const c = n(
        e.innerRadius,
        e.outerRadius,
        e.thetaSegments,
        e.phiSegments,
        e.thetaStart,
        e.thetaLength
      );
      F(o, c);
    }
    return l(), u(e, "innerRadius", l), u(e, "outerRadius", l), u(e, "thetaSegments", l), u(e, "phiSegments", l), u(e, "thetaStart", l), u(e, "thetaLength", l), a({ three: o }), { props: e, mesh: t, makeRing: n, three: o, addGeometry: r, redoGeometry: l };
  }
}), An = {
  name: "SphereGeometry",
  render: () => null
}, On = /* @__PURE__ */ S({
  ...An,
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
    const e = s, t = g("mesh");
    function n(c, d, y, f, b, m, _) {
      return new kt(c, d, y, f, b, m, _);
    }
    const o = V(new z());
    o.name = e.name, t.geometry = o;
    const r = g("addGeometry");
    r(o);
    function l() {
      const c = n(
        e.radius,
        e.widthSegments,
        e.heightSegments,
        e.phiStart,
        e.phiLength,
        e.thetaStart,
        e.thetaLength
      );
      F(o, c);
    }
    return l(), u(e, "radius", l), u(e, "widthSegments", l), u(e, "heightSegments", l), u(e, "phiStart", l), u(e, "phiLength", l), u(e, "thetaStart", l), u(e, "thetaLength", l), a({ three: o }), { props: e, mesh: t, makeSphere: n, three: o, addGeometry: r, redoGeometry: l };
  }
}), Tn = {
  name: "WireframeGeometry",
  render: () => null
}, Cn = /* @__PURE__ */ S({
  ...Tn,
  props: {
    geometry: null
  },
  setup(s, { expose: a }) {
    const e = s, t = g("mesh"), n = V(new z());
    t.geometry = n;
    const o = g("getGeometry"), r = g("addGeometry");
    r(n);
    function l() {
      const y = new It(o(e.geometry));
      F(n, y);
    }
    let c = v(
      o(e.geometry),
      () => {
        l();
      },
      { deep: !0, immediate: !0 }
    );
    u(e, "geometry", () => {
      c(), c = v(
        o(e.geometry),
        () => {
          l();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const d = () => {
      o(e.geometry) === void 0 ? ce(() => d) : l();
    };
    return ce(() => d), a({ three: n }), { props: e, mesh: t, three: n, getGeometry: o, addGeometry: r, redoGeometry: l, get unwatch() {
      return c;
    }, set unwatch(y) {
      c = y;
    }, waitUntilGeometryChanged: d };
  }
}), Gn = {
  name: "LineBasicMaterial",
  render: () => null
}, Rn = /* @__PURE__ */ S({
  ...Gn,
  props: {
    color: { default: 16777215 }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("mesh"), n = new oe({ color: e.color });
    t.material = n;
    function o(r) {
      r.color && (n.color = new Y(r.color));
    }
    return o(e), v(
      () => e.color,
      () => o(e)
    ), A("material", n), a({ three: n }), { props: e, mesh: t, three: n, applyProps: o };
  }
}), zn = {
  name: "MeshBasicMaterial"
}, kn = /* @__PURE__ */ S({
  ...zn,
  props: {
    color: null,
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("mesh"), n = new Qe();
    return t.material = n, v(
      () => e.color,
      () => {
        e.color !== void 0 && (n.color = new Y(e.color));
      },
      { immediate: !0 }
    ), v(
      () => e.side,
      () => {
        n.side = e.side;
      },
      { immediate: !0 }
    ), v(
      () => e.opacity,
      () => {
        n.opacity = e.opacity;
      },
      { immediate: !0 }
    ), v(
      () => e.transparent,
      () => {
        n.transparent = e.transparent;
      },
      { immediate: !0 }
    ), v(
      () => e.vertexColors,
      () => {
        n.vertexColors = e.vertexColors;
      },
      { immediate: !0 }
    ), A("material", n), a({ three: n }), (o, r) => D(o.$slots, "default");
  }
}), In = {
  name: "MeshLambertMaterial"
}, Dn = /* @__PURE__ */ S({
  ...In,
  props: {
    color: { default: 16777215 },
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("mesh"), n = new Dt();
    t.material = n;
    function o(r) {
      r.color && (n.color = new Y(r.color)), r.side && (n.side = r.side);
    }
    return o(e), v(
      () => e.color,
      () => o(e)
    ), v(
      () => e.side,
      () => o(e)
    ), v(
      () => e.opacity,
      () => {
        n.opacity = e.opacity;
      },
      { immediate: !0 }
    ), v(
      () => e.transparent,
      () => {
        n.transparent = e.transparent;
      },
      { immediate: !0 }
    ), A("material", n), a({ three: n }), (r, l) => D(r.$slots, "default");
  }
}), jn = {
  name: "PointsMaterial",
  render: () => null
}, Bn = /* @__PURE__ */ S({
  ...jn,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("mesh"), n = new ee({ color: e.color, sizeAttenuation: e.sizeAttenuation, size: e.size });
    t.material = n;
    function o(r) {
      r.color && (n.color = new Y(r.color)), r.size && (n.size = r.size), r.sizeAttenuation !== void 0 && (n.sizeAttenuation = r.sizeAttenuation);
    }
    return o(e), v(
      () => e.color,
      () => o(e)
    ), v(
      () => e.size,
      () => o(e)
    ), v(
      () => e.sizeAttenuation,
      () => o(e)
    ), A("material", n), a({ three: n }), { props: e, mesh: t, three: n, applyProps: o };
  }
}), Nn = {
  name: "MeshNormalMaterial"
}, $n = /* @__PURE__ */ S({
  ...Nn,
  props: {
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("mesh"), n = new jt();
    return t.material = n, v(
      () => e.side,
      () => {
        n.side = e.side;
      },
      { immediate: !0 }
    ), v(
      () => e.opacity,
      () => {
        n.opacity = e.opacity;
      },
      { immediate: !0 }
    ), v(
      () => e.transparent,
      () => {
        n.transparent = e.transparent;
      },
      { immediate: !0 }
    ), A("material", n), a({ three: n }), (o, r) => D(o.$slots, "default");
  }
}), Vn = {
  name: "AmbientLight",
  render: () => null
}, Fn = /* @__PURE__ */ S({
  ...Vn,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("scene"), n = new Bt();
    t.add(n);
    function o(r) {
      n.color = new Y(r.color), n.intensity = r.intensity;
    }
    return o(e), v(
      () => e.color,
      () => o(e)
    ), v(
      () => e.intensity,
      () => o(e)
    ), a({ three: n }), { props: e, scene: t, three: n, applyProps: o };
  }
}), Un = {
  name: "PointLight",
  render: () => null
}, Hn = /* @__PURE__ */ S({
  ...Un,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("scene"), n = new Nt();
    t.add(n), L(e, "position", n), L(e, "rotation", n), L(e, "scale", n);
    function o(r) {
      n.color = new Y(r.color), n.intensity = r.intensity, n.castShadow = r.castShadow;
    }
    return o(e), v(
      () => e.color,
      () => o(e)
    ), v(
      () => e.intensity,
      () => o(e)
    ), v(
      () => e.castShadow,
      () => o(e)
    ), a({ three: n }), { props: e, scene: t, three: n, applyProps: o };
  }
}), Yn = {
  name: "TextureLoader",
  render: () => null
}, Zn = /* @__PURE__ */ S({
  ...Yn,
  props: {
    url: null,
    wrapS: { default: Ue },
    wrapT: { default: Ue }
  },
  setup(s, { expose: a }) {
    const e = s, t = g("material"), n = Q(new $t());
    function o() {
      n.value = new Vt().load(e.url), "map" in t && (t.map = n.value), r();
    }
    function r() {
      n.value.wrapS = e.wrapS, n.value.wrapT = e.wrapT, n.value.needsUpdate = !0;
    }
    return o(), u(e, "url", o), u(e, "wrapS", r), u(e, "wrapT", r), a({ three: n }), { props: e, material: t, three: n, load: o, applyProps: r };
  }
});
function Kn(s) {
  s.component("Renderer", Ut), s.component("Scene", Ht), s.component("PerspectiveCamera", Zt), s.component("OrthographicCamera", Wt), s.component("OrbitControls", Jt), s.component("Group", Qt), s.component("LineSegments", en), s.component("Mesh", tn), s.component("Points", nn), s.component("OBJLoader", un), s.component("AxesHelper", mn), s.component("BoxGeometry", fn), s.component("BufferGeometry", pn), s.component("CircleGeometry", yn), s.component("ConeGeometry", _n), s.component("CylinderGeometry", vn), s.component("EdgesGeometry", Mn), s.component("PlaneGeometry", Sn), s.component("RingGeometry", xn), s.component("SphereGeometry", On), s.component("WireframeGeometry", Cn), s.component("LineBasicMaterial", Rn), s.component("MeshBasicMaterial", kn), s.component("MeshLambertMaterial", Dn), s.component("PointsMaterial", Bn), s.component("MeshNormalMaterial", $n), s.component("AmbientLight", Fn), s.component("PointLight", Hn), s.component("TextureLoader", Zn);
}
export {
  Fn as AmbientLight,
  mn as AxesHelper,
  fn as BoxGeometry,
  pn as BufferGeometry,
  yn as CircleGeometry,
  _n as ConeGeometry,
  vn as CylinderGeometry,
  Mn as EdgesGeometry,
  Qt as Group,
  Rn as LineBasicMaterial,
  en as LineSegments,
  tn as Mesh,
  kn as MeshBasicMaterial,
  Dn as MeshLambertMaterial,
  $n as MeshNormalMaterial,
  un as OBJLoader,
  Jt as OrbitControls,
  Wt as OrthographicCamera,
  Zt as PerspectiveCamera,
  Sn as PlaneGeometry,
  Hn as PointLight,
  nn as Points,
  Bn as PointsMaterial,
  Ut as Renderer,
  xn as RingGeometry,
  Ht as Scene,
  On as SphereGeometry,
  Zn as TextureLoader,
  Cn as WireframeGeometry,
  Kn as install
};

import { watch as L, inject as h, onMounted as re, onUnmounted as Y, defineComponent as S, reactive as V, ref as ne, provide as A, openBlock as pt, createElementBlock as gt, Fragment as yt, renderSlot as z, createElementVNode as bt, nextTick as ue } from "vue";
import { Vector3 as k, Raycaster as Be, Vector2 as N, WebGLRenderer as _t, Scene as wt, Color as Z, PerspectiveCamera as vt, OrthographicCamera as Lt, EventDispatcher as Pt, MOUSE as Q, TOUCH as ee, Quaternion as $e, Spherical as Ne, Group as _e, BufferGeometry as R, LineBasicMaterial as X, Line as Mt, LineLoop as St, LineSegments as ye, MeshBasicMaterial as Qe, Mesh as be, PointsMaterial as oe, Points as ce, Loader as Et, FileLoader as xt, Float32BufferAttribute as te, Material as Ve, MeshPhongMaterial as At, AxesHelper as Ot, BoxGeometry as Tt, BufferAttribute as Fe, CircleGeometry as Ct, ConeGeometry as Gt, CylinderGeometry as Rt, EdgesGeometry as kt, PlaneGeometry as zt, RingGeometry as It, SphereGeometry as Dt, WireframeGeometry as jt, FrontSide as we, MeshLambertMaterial as Bt, MeshNormalMaterial as $t, AmbientLight as Nt, PointLight as Vt, ClampToEdgeWrapping as Ue, Texture as Ft, TextureLoader as Ut } from "three";
const He = (r) => r === void 0 ? new k(0, 0, 0) : "x" in r ? new k(r.x, r.y, r.z) : new k(r[0], r[1], r[2]), Ye = (r, s, e) => {
  e[r].isVector3 ? e[r].set(s.x, s.y, s.z) : "isEuler" in e[r] && e[r].setFromVector3(s);
}, v = (r, s, e, t = !0) => {
  if (e !== null) {
    if (r[s] !== void 0) {
      const n = He(r[s]);
      Ye(s, n, e);
    }
    t && L(
      () => r[s],
      () => {
        if (r[s] !== void 0) {
          const n = He(r[s]);
          Ye(s, n, e);
        }
      }
    );
  }
}, u = (r, s, e) => {
  L(
    () => r[s],
    () => {
      e();
    }
  );
};
function F(r, s) {
  s.hasAttribute("position") && (r.setAttribute("position", s.getAttribute("position")), r.attributes.position.needsUpdate = !0, r.computeVertexNormals(), r.computeBoundingBox(), r.computeBoundingSphere()), s.hasAttribute("normal") && (r.setAttribute("normal", s.getAttribute("normal")), r.attributes.normal.needsUpdate = !0), s.hasAttribute("uv") && (r.setAttribute("uv", s.getAttribute("uv")), r.attributes.uv.needsUpdate = !0), r.setIndex(s.getIndex());
}
function W(r) {
  if (r.children.length > 0)
    for (let s = r.children.length - 1; s >= 0; s--)
      W(r.children[s]);
  if (r.geometry && r.geometry.dispose(), r.material)
    if (r.material.length)
      for (let s = 0; s < r.material.length; ++s)
        r.material[s].map && r.material[s].map.dispose(), r.material[s].lightMap && r.material[s].lightMap.dispose(), r.material[s].bumpMap && r.material[s].bumpMap.dispose(), r.material[s].normalMap && r.material[s].normalMap.dispose(), r.material[s].specularMap && r.material[s].specularMap.dispose(), r.material[s].envMap && r.material[s].envMap.dispose(), r.material[s].dispose();
    else
      r.material.map && r.material.map.dispose(), r.material.lightMap && r.material.lightMap.dispose(), r.material.bumpMap && r.material.bumpMap.dispose(), r.material.normalMap && r.material.normalMap.dispose(), r.material.specularMap && r.material.specularMap.dispose(), r.material.envMap && r.material.envMap.dispose(), r.material.dispose();
  return r.removeFromParent(), !0;
}
function ae(r) {
  const s = h("scene"), e = h("parent", void 0);
  re(() => {
    e ? e.add(r) : s.add(r);
  }), Y(() => {
    e ? e.remove(r) : s.remove(r);
  });
}
function Ht(r, s, e) {
  const t = h("camera"), n = h("canvas");
  h("scene");
  const o = (d) => {
    const y = new Be(), f = Ze(d);
    y.setFromCamera(f, t.value);
    const b = y.intersectObjects(r);
    b.length > 0 && e("click", b, f);
  };
  let a = !1, l = [];
  const c = (d) => {
    const y = new Be(), f = Ze(d);
    y.setFromCamera(f, t.value);
    const b = y.intersectObjects(r);
    b.length > 0 ? (l = b, a === !1 && e("mouseenter", b, f), a = !0, e("mousemove", b, f)) : (a && e("mouseleave", l, f), a = !1, l = []);
  };
  re(() => {
    s.enableRaycasting && (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c));
  }), Y(() => {
    s.enableRaycasting && (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
  }), L(
    () => s.enableRaycasting,
    (d) => {
      d ? (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c)) : (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
    }
  );
}
function Ze(r) {
  const s = new N();
  return s.x = (r.pageX - r.currentTarget.offsetLeft) / r.currentTarget.offsetWidth * 2 - 1, s.y = -((r.pageY - r.currentTarget.offsetTop) / r.currentTarget.offsetHeight) * 2 + 1, s;
}
const Yt = /* @__PURE__ */ S({
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
  setup(r, { expose: s }) {
    const e = r;
    let t = null;
    const n = [], o = V([]);
    let a = ne(null);
    const l = ne([]), c = ne([]), d = ne();
    A("canvas", d);
    let y = Date.now(), f = 1e3 / e.frameLimit;
    L(
      () => e.camera,
      (p) => b(p)
    );
    const b = (p) => {
      if (p) {
        const M = l.value.find((P) => P.name === p);
        M === void 0 && (a.value = null), a.value = M;
      } else
        a.value = l.value[0];
    };
    function m(p) {
      t !== null && (t.shadowMap.enabled = p.shadowMapEnabled, f = 1e3 / p.frameLimit);
    }
    re(() => {
      t = new _t({ canvas: d.value, antialias: e.antialias, alpha: !0 }), t.setSize(1, 1), m(e), b(e.camera), new ResizeObserver((M) => {
        M.forEach((P) => {
          t && e.autoResize && t.setSize(P.contentRect.width, P.contentRect.height);
        });
      }).observe(d.value.parentElement), _();
    }), Y(() => {
      for (let p of n)
        W(p);
    });
    function _() {
      requestAnimationFrame(_);
      const p = Date.now(), M = p - y;
      if (!(f > -1 && M < f)) {
        if (y = p - M % f, e.onBeforeRender && e.onBeforeRender(), c.value.length > 0 && a)
          for (const P of c.value)
            P.value !== null && (P.value.object.uuid === a.value.uuid ? (P.value.enabled = !0, P.value.update()) : P.value.enabled = !1);
        if (a && t)
          for (const P of n)
            t.render(P, a.value);
      }
    }
    return m(e), L(
      () => e.shadowMapEnabled,
      () => m(e)
    ), L(
      () => e.frameLimit,
      () => m(e)
    ), A("addCamera", (p) => l.value.push(p)), A("addScene", (p) => n.push(p)), A("addGeometry", (p) => o.push(p)), A("getGeometry", (p) => o.find((M) => M.name === p)), A("addControls", (p) => c.value.push(p)), A("camera", a), s({ three: t }), (p, M) => (pt(), gt(yt, null, [
      z(p.$slots, "default"),
      bt("canvas", {
        ref_key: "canvas",
        ref: d
      }, null, 512)
    ], 64));
  }
}), Zt = /* @__PURE__ */ S({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(r, { expose: s }) {
    const e = r, t = new wt();
    A("scene", t), h("addScene")(t);
    function n(o) {
      o.background && (t.background = new Z(o.background));
    }
    return n(e), L(
      () => e.background,
      () => n(e)
    ), s({ three: t }), (o, a) => z(o.$slots, "default");
  }
}), Xt = {
  name: "PerspectiveCamera"
}, Wt = /* @__PURE__ */ S({
  ...Xt,
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
  setup(r, { expose: s }) {
    const e = r, t = new vt(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    h("addCamera")(t);
    const n = h("canvas");
    re(() => {
      e.name && (t.name = e.name), new ResizeObserver((l) => {
        l.forEach((c) => {
          e.autoResize && (t.aspect = c.contentRect.width / c.contentRect.height, t.updateProjectionMatrix());
        });
      }).observe(n.value);
    }), v(e, "position", t), v(e, "up", t), v(e, "lookAt", t);
    function o() {
      e.autoResize || (t.aspect = e.aspect), t.near = e.near, t.far = e.far, t.updateProjectionMatrix();
    }
    return o(), u(e, "aspect", o), u(e, "near", o), u(e, "far", o), A("parentCamera", t), s({ three: t }), (a, l) => z(a.$slots, "default");
  }
}), Kt = {
  name: "OrthographicCamera"
}, qt = /* @__PURE__ */ S({
  ...Kt,
  props: {
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(r, { expose: s }) {
    const e = r, t = new Lt(-10, 10, 10, -10, 0.1, 1e3);
    t.lookAt(0, 0, 0), t.updateProjectionMatrix(), h("addCamera")(t);
    const n = h("canvas");
    re(() => {
      e.name && (t.name = e.name), new ResizeObserver((l) => {
        l.forEach((c) => {
          const d = c.contentRect.width / c.contentRect.height;
          t.left = t.bottom * d, t.right = t.top * d, t.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), v(e, "position", t), v(e, "up", t), v(e, "lookAt", t);
    function o() {
      t.near = e.near, t.far = e.far, t.updateProjectionMatrix();
    }
    return o(), u(e, "near", o), u(e, "far", o), A("parentCamera", t), s({ three: t }), (a, l) => z(a.$slots, "default");
  }
}), Xe = { type: "change" }, pe = { type: "start" }, We = { type: "end" };
class Jt extends Pt {
  constructor(s, e) {
    super(), e === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), e === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = s, this.domElement = e, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new k(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Q.ROTATE, MIDDLE: Q.DOLLY, RIGHT: Q.PAN }, this.touches = { ONE: ee.ROTATE, TWO: ee.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return l.phi;
    }, this.getAzimuthalAngle = function() {
      return l.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(i) {
      i.addEventListener("keydown", ke), this._domElementKeyEvents = i;
    }, this.saveState = function() {
      t.target0.copy(t.target), t.position0.copy(t.object.position), t.zoom0 = t.object.zoom;
    }, this.reset = function() {
      t.target.copy(t.target0), t.object.position.copy(t.position0), t.object.zoom = t.zoom0, t.object.updateProjectionMatrix(), t.dispatchEvent(Xe), t.update(), o = n.NONE;
    }, this.update = function() {
      const i = new k(), g = new $e().setFromUnitVectors(s.up, new k(0, 1, 0)), C = g.clone().invert(), G = new k(), $ = new $e(), J = 2 * Math.PI;
      return function() {
        const je = t.object.position;
        i.copy(je).sub(t.target), i.applyQuaternion(g), l.setFromVector3(i), t.autoRotate && o === n.NONE && K(se()), t.enableDamping ? (l.theta += c.theta * t.dampingFactor, l.phi += c.phi * t.dampingFactor) : (l.theta += c.theta, l.phi += c.phi);
        let U = t.minAzimuthAngle, H = t.maxAzimuthAngle;
        return isFinite(U) && isFinite(H) && (U < -Math.PI ? U += J : U > Math.PI && (U -= J), H < -Math.PI ? H += J : H > Math.PI && (H -= J), U <= H ? l.theta = Math.max(U, Math.min(H, l.theta)) : l.theta = l.theta > (U + H) / 2 ? Math.max(U, l.theta) : Math.min(H, l.theta)), l.phi = Math.max(t.minPolarAngle, Math.min(t.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= d, l.radius = Math.max(t.minDistance, Math.min(t.maxDistance, l.radius)), t.enableDamping === !0 ? t.target.addScaledVector(y, t.dampingFactor) : t.target.add(y), i.setFromSpherical(l), i.applyQuaternion(C), je.copy(t.target).add(i), t.object.lookAt(t.target), t.enableDamping === !0 ? (c.theta *= 1 - t.dampingFactor, c.phi *= 1 - t.dampingFactor, y.multiplyScalar(1 - t.dampingFactor)) : (c.set(0, 0, 0), y.set(0, 0, 0)), d = 1, f || G.distanceToSquared(t.object.position) > a || 8 * (1 - $.dot(t.object.quaternion)) > a ? (t.dispatchEvent(Xe), G.copy(t.object.position), $.copy(t.object.quaternion), f = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      t.domElement.removeEventListener("contextmenu", ze), t.domElement.removeEventListener("pointerdown", Ce), t.domElement.removeEventListener("pointercancel", Ge), t.domElement.removeEventListener("wheel", Re), t.domElement.removeEventListener("pointermove", de), t.domElement.removeEventListener("pointerup", fe), t._domElementKeyEvents !== null && t._domElementKeyEvents.removeEventListener("keydown", ke);
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
    const a = 1e-6, l = new Ne(), c = new Ne();
    let d = 1;
    const y = new k();
    let f = !1;
    const b = new N(), m = new N(), _ = new N(), p = new N(), M = new N(), P = new N(), T = new N(), E = new N(), O = new N(), w = [], I = {};
    function se() {
      return 2 * Math.PI / 60 / 60 * t.autoRotateSpeed;
    }
    function D() {
      return Math.pow(0.95, t.zoomSpeed);
    }
    function K(i) {
      c.theta -= i;
    }
    function x(i) {
      c.phi -= i;
    }
    const B = function() {
      const i = new k();
      return function(C, G) {
        i.setFromMatrixColumn(G, 0), i.multiplyScalar(-C), y.add(i);
      };
    }(), ve = function() {
      const i = new k();
      return function(C, G) {
        t.screenSpacePanning === !0 ? i.setFromMatrixColumn(G, 1) : (i.setFromMatrixColumn(G, 0), i.crossVectors(t.object.up, i)), i.multiplyScalar(C), y.add(i);
      };
    }(), q = function() {
      const i = new k();
      return function(C, G) {
        const $ = t.domElement;
        if (t.object.isPerspectiveCamera) {
          const J = t.object.position;
          i.copy(J).sub(t.target);
          let ie = i.length();
          ie *= Math.tan(t.object.fov / 2 * Math.PI / 180), B(2 * C * ie / $.clientHeight, t.object.matrix), ve(2 * G * ie / $.clientHeight, t.object.matrix);
        } else
          t.object.isOrthographicCamera ? (B(C * (t.object.right - t.object.left) / t.object.zoom / $.clientWidth, t.object.matrix), ve(G * (t.object.top - t.object.bottom) / t.object.zoom / $.clientHeight, t.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), t.enablePan = !1);
      };
    }();
    function me(i) {
      t.object.isPerspectiveCamera ? d /= i : t.object.isOrthographicCamera ? (t.object.zoom = Math.max(t.minZoom, Math.min(t.maxZoom, t.object.zoom * i)), t.object.updateProjectionMatrix(), f = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), t.enableZoom = !1);
    }
    function Le(i) {
      t.object.isPerspectiveCamera ? d *= i : t.object.isOrthographicCamera ? (t.object.zoom = Math.max(t.minZoom, Math.min(t.maxZoom, t.object.zoom / i)), t.object.updateProjectionMatrix(), f = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), t.enableZoom = !1);
    }
    function Pe(i) {
      b.set(i.clientX, i.clientY);
    }
    function et(i) {
      T.set(i.clientX, i.clientY);
    }
    function Me(i) {
      p.set(i.clientX, i.clientY);
    }
    function tt(i) {
      m.set(i.clientX, i.clientY), _.subVectors(m, b).multiplyScalar(t.rotateSpeed);
      const g = t.domElement;
      K(2 * Math.PI * _.x / g.clientHeight), x(2 * Math.PI * _.y / g.clientHeight), b.copy(m), t.update();
    }
    function nt(i) {
      E.set(i.clientX, i.clientY), O.subVectors(E, T), O.y > 0 ? me(D()) : O.y < 0 && Le(D()), T.copy(E), t.update();
    }
    function ot(i) {
      M.set(i.clientX, i.clientY), P.subVectors(M, p).multiplyScalar(t.panSpeed), q(P.x, P.y), p.copy(M), t.update();
    }
    function at(i) {
      i.deltaY < 0 ? Le(D()) : i.deltaY > 0 && me(D()), t.update();
    }
    function st(i) {
      let g = !1;
      switch (i.code) {
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
      g && (i.preventDefault(), t.update());
    }
    function Se() {
      if (w.length === 1)
        b.set(w[0].pageX, w[0].pageY);
      else {
        const i = 0.5 * (w[0].pageX + w[1].pageX), g = 0.5 * (w[0].pageY + w[1].pageY);
        b.set(i, g);
      }
    }
    function Ee() {
      if (w.length === 1)
        p.set(w[0].pageX, w[0].pageY);
      else {
        const i = 0.5 * (w[0].pageX + w[1].pageX), g = 0.5 * (w[0].pageY + w[1].pageY);
        p.set(i, g);
      }
    }
    function xe() {
      const i = w[0].pageX - w[1].pageX, g = w[0].pageY - w[1].pageY, C = Math.sqrt(i * i + g * g);
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
        const C = he(i), G = 0.5 * (i.pageX + C.x), $ = 0.5 * (i.pageY + C.y);
        m.set(G, $);
      }
      _.subVectors(m, b).multiplyScalar(t.rotateSpeed);
      const g = t.domElement;
      K(2 * Math.PI * _.x / g.clientHeight), x(2 * Math.PI * _.y / g.clientHeight), b.copy(m);
    }
    function Oe(i) {
      if (w.length === 1)
        M.set(i.pageX, i.pageY);
      else {
        const g = he(i), C = 0.5 * (i.pageX + g.x), G = 0.5 * (i.pageY + g.y);
        M.set(C, G);
      }
      P.subVectors(M, p).multiplyScalar(t.panSpeed), q(P.x, P.y), p.copy(M);
    }
    function Te(i) {
      const g = he(i), C = i.pageX - g.x, G = i.pageY - g.y, $ = Math.sqrt(C * C + G * G);
      E.set(0, $), O.set(0, Math.pow(E.y / T.y, t.zoomSpeed)), me(O.y), T.copy(E);
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
      let g;
      switch (i.button) {
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
          et(i), o = n.DOLLY;
          break;
        case Q.ROTATE:
          if (i.ctrlKey || i.metaKey || i.shiftKey) {
            if (t.enablePan === !1)
              return;
            Me(i), o = n.PAN;
          } else {
            if (t.enableRotate === !1)
              return;
            Pe(i), o = n.ROTATE;
          }
          break;
        case Q.PAN:
          if (i.ctrlKey || i.metaKey || i.shiftKey) {
            if (t.enableRotate === !1)
              return;
            Pe(i), o = n.ROTATE;
          } else {
            if (t.enablePan === !1)
              return;
            Me(i), o = n.PAN;
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
    function ke(i) {
      t.enabled === !1 || t.enablePan === !1 || st(i);
    }
    function dt(i) {
      switch (De(i), w.length) {
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
    function ze(i) {
      t.enabled !== !1 && i.preventDefault();
    }
    function ht(i) {
      w.push(i);
    }
    function Ie(i) {
      delete I[i.pointerId];
      for (let g = 0; g < w.length; g++)
        if (w[g].pointerId == i.pointerId) {
          w.splice(g, 1);
          return;
        }
    }
    function De(i) {
      let g = I[i.pointerId];
      g === void 0 && (g = new N(), I[i.pointerId] = g), g.set(i.pageX, i.pageY);
    }
    function he(i) {
      const g = i.pointerId === w[0].pointerId ? w[1] : w[0];
      return I[g.pointerId];
    }
    t.domElement.addEventListener("contextmenu", ze), t.domElement.addEventListener("pointerdown", Ce), t.domElement.addEventListener("pointercancel", Ge), t.domElement.addEventListener("wheel", Re, { passive: !1 }), this.update();
  }
}
const Qt = {
  name: "OrbitControls",
  render: () => null
}, en = /* @__PURE__ */ S({
  ...Qt,
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
  setup(r, { expose: s }) {
    const e = r, t = ne(null);
    h("addControls")(t);
    const n = h("parentCamera"), o = h("canvas");
    function a() {
      t.value != null && (t.value.enablePan = e.enablePan, t.value.enableRotate = e.enableRotate, t.value.enableZoom = e.enableZoom, t.value.minZoom = e.minZoom, t.value.maxZoom = e.maxZoom, t.value.minDistance = e.minDistance, t.value.maxDistance = e.maxDistance, t.value.minPolarAngle = e.minPolarAngle, t.value.maxPolarAngle = e.maxPolarAngle, t.value.minAzimuthAngle = e.minAzimuthAngle, t.value.maxAzimuthAngle = e.maxAzimuthAngle);
    }
    return L(o, () => {
      t.value = new Jt(n, o.value), a(), v(e, "target", t.value);
    }), a(), u(e, "enablePan", a), u(e, "enableRotate", a), u(e, "enableZoom", a), u(e, "minZoom", a), u(e, "maxZoom", a), u(e, "minDistance", a), u(e, "maxDistance", a), u(e, "minPolarAngle", a), u(e, "maxPolarAngle", a), u(e, "minAzimuthAngle", a), u(e, "maxAzimuthAngle", a), s({ three: t }), { props: e, three: t, camera: n, canvas: o, applyProps: a };
  }
}), tn = /* @__PURE__ */ S({
  __name: "Group",
  props: {
    enableRaycasting: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  emits: ["click", "mousemove", "mouseenter", "mouseleave"],
  setup(r, { expose: s, emit: e }) {
    const t = r, n = new _e();
    return ae(n), v(t, "position", n), v(t, "rotation", n), v(t, "scale", n), Ht(n.children, t, e), A("parent", n), s({ three: n }), (o, a) => z(o.$slots, "default");
  }
}), nn = /* @__PURE__ */ S({
  __name: "Line",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("scene"), n = new R(), o = new X({ color: "black" }), a = new Mt(n, o);
    return ae(a), v(e, "position", a), v(e, "rotation", a), v(e, "scale", a), Y(() => {
      t.remove(a), W(a);
    }), A("mesh", a), s({ three: a }), (l, c) => z(l.$slots, "default");
  }
}), on = /* @__PURE__ */ S({
  __name: "LineLoop",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("scene"), n = new R(), o = new X({ color: "black" }), a = new St(n, o);
    return ae(a), v(e, "position", a), v(e, "rotation", a), v(e, "scale", a), Y(() => {
      t.remove(a), W(a);
    }), A("mesh", a), s({ three: a }), (l, c) => z(l.$slots, "default");
  }
}), an = /* @__PURE__ */ S({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("scene"), n = new R(), o = new X({ color: "black" }), a = new ye(n, o);
    return ae(a), v(e, "position", a), v(e, "rotation", a), v(e, "scale", a), Y(() => {
      t.remove(a), W(a);
    }), A("mesh", a), s({ three: a }), (l, c) => z(l.$slots, "default");
  }
}), sn = /* @__PURE__ */ S({
  __name: "Mesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("scene"), n = new R(), o = new Qe(), a = new be(n, o);
    a.castShadow = !0, a.receiveShadow = !0, ae(a), v(e, "position", a), v(e, "rotation", a), v(e, "scale", a);
    function l() {
      a.castShadow = e.castShadow, a.receiveShadow = e.receiveShadow;
    }
    return l(), u(e, "castShadow", l), u(e, "receiveShadow", l), Y(() => {
      t.remove(a), W(a);
    }), A("mesh", a), s({ three: a }), (c, d) => z(c.$slots, "default");
  }
}), rn = /* @__PURE__ */ S({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("scene"), n = new R(), o = new oe({ color: "red", sizeAttenuation: !1, size: 2 }), a = new ce(n, o);
    return ae(a), v(e, "position", a), v(e, "rotation", a), v(e, "scale", a), Y(() => {
      t.remove(a), W(a);
    }), A("mesh", a), s({ three: a }), (l, c) => z(l.$slots, "default");
  }
}), ln = /^[og]\s*(.+)?/, cn = /^mtllib /, un = /^usemtl /, mn = /^usemap /, Ke = new k(), ge = new k(), qe = new k(), Je = new k(), j = new k(), le = new Z();
function dn() {
  const r = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(s, e) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = s, this.object.fromDeclaration = e !== !1;
        return;
      }
      const t = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: s || "",
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
          const l = {
            index: this.materials.length,
            name: n || "",
            mtllib: Array.isArray(o) && o.length > 0 ? o[o.length - 1] : "",
            smooth: a !== void 0 ? a.smooth : this.smooth,
            groupStart: a !== void 0 ? a.groupEnd : 0,
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
    parseVertexIndex: function(s, e) {
      const t = parseInt(s, 10);
      return (t >= 0 ? t - 1 : t + e / 3) * 3;
    },
    parseNormalIndex: function(s, e) {
      const t = parseInt(s, 10);
      return (t >= 0 ? t - 1 : t + e / 3) * 3;
    },
    parseUVIndex: function(s, e) {
      const t = parseInt(s, 10);
      return (t >= 0 ? t - 1 : t + e / 2) * 2;
    },
    addVertex: function(s, e, t) {
      const n = this.vertices, o = this.object.geometry.vertices;
      o.push(n[s + 0], n[s + 1], n[s + 2]), o.push(n[e + 0], n[e + 1], n[e + 2]), o.push(n[t + 0], n[t + 1], n[t + 2]);
    },
    addVertexPoint: function(s) {
      const e = this.vertices;
      this.object.geometry.vertices.push(e[s + 0], e[s + 1], e[s + 2]);
    },
    addVertexLine: function(s) {
      const e = this.vertices;
      this.object.geometry.vertices.push(e[s + 0], e[s + 1], e[s + 2]);
    },
    addNormal: function(s, e, t) {
      const n = this.normals, o = this.object.geometry.normals;
      o.push(n[s + 0], n[s + 1], n[s + 2]), o.push(n[e + 0], n[e + 1], n[e + 2]), o.push(n[t + 0], n[t + 1], n[t + 2]);
    },
    addFaceNormal: function(s, e, t) {
      const n = this.vertices, o = this.object.geometry.normals;
      Ke.fromArray(n, s), ge.fromArray(n, e), qe.fromArray(n, t), j.subVectors(qe, ge), Je.subVectors(Ke, ge), j.cross(Je), j.normalize(), o.push(j.x, j.y, j.z), o.push(j.x, j.y, j.z), o.push(j.x, j.y, j.z);
    },
    addColor: function(s, e, t) {
      const n = this.colors, o = this.object.geometry.colors;
      n[s] !== void 0 && o.push(n[s + 0], n[s + 1], n[s + 2]), n[e] !== void 0 && o.push(n[e + 0], n[e + 1], n[e + 2]), n[t] !== void 0 && o.push(n[t + 0], n[t + 1], n[t + 2]);
    },
    addUV: function(s, e, t) {
      const n = this.uvs, o = this.object.geometry.uvs;
      o.push(n[s + 0], n[s + 1]), o.push(n[e + 0], n[e + 1]), o.push(n[t + 0], n[t + 1]);
    },
    addDefaultUV: function() {
      const s = this.object.geometry.uvs;
      s.push(0, 0), s.push(0, 0), s.push(0, 0);
    },
    addUVLine: function(s) {
      const e = this.uvs;
      this.object.geometry.uvs.push(e[s + 0], e[s + 1]);
    },
    addFace: function(s, e, t, n, o, a, l, c, d) {
      const y = this.vertices.length;
      let f = this.parseVertexIndex(s, y), b = this.parseVertexIndex(e, y), m = this.parseVertexIndex(t, y);
      if (this.addVertex(f, b, m), this.addColor(f, b, m), l !== void 0 && l !== "") {
        const _ = this.normals.length;
        f = this.parseNormalIndex(l, _), b = this.parseNormalIndex(c, _), m = this.parseNormalIndex(d, _), this.addNormal(f, b, m);
      } else
        this.addFaceNormal(f, b, m);
      if (n !== void 0 && n !== "") {
        const _ = this.uvs.length;
        f = this.parseUVIndex(n, _), b = this.parseUVIndex(o, _), m = this.parseUVIndex(a, _), this.addUV(f, b, m), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(s) {
      this.object.geometry.type = "Points";
      const e = this.vertices.length;
      for (let t = 0, n = s.length; t < n; t++) {
        const o = this.parseVertexIndex(s[t], e);
        this.addVertexPoint(o), this.addColor(o);
      }
    },
    addLineGeometry: function(s, e) {
      this.object.geometry.type = "Line";
      const t = this.vertices.length, n = this.uvs.length;
      for (let o = 0, a = s.length; o < a; o++)
        this.addVertexLine(this.parseVertexIndex(s[o], t));
      for (let o = 0, a = e.length; o < a; o++)
        this.addUVLine(this.parseUVIndex(e[o], n));
    }
  };
  return r.startObject("", !1), r;
}
class fn extends Et {
  constructor(s) {
    super(s), this.materials = null;
  }
  load(s, e, t, n) {
    const o = this, a = new xt(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(s, function(l) {
      try {
        e(o.parse(l));
      } catch (c) {
        n ? n(c) : console.error(c), o.manager.itemError(s);
      }
    }, t, n);
  }
  setMaterials(s) {
    return this.materials = s, this;
  }
  parse(s) {
    const e = new dn();
    s.indexOf(`\r
`) !== -1 && (s = s.replace(/\r\n/g, `
`)), s.indexOf(`\\
`) !== -1 && (s = s.replace(/\\\n/g, ""));
    const t = s.split(`
`);
    let n = "", o = "", a = 0, l = [];
    const c = typeof "".trimLeft == "function";
    for (let f = 0, b = t.length; f < b; f++)
      if (n = t[f], n = c ? n.trimLeft() : n.trim(), a = n.length, a !== 0 && (o = n.charAt(0), o !== "#"))
        if (o === "v") {
          const m = n.split(/\s+/);
          switch (m[0]) {
            case "v":
              e.vertices.push(
                parseFloat(m[1]),
                parseFloat(m[2]),
                parseFloat(m[3])
              ), m.length >= 7 ? (le.setRGB(
                parseFloat(m[4]),
                parseFloat(m[5]),
                parseFloat(m[6])
              ).convertSRGBToLinear(), e.colors.push(le.r, le.g, le.b)) : e.colors.push(void 0, void 0, void 0);
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
          const _ = n.slice(1).trim().split(/\s+/), p = [];
          for (let P = 0, T = _.length; P < T; P++) {
            const E = _[P];
            if (E.length > 0) {
              const O = E.split("/");
              p.push(O);
            }
          }
          const M = p[0];
          for (let P = 1, T = p.length - 1; P < T; P++) {
            const E = p[P], O = p[P + 1];
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
          const p = [];
          if (n.indexOf("/") === -1)
            _ = m;
          else
            for (let M = 0, P = m.length; M < P; M++) {
              const T = m[M].split("/");
              T[0] !== "" && _.push(T[0]), T[1] !== "" && p.push(T[1]);
            }
          e.addLineGeometry(_, p);
        } else if (o === "p") {
          const _ = n.slice(1).trim().split(" ");
          e.addPointGeometry(_);
        } else if ((l = ln.exec(n)) !== null) {
          const m = (" " + l[0].slice(1).trim()).slice(1);
          e.startObject(m);
        } else if (un.test(n))
          e.object.startMaterial(n.substring(7).trim(), e.materialLibraries);
        else if (cn.test(n))
          e.materialLibraries.push(n.substring(7).trim());
        else if (mn.test(n))
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
        const m = e.objects[f], _ = m.geometry, p = m.materials, M = _.type === "Line", P = _.type === "Points";
        let T = !1;
        if (_.vertices.length === 0)
          continue;
        const E = new R();
        E.setAttribute("position", new te(_.vertices, 3)), _.normals.length > 0 && E.setAttribute("normal", new te(_.normals, 3)), _.colors.length > 0 && (T = !0, E.setAttribute("color", new te(_.colors, 3))), _.hasUVIndices === !0 && E.setAttribute("uv", new te(_.uvs, 2));
        const O = [];
        for (let I = 0, se = p.length; I < se; I++) {
          const D = p[I], K = D.name + "_" + D.smooth + "_" + T;
          let x = e.materials[K];
          if (this.materials !== null) {
            if (x = this.materials.create(D.name), M && x && !(x instanceof X)) {
              const B = new X();
              Ve.prototype.copy.call(B, x), B.color.copy(x.color), x = B;
            } else if (P && x && !(x instanceof oe)) {
              const B = new oe({ size: 10, sizeAttenuation: !1 });
              Ve.prototype.copy.call(B, x), B.color.copy(x.color), B.map = x.map, x = B;
            }
          }
          x === void 0 && (M ? x = new X() : P ? x = new oe({ size: 1, sizeAttenuation: !1 }) : x = new At(), x.name = D.name, x.flatShading = !D.smooth, x.vertexColors = T, e.materials[K] = x), O.push(x);
        }
        let w;
        if (O.length > 1) {
          for (let I = 0, se = p.length; I < se; I++) {
            const D = p[I];
            E.addGroup(D.groupStart, D.groupCount, I);
          }
          M ? w = new ye(E, O) : P ? w = new ce(E, O) : w = new be(E, O);
        } else
          M ? w = new ye(E, O[0]) : P ? w = new ce(E, O[0]) : w = new be(E, O[0]);
        w.name = m.name, d.add(w);
      }
    else if (e.vertices.length > 0) {
      const f = new oe({ size: 1, sizeAttenuation: !1 }), b = new R();
      b.setAttribute("position", new te(e.vertices, 3)), e.colors.length > 0 && e.colors[0] !== void 0 && (b.setAttribute("color", new te(e.colors, 3)), f.vertexColors = !0);
      const m = new ce(b, f);
      d.add(m);
    }
    return d;
  }
}
const hn = /* @__PURE__ */ S({
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
  setup(r, { expose: s, emit: e }) {
    const t = r, n = new fn(), o = h("scene"), a = new _e();
    a.castShadow = !0, a.receiveShadow = !0, o.add(a), v(t, "position", a), v(t, "rotation", a), v(t, "scale", a);
    function l() {
      n.load(
        t.url,
        function(c) {
          for (const d of c.children)
            a.add(d), d.material = a.material, v(t, "position", a, !1), v(t, "rotation", a, !1), v(t, "scale", a, !1);
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
    return l(), L(
      () => t.url,
      () => l()
    ), A("mesh", a), s({
      three: a
    }), (c, d) => z(c.$slots, "default");
  }
}), pn = /* @__PURE__ */ S({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("scene"), n = new Ot(e.size);
    return t.add(n), v(e, "position", n), v(e, "rotation", n), v(e, "scale", n), A("mesh", n), s({ three: n }), (o, a) => z(o.$slots, "default");
  }
}), gn = {
  name: "BoxGeometry",
  render: () => null
}, yn = /* @__PURE__ */ S({
  ...gn,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("mesh");
    function n(c, d, y, f, b, m) {
      return new Tt(c, d, y, f, b, m);
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
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
    }), u(e, "width", l), u(e, "height", l), u(e, "depth", l), u(e, "widthSegments", l), u(e, "heightSegments", l), u(e, "depthSegments", l), s({ three: o }), { props: e, mesh: t, makeBox: n, three: o, addGeometry: a, redoGeometry: l };
  }
}), bn = {
  name: "BufferGeometry",
  render: () => null
}, _n = /* @__PURE__ */ S({
  ...bn,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] },
    uvs: { default: () => [] }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("mesh");
    function n(c, d, y) {
      const f = new R(), b = new Float32Array(c), m = new Float32Array(y);
      return f.setAttribute("position", new Fe(b, 3)), f.setAttribute("uv", new Fe(m, 2)), e.faces.length > 0 && f.setIndex(d), f;
    }
    const o = V(n(e.vertices, e.faces, e.uvs));
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
    function l(c, d, y) {
      const f = n(c, d, y);
      F(o, f);
    }
    return L(
      () => e.vertices,
      (c) => {
        l(c, e.faces, e.uvs);
      },
      { deep: !0, immediate: !0 }
    ), L(
      () => e.faces,
      (c) => {
        l(e.vertices, c, e.uvs);
      },
      { deep: !0, immediate: !0 }
    ), s({ three: o }), { props: e, mesh: t, makeGeometry: n, three: o, addGeometry: a, redoGeometry: l };
  }
}), wn = {
  name: "CircleGeometry",
  render: () => null
}, vn = /* @__PURE__ */ S({
  ...wn,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    segments: { default: 32 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("mesh");
    function n(c, d, y, f) {
      return new Ct(c, d, y, f);
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
    function l() {
      const c = n(e.radius, e.segments, e.thetaStart, e.thetaLength);
      F(o, c);
    }
    return l(), u(e, "radius", l), u(e, "segments", l), u(e, "thetaStart", l), u(e, "thetaLength", l), s({ three: o }), { props: e, mesh: t, makeCircle: n, three: o, addGeometry: a, redoGeometry: l };
  }
}), Ln = {
  name: "ConeGeometry",
  render: () => null
}, Pn = /* @__PURE__ */ S({
  ...Ln,
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
  setup(r, { expose: s }) {
    const e = r, t = h("mesh");
    function n(c, d, y, f, b, m, _) {
      return new Gt(c, d, y, f, b, m, _);
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
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
    return l(), u(e, "radius", l), u(e, "height", l), u(e, "radialSegments", l), u(e, "heightSegments", l), u(e, "openEnded", l), u(e, "thetaStart", l), u(e, "thetaLength", l), s({ three: o }), { props: e, mesh: t, makeCone: n, three: o, addGeometry: a, redoGeometry: l };
  }
}), Mn = {
  name: "CylinderGeometry",
  render: () => null
}, Sn = /* @__PURE__ */ S({
  ...Mn,
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
  setup(r, { expose: s }) {
    const e = r, t = h("mesh");
    function n(c, d, y, f, b, m, _, p) {
      return new Rt(
        c,
        d,
        y,
        f,
        b,
        m,
        _,
        p
      );
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
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
    return l(), u(e, "radiusTop", l), u(e, "radiusBottom", l), u(e, "height", l), u(e, "radialSegments", l), u(e, "heightSegments", l), u(e, "openEnded", l), u(e, "thetaStart", l), u(e, "thetaLength", l), s({ three: o }), { props: e, mesh: t, makeCylinder: n, three: o, addGeometry: a, redoGeometry: l };
  }
}), En = {
  name: "EdgesGeometry",
  render: () => null
}, xn = /* @__PURE__ */ S({
  ...En,
  props: {
    geometry: null
  },
  setup(r, { expose: s }) {
    const e = r, t = h("mesh"), n = V(new R());
    t.geometry = n;
    const o = h("getGeometry"), a = h("addGeometry");
    a(n);
    function l() {
      const y = new kt(o(e.geometry));
      F(n, y);
    }
    let c = L(
      o(e.geometry),
      () => {
        l();
      },
      { deep: !0, immediate: !0 }
    );
    u(e, "geometry", () => {
      c(), c = L(
        o(e.geometry),
        () => {
          l();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const d = () => {
      o(e.geometry) === void 0 ? ue(() => d) : l();
    };
    return ue(() => d), s({ three: n }), { props: e, mesh: t, three: n, getGeometry: o, addGeometry: a, redoGeometry: l, get unwatch() {
      return c;
    }, set unwatch(y) {
      c = y;
    }, waitUntilGeometryChanged: d };
  }
}), An = {
  name: "PlaneGeometry",
  render: () => null
}, On = /* @__PURE__ */ S({
  ...An,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("mesh");
    function n(c, d, y, f) {
      return new zt(c, d, y, f);
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
    function l() {
      const c = n(e.width, e.height, e.widthSegments, e.heightSegments);
      F(o, c);
    }
    return l(), u(e, "width", l), u(e, "height", l), u(e, "widthSegments", l), u(e, "heightSegments", l), s({ three: o }), { props: e, mesh: t, makePlane: n, three: o, addGeometry: a, redoGeometry: l };
  }
}), Tn = {
  name: "RingGeometry",
  render: () => null
}, Cn = /* @__PURE__ */ S({
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
  setup(r, { expose: s }) {
    const e = r, t = h("mesh");
    function n(c, d, y, f, b, m) {
      return new It(c, d, y, f, b, m);
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
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
    return l(), u(e, "innerRadius", l), u(e, "outerRadius", l), u(e, "thetaSegments", l), u(e, "phiSegments", l), u(e, "thetaStart", l), u(e, "thetaLength", l), s({ three: o }), { props: e, mesh: t, makeRing: n, three: o, addGeometry: a, redoGeometry: l };
  }
}), Gn = {
  name: "SphereGeometry",
  render: () => null
}, Rn = /* @__PURE__ */ S({
  ...Gn,
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
  setup(r, { expose: s }) {
    const e = r, t = h("mesh");
    function n(c, d, y, f, b, m, _) {
      return new Dt(c, d, y, f, b, m, _);
    }
    const o = V(new R());
    o.name = e.name, t.geometry = o;
    const a = h("addGeometry");
    a(o);
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
    return l(), u(e, "radius", l), u(e, "widthSegments", l), u(e, "heightSegments", l), u(e, "phiStart", l), u(e, "phiLength", l), u(e, "thetaStart", l), u(e, "thetaLength", l), s({ three: o }), { props: e, mesh: t, makeSphere: n, three: o, addGeometry: a, redoGeometry: l };
  }
}), kn = {
  name: "WireframeGeometry",
  render: () => null
}, zn = /* @__PURE__ */ S({
  ...kn,
  props: {
    geometry: null
  },
  setup(r, { expose: s }) {
    const e = r, t = h("mesh"), n = V(new R());
    t.geometry = n;
    const o = h("getGeometry"), a = h("addGeometry");
    a(n);
    function l() {
      const y = new jt(o(e.geometry));
      F(n, y);
    }
    let c = L(
      o(e.geometry),
      () => {
        l();
      },
      { deep: !0, immediate: !0 }
    );
    u(e, "geometry", () => {
      c(), c = L(
        o(e.geometry),
        () => {
          l();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const d = () => {
      o(e.geometry) === void 0 ? ue(() => d) : l();
    };
    return ue(() => d), s({ three: n }), { props: e, mesh: t, three: n, getGeometry: o, addGeometry: a, redoGeometry: l, get unwatch() {
      return c;
    }, set unwatch(y) {
      c = y;
    }, waitUntilGeometryChanged: d };
  }
}), In = {
  name: "LineBasicMaterial",
  render: () => null
}, Dn = /* @__PURE__ */ S({
  ...In,
  props: {
    color: { default: 16777215 }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("mesh"), n = new X({ color: e.color });
    t.material = n;
    function o(a) {
      a.color && (n.color = new Z(a.color));
    }
    return o(e), L(
      () => e.color,
      () => o(e)
    ), A("material", n), s({ three: n }), { props: e, mesh: t, three: n, applyProps: o };
  }
}), jn = {
  name: "MeshBasicMaterial"
}, Bn = /* @__PURE__ */ S({
  ...jn,
  props: {
    color: null,
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("mesh"), n = new Qe();
    return t.material = n, L(
      () => e.color,
      () => {
        e.color !== void 0 && (n.color = new Z(e.color));
      },
      { immediate: !0 }
    ), L(
      () => e.side,
      () => {
        n.side = e.side;
      },
      { immediate: !0 }
    ), L(
      () => e.opacity,
      () => {
        n.opacity = e.opacity;
      },
      { immediate: !0 }
    ), L(
      () => e.transparent,
      () => {
        n.transparent = e.transparent;
      },
      { immediate: !0 }
    ), L(
      () => e.vertexColors,
      () => {
        n.vertexColors = e.vertexColors;
      },
      { immediate: !0 }
    ), A("material", n), s({ three: n }), (o, a) => z(o.$slots, "default");
  }
}), $n = {
  name: "MeshLambertMaterial"
}, Nn = /* @__PURE__ */ S({
  ...$n,
  props: {
    color: { default: 16777215 },
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("mesh"), n = new Bt();
    t.material = n;
    function o(a) {
      a.color && (n.color = new Z(a.color)), a.side && (n.side = a.side);
    }
    return o(e), L(
      () => e.color,
      () => o(e)
    ), L(
      () => e.side,
      () => o(e)
    ), L(
      () => e.opacity,
      () => {
        n.opacity = e.opacity;
      },
      { immediate: !0 }
    ), L(
      () => e.transparent,
      () => {
        n.transparent = e.transparent;
      },
      { immediate: !0 }
    ), A("material", n), s({ three: n }), (a, l) => z(a.$slots, "default");
  }
}), Vn = {
  name: "PointsMaterial",
  render: () => null
}, Fn = /* @__PURE__ */ S({
  ...Vn,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("mesh"), n = new oe({ color: e.color, sizeAttenuation: e.sizeAttenuation, size: e.size });
    t.material = n;
    function o(a) {
      a.color && (n.color = new Z(a.color)), a.size && (n.size = a.size), a.sizeAttenuation !== void 0 && (n.sizeAttenuation = a.sizeAttenuation);
    }
    return o(e), L(
      () => e.color,
      () => o(e)
    ), L(
      () => e.size,
      () => o(e)
    ), L(
      () => e.sizeAttenuation,
      () => o(e)
    ), A("material", n), s({ three: n }), { props: e, mesh: t, three: n, applyProps: o };
  }
}), Un = {
  name: "MeshNormalMaterial"
}, Hn = /* @__PURE__ */ S({
  ...Un,
  props: {
    side: { default: we },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("mesh"), n = new $t();
    return t.material = n, L(
      () => e.side,
      () => {
        n.side = e.side;
      },
      { immediate: !0 }
    ), L(
      () => e.opacity,
      () => {
        n.opacity = e.opacity;
      },
      { immediate: !0 }
    ), L(
      () => e.transparent,
      () => {
        n.transparent = e.transparent;
      },
      { immediate: !0 }
    ), A("material", n), s({ three: n }), (o, a) => z(o.$slots, "default");
  }
}), Yn = {
  name: "AmbientLight",
  render: () => null
}, Zn = /* @__PURE__ */ S({
  ...Yn,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("scene"), n = new Nt();
    t.add(n);
    function o(a) {
      n.color = new Z(a.color), n.intensity = a.intensity;
    }
    return o(e), L(
      () => e.color,
      () => o(e)
    ), L(
      () => e.intensity,
      () => o(e)
    ), s({ three: n }), { props: e, scene: t, three: n, applyProps: o };
  }
}), Xn = {
  name: "PointLight",
  render: () => null
}, Wn = /* @__PURE__ */ S({
  ...Xn,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("scene"), n = new Vt();
    t.add(n), v(e, "position", n), v(e, "rotation", n), v(e, "scale", n);
    function o(a) {
      n.color = new Z(a.color), n.intensity = a.intensity, n.castShadow = a.castShadow;
    }
    return o(e), L(
      () => e.color,
      () => o(e)
    ), L(
      () => e.intensity,
      () => o(e)
    ), L(
      () => e.castShadow,
      () => o(e)
    ), s({ three: n }), { props: e, scene: t, three: n, applyProps: o };
  }
}), Kn = {
  name: "TextureLoader",
  render: () => null
}, qn = /* @__PURE__ */ S({
  ...Kn,
  props: {
    url: null,
    wrapS: { default: Ue },
    wrapT: { default: Ue }
  },
  setup(r, { expose: s }) {
    const e = r, t = h("material"), n = ne(new Ft());
    function o() {
      n.value = new Ut().load(e.url), "map" in t && (t.map = n.value), a();
    }
    function a() {
      n.value.wrapS = e.wrapS, n.value.wrapT = e.wrapT, n.value.needsUpdate = !0;
    }
    return o(), u(e, "url", o), u(e, "wrapS", a), u(e, "wrapT", a), s({ three: n }), { props: e, material: t, three: n, load: o, applyProps: a };
  }
});
function eo(r) {
  r.component("Renderer", Yt), r.component("Scene", Zt), r.component("PerspectiveCamera", Wt), r.component("OrthographicCamera", qt), r.component("OrbitControls", en), r.component("Group", tn), r.component("Line", nn), r.component("LineLoop", on), r.component("LineSegments", an), r.component("Mesh", sn), r.component("Points", rn), r.component("OBJLoader", hn), r.component("AxesHelper", pn), r.component("BoxGeometry", yn), r.component("BufferGeometry", _n), r.component("CircleGeometry", vn), r.component("ConeGeometry", Pn), r.component("CylinderGeometry", Sn), r.component("EdgesGeometry", xn), r.component("PlaneGeometry", On), r.component("RingGeometry", Cn), r.component("SphereGeometry", Rn), r.component("WireframeGeometry", zn), r.component("LineBasicMaterial", Dn), r.component("MeshBasicMaterial", Bn), r.component("MeshLambertMaterial", Nn), r.component("PointsMaterial", Fn), r.component("MeshNormalMaterial", Hn), r.component("AmbientLight", Zn), r.component("PointLight", Wn), r.component("TextureLoader", qn);
}
export {
  Zn as AmbientLight,
  pn as AxesHelper,
  yn as BoxGeometry,
  _n as BufferGeometry,
  vn as CircleGeometry,
  Pn as ConeGeometry,
  Sn as CylinderGeometry,
  xn as EdgesGeometry,
  tn as Group,
  nn as Line,
  Dn as LineBasicMaterial,
  on as LineLoop,
  an as LineSegments,
  sn as Mesh,
  Bn as MeshBasicMaterial,
  Nn as MeshLambertMaterial,
  Hn as MeshNormalMaterial,
  hn as OBJLoader,
  en as OrbitControls,
  qt as OrthographicCamera,
  Wt as PerspectiveCamera,
  On as PlaneGeometry,
  Wn as PointLight,
  rn as Points,
  Fn as PointsMaterial,
  Yt as Renderer,
  Cn as RingGeometry,
  Zt as Scene,
  Rn as SphereGeometry,
  qn as TextureLoader,
  zn as WireframeGeometry,
  eo as install
};

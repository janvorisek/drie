import { watch as E, inject as g, onMounted as ie, onUnmounted as Z, defineComponent as L, ref as W, reactive as B, provide as G, openBlock as yt, createElementBlock as wt, Fragment as bt, renderSlot as I, createElementVNode as _t, nextTick as me } from "vue";
import { Vector3 as T, Raycaster as Ve, Vector2 as V, WebGLRenderer as Mt, Scene as vt, Color as X, PerspectiveCamera as Pt, OrthographicCamera as St, EventDispatcher as Lt, MOUSE as ne, TOUCH as ae, Quaternion as Fe, Spherical as Ue, Group as Me, BufferGeometry as O, MeshBasicMaterial as ve, InstancedMesh as xt, LineBasicMaterial as q, Line as Et, LineLoop as At, LineSegments as be, Mesh as _e, PointsMaterial as oe, Points as ue, Loader as Gt, FileLoader as Ct, Float32BufferAttribute as Y, Material as He, MeshPhongMaterial as Tt, AxesHelper as Ot, BoxGeometry as Rt, BufferAttribute as Ye, CircleGeometry as zt, ConeGeometry as It, CylinderGeometry as kt, EdgesGeometry as Dt, Curve as Bt, PlaneGeometry as $t, RingGeometry as jt, SphereGeometry as Nt, WireframeGeometry as Vt, LineDashedMaterial as Ft, FrontSide as Pe, MeshLambertMaterial as Ut, MeshNormalMaterial as Ht, AmbientLight as Yt, PointLight as Zt, ClampToEdgeWrapping as Ze, Texture as Xt, TextureLoader as Kt } from "three";
const Xe = (r) => r === void 0 ? new T(0, 0, 0) : "x" in r ? new T(r.x, r.y, r.z) : new T(r[0], r[1], r[2]), Ke = (r, s, e) => {
  e[r].isVector3 ? e[r].set(s.x, s.y, s.z) : "isEuler" in e[r] && e[r].setFromVector3(s);
}, S = (r, s, e, t = !0) => {
  if (e !== null) {
    if (r[s] !== void 0) {
      const n = Xe(r[s]);
      Ke(s, n, e);
    }
    t && E(
      () => r[s],
      () => {
        if (r[s] !== void 0) {
          const n = Xe(r[s]);
          Ke(s, n, e);
        }
      }
    );
  }
}, u = (r, s, e) => {
  E(
    () => r[s],
    () => {
      e();
    }
  );
};
function F(r, s) {
  s.hasAttribute("position") && (r.setAttribute("position", s.getAttribute("position")), r.attributes.position.needsUpdate = !0, r.computeVertexNormals(), r.computeBoundingBox(), r.computeBoundingSphere()), s.hasAttribute("normal") && (r.setAttribute("normal", s.getAttribute("normal")), r.attributes.normal.needsUpdate = !0), s.hasAttribute("uv") && (r.setAttribute("uv", s.getAttribute("uv")), r.attributes.uv.needsUpdate = !0), r.setIndex(s.getIndex());
}
function K(r) {
  if (r.children.length > 0)
    for (let s = r.children.length - 1; s >= 0; s--)
      K(r.children[s]);
  if (r.geometry && r.geometry.dispose(), r.material)
    if (r.material.length)
      for (let s = 0; s < r.material.length; ++s)
        r.material[s].map && r.material[s].map.dispose(), r.material[s].lightMap && r.material[s].lightMap.dispose(), r.material[s].bumpMap && r.material[s].bumpMap.dispose(), r.material[s].normalMap && r.material[s].normalMap.dispose(), r.material[s].specularMap && r.material[s].specularMap.dispose(), r.material[s].envMap && r.material[s].envMap.dispose(), r.material[s].dispose();
    else
      r.material.map && r.material.map.dispose(), r.material.lightMap && r.material.lightMap.dispose(), r.material.bumpMap && r.material.bumpMap.dispose(), r.material.normalMap && r.material.normalMap.dispose(), r.material.specularMap && r.material.specularMap.dispose(), r.material.envMap && r.material.envMap.dispose(), r.material.dispose();
  return r.removeFromParent(), !0;
}
function J(r) {
  const s = g("scene"), e = g("parent", void 0);
  ie(() => {
    e ? e.add(r) : s.add(r);
  }), Z(() => {
    e ? e.remove(r) : s.remove(r);
  });
}
function Wt(r, s, e) {
  const t = g("camera"), n = g("canvas");
  g("scene");
  const o = (m) => {
    const h = new Ve(), d = We(m);
    h.setFromCamera(d, t.value);
    const y = h.intersectObjects(r);
    y.length > 0 && e("click", y, d);
  };
  let a = !1, i = [];
  const c = (m) => {
    const h = new Ve(), d = We(m);
    h.setFromCamera(d, t.value);
    const y = h.intersectObjects(r);
    y.length > 0 ? (i = y, a === !1 && e("mouseenter", y, d), a = !0, e("mousemove", y, d)) : (a && e("mouseleave", i, d), a = !1, i = []);
  };
  ie(() => {
    if (s.enableRaycasting) {
      if ((n == null ? void 0 : n.value) == null)
        return;
      n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c);
    }
  }), Z(() => {
    if (s.enableRaycasting) {
      if ((n == null ? void 0 : n.value) == null)
        return;
      n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c);
    }
  }), E(
    () => s.enableRaycasting,
    (m) => {
      m ? (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c)) : (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
    }
  );
}
function We(r) {
  const s = new V(), e = r.currentTarget.getBoundingClientRect();
  return s.x = (r.clientX - e.left) / e.width * 2 - 1, s.y = -((r.clientY - e.top) / e.height) * 2 + 1, s;
}
const qt = /* @__PURE__ */ L({
  __name: "Renderer",
  props: {
    alpha: { type: Boolean, default: !1 },
    antialias: { type: Boolean, default: !1 },
    autoResize: { type: Boolean, default: !0 },
    camera: null,
    height: { default: 0 },
    frameLimit: { default: 60 },
    onBeforeRender: { type: Function, default: () => {
    } },
    shadowMapEnabled: { type: Boolean, default: !1 },
    width: { default: 0 }
  },
  setup(r, { expose: s }) {
    const e = r;
    let t = W(null);
    const n = [], o = B([]), a = B([]);
    let i = W(null);
    const c = W([]), m = W([]), h = W();
    G("canvas", h);
    let d = Date.now(), y = 1e3 / e.frameLimit;
    E(
      () => e.camera,
      (p) => f(p)
    );
    const f = (p) => {
      if (p) {
        const M = c.value.find((b) => b.name === p);
        M === void 0 && (i.value = null), i.value = M;
      } else
        i.value = c.value[0];
    };
    function w() {
      t.value !== null && (t.value.shadowMap.enabled = e.shadowMapEnabled, y = 1e3 / e.frameLimit, e.autoResize || t.value.setSize(e.width, e.height));
    }
    ie(() => {
      t.value = new Mt({ canvas: h.value, antialias: e.antialias, alpha: e.alpha }), t.value.setSize(1, 1), w(), f(e.camera), new ResizeObserver((M) => {
        M.forEach((b) => {
          t.value && e.autoResize && t.value.setSize(b.contentRect.width, b.contentRect.height);
        });
      }).observe(h.value.parentElement), v();
    }), Z(() => {
      for (let p of n)
        K(p);
    });
    function v() {
      if (requestAnimationFrame(v), t.value === null)
        return;
      const p = Date.now(), M = p - d;
      if (!(y > -1 && M < y)) {
        if (d = p - M % y, e.onBeforeRender && e.onBeforeRender(), m.value.length > 0 && i.value)
          for (const b of m.value)
            b.value !== null && (b.value.object.uuid === i.value.uuid ? (b.value.enabled = !0, b.value.update()) : b.value.enabled = !1);
        if (i.value && t)
          for (const b of n)
            t.value.render(b, i.value);
      }
    }
    return w(), E(
      () => e.shadowMapEnabled,
      () => w()
    ), E(
      () => e.frameLimit,
      () => w()
    ), E(
      () => e.width,
      () => w()
    ), E(
      () => e.height,
      () => w()
    ), G("addCamera", (p) => c.value.push(p)), G("addScene", (p) => n.push(p)), G("addGeometry", (p) => o.push(p)), G("getGeometry", (p) => o.find((M) => M.name === p)), G("addMaterial", (p) => a.push(p)), G("getMaterial", (p) => a.find((M) => M.name === p)), G("addControls", (p) => m.value.push(p)), G("camera", i), s({ three: t }), (p, M) => (yt(), wt(bt, null, [
      I(p.$slots, "default"),
      _t("canvas", {
        ref_key: "canvas",
        ref: h
      }, null, 512)
    ], 64));
  }
}), Jt = /* @__PURE__ */ L({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(r, { expose: s }) {
    const e = r, t = new vt();
    G("scene", t), g("addScene")(t);
    function n(o) {
      o.background && (t.background = new X(o.background));
    }
    return n(e), E(
      () => e.background,
      () => n(e)
    ), s({ three: t }), (o, a) => I(o.$slots, "default");
  }
}), Qt = {
  name: "PerspectiveCamera"
}, en = /* @__PURE__ */ L({
  ...Qt,
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
    const e = r, t = new Pt(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    g("addCamera")(t);
    const n = g("canvas");
    E(n, () => {
      new ResizeObserver((i) => {
        i.forEach((c) => {
          e.autoResize && (t.aspect = c.contentRect.width / c.contentRect.height, t.updateProjectionMatrix());
        });
      }).observe(n.value);
    }), S(e, "position", t), S(e, "up", t), S(e, "lookAt", t);
    function o() {
      t.name = e.name, e.autoResize || (t.aspect = e.aspect), t.near = e.near, t.far = e.far, t.updateProjectionMatrix();
    }
    return o(), u(e, "name", o), u(e, "aspect", o), u(e, "near", o), u(e, "far", o), G("parentCamera", t), s({ three: t }), (a, i) => I(a.$slots, "default");
  }
}), tn = {
  name: "OrthographicCamera"
}, nn = /* @__PURE__ */ L({
  ...tn,
  props: {
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(r, { expose: s }) {
    const e = r, t = new St(-10, 10, 10, -10, 0.1, 1e3);
    t.lookAt(0, 0, 0), t.updateProjectionMatrix(), g("addCamera")(t);
    const n = g("canvas");
    E(n, () => {
      new ResizeObserver((i) => {
        i.forEach((c) => {
          const m = c.contentRect.width / c.contentRect.height;
          t.left = t.bottom * m, t.right = t.top * m, t.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), S(e, "position", t), S(e, "up", t), S(e, "lookAt", t);
    function o() {
      t.name = e.name, t.near = e.near, t.far = e.far, t.updateProjectionMatrix();
    }
    return o(), u(e, "name", o), u(e, "near", o), u(e, "far", o), G("parentCamera", t), s({ three: t }), (a, i) => I(a.$slots, "default");
  }
}), qe = { type: "change" }, ye = { type: "start" }, Je = { type: "end" };
class an extends Lt {
  constructor(s, e) {
    super(), e === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), e === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = s, this.domElement = e, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new T(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: ne.ROTATE, MIDDLE: ne.DOLLY, RIGHT: ne.PAN }, this.touches = { ONE: ae.ROTATE, TWO: ae.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return i.phi;
    }, this.getAzimuthalAngle = function() {
      return i.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(l) {
      l.addEventListener("keydown", De), this._domElementKeyEvents = l;
    }, this.saveState = function() {
      t.target0.copy(t.target), t.position0.copy(t.object.position), t.zoom0 = t.object.zoom;
    }, this.reset = function() {
      t.target.copy(t.target0), t.object.position.copy(t.position0), t.object.zoom = t.zoom0, t.object.updateProjectionMatrix(), t.dispatchEvent(qe), t.update(), o = n.NONE;
    }, this.update = function() {
      const l = new T(), _ = new Fe().setFromUnitVectors(s.up, new T(0, 1, 0)), R = _.clone().invert(), z = new T(), N = new Fe(), te = 2 * Math.PI;
      return function() {
        const Ne = t.object.position;
        l.copy(Ne).sub(t.target), l.applyQuaternion(_), i.setFromVector3(l), t.autoRotate && o === n.NONE && Q(re()), t.enableDamping ? (i.theta += c.theta * t.dampingFactor, i.phi += c.phi * t.dampingFactor) : (i.theta += c.theta, i.phi += c.phi);
        let U = t.minAzimuthAngle, H = t.maxAzimuthAngle;
        return isFinite(U) && isFinite(H) && (U < -Math.PI ? U += te : U > Math.PI && (U -= te), H < -Math.PI ? H += te : H > Math.PI && (H -= te), U <= H ? i.theta = Math.max(U, Math.min(H, i.theta)) : i.theta = i.theta > (U + H) / 2 ? Math.max(U, i.theta) : Math.min(H, i.theta)), i.phi = Math.max(t.minPolarAngle, Math.min(t.maxPolarAngle, i.phi)), i.makeSafe(), i.radius *= m, i.radius = Math.max(t.minDistance, Math.min(t.maxDistance, i.radius)), t.enableDamping === !0 ? t.target.addScaledVector(h, t.dampingFactor) : t.target.add(h), l.setFromSpherical(i), l.applyQuaternion(R), Ne.copy(t.target).add(l), t.object.lookAt(t.target), t.enableDamping === !0 ? (c.theta *= 1 - t.dampingFactor, c.phi *= 1 - t.dampingFactor, h.multiplyScalar(1 - t.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0)), m = 1, d || z.distanceToSquared(t.object.position) > a || 8 * (1 - N.dot(t.object.quaternion)) > a ? (t.dispatchEvent(qe), z.copy(t.object.position), N.copy(t.object.quaternion), d = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      t.domElement.removeEventListener("contextmenu", Be), t.domElement.removeEventListener("pointerdown", ze), t.domElement.removeEventListener("pointercancel", Ie), t.domElement.removeEventListener("wheel", ke), t.domElement.removeEventListener("pointermove", fe), t.domElement.removeEventListener("pointerup", pe), t._domElementKeyEvents !== null && t._domElementKeyEvents.removeEventListener("keydown", De);
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
    const a = 1e-6, i = new Ue(), c = new Ue();
    let m = 1;
    const h = new T();
    let d = !1;
    const y = new V(), f = new V(), w = new V(), v = new V(), p = new V(), M = new V(), b = new V(), x = new V(), A = new V(), P = [], k = {};
    function re() {
      return 2 * Math.PI / 60 / 60 * t.autoRotateSpeed;
    }
    function D() {
      return Math.pow(0.95, t.zoomSpeed);
    }
    function Q(l) {
      c.theta -= l;
    }
    function C(l) {
      c.phi -= l;
    }
    const j = function() {
      const l = new T();
      return function(R, z) {
        l.setFromMatrixColumn(z, 0), l.multiplyScalar(-R), h.add(l);
      };
    }(), Se = function() {
      const l = new T();
      return function(R, z) {
        t.screenSpacePanning === !0 ? l.setFromMatrixColumn(z, 1) : (l.setFromMatrixColumn(z, 0), l.crossVectors(t.object.up, l)), l.multiplyScalar(R), h.add(l);
      };
    }(), ee = function() {
      const l = new T();
      return function(R, z) {
        const N = t.domElement;
        if (t.object.isPerspectiveCamera) {
          const te = t.object.position;
          l.copy(te).sub(t.target);
          let le = l.length();
          le *= Math.tan(t.object.fov / 2 * Math.PI / 180), j(2 * R * le / N.clientHeight, t.object.matrix), Se(2 * z * le / N.clientHeight, t.object.matrix);
        } else
          t.object.isOrthographicCamera ? (j(R * (t.object.right - t.object.left) / t.object.zoom / N.clientWidth, t.object.matrix), Se(z * (t.object.top - t.object.bottom) / t.object.zoom / N.clientHeight, t.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), t.enablePan = !1);
      };
    }();
    function he(l) {
      t.object.isPerspectiveCamera ? m /= l : t.object.isOrthographicCamera ? (t.object.zoom = Math.max(t.minZoom, Math.min(t.maxZoom, t.object.zoom * l)), t.object.updateProjectionMatrix(), d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), t.enableZoom = !1);
    }
    function Le(l) {
      t.object.isPerspectiveCamera ? m *= l : t.object.isOrthographicCamera ? (t.object.zoom = Math.max(t.minZoom, Math.min(t.maxZoom, t.object.zoom / l)), t.object.updateProjectionMatrix(), d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), t.enableZoom = !1);
    }
    function xe(l) {
      y.set(l.clientX, l.clientY);
    }
    function nt(l) {
      b.set(l.clientX, l.clientY);
    }
    function Ee(l) {
      v.set(l.clientX, l.clientY);
    }
    function at(l) {
      f.set(l.clientX, l.clientY), w.subVectors(f, y).multiplyScalar(t.rotateSpeed);
      const _ = t.domElement;
      Q(2 * Math.PI * w.x / _.clientHeight), C(2 * Math.PI * w.y / _.clientHeight), y.copy(f), t.update();
    }
    function ot(l) {
      x.set(l.clientX, l.clientY), A.subVectors(x, b), A.y > 0 ? he(D()) : A.y < 0 && Le(D()), b.copy(x), t.update();
    }
    function st(l) {
      p.set(l.clientX, l.clientY), M.subVectors(p, v).multiplyScalar(t.panSpeed), ee(M.x, M.y), v.copy(p), t.update();
    }
    function rt(l) {
      l.deltaY < 0 ? Le(D()) : l.deltaY > 0 && he(D()), t.update();
    }
    function it(l) {
      let _ = !1;
      switch (l.code) {
        case t.keys.UP:
          ee(0, t.keyPanSpeed), _ = !0;
          break;
        case t.keys.BOTTOM:
          ee(0, -t.keyPanSpeed), _ = !0;
          break;
        case t.keys.LEFT:
          ee(t.keyPanSpeed, 0), _ = !0;
          break;
        case t.keys.RIGHT:
          ee(-t.keyPanSpeed, 0), _ = !0;
          break;
      }
      _ && (l.preventDefault(), t.update());
    }
    function Ae() {
      if (P.length === 1)
        y.set(P[0].pageX, P[0].pageY);
      else {
        const l = 0.5 * (P[0].pageX + P[1].pageX), _ = 0.5 * (P[0].pageY + P[1].pageY);
        y.set(l, _);
      }
    }
    function Ge() {
      if (P.length === 1)
        v.set(P[0].pageX, P[0].pageY);
      else {
        const l = 0.5 * (P[0].pageX + P[1].pageX), _ = 0.5 * (P[0].pageY + P[1].pageY);
        v.set(l, _);
      }
    }
    function Ce() {
      const l = P[0].pageX - P[1].pageX, _ = P[0].pageY - P[1].pageY, R = Math.sqrt(l * l + _ * _);
      b.set(0, R);
    }
    function lt() {
      t.enableZoom && Ce(), t.enablePan && Ge();
    }
    function ct() {
      t.enableZoom && Ce(), t.enableRotate && Ae();
    }
    function Te(l) {
      if (P.length == 1)
        f.set(l.pageX, l.pageY);
      else {
        const R = ge(l), z = 0.5 * (l.pageX + R.x), N = 0.5 * (l.pageY + R.y);
        f.set(z, N);
      }
      w.subVectors(f, y).multiplyScalar(t.rotateSpeed);
      const _ = t.domElement;
      Q(2 * Math.PI * w.x / _.clientHeight), C(2 * Math.PI * w.y / _.clientHeight), y.copy(f);
    }
    function Oe(l) {
      if (P.length === 1)
        p.set(l.pageX, l.pageY);
      else {
        const _ = ge(l), R = 0.5 * (l.pageX + _.x), z = 0.5 * (l.pageY + _.y);
        p.set(R, z);
      }
      M.subVectors(p, v).multiplyScalar(t.panSpeed), ee(M.x, M.y), v.copy(p);
    }
    function Re(l) {
      const _ = ge(l), R = l.pageX - _.x, z = l.pageY - _.y, N = Math.sqrt(R * R + z * z);
      x.set(0, N), A.set(0, Math.pow(x.y / b.y, t.zoomSpeed)), he(A.y), b.copy(x);
    }
    function ut(l) {
      t.enableZoom && Re(l), t.enablePan && Oe(l);
    }
    function mt(l) {
      t.enableZoom && Re(l), t.enableRotate && Te(l);
    }
    function ze(l) {
      t.enabled !== !1 && (P.length === 0 && (t.domElement.setPointerCapture(l.pointerId), t.domElement.addEventListener("pointermove", fe), t.domElement.addEventListener("pointerup", pe)), gt(l), l.pointerType === "touch" ? ft(l) : dt(l));
    }
    function fe(l) {
      t.enabled !== !1 && (l.pointerType === "touch" ? pt(l) : ht(l));
    }
    function pe(l) {
      $e(l), P.length === 0 && (t.domElement.releasePointerCapture(l.pointerId), t.domElement.removeEventListener("pointermove", fe), t.domElement.removeEventListener("pointerup", pe)), t.dispatchEvent(Je), o = n.NONE;
    }
    function Ie(l) {
      $e(l);
    }
    function dt(l) {
      let _;
      switch (l.button) {
        case 0:
          _ = t.mouseButtons.LEFT;
          break;
        case 1:
          _ = t.mouseButtons.MIDDLE;
          break;
        case 2:
          _ = t.mouseButtons.RIGHT;
          break;
        default:
          _ = -1;
      }
      switch (_) {
        case ne.DOLLY:
          if (t.enableZoom === !1)
            return;
          nt(l), o = n.DOLLY;
          break;
        case ne.ROTATE:
          if (l.ctrlKey || l.metaKey || l.shiftKey) {
            if (t.enablePan === !1)
              return;
            Ee(l), o = n.PAN;
          } else {
            if (t.enableRotate === !1)
              return;
            xe(l), o = n.ROTATE;
          }
          break;
        case ne.PAN:
          if (l.ctrlKey || l.metaKey || l.shiftKey) {
            if (t.enableRotate === !1)
              return;
            xe(l), o = n.ROTATE;
          } else {
            if (t.enablePan === !1)
              return;
            Ee(l), o = n.PAN;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && t.dispatchEvent(ye);
    }
    function ht(l) {
      if (t.enabled !== !1)
        switch (o) {
          case n.ROTATE:
            if (t.enableRotate === !1)
              return;
            at(l);
            break;
          case n.DOLLY:
            if (t.enableZoom === !1)
              return;
            ot(l);
            break;
          case n.PAN:
            if (t.enablePan === !1)
              return;
            st(l);
            break;
        }
    }
    function ke(l) {
      t.enabled === !1 || t.enableZoom === !1 || o !== n.NONE || (l.preventDefault(), t.dispatchEvent(ye), rt(l), t.dispatchEvent(Je));
    }
    function De(l) {
      t.enabled === !1 || t.enablePan === !1 || it(l);
    }
    function ft(l) {
      switch (je(l), P.length) {
        case 1:
          switch (t.touches.ONE) {
            case ae.ROTATE:
              if (t.enableRotate === !1)
                return;
              Ae(), o = n.TOUCH_ROTATE;
              break;
            case ae.PAN:
              if (t.enablePan === !1)
                return;
              Ge(), o = n.TOUCH_PAN;
              break;
            default:
              o = n.NONE;
          }
          break;
        case 2:
          switch (t.touches.TWO) {
            case ae.DOLLY_PAN:
              if (t.enableZoom === !1 && t.enablePan === !1)
                return;
              lt(), o = n.TOUCH_DOLLY_PAN;
              break;
            case ae.DOLLY_ROTATE:
              if (t.enableZoom === !1 && t.enableRotate === !1)
                return;
              ct(), o = n.TOUCH_DOLLY_ROTATE;
              break;
            default:
              o = n.NONE;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && t.dispatchEvent(ye);
    }
    function pt(l) {
      switch (je(l), o) {
        case n.TOUCH_ROTATE:
          if (t.enableRotate === !1)
            return;
          Te(l), t.update();
          break;
        case n.TOUCH_PAN:
          if (t.enablePan === !1)
            return;
          Oe(l), t.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (t.enableZoom === !1 && t.enablePan === !1)
            return;
          ut(l), t.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (t.enableZoom === !1 && t.enableRotate === !1)
            return;
          mt(l), t.update();
          break;
        default:
          o = n.NONE;
      }
    }
    function Be(l) {
      t.enabled !== !1 && l.preventDefault();
    }
    function gt(l) {
      P.push(l);
    }
    function $e(l) {
      delete k[l.pointerId];
      for (let _ = 0; _ < P.length; _++)
        if (P[_].pointerId == l.pointerId) {
          P.splice(_, 1);
          return;
        }
    }
    function je(l) {
      let _ = k[l.pointerId];
      _ === void 0 && (_ = new V(), k[l.pointerId] = _), _.set(l.pageX, l.pageY);
    }
    function ge(l) {
      const _ = l.pointerId === P[0].pointerId ? P[1] : P[0];
      return k[_.pointerId];
    }
    t.domElement.addEventListener("contextmenu", Be), t.domElement.addEventListener("pointerdown", ze), t.domElement.addEventListener("pointercancel", Ie), t.domElement.addEventListener("wheel", ke, { passive: !1 }), this.update();
  }
}
const on = {
  name: "OrbitControls",
  render: () => null
}, sn = /* @__PURE__ */ L({
  ...on,
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
    const e = r, t = W(null);
    g("addControls")(t);
    const n = g("parentCamera"), o = g("canvas");
    function a() {
      t.value != null && (t.value.enablePan = e.enablePan, t.value.enableRotate = e.enableRotate, t.value.enableZoom = e.enableZoom, t.value.minZoom = e.minZoom, t.value.maxZoom = e.maxZoom, t.value.minDistance = e.minDistance, t.value.maxDistance = e.maxDistance, t.value.minPolarAngle = e.minPolarAngle, t.value.maxPolarAngle = e.maxPolarAngle, t.value.minAzimuthAngle = e.minAzimuthAngle, t.value.maxAzimuthAngle = e.maxAzimuthAngle);
    }
    let i = !1;
    const c = () => {
      o.value && (i || (t.value = new an(n, o.value), a(), S(e, "target", t.value), i = !0));
    };
    return E(o, () => {
      c();
    }), a(), u(e, "enablePan", a), u(e, "enableRotate", a), u(e, "enableZoom", a), u(e, "minZoom", a), u(e, "maxZoom", a), u(e, "minDistance", a), u(e, "maxDistance", a), u(e, "minPolarAngle", a), u(e, "maxPolarAngle", a), u(e, "minAzimuthAngle", a), u(e, "maxAzimuthAngle", a), s({ three: t }), { props: e, three: t, camera: n, canvas: o, applyProps: a, get boundCamera() {
      return i;
    }, set boundCamera(m) {
      i = m;
    }, tryBindCamera: c };
  }
}), rn = /* @__PURE__ */ L({
  __name: "Group",
  props: {
    enableRaycasting: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  emits: ["click", "mousemove", "mouseenter", "mouseleave"],
  setup(r, { expose: s, emit: e }) {
    const t = r, n = new Me();
    return J(n), S(t, "position", n), S(t, "rotation", n), S(t, "scale", n), Wt(n.children, t, e), G("parent", n), s({ three: n }), (o, a) => I(o.$slots, "default");
  }
}), ln = /* @__PURE__ */ L({
  __name: "InstancedMesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    count: null,
    geometry: { default: null },
    material: { default: null },
    receiveShadow: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = g("scene"), n = new O(), o = new ve(), a = new xt(n, o, e.count);
    a.castShadow = !0, a.receiveShadow = !0, J(a);
    function i() {
      a.castShadow = e.castShadow, a.receiveShadow = e.receiveShadow;
    }
    i(), u(e, "castShadow", i), u(e, "receiveShadow", i);
    const c = g("getGeometry"), m = g("getMaterial");
    return ie(() => {
      if (e.geometry) {
        const h = c(e.geometry);
        a.geometry = h;
      }
      if (e.material) {
        const h = m(e.material);
        a.material = h;
      }
    }), Z(() => {
      t.remove(a), K(a);
    }), G("mesh", a), s({ three: a }), (h, d) => I(h.$slots, "default");
  }
}), cn = /* @__PURE__ */ L({
  __name: "Line",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = g("scene"), n = new O(), o = new q({ color: "black" }), a = new Et(n, o);
    return J(a), S(e, "position", a), S(e, "rotation", a), S(e, "scale", a), Z(() => {
      t.remove(a), K(a);
    }), G("mesh", a), s({ three: a }), (i, c) => I(i.$slots, "default");
  }
}), un = /* @__PURE__ */ L({
  __name: "LineLoop",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = g("scene"), n = new O(), o = new q({ color: "black" }), a = new At(n, o);
    return J(a), S(e, "position", a), S(e, "rotation", a), S(e, "scale", a), Z(() => {
      t.remove(a), K(a);
    }), G("mesh", a), s({ three: a }), (i, c) => I(i.$slots, "default");
  }
}), mn = /* @__PURE__ */ L({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = g("scene"), n = new O(), o = new q({ color: "black" }), a = new be(n, o);
    return J(a), S(e, "position", a), S(e, "rotation", a), S(e, "scale", a), Z(() => {
      t.remove(a), K(a);
    }), G("mesh", a), s({ three: a }), (i, c) => I(i.$slots, "default");
  }
}), dn = /* @__PURE__ */ L({
  __name: "Mesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    geometry: { default: null },
    material: { default: null },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = g("scene"), n = new O(), o = new ve(), a = new _e(n, o);
    a.castShadow = !0, a.receiveShadow = !0, J(a), S(e, "position", a), S(e, "rotation", a), S(e, "scale", a);
    function i() {
      a.castShadow = e.castShadow, a.receiveShadow = e.receiveShadow;
    }
    i(), u(e, "castShadow", i), u(e, "receiveShadow", i);
    const c = g("getGeometry"), m = g("getMaterial");
    return ie(() => {
      if (e.geometry) {
        const h = c(e.geometry);
        a.geometry = h;
      }
      if (e.material) {
        const h = m(e.material);
        a.material = h;
      }
    }), Z(() => {
      t.remove(a), K(a);
    }), G("mesh", a), s({ three: a }), (h, d) => I(h.$slots, "default");
  }
}), hn = /* @__PURE__ */ L({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = g("scene"), n = new O(), o = new oe({ color: "red", sizeAttenuation: !1, size: 2 }), a = new ue(n, o);
    return J(a), S(e, "position", a), S(e, "rotation", a), S(e, "scale", a), Z(() => {
      t.remove(a), K(a);
    }), G("mesh", a), s({ three: a }), (i, c) => I(i.$slots, "default");
  }
}), fn = /^[og]\s*(.+)?/, pn = /^mtllib /, gn = /^usemtl /, yn = /^usemap /, Qe = new T(), we = new T(), et = new T(), tt = new T(), $ = new T(), ce = new X();
function wn() {
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
          const i = {
            index: this.materials.length,
            name: n || "",
            mtllib: Array.isArray(o) && o.length > 0 ? o[o.length - 1] : "",
            smooth: a !== void 0 ? a.smooth : this.smooth,
            groupStart: a !== void 0 ? a.groupEnd : 0,
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
          return this.materials.push(i), i;
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
      Qe.fromArray(n, s), we.fromArray(n, e), et.fromArray(n, t), $.subVectors(et, we), tt.subVectors(Qe, we), $.cross(tt), $.normalize(), o.push($.x, $.y, $.z), o.push($.x, $.y, $.z), o.push($.x, $.y, $.z);
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
    addFace: function(s, e, t, n, o, a, i, c, m) {
      const h = this.vertices.length;
      let d = this.parseVertexIndex(s, h), y = this.parseVertexIndex(e, h), f = this.parseVertexIndex(t, h);
      if (this.addVertex(d, y, f), this.addColor(d, y, f), i !== void 0 && i !== "") {
        const w = this.normals.length;
        d = this.parseNormalIndex(i, w), y = this.parseNormalIndex(c, w), f = this.parseNormalIndex(m, w), this.addNormal(d, y, f);
      } else
        this.addFaceNormal(d, y, f);
      if (n !== void 0 && n !== "") {
        const w = this.uvs.length;
        d = this.parseUVIndex(n, w), y = this.parseUVIndex(o, w), f = this.parseUVIndex(a, w), this.addUV(d, y, f), this.object.geometry.hasUVIndices = !0;
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
class bn extends Gt {
  constructor(s) {
    super(s), this.materials = null;
  }
  load(s, e, t, n) {
    const o = this, a = new Ct(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(s, function(i) {
      try {
        e(o.parse(i));
      } catch (c) {
        n ? n(c) : console.error(c), o.manager.itemError(s);
      }
    }, t, n);
  }
  setMaterials(s) {
    return this.materials = s, this;
  }
  parse(s) {
    const e = new wn();
    s.indexOf(`\r
`) !== -1 && (s = s.replace(/\r\n/g, `
`)), s.indexOf(`\\
`) !== -1 && (s = s.replace(/\\\n/g, ""));
    const t = s.split(`
`);
    let n = "", o = "", a = 0, i = [];
    const c = typeof "".trimLeft == "function";
    for (let d = 0, y = t.length; d < y; d++)
      if (n = t[d], n = c ? n.trimLeft() : n.trim(), a = n.length, a !== 0 && (o = n.charAt(0), o !== "#"))
        if (o === "v") {
          const f = n.split(/\s+/);
          switch (f[0]) {
            case "v":
              e.vertices.push(
                parseFloat(f[1]),
                parseFloat(f[2]),
                parseFloat(f[3])
              ), f.length >= 7 ? (ce.setRGB(
                parseFloat(f[4]),
                parseFloat(f[5]),
                parseFloat(f[6])
              ).convertSRGBToLinear(), e.colors.push(ce.r, ce.g, ce.b)) : e.colors.push(void 0, void 0, void 0);
              break;
            case "vn":
              e.normals.push(
                parseFloat(f[1]),
                parseFloat(f[2]),
                parseFloat(f[3])
              );
              break;
            case "vt":
              e.uvs.push(
                parseFloat(f[1]),
                parseFloat(f[2])
              );
              break;
          }
        } else if (o === "f") {
          const w = n.slice(1).trim().split(/\s+/), v = [];
          for (let M = 0, b = w.length; M < b; M++) {
            const x = w[M];
            if (x.length > 0) {
              const A = x.split("/");
              v.push(A);
            }
          }
          const p = v[0];
          for (let M = 1, b = v.length - 1; M < b; M++) {
            const x = v[M], A = v[M + 1];
            e.addFace(
              p[0],
              x[0],
              A[0],
              p[1],
              x[1],
              A[1],
              p[2],
              x[2],
              A[2]
            );
          }
        } else if (o === "l") {
          const f = n.substring(1).trim().split(" ");
          let w = [];
          const v = [];
          if (n.indexOf("/") === -1)
            w = f;
          else
            for (let p = 0, M = f.length; p < M; p++) {
              const b = f[p].split("/");
              b[0] !== "" && w.push(b[0]), b[1] !== "" && v.push(b[1]);
            }
          e.addLineGeometry(w, v);
        } else if (o === "p") {
          const w = n.slice(1).trim().split(" ");
          e.addPointGeometry(w);
        } else if ((i = fn.exec(n)) !== null) {
          const f = (" " + i[0].slice(1).trim()).slice(1);
          e.startObject(f);
        } else if (gn.test(n))
          e.object.startMaterial(n.substring(7).trim(), e.materialLibraries);
        else if (pn.test(n))
          e.materialLibraries.push(n.substring(7).trim());
        else if (yn.test(n))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (o === "s") {
          if (i = n.split(" "), i.length > 1) {
            const w = i[1].trim().toLowerCase();
            e.object.smooth = w !== "0" && w !== "off";
          } else
            e.object.smooth = !0;
          const f = e.object.currentMaterial();
          f && (f.smooth = e.object.smooth);
        } else {
          if (n === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + n + '"');
        }
    e.finalize();
    const m = new Me();
    if (m.materialLibraries = [].concat(e.materialLibraries), !(e.objects.length === 1 && e.objects[0].geometry.vertices.length === 0) === !0)
      for (let d = 0, y = e.objects.length; d < y; d++) {
        const f = e.objects[d], w = f.geometry, v = f.materials, p = w.type === "Line", M = w.type === "Points";
        let b = !1;
        if (w.vertices.length === 0)
          continue;
        const x = new O();
        x.setAttribute("position", new Y(w.vertices, 3)), w.normals.length > 0 && x.setAttribute("normal", new Y(w.normals, 3)), w.colors.length > 0 && (b = !0, x.setAttribute("color", new Y(w.colors, 3))), w.hasUVIndices === !0 && x.setAttribute("uv", new Y(w.uvs, 2));
        const A = [];
        for (let k = 0, re = v.length; k < re; k++) {
          const D = v[k], Q = D.name + "_" + D.smooth + "_" + b;
          let C = e.materials[Q];
          if (this.materials !== null) {
            if (C = this.materials.create(D.name), p && C && !(C instanceof q)) {
              const j = new q();
              He.prototype.copy.call(j, C), j.color.copy(C.color), C = j;
            } else if (M && C && !(C instanceof oe)) {
              const j = new oe({ size: 10, sizeAttenuation: !1 });
              He.prototype.copy.call(j, C), j.color.copy(C.color), j.map = C.map, C = j;
            }
          }
          C === void 0 && (p ? C = new q() : M ? C = new oe({ size: 1, sizeAttenuation: !1 }) : C = new Tt(), C.name = D.name, C.flatShading = !D.smooth, C.vertexColors = b, e.materials[Q] = C), A.push(C);
        }
        let P;
        if (A.length > 1) {
          for (let k = 0, re = v.length; k < re; k++) {
            const D = v[k];
            x.addGroup(D.groupStart, D.groupCount, k);
          }
          p ? P = new be(x, A) : M ? P = new ue(x, A) : P = new _e(x, A);
        } else
          p ? P = new be(x, A[0]) : M ? P = new ue(x, A[0]) : P = new _e(x, A[0]);
        P.name = f.name, m.add(P);
      }
    else if (e.vertices.length > 0) {
      const d = new oe({ size: 1, sizeAttenuation: !1 }), y = new O();
      y.setAttribute("position", new Y(e.vertices, 3)), e.colors.length > 0 && e.colors[0] !== void 0 && (y.setAttribute("color", new Y(e.colors, 3)), d.vertexColors = !0);
      const f = new ue(y, d);
      m.add(f);
    }
    return m;
  }
}
const _n = /* @__PURE__ */ L({
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
    const t = r, n = new bn(), o = g("scene"), a = new Me();
    a.castShadow = !0, a.receiveShadow = !0, o.add(a), S(t, "position", a), S(t, "rotation", a), S(t, "scale", a);
    function i() {
      n.load(
        t.url,
        function(c) {
          for (const m of c.children)
            a.add(m), m.material = a.material, S(t, "position", a, !1), S(t, "rotation", a, !1), S(t, "scale", a, !1);
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
    return i(), E(
      () => t.url,
      () => i()
    ), G("mesh", a), s({
      three: a
    }), (c, m) => I(c.$slots, "default");
  }
}), Mn = /* @__PURE__ */ L({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = g("scene"), n = new Ot(e.size);
    return t.add(n), S(e, "position", n), S(e, "rotation", n), S(e, "scale", n), G("mesh", n), s({ three: n }), (o, a) => I(o.$slots, "default");
  }
}), vn = {
  name: "BoxGeometry",
  render: () => null
}, Pn = /* @__PURE__ */ L({
  ...vn,
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
    const e = r;
    function t(c, m, h, d, y, f) {
      return new Rt(c, m, h, d, y, f);
    }
    const n = B(new O());
    n.name = e.name;
    const o = g("mesh", null);
    o && (o.geometry = n);
    const a = g("addGeometry");
    a(n);
    function i() {
      const c = t(
        e.width,
        e.height,
        e.depth,
        e.widthSegments,
        e.heightSegments,
        e.depthSegments
      );
      F(n, c);
    }
    return i(), u(e, "name", () => {
      n.name = e.name;
    }), u(e, "width", i), u(e, "height", i), u(e, "depth", i), u(e, "widthSegments", i), u(e, "heightSegments", i), u(e, "depthSegments", i), s({ three: n }), { props: e, makeBox: t, three: n, mesh: o, addGeometry: a, redoGeometry: i };
  }
}), Sn = {
  name: "BufferGeometry",
  render: () => null
}, Ln = /* @__PURE__ */ L({
  ...Sn,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] },
    uvs: { default: () => [] }
  },
  setup(r, { expose: s }) {
    const e = r;
    function t(c, m, h) {
      const d = new O(), y = new Float32Array(c), f = new Float32Array(h);
      return d.setAttribute("position", new Ye(y, 3)), d.setAttribute("uv", new Ye(f, 2)), e.faces.length > 0 && d.setIndex(m), d;
    }
    const n = B(t(e.vertices, e.faces, e.uvs));
    n.name = e.name;
    const o = g("mesh", null);
    o && (o.geometry = n);
    const a = g("addGeometry");
    a(n);
    function i(c, m, h) {
      const d = t(c, m, h);
      F(n, d);
    }
    return E(
      () => e.vertices,
      (c) => {
        i(c, e.faces, e.uvs);
      },
      { deep: !0, immediate: !0 }
    ), E(
      () => e.faces,
      (c) => {
        i(e.vertices, c, e.uvs);
      },
      { deep: !0, immediate: !0 }
    ), s({ three: n }), { props: e, makeGeometry: t, three: n, mesh: o, addGeometry: a, redoGeometry: i };
  }
}), xn = {
  name: "CircleGeometry",
  render: () => null
}, En = /* @__PURE__ */ L({
  ...xn,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    segments: { default: 32 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(r, { expose: s }) {
    const e = r;
    function t(c, m, h, d) {
      return new zt(c, m, h, d);
    }
    const n = B(new O());
    n.name = e.name;
    const o = g("mesh", null);
    o && (o.geometry = n);
    const a = g("addGeometry");
    a(n);
    function i() {
      const c = t(e.radius, e.segments, e.thetaStart, e.thetaLength);
      F(n, c);
    }
    return i(), u(e, "radius", i), u(e, "segments", i), u(e, "thetaStart", i), u(e, "thetaLength", i), s({ three: n }), { props: e, makeCircle: t, three: n, mesh: o, addGeometry: a, redoGeometry: i };
  }
}), An = {
  name: "ConeGeometry",
  render: () => null
}, Gn = /* @__PURE__ */ L({
  ...An,
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
    const e = r;
    function t(c, m, h, d, y, f, w) {
      return new It(c, m, h, d, y, f, w);
    }
    const n = B(new O());
    n.name = e.name;
    const o = g("mesh", null);
    o && (o.geometry = n);
    const a = g("addGeometry");
    a(n);
    function i() {
      const c = t(
        e.radius,
        e.height,
        e.radialSegments,
        e.heightSegments,
        e.openEnded,
        e.thetaStart,
        e.thetaLength
      );
      F(n, c);
    }
    return i(), u(e, "radius", i), u(e, "height", i), u(e, "radialSegments", i), u(e, "heightSegments", i), u(e, "openEnded", i), u(e, "thetaStart", i), u(e, "thetaLength", i), s({ three: n }), { props: e, makeCone: t, three: n, mesh: o, addGeometry: a, redoGeometry: i };
  }
}), Cn = {
  name: "CylinderGeometry",
  render: () => null
}, Tn = /* @__PURE__ */ L({
  ...Cn,
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
    const e = r;
    function t(c, m, h, d, y, f, w, v) {
      return new kt(
        c,
        m,
        h,
        d,
        y,
        f,
        w,
        v
      );
    }
    const n = B(new O());
    n.name = e.name;
    const o = g("mesh", null);
    o && (o.geometry = n);
    const a = g("addGeometry");
    a(n);
    function i() {
      const c = t(
        e.radiusTop,
        e.radiusBottom,
        e.height,
        e.radialSegments,
        e.heightSegments,
        e.openEnded,
        e.thetaStart,
        e.thetaLength
      );
      F(n, c);
    }
    return i(), u(e, "radiusTop", i), u(e, "radiusBottom", i), u(e, "height", i), u(e, "radialSegments", i), u(e, "heightSegments", i), u(e, "openEnded", i), u(e, "thetaStart", i), u(e, "thetaLength", i), s({ three: n }), { props: e, makeCylinder: t, three: n, mesh: o, addGeometry: a, redoGeometry: i };
  }
}), On = {
  name: "EdgesGeometry",
  render: () => null
}, Rn = /* @__PURE__ */ L({
  ...On,
  props: {
    geometry: null
  },
  setup(r, { expose: s }) {
    const e = r, t = B(new O()), n = g("mesh", null);
    n && (n.geometry = t);
    const o = g("getGeometry"), a = g("addGeometry");
    a(t);
    function i() {
      const h = new Dt(o(e.geometry));
      F(t, h);
      const d = n;
      "isLine" in d && d.computeLineDistances();
    }
    let c = E(
      o(e.geometry),
      () => {
        i();
      },
      { deep: !0, immediate: !0 }
    );
    u(e, "geometry", () => {
      c(), c = E(
        o(e.geometry),
        () => {
          i();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const m = () => {
      o(e.geometry) === void 0 ? me(() => m) : i();
    };
    return me(() => m), s({ three: t }), { props: e, three: t, mesh: n, getGeometry: o, addGeometry: a, redoGeometry: i, get unwatch() {
      return c;
    }, set unwatch(h) {
      c = h;
    }, waitUntilGeometryChanged: m };
  }
});
class de extends O {
  constructor(s = (n, o, a) => a.set(n, o, Math.cos(n) * Math.sin(o)), e = 8, t = 8) {
    super(), this.type = "ParametricGeometry", this.parameters = {
      func: s,
      slices: e,
      stacks: t
    };
    const n = [], o = [], a = [], i = [], c = 1e-5, m = new T(), h = new T(), d = new T(), y = new T(), f = new T();
    s.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
    const w = e + 1;
    for (let v = 0; v <= t; v++) {
      const p = v / t;
      for (let M = 0; M <= e; M++) {
        const b = M / e;
        s(b, p, h), o.push(h.x, h.y, h.z), b - c >= 0 ? (s(b - c, p, d), y.subVectors(h, d)) : (s(b + c, p, d), y.subVectors(d, h)), p - c >= 0 ? (s(b, p - c, d), f.subVectors(h, d)) : (s(b, p + c, d), f.subVectors(d, h)), m.crossVectors(y, f).normalize(), a.push(m.x, m.y, m.z), i.push(b, p);
      }
    }
    for (let v = 0; v < t; v++)
      for (let p = 0; p < e; p++) {
        const M = v * w + p, b = v * w + p + 1, x = (v + 1) * w + p + 1, A = (v + 1) * w + p;
        n.push(M, b, A), n.push(b, x, A);
      }
    this.setIndex(n), this.setAttribute("position", new Y(o, 3)), this.setAttribute("normal", new Y(a, 3)), this.setAttribute("uv", new Y(i, 2));
  }
}
const se = {
  klein: function(r, s, e) {
    s *= Math.PI, r *= 2 * Math.PI, s = s * 2;
    let t, n;
    s < Math.PI ? (t = 3 * Math.cos(s) * (1 + Math.sin(s)) + 2 * (1 - Math.cos(s) / 2) * Math.cos(s) * Math.cos(r), n = -8 * Math.sin(s) - 2 * (1 - Math.cos(s) / 2) * Math.sin(s) * Math.cos(r)) : (t = 3 * Math.cos(s) * (1 + Math.sin(s)) + 2 * (1 - Math.cos(s) / 2) * Math.cos(r + Math.PI), n = -8 * Math.sin(s));
    const o = -2 * (1 - Math.cos(s) / 2) * Math.sin(r);
    e.set(t, o, n);
  },
  plane: function(r, s) {
    return function(e, t, n) {
      const o = e * r, a = 0, i = t * s;
      n.set(o, a, i);
    };
  },
  mobius: function(r, s, e) {
    r = r - 0.5;
    const t = 2 * Math.PI * s, n = 2, o = Math.cos(t) * (n + r * Math.cos(t / 2)), a = Math.sin(t) * (n + r * Math.cos(t / 2)), i = r * Math.sin(t / 2);
    e.set(o, a, i);
  },
  mobius3d: function(r, s, e) {
    r *= Math.PI, s *= 2 * Math.PI, r = r * 2;
    const t = r / 2, n = 2.25, o = 0.125, a = 0.65;
    let i = o * Math.cos(s) * Math.cos(t) - a * Math.sin(s) * Math.sin(t);
    const c = o * Math.cos(s) * Math.sin(t) + a * Math.sin(s) * Math.cos(t), m = (n + i) * Math.sin(r);
    i = (n + i) * Math.cos(r), e.set(i, m, c);
  }
};
se.TubeGeometry = class extends de {
  constructor(s, e = 64, t = 1, n = 8, o = !1) {
    const a = e + 1, i = s.computeFrenetFrames(e, o), c = i.tangents, m = i.normals, h = i.binormals, d = new T();
    function y(f, w, v) {
      w *= 2 * Math.PI;
      const p = Math.floor(f * (a - 1));
      s.getPointAt(f, d);
      const M = m[p], b = h[p], x = -t * Math.cos(w), A = t * Math.sin(w);
      d.x += x * M.x + A * b.x, d.y += x * M.y + A * b.y, d.z += x * M.z + A * b.z, v.copy(d);
    }
    super(y, e, n), this.tangents = c, this.normals = m, this.binormals = h, this.path = s, this.segments = e, this.radius = t, this.segmentsRadius = n, this.closed = o;
  }
};
se.TorusKnotGeometry = class extends se.TubeGeometry {
  constructor(s = 200, e = 40, t = 64, n = 8, o = 2, a = 3) {
    class i extends Bt {
      getPoint(y, f = new T()) {
        const w = f;
        y *= Math.PI * 2;
        const v = 0.5, p = (1 + v * Math.cos(a * y)) * Math.cos(o * y), M = (1 + v * Math.cos(a * y)) * Math.sin(o * y), b = v * Math.sin(a * y);
        return w.set(p, M, b).multiplyScalar(s);
      }
    }
    const c = t, m = n, h = new i();
    super(h, c, e, m, !0, !1), this.radius = s, this.tube = e, this.segmentsT = t, this.segmentsR = n, this.p = o, this.q = a;
  }
};
se.SphereGeometry = class extends de {
  constructor(s, e, t) {
    function n(o, a, i) {
      o *= Math.PI, a *= 2 * Math.PI;
      const c = s * Math.sin(o) * Math.cos(a), m = s * Math.sin(o) * Math.sin(a), h = s * Math.cos(o);
      i.set(c, m, h);
    }
    super(n, e, t);
  }
};
se.PlaneGeometry = class extends de {
  constructor(s, e, t, n) {
    function o(a, i, c) {
      const m = a * s, h = 0, d = i * e;
      c.set(m, h, d);
    }
    super(o, t, n);
  }
};
const zn = {
  name: "Parametriceometry",
  render: () => null
}, In = /* @__PURE__ */ L({
  ...zn,
  props: {
    name: { default: "" },
    function: { type: Function, default: se.klein },
    slices: { default: 8 },
    stacks: { default: 8 }
  },
  setup(r, { expose: s }) {
    const e = r;
    function t(c, m, h) {
      return new de(c, m, h);
    }
    const n = B(new O());
    n.name = e.name;
    const o = g("mesh", null);
    o && (o.geometry = n);
    const a = g("addGeometry");
    a(n);
    function i() {
      const c = t(e.function, e.slices, e.stacks);
      F(n, c);
    }
    return i(), u(e, "function", i), u(e, "stacks", i), u(e, "slices", i), s({ three: n }), { props: e, makePlane: t, three: n, mesh: o, addGeometry: a, redoGeometry: i };
  }
}), kn = {
  name: "PlaneGeometry",
  render: () => null
}, Dn = /* @__PURE__ */ L({
  ...kn,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(r, { expose: s }) {
    const e = r;
    function t(c, m, h, d) {
      return new $t(c, m, h, d);
    }
    const n = B(new O());
    n.name = e.name;
    const o = g("mesh", null);
    o && (o.geometry = n);
    const a = g("addGeometry");
    a(n);
    function i() {
      const c = t(e.width, e.height, e.widthSegments, e.heightSegments);
      F(n, c);
    }
    return i(), u(e, "width", i), u(e, "height", i), u(e, "widthSegments", i), u(e, "heightSegments", i), s({ three: n }), { props: e, makePlane: t, three: n, mesh: o, addGeometry: a, redoGeometry: i };
  }
}), Bn = {
  name: "RingGeometry",
  render: () => null
}, $n = /* @__PURE__ */ L({
  ...Bn,
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
    const e = r;
    function t(c, m, h, d, y, f) {
      return new jt(c, m, h, d, y, f);
    }
    const n = B(new O());
    n.name = e.name;
    const o = g("mesh", null);
    o && (o.geometry = n);
    const a = g("addGeometry");
    a(n);
    function i() {
      const c = t(
        e.innerRadius,
        e.outerRadius,
        e.thetaSegments,
        e.phiSegments,
        e.thetaStart,
        e.thetaLength
      );
      F(n, c);
    }
    return i(), u(e, "innerRadius", i), u(e, "outerRadius", i), u(e, "thetaSegments", i), u(e, "phiSegments", i), u(e, "thetaStart", i), u(e, "thetaLength", i), s({ three: n }), { props: e, makeRing: t, three: n, mesh: o, addGeometry: a, redoGeometry: i };
  }
}), jn = {
  name: "SphereGeometry",
  render: () => null
}, Nn = /* @__PURE__ */ L({
  ...jn,
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
    const e = r;
    function t(c, m, h, d, y, f, w) {
      return new Nt(c, m, h, d, y, f, w);
    }
    const n = B(new O());
    n.name = e.name;
    const o = g("mesh", null);
    o && (o.geometry = n);
    const a = g("addGeometry");
    a(n);
    function i() {
      const c = t(
        e.radius,
        e.widthSegments,
        e.heightSegments,
        e.phiStart,
        e.phiLength,
        e.thetaStart,
        e.thetaLength
      );
      F(n, c);
    }
    return i(), u(e, "radius", i), u(e, "widthSegments", i), u(e, "heightSegments", i), u(e, "phiStart", i), u(e, "phiLength", i), u(e, "thetaStart", i), u(e, "thetaLength", i), s({ three: n }), { props: e, makeSphere: t, three: n, mesh: o, addGeometry: a, redoGeometry: i };
  }
}), Vn = {
  name: "WireframeGeometry",
  render: () => null
}, Fn = /* @__PURE__ */ L({
  ...Vn,
  props: {
    geometry: null
  },
  setup(r, { expose: s }) {
    const e = r, t = B(new O()), n = g("mesh", null);
    n && (n.geometry = t);
    const o = g("getGeometry"), a = g("addGeometry");
    a(t);
    function i() {
      const h = new Vt(o(e.geometry));
      F(t, h);
      const d = n;
      "isLine" in d && d.computeLineDistances();
    }
    let c = E(
      o(e.geometry),
      () => {
        i();
      },
      { deep: !0, immediate: !0 }
    );
    u(e, "geometry", () => {
      c(), c = E(
        o(e.geometry),
        () => {
          i();
        },
        { immediate: !0, deep: !0 }
      );
    });
    const m = () => {
      o(e.geometry) === void 0 ? me(() => m) : i();
    };
    return me(() => m), s({ three: t }), { props: e, three: t, mesh: n, getGeometry: o, addGeometry: a, redoGeometry: i, get unwatch() {
      return c;
    }, set unwatch(h) {
      c = h;
    }, waitUntilGeometryChanged: m };
  }
}), Un = {
  name: "LineBasicMaterial",
  render: () => null
}, Hn = /* @__PURE__ */ L({
  ...Un,
  props: {
    color: { default: 16777215 },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = new q({ color: e.color });
    t.name = e.name;
    const n = g("addMaterial");
    n(t);
    const o = g("mesh", null);
    o && (o.material = t);
    function a() {
      e.color && (t.color = new X(e.color)), t.opacity = e.opacity, t.transparent = e.transparent, t.needsUpdate = !0;
    }
    return a(), u(e, "color", a), u(e, "opacity", a), u(e, "transparent", a), G("material", t), s({ three: t }), { props: e, three: t, addMaterial: n, mesh: o, applyProps: a };
  }
}), Yn = {
  name: "LineDashedMaterial",
  render: () => null
}, Zn = /* @__PURE__ */ L({
  ...Yn,
  props: {
    color: { default: 16777215 },
    scale: { default: 1 },
    dashSize: { default: 3 },
    gapSize: { default: 1 },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = new Ft({ color: e.color });
    t.name = e.name;
    const n = g("addMaterial");
    n(t);
    const o = g("mesh", null);
    o && (o.material = t);
    function a() {
      t.color = new X(e.color), t.scale = e.scale, t.dashSize = e.dashSize, t.gapSize = e.gapSize, t.opacity = e.opacity, t.transparent = e.transparent, t.needsUpdate = !0;
    }
    return a(), u(e, "color", a), u(e, "scale", a), u(e, "dashSize", a), u(e, "gapSize", a), u(e, "opacity", a), u(e, "transparent", a), G("material", t), s({ three: t }), { props: e, three: t, addMaterial: n, mesh: o, applyProps: a };
  }
}), Xn = {
  name: "MeshBasicMaterial"
}, Kn = /* @__PURE__ */ L({
  ...Xn,
  props: {
    color: null,
    side: { default: Pe },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = new ve();
    t.name = e.name, g("addMaterial")(t);
    const o = g("mesh", null);
    o && (o.material = t);
    function a() {
      e.color !== void 0 && (t.color = new X(e.color)), t.side = e.side, t.opacity = e.opacity, t.transparent = e.transparent, t.vertexColors = e.vertexColors, t.needsUpdate = !0;
    }
    return a(), G("material", t), u(e, "color", a), u(e, "side", a), u(e, "opacity", a), u(e, "transparent", a), u(e, "vertexColors", a), s({ three: t }), (i, c) => I(i.$slots, "default");
  }
}), Wn = {
  name: "MeshLambertMaterial"
}, qn = /* @__PURE__ */ L({
  ...Wn,
  props: {
    color: { default: 16777215 },
    name: { default: "" },
    side: { default: Pe },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = new Ut();
    t.name = e.name, g("addMaterial")(t);
    const o = g("mesh", null);
    o && (o.material = t);
    function a(i) {
      i.color && (t.color = new X(i.color)), i.side && (t.side = i.side);
    }
    return a(e), E(
      () => e.color,
      () => a(e)
    ), E(
      () => e.side,
      () => a(e)
    ), E(
      () => e.opacity,
      () => {
        t.opacity = e.opacity;
      },
      { immediate: !0 }
    ), E(
      () => e.transparent,
      () => {
        t.transparent = e.transparent;
      },
      { immediate: !0 }
    ), G("material", t), s({ three: t }), (i, c) => I(i.$slots, "default");
  }
}), Jn = {
  name: "PointsMaterial",
  render: () => null
}, Qn = /* @__PURE__ */ L({
  ...Jn,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    name: { default: "" },
    size: { default: 1 },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = new oe({ color: e.color, sizeAttenuation: e.sizeAttenuation, size: e.size });
    t.name = e.name;
    const n = g("mesh", null), o = g("addMaterial");
    o(t), n && (n.material = t);
    function a() {
      t.color = new X(e.color), t.size = e.size, t.sizeAttenuation = e.sizeAttenuation, t.opacity = e.opacity, t.transparent = e.transparent, t.needsUpdate = !0;
    }
    return a(), u(e, "color", a), u(e, "size", a), u(e, "sizeAttenuation", a), u(e, "opacity", a), u(e, "transparent", a), G("material", t), s({ three: t }), { props: e, three: t, mesh: n, addMaterial: o, applyProps: a };
  }
}), ea = {
  name: "MeshNormalMaterial"
}, ta = /* @__PURE__ */ L({
  ...ea,
  props: {
    side: { default: Pe },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = new Ht();
    t.name = e.name, g("addMaterial")(t);
    const o = g("mesh", null);
    return o && (o.material = t), E(
      () => e.side,
      () => {
        t.side = e.side;
      },
      { immediate: !0 }
    ), E(
      () => e.opacity,
      () => {
        t.opacity = e.opacity;
      },
      { immediate: !0 }
    ), E(
      () => e.transparent,
      () => {
        t.transparent = e.transparent;
      },
      { immediate: !0 }
    ), G("material", t), s({ three: t }), (a, i) => I(a.$slots, "default");
  }
}), na = {
  name: "AmbientLight",
  render: () => null
}, aa = /* @__PURE__ */ L({
  ...na,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(r, { expose: s }) {
    const e = r, t = g("scene"), n = new Yt();
    t.add(n);
    function o(a) {
      n.color = new X(a.color), n.intensity = a.intensity;
    }
    return o(e), E(
      () => e.color,
      () => o(e)
    ), E(
      () => e.intensity,
      () => o(e)
    ), s({ three: n }), { props: e, scene: t, three: n, applyProps: o };
  }
}), oa = {
  name: "PointLight",
  render: () => null
}, sa = /* @__PURE__ */ L({
  ...oa,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: s }) {
    const e = r, t = g("scene"), n = new Zt();
    t.add(n), S(e, "position", n), S(e, "rotation", n), S(e, "scale", n);
    function o(a) {
      n.color = new X(a.color), n.intensity = a.intensity, n.castShadow = a.castShadow;
    }
    return o(e), E(
      () => e.color,
      () => o(e)
    ), E(
      () => e.intensity,
      () => o(e)
    ), E(
      () => e.castShadow,
      () => o(e)
    ), s({ three: n }), { props: e, scene: t, three: n, applyProps: o };
  }
}), ra = {
  name: "TextureLoader",
  render: () => null
}, ia = /* @__PURE__ */ L({
  ...ra,
  props: {
    url: null,
    wrapS: { default: Ze },
    wrapT: { default: Ze }
  },
  setup(r, { expose: s }) {
    const e = r, t = g("material"), n = W(new Xt());
    function o() {
      new Kt().loadAsync(e.url).then((i) => {
        n.value = i, "map" in t && (t.map = n.value, t.needsUpdate = !0), a();
      });
    }
    function a() {
      n.value.wrapS = e.wrapS, n.value.wrapT = e.wrapT, n.value.needsUpdate = !0;
    }
    return o(), u(e, "url", o), u(e, "wrapS", a), u(e, "wrapT", a), s({ three: n }), { props: e, material: t, three: n, load: o, applyProps: a };
  }
});
function fa(r) {
  r.component("Renderer", qt), r.component("Scene", Jt), r.component("PerspectiveCamera", en), r.component("OrthographicCamera", nn), r.component("OrbitControls", sn), r.component("Group", rn), r.component("InstancedMesh", ln), r.component("Line", cn), r.component("LineLoop", un), r.component("LineSegments", mn), r.component("Mesh", dn), r.component("Points", hn), r.component("OBJLoader", _n), r.component("AxesHelper", Mn), r.component("BoxGeometry", Pn), r.component("BufferGeometry", Ln), r.component("CircleGeometry", En), r.component("ConeGeometry", Gn), r.component("CylinderGeometry", Tn), r.component("EdgesGeometry", Rn), r.component("ParametricGeometry", In), r.component("PlaneGeometry", Dn), r.component("RingGeometry", $n), r.component("SphereGeometry", Nn), r.component("WireframeGeometry", Fn), r.component("LineBasicMaterial", Hn), r.component("LineDashedMaterial", Zn), r.component("MeshBasicMaterial", Kn), r.component("MeshLambertMaterial", qn), r.component("PointsMaterial", Qn), r.component("MeshNormalMaterial", ta), r.component("AmbientLight", aa), r.component("PointLight", sa), r.component("TextureLoader", ia);
}
export {
  aa as AmbientLight,
  Mn as AxesHelper,
  Pn as BoxGeometry,
  Ln as BufferGeometry,
  En as CircleGeometry,
  Gn as ConeGeometry,
  Tn as CylinderGeometry,
  Rn as EdgesGeometry,
  rn as Group,
  ln as InstancedMesh,
  cn as Line,
  Hn as LineBasicMaterial,
  Zn as LineDashedMaterial,
  un as LineLoop,
  mn as LineSegments,
  dn as Mesh,
  Kn as MeshBasicMaterial,
  qn as MeshLambertMaterial,
  ta as MeshNormalMaterial,
  _n as OBJLoader,
  sn as OrbitControls,
  nn as OrthographicCamera,
  In as ParametricGeometry,
  en as PerspectiveCamera,
  Dn as PlaneGeometry,
  sa as PointLight,
  hn as Points,
  Qn as PointsMaterial,
  qt as Renderer,
  $n as RingGeometry,
  Jt as Scene,
  Nn as SphereGeometry,
  ia as TextureLoader,
  Fn as WireframeGeometry,
  fa as install
};

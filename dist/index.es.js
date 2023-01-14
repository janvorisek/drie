import { watch as _, inject as b, onMounted as ae, onUnmounted as ee, defineComponent as E, reactive as H, ref as J, provide as S, openBlock as ht, createElementBlock as gt, Fragment as yt, renderSlot as G, createElementVNode as bt, nextTick as ce } from "vue";
import { Vector3 as z, Raycaster as Ne, Vector2 as B, WebGLRenderer as wt, Scene as vt, Color as U, PerspectiveCamera as _t, OrthographicCamera as Pt, EventDispatcher as Mt, MOUSE as W, TOUCH as K, Quaternion as Be, Spherical as $e, Group as we, BufferGeometry as $, LineBasicMaterial as oe, LineSegments as ye, MeshBasicMaterial as Qe, Mesh as be, PointsMaterial as Q, Points as le, Loader as xt, FileLoader as At, Float32BufferAttribute as q, Material as Ve, MeshPhongMaterial as Et, AxesHelper as Lt, BoxGeometry as St, BufferAttribute as Fe, EdgesGeometry as Ot, PlaneGeometry as Tt, SphereGeometry as Ct, WireframeGeometry as Rt, FrontSide as ve, MeshLambertMaterial as zt, MeshNormalMaterial as kt, AmbientLight as Dt, PointLight as Gt, ClampToEdgeWrapping as Ue, Texture as It, TextureLoader as jt } from "three";
const He = (s) => s === void 0 ? new z(0, 0, 0) : "x" in s ? new z(s.x, s.y, s.z) : new z(s[0], s[1], s[2]), Ye = (s, a, t) => {
  t[s].isVector3 ? t[s].set(a.x, a.y, a.z) : "isEuler" in t[s] && t[s].setFromVector3(a);
}, x = (s, a, t, e = !0) => {
  if (t !== null) {
    if (s[a] !== void 0) {
      const n = He(s[a]);
      Ye(a, n, t);
    }
    e && _(
      () => s[a],
      () => {
        if (s[a] !== void 0) {
          const n = He(s[a]);
          Ye(a, n, t);
        }
      }
    );
  }
}, g = (s, a, t) => {
  _(
    () => s[a],
    () => {
      t();
    }
  );
};
function te(s, a) {
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
  const a = b("scene"), t = b("parent", void 0);
  ae(() => {
    t ? t.add(s) : a.add(s);
  }), ee(() => {
    t ? t.remove(s) : a.remove(s);
  });
}
function Nt(s, a, t) {
  const e = b("camera"), n = b("canvas");
  b("scene");
  const o = (m) => {
    const v = new Ne(), d = Ze(m);
    v.setFromCamera(d, e.value);
    const y = v.intersectObjects(s);
    y.length > 0 && t("click", y, d);
  };
  let r = !1, l = [];
  const c = (m) => {
    const v = new Ne(), d = Ze(m);
    v.setFromCamera(d, e.value);
    const y = v.intersectObjects(s);
    y.length > 0 ? (l = y, r === !1 && t("mouseenter", y, d), r = !0, t("mousemove", y, d)) : (r && t("mouseleave", l, d), r = !1, l = []);
  };
  ae(() => {
    a.enableRaycasting && (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c));
  }), ee(() => {
    a.enableRaycasting && (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
  }), _(
    () => a.enableRaycasting,
    (m) => {
      m ? (n == null || n.value.addEventListener("click", o), n == null || n.value.addEventListener("mousemove", c)) : (n == null || n.value.removeEventListener("click", o), n == null || n.value.removeEventListener("mousemove", c));
    }
  );
}
function Ze(s) {
  const a = new B();
  return a.x = (s.pageX - s.currentTarget.offsetLeft) / s.currentTarget.offsetWidth * 2 - 1, a.y = -((s.pageY - s.currentTarget.offsetTop) / s.currentTarget.offsetHeight) * 2 + 1, a;
}
const Bt = /* @__PURE__ */ E({
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
    let r = J(null);
    const l = J([]), c = J([]), m = J();
    S("canvas", m);
    let v = Date.now(), d = 1e3 / t.frameLimit;
    _(
      () => t.camera,
      (p) => y(p)
    );
    const y = (p) => {
      if (p) {
        const M = l.value.find((P) => P.name === p);
        M === void 0 && (r.value = null), r.value = M;
      } else
        r.value = l.value[0];
    };
    function u(p) {
      e !== null && (e.shadowMap.enabled = p.shadowMapEnabled, d = 1e3 / p.frameLimit);
    }
    ae(() => {
      e = new wt({ canvas: m.value, antialias: t.antialias, alpha: !0 }), e.setSize(1, 1), u(t), y(t.camera), new ResizeObserver((M) => {
        M.forEach((P) => {
          e && t.autoResize && e.setSize(P.contentRect.width, P.contentRect.height);
        });
      }).observe(m.value.parentElement), h();
    }), ee(() => {
      for (let p of n)
        se(p);
    });
    function h() {
      requestAnimationFrame(h);
      const p = Date.now(), M = p - v;
      if (!(d > -1 && M < d)) {
        if (v = p - M % d, t.onBeforeRender && t.onBeforeRender(), c.value.length > 0 && r)
          for (const P of c.value)
            P.value !== null && (P.value.object.uuid === r.value.uuid ? (P.value.enabled = !0, P.value.update()) : P.value.enabled = !1);
        if (r && e)
          for (const P of n)
            e.render(P, r.value);
      }
    }
    return u(t), _(
      () => t.shadowMapEnabled,
      () => u(t)
    ), _(
      () => t.frameLimit,
      () => u(t)
    ), S("addCamera", (p) => l.value.push(p)), S("addScene", (p) => n.push(p)), S("addGeometry", (p) => o.push(p)), S("getGeometry", (p) => o.find((M) => M.name === p)), S("addControls", (p) => c.value.push(p)), S("camera", r), a({ three: e }), (p, M) => (ht(), gt(yt, null, [
      G(p.$slots, "default"),
      bt("canvas", {
        ref_key: "canvas",
        ref: m
      }, null, 512)
    ], 64));
  }
}), $t = /* @__PURE__ */ E({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(s, { expose: a }) {
    const t = s, e = new vt();
    S("scene", e), b("addScene")(e);
    function n(o) {
      o.background && (e.background = new U(o.background));
    }
    return n(t), _(
      () => t.background,
      () => n(t)
    ), a({ three: e }), (o, r) => G(o.$slots, "default");
  }
}), Vt = {
  name: "PerspectiveCamera"
}, Ft = /* @__PURE__ */ E({
  ...Vt,
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
    const t = s, e = new _t(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    b("addCamera")(e);
    const n = b("canvas");
    ae(() => {
      t.name && (e.name = t.name), new ResizeObserver((l) => {
        l.forEach((c) => {
          t.autoResize && (e.aspect = c.contentRect.width / c.contentRect.height, e.updateProjectionMatrix());
        });
      }).observe(n.value);
    }), x(t, "position", e), x(t, "up", e), x(t, "lookAt", e);
    function o() {
      t.autoResize || (e.aspect = t.aspect), e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return o(), g(t, "aspect", o), g(t, "near", o), g(t, "far", o), S("parentCamera", e), a({ three: e }), (r, l) => G(r.$slots, "default");
  }
}), Ut = {
  name: "OrthographicCamera"
}, Ht = /* @__PURE__ */ E({
  ...Ut,
  props: {
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(s, { expose: a }) {
    const t = s, e = new Pt(-10, 10, 10, -10, 0.1, 1e3);
    e.lookAt(0, 0, 0), e.updateProjectionMatrix(), b("addCamera")(e);
    const n = b("canvas");
    ae(() => {
      t.name && (e.name = t.name), new ResizeObserver((l) => {
        l.forEach((c) => {
          const m = c.contentRect.width / c.contentRect.height;
          e.left = e.bottom * m, e.right = e.top * m, e.updateProjectionMatrix();
        });
      }).observe(n.value);
    }), x(t, "position", e), x(t, "up", e), x(t, "lookAt", e);
    function o() {
      e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return o(), g(t, "near", o), g(t, "far", o), S("parentCamera", e), a({ three: e }), (r, l) => G(r.$slots, "default");
  }
}), Xe = { type: "change" }, he = { type: "start" }, We = { type: "end" };
class Yt extends Mt {
  constructor(a, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = a, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new z(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: W.ROTATE, MIDDLE: W.DOLLY, RIGHT: W.PAN }, this.touches = { ONE: K.ROTATE, TWO: K.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return l.phi;
    }, this.getAzimuthalAngle = function() {
      return l.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(i) {
      i.addEventListener("keydown", ke), this._domElementKeyEvents = i;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(Xe), e.update(), o = n.NONE;
    }, this.update = function() {
      const i = new z(), f = new Be().setFromUnitVectors(a.up, new z(0, 1, 0)), C = f.clone().invert(), R = new z(), N = new Be(), X = 2 * Math.PI;
      return function() {
        const je = e.object.position;
        i.copy(je).sub(e.target), i.applyQuaternion(f), l.setFromVector3(i), e.autoRotate && o === n.NONE && Y(ne()), e.enableDamping ? (l.theta += c.theta * e.dampingFactor, l.phi += c.phi * e.dampingFactor) : (l.theta += c.theta, l.phi += c.phi);
        let V = e.minAzimuthAngle, F = e.maxAzimuthAngle;
        return isFinite(V) && isFinite(F) && (V < -Math.PI ? V += X : V > Math.PI && (V -= X), F < -Math.PI ? F += X : F > Math.PI && (F -= X), V <= F ? l.theta = Math.max(V, Math.min(F, l.theta)) : l.theta = l.theta > (V + F) / 2 ? Math.max(V, l.theta) : Math.min(F, l.theta)), l.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= m, l.radius = Math.max(e.minDistance, Math.min(e.maxDistance, l.radius)), e.enableDamping === !0 ? e.target.addScaledVector(v, e.dampingFactor) : e.target.add(v), i.setFromSpherical(l), i.applyQuaternion(C), je.copy(e.target).add(i), e.object.lookAt(e.target), e.enableDamping === !0 ? (c.theta *= 1 - e.dampingFactor, c.phi *= 1 - e.dampingFactor, v.multiplyScalar(1 - e.dampingFactor)) : (c.set(0, 0, 0), v.set(0, 0, 0)), m = 1, d || R.distanceToSquared(e.object.position) > r || 8 * (1 - N.dot(e.object.quaternion)) > r ? (e.dispatchEvent(Xe), R.copy(e.object.position), N.copy(e.object.quaternion), d = !1, !0) : !1;
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
    const r = 1e-6, l = new $e(), c = new $e();
    let m = 1;
    const v = new z();
    let d = !1;
    const y = new B(), u = new B(), h = new B(), p = new B(), M = new B(), P = new B(), T = new B(), A = new B(), O = new B(), w = [], k = {};
    function ne() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function D() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function Y(i) {
      c.theta -= i;
    }
    function L(i) {
      c.phi -= i;
    }
    const j = function() {
      const i = new z();
      return function(C, R) {
        i.setFromMatrixColumn(R, 0), i.multiplyScalar(-C), v.add(i);
      };
    }(), _e = function() {
      const i = new z();
      return function(C, R) {
        e.screenSpacePanning === !0 ? i.setFromMatrixColumn(R, 1) : (i.setFromMatrixColumn(R, 0), i.crossVectors(e.object.up, i)), i.multiplyScalar(C), v.add(i);
      };
    }(), Z = function() {
      const i = new z();
      return function(C, R) {
        const N = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const X = e.object.position;
          i.copy(X).sub(e.target);
          let re = i.length();
          re *= Math.tan(e.object.fov / 2 * Math.PI / 180), j(2 * C * re / N.clientHeight, e.object.matrix), _e(2 * R * re / N.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (j(C * (e.object.right - e.object.left) / e.object.zoom / N.clientWidth, e.object.matrix), _e(R * (e.object.top - e.object.bottom) / e.object.zoom / N.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function me(i) {
      e.object.isPerspectiveCamera ? m /= i : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * i)), e.object.updateProjectionMatrix(), d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function Pe(i) {
      e.object.isPerspectiveCamera ? m *= i : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / i)), e.object.updateProjectionMatrix(), d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function Me(i) {
      y.set(i.clientX, i.clientY);
    }
    function et(i) {
      T.set(i.clientX, i.clientY);
    }
    function xe(i) {
      p.set(i.clientX, i.clientY);
    }
    function tt(i) {
      u.set(i.clientX, i.clientY), h.subVectors(u, y).multiplyScalar(e.rotateSpeed);
      const f = e.domElement;
      Y(2 * Math.PI * h.x / f.clientHeight), L(2 * Math.PI * h.y / f.clientHeight), y.copy(u), e.update();
    }
    function nt(i) {
      A.set(i.clientX, i.clientY), O.subVectors(A, T), O.y > 0 ? me(D()) : O.y < 0 && Pe(D()), T.copy(A), e.update();
    }
    function ot(i) {
      M.set(i.clientX, i.clientY), P.subVectors(M, p).multiplyScalar(e.panSpeed), Z(P.x, P.y), p.copy(M), e.update();
    }
    function at(i) {
      i.deltaY < 0 ? Pe(D()) : i.deltaY > 0 && me(D()), e.update();
    }
    function st(i) {
      let f = !1;
      switch (i.code) {
        case e.keys.UP:
          Z(0, e.keyPanSpeed), f = !0;
          break;
        case e.keys.BOTTOM:
          Z(0, -e.keyPanSpeed), f = !0;
          break;
        case e.keys.LEFT:
          Z(e.keyPanSpeed, 0), f = !0;
          break;
        case e.keys.RIGHT:
          Z(-e.keyPanSpeed, 0), f = !0;
          break;
      }
      f && (i.preventDefault(), e.update());
    }
    function Ae() {
      if (w.length === 1)
        y.set(w[0].pageX, w[0].pageY);
      else {
        const i = 0.5 * (w[0].pageX + w[1].pageX), f = 0.5 * (w[0].pageY + w[1].pageY);
        y.set(i, f);
      }
    }
    function Ee() {
      if (w.length === 1)
        p.set(w[0].pageX, w[0].pageY);
      else {
        const i = 0.5 * (w[0].pageX + w[1].pageX), f = 0.5 * (w[0].pageY + w[1].pageY);
        p.set(i, f);
      }
    }
    function Le() {
      const i = w[0].pageX - w[1].pageX, f = w[0].pageY - w[1].pageY, C = Math.sqrt(i * i + f * f);
      T.set(0, C);
    }
    function rt() {
      e.enableZoom && Le(), e.enablePan && Ee();
    }
    function it() {
      e.enableZoom && Le(), e.enableRotate && Ae();
    }
    function Se(i) {
      if (w.length == 1)
        u.set(i.pageX, i.pageY);
      else {
        const C = pe(i), R = 0.5 * (i.pageX + C.x), N = 0.5 * (i.pageY + C.y);
        u.set(R, N);
      }
      h.subVectors(u, y).multiplyScalar(e.rotateSpeed);
      const f = e.domElement;
      Y(2 * Math.PI * h.x / f.clientHeight), L(2 * Math.PI * h.y / f.clientHeight), y.copy(u);
    }
    function Oe(i) {
      if (w.length === 1)
        M.set(i.pageX, i.pageY);
      else {
        const f = pe(i), C = 0.5 * (i.pageX + f.x), R = 0.5 * (i.pageY + f.y);
        M.set(C, R);
      }
      P.subVectors(M, p).multiplyScalar(e.panSpeed), Z(P.x, P.y), p.copy(M);
    }
    function Te(i) {
      const f = pe(i), C = i.pageX - f.x, R = i.pageY - f.y, N = Math.sqrt(C * C + R * R);
      A.set(0, N), O.set(0, Math.pow(A.y / T.y, e.zoomSpeed)), me(O.y), T.copy(A);
    }
    function lt(i) {
      e.enableZoom && Te(i), e.enablePan && Oe(i);
    }
    function ct(i) {
      e.enableZoom && Te(i), e.enableRotate && Se(i);
    }
    function Ce(i) {
      e.enabled !== !1 && (w.length === 0 && (e.domElement.setPointerCapture(i.pointerId), e.domElement.addEventListener("pointermove", de), e.domElement.addEventListener("pointerup", fe)), pt(i), i.pointerType === "touch" ? dt(i) : ut(i));
    }
    function de(i) {
      e.enabled !== !1 && (i.pointerType === "touch" ? ft(i) : mt(i));
    }
    function fe(i) {
      Ge(i), w.length === 0 && (e.domElement.releasePointerCapture(i.pointerId), e.domElement.removeEventListener("pointermove", de), e.domElement.removeEventListener("pointerup", fe)), e.dispatchEvent(We), o = n.NONE;
    }
    function Re(i) {
      Ge(i);
    }
    function ut(i) {
      let f;
      switch (i.button) {
        case 0:
          f = e.mouseButtons.LEFT;
          break;
        case 1:
          f = e.mouseButtons.MIDDLE;
          break;
        case 2:
          f = e.mouseButtons.RIGHT;
          break;
        default:
          f = -1;
      }
      switch (f) {
        case W.DOLLY:
          if (e.enableZoom === !1)
            return;
          et(i), o = n.DOLLY;
          break;
        case W.ROTATE:
          if (i.ctrlKey || i.metaKey || i.shiftKey) {
            if (e.enablePan === !1)
              return;
            xe(i), o = n.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            Me(i), o = n.ROTATE;
          }
          break;
        case W.PAN:
          if (i.ctrlKey || i.metaKey || i.shiftKey) {
            if (e.enableRotate === !1)
              return;
            Me(i), o = n.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            xe(i), o = n.PAN;
          }
          break;
        default:
          o = n.NONE;
      }
      o !== n.NONE && e.dispatchEvent(he);
    }
    function mt(i) {
      if (e.enabled !== !1)
        switch (o) {
          case n.ROTATE:
            if (e.enableRotate === !1)
              return;
            tt(i);
            break;
          case n.DOLLY:
            if (e.enableZoom === !1)
              return;
            nt(i);
            break;
          case n.PAN:
            if (e.enablePan === !1)
              return;
            ot(i);
            break;
        }
    }
    function ze(i) {
      e.enabled === !1 || e.enableZoom === !1 || o !== n.NONE || (i.preventDefault(), e.dispatchEvent(he), at(i), e.dispatchEvent(We));
    }
    function ke(i) {
      e.enabled === !1 || e.enablePan === !1 || st(i);
    }
    function dt(i) {
      switch (Ie(i), w.length) {
        case 1:
          switch (e.touches.ONE) {
            case K.ROTATE:
              if (e.enableRotate === !1)
                return;
              Ae(), o = n.TOUCH_ROTATE;
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
              rt(), o = n.TOUCH_DOLLY_PAN;
              break;
            case K.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
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
      o !== n.NONE && e.dispatchEvent(he);
    }
    function ft(i) {
      switch (Ie(i), o) {
        case n.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          Se(i), e.update();
          break;
        case n.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          Oe(i), e.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          lt(i), e.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          ct(i), e.update();
          break;
        default:
          o = n.NONE;
      }
    }
    function De(i) {
      e.enabled !== !1 && i.preventDefault();
    }
    function pt(i) {
      w.push(i);
    }
    function Ge(i) {
      delete k[i.pointerId];
      for (let f = 0; f < w.length; f++)
        if (w[f].pointerId == i.pointerId) {
          w.splice(f, 1);
          return;
        }
    }
    function Ie(i) {
      let f = k[i.pointerId];
      f === void 0 && (f = new B(), k[i.pointerId] = f), f.set(i.pageX, i.pageY);
    }
    function pe(i) {
      const f = i.pointerId === w[0].pointerId ? w[1] : w[0];
      return k[f.pointerId];
    }
    e.domElement.addEventListener("contextmenu", De), e.domElement.addEventListener("pointerdown", Ce), e.domElement.addEventListener("pointercancel", Re), e.domElement.addEventListener("wheel", ze, { passive: !1 }), this.update();
  }
}
const Zt = {
  name: "OrbitControls",
  render: () => null
}, Xt = /* @__PURE__ */ E({
  ...Zt,
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
    function r() {
      e.value != null && (e.value.enablePan = t.enablePan, e.value.enableRotate = t.enableRotate, e.value.enableZoom = t.enableZoom, e.value.minZoom = t.minZoom, e.value.maxZoom = t.maxZoom, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance, e.value.minPolarAngle = t.minPolarAngle, e.value.maxPolarAngle = t.maxPolarAngle, e.value.minAzimuthAngle = t.minAzimuthAngle, e.value.maxAzimuthAngle = t.maxAzimuthAngle);
    }
    return _(o, () => {
      e.value = new Yt(n, o.value), r(), x(t, "target", e.value);
    }), r(), g(t, "enablePan", r), g(t, "enableRotate", r), g(t, "enableZoom", r), g(t, "minZoom", r), g(t, "maxZoom", r), g(t, "minDistance", r), g(t, "maxDistance", r), g(t, "minPolarAngle", r), g(t, "maxPolarAngle", r), g(t, "minAzimuthAngle", r), g(t, "maxAzimuthAngle", r), a({ three: e }), { props: t, three: e, camera: n, canvas: o, applyProps: r };
  }
}), Wt = /* @__PURE__ */ E({
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
    return ue(n), x(e, "position", n), x(e, "rotation", n), x(e, "scale", n), Nt(n.children, e, t), S("parent", n), a({ three: n }), (o, r) => G(o.$slots, "default");
  }
}), Kt = /* @__PURE__ */ E({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("scene"), n = new $(), o = new oe({ color: "black" }), r = new ye(n, o);
    return ue(r), x(t, "position", r), x(t, "rotation", r), x(t, "scale", r), ee(() => {
      e.remove(r), se(r);
    }), S("mesh", r), a({ three: r }), (l, c) => G(l.$slots, "default");
  }
}), qt = /* @__PURE__ */ E({
  __name: "Mesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("scene"), n = new $(), o = new Qe(), r = new be(n, o);
    r.castShadow = !0, r.receiveShadow = !0, ue(r), x(t, "position", r), x(t, "rotation", r), x(t, "scale", r);
    function l() {
      r.castShadow = t.castShadow, r.receiveShadow = t.receiveShadow;
    }
    return l(), g(t, "castShadow", l), g(t, "receiveShadow", l), ee(() => {
      e.remove(r), se(r);
    }), S("mesh", r), a({ three: r }), (c, m) => G(c.$slots, "default");
  }
}), Jt = /* @__PURE__ */ E({
  __name: "Points",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("scene"), n = new $(), o = new Q({ color: "red", sizeAttenuation: !1, size: 2 }), r = new le(n, o);
    return ue(r), x(t, "position", r), x(t, "rotation", r), x(t, "scale", r), ee(() => {
      e.remove(r), se(r);
    }), S("mesh", r), a({ three: r }), (l, c) => G(l.$slots, "default");
  }
}), Qt = /^[og]\s*(.+)?/, en = /^mtllib /, tn = /^usemtl /, nn = /^usemap /, Ke = new z(), ge = new z(), qe = new z(), Je = new z(), I = new z(), ie = new U();
function on() {
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
            for (let r = this.materials.length - 1; r >= 0; r--)
              this.materials[r].groupCount <= 0 && this.materials.splice(r, 1);
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
      Ke.fromArray(n, a), ge.fromArray(n, t), qe.fromArray(n, e), I.subVectors(qe, ge), Je.subVectors(Ke, ge), I.cross(Je), I.normalize(), o.push(I.x, I.y, I.z), o.push(I.x, I.y, I.z), o.push(I.x, I.y, I.z);
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
    addFace: function(a, t, e, n, o, r, l, c, m) {
      const v = this.vertices.length;
      let d = this.parseVertexIndex(a, v), y = this.parseVertexIndex(t, v), u = this.parseVertexIndex(e, v);
      if (this.addVertex(d, y, u), this.addColor(d, y, u), l !== void 0 && l !== "") {
        const h = this.normals.length;
        d = this.parseNormalIndex(l, h), y = this.parseNormalIndex(c, h), u = this.parseNormalIndex(m, h), this.addNormal(d, y, u);
      } else
        this.addFaceNormal(d, y, u);
      if (n !== void 0 && n !== "") {
        const h = this.uvs.length;
        d = this.parseUVIndex(n, h), y = this.parseUVIndex(o, h), u = this.parseUVIndex(r, h), this.addUV(d, y, u), this.object.geometry.hasUVIndices = !0;
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
      for (let o = 0, r = a.length; o < r; o++)
        this.addVertexLine(this.parseVertexIndex(a[o], e));
      for (let o = 0, r = t.length; o < r; o++)
        this.addUVLine(this.parseUVIndex(t[o], n));
    }
  };
  return s.startObject("", !1), s;
}
class an extends xt {
  constructor(a) {
    super(a), this.materials = null;
  }
  load(a, t, e, n) {
    const o = this, r = new At(this.manager);
    r.setPath(this.path), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials), r.load(a, function(l) {
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
    const t = new on();
    a.indexOf(`\r
`) !== -1 && (a = a.replace(/\r\n/g, `
`)), a.indexOf(`\\
`) !== -1 && (a = a.replace(/\\\n/g, ""));
    const e = a.split(`
`);
    let n = "", o = "", r = 0, l = [];
    const c = typeof "".trimLeft == "function";
    for (let d = 0, y = e.length; d < y; d++)
      if (n = e[d], n = c ? n.trimLeft() : n.trim(), r = n.length, r !== 0 && (o = n.charAt(0), o !== "#"))
        if (o === "v") {
          const u = n.split(/\s+/);
          switch (u[0]) {
            case "v":
              t.vertices.push(
                parseFloat(u[1]),
                parseFloat(u[2]),
                parseFloat(u[3])
              ), u.length >= 7 ? (ie.setRGB(
                parseFloat(u[4]),
                parseFloat(u[5]),
                parseFloat(u[6])
              ).convertSRGBToLinear(), t.colors.push(ie.r, ie.g, ie.b)) : t.colors.push(void 0, void 0, void 0);
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
          const h = n.slice(1).trim().split(/\s+/), p = [];
          for (let P = 0, T = h.length; P < T; P++) {
            const A = h[P];
            if (A.length > 0) {
              const O = A.split("/");
              p.push(O);
            }
          }
          const M = p[0];
          for (let P = 1, T = p.length - 1; P < T; P++) {
            const A = p[P], O = p[P + 1];
            t.addFace(
              M[0],
              A[0],
              O[0],
              M[1],
              A[1],
              O[1],
              M[2],
              A[2],
              O[2]
            );
          }
        } else if (o === "l") {
          const u = n.substring(1).trim().split(" ");
          let h = [];
          const p = [];
          if (n.indexOf("/") === -1)
            h = u;
          else
            for (let M = 0, P = u.length; M < P; M++) {
              const T = u[M].split("/");
              T[0] !== "" && h.push(T[0]), T[1] !== "" && p.push(T[1]);
            }
          t.addLineGeometry(h, p);
        } else if (o === "p") {
          const h = n.slice(1).trim().split(" ");
          t.addPointGeometry(h);
        } else if ((l = Qt.exec(n)) !== null) {
          const u = (" " + l[0].slice(1).trim()).slice(1);
          t.startObject(u);
        } else if (tn.test(n))
          t.object.startMaterial(n.substring(7).trim(), t.materialLibraries);
        else if (en.test(n))
          t.materialLibraries.push(n.substring(7).trim());
        else if (nn.test(n))
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
    const m = new we();
    if (m.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let d = 0, y = t.objects.length; d < y; d++) {
        const u = t.objects[d], h = u.geometry, p = u.materials, M = h.type === "Line", P = h.type === "Points";
        let T = !1;
        if (h.vertices.length === 0)
          continue;
        const A = new $();
        A.setAttribute("position", new q(h.vertices, 3)), h.normals.length > 0 && A.setAttribute("normal", new q(h.normals, 3)), h.colors.length > 0 && (T = !0, A.setAttribute("color", new q(h.colors, 3))), h.hasUVIndices === !0 && A.setAttribute("uv", new q(h.uvs, 2));
        const O = [];
        for (let k = 0, ne = p.length; k < ne; k++) {
          const D = p[k], Y = D.name + "_" + D.smooth + "_" + T;
          let L = t.materials[Y];
          if (this.materials !== null) {
            if (L = this.materials.create(D.name), M && L && !(L instanceof oe)) {
              const j = new oe();
              Ve.prototype.copy.call(j, L), j.color.copy(L.color), L = j;
            } else if (P && L && !(L instanceof Q)) {
              const j = new Q({ size: 10, sizeAttenuation: !1 });
              Ve.prototype.copy.call(j, L), j.color.copy(L.color), j.map = L.map, L = j;
            }
          }
          L === void 0 && (M ? L = new oe() : P ? L = new Q({ size: 1, sizeAttenuation: !1 }) : L = new Et(), L.name = D.name, L.flatShading = !D.smooth, L.vertexColors = T, t.materials[Y] = L), O.push(L);
        }
        let w;
        if (O.length > 1) {
          for (let k = 0, ne = p.length; k < ne; k++) {
            const D = p[k];
            A.addGroup(D.groupStart, D.groupCount, k);
          }
          M ? w = new ye(A, O) : P ? w = new le(A, O) : w = new be(A, O);
        } else
          M ? w = new ye(A, O[0]) : P ? w = new le(A, O[0]) : w = new be(A, O[0]);
        w.name = u.name, m.add(w);
      }
    else if (t.vertices.length > 0) {
      const d = new Q({ size: 1, sizeAttenuation: !1 }), y = new $();
      y.setAttribute("position", new q(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (y.setAttribute("color", new q(t.colors, 3)), d.vertexColors = !0);
      const u = new le(y, d);
      m.add(u);
    }
    return m;
  }
}
const sn = /* @__PURE__ */ E({
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
    const e = s, n = new an(), o = b("scene"), r = new we();
    r.castShadow = !0, r.receiveShadow = !0, o.add(r), x(e, "position", r), x(e, "rotation", r), x(e, "scale", r);
    function l() {
      n.load(
        e.url,
        function(c) {
          for (const m of c.children)
            r.add(m), m.material = r.material, x(e, "position", r, !1), x(e, "rotation", r, !1), x(e, "scale", r, !1);
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
    return l(), _(
      () => e.url,
      () => l()
    ), S("mesh", r), a({
      three: r
    }), (c, m) => G(c.$slots, "default");
  }
}), rn = /* @__PURE__ */ E({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("scene"), n = new Lt(t.size);
    return e.add(n), x(t, "position", n), x(t, "rotation", n), x(t, "scale", n), S("mesh", n), a({ three: n }), (o, r) => G(o.$slots, "default");
  }
}), ln = {
  name: "BoxGeometry",
  render: () => null
}, cn = /* @__PURE__ */ E({
  ...ln,
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
    function n(c, m, v, d, y, u) {
      return new St(c, m, v, d, y, u);
    }
    const o = H(new $());
    o.name = t.name, e.geometry = o;
    const r = b("addGeometry");
    r(o);
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
    return l(), g(t, "name", () => {
      o.name = t.name;
    }), g(t, "width", l), g(t, "height", l), g(t, "depth", l), g(t, "widthSegments", l), g(t, "heightSegments", l), g(t, "depthSegments", l), a({ three: o }), { props: t, mesh: e, makeBox: n, three: o, addGeometry: r, redoGeometry: l };
  }
}), un = {
  name: "BufferGeometry",
  render: () => null
}, mn = /* @__PURE__ */ E({
  ...un,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] },
    uvs: { default: () => [] }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh");
    function n(c, m, v) {
      const d = new $(), y = new Float32Array(c), u = new Float32Array(v);
      return d.setAttribute("position", new Fe(y, 3)), d.setAttribute("uv", new Fe(u, 2)), t.faces.length > 0 && d.setIndex(m), d;
    }
    const o = H(n(t.vertices, t.faces, t.uvs));
    o.name = t.name, e.geometry = o;
    const r = b("addGeometry");
    r(o);
    function l(c, m, v) {
      const d = n(c, m, v);
      te(o, d);
    }
    return _(
      () => t.vertices,
      (c) => {
        l(c, t.faces, t.uvs);
      },
      { deep: !0, immediate: !0 }
    ), _(
      () => t.faces,
      (c) => {
        l(t.vertices, c, t.uvs);
      },
      { deep: !0, immediate: !0 }
    ), a({ three: o }), { props: t, mesh: e, makeGeometry: n, three: o, addGeometry: r, redoGeometry: l };
  }
}), dn = {
  name: "EdgesGeometry",
  render: () => null
}, fn = /* @__PURE__ */ E({
  ...dn,
  props: {
    geometry: null
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = H(new $());
    e.geometry = n;
    const o = b("getGeometry"), r = b("addGeometry");
    r(n);
    function l() {
      const v = new Ot(o(t.geometry));
      te(n, v);
    }
    let c = _(
      o(t.geometry),
      () => {
        l();
      },
      { deep: !0, immediate: !0 }
    );
    g(t, "geometry", () => {
      c(), c = _(
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
    return ce(() => m), a({ three: n }), { props: t, mesh: e, three: n, getGeometry: o, addGeometry: r, redoGeometry: l, get unwatch() {
      return c;
    }, set unwatch(v) {
      c = v;
    }, waitUntilGeometryChanged: m };
  }
}), pn = {
  name: "PlaneGeometry",
  render: () => null
}, hn = /* @__PURE__ */ E({
  ...pn,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh");
    function n(c, m, v, d) {
      return new Tt(c, m, v, d);
    }
    const o = H(new $());
    o.name = t.name, e.geometry = o;
    const r = b("addGeometry");
    r(o);
    function l() {
      const c = n(t.width, t.height, t.widthSegments, t.heightSegments);
      te(o, c);
    }
    return l(), g(t, "width", l), g(t, "height", l), g(t, "widthSegments", l), g(t, "heightSegments", l), a({ three: o }), { props: t, mesh: e, makePlane: n, three: o, addGeometry: r, redoGeometry: l };
  }
}), gn = {
  name: "SphereGeometry",
  render: () => null
}, yn = /* @__PURE__ */ E({
  ...gn,
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
    function n(c, m, v, d, y, u, h) {
      return new Ct(c, m, v, d, y, u, h);
    }
    const o = H(new $());
    o.name = t.name, e.geometry = o;
    const r = b("addGeometry");
    r(o);
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
    return l(), g(t, "radius", l), g(t, "widthSegments", l), g(t, "heightSegments", l), g(t, "phiStart", l), g(t, "phiLength", l), g(t, "thetaStart", l), g(t, "thetaLength", l), a({ three: o }), { props: t, mesh: e, makeSphere: n, three: o, addGeometry: r, redoGeometry: l };
  }
}), bn = {
  name: "WireframeGeometry",
  render: () => null
}, wn = /* @__PURE__ */ E({
  ...bn,
  props: {
    geometry: null
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = H(new $());
    e.geometry = n;
    const o = b("getGeometry"), r = b("addGeometry");
    r(n);
    function l() {
      const v = new Rt(o(t.geometry));
      te(n, v);
    }
    let c = _(
      o(t.geometry),
      () => {
        l();
      },
      { deep: !0, immediate: !0 }
    );
    g(t, "geometry", () => {
      c(), c = _(
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
    return ce(() => m), a({ three: n }), { props: t, mesh: e, three: n, getGeometry: o, addGeometry: r, redoGeometry: l, get unwatch() {
      return c;
    }, set unwatch(v) {
      c = v;
    }, waitUntilGeometryChanged: m };
  }
}), vn = {
  name: "LineBasicMaterial",
  render: () => null
}, _n = /* @__PURE__ */ E({
  ...vn,
  props: {
    color: { default: 16777215 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = new oe({ color: t.color });
    e.material = n;
    function o(r) {
      r.color && (n.color = new U(r.color));
    }
    return o(t), _(
      () => t.color,
      () => o(t)
    ), S("material", n), a({ three: n }), { props: t, mesh: e, three: n, applyProps: o };
  }
}), Pn = {
  name: "MeshBasicMaterial"
}, Mn = /* @__PURE__ */ E({
  ...Pn,
  props: {
    color: null,
    side: { default: ve },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = new Qe();
    return e.material = n, _(
      () => t.color,
      () => {
        t.color !== void 0 && (n.color = new U(t.color));
      },
      { immediate: !0 }
    ), _(
      () => t.side,
      () => {
        n.side = t.side;
      },
      { immediate: !0 }
    ), _(
      () => t.opacity,
      () => {
        n.opacity = t.opacity;
      },
      { immediate: !0 }
    ), _(
      () => t.transparent,
      () => {
        n.transparent = t.transparent;
      },
      { immediate: !0 }
    ), _(
      () => t.vertexColors,
      () => {
        n.vertexColors = t.vertexColors;
      },
      { immediate: !0 }
    ), S("material", n), a({ three: n }), (o, r) => G(o.$slots, "default");
  }
}), xn = {
  name: "MeshLambertMaterial"
}, An = /* @__PURE__ */ E({
  ...xn,
  props: {
    color: { default: 16777215 },
    side: { default: ve },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = new zt();
    e.material = n;
    function o(r) {
      r.color && (n.color = new U(r.color)), r.side && (n.side = r.side);
    }
    return o(t), _(
      () => t.color,
      () => o(t)
    ), _(
      () => t.side,
      () => o(t)
    ), _(
      () => t.opacity,
      () => {
        n.opacity = t.opacity;
      },
      { immediate: !0 }
    ), _(
      () => t.transparent,
      () => {
        n.transparent = t.transparent;
      },
      { immediate: !0 }
    ), S("material", n), a({ three: n }), (r, l) => G(r.$slots, "default");
  }
}), En = {
  name: "PointsMaterial",
  render: () => null
}, Ln = /* @__PURE__ */ E({
  ...En,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    size: { default: 1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = new Q({ color: t.color, sizeAttenuation: t.sizeAttenuation, size: t.size });
    e.material = n;
    function o(r) {
      r.color && (n.color = new U(r.color)), r.size && (n.size = r.size), r.sizeAttenuation !== void 0 && (n.sizeAttenuation = r.sizeAttenuation);
    }
    return o(t), _(
      () => t.color,
      () => o(t)
    ), _(
      () => t.size,
      () => o(t)
    ), _(
      () => t.sizeAttenuation,
      () => o(t)
    ), S("material", n), a({ three: n }), { props: t, mesh: e, three: n, applyProps: o };
  }
}), Sn = {
  name: "MeshNormalMaterial"
}, On = /* @__PURE__ */ E({
  ...Sn,
  props: {
    side: { default: ve },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("mesh"), n = new kt();
    return e.material = n, _(
      () => t.side,
      () => {
        n.side = t.side;
      },
      { immediate: !0 }
    ), _(
      () => t.opacity,
      () => {
        n.opacity = t.opacity;
      },
      { immediate: !0 }
    ), _(
      () => t.transparent,
      () => {
        n.transparent = t.transparent;
      },
      { immediate: !0 }
    ), S("material", n), a({ three: n }), (o, r) => G(o.$slots, "default");
  }
}), Tn = {
  name: "AmbientLight",
  render: () => null
}, Cn = /* @__PURE__ */ E({
  ...Tn,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("scene"), n = new Dt();
    e.add(n);
    function o(r) {
      n.color = new U(r.color), n.intensity = r.intensity;
    }
    return o(t), _(
      () => t.color,
      () => o(t)
    ), _(
      () => t.intensity,
      () => o(t)
    ), a({ three: n }), { props: t, scene: e, three: n, applyProps: o };
  }
}), Rn = {
  name: "PointLight",
  render: () => null
}, zn = /* @__PURE__ */ E({
  ...Rn,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("scene"), n = new Gt();
    e.add(n), x(t, "position", n), x(t, "rotation", n), x(t, "scale", n);
    function o(r) {
      n.color = new U(r.color), n.intensity = r.intensity, n.castShadow = r.castShadow;
    }
    return o(t), _(
      () => t.color,
      () => o(t)
    ), _(
      () => t.intensity,
      () => o(t)
    ), _(
      () => t.castShadow,
      () => o(t)
    ), a({ three: n }), { props: t, scene: e, three: n, applyProps: o };
  }
}), kn = {
  name: "TextureLoader",
  render: () => null
}, Dn = /* @__PURE__ */ E({
  ...kn,
  props: {
    url: null,
    wrapS: { default: Ue },
    wrapT: { default: Ue }
  },
  setup(s, { expose: a }) {
    const t = s, e = b("material"), n = J(new It());
    function o() {
      n.value = new jt().load(t.url), "map" in e && (e.map = n.value);
    }
    function r() {
      n.value.wrapS = t.wrapS, n.value.wrapT = t.wrapT, n.value.needsUpdate = !0;
    }
    return o(), g(t, "url", o), g(t, "wrapS", r), g(t, "wrapT", r), a({ three: n }), { props: t, material: e, three: n, load: o, applyProps: r };
  }
});
function jn(s) {
  s.component("Renderer", Bt), s.component("Scene", $t), s.component("PerspectiveCamera", Ft), s.component("OrthographicCamera", Ht), s.component("OrbitControls", Xt), s.component("Group", Wt), s.component("LineSegments", Kt), s.component("Mesh", qt), s.component("Points", Jt), s.component("OBJLoader", sn), s.component("AxesHelper", rn), s.component("BoxGeometry", cn), s.component("BufferGeometry", mn), s.component("EdgesGeometry", fn), s.component("PlaneGeometry", hn), s.component("SphereGeometry", yn), s.component("WireframeGeometry", wn), s.component("LineBasicMaterial", _n), s.component("MeshBasicMaterial", Mn), s.component("MeshLambertMaterial", An), s.component("PointsMaterial", Ln), s.component("MeshNormalMaterial", On), s.component("AmbientLight", Cn), s.component("PointLight", zn), s.component("TextureLoader", Dn);
}
export {
  Cn as AmbientLight,
  rn as AxesHelper,
  cn as BoxGeometry,
  mn as BufferGeometry,
  fn as EdgesGeometry,
  Wt as Group,
  _n as LineBasicMaterial,
  Kt as LineSegments,
  qt as Mesh,
  Mn as MeshBasicMaterial,
  An as MeshLambertMaterial,
  On as MeshNormalMaterial,
  sn as OBJLoader,
  Xt as OrbitControls,
  Ht as OrthographicCamera,
  Ft as PerspectiveCamera,
  hn as PlaneGeometry,
  zn as PointLight,
  Jt as Points,
  Ln as PointsMaterial,
  Bt as Renderer,
  $t as Scene,
  yn as SphereGeometry,
  Dn as TextureLoader,
  wn as WireframeGeometry,
  jn as install
};

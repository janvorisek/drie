import { watch as N, inject as S, onMounted as ne, onUnmounted as be, defineComponent as I, ref as Ne, reactive as me, provide as D, openBlock as hs, createElementBlock as fs, Fragment as ps, createElementVNode as ms, renderSlot as Z, shallowRef as gs, nextTick as dn } from "vue";
import { Vector3 as v, Raycaster as Vt, Vector2 as z, WebGLRenderer as ys, Scene as _s, Color as $, PerspectiveCamera as zn, OrthographicCamera as Un, EventDispatcher as Bn, MOUSE as Pe, TOUCH as Ve, Quaternion as oe, Spherical as hn, Object3D as dt, Euler as ws, Matrix4 as Ke, MeshBasicMaterial as we, LineBasicMaterial as Le, CylinderGeometry as se, BoxGeometry as te, BufferGeometry as U, Float32BufferAttribute as _e, Mesh as A, OctahedronGeometry as _t, Line as Me, SphereGeometry as Xn, TorusGeometry as et, PlaneGeometry as Yn, DoubleSide as Vn, Group as Ue, InstancedMesh as $n, LineLoop as Zn, LineSegments as vt, PointsMaterial as ze, Points as lt, Loader as qn, LoaderUtils as $t, FileLoader as Jt, SpotLight as bs, PointLight as Kn, DirectionalLight as Qn, sRGBEncoding as ht, MeshPhysicalMaterial as Be, TextureLoader as Wn, ImageBitmapLoader as Es, BufferAttribute as Ze, InterleavedBuffer as Ts, InterleavedBufferAttribute as Ms, LinearFilter as Jn, LinearMipmapLinearFilter as es, RepeatWrapping as Zt, Material as ut, MeshStandardMaterial as en, PropertyBinding as Ss, SkinnedMesh as vs, MathUtils as xs, Skeleton as As, InterpolateLinear as ts, AnimationClip as Rs, Bone as Ps, TriangleFanDrawMode as ns, NearestFilter as Ls, NearestMipmapNearestFilter as Cs, LinearMipmapNearestFilter as Is, NearestMipmapLinearFilter as Os, ClampToEdgeWrapping as qt, MirroredRepeatWrapping as ks, InterpolateDiscrete as Ds, FrontSide as ft, Texture as Kt, TriangleStripDrawMode as Hs, VectorKeyframeTrack as Ns, QuaternionKeyframeTrack as fn, NumberKeyframeTrack as js, Box3 as ss, Sphere as Gs, Interpolant as Fs, MeshPhongMaterial as zs, AxesHelper as Us, GridHelper as Bs, CircleGeometry as Xs, ConeGeometry as Ys, EdgesGeometry as Vs, Curve as $s, RingGeometry as Zs, WireframeGeometry as qs, LineDashedMaterial as Ks, MeshLambertMaterial as Qs, MeshNormalMaterial as Ws, AmbientLight as Js, HemisphereLight as eo } from "three";
const pn = (a) => a === void 0 ? new v(0, 0, 0) : "x" in a ? new v(a.x, a.y, a.z) : new v(a[0], a[1], a[2]), mn = (a) => a === void 0 ? new z(0, 0) : "x" in a ? new z(a.x, a.y) : new z(a[0], a[1]), gn = (a, n, t) => {
  t[a].isVector3 ? t[a].set(n.x, n.y, n.z) : "isEuler" in t[a] && t[a].setFromVector3(n);
}, C = (a, n, t, e = !0, s) => {
  if (t !== null) {
    if (a[n] !== void 0) {
      const i = pn(a[n]);
      gn(n, i, t), s && s();
    }
    e && N(
      () => a[n],
      () => {
        if (a[n] !== void 0) {
          const i = pn(a[n]);
          gn(n, i, t), s && s();
        }
      }
    );
  }
}, yn = (a, n, t) => {
  t[a].isVector2 && t[a].set(n.x, n.y);
}, _n = (a, n, t, e = !0) => {
  if (t !== null) {
    if (a[n] !== void 0) {
      const s = mn(a[n]);
      yn(n, s, t);
    }
    e && N(
      () => a[n],
      () => {
        if (a[n] !== void 0) {
          const s = mn(a[n]);
          yn(n, s, t);
        }
      }
    );
  }
}, _ = (a, n, t) => {
  N(
    () => a[n],
    () => {
      t();
    }
  );
};
function ge(a, n) {
  n.hasAttribute("position") && (a.setAttribute("position", n.getAttribute("position")), a.attributes.position.needsUpdate = !0), n.hasAttribute("normal") && (a.setAttribute("normal", n.getAttribute("normal")), a.attributes.normal.needsUpdate = !0), n.hasAttribute("uv") && (a.setAttribute("uv", n.getAttribute("uv")), a.attributes.uv.needsUpdate = !0), a.setIndex(n.getIndex()), n.boundingBox !== null && (a.boundingBox = n.boundingBox), n.boundingSphere && n.boundingSphere.radius > 0 && (a.boundingSphere = n.boundingSphere);
}
function Se(a) {
  if (a.children.length > 0)
    for (let n = a.children.length - 1; n >= 0; n--)
      Se(a.children[n]);
  if (a.geometry && a.geometry.dispose(), a.material)
    if (a.material.length)
      for (let n = 0; n < a.material.length; ++n)
        a.material[n].map && a.material[n].map.dispose(), a.material[n].lightMap && a.material[n].lightMap.dispose(), a.material[n].bumpMap && a.material[n].bumpMap.dispose(), a.material[n].normalMap && a.material[n].normalMap.dispose(), a.material[n].specularMap && a.material[n].specularMap.dispose(), a.material[n].envMap && a.material[n].envMap.dispose(), a.material[n].dispose();
    else
      a.material.map && a.material.map.dispose(), a.material.lightMap && a.material.lightMap.dispose(), a.material.bumpMap && a.material.bumpMap.dispose(), a.material.normalMap && a.material.normalMap.dispose(), a.material.specularMap && a.material.specularMap.dispose(), a.material.envMap && a.material.envMap.dispose(), a.material.dispose();
  return a.removeFromParent(), !0;
}
function ce(a) {
  const n = S("scene"), t = S("parent", void 0);
  ne(() => {
    t ? t.add(a) : n.add(a);
  }), be(() => {
    t ? t.remove(a) : n.remove(a);
  });
}
function tn(a, n) {
  const t = S("camera"), e = S("canvas");
  S("scene");
  const s = (c) => {
    const l = new Vt(), d = wn(c);
    l.setFromCamera(d, t.value);
    const u = l.intersectObjects(a);
    u.length > 0 && n.onClick(u, d);
  };
  let i = !1, o = [];
  const r = (c) => {
    const l = new Vt(), d = wn(c);
    l.setFromCamera(d, t.value);
    const u = l.intersectObjects(a);
    u.length > 0 ? (o = u, i === !1 && n.onMouseEnter(u, d), i = !0, n.onMouseMove(u, d)) : (i && n.onMouseLeave(o, d), i = !1, o = []);
  };
  ne(() => {
    if (n.enableRaycasting) {
      if ((e == null ? void 0 : e.value) == null)
        return;
      const c = (() => null).toString();
      n.onClick.toString() !== c && (e == null || e.value.addEventListener("click", s)), (n.onMouseEnter.toString() !== c || n.onMouseMove.toString() !== c || n.onMouseLeave.toString() !== c) && (e == null || e.value.addEventListener("mousemove", r));
    }
  }), be(() => {
    if (n.enableRaycasting) {
      if ((e == null ? void 0 : e.value) == null)
        return;
      e == null || e.value.removeEventListener("click", s), e == null || e.value.removeEventListener("mousemove", r);
    }
  }), N(
    () => n.enableRaycasting,
    (c) => {
      c ? (e == null || e.value.addEventListener("click", s), e == null || e.value.addEventListener("mousemove", r)) : (e == null || e.value.removeEventListener("click", s), e == null || e.value.removeEventListener("mousemove", r));
    }
  );
}
function wn(a) {
  const n = new z(), t = a.currentTarget.getBoundingClientRect();
  return n.x = (a.clientX - t.left) / t.width * 2 - 1, n.y = -((a.clientY - t.top) / t.height) * 2 + 1, n;
}
var Re = {}, Xe = {}, xt = {};
Object.defineProperty(xt, "__esModule", {
  value: !0
});
xt.callHandlers = to;
function bn(a, n) {
  let t = null;
  try {
    t = a(n);
  } catch (e) {
    return Promise.reject(e);
  }
  return t && t.then ? t : Promise.resolve(t);
}
function to(a, n) {
  return !n || n.length === 0 ? new Promise((t) => {
  }) : n.length === 1 ? bn(n[0], a) : Promise.all(n.map((t) => bn(t, a)));
}
var pt = {};
Object.defineProperty(pt, "__esModule", {
  value: !0
});
pt.DEFAULT_PARAM = void 0;
const no = "$_DEFAULT_$";
pt.DEFAULT_PARAM = no;
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
Xe.slot = io;
Xe.connectSlot = ro;
Xe.defaultSlotConfig = void 0;
var so = xt, wt = pt;
const Dt = () => {
  throw new Error("Slot not connected");
}, os = {
  noBuffer: !1,
  autoReconnect: !0
};
Xe.defaultSlotConfig = os;
const oo = (a) => Object.assign(() => Dt(), {
  config: a,
  lazy: () => Dt,
  on: () => Dt,
  slotName: "Not connected"
}), tt = "LOCAL_TRANSPORT", nt = (a, n) => Object.keys(n).reduce((t, e) => t.concat(n[e][a] || []), []), En = (a) => Object.keys(a).reduce((n, t) => {
  const e = a[t], s = Object.keys(e).filter((r) => (e[r] || []).length > 0), i = [...n, ...s];
  return [...new Set(i)];
}, []);
function io(a = os) {
  return oo(a);
}
function ro(a, n, t = {}) {
  const e = n.reduce((f, y, m) => ({
    ...f,
    [m]: {}
  }), {
    [tt]: {}
  }), s = n.reduce((f, y, m) => ({
    ...f,
    [m]: {}
  }), {}), i = (f, y) => {
    let m = () => {
    };
    const w = new Promise((g) => m = g);
    s[f][y] = {
      registered: w,
      onRegister: m
    };
  }, o = [], r = [], c = (f) => o.forEach((y) => y(f)), l = (f) => r.forEach((y) => y(f));
  n.forEach((f, y) => {
    const m = (b = wt.DEFAULT_PARAM, M) => {
      if (!s[y])
        return;
      const x = e[y][b] || [];
      e[y][b] = x.concat(M), nt(b, e).length === 1 && c(b), s[y][b] || i(String(y), b), s[y][b].onRegister();
    }, w = (b = wt.DEFAULT_PARAM, M) => {
      const T = (e[y][b] || []).indexOf(M);
      T > -1 && e[y][b].splice(T, 1), nt(b, e).length === 0 && l(b), s[y] && i(String(y), b);
    }, g = () => {
      s[y] && Object.keys(s[y]).forEach((b) => {
        s[y][b].onRegister();
      }), delete s[y];
    };
    f.addRemoteHandlerRegistrationCallback(a, m), f.addRemoteHandlerUnregistrationCallback(a, w), f.addRemoteEventListChangedListener(a, g);
  });
  function d(f, y) {
    const m = arguments.length === 2, w = m ? y : f, g = m ? f : wt.DEFAULT_PARAM, b = () => {
      const x = nt(g, e);
      return (0, so.callHandlers)(w, x);
    };
    if (n.length === 0)
      return b();
    const M = [];
    if (t.autoReconnect && n.forEach((x) => {
      M.push(x.autoReconnect());
    }), t.noBuffer)
      return Promise.all(M).then(() => b());
    {
      n.forEach((T, R) => {
        s[R] && !s[R][g] && i(String(R), g);
      });
      const x = n.reduce((T, R, O) => {
        var G;
        return [...T, ...(G = s[O] && [s[O][g].registered]) !== null && G !== void 0 ? G : []];
      }, []);
      return Promise.all(x).then(() => b());
    }
  }
  function u(f, y) {
    return o.push(f), r.push(y), En(e).forEach(f), () => {
      En(e).forEach(y);
      const m = o.indexOf(f);
      m > -1 && o.splice(m, 1);
      const w = r.indexOf(y);
      w > -1 && r.splice(w, 1);
    };
  }
  function h(f, y) {
    let m = "", w = () => new Promise((b) => b());
    return typeof f == "string" ? (m = f, w = y || w) : (m = wt.DEFAULT_PARAM, w = f), n.forEach((b) => b.registerHandler(a, m, w)), e[tt][m] = (e[tt][m] || []).concat(w), nt(m, e).length === 1 && c(m), () => {
      n.forEach((T) => T.unregisterHandler(a, m, w));
      const M = (e[tt][m] || []).indexOf(w);
      M !== -1 && e[tt][m].splice(M, 1), nt(m, e).length === 0 && l(m);
    };
  }
  return Object.assign(d, {
    on: h,
    lazy: u,
    config: t,
    slotName: a
  });
}
var At = {}, Rt = {};
Object.defineProperty(Rt, "__esModule", {
  value: !0
});
Rt.Transport = void 0;
var ao = xt;
let co = 0;
const lo = () => `${co++}`, uo = (a) => {
  throw new Error(`Should not happen: ${a}`);
}, Ht = {
  TIMED_OUT: "TIMED_OUT",
  REMOTE_CONNECTION_CLOSED: "REMOTE_CONNECTION_CLOSED",
  CHANNEL_NOT_READY: "CHANNEL_NOT_READY"
};
class ho {
  /**
   * Handlers created by the Transport. When an event is triggered locally,
   * these handlers will make a request to the far end to handle this event,
   * and store a PendingRequest
   */
  /**
   * Callbacks provided by each slot allowing to register remote handlers
   * created by the Transport
   */
  /**
   * Callbacks provided by each slot allowing to unregister the remote handlers
   * created by the Transport, typically when the remote connection is closed.
   */
  /**
   * Callbacks provided by each slot allowing to remove blacklisted events
   * declaration from the remote handlers.
   */
  /**
   * Requests that have been sent to the far end, but have yet to be fulfilled
   */
  constructor(n, t) {
    this._channel = n, this._localHandlers = {}, this._localHandlerRegistrations = {}, this._remoteHandlers = {}, this._remoteHandlerRegistrationCallbacks = {}, this._remoteHandlerDeletionCallbacks = {}, this._remoteIgnoredEventsCallbacks = {}, this._pendingRequests = {}, this._channelReady = !1, this._channel.onData((e) => {
      switch (e.type) {
        case "request":
          return this._requestReceived(e);
        case "response":
          return this._responseReceived(e);
        case "handler_registered":
          return this._registerRemoteHandler(e);
        case "handler_unregistered":
          return this._unregisterRemoteHandler(e);
        case "error":
          return this._errorReceived(e);
        case "event_list":
          return this._remoteIgnoredEventsReceived(e);
        default:
          uo(e);
      }
    }), this._channel.onConnect(() => {
      this._channelReady = !0, Object.keys(this._localHandlerRegistrations).forEach((e) => {
        this._localHandlerRegistrations[e].forEach((s) => {
          this._channel.send(s);
        });
      }), t && this._channel.send({
        type: "event_list",
        ignoredEvents: t
      });
    }), this._channel.onDisconnect(() => {
      this._channelReady = !1, this._unregisterAllRemoteHandlers(), this._rejectAllPendingRequests(new Error(`${Ht.REMOTE_CONNECTION_CLOSED}`));
    }), this._channel.onError((e) => this._rejectAllPendingRequests(e));
  }
  /**
  * This event is triggered when events have been listed as ignored by the far
  * end. It will call onRegister on ignored events' handlers to fake their
  * registration so this end doesn't wait on the far end to have registered
  * them to be able to trigger them.
  */
  _remoteIgnoredEventsReceived({
    ignoredEvents: n
  }) {
    Object.keys(this._remoteIgnoredEventsCallbacks).forEach((t) => {
      n.includes(t) && this._remoteIgnoredEventsCallbacks[t]();
    });
  }
  /**
   * When a request is received from the far end, call all the local subscribers,
   * and send either a response or an error mirroring the request id,
   * depending on the status of the resulting promise
   */
  _requestReceived({
    slotName: n,
    data: t,
    id: e,
    param: s
  }) {
    const i = this._localHandlers[n];
    if (!i)
      return;
    const o = i[s];
    o && (0, ao.callHandlers)(t, o).then((r) => this._channel.send({
      type: "response",
      slotName: n,
      id: e,
      data: r,
      param: s
    })).catch((r) => this._channel.send({
      id: e,
      message: `${r}`,
      param: s,
      slotName: n,
      stack: r.stack || "",
      type: "error"
    }));
  }
  /**
   * When a response is received from the far end, resolve the pending promise
   * with the received data
   */
  _responseReceived({
    slotName: n,
    data: t,
    id: e,
    param: s
  }) {
    const i = this._pendingRequests[n];
    !i || !i[s] || !i[s][e] || (i[s][e].resolve(t), delete i[s][e]);
  }
  /**
   * When an error is received from the far end, reject the pending promise
   * with the received data
   */
  _errorReceived({
    slotName: n,
    id: t,
    message: e,
    stack: s,
    param: i
  }) {
    const o = this._pendingRequests[n];
    if (!o || !o[i] || !o[i][t])
      return;
    const r = new Error(`${e} on ${n} with param ${i}`);
    r.stack = s || r.stack, this._pendingRequests[n][i][t].reject(r), delete this._pendingRequests[n][i][t];
  }
  /**
   * When the far end signals that a handler has been added for a given slot,
   * add a handler on our end. When called, this handler will send a request
   * to the far end, and keep references to the returned Promise's resolution
   * and rejection function
   *
   */
  _registerRemoteHandler({
    slotName: n,
    param: t
  }) {
    const e = this._remoteHandlerRegistrationCallbacks[n];
    if (!e)
      return;
    const s = this._remoteHandlers[n];
    if (s && s[t])
      return;
    const i = (o) => new Promise((r, c) => {
      if (!this._channelReady)
        return c(new Error(`${Ht.CHANNEL_NOT_READY} on ${n}`));
      const l = lo();
      this._pendingRequests[n] = this._pendingRequests[n] || {}, this._pendingRequests[n][t] = this._pendingRequests[n][t] || {}, this._pendingRequests[n][t][l] = {
        resolve: r,
        reject: c
      }, this._channel.send({
        type: "request",
        id: l,
        slotName: n,
        param: t,
        data: o
      }), setTimeout(() => {
        const h = ((this._pendingRequests[n] || {})[t] || {})[l];
        if (h) {
          const f = new Error(`${Ht.TIMED_OUT} on ${n} with param ${t}`);
          h.reject(f), delete this._pendingRequests[n][t][l];
        }
      }, this._channel.timeout);
    });
    this._remoteHandlers[n] = this._remoteHandlers[n] || {}, this._remoteHandlers[n][t] = i, e(t, i);
  }
  _unregisterRemoteHandler({
    slotName: n,
    param: t
  }) {
    const e = this._remoteHandlerDeletionCallbacks[n], s = this._remoteHandlers[n];
    if (!s)
      return;
    const i = s[t];
    i && e && (e(t, i), delete this._remoteHandlers[n][t]);
  }
  _unregisterAllRemoteHandlers() {
    Object.keys(this._remoteHandlerDeletionCallbacks).forEach((n) => {
      const t = this._remoteHandlers[n];
      if (!t)
        return;
      Object.keys(t).filter((s) => t[s]).forEach((s) => this._unregisterRemoteHandler({
        slotName: n,
        param: s
      }));
    });
  }
  _rejectAllPendingRequests(n) {
    Object.keys(this._pendingRequests).forEach((t) => {
      Object.keys(this._pendingRequests[t]).forEach((e) => {
        Object.keys(this._pendingRequests[t][e]).forEach((s) => {
          this._pendingRequests[t][e][s].reject(n);
        });
      }), this._pendingRequests[t] = {};
    });
  }
  addRemoteHandlerRegistrationCallback(n, t) {
    this._remoteHandlerRegistrationCallbacks[n] || (this._remoteHandlerRegistrationCallbacks[n] = t);
  }
  addRemoteHandlerUnregistrationCallback(n, t) {
    this._remoteHandlerDeletionCallbacks[n] || (this._remoteHandlerDeletionCallbacks[n] = t);
  }
  addRemoteEventListChangedListener(n, t) {
    this._remoteIgnoredEventsCallbacks[n] || (this._remoteIgnoredEventsCallbacks[n] = t);
  }
  /**
   * Called when a local handler is registered, to send a `handler_registered`
   * message to the far end.
   */
  registerHandler(n, t, e) {
    if (this._localHandlers[n] = this._localHandlers[n] || {}, this._localHandlers[n][t] = this._localHandlers[n][t] || [], this._localHandlers[n][t].push(e), this._localHandlers[n][t].length === 1) {
      const s = {
        type: "handler_registered",
        param: t,
        slotName: n
      };
      this._localHandlerRegistrations[t] = this._localHandlerRegistrations[t] || [], this._localHandlerRegistrations[t].push(s), this._channelReady && this._channel.send(s);
    }
  }
  /**
   * Called when a local handler is unregistered, to send a `handler_unregistered`
   * message to the far end.
   */
  unregisterHandler(n, t, e) {
    const s = this._localHandlers[n];
    if (s && s[t]) {
      const i = s[t].indexOf(e);
      if (i > -1 && (s[t].splice(i, 1), s[t].length === 0)) {
        const o = {
          type: "handler_unregistered",
          param: t,
          slotName: n
        };
        this._channelReady && this._channel.send(o);
      }
    }
  }
  /**
   * Allows to know the transport status and to perform a reconnection
   *
   * @returns {boolean} Transport's channel connection status, true if disconnected, otherwise false
   */
  isDisconnected() {
    return !this._channelReady;
  }
  /**
   * Auto-reconnect the channel
   * see Slot.trigger function for usage
   *
   * @returns {Promise} A promise resolving when the connection is established
   */
  autoReconnect() {
    if (this.isDisconnected() && this._channel.autoReconnect) {
      const n = new Promise((t) => {
        this._channel.onConnect(() => t());
      });
      return this._channel.autoReconnect(), n;
    }
    return Promise.resolve();
  }
}
Rt.Transport = ho;
Object.defineProperty(At, "__esModule", {
  value: !0
});
At.combineEvents = mo;
At.createEventBus = go;
var fo = Xe, po = Rt;
function mo(...a) {
  const n = a.reduce((e, s) => (e.push.apply(e, Object.keys(s)), e), []), t = [...new Set(n)];
  if (n.length > t.length)
    throw new Error("ts-event-bus: duplicate slots encountered in combineEvents.");
  return Object.assign({}, ...a);
}
function go(a) {
  const n = (a.channels || []).map((e) => new po.Transport(e, a.ignoredEvents)), t = {};
  for (const e in a.events)
    a.events.hasOwnProperty(e) && (!a.ignoredEvents || a.ignoredEvents && !a.ignoredEvents.includes(e)) && (t[e] = (0, fo.connectSlot)(e, n, a.events[e].config));
  return t;
}
var yo = {}, mt = {};
Object.defineProperty(mt, "__esModule", {
  value: !0
});
mt.GenericChannel = void 0;
const _o = 5e3;
class wo {
  constructor(n = _o) {
    this._timeout = n, this._onMessageCallbacks = [], this._onConnectCallbacks = [], this._onDisconnectCallbacks = [], this._onErrorCallbacks = [], this._ready = !1;
  }
  get timeout() {
    return this._timeout;
  }
  onData(n) {
    this._onMessageCallbacks.indexOf(n) === -1 && this._onMessageCallbacks.push(n);
  }
  onConnect(n) {
    this._ready && n(), this._onConnectCallbacks.push(n);
  }
  onDisconnect(n) {
    this._onDisconnectCallbacks.push(n);
  }
  onError(n) {
    this._onErrorCallbacks.push(n);
  }
  _messageReceived(n) {
    this._onMessageCallbacks.forEach((t) => t(n));
  }
  _error(n) {
    this._onErrorCallbacks.forEach((t) => t(n));
  }
  _connected() {
    this._ready = !0, this._onConnectCallbacks.forEach((n) => n());
  }
  _disconnected() {
    this._ready = !1, this._onDisconnectCallbacks.forEach((n) => n());
  }
}
mt.GenericChannel = wo;
var Pt = {}, Lt = {};
Object.defineProperty(Lt, "__esModule", {
  value: !0
});
Lt.isTransportMessage = bo;
function bo(a) {
  switch (a.type) {
    case "request":
    case "response":
    case "error":
    case "handler_unregistered":
    case "handler_registered":
    case "event_list":
      return !0;
    default:
      return !1;
  }
}
Object.defineProperty(Pt, "__esModule", {
  value: !0
});
Pt.ChunkedChannel = void 0;
var Eo = mt, To = Lt;
const $e = {
  getRandomId: () => [...Array(30)].map(() => Math.random().toString(36)[3]).join(""),
  str2byteArray: (a) => {
    const n = new Uint16Array(a.length);
    for (let t = 0, e = a.length; t < e; t++)
      n[t] = a.charCodeAt(t);
    return n;
  },
  convertUintArrayToString: (a, n) => {
    if (n === -1)
      return String.fromCharCode.apply(null, a);
    {
      let t = "";
      for (let e = 0; e < a.length; e += n)
        e + n > a.length ? t += String.fromCharCode.apply(null, a.subarray(e)) : t += String.fromCharCode.apply(null, a.subarray(e, e + n));
      return t;
    }
  },
  checkForChunkId: (a) => {
    if (!a.chunkId)
      throw new Error(`ChunkedMessage did not have a chunkId: ${JSON.stringify(a)}`);
  }
};
class Mo extends Eo.GenericChannel {
  constructor(n) {
    super(n.timeout), this._chunkSize = void 0, this._maxStringAlloc = void 0, this._sender = void 0, this._buffer = {}, this._chunkSize = n.chunkSize, this._sender = n.sender, this._maxStringAlloc = n.maxStringAlloc || -1;
  }
  /**
   * The size of the data array in each chunk.
   * Note that the total "size" of the message will be larger
   * because of the chunking metadata.
   */
  /**
   * This method override will chunk messages so that an array of no more than
   * `chunkSize` bytes (excluding internal metadata) will be sent for each call
   * to a given slot.
   */
  send(n) {
    const t = JSON.stringify(n);
    if (t.length <= this._chunkSize) {
      this._sender(n);
      return;
    }
    const e = $e.str2byteArray(t), s = $e.getRandomId();
    this._sender({
      type: "chunk_start",
      chunkId: s,
      size: t.length
    });
    const i = (o = 0) => {
      let r = e.slice(o, o + this._chunkSize);
      r.length && (this._sender({
        type: "chunk_data",
        chunkId: s,
        // To avoid having the underlying channel implemetation interpret/cast
        // the UintArray into something else, we explicitely send an array
        data: Array.from(r)
      }), i(o + this._chunkSize));
    };
    i(), this._sender({
      type: "chunk_end",
      chunkId: s
    });
  }
  /**
   * When a message is received on this channel, either it has been chunked because its original size
   * was greater than the chunkSize in which case it will be a `ChunkedTransportMessage`,
   * or it was small enough so that it could be sent un chunked in which
   * case it will be a plain `TransportMessage`.
   */
  _messageReceived(n) {
    switch (n.type) {
      case "chunk_start":
        this._receiveNewChunk(n);
        break;
      case "chunk_data":
        this._receiveChunkData(n);
        break;
      case "chunk_end":
        const t = this._mergeChunks(n);
        super._messageReceived(t);
        break;
      default:
        super._messageReceived(n);
    }
  }
  _receiveNewChunk(n) {
    if ($e.checkForChunkId(n), this._buffer[n.chunkId])
      throw new Error(`There was already an entry in the buffer for chunkId ${n.chunkId}`);
    this._buffer[n.chunkId] = {
      id: n.chunkId,
      chunks: [],
      size: n.size
    };
  }
  _receiveChunkData(n) {
    if ($e.checkForChunkId(n), !this._buffer[n.chunkId])
      throw new Error(`ChunkId ${n.chunkId} was not found in the buffer`);
    this._buffer[n.chunkId].chunks.push(n.data);
  }
  _mergeChunks(n) {
    if ($e.checkForChunkId(n), !this._buffer[n.chunkId])
      throw new Error(`ChunkId ${n.chunkId} was not found in the buffer`);
    const t = this._buffer[n.chunkId].chunks.reduce((i, o, r) => (o.forEach((c, l) => i.uintArray[i.currentIx + l] = c), i.currentIx += o.length, i), {
      uintArray: new Uint16Array(this._buffer[n.chunkId].size),
      currentIx: 0
    });
    let e;
    const s = $e.convertUintArrayToString(t.uintArray, this._maxStringAlloc);
    try {
      e = JSON.parse(s);
    } catch {
      throw new Error(`Not a valid JSON string: ${s}`);
    }
    if (!(0, To.isTransportMessage)(e))
      throw new Error(`Not a transport message: ${JSON.stringify(e)}`);
    return e;
  }
}
Pt.ChunkedChannel = Mo;
(function(a) {
  Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "slot", {
    enumerable: !0,
    get: function() {
      return n.slot;
    }
  }), Object.defineProperty(a, "Slot", {
    enumerable: !0,
    get: function() {
      return n.Slot;
    }
  }), Object.defineProperty(a, "EventDeclaration", {
    enumerable: !0,
    get: function() {
      return t.EventDeclaration;
    }
  }), Object.defineProperty(a, "combineEvents", {
    enumerable: !0,
    get: function() {
      return t.combineEvents;
    }
  }), Object.defineProperty(a, "createEventBus", {
    enumerable: !0,
    get: function() {
      return t.createEventBus;
    }
  }), Object.defineProperty(a, "Channel", {
    enumerable: !0,
    get: function() {
      return e.Channel;
    }
  }), Object.defineProperty(a, "GenericChannel", {
    enumerable: !0,
    get: function() {
      return s.GenericChannel;
    }
  }), Object.defineProperty(a, "ChunkedChannel", {
    enumerable: !0,
    get: function() {
      return i.ChunkedChannel;
    }
  }), Object.defineProperty(a, "TransportMessage", {
    enumerable: !0,
    get: function() {
      return o.TransportMessage;
    }
  }), Object.defineProperty(a, "DEFAULT_PARAM", {
    enumerable: !0,
    get: function() {
      return r.DEFAULT_PARAM;
    }
  });
  var n = Xe, t = At, e = yo, s = mt, i = Pt, o = Lt, r = pt;
})(Re);
const So = {
  geometryChanged: Re.slot(),
  object3DChanged: Re.slot(),
  object3DTranslated: Re.slot(),
  sayHello: Re.slot(),
  getTime: Re.slot(),
  multiply: Re.slot(),
  ping: Re.slot()
}, k = Re.createEventBus({
  events: So
}), vo = /* @__PURE__ */ I({
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
    onAfterRender: { type: Function, default: () => {
    } },
    shadowMapEnabled: { type: Boolean, default: !1 },
    width: { default: 0 }
  },
  setup(a, { expose: n }) {
    const t = a;
    let e = Ne(null);
    const s = [], i = me([]), o = me([]);
    let r = Ne(null);
    const c = Ne([]), l = Ne([]), d = Ne();
    D("canvas", d);
    let u = !0, h = Date.now(), f = 1e3 / t.frameLimit;
    N(
      () => t.camera,
      (g) => y(g)
    );
    const y = (g) => {
      if (g) {
        const b = c.value.find((M) => M.name === g);
        b === void 0 && (r.value = null), r.value = b;
      } else
        r.value = c.value[0];
    };
    function m() {
      e.value !== null && (e.value.shadowMap.enabled = t.shadowMapEnabled, f = 1e3 / t.frameLimit, t.autoResize || e.value.setSize(t.width, t.height));
    }
    ne(() => {
      e.value = new ys({ canvas: d.value, antialias: t.antialias, alpha: t.alpha }), e.value.setSize(1, 1), m(), y(t.camera), new ResizeObserver((b) => {
        b.forEach((M) => {
          e.value && t.autoResize && e.value.setSize(M.contentRect.width, M.contentRect.height);
        });
      }).observe(d.value.parentElement), w();
    }), be(() => {
      for (let g of s)
        Se(g);
    });
    function w() {
      if (e.value === null)
        return requestAnimationFrame(w);
      const g = Date.now(), b = g - h;
      if (f > -1 && b < f)
        return requestAnimationFrame(w);
      if (h = g - b % f, t.onBeforeRender && t.onBeforeRender(), l.value.length > 0 && r.value)
        for (const M of l.value)
          M.value !== null && (M.value.object.uuid === r.value.uuid ? (M.value.enabled = u, M.value.update()) : M.value.enabled = !1);
      if (r.value && e)
        for (const M of s)
          e.value.render(M, r.value);
      t.onAfterRender && t.onAfterRender(), requestAnimationFrame(w);
    }
    return m(), N(
      () => t.shadowMapEnabled,
      () => m()
    ), N(
      () => t.frameLimit,
      () => m()
    ), N(
      () => t.width,
      () => m()
    ), N(
      () => t.height,
      () => m()
    ), D("addCamera", (g) => c.value.push(g)), D("addScene", (g) => s.push(g)), D("addGeometry", (g) => i.push(g)), D("getGeometry", (g) => i.find((b) => b.name === g)), D("addMaterial", (g) => o.push(g)), D("getMaterial", (g) => o.find((b) => b.name === g)), D("addControls", (g) => l.value.push(g)), D("enableAllControls", () => {
      u = !0;
    }), D("disableAllControls", () => {
      u = !1;
    }), D("camera", r), n({
      /**
       * You can access the managed `THREE.WebGLRenderer` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <Renderer ref="renderer"> ... </Renderer>
       * ```
       *
       * ```ts
       * const renderer = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.WebGLRenderer instance
       * const threeRenderer = renderer.value.three;
       * })
       * ```
       */
      three: e,
      eventBus: k
    }), (g, b) => (hs(), fs(ps, null, [
      ms("canvas", {
        ref_key: "canvas",
        ref: d
      }, null, 512),
      Z(g.$slots, "default")
    ], 64));
  }
}), xo = /* @__PURE__ */ I({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(a, { expose: n }) {
    const t = a, e = new _s();
    D("scene", e), S("addScene")(e);
    function s(i) {
      i.background && (e.background = new $(i.background));
    }
    return s(t), N(
      () => t.background,
      () => s(t)
    ), n({ three: e }), (i, o) => Z(i.$slots, "default");
  }
}), Ao = {
  name: "PerspectiveCamera"
}, Ro = /* @__PURE__ */ I({
  ...Ao,
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
  setup(a, { expose: n }) {
    const t = a, e = new zn(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    S("addCamera")(e);
    const s = S("canvas");
    N(s, () => {
      new ResizeObserver((r) => {
        r.forEach((c) => {
          t.autoResize && (e.aspect = c.contentRect.width / c.contentRect.height, e.updateProjectionMatrix());
        });
      }).observe(s.value);
    });
    function i() {
      e.name = t.name, t.autoResize || (e.aspect = t.aspect), e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return i(), C(t, "position", e, !0, i), C(t, "up", e, !0, i), C(t, "lookAt", e, !0, i), _(t, "name", i), _(t, "aspect", i), _(t, "near", i), _(t, "far", i), D("parentCamera", e), n({ three: e }), (o, r) => Z(o.$slots, "default");
  }
}), Po = {
  name: "OrthographicCamera"
}, Lo = /* @__PURE__ */ I({
  ...Po,
  props: {
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(a, { expose: n }) {
    const t = a, e = new Un(-10, 10, 10, -10, 0.1, 1e3);
    e.lookAt(0, 0, 0), e.updateProjectionMatrix(), S("addCamera")(e);
    const s = S("canvas");
    N(s, () => {
      new ResizeObserver((r) => {
        r.forEach((c) => {
          const l = c.contentRect.width / c.contentRect.height;
          e.left = e.bottom * l, e.right = e.top * l, e.updateProjectionMatrix();
        });
      }).observe(s.value);
    });
    function i() {
      e.name = t.name, e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return i(), C(t, "position", e, !0, i), C(t, "up", e, !0, i), C(t, "lookAt", e, !0, i), _(t, "name", i), _(t, "near", i), _(t, "far", i), D("parentCamera", e), n({ three: e }), (o, r) => Z(o.$slots, "default");
  }
}), Tn = { type: "change" }, Nt = { type: "start" }, Mn = { type: "end" };
class Co extends Bn {
  constructor(n, t) {
    super(), this.object = n, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new v(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Pe.ROTATE, MIDDLE: Pe.DOLLY, RIGHT: Pe.PAN }, this.touches = { ONE: Ve.ROTATE, TWO: Ve.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return r.phi;
    }, this.getAzimuthalAngle = function() {
      return r.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(p) {
      p.addEventListener("keydown", rn), this._domElementKeyEvents = p;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(Tn), e.update(), i = s.NONE;
    }, this.update = function() {
      const p = new v(), L = new oe().setFromUnitVectors(n.up, new v(0, 1, 0)), K = L.clone().invert(), ee = new v(), ye = new oe(), Ye = 2 * Math.PI;
      return function() {
        const un = e.object.position;
        p.copy(un).sub(e.target), p.applyQuaternion(L), r.setFromVector3(p), e.autoRotate && i === s.NONE && Q(O()), e.enableDamping ? (r.theta += c.theta * e.dampingFactor, r.phi += c.phi * e.dampingFactor) : (r.theta += c.theta, r.phi += c.phi);
        let xe = e.minAzimuthAngle, Ae = e.maxAzimuthAngle;
        return isFinite(xe) && isFinite(Ae) && (xe < -Math.PI ? xe += Ye : xe > Math.PI && (xe -= Ye), Ae < -Math.PI ? Ae += Ye : Ae > Math.PI && (Ae -= Ye), xe <= Ae ? r.theta = Math.max(xe, Math.min(Ae, r.theta)) : r.theta = r.theta > (xe + Ae) / 2 ? Math.max(xe, r.theta) : Math.min(Ae, r.theta)), r.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, r.phi)), r.makeSafe(), r.radius *= l, r.radius = Math.max(e.minDistance, Math.min(e.maxDistance, r.radius)), e.enableDamping === !0 ? e.target.addScaledVector(d, e.dampingFactor) : e.target.add(d), p.setFromSpherical(r), p.applyQuaternion(K), un.copy(e.target).add(p), e.object.lookAt(e.target), e.enableDamping === !0 ? (c.theta *= 1 - e.dampingFactor, c.phi *= 1 - e.dampingFactor, d.multiplyScalar(1 - e.dampingFactor)) : (c.set(0, 0, 0), d.set(0, 0, 0)), l = 1, u || ee.distanceToSquared(e.object.position) > o || 8 * (1 - ye.dot(e.object.quaternion)) > o ? (e.dispatchEvent(Tn), ee.copy(e.object.position), ye.copy(e.object.quaternion), u = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", an), e.domElement.removeEventListener("pointerdown", je), e.domElement.removeEventListener("pointercancel", sn), e.domElement.removeEventListener("wheel", on), e.domElement.removeEventListener("pointermove", It), e.domElement.removeEventListener("pointerup", Ot), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", rn);
    };
    const e = this, s = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let i = s.NONE;
    const o = 1e-6, r = new hn(), c = new hn();
    let l = 1;
    const d = new v();
    let u = !1;
    const h = new z(), f = new z(), y = new z(), m = new z(), w = new z(), g = new z(), b = new z(), M = new z(), x = new z(), T = [], R = {};
    function O() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function G() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function Q(p) {
      c.theta -= p;
    }
    function ue(p) {
      c.phi -= p;
    }
    const le = function() {
      const p = new v();
      return function(K, ee) {
        p.setFromMatrixColumn(ee, 0), p.multiplyScalar(-K), d.add(p);
      };
    }(), ie = function() {
      const p = new v();
      return function(K, ee) {
        e.screenSpacePanning === !0 ? p.setFromMatrixColumn(ee, 1) : (p.setFromMatrixColumn(ee, 0), p.crossVectors(e.object.up, p)), p.multiplyScalar(K), d.add(p);
      };
    }(), B = function() {
      const p = new v();
      return function(K, ee) {
        const ye = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const Ye = e.object.position;
          p.copy(Ye).sub(e.target);
          let yt = p.length();
          yt *= Math.tan(e.object.fov / 2 * Math.PI / 180), le(2 * K * yt / ye.clientHeight, e.object.matrix), ie(2 * ee * yt / ye.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (le(K * (e.object.right - e.object.left) / e.object.zoom / ye.clientWidth, e.object.matrix), ie(ee * (e.object.top - e.object.bottom) / e.object.zoom / ye.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function V(p) {
      e.object.isPerspectiveCamera ? l /= p : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * p)), e.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function F(p) {
      e.object.isPerspectiveCamera ? l *= p : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / p)), e.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function de(p) {
      h.set(p.clientX, p.clientY);
    }
    function W(p) {
      b.set(p.clientX, p.clientY);
    }
    function re(p) {
      m.set(p.clientX, p.clientY);
    }
    function q(p) {
      f.set(p.clientX, p.clientY), y.subVectors(f, h).multiplyScalar(e.rotateSpeed);
      const L = e.domElement;
      Q(2 * Math.PI * y.x / L.clientHeight), ue(2 * Math.PI * y.y / L.clientHeight), h.copy(f), e.update();
    }
    function Ce(p) {
      M.set(p.clientX, p.clientY), x.subVectors(M, b), x.y > 0 ? V(G()) : x.y < 0 && F(G()), b.copy(M), e.update();
    }
    function Ie(p) {
      w.set(p.clientX, p.clientY), g.subVectors(w, m).multiplyScalar(e.panSpeed), B(g.x, g.y), m.copy(w), e.update();
    }
    function ve(p) {
      p.deltaY < 0 ? F(G()) : p.deltaY > 0 && V(G()), e.update();
    }
    function We(p) {
      let L = !1;
      switch (p.code) {
        case e.keys.UP:
          p.ctrlKey || p.metaKey || p.shiftKey ? ue(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : B(0, e.keyPanSpeed), L = !0;
          break;
        case e.keys.BOTTOM:
          p.ctrlKey || p.metaKey || p.shiftKey ? ue(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : B(0, -e.keyPanSpeed), L = !0;
          break;
        case e.keys.LEFT:
          p.ctrlKey || p.metaKey || p.shiftKey ? Q(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : B(e.keyPanSpeed, 0), L = !0;
          break;
        case e.keys.RIGHT:
          p.ctrlKey || p.metaKey || p.shiftKey ? Q(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : B(-e.keyPanSpeed, 0), L = !0;
          break;
      }
      L && (p.preventDefault(), e.update());
    }
    function Oe() {
      if (T.length === 1)
        h.set(T[0].pageX, T[0].pageY);
      else {
        const p = 0.5 * (T[0].pageX + T[1].pageX), L = 0.5 * (T[0].pageY + T[1].pageY);
        h.set(p, L);
      }
    }
    function Je() {
      if (T.length === 1)
        m.set(T[0].pageX, T[0].pageY);
      else {
        const p = 0.5 * (T[0].pageX + T[1].pageX), L = 0.5 * (T[0].pageY + T[1].pageY);
        m.set(p, L);
      }
    }
    function gt() {
      const p = T[0].pageX - T[1].pageX, L = T[0].pageY - T[1].pageY, K = Math.sqrt(p * p + L * L);
      b.set(0, K);
    }
    function E() {
      e.enableZoom && gt(), e.enablePan && Je();
    }
    function P() {
      e.enableZoom && gt(), e.enableRotate && Oe();
    }
    function Y(p) {
      if (T.length == 1)
        f.set(p.pageX, p.pageY);
      else {
        const K = kt(p), ee = 0.5 * (p.pageX + K.x), ye = 0.5 * (p.pageY + K.y);
        f.set(ee, ye);
      }
      y.subVectors(f, h).multiplyScalar(e.rotateSpeed);
      const L = e.domElement;
      Q(2 * Math.PI * y.x / L.clientHeight), ue(2 * Math.PI * y.y / L.clientHeight), h.copy(f);
    }
    function J(p) {
      if (T.length === 1)
        w.set(p.pageX, p.pageY);
      else {
        const L = kt(p), K = 0.5 * (p.pageX + L.x), ee = 0.5 * (p.pageY + L.y);
        w.set(K, ee);
      }
      g.subVectors(w, m).multiplyScalar(e.panSpeed), B(g.x, g.y), m.copy(w);
    }
    function he(p) {
      const L = kt(p), K = p.pageX - L.x, ee = p.pageY - L.y, ye = Math.sqrt(K * K + ee * ee);
      M.set(0, ye), x.set(0, Math.pow(M.y / b.y, e.zoomSpeed)), V(x.y), b.copy(M);
    }
    function Ee(p) {
      e.enableZoom && he(p), e.enablePan && J(p);
    }
    function nn(p) {
      e.enableZoom && he(p), e.enableRotate && Y(p);
    }
    function je(p) {
      e.enabled !== !1 && (T.length === 0 && (e.domElement.setPointerCapture(p.pointerId), e.domElement.addEventListener("pointermove", It), e.domElement.addEventListener("pointerup", Ot)), ds(p), p.pointerType === "touch" ? ls(p) : as(p));
    }
    function It(p) {
      e.enabled !== !1 && (p.pointerType === "touch" ? us(p) : cs(p));
    }
    function Ot(p) {
      cn(p), T.length === 0 && (e.domElement.releasePointerCapture(p.pointerId), e.domElement.removeEventListener("pointermove", It), e.domElement.removeEventListener("pointerup", Ot)), e.dispatchEvent(Mn), i = s.NONE;
    }
    function sn(p) {
      cn(p);
    }
    function as(p) {
      let L;
      switch (p.button) {
        case 0:
          L = e.mouseButtons.LEFT;
          break;
        case 1:
          L = e.mouseButtons.MIDDLE;
          break;
        case 2:
          L = e.mouseButtons.RIGHT;
          break;
        default:
          L = -1;
      }
      switch (L) {
        case Pe.DOLLY:
          if (e.enableZoom === !1)
            return;
          W(p), i = s.DOLLY;
          break;
        case Pe.ROTATE:
          if (p.ctrlKey || p.metaKey || p.shiftKey) {
            if (e.enablePan === !1)
              return;
            re(p), i = s.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            de(p), i = s.ROTATE;
          }
          break;
        case Pe.PAN:
          if (p.ctrlKey || p.metaKey || p.shiftKey) {
            if (e.enableRotate === !1)
              return;
            de(p), i = s.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            re(p), i = s.PAN;
          }
          break;
        default:
          i = s.NONE;
      }
      i !== s.NONE && e.dispatchEvent(Nt);
    }
    function cs(p) {
      switch (i) {
        case s.ROTATE:
          if (e.enableRotate === !1)
            return;
          q(p);
          break;
        case s.DOLLY:
          if (e.enableZoom === !1)
            return;
          Ce(p);
          break;
        case s.PAN:
          if (e.enablePan === !1)
            return;
          Ie(p);
          break;
      }
    }
    function on(p) {
      e.enabled === !1 || e.enableZoom === !1 || i !== s.NONE || (p.preventDefault(), e.dispatchEvent(Nt), ve(p), e.dispatchEvent(Mn));
    }
    function rn(p) {
      e.enabled === !1 || e.enablePan === !1 || We(p);
    }
    function ls(p) {
      switch (ln(p), T.length) {
        case 1:
          switch (e.touches.ONE) {
            case Ve.ROTATE:
              if (e.enableRotate === !1)
                return;
              Oe(), i = s.TOUCH_ROTATE;
              break;
            case Ve.PAN:
              if (e.enablePan === !1)
                return;
              Je(), i = s.TOUCH_PAN;
              break;
            default:
              i = s.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case Ve.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              E(), i = s.TOUCH_DOLLY_PAN;
              break;
            case Ve.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              P(), i = s.TOUCH_DOLLY_ROTATE;
              break;
            default:
              i = s.NONE;
          }
          break;
        default:
          i = s.NONE;
      }
      i !== s.NONE && e.dispatchEvent(Nt);
    }
    function us(p) {
      switch (ln(p), i) {
        case s.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          Y(p), e.update();
          break;
        case s.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          J(p), e.update();
          break;
        case s.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          Ee(p), e.update();
          break;
        case s.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          nn(p), e.update();
          break;
        default:
          i = s.NONE;
      }
    }
    function an(p) {
      e.enabled !== !1 && p.preventDefault();
    }
    function ds(p) {
      T.push(p);
    }
    function cn(p) {
      delete R[p.pointerId];
      for (let L = 0; L < T.length; L++)
        if (T[L].pointerId == p.pointerId) {
          T.splice(L, 1);
          return;
        }
    }
    function ln(p) {
      let L = R[p.pointerId];
      L === void 0 && (L = new z(), R[p.pointerId] = L), L.set(p.pageX, p.pageY);
    }
    function kt(p) {
      const L = p.pointerId === T[0].pointerId ? T[1] : T[0];
      return R[L.pointerId];
    }
    e.domElement.addEventListener("contextmenu", an), e.domElement.addEventListener("pointerdown", je), e.domElement.addEventListener("pointercancel", sn), e.domElement.addEventListener("wheel", on, { passive: !1 }), this.update();
  }
}
const Io = {
  name: "OrbitControls",
  render: () => null
}, Oo = /* @__PURE__ */ I({
  ...Io,
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
  setup(a, { expose: n }) {
    const t = a, e = Ne(null);
    S("addControls")(e);
    const s = S("parentCamera"), i = S("canvas");
    function o() {
      e.value != null && (e.value.enablePan = t.enablePan, e.value.enableRotate = t.enableRotate, e.value.enableZoom = t.enableZoom, e.value.minZoom = t.minZoom, e.value.maxZoom = t.maxZoom, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance, e.value.minPolarAngle = t.minPolarAngle, e.value.maxPolarAngle = t.maxPolarAngle, e.value.minAzimuthAngle = t.minAzimuthAngle, e.value.maxAzimuthAngle = t.maxAzimuthAngle);
    }
    let r = !1;
    const c = () => {
      i.value && (r || (e.value = new Co(s, i.value), o(), C(t, "target", e.value), r = !0));
    };
    return N(i, () => {
      c();
    }), o(), _(t, "enablePan", o), _(t, "enableRotate", o), _(t, "enableZoom", o), _(t, "minZoom", o), _(t, "maxZoom", o), _(t, "minDistance", o), _(t, "maxDistance", o), _(t, "minPolarAngle", o), _(t, "maxPolarAngle", o), _(t, "minAzimuthAngle", o), _(t, "maxAzimuthAngle", o), n({ three: e }), { props: t, three: e, camera: s, canvas: i, applyProps: o, get boundCamera() {
      return r;
    }, set boundCamera(l) {
      r = l;
    }, tryBindCamera: c };
  }
}), jt = { type: "change" }, Gt = { type: "start" }, Ft = { type: "end" };
class ko extends Bn {
  constructor(n, t) {
    super();
    const e = this, s = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };
    this.object = n, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.screen = { left: 0, top: 0, width: 0, height: 0 }, this.rotateSpeed = 1, this.zoomSpeed = 1.2, this.panSpeed = 0.3, this.noRotate = !1, this.noZoom = !1, this.noPan = !1, this.staticMoving = !1, this.dynamicDampingFactor = 0.2, this.minDistance = 0, this.maxDistance = 1 / 0, this.keys = [
      "KeyA",
      "KeyS",
      "KeyD"
      /*D*/
    ], this.mouseButtons = { LEFT: Pe.ROTATE, MIDDLE: Pe.DOLLY, RIGHT: Pe.PAN }, this.target = new v();
    const i = 1e-6, o = new v();
    let r = 1, c = s.NONE, l = s.NONE, d = 0, u = 0, h = 0;
    const f = new v(), y = new z(), m = new z(), w = new v(), g = new z(), b = new z(), M = new z(), x = new z(), T = [], R = {};
    this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.up0 = this.object.up.clone(), this.zoom0 = this.object.zoom, this.handleResize = function() {
      const E = e.domElement.getBoundingClientRect(), P = e.domElement.ownerDocument.documentElement;
      e.screen.left = E.left + window.pageXOffset - P.clientLeft, e.screen.top = E.top + window.pageYOffset - P.clientTop, e.screen.width = E.width, e.screen.height = E.height;
    };
    const O = function() {
      const E = new z();
      return function(Y, J) {
        return E.set(
          (Y - e.screen.left) / e.screen.width,
          (J - e.screen.top) / e.screen.height
        ), E;
      };
    }(), G = function() {
      const E = new z();
      return function(Y, J) {
        return E.set(
          (Y - e.screen.width * 0.5 - e.screen.left) / (e.screen.width * 0.5),
          (e.screen.height + 2 * (e.screen.top - J)) / e.screen.width
          // screen.width intentional
        ), E;
      };
    }();
    this.rotateCamera = function() {
      const E = new v(), P = new oe(), Y = new v(), J = new v(), he = new v(), Ee = new v();
      return function() {
        Ee.set(m.x - y.x, m.y - y.y, 0);
        let je = Ee.length();
        je ? (f.copy(e.object.position).sub(e.target), Y.copy(f).normalize(), J.copy(e.object.up).normalize(), he.crossVectors(J, Y).normalize(), J.setLength(m.y - y.y), he.setLength(m.x - y.x), Ee.copy(J.add(he)), E.crossVectors(Ee, f).normalize(), je *= e.rotateSpeed, P.setFromAxisAngle(E, je), f.applyQuaternion(P), e.object.up.applyQuaternion(P), w.copy(E), h = je) : !e.staticMoving && h && (h *= Math.sqrt(1 - e.dynamicDampingFactor), f.copy(e.object.position).sub(e.target), P.setFromAxisAngle(w, h), f.applyQuaternion(P), e.object.up.applyQuaternion(P)), y.copy(m);
      };
    }(), this.zoomCamera = function() {
      let E;
      c === s.TOUCH_ZOOM_PAN ? (E = d / u, d = u, e.object.isPerspectiveCamera ? f.multiplyScalar(E) : e.object.isOrthographicCamera ? (e.object.zoom /= E, e.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")) : (E = 1 + (b.y - g.y) * e.zoomSpeed, E !== 1 && E > 0 && (e.object.isPerspectiveCamera ? f.multiplyScalar(E) : e.object.isOrthographicCamera ? (e.object.zoom /= E, e.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")), e.staticMoving ? g.copy(b) : g.y += (b.y - g.y) * this.dynamicDampingFactor);
    }, this.panCamera = function() {
      const E = new z(), P = new v(), Y = new v();
      return function() {
        if (E.copy(x).sub(M), E.lengthSq()) {
          if (e.object.isOrthographicCamera) {
            const he = (e.object.right - e.object.left) / e.object.zoom / e.domElement.clientWidth, Ee = (e.object.top - e.object.bottom) / e.object.zoom / e.domElement.clientWidth;
            E.x *= he, E.y *= Ee;
          }
          E.multiplyScalar(f.length() * e.panSpeed), Y.copy(f).cross(e.object.up).setLength(E.x), Y.add(P.copy(e.object.up).setLength(E.y)), e.object.position.add(Y), e.target.add(Y), e.staticMoving ? M.copy(x) : M.add(E.subVectors(x, M).multiplyScalar(e.dynamicDampingFactor));
        }
      };
    }(), this.checkDistances = function() {
      (!e.noZoom || !e.noPan) && (f.lengthSq() > e.maxDistance * e.maxDistance && (e.object.position.addVectors(e.target, f.setLength(e.maxDistance)), g.copy(b)), f.lengthSq() < e.minDistance * e.minDistance && (e.object.position.addVectors(e.target, f.setLength(e.minDistance)), g.copy(b)));
    }, this.update = function() {
      f.subVectors(e.object.position, e.target), e.noRotate || e.rotateCamera(), e.noZoom || e.zoomCamera(), e.noPan || e.panCamera(), e.object.position.addVectors(e.target, f), e.object.isPerspectiveCamera ? (e.checkDistances(), e.object.lookAt(e.target), o.distanceToSquared(e.object.position) > i && (e.dispatchEvent(jt), o.copy(e.object.position))) : e.object.isOrthographicCamera ? (e.object.lookAt(e.target), (o.distanceToSquared(e.object.position) > i || r !== e.object.zoom) && (e.dispatchEvent(jt), o.copy(e.object.position), r = e.object.zoom)) : console.warn("THREE.TrackballControls: Unsupported camera type");
    }, this.reset = function() {
      c = s.NONE, l = s.NONE, e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.up.copy(e.up0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), f.subVectors(e.object.position, e.target), e.object.lookAt(e.target), e.dispatchEvent(jt), o.copy(e.object.position), r = e.object.zoom;
    };
    function Q(E) {
      e.enabled !== !1 && (T.length === 0 && (e.domElement.setPointerCapture(E.pointerId), e.domElement.addEventListener("pointermove", ue), e.domElement.addEventListener("pointerup", le)), We(E), E.pointerType === "touch" ? q(E) : F(E));
    }
    function ue(E) {
      e.enabled !== !1 && (E.pointerType === "touch" ? Ce(E) : de(E));
    }
    function le(E) {
      e.enabled !== !1 && (E.pointerType === "touch" ? Ie(E) : W(), Oe(E), T.length === 0 && (e.domElement.releasePointerCapture(E.pointerId), e.domElement.removeEventListener("pointermove", ue), e.domElement.removeEventListener("pointerup", le)));
    }
    function ie(E) {
      Oe(E);
    }
    function B(E) {
      e.enabled !== !1 && (window.removeEventListener("keydown", B), l === s.NONE && (E.code === e.keys[s.ROTATE] && !e.noRotate ? l = s.ROTATE : E.code === e.keys[s.ZOOM] && !e.noZoom ? l = s.ZOOM : E.code === e.keys[s.PAN] && !e.noPan && (l = s.PAN)));
    }
    function V() {
      e.enabled !== !1 && (l = s.NONE, window.addEventListener("keydown", B));
    }
    function F(E) {
      if (c === s.NONE)
        switch (E.button) {
          case e.mouseButtons.LEFT:
            c = s.ROTATE;
            break;
          case e.mouseButtons.MIDDLE:
            c = s.ZOOM;
            break;
          case e.mouseButtons.RIGHT:
            c = s.PAN;
            break;
        }
      const P = l !== s.NONE ? l : c;
      P === s.ROTATE && !e.noRotate ? (m.copy(G(E.pageX, E.pageY)), y.copy(m)) : P === s.ZOOM && !e.noZoom ? (g.copy(O(E.pageX, E.pageY)), b.copy(g)) : P === s.PAN && !e.noPan && (M.copy(O(E.pageX, E.pageY)), x.copy(M)), e.dispatchEvent(Gt);
    }
    function de(E) {
      const P = l !== s.NONE ? l : c;
      P === s.ROTATE && !e.noRotate ? (y.copy(m), m.copy(G(E.pageX, E.pageY))) : P === s.ZOOM && !e.noZoom ? b.copy(O(E.pageX, E.pageY)) : P === s.PAN && !e.noPan && x.copy(O(E.pageX, E.pageY));
    }
    function W() {
      c = s.NONE, e.dispatchEvent(Ft);
    }
    function re(E) {
      if (e.enabled !== !1 && e.noZoom !== !0) {
        switch (E.preventDefault(), E.deltaMode) {
          case 2:
            g.y -= E.deltaY * 0.025;
            break;
          case 1:
            g.y -= E.deltaY * 0.01;
            break;
          default:
            g.y -= E.deltaY * 25e-5;
            break;
        }
        e.dispatchEvent(Gt), e.dispatchEvent(Ft);
      }
    }
    function q(E) {
      switch (Je(E), T.length) {
        case 1:
          c = s.TOUCH_ROTATE, m.copy(G(T[0].pageX, T[0].pageY)), y.copy(m);
          break;
        default:
          c = s.TOUCH_ZOOM_PAN;
          const P = T[0].pageX - T[1].pageX, Y = T[0].pageY - T[1].pageY;
          u = d = Math.sqrt(P * P + Y * Y);
          const J = (T[0].pageX + T[1].pageX) / 2, he = (T[0].pageY + T[1].pageY) / 2;
          M.copy(O(J, he)), x.copy(M);
          break;
      }
      e.dispatchEvent(Gt);
    }
    function Ce(E) {
      switch (Je(E), T.length) {
        case 1:
          y.copy(m), m.copy(G(E.pageX, E.pageY));
          break;
        default:
          const P = gt(E), Y = E.pageX - P.x, J = E.pageY - P.y;
          u = Math.sqrt(Y * Y + J * J);
          const he = (E.pageX + P.x) / 2, Ee = (E.pageY + P.y) / 2;
          x.copy(O(he, Ee));
          break;
      }
    }
    function Ie(E) {
      switch (T.length) {
        case 0:
          c = s.NONE;
          break;
        case 1:
          c = s.TOUCH_ROTATE, m.copy(G(E.pageX, E.pageY)), y.copy(m);
          break;
        case 2:
          c = s.TOUCH_ZOOM_PAN;
          for (let P = 0; P < T.length; P++)
            if (T[P].pointerId !== E.pointerId) {
              const Y = R[T[P].pointerId];
              m.copy(G(Y.x, Y.y)), y.copy(m);
              break;
            }
          break;
      }
      e.dispatchEvent(Ft);
    }
    function ve(E) {
      e.enabled !== !1 && E.preventDefault();
    }
    function We(E) {
      T.push(E);
    }
    function Oe(E) {
      delete R[E.pointerId];
      for (let P = 0; P < T.length; P++)
        if (T[P].pointerId == E.pointerId) {
          T.splice(P, 1);
          return;
        }
    }
    function Je(E) {
      let P = R[E.pointerId];
      P === void 0 && (P = new z(), R[E.pointerId] = P), P.set(E.pageX, E.pageY);
    }
    function gt(E) {
      const P = E.pointerId === T[0].pointerId ? T[1] : T[0];
      return R[P.pointerId];
    }
    this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", ve), e.domElement.removeEventListener("pointerdown", Q), e.domElement.removeEventListener("pointercancel", ie), e.domElement.removeEventListener("wheel", re), e.domElement.removeEventListener("pointermove", ue), e.domElement.removeEventListener("pointerup", le), window.removeEventListener("keydown", B), window.removeEventListener("keyup", V);
    }, this.domElement.addEventListener("contextmenu", ve), this.domElement.addEventListener("pointerdown", Q), this.domElement.addEventListener("pointercancel", ie), this.domElement.addEventListener("wheel", re, { passive: !1 }), window.addEventListener("keydown", B), window.addEventListener("keyup", V), this.handleResize(), this.update();
  }
}
const Do = {
  name: "TrackballControls",
  render: () => null
}, Ho = /* @__PURE__ */ I({
  ...Do,
  props: {
    minDistance: { default: 0 },
    maxDistance: { default: 1 / 0 },
    panSpeed: { default: 0.3 },
    rotateSpeed: { default: 1 },
    zoomSpeed: { default: 1.2 }
  },
  setup(a, { expose: n }) {
    const t = a, e = Ne(null);
    S("addControls")(e);
    const s = S("parentCamera"), i = S("canvas");
    function o() {
      e.value != null && (e.value.rotateSpeed = t.rotateSpeed, e.value.zoomSpeed = t.zoomSpeed, e.value.panSpeed = t.panSpeed, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance);
    }
    let r = !1;
    const c = () => {
      if (!i.value || r)
        return;
      e.value = new ko(s, i.value), new ResizeObserver((d) => {
        d.forEach((u) => {
          var h;
          (h = e.value) == null || h.handleResize();
        });
      }).observe(i.value), o(), r = !0;
    };
    return N(i, () => {
      c();
    }), o(), _(t, "panSpeed", o), _(t, "rotateSpeed", o), _(t, "zoomSpeed", o), _(t, "minDistance", o), _(t, "maxDistance", o), n({ three: e }), { props: t, three: e, camera: s, canvas: i, applyProps: o, get boundCamera() {
      return r;
    }, set boundCamera(l) {
      r = l;
    }, tryBindCamera: c };
  }
}), Ge = new Vt(), ae = new v(), ke = new v(), X = new oe(), Sn = {
  X: new v(1, 0, 0),
  Y: new v(0, 1, 0),
  Z: new v(0, 0, 1)
}, zt = { type: "change" }, vn = { type: "mouseDown" }, xn = { type: "mouseUp", mode: null }, An = { type: "objectChange" };
class No extends dt {
  constructor(n, t) {
    super(), t === void 0 && (console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'), t = document), this.isTransformControls = !0, this.visible = !1, this.domElement = t, this.domElement.style.touchAction = "none";
    const e = new Bo();
    this._gizmo = e, this.add(e);
    const s = new Xo();
    this._plane = s, this.add(s);
    const i = this;
    function o(b, M) {
      let x = M;
      Object.defineProperty(i, b, {
        get: function() {
          return x !== void 0 ? x : M;
        },
        set: function(T) {
          x !== T && (x = T, s[b] = T, e[b] = T, i.dispatchEvent({ type: b + "-changed", value: T }), i.dispatchEvent(zt));
        }
      }), i[b] = M, s[b] = M, e[b] = M;
    }
    o("camera", n), o("object", void 0), o("enabled", !0), o("axis", null), o("mode", "translate"), o("translationSnap", null), o("rotationSnap", null), o("scaleSnap", null), o("space", "world"), o("size", 1), o("dragging", !1), o("showX", !0), o("showY", !0), o("showZ", !0);
    const r = new v(), c = new v(), l = new oe(), d = new oe(), u = new v(), h = new oe(), f = new v(), y = new v(), m = new v(), w = 0, g = new v();
    o("worldPosition", r), o("worldPositionStart", c), o("worldQuaternion", l), o("worldQuaternionStart", d), o("cameraPosition", u), o("cameraQuaternion", h), o("pointStart", f), o("pointEnd", y), o("rotationAxis", m), o("rotationAngle", w), o("eye", g), this._offset = new v(), this._startNorm = new v(), this._endNorm = new v(), this._cameraScale = new v(), this._parentPosition = new v(), this._parentQuaternion = new oe(), this._parentQuaternionInv = new oe(), this._parentScale = new v(), this._worldScaleStart = new v(), this._worldQuaternionInv = new oe(), this._worldScale = new v(), this._positionStart = new v(), this._quaternionStart = new oe(), this._scaleStart = new v(), this._getPointer = jo.bind(this), this._onPointerDown = Fo.bind(this), this._onPointerHover = Go.bind(this), this._onPointerMove = zo.bind(this), this._onPointerUp = Uo.bind(this), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointermove", this._onPointerHover), this.domElement.addEventListener("pointerup", this._onPointerUp);
  }
  // updateMatrixWorld  updates key transformation variables
  updateMatrixWorld() {
    this.object !== void 0 && (this.object.updateMatrixWorld(), this.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : this.object.parent.matrixWorld.decompose(this._parentPosition, this._parentQuaternion, this._parentScale), this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this._worldScale), this._parentQuaternionInv.copy(this._parentQuaternion).invert(), this._worldQuaternionInv.copy(this.worldQuaternion).invert()), this.camera.updateMatrixWorld(), this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this._cameraScale), this.camera.isOrthographicCamera ? this.camera.getWorldDirection(this.eye).negate() : this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(), super.updateMatrixWorld(this);
  }
  pointerHover(n) {
    if (this.object === void 0 || this.dragging === !0)
      return;
    Ge.setFromCamera(n, this.camera);
    const t = Ut(this._gizmo.picker[this.mode], Ge);
    t ? this.axis = t.object.name : this.axis = null;
  }
  pointerDown(n) {
    if (!(this.object === void 0 || this.dragging === !0 || n.button !== 0) && this.axis !== null) {
      Ge.setFromCamera(n, this.camera);
      const t = Ut(this._plane, Ge, !0);
      t && (this.object.updateMatrixWorld(), this.object.parent.updateMatrixWorld(), this._positionStart.copy(this.object.position), this._quaternionStart.copy(this.object.quaternion), this._scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart), this.pointStart.copy(t.point).sub(this.worldPositionStart)), this.dragging = !0, vn.mode = this.mode, this.dispatchEvent(vn);
    }
  }
  pointerMove(n) {
    const t = this.axis, e = this.mode, s = this.object;
    let i = this.space;
    if (e === "scale" ? i = "local" : (t === "E" || t === "XYZE" || t === "XYZ") && (i = "world"), s === void 0 || t === null || this.dragging === !1 || n.button !== -1)
      return;
    Ge.setFromCamera(n, this.camera);
    const o = Ut(this._plane, Ge, !0);
    if (o) {
      if (this.pointEnd.copy(o.point).sub(this.worldPositionStart), e === "translate")
        this._offset.copy(this.pointEnd).sub(this.pointStart), i === "local" && t !== "XYZ" && this._offset.applyQuaternion(this._worldQuaternionInv), t.indexOf("X") === -1 && (this._offset.x = 0), t.indexOf("Y") === -1 && (this._offset.y = 0), t.indexOf("Z") === -1 && (this._offset.z = 0), i === "local" && t !== "XYZ" ? this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale) : this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale), s.position.copy(this._offset).add(this._positionStart), this.translationSnap && (i === "local" && (s.position.applyQuaternion(X.copy(this._quaternionStart).invert()), t.search("X") !== -1 && (s.position.x = Math.round(s.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (s.position.y = Math.round(s.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (s.position.z = Math.round(s.position.z / this.translationSnap) * this.translationSnap), s.position.applyQuaternion(this._quaternionStart)), i === "world" && (s.parent && s.position.add(ae.setFromMatrixPosition(s.parent.matrixWorld)), t.search("X") !== -1 && (s.position.x = Math.round(s.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (s.position.y = Math.round(s.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (s.position.z = Math.round(s.position.z / this.translationSnap) * this.translationSnap), s.parent && s.position.sub(ae.setFromMatrixPosition(s.parent.matrixWorld))));
      else if (e === "scale") {
        if (t.search("XYZ") !== -1) {
          let r = this.pointEnd.length() / this.pointStart.length();
          this.pointEnd.dot(this.pointStart) < 0 && (r *= -1), ke.set(r, r, r);
        } else
          ae.copy(this.pointStart), ke.copy(this.pointEnd), ae.applyQuaternion(this._worldQuaternionInv), ke.applyQuaternion(this._worldQuaternionInv), ke.divide(ae), t.search("X") === -1 && (ke.x = 1), t.search("Y") === -1 && (ke.y = 1), t.search("Z") === -1 && (ke.z = 1);
        s.scale.copy(this._scaleStart).multiply(ke), this.scaleSnap && (t.search("X") !== -1 && (s.scale.x = Math.round(s.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Y") !== -1 && (s.scale.y = Math.round(s.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Z") !== -1 && (s.scale.z = Math.round(s.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
      } else if (e === "rotate") {
        this._offset.copy(this.pointEnd).sub(this.pointStart);
        const r = 20 / this.worldPosition.distanceTo(ae.setFromMatrixPosition(this.camera.matrixWorld));
        t === "E" ? (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this._startNorm.copy(this.pointStart).normalize(), this._endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1) : t === "XYZE" ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(), this.rotationAngle = this._offset.dot(ae.copy(this.rotationAxis).cross(this.eye)) * r) : (t === "X" || t === "Y" || t === "Z") && (this.rotationAxis.copy(Sn[t]), ae.copy(Sn[t]), i === "local" && ae.applyQuaternion(this.worldQuaternion), this.rotationAngle = this._offset.dot(ae.cross(this.eye).normalize()) * r), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), i === "local" && t !== "E" && t !== "XYZE" ? (s.quaternion.copy(this._quaternionStart), s.quaternion.multiply(X.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv), s.quaternion.copy(X.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), s.quaternion.multiply(this._quaternionStart).normalize());
      }
      this.dispatchEvent(zt), this.dispatchEvent(An);
    }
  }
  pointerUp(n) {
    n.button === 0 && (this.dragging && this.axis !== null && (xn.mode = this.mode, this.dispatchEvent(xn)), this.dragging = !1, this.axis = null);
  }
  dispose() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerHover), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.traverse(function(n) {
      n.geometry && n.geometry.dispose(), n.material && n.material.dispose();
    });
  }
  // Set current object
  attach(n) {
    return this.object = n, this.visible = !0, this;
  }
  // Detach from object
  detach() {
    return this.object = void 0, this.visible = !1, this.axis = null, this;
  }
  reset() {
    this.enabled && this.dragging && (this.object.position.copy(this._positionStart), this.object.quaternion.copy(this._quaternionStart), this.object.scale.copy(this._scaleStart), this.dispatchEvent(zt), this.dispatchEvent(An), this.pointStart.copy(this.pointEnd));
  }
  getRaycaster() {
    return Ge;
  }
  // TODO: deprecate
  getMode() {
    return this.mode;
  }
  setMode(n) {
    this.mode = n;
  }
  setTranslationSnap(n) {
    this.translationSnap = n;
  }
  setRotationSnap(n) {
    this.rotationSnap = n;
  }
  setScaleSnap(n) {
    this.scaleSnap = n;
  }
  setSize(n) {
    this.size = n;
  }
  setSpace(n) {
    this.space = n;
  }
}
function jo(a) {
  if (this.domElement.ownerDocument.pointerLockElement)
    return {
      x: 0,
      y: 0,
      button: a.button
    };
  {
    const n = this.domElement.getBoundingClientRect();
    return {
      x: (a.clientX - n.left) / n.width * 2 - 1,
      y: -(a.clientY - n.top) / n.height * 2 + 1,
      button: a.button
    };
  }
}
function Go(a) {
  if (this.enabled)
    switch (a.pointerType) {
      case "mouse":
      case "pen":
        this.pointerHover(this._getPointer(a));
        break;
    }
}
function Fo(a) {
  this.enabled && (document.pointerLockElement || this.domElement.setPointerCapture(a.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.pointerHover(this._getPointer(a)), this.pointerDown(this._getPointer(a)));
}
function zo(a) {
  this.enabled && this.pointerMove(this._getPointer(a));
}
function Uo(a) {
  this.enabled && (this.domElement.releasePointerCapture(a.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.pointerUp(this._getPointer(a)));
}
function Ut(a, n, t) {
  const e = n.intersectObject(a, !0);
  for (let s = 0; s < e.length; s++)
    if (e[s].object.visible || t)
      return e[s];
  return !1;
}
const bt = new ws(), j = new v(0, 1, 0), Rn = new v(0, 0, 0), Pn = new Ke(), Et = new oe(), St = new oe(), Te = new v(), Ln = new Ke(), at = new v(1, 0, 0), Fe = new v(0, 1, 0), ct = new v(0, 0, 1), Tt = new v(), st = new v(), ot = new v();
class Bo extends dt {
  constructor() {
    super(), this.isTransformControlsGizmo = !0, this.type = "TransformControlsGizmo";
    const n = new we({
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      toneMapped: !1,
      transparent: !0
    }), t = new Le({
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      toneMapped: !1,
      transparent: !0
    }), e = n.clone();
    e.opacity = 0.15;
    const s = t.clone();
    s.opacity = 0.5;
    const i = n.clone();
    i.color.setHex(16711680);
    const o = n.clone();
    o.color.setHex(65280);
    const r = n.clone();
    r.color.setHex(255);
    const c = n.clone();
    c.color.setHex(16711680), c.opacity = 0.5;
    const l = n.clone();
    l.color.setHex(65280), l.opacity = 0.5;
    const d = n.clone();
    d.color.setHex(255), d.opacity = 0.5;
    const u = n.clone();
    u.opacity = 0.25;
    const h = n.clone();
    h.color.setHex(16776960), h.opacity = 0.25, n.clone().color.setHex(16776960);
    const y = n.clone();
    y.color.setHex(7895160);
    const m = new se(0, 0.04, 0.1, 12);
    m.translate(0, 0.05, 0);
    const w = new te(0.08, 0.08, 0.08);
    w.translate(0, 0.04, 0);
    const g = new U();
    g.setAttribute("position", new _e([0, 0, 0, 1, 0, 0], 3));
    const b = new se(75e-4, 75e-4, 0.5, 3);
    b.translate(0, 0.25, 0);
    function M(F, de) {
      const W = new et(F, 75e-4, 3, 64, de * Math.PI * 2);
      return W.rotateY(Math.PI / 2), W.rotateX(Math.PI / 2), W;
    }
    function x() {
      const F = new U();
      return F.setAttribute("position", new _e([0, 0, 0, 1, 1, 1], 3)), F;
    }
    const T = {
      X: [
        [new A(m, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
        [new A(m, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
        [new A(b, i), [0, 0, 0], [0, 0, -Math.PI / 2]]
      ],
      Y: [
        [new A(m, o), [0, 0.5, 0]],
        [new A(m, o), [0, -0.5, 0], [Math.PI, 0, 0]],
        [new A(b, o)]
      ],
      Z: [
        [new A(m, r), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
        [new A(m, r), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
        [new A(b, r), null, [Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new A(new _t(0.1, 0), u.clone()), [0, 0, 0]]
      ],
      XY: [
        [new A(new te(0.15, 0.15, 0.01), d.clone()), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new A(new te(0.15, 0.15, 0.01), c.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new A(new te(0.15, 0.15, 0.01), l.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ]
    }, R = {
      X: [
        [new A(new se(0.2, 0, 0.6, 4), e), [0.3, 0, 0], [0, 0, -Math.PI / 2]],
        [new A(new se(0.2, 0, 0.6, 4), e), [-0.3, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new A(new se(0.2, 0, 0.6, 4), e), [0, 0.3, 0]],
        [new A(new se(0.2, 0, 0.6, 4), e), [0, -0.3, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new A(new se(0.2, 0, 0.6, 4), e), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
        [new A(new se(0.2, 0, 0.6, 4), e), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new A(new _t(0.2, 0), e)]
      ],
      XY: [
        [new A(new te(0.2, 0.2, 0.01), e), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new A(new te(0.2, 0.2, 0.01), e), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new A(new te(0.2, 0.2, 0.01), e), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ]
    }, O = {
      START: [
        [new A(new _t(0.01, 2), s), null, null, null, "helper"]
      ],
      END: [
        [new A(new _t(0.01, 2), s), null, null, null, "helper"]
      ],
      DELTA: [
        [new Me(x(), s), null, null, null, "helper"]
      ],
      X: [
        [new Me(g, s.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ],
      Y: [
        [new Me(g, s.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]
      ],
      Z: [
        [new Me(g, s.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]
      ]
    }, G = {
      XYZE: [
        [new A(M(0.5, 1), y), null, [0, Math.PI / 2, 0]]
      ],
      X: [
        [new A(M(0.5, 0.5), i)]
      ],
      Y: [
        [new A(M(0.5, 0.5), o), null, [0, 0, -Math.PI / 2]]
      ],
      Z: [
        [new A(M(0.5, 0.5), r), null, [0, Math.PI / 2, 0]]
      ],
      E: [
        [new A(M(0.75, 1), h), null, [0, Math.PI / 2, 0]]
      ]
    }, Q = {
      AXIS: [
        [new Me(g, s.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ]
    }, ue = {
      XYZE: [
        [new A(new Xn(0.25, 10, 8), e)]
      ],
      X: [
        [new A(new et(0.5, 0.1, 4, 24), e), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]
      ],
      Y: [
        [new A(new et(0.5, 0.1, 4, 24), e), [0, 0, 0], [Math.PI / 2, 0, 0]]
      ],
      Z: [
        [new A(new et(0.5, 0.1, 4, 24), e), [0, 0, 0], [0, 0, -Math.PI / 2]]
      ],
      E: [
        [new A(new et(0.75, 0.1, 2, 24), e)]
      ]
    }, le = {
      X: [
        [new A(w, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
        [new A(b, i), [0, 0, 0], [0, 0, -Math.PI / 2]],
        [new A(w, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new A(w, o), [0, 0.5, 0]],
        [new A(b, o)],
        [new A(w, o), [0, -0.5, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new A(w, r), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
        [new A(b, r), [0, 0, 0], [Math.PI / 2, 0, 0]],
        [new A(w, r), [0, 0, -0.5], [-Math.PI / 2, 0, 0]]
      ],
      XY: [
        [new A(new te(0.15, 0.15, 0.01), d), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new A(new te(0.15, 0.15, 0.01), c), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new A(new te(0.15, 0.15, 0.01), l), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new A(new te(0.1, 0.1, 0.1), u.clone())]
      ]
    }, ie = {
      X: [
        [new A(new se(0.2, 0, 0.6, 4), e), [0.3, 0, 0], [0, 0, -Math.PI / 2]],
        [new A(new se(0.2, 0, 0.6, 4), e), [-0.3, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new A(new se(0.2, 0, 0.6, 4), e), [0, 0.3, 0]],
        [new A(new se(0.2, 0, 0.6, 4), e), [0, -0.3, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new A(new se(0.2, 0, 0.6, 4), e), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
        [new A(new se(0.2, 0, 0.6, 4), e), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]
      ],
      XY: [
        [new A(new te(0.2, 0.2, 0.01), e), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new A(new te(0.2, 0.2, 0.01), e), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new A(new te(0.2, 0.2, 0.01), e), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new A(new te(0.2, 0.2, 0.2), e), [0, 0, 0]]
      ]
    }, B = {
      X: [
        [new Me(g, s.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ],
      Y: [
        [new Me(g, s.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]
      ],
      Z: [
        [new Me(g, s.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]
      ]
    };
    function V(F) {
      const de = new dt();
      for (const W in F)
        for (let re = F[W].length; re--; ) {
          const q = F[W][re][0].clone(), Ce = F[W][re][1], Ie = F[W][re][2], ve = F[W][re][3], We = F[W][re][4];
          q.name = W, q.tag = We, Ce && q.position.set(Ce[0], Ce[1], Ce[2]), Ie && q.rotation.set(Ie[0], Ie[1], Ie[2]), ve && q.scale.set(ve[0], ve[1], ve[2]), q.updateMatrix();
          const Oe = q.geometry.clone();
          Oe.applyMatrix4(q.matrix), q.geometry = Oe, q.renderOrder = 1 / 0, q.position.set(0, 0, 0), q.rotation.set(0, 0, 0), q.scale.set(1, 1, 1), de.add(q);
        }
      return de;
    }
    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = V(T)), this.add(this.gizmo.rotate = V(G)), this.add(this.gizmo.scale = V(le)), this.add(this.picker.translate = V(R)), this.add(this.picker.rotate = V(ue)), this.add(this.picker.scale = V(ie)), this.add(this.helper.translate = V(O)), this.add(this.helper.rotate = V(Q)), this.add(this.helper.scale = V(B)), this.picker.translate.visible = !1, this.picker.rotate.visible = !1, this.picker.scale.visible = !1;
  }
  // updateMatrixWorld will update transformations and appearance of individual handles
  updateMatrixWorld(n) {
    const e = (this.mode === "scale" ? "local" : this.space) === "local" ? this.worldQuaternion : St;
    this.gizmo.translate.visible = this.mode === "translate", this.gizmo.rotate.visible = this.mode === "rotate", this.gizmo.scale.visible = this.mode === "scale", this.helper.translate.visible = this.mode === "translate", this.helper.rotate.visible = this.mode === "rotate", this.helper.scale.visible = this.mode === "scale";
    let s = [];
    s = s.concat(this.picker[this.mode].children), s = s.concat(this.gizmo[this.mode].children), s = s.concat(this.helper[this.mode].children);
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      o.visible = !0, o.rotation.set(0, 0, 0), o.position.copy(this.worldPosition);
      let r;
      if (this.camera.isOrthographicCamera ? r = (this.camera.top - this.camera.bottom) / this.camera.zoom : r = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), o.scale.set(1, 1, 1).multiplyScalar(r * this.size / 4), o.tag === "helper") {
        o.visible = !1, o.name === "AXIS" ? (o.visible = !!this.axis, this.axis === "X" && (X.setFromEuler(bt.set(0, 0, 0)), o.quaternion.copy(e).multiply(X), Math.abs(j.copy(at).applyQuaternion(e).dot(this.eye)) > 0.9 && (o.visible = !1)), this.axis === "Y" && (X.setFromEuler(bt.set(0, 0, Math.PI / 2)), o.quaternion.copy(e).multiply(X), Math.abs(j.copy(Fe).applyQuaternion(e).dot(this.eye)) > 0.9 && (o.visible = !1)), this.axis === "Z" && (X.setFromEuler(bt.set(0, Math.PI / 2, 0)), o.quaternion.copy(e).multiply(X), Math.abs(j.copy(ct).applyQuaternion(e).dot(this.eye)) > 0.9 && (o.visible = !1)), this.axis === "XYZE" && (X.setFromEuler(bt.set(0, Math.PI / 2, 0)), j.copy(this.rotationAxis), o.quaternion.setFromRotationMatrix(Pn.lookAt(Rn, j, Fe)), o.quaternion.multiply(X), o.visible = this.dragging), this.axis === "E" && (o.visible = !1)) : o.name === "START" ? (o.position.copy(this.worldPositionStart), o.visible = this.dragging) : o.name === "END" ? (o.position.copy(this.worldPosition), o.visible = this.dragging) : o.name === "DELTA" ? (o.position.copy(this.worldPositionStart), o.quaternion.copy(this.worldQuaternionStart), ae.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), ae.applyQuaternion(this.worldQuaternionStart.clone().invert()), o.scale.copy(ae), o.visible = this.dragging) : (o.quaternion.copy(e), this.dragging ? o.position.copy(this.worldPositionStart) : o.position.copy(this.worldPosition), this.axis && (o.visible = this.axis.search(o.name) !== -1));
        continue;
      }
      o.quaternion.copy(e), this.mode === "translate" || this.mode === "scale" ? (o.name === "X" && Math.abs(j.copy(at).applyQuaternion(e).dot(this.eye)) > 0.99 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "Y" && Math.abs(j.copy(Fe).applyQuaternion(e).dot(this.eye)) > 0.99 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "Z" && Math.abs(j.copy(ct).applyQuaternion(e).dot(this.eye)) > 0.99 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "XY" && Math.abs(j.copy(ct).applyQuaternion(e).dot(this.eye)) < 0.2 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "YZ" && Math.abs(j.copy(at).applyQuaternion(e).dot(this.eye)) < 0.2 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "XZ" && Math.abs(j.copy(Fe).applyQuaternion(e).dot(this.eye)) < 0.2 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1)) : this.mode === "rotate" && (Et.copy(e), j.copy(this.eye).applyQuaternion(X.copy(e).invert()), o.name.search("E") !== -1 && o.quaternion.setFromRotationMatrix(Pn.lookAt(this.eye, Rn, Fe)), o.name === "X" && (X.setFromAxisAngle(at, Math.atan2(-j.y, j.z)), X.multiplyQuaternions(Et, X), o.quaternion.copy(X)), o.name === "Y" && (X.setFromAxisAngle(Fe, Math.atan2(j.x, j.z)), X.multiplyQuaternions(Et, X), o.quaternion.copy(X)), o.name === "Z" && (X.setFromAxisAngle(ct, Math.atan2(j.y, j.x)), X.multiplyQuaternions(Et, X), o.quaternion.copy(X))), o.visible = o.visible && (o.name.indexOf("X") === -1 || this.showX), o.visible = o.visible && (o.name.indexOf("Y") === -1 || this.showY), o.visible = o.visible && (o.name.indexOf("Z") === -1 || this.showZ), o.visible = o.visible && (o.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ), o.material._color = o.material._color || o.material.color.clone(), o.material._opacity = o.material._opacity || o.material.opacity, o.material.color.copy(o.material._color), o.material.opacity = o.material._opacity, this.enabled && this.axis && (o.name === this.axis || this.axis.split("").some(function(c) {
        return o.name === c;
      })) && (o.material.color.setHex(16776960), o.material.opacity = 1);
    }
    super.updateMatrixWorld(n);
  }
}
class Xo extends A {
  constructor() {
    super(
      new Yn(1e5, 1e5, 2, 2),
      new we({ visible: !1, wireframe: !0, side: Vn, transparent: !0, opacity: 0.1, toneMapped: !1 })
    ), this.isTransformControlsPlane = !0, this.type = "TransformControlsPlane";
  }
  updateMatrixWorld(n) {
    let t = this.space;
    switch (this.position.copy(this.worldPosition), this.mode === "scale" && (t = "local"), Tt.copy(at).applyQuaternion(t === "local" ? this.worldQuaternion : St), st.copy(Fe).applyQuaternion(t === "local" ? this.worldQuaternion : St), ot.copy(ct).applyQuaternion(t === "local" ? this.worldQuaternion : St), j.copy(st), this.mode) {
      case "translate":
      case "scale":
        switch (this.axis) {
          case "X":
            j.copy(this.eye).cross(Tt), Te.copy(Tt).cross(j);
            break;
          case "Y":
            j.copy(this.eye).cross(st), Te.copy(st).cross(j);
            break;
          case "Z":
            j.copy(this.eye).cross(ot), Te.copy(ot).cross(j);
            break;
          case "XY":
            Te.copy(ot);
            break;
          case "YZ":
            Te.copy(Tt);
            break;
          case "XZ":
            j.copy(ot), Te.copy(st);
            break;
          case "XYZ":
          case "E":
            Te.set(0, 0, 0);
            break;
        }
        break;
      case "rotate":
      default:
        Te.set(0, 0, 0);
    }
    Te.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (Ln.lookAt(ae.set(0, 0, 0), Te, j), this.quaternion.setFromRotationMatrix(Ln)), super.updateMatrixWorld(n);
  }
}
const Yo = {
  name: "TransformControls",
  render: () => null
}, Vo = /* @__PURE__ */ I({
  ...Yo,
  props: {
    mode: { default: "translate" },
    position: null,
    rotationSnap: { default: null },
    showX: { type: Boolean, default: !0 },
    showY: { type: Boolean, default: !0 },
    showZ: { type: Boolean, default: !0 },
    size: { default: 1 },
    translationSnap: { default: null }
  },
  setup(a, { expose: n }) {
    const t = a, e = gs(null), s = S("scene"), i = S("mesh", null), o = S("parent", void 0), r = S("camera"), c = S("canvas"), l = S("enableAllControls"), d = S("disableAllControls");
    function u() {
      e.value != null && (e.value.mode = t.mode, e.value.size = t.size, e.value.showX = t.showX, e.value.showY = t.showY, e.value.showZ = t.showZ, e.value.translationSnap = t.translationSnap, e.value.rotationSnap = t.rotationSnap);
    }
    let h = !1;
    const f = () => {
      !c.value && !r.value || h || (e.value = new No(r.value, c.value), C(t, "position", e.value), i ? e.value.attach(i) : o && e.value.attach(o), e.value.addEventListener("dragging-changed", function(y) {
        y.value ? d() : l();
      }), s.add(e.value), u(), h = !0);
    };
    return N(
      c,
      () => {
        f();
      },
      {
        immediate: !0
      }
    ), u(), _(t, "mode", u), _(t, "size", u), _(t, "showX", u), _(t, "showY", u), _(t, "showZ", u), _(t, "rotationSnap", u), _(t, "translationSnap", u), be(() => {
      s.remove(e.value), Se(e.value);
    }), n({ three: e }), { props: t, three: e, scene: s, mesh: i, parent: o, camera: r, canvas: c, enableAllControls: l, disableAllControls: d, applyProps: u, get boundCamera() {
      return h;
    }, set boundCamera(y) {
      h = y;
    }, tryBindCamera: f };
  }
}), $o = /* @__PURE__ */ I({
  __name: "Group",
  props: {
    enableRaycasting: { type: Boolean, default: !1 },
    onClick: { type: Function, default: () => null },
    onMouseMove: { type: Function, default: () => null },
    onMouseEnter: { type: Function, default: () => null },
    onMouseLeave: { type: Function, default: () => null },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(a, { expose: n }) {
    const t = a, e = new Ue();
    return ce(e), C(t, "position", e), C(t, "rotation", e), C(t, "scale", e), tn(e.children, t), D("parent", e), n({ three: e }), (s, i) => Z(s.$slots, "default");
  }
}), Zo = /* @__PURE__ */ I({
  __name: "InstancedMesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    count: null,
    geometry: { default: null },
    material: { default: null },
    receiveShadow: { type: Boolean, default: !1 }
  },
  setup(a, { expose: n }) {
    const t = a, e = S("scene"), s = new U(), i = new we(), o = new $n(s, i, t.count);
    o.castShadow = !0, o.receiveShadow = !0, ce(o);
    function r() {
      o.castShadow = t.castShadow, o.receiveShadow = t.receiveShadow;
    }
    r(), _(t, "castShadow", r), _(t, "receiveShadow", r);
    const c = S("getGeometry"), l = S("getMaterial");
    return ne(() => {
      if (t.geometry) {
        const d = c(t.geometry);
        o.geometry = d;
      }
      if (t.material) {
        const d = l(t.material);
        o.material = d;
      }
    }), be(() => {
      e.remove(o), Se(o);
    }), D("mesh", o), n({ three: o }), (d, u) => Z(d.$slots, "default");
  }
}), qo = /* @__PURE__ */ I({
  __name: "Line",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(a, { expose: n }) {
    const t = a, e = S("scene"), s = new U(), i = new Le({ color: "black" }), o = new Me(s, i);
    return ce(o), C(t, "position", o), C(t, "rotation", o), C(t, "scale", o), be(() => {
      e.remove(o), Se(o);
    }), D("mesh", o), n({ three: o }), (r, c) => Z(r.$slots, "default");
  }
}), Ko = /* @__PURE__ */ I({
  __name: "LineLoop",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(a, { expose: n }) {
    const t = a, e = S("scene"), s = new U(), i = new Le({ color: "black" }), o = new Zn(s, i);
    return ce(o), C(t, "position", o), C(t, "rotation", o), C(t, "scale", o), be(() => {
      e.remove(o), Se(o);
    }), D("mesh", o), n({ three: o }), (r, c) => Z(r.$slots, "default");
  }
}), Qo = /* @__PURE__ */ I({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(a, { expose: n }) {
    const t = a, e = S("scene"), s = new U(), i = new Le({ color: "black" }), o = new vt(s, i);
    return ce(o), C(t, "position", o), C(t, "rotation", o), C(t, "scale", o), be(() => {
      e.remove(o), Se(o);
    }), D("mesh", o), n({ three: o }), (r, c) => Z(r.$slots, "default");
  }
}), Wo = /* @__PURE__ */ I({
  __name: "Mesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    geometry: { default: null },
    material: { default: null },
    name: { default: "" },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(a, { expose: n }) {
    const t = a, e = S("scene"), s = new U(), i = new we(), o = new A(s, i);
    o.castShadow = !0, o.receiveShadow = !0, ce(o), C(t, "position", o), C(t, "rotation", o), C(t, "scale", o), _(t, "position", () => {
      k.object3DTranslated(t.name, o);
    }), _(t, "rotation", () => {
      k.object3DTranslated(t.name, o);
    }), _(t, "scale", () => {
      k.object3DTranslated(t.name, o);
    });
    function r() {
      o.name = t.name, o.castShadow = t.castShadow, o.receiveShadow = t.receiveShadow;
    }
    r(), _(t, "castShadow", r), _(t, "receiveShadow", r);
    const c = S("getGeometry"), l = S("getMaterial");
    return ne(() => {
      if (t.geometry) {
        const d = c(t.geometry);
        o.geometry = d;
      }
      if (t.material) {
        const d = l(t.material);
        o.material = d;
      }
      k.object3DChanged(t.name, o);
    }), be(() => {
      e.remove(o), Se(o);
    }), D("mesh", o), n({ three: o }), (d, u) => Z(d.$slots, "default");
  }
}), Jo = /* @__PURE__ */ I({
  __name: "Points",
  props: {
    name: { default: "" },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(a, { expose: n }) {
    const t = a, e = S("scene"), s = new U(), i = new ze({ color: "red", sizeAttenuation: !1, size: 2 }), o = new lt(s, i);
    ce(o), C(t, "position", o), C(t, "rotation", o), C(t, "scale", o), _(t, "position", () => {
      k.object3DTranslated(t.name, o);
    }), _(t, "rotation", () => {
      k.object3DTranslated(t.name, o);
    }), _(t, "scale", () => {
      k.object3DTranslated(t.name, o);
    });
    function r() {
      o.name = t.name;
    }
    return r(), ne(() => {
      k.object3DChanged(t.name, o);
    }), be(() => {
      e.remove(o), Se(o);
    }), D("mesh", o), n({ three: o }), (c, l) => Z(c.$slots, "default");
  }
});
class ei extends qn {
  constructor(n) {
    super(n), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new ii(t);
    }), this.register(function(t) {
      return new hi(t);
    }), this.register(function(t) {
      return new fi(t);
    }), this.register(function(t) {
      return new ai(t);
    }), this.register(function(t) {
      return new ci(t);
    }), this.register(function(t) {
      return new li(t);
    }), this.register(function(t) {
      return new ui(t);
    }), this.register(function(t) {
      return new oi(t);
    }), this.register(function(t) {
      return new di(t);
    }), this.register(function(t) {
      return new ri(t);
    }), this.register(function(t) {
      return new ni(t);
    }), this.register(function(t) {
      return new pi(t);
    }), this.register(function(t) {
      return new mi(t);
    });
  }
  load(n, t, e, s) {
    const i = this;
    let o;
    this.resourcePath !== "" ? o = this.resourcePath : this.path !== "" ? o = this.path : o = $t.extractUrlBase(n), this.manager.itemStart(n);
    const r = function(l) {
      s ? s(l) : console.error(l), i.manager.itemError(n), i.manager.itemEnd(n);
    }, c = new Jt(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(n, function(l) {
      try {
        i.parse(l, o, function(d) {
          t(d), i.manager.itemEnd(n);
        }, r);
      } catch (d) {
        r(d);
      }
    }, e, r);
  }
  setDRACOLoader(n) {
    return this.dracoLoader = n, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(n) {
    return this.ktx2Loader = n, this;
  }
  setMeshoptDecoder(n) {
    return this.meshoptDecoder = n, this;
  }
  register(n) {
    return this.pluginCallbacks.indexOf(n) === -1 && this.pluginCallbacks.push(n), this;
  }
  unregister(n) {
    return this.pluginCallbacks.indexOf(n) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(n), 1), this;
  }
  parse(n, t, e, s) {
    let i;
    const o = {}, r = {}, c = new TextDecoder();
    if (typeof n == "string")
      i = JSON.parse(n);
    else if (n instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(n, 0, 4)) === is) {
        try {
          o[H.KHR_BINARY_GLTF] = new gi(n);
        } catch (u) {
          s && s(u);
          return;
        }
        i = JSON.parse(o[H.KHR_BINARY_GLTF].content);
      } else
        i = JSON.parse(c.decode(n));
    else
      i = n;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new Pi(i, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let d = 0; d < this.pluginCallbacks.length; d++) {
      const u = this.pluginCallbacks[d](l);
      r[u.name] = u, o[u.name] = !0;
    }
    if (i.extensionsUsed)
      for (let d = 0; d < i.extensionsUsed.length; ++d) {
        const u = i.extensionsUsed[d], h = i.extensionsRequired || [];
        switch (u) {
          case H.KHR_MATERIALS_UNLIT:
            o[u] = new si();
            break;
          case H.KHR_DRACO_MESH_COMPRESSION:
            o[u] = new yi(i, this.dracoLoader);
            break;
          case H.KHR_TEXTURE_TRANSFORM:
            o[u] = new _i();
            break;
          case H.KHR_MESH_QUANTIZATION:
            o[u] = new wi();
            break;
          default:
            h.indexOf(u) >= 0 && r[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(o), l.setPlugins(r), l.parse(e, s);
  }
  parseAsync(n, t) {
    const e = this;
    return new Promise(function(s, i) {
      e.parse(n, t, s, i);
    });
  }
}
function ti() {
  let a = {};
  return {
    get: function(n) {
      return a[n];
    },
    add: function(n, t) {
      a[n] = t;
    },
    remove: function(n) {
      delete a[n];
    },
    removeAll: function() {
      a = {};
    }
  };
}
const H = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class ni {
  constructor(n) {
    this.parser = n, this.name = H.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const n = this.parser, t = this.parser.json.nodes || [];
    for (let e = 0, s = t.length; e < s; e++) {
      const i = t[e];
      i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && n._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(n) {
    const t = this.parser, e = "light:" + n;
    let s = t.cache.get(e);
    if (s)
      return s;
    const i = t.json, c = ((i.extensions && i.extensions[this.name] || {}).lights || [])[n];
    let l;
    const d = new $(16777215);
    c.color !== void 0 && d.fromArray(c.color);
    const u = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new Qn(d), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new Kn(d), l.distance = u;
        break;
      case "spot":
        l = new bs(d), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, He(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + n), s = Promise.resolve(l), t.cache.add(e, s), s;
  }
  getDependency(n, t) {
    if (n === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(n) {
    const t = this, e = this.parser, i = e.json.nodes[n], r = (i.extensions && i.extensions[this.name] || {}).light;
    return r === void 0 ? null : this._loadLight(r).then(function(c) {
      return e._getNodeRef(t.cache, r, c);
    });
  }
}
class si {
  constructor() {
    this.name = H.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return we;
  }
  extendParams(n, t, e) {
    const s = [];
    n.color = new $(1, 1, 1), n.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const o = i.baseColorFactor;
        n.color.fromArray(o), n.opacity = o[3];
      }
      i.baseColorTexture !== void 0 && s.push(e.assignTexture(n, "map", i.baseColorTexture, ht));
    }
    return Promise.all(s);
  }
}
class oi {
  constructor(n) {
    this.parser = n, this.name = H.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(n, t) {
    const s = this.parser.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class ii {
  constructor(n) {
    this.parser = n, this.name = H.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Be;
  }
  extendMaterialParams(n, t) {
    const e = this.parser, s = e.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && i.push(e.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && i.push(e.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (i.push(e.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const r = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new z(r, r);
    }
    return Promise.all(i);
  }
}
class ri {
  constructor(n) {
    this.parser = n, this.name = H.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Be;
  }
  extendMaterialParams(n, t) {
    const e = this.parser, s = e.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && i.push(e.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && i.push(e.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(i);
  }
}
class ai {
  constructor(n) {
    this.parser = n, this.name = H.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Be;
  }
  extendMaterialParams(n, t) {
    const e = this.parser, s = e.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new $(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = s.extensions[this.name];
    return o.sheenColorFactor !== void 0 && t.sheenColor.fromArray(o.sheenColorFactor), o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && i.push(e.assignTexture(t, "sheenColorMap", o.sheenColorTexture, ht)), o.sheenRoughnessTexture !== void 0 && i.push(e.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(i);
  }
}
class ci {
  constructor(n) {
    this.parser = n, this.name = H.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Be;
  }
  extendMaterialParams(n, t) {
    const e = this.parser, s = e.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && i.push(e.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(i);
  }
}
class li {
  constructor(n) {
    this.parser = n, this.name = H.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Be;
  }
  extendMaterialParams(n, t) {
    const e = this.parser, s = e.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && i.push(e.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const r = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new $(r[0], r[1], r[2]), Promise.all(i);
  }
}
class ui {
  constructor(n) {
    this.parser = n, this.name = H.KHR_MATERIALS_IOR;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Be;
  }
  extendMaterialParams(n, t) {
    const s = this.parser.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class di {
  constructor(n) {
    this.parser = n, this.name = H.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Be;
  }
  extendMaterialParams(n, t) {
    const e = this.parser, s = e.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && i.push(e.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const r = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new $(r[0], r[1], r[2]), o.specularColorTexture !== void 0 && i.push(e.assignTexture(t, "specularColorMap", o.specularColorTexture, ht)), Promise.all(i);
  }
}
class hi {
  constructor(n) {
    this.parser = n, this.name = H.KHR_TEXTURE_BASISU;
  }
  loadTexture(n) {
    const t = this.parser, e = t.json, s = e.textures[n];
    if (!s.extensions || !s.extensions[this.name])
      return null;
    const i = s.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(n, i.source, o);
  }
}
class fi {
  constructor(n) {
    this.parser = n, this.name = H.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(n) {
    const t = this.name, e = this.parser, s = e.json, i = s.textures[n];
    if (!i.extensions || !i.extensions[t])
      return null;
    const o = i.extensions[t], r = s.images[o.source];
    let c = e.textureLoader;
    if (r.uri) {
      const l = e.options.manager.getHandler(r.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l)
        return e.loadTextureImage(n, o.source, c);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return e.loadTexture(n);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(n) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        n(t.height === 1);
      };
    })), this.isSupported;
  }
}
class pi {
  constructor(n) {
    this.name = H.EXT_MESHOPT_COMPRESSION, this.parser = n;
  }
  loadBufferView(n) {
    const t = this.parser.json, e = t.bufferViews[n];
    if (e.extensions && e.extensions[this.name]) {
      const s = e.extensions[this.name], i = this.parser.getDependency("buffer", s.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return i.then(function(r) {
        const c = s.byteOffset || 0, l = s.byteLength || 0, d = s.count, u = s.byteStride, h = new Uint8Array(r, c, l);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(d, u, h, s.mode, s.filter).then(function(f) {
          return f.buffer;
        }) : o.ready.then(function() {
          const f = new ArrayBuffer(d * u);
          return o.decodeGltfBuffer(new Uint8Array(f), d, u, h, s.mode, s.filter), f;
        });
      });
    } else
      return null;
  }
}
class mi {
  constructor(n) {
    this.name = H.EXT_MESH_GPU_INSTANCING, this.parser = n;
  }
  createNodeMesh(n) {
    const t = this.parser.json, e = t.nodes[n];
    if (!e.extensions || !e.extensions[this.name] || e.mesh === void 0)
      return null;
    const s = t.meshes[e.mesh];
    for (const l of s.primitives)
      if (l.mode !== pe.TRIANGLES && l.mode !== pe.TRIANGLE_STRIP && l.mode !== pe.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const o = e.extensions[this.name].attributes, r = [], c = {};
    for (const l in o)
      r.push(this.parser.getDependency("accessor", o[l]).then((d) => (c[l] = d, c[l])));
    return r.length < 1 ? null : (r.push(this.parser.createNodeMesh(n)), Promise.all(r).then((l) => {
      const d = l.pop(), u = d.isGroup ? d.children : [d], h = l[0].count, f = [];
      for (const y of u) {
        const m = new Ke(), w = new v(), g = new oe(), b = new v(1, 1, 1), M = new $n(y.geometry, y.material, h);
        for (let x = 0; x < h; x++)
          c.TRANSLATION && w.fromBufferAttribute(c.TRANSLATION, x), c.ROTATION && g.fromBufferAttribute(c.ROTATION, x), c.SCALE && b.fromBufferAttribute(c.SCALE, x), M.setMatrixAt(x, m.compose(w, g, b));
        for (const x in c)
          x !== "TRANSLATION" && x !== "ROTATION" && x !== "SCALE" && y.geometry.setAttribute(x, c[x]);
        dt.prototype.copy.call(M, y), M.frustumCulled = !1, this.parser.assignFinalMaterial(M), f.push(M);
      }
      return d.isGroup ? (d.clear(), d.add(...f), d) : f[0];
    }));
  }
}
const is = "glTF", it = 12, Cn = { JSON: 1313821514, BIN: 5130562 };
class gi {
  constructor(n) {
    this.name = H.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(n, 0, it), e = new TextDecoder();
    if (this.header = {
      magic: e.decode(new Uint8Array(n.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== is)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - it, i = new DataView(n, it);
    let o = 0;
    for (; o < s; ) {
      const r = i.getUint32(o, !0);
      o += 4;
      const c = i.getUint32(o, !0);
      if (o += 4, c === Cn.JSON) {
        const l = new Uint8Array(n, it + o, r);
        this.content = e.decode(l);
      } else if (c === Cn.BIN) {
        const l = it + o;
        this.body = n.slice(l, l + r);
      }
      o += r;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class yi {
  constructor(n, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = H.KHR_DRACO_MESH_COMPRESSION, this.json = n, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(n, t) {
    const e = this.json, s = this.dracoLoader, i = n.extensions[this.name].bufferView, o = n.extensions[this.name].attributes, r = {}, c = {}, l = {};
    for (const d in o) {
      const u = Qt[d] || d.toLowerCase();
      r[u] = o[d];
    }
    for (const d in n.attributes) {
      const u = Qt[d] || d.toLowerCase();
      if (o[d] !== void 0) {
        const h = e.accessors[n.attributes[d]], f = qe[h.componentType];
        l[u] = f.name, c[u] = h.normalized === !0;
      }
    }
    return t.getDependency("bufferView", i).then(function(d) {
      return new Promise(function(u) {
        s.decodeDracoFile(d, function(h) {
          for (const f in h.attributes) {
            const y = h.attributes[f], m = c[f];
            m !== void 0 && (y.normalized = m);
          }
          u(h);
        }, r, l);
      });
    });
  }
}
class _i {
  constructor() {
    this.name = H.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(n, t) {
    return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (n = n.clone(), t.offset !== void 0 && n.offset.fromArray(t.offset), t.rotation !== void 0 && (n.rotation = t.rotation), t.scale !== void 0 && n.repeat.fromArray(t.scale), n.needsUpdate = !0), n;
  }
}
class wi {
  constructor() {
    this.name = H.KHR_MESH_QUANTIZATION;
  }
}
class rs extends Fs {
  constructor(n, t, e, s) {
    super(n, t, e, s);
  }
  copySampleValue_(n) {
    const t = this.resultBuffer, e = this.sampleValues, s = this.valueSize, i = n * s * 3 + s;
    for (let o = 0; o !== s; o++)
      t[o] = e[i + o];
    return t;
  }
  interpolate_(n, t, e, s) {
    const i = this.resultBuffer, o = this.sampleValues, r = this.valueSize, c = r * 2, l = r * 3, d = s - t, u = (e - t) / d, h = u * u, f = h * u, y = n * l, m = y - l, w = -2 * f + 3 * h, g = f - h, b = 1 - w, M = g - h + u;
    for (let x = 0; x !== r; x++) {
      const T = o[m + x + r], R = o[m + x + c] * d, O = o[y + x + r], G = o[y + x] * d;
      i[x] = b * T + M * R + w * O + g * G;
    }
    return i;
  }
}
const bi = new oe();
class Ei extends rs {
  interpolate_(n, t, e, s) {
    const i = super.interpolate_(n, t, e, s);
    return bi.fromArray(i).normalize().toArray(i), i;
  }
}
const pe = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, qe = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, In = {
  9728: Ls,
  9729: Jn,
  9984: Cs,
  9985: Is,
  9986: Os,
  9987: es
}, On = {
  33071: qt,
  33648: ks,
  10497: Zt
}, Bt = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Qt = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, De = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Ti = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: ts,
  STEP: Ds
}, Xt = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Mi(a) {
  return a.DefaultMaterial === void 0 && (a.DefaultMaterial = new en({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: ft
  })), a.DefaultMaterial;
}
function rt(a, n, t) {
  for (const e in t.extensions)
    a[e] === void 0 && (n.userData.gltfExtensions = n.userData.gltfExtensions || {}, n.userData.gltfExtensions[e] = t.extensions[e]);
}
function He(a, n) {
  n.extras !== void 0 && (typeof n.extras == "object" ? Object.assign(a.userData, n.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + n.extras));
}
function Si(a, n, t) {
  let e = !1, s = !1, i = !1;
  for (let l = 0, d = n.length; l < d; l++) {
    const u = n[l];
    if (u.POSITION !== void 0 && (e = !0), u.NORMAL !== void 0 && (s = !0), u.COLOR_0 !== void 0 && (i = !0), e && s && i)
      break;
  }
  if (!e && !s && !i)
    return Promise.resolve(a);
  const o = [], r = [], c = [];
  for (let l = 0, d = n.length; l < d; l++) {
    const u = n[l];
    if (e) {
      const h = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : a.attributes.position;
      o.push(h);
    }
    if (s) {
      const h = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : a.attributes.normal;
      r.push(h);
    }
    if (i) {
      const h = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : a.attributes.color;
      c.push(h);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(r),
    Promise.all(c)
  ]).then(function(l) {
    const d = l[0], u = l[1], h = l[2];
    return e && (a.morphAttributes.position = d), s && (a.morphAttributes.normal = u), i && (a.morphAttributes.color = h), a.morphTargetsRelative = !0, a;
  });
}
function vi(a, n) {
  if (a.updateMorphTargets(), n.weights !== void 0)
    for (let t = 0, e = n.weights.length; t < e; t++)
      a.morphTargetInfluences[t] = n.weights[t];
  if (n.extras && Array.isArray(n.extras.targetNames)) {
    const t = n.extras.targetNames;
    if (a.morphTargetInfluences.length === t.length) {
      a.morphTargetDictionary = {};
      for (let e = 0, s = t.length; e < s; e++)
        a.morphTargetDictionary[t[e]] = e;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function xi(a) {
  const n = a.extensions && a.extensions[H.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return n ? t = "draco:" + n.bufferView + ":" + n.indices + ":" + kn(n.attributes) : t = a.indices + ":" + kn(a.attributes) + ":" + a.mode, t;
}
function kn(a) {
  let n = "";
  const t = Object.keys(a).sort();
  for (let e = 0, s = t.length; e < s; e++)
    n += t[e] + ":" + a[t[e]] + ";";
  return n;
}
function Wt(a) {
  switch (a) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Ai(a) {
  return a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : a.search(/\.webp($|\?)/i) > 0 || a.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const Ri = new Ke();
class Pi {
  constructor(n = {}, t = {}) {
    this.json = n, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new ti(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let e = !1, s = !1, i = -1;
    typeof navigator < "u" && (e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, s = navigator.userAgent.indexOf("Firefox") > -1, i = s ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || e || s && i < 98 ? this.textureLoader = new Wn(this.options.manager) : this.textureLoader = new Es(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Jt(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(n) {
    this.extensions = n;
  }
  setPlugins(n) {
    this.plugins = n;
  }
  parse(n, t) {
    const e = this, s = this.json, i = this.extensions;
    this.cache.removeAll(), this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([
        e.getDependencies("scene"),
        e.getDependencies("animation"),
        e.getDependencies("camera")
      ]);
    }).then(function(o) {
      const r = {
        scene: o[0][s.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: s.asset,
        parser: e,
        userData: {}
      };
      rt(i, r, s), He(r, s), Promise.all(e._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(r);
      })).then(function() {
        n(r);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const n = this.json.nodes || [], t = this.json.skins || [], e = this.json.meshes || [];
    for (let s = 0, i = t.length; s < i; s++) {
      const o = t[s].joints;
      for (let r = 0, c = o.length; r < c; r++)
        n[o[r]].isBone = !0;
    }
    for (let s = 0, i = n.length; s < i; s++) {
      const o = n[s];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (e[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(n, t) {
    t !== void 0 && (n.refs[t] === void 0 && (n.refs[t] = n.uses[t] = 0), n.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(n, t, e) {
    if (n.refs[t] <= 1)
      return e;
    const s = e.clone(), i = (o, r) => {
      const c = this.associations.get(o);
      c != null && this.associations.set(r, c);
      for (const [l, d] of o.children.entries())
        i(d, r.children[l]);
    };
    return i(e, s), s.name += "_instance_" + n.uses[t]++, s;
  }
  _invokeOne(n) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let e = 0; e < t.length; e++) {
      const s = n(t[e]);
      if (s)
        return s;
    }
    return null;
  }
  _invokeAll(n) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const e = [];
    for (let s = 0; s < t.length; s++) {
      const i = n(t[s]);
      i && e.push(i);
    }
    return e;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(n, t) {
    const e = n + ":" + t;
    let s = this.cache.get(e);
    if (!s) {
      switch (n) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function(i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function(i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function(i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function(i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function(i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function(i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (s = this._invokeOne(function(i) {
            return i != this && i.getDependency && i.getDependency(n, t);
          }), !s)
            throw new Error("Unknown type: " + n);
          break;
      }
      this.cache.add(e, s);
    }
    return s;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(n) {
    let t = this.cache.get(n);
    if (!t) {
      const e = this, s = this.json[n + (n === "mesh" ? "es" : "s")] || [];
      t = Promise.all(s.map(function(i, o) {
        return e.getDependency(n, o);
      })), this.cache.add(n, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(n) {
    const t = this.json.buffers[n], e = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && n === 0)
      return Promise.resolve(this.extensions[H.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(i, o) {
      e.load($t.resolveURL(t.uri, s.path), i, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(n) {
    const t = this.json.bufferViews[n];
    return this.getDependency("buffer", t.buffer).then(function(e) {
      const s = t.byteLength || 0, i = t.byteOffset || 0;
      return e.slice(i, i + s);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(n) {
    const t = this, e = this.json, s = this.json.accessors[n];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const o = Bt[s.type], r = qe[s.componentType], c = s.normalized === !0, l = new r(s.count * o);
      return Promise.resolve(new Ze(l, o, c));
    }
    const i = [];
    return s.bufferView !== void 0 ? i.push(this.getDependency("bufferView", s.bufferView)) : i.push(null), s.sparse !== void 0 && (i.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(i).then(function(o) {
      const r = o[0], c = Bt[s.type], l = qe[s.componentType], d = l.BYTES_PER_ELEMENT, u = d * c, h = s.byteOffset || 0, f = s.bufferView !== void 0 ? e.bufferViews[s.bufferView].byteStride : void 0, y = s.normalized === !0;
      let m, w;
      if (f && f !== u) {
        const g = Math.floor(h / f), b = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + g + ":" + s.count;
        let M = t.cache.get(b);
        M || (m = new l(r, g * f, s.count * f / d), M = new Ts(m, f / d), t.cache.add(b, M)), w = new Ms(M, c, h % f / d, y);
      } else
        r === null ? m = new l(s.count * c) : m = new l(r, h, s.count * c), w = new Ze(m, c, y);
      if (s.sparse !== void 0) {
        const g = Bt.SCALAR, b = qe[s.sparse.indices.componentType], M = s.sparse.indices.byteOffset || 0, x = s.sparse.values.byteOffset || 0, T = new b(o[1], M, s.sparse.count * g), R = new l(o[2], x, s.sparse.count * c);
        r !== null && (w = new Ze(w.array.slice(), w.itemSize, w.normalized));
        for (let O = 0, G = T.length; O < G; O++) {
          const Q = T[O];
          if (w.setX(Q, R[O * c]), c >= 2 && w.setY(Q, R[O * c + 1]), c >= 3 && w.setZ(Q, R[O * c + 2]), c >= 4 && w.setW(Q, R[O * c + 3]), c >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return w;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(n) {
    const t = this.json, e = this.options, i = t.textures[n].source, o = t.images[i];
    let r = this.textureLoader;
    if (o.uri) {
      const c = e.manager.getHandler(o.uri);
      c !== null && (r = c);
    }
    return this.loadTextureImage(n, i, r);
  }
  loadTextureImage(n, t, e) {
    const s = this, i = this.json, o = i.textures[n], r = i.images[t], c = (r.uri || r.bufferView) + ":" + o.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, e).then(function(d) {
      d.flipY = !1, d.name = o.name || r.name || "";
      const h = (i.samplers || {})[o.sampler] || {};
      return d.magFilter = In[h.magFilter] || Jn, d.minFilter = In[h.minFilter] || es, d.wrapS = On[h.wrapS] || Zt, d.wrapT = On[h.wrapT] || Zt, s.associations.set(d, { textures: n }), d;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(n, t) {
    const e = this, s = this.json, i = this.options;
    if (this.sourceCache[n] !== void 0)
      return this.sourceCache[n].then((u) => u.clone());
    const o = s.images[n], r = self.URL || self.webkitURL;
    let c = o.uri || "", l = !1;
    if (o.bufferView !== void 0)
      c = e.getDependency("bufferView", o.bufferView).then(function(u) {
        l = !0;
        const h = new Blob([u], { type: o.mimeType });
        return c = r.createObjectURL(h), c;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + n + " is missing URI and bufferView");
    const d = Promise.resolve(c).then(function(u) {
      return new Promise(function(h, f) {
        let y = h;
        t.isImageBitmapLoader === !0 && (y = function(m) {
          const w = new Kt(m);
          w.needsUpdate = !0, h(w);
        }), t.load($t.resolveURL(u, i.path), y, void 0, f);
      });
    }).then(function(u) {
      return l === !0 && r.revokeObjectURL(c), u.userData.mimeType = o.mimeType || Ai(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), u;
    });
    return this.sourceCache[n] = d, d;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(n, t, e, s) {
    const i = this;
    return this.getDependency("texture", e.index).then(function(o) {
      if (!o)
        return null;
      if (e.texCoord !== void 0 && e.texCoord != 0 && !(t === "aoMap" && e.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + e.texCoord + " for texture " + t + " not yet supported."), i.extensions[H.KHR_TEXTURE_TRANSFORM]) {
        const r = e.extensions !== void 0 ? e.extensions[H.KHR_TEXTURE_TRANSFORM] : void 0;
        if (r) {
          const c = i.associations.get(o);
          o = i.extensions[H.KHR_TEXTURE_TRANSFORM].extendTexture(o, r), i.associations.set(o, c);
        }
      }
      return s !== void 0 && (o.encoding = s), n[t] = o, o;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(n) {
    const t = n.geometry;
    let e = n.material;
    const s = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (n.isPoints) {
      const r = "PointsMaterial:" + e.uuid;
      let c = this.cache.get(r);
      c || (c = new ze(), ut.prototype.copy.call(c, e), c.color.copy(e.color), c.map = e.map, c.sizeAttenuation = !1, this.cache.add(r, c)), e = c;
    } else if (n.isLine) {
      const r = "LineBasicMaterial:" + e.uuid;
      let c = this.cache.get(r);
      c || (c = new Le(), ut.prototype.copy.call(c, e), c.color.copy(e.color), this.cache.add(r, c)), e = c;
    }
    if (s || i || o) {
      let r = "ClonedMaterial:" + e.uuid + ":";
      s && (r += "derivative-tangents:"), i && (r += "vertex-colors:"), o && (r += "flat-shading:");
      let c = this.cache.get(r);
      c || (c = e.clone(), i && (c.vertexColors = !0), o && (c.flatShading = !0), s && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(r, c), this.associations.set(c, this.associations.get(e))), e = c;
    }
    e.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), n.material = e;
  }
  getMaterialType() {
    return en;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(n) {
    const t = this, e = this.json, s = this.extensions, i = e.materials[n];
    let o;
    const r = {}, c = i.extensions || {}, l = [];
    if (c[H.KHR_MATERIALS_UNLIT]) {
      const u = s[H.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), l.push(u.extendParams(r, i, t));
    } else {
      const u = i.pbrMetallicRoughness || {};
      if (r.color = new $(1, 1, 1), r.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const h = u.baseColorFactor;
        r.color.fromArray(h), r.opacity = h[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(r, "map", u.baseColorTexture, ht)), r.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, r.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(r, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(r, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(h) {
        return h.getMaterialType && h.getMaterialType(n);
      }), l.push(Promise.all(this._invokeAll(function(h) {
        return h.extendMaterialParams && h.extendMaterialParams(n, r);
      })));
    }
    i.doubleSided === !0 && (r.side = Vn);
    const d = i.alphaMode || Xt.OPAQUE;
    if (d === Xt.BLEND ? (r.transparent = !0, r.depthWrite = !1) : (r.transparent = !1, d === Xt.MASK && (r.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && o !== we && (l.push(t.assignTexture(r, "normalMap", i.normalTexture)), r.normalScale = new z(1, 1), i.normalTexture.scale !== void 0)) {
      const u = i.normalTexture.scale;
      r.normalScale.set(u, u);
    }
    return i.occlusionTexture !== void 0 && o !== we && (l.push(t.assignTexture(r, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (r.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && o !== we && (r.emissive = new $().fromArray(i.emissiveFactor)), i.emissiveTexture !== void 0 && o !== we && l.push(t.assignTexture(r, "emissiveMap", i.emissiveTexture, ht)), Promise.all(l).then(function() {
      const u = new o(r);
      return i.name && (u.name = i.name), He(u, i), t.associations.set(u, { materials: n }), i.extensions && rt(s, u, i), u;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(n) {
    const t = Ss.sanitizeNodeName(n || "");
    let e = t;
    for (let s = 1; this.nodeNamesUsed[e]; ++s)
      e = t + "_" + s;
    return this.nodeNamesUsed[e] = !0, e;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(n) {
    const t = this, e = this.extensions, s = this.primitiveCache;
    function i(r) {
      return e[H.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r, t).then(function(c) {
        return Dn(c, r, t);
      });
    }
    const o = [];
    for (let r = 0, c = n.length; r < c; r++) {
      const l = n[r], d = xi(l), u = s[d];
      if (u)
        o.push(u.promise);
      else {
        let h;
        l.extensions && l.extensions[H.KHR_DRACO_MESH_COMPRESSION] ? h = i(l) : h = Dn(new U(), l, t), s[d] = { primitive: l, promise: h }, o.push(h);
      }
    }
    return Promise.all(o);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(n) {
    const t = this, e = this.json, s = this.extensions, i = e.meshes[n], o = i.primitives, r = [];
    for (let c = 0, l = o.length; c < l; c++) {
      const d = o[c].material === void 0 ? Mi(this.cache) : this.getDependency("material", o[c].material);
      r.push(d);
    }
    return r.push(t.loadGeometries(o)), Promise.all(r).then(function(c) {
      const l = c.slice(0, c.length - 1), d = c[c.length - 1], u = [];
      for (let f = 0, y = d.length; f < y; f++) {
        const m = d[f], w = o[f];
        let g;
        const b = l[f];
        if (w.mode === pe.TRIANGLES || w.mode === pe.TRIANGLE_STRIP || w.mode === pe.TRIANGLE_FAN || w.mode === void 0)
          g = i.isSkinnedMesh === !0 ? new vs(m, b) : new A(m, b), g.isSkinnedMesh === !0 && !g.geometry.attributes.skinWeight.normalized && g.normalizeSkinWeights(), w.mode === pe.TRIANGLE_STRIP ? g.geometry = Hn(g.geometry, Hs) : w.mode === pe.TRIANGLE_FAN && (g.geometry = Hn(g.geometry, ns));
        else if (w.mode === pe.LINES)
          g = new vt(m, b);
        else if (w.mode === pe.LINE_STRIP)
          g = new Me(m, b);
        else if (w.mode === pe.LINE_LOOP)
          g = new Zn(m, b);
        else if (w.mode === pe.POINTS)
          g = new lt(m, b);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + w.mode);
        Object.keys(g.geometry.morphAttributes).length > 0 && vi(g, i), g.name = t.createUniqueName(i.name || "mesh_" + n), He(g, i), w.extensions && rt(s, g, w), t.assignFinalMaterial(g), u.push(g);
      }
      for (let f = 0, y = u.length; f < y; f++)
        t.associations.set(u[f], {
          meshes: n,
          primitives: f
        });
      if (u.length === 1)
        return u[0];
      const h = new Ue();
      t.associations.set(h, { meshes: n });
      for (let f = 0, y = u.length; f < y; f++)
        h.add(u[f]);
      return h;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(n) {
    let t;
    const e = this.json.cameras[n], s = e[e.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return e.type === "perspective" ? t = new zn(xs.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : e.type === "orthographic" && (t = new Un(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), e.name && (t.name = this.createUniqueName(e.name)), He(t, e), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(n) {
    const t = this.json.skins[n], e = [];
    for (let s = 0, i = t.joints.length; s < i; s++)
      e.push(this.getDependency("node", t.joints[s]));
    return t.inverseBindMatrices !== void 0 ? e.push(this.getDependency("accessor", t.inverseBindMatrices)) : e.push(null), Promise.all(e).then(function(s) {
      const i = s.pop(), o = s, r = [], c = [];
      for (let l = 0, d = o.length; l < d; l++) {
        const u = o[l];
        if (u) {
          r.push(u);
          const h = new Ke();
          i !== null && h.fromArray(i.array, l * 16), c.push(h);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new As(r, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(n) {
    const e = this.json.animations[n], s = [], i = [], o = [], r = [], c = [];
    for (let l = 0, d = e.channels.length; l < d; l++) {
      const u = e.channels[l], h = e.samplers[u.sampler], f = u.target, y = f.node, m = e.parameters !== void 0 ? e.parameters[h.input] : h.input, w = e.parameters !== void 0 ? e.parameters[h.output] : h.output;
      s.push(this.getDependency("node", y)), i.push(this.getDependency("accessor", m)), o.push(this.getDependency("accessor", w)), r.push(h), c.push(f);
    }
    return Promise.all([
      Promise.all(s),
      Promise.all(i),
      Promise.all(o),
      Promise.all(r),
      Promise.all(c)
    ]).then(function(l) {
      const d = l[0], u = l[1], h = l[2], f = l[3], y = l[4], m = [];
      for (let g = 0, b = d.length; g < b; g++) {
        const M = d[g], x = u[g], T = h[g], R = f[g], O = y[g];
        if (M === void 0)
          continue;
        M.updateMatrix();
        let G;
        switch (De[O.path]) {
          case De.weights:
            G = js;
            break;
          case De.rotation:
            G = fn;
            break;
          case De.position:
          case De.scale:
          default:
            G = Ns;
            break;
        }
        const Q = M.name ? M.name : M.uuid, ue = R.interpolation !== void 0 ? Ti[R.interpolation] : ts, le = [];
        De[O.path] === De.weights ? M.traverse(function(B) {
          B.morphTargetInfluences && le.push(B.name ? B.name : B.uuid);
        }) : le.push(Q);
        let ie = T.array;
        if (T.normalized) {
          const B = Wt(ie.constructor), V = new Float32Array(ie.length);
          for (let F = 0, de = ie.length; F < de; F++)
            V[F] = ie[F] * B;
          ie = V;
        }
        for (let B = 0, V = le.length; B < V; B++) {
          const F = new G(
            le[B] + "." + De[O.path],
            x.array,
            ie,
            ue
          );
          R.interpolation === "CUBICSPLINE" && (F.createInterpolant = function(W) {
            const re = this instanceof fn ? Ei : rs;
            return new re(this.times, this.values, this.getValueSize() / 3, W);
          }, F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), m.push(F);
        }
      }
      const w = e.name ? e.name : "animation_" + n;
      return new Rs(w, void 0, m);
    });
  }
  createNodeMesh(n) {
    const t = this.json, e = this, s = t.nodes[n];
    return s.mesh === void 0 ? null : e.getDependency("mesh", s.mesh).then(function(i) {
      const o = e._getNodeRef(e.meshCache, s.mesh, i);
      return s.weights !== void 0 && o.traverse(function(r) {
        if (r.isMesh)
          for (let c = 0, l = s.weights.length; c < l; c++)
            r.morphTargetInfluences[c] = s.weights[c];
      }), o;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(n) {
    const t = this.json, e = this.extensions, s = this, i = t.nodes[n], o = i.name ? s.createUniqueName(i.name) : "";
    return function() {
      const r = [], c = s._invokeOne(function(h) {
        return h.createNodeMesh && h.createNodeMesh(n);
      });
      c && r.push(c), i.camera !== void 0 && r.push(s.getDependency("camera", i.camera).then(function(h) {
        return s._getNodeRef(s.cameraCache, i.camera, h);
      })), s._invokeAll(function(h) {
        return h.createNodeAttachment && h.createNodeAttachment(n);
      }).forEach(function(h) {
        r.push(h);
      });
      const l = [], d = i.children || [];
      for (let h = 0, f = d.length; h < f; h++)
        l.push(s.getDependency("node", d[h]));
      const u = i.skin === void 0 ? Promise.resolve(null) : s.getDependency("skin", i.skin);
      return Promise.all([
        Promise.all(r),
        Promise.all(l),
        u
      ]);
    }().then(function(r) {
      const c = r[0], l = r[1], d = r[2];
      let u;
      if (i.isBone === !0 ? u = new Ps() : c.length > 1 ? u = new Ue() : c.length === 1 ? u = c[0] : u = new dt(), u !== c[0])
        for (let h = 0, f = c.length; h < f; h++)
          u.add(c[h]);
      if (i.name && (u.userData.name = i.name, u.name = o), He(u, i), i.extensions && rt(e, u, i), i.matrix !== void 0) {
        const h = new Ke();
        h.fromArray(i.matrix), u.applyMatrix4(h);
      } else
        i.translation !== void 0 && u.position.fromArray(i.translation), i.rotation !== void 0 && u.quaternion.fromArray(i.rotation), i.scale !== void 0 && u.scale.fromArray(i.scale);
      s.associations.has(u) || s.associations.set(u, {}), s.associations.get(u).nodes = n, d !== null && u.traverse(function(h) {
        h.isSkinnedMesh && h.bind(d, Ri);
      });
      for (let h = 0, f = l.length; h < f; h++)
        u.add(l[h]);
      return u;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(n) {
    const t = this.extensions, e = this.json.scenes[n], s = this, i = new Ue();
    e.name && (i.name = s.createUniqueName(e.name)), He(i, e), e.extensions && rt(t, i, e);
    const o = e.nodes || [], r = [];
    for (let c = 0, l = o.length; c < l; c++)
      r.push(s.getDependency("node", o[c]));
    return Promise.all(r).then(function(c) {
      for (let d = 0, u = c.length; d < u; d++)
        i.add(c[d]);
      const l = (d) => {
        const u = /* @__PURE__ */ new Map();
        for (const [h, f] of s.associations)
          (h instanceof ut || h instanceof Kt) && u.set(h, f);
        return d.traverse((h) => {
          const f = s.associations.get(h);
          f != null && u.set(h, f);
        }), u;
      };
      return s.associations = l(i), i;
    });
  }
}
function Li(a, n, t) {
  const e = n.attributes, s = new ss();
  if (e.POSITION !== void 0) {
    const r = t.json.accessors[e.POSITION], c = r.min, l = r.max;
    if (c !== void 0 && l !== void 0) {
      if (s.set(
        new v(c[0], c[1], c[2]),
        new v(l[0], l[1], l[2])
      ), r.normalized) {
        const d = Wt(qe[r.componentType]);
        s.min.multiplyScalar(d), s.max.multiplyScalar(d);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const i = n.targets;
  if (i !== void 0) {
    const r = new v(), c = new v();
    for (let l = 0, d = i.length; l < d; l++) {
      const u = i[l];
      if (u.POSITION !== void 0) {
        const h = t.json.accessors[u.POSITION], f = h.min, y = h.max;
        if (f !== void 0 && y !== void 0) {
          if (c.setX(Math.max(Math.abs(f[0]), Math.abs(y[0]))), c.setY(Math.max(Math.abs(f[1]), Math.abs(y[1]))), c.setZ(Math.max(Math.abs(f[2]), Math.abs(y[2]))), h.normalized) {
            const m = Wt(qe[h.componentType]);
            c.multiplyScalar(m);
          }
          r.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(r);
  }
  a.boundingBox = s;
  const o = new Gs();
  s.getCenter(o.center), o.radius = s.min.distanceTo(s.max) / 2, a.boundingSphere = o;
}
function Dn(a, n, t) {
  const e = n.attributes, s = [];
  function i(o, r) {
    return t.getDependency("accessor", o).then(function(c) {
      a.setAttribute(r, c);
    });
  }
  for (const o in e) {
    const r = Qt[o] || o.toLowerCase();
    r in a.attributes || s.push(i(e[o], r));
  }
  if (n.indices !== void 0 && !a.index) {
    const o = t.getDependency("accessor", n.indices).then(function(r) {
      a.setIndex(r);
    });
    s.push(o);
  }
  return He(a, n), Li(a, n, t), Promise.all(s).then(function() {
    return n.targets !== void 0 ? Si(a, n.targets, t) : a;
  });
}
function Hn(a, n) {
  let t = a.getIndex();
  if (t === null) {
    const o = [], r = a.getAttribute("position");
    if (r !== void 0) {
      for (let c = 0; c < r.count; c++)
        o.push(c);
      a.setIndex(o), t = a.getIndex();
    } else
      return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), a;
  }
  const e = t.count - 2, s = [];
  if (n === ns)
    for (let o = 1; o <= e; o++)
      s.push(t.getX(0)), s.push(t.getX(o)), s.push(t.getX(o + 1));
  else
    for (let o = 0; o < e; o++)
      o % 2 === 0 ? (s.push(t.getX(o)), s.push(t.getX(o + 1)), s.push(t.getX(o + 2))) : (s.push(t.getX(o + 2)), s.push(t.getX(o + 1)), s.push(t.getX(o)));
  s.length / 3 !== e && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  const i = a.clone();
  return i.setIndex(s), i;
}
const Ci = /* @__PURE__ */ I({
  __name: "GLTFLoader",
  props: {
    castShadow: { type: Boolean, default: !1 },
    enableRaycasting: { type: Boolean, default: !1 },
    name: { default: "" },
    onClick: { type: Function, default: () => null },
    onMouseMove: { type: Function, default: () => null },
    onMouseEnter: { type: Function, default: () => null },
    onMouseLeave: { type: Function, default: () => null },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    url: null
  },
  emits: ["load", "progress", "error"],
  setup(a, { expose: n, emit: t }) {
    const e = a, s = new ei(), i = new Ue();
    i.castShadow = !0, i.receiveShadow = !0, ce(i), C(e, "position", i), C(e, "rotation", i), C(e, "scale", i);
    function o() {
      s.load(
        // resource URL
        e.url,
        // called when resource is loaded
        function(c) {
          C(e, "position", i, !1), C(e, "rotation", i, !1), C(e, "scale", i, !1), i.add(c.scene), r(), t("load", c.scene, c.animations), k.object3DChanged(e.name, i);
        },
        // called when loading is in progresses
        function(c) {
          t("progress", c);
        },
        // called when loading has errors
        function(c) {
          t("error", c);
        }
      );
    }
    function r() {
      if (i.name = e.name, i.children.length !== 0)
        for (const c of i.children[0].children)
          c.castShadow = e.castShadow, c.receiveShadow = e.receiveShadow;
    }
    return r(), N(
      () => e.url,
      () => o(),
      {
        immediate: !0
      }
    ), tn(i.children, e), D("mesh", i), n({
      /**
       * Exposes `THREE.Group` entity containing Mesh[] loaded by the `GLTFLoader`
       */
      three: i
    }), (c, l) => Z(c.$slots, "default");
  }
}), Ii = /^[og]\s*(.+)?/, Oi = /^mtllib /, ki = /^usemtl /, Di = /^usemap /, Nn = /\s+/, jn = new v(), Yt = new v(), Gn = new v(), Fn = new v(), fe = new v(), Mt = new $();
function Hi() {
  const a = {
    objects: [],
    object: {},
    vertices: [],
    normals: [],
    colors: [],
    uvs: [],
    materials: {},
    materialLibraries: [],
    startObject: function(n, t) {
      if (this.object && this.object.fromDeclaration === !1) {
        this.object.name = n, this.object.fromDeclaration = t !== !1;
        return;
      }
      const e = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
      if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0), this.object = {
        name: n || "",
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
        startMaterial: function(s, i) {
          const o = this._finalize(!1);
          o && (o.inherited || o.groupCount <= 0) && this.materials.splice(o.index, 1);
          const r = {
            index: this.materials.length,
            name: s || "",
            mtllib: Array.isArray(i) && i.length > 0 ? i[i.length - 1] : "",
            smooth: o !== void 0 ? o.smooth : this.smooth,
            groupStart: o !== void 0 ? o.groupEnd : 0,
            groupEnd: -1,
            groupCount: -1,
            inherited: !1,
            clone: function(c) {
              const l = {
                index: typeof c == "number" ? c : this.index,
                name: this.name,
                mtllib: this.mtllib,
                smooth: this.smooth,
                groupStart: 0,
                groupEnd: -1,
                groupCount: -1,
                inherited: !1
              };
              return l.clone = this.clone.bind(l), l;
            }
          };
          return this.materials.push(r), r;
        },
        currentMaterial: function() {
          if (this.materials.length > 0)
            return this.materials[this.materials.length - 1];
        },
        _finalize: function(s) {
          const i = this.currentMaterial();
          if (i && i.groupEnd === -1 && (i.groupEnd = this.geometry.vertices.length / 3, i.groupCount = i.groupEnd - i.groupStart, i.inherited = !1), s && this.materials.length > 1)
            for (let o = this.materials.length - 1; o >= 0; o--)
              this.materials[o].groupCount <= 0 && this.materials.splice(o, 1);
          return s && this.materials.length === 0 && this.materials.push({
            name: "",
            smooth: this.smooth
          }), i;
        }
      }, e && e.name && typeof e.clone == "function") {
        const s = e.clone(0);
        s.inherited = !0, this.object.materials.push(s);
      }
      this.objects.push(this.object);
    },
    finalize: function() {
      this.object && typeof this.object._finalize == "function" && this.object._finalize(!0);
    },
    parseVertexIndex: function(n, t) {
      const e = parseInt(n, 10);
      return (e >= 0 ? e - 1 : e + t / 3) * 3;
    },
    parseNormalIndex: function(n, t) {
      const e = parseInt(n, 10);
      return (e >= 0 ? e - 1 : e + t / 3) * 3;
    },
    parseUVIndex: function(n, t) {
      const e = parseInt(n, 10);
      return (e >= 0 ? e - 1 : e + t / 2) * 2;
    },
    addVertex: function(n, t, e) {
      const s = this.vertices, i = this.object.geometry.vertices;
      i.push(s[n + 0], s[n + 1], s[n + 2]), i.push(s[t + 0], s[t + 1], s[t + 2]), i.push(s[e + 0], s[e + 1], s[e + 2]);
    },
    addVertexPoint: function(n) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[n + 0], t[n + 1], t[n + 2]);
    },
    addVertexLine: function(n) {
      const t = this.vertices;
      this.object.geometry.vertices.push(t[n + 0], t[n + 1], t[n + 2]);
    },
    addNormal: function(n, t, e) {
      const s = this.normals, i = this.object.geometry.normals;
      i.push(s[n + 0], s[n + 1], s[n + 2]), i.push(s[t + 0], s[t + 1], s[t + 2]), i.push(s[e + 0], s[e + 1], s[e + 2]);
    },
    addFaceNormal: function(n, t, e) {
      const s = this.vertices, i = this.object.geometry.normals;
      jn.fromArray(s, n), Yt.fromArray(s, t), Gn.fromArray(s, e), fe.subVectors(Gn, Yt), Fn.subVectors(jn, Yt), fe.cross(Fn), fe.normalize(), i.push(fe.x, fe.y, fe.z), i.push(fe.x, fe.y, fe.z), i.push(fe.x, fe.y, fe.z);
    },
    addColor: function(n, t, e) {
      const s = this.colors, i = this.object.geometry.colors;
      s[n] !== void 0 && i.push(s[n + 0], s[n + 1], s[n + 2]), s[t] !== void 0 && i.push(s[t + 0], s[t + 1], s[t + 2]), s[e] !== void 0 && i.push(s[e + 0], s[e + 1], s[e + 2]);
    },
    addUV: function(n, t, e) {
      const s = this.uvs, i = this.object.geometry.uvs;
      i.push(s[n + 0], s[n + 1]), i.push(s[t + 0], s[t + 1]), i.push(s[e + 0], s[e + 1]);
    },
    addDefaultUV: function() {
      const n = this.object.geometry.uvs;
      n.push(0, 0), n.push(0, 0), n.push(0, 0);
    },
    addUVLine: function(n) {
      const t = this.uvs;
      this.object.geometry.uvs.push(t[n + 0], t[n + 1]);
    },
    addFace: function(n, t, e, s, i, o, r, c, l) {
      const d = this.vertices.length;
      let u = this.parseVertexIndex(n, d), h = this.parseVertexIndex(t, d), f = this.parseVertexIndex(e, d);
      if (this.addVertex(u, h, f), this.addColor(u, h, f), r !== void 0 && r !== "") {
        const y = this.normals.length;
        u = this.parseNormalIndex(r, y), h = this.parseNormalIndex(c, y), f = this.parseNormalIndex(l, y), this.addNormal(u, h, f);
      } else
        this.addFaceNormal(u, h, f);
      if (s !== void 0 && s !== "") {
        const y = this.uvs.length;
        u = this.parseUVIndex(s, y), h = this.parseUVIndex(i, y), f = this.parseUVIndex(o, y), this.addUV(u, h, f), this.object.geometry.hasUVIndices = !0;
      } else
        this.addDefaultUV();
    },
    addPointGeometry: function(n) {
      this.object.geometry.type = "Points";
      const t = this.vertices.length;
      for (let e = 0, s = n.length; e < s; e++) {
        const i = this.parseVertexIndex(n[e], t);
        this.addVertexPoint(i), this.addColor(i);
      }
    },
    addLineGeometry: function(n, t) {
      this.object.geometry.type = "Line";
      const e = this.vertices.length, s = this.uvs.length;
      for (let i = 0, o = n.length; i < o; i++)
        this.addVertexLine(this.parseVertexIndex(n[i], e));
      for (let i = 0, o = t.length; i < o; i++)
        this.addUVLine(this.parseUVIndex(t[i], s));
    }
  };
  return a.startObject("", !1), a;
}
class Ni extends qn {
  constructor(n) {
    super(n), this.materials = null;
  }
  load(n, t, e, s) {
    const i = this, o = new Jt(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(n, function(r) {
      try {
        t(i.parse(r));
      } catch (c) {
        s ? s(c) : console.error(c), i.manager.itemError(n);
      }
    }, e, s);
  }
  setMaterials(n) {
    return this.materials = n, this;
  }
  parse(n) {
    const t = new Hi();
    n.indexOf(`\r
`) !== -1 && (n = n.replace(/\r\n/g, `
`)), n.indexOf(`\\
`) !== -1 && (n = n.replace(/\\\n/g, ""));
    const e = n.split(`
`);
    let s = [];
    for (let r = 0, c = e.length; r < c; r++) {
      const l = e[r].trimStart();
      if (l.length === 0)
        continue;
      const d = l.charAt(0);
      if (d !== "#")
        if (d === "v") {
          const u = l.split(Nn);
          switch (u[0]) {
            case "v":
              t.vertices.push(
                parseFloat(u[1]),
                parseFloat(u[2]),
                parseFloat(u[3])
              ), u.length >= 7 ? (Mt.setRGB(
                parseFloat(u[4]),
                parseFloat(u[5]),
                parseFloat(u[6])
              ).convertSRGBToLinear(), t.colors.push(Mt.r, Mt.g, Mt.b)) : t.colors.push(void 0, void 0, void 0);
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
        } else if (d === "f") {
          const h = l.slice(1).trim().split(Nn), f = [];
          for (let m = 0, w = h.length; m < w; m++) {
            const g = h[m];
            if (g.length > 0) {
              const b = g.split("/");
              f.push(b);
            }
          }
          const y = f[0];
          for (let m = 1, w = f.length - 1; m < w; m++) {
            const g = f[m], b = f[m + 1];
            t.addFace(
              y[0],
              g[0],
              b[0],
              y[1],
              g[1],
              b[1],
              y[2],
              g[2],
              b[2]
            );
          }
        } else if (d === "l") {
          const u = l.substring(1).trim().split(" ");
          let h = [];
          const f = [];
          if (l.indexOf("/") === -1)
            h = u;
          else
            for (let y = 0, m = u.length; y < m; y++) {
              const w = u[y].split("/");
              w[0] !== "" && h.push(w[0]), w[1] !== "" && f.push(w[1]);
            }
          t.addLineGeometry(h, f);
        } else if (d === "p") {
          const h = l.slice(1).trim().split(" ");
          t.addPointGeometry(h);
        } else if ((s = Ii.exec(l)) !== null) {
          const u = (" " + s[0].slice(1).trim()).slice(1);
          t.startObject(u);
        } else if (ki.test(l))
          t.object.startMaterial(l.substring(7).trim(), t.materialLibraries);
        else if (Oi.test(l))
          t.materialLibraries.push(l.substring(7).trim());
        else if (Di.test(l))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (d === "s") {
          if (s = l.split(" "), s.length > 1) {
            const h = s[1].trim().toLowerCase();
            t.object.smooth = h !== "0" && h !== "off";
          } else
            t.object.smooth = !0;
          const u = t.object.currentMaterial();
          u && (u.smooth = t.object.smooth);
        } else {
          if (l === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + l + '"');
        }
    }
    t.finalize();
    const i = new Ue();
    if (i.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let r = 0, c = t.objects.length; r < c; r++) {
        const l = t.objects[r], d = l.geometry, u = l.materials, h = d.type === "Line", f = d.type === "Points";
        let y = !1;
        if (d.vertices.length === 0)
          continue;
        const m = new U();
        m.setAttribute("position", new _e(d.vertices, 3)), d.normals.length > 0 && m.setAttribute("normal", new _e(d.normals, 3)), d.colors.length > 0 && (y = !0, m.setAttribute("color", new _e(d.colors, 3))), d.hasUVIndices === !0 && m.setAttribute("uv", new _e(d.uvs, 2));
        const w = [];
        for (let b = 0, M = u.length; b < M; b++) {
          const x = u[b], T = x.name + "_" + x.smooth + "_" + y;
          let R = t.materials[T];
          if (this.materials !== null) {
            if (R = this.materials.create(x.name), h && R && !(R instanceof Le)) {
              const O = new Le();
              ut.prototype.copy.call(O, R), O.color.copy(R.color), R = O;
            } else if (f && R && !(R instanceof ze)) {
              const O = new ze({ size: 10, sizeAttenuation: !1 });
              ut.prototype.copy.call(O, R), O.color.copy(R.color), O.map = R.map, R = O;
            }
          }
          R === void 0 && (h ? R = new Le() : f ? R = new ze({ size: 1, sizeAttenuation: !1 }) : R = new zs(), R.name = x.name, R.flatShading = !x.smooth, R.vertexColors = y, t.materials[T] = R), w.push(R);
        }
        let g;
        if (w.length > 1) {
          for (let b = 0, M = u.length; b < M; b++) {
            const x = u[b];
            m.addGroup(x.groupStart, x.groupCount, b);
          }
          h ? g = new vt(m, w) : f ? g = new lt(m, w) : g = new A(m, w);
        } else
          h ? g = new vt(m, w[0]) : f ? g = new lt(m, w[0]) : g = new A(m, w[0]);
        g.name = l.name, i.add(g);
      }
    else if (t.vertices.length > 0) {
      const r = new ze({ size: 1, sizeAttenuation: !1 }), c = new U();
      c.setAttribute("position", new _e(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (c.setAttribute("color", new _e(t.colors, 3)), r.vertexColors = !0);
      const l = new lt(c, r);
      i.add(l);
    }
    return i;
  }
}
const ji = /* @__PURE__ */ I({
  __name: "OBJLoader",
  props: {
    castShadow: { type: Boolean, default: !1 },
    enableRaycasting: { type: Boolean, default: !1 },
    name: { default: "" },
    onClick: { type: Function, default: () => null },
    onMouseMove: { type: Function, default: () => null },
    onMouseEnter: { type: Function, default: () => null },
    onMouseLeave: { type: Function, default: () => null },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] },
    url: null
  },
  emits: ["load", "progress", "error"],
  setup(a, { expose: n, emit: t }) {
    const e = a, s = new Ni(), i = new Ue();
    ce(i), C(e, "position", i), C(e, "rotation", i), C(e, "scale", i);
    function o() {
      s.load(
        // resource URL
        e.url,
        // called when resource is loaded
        function(c) {
          for (const l of c.children)
            "material" in i && (l.material = i.material);
          i.add(c), r(), t("load", c), k.object3DChanged(e.name, i);
        },
        // called when loading is in progresses
        function(c) {
          t("progress", c);
        },
        // called when loading has errors
        function(c) {
          t("error", c);
        }
      );
    }
    function r() {
      if (i.name = e.name, i.children.length !== 0)
        for (const c of i.children[0].children)
          c.castShadow = e.castShadow, c.receiveShadow = e.receiveShadow;
    }
    return r(), N(
      () => e.url,
      () => o(),
      {
        immediate: !0
      }
    ), tn(i.children, e), D("mesh", i), n({
      /**
       * Exposes `THREE.Group` entity containing Mesh[] loaded by the `OBJLoader`
       */
      three: i
    }), (c, l) => Z(c.$slots, "default");
  }
}), Gi = /* @__PURE__ */ I({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(a, { expose: n }) {
    const t = a, e = new Us(t.size);
    return ce(e), C(t, "position", e), C(t, "rotation", e), C(t, "scale", e), D("mesh", e), n({ three: e }), (s, i) => Z(s.$slots, "default");
  }
}), Fi = /* @__PURE__ */ I({
  __name: "BoxHelper",
  props: {
    castShadow: { type: Boolean, default: !1 },
    material: { default: null },
    mesh: { default: "" },
    name: { default: "" },
    position: { default: () => [0, 0, 0] },
    receiveShadow: { type: Boolean, default: !1 },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(a, { expose: n }) {
    const t = a, e = S("scene"), s = new U(), i = new we(), o = new A(s, i);
    ce(o), C(t, "position", o), C(t, "rotation", o), C(t, "scale", o);
    function r() {
      o.castShadow = t.castShadow, o.receiveShadow = t.receiveShadow, o.name = t.name;
    }
    r(), _(t, "castShadow", r), _(t, "receiveShadow", r);
    const c = S("getMaterial");
    function l(u) {
      const h = new ss();
      h.setFromObject(u);
      const f = new v();
      h.getCenter(f);
      const y = new te(h.max.x - h.min.x, h.max.y - h.min.y, h.max.z - h.min.z);
      ge(o.geometry, y), o.geometry.computeBoundingSphere(), o.position.set(f.x, f.y, f.z), k.geometryChanged(o.geometry.name, o.geometry);
    }
    const d = (u) => {
      if ("geometry" in u)
        u.geometry.computeBoundingBox();
      else
        for (const h of u.children)
          d(h);
    };
    return k.object3DChanged.on(t.mesh, (u) => {
      d(u), dn(() => {
        l(u);
      });
    }), k.object3DTranslated.on(t.mesh, (u) => {
      d(u), dn(() => {
        l(u);
      });
    }), ne(() => {
      if (t.material) {
        const u = c(t.material);
        o.material = u;
      }
    }), be(() => {
      e.remove(o), Se(o);
    }), D("mesh", o), n({ three: o }), (u, h) => Z(u.$slots, "default");
  }
}), zi = /* @__PURE__ */ I({
  __name: "GridHelper",
  props: {
    colorCenterLine: { default: 4473924 },
    colorGrid: { default: 8947848 },
    divisions: { default: 10 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(a, { expose: n }) {
    const t = a, e = new Bs(t.size, t.divisions, t.colorCenterLine, t.colorGrid);
    return ce(e), C(t, "position", e), C(t, "rotation", e), C(t, "scale", e), D("mesh", e), n({ three: e }), (s, i) => Z(s.$slots, "default");
  }
}), Ui = {
  name: "BoxGeometry",
  render: () => null
}, Bi = /* @__PURE__ */ I({
  ...Ui,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(a, { expose: n }) {
    const t = a;
    function e(c, l, d, u, h, f) {
      return new te(c, l, d, u, h, f);
    }
    const s = me(new U());
    s.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = s);
    const o = S("addGeometry");
    o(s);
    function r() {
      const c = e(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments
      );
      ge(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return ne(r), _(t, "name", () => {
      s.name = t.name;
    }), _(t, "width", r), _(t, "height", r), _(t, "depth", r), _(t, "widthSegments", r), _(t, "heightSegments", r), _(t, "depthSegments", r), n({
      /**
       * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <BoxGeometry ref="geometry" />
       * ```
       *
       * ```ts
       * const geometry = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.BufferGeometry instance
       * const threeGeometry = geometry.value.three;
       * })
       * ```
       */
      three: s
    }), { props: t, makeBox: e, three: s, mesh: i, addGeometry: o, redoGeometry: r };
  }
}), Xi = {
  name: "BufferGeometry",
  render: () => null
}, Yi = /* @__PURE__ */ I({
  ...Xi,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] },
    uvs: { default: () => [] },
    normals: { type: [Array, Boolean], default: !1 }
  },
  setup(a, { expose: n }) {
    const t = a;
    function e() {
      const c = new U(), l = new Float32Array(t.vertices);
      if (c.setAttribute("position", new Ze(l, 3)), t.uvs.length > 0) {
        const d = new Float32Array(t.uvs);
        c.setAttribute("uv", new Ze(d, 2));
      }
      if (t.normals === !0 && (c.computeVertexNormals(), c.attributes.normal.needsUpdate = !0), Array.isArray(t.normals)) {
        const d = new Float32Array(t.normals);
        c.setAttribute("normal", new Ze(d, 3));
      }
      return t.faces.length > 0 && c.setIndex(t.faces), c;
    }
    const s = me(new U());
    s.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = s);
    const o = S("addGeometry");
    o(s);
    function r() {
      const c = e();
      ge(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return ne(r), N(
      () => t.vertices,
      (c) => {
        r();
      },
      { deep: !0 }
    ), N(
      () => t.faces,
      (c) => {
        r();
      },
      { deep: !0 }
    ), n({
      /**
       * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <BufferGeometry ref="geometry" />
       * ```
       *
       * ```ts
       * const geometry = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.BufferGeometry instance
       * const threeGeometry = geometry.value.three;
       * })
       * ```
       */
      three: s
    }), { props: t, makeGeometry: e, three: s, mesh: i, addGeometry: o, redoGeometry: r };
  }
}), Vi = {
  name: "CircleGeometry",
  render: () => null
}, $i = /* @__PURE__ */ I({
  ...Vi,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    segments: { default: 32 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(a, { expose: n }) {
    const t = a;
    function e(c, l, d, u) {
      return new Xs(c, l, d, u);
    }
    const s = me(new U());
    s.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = s);
    const o = S("addGeometry");
    o(s);
    function r() {
      const c = e(t.radius, t.segments, t.thetaStart, t.thetaLength);
      ge(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return ne(r), _(t, "radius", r), _(t, "segments", r), _(t, "thetaStart", r), _(t, "thetaLength", r), n({
      /**
       * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <CircleGeometry ref="geometry" />
       * ```
       *
       * ```ts
       * const geometry = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.BufferGeometry instance
       * const threeGeometry = geometry.value.three;
       * })
       * ```
       */
      three: s
    }), { props: t, makeCircle: e, three: s, mesh: i, addGeometry: o, redoGeometry: r };
  }
}), Zi = {
  name: "ConeGeometry",
  render: () => null
}, qi = /* @__PURE__ */ I({
  ...Zi,
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
  setup(a, { expose: n }) {
    const t = a;
    function e(c, l, d, u, h, f, y) {
      return new Ys(c, l, d, u, h, f, y);
    }
    const s = me(new U());
    s.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = s);
    const o = S("addGeometry");
    o(s);
    function r() {
      const c = e(
        t.radius,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength
      );
      ge(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return ne(r), _(t, "radius", r), _(t, "height", r), _(t, "radialSegments", r), _(t, "heightSegments", r), _(t, "openEnded", r), _(t, "thetaStart", r), _(t, "thetaLength", r), n({
      /**
       * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <ConeGeometry ref="geometry" />
       * ```
       *
       * ```ts
       * const geometry = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.BufferGeometry instance
       * const threeGeometry = geometry.value.three;
       * })
       * ```
       */
      three: s
    }), { props: t, makeCone: e, three: s, mesh: i, addGeometry: o, redoGeometry: r };
  }
}), Ki = {
  name: "CylinderGeometry",
  render: () => null
}, Qi = /* @__PURE__ */ I({
  ...Ki,
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
  setup(a, { expose: n }) {
    const t = a;
    function e(c, l, d, u, h, f, y, m) {
      return new se(
        c,
        l,
        d,
        u,
        h,
        f,
        y,
        m
      );
    }
    const s = me(new U());
    s.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = s);
    const o = S("addGeometry");
    o(s);
    function r() {
      const c = e(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength
      );
      ge(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return ne(r), _(t, "radiusTop", r), _(t, "radiusBottom", r), _(t, "height", r), _(t, "radialSegments", r), _(t, "heightSegments", r), _(t, "openEnded", r), _(t, "thetaStart", r), _(t, "thetaLength", r), n({
      /**
       * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <CylinderGeometry ref="geometry" />
       * ```
       *
       * ```ts
       * const geometry = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.BufferGeometry instance
       * const threeGeometry = geometry.value.three;
       * })
       * ```
       */
      three: s
    }), { props: t, makeCylinder: e, three: s, mesh: i, addGeometry: o, redoGeometry: r };
  }
}), Wi = {
  name: "EdgesGeometry",
  render: () => null
}, Ji = /* @__PURE__ */ I({
  ...Wi,
  props: {
    geometry: null
  },
  setup(a, { expose: n }) {
    const t = a, e = me(new U()), s = S("mesh", null);
    s && (s.geometry = e);
    const i = S("addGeometry");
    i(e);
    function o(r) {
      const c = new Vs(r);
      ge(e, c);
      const l = s;
      "isLine" in l && l.computeLineDistances();
    }
    return k.geometryChanged.on(t.geometry, (r) => {
      o(r);
    }), n({
      /**
       * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <EdgesGeometry ref="geometry" />
       * ```
       *
       * ```ts
       * const geometry = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.BufferGeometry instance
       * const threeGeometry = geometry.value.three;
       * })
       * ```
       */
      three: e
    }), { props: t, three: e, mesh: s, addGeometry: i, redoGeometry: o };
  }
});
class Ct extends U {
  constructor(n = (s, i, o) => o.set(s, i, Math.cos(s) * Math.sin(i)), t = 8, e = 8) {
    super(), this.type = "ParametricGeometry", this.parameters = {
      func: n,
      slices: t,
      stacks: e
    };
    const s = [], i = [], o = [], r = [], c = 1e-5, l = new v(), d = new v(), u = new v(), h = new v(), f = new v(), y = t + 1;
    for (let m = 0; m <= e; m++) {
      const w = m / e;
      for (let g = 0; g <= t; g++) {
        const b = g / t;
        n(b, w, d), i.push(d.x, d.y, d.z), b - c >= 0 ? (n(b - c, w, u), h.subVectors(d, u)) : (n(b + c, w, u), h.subVectors(u, d)), w - c >= 0 ? (n(b, w - c, u), f.subVectors(d, u)) : (n(b, w + c, u), f.subVectors(u, d)), l.crossVectors(h, f).normalize(), o.push(l.x, l.y, l.z), r.push(b, w);
      }
    }
    for (let m = 0; m < e; m++)
      for (let w = 0; w < t; w++) {
        const g = m * y + w, b = m * y + w + 1, M = (m + 1) * y + w + 1, x = (m + 1) * y + w;
        s.push(g, b, x), s.push(b, M, x);
      }
    this.setIndex(s), this.setAttribute("position", new _e(i, 3)), this.setAttribute("normal", new _e(o, 3)), this.setAttribute("uv", new _e(r, 2));
  }
}
const Qe = {
  klein: function(a, n, t) {
    n *= Math.PI, a *= 2 * Math.PI, n = n * 2;
    let e, s;
    n < Math.PI ? (e = 3 * Math.cos(n) * (1 + Math.sin(n)) + 2 * (1 - Math.cos(n) / 2) * Math.cos(n) * Math.cos(a), s = -8 * Math.sin(n) - 2 * (1 - Math.cos(n) / 2) * Math.sin(n) * Math.cos(a)) : (e = 3 * Math.cos(n) * (1 + Math.sin(n)) + 2 * (1 - Math.cos(n) / 2) * Math.cos(a + Math.PI), s = -8 * Math.sin(n));
    const i = -2 * (1 - Math.cos(n) / 2) * Math.sin(a);
    t.set(e, i, s);
  },
  plane: function(a, n) {
    return function(t, e, s) {
      const i = t * a, o = 0, r = e * n;
      s.set(i, o, r);
    };
  },
  mobius: function(a, n, t) {
    a = a - 0.5;
    const e = 2 * Math.PI * n, s = 2, i = Math.cos(e) * (s + a * Math.cos(e / 2)), o = Math.sin(e) * (s + a * Math.cos(e / 2)), r = a * Math.sin(e / 2);
    t.set(i, o, r);
  },
  mobius3d: function(a, n, t) {
    a *= Math.PI, n *= 2 * Math.PI, a = a * 2;
    const e = a / 2, s = 2.25, i = 0.125, o = 0.65;
    let r = i * Math.cos(n) * Math.cos(e) - o * Math.sin(n) * Math.sin(e);
    const c = i * Math.cos(n) * Math.sin(e) + o * Math.sin(n) * Math.cos(e), l = (s + r) * Math.sin(a);
    r = (s + r) * Math.cos(a), t.set(r, l, c);
  }
};
Qe.TubeGeometry = class extends Ct {
  constructor(n, t = 64, e = 1, s = 8, i = !1) {
    const o = t + 1, r = n.computeFrenetFrames(t, i), c = r.tangents, l = r.normals, d = r.binormals, u = new v();
    function h(f, y, m) {
      y *= 2 * Math.PI;
      const w = Math.floor(f * (o - 1));
      n.getPointAt(f, u);
      const g = l[w], b = d[w], M = -e * Math.cos(y), x = e * Math.sin(y);
      u.x += M * g.x + x * b.x, u.y += M * g.y + x * b.y, u.z += M * g.z + x * b.z, m.copy(u);
    }
    super(h, t, s), this.tangents = c, this.normals = l, this.binormals = d, this.path = n, this.segments = t, this.radius = e, this.segmentsRadius = s, this.closed = i;
  }
};
Qe.TorusKnotGeometry = class extends Qe.TubeGeometry {
  constructor(n = 200, t = 40, e = 64, s = 8, i = 2, o = 3) {
    class r extends $s {
      getPoint(h, f = new v()) {
        const y = f;
        h *= Math.PI * 2;
        const m = 0.5, w = (1 + m * Math.cos(o * h)) * Math.cos(i * h), g = (1 + m * Math.cos(o * h)) * Math.sin(i * h), b = m * Math.sin(o * h);
        return y.set(w, g, b).multiplyScalar(n);
      }
    }
    const c = e, l = s, d = new r();
    super(d, c, t, l, !0, !1), this.radius = n, this.tube = t, this.segmentsT = e, this.segmentsR = s, this.p = i, this.q = o;
  }
};
Qe.SphereGeometry = class extends Ct {
  constructor(n, t, e) {
    function s(i, o, r) {
      i *= Math.PI, o *= 2 * Math.PI;
      const c = n * Math.sin(i) * Math.cos(o), l = n * Math.sin(i) * Math.sin(o), d = n * Math.cos(i);
      r.set(c, l, d);
    }
    super(s, t, e);
  }
};
Qe.PlaneGeometry = class extends Ct {
  constructor(n, t, e, s) {
    function i(o, r, c) {
      const l = o * n, d = 0, u = r * t;
      c.set(l, d, u);
    }
    super(i, e, s);
  }
};
const er = {
  name: "Parametriceometry",
  render: () => null
}, tr = /* @__PURE__ */ I({
  ...er,
  props: {
    name: { default: "" },
    function: { type: Function, default: Qe.klein },
    slices: { default: 8 },
    stacks: { default: 8 }
  },
  setup(a, { expose: n }) {
    const t = a;
    function e(c, l, d) {
      return new Ct(c, l, d);
    }
    const s = me(new U());
    s.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = s);
    const o = S("addGeometry");
    o(s);
    function r() {
      const c = e(t.function, t.slices, t.stacks);
      ge(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return ne(r), _(t, "function", r), _(t, "stacks", r), _(t, "slices", r), n({
      /**
       * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <ParametricGeometry ref="geometry" />
       * ```
       *
       * ```ts
       * const geometry = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.BufferGeometry instance
       * const threeGeometry = geometry.value.three;
       * })
       * ```
       */
      three: s
    }), { props: t, makePlane: e, three: s, mesh: i, addGeometry: o, redoGeometry: r };
  }
}), nr = {
  name: "PlaneGeometry",
  render: () => null
}, sr = /* @__PURE__ */ I({
  ...nr,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(a, { expose: n }) {
    const t = a;
    function e(c, l, d, u) {
      return new Yn(c, l, d, u);
    }
    const s = me(new U());
    s.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = s);
    const o = S("addGeometry");
    o(s);
    function r() {
      const c = e(t.width, t.height, t.widthSegments, t.heightSegments);
      ge(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return ne(r), _(t, "width", r), _(t, "height", r), _(t, "widthSegments", r), _(t, "heightSegments", r), n({
      /**
       * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <PlaneGeometry ref="geometry" />
       * ```
       *
       * ```ts
       * const geometry = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.BufferGeometry instance
       * const threeGeometry = geometry.value.three;
       * })
       * ```
       */
      three: s
    }), { props: t, makePlane: e, three: s, mesh: i, addGeometry: o, redoGeometry: r };
  }
}), or = {
  name: "RingGeometry",
  render: () => null
}, ir = /* @__PURE__ */ I({
  ...or,
  props: {
    name: { default: "" },
    innerRadius: { default: 0.5 },
    outerRadius: { default: 1 },
    thetaSegments: { default: 32 },
    phiSegments: { default: 1 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(a, { expose: n }) {
    const t = a;
    function e(c, l, d, u, h, f) {
      return new Zs(c, l, d, u, h, f);
    }
    const s = me(new U());
    s.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = s);
    const o = S("addGeometry");
    o(s);
    function r() {
      const c = e(
        t.innerRadius,
        t.outerRadius,
        t.thetaSegments,
        t.phiSegments,
        t.thetaStart,
        t.thetaLength
      );
      ge(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return ne(r), _(t, "innerRadius", r), _(t, "outerRadius", r), _(t, "thetaSegments", r), _(t, "phiSegments", r), _(t, "thetaStart", r), _(t, "thetaLength", r), n({
      /**
       * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <RingGeometry ref="geometry" />
       * ```
       *
       * ```ts
       * const geometry = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.BufferGeometry instance
       * const threeGeometry = geometry.value.three;
       * })
       * ```
       */
      three: s
    }), { props: t, makeRing: e, three: s, mesh: i, addGeometry: o, redoGeometry: r };
  }
}), rr = {
  name: "SphereGeometry",
  render: () => null
}, ar = /* @__PURE__ */ I({
  ...rr,
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
  setup(a, { expose: n }) {
    const t = a;
    function e(c, l, d, u, h, f, y) {
      return new Xn(c, l, d, u, h, f, y);
    }
    const s = new U();
    s.name = t.name;
    const i = S("mesh", null);
    i && (i.geometry = s);
    const o = S("addGeometry");
    o(s);
    function r() {
      const c = e(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength
      );
      ge(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return ne(r), _(t, "radius", r), _(t, "widthSegments", r), _(t, "heightSegments", r), _(t, "phiStart", r), _(t, "phiLength", r), _(t, "thetaStart", r), _(t, "thetaLength", r), n({
      /**
       * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <SphereGeometry ref="geometry" />
       * ```
       *
       * ```ts
       * const geometry = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.BufferGeometry instance
       * const threeGeometry = geometry.value.three;
       * })
       * ```
       */
      three: s
    }), { props: t, makeSphere: e, three: s, mesh: i, addGeometry: o, redoGeometry: r };
  }
}), cr = {
  name: "WireframeGeometry",
  render: () => null
}, lr = /* @__PURE__ */ I({
  ...cr,
  props: {
    geometry: null
  },
  setup(a, { expose: n }) {
    const t = a, e = me(new U()), s = S("mesh", null);
    s && (s.geometry = e);
    const i = S("addGeometry");
    i(e);
    function o(r) {
      const c = new qs(r);
      ge(e, c);
      const l = s;
      "isLine" in l && l.computeLineDistances();
    }
    return k.geometryChanged.on(t.geometry, (r) => {
      o(r);
    }), n({
      /**
       * You can access the managed `THREE.BufferGeometry` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <WireframeGeometry ref="geometry" />
       * ```
       *
       * ```ts
       * const geometry = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.BufferGeometry instance
       * const threeGeometry = geometry.value.three;
       * })
       * ```
       */
      three: e
    }), { props: t, three: e, mesh: s, addGeometry: i, redoGeometry: o };
  }
}), ur = {
  name: "LineBasicMaterial",
  render: () => null
}, dr = /* @__PURE__ */ I({
  ...ur,
  props: {
    color: { default: 16777215 },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(a, { expose: n }) {
    const t = a, e = new Le({ color: t.color });
    e.name = t.name;
    const s = S("addMaterial");
    s(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function o() {
      t.color && (e.color = new $(t.color)), e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return o(), _(t, "color", o), _(t, "opacity", o), _(t, "transparent", o), D("material", e), n({
      /**
       * You can access the managed `THREE.LineBasicMaterial` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <LineBasicMaterial ref="material" />
       * ```
       *
       * ```ts
       * const material = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.LineBasicMaterial instance
       * const threeMaterial = material.value.three;
       * })
       * ```
       */
      three: e
    }), { props: t, three: e, addMaterial: s, mesh: i, applyProps: o };
  }
}), hr = {
  name: "LineDashedMaterial",
  render: () => null
}, fr = /* @__PURE__ */ I({
  ...hr,
  props: {
    color: { default: 16777215 },
    scale: { default: 1 },
    dashSize: { default: 3 },
    gapSize: { default: 1 },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(a, { expose: n }) {
    const t = a, e = new Ks({ color: t.color });
    e.name = t.name;
    const s = S("addMaterial");
    s(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function o() {
      e.color = new $(t.color), e.scale = t.scale, e.dashSize = t.dashSize, e.gapSize = t.gapSize, e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return o(), _(t, "color", o), _(t, "scale", o), _(t, "dashSize", o), _(t, "gapSize", o), _(t, "opacity", o), _(t, "transparent", o), D("material", e), n({
      /**
       * You can access the managed `THREE.LineDashedMaterial` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <LineDashedMaterial ref="material" />
       * ```
       *
       * ```ts
       * const material = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.LineDashedMaterial instance
       * const threeMaterial = material.value.three;
       * })
       * ```
       */
      three: e
    }), { props: t, three: e, addMaterial: s, mesh: i, applyProps: o };
  }
}), pr = {
  name: "MeshBasicMaterial"
}, mr = /* @__PURE__ */ I({
  ...pr,
  props: {
    color: null,
    side: { default: ft },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(a, { expose: n }) {
    const t = a, e = new we();
    e.name = t.name, S("addMaterial")(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function o() {
      t.color !== void 0 && (e.color = new $(t.color)), e.side = t.side, e.opacity = t.opacity, e.transparent = t.transparent, e.vertexColors = t.vertexColors, e.needsUpdate = !0;
    }
    return o(), D("material", e), _(t, "color", o), _(t, "side", o), _(t, "opacity", o), _(t, "transparent", o), _(t, "vertexColors", o), n({
      /**
       * You can access the managed `THREE.MeshBasicMaterial` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <MeshBasicMaterial ref="material" />
       * ```
       *
       * ```ts
       * const material = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.MeshBasicMaterial instance
       * const threeMaterial = material.value.three;
       * })
       * ```
       */
      three: e
    }), (r, c) => Z(r.$slots, "default");
  }
}), gr = {
  name: "MeshLambertMaterial"
}, yr = /* @__PURE__ */ I({
  ...gr,
  props: {
    color: { default: 16777215 },
    name: { default: "" },
    side: { default: ft },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(a, { expose: n }) {
    const t = a, e = new Qs();
    e.name = t.name, S("addMaterial")(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function o(r) {
      r.color && (e.color = new $(r.color)), r.side && (e.side = r.side);
    }
    return o(t), N(
      () => t.color,
      () => o(t)
    ), N(
      () => t.side,
      () => o(t)
    ), N(
      () => t.opacity,
      () => {
        e.opacity = t.opacity;
      },
      { immediate: !0 }
    ), N(
      () => t.transparent,
      () => {
        e.transparent = t.transparent;
      },
      { immediate: !0 }
    ), D("material", e), n({
      /**
       * You can access the managed `THREE.MeshLambertMaterial` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <MeshLambertMaterial ref="material" />
       * ```
       *
       * ```ts
       * const material = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.MeshLambertMaterial instance
       * const threeMaterial = material.value.three;
       * })
       * ```
       */
      three: e
    }), (r, c) => Z(r.$slots, "default");
  }
}), _r = {
  name: "PointsMaterial",
  render: () => null
}, wr = /* @__PURE__ */ I({
  ..._r,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    name: { default: "" },
    size: { default: 1 },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(a, { expose: n }) {
    const t = a, e = new ze({ color: t.color, sizeAttenuation: t.sizeAttenuation, size: t.size });
    e.name = t.name;
    const s = S("mesh", null), i = S("addMaterial");
    i(e), s && (s.material = e);
    function o() {
      e.color = new $(t.color), e.size = t.size, e.sizeAttenuation = t.sizeAttenuation, e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return o(), _(t, "color", o), _(t, "size", o), _(t, "sizeAttenuation", o), _(t, "opacity", o), _(t, "transparent", o), D("material", e), n({
      /**
       * You can access the managed `THREE.PointsMaterial` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <PointsMaterial ref="material" />
       * ```
       *
       * ```ts
       * const material = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.PointsMaterial instance
       * const threeMaterial = material.value.three;
       * })
       * ```
       */
      three: e
    }), { props: t, three: e, mesh: s, addMaterial: i, applyProps: o };
  }
}), br = {
  name: "MeshNormalMaterial"
}, Er = /* @__PURE__ */ I({
  ...br,
  props: {
    side: { default: ft },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(a, { expose: n }) {
    const t = a, e = new Ws();
    e.name = t.name, S("addMaterial")(e);
    const i = S("mesh", null);
    return i && (i.material = e), N(
      () => t.side,
      () => {
        e.side = t.side;
      },
      { immediate: !0 }
    ), N(
      () => t.opacity,
      () => {
        e.opacity = t.opacity;
      },
      { immediate: !0 }
    ), N(
      () => t.transparent,
      () => {
        e.transparent = t.transparent;
      },
      { immediate: !0 }
    ), D("material", e), n({
      /**
       * You can access the managed `THREE.MeshNormalMaterial` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <MeshNormalMaterial ref="material" />
       * ```
       *
       * ```ts
       * const material = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.MeshNormalMaterial instance
       * const threeMaterial = material.value.three;
       * })
       * ```
       */
      three: e
    }), (o, r) => Z(o.$slots, "default");
  }
}), Tr = {
  name: "MeshStandardMaterial"
}, Mr = /* @__PURE__ */ I({
  ...Tr,
  props: {
    color: null,
    side: { default: ft },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(a, { expose: n }) {
    const t = a, e = new en();
    e.name = t.name, S("addMaterial")(e);
    const i = S("mesh", null);
    i && (i.material = e);
    function o() {
      t.color !== void 0 && (e.color = new $(t.color)), e.side = t.side, e.opacity = t.opacity, e.transparent = t.transparent, e.vertexColors = t.vertexColors, e.needsUpdate = !0;
    }
    return o(), D("material", e), _(t, "color", o), _(t, "side", o), _(t, "opacity", o), _(t, "transparent", o), _(t, "vertexColors", o), n({
      /**
       * You can access the managed `THREE.MeshStandardMaterial` instance using the exposed `three` property.
       *
       * #### Example code
       * ```vue-html
       * <MeshBasicMaterial ref="material" />
       * ```
       *
       * ```ts
       * const material = ref(null);
       *
       * onMounted(() => {
       * // Do something with the THREE.MeshBasicMaterial instance
       * const threeMaterial = material.value.three;
       * })
       * ```
       */
      three: e
    }), (r, c) => Z(r.$slots, "default");
  }
}), Sr = {
  name: "AmbientLight",
  render: () => null
}, vr = /* @__PURE__ */ I({
  ...Sr,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(a, { expose: n }) {
    const t = a, e = S("scene"), s = new Js();
    e.add(s);
    function i(o) {
      s.color = new $(o.color), s.intensity = o.intensity;
    }
    return i(t), N(
      () => t.color,
      () => i(t)
    ), N(
      () => t.intensity,
      () => i(t)
    ), n({ three: s }), { props: t, scene: e, three: s, applyProps: i };
  }
}), xr = {
  name: "DirectionalLight",
  render: () => null
}, Ar = /* @__PURE__ */ I({
  ...xr,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] }
  },
  setup(a, { expose: n }) {
    const t = a, e = new Qn();
    ce(e);
    function s() {
      e.color = new $(t.color), e.intensity = t.intensity, e.castShadow = t.castShadow;
    }
    return s(), _(t, "color", s), _(t, "intensity", s), _(t, "castShadow", s), C(t, "position", e), n({ three: e }), { props: t, three: e, applyProps: s };
  }
}), Rr = {
  name: "HemisphereLight",
  render: () => null
}, Pr = /* @__PURE__ */ I({
  ...Rr,
  props: {
    groundColor: { default: 16777215 },
    intensity: { default: 1 },
    skyColor: { default: 16777215 }
  },
  setup(a, { expose: n }) {
    const t = a, e = S("scene"), s = new eo();
    e.add(s);
    function i() {
      s.color = new $(t.skyColor), s.groundColor = new $(t.groundColor), s.intensity = t.intensity;
    }
    return i(), _(t, "skyColor", i), _(t, "groundColor", i), _(t, "intensity", i), n({ three: s }), { props: t, scene: e, three: s, applyProps: i };
  }
}), Lr = {
  name: "PointLight",
  render: () => null
}, Cr = /* @__PURE__ */ I({
  ...Lr,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(a, { expose: n }) {
    const t = a, e = new Kn();
    ce(e), C(t, "position", e), C(t, "rotation", e), C(t, "scale", e);
    function s(i) {
      e.color = new $(i.color), e.intensity = i.intensity, e.castShadow = i.castShadow;
    }
    return s(t), N(
      () => t.color,
      () => s(t)
    ), N(
      () => t.intensity,
      () => s(t)
    ), N(
      () => t.castShadow,
      () => s(t)
    ), n({ three: e }), { props: t, three: e, applyProps: s };
  }
}), Ir = {
  name: "TextureLoader",
  render: () => null
}, Or = /* @__PURE__ */ I({
  ...Ir,
  props: {
    offset: { default: () => [0, 0] },
    repeat: { default: () => [1, 1] },
    rotation: { default: 0 },
    url: null,
    wrapS: { default: qt },
    wrapT: { default: qt }
  },
  setup(a, { expose: n }) {
    const t = a, e = S("material"), s = Ne(new Kt());
    function i() {
      new Wn().loadAsync(t.url).then((r) => {
        s.value = r, _n(t, "offset", s.value), _n(t, "repeat", s.value), "map" in e && (e.map = s.value, e.needsUpdate = !0), o();
      });
    }
    function o() {
      s.value.wrapS = t.wrapS, s.value.wrapT = t.wrapT, s.value.rotation = t.rotation, s.value.needsUpdate = !0;
    }
    return i(), _(t, "url", i), _(t, "wrapS", o), _(t, "wrapT", o), _(t, "rotation", o), n({ three: s }), { props: t, material: e, three: s, load: i, applyProps: o };
  }
});
function Fr(a) {
  a.component("Renderer", vo), a.component("Scene", xo), a.component("PerspectiveCamera", Ro), a.component("OrthographicCamera", Lo), a.component("OrbitControls", Oo), a.component("TrackballControls", Ho), a.component("TransformControls", Vo), a.component("Group", $o), a.component("InstancedMesh", Zo), a.component("Line", qo), a.component("LineLoop", Ko), a.component("LineSegments", Qo), a.component("Mesh", Wo), a.component("Points", Jo), a.component("GLTFLoader", Ci), a.component("OBJLoader", ji), a.component("AxesHelper", Gi), a.component("BoxHelper", Fi), a.component("GridHelper", zi), a.component("BoxGeometry", Bi), a.component("BufferGeometry", Yi), a.component("CircleGeometry", $i), a.component("ConeGeometry", qi), a.component("CylinderGeometry", Qi), a.component("EdgesGeometry", Ji), a.component("ParametricGeometry", tr), a.component("PlaneGeometry", sr), a.component("RingGeometry", ir), a.component("SphereGeometry", ar), a.component("WireframeGeometry", lr), a.component("LineBasicMaterial", dr), a.component("LineDashedMaterial", fr), a.component("MeshBasicMaterial", mr), a.component("MeshLambertMaterial", yr), a.component("PointsMaterial", wr), a.component("MeshNormalMaterial", Er), a.component("MeshStandardMaterial", Mr), a.component("AmbientLight", vr), a.component("DirectionalLight", Ar), a.component("HemisphereLight", Pr), a.component("PointLight", Cr), a.component("TextureLoader", Or);
}
export {
  vr as AmbientLight,
  Gi as AxesHelper,
  Bi as BoxGeometry,
  Fi as BoxHelper,
  Yi as BufferGeometry,
  $i as CircleGeometry,
  qi as ConeGeometry,
  Qi as CylinderGeometry,
  Ar as DirectionalLight,
  Ji as EdgesGeometry,
  Ci as GLTFLoader,
  zi as GridHelper,
  $o as Group,
  Pr as HemisphereLight,
  Zo as InstancedMesh,
  qo as Line,
  dr as LineBasicMaterial,
  fr as LineDashedMaterial,
  Ko as LineLoop,
  Qo as LineSegments,
  Wo as Mesh,
  mr as MeshBasicMaterial,
  yr as MeshLambertMaterial,
  Er as MeshNormalMaterial,
  Mr as MeshStandardMaterial,
  ji as OBJLoader,
  Oo as OrbitControls,
  Lo as OrthographicCamera,
  tr as ParametricGeometry,
  Ro as PerspectiveCamera,
  sr as PlaneGeometry,
  Cr as PointLight,
  Jo as Points,
  wr as PointsMaterial,
  vo as Renderer,
  ir as RingGeometry,
  xo as Scene,
  ar as SphereGeometry,
  Or as TextureLoader,
  Ho as TrackballControls,
  Vo as TransformControls,
  lr as WireframeGeometry,
  Fr as default,
  Fr as install
};

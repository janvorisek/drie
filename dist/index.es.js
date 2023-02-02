import { watch as F, inject as T, onMounted as oe, onUnmounted as we, defineComponent as C, ref as He, reactive as pe, provide as j, openBlock as hs, createElementBlock as fs, Fragment as ps, createElementVNode as ms, renderSlot as K, shallowRef as gs, nextTick as hn } from "vue";
import { Vector3 as v, Raycaster as Vt, Vector2 as U, WebGLRenderer as ys, Scene as _s, Color as V, PerspectiveCamera as Un, OrthographicCamera as Bn, EventDispatcher as Xn, MOUSE as Le, TOUCH as Ze, Quaternion as le, Spherical as fn, Euler as ws, Matrix4 as vt, Object3D as St, MeshBasicMaterial as _e, LineBasicMaterial as Pe, CylinderGeometry as ie, BoxGeometry as se, BufferGeometry as B, Float32BufferAttribute as ye, Mesh as x, OctahedronGeometry as gt, Line as Me, SphereGeometry as Yn, TorusGeometry as Je, PlaneGeometry as Vn, DoubleSide as $n, Group as Ue, InstancedMesh as bs, LineLoop as Zn, LineSegments as Tt, PointsMaterial as ze, Points as ct, Loader as qn, LoaderUtils as Be, FileLoader as Jt, SpotLight as Es, PointLight as Kn, DirectionalLight as Qn, sRGBEncoding as Xe, MeshPhysicalMaterial as Ye, TangentSpaceNormalMap as Ms, Interpolant as Ss, TextureLoader as Wn, ImageBitmapLoader as Ts, InterleavedBuffer as vs, InterleavedBufferAttribute as xs, BufferAttribute as lt, LinearFilter as Jn, LinearMipmapLinearFilter as es, RepeatWrapping as $t, Material as ut, MeshStandardMaterial as en, PropertyBinding as As, SkinnedMesh as Rs, MathUtils as Ls, InterpolateLinear as ts, AnimationClip as Ps, Bone as Cs, Skeleton as Is, TriangleFanDrawMode as ns, NearestFilter as Os, NearestMipmapNearestFilter as ks, LinearMipmapNearestFilter as Ds, NearestMipmapLinearFilter as Hs, ClampToEdgeWrapping as Zt, MirroredRepeatWrapping as js, InterpolateDiscrete as Ns, FrontSide as xt, Texture as qt, TriangleStripDrawMode as Fs, VectorKeyframeTrack as Gs, QuaternionKeyframeTrack as pn, NumberKeyframeTrack as zs, Box3 as ss, Sphere as Us, MeshPhongMaterial as Bs, AxesHelper as Xs, GridHelper as Ys, CircleGeometry as Vs, ConeGeometry as $s, EdgesGeometry as Zs, Curve as qs, RingGeometry as Ks, WireframeGeometry as Qs, LineDashedMaterial as Ws, MeshLambertMaterial as Js, MeshNormalMaterial as eo, AmbientLight as to, HemisphereLight as no } from "three";
const mn = (r) => r === void 0 ? new v(0, 0, 0) : "x" in r ? new v(r.x, r.y, r.z) : new v(r[0], r[1], r[2]), gn = (r) => r === void 0 ? new U(0, 0) : "x" in r ? new U(r.x, r.y) : new U(r[0], r[1]), yn = (r, n, t) => {
  t[r].isVector3 ? t[r].set(n.x, n.y, n.z) : "isEuler" in t[r] && t[r].setFromVector3(n);
}, L = (r, n, t, e = !0) => {
  if (t !== null) {
    if (r[n] !== void 0) {
      const s = mn(r[n]);
      yn(n, s, t);
    }
    e && F(
      () => r[n],
      () => {
        if (r[n] !== void 0) {
          const s = mn(r[n]);
          yn(n, s, t);
        }
      }
    );
  }
}, _n = (r, n, t) => {
  t[r].isVector2 && t[r].set(n.x, n.y);
}, wn = (r, n, t, e = !0) => {
  if (t !== null) {
    if (r[n] !== void 0) {
      const s = gn(r[n]);
      _n(n, s, t);
    }
    e && F(
      () => r[n],
      () => {
        if (r[n] !== void 0) {
          const s = gn(r[n]);
          _n(n, s, t);
        }
      }
    );
  }
}, _ = (r, n, t) => {
  F(
    () => r[n],
    () => {
      t();
    }
  );
};
function me(r, n) {
  n.hasAttribute("position") && (r.setAttribute("position", n.getAttribute("position")), r.attributes.position.needsUpdate = !0), n.hasAttribute("normal") && (r.setAttribute("normal", n.getAttribute("normal")), r.attributes.normal.needsUpdate = !0), n.hasAttribute("uv") && (r.setAttribute("uv", n.getAttribute("uv")), r.attributes.uv.needsUpdate = !0), r.setIndex(n.getIndex()), n.boundingBox !== null && (r.boundingBox = n.boundingBox), n.boundingSphere && n.boundingSphere.radius > 0 && (r.boundingSphere = n.boundingSphere);
}
function Se(r) {
  if (r.children.length > 0)
    for (let n = r.children.length - 1; n >= 0; n--)
      Se(r.children[n]);
  if (r.geometry && r.geometry.dispose(), r.material)
    if (r.material.length)
      for (let n = 0; n < r.material.length; ++n)
        r.material[n].map && r.material[n].map.dispose(), r.material[n].lightMap && r.material[n].lightMap.dispose(), r.material[n].bumpMap && r.material[n].bumpMap.dispose(), r.material[n].normalMap && r.material[n].normalMap.dispose(), r.material[n].specularMap && r.material[n].specularMap.dispose(), r.material[n].envMap && r.material[n].envMap.dispose(), r.material[n].dispose();
    else
      r.material.map && r.material.map.dispose(), r.material.lightMap && r.material.lightMap.dispose(), r.material.bumpMap && r.material.bumpMap.dispose(), r.material.normalMap && r.material.normalMap.dispose(), r.material.specularMap && r.material.specularMap.dispose(), r.material.envMap && r.material.envMap.dispose(), r.material.dispose();
  return r.removeFromParent(), !0;
}
function ue(r) {
  const n = T("scene"), t = T("parent", void 0);
  oe(() => {
    t ? t.add(r) : n.add(r);
  }), we(() => {
    t ? t.remove(r) : n.remove(r);
  });
}
function tn(r, n) {
  const t = T("camera"), e = T("canvas");
  T("scene");
  const s = (c) => {
    const l = new Vt(), d = bn(c);
    l.setFromCamera(d, t.value);
    const u = l.intersectObjects(r);
    u.length > 0 && n.onClick(u, d);
  };
  let i = !1, o = [];
  const a = (c) => {
    const l = new Vt(), d = bn(c);
    l.setFromCamera(d, t.value);
    const u = l.intersectObjects(r);
    u.length > 0 ? (o = u, i === !1 && n.onMouseEnter(u, d), i = !0, n.onMouseMove(u, d)) : (i && n.onMouseLeave(o, d), i = !1, o = []);
  };
  oe(() => {
    if (n.enableRaycasting) {
      if ((e == null ? void 0 : e.value) == null)
        return;
      const c = (() => null).toString();
      n.onClick.toString() !== c && (e == null || e.value.addEventListener("click", s)), (n.onMouseEnter.toString() !== c || n.onMouseMove.toString() !== c || n.onMouseLeave.toString() !== c) && (e == null || e.value.addEventListener("mousemove", a));
    }
  }), we(() => {
    if (n.enableRaycasting) {
      if ((e == null ? void 0 : e.value) == null)
        return;
      e == null || e.value.removeEventListener("click", s), e == null || e.value.removeEventListener("mousemove", a);
    }
  }), F(
    () => n.enableRaycasting,
    (c) => {
      c ? (e == null || e.value.addEventListener("click", s), e == null || e.value.addEventListener("mousemove", a)) : (e == null || e.value.removeEventListener("click", s), e == null || e.value.removeEventListener("mousemove", a));
    }
  );
}
function bn(r) {
  const n = new U(), t = r.currentTarget.getBoundingClientRect();
  return n.x = (r.clientX - t.left) / t.width * 2 - 1, n.y = -((r.clientY - t.top) / t.height) * 2 + 1, n;
}
var Re = {}, Ve = {}, At = {};
Object.defineProperty(At, "__esModule", {
  value: !0
});
At.callHandlers = so;
function En(r, n) {
  let t = null;
  try {
    t = r(n);
  } catch (e) {
    return Promise.reject(e);
  }
  return t && t.then ? t : Promise.resolve(t);
}
function so(r, n) {
  return !n || n.length === 0 ? new Promise((t) => {
  }) : n.length === 1 ? En(n[0], r) : Promise.all(n.map((t) => En(t, r)));
}
var ht = {};
Object.defineProperty(ht, "__esModule", {
  value: !0
});
ht.DEFAULT_PARAM = void 0;
const oo = "$_DEFAULT_$";
ht.DEFAULT_PARAM = oo;
Object.defineProperty(Ve, "__esModule", {
  value: !0
});
Ve.slot = ro;
Ve.connectSlot = co;
Ve.defaultSlotConfig = void 0;
var io = At, yt = ht;
const Ht = () => {
  throw new Error("Slot not connected");
}, os = {
  noBuffer: !1,
  autoReconnect: !0
};
Ve.defaultSlotConfig = os;
const ao = (r) => Object.assign(() => Ht(), {
  config: r,
  lazy: () => Ht,
  on: () => Ht,
  slotName: "Not connected"
}), et = "LOCAL_TRANSPORT", tt = (r, n) => Object.keys(n).reduce((t, e) => t.concat(n[e][r] || []), []), Mn = (r) => Object.keys(r).reduce((n, t) => {
  const e = r[t], s = Object.keys(e).filter((a) => (e[a] || []).length > 0), i = [...n, ...s];
  return [...new Set(i)];
}, []);
function ro(r = os) {
  return ao(r);
}
function co(r, n, t = {}) {
  const e = n.reduce((h, m, g) => ({
    ...h,
    [g]: {}
  }), {
    [et]: {}
  }), s = n.reduce((h, m, g) => ({
    ...h,
    [g]: {}
  }), {}), i = (h, m) => {
    let g = () => {
    };
    const b = new Promise((y) => g = y);
    s[h][m] = {
      registered: b,
      onRegister: g
    };
  }, o = [], a = [], c = (h) => o.forEach((m) => m(h)), l = (h) => a.forEach((m) => m(h));
  n.forEach((h, m) => {
    const g = (w = yt.DEFAULT_PARAM, M) => {
      if (!s[m])
        return;
      const A = e[m][w] || [];
      e[m][w] = A.concat(M), tt(w, e).length === 1 && c(w), s[m][w] || i(String(m), w), s[m][w].onRegister();
    }, b = (w = yt.DEFAULT_PARAM, M) => {
      const S = (e[m][w] || []).indexOf(M);
      S > -1 && e[m][w].splice(S, 1), tt(w, e).length === 0 && l(w), s[m] && i(String(m), w);
    }, y = () => {
      s[m] && Object.keys(s[m]).forEach((w) => {
        s[m][w].onRegister();
      }), delete s[m];
    };
    h.addRemoteHandlerRegistrationCallback(r, g), h.addRemoteHandlerUnregistrationCallback(r, b), h.addRemoteEventListChangedListener(r, y);
  });
  function d(h, m) {
    const g = arguments.length === 2, b = g ? m : h, y = g ? h : yt.DEFAULT_PARAM, w = () => {
      const A = tt(y, e);
      return (0, io.callHandlers)(b, A);
    };
    if (n.length === 0)
      return w();
    const M = [];
    if (t.autoReconnect && n.forEach((A) => {
      M.push(A.autoReconnect());
    }), t.noBuffer)
      return Promise.all(M).then(() => w());
    {
      n.forEach((S, O) => {
        s[O] && !s[O][y] && i(String(O), y);
      });
      const A = n.reduce((S, O, N) => {
        var D;
        return [...S, ...(D = s[N] && [s[N][y].registered]) !== null && D !== void 0 ? D : []];
      }, []);
      return Promise.all(A).then(() => w());
    }
  }
  function u(h, m) {
    return o.push(h), a.push(m), Mn(e).forEach(h), () => {
      Mn(e).forEach(m);
      const g = o.indexOf(h);
      g > -1 && o.splice(g, 1);
      const b = a.indexOf(m);
      b > -1 && a.splice(b, 1);
    };
  }
  function f(h, m) {
    let g = "", b = () => new Promise((w) => w());
    return typeof h == "string" ? (g = h, b = m || b) : (g = yt.DEFAULT_PARAM, b = h), n.forEach((w) => w.registerHandler(r, g, b)), e[et][g] = (e[et][g] || []).concat(b), tt(g, e).length === 1 && c(g), () => {
      n.forEach((S) => S.unregisterHandler(r, g, b));
      const M = (e[et][g] || []).indexOf(b);
      M !== -1 && e[et][g].splice(M, 1), tt(g, e).length === 0 && l(g);
    };
  }
  return Object.assign(d, {
    on: f,
    lazy: u,
    config: t,
    slotName: r
  });
}
var Rt = {}, Lt = {};
Object.defineProperty(Lt, "__esModule", {
  value: !0
});
Lt.Transport = void 0;
var lo = At;
let uo = 0;
const ho = () => `${uo++}`, fo = (r) => {
  throw new Error(`Should not happen: ${r}`);
}, jt = {
  TIMED_OUT: "TIMED_OUT",
  REMOTE_CONNECTION_CLOSED: "REMOTE_CONNECTION_CLOSED",
  CHANNEL_NOT_READY: "CHANNEL_NOT_READY"
};
class po {
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
          fo(e);
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
      this._channelReady = !1, this._unregisterAllRemoteHandlers(), this._rejectAllPendingRequests(new Error(`${jt.REMOTE_CONNECTION_CLOSED}`));
    }), this._channel.onError((e) => this._rejectAllPendingRequests(e));
  }
  _remoteIgnoredEventsReceived({
    ignoredEvents: n
  }) {
    Object.keys(this._remoteIgnoredEventsCallbacks).forEach((t) => {
      n.includes(t) && this._remoteIgnoredEventsCallbacks[t]();
    });
  }
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
    o && (0, lo.callHandlers)(t, o).then((a) => this._channel.send({
      type: "response",
      slotName: n,
      id: e,
      data: a,
      param: s
    })).catch((a) => this._channel.send({
      id: e,
      message: `${a}`,
      param: s,
      slotName: n,
      stack: a.stack || "",
      type: "error"
    }));
  }
  _responseReceived({
    slotName: n,
    data: t,
    id: e,
    param: s
  }) {
    const i = this._pendingRequests[n];
    !i || !i[s] || !i[s][e] || (i[s][e].resolve(t), delete i[s][e]);
  }
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
    const a = new Error(`${e} on ${n} with param ${i}`);
    a.stack = s || a.stack, this._pendingRequests[n][i][t].reject(a), delete this._pendingRequests[n][i][t];
  }
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
    const i = (o) => new Promise((a, c) => {
      if (!this._channelReady)
        return c(new Error(`${jt.CHANNEL_NOT_READY} on ${n}`));
      const l = ho();
      this._pendingRequests[n] = this._pendingRequests[n] || {}, this._pendingRequests[n][t] = this._pendingRequests[n][t] || {}, this._pendingRequests[n][t][l] = {
        resolve: a,
        reject: c
      }, this._channel.send({
        type: "request",
        id: l,
        slotName: n,
        param: t,
        data: o
      }), setTimeout(() => {
        const f = ((this._pendingRequests[n] || {})[t] || {})[l];
        if (f) {
          const h = new Error(`${jt.TIMED_OUT} on ${n} with param ${t}`);
          f.reject(h), delete this._pendingRequests[n][t][l];
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
  isDisconnected() {
    return !this._channelReady;
  }
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
Lt.Transport = po;
Object.defineProperty(Rt, "__esModule", {
  value: !0
});
Rt.combineEvents = yo;
Rt.createEventBus = _o;
var mo = Ve, go = Lt;
function yo(...r) {
  const n = r.reduce((e, s) => (e.push.apply(e, Object.keys(s)), e), []), t = [...new Set(n)];
  if (n.length > t.length)
    throw new Error("ts-event-bus: duplicate slots encountered in combineEvents.");
  return Object.assign({}, ...r);
}
function _o(r) {
  const n = (r.channels || []).map((e) => new go.Transport(e, r.ignoredEvents)), t = {};
  for (const e in r.events)
    r.events.hasOwnProperty(e) && (!r.ignoredEvents || r.ignoredEvents && !r.ignoredEvents.includes(e)) && (t[e] = (0, mo.connectSlot)(e, n, r.events[e].config));
  return t;
}
var wo = {}, ft = {};
Object.defineProperty(ft, "__esModule", {
  value: !0
});
ft.GenericChannel = void 0;
const bo = 5e3;
class Eo {
  constructor(n = bo) {
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
ft.GenericChannel = Eo;
var Pt = {}, Ct = {};
Object.defineProperty(Ct, "__esModule", {
  value: !0
});
Ct.isTransportMessage = Mo;
function Mo(r) {
  switch (r.type) {
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
var So = ft, To = Ct;
const qe = {
  getRandomId: () => [...Array(30)].map(() => Math.random().toString(36)[3]).join(""),
  str2byteArray: (r) => {
    const n = new Uint16Array(r.length);
    for (let t = 0, e = r.length; t < e; t++)
      n[t] = r.charCodeAt(t);
    return n;
  },
  convertUintArrayToString: (r, n) => {
    if (n === -1)
      return String.fromCharCode.apply(null, r);
    {
      let t = "";
      for (let e = 0; e < r.length; e += n)
        e + n > r.length ? t += String.fromCharCode.apply(null, r.subarray(e)) : t += String.fromCharCode.apply(null, r.subarray(e, e + n));
      return t;
    }
  },
  checkForChunkId: (r) => {
    if (!r.chunkId)
      throw new Error(`ChunkedMessage did not have a chunkId: ${JSON.stringify(r)}`);
  }
};
class vo extends So.GenericChannel {
  constructor(n) {
    super(n.timeout), this._chunkSize = void 0, this._maxStringAlloc = void 0, this._sender = void 0, this._buffer = {}, this._chunkSize = n.chunkSize, this._sender = n.sender, this._maxStringAlloc = n.maxStringAlloc || -1;
  }
  send(n) {
    const t = JSON.stringify(n);
    if (t.length <= this._chunkSize) {
      this._sender(n);
      return;
    }
    const e = qe.str2byteArray(t), s = qe.getRandomId();
    this._sender({
      type: "chunk_start",
      chunkId: s,
      size: t.length
    });
    const i = (o = 0) => {
      let a = e.slice(o, o + this._chunkSize);
      a.length && (this._sender({
        type: "chunk_data",
        chunkId: s,
        data: Array.from(a)
      }), i(o + this._chunkSize));
    };
    i(), this._sender({
      type: "chunk_end",
      chunkId: s
    });
  }
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
    if (qe.checkForChunkId(n), this._buffer[n.chunkId])
      throw new Error(`There was already an entry in the buffer for chunkId ${n.chunkId}`);
    this._buffer[n.chunkId] = {
      id: n.chunkId,
      chunks: [],
      size: n.size
    };
  }
  _receiveChunkData(n) {
    if (qe.checkForChunkId(n), !this._buffer[n.chunkId])
      throw new Error(`ChunkId ${n.chunkId} was not found in the buffer`);
    this._buffer[n.chunkId].chunks.push(n.data);
  }
  _mergeChunks(n) {
    if (qe.checkForChunkId(n), !this._buffer[n.chunkId])
      throw new Error(`ChunkId ${n.chunkId} was not found in the buffer`);
    const t = this._buffer[n.chunkId].chunks.reduce((i, o, a) => (o.forEach((c, l) => i.uintArray[i.currentIx + l] = c), i.currentIx += o.length, i), {
      uintArray: new Uint16Array(this._buffer[n.chunkId].size),
      currentIx: 0
    });
    let e;
    const s = qe.convertUintArrayToString(t.uintArray, this._maxStringAlloc);
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
Pt.ChunkedChannel = vo;
(function(r) {
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "slot", {
    enumerable: !0,
    get: function() {
      return n.slot;
    }
  }), Object.defineProperty(r, "Slot", {
    enumerable: !0,
    get: function() {
      return n.Slot;
    }
  }), Object.defineProperty(r, "EventDeclaration", {
    enumerable: !0,
    get: function() {
      return t.EventDeclaration;
    }
  }), Object.defineProperty(r, "combineEvents", {
    enumerable: !0,
    get: function() {
      return t.combineEvents;
    }
  }), Object.defineProperty(r, "createEventBus", {
    enumerable: !0,
    get: function() {
      return t.createEventBus;
    }
  }), Object.defineProperty(r, "Channel", {
    enumerable: !0,
    get: function() {
      return e.Channel;
    }
  }), Object.defineProperty(r, "GenericChannel", {
    enumerable: !0,
    get: function() {
      return s.GenericChannel;
    }
  }), Object.defineProperty(r, "ChunkedChannel", {
    enumerable: !0,
    get: function() {
      return i.ChunkedChannel;
    }
  }), Object.defineProperty(r, "TransportMessage", {
    enumerable: !0,
    get: function() {
      return o.TransportMessage;
    }
  }), Object.defineProperty(r, "DEFAULT_PARAM", {
    enumerable: !0,
    get: function() {
      return a.DEFAULT_PARAM;
    }
  });
  var n = Ve, t = Rt, e = wo, s = ft, i = Pt, o = Ct, a = ht;
})(Re);
const xo = {
  geometryChanged: Re.slot(),
  object3DChanged: Re.slot(),
  object3DTranslated: Re.slot(),
  sayHello: Re.slot(),
  getTime: Re.slot(),
  multiply: Re.slot(),
  ping: Re.slot()
}, k = Re.createEventBus({
  events: xo
}), Ao = /* @__PURE__ */ C({
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
  setup(r, { expose: n }) {
    const t = r;
    let e = He(null);
    const s = [], i = pe([]), o = pe([]);
    let a = He(null);
    const c = He([]), l = He([]), d = He();
    j("canvas", d);
    let u = !0, f = Date.now(), h = 1e3 / t.frameLimit;
    F(
      () => t.camera,
      (y) => m(y)
    );
    const m = (y) => {
      if (y) {
        const w = c.value.find((M) => M.name === y);
        w === void 0 && (a.value = null), a.value = w;
      } else
        a.value = c.value[0];
    };
    function g() {
      e.value !== null && (e.value.shadowMap.enabled = t.shadowMapEnabled, h = 1e3 / t.frameLimit, t.autoResize || e.value.setSize(t.width, t.height));
    }
    oe(() => {
      e.value = new ys({ canvas: d.value, antialias: t.antialias, alpha: t.alpha }), e.value.setSize(1, 1), g(), m(t.camera), new ResizeObserver((w) => {
        w.forEach((M) => {
          e.value && t.autoResize && e.value.setSize(M.contentRect.width, M.contentRect.height);
        });
      }).observe(d.value.parentElement), b();
    }), we(() => {
      for (let y of s)
        Se(y);
    });
    function b() {
      if (requestAnimationFrame(b), e.value === null)
        return;
      const y = Date.now(), w = y - f;
      if (!(h > -1 && w < h)) {
        if (f = y - w % h, t.onBeforeRender && t.onBeforeRender(), l.value.length > 0 && a.value)
          for (const M of l.value)
            M.value !== null && (M.value.object.uuid === a.value.uuid ? (M.value.enabled = u, M.value.update()) : M.value.enabled = !1);
        if (a.value && e)
          for (const M of s)
            e.value.render(M, a.value);
      }
    }
    return g(), F(
      () => t.shadowMapEnabled,
      () => g()
    ), F(
      () => t.frameLimit,
      () => g()
    ), F(
      () => t.width,
      () => g()
    ), F(
      () => t.height,
      () => g()
    ), j("addCamera", (y) => c.value.push(y)), j("addScene", (y) => s.push(y)), j("addGeometry", (y) => i.push(y)), j("getGeometry", (y) => i.find((w) => w.name === y)), j("addMaterial", (y) => o.push(y)), j("getMaterial", (y) => o.find((w) => w.name === y)), j("addControls", (y) => l.value.push(y)), j("enableAllControls", () => {
      u = !0;
    }), j("disableAllControls", () => {
      u = !1;
    }), j("camera", a), n({
      three: e,
      eventBus: k
    }), (y, w) => (hs(), fs(ps, null, [
      ms("canvas", {
        ref_key: "canvas",
        ref: d
      }, null, 512),
      K(y.$slots, "default")
    ], 64));
  }
}), Ro = /* @__PURE__ */ C({
  __name: "Scene",
  props: {
    background: { default: 16777215 }
  },
  setup(r, { expose: n }) {
    const t = r, e = new _s();
    j("scene", e), T("addScene")(e);
    function s(i) {
      i.background && (e.background = new V(i.background));
    }
    return s(t), F(
      () => t.background,
      () => s(t)
    ), n({ three: e }), (i, o) => K(i.$slots, "default");
  }
}), Lo = {
  name: "PerspectiveCamera"
}, Po = /* @__PURE__ */ C({
  ...Lo,
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
  setup(r, { expose: n }) {
    const t = r, e = new Un(75, window.innerWidth / window.innerHeight * 1e3, 0.1, 1e3);
    T("addCamera")(e);
    const s = T("canvas");
    F(s, () => {
      new ResizeObserver((a) => {
        a.forEach((c) => {
          t.autoResize && (e.aspect = c.contentRect.width / c.contentRect.height, e.updateProjectionMatrix());
        });
      }).observe(s.value);
    }), L(t, "position", e), L(t, "up", e), L(t, "lookAt", e);
    function i() {
      e.name = t.name, t.autoResize || (e.aspect = t.aspect), e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return i(), _(t, "name", i), _(t, "aspect", i), _(t, "near", i), _(t, "far", i), j("parentCamera", e), n({ three: e }), (o, a) => K(o.$slots, "default");
  }
}), Co = {
  name: "OrthographicCamera"
}, Io = /* @__PURE__ */ C({
  ...Co,
  props: {
    far: { default: 2e3 },
    lookAt: { default: () => [0, 0, 0] },
    name: { default: "" },
    near: { default: 0.1 },
    position: { default: () => [0, 0, 0] },
    up: { default: () => [0, 1, 0] }
  },
  setup(r, { expose: n }) {
    const t = r, e = new Bn(-10, 10, 10, -10, 0.1, 1e3);
    e.lookAt(0, 0, 0), e.updateProjectionMatrix(), T("addCamera")(e);
    const s = T("canvas");
    F(s, () => {
      new ResizeObserver((a) => {
        a.forEach((c) => {
          const l = c.contentRect.width / c.contentRect.height;
          e.left = e.bottom * l, e.right = e.top * l, e.updateProjectionMatrix();
        });
      }).observe(s.value);
    }), L(t, "position", e), L(t, "up", e), L(t, "lookAt", e);
    function i() {
      e.name = t.name, e.near = t.near, e.far = t.far, e.updateProjectionMatrix();
    }
    return i(), _(t, "name", i), _(t, "near", i), _(t, "far", i), j("parentCamera", e), n({ three: e }), (o, a) => K(o.$slots, "default");
  }
}), Sn = { type: "change" }, Nt = { type: "start" }, Tn = { type: "end" };
class Oo extends Xn {
  constructor(n, t) {
    super(), t === void 0 && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = n, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new v(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Le.ROTATE, MIDDLE: Le.DOLLY, RIGHT: Le.PAN }, this.touches = { ONE: Ze.ROTATE, TWO: Ze.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(p) {
      p.addEventListener("keydown", rn), this._domElementKeyEvents = p;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(Sn), e.update(), i = s.NONE;
    }, this.update = function() {
      const p = new v(), R = new le().setFromUnitVectors(n.up, new v(0, 1, 0)), J = R.clone().invert(), ne = new v(), ge = new le(), $e = 2 * Math.PI;
      return function() {
        const dn = e.object.position;
        p.copy(dn).sub(e.target), p.applyQuaternion(R), a.setFromVector3(p), e.autoRotate && i === s.NONE && Q(N()), e.enableDamping ? (a.theta += c.theta * e.dampingFactor, a.phi += c.phi * e.dampingFactor) : (a.theta += c.theta, a.phi += c.phi);
        let ve = e.minAzimuthAngle, xe = e.maxAzimuthAngle;
        return isFinite(ve) && isFinite(xe) && (ve < -Math.PI ? ve += $e : ve > Math.PI && (ve -= $e), xe < -Math.PI ? xe += $e : xe > Math.PI && (xe -= $e), ve <= xe ? a.theta = Math.max(ve, Math.min(xe, a.theta)) : a.theta = a.theta > (ve + xe) / 2 ? Math.max(ve, a.theta) : Math.min(xe, a.theta)), a.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(e.minDistance, Math.min(e.maxDistance, a.radius)), e.enableDamping === !0 ? e.target.addScaledVector(d, e.dampingFactor) : e.target.add(d), p.setFromSpherical(a), p.applyQuaternion(J), dn.copy(e.target).add(p), e.object.lookAt(e.target), e.enableDamping === !0 ? (c.theta *= 1 - e.dampingFactor, c.phi *= 1 - e.dampingFactor, d.multiplyScalar(1 - e.dampingFactor)) : (c.set(0, 0, 0), d.set(0, 0, 0)), l = 1, u || ne.distanceToSquared(e.object.position) > o || 8 * (1 - ge.dot(e.object.quaternion)) > o ? (e.dispatchEvent(Sn), ne.copy(e.object.position), ge.copy(e.object.quaternion), u = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", cn), e.domElement.removeEventListener("pointerdown", je), e.domElement.removeEventListener("pointercancel", on), e.domElement.removeEventListener("wheel", an), e.domElement.removeEventListener("pointermove", Ot), e.domElement.removeEventListener("pointerup", kt), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", rn);
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
    const o = 1e-6, a = new fn(), c = new fn();
    let l = 1;
    const d = new v();
    let u = !1;
    const f = new U(), h = new U(), m = new U(), g = new U(), b = new U(), y = new U(), w = new U(), M = new U(), A = new U(), S = [], O = {};
    function N() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function D() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function Q(p) {
      c.theta -= p;
    }
    function H(p) {
      c.phi -= p;
    }
    const $ = function() {
      const p = new v();
      return function(J, ne) {
        p.setFromMatrixColumn(ne, 0), p.multiplyScalar(-J), d.add(p);
      };
    }(), ae = function() {
      const p = new v();
      return function(J, ne) {
        e.screenSpacePanning === !0 ? p.setFromMatrixColumn(ne, 1) : (p.setFromMatrixColumn(ne, 0), p.crossVectors(e.object.up, p)), p.multiplyScalar(J), d.add(p);
      };
    }(), X = function() {
      const p = new v();
      return function(J, ne) {
        const ge = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const $e = e.object.position;
          p.copy($e).sub(e.target);
          let mt = p.length();
          mt *= Math.tan(e.object.fov / 2 * Math.PI / 180), $(2 * J * mt / ge.clientHeight, e.object.matrix), ae(2 * ne * mt / ge.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? ($(J * (e.object.right - e.object.left) / e.object.zoom / ge.clientWidth, e.object.matrix), ae(ne * (e.object.top - e.object.bottom) / e.object.zoom / ge.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function Z(p) {
      e.object.isPerspectiveCamera ? l /= p : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * p)), e.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function z(p) {
      e.object.isPerspectiveCamera ? l *= p : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / p)), e.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function de(p) {
      f.set(p.clientX, p.clientY);
    }
    function ee(p) {
      w.set(p.clientX, p.clientY);
    }
    function re(p) {
      g.set(p.clientX, p.clientY);
    }
    function W(p) {
      h.set(p.clientX, p.clientY), m.subVectors(h, f).multiplyScalar(e.rotateSpeed);
      const R = e.domElement;
      Q(2 * Math.PI * m.x / R.clientHeight), H(2 * Math.PI * m.y / R.clientHeight), f.copy(h), e.update();
    }
    function Ce(p) {
      M.set(p.clientX, p.clientY), A.subVectors(M, w), A.y > 0 ? Z(D()) : A.y < 0 && z(D()), w.copy(M), e.update();
    }
    function Ie(p) {
      b.set(p.clientX, p.clientY), y.subVectors(b, g).multiplyScalar(e.panSpeed), X(y.x, y.y), g.copy(b), e.update();
    }
    function Te(p) {
      p.deltaY < 0 ? z(D()) : p.deltaY > 0 && Z(D()), e.update();
    }
    function Qe(p) {
      let R = !1;
      switch (p.code) {
        case e.keys.UP:
          X(0, e.keyPanSpeed), R = !0;
          break;
        case e.keys.BOTTOM:
          X(0, -e.keyPanSpeed), R = !0;
          break;
        case e.keys.LEFT:
          X(e.keyPanSpeed, 0), R = !0;
          break;
        case e.keys.RIGHT:
          X(-e.keyPanSpeed, 0), R = !0;
          break;
      }
      R && (p.preventDefault(), e.update());
    }
    function Oe() {
      if (S.length === 1)
        f.set(S[0].pageX, S[0].pageY);
      else {
        const p = 0.5 * (S[0].pageX + S[1].pageX), R = 0.5 * (S[0].pageY + S[1].pageY);
        f.set(p, R);
      }
    }
    function We() {
      if (S.length === 1)
        g.set(S[0].pageX, S[0].pageY);
      else {
        const p = 0.5 * (S[0].pageX + S[1].pageX), R = 0.5 * (S[0].pageY + S[1].pageY);
        g.set(p, R);
      }
    }
    function pt() {
      const p = S[0].pageX - S[1].pageX, R = S[0].pageY - S[1].pageY, J = Math.sqrt(p * p + R * R);
      w.set(0, J);
    }
    function E() {
      e.enableZoom && pt(), e.enablePan && We();
    }
    function P() {
      e.enableZoom && pt(), e.enableRotate && Oe();
    }
    function q(p) {
      if (S.length == 1)
        h.set(p.pageX, p.pageY);
      else {
        const J = Dt(p), ne = 0.5 * (p.pageX + J.x), ge = 0.5 * (p.pageY + J.y);
        h.set(ne, ge);
      }
      m.subVectors(h, f).multiplyScalar(e.rotateSpeed);
      const R = e.domElement;
      Q(2 * Math.PI * m.x / R.clientHeight), H(2 * Math.PI * m.y / R.clientHeight), f.copy(h);
    }
    function te(p) {
      if (S.length === 1)
        b.set(p.pageX, p.pageY);
      else {
        const R = Dt(p), J = 0.5 * (p.pageX + R.x), ne = 0.5 * (p.pageY + R.y);
        b.set(J, ne);
      }
      y.subVectors(b, g).multiplyScalar(e.panSpeed), X(y.x, y.y), g.copy(b);
    }
    function he(p) {
      const R = Dt(p), J = p.pageX - R.x, ne = p.pageY - R.y, ge = Math.sqrt(J * J + ne * ne);
      M.set(0, ge), A.set(0, Math.pow(M.y / w.y, e.zoomSpeed)), Z(A.y), w.copy(M);
    }
    function be(p) {
      e.enableZoom && he(p), e.enablePan && te(p);
    }
    function sn(p) {
      e.enableZoom && he(p), e.enableRotate && q(p);
    }
    function je(p) {
      e.enabled !== !1 && (S.length === 0 && (e.domElement.setPointerCapture(p.pointerId), e.domElement.addEventListener("pointermove", Ot), e.domElement.addEventListener("pointerup", kt)), ds(p), p.pointerType === "touch" ? ls(p) : rs(p));
    }
    function Ot(p) {
      e.enabled !== !1 && (p.pointerType === "touch" ? us(p) : cs(p));
    }
    function kt(p) {
      ln(p), S.length === 0 && (e.domElement.releasePointerCapture(p.pointerId), e.domElement.removeEventListener("pointermove", Ot), e.domElement.removeEventListener("pointerup", kt)), e.dispatchEvent(Tn), i = s.NONE;
    }
    function on(p) {
      ln(p);
    }
    function rs(p) {
      let R;
      switch (p.button) {
        case 0:
          R = e.mouseButtons.LEFT;
          break;
        case 1:
          R = e.mouseButtons.MIDDLE;
          break;
        case 2:
          R = e.mouseButtons.RIGHT;
          break;
        default:
          R = -1;
      }
      switch (R) {
        case Le.DOLLY:
          if (e.enableZoom === !1)
            return;
          ee(p), i = s.DOLLY;
          break;
        case Le.ROTATE:
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
        case Le.PAN:
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
      if (e.enabled !== !1)
        switch (i) {
          case s.ROTATE:
            if (e.enableRotate === !1)
              return;
            W(p);
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
    function an(p) {
      e.enabled === !1 || e.enableZoom === !1 || i !== s.NONE || (p.preventDefault(), e.dispatchEvent(Nt), Te(p), e.dispatchEvent(Tn));
    }
    function rn(p) {
      e.enabled === !1 || e.enablePan === !1 || Qe(p);
    }
    function ls(p) {
      switch (un(p), S.length) {
        case 1:
          switch (e.touches.ONE) {
            case Ze.ROTATE:
              if (e.enableRotate === !1)
                return;
              Oe(), i = s.TOUCH_ROTATE;
              break;
            case Ze.PAN:
              if (e.enablePan === !1)
                return;
              We(), i = s.TOUCH_PAN;
              break;
            default:
              i = s.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case Ze.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              E(), i = s.TOUCH_DOLLY_PAN;
              break;
            case Ze.DOLLY_ROTATE:
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
      switch (un(p), i) {
        case s.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          q(p), e.update();
          break;
        case s.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          te(p), e.update();
          break;
        case s.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          be(p), e.update();
          break;
        case s.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          sn(p), e.update();
          break;
        default:
          i = s.NONE;
      }
    }
    function cn(p) {
      e.enabled !== !1 && p.preventDefault();
    }
    function ds(p) {
      S.push(p);
    }
    function ln(p) {
      delete O[p.pointerId];
      for (let R = 0; R < S.length; R++)
        if (S[R].pointerId == p.pointerId) {
          S.splice(R, 1);
          return;
        }
    }
    function un(p) {
      let R = O[p.pointerId];
      R === void 0 && (R = new U(), O[p.pointerId] = R), R.set(p.pageX, p.pageY);
    }
    function Dt(p) {
      const R = p.pointerId === S[0].pointerId ? S[1] : S[0];
      return O[R.pointerId];
    }
    e.domElement.addEventListener("contextmenu", cn), e.domElement.addEventListener("pointerdown", je), e.domElement.addEventListener("pointercancel", on), e.domElement.addEventListener("wheel", an, { passive: !1 }), this.update();
  }
}
const ko = {
  name: "OrbitControls",
  render: () => null
}, Do = /* @__PURE__ */ C({
  ...ko,
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
  setup(r, { expose: n }) {
    const t = r, e = He(null);
    T("addControls")(e);
    const s = T("parentCamera"), i = T("canvas");
    function o() {
      e.value != null && (e.value.enablePan = t.enablePan, e.value.enableRotate = t.enableRotate, e.value.enableZoom = t.enableZoom, e.value.minZoom = t.minZoom, e.value.maxZoom = t.maxZoom, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance, e.value.minPolarAngle = t.minPolarAngle, e.value.maxPolarAngle = t.maxPolarAngle, e.value.minAzimuthAngle = t.minAzimuthAngle, e.value.maxAzimuthAngle = t.maxAzimuthAngle);
    }
    let a = !1;
    const c = () => {
      i.value && (a || (e.value = new Oo(s, i.value), o(), L(t, "target", e.value), a = !0));
    };
    return F(i, () => {
      c();
    }), o(), _(t, "enablePan", o), _(t, "enableRotate", o), _(t, "enableZoom", o), _(t, "minZoom", o), _(t, "maxZoom", o), _(t, "minDistance", o), _(t, "maxDistance", o), _(t, "minPolarAngle", o), _(t, "maxPolarAngle", o), _(t, "minAzimuthAngle", o), _(t, "maxAzimuthAngle", o), n({ three: e }), { props: t, three: e, camera: s, canvas: i, applyProps: o, get boundCamera() {
      return a;
    }, set boundCamera(l) {
      a = l;
    }, tryBindCamera: c };
  }
}), Ft = { type: "change" }, Gt = { type: "start" }, zt = { type: "end" };
class Ho extends Xn {
  constructor(n, t) {
    super(), t === void 0 && console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
    const e = this, s = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };
    this.object = n, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.screen = { left: 0, top: 0, width: 0, height: 0 }, this.rotateSpeed = 1, this.zoomSpeed = 1.2, this.panSpeed = 0.3, this.noRotate = !1, this.noZoom = !1, this.noPan = !1, this.staticMoving = !1, this.dynamicDampingFactor = 0.2, this.minDistance = 0, this.maxDistance = 1 / 0, this.keys = ["KeyA", "KeyS", "KeyD"], this.mouseButtons = { LEFT: Le.ROTATE, MIDDLE: Le.DOLLY, RIGHT: Le.PAN }, this.target = new v();
    const i = 1e-6, o = new v();
    let a = 1, c = s.NONE, l = s.NONE, d = 0, u = 0, f = 0;
    const h = new v(), m = new U(), g = new U(), b = new v(), y = new U(), w = new U(), M = new U(), A = new U(), S = [], O = {};
    this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.up0 = this.object.up.clone(), this.zoom0 = this.object.zoom, this.handleResize = function() {
      const E = e.domElement.getBoundingClientRect(), P = e.domElement.ownerDocument.documentElement;
      e.screen.left = E.left + window.pageXOffset - P.clientLeft, e.screen.top = E.top + window.pageYOffset - P.clientTop, e.screen.width = E.width, e.screen.height = E.height;
    };
    const N = function() {
      const E = new U();
      return function(q, te) {
        return E.set(
          (q - e.screen.left) / e.screen.width,
          (te - e.screen.top) / e.screen.height
        ), E;
      };
    }(), D = function() {
      const E = new U();
      return function(q, te) {
        return E.set(
          (q - e.screen.width * 0.5 - e.screen.left) / (e.screen.width * 0.5),
          (e.screen.height + 2 * (e.screen.top - te)) / e.screen.width
        ), E;
      };
    }();
    this.rotateCamera = function() {
      const E = new v(), P = new le(), q = new v(), te = new v(), he = new v(), be = new v();
      return function() {
        be.set(g.x - m.x, g.y - m.y, 0);
        let je = be.length();
        je ? (h.copy(e.object.position).sub(e.target), q.copy(h).normalize(), te.copy(e.object.up).normalize(), he.crossVectors(te, q).normalize(), te.setLength(g.y - m.y), he.setLength(g.x - m.x), be.copy(te.add(he)), E.crossVectors(be, h).normalize(), je *= e.rotateSpeed, P.setFromAxisAngle(E, je), h.applyQuaternion(P), e.object.up.applyQuaternion(P), b.copy(E), f = je) : !e.staticMoving && f && (f *= Math.sqrt(1 - e.dynamicDampingFactor), h.copy(e.object.position).sub(e.target), P.setFromAxisAngle(b, f), h.applyQuaternion(P), e.object.up.applyQuaternion(P)), m.copy(g);
      };
    }(), this.zoomCamera = function() {
      let E;
      c === s.TOUCH_ZOOM_PAN ? (E = d / u, d = u, e.object.isPerspectiveCamera ? h.multiplyScalar(E) : e.object.isOrthographicCamera ? (e.object.zoom /= E, e.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")) : (E = 1 + (w.y - y.y) * e.zoomSpeed, E !== 1 && E > 0 && (e.object.isPerspectiveCamera ? h.multiplyScalar(E) : e.object.isOrthographicCamera ? (e.object.zoom /= E, e.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")), e.staticMoving ? y.copy(w) : y.y += (w.y - y.y) * this.dynamicDampingFactor);
    }, this.panCamera = function() {
      const E = new U(), P = new v(), q = new v();
      return function() {
        if (E.copy(A).sub(M), E.lengthSq()) {
          if (e.object.isOrthographicCamera) {
            const he = (e.object.right - e.object.left) / e.object.zoom / e.domElement.clientWidth, be = (e.object.top - e.object.bottom) / e.object.zoom / e.domElement.clientWidth;
            E.x *= he, E.y *= be;
          }
          E.multiplyScalar(h.length() * e.panSpeed), q.copy(h).cross(e.object.up).setLength(E.x), q.add(P.copy(e.object.up).setLength(E.y)), e.object.position.add(q), e.target.add(q), e.staticMoving ? M.copy(A) : M.add(E.subVectors(A, M).multiplyScalar(e.dynamicDampingFactor));
        }
      };
    }(), this.checkDistances = function() {
      (!e.noZoom || !e.noPan) && (h.lengthSq() > e.maxDistance * e.maxDistance && (e.object.position.addVectors(e.target, h.setLength(e.maxDistance)), y.copy(w)), h.lengthSq() < e.minDistance * e.minDistance && (e.object.position.addVectors(e.target, h.setLength(e.minDistance)), y.copy(w)));
    }, this.update = function() {
      h.subVectors(e.object.position, e.target), e.noRotate || e.rotateCamera(), e.noZoom || e.zoomCamera(), e.noPan || e.panCamera(), e.object.position.addVectors(e.target, h), e.object.isPerspectiveCamera ? (e.checkDistances(), e.object.lookAt(e.target), o.distanceToSquared(e.object.position) > i && (e.dispatchEvent(Ft), o.copy(e.object.position))) : e.object.isOrthographicCamera ? (e.object.lookAt(e.target), (o.distanceToSquared(e.object.position) > i || a !== e.object.zoom) && (e.dispatchEvent(Ft), o.copy(e.object.position), a = e.object.zoom)) : console.warn("THREE.TrackballControls: Unsupported camera type");
    }, this.reset = function() {
      c = s.NONE, l = s.NONE, e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.up.copy(e.up0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), h.subVectors(e.object.position, e.target), e.object.lookAt(e.target), e.dispatchEvent(Ft), o.copy(e.object.position), a = e.object.zoom;
    };
    function Q(E) {
      e.enabled !== !1 && (S.length === 0 && (e.domElement.setPointerCapture(E.pointerId), e.domElement.addEventListener("pointermove", H), e.domElement.addEventListener("pointerup", $)), Qe(E), E.pointerType === "touch" ? W(E) : z(E));
    }
    function H(E) {
      e.enabled !== !1 && (E.pointerType === "touch" ? Ce(E) : de(E));
    }
    function $(E) {
      e.enabled !== !1 && (E.pointerType === "touch" ? Ie(E) : ee(), Oe(E), S.length === 0 && (e.domElement.releasePointerCapture(E.pointerId), e.domElement.removeEventListener("pointermove", H), e.domElement.removeEventListener("pointerup", $)));
    }
    function ae(E) {
      Oe(E);
    }
    function X(E) {
      e.enabled !== !1 && (window.removeEventListener("keydown", X), l === s.NONE && (E.code === e.keys[s.ROTATE] && !e.noRotate ? l = s.ROTATE : E.code === e.keys[s.ZOOM] && !e.noZoom ? l = s.ZOOM : E.code === e.keys[s.PAN] && !e.noPan && (l = s.PAN)));
    }
    function Z() {
      e.enabled !== !1 && (l = s.NONE, window.addEventListener("keydown", X));
    }
    function z(E) {
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
      P === s.ROTATE && !e.noRotate ? (g.copy(D(E.pageX, E.pageY)), m.copy(g)) : P === s.ZOOM && !e.noZoom ? (y.copy(N(E.pageX, E.pageY)), w.copy(y)) : P === s.PAN && !e.noPan && (M.copy(N(E.pageX, E.pageY)), A.copy(M)), e.dispatchEvent(Gt);
    }
    function de(E) {
      const P = l !== s.NONE ? l : c;
      P === s.ROTATE && !e.noRotate ? (m.copy(g), g.copy(D(E.pageX, E.pageY))) : P === s.ZOOM && !e.noZoom ? w.copy(N(E.pageX, E.pageY)) : P === s.PAN && !e.noPan && A.copy(N(E.pageX, E.pageY));
    }
    function ee() {
      c = s.NONE, e.dispatchEvent(zt);
    }
    function re(E) {
      if (e.enabled !== !1 && e.noZoom !== !0) {
        switch (E.preventDefault(), E.deltaMode) {
          case 2:
            y.y -= E.deltaY * 0.025;
            break;
          case 1:
            y.y -= E.deltaY * 0.01;
            break;
          default:
            y.y -= E.deltaY * 25e-5;
            break;
        }
        e.dispatchEvent(Gt), e.dispatchEvent(zt);
      }
    }
    function W(E) {
      switch (We(E), S.length) {
        case 1:
          c = s.TOUCH_ROTATE, g.copy(D(S[0].pageX, S[0].pageY)), m.copy(g);
          break;
        default:
          c = s.TOUCH_ZOOM_PAN;
          const P = S[0].pageX - S[1].pageX, q = S[0].pageY - S[1].pageY;
          u = d = Math.sqrt(P * P + q * q);
          const te = (S[0].pageX + S[1].pageX) / 2, he = (S[0].pageY + S[1].pageY) / 2;
          M.copy(N(te, he)), A.copy(M);
          break;
      }
      e.dispatchEvent(Gt);
    }
    function Ce(E) {
      switch (We(E), S.length) {
        case 1:
          m.copy(g), g.copy(D(E.pageX, E.pageY));
          break;
        default:
          const P = pt(E), q = E.pageX - P.x, te = E.pageY - P.y;
          u = Math.sqrt(q * q + te * te);
          const he = (E.pageX + P.x) / 2, be = (E.pageY + P.y) / 2;
          A.copy(N(he, be));
          break;
      }
    }
    function Ie(E) {
      switch (S.length) {
        case 0:
          c = s.NONE;
          break;
        case 1:
          c = s.TOUCH_ROTATE, g.copy(D(E.pageX, E.pageY)), m.copy(g);
          break;
        case 2:
          c = s.TOUCH_ZOOM_PAN, g.copy(D(E.pageX - m.x, E.pageY - m.y)), m.copy(g);
          break;
      }
      e.dispatchEvent(zt);
    }
    function Te(E) {
      e.enabled !== !1 && E.preventDefault();
    }
    function Qe(E) {
      S.push(E);
    }
    function Oe(E) {
      delete O[E.pointerId];
      for (let P = 0; P < S.length; P++)
        if (S[P].pointerId == E.pointerId) {
          S.splice(P, 1);
          return;
        }
    }
    function We(E) {
      let P = O[E.pointerId];
      P === void 0 && (P = new U(), O[E.pointerId] = P), P.set(E.pageX, E.pageY);
    }
    function pt(E) {
      const P = E.pointerId === S[0].pointerId ? S[1] : S[0];
      return O[P.pointerId];
    }
    this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", Te), e.domElement.removeEventListener("pointerdown", Q), e.domElement.removeEventListener("pointercancel", ae), e.domElement.removeEventListener("wheel", re), e.domElement.removeEventListener("pointermove", H), e.domElement.removeEventListener("pointerup", $), window.removeEventListener("keydown", X), window.removeEventListener("keyup", Z);
    }, this.domElement.addEventListener("contextmenu", Te), this.domElement.addEventListener("pointerdown", Q), this.domElement.addEventListener("pointercancel", ae), this.domElement.addEventListener("wheel", re, { passive: !1 }), window.addEventListener("keydown", X), window.addEventListener("keyup", Z), this.handleResize(), this.update();
  }
}
const jo = {
  name: "TrackballControls",
  render: () => null
}, No = /* @__PURE__ */ C({
  ...jo,
  props: {
    minDistance: { default: 0 },
    maxDistance: { default: 1 / 0 },
    panSpeed: { default: 0.3 },
    rotateSpeed: { default: 1 },
    zoomSpeed: { default: 1.2 }
  },
  setup(r, { expose: n }) {
    const t = r, e = He(null);
    T("addControls")(e);
    const s = T("parentCamera"), i = T("canvas");
    function o() {
      e.value != null && (e.value.rotateSpeed = t.rotateSpeed, e.value.zoomSpeed = t.zoomSpeed, e.value.panSpeed = t.panSpeed, e.value.minDistance = t.minDistance, e.value.maxDistance = t.maxDistance);
    }
    let a = !1;
    const c = () => {
      if (!i.value || a)
        return;
      e.value = new Ho(s, i.value), new ResizeObserver((d) => {
        d.forEach((u) => {
          var f;
          (f = e.value) == null || f.handleResize();
        });
      }).observe(i.value), o(), a = !0;
    };
    return F(i, () => {
      c();
    }), o(), _(t, "panSpeed", o), _(t, "rotateSpeed", o), _(t, "zoomSpeed", o), _(t, "minDistance", o), _(t, "maxDistance", o), n({ three: e }), { props: t, three: e, camera: s, canvas: i, applyProps: o, get boundCamera() {
      return a;
    }, set boundCamera(l) {
      a = l;
    }, tryBindCamera: c };
  }
}), Ne = new Vt(), ce = new v(), ke = new v(), Y = new le(), vn = {
  X: new v(1, 0, 0),
  Y: new v(0, 1, 0),
  Z: new v(0, 0, 1)
}, Ut = { type: "change" }, xn = { type: "mouseDown" }, An = { type: "mouseUp", mode: null }, Rn = { type: "objectChange" };
class Fo extends St {
  constructor(n, t) {
    super(), t === void 0 && (console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'), t = document), this.isTransformControls = !0, this.visible = !1, this.domElement = t, this.domElement.style.touchAction = "none";
    const e = new Yo();
    this._gizmo = e, this.add(e);
    const s = new Vo();
    this._plane = s, this.add(s);
    const i = this;
    function o(w, M) {
      let A = M;
      Object.defineProperty(i, w, {
        get: function() {
          return A !== void 0 ? A : M;
        },
        set: function(S) {
          A !== S && (A = S, s[w] = S, e[w] = S, i.dispatchEvent({ type: w + "-changed", value: S }), i.dispatchEvent(Ut));
        }
      }), i[w] = M, s[w] = M, e[w] = M;
    }
    o("camera", n), o("object", void 0), o("enabled", !0), o("axis", null), o("mode", "translate"), o("translationSnap", null), o("rotationSnap", null), o("scaleSnap", null), o("space", "world"), o("size", 1), o("dragging", !1), o("showX", !0), o("showY", !0), o("showZ", !0);
    const a = new v(), c = new v(), l = new le(), d = new le(), u = new v(), f = new le(), h = new v(), m = new v(), g = new v(), b = 0, y = new v();
    o("worldPosition", a), o("worldPositionStart", c), o("worldQuaternion", l), o("worldQuaternionStart", d), o("cameraPosition", u), o("cameraQuaternion", f), o("pointStart", h), o("pointEnd", m), o("rotationAxis", g), o("rotationAngle", b), o("eye", y), this._offset = new v(), this._startNorm = new v(), this._endNorm = new v(), this._cameraScale = new v(), this._parentPosition = new v(), this._parentQuaternion = new le(), this._parentQuaternionInv = new le(), this._parentScale = new v(), this._worldScaleStart = new v(), this._worldQuaternionInv = new le(), this._worldScale = new v(), this._positionStart = new v(), this._quaternionStart = new le(), this._scaleStart = new v(), this._getPointer = Go.bind(this), this._onPointerDown = Uo.bind(this), this._onPointerHover = zo.bind(this), this._onPointerMove = Bo.bind(this), this._onPointerUp = Xo.bind(this), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointermove", this._onPointerHover), this.domElement.addEventListener("pointerup", this._onPointerUp);
  }
  updateMatrixWorld() {
    this.object !== void 0 && (this.object.updateMatrixWorld(), this.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : this.object.parent.matrixWorld.decompose(this._parentPosition, this._parentQuaternion, this._parentScale), this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this._worldScale), this._parentQuaternionInv.copy(this._parentQuaternion).invert(), this._worldQuaternionInv.copy(this.worldQuaternion).invert()), this.camera.updateMatrixWorld(), this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this._cameraScale), this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(), super.updateMatrixWorld(this);
  }
  pointerHover(n) {
    if (this.object === void 0 || this.dragging === !0)
      return;
    Ne.setFromCamera(n, this.camera);
    const t = Bt(this._gizmo.picker[this.mode], Ne);
    t ? this.axis = t.object.name : this.axis = null;
  }
  pointerDown(n) {
    if (!(this.object === void 0 || this.dragging === !0 || n.button !== 0) && this.axis !== null) {
      Ne.setFromCamera(n, this.camera);
      const t = Bt(this._plane, Ne, !0);
      t && (this.object.updateMatrixWorld(), this.object.parent.updateMatrixWorld(), this._positionStart.copy(this.object.position), this._quaternionStart.copy(this.object.quaternion), this._scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart), this.pointStart.copy(t.point).sub(this.worldPositionStart)), this.dragging = !0, xn.mode = this.mode, this.dispatchEvent(xn);
    }
  }
  pointerMove(n) {
    const t = this.axis, e = this.mode, s = this.object;
    let i = this.space;
    if (e === "scale" ? i = "local" : (t === "E" || t === "XYZE" || t === "XYZ") && (i = "world"), s === void 0 || t === null || this.dragging === !1 || n.button !== -1)
      return;
    Ne.setFromCamera(n, this.camera);
    const o = Bt(this._plane, Ne, !0);
    if (o) {
      if (this.pointEnd.copy(o.point).sub(this.worldPositionStart), e === "translate")
        this._offset.copy(this.pointEnd).sub(this.pointStart), i === "local" && t !== "XYZ" && this._offset.applyQuaternion(this._worldQuaternionInv), t.indexOf("X") === -1 && (this._offset.x = 0), t.indexOf("Y") === -1 && (this._offset.y = 0), t.indexOf("Z") === -1 && (this._offset.z = 0), i === "local" && t !== "XYZ" ? this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale) : this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale), s.position.copy(this._offset).add(this._positionStart), this.translationSnap && (i === "local" && (s.position.applyQuaternion(Y.copy(this._quaternionStart).invert()), t.search("X") !== -1 && (s.position.x = Math.round(s.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (s.position.y = Math.round(s.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (s.position.z = Math.round(s.position.z / this.translationSnap) * this.translationSnap), s.position.applyQuaternion(this._quaternionStart)), i === "world" && (s.parent && s.position.add(ce.setFromMatrixPosition(s.parent.matrixWorld)), t.search("X") !== -1 && (s.position.x = Math.round(s.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (s.position.y = Math.round(s.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (s.position.z = Math.round(s.position.z / this.translationSnap) * this.translationSnap), s.parent && s.position.sub(ce.setFromMatrixPosition(s.parent.matrixWorld))));
      else if (e === "scale") {
        if (t.search("XYZ") !== -1) {
          let a = this.pointEnd.length() / this.pointStart.length();
          this.pointEnd.dot(this.pointStart) < 0 && (a *= -1), ke.set(a, a, a);
        } else
          ce.copy(this.pointStart), ke.copy(this.pointEnd), ce.applyQuaternion(this._worldQuaternionInv), ke.applyQuaternion(this._worldQuaternionInv), ke.divide(ce), t.search("X") === -1 && (ke.x = 1), t.search("Y") === -1 && (ke.y = 1), t.search("Z") === -1 && (ke.z = 1);
        s.scale.copy(this._scaleStart).multiply(ke), this.scaleSnap && (t.search("X") !== -1 && (s.scale.x = Math.round(s.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Y") !== -1 && (s.scale.y = Math.round(s.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Z") !== -1 && (s.scale.z = Math.round(s.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
      } else if (e === "rotate") {
        this._offset.copy(this.pointEnd).sub(this.pointStart);
        const a = 20 / this.worldPosition.distanceTo(ce.setFromMatrixPosition(this.camera.matrixWorld));
        t === "E" ? (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this._startNorm.copy(this.pointStart).normalize(), this._endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1) : t === "XYZE" ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(), this.rotationAngle = this._offset.dot(ce.copy(this.rotationAxis).cross(this.eye)) * a) : (t === "X" || t === "Y" || t === "Z") && (this.rotationAxis.copy(vn[t]), ce.copy(vn[t]), i === "local" && ce.applyQuaternion(this.worldQuaternion), this.rotationAngle = this._offset.dot(ce.cross(this.eye).normalize()) * a), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), i === "local" && t !== "E" && t !== "XYZE" ? (s.quaternion.copy(this._quaternionStart), s.quaternion.multiply(Y.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv), s.quaternion.copy(Y.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), s.quaternion.multiply(this._quaternionStart).normalize());
      }
      this.dispatchEvent(Ut), this.dispatchEvent(Rn);
    }
  }
  pointerUp(n) {
    n.button === 0 && (this.dragging && this.axis !== null && (An.mode = this.mode, this.dispatchEvent(An)), this.dragging = !1, this.axis = null);
  }
  dispose() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerHover), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.traverse(function(n) {
      n.geometry && n.geometry.dispose(), n.material && n.material.dispose();
    });
  }
  attach(n) {
    return this.object = n, this.visible = !0, this;
  }
  detach() {
    return this.object = void 0, this.visible = !1, this.axis = null, this;
  }
  reset() {
    this.enabled && this.dragging && (this.object.position.copy(this._positionStart), this.object.quaternion.copy(this._quaternionStart), this.object.scale.copy(this._scaleStart), this.dispatchEvent(Ut), this.dispatchEvent(Rn), this.pointStart.copy(this.pointEnd));
  }
  getRaycaster() {
    return Ne;
  }
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
  update() {
    console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.");
  }
}
function Go(r) {
  if (this.domElement.ownerDocument.pointerLockElement)
    return {
      x: 0,
      y: 0,
      button: r.button
    };
  {
    const n = this.domElement.getBoundingClientRect();
    return {
      x: (r.clientX - n.left) / n.width * 2 - 1,
      y: -(r.clientY - n.top) / n.height * 2 + 1,
      button: r.button
    };
  }
}
function zo(r) {
  if (this.enabled)
    switch (r.pointerType) {
      case "mouse":
      case "pen":
        this.pointerHover(this._getPointer(r));
        break;
    }
}
function Uo(r) {
  this.enabled && (document.pointerLockElement || this.domElement.setPointerCapture(r.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.pointerHover(this._getPointer(r)), this.pointerDown(this._getPointer(r)));
}
function Bo(r) {
  this.enabled && this.pointerMove(this._getPointer(r));
}
function Xo(r) {
  this.enabled && (this.domElement.releasePointerCapture(r.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.pointerUp(this._getPointer(r)));
}
function Bt(r, n, t) {
  const e = n.intersectObject(r, !0);
  for (let s = 0; s < e.length; s++)
    if (e[s].object.visible || t)
      return e[s];
  return !1;
}
const _t = new ws(), G = new v(0, 1, 0), Ln = new v(0, 0, 0), Pn = new vt(), wt = new le(), Mt = new le(), Ee = new v(), Cn = new vt(), at = new v(1, 0, 0), Fe = new v(0, 1, 0), rt = new v(0, 0, 1), bt = new v(), nt = new v(), st = new v();
class Yo extends St {
  constructor() {
    super(), this.isTransformControlsGizmo = !0, this.type = "TransformControlsGizmo";
    const n = new _e({
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      toneMapped: !1,
      transparent: !0
    }), t = new Pe({
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
    const a = n.clone();
    a.color.setHex(255);
    const c = n.clone();
    c.color.setHex(16711680), c.opacity = 0.5;
    const l = n.clone();
    l.color.setHex(65280), l.opacity = 0.5;
    const d = n.clone();
    d.color.setHex(255), d.opacity = 0.5;
    const u = n.clone();
    u.opacity = 0.25;
    const f = n.clone();
    f.color.setHex(16776960), f.opacity = 0.25, n.clone().color.setHex(16776960);
    const m = n.clone();
    m.color.setHex(7895160);
    const g = new ie(0, 0.04, 0.1, 12);
    g.translate(0, 0.05, 0);
    const b = new se(0.08, 0.08, 0.08);
    b.translate(0, 0.04, 0);
    const y = new B();
    y.setAttribute("position", new ye([0, 0, 0, 1, 0, 0], 3));
    const w = new ie(75e-4, 75e-4, 0.5, 3);
    w.translate(0, 0.25, 0);
    function M(z, de) {
      const ee = new Je(z, 75e-4, 3, 64, de * Math.PI * 2);
      return ee.rotateY(Math.PI / 2), ee.rotateX(Math.PI / 2), ee;
    }
    function A() {
      const z = new B();
      return z.setAttribute("position", new ye([0, 0, 0, 1, 1, 1], 3)), z;
    }
    const S = {
      X: [
        [new x(g, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
        [new x(g, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
        [new x(w, i), [0, 0, 0], [0, 0, -Math.PI / 2]]
      ],
      Y: [
        [new x(g, o), [0, 0.5, 0]],
        [new x(g, o), [0, -0.5, 0], [Math.PI, 0, 0]],
        [new x(w, o)]
      ],
      Z: [
        [new x(g, a), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
        [new x(g, a), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
        [new x(w, a), null, [Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new x(new gt(0.1, 0), u.clone()), [0, 0, 0]]
      ],
      XY: [
        [new x(new se(0.15, 0.15, 0.01), d.clone()), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new x(new se(0.15, 0.15, 0.01), c.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new x(new se(0.15, 0.15, 0.01), l.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ]
    }, O = {
      X: [
        [new x(new ie(0.2, 0, 0.6, 4), e), [0.3, 0, 0], [0, 0, -Math.PI / 2]],
        [new x(new ie(0.2, 0, 0.6, 4), e), [-0.3, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new x(new ie(0.2, 0, 0.6, 4), e), [0, 0.3, 0]],
        [new x(new ie(0.2, 0, 0.6, 4), e), [0, -0.3, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new x(new ie(0.2, 0, 0.6, 4), e), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
        [new x(new ie(0.2, 0, 0.6, 4), e), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new x(new gt(0.2, 0), e)]
      ],
      XY: [
        [new x(new se(0.2, 0.2, 0.01), e), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new x(new se(0.2, 0.2, 0.01), e), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new x(new se(0.2, 0.2, 0.01), e), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ]
    }, N = {
      START: [
        [new x(new gt(0.01, 2), s), null, null, null, "helper"]
      ],
      END: [
        [new x(new gt(0.01, 2), s), null, null, null, "helper"]
      ],
      DELTA: [
        [new Me(A(), s), null, null, null, "helper"]
      ],
      X: [
        [new Me(y, s.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ],
      Y: [
        [new Me(y, s.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]
      ],
      Z: [
        [new Me(y, s.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]
      ]
    }, D = {
      XYZE: [
        [new x(M(0.5, 1), m), null, [0, Math.PI / 2, 0]]
      ],
      X: [
        [new x(M(0.5, 0.5), i)]
      ],
      Y: [
        [new x(M(0.5, 0.5), o), null, [0, 0, -Math.PI / 2]]
      ],
      Z: [
        [new x(M(0.5, 0.5), a), null, [0, Math.PI / 2, 0]]
      ],
      E: [
        [new x(M(0.75, 1), f), null, [0, Math.PI / 2, 0]]
      ]
    }, Q = {
      AXIS: [
        [new Me(y, s.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ]
    }, H = {
      XYZE: [
        [new x(new Yn(0.25, 10, 8), e)]
      ],
      X: [
        [new x(new Je(0.5, 0.1, 4, 24), e), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]
      ],
      Y: [
        [new x(new Je(0.5, 0.1, 4, 24), e), [0, 0, 0], [Math.PI / 2, 0, 0]]
      ],
      Z: [
        [new x(new Je(0.5, 0.1, 4, 24), e), [0, 0, 0], [0, 0, -Math.PI / 2]]
      ],
      E: [
        [new x(new Je(0.75, 0.1, 2, 24), e)]
      ]
    }, $ = {
      X: [
        [new x(b, i), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
        [new x(w, i), [0, 0, 0], [0, 0, -Math.PI / 2]],
        [new x(b, i), [-0.5, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new x(b, o), [0, 0.5, 0]],
        [new x(w, o)],
        [new x(b, o), [0, -0.5, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new x(b, a), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
        [new x(w, a), [0, 0, 0], [Math.PI / 2, 0, 0]],
        [new x(b, a), [0, 0, -0.5], [-Math.PI / 2, 0, 0]]
      ],
      XY: [
        [new x(new se(0.15, 0.15, 0.01), d), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new x(new se(0.15, 0.15, 0.01), c), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new x(new se(0.15, 0.15, 0.01), l), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new x(new se(0.1, 0.1, 0.1), u.clone())]
      ]
    }, ae = {
      X: [
        [new x(new ie(0.2, 0, 0.6, 4), e), [0.3, 0, 0], [0, 0, -Math.PI / 2]],
        [new x(new ie(0.2, 0, 0.6, 4), e), [-0.3, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new x(new ie(0.2, 0, 0.6, 4), e), [0, 0.3, 0]],
        [new x(new ie(0.2, 0, 0.6, 4), e), [0, -0.3, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new x(new ie(0.2, 0, 0.6, 4), e), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
        [new x(new ie(0.2, 0, 0.6, 4), e), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]
      ],
      XY: [
        [new x(new se(0.2, 0.2, 0.01), e), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new x(new se(0.2, 0.2, 0.01), e), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new x(new se(0.2, 0.2, 0.01), e), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new x(new se(0.2, 0.2, 0.2), e), [0, 0, 0]]
      ]
    }, X = {
      X: [
        [new Me(y, s.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ],
      Y: [
        [new Me(y, s.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]
      ],
      Z: [
        [new Me(y, s.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]
      ]
    };
    function Z(z) {
      const de = new St();
      for (const ee in z)
        for (let re = z[ee].length; re--; ) {
          const W = z[ee][re][0].clone(), Ce = z[ee][re][1], Ie = z[ee][re][2], Te = z[ee][re][3], Qe = z[ee][re][4];
          W.name = ee, W.tag = Qe, Ce && W.position.set(Ce[0], Ce[1], Ce[2]), Ie && W.rotation.set(Ie[0], Ie[1], Ie[2]), Te && W.scale.set(Te[0], Te[1], Te[2]), W.updateMatrix();
          const Oe = W.geometry.clone();
          Oe.applyMatrix4(W.matrix), W.geometry = Oe, W.renderOrder = 1 / 0, W.position.set(0, 0, 0), W.rotation.set(0, 0, 0), W.scale.set(1, 1, 1), de.add(W);
        }
      return de;
    }
    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = Z(S)), this.add(this.gizmo.rotate = Z(D)), this.add(this.gizmo.scale = Z($)), this.add(this.picker.translate = Z(O)), this.add(this.picker.rotate = Z(H)), this.add(this.picker.scale = Z(ae)), this.add(this.helper.translate = Z(N)), this.add(this.helper.rotate = Z(Q)), this.add(this.helper.scale = Z(X)), this.picker.translate.visible = !1, this.picker.rotate.visible = !1, this.picker.scale.visible = !1;
  }
  updateMatrixWorld(n) {
    const e = (this.mode === "scale" ? "local" : this.space) === "local" ? this.worldQuaternion : Mt;
    this.gizmo.translate.visible = this.mode === "translate", this.gizmo.rotate.visible = this.mode === "rotate", this.gizmo.scale.visible = this.mode === "scale", this.helper.translate.visible = this.mode === "translate", this.helper.rotate.visible = this.mode === "rotate", this.helper.scale.visible = this.mode === "scale";
    let s = [];
    s = s.concat(this.picker[this.mode].children), s = s.concat(this.gizmo[this.mode].children), s = s.concat(this.helper[this.mode].children);
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      o.visible = !0, o.rotation.set(0, 0, 0), o.position.copy(this.worldPosition);
      let a;
      if (this.camera.isOrthographicCamera ? a = (this.camera.top - this.camera.bottom) / this.camera.zoom : a = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), o.scale.set(1, 1, 1).multiplyScalar(a * this.size / 4), o.tag === "helper") {
        o.visible = !1, o.name === "AXIS" ? (o.position.copy(this.worldPositionStart), o.visible = !!this.axis, this.axis === "X" && (Y.setFromEuler(_t.set(0, 0, 0)), o.quaternion.copy(e).multiply(Y), Math.abs(G.copy(at).applyQuaternion(e).dot(this.eye)) > 0.9 && (o.visible = !1)), this.axis === "Y" && (Y.setFromEuler(_t.set(0, 0, Math.PI / 2)), o.quaternion.copy(e).multiply(Y), Math.abs(G.copy(Fe).applyQuaternion(e).dot(this.eye)) > 0.9 && (o.visible = !1)), this.axis === "Z" && (Y.setFromEuler(_t.set(0, Math.PI / 2, 0)), o.quaternion.copy(e).multiply(Y), Math.abs(G.copy(rt).applyQuaternion(e).dot(this.eye)) > 0.9 && (o.visible = !1)), this.axis === "XYZE" && (Y.setFromEuler(_t.set(0, Math.PI / 2, 0)), G.copy(this.rotationAxis), o.quaternion.setFromRotationMatrix(Pn.lookAt(Ln, G, Fe)), o.quaternion.multiply(Y), o.visible = this.dragging), this.axis === "E" && (o.visible = !1)) : o.name === "START" ? (o.position.copy(this.worldPositionStart), o.visible = this.dragging) : o.name === "END" ? (o.position.copy(this.worldPosition), o.visible = this.dragging) : o.name === "DELTA" ? (o.position.copy(this.worldPositionStart), o.quaternion.copy(this.worldQuaternionStart), ce.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), ce.applyQuaternion(this.worldQuaternionStart.clone().invert()), o.scale.copy(ce), o.visible = this.dragging) : (o.quaternion.copy(e), this.dragging ? o.position.copy(this.worldPositionStart) : o.position.copy(this.worldPosition), this.axis && (o.visible = this.axis.search(o.name) !== -1));
        continue;
      }
      o.quaternion.copy(e), this.mode === "translate" || this.mode === "scale" ? (o.name === "X" && Math.abs(G.copy(at).applyQuaternion(e).dot(this.eye)) > 0.99 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "Y" && Math.abs(G.copy(Fe).applyQuaternion(e).dot(this.eye)) > 0.99 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "Z" && Math.abs(G.copy(rt).applyQuaternion(e).dot(this.eye)) > 0.99 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "XY" && Math.abs(G.copy(rt).applyQuaternion(e).dot(this.eye)) < 0.2 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "YZ" && Math.abs(G.copy(at).applyQuaternion(e).dot(this.eye)) < 0.2 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1), o.name === "XZ" && Math.abs(G.copy(Fe).applyQuaternion(e).dot(this.eye)) < 0.2 && (o.scale.set(1e-10, 1e-10, 1e-10), o.visible = !1)) : this.mode === "rotate" && (wt.copy(e), G.copy(this.eye).applyQuaternion(Y.copy(e).invert()), o.name.search("E") !== -1 && o.quaternion.setFromRotationMatrix(Pn.lookAt(this.eye, Ln, Fe)), o.name === "X" && (Y.setFromAxisAngle(at, Math.atan2(-G.y, G.z)), Y.multiplyQuaternions(wt, Y), o.quaternion.copy(Y)), o.name === "Y" && (Y.setFromAxisAngle(Fe, Math.atan2(G.x, G.z)), Y.multiplyQuaternions(wt, Y), o.quaternion.copy(Y)), o.name === "Z" && (Y.setFromAxisAngle(rt, Math.atan2(G.y, G.x)), Y.multiplyQuaternions(wt, Y), o.quaternion.copy(Y))), o.visible = o.visible && (o.name.indexOf("X") === -1 || this.showX), o.visible = o.visible && (o.name.indexOf("Y") === -1 || this.showY), o.visible = o.visible && (o.name.indexOf("Z") === -1 || this.showZ), o.visible = o.visible && (o.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ), o.material._color = o.material._color || o.material.color.clone(), o.material._opacity = o.material._opacity || o.material.opacity, o.material.color.copy(o.material._color), o.material.opacity = o.material._opacity, this.enabled && this.axis && (o.name === this.axis || this.axis.split("").some(function(c) {
        return o.name === c;
      })) && (o.material.color.setHex(16776960), o.material.opacity = 1);
    }
    super.updateMatrixWorld(n);
  }
}
class Vo extends x {
  constructor() {
    super(
      new Vn(1e5, 1e5, 2, 2),
      new _e({ visible: !1, wireframe: !0, side: $n, transparent: !0, opacity: 0.1, toneMapped: !1 })
    ), this.isTransformControlsPlane = !0, this.type = "TransformControlsPlane";
  }
  updateMatrixWorld(n) {
    let t = this.space;
    switch (this.position.copy(this.worldPosition), this.mode === "scale" && (t = "local"), bt.copy(at).applyQuaternion(t === "local" ? this.worldQuaternion : Mt), nt.copy(Fe).applyQuaternion(t === "local" ? this.worldQuaternion : Mt), st.copy(rt).applyQuaternion(t === "local" ? this.worldQuaternion : Mt), G.copy(nt), this.mode) {
      case "translate":
      case "scale":
        switch (this.axis) {
          case "X":
            G.copy(this.eye).cross(bt), Ee.copy(bt).cross(G);
            break;
          case "Y":
            G.copy(this.eye).cross(nt), Ee.copy(nt).cross(G);
            break;
          case "Z":
            G.copy(this.eye).cross(st), Ee.copy(st).cross(G);
            break;
          case "XY":
            Ee.copy(st);
            break;
          case "YZ":
            Ee.copy(bt);
            break;
          case "XZ":
            G.copy(st), Ee.copy(nt);
            break;
          case "XYZ":
          case "E":
            Ee.set(0, 0, 0);
            break;
        }
        break;
      case "rotate":
      default:
        Ee.set(0, 0, 0);
    }
    Ee.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (Cn.lookAt(ce.set(0, 0, 0), Ee, G), this.quaternion.setFromRotationMatrix(Cn)), super.updateMatrixWorld(n);
  }
}
const $o = {
  name: "TransformControls",
  render: () => null
}, Zo = /* @__PURE__ */ C({
  ...$o,
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
  setup(r, { expose: n }) {
    const t = r, e = gs(null), s = T("scene"), i = T("mesh", null), o = T("parent", void 0), a = T("camera"), c = T("canvas"), l = T("enableAllControls"), d = T("disableAllControls");
    function u() {
      e.value != null && (e.value.mode = t.mode, e.value.size = t.size, e.value.showX = t.showX, e.value.showY = t.showY, e.value.showZ = t.showZ, e.value.translationSnap = t.translationSnap, e.value.rotationSnap = t.rotationSnap);
    }
    let f = !1;
    const h = () => {
      !c.value && !a.value || f || (e.value = new Fo(a.value, c.value), L(t, "position", e.value), i ? e.value.attach(i) : o && e.value.attach(o), e.value.addEventListener("dragging-changed", function(m) {
        m.value ? d() : l();
      }), s.add(e.value), u(), f = !0);
    };
    return F(
      c,
      () => {
        h();
      },
      {
        immediate: !0
      }
    ), u(), _(t, "mode", u), _(t, "size", u), _(t, "showX", u), _(t, "showY", u), _(t, "showZ", u), _(t, "rotationSnap", u), _(t, "translationSnap", u), we(() => {
      s.remove(e.value), Se(e.value);
    }), n({ three: e }), { props: t, three: e, scene: s, mesh: i, parent: o, camera: a, canvas: c, enableAllControls: l, disableAllControls: d, applyProps: u, get boundCamera() {
      return f;
    }, set boundCamera(m) {
      f = m;
    }, tryBindCamera: h };
  }
}), qo = /* @__PURE__ */ C({
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
  setup(r, { expose: n }) {
    const t = r, e = new Ue();
    return ue(e), L(t, "position", e), L(t, "rotation", e), L(t, "scale", e), tn(e.children, t), j("parent", e), n({ three: e }), (s, i) => K(s.$slots, "default");
  }
}), Ko = /* @__PURE__ */ C({
  __name: "InstancedMesh",
  props: {
    castShadow: { type: Boolean, default: !1 },
    count: null,
    geometry: { default: null },
    material: { default: null },
    receiveShadow: { type: Boolean, default: !1 }
  },
  setup(r, { expose: n }) {
    const t = r, e = T("scene"), s = new B(), i = new _e(), o = new bs(s, i, t.count);
    o.castShadow = !0, o.receiveShadow = !0, ue(o);
    function a() {
      o.castShadow = t.castShadow, o.receiveShadow = t.receiveShadow;
    }
    a(), _(t, "castShadow", a), _(t, "receiveShadow", a);
    const c = T("getGeometry"), l = T("getMaterial");
    return oe(() => {
      if (t.geometry) {
        const d = c(t.geometry);
        o.geometry = d;
      }
      if (t.material) {
        const d = l(t.material);
        o.material = d;
      }
    }), we(() => {
      e.remove(o), Se(o);
    }), j("mesh", o), n({ three: o }), (d, u) => K(d.$slots, "default");
  }
}), Qo = /* @__PURE__ */ C({
  __name: "Line",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: n }) {
    const t = r, e = T("scene"), s = new B(), i = new Pe({ color: "black" }), o = new Me(s, i);
    return ue(o), L(t, "position", o), L(t, "rotation", o), L(t, "scale", o), we(() => {
      e.remove(o), Se(o);
    }), j("mesh", o), n({ three: o }), (a, c) => K(a.$slots, "default");
  }
}), Wo = /* @__PURE__ */ C({
  __name: "LineLoop",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: n }) {
    const t = r, e = T("scene"), s = new B(), i = new Pe({ color: "black" }), o = new Zn(s, i);
    return ue(o), L(t, "position", o), L(t, "rotation", o), L(t, "scale", o), we(() => {
      e.remove(o), Se(o);
    }), j("mesh", o), n({ three: o }), (a, c) => K(a.$slots, "default");
  }
}), Jo = /* @__PURE__ */ C({
  __name: "LineSegments",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: n }) {
    const t = r, e = T("scene"), s = new B(), i = new Pe({ color: "black" }), o = new Tt(s, i);
    return ue(o), L(t, "position", o), L(t, "rotation", o), L(t, "scale", o), we(() => {
      e.remove(o), Se(o);
    }), j("mesh", o), n({ three: o }), (a, c) => K(a.$slots, "default");
  }
}), ei = /* @__PURE__ */ C({
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
  setup(r, { expose: n }) {
    const t = r, e = T("scene"), s = new B(), i = new _e(), o = new x(s, i);
    o.castShadow = !0, o.receiveShadow = !0, ue(o), L(t, "position", o), L(t, "rotation", o), L(t, "scale", o), _(t, "position", () => {
      k.object3DTranslated(t.name, o);
    }), _(t, "rotation", () => {
      k.object3DTranslated(t.name, o);
    }), _(t, "scale", () => {
      k.object3DTranslated(t.name, o);
    });
    function a() {
      o.name = t.name, o.castShadow = t.castShadow, o.receiveShadow = t.receiveShadow;
    }
    a(), _(t, "castShadow", a), _(t, "receiveShadow", a);
    const c = T("getGeometry"), l = T("getMaterial");
    return oe(() => {
      if (t.geometry) {
        const d = c(t.geometry);
        o.geometry = d;
      }
      if (t.material) {
        const d = l(t.material);
        o.material = d;
      }
      k.object3DChanged(t.name, o);
    }), we(() => {
      e.remove(o), Se(o);
    }), j("mesh", o), n({ three: o }), (d, u) => K(d.$slots, "default");
  }
}), ti = /* @__PURE__ */ C({
  __name: "Points",
  props: {
    name: { default: "" },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: n }) {
    const t = r, e = T("scene"), s = new B(), i = new ze({ color: "red", sizeAttenuation: !1, size: 2 }), o = new ct(s, i);
    ue(o), L(t, "position", o), L(t, "rotation", o), L(t, "scale", o), _(t, "position", () => {
      k.object3DTranslated(t.name, o);
    }), _(t, "rotation", () => {
      k.object3DTranslated(t.name, o);
    }), _(t, "scale", () => {
      k.object3DTranslated(t.name, o);
    });
    function a() {
      o.name = t.name;
    }
    return a(), oe(() => {
      k.object3DChanged(t.name, o);
    }), we(() => {
      e.remove(o), Se(o);
    }), j("mesh", o), n({ three: o }), (c, l) => K(c.$slots, "default");
  }
});
class ni extends qn {
  constructor(n) {
    super(n), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new ri(t);
    }), this.register(function(t) {
      return new pi(t);
    }), this.register(function(t) {
      return new mi(t);
    }), this.register(function(t) {
      return new li(t);
    }), this.register(function(t) {
      return new ui(t);
    }), this.register(function(t) {
      return new di(t);
    }), this.register(function(t) {
      return new hi(t);
    }), this.register(function(t) {
      return new ai(t);
    }), this.register(function(t) {
      return new fi(t);
    }), this.register(function(t) {
      return new ci(t);
    }), this.register(function(t) {
      return new oi(t);
    }), this.register(function(t) {
      return new gi(t);
    });
  }
  load(n, t, e, s) {
    const i = this;
    let o;
    this.resourcePath !== "" ? o = this.resourcePath : this.path !== "" ? o = this.path : o = Be.extractUrlBase(n), this.manager.itemStart(n);
    const a = function(l) {
      s ? s(l) : console.error(l), i.manager.itemError(n), i.manager.itemEnd(n);
    }, c = new Jt(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(n, function(l) {
      try {
        i.parse(l, o, function(d) {
          t(d), i.manager.itemEnd(n);
        }, a);
      } catch (d) {
        a(d);
      }
    }, e, a);
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
    const o = {}, a = {};
    if (typeof n == "string")
      i = n;
    else if (Be.decodeText(new Uint8Array(n, 0, 4)) === is) {
      try {
        o[I.KHR_BINARY_GLTF] = new yi(n);
      } catch (u) {
        s && s(u);
        return;
      }
      i = o[I.KHR_BINARY_GLTF].content;
    } else
      i = Be.decodeText(new Uint8Array(n));
    const c = JSON.parse(i);
    if (c.asset === void 0 || c.asset.version[0] < 2) {
      s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new Pi(c, {
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
      a[u.name] = u, o[u.name] = !0;
    }
    if (c.extensionsUsed)
      for (let d = 0; d < c.extensionsUsed.length; ++d) {
        const u = c.extensionsUsed[d], f = c.extensionsRequired || [];
        switch (u) {
          case I.KHR_MATERIALS_UNLIT:
            o[u] = new ii();
            break;
          case I.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            o[u] = new bi();
            break;
          case I.KHR_DRACO_MESH_COMPRESSION:
            o[u] = new _i(c, this.dracoLoader);
            break;
          case I.KHR_TEXTURE_TRANSFORM:
            o[u] = new wi();
            break;
          case I.KHR_MESH_QUANTIZATION:
            o[u] = new Ei();
            break;
          default:
            f.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(o), l.setPlugins(a), l.parse(e, s);
  }
  parseAsync(n, t) {
    const e = this;
    return new Promise(function(s, i) {
      e.parse(n, t, s, i);
    });
  }
}
function si() {
  let r = {};
  return {
    get: function(n) {
      return r[n];
    },
    add: function(n, t) {
      r[n] = t;
    },
    remove: function(n) {
      delete r[n];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const I = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
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
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
};
class oi {
  constructor(n) {
    this.parser = n, this.name = I.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
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
    const d = new V(16777215);
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
        l = new Es(d), l.distance = u, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + n), s = Promise.resolve(l), t.cache.add(e, s), s;
  }
  createNodeAttachment(n) {
    const t = this, e = this.parser, i = e.json.nodes[n], a = (i.extensions && i.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(c) {
      return e._getNodeRef(t.cache, a, c);
    });
  }
}
class ii {
  constructor() {
    this.name = I.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return _e;
  }
  extendParams(n, t, e) {
    const s = [];
    n.color = new V(1, 1, 1), n.opacity = 1;
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const o = i.baseColorFactor;
        n.color.fromArray(o), n.opacity = o[3];
      }
      i.baseColorTexture !== void 0 && s.push(e.assignTexture(n, "map", i.baseColorTexture, Xe));
    }
    return Promise.all(s);
  }
}
class ai {
  constructor(n) {
    this.parser = n, this.name = I.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(n, t) {
    const s = this.parser.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class ri {
  constructor(n) {
    this.parser = n, this.name = I.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Ye;
  }
  extendMaterialParams(n, t) {
    const e = this.parser, s = e.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && i.push(e.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && i.push(e.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (i.push(e.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new U(a, a);
    }
    return Promise.all(i);
  }
}
class ci {
  constructor(n) {
    this.parser = n, this.name = I.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Ye;
  }
  extendMaterialParams(n, t) {
    const e = this.parser, s = e.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && i.push(e.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && i.push(e.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(i);
  }
}
class li {
  constructor(n) {
    this.parser = n, this.name = I.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Ye;
  }
  extendMaterialParams(n, t) {
    const e = this.parser, s = e.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [];
    t.sheenColor = new V(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = s.extensions[this.name];
    return o.sheenColorFactor !== void 0 && t.sheenColor.fromArray(o.sheenColorFactor), o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && i.push(e.assignTexture(t, "sheenColorMap", o.sheenColorTexture, Xe)), o.sheenRoughnessTexture !== void 0 && i.push(e.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(i);
  }
}
class ui {
  constructor(n) {
    this.parser = n, this.name = I.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Ye;
  }
  extendMaterialParams(n, t) {
    const e = this.parser, s = e.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && i.push(e.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(i);
  }
}
class di {
  constructor(n) {
    this.parser = n, this.name = I.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Ye;
  }
  extendMaterialParams(n, t) {
    const e = this.parser, s = e.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && i.push(e.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new V(a[0], a[1], a[2]), Promise.all(i);
  }
}
class hi {
  constructor(n) {
    this.parser = n, this.name = I.KHR_MATERIALS_IOR;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Ye;
  }
  extendMaterialParams(n, t) {
    const s = this.parser.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = s.extensions[this.name];
    return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
  }
}
class fi {
  constructor(n) {
    this.parser = n, this.name = I.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(n) {
    const e = this.parser.json.materials[n];
    return !e.extensions || !e.extensions[this.name] ? null : Ye;
  }
  extendMaterialParams(n, t) {
    const e = this.parser, s = e.json.materials[n];
    if (!s.extensions || !s.extensions[this.name])
      return Promise.resolve();
    const i = [], o = s.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && i.push(e.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new V(a[0], a[1], a[2]), o.specularColorTexture !== void 0 && i.push(e.assignTexture(t, "specularColorMap", o.specularColorTexture, Xe)), Promise.all(i);
  }
}
class pi {
  constructor(n) {
    this.parser = n, this.name = I.KHR_TEXTURE_BASISU;
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
class mi {
  constructor(n) {
    this.parser = n, this.name = I.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(n) {
    const t = this.name, e = this.parser, s = e.json, i = s.textures[n];
    if (!i.extensions || !i.extensions[t])
      return null;
    const o = i.extensions[t], a = s.images[o.source];
    let c = e.textureLoader;
    if (a.uri) {
      const l = e.options.manager.getHandler(a.uri);
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
class gi {
  constructor(n) {
    this.name = I.EXT_MESHOPT_COMPRESSION, this.parser = n;
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
      return Promise.all([i, o.ready]).then(function(a) {
        const c = s.byteOffset || 0, l = s.byteLength || 0, d = s.count, u = s.byteStride, f = new ArrayBuffer(d * u), h = new Uint8Array(a[0], c, l);
        return o.decodeGltfBuffer(new Uint8Array(f), d, u, h, s.mode, s.filter), f;
      });
    } else
      return null;
  }
}
const is = "glTF", ot = 12, In = { JSON: 1313821514, BIN: 5130562 };
class yi {
  constructor(n) {
    this.name = I.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(n, 0, ot);
    if (this.header = {
      magic: Be.decodeText(new Uint8Array(n.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== is)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const e = this.header.length - ot, s = new DataView(n, ot);
    let i = 0;
    for (; i < e; ) {
      const o = s.getUint32(i, !0);
      i += 4;
      const a = s.getUint32(i, !0);
      if (i += 4, a === In.JSON) {
        const c = new Uint8Array(n, ot + i, o);
        this.content = Be.decodeText(c);
      } else if (a === In.BIN) {
        const c = ot + i;
        this.body = n.slice(c, c + o);
      }
      i += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class _i {
  constructor(n, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = I.KHR_DRACO_MESH_COMPRESSION, this.json = n, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(n, t) {
    const e = this.json, s = this.dracoLoader, i = n.extensions[this.name].bufferView, o = n.extensions[this.name].attributes, a = {}, c = {}, l = {};
    for (const d in o) {
      const u = Qt[d] || d.toLowerCase();
      a[u] = o[d];
    }
    for (const d in n.attributes) {
      const u = Qt[d] || d.toLowerCase();
      if (o[d] !== void 0) {
        const f = e.accessors[n.attributes[d]], h = dt[f.componentType];
        l[u] = h, c[u] = f.normalized === !0;
      }
    }
    return t.getDependency("bufferView", i).then(function(d) {
      return new Promise(function(u) {
        s.decodeDracoFile(d, function(f) {
          for (const h in f.attributes) {
            const m = f.attributes[h], g = c[h];
            g !== void 0 && (m.normalized = g);
          }
          u(f);
        }, a, l);
      });
    });
  }
}
class wi {
  constructor() {
    this.name = I.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(n, t) {
    return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (n = n.clone(), t.offset !== void 0 && n.offset.fromArray(t.offset), t.rotation !== void 0 && (n.rotation = t.rotation), t.scale !== void 0 && n.repeat.fromArray(t.scale), n.needsUpdate = !0), n;
  }
}
class Kt extends en {
  constructor(n) {
    super(), this.isGLTFSpecularGlossinessMaterial = !0;
    const t = [
      "#ifdef USE_SPECULARMAP",
      "	uniform sampler2D specularMap;",
      "#endif"
    ].join(`
`), e = [
      "#ifdef USE_GLOSSINESSMAP",
      "	uniform sampler2D glossinessMap;",
      "#endif"
    ].join(`
`), s = [
      "vec3 specularFactor = specular;",
      "#ifdef USE_SPECULARMAP",
      "	vec4 texelSpecular = texture2D( specularMap, vUv );",
      "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	specularFactor *= texelSpecular.rgb;",
      "#endif"
    ].join(`
`), i = [
      "float glossinessFactor = glossiness;",
      "#ifdef USE_GLOSSINESSMAP",
      "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );",
      "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	glossinessFactor *= texelGlossiness.a;",
      "#endif"
    ].join(`
`), o = [
      "PhysicalMaterial material;",
      "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
      "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
      "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
      "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
      "material.roughness += geometryRoughness;",
      "material.roughness = min( material.roughness, 1.0 );",
      "material.specularColor = specularFactor;"
    ].join(`
`), a = {
      specular: { value: new V().setHex(16777215) },
      glossiness: { value: 1 },
      specularMap: { value: null },
      glossinessMap: { value: null }
    };
    this._extraUniforms = a, this.onBeforeCompile = function(c) {
      for (const l in a)
        c.uniforms[l] = a[l];
      c.fragmentShader = c.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", e).replace("#include <roughnessmap_fragment>", s).replace("#include <metalnessmap_fragment>", i).replace("#include <lights_physical_fragment>", o);
    }, Object.defineProperties(this, {
      specular: {
        get: function() {
          return a.specular.value;
        },
        set: function(c) {
          a.specular.value = c;
        }
      },
      specularMap: {
        get: function() {
          return a.specularMap.value;
        },
        set: function(c) {
          a.specularMap.value = c, c ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP;
        }
      },
      glossiness: {
        get: function() {
          return a.glossiness.value;
        },
        set: function(c) {
          a.glossiness.value = c;
        }
      },
      glossinessMap: {
        get: function() {
          return a.glossinessMap.value;
        },
        set: function(c) {
          a.glossinessMap.value = c, c ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV);
        }
      }
    }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(n);
  }
  copy(n) {
    return super.copy(n), this.specularMap = n.specularMap, this.specular.copy(n.specular), this.glossinessMap = n.glossinessMap, this.glossiness = n.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this;
  }
}
class bi {
  constructor() {
    this.name = I.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = [
      "color",
      "map",
      "lightMap",
      "lightMapIntensity",
      "aoMap",
      "aoMapIntensity",
      "emissive",
      "emissiveIntensity",
      "emissiveMap",
      "bumpMap",
      "bumpScale",
      "normalMap",
      "normalMapType",
      "displacementMap",
      "displacementScale",
      "displacementBias",
      "specularMap",
      "specular",
      "glossinessMap",
      "glossiness",
      "alphaMap",
      "envMap",
      "envMapIntensity"
    ];
  }
  getMaterialType() {
    return Kt;
  }
  extendParams(n, t, e) {
    const s = t.extensions[this.name];
    n.color = new V(1, 1, 1), n.opacity = 1;
    const i = [];
    if (Array.isArray(s.diffuseFactor)) {
      const o = s.diffuseFactor;
      n.color.fromArray(o), n.opacity = o[3];
    }
    if (s.diffuseTexture !== void 0 && i.push(e.assignTexture(n, "map", s.diffuseTexture, Xe)), n.emissive = new V(0, 0, 0), n.glossiness = s.glossinessFactor !== void 0 ? s.glossinessFactor : 1, n.specular = new V(1, 1, 1), Array.isArray(s.specularFactor) && n.specular.fromArray(s.specularFactor), s.specularGlossinessTexture !== void 0) {
      const o = s.specularGlossinessTexture;
      i.push(e.assignTexture(n, "glossinessMap", o)), i.push(e.assignTexture(n, "specularMap", o, Xe));
    }
    return Promise.all(i);
  }
  createMaterial(n) {
    const t = new Kt(n);
    return t.fog = !0, t.color = n.color, t.map = n.map === void 0 ? null : n.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = n.aoMap === void 0 ? null : n.aoMap, t.aoMapIntensity = 1, t.emissive = n.emissive, t.emissiveIntensity = n.emissiveIntensity === void 0 ? 1 : n.emissiveIntensity, t.emissiveMap = n.emissiveMap === void 0 ? null : n.emissiveMap, t.bumpMap = n.bumpMap === void 0 ? null : n.bumpMap, t.bumpScale = 1, t.normalMap = n.normalMap === void 0 ? null : n.normalMap, t.normalMapType = Ms, n.normalScale && (t.normalScale = n.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = n.specularMap === void 0 ? null : n.specularMap, t.specular = n.specular, t.glossinessMap = n.glossinessMap === void 0 ? null : n.glossinessMap, t.glossiness = n.glossiness, t.alphaMap = null, t.envMap = n.envMap === void 0 ? null : n.envMap, t.envMapIntensity = 1, t;
  }
}
class Ei {
  constructor() {
    this.name = I.KHR_MESH_QUANTIZATION;
  }
}
class nn extends Ss {
  constructor(n, t, e, s) {
    super(n, t, e, s);
  }
  copySampleValue_(n) {
    const t = this.resultBuffer, e = this.sampleValues, s = this.valueSize, i = n * s * 3 + s;
    for (let o = 0; o !== s; o++)
      t[o] = e[i + o];
    return t;
  }
}
nn.prototype.interpolate_ = function(r, n, t, e) {
  const s = this.resultBuffer, i = this.sampleValues, o = this.valueSize, a = o * 2, c = o * 3, l = e - n, d = (t - n) / l, u = d * d, f = u * d, h = r * c, m = h - c, g = -2 * f + 3 * u, b = f - u, y = 1 - g, w = b - u + d;
  for (let M = 0; M !== o; M++) {
    const A = i[m + M + o], S = i[m + M + a] * l, O = i[h + M + o], N = i[h + M] * l;
    s[M] = y * A + w * S + g * O + b * N;
  }
  return s;
};
const Mi = new le();
class Si extends nn {
  interpolate_(n, t, e, s) {
    const i = super.interpolate_(n, t, e, s);
    return Mi.fromArray(i).normalize().toArray(i), i;
  }
}
const Ae = {
  FLOAT: 5126,
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
}, dt = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, On = {
  9728: Os,
  9729: Jn,
  9984: ks,
  9985: Ds,
  9986: Hs,
  9987: es
}, kn = {
  33071: Zt,
  33648: js,
  10497: $t
}, Dn = {
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
  LINEAR: ts,
  STEP: Ns
}, Xt = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function vi(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new en({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: xt
  })), r.DefaultMaterial;
}
function it(r, n, t) {
  for (const e in t.extensions)
    r[e] === void 0 && (n.userData.gltfExtensions = n.userData.gltfExtensions || {}, n.userData.gltfExtensions[e] = t.extensions[e]);
}
function Ge(r, n) {
  n.extras !== void 0 && (typeof n.extras == "object" ? Object.assign(r.userData, n.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + n.extras));
}
function xi(r, n, t) {
  let e = !1, s = !1, i = !1;
  for (let l = 0, d = n.length; l < d; l++) {
    const u = n[l];
    if (u.POSITION !== void 0 && (e = !0), u.NORMAL !== void 0 && (s = !0), u.COLOR_0 !== void 0 && (i = !0), e && s && i)
      break;
  }
  if (!e && !s && !i)
    return Promise.resolve(r);
  const o = [], a = [], c = [];
  for (let l = 0, d = n.length; l < d; l++) {
    const u = n[l];
    if (e) {
      const f = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position;
      o.push(f);
    }
    if (s) {
      const f = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal;
      a.push(f);
    }
    if (i) {
      const f = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color;
      c.push(f);
    }
  }
  return Promise.all([
    Promise.all(o),
    Promise.all(a),
    Promise.all(c)
  ]).then(function(l) {
    const d = l[0], u = l[1], f = l[2];
    return e && (r.morphAttributes.position = d), s && (r.morphAttributes.normal = u), i && (r.morphAttributes.color = f), r.morphTargetsRelative = !0, r;
  });
}
function Ai(r, n) {
  if (r.updateMorphTargets(), n.weights !== void 0)
    for (let t = 0, e = n.weights.length; t < e; t++)
      r.morphTargetInfluences[t] = n.weights[t];
  if (n.extras && Array.isArray(n.extras.targetNames)) {
    const t = n.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let e = 0, s = t.length; e < s; e++)
        r.morphTargetDictionary[t[e]] = e;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Ri(r) {
  const n = r.extensions && r.extensions[I.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return n ? t = "draco:" + n.bufferView + ":" + n.indices + ":" + Hn(n.attributes) : t = r.indices + ":" + Hn(r.attributes) + ":" + r.mode, t;
}
function Hn(r) {
  let n = "";
  const t = Object.keys(r).sort();
  for (let e = 0, s = t.length; e < s; e++)
    n += t[e] + ":" + r[t[e]] + ";";
  return n;
}
function Wt(r) {
  switch (r) {
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
function Li(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
class Pi {
  constructor(n = {}, t = {}) {
    this.json = n, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new si(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    const e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, s = navigator.userAgent.indexOf("Firefox") > -1, i = s ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
    typeof createImageBitmap > "u" || e || s && i < 98 ? this.textureLoader = new Wn(this.options.manager) : this.textureLoader = new Ts(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Jt(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
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
      const a = {
        scene: o[0][s.scene || 0],
        scenes: o[0],
        animations: o[1],
        cameras: o[2],
        asset: s.asset,
        parser: e,
        userData: {}
      };
      it(i, a, s), Ge(a, s), Promise.all(e._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(a);
      })).then(function() {
        n(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const n = this.json.nodes || [], t = this.json.skins || [], e = this.json.meshes || [];
    for (let s = 0, i = t.length; s < i; s++) {
      const o = t[s].joints;
      for (let a = 0, c = o.length; a < c; a++)
        n[o[a]].isBone = !0;
    }
    for (let s = 0, i = n.length; s < i; s++) {
      const o = n[s];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (e[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  _addNodeRef(n, t) {
    t !== void 0 && (n.refs[t] === void 0 && (n.refs[t] = n.uses[t] = 0), n.refs[t]++);
  }
  _getNodeRef(n, t, e) {
    if (n.refs[t] <= 1)
      return e;
    const s = e.clone(), i = (o, a) => {
      const c = this.associations.get(o);
      c != null && this.associations.set(a, c);
      for (const [l, d] of o.children.entries())
        i(d, a.children[l]);
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
  getDependency(n, t) {
    const e = n + ":" + t;
    let s = this.cache.get(e);
    if (!s) {
      switch (n) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this.loadNode(t);
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
          throw new Error("Unknown type: " + n);
      }
      this.cache.add(e, s);
    }
    return s;
  }
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
  loadBuffer(n) {
    const t = this.json.buffers[n], e = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && n === 0)
      return Promise.resolve(this.extensions[I.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function(i, o) {
      e.load(Be.resolveURL(t.uri, s.path), i, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(n) {
    const t = this.json.bufferViews[n];
    return this.getDependency("buffer", t.buffer).then(function(e) {
      const s = t.byteLength || 0, i = t.byteOffset || 0;
      return e.slice(i, i + s);
    });
  }
  loadAccessor(n) {
    const t = this, e = this.json, s = this.json.accessors[n];
    if (s.bufferView === void 0 && s.sparse === void 0)
      return Promise.resolve(null);
    const i = [];
    return s.bufferView !== void 0 ? i.push(this.getDependency("bufferView", s.bufferView)) : i.push(null), s.sparse !== void 0 && (i.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(i).then(function(o) {
      const a = o[0], c = Dn[s.type], l = dt[s.componentType], d = l.BYTES_PER_ELEMENT, u = d * c, f = s.byteOffset || 0, h = s.bufferView !== void 0 ? e.bufferViews[s.bufferView].byteStride : void 0, m = s.normalized === !0;
      let g, b;
      if (h && h !== u) {
        const y = Math.floor(f / h), w = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + y + ":" + s.count;
        let M = t.cache.get(w);
        M || (g = new l(a, y * h, s.count * h / d), M = new vs(g, h / d), t.cache.add(w, M)), b = new xs(M, c, f % h / d, m);
      } else
        a === null ? g = new l(s.count * c) : g = new l(a, f, s.count * c), b = new lt(g, c, m);
      if (s.sparse !== void 0) {
        const y = Dn.SCALAR, w = dt[s.sparse.indices.componentType], M = s.sparse.indices.byteOffset || 0, A = s.sparse.values.byteOffset || 0, S = new w(o[1], M, s.sparse.count * y), O = new l(o[2], A, s.sparse.count * c);
        a !== null && (b = new lt(b.array.slice(), b.itemSize, b.normalized));
        for (let N = 0, D = S.length; N < D; N++) {
          const Q = S[N];
          if (b.setX(Q, O[N * c]), c >= 2 && b.setY(Q, O[N * c + 1]), c >= 3 && b.setZ(Q, O[N * c + 2]), c >= 4 && b.setW(Q, O[N * c + 3]), c >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return b;
    });
  }
  loadTexture(n) {
    const t = this.json, e = this.options, i = t.textures[n].source, o = t.images[i];
    let a = this.textureLoader;
    if (o.uri) {
      const c = e.manager.getHandler(o.uri);
      c !== null && (a = c);
    }
    return this.loadTextureImage(n, i, a);
  }
  loadTextureImage(n, t, e) {
    const s = this, i = this.json, o = i.textures[n], a = i.images[t], c = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, e).then(function(d) {
      d.flipY = !1, o.name && (d.name = o.name);
      const f = (i.samplers || {})[o.sampler] || {};
      return d.magFilter = On[f.magFilter] || Jn, d.minFilter = On[f.minFilter] || es, d.wrapS = kn[f.wrapS] || $t, d.wrapT = kn[f.wrapT] || $t, s.associations.set(d, { textures: n }), d;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(n, t) {
    const e = this, s = this.json, i = this.options;
    if (this.sourceCache[n] !== void 0)
      return this.sourceCache[n].then((u) => u.clone());
    const o = s.images[n], a = self.URL || self.webkitURL;
    let c = o.uri || "", l = !1;
    if (o.bufferView !== void 0)
      c = e.getDependency("bufferView", o.bufferView).then(function(u) {
        l = !0;
        const f = new Blob([u], { type: o.mimeType });
        return c = a.createObjectURL(f), c;
      });
    else if (o.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + n + " is missing URI and bufferView");
    const d = Promise.resolve(c).then(function(u) {
      return new Promise(function(f, h) {
        let m = f;
        t.isImageBitmapLoader === !0 && (m = function(g) {
          const b = new qt(g);
          b.needsUpdate = !0, f(b);
        }), t.load(Be.resolveURL(u, i.path), m, void 0, h);
      });
    }).then(function(u) {
      return l === !0 && a.revokeObjectURL(c), u.userData.mimeType = o.mimeType || Li(o.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), u;
    });
    return this.sourceCache[n] = d, d;
  }
  assignTexture(n, t, e, s) {
    const i = this;
    return this.getDependency("texture", e.index).then(function(o) {
      if (e.texCoord !== void 0 && e.texCoord != 0 && !(t === "aoMap" && e.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + e.texCoord + " for texture " + t + " not yet supported."), i.extensions[I.KHR_TEXTURE_TRANSFORM]) {
        const a = e.extensions !== void 0 ? e.extensions[I.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const c = i.associations.get(o);
          o = i.extensions[I.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), i.associations.set(o, c);
        }
      }
      return s !== void 0 && (o.encoding = s), n[t] = o, o;
    });
  }
  assignFinalMaterial(n) {
    const t = n.geometry;
    let e = n.material;
    const s = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (n.isPoints) {
      const a = "PointsMaterial:" + e.uuid;
      let c = this.cache.get(a);
      c || (c = new ze(), ut.prototype.copy.call(c, e), c.color.copy(e.color), c.map = e.map, c.sizeAttenuation = !1, this.cache.add(a, c)), e = c;
    } else if (n.isLine) {
      const a = "LineBasicMaterial:" + e.uuid;
      let c = this.cache.get(a);
      c || (c = new Pe(), ut.prototype.copy.call(c, e), c.color.copy(e.color), this.cache.add(a, c)), e = c;
    }
    if (s || i || o) {
      let a = "ClonedMaterial:" + e.uuid + ":";
      e.isGLTFSpecularGlossinessMaterial && (a += "specular-glossiness:"), s && (a += "derivative-tangents:"), i && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let c = this.cache.get(a);
      c || (c = e.clone(), i && (c.vertexColors = !0), o && (c.flatShading = !0), s && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(a, c), this.associations.set(c, this.associations.get(e))), e = c;
    }
    e.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), n.material = e;
  }
  getMaterialType() {
    return en;
  }
  loadMaterial(n) {
    const t = this, e = this.json, s = this.extensions, i = e.materials[n];
    let o;
    const a = {}, c = i.extensions || {}, l = [];
    if (c[I.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      const u = s[I.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      o = u.getMaterialType(), l.push(u.extendParams(a, i, t));
    } else if (c[I.KHR_MATERIALS_UNLIT]) {
      const u = s[I.KHR_MATERIALS_UNLIT];
      o = u.getMaterialType(), l.push(u.extendParams(a, i, t));
    } else {
      const u = i.pbrMetallicRoughness || {};
      if (a.color = new V(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const f = u.baseColorFactor;
        a.color.fromArray(f), a.opacity = f[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", u.baseColorTexture, Xe)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(n);
      }), l.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(n, a);
      })));
    }
    i.doubleSided === !0 && (a.side = $n);
    const d = i.alphaMode || Xt.OPAQUE;
    if (d === Xt.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, d === Xt.MASK && (a.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && o !== _e && (l.push(t.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new U(1, 1), i.normalTexture.scale !== void 0)) {
      const u = i.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    return i.occlusionTexture !== void 0 && o !== _e && (l.push(t.assignTexture(a, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && o !== _e && (a.emissive = new V().fromArray(i.emissiveFactor)), i.emissiveTexture !== void 0 && o !== _e && l.push(t.assignTexture(a, "emissiveMap", i.emissiveTexture, Xe)), Promise.all(l).then(function() {
      let u;
      return o === Kt ? u = s[I.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a) : u = new o(a), i.name && (u.name = i.name), Ge(u, i), t.associations.set(u, { materials: n }), i.extensions && it(s, u, i), u;
    });
  }
  createUniqueName(n) {
    const t = As.sanitizeNodeName(n || "");
    let e = t;
    for (let s = 1; this.nodeNamesUsed[e]; ++s)
      e = t + "_" + s;
    return this.nodeNamesUsed[e] = !0, e;
  }
  loadGeometries(n) {
    const t = this, e = this.extensions, s = this.primitiveCache;
    function i(a) {
      return e[I.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(c) {
        return jn(c, a, t);
      });
    }
    const o = [];
    for (let a = 0, c = n.length; a < c; a++) {
      const l = n[a], d = Ri(l), u = s[d];
      if (u)
        o.push(u.promise);
      else {
        let f;
        l.extensions && l.extensions[I.KHR_DRACO_MESH_COMPRESSION] ? f = i(l) : f = jn(new B(), l, t), s[d] = { primitive: l, promise: f }, o.push(f);
      }
    }
    return Promise.all(o);
  }
  loadMesh(n) {
    const t = this, e = this.json, s = this.extensions, i = e.meshes[n], o = i.primitives, a = [];
    for (let c = 0, l = o.length; c < l; c++) {
      const d = o[c].material === void 0 ? vi(this.cache) : this.getDependency("material", o[c].material);
      a.push(d);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(c) {
      const l = c.slice(0, c.length - 1), d = c[c.length - 1], u = [];
      for (let h = 0, m = d.length; h < m; h++) {
        const g = d[h], b = o[h];
        let y;
        const w = l[h];
        if (b.mode === Ae.TRIANGLES || b.mode === Ae.TRIANGLE_STRIP || b.mode === Ae.TRIANGLE_FAN || b.mode === void 0)
          y = i.isSkinnedMesh === !0 ? new Rs(g, w) : new x(g, w), y.isSkinnedMesh === !0 && !y.geometry.attributes.skinWeight.normalized && y.normalizeSkinWeights(), b.mode === Ae.TRIANGLE_STRIP ? y.geometry = Nn(y.geometry, Fs) : b.mode === Ae.TRIANGLE_FAN && (y.geometry = Nn(y.geometry, ns));
        else if (b.mode === Ae.LINES)
          y = new Tt(g, w);
        else if (b.mode === Ae.LINE_STRIP)
          y = new Me(g, w);
        else if (b.mode === Ae.LINE_LOOP)
          y = new Zn(g, w);
        else if (b.mode === Ae.POINTS)
          y = new ct(g, w);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + b.mode);
        Object.keys(y.geometry.morphAttributes).length > 0 && Ai(y, i), y.name = t.createUniqueName(i.name || "mesh_" + n), Ge(y, i), b.extensions && it(s, y, b), t.assignFinalMaterial(y), u.push(y);
      }
      for (let h = 0, m = u.length; h < m; h++)
        t.associations.set(u[h], {
          meshes: n,
          primitives: h
        });
      if (u.length === 1)
        return u[0];
      const f = new Ue();
      t.associations.set(f, { meshes: n });
      for (let h = 0, m = u.length; h < m; h++)
        f.add(u[h]);
      return f;
    });
  }
  loadCamera(n) {
    let t;
    const e = this.json.cameras[n], s = e[e.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return e.type === "perspective" ? t = new Un(Ls.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : e.type === "orthographic" && (t = new Bn(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), e.name && (t.name = this.createUniqueName(e.name)), Ge(t, e), Promise.resolve(t);
  }
  loadSkin(n) {
    const t = this.json.skins[n], e = { joints: t.joints };
    return t.inverseBindMatrices === void 0 ? Promise.resolve(e) : this.getDependency("accessor", t.inverseBindMatrices).then(function(s) {
      return e.inverseBindMatrices = s, e;
    });
  }
  loadAnimation(n) {
    const e = this.json.animations[n], s = [], i = [], o = [], a = [], c = [];
    for (let l = 0, d = e.channels.length; l < d; l++) {
      const u = e.channels[l], f = e.samplers[u.sampler], h = u.target, m = h.node !== void 0 ? h.node : h.id, g = e.parameters !== void 0 ? e.parameters[f.input] : f.input, b = e.parameters !== void 0 ? e.parameters[f.output] : f.output;
      s.push(this.getDependency("node", m)), i.push(this.getDependency("accessor", g)), o.push(this.getDependency("accessor", b)), a.push(f), c.push(h);
    }
    return Promise.all([
      Promise.all(s),
      Promise.all(i),
      Promise.all(o),
      Promise.all(a),
      Promise.all(c)
    ]).then(function(l) {
      const d = l[0], u = l[1], f = l[2], h = l[3], m = l[4], g = [];
      for (let y = 0, w = d.length; y < w; y++) {
        const M = d[y], A = u[y], S = f[y], O = h[y], N = m[y];
        if (M === void 0)
          continue;
        M.updateMatrix(), M.matrixAutoUpdate = !0;
        let D;
        switch (De[N.path]) {
          case De.weights:
            D = zs;
            break;
          case De.rotation:
            D = pn;
            break;
          case De.position:
          case De.scale:
          default:
            D = Gs;
            break;
        }
        const Q = M.name ? M.name : M.uuid, H = O.interpolation !== void 0 ? Ti[O.interpolation] : ts, $ = [];
        De[N.path] === De.weights ? M.traverse(function(X) {
          X.morphTargetInfluences && $.push(X.name ? X.name : X.uuid);
        }) : $.push(Q);
        let ae = S.array;
        if (S.normalized) {
          const X = Wt(ae.constructor), Z = new Float32Array(ae.length);
          for (let z = 0, de = ae.length; z < de; z++)
            Z[z] = ae[z] * X;
          ae = Z;
        }
        for (let X = 0, Z = $.length; X < Z; X++) {
          const z = new D(
            $[X] + "." + De[N.path],
            A.array,
            ae,
            H
          );
          O.interpolation === "CUBICSPLINE" && (z.createInterpolant = function(ee) {
            const re = this instanceof pn ? Si : nn;
            return new re(this.times, this.values, this.getValueSize() / 3, ee);
          }, z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), g.push(z);
        }
      }
      const b = e.name ? e.name : "animation_" + n;
      return new Ps(b, void 0, g);
    });
  }
  createNodeMesh(n) {
    const t = this.json, e = this, s = t.nodes[n];
    return s.mesh === void 0 ? null : e.getDependency("mesh", s.mesh).then(function(i) {
      const o = e._getNodeRef(e.meshCache, s.mesh, i);
      return s.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh)
          for (let c = 0, l = s.weights.length; c < l; c++)
            a.morphTargetInfluences[c] = s.weights[c];
      }), o;
    });
  }
  loadNode(n) {
    const t = this.json, e = this.extensions, s = this, i = t.nodes[n], o = i.name ? s.createUniqueName(i.name) : "";
    return function() {
      const a = [], c = s._invokeOne(function(l) {
        return l.createNodeMesh && l.createNodeMesh(n);
      });
      return c && a.push(c), i.camera !== void 0 && a.push(s.getDependency("camera", i.camera).then(function(l) {
        return s._getNodeRef(s.cameraCache, i.camera, l);
      })), s._invokeAll(function(l) {
        return l.createNodeAttachment && l.createNodeAttachment(n);
      }).forEach(function(l) {
        a.push(l);
      }), Promise.all(a);
    }().then(function(a) {
      let c;
      if (i.isBone === !0 ? c = new Cs() : a.length > 1 ? c = new Ue() : a.length === 1 ? c = a[0] : c = new St(), c !== a[0])
        for (let l = 0, d = a.length; l < d; l++)
          c.add(a[l]);
      if (i.name && (c.userData.name = i.name, c.name = o), Ge(c, i), i.extensions && it(e, c, i), i.matrix !== void 0) {
        const l = new vt();
        l.fromArray(i.matrix), c.applyMatrix4(l);
      } else
        i.translation !== void 0 && c.position.fromArray(i.translation), i.rotation !== void 0 && c.quaternion.fromArray(i.rotation), i.scale !== void 0 && c.scale.fromArray(i.scale);
      return s.associations.has(c) || s.associations.set(c, {}), s.associations.get(c).nodes = n, c;
    });
  }
  loadScene(n) {
    const t = this.json, e = this.extensions, s = this.json.scenes[n], i = this, o = new Ue();
    s.name && (o.name = i.createUniqueName(s.name)), Ge(o, s), s.extensions && it(e, o, s);
    const a = s.nodes || [], c = [];
    for (let l = 0, d = a.length; l < d; l++)
      c.push(as(a[l], o, t, i));
    return Promise.all(c).then(function() {
      const l = (d) => {
        const u = /* @__PURE__ */ new Map();
        for (const [f, h] of i.associations)
          (f instanceof ut || f instanceof qt) && u.set(f, h);
        return d.traverse((f) => {
          const h = i.associations.get(f);
          h != null && u.set(f, h);
        }), u;
      };
      return i.associations = l(o), o;
    });
  }
}
function as(r, n, t, e) {
  const s = t.nodes[r];
  return e.getDependency("node", r).then(function(i) {
    if (s.skin === void 0)
      return i;
    let o;
    return e.getDependency("skin", s.skin).then(function(a) {
      o = a;
      const c = [];
      for (let l = 0, d = o.joints.length; l < d; l++)
        c.push(e.getDependency("node", o.joints[l]));
      return Promise.all(c);
    }).then(function(a) {
      return i.traverse(function(c) {
        if (!c.isMesh)
          return;
        const l = [], d = [];
        for (let u = 0, f = a.length; u < f; u++) {
          const h = a[u];
          if (h) {
            l.push(h);
            const m = new vt();
            o.inverseBindMatrices !== void 0 && m.fromArray(o.inverseBindMatrices.array, u * 16), d.push(m);
          } else
            console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', o.joints[u]);
        }
        c.bind(new Is(l, d), c.matrixWorld);
      }), i;
    });
  }).then(function(i) {
    n.add(i);
    const o = [];
    if (s.children) {
      const a = s.children;
      for (let c = 0, l = a.length; c < l; c++) {
        const d = a[c];
        o.push(as(d, i, t, e));
      }
    }
    return Promise.all(o);
  });
}
function Ci(r, n, t) {
  const e = n.attributes, s = new ss();
  if (e.POSITION !== void 0) {
    const a = t.json.accessors[e.POSITION], c = a.min, l = a.max;
    if (c !== void 0 && l !== void 0) {
      if (s.set(
        new v(c[0], c[1], c[2]),
        new v(l[0], l[1], l[2])
      ), a.normalized) {
        const d = Wt(dt[a.componentType]);
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
    const a = new v(), c = new v();
    for (let l = 0, d = i.length; l < d; l++) {
      const u = i[l];
      if (u.POSITION !== void 0) {
        const f = t.json.accessors[u.POSITION], h = f.min, m = f.max;
        if (h !== void 0 && m !== void 0) {
          if (c.setX(Math.max(Math.abs(h[0]), Math.abs(m[0]))), c.setY(Math.max(Math.abs(h[1]), Math.abs(m[1]))), c.setZ(Math.max(Math.abs(h[2]), Math.abs(m[2]))), f.normalized) {
            const g = Wt(dt[f.componentType]);
            c.multiplyScalar(g);
          }
          a.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    s.expandByVector(a);
  }
  r.boundingBox = s;
  const o = new Us();
  s.getCenter(o.center), o.radius = s.min.distanceTo(s.max) / 2, r.boundingSphere = o;
}
function jn(r, n, t) {
  const e = n.attributes, s = [];
  function i(o, a) {
    return t.getDependency("accessor", o).then(function(c) {
      r.setAttribute(a, c);
    });
  }
  for (const o in e) {
    const a = Qt[o] || o.toLowerCase();
    a in r.attributes || s.push(i(e[o], a));
  }
  if (n.indices !== void 0 && !r.index) {
    const o = t.getDependency("accessor", n.indices).then(function(a) {
      r.setIndex(a);
    });
    s.push(o);
  }
  return Ge(r, n), Ci(r, n, t), Promise.all(s).then(function() {
    return n.targets !== void 0 ? xi(r, n.targets, t) : r;
  });
}
function Nn(r, n) {
  let t = r.getIndex();
  if (t === null) {
    const o = [], a = r.getAttribute("position");
    if (a !== void 0) {
      for (let c = 0; c < a.count; c++)
        o.push(c);
      r.setIndex(o), t = r.getIndex();
    } else
      return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
  }
  const e = t.count - 2, s = [];
  if (n === ns)
    for (let o = 1; o <= e; o++)
      s.push(t.getX(0)), s.push(t.getX(o)), s.push(t.getX(o + 1));
  else
    for (let o = 0; o < e; o++)
      o % 2 === 0 ? (s.push(t.getX(o)), s.push(t.getX(o + 1)), s.push(t.getX(o + 2))) : (s.push(t.getX(o + 2)), s.push(t.getX(o + 1)), s.push(t.getX(o)));
  s.length / 3 !== e && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  const i = r.clone();
  return i.setIndex(s), i;
}
const Ii = /* @__PURE__ */ C({
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
  setup(r, { expose: n, emit: t }) {
    const e = r, s = new ni(), i = new Ue();
    i.castShadow = !0, i.receiveShadow = !0, ue(i), L(e, "position", i), L(e, "rotation", i), L(e, "scale", i);
    function o() {
      s.load(
        e.url,
        function(c) {
          L(e, "position", i, !1), L(e, "rotation", i, !1), L(e, "scale", i, !1), i.add(c.scene), a(), t("load", c.scene), k.object3DChanged(e.name, i);
        },
        function(c) {
          t("progress", c);
        },
        function(c) {
          t("error", c);
        }
      );
    }
    function a() {
      if (i.children.length !== 0)
        for (const c of i.children[0].children)
          c.castShadow = e.castShadow, c.receiveShadow = e.receiveShadow;
    }
    return a(), F(
      () => e.url,
      () => o(),
      {
        immediate: !0
      }
    ), tn(i.children, e), j("mesh", i), n({
      three: i
    }), (c, l) => K(c.$slots, "default");
  }
}), Oi = /^[og]\s*(.+)?/, ki = /^mtllib /, Di = /^usemtl /, Hi = /^usemap /, Fn = new v(), Yt = new v(), Gn = new v(), zn = new v(), fe = new v(), Et = new V();
function ji() {
  const r = {
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
          const a = {
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
          return this.materials.push(a), a;
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
      Fn.fromArray(s, n), Yt.fromArray(s, t), Gn.fromArray(s, e), fe.subVectors(Gn, Yt), zn.subVectors(Fn, Yt), fe.cross(zn), fe.normalize(), i.push(fe.x, fe.y, fe.z), i.push(fe.x, fe.y, fe.z), i.push(fe.x, fe.y, fe.z);
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
    addFace: function(n, t, e, s, i, o, a, c, l) {
      const d = this.vertices.length;
      let u = this.parseVertexIndex(n, d), f = this.parseVertexIndex(t, d), h = this.parseVertexIndex(e, d);
      if (this.addVertex(u, f, h), this.addColor(u, f, h), a !== void 0 && a !== "") {
        const m = this.normals.length;
        u = this.parseNormalIndex(a, m), f = this.parseNormalIndex(c, m), h = this.parseNormalIndex(l, m), this.addNormal(u, f, h);
      } else
        this.addFaceNormal(u, f, h);
      if (s !== void 0 && s !== "") {
        const m = this.uvs.length;
        u = this.parseUVIndex(s, m), f = this.parseUVIndex(i, m), h = this.parseUVIndex(o, m), this.addUV(u, f, h), this.object.geometry.hasUVIndices = !0;
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
  return r.startObject("", !1), r;
}
class Ni extends qn {
  constructor(n) {
    super(n), this.materials = null;
  }
  load(n, t, e, s) {
    const i = this, o = new Jt(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(n, function(a) {
      try {
        t(i.parse(a));
      } catch (c) {
        s ? s(c) : console.error(c), i.manager.itemError(n);
      }
    }, e, s);
  }
  setMaterials(n) {
    return this.materials = n, this;
  }
  parse(n) {
    const t = new ji();
    n.indexOf(`\r
`) !== -1 && (n = n.replace(/\r\n/g, `
`)), n.indexOf(`\\
`) !== -1 && (n = n.replace(/\\\n/g, ""));
    const e = n.split(`
`);
    let s = "", i = "", o = 0, a = [];
    const c = typeof "".trimLeft == "function";
    for (let u = 0, f = e.length; u < f; u++)
      if (s = e[u], s = c ? s.trimLeft() : s.trim(), o = s.length, o !== 0 && (i = s.charAt(0), i !== "#"))
        if (i === "v") {
          const h = s.split(/\s+/);
          switch (h[0]) {
            case "v":
              t.vertices.push(
                parseFloat(h[1]),
                parseFloat(h[2]),
                parseFloat(h[3])
              ), h.length >= 7 ? (Et.setRGB(
                parseFloat(h[4]),
                parseFloat(h[5]),
                parseFloat(h[6])
              ).convertSRGBToLinear(), t.colors.push(Et.r, Et.g, Et.b)) : t.colors.push(void 0, void 0, void 0);
              break;
            case "vn":
              t.normals.push(
                parseFloat(h[1]),
                parseFloat(h[2]),
                parseFloat(h[3])
              );
              break;
            case "vt":
              t.uvs.push(
                parseFloat(h[1]),
                parseFloat(h[2])
              );
              break;
          }
        } else if (i === "f") {
          const m = s.slice(1).trim().split(/\s+/), g = [];
          for (let y = 0, w = m.length; y < w; y++) {
            const M = m[y];
            if (M.length > 0) {
              const A = M.split("/");
              g.push(A);
            }
          }
          const b = g[0];
          for (let y = 1, w = g.length - 1; y < w; y++) {
            const M = g[y], A = g[y + 1];
            t.addFace(
              b[0],
              M[0],
              A[0],
              b[1],
              M[1],
              A[1],
              b[2],
              M[2],
              A[2]
            );
          }
        } else if (i === "l") {
          const h = s.substring(1).trim().split(" ");
          let m = [];
          const g = [];
          if (s.indexOf("/") === -1)
            m = h;
          else
            for (let b = 0, y = h.length; b < y; b++) {
              const w = h[b].split("/");
              w[0] !== "" && m.push(w[0]), w[1] !== "" && g.push(w[1]);
            }
          t.addLineGeometry(m, g);
        } else if (i === "p") {
          const m = s.slice(1).trim().split(" ");
          t.addPointGeometry(m);
        } else if ((a = Oi.exec(s)) !== null) {
          const h = (" " + a[0].slice(1).trim()).slice(1);
          t.startObject(h);
        } else if (Di.test(s))
          t.object.startMaterial(s.substring(7).trim(), t.materialLibraries);
        else if (ki.test(s))
          t.materialLibraries.push(s.substring(7).trim());
        else if (Hi.test(s))
          console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
        else if (i === "s") {
          if (a = s.split(" "), a.length > 1) {
            const m = a[1].trim().toLowerCase();
            t.object.smooth = m !== "0" && m !== "off";
          } else
            t.object.smooth = !0;
          const h = t.object.currentMaterial();
          h && (h.smooth = t.object.smooth);
        } else {
          if (s === "\0")
            continue;
          console.warn('THREE.OBJLoader: Unexpected line: "' + s + '"');
        }
    t.finalize();
    const l = new Ue();
    if (l.materialLibraries = [].concat(t.materialLibraries), !(t.objects.length === 1 && t.objects[0].geometry.vertices.length === 0) === !0)
      for (let u = 0, f = t.objects.length; u < f; u++) {
        const h = t.objects[u], m = h.geometry, g = h.materials, b = m.type === "Line", y = m.type === "Points";
        let w = !1;
        if (m.vertices.length === 0)
          continue;
        const M = new B();
        M.setAttribute("position", new ye(m.vertices, 3)), m.normals.length > 0 && M.setAttribute("normal", new ye(m.normals, 3)), m.colors.length > 0 && (w = !0, M.setAttribute("color", new ye(m.colors, 3))), m.hasUVIndices === !0 && M.setAttribute("uv", new ye(m.uvs, 2));
        const A = [];
        for (let O = 0, N = g.length; O < N; O++) {
          const D = g[O], Q = D.name + "_" + D.smooth + "_" + w;
          let H = t.materials[Q];
          if (this.materials !== null) {
            if (H = this.materials.create(D.name), b && H && !(H instanceof Pe)) {
              const $ = new Pe();
              ut.prototype.copy.call($, H), $.color.copy(H.color), H = $;
            } else if (y && H && !(H instanceof ze)) {
              const $ = new ze({ size: 10, sizeAttenuation: !1 });
              ut.prototype.copy.call($, H), $.color.copy(H.color), $.map = H.map, H = $;
            }
          }
          H === void 0 && (b ? H = new Pe() : y ? H = new ze({ size: 1, sizeAttenuation: !1 }) : H = new Bs(), H.name = D.name, H.flatShading = !D.smooth, H.vertexColors = w, t.materials[Q] = H), A.push(H);
        }
        let S;
        if (A.length > 1) {
          for (let O = 0, N = g.length; O < N; O++) {
            const D = g[O];
            M.addGroup(D.groupStart, D.groupCount, O);
          }
          b ? S = new Tt(M, A) : y ? S = new ct(M, A) : S = new x(M, A);
        } else
          b ? S = new Tt(M, A[0]) : y ? S = new ct(M, A[0]) : S = new x(M, A[0]);
        S.name = h.name, l.add(S);
      }
    else if (t.vertices.length > 0) {
      const u = new ze({ size: 1, sizeAttenuation: !1 }), f = new B();
      f.setAttribute("position", new ye(t.vertices, 3)), t.colors.length > 0 && t.colors[0] !== void 0 && (f.setAttribute("color", new ye(t.colors, 3)), u.vertexColors = !0);
      const h = new ct(f, u);
      l.add(h);
    }
    return l;
  }
}
const Fi = /* @__PURE__ */ C({
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
  setup(r, { expose: n, emit: t }) {
    const e = r, s = new Ni(), i = new Ue();
    ue(i), L(e, "position", i), L(e, "rotation", i), L(e, "scale", i);
    function o() {
      s.load(
        e.url,
        function(c) {
          for (const l of c.children)
            "material" in i && (l.material = i.material);
          i.add(c), a(), t("load", c), k.object3DChanged(e.name, i);
        },
        function(c) {
          t("progress", c);
        },
        function(c) {
          t("error", c);
        }
      );
    }
    function a() {
      if (i.children.length !== 0)
        for (const c of i.children[0].children)
          c.castShadow = e.castShadow, c.receiveShadow = e.receiveShadow;
    }
    return a(), F(
      () => e.url,
      () => o(),
      {
        immediate: !0
      }
    ), tn(i.children, e), j("mesh", i), n({
      three: i
    }), (c, l) => K(c.$slots, "default");
  }
}), Gi = /* @__PURE__ */ C({
  __name: "AxesHelper",
  props: {
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    size: { default: 1 },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: n }) {
    const t = r, e = new Xs(t.size);
    return ue(e), L(t, "position", e), L(t, "rotation", e), L(t, "scale", e), j("mesh", e), n({ three: e }), (s, i) => K(s.$slots, "default");
  }
}), zi = /* @__PURE__ */ C({
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
  setup(r, { expose: n }) {
    const t = r, e = T("scene"), s = new B(), i = new _e(), o = new x(s, i);
    ue(o), L(t, "position", o), L(t, "rotation", o), L(t, "scale", o);
    function a() {
      o.castShadow = t.castShadow, o.receiveShadow = t.receiveShadow, o.name = t.name;
    }
    a(), _(t, "castShadow", a), _(t, "receiveShadow", a);
    const c = T("getMaterial");
    function l(u) {
      const f = new ss();
      f.setFromObject(u);
      const h = new v();
      f.getCenter(h);
      const m = new se(f.max.x - f.min.x, f.max.y - f.min.y, f.max.z - f.min.z);
      me(o.geometry, m), o.geometry.computeBoundingSphere(), o.position.set(h.x, h.y, h.z), k.geometryChanged(o.geometry.name, o.geometry);
    }
    const d = (u) => {
      if ("geometry" in u)
        u.geometry.computeBoundingBox();
      else
        for (const f of u.children)
          d(f);
    };
    return k.object3DChanged.on(t.mesh, (u) => {
      d(u), hn(() => {
        l(u);
      });
    }), k.object3DTranslated.on(t.mesh, (u) => {
      d(u), hn(() => {
        l(u);
      });
    }), oe(() => {
      if (t.material) {
        const u = c(t.material);
        o.material = u;
      }
    }), we(() => {
      e.remove(o), Se(o);
    }), j("mesh", o), n({ three: o }), (u, f) => K(u.$slots, "default");
  }
}), Ui = /* @__PURE__ */ C({
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
  setup(r, { expose: n }) {
    const t = r, e = new Ys(t.size, t.divisions, t.colorCenterLine, t.colorGrid);
    return ue(e), L(t, "position", e), L(t, "rotation", e), L(t, "scale", e), j("mesh", e), n({ three: e }), (s, i) => K(s.$slots, "default");
  }
}), Bi = {
  name: "BoxGeometry",
  render: () => null
}, Xi = /* @__PURE__ */ C({
  ...Bi,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 },
    depthSegments: { default: 1 }
  },
  setup(r, { expose: n }) {
    const t = r;
    function e(c, l, d, u, f, h) {
      return new se(c, l, d, u, f, h);
    }
    const s = pe(new B());
    s.name = t.name;
    const i = T("mesh", null);
    i && (i.geometry = s);
    const o = T("addGeometry");
    o(s);
    function a() {
      const c = e(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments
      );
      me(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return oe(a), _(t, "name", () => {
      s.name = t.name;
    }), _(t, "width", a), _(t, "height", a), _(t, "depth", a), _(t, "widthSegments", a), _(t, "heightSegments", a), _(t, "depthSegments", a), n({
      three: s
    }), { props: t, makeBox: e, three: s, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), Yi = {
  name: "BufferGeometry",
  render: () => null
}, Vi = /* @__PURE__ */ C({
  ...Yi,
  props: {
    name: { default: "" },
    vertices: { default: () => [] },
    faces: { default: () => [] },
    uvs: { default: () => [] },
    normals: { type: [Array, Boolean], default: !1 }
  },
  setup(r, { expose: n }) {
    const t = r;
    function e() {
      const c = new B(), l = new Float32Array(t.vertices);
      if (c.setAttribute("position", new lt(l, 3)), t.uvs.length > 0) {
        const d = new Float32Array(t.uvs);
        c.setAttribute("uv", new lt(d, 2));
      }
      if (t.normals === !0 && (c.computeVertexNormals(), c.attributes.normal.needsUpdate = !0), Array.isArray(t.normals)) {
        const d = new Float32Array(t.normals);
        c.setAttribute("normal", new lt(d, 3));
      }
      return t.faces.length > 0 && c.setIndex(t.faces), c;
    }
    const s = pe(new B());
    s.name = t.name;
    const i = T("mesh", null);
    i && (i.geometry = s);
    const o = T("addGeometry");
    o(s);
    function a() {
      const c = e();
      me(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return oe(a), F(
      () => t.vertices,
      (c) => {
        a();
      },
      { deep: !0 }
    ), F(
      () => t.faces,
      (c) => {
        a();
      },
      { deep: !0 }
    ), n({
      three: s
    }), { props: t, makeGeometry: e, three: s, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), $i = {
  name: "CircleGeometry",
  render: () => null
}, Zi = /* @__PURE__ */ C({
  ...$i,
  props: {
    name: { default: "" },
    radius: { default: 1 },
    segments: { default: 32 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(r, { expose: n }) {
    const t = r;
    function e(c, l, d, u) {
      return new Vs(c, l, d, u);
    }
    const s = pe(new B());
    s.name = t.name;
    const i = T("mesh", null);
    i && (i.geometry = s);
    const o = T("addGeometry");
    o(s);
    function a() {
      const c = e(t.radius, t.segments, t.thetaStart, t.thetaLength);
      me(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return oe(a), _(t, "radius", a), _(t, "segments", a), _(t, "thetaStart", a), _(t, "thetaLength", a), n({
      three: s
    }), { props: t, makeCircle: e, three: s, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), qi = {
  name: "ConeGeometry",
  render: () => null
}, Ki = /* @__PURE__ */ C({
  ...qi,
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
  setup(r, { expose: n }) {
    const t = r;
    function e(c, l, d, u, f, h, m) {
      return new $s(c, l, d, u, f, h, m);
    }
    const s = pe(new B());
    s.name = t.name;
    const i = T("mesh", null);
    i && (i.geometry = s);
    const o = T("addGeometry");
    o(s);
    function a() {
      const c = e(
        t.radius,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength
      );
      me(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return oe(a), _(t, "radius", a), _(t, "height", a), _(t, "radialSegments", a), _(t, "heightSegments", a), _(t, "openEnded", a), _(t, "thetaStart", a), _(t, "thetaLength", a), n({
      three: s
    }), { props: t, makeCone: e, three: s, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), Qi = {
  name: "CylinderGeometry",
  render: () => null
}, Wi = /* @__PURE__ */ C({
  ...Qi,
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
  setup(r, { expose: n }) {
    const t = r;
    function e(c, l, d, u, f, h, m, g) {
      return new ie(
        c,
        l,
        d,
        u,
        f,
        h,
        m,
        g
      );
    }
    const s = pe(new B());
    s.name = t.name;
    const i = T("mesh", null);
    i && (i.geometry = s);
    const o = T("addGeometry");
    o(s);
    function a() {
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
      me(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return oe(a), _(t, "radiusTop", a), _(t, "radiusBottom", a), _(t, "height", a), _(t, "radialSegments", a), _(t, "heightSegments", a), _(t, "openEnded", a), _(t, "thetaStart", a), _(t, "thetaLength", a), n({
      three: s
    }), { props: t, makeCylinder: e, three: s, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), Ji = {
  name: "EdgesGeometry",
  render: () => null
}, ea = /* @__PURE__ */ C({
  ...Ji,
  props: {
    geometry: null
  },
  setup(r, { expose: n }) {
    const t = r, e = pe(new B()), s = T("mesh", null);
    s && (s.geometry = e);
    const i = T("addGeometry");
    i(e);
    function o(a) {
      const c = new Zs(a);
      me(e, c);
      const l = s;
      "isLine" in l && l.computeLineDistances();
    }
    return k.geometryChanged.on(t.geometry, (a) => {
      o(a);
    }), n({
      three: e
    }), { props: t, three: e, mesh: s, addGeometry: i, redoGeometry: o };
  }
});
class It extends B {
  constructor(n = (s, i, o) => o.set(s, i, Math.cos(s) * Math.sin(i)), t = 8, e = 8) {
    super(), this.type = "ParametricGeometry", this.parameters = {
      func: n,
      slices: t,
      stacks: e
    };
    const s = [], i = [], o = [], a = [], c = 1e-5, l = new v(), d = new v(), u = new v(), f = new v(), h = new v();
    n.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
    const m = t + 1;
    for (let g = 0; g <= e; g++) {
      const b = g / e;
      for (let y = 0; y <= t; y++) {
        const w = y / t;
        n(w, b, d), i.push(d.x, d.y, d.z), w - c >= 0 ? (n(w - c, b, u), f.subVectors(d, u)) : (n(w + c, b, u), f.subVectors(u, d)), b - c >= 0 ? (n(w, b - c, u), h.subVectors(d, u)) : (n(w, b + c, u), h.subVectors(u, d)), l.crossVectors(f, h).normalize(), o.push(l.x, l.y, l.z), a.push(w, b);
      }
    }
    for (let g = 0; g < e; g++)
      for (let b = 0; b < t; b++) {
        const y = g * m + b, w = g * m + b + 1, M = (g + 1) * m + b + 1, A = (g + 1) * m + b;
        s.push(y, w, A), s.push(w, M, A);
      }
    this.setIndex(s), this.setAttribute("position", new ye(i, 3)), this.setAttribute("normal", new ye(o, 3)), this.setAttribute("uv", new ye(a, 2));
  }
}
const Ke = {
  klein: function(r, n, t) {
    n *= Math.PI, r *= 2 * Math.PI, n = n * 2;
    let e, s;
    n < Math.PI ? (e = 3 * Math.cos(n) * (1 + Math.sin(n)) + 2 * (1 - Math.cos(n) / 2) * Math.cos(n) * Math.cos(r), s = -8 * Math.sin(n) - 2 * (1 - Math.cos(n) / 2) * Math.sin(n) * Math.cos(r)) : (e = 3 * Math.cos(n) * (1 + Math.sin(n)) + 2 * (1 - Math.cos(n) / 2) * Math.cos(r + Math.PI), s = -8 * Math.sin(n));
    const i = -2 * (1 - Math.cos(n) / 2) * Math.sin(r);
    t.set(e, i, s);
  },
  plane: function(r, n) {
    return function(t, e, s) {
      const i = t * r, o = 0, a = e * n;
      s.set(i, o, a);
    };
  },
  mobius: function(r, n, t) {
    r = r - 0.5;
    const e = 2 * Math.PI * n, s = 2, i = Math.cos(e) * (s + r * Math.cos(e / 2)), o = Math.sin(e) * (s + r * Math.cos(e / 2)), a = r * Math.sin(e / 2);
    t.set(i, o, a);
  },
  mobius3d: function(r, n, t) {
    r *= Math.PI, n *= 2 * Math.PI, r = r * 2;
    const e = r / 2, s = 2.25, i = 0.125, o = 0.65;
    let a = i * Math.cos(n) * Math.cos(e) - o * Math.sin(n) * Math.sin(e);
    const c = i * Math.cos(n) * Math.sin(e) + o * Math.sin(n) * Math.cos(e), l = (s + a) * Math.sin(r);
    a = (s + a) * Math.cos(r), t.set(a, l, c);
  }
};
Ke.TubeGeometry = class extends It {
  constructor(n, t = 64, e = 1, s = 8, i = !1) {
    const o = t + 1, a = n.computeFrenetFrames(t, i), c = a.tangents, l = a.normals, d = a.binormals, u = new v();
    function f(h, m, g) {
      m *= 2 * Math.PI;
      const b = Math.floor(h * (o - 1));
      n.getPointAt(h, u);
      const y = l[b], w = d[b], M = -e * Math.cos(m), A = e * Math.sin(m);
      u.x += M * y.x + A * w.x, u.y += M * y.y + A * w.y, u.z += M * y.z + A * w.z, g.copy(u);
    }
    super(f, t, s), this.tangents = c, this.normals = l, this.binormals = d, this.path = n, this.segments = t, this.radius = e, this.segmentsRadius = s, this.closed = i;
  }
};
Ke.TorusKnotGeometry = class extends Ke.TubeGeometry {
  constructor(n = 200, t = 40, e = 64, s = 8, i = 2, o = 3) {
    class a extends qs {
      getPoint(f, h = new v()) {
        const m = h;
        f *= Math.PI * 2;
        const g = 0.5, b = (1 + g * Math.cos(o * f)) * Math.cos(i * f), y = (1 + g * Math.cos(o * f)) * Math.sin(i * f), w = g * Math.sin(o * f);
        return m.set(b, y, w).multiplyScalar(n);
      }
    }
    const c = e, l = s, d = new a();
    super(d, c, t, l, !0, !1), this.radius = n, this.tube = t, this.segmentsT = e, this.segmentsR = s, this.p = i, this.q = o;
  }
};
Ke.SphereGeometry = class extends It {
  constructor(n, t, e) {
    function s(i, o, a) {
      i *= Math.PI, o *= 2 * Math.PI;
      const c = n * Math.sin(i) * Math.cos(o), l = n * Math.sin(i) * Math.sin(o), d = n * Math.cos(i);
      a.set(c, l, d);
    }
    super(s, t, e);
  }
};
Ke.PlaneGeometry = class extends It {
  constructor(n, t, e, s) {
    function i(o, a, c) {
      const l = o * n, d = 0, u = a * t;
      c.set(l, d, u);
    }
    super(i, e, s);
  }
};
const ta = {
  name: "Parametriceometry",
  render: () => null
}, na = /* @__PURE__ */ C({
  ...ta,
  props: {
    name: { default: "" },
    function: { type: Function, default: Ke.klein },
    slices: { default: 8 },
    stacks: { default: 8 }
  },
  setup(r, { expose: n }) {
    const t = r;
    function e(c, l, d) {
      return new It(c, l, d);
    }
    const s = pe(new B());
    s.name = t.name;
    const i = T("mesh", null);
    i && (i.geometry = s);
    const o = T("addGeometry");
    o(s);
    function a() {
      const c = e(t.function, t.slices, t.stacks);
      me(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return oe(a), _(t, "function", a), _(t, "stacks", a), _(t, "slices", a), n({
      three: s
    }), { props: t, makePlane: e, three: s, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), sa = {
  name: "PlaneGeometry",
  render: () => null
}, oa = /* @__PURE__ */ C({
  ...sa,
  props: {
    name: { default: "" },
    width: { default: 1 },
    height: { default: 1 },
    widthSegments: { default: 1 },
    heightSegments: { default: 1 }
  },
  setup(r, { expose: n }) {
    const t = r;
    function e(c, l, d, u) {
      return new Vn(c, l, d, u);
    }
    const s = pe(new B());
    s.name = t.name;
    const i = T("mesh", null);
    i && (i.geometry = s);
    const o = T("addGeometry");
    o(s);
    function a() {
      const c = e(t.width, t.height, t.widthSegments, t.heightSegments);
      me(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return oe(a), _(t, "width", a), _(t, "height", a), _(t, "widthSegments", a), _(t, "heightSegments", a), n({
      three: s
    }), { props: t, makePlane: e, three: s, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), ia = {
  name: "RingGeometry",
  render: () => null
}, aa = /* @__PURE__ */ C({
  ...ia,
  props: {
    name: { default: "" },
    innerRadius: { default: 0.5 },
    outerRadius: { default: 1 },
    thetaSegments: { default: 32 },
    phiSegments: { default: 1 },
    thetaStart: { default: 0 },
    thetaLength: { default: 2 * Math.PI }
  },
  setup(r, { expose: n }) {
    const t = r;
    function e(c, l, d, u, f, h) {
      return new Ks(c, l, d, u, f, h);
    }
    const s = pe(new B());
    s.name = t.name;
    const i = T("mesh", null);
    i && (i.geometry = s);
    const o = T("addGeometry");
    o(s);
    function a() {
      const c = e(
        t.innerRadius,
        t.outerRadius,
        t.thetaSegments,
        t.phiSegments,
        t.thetaStart,
        t.thetaLength
      );
      me(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return oe(a), _(t, "innerRadius", a), _(t, "outerRadius", a), _(t, "thetaSegments", a), _(t, "phiSegments", a), _(t, "thetaStart", a), _(t, "thetaLength", a), n({
      three: s
    }), { props: t, makeRing: e, three: s, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), ra = {
  name: "SphereGeometry",
  render: () => null
}, ca = /* @__PURE__ */ C({
  ...ra,
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
  setup(r, { expose: n }) {
    const t = r;
    function e(c, l, d, u, f, h, m) {
      return new Yn(c, l, d, u, f, h, m);
    }
    const s = new B();
    s.name = t.name;
    const i = T("mesh", null);
    i && (i.geometry = s);
    const o = T("addGeometry");
    o(s);
    function a() {
      const c = e(
        t.radius,
        t.widthSegments,
        t.heightSegments,
        t.phiStart,
        t.phiLength,
        t.thetaStart,
        t.thetaLength
      );
      me(s, c), k.geometryChanged(t.name, s), i && k.object3DChanged(i.name, i);
    }
    return oe(a), _(t, "radius", a), _(t, "widthSegments", a), _(t, "heightSegments", a), _(t, "phiStart", a), _(t, "phiLength", a), _(t, "thetaStart", a), _(t, "thetaLength", a), n({
      three: s
    }), { props: t, makeSphere: e, three: s, mesh: i, addGeometry: o, redoGeometry: a };
  }
}), la = {
  name: "WireframeGeometry",
  render: () => null
}, ua = /* @__PURE__ */ C({
  ...la,
  props: {
    geometry: null
  },
  setup(r, { expose: n }) {
    const t = r, e = pe(new B()), s = T("mesh", null);
    s && (s.geometry = e);
    const i = T("addGeometry");
    i(e);
    function o(a) {
      const c = new Qs(a);
      me(e, c);
      const l = s;
      "isLine" in l && l.computeLineDistances();
    }
    return k.geometryChanged.on(t.geometry, (a) => {
      o(a);
    }), n({
      three: e
    }), { props: t, three: e, mesh: s, addGeometry: i, redoGeometry: o };
  }
}), da = {
  name: "LineBasicMaterial",
  render: () => null
}, ha = /* @__PURE__ */ C({
  ...da,
  props: {
    color: { default: 16777215 },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: n }) {
    const t = r, e = new Pe({ color: t.color });
    e.name = t.name;
    const s = T("addMaterial");
    s(e);
    const i = T("mesh", null);
    i && (i.material = e);
    function o() {
      t.color && (e.color = new V(t.color)), e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return o(), _(t, "color", o), _(t, "opacity", o), _(t, "transparent", o), j("material", e), n({
      three: e
    }), { props: t, three: e, addMaterial: s, mesh: i, applyProps: o };
  }
}), fa = {
  name: "LineDashedMaterial",
  render: () => null
}, pa = /* @__PURE__ */ C({
  ...fa,
  props: {
    color: { default: 16777215 },
    scale: { default: 1 },
    dashSize: { default: 3 },
    gapSize: { default: 1 },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: n }) {
    const t = r, e = new Ws({ color: t.color });
    e.name = t.name;
    const s = T("addMaterial");
    s(e);
    const i = T("mesh", null);
    i && (i.material = e);
    function o() {
      e.color = new V(t.color), e.scale = t.scale, e.dashSize = t.dashSize, e.gapSize = t.gapSize, e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return o(), _(t, "color", o), _(t, "scale", o), _(t, "dashSize", o), _(t, "gapSize", o), _(t, "opacity", o), _(t, "transparent", o), j("material", e), n({
      three: e
    }), { props: t, three: e, addMaterial: s, mesh: i, applyProps: o };
  }
}), ma = {
  name: "MeshBasicMaterial"
}, ga = /* @__PURE__ */ C({
  ...ma,
  props: {
    color: null,
    side: { default: xt },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 },
    vertexColors: { type: Boolean, default: !1 }
  },
  setup(r, { expose: n }) {
    const t = r, e = new _e();
    e.name = t.name, T("addMaterial")(e);
    const i = T("mesh", null);
    i && (i.material = e);
    function o() {
      t.color !== void 0 && (e.color = new V(t.color)), e.side = t.side, e.opacity = t.opacity, e.transparent = t.transparent, e.vertexColors = t.vertexColors, e.needsUpdate = !0;
    }
    return o(), j("material", e), _(t, "color", o), _(t, "side", o), _(t, "opacity", o), _(t, "transparent", o), _(t, "vertexColors", o), n({
      three: e
    }), (a, c) => K(a.$slots, "default");
  }
}), ya = {
  name: "MeshLambertMaterial"
}, _a = /* @__PURE__ */ C({
  ...ya,
  props: {
    color: { default: 16777215 },
    name: { default: "" },
    side: { default: xt },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: n }) {
    const t = r, e = new Js();
    e.name = t.name, T("addMaterial")(e);
    const i = T("mesh", null);
    i && (i.material = e);
    function o(a) {
      a.color && (e.color = new V(a.color)), a.side && (e.side = a.side);
    }
    return o(t), F(
      () => t.color,
      () => o(t)
    ), F(
      () => t.side,
      () => o(t)
    ), F(
      () => t.opacity,
      () => {
        e.opacity = t.opacity;
      },
      { immediate: !0 }
    ), F(
      () => t.transparent,
      () => {
        e.transparent = t.transparent;
      },
      { immediate: !0 }
    ), j("material", e), n({
      three: e
    }), (a, c) => K(a.$slots, "default");
  }
}), wa = {
  name: "PointsMaterial",
  render: () => null
}, ba = /* @__PURE__ */ C({
  ...wa,
  props: {
    color: { default: 16777215 },
    sizeAttenuation: { type: Boolean, default: !0 },
    name: { default: "" },
    size: { default: 1 },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: n }) {
    const t = r, e = new ze({ color: t.color, sizeAttenuation: t.sizeAttenuation, size: t.size });
    e.name = t.name;
    const s = T("mesh", null), i = T("addMaterial");
    i(e), s && (s.material = e);
    function o() {
      e.color = new V(t.color), e.size = t.size, e.sizeAttenuation = t.sizeAttenuation, e.opacity = t.opacity, e.transparent = t.transparent, e.needsUpdate = !0;
    }
    return o(), _(t, "color", o), _(t, "size", o), _(t, "sizeAttenuation", o), _(t, "opacity", o), _(t, "transparent", o), j("material", e), n({
      three: e
    }), { props: t, three: e, mesh: s, addMaterial: i, applyProps: o };
  }
}), Ea = {
  name: "MeshNormalMaterial"
}, Ma = /* @__PURE__ */ C({
  ...Ea,
  props: {
    side: { default: xt },
    name: { default: "" },
    opacity: { default: 1 },
    transparent: { type: Boolean, default: !1 }
  },
  setup(r, { expose: n }) {
    const t = r, e = new eo();
    e.name = t.name, T("addMaterial")(e);
    const i = T("mesh", null);
    return i && (i.material = e), F(
      () => t.side,
      () => {
        e.side = t.side;
      },
      { immediate: !0 }
    ), F(
      () => t.opacity,
      () => {
        e.opacity = t.opacity;
      },
      { immediate: !0 }
    ), F(
      () => t.transparent,
      () => {
        e.transparent = t.transparent;
      },
      { immediate: !0 }
    ), j("material", e), n({
      three: e
    }), (o, a) => K(o.$slots, "default");
  }
}), Sa = {
  name: "AmbientLight",
  render: () => null
}, Ta = /* @__PURE__ */ C({
  ...Sa,
  props: {
    color: { default: 16777215 },
    intensity: { default: 1 }
  },
  setup(r, { expose: n }) {
    const t = r, e = T("scene"), s = new to();
    e.add(s);
    function i(o) {
      s.color = new V(o.color), s.intensity = o.intensity;
    }
    return i(t), F(
      () => t.color,
      () => i(t)
    ), F(
      () => t.intensity,
      () => i(t)
    ), n({ three: s }), { props: t, scene: e, three: s, applyProps: i };
  }
}), va = {
  name: "DirectionalLight",
  render: () => null
}, xa = /* @__PURE__ */ C({
  ...va,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] }
  },
  setup(r, { expose: n }) {
    const t = r, e = new Qn();
    ue(e);
    function s() {
      e.color = new V(t.color), e.intensity = t.intensity, e.castShadow = t.castShadow;
    }
    return s(), _(t, "color", s), _(t, "intensity", s), _(t, "castShadow", s), L(t, "position", e), n({ three: e }), { props: t, three: e, applyProps: s };
  }
}), Aa = {
  name: "HemisphereLight",
  render: () => null
}, Ra = /* @__PURE__ */ C({
  ...Aa,
  props: {
    groundColor: { default: 16777215 },
    intensity: { default: 1 },
    skyColor: { default: 16777215 }
  },
  setup(r, { expose: n }) {
    const t = r, e = T("scene"), s = new no();
    e.add(s);
    function i() {
      s.color = new V(t.skyColor), s.groundColor = new V(t.groundColor), s.intensity = t.intensity;
    }
    return i(), _(t, "skyColor", i), _(t, "groundColor", i), _(t, "intensity", i), n({ three: s }), { props: t, scene: e, three: s, applyProps: i };
  }
}), La = {
  name: "PointLight",
  render: () => null
}, Pa = /* @__PURE__ */ C({
  ...La,
  props: {
    castShadow: { type: Boolean, default: !1 },
    color: { default: 16777215 },
    intensity: { default: 1 },
    position: { default: () => [0, 0, 0] },
    rotation: { default: () => [0, 0, 0] },
    scale: { default: () => [1, 1, 1] }
  },
  setup(r, { expose: n }) {
    const t = r, e = new Kn();
    ue(e), L(t, "position", e), L(t, "rotation", e), L(t, "scale", e);
    function s(i) {
      e.color = new V(i.color), e.intensity = i.intensity, e.castShadow = i.castShadow;
    }
    return s(t), F(
      () => t.color,
      () => s(t)
    ), F(
      () => t.intensity,
      () => s(t)
    ), F(
      () => t.castShadow,
      () => s(t)
    ), n({ three: e }), { props: t, three: e, applyProps: s };
  }
}), Ca = {
  name: "TextureLoader",
  render: () => null
}, Ia = /* @__PURE__ */ C({
  ...Ca,
  props: {
    offset: { default: () => [0, 0] },
    repeat: { default: () => [1, 1] },
    rotation: { default: 0 },
    url: null,
    wrapS: { default: Zt },
    wrapT: { default: Zt }
  },
  setup(r, { expose: n }) {
    const t = r, e = T("material"), s = He(new qt());
    function i() {
      new Wn().loadAsync(t.url).then((a) => {
        s.value = a, wn(t, "offset", s.value), wn(t, "repeat", s.value), "map" in e && (e.map = s.value, e.needsUpdate = !0), o();
      });
    }
    function o() {
      s.value.wrapS = t.wrapS, s.value.wrapT = t.wrapT, s.value.rotation = t.rotation, s.value.needsUpdate = !0;
    }
    return i(), _(t, "url", i), _(t, "wrapS", o), _(t, "wrapT", o), _(t, "rotation", o), n({ three: s }), { props: t, material: e, three: s, load: i, applyProps: o };
  }
});
function Fa(r) {
  r.component("Renderer", Ao), r.component("Scene", Ro), r.component("PerspectiveCamera", Po), r.component("OrthographicCamera", Io), r.component("OrbitControls", Do), r.component("TrackballControls", No), r.component("TransformControls", Zo), r.component("Group", qo), r.component("InstancedMesh", Ko), r.component("Line", Qo), r.component("LineLoop", Wo), r.component("LineSegments", Jo), r.component("Mesh", ei), r.component("Points", ti), r.component("GLTFLoader", Ii), r.component("OBJLoader", Fi), r.component("AxesHelper", Gi), r.component("BoxHelper", zi), r.component("GridHelper", Ui), r.component("BoxGeometry", Xi), r.component("BufferGeometry", Vi), r.component("CircleGeometry", Zi), r.component("ConeGeometry", Ki), r.component("CylinderGeometry", Wi), r.component("EdgesGeometry", ea), r.component("ParametricGeometry", na), r.component("PlaneGeometry", oa), r.component("RingGeometry", aa), r.component("SphereGeometry", ca), r.component("WireframeGeometry", ua), r.component("LineBasicMaterial", ha), r.component("LineDashedMaterial", pa), r.component("MeshBasicMaterial", ga), r.component("MeshLambertMaterial", _a), r.component("PointsMaterial", ba), r.component("MeshNormalMaterial", Ma), r.component("AmbientLight", Ta), r.component("DirectionalLight", xa), r.component("HemisphereLight", Ra), r.component("PointLight", Pa), r.component("TextureLoader", Ia);
}
export {
  Ta as AmbientLight,
  Gi as AxesHelper,
  Xi as BoxGeometry,
  zi as BoxHelper,
  Vi as BufferGeometry,
  Zi as CircleGeometry,
  Ki as ConeGeometry,
  Wi as CylinderGeometry,
  xa as DirectionalLight,
  ea as EdgesGeometry,
  Ii as GLTFLoader,
  Ui as GridHelper,
  qo as Group,
  Ra as HemisphereLight,
  Ko as InstancedMesh,
  Qo as Line,
  ha as LineBasicMaterial,
  pa as LineDashedMaterial,
  Wo as LineLoop,
  Jo as LineSegments,
  ei as Mesh,
  ga as MeshBasicMaterial,
  _a as MeshLambertMaterial,
  Ma as MeshNormalMaterial,
  Fi as OBJLoader,
  Do as OrbitControls,
  Io as OrthographicCamera,
  na as ParametricGeometry,
  Po as PerspectiveCamera,
  oa as PlaneGeometry,
  Pa as PointLight,
  ti as Points,
  ba as PointsMaterial,
  Ao as Renderer,
  aa as RingGeometry,
  Ro as Scene,
  ca as SphereGeometry,
  Ia as TextureLoader,
  No as TrackballControls,
  Zo as TransformControls,
  ua as WireframeGeometry,
  Fa as default,
  Fa as install
};

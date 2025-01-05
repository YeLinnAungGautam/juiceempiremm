(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = s(o);
    fetch(o.href, l);
  }
})();
function ro(e, t) {
  const s = Object.create(null),
    n = e.split(",");
  for (let o = 0; o < n.length; o++) s[n[o]] = !0;
  return t ? (o) => !!s[o.toLowerCase()] : (o) => !!s[o];
}
const xe = {},
  es = [],
  lt = () => {},
  gr = () => !1,
  xr = /^on[^a-z]/,
  ln = (e) => xr.test(e),
  ao = (e) => e.startsWith("onUpdate:"),
  $e = Object.assign,
  co = (e, t) => {
    const s = e.indexOf(t);
    s > -1 && e.splice(s, 1);
  },
  vr = Object.prototype.hasOwnProperty,
  te = (e, t) => vr.call(e, t),
  q = Array.isArray,
  ts = (e) => rn(e) === "[object Map]",
  kl = (e) => rn(e) === "[object Set]",
  Z = (e) => typeof e == "function",
  Ce = (e) => typeof e == "string",
  uo = (e) => typeof e == "symbol",
  _e = (e) => e !== null && typeof e == "object",
  Hl = (e) => _e(e) && Z(e.then) && Z(e.catch),
  Kl = Object.prototype.toString,
  rn = (e) => Kl.call(e),
  _r = (e) => rn(e).slice(8, -1),
  zl = (e) => rn(e) === "[object Object]",
  po = (e) =>
    Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Ws = ro(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  an = (e) => {
    const t = Object.create(null);
    return (s) => t[s] || (t[s] = e(s));
  },
  br = /-(\w)/g,
  gt = an((e) => e.replace(br, (t, s) => (s ? s.toUpperCase() : ""))),
  yr = /\B([A-Z])/g,
  as = an((e) => e.replace(yr, "-$1").toLowerCase()),
  cn = an((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  wn = an((e) => (e ? `on${cn(e)}` : "")),
  Rs = (e, t) => !Object.is(e, t),
  Sn = (e, t) => {
    for (let s = 0; s < e.length; s++) e[s](t);
  },
  Vs = (e, t, s) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: s });
  },
  wr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Fo;
const Dn = () =>
  Fo ||
  (Fo =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function fo(e) {
  if (q(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        o = Ce(n) ? Mr(n) : fo(n);
      if (o) for (const l in o) t[l] = o[l];
    }
    return t;
  } else {
    if (Ce(e)) return e;
    if (_e(e)) return e;
  }
}
const Sr = /;(?![^(]*\))/g,
  Er = /:([^]+)/,
  Ar = /\/\*[^]*?\*\//g;
function Mr(e) {
  const t = {};
  return (
    e
      .replace(Ar, "")
      .split(Sr)
      .forEach((s) => {
        if (s) {
          const n = s.split(Er);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function Gt(e) {
  let t = "";
  if (Ce(e)) t = e;
  else if (q(e))
    for (let s = 0; s < e.length; s++) {
      const n = Gt(e[s]);
      n && (t += n + " ");
    }
  else if (_e(e)) for (const s in e) e[s] && (t += s + " ");
  return t.trim();
}
const Rr =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Cr = ro(Rr);
function Wl(e) {
  return !!e || e === "";
}
const W = (e) =>
    Ce(e)
      ? e
      : e == null
      ? ""
      : q(e) || (_e(e) && (e.toString === Kl || !Z(e.toString)))
      ? JSON.stringify(e, Gl, 2)
      : String(e),
  Gl = (e, t) =>
    t && t.__v_isRef
      ? Gl(e, t.value)
      : ts(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (s, [n, o]) => ((s[`${n} =>`] = o), s),
            {}
          ),
        }
      : kl(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : _e(t) && !q(t) && !zl(t)
      ? String(t)
      : t;
let st;
class Tr {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = st),
      !t && st && (this.index = (st.scopes || (st.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const s = st;
      try {
        return (st = this), t();
      } finally {
        st = s;
      }
    }
  }
  on() {
    st = this;
  }
  off() {
    st = this.parent;
  }
  stop(t) {
    if (this._active) {
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
      for (s = 0, n = this.cleanups.length; s < n; s++) this.cleanups[s]();
      if (this.scopes)
        for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Or(e, t = st) {
  t && t.active && t.effects.push(e);
}
function Pr() {
  return st;
}
const mo = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  ql = (e) => (e.w & $t) > 0,
  Yl = (e) => (e.n & $t) > 0,
  Nr = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= $t;
  },
  Lr = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let s = 0;
      for (let n = 0; n < t.length; n++) {
        const o = t[n];
        ql(o) && !Yl(o) ? o.delete(e) : (t[s++] = o),
          (o.w &= ~$t),
          (o.n &= ~$t);
      }
      t.length = s;
    }
  },
  In = new WeakMap();
let vs = 0,
  $t = 1;
const Fn = 30;
let nt;
const qt = Symbol(""),
  Un = Symbol("");
class ho {
  constructor(t, s = null, n) {
    (this.fn = t),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Or(this, n);
  }
  run() {
    if (!this.active) return this.fn();
    let t = nt,
      s = Nt;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = nt),
        (nt = this),
        (Nt = !0),
        ($t = 1 << ++vs),
        vs <= Fn ? Nr(this) : Uo(this),
        this.fn()
      );
    } finally {
      vs <= Fn && Lr(this),
        ($t = 1 << --vs),
        (nt = this.parent),
        (Nt = s),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    nt === this
      ? (this.deferStop = !0)
      : this.active &&
        (Uo(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Uo(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let s = 0; s < t.length; s++) t[s].delete(e);
    t.length = 0;
  }
}
let Nt = !0;
const Vl = [];
function cs() {
  Vl.push(Nt), (Nt = !1);
}
function us() {
  const e = Vl.pop();
  Nt = e === void 0 ? !0 : e;
}
function ze(e, t, s) {
  if (Nt && nt) {
    let n = In.get(e);
    n || In.set(e, (n = new Map()));
    let o = n.get(s);
    o || n.set(s, (o = mo())), Zl(o);
  }
}
function Zl(e, t) {
  let s = !1;
  vs <= Fn ? Yl(e) || ((e.n |= $t), (s = !ql(e))) : (s = !e.has(nt)),
    s && (e.add(nt), nt.deps.push(e));
}
function yt(e, t, s, n, o, l) {
  const i = In.get(e);
  if (!i) return;
  let r = [];
  if (t === "clear") r = [...i.values()];
  else if (s === "length" && q(e)) {
    const a = Number(n);
    i.forEach((c, u) => {
      (u === "length" || u >= a) && r.push(c);
    });
  } else
    switch ((s !== void 0 && r.push(i.get(s)), t)) {
      case "add":
        q(e)
          ? po(s) && r.push(i.get("length"))
          : (r.push(i.get(qt)), ts(e) && r.push(i.get(Un)));
        break;
      case "delete":
        q(e) || (r.push(i.get(qt)), ts(e) && r.push(i.get(Un)));
        break;
      case "set":
        ts(e) && r.push(i.get(qt));
        break;
    }
  if (r.length === 1) r[0] && jn(r[0]);
  else {
    const a = [];
    for (const c of r) c && a.push(...c);
    jn(mo(a));
  }
}
function jn(e, t) {
  const s = q(e) ? e : [...e];
  for (const n of s) n.computed && jo(n);
  for (const n of s) n.computed || jo(n);
}
function jo(e, t) {
  (e !== nt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const $r = ro("__proto__,__v_isRef,__isVue"),
  Jl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(uo)
  ),
  Br = go(),
  Dr = go(!1, !0),
  Ir = go(!0),
  ko = Fr();
function Fr() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...s) {
        const n = ie(this);
        for (let l = 0, i = this.length; l < i; l++) ze(n, "get", l + "");
        const o = n[t](...s);
        return o === -1 || o === !1 ? n[t](...s.map(ie)) : o;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...s) {
        cs();
        const n = ie(this)[t].apply(this, s);
        return us(), n;
      };
    }),
    e
  );
}
function Ur(e) {
  const t = ie(this);
  return ze(t, "has", e), t.hasOwnProperty(e);
}
function go(e = !1, t = !1) {
  return function (n, o, l) {
    if (o === "__v_isReactive") return !e;
    if (o === "__v_isReadonly") return e;
    if (o === "__v_isShallow") return t;
    if (o === "__v_raw" && l === (e ? (t ? ta : si) : t ? ti : ei).get(n))
      return n;
    const i = q(n);
    if (!e) {
      if (i && te(ko, o)) return Reflect.get(ko, o, l);
      if (o === "hasOwnProperty") return Ur;
    }
    const r = Reflect.get(n, o, l);
    return (uo(o) ? Jl.has(o) : $r(o)) || (e || ze(n, "get", o), t)
      ? r
      : Fe(r)
      ? i && po(o)
        ? r
        : r.value
      : _e(r)
      ? e
        ? oi(r)
        : Ve(r)
      : r;
  };
}
const jr = Xl(),
  kr = Xl(!0);
function Xl(e = !1) {
  return function (s, n, o, l) {
    let i = s[n];
    if (os(i) && Fe(i) && !Fe(o)) return !1;
    if (
      !e &&
      (!Zs(o) && !os(o) && ((i = ie(i)), (o = ie(o))), !q(s) && Fe(i) && !Fe(o))
    )
      return (i.value = o), !0;
    const r = q(s) && po(n) ? Number(n) < s.length : te(s, n),
      a = Reflect.set(s, n, o, l);
    return (
      s === ie(l) && (r ? Rs(o, i) && yt(s, "set", n, o) : yt(s, "add", n, o)),
      a
    );
  };
}
function Hr(e, t) {
  const s = te(e, t);
  e[t];
  const n = Reflect.deleteProperty(e, t);
  return n && s && yt(e, "delete", t, void 0), n;
}
function Kr(e, t) {
  const s = Reflect.has(e, t);
  return (!uo(t) || !Jl.has(t)) && ze(e, "has", t), s;
}
function zr(e) {
  return ze(e, "iterate", q(e) ? "length" : qt), Reflect.ownKeys(e);
}
const Ql = { get: Br, set: jr, deleteProperty: Hr, has: Kr, ownKeys: zr },
  Wr = {
    get: Ir,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Gr = $e({}, Ql, { get: Dr, set: kr }),
  xo = (e) => e,
  un = (e) => Reflect.getPrototypeOf(e);
function Bs(e, t, s = !1, n = !1) {
  e = e.__v_raw;
  const o = ie(e),
    l = ie(t);
  s || (t !== l && ze(o, "get", t), ze(o, "get", l));
  const { has: i } = un(o),
    r = n ? xo : s ? bo : Cs;
  if (i.call(o, t)) return r(e.get(t));
  if (i.call(o, l)) return r(e.get(l));
  e !== o && e.get(t);
}
function Ds(e, t = !1) {
  const s = this.__v_raw,
    n = ie(s),
    o = ie(e);
  return (
    t || (e !== o && ze(n, "has", e), ze(n, "has", o)),
    e === o ? s.has(e) : s.has(e) || s.has(o)
  );
}
function Is(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ze(ie(e), "iterate", qt), Reflect.get(e, "size", e)
  );
}
function Ho(e) {
  e = ie(e);
  const t = ie(this);
  return un(t).has.call(t, e) || (t.add(e), yt(t, "add", e, e)), this;
}
function Ko(e, t) {
  t = ie(t);
  const s = ie(this),
    { has: n, get: o } = un(s);
  let l = n.call(s, e);
  l || ((e = ie(e)), (l = n.call(s, e)));
  const i = o.call(s, e);
  return (
    s.set(e, t), l ? Rs(t, i) && yt(s, "set", e, t) : yt(s, "add", e, t), this
  );
}
function zo(e) {
  const t = ie(this),
    { has: s, get: n } = un(t);
  let o = s.call(t, e);
  o || ((e = ie(e)), (o = s.call(t, e))), n && n.call(t, e);
  const l = t.delete(e);
  return o && yt(t, "delete", e, void 0), l;
}
function Wo() {
  const e = ie(this),
    t = e.size !== 0,
    s = e.clear();
  return t && yt(e, "clear", void 0, void 0), s;
}
function Fs(e, t) {
  return function (n, o) {
    const l = this,
      i = l.__v_raw,
      r = ie(i),
      a = t ? xo : e ? bo : Cs;
    return (
      !e && ze(r, "iterate", qt), i.forEach((c, u) => n.call(o, a(c), a(u), l))
    );
  };
}
function Us(e, t, s) {
  return function (...n) {
    const o = this.__v_raw,
      l = ie(o),
      i = ts(l),
      r = e === "entries" || (e === Symbol.iterator && i),
      a = e === "keys" && i,
      c = o[e](...n),
      u = s ? xo : t ? bo : Cs;
    return (
      !t && ze(l, "iterate", a ? Un : qt),
      {
        next() {
          const { value: f, done: m } = c.next();
          return m
            ? { value: f, done: m }
            : { value: r ? [u(f[0]), u(f[1])] : u(f), done: m };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Mt(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function qr() {
  const e = {
      get(l) {
        return Bs(this, l);
      },
      get size() {
        return Is(this);
      },
      has: Ds,
      add: Ho,
      set: Ko,
      delete: zo,
      clear: Wo,
      forEach: Fs(!1, !1),
    },
    t = {
      get(l) {
        return Bs(this, l, !1, !0);
      },
      get size() {
        return Is(this);
      },
      has: Ds,
      add: Ho,
      set: Ko,
      delete: zo,
      clear: Wo,
      forEach: Fs(!1, !0),
    },
    s = {
      get(l) {
        return Bs(this, l, !0);
      },
      get size() {
        return Is(this, !0);
      },
      has(l) {
        return Ds.call(this, l, !0);
      },
      add: Mt("add"),
      set: Mt("set"),
      delete: Mt("delete"),
      clear: Mt("clear"),
      forEach: Fs(!0, !1),
    },
    n = {
      get(l) {
        return Bs(this, l, !0, !0);
      },
      get size() {
        return Is(this, !0);
      },
      has(l) {
        return Ds.call(this, l, !0);
      },
      add: Mt("add"),
      set: Mt("set"),
      delete: Mt("delete"),
      clear: Mt("clear"),
      forEach: Fs(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
      (e[l] = Us(l, !1, !1)),
        (s[l] = Us(l, !0, !1)),
        (t[l] = Us(l, !1, !0)),
        (n[l] = Us(l, !0, !0));
    }),
    [e, s, t, n]
  );
}
const [Yr, Vr, Zr, Jr] = qr();
function vo(e, t) {
  const s = t ? (e ? Jr : Zr) : e ? Vr : Yr;
  return (n, o, l) =>
    o === "__v_isReactive"
      ? !e
      : o === "__v_isReadonly"
      ? e
      : o === "__v_raw"
      ? n
      : Reflect.get(te(s, o) && o in n ? s : n, o, l);
}
const Xr = { get: vo(!1, !1) },
  Qr = { get: vo(!1, !0) },
  ea = { get: vo(!0, !1) },
  ei = new WeakMap(),
  ti = new WeakMap(),
  si = new WeakMap(),
  ta = new WeakMap();
function sa(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function na(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : sa(_r(e));
}
function Ve(e) {
  return os(e) ? e : _o(e, !1, Ql, Xr, ei);
}
function ni(e) {
  return _o(e, !1, Gr, Qr, ti);
}
function oi(e) {
  return _o(e, !0, Wr, ea, si);
}
function _o(e, t, s, n, o) {
  if (!_e(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const l = o.get(e);
  if (l) return l;
  const i = na(e);
  if (i === 0) return e;
  const r = new Proxy(e, i === 2 ? n : s);
  return o.set(e, r), r;
}
function ss(e) {
  return os(e) ? ss(e.__v_raw) : !!(e && e.__v_isReactive);
}
function os(e) {
  return !!(e && e.__v_isReadonly);
}
function Zs(e) {
  return !!(e && e.__v_isShallow);
}
function li(e) {
  return ss(e) || os(e);
}
function ie(e) {
  const t = e && e.__v_raw;
  return t ? ie(t) : e;
}
function ii(e) {
  return Vs(e, "__v_skip", !0), e;
}
const Cs = (e) => (_e(e) ? Ve(e) : e),
  bo = (e) => (_e(e) ? oi(e) : e);
function ri(e) {
  Nt && nt && ((e = ie(e)), Zl(e.dep || (e.dep = mo())));
}
function ai(e, t) {
  e = ie(e);
  const s = e.dep;
  s && jn(s);
}
function Fe(e) {
  return !!(e && e.__v_isRef === !0);
}
function y(e) {
  return ui(e, !1);
}
function ci(e) {
  return ui(e, !0);
}
function ui(e, t) {
  return Fe(e) ? e : new oa(e, t);
}
class oa {
  constructor(t, s) {
    (this.__v_isShallow = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = s ? t : ie(t)),
      (this._value = s ? t : Cs(t));
  }
  get value() {
    return ri(this), this._value;
  }
  set value(t) {
    const s = this.__v_isShallow || Zs(t) || os(t);
    (t = s ? t : ie(t)),
      Rs(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = s ? t : Cs(t)), ai(this));
  }
}
function D(e) {
  return Fe(e) ? e.value : e;
}
const la = {
  get: (e, t, s) => D(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const o = e[t];
    return Fe(o) && !Fe(s) ? ((o.value = s), !0) : Reflect.set(e, t, s, n);
  },
};
function di(e) {
  return ss(e) ? e : new Proxy(e, la);
}
class ia {
  constructor(t, s, n, o) {
    (this._setter = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new ho(t, () => {
        this._dirty || ((this._dirty = !0), ai(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = n);
  }
  get value() {
    const t = ie(this);
    return (
      ri(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function ra(e, t, s = !1) {
  let n, o;
  const l = Z(e);
  return (
    l ? ((n = e), (o = lt)) : ((n = e.get), (o = e.set)),
    new ia(n, o, l || !o, s)
  );
}
function Lt(e, t, s, n) {
  let o;
  try {
    o = n ? e(...n) : e();
  } catch (l) {
    dn(l, t, s);
  }
  return o;
}
function it(e, t, s, n) {
  if (Z(e)) {
    const l = Lt(e, t, s, n);
    return (
      l &&
        Hl(l) &&
        l.catch((i) => {
          dn(i, t, s);
        }),
      l
    );
  }
  const o = [];
  for (let l = 0; l < e.length; l++) o.push(it(e[l], t, s, n));
  return o;
}
function dn(e, t, s, n = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let l = t.parent;
    const i = t.proxy,
      r = s;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, i, r) === !1) return;
      }
      l = l.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      Lt(a, null, 10, [e, i, r]);
      return;
    }
  }
  aa(e, s, o, n);
}
function aa(e, t, s, n = !0) {
  console.error(e);
}
let Ts = !1,
  kn = !1;
const Ie = [];
let ht = 0;
const ns = [];
let bt = null,
  kt = 0;
const pi = Promise.resolve();
let yo = null;
function pn(e) {
  const t = yo || pi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ca(e) {
  let t = ht + 1,
    s = Ie.length;
  for (; t < s; ) {
    const n = (t + s) >>> 1;
    Os(Ie[n]) < e ? (t = n + 1) : (s = n);
  }
  return t;
}
function wo(e) {
  (!Ie.length || !Ie.includes(e, Ts && e.allowRecurse ? ht + 1 : ht)) &&
    (e.id == null ? Ie.push(e) : Ie.splice(ca(e.id), 0, e), fi());
}
function fi() {
  !Ts && !kn && ((kn = !0), (yo = pi.then(hi)));
}
function ua(e) {
  const t = Ie.indexOf(e);
  t > ht && Ie.splice(t, 1);
}
function da(e) {
  q(e)
    ? ns.push(...e)
    : (!bt || !bt.includes(e, e.allowRecurse ? kt + 1 : kt)) && ns.push(e),
    fi();
}
function Go(e, t = Ts ? ht + 1 : 0) {
  for (; t < Ie.length; t++) {
    const s = Ie[t];
    s && s.pre && (Ie.splice(t, 1), t--, s());
  }
}
function mi(e) {
  if (ns.length) {
    const t = [...new Set(ns)];
    if (((ns.length = 0), bt)) {
      bt.push(...t);
      return;
    }
    for (bt = t, bt.sort((s, n) => Os(s) - Os(n)), kt = 0; kt < bt.length; kt++)
      bt[kt]();
    (bt = null), (kt = 0);
  }
}
const Os = (e) => (e.id == null ? 1 / 0 : e.id),
  pa = (e, t) => {
    const s = Os(e) - Os(t);
    if (s === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return s;
  };
function hi(e) {
  (kn = !1), (Ts = !0), Ie.sort(pa);
  const t = lt;
  try {
    for (ht = 0; ht < Ie.length; ht++) {
      const s = Ie[ht];
      s && s.active !== !1 && Lt(s, null, 14);
    }
  } finally {
    (ht = 0),
      (Ie.length = 0),
      mi(),
      (Ts = !1),
      (yo = null),
      (Ie.length || ns.length) && hi();
  }
}
function fa(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || xe;
  let o = s;
  const l = t.startsWith("update:"),
    i = l && t.slice(7);
  if (i && i in n) {
    const u = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: f, trim: m } = n[u] || xe;
    m && (o = s.map((v) => (Ce(v) ? v.trim() : v))), f && (o = s.map(wr));
  }
  let r,
    a = n[(r = wn(t))] || n[(r = wn(gt(t)))];
  !a && l && (a = n[(r = wn(as(t)))]), a && it(a, e, 6, o);
  const c = n[r + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[r]) return;
    (e.emitted[r] = !0), it(c, e, 6, o);
  }
}
function gi(e, t, s = !1) {
  const n = t.emitsCache,
    o = n.get(e);
  if (o !== void 0) return o;
  const l = e.emits;
  let i = {},
    r = !1;
  if (!Z(e)) {
    const a = (c) => {
      const u = gi(c, t, !0);
      u && ((r = !0), $e(i, u));
    };
    !s && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !l && !r
    ? (_e(e) && n.set(e, null), null)
    : (q(l) ? l.forEach((a) => (i[a] = null)) : $e(i, l),
      _e(e) && n.set(e, i),
      i);
}
function fn(e, t) {
  return !e || !ln(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      te(e, t[0].toLowerCase() + t.slice(1)) || te(e, as(t)) || te(e, t));
}
let Ue = null,
  xi = null;
function Js(e) {
  const t = Ue;
  return (Ue = e), (xi = (e && e.type.__scopeId) || null), t;
}
function L(e, t = Ue, s) {
  if (!t || e._n) return e;
  const n = (...o) => {
    n._d && ol(-1);
    const l = Js(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Js(l), n._d && ol(1);
    }
    return i;
  };
  return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function En(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: o,
    props: l,
    propsOptions: [i],
    slots: r,
    attrs: a,
    emit: c,
    render: u,
    renderCache: f,
    data: m,
    setupState: v,
    ctx: x,
    inheritAttrs: S,
  } = e;
  let N, C;
  const $ = Js(e);
  try {
    if (s.shapeFlag & 4) {
      const I = o || n;
      (N = mt(u.call(I, I, f, l, v, m, x))), (C = a);
    } else {
      const I = t;
      (N = mt(
        I.length > 1 ? I(l, { attrs: a, slots: r, emit: c }) : I(l, null)
      )),
        (C = t.props ? a : ma(a));
    }
  } catch (I) {
    (Es.length = 0), dn(I, e, 1), (N = M(Bt));
  }
  let G = N;
  if (C && S !== !1) {
    const I = Object.keys(C),
      { shapeFlag: ae } = G;
    I.length && ae & 7 && (i && I.some(ao) && (C = ha(C, i)), (G = wt(G, C)));
  }
  return (
    s.dirs && ((G = wt(G)), (G.dirs = G.dirs ? G.dirs.concat(s.dirs) : s.dirs)),
    s.transition && (G.transition = s.transition),
    (N = G),
    Js($),
    N
  );
}
const ma = (e) => {
    let t;
    for (const s in e)
      (s === "class" || s === "style" || ln(s)) && ((t || (t = {}))[s] = e[s]);
    return t;
  },
  ha = (e, t) => {
    const s = {};
    for (const n in e) (!ao(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
    return s;
  };
function ga(e, t, s) {
  const { props: n, children: o, component: l } = e,
    { props: i, children: r, patchFlag: a } = t,
    c = l.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (s && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return n ? qo(n, i, c) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const m = u[f];
        if (i[m] !== n[m] && !fn(c, m)) return !0;
      }
    }
  } else
    return (o || r) && (!r || !r.$stable)
      ? !0
      : n === i
      ? !1
      : n
      ? i
        ? qo(n, i, c)
        : !0
      : !!i;
  return !1;
}
function qo(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < n.length; o++) {
    const l = n[o];
    if (t[l] !== e[l] && !fn(s, l)) return !0;
  }
  return !1;
}
function xa({ vnode: e, parent: t }, s) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = s), (t = t.parent);
}
const va = (e) => e.__isSuspense;
function _a(e, t) {
  t && t.pendingBranch
    ? q(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : da(e);
}
function rt(e, t) {
  return So(e, null, t);
}
const js = {};
function Je(e, t, s) {
  return So(e, t, s);
}
function So(
  e,
  t,
  { immediate: s, deep: n, flush: o, onTrack: l, onTrigger: i } = xe
) {
  var r;
  const a = Pr() === ((r = Be) == null ? void 0 : r.scope) ? Be : null;
  let c,
    u = !1,
    f = !1;
  if (
    (Fe(e)
      ? ((c = () => e.value), (u = Zs(e)))
      : ss(e)
      ? ((c = () => e), (n = !0))
      : q(e)
      ? ((f = !0),
        (u = e.some((I) => ss(I) || Zs(I))),
        (c = () =>
          e.map((I) => {
            if (Fe(I)) return I.value;
            if (ss(I)) return zt(I);
            if (Z(I)) return Lt(I, a, 2);
          })))
      : Z(e)
      ? t
        ? (c = () => Lt(e, a, 2))
        : (c = () => {
            if (!(a && a.isUnmounted)) return m && m(), it(e, a, 3, [v]);
          })
      : (c = lt),
    t && n)
  ) {
    const I = c;
    c = () => zt(I());
  }
  let m,
    v = (I) => {
      m = $.onStop = () => {
        Lt(I, a, 4);
      };
    },
    x;
  if (Ns)
    if (
      ((v = lt),
      t ? s && it(t, a, 3, [c(), f ? [] : void 0, v]) : c(),
      o === "sync")
    ) {
      const I = mc();
      x = I.__watcherHandles || (I.__watcherHandles = []);
    } else return lt;
  let S = f ? new Array(e.length).fill(js) : js;
  const N = () => {
    if ($.active)
      if (t) {
        const I = $.run();
        (n || u || (f ? I.some((ae, oe) => Rs(ae, S[oe])) : Rs(I, S))) &&
          (m && m(),
          it(t, a, 3, [I, S === js ? void 0 : f && S[0] === js ? [] : S, v]),
          (S = I));
      } else $.run();
  };
  N.allowRecurse = !!t;
  let C;
  o === "sync"
    ? (C = N)
    : o === "post"
    ? (C = () => Ke(N, a && a.suspense))
    : ((N.pre = !0), a && (N.id = a.uid), (C = () => wo(N)));
  const $ = new ho(c, C);
  t
    ? s
      ? N()
      : (S = $.run())
    : o === "post"
    ? Ke($.run.bind($), a && a.suspense)
    : $.run();
  const G = () => {
    $.stop(), a && a.scope && co(a.scope.effects, $);
  };
  return x && x.push(G), G;
}
function ba(e, t, s) {
  const n = this.proxy,
    o = Ce(e) ? (e.includes(".") ? vi(n, e) : () => n[e]) : e.bind(n, n);
  let l;
  Z(t) ? (l = t) : ((l = t.handler), (s = t));
  const i = Be;
  ls(this);
  const r = So(o, l.bind(n), s);
  return i ? ls(i) : Yt(), r;
}
function vi(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < s.length && n; o++) n = n[s[o]];
    return n;
  };
}
function zt(e, t) {
  if (!_e(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), Fe(e))) zt(e.value, t);
  else if (q(e)) for (let s = 0; s < e.length; s++) zt(e[s], t);
  else if (kl(e) || ts(e))
    e.forEach((s) => {
      zt(s, t);
    });
  else if (zl(e)) for (const s in e) zt(e[s], t);
  return e;
}
function An(e, t) {
  const s = Ue;
  if (s === null) return e;
  const n = xn(s) || s.proxy,
    o = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [i, r, a, c = xe] = t[l];
    i &&
      (Z(i) && (i = { mounted: i, updated: i }),
      i.deep && zt(r),
      o.push({
        dir: i,
        instance: n,
        value: r,
        oldValue: void 0,
        arg: a,
        modifiers: c,
      }));
  }
  return e;
}
function Ft(e, t, s, n) {
  const o = e.dirs,
    l = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    l && (r.oldValue = l[i].value);
    let a = r.dir[n];
    a && (cs(), it(a, s, 8, [e.el, r, e, t]), us());
  }
}
function We(e, t) {
  return Z(e) ? (() => $e({ name: e.name }, t, { setup: e }))() : e;
}
const ys = (e) => !!e.type.__asyncLoader,
  _i = (e) => e.type.__isKeepAlive;
function ya(e, t) {
  bi(e, "a", t);
}
function wa(e, t) {
  bi(e, "da", t);
}
function bi(e, t, s = Be) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let o = s;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((mn(t, n, s), s)) {
    let o = s.parent;
    for (; o && o.parent; )
      _i(o.parent.vnode) && Sa(n, t, s, o), (o = o.parent);
  }
}
function Sa(e, t, s, n) {
  const o = mn(t, e, n, !0);
  Xe(() => {
    co(n[t], o);
  }, s);
}
function mn(e, t, s = Be, n = !1) {
  if (s) {
    const o = s[e] || (s[e] = []),
      l =
        t.__weh ||
        (t.__weh = (...i) => {
          if (s.isUnmounted) return;
          cs(), ls(s);
          const r = it(t, s, e, i);
          return Yt(), us(), r;
        });
    return n ? o.unshift(l) : o.push(l), l;
  }
}
const St =
    (e) =>
    (t, s = Be) =>
      (!Ns || e === "sp") && mn(e, (...n) => t(...n), s),
  Ea = St("bm"),
  je = St("m"),
  Aa = St("bu"),
  Ma = St("u"),
  Ra = St("bum"),
  Xe = St("um"),
  Ca = St("sp"),
  Ta = St("rtg"),
  Oa = St("rtc");
function Pa(e, t = Be) {
  mn("ec", e, t);
}
const yi = "components";
function Ae(e, t) {
  return La(yi, e, !0, t) || e;
}
const Na = Symbol.for("v-ndc");
function La(e, t, s = !0, n = !1) {
  const o = Ue || Be;
  if (o) {
    const l = o.type;
    if (e === yi) {
      const r = dc(l, !1);
      if (r && (r === t || r === gt(t) || r === cn(gt(t)))) return l;
    }
    const i = Yo(o[e] || l[e], t) || Yo(o.appContext[e], t);
    return !i && n ? l : i;
  }
}
function Yo(e, t) {
  return e && (e[t] || e[gt(t)] || e[cn(gt(t))]);
}
function Ze(e, t, s, n) {
  let o;
  const l = s && s[n];
  if (q(e) || Ce(e)) {
    o = new Array(e.length);
    for (let i = 0, r = e.length; i < r; i++)
      o[i] = t(e[i], i, void 0, l && l[i]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, l && l[i]);
  } else if (_e(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (i, r) => t(i, r, void 0, l && l[r]));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let r = 0, a = i.length; r < a; r++) {
        const c = i[r];
        o[r] = t(e[c], c, r, l && l[r]);
      }
    }
  else o = [];
  return s && (s[n] = o), o;
}
function $a(e, t, s = {}, n, o) {
  if (Ue.isCE || (Ue.parent && ys(Ue.parent) && Ue.parent.isCE))
    return t !== "default" && (s.name = t), M("slot", s, n && n());
  let l = e[t];
  l && l._c && (l._d = !1), z();
  const i = l && wi(l(s)),
    r = Le(
      me,
      { key: s.key || (i && i.key) || `_${t}` },
      i || (n ? n() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !o && r.scopeId && (r.slotScopeIds = [r.scopeId + "-s"]),
    l && l._c && (l._d = !0),
    r
  );
}
function wi(e) {
  return e.some((t) =>
    en(t) ? !(t.type === Bt || (t.type === me && !wi(t.children))) : !0
  )
    ? e
    : null;
}
const Hn = (e) => (e ? (Li(e) ? xn(e) || e.proxy : Hn(e.parent)) : null),
  ws = $e(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Hn(e.parent),
    $root: (e) => Hn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Eo(e),
    $forceUpdate: (e) => e.f || (e.f = () => wo(e.update)),
    $nextTick: (e) => e.n || (e.n = pn.bind(e.proxy)),
    $watch: (e) => ba.bind(e),
  }),
  Mn = (e, t) => e !== xe && !e.__isScriptSetup && te(e, t),
  Ba = {
    get({ _: e }, t) {
      const {
        ctx: s,
        setupState: n,
        data: o,
        props: l,
        accessCache: i,
        type: r,
        appContext: a,
      } = e;
      let c;
      if (t[0] !== "$") {
        const v = i[t];
        if (v !== void 0)
          switch (v) {
            case 1:
              return n[t];
            case 2:
              return o[t];
            case 4:
              return s[t];
            case 3:
              return l[t];
          }
        else {
          if (Mn(n, t)) return (i[t] = 1), n[t];
          if (o !== xe && te(o, t)) return (i[t] = 2), o[t];
          if ((c = e.propsOptions[0]) && te(c, t)) return (i[t] = 3), l[t];
          if (s !== xe && te(s, t)) return (i[t] = 4), s[t];
          Kn && (i[t] = 0);
        }
      }
      const u = ws[t];
      let f, m;
      if (u) return t === "$attrs" && ze(e, "get", t), u(e);
      if ((f = r.__cssModules) && (f = f[t])) return f;
      if (s !== xe && te(s, t)) return (i[t] = 4), s[t];
      if (((m = a.config.globalProperties), te(m, t))) return m[t];
    },
    set({ _: e }, t, s) {
      const { data: n, setupState: o, ctx: l } = e;
      return Mn(o, t)
        ? ((o[t] = s), !0)
        : n !== xe && te(n, t)
        ? ((n[t] = s), !0)
        : te(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((l[t] = s), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: s,
          ctx: n,
          appContext: o,
          propsOptions: l,
        },
      },
      i
    ) {
      let r;
      return (
        !!s[i] ||
        (e !== xe && te(e, i)) ||
        Mn(t, i) ||
        ((r = l[0]) && te(r, i)) ||
        te(n, i) ||
        te(ws, i) ||
        te(o.config.globalProperties, i)
      );
    },
    defineProperty(e, t, s) {
      return (
        s.get != null
          ? (e._.accessCache[t] = 0)
          : te(s, "value") && this.set(e, t, s.value, null),
        Reflect.defineProperty(e, t, s)
      );
    },
  };
function Vo(e) {
  return q(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e;
}
let Kn = !0;
function Da(e) {
  const t = Eo(e),
    s = e.proxy,
    n = e.ctx;
  (Kn = !1), t.beforeCreate && Zo(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: l,
    methods: i,
    watch: r,
    provide: a,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: m,
    beforeUpdate: v,
    updated: x,
    activated: S,
    deactivated: N,
    beforeDestroy: C,
    beforeUnmount: $,
    destroyed: G,
    unmounted: I,
    render: ae,
    renderTracked: oe,
    renderTriggered: ce,
    errorCaptured: he,
    serverPrefetch: ue,
    expose: be,
    inheritAttrs: Se,
    components: Ee,
    directives: re,
    filters: ke,
  } = t;
  if ((c && Ia(c, n, null), i))
    for (const k in i) {
      const K = i[k];
      Z(K) && (n[k] = K.bind(s));
    }
  if (o) {
    const k = o.call(s, s);
    _e(k) && (e.data = Ve(k));
  }
  if (((Kn = !0), l))
    for (const k in l) {
      const K = l[k],
        ve = Z(K) ? K.bind(s, s) : Z(K.get) ? K.get.bind(s, s) : lt,
        ye = !Z(K) && Z(K.set) ? K.set.bind(s) : lt,
        Ne = V({ get: ve, set: ye });
      Object.defineProperty(n, k, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (ne) => (Ne.value = ne),
      });
    }
  if (r) for (const k in r) Si(r[k], n, s, k);
  if (a) {
    const k = Z(a) ? a.call(s) : a;
    Reflect.ownKeys(k).forEach((K) => {
      we(K, k[K]);
    });
  }
  u && Zo(u, e, "c");
  function fe(k, K) {
    q(K) ? K.forEach((ve) => k(ve.bind(s))) : K && k(K.bind(s));
  }
  if (
    (fe(Ea, f),
    fe(je, m),
    fe(Aa, v),
    fe(Ma, x),
    fe(ya, S),
    fe(wa, N),
    fe(Pa, he),
    fe(Oa, oe),
    fe(Ta, ce),
    fe(Ra, $),
    fe(Xe, I),
    fe(Ca, ue),
    q(be))
  )
    if (be.length) {
      const k = e.exposed || (e.exposed = {});
      be.forEach((K) => {
        Object.defineProperty(k, K, {
          get: () => s[K],
          set: (ve) => (s[K] = ve),
        });
      });
    } else e.exposed || (e.exposed = {});
  ae && e.render === lt && (e.render = ae),
    Se != null && (e.inheritAttrs = Se),
    Ee && (e.components = Ee),
    re && (e.directives = re);
}
function Ia(e, t, s = lt) {
  q(e) && (e = zn(e));
  for (const n in e) {
    const o = e[n];
    let l;
    _e(o)
      ? "default" in o
        ? (l = J(o.from || n, o.default, !0))
        : (l = J(o.from || n))
      : (l = J(o)),
      Fe(l)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => l.value,
            set: (i) => (l.value = i),
          })
        : (t[n] = l);
  }
}
function Zo(e, t, s) {
  it(q(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s);
}
function Si(e, t, s, n) {
  const o = n.includes(".") ? vi(s, n) : () => s[n];
  if (Ce(e)) {
    const l = t[e];
    Z(l) && Je(o, l);
  } else if (Z(e)) Je(o, e.bind(s));
  else if (_e(e))
    if (q(e)) e.forEach((l) => Si(l, t, s, n));
    else {
      const l = Z(e.handler) ? e.handler.bind(s) : t[e.handler];
      Z(l) && Je(o, l, e);
    }
}
function Eo(e) {
  const t = e.type,
    { mixins: s, extends: n } = t,
    {
      mixins: o,
      optionsCache: l,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    r = l.get(t);
  let a;
  return (
    r
      ? (a = r)
      : !o.length && !s && !n
      ? (a = t)
      : ((a = {}), o.length && o.forEach((c) => Xs(a, c, i, !0)), Xs(a, t, i)),
    _e(t) && l.set(t, a),
    a
  );
}
function Xs(e, t, s, n = !1) {
  const { mixins: o, extends: l } = t;
  l && Xs(e, l, s, !0), o && o.forEach((i) => Xs(e, i, s, !0));
  for (const i in t)
    if (!(n && i === "expose")) {
      const r = Fa[i] || (s && s[i]);
      e[i] = r ? r(e[i], t[i]) : t[i];
    }
  return e;
}
const Fa = {
  data: Jo,
  props: Xo,
  emits: Xo,
  methods: _s,
  computed: _s,
  beforeCreate: He,
  created: He,
  beforeMount: He,
  mounted: He,
  beforeUpdate: He,
  updated: He,
  beforeDestroy: He,
  beforeUnmount: He,
  destroyed: He,
  unmounted: He,
  activated: He,
  deactivated: He,
  errorCaptured: He,
  serverPrefetch: He,
  components: _s,
  directives: _s,
  watch: ja,
  provide: Jo,
  inject: Ua,
};
function Jo(e, t) {
  return t
    ? e
      ? function () {
          return $e(
            Z(e) ? e.call(this, this) : e,
            Z(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Ua(e, t) {
  return _s(zn(e), zn(t));
}
function zn(e) {
  if (q(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
    return t;
  }
  return e;
}
function He(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function _s(e, t) {
  return e ? $e(Object.create(null), e, t) : t;
}
function Xo(e, t) {
  return e
    ? q(e) && q(t)
      ? [...new Set([...e, ...t])]
      : $e(Object.create(null), Vo(e), Vo(t ?? {}))
    : t;
}
function ja(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = $e(Object.create(null), e);
  for (const n in t) s[n] = He(e[n], t[n]);
  return s;
}
function Ei() {
  return {
    app: null,
    config: {
      isNativeTag: gr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let ka = 0;
function Ha(e, t) {
  return function (n, o = null) {
    Z(n) || (n = $e({}, n)), o != null && !_e(o) && (o = null);
    const l = Ei(),
      i = new Set();
    let r = !1;
    const a = (l.app = {
      _uid: ka++,
      _component: n,
      _props: o,
      _container: null,
      _context: l,
      _instance: null,
      version: hc,
      get config() {
        return l.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          i.has(c) ||
            (c && Z(c.install)
              ? (i.add(c), c.install(a, ...u))
              : Z(c) && (i.add(c), c(a, ...u))),
          a
        );
      },
      mixin(c) {
        return l.mixins.includes(c) || l.mixins.push(c), a;
      },
      component(c, u) {
        return u ? ((l.components[c] = u), a) : l.components[c];
      },
      directive(c, u) {
        return u ? ((l.directives[c] = u), a) : l.directives[c];
      },
      mount(c, u, f) {
        if (!r) {
          const m = M(n, o);
          return (
            (m.appContext = l),
            u && t ? t(m, c) : e(m, c, f),
            (r = !0),
            (a._container = c),
            (c.__vue_app__ = a),
            xn(m.component) || m.component.proxy
          );
        }
      },
      unmount() {
        r && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, u) {
        return (l.provides[c] = u), a;
      },
      runWithContext(c) {
        Qs = a;
        try {
          return c();
        } finally {
          Qs = null;
        }
      },
    });
    return a;
  };
}
let Qs = null;
function we(e, t) {
  if (Be) {
    let s = Be.provides;
    const n = Be.parent && Be.parent.provides;
    n === s && (s = Be.provides = Object.create(n)), (s[e] = t);
  }
}
function J(e, t, s = !1) {
  const n = Be || Ue;
  if (n || Qs) {
    const o = n
      ? n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : Qs._context.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return s && Z(t) ? t.call(n && n.proxy) : t;
  }
}
function Ka(e, t, s, n = !1) {
  const o = {},
    l = {};
  Vs(l, gn, 1), (e.propsDefaults = Object.create(null)), Ai(e, t, o, l);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  s ? (e.props = n ? o : ni(o)) : e.type.props ? (e.props = o) : (e.props = l),
    (e.attrs = l);
}
function za(e, t, s, n) {
  const {
      props: o,
      attrs: l,
      vnode: { patchFlag: i },
    } = e,
    r = ie(o),
    [a] = e.propsOptions;
  let c = !1;
  if ((n || i > 0) && !(i & 16)) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let m = u[f];
        if (fn(e.emitsOptions, m)) continue;
        const v = t[m];
        if (a)
          if (te(l, m)) v !== l[m] && ((l[m] = v), (c = !0));
          else {
            const x = gt(m);
            o[x] = Wn(a, r, x, v, e, !1);
          }
        else v !== l[m] && ((l[m] = v), (c = !0));
      }
    }
  } else {
    Ai(e, t, o, l) && (c = !0);
    let u;
    for (const f in r)
      (!t || (!te(t, f) && ((u = as(f)) === f || !te(t, u)))) &&
        (a
          ? s &&
            (s[f] !== void 0 || s[u] !== void 0) &&
            (o[f] = Wn(a, r, f, void 0, e, !0))
          : delete o[f]);
    if (l !== r)
      for (const f in l) (!t || !te(t, f)) && (delete l[f], (c = !0));
  }
  c && yt(e, "set", "$attrs");
}
function Ai(e, t, s, n) {
  const [o, l] = e.propsOptions;
  let i = !1,
    r;
  if (t)
    for (let a in t) {
      if (Ws(a)) continue;
      const c = t[a];
      let u;
      o && te(o, (u = gt(a)))
        ? !l || !l.includes(u)
          ? (s[u] = c)
          : ((r || (r = {}))[u] = c)
        : fn(e.emitsOptions, a) ||
          ((!(a in n) || c !== n[a]) && ((n[a] = c), (i = !0)));
    }
  if (l) {
    const a = ie(s),
      c = r || xe;
    for (let u = 0; u < l.length; u++) {
      const f = l[u];
      s[f] = Wn(o, a, f, c[f], e, !te(c, f));
    }
  }
  return i;
}
function Wn(e, t, s, n, o, l) {
  const i = e[s];
  if (i != null) {
    const r = te(i, "default");
    if (r && n === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && Z(a)) {
        const { propsDefaults: c } = o;
        s in c ? (n = c[s]) : (ls(o), (n = c[s] = a.call(null, t)), Yt());
      } else n = a;
    }
    i[0] &&
      (l && !r ? (n = !1) : i[1] && (n === "" || n === as(s)) && (n = !0));
  }
  return n;
}
function Mi(e, t, s = !1) {
  const n = t.propsCache,
    o = n.get(e);
  if (o) return o;
  const l = e.props,
    i = {},
    r = [];
  let a = !1;
  if (!Z(e)) {
    const u = (f) => {
      a = !0;
      const [m, v] = Mi(f, t, !0);
      $e(i, m), v && r.push(...v);
    };
    !s && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!l && !a) return _e(e) && n.set(e, es), es;
  if (q(l))
    for (let u = 0; u < l.length; u++) {
      const f = gt(l[u]);
      Qo(f) && (i[f] = xe);
    }
  else if (l)
    for (const u in l) {
      const f = gt(u);
      if (Qo(f)) {
        const m = l[u],
          v = (i[f] = q(m) || Z(m) ? { type: m } : $e({}, m));
        if (v) {
          const x = sl(Boolean, v.type),
            S = sl(String, v.type);
          (v[0] = x > -1),
            (v[1] = S < 0 || x < S),
            (x > -1 || te(v, "default")) && r.push(f);
        }
      }
    }
  const c = [i, r];
  return _e(e) && n.set(e, c), c;
}
function Qo(e) {
  return e[0] !== "$";
}
function el(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function tl(e, t) {
  return el(e) === el(t);
}
function sl(e, t) {
  return q(t) ? t.findIndex((s) => tl(s, e)) : Z(t) && tl(t, e) ? 0 : -1;
}
const Ri = (e) => e[0] === "_" || e === "$stable",
  Ao = (e) => (q(e) ? e.map(mt) : [mt(e)]),
  Wa = (e, t, s) => {
    if (t._n) return t;
    const n = L((...o) => Ao(t(...o)), s);
    return (n._c = !1), n;
  },
  Ci = (e, t, s) => {
    const n = e._ctx;
    for (const o in e) {
      if (Ri(o)) continue;
      const l = e[o];
      if (Z(l)) t[o] = Wa(o, l, n);
      else if (l != null) {
        const i = Ao(l);
        t[o] = () => i;
      }
    }
  },
  Ti = (e, t) => {
    const s = Ao(t);
    e.slots.default = () => s;
  },
  Ga = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? ((e.slots = ie(t)), Vs(t, "_", s)) : Ci(t, (e.slots = {}));
    } else (e.slots = {}), t && Ti(e, t);
    Vs(e.slots, gn, 1);
  },
  qa = (e, t, s) => {
    const { vnode: n, slots: o } = e;
    let l = !0,
      i = xe;
    if (n.shapeFlag & 32) {
      const r = t._;
      r
        ? s && r === 1
          ? (l = !1)
          : ($e(o, t), !s && r === 1 && delete o._)
        : ((l = !t.$stable), Ci(t, o)),
        (i = t);
    } else t && (Ti(e, t), (i = { default: 1 }));
    if (l) for (const r in o) !Ri(r) && !(r in i) && delete o[r];
  };
function Gn(e, t, s, n, o = !1) {
  if (q(e)) {
    e.forEach((m, v) => Gn(m, t && (q(t) ? t[v] : t), s, n, o));
    return;
  }
  if (ys(n) && !o) return;
  const l = n.shapeFlag & 4 ? xn(n.component) || n.component.proxy : n.el,
    i = o ? null : l,
    { i: r, r: a } = e,
    c = t && t.r,
    u = r.refs === xe ? (r.refs = {}) : r.refs,
    f = r.setupState;
  if (
    (c != null &&
      c !== a &&
      (Ce(c)
        ? ((u[c] = null), te(f, c) && (f[c] = null))
        : Fe(c) && (c.value = null)),
    Z(a))
  )
    Lt(a, r, 12, [i, u]);
  else {
    const m = Ce(a),
      v = Fe(a);
    if (m || v) {
      const x = () => {
        if (e.f) {
          const S = m ? (te(f, a) ? f[a] : u[a]) : a.value;
          o
            ? q(S) && co(S, l)
            : q(S)
            ? S.includes(l) || S.push(l)
            : m
            ? ((u[a] = [l]), te(f, a) && (f[a] = u[a]))
            : ((a.value = [l]), e.k && (u[e.k] = a.value));
        } else
          m
            ? ((u[a] = i), te(f, a) && (f[a] = i))
            : v && ((a.value = i), e.k && (u[e.k] = i));
      };
      i ? ((x.id = -1), Ke(x, s)) : x();
    }
  }
}
const Ke = _a;
function Ya(e) {
  return Va(e);
}
function Va(e, t) {
  const s = Dn();
  s.__VUE__ = !0;
  const {
      insert: n,
      remove: o,
      patchProp: l,
      createElement: i,
      createText: r,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: m,
      setScopeId: v = lt,
      insertStaticContent: x,
    } = e,
    S = (
      p,
      h,
      g,
      _ = null,
      b = null,
      E = null,
      P = !1,
      R = null,
      T = !!h.dynamicChildren
    ) => {
      if (p === h) return;
      p && !fs(p, h) && ((_ = w(p)), ne(p, b, E, !0), (p = null)),
        h.patchFlag === -2 && ((T = !1), (h.dynamicChildren = null));
      const { type: A, ref: U, shapeFlag: F } = h;
      switch (A) {
        case hn:
          N(p, h, g, _);
          break;
        case Bt:
          C(p, h, g, _);
          break;
        case Gs:
          p == null && $(h, g, _, P);
          break;
        case me:
          Ee(p, h, g, _, b, E, P, R, T);
          break;
        default:
          F & 1
            ? ae(p, h, g, _, b, E, P, R, T)
            : F & 6
            ? re(p, h, g, _, b, E, P, R, T)
            : (F & 64 || F & 128) && A.process(p, h, g, _, b, E, P, R, T, O);
      }
      U != null && b && Gn(U, p && p.ref, E, h || p, !h);
    },
    N = (p, h, g, _) => {
      if (p == null) n((h.el = r(h.children)), g, _);
      else {
        const b = (h.el = p.el);
        h.children !== p.children && c(b, h.children);
      }
    },
    C = (p, h, g, _) => {
      p == null ? n((h.el = a(h.children || "")), g, _) : (h.el = p.el);
    },
    $ = (p, h, g, _) => {
      [p.el, p.anchor] = x(p.children, h, g, _, p.el, p.anchor);
    },
    G = ({ el: p, anchor: h }, g, _) => {
      let b;
      for (; p && p !== h; ) (b = m(p)), n(p, g, _), (p = b);
      n(h, g, _);
    },
    I = ({ el: p, anchor: h }) => {
      let g;
      for (; p && p !== h; ) (g = m(p)), o(p), (p = g);
      o(h);
    },
    ae = (p, h, g, _, b, E, P, R, T) => {
      (P = P || h.type === "svg"),
        p == null ? oe(h, g, _, b, E, P, R, T) : ue(p, h, b, E, P, R, T);
    },
    oe = (p, h, g, _, b, E, P, R) => {
      let T, A;
      const { type: U, props: F, shapeFlag: H, transition: Y, dirs: Q } = p;
      if (
        ((T = p.el = i(p.type, E, F && F.is, F)),
        H & 8
          ? u(T, p.children)
          : H & 16 &&
            he(p.children, T, null, _, b, E && U !== "foreignObject", P, R),
        Q && Ft(p, null, _, "created"),
        ce(T, p, p.scopeId, P, _),
        F)
      ) {
        for (const pe in F)
          pe !== "value" &&
            !Ws(pe) &&
            l(T, pe, null, F[pe], E, p.children, _, b, Te);
        "value" in F && l(T, "value", null, F.value),
          (A = F.onVnodeBeforeMount) && ft(A, _, p);
      }
      Q && Ft(p, null, _, "beforeMount");
      const ge = (!b || (b && !b.pendingBranch)) && Y && !Y.persisted;
      ge && Y.beforeEnter(T),
        n(T, h, g),
        ((A = F && F.onVnodeMounted) || ge || Q) &&
          Ke(() => {
            A && ft(A, _, p), ge && Y.enter(T), Q && Ft(p, null, _, "mounted");
          }, b);
    },
    ce = (p, h, g, _, b) => {
      if ((g && v(p, g), _)) for (let E = 0; E < _.length; E++) v(p, _[E]);
      if (b) {
        let E = b.subTree;
        if (h === E) {
          const P = b.vnode;
          ce(p, P, P.scopeId, P.slotScopeIds, b.parent);
        }
      }
    },
    he = (p, h, g, _, b, E, P, R, T = 0) => {
      for (let A = T; A < p.length; A++) {
        const U = (p[A] = R ? Ct(p[A]) : mt(p[A]));
        S(null, U, h, g, _, b, E, P, R);
      }
    },
    ue = (p, h, g, _, b, E, P) => {
      const R = (h.el = p.el);
      let { patchFlag: T, dynamicChildren: A, dirs: U } = h;
      T |= p.patchFlag & 16;
      const F = p.props || xe,
        H = h.props || xe;
      let Y;
      g && Ut(g, !1),
        (Y = H.onVnodeBeforeUpdate) && ft(Y, g, h, p),
        U && Ft(h, p, g, "beforeUpdate"),
        g && Ut(g, !0);
      const Q = b && h.type !== "foreignObject";
      if (
        (A
          ? be(p.dynamicChildren, A, R, g, _, Q, E)
          : P || K(p, h, R, null, g, _, Q, E, !1),
        T > 0)
      ) {
        if (T & 16) Se(R, h, F, H, g, _, b);
        else if (
          (T & 2 && F.class !== H.class && l(R, "class", null, H.class, b),
          T & 4 && l(R, "style", F.style, H.style, b),
          T & 8)
        ) {
          const ge = h.dynamicProps;
          for (let pe = 0; pe < ge.length; pe++) {
            const Me = ge[pe],
              tt = F[Me],
              Zt = H[Me];
            (Zt !== tt || Me === "value") &&
              l(R, Me, tt, Zt, b, p.children, g, _, Te);
          }
        }
        T & 1 && p.children !== h.children && u(R, h.children);
      } else !P && A == null && Se(R, h, F, H, g, _, b);
      ((Y = H.onVnodeUpdated) || U) &&
        Ke(() => {
          Y && ft(Y, g, h, p), U && Ft(h, p, g, "updated");
        }, _);
    },
    be = (p, h, g, _, b, E, P) => {
      for (let R = 0; R < h.length; R++) {
        const T = p[R],
          A = h[R],
          U =
            T.el && (T.type === me || !fs(T, A) || T.shapeFlag & 70)
              ? f(T.el)
              : g;
        S(T, A, U, null, _, b, E, P, !0);
      }
    },
    Se = (p, h, g, _, b, E, P) => {
      if (g !== _) {
        if (g !== xe)
          for (const R in g)
            !Ws(R) && !(R in _) && l(p, R, g[R], null, P, h.children, b, E, Te);
        for (const R in _) {
          if (Ws(R)) continue;
          const T = _[R],
            A = g[R];
          T !== A && R !== "value" && l(p, R, A, T, P, h.children, b, E, Te);
        }
        "value" in _ && l(p, "value", g.value, _.value);
      }
    },
    Ee = (p, h, g, _, b, E, P, R, T) => {
      const A = (h.el = p ? p.el : r("")),
        U = (h.anchor = p ? p.anchor : r(""));
      let { patchFlag: F, dynamicChildren: H, slotScopeIds: Y } = h;
      Y && (R = R ? R.concat(Y) : Y),
        p == null
          ? (n(A, g, _), n(U, g, _), he(h.children, g, U, b, E, P, R, T))
          : F > 0 && F & 64 && H && p.dynamicChildren
          ? (be(p.dynamicChildren, H, g, b, E, P, R),
            (h.key != null || (b && h === b.subTree)) && Mo(p, h, !0))
          : K(p, h, g, U, b, E, P, R, T);
    },
    re = (p, h, g, _, b, E, P, R, T) => {
      (h.slotScopeIds = R),
        p == null
          ? h.shapeFlag & 512
            ? b.ctx.activate(h, g, _, P, T)
            : ke(h, g, _, b, E, P, T)
          : Pe(p, h, T);
    },
    ke = (p, h, g, _, b, E, P) => {
      const R = (p.component = ic(p, _, b));
      if ((_i(p) && (R.ctx.renderer = O), rc(R), R.asyncDep)) {
        if ((b && b.registerDep(R, fe), !p.el)) {
          const T = (R.subTree = M(Bt));
          C(null, T, h, g);
        }
        return;
      }
      fe(R, p, h, g, b, E, P);
    },
    Pe = (p, h, g) => {
      const _ = (h.component = p.component);
      if (ga(p, h, g))
        if (_.asyncDep && !_.asyncResolved) {
          k(_, h, g);
          return;
        } else (_.next = h), ua(_.update), _.update();
      else (h.el = p.el), (_.vnode = h);
    },
    fe = (p, h, g, _, b, E, P) => {
      const R = () => {
          if (p.isMounted) {
            let { next: U, bu: F, u: H, parent: Y, vnode: Q } = p,
              ge = U,
              pe;
            Ut(p, !1),
              U ? ((U.el = Q.el), k(p, U, P)) : (U = Q),
              F && Sn(F),
              (pe = U.props && U.props.onVnodeBeforeUpdate) && ft(pe, Y, U, Q),
              Ut(p, !0);
            const Me = En(p),
              tt = p.subTree;
            (p.subTree = Me),
              S(tt, Me, f(tt.el), w(tt), p, b, E),
              (U.el = Me.el),
              ge === null && xa(p, Me.el),
              H && Ke(H, b),
              (pe = U.props && U.props.onVnodeUpdated) &&
                Ke(() => ft(pe, Y, U, Q), b);
          } else {
            let U;
            const { el: F, props: H } = h,
              { bm: Y, m: Q, parent: ge } = p,
              pe = ys(h);
            if (
              (Ut(p, !1),
              Y && Sn(Y),
              !pe && (U = H && H.onVnodeBeforeMount) && ft(U, ge, h),
              Ut(p, !0),
              F && ee)
            ) {
              const Me = () => {
                (p.subTree = En(p)), ee(F, p.subTree, p, b, null);
              };
              pe
                ? h.type.__asyncLoader().then(() => !p.isUnmounted && Me())
                : Me();
            } else {
              const Me = (p.subTree = En(p));
              S(null, Me, g, _, p, b, E), (h.el = Me.el);
            }
            if ((Q && Ke(Q, b), !pe && (U = H && H.onVnodeMounted))) {
              const Me = h;
              Ke(() => ft(U, ge, Me), b);
            }
            (h.shapeFlag & 256 ||
              (ge && ys(ge.vnode) && ge.vnode.shapeFlag & 256)) &&
              p.a &&
              Ke(p.a, b),
              (p.isMounted = !0),
              (h = g = _ = null);
          }
        },
        T = (p.effect = new ho(R, () => wo(A), p.scope)),
        A = (p.update = () => T.run());
      (A.id = p.uid), Ut(p, !0), A();
    },
    k = (p, h, g) => {
      h.component = p;
      const _ = p.vnode.props;
      (p.vnode = h),
        (p.next = null),
        za(p, h.props, _, g),
        qa(p, h.children, g),
        cs(),
        Go(),
        us();
    },
    K = (p, h, g, _, b, E, P, R, T = !1) => {
      const A = p && p.children,
        U = p ? p.shapeFlag : 0,
        F = h.children,
        { patchFlag: H, shapeFlag: Y } = h;
      if (H > 0) {
        if (H & 128) {
          ye(A, F, g, _, b, E, P, R, T);
          return;
        } else if (H & 256) {
          ve(A, F, g, _, b, E, P, R, T);
          return;
        }
      }
      Y & 8
        ? (U & 16 && Te(A, b, E), F !== A && u(g, F))
        : U & 16
        ? Y & 16
          ? ye(A, F, g, _, b, E, P, R, T)
          : Te(A, b, E, !0)
        : (U & 8 && u(g, ""), Y & 16 && he(F, g, _, b, E, P, R, T));
    },
    ve = (p, h, g, _, b, E, P, R, T) => {
      (p = p || es), (h = h || es);
      const A = p.length,
        U = h.length,
        F = Math.min(A, U);
      let H;
      for (H = 0; H < F; H++) {
        const Y = (h[H] = T ? Ct(h[H]) : mt(h[H]));
        S(p[H], Y, g, null, b, E, P, R, T);
      }
      A > U ? Te(p, b, E, !0, !1, F) : he(h, g, _, b, E, P, R, T, F);
    },
    ye = (p, h, g, _, b, E, P, R, T) => {
      let A = 0;
      const U = h.length;
      let F = p.length - 1,
        H = U - 1;
      for (; A <= F && A <= H; ) {
        const Y = p[A],
          Q = (h[A] = T ? Ct(h[A]) : mt(h[A]));
        if (fs(Y, Q)) S(Y, Q, g, null, b, E, P, R, T);
        else break;
        A++;
      }
      for (; A <= F && A <= H; ) {
        const Y = p[F],
          Q = (h[H] = T ? Ct(h[H]) : mt(h[H]));
        if (fs(Y, Q)) S(Y, Q, g, null, b, E, P, R, T);
        else break;
        F--, H--;
      }
      if (A > F) {
        if (A <= H) {
          const Y = H + 1,
            Q = Y < U ? h[Y].el : _;
          for (; A <= H; )
            S(null, (h[A] = T ? Ct(h[A]) : mt(h[A])), g, Q, b, E, P, R, T), A++;
        }
      } else if (A > H) for (; A <= F; ) ne(p[A], b, E, !0), A++;
      else {
        const Y = A,
          Q = A,
          ge = new Map();
        for (A = Q; A <= H; A++) {
          const qe = (h[A] = T ? Ct(h[A]) : mt(h[A]));
          qe.key != null && ge.set(qe.key, A);
        }
        let pe,
          Me = 0;
        const tt = H - Q + 1;
        let Zt = !1,
          Bo = 0;
        const ps = new Array(tt);
        for (A = 0; A < tt; A++) ps[A] = 0;
        for (A = Y; A <= F; A++) {
          const qe = p[A];
          if (Me >= tt) {
            ne(qe, b, E, !0);
            continue;
          }
          let pt;
          if (qe.key != null) pt = ge.get(qe.key);
          else
            for (pe = Q; pe <= H; pe++)
              if (ps[pe - Q] === 0 && fs(qe, h[pe])) {
                pt = pe;
                break;
              }
          pt === void 0
            ? ne(qe, b, E, !0)
            : ((ps[pt - Q] = A + 1),
              pt >= Bo ? (Bo = pt) : (Zt = !0),
              S(qe, h[pt], g, null, b, E, P, R, T),
              Me++);
        }
        const Do = Zt ? Za(ps) : es;
        for (pe = Do.length - 1, A = tt - 1; A >= 0; A--) {
          const qe = Q + A,
            pt = h[qe],
            Io = qe + 1 < U ? h[qe + 1].el : _;
          ps[A] === 0
            ? S(null, pt, g, Io, b, E, P, R, T)
            : Zt && (pe < 0 || A !== Do[pe] ? Ne(pt, g, Io, 2) : pe--);
        }
      }
    },
    Ne = (p, h, g, _, b = null) => {
      const { el: E, type: P, transition: R, children: T, shapeFlag: A } = p;
      if (A & 6) {
        Ne(p.component.subTree, h, g, _);
        return;
      }
      if (A & 128) {
        p.suspense.move(h, g, _);
        return;
      }
      if (A & 64) {
        P.move(p, h, g, O);
        return;
      }
      if (P === me) {
        n(E, h, g);
        for (let F = 0; F < T.length; F++) Ne(T[F], h, g, _);
        n(p.anchor, h, g);
        return;
      }
      if (P === Gs) {
        G(p, h, g);
        return;
      }
      if (_ !== 2 && A & 1 && R)
        if (_ === 0) R.beforeEnter(E), n(E, h, g), Ke(() => R.enter(E), b);
        else {
          const { leave: F, delayLeave: H, afterLeave: Y } = R,
            Q = () => n(E, h, g),
            ge = () => {
              F(E, () => {
                Q(), Y && Y();
              });
            };
          H ? H(E, Q, ge) : ge();
        }
      else n(E, h, g);
    },
    ne = (p, h, g, _ = !1, b = !1) => {
      const {
        type: E,
        props: P,
        ref: R,
        children: T,
        dynamicChildren: A,
        shapeFlag: U,
        patchFlag: F,
        dirs: H,
      } = p;
      if ((R != null && Gn(R, null, g, p, !0), U & 256)) {
        h.ctx.deactivate(p);
        return;
      }
      const Y = U & 1 && H,
        Q = !ys(p);
      let ge;
      if ((Q && (ge = P && P.onVnodeBeforeUnmount) && ft(ge, h, p), U & 6))
        At(p.component, g, _);
      else {
        if (U & 128) {
          p.suspense.unmount(g, _);
          return;
        }
        Y && Ft(p, null, h, "beforeUnmount"),
          U & 64
            ? p.type.remove(p, h, g, b, O, _)
            : A && (E !== me || (F > 0 && F & 64))
            ? Te(A, h, g, !1, !0)
            : ((E === me && F & 384) || (!b && U & 16)) && Te(T, h, g),
          _ && De(p);
      }
      ((Q && (ge = P && P.onVnodeUnmounted)) || Y) &&
        Ke(() => {
          ge && ft(ge, h, p), Y && Ft(p, null, h, "unmounted");
        }, g);
    },
    De = (p) => {
      const { type: h, el: g, anchor: _, transition: b } = p;
      if (h === me) {
        Ge(g, _);
        return;
      }
      if (h === Gs) {
        I(p);
        return;
      }
      const E = () => {
        o(g), b && !b.persisted && b.afterLeave && b.afterLeave();
      };
      if (p.shapeFlag & 1 && b && !b.persisted) {
        const { leave: P, delayLeave: R } = b,
          T = () => P(g, E);
        R ? R(p.el, E, T) : T();
      } else E();
    },
    Ge = (p, h) => {
      let g;
      for (; p !== h; ) (g = m(p)), o(p), (p = g);
      o(h);
    },
    At = (p, h, g) => {
      const { bum: _, scope: b, update: E, subTree: P, um: R } = p;
      _ && Sn(_),
        b.stop(),
        E && ((E.active = !1), ne(P, p, h, g)),
        R && Ke(R, h),
        Ke(() => {
          p.isUnmounted = !0;
        }, h),
        h &&
          h.pendingBranch &&
          !h.isUnmounted &&
          p.asyncDep &&
          !p.asyncResolved &&
          p.suspenseId === h.pendingId &&
          (h.deps--, h.deps === 0 && h.resolve());
    },
    Te = (p, h, g, _ = !1, b = !1, E = 0) => {
      for (let P = E; P < p.length; P++) ne(p[P], h, g, _, b);
    },
    w = (p) =>
      p.shapeFlag & 6
        ? w(p.component.subTree)
        : p.shapeFlag & 128
        ? p.suspense.next()
        : m(p.anchor || p.el),
    B = (p, h, g) => {
      p == null
        ? h._vnode && ne(h._vnode, null, null, !0)
        : S(h._vnode || null, p, h, null, null, null, g),
        Go(),
        mi(),
        (h._vnode = p);
    },
    O = {
      p: S,
      um: ne,
      m: Ne,
      r: De,
      mt: ke,
      mc: he,
      pc: K,
      pbc: be,
      n: w,
      o: e,
    };
  let j, ee;
  return t && ([j, ee] = t(O)), { render: B, hydrate: j, createApp: Ha(B, j) };
}
function Ut({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s;
}
function Mo(e, t, s = !1) {
  const n = e.children,
    o = t.children;
  if (q(n) && q(o))
    for (let l = 0; l < n.length; l++) {
      const i = n[l];
      let r = o[l];
      r.shapeFlag & 1 &&
        !r.dynamicChildren &&
        ((r.patchFlag <= 0 || r.patchFlag === 32) &&
          ((r = o[l] = Ct(o[l])), (r.el = i.el)),
        s || Mo(i, r)),
        r.type === hn && (r.el = i.el);
    }
}
function Za(e) {
  const t = e.slice(),
    s = [0];
  let n, o, l, i, r;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const c = e[n];
    if (c !== 0) {
      if (((o = s[s.length - 1]), e[o] < c)) {
        (t[n] = o), s.push(n);
        continue;
      }
      for (l = 0, i = s.length - 1; l < i; )
        (r = (l + i) >> 1), e[s[r]] < c ? (l = r + 1) : (i = r);
      c < e[s[l]] && (l > 0 && (t[n] = s[l - 1]), (s[l] = n));
    }
  }
  for (l = s.length, i = s[l - 1]; l-- > 0; ) (s[l] = i), (i = t[i]);
  return s;
}
const Ja = (e) => e.__isTeleport,
  Ss = (e) => e && (e.disabled || e.disabled === ""),
  nl = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  qn = (e, t) => {
    const s = e && e.to;
    return Ce(s) ? (t ? t(s) : null) : s;
  },
  Xa = {
    __isTeleport: !0,
    process(e, t, s, n, o, l, i, r, a, c) {
      const {
          mc: u,
          pc: f,
          pbc: m,
          o: { insert: v, querySelector: x, createText: S, createComment: N },
        } = c,
        C = Ss(t.props);
      let { shapeFlag: $, children: G, dynamicChildren: I } = t;
      if (e == null) {
        const ae = (t.el = S("")),
          oe = (t.anchor = S(""));
        v(ae, s, n), v(oe, s, n);
        const ce = (t.target = qn(t.props, x)),
          he = (t.targetAnchor = S(""));
        ce && (v(he, ce), (i = i || nl(ce)));
        const ue = (be, Se) => {
          $ & 16 && u(G, be, Se, o, l, i, r, a);
        };
        C ? ue(s, oe) : ce && ue(ce, he);
      } else {
        t.el = e.el;
        const ae = (t.anchor = e.anchor),
          oe = (t.target = e.target),
          ce = (t.targetAnchor = e.targetAnchor),
          he = Ss(e.props),
          ue = he ? s : oe,
          be = he ? ae : ce;
        if (
          ((i = i || nl(oe)),
          I
            ? (m(e.dynamicChildren, I, ue, o, l, i, r), Mo(e, t, !0))
            : a || f(e, t, ue, be, o, l, i, r, !1),
          C)
        )
          he || ks(t, s, ae, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const Se = (t.target = qn(t.props, x));
          Se && ks(t, Se, null, c, 0);
        } else he && ks(t, oe, ce, c, 1);
      }
      Oi(t);
    },
    remove(e, t, s, n, { um: o, o: { remove: l } }, i) {
      const {
        shapeFlag: r,
        children: a,
        anchor: c,
        targetAnchor: u,
        target: f,
        props: m,
      } = e;
      if ((f && l(u), (i || !Ss(m)) && (l(c), r & 16)))
        for (let v = 0; v < a.length; v++) {
          const x = a[v];
          o(x, t, s, !0, !!x.dynamicChildren);
        }
    },
    move: ks,
    hydrate: Qa,
  };
function ks(e, t, s, { o: { insert: n }, m: o }, l = 2) {
  l === 0 && n(e.targetAnchor, t, s);
  const { el: i, anchor: r, shapeFlag: a, children: c, props: u } = e,
    f = l === 2;
  if ((f && n(i, t, s), (!f || Ss(u)) && a & 16))
    for (let m = 0; m < c.length; m++) o(c[m], t, s, 2);
  f && n(r, t, s);
}
function Qa(
  e,
  t,
  s,
  n,
  o,
  l,
  { o: { nextSibling: i, parentNode: r, querySelector: a } },
  c
) {
  const u = (t.target = qn(t.props, a));
  if (u) {
    const f = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Ss(t.props))
        (t.anchor = c(i(e), t, r(e), s, n, o, l)), (t.targetAnchor = f);
      else {
        t.anchor = i(e);
        let m = f;
        for (; m; )
          if (
            ((m = i(m)), m && m.nodeType === 8 && m.data === "teleport anchor")
          ) {
            (t.targetAnchor = m),
              (u._lpa = t.targetAnchor && i(t.targetAnchor));
            break;
          }
        c(f, t, u, s, n, o, l);
      }
    Oi(t);
  }
  return t.anchor && i(t.anchor);
}
const ec = Xa;
function Oi(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let s = e.children[0].el;
    for (; s !== e.targetAnchor; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", t.uid),
        (s = s.nextSibling);
    t.ut();
  }
}
const me = Symbol.for("v-fgt"),
  hn = Symbol.for("v-txt"),
  Bt = Symbol.for("v-cmt"),
  Gs = Symbol.for("v-stc"),
  Es = [];
let ot = null;
function z(e = !1) {
  Es.push((ot = e ? null : []));
}
function tc() {
  Es.pop(), (ot = Es[Es.length - 1] || null);
}
let Ps = 1;
function ol(e) {
  Ps += e;
}
function Pi(e) {
  return (
    (e.dynamicChildren = Ps > 0 ? ot || es : null),
    tc(),
    Ps > 0 && ot && ot.push(e),
    e
  );
}
function le(e, t, s, n, o, l) {
  return Pi(d(e, t, s, n, o, l, !0));
}
function Le(e, t, s, n, o) {
  return Pi(M(e, t, s, n, o, !0));
}
function en(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function fs(e, t) {
  return e.type === t.type && e.key === t.key;
}
const gn = "__vInternal",
  Ni = ({ key: e }) => e ?? null,
  qs = ({ ref: e, ref_key: t, ref_for: s }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Ce(e) || Fe(e) || Z(e)
        ? { i: Ue, r: e, k: t, f: !!s }
        : e
      : null
  );
function d(
  e,
  t = null,
  s = null,
  n = 0,
  o = null,
  l = e === me ? 0 : 1,
  i = !1,
  r = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ni(t),
    ref: t && qs(t),
    scopeId: xi,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: l,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ue,
  };
  return (
    r
      ? (Ro(a, s), l & 128 && e.normalize(a))
      : s && (a.shapeFlag |= Ce(s) ? 8 : 16),
    Ps > 0 &&
      !i &&
      ot &&
      (a.patchFlag > 0 || l & 6) &&
      a.patchFlag !== 32 &&
      ot.push(a),
    a
  );
}
const M = sc;
function sc(e, t = null, s = null, n = 0, o = null, l = !1) {
  if (((!e || e === Na) && (e = Bt), en(e))) {
    const r = wt(e, t, !0);
    return (
      s && Ro(r, s),
      Ps > 0 &&
        !l &&
        ot &&
        (r.shapeFlag & 6 ? (ot[ot.indexOf(e)] = r) : ot.push(r)),
      (r.patchFlag |= -2),
      r
    );
  }
  if ((pc(e) && (e = e.__vccOpts), t)) {
    t = nc(t);
    let { class: r, style: a } = t;
    r && !Ce(r) && (t.class = Gt(r)),
      _e(a) && (li(a) && !q(a) && (a = $e({}, a)), (t.style = fo(a)));
  }
  const i = Ce(e) ? 1 : va(e) ? 128 : Ja(e) ? 64 : _e(e) ? 4 : Z(e) ? 2 : 0;
  return d(e, t, s, n, o, i, l, !0);
}
function nc(e) {
  return e ? (li(e) || gn in e ? $e({}, e) : e) : null;
}
function wt(e, t, s = !1) {
  const { props: n, ref: o, patchFlag: l, children: i } = e,
    r = t ? ct(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: r,
    key: r && Ni(r),
    ref:
      t && t.ref ? (s && o ? (q(o) ? o.concat(qs(t)) : [o, qs(t)]) : qs(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== me ? (l === -1 ? 16 : l | 16) : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && wt(e.ssContent),
    ssFallback: e.ssFallback && wt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function X(e = " ", t = 0) {
  return M(hn, null, e, t);
}
function Dt(e, t) {
  const s = M(Gs, null, e);
  return (s.staticCount = t), s;
}
function Jt(e = "", t = !1) {
  return t ? (z(), Le(Bt, null, e)) : M(Bt, null, e);
}
function mt(e) {
  return e == null || typeof e == "boolean"
    ? M(Bt)
    : q(e)
    ? M(me, null, e.slice())
    : typeof e == "object"
    ? Ct(e)
    : M(hn, null, String(e));
}
function Ct(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : wt(e);
}
function Ro(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null) t = null;
  else if (q(t)) s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ro(e, o()), o._c && (o._d = !0));
      return;
    } else {
      s = 32;
      const o = t._;
      !o && !(gn in t)
        ? (t._ctx = Ue)
        : o === 3 &&
          Ue &&
          (Ue.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    Z(t)
      ? ((t = { default: t, _ctx: Ue }), (s = 32))
      : ((t = String(t)), n & 64 ? ((s = 16), (t = [X(t)])) : (s = 8));
  (e.children = t), (e.shapeFlag |= s);
}
function ct(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = Gt([t.class, n.class]));
      else if (o === "style") t.style = fo([t.style, n.style]);
      else if (ln(o)) {
        const l = t[o],
          i = n[o];
        i &&
          l !== i &&
          !(q(l) && l.includes(i)) &&
          (t[o] = l ? [].concat(l, i) : i);
      } else o !== "" && (t[o] = n[o]);
  }
  return t;
}
function ft(e, t, s, n = null) {
  it(e, t, 7, [s, n]);
}
const oc = Ei();
let lc = 0;
function ic(e, t, s) {
  const n = e.type,
    o = (t ? t.appContext : e.appContext) || oc,
    l = {
      uid: lc++,
      vnode: e,
      type: n,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Tr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Mi(n, o),
      emitsOptions: gi(n, o),
      emit: null,
      emitted: null,
      propsDefaults: xe,
      inheritAttrs: n.inheritAttrs,
      ctx: xe,
      data: xe,
      props: xe,
      attrs: xe,
      slots: xe,
      refs: xe,
      setupState: xe,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (l.ctx = { _: l }),
    (l.root = t ? t.root : l),
    (l.emit = fa.bind(null, l)),
    e.ce && e.ce(l),
    l
  );
}
let Be = null,
  Co,
  Xt,
  ll = "__VUE_INSTANCE_SETTERS__";
(Xt = Dn()[ll]) || (Xt = Dn()[ll] = []),
  Xt.push((e) => (Be = e)),
  (Co = (e) => {
    Xt.length > 1 ? Xt.forEach((t) => t(e)) : Xt[0](e);
  });
const ls = (e) => {
    Co(e), e.scope.on();
  },
  Yt = () => {
    Be && Be.scope.off(), Co(null);
  };
function Li(e) {
  return e.vnode.shapeFlag & 4;
}
let Ns = !1;
function rc(e, t = !1) {
  Ns = t;
  const { props: s, children: n } = e.vnode,
    o = Li(e);
  Ka(e, s, o, t), Ga(e, n);
  const l = o ? ac(e, t) : void 0;
  return (Ns = !1), l;
}
function ac(e, t) {
  const s = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = ii(new Proxy(e.ctx, Ba)));
  const { setup: n } = s;
  if (n) {
    const o = (e.setupContext = n.length > 1 ? uc(e) : null);
    ls(e), cs();
    const l = Lt(n, e, 0, [e.props, o]);
    if ((us(), Yt(), Hl(l))) {
      if ((l.then(Yt, Yt), t))
        return l
          .then((i) => {
            il(e, i, t);
          })
          .catch((i) => {
            dn(i, e, 0);
          });
      e.asyncDep = l;
    } else il(e, l, t);
  } else $i(e, t);
}
function il(e, t, s) {
  Z(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : _e(t) && (e.setupState = di(t)),
    $i(e, s);
}
let rl;
function $i(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && rl && !n.render) {
      const o = n.template || Eo(e).template;
      if (o) {
        const { isCustomElement: l, compilerOptions: i } = e.appContext.config,
          { delimiters: r, compilerOptions: a } = n,
          c = $e($e({ isCustomElement: l, delimiters: r }, i), a);
        n.render = rl(o, c);
      }
    }
    e.render = n.render || lt;
  }
  ls(e), cs(), Da(e), us(), Yt();
}
function cc(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, s) {
        return ze(e, "get", "$attrs"), t[s];
      },
    }))
  );
}
function uc(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    get attrs() {
      return cc(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function xn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(di(ii(e.exposed)), {
        get(t, s) {
          if (s in t) return t[s];
          if (s in ws) return ws[s](e);
        },
        has(t, s) {
          return s in t || s in ws;
        },
      }))
    );
}
function dc(e, t = !0) {
  return Z(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function pc(e) {
  return Z(e) && "__vccOpts" in e;
}
const V = (e, t) => ra(e, t, Ns);
function se(e, t, s) {
  const n = arguments.length;
  return n === 2
    ? _e(t) && !q(t)
      ? en(t)
        ? M(e, null, [t])
        : M(e, t)
      : M(e, null, t)
    : (n > 3
        ? (s = Array.prototype.slice.call(arguments, 2))
        : n === 3 && en(s) && (s = [s]),
      M(e, t, s));
}
const fc = Symbol.for("v-scx"),
  mc = () => J(fc),
  hc = "3.3.4",
  gc = "http://www.w3.org/2000/svg",
  Ht = typeof document < "u" ? document : null,
  al = Ht && Ht.createElement("template"),
  xc = {
    insert: (e, t, s) => {
      t.insertBefore(e, s || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, s, n) => {
      const o = t
        ? Ht.createElementNS(gc, e)
        : Ht.createElement(e, s ? { is: s } : void 0);
      return (
        e === "select" &&
          n &&
          n.multiple != null &&
          o.setAttribute("multiple", n.multiple),
        o
      );
    },
    createText: (e) => Ht.createTextNode(e),
    createComment: (e) => Ht.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ht.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, s, n, o, l) {
      const i = s ? s.previousSibling : t.lastChild;
      if (o && (o === l || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), s),
            !(o === l || !(o = o.nextSibling));

        );
      else {
        al.innerHTML = n ? `<svg>${e}</svg>` : e;
        const r = al.content;
        if (n) {
          const a = r.firstChild;
          for (; a.firstChild; ) r.appendChild(a.firstChild);
          r.removeChild(a);
        }
        t.insertBefore(r, s);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        s ? s.previousSibling : t.lastChild,
      ];
    },
  };
function vc(e, t, s) {
  const n = e._vtc;
  n && (t = (t ? [t, ...n] : [...n]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : s
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function _c(e, t, s) {
  const n = e.style,
    o = Ce(s);
  if (s && !o) {
    if (t && !Ce(t)) for (const l in t) s[l] == null && Yn(n, l, "");
    for (const l in s) Yn(n, l, s[l]);
  } else {
    const l = n.display;
    o ? t !== s && (n.cssText = s) : t && e.removeAttribute("style"),
      "_vod" in e && (n.display = l);
  }
}
const cl = /\s*!important$/;
function Yn(e, t, s) {
  if (q(s)) s.forEach((n) => Yn(e, t, n));
  else if ((s == null && (s = ""), t.startsWith("--"))) e.setProperty(t, s);
  else {
    const n = bc(e, t);
    cl.test(s)
      ? e.setProperty(as(n), s.replace(cl, ""), "important")
      : (e[n] = s);
  }
}
const ul = ["Webkit", "Moz", "ms"],
  Rn = {};
function bc(e, t) {
  const s = Rn[t];
  if (s) return s;
  let n = gt(t);
  if (n !== "filter" && n in e) return (Rn[t] = n);
  n = cn(n);
  for (let o = 0; o < ul.length; o++) {
    const l = ul[o] + n;
    if (l in e) return (Rn[t] = l);
  }
  return t;
}
const dl = "http://www.w3.org/1999/xlink";
function yc(e, t, s, n, o) {
  if (n && t.startsWith("xlink:"))
    s == null
      ? e.removeAttributeNS(dl, t.slice(6, t.length))
      : e.setAttributeNS(dl, t, s);
  else {
    const l = Cr(t);
    s == null || (l && !Wl(s))
      ? e.removeAttribute(t)
      : e.setAttribute(t, l ? "" : s);
  }
}
function wc(e, t, s, n, o, l, i) {
  if (t === "innerHTML" || t === "textContent") {
    n && i(n, o, l), (e[t] = s ?? "");
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
    e._value = s;
    const c = r === "OPTION" ? e.getAttribute("value") : e.value,
      u = s ?? "";
    c !== u && (e.value = u), s == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (s === "" || s == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (s = Wl(s))
      : s == null && c === "string"
      ? ((s = ""), (a = !0))
      : c === "number" && ((s = 0), (a = !0));
  }
  try {
    e[t] = s;
  } catch {}
  a && e.removeAttribute(t);
}
function Sc(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Ec(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
function Ac(e, t, s, n, o = null) {
  const l = e._vei || (e._vei = {}),
    i = l[t];
  if (n && i) i.value = n;
  else {
    const [r, a] = Mc(t);
    if (n) {
      const c = (l[t] = Tc(n, o));
      Sc(e, r, c, a);
    } else i && (Ec(e, r, i, a), (l[t] = void 0));
  }
}
const pl = /(?:Once|Passive|Capture)$/;
function Mc(e) {
  let t;
  if (pl.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(pl)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : as(e.slice(2)), t];
}
let Cn = 0;
const Rc = Promise.resolve(),
  Cc = () => Cn || (Rc.then(() => (Cn = 0)), (Cn = Date.now()));
function Tc(e, t) {
  const s = (n) => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= s.attached) return;
    it(Oc(n, s.value), t, 5, [n]);
  };
  return (s.value = e), (s.attached = Cc()), s;
}
function Oc(e, t) {
  if (q(t)) {
    const s = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        s.call(e), (e._stopped = !0);
      }),
      t.map((n) => (o) => !o._stopped && n && n(o))
    );
  } else return t;
}
const fl = /^on[a-z]/,
  Pc = (e, t, s, n, o = !1, l, i, r, a) => {
    t === "class"
      ? vc(e, n, o)
      : t === "style"
      ? _c(e, s, n)
      : ln(t)
      ? ao(t) || Ac(e, t, s, n, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Nc(e, t, n, o)
        )
      ? wc(e, t, n, l, i, r, a)
      : (t === "true-value"
          ? (e._trueValue = n)
          : t === "false-value" && (e._falseValue = n),
        yc(e, t, n, o));
  };
function Nc(e, t, s, n) {
  return n
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && fl.test(t) && Z(s))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (fl.test(t) && Ce(s))
    ? !1
    : t in e;
}
const Tn = {
  beforeMount(e, { value: t }, { transition: s }) {
    (e._vod = e.style.display === "none" ? "" : e.style.display),
      s && t ? s.beforeEnter(e) : ms(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s &&
      (n
        ? t
          ? (n.beforeEnter(e), ms(e, !0), n.enter(e))
          : n.leave(e, () => {
              ms(e, !1);
            })
        : ms(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ms(e, t);
  },
};
function ms(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Lc = $e({ patchProp: Pc }, xc);
let ml;
function $c() {
  return ml || (ml = Ya(Lc));
}
const Bc = (...e) => {
  const t = $c().createApp(...e),
    { mount: s } = t;
  return (
    (t.mount = (n) => {
      const o = Dc(n);
      if (!o) return;
      const l = t._component;
      !Z(l) && !l.render && !l.template && (l.template = o.innerHTML),
        (o.innerHTML = "");
      const i = s(o, !1, o instanceof SVGElement);
      return (
        o instanceof Element &&
          (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Dc(e) {
  return Ce(e) ? document.querySelector(e) : e;
}
const Ic = (e, t) => {
    const s = e.__vccOpts || e;
    for (const [n, o] of t) s[n] = o;
    return s;
  },
  Fc = {};
function Uc(e, t) {
  const s = Ae("router-view");
  return z(), le("div", null, [M(s)]);
}
const jc = Ic(Fc, [["render", Uc]]);
/*!
 * vue-router v4.2.4
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Qt = typeof window < "u";
function kc(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const de = Object.assign;
function On(e, t) {
  const s = {};
  for (const n in t) {
    const o = t[n];
    s[n] = at(o) ? o.map(e) : e(o);
  }
  return s;
}
const As = () => {},
  at = Array.isArray,
  Hc = /\/$/,
  Kc = (e) => e.replace(Hc, "");
function Pn(e, t, s = "/") {
  let n,
    o = {},
    l = "",
    i = "";
  const r = t.indexOf("#");
  let a = t.indexOf("?");
  return (
    r < a && r >= 0 && (a = -1),
    a > -1 &&
      ((n = t.slice(0, a)),
      (l = t.slice(a + 1, r > -1 ? r : t.length)),
      (o = e(l))),
    r > -1 && ((n = n || t.slice(0, r)), (i = t.slice(r, t.length))),
    (n = qc(n ?? t, s)),
    { fullPath: n + (l && "?") + l + i, path: n, query: o, hash: i }
  );
}
function zc(e, t) {
  const s = t.query ? e(t.query) : "";
  return t.path + (s && "?") + s + (t.hash || "");
}
function hl(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function Wc(e, t, s) {
  const n = t.matched.length - 1,
    o = s.matched.length - 1;
  return (
    n > -1 &&
    n === o &&
    is(t.matched[n], s.matched[o]) &&
    Bi(t.params, s.params) &&
    e(t.query) === e(s.query) &&
    t.hash === s.hash
  );
}
function is(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Bi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const s in e) if (!Gc(e[s], t[s])) return !1;
  return !0;
}
function Gc(e, t) {
  return at(e) ? gl(e, t) : at(t) ? gl(t, e) : e === t;
}
function gl(e, t) {
  return at(t)
    ? e.length === t.length && e.every((s, n) => s === t[n])
    : e.length === 1 && e[0] === t;
}
function qc(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const s = t.split("/"),
    n = e.split("/"),
    o = n[n.length - 1];
  (o === ".." || o === ".") && n.push("");
  let l = s.length - 1,
    i,
    r;
  for (i = 0; i < n.length; i++)
    if (((r = n[i]), r !== "."))
      if (r === "..") l > 1 && l--;
      else break;
  return (
    s.slice(0, l).join("/") +
    "/" +
    n.slice(i - (i === n.length ? 1 : 0)).join("/")
  );
}
var Ls;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Ls || (Ls = {}));
var Ms;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Ms || (Ms = {}));
function Yc(e) {
  if (!e)
    if (Qt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Kc(e);
}
const Vc = /^[^#]+#/;
function Zc(e, t) {
  return e.replace(Vc, "#") + t;
}
function Jc(e, t) {
  const s = document.documentElement.getBoundingClientRect(),
    n = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: n.left - s.left - (t.left || 0),
    top: n.top - s.top - (t.top || 0),
  };
}
const vn = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Xc(e) {
  let t;
  if ("el" in e) {
    const s = e.el,
      n = typeof s == "string" && s.startsWith("#"),
      o =
        typeof s == "string"
          ? n
            ? document.getElementById(s.slice(1))
            : document.querySelector(s)
          : s;
    if (!o) return;
    t = Jc(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function xl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Vn = new Map();
function Qc(e, t) {
  Vn.set(e, t);
}
function eu(e) {
  const t = Vn.get(e);
  return Vn.delete(e), t;
}
let tu = () => location.protocol + "//" + location.host;
function Di(e, t) {
  const { pathname: s, search: n, hash: o } = t,
    l = e.indexOf("#");
  if (l > -1) {
    let r = o.includes(e.slice(l)) ? e.slice(l).length : 1,
      a = o.slice(r);
    return a[0] !== "/" && (a = "/" + a), hl(a, "");
  }
  return hl(s, e) + n + o;
}
function su(e, t, s, n) {
  let o = [],
    l = [],
    i = null;
  const r = ({ state: m }) => {
    const v = Di(e, location),
      x = s.value,
      S = t.value;
    let N = 0;
    if (m) {
      if (((s.value = v), (t.value = m), i && i === x)) {
        i = null;
        return;
      }
      N = S ? m.position - S.position : 0;
    } else n(v);
    o.forEach((C) => {
      C(s.value, x, {
        delta: N,
        type: Ls.pop,
        direction: N ? (N > 0 ? Ms.forward : Ms.back) : Ms.unknown,
      });
    });
  };
  function a() {
    i = s.value;
  }
  function c(m) {
    o.push(m);
    const v = () => {
      const x = o.indexOf(m);
      x > -1 && o.splice(x, 1);
    };
    return l.push(v), v;
  }
  function u() {
    const { history: m } = window;
    m.state && m.replaceState(de({}, m.state, { scroll: vn() }), "");
  }
  function f() {
    for (const m of l) m();
    (l = []),
      window.removeEventListener("popstate", r),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", r),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: a, listen: c, destroy: f }
  );
}
function vl(e, t, s, n = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: s,
    replaced: n,
    position: window.history.length,
    scroll: o ? vn() : null,
  };
}
function nu(e) {
  const { history: t, location: s } = window,
    n = { value: Di(e, s) },
    o = { value: t.state };
  o.value ||
    l(
      n.value,
      {
        back: null,
        current: n.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function l(a, c, u) {
    const f = e.indexOf("#"),
      m =
        f > -1
          ? (s.host && document.querySelector("base") ? e : e.slice(f)) + a
          : tu() + e + a;
    try {
      t[u ? "replaceState" : "pushState"](c, "", m), (o.value = c);
    } catch (v) {
      console.error(v), s[u ? "replace" : "assign"](m);
    }
  }
  function i(a, c) {
    const u = de({}, t.state, vl(o.value.back, a, o.value.forward, !0), c, {
      position: o.value.position,
    });
    l(a, u, !0), (n.value = a);
  }
  function r(a, c) {
    const u = de({}, o.value, t.state, { forward: a, scroll: vn() });
    l(u.current, u, !0);
    const f = de({}, vl(n.value, a, null), { position: u.position + 1 }, c);
    l(a, f, !1), (n.value = a);
  }
  return { location: n, state: o, push: r, replace: i };
}
function ou(e) {
  e = Yc(e);
  const t = nu(e),
    s = su(e, t.state, t.location, t.replace);
  function n(l, i = !0) {
    i || s.pauseListeners(), history.go(l);
  }
  const o = de(
    { location: "", base: e, go: n, createHref: Zc.bind(null, e) },
    t,
    s
  );
  return (
    Object.defineProperty(o, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function lu(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Ii(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Rt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Fi = Symbol("");
var _l;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(_l || (_l = {}));
function rs(e, t) {
  return de(new Error(), { type: e, [Fi]: !0 }, t);
}
function _t(e, t) {
  return e instanceof Error && Fi in e && (t == null || !!(e.type & t));
}
const bl = "[^/]+?",
  iu = { sensitive: !1, strict: !1, start: !0, end: !0 },
  ru = /[.+*?^${}()[\]/\\]/g;
function au(e, t) {
  const s = de({}, iu, t),
    n = [];
  let o = s.start ? "^" : "";
  const l = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    s.strict && !c.length && (o += "/");
    for (let f = 0; f < c.length; f++) {
      const m = c[f];
      let v = 40 + (s.sensitive ? 0.25 : 0);
      if (m.type === 0)
        f || (o += "/"), (o += m.value.replace(ru, "\\$&")), (v += 40);
      else if (m.type === 1) {
        const { value: x, repeatable: S, optional: N, regexp: C } = m;
        l.push({ name: x, repeatable: S, optional: N });
        const $ = C || bl;
        if ($ !== bl) {
          v += 10;
          try {
            new RegExp(`(${$})`);
          } catch (I) {
            throw new Error(
              `Invalid custom RegExp for param "${x}" (${$}): ` + I.message
            );
          }
        }
        let G = S ? `((?:${$})(?:/(?:${$}))*)` : `(${$})`;
        f || (G = N && c.length < 2 ? `(?:/${G})` : "/" + G),
          N && (G += "?"),
          (o += G),
          (v += 20),
          N && (v += -8),
          S && (v += -20),
          $ === ".*" && (v += -50);
      }
      u.push(v);
    }
    n.push(u);
  }
  if (s.strict && s.end) {
    const c = n.length - 1;
    n[c][n[c].length - 1] += 0.7000000000000001;
  }
  s.strict || (o += "/?"), s.end ? (o += "$") : s.strict && (o += "(?:/|$)");
  const i = new RegExp(o, s.sensitive ? "" : "i");
  function r(c) {
    const u = c.match(i),
      f = {};
    if (!u) return null;
    for (let m = 1; m < u.length; m++) {
      const v = u[m] || "",
        x = l[m - 1];
      f[x.name] = v && x.repeatable ? v.split("/") : v;
    }
    return f;
  }
  function a(c) {
    let u = "",
      f = !1;
    for (const m of e) {
      (!f || !u.endsWith("/")) && (u += "/"), (f = !1);
      for (const v of m)
        if (v.type === 0) u += v.value;
        else if (v.type === 1) {
          const { value: x, repeatable: S, optional: N } = v,
            C = x in c ? c[x] : "";
          if (at(C) && !S)
            throw new Error(
              `Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`
            );
          const $ = at(C) ? C.join("/") : C;
          if (!$)
            if (N)
              m.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${x}"`);
          u += $;
        }
    }
    return u || "/";
  }
  return { re: i, score: n, keys: l, parse: r, stringify: a };
}
function cu(e, t) {
  let s = 0;
  for (; s < e.length && s < t.length; ) {
    const n = t[s] - e[s];
    if (n) return n;
    s++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function uu(e, t) {
  let s = 0;
  const n = e.score,
    o = t.score;
  for (; s < n.length && s < o.length; ) {
    const l = cu(n[s], o[s]);
    if (l) return l;
    s++;
  }
  if (Math.abs(o.length - n.length) === 1) {
    if (yl(n)) return 1;
    if (yl(o)) return -1;
  }
  return o.length - n.length;
}
function yl(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const du = { type: 0, value: "" },
  pu = /[a-zA-Z0-9_]/;
function fu(e) {
  if (!e) return [[]];
  if (e === "/") return [[du]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(v) {
    throw new Error(`ERR (${s})/"${c}": ${v}`);
  }
  let s = 0,
    n = s;
  const o = [];
  let l;
  function i() {
    l && o.push(l), (l = []);
  }
  let r = 0,
    a,
    c = "",
    u = "";
  function f() {
    c &&
      (s === 0
        ? l.push({ type: 0, value: c })
        : s === 1 || s === 2 || s === 3
        ? (l.length > 1 &&
            (a === "*" || a === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          l.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function m() {
    c += a;
  }
  for (; r < e.length; ) {
    if (((a = e[r++]), a === "\\" && s !== 2)) {
      (n = s), (s = 4);
      continue;
    }
    switch (s) {
      case 0:
        a === "/" ? (c && f(), i()) : a === ":" ? (f(), (s = 1)) : m();
        break;
      case 4:
        m(), (s = n);
        break;
      case 1:
        a === "("
          ? (s = 2)
          : pu.test(a)
          ? m()
          : (f(), (s = 0), a !== "*" && a !== "?" && a !== "+" && r--);
        break;
      case 2:
        a === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + a)
            : (s = 3)
          : (u += a);
        break;
      case 3:
        f(), (s = 0), a !== "*" && a !== "?" && a !== "+" && r--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return s === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), i(), o;
}
function mu(e, t, s) {
  const n = au(fu(e.path), s),
    o = de(n, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function hu(e, t) {
  const s = [],
    n = new Map();
  t = El({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(u) {
    return n.get(u);
  }
  function l(u, f, m) {
    const v = !m,
      x = gu(u);
    x.aliasOf = m && m.record;
    const S = El(t, u),
      N = [x];
    if ("alias" in u) {
      const G = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const I of G)
        N.push(
          de({}, x, {
            components: m ? m.record.components : x.components,
            path: I,
            aliasOf: m ? m.record : x,
          })
        );
    }
    let C, $;
    for (const G of N) {
      const { path: I } = G;
      if (f && I[0] !== "/") {
        const ae = f.record.path,
          oe = ae[ae.length - 1] === "/" ? "" : "/";
        G.path = f.record.path + (I && oe + I);
      }
      if (
        ((C = mu(G, f, S)),
        m
          ? m.alias.push(C)
          : (($ = $ || C),
            $ !== C && $.alias.push(C),
            v && u.name && !Sl(C) && i(u.name)),
        x.children)
      ) {
        const ae = x.children;
        for (let oe = 0; oe < ae.length; oe++)
          l(ae[oe], C, m && m.children[oe]);
      }
      (m = m || C),
        ((C.record.components && Object.keys(C.record.components).length) ||
          C.record.name ||
          C.record.redirect) &&
          a(C);
    }
    return $
      ? () => {
          i($);
        }
      : As;
  }
  function i(u) {
    if (Ii(u)) {
      const f = n.get(u);
      f &&
        (n.delete(u),
        s.splice(s.indexOf(f), 1),
        f.children.forEach(i),
        f.alias.forEach(i));
    } else {
      const f = s.indexOf(u);
      f > -1 &&
        (s.splice(f, 1),
        u.record.name && n.delete(u.record.name),
        u.children.forEach(i),
        u.alias.forEach(i));
    }
  }
  function r() {
    return s;
  }
  function a(u) {
    let f = 0;
    for (
      ;
      f < s.length &&
      uu(u, s[f]) >= 0 &&
      (u.record.path !== s[f].record.path || !Ui(u, s[f]));

    )
      f++;
    s.splice(f, 0, u), u.record.name && !Sl(u) && n.set(u.record.name, u);
  }
  function c(u, f) {
    let m,
      v = {},
      x,
      S;
    if ("name" in u && u.name) {
      if (((m = n.get(u.name)), !m)) throw rs(1, { location: u });
      (S = m.record.name),
        (v = de(
          wl(
            f.params,
            m.keys.filter(($) => !$.optional).map(($) => $.name)
          ),
          u.params &&
            wl(
              u.params,
              m.keys.map(($) => $.name)
            )
        )),
        (x = m.stringify(v));
    } else if ("path" in u)
      (x = u.path),
        (m = s.find(($) => $.re.test(x))),
        m && ((v = m.parse(x)), (S = m.record.name));
    else {
      if (((m = f.name ? n.get(f.name) : s.find(($) => $.re.test(f.path))), !m))
        throw rs(1, { location: u, currentLocation: f });
      (S = m.record.name),
        (v = de({}, f.params, u.params)),
        (x = m.stringify(v));
    }
    const N = [];
    let C = m;
    for (; C; ) N.unshift(C.record), (C = C.parent);
    return { name: S, path: x, params: v, matched: N, meta: vu(N) };
  }
  return (
    e.forEach((u) => l(u)),
    {
      addRoute: l,
      resolve: c,
      removeRoute: i,
      getRoutes: r,
      getRecordMatcher: o,
    }
  );
}
function wl(e, t) {
  const s = {};
  for (const n of t) n in e && (s[n] = e[n]);
  return s;
}
function gu(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: xu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function xu(e) {
  const t = {},
    s = e.props || !1;
  if ("component" in e) t.default = s;
  else for (const n in e.components) t[n] = typeof s == "object" ? s[n] : s;
  return t;
}
function Sl(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function vu(e) {
  return e.reduce((t, s) => de(t, s.meta), {});
}
function El(e, t) {
  const s = {};
  for (const n in e) s[n] = n in t ? t[n] : e[n];
  return s;
}
function Ui(e, t) {
  return t.children.some((s) => s === e || Ui(e, s));
}
const ji = /#/g,
  _u = /&/g,
  bu = /\//g,
  yu = /=/g,
  wu = /\?/g,
  ki = /\+/g,
  Su = /%5B/g,
  Eu = /%5D/g,
  Hi = /%5E/g,
  Au = /%60/g,
  Ki = /%7B/g,
  Mu = /%7C/g,
  zi = /%7D/g,
  Ru = /%20/g;
function To(e) {
  return encodeURI("" + e)
    .replace(Mu, "|")
    .replace(Su, "[")
    .replace(Eu, "]");
}
function Cu(e) {
  return To(e).replace(Ki, "{").replace(zi, "}").replace(Hi, "^");
}
function Zn(e) {
  return To(e)
    .replace(ki, "%2B")
    .replace(Ru, "+")
    .replace(ji, "%23")
    .replace(_u, "%26")
    .replace(Au, "`")
    .replace(Ki, "{")
    .replace(zi, "}")
    .replace(Hi, "^");
}
function Tu(e) {
  return Zn(e).replace(yu, "%3D");
}
function Ou(e) {
  return To(e).replace(ji, "%23").replace(wu, "%3F");
}
function Pu(e) {
  return e == null ? "" : Ou(e).replace(bu, "%2F");
}
function tn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Nu(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < n.length; ++o) {
    const l = n[o].replace(ki, " "),
      i = l.indexOf("="),
      r = tn(i < 0 ? l : l.slice(0, i)),
      a = i < 0 ? null : tn(l.slice(i + 1));
    if (r in t) {
      let c = t[r];
      at(c) || (c = t[r] = [c]), c.push(a);
    } else t[r] = a;
  }
  return t;
}
function Al(e) {
  let t = "";
  for (let s in e) {
    const n = e[s];
    if (((s = Tu(s)), n == null)) {
      n !== void 0 && (t += (t.length ? "&" : "") + s);
      continue;
    }
    (at(n) ? n.map((l) => l && Zn(l)) : [n && Zn(n)]).forEach((l) => {
      l !== void 0 &&
        ((t += (t.length ? "&" : "") + s), l != null && (t += "=" + l));
    });
  }
  return t;
}
function Lu(e) {
  const t = {};
  for (const s in e) {
    const n = e[s];
    n !== void 0 &&
      (t[s] = at(n)
        ? n.map((o) => (o == null ? null : "" + o))
        : n == null
        ? n
        : "" + n);
  }
  return t;
}
const $u = Symbol(""),
  Ml = Symbol(""),
  _n = Symbol(""),
  Oo = Symbol(""),
  Jn = Symbol("");
function hs() {
  let e = [];
  function t(n) {
    return (
      e.push(n),
      () => {
        const o = e.indexOf(n);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function s() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: s };
}
function Tt(e, t, s, n, o) {
  const l = n && (n.enterCallbacks[o] = n.enterCallbacks[o] || []);
  return () =>
    new Promise((i, r) => {
      const a = (f) => {
          f === !1
            ? r(rs(4, { from: s, to: t }))
            : f instanceof Error
            ? r(f)
            : lu(f)
            ? r(rs(2, { from: t, to: f }))
            : (l &&
                n.enterCallbacks[o] === l &&
                typeof f == "function" &&
                l.push(f),
              i());
        },
        c = e.call(n && n.instances[o], t, s, a);
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(a)), u.catch((f) => r(f));
    });
}
function Nn(e, t, s, n) {
  const o = [];
  for (const l of e)
    for (const i in l.components) {
      let r = l.components[i];
      if (!(t !== "beforeRouteEnter" && !l.instances[i]))
        if (Bu(r)) {
          const c = (r.__vccOpts || r)[t];
          c && o.push(Tt(c, s, n, l, i));
        } else {
          let a = r();
          o.push(() =>
            a.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${l.path}"`)
                );
              const u = kc(c) ? c.default : c;
              l.components[i] = u;
              const m = (u.__vccOpts || u)[t];
              return m && Tt(m, s, n, l, i)();
            })
          );
        }
    }
  return o;
}
function Bu(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Rl(e) {
  const t = J(_n),
    s = J(Oo),
    n = V(() => t.resolve(D(e.to))),
    o = V(() => {
      const { matched: a } = n.value,
        { length: c } = a,
        u = a[c - 1],
        f = s.matched;
      if (!u || !f.length) return -1;
      const m = f.findIndex(is.bind(null, u));
      if (m > -1) return m;
      const v = Cl(a[c - 2]);
      return c > 1 && Cl(u) === v && f[f.length - 1].path !== v
        ? f.findIndex(is.bind(null, a[c - 2]))
        : m;
    }),
    l = V(() => o.value > -1 && Uu(s.params, n.value.params)),
    i = V(
      () =>
        o.value > -1 &&
        o.value === s.matched.length - 1 &&
        Bi(s.params, n.value.params)
    );
  function r(a = {}) {
    return Fu(a)
      ? t[D(e.replace) ? "replace" : "push"](D(e.to)).catch(As)
      : Promise.resolve();
  }
  return {
    route: n,
    href: V(() => n.value.href),
    isActive: l,
    isExactActive: i,
    navigate: r,
  };
}
const Du = We({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Rl,
    setup(e, { slots: t }) {
      const s = Ve(Rl(e)),
        { options: n } = J(_n),
        o = V(() => ({
          [Tl(e.activeClass, n.linkActiveClass, "router-link-active")]:
            s.isActive,
          [Tl(
            e.exactActiveClass,
            n.linkExactActiveClass,
            "router-link-exact-active"
          )]: s.isExactActive,
        }));
      return () => {
        const l = t.default && t.default(s);
        return e.custom
          ? l
          : se(
              "a",
              {
                "aria-current": s.isExactActive ? e.ariaCurrentValue : null,
                href: s.href,
                onClick: s.navigate,
                class: o.value,
              },
              l
            );
      };
    },
  }),
  Iu = Du;
function Fu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Uu(e, t) {
  for (const s in t) {
    const n = t[s],
      o = e[s];
    if (typeof n == "string") {
      if (n !== o) return !1;
    } else if (!at(o) || o.length !== n.length || n.some((l, i) => l !== o[i]))
      return !1;
  }
  return !0;
}
function Cl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Tl = (e, t, s) => e ?? t ?? s,
  ju = We({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: s }) {
      const n = J(Jn),
        o = V(() => e.route || n.value),
        l = J(Ml, 0),
        i = V(() => {
          let c = D(l);
          const { matched: u } = o.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        r = V(() => o.value.matched[i.value]);
      we(
        Ml,
        V(() => i.value + 1)
      ),
        we($u, r),
        we(Jn, o);
      const a = y();
      return (
        Je(
          () => [a.value, r.value, e.name],
          ([c, u, f], [m, v, x]) => {
            u &&
              ((u.instances[f] = c),
              v &&
                v !== u &&
                c &&
                c === m &&
                (u.leaveGuards.size || (u.leaveGuards = v.leaveGuards),
                u.updateGuards.size || (u.updateGuards = v.updateGuards))),
              c &&
                u &&
                (!v || !is(u, v) || !m) &&
                (u.enterCallbacks[f] || []).forEach((S) => S(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = o.value,
            u = e.name,
            f = r.value,
            m = f && f.components[u];
          if (!m) return Ol(s.default, { Component: m, route: c });
          const v = f.props[u],
            x = v
              ? v === !0
                ? c.params
                : typeof v == "function"
                ? v(c)
                : v
              : null,
            N = se(
              m,
              de({}, x, t, {
                onVnodeUnmounted: (C) => {
                  C.component.isUnmounted && (f.instances[u] = null);
                },
                ref: a,
              })
            );
          return Ol(s.default, { Component: N, route: c }) || N;
        }
      );
    },
  });
function Ol(e, t) {
  if (!e) return null;
  const s = e(t);
  return s.length === 1 ? s[0] : s;
}
const ku = ju;
function Hu(e) {
  const t = hu(e.routes, e),
    s = e.parseQuery || Nu,
    n = e.stringifyQuery || Al,
    o = e.history,
    l = hs(),
    i = hs(),
    r = hs(),
    a = ci(Rt);
  let c = Rt;
  Qt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = On.bind(null, (w) => "" + w),
    f = On.bind(null, Pu),
    m = On.bind(null, tn);
  function v(w, B) {
    let O, j;
    return (
      Ii(w) ? ((O = t.getRecordMatcher(w)), (j = B)) : (j = w), t.addRoute(j, O)
    );
  }
  function x(w) {
    const B = t.getRecordMatcher(w);
    B && t.removeRoute(B);
  }
  function S() {
    return t.getRoutes().map((w) => w.record);
  }
  function N(w) {
    return !!t.getRecordMatcher(w);
  }
  function C(w, B) {
    if (((B = de({}, B || a.value)), typeof w == "string")) {
      const g = Pn(s, w, B.path),
        _ = t.resolve({ path: g.path }, B),
        b = o.createHref(g.fullPath);
      return de(g, _, {
        params: m(_.params),
        hash: tn(g.hash),
        redirectedFrom: void 0,
        href: b,
      });
    }
    let O;
    if ("path" in w) O = de({}, w, { path: Pn(s, w.path, B.path).path });
    else {
      const g = de({}, w.params);
      for (const _ in g) g[_] == null && delete g[_];
      (O = de({}, w, { params: f(g) })), (B.params = f(B.params));
    }
    const j = t.resolve(O, B),
      ee = w.hash || "";
    j.params = u(m(j.params));
    const p = zc(n, de({}, w, { hash: Cu(ee), path: j.path })),
      h = o.createHref(p);
    return de(
      { fullPath: p, hash: ee, query: n === Al ? Lu(w.query) : w.query || {} },
      j,
      { redirectedFrom: void 0, href: h }
    );
  }
  function $(w) {
    return typeof w == "string" ? Pn(s, w, a.value.path) : de({}, w);
  }
  function G(w, B) {
    if (c !== w) return rs(8, { from: B, to: w });
  }
  function I(w) {
    return ce(w);
  }
  function ae(w) {
    return I(de($(w), { replace: !0 }));
  }
  function oe(w) {
    const B = w.matched[w.matched.length - 1];
    if (B && B.redirect) {
      const { redirect: O } = B;
      let j = typeof O == "function" ? O(w) : O;
      return (
        typeof j == "string" &&
          ((j = j.includes("?") || j.includes("#") ? (j = $(j)) : { path: j }),
          (j.params = {})),
        de(
          { query: w.query, hash: w.hash, params: "path" in j ? {} : w.params },
          j
        )
      );
    }
  }
  function ce(w, B) {
    const O = (c = C(w)),
      j = a.value,
      ee = w.state,
      p = w.force,
      h = w.replace === !0,
      g = oe(O);
    if (g)
      return ce(
        de($(g), {
          state: typeof g == "object" ? de({}, ee, g.state) : ee,
          force: p,
          replace: h,
        }),
        B || O
      );
    const _ = O;
    _.redirectedFrom = B;
    let b;
    return (
      !p && Wc(n, j, O) && ((b = rs(16, { to: _, from: j })), Ne(j, j, !0, !1)),
      (b ? Promise.resolve(b) : be(_, j))
        .catch((E) => (_t(E) ? (_t(E, 2) ? E : ye(E)) : K(E, _, j)))
        .then((E) => {
          if (E) {
            if (_t(E, 2))
              return ce(
                de({ replace: h }, $(E.to), {
                  state: typeof E.to == "object" ? de({}, ee, E.to.state) : ee,
                  force: p,
                }),
                B || _
              );
          } else E = Ee(_, j, !0, h, ee);
          return Se(_, j, E), E;
        })
    );
  }
  function he(w, B) {
    const O = G(w, B);
    return O ? Promise.reject(O) : Promise.resolve();
  }
  function ue(w) {
    const B = Ge.values().next().value;
    return B && typeof B.runWithContext == "function"
      ? B.runWithContext(w)
      : w();
  }
  function be(w, B) {
    let O;
    const [j, ee, p] = Ku(w, B);
    O = Nn(j.reverse(), "beforeRouteLeave", w, B);
    for (const g of j)
      g.leaveGuards.forEach((_) => {
        O.push(Tt(_, w, B));
      });
    const h = he.bind(null, w, B);
    return (
      O.push(h),
      Te(O)
        .then(() => {
          O = [];
          for (const g of l.list()) O.push(Tt(g, w, B));
          return O.push(h), Te(O);
        })
        .then(() => {
          O = Nn(ee, "beforeRouteUpdate", w, B);
          for (const g of ee)
            g.updateGuards.forEach((_) => {
              O.push(Tt(_, w, B));
            });
          return O.push(h), Te(O);
        })
        .then(() => {
          O = [];
          for (const g of p)
            if (g.beforeEnter)
              if (at(g.beforeEnter))
                for (const _ of g.beforeEnter) O.push(Tt(_, w, B));
              else O.push(Tt(g.beforeEnter, w, B));
          return O.push(h), Te(O);
        })
        .then(
          () => (
            w.matched.forEach((g) => (g.enterCallbacks = {})),
            (O = Nn(p, "beforeRouteEnter", w, B)),
            O.push(h),
            Te(O)
          )
        )
        .then(() => {
          O = [];
          for (const g of i.list()) O.push(Tt(g, w, B));
          return O.push(h), Te(O);
        })
        .catch((g) => (_t(g, 8) ? g : Promise.reject(g)))
    );
  }
  function Se(w, B, O) {
    r.list().forEach((j) => ue(() => j(w, B, O)));
  }
  function Ee(w, B, O, j, ee) {
    const p = G(w, B);
    if (p) return p;
    const h = B === Rt,
      g = Qt ? history.state : {};
    O &&
      (j || h
        ? o.replace(w.fullPath, de({ scroll: h && g && g.scroll }, ee))
        : o.push(w.fullPath, ee)),
      (a.value = w),
      Ne(w, B, O, h),
      ye();
  }
  let re;
  function ke() {
    re ||
      (re = o.listen((w, B, O) => {
        if (!At.listening) return;
        const j = C(w),
          ee = oe(j);
        if (ee) {
          ce(de(ee, { replace: !0 }), j).catch(As);
          return;
        }
        c = j;
        const p = a.value;
        Qt && Qc(xl(p.fullPath, O.delta), vn()),
          be(j, p)
            .catch((h) =>
              _t(h, 12)
                ? h
                : _t(h, 2)
                ? (ce(h.to, j)
                    .then((g) => {
                      _t(g, 20) &&
                        !O.delta &&
                        O.type === Ls.pop &&
                        o.go(-1, !1);
                    })
                    .catch(As),
                  Promise.reject())
                : (O.delta && o.go(-O.delta, !1), K(h, j, p))
            )
            .then((h) => {
              (h = h || Ee(j, p, !1)),
                h &&
                  (O.delta && !_t(h, 8)
                    ? o.go(-O.delta, !1)
                    : O.type === Ls.pop && _t(h, 20) && o.go(-1, !1)),
                Se(j, p, h);
            })
            .catch(As);
      }));
  }
  let Pe = hs(),
    fe = hs(),
    k;
  function K(w, B, O) {
    ye(w);
    const j = fe.list();
    return (
      j.length ? j.forEach((ee) => ee(w, B, O)) : console.error(w),
      Promise.reject(w)
    );
  }
  function ve() {
    return k && a.value !== Rt
      ? Promise.resolve()
      : new Promise((w, B) => {
          Pe.add([w, B]);
        });
  }
  function ye(w) {
    return (
      k ||
        ((k = !w),
        ke(),
        Pe.list().forEach(([B, O]) => (w ? O(w) : B())),
        Pe.reset()),
      w
    );
  }
  function Ne(w, B, O, j) {
    const { scrollBehavior: ee } = e;
    if (!Qt || !ee) return Promise.resolve();
    const p =
      (!O && eu(xl(w.fullPath, 0))) ||
      ((j || !O) && history.state && history.state.scroll) ||
      null;
    return pn()
      .then(() => ee(w, B, p))
      .then((h) => h && Xc(h))
      .catch((h) => K(h, w, B));
  }
  const ne = (w) => o.go(w);
  let De;
  const Ge = new Set(),
    At = {
      currentRoute: a,
      listening: !0,
      addRoute: v,
      removeRoute: x,
      hasRoute: N,
      getRoutes: S,
      resolve: C,
      options: e,
      push: I,
      replace: ae,
      go: ne,
      back: () => ne(-1),
      forward: () => ne(1),
      beforeEach: l.add,
      beforeResolve: i.add,
      afterEach: r.add,
      onError: fe.add,
      isReady: ve,
      install(w) {
        const B = this;
        w.component("RouterLink", Iu),
          w.component("RouterView", ku),
          (w.config.globalProperties.$router = B),
          Object.defineProperty(w.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => D(a),
          }),
          Qt &&
            !De &&
            a.value === Rt &&
            ((De = !0), I(o.location).catch((ee) => {}));
        const O = {};
        for (const ee in Rt)
          Object.defineProperty(O, ee, {
            get: () => a.value[ee],
            enumerable: !0,
          });
        w.provide(_n, B), w.provide(Oo, ni(O)), w.provide(Jn, a);
        const j = w.unmount;
        Ge.add(w),
          (w.unmount = function () {
            Ge.delete(w),
              Ge.size < 1 &&
                ((c = Rt),
                re && re(),
                (re = null),
                (a.value = Rt),
                (De = !1),
                (k = !1)),
              j();
          });
      },
    };
  function Te(w) {
    return w.reduce((B, O) => B.then(() => ue(O)), Promise.resolve());
  }
  return At;
}
function Ku(e, t) {
  const s = [],
    n = [],
    o = [],
    l = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < l; i++) {
    const r = t.matched[i];
    r && (e.matched.find((c) => is(c, r)) ? n.push(r) : s.push(r));
    const a = e.matched[i];
    a && (t.matched.find((c) => is(c, a)) || o.push(a));
  }
  return [s, n, o];
}
function vt() {
  return J(_n);
}
function zu() {
  return J(Oo);
}
/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */ const Re = {
    itemsToShow: 1,
    itemsToScroll: 1,
    modelValue: 0,
    transition: 300,
    autoplay: 0,
    snapAlign: "center",
    wrapAround: !1,
    throttle: 16,
    pauseAutoplayOnHover: !1,
    mouseDrag: !0,
    touchDrag: !0,
    dir: "ltr",
    breakpoints: void 0,
    i18n: {
      ariaNextSlide: "Navigate to next slide",
      ariaPreviousSlide: "Navigate to previous slide",
      ariaNavigateToSlide: "Navigate to slide {slideNumber}",
      ariaGallery: "Gallery",
      itemXofY: "Item {currentSlide} of {slidesCount}",
      iconArrowUp: "Arrow pointing upwards",
      iconArrowDown: "Arrow pointing downwards",
      iconArrowRight: "Arrow pointing to the right",
      iconArrowLeft: "Arrow pointing to the left",
    },
  },
  Pl = {
    itemsToShow: { default: Re.itemsToShow, type: Number },
    itemsToScroll: { default: Re.itemsToScroll, type: Number },
    wrapAround: { default: Re.wrapAround, type: Boolean },
    throttle: { default: Re.throttle, type: Number },
    snapAlign: {
      default: Re.snapAlign,
      validator(e) {
        return ["start", "end", "center", "center-even", "center-odd"].includes(
          e
        );
      },
    },
    transition: { default: Re.transition, type: Number },
    breakpoints: { default: Re.breakpoints, type: Object },
    autoplay: { default: Re.autoplay, type: Number },
    pauseAutoplayOnHover: { default: Re.pauseAutoplayOnHover, type: Boolean },
    modelValue: { default: void 0, type: Number },
    mouseDrag: { default: Re.mouseDrag, type: Boolean },
    touchDrag: { default: Re.touchDrag, type: Boolean },
    dir: {
      default: Re.dir,
      validator(e) {
        return ["rtl", "ltr"].includes(e);
      },
    },
    i18n: { default: Re.i18n, type: Object },
    settings: {
      default() {
        return {};
      },
      type: Object,
    },
  };
function Wu({ config: e, slidesCount: t }) {
  const { snapAlign: s, wrapAround: n, itemsToShow: o = 1 } = e;
  if (n) return Math.max(t - 1, 0);
  let l;
  switch (s) {
    case "start":
      l = t - o;
      break;
    case "end":
      l = t - 1;
      break;
    case "center":
    case "center-odd":
      l = t - Math.ceil((o - 0.5) / 2);
      break;
    case "center-even":
      l = t - Math.ceil(o / 2);
      break;
    default:
      l = 0;
      break;
  }
  return Math.max(l, 0);
}
function Gu({ config: e, slidesCount: t }) {
  const { wrapAround: s, snapAlign: n, itemsToShow: o = 1 } = e;
  let l = 0;
  if (s || o > t) return l;
  switch (n) {
    case "start":
      l = 0;
      break;
    case "end":
      l = o - 1;
      break;
    case "center":
    case "center-odd":
      l = Math.floor((o - 1) / 2);
      break;
    case "center-even":
      l = Math.floor((o - 2) / 2);
      break;
    default:
      l = 0;
      break;
  }
  return l;
}
function Xn({ val: e, max: t, min: s }) {
  return t < s ? e : Math.min(Math.max(e, s), t);
}
function qu({ config: e, currentSlide: t, slidesCount: s }) {
  const { snapAlign: n, wrapAround: o, itemsToShow: l = 1 } = e;
  let i = t;
  switch (n) {
    case "center":
    case "center-odd":
      i -= (l - 1) / 2;
      break;
    case "center-even":
      i -= (l - 2) / 2;
      break;
    case "end":
      i -= l - 1;
      break;
  }
  return o ? i : Xn({ val: i, max: s - l, min: 0 });
}
function Wi(e) {
  return e
    ? e.reduce((t, s) => {
        var n;
        return s.type === me
          ? [...t, ...Wi(s.children)]
          : ((n = s.type) === null || n === void 0 ? void 0 : n.name) ===
            "CarouselSlide"
          ? [...t, s]
          : t;
      }, [])
    : [];
}
function sn({ val: e, max: t, min: s = 0 }) {
  return e > t
    ? sn({ val: e - (t + 1), max: t, min: s })
    : e < s
    ? sn({ val: e + (t + 1), max: t, min: s })
    : e;
}
function Yu(e, t) {
  let s;
  return t
    ? function (...n) {
        const o = this;
        s || (e.apply(o, n), (s = !0), setTimeout(() => (s = !1), t));
      }
    : e;
}
function Vu(e, t) {
  let s;
  return function (...n) {
    s && clearTimeout(s),
      (s = setTimeout(() => {
        e(...n), (s = null);
      }, t));
  };
}
function Gi(e = "", t = {}) {
  return Object.entries(t).reduce(
    (s, [n, o]) => s.replace(`{${n}}`, String(o)),
    e
  );
}
var Zu = We({
    name: "ARIA",
    setup() {
      const e = J("config", Ve(Object.assign({}, Re))),
        t = J("currentSlide", y(0)),
        s = J("slidesCount", y(0));
      return () =>
        se(
          "div",
          {
            class: ["carousel__liveregion", "carousel__sr-only"],
            "aria-live": "polite",
            "aria-atomic": "true",
          },
          Gi(e.i18n.itemXofY, {
            currentSlide: t.value + 1,
            slidesCount: s.value,
          })
        );
    },
  }),
  Qe = We({
    name: "Carousel",
    props: Pl,
    setup(e, { slots: t, emit: s, expose: n }) {
      var o;
      const l = y(null),
        i = y([]),
        r = y(0),
        a = y(0),
        c = Ve(Object.assign({}, Re));
      let u = Object.assign({}, Re),
        f;
      const m = y((o = e.modelValue) !== null && o !== void 0 ? o : 0),
        v = y(0),
        x = y(0),
        S = y(0),
        N = y(0);
      let C, $;
      we("config", c),
        we("slidesCount", a),
        we("currentSlide", m),
        we("maxSlide", S),
        we("minSlide", N),
        we("slideWidth", r);
      function G() {
        (f = Object.assign({}, e.breakpoints)),
          (u = Object.assign(Object.assign(Object.assign({}, u), e), {
            i18n: Object.assign(Object.assign({}, u.i18n), e.i18n),
            breakpoints: void 0,
          })),
          ae(u);
      }
      function I() {
        if (!f || !Object.keys(f).length) return;
        const g = Object.keys(f)
          .map((b) => Number(b))
          .sort((b, E) => +E - +b);
        let _ = Object.assign({}, u);
        g.some((b) => {
          const E = window.matchMedia(`(min-width: ${b}px)`).matches;
          return E && (_ = Object.assign(Object.assign({}, _), f[b])), E;
        }),
          ae(_);
      }
      function ae(g) {
        Object.entries(g).forEach(([_, b]) => (c[_] = b));
      }
      const oe = Vu(() => {
        I(), ce();
      }, 16);
      function ce() {
        if (!l.value) return;
        const g = l.value.getBoundingClientRect();
        r.value = g.width / c.itemsToShow;
      }
      function he() {
        a.value <= 0 ||
          ((x.value = Math.ceil((a.value - 1) / 2)),
          (S.value = Wu({ config: c, slidesCount: a.value })),
          (N.value = Gu({ config: c, slidesCount: a.value })),
          c.wrapAround ||
            (m.value = Xn({ val: m.value, max: S.value, min: N.value })));
      }
      je(() => {
        pn(() => ce()),
          setTimeout(() => ce(), 1e3),
          I(),
          ye(),
          window.addEventListener("resize", oe, { passive: !0 }),
          s("init");
      }),
        Xe(() => {
          $ && clearTimeout($),
            C && clearInterval(C),
            window.removeEventListener("resize", oe, { passive: !0 });
        });
      let ue = !1;
      const be = { x: 0, y: 0 },
        Se = { x: 0, y: 0 },
        Ee = Ve({ x: 0, y: 0 }),
        re = y(!1),
        ke = y(!1),
        Pe = () => {
          re.value = !0;
        },
        fe = () => {
          re.value = !1;
        };
      function k(g) {
        ["INPUT", "TEXTAREA", "SELECT"].includes(g.target.tagName) ||
          ((ue = g.type === "touchstart"),
          ue || g.preventDefault(),
          !((!ue && g.button !== 0) || ne.value) &&
            ((be.x = ue ? g.touches[0].clientX : g.clientX),
            (be.y = ue ? g.touches[0].clientY : g.clientY),
            document.addEventListener(ue ? "touchmove" : "mousemove", K, !0),
            document.addEventListener(ue ? "touchend" : "mouseup", ve, !0)));
      }
      const K = Yu((g) => {
        (ke.value = !0),
          (Se.x = ue ? g.touches[0].clientX : g.clientX),
          (Se.y = ue ? g.touches[0].clientY : g.clientY);
        const _ = Se.x - be.x,
          b = Se.y - be.y;
        (Ee.y = b), (Ee.x = _);
      }, c.throttle);
      function ve() {
        const g = c.dir === "rtl" ? -1 : 1,
          _ = Math.sign(Ee.x) * 0.4,
          b = Math.round(Ee.x / r.value + _) * g;
        if (b && !ue) {
          const E = (P) => {
            P.stopPropagation(), window.removeEventListener("click", E, !0);
          };
          window.addEventListener("click", E, !0);
        }
        De(m.value - b),
          (Ee.x = 0),
          (Ee.y = 0),
          (ke.value = !1),
          document.removeEventListener(ue ? "touchmove" : "mousemove", K, !0),
          document.removeEventListener(ue ? "touchend" : "mouseup", ve, !0);
      }
      function ye() {
        !c.autoplay ||
          c.autoplay <= 0 ||
          (C = setInterval(() => {
            (c.pauseAutoplayOnHover && re.value) || Ge();
          }, c.autoplay));
      }
      function Ne() {
        C && (clearInterval(C), (C = null)), ye();
      }
      const ne = y(!1);
      function De(g) {
        const _ = c.wrapAround ? g : Xn({ val: g, max: S.value, min: N.value });
        m.value === _ ||
          ne.value ||
          (s("slide-start", {
            slidingToIndex: g,
            currentSlideIndex: m.value,
            prevSlideIndex: v.value,
            slidesCount: a.value,
          }),
          (ne.value = !0),
          (v.value = m.value),
          (m.value = _),
          ($ = setTimeout(() => {
            if (c.wrapAround) {
              const b = sn({ val: _, max: S.value, min: 0 });
              b !== m.value &&
                ((m.value = b),
                s("loop", { currentSlideIndex: m.value, slidingToIndex: g }));
            }
            s("update:modelValue", m.value),
              s("slide-end", {
                currentSlideIndex: m.value,
                prevSlideIndex: v.value,
                slidesCount: a.value,
              }),
              (ne.value = !1),
              Ne();
          }, c.transition)));
      }
      function Ge() {
        De(m.value + c.itemsToScroll);
      }
      function At() {
        De(m.value - c.itemsToScroll);
      }
      const Te = { slideTo: De, next: Ge, prev: At };
      we("nav", Te), we("isSliding", ne);
      const w = V(() =>
        qu({ config: c, currentSlide: m.value, slidesCount: a.value })
      );
      we("slidesToScroll", w);
      const B = V(() => {
        const g = c.dir === "rtl" ? -1 : 1,
          _ = w.value * r.value * g;
        return {
          transform: `translateX(${Ee.x - _}px)`,
          transition: `${ne.value ? c.transition : 0}ms`,
          margin: c.wrapAround ? `0 -${a.value * r.value}px` : "",
          width: "100%",
        };
      });
      function O() {
        G(), I(), he(), ce(), Ne();
      }
      Object.keys(Pl).forEach((g) => {
        ["modelValue"].includes(g) || Je(() => e[g], O);
      }),
        Je(
          () => e.modelValue,
          (g) => {
            g !== m.value && De(Number(g));
          }
        ),
        Je(a, he),
        s("before-init"),
        G();
      const j = {
        config: c,
        slidesCount: a,
        slideWidth: r,
        next: Ge,
        prev: At,
        slideTo: De,
        currentSlide: m,
        maxSlide: S,
        minSlide: N,
        middleSlide: x,
      };
      n({
        updateBreakpointsConfigs: I,
        updateSlidesData: he,
        updateSlideWidth: ce,
        initDefaultConfigs: G,
        restartCarousel: O,
        slideTo: De,
        next: Ge,
        prev: At,
        nav: Te,
        data: j,
      });
      const ee = t.default || t.slides,
        p = t.addons,
        h = Ve(j);
      return () => {
        const g = Wi(ee == null ? void 0 : ee(h)),
          _ = (p == null ? void 0 : p(h)) || [];
        g.forEach((R, T) => (R.props.index = T));
        let b = g;
        if (c.wrapAround) {
          const R = g.map((A, U) =>
              wt(A, {
                index: -g.length + U,
                isClone: !0,
                key: `clone-before-${U}`,
              })
            ),
            T = g.map((A, U) =>
              wt(A, {
                index: g.length + U,
                isClone: !0,
                key: `clone-after-${U}`,
              })
            );
          b = [...R, ...g, ...T];
        }
        (i.value = g), (a.value = Math.max(g.length, 1));
        const E = se(
            "ol",
            {
              class: "carousel__track",
              style: B.value,
              onMousedownCapture: c.mouseDrag ? k : null,
              onTouchstartPassiveCapture: c.touchDrag ? k : null,
            },
            b
          ),
          P = se("div", { class: "carousel__viewport" }, E);
        return se(
          "section",
          {
            ref: l,
            class: {
              carousel: !0,
              "is-sliding": ne.value,
              "is-dragging": ke.value,
              "is-hover": re.value,
              "carousel--rtl": c.dir === "rtl",
            },
            dir: c.dir,
            "aria-label": c.i18n.ariaGallery,
            tabindex: "0",
            onMouseenter: Pe,
            onMouseleave: fe,
          },
          [P, _, se(Zu)]
        );
      };
    },
  }),
  Qn;
(function (e) {
  (e.arrowUp = "arrowUp"),
    (e.arrowDown = "arrowDown"),
    (e.arrowRight = "arrowRight"),
    (e.arrowLeft = "arrowLeft");
})(Qn || (Qn = {}));
const Ju = {
  arrowUp: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",
  arrowDown: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
  arrowRight: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",
  arrowLeft: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",
};
function Xu(e) {
  return e in Qn;
}
const eo = (e) => {
  const t = J("config", Ve(Object.assign({}, Re))),
    s = String(e.name),
    n = `icon${s.charAt(0).toUpperCase() + s.slice(1)}`;
  if (!s || typeof s != "string" || !Xu(s)) return;
  const o = Ju[s],
    l = se("path", { d: o }),
    i = t.i18n[n] || e.title || s,
    r = se("title", i);
  return se(
    "svg",
    {
      class: "carousel__icon",
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": i,
    },
    [r, l]
  );
};
eo.props = { name: String, title: String };
const ut = (e, { slots: t, attrs: s }) => {
    const { next: n, prev: o } = t || {},
      l = J("config", Ve(Object.assign({}, Re))),
      i = J("maxSlide", y(1)),
      r = J("minSlide", y(1)),
      a = J("currentSlide", y(1)),
      c = J("nav", {}),
      { dir: u, wrapAround: f, i18n: m } = l,
      v = u === "rtl",
      x = se(
        "button",
        {
          type: "button",
          class: [
            "carousel__prev",
            !f && a.value <= r.value && "carousel__prev--disabled",
            s == null ? void 0 : s.class,
          ],
          "aria-label": m.ariaPreviousSlide,
          onClick: c.prev,
        },
        (o == null ? void 0 : o()) ||
          se(eo, { name: v ? "arrowRight" : "arrowLeft" })
      ),
      S = se(
        "button",
        {
          type: "button",
          class: [
            "carousel__next",
            !f && a.value >= i.value && "carousel__next--disabled",
            s == null ? void 0 : s.class,
          ],
          "aria-label": m.ariaNextSlide,
          onClick: c.next,
        },
        (n == null ? void 0 : n()) ||
          se(eo, { name: v ? "arrowLeft" : "arrowRight" })
      );
    return [x, S];
  },
  dt = () => {
    const e = J("config", Ve(Object.assign({}, Re))),
      t = J("maxSlide", y(1)),
      s = J("minSlide", y(1)),
      n = J("currentSlide", y(1)),
      o = J("nav", {}),
      l = (r) => sn({ val: n.value, max: t.value, min: 0 }) === r,
      i = [];
    for (let r = s.value; r < t.value + 1; r++) {
      const a = se("button", {
          type: "button",
          class: {
            "carousel__pagination-button": !0,
            "carousel__pagination-button--active": l(r),
          },
          "aria-label": Gi(e.i18n.ariaNavigateToSlide, { slideNumber: r + 1 }),
          onClick: () => o.slideTo(r),
        }),
        c = se("li", { class: "carousel__pagination-item", key: r }, a);
      i.push(c);
    }
    return se("ol", { class: "carousel__pagination" }, i);
  };
var et = We({
  name: "CarouselSlide",
  props: {
    index: { type: Number, default: 1 },
    isClone: { type: Boolean, default: !1 },
  },
  setup(e, { slots: t }) {
    const s = J("config", Ve(Object.assign({}, Re))),
      n = J("currentSlide", y(0)),
      o = J("slidesToScroll", y(0)),
      l = J("isSliding", y(!1)),
      i = () => e.index === n.value,
      r = () => e.index === n.value - 1,
      a = () => e.index === n.value + 1,
      c = () => {
        const u = Math.floor(o.value),
          f = Math.ceil(o.value + s.itemsToShow - 1);
        return e.index >= u && e.index <= f;
      };
    return () => {
      var u;
      return se(
        "li",
        {
          style: { width: `${100 / s.itemsToShow}%` },
          class: {
            carousel__slide: !0,
            "carousel__slide--clone": e.isClone,
            "carousel__slide--visible": c(),
            "carousel__slide--active": i(),
            "carousel__slide--prev": r(),
            "carousel__slide--next": a(),
            "carousel__slide--sliding": l.value,
          },
          "aria-hidden": !c(),
        },
        (u = t.default) === null || u === void 0 ? void 0 : u.call(t)
      );
    };
  },
});
const Po = "/assets/logo-f192881e-f192881e.png",
  Qu = { class: "flex justify-center items-center py-5" },
  ed = ["src"],
  qi = {
    __name: "HelloWorld",
    setup(e) {
      return (t, s) => {
        const n = Ae("router-link");
        return (
          z(),
          le("div", null, [
            d("div", Qu, [
              M(
                n,
                { to: "/" },
                {
                  default: L(() => [
                    d(
                      "img",
                      { src: D(Po), class: "h-36 rounded-md", alt: "" },
                      null,
                      8,
                      ed
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
          ])
        );
      };
    },
  };
function xt(e, t, ...s) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...s) : o;
  }
  let n = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((o) => `"${o}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(n, xt), n);
}
var nn = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(nn || {}),
  Pt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Pt || {});
function It({
  visible: e = !0,
  features: t = 0,
  ourProps: s,
  theirProps: n,
  ...o
}) {
  var l;
  let i = Vi(n, s),
    r = Object.assign(o, { props: i });
  if (e || (t & 2 && i.static)) return Ln(r);
  if (t & 1) {
    let a = (l = i.unmount) == null || l ? 0 : 1;
    return xt(a, {
      0() {
        return null;
      },
      1() {
        return Ln({
          ...o,
          props: { ...i, hidden: !0, style: { display: "none" } },
        });
      },
    });
  }
  return Ln(r);
}
function Ln({ props: e, attrs: t, slots: s, slot: n, name: o }) {
  var l, i;
  let { as: r, ...a } = Zi(e, ["unmount", "static"]),
    c = (l = s.default) == null ? void 0 : l.call(s, n),
    u = {};
  if (n) {
    let f = !1,
      m = [];
    for (let [v, x] of Object.entries(n))
      typeof x == "boolean" && (f = !0), x === !0 && m.push(v);
    f && (u["data-headlessui-state"] = m.join(" "));
  }
  if (r === "template") {
    if (
      ((c = Yi(c ?? [])),
      Object.keys(a).length > 0 || Object.keys(t).length > 0)
    ) {
      let [f, ...m] = c ?? [];
      if (!td(f) || m.length > 0)
        throw new Error(
          [
            'Passing props on "template"!',
            "",
            `The current component <${o} /> is rendering a "template".`,
            "However we need to passthrough the following props:",
            Object.keys(a)
              .concat(Object.keys(t))
              .map((S) => S.trim())
              .filter((S, N, C) => C.indexOf(S) === N)
              .sort((S, N) => S.localeCompare(N))
              .map((S) => `  - ${S}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((S) => `  - ${S}`).join(`
`),
          ].join(`
`)
        );
      let v = Vi((i = f.props) != null ? i : {}, a),
        x = wt(f, v);
      for (let S in v)
        S.startsWith("on") && (x.props || (x.props = {}), (x.props[S] = v[S]));
      return x;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return se(r, Object.assign({}, a, u), { default: () => c });
}
function Yi(e) {
  return e.flatMap((t) => (t.type === me ? Yi(t.children) : [t]));
}
function Vi(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    s = {};
  for (let n of e)
    for (let o in n)
      o.startsWith("on") && typeof n[o] == "function"
        ? (s[o] != null || (s[o] = []), s[o].push(n[o]))
        : (t[o] = n[o]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(s).map((n) => [n, void 0]))
    );
  for (let n in s)
    Object.assign(t, {
      [n](o, ...l) {
        let i = s[n];
        for (let r of i) {
          if (o instanceof Event && o.defaultPrevented) return;
          r(o, ...l);
        }
      },
    });
  return t;
}
function Zi(e, t = []) {
  let s = Object.assign({}, e);
  for (let n of t) n in s && delete s[n];
  return s;
}
function td(e) {
  return e == null
    ? !1
    : typeof e.type == "string" ||
        typeof e.type == "object" ||
        typeof e.type == "function";
}
let sd = 0;
function nd() {
  return ++sd;
}
function Ji() {
  return nd();
}
var Xi = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(Xi || {});
function Oe(e) {
  var t;
  return e == null || e.value == null
    ? null
    : (t = e.value.$el) != null
    ? t
    : e.value;
}
let Qi = Symbol("Context");
var Ye = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Ye || {});
function od() {
  return No() !== null;
}
function No() {
  return J(Qi, null);
}
function ld(e) {
  we(Qi, e);
}
var id = Object.defineProperty,
  rd = (e, t, s) =>
    t in e
      ? id(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  Nl = (e, t, s) => (rd(e, typeof t != "symbol" ? t + "" : t, s), s);
class ad {
  constructor() {
    Nl(this, "current", this.detect()), Nl(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && ((this.currentId = 0), (this.current = t));
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let $s = new ad();
function ds(e) {
  if ($s.isServer) return null;
  if (e instanceof Node) return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = Oe(e);
    if (t) return t.ownerDocument;
  }
  return document;
}
let to = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var Ot = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(Ot || {}),
  er = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(er || {}),
  cd = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(cd || {});
function ud(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(to)).sort((t, s) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (s.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var tr = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(tr || {});
function dd(e, t = 0) {
  var s;
  return e === ((s = ds(e)) == null ? void 0 : s.body)
    ? !1
    : xt(t, {
        0() {
          return e.matches(to);
        },
        1() {
          let n = e;
          for (; n !== null; ) {
            if (n.matches(to)) return !0;
            n = n.parentElement;
          }
          return !1;
        },
      });
}
var pd = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(pd || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function Vt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let fd = ["textarea", "input"].join(",");
function md(e) {
  var t, s;
  return (s =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, fd)) !=
    null
    ? s
    : !1;
}
function hd(e, t = (s) => s) {
  return e.slice().sort((s, n) => {
    let o = t(s),
      l = t(n);
    if (o === null || l === null) return 0;
    let i = o.compareDocumentPosition(l);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function Ys(
  e,
  t,
  { sorted: s = !0, relativeTo: n = null, skipElements: o = [] } = {}
) {
  var l;
  let i =
      (l = Array.isArray(e)
        ? e.length > 0
          ? e[0].ownerDocument
          : document
        : e == null
        ? void 0
        : e.ownerDocument) != null
        ? l
        : document,
    r = Array.isArray(e) ? (s ? hd(e) : e) : ud(e);
  o.length > 0 && r.length > 1 && (r = r.filter((x) => !o.includes(x))),
    (n = n ?? i.activeElement);
  let a = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    c = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, r.indexOf(n)) - 1;
      if (t & 4) return Math.max(0, r.indexOf(n)) + 1;
      if (t & 8) return r.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    u = t & 32 ? { preventScroll: !0 } : {},
    f = 0,
    m = r.length,
    v;
  do {
    if (f >= m || f + m <= 0) return 0;
    let x = c + f;
    if (t & 16) x = (x + m) % m;
    else {
      if (x < 0) return 3;
      if (x >= m) return 1;
    }
    (v = r[x]), v == null || v.focus(u), (f += a);
  } while (v !== i.activeElement);
  return t & 6 && md(v) && v.select(), 2;
}
function Hs(e, t, s) {
  $s.isServer ||
    rt((n) => {
      document.addEventListener(e, t, s),
        n(() => document.removeEventListener(e, t, s));
    });
}
function sr(e, t, s) {
  $s.isServer ||
    rt((n) => {
      window.addEventListener(e, t, s),
        n(() => window.removeEventListener(e, t, s));
    });
}
function gd(e, t, s = V(() => !0)) {
  function n(l, i) {
    if (!s.value || l.defaultPrevented) return;
    let r = i(l);
    if (r === null || !r.getRootNode().contains(r)) return;
    let a = (function c(u) {
      return typeof u == "function"
        ? c(u())
        : Array.isArray(u) || u instanceof Set
        ? u
        : [u];
    })(e);
    for (let c of a) {
      if (c === null) continue;
      let u = c instanceof HTMLElement ? c : Oe(c);
      if (
        (u != null && u.contains(r)) ||
        (l.composed && l.composedPath().includes(u))
      )
        return;
    }
    return !dd(r, tr.Loose) && r.tabIndex !== -1 && l.preventDefault(), t(l, r);
  }
  let o = y(null);
  Hs(
    "pointerdown",
    (l) => {
      var i, r;
      s.value &&
        (o.value =
          ((r = (i = l.composedPath) == null ? void 0 : i.call(l)) == null
            ? void 0
            : r[0]) || l.target);
    },
    !0
  ),
    Hs(
      "mousedown",
      (l) => {
        var i, r;
        s.value &&
          (o.value =
            ((r = (i = l.composedPath) == null ? void 0 : i.call(l)) == null
              ? void 0
              : r[0]) || l.target);
      },
      !0
    ),
    Hs(
      "click",
      (l) => {
        o.value && (n(l, () => o.value), (o.value = null));
      },
      !0
    ),
    Hs(
      "touchend",
      (l) => n(l, () => (l.target instanceof HTMLElement ? l.target : null)),
      !0
    ),
    sr(
      "blur",
      (l) =>
        n(l, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
var on = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(on || {});
let so = We({
  name: "Hidden",
  props: {
    as: { type: [Object, String], default: "div" },
    features: { type: Number, default: 1 },
  },
  setup(e, { slots: t, attrs: s }) {
    return () => {
      let { features: n, ...o } = e,
        l = {
          "aria-hidden": (n & 2) === 2 ? !0 : void 0,
          style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...((n & 4) === 4 && (n & 2) !== 2 && { display: "none" }),
          },
        };
      return It({
        ourProps: l,
        theirProps: o,
        slot: {},
        attrs: s,
        slots: t,
        name: "Hidden",
      });
    };
  },
});
function xd() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function bn() {
  let e = [],
    t = {
      addEventListener(s, n, o, l) {
        return (
          s.addEventListener(n, o, l),
          t.add(() => s.removeEventListener(n, o, l))
        );
      },
      requestAnimationFrame(...s) {
        let n = requestAnimationFrame(...s);
        t.add(() => cancelAnimationFrame(n));
      },
      nextFrame(...s) {
        t.requestAnimationFrame(() => {
          t.requestAnimationFrame(...s);
        });
      },
      setTimeout(...s) {
        let n = setTimeout(...s);
        t.add(() => clearTimeout(n));
      },
      style(s, n, o) {
        let l = s.style.getPropertyValue(n);
        return (
          Object.assign(s.style, { [n]: o }),
          this.add(() => {
            Object.assign(s.style, { [n]: l });
          })
        );
      },
      group(s) {
        let n = bn();
        return s(n), this.add(() => n.dispose());
      },
      add(s) {
        return (
          e.push(s),
          () => {
            let n = e.indexOf(s);
            if (n >= 0) for (let o of e.splice(n, 1)) o();
          }
        );
      },
      dispose() {
        for (let s of e.splice(0)) s();
      },
    };
  return t;
}
var bs = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(bs || {});
function vd() {
  let e = y(0);
  return (
    sr("keydown", (t) => {
      t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
    }),
    e
  );
}
function nr(e, t, s, n) {
  $s.isServer ||
    rt((o) => {
      (e = e ?? window),
        e.addEventListener(t, s, n),
        o(() => e.removeEventListener(t, s, n));
    });
}
function or(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function _d(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
function lr(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let s of e.value) {
    let n = Oe(s);
    n instanceof HTMLElement && t.add(n);
  }
  return t;
}
var ir = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(ir || {});
let gs = Object.assign(
    We({
      name: "FocusTrap",
      props: {
        as: { type: [Object, String], default: "div" },
        initialFocus: { type: Object, default: null },
        features: { type: Number, default: 30 },
        containers: { type: [Object, Function], default: y(new Set()) },
      },
      inheritAttrs: !1,
      setup(e, { attrs: t, slots: s, expose: n }) {
        let o = y(null);
        n({ el: o, $el: o });
        let l = V(() => ds(o)),
          i = y(!1);
        je(() => (i.value = !0)),
          Xe(() => (i.value = !1)),
          yd(
            { ownerDocument: l },
            V(() => i.value && !!(e.features & 16))
          );
        let r = wd(
          {
            ownerDocument: l,
            container: o,
            initialFocus: V(() => e.initialFocus),
          },
          V(() => i.value && !!(e.features & 2))
        );
        Sd(
          {
            ownerDocument: l,
            container: o,
            containers: e.containers,
            previousActiveElement: r,
          },
          V(() => i.value && !!(e.features & 8))
        );
        let a = vd();
        function c(v) {
          let x = Oe(o);
          x &&
            ((S) => S())(() => {
              xt(a.value, {
                [bs.Forwards]: () => {
                  Ys(x, Ot.First, { skipElements: [v.relatedTarget] });
                },
                [bs.Backwards]: () => {
                  Ys(x, Ot.Last, { skipElements: [v.relatedTarget] });
                },
              });
            });
        }
        let u = y(!1);
        function f(v) {
          v.key === "Tab" &&
            ((u.value = !0),
            requestAnimationFrame(() => {
              u.value = !1;
            }));
        }
        function m(v) {
          if (!i.value) return;
          let x = lr(e.containers);
          Oe(o) instanceof HTMLElement && x.add(Oe(o));
          let S = v.relatedTarget;
          S instanceof HTMLElement &&
            S.dataset.headlessuiFocusGuard !== "true" &&
            (rr(x, S) ||
              (u.value
                ? Ys(
                    Oe(o),
                    xt(a.value, {
                      [bs.Forwards]: () => Ot.Next,
                      [bs.Backwards]: () => Ot.Previous,
                    }) | Ot.WrapAround,
                    { relativeTo: v.target }
                  )
                : v.target instanceof HTMLElement && Vt(v.target)));
        }
        return () => {
          let v = {},
            x = { ref: o, onKeydown: f, onFocusout: m },
            { features: S, initialFocus: N, containers: C, ...$ } = e;
          return se(me, [
            !!(S & 4) &&
              se(so, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: c,
                features: on.Focusable,
              }),
            It({
              ourProps: x,
              theirProps: { ...t, ...$ },
              slot: v,
              attrs: t,
              slots: s,
              name: "FocusTrap",
            }),
            !!(S & 4) &&
              se(so, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: c,
                features: on.Focusable,
              }),
          ]);
        };
      },
    }),
    { features: ir }
  ),
  Kt = [];
_d(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      Kt[0] !== t.target &&
      (Kt.unshift(t.target),
      (Kt = Kt.filter((s) => s != null && s.isConnected)),
      Kt.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function bd(e) {
  let t = y(Kt.slice());
  return (
    Je(
      [e],
      ([s], [n]) => {
        n === !0 && s === !1
          ? or(() => {
              t.value.splice(0);
            })
          : n === !1 && s === !0 && (t.value = Kt.slice());
      },
      { flush: "post" }
    ),
    () => {
      var s;
      return (s = t.value.find((n) => n != null && n.isConnected)) != null
        ? s
        : null;
    }
  );
}
function yd({ ownerDocument: e }, t) {
  let s = bd(t);
  je(() => {
    rt(
      () => {
        var n, o;
        t.value ||
          (((n = e.value) == null ? void 0 : n.activeElement) ===
            ((o = e.value) == null ? void 0 : o.body) &&
            Vt(s()));
      },
      { flush: "post" }
    );
  }),
    Xe(() => {
      t.value && Vt(s());
    });
}
function wd({ ownerDocument: e, container: t, initialFocus: s }, n) {
  let o = y(null),
    l = y(!1);
  return (
    je(() => (l.value = !0)),
    Xe(() => (l.value = !1)),
    je(() => {
      Je(
        [t, s, n],
        (i, r) => {
          if (i.every((c, u) => (r == null ? void 0 : r[u]) === c) || !n.value)
            return;
          let a = Oe(t);
          a &&
            or(() => {
              var c, u;
              if (!l.value) return;
              let f = Oe(s),
                m = (c = e.value) == null ? void 0 : c.activeElement;
              if (f) {
                if (f === m) {
                  o.value = m;
                  return;
                }
              } else if (a.contains(m)) {
                o.value = m;
                return;
              }
              f
                ? Vt(f)
                : Ys(a, Ot.First | Ot.NoScroll) === er.Error &&
                  console.warn(
                    "There are no focusable elements inside the <FocusTrap />"
                  ),
                (o.value = (u = e.value) == null ? void 0 : u.activeElement);
            });
        },
        { immediate: !0, flush: "post" }
      );
    }),
    o
  );
}
function Sd(
  { ownerDocument: e, container: t, containers: s, previousActiveElement: n },
  o
) {
  var l;
  nr(
    (l = e.value) == null ? void 0 : l.defaultView,
    "focus",
    (i) => {
      if (!o.value) return;
      let r = lr(s);
      Oe(t) instanceof HTMLElement && r.add(Oe(t));
      let a = n.value;
      if (!a) return;
      let c = i.target;
      c && c instanceof HTMLElement
        ? rr(r, c)
          ? ((n.value = c), Vt(c))
          : (i.preventDefault(), i.stopPropagation(), Vt(a))
        : Vt(n.value);
    },
    !0
  );
}
function rr(e, t) {
  for (let s of e) if (s.contains(t)) return !0;
  return !1;
}
let $n = new Map(),
  xs = new Map();
function Ll(e, t = y(!0)) {
  rt((s) => {
    var n;
    if (!t.value) return;
    let o = Oe(e);
    if (!o) return;
    s(function () {
      var i;
      if (!o) return;
      let r = (i = xs.get(o)) != null ? i : 1;
      if ((r === 1 ? xs.delete(o) : xs.set(o, r - 1), r !== 1)) return;
      let a = $n.get(o);
      a &&
        (a["aria-hidden"] === null
          ? o.removeAttribute("aria-hidden")
          : o.setAttribute("aria-hidden", a["aria-hidden"]),
        (o.inert = a.inert),
        $n.delete(o));
    });
    let l = (n = xs.get(o)) != null ? n : 0;
    xs.set(o, l + 1),
      l === 0 &&
        ($n.set(o, {
          "aria-hidden": o.getAttribute("aria-hidden"),
          inert: o.inert,
        }),
        o.setAttribute("aria-hidden", "true"),
        (o.inert = !0));
  });
}
let ar = Symbol("ForcePortalRootContext");
function Ed() {
  return J(ar, !1);
}
let $l = We({
  name: "ForcePortalRoot",
  props: {
    as: { type: [Object, String], default: "template" },
    force: { type: Boolean, default: !1 },
  },
  setup(e, { slots: t, attrs: s }) {
    return (
      we(ar, e.force),
      () => {
        let { force: n, ...o } = e;
        return It({
          theirProps: o,
          ourProps: {},
          slot: {},
          slots: t,
          attrs: s,
          name: "ForcePortalRoot",
        });
      }
    );
  },
});
function Ad(e) {
  let t = ds(e);
  if (!t) {
    if (e === null) return null;
    throw new Error(
      `[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`
    );
  }
  let s = t.getElementById("headlessui-portal-root");
  if (s) return s;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let Md = We({
    name: "Portal",
    props: { as: { type: [Object, String], default: "div" } },
    setup(e, { slots: t, attrs: s }) {
      let n = y(null),
        o = V(() => ds(n)),
        l = Ed(),
        i = J(cr, null),
        r = y(l === !0 || i == null ? Ad(n.value) : i.resolveTarget());
      rt(() => {
        l || (i != null && (r.value = i.resolveTarget()));
      });
      let a = J(no, null);
      return (
        je(() => {
          let c = Oe(n);
          c && a && Xe(a.register(c));
        }),
        Xe(() => {
          var c, u;
          let f =
            (c = o.value) == null
              ? void 0
              : c.getElementById("headlessui-portal-root");
          f &&
            r.value === f &&
            r.value.children.length <= 0 &&
            ((u = r.value.parentElement) == null || u.removeChild(r.value));
        }),
        () => {
          if (r.value === null) return null;
          let c = { ref: n, "data-headlessui-portal": "" };
          return se(
            ec,
            { to: r.value },
            It({
              ourProps: c,
              theirProps: e,
              slot: {},
              attrs: s,
              slots: t,
              name: "Portal",
            })
          );
        }
      );
    },
  }),
  no = Symbol("PortalParentContext");
function Rd() {
  let e = J(no, null),
    t = y([]);
  function s(l) {
    return t.value.push(l), e && e.register(l), () => n(l);
  }
  function n(l) {
    let i = t.value.indexOf(l);
    i !== -1 && t.value.splice(i, 1), e && e.unregister(l);
  }
  let o = { register: s, unregister: n, portals: t };
  return [
    t,
    We({
      name: "PortalWrapper",
      setup(l, { slots: i }) {
        return (
          we(no, o),
          () => {
            var r;
            return (r = i.default) == null ? void 0 : r.call(i);
          }
        );
      },
    }),
  ];
}
let cr = Symbol("PortalGroupContext"),
  Cd = We({
    name: "PortalGroup",
    props: {
      as: { type: [Object, String], default: "template" },
      target: { type: Object, default: null },
    },
    setup(e, { attrs: t, slots: s }) {
      let n = Ve({
        resolveTarget() {
          return e.target;
        },
      });
      return (
        we(cr, n),
        () => {
          let { target: o, ...l } = e;
          return It({
            theirProps: l,
            ourProps: {},
            slot: {},
            attrs: t,
            slots: s,
            name: "PortalGroup",
          });
        }
      );
    },
  }),
  ur = Symbol("StackContext");
var oo = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  oo || {}
);
function Td() {
  return J(ur, () => {});
}
function Od({ type: e, enabled: t, element: s, onUpdate: n }) {
  let o = Td();
  function l(...i) {
    n == null || n(...i), o(...i);
  }
  je(() => {
    Je(
      t,
      (i, r) => {
        i ? l(0, e, s) : r === !0 && l(1, e, s);
      },
      { immediate: !0, flush: "sync" }
    );
  }),
    Xe(() => {
      t.value && l(1, e, s);
    }),
    we(ur, l);
}
let Pd = Symbol("DescriptionContext");
function Nd({ slot: e = y({}), name: t = "Description", props: s = {} } = {}) {
  let n = y([]);
  function o(l) {
    return (
      n.value.push(l),
      () => {
        let i = n.value.indexOf(l);
        i !== -1 && n.value.splice(i, 1);
      }
    );
  }
  return (
    we(Pd, { register: o, slot: e, name: t, props: s }),
    V(() => (n.value.length > 0 ? n.value.join(" ") : void 0))
  );
}
function Ld(e) {
  let t = ci(e.getSnapshot());
  return (
    Xe(
      e.subscribe(() => {
        t.value = e.getSnapshot();
      })
    ),
    t
  );
}
function $d(e, t) {
  let s = e(),
    n = new Set();
  return {
    getSnapshot() {
      return s;
    },
    subscribe(o) {
      return n.add(o), () => n.delete(o);
    },
    dispatch(o, ...l) {
      let i = t[o].call(s, ...l);
      i && ((s = i), n.forEach((r) => r()));
    },
  };
}
function Bd() {
  let e;
  return {
    before({ doc: t }) {
      var s;
      let n = t.documentElement;
      e = ((s = t.defaultView) != null ? s : window).innerWidth - n.clientWidth;
    },
    after({ doc: t, d: s }) {
      let n = t.documentElement,
        o = n.clientWidth - n.offsetWidth,
        l = e - o;
      s.style(n, "paddingRight", `${l}px`);
    },
  };
}
function Dd() {
  if (!xd()) return {};
  let e;
  return {
    before() {
      e = window.pageYOffset;
    },
    after({ doc: t, d: s, meta: n }) {
      function o(i) {
        return n.containers.flatMap((r) => r()).some((r) => r.contains(i));
      }
      s.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
      let l = null;
      s.addEventListener(
        t,
        "click",
        (i) => {
          if (i.target instanceof HTMLElement)
            try {
              let r = i.target.closest("a");
              if (!r) return;
              let { hash: a } = new URL(r.href),
                c = t.querySelector(a);
              c && !o(c) && (l = c);
            } catch {}
        },
        !0
      ),
        s.addEventListener(
          t,
          "touchmove",
          (i) => {
            i.target instanceof HTMLElement &&
              !o(i.target) &&
              i.preventDefault();
          },
          { passive: !1 }
        ),
        s.add(() => {
          window.scrollTo(0, window.pageYOffset + e),
            l &&
              l.isConnected &&
              (l.scrollIntoView({ block: "nearest" }), (l = null));
        });
    },
  };
}
function Id() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Fd(e) {
  let t = {};
  for (let s of e) Object.assign(t, s(t));
  return t;
}
let Wt = $d(() => new Map(), {
  PUSH(e, t) {
    var s;
    let n =
      (s = this.get(e)) != null
        ? s
        : { doc: e, count: 0, d: bn(), meta: new Set() };
    return n.count++, n.meta.add(t), this.set(e, n), this;
  },
  POP(e, t) {
    let s = this.get(e);
    return s && (s.count--, s.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: s }) {
    let n = { doc: e, d: t, meta: Fd(s) },
      o = [Dd(), Bd(), Id()];
    o.forEach(({ before: l }) => (l == null ? void 0 : l(n))),
      o.forEach(({ after: l }) => (l == null ? void 0 : l(n)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
Wt.subscribe(() => {
  let e = Wt.getSnapshot(),
    t = new Map();
  for (let [s] of e) t.set(s, s.documentElement.style.overflow);
  for (let s of e.values()) {
    let n = t.get(s.doc) === "hidden",
      o = s.count !== 0;
    ((o && !n) || (!o && n)) &&
      Wt.dispatch(s.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", s),
      s.count === 0 && Wt.dispatch("TEARDOWN", s);
  }
});
function Ud(e, t, s) {
  let n = Ld(Wt),
    o = V(() => {
      let l = e.value ? n.value.get(e.value) : void 0;
      return l ? l.count > 0 : !1;
    });
  return (
    Je(
      [e, t],
      ([l, i], [r], a) => {
        if (!l || !i) return;
        Wt.dispatch("PUSH", l, s);
        let c = !1;
        a(() => {
          c || (Wt.dispatch("POP", r ?? l, s), (c = !0));
        });
      },
      { immediate: !0 }
    ),
    o
  );
}
function jd({ defaultContainers: e = [], portals: t } = {}) {
  let s = y(null),
    n = ds(s);
  function o() {
    var l;
    let i = [];
    for (let r of e)
      r !== null &&
        (r instanceof HTMLElement
          ? i.push(r)
          : "value" in r && r.value instanceof HTMLElement && i.push(r.value));
    if (t != null && t.value) for (let r of t.value) i.push(r);
    for (let r of (l =
      n == null ? void 0 : n.querySelectorAll("html > *, body > *")) != null
      ? l
      : [])
      r !== document.body &&
        r !== document.head &&
        r instanceof HTMLElement &&
        r.id !== "headlessui-portal-root" &&
        (r.contains(Oe(s)) || i.some((a) => r.contains(a)) || i.push(r));
    return i;
  }
  return {
    resolveContainers: o,
    contains(l) {
      return o().some((i) => i.contains(l));
    },
    mainTreeNodeRef: s,
    MainTreeNode() {
      return se(so, { features: on.Hidden, ref: s });
    },
  };
}
var kd = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(kd || {});
let Bl = Symbol("DialogContext"),
  Ks = "DC8F892D-2EBD-447C-A4C8-A03058436FF4",
  Hd = We({
    name: "Dialog",
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: "div" },
      static: { type: Boolean, default: !1 },
      unmount: { type: Boolean, default: !0 },
      open: { type: [Boolean, String], default: Ks },
      initialFocus: { type: Object, default: null },
      id: { type: String, default: () => `headlessui-dialog-${Ji()}` },
    },
    emits: { close: (e) => !0 },
    setup(e, { emit: t, attrs: s, slots: n, expose: o }) {
      var l;
      let i = y(!1);
      je(() => {
        i.value = !0;
      });
      let r = y(0),
        a = No(),
        c = V(() =>
          e.open === Ks && a !== null ? (a.value & Ye.Open) === Ye.Open : e.open
        ),
        u = y(null),
        f = V(() => ds(u));
      if ((o({ el: u, $el: u }), !(e.open !== Ks || a !== null)))
        throw new Error(
          "You forgot to provide an `open` prop to the `Dialog`."
        );
      if (typeof c.value != "boolean")
        throw new Error(
          `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${
            c.value === Ks ? void 0 : e.open
          }`
        );
      let m = V(() => (i.value && c.value ? 0 : 1)),
        v = V(() => m.value === 0),
        x = V(() => r.value > 1),
        S = J(Bl, null) !== null,
        [N, C] = Rd(),
        {
          resolveContainers: $,
          mainTreeNodeRef: G,
          MainTreeNode: I,
        } = jd({
          portals: N,
          defaultContainers: [
            V(() => {
              var k;
              return (k = re.panelRef.value) != null ? k : u.value;
            }),
          ],
        }),
        ae = V(() => (x.value ? "parent" : "leaf")),
        oe = V(() => (a !== null ? (a.value & Ye.Closing) === Ye.Closing : !1)),
        ce = V(() => (S || oe.value ? !1 : v.value)),
        he = V(() => {
          var k, K, ve;
          return (ve = Array.from(
            (K =
              (k = f.value) == null
                ? void 0
                : k.querySelectorAll("body > *")) != null
              ? K
              : []
          ).find((ye) =>
            ye.id === "headlessui-portal-root"
              ? !1
              : ye.contains(Oe(G)) && ye instanceof HTMLElement
          )) != null
            ? ve
            : null;
        });
      Ll(he, ce);
      let ue = V(() => (x.value ? !0 : v.value)),
        be = V(() => {
          var k, K, ve;
          return (ve = Array.from(
            (K =
              (k = f.value) == null
                ? void 0
                : k.querySelectorAll("[data-headlessui-portal]")) != null
              ? K
              : []
          ).find((ye) => ye.contains(Oe(G)) && ye instanceof HTMLElement)) !=
            null
            ? ve
            : null;
        });
      Ll(be, ue),
        Od({
          type: "Dialog",
          enabled: V(() => m.value === 0),
          element: u,
          onUpdate: (k, K) => {
            if (K === "Dialog")
              return xt(k, {
                [oo.Add]: () => (r.value += 1),
                [oo.Remove]: () => (r.value -= 1),
              });
          },
        });
      let Se = Nd({
          name: "DialogDescription",
          slot: V(() => ({ open: c.value })),
        }),
        Ee = y(null),
        re = {
          titleId: Ee,
          panelRef: y(null),
          dialogState: m,
          setTitleId(k) {
            Ee.value !== k && (Ee.value = k);
          },
          close() {
            t("close", !1);
          },
        };
      we(Bl, re);
      let ke = V(() => !(!v.value || x.value));
      gd(
        $,
        (k, K) => {
          re.close(), pn(() => (K == null ? void 0 : K.focus()));
        },
        ke
      );
      let Pe = V(() => !(x.value || m.value !== 0));
      nr((l = f.value) == null ? void 0 : l.defaultView, "keydown", (k) => {
        Pe.value &&
          (k.defaultPrevented ||
            (k.key === Xi.Escape &&
              (k.preventDefault(), k.stopPropagation(), re.close())));
      });
      let fe = V(() => !(oe.value || m.value !== 0 || S));
      return (
        Ud(f, fe, (k) => {
          var K;
          return { containers: [...((K = k.containers) != null ? K : []), $] };
        }),
        rt((k) => {
          if (m.value !== 0) return;
          let K = Oe(u);
          if (!K) return;
          let ve = new ResizeObserver((ye) => {
            for (let Ne of ye) {
              let ne = Ne.target.getBoundingClientRect();
              ne.x === 0 &&
                ne.y === 0 &&
                ne.width === 0 &&
                ne.height === 0 &&
                re.close();
            }
          });
          ve.observe(K), k(() => ve.disconnect());
        }),
        () => {
          let { id: k, open: K, initialFocus: ve, ...ye } = e,
            Ne = {
              ...s,
              ref: u,
              id: k,
              role: "dialog",
              "aria-modal": m.value === 0 ? !0 : void 0,
              "aria-labelledby": Ee.value,
              "aria-describedby": Se.value,
            },
            ne = { open: m.value === 0 };
          return se($l, { force: !0 }, () => [
            se(Md, () =>
              se(Cd, { target: u.value }, () =>
                se($l, { force: !1 }, () =>
                  se(
                    gs,
                    {
                      initialFocus: ve,
                      containers: $,
                      features: v.value
                        ? xt(ae.value, {
                            parent: gs.features.RestoreFocus,
                            leaf: gs.features.All & ~gs.features.FocusLock,
                          })
                        : gs.features.None,
                    },
                    () =>
                      se(C, {}, () =>
                        It({
                          ourProps: Ne,
                          theirProps: { ...ye, ...s },
                          slot: ne,
                          attrs: s,
                          slots: n,
                          visible: m.value === 0,
                          features: nn.RenderStrategy | nn.Static,
                          name: "Dialog",
                        })
                      )
                  )
                )
              )
            ),
            se(I),
          ]);
        }
      );
    },
  });
function Kd(e) {
  let t = { called: !1 };
  return (...s) => {
    if (!t.called) return (t.called = !0), e(...s);
  };
}
function Bn(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function zs(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var lo = ((e) => ((e.Finished = "finished"), (e.Cancelled = "cancelled"), e))(
  lo || {}
);
function zd(e, t) {
  let s = bn();
  if (!e) return s.dispose;
  let { transitionDuration: n, transitionDelay: o } = getComputedStyle(e),
    [l, i] = [n, o].map((r) => {
      let [a = 0] = r
        .split(",")
        .filter(Boolean)
        .map((c) => (c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3))
        .sort((c, u) => u - c);
      return a;
    });
  return (
    l !== 0 ? s.setTimeout(() => t("finished"), l + i) : t("finished"),
    s.add(() => t("cancelled")),
    s.dispose
  );
}
function Dl(e, t, s, n, o, l) {
  let i = bn(),
    r = l !== void 0 ? Kd(l) : () => {};
  return (
    zs(e, ...o),
    Bn(e, ...t, ...s),
    i.nextFrame(() => {
      zs(e, ...s),
        Bn(e, ...n),
        i.add(zd(e, (a) => (zs(e, ...n, ...t), Bn(e, ...o), r(a))));
    }),
    i.add(() => zs(e, ...t, ...s, ...n, ...o)),
    i.add(() => r("cancelled")),
    i.dispose
  );
}
function jt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Lo = Symbol("TransitionContext");
var Wd = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Wd || {});
function Gd() {
  return J(Lo, null) !== null;
}
function qd() {
  let e = J(Lo, null);
  if (e === null)
    throw new Error(
      "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
    );
  return e;
}
function Yd() {
  let e = J($o, null);
  if (e === null)
    throw new Error(
      "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
    );
  return e;
}
let $o = Symbol("NestingContext");
function yn(e) {
  return "children" in e
    ? yn(e.children)
    : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function dr(e) {
  let t = y([]),
    s = y(!1);
  je(() => (s.value = !0)), Xe(() => (s.value = !1));
  function n(l, i = Pt.Hidden) {
    let r = t.value.findIndex(({ id: a }) => a === l);
    r !== -1 &&
      (xt(i, {
        [Pt.Unmount]() {
          t.value.splice(r, 1);
        },
        [Pt.Hidden]() {
          t.value[r].state = "hidden";
        },
      }),
      !yn(t) && s.value && (e == null || e()));
  }
  function o(l) {
    let i = t.value.find(({ id: r }) => r === l);
    return (
      i
        ? i.state !== "visible" && (i.state = "visible")
        : t.value.push({ id: l, state: "visible" }),
      () => n(l, Pt.Unmount)
    );
  }
  return { children: t, register: o, unregister: n };
}
let pr = nn.RenderStrategy,
  io = We({
    props: {
      as: { type: [Object, String], default: "div" },
      show: { type: [Boolean], default: null },
      unmount: { type: [Boolean], default: !0 },
      appear: { type: [Boolean], default: !1 },
      enter: { type: [String], default: "" },
      enterFrom: { type: [String], default: "" },
      enterTo: { type: [String], default: "" },
      entered: { type: [String], default: "" },
      leave: { type: [String], default: "" },
      leaveFrom: { type: [String], default: "" },
      leaveTo: { type: [String], default: "" },
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0,
    },
    setup(e, { emit: t, attrs: s, slots: n, expose: o }) {
      let l = y(0);
      function i() {
        (l.value |= Ye.Opening), t("beforeEnter");
      }
      function r() {
        (l.value &= ~Ye.Opening), t("afterEnter");
      }
      function a() {
        (l.value |= Ye.Closing), t("beforeLeave");
      }
      function c() {
        (l.value &= ~Ye.Closing), t("afterLeave");
      }
      if (!Gd() && od())
        return () =>
          se(
            fr,
            {
              ...e,
              onBeforeEnter: i,
              onAfterEnter: r,
              onBeforeLeave: a,
              onAfterLeave: c,
            },
            n
          );
      let u = y(null),
        f = V(() => (e.unmount ? Pt.Unmount : Pt.Hidden));
      o({ el: u, $el: u });
      let { show: m, appear: v } = qd(),
        { register: x, unregister: S } = Yd(),
        N = y(m.value ? "visible" : "hidden"),
        C = { value: !0 },
        $ = Ji(),
        G = { value: !1 },
        I = dr(() => {
          !G.value && N.value !== "hidden" && ((N.value = "hidden"), S($), c());
        });
      je(() => {
        let re = x($);
        Xe(re);
      }),
        rt(() => {
          if (f.value === Pt.Hidden && $) {
            if (m.value && N.value !== "visible") {
              N.value = "visible";
              return;
            }
            xt(N.value, { hidden: () => S($), visible: () => x($) });
          }
        });
      let ae = jt(e.enter),
        oe = jt(e.enterFrom),
        ce = jt(e.enterTo),
        he = jt(e.entered),
        ue = jt(e.leave),
        be = jt(e.leaveFrom),
        Se = jt(e.leaveTo);
      je(() => {
        rt(() => {
          if (N.value === "visible") {
            let re = Oe(u);
            if (re instanceof Comment && re.data === "")
              throw new Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }
        });
      });
      function Ee(re) {
        let ke = C.value && !v.value,
          Pe = Oe(u);
        !Pe ||
          !(Pe instanceof HTMLElement) ||
          ke ||
          ((G.value = !0),
          m.value && i(),
          m.value || a(),
          re(
            m.value
              ? Dl(Pe, ae, oe, ce, he, (fe) => {
                  (G.value = !1), fe === lo.Finished && r();
                })
              : Dl(Pe, ue, be, Se, he, (fe) => {
                  (G.value = !1),
                    fe === lo.Finished &&
                      (yn(I) || ((N.value = "hidden"), S($), c()));
                })
          ));
      }
      return (
        je(() => {
          Je(
            [m],
            (re, ke, Pe) => {
              Ee(Pe), (C.value = !1);
            },
            { immediate: !0 }
          );
        }),
        we($o, I),
        ld(
          V(
            () => xt(N.value, { visible: Ye.Open, hidden: Ye.Closed }) | l.value
          )
        ),
        () => {
          let {
              appear: re,
              show: ke,
              enter: Pe,
              enterFrom: fe,
              enterTo: k,
              entered: K,
              leave: ve,
              leaveFrom: ye,
              leaveTo: Ne,
              ...ne
            } = e,
            De = { ref: u },
            Ge = {
              ...ne,
              ...(v.value && m.value && $s.isServer
                ? { class: Gt([s.class, ne.class, ...ae, ...oe]) }
                : {}),
            };
          return It({
            theirProps: Ge,
            ourProps: De,
            slot: {},
            slots: n,
            attrs: s,
            features: pr,
            visible: N.value === "visible",
            name: "TransitionChild",
          });
        }
      );
    },
  }),
  Vd = io,
  fr = We({
    inheritAttrs: !1,
    props: {
      as: { type: [Object, String], default: "div" },
      show: { type: [Boolean], default: null },
      unmount: { type: [Boolean], default: !0 },
      appear: { type: [Boolean], default: !1 },
      enter: { type: [String], default: "" },
      enterFrom: { type: [String], default: "" },
      enterTo: { type: [String], default: "" },
      entered: { type: [String], default: "" },
      leave: { type: [String], default: "" },
      leaveFrom: { type: [String], default: "" },
      leaveTo: { type: [String], default: "" },
    },
    emits: {
      beforeEnter: () => !0,
      afterEnter: () => !0,
      beforeLeave: () => !0,
      afterLeave: () => !0,
    },
    setup(e, { emit: t, attrs: s, slots: n }) {
      let o = No(),
        l = V(() =>
          e.show === null && o !== null
            ? (o.value & Ye.Open) === Ye.Open
            : e.show
        );
      rt(() => {
        if (![!0, !1].includes(l.value))
          throw new Error(
            'A <Transition /> is used but it is missing a `:show="true | false"` prop.'
          );
      });
      let i = y(l.value ? "visible" : "hidden"),
        r = dr(() => {
          i.value = "hidden";
        }),
        a = y(!0),
        c = { show: l, appear: V(() => e.appear || !a.value) };
      return (
        je(() => {
          rt(() => {
            (a.value = !1),
              l.value ? (i.value = "visible") : yn(r) || (i.value = "hidden");
          });
        }),
        we($o, r),
        we(Lo, c),
        () => {
          let u = Zi(e, [
              "show",
              "appear",
              "unmount",
              "onBeforeEnter",
              "onBeforeLeave",
              "onAfterEnter",
              "onAfterLeave",
            ]),
            f = { unmount: e.unmount };
          return It({
            ourProps: { ...f, as: "template" },
            theirProps: {},
            slot: {},
            slots: {
              ...n,
              default: () => [
                se(
                  Vd,
                  {
                    onBeforeEnter: () => t("beforeEnter"),
                    onAfterEnter: () => t("afterEnter"),
                    onBeforeLeave: () => t("beforeLeave"),
                    onAfterLeave: () => t("afterLeave"),
                    ...s,
                    ...f,
                    ...u,
                  },
                  n.default
                ),
              ],
            },
            attrs: {},
            features: pr,
            visible: i.value === "visible",
            name: "Transition",
          });
        }
      );
    },
  });
const Zd = d(
    "div",
    { class: "fixed inset-0 bg-black bg-opacity-25" },
    null,
    -1
  ),
  Jd = { class: "fixed inset-0 overflow-y-auto" },
  Xd = { class: "flex h-100 mt-16 justify-center p-4 text-center" },
  Et = {
    __name: "Modal",
    props: { isOpen: { type: Boolean, default: !1 } },
    emits: ["closeModal"],
    setup(e, { emit: t }) {
      function s() {
        t("closeModal");
      }
      return (n, o) => (
        z(),
        Le(
          D(fr),
          { appear: "", show: e.isOpen, as: "template" },
          {
            default: L(() => [
              M(
                D(Hd),
                { as: "div", onClose: s, class: "relative z-10" },
                {
                  default: L(() => [
                    M(
                      D(io),
                      {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0",
                      },
                      { default: L(() => [Zd]), _: 1 }
                    ),
                    d("div", Jd, [
                      d("div", Xd, [
                        M(
                          D(io),
                          {
                            as: "template",
                            enter: "duration-300 ease-out",
                            "enter-from": "opacity-0 scale-95",
                            "enter-to": "opacity-100 scale-100",
                            leave: "duration-200 ease-in",
                            "leave-from": "opacity-100 scale-100",
                            "leave-to": "opacity-0 scale-95",
                          },
                          { default: L(() => [$a(n.$slots, "default")]), _: 3 }
                        ),
                      ]),
                    ]),
                  ]),
                  _: 3,
                }
              ),
            ]),
            _: 3,
          },
          8,
          ["show"]
        )
      );
    },
  },
  Qd = "/assets/IMG-20230114-WA0010-418e75bc-418e75bc.jpg",
  ep = "/assets/IMG-20230114-WA0011-c1c9178e-c1c9178e.jpg",
  tp = "/assets/IMG-20230114-WA0012-f9c4c67b-f9c4c67b.jpg",
  sp = "/assets/IMG-20230515-WA0053-54548bf7-54548bf7.jpg",
  np = "/assets/IMG-20230515-WA0054-b329de92-b329de92.jpg",
  op = "/assets/IMG-20230515-WA0056-59ad44b2-59ad44b2.jpg",
  lp = "/assets/IMG-20230515-WA0057-175f0897-175f0897.jpg",
  ip = "/assets/Poster Poseidon_Honeydew-b4c8eba7-b4c8eba7.jpg",
  rp = "/assets/Poster Poseidon_Kiwi Lemonade-9383a0f3-9383a0f3.jpg",
  ap = "/assets/one-0f0e01e9-0f0e01e9.jpg",
  cp = "/assets/two-3d693dbe-3d693dbe.jpg",
  up = "/assets/three-9907af49-9907af49.jpg",
  dp = "/assets/four-89d0138e-89d0138e.jpg",
  pp = "/assets/five-ffdbbbed-ffdbbbed.jpg",
  fp = "/assets/six-f31f58d8-f31f58d8.jpg",
  mp = "/assets/seven-f1651d84-f1651d84.jpg",
  hp = "/assets/eight-037f824d-037f824d.jpg",
  gp = "/assets/nine-1b58c132-1b58c132.jpg",
  xp = "/assets/ten-2113111d-2113111d.jpg",
  vp = {
    class:
      "bg-gray-600 bg-opacity-50 rounded-3xl text-center shadow-2xl space-y-4 pb-8 mx-3 overflow-hidden",
  },
  _p = ["src"],
  bp = { class: "text-base text-white font-semibold" },
  yp = { class: "text-white" },
  wp = ["onClick"],
  Sp = d("p", { class: "text-xs" }, "DETAIL", -1),
  Ep = [Sp],
  Ap = { class: "space-y-2 py-4" },
  Mp = { class: "text-sm font-semibold text-gray-200" },
  Rp = d("span", { class: "text-yellow-500 mr-9" }, "Name :", -1),
  Cp = { class: "text-sm font-semibold text-gray-200" },
  Tp = d("span", { class: "text-yellow-500 mr-10" }, "Brand :", -1),
  Op = { class: "text-sm font-semibold text-gray-200" },
  Pp = d("span", { class: "text-yellow-500 mr-12" }, "Price :", -1),
  Np = ["innerHTML"],
  Lp = {
    __name: "Posedon",
    setup(e) {
      vt();
      const t = y(!1),
        s = () => {
          t.value = !0;
        },
        n = () => {
          (t.value = !1), (o.value = ""), (i.value = "");
        },
        o = y(""),
        l = (u) => {
          (o.value = u), s();
        },
        i = y("");
      y([]);
      const r = y([
        {
          id: 1,
          image: ap,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐁𝐋𝐔𝐄𝐁𝐄𝐑𝐑𝐘 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "BLUEBERRY",
        },
        {
          id: 2,
          image: cp,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐆𝐑𝐀𝐏𝐄 𝐈𝐂𝐄 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "GRAPE ICE",
        },
        {
          id: 3,
          image: up,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐌𝐀𝐍𝐆𝐎 𝐁𝐀𝐍𝐀𝐍𝐀 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "MANGOBANANA",
        },
        {
          id: 4,
          image: xp,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐓𝐇𝐀𝐈 𝐌𝐀𝐍𝐆𝐎 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "THAI MANGO",
        },
        {
          id: 5,
          image: dp,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐌𝐀𝐍𝐆𝐎 𝐁𝐄𝐑𝐑𝐈𝐄𝐒 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "MANGO BERRIES",
        },
        {
          id: 6,
          image: pp,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐌𝐀𝐍𝐆𝐎𝐒𝐓𝐄𝐄𝐍 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml/ 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "MANGOSTEEN",
        },
        {
          id: 7,
          image: fp,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐌𝐀𝐍𝐆𝐎 𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "MANGO STRAWBERRY",
        },
        {
          id: 8,
          image: mp,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐒𝐓𝐑𝐀𝐖𝐁𝐄𝐑𝐑𝐘 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "STRAWBERRY",
        },
        {
          id: 9,
          image: hp,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐏𝐀𝐒𝐒𝐈𝐎𝐍𝐅𝐑𝐔𝐈𝐓𝐘 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "Peach PASSIONFRUITY",
        },
        {
          id: 10,
          image: gp,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐖𝐀𝐓𝐄𝐑𝐌𝐄𝐋𝐎𝐍</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "WATERMELON",
        },
        {
          id: 11,
          image: Qd,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐏𝐀𝐏𝐀𝐘𝐀 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "PAPAYA",
        },
        {
          id: 12,
          image: sp,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐑𝐀𝐒𝐏𝐁𝐄𝐑𝐑𝐘 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "RASPBERRY",
        },
        {
          id: 13,
          image: np,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐏𝐄𝐀𝐂𝐇 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "PEACH",
        },
        {
          id: 14,
          image: tp,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐓𝐀𝐑𝐎 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "TARO",
        },
        {
          id: 15,
          image: op,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐋𝐘𝐂𝐇𝐄𝐄 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "LYCHEE",
        },
        {
          id: 16,
          image: lp,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐆𝐔𝐀𝐕𝐀 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "GUAVA",
        },
        {
          id: 17,
          image: ip,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐇𝐎𝐍𝐄𝐘𝐃𝐄𝐖 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "HONEYDEW",
        },
        {
          id: 18,
          image: rp,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐊𝐈𝐖𝐈 𝐋𝐄𝐌𝐎𝐍𝐀𝐃𝐄 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "KIWI LEMONADE",
        },
        {
          id: 19,
          image: ep,
          price: "30000 MMK",
          brand: "POSEIDON",
          description:
            "<p class='text-sm '>𝐋𝐈𝐌𝐄 </p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "LIME",
        },
      ]);
      y(!1);
      const a = { itemsToShow: 1.5, snapAlign: "start" },
        c = {
          500: { itemsToShow: 2, snapAlign: "start" },
          600: { itemsToShow: 2.1, snapAlign: "start" },
          700: { itemsToShow: 2.5, snapAlign: "start" },
          800: { itemsToShow: 3, snapAlign: "start" },
          900: { itemsToShow: 3.5, snapAlign: "start" },
          1024: { itemsToShow: 3.5, snapAlign: "start" },
          1124: { itemsToShow: 4, snapAlign: "start" },
        };
      return (u, f) => {
        const m = Ae("DialogTitle"),
          v = Ae("DialogPanel");
        return (
          z(),
          le("div", null, [
            M(
              D(Qe),
              ct(a, { breakpoints: c, autoplay: "8000", "wrap-around": !0 }),
              {
                addons: L(() => [M(D(ut)), M(D(dt))]),
                default: L(() => [
                  (z(!0),
                  le(
                    me,
                    null,
                    Ze(
                      r.value,
                      (x) => (
                        z(),
                        Le(
                          D(et),
                          { key: x.id },
                          {
                            default: L(() => [
                              d("div", vp, [
                                d(
                                  "img",
                                  {
                                    src: x.image,
                                    alt: "",
                                    class: "mx-auto w-[450px]",
                                  },
                                  null,
                                  8,
                                  _p
                                ),
                                d("p", bp, W(x.name), 1),
                                d("p", yp, W(x.price), 1),
                                d(
                                  "div",
                                  {
                                    class:
                                      "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-2 rounded-3xl",
                                    onClick: (S) => l(x),
                                  },
                                  Ep,
                                  8,
                                  wp
                                ),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              16
            ),
            M(
              Et,
              {
                isOpen: t.value,
                onCloseModal: f[0] || (f[0] = (x) => (t.value = !1)),
              },
              {
                default: L(() => [
                  M(
                    v,
                    {
                      class:
                        "w-full max-w-md transform rounded-lg bg-gray-600 p-4 text-left align-middle shadow-xl transition-all",
                    },
                    {
                      default: L(() => [
                        M(
                          m,
                          {
                            as: "h3",
                            class:
                              "text-lg font-medium leading-6 text-gray-200 mb-5",
                          },
                          { default: L(() => [X(" Product Detail ")]), _: 1 }
                        ),
                        d("div", Ap, [
                          d("p", Mp, [Rp, X(" " + W(o.value.name), 1)]),
                          d("p", Cp, [Tp, X(W(o.value.brand), 1)]),
                          d("p", Op, [Pp, X(W(o.value.price), 1)]),
                          d(
                            "p",
                            {
                              class:
                                "text-justify text-sm text-gray-300 space-y-2",
                              innerHTML: o.value.description,
                            },
                            null,
                            8,
                            Np
                          ),
                          d(
                            "p",
                            {
                              onClick: n,
                              class:
                                "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-1 rounded-3xl float-right",
                            },
                            " close "
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["isOpen"]
            ),
          ])
        );
      };
    },
  },
  $p = "/assets/Poster Zeus_Tobacco Butterscotch-d7783f9a-d7783f9a.jpg",
  Bp = "/assets/Poster Zeus_Tobacco Capuccino-f8c58e4c-f8c58e4c.jpg",
  Dp = "/assets/Poster Zeus_Tobacco Vanilla-73f7bb03-73f7bb03.jpg",
  Ip = "/assets/IMG-20230114-WA0017-47f6c72d-47f6c72d.jpg",
  Fp = "/assets/IMG-20230114-WA0014-2f01e65f-2f01e65f.jpg",
  Up = "/assets/IMG-20230114-WA0015-444acec3-444acec3.jpg",
  jp = "/assets/IMG-20230114-WA0016-faf2fb0c-faf2fb0c.jpg",
  kp = "/assets/IMG-20230114-WA0018-032c5bdd-032c5bdd.jpg",
  Hp = "/assets/zeus_tobacco_custard-2d96a182.jpg";
const Kp = {
    class:
      "bg-gray-600 bg-opacity-50 rounded-3xl text-center shadow-2xl space-y-4 pb-8 mx-3 overflow-hidden",
  },
  zp = ["src"],
  Wp = { class: "text-base text-white font-semibold" },
  Gp = { class: "text-white" },
  qp = ["onClick"],
  Yp = d("p", { class: "text-xs" }, "DETAIL", -1),
  Vp = [Yp],
  Zp = { class: "space-y-2 py-4" },
  Jp = { class: "text-sm font-semibold text-gray-200" },
  Xp = d("span", { class: "text-yellow-500 mr-9" }, "Name :", -1),
  Qp = { class: "text-sm font-semibold text-gray-200" },
  ef = d("span", { class: "text-yellow-500 mr-10" }, "Brand :", -1),
  tf = { class: "text-sm font-semibold text-gray-200" },
  sf = d("span", { class: "text-yellow-500 mr-12" }, "Price :", -1),
  nf = ["innerHTML"],
  of = {
    __name: "Zeus",
    setup(e) {
      vt();
      const t = y(!1),
        s = () => {
          t.value = !0;
        },
        n = () => {
          (t.value = !1), (o.value = ""), (i.value = "");
        },
        o = y(""),
        l = (u) => {
          (o.value = u), s();
        },
        i = y("");
      y([]);
      const r = y([
        {
          id: 1,
          image: $p,
          price: "30000 MMK",
          brand: "ZEUS",
          description:
            "<p class='text-sm '>Zeus Tobacco Butterscotch</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "TOBACCO BUTTERSCOTCH",
        },
        {
          id: 2,
          image: Bp,
          price: "30000 MMK",
          brand: "ZEUS",
          description:
            "<p class='text-sm '>Zeus Tobacco Cappucino</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "TOBACCO CAPUCCINO",
        },
        {
          id: 3,
          image: Dp,
          price: "30000 MMK",
          brand: "ZEUS",
          description:
            "<p class='text-sm '>Zeus Tobacco Vanilla</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "TOBACCO VANILLA",
        },
        {
          id: 4,
          image: Ip,
          price: "30000 MMK",
          brand: "ZEUS",
          description:
            "<p class='text-sm '>Zeus Tobacco Storm Orignal</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "TOBACCO STRONG ORIGINAL",
        },
        {
          id: 5,
          image: Fp,
          price: "30000 MMK",
          brand: "ZEUS",
          description:
            "<p class='text-sm '>Zeus Tobacco Cubano</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "TOBACCO CUBANO",
        },
        {
          id: 6,
          image: Up,
          price: "30000 MMK",
          brand: "ZEUS",
          description:
            "<p class='text-sm '>Zeus Tobacco Menthol</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "TOBACCO MENTHOL",
        },
        {
          id: 7,
          image: jp,
          price: "30000 MMK",
          brand: "ZEUS",
          description:
            "<p class='text-sm '> Zeus Tobacco Coffee</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "TOBACCO COFFEE",
        },
        {
          id: 8,
          image: kp,
          price: "30000 MMK",
          brand: "ZEUS",
          description:
            "<p class='text-sm '>Zeus Tobacco Western</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "TOBACCO WESTERN",
        },
        {
          id: 9,
          image: Hp,
          price: "30000 MMK",
          brand: "ZEUS",
          description:
            "<p class='text-sm '>Zeus Tobacco Custard</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "TOBACCO CUSTARD",
        },
      ]);
      y(!1);
      const a = { itemsToShow: 1.5, snapAlign: "start" },
        c = {
          500: { itemsToShow: 2, snapAlign: "start" },
          600: { itemsToShow: 2.1, snapAlign: "start" },
          700: { itemsToShow: 2.5, snapAlign: "start" },
          800: { itemsToShow: 3, snapAlign: "start" },
          900: { itemsToShow: 3.5, snapAlign: "start" },
          1024: { itemsToShow: 3.5, snapAlign: "start" },
          1124: { itemsToShow: 4, snapAlign: "start" },
        };
      return (u, f) => {
        const m = Ae("DialogTitle"),
          v = Ae("DialogPanel");
        return (
          z(),
          le("div", null, [
            M(
              D(Qe),
              ct(a, { breakpoints: c, "wrap-around": !0, autoplay: "8000" }),
              {
                addons: L(() => [M(D(ut)), M(D(dt))]),
                default: L(() => [
                  (z(!0),
                  le(
                    me,
                    null,
                    Ze(
                      r.value,
                      (x) => (
                        z(),
                        Le(
                          D(et),
                          { key: x.id },
                          {
                            default: L(() => [
                              d("div", Kp, [
                                d(
                                  "img",
                                  {
                                    src: x.image,
                                    alt: "",
                                    class: "mx-auto w-[450px]",
                                  },
                                  null,
                                  8,
                                  zp
                                ),
                                d("p", Wp, W(x.name), 1),
                                d("p", Gp, W(x.price), 1),
                                d(
                                  "div",
                                  {
                                    class:
                                      "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-2 rounded-3xl",
                                    onClick: (S) => l(x),
                                  },
                                  Vp,
                                  8,
                                  qp
                                ),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              16
            ),
            M(
              Et,
              {
                isOpen: t.value,
                onCloseModal: f[0] || (f[0] = (x) => (t.value = !1)),
              },
              {
                default: L(() => [
                  M(
                    v,
                    {
                      class:
                        "w-full max-w-md transform rounded-lg bg-gray-600 p-4 text-left align-middle shadow-xl transition-all",
                    },
                    {
                      default: L(() => [
                        M(
                          m,
                          {
                            as: "h3",
                            class:
                              "text-lg font-medium leading-6 text-gray-200 mb-5",
                          },
                          { default: L(() => [X(" Product Detail ")]), _: 1 }
                        ),
                        d("div", Zp, [
                          d("p", Jp, [Xp, X(" " + W(o.value.name), 1)]),
                          d("p", Qp, [ef, X(W(o.value.brand), 1)]),
                          d("p", tf, [sf, X(W(o.value.price), 1)]),
                          d(
                            "p",
                            {
                              class:
                                "text-justify text-sm text-gray-300 space-y-2",
                              innerHTML: o.value.description,
                            },
                            null,
                            8,
                            nf
                          ),
                          d(
                            "p",
                            {
                              onClick: n,
                              class:
                                "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-1 rounded-3xl float-right",
                            },
                            " close "
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["isOpen"]
            ),
          ])
        );
      };
    },
  },
  lf = "/assets/photo_2023-09-15_14-28-31-dccd5722-dccd5722.jpg",
  rf = "/assets/photo_2023-09-15_14-28-34-1df965df-1df965df.jpg",
  af = "/assets/photo_2023-09-15_14-28-38-9570c933-9570c933.jpg",
  cf = "/assets/photo_2023-09-15_14-28-41-642a64d6-642a64d6.jpg",
  uf = "/assets/photo_2023-09-15_14-28-44-35cf2493-35cf2493.jpg",
  df = "/assets/photo_2023-09-15_14-28-47-343509ca-343509ca.jpg",
  pf = {
    class:
      "bg-gray-600 bg-opacity-50 rounded-3xl text-center shadow-2xl space-y-4 pb-8 mx-3 overflow-hidden",
  },
  ff = ["src"],
  mf = { class: "text-base text-white font-semibold" },
  hf = { class: "text-white" },
  gf = ["onClick"],
  xf = d("p", { class: "text-xs" }, "DETAIL", -1),
  vf = [xf],
  _f = { class: "space-y-2 py-4" },
  bf = { class: "text-sm font-semibold text-gray-200" },
  yf = d("span", { class: "text-yellow-500 mr-9" }, "Name :", -1),
  wf = { class: "text-sm font-semibold text-gray-200" },
  Sf = d("span", { class: "text-yellow-500 mr-10" }, "Brand :", -1),
  Ef = { class: "text-sm font-semibold text-gray-200" },
  Af = d("span", { class: "text-yellow-500 mr-12" }, "Price :", -1),
  Mf = ["innerHTML"],
  Rf = {
    __name: "Hades",
    setup(e) {
      vt();
      const t = y(!1),
        s = () => {
          t.value = !0;
        },
        n = () => {
          (t.value = !1), (o.value = ""), (i.value = "");
        },
        o = y(""),
        l = (u) => {
          (o.value = u), s();
        },
        i = y("");
      y([]);
      const r = y([
        {
          id: 1,
          image: lf,
          price: "30000 MMK",
          brand: "Hades",
          description:
            "<p class='text-sm '>Hades SPRITE</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "SPRITE",
        },
        {
          id: 2,
          image: rf,
          price: "30000 MMK",
          brand: "Hades",
          description:
            "<p class='text-sm '>Hades COLA</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "COLA",
        },
        {
          id: 3,
          image: af,
          price: "30000 MMK",
          brand: "Hades",
          description:
            "<p class='text-sm '>Hades 100 PLUS</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "100 PLUS",
        },
        {
          id: 4,
          image: cf,
          price: "30000 MMK",
          brand: "Hades",
          description:
            "<p class='text-sm '>Hades SPARKLING LEMON</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "SPARKLING LEMON",
        },
        {
          id: 5,
          image: uf,
          price: "30000 MMK",
          brand: "Hades",
          description:
            "<p class='text-sm '>Hades PEPZI</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "PEPZI",
        },
        {
          id: 6,
          image: df,
          price: "30000 MMK",
          brand: "Hades",
          description:
            "<p class='text-sm '>Hades REDBULL</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "REDBULL",
        },
      ]);
      y(!1);
      const a = { itemsToShow: 1.5, snapAlign: "start" },
        c = {
          500: { itemsToShow: 2, snapAlign: "start" },
          600: { itemsToShow: 2.1, snapAlign: "start" },
          700: { itemsToShow: 2.5, snapAlign: "start" },
          800: { itemsToShow: 3, snapAlign: "start" },
          900: { itemsToShow: 3.5, snapAlign: "start" },
          1024: { itemsToShow: 3.5, snapAlign: "start" },
          1124: { itemsToShow: 4, snapAlign: "start" },
        };
      return (u, f) => {
        const m = Ae("DialogTitle"),
          v = Ae("DialogPanel");
        return (
          z(),
          le("div", null, [
            M(
              D(Qe),
              ct(a, { breakpoints: c, "wrap-around": !0 }),
              {
                addons: L(() => [M(D(ut)), M(D(dt))]),
                default: L(() => [
                  (z(!0),
                  le(
                    me,
                    null,
                    Ze(
                      r.value,
                      (x) => (
                        z(),
                        Le(
                          D(et),
                          { key: x.id },
                          {
                            default: L(() => [
                              d("div", pf, [
                                d(
                                  "img",
                                  {
                                    src: x.image,
                                    alt: "",
                                    class: "mx-auto w-[450px]",
                                  },
                                  null,
                                  8,
                                  ff
                                ),
                                d("p", mf, W(x.name), 1),
                                d("p", hf, W(x.price), 1),
                                d(
                                  "div",
                                  {
                                    class:
                                      "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-2 rounded-3xl",
                                    onClick: (S) => l(x),
                                  },
                                  vf,
                                  8,
                                  gf
                                ),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              16
            ),
            M(
              Et,
              {
                isOpen: t.value,
                onCloseModal: f[0] || (f[0] = (x) => (t.value = !1)),
              },
              {
                default: L(() => [
                  M(
                    v,
                    {
                      class:
                        "w-full max-w-md transform rounded-lg bg-gray-600 p-4 text-left align-middle shadow-xl transition-all",
                    },
                    {
                      default: L(() => [
                        M(
                          m,
                          {
                            as: "h3",
                            class:
                              "text-lg font-medium leading-6 text-gray-200 mb-5",
                          },
                          { default: L(() => [X(" Product Detail ")]), _: 1 }
                        ),
                        d("div", _f, [
                          d("p", bf, [yf, X(" " + W(o.value.name), 1)]),
                          d("p", wf, [Sf, X(W(o.value.brand), 1)]),
                          d("p", Ef, [Af, X(W(o.value.price), 1)]),
                          d(
                            "p",
                            {
                              class:
                                "text-justify text-sm text-gray-300 space-y-2",
                              innerHTML: o.value.description,
                            },
                            null,
                            8,
                            Mf
                          ),
                          d(
                            "p",
                            {
                              onClick: n,
                              class:
                                "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-1 rounded-3xl float-right",
                            },
                            " close "
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["isOpen"]
            ),
          ])
        );
      };
    },
  },
  Cf = "/assets/photo_2023-09-11_11-45-11-def6695b-def6695b.jpg",
  Tf = "/assets/photo_2023-09-11_11-45-33-1141db45-1141db45.jpg",
  Of = "/assets/photo_2023-09-11_11-45-35-73d9f532-73d9f532.jpg",
  Pf = "/assets/photo_2023-09-11_11-45-37-6cc747b7-6cc747b7.jpg",
  Nf = "/assets/photo_2023-09-11_11-45-40 (2)-448b4676-448b4676.jpg",
  Lf = "/assets/photo_2023-09-11_11-45-44-20928fa5-20928fa5.jpg",
  $f = "/assets/photo_2023-09-11_11-45-46-e6769df6-e6769df6.jpg",
  Bf = "/assets/photo_2023-09-11_11-45-49-c917bb56-c917bb56.jpg",
  Df = "/assets/photo_2023-09-11_11-45-52-71c22f4f-71c22f4f.jpg",
  If = "/assets/photo_2023-09-11_11-45-56-126d5d67-126d5d67.jpg",
  Ff = "/assets/photo_2023-09-11_11-45-59-2470c63f-2470c63f.jpg",
  Uf = "/assets/jucapple-24a8b8ee-24a8b8ee.jpg",
  jf = {
    class:
      "bg-gray-600 bg-opacity-50 rounded-3xl text-center shadow-2xl space-y-4 pb-8 mx-3 overflow-hidden",
  },
  kf = ["src"],
  Hf = { class: "text-base text-white font-semibold" },
  Kf = { class: "text-white" },
  zf = ["onClick"],
  Wf = d("p", { class: "text-xs" }, "DETAIL", -1),
  Gf = [Wf],
  qf = { class: "space-y-2 py-4" },
  Yf = { class: "text-sm font-semibold text-gray-200" },
  Vf = d("span", { class: "text-yellow-500 mr-9" }, "Name :", -1),
  Zf = { class: "text-sm font-semibold text-gray-200" },
  Jf = d("span", { class: "text-yellow-500 mr-10" }, "Brand :", -1),
  Xf = { class: "text-sm font-semibold text-gray-200" },
  Qf = d("span", { class: "text-yellow-500 mr-12" }, "Price :", -1),
  em = ["innerHTML"],
  tm = {
    __name: "MrBlack",
    setup(e) {
      vt();
      const t = y(!1),
        s = () => {
          t.value = !0;
        },
        n = () => {
          (t.value = !1), (o.value = ""), (i.value = "");
        },
        o = y(""),
        l = (u) => {
          (o.value = u), s();
        },
        i = y("");
      y([]);
      const r = y([
        {
          id: 1,
          image: Cf,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>BLACKCURRANT CHILL</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "BLACKCURRANT CHILL",
        },
        {
          id: 2,
          image: Tf,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>COLA FREEZE</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "COLA FREEZE",
        },
        {
          id: 3,
          image: Of,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>FREEZE MANGO</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "FREEZE MANGO",
        },
        {
          id: 4,
          image: Pf,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>FROZEN DURIAN</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "FROZEN DURIAN",
        },
        {
          id: 5,
          image: Nf,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>GRAPEBERRIES</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "GRAPEBERRIES",
        },
        {
          id: 6,
          image: Lf,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>KIWI DRANGON</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "KIWI DRANGON",
        },
        {
          id: 7,
          image: $f,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>MELON BURST</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "MELON BURST",
        },
        {
          id: 8,
          image: Bf,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>PEACH PASSIONFUIT</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "PEACH PASSIONFUIT",
        },
        {
          id: 9,
          image: Df,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>PINEAPPLE ISLAND</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "PINEAPPLE ISLAND",
        },
        {
          id: 10,
          image: If,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>PURPLE GRAPE</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "PURPLE GRAPE",
        },
        {
          id: 11,
          image: Ff,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>RASPBERRY LIME</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "RASPBERRY LIME",
        },
        {
          id: 12,
          image: Uf,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>JUICY APPLE</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "JUICY APPLE",
        },
      ]);
      y(!1);
      const a = { itemsToShow: 1.5, snapAlign: "start" },
        c = {
          500: { itemsToShow: 2, snapAlign: "start" },
          600: { itemsToShow: 2.1, snapAlign: "start" },
          700: { itemsToShow: 2.5, snapAlign: "start" },
          800: { itemsToShow: 3, snapAlign: "start" },
          900: { itemsToShow: 3.5, snapAlign: "start" },
          1024: { itemsToShow: 3.5, snapAlign: "start" },
          1124: { itemsToShow: 4, snapAlign: "start" },
        };
      return (u, f) => {
        const m = Ae("DialogTitle"),
          v = Ae("DialogPanel");
        return (
          z(),
          le("div", null, [
            M(
              D(Qe),
              ct(a, { breakpoints: c, "wrap-around": !0, autoplay: "8000" }),
              {
                addons: L(() => [M(D(ut)), M(D(dt))]),
                default: L(() => [
                  (z(!0),
                  le(
                    me,
                    null,
                    Ze(
                      r.value,
                      (x) => (
                        z(),
                        Le(
                          D(et),
                          { key: x.id },
                          {
                            default: L(() => [
                              d("div", jf, [
                                d(
                                  "img",
                                  {
                                    src: x.image,
                                    alt: "",
                                    class: "mx-auto w-[450px]",
                                  },
                                  null,
                                  8,
                                  kf
                                ),
                                d("p", Hf, W(x.name), 1),
                                d("p", Kf, W(x.price), 1),
                                d(
                                  "div",
                                  {
                                    class:
                                      "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-2 rounded-3xl",
                                    onClick: (S) => l(x),
                                  },
                                  Gf,
                                  8,
                                  zf
                                ),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              16
            ),
            M(
              Et,
              {
                isOpen: t.value,
                onCloseModal: f[0] || (f[0] = (x) => (t.value = !1)),
              },
              {
                default: L(() => [
                  M(
                    v,
                    {
                      class:
                        "w-full max-w-md transform rounded-lg bg-gray-600 p-4 text-left align-middle shadow-xl transition-all",
                    },
                    {
                      default: L(() => [
                        M(
                          m,
                          {
                            as: "h3",
                            class:
                              "text-lg font-medium leading-6 text-gray-200 mb-5",
                          },
                          { default: L(() => [X(" Product Detail ")]), _: 1 }
                        ),
                        d("div", qf, [
                          d("p", Yf, [Vf, X(" " + W(o.value.name), 1)]),
                          d("p", Zf, [Jf, X(W(o.value.brand), 1)]),
                          d("p", Xf, [Qf, X(W(o.value.price), 1)]),
                          d(
                            "p",
                            {
                              class:
                                "text-justify text-sm text-gray-300 space-y-2",
                              innerHTML: o.value.description,
                            },
                            null,
                            8,
                            em
                          ),
                          d(
                            "p",
                            {
                              onClick: n,
                              class:
                                "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-1 rounded-3xl float-right",
                            },
                            " close "
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["isOpen"]
            ),
          ])
        );
      };
    },
  },
  sm = "/assets/photo_2023-09-11_14-51-08-bcc17f70-bcc17f70.jpg",
  nm = "/assets/photo_2023-09-11_14-51-10-f0aebc27-f0aebc27.jpg",
  om = "/assets/photo_2023-09-11_14-51-15-4512676f-4512676f.jpg",
  lm = "/assets/photo_2023-09-11_14-51-18-35155bc5-35155bc5.jpg",
  im = "/assets/photo_2023-09-11_14-51-21-313ac244-313ac244.jpg",
  rm = "/assets/photo_2023-09-11_14-51-24-ab74c4fa-ab74c4fa.jpg",
  am = {
    class:
      "bg-gray-600 bg-opacity-50 rounded-3xl text-center shadow-2xl space-y-4 pb-8 mx-3 overflow-hidden",
  },
  cm = ["src"],
  um = { class: "text-base text-white font-semibold" },
  dm = { class: "text-white" },
  pm = ["onClick"],
  fm = d("p", { class: "text-xs" }, "DETAIL", -1),
  mm = [fm],
  hm = { class: "space-y-2 py-4" },
  gm = { class: "text-sm font-semibold text-gray-200" },
  xm = d("span", { class: "text-yellow-500 mr-9" }, "Name :", -1),
  vm = { class: "text-sm font-semibold text-gray-200" },
  _m = d("span", { class: "text-yellow-500 mr-10" }, "Brand :", -1),
  bm = { class: "text-sm font-semibold text-gray-200" },
  ym = d("span", { class: "text-yellow-500 mr-12" }, "Price :", -1),
  wm = ["innerHTML"],
  Sm = {
    __name: "Coffee",
    setup(e) {
      vt();
      const t = y(!1),
        s = () => {
          t.value = !0;
        },
        n = () => {
          (t.value = !1), (o.value = ""), (i.value = "");
        },
        o = y(""),
        l = (u) => {
          (o.value = u), s();
        },
        i = y("");
      y([]);
      const r = y([
        {
          id: 1,
          image: sm,
          price: "14000 MMK",
          brand: "COFFEE",
          description:
            "<p class='text-sm '>AMERICANO</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>AMERICAN STYLE COFFEE 15ml Saltnic Series</p>",
          name: "AMERICANO",
        },
        {
          id: 2,
          image: nm,
          price: "14000 MMK",
          brand: "COFFEE",
          description:
            "<p class='text-sm '>COFFEE LATTE</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>AMERICAN STYLE COFFEE 15ml Saltnic Series</p>",
          name: "COFFEE LATTE",
        },
        {
          id: 3,
          image: om,
          price: "14000 MMK",
          brand: "COFFEE",
          description:
            "<p class='text-sm '>CAPPUCCINO</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>AMERICAN STYLE COFFEE 15ml Saltnic Series</p>",
          name: "CAPPUCCINO",
        },
        {
          id: 4,
          image: lm,
          price: "14000 MMK",
          brand: "COFFEE",
          description:
            "<p class='text-sm '>ESPRESSO SHOT</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>AMERICAN STYLE COFFEE 15ml Saltnic Series</p>",
          name: "ESPRESSO SHOT",
        },
        {
          id: 5,
          image: im,
          price: "14000 MMK",
          brand: "COFFEE",
          description:
            "<p class='text-sm '>JAVA CHIP</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>AMERICAN STYLE COFFEE 15ml Saltnic Series</p>",
          name: "JAVA CHIP",
        },
        {
          id: 6,
          image: rm,
          price: "14000 MMK",
          brand: "COFFEE",
          description:
            "<p class='text-sm '>VANILLA LATTE</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>AMERICAN STYLE COFFEE 15ml Saltnic Series</p>",
          name: "VANILLA LATTE",
        },
      ]);
      y(!1);
      const a = { itemsToShow: 1.5, snapAlign: "start" },
        c = {
          500: { itemsToShow: 2, snapAlign: "start" },
          600: { itemsToShow: 2.1, snapAlign: "start" },
          700: { itemsToShow: 2.5, snapAlign: "start" },
          800: { itemsToShow: 3, snapAlign: "start" },
          900: { itemsToShow: 3.5, snapAlign: "start" },
          1024: { itemsToShow: 3.5, snapAlign: "start" },
          1124: { itemsToShow: 4, snapAlign: "start" },
        };
      return (u, f) => {
        const m = Ae("DialogTitle"),
          v = Ae("DialogPanel");
        return (
          z(),
          le("div", null, [
            M(
              D(Qe),
              ct(a, { breakpoints: c, "wrap-around": !0 }),
              {
                addons: L(() => [M(D(ut)), M(D(dt))]),
                default: L(() => [
                  (z(!0),
                  le(
                    me,
                    null,
                    Ze(
                      r.value,
                      (x) => (
                        z(),
                        Le(
                          D(et),
                          { key: x.id },
                          {
                            default: L(() => [
                              d("div", am, [
                                d(
                                  "img",
                                  {
                                    src: x.image,
                                    alt: "",
                                    class: "mx-auto w-[450px]",
                                  },
                                  null,
                                  8,
                                  cm
                                ),
                                d("p", um, W(x.name), 1),
                                d("p", dm, W(x.price), 1),
                                d(
                                  "div",
                                  {
                                    class:
                                      "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-2 rounded-3xl",
                                    onClick: (S) => l(x),
                                  },
                                  mm,
                                  8,
                                  pm
                                ),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              16
            ),
            M(
              Et,
              {
                isOpen: t.value,
                onCloseModal: f[0] || (f[0] = (x) => (t.value = !1)),
              },
              {
                default: L(() => [
                  M(
                    v,
                    {
                      class:
                        "w-full max-w-md transform rounded-lg bg-gray-600 p-4 text-left align-middle shadow-xl transition-all",
                    },
                    {
                      default: L(() => [
                        M(
                          m,
                          {
                            as: "h3",
                            class:
                              "text-lg font-medium leading-6 text-gray-200 mb-5",
                          },
                          { default: L(() => [X(" Product Detail ")]), _: 1 }
                        ),
                        d("div", hm, [
                          d("p", gm, [xm, X(" " + W(o.value.name), 1)]),
                          d("p", vm, [_m, X(W(o.value.brand), 1)]),
                          d("p", bm, [ym, X(W(o.value.price), 1)]),
                          d(
                            "p",
                            {
                              class:
                                "text-justify text-sm text-gray-300 space-y-2",
                              innerHTML: o.value.description,
                            },
                            null,
                            8,
                            wm
                          ),
                          d(
                            "p",
                            {
                              onClick: n,
                              class:
                                "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-1 rounded-3xl float-right",
                            },
                            " close "
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["isOpen"]
            ),
          ])
        );
      };
    },
  },
  Em = "/assets/recomment1-fdc31573-fdc31573.jpg",
  Am = "/assets/recomment2-302f6dd6-302f6dd6.jpg",
  Mm = "/assets/recomment3-8f433899-8f433899.jpg",
  Rm = {
    class:
      "bg-gray-600 bg-opacity-50 rounded-3xl text-center shadow-2xl space-y-4 py-8 mx-4",
  },
  Cm = { class: "w-[80px] h-[80px] rounded-full overflow-hidden mx-auto" },
  Tm = ["src"],
  Om = { class: "flex justify-center items-center gap-1" },
  Pm = { class: "px-5 text-sm text-start lg:px-10 text-gray-400" },
  Nm = { class: "" },
  Lm = { class: "text-yellow-400" },
  $m = {
    __name: "Recommend",
    setup(e) {
      vt(), y(!1), y(""), y(""), y([]);
      const t = y([
        {
          id: 1,
          image: Em,
          description:
            "Hello user, I'm a vaping product distributor.I would like to recommend that you should use E-Juice from juice empire because they are good quality products.",
          name: "Product Distributor",
        },
        {
          id: 2,
          image: Am,
          description:
            "I'm a juice tester. Juices of Juice Empire Myanmar products are high quality and you can feel the best taste.",
          name: "Juices Reviewer",
        },
        {
          id: 3,
          image: Mm,
          description:
            "Hello users, I strongly recommend it to you.Juice Empire products are fair price,high quality , good taste and many flavours.",
          name: "Flavors Reviewer",
        },
      ]);
      y(!1);
      const s = { itemsToShow: 1, snapAlign: "center" },
        n = {
          500: { itemsToShow: 1.1, snapAlign: "center" },
          600: { itemsToShow: 1.5, snapAlign: "center" },
          700: { itemsToShow: 1.8, snapAlign: "center" },
          800: { itemsToShow: 2.1, snapAlign: "center" },
          900: { itemsToShow: 2.2, snapAlign: "center" },
          1024: { itemsToShow: 2.3, snapAlign: "center" },
          1124: { itemsToShow: 2.5, snapAlign: "center" },
        };
      return (o, l) => (
        z(),
        le("div", null, [
          M(
            D(Qe),
            ct(s, { breakpoints: n, "wrap-around": !0, autoplay: "3000" }),
            {
              addons: L(() => [M(D(ut)), M(D(dt))]),
              default: L(() => [
                (z(!0),
                le(
                  me,
                  null,
                  Ze(
                    t.value,
                    (i, r) => (
                      z(),
                      Le(
                        D(et),
                        { key: r },
                        {
                          default: L(() => [
                            d("div", Rm, [
                              d("div", Cm, [
                                d(
                                  "img",
                                  { src: i.image, alt: "", class: "mx-auto" },
                                  null,
                                  8,
                                  Tm
                                ),
                              ]),
                              d("p", Om, [
                                (z(),
                                le(
                                  me,
                                  null,
                                  Ze(5, (a) =>
                                    d("i", {
                                      class:
                                        "fa-solid fa-star text-md text-yellow-400",
                                      key: a,
                                    })
                                  ),
                                  64
                                )),
                              ]),
                              d("p", Pm, W(i.description), 1),
                              d("div", Nm, [d("p", Lm, W(i.name), 1)]),
                            ]),
                          ]),
                          _: 2,
                        },
                        1024
                      )
                    )
                  ),
                  128
                )),
              ]),
              _: 1,
            },
            16
          ),
        ])
      );
    },
  },
  Bm = "/assets/photo_2023-09-11_11-45-33-7b9ee23d-7b9ee23d.png",
  Dm = "/assets/photo_2023-09-11_14-51-26-ae68a1b3-ae68a1b3.jpg",
  Im = "/assets/one-64b7d436-64b7d436.jpg",
  Fm = "/assets/two-cd58c266-cd58c266.jpg",
  Um = "/assets/three-3ef003ed-3ef003ed.jpg",
  jm = "/assets/four-b17b8b37-b17b8b37.jpg",
  km = "/assets/five-ff92c0b1-ff92c0b1.jpg",
  Hm = "/assets/one1-d35d6a67-d35d6a67.jpg",
  Km = "/assets/two2-6c899379-6c899379.jpg",
  zm = "/assets/three3-49f3a14a-49f3a14a.jpg";
const Wm = {
    class:
      "bg-gray-600 bg-opacity-50 rounded-3xl text-center shadow-2xl space-y-4 pb-8 mx-3 overflow-hidden",
  },
  Gm = ["src"],
  qm = { class: "text-base text-white font-semibold" },
  Ym = { class: "text-white" },
  Vm = ["onClick"],
  Zm = d("p", { class: "text-xs" }, "DETAIL", -1),
  Jm = [Zm],
  Xm = { class: "space-y-2 py-4" },
  Qm = { class: "text-sm font-semibold text-gray-200" },
  eh = d("span", { class: "text-yellow-500 mr-9" }, "Name :", -1),
  th = { class: "text-sm font-semibold text-gray-200" },
  sh = d("span", { class: "text-yellow-500 mr-10" }, "Brand :", -1),
  nh = { class: "text-sm font-semibold text-gray-200" },
  oh = d("span", { class: "text-yellow-500 mr-12" }, "Price :", -1),
  lh = ["innerHTML"],
  ih = {
    __name: "RoyalDesset",
    setup(e) {
      vt();
      const t = y(!1),
        s = () => {
          t.value = !0;
        },
        n = () => {
          (t.value = !1), (o.value = ""), (i.value = "");
        },
        o = y(""),
        l = (u) => {
          (o.value = u), s();
        },
        i = y("");
      y([]);
      const r = y([
        {
          id: 1,
          image: Dm,
          price: "30000 MMK",
          brand: "ROYAL DESSERT",
          description:
            "<p class='text-sm '>Choco Dream</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "CHOCO DREAM",
        },
        {
          id: 2,
          image: Im,
          price: "30000 MMK",
          brand: "ROYAL DESSERT",
          description:
            "<p class='text-sm '>APPLE PIE</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "APPLE PIE",
        },
        {
          id: 3,
          image: Fm,
          price: "30000 MMK",
          brand: "ROYAL DESSERT",
          description:
            "<p class='text-sm '>BANANA MUFFIN</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "BANANA MUFFIN",
        },
        {
          id: 4,
          image: Um,
          price: "30000 MMK",
          brand: "ROYAL DESSERT",
          description:
            "<p class='text-sm '>BLUEBERRY WAFFLE</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "BLUEBERRY WAFFLE",
        },
        {
          id: 5,
          image: jm,
          price: "30000 MMK",
          brand: "ROYAL DESSERT",
          description:
            "<p class='text-sm '>CREAM CHEESECAKE</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "CREAM CHEESECAKE",
        },
        {
          id: 6,
          image: km,
          price: "30000 MMK",
          brand: "ROYAL DESSERT",
          description:
            "<p class='text-sm '>OREO</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "OREO",
        },
        {
          id: 7,
          image: Hm,
          price: "30000 MMK",
          brand: "ROYAL DESSERT",
          description:
            "<p class='text-sm '>STRAWBERRY SWEET CAKE</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "STRAWBERRY SWEET CAKE",
        },
        {
          id: 8,
          image: Km,
          price: "30000 MMK",
          brand: "ROYAL DESSERT",
          description:
            "<p class='text-sm '>CHOCOLATE LAVA CAKE</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "CHOCOLATE LAVA CAKE",
        },
        {
          id: 9,
          image: zm,
          price: "30000 MMK",
          brand: "ROYAL DESSERT",
          description:
            "<p class='text-sm '>RED VELVET CAKE</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "RED VELVET CAKE",
        },
      ]);
      y(!1);
      const a = { itemsToShow: 1.5, snapAlign: "start" },
        c = {
          500: { itemsToShow: 2, snapAlign: "start" },
          600: { itemsToShow: 2.1, snapAlign: "start" },
          700: { itemsToShow: 2.5, snapAlign: "start" },
          800: { itemsToShow: 3, snapAlign: "start" },
          900: { itemsToShow: 3.5, snapAlign: "start" },
          1024: { itemsToShow: 3.5, snapAlign: "start" },
          1124: { itemsToShow: 4, snapAlign: "start" },
        };
      return (u, f) => {
        const m = Ae("DialogTitle"),
          v = Ae("DialogPanel");
        return (
          z(),
          le("div", null, [
            M(
              D(Qe),
              ct(a, { breakpoints: c, "wrap-around": !0, autoplay: "8000" }),
              {
                addons: L(() => [M(D(ut)), M(D(dt))]),
                default: L(() => [
                  (z(!0),
                  le(
                    me,
                    null,
                    Ze(
                      r.value,
                      (x) => (
                        z(),
                        Le(
                          D(et),
                          { key: x.id },
                          {
                            default: L(() => [
                              d("div", Wm, [
                                d(
                                  "img",
                                  {
                                    src: x.image,
                                    alt: "",
                                    class: "mx-auto w-[450px]",
                                  },
                                  null,
                                  8,
                                  Gm
                                ),
                                d("p", qm, W(x.name), 1),
                                d("p", Ym, W(x.price), 1),
                                d(
                                  "div",
                                  {
                                    class:
                                      "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-2 rounded-3xl",
                                    onClick: (S) => l(x),
                                  },
                                  Jm,
                                  8,
                                  Vm
                                ),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              16
            ),
            M(
              Et,
              {
                isOpen: t.value,
                onCloseModal: f[0] || (f[0] = (x) => (t.value = !1)),
              },
              {
                default: L(() => [
                  M(
                    v,
                    {
                      class:
                        "w-full max-w-md transform rounded-lg bg-gray-600 p-4 text-left align-middle shadow-xl transition-all",
                    },
                    {
                      default: L(() => [
                        M(
                          m,
                          {
                            as: "h3",
                            class:
                              "text-lg font-medium leading-6 text-gray-200 mb-5",
                          },
                          { default: L(() => [X(" Product Detail ")]), _: 1 }
                        ),
                        d("div", Xm, [
                          d("p", Qm, [eh, X(" " + W(o.value.name), 1)]),
                          d("p", th, [sh, X(W(o.value.brand), 1)]),
                          d("p", nh, [oh, X(W(o.value.price), 1)]),
                          d(
                            "p",
                            {
                              class:
                                "text-justify text-sm text-gray-300 space-y-2",
                              innerHTML: o.value.description,
                            },
                            null,
                            8,
                            lh
                          ),
                          d(
                            "p",
                            {
                              onClick: n,
                              class:
                                "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-1 rounded-3xl float-right",
                            },
                            " close "
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["isOpen"]
            ),
          ])
        );
      };
    },
  },
  rh = "/assets/photo_2023-09-11_11-46-08-3ef4484d-3ef4484d.jpg",
  ah = "/assets/photo_2023-09-11_14-34-57-538a522a-538a522a.jpg",
  ch = "/assets/photo_2023-09-11_14-35-00-122e6f72-122e6f72.jpg",
  uh = "/assets/photo_2023-09-11_14-35-03-b610c56c-b610c56c.jpg",
  dh = "/assets/photo_2023-09-11_14-35-06-dc223f6d-dc223f6d.jpg",
  ph = "/assets/photo_2023-09-11_14-35-09-3e2a606c-3e2a606c.jpg",
  fh = "/assets/photo_2023-09-11_14-35-12-117de6eb-117de6eb.jpg",
  mh = "/assets/photo_2023-09-11_14-35-15-41c2ab34-41c2ab34.jpg",
  hh = {
    class:
      "bg-gray-600 bg-opacity-50 rounded-3xl text-center shadow-2xl space-y-4 pb-8 mx-3 overflow-hidden",
  },
  gh = ["src"],
  xh = { class: "text-base text-white font-semibold" },
  vh = { class: "text-white" },
  _h = ["onClick"],
  bh = d("p", { class: "text-xs" }, "DETAIL", -1),
  yh = [bh],
  wh = { class: "space-y-2 py-4" },
  Sh = { class: "text-sm font-semibold text-gray-200" },
  Eh = d("span", { class: "text-yellow-500 mr-9" }, "Name :", -1),
  Ah = { class: "text-sm font-semibold text-gray-200" },
  Mh = d("span", { class: "text-yellow-500 mr-10" }, "Brand :", -1),
  Rh = { class: "text-sm font-semibold text-gray-200" },
  Ch = d("span", { class: "text-yellow-500 mr-12" }, "Price :", -1),
  Th = ["innerHTML"],
  Oh = {
    __name: "Milkshap",
    setup(e) {
      vt();
      const t = y(!1),
        s = () => {
          t.value = !0;
        },
        n = () => {
          (t.value = !1), (o.value = ""), (i.value = "");
        },
        o = y(""),
        l = (u) => {
          (o.value = u), s();
        },
        i = y("");
      y([]);
      const r = y([
        {
          id: 1,
          image: rh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>BERRIES DESSERT</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "BERRIES DESSERT",
        },
        {
          id: 2,
          image: ah,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>CHOCONANA</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "CHOCONANA",
        },
        {
          id: 3,
          image: ch,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>CREAMY COOKIES</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "CREAMY COOKIES",
        },
        {
          id: 4,
          image: uh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>LEMON CREAM PIE</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "LEMON CREAM PIE",
        },
        {
          id: 5,
          image: dh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>MANGO CREME</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "MANGO CREME",
        },
        {
          id: 6,
          image: ph,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>PEANUT BUTTER MILK</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "PEANUT BUTTER MILK",
        },
        {
          id: 7,
          image: fh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>STRAWBERRY FLOAT</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "STRAWBERRY FLOAT",
        },
        {
          id: 8,
          image: mh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>TARO TOAST</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "TARO TOAST",
        },
      ]);
      y(!1);
      const a = { itemsToShow: 1.5, snapAlign: "start" },
        c = {
          500: { itemsToShow: 2, snapAlign: "start" },
          600: { itemsToShow: 2.1, snapAlign: "start" },
          700: { itemsToShow: 2.5, snapAlign: "start" },
          800: { itemsToShow: 3, snapAlign: "start" },
          900: { itemsToShow: 3.5, snapAlign: "start" },
          1024: { itemsToShow: 3.5, snapAlign: "start" },
          1124: { itemsToShow: 4, snapAlign: "start" },
        };
      return (u, f) => {
        const m = Ae("DialogTitle"),
          v = Ae("DialogPanel");
        return (
          z(),
          le("div", null, [
            M(
              D(Qe),
              ct(a, { breakpoints: c, "wrap-around": !0, autoplay: "8000" }),
              {
                addons: L(() => [M(D(ut)), M(D(dt))]),
                default: L(() => [
                  (z(!0),
                  le(
                    me,
                    null,
                    Ze(
                      r.value,
                      (x) => (
                        z(),
                        Le(
                          D(et),
                          { key: x.id },
                          {
                            default: L(() => [
                              d("div", hh, [
                                d(
                                  "img",
                                  {
                                    src: x.image,
                                    alt: "",
                                    class: "mx-auto w-[450px]",
                                  },
                                  null,
                                  8,
                                  gh
                                ),
                                d("p", xh, W(x.name), 1),
                                d("p", vh, W(x.price), 1),
                                d(
                                  "div",
                                  {
                                    class:
                                      "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-2 rounded-3xl",
                                    onClick: (S) => l(x),
                                  },
                                  yh,
                                  8,
                                  _h
                                ),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              16
            ),
            M(
              Et,
              {
                isOpen: t.value,
                onCloseModal: f[0] || (f[0] = (x) => (t.value = !1)),
              },
              {
                default: L(() => [
                  M(
                    v,
                    {
                      class:
                        "w-full max-w-md transform rounded-lg bg-gray-600 p-4 text-left align-middle shadow-xl transition-all",
                    },
                    {
                      default: L(() => [
                        M(
                          m,
                          {
                            as: "h3",
                            class:
                              "text-lg font-medium leading-6 text-gray-200 mb-5",
                          },
                          { default: L(() => [X(" Product Detail ")]), _: 1 }
                        ),
                        d("div", wh, [
                          d("p", Sh, [Eh, X(" " + W(o.value.name), 1)]),
                          d("p", Ah, [Mh, X(W(o.value.brand), 1)]),
                          d("p", Rh, [Ch, X(W(o.value.price), 1)]),
                          d(
                            "p",
                            {
                              class:
                                "text-justify text-sm text-gray-300 space-y-2",
                              innerHTML: o.value.description,
                            },
                            null,
                            8,
                            Th
                          ),
                          d(
                            "p",
                            {
                              onClick: n,
                              class:
                                "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-1 rounded-3xl float-right",
                            },
                            " close "
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["isOpen"]
            ),
          ])
        );
      };
    },
  },
  Ph = "/assets/double_fruity_1-c33f6738.jpg",
  Nh = "/assets/double_fruity_2-9b86d44f.jpg",
  Lh = "/assets/double_fruity_3-1fa79243.jpg",
  $h = "/assets/double_fruity_4-b5f3e4cf.jpg",
  Bh = "/assets/double_fruity_5-823a4df4.jpg",
  Dh = "/assets/double_fruity_6-5f56b948.jpg",
  Ih = "/assets/double_fruity_7-c7f4fc4c.jpg",
  Fh = "/assets/double_fruity_8-48ce306d.jpg",
  Uh = "/assets/double_fruity_9-ae5c2b06.jpg",
  jh = "/assets/double_fruity_10-e0b30798.jpg",
  kh = "/assets/double_fruity_11-ef33dae9.jpg",
  Hh = "/assets/double_fruity_12-23b3a2ff.jpg",
  Kh = {
    class:
      "bg-gray-600 bg-opacity-50 rounded-3xl text-center shadow-2xl space-y-4 pb-8 mx-3 overflow-hidden",
  },
  zh = ["src"],
  Wh = { class: "text-base text-white font-semibold" },
  Gh = { class: "text-white" },
  qh = ["onClick"],
  Yh = d("p", { class: "text-xs" }, "DETAIL", -1),
  Vh = [Yh],
  Zh = { class: "space-y-2 py-4" },
  Jh = { class: "text-sm font-semibold text-gray-200" },
  Xh = d("span", { class: "text-yellow-500 mr-9" }, "Name :", -1),
  Qh = { class: "text-sm font-semibold text-gray-200" },
  e0 = d("span", { class: "text-yellow-500 mr-10" }, "Brand :", -1),
  t0 = { class: "text-sm font-semibold text-gray-200" },
  s0 = d("span", { class: "text-yellow-500 mr-12" }, "Price :", -1),
  n0 = ["innerHTML"],
  o0 = {
    __name: "Double",
    setup(e) {
      vt();
      const t = y(!1),
        s = () => {
          t.value = !0;
        },
        n = () => {
          (t.value = !1), (o.value = ""), (i.value = "");
        },
        o = y(""),
        l = (u) => {
          (o.value = u), s();
        },
        i = y("");
      y([]);
      const r = y([
        {
          id: 1,
          image: Ph,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>ALOEVERA STRAWBERRY</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "ALOEVERA STRAWBERRY",
        },
        {
          id: 2,
          image: Nh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>ALOEVERA WATERMELON</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "ALOEVERA WATERMELON",
        },
        {
          id: 3,
          image: Lh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>APPLE MANGO</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "APPLE MANGO",
        },
        {
          id: 4,
          image: $h,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>GRAPE LEMON</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "GRAPE LEMON",
        },
        {
          id: 5,
          image: Bh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>KIWI LIME</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "KIWI LIME",
        },
        {
          id: 6,
          image: Dh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>MANGO LASSI</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "MANGO LASSI",
        },
        {
          id: 7,
          image: Ih,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>MANGO PINEAPPLE</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "MANGO PINEAPPLE",
        },
        {
          id: 8,
          image: Fh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>MELON HONEYDEW</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "MELON HONEYDEW",
        },
        {
          id: 9,
          image: Uh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>PINEAPPLE LEMONADE</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "PINEAPPLE LEMONADE",
        },
        {
          id: 10,
          image: jh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>STRAWBERRY KIWI</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "STRAWBERRY KIWI",
        },
        {
          id: 11,
          image: kh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>WATERMELON LYCHEE</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "WATERMELON LYCHEE",
        },
        {
          id: 12,
          image: Hh,
          price: "14000 MMK",
          brand: "MR.BLACK CARD",
          description:
            "<p class='text-sm '>WATERMELON PEACH</p><p class='text-sm '>Nicotine Strength - 35 mg</p><p class='text-sm '>Bottle Size - 15 ml</p><p class='text-sm '>CARD 15ml Fruity (Fresh) Saltnic Series</p>",
          name: "WATERMELON PEACH",
        },
      ]);
      y(!1);
      const a = { itemsToShow: 1.5, snapAlign: "start" },
        c = {
          500: { itemsToShow: 2, snapAlign: "start" },
          600: { itemsToShow: 2.1, snapAlign: "start" },
          700: { itemsToShow: 2.5, snapAlign: "start" },
          800: { itemsToShow: 3, snapAlign: "start" },
          900: { itemsToShow: 3.5, snapAlign: "start" },
          1024: { itemsToShow: 3.5, snapAlign: "start" },
          1124: { itemsToShow: 4, snapAlign: "start" },
        };
      return (u, f) => {
        const m = Ae("DialogTitle"),
          v = Ae("DialogPanel");
        return (
          z(),
          le("div", null, [
            M(
              D(Qe),
              ct(a, { breakpoints: c, "wrap-around": !0, autoplay: "8000" }),
              {
                addons: L(() => [M(D(ut)), M(D(dt))]),
                default: L(() => [
                  (z(!0),
                  le(
                    me,
                    null,
                    Ze(
                      r.value,
                      (x) => (
                        z(),
                        Le(
                          D(et),
                          { key: x.id },
                          {
                            default: L(() => [
                              d("div", Kh, [
                                d(
                                  "img",
                                  {
                                    src: x.image,
                                    alt: "",
                                    class: "mx-auto w-[450px]",
                                  },
                                  null,
                                  8,
                                  zh
                                ),
                                d("p", Wh, W(x.name), 1),
                                d("p", Gh, W(x.price), 1),
                                d(
                                  "div",
                                  {
                                    class:
                                      "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-2 rounded-3xl",
                                    onClick: (S) => l(x),
                                  },
                                  Vh,
                                  8,
                                  qh
                                ),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              16
            ),
            M(
              Et,
              {
                isOpen: t.value,
                onCloseModal: f[0] || (f[0] = (x) => (t.value = !1)),
              },
              {
                default: L(() => [
                  M(
                    v,
                    {
                      class:
                        "w-full max-w-md transform rounded-lg bg-gray-600 p-4 text-left align-middle shadow-xl transition-all",
                    },
                    {
                      default: L(() => [
                        M(
                          m,
                          {
                            as: "h3",
                            class:
                              "text-lg font-medium leading-6 text-gray-200 mb-5",
                          },
                          { default: L(() => [X(" Product Detail ")]), _: 1 }
                        ),
                        d("div", Zh, [
                          d("p", Jh, [Xh, X(" " + W(o.value.name), 1)]),
                          d("p", Qh, [e0, X(W(o.value.brand), 1)]),
                          d("p", t0, [s0, X(W(o.value.price), 1)]),
                          d(
                            "p",
                            {
                              class:
                                "text-justify text-sm text-gray-300 space-y-2",
                              innerHTML: o.value.description,
                            },
                            null,
                            8,
                            n0
                          ),
                          d(
                            "p",
                            {
                              onClick: n,
                              class:
                                "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-1 rounded-3xl float-right",
                            },
                            " close "
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["isOpen"]
            ),
          ])
        );
      };
    },
  },
  l0 = "/assets/1-f05b40f1.jpg",
  i0 = "/assets/2-6f1df4f6.jpg",
  r0 = "/assets/3-5d4762b4.jpg",
  a0 = "/assets/4-c3ed8d0c.jpg",
  c0 = "/assets/5-4e685a51.jpg",
  u0 = "/assets/6-16832521.jpg",
  d0 = "/assets/7-de9d3143.jpg",
  p0 = "/assets/8-855e96cb.jpg";
const f0 = {
    class:
      "bg-gray-600 bg-opacity-50 rounded-3xl text-center shadow-2xl space-y-4 pb-8 mx-3 overflow-hidden",
  },
  m0 = ["src"],
  h0 = { class: "text-base text-white font-semibold" },
  g0 = { class: "text-white" },
  x0 = ["onClick"],
  v0 = d("p", { class: "text-xs" }, "DETAIL", -1),
  _0 = [v0],
  b0 = { class: "space-y-2 py-4" },
  y0 = { class: "text-sm font-semibold text-gray-200" },
  w0 = d("span", { class: "text-yellow-500 mr-9" }, "Name :", -1),
  S0 = { class: "text-sm font-semibold text-gray-200" },
  E0 = d("span", { class: "text-yellow-500 mr-10" }, "Brand :", -1),
  A0 = { class: "text-sm font-semibold text-gray-200" },
  M0 = d("span", { class: "text-yellow-500 mr-12" }, "Price :", -1),
  R0 = ["innerHTML"],
  C0 = {
    __name: "Bubblegum",
    setup(e) {
      vt();
      const t = y(!1),
        s = () => {
          t.value = !0;
        },
        n = () => {
          (t.value = !1), (o.value = ""), (i.value = "");
        },
        o = y(""),
        l = (u) => {
          (o.value = u), s();
        },
        i = y("");
      y([]);
      const r = y([
        {
          id: 1,
          image: l0,
          price: "30000 MMK",
          brand: "BUBBLEGUM KING",
          description:
            "<p class='text-sm '>ORIGINAL BUBBLEGUM</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "ORIGINAL BUBBLEGUM",
        },
        {
          id: 2,
          image: i0,
          price: "30000 MMK",
          brand: "BUBBLEGUM KING",
          description:
            "<p class='text-sm '>STRAWBERRY LEMONADE BUBBLEGUM</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "STRAWBERRY LEMONADE BUBBLEGUM",
        },
        {
          id: 3,
          image: r0,
          price: "30000 MMK",
          brand: "BUBBLEGUM KING",
          description:
            "<p class='text-sm '>WATERMELON BUBBLEGUM</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "WATERMELON BUBBLEGUM",
        },
        {
          id: 4,
          image: a0,
          price: "30000 MMK",
          brand: "BUBBLEGUM KING",
          description:
            "<p class='text-sm '>MANGO PINEAPPLE BUBBLEGUM</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "MANGO PINEAPPLE BUBBLEGUM",
        },
        {
          id: 5,
          image: c0,
          price: "30000 MMK",
          brand: "BUBBLEGUM KING",
          description:
            "<p class='text-sm '>PEACH BUBBLEGUM</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "PEACH BUBBLEGUM",
        },
        {
          id: 6,
          image: u0,
          price: "30000 MMK",
          brand: "BUBBLEGUM KING",
          description:
            "<p class='text-sm '>DOUBLEMINT BUBBLEGUM</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "DOUBLEMINT BUBBLEGUM",
        },
        {
          id: 7,
          image: d0,
          price: "30000 MMK",
          brand: "BUBBLEGUM KING",
          description:
            "<p class='text-sm '>GRAPE BUBBLEGUM</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "GRAPE BUBBLEGUM",
        },
        {
          id: 8,
          image: p0,
          price: "30000 MMK",
          brand: "BUBBLEGUM KING",
          description:
            "<p class='text-sm '>LYCHEE BUBBLEGUM</p><p>Saltnic</p><p class='text-sm '>Nicotine Strength - 35 mg / 50 mg</p><p class='text-sm '>Bottle Size - 30 ml / 60 ml</p><p class='text-sm '>Using USA Raw Material</p>",
          name: "LYCHEE BUBBLEGUM",
        },
      ]);
      y(!1);
      const a = { itemsToShow: 1.5, snapAlign: "start" },
        c = {
          500: { itemsToShow: 2, snapAlign: "start" },
          600: { itemsToShow: 2.1, snapAlign: "start" },
          700: { itemsToShow: 2.5, snapAlign: "start" },
          800: { itemsToShow: 3, snapAlign: "start" },
          900: { itemsToShow: 3.5, snapAlign: "start" },
          1024: { itemsToShow: 3.5, snapAlign: "start" },
          1124: { itemsToShow: 4, snapAlign: "start" },
        };
      return (u, f) => {
        const m = Ae("DialogTitle"),
          v = Ae("DialogPanel");
        return (
          z(),
          le("div", null, [
            M(
              D(Qe),
              ct(a, { breakpoints: c, "wrap-around": !0, autoplay: "8000" }),
              {
                addons: L(() => [M(D(ut)), M(D(dt))]),
                default: L(() => [
                  (z(!0),
                  le(
                    me,
                    null,
                    Ze(
                      r.value,
                      (x) => (
                        z(),
                        Le(
                          D(et),
                          { key: x.id },
                          {
                            default: L(() => [
                              d("div", f0, [
                                d(
                                  "img",
                                  {
                                    src: x.image,
                                    alt: "",
                                    class: "mx-auto w-[450px]",
                                  },
                                  null,
                                  8,
                                  m0
                                ),
                                d("p", h0, W(x.name), 1),
                                d("p", g0, W(x.price), 1),
                                d(
                                  "div",
                                  {
                                    class:
                                      "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-2 rounded-3xl",
                                    onClick: (S) => l(x),
                                  },
                                  _0,
                                  8,
                                  x0
                                ),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              16
            ),
            M(
              Et,
              {
                isOpen: t.value,
                onCloseModal: f[0] || (f[0] = (x) => (t.value = !1)),
              },
              {
                default: L(() => [
                  M(
                    v,
                    {
                      class:
                        "w-full max-w-md transform rounded-lg bg-gray-600 p-4 text-left align-middle shadow-xl transition-all",
                    },
                    {
                      default: L(() => [
                        M(
                          m,
                          {
                            as: "h3",
                            class:
                              "text-lg font-medium leading-6 text-gray-200 mb-5",
                          },
                          { default: L(() => [X(" Product Detail ")]), _: 1 }
                        ),
                        d("div", b0, [
                          d("p", y0, [w0, X(" " + W(o.value.name), 1)]),
                          d("p", S0, [E0, X(W(o.value.brand), 1)]),
                          d("p", A0, [M0, X(W(o.value.price), 1)]),
                          d(
                            "p",
                            {
                              class:
                                "text-justify text-sm text-gray-300 space-y-2",
                              innerHTML: o.value.description,
                            },
                            null,
                            8,
                            R0
                          ),
                          d(
                            "p",
                            {
                              onClick: n,
                              class:
                                "border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white cursor-pointer text-yellow-500 inline-block px-4 py-1 rounded-3xl float-right",
                            },
                            " close "
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["isOpen"]
            ),
          ])
        );
      };
    },
  },
  T0 = {
    class:
      "py-20 bg-gray-950 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10 lg:px-20",
  },
  O0 = { class: "space-y-8" },
  P0 = ["src"],
  N0 = d(
    "p",
    { class: "text-gray-400 leading-loose" },
    " At Juice Empire, you can buy E-Juice wholesale with the right quality and right price. ",
    -1
  ),
  L0 = Dt(
    '<div class="space-y-8"><p class="text-white font-extrabold text-xl">Our Products</p><div class="space-y-3 text-gray-400"><ul class="space-y-3"><li><i class="fa-solid fa-box mr-8 text-yellow-400"></i>ZEUS</li><li><i class="fa-solid fa-box mr-8 text-yellow-400"></i>POSEIDON </li><li><i class="fa-solid fa-box mr-8 text-yellow-400"></i>HADES</li><li><i class="fa-solid fa-box mr-8 text-yellow-400"></i>MR.BLACK CARD </li><li><i class="fa-solid fa-box mr-8 text-yellow-400"></i>AMERICAN STYLE COFFEE </li><li><i class="fa-solid fa-box mr-8 text-yellow-400"></i>DESSERT SERIES </li><li><i class="fa-solid fa-box mr-8 text-yellow-400"></i>BUBBLEGUM KING </li></ul></div></div><div class="space-y-8"><p class="text-white font-extrabold text-xl">Contact Us</p><div class="space-y-6"><div class="grid grid-cols-12 text-gray-400"><i class="fa-solid fa-location-dot text-yellow-400 text-center"></i><div class="col-span-11 space-y-1"><p> No.(114/B), Pyi Taw Aye Street, Lay Htaunk Kan Ward, Thingangyun Township,Yangon. </p></div></div><div class="grid grid-cols-12 text-gray-400"><i class="fa-solid fa-phone text-yellow-400 text-center"></i><p class="col-span-11 cursor-pointer"><a href="tel:+959880006747">Phone : 09 880 006 747</a></p></div></div></div>',
    2
  ),
  $0 = d(
    "div",
    {
      class:
        "px-8 md:px-10 lg:px-20 py-10 bg-gray-950 border-t border-gray-700 text-gray-300 text-center",
    },
    " Copyright @2023 JuiceEmpire . Created by Neptune Myanmar ",
    -1
  ),
  mr = {
    __name: "FooterView",
    setup(e) {
      return (t, s) => (
        z(),
        le("div", null, [
          d("div", T0, [
            d("div", O0, [
              d("img", { src: D(Po), class: "w-36", alt: "" }, null, 8, P0),
              N0,
            ]),
            L0,
          ]),
          $0,
        ])
      );
    },
  },
  Il = "/assets/1_aa87e1-d62d5ce9-d62d5ce9.png",
  Fl = "/assets/2-75194777-75194777.png",
  Ul = "/assets/3-2af930dc-2af930dc.png",
  B0 = "/assets/1vape-65192a3d-65192a3d.png",
  D0 = "/assets/1-removebg-preview-19f15137.png",
  jl = "/assets/home-1-66cc69e4-66cc69e4.png",
  I0 = "/assets/home-2-955946d8-955946d8.png",
  F0 = "/assets/home-3-removebg-preview-a6ad9818-a6ad9818.png",
  U0 = "/assets/Interior 3-448d7e2b-448d7e2b.jpg",
  j0 = "/assets/Interior 4-7c360989-7c360989.jpg",
  k0 = "/assets/Poseiden 2-745fd1f4-745fd1f4.jpg";
const H0 = {
    key: 0,
    class: "h-screen flex justify-center items-center relative overflow-hidden",
  },
  K0 = ["src"],
  z0 = {
    class:
      "bg-gray-300 bg-opacity-30 p-10 rounded-3xl shadow-2xl relative z-20",
  },
  W0 = d(
    "p",
    { class: "text-center text-white font-extrabold mb-4" },
    " WELCOME TO OUR VAPE STORE ",
    -1
  ),
  G0 = { class: "text-lg text-gray-300 text-center space-y-6" },
  q0 = d("p", null, "Are you Above 18 ?", -1),
  Y0 = { key: 0, class: "text-sm" },
  V0 = { key: 1 },
  Z0 = { class: "pb-16" },
  J0 = {
    class:
      "carousel__item h-auto md:h-[500px] mx-auto w-full rounded-lg overflow-hidden bg-gray-600 bg-opacity-20 shadow-lg px-5 md:px-10 lg:px-20",
  },
  X0 = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" },
  Q0 = { class: "space-y-4 md:space-y-6 lg:space-y-10 text-left px-8 pt-16" },
  eg = {
    class: "text-2xl font-bold text-center md:text-start text-yellow-400",
  },
  tg = {
    class: "text-xl md:text-6xl text-center md:text-start font-bold text-white",
  },
  sg = d(
    "p",
    { class: "text-gray-400 text-center md:text-start" },
    " Our vape shop is not only a variety of vaping products, but also an operational support service ",
    -1
  ),
  ng = d(
    "div",
    { class: "flex justify-center items-center" },
    [
      d(
        "p",
        {
          class:
            "px-4 md:px-8 lg:px-14 py-2 inline-block lg:py-4 cursor-pointer hover:shadow-2xl hover:bg-yellow-400 border-2 border-yellow-400 hover:text-gray-800 rounded-full text-center text-white",
        },
        [d("a", { href: "#ourProduct" }, " Our Products ")]
      ),
    ],
    -1
  ),
  og = { class: "relative" },
  lg = ["src"],
  ig = ["src"],
  rg = {
    class:
      "pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10 md:px-20 gap-8",
  },
  ag = {
    class:
      "border border-gray-800 bg-gray-600 bg-opacity-20 rounded-3xl overflow-hidden px-6 hover:bg-gray-800 shadow-2xl py-10",
  },
  cg = { href: "#zeus", class: "flex justify-around items-center gap-4" },
  ug = ["src"],
  dg = d(
    "div",
    { class: "space-y-3" },
    [
      d("p", { class: "text-white text-lg font-semibold" }, "ZEUS"),
      d("p", { class: "text-gray-400 text-sm" }, "Tobacco Series Saltnic"),
    ],
    -1
  ),
  pg = {
    class:
      "border border-gray-800 bg-gray-600 bg-opacity-20 rounded-3xl overflow-hidden px-6 hover:bg-gray-800 shadow-2xl py-10",
  },
  fg = { href: "#poseidon", class: "flex justify-around items-center gap-4" },
  mg = ["src"],
  hg = d(
    "div",
    { class: "space-y-3" },
    [
      d("p", { class: "text-white text-lg font-semibold" }, "POSEIDON"),
      d("p", { class: "text-gray-400 text-sm" }, "Fruity Series Saltnic"),
    ],
    -1
  ),
  gg = {
    class:
      "border border-gray-800 bg-gray-600 bg-opacity-20 rounded-3xl overflow-hidden px-6 hover:bg-gray-800 shadow-2xl py-10",
  },
  xg = { href: "#hades", class: "flex justify-around items-center gap-4" },
  vg = ["src"],
  _g = d(
    "div",
    { class: "space-y-3" },
    [
      d("p", { class: "text-white text-lg font-semibold" }, "HADES"),
      d("p", { class: "text-gray-400 text-sm" }, "Energy Series Saltnic"),
    ],
    -1
  ),
  bg = {
    class:
      "border border-gray-800 bg-gray-600 bg-opacity-20 rounded-3xl overflow-hidden px-6 hover:bg-gray-800 shadow-2xl py-10",
  },
  yg = { href: "#mrBlack", class: "flex justify-around items-center gap-4" },
  wg = ["src"],
  Sg = d(
    "div",
    { class: "space-y-3" },
    [d("p", { class: "text-white text-lg font-semibold" }, "MR.BLACK CARD")],
    -1
  ),
  Eg = {
    class:
      "border border-gray-800 bg-gray-600 bg-opacity-20 rounded-3xl overflow-hidden px-6 hover:bg-gray-800 shadow-2xl py-10",
  },
  Ag = { href: "#royal", class: "flex justify-around items-center gap-4" },
  Mg = ["src"],
  Rg = d(
    "div",
    { class: "space-y-3" },
    [
      d(
        "p",
        { class: "text-white text-lg font-semibold" },
        "Dessert Serie 30ml"
      ),
    ],
    -1
  ),
  Cg = {
    class:
      "border border-gray-800 bg-gray-600 bg-opacity-20 rounded-3xl overflow-hidden px-6 hover:bg-gray-800 shadow-2xl py-10",
  },
  Tg = { href: "#bubblegum", class: "flex justify-around items-center gap-4" },
  Og = ["src"],
  Pg = d(
    "div",
    { class: "space-y-3" },
    [
      d(
        "p",
        { class: "text-white text-lg font-semibold" },
        " Bubblegum Series 30ml "
      ),
    ],
    -1
  ),
  Ng = { class: "grid grid-cols-1 lg:grid-cols-2 gap-8 py-16" },
  Lg = { class: "" },
  $g = ["src"],
  Bg = Dt(
    '<div class="space-y-8 text-left px-10 md:px-20 lg:px-8 pt-10"><p class="text-lg font-bold text-yellow-400">WHAT WE DO</p><p class="text-xl md:text-3xl lg:text-5xl font-semibold text-white"> We offer a wide range of E-Juice products </p><p class="text-gray-400 text-justify pr-0 lg:pr-8"> Welcome to our store! There are many electronic cigarettes, e-liquids, accessories and vaping accessories in our store. Our customers appreciate us for a wide range of products: in our network there are products both premium segment and middle and budget categories at the same time. </p><p class="px-14 py-4 hover:bg-yellow-400 hover:text-gray-800 border-2 border-yellow-400 rounded-full inline-block text-center text-white"><a href="#ourProduct"> Our Products </a></p></div>',
    1
  ),
  Dg = { class: "pt-20 bg-gray-600 bg-opacity-50 shadow-custom" },
  Ig = Dt(
    '<div class="text-center space-y-2 md:space-y-4"><img src="https://wapo.b-cdn.net/wp-content/uploads/2022/01/imaedwed67.png" alt="" class="mx-auto w-12"><p class="text-lg font-bold text-yellow-400">ABOUT PRODUCTS</p><p class="text-xl md:text-2xl lg:text-4xl font-medium text-white"> Try the new amazing taste </p><p class="text-xl md:text-2xl lg:text-4xl font-medium text-white"> of our e-liquid </p></div>',
    1
  ),
  Fg = {
    class:
      "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2 pt-20 py-16 px-5 md:px-10 lg:px-20",
  },
  Ug = Dt(
    '<div class="space-y-2 md:space-y-4 lg:space-y-10"><div class="flex justify-start space-x-6 p-8"><div><i class="fa-solid fa-circle-check text-2xl text-yellow-400"></i></div><div class="space-y-2"><p class="text-lg font-semibold text-white">Feel of menthol</p><p class="text-sm text-gray-400"> We offer a wide range of quality vaping products </p></div></div><div class="flex justify-start space-x-6 p-8"><div><i class="fa-solid fa-circle-check text-2xl text-yellow-400"></i></div><div class="space-y-2"><p class="text-lg font-semibold text-white"> No nicotine added </p><p class="text-sm text-gray-400"> We offer a wide range of quality vaping products </p></div></div><div class="flex justify-start space-x-6 p-8"><div><i class="fa-solid fa-circle-check text-2xl text-yellow-400"></i></div><div class="space-y-2"><p class="text-lg font-semibold text-white">No smoker smell</p><p class="text-sm text-gray-400"> We offer a wide range of quality vaping products </p></div></div></div>',
    1
  ),
  jg = { class: "col-span-2" },
  kg = ["src"],
  Hg = Dt(
    '<div class="space-y-2 md:space-y-4 lg:space-y-10"><div class="flex justify-start space-x-6 p-8"><div><i class="fa-solid fa-circle-check text-2xl text-yellow-400"></i></div><div class="space-y-2"><p class="text-lg font-semibold text-white"> No dangerous toxins </p><p class="text-sm text-gray-400"> We offer a wide range of quality vaping products </p></div></div><div class="flex justify-start space-x-6 p-8"><div><i class="fa-solid fa-circle-check text-2xl text-yellow-400"></i></div><div class="space-y-2"><p class="text-lg font-semibold text-white">Easy to use</p><p class="text-sm text-gray-400"> We offer a wide range of quality vaping products </p></div></div><div class="flex justify-start space-x-6 p-8"><div><i class="fa-solid fa-circle-check text-2xl text-yellow-400"></i></div><div class="space-y-2"><p class="text-lg font-semibold text-white"> Safer than smoking </p><p class="text-sm text-gray-400"> We offer a wide range of quality vaping products </p></div></div></div>',
    1
  ),
  Kg = {
    id: "ourProduct",
    class: "pt-20 pb-10 bg-gray-800 bg-opacity-50 px-5 md:px-10 lg:px-20",
  },
  zg = d(
    "div",
    null,
    [d("p", { class: "text-lg font-bold text-yellow-400" }, "OUR PRODUCTS")],
    -1
  ),
  Wg = d(
    "div",
    { class: "grid grid-cols-1 md:grid-cols-2 gap-8" },
    [
      d("div", null, [
        d(
          "p",
          { class: "text-xl md:text-3xl lg:text-5xl font-semibold text-white" },
          " Welcome to our online E-Juice store "
        ),
      ]),
      d("div", null, [
        d(
          "p",
          { class: "text-gray-400 text-sm md:text-base" },
          " We offer a wide range of quality products, an easy shopping process, express delivery and first-class service "
        ),
      ]),
    ],
    -1
  ),
  Gg = { class: "pb-10", id: "zeus" },
  qg = d(
    "div",
    { class: "py-10" },
    [
      d(
        "p",
        { class: "text-xl md:text-3xl font-semibold text-yellow-400" },
        " ZEUS "
      ),
    ],
    -1
  ),
  Yg = { class: "pb-10", id: "poseidon" },
  Vg = d(
    "div",
    { class: "pt-20 pb-10" },
    [
      d(
        "p",
        { class: "text-xl md:text-3xl font-semibold text-yellow-400" },
        " POSEIDON "
      ),
    ],
    -1
  ),
  Zg = { class: "pb-10", id: "hades" },
  Jg = d(
    "div",
    { class: "py-10" },
    [
      d(
        "p",
        { class: "text-xl md:text-3xl font-semibold text-yellow-400" },
        " HADES "
      ),
    ],
    -1
  ),
  Xg = { class: "pb-10", id: "mrBlack" },
  Qg = { class: "py-10 flex justify-between items-center flex-wrap gap-y-6" },
  ex = d(
    "p",
    { class: "text-xl md:text-3xl font-semibold text-yellow-400" },
    " MR.BLACK CARD ",
    -1
  ),
  tx = {
    class:
      "flex justify-start md:justify-end items-center gap-4 w-full md:w-auto scroll-container text-yellow-400 text-sm md:text-base",
  },
  sx = { class: "pb-10", id: "coffee" },
  nx = d(
    "div",
    { class: "py-10" },
    [
      d(
        "p",
        { class: "text-xl md:text-3xl font-semibold text-yellow-400" },
        " AMERICAN STYLE COFFEE "
      ),
    ],
    -1
  ),
  ox = { class: "pb-10", id: "royal" },
  lx = d(
    "div",
    { class: "py-10" },
    [
      d(
        "p",
        { class: "text-xl md:text-3xl font-semibold text-yellow-400" },
        " DESSERT SERIES "
      ),
    ],
    -1
  ),
  ix = { class: "pb-10", id: "bubblegum" },
  rx = d(
    "div",
    { class: "py-10" },
    [
      d(
        "p",
        { class: "text-xl md:text-3xl font-semibold text-yellow-400" },
        " BUBBLEGUM KING "
      ),
    ],
    -1
  ),
  ax = d(
    "div",
    {
      class:
        "grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 px-5 md:px-10 lg:px-20 bg-gray-600 bg-opacity-50",
    },
    [
      d("div", { class: "mx-auto rounded-3xl" }, [
        d("iframe", {
          class:
            "w-[300px] h-[300px] md:w-[500px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-3xl shadow-lg mx-auto",
          src: "https://www.youtube.com/embed/lTI7L1-sZjg",
          title: "Best Vape Trick Compilation",
          frameborder: "0",
          allow:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowfullscreen: "",
        }),
      ]),
      d("div", { class: "space-y-4 md:space-y-8 text-left px-8 pt-10" }, [
        d("p", { class: "text-lg font-bold text-yellow-400" }, "FOR BEGINNERS"),
        d(
          "p",
          { class: "text-xl md:text-3xl lg:text-5xl font-semibold text-white" },
          " Our e-juice introduction "
        ),
        d(
          "p",
          { class: "text-gray-400 text-justify pr-0 lg:pr-8 leading-loose" },
          " Welcome to our store! There are many electronic cigarettes, e-liquids, accessories and vaping accessories in our store. Our customers appreciate us for a wide range of products: in our network there are products both premium segment and middle and budget categories at the same time. "
        ),
      ]),
    ],
    -1
  ),
  cx = {
    class: "px-5 md:px-10 lg:px-20 pt-20 pb-10 bg-gray-800 bg-opacity-50",
  },
  ux = Dt(
    '<div class="text-center space-y-4"><img src="https://wapo.b-cdn.net/wp-content/uploads/2022/01/image-30.png" alt="" class="mx-auto w-12"><p class="text-lg font-bold text-yellow-400">TESTIMONIALS</p><p class="text-xl md:text-2xl lg:text-4xl font-medium text-white"> Hear from our clients </p><p class="font-medium text-gray-400"> We offer a wide range of quality products, an easy shopping process, express delivery and first-class service. </p></div>',
    1
  ),
  dx = { class: "px-5 md:px-10 lg:px-10 py-16" },
  px = {
    class:
      "grid grid-cols-1 lg:grid-cols-1 gap-8 py-16 bg-gray-600 bg-opacity-50",
  },
  fx = { class: "space-y-8 text-left px-20 pt-10" },
  mx = d(
    "p",
    { class: "text-sm md:text-base lg:text-lg font-bold text-yellow-400" },
    " FAQ ",
    -1
  ),
  hx = d(
    "p",
    { class: "text-xl md:text-3xl lg:text-5xl font-semibold text-white" },
    " Fell free to ask more questions ",
    -1
  ),
  gx = { class: "py-5 border-b border-gray-600" },
  xx = d(
    "p",
    { class: "text-sm md:text-base lg:text-lg text-white mb-5" },
    " How can you buy it? ",
    -1
  ),
  vx = d(
    "p",
    { class: "text-sm md:text-base lg:text-lg text-white font-semibold" },
    [d("i", { class: "fa-solid fa-chevron-down" })],
    -1
  ),
  _x = [xx, vx],
  bx = { class: "text-gray-400 text-sm md:text-base space-y-2" },
  yx = Dt(
    '<div class="grid grid-cols-12"><i class="fa-solid fa-circle-exclamation text-yellow-400 text-center"></i><p class="col-span-11"> You can buy online with delivery and our shop (You can find on facebook “Legendary Vapers” and “Double H Vape Store” ). </p></div><div class="grid grid-cols-12"><i class="fa-solid fa-location-dot text-yellow-400 text-center"></i><div class="col-span-11 space-y-1"><p>Address 1: Legendary Vapers</p><p> No.19, Bayathodi Street,Near Kyar Kwat Thit Road, Kyauk Myaung Ward,Tamwe Township Yangon. </p><p>Phone : 09 699 999 750 , 09 886 666 750</p></div></div><div class="grid grid-cols-12"><i class="fa-solid fa-location-dot text-yellow-400 text-center"></i><div class="col-span-11 space-y-1"><p>Address 2: Double H Vape Store</p><p> No.(114/B), Pyi Taw Aye Street, Lay Htaunk Kan Ward, Thingangyun Township,Yangon. </p><p>Phone : 09 400 777 567 , 09 777 734 375</p></div></div><div class="grid grid-cols-12"><i class="fa-solid fa-phone text-yellow-400 text-center"></i><p class="col-span-11">For Retail : 09 880 006 747</p></div>',
    4
  ),
  wx = [yx],
  Sx = { class: "py-5 border-b border-gray-600" },
  Ex = d(
    "p",
    { class: "text-lg text-white mb-5" },
    " How should you store vape juice? ",
    -1
  ),
  Ax = d(
    "p",
    { class: "text-lg text-white font-semibold" },
    [d("i", { class: "fa-solid fa-chevron-down" })],
    -1
  ),
  Mx = [Ex, Ax],
  Rx = { class: "text-gray-400 text-sm md:text-base" },
  Cx = { class: "py-5 border-b border-gray-600" },
  Tx = d(
    "p",
    { class: "text-lg text-white mb-5" },
    " How do I choose the right e-liquid? ",
    -1
  ),
  Ox = d(
    "p",
    { class: "text-lg text-white font-semibold" },
    [d("i", { class: "fa-solid fa-chevron-down" })],
    -1
  ),
  Px = [Tx, Ox],
  Nx = { class: "text-gray-400 text-sm md:text-base" },
  Lx = {
    __name: "HomeView",
    setup(e) {
      const t = y(""),
        s = y(!0),
        n = y(!1),
        o = y(!1),
        l = () => {
          (s.value = !0), (n.value = !1), (o.value = !1);
        },
        i = () => {
          (s.value = !1), (n.value = !0), (o.value = !1);
        },
        r = () => {
          (s.value = !1), (n.value = !1), (o.value = !0);
        },
        a = y(!1),
        c = () => {
          localStorage.setItem("status", !0),
            (a.value = localStorage.getItem("status"));
        },
        u = y(!1),
        f = () => {
          u.value = !u.value;
        },
        m = y([
          { id: 1, image: U0 },
          { id: 2, image: j0 },
          { id: 3, image: k0 },
        ]),
        v = y([
          {
            id: 2,
            image: I0,
            cover: Il,
            name: "ZEUS",
            sub: "Tobacco Series Saltnic",
          },
          {
            id: 1,
            image: jl,
            cover: Fl,
            name: "POSEIDON",
            sub: "Fruity Series Saltnic",
          },
          {
            id: 3,
            image: F0,
            cover: Ul,
            name: "HADES",
            sub: "Energy Series Saltnic",
          },
        ]);
      je(async () => {
        (t.value = {
          one: "https://wapo.b-cdn.net/wp-content/uploads/2022/01/products-new.png",
          two: "https://wapo.b-cdn.net/wp-content/uploads/2022/01/vaping-devices.png",
          three:
            "https://wapo.b-cdn.net/wp-content/uploads/2021/12/shop-product-2.png",
        }),
          (a.value = localStorage.getItem("status"));
      });
      const x = y(1);
      return (S, N) => (
        z(),
        le("div", null, [
          a.value
            ? Jt("", !0)
            : (z(),
              le("div", H0, [
                d(
                  "img",
                  {
                    src: D(Po),
                    class: "w-[600px] opacity-10 fixed top-0 left-0",
                    alt: "",
                  },
                  null,
                  8,
                  K0
                ),
                d("div", z0, [
                  W0,
                  d("div", G0, [
                    q0,
                    d(
                      "div",
                      { class: "flex justify-center items-center gap-4" },
                      [
                        d(
                          "p",
                          {
                            class:
                              "px-8 py-1 cursor-pointer rounded-3xl border border-gray-900 hover:bg-gray-900 hover:text-white shadow-lg",
                            onClick: c,
                          },
                          " YES "
                        ),
                        d(
                          "p",
                          {
                            class:
                              "px-8 py-1 cursor-pointer rounded-3xl border border-gray-900 hover:bg-gray-900 hover:text-white shadow-lg",
                            onClick: f,
                          },
                          " NO "
                        ),
                      ]
                    ),
                    u.value
                      ? (z(),
                        le(
                          "p",
                          Y0,
                          " Sorry, you need to be above 18 years old "
                        ))
                      : Jt("", !0),
                  ]),
                ]),
              ])),
          a.value
            ? (z(),
              le("div", V0, [
                M(qi),
                d("div", Z0, [
                  M(
                    D(Qe),
                    { "items-to-show": 1, "wrap-around": !0, autoplay: "5000" },
                    {
                      addons: L(() => [M(D(ut))]),
                      default: L(() => [
                        (z(!0),
                        le(
                          me,
                          null,
                          Ze(
                            v.value,
                            (C) => (
                              z(),
                              Le(
                                D(et),
                                { key: C },
                                {
                                  default: L(() => [
                                    d("div", J0, [
                                      d("div", X0, [
                                        d("div", Q0, [
                                          d("p", eg, W(C.sub), 1),
                                          d("p", tg, W(C.name), 1),
                                          sg,
                                          ng,
                                        ]),
                                        d("div", og, [
                                          d(
                                            "img",
                                            {
                                              src: C.cover,
                                              class:
                                                "absolute top-0 opacity-60",
                                              alt: "",
                                            },
                                            null,
                                            8,
                                            lg
                                          ),
                                          d(
                                            "img",
                                            {
                                              src: C.image,
                                              alt: "",
                                              class:
                                                "w-[350px] mx-auto h-auto px-8 custom-bounce mt-20",
                                            },
                                            null,
                                            8,
                                            ig
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                  ]),
                                  _: 2,
                                },
                                1024
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                d("div", rg, [
                  d("div", ag, [
                    d("a", cg, [
                      d(
                        "img",
                        { src: D(Il), alt: "", class: "w-20" },
                        null,
                        8,
                        ug
                      ),
                      dg,
                    ]),
                  ]),
                  d("div", pg, [
                    d("a", fg, [
                      d(
                        "img",
                        { src: D(Fl), alt: "", class: "w-[86px]" },
                        null,
                        8,
                        mg
                      ),
                      hg,
                    ]),
                  ]),
                  d("div", gg, [
                    d("a", xg, [
                      d(
                        "img",
                        { src: D(Ul), alt: "", class: "w-20" },
                        null,
                        8,
                        vg
                      ),
                      _g,
                    ]),
                  ]),
                  d("div", bg, [
                    d("a", yg, [
                      d(
                        "img",
                        { src: D(Bm), alt: "", class: "w-[100px]" },
                        null,
                        8,
                        wg
                      ),
                      Sg,
                    ]),
                  ]),
                  d("div", Eg, [
                    d("a", Ag, [
                      d(
                        "img",
                        { src: D(B0), alt: "", class: "w-[100px]" },
                        null,
                        8,
                        Mg
                      ),
                      Rg,
                    ]),
                  ]),
                  d("div", Cg, [
                    d("a", Tg, [
                      d(
                        "img",
                        { src: D(D0), alt: "", class: "w-[100px]" },
                        null,
                        8,
                        Og
                      ),
                      Pg,
                    ]),
                  ]),
                ]),
                d("div", Ng, [
                  d("div", Lg, [
                    M(
                      D(Qe),
                      { autoplay: 4e3, "wrap-around": !0 },
                      {
                        addons: L(() => [M(D(dt))]),
                        default: L(() => [
                          (z(!0),
                          le(
                            me,
                            null,
                            Ze(
                              m.value,
                              (C) => (
                                z(),
                                Le(
                                  D(et),
                                  { key: C, class: "px-10 lg:pl-10" },
                                  {
                                    default: L(() => [
                                      d(
                                        "img",
                                        {
                                          src: C.image,
                                          class:
                                            "w-full md:w-full lg:w-[500px] carousel__item_1 rounded-3xl shadow-lg mx-auto h-full",
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        $g
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  Bg,
                ]),
                d("div", Dg, [
                  Ig,
                  d("div", Fg, [
                    Ug,
                    d("div", jg, [
                      d(
                        "img",
                        {
                          src: D(jl),
                          alt: "",
                          class:
                            "hidden lg:block w-auto px-8 custom-bounce mt-5 h-[550px] mx-auto",
                        },
                        null,
                        8,
                        kg
                      ),
                    ]),
                    Hg,
                  ]),
                ]),
                d("div", Kg, [
                  zg,
                  Wg,
                  d("div", Gg, [qg, M(of)]),
                  d("div", Yg, [Vg, M(Lp)]),
                  d("div", Zg, [Jg, M(Rf)]),
                  d("div", Xg, [
                    d("div", Qg, [
                      ex,
                      d("div", tx, [
                        d(
                          "p",
                          {
                            class: Gt([
                              "px-6 py-1 rounded-full border-2 cursor-pointer transition-all duration-200 border-yellow-400 hover:bg-yellow-600 hover:text-white",
                              x.value == 1 ? "bg-yellow-600 text-white" : "",
                            ]),
                            onClick: N[0] || (N[0] = (C) => (x.value = 1)),
                          },
                          " Fruity ",
                          2
                        ),
                        d(
                          "p",
                          {
                            class: Gt([
                              "px-6 py-1 rounded-full border-2 cursor-pointer transition-all duration-200 border-yellow-400 hover:bg-yellow-600 hover:text-white flex-nowrap",
                              x.value == 2 ? "bg-yellow-600 text-white" : "",
                            ]),
                            onClick: N[1] || (N[1] = (C) => (x.value = 2)),
                          },
                          " Double_Fruity ",
                          2
                        ),
                        d(
                          "p",
                          {
                            class: Gt([
                              "px-6 py-1 rounded-full border-2 cursor-pointer transition-all duration-200 border-yellow-400 hover:bg-yellow-600 hover:text-white",
                              x.value == 3 ? "bg-yellow-600 text-white" : "",
                            ]),
                            onClick: N[2] || (N[2] = (C) => (x.value = 3)),
                          },
                          " Milkshake ",
                          2
                        ),
                      ]),
                    ]),
                    x.value == 1 ? (z(), Le(tm, { key: 0 })) : Jt("", !0),
                    x.value == 3 ? (z(), Le(Oh, { key: 1 })) : Jt("", !0),
                    x.value == 2 ? (z(), Le(o0, { key: 2 })) : Jt("", !0),
                  ]),
                  d("div", sx, [nx, M(Sm)]),
                  d("div", ox, [lx, M(ih)]),
                  d("div", ix, [rx, M(C0)]),
                ]),
                ax,
                d("div", cx, [ux, d("div", dx, [M($m)])]),
                d("div", px, [
                  d("div", fx, [
                    mx,
                    hx,
                    d("div", gx, [
                      d(
                        "div",
                        {
                          class:
                            "flex justify-between items-center cursor-pointer",
                          onClick: l,
                        },
                        _x
                      ),
                      An(d("div", bx, wx, 512), [[Tn, s.value]]),
                    ]),
                    d("div", Sx, [
                      d(
                        "div",
                        {
                          class:
                            "flex justify-between items-center cursor-pointer",
                          onClick: i,
                        },
                        Mx
                      ),
                      An(
                        d(
                          "p",
                          Rx,
                          " As a guide, you should store e-liquids in a cool, dark place, away from strong odours or chemicals. Each bottle may have its own storage temperatures, but storing your unopened bottles of vape juice at 25oC is preferred across the industry. Avoid heat sources, lights, strong odours, or direct sunlight. ",
                          512
                        ),
                        [[Tn, n.value]]
                      ),
                    ]),
                    d("div", Cx, [
                      d(
                        "div",
                        {
                          class:
                            "flex justify-between items-center cursor-pointer",
                          onClick: r,
                        },
                        Px
                      ),
                      An(
                        d(
                          "p",
                          Nx,
                          " As a general rule, consider choosing an e-liquid with 3mg of nicotine if you only smoke one or two cigarettes a day, 6mg if you smoke under 10 per day and want a little bit of throat hit, 12mg if you smoke up to and above 20 a day and 18mg if you are a heavier smoker. ",
                          512
                        ),
                        [[Tn, o.value]]
                      ),
                    ]),
                  ]),
                ]),
                M(mr),
              ]))
            : Jt("", !0),
        ])
      );
    },
  },
  $x = {
    id: "ourProduct",
    class: "pt-20 pb-10 bg-gray-800 bg-opacity-50 px-8 md:px-14 lg:px-32",
  },
  Bx = Dt(
    '<div><p class="text-lg font-bold text-yellow-400">DETAIL PRODUCTS</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"><div><p class="text-xl md:text-3xl lg:text-5xl font-semibold text-white"> Welcome to Legendary Vaper&#39;s store </p></div><div><p class="text-gray-400"> We offer a wide range of quality products, an easy shopping process, express delivery and first-class service </p></div></div><div class="my-20"><div class="grid rid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"><div></div><div class="space-y-6"><p class="text-3xl font-bold text-yellow-400">Name</p><p class="text-lg font-semibold text-white">Brand</p><p class="text-gray-400 text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium itaque enim incidunt doloremque quos ducimus non? Quos aspernatur quas beatae provident officia ad vitae delectus officiis pariatur. Repellendus laudantium incidunt temporibus esse beatae voluptate iusto facere magni excepturi sit sapiente libero, veritatis vero eius vitae eum unde. Nam quaerat et doloremque repudiandae explicabo impedit ex quam expedita, consectetur, velit corrupti ducimus, dolores delectus. Vero ab cum in debitis. Perspiciatis reiciendis minus facilis veritatis impedit pariatur sequi totam. Officia, tenetur? Tenetur ipsum iure, dolorem iusto aut nobis quos minus. Odio nesciunt aliquam dolore, nam ad quia labore ratione quod dolor libero ipsa qui deserunt ullam soluta harum aut aliquid? Quae placeat provident aliquam, laudantium illum, reprehenderit cupiditate fugit quia, eius necessitatibus reiciendis veniam voluptate temporibus? Voluptatum obcaecati, sit eligendi quisquam natus in, illo </p></div></div></div>',
    3
  ),
  Dx = d(
    "p",
    {
      class:
        "text-left text-lg text-yellow-400 hover:text-white cursor-pointer font-semibold",
    },
    [d("i", { class: "fa-solid fa-arrow-left-long mr-2" }), X("Back ")],
    -1
  ),
  Ix = {
    __name: "ProductsView",
    setup(e) {
      const t = zu(),
        s = y("");
      return (
        je(() => {
          console.log(t.params.data), (s.value = t.params.data);
        }),
        (n, o) => {
          const l = Ae("router-link");
          return (
            z(),
            le("div", null, [
              M(qi),
              d("div", null, [
                d("div", $x, [
                  Bx,
                  M(l, { to: "/" }, { default: L(() => [Dx]), _: 1 }),
                ]),
              ]),
              M(mr),
            ])
          );
        }
      );
    },
  },
  Fx = [
    { path: "/", component: Lx },
    { path: "/product/:data", name: "Product", component: Ix },
  ],
  Ux = Hu({ history: ou(), routes: Fx }),
  hr = Bc(jc);
hr.use(Ux);
hr.mount("#app");

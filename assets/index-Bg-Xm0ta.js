function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["./pages-index-index.VcbwdKDF.js", "./_plugin-vue_export-helper.BCo6x5W8.js", "./index-CZOPOloT.css", "./pages-user-agreement-user-agreement.eOJfRXfd.js", "./user-agreement-QIGZ8nFk.css"]
    }
    return indexes.map( (i) => __vite__mapDeps.viteFileDeps[i])
}
var e = Object.defineProperty
  , t = (t, n, o) => (( (t, n, o) => {
    n in t ? e(t, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : t[n] = o
}
)(t, "symbol" != typeof n ? n + "" : n, o),
o);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function n(e, t) {
    const n = new Set(e.split(","));
    return e => n.has(e)
}
!function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
            t(e);
        new MutationObserver((e => {
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes)
                        "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        }
        )).observe(document, {
            childList: !0,
            subtree: !0
        })
    }
    function t(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity),
            e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
            "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin",
            t
        }(e);
        fetch(e.href, t)
    }
}();
const o = {}
  , r = []
  , i = () => {}
  , s = () => !1
  , a = e => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , l = e => e.startsWith("onUpdate:")
  , c = Object.assign
  , u = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , d = Object.prototype.hasOwnProperty
  , f = (e, t) => d.call(e, t)
  , p = Array.isArray
  , h = e => "[object Map]" === x(e)
  , m = e => "[object Set]" === x(e)
  , g = e => "function" == typeof e
  , v = e => "string" == typeof e
  , y = e => "symbol" == typeof e
  , b = e => null !== e && "object" == typeof e
  , _ = e => (b(e) || g(e)) && g(e.then) && g(e.catch)
  , w = Object.prototype.toString
  , x = e => w.call(e)
  , C = e => x(e).slice(8, -1)
  , S = e => "[object Object]" === x(e)
  , T = e => v(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e
  , E = n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , k = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , L = /-(\w)/g
  , O = k((e => e.replace(L, ( (e, t) => t ? t.toUpperCase() : ""))))
  , $ = /\B([A-Z])/g
  , P = k((e => e.replace($, "-$1").toLowerCase()))
  , A = k((e => e.charAt(0).toUpperCase() + e.slice(1)))
  , B = k((e => e ? `on${A(e)}` : ""))
  , I = (e, t) => !Object.is(e, t)
  , M = (e, t) => {
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , N = (e, t, n) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n
    })
}
  , R = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , j = e => {
    const t = v(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let F;
const D = () => F || (F = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function V(e) {
    if (p(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n]
              , r = v(o) ? q(o) : V(o);
            if (r)
                for (const e in r)
                    t[e] = r[e]
        }
        return t
    }
    if (v(e) || b(e))
        return e
}
const W = /;(?![^(]*\))/g
  , H = /:([^]+)/
  , U = /\/\*[^]*?\*\//g;
function q(e) {
    const t = {};
    return e.replace(U, "").split(W).forEach((e => {
        if (e) {
            const n = e.split(H);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    }
    )),
    t
}
function z(e) {
    let t = "";
    if (v(e))
        t = e;
    else if (p(e))
        for (let n = 0; n < e.length; n++) {
            const o = z(e[n]);
            o && (t += o + " ")
        }
    else if (b(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const K = n("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function G(e) {
    return !!e || "" === e
}
const Y = e => v(e) ? e : null == e ? "" : p(e) || b(e) && (e.toString === w || !g(e.toString)) ? JSON.stringify(e, X, 2) : String(e)
  , X = (e, t) => t && t.__v_isRef ? X(e, t.value) : h(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce(( (e, [t,n], o) => (e[J(t, o) + " =>"] = n,
    e)), {})
} : m(t) ? {
    [`Set(${t.size})`]: [...t.values()].map((e => J(e)))
} : y(t) ? J(t) : !b(t) || p(t) || S(t) ? t : String(t)
  , J = (e, t="") => {
    var n;
    return y(e) ? `Symbol(${null != (n = e.description) ? n : t})` : e
}
  , Z = ["ad", "ad-content-page", "ad-draw", "audio", "button", "camera", "canvas", "checkbox", "checkbox-group", "cover-image", "cover-view", "editor", "form", "functional-page-navigator", "icon", "image", "input", "label", "live-player", "live-pusher", "map", "movable-area", "movable-view", "navigator", "official-account", "open-data", "picker", "picker-view", "picker-view-column", "progress", "radio", "radio-group", "rich-text", "scroll-view", "slider", "swiper", "swiper-item", "switch", "text", "textarea", "video", "view", "web-view"].map((e => "uni-" + e))
  , Q = ["list-view", "list-item", "sticky-section", "sticky-header", "cloud-db-element"].map((e => "uni-" + e))
  , ee = ["list-item"].map((e => "uni-" + e));
function te(e) {
    if (-1 !== ee.indexOf(e))
        return !1;
    const t = "uni-" + e.replace("v-uni-", "");
    return -1 !== Z.indexOf(t) || -1 !== Q.indexOf(t)
}
const ne = "\n"
  , oe = 44
  , re = 50
  , ie = "UNI_LOCALE"
  , se = /^([a-z-]+:)?\/\//i
  , ae = /^data:.*,.*/
  , le = "WEB_INVOKE_APPSERVICE"
  , ce = "onShow"
  , ue = "onHide"
  , de = "onError"
  , fe = "onThemeChange"
  , pe = "onPageNotFound"
  , he = "onUnhandledRejection"
  , me = "onLoad"
  , ge = "onUnload"
  , ve = "onInit"
  , ye = "onSaveExitState"
  , be = "onResize"
  , _e = "onBackPress"
  , we = "onPageScroll"
  , xe = "onTabItemTap"
  , Ce = "onReachBottom"
  , Se = "onPullDownRefresh"
  , Te = "onShareTimeline"
  , Ee = "onAddToFavorites"
  , ke = "onShareAppMessage"
  , Le = "onNavigationBarButtonTap"
  , Oe = "onNavigationBarChange"
  , $e = "onNavigationBarSearchInputClicked"
  , Pe = "onNavigationBarSearchInputChanged"
  , Ae = "onNavigationBarSearchInputConfirmed"
  , Be = "onNavigationBarSearchInputFocusChanged"
  , Ie = "onAppEnterForeground"
  , Me = "onAppEnterBackground"
  , Ne = "onWebInvokeAppService";
function Re(e) {
    if (!e)
        return;
    let t = e.type.name;
    for (; t && te(P(t)); )
        t = (e = e.parent).type.name;
    return e.proxy
}
function je(e) {
    return 1 === e.nodeType
}
function Fe(e) {
    if (e instanceof Map) {
        const t = {};
        return e.forEach(( (e, n) => {
            t[n] = e
        }
        )),
        V(t)
    }
    if (v(e))
        return q(e);
    if (p(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n]
              , r = v(o) ? q(o) : Fe(o);
            if (r)
                for (const e in r)
                    t[e] = r[e]
        }
        return t
    }
    return V(e)
}
function De(e) {
    let t = "";
    if (e instanceof Map)
        e.forEach(( (e, n) => {
            e && (t += n + " ")
        }
        ));
    else if (p(e))
        for (let n = 0; n < e.length; n++) {
            const o = De(e[n]);
            o && (t += o + " ")
        }
    else
        t = z(e);
    return t.trim()
}
function Ve(e) {
    return 0 === e.indexOf("/")
}
function We(e) {
    return Ve(e) ? e : "/" + e
}
const He = (e, t) => {
    let n;
    for (let o = 0; o < e.length; o++)
        n = e[o](t);
    return n
}
;
function Ue(e, t) {
    for (const n in t)
        e.style[n] = t[n]
}
function qe(e, t=null) {
    let n;
    return (...o) => (e && (n = e.apply(t, o),
    e = null),
    n)
}
function ze(e) {
    return O(e.substring(5))
}
const Ke = qe(( () => {
    const e = HTMLElement.prototype
      , t = e.setAttribute;
    e.setAttribute = function(e, n) {
        if (e.startsWith("data-") && this.tagName.startsWith("UNI-")) {
            (this.__uniDataset || (this.__uniDataset = {}))[ze(e)] = n
        }
        t.call(this, e, n)
    }
    ;
    const n = e.removeAttribute;
    e.removeAttribute = function(e) {
        this.__uniDataset && e.startsWith("data-") && this.tagName.startsWith("UNI-") && delete this.__uniDataset[ze(e)],
        n.call(this, e)
    }
}
));
function Ge(e) {
    return c({}, e.dataset, e.__uniDataset)
}
const Ye = new RegExp("\"[^\"]+\"|'[^']+'|url\\([^)]+\\)|(\\d*\\.?\\d+)[r|u]px","g");
function Xe(e) {
    return {
        passive: e
    }
}
function Je(e) {
    const {id: t, offsetTop: n, offsetLeft: o} = e;
    return {
        id: t,
        dataset: Ge(e),
        offsetTop: n,
        offsetLeft: o
    }
}
function Ze(e) {
    try {
        return decodeURIComponent("" + e)
    } catch (t) {}
    return "" + e
}
function Qe(e={}) {
    const t = {};
    return Object.keys(e).forEach((n => {
        try {
            t[n] = Ze(e[n])
        } catch (o) {
            t[n] = e[n]
        }
    }
    )),
    t
}
const et = /\+/g;
function tt(e) {
    const t = {};
    if ("" === e || "?" === e)
        return t;
    const n = ("?" === e[0] ? e.slice(1) : e).split("&");
    for (let o = 0; o < n.length; ++o) {
        const e = n[o].replace(et, " ");
        let r = e.indexOf("=")
          , i = Ze(r < 0 ? e : e.slice(0, r))
          , s = r < 0 ? null : Ze(e.slice(r + 1));
        if (i in t) {
            let e = t[i];
            p(e) || (e = t[i] = [e]),
            e.push(s)
        } else
            t[i] = s
    }
    return t
}
function nt(e, t, {clearTimeout: n, setTimeout: o}) {
    let r;
    const i = function() {
        n(r);
        r = o(( () => e.apply(this, arguments)), t)
    };
    return i.cancel = function() {
        n(r)
    }
    ,
    i
}
class ot {
    constructor(e, t) {
        this.id = e,
        this.listener = {},
        this.emitCache = [],
        t && Object.keys(t).forEach((e => {
            this.on(e, t[e])
        }
        ))
    }
    emit(e, ...t) {
        const n = this.listener[e];
        if (!n)
            return this.emitCache.push({
                eventName: e,
                args: t
            });
        n.forEach((e => {
            e.fn.apply(e.fn, t)
        }
        )),
        this.listener[e] = n.filter((e => "once" !== e.type))
    }
    on(e, t) {
        this._addListener(e, "on", t),
        this._clearCache(e)
    }
    once(e, t) {
        this._addListener(e, "once", t),
        this._clearCache(e)
    }
    off(e, t) {
        const n = this.listener[e];
        if (n)
            if (t)
                for (let o = 0; o < n.length; )
                    n[o].fn === t && (n.splice(o, 1),
                    o--),
                    o++;
            else
                delete this.listener[e]
    }
    _clearCache(e) {
        for (let t = 0; t < this.emitCache.length; t++) {
            const n = this.emitCache[t]
              , o = e ? n.eventName === e ? e : null : n.eventName;
            if (!o)
                continue;
            "number" != typeof this.emit.apply(this, [o, ...n.args]) ? (this.emitCache.splice(t, 1),
            t--) : this.emitCache.pop()
        }
    }
    _addListener(e, t, n) {
        (this.listener[e] || (this.listener[e] = [])).push({
            fn: n,
            type: t
        })
    }
}
const rt = [ve, me, ce, ue, ge, _e, we, xe, Ce, Se, Te, ke, Ee, ye, Le, $e, Pe, Ae, Be];
const it = [ce, ue, "onLaunch", de, fe, pe, he, "onExit", ve, me, "onReady", ge, be, _e, we, xe, Ce, Se, Te, Ee, ke, ye, Le, $e, Pe, Ae, Be];
const st = [];
const at = qe(( (e, t) => {
    if (g(e._component.onError))
        return t(e)
}
))
  , lt = function() {};
lt.prototype = {
    on: function(e, t, n) {
        var o = this.e || (this.e = {});
        return (o[e] || (o[e] = [])).push({
            fn: t,
            ctx: n
        }),
        this
    },
    once: function(e, t, n) {
        var o = this;
        function r() {
            o.off(e, r),
            t.apply(n, arguments)
        }
        return r._ = t,
        this.on(e, r, n)
    },
    emit: function(e) {
        for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, r = n.length; o < r; o++)
            n[o].fn.apply(n[o].ctx, t);
        return this
    },
    off: function(e, t) {
        var n = this.e || (this.e = {})
          , o = n[e]
          , r = [];
        if (o && t) {
            for (var i = o.length - 1; i >= 0; i--)
                if (o[i].fn === t || o[i].fn._ === t) {
                    o.splice(i, 1);
                    break
                }
            r = o
        }
        return r.length ? n[e] = r : delete n[e],
        this
    }
};
var ct = lt;
const ut = {
    black: "rgba(0,0,0,0.4)",
    white: "rgba(255,255,255,0.4)"
};
function dt(e, t, n) {
    if (v(t) && t.startsWith("@")) {
        let r = e[t.replace("@", "")] || t;
        switch (n) {
        case "titleColor":
            r = "black" === r ? "#000000" : "#ffffff";
            break;
        case "borderStyle":
            r = (o = r) && o in ut ? ut[o] : o
        }
        return r
    }
    var o;
    return t
}
function ft(e, t={}, n="light") {
    const o = t[n]
      , r = {};
    return void 0 === o ? e : (Object.keys(e).forEach((i => {
        const s = e[i];
        r[i] = S(s) ? ft(s, t, n) : p(s) ? s.map((e => "object" == typeof e ? ft(e, t, n) : dt(o, e))) : dt(o, s, i)
    }
    )),
    r)
}
/**
* @dcloudio/uni-h5-vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let pt, ht;
class mt {
    constructor(e=!1) {
        this.detached = e,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = pt,
        !e && pt && (this.index = (pt.scopes || (pt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(e) {
        if (this._active) {
            const t = pt;
            try {
                return pt = this,
                e()
            } finally {
                pt = t
            }
        }
    }
    on() {
        pt = this
    }
    off() {
        pt = this.parent
    }
    stop(e) {
        if (this._active) {
            let t, n;
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].stop();
            for (t = 0,
            n = this.cleanups.length; t < n; t++)
                this.cleanups[t]();
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].stop(!0);
            if (!this.detached && this.parent && !e) {
                const e = this.parent.scopes.pop();
                e && e !== this && (this.parent.scopes[this.index] = e,
                e.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function gt(e) {
    return new mt(e)
}
class vt {
    constructor(e, t, n, o) {
        this.fn = e,
        this.trigger = t,
        this.scheduler = n,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 4,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        function(e, t=pt) {
            t && t.active && t.effects.push(e)
        }(this, o)
    }
    get dirty() {
        if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
            this._dirtyLevel = 1,
            St();
            for (let e = 0; e < this._depsLength; e++) {
                const t = this.deps[e];
                if (t.computed && (t.computed.value,
                this._dirtyLevel >= 4))
                    break
            }
            1 === this._dirtyLevel && (this._dirtyLevel = 0),
            Tt()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(e) {
        this._dirtyLevel = e ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let e = wt
          , t = ht;
        try {
            return wt = !0,
            ht = this,
            this._runnings++,
            yt(this),
            this.fn()
        } finally {
            bt(this),
            this._runnings--,
            ht = t,
            wt = e
        }
    }
    stop() {
        var e;
        this.active && (yt(this),
        bt(this),
        null == (e = this.onStop) || e.call(this),
        this.active = !1)
    }
}
function yt(e) {
    e._trackId++,
    e._depsLength = 0
}
function bt(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            _t(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function _t(e, t) {
    const n = e.get(t);
    void 0 !== n && t._trackId !== n && (e.delete(t),
    0 === e.size && e.cleanup())
}
let wt = !0
  , xt = 0;
const Ct = [];
function St() {
    Ct.push(wt),
    wt = !1
}
function Tt() {
    const e = Ct.pop();
    wt = void 0 === e || e
}
function Et() {
    xt++
}
function kt() {
    for (xt--; !xt && Ot.length; )
        Ot.shift()()
}
function Lt(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const n = e.deps[e._depsLength];
        n !== t ? (n && _t(n, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const Ot = [];
function $t(e, t, n) {
    Et();
    for (const o of e.keys()) {
        let n;
        o._dirtyLevel < t && (null != n ? n : n = e.get(o) === o._trackId) && (o._shouldSchedule || (o._shouldSchedule = 0 === o._dirtyLevel),
        o._dirtyLevel = t),
        o._shouldSchedule && (null != n ? n : n = e.get(o) === o._trackId) && (o.trigger(),
        o._runnings && !o.allowRecurse || 2 === o._dirtyLevel || (o._shouldSchedule = !1,
        o.scheduler && Ot.push(o.scheduler)))
    }
    kt()
}
const Pt = (e, t) => {
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , At = new WeakMap
  , Bt = Symbol("")
  , It = Symbol("");
function Mt(e, t, n) {
    if (wt && ht) {
        let t = At.get(e);
        t || At.set(e, t = new Map);
        let o = t.get(n);
        o || t.set(n, o = Pt(( () => t.delete(n)))),
        Lt(ht, o)
    }
}
function Nt(e, t, n, o, r, i) {
    const s = At.get(e);
    if (!s)
        return;
    let a = [];
    if ("clear" === t)
        a = [...s.values()];
    else if ("length" === n && p(e)) {
        const e = Number(o);
        s.forEach(( (t, n) => {
            ("length" === n || !y(n) && n >= e) && a.push(t)
        }
        ))
    } else
        switch (void 0 !== n && a.push(s.get(n)),
        t) {
        case "add":
            p(e) ? T(n) && a.push(s.get("length")) : (a.push(s.get(Bt)),
            h(e) && a.push(s.get(It)));
            break;
        case "delete":
            p(e) || (a.push(s.get(Bt)),
            h(e) && a.push(s.get(It)));
            break;
        case "set":
            h(e) && a.push(s.get(Bt))
        }
    Et();
    for (const l of a)
        l && $t(l, 4);
    kt()
}
const Rt = n("__proto__,__v_isRef,__isVue")
  , jt = new Set(Object.getOwnPropertyNames(Symbol).filter((e => "arguments" !== e && "caller" !== e)).map((e => Symbol[e])).filter(y))
  , Ft = Dt();
function Dt() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach((t => {
        e[t] = function(...e) {
            const n = Ln(this);
            for (let t = 0, r = this.length; t < r; t++)
                Mt(n, 0, t + "");
            const o = n[t](...e);
            return -1 === o || !1 === o ? n[t](...e.map(Ln)) : o
        }
    }
    )),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t => {
        e[t] = function(...e) {
            St(),
            Et();
            const n = Ln(this)[t].apply(this, e);
            return kt(),
            Tt(),
            n
        }
    }
    )),
    e
}
function Vt(e) {
    const t = Ln(this);
    return Mt(t, 0, e),
    t.hasOwnProperty(e)
}
class Wt {
    constructor(e=!1, t=!1) {
        this._isReadonly = e,
        this._isShallow = t
    }
    get(e, t, n) {
        const o = this._isReadonly
          , r = this._isShallow;
        if ("__v_isReactive" === t)
            return !o;
        if ("__v_isReadonly" === t)
            return o;
        if ("__v_isShallow" === t)
            return r;
        if ("__v_raw" === t)
            return n === (o ? r ? bn : yn : r ? vn : gn).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
        const i = p(e);
        if (!o) {
            if (i && f(Ft, t))
                return Reflect.get(Ft, t, n);
            if ("hasOwnProperty" === t)
                return Vt
        }
        const s = Reflect.get(e, t, n);
        return (y(t) ? jt.has(t) : Rt(t)) ? s : (o || Mt(e, 0, t),
        r ? s : Mn(s) ? i && T(t) ? s : s.value : b(s) ? o ? xn(s) : _n(s) : s)
    }
}
class Ht extends Wt {
    constructor(e=!1) {
        super(!1, e)
    }
    set(e, t, n, o) {
        let r = e[t];
        if (!this._isShallow) {
            const t = Tn(r);
            if (En(n) || Tn(n) || (r = Ln(r),
            n = Ln(n)),
            !p(e) && Mn(r) && !Mn(n))
                return !t && (r.value = n,
                !0)
        }
        const i = p(e) && T(t) ? Number(t) < e.length : f(e, t)
          , s = Reflect.set(e, t, n, o);
        return e === Ln(o) && (i ? I(n, r) && Nt(e, "set", t, n) : Nt(e, "add", t, n)),
        s
    }
    deleteProperty(e, t) {
        const n = f(e, t);
        e[t];
        const o = Reflect.deleteProperty(e, t);
        return o && n && Nt(e, "delete", t, void 0),
        o
    }
    has(e, t) {
        const n = Reflect.has(e, t);
        return y(t) && jt.has(t) || Mt(e, 0, t),
        n
    }
    ownKeys(e) {
        return Mt(e, 0, p(e) ? "length" : Bt),
        Reflect.ownKeys(e)
    }
}
class Ut extends Wt {
    constructor(e=!1) {
        super(!0, e)
    }
    set(e, t) {
        return !0
    }
    deleteProperty(e, t) {
        return !0
    }
}
const qt = new Ht
  , zt = new Ut
  , Kt = new Ht(!0)
  , Gt = e => e
  , Yt = e => Reflect.getPrototypeOf(e);
function Xt(e, t, n=!1, o=!1) {
    const r = Ln(e = e.__v_raw)
      , i = Ln(t);
    n || (I(t, i) && Mt(r, 0, t),
    Mt(r, 0, i));
    const {has: s} = Yt(r)
      , a = o ? Gt : n ? Pn : $n;
    return s.call(r, t) ? a(e.get(t)) : s.call(r, i) ? a(e.get(i)) : void (e !== r && e.get(t))
}
function Jt(e, t=!1) {
    const n = this.__v_raw
      , o = Ln(n)
      , r = Ln(e);
    return t || (I(e, r) && Mt(o, 0, e),
    Mt(o, 0, r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
}
function Zt(e, t=!1) {
    return e = e.__v_raw,
    !t && Mt(Ln(e), 0, Bt),
    Reflect.get(e, "size", e)
}
function Qt(e) {
    e = Ln(e);
    const t = Ln(this);
    return Yt(t).has.call(t, e) || (t.add(e),
    Nt(t, "add", e, e)),
    this
}
function en(e, t) {
    t = Ln(t);
    const n = Ln(this)
      , {has: o, get: r} = Yt(n);
    let i = o.call(n, e);
    i || (e = Ln(e),
    i = o.call(n, e));
    const s = r.call(n, e);
    return n.set(e, t),
    i ? I(t, s) && Nt(n, "set", e, t) : Nt(n, "add", e, t),
    this
}
function tn(e) {
    const t = Ln(this)
      , {has: n, get: o} = Yt(t);
    let r = n.call(t, e);
    r || (e = Ln(e),
    r = n.call(t, e)),
    o && o.call(t, e);
    const i = t.delete(e);
    return r && Nt(t, "delete", e, void 0),
    i
}
function nn() {
    const e = Ln(this)
      , t = 0 !== e.size
      , n = e.clear();
    return t && Nt(e, "clear", void 0, void 0),
    n
}
function on(e, t) {
    return function(n, o) {
        const r = this
          , i = r.__v_raw
          , s = Ln(i)
          , a = t ? Gt : e ? Pn : $n;
        return !e && Mt(s, 0, Bt),
        i.forEach(( (e, t) => n.call(o, a(e), a(t), r)))
    }
}
function rn(e, t, n) {
    return function(...o) {
        const r = this.__v_raw
          , i = Ln(r)
          , s = h(i)
          , a = "entries" === e || e === Symbol.iterator && s
          , l = "keys" === e && s
          , c = r[e](...o)
          , u = n ? Gt : t ? Pn : $n;
        return !t && Mt(i, 0, l ? It : Bt),
        {
            next() {
                const {value: e, done: t} = c.next();
                return t ? {
                    value: e,
                    done: t
                } : {
                    value: a ? [u(e[0]), u(e[1])] : u(e),
                    done: t
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function sn(e) {
    return function(...t) {
        return "delete" !== e && ("clear" === e ? void 0 : this)
    }
}
function an() {
    const e = {
        get(e) {
            return Xt(this, e)
        },
        get size() {
            return Zt(this)
        },
        has: Jt,
        add: Qt,
        set: en,
        delete: tn,
        clear: nn,
        forEach: on(!1, !1)
    }
      , t = {
        get(e) {
            return Xt(this, e, !1, !0)
        },
        get size() {
            return Zt(this)
        },
        has: Jt,
        add: Qt,
        set: en,
        delete: tn,
        clear: nn,
        forEach: on(!1, !0)
    }
      , n = {
        get(e) {
            return Xt(this, e, !0)
        },
        get size() {
            return Zt(this, !0)
        },
        has(e) {
            return Jt.call(this, e, !0)
        },
        add: sn("add"),
        set: sn("set"),
        delete: sn("delete"),
        clear: sn("clear"),
        forEach: on(!0, !1)
    }
      , o = {
        get(e) {
            return Xt(this, e, !0, !0)
        },
        get size() {
            return Zt(this, !0)
        },
        has(e) {
            return Jt.call(this, e, !0)
        },
        add: sn("add"),
        set: sn("set"),
        delete: sn("delete"),
        clear: sn("clear"),
        forEach: on(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach((r => {
        e[r] = rn(r, !1, !1),
        n[r] = rn(r, !0, !1),
        t[r] = rn(r, !1, !0),
        o[r] = rn(r, !0, !0)
    }
    )),
    [e, n, t, o]
}
const [ln,cn,un,dn] = an();
function fn(e, t) {
    const n = t ? e ? dn : un : e ? cn : ln;
    return (t, o, r) => "__v_isReactive" === o ? !e : "__v_isReadonly" === o ? e : "__v_raw" === o ? t : Reflect.get(f(n, o) && o in t ? n : t, o, r)
}
const pn = {
    get: fn(!1, !1)
}
  , hn = {
    get: fn(!1, !0)
}
  , mn = {
    get: fn(!0, !1)
}
  , gn = new WeakMap
  , vn = new WeakMap
  , yn = new WeakMap
  , bn = new WeakMap;
function _n(e) {
    return Tn(e) ? e : Cn(e, !1, qt, pn, gn)
}
function wn(e) {
    return Cn(e, !1, Kt, hn, vn)
}
function xn(e) {
    return Cn(e, !0, zt, mn, yn)
}
function Cn(e, t, n, o, r) {
    if (!b(e))
        return e;
    if (e.__v_raw && (!t || !e.__v_isReactive))
        return e;
    const i = r.get(e);
    if (i)
        return i;
    const s = (a = e).__v_skip || !Object.isExtensible(a) ? 0 : function(e) {
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
            return 0
        }
    }(C(a));
    var a;
    if (0 === s)
        return e;
    const l = new Proxy(e,2 === s ? o : n);
    return r.set(e, l),
    l
}
function Sn(e) {
    return Tn(e) ? Sn(e.__v_raw) : !(!e || !e.__v_isReactive)
}
function Tn(e) {
    return !(!e || !e.__v_isReadonly)
}
function En(e) {
    return !(!e || !e.__v_isShallow)
}
function kn(e) {
    return Sn(e) || Tn(e)
}
function Ln(e) {
    const t = e && e.__v_raw;
    return t ? Ln(t) : e
}
function On(e) {
    return Object.isExtensible(e) && N(e, "__v_skip", !0),
    e
}
const $n = e => b(e) ? _n(e) : e
  , Pn = e => b(e) ? xn(e) : e;
class An {
    constructor(e, t, n, o) {
        this.getter = e,
        this._setter = t,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new vt(( () => e(this._value)),( () => In(this, 2 === this.effect._dirtyLevel ? 2 : 3))),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !o,
        this.__v_isReadonly = n
    }
    get value() {
        const e = Ln(this);
        return e._cacheable && !e.effect.dirty || !I(e._value, e._value = e.effect.run()) || In(e, 4),
        Bn(e),
        e.effect._dirtyLevel >= 2 && In(e, 2),
        e._value
    }
    set value(e) {
        this._setter(e)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(e) {
        this.effect.dirty = e
    }
}
function Bn(e) {
    var t;
    wt && ht && (e = Ln(e),
    Lt(ht, null != (t = e.dep) ? t : e.dep = Pt(( () => e.dep = void 0), e instanceof An ? e : void 0)))
}
function In(e, t=4, n) {
    const o = (e = Ln(e)).dep;
    o && $t(o, t)
}
function Mn(e) {
    return !(!e || !0 !== e.__v_isRef)
}
function Nn(e) {
    return jn(e, !1)
}
function Rn(e) {
    return jn(e, !0)
}
function jn(e, t) {
    return Mn(e) ? e : new Fn(e,t)
}
class Fn {
    constructor(e, t) {
        this.__v_isShallow = t,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = t ? e : Ln(e),
        this._value = t ? e : $n(e)
    }
    get value() {
        return Bn(this),
        this._value
    }
    set value(e) {
        const t = this.__v_isShallow || En(e) || Tn(e);
        e = t ? e : Ln(e),
        I(e, this._rawValue) && (this._rawValue = e,
        this._value = t ? e : $n(e),
        In(this, 4))
    }
}
function Dn(e) {
    return Mn(e) ? e.value : e
}
const Vn = {
    get: (e, t, n) => Dn(Reflect.get(e, t, n)),
    set: (e, t, n, o) => {
        const r = e[t];
        return Mn(r) && !Mn(n) ? (r.value = n,
        !0) : Reflect.set(e, t, n, o)
    }
};
function Wn(e) {
    return Sn(e) ? e : new Proxy(e,Vn)
}
function Hn(e, t, n, o) {
    try {
        return o ? e(...o) : e()
    } catch (r) {
        qn(r, t, n)
    }
}
function Un(e, t, n, o) {
    if (g(e)) {
        const r = Hn(e, t, n, o);
        return r && _(r) && r.catch((e => {
            qn(e, t, n)
        }
        )),
        r
    }
    const r = [];
    for (let i = 0; i < e.length; i++)
        r.push(Un(e[i], t, n, o));
    return r
}
function qn(e, t, n, o=!0) {
    t && t.vnode;
    if (t) {
        let o = t.parent;
        const r = t.proxy
          , i = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; o; ) {
            const t = o.ec;
            if (t)
                for (let n = 0; n < t.length; n++)
                    if (!1 === t[n](e, r, i))
                        return;
            o = o.parent
        }
        const s = t.appContext.config.errorHandler;
        if (s)
            return void Hn(s, null, 10, [e, r, i])
    }
    !function(e) {
        console.error(e)
    }(e, 0, 0, o)
}
let zn = !1
  , Kn = !1;
const Gn = [];
let Yn = 0;
const Xn = [];
let Jn = null
  , Zn = 0;
const Qn = Promise.resolve();
let eo = null;
function to(e) {
    const t = eo || Qn;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function no(e) {
    Gn.length && Gn.includes(e, zn && e.allowRecurse ? Yn + 1 : Yn) || (null == e.id ? Gn.push(e) : Gn.splice(function(e) {
        let t = Yn + 1
          , n = Gn.length;
        for (; t < n; ) {
            const o = t + n >>> 1
              , r = Gn[o]
              , i = so(r);
            i < e || i === e && r.pre ? t = o + 1 : n = o
        }
        return t
    }(e.id), 0, e),
    oo())
}
function oo() {
    zn || Kn || (Kn = !0,
    eo = Qn.then(lo))
}
function ro(e, t, n=(zn ? Yn + 1 : 0)) {
    for (; n < Gn.length; n++) {
        const t = Gn[n];
        if (t && t.pre) {
            if (e && t.id !== e.uid)
                continue;
            Gn.splice(n, 1),
            n--,
            t()
        }
    }
}
function io(e) {
    if (Xn.length) {
        const e = [...new Set(Xn)].sort(( (e, t) => so(e) - so(t)));
        if (Xn.length = 0,
        Jn)
            return void Jn.push(...e);
        for (Jn = e,
        Zn = 0; Zn < Jn.length; Zn++)
            Jn[Zn]();
        Jn = null,
        Zn = 0
    }
}
const so = e => null == e.id ? 1 / 0 : e.id
  , ao = (e, t) => {
    const n = so(e) - so(t);
    if (0 === n) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function lo(e) {
    Kn = !1,
    zn = !0,
    Gn.sort(ao);
    try {
        for (Yn = 0; Yn < Gn.length; Yn++) {
            const e = Gn[Yn];
            e && !1 !== e.active && Hn(e, null, 14)
        }
    } finally {
        Yn = 0,
        Gn.length = 0,
        io(),
        zn = !1,
        eo = null,
        (Gn.length || Xn.length) && lo()
    }
}
function co(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || o;
    let i = n;
    const s = t.startsWith("update:")
      , a = s && t.slice(7);
    if (a && a in r) {
        const e = `${"modelValue" === a ? "model" : a}Modifiers`
          , {number: t, trim: s} = r[e] || o;
        s && (i = n.map((e => v(e) ? e.trim() : e))),
        t && (i = n.map(R))
    }
    let l, c = r[l = B(t)] || r[l = B(O(t))];
    !c && s && (c = r[l = B(P(t))]),
    c && Un(c, e, 6, uo(e, c, i));
    const u = r[l + "Once"];
    if (u) {
        if (e.emitted) {
            if (e.emitted[l])
                return
        } else
            e.emitted = {};
        e.emitted[l] = !0,
        Un(u, e, 6, uo(e, u, i))
    }
}
function uo(e, t, n) {
    if (1 !== n.length)
        return n;
    if (g(t)) {
        if (t.length < 2)
            return n
    } else if (!t.find((e => e.length >= 2)))
        return n;
    const o = n[0];
    if (o && f(o, "type") && f(o, "timeStamp") && f(o, "target") && f(o, "currentTarget") && f(o, "detail")) {
        const t = e.proxy
          , o = t.$gcd(t, !0);
        o && n.push(o)
    }
    return n
}
function fo(e, t, n=!1) {
    const o = t.emitsCache
      , r = o.get(e);
    if (void 0 !== r)
        return r;
    const i = e.emits;
    let s = {}
      , a = !1;
    if (!g(e)) {
        const o = e => {
            const n = fo(e, t, !0);
            n && (a = !0,
            c(s, n))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(o),
        e.extends && o(e.extends),
        e.mixins && e.mixins.forEach(o)
    }
    return i || a ? (p(i) ? i.forEach((e => s[e] = null)) : c(s, i),
    b(e) && o.set(e, s),
    s) : (b(e) && o.set(e, null),
    null)
}
function po(e, t) {
    return !(!e || !a(t)) && (t = t.slice(2).replace(/Once$/, ""),
    f(e, t[0].toLowerCase() + t.slice(1)) || f(e, P(t)) || f(e, t))
}
let ho = null
  , mo = null;
function go(e) {
    const t = ho;
    return ho = e,
    mo = e && e.type.__scopeId || null,
    t
}
function vo(e, t=ho, n) {
    if (!t)
        return e;
    if (e._n)
        return e;
    const o = (...n) => {
        o._d && ki(-1);
        const r = go(t);
        let i;
        try {
            i = e(...n)
        } finally {
            go(r),
            o._d && ki(1)
        }
        return i
    }
    ;
    return o._n = !0,
    o._c = !0,
    o._d = !0,
    o
}
function yo(e) {
    const {type: t, vnode: n, proxy: o, withProxy: r, props: i, propsOptions: [s], slots: a, attrs: c, emit: u, render: d, renderCache: f, data: p, setupState: h, ctx: m, inheritAttrs: g} = e;
    let v, y;
    const b = go(e);
    try {
        if (4 & n.shapeFlag) {
            const e = r || o
              , t = e;
            v = Vi(d.call(t, e, f, i, h, p, m)),
            y = c
        } else {
            const e = t;
            0,
            v = Vi(e.length > 1 ? e(i, {
                attrs: c,
                slots: a,
                emit: u
            }) : e(i, null)),
            y = t.props ? c : bo(c)
        }
    } catch (w) {
        Ci.length = 0,
        qn(w, e, 1),
        v = Ri(wi)
    }
    let _ = v;
    if (y && !1 !== g) {
        const e = Object.keys(y)
          , {shapeFlag: t} = _;
        e.length && 7 & t && (s && e.some(l) && (y = _o(y, s)),
        _ = ji(_, y))
    }
    return n.dirs && (_ = ji(_),
    _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs),
    n.transition && (_.transition = n.transition),
    v = _,
    go(b),
    v
}
const bo = e => {
    let t;
    for (const n in e)
        ("class" === n || "style" === n || a(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , _o = (e, t) => {
    const n = {};
    for (const o in e)
        l(o) && o.slice(9)in t || (n[o] = e[o]);
    return n
}
;
function wo(e, t, n) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length)
        return !0;
    for (let r = 0; r < o.length; r++) {
        const i = o[r];
        if (t[i] !== e[i] && !po(n, i))
            return !0
    }
    return !1
}
const xo = "components";
function Co(e, t) {
    return Eo(xo, e, !0, t) || e
}
const So = Symbol.for("v-ndc");
function To(e) {
    return v(e) ? Eo(xo, e, !1) || e : e || So
}
function Eo(e, t, n=!0, o=!1) {
    const r = ho || Gi;
    if (r) {
        const n = r.type;
        {
            const e = ss(n, !1);
            if (e && (e === t || e === O(t) || e === A(O(t))))
                return n
        }
        const i = ko(r[e] || n[e], t) || ko(r.appContext[e], t);
        return !i && o ? n : i
    }
}
function ko(e, t) {
    return e && (e[t] || e[O(t)] || e[A(O(t))])
}
const Lo = e => e.__isSuspense;
const Oo = Symbol.for("v-scx")
  , $o = () => Jr(Oo);
function Po(e, t) {
    return Io(e, null, t)
}
const Ao = {};
function Bo(e, t, n) {
    return Io(e, t, n)
}
function Io(e, t, {immediate: n, deep: r, flush: s, once: a, onTrack: l, onTrigger: c}=o) {
    if (t && a) {
        const e = t;
        t = (...t) => {
            e(...t),
            E()
        }
    }
    const d = Gi
      , f = e => !0 === r ? e : Ro(e, !1 === r ? 1 : void 0);
    let h, m, v = !1, y = !1;
    if (Mn(e) ? (h = () => e.value,
    v = En(e)) : Sn(e) ? (h = () => f(e),
    v = !0) : p(e) ? (y = !0,
    v = e.some((e => Sn(e) || En(e))),
    h = () => e.map((e => Mn(e) ? e.value : Sn(e) ? f(e) : g(e) ? Hn(e, d, 2) : void 0))) : h = g(e) ? t ? () => Hn(e, d, 2) : () => (m && m(),
    Un(e, d, 3, [_])) : i,
    t && r) {
        const e = h;
        h = () => Ro(e())
    }
    let b, _ = e => {
        m = S.onStop = () => {
            Hn(e, d, 4),
            m = S.onStop = void 0
        }
    }
    ;
    if (ns) {
        if (_ = i,
        t ? n && Un(t, d, 3, [h(), y ? [] : void 0, _]) : h(),
        "sync" !== s)
            return i;
        {
            const e = $o();
            b = e.__watcherHandles || (e.__watcherHandles = [])
        }
    }
    let w = y ? new Array(e.length).fill(Ao) : Ao;
    const x = () => {
        if (S.active && S.dirty)
            if (t) {
                const e = S.run();
                (r || v || (y ? e.some(( (e, t) => I(e, w[t]))) : I(e, w))) && (m && m(),
                Un(t, d, 3, [e, w === Ao ? void 0 : y && w[0] === Ao ? [] : w, _]),
                w = e)
            } else
                S.run()
    }
    ;
    let C;
    x.allowRecurse = !!t,
    "sync" === s ? C = x : "post" === s ? C = () => pi(x, d && d.suspense) : (x.pre = !0,
    d && (x.id = d.uid),
    C = () => no(x));
    const S = new vt(h,i,C)
      , T = pt
      , E = () => {
        S.stop(),
        T && u(T.effects, S)
    }
    ;
    return t ? n ? x() : w = S.run() : "post" === s ? pi(S.run.bind(S), d && d.suspense) : S.run(),
    b && b.push(E),
    E
}
function Mo(e, t, n) {
    const o = this.proxy
      , r = v(e) ? e.includes(".") ? No(o, e) : () => o[e] : e.bind(o, o);
    let i;
    g(t) ? i = t : (i = t.handler,
    n = t);
    const s = Zi(this)
      , a = Io(r, i.bind(o), n);
    return s(),
    a
}
function No(e, t) {
    const n = t.split(".");
    return () => {
        let t = e;
        for (let e = 0; e < n.length && t; e++)
            t = t[n[e]];
        return t
    }
}
function Ro(e, t, n=0, o) {
    if (!b(e) || e.__v_skip)
        return e;
    if (t && t > 0) {
        if (n >= t)
            return e;
        n++
    }
    if ((o = o || new Set).has(e))
        return e;
    if (o.add(e),
    Mn(e))
        Ro(e.value, t, n, o);
    else if (p(e))
        for (let r = 0; r < e.length; r++)
            Ro(e[r], t, n, o);
    else if (m(e) || h(e))
        e.forEach((e => {
            Ro(e, t, n, o)
        }
        ));
    else if (S(e))
        for (const r in e)
            Ro(e[r], t, n, o);
    return e
}
function jo(e, t) {
    if (null === ho)
        return e;
    const n = is(ho) || ho.proxy
      , r = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let[e,s,a,l=o] = t[i];
        e && (g(e) && (e = {
            mounted: e,
            updated: e
        }),
        e.deep && Ro(s),
        r.push({
            dir: e,
            instance: n,
            value: s,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}
function Fo(e, t, n, o) {
    const r = e.dirs
      , i = t && t.dirs;
    for (let s = 0; s < r.length; s++) {
        const a = r[s];
        i && (a.oldValue = i[s].value);
        let l = a.dir[o];
        l && (St(),
        Un(l, n, 8, [e.el, a, e, t]),
        Tt())
    }
}
const Do = Symbol("_leaveCb")
  , Vo = Symbol("_enterCb");
const Wo = [Function, Array]
  , Ho = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Wo,
    onEnter: Wo,
    onAfterEnter: Wo,
    onEnterCancelled: Wo,
    onBeforeLeave: Wo,
    onLeave: Wo,
    onAfterLeave: Wo,
    onLeaveCancelled: Wo,
    onBeforeAppear: Wo,
    onAppear: Wo,
    onAfterAppear: Wo,
    onAppearCancelled: Wo
}
  , Uo = {
    name: "BaseTransition",
    props: Ho,
    setup(e, {slots: t}) {
        const n = Yi()
          , o = function() {
            const e = {
                isMounted: !1,
                isLeaving: !1,
                isUnmounting: !1,
                leavingVNodes: new Map
            };
            return vr(( () => {
                e.isMounted = !0
            }
            )),
            _r(( () => {
                e.isUnmounting = !0
            }
            )),
            e
        }();
        return () => {
            const r = t.default && Xo(t.default(), !0);
            if (!r || !r.length)
                return;
            let i = r[0];
            if (r.length > 1)
                for (const e of r)
                    if (e.type !== wi) {
                        i = e;
                        break
                    }
            const s = Ln(e)
              , {mode: a} = s;
            if (o.isLeaving)
                return Ko(i);
            const l = Go(i);
            if (!l)
                return Ko(i);
            const c = zo(l, s, o, n);
            Yo(l, c);
            const u = n.subTree
              , d = u && Go(u);
            if (d && d.type !== wi && !Ai(l, d)) {
                const e = zo(d, s, o, n);
                if (Yo(d, e),
                "out-in" === a)
                    return o.isLeaving = !0,
                    e.afterLeave = () => {
                        o.isLeaving = !1,
                        !1 !== n.update.active && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Ko(i);
                "in-out" === a && l.type !== wi && (e.delayLeave = (e, t, n) => {
                    qo(o, d)[String(d.key)] = d,
                    e[Do] = () => {
                        t(),
                        e[Do] = void 0,
                        delete c.delayedLeave
                    }
                    ,
                    c.delayedLeave = n
                }
                )
            }
            return i
        }
    }
};
function qo(e, t) {
    const {leavingVNodes: n} = e;
    let o = n.get(t.type);
    return o || (o = Object.create(null),
    n.set(t.type, o)),
    o
}
function zo(e, t, n, o) {
    const {appear: r, mode: i, persisted: s=!1, onBeforeEnter: a, onEnter: l, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: d, onLeave: f, onAfterLeave: h, onLeaveCancelled: m, onBeforeAppear: g, onAppear: v, onAfterAppear: y, onAppearCancelled: b} = t
      , _ = String(e.key)
      , w = qo(n, e)
      , x = (e, t) => {
        e && Un(e, o, 9, t)
    }
      , C = (e, t) => {
        const n = t[1];
        x(e, t),
        p(e) ? e.every((e => e.length <= 1)) && n() : e.length <= 1 && n()
    }
      , S = {
        mode: i,
        persisted: s,
        beforeEnter(t) {
            let o = a;
            if (!n.isMounted) {
                if (!r)
                    return;
                o = g || a
            }
            t[Do] && t[Do](!0);
            const i = w[_];
            i && Ai(e, i) && i.el[Do] && i.el[Do](),
            x(o, [t])
        },
        enter(e) {
            let t = l
              , o = c
              , i = u;
            if (!n.isMounted) {
                if (!r)
                    return;
                t = v || l,
                o = y || c,
                i = b || u
            }
            let s = !1;
            const a = e[Vo] = t => {
                s || (s = !0,
                x(t ? i : o, [e]),
                S.delayedLeave && S.delayedLeave(),
                e[Vo] = void 0)
            }
            ;
            t ? C(t, [e, a]) : a()
        },
        leave(t, o) {
            const r = String(e.key);
            if (t[Vo] && t[Vo](!0),
            n.isUnmounting)
                return o();
            x(d, [t]);
            let i = !1;
            const s = t[Do] = n => {
                i || (i = !0,
                o(),
                x(n ? m : h, [t]),
                t[Do] = void 0,
                w[r] === e && delete w[r])
            }
            ;
            w[r] = e,
            f ? C(f, [t, s]) : s()
        },
        clone: e => zo(e, t, n, o)
    };
    return S
}
function Ko(e) {
    if (tr(e))
        return (e = ji(e)).children = null,
        e
}
function Go(e) {
    return tr(e) ? e.children ? e.children[0] : void 0 : e
}
function Yo(e, t) {
    6 & e.shapeFlag && e.component ? Yo(e.component.subTree, t) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Xo(e, t=!1, n) {
    let o = []
      , r = 0;
    for (let i = 0; i < e.length; i++) {
        let s = e[i];
        const a = null == n ? s.key : String(n) + String(null != s.key ? s.key : i);
        s.type === bi ? (128 & s.patchFlag && r++,
        o = o.concat(Xo(s.children, t, a))) : (t || s.type !== wi) && o.push(null != a ? ji(s, {
            key: a
        }) : s)
    }
    if (r > 1)
        for (let i = 0; i < o.length; i++)
            o[i].patchFlag = -2;
    return o
}
/*! #__NO_SIDE_EFFECTS__ */
function Jo(e, t) {
    return g(e) ? ( () => c({
        name: e.name
    }, t, {
        setup: e
    }))() : e
}
const Zo = e => !!e.type.__asyncLoader /*! #__NO_SIDE_EFFECTS__ */
;
function Qo(e) {
    g(e) && (e = {
        loader: e
    });
    const {loader: t, loadingComponent: n, errorComponent: o, delay: r=200, timeout: i, suspensible: s=!0, onError: a} = e;
    let l, c = null, u = 0;
    const d = () => {
        let e;
        return c || (e = c = t().catch((e => {
            if (e = e instanceof Error ? e : new Error(String(e)),
            a)
                return new Promise(( (t, n) => {
                    a(e, ( () => t((u++,
                    c = null,
                    d()))), ( () => n(e)), u + 1)
                }
                ));
            throw e
        }
        )).then((t => e !== c && c ? c : (t && (t.__esModule || "Module" === t[Symbol.toStringTag]) && (t = t.default),
        l = t,
        t))))
    }
    ;
    return Jo({
        name: "AsyncComponentWrapper",
        __asyncLoader: d,
        get __asyncResolved() {
            return l
        },
        setup() {
            const e = Gi;
            if (l)
                return () => er(l, e);
            const t = t => {
                c = null,
                qn(t, e, 13, !o)
            }
            ;
            if (s && e.suspense || ns)
                return d().then((t => () => er(t, e))).catch((e => (t(e),
                () => o ? Ri(o, {
                    error: e
                }) : null)));
            const a = Nn(!1)
              , u = Nn()
              , f = Nn(!!r);
            return r && setTimeout(( () => {
                f.value = !1
            }
            ), r),
            null != i && setTimeout(( () => {
                if (!a.value && !u.value) {
                    const e = new Error(`Async component timed out after ${i}ms.`);
                    t(e),
                    u.value = e
                }
            }
            ), i),
            d().then(( () => {
                a.value = !0,
                e.parent && tr(e.parent.vnode) && (e.parent.effect.dirty = !0,
                no(e.parent.update))
            }
            )).catch((e => {
                t(e),
                u.value = e
            }
            )),
            () => a.value && l ? er(l, e) : u.value && o ? Ri(o, {
                error: u.value
            }) : n && !f.value ? Ri(n) : void 0
        }
    })
}
function er(e, t) {
    const {ref: n, props: o, children: r, ce: i} = t.vnode
      , s = Ri(e, o, r);
    return s.ref = n,
    s.ce = i,
    delete t.vnode.ce,
    s
}
const tr = e => e.type.__isKeepAlive;
class nr {
    constructor(e) {
        this.max = e,
        this._cache = new Map,
        this._keys = new Set,
        this._max = parseInt(e, 10)
    }
    get(e) {
        const {_cache: t, _keys: n, _max: o} = this
          , r = t.get(e);
        if (r)
            n.delete(e),
            n.add(e);
        else if (n.add(e),
        o && n.size > o) {
            const e = n.values().next().value;
            this.pruneCacheEntry(t.get(e)),
            this.delete(e)
        }
        return r
    }
    set(e, t) {
        this._cache.set(e, t)
    }
    delete(e) {
        this._cache.delete(e),
        this._keys.delete(e)
    }
    forEach(e, t) {
        this._cache.forEach(e.bind(t))
    }
}
const or = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number],
        matchBy: {
            type: String,
            default: "name"
        },
        cache: Object
    },
    setup(e, {slots: t}) {
        const n = Yi()
          , o = n.ctx;
        if (!o.renderer)
            return () => {
                const e = t.default && t.default();
                return e && 1 === e.length ? e[0] : e
            }
            ;
        const r = e.cache || new nr(e.max);
        r.pruneCacheEntry = s;
        let i = null;
        function s(t) {
            var o;
            !i || !Ai(t, i) || "key" === e.matchBy && t.key !== i.key ? (ur(o = t),
            u(o, n, a, !0)) : i && ur(i)
        }
        const a = n.suspense
          , {renderer: {p: l, m: c, um: u, o: {createElement: d}}} = o
          , f = d("div");
        function p(t) {
            r.forEach(( (n, o) => {
                const i = fr(n, e.matchBy);
                !i || t && t(i) || (r.delete(o),
                s(n))
            }
            ))
        }
        o.activate = (e, t, n, o, r) => {
            const i = e.component;
            if (i.ba) {
                const e = i.isDeactivated;
                i.isDeactivated = !1,
                M(i.ba),
                i.isDeactivated = e
            }
            c(e, t, n, 0, a),
            l(i.vnode, e, t, n, i, a, o, e.slotScopeIds, r),
            pi(( () => {
                i.isDeactivated = !1,
                i.a && M(i.a);
                const t = e.props && e.props.onVnodeMounted;
                t && qi(t, i.parent, e)
            }
            ), a)
        }
        ,
        o.deactivate = e => {
            const t = e.component;
            t.bda && pr(t.bda),
            c(e, f, null, 1, a),
            pi(( () => {
                t.bda && t.bda.forEach((e => e.__called = !1)),
                t.da && M(t.da);
                const n = e.props && e.props.onVnodeUnmounted;
                n && qi(n, t.parent, e),
                t.isDeactivated = !0
            }
            ), a)
        }
        ,
        Bo(( () => [e.include, e.exclude, e.matchBy]), ( ([e,t]) => {
            e && p((t => ir(e, t))),
            t && p((e => !ir(t, e)))
        }
        ), {
            flush: "post",
            deep: !0
        });
        let h = null;
        const m = () => {
            null != h && r.set(h, dr(n.subTree))
        }
        ;
        return vr(m),
        br(m),
        _r(( () => {
            r.forEach(( (t, o) => {
                r.delete(o),
                s(t);
                const {subTree: i, suspense: a} = n
                  , l = dr(i);
                if (t.type !== l.type || "key" === e.matchBy && t.key !== l.key)
                    ;
                else {
                    l.component.bda && M(l.component.bda),
                    ur(l);
                    const e = l.component.da;
                    e && pi(e, a)
                }
            }
            ))
        }
        )),
        () => {
            if (h = null,
            !t.default)
                return null;
            const n = t.default()
              , o = n[0];
            if (n.length > 1)
                return i = null,
                n;
            if (!Pi(o) || !(4 & o.shapeFlag) && !Lo(o.type))
                return i = null,
                o;
            let s = dr(o);
            const a = s.type
              , l = fr(s, e.matchBy)
              , {include: c, exclude: u} = e;
            if (c && (!l || !ir(c, l)) || u && l && ir(u, l))
                return i = s,
                o;
            const d = null == s.key ? a : s.key
              , f = r.get(d);
            return s.el && (s = ji(s),
            Lo(o.type) && (o.ssContent = s)),
            h = d,
            f && (s.el = f.el,
            s.component = f.component,
            s.transition && Yo(s, s.transition),
            s.shapeFlag |= 512),
            s.shapeFlag |= 256,
            i = s,
            Lo(o.type) ? o : s
        }
    }
}
  , rr = or;
function ir(e, t) {
    return p(e) ? e.some((e => ir(e, t))) : v(e) ? e.split(",").includes(t) : "[object RegExp]" === x(e) && e.test(t)
}
function sr(e, t) {
    lr(e, "a", t)
}
function ar(e, t) {
    lr(e, "da", t)
}
function lr(e, t, n=Gi) {
    const o = e.__wdc || (e.__wdc = () => {
        let t = n;
        for (; t; ) {
            if (t.isDeactivated)
                return;
            t = t.parent
        }
        return e()
    }
    );
    if (o.__called = !1,
    hr(t, o, n),
    n) {
        let e = n.parent;
        for (; e && e.parent; )
            tr(e.parent.vnode) && cr(o, t, n, e),
            e = e.parent
    }
}
function cr(e, t, n, o) {
    const r = hr(t, e, o, !0);
    wr(( () => {
        u(o[t], r)
    }
    ), n)
}
function ur(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function dr(e) {
    return Lo(e.type) ? e.ssContent : e
}
function fr(e, t) {
    if ("name" === t) {
        const t = e.type;
        return ss(Zo(e) ? t.__asyncResolved || {} : t)
    }
    return String(e.key)
}
function pr(e) {
    for (let t = 0; t < e.length; t++) {
        const n = e[t];
        n.__called || (n(),
        n.__called = !0)
    }
}
function hr(e, t, n=Gi, o=!1) {
    if (n) {
        if (r = e,
        rt.indexOf(r) > -1 && n.$pageInstance) {
            if (n.type.__reserved)
                return;
            if (n !== n.$pageInstance && (n = n.$pageInstance,
            function(e) {
                return [me, ce].indexOf(e) > -1
            }(e))) {
                const o = n.proxy;
                Un(t.bind(o), n, e, me === e ? [o.$page.options] : [])
            }
        }
        const i = n[e] || (n[e] = [])
          , s = t.__weh || (t.__weh = (...o) => {
            if (n.isUnmounted)
                return;
            St();
            const r = Zi(n)
              , i = Un(t, n, e, o);
            return r(),
            Tt(),
            i
        }
        );
        return o ? i.unshift(s) : i.push(s),
        s
    }
    var r
}
const mr = e => (t, n=Gi) => (!ns || "sp" === e) && hr(e, ( (...e) => t(...e)), n)
  , gr = mr("bm")
  , vr = mr("m")
  , yr = mr("bu")
  , br = mr("u")
  , _r = mr("bum")
  , wr = mr("um")
  , xr = mr("sp")
  , Cr = mr("rtg")
  , Sr = mr("rtc");
function Tr(e, t=Gi) {
    hr("ec", e, t)
}
function Er(e, t, n, o) {
    let r;
    const i = n;
    if (p(e) || v(e)) {
        r = new Array(e.length);
        for (let n = 0, o = e.length; n < o; n++)
            r[n] = t(e[n], n, void 0, i)
    } else if ("number" == typeof e) {
        r = new Array(e);
        for (let n = 0; n < e; n++)
            r[n] = t(n + 1, n, void 0, i)
    } else if (b(e))
        if (e[Symbol.iterator])
            r = Array.from(e, ( (e, n) => t(e, n, void 0, i)));
        else {
            const n = Object.keys(e);
            r = new Array(n.length);
            for (let o = 0, s = n.length; o < s; o++) {
                const s = n[o];
                r[o] = t(e[s], s, o, i)
            }
        }
    else
        r = [];
    return r
}
function kr(e, t, n={}, o, r) {
    if (ho.isCE || ho.parent && Zo(ho.parent) && ho.parent.isCE)
        return "default" !== t && (n.name = t),
        Ri("slot", n, o);
    let i = e[t];
    i && i._c && (i._d = !1),
    Ti();
    const s = i && Lr(i(n))
      , a = $i(bi, {
        key: n.key || s && s.key || `_${t}`
    }, s || [], s && 1 === e._ ? 64 : -2);
    return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    a
}
function Lr(e) {
    return e.some((e => !Pi(e) || e.type !== wi && !(e.type === bi && !Lr(e.children)))) ? e : null
}
const Or = e => {
    if (!e)
        return null;
    if (es(e)) {
        return is(e) || e.proxy
    }
    return Or(e.parent)
}
  , $r = c(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Or(e.parent),
    $root: e => Or(e.root),
    $emit: e => e.emit,
    $options: e => jr(e),
    $forceUpdate: e => e.f || (e.f = (e => function() {
        e.effect.dirty = !0,
        no(e.update)
    }
    )(e)),
    $nextTick: e => e.n || (e.n = to.bind(e.proxy)),
    $watch: e => Mo.bind(e)
})
  , Pr = (e, t) => e !== o && !e.__isScriptSetup && f(e, t)
  , Ar = {
    get({_: e}, t) {
        const {ctx: n, setupState: r, data: i, props: s, accessCache: a, type: l, appContext: c} = e;
        let u;
        if ("$" !== t[0]) {
            const l = a[t];
            if (void 0 !== l)
                switch (l) {
                case 1:
                    return r[t];
                case 2:
                    return i[t];
                case 4:
                    return n[t];
                case 3:
                    return s[t]
                }
            else {
                if (Pr(r, t))
                    return a[t] = 1,
                    r[t];
                if (i !== o && f(i, t))
                    return a[t] = 2,
                    i[t];
                if ((u = e.propsOptions[0]) && f(u, t))
                    return a[t] = 3,
                    s[t];
                if (n !== o && f(n, t))
                    return a[t] = 4,
                    n[t];
                Ir && (a[t] = 0)
            }
        }
        const d = $r[t];
        let p, h;
        return d ? ("$attrs" === t && Mt(e, 0, t),
        d(e)) : (p = l.__cssModules) && (p = p[t]) ? p : n !== o && f(n, t) ? (a[t] = 4,
        n[t]) : (h = c.config.globalProperties,
        f(h, t) ? h[t] : void 0)
    },
    set({_: e}, t, n) {
        const {data: r, setupState: i, ctx: s} = e;
        return Pr(i, t) ? (i[t] = n,
        !0) : r !== o && f(r, t) ? (r[t] = n,
        !0) : !f(e.props, t) && (("$" !== t[0] || !(t.slice(1)in e)) && (s[t] = n,
        !0))
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: s}}, a) {
        let l;
        return !!n[a] || e !== o && f(e, a) || Pr(t, a) || (l = s[0]) && f(l, a) || f(r, a) || f($r, a) || f(i.config.globalProperties, a)
    },
    defineProperty(e, t, n) {
        return null != n.get ? e._.accessCache[t] = 0 : f(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Br(e) {
    return p(e) ? e.reduce(( (e, t) => (e[t] = null,
    e)), {}) : e
}
let Ir = !0;
function Mr(e) {
    const t = jr(e)
      , n = e.proxy
      , o = e.ctx;
    Ir = !1,
    t.beforeCreate && Nr(t.beforeCreate, e, "bc");
    const {data: r, computed: s, methods: a, watch: l, provide: c, inject: u, created: d, beforeMount: f, mounted: h, beforeUpdate: m, updated: v, activated: y, deactivated: _, beforeDestroy: w, beforeUnmount: x, destroyed: C, unmounted: S, render: T, renderTracked: E, renderTriggered: k, errorCaptured: L, serverPrefetch: O, expose: $, inheritAttrs: P, components: A, directives: B, filters: I} = t;
    if (u && function(e, t) {
        p(e) && (e = Wr(e));
        for (const n in e) {
            const o = e[n];
            let r;
            r = b(o) ? "default"in o ? Jr(o.from || n, o.default, !0) : Jr(o.from || n) : Jr(o),
            Mn(r) ? Object.defineProperty(t, n, {
                enumerable: !0,
                configurable: !0,
                get: () => r.value,
                set: e => r.value = e
            }) : t[n] = r
        }
    }(u, o, null),
    a)
        for (const i in a) {
            const e = a[i];
            g(e) && (o[i] = e.bind(n))
        }
    if (r) {
        const t = r.call(n, n);
        b(t) && (e.data = _n(t))
    }
    if (Ir = !0,
    s)
        for (const p in s) {
            const e = s[p]
              , t = g(e) ? e.bind(n, n) : g(e.get) ? e.get.bind(n, n) : i
              , r = !g(e) && g(e.set) ? e.set.bind(n) : i
              , a = as({
                get: t,
                set: r
            });
            Object.defineProperty(o, p, {
                enumerable: !0,
                configurable: !0,
                get: () => a.value,
                set: e => a.value = e
            })
        }
    if (l)
        for (const i in l)
            Rr(l[i], o, n, i);
    if (c) {
        const e = g(c) ? c.call(n) : c;
        Reflect.ownKeys(e).forEach((t => {
            Xr(t, e[t])
        }
        ))
    }
    function M(e, t) {
        p(t) ? t.forEach((t => e(t.bind(n)))) : t && e(t.bind(n))
    }
    if (d && Nr(d, e, "c"),
    M(gr, f),
    M(vr, h),
    M(yr, m),
    M(br, v),
    M(sr, y),
    M(ar, _),
    M(Tr, L),
    M(Sr, E),
    M(Cr, k),
    M(_r, x),
    M(wr, S),
    M(xr, O),
    p($))
        if ($.length) {
            const t = e.exposed || (e.exposed = {});
            $.forEach((e => {
                Object.defineProperty(t, e, {
                    get: () => n[e],
                    set: t => n[e] = t
                })
            }
            ))
        } else
            e.exposed || (e.exposed = {});
    T && e.render === i && (e.render = T),
    null != P && (e.inheritAttrs = P),
    A && (e.components = A),
    B && (e.directives = B);
    const N = e.appContext.config.globalProperties.$applyOptions;
    N && N(t, e, n)
}
function Nr(e, t, n) {
    Un(p(e) ? e.map((e => e.bind(t.proxy))) : e.bind(t.proxy), t, n)
}
function Rr(e, t, n, o) {
    const r = o.includes(".") ? No(n, o) : () => n[o];
    if (v(e)) {
        const n = t[e];
        g(n) && Bo(r, n)
    } else if (g(e))
        Bo(r, e.bind(n));
    else if (b(e))
        if (p(e))
            e.forEach((e => Rr(e, t, n, o)));
        else {
            const o = g(e.handler) ? e.handler.bind(n) : t[e.handler];
            g(o) && Bo(r, o, e)
        }
}
function jr(e) {
    const t = e.type
      , {mixins: n, extends: o} = t
      , {mixins: r, optionsCache: i, config: {optionMergeStrategies: s}} = e.appContext
      , a = i.get(t);
    let l;
    return a ? l = a : r.length || n || o ? (l = {},
    r.length && r.forEach((e => Fr(l, e, s, !0))),
    Fr(l, t, s)) : l = t,
    b(t) && i.set(t, l),
    l
}
function Fr(e, t, n, o=!1) {
    const {mixins: r, extends: i} = t;
    i && Fr(e, i, n, !0),
    r && r.forEach((t => Fr(e, t, n, !0)));
    for (const s in t)
        if (o && "expose" === s)
            ;
        else {
            const o = Dr[s] || n && n[s];
            e[s] = o ? o(e[s], t[s]) : t[s]
        }
    return e
}
const Dr = {
    data: Vr,
    props: qr,
    emits: qr,
    methods: Ur,
    computed: Ur,
    beforeCreate: Hr,
    created: Hr,
    beforeMount: Hr,
    mounted: Hr,
    beforeUpdate: Hr,
    updated: Hr,
    beforeDestroy: Hr,
    beforeUnmount: Hr,
    destroyed: Hr,
    unmounted: Hr,
    activated: Hr,
    deactivated: Hr,
    errorCaptured: Hr,
    serverPrefetch: Hr,
    components: Ur,
    directives: Ur,
    watch: function(e, t) {
        if (!e)
            return t;
        if (!t)
            return e;
        const n = c(Object.create(null), e);
        for (const o in t)
            n[o] = Hr(e[o], t[o]);
        return n
    },
    provide: Vr,
    inject: function(e, t) {
        return Ur(Wr(e), Wr(t))
    }
};
function Vr(e, t) {
    return t ? e ? function() {
        return c(g(e) ? e.call(this, this) : e, g(t) ? t.call(this, this) : t)
    }
    : t : e
}
function Wr(e) {
    if (p(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function Hr(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Ur(e, t) {
    return e ? c(Object.create(null), e, t) : t
}
function qr(e, t) {
    return e ? p(e) && p(t) ? [...new Set([...e, ...t])] : c(Object.create(null), Br(e), Br(null != t ? t : {})) : t
}
function zr() {
    return {
        app: null,
        config: {
            isNativeTag: s,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Kr = 0;
function Gr(e, t) {
    return function(n, o=null) {
        g(n) || (n = c({}, n)),
        null == o || b(o) || (o = null);
        const r = zr()
          , i = new WeakSet;
        let s = !1;
        const a = r.app = {
            _uid: Kr++,
            _component: n,
            _props: o,
            _container: null,
            _context: r,
            _instance: null,
            version: cs,
            get config() {
                return r.config
            },
            set config(e) {},
            use: (e, ...t) => (i.has(e) || (e && g(e.install) ? (i.add(e),
            e.install(a, ...t)) : g(e) && (i.add(e),
            e(a, ...t))),
            a),
            mixin: e => (r.mixins.includes(e) || r.mixins.push(e),
            a),
            component: (e, t) => t ? (r.components[e] = t,
            a) : r.components[e],
            directive: (e, t) => t ? (r.directives[e] = t,
            a) : r.directives[e],
            mount(i, l, c) {
                if (!s) {
                    const u = Ri(n, o);
                    return u.appContext = r,
                    !0 === c ? c = "svg" : !1 === c && (c = void 0),
                    l && t ? t(u, i) : e(u, i, c),
                    s = !0,
                    a._container = i,
                    i.__vue_app__ = a,
                    a._instance = u.component,
                    is(u.component) || u.component.proxy
                }
            },
            unmount() {
                s && (e(null, a._container),
                delete a._container.__vue_app__)
            },
            provide: (e, t) => (r.provides[e] = t,
            a),
            runWithContext(e) {
                const t = Yr;
                Yr = a;
                try {
                    return e()
                } finally {
                    Yr = t
                }
            }
        };
        return a
    }
}
let Yr = null;
function Xr(e, t) {
    if (Gi) {
        let n = Gi.provides;
        const o = Gi.parent && Gi.parent.provides;
        o === n && (n = Gi.provides = Object.create(o)),
        n[e] = t,
        "app" === Gi.type.mpType && Gi.appContext.app.provide(e, t)
    } else
        ;
}
function Jr(e, t, n=!1) {
    const o = Gi || ho;
    if (o || Yr) {
        const r = o ? null == o.parent ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Yr._context.provides;
        if (r && e in r)
            return r[e];
        if (arguments.length > 1)
            return n && g(t) ? t.call(o && o.proxy) : t
    }
}
function Zr(e, t, n, r) {
    const [i,s] = e.propsOptions;
    let a, l = !1;
    if (t)
        for (let o in t) {
            if (E(o))
                continue;
            const c = t[o];
            let u;
            i && f(i, u = O(o)) ? s && s.includes(u) ? (a || (a = {}))[u] = c : n[u] = c : po(e.emitsOptions, o) || o in r && c === r[o] || (r[o] = c,
            l = !0)
        }
    if (s) {
        const t = Ln(n)
          , r = a || o;
        for (let o = 0; o < s.length; o++) {
            const a = s[o];
            n[a] = Qr(i, t, a, r[a], e, !f(r, a))
        }
    }
    return l
}
function Qr(e, t, n, o, r, i) {
    const s = e[n];
    if (null != s) {
        const e = f(s, "default");
        if (e && void 0 === o) {
            const e = s.default;
            if (s.type !== Function && !s.skipFactory && g(e)) {
                const {propsDefaults: i} = r;
                if (n in i)
                    o = i[n];
                else {
                    const s = Zi(r);
                    o = i[n] = e.call(null, t),
                    s()
                }
            } else
                o = e
        }
        s[0] && (i && !e ? o = !1 : !s[1] || "" !== o && o !== P(n) || (o = !0))
    }
    return o
}
function ei(e, t, n=!1) {
    const i = t.propsCache
      , s = i.get(e);
    if (s)
        return s;
    const a = e.props
      , l = {}
      , u = [];
    let d = !1;
    if (!g(e)) {
        const o = e => {
            d = !0;
            const [n,o] = ei(e, t, !0);
            c(l, n),
            o && u.push(...o)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(o),
        e.extends && o(e.extends),
        e.mixins && e.mixins.forEach(o)
    }
    if (!a && !d)
        return b(e) && i.set(e, r),
        r;
    if (p(a))
        for (let r = 0; r < a.length; r++) {
            const e = O(a[r]);
            ti(e) && (l[e] = o)
        }
    else if (a)
        for (const o in a) {
            const e = O(o);
            if (ti(e)) {
                const t = a[o]
                  , n = l[e] = p(t) || g(t) ? {
                    type: t
                } : c({}, t);
                if (n) {
                    const t = ri(Boolean, n.type)
                      , o = ri(String, n.type);
                    n[0] = t > -1,
                    n[1] = o < 0 || t < o,
                    (t > -1 || f(n, "default")) && u.push(e)
                }
            }
        }
    const h = [l, u];
    return b(e) && i.set(e, h),
    h
}
function ti(e) {
    return "$" !== e[0] && !E(e)
}
function ni(e) {
    if (null === e)
        return "null";
    if ("function" == typeof e)
        return e.name || "";
    if ("object" == typeof e) {
        return e.constructor && e.constructor.name || ""
    }
    return ""
}
function oi(e, t) {
    return ni(e) === ni(t)
}
function ri(e, t) {
    return p(t) ? t.findIndex((t => oi(t, e))) : g(t) && oi(t, e) ? 0 : -1
}
const ii = e => "_" === e[0] || "$stable" === e
  , si = e => p(e) ? e.map(Vi) : [Vi(e)]
  , ai = (e, t, n) => {
    if (t._n)
        return t;
    const o = vo(( (...e) => si(t(...e))), n);
    return o._c = !1,
    o
}
  , li = (e, t, n) => {
    const o = e._ctx;
    for (const r in e) {
        if (ii(r))
            continue;
        const n = e[r];
        if (g(n))
            t[r] = ai(0, n, o);
        else if (null != n) {
            const e = si(n);
            t[r] = () => e
        }
    }
}
  , ci = (e, t) => {
    const n = si(t);
    e.slots.default = () => n
}
  , ui = (e, t) => {
    if (32 & e.vnode.shapeFlag) {
        const n = t._;
        n ? (e.slots = Ln(t),
        N(t, "_", n)) : li(t, e.slots = {})
    } else
        e.slots = {},
        t && ci(e, t);
    N(e.slots, Bi, 1)
}
  , di = (e, t, n) => {
    const {vnode: r, slots: i} = e;
    let s = !0
      , a = o;
    if (32 & r.shapeFlag) {
        const e = t._;
        e ? n && 1 === e ? s = !1 : (c(i, t),
        n || 1 !== e || delete i._) : (s = !t.$stable,
        li(t, i)),
        a = t
    } else
        t && (ci(e, t),
        a = {
            default: 1
        });
    if (s)
        for (const o in i)
            ii(o) || null != a[o] || delete i[o]
}
;
function fi(e, t, n, r, i=!1) {
    if (p(e))
        return void e.forEach(( (e, o) => fi(e, t && (p(t) ? t[o] : t), n, r, i)));
    if (Zo(r) && !i)
        return;
    const s = 4 & r.shapeFlag ? is(r.component) || r.component.proxy : r.el
      , a = i ? null : s
      , {i: l, r: c} = e
      , d = t && t.r
      , h = l.refs === o ? l.refs = {} : l.refs
      , m = l.setupState;
    if (null != d && d !== c && (v(d) ? (h[d] = null,
    f(m, d) && (m[d] = null)) : Mn(d) && (d.value = null)),
    g(c))
        Hn(c, l, 12, [a, h]);
    else {
        const t = v(c)
          , o = Mn(c);
        if (t || o) {
            const r = () => {
                if (e.f) {
                    const n = t ? f(m, c) ? m[c] : h[c] : c.value;
                    i ? p(n) && u(n, s) : p(n) ? n.includes(s) || n.push(s) : t ? (h[c] = [s],
                    f(m, c) && (m[c] = h[c])) : (c.value = [s],
                    e.k && (h[e.k] = c.value))
                } else
                    t ? (h[c] = a,
                    f(m, c) && (m[c] = a)) : o && (c.value = a,
                    e.k && (h[e.k] = a))
            }
            ;
            a ? (r.id = -1,
            pi(r, n)) : r()
        }
    }
}
const pi = function(e, t) {
    var n;
    t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : (p(n = e) ? Xn.push(...n) : Jn && Jn.includes(n, n.allowRecurse ? Zn + 1 : Zn) || Xn.push(n),
    oo())
};
function hi(e) {
    return function(e) {
        D().__VUE__ = !0;
        const {insert: t, remove: n, patchProp: s, forcePatchProp: a, createElement: l, createText: c, createComment: u, setText: d, setElementText: p, parentNode: h, nextSibling: m, setScopeId: g=i, insertStaticContent: v} = e
          , y = (e, t, n, o=null, r=null, i=null, s=void 0, a=null, l=!!t.dynamicChildren) => {
            if (e === t)
                return;
            e && !Ai(e, t) && (o = Q(e),
            G(e, r, i, !0),
            e = null),
            -2 === t.patchFlag && (l = !1,
            t.dynamicChildren = null);
            const {type: c, ref: u, shapeFlag: d} = t;
            switch (c) {
            case _i:
                b(e, t, n, o);
                break;
            case wi:
                w(e, t, n, o);
                break;
            case xi:
                null == e && x(t, n, o, s);
                break;
            case bi:
                R(e, t, n, o, r, i, s, a, l);
                break;
            default:
                1 & d ? T(e, t, n, o, r, i, s, a, l) : 6 & d ? j(e, t, n, o, r, i, s, a, l) : (64 & d || 128 & d) && c.process(e, t, n, o, r, i, s, a, l, ne)
            }
            null != u && r && fi(u, e && e.ref, i, t || e, !t)
        }
          , b = (e, n, o, r) => {
            if (null == e)
                t(n.el = c(n.children), o, r);
            else {
                const t = n.el = e.el;
                n.children !== e.children && d(t, n.children)
            }
        }
          , w = (e, n, o, r) => {
            null == e ? t(n.el = u(n.children || ""), o, r) : n.el = e.el
        }
          , x = (e, t, n, o) => {
            [e.el,e.anchor] = v(e.children, t, n, o, e.el, e.anchor)
        }
          , C = ({el: e, anchor: n}, o, r) => {
            let i;
            for (; e && e !== n; )
                i = m(e),
                t(e, o, r),
                e = i;
            t(n, o, r)
        }
          , S = ({el: e, anchor: t}) => {
            let o;
            for (; e && e !== t; )
                o = m(e),
                n(e),
                e = o;
            n(t)
        }
          , T = (e, t, n, o, r, i, s, a, l) => {
            "svg" === t.type ? s = "svg" : "math" === t.type && (s = "mathml"),
            null == e ? k(t, n, o, r, i, s, a, l) : A(e, t, r, i, s, a, l)
        }
          , k = (e, n, o, r, i, a, c, u) => {
            let d, f;
            const {props: h, shapeFlag: m, transition: g, dirs: v} = e;
            if (d = e.el = l(e.type, a, h && h.is, h),
            8 & m ? p(d, e.children) : 16 & m && $(e.children, d, null, r, i, mi(e, a), c, u),
            v && Fo(e, null, r, "created"),
            L(d, e, e.scopeId, c, r),
            h) {
                for (const t in h)
                    "value" === t || E(t) || s(d, t, null, h[t], a, e.children, r, i, Z);
                "value"in h && s(d, "value", null, h.value, a),
                (f = h.onVnodeBeforeMount) && qi(f, r, e)
            }
            Object.defineProperty(d, "__vueParentComponent", {
                value: r,
                enumerable: !1
            }),
            v && Fo(e, null, r, "beforeMount");
            const y = function(e, t) {
                return (!e || e && !e.pendingBranch) && t && !t.persisted
            }(i, g);
            y && g.beforeEnter(d),
            t(d, n, o),
            ((f = h && h.onVnodeMounted) || y || v) && pi(( () => {
                f && qi(f, r, e),
                y && g.enter(d),
                v && Fo(e, null, r, "mounted")
            }
            ), i)
        }
          , L = (e, t, n, o, r) => {
            if (n && g(e, n),
            o)
                for (let i = 0; i < o.length; i++)
                    g(e, o[i]);
            if (r) {
                if (t === r.subTree) {
                    const t = r.vnode;
                    L(e, t, t.scopeId, t.slotScopeIds, r.parent)
                }
            }
        }
          , $ = (e, t, n, o, r, i, s, a, l=0) => {
            for (let c = l; c < e.length; c++) {
                const l = e[c] = a ? Wi(e[c]) : Vi(e[c]);
                y(null, l, t, n, o, r, i, s, a)
            }
        }
          , A = (e, t, n, r, i, l, c) => {
            const u = t.el = e.el;
            let {patchFlag: d, dynamicChildren: f, dirs: h} = t;
            d |= 16 & e.patchFlag;
            const m = e.props || o
              , g = t.props || o;
            let v;
            if (n && gi(n, !1),
            (v = g.onVnodeBeforeUpdate) && qi(v, n, t, e),
            h && Fo(t, e, n, "beforeUpdate"),
            n && gi(n, !0),
            f ? B(e.dynamicChildren, f, u, n, r, mi(t, i), l) : c || U(e, t, u, null, n, r, mi(t, i), l, !1),
            d > 0) {
                if (16 & d)
                    I(u, t, m, g, n, r, i);
                else if (2 & d && m.class !== g.class && s(u, "class", null, g.class, i),
                4 & d && s(u, "style", m.style, g.style, i),
                8 & d) {
                    const o = t.dynamicProps;
                    for (let t = 0; t < o.length; t++) {
                        const l = o[t]
                          , c = m[l]
                          , d = g[l];
                        (d !== c || "value" === l || a && a(u, l)) && s(u, l, c, d, i, e.children, n, r, Z)
                    }
                }
                1 & d && e.children !== t.children && p(u, t.children)
            } else
                c || null != f || I(u, t, m, g, n, r, i);
            ((v = g.onVnodeUpdated) || h) && pi(( () => {
                v && qi(v, n, t, e),
                h && Fo(t, e, n, "updated")
            }
            ), r)
        }
          , B = (e, t, n, o, r, i, s) => {
            for (let a = 0; a < t.length; a++) {
                const l = e[a]
                  , c = t[a]
                  , u = l.el && (l.type === bi || !Ai(l, c) || 70 & l.shapeFlag) ? h(l.el) : n;
                y(l, c, u, null, o, r, i, s, !0)
            }
        }
          , I = (e, t, n, r, i, l, c) => {
            if (n !== r) {
                if (n !== o)
                    for (const o in n)
                        E(o) || o in r || s(e, o, n[o], null, c, t.children, i, l, Z);
                for (const o in r) {
                    if (E(o))
                        continue;
                    const u = r[o]
                      , d = n[o];
                    (u !== d && "value" !== o || a && a(e, o)) && s(e, o, d, u, c, t.children, i, l, Z)
                }
                "value"in r && s(e, "value", n.value, r.value, c)
            }
        }
          , R = (e, n, o, r, i, s, a, l, u) => {
            const d = n.el = e ? e.el : c("")
              , f = n.anchor = e ? e.anchor : c("");
            let {patchFlag: p, dynamicChildren: h, slotScopeIds: m} = n;
            m && (l = l ? l.concat(m) : m),
            null == e ? (t(d, o, r),
            t(f, o, r),
            $(n.children || [], o, f, i, s, a, l, u)) : p > 0 && 64 & p && h && e.dynamicChildren ? (B(e.dynamicChildren, h, o, i, s, a, l),
            (null != n.key || i && n === i.subTree) && vi(e, n, !0)) : U(e, n, o, f, i, s, a, l, u)
        }
          , j = (e, t, n, o, r, i, s, a, l) => {
            t.slotScopeIds = a,
            null == e ? 512 & t.shapeFlag ? r.ctx.activate(t, n, o, s, l) : F(t, n, o, r, i, s, l) : V(e, t, l)
        }
          , F = (e, t, n, r, i, s, a) => {
            const l = e.component = function(e, t, n) {
                const r = e.type
                  , i = (t ? t.appContext : e.appContext) || zi
                  , s = {
                    uid: Ki++,
                    vnode: e,
                    type: r,
                    parent: t,
                    appContext: i,
                    root: null,
                    next: null,
                    subTree: null,
                    effect: null,
                    update: null,
                    scope: new mt(!0),
                    render: null,
                    proxy: null,
                    exposed: null,
                    exposeProxy: null,
                    withProxy: null,
                    provides: t ? t.provides : Object.create(i.provides),
                    accessCache: null,
                    renderCache: [],
                    components: null,
                    directives: null,
                    propsOptions: ei(r, i),
                    emitsOptions: fo(r, i),
                    emit: null,
                    emitted: null,
                    propsDefaults: o,
                    inheritAttrs: r.inheritAttrs,
                    ctx: o,
                    data: o,
                    props: o,
                    attrs: o,
                    slots: o,
                    refs: o,
                    setupState: o,
                    setupContext: null,
                    attrsProxy: null,
                    slotsProxy: null,
                    suspense: n,
                    suspenseId: n ? n.pendingId : 0,
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
                    bda: null,
                    da: null,
                    ba: null,
                    a: null,
                    rtg: null,
                    rtc: null,
                    ec: null,
                    sp: null
                };
                s.ctx = {
                    _: s
                },
                s.root = t ? t.root : s,
                s.emit = co.bind(null, s),
                s.$pageInstance = t && t.$pageInstance,
                e.ce && e.ce(s);
                return s
            }(e, r, i);
            if (tr(e) && (l.ctx.renderer = ne),
            function(e, t=!1) {
                t && Ji(t);
                const {props: n, children: o} = e.vnode
                  , r = es(e);
                (function(e, t, n, o=!1) {
                    const r = {}
                      , i = {};
                    N(i, Bi, 1),
                    e.propsDefaults = Object.create(null),
                    Zr(e, t, r, i);
                    for (const s in e.propsOptions[0])
                        s in r || (r[s] = void 0);
                    n ? e.props = o ? r : wn(r) : e.type.props ? e.props = r : e.props = i,
                    e.attrs = i
                }
                )(e, n, r, t),
                ui(e, o);
                const i = r ? function(e, t) {
                    const n = e.type;
                    e.accessCache = Object.create(null),
                    e.proxy = On(new Proxy(e.ctx,Ar));
                    const {setup: o} = n;
                    if (o) {
                        const n = e.setupContext = o.length > 1 ? function(e) {
                            const t = t => {
                                e.exposed = t || {}
                            }
                            ;
                            return {
                                get attrs() {
                                    return function(e) {
                                        return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs,{
                                            get: (t, n) => (Mt(e, 0, "$attrs"),
                                            t[n])
                                        }))
                                    }(e)
                                },
                                slots: e.slots,
                                emit: e.emit,
                                expose: t
                            }
                        }(e) : null
                          , r = Zi(e);
                        St();
                        const i = Hn(o, e, 0, [e.props, n]);
                        if (Tt(),
                        r(),
                        _(i)) {
                            if (i.then(Qi, Qi),
                            t)
                                return i.then((n => {
                                    os(e, n, t)
                                }
                                )).catch((t => {
                                    qn(t, e, 0)
                                }
                                ));
                            e.asyncDep = i
                        } else
                            os(e, i, t)
                    } else
                        rs(e, t)
                }(e, t) : void 0;
                t && Ji(!1)
            }(l),
            l.asyncDep) {
                if (i && i.registerDep(l, W),
                !e.el) {
                    const e = l.subTree = Ri(wi);
                    w(null, e, t, n)
                }
            } else
                W(l, e, t, n, i, s, a)
        }
          , V = (e, t, n) => {
            const o = t.component = e.component;
            if (function(e, t, n) {
                const {props: o, children: r, component: i} = e
                  , {props: s, children: a, patchFlag: l} = t
                  , c = i.emitsOptions;
                if (t.dirs || t.transition)
                    return !0;
                if (!(n && l >= 0))
                    return !(!r && !a || a && a.$stable) || o !== s && (o ? !s || wo(o, s, c) : !!s);
                if (1024 & l)
                    return !0;
                if (16 & l)
                    return o ? wo(o, s, c) : !!s;
                if (8 & l) {
                    const e = t.dynamicProps;
                    for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        if (s[n] !== o[n] && !po(c, n))
                            return !0
                    }
                }
                return !1
            }(e, t, n)) {
                if (o.asyncDep && !o.asyncResolved)
                    return void H(o, t, n);
                o.next = t,
                function(e) {
                    const t = Gn.indexOf(e);
                    t > Yn && Gn.splice(t, 1)
                }(o.update),
                o.effect.dirty = !0,
                o.update()
            } else
                t.el = e.el,
                o.vnode = t
        }
          , W = (e, t, n, o, r, s, a) => {
            const l = () => {
                if (e.isMounted) {
                    let {next: t, bu: n, u: o, parent: i, vnode: c} = e;
                    {
                        const n = yi(e);
                        if (n)
                            return t && (t.el = c.el,
                            H(e, t, a)),
                            void n.asyncDep.then(( () => {
                                e.isUnmounted || l()
                            }
                            ))
                    }
                    let u, d = t;
                    gi(e, !1),
                    t ? (t.el = c.el,
                    H(e, t, a)) : t = c,
                    n && M(n),
                    (u = t.props && t.props.onVnodeBeforeUpdate) && qi(u, i, t, c),
                    gi(e, !0);
                    const f = yo(e)
                      , p = e.subTree;
                    e.subTree = f,
                    y(p, f, h(p.el), Q(p), e, r, s),
                    t.el = f.el,
                    null === d && function({vnode: e, parent: t}, n) {
                        for (; t; ) {
                            const o = t.subTree;
                            if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el),
                            o !== e)
                                break;
                            (e = t.vnode).el = n,
                            t = t.parent
                        }
                    }(e, f.el),
                    o && pi(o, r),
                    (u = t.props && t.props.onVnodeUpdated) && pi(( () => qi(u, i, t, c)), r)
                } else {
                    let i;
                    const {el: a, props: l} = t
                      , {bm: c, m: u, parent: d} = e
                      , f = Zo(t);
                    if (gi(e, !1),
                    c && M(c),
                    !f && (i = l && l.onVnodeBeforeMount) && qi(i, d, t),
                    gi(e, !0),
                    a && re) {
                        const n = () => {
                            e.subTree = yo(e),
                            re(a, e.subTree, e, r, null)
                        }
                        ;
                        f ? t.type.__asyncLoader().then(( () => !e.isUnmounted && n())) : n()
                    } else {
                        const i = e.subTree = yo(e);
                        y(null, i, n, o, e, r, s),
                        t.el = i.el
                    }
                    if (u && pi(u, r),
                    !f && (i = l && l.onVnodeMounted)) {
                        const e = t;
                        pi(( () => qi(i, d, e)), r)
                    }
                    (256 & t.shapeFlag || d && Zo(d.vnode) && 256 & d.vnode.shapeFlag) && (e.ba && pr(e.ba),
                    e.a && pi(e.a, r)),
                    e.isMounted = !0,
                    t = n = o = null
                }
            }
              , c = e.effect = new vt(l,i,( () => no(u)),e.scope)
              , u = e.update = () => {
                c.dirty && c.run()
            }
            ;
            u.id = e.uid,
            gi(e, !0),
            u()
        }
          , H = (e, t, n) => {
            t.component = e;
            const o = e.vnode.props;
            e.vnode = t,
            e.next = null,
            function(e, t, n, o) {
                const {props: r, attrs: i, vnode: {patchFlag: s}} = e
                  , a = Ln(r)
                  , [l] = e.propsOptions;
                let c = !1;
                if (!(o || s > 0) || 16 & s) {
                    let o;
                    Zr(e, t, r, i) && (c = !0);
                    for (const i in a)
                        t && (f(t, i) || (o = P(i)) !== i && f(t, o)) || (l ? !n || void 0 === n[i] && void 0 === n[o] || (r[i] = Qr(l, a, i, void 0, e, !0)) : delete r[i]);
                    if (i !== a)
                        for (const e in i)
                            t && f(t, e) || (delete i[e],
                            c = !0)
                } else if (8 & s) {
                    const n = e.vnode.dynamicProps;
                    for (let o = 0; o < n.length; o++) {
                        let s = n[o];
                        if (po(e.emitsOptions, s))
                            continue;
                        const u = t[s];
                        if (l)
                            if (f(i, s))
                                u !== i[s] && (i[s] = u,
                                c = !0);
                            else {
                                const t = O(s);
                                r[t] = Qr(l, a, t, u, e, !1)
                            }
                        else
                            u !== i[s] && (i[s] = u,
                            c = !0)
                    }
                }
                c && Nt(e, "set", "$attrs")
            }(e, t.props, o, n),
            di(e, t.children, n),
            St(),
            ro(e),
            Tt()
        }
          , U = (e, t, n, o, r, i, s, a, l=!1) => {
            const c = e && e.children
              , u = e ? e.shapeFlag : 0
              , d = t.children
              , {patchFlag: f, shapeFlag: h} = t;
            if (f > 0) {
                if (128 & f)
                    return void z(c, d, n, o, r, i, s, a, l);
                if (256 & f)
                    return void q(c, d, n, o, r, i, s, a, l)
            }
            8 & h ? (16 & u && Z(c, r, i),
            d !== c && p(n, d)) : 16 & u ? 16 & h ? z(c, d, n, o, r, i, s, a, l) : Z(c, r, i, !0) : (8 & u && p(n, ""),
            16 & h && $(d, n, o, r, i, s, a, l))
        }
          , q = (e, t, n, o, i, s, a, l, c) => {
            t = t || r;
            const u = (e = e || r).length
              , d = t.length
              , f = Math.min(u, d);
            let p;
            for (p = 0; p < f; p++) {
                const o = t[p] = c ? Wi(t[p]) : Vi(t[p]);
                y(e[p], o, n, null, i, s, a, l, c)
            }
            u > d ? Z(e, i, s, !0, !1, f) : $(t, n, o, i, s, a, l, c, f)
        }
          , z = (e, t, n, o, i, s, a, l, c) => {
            let u = 0;
            const d = t.length;
            let f = e.length - 1
              , p = d - 1;
            for (; u <= f && u <= p; ) {
                const o = e[u]
                  , r = t[u] = c ? Wi(t[u]) : Vi(t[u]);
                if (!Ai(o, r))
                    break;
                y(o, r, n, null, i, s, a, l, c),
                u++
            }
            for (; u <= f && u <= p; ) {
                const o = e[f]
                  , r = t[p] = c ? Wi(t[p]) : Vi(t[p]);
                if (!Ai(o, r))
                    break;
                y(o, r, n, null, i, s, a, l, c),
                f--,
                p--
            }
            if (u > f) {
                if (u <= p) {
                    const e = p + 1
                      , r = e < d ? t[e].el : o;
                    for (; u <= p; )
                        y(null, t[u] = c ? Wi(t[u]) : Vi(t[u]), n, r, i, s, a, l, c),
                        u++
                }
            } else if (u > p)
                for (; u <= f; )
                    G(e[u], i, s, !0),
                    u++;
            else {
                const h = u
                  , m = u
                  , g = new Map;
                for (u = m; u <= p; u++) {
                    const e = t[u] = c ? Wi(t[u]) : Vi(t[u]);
                    null != e.key && g.set(e.key, u)
                }
                let v, b = 0;
                const _ = p - m + 1;
                let w = !1
                  , x = 0;
                const C = new Array(_);
                for (u = 0; u < _; u++)
                    C[u] = 0;
                for (u = h; u <= f; u++) {
                    const o = e[u];
                    if (b >= _) {
                        G(o, i, s, !0);
                        continue
                    }
                    let r;
                    if (null != o.key)
                        r = g.get(o.key);
                    else
                        for (v = m; v <= p; v++)
                            if (0 === C[v - m] && Ai(o, t[v])) {
                                r = v;
                                break
                            }
                    void 0 === r ? G(o, i, s, !0) : (C[r - m] = u + 1,
                    r >= x ? x = r : w = !0,
                    y(o, t[r], n, null, i, s, a, l, c),
                    b++)
                }
                const S = w ? function(e) {
                    const t = e.slice()
                      , n = [0];
                    let o, r, i, s, a;
                    const l = e.length;
                    for (o = 0; o < l; o++) {
                        const l = e[o];
                        if (0 !== l) {
                            if (r = n[n.length - 1],
                            e[r] < l) {
                                t[o] = r,
                                n.push(o);
                                continue
                            }
                            for (i = 0,
                            s = n.length - 1; i < s; )
                                a = i + s >> 1,
                                e[n[a]] < l ? i = a + 1 : s = a;
                            l < e[n[i]] && (i > 0 && (t[o] = n[i - 1]),
                            n[i] = o)
                        }
                    }
                    i = n.length,
                    s = n[i - 1];
                    for (; i-- > 0; )
                        n[i] = s,
                        s = t[s];
                    return n
                }(C) : r;
                for (v = S.length - 1,
                u = _ - 1; u >= 0; u--) {
                    const e = m + u
                      , r = t[e]
                      , f = e + 1 < d ? t[e + 1].el : o;
                    0 === C[u] ? y(null, r, n, f, i, s, a, l, c) : w && (v < 0 || u !== S[v] ? K(r, n, f, 2) : v--)
                }
            }
        }
          , K = (e, n, o, r, i=null) => {
            const {el: s, type: a, transition: l, children: c, shapeFlag: u} = e;
            if (6 & u)
                return void K(e.component.subTree, n, o, r);
            if (128 & u)
                return void e.suspense.move(n, o, r);
            if (64 & u)
                return void a.move(e, n, o, ne);
            if (a === bi) {
                t(s, n, o);
                for (let e = 0; e < c.length; e++)
                    K(c[e], n, o, r);
                return void t(e.anchor, n, o)
            }
            if (a === xi)
                return void C(e, n, o);
            if (2 !== r && 1 & u && l)
                if (0 === r)
                    l.beforeEnter(s),
                    t(s, n, o),
                    pi(( () => l.enter(s)), i);
                else {
                    const {leave: e, delayLeave: r, afterLeave: i} = l
                      , a = () => t(s, n, o)
                      , c = () => {
                        e(s, ( () => {
                            a(),
                            i && i()
                        }
                        ))
                    }
                    ;
                    r ? r(s, a, c) : c()
                }
            else
                t(s, n, o)
        }
          , G = (e, t, n, o=!1, r=!1) => {
            const {type: i, props: s, ref: a, children: l, dynamicChildren: c, shapeFlag: u, patchFlag: d, dirs: f} = e;
            if (null != a && fi(a, null, n, e, !0),
            256 & u)
                return void t.ctx.deactivate(e);
            const p = 1 & u && f
              , h = !Zo(e);
            let m;
            if (h && (m = s && s.onVnodeBeforeUnmount) && qi(m, t, e),
            6 & u)
                J(e.component, n, o);
            else {
                if (128 & u)
                    return void e.suspense.unmount(n, o);
                p && Fo(e, null, t, "beforeUnmount"),
                64 & u ? e.type.remove(e, t, n, r, ne, o) : c && (i !== bi || d > 0 && 64 & d) ? Z(c, t, n, !1, !0) : (i === bi && 384 & d || !r && 16 & u) && Z(l, t, n),
                o && Y(e)
            }
            (h && (m = s && s.onVnodeUnmounted) || p) && pi(( () => {
                m && qi(m, t, e),
                p && Fo(e, null, t, "unmounted")
            }
            ), n)
        }
          , Y = e => {
            const {type: t, el: o, anchor: r, transition: i} = e;
            if (t === bi)
                return void X(o, r);
            if (t === xi)
                return void S(e);
            const s = () => {
                n(o),
                i && !i.persisted && i.afterLeave && i.afterLeave()
            }
            ;
            if (1 & e.shapeFlag && i && !i.persisted) {
                const {leave: t, delayLeave: n} = i
                  , r = () => t(o, s);
                n ? n(e.el, s, r) : r()
            } else
                s()
        }
          , X = (e, t) => {
            let o;
            for (; e !== t; )
                o = m(e),
                n(e),
                e = o;
            n(t)
        }
          , J = (e, t, n) => {
            const {bum: o, scope: r, update: i, subTree: s, um: a} = e;
            o && M(o),
            r.stop(),
            i && (i.active = !1,
            G(s, e, t, n)),
            a && pi(a, t),
            pi(( () => {
                e.isUnmounted = !0
            }
            ), t),
            t && t.pendingBranch && !t.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === t.pendingId && (t.deps--,
            0 === t.deps && t.resolve())
        }
          , Z = (e, t, n, o=!1, r=!1, i=0) => {
            for (let s = i; s < e.length; s++)
                G(e[s], t, n, o, r)
        }
          , Q = e => 6 & e.shapeFlag ? Q(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : m(e.anchor || e.el);
        let ee = !1;
        const te = (e, t, n) => {
            null == e ? t._vnode && G(t._vnode, null, null, !0) : y(t._vnode || null, e, t, null, null, null, n),
            ee || (ee = !0,
            ro(),
            io(),
            ee = !1),
            t._vnode = e
        }
          , ne = {
            p: y,
            um: G,
            m: K,
            r: Y,
            mt: F,
            mc: $,
            pc: U,
            pbc: B,
            n: Q,
            o: e
        };
        let oe, re;
        return {
            render: te,
            hydrate: oe,
            createApp: Gr(te, oe)
        }
    }(e)
}
function mi({type: e, props: t}, n) {
    return "svg" === n && "foreignObject" === e || "mathml" === n && "annotation-xml" === e && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function gi({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function vi(e, t, n=!1) {
    const o = e.children
      , r = t.children;
    if (p(o) && p(r))
        for (let i = 0; i < o.length; i++) {
            const e = o[i];
            let t = r[i];
            1 & t.shapeFlag && !t.dynamicChildren && ((t.patchFlag <= 0 || 32 === t.patchFlag) && (t = r[i] = Wi(r[i]),
            t.el = e.el),
            n || vi(e, t)),
            t.type === _i && (t.el = e.el)
        }
}
function yi(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : yi(t)
}
const bi = Symbol.for("v-fgt")
  , _i = Symbol.for("v-txt")
  , wi = Symbol.for("v-cmt")
  , xi = Symbol.for("v-stc")
  , Ci = [];
let Si = null;
function Ti(e=!1) {
    Ci.push(Si = e ? null : [])
}
let Ei = 1;
function ki(e) {
    Ei += e
}
function Li(e) {
    return e.dynamicChildren = Ei > 0 ? Si || r : null,
    Ci.pop(),
    Si = Ci[Ci.length - 1] || null,
    Ei > 0 && Si && Si.push(e),
    e
}
function Oi(e, t, n, o, r, i) {
    return Li(Ni(e, t, n, o, r, i, !0))
}
function $i(e, t, n, o, r) {
    return Li(Ri(e, t, n, o, r, !0))
}
function Pi(e) {
    return !!e && !0 === e.__v_isVNode
}
function Ai(e, t) {
    return e.type === t.type && e.key === t.key
}
const Bi = "__vInternal"
  , Ii = ({key: e}) => null != e ? e : null
  , Mi = ({ref: e, ref_key: t, ref_for: n}) => ("number" == typeof e && (e = "" + e),
null != e ? v(e) || Mn(e) || g(e) ? {
    i: ho,
    r: e,
    k: t,
    f: !!n
} : e : null);
function Ni(e, t=null, n=null, o=0, r=null, i=(e === bi ? 0 : 1), s=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Ii(t),
        ref: t && Mi(t),
        scopeId: mo,
        slotScopeIds: null,
        children: n,
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
        shapeFlag: i,
        patchFlag: o,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: ho
    };
    return a ? (Hi(l, n),
    128 & i && e.normalize(l)) : n && (l.shapeFlag |= v(n) ? 8 : 16),
    Ei > 0 && !s && Si && (l.patchFlag > 0 || 6 & i) && 32 !== l.patchFlag && Si.push(l),
    l
}
const Ri = function(e, t=null, n=null, o=0, r=null, i=!1) {
    e && e !== So || (e = wi);
    if (Pi(e)) {
        const o = ji(e, t, !0);
        return n && Hi(o, n),
        Ei > 0 && !i && Si && (6 & o.shapeFlag ? Si[Si.indexOf(e)] = o : Si.push(o)),
        o.patchFlag |= -2,
        o
    }
    s = e,
    g(s) && "__vccOpts"in s && (e = e.__vccOpts);
    var s;
    if (t) {
        t = function(e) {
            return e ? kn(e) || Bi in e ? c({}, e) : e : null
        }(t);
        let {class: e, style: n} = t;
        e && !v(e) && (t.class = De(e)),
        b(n) && (kn(n) && !p(n) && (n = c({}, n)),
        t.style = Fe(n))
    }
    const a = v(e) ? 1 : Lo(e) ? 128 : (e => e.__isTeleport)(e) ? 64 : b(e) ? 4 : g(e) ? 2 : 0;
    return Ni(e, t, n, o, r, a, i, !0)
};
function ji(e, t, n=!1) {
    const {props: o, ref: r, patchFlag: i, children: s} = e
      , a = t ? Ui(o || {}, t) : o;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && Ii(a),
        ref: t && t.ref ? n && r ? p(r) ? r.concat(Mi(t)) : [r, Mi(t)] : Mi(t) : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== bi ? -1 === i ? 16 : 16 | i : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && ji(e.ssContent),
        ssFallback: e.ssFallback && ji(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}
function Fi(e=" ", t=0) {
    return Ri(_i, null, e, t)
}
function Di(e="", t=!1) {
    return t ? (Ti(),
    $i(wi, null, e)) : Ri(wi, null, e)
}
function Vi(e) {
    return null == e || "boolean" == typeof e ? Ri(wi) : p(e) ? Ri(bi, null, e.slice()) : "object" == typeof e ? Wi(e) : Ri(_i, null, String(e))
}
function Wi(e) {
    return null === e.el && -1 !== e.patchFlag || e.memo ? e : ji(e)
}
function Hi(e, t) {
    let n = 0;
    const {shapeFlag: o} = e;
    if (null == t)
        t = null;
    else if (p(t))
        n = 16;
    else if ("object" == typeof t) {
        if (65 & o) {
            const n = t.default;
            return void (n && (n._c && (n._d = !1),
            Hi(e, n()),
            n._c && (n._d = !0)))
        }
        {
            n = 32;
            const o = t._;
            o || Bi in t ? 3 === o && ho && (1 === ho.slots._ ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024)) : t._ctx = ho
        }
    } else
        g(t) ? (t = {
            default: t,
            _ctx: ho
        },
        n = 32) : (t = String(t),
        64 & o ? (n = 16,
        t = [Fi(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Ui(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        for (const e in o)
            if ("class" === e)
                t.class !== o.class && (t.class = De([t.class, o.class]));
            else if ("style" === e)
                t.style = Fe([t.style, o.style]);
            else if (a(e)) {
                const n = t[e]
                  , r = o[e];
                !r || n === r || p(n) && n.includes(r) || (t[e] = n ? [].concat(n, r) : r)
            } else
                "" !== e && (t[e] = o[e])
    }
    return t
}
function qi(e, t, n, o=null) {
    Un(e, t, 7, [n, o])
}
const zi = zr();
let Ki = 0;
let Gi = null;
const Yi = () => Gi || ho;
let Xi, Ji;
{
    const e = D()
      , t = (t, n) => {
        let o;
        return (o = e[t]) || (o = e[t] = []),
        o.push(n),
        e => {
            o.length > 1 ? o.forEach((t => t(e))) : o[0](e)
        }
    }
    ;
    Xi = t("__VUE_INSTANCE_SETTERS__", (e => Gi = e)),
    Ji = t("__VUE_SSR_SETTERS__", (e => ns = e))
}
const Zi = e => {
    const t = Gi;
    return Xi(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Xi(t)
    }
}
  , Qi = () => {
    Gi && Gi.scope.off(),
    Xi(null)
}
;
function es(e) {
    return 4 & e.vnode.shapeFlag
}
let ts, ns = !1;
function os(e, t, n) {
    g(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = Wn(t)),
    rs(e, n)
}
function rs(e, t, n) {
    const o = e.type;
    if (!e.render) {
        if (!t && ts && !o.render) {
            const t = o.template || jr(e).template;
            if (t) {
                const {isCustomElement: n, compilerOptions: r} = e.appContext.config
                  , {delimiters: i, compilerOptions: s} = o
                  , a = c(c({
                    isCustomElement: n,
                    delimiters: i
                }, r), s);
                o.render = ts(t, a)
            }
        }
        e.render = o.render || i
    }
    {
        const t = Zi(e);
        St();
        try {
            Mr(e)
        } finally {
            Tt(),
            t()
        }
    }
}
function is(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(Wn(On(e.exposed)),{
            get: (t, n) => n in t ? t[n] : n in $r ? $r[n](e) : void 0,
            has: (e, t) => t in e || t in $r
        }))
}
function ss(e, t=!0) {
    return g(e) ? e.displayName || e.name : e.name || t && e.__name
}
const as = (e, t) => {
    const n = function(e, t, n=!1) {
        let o, r;
        const s = g(e);
        return s ? (o = e,
        r = i) : (o = e.get,
        r = e.set),
        new An(o,r,s || !r,n)
    }(e, 0, ns);
    return n
}
;
function ls(e, t, n) {
    const o = arguments.length;
    return 2 === o ? b(t) && !p(t) ? Pi(t) ? Ri(e, null, [t]) : Ri(e, t) : Ri(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : 3 === o && Pi(n) && (n = [n]),
    Ri(e, t, n))
}
const cs = "3.4.21"
  , us = "undefined" != typeof document ? document : null
  , ds = us && us.createElement("template")
  , fs = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, o) => {
        const r = "svg" === t ? us.createElementNS("http://www.w3.org/2000/svg", e) : "mathml" === t ? us.createElementNS("http://www.w3.org/1998/Math/MathML", e) : n ? us.createElement(e, {
            is: n
        }) : us.createElement(e);
        return "select" === e && o && null != o.multiple && r.setAttribute("multiple", o.multiple),
        r
    }
    ,
    createText: e => us.createTextNode(e),
    createComment: e => us.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => us.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, o, r, i) {
        const s = n ? n.previousSibling : t.lastChild;
        if (r && (r === i || r.nextSibling))
            for (; t.insertBefore(r.cloneNode(!0), n),
            r !== i && (r = r.nextSibling); )
                ;
        else {
            ds.innerHTML = "svg" === o ? `<svg>${e}</svg>` : "mathml" === o ? `<math>${e}</math>` : e;
            const r = ds.content;
            if ("svg" === o || "mathml" === o) {
                const e = r.firstChild;
                for (; e.firstChild; )
                    r.appendChild(e.firstChild);
                r.removeChild(e)
            }
            t.insertBefore(r, n)
        }
        return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , ps = "transition"
  , hs = "animation"
  , ms = Symbol("_vtc")
  , gs = (e, {slots: t}) => ls(Uo, function(e) {
    const t = {};
    for (const c in e)
        c in vs || (t[c] = e[c]);
    if (!1 === e.css)
        return t;
    const {name: n="v", type: o, duration: r, enterFromClass: i=`${n}-enter-from`, enterActiveClass: s=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=i, appearActiveClass: u=s, appearToClass: d=a, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: p=`${n}-leave-active`, leaveToClass: h=`${n}-leave-to`} = e
      , m = function(e) {
        if (null == e)
            return null;
        if (b(e))
            return [_s(e.enter), _s(e.leave)];
        {
            const t = _s(e);
            return [t, t]
        }
    }(r)
      , g = m && m[0]
      , v = m && m[1]
      , {onBeforeEnter: y, onEnter: _, onEnterCancelled: w, onLeave: x, onLeaveCancelled: C, onBeforeAppear: S=y, onAppear: T=_, onAppearCancelled: E=w} = t
      , k = (e, t, n) => {
        xs(e, t ? d : a),
        xs(e, t ? u : s),
        n && n()
    }
      , L = (e, t) => {
        e._isLeaving = !1,
        xs(e, f),
        xs(e, h),
        xs(e, p),
        t && t()
    }
      , O = e => (t, n) => {
        const r = e ? T : _
          , s = () => k(t, e, n);
        ys(r, [t, s]),
        Cs(( () => {
            xs(t, e ? l : i),
            ws(t, e ? d : a),
            bs(r) || Ts(t, o, g, s)
        }
        ))
    }
    ;
    return c(t, {
        onBeforeEnter(e) {
            ys(y, [e]),
            ws(e, i),
            ws(e, s)
        },
        onBeforeAppear(e) {
            ys(S, [e]),
            ws(e, l),
            ws(e, u)
        },
        onEnter: O(!1),
        onAppear: O(!0),
        onLeave(e, t) {
            e._isLeaving = !0;
            const n = () => L(e, t);
            ws(e, f),
            document.body.offsetHeight,
            ws(e, p),
            Cs(( () => {
                e._isLeaving && (xs(e, f),
                ws(e, h),
                bs(x) || Ts(e, o, v, n))
            }
            )),
            ys(x, [e, n])
        },
        onEnterCancelled(e) {
            k(e, !1),
            ys(w, [e])
        },
        onAppearCancelled(e) {
            k(e, !0),
            ys(E, [e])
        },
        onLeaveCancelled(e) {
            L(e),
            ys(C, [e])
        }
    })
}(e), t);
gs.displayName = "Transition";
const vs = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
gs.props = c({}, Ho, vs);
const ys = (e, t=[]) => {
    p(e) ? e.forEach((e => e(...t))) : e && e(...t)
}
  , bs = e => !!e && (p(e) ? e.some((e => e.length > 1)) : e.length > 1);
function _s(e) {
    return j(e)
}
function ws(e, t) {
    t.split(/\s+/).forEach((t => t && e.classList.add(t))),
    (e[ms] || (e[ms] = new Set)).add(t)
}
function xs(e, t) {
    t.split(/\s+/).forEach((t => t && e.classList.remove(t)));
    const n = e[ms];
    n && (n.delete(t),
    n.size || (e[ms] = void 0))
}
function Cs(e) {
    requestAnimationFrame(( () => {
        requestAnimationFrame(e)
    }
    ))
}
let Ss = 0;
function Ts(e, t, n, o) {
    const r = e._endId = ++Ss
      , i = () => {
        r === e._endId && o()
    }
    ;
    if (n)
        return setTimeout(i, n);
    const {type: s, timeout: a, propCount: l} = function(e, t) {
        const n = window.getComputedStyle(e)
          , o = e => (n[e] || "").split(", ")
          , r = o(`${ps}Delay`)
          , i = o(`${ps}Duration`)
          , s = Es(r, i)
          , a = o(`${hs}Delay`)
          , l = o(`${hs}Duration`)
          , c = Es(a, l);
        let u = null
          , d = 0
          , f = 0;
        t === ps ? s > 0 && (u = ps,
        d = s,
        f = i.length) : t === hs ? c > 0 && (u = hs,
        d = c,
        f = l.length) : (d = Math.max(s, c),
        u = d > 0 ? s > c ? ps : hs : null,
        f = u ? u === ps ? i.length : l.length : 0);
        const p = u === ps && /\b(transform|all)(,|$)/.test(o(`${ps}Property`).toString());
        return {
            type: u,
            timeout: d,
            propCount: f,
            hasTransform: p
        }
    }(e, t);
    if (!s)
        return o();
    const c = s + "end";
    let u = 0;
    const d = () => {
        e.removeEventListener(c, f),
        i()
    }
      , f = t => {
        t.target === e && ++u >= l && d()
    }
    ;
    setTimeout(( () => {
        u < l && d()
    }
    ), a + 1),
    e.addEventListener(c, f)
}
function Es(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map(( (t, n) => ks(t) + ks(e[n]))))
}
function ks(e) {
    return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."))
}
const Ls = Symbol("_vod")
  , Os = Symbol("_vsh")
  , $s = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Ls] = "none" === e.style.display ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Ps(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: o}) {
        !t != !n && (o ? t ? (o.beforeEnter(e),
        Ps(e, !0),
        o.enter(e)) : o.leave(e, ( () => {
            Ps(e, !1)
        }
        )) : Ps(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Ps(e, t)
    }
};
function Ps(e, t) {
    e.style.display = t ? e[Ls] : "none",
    e[Os] = !t
}
const As = Symbol("")
  , Bs = /(^|;)\s*display\s*:/;
const Is = /\s*!important$/;
function Ms(e, t, n) {
    if (p(n))
        n.forEach((n => Ms(e, t, n)));
    else if (null == n && (n = ""),
    n = qs(n),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const o = function(e, t) {
            const n = Rs[t];
            if (n)
                return n;
            let o = O(t);
            if ("filter" !== o && o in e)
                return Rs[t] = o;
            o = A(o);
            for (let r = 0; r < Ns.length; r++) {
                const n = Ns[r] + o;
                if (n in e)
                    return Rs[t] = n
            }
            return t
        }(e, t);
        Is.test(n) ? e.setProperty(P(o), n.replace(Is, ""), "important") : e[o] = n
    }
}
const Ns = ["Webkit", "Moz", "ms"]
  , Rs = {};
const {unit: js, unitRatio: Fs, unitPrecision: Ds} = {
    unit: "rem",
    unitRatio: 10 / 320,
    unitPrecision: 5
}
  , Vs = (Ws = js,
Hs = Fs,
Us = Ds,
e => e.replace(Ye, ( (e, t) => {
    if (!t)
        return e;
    if (1 === Hs)
        return `${t}${Ws}`;
    const n = function(e, t) {
        const n = Math.pow(10, t + 1)
          , o = Math.floor(e * n);
        return 10 * Math.round(o / 10) / n
    }(parseFloat(t) * Hs, Us);
    return 0 === n ? "0" : `${n}${Ws}`
}
)));
var Ws, Hs, Us;
const qs = e => v(e) ? Vs(e) : e
  , zs = "http://www.w3.org/1999/xlink";
const Ks = Symbol("_vei");
function Gs(e, t, n, o, r=null) {
    const i = e[Ks] || (e[Ks] = {})
      , s = i[t];
    if (o && s)
        s.value = o;
    else {
        const [n,a] = function(e) {
            let t;
            if (Ys.test(e)) {
                let n;
                for (t = {}; n = e.match(Ys); )
                    e = e.slice(0, e.length - n[0].length),
                    t[n[0].toLowerCase()] = !0
            }
            const n = ":" === e[2] ? e.slice(3) : P(e.slice(2));
            return [n, t]
        }(t);
        if (o) {
            const s = i[t] = function(e, t) {
                const n = e => {
                    if (e._vts) {
                        if (e._vts <= n.attached)
                            return
                    } else
                        e._vts = Date.now();
                    const o = t && t.proxy
                      , r = o && o.$nne
                      , {value: i} = n;
                    if (r && p(i)) {
                        const n = Qs(e, i);
                        for (let o = 0; o < n.length; o++) {
                            const i = n[o];
                            Un(i, t, 5, i.__wwe ? [e] : r(e))
                        }
                    } else
                        Un(Qs(e, n.value), t, 5, r && !i.__wwe ? r(e, i, t) : [e])
                }
                ;
                return n.value = e,
                n.attached = Zs(),
                n
            }(o, r);
            !function(e, t, n, o) {
                e.addEventListener(t, n, o)
            }(e, n, s, a)
        } else
            s && (!function(e, t, n, o) {
                e.removeEventListener(t, n, o)
            }(e, n, s, a),
            i[t] = void 0)
    }
}
const Ys = /(?:Once|Passive|Capture)$/;
let Xs = 0;
const Js = Promise.resolve()
  , Zs = () => Xs || (Js.then(( () => Xs = 0)),
Xs = Date.now());
function Qs(e, t) {
    if (p(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map((e => {
            const t = t => !t._stopped && e && e(t);
            return t.__wwe = e.__wwe,
            t
        }
        ))
    }
    return t
}
const ea = e => 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123;
const ta = ["ctrl", "shift", "alt", "meta"]
  , na = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && 0 !== e.button,
    middle: e => "button"in e && 1 !== e.button,
    right: e => "button"in e && 2 !== e.button,
    exact: (e, t) => ta.some((n => e[`${n}Key`] && !t.includes(n)))
}
  , oa = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , o = t.join(".");
    return n[o] || (n[o] = (n, ...o) => {
        for (let e = 0; e < t.length; e++) {
            const o = na[t[e]];
            if (o && o(n, t))
                return
        }
        return e(n, ...o)
    }
    )
}
  , ra = c({
    patchProp: (e, t, n, o, r, i, s, c, u) => {
        if (0 === t.indexOf("change:"))
            return function(e, t, n, o=null) {
                if (!n || !o)
                    return;
                const r = t.replace("change:", "")
                  , {attrs: i} = o
                  , s = i[r]
                  , a = (e.__wxsProps || (e.__wxsProps = {}))[r];
                if (a === s)
                    return;
                e.__wxsProps[r] = s;
                const l = o.proxy;
                to(( () => {
                    n(s, a, l.$gcd(l, !0), l.$gcd(l, !1))
                }
                ))
            }(e, t, o, s);
        const d = "svg" === r;
        "class" === t ? function(e, t, n) {
            const {__wxsAddClass: o, __wxsRemoveClass: r} = e;
            r && r.length && (t = (t || "").split(/\s+/).filter((e => -1 === r.indexOf(e))).join(" "),
            r.length = 0),
            o && o.length && (t = (t || "") + " " + o.join(" "));
            const i = e[ms];
            i && (t = (t ? [t, ...i] : [...i]).join(" ")),
            null == t ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
        }(e, o, d) : "style" === t ? function(e, t, n) {
            const o = e.style
              , r = v(n);
            let i = !1;
            if (n && !r) {
                if (t)
                    if (v(t))
                        for (const e of t.split(";")) {
                            const t = e.slice(0, e.indexOf(":")).trim();
                            null == n[t] && Ms(o, t, "")
                        }
                    else
                        for (const e in t)
                            null == n[e] && Ms(o, e, "");
                for (const e in n)
                    "display" === e && (i = !0),
                    Ms(o, e, n[e])
            } else if (r) {
                if (t !== n) {
                    const e = o[As];
                    e && (n += ";" + e),
                    o.cssText = n,
                    i = Bs.test(n)
                }
            } else
                t && e.removeAttribute("style");
            Ls in e && (e[Ls] = i ? o.display : "",
            e[Os] && (o.display = "none"));
            const {__wxsStyle: s} = e;
            if (s)
                for (const a in s)
                    Ms(o, a, s[a])
        }(e, n, o) : a(t) ? l(t) || Gs(e, t, 0, o, s) : ("." === t[0] ? (t = t.slice(1),
        1) : "^" === t[0] ? (t = t.slice(1),
        0) : function(e, t, n, o) {
            if (o)
                return "innerHTML" === t || "textContent" === t || !!(t in e && ea(t) && g(n));
            if ("spellcheck" === t || "draggable" === t || "translate" === t)
                return !1;
            if ("form" === t)
                return !1;
            if ("list" === t && "INPUT" === e.tagName)
                return !1;
            if ("type" === t && "TEXTAREA" === e.tagName)
                return !1;
            if ("width" === t || "height" === t) {
                const t = e.tagName;
                if ("IMG" === t || "VIDEO" === t || "CANVAS" === t || "SOURCE" === t)
                    return !1
            }
            if (ea(t) && v(n))
                return !1;
            return t in e
        }(e, t, o, d)) ? function(e, t, n, o, r, i, s) {
            if ("innerHTML" === t || "textContent" === t)
                return o && s(o, r, i),
                void (e[t] = null == n ? "" : n);
            const a = e.tagName;
            if ("value" === t && "PROGRESS" !== a && !a.includes("-")) {
                const o = null == n ? "" : n;
                return ("OPTION" === a ? e.getAttribute("value") || "" : e.value) === o && "_value"in e || (e.value = o),
                null == n && e.removeAttribute(t),
                void (e._value = n)
            }
            let l = !1;
            if ("" === n || null == n) {
                const o = typeof e[t];
                "boolean" === o ? n = G(n) : null == n && "string" === o ? (n = "",
                l = !0) : "number" === o && (n = 0,
                l = !0)
            }
            try {
                e[t] = n
            } catch (c) {}
            l && e.removeAttribute(t)
        }(e, t, o, i, s, c, u) : ("true-value" === t ? e._trueValue = o : "false-value" === t && (e._falseValue = o),
        function(e, t, n, o) {
            if (o && t.startsWith("xlink:"))
                null == n ? e.removeAttributeNS(zs, t.slice(6, t.length)) : e.setAttributeNS(zs, t, n);
            else {
                const o = K(t);
                null == n || o && !G(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
            }
        }(e, t, o, d))
    }
    ,
    forcePatchProp: (e, t) => 0 === t.indexOf("change:") || ("class" === t && e.__wxsClassChanged ? (e.__wxsClassChanged = !1,
    !0) : !("style" !== t || !e.__wxsStyleChanged) && (e.__wxsStyleChanged = !1,
    !0))
}, fs);
let ia;
const sa = (...e) => {
    const t = (ia || (ia = hi(ra))).createApp(...e)
      , {mount: n} = t;
    return t.mount = e => {
        const o = function(e) {
            if (v(e)) {
                return document.querySelector(e)
            }
            return e
        }/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
        (e);
        if (!o)
            return;
        const r = t._component;
        g(r) || r.render || r.template || (r.template = o.innerHTML),
        o.innerHTML = "";
        const i = n(o, !1, function(e) {
            if (e instanceof SVGElement)
                return "svg";
            if ("function" == typeof MathMLElement && e instanceof MathMLElement)
                return "mathml"
        }(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
;
const aa = "undefined" != typeof document;
const la = Object.assign;
function ca(e, t) {
    const n = {};
    for (const o in t) {
        const r = t[o];
        n[o] = da(r) ? r.map(e) : e(r)
    }
    return n
}
const ua = () => {}
  , da = Array.isArray
  , fa = /#/g
  , pa = /&/g
  , ha = /\//g
  , ma = /=/g
  , ga = /\?/g
  , va = /\+/g
  , ya = /%5B/g
  , ba = /%5D/g
  , _a = /%5E/g
  , wa = /%60/g
  , xa = /%7B/g
  , Ca = /%7C/g
  , Sa = /%7D/g
  , Ta = /%20/g;
function Ea(e) {
    return encodeURI("" + e).replace(Ca, "|").replace(ya, "[").replace(ba, "]")
}
function ka(e) {
    return Ea(e).replace(va, "%2B").replace(Ta, "+").replace(fa, "%23").replace(pa, "%26").replace(wa, "`").replace(xa, "{").replace(Sa, "}").replace(_a, "^")
}
function La(e) {
    return null == e ? "" : function(e) {
        return Ea(e).replace(fa, "%23").replace(ga, "%3F")
    }(e).replace(ha, "%2F")
}
function Oa(e) {
    try {
        return decodeURIComponent("" + e)
    } catch (t) {}
    return "" + e
}
const $a = /\/$/
  , Pa = e => e.replace($a, "");
function Aa(e, t, n="/") {
    let o, r = {}, i = "", s = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (o = t.slice(0, l),
    i = t.slice(l + 1, a > -1 ? a : t.length),
    r = e(i)),
    a > -1 && (o = o || t.slice(0, a),
    s = t.slice(a, t.length)),
    o = function(e, t) {
        if (e.startsWith("/"))
            return e;
        if (!e)
            return t;
        const n = t.split("/")
          , o = e.split("/")
          , r = o[o.length - 1];
        ".." !== r && "." !== r || o.push("");
        let i, s, a = n.length - 1;
        for (i = 0; i < o.length; i++)
            if (s = o[i],
            "." !== s) {
                if (".." !== s)
                    break;
                a > 1 && a--
            }
        return n.slice(0, a).join("/") + "/" + o.slice(i).join("/")
    }(null != o ? o : t, n),
    {
        fullPath: o + (i && "?") + i + s,
        path: o,
        query: r,
        hash: Oa(s)
    }
}
function Ba(e, t) {
    return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e
}
function Ia(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Ma(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!Na(e[n], t[n]))
            return !1;
    return !0
}
function Na(e, t) {
    return da(e) ? Ra(e, t) : da(t) ? Ra(t, e) : e === t
}
function Ra(e, t) {
    return da(t) ? e.length === t.length && e.every(( (e, n) => e === t[n])) : 1 === e.length && e[0] === t
}
const ja = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var Fa, Da, Va, Wa;
(Da = Fa || (Fa = {})).pop = "pop",
Da.push = "push",
(Wa = Va || (Va = {})).back = "back",
Wa.forward = "forward",
Wa.unknown = "";
const Ha = /^[^#]+/;
function Ua(e, t) {
    return e.replace(Ha, "#") + t
}
const qa = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function za(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , o = "string" == typeof n && n.startsWith("#")
          , r = "string" == typeof n ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!r)
            return;
        t = function(e, t) {
            const n = document.documentElement.getBoundingClientRect()
              , o = e.getBoundingClientRect();
            return {
                behavior: t.behavior,
                left: o.left - n.left - (t.left || 0),
                top: o.top - n.top - (t.top || 0)
            }
        }(r, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(null != t.left ? t.left : window.scrollX, null != t.top ? t.top : window.scrollY)
}
function Ka(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Ga = new Map;
let Ya = () => location.protocol + "//" + location.host;
function Xa(e, t) {
    const {pathname: n, search: o, hash: r} = t
      , i = e.indexOf("#");
    if (i > -1) {
        let t = r.includes(e.slice(i)) ? e.slice(i).length : 1
          , n = r.slice(t);
        return "/" !== n[0] && (n = "/" + n),
        Ba(n, "")
    }
    return Ba(n, e) + o + r
}
function Ja(e, t, n, o=!1, r=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: o,
        position: window.history.length,
        scroll: r ? qa() : null
    }
}
function Za(e) {
    const t = function(e) {
        const {history: t, location: n} = window
          , o = {
            value: Xa(e, n)
        }
          , r = {
            value: t.state
        };
        function i(o, i, s) {
            const a = e.indexOf("#")
              , l = a > -1 ? (n.host && document.querySelector("base") ? e : e.slice(a)) + o : Ya() + e + o;
            try {
                t[s ? "replaceState" : "pushState"](i, "", l),
                r.value = i
            } catch (c) {
                console.error(c),
                n[s ? "replace" : "assign"](l)
            }
        }
        return r.value || i(o.value, {
            back: null,
            current: o.value,
            forward: null,
            position: t.length - 1,
            replaced: !0,
            scroll: null
        }, !0),
        {
            location: o,
            state: r,
            push: function(e, n) {
                const s = la({}, r.value, t.state, {
                    forward: e,
                    scroll: qa()
                });
                i(s.current, s, !0),
                i(e, la({}, Ja(o.value, e, null), {
                    position: s.position + 1
                }, n), !1),
                o.value = e
            },
            replace: function(e, n) {
                i(e, la({}, t.state, Ja(r.value.back, e, r.value.forward, !0), n, {
                    position: r.value.position
                }), !0),
                o.value = e
            }
        }
    }(e = function(e) {
        if (!e)
            if (aa) {
                const t = document.querySelector("base");
                e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "")
            } else
                e = "/";
        return "/" !== e[0] && "#" !== e[0] && (e = "/" + e),
        Pa(e)
    }(e))
      , n = function(e, t, n, o) {
        let r = []
          , i = []
          , s = null;
        const a = ({state: i}) => {
            const a = Xa(e, location)
              , l = n.value
              , c = t.value;
            let u = 0;
            if (i) {
                if (n.value = a,
                t.value = i,
                s && s === l)
                    return void (s = null);
                u = c ? i.position - c.position : 0
            } else
                o(a);
            r.forEach((e => {
                e(n.value, l, {
                    delta: u,
                    type: Fa.pop,
                    direction: u ? u > 0 ? Va.forward : Va.back : Va.unknown
                })
            }
            ))
        }
        ;
        function l() {
            const {history: e} = window;
            e.state && e.replaceState(la({}, e.state, {
                scroll: qa()
            }), "")
        }
        return window.addEventListener("popstate", a),
        window.addEventListener("beforeunload", l, {
            passive: !0
        }),
        {
            pauseListeners: function() {
                s = n.value
            },
            listen: function(e) {
                r.push(e);
                const t = () => {
                    const t = r.indexOf(e);
                    t > -1 && r.splice(t, 1)
                }
                ;
                return i.push(t),
                t
            },
            destroy: function() {
                for (const e of i)
                    e();
                i = [],
                window.removeEventListener("popstate", a),
                window.removeEventListener("beforeunload", l)
            }
        }
    }(e, t.state, t.location, t.replace);
    const o = la({
        location: "",
        base: e,
        go: function(e, t=!0) {
            t || n.pauseListeners(),
            history.go(e)
        },
        createHref: Ua.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    o
}
function Qa(e) {
    return "string" == typeof e || "symbol" == typeof e
}
const el = Symbol("");
var tl, nl;
function ol(e, t) {
    return la(new Error, {
        type: e,
        [el]: !0
    }, t)
}
function rl(e, t) {
    return e instanceof Error && el in e && (null == t || !!(e.type & t))
}
(nl = tl || (tl = {}))[nl.aborted = 4] = "aborted",
nl[nl.cancelled = 8] = "cancelled",
nl[nl.duplicated = 16] = "duplicated";
const il = "[^/]+?"
  , sl = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , al = /[.+*?^${}()[\]/\\]/g;
function ll(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const o = t[n] - e[n];
        if (o)
            return o;
        n++
    }
    return e.length < t.length ? 1 === e.length && 80 === e[0] ? -1 : 1 : e.length > t.length ? 1 === t.length && 80 === t[0] ? 1 : -1 : 0
}
function cl(e, t) {
    let n = 0;
    const o = e.score
      , r = t.score;
    for (; n < o.length && n < r.length; ) {
        const e = ll(o[n], r[n]);
        if (e)
            return e;
        n++
    }
    if (1 === Math.abs(r.length - o.length)) {
        if (ul(o))
            return 1;
        if (ul(r))
            return -1
    }
    return r.length - o.length
}
function ul(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const dl = {
    type: 0,
    value: ""
}
  , fl = /[a-zA-Z0-9_]/;
function pl(e, t, n) {
    const o = function(e, t) {
        const n = la({}, sl, t)
          , o = [];
        let r = n.start ? "^" : "";
        const i = [];
        for (const l of e) {
            const e = l.length ? [] : [90];
            n.strict && !l.length && (r += "/");
            for (let t = 0; t < l.length; t++) {
                const o = l[t];
                let s = 40 + (n.sensitive ? .25 : 0);
                if (0 === o.type)
                    t || (r += "/"),
                    r += o.value.replace(al, "\\$&"),
                    s += 40;
                else if (1 === o.type) {
                    const {value: e, repeatable: n, optional: c, regexp: u} = o;
                    i.push({
                        name: e,
                        repeatable: n,
                        optional: c
                    });
                    const d = u || il;
                    if (d !== il) {
                        s += 10;
                        try {
                            new RegExp(`(${d})`)
                        } catch (a) {
                            throw new Error(`Invalid custom RegExp for param "${e}" (${d}): ` + a.message)
                        }
                    }
                    let f = n ? `((?:${d})(?:/(?:${d}))*)` : `(${d})`;
                    t || (f = c && l.length < 2 ? `(?:/${f})` : "/" + f),
                    c && (f += "?"),
                    r += f,
                    s += 20,
                    c && (s += -8),
                    n && (s += -20),
                    ".*" === d && (s += -50)
                }
                e.push(s)
            }
            o.push(e)
        }
        if (n.strict && n.end) {
            const e = o.length - 1;
            o[e][o[e].length - 1] += .7000000000000001
        }
        n.strict || (r += "/?"),
        n.end ? r += "$" : n.strict && (r += "(?:/|$)");
        const s = new RegExp(r,n.sensitive ? "" : "i");
        return {
            re: s,
            score: o,
            keys: i,
            parse: function(e) {
                const t = e.match(s)
                  , n = {};
                if (!t)
                    return null;
                for (let o = 1; o < t.length; o++) {
                    const e = t[o] || ""
                      , r = i[o - 1];
                    n[r.name] = e && r.repeatable ? e.split("/") : e
                }
                return n
            },
            stringify: function(t) {
                let n = ""
                  , o = !1;
                for (const r of e) {
                    o && n.endsWith("/") || (n += "/"),
                    o = !1;
                    for (const e of r)
                        if (0 === e.type)
                            n += e.value;
                        else if (1 === e.type) {
                            const {value: i, repeatable: s, optional: a} = e
                              , l = i in t ? t[i] : "";
                            if (da(l) && !s)
                                throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);
                            const c = da(l) ? l.join("/") : l;
                            if (!c) {
                                if (!a)
                                    throw new Error(`Missing required param "${i}"`);
                                r.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : o = !0)
                            }
                            n += c
                        }
                }
                return n || "/"
            }
        }
    }(function(e) {
        if (!e)
            return [[]];
        if ("/" === e)
            return [[dl]];
        if (!e.startsWith("/"))
            throw new Error(`Invalid path "${e}"`);
        function t(e) {
            throw new Error(`ERR (${n})/"${c}": ${e}`)
        }
        let n = 0
          , o = n;
        const r = [];
        let i;
        function s() {
            i && r.push(i),
            i = []
        }
        let a, l = 0, c = "", u = "";
        function d() {
            c && (0 === n ? i.push({
                type: 0,
                value: c
            }) : 1 === n || 2 === n || 3 === n ? (i.length > 1 && ("*" === a || "+" === a) && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
            i.push({
                type: 1,
                value: c,
                regexp: u,
                repeatable: "*" === a || "+" === a,
                optional: "*" === a || "?" === a
            })) : t("Invalid state to consume buffer"),
            c = "")
        }
        function f() {
            c += a
        }
        for (; l < e.length; )
            if (a = e[l++],
            "\\" !== a || 2 === n)
                switch (n) {
                case 0:
                    "/" === a ? (c && d(),
                    s()) : ":" === a ? (d(),
                    n = 1) : f();
                    break;
                case 4:
                    f(),
                    n = o;
                    break;
                case 1:
                    "(" === a ? n = 2 : fl.test(a) ? f() : (d(),
                    n = 0,
                    "*" !== a && "?" !== a && "+" !== a && l--);
                    break;
                case 2:
                    ")" === a ? "\\" == u[u.length - 1] ? u = u.slice(0, -1) + a : n = 3 : u += a;
                    break;
                case 3:
                    d(),
                    n = 0,
                    "*" !== a && "?" !== a && "+" !== a && l--,
                    u = "";
                    break;
                default:
                    t("Unknown state")
                }
            else
                o = n,
                n = 4;
        return 2 === n && t(`Unfinished custom RegExp for param "${c}"`),
        d(),
        s(),
        r
    }(e.path), n)
      , r = la(o, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r),
    r
}
function hl(e, t) {
    const n = []
      , o = new Map;
    function r(e, n, o) {
        const a = !o
          , l = function(e) {
            return {
                path: e.path,
                redirect: e.redirect,
                name: e.name,
                meta: e.meta || {},
                aliasOf: void 0,
                beforeEnter: e.beforeEnter,
                props: gl(e),
                children: e.children || [],
                instances: {},
                leaveGuards: new Set,
                updateGuards: new Set,
                enterCallbacks: {},
                components: "components"in e ? e.components || null : e.component && {
                    default: e.component
                }
            }
        }(e);
        l.aliasOf = o && o.record;
        const c = bl(t, e)
          , u = [l];
        if ("alias"in e) {
            const t = "string" == typeof e.alias ? [e.alias] : e.alias;
            for (const e of t)
                u.push(la({}, l, {
                    components: o ? o.record.components : l.components,
                    path: e,
                    aliasOf: o ? o.record : l
                }))
        }
        let d, f;
        for (const t of u) {
            const {path: u} = t;
            if (n && "/" !== u[0]) {
                const e = n.record.path
                  , o = "/" === e[e.length - 1] ? "" : "/";
                t.path = n.record.path + (u && o + u)
            }
            if (d = pl(t, n, c),
            o ? o.alias.push(d) : (f = f || d,
            f !== d && f.alias.push(d),
            a && e.name && !vl(d) && i(e.name)),
            _l(d) && s(d),
            l.children) {
                const e = l.children;
                for (let t = 0; t < e.length; t++)
                    r(e[t], d, o && o.children[t])
            }
            o = o || d
        }
        return f ? () => {
            i(f)
        }
        : ua
    }
    function i(e) {
        if (Qa(e)) {
            const t = o.get(e);
            t && (o.delete(e),
            n.splice(n.indexOf(t), 1),
            t.children.forEach(i),
            t.alias.forEach(i))
        } else {
            const t = n.indexOf(e);
            t > -1 && (n.splice(t, 1),
            e.record.name && o.delete(e.record.name),
            e.children.forEach(i),
            e.alias.forEach(i))
        }
    }
    function s(e) {
        const t = function(e, t) {
            let n = 0
              , o = t.length;
            for (; n !== o; ) {
                const r = n + o >> 1;
                cl(e, t[r]) < 0 ? o = r : n = r + 1
            }
            const r = function(e) {
                let t = e;
                for (; t = t.parent; )
                    if (_l(t) && 0 === cl(e, t))
                        return t;
                return
            }(e);
            r && (o = t.lastIndexOf(r, o - 1));
            return o
        }(e, n);
        n.splice(t, 0, e),
        e.record.name && !vl(e) && o.set(e.record.name, e)
    }
    return t = bl({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t),
    e.forEach((e => r(e))),
    {
        addRoute: r,
        resolve: function(e, t) {
            let r, i, s, a = {};
            if ("name"in e && e.name) {
                if (r = o.get(e.name),
                !r)
                    throw ol(1, {
                        location: e
                    });
                s = r.record.name,
                a = la(ml(t.params, r.keys.filter((e => !e.optional)).concat(r.parent ? r.parent.keys.filter((e => e.optional)) : []).map((e => e.name))), e.params && ml(e.params, r.keys.map((e => e.name)))),
                i = r.stringify(a)
            } else if (null != e.path)
                i = e.path,
                r = n.find((e => e.re.test(i))),
                r && (a = r.parse(i),
                s = r.record.name);
            else {
                if (r = t.name ? o.get(t.name) : n.find((e => e.re.test(t.path))),
                !r)
                    throw ol(1, {
                        location: e,
                        currentLocation: t
                    });
                s = r.record.name,
                a = la({}, t.params, e.params),
                i = r.stringify(a)
            }
            const l = [];
            let c = r;
            for (; c; )
                l.unshift(c.record),
                c = c.parent;
            return {
                name: s,
                path: i,
                params: a,
                matched: l,
                meta: yl(l)
            }
        },
        removeRoute: i,
        clearRoutes: function() {
            n.length = 0,
            o.clear()
        },
        getRoutes: function() {
            return n
        },
        getRecordMatcher: function(e) {
            return o.get(e)
        }
    }
}
function ml(e, t) {
    const n = {};
    for (const o of t)
        o in e && (n[o] = e[o]);
    return n
}
function gl(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const o in e.components)
            t[o] = "object" == typeof n ? n[o] : n;
    return t
}
function vl(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function yl(e) {
    return e.reduce(( (e, t) => la(e, t.meta)), {})
}
function bl(e, t) {
    const n = {};
    for (const o in e)
        n[o] = o in t ? t[o] : e[o];
    return n
}
function _l({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function wl(e) {
    const t = {};
    if ("" === e || "?" === e)
        return t;
    const n = ("?" === e[0] ? e.slice(1) : e).split("&");
    for (let o = 0; o < n.length; ++o) {
        const e = n[o].replace(va, " ")
          , r = e.indexOf("=")
          , i = Oa(r < 0 ? e : e.slice(0, r))
          , s = r < 0 ? null : Oa(e.slice(r + 1));
        if (i in t) {
            let e = t[i];
            da(e) || (e = t[i] = [e]),
            e.push(s)
        } else
            t[i] = s
    }
    return t
}
function xl(e) {
    let t = "";
    for (let n in e) {
        const o = e[n];
        if (n = ka(n).replace(ma, "%3D"),
        null == o) {
            void 0 !== o && (t += (t.length ? "&" : "") + n);
            continue
        }
        (da(o) ? o.map((e => e && ka(e))) : [o && ka(o)]).forEach((e => {
            void 0 !== e && (t += (t.length ? "&" : "") + n,
            null != e && (t += "=" + e))
        }
        ))
    }
    return t
}
function Cl(e) {
    const t = {};
    for (const n in e) {
        const o = e[n];
        void 0 !== o && (t[n] = da(o) ? o.map((e => null == e ? null : "" + e)) : null == o ? o : "" + o)
    }
    return t
}
const Sl = Symbol("")
  , Tl = Symbol("")
  , El = Symbol("")
  , kl = Symbol("")
  , Ll = Symbol("");
function Ol() {
    let e = [];
    return {
        add: function(t) {
            return e.push(t),
            () => {
                const n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
        },
        list: () => e.slice(),
        reset: function() {
            e = []
        }
    }
}
function $l(e, t, n, o, r, i=e => e()) {
    const s = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
    return () => new Promise(( (a, l) => {
        const c = e => {
            var i;
            !1 === e ? l(ol(4, {
                from: n,
                to: t
            })) : e instanceof Error ? l(e) : "string" == typeof (i = e) || i && "object" == typeof i ? l(ol(2, {
                from: t,
                to: e
            })) : (s && o.enterCallbacks[r] === s && "function" == typeof e && s.push(e),
            a())
        }
          , u = i(( () => e.call(o && o.instances[r], t, n, c)));
        let d = Promise.resolve(u);
        e.length < 3 && (d = d.then(c)),
        d.catch((e => l(e)))
    }
    ))
}
function Pl(e, t, n, o, r=e => e()) {
    const i = [];
    for (const a of e)
        for (const e in a.components) {
            let l = a.components[e];
            if ("beforeRouteEnter" === t || a.instances[e])
                if ("object" == typeof (s = l) || "displayName"in s || "props"in s || "__vccOpts"in s) {
                    const s = (l.__vccOpts || l)[t];
                    s && i.push($l(s, n, o, a, e, r))
                } else {
                    let s = l();
                    i.push(( () => s.then((i => {
                        if (!i)
                            return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));
                        const s = (l = i).__esModule || "Module" === l[Symbol.toStringTag] ? i.default : i;
                        var l;
                        a.components[e] = s;
                        const c = (s.__vccOpts || s)[t];
                        return c && $l(c, n, o, a, e, r)()
                    }
                    ))))
                }
        }
    var s;
    return i
}
function Al(e) {
    const t = Jr(El)
      , n = Jr(kl)
      , o = as(( () => {
        const n = Dn(e.to);
        return t.resolve(n)
    }
    ))
      , r = as(( () => {
        const {matched: e} = o.value
          , {length: t} = e
          , r = e[t - 1]
          , i = n.matched;
        if (!r || !i.length)
            return -1;
        const s = i.findIndex(Ia.bind(null, r));
        if (s > -1)
            return s;
        const a = Il(e[t - 2]);
        return t > 1 && Il(r) === a && i[i.length - 1].path !== a ? i.findIndex(Ia.bind(null, e[t - 2])) : s
    }
    ))
      , i = as(( () => r.value > -1 && function(e, t) {
        for (const n in t) {
            const o = t[n]
              , r = e[n];
            if ("string" == typeof o) {
                if (o !== r)
                    return !1
            } else if (!da(r) || r.length !== o.length || o.some(( (e, t) => e !== r[t])))
                return !1
        }
        return !0
    }(n.params, o.value.params)))
      , s = as(( () => r.value > -1 && r.value === n.matched.length - 1 && Ma(n.params, o.value.params)));
    return {
        route: o,
        href: as(( () => o.value.href)),
        isActive: i,
        isExactActive: s,
        navigate: function(n={}) {
            return function(e) {
                if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                    return;
                if (e.defaultPrevented)
                    return;
                if (void 0 !== e.button && 0 !== e.button)
                    return;
                if (e.currentTarget && e.currentTarget.getAttribute) {
                    const t = e.currentTarget.getAttribute("target");
                    if (/\b_blank\b/i.test(t))
                        return
                }
                e.preventDefault && e.preventDefault();
                return !0
            }(n) ? t[Dn(e.replace) ? "replace" : "push"](Dn(e.to)).catch(ua) : Promise.resolve()
        }
    }
}
const Bl = Jo({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: Al,
    setup(e, {slots: t}) {
        const n = _n(Al(e))
          , {options: o} = Jr(El)
          , r = as(( () => ({
            [Ml(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
            [Ml(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        })));
        return () => {
            const o = t.default && t.default(n);
            return e.custom ? o : ls("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
            }, o)
        }
    }
});
function Il(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Ml = (e, t, n) => null != e ? e : null != t ? t : n;
function Nl(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return 1 === n.length ? n[0] : n
}
const Rl = Jo({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const o = Jr(Ll)
          , r = as(( () => e.route || o.value))
          , i = Jr(Tl, 0)
          , s = as(( () => {
            let e = Dn(i);
            const {matched: t} = r.value;
            let n;
            for (; (n = t[e]) && !n.components; )
                e++;
            return e
        }
        ))
          , a = as(( () => r.value.matched[s.value]));
        Xr(Tl, as(( () => s.value + 1))),
        Xr(Sl, a),
        Xr(Ll, r);
        const l = Nn();
        return Bo(( () => [l.value, a.value, e.name]), ( ([e,t,n], [o,r,i]) => {
            t && (t.instances[n] = e,
            r && r !== t && e && e === o && (t.leaveGuards.size || (t.leaveGuards = r.leaveGuards),
            t.updateGuards.size || (t.updateGuards = r.updateGuards))),
            !e || !t || r && Ia(t, r) && o || (t.enterCallbacks[n] || []).forEach((t => t(e)))
        }
        ), {
            flush: "post"
        }),
        () => {
            const o = r.value
              , i = e.name
              , s = a.value
              , c = s && s.components[i];
            if (!c)
                return Nl(n.default, {
                    Component: c,
                    route: o
                });
            const u = s.props[i]
              , d = u ? !0 === u ? o.params : "function" == typeof u ? u(o) : u : null
              , f = ls(c, la({}, d, t, {
                onVnodeUnmounted: e => {
                    e.component.isUnmounted && (s.instances[i] = null)
                }
                ,
                ref: l
            }));
            return Nl(n.default, {
                Component: f,
                route: o
            }) || f
        }
    }
});
function jl(e) {
    const t = hl(e.routes, e)
      , n = e.parseQuery || wl
      , o = e.stringifyQuery || xl
      , r = e.history
      , i = Ol()
      , s = Ol()
      , a = Ol()
      , l = Rn(ja);
    let c = ja;
    aa && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = ca.bind(null, (e => "" + e))
      , d = ca.bind(null, La)
      , f = ca.bind(null, Oa);
    function p(e, i) {
        if (i = la({}, i || l.value),
        "string" == typeof e) {
            const o = Aa(n, e, i.path)
              , s = t.resolve({
                path: o.path
            }, i)
              , a = r.createHref(o.fullPath);
            return la(o, s, {
                params: f(s.params),
                hash: Oa(o.hash),
                redirectedFrom: void 0,
                href: a
            })
        }
        let s;
        if (null != e.path)
            s = la({}, e, {
                path: Aa(n, e.path, i.path).path
            });
        else {
            const t = la({}, e.params);
            for (const e in t)
                null == t[e] && delete t[e];
            s = la({}, e, {
                params: d(t)
            }),
            i.params = d(i.params)
        }
        const a = t.resolve(s, i)
          , c = e.hash || "";
        a.params = u(f(a.params));
        const p = function(e, t) {
            const n = t.query ? e(t.query) : "";
            return t.path + (n && "?") + n + (t.hash || "")
        }(o, la({}, e, {
            hash: (h = c,
            Ea(h).replace(xa, "{").replace(Sa, "}").replace(_a, "^")),
            path: a.path
        }));
        var h;
        const m = r.createHref(p);
        return la({
            fullPath: p,
            hash: c,
            query: o === xl ? Cl(e.query) : e.query || {}
        }, a, {
            redirectedFrom: void 0,
            href: m
        })
    }
    function h(e) {
        return "string" == typeof e ? Aa(n, e, l.value.path) : la({}, e)
    }
    function m(e, t) {
        if (c !== e)
            return ol(8, {
                from: t,
                to: e
            })
    }
    function g(e) {
        return y(e)
    }
    function v(e) {
        const t = e.matched[e.matched.length - 1];
        if (t && t.redirect) {
            const {redirect: n} = t;
            let o = "function" == typeof n ? n(e) : n;
            return "string" == typeof o && (o = o.includes("?") || o.includes("#") ? o = h(o) : {
                path: o
            },
            o.params = {}),
            la({
                query: e.query,
                hash: e.hash,
                params: null != o.path ? {} : e.params
            }, o)
        }
    }
    function y(e, t) {
        const n = c = p(e)
          , r = l.value
          , i = e.state
          , s = e.force
          , a = !0 === e.replace
          , u = v(n);
        if (u)
            return y(la(h(u), {
                state: "object" == typeof u ? la({}, i, u.state) : i,
                force: s,
                replace: a
            }), t || n);
        const d = n;
        let f;
        return d.redirectedFrom = t,
        !s && function(e, t, n) {
            const o = t.matched.length - 1
              , r = n.matched.length - 1;
            return o > -1 && o === r && Ia(t.matched[o], n.matched[r]) && Ma(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
        }(o, r, n) && (f = ol(16, {
            to: d,
            from: r
        }),
        P(r, r, !0, !1)),
        (f ? Promise.resolve(f) : w(d, r)).catch((e => rl(e) ? rl(e, 2) ? e : $(e) : O(e, d, r))).then((e => {
            if (e) {
                if (rl(e, 2))
                    return y(la({
                        replace: a
                    }, h(e.to), {
                        state: "object" == typeof e.to ? la({}, i, e.to.state) : i,
                        force: s
                    }), t || d)
            } else
                e = C(d, r, !0, a, i);
            return x(d, r, e),
            e
        }
        ))
    }
    function b(e, t) {
        const n = m(e, t);
        return n ? Promise.reject(n) : Promise.resolve()
    }
    function _(e) {
        const t = I.values().next().value;
        return t && "function" == typeof t.runWithContext ? t.runWithContext(e) : e()
    }
    function w(e, t) {
        let n;
        const [o,r,a] = function(e, t) {
            const n = []
              , o = []
              , r = []
              , i = Math.max(t.matched.length, e.matched.length);
            for (let s = 0; s < i; s++) {
                const i = t.matched[s];
                i && (e.matched.find((e => Ia(e, i))) ? o.push(i) : n.push(i));
                const a = e.matched[s];
                a && (t.matched.find((e => Ia(e, a))) || r.push(a))
            }
            return [n, o, r]
        }(e, t);
        n = Pl(o.reverse(), "beforeRouteLeave", e, t);
        for (const i of o)
            i.leaveGuards.forEach((o => {
                n.push($l(o, e, t))
            }
            ));
        const l = b.bind(null, e, t);
        return n.push(l),
        N(n).then(( () => {
            n = [];
            for (const o of i.list())
                n.push($l(o, e, t));
            return n.push(l),
            N(n)
        }
        )).then(( () => {
            n = Pl(r, "beforeRouteUpdate", e, t);
            for (const o of r)
                o.updateGuards.forEach((o => {
                    n.push($l(o, e, t))
                }
                ));
            return n.push(l),
            N(n)
        }
        )).then(( () => {
            n = [];
            for (const o of a)
                if (o.beforeEnter)
                    if (da(o.beforeEnter))
                        for (const r of o.beforeEnter)
                            n.push($l(r, e, t));
                    else
                        n.push($l(o.beforeEnter, e, t));
            return n.push(l),
            N(n)
        }
        )).then(( () => (e.matched.forEach((e => e.enterCallbacks = {})),
        n = Pl(a, "beforeRouteEnter", e, t, _),
        n.push(l),
        N(n)))).then(( () => {
            n = [];
            for (const o of s.list())
                n.push($l(o, e, t));
            return n.push(l),
            N(n)
        }
        )).catch((e => rl(e, 8) ? e : Promise.reject(e)))
    }
    function x(e, t, n) {
        a.list().forEach((o => _(( () => o(e, t, n)))))
    }
    function C(e, t, n, o, i) {
        const s = m(e, t);
        if (s)
            return s;
        const a = t === ja
          , c = aa ? history.state : {};
        n && (o || a ? r.replace(e.fullPath, la({
            scroll: a && c && c.scroll
        }, i)) : r.push(e.fullPath, i)),
        l.value = e,
        P(e, t, n, a),
        $()
    }
    let S;
    function T() {
        S || (S = r.listen(( (e, t, n) => {
            if (!M.listening)
                return;
            const o = p(e)
              , i = v(o);
            if (i)
                return void y(la(i, {
                    replace: !0
                }), o).catch(ua);
            c = o;
            const s = l.value;
            var a, u;
            aa && (a = Ka(s.fullPath, n.delta),
            u = qa(),
            Ga.set(a, u)),
            w(o, s).catch((e => rl(e, 12) ? e : rl(e, 2) ? (y(e.to, o).then((e => {
                rl(e, 20) && !n.delta && n.type === Fa.pop && r.go(-1, !1)
            }
            )).catch(ua),
            Promise.reject()) : (n.delta && r.go(-n.delta, !1),
            O(e, o, s)))).then((e => {
                (e = e || C(o, s, !1)) && (n.delta && !rl(e, 8) ? r.go(-n.delta, !1) : n.type === Fa.pop && rl(e, 20) && r.go(-1, !1)),
                x(o, s, e)
            }
            )).catch(ua)
        }
        )))
    }
    let E, k = Ol(), L = Ol();
    function O(e, t, n) {
        $(e);
        const o = L.list();
        return o.length ? o.forEach((o => o(e, t, n))) : console.error(e),
        Promise.reject(e)
    }
    function $(e) {
        return E || (E = !e,
        T(),
        k.list().forEach(( ([t,n]) => e ? n(e) : t())),
        k.reset()),
        e
    }
    function P(t, n, o, r) {
        const {scrollBehavior: i} = e;
        if (!aa || !i)
            return Promise.resolve();
        const s = !o && function(e) {
            const t = Ga.get(e);
            return Ga.delete(e),
            t
        }(Ka(t.fullPath, 0)) || (r || !o) && history.state && history.state.scroll || null;
        return to().then(( () => i(t, n, s))).then((e => e && za(e))).catch((e => O(e, t, n)))
    }
    const A = e => r.go(e);
    let B;
    const I = new Set
      , M = {
        currentRoute: l,
        listening: !0,
        addRoute: function(e, n) {
            let o, r;
            return Qa(e) ? (o = t.getRecordMatcher(e),
            r = n) : r = e,
            t.addRoute(r, o)
        },
        removeRoute: function(e) {
            const n = t.getRecordMatcher(e);
            n && t.removeRoute(n)
        },
        clearRoutes: t.clearRoutes,
        hasRoute: function(e) {
            return !!t.getRecordMatcher(e)
        },
        getRoutes: function() {
            return t.getRoutes().map((e => e.record))
        },
        resolve: p,
        options: e,
        push: g,
        replace: function(e) {
            return g(la(h(e), {
                replace: !0
            }))
        },
        go: A,
        back: () => A(-1),
        forward: () => A(1),
        beforeEach: i.add,
        beforeResolve: s.add,
        afterEach: a.add,
        onError: L.add,
        isReady: function() {
            return E && l.value !== ja ? Promise.resolve() : new Promise(( (e, t) => {
                k.add([e, t])
            }
            ))
        },
        install(e) {
            e.component("RouterLink", Bl),
            e.component("RouterView", Rl),
            e.config.globalProperties.$router = this,
            Object.defineProperty(e.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => Dn(l)
            }),
            aa && !B && l.value === ja && (B = !0,
            g(r.location).catch((e => {}
            )));
            const t = {};
            for (const o in ja)
                Object.defineProperty(t, o, {
                    get: () => l.value[o],
                    enumerable: !0
                });
            e.provide(El, this),
            e.provide(kl, wn(t)),
            e.provide(Ll, l);
            const n = e.unmount;
            I.add(e),
            e.unmount = function() {
                I.delete(e),
                I.size < 1 && (c = ja,
                S && S(),
                S = null,
                l.value = ja,
                B = !1,
                E = !1),
                n()
            }
        }
    };
    function N(e) {
        return e.reduce(( (e, t) => e.then(( () => _(t)))), Promise.resolve())
    }
    return M
}
function Fl(e) {
    return Jr(kl)
}
const Dl = ["{", "}"];
const Vl = /^(?:\d)+/
  , Wl = /^(?:\w)+/;
const Hl = "zh-Hans"
  , Ul = "zh-Hant"
  , ql = "en"
  , zl = "fr"
  , Kl = "es"
  , Gl = Object.prototype.hasOwnProperty
  , Yl = (e, t) => Gl.call(e, t)
  , Xl = new class {
    constructor() {
        this._caches = Object.create(null)
    }
    interpolate(e, t, n=Dl) {
        if (!t)
            return [e];
        let o = this._caches[e];
        return o || (o = function(e, [t,n]) {
            const o = [];
            let r = 0
              , i = "";
            for (; r < e.length; ) {
                let s = e[r++];
                if (s === t) {
                    i && o.push({
                        type: "text",
                        value: i
                    }),
                    i = "";
                    let t = "";
                    for (s = e[r++]; void 0 !== s && s !== n; )
                        t += s,
                        s = e[r++];
                    const a = s === n
                      , l = Vl.test(t) ? "list" : a && Wl.test(t) ? "named" : "unknown";
                    o.push({
                        value: t,
                        type: l
                    })
                } else
                    i += s
            }
            return i && o.push({
                type: "text",
                value: i
            }),
            o
        }(e, n),
        this._caches[e] = o),
        function(e, t) {
            const n = [];
            let o = 0;
            const r = Array.isArray(t) ? "list" : (i = t,
            null !== i && "object" == typeof i ? "named" : "unknown");
            var i;
            if ("unknown" === r)
                return n;
            for (; o < e.length; ) {
                const i = e[o];
                switch (i.type) {
                case "text":
                    n.push(i.value);
                    break;
                case "list":
                    n.push(t[parseInt(i.value, 10)]);
                    break;
                case "named":
                    "named" === r && n.push(t[i.value])
                }
                o++
            }
            return n
        }(o, t)
    }
}
;
function Jl(e, t) {
    if (!e)
        return;
    if (e = e.trim().replace(/_/g, "-"),
    t && t[e])
        return e;
    if ("chinese" === (e = e.toLowerCase()))
        return Hl;
    if (0 === e.indexOf("zh"))
        return e.indexOf("-hans") > -1 ? Hl : e.indexOf("-hant") > -1 ? Ul : (n = e,
        ["-tw", "-hk", "-mo", "-cht"].find((e => -1 !== n.indexOf(e))) ? Ul : Hl);
    var n;
    let o = [ql, zl, Kl];
    t && Object.keys(t).length > 0 && (o = Object.keys(t));
    const r = function(e, t) {
        return t.find((t => 0 === e.indexOf(t)))
    }(e, o);
    return r || void 0
}
class Zl {
    constructor({locale: e, fallbackLocale: t, messages: n, watcher: o, formater: r}) {
        this.locale = ql,
        this.fallbackLocale = ql,
        this.message = {},
        this.messages = {},
        this.watchers = [],
        t && (this.fallbackLocale = t),
        this.formater = r || Xl,
        this.messages = n || {},
        this.setLocale(e || ql),
        o && this.watchLocale(o)
    }
    setLocale(e) {
        const t = this.locale;
        this.locale = Jl(e, this.messages) || this.fallbackLocale,
        this.messages[this.locale] || (this.messages[this.locale] = {}),
        this.message = this.messages[this.locale],
        t !== this.locale && this.watchers.forEach((e => {
            e(this.locale, t)
        }
        ))
    }
    getLocale() {
        return this.locale
    }
    watchLocale(e) {
        const t = this.watchers.push(e) - 1;
        return () => {
            this.watchers.splice(t, 1)
        }
    }
    add(e, t, n=!0) {
        const o = this.messages[e];
        o ? n ? Object.assign(o, t) : Object.keys(t).forEach((e => {
            Yl(o, e) || (o[e] = t[e])
        }
        )) : this.messages[e] = t
    }
    f(e, t, n) {
        return this.formater.interpolate(e, t, n).join("")
    }
    t(e, t, n) {
        let o = this.message;
        return "string" == typeof t ? (t = Jl(t, this.messages)) && (o = this.messages[t]) : n = t,
        Yl(o, e) ? this.formater.interpolate(o[e], n).join("") : (console.warn(`Cannot translate the value of keypath ${e}. Use the value of keypath as default.`),
        e)
    }
}
function Ql(e, t={}, n, o) {
    if ("string" != typeof e) {
        const n = [t, e];
        e = n[0],
        t = n[1]
    }
    "string" != typeof e && (e = "undefined" != typeof uni && Md ? Md() : "undefined" != typeof global && global.getLocale ? global.getLocale() : ql),
    "string" != typeof n && (n = "undefined" != typeof __uniConfig && __uniConfig.fallbackLocale || ql);
    const r = new Zl({
        locale: e,
        fallbackLocale: n,
        messages: t,
        watcher: o
    });
    let i = (e, t) => {
        {
            let e = !1;
            i = function(t, n) {
                const o = Rp().$vm;
                return o && (o.$locale,
                e || (e = !0,
                function(e, t) {
                    e.$watchLocale ? e.$watchLocale((e => {
                        t.setLocale(e)
                    }
                    )) : e.$watch(( () => e.$locale), (e => {
                        t.setLocale(e)
                    }
                    ))
                }(o, r))),
                r.t(t, n)
            }
        }
        return i(e, t)
    }
    ;
    return {
        i18n: r,
        f: (e, t, n) => r.f(e, t, n),
        t: (e, t) => i(e, t),
        add: (e, t, n=!0) => r.add(e, t, n),
        watch: e => r.watchLocale(e),
        getLocale: () => r.getLocale(),
        setLocale: e => r.setLocale(e)
    }
}
const ec = qe(( () => "undefined" != typeof __uniConfig && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length));
let tc;
function nc() {
    if (!tc) {
        let e;
        if (e = navigator.cookieEnabled && window.localStorage && localStorage[ie] || __uniConfig.locale || navigator.language,
        tc = Ql(e),
        ec()) {
            const t = Object.keys(__uniConfig.locales || {});
            t.length && t.forEach((e => tc.add(e, __uniConfig.locales[e]))),
            tc.setLocale(e)
        }
    }
    return tc
}
function oc(e, t, n) {
    return t.reduce(( (t, o, r) => (t[e + o] = n[r],
    t)), {})
}
const rc = qe(( () => {
    const e = "uni.async."
      , t = ["error"];
    nc().add(ql, oc(e, t, ["The connection timed out, click the screen to try again."]), !1),
    nc().add(Kl, oc(e, t, ["Se agotó el tiempo de conexión, haga clic en la pantalla para volver a intentarlo."]), !1),
    nc().add(zl, oc(e, t, ["La connexion a expiré, cliquez sur l'écran pour réessayer."]), !1),
    nc().add(Hl, oc(e, t, ["连接服务器超时，点击屏幕重试"]), !1),
    nc().add(Ul, oc(e, t, ["連接服務器超時，點擊屏幕重試"]), !1)
}
))
  , ic = qe(( () => {
    const e = "uni.showToast."
      , t = ["unpaired"];
    nc().add(ql, oc(e, t, ["Please note showToast must be paired with hideToast"]), !1),
    nc().add(Kl, oc(e, t, ["Tenga en cuenta que showToast debe estar emparejado con hideToast"]), !1),
    nc().add(zl, oc(e, t, ["Veuillez noter que showToast doit être associé à hideToast"]), !1),
    nc().add(Hl, oc(e, t, ["请注意 showToast 与 hideToast 必须配对使用"]), !1),
    nc().add(Ul, oc(e, t, ["請注意 showToast 與 hideToast 必須配對使用"]), !1)
}
))
  , sc = qe(( () => {
    const e = "uni.showLoading."
      , t = ["unpaired"];
    nc().add(ql, oc(e, t, ["Please note showLoading must be paired with hideLoading"]), !1),
    nc().add(Kl, oc(e, t, ["Tenga en cuenta que showLoading debe estar emparejado con hideLoading"]), !1),
    nc().add(zl, oc(e, t, ["Veuillez noter que showLoading doit être associé à hideLoading"]), !1),
    nc().add(Hl, oc(e, t, ["请注意 showLoading 与 hideLoading 必须配对使用"]), !1),
    nc().add(Ul, oc(e, t, ["請注意 showLoading 與 hideLoading 必須配對使用"]), !1)
}
))
  , ac = qe(( () => {
    const e = "uni.showModal."
      , t = ["cancel", "confirm"];
    nc().add(ql, oc(e, t, ["Cancel", "OK"]), !1),
    nc().add(Kl, oc(e, t, ["Cancelar", "OK"]), !1),
    nc().add(zl, oc(e, t, ["Annuler", "OK"]), !1),
    nc().add(Hl, oc(e, t, ["取消", "确定"]), !1),
    nc().add(Ul, oc(e, t, ["取消", "確定"]), !1)
}
));
function lc(e) {
    const t = new ct;
    return {
        on: (e, n) => t.on(e, n),
        once: (e, n) => t.once(e, n),
        off: (e, n) => t.off(e, n),
        emit: (e, ...n) => t.emit(e, ...n),
        subscribe(n, o, r=!1) {
            t[r ? "once" : "on"](`${e}.${n}`, o)
        },
        unsubscribe(n, o) {
            t.off(`${e}.${n}`, o)
        },
        subscribeHandler(n, o, r) {
            t.emit(`${e}.${n}`, o, r)
        }
    }
}
const cc = "invokeViewApi"
  , uc = "invokeServiceApi";
let dc = 1;
const fc = Object.create(null);
function pc(e, t) {
    return e + "." + t
}
function hc({id: e, name: t, args: n}, o) {
    t = pc(o, t);
    const r = t => {
        e && nm.publishHandler(cc + "." + e, t)
    }
      , i = fc[t];
    i ? i(n, r) : r({})
}
const mc = c(lc("service"), {
    invokeServiceMethod: (e, t, n) => {
        const {subscribe: o, publishHandler: r} = nm
          , i = n ? dc++ : 0;
        n && o(uc + "." + i, n, !0),
        r(uc, {
            id: i,
            name: e,
            args: t
        })
    }
})
  , gc = 350
  , vc = 10
  , yc = Xe(!0);
let bc;
function _c() {
    bc && (clearTimeout(bc),
    bc = null)
}
let wc = 0
  , xc = 0;
function Cc(e) {
    if (_c(),
    1 !== e.touches.length)
        return;
    const {pageX: t, pageY: n} = e.touches[0];
    wc = t,
    xc = n,
    bc = setTimeout((function() {
        const t = new CustomEvent("longpress",{
            bubbles: !0,
            cancelable: !0,
            target: e.target,
            currentTarget: e.currentTarget
        });
        t.touches = e.touches,
        t.changedTouches = e.changedTouches,
        e.target.dispatchEvent(t)
    }
    ), gc)
}
function Sc(e) {
    if (!bc)
        return;
    if (1 !== e.touches.length)
        return _c();
    const {pageX: t, pageY: n} = e.touches[0];
    return Math.abs(t - wc) > vc || Math.abs(n - xc) > vc ? _c() : void 0
}
function Tc(e, t) {
    const n = Number(e);
    return isNaN(n) ? t : n
}
function Ec() {
    const e = __uniConfig.globalStyle || {}
      , t = Tc(e.rpxCalcMaxDeviceWidth, 960)
      , n = Tc(e.rpxCalcBaseDeviceWidth, 375);
    function o() {
        let e = function() {
            const e = /^Apple/.test(navigator.vendor) && "number" == typeof window.orientation
              , t = e && 90 === Math.abs(window.orientation);
            var n = e ? Math[t ? "max" : "min"](screen.width, screen.height) : screen.width;
            return Math.min(window.innerWidth, document.documentElement.clientWidth, n) || n
        }();
        e = e <= t ? e : n,
        document.documentElement.style.fontSize = e / 23.4375 + "px"
    }
    o(),
    document.addEventListener("DOMContentLoaded", o),
    window.addEventListener("load", o),
    window.addEventListener("resize", o)
}
function kc() {
    Ec(),
    Ke(),
    window.addEventListener("touchstart", Cc, yc),
    window.addEventListener("touchmove", Sc, yc),
    window.addEventListener("touchend", _c, yc),
    window.addEventListener("touchcancel", _c, yc)
}
function Lc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Oc, $c, Pc = ["top", "left", "right", "bottom"], Ac = {};
function Bc() {
    return $c = "CSS"in window && "function" == typeof CSS.supports ? CSS.supports("top: env(safe-area-inset-top)") ? "env" : CSS.supports("top: constant(safe-area-inset-top)") ? "constant" : "" : ""
}
function Ic() {
    if ($c = "string" == typeof $c ? $c : Bc()) {
        var e = []
          , t = !1;
        try {
            var n = Object.defineProperty({}, "passive", {
                get: function() {
                    t = {
                        passive: !0
                    }
                }
            });
            window.addEventListener("test", null, n)
        } catch (a) {}
        var o = document.createElement("div");
        r(o, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "0",
            height: "0",
            zIndex: "-1",
            overflow: "hidden",
            visibility: "hidden"
        }),
        Pc.forEach((function(e) {
            s(o, e)
        }
        )),
        document.body.appendChild(o),
        i(),
        Oc = !0
    } else
        Pc.forEach((function(e) {
            Ac[e] = 0
        }
        ));
    function r(e, t) {
        var n = e.style;
        Object.keys(t).forEach((function(e) {
            var o = t[e];
            n[e] = o
        }
        ))
    }
    function i(t) {
        t ? e.push(t) : e.forEach((function(e) {
            e()
        }
        ))
    }
    function s(e, n) {
        var o = document.createElement("div")
          , s = document.createElement("div")
          , a = document.createElement("div")
          , l = document.createElement("div")
          , c = {
            position: "absolute",
            width: "100px",
            height: "200px",
            boxSizing: "border-box",
            overflow: "hidden",
            paddingBottom: $c + "(safe-area-inset-" + n + ")"
        };
        r(o, c),
        r(s, c),
        r(a, {
            transition: "0s",
            animation: "none",
            width: "400px",
            height: "400px"
        }),
        r(l, {
            transition: "0s",
            animation: "none",
            width: "250%",
            height: "250%"
        }),
        o.appendChild(a),
        s.appendChild(l),
        e.appendChild(o),
        e.appendChild(s),
        i((function() {
            o.scrollTop = s.scrollTop = 1e4;
            var e = o.scrollTop
              , r = s.scrollTop;
            function i() {
                this.scrollTop !== (this === o ? e : r) && (o.scrollTop = s.scrollTop = 1e4,
                e = o.scrollTop,
                r = s.scrollTop,
                function(e) {
                    Nc.length || setTimeout((function() {
                        var e = {};
                        Nc.forEach((function(t) {
                            e[t] = Ac[t]
                        }
                        )),
                        Nc.length = 0,
                        Rc.forEach((function(t) {
                            t(e)
                        }
                        ))
                    }
                    ), 0);
                    Nc.push(e)
                }(n))
            }
            o.addEventListener("scroll", i, t),
            s.addEventListener("scroll", i, t)
        }
        ));
        var u = getComputedStyle(o);
        Object.defineProperty(Ac, n, {
            configurable: !0,
            get: function() {
                return parseFloat(u.paddingBottom)
            }
        })
    }
}
function Mc(e) {
    return Oc || Ic(),
    Ac[e]
}
var Nc = [];
var Rc = [];
const jc = Lc({
    get support() {
        return 0 != ("string" == typeof $c ? $c : Bc()).length
    },
    get top() {
        return Mc("top")
    },
    get left() {
        return Mc("left")
    },
    get right() {
        return Mc("right")
    },
    get bottom() {
        return Mc("bottom")
    },
    onChange: function(e) {
        Bc() && (Oc || Ic(),
        "function" == typeof e && Rc.push(e))
    },
    offChange: function(e) {
        var t = Rc.indexOf(e);
        t >= 0 && Rc.splice(t, 1)
    }
})
  , Fc = oa(( () => {}
), ["prevent"])
  , Dc = oa((e => {}
), ["stop"]);
function Vc(e, t) {
    return parseInt((e.getPropertyValue(t).match(/\d+/) || ["0"])[0])
}
function Wc() {
    const e = Vc(document.documentElement.style, "--window-top");
    return e ? e + jc.top : 0
}
function Hc(e) {
    const t = document.documentElement.style;
    Object.keys(e).forEach((n => {
        t.setProperty(n, e[n])
    }
    ))
}
function Uc(e) {
    return Symbol(e)
}
const qc = "M1.952 18.080q-0.32-0.352-0.416-0.88t0.128-0.976l0.16-0.352q0.224-0.416 0.64-0.528t0.8 0.176l6.496 4.704q0.384 0.288 0.912 0.272t0.88-0.336l17.312-14.272q0.352-0.288 0.848-0.256t0.848 0.352l-0.416-0.416q0.32 0.352 0.32 0.816t-0.32 0.816l-18.656 18.912q-0.32 0.352-0.8 0.352t-0.8-0.32l-7.936-8.064z"
  , zc = "M15.808 0.16q-4.224 0-7.872 2.176-3.552 2.112-5.632 5.728-2.144 3.744-2.144 8.128 0 4.192 2.144 7.872 2.112 3.52 5.632 5.632 3.68 2.144 7.872 2.144 4.384 0 8.128-2.144 3.616-2.080 5.728-5.632 2.176-3.648 2.176-7.872 0-4.384-2.176-8.128-2.112-3.616-5.728-5.728-3.744-2.176-8.128-2.176zM15.136 8.672h1.728q0.128 0 0.224 0.096t0.096 0.256l-0.384 10.24q0 0.064-0.048 0.112t-0.112 0.048h-1.248q-0.096 0-0.144-0.048t-0.048-0.112l-0.384-10.24q0-0.16 0.096-0.256t0.224-0.096zM16 23.328q-0.48 0-0.832-0.352t-0.352-0.848 0.352-0.848 0.832-0.352 0.832 0.352 0.352 0.848-0.352 0.848-0.832 0.352z"
  , Kc = "M21.781 7.844l-9.063 8.594 9.063 8.594q0.25 0.25 0.25 0.609t-0.25 0.578q-0.25 0.25-0.578 0.25t-0.578-0.25l-9.625-9.125q-0.156-0.125-0.203-0.297t-0.047-0.359q0-0.156 0.047-0.328t0.203-0.297l9.625-9.125q0.25-0.25 0.578-0.25t0.578 0.25q0.25 0.219 0.25 0.578t-0.25 0.578z";
function Gc(e, t="#000", n=27) {
    return Ri("svg", {
        width: n,
        height: n,
        viewBox: "0 0 32 32"
    }, [Ri("path", {
        d: e,
        fill: t
    }, null, 8, ["d", "fill"])], 8, ["width", "height"])
}
function Yc() {
    const e = fp()
      , t = e.length;
    if (t)
        return e[t - 1]
}
function Xc() {
    const e = Yc();
    if (e)
        return e.$page.meta
}
function Jc() {
    const e = Xc();
    return e ? e.id : -1
}
function Zc() {
    const e = Yc();
    if (e)
        return e.$vm
}
const Qc = ["navigationBar", "pullToRefresh"];
function eu(e, t) {
    const n = JSON.parse(JSON.stringify(__uniConfig.globalStyle || {}))
      , o = c({
        id: t
    }, n, e);
    Qc.forEach((t => {
        o[t] = c({}, n[t], e[t])
    }
    ));
    const {navigationBar: r} = o;
    return r.titleText && r.titleImage && (r.titleText = ""),
    o
}
function tu(e, t, n) {
    if (v(e))
        n = t,
        t = e,
        e = Zc();
    else if ("number" == typeof e) {
        const t = fp().find((t => t.$page.id === e));
        e = t ? t.$vm : Zc()
    }
    if (!e)
        return;
    const o = e.$[t];
    return o && He(o, n)
}
function nu(e) {
    e.preventDefault()
}
let ou, ru = 0;
function iu({onPageScroll: e, onReachBottom: t, onReachBottomDistance: n}) {
    let o = !1
      , r = !1
      , i = !0;
    const s = () => {
        function s() {
            if (( () => {
                const {scrollHeight: e} = document.documentElement
                  , t = window.innerHeight
                  , o = window.scrollY
                  , i = o > 0 && e > t && o + t + n >= e
                  , s = Math.abs(e - ru) > n;
                return !i || r && !s ? (!i && r && (r = !1),
                !1) : (ru = e,
                r = !0,
                !0)
            }
            )())
                return t && t(),
                i = !1,
                setTimeout((function() {
                    i = !0
                }
                ), 350),
                !0
        }
        e && e(window.pageYOffset),
        t && i && (s() || (ou = setTimeout(s, 300))),
        o = !1
    }
    ;
    return function() {
        clearTimeout(ou),
        o || requestAnimationFrame(s),
        o = !0
    }
}
function su(e, t) {
    if (0 === t.indexOf("/"))
        return t;
    if (0 === t.indexOf("./"))
        return su(e, t.slice(2));
    const n = t.split("/")
      , o = n.length;
    let r = 0;
    for (; r < o && ".." === n[r]; r++)
        ;
    n.splice(0, r),
    t = n.join("/");
    const i = e.length > 0 ? e.split("/") : [];
    return i.splice(i.length - r - 1, r + 1),
    We(i.concat(n).join("/"))
}
function au(e, t=!1) {
    return t ? __uniRoutes.find((t => t.path === e || t.alias === e)) : __uniRoutes.find((t => t.path === e))
}
class lu {
    constructor(e) {
        this.$bindClass = !1,
        this.$bindStyle = !1,
        this.$vm = e,
        this.$el = function(e, t=!1) {
            const {vnode: n} = e;
            if (je(n.el))
                return t ? n.el ? [n.el] : [] : n.el;
            const {subTree: o} = e;
            if (16 & o.shapeFlag) {
                const e = o.children.filter((e => e.el && je(e.el)));
                if (e.length > 0)
                    return t ? e.map((e => e.el)) : e[0].el
            }
            return t ? n.el ? [n.el] : [] : n.el
        }(e.$),
        this.$el.getAttribute && (this.$bindClass = !!this.$el.getAttribute("class"),
        this.$bindStyle = !!this.$el.getAttribute("style"))
    }
    selectComponent(e) {
        if (!this.$el || !e)
            return;
        const t = fu(this.$el.querySelector(e));
        return t ? cu(t, !1) : void 0
    }
    selectAllComponents(e) {
        if (!this.$el || !e)
            return [];
        const t = []
          , n = this.$el.querySelectorAll(e);
        for (let o = 0; o < n.length; o++) {
            const e = fu(n[o]);
            e && t.push(cu(e, !1))
        }
        return t
    }
    forceUpdate(e) {
        "class" === e ? this.$bindClass ? (this.$el.__wxsClassChanged = !0,
        this.$vm.$forceUpdate()) : this.updateWxsClass() : "style" === e && (this.$bindStyle ? (this.$el.__wxsStyleChanged = !0,
        this.$vm.$forceUpdate()) : this.updateWxsStyle())
    }
    updateWxsClass() {
        const {__wxsAddClass: e} = this.$el;
        e.length && (this.$el.className = e.join(" "))
    }
    updateWxsStyle() {
        const {__wxsStyle: e} = this.$el;
        e && this.$el.setAttribute("style", function(e) {
            let t = "";
            if (!e || v(e))
                return t;
            for (const n in e) {
                const o = e[n]
                  , r = n.startsWith("--") ? n : P(n);
                (v(o) || "number" == typeof o) && (t += `${r}:${o};`)
            }
            return t
        }(e))
    }
    setStyle(e) {
        return this.$el && e ? (v(e) && (e = q(e)),
        S(e) && (this.$el.__wxsStyle = e,
        this.forceUpdate("style")),
        this) : this
    }
    addClass(e) {
        if (!this.$el || !e)
            return this;
        const t = this.$el.__wxsAddClass || (this.$el.__wxsAddClass = []);
        return -1 === t.indexOf(e) && (t.push(e),
        this.forceUpdate("class")),
        this
    }
    removeClass(e) {
        if (!this.$el || !e)
            return this;
        const {__wxsAddClass: t} = this.$el;
        if (t) {
            const n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        const n = this.$el.__wxsRemoveClass || (this.$el.__wxsRemoveClass = []);
        return -1 === n.indexOf(e) && (n.push(e),
        this.forceUpdate("class")),
        this
    }
    hasClass(e) {
        return this.$el && this.$el.classList.contains(e)
    }
    getDataset() {
        return this.$el && this.$el.dataset
    }
    callMethod(e, t={}) {
        const n = this.$vm[e];
        g(n) ? n(JSON.parse(JSON.stringify(t))) : this.$vm.ownerId && nm.publishHandler("onWxsInvokeCallMethod", {
            nodeId: this.$el.__id,
            ownerId: this.$vm.ownerId,
            method: e,
            args: t
        })
    }
    requestAnimationFrame(e) {
        return window.requestAnimationFrame(e)
    }
    getState() {
        return this.$el && (this.$el.__wxsState || (this.$el.__wxsState = {}))
    }
    triggerEvent(e, t={}) {
        return this.$vm.$emit(e, t),
        this
    }
    getComputedStyle(e) {
        if (this.$el) {
            const t = window.getComputedStyle(this.$el);
            return e && e.length ? e.reduce(( (e, n) => (e[n] = t[n],
            e)), {}) : t
        }
        return {}
    }
    setTimeout(e, t) {
        return window.setTimeout(e, t)
    }
    clearTimeout(e) {
        return window.clearTimeout(e)
    }
    getBoundingClientRect() {
        return this.$el.getBoundingClientRect()
    }
}
function cu(e, t=!0) {
    if (t && e && (e = Re(e.$)),
    e && e.$el)
        return e.$el.__wxsComponentDescriptor || (e.$el.__wxsComponentDescriptor = new lu(e)),
        e.$el.__wxsComponentDescriptor
}
function uu(e, t) {
    return cu(e, t)
}
function du(e, t, n, o=!0) {
    if (t) {
        e.__instance || (e.__instance = !0,
        Object.defineProperty(e, "instance", {
            get: () => uu(n.proxy, !1)
        }));
        const r = function(e, t, n=!0) {
            if (!t)
                return !1;
            if (n && e.length < 2)
                return !1;
            const o = Re(t);
            if (!o)
                return !1;
            const r = o.$.type;
            return !(!r.$wxs && !r.$renderjs) && o
        }(t, n, o);
        if (r)
            return [e, uu(r, !1)]
    }
}
function fu(e) {
    if (e)
        return e.__vueParentComponent && e.__vueParentComponent.proxy
}
function pu(e, t=!1) {
    const {type: n, timeStamp: o, target: r, currentTarget: i} = e;
    let s, a;
    s = Je(t ? r : function(e) {
        for (; e && 0 !== e.tagName.indexOf("UNI-"); )
            e = e.parentElement;
        return e
    }(r)),
    a = Je(i);
    const l = {
        type: n,
        timeStamp: o,
        target: s,
        detail: {},
        currentTarget: a
    };
    return e._stopped && (l._stopped = !0),
    e.type.startsWith("touch") && (l.touches = e.touches,
    l.changedTouches = e.changedTouches),
    function(e, t) {
        c(e, {
            preventDefault: () => t.preventDefault(),
            stopPropagation: () => t.stopPropagation()
        })
    }(l, e),
    l
}
function hu(e, t) {
    return {
        force: 1,
        identifier: 0,
        clientX: e.clientX,
        clientY: e.clientY - t,
        pageX: e.pageX,
        pageY: e.pageY - t
    }
}
function mu(e, t) {
    const n = [];
    for (let o = 0; o < e.length; o++) {
        const {identifier: r, pageX: i, pageY: s, clientX: a, clientY: l, force: c} = e[o];
        n.push({
            identifier: r,
            pageX: i,
            pageY: s - t,
            clientX: a,
            clientY: l - t,
            force: c || 0
        })
    }
    return n
}
const gu = Object.defineProperty({
    __proto__: null,
    $nne: function(e, t, n) {
        const {currentTarget: o} = e;
        if (!(e instanceof Event && o instanceof HTMLElement))
            return [e];
        const r = 0 !== o.tagName.indexOf("UNI-");
        if (r)
            return du(e, t, n, !1) || [e];
        const i = pu(e, r);
        if ("click" === e.type)
            !function(e, t) {
                const {x: n, y: o} = t
                  , r = Wc();
                e.detail = {
                    x: n,
                    y: o - r
                },
                e.touches = e.changedTouches = [hu(t, r)]
            }(i, e);
        else if ((e => 0 === e.type.indexOf("mouse") || ["contextmenu"].includes(e.type))(e))
            !function(e, t) {
                const n = Wc();
                e.pageX = t.pageX,
                e.pageY = t.pageY - n,
                e.clientX = t.clientX,
                e.clientY = t.clientY - n,
                e.touches = e.changedTouches = [hu(t, n)]
            }(i, e);
        else if ((e => "undefined" != typeof TouchEvent && e instanceof TouchEvent || 0 === e.type.indexOf("touch") || ["longpress"].indexOf(e.type) >= 0)(e)) {
            const t = Wc();
            i.touches = mu(e.touches, t),
            i.changedTouches = mu(e.changedTouches, t)
        } else if ((e => !e.type.indexOf("key") && e instanceof KeyboardEvent)(e)) {
            ["key", "code"].forEach((t => {
                Object.defineProperty(i, t, {
                    get: () => e[t]
                })
            }
            ))
        }
        return du(i, t, n) || [i]
    },
    createNativeEvent: pu
}, Symbol.toStringTag, {
    value: "Module"
});
function vu(e) {
    !function(e) {
        const t = e.globalProperties;
        c(t, gu),
        t.$gcd = uu
    }(e._context.config)
}
let yu = 1;
function bu(e) {
    return (e || Jc()) + "." + cc
}
const _u = c(lc("view"), {
    invokeOnCallback: (e, t) => om.emit("api." + e, t),
    invokeViewMethod: (e, t, n, o) => {
        const {subscribe: r, publishHandler: i} = om
          , s = o ? yu++ : 0;
        o && r(cc + "." + s, o, !0),
        i(bu(n), {
            id: s,
            name: e,
            args: t
        }, n)
    }
    ,
    invokeViewMethodKeepAlive: (e, t, n, o) => {
        const {subscribe: r, unsubscribe: i, publishHandler: s} = om
          , a = yu++
          , l = cc + "." + a;
        return r(l, n),
        s(bu(o), {
            id: a,
            name: e,
            args: t
        }, o),
        () => {
            i(l)
        }
    }
});
function wu(e) {
    tu(Yc(), be, e),
    om.invokeOnCallback("onWindowResize", e)
}
function xu(e) {
    const t = Yc();
    tu(Rp(), ce, e),
    tu(t, ce)
}
function Cu() {
    tu(Rp(), ue),
    tu(Yc(), ue)
}
const Su = [we, Ce];
function Tu() {
    Su.forEach((e => om.subscribe(e, function(e) {
        return (t, n) => {
            tu(parseInt(n), e, t)
        }
    }(e))))
}
function Eu() {
    !function() {
        const {on: e} = om;
        e(be, wu),
        e(Ie, xu),
        e(Me, Cu)
    }(),
    Tu()
}
function ku() {
    if (this.$route) {
        const e = this.$route.meta;
        return e.eventChannel || (e.eventChannel = new ot(this.$page.id)),
        e.eventChannel
    }
}
function Lu(e) {
    e._context.config.globalProperties.getOpenerEventChannel = ku
}
function Ou() {
    return {
        path: "",
        query: {},
        scene: 1001,
        referrerInfo: {
            appId: "",
            extraData: {}
        }
    }
}
function $u(e) {
    return /^-?\d+[ur]px$/i.test(e) ? e.replace(/(^-?\d+)[ur]px$/i, ( (e, t) => `${Id(parseFloat(t))}px`)) : /^-?[\d\.]+$/.test(e) ? `${e}px` : e || ""
}
function Pu(e) {
    const t = e.animation;
    if (!t || !t.actions || !t.actions.length)
        return;
    let n = 0;
    const o = t.actions
      , r = t.actions.length;
    function i() {
        const t = o[n]
          , s = t.option.transition
          , a = function(e) {
            const t = ["matrix", "matrix3d", "scale", "scale3d", "rotate3d", "skew", "translate", "translate3d"]
              , n = ["scaleX", "scaleY", "scaleZ", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "translateX", "translateY", "translateZ"]
              , o = ["opacity", "background-color"]
              , r = ["width", "height", "left", "right", "top", "bottom"]
              , i = e.animates
              , s = e.option
              , a = s.transition
              , l = {}
              , c = [];
            return i.forEach((e => {
                let i = e.type
                  , s = [...e.args];
                if (t.concat(n).includes(i))
                    i.startsWith("rotate") || i.startsWith("skew") ? s = s.map((e => parseFloat(e) + "deg")) : i.startsWith("translate") && (s = s.map($u)),
                    n.indexOf(i) >= 0 && (s.length = 1),
                    c.push(`${i}(${s.join(",")})`);
                else if (o.concat(r).includes(s[0])) {
                    i = s[0];
                    const e = s[1];
                    l[i] = r.includes(i) ? $u(e) : e
                }
            }
            )),
            l.transform = l.webkitTransform = c.join(" "),
            l.transition = l.webkitTransition = Object.keys(l).map((e => `${function(e) {
                return e.replace(/[A-Z]/g, (e => `-${e.toLowerCase()}`)).replace("webkit", "-webkit")
            }(e)} ${a.duration}ms ${a.timingFunction} ${a.delay}ms`)).join(","),
            l.transformOrigin = l.webkitTransformOrigin = s.transformOrigin,
            l
        }(t);
        Object.keys(a).forEach((t => {
            e.$el.style[t] = a[t]
        }
        )),
        n += 1,
        n < r && setTimeout(i, s.duration + s.delay)
    }
    setTimeout(( () => {
        i()
    }
    ), 0)
}
const Au = {
    props: ["animation"],
    watch: {
        animation: {
            deep: !0,
            handler() {
                Pu(this)
            }
        }
    },
    mounted() {
        Pu(this)
    }
}
  , Bu = e => {
    e.__reserved = !0;
    const {props: t, mixins: n} = e;
    return t && t.animation || (n || (e.mixins = [])).push(Au),
    Iu(e)
}
  , Iu = e => (e.__reserved = !0,
e.compatConfig = {
    MODE: 3
},
Jo(e));
function Mu(e) {
    return e.__wwe = !0,
    e
}
function Nu(e, t) {
    return (n, o, r) => {
        e.value && t(n, function(e, t, n, o) {
            let r;
            return r = Je(n),
            {
                type: o.type || e,
                timeStamp: t.timeStamp || 0,
                target: r,
                currentTarget: r,
                detail: o
            }
        }(n, o, e.value, r || {}))
    }
}
const Ru = {
    hoverClass: {
        type: String,
        default: "none"
    },
    hoverStopPropagation: {
        type: Boolean,
        default: !1
    },
    hoverStartTime: {
        type: [Number, String],
        default: 50
    },
    hoverStayTime: {
        type: [Number, String],
        default: 400
    }
};
const ju = Uc("uf");
function Fu(e) {
    const {base: t} = __uniConfig.router;
    return 0 === We(e).indexOf(t) ? We(e) : t + e
}
function Du(e) {
    const {base: t, assets: n} = __uniConfig.router;
    if ("./" === t && (0 !== e.indexOf("./") || !e.includes("/static/") && 0 !== e.indexOf("./" + (n || "assets") + "/") || (e = e.slice(1))),
    0 === e.indexOf("/")) {
        if (0 !== e.indexOf("//"))
            return Fu(e.slice(1));
        e = "https:" + e
    }
    if (se.test(e) || ae.test(e) || 0 === e.indexOf("blob:"))
        return e;
    const o = fp();
    return o.length ? Fu(su(o[o.length - 1].$page.route, e).slice(1)) : e
}
const Vu = navigator.userAgent
  , Wu = /android/i.test(Vu)
  , Hu = /iphone|ipad|ipod/i.test(Vu)
  , Uu = Vu.match(/Windows NT ([\d|\d.\d]*)/i)
  , qu = /Macintosh|Mac/i.test(Vu)
  , zu = /Linux|X11/i.test(Vu)
  , Ku = qu && navigator.maxTouchPoints > 0;
function Gu() {
    return /^Apple/.test(navigator.vendor) && "number" == typeof window.orientation
}
function Yu(e) {
    return e && 90 === Math.abs(window.orientation)
}
function Xu(e, t) {
    return e ? Math[t ? "max" : "min"](screen.width, screen.height) : screen.width
}
function Ju(e) {
    return Math.min(window.innerWidth, document.documentElement.clientWidth, e) || e
}
const Zu = ["GET", "OPTIONS", "HEAD", "POST", "PUT", "DELETE", "TRACE", "CONNECT", "PATCH"];
function Qu(e, t) {
    return e && -1 !== t.indexOf(e) ? e : t[0]
}
function ed(e) {
    return function() {
        try {
            return e.apply(e, arguments)
        } catch (t) {
            console.error(t)
        }
    }
}
let td = 1;
const nd = {};
function od(e, t, n) {
    if ("number" == typeof e) {
        const o = nd[e];
        if (o)
            return o.keepAlive || delete nd[e],
            o.callback(t, n)
    }
    return t
}
const rd = "success"
  , id = "fail"
  , sd = "complete";
function ad(e, t={}, {beforeAll: n, beforeSuccess: o}={}) {
    S(t) || (t = {});
    const {success: r, fail: i, complete: s} = function(e) {
        const t = {};
        for (const n in e) {
            const o = e[n];
            g(o) && (t[n] = ed(o),
            delete e[n])
        }
        return t
    }(t)
      , a = g(r)
      , l = g(i)
      , c = g(s)
      , u = td++;
    return function(e, t, n, o=!1) {
        nd[e] = {
            name: t,
            keepAlive: o,
            callback: n
        }
    }(u, e, (u => {
        (u = u || {}).errMsg = function(e, t) {
            return e && -1 !== e.indexOf(":fail") ? t + e.substring(e.indexOf(":fail")) : t + ":ok"
        }(u.errMsg, e),
        g(n) && n(u),
        u.errMsg === e + ":ok" ? (g(o) && o(u, t),
        a && r(u)) : l && i(u),
        c && s(u)
    }
    )),
    u
}
const ld = "success"
  , cd = "fail"
  , ud = "complete"
  , dd = {}
  , fd = {};
function pd(e, t) {
    return function(n) {
        return e(n, t) || n
    }
}
function hd(e, t, n) {
    let o = !1;
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        if (o)
            o = Promise.resolve(pd(i, n));
        else {
            const e = i(t, n);
            if (_(e) && (o = Promise.resolve(e)),
            !1 === e)
                return {
                    then() {},
                    catch() {}
                }
        }
    }
    return o || {
        then: e => e(t),
        catch() {}
    }
}
function md(e, t={}) {
    return [ld, cd, ud].forEach((n => {
        const o = e[n];
        if (!p(o))
            return;
        const r = t[n];
        t[n] = function(e) {
            hd(o, e, t).then((e => g(r) && r(e) || e))
        }
    }
    )),
    t
}
function gd(e, t) {
    const n = [];
    p(dd.returnValue) && n.push(...dd.returnValue);
    const o = fd[e];
    return o && p(o.returnValue) && n.push(...o.returnValue),
    n.forEach((e => {
        t = e(t) || t
    }
    )),
    t
}
function vd(e) {
    const t = Object.create(null);
    Object.keys(dd).forEach((e => {
        "returnValue" !== e && (t[e] = dd[e].slice())
    }
    ));
    const n = fd[e];
    return n && Object.keys(n).forEach((e => {
        "returnValue" !== e && (t[e] = (t[e] || []).concat(n[e]))
    }
    )),
    t
}
function yd(e, t, n, o) {
    const r = vd(e);
    if (r && Object.keys(r).length) {
        if (p(r.invoke)) {
            return hd(r.invoke, n).then((n => t(md(vd(e), n), ...o)))
        }
        return t(md(r, n), ...o)
    }
    return t(n, ...o)
}
function bd(e, t) {
    return (n={}, ...o) => function(e) {
        return !(!S(e) || ![rd, id, sd].find((t => g(e[t]))))
    }(n) ? gd(e, yd(e, t, n, o)) : gd(e, new Promise(( (r, i) => {
        yd(e, t, c(n, {
            success: r,
            fail: i
        }), o)
    }
    )))
}
function _d(e, t, n, o={}) {
    const r = t + ":fail" + (n ? " " + n : "");
    return delete o.errCode,
    od(e, c({
        errMsg: r
    }, o))
}
function wd(e, t, n, o) {
    if (o && o.beforeInvoke) {
        const e = o.beforeInvoke(t);
        if (v(e))
            return e
    }
    const r = function(e, t) {
        const n = e[0];
        if (!t || !t.formatArgs || !S(t.formatArgs) && S(n))
            return;
        const o = t.formatArgs
          , r = Object.keys(o);
        for (let i = 0; i < r.length; i++) {
            const t = r[i]
              , s = o[t];
            if (g(s)) {
                const o = s(e[0][t], n);
                if (v(o))
                    return o
            } else
                f(n, t) || (n[t] = s)
        }
    }(t, o);
    if (r)
        return r
}
function xd(e, t, n, o) {
    return n => {
        const r = ad(e, n, o)
          , i = wd(0, [n], 0, o);
        return i ? _d(r, e, i) : t(n, {
            resolve: t => function(e, t, n) {
                return od(e, c(n || {}, {
                    errMsg: t + ":ok"
                }))
            }(r, e, t),
            reject: (t, n) => _d(r, e, function(e) {
                return !e || v(e) ? e : e.stack ? (console.error(e.message + "\n" + e.stack),
                e.message) : e
            }(t), n)
        })
    }
}
function Cd(e, t, n, o) {
    return bd(e, xd(e, t, 0, o))
}
function Sd(e, t, n, o) {
    return function(e, t, n, o) {
        return (...e) => {
            const n = wd(0, e, 0, o);
            if (n)
                throw new Error(n);
            return t.apply(null, e)
        }
    }(0, t, 0, o)
}
function Td(e, t, n, o) {
    return bd(e, function(e, t, n, o) {
        return xd(e, t, 0, o)
    }(e, t, 0, o))
}
let Ed = !1
  , kd = 0
  , Ld = 0
  , Od = 960
  , $d = 375
  , Pd = 750;
function Ad() {
    const {platform: e, pixelRatio: t, windowWidth: n} = function() {
        const e = Gu()
          , t = Ju(Xu(e, Yu(e)));
        return {
            platform: Hu ? "ios" : "other",
            pixelRatio: window.devicePixelRatio,
            windowWidth: t
        }
    }();
    kd = n,
    Ld = t,
    Ed = "ios" === e
}
function Bd(e, t) {
    const n = Number(e);
    return isNaN(n) ? t : n
}
const Id = Sd(0, ( (e, t) => {
    if (0 === kd && (Ad(),
    function() {
        const e = __uniConfig.globalStyle || {};
        Od = Bd(e.rpxCalcMaxDeviceWidth, 960),
        $d = Bd(e.rpxCalcBaseDeviceWidth, 375),
        Pd = Bd(e.rpxCalcBaseDeviceWidth, 750)
    }()),
    0 === (e = Number(e)))
        return 0;
    let n = t || kd;
    n = e === Pd || n <= Od ? n : $d;
    let o = e / 750 * n;
    return o < 0 && (o = -o),
    o = Math.floor(o + 1e-4),
    0 === o && (o = 1 !== Ld && Ed ? .5 : 1),
    e < 0 ? -o : o
}
))
  , Md = Sd(0, ( () => {
    const e = Rp();
    return e && e.$vm ? e.$vm.$locale : nc().getLocale()
}
))
  , Nd = {
    [he]: [],
    [pe]: [],
    [de]: [],
    [ce]: [],
    [ue]: []
};
const Rd = "json"
  , jd = ["text", "arraybuffer"]
  , Fd = encodeURIComponent;
ArrayBuffer,
Boolean;
const Dd = {
    formatArgs: {
        method(e, t) {
            t.method = Qu((e || "").toUpperCase(), Zu)
        },
        data(e, t) {
            t.data = e || ""
        },
        url(e, t) {
            t.method === Zu[0] && S(t.data) && Object.keys(t.data).length && (t.url = function(e, t) {
                let n = e.split("#");
                const o = n[1] || "";
                n = n[0].split("?");
                let r = n[1] || "";
                e = n[0];
                const i = r.split("&").filter((e => e))
                  , s = {};
                i.forEach((e => {
                    const t = e.split("=");
                    s[t[0]] = t[1]
                }
                ));
                for (const a in t)
                    if (f(t, a)) {
                        let e = t[a];
                        null == e ? e = "" : S(e) && (e = JSON.stringify(e)),
                        s[Fd(a)] = Fd(e)
                    }
                return r = Object.keys(s).map((e => `${e}=${s[e]}`)).join("&"),
                e + (r ? "?" + r : "") + (o ? "#" + o : "")
            }(e, t.data))
        },
        header(e, t) {
            const n = t.header = e || {};
            t.method !== Zu[0] && (Object.keys(n).find((e => "content-type" === e.toLowerCase())) || (n["Content-Type"] = "application/json"))
        },
        dataType(e, t) {
            t.dataType = (e || Rd).toLowerCase()
        },
        responseType(e, t) {
            t.responseType = (e || "").toLowerCase(),
            -1 === jd.indexOf(t.responseType) && (t.responseType = "text")
        }
    }
};
const Vd = {
    url: {
        type: String,
        required: !0
    }
}
  , Wd = "navigateTo"
  , Hd = "redirectTo"
  , Ud = "reLaunch"
  , qd = "switchTab"
  , zd = "preloadPage"
  , Kd = "unPreloadPage"
  , Gd = (Zd(["slide-in-right", "slide-in-left", "slide-in-top", "slide-in-bottom", "fade-in", "zoom-out", "zoom-fade-out", "pop-in", "none"]),
Zd(["slide-out-right", "slide-out-left", "slide-out-top", "slide-out-bottom", "fade-out", "zoom-in", "zoom-fade-in", "pop-out", "none"]),
tf(Wd))
  , Yd = tf(Hd)
  , Xd = tf(Ud)
  , Jd = {
    formatArgs: {
        delta(e, t) {
            e = parseInt(e + "") || 1,
            t.delta = Math.min(fp().length - 1, e)
        }
    }
};
function Zd(e) {
    return {
        animationType: {
            type: String,
            validator(t) {
                if (t && -1 === e.indexOf(t))
                    return "`" + t + "` is not supported for `animationType` (supported values are: `" + e.join("`|`") + "`)"
            }
        },
        animationDuration: {
            type: Number
        }
    }
}
let Qd;
function ef() {
    Qd = ""
}
function tf(e) {
    return {
        formatArgs: {
            url: nf(e)
        },
        beforeAll: ef
    }
}
function nf(e) {
    return function(t, n) {
        if (!t)
            return 'Missing required args: "url"';
        const o = (t = function(e) {
            if (0 === e.indexOf("/"))
                return e;
            let t = "";
            const n = fp();
            return n.length && (t = n[n.length - 1].$page.route),
            su(t, e)
        }(t)).split("?")[0]
          , r = au(o, !0);
        if (!r)
            return "page `" + t + "` is not found";
        if (e === Wd || e === Hd) {
            if (r.meta.isTabBar)
                return `can not ${e} a tabbar page`
        } else if (e === qd && !r.meta.isTabBar)
            return "can not switch to no-tabBar page";
        if (e !== qd && e !== zd || !r.meta.isTabBar || "appLaunch" === n.openType || (t = o),
        r.meta.isEntry && (t = t.replace(r.alias, "/")),
        n.url = function(e) {
            if (!v(e))
                return e;
            const t = e.indexOf("?");
            if (-1 === t)
                return e;
            const n = e.slice(t + 1).trim().replace(/^(\?|#|&)/, "");
            if (!n)
                return e;
            e = e.slice(0, t);
            const o = [];
            return n.split("&").forEach((e => {
                const t = e.replace(/\+/g, " ").split("=")
                  , n = t.shift()
                  , r = t.length > 0 ? t.join("=") : "";
                o.push(n + "=" + encodeURIComponent(r))
            }
            )),
            o.length ? e + "?" + o.join("&") : e
        }(t),
        e !== Kd)
            if (e !== zd) {
                if (Qd === t && "appLaunch" !== n.openType)
                    return `${Qd} locked`;
                __uniConfig.ready && (Qd = t)
            } else if (r.meta.isTabBar) {
                const e = fp()
                  , t = r.path.slice(1);
                if (e.find((e => e.route === t)))
                    return "tabBar page `" + t + "` already exists"
            }
    }
}
const of = "setNavigationBarTitle"
  , rf = (Boolean,
{
    formatArgs: {
        title: "",
        mask: !1
    }
})
  , sf = (Boolean,
{
    beforeInvoke() {
        ac()
    },
    formatArgs: {
        title: "",
        content: "",
        placeholderText: "",
        showCancel: !0,
        editable: !1,
        cancelText(e, t) {
            if (!f(t, "cancelText")) {
                const {t: e} = nc();
                t.cancelText = e("uni.showModal.cancel")
            }
        },
        cancelColor: "#000",
        confirmText(e, t) {
            if (!f(t, "confirmText")) {
                const {t: e} = nc();
                t.confirmText = e("uni.showModal.confirm")
            }
        },
        confirmColor: "#007aff"
    }
})
  , af = ["success", "loading", "none", "error"]
  , lf = (Boolean,
{
    formatArgs: {
        title: "",
        icon(e, t) {
            t.icon = Qu(e, af)
        },
        image(e, t) {
            t.image = e ? Du(e) : ""
        },
        duration: 1500,
        mask: !1
    }
})
  , cf = Ou()
  , uf = Ou();
const df = Bu({
    name: "ResizeSensor",
    props: {
        initial: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["resize"],
    setup(e, {emit: t}) {
        const n = Nn(null)
          , o = function(e) {
            return () => {
                const {firstElementChild: t, lastElementChild: n} = e.value;
                t.scrollLeft = 1e5,
                t.scrollTop = 1e5,
                n.scrollLeft = 1e5,
                n.scrollTop = 1e5
            }
        }(n)
          , r = function(e, t, n) {
            const o = _n({
                width: -1,
                height: -1
            });
            return Bo(( () => c({}, o)), (e => t("resize", e))),
            () => {
                const t = e.value;
                t && (o.width = t.offsetWidth,
                o.height = t.offsetHeight,
                n())
            }
        }(n, t, o);
        return function(e, t, n, o) {
            sr(o),
            vr(( () => {
                t.initial && to(n);
                const r = e.value;
                r.offsetParent !== r.parentElement && (r.parentElement.style.position = "relative"),
                "AnimationEvent"in window || o()
            }
            ))
        }(n, e, r, o),
        () => Ri("uni-resize-sensor", {
            ref: n,
            onAnimationstartOnce: r
        }, [Ri("div", {
            onScroll: r
        }, [Ri("div", null, null)], 40, ["onScroll"]), Ri("div", {
            onScroll: r
        }, [Ri("div", null, null)], 40, ["onScroll"])], 40, ["onAnimationstartOnce"])
    }
});
let ff;
function pf() {}
const hf = {
    cursorSpacing: {
        type: [Number, String],
        default: 0
    },
    showConfirmBar: {
        type: [Boolean, String],
        default: "auto"
    },
    adjustPosition: {
        type: [Boolean, String],
        default: !0
    },
    autoBlur: {
        type: [Boolean, String],
        default: !1
    }
};
function mf(e, t, n) {
    function o(e) {
        const t = as(( () => 0 === String(navigator.vendor).indexOf("Apple")));
        e.addEventListener("focus", ( () => {
            clearTimeout(ff),
            document.addEventListener("click", pf, !1)
        }
        ));
        e.addEventListener("blur", ( () => {
            t.value && e.blur(),
            document.removeEventListener("click", pf, !1),
            t.value && document.documentElement.scrollTo(document.documentElement.scrollLeft, document.documentElement.scrollTop)
        }
        ))
    }
    Bo(( () => t.value), (e => e && o(e)))
}
const gf = {
    src: {
        type: String,
        default: ""
    },
    mode: {
        type: String,
        default: "scaleToFill"
    },
    lazyLoad: {
        type: [Boolean, String],
        default: !1
    },
    draggable: {
        type: Boolean,
        default: !1
    }
}
  , vf = {
    widthFix: ["offsetWidth", "height", (e, t) => e / t],
    heightFix: ["offsetHeight", "width", (e, t) => e * t]
}
  , yf = {
    aspectFit: ["center center", "contain"],
    aspectFill: ["center center", "cover"],
    widthFix: [, "100% 100%"],
    heightFix: [, "100% 100%"],
    top: ["center top"],
    bottom: ["center bottom"],
    center: ["center center"],
    left: ["left center"],
    right: ["right center"],
    "top left": ["left top"],
    "top right": ["right top"],
    "bottom left": ["left bottom"],
    "bottom right": ["right bottom"]
}
  , bf = Bu({
    name: "Image",
    props: gf,
    setup(e, {emit: t}) {
        const n = Nn(null)
          , o = function(e, t) {
            const n = Nn("")
              , o = as(( () => {
                let e = "auto"
                  , o = "";
                const r = yf[t.mode];
                return r ? (r[0] && (o = r[0]),
                r[1] && (e = r[1])) : (o = "0% 0%",
                e = "100% 100%"),
                `background-image:${n.value ? 'url("' + n.value + '")' : "none"};background-position:${o};background-size:${e};`
            }
            ))
              , r = _n({
                rootEl: e,
                src: as(( () => t.src ? Du(t.src) : "")),
                origWidth: 0,
                origHeight: 0,
                origStyle: {
                    width: "",
                    height: ""
                },
                modeStyle: o,
                imgSrc: n
            });
            return vr(( () => {
                const t = e.value.style;
                r.origWidth = Number(t.width) || 0,
                r.origHeight = Number(t.height) || 0
            }
            )),
            r
        }(n, e)
          , r = Nu(n, t)
          , {fixSize: i} = function(e, t, n) {
            const o = () => {
                const {mode: o} = t
                  , r = vf[o];
                if (!r)
                    return;
                const {origWidth: i, origHeight: s} = n
                  , a = i && s ? i / s : 0;
                if (!a)
                    return;
                const l = e.value
                  , c = l[r[0]];
                c && (l.style[r[1]] = function(e) {
                    _f && e > 10 && (e = 2 * Math.round(e / 2));
                    return e
                }(r[2](c, a)) + "px")
            }
              , r = () => {
                const {style: t} = e.value
                  , {origStyle: {width: o, height: r}} = n;
                t.width = o,
                t.height = r
            }
            ;
            return Bo(( () => t.mode), ( (e, t) => {
                vf[t] && r(),
                vf[e] && o()
            }
            )),
            {
                fixSize: o,
                resetSize: r
            }
        }(n, e, o);
        return function(e, t, n, o, r) {
            let i, s;
            const a = (t=0, n=0, o="") => {
                e.origWidth = t,
                e.origHeight = n,
                e.imgSrc = o
            }
              , l = l => {
                if (!l)
                    return c(),
                    void a();
                i = i || new Image,
                i.onload = e => {
                    const {width: u, height: d} = i;
                    a(u, d, l),
                    o(),
                    i.draggable = t.draggable,
                    s && s.remove(),
                    s = i,
                    n.value.appendChild(i),
                    c(),
                    r("load", e, {
                        width: u,
                        height: d
                    })
                }
                ,
                i.onerror = t => {
                    a(),
                    c(),
                    r("error", t, {
                        errMsg: `GET ${e.src} 404 (Not Found)`
                    })
                }
                ,
                i.src = l
            }
              , c = () => {
                i && (i.onload = null,
                i.onerror = null,
                i = null)
            }
            ;
            Bo(( () => e.src), (e => l(e))),
            Bo(( () => e.imgSrc), (e => {
                !e && s && (s.remove(),
                s = null)
            }
            )),
            vr(( () => l(e.src))),
            _r(( () => c()))
        }(o, e, n, i, r),
        () => Ri("uni-image", {
            ref: n
        }, [Ri("div", {
            style: o.modeStyle
        }, null, 4), vf[e.mode] ? Ri(df, {
            onResize: i
        }, null, 8, ["onResize"]) : Ri("span", null, null)], 512)
    }
});
const _f = "Google Inc." === navigator.vendor;
const wf = Xe(!0)
  , xf = [];
let Cf = 0
  , Sf = !1;
const Tf = e => xf.forEach((t => t.userAction = e));
function Ef() {
    const e = _n({
        userAction: !1
    });
    return vr(( () => {
        !function(e={
            userAction: !1
        }) {
            Sf || (["touchstart", "touchmove", "touchend", "mousedown", "mouseup"].forEach((e => {
                document.addEventListener(e, (function() {
                    !Cf && Tf(!0),
                    Cf++,
                    setTimeout(( () => {
                        !--Cf && Tf(!1)
                    }
                    ), 0)
                }
                ), wf)
            }
            )),
            Sf = !0);
            xf.push(e)
        }(e)
    }
    )),
    _r(( () => {
        !function(e) {
            const t = xf.indexOf(e);
            t >= 0 && xf.splice(t, 1)
        }(e)
    }
    )),
    {
        state: e
    }
}
function kf(e, t) {
    const n = document.activeElement;
    if (!n)
        return t({});
    const o = {};
    ["input", "textarea"].includes(n.tagName.toLowerCase()) && (o.start = n.selectionStart,
    o.end = n.selectionEnd),
    t(o)
}
const Lf = function() {
    var e, t, n;
    e = Jc(),
    n = kf,
    t = pc(e, t = "getSelectedTextRange"),
    fc[t] || (fc[t] = n)
};
function Of(e, t, n) {
    "number" === t && isNaN(Number(e)) && (e = "");
    return null == e ? "" : String(e)
}
const $f = ["none", "text", "decimal", "numeric", "tel", "search", "email", "url"]
  , Pf = c({}, {
    name: {
        type: String,
        default: ""
    },
    modelValue: {
        type: [String, Number]
    },
    value: {
        type: [String, Number]
    },
    disabled: {
        type: [Boolean, String],
        default: !1
    },
    autoFocus: {
        type: [Boolean, String],
        default: !1
    },
    focus: {
        type: [Boolean, String],
        default: !1
    },
    cursor: {
        type: [Number, String],
        default: -1
    },
    selectionStart: {
        type: [Number, String],
        default: -1
    },
    selectionEnd: {
        type: [Number, String],
        default: -1
    },
    type: {
        type: String,
        default: "text"
    },
    password: {
        type: [Boolean, String],
        default: !1
    },
    placeholder: {
        type: String,
        default: ""
    },
    placeholderStyle: {
        type: String,
        default: ""
    },
    placeholderClass: {
        type: String,
        default: ""
    },
    maxlength: {
        type: [Number, String],
        default: 140
    },
    confirmType: {
        type: String,
        default: "done"
    },
    confirmHold: {
        type: Boolean,
        default: !1
    },
    ignoreCompositionEvent: {
        type: Boolean,
        default: !0
    },
    step: {
        type: String,
        default: "0.000000000000000001"
    },
    inputmode: {
        type: String,
        default: void 0,
        validator: e => !!~$f.indexOf(e)
    },
    cursorColor: {
        type: String,
        default: ""
    }
}, hf)
  , Af = ["input", "focus", "blur", "update:value", "update:modelValue", "update:focus", "compositionstart", "compositionupdate", "compositionend", "keyboardheightchange"];
function Bf(e, t, n, o) {
    let r = null;
    r = nt((n => {
        t.value = Of(n, e.type)
    }
    ), 100, {
        setTimeout: setTimeout,
        clearTimeout: clearTimeout
    }),
    Bo(( () => e.modelValue), r),
    Bo(( () => e.value), r);
    const i = function(e, t) {
        let n, o, r = 0;
        const i = function(...i) {
            const s = Date.now();
            clearTimeout(n),
            o = () => {
                o = null,
                r = s,
                e.apply(this, i)
            }
            ,
            s - r < t ? n = setTimeout(o, t - (s - r)) : o()
        };
        return i.cancel = function() {
            clearTimeout(n),
            o = null
        }
        ,
        i.flush = function() {
            clearTimeout(n),
            o && o()
        }
        ,
        i
    }(( (e, t) => {
        r.cancel(),
        n("update:modelValue", t.value),
        n("update:value", t.value),
        o("input", e, t)
    }
    ), 100);
    return gr(( () => {
        r.cancel(),
        i.cancel()
    }
    )),
    {
        trigger: o,
        triggerInput: (e, t, n) => {
            r.cancel(),
            i(e, t),
            n && i.flush()
        }
    }
}
function If(e, t) {
    Ef();
    const n = as(( () => e.autoFocus || e.focus));
    function o() {
        if (!n.value)
            return;
        const e = t.value;
        e ? e.focus() : setTimeout(o, 100)
    }
    Bo(( () => e.focus), (e => {
        e ? o() : function() {
            const e = t.value;
            e && e.blur()
        }()
    }
    )),
    vr(( () => {
        n.value && to(o)
    }
    ))
}
function Mf(e, t, n, o) {
    Lf();
    const {fieldRef: r, state: i, trigger: s} = function(e, t, n) {
        const o = Nn(null)
          , r = Nu(t, n)
          , i = as(( () => {
            const t = Number(e.selectionStart);
            return isNaN(t) ? -1 : t
        }
        ))
          , s = as(( () => {
            const t = Number(e.selectionEnd);
            return isNaN(t) ? -1 : t
        }
        ))
          , a = as(( () => {
            const t = Number(e.cursor);
            return isNaN(t) ? -1 : t
        }
        ))
          , l = as(( () => {
            var t = Number(e.maxlength);
            return isNaN(t) ? 140 : t
        }
        ));
        let c = "";
        c = Of(e.modelValue, e.type) || Of(e.value, e.type);
        const u = _n({
            value: c,
            valueOrigin: c,
            maxlength: l,
            focus: e.focus,
            composing: !1,
            selectionStart: i,
            selectionEnd: s,
            cursor: a
        });
        return Bo(( () => u.focus), (e => n("update:focus", e))),
        Bo(( () => u.maxlength), (e => u.value = u.value.slice(0, e)), {
            immediate: !1
        }),
        {
            fieldRef: o,
            state: u,
            trigger: r
        }
    }(e, t, n)
      , {triggerInput: a} = Bf(e, i, n, s);
    If(e, r),
    mf(0, r);
    const {state: l} = function() {
        const e = _n({
            attrs: {}
        });
        return vr(( () => {
            let t = Yi();
            for (; t; ) {
                const n = t.type.__scopeId;
                n && (e.attrs[n] = ""),
                t = t.proxy && "page" === t.proxy.$mpType ? null : t.parent
            }
        }
        )),
        {
            state: e
        }
    }();
    !function(e, t) {
        const n = Jr(ju, !1);
        if (!n)
            return;
        const o = Yi()
          , r = {
            submit() {
                const n = o.proxy;
                return [n[e], v(t) ? n[t] : t.value]
            },
            reset() {
                v(t) ? o.proxy[t] = "" : t.value = ""
            }
        };
        n.addField(r),
        _r(( () => {
            n.removeField(r)
        }
        ))
    }("name", i),
    function(e, t, n, o, r, i) {
        function s() {
            const n = e.value;
            n && t.focus && t.selectionStart > -1 && t.selectionEnd > -1 && "number" !== n.type && (n.selectionStart = t.selectionStart,
            n.selectionEnd = t.selectionEnd)
        }
        function a() {
            const n = e.value;
            n && t.focus && t.selectionStart < 0 && t.selectionEnd < 0 && t.cursor > -1 && "number" !== n.type && (n.selectionEnd = n.selectionStart = t.cursor)
        }
        function l(e) {
            return "number" === e.type ? null : e.selectionEnd
        }
        Bo([ () => t.selectionStart, () => t.selectionEnd], s),
        Bo(( () => t.cursor), a),
        Bo(( () => e.value), (function() {
            const c = e.value;
            if (!c)
                return;
            const u = function(e, o) {
                e.stopPropagation(),
                g(i) && !1 === i(e, t) || (t.value = c.value,
                t.composing && n.ignoreCompositionEvent || r(e, {
                    value: c.value,
                    cursor: l(c)
                }, o))
            };
            function d(e) {
                n.ignoreCompositionEvent || o(e.type, e, {
                    value: e.data
                })
            }
            c.addEventListener("change", (e => e.stopPropagation())),
            c.addEventListener("focus", (function(e) {
                t.focus = !0,
                o("focus", e, {
                    value: t.value
                }),
                s(),
                a()
            }
            )),
            c.addEventListener("blur", (function(e) {
                t.composing && (t.composing = !1,
                u(e, !0)),
                t.focus = !1,
                o("blur", e, {
                    value: t.value,
                    cursor: l(e.target)
                })
            }
            )),
            c.addEventListener("input", u),
            c.addEventListener("compositionstart", (e => {
                e.stopPropagation(),
                t.composing = !0,
                d(e)
            }
            )),
            c.addEventListener("compositionend", (e => {
                e.stopPropagation(),
                t.composing && (t.composing = !1,
                u(e)),
                d(e)
            }
            )),
            c.addEventListener("compositionupdate", d)
        }
        ))
    }(r, i, e, s, a, o);
    return {
        fieldRef: r,
        state: i,
        scopedAttrsState: l,
        fixDisabledColor: 0 === String(navigator.vendor).indexOf("Apple") && CSS.supports("image-orientation:from-image"),
        trigger: s
    }
}
function Nf(e, t, n, o, r) {
    if (t.value)
        if ("." === e.data) {
            if ("." === t.value.slice(-1))
                return n.value = o.value = t.value = t.value.slice(0, -1),
                !1;
            if (t.value && !t.value.includes("."))
                return t.value += ".",
                r && (r.fn = () => {
                    n.value = o.value = t.value = t.value.slice(0, -1),
                    o.removeEventListener("blur", r.fn)
                }
                ,
                o.addEventListener("blur", r.fn)),
                !1
        } else if ("deleteContentBackward" === e.inputType && navigator.userAgent.includes("iPhone OS 16") && "." === t.value.slice(-2, -1))
            return t.value = n.value = o.value = t.value.slice(0, -2),
            !0
}
const Rf = Bu({
    name: "Input",
    props: c({}, Pf, {
        placeholderClass: {
            type: String,
            default: "input-placeholder"
        },
        textContentType: {
            type: String,
            default: ""
        }
    }),
    emits: ["confirm", ...Af],
    setup(e, {emit: t, expose: n}) {
        const o = ["text", "number", "idcard", "digit", "password", "tel"]
          , r = ["off", "one-time-code"]
          , i = as(( () => {
            let t = "";
            switch (e.type) {
            case "text":
                "search" === e.confirmType && (t = "search");
                break;
            case "idcard":
                t = "text";
                break;
            case "digit":
                t = "number";
                break;
            default:
                t = ~o.includes(e.type) ? e.type : "text"
            }
            return e.password ? "password" : t
        }
        ))
          , s = as(( () => {
            const t = r.indexOf(e.textContentType)
              , n = r.indexOf(P(e.textContentType));
            return r[-1 !== t ? t : -1 !== n ? n : 0]
        }
        ));
        let a = function(e, t) {
            if ("number" === t.value) {
                const t = void 0 === e.modelValue ? e.value : e.modelValue
                  , n = Nn(void 0 !== t ? t.toLocaleString() : "");
                return Bo(( () => e.modelValue), (e => {
                    n.value = void 0 !== e ? e.toLocaleString() : ""
                }
                )),
                Bo(( () => e.value), (e => {
                    n.value = void 0 !== e ? e.toLocaleString() : ""
                }
                )),
                n
            }
            return Nn("")
        }(e, i)
          , l = {
            fn: null
        };
        const c = Nn(null)
          , {fieldRef: u, state: d, scopedAttrsState: f, fixDisabledColor: p, trigger: h} = Mf(e, c, t, ( (e, t) => {
            const n = e.target;
            if ("number" === i.value) {
                if (l.fn && (n.removeEventListener("blur", l.fn),
                l.fn = null),
                n.validity && !n.validity.valid) {
                    if ((!a.value || !n.value) && "-" === e.data || "-" === a.value[0] && "deleteContentBackward" === e.inputType)
                        return a.value = "-",
                        t.value = "",
                        l.fn = () => {
                            a.value = n.value = ""
                        }
                        ,
                        n.addEventListener("blur", l.fn),
                        !1;
                    const o = Nf(e, a, t, n, l);
                    return "boolean" == typeof o ? o : (a.value = t.value = n.value = "-" === a.value ? "" : a.value,
                    !1)
                }
                {
                    const o = Nf(e, a, t, n, l);
                    if ("boolean" == typeof o)
                        return o;
                    a.value = n.value
                }
                const o = t.maxlength;
                if (o > 0 && n.value.length > o)
                    return n.value = n.value.slice(0, o),
                    t.value = n.value,
                    !1
            }
        }
        ));
        Bo(( () => d.value), (t => {
            "number" !== e.type || "-" === a.value && "" === t || (a.value = t.toString())
        }
        ));
        const m = ["number", "digit"]
          , g = as(( () => m.includes(e.type) ? e.step : ""));
        function v(t) {
            if ("Enter" !== t.key)
                return;
            const n = t.target;
            t.stopPropagation(),
            h("confirm", t, {
                value: n.value
            }),
            !e.confirmHold && n.blur()
        }
        return n({
            $triggerInput: e => {
                t("update:modelValue", e.value),
                t("update:value", e.value),
                d.value = e.value
            }
        }),
        () => {
            let t = e.disabled && p ? Ri("input", {
                key: "disabled-input",
                ref: u,
                value: d.value,
                tabindex: "-1",
                readonly: !!e.disabled,
                type: i.value,
                maxlength: d.maxlength,
                step: g.value,
                class: "uni-input-input",
                style: e.cursorColor ? {
                    caretColor: e.cursorColor
                } : {},
                onFocus: e => e.target.blur()
            }, null, 44, ["value", "readonly", "type", "maxlength", "step", "onFocus"]) : Ri("input", {
                key: "input",
                ref: u,
                value: d.value,
                onInput: e => {
                    d.value = e.target.value.toString()
                }
                ,
                disabled: !!e.disabled,
                type: i.value,
                maxlength: d.maxlength,
                step: g.value,
                enterkeyhint: e.confirmType,
                pattern: "number" === e.type ? "[0-9]*" : void 0,
                class: "uni-input-input",
                style: e.cursorColor ? {
                    caretColor: e.cursorColor
                } : {},
                autocomplete: s.value,
                onKeyup: v,
                inputmode: e.inputmode
            }, null, 44, ["value", "onInput", "disabled", "type", "maxlength", "step", "enterkeyhint", "pattern", "autocomplete", "onKeyup", "inputmode"]);
            return Ri("uni-input", {
                ref: c
            }, [Ri("div", {
                class: "uni-input-wrapper"
            }, [jo(Ri("div", Ui(f.attrs, {
                style: e.placeholderStyle,
                class: ["uni-input-placeholder", e.placeholderClass]
            }), [e.placeholder], 16), [[$s, !(d.value.length || "-" === a.value || a.value.includes("."))]]), "search" === e.confirmType ? Ri("form", {
                action: "",
                onSubmit: e => e.preventDefault(),
                class: "uni-input-form"
            }, [t], 40, ["onSubmit"]) : t])], 512)
        }
    }
});
const jf = ["class", "style"]
  , Ff = /^on[A-Z]+/
  , Df = (e={}) => {
    const {excludeListeners: t=!1, excludeKeys: n=[]} = e
      , o = Yi()
      , r = Rn({})
      , i = Rn({})
      , s = Rn({})
      , a = n.concat(jf);
    return o.attrs = _n(o.attrs),
    Po(( () => {
        const e = (n = o.attrs,
        Object.keys(n).map((e => [e, n[e]]))).reduce(( (e, [n,o]) => (a.includes(n) ? e.exclude[n] = o : Ff.test(n) ? (t || (e.attrs[n] = o),
        e.listeners[n] = o) : e.attrs[n] = o,
        e)), {
            exclude: {},
            attrs: {},
            listeners: {}
        });
        var n;
        r.value = e.attrs,
        i.value = e.listeners,
        s.value = e.exclude
    }
    )),
    {
        $attrs: r,
        $listeners: i,
        $excludeAttrs: s
    }
}
  , Vf = Bu({
    name: "Refresher",
    props: {
        refreshState: {
            type: String,
            default: ""
        },
        refresherHeight: {
            type: Number,
            default: 0
        },
        refresherThreshold: {
            type: Number,
            default: 45
        },
        refresherDefaultStyle: {
            type: String,
            default: "black"
        },
        refresherBackground: {
            type: String,
            default: "#fff"
        }
    },
    setup(e, {slots: t}) {
        const n = Nn(null)
          , o = as(( () => {
            const t = {
                backgroundColor: e.refresherBackground
            };
            switch (e.refreshState) {
            case "pulling":
                t.height = e.refresherHeight + "px";
                break;
            case "refreshing":
                t.height = e.refresherThreshold + "px",
                t.transition = "height 0.3s";
                break;
            case "":
            case "refresherabort":
            case "restore":
                t.height = "0px",
                t.transition = "height 0.3s"
            }
            return t
        }
        ))
          , r = as(( () => {
            const t = e.refresherHeight / e.refresherThreshold;
            return 360 * (t > 1 ? 1 : t)
        }
        ));
        return () => {
            const {refreshState: i, refresherDefaultStyle: s, refresherThreshold: a} = e;
            return Ri("div", {
                ref: n,
                style: o.value,
                class: "uni-scroll-view-refresher"
            }, ["none" !== s ? Ri("div", {
                class: "uni-scroll-view-refresh"
            }, [Ri("div", {
                class: "uni-scroll-view-refresh-inner"
            }, ["pulling" == i ? Ri("svg", {
                key: "refresh__icon",
                style: {
                    transform: "rotate(" + r.value + "deg)"
                },
                fill: "#2BD009",
                class: "uni-scroll-view-refresh__icon",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, [Ri("path", {
                d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            }, null), Ri("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }, null)], 4) : null, "refreshing" == i ? Ri("svg", {
                key: "refresh__spinner",
                class: "uni-scroll-view-refresh__spinner",
                width: "24",
                height: "24",
                viewBox: "25 25 50 50"
            }, [Ri("circle", {
                cx: "50",
                cy: "50",
                r: "20",
                fill: "none",
                style: "color: #2bd009",
                "stroke-width": "3"
            }, null)]) : null])]) : null, "none" === s ? Ri("div", {
                class: "uni-scroll-view-refresher-container",
                style: {
                    height: `${a}px`
                }
            }, [t.default && t.default()]) : null], 4)
        }
    }
})
  , Wf = Xe(!0)
  , Hf = Bu({
    name: "ScrollView",
    compatConfig: {
        MODE: 3
    },
    props: {
        direction: {
            type: [String],
            default: "vertical"
        },
        scrollX: {
            type: [Boolean, String],
            default: !1
        },
        scrollY: {
            type: [Boolean, String],
            default: !1
        },
        showScrollbar: {
            type: [Boolean, String],
            default: !0
        },
        upperThreshold: {
            type: [Number, String],
            default: 50
        },
        lowerThreshold: {
            type: [Number, String],
            default: 50
        },
        scrollTop: {
            type: [Number, String],
            default: 0
        },
        scrollLeft: {
            type: [Number, String],
            default: 0
        },
        scrollIntoView: {
            type: String,
            default: ""
        },
        scrollWithAnimation: {
            type: [Boolean, String],
            default: !1
        },
        enableBackToTop: {
            type: [Boolean, String],
            default: !1
        },
        refresherEnabled: {
            type: [Boolean, String],
            default: !1
        },
        refresherThreshold: {
            type: Number,
            default: 45
        },
        refresherDefaultStyle: {
            type: String,
            default: "black"
        },
        refresherBackground: {
            type: String,
            default: "#fff"
        },
        refresherTriggered: {
            type: [Boolean, String],
            default: !1
        }
    },
    emits: ["scroll", "scrolltoupper", "scrolltolower", "refresherrefresh", "refresherrestore", "refresherpulling", "refresherabort", "update:refresherTriggered"],
    setup(e, {emit: t, slots: n, expose: o}) {
        const r = Nn(null)
          , i = Nn(null)
          , s = Nn(null)
          , a = Nn(null)
          , l = Nu(r, t)
          , {state: c, scrollTopNumber: u, scrollLeftNumber: d} = function(e) {
            const t = as(( () => Number(e.scrollTop) || 0))
              , n = as(( () => Number(e.scrollLeft) || 0))
              , o = _n({
                lastScrollTop: t.value,
                lastScrollLeft: n.value,
                lastScrollToUpperTime: 0,
                lastScrollToLowerTime: 0,
                refresherHeight: 0,
                refreshState: ""
            });
            return {
                state: o,
                scrollTopNumber: t,
                scrollLeftNumber: n
            }
        }(e)
          , {realScrollX: f, realScrollY: p, _scrollLeftChanged: h, _scrollTopChanged: m} = function(e, t, n, o, r, i, s, a, l) {
            let c = !1
              , u = 0
              , d = !1
              , f = () => {}
            ;
            const p = as(( () => e.scrollX))
              , h = as(( () => e.scrollY))
              , m = as(( () => {
                let t = Number(e.upperThreshold);
                return isNaN(t) ? 50 : t
            }
            ))
              , g = as(( () => {
                let t = Number(e.lowerThreshold);
                return isNaN(t) ? 50 : t
            }
            ));
            function v(e, t) {
                const n = s.value;
                let o = 0
                  , r = "";
                if (e < 0 ? e = 0 : "x" === t && e > n.scrollWidth - n.offsetWidth ? e = n.scrollWidth - n.offsetWidth : "y" === t && e > n.scrollHeight - n.offsetHeight && (e = n.scrollHeight - n.offsetHeight),
                "x" === t ? o = n.scrollLeft - e : "y" === t && (o = n.scrollTop - e),
                0 === o)
                    return;
                let i = a.value;
                i.style.transition = "transform .3s ease-out",
                i.style.webkitTransition = "-webkit-transform .3s ease-out",
                "x" === t ? r = "translateX(" + o + "px) translateZ(0)" : "y" === t && (r = "translateY(" + o + "px) translateZ(0)"),
                i.removeEventListener("transitionend", f),
                i.removeEventListener("webkitTransitionEnd", f),
                f = () => x(e, t),
                i.addEventListener("transitionend", f),
                i.addEventListener("webkitTransitionEnd", f),
                "x" === t ? n.style.overflowX = "hidden" : "y" === t && (n.style.overflowY = "hidden"),
                i.style.transform = r,
                i.style.webkitTransform = r
            }
            function y(e) {
                const n = e.target;
                r("scroll", e, {
                    scrollLeft: n.scrollLeft,
                    scrollTop: n.scrollTop,
                    scrollHeight: n.scrollHeight,
                    scrollWidth: n.scrollWidth,
                    deltaX: t.lastScrollLeft - n.scrollLeft,
                    deltaY: t.lastScrollTop - n.scrollTop
                }),
                h.value && (n.scrollTop <= m.value && t.lastScrollTop - n.scrollTop > 0 && e.timeStamp - t.lastScrollToUpperTime > 200 && (r("scrolltoupper", e, {
                    direction: "top"
                }),
                t.lastScrollToUpperTime = e.timeStamp),
                n.scrollTop + n.offsetHeight + g.value >= n.scrollHeight && t.lastScrollTop - n.scrollTop < 0 && e.timeStamp - t.lastScrollToLowerTime > 200 && (r("scrolltolower", e, {
                    direction: "bottom"
                }),
                t.lastScrollToLowerTime = e.timeStamp)),
                p.value && (n.scrollLeft <= m.value && t.lastScrollLeft - n.scrollLeft > 0 && e.timeStamp - t.lastScrollToUpperTime > 200 && (r("scrolltoupper", e, {
                    direction: "left"
                }),
                t.lastScrollToUpperTime = e.timeStamp),
                n.scrollLeft + n.offsetWidth + g.value >= n.scrollWidth && t.lastScrollLeft - n.scrollLeft < 0 && e.timeStamp - t.lastScrollToLowerTime > 200 && (r("scrolltolower", e, {
                    direction: "right"
                }),
                t.lastScrollToLowerTime = e.timeStamp)),
                t.lastScrollTop = n.scrollTop,
                t.lastScrollLeft = n.scrollLeft
            }
            function b(t) {
                h.value && (e.scrollWithAnimation ? v(t, "y") : s.value.scrollTop = t)
            }
            function _(t) {
                p.value && (e.scrollWithAnimation ? v(t, "x") : s.value.scrollLeft = t)
            }
            function w(t) {
                if (t) {
                    if (!/^[_a-zA-Z][-_a-zA-Z0-9:]*$/.test(t))
                        return void console.error(`id error: scroll-into-view=${t}`);
                    let n = i.value.querySelector("#" + t);
                    if (n) {
                        let t = s.value.getBoundingClientRect()
                          , o = n.getBoundingClientRect();
                        if (p.value) {
                            let n = o.left - t.left
                              , r = s.value.scrollLeft + n;
                            e.scrollWithAnimation ? v(r, "x") : s.value.scrollLeft = r
                        }
                        if (h.value) {
                            let n = o.top - t.top
                              , r = s.value.scrollTop + n;
                            e.scrollWithAnimation ? v(r, "y") : s.value.scrollTop = r
                        }
                    }
                }
            }
            function x(e, t) {
                a.value.style.transition = "",
                a.value.style.webkitTransition = "",
                a.value.style.transform = "",
                a.value.style.webkitTransform = "";
                let n = s.value;
                "x" === t ? (n.style.overflowX = p.value ? "auto" : "hidden",
                n.scrollLeft = e) : "y" === t && (n.style.overflowY = h.value ? "auto" : "hidden",
                n.scrollTop = e),
                a.value.removeEventListener("transitionend", f),
                a.value.removeEventListener("webkitTransitionEnd", f)
            }
            function C(n) {
                if (e.refresherEnabled) {
                    switch (n) {
                    case "refreshing":
                        t.refresherHeight = e.refresherThreshold,
                        c || (c = !0,
                        r("refresherrefresh", {}, {
                            dy: T.y - S.y
                        }),
                        l("update:refresherTriggered", !0));
                        break;
                    case "restore":
                    case "refresherabort":
                        c = !1,
                        t.refresherHeight = u = 0,
                        "restore" === n && (d = !1,
                        r("refresherrestore", {}, {
                            dy: T.y - S.y
                        })),
                        "refresherabort" === n && d && (d = !1,
                        r("refresherabort", {}, {
                            dy: T.y - S.y
                        }))
                    }
                    t.refreshState = n
                }
            }
            let S = {
                x: 0,
                y: 0
            }
              , T = {
                x: 0,
                y: e.refresherThreshold
            };
            return vr(( () => {
                to(( () => {
                    b(n.value),
                    _(o.value)
                }
                )),
                w(e.scrollIntoView);
                let i = function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    y(e)
                }
                  , a = null
                  , l = function(n) {
                    if (null === S)
                        return;
                    let o = n.touches[0].pageX
                      , i = n.touches[0].pageY
                      , l = s.value;
                    if (Math.abs(o - S.x) > Math.abs(i - S.y))
                        if (p.value) {
                            if (0 === l.scrollLeft && o > S.x)
                                return void (a = !1);
                            if (l.scrollWidth === l.offsetWidth + l.scrollLeft && o < S.x)
                                return void (a = !1);
                            a = !0
                        } else
                            a = !1;
                    else if (h.value)
                        if (0 === l.scrollTop && i > S.y)
                            a = !1,
                            e.refresherEnabled && !1 !== n.cancelable && n.preventDefault();
                        else {
                            if (l.scrollHeight === l.offsetHeight + l.scrollTop && i < S.y)
                                return void (a = !1);
                            a = !0
                        }
                    else
                        a = !1;
                    if (a && n.stopPropagation(),
                    0 === l.scrollTop && 1 === n.touches.length && C("pulling"),
                    e.refresherEnabled && "pulling" === t.refreshState) {
                        const o = i - S.y;
                        0 === u && (u = i),
                        c ? (t.refresherHeight = o + e.refresherThreshold,
                        d = !1) : (t.refresherHeight = i - u,
                        t.refresherHeight > 0 && (d = !0,
                        r("refresherpulling", n, {
                            deltaY: o,
                            dy: o
                        })))
                    }
                }
                  , f = function(e) {
                    1 === e.touches.length && (S = {
                        x: e.touches[0].pageX,
                        y: e.touches[0].pageY
                    })
                }
                  , m = function(n) {
                    T = {
                        x: n.changedTouches[0].pageX,
                        y: n.changedTouches[0].pageY
                    },
                    t.refresherHeight >= e.refresherThreshold ? C("refreshing") : C("refresherabort"),
                    S = {
                        x: 0,
                        y: 0
                    },
                    T = {
                        x: 0,
                        y: e.refresherThreshold
                    }
                };
                s.value.addEventListener("touchstart", f, Wf),
                s.value.addEventListener("touchmove", l, Xe(!1)),
                s.value.addEventListener("scroll", i, Xe(!1)),
                s.value.addEventListener("touchend", m, Wf),
                _r(( () => {
                    s.value.removeEventListener("touchstart", f),
                    s.value.removeEventListener("touchmove", l),
                    s.value.removeEventListener("scroll", i),
                    s.value.removeEventListener("touchend", m)
                }
                ))
            }
            )),
            sr(( () => {
                h.value && (s.value.scrollTop = t.lastScrollTop),
                p.value && (s.value.scrollLeft = t.lastScrollLeft)
            }
            )),
            Bo(n, (e => {
                b(e)
            }
            )),
            Bo(o, (e => {
                _(e)
            }
            )),
            Bo(( () => e.scrollIntoView), (e => {
                w(e)
            }
            )),
            Bo(( () => e.refresherTriggered), (e => {
                !0 === e ? C("refreshing") : !1 === e && C("restore")
            }
            )),
            {
                realScrollX: p,
                realScrollY: h,
                _scrollTopChanged: b,
                _scrollLeftChanged: _
            }
        }(e, c, u, d, l, r, i, a, t)
          , g = as(( () => {
            let e = "";
            return f.value ? e += "overflow-x:auto;" : e += "overflow-x:hidden;",
            p.value ? e += "overflow-y:auto;" : e += "overflow-y:hidden;",
            e
        }
        ))
          , v = as(( () => {
            let t = "uni-scroll-view";
            return !1 === e.showScrollbar && (t += " uni-scroll-view-scrollbar-hidden"),
            t
        }
        ));
        return o({
            $getMain: () => i.value
        }),
        () => {
            const {refresherEnabled: t, refresherBackground: o, refresherDefaultStyle: l, refresherThreshold: u} = e
              , {refresherHeight: d, refreshState: f} = c;
            return Ri("uni-scroll-view", {
                ref: r
            }, [Ri("div", {
                ref: s,
                class: "uni-scroll-view"
            }, [Ri("div", {
                ref: i,
                style: g.value,
                class: v.value
            }, [t ? Ri(Vf, {
                refreshState: f,
                refresherHeight: d,
                refresherThreshold: u,
                refresherDefaultStyle: l,
                refresherBackground: o
            }, {
                default: () => ["none" == l ? n.refresher && n.refresher() : null]
            }, 8, ["refreshState", "refresherHeight", "refresherThreshold", "refresherDefaultStyle", "refresherBackground"]) : null, Ri("div", {
                ref: a,
                class: "uni-scroll-view-content"
            }, [n.default && n.default()], 512)], 6)], 512)], 512)
        }
    }
});
const Uf = Bu({
    name: "View",
    props: c({}, Ru),
    setup(e, {slots: t}) {
        const n = Nn(null)
          , {hovering: o, binding: r} = function(e) {
            const t = Nn(!1);
            let n, o, r = !1;
            function i() {
                requestAnimationFrame(( () => {
                    clearTimeout(o),
                    o = setTimeout(( () => {
                        t.value = !1
                    }
                    ), parseInt(e.hoverStayTime))
                }
                ))
            }
            function s(o) {
                o._hoverPropagationStopped || e.hoverClass && "none" !== e.hoverClass && !e.disabled && (e.hoverStopPropagation && (o._hoverPropagationStopped = !0),
                r = !0,
                n = setTimeout(( () => {
                    t.value = !0,
                    r || i()
                }
                ), parseInt(e.hoverStartTime)))
            }
            function a() {
                r = !1,
                t.value && i()
            }
            function l() {
                a(),
                window.removeEventListener("mouseup", l)
            }
            return {
                hovering: t,
                binding: {
                    onTouchstartPassive: Mu((function(e) {
                        e.touches.length > 1 || s(e)
                    }
                    )),
                    onMousedown: Mu((function(e) {
                        r || (s(e),
                        window.addEventListener("mouseup", l))
                    }
                    )),
                    onTouchend: Mu((function() {
                        a()
                    }
                    )),
                    onMouseup: Mu((function() {
                        r && l()
                    }
                    )),
                    onTouchcancel: Mu((function() {
                        r = !1,
                        t.value = !1,
                        clearTimeout(n)
                    }
                    ))
                }
            }
        }(e);
        return () => {
            const i = e.hoverClass;
            return i && "none" !== i ? Ri("uni-view", Ui({
                class: o.value ? i : "",
                ref: n
            }, r), [t.default && t.default()], 16) : Ri("uni-view", {
                ref: n
            }, [t.default && t.default()], 512)
        }
    }
});
function qf(e, t, n, o) {
    g(t) && hr(e, t.bind(n), o)
}
function zf(e, t, n) {
    var o;
    const r = e.mpType || n.$mpType;
    if (r && "component" !== r && (Object.keys(e).forEach((o => {
        if (function(e, t, n=!0) {
            return !(n && !g(t)) && (it.indexOf(e) > -1 || 0 === e.indexOf("on"))
        }(o, e[o], !1)) {
            const r = e[o];
            p(r) ? r.forEach((e => qf(o, e, n, t))) : qf(o, r, n, t)
        }
    }
    )),
    "page" === r)) {
        t.__isVisible = !0;
        try {
            const e = t.attrs.__pageQuery;
            0,
            tu(n, me, e),
            delete t.attrs.__pageQuery,
            "preloadPage" !== (null == (o = n.$page) ? void 0 : o.openType) && tu(n, ce)
        } catch (i) {
            console.error(i.message + ne + i.stack)
        }
    }
}
function Kf(e, t, n) {
    zf(e, t, n)
}
function Gf(e, t, n) {
    return e[t] = n
}
function Yf(e, ...t) {
    const n = this[e];
    return n ? n(...t) : (console.error(`method ${e} not found`),
    null)
}
function Xf(e) {
    return function(t, n, o) {
        if (!n)
            throw t;
        const r = e._instance;
        if (!r || !r.proxy)
            throw t;
        tu(r.proxy, de, t)
    }
}
function Jf(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Zf(e) {
    const t = e._context.config;
    var n;
    t.errorHandler = at(e, Xf),
    n = t.optionMergeStrategies,
    it.forEach((e => {
        n[e] = Jf
    }
    ));
    const o = t.globalProperties;
    o.$set = Gf,
    o.$applyOptions = Kf,
    o.$callMethod = Yf,
    function(e) {
        st.forEach((t => t(e)))
    }(e)
}
const Qf = Uc("upm");
function ep() {
    return Jr(Qf)
}
function tp(e) {
    const t = function(e) {
        return _n(function(e) {
            {
                const {navigationBar: t} = e
                  , {titleSize: n, titleColor: o, backgroundColor: r} = t;
                t.titleText = t.titleText || "",
                t.type = t.type || "default",
                t.titleSize = n || "16px",
                t.titleColor = o || "#000000",
                t.backgroundColor = r || "#F8F8F8"
            }
            if (history.state) {
                const t = history.state.__type__;
                "redirectTo" !== t && "reLaunch" !== t || 0 !== fp().length || (e.isEntry = !0,
                e.isQuit = !0)
            }
            return e
        }(JSON.parse(JSON.stringify(eu(Fl().meta, e)))))
    }(e);
    return Xr(Qf, t),
    t
}
function np() {
    return Fl()
}
function op() {
    return history.state && history.state.__id__ || 1
}
const rp = window.CSS && window.CSS.supports;
function ip(e) {
    return rp && (rp(e) || rp.apply(window.CSS, e.split(":")))
}
const sp = ip("top:env(a)")
  , ap = ip("top:constant(a)")
  , lp = ( () => sp ? "env" : ap ? "constant" : "")();
function cp(e) {
    let t = 0;
    var n, o;
    "custom" !== e.navigationBar.style && ["default", "float"].indexOf(e.navigationBar.type) > -1 && (t = oe),
    Hc({
        "--window-top": (o = t,
        lp ? `calc(${o}px + ${lp}(safe-area-inset-top))` : `${o}px`),
        "--window-bottom": (n = 0,
        lp ? `calc(${n}px + ${lp}(safe-area-inset-bottom))` : `${n}px`)
    })
}
const up = "$$"
  , dp = new Map;
function fp() {
    const e = []
      , t = dp.values();
    for (const n of t)
        n.$.__isTabBar ? n.$.__isActive && e.push(n) : e.push(n);
    return e
}
function pp(e, t=!0) {
    const n = dp.get(e);
    n.$.__isUnload = !0,
    tu(n, ge),
    dp.delete(e),
    t && function(e) {
        const t = yp.get(e);
        t && (yp.delete(e),
        bp.pruneCacheEntry(t))
    }(e)
}
let hp = op();
function mp(e) {
    const t = ep();
    let n = e.fullPath;
    return e.meta.isEntry && -1 === n.indexOf(e.meta.route) && (n = "/" + e.meta.route + n.replace("/", "")),
    function(e, t, n, o, r, i) {
        const {id: s, route: a} = o
          , l = ft(o.navigationBar, __uniConfig.themeConfig, i).titleColor;
        return {
            id: s,
            path: We(a),
            route: a,
            fullPath: t,
            options: n,
            meta: o,
            openType: e,
            eventChannel: r,
            statusBarStyle: "#ffffff" === l ? "light" : "dark"
        }
    }("navigateTo", n, {}, t)
}
function gp(e) {
    const t = mp(e.$route);
    !function(e, t) {
        e.route = t.route,
        e.$vm = e,
        e.$page = t,
        e.$mpType = "page",
        e.$fontFamilySet = new Set,
        t.meta.isTabBar && (e.$.__isTabBar = !0,
        e.$.__isActive = !0)
    }(e, t),
    dp.set(vp(t.path, t.id), e)
}
function vp(e, t) {
    return e + up + t
}
const yp = new Map
  , bp = {
    get: e => yp.get(e),
    set(e, t) {
        !function(e) {
            const t = parseInt(e.split(up)[1]);
            if (!t)
                return;
            bp.forEach(( (e, n) => {
                const o = parseInt(n.split(up)[1]);
                o && o > t && (bp.delete(n),
                bp.pruneCacheEntry(e),
                to(( () => {
                    dp.forEach(( (e, t) => {
                        e.$.isUnmounted && dp.delete(t)
                    }
                    ))
                }
                )))
            }
            ))
        }(e),
        yp.set(e, t)
    },
    delete(e) {
        yp.get(e) && yp.delete(e)
    },
    forEach(e) {
        yp.forEach(e)
    }
};
function _p(e, t) {
    !function(e) {
        const t = xp(e)
          , {body: n} = document;
        Cp && n.removeAttribute(Cp),
        t && n.setAttribute(t, ""),
        Cp = t
    }(e),
    cp(t),
    function(e) {
        {
            const t = "nvue-dir-" + __uniConfig.nvue["flex-direction"];
            e.isNVue ? (document.body.setAttribute("nvue", ""),
            document.body.setAttribute(t, "")) : (document.body.removeAttribute("nvue"),
            document.body.removeAttribute(t))
        }
    }(t),
    function(e, t) {
        document.removeEventListener("touchmove", nu),
        Sp && document.removeEventListener("scroll", Sp);
        if (t.disableScroll)
            return document.addEventListener("touchmove", nu);
        const {onPageScroll: n, onReachBottom: o} = e
          , r = "transparent" === t.navigationBar.type;
        if (!n && !o && !r)
            return;
        const i = {}
          , s = e.proxy.$page.id;
        (n || r) && (i.onPageScroll = function(e, t, n) {
            return o => {
                t && nm.publishHandler(we, {
                    scrollTop: o
                }, e),
                n && nm.emit(e + "." + we, {
                    scrollTop: o
                })
            }
        }(s, n, r));
        o && (i.onReachBottomDistance = t.onReachBottomDistance || re,
        i.onReachBottom = () => nm.publishHandler(Ce, {}, s));
        Sp = iu(i),
        requestAnimationFrame(( () => document.addEventListener("scroll", Sp)))
    }(e, t)
}
function wp(e) {
    const t = xp(e);
    t && function(e) {
        const t = document.querySelector("uni-page-body");
        t && t.setAttribute(e, "")
    }(t)
}
function xp(e) {
    return e.type.__scopeId
}
let Cp, Sp;
function Tp(e) {
    const t = jl({
        history: Lp(),
        strict: !!__uniConfig.router.strict,
        routes: __uniRoutes,
        scrollBehavior: kp
    });
    t.beforeEach(( (e, t) => {
        var n;
        e && t && e.meta.isTabBar && t.meta.isTabBar && (n = t.meta.tabBarIndex,
        "undefined" != typeof window && (Ep[n] = {
            left: window.pageXOffset,
            top: window.pageYOffset
        }))
    }
    )),
    e.router = t,
    e.use(t)
}
let Ep = Object.create(null);
const kp = (e, t, n) => {
    if (n)
        return n;
    if (e && t && e.meta.isTabBar && t.meta.isTabBar) {
        const t = (o = e.meta.tabBarIndex,
        Ep[o]);
        if (t)
            return t
    }
    return {
        left: 0,
        top: 0
    };
    var o
}
;
function Lp() {
    let {routerBase: e} = __uniConfig.router;
    "/" === e && (e = "");
    const t = (n = e,
    (n = location.host ? n || location.pathname + location.search : "").includes("#") || (n += "#"),
    Za(n));
    var n;
    return t.listen(( (e, t, n) => {
        "back" === n.direction && function(e=1) {
            const t = fp()
              , n = t.length - 1
              , o = n - e;
            for (let r = n; r > o; r--) {
                const e = t[r].$page;
                pp(vp(e.path, e.id), !1)
            }
        }(Math.abs(n.delta))
    }
    )),
    t
}
const Op = {
    install(e) {
        Zf(e),
        vu(e),
        Lu(e),
        e.config.warnHandler || (e.config.warnHandler = $p),
        Tp(e)
    }
};
function $p(e, t, n) {
    if (t) {
        if ("PageMetaHead" === t.$.type.name)
            return;
        const e = t.$.parent;
        if (e && "PageMeta" === e.type.name)
            return
    }
    const o = [`[Vue warn]: ${e}`];
    n.length && o.push("\n", n),
    console.warn(...o)
}
const Pp = {
    class: "uni-async-loading"
}
  , Ap = Ri("i", {
    class: "uni-loading"
}, null, -1)
  , Bp = Iu({
    name: "AsyncLoading",
    render: () => (Ti(),
    $i("div", Pp, [Ap]))
});
function Ip() {
    window.location.reload()
}
const Mp = Iu({
    name: "AsyncError",
    setup() {
        rc();
        const {t: e} = nc();
        return () => Ri("div", {
            class: "uni-async-error",
            onClick: Ip
        }, [e("uni.async.error")], 8, ["onClick"])
    }
});
let Np;
function Rp() {
    return Np
}
function jp(e) {
    Np = e,
    Object.defineProperty(Np.$.ctx, "$children", {
        get: () => fp().map((e => e.$vm))
    });
    const t = Np.$.appContext.app;
    t.component(Bp.name) || t.component(Bp.name, Bp),
    t.component(Mp.name) || t.component(Mp.name, Mp),
    function(e) {
        e.$vm = e,
        e.$mpType = "app";
        const t = Nn(nc().getLocale());
        Object.defineProperty(e, "$locale", {
            get: () => t.value,
            set(e) {
                t.value = e
            }
        })
    }(Np),
    function(e, t) {
        const n = e.$options || {};
        n.globalData = c(n.globalData || {}, t),
        Object.defineProperty(e, "globalData", {
            get: () => n.globalData,
            set(e) {
                n.globalData = e
            }
        })
    }(Np),
    Eu(),
    kc()
}
function Fp(e, {clone: t, init: n, setup: o, before: r}) {
    t && (e = c({}, e)),
    r && r(e);
    const i = e.setup;
    return e.setup = (e, t) => {
        const r = Yi();
        n(r.proxy);
        const s = o(r);
        if (i)
            return i(s || e, t)
    }
    ,
    e
}
function Dp(e, t) {
    return e && (e.__esModule || "Module" === e[Symbol.toStringTag]) ? Fp(e.default, t) : Fp(e, t)
}
function Vp(e) {
    return Dp(e, {
        clone: !0,
        init: gp,
        setup(e) {
            e.$pageInstance = e;
            const t = np()
              , n = Qe(t.query);
            e.attrs.__pageQuery = n,
            e.proxy.$page.options = n,
            e.proxy.options = n;
            const o = ep();
            var r, i;
            return gr(( () => {
                _p(e, o)
            }
            )),
            vr(( () => {
                wp(e);
                const {onReady: n} = e;
                n && M(n),
                qp(t)
            }
            )),
            lr(( () => {
                if (!e.__isVisible) {
                    _p(e, o),
                    e.__isVisible = !0;
                    const {onShow: n} = e;
                    n && M(n),
                    to(( () => {
                        qp(t)
                    }
                    ))
                }
            }
            ), "ba", r),
            function(e, t) {
                lr(e, "bda", t)
            }(( () => {
                if (e.__isVisible && !e.__isUnload) {
                    e.__isVisible = !1;
                    const {onHide: t} = e;
                    t && M(t)
                }
            }
            )),
            i = o.id,
            nm.subscribe(pc(i, cc), hc),
            _r(( () => {
                !function(e) {
                    nm.unsubscribe(pc(e, cc)),
                    Object.keys(fc).forEach((t => {
                        0 === t.indexOf(e + ".") && delete fc[t]
                    }
                    ))
                }(o.id)
            }
            )),
            n
        }
    })
}
function Wp() {
    const {windowWidth: e, windowHeight: t, screenWidth: n, screenHeight: o} = ah()
      , r = 90 === Math.abs(Number(window.orientation)) ? "landscape" : "portrait";
    om.emit(be, {
        deviceOrientation: r,
        size: {
            windowWidth: e,
            windowHeight: t,
            screenWidth: n,
            screenHeight: o
        }
    })
}
function Hp(e) {
    S(e.data) && e.data.type === le && om.emit(Ne, e.data.data, e.data.pageId)
}
function Up() {
    const {emit: e} = om;
    "visible" === document.visibilityState ? e(Ie, c({}, uf)) : e(Me)
}
function qp(e) {
    const {tabBarText: t, tabBarIndex: n, route: o} = e.meta;
    t && tu("onTabItemTap", {
        index: n,
        text: t,
        pagePath: o
    })
}
const zp = ({name: e, arg: t}) => {
    "postMessage" === e || uni[e](t)
}
  , Kp = qe(( () => om.on(Ne, zp)))
  , Gp = Bu({
    inheritAttrs: !1,
    name: "WebView",
    props: {
        src: {
            type: String,
            default: ""
        },
        fullscreen: {
            type: Boolean,
            default: !0
        }
    },
    setup(e) {
        Kp();
        const t = Nn(null)
          , n = Nn(null)
          , {$attrs: o, $excludeAttrs: r, $listeners: i} = Df({
            excludeListeners: !0
        });
        let s;
        return ( () => {
            const r = document.createElement("iframe");
            Po(( () => {
                for (const e in o.value)
                    if (f(o.value, e)) {
                        const t = o.value[e];
                        r[e] = t
                    }
            }
            )),
            Po(( () => {
                r.src = Du(e.src)
            }
            )),
            n.value = r,
            s = function(e, t, n) {
                const o = () => {
                    var o, r;
                    if (n) {
                        const {top: n, left: o, width: r, height: i} = e.value.getBoundingClientRect();
                        Ue(t.value, {
                            position: "absolute",
                            display: "block",
                            border: "0",
                            top: n + "px",
                            left: o + "px",
                            width: r + "px",
                            height: i + "px"
                        })
                    } else
                        Ue(t.value, {
                            width: (null == (o = e.value) ? void 0 : o.style.width) || "300px",
                            height: (null == (r = e.value) ? void 0 : r.style.height) || "150px"
                        })
                }
                ;
                return o
            }(t, n, e.fullscreen),
            e.fullscreen && document.body.appendChild(r)
        }
        )(),
        vr(( () => {
            var o;
            s(),
            !e.fullscreen && (null == (o = t.value) || o.appendChild(n.value))
        }
        )),
        sr(( () => {
            e.fullscreen && (n.value.style.display = "block")
        }
        )),
        ar(( () => {
            e.fullscreen && (n.value.style.display = "none")
        }
        )),
        _r(( () => {
            e.fullscreen && document.body.removeChild(n.value)
        }
        )),
        () => Ri(bi, null, [Ri("uni-web-view", Ui({
            class: e.fullscreen ? "uni-webview--fullscreen" : ""
        }, i.value, r.value, {
            ref: t
        }), [Ri(df, {
            onResize: s
        }, null, 8, ["onResize"])], 16)])
    }
});
const Yp = "__DC_STAT_UUID"
  , Xp = navigator.cookieEnabled && (window.localStorage || window.sessionStorage) || {};
let Jp;
function Zp() {
    if (Jp = Jp || Xp[Yp],
    !Jp) {
        Jp = Date.now() + "" + Math.floor(1e7 * Math.random());
        try {
            Xp[Yp] = Jp
        } catch (e) {}
    }
    return Jp
}
function Qp() {
    if (!0 !== __uniConfig.darkmode)
        return v(__uniConfig.darkmode) ? __uniConfig.darkmode : "light";
    try {
        return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
    } catch (e) {
        return "light"
    }
}
function eh() {
    let e, t = "0", n = "", o = "phone";
    const r = navigator.language;
    if (Hu) {
        e = "iOS";
        const o = Vu.match(/OS\s([\w_]+)\slike/);
        o && (t = o[1].replace(/_/g, "."));
        const r = Vu.match(/\(([a-zA-Z]+);/);
        r && (n = r[1])
    } else if (Wu) {
        e = "Android";
        const o = Vu.match(/Android[\s/]([\w\.]+)[;\s]/);
        o && (t = o[1]);
        const r = Vu.match(/\((.+?)\)/)
          , i = r ? r[1].split(";") : Vu.split(" ")
          , s = [/\bAndroid\b/i, /\bLinux\b/i, /\bU\b/i, /^\s?[a-z][a-z]$/i, /^\s?[a-z][a-z]-[a-z][a-z]$/i, /\bwv\b/i, /\/[\d\.,]+$/, /^\s?[\d\.,]+$/, /\bBrowser\b/i, /\bMobile\b/i];
        for (let e = 0; e < i.length; e++) {
            const t = i[e];
            if (t.indexOf("Build") > 0) {
                n = t.split("Build")[0].trim();
                break
            }
            let o;
            for (let e = 0; e < s.length; e++)
                if (s[e].test(t)) {
                    o = !0;
                    break
                }
            if (!o) {
                n = t.trim();
                break
            }
        }
    } else if (Ku)
        n = "iPad",
        e = "iOS",
        o = "pad",
        t = g(window.BigInt) ? "14.0" : "13.0";
    else if (Uu || qu || zu) {
        n = "PC",
        e = "PC",
        o = "pc",
        t = "0";
        let r = Vu.match(/\((.+?)\)/)[1];
        if (Uu) {
            switch (e = "Windows",
            Uu[1]) {
            case "5.1":
                t = "XP";
                break;
            case "6.0":
                t = "Vista";
                break;
            case "6.1":
                t = "7";
                break;
            case "6.2":
                t = "8";
                break;
            case "6.3":
                t = "8.1";
                break;
            case "10.0":
                t = "10"
            }
            const n = r && r.match(/[Win|WOW]([\d]+)/);
            n && (t += ` x${n[1]}`)
        } else if (qu) {
            e = "macOS";
            const n = r && r.match(/Mac OS X (.+)/) || "";
            t && (t = n[1].replace(/_/g, "."),
            -1 !== t.indexOf(";") && (t = t.split(";")[0]))
        } else if (zu) {
            e = "Linux";
            const n = r && r.match(/Linux (.*)/) || "";
            n && (t = n[1],
            -1 !== t.indexOf(";") && (t = t.split(";")[0]))
        }
    } else
        e = "Other",
        t = "0",
        o = "unknown";
    const i = `${e} ${t}`
      , s = e.toLocaleLowerCase();
    let a = ""
      , l = String(function() {
        const e = navigator.userAgent
          , t = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1
          , n = e.indexOf("Edge") > -1 && !t
          , o = e.indexOf("Trident") > -1 && e.indexOf("rv:11.0") > -1;
        if (t) {
            new RegExp("MSIE (\\d+\\.\\d+);").test(e);
            const t = parseFloat(RegExp.$1);
            return t > 6 ? t : 6
        }
        return n ? -1 : o ? 11 : -1
    }());
    if ("-1" !== l)
        a = "IE";
    else {
        const e = ["Version", "Firefox", "Chrome", "Edge{0,1}"]
          , t = ["Safari", "Firefox", "Chrome", "Edge"];
        for (let n = 0; n < e.length; n++) {
            const o = e[n]
              , r = new RegExp(`(${o})/(\\S*)\\b`);
            r.test(Vu) && (a = t[n],
            l = Vu.match(r)[2])
        }
    }
    let c = "portrait";
    const u = void 0 === window.screen.orientation ? window.orientation : window.screen.orientation.angle;
    return c = 90 === Math.abs(u) ? "landscape" : "portrait",
    {
        deviceBrand: void 0,
        brand: void 0,
        deviceModel: n,
        deviceOrientation: c,
        model: n,
        system: i,
        platform: s,
        browserName: a.toLocaleLowerCase(),
        browserVersion: l,
        language: r,
        deviceType: o,
        ua: Vu,
        osname: e,
        osversion: t,
        theme: Qp()
    }
}
const th = Sd(0, ( () => {
    const e = window.devicePixelRatio
      , t = Gu()
      , n = Yu(t)
      , o = Xu(t, n)
      , r = function(e, t) {
        return e ? Math[t ? "min" : "max"](screen.height, screen.width) : screen.height
    }(t, n)
      , i = Ju(o);
    let s = window.innerHeight;
    const a = jc.top
      , l = {
        left: jc.left,
        right: i - jc.right,
        top: jc.top,
        bottom: s - jc.bottom,
        width: i - jc.left - jc.right,
        height: s - jc.top - jc.bottom
    }
      , {top: c, bottom: u} = function() {
        const e = document.documentElement.style
          , t = Wc()
          , n = Vc(e, "--window-bottom")
          , o = Vc(e, "--window-left")
          , r = Vc(e, "--window-right")
          , i = Vc(e, "--top-window-height");
        return {
            top: t,
            bottom: n ? n + jc.bottom : 0,
            left: o ? o + jc.left : 0,
            right: r ? r + jc.right : 0,
            topWindowHeight: i || 0
        }
    }();
    return s -= c,
    s -= u,
    {
        windowTop: c,
        windowBottom: u,
        windowWidth: i,
        windowHeight: s,
        pixelRatio: e,
        screenWidth: o,
        screenHeight: r,
        statusBarHeight: a,
        safeArea: l,
        safeAreaInsets: {
            top: jc.top,
            right: jc.right,
            bottom: jc.bottom,
            left: jc.left
        },
        screenTop: r - s
    }
}
));
let nh, oh = !0;
function rh() {
    oh && (nh = eh())
}
const ih = Sd(0, ( () => {
    rh();
    const {deviceBrand: e, deviceModel: t, brand: n, model: o, platform: r, system: i, deviceOrientation: s, deviceType: a, osname: l, osversion: u} = nh;
    return c({
        brand: n,
        deviceBrand: e,
        deviceModel: t,
        devicePixelRatio: window.devicePixelRatio,
        deviceId: Zp(),
        deviceOrientation: s,
        deviceType: a,
        model: o,
        platform: r,
        system: i
    }, {})
}
))
  , sh = Sd(0, ( () => {
    rh();
    const {theme: e, language: t, browserName: n, browserVersion: o} = nh;
    return c({
        appId: __uniConfig.appId,
        appName: __uniConfig.appName,
        appVersion: __uniConfig.appVersion,
        appVersionCode: __uniConfig.appVersionCode,
        appLanguage: Md ? Md() : t,
        enableDebug: !1,
        hostSDKVersion: void 0,
        hostPackageName: void 0,
        hostFontSizeSetting: void 0,
        hostName: n,
        hostVersion: o,
        hostTheme: e,
        hostLanguage: t,
        language: t,
        SDKVersion: "",
        theme: e,
        version: ""
    }, {})
}
))
  , ah = Sd(0, ( () => {
    oh = !0,
    rh(),
    oh = !1;
    const e = th()
      , t = ih()
      , n = sh();
    oh = !0;
    const {ua: o, browserName: r, browserVersion: i, osname: s, osversion: a} = nh
      , l = c(e, t, n, {
        ua: o,
        browserName: r,
        browserVersion: i,
        uniPlatform: "web",
        uniCompileVersion: __uniConfig.compilerVersion,
        uniRuntimeVersion: __uniConfig.compilerVersion,
        fontSizeSetting: void 0,
        osName: s.toLocaleLowerCase(),
        osVersion: a,
        osLanguage: void 0,
        osTheme: void 0
    });
    return delete l.screenTop,
    delete l.enableDebug,
    __uniConfig.darkmode || delete l.theme,
    function(e) {
        let t = {};
        return S(e) && Object.keys(e).sort().forEach((n => {
            const o = n;
            t[o] = e[o]
        }
        )),
        Object.keys(t) ? t : e
    }(l)
}
));
const lh = Sd(0, ( (e, t) => {
    const n = typeof t
      , o = "string" === n ? t : JSON.stringify({
        type: n,
        data: t
    });
    localStorage.setItem(e, o)
}
));
function ch(e) {
    const t = localStorage && localStorage.getItem(e);
    if (!v(t))
        throw new Error("data not found");
    let n = t;
    try {
        const e = function(e) {
            const t = ["object", "string", "number", "boolean", "undefined"];
            try {
                const n = v(e) ? JSON.parse(e) : e
                  , o = n.type;
                if (t.indexOf(o) >= 0) {
                    const e = Object.keys(n);
                    if (2 === e.length && "data"in n) {
                        if (typeof n.data === o)
                            return n.data;
                        if ("object" === o && /^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}Z$/.test(n.data))
                            return new Date(n.data)
                    } else if (1 === e.length)
                        return ""
                }
            } catch (n) {}
        }(JSON.parse(t));
        void 0 !== e && (n = e)
    } catch (o) {}
    return n
}
const uh = Sd(0, (e => {
    try {
        return ch(e)
    } catch (t) {
        return ""
    }
}
))
  , dh = Sd(0, (e => {
    localStorage && localStorage.removeItem(e)
}
))
  , fh = {
    esc: ["Esc", "Escape"],
    enter: ["Enter"]
}
  , ph = Object.keys(fh);
const hh = Ri("div", {
    class: "uni-mask"
}, null, -1);
function mh(e, t, n) {
    return t.onClose = (...e) => (t.visible = !1,
    n.apply(null, e)),
    sa(Jo({
        setup: () => () => (Ti(),
        $i(e, t, null, 16))
    }))
}
function gh(e) {
    let t = document.getElementById(e);
    return t || (t = document.createElement("div"),
    t.id = e,
    document.body.append(t)),
    t
}
function vh(e, {onEsc: t, onEnter: n}) {
    const o = Nn(e.visible)
      , {key: r, disable: i} = function() {
        const e = Nn("")
          , t = Nn(!1)
          , n = n => {
            if (t.value)
                return;
            const o = ph.find((e => -1 !== fh[e].indexOf(n.key)));
            o && (e.value = o),
            to(( () => e.value = ""))
        }
        ;
        return vr(( () => {
            document.addEventListener("keyup", n)
        }
        )),
        _r(( () => {
            document.removeEventListener("keyup", n)
        }
        )),
        {
            key: e,
            disable: t
        }
    }();
    return Bo(( () => e.visible), (e => o.value = e)),
    Bo(( () => o.value), (e => i.value = !e)),
    Po(( () => {
        const {value: e} = r;
        "esc" === e ? t && t() : "enter" === e && n && n()
    }
    )),
    o
}
const yh = Cd("request", ( ({url: e, data: t, header: n={}, method: o, dataType: r, responseType: i, withCredentials: s, timeout: a=__uniConfig.networkTimeout.request}, {resolve: l, reject: c}) => {
    let u = null;
    const d = function(e) {
        const t = Object.keys(e).find((e => "content-type" === e.toLowerCase()));
        if (!t)
            return;
        const n = e[t];
        if (0 === n.indexOf("application/json"))
            return "json";
        if (0 === n.indexOf("application/x-www-form-urlencoded"))
            return "urlencoded";
        return "string"
    }(n);
    if ("GET" !== o)
        if (v(t) || t instanceof ArrayBuffer)
            u = t;
        else if ("json" === d)
            try {
                u = JSON.stringify(t)
            } catch (g) {
                u = t.toString()
            }
        else if ("urlencoded" === d) {
            const e = [];
            for (const n in t)
                f(t, n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
            u = e.join("&")
        } else
            u = t.toString();
    const p = new XMLHttpRequest
      , h = new bh(p);
    p.open(o, e);
    for (const v in n)
        f(n, v) && p.setRequestHeader(v, n[v]);
    const m = setTimeout((function() {
        p.onload = p.onabort = p.onerror = null,
        h.abort(),
        c("timeout", {
            errCode: 5
        })
    }
    ), a);
    return p.responseType = i,
    p.onload = function() {
        clearTimeout(m);
        const e = p.status;
        let t = "text" === i ? p.responseText : p.response;
        if ("text" === i && "json" === r)
            try {
                t = JSON.parse(t)
            } catch (g) {}
        l({
            data: t,
            statusCode: e,
            header: _h(p.getAllResponseHeaders()),
            cookies: []
        })
    }
    ,
    p.onabort = function() {
        clearTimeout(m),
        c("abort", {
            errCode: 600003
        })
    }
    ,
    p.onerror = function() {
        clearTimeout(m),
        c(void 0, {
            errCode: 5
        })
    }
    ,
    p.withCredentials = s,
    p.send(u),
    h
}
), 0, Dd);
class bh {
    constructor(e) {
        this._xhr = e
    }
    abort() {
        this._xhr && (this._xhr.abort(),
        delete this._xhr)
    }
    onHeadersReceived(e) {
        throw new Error("Method not implemented.")
    }
    offHeadersReceived(e) {
        throw new Error("Method not implemented.")
    }
}
function _h(e) {
    const t = {};
    return e.split(ne).forEach((e => {
        const n = e.match(/(\S+\s*):\s*(.*)/);
        n && 3 === n.length && (t[n[1]] = n[2])
    }
    )),
    t
}
const wh = Td("navigateBack", ( (e, {resolve: t, reject: n}) => {
    let o = !0;
    return !0 === tu(_e, {
        from: e.from || "navigateBack"
    }) && (o = !1),
    o ? (Rp().$router.go(-e.delta),
    t()) : n(_e)
}
), 0, Jd);
function xh({type: e, url: t, tabBarText: n, events: o, isAutomatedTesting: r}, i) {
    const s = Rp().$router
      , {path: a, query: l} = function(e) {
        const [t,n] = e.split("?", 2);
        return {
            path: t,
            query: tt(n || "")
        }
    }(t);
    return new Promise(( (t, i) => {
        const c = function(e) {
            return {
                __id__: ++hp,
                __type__: e
            }
        }(e);
        s["navigateTo" === e ? "push" : "replace"]({
            path: a,
            query: l,
            state: c,
            force: !0
        }).then((a => {
            if (rl(a))
                return i(a.message);
            if ("switchTab" === e && (s.currentRoute.value.meta.tabBarText = n),
            "navigateTo" === e) {
                const e = s.currentRoute.value.meta;
                return e.eventChannel ? o && (Object.keys(o).forEach((t => {
                    e.eventChannel._addListener(t, "on", o[t])
                }
                )),
                e.eventChannel._clearCache()) : e.eventChannel = new ot(c.__id__,o),
                t(r ? {
                    __id__: c.__id__
                } : {
                    eventChannel: e.eventChannel
                })
            }
            return r ? t({
                __id__: c.__id__
            }) : t()
        }
        ))
    }
    ))
}
const Ch = Td(Wd, ( ({url: e, events: t, isAutomatedTesting: n}, {resolve: o, reject: r}) => xh({
    type: Wd,
    url: e,
    events: t,
    isAutomatedTesting: n
}).then(o).catch(r)), 0, Gd);
const Sh = Td(Hd, ( ({url: e, isAutomatedTesting: t}, {resolve: n, reject: o}) => (function() {
    const e = Yc();
    if (!e)
        return;
    const t = e.$page;
    pp(vp(t.path, t.id))
}(),
xh({
    type: Hd,
    url: e,
    isAutomatedTesting: t
}).then(n).catch(o))), 0, Yd);
function Th() {
    const e = dp.keys();
    for (const t of e)
        pp(t)
}
const Eh = Td(Ud, ( ({url: e, isAutomatedTesting: t}, {resolve: n, reject: o}) => (Th(),
xh({
    type: Ud,
    url: e,
    isAutomatedTesting: t
}).then(n).catch(o))), 0, Xd);
function kh(e) {
    __uniConfig.darkmode && om.on(fe, e)
}
function Lh(e) {
    om.off(fe, e)
}
function Oh(e) {
    let t = {};
    return __uniConfig.darkmode && (t = ft(e, __uniConfig.themeConfig, Qp())),
    __uniConfig.darkmode ? t : e
}
const $h = {
    light: {
        cancelColor: "#000000"
    },
    dark: {
        cancelColor: "rgb(170, 170, 170)"
    }
}
  , Ph = Jo({
    props: {
        title: {
            type: String,
            default: ""
        },
        content: {
            type: String,
            default: ""
        },
        showCancel: {
            type: Boolean,
            default: !0
        },
        cancelText: {
            type: String,
            default: "Cancel"
        },
        cancelColor: {
            type: String,
            default: "#000000"
        },
        confirmText: {
            type: String,
            default: "OK"
        },
        confirmColor: {
            type: String,
            default: "#007aff"
        },
        visible: {
            type: Boolean
        },
        editable: {
            type: Boolean,
            default: !1
        },
        placeholderText: {
            type: String,
            default: ""
        }
    },
    setup(e, {emit: t}) {
        const n = Nn("")
          , o = () => s.value = !1
          , r = () => (o(),
        t("close", "cancel"))
          , i = () => (o(),
        t("close", "confirm", n.value))
          , s = vh(e, {
            onEsc: r,
            onEnter: () => {
                !e.editable && i()
            }
        })
          , a = function(e) {
            const t = Nn(e.cancelColor)
              , n = ({theme: e}) => {
                ( (e, t) => {
                    t.value = $h[e].cancelColor
                }
                )(e, t)
            }
            ;
            return Po(( () => {
                e.visible ? (t.value = e.cancelColor,
                "#000" === e.cancelColor && ("dark" === Qp() && n({
                    theme: "dark"
                }),
                kh(n))) : Lh(n)
            }
            )),
            t
        }(e);
        return () => {
            const {title: t, content: o, showCancel: l, confirmText: c, confirmColor: u, editable: d, placeholderText: f} = e;
            return n.value = o,
            Ri(gs, {
                name: "uni-fade"
            }, {
                default: () => [jo(Ri("uni-modal", {
                    onTouchmove: Fc
                }, [hh, Ri("div", {
                    class: "uni-modal"
                }, [t ? Ri("div", {
                    class: "uni-modal__hd"
                }, [Ri("strong", {
                    class: "uni-modal__title",
                    textContent: t || ""
                }, null, 8, ["textContent"])]) : null, d ? Ri("textarea", {
                    class: "uni-modal__textarea",
                    rows: "1",
                    placeholder: f,
                    value: o,
                    onInput: e => n.value = e.target.value
                }, null, 40, ["placeholder", "value", "onInput"]) : Ri("div", {
                    class: "uni-modal__bd",
                    onTouchmovePassive: Dc,
                    textContent: o
                }, null, 40, ["onTouchmovePassive", "textContent"]), Ri("div", {
                    class: "uni-modal__ft"
                }, [l && Ri("div", {
                    style: {
                        color: a.value
                    },
                    class: "uni-modal__btn uni-modal__btn_default",
                    onClick: r
                }, [e.cancelText], 12, ["onClick"]), Ri("div", {
                    style: {
                        color: u
                    },
                    class: "uni-modal__btn uni-modal__btn_primary",
                    onClick: i
                }, [c], 12, ["onClick"])])])], 40, ["onTouchmove"]), [[$s, s.value]])]
            })
        }
    }
});
let Ah;
const Bh = qe(( () => {
    om.on("onHidePopup", ( () => Ah.visible = !1))
}
));
let Ih;
function Mh(e, t) {
    const n = "confirm" === e
      , o = {
        confirm: n,
        cancel: "cancel" === e
    };
    n && Ah.editable && (o.content = t),
    Ih && Ih(o)
}
const Nh = Td("showModal", ( (e, {resolve: t}) => {
    Bh(),
    Ih = t,
    Ah ? (c(Ah, e),
    Ah.visible = !0) : (Ah = _n(e),
    to(( () => (mh(Ph, Ah, Mh).mount(gh("u-a-m")),
    to(( () => Ah.visible = !0))))))
}
), 0, sf)
  , Rh = {
    title: {
        type: String,
        default: ""
    },
    icon: {
        default: "success",
        validator: e => -1 !== af.indexOf(e)
    },
    image: {
        type: String,
        default: ""
    },
    duration: {
        type: Number,
        default: 1500
    },
    mask: {
        type: Boolean,
        default: !1
    },
    visible: {
        type: Boolean
    }
}
  , jh = "uni-toast__icon"
  , Fh = {
    light: "#fff",
    dark: "rgba(255,255,255,0.9)"
}
  , Dh = e => Fh[e]
  , Vh = Jo({
    name: "Toast",
    props: Rh,
    setup(e) {
        ic(),
        sc();
        const {Icon: t} = function(e) {
            const t = Nn(Dh(Qp()))
              , n = ({theme: e}) => t.value = Dh(e);
            Po(( () => {
                e.visible ? kh(n) : Lh(n)
            }
            ));
            const o = as(( () => {
                switch (e.icon) {
                case "success":
                    return Ri(Gc(qc, t.value, 38), {
                        class: jh
                    });
                case "error":
                    return Ri(Gc(zc, t.value, 38), {
                        class: jh
                    });
                case "loading":
                    return Ri("i", {
                        class: [jh, "uni-loading"]
                    }, null, 2);
                default:
                    return null
                }
            }
            ));
            return {
                Icon: o
            }
        }(e)
          , n = vh(e, {});
        return () => {
            const {mask: o, duration: r, title: i, image: s} = e;
            return Ri(gs, {
                name: "uni-fade"
            }, {
                default: () => [jo(Ri("uni-toast", {
                    "data-duration": r
                }, [o ? Ri("div", {
                    class: "uni-mask",
                    style: "background: transparent;",
                    onTouchmove: Fc
                }, null, 40, ["onTouchmove"]) : "", s || t.value ? Ri("div", {
                    class: "uni-toast"
                }, [s ? Ri("img", {
                    src: s,
                    class: jh
                }, null, 10, ["src"]) : t.value, Ri("p", {
                    class: "uni-toast__content"
                }, [i])]) : Ri("div", {
                    class: "uni-sample-toast"
                }, [Ri("p", {
                    class: "uni-simple-toast__text"
                }, [i])])], 8, ["data-duration"]), [[$s, n.value]])]
            })
        }
    }
});
let Wh, Hh, Uh = "";
const qh = gt();
function zh(e) {
    Wh ? c(Wh, e) : (Wh = _n(c(e, {
        visible: !1
    })),
    to(( () => {
        qh.run(( () => {
            Bo([ () => Wh.visible, () => Wh.duration], ( ([e,t]) => {
                if (e) {
                    if (Hh && clearTimeout(Hh),
                    "onShowLoading" === Uh)
                        return;
                    Hh = setTimeout(( () => {
                        Jh("onHideToast")
                    }
                    ), t)
                } else
                    Hh && clearTimeout(Hh)
            }
            ))
        }
        )),
        om.on("onHidePopup", ( () => Jh("onHidePopup"))),
        mh(Vh, Wh, ( () => {}
        )).mount(gh("u-a-t"))
    }
    ))),
    setTimeout(( () => {
        Wh.visible = !0
    }
    ), 10)
}
const Kh = Td("showToast", ( (e, {resolve: t, reject: n}) => {
    zh(e),
    Uh = "onShowToast",
    t()
}
), 0, lf)
  , Gh = {
    icon: "loading",
    duration: 1e8,
    image: ""
}
  , Yh = Td("showLoading", ( (e, {resolve: t, reject: n}) => {
    c(e, Gh),
    zh(e),
    Uh = "onShowLoading",
    t()
}
), 0, rf)
  , Xh = Td("hideLoading", ( (e, {resolve: t, reject: n}) => {
    Jh("onHideLoading"),
    t()
}
));
function Jh(e) {
    const {t: t} = nc();
    if (!Uh)
        return;
    let n = "";
    if ("onHideToast" === e && "onShowToast" !== Uh ? n = t("uni.showToast.unpaired") : "onHideLoading" === e && "onShowLoading" !== Uh && (n = t("uni.showLoading.unpaired")),
    n)
        return console.warn(n);
    Uh = "",
    setTimeout(( () => {
        Wh.visible = !1
    }
    ), 10)
}
function Zh(e) {
    function t() {
        var t;
        t = e.navigationBar.titleText,
        document.title = t,
        om.emit(Oe, {
            titleText: t
        })
    }
    Po(t),
    sr(t)
}
const Qh = Td(of, ( (e, {resolve: t, reject: n}) => {
    !function(e, t, n, o, r) {
        if (!e)
            return r("page not found");
        const {navigationBar: i} = e;
        switch (t) {
        case "setNavigationBarColor":
            const {frontColor: e, backgroundColor: t, animation: o} = n
              , {duration: r, timingFunc: s} = o;
            e && (i.titleColor = "#000000" === e ? "#000000" : "#ffffff"),
            t && (i.backgroundColor = t),
            i.duration = r + "ms",
            i.timingFunc = s;
            break;
        case "showNavigationBarLoading":
            i.loading = !0;
            break;
        case "hideNavigationBarLoading":
            i.loading = !1;
            break;
        case of:
            const {title: a} = n;
            i.titleText = a
        }
        o()
    }(Xc(), of, e, t, n)
}
))
  , em = "0px"
  , tm = Iu({
    name: "Layout",
    setup(e, {emit: t}) {
        const n = Nn(null);
        Hc({
            "--status-bar-height": em,
            "--top-window-height": em,
            "--window-left": em,
            "--window-right": em,
            "--window-margin": em,
            "--tab-bar-height": em
        });
        const o = function() {
            const e = Fl();
            return {
                routeKey: as(( () => vp("/" + e.meta.route, op()))),
                isTabBar: as(( () => e.meta.isTabBar)),
                routeCache: bp
            }
        }()
          , {layoutState: r, windowState: i} = function() {
            np();
            {
                const e = _n({
                    marginWidth: 0,
                    leftWindowWidth: 0,
                    rightWindowWidth: 0
                });
                return Bo(( () => e.marginWidth), (e => Hc({
                    "--window-margin": e + "px"
                }))),
                Bo(( () => e.leftWindowWidth + e.marginWidth), (e => {
                    Hc({
                        "--window-left": e + "px"
                    })
                }
                )),
                Bo(( () => e.rightWindowWidth + e.marginWidth), (e => {
                    Hc({
                        "--window-right": e + "px"
                    })
                }
                )),
                {
                    layoutState: e,
                    windowState: as(( () => ({})))
                }
            }
        }();
        !function(e, t) {
            const n = np();
            function o() {
                const o = document.body.clientWidth
                  , r = fp();
                let i = {};
                if (r.length > 0) {
                    i = r[r.length - 1].$page.meta
                } else {
                    const e = au(n.path, !0);
                    e && (i = e.meta)
                }
                const s = parseInt(String((f(i, "maxWidth") ? i.maxWidth : __uniConfig.globalStyle.maxWidth) || Number.MAX_SAFE_INTEGER));
                let a = !1;
                a = o > s,
                a && s ? (e.marginWidth = (o - s) / 2,
                to(( () => {
                    const e = t.value;
                    e && e.setAttribute("style", "max-width:" + s + "px;margin:0 auto;")
                }
                ))) : (e.marginWidth = 0,
                to(( () => {
                    const e = t.value;
                    e && e.removeAttribute("style")
                }
                )))
            }
            Bo([ () => n.path], o),
            vr(( () => {
                o(),
                window.addEventListener("resize", o)
            }
            ))
        }(r, n);
        const s = function(e) {
            const t = Nn(!1);
            return as(( () => ({
                "uni-app--showtabbar": e,
                "uni-app--maxwidth": t.value
            })))
        }(!1);
        return () => {
            const e = function(e) {
                const t = function({routeKey: e, isTabBar: t, routeCache: n}) {
                    return Ri(Rl, null, {
                        default: vo(( ({Component: o}) => [(Ti(),
                        $i(rr, {
                            matchBy: "key",
                            cache: n
                        }, [(Ti(),
                        $i(To(o), {
                            type: t.value ? "tabBar" : "",
                            key: e.value
                        }))], 1032, ["cache"]))])),
                        _: 1
                    })
                }(e);
                return t
            }(o);
            return Ri("uni-app", {
                ref: n,
                class: s.value
            }, [e, !1], 2)
        }
    }
});
const nm = c(mc, {
    publishHandler(e, t, n) {
        om.subscribeHandler(e, t, n)
    }
})
  , om = c(_u, {
    publishHandler(e, t, n) {
        nm.subscribeHandler(e, t, n)
    }
})
  , rm = Iu({
    name: "PageHead",
    setup() {
        const e = Nn(null)
          , t = ep()
          , n = function(e, t) {
            const n = Sn(e)
              , o = n ? _n(Oh(e)) : Oh(e);
            return __uniConfig.darkmode && n && Bo(e, (e => {
                const t = Oh(e);
                for (const n in t)
                    o[n] = t[n]
            }
            )),
            t && kh(t),
            o
        }(t.navigationBar, ( () => {
            const e = Oh(t.navigationBar);
            n.backgroundColor = e.backgroundColor,
            n.titleColor = e.titleColor
        }
        ))
          , {clazz: o, style: r} = function(e) {
            const t = as(( () => {
                const {type: t, titlePenetrate: n, shadowColorType: o} = e
                  , r = {
                    "uni-page-head": !0,
                    "uni-page-head-transparent": "transparent" === t,
                    "uni-page-head-titlePenetrate": "YES" === n,
                    "uni-page-head-shadow": !!o
                };
                return o && (r[`uni-page-head-shadow-${o}`] = !0),
                r
            }
            ))
              , n = as(( () => ({
                backgroundColor: e.backgroundColor,
                color: e.titleColor,
                transitionDuration: e.duration,
                transitionTimingFunction: e.timingFunc
            })));
            return {
                clazz: t,
                style: n
            }
        }(n);
        return () => {
            const i = function(e, t) {
                if (!t)
                    return Ri("div", {
                        class: "uni-page-head-btn",
                        onClick: sm
                    }, [Gc(Kc, "transparent" === e.type ? "#fff" : e.titleColor, 26)], 8, ["onClick"])
            }(n, t.isQuit)
              , s = n.type || "default"
              , a = "transparent" !== s && "float" !== s && Ri("div", {
                class: {
                    "uni-placeholder": !0,
                    "uni-placeholder-titlePenetrate": n.titlePenetrate
                }
            }, null, 2);
            return Ri("uni-page-head", {
                "uni-page-head-type": s
            }, [Ri("div", {
                ref: e,
                class: o.value,
                style: r.value
            }, [Ri("div", {
                class: "uni-page-head-hd"
            }, [i]), im(n), Ri("div", {
                class: "uni-page-head-ft"
            }, [])], 6), a], 8, ["uni-page-head-type"])
        }
    }
});
function im(e, t) {
    return function({type: e, loading: t, titleSize: n, titleText: o, titleImage: r}) {
        return Ri("div", {
            class: "uni-page-head-bd"
        }, [Ri("div", {
            style: {
                fontSize: n,
                opacity: "transparent" === e ? 0 : 1
            },
            class: "uni-page-head__title"
        }, [t ? Ri("i", {
            class: "uni-loading"
        }, null) : r ? Ri("img", {
            src: r,
            class: "uni-page-head__title_image"
        }, null, 8, ["src"]) : o], 4)])
    }(e)
}
function sm() {
    1 === fp().length ? Eh({
        url: "/"
    }) : wh({
        from: "backbutton",
        success() {}
    })
}
const am = Iu({
    name: "PageBody",
    setup(e, t) {
        const n = !1
          , o = Nn(null);
        return Bo(( () => n.enablePullDownRefresh), ( () => {
            o.value = null
        }
        ), {
            immediate: !0
        }),
        () => Ri(bi, null, [!1, Ri("uni-page-wrapper", o.value, [Ri("uni-page-body", null, [kr(t.slots, "default")])], 16)])
    }
})
  , lm = Iu({
    name: "Page",
    setup(e, t) {
        const n = tp(op())
          , o = n.navigationBar
          , r = {};
        return Zh(n),
        () => Ri("uni-page", {
            "data-page": n.route,
            style: r
        }, "custom" !== o.style ? [Ri(rm), cm(t)] : [cm(t)])
    }
});
function cm(e) {
    return Ti(),
    $i(am, {
        key: 0
    }, {
        default: vo(( () => [kr(e.slots, "page")])),
        _: 3
    })
}
const um = {}
  , dm = function(e, t, n) {
    let o = Promise.resolve();
    if (t && t.length > 0) {
        const e = document.getElementsByTagName("link")
          , r = document.querySelector("meta[property=csp-nonce]")
          , i = (null == r ? void 0 : r.nonce) || (null == r ? void 0 : r.getAttribute("nonce"));
        o = Promise.all(t.map((t => {
            if (t = function(e, t) {
                return new URL(e,t).href
            }(t, n),
            t in um)
                return;
            um[t] = !0;
            const o = t.endsWith(".css")
              , r = o ? '[rel="stylesheet"]' : "";
            if (!!n)
                for (let n = e.length - 1; n >= 0; n--) {
                    const r = e[n];
                    if (r.href === t && (!o || "stylesheet" === r.rel))
                        return
                }
            else if (document.querySelector(`link[href="${t}"]${r}`))
                return;
            const s = document.createElement("link");
            return s.rel = o ? "stylesheet" : "modulepreload",
            o || (s.as = "script",
            s.crossOrigin = ""),
            s.href = t,
            i && s.setAttribute("nonce", i),
            document.head.appendChild(s),
            o ? new Promise(( (e, n) => {
                s.addEventListener("load", e),
                s.addEventListener("error", ( () => n(new Error(`Unable to preload CSS for ${t}`))))
            }
            )) : void 0
        }
        )))
    }
    return o.then(( () => e())).catch((e => {
        const t = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (t.payload = e,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw e
    }
    ))
}
  , fm = {
    loading: "AsyncLoading",
    error: "AsyncError",
    delay: 200,
    timeout: 6e4,
    suspensible: !0
};
window.uni = {},
window.wx = {},
window.rpx2px = Id;
const pm = Object.assign({})
  , hm = Object.assign;
window.__uniConfig = hm({
    globalStyle: {
        backgroundColor: "#F8F8F8",
        navigationBar: {
            backgroundColor: "#F8F8F8",
            titleText: "中国移动 × 和平精英",
            type: "default",
            titleColor: "#000000"
        },
        isNVue: !1
    },
    compilerVersion: "4.24"
}, {
    appId: "__UNI__2FF2CF6",
    appName: "中国移动 X 和平精英",
    appVersion: "1.0.0",
    appVersionCode: "100",
    async: fm,
    debug: !1,
    networkTimeout: {
        request: 6e4,
        connectSocket: 6e4,
        uploadFile: 6e4,
        downloadFile: 6e4
    },
    sdkConfigs: {},
    qqMapKey: void 0,
    bMapKey: void 0,
    googleMapKey: void 0,
    aMapKey: void 0,
    aMapSecurityJsCode: void 0,
    aMapServiceHost: void 0,
    nvue: {
        "flex-direction": "column"
    },
    locale: "",
    fallbackLocale: "",
    locales: Object.keys(pm).reduce(( (e, t) => {
        const n = t.replace(/\.\/locale\/(uni-app.)?(.*).json/, "$2");
        return hm(e[n] || (e[n] = {}), pm[t].default),
        e
    }
    ), {}),
    router: {
        mode: "hash",
        base: "./",
        assets: "assets",
        routerBase: "/"
    },
    darkmode: !1,
    themeConfig: {}
}),
window.__uniLayout = window.__uniLayout || {};
const mm = {
    delay: fm.delay,
    timeout: fm.timeout,
    suspensible: fm.suspensible
};
fm.loading && (mm.loadingComponent = {
    name: "SystemAsyncLoading",
    render: () => Ri(Co(fm.loading))
}),
fm.error && (mm.errorComponent = {
    name: "SystemAsyncError",
    render: () => Ri(Co(fm.error))
});
const gm = () => dm(( () => import("./pages-index-index.VcbwdKDF.js")), __vite__mapDeps([0, 1, 2]), import.meta.url).then((e => Vp(e.default || e)))
  , vm = Qo(hm({
    loader: gm
}, mm))
  , ym = () => dm(( () => import("./pages-user-agreement-user-agreement.eOJfRXfd.js")), __vite__mapDeps([3, 1, 4]), import.meta.url).then((e => Vp(e.default || e)))
  , bm = Qo(hm({
    loader: ym
}, mm))
  , _m = () => dm(( () => import("./pages-web-view-web-view.BHYvRNjm.js")), [], import.meta.url).then((e => Vp(e.default || e)))
  , wm = Qo(hm({
    loader: _m
}, mm));
function xm(e, t) {
    return Ti(),
    $i(lm, null, {
        page: vo(( () => [Ri(e, hm({}, t, {
            ref: "page"
        }), null, 512)])),
        _: 1
    })
}
function Cm(e, t) {
    return "string" == typeof e ? t : e
}
window.__uniRoutes = [{
    path: "/",
    alias: "/pages/index/index",
    component: {
        setup() {
            const e = Rp()
              , t = e && e.$route && e.$route.query || {};
            return () => xm(vm, t)
        }
    },
    loader: gm,
    meta: {
        isQuit: !0,
        isEntry: !0,
        navigationBar: {
            style: "custom",
            type: "default"
        },
        isNVue: !1
    }
}, {
    path: "/pages/user-agreement/user-agreement",
    component: {
        setup() {
            const e = Rp()
              , t = e && e.$route && e.$route.query || {};
            return () => xm(bm, t)
        }
    },
    loader: ym,
    meta: {
        navigationBar: {
            titleText: "用户协议",
            style: "custom",
            type: "default"
        },
        isNVue: !1
    }
}, {
    path: "/pages/web-view/web-view",
    component: {
        setup() {
            const e = Rp()
              , t = e && e.$route && e.$route.query || {};
            return () => xm(wm, t)
        }
    },
    loader: _m,
    meta: {
        enablePullDownRefresh: !1,
        navigationBar: {
            titleText: "",
            type: "default"
        },
        isNVue: !1
    }
}].map((e => (e.meta.route = (e.alias || e.path).slice(1),
e)));
const Sm = (e => (t, n=Yi()) => {
    !ns && hr(e, t, n)
}
)(ce)
  , Tm = Nn({
    ResUrl: "https://gp.playinjoy.com/campus/hpjy",
    LocalCacheKey: "cmcc-hpjy-lw",
    GameKey: "1",
    CardId: "LW_CMCC_CARD_000002",
    TouchCode: "P00000045301",
    ChannelType: 48,
    SKUList: [{
        title: "荣耀勋章",
        icon: "2",
        id: 11,
        desc: "",
        type: 0,
        price: 10
    }, {
        title: "物资币",
        icon: "3",
        id: 12,
        desc: "",
        type: 0,
        price: 10
    }, {
        title: "幸运币",
        icon: "1",
        id: 13,
        desc: "",
        type: 0,
        price: 10
    }, {
        title: "服饰币",
        icon: "4",
        id: 14,
        desc: "",
        type: 0,
        price: 1
    }, {
        title: "蓝色运动服上衣",
        icon: "5",
        id: 21,
        desc: "",
        type: 1,
        price: 40
    }, {
        title: "战地情缘T恤(LO)",
        icon: "6",
        id: 22,
        desc: "",
        type: 1,
        price: 40
    }, {
        title: "战地情缘T恤(VE)",
        icon: "7",
        id: 23,
        desc: "",
        type: 1,
        price: 40
    }, {
        title: "战地恋人T恤(男)",
        icon: "8",
        id: 24,
        desc: "",
        type: 1,
        price: 40
    }, {
        title: "战地恋人T恤(女)",
        icon: "9",
        id: 25,
        desc: "",
        type: 1,
        price: 40
    }, {
        title: "卧虎藏龙T恤(红)",
        icon: "10",
        id: 26,
        desc: "",
        type: 1,
        price: 40
    }, {
        title: "黑色ROCK长袖T恤",
        icon: "11",
        id: 27,
        desc: "",
        type: 1,
        price: 80
    }, {
        title: "情人之石T恤",
        icon: "12",
        id: 28,
        desc: "",
        type: 1,
        price: 40
    }, {
        title: "情人之梦T恤",
        icon: "13",
        id: 29,
        desc: "",
        type: 1,
        price: 40
    }, {
        title: "唐装(红)",
        icon: "14",
        id: 30,
        desc: "",
        type: 1,
        price: 120
    }, {
        title: "水墨画口罩(白)",
        icon: "15",
        id: 31,
        desc: "",
        type: 1,
        price: 40
    }, {
        title: "火焰口罩",
        icon: "16",
        id: 32,
        desc: "",
        type: 1,
        price: 160
    }],
    APPID: "wxf59c9bfb16b46ea1",
    H5Share: {
        link: "https://gp.playinjoy.com/campaigns/hp-union/index.html",
        title: "办移动潮玩卡，领150元皮肤补贴",
        timeline: "黑色高级特训官、星河浪客等礼包等您来换",
        desc: "黑色高级特训官、星河浪客等礼包等您来换",
        imgUrl: "https://gp.playinjoy.com/campus/hpjy/image/share/icon0.png"
    },
    White: [],
    region: {
        1e5: {
            900290: "陕西",
            900250: "江苏",
            900451: "黑龙江",
            900100: "北京",
            900891: "西藏",
            900731: "湖南",
            900931: "甘肃",
            900471: "内蒙古",
            900851: "贵州",
            900311: "河北",
            900200: "广东",
            900971: "青海",
            900898: "海南",
            900210: "上海",
            900220: "天津",
            900551: "安徽",
            900591: "福建",
            900240: "辽宁",
            900871: "云南",
            900371: "河南",
            900951: "宁夏",
            900771: "广西",
            900571: "浙江",
            900351: "山西",
            900991: "新疆",
            900791: "江西",
            900230: "重庆",
            900270: "湖北",
            900431: "吉林",
            900531: "山东",
            900280: "四川"
        },
        900290: {
            800910: "咸阳市",
            800911: "延安市",
            800913: "渭南市",
            800912: "榆林市",
            800914: "商洛市",
            800916: "汉中市",
            800915: "安康市",
            800917: "宝鸡市",
            800919: "铜川市",
            800290: "西安市"
        },
        900250: {
            800510: "无锡市",
            800513: "南通市",
            800523: "泰州市",
            800519: "常州市",
            800511: "镇江市",
            800518: "连云港市",
            800527: "宿迁市",
            800514: "扬州市",
            800512: "苏州市",
            800250: "南京市",
            800515: "盐城市",
            800517: "淮安市",
            800516: "徐州市"
        },
        900451: {
            800451: "哈尔滨市",
            800464: "七台河市",
            800452: "齐齐哈尔市",
            800457: "大兴安岭地区",
            800455: "绥化市",
            800459: "大庆市",
            800468: "鹤岗市",
            800456: "黑河市",
            800467: "鸡西市",
            800458: "伊春市",
            800469: "双鸭山市",
            800453: "牡丹江市",
            800454: "佳木斯市"
        },
        900100: {
            800100: "北京市"
        },
        900891: {
            800894: "林芝地区",
            800896: "那曲地区",
            800892: "日喀则地区",
            800891: "拉萨市",
            800893: "山南地区",
            800897: "阿里地区",
            800895: "昌都地区"
        },
        900731: {
            800736: "常德市",
            800732: "湘潭市",
            800734: "衡阳市",
            800735: "郴州市",
            800737: "益阳市",
            800733: "株洲市",
            800739: "邵阳市",
            800731: "长沙市",
            800745: "怀化市",
            800746: "永州市",
            800744: "张家界市",
            800730: "岳阳市",
            800743: "湘西土家族苗族自治州",
            800738: "娄底市"
        },
        900931: {
            800930: "临夏回族自治州",
            800933: "平凉市",
            800934: "庆阳市",
            800935: "武威市",
            800941: "甘南藏族自治州",
            800938: "天水市",
            800945: "金昌市",
            800947: "嘉峪关市",
            800939: "陇南市",
            800932: "定西市",
            800937: "酒泉市",
            800931: "兰州市",
            800936: "张掖市",
            800943: "白银市"
        },
        900471: {
            800471: "呼和浩特市",
            800478: "巴彦淖尔市",
            800483: "阿拉善盟",
            800482: "兴安盟",
            800473: "乌海市",
            800475: "通辽市",
            800472: "包头市",
            800474: "乌兰察布市",
            800470: "呼伦贝尔市",
            800477: "鄂尔多斯市",
            800476: "赤峰市",
            800479: "锡林郭勒盟"
        },
        900851: {
            800857: "毕节地区",
            800855: "黔东南苗族侗族自治州",
            800852: "遵义市",
            800853: "安顺市",
            800856: "铜仁地区",
            800851: "贵阳市",
            800859: "黔西南布依族苗族自治州",
            800858: "六盘水市",
            800854: "黔南布依族苗族自治州",
            800850: "贵安市"
        },
        900311: {
            800319: "邢台市",
            800314: "承德市",
            800312: "保定市",
            800310: "邯郸市",
            800316: "廊坊市",
            800318: "衡水市",
            800317: "沧州市",
            800315: "唐山市",
            800335: "秦皇岛市",
            800311: "石家庄市",
            800313: "张家口市",
            800336: "雄安新区"
        },
        900200: {
            800752: "惠州市",
            800751: "韶关市",
            800762: "河源市",
            800758: "肇庆市",
            800753: "梅州市",
            800769: "东莞市",
            800759: "湛江市",
            800668: "茂名市",
            800755: "深圳市",
            800660: "汕尾市",
            800768: "潮州市",
            800200: "广州市",
            800763: "清远市",
            800757: "佛山市",
            800663: "揭阳市",
            800662: "阳江市",
            800766: "云浮市",
            800756: "珠海市",
            800754: "汕头市",
            800760: "中山市",
            800750: "江门市"
        },
        900971: {
            800970: "海北藏族自治州",
            800972: "海东地区",
            800979: "格尔木市",
            800975: "果洛藏族自治州",
            800977: "海西蒙古族藏族自治州",
            800976: "玉树藏族自治州",
            800974: "海南藏族自治州",
            800971: "西宁市",
            800973: "黄南藏族自治州"
        },
        900898: {
            800989: "东方市",
            800907: "定安县",
            800904: "澄迈县",
            800980: "临高县",
            800985: "保亭县",
            800983: "乐东县",
            800898: "海口市",
            800900: "文昌市",
            800889: "屯昌县",
            800721: "三亚市",
            800986: "琼中县",
            800981: "白沙县",
            800984: "陵水县",
            800899: "五指山市",
            800988: "万宁市",
            800982: "昌江县",
            800905: "琼海市",
            800890: "儋州市"
        },
        900210: {
            800210: "上海市"
        },
        900220: {
            800220: "天津市"
        },
        900551: {
            800553: "芜湖市",
            800559: "黄山市",
            800561: "淮北市",
            800554: "淮南市",
            800556: "安庆市",
            800551: "合肥市",
            800562: "铜陵市",
            800563: "宣城市",
            800555: "马鞍山市",
            800558: "阜阳市",
            800567: "亳州市",
            800552: "蚌埠市",
            800564: "六安市",
            800566: "池州市",
            800550: "滁州市",
            800557: "宿州市"
        },
        900591: {
            800593: "宁德市",
            800591: "福州市",
            800598: "三明市",
            800592: "厦门市",
            800595: "泉州市",
            800594: "莆田市",
            800597: "龙岩市",
            800599: "南平市",
            800596: "漳州市"
        },
        900240: {
            800419: "辽阳市",
            800413: "抚顺市",
            800415: "丹东市",
            800411: "大连市",
            800412: "鞍山市",
            800414: "本溪市",
            800240: "沈阳市",
            800410: "铁岭市",
            800416: "锦州市",
            800429: "葫芦岛市",
            800421: "朝阳市",
            800427: "盘锦市",
            800418: "阜新市",
            800417: "营口市"
        },
        900871: {
            800870: "昭通市",
            800887: "迪庆藏族自治州",
            800877: "玉溪市",
            800878: "楚雄彝族自治州",
            800872: "大理白族自治州",
            800691: "西双版纳傣族自治州",
            800888: "丽江市",
            800883: "临沧市",
            800692: "德宏傣族景颇族自治州",
            800876: "文山壮族苗族自治州",
            800875: "保山市",
            800874: "曲靖市",
            800873: "红河哈尼族彝族自治州",
            800879: "普洱市",
            800886: "怒江傈僳族自治州",
            800871: "昆明市"
        },
        900371: {
            800396: "驻马店市",
            800379: "洛阳市",
            800378: "开封市",
            800395: "漯河市",
            800392: "鹤壁市",
            800373: "新乡市",
            800398: "三门峡市",
            800374: "许昌市",
            800376: "信阳市",
            800393: "濮阳市",
            800371: "郑州市",
            800375: "平顶山市",
            800372: "安阳市",
            800397: "济源市",
            800391: "焦作市",
            800394: "周口市",
            800377: "南阳市",
            800370: "商丘市"
        },
        900951: {
            800954: "固原市",
            800953: "吴忠市",
            800952: "石嘴山市",
            800955: "中卫市",
            800951: "银川市"
        },
        900771: {
            800770: "防城港市",
            800777: "钦州市",
            800779: "北海市",
            800773: "桂林市",
            800771: "南宁市",
            800772: "柳州市",
            800776: "百色市",
            800778: "河池市",
            800780: "崇左市",
            800775: "玉林市",
            800774: "梧州市",
            800783: "贺州市",
            800782: "贵港市",
            800781: "来宾市"
        },
        900571: {
            800575: "绍兴市",
            800571: "杭州市",
            800574: "宁波市",
            800577: "温州市",
            800572: "湖州市",
            800570: "衢州市",
            800573: "嘉兴市",
            800576: "台州市",
            800578: "丽水市",
            800580: "舟山市",
            800579: "金华市"
        },
        900351: {
            800350: "忻州市",
            800357: "临汾市",
            800349: "朔州市",
            800352: "大同市",
            800354: "晋中市",
            800358: "吕梁市",
            800356: "晋城市",
            800351: "太原市",
            800359: "运城市",
            800353: "阳泉市",
            800355: "长治市"
        },
        900991: {
            800902: "哈密地区",
            800990: "克拉玛依市",
            800901: "塔城地区",
            800991: "乌鲁木齐市",
            800992: "奎屯市",
            800906: "阿勒泰地区",
            800903: "和田地区",
            800998: "喀什地区",
            800993: "石河子市",
            800997: "阿克苏地区",
            800994: "昌吉回族自治州",
            800909: "博尔塔拉蒙古自治州",
            800995: "吐鲁番地区",
            800999: "伊犁哈萨克自治州",
            800908: "克孜勒苏柯尔克孜自治州",
            800996: "巴音郭楞蒙古自治州"
        },
        900791: {
            800791: "南昌市",
            800794: "抚州市",
            800798: "景德镇市",
            800797: "赣州市",
            800793: "上饶市",
            800790: "新余市",
            800795: "宜春市",
            800792: "九江市",
            800799: "萍乡市",
            800701: "鹰潭市",
            800796: "吉安市"
        },
        900230: {
            800230: "重庆市"
        },
        900270: {
            800725: "潜江市",
            800719: "十堰市",
            800713: "黄冈市",
            800716: "荆州市",
            800712: "孝感市",
            800717: "宜昌市",
            800722: "随州市",
            800711: "鄂州市",
            800710: "襄樊市",
            800715: "咸宁市",
            800728: "仙桃市",
            800718: "恩施土家族苗族自治州",
            800724: "荆门市",
            800726: "天门市",
            800714: "黄石市",
            800270: "武汉市"
        },
        900431: {
            800432: "吉林市",
            800438: "松原市",
            800435: "通化市",
            800431: "长春市",
            800434: "四平市",
            800439: "白山市",
            800436: "白城市",
            800433: "延边朝鲜族自治州",
            800437: "辽源市"
        },
        900531: {
            800538: "泰安市",
            800535: "烟台市",
            800532: "青岛市",
            800546: "东营市",
            800631: "威海市",
            800533: "淄博市",
            800534: "德州市",
            800531: "济南市",
            800539: "临沂市",
            800537: "济宁市",
            800536: "潍坊市",
            800635: "聊城市",
            800633: "日照市",
            800530: "荷泽市",
            800632: "枣庄市",
            800543: "滨州市",
            800634: "莱芜市"
        },
        900280: {
            800841: "眉山市",
            800826: "广安市",
            800836: "甘孜藏族自治州",
            800838: "德阳市",
            800280: "成都市",
            800831: "宜宾市",
            800812: "攀枝花市",
            800839: "广元市",
            800834: "凉山彝族自治州",
            800827: "巴中市",
            800817: "南充市",
            800813: "自贡市",
            800837: "阿坝藏族羌族自治州",
            800818: "达州市",
            800840: "资阳市",
            800835: "雅安市",
            800816: "绵阳市",
            800833: "乐山市",
            800832: "内江市",
            800830: "泸州市",
            800825: "遂宁市"
        },
        800910: {
            610402: "秦都区",
            610403: "杨凌区",
            610404: "渭城区",
            610422: "三原县",
            610423: "泾阳县",
            610424: "乾　县",
            610425: "礼泉县",
            610426: "永寿县",
            610427: "彬　县",
            610428: "长武县",
            610429: "旬邑县",
            610430: "淳化县",
            610431: "武功县",
            610481: "兴平市"
        },
        800911: {
            610602: "宝塔区",
            610621: "延长县",
            610622: "延川县",
            610623: "子长县",
            610624: "安塞县",
            610625: "志丹县",
            610626: "吴旗县",
            610627: "甘泉县",
            610628: "富　县",
            610629: "洛川县",
            610630: "宜川县",
            610631: "黄龙县",
            610632: "黄陵县"
        },
        800913: {
            610502: "临渭区",
            610521: "华　县",
            610522: "潼关县",
            610523: "大荔县",
            610524: "合阳县",
            610525: "澄城县",
            610526: "蒲城县",
            610527: "白水县",
            610528: "富平县",
            610581: "韩城市",
            610582: "华阴市"
        },
        800912: {
            610802: "榆阳区",
            610821: "神木县",
            610822: "府谷县",
            610823: "横山县",
            610824: "靖边县",
            610825: "定边县",
            610826: "绥德县",
            610827: "米脂县",
            610828: "佳　县",
            610829: "吴堡县",
            610830: "清涧县",
            610831: "子洲县"
        },
        800914: {
            611002: "商州区",
            611021: "洛南县",
            611022: "丹凤县",
            611023: "商南县",
            611024: "山阳县",
            611025: "镇安县",
            611026: "柞水县"
        },
        800916: {
            610702: "汉台区",
            610721: "南郑县",
            610722: "城固县",
            610723: "洋　县",
            610724: "西乡县",
            610725: "勉　县",
            610726: "宁强县",
            610727: "略阳县",
            610728: "镇巴县",
            610729: "留坝县",
            610730: "佛坪县"
        },
        800915: {
            610902: "汉滨区",
            610921: "汉阴县",
            610922: "石泉县",
            610923: "宁陕县",
            610924: "紫阳县",
            610925: "岚皋县",
            610926: "平利县",
            610927: "镇坪县",
            610928: "旬阳县",
            610929: "白河县"
        },
        800917: {
            610302: "渭滨区",
            610303: "金台区",
            610304: "陈仓区",
            610322: "凤翔县",
            610323: "岐山县",
            610324: "扶风县",
            610326: "眉　县",
            610327: "陇　县",
            610328: "千阳县",
            610329: "麟游县",
            610330: "凤　县",
            610331: "太白县"
        },
        800919: {
            610202: "王益区",
            610203: "印台区",
            610204: "耀州区",
            610222: "宜君县"
        },
        800290: {
            610102: "新城区",
            610103: "碑林区",
            610104: "莲湖区",
            610111: "灞桥区",
            610112: "未央区",
            610113: "雁塔区",
            610114: "阎良区",
            610115: "临潼区",
            610116: "长安区",
            610122: "蓝田县",
            610124: "周至县",
            610125: "户　县",
            610126: "高陵县"
        },
        800510: {
            320205: "锡山区",
            320206: "惠山区",
            320211: "滨湖区",
            320213: "梁溪区",
            320214: "新吴区",
            320281: "江阴市",
            320282: "宜兴市"
        },
        800513: {
            320602: "崇川区",
            320611: "港闸区",
            320612: "通州区",
            320621: "海安县",
            320623: "如东县",
            320681: "启东市",
            320682: "如皋市",
            320684: "海门市"
        },
        800523: {
            321202: "海陵区",
            321203: "高港区",
            321204: "姜堰区",
            321281: "兴化市",
            321282: "靖江市",
            321283: "泰兴市"
        },
        800519: {
            320402: "天宁区",
            320404: "钟楼区",
            320411: "新北区",
            320412: "武进区",
            320481: "溧阳市",
            320482: "金坛市"
        },
        800511: {
            321102: "京口区",
            321111: "润州区",
            321112: "丹徒区",
            321181: "丹阳市",
            321182: "扬中市",
            321183: "句容市"
        },
        800518: {
            320703: "连云区",
            320706: "海州区",
            320707: "赣榆区",
            320722: "东海县",
            320723: "灌云县",
            320724: "灌南县"
        },
        800527: {
            321302: "宿城区",
            321311: "宿豫区",
            321322: "沭阳县",
            321323: "泗阳县",
            321324: "泗洪县"
        },
        800514: {
            321002: "广陵区",
            321003: "邗江区",
            321012: "江都区",
            321023: "宝应县",
            321081: "仪征市",
            321084: "高邮市"
        },
        800512: {
            320505: "虎丘区",
            320506: "吴中区",
            320507: "相城区",
            320508: "姑苏区",
            320509: "吴江区",
            320581: "常熟市",
            320582: "张家港市",
            320583: "昆山市",
            320585: "太仓市"
        },
        800250: {
            320102: "玄武区",
            320104: "秦淮区",
            320105: "建邺区",
            320106: "鼓楼区",
            320111: "浦口区",
            320113: "栖霞区",
            320114: "雨花台区",
            320115: "江宁区",
            320116: "六合区",
            320117: "溧水区",
            320118: "高淳区"
        },
        800515: {
            320902: "亭湖区",
            320903: "盐都区",
            320904: "大丰区",
            320921: "响水县",
            320922: "滨海县",
            320923: "阜宁县",
            320924: "射阳县",
            320925: "建湖县",
            320981: "东台市"
        },
        800517: {
            320803: "淮安区",
            320804: "淮阴区",
            320812: "清江浦区",
            320813: "洪泽区",
            320826: "涟水县",
            320830: "盱眙县",
            320831: "金湖县"
        },
        800516: {
            320302: "鼓楼区",
            320303: "云龙区",
            320305: "贾汪区",
            320311: "泉山区",
            320312: "铜山区",
            320321: "丰　县",
            320322: "沛　县",
            320324: "睢宁县",
            320381: "新沂市",
            320382: "邳州市"
        },
        800451: {
            230102: "道里区",
            230103: "南岗区",
            230104: "道外区",
            230106: "香坊区",
            230108: "平房区",
            230109: "松北区",
            230111: "呼兰区",
            230123: "依兰县",
            230124: "方正县",
            230125: "宾　县",
            230126: "巴彦县",
            230127: "木兰县",
            230128: "通河县",
            230129: "延寿县",
            230181: "阿城市",
            230182: "双城市",
            230183: "尚志市",
            230184: "五常市",
            230185: "肇东市"
        },
        800464: {
            230902: "新兴区",
            230903: "桃山区",
            230904: "茄子河区",
            230921: "勃利县"
        },
        800452: {
            230202: "龙沙区",
            230203: "建华区",
            230204: "铁锋区",
            230205: "昂昂溪区",
            230206: "富拉尔基区",
            230207: "碾子山区",
            230208: "梅里斯达斡尔族区",
            230221: "龙江县",
            230223: "依安县",
            230224: "泰来县",
            230225: "甘南县",
            230227: "富裕县",
            230229: "克山县",
            230230: "克东县",
            230231: "拜泉县",
            230281: "讷河市"
        },
        800457: {
            232721: "呼玛县",
            232722: "塔河县",
            232723: "漠河县",
            232724: "加格达奇区",
            232725: "松岭区",
            232726: "呼中区",
            232727: "新林区"
        },
        800455: {
            231202: "北林区",
            231221: "望奎县",
            231222: "兰西县",
            231223: "青冈县",
            231224: "庆安县",
            231225: "明水县",
            231226: "绥棱县",
            231283: "海伦市"
        },
        800459: {
            230602: "萨尔图区",
            230603: "龙凤区",
            230604: "让胡路区",
            230605: "红岗区",
            230606: "大同区",
            230621: "肇州县",
            230622: "肇源县",
            230623: "林甸县",
            230624: "杜尔伯特蒙古族自治县",
            230625: "安达市"
        },
        800468: {
            230402: "向阳区",
            230403: "工农区",
            230404: "南山区",
            230405: "兴安区",
            230406: "东山区",
            230407: "兴山区",
            230421: "萝北县",
            230422: "绥滨县"
        },
        800456: {
            231102: "爱辉区",
            231121: "嫩江县",
            231123: "逊克县",
            231124: "孙吴县",
            231181: "北安市",
            231182: "五大连池市"
        },
        800467: {
            230302: "鸡冠区",
            230303: "恒山区",
            230304: "滴道区",
            230305: "梨树区",
            230306: "城子河区",
            230307: "麻山区",
            230321: "鸡东县",
            230381: "虎林市",
            230382: "密山市"
        },
        800458: {
            230702: "伊春区",
            230703: "南岔区",
            230704: "友好区",
            230705: "西林区",
            230706: "翠峦区",
            230707: "新青区",
            230708: "美溪区",
            230709: "金山屯区",
            230710: "五营区",
            230711: "乌马河区",
            230712: "汤旺河区",
            230713: "带岭区",
            230714: "乌伊岭区",
            230715: "红星区",
            230716: "上甘岭区",
            230722: "嘉荫县",
            230781: "铁力市"
        },
        800469: {
            230502: "尖山区",
            230503: "岭东区",
            230505: "四方台区",
            230506: "宝山区",
            230521: "集贤县",
            230522: "友谊县",
            230523: "宝清县",
            230524: "饶河县"
        },
        800453: {
            231002: "东安区",
            231003: "阳明区",
            231004: "爱民区",
            231005: "西安区",
            231024: "东宁县",
            231025: "林口县",
            231081: "绥芬河市",
            231083: "海林市",
            231084: "宁安市",
            231085: "穆棱市"
        },
        800454: {
            230803: "向阳区",
            230804: "前进区",
            230805: "东风区",
            230811: "郊　区",
            230822: "桦南县",
            230826: "桦川县",
            230828: "汤原县",
            230833: "抚远县",
            230881: "同江市",
            230882: "富锦市"
        },
        800100: {
            110101: "东城区",
            110102: "西城区",
            110103: "崇文区",
            110104: "宣武区",
            110105: "朝阳区",
            110106: "丰台区",
            110107: "石景山区",
            110108: "海淀区",
            110109: "门头沟区",
            110111: "房山区",
            110112: "通州区",
            110113: "顺义区",
            110114: "昌平区",
            110115: "大兴区",
            110116: "怀柔区",
            110117: "平谷区",
            110228: "密云县",
            110229: "延庆县"
        },
        800894: {
            542621: "林芝县",
            542622: "工布江达县",
            542623: "米林县",
            542624: "墨脱县",
            542625: "波密县",
            542626: "察隅县",
            542627: "朗　县"
        },
        800896: {
            542421: "那曲县",
            542422: "嘉黎县",
            542423: "比如县",
            542424: "聂荣县",
            542425: "安多县",
            542426: "申扎县",
            542427: "索　县",
            542428: "班戈县",
            542429: "巴青县",
            542430: "尼玛县"
        },
        800892: {
            542301: "日喀则市",
            542322: "南木林县",
            542323: "江孜县",
            542324: "定日县",
            542325: "萨迦县",
            542326: "拉孜县",
            542327: "昂仁县",
            542328: "谢通门县",
            542329: "白朗县",
            542330: "仁布县",
            542331: "康马县",
            542332: "定结县",
            542333: "仲巴县",
            542334: "亚东县",
            542335: "吉隆县",
            542336: "聂拉木县",
            542337: "萨嘎县",
            542338: "岗巴县"
        },
        800891: {
            540102: "城关区",
            540121: "林周县",
            540122: "当雄县",
            540123: "尼木县",
            540124: "曲水县",
            540125: "堆龙德庆县",
            540126: "达孜县",
            540127: "墨竹工卡县"
        },
        800893: {
            542221: "乃东县",
            542222: "扎囊县",
            542223: "贡嘎县",
            542224: "桑日县",
            542225: "琼结县",
            542226: "曲松县",
            542227: "措美县",
            542228: "洛扎县",
            542229: "加查县",
            542231: "隆子县",
            542232: "错那县",
            542233: "浪卡子县"
        },
        800897: {
            542521: "普兰县",
            542522: "札达县",
            542523: "噶尔县",
            542524: "日土县",
            542525: "革吉县",
            542526: "改则县",
            542527: "措勤县"
        },
        800895: {
            542121: "昌都县",
            542122: "江达县",
            542123: "贡觉县",
            542124: "类乌齐县",
            542125: "丁青县",
            542126: "察雅县",
            542127: "八宿县",
            542128: "左贡县",
            542129: "芒康县",
            542132: "洛隆县",
            542133: "边坝县"
        },
        800736: {
            430702: "武陵区",
            430703: "鼎城区",
            430721: "安乡县",
            430722: "汉寿县",
            430723: "澧　县",
            430724: "临澧县",
            430725: "桃源县",
            430726: "石门县",
            430781: "津市市"
        },
        800732: {
            430302: "雨湖区",
            430304: "岳塘区",
            430321: "湘潭县",
            430381: "湘乡市",
            430382: "韶山市"
        },
        800734: {
            430405: "珠晖区",
            430406: "雁峰区",
            430407: "石鼓区",
            430408: "蒸湘区",
            430412: "南岳区",
            430421: "衡阳县",
            430422: "衡南县",
            430423: "衡山县",
            430424: "衡东县",
            430426: "祁东县",
            430481: "耒阳市",
            430482: "常宁市"
        },
        800735: {
            431002: "北湖区",
            431003: "苏仙区",
            431021: "桂阳县",
            431022: "宜章县",
            431023: "永兴县",
            431024: "嘉禾县",
            431025: "临武县",
            431026: "汝城县",
            431027: "桂东县",
            431028: "安仁县",
            431081: "资兴市"
        },
        800737: {
            430902: "资阳区",
            430903: "赫山区",
            430921: "南　县",
            430922: "桃江县",
            430923: "安化县",
            430981: "沅江市"
        },
        800733: {
            430202: "荷塘区",
            430203: "芦淞区",
            430204: "石峰区",
            430211: "天元区",
            430221: "株洲县",
            430223: "攸　县",
            430224: "茶陵县",
            430225: "炎陵县",
            430281: "醴陵市"
        },
        800739: {
            430502: "双清区",
            430503: "大祥区",
            430511: "北塔区",
            430521: "邵东县",
            430522: "新邵县",
            430523: "邵阳县",
            430524: "隆回县",
            430525: "洞口县",
            430527: "绥宁县",
            430528: "新宁县",
            430529: "城步苗族自治县",
            430581: "武冈市"
        },
        800731: {
            430102: "芙蓉区",
            430103: "天心区",
            430104: "岳麓区",
            430105: "开福区",
            430111: "雨花区",
            430121: "长沙县",
            430122: "望城县",
            430124: "宁乡县",
            430181: "浏阳市"
        },
        800745: {
            431202: "鹤城区",
            431221: "中方县",
            431222: "沅陵县",
            431223: "辰溪县",
            431224: "溆浦县",
            431225: "会同县",
            431226: "麻阳苗族自治县",
            431227: "新晃侗族自治县",
            431228: "芷江侗族自治县",
            431229: "靖州苗族侗族自治县",
            431230: "通道侗族自治县",
            431281: "洪江市"
        },
        800746: {
            431102: "芝山区",
            431103: "冷水滩区",
            431121: "祁阳县",
            431122: "东安县",
            431123: "双牌县",
            431124: "道　县",
            431125: "江永县",
            431126: "宁远县",
            431127: "蓝山县",
            431128: "新田县",
            431129: "江华瑶族自治县"
        },
        800744: {
            430802: "永定区",
            430811: "武陵源区",
            430821: "慈利县",
            430822: "桑植县"
        },
        800730: {
            430602: "岳阳楼区",
            430603: "云溪区",
            430611: "君山区",
            430621: "岳阳县",
            430623: "华容县",
            430624: "湘阴县",
            430626: "平江县",
            430681: "汨罗市",
            430682: "临湘市"
        },
        800743: {
            433101: "吉首市",
            433122: "泸溪县",
            433123: "凤凰县",
            433124: "花垣县",
            433125: "保靖县",
            433126: "古丈县",
            433127: "永顺县",
            433130: "龙山县"
        },
        800738: {
            431302: "娄星区",
            431321: "双峰县",
            431322: "新化县",
            431381: "冷水江市",
            431382: "涟源市"
        },
        800930: {
            622901: "临夏市",
            622921: "临夏县",
            622922: "康乐县",
            622923: "永靖县",
            622924: "广河县",
            622925: "和政县",
            622926: "东乡族自治县"
        },
        800933: {
            620802: "崆峒区",
            620821: "泾川县",
            620822: "灵台县",
            620823: "崇信县",
            620824: "华亭县",
            620825: "庄浪县",
            620826: "静宁县"
        },
        800934: {
            621002: "西峰区",
            621021: "庆城县",
            621022: "环　县",
            621023: "华池县",
            621024: "合水县",
            621025: "正宁县",
            621026: "宁　县",
            621027: "镇原县"
        },
        800935: {
            620602: "凉州区",
            620621: "民勤县",
            620622: "古浪县",
            620623: "天祝藏族自治县"
        },
        800941: {
            623001: "合作市",
            623021: "临潭县",
            623022: "卓尼县",
            623023: "舟曲县",
            623024: "迭部县",
            623025: "玛曲县",
            623026: "碌曲县",
            623027: "夏河县"
        },
        800938: {
            620502: "秦城区",
            620503: "北道区",
            620521: "清水县",
            620522: "秦安县",
            620523: "甘谷县",
            620524: "武山县",
            620525: "张家川回族自治县"
        },
        800945: {
            620302: "金川区",
            620321: "永昌县"
        },
        800947: {
            620201: "雄关区",
            620202: "长城区",
            620203: "镜铁区"
        },
        800939: {
            621202: "武都区",
            621221: "成　县",
            621222: "文　县",
            621223: "宕昌县",
            621224: "康　县",
            621225: "西和县",
            621226: "礼　县",
            621227: "徽　县",
            621228: "两当县"
        },
        800932: {
            621102: "安定区",
            621121: "通渭县",
            621122: "陇西县",
            621123: "渭源县",
            621124: "临洮县",
            621125: "漳　县",
            621126: "岷　县"
        },
        800937: {
            620902: "肃州区",
            620921: "金塔县",
            620922: "安西县",
            620923: "肃北蒙古族自治县",
            620924: "阿克塞哈萨克族自治县",
            620981: "玉门市",
            620982: "敦煌市"
        },
        800931: {
            620102: "城关区",
            620103: "七里河区",
            620104: "西固区",
            620105: "安宁区",
            620111: "红古区",
            620121: "永登县",
            620122: "皋兰县",
            620123: "榆中县"
        },
        800936: {
            620702: "甘州区",
            620721: "肃南裕固族自治县",
            620722: "民乐县",
            620723: "临泽县",
            620724: "高台县",
            620725: "山丹县"
        },
        800943: {
            620402: "白银区",
            620403: "平川区",
            620421: "靖远县",
            620422: "会宁县",
            620423: "景泰县"
        },
        800471: {
            150102: "新城区",
            150103: "回民区",
            150104: "玉泉区",
            150105: "赛罕区",
            150121: "土默特左旗",
            150122: "托克托县",
            150123: "和林格尔县",
            150124: "清水河县",
            150125: "武川县"
        },
        800478: {
            150802: "临河区",
            150821: "五原县",
            150822: "磴口县",
            150823: "乌拉特前旗",
            150824: "乌拉特中旗",
            150825: "乌拉特后旗",
            150826: "杭锦后旗"
        },
        800483: {
            152921: "阿拉善左旗",
            152922: "阿拉善右旗",
            152923: "额济纳旗"
        },
        800482: {
            152201: "乌兰浩特市",
            152202: "阿尔山市",
            152221: "科尔沁右翼前旗",
            152222: "科尔沁右翼中旗",
            152223: "扎赉特旗",
            152224: "突泉县"
        },
        800473: {
            150302: "海勃湾区",
            150303: "海南区",
            150304: "乌达区"
        },
        800475: {
            150502: "科尔沁区",
            150521: "科尔沁左翼中旗",
            150522: "科尔沁左翼后旗",
            150523: "开鲁县",
            150524: "库伦旗",
            150525: "奈曼旗",
            150526: "扎鲁特旗",
            150581: "霍林郭勒市"
        },
        800472: {
            150202: "东河区",
            150203: "昆都仑区",
            150204: "青山区",
            150205: "石拐区",
            150206: "白云矿区",
            150207: "九原区",
            150221: "土默特右旗",
            150222: "固阳县",
            150223: "达尔罕茂明安联合旗"
        },
        800474: {
            150902: "集宁区",
            150921: "卓资县",
            150922: "化德县",
            150923: "商都县",
            150924: "兴和县",
            150925: "凉城县",
            150926: "察哈尔右翼前旗",
            150927: "察哈尔右翼中旗",
            150928: "察哈尔右翼后旗",
            150929: "四子王旗",
            150981: "丰镇市"
        },
        800470: {
            150702: "海拉尔区",
            150721: "阿荣旗",
            150722: "莫力达瓦达斡尔族自治旗",
            150723: "鄂伦春自治旗",
            150724: "鄂温克族自治旗",
            150725: "陈巴尔虎旗",
            150726: "新巴尔虎左旗",
            150727: "新巴尔虎右旗",
            150781: "满洲里市",
            150782: "牙克石市",
            150783: "扎兰屯市",
            150784: "额尔古纳市",
            150785: "根河市"
        },
        800477: {
            150602: "东胜区",
            150621: "达拉特旗",
            150622: "准格尔旗",
            150623: "鄂托克前旗",
            150624: "鄂托克旗",
            150625: "杭锦旗",
            150626: "乌审旗",
            150627: "伊金霍洛旗"
        },
        800476: {
            150402: "红山区",
            150403: "元宝山区",
            150404: "松山区",
            150421: "阿鲁科尔沁旗",
            150422: "巴林左旗",
            150423: "巴林右旗",
            150424: "林西县",
            150425: "克什克腾旗",
            150426: "翁牛特旗",
            150428: "喀喇沁旗",
            150429: "宁城县",
            150430: "敖汉旗"
        },
        800479: {
            152501: "二连浩特市",
            152502: "锡林浩特市",
            152522: "阿巴嘎旗",
            152523: "苏尼特左旗",
            152524: "苏尼特右旗",
            152525: "东乌珠穆沁旗",
            152526: "西乌珠穆沁旗",
            152527: "太仆寺旗",
            152528: "镶黄旗",
            152529: "正镶白旗",
            152530: "正蓝旗",
            152531: "多伦县"
        },
        800857: {
            522401: "七星关区",
            522422: "大方县",
            522423: "黔西县",
            522424: "金沙县",
            522425: "织金县",
            522426: "纳雍县",
            522427: "威宁彝族回族苗族自治县",
            522428: "赫章县",
            522429: "金海湖区"
        },
        800855: {
            522622: "黄平县",
            522623: "施秉县",
            522624: "三穗县",
            522625: "镇远县",
            522626: "岑巩县",
            522627: "天柱县",
            522628: "锦屏县",
            522629: "剑河县",
            522630: "台江县",
            522631: "黎平县",
            522632: "榕江县",
            522633: "从江县",
            522634: "雷山县",
            522635: "麻江县",
            522636: "丹寨县",
            522637: "凯里市"
        },
        800852: {
            520302: "红花岗区",
            520303: "汇川区",
            520321: "播州区",
            520322: "桐梓县",
            520323: "绥阳县",
            520324: "正安县",
            520325: "道真仡佬族苗族自治县",
            520326: "务川仡佬族苗族自治县",
            520327: "凤冈县",
            520328: "湄潭县",
            520329: "余庆县",
            520330: "习水县",
            520381: "赤水市",
            520382: "仁怀市",
            520383: "新浦区"
        },
        800853: {
            520402: "西秀区",
            520421: "平坝县",
            520422: "普定县",
            520423: "镇宁布依族苗族自治县",
            520424: "关岭布依族苗族自治县",
            520425: "紫云苗族布依族自治县"
        },
        800856: {
            522201: "碧江区",
            522222: "江口县",
            522223: "玉屏侗族自治县",
            522224: "石阡县",
            522225: "思南县",
            522226: "印江土家族苗族自治县",
            522227: "德江县",
            522228: "沿河土家族自治县",
            522229: "松桃苗族自治县",
            522230: "万山区"
        },
        800851: {
            520102: "南明区",
            520103: "云岩区",
            520111: "花溪区",
            520112: "乌当区",
            520113: "白云区",
            520114: "小河区",
            520121: "开阳县",
            520122: "息烽县",
            520123: "修文县",
            520181: "清镇市",
            520183: "观山湖区"
        },
        800859: {
            522322: "兴仁县",
            522323: "普安县",
            522324: "晴隆县",
            522325: "贞丰县",
            522326: "望谟县",
            522327: "册亨县",
            522328: "安龙县",
            522329: "兴义市"
        },
        800858: {
            520201: "钟山区",
            520203: "六枝特区",
            520221: "水城县",
            520222: "盘　县"
        },
        800854: {
            522702: "福泉市",
            522722: "荔波县",
            522723: "贵定县",
            522725: "瓮安县",
            522726: "独山县",
            522727: "平塘县",
            522728: "罗甸县",
            522729: "长顺县",
            522730: "龙里县",
            522731: "惠水县",
            522732: "三都水族自治县",
            522733: "都匀市"
        },
        800850: {
            520701: "贵安新区"
        },
        800319: {
            130502: "桥东区",
            130503: "桥西区",
            130521: "邢台县",
            130522: "临城县",
            130523: "内丘县",
            130524: "柏乡县",
            130525: "隆尧县",
            130526: "任　县",
            130527: "南和县",
            130528: "宁晋县",
            130529: "巨鹿县",
            130530: "新河县",
            130531: "广宗县",
            130532: "平乡县",
            130533: "威　县",
            130534: "清河县",
            130535: "临西县",
            130581: "南宫市",
            130582: "沙河市"
        },
        800314: {
            130802: "双桥区",
            130803: "双滦区",
            130804: "鹰手营子矿区",
            130821: "承德县",
            130822: "兴隆县",
            130823: "平泉县",
            130824: "滦平县",
            130825: "隆化县",
            130826: "丰宁满族自治县",
            130827: "宽城满族自治县",
            130828: "围场满族蒙古族自治县"
        },
        800312: {
            130602: "新市区",
            130603: "北市区",
            130604: "南市区",
            130621: "满城县",
            130622: "清苑县",
            130623: "涞水县",
            130624: "阜平县",
            130625: "徐水县",
            130626: "定兴县",
            130627: "唐　县",
            130628: "高阳县",
            130630: "涞源县",
            130631: "望都县",
            130633: "易　县",
            130634: "曲阳县",
            130635: "蠡　县",
            130636: "顺平县",
            130637: "博野县",
            130681: "涿州市",
            130682: "定州市",
            130683: "安国市",
            130684: "高碑店市"
        },
        800310: {
            130402: "邯山区",
            130403: "丛台区",
            130404: "复兴区",
            130406: "峰峰矿区",
            130421: "邯郸县",
            130423: "临漳县",
            130424: "成安县",
            130425: "大名县",
            130426: "涉　县",
            130427: "磁　县",
            130428: "肥乡县",
            130429: "永年县",
            130430: "邱　县",
            130431: "鸡泽县",
            130432: "广平县",
            130433: "馆陶县",
            130434: "魏　县",
            130435: "曲周县",
            130481: "武安市"
        },
        800316: {
            131002: "安次区",
            131003: "广阳区",
            131022: "固安县",
            131023: "永清县",
            131024: "香河县",
            131025: "大城县",
            131026: "文安县",
            131028: "大厂回族自治县",
            131081: "霸州市",
            131082: "三河市"
        },
        800318: {
            131102: "桃城区",
            131121: "枣强县",
            131122: "武邑县",
            131123: "武强县",
            131124: "饶阳县",
            131125: "安平县",
            131126: "故城县",
            131127: "景　县",
            131128: "阜城县",
            131181: "冀州市",
            131182: "深州市"
        },
        800317: {
            130902: "新华区",
            130903: "运河区",
            130921: "沧　县",
            130922: "青　县",
            130923: "东光县",
            130924: "海兴县",
            130925: "盐山县",
            130926: "肃宁县",
            130927: "南皮县",
            130928: "吴桥县",
            130929: "献　县",
            130930: "孟村回族自治县",
            130981: "泊头市",
            130982: "任丘市",
            130983: "黄骅市",
            130984: "河间市"
        },
        800315: {
            130202: "路南区",
            130203: "路北区",
            130204: "古冶区",
            130205: "开平区",
            130207: "丰南区",
            130208: "丰润区",
            130223: "滦　县",
            130224: "滦南县",
            130225: "乐亭县",
            130227: "迁西县",
            130229: "玉田县",
            130230: "唐海县",
            130281: "遵化市",
            130283: "迁安市"
        },
        800335: {
            130302: "海港区",
            130303: "山海关区",
            130304: "北戴河区",
            130321: "青龙满族自治县",
            130322: "昌黎县",
            130323: "抚宁县",
            130324: "卢龙县"
        },
        800311: {
            130102: "长安区",
            130103: "桥东区",
            130104: "桥西区",
            130105: "新华区",
            130107: "井陉矿区",
            130108: "裕华区",
            130121: "井陉县",
            130123: "正定县",
            130124: "栾城县",
            130125: "行唐县",
            130126: "灵寿县",
            130127: "高邑县",
            130128: "深泽县",
            130129: "赞皇县",
            130130: "无极县",
            130131: "平山县",
            130132: "元氏县",
            130133: "赵　县",
            130181: "辛集市",
            130182: "藁城市",
            130183: "晋州市",
            130184: "新乐市",
            130185: "鹿泉市"
        },
        800313: {
            130702: "桥东区",
            130703: "桥西区",
            130705: "宣化区",
            130706: "下花园区",
            130721: "宣化县",
            130722: "张北县",
            130723: "康保县",
            130724: "沽源县",
            130725: "尚义县",
            130726: "蔚　县",
            130727: "阳原县",
            130728: "怀安县",
            130729: "万全县",
            130730: "怀来县",
            130731: "涿鹿县",
            130732: "赤城县",
            130733: "崇礼县"
        },
        800336: {
            130629: "容城县",
            130632: "安新县",
            130638: "雄　县"
        },
        800752: {
            441302: "惠城区",
            441303: "惠阳区",
            441322: "博罗县",
            441323: "惠东县",
            441324: "龙门县",
            441325: "大亚湾",
            441326: "仲恺区"
        },
        800751: {
            440203: "武江区",
            440204: "浈江区",
            440205: "曲江区",
            440222: "始兴县",
            440224: "仁化县",
            440229: "翁源县",
            440232: "乳源县",
            440233: "新丰县",
            440281: "乐昌市",
            440282: "南雄市"
        },
        800762: {
            441602: "源城区",
            441621: "紫金县",
            441622: "龙川县",
            441623: "连平县",
            441624: "和平县",
            441625: "东源县"
        },
        800758: {
            441202: "端州区",
            441203: "鼎湖区",
            441223: "广宁县",
            441224: "怀集县",
            441225: "封开县",
            441226: "德庆县",
            441283: "高要市",
            441284: "四会市"
        },
        800753: {
            441402: "梅江区",
            441421: "梅　县",
            441422: "大埔县",
            441423: "丰顺县",
            441424: "五华县",
            441426: "平远县",
            441427: "蕉岭县",
            441481: "兴宁市"
        },
        800769: {
            441901: "莞城区",
            441902: "南城区",
            441903: "东城区",
            441904: "万江区",
            441905: "石碣镇",
            441906: "石龙镇",
            441907: "茶山镇",
            441908: "石排镇",
            441909: "企石镇",
            441910: "横沥镇",
            441911: "桥头镇",
            441912: "谢岗镇",
            441913: "东坑镇",
            441914: "常平镇",
            441915: "寮步镇",
            441916: "大朗镇",
            441917: "麻涌镇",
            441918: "中堂镇",
            441919: "高埗镇",
            441920: "樟木头镇",
            441921: "大岭山镇",
            441922: "望牛墩镇",
            441923: "黄江镇",
            441924: "洪梅镇",
            441925: "清溪镇",
            441926: "沙田镇",
            441927: "道滘镇",
            441928: "塘厦镇",
            441929: "虎门镇",
            441930: "厚街镇",
            441931: "凤岗镇",
            441932: "长安镇"
        },
        800759: {
            440802: "赤坎区",
            440803: "霞山区",
            440804: "坡头区",
            440811: "麻章区",
            440823: "遂溪县",
            440825: "徐闻县",
            440881: "廉江市",
            440882: "雷州市",
            440883: "吴川市"
        },
        800668: {
            440902: "茂南区",
            440903: "茂港区",
            440923: "电白县",
            440981: "高州市",
            440982: "化州市",
            440983: "信宜市"
        },
        800755: {
            440303: "罗湖区",
            440304: "福田区",
            440305: "南山区",
            440306: "宝安区",
            440307: "龙岗区",
            440308: "盐田区",
            440309: "大鹏新区",
            440310: "龙华新区",
            440311: "光明新区",
            440312: "坪山新区"
        },
        800660: {
            441502: "城　区",
            441521: "海丰县",
            441523: "陆河县",
            441581: "陆丰市"
        },
        800768: {
            445102: "湘桥区",
            445121: "潮安县",
            445122: "饶平县"
        },
        800200: {
            440102: "萝岗区",
            440103: "荔湾区",
            440104: "越秀区",
            440105: "海珠区",
            440106: "天河区",
            440107: "南沙区",
            440111: "白云区",
            440112: "黄埔区",
            440113: "番禺区",
            440114: "花都区",
            440183: "增城市",
            440184: "从化市"
        },
        800763: {
            441802: "清城区",
            441821: "佛冈县",
            441823: "阳山县",
            441825: "连山县",
            441826: "连南县",
            441827: "清新区",
            441881: "英德市",
            441882: "连州市"
        },
        800757: {
            440604: "禅城区",
            440605: "南海区",
            440606: "顺德区",
            440607: "三水区",
            440608: "高明区"
        },
        800663: {
            445202: "榕城区",
            445221: "揭东县",
            445222: "揭西县",
            445224: "惠来县",
            445281: "普宁市"
        },
        800662: {
            441702: "江城区",
            441721: "阳西县",
            441723: "阳东县",
            441781: "阳春市"
        },
        800766: {
            445302: "云城区",
            445321: "新兴县",
            445322: "郁南县",
            445323: "云安县",
            445381: "罗定市"
        },
        800756: {
            440402: "香洲区",
            440403: "斗门区",
            440404: "金湾区",
            440405: "唐家",
            440406: "南屏",
            440407: "湾仔",
            440408: "白蕉",
            440409: "井岸",
            440410: "横琴",
            440411: "拱北",
            440412: "吉大",
            440413: "前山",
            440414: "老香洲",
            440415: "新香洲",
            440416: "夏湾",
            440417: "其他",
            440418: "南水",
            440419: "三灶",
            440420: "乾务",
            440421: "莲洲",
            440422: "斗门镇",
            440423: "平沙",
            440424: "红旗",
            440425: "新青（西埔）",
            440426: "海岛"
        },
        800754: {
            440507: "龙湖区",
            440511: "金平区",
            440512: "濠江区",
            440513: "潮阳区",
            440514: "潮南区",
            440515: "澄海区",
            440523: "南澳县"
        },
        800760: {
            442001: "石岐区",
            442002: "东区",
            442003: "西区",
            442004: "南区",
            442005: "五桂山镇",
            442006: "火炬开发区",
            442007: "黄圃镇",
            442008: "南头镇",
            442009: "东凤镇",
            442010: "阜沙镇",
            442011: "小榄镇",
            442012: "东升镇",
            442013: "古镇镇",
            442014: "横栏镇",
            442015: "三角镇",
            442016: "民众镇",
            442017: "南朗镇",
            442018: "港口镇",
            442019: "大涌镇",
            442020: "沙溪镇",
            442021: "三乡镇",
            442022: "板芙镇",
            442023: "神湾镇",
            442024: "坦洲镇"
        },
        800750: {
            440703: "蓬江区",
            440704: "江海区",
            440705: "新会区",
            440781: "台山市",
            440783: "开平市",
            440784: "鹤山市",
            440785: "恩平市"
        },
        800970: {
            632221: "门源回族自治县",
            632222: "祁连县",
            632223: "海晏县",
            632224: "刚察县"
        },
        800972: {
            632121: "平安县",
            632122: "民和回族土族自治县",
            632123: "乐都县",
            632126: "互助土族自治县",
            632127: "化隆回族自治县",
            632128: "循化撒拉族自治县"
        },
        800979: {
            630201: "格尔木市"
        },
        800975: {
            632621: "玛沁县",
            632622: "班玛县",
            632623: "甘德县",
            632624: "达日县",
            632625: "久治县",
            632626: "玛多县"
        },
        800977: {
            632802: "德令哈市",
            632821: "乌兰县",
            632822: "都兰县",
            632823: "天峻县"
        },
        800976: {
            632721: "玉树县",
            632722: "杂多县",
            632723: "称多县",
            632724: "治多县",
            632725: "囊谦县",
            632726: "曲麻莱县"
        },
        800974: {
            632521: "共和县",
            632522: "同德县",
            632523: "贵德县",
            632524: "兴海县",
            632525: "贵南县"
        },
        800971: {
            630102: "城东区",
            630103: "城中区",
            630104: "城西区",
            630105: "城北区",
            630121: "大通回族土族自治县",
            630122: "湟中县",
            630123: "湟源县"
        },
        800973: {
            632321: "同仁县",
            632322: "尖扎县",
            632323: "泽库县",
            632324: "河南蒙古族自治县"
        },
        800989: {
            460401: "东方市"
        },
        800907: {
            460901: "定安县"
        },
        800904: {
            461301: "澄迈县"
        },
        800980: {
            461801: "临高县"
        },
        800985: {
            460701: "保亭县"
        },
        800983: {
            460501: "乐东县"
        },
        800898: {
            460101: "海口市"
        },
        800900: {
            461101: "文昌市"
        },
        800889: {
            461001: "屯昌县"
        },
        800721: {
            460201: "三亚市"
        },
        800986: {
            461401: "琼中县"
        },
        800981: {
            461701: "白沙县"
        },
        800984: {
            461601: "陵水县"
        },
        800899: {
            460601: "五指山市"
        },
        800988: {
            460301: "万宁市"
        },
        800982: {
            461201: "昌江县"
        },
        800905: {
            461501: "琼海市"
        },
        800890: {
            460801: "儋州市"
        },
        800210: {
            310101: "黄浦区",
            310103: "卢湾区",
            310104: "徐汇区",
            310105: "长宁区",
            310106: "静安区",
            310107: "普陀区",
            310108: "闸北区",
            310109: "虹口区",
            310110: "杨浦区",
            310112: "闵行区",
            310113: "宝山区",
            310114: "嘉定区",
            310115: "浦东新区",
            310116: "金山区",
            310117: "松江区",
            310118: "青浦区",
            310119: "南汇区",
            310120: "奉贤区",
            310230: "崇明县"
        },
        800220: {
            120101: "和平区",
            120102: "河东区",
            120103: "河西区",
            120104: "南开区",
            120105: "河北区",
            120106: "红桥区",
            120107: "塘沽区",
            120108: "汉沽区",
            120109: "大港区",
            120110: "东丽区",
            120111: "西青区",
            120112: "津南区",
            120113: "北辰区",
            120114: "武清区",
            120115: "宝坻区",
            120221: "宁河县",
            120223: "静海县",
            120225: "蓟　县",
            120226: "滨海区"
        },
        800553: {
            340202: "镜湖区",
            340203: "马塘区",
            340204: "新芜区",
            340207: "鸠江区",
            340221: "芜湖县",
            340222: "繁昌县",
            340223: "南陵县",
            341422: "无为县"
        },
        800559: {
            341002: "屯溪区",
            341003: "黄山区",
            341004: "徽州区",
            341021: "歙　县",
            341022: "休宁县",
            341023: "黟　县",
            341024: "祁门县"
        },
        800561: {
            340602: "杜集区",
            340603: "相山区",
            340604: "烈山区",
            340621: "濉溪县"
        },
        800554: {
            340402: "大通区",
            340403: "田家庵区",
            340404: "谢家集区",
            340405: "八公山区",
            340406: "潘集区",
            340421: "凤台县"
        },
        800556: {
            340802: "迎江区",
            340803: "大观区",
            340811: "郊　区",
            340822: "怀宁县",
            340823: "枞阳县",
            340824: "潜山县",
            340825: "太湖县",
            340826: "宿松县",
            340827: "望江县",
            340828: "岳西县",
            340881: "桐城市"
        },
        800551: {
            340102: "瑶海区",
            340103: "庐阳区",
            340104: "蜀山区",
            340111: "包河区",
            340121: "长丰县",
            340122: "肥东县",
            340123: "肥西县",
            341402: "巢湖市",
            341421: "庐江县"
        },
        800562: {
            340702: "铜官山区",
            340703: "狮子山区",
            340711: "郊　区",
            340721: "铜陵县"
        },
        800563: {
            341802: "宣州区",
            341821: "郎溪县",
            341822: "广德县",
            341823: "泾　县",
            341824: "绩溪县",
            341825: "旌德县",
            341881: "宁国市"
        },
        800555: {
            340502: "金家庄区",
            340503: "花山区",
            340504: "雨山区",
            340521: "当涂县",
            341423: "含山县",
            341424: "和　县"
        },
        800558: {
            341202: "颍州区",
            341203: "颍东区",
            341204: "颍泉区",
            341221: "临泉县",
            341222: "太和县",
            341225: "阜南县",
            341226: "颍上县",
            341282: "界首市"
        },
        800567: {
            341602: "谯城区",
            341621: "涡阳县",
            341622: "蒙城县",
            341623: "利辛县"
        },
        800552: {
            340302: "龙子湖区",
            340303: "蚌山区",
            340304: "禹会区",
            340311: "淮上区",
            340321: "怀远县",
            340322: "五河县",
            340323: "固镇县"
        },
        800564: {
            341502: "金安区",
            341503: "裕安区",
            341521: "寿　县",
            341522: "霍邱县",
            341523: "舒城县",
            341524: "金寨县",
            341525: "霍山县"
        },
        800566: {
            341702: "贵池区",
            341721: "东至县",
            341722: "石台县",
            341723: "青阳县"
        },
        800550: {
            341102: "琅琊区",
            341103: "南谯区",
            341122: "来安县",
            341124: "全椒县",
            341125: "定远县",
            341126: "凤阳县",
            341181: "天长市",
            341182: "明光市"
        },
        800557: {
            341302: "墉桥区",
            341321: "砀山县",
            341322: "萧　县",
            341323: "灵璧县",
            341324: "泗　县"
        },
        800593: {
            350301: "宁德市区",
            350302: "福安市",
            350303: "福鼎市",
            350304: "霞浦县",
            350305: "古田县",
            350306: "周宁县",
            350307: "寿宁县",
            350308: "屏南县",
            350309: "柘荣县"
        },
        800591: {
            350101: "鼓楼区",
            350102: "福清市",
            350103: "长乐市",
            350104: "闽侯县",
            350105: "罗源县",
            350106: "闽清县",
            350107: "连江县",
            350108: "平潭县",
            350109: "永泰县",
            350110: "马尾区",
            350111: "台江区",
            350112: "晋安区",
            350113: "仓山区"
        },
        800598: {
            350801: "三明市区",
            350802: "沙　县",
            350803: "尤溪县",
            350804: "大田县",
            350805: "永安市",
            350806: "清流县",
            350807: "宁化县",
            350808: "明溪县",
            350809: "建宁县",
            350810: "泰宁县",
            350811: "将乐县"
        },
        800592: {
            350201: "思明区",
            350202: "同安区",
            350203: "集美区",
            350204: "翔安区",
            350205: "海沧区",
            350206: "湖里区"
        },
        800595: {
            350501: "丰泽区",
            350502: "晋江市",
            350503: "石狮市",
            350504: "南安市",
            350505: "惠安县",
            350506: "安溪县",
            350507: "永春县",
            350508: "德化县",
            350509: "泉港区",
            350511: "洛江区",
            350510: "鲤城区"
        },
        800594: {
            350401: "莆田市区",
            350402: "仙游县",
            350403: "涵江区",
            350404: "秀屿区"
        },
        800597: {
            350701: "龙岩市区",
            350702: "漳平市",
            350703: "永定县",
            350704: "上杭县",
            350705: "武平县",
            350706: "长汀县",
            350707: "连城县"
        },
        800599: {
            350901: "南平市区",
            350902: "建阳市",
            350903: "浦城县",
            350904: "松溪县",
            350905: "政和县",
            350906: "建瓯市",
            350907: "顺昌县",
            350908: "邵武市",
            350909: "光泽县",
            350910: "武夷山市"
        },
        800596: {
            350601: "芗城区",
            350602: "龙海市",
            350603: "云霄县",
            350604: "漳浦县",
            350605: "南靖县",
            350606: "平和县",
            350607: "长泰县",
            350608: "诏安县",
            350609: "东山县",
            350610: "华安县",
            350611: "龙文区"
        },
        800419: {
            211002: "白塔区",
            211003: "文圣区",
            211004: "宏伟区",
            211005: "弓长岭区",
            211011: "太子河区",
            211021: "辽阳县",
            211081: "灯塔市"
        },
        800413: {
            210402: "新抚区",
            210403: "东洲区",
            210404: "望花区",
            210411: "顺城区",
            210421: "抚顺县",
            210422: "新宾满族自治县",
            210423: "清原满族自治县"
        },
        800415: {
            210602: "元宝区",
            210603: "振兴区",
            210604: "振安区",
            210624: "宽甸满族自治县",
            210681: "东港市",
            210682: "凤城市"
        },
        800411: {
            210202: "中山区",
            210203: "西岗区",
            210204: "沙河口区",
            210211: "甘井子区",
            210212: "旅顺口区",
            210213: "金州区",
            210224: "长海县",
            210281: "瓦房店市",
            210282: "普兰店市",
            210283: "庄河市"
        },
        800412: {
            210302: "铁东区",
            210303: "铁西区",
            210304: "立山区",
            210311: "千山区",
            210321: "台安县",
            210323: "岫岩满族自治县",
            210381: "海城市"
        },
        800414: {
            210502: "平山区",
            210503: "溪湖区",
            210504: "明山区",
            210505: "南芬区",
            210521: "本溪满族自治县",
            210522: "桓仁满族自治县"
        },
        800240: {
            210102: "和平区",
            210103: "沈河区",
            210104: "大东区",
            210105: "皇姑区",
            210106: "铁西区",
            210111: "苏家屯区",
            210112: "东陵区",
            210113: "新城子区",
            210114: "于洪区",
            210122: "辽中县",
            210123: "康平县",
            210124: "法库县",
            210181: "新民市"
        },
        800410: {
            211202: "银州区",
            211204: "清河区",
            211221: "铁岭县",
            211223: "西丰县",
            211224: "昌图县",
            211281: "调兵山市",
            211282: "开原市"
        },
        800416: {
            210702: "古塔区",
            210703: "凌河区",
            210711: "太和区",
            210726: "黑山县",
            210727: "义　县",
            210781: "凌海市",
            210782: "北宁市"
        },
        800429: {
            211402: "连山区",
            211403: "龙港区",
            211404: "南票区",
            211421: "绥中县",
            211422: "建昌县",
            211481: "兴城市"
        },
        800421: {
            211302: "双塔区",
            211303: "龙城区",
            211321: "朝阳县",
            211322: "建平县",
            211324: "喀喇沁左翼蒙古族自治县",
            211381: "北票市",
            211382: "凌源市"
        },
        800427: {
            211102: "双台子区",
            211103: "兴隆台区",
            211121: "大洼县",
            211122: "盘山县"
        },
        800418: {
            210902: "海州区",
            210903: "新邱区",
            210904: "太平区",
            210905: "清河门区",
            210911: "细河区",
            210921: "阜新蒙古族自治县",
            210922: "彰武县"
        },
        800417: {
            210802: "站前区",
            210803: "西市区",
            210804: "鲅鱼圈区",
            210811: "老边区",
            210881: "盖州市",
            210882: "大石桥市"
        },
        800870: {
            530602: "昭阳区",
            530621: "鲁甸县",
            530622: "巧家县",
            530623: "盐津县",
            530624: "大关县",
            530625: "永善县",
            530626: "绥江县",
            530627: "镇雄县",
            530628: "彝良县",
            530629: "威信县",
            530630: "水富县"
        },
        800887: {
            533421: "香格里拉县",
            533422: "德钦县",
            533423: "维西傈僳族自治县"
        },
        800877: {
            530402: "红塔区",
            530421: "江川县",
            530422: "澄江县",
            530423: "通海县",
            530424: "华宁县",
            530425: "易门县",
            530426: "峨山彝族自治县",
            530427: "新平彝族傣族自治县",
            530428: "元江哈尼族彝族傣族自治县"
        },
        800878: {
            532301: "楚雄市",
            532322: "双柏县",
            532323: "牟定县",
            532324: "南华县",
            532325: "姚安县",
            532326: "大姚县",
            532327: "永仁县",
            532328: "元谋县",
            532329: "武定县",
            532331: "禄丰县"
        },
        800872: {
            532901: "大理市",
            532922: "漾濞彝族自治县",
            532923: "祥云县",
            532924: "宾川县",
            532925: "弥渡县",
            532926: "南涧彝族自治县",
            532927: "巍山彝族回族自治县",
            532928: "永平县",
            532929: "云龙县",
            532930: "洱源县",
            532931: "剑川县",
            532932: "鹤庆县"
        },
        800691: {
            532801: "景洪市",
            532822: "勐海县",
            532823: "勐腊县"
        },
        800888: {
            530702: "古城区",
            530721: "玉龙纳西族自治县",
            530722: "永胜县",
            530723: "华坪县",
            530724: "宁蒗彝族自治县"
        },
        800883: {
            530902: "临翔区",
            530921: "凤庆县",
            530922: "云　县",
            530923: "永德县",
            530924: "镇康县",
            530926: "耿马傣族佤族自治县",
            530927: "沧源佤族自治县"
        },
        800692: {
            533102: "瑞丽市",
            533103: "潞西市",
            533122: "梁河县",
            533123: "盈江县",
            533124: "陇川县"
        },
        800876: {
            532621: "文山县",
            532622: "砚山县",
            532623: "西畴县",
            532624: "麻栗坡县",
            532625: "马关县",
            532626: "丘北县",
            532627: "广南县",
            532628: "富宁县"
        },
        800875: {
            530502: "隆阳区",
            530521: "施甸县",
            530522: "腾冲县",
            530523: "龙陵县",
            530524: "昌宁县"
        },
        800874: {
            530302: "麒麟区",
            530321: "马龙县",
            530322: "陆良县",
            530323: "师宗县",
            530324: "罗平县",
            530325: "富源县",
            530326: "会泽县",
            530328: "沾益县",
            530381: "宣威市"
        },
        800873: {
            532501: "个旧市",
            532502: "开远市",
            532522: "蒙自县",
            532523: "屏边苗族自治县",
            532524: "建水县",
            532525: "石屏县",
            532526: "弥勒县",
            532527: "泸西县",
            532528: "元阳县",
            532529: "红河县",
            532530: "金平苗族瑶族傣族自治县",
            532531: "绿春县",
            532532: "河口瑶族自治县"
        },
        800879: {
            530802: "翠云区",
            530821: "普洱哈尼族彝族自治县",
            530822: "墨江哈尼族自治县",
            530823: "景东彝族自治县",
            530824: "景谷傣族彝族自治县",
            530825: "镇沅彝族哈尼族拉祜族自治县",
            530826: "江城哈尼族彝族自治县",
            530827: "孟连傣族拉祜族佤族自治县",
            530828: "澜沧拉祜族自治县",
            530829: "西盟佤族自治县"
        },
        800886: {
            533321: "泸水县",
            533323: "福贡县",
            533324: "贡山独龙族怒族自治县",
            533325: "兰坪白族普米族自治县"
        },
        800871: {
            530102: "五华区",
            530103: "盘龙区",
            530111: "官渡区",
            530112: "西山区",
            530113: "东川区",
            530121: "呈贡县",
            530122: "晋宁县",
            530124: "富民县",
            530125: "宜良县",
            530126: "石林彝族自治县",
            530127: "嵩明县",
            530128: "禄劝彝族苗族自治县",
            530129: "寻甸回族彝族自治县",
            530181: "安宁市"
        },
        800396: {
            411702: "驿城区",
            411721: "西平县",
            411722: "上蔡县",
            411723: "平舆县",
            411724: "正阳县",
            411725: "确山县",
            411726: "泌阳县",
            411727: "汝南县",
            411728: "遂平县",
            411729: "新蔡县"
        },
        800379: {
            410302: "老城区",
            410303: "西工区",
            410304: "廛河回族区",
            410305: "涧西区",
            410306: "吉利区",
            410307: "洛龙区",
            410312: "伊滨区",
            410322: "孟津县",
            410323: "新安县",
            410324: "栾川县",
            410325: "嵩　县",
            410326: "汝阳县",
            410327: "宜阳县",
            410328: "洛宁县",
            410329: "伊川县",
            410381: "偃师市"
        },
        800378: {
            410202: "龙亭区",
            410203: "顺河回族区",
            410204: "鼓楼区",
            410205: "南关区",
            410206: "禹王台区",
            410211: "郊　区",
            410212: "祥符区",
            410213: "金明区",
            410221: "杞　县",
            410222: "通许县",
            410223: "尉氏县",
            410224: "开封县",
            410225: "兰考县"
        },
        800395: {
            411102: "源汇区",
            411103: "郾城区",
            411104: "召陵区",
            411121: "舞阳县",
            411122: "临颍县"
        },
        800392: {
            410602: "鹤山区",
            410603: "山城区",
            410611: "淇滨区",
            410621: "浚　县",
            410622: "淇　县"
        },
        800373: {
            410702: "红旗区",
            410703: "卫滨区",
            410704: "凤泉区",
            410711: "牧野区",
            410721: "新乡县",
            410724: "获嘉县",
            410725: "原阳县",
            410726: "延津县",
            410727: "封丘县",
            410728: "长垣县",
            410781: "卫辉市",
            410782: "辉县市"
        },
        800398: {
            411202: "湖滨区",
            411221: "渑池县",
            411222: "陕　县",
            411224: "卢氏县",
            411281: "义马市",
            411282: "灵宝市"
        },
        800374: {
            411002: "魏都区",
            411003: "建安区",
            411023: "许昌县",
            411024: "鄢陵县",
            411025: "襄城县",
            411081: "禹州市",
            411082: "长葛市"
        },
        800376: {
            411502: "师河区",
            411503: "平桥区",
            411521: "罗山县",
            411522: "光山县",
            411523: "新　县",
            411524: "商城县",
            411525: "固始县",
            411526: "潢川县",
            411527: "淮滨县",
            411528: "息　县"
        },
        800393: {
            410902: "华龙区",
            410922: "清丰县",
            410923: "南乐县",
            410926: "范　县",
            410927: "台前县",
            410928: "濮阳县"
        },
        800371: {
            410102: "中原区",
            410103: "二七区",
            410104: "管城回族区",
            410105: "金水区",
            410106: "上街区",
            410108: "邙山区",
            410109: "郑东新区",
            410110: "高新技术开发区",
            410111: "经济技术开发区",
            410112: "惠济区",
            410122: "中牟县",
            410181: "巩义市",
            410182: "荥阳市",
            410183: "新密市",
            410184: "新郑市",
            410185: "登封市"
        },
        800375: {
            410402: "新华区",
            410403: "卫东区",
            410404: "石龙区",
            410411: "湛河区",
            410421: "宝丰县",
            410422: "叶　县",
            410423: "鲁山县",
            410425: "郏　县",
            410481: "舞钢市",
            410482: "汝州市"
        },
        800372: {
            410502: "文峰区",
            410503: "北关区",
            410505: "殷都区",
            410506: "龙安区",
            410507: "高新区",
            410522: "安阳县",
            410523: "汤阴县",
            410526: "滑　县",
            410527: "内黄县",
            410581: "林州市"
        },
        800397: {
            419002: "济源市"
        },
        800391: {
            410802: "解放区",
            410803: "中站区",
            410804: "马村区",
            410811: "山阳区",
            410821: "修武县",
            410822: "博爱县",
            410823: "武陟县",
            410825: "温　县",
            410882: "沁阳市",
            410883: "孟州市"
        },
        800394: {
            411602: "川汇区",
            411621: "扶沟县",
            411622: "西华县",
            411623: "商水县",
            411624: "沈丘县",
            411625: "郸城县",
            411626: "淮阳县",
            411627: "太康县",
            411628: "鹿邑县",
            411681: "项城市"
        },
        800377: {
            411302: "宛城区",
            411303: "卧龙区",
            411321: "南召县",
            411322: "方城县",
            411323: "西峡县",
            411324: "镇平县",
            411325: "内乡县",
            411326: "淅川县",
            411327: "社旗县",
            411328: "唐河县",
            411329: "新野县",
            411330: "桐柏县",
            411381: "邓州市"
        },
        800370: {
            411402: "梁园区",
            411403: "睢阳区",
            411421: "民权县",
            411422: "睢　县",
            411423: "宁陵县",
            411424: "柘城县",
            411425: "虞城县",
            411426: "夏邑县",
            411481: "永城市"
        },
        800954: {
            640402: "原州区",
            640422: "西吉县",
            640423: "隆德县",
            640424: "泾源县",
            640425: "彭阳县"
        },
        800953: {
            640302: "利通区",
            640323: "盐池县",
            640324: "同心县",
            640381: "青铜峡市"
        },
        800952: {
            640202: "大武口区",
            640205: "惠农区",
            640221: "平罗县"
        },
        800955: {
            640502: "沙坡头区",
            640521: "中宁县",
            640522: "海原县"
        },
        800951: {
            640104: "兴庆区",
            640105: "西夏区",
            640106: "金凤区",
            640121: "永宁县",
            640122: "贺兰县",
            640181: "灵武市"
        },
        800770: {
            450602: "港口区",
            450603: "防城区",
            450621: "上思县",
            450681: "东兴市"
        },
        800777: {
            450702: "钦南区",
            450703: "钦北区",
            450721: "灵山县",
            450722: "浦北县"
        },
        800779: {
            450502: "海城区",
            450503: "银海区",
            450512: "铁山港区",
            450521: "合浦县"
        },
        800773: {
            450302: "秀峰区",
            450303: "叠彩区",
            450304: "象山区",
            450305: "七星区",
            450311: "雁山区",
            450321: "阳朔县",
            450322: "临桂县",
            450323: "灵川县",
            450324: "全州县",
            450325: "兴安县",
            450326: "永福县",
            450327: "灌阳县",
            450328: "龙胜各族自治县",
            450329: "资源县",
            450330: "平乐县",
            450331: "荔蒲县",
            450332: "恭城瑶族自治县"
        },
        800771: {
            450102: "兴宁区",
            450103: "青秀区",
            450105: "江南区",
            450107: "西乡塘区",
            450108: "良庆区",
            450109: "邕宁区",
            450122: "武鸣县",
            450123: "隆安县",
            450124: "马山县",
            450125: "上林县",
            450126: "宾阳县",
            450127: "横　县"
        },
        800772: {
            450202: "城中区",
            450203: "鱼峰区",
            450204: "柳南区",
            450205: "柳北区",
            450221: "柳江县",
            450222: "柳城县",
            450223: "鹿寨县",
            450224: "融安县",
            450225: "融水苗族自治县",
            450226: "三江侗族自治县"
        },
        800776: {
            451002: "右江区",
            451021: "田阳县",
            451022: "田东县",
            451023: "平果县",
            451024: "德保县",
            451025: "靖西县",
            451026: "那坡县",
            451027: "凌云县",
            451028: "乐业县",
            451029: "田林县",
            451030: "西林县",
            451031: "隆林各族自治县"
        },
        800778: {
            451202: "金城江区",
            451221: "南丹县",
            451222: "天峨县",
            451223: "凤山县",
            451224: "东兰县",
            451225: "罗城仫佬族自治县",
            451226: "环江毛南族自治县",
            451227: "巴马瑶族自治县",
            451228: "都安瑶族自治县",
            451229: "大化瑶族自治县",
            451281: "宜州市"
        },
        800780: {
            451402: "江洲区",
            451421: "扶绥县",
            451422: "宁明县",
            451423: "龙州县",
            451424: "大新县",
            451425: "天等县",
            451481: "凭祥市"
        },
        800775: {
            450902: "玉州区",
            450921: "容　县",
            450922: "陆川县",
            450923: "博白县",
            450924: "兴业县",
            450981: "北流市"
        },
        800774: {
            450403: "万秀区",
            450404: "蝶山区",
            450405: "长洲区",
            450421: "苍梧县",
            450422: "藤　县",
            450423: "蒙山县",
            450481: "岑溪市"
        },
        800783: {
            451102: "八步区",
            451121: "昭平县",
            451122: "钟山县",
            451123: "富川瑶族自治县"
        },
        800782: {
            450802: "港北区",
            450803: "港南区",
            450804: "覃塘区",
            450821: "平南县",
            450881: "桂平市"
        },
        800781: {
            451302: "兴宾区",
            451321: "忻城县",
            451322: "象州县",
            451323: "武宣县",
            451324: "金秀瑶族自治县",
            451381: "合山市"
        },
        800575: {
            330602: "越城区",
            330621: "绍兴县",
            330624: "新昌县",
            330681: "诸暨市",
            330682: "上虞市",
            330683: "嵊州市"
        },
        800571: {
            330102: "上城区",
            330103: "下城区",
            330104: "江干区",
            330105: "拱墅区",
            330106: "西湖区",
            330108: "滨江区",
            330109: "萧山区",
            330110: "余杭区",
            330122: "桐庐县",
            330127: "淳安县",
            330182: "建德市",
            330183: "富阳市",
            330185: "临安市"
        },
        800574: {
            330203: "海曙区",
            330205: "江北区",
            330206: "北仑区",
            330211: "镇海区",
            330212: "鄞州区",
            330225: "象山县",
            330226: "宁海县",
            330281: "余姚市",
            330282: "慈溪市",
            330283: "奉化市"
        },
        800577: {
            330302: "鹿城区",
            330303: "龙湾区",
            330304: "瓯海区",
            330322: "洞头县",
            330324: "永嘉县",
            330326: "平阳县",
            330327: "苍南县",
            330328: "文成县",
            330329: "泰顺县",
            330381: "瑞安市",
            330382: "乐清市"
        },
        800572: {
            330502: "吴兴区",
            330503: "南浔区",
            330521: "德清县",
            330522: "长兴县",
            330523: "安吉县"
        },
        800570: {
            330802: "柯城区",
            330803: "衢江区",
            330822: "常山县",
            330824: "开化县",
            330825: "龙游县",
            330881: "江山市"
        },
        800573: {
            330402: "秀城区",
            330411: "秀洲区",
            330421: "嘉善县",
            330424: "海盐县",
            330481: "海宁市",
            330482: "平湖市",
            330483: "桐乡市"
        },
        800576: {
            331002: "椒江区",
            331003: "黄岩区",
            331004: "路桥区",
            331021: "玉环县",
            331022: "三门县",
            331023: "天台县",
            331024: "仙居县",
            331081: "温岭市",
            331082: "临海市"
        },
        800578: {
            331102: "莲都区",
            331121: "青田县",
            331122: "缙云县",
            331123: "遂昌县",
            331124: "松阳县",
            331125: "云和县",
            331126: "庆元县",
            331127: "景宁畲族自治县",
            331181: "龙泉市"
        },
        800580: {
            330902: "定海区",
            330903: "普陀区",
            330921: "岱山县",
            330922: "嵊泗县"
        },
        800579: {
            330702: "婺城区",
            330703: "金东区",
            330723: "武义县",
            330726: "浦江县",
            330727: "磐安县",
            330781: "兰溪市",
            330782: "义乌市",
            330783: "东阳市",
            330784: "永康市"
        },
        800350: {
            140902: "忻府区",
            140921: "定襄县",
            140922: "五台县",
            140923: "代　县",
            140924: "繁峙县",
            140925: "宁武县",
            140926: "静乐县",
            140927: "神池县",
            140928: "五寨县",
            140929: "岢岚县",
            140930: "河曲县",
            140931: "保德县",
            140932: "偏关县",
            140981: "原平市"
        },
        800357: {
            141002: "尧都区",
            141021: "曲沃县",
            141022: "翼城县",
            141023: "襄汾县",
            141024: "洪洞县",
            141025: "古　县",
            141026: "安泽县",
            141027: "浮山县",
            141028: "吉　县",
            141029: "乡宁县",
            141030: "大宁县",
            141031: "隰　县",
            141032: "永和县",
            141033: "蒲　县",
            141034: "汾西县",
            141081: "侯马市",
            141082: "霍州市"
        },
        800349: {
            140602: "朔城区",
            140603: "平鲁区",
            140621: "山阴县",
            140622: "应　县",
            140623: "右玉县",
            140624: "怀仁县"
        },
        800352: {
            140202: "城　区",
            140203: "矿　区",
            140211: "南郊区",
            140212: "新荣区",
            140221: "阳高县",
            140222: "天镇县",
            140223: "广灵县",
            140224: "灵丘县",
            140225: "浑源县",
            140226: "左云县",
            140227: "大同县"
        },
        800354: {
            140702: "榆次区",
            140721: "榆社县",
            140722: "左权县",
            140723: "和顺县",
            140724: "昔阳县",
            140725: "寿阳县",
            140726: "太谷县",
            140727: "祁　县",
            140728: "平遥县",
            140729: "灵石县",
            140781: "介休市"
        },
        800358: {
            141102: "离石区",
            141121: "文水县",
            141122: "交城县",
            141123: "兴　县",
            141124: "临　县",
            141125: "柳林县",
            141126: "石楼县",
            141127: "岚　县",
            141128: "方山县",
            141129: "中阳县",
            141130: "交口县",
            141181: "孝义市",
            141182: "汾阳市"
        },
        800356: {
            140502: "城　区",
            140521: "沁水县",
            140522: "阳城县",
            140524: "陵川县",
            140525: "泽州县",
            140581: "高平市"
        },
        800351: {
            140105: "小店区",
            140106: "迎泽区",
            140107: "杏花岭区",
            140108: "尖草坪区",
            140109: "万柏林区",
            140110: "晋源区",
            140121: "清徐县",
            140122: "阳曲县",
            140123: "娄烦县",
            140181: "古交市"
        },
        800359: {
            140802: "盐湖区",
            140821: "临猗县",
            140822: "万荣县",
            140823: "闻喜县",
            140824: "稷山县",
            140825: "新绛县",
            140826: "绛　县",
            140827: "垣曲县",
            140828: "夏　县",
            140829: "平陆县",
            140830: "芮城县",
            140881: "永济市",
            140882: "河津市"
        },
        800353: {
            140302: "城　区",
            140303: "矿　区",
            140311: "郊　区",
            140321: "平定县",
            140322: "盂　县"
        },
        800355: {
            140402: "城　区",
            140411: "郊　区",
            140421: "长治县",
            140423: "襄垣县",
            140424: "屯留县",
            140425: "平顺县",
            140426: "黎城县",
            140427: "壶关县",
            140428: "长子县",
            140429: "武乡县",
            140430: "沁　县",
            140431: "沁源县",
            140481: "潞城市"
        },
        800902: {
            652201: "哈密市",
            652222: "巴里坤哈萨克自治县",
            652223: "伊吾县"
        },
        800990: {
            650202: "独山子区",
            650203: "克拉玛依区",
            650204: "白碱滩区",
            650205: "乌尔禾区"
        },
        800901: {
            654201: "塔城市",
            654221: "额敏县",
            654224: "托里县",
            654225: "裕民县",
            654226: "和布克赛尔蒙古自治县"
        },
        800991: {
            650102: "天山区",
            650103: "沙依巴克区",
            650104: "新市区",
            650105: "水磨沟区",
            650106: "头屯河区",
            650107: "达坂城区",
            650108: "东山区",
            650121: "乌鲁木齐县"
        },
        800992: {
            654003: "奎屯市",
            654202: "乌苏市"
        },
        800906: {
            654301: "阿勒泰市",
            654321: "布尔津县",
            654322: "富蕴县",
            654323: "福海县",
            654324: "哈巴河县",
            654325: "青河县",
            654326: "吉木乃县"
        },
        800903: {
            653201: "和田市",
            653221: "和田县",
            653222: "墨玉县",
            653223: "皮山县",
            653224: "洛浦县",
            653225: "策勒县",
            653226: "于田县",
            653227: "民丰县"
        },
        800998: {
            653101: "喀什市",
            653121: "疏附县",
            653122: "疏勒县",
            653123: "英吉沙县",
            653124: "泽普县",
            653125: "莎车县",
            653126: "叶城县",
            653127: "麦盖提县",
            653128: "岳普湖县",
            653129: "伽师县",
            653130: "巴楚县",
            653131: "塔什库尔干塔吉克自治县",
            659003: "图木舒克市"
        },
        800993: {
            654223: "沙湾县",
            659001: "石河子市"
        },
        800997: {
            652901: "阿克苏市",
            652922: "温宿县",
            652923: "库车县",
            652924: "沙雅县",
            652925: "新和县",
            652926: "拜城县",
            652927: "乌什县",
            652928: "阿瓦提县",
            652929: "柯坪县",
            659002: "阿拉尔市"
        },
        800994: {
            652301: "昌吉市",
            652302: "阜康市",
            652303: "米泉市",
            652323: "呼图壁县",
            652324: "玛纳斯县",
            652325: "奇台县",
            652327: "吉木萨尔县",
            652328: "木垒哈萨克自治县",
            659004: "五家渠市"
        },
        800909: {
            652701: "博乐市",
            652722: "精河县",
            652723: "温泉县"
        },
        800995: {
            652101: "吐鲁番市",
            652122: "鄯善县",
            652123: "托克逊县"
        },
        800999: {
            654002: "伊宁市",
            654021: "伊宁县",
            654022: "察布查尔锡伯自治县",
            654023: "霍城县",
            654024: "巩留县",
            654025: "新源县",
            654026: "昭苏县",
            654027: "特克斯县",
            654028: "尼勒克县"
        },
        800908: {
            653001: "阿图什市",
            653022: "阿克陶县",
            653023: "阿合奇县",
            653024: "乌恰县"
        },
        800996: {
            652801: "库尔勒市",
            652822: "轮台县",
            652823: "尉犁县",
            652824: "若羌县",
            652825: "且末县",
            652826: "焉耆回族自治县",
            652827: "和静县",
            652828: "和硕县",
            652829: "博湖县"
        },
        800791: {
            360102: "东湖区",
            360103: "西湖区",
            360104: "青云谱区",
            360105: "湾里区",
            360111: "青山湖区",
            360121: "南昌县",
            360122: "新建县",
            360123: "安义县",
            360124: "进贤县"
        },
        800794: {
            361002: "临川区",
            361021: "南城县",
            361022: "黎川县",
            361023: "南丰县",
            361024: "崇仁县",
            361025: "乐安县",
            361026: "宜黄县",
            361027: "金溪县",
            361028: "资溪县",
            361029: "东乡县",
            361030: "广昌县"
        },
        800798: {
            360202: "昌江区",
            360203: "珠山区",
            360222: "浮梁县",
            360281: "乐平市"
        },
        800797: {
            360702: "章贡区",
            360721: "赣　县",
            360722: "信丰县",
            360723: "大余县",
            360724: "上犹县",
            360725: "崇义县",
            360726: "安远县",
            360727: "龙南县",
            360728: "定南县",
            360729: "全南县",
            360730: "宁都县",
            360731: "于都县",
            360732: "兴国县",
            360733: "会昌县",
            360734: "寻乌县",
            360735: "石城县",
            360781: "瑞金市",
            360782: "南康市"
        },
        800793: {
            361102: "信州区",
            361121: "上饶县",
            361122: "广丰县",
            361123: "玉山县",
            361124: "铅山县",
            361125: "横峰县",
            361126: "弋阳县",
            361127: "余干县",
            361128: "鄱阳县",
            361129: "万年县",
            361130: "婺源县",
            361181: "德兴市"
        },
        800790: {
            360502: "渝水区",
            360521: "分宜县"
        },
        800795: {
            360902: "袁州区",
            360921: "奉新县",
            360922: "万载县",
            360923: "上高县",
            360924: "宜丰县",
            360925: "靖安县",
            360926: "铜鼓县",
            360981: "丰城市",
            360982: "樟树市",
            360983: "高安市"
        },
        800792: {
            360402: "庐山区",
            360403: "浔阳区",
            360421: "九江县",
            360423: "武宁县",
            360424: "修水县",
            360425: "永修县",
            360426: "德安县",
            360427: "星子县",
            360428: "都昌县",
            360429: "湖口县",
            360430: "彭泽县",
            360481: "瑞昌市"
        },
        800799: {
            360302: "安源区",
            360313: "湘东区",
            360321: "莲花县",
            360322: "上栗县",
            360323: "芦溪县"
        },
        800701: {
            360602: "月湖区",
            360622: "余江县",
            360681: "贵溪市"
        },
        800796: {
            360802: "吉州区",
            360803: "青原区",
            360821: "吉安县",
            360822: "吉水县",
            360823: "峡江县",
            360824: "新干县",
            360825: "永丰县",
            360826: "泰和县",
            360827: "遂川县",
            360828: "万安县",
            360829: "安福县",
            360830: "永新县",
            360881: "井冈山市"
        },
        800230: {
            500101: "万州区",
            500102: "涪陵区",
            500103: "渝中区",
            500104: "大渡口区",
            500105: "江北区",
            500106: "沙坪坝区",
            500107: "九龙坡区",
            500108: "南岸区",
            500109: "北碚区",
            500110: "万盛区",
            500111: "双桥区",
            500112: "渝北区",
            500113: "巴南区",
            500114: "黔江区",
            500115: "长寿区",
            500222: "綦江县",
            500223: "潼南县",
            500224: "铜梁县",
            500225: "大足县",
            500226: "荣昌县",
            500227: "璧山县",
            500228: "梁平县",
            500229: "城口县",
            500230: "丰都县",
            500231: "垫江县",
            500232: "武隆县",
            500233: "忠　县",
            500234: "开　县",
            500235: "云阳县",
            500236: "奉节县",
            500237: "巫山县",
            500238: "巫溪县",
            500240: "石柱土家族自治县",
            500241: "秀山土家族苗族自治县",
            500242: "酉阳土家族苗族自治县",
            500243: "彭水苗族土家族自治县",
            500381: "江津市",
            500382: "合川市",
            500383: "永川市",
            500384: "南川市"
        },
        800725: {
            429005: "潜江市"
        },
        800719: {
            420302: "茅箭区",
            420303: "张湾区",
            420321: "郧　县",
            420322: "郧西县",
            420323: "竹山县",
            420324: "竹溪县",
            420325: "房　县",
            420381: "丹江口市",
            429021: "神农架林区"
        },
        800713: {
            421102: "黄州区",
            421121: "团风县",
            421122: "红安县",
            421123: "罗田县",
            421124: "英山县",
            421125: "浠水县",
            421126: "蕲春县",
            421127: "黄梅县",
            421181: "麻城市",
            421182: "武穴市"
        },
        800716: {
            421002: "沙市区",
            421003: "荆州区",
            421022: "公安县",
            421023: "监利县",
            421024: "江陵县",
            421081: "石首市",
            421083: "洪湖市",
            421087: "松滋市"
        },
        800712: {
            420902: "孝南区",
            420921: "孝昌县",
            420922: "大悟县",
            420923: "云梦县",
            420981: "应城市",
            420982: "安陆市",
            420984: "汉川市"
        },
        800717: {
            420502: "西陵区",
            420503: "伍家岗区",
            420504: "点军区",
            420505: "猇亭区",
            420506: "夷陵区",
            420525: "远安县",
            420526: "兴山县",
            420527: "秭归县",
            420528: "长阳土家族自治县",
            420529: "五峰土家族自治县",
            420581: "宜都市",
            420582: "当阳市",
            420583: "枝江市"
        },
        800722: {
            421302: "曾都区",
            421381: "广水市"
        },
        800711: {
            420702: "梁子湖区",
            420703: "华容区",
            420704: "鄂城区"
        },
        800710: {
            420602: "襄城区",
            420606: "樊城区",
            420607: "襄阳区",
            420624: "南漳县",
            420625: "谷城县",
            420626: "保康县",
            420682: "老河口市",
            420683: "枣阳市",
            420684: "宜城市"
        },
        800715: {
            421202: "咸安区",
            421221: "嘉鱼县",
            421222: "通城县",
            421223: "崇阳县",
            421224: "通山县",
            421281: "赤壁市"
        },
        800728: {
            429004: "仙桃市"
        },
        800718: {
            422801: "恩施市",
            422802: "利川市",
            422822: "建始县",
            422823: "巴东县",
            422825: "宣恩县",
            422826: "咸丰县",
            422827: "来凤县",
            422828: "鹤峰县"
        },
        800724: {
            420802: "东宝区",
            420804: "掇刀区",
            420821: "京山县",
            420822: "沙洋县",
            420881: "钟祥市"
        },
        800726: {
            429006: "天门市"
        },
        800714: {
            420202: "黄石港区",
            420203: "西塞山区",
            420204: "下陆区",
            420205: "铁山区",
            420222: "阳新县",
            420281: "大冶市"
        },
        800270: {
            420102: "江岸区",
            420103: "江汉区",
            420104: "乔口区",
            420105: "汉阳区",
            420106: "武昌区",
            420107: "青山区",
            420111: "洪山区",
            420112: "东西湖区",
            420113: "汉南区",
            420114: "蔡甸区",
            420115: "江夏区",
            420116: "黄陂区",
            420117: "新洲区"
        },
        800432: {
            220202: "昌邑区",
            220203: "龙潭区",
            220204: "船营区",
            220211: "丰满区",
            220221: "永吉县",
            220281: "蛟河市",
            220282: "桦甸市",
            220283: "舒兰市",
            220284: "磐石市"
        },
        800438: {
            220702: "宁江区",
            220721: "前郭尔罗斯蒙古族自治县",
            220722: "长岭县",
            220723: "乾安县",
            220724: "扶余县"
        },
        800435: {
            220502: "东昌区",
            220503: "二道江区",
            220521: "通化县",
            220523: "辉南县",
            220524: "柳河县",
            220581: "梅河口市",
            220582: "集安市"
        },
        800431: {
            220102: "南关区",
            220103: "宽城区",
            220104: "朝阳区",
            220105: "二道区",
            220106: "绿园区",
            220112: "双阳区",
            220122: "农安县",
            220181: "九台市",
            220182: "榆树市",
            220183: "德惠市"
        },
        800434: {
            220302: "铁西区",
            220303: "铁东区",
            220322: "梨树县",
            220323: "伊通满族自治县",
            220381: "公主岭市",
            220382: "双辽市"
        },
        800439: {
            220602: "八道江区",
            220621: "抚松县",
            220622: "靖宇县",
            220623: "长白朝鲜族自治县",
            220625: "江源县",
            220681: "临江市"
        },
        800436: {
            220802: "洮北区",
            220821: "镇赉县",
            220822: "通榆县",
            220881: "洮南市",
            220882: "大安市"
        },
        800433: {
            222401: "延吉市",
            222402: "图们市",
            222403: "敦化市",
            222404: "珲春市",
            222405: "龙井市",
            222406: "和龙市",
            222424: "汪清县",
            222426: "安图县"
        },
        800437: {
            220402: "龙山区",
            220403: "西安区",
            220421: "东丰县",
            220422: "东辽县"
        },
        800538: {
            370902: "泰山区",
            370903: "岱岳区",
            370921: "宁阳县",
            370923: "东平县",
            370982: "新泰市",
            370983: "肥城市"
        },
        800535: {
            370602: "芝罘区",
            370611: "福山区",
            370612: "牟平区",
            370613: "莱山区",
            370634: "长岛县",
            370681: "龙口市",
            370682: "莱阳市",
            370683: "莱州市",
            370684: "蓬莱市",
            370685: "招远市",
            370686: "栖霞市",
            370687: "海阳市"
        },
        800532: {
            370202: "市南区",
            370203: "市北区",
            370205: "四方区",
            370211: "黄岛区",
            370212: "崂山区",
            370213: "李沧区",
            370214: "城阳区",
            370281: "胶州市",
            370282: "即墨市",
            370283: "平度市",
            370284: "胶南市",
            370285: "莱西市"
        },
        800546: {
            370502: "东营区",
            370503: "河口区",
            370521: "垦利县",
            370522: "利津县",
            370523: "广饶县"
        },
        800631: {
            371002: "环翠区",
            371081: "文登市",
            371082: "荣成市",
            371083: "乳山市"
        },
        800533: {
            370302: "淄川区",
            370303: "张店区",
            370304: "博山区",
            370305: "临淄区",
            370306: "周村区",
            370321: "桓台县",
            370322: "高青县",
            370323: "沂源县"
        },
        800534: {
            371402: "德城区",
            371421: "陵　县",
            371422: "宁津县",
            371423: "庆云县",
            371424: "临邑县",
            371425: "齐河县",
            371426: "平原县",
            371427: "夏津县",
            371428: "武城县",
            371481: "乐陵市",
            371482: "禹城市"
        },
        800531: {
            370102: "历下区",
            370103: "市中区",
            370104: "槐荫区",
            370105: "天桥区",
            370112: "历城区",
            370113: "长清区",
            370124: "平阴县",
            370125: "济阳县",
            370126: "商河县",
            370181: "章丘市"
        },
        800539: {
            371302: "兰山区",
            371311: "罗庄区",
            371312: "河东区",
            371321: "沂南县",
            371322: "郯城县",
            371323: "沂水县",
            371324: "苍山县",
            371325: "费　县",
            371326: "平邑县",
            371327: "莒南县",
            371328: "蒙阴县",
            371329: "临沭县"
        },
        800537: {
            370802: "市中区",
            370811: "任城区",
            370826: "微山县",
            370827: "鱼台县",
            370828: "金乡县",
            370829: "嘉祥县",
            370830: "汶上县",
            370831: "泗水县",
            370832: "梁山县",
            370881: "曲阜市",
            370882: "兖州市",
            370883: "邹城市"
        },
        800536: {
            370702: "潍城区",
            370703: "寒亭区",
            370704: "坊子区",
            370705: "奎文区",
            370724: "临朐县",
            370725: "昌乐县",
            370781: "青州市",
            370782: "诸城市",
            370783: "寿光市",
            370784: "安丘市",
            370785: "高密市",
            370786: "昌邑市"
        },
        800635: {
            371502: "东昌府区",
            371521: "阳谷县",
            371522: "莘　县",
            371523: "茌平县",
            371524: "东阿县",
            371525: "冠　县",
            371526: "高唐县",
            371581: "临清市"
        },
        800633: {
            371102: "东港区",
            371103: "岚山区",
            371121: "五莲县",
            371122: "莒　县"
        },
        800530: {
            371702: "牡丹区",
            371721: "曹　县",
            371722: "单　县",
            371723: "成武县",
            371724: "巨野县",
            371725: "郓城县",
            371726: "鄄城县",
            371727: "定陶县",
            371728: "东明县"
        },
        800632: {
            370402: "市中区",
            370403: "薛城区",
            370404: "峄城区",
            370405: "台儿庄区",
            370406: "山亭区",
            370481: "滕州市"
        },
        800543: {
            371602: "滨城区",
            371621: "惠民县",
            371622: "阳信县",
            371623: "无棣县",
            371624: "沾化县",
            371625: "博兴县",
            371626: "邹平县"
        },
        800634: {
            371202: "莱城区",
            371203: "钢城区"
        },
        800841: {
            511402: "东坡区",
            511421: "仁寿县",
            511422: "彭山县",
            511423: "洪雅县",
            511424: "丹棱县",
            511425: "青神县"
        },
        800826: {
            511602: "广安区",
            511621: "岳池县",
            511622: "武胜县",
            511623: "邻水县",
            511681: "华莹市"
        },
        800836: {
            513321: "康定县",
            513322: "泸定县",
            513323: "丹巴县",
            513324: "九龙县",
            513325: "雅江县",
            513326: "道孚县",
            513327: "炉霍县",
            513328: "甘孜县",
            513329: "新龙县",
            513330: "德格县",
            513331: "白玉县",
            513332: "石渠县",
            513333: "色达县",
            513334: "理塘县",
            513335: "巴塘县",
            513336: "乡城县",
            513337: "稻城县",
            513338: "得荣县"
        },
        800838: {
            510603: "旌阳区",
            510623: "中江县",
            510626: "罗江县",
            510681: "广汉市",
            510682: "什邡市",
            510683: "绵竹市"
        },
        800280: {
            510104: "锦江区",
            510105: "青羊区",
            510106: "金牛区",
            510107: "武侯区",
            510108: "成华区",
            510112: "龙泉驿区",
            510113: "青白江区",
            510114: "新都区",
            510115: "温江区",
            510121: "金堂县",
            510122: "双流县",
            510124: "郫　县",
            510129: "大邑县",
            510131: "蒲江县",
            510132: "新津县",
            510181: "都江堰市",
            510182: "彭州市",
            510183: "邛崃市",
            510184: "崇州市"
        },
        800831: {
            511502: "翠屏区",
            511521: "宜宾县",
            511522: "南溪县",
            511523: "江安县",
            511524: "长宁县",
            511525: "高　县",
            511526: "珙　县",
            511527: "筠连县",
            511528: "兴文县",
            511529: "屏山县"
        },
        800812: {
            510402: "东　区",
            510403: "西　区",
            510411: "仁和区",
            510421: "米易县",
            510422: "盐边县"
        },
        800839: {
            510802: "市中区",
            510811: "元坝区",
            510812: "朝天区",
            510821: "旺苍县",
            510822: "青川县",
            510823: "剑阁县",
            510824: "苍溪县"
        },
        800834: {
            513401: "西昌市",
            513422: "木里藏族自治县",
            513423: "盐源县",
            513424: "德昌县",
            513425: "会理县",
            513426: "会东县",
            513427: "宁南县",
            513428: "普格县",
            513429: "布拖县",
            513430: "金阳县",
            513431: "昭觉县",
            513432: "喜德县",
            513433: "冕宁县",
            513434: "越西县",
            513435: "甘洛县",
            513436: "美姑县",
            513437: "雷波县"
        },
        800827: {
            511902: "巴州区",
            511921: "通江县",
            511922: "南江县",
            511923: "平昌县"
        },
        800817: {
            511302: "顺庆区",
            511303: "高坪区",
            511304: "嘉陵区",
            511321: "南部县",
            511322: "营山县",
            511323: "蓬安县",
            511324: "仪陇县",
            511325: "西充县",
            511381: "阆中市"
        },
        800813: {
            510302: "自流井区",
            510303: "贡井区",
            510304: "大安区",
            510311: "沿滩区",
            510321: "荣　县",
            510322: "富顺县"
        },
        800837: {
            513221: "汶川县",
            513222: "理　县",
            513223: "茂　县",
            513224: "松潘县",
            513225: "九寨沟县",
            513226: "金川县",
            513227: "小金县",
            513228: "黑水县",
            513229: "马尔康县",
            513230: "壤塘县",
            513231: "阿坝县",
            513232: "若尔盖县",
            513233: "红原县"
        },
        800818: {
            511702: "通川区",
            511721: "达　县",
            511722: "宣汉县",
            511723: "开江县",
            511724: "大竹县",
            511725: "渠　县",
            511781: "万源市"
        },
        800840: {
            512002: "雁江区",
            512021: "安岳县",
            512022: "乐至县",
            512081: "简阳市"
        },
        800835: {
            511802: "雨城区",
            511821: "名山县",
            511822: "荥经县",
            511823: "汉源县",
            511824: "石棉县",
            511825: "天全县",
            511826: "芦山县",
            511827: "宝兴县"
        },
        800816: {
            510703: "涪城区",
            510704: "游仙区",
            510722: "三台县",
            510723: "盐亭县",
            510724: "安　县",
            510725: "梓潼县",
            510726: "北川羌族自治县",
            510727: "平武县",
            510781: "江油市"
        },
        800833: {
            511102: "市中区",
            511111: "沙湾区",
            511112: "五通桥区",
            511113: "金口河区",
            511123: "犍为县",
            511124: "井研县",
            511126: "夹江县",
            511129: "沐川县",
            511132: "峨边彝族自治县",
            511133: "马边彝族自治县",
            511181: "峨眉山市"
        },
        800832: {
            511002: "市中区",
            511011: "东兴区",
            511024: "威远县",
            511025: "资中县",
            511028: "隆昌县"
        },
        800830: {
            510502: "江阳区",
            510503: "纳溪区",
            510504: "龙马潭区",
            510521: "泸　县",
            510522: "合江县",
            510524: "叙永县",
            510525: "古蔺县"
        },
        800825: {
            510903: "船山区",
            510904: "安居区",
            510921: "蓬溪县",
            510922: "射洪县",
            510923: "大英县"
        }
    },
    agreement: {
        name: "中国移动用户入网协议",
        values: [{
            s: 1,
            v: "中国移动通信客户服务协议"
        }, {
            s: 2,
            v: "甲方（移动通信客户）："
        }, {
            s: 2,
            v: "乙方：中国移动通信集团上海有限公司"
        }, {
            s: 1,
            v: "中国移动通信客户服务协议"
        }, {
            s: 2,
            v: "甲方（移动通信客户）："
        }, {
            s: 2,
            v: "乙方：中国移动通信集团上海有限公司"
        }, {
            s: 3,
            v: "友好提示："
        }, {
            s: 5,
            v: "甲方应具有完全的民事行为能力。无民事行为能力或限制民事行为能力的甲方入网时应经过其家长同意并签名确认。在签署本协议之前，请甲方或其代理人仔细阅读本协议各条款，如有疑问请及时咨询。"
        }, {
            s: 5,
            v: "甲方或其代理人在签署本协议后即视为完全理解并同意接受本协议的全部条款。"
        }, {
            s: 5,
            v: "甲方所需的业务、办理手续以及资费标准请参见乙方的相关业务说明。"
        }, {
            s: 5,
            v: "根据《中华人民共和国合同法》、《中华人民共和国电信条例》、《反恐怖主义法》及其他有关法律、法规的规定，甲乙双方在平等、自愿、公平、诚实、信用的基础上，就移动电话网络服务的有关事宜，达成协议如下："
        }, {
            s: 3,
            v: "一、服务内容和资费标准:"
        }, {
            s: 5,
            v: "1、乙方在现有技术条件下的移动电话网络覆盖范围内，为甲方有偿提供移动通信服务；其中，乙方在签订有自动漫游协议的国家和地区的电信运营商网络覆盖范围内为甲方提供国际漫游服务。"
        }, {
            s: 5,
            v: "2、甲方可自主选择乙方提供的各项移动通信业务。"
        }, {
            s: 5,
            v: "3、乙方根据市场情况和用户需求制定电信业务资费方案，并按照资费标准向甲方收取相关费用，包括套餐及固定费、套餐外语音通信费、套餐外上网费、套餐外短彩信费等以及甲方申请或使用的其他业务的费用。计费周期从用户结账日0时起至到下一个结账日前一日的24时（由于网络设备产生话单及相关处理会有时延，可能发生上一周期部分话费计入下一周期话费中收取的情况）。对于合户及他人/单位统付情况，当账户归属人或主号码调整结账日后，账户下所有用户、副号码的结账期需要同时调整，用户因结账日调整导致的业务优惠周期和下周期业务生效、失效时间也将相应调整。"
        }, {
            s: 5,
            v: "4、如遇政府主管部门对资费等相关内容的政策发生变化，乙方将根据相关要求，对原资费方案行相应调整。调整后方案的具体执行时间以乙方公 示为准。"
        }, {
            s: 3,
            v: "二、乙方的义务"
        }, {
            s: 5,
            v: "1、乙方为甲方提供的移动通信服务应当达到国家的相关标准。"
        }, {
            s: 5,
            v: "2、乙方通过营业厅、网站及短信等方式向甲方公布并提示服务项目、服务时限、服务范围及资费标准等内容。"
        }, {
            s: 5,
            v: "3、乙方应向甲方提供方便的业务办理、业务咨询和话费信息查询渠道，包括但不限于营业厅、服务热线、服务网站、短信等。"
        }, {
            s: 5,
            v: "4、乙方有义务采取公布监督电话等形式受理甲方投诉，并在接到投诉之时起48小时内回复甲方。"
        }, {
            s: 5,
            v: "5、乙方对移动电话原始话费数据及信息服务计费原始数据保留期限为6个月(系统产生用户话单当月起后6个月，不含当月)，对用户在异议话单产生后6个月内向乙方提出异议的话单，应保存至异议解决为止。若甲方对乙方收取的话费存有异议，乙方有责任进行调查、解释，并告知甲方核实 处理的结果。"
        }, {
            s: 5,
            v: "6、乙方应向甲方提供免费的电子账单服务，并有义务对账单进行解释。"
        }, {
            s: 5,
            v: "7、乙方不得侵害甲方的通信自由和通信秘密，对甲方的客户资料负有保密义务。但根据法律法规规定，乙方应配合公安机关、人民检察院、国家 安全机关及依据法律法规有权进行调查的其他部门的工作要求。"
        }, {
            s: 5,
            v: "8、甲方向乙方提供的用户信息资料，乙方承诺用于移动通信服务的全过程，乙方应采取保密措施，不得泄露。但法律、法规和政府规章另有规定 的除外。"
        }, {
            s: 5,
            v: "9、乙方应严格按照《全国人民代表大会常务委员会关于加强网络信息保护的决定》、《电信和互联网用户个人信息保护规定》（工业和信息化部令第24号）、《电话用户真实身份信息登记规定》（工业和信息化部令第25号）等法律法规的相关要求，对其在提供服务过程中收集、使用的甲方 用户个人信息履行保护义务。"
        }, {
            s: 5,
            v: "10、乙方应免费向甲方提供通话所在地（仅限国内）火警119、匪警110、医疗急救120等公益性电话接入服务。"
        }, {
            s: 5,
            v: "11、在甲方欠费的情况下，如甲方在约定的期限内交清费用并申请开机的，乙方应在收到甲方费用时起24个小时内为甲方恢复移动通信服务。"
        }, {
            s: 5,
            v: "12、乙方对甲方暂停移动通信服务时(以下简称停机)，对使用“先使用，后付费”交费方式的甲方应提前通知；对使用“先付费，后使用” 交费方式的甲方应进行余额提示，通知方式包括但不限于短信、电话或信函。"
        }, {
            s: 5,
            v: "13、乙方检修线路、设备搬迁、工程割接、网络及软件升级等可预见的原因可能影响甲方使用的，应提前72小时通知甲方，通知方式包括但不限于 短信、媒体公告。"
        }, {
            s: 5,
            v: "14、甲方向乙方申告移动电话通信障碍（指交换设备或传输线路原因造成通信中断等现象，不包括网络覆盖和终端设备故障），乙方应自接到申告 之时起48小时修复或者调通。"
        }, {
            s: 5,
            v: "15、乙方应在承诺时限内为甲方开通其申请的服务(双方约定超出此时限的除外)，乙方未及时开通的，应减免甲方自申请之日至服务开通期间的该 项服务的月功能费。 "
        }, {
            s: 3,
            v: "三、甲方的义务"
        }, {
            s: 5,
            v: "1、甲方使用乙方客户号码并接受乙方提供的电信服务，需办理入网登记手续。甲方办理入网手续时，需按照《电话用户真实身份信息登记规定》（工业和信息化部令第25号），甲方亲自到场，向乙方提供真实有效的身份证件原件，并现场拍摄及留存照片办理。网络营销渠道需完成在线视频实人认证。甲方在中国移动范围内办理使用的移动电话卡达到5张的，不得办理新卡。无民事行为能力或限制民事行为能力的甲方入网时其家长应提供相应的担保，留存双方信息。乙方如发现甲方所填写的内容与实际情况不符，可以通知甲方立即进行修改。按照国家《电话“黑卡”治理专项行动工作方案》（工信部联保〔2014〕570号）要求，单位用户办理移动电话入网手续时，须向乙方提供与每一个移动电话卡一一对应的实际使用人的身份证件进行核验并登记身份信息。对于行业卡，甲方需如实登记使用人信息，对难以与实际使用人一一对应的行业卡产品（无语音功能），甲方需要登记责任单位和责任人信息，并且不得进行二次销售；甲方承诺所提供的实际使用人、责任人的身份信息完全属实和有效，并提供实 际使用人以及责任人的姓名、证件类别和号码等信息并加盖公章。"
        }, {
            s: 5,
            v: "2、甲方使用“先使用，后付费”交费方式的，在入网时需提供的有效证件为：个人客户提供有效身份证件原件，如甲方系本市未成年人，无法提供本市有效身份证原件时，可用本市户口簿原件代替；单位客户有效证件包括注册地为本市的营业执照副本原件及复印件、单位介绍信（具有单位 公章证明）及经办人有效身份证件原件及复印件。如甲方为非本市户口入网的，可选择押金方式或信用卡担保入网，并适用以下条款：甲方支付________元押金，申请以押金入网方式入网。甲方交纳的押金不能作为预存话费，押金在取消押金入网方式时退还甲方。甲方如需申请国际漫游业务需话费余额大于等于200元。甲方如需办理协议类营销活动、家庭统付活动需根据具体活动要求另行办理担保手续。甲方可申请以信用卡担保方式入网。以信用卡担保入网的，需另行签订信用卡代扣业务客户受理协议书。"
        }, {
            s: 5,
            v: "3、甲方使用“先使用，后付费”交费方式的，乙方将根据甲方信用评级和申请的业务类型授予甲方一定可透支通信额度，乙方将通过业务确认单 、短信或网营等方式通知甲方通信透支额度的变更情况。"
        }, {
            s: 5,
            v: "4、甲方使用“先付费，后使用”交费方式的，在入网时需提供的有效证件为：个人客户提供有效身份证件原件，如甲方系未成年人，无法提供本市有效身份证原件时，可用本市户口簿原件代替；单位客户有效证件包括营业执照副本原件及复印件、单位介绍信（具有单位公章证明）及经办人 有效身份证件原件及复印件。"
        }, {
            s: 5,
            v: "5、若甲方选择使用“优选号码”入网的，需要预存一定额度话费并承诺最低消费，具体使用规则按照优选号码业务规则以及双方约定执行。"
        }, {
            s: 5,
            v: "6、甲方应按照与乙方约定的时间、方式，及时、足额地向乙方支付移动通信费用。过期未交的款项，乙方通过短信等方式提醒甲方付费。甲方超过最后交费日未交足费用（以下称“欠费”），乙方有权采取呼出限制或者停机等措施，并可以按照所欠费用自最后交费日次日起每日加收3‰（千分之三）的违约金。欠费停机满60日，甲方仍未交清欠费、违约金、赔偿金等费用，乙方有权终止提供电信服务并解除协议，并可通过信函、公告、委托第三方等方式追交上述欠费、违约金、赔偿金等全部费用。在欠费情况下甲方不能办理除交费、停机以外的其他业务。"
        }, {
            s: 5,
            v: "7、甲方可以自行办理停机保号业务，停机期间收取停机保号费。"
        }, {
            s: 5,
            v: "8、若甲方对乙方收取的移动通信费及代信息服务商收取的信息费存有异议，应在异议话费发生后五个月内向乙方提出（系统产生用户话单当月起 后5个月，不含当月）。 "
        }, {
            s: 5,
            v: "9、甲方应遵守短信、彩信、电话、数据等通信方面的有关规定，不得利用乙方提供的服务从事违法犯罪活动或损害社会公共利益的活动，如有下列行为或者其他违法使用、违规外呼、呼叫频次异常、超约定用途使用、转租转售、被公安机关通报以及客户就上述问题投诉较多等情况的，乙方 可以暂停甲方的移动通信服务，直至终止服务。"
        }, {
            s: 5,
            v: "（1）以短信、彩信等方式发送违法类信息，或未经接收客户同意大量发送商业广告等信息或引起客户举报的。"
        }, {
            s: 5,
            v: "（2）利用“响一声”电话，呼叫但不形成通话，诱导他人回拨的；或者利用虚假主叫等各种机制，进行违法类或商业广告类活动，或者引起客户 举报，或者电信运营商收到国家有关部门发文要求予以处理的。"
        }, {
            s: 5,
            v: "（3）提供手机淫秽色情网站服务，违反国家相关法律法规或引起客户举报的。"
        }, {
            s: 5,
            v: "（4）传播手机恶意软件，违反国家相关法律法规或引起客户举报的。"
        }, {
            s: 5,
            v: "（5）传播其它不良信息违反国家相关法律法规并引起客户举报的。 10、甲方因SIM卡丢失或损坏等原因需办理补卡手续或更新手续时，本人应凭有效身份证件原件到乙方营业网点办理，乙方可以收取相应费用。"
        }, {
            s: 5,
            v: "11、甲方应使用取得国家入网许可并具有进网许可标志的终端设备，该终端设备应具有支持其所选服务的相应功能。"
        }, {
            s: 5,
            v: "12、依据《征信业管理条例》、《上海市个人信用征信管理试行办法》等法律法规，乙方已加入上海市政府个人信用联合征信体系，甲方入网后 ，同意遵守该体系有关规定。"
        }, {
            s: 5,
            v: "13、甲方要求终止提供移动通信服务时，应在结清所有费用后至乙方营业厅办理退网手续。"
        }, {
            s: 5,
            v: "14、甲方应遵守法律法规的规定使用乙方提供的服务。"
        }, {
            s: 3,
            v: "四、特殊情况的责任承担 "
        }, {
            s: 5,
            v: "1、在下列情况下，乙方有权暂停或限制甲方的移动通信服务，由此给甲方造成的损失，乙方不承担责任： "
        }, {
            s: 5,
            v: "（1）甲方银行账户被查封、冻结或余额不足等非乙方原因造成乙方结算时划扣不成功的； "
        }, {
            s: 5,
            v: "（2）甲方预付费使用完毕而未及时补交款项（包括预付费账户余额不足以划扣下一笔预付费用）的； "
        }, {
            s: 5,
            v: "（3）甲方使用“先使用，后付费”的费用结算方式时，移动电话费用超过可透支额度的； "
        }, {
            s: 5,
            v: "（4）甲方突然出现超过自己此前三个月平均通信费用5倍以上通信费用（以乙方即时收到的相关通信费用信息为准），并经乙方及时通过电话、短 信等方式告知的； "
        }, {
            s: 5,
            v: "（5）甲方发送违法类信息，或未经接收客户同意大量发送骚扰信息或拨打骚扰电话等引起客户投诉或举报。 "
        }, {
            s: 5,
            v: "2、甲方名下的移动电话号码逾期未交清费用的，乙方有权拒绝以甲方名义提出的其他移动通信业务申请，交费、话费查询除外。 "
        }, {
            s: 5,
            v: "3、甲方入网后，应妥善保管原始票据等有关资料，如押金票据等，发生遗失，乙方不承担责任。 "
        }, {
            s: 5,
            v: "4、甲方入网后即获取客户初始服务密码，甲方应立即修改初始服务密码并妥善保管。服务密码是业务办理的凭证。为方便办理业务，乙方也可根据甲方申请以短信等方式提供随机服务密码，该密码可作为办理业务的临时凭证。凡使用服务密码或随机服务密码办理业务的行为均被视为甲方或甲方授权的行为。因密码保管不善造成的结果由甲方自行承担，但乙方有义务协助甲方或公安机关调查相关情况。 "
        }, {
            s: 5,
            v: "5、因甲方保管不善等原因导致其移动电话被他人非法使用，甲方应及时办理停机手续，并向公安部门报案。乙方应在技术上协助公安部门进行调 查，但乙方不承担由此对甲方所造成的不良后果。"
        }, {
            s: 5,
            v: "6、如甲方入网登记资料发生变更，应及时通知乙方。因甲方提供的客户资料不详、不实或变更后未通知乙方等原因所造成的后果由甲方自行承担 "
        }, {
            s: 5,
            v: "7、甲方应根据自身能力对通话费用进行控制，若出现异常的电信费用时（即超过此前三个月平均通信费用5倍以上通信费用的），乙方应尽可能迅速告知甲方，如告知后仍未得到甲方确认的，乙方可以采取措施，暂停部分或全部移动通信网络服务，直至甲方交清已发生费用。 "
        }, {
            s: 5,
            v: "8、甲方使用“先付费，后使用”交费方式的，在号码有效期限内享有号码的使用权。如有效期到期或者账户余额不足，及时充值即可延长有效期；如未及时充值，号码进入保留期，保留期内如甲方不及时充值则不能进行通信，如甲方及时充值保留期自动结束，通信恢复。如果保留期届满 ，乙方有权收回号码重新启用。 "
        }, {
            s: 5,
            v: "9、若甲方对乙方收取的话费有异议，可以向乙方投诉，乙方有责任负责调查或解释。如乙方确有各类业务费用误差的（包括移动信息服务费用 ），乙方承诺将已错收的话费减去应收话费的正差额双倍返还给用户。"
        }, {
            s: 5,
            v: "10、因不可抗力而使本协议部分或全部不能履行，双方互不承担违约责任。 "
        }, {
            s: 5,
            v: "11、一方违约给对方造成损失的，应当依法承担赔偿责任，损失赔偿额应当相当于因违约所造成的损失。"
        }, {
            s: 3,
            v: "五、协议的变更、转让与终止 "
        }, {
            s: 5,
            v: "1、甲方办理各类业务所签署的表单、乙方以公告等书面形式公开做出的服务承诺均为本协议的补充协议，与本协议冲突部分以补充协议为准，补 充协议中未约定部分以本协议为准。"
        }, {
            s: 5,
            v: "2、乙方承诺资费方案有效期为一年（双方另有协议等约定的除外），甲方可在有效期内选择其他资费方案。有效期届满后乙方变更资费方案的，乙方应在有效期届满前两个月通知甲方，甲方可另选其他资费方案，不选择则转入双方约定的其他资费方案。如资费方案不变更的，有效期则自 动顺延一年，以此类推。"
        }, {
            s: 5,
            v: "3、甲方将协议项下的权利义务转让给第三人（过户）后，由第三人与乙方重新签订移动通信服务协议，转受让双方应持双方有效身份证件原件到乙方营业网点付清已出账的通信费用后办理变更手续，本协议自动终止。因甲方私自转让而造成的欠费、停机等后果，由甲方自行承担。在办理变更手续之前，因使用该号码导致的交费义务及相应结果仍由甲方承担。但因漫游等费用结算滞后的原因，一旦出现过户前发生的、但过户日前尚未 结算的费用将由第三人承担。 "
        }, {
            s: 5,
            v: "4、因技术进步，乙方为提升服务质量对移动电话网络进行整体换代升级而导致移动通信服务无法继续履行的，乙方应至少提前90日告知甲方，并 提供合理的解决方案。"
        }, {
            s: 5,
            v: "5、下列情况下乙方有权解除协议，收回号码，终止提供服务。由此给甲方造成的损失，乙方不承担责任，并有权向甲方追讨欠费："
        }, {
            s: 5,
            v: "（1） 甲方（包括代理人）提供的有效证件或资料虚假不实；"
        }, {
            s: 5,
            v: "（2）移动电话被用于违法犯罪活动或不当用途（有损乙方或相关第三方利益）；"
        }, {
            s: 5,
            v: "（3） 利用乙方提供的服务从事违背公序良俗的活动；"
        }, {
            s: 5,
            v: "（4） 乙方收到国家有关部门发文要求停止为甲方提供通信服务；"
        }, {
            s: 5,
            v: "（5）甲方使用“先使用，后付费”交费方式的，逾期60日仍未交清所有欠费、违约金、赔偿金等费用；"
        }, {
            s: 5,
            v: "（6） 甲方使用“先付费，后使用”交费方式的，号码保留期届满。"
        }, {
            s: 5,
            v: "6、资费方案有效期内，甲方可以持入网登记时的有效身份证件到乙方营业网点要求终止提供服务（以下简称销户）。除双方另有约定外，乙方不应拒绝甲方销户，甲方应在销户前结清所有费用。甲方申请销户90天后，乙方可以重新启用甲方原号码。"
        }, {
            s: 5,
            v: "7、甲方在办理销号时若未参与赠送等营销活动，已消费过且至少曾交费过一次时，可预约或次月至移动营业厅将余额一次性地转入另一移动号码的账户；若甲方参与过赠送等营销活动情况下，销号时预存的活动款按营销活动协议约定处理；乙方赠送甲方的话费均不可进行余额转移。甲方办理话费余额转移业务需出示有效身份证件原件，且甲方一个自然年间只能办理自身身份证号码对应的三个手机号码的余额转移业务。"
        }, {
            s: 5,
            v: "8、在法定终止条件或约定终止条件具备时，本协议终止。乙方继续保留向甲方追交所欠费用的权利，并有权收回号码重新启用。"
        }, {
            s: 3,
            v: "六、其他约定 "
        }, {
            s: 5,
            v: "1、信息服务提供商通过乙方的移动网络平台提供的增值电信应用服务，甲方可自愿订购或退订。"
        }, {
            s: 5,
            v: "2、乙方可以通过短信、邮件、外呼等方式，向甲方告知业务提醒和推广服务等关怀类信息。"
        }, {
            s: 5,
            v: "3、乙方根据甲方的使用情况为甲方提供热线优先接入、授信服务、国际漫游等服务。"
        }, {
            s: 5,
            v: "4、甲方使用信息服务提供商提供的增值电信应用服务的资费标准由信息服务提供商公布。若甲方对收取的服务费用有异议，可在乙方协助下与信 息服务提供商协商解决。"
        }, {
            s: 5,
            v: "5、甲方个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别甲方身份或者反映甲方活动情况的各种信息。乙方收集、使用 甲方个人信息，应当遵循合法、正当、必要的原则。"
        }, {
            s: 5,
            v: "6、甲方理解并同意，乙方及其关联公司可以通过业务受理系统登记、纸质返档，通过网络接收、读取并记录等方式，以提供电信服务为目的，在业务活动中收集、使用甲方提供的和甲方使用服务过程中形成的个人信息。乙方有权依法对包含甲方在内的整体用户数据进行分析并加以利用。未经甲方同意，乙方不向除乙方关联公司外的第三方提供甲方个人信息。甲方可以通过营业厅或乙方指定的其他渠道，对其个人信息进行查询、更正 。 "
        }, {
            s: 5,
            v: "7、乙方关联公司是指乙方现在或将来控制、受控制或与其处于共同控制下的任何公司、机构以及上述公司或机构的合法继承人。其中“控制”是指直接或间接地拥有影响所提及公司管理的能力，无论是通过所有权、有投票权的股份、合同或其他被人民法院认定的方式。"
        }, {
            s: 5,
            v: "8、乙方重新启用并销售部分其他客户曾使用过的移动电话号码，原使用该号码的客户将该号码留作第三方服务行业的联系电话且在注销前未予变更时，该号码可能会收到发给前一个客户的通知信息。原使用该号码的客户将该号码用作第三方业务的认证捆绑电话且在注销前未解除绑定关系时，客户可能因第三方业务提供方的限制而无法使用该号码进行对应第三方业务的认证捆绑。"
        }, {
            s: 5,
            v: "9、本协议项下发生的争议，双方可协商解决，协商不成的，双方可向电信管理部门申诉或向消费者协会等有关部门投诉，或通过法律途径解决。"
        }, {
            s: 5,
            v: "10、本协议一式两份，双方各保留一份，具有同等法律效力。本协议经加盖乙方业务专用章、营业厅和营业员专用章，甲方客户盖章或签字后生效 。对本协议未尽事宜，双方协商解决。"
        }, {
            s: 5,
            v: "11、双方的联系方式位于签章处，一方如有变更，应及时通知另一方，未及时通知的，一方按照原有地址发送文件的（包括但不限于解除合同的通 知）发出后即视为送达。 甲方 ：甲方家长或代理人：（签名或单位盖章） 客户地址（户籍地址）： 账户地址： 电子邮箱地址： 甲方移动号码： 乙方：中国移动通信集团上海有限公司（业务专用章） 营业厅： 经办人：签署日期：实名制信息安全责任 "
        }, {
            s: 3,
            v: "告知书"
        }, {
            s: 5,
            v: "尊敬的客户："
        }, {
            s: 5,
            v: "感谢您选择中国移动！当您在办理移动号码入网时，请您确保这是您本人的自愿行为，且为您自己使用而办理，不是在他人要求或指使下办理，不是办理后给他人使用。"
        }, {
            s: 5,
            v: "同时特别提醒您：您应持本人身份证原件办理号码入网，您对本号码拥有使用权。根据国家公安部等五部委《关于依法严厉打击惩戒治理非法买卖电话卡银行卡违法犯罪活动的通告》，入网号码必须实名登记，且不得将号卡租借、贩卖或以任何方式提供给他人。如您的号码被他人利用发生涉恐、诈骗、骚扰等非法违规行为，您将承担本号码项下产生的所有责任，请您确保规范使用您的号码。"
        }, {
            s: 5,
            v: "中国移动通信集团销售分公司"
        }]
    },
    notification: {
        name: "实名制信息安全责任告知书",
        values: [{
            s: 3,
            v: "实名制信息安全责任告知书"
        }, {
            s: 5,
            v: "尊敬的客户："
        }, {
            s: 5,
            v: "感谢您选择中国移动！当您在办理移动号码入网时，请您确保这是您本人的自愿行为，且为您自己使用而办理，不是在他人要求或指使下办理，不是办理后给他人使用。"
        }, {
            s: 5,
            v: "同时特别提醒您：您应持本人身份证原件办理号码入网，您对本号码拥有使用权。根据国家公安部等五部委《关于依法严厉打击惩戒治理非法买卖电话卡银行卡违法犯罪活动的通告》，入网号码必须实名登记，且不得将号卡租借、贩卖或以任何方式提供给他人。如您的号码被他人利用发生涉恐、诈骗、骚扰等非法违规行为，您将承担本号码项下产生的所有责任，请您确保规范使用您的号码。"
        }, {
            s: 5,
            v: "中国移动通信集团销售分公司 "
        }]
    },
    order: {
        name: "订购说明",
        values: [{
            s: 3,
            v: "1、中国移动·动感地带潮玩卡联名版（以下简称“动感地带潮玩卡联名版）59元档内包含10GB国内通用流量、80分钟全国语音、30GB专属流量月包、全国亲情网3个亲情号码（含主号4人）国内畅聊业务和视频彩铃业务。"
        }, {
            s: 3,
            v: "2、新入网首月套餐资费按日收取，套内资源按天折算；次月起套餐费全额收取，套内资源全量提供。通过本页面办理，激活后首月返还60元话费，话费于激活后24小时内到账 。"
        }, {
            s: 3,
            v: "3、连续使用动感地带潮玩卡联名版套餐满12个月后，套餐内包含的通用流量增加5GB/月，使用满24个月后再增加5GB/月。即连续使用满12个月后套餐内通用流量增加至15GB/月，使用满24个月后增加至20GB/月。中途变更套餐再转回潮玩卡联名版套餐时，需重新计算连续使用时间，流量恢复为10GB/月。通过本页面办理，可获得①激活后首年每月获赠10GB通用流量，首月激活后48小时内到账，流量以联名卡专属流量-10GB（12个月）产品订购形式赠送，产品0元/月，按月自动续订，有效期12个月，到期自动失效，赠送流量不可结转、转赠、共享。中途离网或变更套餐赠送资格自动失效。②12个月腾讯视频会员，领取资格在号卡激活后12个月内有效，需手动领取，每月最多可领取一次。中途离网或变更套餐后领取资格自动失效。腾讯视频会员领取路径：①关注 “中国移动权益超市”微信公众号--领取权益--权益领取中心；② 中国移动APP--我的---我的权益。"
        }, {
            s: 3,
            v: "4、套餐内通用流量不可转赠，可共享、结转至次月；专属流量、区域流量不可结转、不可转赠、不可共享。每月总流量（含通用流量、专属流量）使用上限以各省规则为准，次月初自动恢复。"
        }, {
            s: 3,
            v: "5、动感地带潮玩卡套餐外通用流量5元1GB，套餐外语音资费0.1元/分钟，免费接听；国内点对点短信0.1元/条，包含来电显示。"
        }, {
            s: 3,
            v: "6、动感地带潮玩卡套餐内专属流量月包无需领取，每月自动发放。专属流量范围包括中国移动精品APP及阿里系、百度系、抖音系、网易游戏、腾讯系、芒果TV、快手、喜马拉雅、新浪微博、VIVO等超过100款第三方热门APP。使用以上APP时，优先使用专属流量，当专属流量使用完毕后，再使用套内通用流量。具体支持专属流量的APP清单随中国移动业务合作情况或将发生变动，以订购页面具体内容为准。"
        }, {
            s: 3,
            v: "7、建议使用定向专属流量包前将APP升级至最新版本，请在WIFI功能关闭下使用专属流量功能，避免WIFI和移动网络频繁切换导专属流量服务启动失败。客户端不包含在“专属流量”内的适用范围，特别说明如下："
        }, {
            s: 5,
            v: "① 客户端启动、登录；客户端内的插播广告（图片、文字及视频）、内嵌H5页面、弹幕，第三方的广告，直播或主播类视频，K歌功能，语音及视频聊天，在线观看和下载缓存的第三方视频等。"
        }, {
            s: 5,
            v: "② 手机号码处于国际或中国港澳台地区漫游状态下产生的流量。"
        }, {
            s: 5,
            v: "③ 利用手机设置代理服务器或VPN等方式，访问APP所产生的流量。"
        }, {
            s: 5,
            v: "④ 用无线上网卡、平板电脑、CPE、MIFI等非手机设备使用产生的流量。"
        }, {
            s: 5,
            v: "⑤ 使用CMWAP接入点方式，访问视频APP所产生的流量。"
        }, {
            s: 5,
            v: "⑥ 当动感地带潮玩卡号码作为热点使用时，网络不稳定可能会出现专属流量和通用流量交错使用的情况。"
        }, {
            s: 3,
            v: "8、激活号卡后，可在配送人员处进入指定充值页面，参加充值50元送50元活动，50元赠费从次月起分5个月到账，每月到账10元话费；返还话费预计每月10号前到账；每位用户只能参加1次充值活动，不能叠加享受其他充值优惠活动。"
        }, {
            s: 3,
            v: "9、上述资费适用范围不含中国港澳台地区。"
        }, {
            s: 3,
            v: "10、同一身份证在30天内能够购买一个号码，号卡仅寄送本省，需本人持身份证当面激活。因国家政策原因部分地址可能无法配送。号卡受理结果以系统实际返回结果为准。"
        }, {
            s: 3,
            v: "11、为了保障通信秩序，对于申请人信息、年龄、IP、联系方式、联系地址相近或异常等疑似重复购买或异常订购的订单，可能不予发货。"
        }, {
            s: 3,
            v: "12、根据国家实名制相关规定，请保证所购号卡为本人使用，不得转售、倒卖号卡。"
        }, {
            s: 3,
            v: "13、为降低您接收境外诈骗短信风险，按上级主管部门要求，中国移动为您提供按需开通国际及中国港澳台短信接收、电话接听功能的服务。若您需要开通“国际及港澳台短信接收”或国际及港澳台来话接听”功能，可分别发送“KTGJDX”或“KTGJLH”到10086办理，也可通过10086热线、中国移动APP等渠道开通相关功能。"
        }, {
            s: 3,
            v: "14、广东为灵活账期省份。"
        }, {
            s: 3,
            v: "15、因权益方内部调整，我们可能会变更、终止与权益方的合作，您可能无法继续通过中国移动接受该权益方提供产品。届时您已订购的连续包月产品可通过后台帮您进行退订或退费，同时公司将会及时公告或告知。如因此导致您无法使用或购买产品的，请您理解我们无须对此承担责任。可能给您带来的不便，敬请谅解。"
        }, {
            s: 3,
            v: "16、中国移动可能会根据本服务的整体规划，对本服务相关权益细则、收费标准、权益发放方式等进行修改和变更，前述修改、变更的内容，中国移动将在相应服务页面公示或以其他合理方式进行告知，并在告知后生效。当您采用接受服务的形式（包括但不限于支付行为、未退定继续使用本服务等），即表明您已经接受本服务的全部修改，以及上述服务细则的修改和变更。"
        }, {
            s: 3,
            v: "17、其它未尽事宜，详询10086。"
        }]
    },
    desc: {
        name: "免流详情",
        values: [{
            s: 1,
            v: "专属流量APP清单"
        }, {
            s: 3,
            v: "哔哩哔哩、快手（含快手极速版）、芒果TV、新浪微博、网易云音乐、喜马拉雅"
        }, {
            s: 1,
            v: "腾讯系："
        }, {
            s: 3,
            v: "手机QQ、腾讯视频、和平精英、QQ音乐、酷狗音乐、酷我音乐、手游加速器"
        }, {
            s: 1,
            v: "阿里系："
        }, {
            s: 3,
            v: "优酷视频、手机淘宝、点淘、手机天猫、支付宝、钉钉、口碑、闲鱼、聚划算、蚂蚁财富"
        }, {
            s: 1,
            v: "百度系："
        }, {
            s: 3,
            v: "百度、爱奇艺、百度地图、手机助手、百度输入法、好看视频、百度贴吧、百度文库、百度翻译、百度百科、秒懂百科、百度知道、百度网盘、手机YY、爱奇艺随刻、爱奇艺泡泡、爱奇艺奇巴布、爱奇艺知识、爱奇艺漫画、奇秀、电视果"
        }, {
            s: 1,
            v: "抖音系："
        }, {
            s: 3,
            v: "抖音、抖音极速版、今日头条、西瓜视频、 抖音火山版、皮皮虾、懂车帝、FaceU激萌、轻颜相机、飞书、飞聊、多闪、图虫、gogokid、时光相册、半次元、海豚股票、海豚财富、好好学习"
        }, {
            s: 1,
            v: "网易游戏："
        }, {
            s: 3,
            v: "一梦江湖、大话西游、决战平安京、梦幻西游、倩女幽魂、阴阳师、网易大神、大唐无双、第五人格、非人学园、孤岛先锋、光明大陆、花与剑、荒野行动、流星群侠传、率土之滨、梦幻西游3D、秘境对决、明日之后、权力与纷争、神都夜行录、实况足球、坦克世界闪击战、天下、永远的七日之都、战国志、镇魔曲、三国如龙传、量子特攻"
        }, {
            s: 1,
            v: "VIVO系："
        }, {
            s: 3,
            v: "vivo应用商店、vivo游戏中心、i音乐、i主题、vivo官网、vivo商城"
        }, {
            s: 1,
            v: "中国移动精品应用："
        }, {
            s: 3,
            v: "咪咕视频、咪咕音乐、咪咕阅读、咪咕快游、MM应用商城、中国移动云盘"
        }, {
            s: 1,
            v: "专属流量适用范围："
        }, {
            s: 1,
            v: "建议使用专属流量包前将APP升级至最新版本，请在WIFI功能关闭下使用专属流量功能，避免WIFI和移动网络频繁切换导致专属流量服务启动失败。客户端不包含在“专属流量”内的适用范围，特别说明如下："
        }, {
            s: 3,
            v: "① 客户端启动、登录；客户端内的插播广告（图片、文字及视频）、内嵌H5页面、弹幕，第三方的广告，直播或主播类视频，K歌功能，语音及视频聊天，在线观看和下载缓存的第三方视频等。"
        }, {
            s: 3,
            v: "②手机号码处于国际或港澳台地区漫游状态下产生的流量。"
        }, {
            s: 3,
            v: "③利用手机设置代理服务器或VPN等方式，访问APP所产生的流量。"
        }, {
            s: 3,
            v: "④用无线上网卡、平板电脑、CPE、MIFI等非手机设备使用产生的流量。"
        }, {
            s: 3,
            v: "⑤使用CMWAP接入点方式，访问视频APP所产生的流量。"
        }, {
            s: 3,
            v: "⑥当潮玩卡号码作为热点使用时，网络不稳定可能会出现专属流量和通用流量交错使用的情况。"
        }]
    },
    activity: {
        name: "活动规则",
        values: [{
            s: 2,
            v: "（一）积分及购买机会获取说明："
        }, {
            s: 3,
            v: "1.办理移动潮玩卡后可在一定时间内获得积分及购买机会，具体内容如下："
        }, {
            s: 99,
            v: "/activity/00.png"
        }, {
            s: 3,
            v: "2.请注意，超过6个月后将无法再次获得积分及购买机会。"
        }, {
            s: 2,
            v: "（二）申请移动潮玩卡说明："
        }, {
            s: 3,
            v: "1.每个手机号只可申请一次移动潮玩卡，无法多次申请；"
        }, {
            s: 3,
            v: "2.申请时需填写签收人电话的验证码，无验证码无法申请，请确保是本人申请；"
        }, {
            s: 3,
            v: "3.申请移动潮玩卡需满足16周岁以上，16周岁以下无法申请及兑换道具；"
        }, {
            s: 3,
            v: "4.申请成功后，预留的签收人电话将获得一次购买机会；"
        }, {
            s: 3,
            v: "5.申请成功后，潮玩卡将根据您所在的地区1-3个工作日内送达，请注意签收；"
        }, {
            s: 3,
            v: "6.请提前准备预留的身份证，收到潮玩卡后在快递员处进行验证激活操作；"
        }, {
            s: 3,
            v: "7.在快递员处参与充值活动，即可享受首充50元送50元的福利（50元分5个月返还，每月返还10元）；"
        }, {
            s: 2,
            v: "（三）积分及购买机会使用说明："
        }, {
            s: 3,
            v: "1.  兑换道具需消耗对应的积分及1次购买机会，兑换成功后不可退换；"
        }, {
            s: 3,
            v: "2.  申领办理和激活移动潮玩都将获得一次购买机会，号卡激活后每月保持健康在网状态也将获得一次购买机会"
        }, {
            s: 3,
            v: "3.  有购买机会时，若积分不足，可支付差额补足积分后再兑换（仅限当次兑换），积分比例为1:10，即1元等于10积分；获赠的积分不可退；有购买机会时补差额购买的积分在未经使用的情况下，可联系客服进行退款"
        }, {
            s: 3,
            v: "4.  注销移动潮玩卡时，将清空所有获赠积分及购买机会；"
        }, {
            s: 3,
            v: "5.  积分及购买机会有效期为60天，自号卡激活之日起开始计算，过期的积分及购买机会将自动清除，请及时使用；"
        }, {
            s: 2,
            v: "（四）兑换道具注意事项："
        }, {
            s: 3,
            v: "1.  兑换道具前需绑定游戏账号，请仔细核对账号是否正确，以免造成不必要的损失；"
        }, {
            s: 3,
            v: "2.  游戏内邮箱最大可存放60封邮件，兑换道具前请预留足够的空间，以免发放失败；"
        }, {
            s: 3,
            v: "3.  和平精英道具为虚拟道具，兑换后将发送至绑定账号的邮箱内，无实物配送，道具发放存在一定的延迟，请耐心等待，若超过24小时仍未收到邮件，请联系客服处理。"
        }, {
            s: 2,
            v: "（五）客服说明："
        }, {
            s: 3,
            v: "1.若遇到问题，可点击菜单栏中的“客服咨询”进行在线咨询；"
        }, {
            s: 3,
            v: "2.或关注微信公众号“乐玩INJOY”进行在线客服反馈；"
        }]
    }
}).value;
var Em = (e => (e[e.Fail = 0] = "Fail",
e[e.Success = 0] = "Success",
e[e.TokenExpire = -2] = "TokenExpire",
e))(Em || {});
class km {
    static VerifyMobile(e) {
        return /^1[3-9]\d{9}$/.test(e)
    }
    static VerifyCode(e, t=6) {
        return new RegExp(`^\\d{${t}}$`).test(e)
    }
    static ValidateIDCard(e) {
        return /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[\dXx]$/.test(e)
    }
    static ValidateName(e) {
        return /[\u4e00-\u9fa5]{2,}/.test(e)
    }
    static NumberIninterval(e, t, n) {
        return e >= t && e <= n
    }
    static TimeIninterval(e, t) {
        const n = Date.now();
        return new Date(e).getTime() <= n && new Date(t).getTime() >= n
    }
    static GetTimeDiv(e, t) {
        return Math.floor((new Date(e).getTime() - new Date(t).getTime()) / 1e3)
    }
    static SecondsToTime(e) {
        let t = Math.floor(e / 3600)
          , n = Math.floor(e % 3600 / 60);
        const o = e % 60;
        let r = "";
        return t > 0 && (r += t.toString().padStart(2, "0") + ":"),
        n > 0 && (r += n.toString().padStart(2, "0") + ":"),
        r += o.toString().padStart(2, "0"),
        r
    }
    static ConvertMillisToYM(e=Date.now()) {
        const t = new Date(e);
        let n = t.getFullYear()
          , o = t.getMonth() + 1;
        return n + "" + (o < 10 ? "0" + o : o)
    }
    static Wait(e) {
        return new Promise((t => {
            setTimeout(t, 1e3 * e)
        }
        ))
    }
    static MaskPhoneNumber(e) {
        return e.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
    }
    static DownloadImage(e) {
        let t = document.createElement("a");
        t.href = e,
        t.download = `${e}.png`,
        document.body.appendChild(t),
        t.click(),
        document.body.removeChild(t)
    }
    static GetURLParameterValue(e) {
        if (window.URLSearchParams) {
            return new URLSearchParams(window.location.search).get(e)
        }
        {
            let t = window.location.search.substring(1).split("&");
            for (let n = 0; n < t.length; n++) {
                let o = t[n].split("=");
                if (decodeURIComponent(o[0]) === e)
                    return decodeURIComponent(o[1] || "")
            }
            return null
        }
    }
    static IsWeChatBrowser() {
        return -1 !== navigator.userAgent.toLowerCase().indexOf("micromessenger")
    }
    static FuncThrottle(e=500) {
        return function(t, n, o) {
            const r = o.value;
            let i = 0;
            o.value = async function(...t) {
                const n = Date.now();
                n - i < e || (i = n,
                "AsyncFunction" === r.constructor.name ? await r.apply(this, t) : r.apply(this, t))
            }
        }
    }
    static GenerateUniqueId() {
        let e = (new Date).getTime();
        return window.performance && "function" == typeof window.performance.now && (e += performance.now()),
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
            let n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16),
            ("x" === t ? n : 3 & n | 8).toString(16)
        }
        ))
    }
    static stopTouchMove(e) {
        e.stopPropagation(),
        e.preventDefault()
    }
    static pxToRPX(e) {
        const {windowWidth: t} = ah();
        return e * (750 / t)
    }
    static rpxToPX(e) {
        const {windowWidth: t} = ah();
        return e / (750 / t)
    }
    static touchMoveCallback(e, t) {
        let n = 0
          , o = 0
          , r = -1;
        function i() {
            2 !== o && (o = 2,
            t.value.transform = "translateY(0%)",
            t.value.opacity = 1)
        }
        const s = document.getElementById(e);
        null == s || s.addEventListener("touchmove", (function(e) {
            const s = e.touches[0];
            s && (s.clientY > n ? i() : 1 === o ? (clearTimeout(r),
            r = setTimeout(i, 1500)) : (o = 1,
            t.value.transform = "translateY(100%)",
            t.value.opacity = 0),
            n = s.clientY)
        }
        ))
    }
}
class Lm {
    constructor() {
        t(this, "token", ""),
        t(this, "phone", ""),
        t(this, "score", 0),
        t(this, "nice_name", ""),
        t(this, "qualification_count", 0),
        t(this, "is_once", !1),
        t(this, "bind_game_info")
    }
    resetData() {
        this.token = "",
        this.phone = "",
        this.score = 0,
        this.qualification_count = 0,
        delete this.bind_game_info
    }
    getBindToString() {
        return this.bind_game_info ? `${this.bind_game_info.platform}-${this.bind_game_info.channel}-${this.bind_game_info.user_name}` : ""
    }
}
class Om {
    constructor() {
        t(this, "login_verify_code"),
        t(this, "card_apply_verify_code")
    }
    creatorCountDownAction(e) {
        return {
            c_time: Date.now(),
            count_down: e,
            total_time: e
        }
    }
    async startCountDown(e) {
        const t = Math.ceil((Date.now() - e.c_time) / 1e3);
        if (e.total_time < t)
            return e.count_down = 0;
        for (e.count_down = e.total_time - t; ; ) {
            if (e.count_down <= 0)
                return e.count_down = 0;
            await km.Wait(1),
            e.count_down--
        }
    }
    resetData() {}
}
const $m = Nn(new class {
    constructor() {
        t(this, "user_info", new Lm),
        t(this, "temp_info", new Om)
    }
    logout() {
        this.user_info.resetData(),
        this.temp_info.resetData()
    }
}
).value
  , Pm = class e {
    constructor() {
        t(this, "root_url", "https://aitpro.playinjoy.com"),
        t(this, "card_url", "https://apipro.playinjoy.com"),
        t(this, "cache", new Map),
        t(this, "wx_code", "")
    }
    static getInstance() {
        return e.instance || (e.instance = new e)
    }
    cacheCheck(e, t) {
        if (t > 0) {
            const n = this.cache.get(e);
            if (n && Date.now() - n.time <= t)
                return n.value
        }
        return null
    }
    parametersToKey(e, t) {
        let n = e;
        for (let o in t)
            "token" !== o && (n += `${o}:${t[o]}`);
        return n
    }
    async httpProto(e, t, n) {
        const o = this.parametersToKey(e, t)
          , r = this.cacheCheck(o, n.interval || 0);
        if (r)
            return r;
        n.load && Yh({
            title: n.load_tips
        });
        const i = await yh({
            url: (n.root_url || this.root_url) + e,
            data: t,
            header: n.header,
            method: n.type
        })
          , {code: s, message: a} = i.data;
        switch (n.load && Xh(),
        s) {
        case Em.Success:
            return n.interval && n.interval > 0 && this.cache.set(o, {
                time: Date.now(),
                value: i.data
            }),
            i.data;
        case Em.TokenExpire:
            throw this.logOut(),
            "登录已过期";
        default:
            throw a || "未知错误"
        }
    }
    async https(t, n={}, o) {
        !n.token && $m.user_info.token && (n.token = $m.user_info.token);
        const r = Object.assign({}, e.default_header, o || {});
        return await this.httpProto(t, n, r)
    }
    async getVerifCode(e) {
        return await this.https("/union/verify", {
            mobile: e
        })
    }
    async logIn(e, t) {
        const n = this.wx_code;
        this.wx_code = "";
        const {token: o} = await this.https("/union/login", {
            mobile: e,
            code: t,
            channel: Tm.GameKey,
            wxCode: n
        });
        $m.user_info.token = o,
        lh(Tm.LocalCacheKey, o),
        await this.getUserInfo()
    }
    async logOut() {
        dh(Tm.LocalCacheKey),
        $m.logout()
    }
    async getUserInfo() {
        const {mobile: e, nickName: t, isNewUser: n} = await this.https("/union/getuserinfo");
        $m.user_info.phone = e,
        $m.user_info.nice_name = t,
        $m.user_info.is_once = n,
        delete $m.user_info.bind_game_info,
        await this.checkGameBind()
    }
    async getBalance() {
        const {creditBalance: e, redeemBalance: t} = await this.https("/union/balance", {}, {
            load: !1
        });
        $m.user_info.qualification_count = t,
        $m.user_info.score = e
    }
    async checkGameBind() {
        try {
            const {roleArea: e, roleName: t, userBound: n, roleId: o, packages: r} = await this.https("/union/getbindinfo", {
                game: Tm.GameKey
            }, {
                type: "GET"
            });
            if (n) {
                const [n,i] = e.split("-");
                $m.user_info.bind_game_info = {
                    platform: n,
                    channel: i,
                    user_name: t,
                    roleId: o,
                    packages: r
                }
            }
        } catch (e) {}
    }
    async getBindUrl(e) {
        return await this.https("/union/getbindurl", {
            game: Tm.GameKey,
            role: e
        }, {
            type: "GET"
        })
    }
    async getGoodsRecord(e) {
        return await this.https("/union/getdelivery", {
            month: e
        })
    }
    async getCardVerifCode(e) {
        await this.https("/card/sendsms", {
            mobilePhone: e,
            channelType: Tm.ChannelType
        }, {
            root_url: this.card_url
        })
    }
    async getPhoneList(e, t, n=1) {
        return await this.https("/card/select", {
            provinceCode: e,
            cityCode: t,
            numberKeyword: "",
            cardId: Tm.CardId,
            size: n,
            touchCode: Tm.TouchCode,
            channelType: Tm.ChannelType
        }, {
            root_url: this.card_url
        })
    }
    async applyCard(e) {
        const {orderMobile: t, certificateName: n, certificateNumber: o, goodsCityCode: r, goodsProvinceCode: i, sendProvinceCode: s, sendCityCode: a, sendDistrictCode: l, address: c, name: u, mobilePhone: d, numberCheckCode: f, code: p} = e;
        await this.https("/card/order", {
            orderMobile: t,
            certificateName: n,
            certificateNumber: o,
            goodsCityCode: r,
            goodsProvinceCode: i,
            sendProvinceCode: s,
            sendCityCode: a,
            sendDistrictCode: l,
            address: c,
            name: u,
            mobilePhone: d,
            sellerId: "",
            sellerMobile: "",
            numberCheckCode: f,
            numberLockSequence: "",
            userId: 1,
            secondSubmit: !1,
            protocolSequenceId: "",
            sourceUrl: "",
            cardId: Tm.CardId,
            code: p,
            channelType: Tm.ChannelType
        }, {
            root_url: this.card_url
        }),
        this.https("/page/save", {
            activityId: "",
            address: c,
            certificateName: n,
            certificateNumber: o,
            goodsCityCode: r,
            goodsProvinceCode: i,
            mobilePhone: d,
            name: u,
            orderMobile: t,
            secondSubmit: !1,
            sellerId: "",
            sellerMobile: "",
            sendCityCode: a,
            sendDistrictCode: l,
            sendProvinceCode: s,
            lockNumber: t,
            channelType: Tm.ChannelType,
            touchCode: Tm.TouchCode
        }, {
            root_url: this.card_url
        }).catch(( () => {}
        ))
    }
    async vorder(e) {
        await this.https("/card/vorder", {
            mobilePhone: e,
            channelType: Tm.ChannelType
        }, {
            root_url: this.card_url
        })
    }
    async cardHandleInfo(e) {
        const {data: t} = await this.https("/card/cardHandleInfo", {
            mobilePhone: e,
            channelType: Tm.ChannelType
        }, {
            root_url: this.card_url
        });
        return t
    }
    async createDelivery(e) {
        return await this.https("/union/createdelivery", {
            game: Tm.GameKey,
            items: e
        }, {
            type: "POST"
        })
    }
    prepayDelivery(e) {
        return new Promise((async (t, n) => {
            const {prepayInfo: o} = await this.https("/union/prepaydelivery", {
                game: Tm.GameKey,
                deliveryId: e
            });
            wx.ready(( () => {
                wx.chooseWXPay({
                    timestamp: o.timestamp,
                    nonceStr: o.nonceStr,
                    package: o.package,
                    signType: "MD5",
                    paySign: o.paySign,
                    success: t,
                    fail: () => n("支付失败"),
                    cancel: () => n("取消支付")
                })
            }
            ))
        }
        ))
    }
    async cancelDelivery(e) {
        return await this.https("/union/canceldelivery", {
            game: Tm.GameKey,
            deliveryId: e
        })
    }
    async pollingDelivery(e) {
        Yh({
            title: "提交订单中，请耐心等待..."
        });
        let t = 20;
        for (; ; ) {
            const {deliveryFulfillState: n} = await this.https("/union/getdeliverystate", {
                game: Tm.GameKey,
                deliveryId: e
            }, {
                load: !1
            });
            if (4 === n) {
                Xh();
                break
            }
            if (6 === n)
                throw "订单提交失败，该道具购买次数已达上限";
            if (t--,
            t <= 0)
                throw "订单超时，请稍后至购买记录中查看，发放存在一定延迟，请耐心等待";
            await km.Wait(1.5)
        }
    }
}
;
t(Pm, "instance"),
t(Pm, "default_header", {
    type: "POST",
    load: !0,
    interval: 0,
    load_tips: "请稍候..."
});
let Am = Pm;
const Bm = Jo({
    __name: "App",
    setup: e => (Sm((function() {
        const annn = new URLSearchParams(window.location.search);
        const e = annn.get('token');
       //const url = new URL(window.location.href);
        //const hash = url.hash; // 例如 "#/token=111"
       // 去掉 "#" 后解析参数
        //const params = new URLSearchParams(hash.substring(1).replace(/^\//, '')); // 移除开头的 "/"
        //const e =  params.get('token');
        e && ($m.user_info.token = e,
        Am.getInstance().getUserInfo().catch(( () => Am.getInstance().logOut())))
    }
    )),
    () => {}
    )
});
Dp(Bm, {
    init: jp,
    setup(e) {
        const t = np()
          , n = () => {
            var n;
            n = e,
            Object.keys(Nd).forEach((e => {
                Nd[e].forEach((t => {
                    hr(e, t, n)
                }
                ))
            }
            ));
            const {onLaunch: o, onShow: r, onPageNotFound: i, onError: s} = e
              , a = function({path: e, query: t}) {
                return c(cf, {
                    path: e,
                    query: t
                }),
                c(uf, cf),
                c({}, cf)
            }({
                path: t.path.slice(1) || __uniRoutes[0].meta.route,
                query: Qe(t.query)
            });
            if (o && M(o, a),
            r && M(r, a),
            !t.matched.length) {
                const e = {
                    notFound: !0,
                    openType: "appLaunch",
                    path: t.path,
                    query: {},
                    scene: 1001
                };
                i && M(i, e)
            }
            s && (e.appContext.config.errorHandler = e => {
                M(s, e)
            }
            )
        }
        ;
        return Jr(El).isReady().then(n),
        vr(( () => {
            window.addEventListener("resize", nt(Wp, 50, {
                setTimeout: setTimeout,
                clearTimeout: clearTimeout
            })),
            window.addEventListener("message", Hp),
            document.addEventListener("visibilitychange", Up),
            function() {
                let e = null;
                try {
                    e = window.matchMedia("(prefers-color-scheme: dark)")
                } catch (t) {}
                if (e) {
                    let t = e => {
                        om.emit(fe, {
                            theme: e.matches ? "dark" : "light"
                        })
                    }
                    ;
                    e.addEventListener ? e.addEventListener("change", t) : e.addListener(t)
                }
            }()
        }
        )),
        t.query
    },
    before(e) {
        e.mpType = "app";
        const {setup: t} = e
          , n = () => (Ti(),
        $i(tm));
        e.setup = (e, o) => {
            const r = t && t(e, o);
            return g(r) ? n : r
        }
        ,
        e.render = n
    }
}),
function() {
    const e = Kh;
    return uni.showToast = function(t) {
        t.title = "object" == typeof t.title ? t.title.message || (t.title.errMsg ? "网络异常" : t.title.toString()) : t.title,
        e(t)
    }
    ,
    {
        app: sa(Bm)
    }
}().app.use(Op).mount("#app");
export {Nh as A, Sh as B, Tm as C, Qh as D, Gp as E, bi as F, Rf as I, $m as M, Am as N, Hf as S, km as U, vo as a, Ri as b, $i as c, Jo as d, kr as e, oa as f, Cm as g, To as h, Uf as i, Fi as j, Oi as k, Er as l, bf as m, De as n, Ti as o, Fe as p, Ni as q, Nn as r, Di as s, Y as t, Dn as u, $s as v, jo as w, Ch as x, vr as y, Bo as z};

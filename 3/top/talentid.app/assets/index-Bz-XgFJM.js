function im(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
var pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function om(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }),
    n
}
var bd = {
    exports: {}
}
  , $o = {}
  , Sd = {
    exports: {}
}
  , W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ti = Symbol.for("react.element")
  , sm = Symbol.for("react.portal")
  , lm = Symbol.for("react.fragment")
  , am = Symbol.for("react.strict_mode")
  , um = Symbol.for("react.profiler")
  , cm = Symbol.for("react.provider")
  , dm = Symbol.for("react.context")
  , fm = Symbol.for("react.forward_ref")
  , pm = Symbol.for("react.suspense")
  , hm = Symbol.for("react.memo")
  , mm = Symbol.for("react.lazy")
  , xu = Symbol.iterator;
function ym(e) {
    return e === null || typeof e != "object" ? null : (e = xu && e[xu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var jd = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , kd = Object.assign
  , Nd = {};
function rr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Nd,
    this.updater = n || jd
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
rr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Ed() {}
Ed.prototype = rr.prototype;
function ya(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Nd,
    this.updater = n || jd
}
var va = ya.prototype = new Ed;
va.constructor = ya;
kd(va, rr.prototype);
va.isPureReactComponent = !0;
var wu = Array.isArray
  , _d = Object.prototype.hasOwnProperty
  , ga = {
    current: null
}
  , Od = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Td(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            _d.call(t, r) && !Od.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++)
            u[c] = arguments[c + 2];
        i.children = u
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: ti,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: ga.current
    }
}
function vm(e, t) {
    return {
        $$typeof: ti,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function xa(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ti
}
function gm(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var bu = /\/+/g;
function hs(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? gm("" + e.key) : t.toString(36)
}
function Li(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ti:
            case sm:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + hs(s, 0) : r,
        wu(i) ? (n = "",
        e != null && (n = e.replace(bu, "$&/") + "/"),
        Li(i, t, n, "", function(c) {
            return c
        })) : i != null && (xa(i) && (i = vm(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(bu, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    wu(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var u = r + hs(o, l);
            s += Li(o, t, n, u, i)
        }
    else if (u = ym(e),
    typeof u == "function")
        for (e = u.call(e),
        l = 0; !(o = e.next()).done; )
            o = o.value,
            u = r + hs(o, l++),
            s += Li(o, t, n, u, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function hi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Li(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function xm(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ne = {
    current: null
}
  , zi = {
    transition: null
}
  , wm = {
    ReactCurrentDispatcher: Ne,
    ReactCurrentBatchConfig: zi,
    ReactCurrentOwner: ga
};
function Cd() {
    throw Error("act(...) is not supported in production builds of React.")
}
W.Children = {
    map: hi,
    forEach: function(e, t, n) {
        hi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return hi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return hi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!xa(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
W.Component = rr;
W.Fragment = lm;
W.Profiler = um;
W.PureComponent = ya;
W.StrictMode = am;
W.Suspense = pm;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wm;
W.act = Cd;
W.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = kd({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = ga.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (u in t)
            _d.call(t, u) && !Od.hasOwnProperty(u) && (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var c = 0; c < u; c++)
            l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: ti,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
W.createContext = function(e) {
    return e = {
        $$typeof: dm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: cm,
        _context: e
    },
    e.Consumer = e
}
;
W.createElement = Td;
W.createFactory = function(e) {
    var t = Td.bind(null, e);
    return t.type = e,
    t
}
;
W.createRef = function() {
    return {
        current: null
    }
}
;
W.forwardRef = function(e) {
    return {
        $$typeof: fm,
        render: e
    }
}
;
W.isValidElement = xa;
W.lazy = function(e) {
    return {
        $$typeof: mm,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: xm
    }
}
;
W.memo = function(e, t) {
    return {
        $$typeof: hm,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
W.startTransition = function(e) {
    var t = zi.transition;
    zi.transition = {};
    try {
        e()
    } finally {
        zi.transition = t
    }
}
;
W.unstable_act = Cd;
W.useCallback = function(e, t) {
    return Ne.current.useCallback(e, t)
}
;
W.useContext = function(e) {
    return Ne.current.useContext(e)
}
;
W.useDebugValue = function() {}
;
W.useDeferredValue = function(e) {
    return Ne.current.useDeferredValue(e)
}
;
W.useEffect = function(e, t) {
    return Ne.current.useEffect(e, t)
}
;
W.useId = function() {
    return Ne.current.useId()
}
;
W.useImperativeHandle = function(e, t, n) {
    return Ne.current.useImperativeHandle(e, t, n)
}
;
W.useInsertionEffect = function(e, t) {
    return Ne.current.useInsertionEffect(e, t)
}
;
W.useLayoutEffect = function(e, t) {
    return Ne.current.useLayoutEffect(e, t)
}
;
W.useMemo = function(e, t) {
    return Ne.current.useMemo(e, t)
}
;
W.useReducer = function(e, t, n) {
    return Ne.current.useReducer(e, t, n)
}
;
W.useRef = function(e) {
    return Ne.current.useRef(e)
}
;
W.useState = function(e) {
    return Ne.current.useState(e)
}
;
W.useSyncExternalStore = function(e, t, n) {
    return Ne.current.useSyncExternalStore(e, t, n)
}
;
W.useTransition = function() {
    return Ne.current.useTransition()
}
;
W.version = "18.3.1";
Sd.exports = W;
var N = Sd.exports;
const At = wd(N)
  , bm = im({
    __proto__: null,
    default: At
}, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sm = N
  , jm = Symbol.for("react.element")
  , km = Symbol.for("react.fragment")
  , Nm = Object.prototype.hasOwnProperty
  , Em = Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , _m = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Pd(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Nm.call(t, r) && !_m.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: jm,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Em.current
    }
}
$o.Fragment = km;
$o.jsx = Pd;
$o.jsxs = Pd;
bd.exports = $o;
var a = bd.exports
  , Rd = {
    exports: {}
}
  , Be = {}
  , Ld = {
    exports: {}
}
  , zd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(R, I) {
        var $ = R.length;
        R.push(I);
        e: for (; 0 < $; ) {
            var Q = $ - 1 >>> 1
              , ie = R[Q];
            if (0 < i(ie, I))
                R[Q] = I,
                R[$] = ie,
                $ = Q;
            else
                break e
        }
    }
    function n(R) {
        return R.length === 0 ? null : R[0]
    }
    function r(R) {
        if (R.length === 0)
            return null;
        var I = R[0]
          , $ = R.pop();
        if ($ !== I) {
            R[0] = $;
            e: for (var Q = 0, ie = R.length, We = ie >>> 1; Q < We; ) {
                var pt = 2 * (Q + 1) - 1
                  , ht = R[pt]
                  , en = pt + 1
                  , fi = R[en];
                if (0 > i(ht, $))
                    en < ie && 0 > i(fi, ht) ? (R[Q] = fi,
                    R[en] = $,
                    Q = en) : (R[Q] = ht,
                    R[pt] = $,
                    Q = pt);
                else if (en < ie && 0 > i(fi, $))
                    R[Q] = fi,
                    R[en] = $,
                    Q = en;
                else
                    break e
            }
        }
        return I
    }
    function i(R, I) {
        var $ = R.sortIndex - I.sortIndex;
        return $ !== 0 ? $ : R.id - I.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var u = []
      , c = []
      , d = 1
      , f = null
      , y = 3
      , w = !1
      , v = !1
      , g = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , h = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(R) {
        for (var I = n(c); I !== null; ) {
            if (I.callback === null)
                r(c);
            else if (I.startTime <= R)
                r(c),
                I.sortIndex = I.expirationTime,
                t(u, I);
            else
                break;
            I = n(c)
        }
    }
    function b(R) {
        if (g = !1,
        m(R),
        !v)
            if (n(u) !== null)
                v = !0,
                le(j);
            else {
                var I = n(c);
                I !== null && Ie(b, I.startTime - R)
            }
    }
    function j(R, I) {
        v = !1,
        g && (g = !1,
        h(P),
        P = -1),
        w = !0;
        var $ = y;
        try {
            for (m(I),
            f = n(u); f !== null && (!(f.expirationTime > I) || R && !M()); ) {
                var Q = f.callback;
                if (typeof Q == "function") {
                    f.callback = null,
                    y = f.priorityLevel;
                    var ie = Q(f.expirationTime <= I);
                    I = e.unstable_now(),
                    typeof ie == "function" ? f.callback = ie : f === n(u) && r(u),
                    m(I)
                } else
                    r(u);
                f = n(u)
            }
            if (f !== null)
                var We = !0;
            else {
                var pt = n(c);
                pt !== null && Ie(b, pt.startTime - I),
                We = !1
            }
            return We
        } finally {
            f = null,
            y = $,
            w = !1
        }
    }
    var k = !1
      , T = null
      , P = -1
      , O = 5
      , E = -1;
    function M() {
        return !(e.unstable_now() - E < O)
    }
    function z() {
        if (T !== null) {
            var R = e.unstable_now();
            E = R;
            var I = !0;
            try {
                I = T(!0, R)
            } finally {
                I ? A() : (k = !1,
                T = null)
            }
        } else
            k = !1
    }
    var A;
    if (typeof p == "function")
        A = function() {
            p(z)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var F = new MessageChannel
          , ft = F.port2;
        F.port1.onmessage = z,
        A = function() {
            ft.postMessage(null)
        }
    } else
        A = function() {
            x(z, 0)
        }
        ;
    function le(R) {
        T = R,
        k || (k = !0,
        A())
    }
    function Ie(R, I) {
        P = x(function() {
            R(e.unstable_now())
        }, I)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(R) {
        R.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || w || (v = !0,
        le(j))
    }
    ,
    e.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < R ? Math.floor(1e3 / R) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return y
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(R) {
        switch (y) {
        case 1:
        case 2:
        case 3:
            var I = 3;
            break;
        default:
            I = y
        }
        var $ = y;
        y = I;
        try {
            return R()
        } finally {
            y = $
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(R, I) {
        switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            R = 3
        }
        var $ = y;
        y = R;
        try {
            return I()
        } finally {
            y = $
        }
    }
    ,
    e.unstable_scheduleCallback = function(R, I, $) {
        var Q = e.unstable_now();
        switch (typeof $ == "object" && $ !== null ? ($ = $.delay,
        $ = typeof $ == "number" && 0 < $ ? Q + $ : Q) : $ = Q,
        R) {
        case 1:
            var ie = -1;
            break;
        case 2:
            ie = 250;
            break;
        case 5:
            ie = 1073741823;
            break;
        case 4:
            ie = 1e4;
            break;
        default:
            ie = 5e3
        }
        return ie = $ + ie,
        R = {
            id: d++,
            callback: I,
            priorityLevel: R,
            startTime: $,
            expirationTime: ie,
            sortIndex: -1
        },
        $ > Q ? (R.sortIndex = $,
        t(c, R),
        n(u) === null && R === n(c) && (g ? (h(P),
        P = -1) : g = !0,
        Ie(b, $ - Q))) : (R.sortIndex = ie,
        t(u, R),
        v || w || (v = !0,
        le(j))),
        R
    }
    ,
    e.unstable_shouldYield = M,
    e.unstable_wrapCallback = function(R) {
        var I = y;
        return function() {
            var $ = y;
            y = I;
            try {
                return R.apply(this, arguments)
            } finally {
                y = $
            }
        }
    }
}
)(zd);
Ld.exports = zd;
var Om = Ld.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tm = N
  , Ue = Om;
function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Id = new Set
  , zr = {};
function gn(e, t) {
    qn(e, t),
    qn(e + "Capture", t)
}
function qn(e, t) {
    for (zr[e] = t,
    e = 0; e < t.length; e++)
        Id.add(t[e])
}
var bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , tl = Object.prototype.hasOwnProperty
  , Cm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Su = {}
  , ju = {};
function Pm(e) {
    return tl.call(ju, e) ? !0 : tl.call(Su, e) ? !1 : Cm.test(e) ? ju[e] = !0 : (Su[e] = !0,
    !1)
}
function Rm(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Lm(e, t, n, r) {
    if (t === null || typeof t > "u" || Rm(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ee(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ve[e] = new Ee(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ve[t] = new Ee(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ve[e] = new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ve[e] = new Ee(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ve[e] = new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ve[e] = new Ee(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ve[e] = new Ee(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ve[e] = new Ee(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ve[e] = new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var wa = /[\-:]([a-z])/g;
function ba(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(wa, ba);
    ve[t] = new Ee(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(wa, ba);
    ve[t] = new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(wa, ba);
    ve[t] = new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ve[e] = new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ve.xlinkHref = new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ve[e] = new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Sa(e, t, n, r) {
    var i = ve.hasOwnProperty(t) ? ve[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Lm(t, n, i, r) && (n = null),
    r || i === null ? Pm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Et = Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , mi = Symbol.for("react.element")
  , Nn = Symbol.for("react.portal")
  , En = Symbol.for("react.fragment")
  , ja = Symbol.for("react.strict_mode")
  , nl = Symbol.for("react.profiler")
  , Dd = Symbol.for("react.provider")
  , Md = Symbol.for("react.context")
  , ka = Symbol.for("react.forward_ref")
  , rl = Symbol.for("react.suspense")
  , il = Symbol.for("react.suspense_list")
  , Na = Symbol.for("react.memo")
  , Tt = Symbol.for("react.lazy")
  , Ad = Symbol.for("react.offscreen")
  , ku = Symbol.iterator;
function dr(e) {
    return e === null || typeof e != "object" ? null : (e = ku && e[ku] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ne = Object.assign, ms;
function wr(e) {
    if (ms === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ms = t && t[1] || ""
        }
    return `
` + ms + e
}
var ys = !1;
function vs(e, t) {
    if (!e || ys)
        return "";
    ys = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || i[s] !== o[l]) {
                                var u = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        ys = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? wr(e) : ""
}
function zm(e) {
    switch (e.tag) {
    case 5:
        return wr(e.type);
    case 16:
        return wr("Lazy");
    case 13:
        return wr("Suspense");
    case 19:
        return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = vs(e.type, !1),
        e;
    case 11:
        return e = vs(e.type.render, !1),
        e;
    case 1:
        return e = vs(e.type, !0),
        e;
    default:
        return ""
    }
}
function ol(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case En:
        return "Fragment";
    case Nn:
        return "Portal";
    case nl:
        return "Profiler";
    case ja:
        return "StrictMode";
    case rl:
        return "Suspense";
    case il:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Md:
            return (e.displayName || "Context") + ".Consumer";
        case Dd:
            return (e._context.displayName || "Context") + ".Provider";
        case ka:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Na:
            return t = e.displayName || null,
            t !== null ? t : ol(e.type) || "Memo";
        case Tt:
            t = e._payload,
            e = e._init;
            try {
                return ol(e(t))
            } catch {}
        }
    return null
}
function Im(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ol(t);
    case 8:
        return t === ja ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Kt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Fd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Dm(e) {
    var t = Fd(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function yi(e) {
    e._valueTracker || (e._valueTracker = Dm(e))
}
function $d(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Fd(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Xi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function sl(e, t) {
    var n = t.checked;
    return ne({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Nu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Kt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Ud(e, t) {
    t = t.checked,
    t != null && Sa(e, "checked", t, !1)
}
function ll(e, t) {
    Ud(e, t);
    var n = Kt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? al(e, t.type, n) : t.hasOwnProperty("defaultValue") && al(e, t.type, Kt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Eu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function al(e, t, n) {
    (t !== "number" || Xi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var br = Array.isArray;
function Mn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Kt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function ul(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(_(91));
    return ne({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function _u(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(_(92));
            if (br(n)) {
                if (1 < n.length)
                    throw Error(_(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Kt(n)
    }
}
function Bd(e, t) {
    var n = Kt(t.value)
      , r = Kt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ou(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Hd(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function cl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Hd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var vi, Wd = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (vi = vi || document.createElement("div"),
        vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = vi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ir(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Mm = ["Webkit", "ms", "Moz", "O"];
Object.keys(kr).forEach(function(e) {
    Mm.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        kr[t] = kr[e]
    })
});
function qd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || kr.hasOwnProperty(e) && kr[e] ? ("" + t).trim() : t + "px"
}
function Vd(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = qd(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var Am = ne({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function dl(e, t) {
    if (t) {
        if (Am[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(_(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(_(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(_(62))
    }
}
function fl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var pl = null;
function Ea(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var hl = null
  , An = null
  , Fn = null;
function Tu(e) {
    if (e = ii(e)) {
        if (typeof hl != "function")
            throw Error(_(280));
        var t = e.stateNode;
        t && (t = qo(t),
        hl(e.stateNode, e.type, t))
    }
}
function Qd(e) {
    An ? Fn ? Fn.push(e) : Fn = [e] : An = e
}
function Kd() {
    if (An) {
        var e = An
          , t = Fn;
        if (Fn = An = null,
        Tu(e),
        t)
            for (e = 0; e < t.length; e++)
                Tu(t[e])
    }
}
function Gd(e, t) {
    return e(t)
}
function Yd() {}
var gs = !1;
function Xd(e, t, n) {
    if (gs)
        return e(t, n);
    gs = !0;
    try {
        return Gd(e, t, n)
    } finally {
        gs = !1,
        (An !== null || Fn !== null) && (Yd(),
        Kd())
    }
}
function Dr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = qo(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(_(231, t, typeof n));
    return n
}
var ml = !1;
if (bt)
    try {
        var fr = {};
        Object.defineProperty(fr, "passive", {
            get: function() {
                ml = !0
            }
        }),
        window.addEventListener("test", fr, fr),
        window.removeEventListener("test", fr, fr)
    } catch {
        ml = !1
    }
function Fm(e, t, n, r, i, o, s, l, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var Nr = !1
  , Ji = null
  , Zi = !1
  , yl = null
  , $m = {
    onError: function(e) {
        Nr = !0,
        Ji = e
    }
};
function Um(e, t, n, r, i, o, s, l, u) {
    Nr = !1,
    Ji = null,
    Fm.apply($m, arguments)
}
function Bm(e, t, n, r, i, o, s, l, u) {
    if (Um.apply(this, arguments),
    Nr) {
        if (Nr) {
            var c = Ji;
            Nr = !1,
            Ji = null
        } else
            throw Error(_(198));
        Zi || (Zi = !0,
        yl = c)
    }
}
function xn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Jd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Cu(e) {
    if (xn(e) !== e)
        throw Error(_(188))
}
function Hm(e) {
    var t = e.alternate;
    if (!t) {
        if (t = xn(e),
        t === null)
            throw Error(_(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return Cu(i),
                    e;
                if (o === r)
                    return Cu(i),
                    t;
                o = o.sibling
            }
            throw Error(_(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, l = i.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(_(189))
            }
        }
        if (n.alternate !== r)
            throw Error(_(190))
    }
    if (n.tag !== 3)
        throw Error(_(188));
    return n.stateNode.current === n ? e : t
}
function Zd(e) {
    return e = Hm(e),
    e !== null ? ef(e) : null
}
function ef(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ef(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var tf = Ue.unstable_scheduleCallback
  , Pu = Ue.unstable_cancelCallback
  , Wm = Ue.unstable_shouldYield
  , qm = Ue.unstable_requestPaint
  , oe = Ue.unstable_now
  , Vm = Ue.unstable_getCurrentPriorityLevel
  , _a = Ue.unstable_ImmediatePriority
  , nf = Ue.unstable_UserBlockingPriority
  , eo = Ue.unstable_NormalPriority
  , Qm = Ue.unstable_LowPriority
  , rf = Ue.unstable_IdlePriority
  , Uo = null
  , ct = null;
function Km(e) {
    if (ct && typeof ct.onCommitFiberRoot == "function")
        try {
            ct.onCommitFiberRoot(Uo, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var nt = Math.clz32 ? Math.clz32 : Xm
  , Gm = Math.log
  , Ym = Math.LN2;
function Xm(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Gm(e) / Ym | 0) | 0
}
var gi = 64
  , xi = 4194304;
function Sr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function to(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = Sr(l) : (o &= s,
        o !== 0 && (r = Sr(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = Sr(s) : o !== 0 && (r = Sr(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - nt(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function Jm(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Zm(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - nt(o)
          , l = 1 << s
          , u = i[s];
        u === -1 ? (!(l & n) || l & r) && (i[s] = Jm(l, t)) : u <= t && (e.expiredLanes |= l),
        o &= ~l
    }
}
function vl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function of() {
    var e = gi;
    return gi <<= 1,
    !(gi & 4194240) && (gi = 64),
    e
}
function xs(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ni(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - nt(t),
    e[t] = n
}
function ey(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - nt(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function Oa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - nt(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var V = 0;
function sf(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var lf, Ta, af, uf, cf, gl = !1, wi = [], Ft = null, $t = null, Ut = null, Mr = new Map, Ar = new Map, Rt = [], ty = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ru(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ft = null;
        break;
    case "dragenter":
    case "dragleave":
        $t = null;
        break;
    case "mouseover":
    case "mouseout":
        Ut = null;
        break;
    case "pointerover":
    case "pointerout":
        Mr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Ar.delete(t.pointerId)
    }
}
function pr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = ii(t),
    t !== null && Ta(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function ny(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Ft = pr(Ft, e, t, n, r, i),
        !0;
    case "dragenter":
        return $t = pr($t, e, t, n, r, i),
        !0;
    case "mouseover":
        return Ut = pr(Ut, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Mr.set(o, pr(Mr.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Ar.set(o, pr(Ar.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function df(e) {
    var t = rn(e.target);
    if (t !== null) {
        var n = xn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Jd(n),
                t !== null) {
                    e.blockedOn = t,
                    cf(e.priority, function() {
                        af(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ii(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            pl = r,
            n.target.dispatchEvent(r),
            pl = null
        } else
            return t = ii(n),
            t !== null && Ta(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Lu(e, t, n) {
    Ii(e) && n.delete(t)
}
function ry() {
    gl = !1,
    Ft !== null && Ii(Ft) && (Ft = null),
    $t !== null && Ii($t) && ($t = null),
    Ut !== null && Ii(Ut) && (Ut = null),
    Mr.forEach(Lu),
    Ar.forEach(Lu)
}
function hr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    gl || (gl = !0,
    Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, ry)))
}
function Fr(e) {
    function t(i) {
        return hr(i, e)
    }
    if (0 < wi.length) {
        hr(wi[0], e);
        for (var n = 1; n < wi.length; n++) {
            var r = wi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ft !== null && hr(Ft, e),
    $t !== null && hr($t, e),
    Ut !== null && hr(Ut, e),
    Mr.forEach(t),
    Ar.forEach(t),
    n = 0; n < Rt.length; n++)
        r = Rt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rt.length && (n = Rt[0],
    n.blockedOn === null); )
        df(n),
        n.blockedOn === null && Rt.shift()
}
var $n = Et.ReactCurrentBatchConfig
  , no = !0;
function iy(e, t, n, r) {
    var i = V
      , o = $n.transition;
    $n.transition = null;
    try {
        V = 1,
        Ca(e, t, n, r)
    } finally {
        V = i,
        $n.transition = o
    }
}
function oy(e, t, n, r) {
    var i = V
      , o = $n.transition;
    $n.transition = null;
    try {
        V = 4,
        Ca(e, t, n, r)
    } finally {
        V = i,
        $n.transition = o
    }
}
function Ca(e, t, n, r) {
    if (no) {
        var i = xl(e, t, n, r);
        if (i === null)
            Ts(e, t, r, ro, n),
            Ru(e, r);
        else if (ny(i, e, t, n, r))
            r.stopPropagation();
        else if (Ru(e, r),
        t & 4 && -1 < ty.indexOf(e)) {
            for (; i !== null; ) {
                var o = ii(i);
                if (o !== null && lf(o),
                o = xl(e, t, n, r),
                o === null && Ts(e, t, r, ro, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            Ts(e, t, r, null, n)
    }
}
var ro = null;
function xl(e, t, n, r) {
    if (ro = null,
    e = Ea(r),
    e = rn(e),
    e !== null)
        if (t = xn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Jd(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ro = e,
    null
}
function ff(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Vm()) {
        case _a:
            return 1;
        case nf:
            return 4;
        case eo:
        case Qm:
            return 16;
        case rf:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var It = null
  , Pa = null
  , Di = null;
function pf() {
    if (Di)
        return Di;
    var e, t = Pa, n = t.length, r, i = "value"in It ? It.value : It.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return Di = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Mi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function bi() {
    return !0
}
function zu() {
    return !1
}
function He(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? bi : zu,
        this.isPropagationStopped = zu,
        this
    }
    return ne(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = bi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = bi)
        },
        persist: function() {},
        isPersistent: bi
    }),
    t
}
var ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ra = He(ir), ri = ne({}, ir, {
    view: 0,
    detail: 0
}), sy = He(ri), ws, bs, mr, Bo = ne({}, ri, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: La,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== mr && (mr && e.type === "mousemove" ? (ws = e.screenX - mr.screenX,
        bs = e.screenY - mr.screenY) : bs = ws = 0,
        mr = e),
        ws)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : bs
    }
}), Iu = He(Bo), ly = ne({}, Bo, {
    dataTransfer: 0
}), ay = He(ly), uy = ne({}, ri, {
    relatedTarget: 0
}), Ss = He(uy), cy = ne({}, ir, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), dy = He(cy), fy = ne({}, ir, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), py = He(fy), hy = ne({}, ir, {
    data: 0
}), Du = He(hy), my = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, yy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, vy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function gy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = vy[e]) ? !!t[e] : !1
}
function La() {
    return gy
}
var xy = ne({}, ri, {
    key: function(e) {
        if (e.key) {
            var t = my[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Mi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yy[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: La,
    charCode: function(e) {
        return e.type === "keypress" ? Mi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , wy = He(xy)
  , by = ne({}, Bo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Mu = He(by)
  , Sy = ne({}, ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: La
})
  , jy = He(Sy)
  , ky = ne({}, ir, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Ny = He(ky)
  , Ey = ne({}, Bo, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , _y = He(Ey)
  , Oy = [9, 13, 27, 32]
  , za = bt && "CompositionEvent"in window
  , Er = null;
bt && "documentMode"in document && (Er = document.documentMode);
var Ty = bt && "TextEvent"in window && !Er
  , hf = bt && (!za || Er && 8 < Er && 11 >= Er)
  , Au = " "
  , Fu = !1;
function mf(e, t) {
    switch (e) {
    case "keyup":
        return Oy.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function yf(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var _n = !1;
function Cy(e, t) {
    switch (e) {
    case "compositionend":
        return yf(t);
    case "keypress":
        return t.which !== 32 ? null : (Fu = !0,
        Au);
    case "textInput":
        return e = t.data,
        e === Au && Fu ? null : e;
    default:
        return null
    }
}
function Py(e, t) {
    if (_n)
        return e === "compositionend" || !za && mf(e, t) ? (e = pf(),
        Di = Pa = It = null,
        _n = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return hf && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Ry = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function $u(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ry[e.type] : t === "textarea"
}
function vf(e, t, n, r) {
    Qd(r),
    t = io(t, "onChange"),
    0 < t.length && (n = new Ra("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var _r = null
  , $r = null;
function Ly(e) {
    Of(e, 0)
}
function Ho(e) {
    var t = Cn(e);
    if ($d(t))
        return e
}
function zy(e, t) {
    if (e === "change")
        return t
}
var gf = !1;
if (bt) {
    var js;
    if (bt) {
        var ks = "oninput"in document;
        if (!ks) {
            var Uu = document.createElement("div");
            Uu.setAttribute("oninput", "return;"),
            ks = typeof Uu.oninput == "function"
        }
        js = ks
    } else
        js = !1;
    gf = js && (!document.documentMode || 9 < document.documentMode)
}
function Bu() {
    _r && (_r.detachEvent("onpropertychange", xf),
    $r = _r = null)
}
function xf(e) {
    if (e.propertyName === "value" && Ho($r)) {
        var t = [];
        vf(t, $r, e, Ea(e)),
        Xd(Ly, t)
    }
}
function Iy(e, t, n) {
    e === "focusin" ? (Bu(),
    _r = t,
    $r = n,
    _r.attachEvent("onpropertychange", xf)) : e === "focusout" && Bu()
}
function Dy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ho($r)
}
function My(e, t) {
    if (e === "click")
        return Ho(t)
}
function Ay(e, t) {
    if (e === "input" || e === "change")
        return Ho(t)
}
function Fy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var it = typeof Object.is == "function" ? Object.is : Fy;
function Ur(e, t) {
    if (it(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!tl.call(t, i) || !it(e[i], t[i]))
            return !1
    }
    return !0
}
function Hu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Wu(e, t) {
    var n = Hu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Hu(n)
    }
}
function wf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? wf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function bf() {
    for (var e = window, t = Xi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Xi(e.document)
    }
    return t
}
function Ia(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function $y(e) {
    var t = bf()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && wf(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ia(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = Wu(n, o);
                var s = Wu(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Uy = bt && "documentMode"in document && 11 >= document.documentMode
  , On = null
  , wl = null
  , Or = null
  , bl = !1;
function qu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    bl || On == null || On !== Xi(r) || (r = On,
    "selectionStart"in r && Ia(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Or && Ur(Or, r) || (Or = r,
    r = io(wl, "onSelect"),
    0 < r.length && (t = new Ra("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = On)))
}
function Si(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Tn = {
    animationend: Si("Animation", "AnimationEnd"),
    animationiteration: Si("Animation", "AnimationIteration"),
    animationstart: Si("Animation", "AnimationStart"),
    transitionend: Si("Transition", "TransitionEnd")
}
  , Ns = {}
  , Sf = {};
bt && (Sf = document.createElement("div").style,
"AnimationEvent"in window || (delete Tn.animationend.animation,
delete Tn.animationiteration.animation,
delete Tn.animationstart.animation),
"TransitionEvent"in window || delete Tn.transitionend.transition);
function Wo(e) {
    if (Ns[e])
        return Ns[e];
    if (!Tn[e])
        return e;
    var t = Tn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Sf)
            return Ns[e] = t[n];
    return e
}
var jf = Wo("animationend")
  , kf = Wo("animationiteration")
  , Nf = Wo("animationstart")
  , Ef = Wo("transitionend")
  , _f = new Map
  , Vu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Yt(e, t) {
    _f.set(e, t),
    gn(t, [e])
}
for (var Es = 0; Es < Vu.length; Es++) {
    var _s = Vu[Es]
      , By = _s.toLowerCase()
      , Hy = _s[0].toUpperCase() + _s.slice(1);
    Yt(By, "on" + Hy)
}
Yt(jf, "onAnimationEnd");
Yt(kf, "onAnimationIteration");
Yt(Nf, "onAnimationStart");
Yt("dblclick", "onDoubleClick");
Yt("focusin", "onFocus");
Yt("focusout", "onBlur");
Yt(Ef, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
gn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
gn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
gn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Wy = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
function Qu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Bm(r, t, void 0, e),
    e.currentTarget = null
}
function Of(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , u = l.instance
                      , c = l.currentTarget;
                    if (l = l.listener,
                    u !== o && i.isPropagationStopped())
                        break e;
                    Qu(i, l, c),
                    o = u
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    u = l.instance,
                    c = l.currentTarget,
                    l = l.listener,
                    u !== o && i.isPropagationStopped())
                        break e;
                    Qu(i, l, c),
                    o = u
                }
        }
    }
    if (Zi)
        throw e = yl,
        Zi = !1,
        yl = null,
        e
}
function G(e, t) {
    var n = t[El];
    n === void 0 && (n = t[El] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Tf(t, e, 2, !1),
    n.add(r))
}
function Os(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Tf(n, e, r, t)
}
var ji = "_reactListening" + Math.random().toString(36).slice(2);
function Br(e) {
    if (!e[ji]) {
        e[ji] = !0,
        Id.forEach(function(n) {
            n !== "selectionchange" && (Wy.has(n) || Os(n, !1, e),
            Os(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ji] || (t[ji] = !0,
        Os("selectionchange", !1, t))
    }
}
function Tf(e, t, n, r) {
    switch (ff(t)) {
    case 1:
        var i = iy;
        break;
    case 4:
        i = oy;
        break;
    default:
        i = Ca
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !ml || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Ts(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var u = s.tag;
                        if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo,
                        u === i || u.nodeType === 8 && u.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = rn(l),
                    s === null)
                        return;
                    if (u = s.tag,
                    u === 5 || u === 6) {
                        r = o = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Xd(function() {
        var c = o
          , d = Ea(n)
          , f = [];
        e: {
            var y = _f.get(e);
            if (y !== void 0) {
                var w = Ra
                  , v = e;
                switch (e) {
                case "keypress":
                    if (Mi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    w = wy;
                    break;
                case "focusin":
                    v = "focus",
                    w = Ss;
                    break;
                case "focusout":
                    v = "blur",
                    w = Ss;
                    break;
                case "beforeblur":
                case "afterblur":
                    w = Ss;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    w = Iu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    w = ay;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    w = jy;
                    break;
                case jf:
                case kf:
                case Nf:
                    w = dy;
                    break;
                case Ef:
                    w = Ny;
                    break;
                case "scroll":
                    w = sy;
                    break;
                case "wheel":
                    w = _y;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    w = py;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    w = Mu
                }
                var g = (t & 4) !== 0
                  , x = !g && e === "scroll"
                  , h = g ? y !== null ? y + "Capture" : null : y;
                g = [];
                for (var p = c, m; p !== null; ) {
                    m = p;
                    var b = m.stateNode;
                    if (m.tag === 5 && b !== null && (m = b,
                    h !== null && (b = Dr(p, h),
                    b != null && g.push(Hr(p, b, m)))),
                    x)
                        break;
                    p = p.return
                }
                0 < g.length && (y = new w(y,v,null,n,d),
                f.push({
                    event: y,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (y = e === "mouseover" || e === "pointerover",
                w = e === "mouseout" || e === "pointerout",
                y && n !== pl && (v = n.relatedTarget || n.fromElement) && (rn(v) || v[St]))
                    break e;
                if ((w || y) && (y = d.window === d ? d : (y = d.ownerDocument) ? y.defaultView || y.parentWindow : window,
                w ? (v = n.relatedTarget || n.toElement,
                w = c,
                v = v ? rn(v) : null,
                v !== null && (x = xn(v),
                v !== x || v.tag !== 5 && v.tag !== 6) && (v = null)) : (w = null,
                v = c),
                w !== v)) {
                    if (g = Iu,
                    b = "onMouseLeave",
                    h = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = Mu,
                    b = "onPointerLeave",
                    h = "onPointerEnter",
                    p = "pointer"),
                    x = w == null ? y : Cn(w),
                    m = v == null ? y : Cn(v),
                    y = new g(b,p + "leave",w,n,d),
                    y.target = x,
                    y.relatedTarget = m,
                    b = null,
                    rn(d) === c && (g = new g(h,p + "enter",v,n,d),
                    g.target = m,
                    g.relatedTarget = x,
                    b = g),
                    x = b,
                    w && v)
                        t: {
                            for (g = w,
                            h = v,
                            p = 0,
                            m = g; m; m = kn(m))
                                p++;
                            for (m = 0,
                            b = h; b; b = kn(b))
                                m++;
                            for (; 0 < p - m; )
                                g = kn(g),
                                p--;
                            for (; 0 < m - p; )
                                h = kn(h),
                                m--;
                            for (; p--; ) {
                                if (g === h || h !== null && g === h.alternate)
                                    break t;
                                g = kn(g),
                                h = kn(h)
                            }
                            g = null
                        }
                    else
                        g = null;
                    w !== null && Ku(f, y, w, g, !1),
                    v !== null && x !== null && Ku(f, x, v, g, !0)
                }
            }
            e: {
                if (y = c ? Cn(c) : window,
                w = y.nodeName && y.nodeName.toLowerCase(),
                w === "select" || w === "input" && y.type === "file")
                    var j = zy;
                else if ($u(y))
                    if (gf)
                        j = Ay;
                    else {
                        j = Dy;
                        var k = Iy
                    }
                else
                    (w = y.nodeName) && w.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (j = My);
                if (j && (j = j(e, c))) {
                    vf(f, j, n, d);
                    break e
                }
                k && k(e, y, c),
                e === "focusout" && (k = y._wrapperState) && k.controlled && y.type === "number" && al(y, "number", y.value)
            }
            switch (k = c ? Cn(c) : window,
            e) {
            case "focusin":
                ($u(k) || k.contentEditable === "true") && (On = k,
                wl = c,
                Or = null);
                break;
            case "focusout":
                Or = wl = On = null;
                break;
            case "mousedown":
                bl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                bl = !1,
                qu(f, n, d);
                break;
            case "selectionchange":
                if (Uy)
                    break;
            case "keydown":
            case "keyup":
                qu(f, n, d)
            }
            var T;
            if (za)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                    }
                    P = void 0
                }
            else
                _n ? mf(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P && (hf && n.locale !== "ko" && (_n || P !== "onCompositionStart" ? P === "onCompositionEnd" && _n && (T = pf()) : (It = d,
            Pa = "value"in It ? It.value : It.textContent,
            _n = !0)),
            k = io(c, P),
            0 < k.length && (P = new Du(P,e,null,n,d),
            f.push({
                event: P,
                listeners: k
            }),
            T ? P.data = T : (T = yf(n),
            T !== null && (P.data = T)))),
            (T = Ty ? Cy(e, n) : Py(e, n)) && (c = io(c, "onBeforeInput"),
            0 < c.length && (d = new Du("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: c
            }),
            d.data = T))
        }
        Of(f, t)
    })
}
function Hr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function io(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Dr(e, n),
        o != null && r.unshift(Hr(e, o, i)),
        o = Dr(e, t),
        o != null && r.push(Hr(e, o, i))),
        e = e.return
    }
    return r
}
function kn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ku(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , u = l.alternate
          , c = l.stateNode;
        if (u !== null && u === r)
            break;
        l.tag === 5 && c !== null && (l = c,
        i ? (u = Dr(n, o),
        u != null && s.unshift(Hr(n, u, l))) : i || (u = Dr(n, o),
        u != null && s.push(Hr(n, u, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var qy = /\r\n?/g
  , Vy = /\u0000|\uFFFD/g;
function Gu(e) {
    return (typeof e == "string" ? e : "" + e).replace(qy, `
`).replace(Vy, "")
}
function ki(e, t, n) {
    if (t = Gu(t),
    Gu(e) !== t && n)
        throw Error(_(425))
}
function oo() {}
var Sl = null
  , jl = null;
function kl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Nl = typeof setTimeout == "function" ? setTimeout : void 0
  , Qy = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Yu = typeof Promise == "function" ? Promise : void 0
  , Ky = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yu < "u" ? function(e) {
    return Yu.resolve(null).then(e).catch(Gy)
}
: Nl;
function Gy(e) {
    setTimeout(function() {
        throw e
    })
}
function Cs(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Fr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Fr(t)
}
function Bt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Xu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var or = Math.random().toString(36).slice(2)
  , ut = "__reactFiber$" + or
  , Wr = "__reactProps$" + or
  , St = "__reactContainer$" + or
  , El = "__reactEvents$" + or
  , Yy = "__reactListeners$" + or
  , Xy = "__reactHandles$" + or;
function rn(e) {
    var t = e[ut];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[St] || n[ut]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Xu(e); e !== null; ) {
                    if (n = e[ut])
                        return n;
                    e = Xu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ii(e) {
    return e = e[ut] || e[St],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Cn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(_(33))
}
function qo(e) {
    return e[Wr] || null
}
var _l = []
  , Pn = -1;
function Xt(e) {
    return {
        current: e
    }
}
function Y(e) {
    0 > Pn || (e.current = _l[Pn],
    _l[Pn] = null,
    Pn--)
}
function K(e, t) {
    Pn++,
    _l[Pn] = e.current,
    e.current = t
}
var Gt = {}
  , be = Xt(Gt)
  , Ce = Xt(!1)
  , dn = Gt;
function Vn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Gt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Pe(e) {
    return e = e.childContextTypes,
    e != null
}
function so() {
    Y(Ce),
    Y(be)
}
function Ju(e, t, n) {
    if (be.current !== Gt)
        throw Error(_(168));
    K(be, t),
    K(Ce, n)
}
function Cf(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(_(108, Im(e) || "Unknown", i));
    return ne({}, n, r)
}
function lo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Gt,
    dn = be.current,
    K(be, e),
    K(Ce, Ce.current),
    !0
}
function Zu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(_(169));
    n ? (e = Cf(e, t, dn),
    r.__reactInternalMemoizedMergedChildContext = e,
    Y(Ce),
    Y(be),
    K(be, e)) : Y(Ce),
    K(Ce, n)
}
var vt = null
  , Vo = !1
  , Ps = !1;
function Pf(e) {
    vt === null ? vt = [e] : vt.push(e)
}
function Jy(e) {
    Vo = !0,
    Pf(e)
}
function Jt() {
    if (!Ps && vt !== null) {
        Ps = !0;
        var e = 0
          , t = V;
        try {
            var n = vt;
            for (V = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            vt = null,
            Vo = !1
        } catch (i) {
            throw vt !== null && (vt = vt.slice(e + 1)),
            tf(_a, Jt),
            i
        } finally {
            V = t,
            Ps = !1
        }
    }
    return null
}
var Rn = []
  , Ln = 0
  , ao = null
  , uo = 0
  , qe = []
  , Ve = 0
  , fn = null
  , gt = 1
  , xt = "";
function tn(e, t) {
    Rn[Ln++] = uo,
    Rn[Ln++] = ao,
    ao = e,
    uo = t
}
function Rf(e, t, n) {
    qe[Ve++] = gt,
    qe[Ve++] = xt,
    qe[Ve++] = fn,
    fn = e;
    var r = gt;
    e = xt;
    var i = 32 - nt(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - nt(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        gt = 1 << 32 - nt(t) + i | n << i | r,
        xt = o + e
    } else
        gt = 1 << o | n << i | r,
        xt = e
}
function Da(e) {
    e.return !== null && (tn(e, 1),
    Rf(e, 1, 0))
}
function Ma(e) {
    for (; e === ao; )
        ao = Rn[--Ln],
        Rn[Ln] = null,
        uo = Rn[--Ln],
        Rn[Ln] = null;
    for (; e === fn; )
        fn = qe[--Ve],
        qe[Ve] = null,
        xt = qe[--Ve],
        qe[Ve] = null,
        gt = qe[--Ve],
        qe[Ve] = null
}
var Fe = null
  , Me = null
  , J = !1
  , tt = null;
function Lf(e, t) {
    var n = Qe(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function ec(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Fe = e,
        Me = Bt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Fe = e,
        Me = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = fn !== null ? {
            id: gt,
            overflow: xt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Qe(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Fe = e,
        Me = null,
        !0) : !1;
    default:
        return !1
    }
}
function Ol(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Tl(e) {
    if (J) {
        var t = Me;
        if (t) {
            var n = t;
            if (!ec(e, t)) {
                if (Ol(e))
                    throw Error(_(418));
                t = Bt(n.nextSibling);
                var r = Fe;
                t && ec(e, t) ? Lf(r, n) : (e.flags = e.flags & -4097 | 2,
                J = !1,
                Fe = e)
            }
        } else {
            if (Ol(e))
                throw Error(_(418));
            e.flags = e.flags & -4097 | 2,
            J = !1,
            Fe = e
        }
    }
}
function tc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Fe = e
}
function Ni(e) {
    if (e !== Fe)
        return !1;
    if (!J)
        return tc(e),
        J = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !kl(e.type, e.memoizedProps)),
    t && (t = Me)) {
        if (Ol(e))
            throw zf(),
            Error(_(418));
        for (; t; )
            Lf(e, t),
            t = Bt(t.nextSibling)
    }
    if (tc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(_(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Me = Bt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Me = null
        }
    } else
        Me = Fe ? Bt(e.stateNode.nextSibling) : null;
    return !0
}
function zf() {
    for (var e = Me; e; )
        e = Bt(e.nextSibling)
}
function Qn() {
    Me = Fe = null,
    J = !1
}
function Aa(e) {
    tt === null ? tt = [e] : tt.push(e)
}
var Zy = Et.ReactCurrentBatchConfig;
function yr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(_(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(_(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var l = i.refs;
                s === null ? delete l[o] : l[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(_(284));
        if (!n._owner)
            throw Error(_(290, e))
    }
    return e
}
function Ei(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function nc(e) {
    var t = e._init;
    return t(e._payload)
}
function If(e) {
    function t(h, p) {
        if (e) {
            var m = h.deletions;
            m === null ? (h.deletions = [p],
            h.flags |= 16) : m.push(p)
        }
    }
    function n(h, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(h, p),
            p = p.sibling;
        return null
    }
    function r(h, p) {
        for (h = new Map; p !== null; )
            p.key !== null ? h.set(p.key, p) : h.set(p.index, p),
            p = p.sibling;
        return h
    }
    function i(h, p) {
        return h = Vt(h, p),
        h.index = 0,
        h.sibling = null,
        h
    }
    function o(h, p, m) {
        return h.index = m,
        e ? (m = h.alternate,
        m !== null ? (m = m.index,
        m < p ? (h.flags |= 2,
        p) : m) : (h.flags |= 2,
        p)) : (h.flags |= 1048576,
        p)
    }
    function s(h) {
        return e && h.alternate === null && (h.flags |= 2),
        h
    }
    function l(h, p, m, b) {
        return p === null || p.tag !== 6 ? (p = As(m, h.mode, b),
        p.return = h,
        p) : (p = i(p, m),
        p.return = h,
        p)
    }
    function u(h, p, m, b) {
        var j = m.type;
        return j === En ? d(h, p, m.props.children, b, m.key) : p !== null && (p.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Tt && nc(j) === p.type) ? (b = i(p, m.props),
        b.ref = yr(h, p, m),
        b.return = h,
        b) : (b = Wi(m.type, m.key, m.props, null, h.mode, b),
        b.ref = yr(h, p, m),
        b.return = h,
        b)
    }
    function c(h, p, m, b) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = Fs(m, h.mode, b),
        p.return = h,
        p) : (p = i(p, m.children || []),
        p.return = h,
        p)
    }
    function d(h, p, m, b, j) {
        return p === null || p.tag !== 7 ? (p = un(m, h.mode, b, j),
        p.return = h,
        p) : (p = i(p, m),
        p.return = h,
        p)
    }
    function f(h, p, m) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = As("" + p, h.mode, m),
            p.return = h,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case mi:
                return m = Wi(p.type, p.key, p.props, null, h.mode, m),
                m.ref = yr(h, null, p),
                m.return = h,
                m;
            case Nn:
                return p = Fs(p, h.mode, m),
                p.return = h,
                p;
            case Tt:
                var b = p._init;
                return f(h, b(p._payload), m)
            }
            if (br(p) || dr(p))
                return p = un(p, h.mode, m, null),
                p.return = h,
                p;
            Ei(h, p)
        }
        return null
    }
    function y(h, p, m, b) {
        var j = p !== null ? p.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return j !== null ? null : l(h, p, "" + m, b);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case mi:
                return m.key === j ? u(h, p, m, b) : null;
            case Nn:
                return m.key === j ? c(h, p, m, b) : null;
            case Tt:
                return j = m._init,
                y(h, p, j(m._payload), b)
            }
            if (br(m) || dr(m))
                return j !== null ? null : d(h, p, m, b, null);
            Ei(h, m)
        }
        return null
    }
    function w(h, p, m, b, j) {
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return h = h.get(m) || null,
            l(p, h, "" + b, j);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case mi:
                return h = h.get(b.key === null ? m : b.key) || null,
                u(p, h, b, j);
            case Nn:
                return h = h.get(b.key === null ? m : b.key) || null,
                c(p, h, b, j);
            case Tt:
                var k = b._init;
                return w(h, p, m, k(b._payload), j)
            }
            if (br(b) || dr(b))
                return h = h.get(m) || null,
                d(p, h, b, j, null);
            Ei(p, b)
        }
        return null
    }
    function v(h, p, m, b) {
        for (var j = null, k = null, T = p, P = p = 0, O = null; T !== null && P < m.length; P++) {
            T.index > P ? (O = T,
            T = null) : O = T.sibling;
            var E = y(h, T, m[P], b);
            if (E === null) {
                T === null && (T = O);
                break
            }
            e && T && E.alternate === null && t(h, T),
            p = o(E, p, P),
            k === null ? j = E : k.sibling = E,
            k = E,
            T = O
        }
        if (P === m.length)
            return n(h, T),
            J && tn(h, P),
            j;
        if (T === null) {
            for (; P < m.length; P++)
                T = f(h, m[P], b),
                T !== null && (p = o(T, p, P),
                k === null ? j = T : k.sibling = T,
                k = T);
            return J && tn(h, P),
            j
        }
        for (T = r(h, T); P < m.length; P++)
            O = w(T, h, P, m[P], b),
            O !== null && (e && O.alternate !== null && T.delete(O.key === null ? P : O.key),
            p = o(O, p, P),
            k === null ? j = O : k.sibling = O,
            k = O);
        return e && T.forEach(function(M) {
            return t(h, M)
        }),
        J && tn(h, P),
        j
    }
    function g(h, p, m, b) {
        var j = dr(m);
        if (typeof j != "function")
            throw Error(_(150));
        if (m = j.call(m),
        m == null)
            throw Error(_(151));
        for (var k = j = null, T = p, P = p = 0, O = null, E = m.next(); T !== null && !E.done; P++,
        E = m.next()) {
            T.index > P ? (O = T,
            T = null) : O = T.sibling;
            var M = y(h, T, E.value, b);
            if (M === null) {
                T === null && (T = O);
                break
            }
            e && T && M.alternate === null && t(h, T),
            p = o(M, p, P),
            k === null ? j = M : k.sibling = M,
            k = M,
            T = O
        }
        if (E.done)
            return n(h, T),
            J && tn(h, P),
            j;
        if (T === null) {
            for (; !E.done; P++,
            E = m.next())
                E = f(h, E.value, b),
                E !== null && (p = o(E, p, P),
                k === null ? j = E : k.sibling = E,
                k = E);
            return J && tn(h, P),
            j
        }
        for (T = r(h, T); !E.done; P++,
        E = m.next())
            E = w(T, h, P, E.value, b),
            E !== null && (e && E.alternate !== null && T.delete(E.key === null ? P : E.key),
            p = o(E, p, P),
            k === null ? j = E : k.sibling = E,
            k = E);
        return e && T.forEach(function(z) {
            return t(h, z)
        }),
        J && tn(h, P),
        j
    }
    function x(h, p, m, b) {
        if (typeof m == "object" && m !== null && m.type === En && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case mi:
                e: {
                    for (var j = m.key, k = p; k !== null; ) {
                        if (k.key === j) {
                            if (j = m.type,
                            j === En) {
                                if (k.tag === 7) {
                                    n(h, k.sibling),
                                    p = i(k, m.props.children),
                                    p.return = h,
                                    h = p;
                                    break e
                                }
                            } else if (k.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Tt && nc(j) === k.type) {
                                n(h, k.sibling),
                                p = i(k, m.props),
                                p.ref = yr(h, k, m),
                                p.return = h,
                                h = p;
                                break e
                            }
                            n(h, k);
                            break
                        } else
                            t(h, k);
                        k = k.sibling
                    }
                    m.type === En ? (p = un(m.props.children, h.mode, b, m.key),
                    p.return = h,
                    h = p) : (b = Wi(m.type, m.key, m.props, null, h.mode, b),
                    b.ref = yr(h, p, m),
                    b.return = h,
                    h = b)
                }
                return s(h);
            case Nn:
                e: {
                    for (k = m.key; p !== null; ) {
                        if (p.key === k)
                            if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                n(h, p.sibling),
                                p = i(p, m.children || []),
                                p.return = h,
                                h = p;
                                break e
                            } else {
                                n(h, p);
                                break
                            }
                        else
                            t(h, p);
                        p = p.sibling
                    }
                    p = Fs(m, h.mode, b),
                    p.return = h,
                    h = p
                }
                return s(h);
            case Tt:
                return k = m._init,
                x(h, p, k(m._payload), b)
            }
            if (br(m))
                return v(h, p, m, b);
            if (dr(m))
                return g(h, p, m, b);
            Ei(h, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        p !== null && p.tag === 6 ? (n(h, p.sibling),
        p = i(p, m),
        p.return = h,
        h = p) : (n(h, p),
        p = As(m, h.mode, b),
        p.return = h,
        h = p),
        s(h)) : n(h, p)
    }
    return x
}
var Kn = If(!0)
  , Df = If(!1)
  , co = Xt(null)
  , fo = null
  , zn = null
  , Fa = null;
function $a() {
    Fa = zn = fo = null
}
function Ua(e) {
    var t = co.current;
    Y(co),
    e._currentValue = t
}
function Cl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Un(e, t) {
    fo = e,
    Fa = zn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0),
    e.firstContext = null)
}
function Ge(e) {
    var t = e._currentValue;
    if (Fa !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        zn === null) {
            if (fo === null)
                throw Error(_(308));
            zn = e,
            fo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            zn = zn.next = e;
    return t
}
var on = null;
function Ba(e) {
    on === null ? on = [e] : on.push(e)
}
function Mf(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Ba(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    jt(e, r)
}
function jt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ct = !1;
function Ha(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Af(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function wt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Ht(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    q & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        jt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Ba(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    jt(e, n)
}
function Ai(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Oa(e, n)
    }
}
function rc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function po(e, t, n, r) {
    var i = e.updateQueue;
    Ct = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var u = l
          , c = u.next;
        u.next = null,
        s === null ? o = c : s.next = c,
        s = u;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== s && (l === null ? d.firstBaseUpdate = c : l.next = c,
        d.lastBaseUpdate = u))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0,
        d = c = u = null,
        l = o;
        do {
            var y = l.lane
              , w = l.eventTime;
            if ((r & y) === y) {
                d !== null && (d = d.next = {
                    eventTime: w,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e
                      , g = l;
                    switch (y = t,
                    w = n,
                    g.tag) {
                    case 1:
                        if (v = g.payload,
                        typeof v == "function") {
                            f = v.call(w, f, y);
                            break e
                        }
                        f = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = g.payload,
                        y = typeof v == "function" ? v.call(w, f, y) : v,
                        y == null)
                            break e;
                        f = ne({}, f, y);
                        break e;
                    case 2:
                        Ct = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                y = i.effects,
                y === null ? i.effects = [l] : y.push(l))
            } else
                w = {
                    eventTime: w,
                    lane: y,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (c = d = w,
                u = f) : d = d.next = w,
                s |= y;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                y = l,
                l = y.next,
                y.next = null,
                i.lastBaseUpdate = y,
                i.shared.pending = null
            }
        } while (!0);
        if (d === null && (u = f),
        i.baseState = u,
        i.firstBaseUpdate = c,
        i.lastBaseUpdate = d,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        hn |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function ic(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(_(191, i));
                i.call(r)
            }
        }
}
var oi = {}
  , dt = Xt(oi)
  , qr = Xt(oi)
  , Vr = Xt(oi);
function sn(e) {
    if (e === oi)
        throw Error(_(174));
    return e
}
function Wa(e, t) {
    switch (K(Vr, t),
    K(qr, e),
    K(dt, oi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : cl(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = cl(t, e)
    }
    Y(dt),
    K(dt, t)
}
function Gn() {
    Y(dt),
    Y(qr),
    Y(Vr)
}
function Ff(e) {
    sn(Vr.current);
    var t = sn(dt.current)
      , n = cl(t, e.type);
    t !== n && (K(qr, e),
    K(dt, n))
}
function qa(e) {
    qr.current === e && (Y(dt),
    Y(qr))
}
var ee = Xt(0);
function ho(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Rs = [];
function Va() {
    for (var e = 0; e < Rs.length; e++)
        Rs[e]._workInProgressVersionPrimary = null;
    Rs.length = 0
}
var Fi = Et.ReactCurrentDispatcher
  , Ls = Et.ReactCurrentBatchConfig
  , pn = 0
  , te = null
  , de = null
  , pe = null
  , mo = !1
  , Tr = !1
  , Qr = 0
  , ev = 0;
function ge() {
    throw Error(_(321))
}
function Qa(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!it(e[n], t[n]))
            return !1;
    return !0
}
function Ka(e, t, n, r, i, o) {
    if (pn = o,
    te = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Fi.current = e === null || e.memoizedState === null ? iv : ov,
    e = n(r, i),
    Tr) {
        o = 0;
        do {
            if (Tr = !1,
            Qr = 0,
            25 <= o)
                throw Error(_(301));
            o += 1,
            pe = de = null,
            t.updateQueue = null,
            Fi.current = sv,
            e = n(r, i)
        } while (Tr)
    }
    if (Fi.current = yo,
    t = de !== null && de.next !== null,
    pn = 0,
    pe = de = te = null,
    mo = !1,
    t)
        throw Error(_(300));
    return e
}
function Ga() {
    var e = Qr !== 0;
    return Qr = 0,
    e
}
function at() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return pe === null ? te.memoizedState = pe = e : pe = pe.next = e,
    pe
}
function Ye() {
    if (de === null) {
        var e = te.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = de.next;
    var t = pe === null ? te.memoizedState : pe.next;
    if (t !== null)
        pe = t,
        de = e;
    else {
        if (e === null)
            throw Error(_(310));
        de = e,
        e = {
            memoizedState: de.memoizedState,
            baseState: de.baseState,
            baseQueue: de.baseQueue,
            queue: de.queue,
            next: null
        },
        pe === null ? te.memoizedState = pe = e : pe = pe.next = e
    }
    return pe
}
function Kr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function zs(e) {
    var t = Ye()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = de
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var l = s = null
          , u = null
          , c = o;
        do {
            var d = c.lane;
            if ((pn & d) === d)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var f = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (l = u = f,
                s = r) : u = u.next = f,
                te.lanes |= d,
                hn |= d
            }
            c = c.next
        } while (c !== null && c !== o);
        u === null ? s = r : u.next = l,
        it(r, t.memoizedState) || (Te = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            te.lanes |= o,
            hn |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Is(e) {
    var t = Ye()
      , n = t.queue;
    if (n === null)
        throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        it(o, t.memoizedState) || (Te = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function $f() {}
function Uf(e, t) {
    var n = te
      , r = Ye()
      , i = t()
      , o = !it(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Te = !0),
    r = r.queue,
    Ya(Wf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || pe !== null && pe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Gr(9, Hf.bind(null, n, r, i, t), void 0, null),
        he === null)
            throw Error(_(349));
        pn & 30 || Bf(n, t, i)
    }
    return i
}
function Bf(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = te.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    te.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Hf(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    qf(t) && Vf(e)
}
function Wf(e, t, n) {
    return n(function() {
        qf(t) && Vf(e)
    })
}
function qf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !it(e, n)
    } catch {
        return !0
    }
}
function Vf(e) {
    var t = jt(e, 1);
    t !== null && rt(t, e, 1, -1)
}
function oc(e) {
    var t = at();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = rv.bind(null, te, e),
    [t.memoizedState, e]
}
function Gr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = te.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    te.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Qf() {
    return Ye().memoizedState
}
function $i(e, t, n, r) {
    var i = at();
    te.flags |= e,
    i.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Qo(e, t, n, r) {
    var i = Ye();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (de !== null) {
        var s = de.memoizedState;
        if (o = s.destroy,
        r !== null && Qa(r, s.deps)) {
            i.memoizedState = Gr(t, n, o, r);
            return
        }
    }
    te.flags |= e,
    i.memoizedState = Gr(1 | t, n, o, r)
}
function sc(e, t) {
    return $i(8390656, 8, e, t)
}
function Ya(e, t) {
    return Qo(2048, 8, e, t)
}
function Kf(e, t) {
    return Qo(4, 2, e, t)
}
function Gf(e, t) {
    return Qo(4, 4, e, t)
}
function Yf(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Xf(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Qo(4, 4, Yf.bind(null, t, e), n)
}
function Xa() {}
function Jf(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qa(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Zf(e, t) {
    var n = Ye();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Qa(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function ep(e, t, n) {
    return pn & 21 ? (it(n, t) || (n = of(),
    te.lanes |= n,
    hn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Te = !0),
    e.memoizedState = n)
}
function tv(e, t) {
    var n = V;
    V = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Ls.transition;
    Ls.transition = {};
    try {
        e(!1),
        t()
    } finally {
        V = n,
        Ls.transition = r
    }
}
function tp() {
    return Ye().memoizedState
}
function nv(e, t, n) {
    var r = qt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    np(e))
        rp(t, n);
    else if (n = Mf(e, t, n, r),
    n !== null) {
        var i = ke();
        rt(n, e, r, i),
        ip(n, t, r)
    }
}
function rv(e, t, n) {
    var r = qt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (np(e))
        rp(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , l = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                it(l, s)) {
                    var u = t.interleaved;
                    u === null ? (i.next = i,
                    Ba(t)) : (i.next = u.next,
                    u.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Mf(e, t, i, r),
        n !== null && (i = ke(),
        rt(n, e, r, i),
        ip(n, t, r))
    }
}
function np(e) {
    var t = e.alternate;
    return e === te || t !== null && t === te
}
function rp(e, t) {
    Tr = mo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function ip(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Oa(e, n)
    }
}
var yo = {
    readContext: Ge,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1
}
  , iv = {
    readContext: Ge,
    useCallback: function(e, t) {
        return at().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Ge,
    useEffect: sc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        $i(4194308, 4, Yf.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return $i(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return $i(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = at();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = at();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = nv.bind(null, te, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = at();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: oc,
    useDebugValue: Xa,
    useDeferredValue: function(e) {
        return at().memoizedState = e
    },
    useTransition: function() {
        var e = oc(!1)
          , t = e[0];
        return e = tv.bind(null, e[1]),
        at().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = te
          , i = at();
        if (J) {
            if (n === void 0)
                throw Error(_(407));
            n = n()
        } else {
            if (n = t(),
            he === null)
                throw Error(_(349));
            pn & 30 || Bf(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        sc(Wf.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Gr(9, Hf.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = at()
          , t = he.identifierPrefix;
        if (J) {
            var n = xt
              , r = gt;
            n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Qr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = ev++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , ov = {
    readContext: Ge,
    useCallback: Jf,
    useContext: Ge,
    useEffect: Ya,
    useImperativeHandle: Xf,
    useInsertionEffect: Kf,
    useLayoutEffect: Gf,
    useMemo: Zf,
    useReducer: zs,
    useRef: Qf,
    useState: function() {
        return zs(Kr)
    },
    useDebugValue: Xa,
    useDeferredValue: function(e) {
        var t = Ye();
        return ep(t, de.memoizedState, e)
    },
    useTransition: function() {
        var e = zs(Kr)[0]
          , t = Ye().memoizedState;
        return [e, t]
    },
    useMutableSource: $f,
    useSyncExternalStore: Uf,
    useId: tp,
    unstable_isNewReconciler: !1
}
  , sv = {
    readContext: Ge,
    useCallback: Jf,
    useContext: Ge,
    useEffect: Ya,
    useImperativeHandle: Xf,
    useInsertionEffect: Kf,
    useLayoutEffect: Gf,
    useMemo: Zf,
    useReducer: Is,
    useRef: Qf,
    useState: function() {
        return Is(Kr)
    },
    useDebugValue: Xa,
    useDeferredValue: function(e) {
        var t = Ye();
        return de === null ? t.memoizedState = e : ep(t, de.memoizedState, e)
    },
    useTransition: function() {
        var e = Is(Kr)[0]
          , t = Ye().memoizedState;
        return [e, t]
    },
    useMutableSource: $f,
    useSyncExternalStore: Uf,
    useId: tp,
    unstable_isNewReconciler: !1
};
function Ze(e, t) {
    if (e && e.defaultProps) {
        t = ne({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Pl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ne({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ko = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? xn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ke()
          , i = qt(e)
          , o = wt(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Ht(e, o, i),
        t !== null && (rt(t, e, i, r),
        Ai(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ke()
          , i = qt(e)
          , o = wt(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Ht(e, o, i),
        t !== null && (rt(t, e, i, r),
        Ai(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ke()
          , r = qt(e)
          , i = wt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Ht(e, i, r),
        t !== null && (rt(t, e, r, n),
        Ai(t, e, r))
    }
};
function lc(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Ur(n, r) || !Ur(i, o) : !0
}
function op(e, t, n) {
    var r = !1
      , i = Gt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Ge(o) : (i = Pe(t) ? dn : be.current,
    r = t.contextTypes,
    o = (r = r != null) ? Vn(e, i) : Gt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ko,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function ac(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ko.enqueueReplaceState(t, t.state, null)
}
function Rl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    Ha(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Ge(o) : (o = Pe(t) ? dn : be.current,
    i.context = Vn(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Pl(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Ko.enqueueReplaceState(i, i.state, null),
    po(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Yn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += zm(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Ds(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Ll(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var lv = typeof WeakMap == "function" ? WeakMap : Map;
function sp(e, t, n) {
    n = wt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        go || (go = !0,
        Hl = r),
        Ll(e, t)
    }
    ,
    n
}
function lp(e, t, n) {
    n = wt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Ll(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Ll(e, t),
        typeof r != "function" && (Wt === null ? Wt = new Set([this]) : Wt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function uc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new lv;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = bv.bind(null, e, t, n),
    t.then(e, e))
}
function cc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function dc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = wt(-1, 1),
    t.tag = 2,
    Ht(n, t, 1))),
    n.lanes |= 1),
    e)
}
var av = Et.ReactCurrentOwner
  , Te = !1;
function je(e, t, n, r) {
    t.child = e === null ? Df(t, null, n, r) : Kn(t, e.child, n, r)
}
function fc(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Un(t, i),
    r = Ka(e, t, n, r, o, i),
    n = Ga(),
    e !== null && !Te ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    kt(e, t, i)) : (J && n && Da(t),
    t.flags |= 1,
    je(e, t, r, i),
    t.child)
}
function pc(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !ou(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        ap(e, t, o, r, i)) : (e = Wi(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Ur,
        n(s, r) && e.ref === t.ref)
            return kt(e, t, i)
    }
    return t.flags |= 1,
    e = Vt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function ap(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Ur(o, r) && e.ref === t.ref)
            if (Te = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Te = !0);
            else
                return t.lanes = e.lanes,
                kt(e, t, i)
    }
    return zl(e, t, n, r, i)
}
function up(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            K(Dn, De),
            De |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                K(Dn, De),
                De |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            K(Dn, De),
            De |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        K(Dn, De),
        De |= r;
    return je(e, t, i, n),
    t.child
}
function cp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function zl(e, t, n, r, i) {
    var o = Pe(n) ? dn : be.current;
    return o = Vn(t, o),
    Un(t, i),
    n = Ka(e, t, n, r, o, i),
    r = Ga(),
    e !== null && !Te ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    kt(e, t, i)) : (J && r && Da(t),
    t.flags |= 1,
    je(e, t, n, i),
    t.child)
}
function hc(e, t, n, r, i) {
    if (Pe(n)) {
        var o = !0;
        lo(t)
    } else
        o = !1;
    if (Un(t, i),
    t.stateNode === null)
        Ui(e, t),
        op(t, n, r),
        Rl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var u = s.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = Ge(c) : (c = Pe(n) ? dn : be.current,
        c = Vn(t, c));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || u !== c) && ac(t, s, r, c),
        Ct = !1;
        var y = t.memoizedState;
        s.state = y,
        po(t, r, s, i),
        u = t.memoizedState,
        l !== r || y !== u || Ce.current || Ct ? (typeof d == "function" && (Pl(t, n, d, r),
        u = t.memoizedState),
        (l = Ct || lc(t, n, l, r, y, u, c)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        s.props = r,
        s.state = u,
        s.context = c,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Af(e, t),
        l = t.memoizedProps,
        c = t.type === t.elementType ? l : Ze(t.type, l),
        s.props = c,
        f = t.pendingProps,
        y = s.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = Ge(u) : (u = Pe(n) ? dn : be.current,
        u = Vn(t, u));
        var w = n.getDerivedStateFromProps;
        (d = typeof w == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || y !== u) && ac(t, s, r, u),
        Ct = !1,
        y = t.memoizedState,
        s.state = y,
        po(t, r, s, i);
        var v = t.memoizedState;
        l !== f || y !== v || Ce.current || Ct ? (typeof w == "function" && (Pl(t, n, w, r),
        v = t.memoizedState),
        (c = Ct || lc(t, n, c, r, y, v, u) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, u),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, u)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        s.props = r,
        s.state = v,
        s.context = u,
        r = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Il(e, t, n, r, o, i)
}
function Il(e, t, n, r, i, o) {
    cp(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && Zu(t, n, !1),
        kt(e, t, o);
    r = t.stateNode,
    av.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Kn(t, e.child, null, o),
    t.child = Kn(t, null, l, o)) : je(e, t, l, o),
    t.memoizedState = r.state,
    i && Zu(t, n, !0),
    t.child
}
function dp(e) {
    var t = e.stateNode;
    t.pendingContext ? Ju(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ju(e, t.context, !1),
    Wa(e, t.containerInfo)
}
function mc(e, t, n, r, i) {
    return Qn(),
    Aa(i),
    t.flags |= 256,
    je(e, t, n, r),
    t.child
}
var Dl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ml(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function fp(e, t, n) {
    var r = t.pendingProps, i = ee.current, o = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    K(ee, i & 1),
    e === null)
        return Tl(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = Xo(s, r, 0, null),
        e = un(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Ml(n),
        t.memoizedState = Dl,
        e) : Ja(t, s));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return uv(e, t, s, r, l, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        l = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = Vt(i, u),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? o = Vt(l, o) : (o = un(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? Ml(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Dl,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = Vt(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ja(e, t) {
    return t = Xo({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function _i(e, t, n, r) {
    return r !== null && Aa(r),
    Kn(t, e.child, null, n),
    e = Ja(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function uv(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Ds(Error(_(422))),
        _i(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = Xo({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = un(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && Kn(t, e.child, null, s),
        t.child.memoizedState = Ml(s),
        t.memoizedState = Dl,
        o);
    if (!(t.mode & 1))
        return _i(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        o = Error(_(419)),
        r = Ds(o, r, void 0),
        _i(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Te || l) {
        if (r = he,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            jt(e, i),
            rt(r, e, i, -1))
        }
        return iu(),
        r = Ds(Error(_(421))),
        _i(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Sv.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    Me = Bt(i.nextSibling),
    Fe = t,
    J = !0,
    tt = null,
    e !== null && (qe[Ve++] = gt,
    qe[Ve++] = xt,
    qe[Ve++] = fn,
    gt = e.id,
    xt = e.overflow,
    fn = t),
    t = Ja(t, r.children),
    t.flags |= 4096,
    t)
}
function yc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Cl(e.return, t, n)
}
function Ms(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function pp(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (je(e, t, r.children, n),
    r = ee.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && yc(e, n, t);
                else if (e.tag === 19)
                    yc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (K(ee, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && ho(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Ms(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && ho(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Ms(t, !0, n, null, o);
            break;
        case "together":
            Ms(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ui(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function kt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    hn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(_(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Vt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Vt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function cv(e, t, n) {
    switch (t.tag) {
    case 3:
        dp(t),
        Qn();
        break;
    case 5:
        Ff(t);
        break;
    case 1:
        Pe(t.type) && lo(t);
        break;
    case 4:
        Wa(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        K(co, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (K(ee, ee.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? fp(e, t, n) : (K(ee, ee.current & 1),
            e = kt(e, t, n),
            e !== null ? e.sibling : null);
        K(ee, ee.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return pp(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        K(ee, ee.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        up(e, t, n)
    }
    return kt(e, t, n)
}
var hp, Al, mp, yp;
hp = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Al = function() {}
;
mp = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        sn(dt.current);
        var o = null;
        switch (n) {
        case "input":
            i = sl(e, i),
            r = sl(e, r),
            o = [];
            break;
        case "select":
            i = ne({}, i, {
                value: void 0
            }),
            r = ne({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = ul(e, i),
            r = ul(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = oo)
        }
        dl(n, r);
        var s;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var l = i[c];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (zr.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (l = i != null ? i[c] : void 0,
            r.hasOwnProperty(c) && u !== l && (u != null || l != null))
                if (c === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in u)
                            u.hasOwnProperty(s) && l[s] !== u[s] && (n || (n = {}),
                            n[s] = u[s])
                    } else
                        n || (o || (o = []),
                        o.push(c, n)),
                        n = u;
                else
                    c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    l = l ? l.__html : void 0,
                    u != null && l !== u && (o = o || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (zr.hasOwnProperty(c) ? (u != null && c === "onScroll" && G("scroll", e),
                    o || l === u || (o = [])) : (o = o || []).push(c, u))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
yp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function vr(e, t) {
    if (!J)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function xe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function dv(e, t, n) {
    var r = t.pendingProps;
    switch (Ma(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return xe(t),
        null;
    case 1:
        return Pe(t.type) && so(),
        xe(t),
        null;
    case 3:
        return r = t.stateNode,
        Gn(),
        Y(Ce),
        Y(be),
        Va(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        tt !== null && (Vl(tt),
        tt = null))),
        Al(e, t),
        xe(t),
        null;
    case 5:
        qa(t);
        var i = sn(Vr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            mp(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(_(166));
                return xe(t),
                null
            }
            if (e = sn(dt.current),
            Ni(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[ut] = t,
                r[Wr] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    G("cancel", r),
                    G("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    G("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < jr.length; i++)
                        G(jr[i], r);
                    break;
                case "source":
                    G("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    G("error", r),
                    G("load", r);
                    break;
                case "details":
                    G("toggle", r);
                    break;
                case "input":
                    Nu(r, o),
                    G("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    G("invalid", r);
                    break;
                case "textarea":
                    _u(r, o),
                    G("invalid", r)
                }
                dl(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var l = o[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && ki(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && ki(r.textContent, l, e),
                        i = ["children", "" + l]) : zr.hasOwnProperty(s) && l != null && s === "onScroll" && G("scroll", r)
                    }
                switch (n) {
                case "input":
                    yi(r),
                    Eu(r, o, !0);
                    break;
                case "textarea":
                    yi(r),
                    Ou(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = oo)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Hd(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[ut] = t,
                e[Wr] = r,
                hp(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = fl(n, r),
                    n) {
                    case "dialog":
                        G("cancel", e),
                        G("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        G("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < jr.length; i++)
                            G(jr[i], e);
                        i = r;
                        break;
                    case "source":
                        G("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        G("error", e),
                        G("load", e),
                        i = r;
                        break;
                    case "details":
                        G("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Nu(e, r),
                        i = sl(e, r),
                        G("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = ne({}, r, {
                            value: void 0
                        }),
                        G("invalid", e);
                        break;
                    case "textarea":
                        _u(e, r),
                        i = ul(e, r),
                        G("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    dl(n, i),
                    l = i;
                    for (o in l)
                        if (l.hasOwnProperty(o)) {
                            var u = l[o];
                            o === "style" ? Vd(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && Wd(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Ir(e, u) : typeof u == "number" && Ir(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (zr.hasOwnProperty(o) ? u != null && o === "onScroll" && G("scroll", e) : u != null && Sa(e, o, u, s))
                        }
                    switch (n) {
                    case "input":
                        yi(e),
                        Eu(e, r, !1);
                        break;
                    case "textarea":
                        yi(e),
                        Ou(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Kt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? Mn(e, !!r.multiple, o, !1) : r.defaultValue != null && Mn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = oo)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return xe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            yp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(_(166));
            if (n = sn(Vr.current),
            sn(dt.current),
            Ni(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[ut] = t,
                (o = r.nodeValue !== n) && (e = Fe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ki(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ki(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[ut] = t,
                t.stateNode = r
        }
        return xe(t),
        null;
    case 13:
        if (Y(ee),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (J && Me !== null && t.mode & 1 && !(t.flags & 128))
                zf(),
                Qn(),
                t.flags |= 98560,
                o = !1;
            else if (o = Ni(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(_(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(_(317));
                    o[ut] = t
                } else
                    Qn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                xe(t),
                o = !1
            } else
                tt !== null && (Vl(tt),
                tt = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ee.current & 1 ? fe === 0 && (fe = 3) : iu())),
        t.updateQueue !== null && (t.flags |= 4),
        xe(t),
        null);
    case 4:
        return Gn(),
        Al(e, t),
        e === null && Br(t.stateNode.containerInfo),
        xe(t),
        null;
    case 10:
        return Ua(t.type._context),
        xe(t),
        null;
    case 17:
        return Pe(t.type) && so(),
        xe(t),
        null;
    case 19:
        if (Y(ee),
        o = t.memoizedState,
        o === null)
            return xe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                vr(o, !1);
            else {
                if (fe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = ho(e),
                        s !== null) {
                            for (t.flags |= 128,
                            vr(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return K(ee, ee.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && oe() > Xn && (t.flags |= 128,
                r = !0,
                vr(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ho(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    vr(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !J)
                        return xe(t),
                        null
                } else
                    2 * oe() - o.renderingStartTime > Xn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    vr(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = oe(),
        t.sibling = null,
        n = ee.current,
        K(ee, r ? n & 1 | 2 : n & 1),
        t) : (xe(t),
        null);
    case 22:
    case 23:
        return ru(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? De & 1073741824 && (xe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(_(156, t.tag))
}
function fv(e, t) {
    switch (Ma(t),
    t.tag) {
    case 1:
        return Pe(t.type) && so(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Gn(),
        Y(Ce),
        Y(be),
        Va(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return qa(t),
        null;
    case 13:
        if (Y(ee),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(_(340));
            Qn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Y(ee),
        null;
    case 4:
        return Gn(),
        null;
    case 10:
        return Ua(t.type._context),
        null;
    case 22:
    case 23:
        return ru(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Oi = !1
  , we = !1
  , pv = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function In(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                re(e, t, r)
            }
        else
            n.current = null
}
function Fl(e, t, n) {
    try {
        n()
    } catch (r) {
        re(e, t, r)
    }
}
var vc = !1;
function hv(e, t) {
    if (Sl = no,
    e = bf(),
    Ia(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , u = -1
                      , c = 0
                      , d = 0
                      , f = e
                      , y = null;
                    t: for (; ; ) {
                        for (var w; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (u = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (w = f.firstChild) !== null; )
                            y = f,
                            f = w;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (y === n && ++c === i && (l = s),
                            y === o && ++d === r && (u = s),
                            (w = f.nextSibling) !== null)
                                break;
                            f = y,
                            y = f.parentNode
                        }
                        f = w
                    }
                    n = l === -1 || u === -1 ? null : {
                        start: l,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (jl = {
        focusedElem: e,
        selectionRange: n
    },
    no = !1,
    L = t; L !== null; )
        if (t = L,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            L = e;
        else
            for (; L !== null; ) {
                t = L;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var g = v.memoizedProps
                                  , x = v.memoizedState
                                  , h = t.stateNode
                                  , p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Ze(t.type, g), x);
                                h.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(_(163))
                        }
                } catch (b) {
                    re(t, t.return, b)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    L = e;
                    break
                }
                L = t.return
            }
    return v = vc,
    vc = !1,
    v
}
function Cr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Fl(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function Go(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function $l(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function vp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    vp(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[ut],
    delete t[Wr],
    delete t[El],
    delete t[Yy],
    delete t[Xy])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function gp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function gc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || gp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ul(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = oo));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ul(e, t, n),
        e = e.sibling; e !== null; )
            Ul(e, t, n),
            e = e.sibling
}
function Bl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Bl(e, t, n),
        e = e.sibling; e !== null; )
            Bl(e, t, n),
            e = e.sibling
}
var me = null
  , et = !1;
function _t(e, t, n) {
    for (n = n.child; n !== null; )
        xp(e, t, n),
        n = n.sibling
}
function xp(e, t, n) {
    if (ct && typeof ct.onCommitFiberUnmount == "function")
        try {
            ct.onCommitFiberUnmount(Uo, n)
        } catch {}
    switch (n.tag) {
    case 5:
        we || In(n, t);
    case 6:
        var r = me
          , i = et;
        me = null,
        _t(e, t, n),
        me = r,
        et = i,
        me !== null && (et ? (e = me,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : me.removeChild(n.stateNode));
        break;
    case 18:
        me !== null && (et ? (e = me,
        n = n.stateNode,
        e.nodeType === 8 ? Cs(e.parentNode, n) : e.nodeType === 1 && Cs(e, n),
        Fr(e)) : Cs(me, n.stateNode));
        break;
    case 4:
        r = me,
        i = et,
        me = n.stateNode.containerInfo,
        et = !0,
        _t(e, t, n),
        me = r,
        et = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!we && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && Fl(n, t, s),
                i = i.next
            } while (i !== r)
        }
        _t(e, t, n);
        break;
    case 1:
        if (!we && (In(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                re(n, t, l)
            }
        _t(e, t, n);
        break;
    case 21:
        _t(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (we = (r = we) || n.memoizedState !== null,
        _t(e, t, n),
        we = r) : _t(e, t, n);
        break;
    default:
        _t(e, t, n)
    }
}
function xc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new pv),
        t.forEach(function(r) {
            var i = jv.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Xe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        me = l.stateNode,
                        et = !1;
                        break e;
                    case 3:
                        me = l.stateNode.containerInfo,
                        et = !0;
                        break e;
                    case 4:
                        me = l.stateNode.containerInfo,
                        et = !0;
                        break e
                    }
                    l = l.return
                }
                if (me === null)
                    throw Error(_(160));
                xp(o, s, i),
                me = null,
                et = !1;
                var u = i.alternate;
                u !== null && (u.return = null),
                i.return = null
            } catch (c) {
                re(i, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            wp(t, e),
            t = t.sibling
}
function wp(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Xe(t, e),
        lt(e),
        r & 4) {
            try {
                Cr(3, e, e.return),
                Go(3, e)
            } catch (g) {
                re(e, e.return, g)
            }
            try {
                Cr(5, e, e.return)
            } catch (g) {
                re(e, e.return, g)
            }
        }
        break;
    case 1:
        Xe(t, e),
        lt(e),
        r & 512 && n !== null && In(n, n.return);
        break;
    case 5:
        if (Xe(t, e),
        lt(e),
        r & 512 && n !== null && In(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Ir(i, "")
            } catch (g) {
                re(e, e.return, g)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , l = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    l === "input" && o.type === "radio" && o.name != null && Ud(i, o),
                    fl(l, s);
                    var c = fl(l, o);
                    for (s = 0; s < u.length; s += 2) {
                        var d = u[s]
                          , f = u[s + 1];
                        d === "style" ? Vd(i, f) : d === "dangerouslySetInnerHTML" ? Wd(i, f) : d === "children" ? Ir(i, f) : Sa(i, d, f, c)
                    }
                    switch (l) {
                    case "input":
                        ll(i, o);
                        break;
                    case "textarea":
                        Bd(i, o);
                        break;
                    case "select":
                        var y = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var w = o.value;
                        w != null ? Mn(i, !!o.multiple, w, !1) : y !== !!o.multiple && (o.defaultValue != null ? Mn(i, !!o.multiple, o.defaultValue, !0) : Mn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Wr] = o
                } catch (g) {
                    re(e, e.return, g)
                }
        }
        break;
    case 6:
        if (Xe(t, e),
        lt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(_(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (g) {
                re(e, e.return, g)
            }
        }
        break;
    case 3:
        if (Xe(t, e),
        lt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Fr(t.containerInfo)
            } catch (g) {
                re(e, e.return, g)
            }
        break;
    case 4:
        Xe(t, e),
        lt(e);
        break;
    case 13:
        Xe(t, e),
        lt(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (tu = oe())),
        r & 4 && xc(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (we = (c = we) || d,
        Xe(t, e),
        we = c) : Xe(t, e),
        lt(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for (L = e,
                d = e.child; d !== null; ) {
                    for (f = L = d; L !== null; ) {
                        switch (y = L,
                        w = y.child,
                        y.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Cr(4, y, y.return);
                            break;
                        case 1:
                            In(y, y.return);
                            var v = y.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = y,
                                n = y.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (g) {
                                    re(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            In(y, y.return);
                            break;
                        case 22:
                            if (y.memoizedState !== null) {
                                bc(f);
                                continue
                            }
                        }
                        w !== null ? (w.return = y,
                        L = w) : bc(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            i = f.stateNode,
                            c ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode,
                            u = f.memoizedProps.style,
                            s = u != null && u.hasOwnProperty("display") ? u.display : null,
                            l.style.display = qd("display", s))
                        } catch (g) {
                            re(e, e.return, g)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (g) {
                            re(e, e.return, g)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        Xe(t, e),
        lt(e),
        r & 4 && xc(e);
        break;
    case 21:
        break;
    default:
        Xe(t, e),
        lt(e)
    }
}
function lt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (gp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(_(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Ir(i, ""),
                r.flags &= -33);
                var o = gc(e);
                Bl(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = gc(e);
                Ul(e, l, s);
                break;
            default:
                throw Error(_(161))
            }
        } catch (u) {
            re(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function mv(e, t, n) {
    L = e,
    bp(e)
}
function bp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
        var i = L
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Oi;
            if (!s) {
                var l = i.alternate
                  , u = l !== null && l.memoizedState !== null || we;
                l = Oi;
                var c = we;
                if (Oi = s,
                (we = u) && !c)
                    for (L = i; L !== null; )
                        s = L,
                        u = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Sc(i) : u !== null ? (u.return = s,
                        L = u) : Sc(i);
                for (; o !== null; )
                    L = o,
                    bp(o),
                    o = o.sibling;
                L = i,
                Oi = l,
                we = c
            }
            wc(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            L = o) : wc(e)
    }
}
function wc(e) {
    for (; L !== null; ) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        we || Go(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !we)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ze(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && ic(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            ic(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && Fr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(_(163))
                    }
                we || t.flags & 512 && $l(t)
            } catch (y) {
                re(t, t.return, y)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function bc(e) {
    for (; L !== null; ) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function Sc(e) {
    for (; L !== null; ) {
        var t = L;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Go(4, t)
                } catch (u) {
                    re(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        re(t, i, u)
                    }
                }
                var o = t.return;
                try {
                    $l(t)
                } catch (u) {
                    re(t, o, u)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    $l(t)
                } catch (u) {
                    re(t, s, u)
                }
            }
        } catch (u) {
            re(t, t.return, u)
        }
        if (t === e) {
            L = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            L = l;
            break
        }
        L = t.return
    }
}
var yv = Math.ceil
  , vo = Et.ReactCurrentDispatcher
  , Za = Et.ReactCurrentOwner
  , Ke = Et.ReactCurrentBatchConfig
  , q = 0
  , he = null
  , ue = null
  , ye = 0
  , De = 0
  , Dn = Xt(0)
  , fe = 0
  , Yr = null
  , hn = 0
  , Yo = 0
  , eu = 0
  , Pr = null
  , Oe = null
  , tu = 0
  , Xn = 1 / 0
  , yt = null
  , go = !1
  , Hl = null
  , Wt = null
  , Ti = !1
  , Dt = null
  , xo = 0
  , Rr = 0
  , Wl = null
  , Bi = -1
  , Hi = 0;
function ke() {
    return q & 6 ? oe() : Bi !== -1 ? Bi : Bi = oe()
}
function qt(e) {
    return e.mode & 1 ? q & 2 && ye !== 0 ? ye & -ye : Zy.transition !== null ? (Hi === 0 && (Hi = of()),
    Hi) : (e = V,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : ff(e.type)),
    e) : 1
}
function rt(e, t, n, r) {
    if (50 < Rr)
        throw Rr = 0,
        Wl = null,
        Error(_(185));
    ni(e, n, r),
    (!(q & 2) || e !== he) && (e === he && (!(q & 2) && (Yo |= n),
    fe === 4 && Lt(e, ye)),
    Re(e, r),
    n === 1 && q === 0 && !(t.mode & 1) && (Xn = oe() + 500,
    Vo && Jt()))
}
function Re(e, t) {
    var n = e.callbackNode;
    Zm(e, t);
    var r = to(e, e === he ? ye : 0);
    if (r === 0)
        n !== null && Pu(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Pu(n),
        t === 1)
            e.tag === 0 ? Jy(jc.bind(null, e)) : Pf(jc.bind(null, e)),
            Ky(function() {
                !(q & 6) && Jt()
            }),
            n = null;
        else {
            switch (sf(r)) {
            case 1:
                n = _a;
                break;
            case 4:
                n = nf;
                break;
            case 16:
                n = eo;
                break;
            case 536870912:
                n = rf;
                break;
            default:
                n = eo
            }
            n = Tp(n, Sp.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Sp(e, t) {
    if (Bi = -1,
    Hi = 0,
    q & 6)
        throw Error(_(327));
    var n = e.callbackNode;
    if (Bn() && e.callbackNode !== n)
        return null;
    var r = to(e, e === he ? ye : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = wo(e, r);
    else {
        t = r;
        var i = q;
        q |= 2;
        var o = kp();
        (he !== e || ye !== t) && (yt = null,
        Xn = oe() + 500,
        an(e, t));
        do
            try {
                xv();
                break
            } catch (l) {
                jp(e, l)
            }
        while (!0);
        $a(),
        vo.current = o,
        q = i,
        ue !== null ? t = 0 : (he = null,
        ye = 0,
        t = fe)
    }
    if (t !== 0) {
        if (t === 2 && (i = vl(e),
        i !== 0 && (r = i,
        t = ql(e, i))),
        t === 1)
            throw n = Yr,
            an(e, 0),
            Lt(e, r),
            Re(e, oe()),
            n;
        if (t === 6)
            Lt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !vv(i) && (t = wo(e, r),
            t === 2 && (o = vl(e),
            o !== 0 && (r = o,
            t = ql(e, o))),
            t === 1))
                throw n = Yr,
                an(e, 0),
                Lt(e, r),
                Re(e, oe()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(_(345));
            case 2:
                nn(e, Oe, yt);
                break;
            case 3:
                if (Lt(e, r),
                (r & 130023424) === r && (t = tu + 500 - oe(),
                10 < t)) {
                    if (to(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        ke(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Nl(nn.bind(null, e, Oe, yt), t);
                    break
                }
                nn(e, Oe, yt);
                break;
            case 4:
                if (Lt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - nt(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = oe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yv(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Nl(nn.bind(null, e, Oe, yt), r);
                    break
                }
                nn(e, Oe, yt);
                break;
            case 5:
                nn(e, Oe, yt);
                break;
            default:
                throw Error(_(329))
            }
        }
    }
    return Re(e, oe()),
    e.callbackNode === n ? Sp.bind(null, e) : null
}
function ql(e, t) {
    var n = Pr;
    return e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    e = wo(e, t),
    e !== 2 && (t = Oe,
    Oe = n,
    t !== null && Vl(t)),
    e
}
function Vl(e) {
    Oe === null ? Oe = e : Oe.push.apply(Oe, e)
}
function vv(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!it(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Lt(e, t) {
    for (t &= ~eu,
    t &= ~Yo,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - nt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function jc(e) {
    if (q & 6)
        throw Error(_(327));
    Bn();
    var t = to(e, 0);
    if (!(t & 1))
        return Re(e, oe()),
        null;
    var n = wo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = vl(e);
        r !== 0 && (t = r,
        n = ql(e, r))
    }
    if (n === 1)
        throw n = Yr,
        an(e, 0),
        Lt(e, t),
        Re(e, oe()),
        n;
    if (n === 6)
        throw Error(_(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    nn(e, Oe, yt),
    Re(e, oe()),
    null
}
function nu(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n,
        q === 0 && (Xn = oe() + 500,
        Vo && Jt())
    }
}
function mn(e) {
    Dt !== null && Dt.tag === 0 && !(q & 6) && Bn();
    var t = q;
    q |= 1;
    var n = Ke.transition
      , r = V;
    try {
        if (Ke.transition = null,
        V = 1,
        e)
            return e()
    } finally {
        V = r,
        Ke.transition = n,
        q = t,
        !(q & 6) && Jt()
    }
}
function ru() {
    De = Dn.current,
    Y(Dn)
}
function an(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Qy(n)),
    ue !== null)
        for (n = ue.return; n !== null; ) {
            var r = n;
            switch (Ma(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && so();
                break;
            case 3:
                Gn(),
                Y(Ce),
                Y(be),
                Va();
                break;
            case 5:
                qa(r);
                break;
            case 4:
                Gn();
                break;
            case 13:
                Y(ee);
                break;
            case 19:
                Y(ee);
                break;
            case 10:
                Ua(r.type._context);
                break;
            case 22:
            case 23:
                ru()
            }
            n = n.return
        }
    if (he = e,
    ue = e = Vt(e.current, null),
    ye = De = t,
    fe = 0,
    Yr = null,
    eu = Yo = hn = 0,
    Oe = Pr = null,
    on !== null) {
        for (t = 0; t < on.length; t++)
            if (n = on[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        on = null
    }
    return e
}
function jp(e, t) {
    do {
        var n = ue;
        try {
            if ($a(),
            Fi.current = yo,
            mo) {
                for (var r = te.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                mo = !1
            }
            if (pn = 0,
            pe = de = te = null,
            Tr = !1,
            Qr = 0,
            Za.current = null,
            n === null || n.return === null) {
                fe = 1,
                Yr = t,
                ue = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , l = n
                  , u = t;
                if (t = ye,
                l.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u
                      , d = l
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var y = d.alternate;
                        y ? (d.updateQueue = y.updateQueue,
                        d.memoizedState = y.memoizedState,
                        d.lanes = y.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var w = cc(s);
                    if (w !== null) {
                        w.flags &= -257,
                        dc(w, s, l, o, t),
                        w.mode & 1 && uc(o, c, t),
                        t = w,
                        u = c;
                        var v = t.updateQueue;
                        if (v === null) {
                            var g = new Set;
                            g.add(u),
                            t.updateQueue = g
                        } else
                            v.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            uc(o, c, t),
                            iu();
                            break e
                        }
                        u = Error(_(426))
                    }
                } else if (J && l.mode & 1) {
                    var x = cc(s);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        dc(x, s, l, o, t),
                        Aa(Yn(u, l));
                        break e
                    }
                }
                o = u = Yn(u, l),
                fe !== 4 && (fe = 2),
                Pr === null ? Pr = [o] : Pr.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var h = sp(o, u, t);
                        rc(o, h);
                        break e;
                    case 1:
                        l = u;
                        var p = o.type
                          , m = o.stateNode;
                        if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Wt === null || !Wt.has(m)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var b = lp(o, l, t);
                            rc(o, b);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Ep(n)
        } catch (j) {
            t = j,
            ue === n && n !== null && (ue = n = n.return);
            continue
        }
        break
    } while (!0)
}
function kp() {
    var e = vo.current;
    return vo.current = yo,
    e === null ? yo : e
}
function iu() {
    (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    he === null || !(hn & 268435455) && !(Yo & 268435455) || Lt(he, ye)
}
function wo(e, t) {
    var n = q;
    q |= 2;
    var r = kp();
    (he !== e || ye !== t) && (yt = null,
    an(e, t));
    do
        try {
            gv();
            break
        } catch (i) {
            jp(e, i)
        }
    while (!0);
    if ($a(),
    q = n,
    vo.current = r,
    ue !== null)
        throw Error(_(261));
    return he = null,
    ye = 0,
    fe
}
function gv() {
    for (; ue !== null; )
        Np(ue)
}
function xv() {
    for (; ue !== null && !Wm(); )
        Np(ue)
}
function Np(e) {
    var t = Op(e.alternate, e, De);
    e.memoizedProps = e.pendingProps,
    t === null ? Ep(e) : ue = t,
    Za.current = null
}
function Ep(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = fv(n, t),
            n !== null) {
                n.flags &= 32767,
                ue = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                fe = 6,
                ue = null;
                return
            }
        } else if (n = dv(n, t, De),
        n !== null) {
            ue = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ue = t;
            return
        }
        ue = t = e
    } while (t !== null);
    fe === 0 && (fe = 5)
}
function nn(e, t, n) {
    var r = V
      , i = Ke.transition;
    try {
        Ke.transition = null,
        V = 1,
        wv(e, t, n, r)
    } finally {
        Ke.transition = i,
        V = r
    }
    return null
}
function wv(e, t, n, r) {
    do
        Bn();
    while (Dt !== null);
    if (q & 6)
        throw Error(_(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(_(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (ey(e, o),
    e === he && (ue = he = null,
    ye = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ti || (Ti = !0,
    Tp(eo, function() {
        return Bn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Ke.transition,
        Ke.transition = null;
        var s = V;
        V = 1;
        var l = q;
        q |= 4,
        Za.current = null,
        hv(e, n),
        wp(n, e),
        $y(jl),
        no = !!Sl,
        jl = Sl = null,
        e.current = n,
        mv(n),
        qm(),
        q = l,
        V = s,
        Ke.transition = o
    } else
        e.current = n;
    if (Ti && (Ti = !1,
    Dt = e,
    xo = i),
    o = e.pendingLanes,
    o === 0 && (Wt = null),
    Km(n.stateNode),
    Re(e, oe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (go)
        throw go = !1,
        e = Hl,
        Hl = null,
        e;
    return xo & 1 && e.tag !== 0 && Bn(),
    o = e.pendingLanes,
    o & 1 ? e === Wl ? Rr++ : (Rr = 0,
    Wl = e) : Rr = 0,
    Jt(),
    null
}
function Bn() {
    if (Dt !== null) {
        var e = sf(xo)
          , t = Ke.transition
          , n = V;
        try {
            if (Ke.transition = null,
            V = 16 > e ? 16 : e,
            Dt === null)
                var r = !1;
            else {
                if (e = Dt,
                Dt = null,
                xo = 0,
                q & 6)
                    throw Error(_(331));
                var i = q;
                for (q |= 4,
                L = e.current; L !== null; ) {
                    var o = L
                      , s = o.child;
                    if (L.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var u = 0; u < l.length; u++) {
                                var c = l[u];
                                for (L = c; L !== null; ) {
                                    var d = L;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Cr(8, d, o)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        L = f;
                                    else
                                        for (; L !== null; ) {
                                            d = L;
                                            var y = d.sibling
                                              , w = d.return;
                                            if (vp(d),
                                            d === c) {
                                                L = null;
                                                break
                                            }
                                            if (y !== null) {
                                                y.return = w,
                                                L = y;
                                                break
                                            }
                                            L = w
                                        }
                                }
                            }
                            var v = o.alternate;
                            if (v !== null) {
                                var g = v.child;
                                if (g !== null) {
                                    v.child = null;
                                    do {
                                        var x = g.sibling;
                                        g.sibling = null,
                                        g = x
                                    } while (g !== null)
                                }
                            }
                            L = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        L = s;
                    else
                        e: for (; L !== null; ) {
                            if (o = L,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Cr(9, o, o.return)
                                }
                            var h = o.sibling;
                            if (h !== null) {
                                h.return = o.return,
                                L = h;
                                break e
                            }
                            L = o.return
                        }
                }
                var p = e.current;
                for (L = p; L !== null; ) {
                    s = L;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null)
                        m.return = s,
                        L = m;
                    else
                        e: for (s = p; L !== null; ) {
                            if (l = L,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Go(9, l)
                                    }
                                } catch (j) {
                                    re(l, l.return, j)
                                }
                            if (l === s) {
                                L = null;
                                break e
                            }
                            var b = l.sibling;
                            if (b !== null) {
                                b.return = l.return,
                                L = b;
                                break e
                            }
                            L = l.return
                        }
                }
                if (q = i,
                Jt(),
                ct && typeof ct.onPostCommitFiberRoot == "function")
                    try {
                        ct.onPostCommitFiberRoot(Uo, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            V = n,
            Ke.transition = t
        }
    }
    return !1
}
function kc(e, t, n) {
    t = Yn(n, t),
    t = sp(e, t, 1),
    e = Ht(e, t, 1),
    t = ke(),
    e !== null && (ni(e, 1, t),
    Re(e, t))
}
function re(e, t, n) {
    if (e.tag === 3)
        kc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                kc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r))) {
                    e = Yn(n, e),
                    e = lp(t, e, 1),
                    t = Ht(t, e, 1),
                    e = ke(),
                    t !== null && (ni(t, 1, e),
                    Re(t, e));
                    break
                }
            }
            t = t.return
        }
}
function bv(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ke(),
    e.pingedLanes |= e.suspendedLanes & n,
    he === e && (ye & n) === n && (fe === 4 || fe === 3 && (ye & 130023424) === ye && 500 > oe() - tu ? an(e, 0) : eu |= n),
    Re(e, t)
}
function _p(e, t) {
    t === 0 && (e.mode & 1 ? (t = xi,
    xi <<= 1,
    !(xi & 130023424) && (xi = 4194304)) : t = 1);
    var n = ke();
    e = jt(e, t),
    e !== null && (ni(e, t, n),
    Re(e, n))
}
function Sv(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    _p(e, n)
}
function jv(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(_(314))
    }
    r !== null && r.delete(t),
    _p(e, n)
}
var Op;
Op = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ce.current)
            Te = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Te = !1,
                cv(e, t, n);
            Te = !!(e.flags & 131072)
        }
    else
        Te = !1,
        J && t.flags & 1048576 && Rf(t, uo, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ui(e, t),
        e = t.pendingProps;
        var i = Vn(t, be.current);
        Un(t, n),
        i = Ka(null, t, r, e, i, n);
        var o = Ga();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Pe(r) ? (o = !0,
        lo(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Ha(t),
        i.updater = Ko,
        t.stateNode = i,
        i._reactInternals = t,
        Rl(t, r, e, n),
        t = Il(null, t, r, !0, o, n)) : (t.tag = 0,
        J && o && Da(t),
        je(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ui(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = Nv(r),
            e = Ze(r, e),
            i) {
            case 0:
                t = zl(null, t, r, e, n);
                break e;
            case 1:
                t = hc(null, t, r, e, n);
                break e;
            case 11:
                t = fc(null, t, r, e, n);
                break e;
            case 14:
                t = pc(null, t, r, Ze(r.type, e), n);
                break e
            }
            throw Error(_(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ze(r, i),
        zl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ze(r, i),
        hc(e, t, r, i, n);
    case 3:
        e: {
            if (dp(t),
            e === null)
                throw Error(_(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            Af(e, t),
            po(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = Yn(Error(_(423)), t),
                    t = mc(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Yn(Error(_(424)), t),
                    t = mc(e, t, r, n, i);
                    break e
                } else
                    for (Me = Bt(t.stateNode.containerInfo.firstChild),
                    Fe = t,
                    J = !0,
                    tt = null,
                    n = Df(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Qn(),
                r === i) {
                    t = kt(e, t, n);
                    break e
                }
                je(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Ff(t),
        e === null && Tl(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        kl(r, i) ? s = null : o !== null && kl(r, o) && (t.flags |= 32),
        cp(e, t),
        je(e, t, s, n),
        t.child;
    case 6:
        return e === null && Tl(t),
        null;
    case 13:
        return fp(e, t, n);
    case 4:
        return Wa(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Kn(t, null, r, n) : je(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ze(r, i),
        fc(e, t, r, i, n);
    case 7:
        return je(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return je(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return je(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            K(co, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (it(o.value, s)) {
                    if (o.children === i.children && !Ce.current) {
                        t = kt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var l = o.dependencies;
                        if (l !== null) {
                            s = o.child;
                            for (var u = l.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (o.tag === 1) {
                                        u = wt(-1, n & -n),
                                        u.tag = 2;
                                        var c = o.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? u.next = u : (u.next = d.next,
                                            d.next = u),
                                            c.pending = u
                                        }
                                    }
                                    o.lanes |= n,
                                    u = o.alternate,
                                    u !== null && (u.lanes |= n),
                                    Cl(o.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(_(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            Cl(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            je(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Un(t, n),
        i = Ge(i),
        r = r(i),
        t.flags |= 1,
        je(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Ze(r, t.pendingProps),
        i = Ze(r.type, i),
        pc(e, t, r, i, n);
    case 15:
        return ap(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ze(r, i),
        Ui(e, t),
        t.tag = 1,
        Pe(r) ? (e = !0,
        lo(t)) : e = !1,
        Un(t, n),
        op(t, r, i),
        Rl(t, r, i, n),
        Il(null, t, r, !0, e, n);
    case 19:
        return pp(e, t, n);
    case 22:
        return up(e, t, n)
    }
    throw Error(_(156, t.tag))
}
;
function Tp(e, t) {
    return tf(e, t)
}
function kv(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Qe(e, t, n, r) {
    return new kv(e,t,n,r)
}
function ou(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Nv(e) {
    if (typeof e == "function")
        return ou(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === ka)
            return 11;
        if (e === Na)
            return 14
    }
    return 2
}
function Vt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Qe(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Wi(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        ou(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case En:
            return un(n.children, i, o, t);
        case ja:
            s = 8,
            i |= 8;
            break;
        case nl:
            return e = Qe(12, n, t, i | 2),
            e.elementType = nl,
            e.lanes = o,
            e;
        case rl:
            return e = Qe(13, n, t, i),
            e.elementType = rl,
            e.lanes = o,
            e;
        case il:
            return e = Qe(19, n, t, i),
            e.elementType = il,
            e.lanes = o,
            e;
        case Ad:
            return Xo(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Dd:
                    s = 10;
                    break e;
                case Md:
                    s = 9;
                    break e;
                case ka:
                    s = 11;
                    break e;
                case Na:
                    s = 14;
                    break e;
                case Tt:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(_(130, e == null ? e : typeof e, ""))
        }
    return t = Qe(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function un(e, t, n, r) {
    return e = Qe(7, e, r, t),
    e.lanes = n,
    e
}
function Xo(e, t, n, r) {
    return e = Qe(22, e, r, t),
    e.elementType = Ad,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function As(e, t, n) {
    return e = Qe(6, e, null, t),
    e.lanes = n,
    e
}
function Fs(e, t, n) {
    return t = Qe(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Ev(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = xs(0),
    this.expirationTimes = xs(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = xs(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function su(e, t, n, r, i, o, s, l, u) {
    return e = new Ev(e,t,n,l,u),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Qe(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ha(o),
    e
}
function _v(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Nn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Cp(e) {
    if (!e)
        return Gt;
    e = e._reactInternals;
    e: {
        if (xn(e) !== e || e.tag !== 1)
            throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Pe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(_(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Pe(n))
            return Cf(e, n, t)
    }
    return t
}
function Pp(e, t, n, r, i, o, s, l, u) {
    return e = su(n, r, !0, e, i, o, s, l, u),
    e.context = Cp(null),
    n = e.current,
    r = ke(),
    i = qt(n),
    o = wt(r, i),
    o.callback = t ?? null,
    Ht(n, o, i),
    e.current.lanes = i,
    ni(e, i, r),
    Re(e, r),
    e
}
function Jo(e, t, n, r) {
    var i = t.current
      , o = ke()
      , s = qt(i);
    return n = Cp(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = wt(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Ht(i, t, s),
    e !== null && (rt(e, i, s, o),
    Ai(e, i, s)),
    s
}
function bo(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Nc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function lu(e, t) {
    Nc(e, t),
    (e = e.alternate) && Nc(e, t)
}
function Ov() {
    return null
}
var Rp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function au(e) {
    this._internalRoot = e
}
Zo.prototype.render = au.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(_(409));
    Jo(e, t, null, null)
}
;
Zo.prototype.unmount = au.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        mn(function() {
            Jo(null, e, null, null)
        }),
        t[St] = null
    }
}
;
function Zo(e) {
    this._internalRoot = e
}
Zo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = uf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++)
            ;
        Rt.splice(n, 0, e),
        n === 0 && df(e)
    }
}
;
function uu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function es(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ec() {}
function Tv(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var c = bo(s);
                o.call(c)
            }
        }
        var s = Pp(t, r, e, 0, null, !1, !1, "", Ec);
        return e._reactRootContainer = s,
        e[St] = s.current,
        Br(e.nodeType === 8 ? e.parentNode : e),
        mn(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var c = bo(u);
            l.call(c)
        }
    }
    var u = su(e, 0, !1, null, null, !1, !1, "", Ec);
    return e._reactRootContainer = u,
    e[St] = u.current,
    Br(e.nodeType === 8 ? e.parentNode : e),
    mn(function() {
        Jo(t, u, n, r)
    }),
    u
}
function ts(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var u = bo(s);
                l.call(u)
            }
        }
        Jo(t, s, e, i)
    } else
        s = Tv(n, t, e, i, r);
    return bo(s)
}
lf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Sr(t.pendingLanes);
            n !== 0 && (Oa(t, n | 1),
            Re(t, oe()),
            !(q & 6) && (Xn = oe() + 500,
            Jt()))
        }
        break;
    case 13:
        mn(function() {
            var r = jt(e, 1);
            if (r !== null) {
                var i = ke();
                rt(r, e, 1, i)
            }
        }),
        lu(e, 1)
    }
}
;
Ta = function(e) {
    if (e.tag === 13) {
        var t = jt(e, 134217728);
        if (t !== null) {
            var n = ke();
            rt(t, e, 134217728, n)
        }
        lu(e, 134217728)
    }
}
;
af = function(e) {
    if (e.tag === 13) {
        var t = qt(e)
          , n = jt(e, t);
        if (n !== null) {
            var r = ke();
            rt(n, e, t, r)
        }
        lu(e, t)
    }
}
;
uf = function() {
    return V
}
;
cf = function(e, t) {
    var n = V;
    try {
        return V = e,
        t()
    } finally {
        V = n
    }
}
;
hl = function(e, t, n) {
    switch (t) {
    case "input":
        if (ll(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = qo(r);
                    if (!i)
                        throw Error(_(90));
                    $d(r),
                    ll(r, i)
                }
            }
        }
        break;
    case "textarea":
        Bd(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Mn(e, !!n.multiple, t, !1)
    }
}
;
Gd = nu;
Yd = mn;
var Cv = {
    usingClientEntryPoint: !1,
    Events: [ii, Cn, qo, Qd, Kd, nu]
}
  , gr = {
    findFiberByHostInstance: rn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Pv = {
    bundleType: gr.bundleType,
    version: gr.version,
    rendererPackageName: gr.rendererPackageName,
    rendererConfig: gr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Zd(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: gr.findFiberByHostInstance || Ov,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ci.isDisabled && Ci.supportsFiber)
        try {
            Uo = Ci.inject(Pv),
            ct = Ci
        } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cv;
Be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!uu(t))
        throw Error(_(200));
    return _v(e, t, null, n)
}
;
Be.createRoot = function(e, t) {
    if (!uu(e))
        throw Error(_(299));
    var n = !1
      , r = ""
      , i = Rp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = su(e, 1, !1, null, null, n, !1, r, i),
    e[St] = t.current,
    Br(e.nodeType === 8 ? e.parentNode : e),
    new au(t)
}
;
Be.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","),
        Error(_(268, e)));
    return e = Zd(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Be.flushSync = function(e) {
    return mn(e)
}
;
Be.hydrate = function(e, t, n) {
    if (!es(t))
        throw Error(_(200));
    return ts(null, e, t, !0, n)
}
;
Be.hydrateRoot = function(e, t, n) {
    if (!uu(e))
        throw Error(_(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = Rp;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Pp(t, null, e, 1, n ?? null, i, !1, o, s),
    e[St] = t.current,
    Br(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Zo(t)
}
;
Be.render = function(e, t, n) {
    if (!es(t))
        throw Error(_(200));
    return ts(null, e, t, !1, n)
}
;
Be.unmountComponentAtNode = function(e) {
    if (!es(e))
        throw Error(_(40));
    return e._reactRootContainer ? (mn(function() {
        ts(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[St] = null
        })
    }),
    !0) : !1
}
;
Be.unstable_batchedUpdates = nu;
Be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!es(n))
        throw Error(_(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(_(38));
    return ts(e, t, n, !1, r)
}
;
Be.version = "18.3.1-next-f1338f8080-20240426";
function Lp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lp)
        } catch (e) {
            console.error(e)
        }
}
Lp(),
Rd.exports = Be;
var Rv = Rd.exports, zp, _c = Rv;
zp = _c.createRoot,
_c.hydrateRoot;
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Xr() {
    return Xr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Xr.apply(this, arguments)
}
var Mt;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Mt || (Mt = {}));
const Oc = "popstate";
function Lv(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: o, search: s, hash: l} = r.location;
        return Ql("", {
            pathname: o,
            search: s,
            hash: l
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : So(i)
    }
    return Iv(t, n, null, e)
}
function ce(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Ip(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function zv() {
    return Math.random().toString(36).substr(2, 8)
}
function Tc(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Ql(e, t, n, r) {
    return n === void 0 && (n = null),
    Xr({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? sr(t) : t, {
        state: n,
        key: t && t.key || r || zv()
    })
}
function So(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function sr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Iv(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: o=!1} = r
      , s = i.history
      , l = Mt.Pop
      , u = null
      , c = d();
    c == null && (c = 0,
    s.replaceState(Xr({}, s.state, {
        idx: c
    }), ""));
    function d() {
        return (s.state || {
            idx: null
        }).idx
    }
    function f() {
        l = Mt.Pop;
        let x = d()
          , h = x == null ? null : x - c;
        c = x,
        u && u({
            action: l,
            location: g.location,
            delta: h
        })
    }
    function y(x, h) {
        l = Mt.Push;
        let p = Ql(g.location, x, h);
        c = d() + 1;
        let m = Tc(p, c)
          , b = g.createHref(p);
        try {
            s.pushState(m, "", b)
        } catch (j) {
            if (j instanceof DOMException && j.name === "DataCloneError")
                throw j;
            i.location.assign(b)
        }
        o && u && u({
            action: l,
            location: g.location,
            delta: 1
        })
    }
    function w(x, h) {
        l = Mt.Replace;
        let p = Ql(g.location, x, h);
        c = d();
        let m = Tc(p, c)
          , b = g.createHref(p);
        s.replaceState(m, "", b),
        o && u && u({
            action: l,
            location: g.location,
            delta: 0
        })
    }
    function v(x) {
        let h = i.location.origin !== "null" ? i.location.origin : i.location.href
          , p = typeof x == "string" ? x : So(x);
        return p = p.replace(/ $/, "%20"),
        ce(h, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,h)
    }
    let g = {
        get action() {
            return l
        },
        get location() {
            return e(i, s)
        },
        listen(x) {
            if (u)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Oc, f),
            u = x,
            () => {
                i.removeEventListener(Oc, f),
                u = null
            }
        },
        createHref(x) {
            return t(i, x)
        },
        createURL: v,
        encodeLocation(x) {
            let h = v(x);
            return {
                pathname: h.pathname,
                search: h.search,
                hash: h.hash
            }
        },
        push: y,
        replace: w,
        go(x) {
            return s.go(x)
        }
    };
    return g
}
var Cc;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Cc || (Cc = {}));
function Dv(e, t, n) {
    return n === void 0 && (n = "/"),
    Mv(e, t, n, !1)
}
function Mv(e, t, n, r) {
    let i = typeof t == "string" ? sr(t) : t
      , o = cu(i.pathname || "/", n);
    if (o == null)
        return null;
    let s = Dp(e);
    Av(s);
    let l = null;
    for (let u = 0; l == null && u < s.length; ++u) {
        let c = Gv(o);
        l = Qv(s[u], c, r)
    }
    return l
}
function Dp(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (o, s, l) => {
        let u = {
            relativePath: l === void 0 ? o.path || "" : l,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        u.relativePath.startsWith("/") && (ce(u.relativePath.startsWith(r), 'Absolute route path "' + u.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        u.relativePath = u.relativePath.slice(r.length));
        let c = Qt([r, u.relativePath])
          , d = n.concat(u);
        o.children && o.children.length > 0 && (ce(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        Dp(o.children, t, d, c)),
        !(o.path == null && !o.index) && t.push({
            path: c,
            score: qv(c, o.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (o, s) => {
        var l;
        if (o.path === "" || !((l = o.path) != null && l.includes("?")))
            i(o, s);
        else
            for (let u of Mp(o.path))
                i(o, s, u)
    }
    ),
    t
}
function Mp(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [o, ""] : [o];
    let s = Mp(r.join("/"))
      , l = [];
    return l.push(...s.map(u => u === "" ? o : [o, u].join("/"))),
    i && l.push(...s),
    l.map(u => e.startsWith("/") && u === "" ? "/" : u)
}
function Av(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : Vv(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const Fv = /^:[\w-]+$/
  , $v = 3
  , Uv = 2
  , Bv = 1
  , Hv = 10
  , Wv = -2
  , Pc = e => e === "*";
function qv(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Pc) && (r += Wv),
    t && (r += Uv),
    n.filter(i => !Pc(i)).reduce( (i, o) => i + (Fv.test(o) ? $v : o === "" ? Bv : Hv), r)
}
function Vv(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Qv(e, t, n) {
    let {routesMeta: r} = e
      , i = {}
      , o = "/"
      , s = [];
    for (let l = 0; l < r.length; ++l) {
        let u = r[l]
          , c = l === r.length - 1
          , d = o === "/" ? t : t.slice(o.length) || "/"
          , f = Rc({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: c
        }, d)
          , y = u.route;
        if (!f && c && n && !r[r.length - 1].route.index && (f = Rc({
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: !1
        }, d)),
        !f)
            return null;
        Object.assign(i, f.params),
        s.push({
            params: i,
            pathname: Qt([o, f.pathname]),
            pathnameBase: Zv(Qt([o, f.pathnameBase])),
            route: y
        }),
        f.pathnameBase !== "/" && (o = Qt([o, f.pathnameBase]))
    }
    return s
}
function Rc(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Kv(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let o = i[0]
      , s = o.replace(/(.)\/+$/, "$1")
      , l = i.slice(1);
    return {
        params: r.reduce( (c, d, f) => {
            let {paramName: y, isOptional: w} = d;
            if (y === "*") {
                let g = l[f] || "";
                s = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const v = l[f];
            return w && !v ? c[y] = void 0 : c[y] = (v || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}
function Kv(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ip(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, u) => (r.push({
        paramName: l,
        isOptional: u != null
    }),
    u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function Gv(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Ip(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function cu(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function Yv(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? sr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Xv(n, t) : t,
        search: eg(r),
        hash: tg(i)
    }
}
function Xv(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function $s(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function Jv(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Ap(e, t) {
    let n = Jv(e);
    return t ? n.map( (r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Fp(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = sr(e) : (i = Xr({}, e),
    ce(!i.pathname || !i.pathname.includes("?"), $s("?", "pathname", "search", i)),
    ce(!i.pathname || !i.pathname.includes("#"), $s("#", "pathname", "hash", i)),
    ce(!i.search || !i.search.includes("#"), $s("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, l;
    if (s == null)
        l = n;
    else {
        let f = t.length - 1;
        if (!r && s.startsWith("..")) {
            let y = s.split("/");
            for (; y[0] === ".."; )
                y.shift(),
                f -= 1;
            i.pathname = y.join("/")
        }
        l = f >= 0 ? t[f] : "/"
    }
    let u = Yv(i, l)
      , c = s && s !== "/" && s.endsWith("/")
      , d = (o || s === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (c || d) && (u.pathname += "/"),
    u
}
const Qt = e => e.join("/").replace(/\/\/+/g, "/")
  , Zv = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , eg = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , tg = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function ng(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const $p = ["post", "put", "patch", "delete"];
new Set($p);
const rg = ["get", ...$p];
new Set(rg);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Jr() {
    return Jr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Jr.apply(this, arguments)
}
const du = N.createContext(null)
  , ig = N.createContext(null)
  , wn = N.createContext(null)
  , ns = N.createContext(null)
  , bn = N.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Up = N.createContext(null);
function og(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    si() || ce(!1);
    let {basename: r, navigator: i} = N.useContext(wn)
      , {hash: o, pathname: s, search: l} = Hp(e, {
        relative: n
    })
      , u = s;
    return r !== "/" && (u = s === "/" ? r : Qt([r, s])),
    i.createHref({
        pathname: u,
        search: l,
        hash: o
    })
}
function si() {
    return N.useContext(ns) != null
}
function li() {
    return si() || ce(!1),
    N.useContext(ns).location
}
function Bp(e) {
    N.useContext(wn).static || N.useLayoutEffect(e)
}
function ot() {
    let {isDataRoute: e} = N.useContext(bn);
    return e ? gg() : sg()
}
function sg() {
    si() || ce(!1);
    let e = N.useContext(du)
      , {basename: t, future: n, navigator: r} = N.useContext(wn)
      , {matches: i} = N.useContext(bn)
      , {pathname: o} = li()
      , s = JSON.stringify(Ap(i, n.v7_relativeSplatPath))
      , l = N.useRef(!1);
    return Bp( () => {
        l.current = !0
    }
    ),
    N.useCallback(function(c, d) {
        if (d === void 0 && (d = {}),
        !l.current)
            return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let f = Fp(c, JSON.parse(s), o, d.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Qt([t, f.pathname])),
        (d.replace ? r.replace : r.push)(f, d.state, d)
    }, [t, r, s, o, e])
}
function Hp(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = N.useContext(wn)
      , {matches: i} = N.useContext(bn)
      , {pathname: o} = li()
      , s = JSON.stringify(Ap(i, r.v7_relativeSplatPath));
    return N.useMemo( () => Fp(e, JSON.parse(s), o, n === "path"), [e, s, o, n])
}
function lg(e, t) {
    return ag(e, t)
}
function ag(e, t, n, r) {
    si() || ce(!1);
    let {navigator: i} = N.useContext(wn)
      , {matches: o} = N.useContext(bn)
      , s = o[o.length - 1]
      , l = s ? s.params : {};
    s && s.pathname;
    let u = s ? s.pathnameBase : "/";
    s && s.route;
    let c = li(), d;
    if (t) {
        var f;
        let x = typeof t == "string" ? sr(t) : t;
        u === "/" || (f = x.pathname) != null && f.startsWith(u) || ce(!1),
        d = x
    } else
        d = c;
    let y = d.pathname || "/"
      , w = y;
    if (u !== "/") {
        let x = u.replace(/^\//, "").split("/");
        w = "/" + y.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let v = Dv(e, {
        pathname: w
    })
      , g = pg(v && v.map(x => Object.assign({}, x, {
        params: Object.assign({}, l, x.params),
        pathname: Qt([u, i.encodeLocation ? i.encodeLocation(x.pathname).pathname : x.pathname]),
        pathnameBase: x.pathnameBase === "/" ? u : Qt([u, i.encodeLocation ? i.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
    })), o, n, r);
    return t && g ? N.createElement(ns.Provider, {
        value: {
            location: Jr({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Mt.Pop
        }
    }, g) : g
}
function ug() {
    let e = vg()
      , t = ng(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return N.createElement(N.Fragment, null, N.createElement("h2", null, "Unexpected Application Error!"), N.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? N.createElement("pre", {
        style: i
    }, n) : null, null)
}
const cg = N.createElement(ug, null);
class dg extends N.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? N.createElement(bn.Provider, {
            value: this.props.routeContext
        }, N.createElement(Up.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function fg(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = N.useContext(du);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(bn.Provider, {
        value: t
    }, r)
}
function pg(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var o;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , l = (i = n) == null ? void 0 : i.errors;
    if (l != null) {
        let d = s.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
        d >= 0 || ce(!1),
        s = s.slice(0, Math.min(s.length, d + 1))
    }
    let u = !1
      , c = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < s.length; d++) {
            let f = s[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
            f.route.id) {
                let {loaderData: y, errors: w} = n
                  , v = f.route.loader && y[f.route.id] === void 0 && (!w || w[f.route.id] === void 0);
                if (f.route.lazy || v) {
                    u = !0,
                    c >= 0 ? s = s.slice(0, c + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (d, f, y) => {
        let w, v = !1, g = null, x = null;
        n && (w = l && f.route.id ? l[f.route.id] : void 0,
        g = f.route.errorElement || cg,
        u && (c < 0 && y === 0 ? (v = !0,
        x = null) : c === y && (v = !0,
        x = f.route.hydrateFallbackElement || null)));
        let h = t.concat(s.slice(0, y + 1))
          , p = () => {
            let m;
            return w ? m = g : v ? m = x : f.route.Component ? m = N.createElement(f.route.Component, null) : f.route.element ? m = f.route.element : m = d,
            N.createElement(fg, {
                match: f,
                routeContext: {
                    outlet: d,
                    matches: h,
                    isDataRoute: n != null
                },
                children: m
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || y === 0) ? N.createElement(dg, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: w,
            children: p(),
            routeContext: {
                outlet: null,
                matches: h,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var Wp = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(Wp || {})
  , jo = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(jo || {});
function hg(e) {
    let t = N.useContext(du);
    return t || ce(!1),
    t
}
function mg(e) {
    let t = N.useContext(ig);
    return t || ce(!1),
    t
}
function yg(e) {
    let t = N.useContext(bn);
    return t || ce(!1),
    t
}
function qp(e) {
    let t = yg()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || ce(!1),
    n.route.id
}
function vg() {
    var e;
    let t = N.useContext(Up)
      , n = mg(jo.UseRouteError)
      , r = qp(jo.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function gg() {
    let {router: e} = hg(Wp.UseNavigateStable)
      , t = qp(jo.UseNavigateStable)
      , n = N.useRef(!1);
    return Bp( () => {
        n.current = !0
    }
    ),
    N.useCallback(function(i, o) {
        o === void 0 && (o = {}),
        n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Jr({
            fromRouteId: t
        }, o)))
    }, [e, t])
}
function Je(e) {
    ce(!1)
}
function xg(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=Mt.Pop, navigator: o, static: s=!1, future: l} = e;
    si() && ce(!1);
    let u = t.replace(/^\/*/, "/")
      , c = N.useMemo( () => ({
        basename: u,
        navigator: o,
        static: s,
        future: Jr({
            v7_relativeSplatPath: !1
        }, l)
    }), [u, l, o, s]);
    typeof r == "string" && (r = sr(r));
    let {pathname: d="/", search: f="", hash: y="", state: w=null, key: v="default"} = r
      , g = N.useMemo( () => {
        let x = cu(d, u);
        return x == null ? null : {
            location: {
                pathname: x,
                search: f,
                hash: y,
                state: w,
                key: v
            },
            navigationType: i
        }
    }
    , [u, d, f, y, w, v, i]);
    return g == null ? null : N.createElement(wn.Provider, {
        value: c
    }, N.createElement(ns.Provider, {
        children: n,
        value: g
    }))
}
function wg(e) {
    let {children: t, location: n} = e;
    return lg(Kl(t), n)
}
new Promise( () => {}
);
function Kl(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return N.Children.forEach(e, (r, i) => {
        if (!N.isValidElement(r))
            return;
        let o = [...t, i];
        if (r.type === N.Fragment) {
            n.push.apply(n, Kl(r.props.children, o));
            return
        }
        r.type !== Je && ce(!1),
        !r.props.index || !r.props.children || ce(!1);
        let s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Kl(r.props.children, o)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Gl() {
    return Gl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Gl.apply(this, arguments)
}
function bg(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function Sg(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function jg(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Sg(e)
}
const kg = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"]
  , Ng = "6";
try {
    window.__reactRouterVersion = Ng
} catch {}
const Eg = "startTransition"
  , Lc = bm[Eg];
function _g(e) {
    let {basename: t, children: n, future: r, window: i} = e
      , o = N.useRef();
    o.current == null && (o.current = Lv({
        window: i,
        v5Compat: !0
    }));
    let s = o.current
      , [l,u] = N.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: c} = r || {}
      , d = N.useCallback(f => {
        c && Lc ? Lc( () => u(f)) : u(f)
    }
    , [u, c]);
    return N.useLayoutEffect( () => s.listen(d), [s, d]),
    N.createElement(xg, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
const Og = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Tg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , ae = N.forwardRef(function(t, n) {
    let {onClick: r, relative: i, reloadDocument: o, replace: s, state: l, target: u, to: c, preventScrollReset: d, unstable_viewTransition: f} = t, y = bg(t, kg), {basename: w} = N.useContext(wn), v, g = !1;
    if (typeof c == "string" && Tg.test(c) && (v = c,
    Og))
        try {
            let m = new URL(window.location.href)
              , b = c.startsWith("//") ? new URL(m.protocol + c) : new URL(c)
              , j = cu(b.pathname, w);
            b.origin === m.origin && j != null ? c = j + b.search + b.hash : g = !0
        } catch {}
    let x = og(c, {
        relative: i
    })
      , h = Cg(c, {
        replace: s,
        state: l,
        target: u,
        preventScrollReset: d,
        relative: i,
        unstable_viewTransition: f
    });
    function p(m) {
        r && r(m),
        m.defaultPrevented || h(m)
    }
    return N.createElement("a", Gl({}, y, {
        href: v || x,
        onClick: g || o ? r : p,
        ref: n,
        target: u
    }))
});
var zc;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(zc || (zc = {}));
var Ic;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Ic || (Ic = {}));
function Cg(e, t) {
    let {target: n, replace: r, state: i, preventScrollReset: o, relative: s, unstable_viewTransition: l} = t === void 0 ? {} : t
      , u = ot()
      , c = li()
      , d = Hp(e, {
        relative: s
    });
    return N.useCallback(f => {
        if (jg(f, n)) {
            f.preventDefault();
            let y = r !== void 0 ? r : So(c) === So(d);
            u(e, {
                replace: y,
                state: i,
                preventScrollReset: o,
                relative: s,
                unstable_viewTransition: l
            })
        }
    }
    , [c, u, d, r, i, n, e, o, s, l])
}
var Vp = {}
  , Qp = {}
  , rs = {}
  , Kp = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = void 0;
    var t = {
        animating: !1,
        autoplaying: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        dragging: !1,
        edgeDragged: !1,
        initialized: !1,
        lazyLoadedList: [],
        listHeight: null,
        listWidth: null,
        scrolling: !1,
        slideCount: null,
        slideHeight: null,
        slideWidth: null,
        swipeLeft: null,
        swiped: !1,
        swiping: !1,
        touchObject: {
            startX: 0,
            startY: 0,
            curX: 0,
            curY: 0
        },
        trackStyle: {},
        trackWidth: 0,
        targetSlide: 0
    };
    e.default = t
}
)(Kp);
var Pg = "Expected a function"
  , Dc = NaN
  , Rg = "[object Symbol]"
  , Lg = /^\s+|\s+$/g
  , zg = /^[-+]0x[0-9a-f]+$/i
  , Ig = /^0b[01]+$/i
  , Dg = /^0o[0-7]+$/i
  , Mg = parseInt
  , Ag = typeof pi == "object" && pi && pi.Object === Object && pi
  , Fg = typeof self == "object" && self && self.Object === Object && self
  , $g = Ag || Fg || Function("return this")()
  , Ug = Object.prototype
  , Bg = Ug.toString
  , Hg = Math.max
  , Wg = Math.min
  , Us = function() {
    return $g.Date.now()
};
function qg(e, t, n) {
    var r, i, o, s, l, u, c = 0, d = !1, f = !1, y = !0;
    if (typeof e != "function")
        throw new TypeError(Pg);
    t = Mc(t) || 0,
    Yl(n) && (d = !!n.leading,
    f = "maxWait"in n,
    o = f ? Hg(Mc(n.maxWait) || 0, t) : o,
    y = "trailing"in n ? !!n.trailing : y);
    function w(k) {
        var T = r
          , P = i;
        return r = i = void 0,
        c = k,
        s = e.apply(P, T),
        s
    }
    function v(k) {
        return c = k,
        l = setTimeout(h, t),
        d ? w(k) : s
    }
    function g(k) {
        var T = k - u
          , P = k - c
          , O = t - T;
        return f ? Wg(O, o - P) : O
    }
    function x(k) {
        var T = k - u
          , P = k - c;
        return u === void 0 || T >= t || T < 0 || f && P >= o
    }
    function h() {
        var k = Us();
        if (x(k))
            return p(k);
        l = setTimeout(h, g(k))
    }
    function p(k) {
        return l = void 0,
        y && r ? w(k) : (r = i = void 0,
        s)
    }
    function m() {
        l !== void 0 && clearTimeout(l),
        c = 0,
        r = u = i = l = void 0
    }
    function b() {
        return l === void 0 ? s : p(Us())
    }
    function j() {
        var k = Us()
          , T = x(k);
        if (r = arguments,
        i = this,
        u = k,
        T) {
            if (l === void 0)
                return v(u);
            if (f)
                return l = setTimeout(h, t),
                w(u)
        }
        return l === void 0 && (l = setTimeout(h, t)),
        s
    }
    return j.cancel = m,
    j.flush = b,
    j
}
function Yl(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function")
}
function Vg(e) {
    return !!e && typeof e == "object"
}
function Qg(e) {
    return typeof e == "symbol" || Vg(e) && Bg.call(e) == Rg
}
function Mc(e) {
    if (typeof e == "number")
        return e;
    if (Qg(e))
        return Dc;
    if (Yl(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Yl(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = e.replace(Lg, "");
    var n = Ig.test(e);
    return n || Dg.test(e) ? Mg(e.slice(2), n ? 2 : 8) : zg.test(e) ? Dc : +e
}
var Kg = qg
  , Gp = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
    (function() {
        var t = {}.hasOwnProperty;
        function n() {
            for (var o = "", s = 0; s < arguments.length; s++) {
                var l = arguments[s];
                l && (o = i(o, r(l)))
            }
            return o
        }
        function r(o) {
            if (typeof o == "string" || typeof o == "number")
                return o;
            if (typeof o != "object")
                return "";
            if (Array.isArray(o))
                return n.apply(null, o);
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
                return o.toString();
            var s = "";
            for (var l in o)
                t.call(o, l) && o[l] && (s = i(s, l));
            return s
        }
        function i(o, s) {
            return s ? o ? o + " " + s : o + s : o
        }
        e.exports ? (n.default = n,
        e.exports = n) : window.classNames = n
    }
    )()
}
)(Gp);
var is = Gp.exports
  , C = {}
  , fu = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = void 0;
    var t = n(N);
    function n(i) {
        return i && i.__esModule ? i : {
            default: i
        }
    }
    var r = {
        accessibility: !0,
        adaptiveHeight: !1,
        afterChange: null,
        appendDots: function(o) {
            return t.default.createElement("ul", {
                style: {
                    display: "block"
                }
            }, o)
        },
        arrows: !0,
        autoplay: !1,
        autoplaySpeed: 3e3,
        beforeChange: null,
        centerMode: !1,
        centerPadding: "50px",
        className: "",
        cssEase: "ease",
        customPaging: function(o) {
            return t.default.createElement("button", null, o + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: null,
        nextArrow: null,
        onEdge: null,
        onInit: null,
        onLazyLoadError: null,
        onReInit: null,
        pauseOnDotsHover: !1,
        pauseOnFocus: !1,
        pauseOnHover: !0,
        prevArrow: null,
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "div",
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        swipe: !0,
        swipeEvent: null,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        waitForAnimate: !0,
        asNavFor: null
    };
    e.default = r
}
)(fu);
Object.defineProperty(C, "__esModule", {
    value: !0
});
C.checkSpecKeys = C.checkNavigable = C.changeSlide = C.canUseDOM = C.canGoNext = void 0;
C.clamp = Xp;
C.extractObject = void 0;
C.filterSettings = u0;
C.validSettings = C.swipeStart = C.swipeMove = C.swipeEnd = C.slidesOnRight = C.slidesOnLeft = C.slideHandler = C.siblingDirection = C.safePreventDefault = C.lazyStartIndex = C.lazySlidesOnRight = C.lazySlidesOnLeft = C.lazyEndIndex = C.keyHandler = C.initializedState = C.getWidth = C.getTrackLeft = C.getTrackCSS = C.getTrackAnimateCSS = C.getTotalSlides = C.getSwipeDirection = C.getSlideCount = C.getRequiredLazySlides = C.getPreClones = C.getPostClones = C.getOnDemandLazySlides = C.getNavigableIndexes = C.getHeight = void 0;
var Gg = Yp(N)
  , Yg = Yp(fu);
function Yp(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Zr(e) {
    "@babel/helpers - typeof";
    return Zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Zr(e)
}
function Ac(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ac(Object(n), !0).forEach(function(r) {
            Xg(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ac(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function Xg(e, t, n) {
    return t = Jg(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Jg(e) {
    var t = Zg(e, "string");
    return Zr(t) == "symbol" ? t : String(t)
}
function Zg(e, t) {
    if (Zr(e) != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (Zr(r) != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function Xp(e, t, n) {
    return Math.max(t, Math.min(e, n))
}
var Hn = C.safePreventDefault = function(t) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(t._reactName) || t.preventDefault()
}
  , Jp = C.getOnDemandLazySlides = function(t) {
    for (var n = [], r = Zp(t), i = eh(t), o = r; o < i; o++)
        t.lazyLoadedList.indexOf(o) < 0 && n.push(o);
    return n
}
;
C.getRequiredLazySlides = function(t) {
    for (var n = [], r = Zp(t), i = eh(t), o = r; o < i; o++)
        n.push(o);
    return n
}
;
var Zp = C.lazyStartIndex = function(t) {
    return t.currentSlide - e0(t)
}
  , eh = C.lazyEndIndex = function(t) {
    return t.currentSlide + t0(t)
}
  , e0 = C.lazySlidesOnLeft = function(t) {
    return t.centerMode ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0) : 0
}
  , t0 = C.lazySlidesOnRight = function(t) {
    return t.centerMode ? Math.floor((t.slidesToShow - 1) / 2) + 1 + (parseInt(t.centerPadding) > 0 ? 1 : 0) : t.slidesToShow
}
  , Xl = C.getWidth = function(t) {
    return t && t.offsetWidth || 0
}
  , th = C.getHeight = function(t) {
    return t && t.offsetHeight || 0
}
  , nh = C.getSwipeDirection = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r, i, o, s;
    return r = t.startX - t.curX,
    i = t.startY - t.curY,
    o = Math.atan2(i, r),
    s = Math.round(o * 180 / Math.PI),
    s < 0 && (s = 360 - Math.abs(s)),
    s <= 45 && s >= 0 || s <= 360 && s >= 315 ? "left" : s >= 135 && s <= 225 ? "right" : n === !0 ? s >= 35 && s <= 135 ? "up" : "down" : "vertical"
}
  , rh = C.canGoNext = function(t) {
    var n = !0;
    return t.infinite || (t.centerMode && t.currentSlide >= t.slideCount - 1 || t.slideCount <= t.slidesToShow || t.currentSlide >= t.slideCount - t.slidesToShow) && (n = !1),
    n
}
;
C.extractObject = function(t, n) {
    var r = {};
    return n.forEach(function(i) {
        return r[i] = t[i]
    }),
    r
}
;
C.initializedState = function(t) {
    var n = Gg.default.Children.count(t.children), r = t.listRef, i = Math.ceil(Xl(r)), o = t.trackRef && t.trackRef.node, s = Math.ceil(Xl(o)), l;
    if (t.vertical)
        l = i;
    else {
        var u = t.centerMode && parseInt(t.centerPadding) * 2;
        typeof t.centerPadding == "string" && t.centerPadding.slice(-1) === "%" && (u *= i / 100),
        l = Math.ceil((i - u) / t.slidesToShow)
    }
    var c = r && th(r.querySelector('[data-index="0"]'))
      , d = c * t.slidesToShow
      , f = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
    t.rtl && t.currentSlide === void 0 && (f = n - 1 - t.initialSlide);
    var y = t.lazyLoadedList || []
      , w = Jp(X(X({}, t), {}, {
        currentSlide: f,
        lazyLoadedList: y
    }));
    y = y.concat(w);
    var v = {
        slideCount: n,
        slideWidth: l,
        listWidth: i,
        trackWidth: s,
        currentSlide: f,
        slideHeight: c,
        listHeight: d,
        lazyLoadedList: y
    };
    return t.autoplaying === null && t.autoplay && (v.autoplaying = "playing"),
    v
}
;
C.slideHandler = function(t) {
    var n = t.waitForAnimate
      , r = t.animating
      , i = t.fade
      , o = t.infinite
      , s = t.index
      , l = t.slideCount
      , u = t.lazyLoad
      , c = t.currentSlide
      , d = t.centerMode
      , f = t.slidesToScroll
      , y = t.slidesToShow
      , w = t.useCSS
      , v = t.lazyLoadedList;
    if (n && r)
        return {};
    var g = s, x, h, p, m = {}, b = {}, j = o ? s : Xp(s, 0, l - 1);
    if (i) {
        if (!o && (s < 0 || s >= l))
            return {};
        s < 0 ? g = s + l : s >= l && (g = s - l),
        u && v.indexOf(g) < 0 && (v = v.concat(g)),
        m = {
            animating: !0,
            currentSlide: g,
            lazyLoadedList: v,
            targetSlide: g
        },
        b = {
            animating: !1,
            targetSlide: g
        }
    } else
        x = g,
        g < 0 ? (x = g + l,
        o ? l % f !== 0 && (x = l - l % f) : x = 0) : !rh(t) && g > c ? g = x = c : d && g >= l ? (g = o ? l : l - 1,
        x = o ? 0 : l - 1) : g >= l && (x = g - l,
        o ? l % f !== 0 && (x = 0) : x = l - y),
        !o && g + y >= l && (x = l - y),
        h = No(X(X({}, t), {}, {
            slideIndex: g
        })),
        p = No(X(X({}, t), {}, {
            slideIndex: x
        })),
        o || (h === p && (g = x),
        h = p),
        u && (v = v.concat(Jp(X(X({}, t), {}, {
            currentSlide: g
        })))),
        w ? (m = {
            animating: !0,
            currentSlide: x,
            trackStyle: ih(X(X({}, t), {}, {
                left: h
            })),
            lazyLoadedList: v,
            targetSlide: j
        },
        b = {
            animating: !1,
            currentSlide: x,
            trackStyle: ko(X(X({}, t), {}, {
                left: p
            })),
            swipeLeft: null,
            targetSlide: j
        }) : m = {
            currentSlide: x,
            trackStyle: ko(X(X({}, t), {}, {
                left: p
            })),
            lazyLoadedList: v,
            targetSlide: j
        };
    return {
        state: m,
        nextState: b
    }
}
;
C.changeSlide = function(t, n) {
    var r, i, o, s, l, u = t.slidesToScroll, c = t.slidesToShow, d = t.slideCount, f = t.currentSlide, y = t.targetSlide, w = t.lazyLoad, v = t.infinite;
    if (s = d % u !== 0,
    r = s ? 0 : (d - f) % u,
    n.message === "previous")
        o = r === 0 ? u : c - r,
        l = f - o,
        w && !v && (i = f - o,
        l = i === -1 ? d - 1 : i),
        v || (l = y - u);
    else if (n.message === "next")
        o = r === 0 ? u : r,
        l = f + o,
        w && !v && (l = (f + u) % d + r),
        v || (l = y + u);
    else if (n.message === "dots")
        l = n.index * n.slidesToScroll;
    else if (n.message === "children") {
        if (l = n.index,
        v) {
            var g = o0(X(X({}, t), {}, {
                targetSlide: l
            }));
            l > n.currentSlide && g === "left" ? l = l - d : l < n.currentSlide && g === "right" && (l = l + d)
        }
    } else
        n.message === "index" && (l = Number(n.index));
    return l
}
;
C.keyHandler = function(t, n, r) {
    return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n ? "" : t.keyCode === 37 ? r ? "next" : "previous" : t.keyCode === 39 ? r ? "previous" : "next" : ""
}
;
C.swipeStart = function(t, n, r) {
    return t.target.tagName === "IMG" && Hn(t),
    !n || !r && t.type.indexOf("mouse") !== -1 ? "" : {
        dragging: !0,
        touchObject: {
            startX: t.touches ? t.touches[0].pageX : t.clientX,
            startY: t.touches ? t.touches[0].pageY : t.clientY,
            curX: t.touches ? t.touches[0].pageX : t.clientX,
            curY: t.touches ? t.touches[0].pageY : t.clientY
        }
    }
}
;
C.swipeMove = function(t, n) {
    var r = n.scrolling
      , i = n.animating
      , o = n.vertical
      , s = n.swipeToSlide
      , l = n.verticalSwiping
      , u = n.rtl
      , c = n.currentSlide
      , d = n.edgeFriction
      , f = n.edgeDragged
      , y = n.onEdge
      , w = n.swiped
      , v = n.swiping
      , g = n.slideCount
      , x = n.slidesToScroll
      , h = n.infinite
      , p = n.touchObject
      , m = n.swipeEvent
      , b = n.listHeight
      , j = n.listWidth;
    if (!r) {
        if (i)
            return Hn(t);
        o && s && l && Hn(t);
        var k, T = {}, P = No(n);
        p.curX = t.touches ? t.touches[0].pageX : t.clientX,
        p.curY = t.touches ? t.touches[0].pageY : t.clientY,
        p.swipeLength = Math.round(Math.sqrt(Math.pow(p.curX - p.startX, 2)));
        var O = Math.round(Math.sqrt(Math.pow(p.curY - p.startY, 2)));
        if (!l && !v && O > 10)
            return {
                scrolling: !0
            };
        l && (p.swipeLength = O);
        var E = (u ? -1 : 1) * (p.curX > p.startX ? 1 : -1);
        l && (E = p.curY > p.startY ? 1 : -1);
        var M = Math.ceil(g / x)
          , z = nh(n.touchObject, l)
          , A = p.swipeLength;
        return h || (c === 0 && (z === "right" || z === "down") || c + 1 >= M && (z === "left" || z === "up") || !rh(n) && (z === "left" || z === "up")) && (A = p.swipeLength * d,
        f === !1 && y && (y(z),
        T.edgeDragged = !0)),
        !w && m && (m(z),
        T.swiped = !0),
        o ? k = P + A * (b / j) * E : u ? k = P - A * E : k = P + A * E,
        l && (k = P + A * E),
        T = X(X({}, T), {}, {
            touchObject: p,
            swipeLeft: k,
            trackStyle: ko(X(X({}, n), {}, {
                left: k
            }))
        }),
        Math.abs(p.curX - p.startX) < Math.abs(p.curY - p.startY) * .8 || p.swipeLength > 10 && (T.swiping = !0,
        Hn(t)),
        T
    }
}
;
C.swipeEnd = function(t, n) {
    var r = n.dragging
      , i = n.swipe
      , o = n.touchObject
      , s = n.listWidth
      , l = n.touchThreshold
      , u = n.verticalSwiping
      , c = n.listHeight
      , d = n.swipeToSlide
      , f = n.scrolling
      , y = n.onSwipe
      , w = n.targetSlide
      , v = n.currentSlide
      , g = n.infinite;
    if (!r)
        return i && Hn(t),
        {};
    var x = u ? c / l : s / l
      , h = nh(o, u)
      , p = {
        dragging: !1,
        edgeDragged: !1,
        scrolling: !1,
        swiping: !1,
        swiped: !1,
        swipeLeft: null,
        touchObject: {}
    };
    if (f || !o.swipeLength)
        return p;
    if (o.swipeLength > x) {
        Hn(t),
        y && y(h);
        var m, b, j = g ? v : w;
        switch (h) {
        case "left":
        case "up":
            b = j + $c(n),
            m = d ? Fc(n, b) : b,
            p.currentDirection = 0;
            break;
        case "right":
        case "down":
            b = j - $c(n),
            m = d ? Fc(n, b) : b,
            p.currentDirection = 1;
            break;
        default:
            m = j
        }
        p.triggerSlideHandler = m
    } else {
        var k = No(n);
        p.trackStyle = ih(X(X({}, n), {}, {
            left: k
        }))
    }
    return p
}
;
var n0 = C.getNavigableIndexes = function(t) {
    for (var n = t.infinite ? t.slideCount * 2 : t.slideCount, r = t.infinite ? t.slidesToShow * -1 : 0, i = t.infinite ? t.slidesToShow * -1 : 0, o = []; r < n; )
        o.push(r),
        r = i + t.slidesToScroll,
        i += Math.min(t.slidesToScroll, t.slidesToShow);
    return o
}
  , Fc = C.checkNavigable = function(t, n) {
    var r = n0(t)
      , i = 0;
    if (n > r[r.length - 1])
        n = r[r.length - 1];
    else
        for (var o in r) {
            if (n < r[o]) {
                n = i;
                break
            }
            i = r[o]
        }
    return n
}
  , $c = C.getSlideCount = function(t) {
    var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
    if (t.swipeToSlide) {
        var r, i = t.listRef, o = i.querySelectorAll && i.querySelectorAll(".slick-slide") || [];
        if (Array.from(o).every(function(u) {
            if (t.vertical) {
                if (u.offsetTop + th(u) / 2 > t.swipeLeft * -1)
                    return r = u,
                    !1
            } else if (u.offsetLeft - n + Xl(u) / 2 > t.swipeLeft * -1)
                return r = u,
                !1;
            return !0
        }),
        !r)
            return 0;
        var s = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide
          , l = Math.abs(r.dataset.index - s) || 1;
        return l
    } else
        return t.slidesToScroll
}
  , pu = C.checkSpecKeys = function(t, n) {
    return n.reduce(function(r, i) {
        return r && t.hasOwnProperty(i)
    }, !0) ? null : console.error("Keys Missing:", t)
}
  , ko = C.getTrackCSS = function(t) {
    pu(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var n, r, i = t.slideCount + 2 * t.slidesToShow;
    t.vertical ? r = i * t.slideHeight : n = i0(t) * t.slideWidth;
    var o = {
        opacity: 1,
        transition: "",
        WebkitTransition: ""
    };
    if (t.useTransform) {
        var s = t.vertical ? "translate3d(0px, " + t.left + "px, 0px)" : "translate3d(" + t.left + "px, 0px, 0px)"
          , l = t.vertical ? "translate3d(0px, " + t.left + "px, 0px)" : "translate3d(" + t.left + "px, 0px, 0px)"
          , u = t.vertical ? "translateY(" + t.left + "px)" : "translateX(" + t.left + "px)";
        o = X(X({}, o), {}, {
            WebkitTransform: s,
            transform: l,
            msTransform: u
        })
    } else
        t.vertical ? o.top = t.left : o.left = t.left;
    return t.fade && (o = {
        opacity: 1
    }),
    n && (o.width = n),
    r && (o.height = r),
    window && !window.addEventListener && window.attachEvent && (t.vertical ? o.marginTop = t.left + "px" : o.marginLeft = t.left + "px"),
    o
}
  , ih = C.getTrackAnimateCSS = function(t) {
    pu(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var n = ko(t);
    return t.useTransform ? (n.WebkitTransition = "-webkit-transform " + t.speed + "ms " + t.cssEase,
    n.transition = "transform " + t.speed + "ms " + t.cssEase) : t.vertical ? n.transition = "top " + t.speed + "ms " + t.cssEase : n.transition = "left " + t.speed + "ms " + t.cssEase,
    n
}
  , No = C.getTrackLeft = function(t) {
    if (t.unslick)
        return 0;
    pu(t, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var n = t.slideIndex, r = t.trackRef, i = t.infinite, o = t.centerMode, s = t.slideCount, l = t.slidesToShow, u = t.slidesToScroll, c = t.slideWidth, d = t.listWidth, f = t.variableWidth, y = t.slideHeight, w = t.fade, v = t.vertical, g = 0, x, h, p = 0;
    if (w || t.slideCount === 1)
        return 0;
    var m = 0;
    if (i ? (m = -qi(t),
    s % u !== 0 && n + u > s && (m = -(n > s ? l - (n - s) : s % u)),
    o && (m += parseInt(l / 2))) : (s % u !== 0 && n + u > s && (m = l - s % u),
    o && (m = parseInt(l / 2))),
    g = m * c,
    p = m * y,
    v ? x = n * y * -1 + p : x = n * c * -1 + g,
    f === !0) {
        var b, j = r && r.node;
        if (b = n + qi(t),
        h = j && j.childNodes[b],
        x = h ? h.offsetLeft * -1 : 0,
        o === !0) {
            b = i ? n + qi(t) : n,
            h = j && j.children[b],
            x = 0;
            for (var k = 0; k < b; k++)
                x -= j && j.children[k] && j.children[k].offsetWidth;
            x -= parseInt(t.centerPadding),
            x += h && (d - h.offsetWidth) / 2
        }
    }
    return x
}
  , qi = C.getPreClones = function(t) {
    return t.unslick || !t.infinite ? 0 : t.variableWidth ? t.slideCount : t.slidesToShow + (t.centerMode ? 1 : 0)
}
  , r0 = C.getPostClones = function(t) {
    return t.unslick || !t.infinite ? 0 : t.slideCount
}
  , i0 = C.getTotalSlides = function(t) {
    return t.slideCount === 1 ? 1 : qi(t) + t.slideCount + r0(t)
}
  , o0 = C.siblingDirection = function(t) {
    return t.targetSlide > t.currentSlide ? t.targetSlide > t.currentSlide + s0(t) ? "left" : "right" : t.targetSlide < t.currentSlide - l0(t) ? "right" : "left"
}
  , s0 = C.slidesOnRight = function(t) {
    var n = t.slidesToShow
      , r = t.centerMode
      , i = t.rtl
      , o = t.centerPadding;
    if (r) {
        var s = (n - 1) / 2 + 1;
        return parseInt(o) > 0 && (s += 1),
        i && n % 2 === 0 && (s += 1),
        s
    }
    return i ? 0 : n - 1
}
  , l0 = C.slidesOnLeft = function(t) {
    var n = t.slidesToShow
      , r = t.centerMode
      , i = t.rtl
      , o = t.centerPadding;
    if (r) {
        var s = (n - 1) / 2 + 1;
        return parseInt(o) > 0 && (s += 1),
        !i && n % 2 === 0 && (s += 1),
        s
    }
    return i ? n - 1 : 0
}
;
C.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}
;
var a0 = C.validSettings = Object.keys(Yg.default);
function u0(e) {
    return a0.reduce(function(t, n) {
        return e.hasOwnProperty(n) && (t[n] = e[n]),
        t
    }, {})
}
var os = {};
Object.defineProperty(os, "__esModule", {
    value: !0
});
os.Track = void 0;
var Pt = oh(N)
  , Bs = oh(is)
  , Hs = C;
function oh(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Jn(e) {
    "@babel/helpers - typeof";
    return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Jn(e)
}
function Jl() {
    return Jl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Jl.apply(this, arguments)
}
function c0(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function d0(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, lh(r.key), r)
    }
}
function f0(e, t, n) {
    return t && d0(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function p0(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Zl(e, t)
}
function Zl(e, t) {
    return Zl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i,
        r
    }
    ,
    Zl(e, t)
}
function h0(e) {
    var t = sh();
    return function() {
        var r = Eo(e), i;
        if (t) {
            var o = Eo(this).constructor;
            i = Reflect.construct(r, arguments, o)
        } else
            i = r.apply(this, arguments);
        return m0(this, i)
    }
}
function m0(e, t) {
    if (t && (Jn(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return ea(e)
}
function ea(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function sh() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (sh = function() {
        return !!e
    }
    )()
}
function Eo(e) {
    return Eo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }
    ,
    Eo(e)
}
function Uc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function _e(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Uc(Object(n), !0).forEach(function(r) {
            ta(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Uc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function ta(e, t, n) {
    return t = lh(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function lh(e) {
    var t = y0(e, "string");
    return Jn(t) == "symbol" ? t : String(t)
}
function y0(e, t) {
    if (Jn(e) != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (Jn(r) != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Ws = function(t) {
    var n, r, i, o, s;
    t.rtl ? s = t.slideCount - 1 - t.index : s = t.index,
    i = s < 0 || s >= t.slideCount,
    t.centerMode ? (o = Math.floor(t.slidesToShow / 2),
    r = (s - t.currentSlide) % t.slideCount === 0,
    s > t.currentSlide - o - 1 && s <= t.currentSlide + o && (n = !0)) : n = t.currentSlide <= s && s < t.currentSlide + t.slidesToShow;
    var l;
    t.targetSlide < 0 ? l = t.targetSlide + t.slideCount : t.targetSlide >= t.slideCount ? l = t.targetSlide - t.slideCount : l = t.targetSlide;
    var u = s === l;
    return {
        "slick-slide": !0,
        "slick-active": n,
        "slick-center": r,
        "slick-cloned": i,
        "slick-current": u
    }
}
  , v0 = function(t) {
    var n = {};
    return (t.variableWidth === void 0 || t.variableWidth === !1) && (n.width = t.slideWidth),
    t.fade && (n.position = "relative",
    t.vertical ? n.top = -t.index * parseInt(t.slideHeight) : n.left = -t.index * parseInt(t.slideWidth),
    n.opacity = t.currentSlide === t.index ? 1 : 0,
    n.zIndex = t.currentSlide === t.index ? 999 : 998,
    t.useCSS && (n.transition = "opacity " + t.speed + "ms " + t.cssEase + ", visibility " + t.speed + "ms " + t.cssEase)),
    n
}
  , qs = function(t, n) {
    return t.key || n
}
  , g0 = function(t) {
    var n, r = [], i = [], o = [], s = Pt.default.Children.count(t.children), l = (0,
    Hs.lazyStartIndex)(t), u = (0,
    Hs.lazyEndIndex)(t);
    return Pt.default.Children.forEach(t.children, function(c, d) {
        var f, y = {
            message: "children",
            index: d,
            slidesToScroll: t.slidesToScroll,
            currentSlide: t.currentSlide
        };
        !t.lazyLoad || t.lazyLoad && t.lazyLoadedList.indexOf(d) >= 0 ? f = c : f = Pt.default.createElement("div", null);
        var w = v0(_e(_e({}, t), {}, {
            index: d
        }))
          , v = f.props.className || ""
          , g = Ws(_e(_e({}, t), {}, {
            index: d
        }));
        if (r.push(Pt.default.cloneElement(f, {
            key: "original" + qs(f, d),
            "data-index": d,
            className: (0,
            Bs.default)(g, v),
            tabIndex: "-1",
            "aria-hidden": !g["slick-active"],
            style: _e(_e({
                outline: "none"
            }, f.props.style || {}), w),
            onClick: function(p) {
                f.props && f.props.onClick && f.props.onClick(p),
                t.focusOnSelect && t.focusOnSelect(y)
            }
        })),
        t.infinite && t.fade === !1) {
            var x = s - d;
            x <= (0,
            Hs.getPreClones)(t) && (n = -x,
            n >= l && (f = c),
            g = Ws(_e(_e({}, t), {}, {
                index: n
            })),
            i.push(Pt.default.cloneElement(f, {
                key: "precloned" + qs(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0,
                Bs.default)(g, v),
                "aria-hidden": !g["slick-active"],
                style: _e(_e({}, f.props.style || {}), w),
                onClick: function(p) {
                    f.props && f.props.onClick && f.props.onClick(p),
                    t.focusOnSelect && t.focusOnSelect(y)
                }
            }))),
            n = s + d,
            n < u && (f = c),
            g = Ws(_e(_e({}, t), {}, {
                index: n
            })),
            o.push(Pt.default.cloneElement(f, {
                key: "postcloned" + qs(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0,
                Bs.default)(g, v),
                "aria-hidden": !g["slick-active"],
                style: _e(_e({}, f.props.style || {}), w),
                onClick: function(p) {
                    f.props && f.props.onClick && f.props.onClick(p),
                    t.focusOnSelect && t.focusOnSelect(y)
                }
            }))
        }
    }),
    t.rtl ? i.concat(r, o).reverse() : i.concat(r, o)
};
os.Track = function(e) {
    p0(n, e);
    var t = h0(n);
    function n() {
        var r;
        c0(this, n);
        for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
            o[s] = arguments[s];
        return r = t.call.apply(t, [this].concat(o)),
        ta(ea(r), "node", null),
        ta(ea(r), "handleRef", function(l) {
            r.node = l
        }),
        r
    }
    return f0(n, [{
        key: "render",
        value: function() {
            var i = g0(this.props)
              , o = this.props
              , s = o.onMouseEnter
              , l = o.onMouseOver
              , u = o.onMouseLeave
              , c = {
                onMouseEnter: s,
                onMouseOver: l,
                onMouseLeave: u
            };
            return Pt.default.createElement("div", Jl({
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle
            }, c), i)
        }
    }]),
    n
}(Pt.default.PureComponent);
var ss = {};
function Zn(e) {
    "@babel/helpers - typeof";
    return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Zn(e)
}
Object.defineProperty(ss, "__esModule", {
    value: !0
});
ss.Dots = void 0;
var Pi = ah(N)
  , x0 = ah(is)
  , Bc = C;
function ah(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Hc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function w0(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Hc(Object(n), !0).forEach(function(r) {
            b0(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function b0(e, t, n) {
    return t = uh(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function S0(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function j0(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, uh(r.key), r)
    }
}
function k0(e, t, n) {
    return t && j0(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function uh(e) {
    var t = N0(e, "string");
    return Zn(t) == "symbol" ? t : String(t)
}
function N0(e, t) {
    if (Zn(e) != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (Zn(r) != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function E0(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && na(e, t)
}
function na(e, t) {
    return na = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i,
        r
    }
    ,
    na(e, t)
}
function _0(e) {
    var t = ch();
    return function() {
        var r = _o(e), i;
        if (t) {
            var o = _o(this).constructor;
            i = Reflect.construct(r, arguments, o)
        } else
            i = r.apply(this, arguments);
        return O0(this, i)
    }
}
function O0(e, t) {
    if (t && (Zn(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return T0(e)
}
function T0(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function ch() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (ch = function() {
        return !!e
    }
    )()
}
function _o(e) {
    return _o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }
    ,
    _o(e)
}
var C0 = function(t) {
    var n;
    return t.infinite ? n = Math.ceil(t.slideCount / t.slidesToScroll) : n = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1,
    n
};
ss.Dots = function(e) {
    E0(n, e);
    var t = _0(n);
    function n() {
        return S0(this, n),
        t.apply(this, arguments)
    }
    return k0(n, [{
        key: "clickHandler",
        value: function(i, o) {
            o.preventDefault(),
            this.props.clickHandler(i)
        }
    }, {
        key: "render",
        value: function() {
            for (var i = this.props, o = i.onMouseEnter, s = i.onMouseOver, l = i.onMouseLeave, u = i.infinite, c = i.slidesToScroll, d = i.slidesToShow, f = i.slideCount, y = i.currentSlide, w = C0({
                slideCount: f,
                slidesToScroll: c,
                slidesToShow: d,
                infinite: u
            }), v = {
                onMouseEnter: o,
                onMouseOver: s,
                onMouseLeave: l
            }, g = [], x = 0; x < w; x++) {
                var h = (x + 1) * c - 1
                  , p = u ? h : (0,
                Bc.clamp)(h, 0, f - 1)
                  , m = p - (c - 1)
                  , b = u ? m : (0,
                Bc.clamp)(m, 0, f - 1)
                  , j = (0,
                x0.default)({
                    "slick-active": u ? y >= b && y <= p : y === b
                })
                  , k = {
                    message: "dots",
                    index: x,
                    slidesToScroll: c,
                    currentSlide: y
                }
                  , T = this.clickHandler.bind(this, k);
                g = g.concat(Pi.default.createElement("li", {
                    key: x,
                    className: j
                }, Pi.default.cloneElement(this.props.customPaging(x), {
                    onClick: T
                })))
            }
            return Pi.default.cloneElement(this.props.appendDots(g), w0({
                className: this.props.dotsClass
            }, v))
        }
    }]),
    n
}(Pi.default.PureComponent);
var er = {};
function tr(e) {
    "@babel/helpers - typeof";
    return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    tr(e)
}
Object.defineProperty(er, "__esModule", {
    value: !0
});
er.PrevArrow = er.NextArrow = void 0;
var Wn = fh(N)
  , dh = fh(is)
  , P0 = C;
function fh(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Oo() {
    return Oo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Oo.apply(this, arguments)
}
function Wc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function To(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Wc(Object(n), !0).forEach(function(r) {
            R0(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function R0(e, t, n) {
    return t = mh(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function ph(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function L0(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, mh(r.key), r)
    }
}
function hh(e, t, n) {
    return t && L0(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function mh(e) {
    var t = z0(e, "string");
    return tr(t) == "symbol" ? t : String(t)
}
function z0(e, t) {
    if (tr(e) != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (tr(r) != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function yh(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && ra(e, t)
}
function ra(e, t) {
    return ra = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i,
        r
    }
    ,
    ra(e, t)
}
function vh(e) {
    var t = gh();
    return function() {
        var r = Co(e), i;
        if (t) {
            var o = Co(this).constructor;
            i = Reflect.construct(r, arguments, o)
        } else
            i = r.apply(this, arguments);
        return I0(this, i)
    }
}
function I0(e, t) {
    if (t && (tr(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return D0(e)
}
function D0(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function gh() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (gh = function() {
        return !!e
    }
    )()
}
function Co(e) {
    return Co = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }
    ,
    Co(e)
}
er.PrevArrow = function(e) {
    yh(n, e);
    var t = vh(n);
    function n() {
        return ph(this, n),
        t.apply(this, arguments)
    }
    return hh(n, [{
        key: "clickHandler",
        value: function(i, o) {
            o && o.preventDefault(),
            this.props.clickHandler(i, o)
        }
    }, {
        key: "render",
        value: function() {
            var i = {
                "slick-arrow": !0,
                "slick-prev": !0
            }
              , o = this.clickHandler.bind(this, {
                message: "previous"
            });
            !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (i["slick-disabled"] = !0,
            o = null);
            var s = {
                key: "0",
                "data-role": "none",
                className: (0,
                dh.default)(i),
                style: {
                    display: "block"
                },
                onClick: o
            }, l = {
                currentSlide: this.props.currentSlide,
                slideCount: this.props.slideCount
            }, u;
            return this.props.prevArrow ? u = Wn.default.cloneElement(this.props.prevArrow, To(To({}, s), l)) : u = Wn.default.createElement("button", Oo({
                key: "0",
                type: "button"
            }, s), " ", "Previous"),
            u
        }
    }]),
    n
}(Wn.default.PureComponent);
er.NextArrow = function(e) {
    yh(n, e);
    var t = vh(n);
    function n() {
        return ph(this, n),
        t.apply(this, arguments)
    }
    return hh(n, [{
        key: "clickHandler",
        value: function(i, o) {
            o && o.preventDefault(),
            this.props.clickHandler(i, o)
        }
    }, {
        key: "render",
        value: function() {
            var i = {
                "slick-arrow": !0,
                "slick-next": !0
            }
              , o = this.clickHandler.bind(this, {
                message: "next"
            });
            (0,
            P0.canGoNext)(this.props) || (i["slick-disabled"] = !0,
            o = null);
            var s = {
                key: "1",
                "data-role": "none",
                className: (0,
                dh.default)(i),
                style: {
                    display: "block"
                },
                onClick: o
            }, l = {
                currentSlide: this.props.currentSlide,
                slideCount: this.props.slideCount
            }, u;
            return this.props.nextArrow ? u = Wn.default.cloneElement(this.props.nextArrow, To(To({}, s), l)) : u = Wn.default.createElement("button", Oo({
                key: "1",
                type: "button"
            }, s), " ", "Next"),
            u
        }
    }]),
    n
}(Wn.default.PureComponent);
var xh = function() {
    if (typeof Map < "u")
        return Map;
    function e(t, n) {
        var r = -1;
        return t.some(function(i, o) {
            return i[0] === n ? (r = o,
            !0) : !1
        }),
        r
    }
    return function() {
        function t() {
            this.__entries__ = []
        }
        return Object.defineProperty(t.prototype, "size", {
            get: function() {
                return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.get = function(n) {
            var r = e(this.__entries__, n)
              , i = this.__entries__[r];
            return i && i[1]
        }
        ,
        t.prototype.set = function(n, r) {
            var i = e(this.__entries__, n);
            ~i ? this.__entries__[i][1] = r : this.__entries__.push([n, r])
        }
        ,
        t.prototype.delete = function(n) {
            var r = this.__entries__
              , i = e(r, n);
            ~i && r.splice(i, 1)
        }
        ,
        t.prototype.has = function(n) {
            return !!~e(this.__entries__, n)
        }
        ,
        t.prototype.clear = function() {
            this.__entries__.splice(0)
        }
        ,
        t.prototype.forEach = function(n, r) {
            r === void 0 && (r = null);
            for (var i = 0, o = this.__entries__; i < o.length; i++) {
                var s = o[i];
                n.call(r, s[1], s[0])
            }
        }
        ,
        t
    }()
}()
  , ia = typeof window < "u" && typeof document < "u" && window.document === document
  , Po = function() {
    return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")()
}()
  , M0 = function() {
    return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Po) : function(e) {
        return setTimeout(function() {
            return e(Date.now())
        }, 1e3 / 60)
    }
}()
  , A0 = 2;
function F0(e, t) {
    var n = !1
      , r = !1
      , i = 0;
    function o() {
        n && (n = !1,
        e()),
        r && l()
    }
    function s() {
        M0(o)
    }
    function l() {
        var u = Date.now();
        if (n) {
            if (u - i < A0)
                return;
            r = !0
        } else
            n = !0,
            r = !1,
            setTimeout(s, t);
        i = u
    }
    return l
}
var $0 = 20
  , U0 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"]
  , B0 = typeof MutationObserver < "u"
  , H0 = function() {
    function e() {
        this.connected_ = !1,
        this.mutationEventsAdded_ = !1,
        this.mutationsObserver_ = null,
        this.observers_ = [],
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
        this.refresh = F0(this.refresh.bind(this), $0)
    }
    return e.prototype.addObserver = function(t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
        this.connected_ || this.connect_()
    }
    ,
    e.prototype.removeObserver = function(t) {
        var n = this.observers_
          , r = n.indexOf(t);
        ~r && n.splice(r, 1),
        !n.length && this.connected_ && this.disconnect_()
    }
    ,
    e.prototype.refresh = function() {
        var t = this.updateObservers_();
        t && this.refresh()
    }
    ,
    e.prototype.updateObservers_ = function() {
        var t = this.observers_.filter(function(n) {
            return n.gatherActive(),
            n.hasActive()
        });
        return t.forEach(function(n) {
            return n.broadcastActive()
        }),
        t.length > 0
    }
    ,
    e.prototype.connect_ = function() {
        !ia || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_),
        window.addEventListener("resize", this.refresh),
        B0 ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
        this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
        this.mutationEventsAdded_ = !0),
        this.connected_ = !0)
    }
    ,
    e.prototype.disconnect_ = function() {
        !ia || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_),
        window.removeEventListener("resize", this.refresh),
        this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
        this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
        this.mutationsObserver_ = null,
        this.mutationEventsAdded_ = !1,
        this.connected_ = !1)
    }
    ,
    e.prototype.onTransitionEnd_ = function(t) {
        var n = t.propertyName
          , r = n === void 0 ? "" : n
          , i = U0.some(function(o) {
            return !!~r.indexOf(o)
        });
        i && this.refresh()
    }
    ,
    e.getInstance = function() {
        return this.instance_ || (this.instance_ = new e),
        this.instance_
    }
    ,
    e.instance_ = null,
    e
}()
  , wh = function(e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
        var i = r[n];
        Object.defineProperty(e, i, {
            value: t[i],
            enumerable: !1,
            writable: !1,
            configurable: !0
        })
    }
    return e
}
  , nr = function(e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || Po
}
  , bh = ls(0, 0, 0, 0);
function Ro(e) {
    return parseFloat(e) || 0
}
function qc(e) {
    for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
    return t.reduce(function(r, i) {
        var o = e["border-" + i + "-width"];
        return r + Ro(o)
    }, 0)
}
function W0(e) {
    for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t; r < i.length; r++) {
        var o = i[r]
          , s = e["padding-" + o];
        n[o] = Ro(s)
    }
    return n
}
function q0(e) {
    var t = e.getBBox();
    return ls(0, 0, t.width, t.height)
}
function V0(e) {
    var t = e.clientWidth
      , n = e.clientHeight;
    if (!t && !n)
        return bh;
    var r = nr(e).getComputedStyle(e)
      , i = W0(r)
      , o = i.left + i.right
      , s = i.top + i.bottom
      , l = Ro(r.width)
      , u = Ro(r.height);
    if (r.boxSizing === "border-box" && (Math.round(l + o) !== t && (l -= qc(r, "left", "right") + o),
    Math.round(u + s) !== n && (u -= qc(r, "top", "bottom") + s)),
    !K0(e)) {
        var c = Math.round(l + o) - t
          , d = Math.round(u + s) - n;
        Math.abs(c) !== 1 && (l -= c),
        Math.abs(d) !== 1 && (u -= d)
    }
    return ls(i.left, i.top, l, u)
}
var Q0 = function() {
    return typeof SVGGraphicsElement < "u" ? function(e) {
        return e instanceof nr(e).SVGGraphicsElement
    }
    : function(e) {
        return e instanceof nr(e).SVGElement && typeof e.getBBox == "function"
    }
}();
function K0(e) {
    return e === nr(e).document.documentElement
}
function G0(e) {
    return ia ? Q0(e) ? q0(e) : V0(e) : bh
}
function Y0(e) {
    var t = e.x
      , n = e.y
      , r = e.width
      , i = e.height
      , o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object
      , s = Object.create(o.prototype);
    return wh(s, {
        x: t,
        y: n,
        width: r,
        height: i,
        top: n,
        right: t + r,
        bottom: i + n,
        left: t
    }),
    s
}
function ls(e, t, n, r) {
    return {
        x: e,
        y: t,
        width: n,
        height: r
    }
}
var X0 = function() {
    function e(t) {
        this.broadcastWidth = 0,
        this.broadcastHeight = 0,
        this.contentRect_ = ls(0, 0, 0, 0),
        this.target = t
    }
    return e.prototype.isActive = function() {
        var t = G0(this.target);
        return this.contentRect_ = t,
        t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
    }
    ,
    e.prototype.broadcastRect = function() {
        var t = this.contentRect_;
        return this.broadcastWidth = t.width,
        this.broadcastHeight = t.height,
        t
    }
    ,
    e
}()
  , J0 = function() {
    function e(t, n) {
        var r = Y0(n);
        wh(this, {
            target: t,
            contentRect: r
        })
    }
    return e
}()
  , Z0 = function() {
    function e(t, n, r) {
        if (this.activeObservations_ = [],
        this.observations_ = new xh,
        typeof t != "function")
            throw new TypeError("The callback provided as parameter 1 is not a function.");
        this.callback_ = t,
        this.controller_ = n,
        this.callbackCtx_ = r
    }
    return e.prototype.observe = function(t) {
        if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
            if (!(t instanceof nr(t).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) || (n.set(t, new X0(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh())
        }
    }
    ,
    e.prototype.unobserve = function(t) {
        if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
            if (!(t instanceof nr(t).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
            var n = this.observations_;
            n.has(t) && (n.delete(t),
            n.size || this.controller_.removeObserver(this))
        }
    }
    ,
    e.prototype.disconnect = function() {
        this.clearActive(),
        this.observations_.clear(),
        this.controller_.removeObserver(this)
    }
    ,
    e.prototype.gatherActive = function() {
        var t = this;
        this.clearActive(),
        this.observations_.forEach(function(n) {
            n.isActive() && t.activeObservations_.push(n)
        })
    }
    ,
    e.prototype.broadcastActive = function() {
        if (this.hasActive()) {
            var t = this.callbackCtx_
              , n = this.activeObservations_.map(function(r) {
                return new J0(r.target,r.broadcastRect())
            });
            this.callback_.call(t, n, t),
            this.clearActive()
        }
    }
    ,
    e.prototype.clearActive = function() {
        this.activeObservations_.splice(0)
    }
    ,
    e.prototype.hasActive = function() {
        return this.activeObservations_.length > 0
    }
    ,
    e
}()
  , Sh = typeof WeakMap < "u" ? new WeakMap : new xh
  , jh = function() {
    function e(t) {
        if (!(this instanceof e))
            throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
        var n = H0.getInstance()
          , r = new Z0(t,n,this);
        Sh.set(this, r)
    }
    return e
}();
["observe", "unobserve", "disconnect"].forEach(function(e) {
    jh.prototype[e] = function() {
        var t;
        return (t = Sh.get(this))[e].apply(t, arguments)
    }
});
var ex = function() {
    return typeof Po.ResizeObserver < "u" ? Po.ResizeObserver : jh
}();
const tx = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ex
}, Symbol.toStringTag, {
    value: "Module"
}))
  , nx = om(tx);
Object.defineProperty(rs, "__esModule", {
    value: !0
});
rs.InnerSlider = void 0;
var Se = ai(N)
  , rx = ai(Kp)
  , ix = ai(Kg)
  , ox = ai(is)
  , Z = C
  , sx = os
  , lx = ss
  , Vc = er
  , ax = ai(nx);
function ai(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function yn(e) {
    "@babel/helpers - typeof";
    return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    yn(e)
}
function Lo() {
    return Lo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Lo.apply(this, arguments)
}
function ux(e, t) {
    if (e == null)
        return {};
    var n = cx(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function cx(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function Qc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Qc(Object(n), !0).forEach(function(r) {
            H(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qc(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function dx(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function fx(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, Nh(r.key), r)
    }
}
function px(e, t, n) {
    return t && fx(e.prototype, t),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function hx(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && oa(e, t)
}
function oa(e, t) {
    return oa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i,
        r
    }
    ,
    oa(e, t)
}
function mx(e) {
    var t = kh();
    return function() {
        var r = zo(e), i;
        if (t) {
            var o = zo(this).constructor;
            i = Reflect.construct(r, arguments, o)
        } else
            i = r.apply(this, arguments);
        return yx(this, i)
    }
}
function yx(e, t) {
    if (t && (yn(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return B(e)
}
function B(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function kh() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (kh = function() {
        return !!e
    }
    )()
}
function zo(e) {
    return zo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }
    ,
    zo(e)
}
function H(e, t, n) {
    return t = Nh(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Nh(e) {
    var t = vx(e, "string");
    return yn(t) == "symbol" ? t : String(t)
}
function vx(e, t) {
    if (yn(e) != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (yn(r) != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
rs.InnerSlider = function(e) {
    hx(n, e);
    var t = mx(n);
    function n(r) {
        var i;
        dx(this, n),
        i = t.call(this, r),
        H(B(i), "listRefHandler", function(s) {
            return i.list = s
        }),
        H(B(i), "trackRefHandler", function(s) {
            return i.track = s
        }),
        H(B(i), "adaptHeight", function() {
            if (i.props.adaptiveHeight && i.list) {
                var s = i.list.querySelector('[data-index="'.concat(i.state.currentSlide, '"]'));
                i.list.style.height = (0,
                Z.getHeight)(s) + "px"
            }
        }),
        H(B(i), "componentDidMount", function() {
            if (i.props.onInit && i.props.onInit(),
            i.props.lazyLoad) {
                var s = (0,
                Z.getOnDemandLazySlides)(D(D({}, i.props), i.state));
                s.length > 0 && (i.setState(function(u) {
                    return {
                        lazyLoadedList: u.lazyLoadedList.concat(s)
                    }
                }),
                i.props.onLazyLoad && i.props.onLazyLoad(s))
            }
            var l = D({
                listRef: i.list,
                trackRef: i.track
            }, i.props);
            i.updateState(l, !0, function() {
                i.adaptHeight(),
                i.props.autoplay && i.autoPlay("update")
            }),
            i.props.lazyLoad === "progressive" && (i.lazyLoadTimer = setInterval(i.progressiveLazyLoad, 1e3)),
            i.ro = new ax.default(function() {
                i.state.animating ? (i.onWindowResized(!1),
                i.callbackTimers.push(setTimeout(function() {
                    return i.onWindowResized()
                }, i.props.speed))) : i.onWindowResized()
            }
            ),
            i.ro.observe(i.list),
            document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(u) {
                u.onfocus = i.props.pauseOnFocus ? i.onSlideFocus : null,
                u.onblur = i.props.pauseOnFocus ? i.onSlideBlur : null
            }),
            window.addEventListener ? window.addEventListener("resize", i.onWindowResized) : window.attachEvent("onresize", i.onWindowResized)
        }),
        H(B(i), "componentWillUnmount", function() {
            i.animationEndCallback && clearTimeout(i.animationEndCallback),
            i.lazyLoadTimer && clearInterval(i.lazyLoadTimer),
            i.callbackTimers.length && (i.callbackTimers.forEach(function(s) {
                return clearTimeout(s)
            }),
            i.callbackTimers = []),
            window.addEventListener ? window.removeEventListener("resize", i.onWindowResized) : window.detachEvent("onresize", i.onWindowResized),
            i.autoplayTimer && clearInterval(i.autoplayTimer),
            i.ro.disconnect()
        }),
        H(B(i), "componentDidUpdate", function(s) {
            if (i.checkImagesLoad(),
            i.props.onReInit && i.props.onReInit(),
            i.props.lazyLoad) {
                var l = (0,
                Z.getOnDemandLazySlides)(D(D({}, i.props), i.state));
                l.length > 0 && (i.setState(function(d) {
                    return {
                        lazyLoadedList: d.lazyLoadedList.concat(l)
                    }
                }),
                i.props.onLazyLoad && i.props.onLazyLoad(l))
            }
            i.adaptHeight();
            var u = D(D({
                listRef: i.list,
                trackRef: i.track
            }, i.props), i.state)
              , c = i.didPropsChange(s);
            c && i.updateState(u, c, function() {
                i.state.currentSlide >= Se.default.Children.count(i.props.children) && i.changeSlide({
                    message: "index",
                    index: Se.default.Children.count(i.props.children) - i.props.slidesToShow,
                    currentSlide: i.state.currentSlide
                }),
                i.props.autoplay ? i.autoPlay("update") : i.pause("paused")
            })
        }),
        H(B(i), "onWindowResized", function(s) {
            i.debouncedResize && i.debouncedResize.cancel(),
            i.debouncedResize = (0,
            ix.default)(function() {
                return i.resizeWindow(s)
            }, 50),
            i.debouncedResize()
        }),
        H(B(i), "resizeWindow", function() {
            var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
              , l = !!(i.track && i.track.node);
            if (l) {
                var u = D(D({
                    listRef: i.list,
                    trackRef: i.track
                }, i.props), i.state);
                i.updateState(u, s, function() {
                    i.props.autoplay ? i.autoPlay("update") : i.pause("paused")
                }),
                i.setState({
                    animating: !1
                }),
                clearTimeout(i.animationEndCallback),
                delete i.animationEndCallback
            }
        }),
        H(B(i), "updateState", function(s, l, u) {
            var c = (0,
            Z.initializedState)(s);
            s = D(D(D({}, s), c), {}, {
                slideIndex: c.currentSlide
            });
            var d = (0,
            Z.getTrackLeft)(s);
            s = D(D({}, s), {}, {
                left: d
            });
            var f = (0,
            Z.getTrackCSS)(s);
            (l || Se.default.Children.count(i.props.children) !== Se.default.Children.count(s.children)) && (c.trackStyle = f),
            i.setState(c, u)
        }),
        H(B(i), "ssrInit", function() {
            if (i.props.variableWidth) {
                var s = 0
                  , l = 0
                  , u = []
                  , c = (0,
                Z.getPreClones)(D(D(D({}, i.props), i.state), {}, {
                    slideCount: i.props.children.length
                }))
                  , d = (0,
                Z.getPostClones)(D(D(D({}, i.props), i.state), {}, {
                    slideCount: i.props.children.length
                }));
                i.props.children.forEach(function(T) {
                    u.push(T.props.style.width),
                    s += T.props.style.width
                });
                for (var f = 0; f < c; f++)
                    l += u[u.length - 1 - f],
                    s += u[u.length - 1 - f];
                for (var y = 0; y < d; y++)
                    s += u[y];
                for (var w = 0; w < i.state.currentSlide; w++)
                    l += u[w];
                var v = {
                    width: s + "px",
                    left: -l + "px"
                };
                if (i.props.centerMode) {
                    var g = "".concat(u[i.state.currentSlide], "px");
                    v.left = "calc(".concat(v.left, " + (100% - ").concat(g, ") / 2 ) ")
                }
                return {
                    trackStyle: v
                }
            }
            var x = Se.default.Children.count(i.props.children)
              , h = D(D(D({}, i.props), i.state), {}, {
                slideCount: x
            })
              , p = (0,
            Z.getPreClones)(h) + (0,
            Z.getPostClones)(h) + x
              , m = 100 / i.props.slidesToShow * p
              , b = 100 / p
              , j = -b * ((0,
            Z.getPreClones)(h) + i.state.currentSlide) * m / 100;
            i.props.centerMode && (j += (100 - b * m / 100) / 2);
            var k = {
                width: m + "%",
                left: j + "%"
            };
            return {
                slideWidth: b + "%",
                trackStyle: k
            }
        }),
        H(B(i), "checkImagesLoad", function() {
            var s = i.list && i.list.querySelectorAll && i.list.querySelectorAll(".slick-slide img") || []
              , l = s.length
              , u = 0;
            Array.prototype.forEach.call(s, function(c) {
                var d = function() {
                    return ++u && u >= l && i.onWindowResized()
                };
                if (!c.onclick)
                    c.onclick = function() {
                        return c.parentNode.focus()
                    }
                    ;
                else {
                    var f = c.onclick;
                    c.onclick = function(y) {
                        f(y),
                        c.parentNode.focus()
                    }
                }
                c.onload || (i.props.lazyLoad ? c.onload = function() {
                    i.adaptHeight(),
                    i.callbackTimers.push(setTimeout(i.onWindowResized, i.props.speed))
                }
                : (c.onload = d,
                c.onerror = function() {
                    d(),
                    i.props.onLazyLoadError && i.props.onLazyLoadError()
                }
                ))
            })
        }),
        H(B(i), "progressiveLazyLoad", function() {
            for (var s = [], l = D(D({}, i.props), i.state), u = i.state.currentSlide; u < i.state.slideCount + (0,
            Z.getPostClones)(l); u++)
                if (i.state.lazyLoadedList.indexOf(u) < 0) {
                    s.push(u);
                    break
                }
            for (var c = i.state.currentSlide - 1; c >= -(0,
            Z.getPreClones)(l); c--)
                if (i.state.lazyLoadedList.indexOf(c) < 0) {
                    s.push(c);
                    break
                }
            s.length > 0 ? (i.setState(function(d) {
                return {
                    lazyLoadedList: d.lazyLoadedList.concat(s)
                }
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(s)) : i.lazyLoadTimer && (clearInterval(i.lazyLoadTimer),
            delete i.lazyLoadTimer)
        }),
        H(B(i), "slideHandler", function(s) {
            var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
              , u = i.props
              , c = u.asNavFor
              , d = u.beforeChange
              , f = u.onLazyLoad
              , y = u.speed
              , w = u.afterChange
              , v = i.state.currentSlide
              , g = (0,
            Z.slideHandler)(D(D(D({
                index: s
            }, i.props), i.state), {}, {
                trackRef: i.track,
                useCSS: i.props.useCSS && !l
            }))
              , x = g.state
              , h = g.nextState;
            if (x) {
                d && d(v, x.currentSlide);
                var p = x.lazyLoadedList.filter(function(m) {
                    return i.state.lazyLoadedList.indexOf(m) < 0
                });
                f && p.length > 0 && f(p),
                !i.props.waitForAnimate && i.animationEndCallback && (clearTimeout(i.animationEndCallback),
                w && w(v),
                delete i.animationEndCallback),
                i.setState(x, function() {
                    c && i.asNavForIndex !== s && (i.asNavForIndex = s,
                    c.innerSlider.slideHandler(s)),
                    h && (i.animationEndCallback = setTimeout(function() {
                        var m = h.animating
                          , b = ux(h, ["animating"]);
                        i.setState(b, function() {
                            i.callbackTimers.push(setTimeout(function() {
                                return i.setState({
                                    animating: m
                                })
                            }, 10)),
                            w && w(x.currentSlide),
                            delete i.animationEndCallback
                        })
                    }, y))
                })
            }
        }),
        H(B(i), "changeSlide", function(s) {
            var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
              , u = D(D({}, i.props), i.state)
              , c = (0,
            Z.changeSlide)(u, s);
            if (!(c !== 0 && !c) && (l === !0 ? i.slideHandler(c, l) : i.slideHandler(c),
            i.props.autoplay && i.autoPlay("update"),
            i.props.focusOnSelect)) {
                var d = i.list.querySelectorAll(".slick-current");
                d[0] && d[0].focus()
            }
        }),
        H(B(i), "clickHandler", function(s) {
            i.clickable === !1 && (s.stopPropagation(),
            s.preventDefault()),
            i.clickable = !0
        }),
        H(B(i), "keyHandler", function(s) {
            var l = (0,
            Z.keyHandler)(s, i.props.accessibility, i.props.rtl);
            l !== "" && i.changeSlide({
                message: l
            })
        }),
        H(B(i), "selectHandler", function(s) {
            i.changeSlide(s)
        }),
        H(B(i), "disableBodyScroll", function() {
            var s = function(u) {
                u = u || window.event,
                u.preventDefault && u.preventDefault(),
                u.returnValue = !1
            };
            window.ontouchmove = s
        }),
        H(B(i), "enableBodyScroll", function() {
            window.ontouchmove = null
        }),
        H(B(i), "swipeStart", function(s) {
            i.props.verticalSwiping && i.disableBodyScroll();
            var l = (0,
            Z.swipeStart)(s, i.props.swipe, i.props.draggable);
            l !== "" && i.setState(l)
        }),
        H(B(i), "swipeMove", function(s) {
            var l = (0,
            Z.swipeMove)(s, D(D(D({}, i.props), i.state), {}, {
                trackRef: i.track,
                listRef: i.list,
                slideIndex: i.state.currentSlide
            }));
            l && (l.swiping && (i.clickable = !1),
            i.setState(l))
        }),
        H(B(i), "swipeEnd", function(s) {
            var l = (0,
            Z.swipeEnd)(s, D(D(D({}, i.props), i.state), {}, {
                trackRef: i.track,
                listRef: i.list,
                slideIndex: i.state.currentSlide
            }));
            if (l) {
                var u = l.triggerSlideHandler;
                delete l.triggerSlideHandler,
                i.setState(l),
                u !== void 0 && (i.slideHandler(u),
                i.props.verticalSwiping && i.enableBodyScroll())
            }
        }),
        H(B(i), "touchEnd", function(s) {
            i.swipeEnd(s),
            i.clickable = !0
        }),
        H(B(i), "slickPrev", function() {
            i.callbackTimers.push(setTimeout(function() {
                return i.changeSlide({
                    message: "previous"
                })
            }, 0))
        }),
        H(B(i), "slickNext", function() {
            i.callbackTimers.push(setTimeout(function() {
                return i.changeSlide({
                    message: "next"
                })
            }, 0))
        }),
        H(B(i), "slickGoTo", function(s) {
            var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            if (s = Number(s),
            isNaN(s))
                return "";
            i.callbackTimers.push(setTimeout(function() {
                return i.changeSlide({
                    message: "index",
                    index: s,
                    currentSlide: i.state.currentSlide
                }, l)
            }, 0))
        }),
        H(B(i), "play", function() {
            var s;
            if (i.props.rtl)
                s = i.state.currentSlide - i.props.slidesToScroll;
            else if ((0,
            Z.canGoNext)(D(D({}, i.props), i.state)))
                s = i.state.currentSlide + i.props.slidesToScroll;
            else
                return !1;
            i.slideHandler(s)
        }),
        H(B(i), "autoPlay", function(s) {
            i.autoplayTimer && clearInterval(i.autoplayTimer);
            var l = i.state.autoplaying;
            if (s === "update") {
                if (l === "hovered" || l === "focused" || l === "paused")
                    return
            } else if (s === "leave") {
                if (l === "paused" || l === "focused")
                    return
            } else if (s === "blur" && (l === "paused" || l === "hovered"))
                return;
            i.autoplayTimer = setInterval(i.play, i.props.autoplaySpeed + 50),
            i.setState({
                autoplaying: "playing"
            })
        }),
        H(B(i), "pause", function(s) {
            i.autoplayTimer && (clearInterval(i.autoplayTimer),
            i.autoplayTimer = null);
            var l = i.state.autoplaying;
            s === "paused" ? i.setState({
                autoplaying: "paused"
            }) : s === "focused" ? (l === "hovered" || l === "playing") && i.setState({
                autoplaying: "focused"
            }) : l === "playing" && i.setState({
                autoplaying: "hovered"
            })
        }),
        H(B(i), "onDotsOver", function() {
            return i.props.autoplay && i.pause("hovered")
        }),
        H(B(i), "onDotsLeave", function() {
            return i.props.autoplay && i.state.autoplaying === "hovered" && i.autoPlay("leave")
        }),
        H(B(i), "onTrackOver", function() {
            return i.props.autoplay && i.pause("hovered")
        }),
        H(B(i), "onTrackLeave", function() {
            return i.props.autoplay && i.state.autoplaying === "hovered" && i.autoPlay("leave")
        }),
        H(B(i), "onSlideFocus", function() {
            return i.props.autoplay && i.pause("focused")
        }),
        H(B(i), "onSlideBlur", function() {
            return i.props.autoplay && i.state.autoplaying === "focused" && i.autoPlay("blur")
        }),
        H(B(i), "render", function() {
            var s = (0,
            ox.default)("slick-slider", i.props.className, {
                "slick-vertical": i.props.vertical,
                "slick-initialized": !0
            })
              , l = D(D({}, i.props), i.state)
              , u = (0,
            Z.extractObject)(l, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"])
              , c = i.props.pauseOnHover;
            u = D(D({}, u), {}, {
                onMouseEnter: c ? i.onTrackOver : null,
                onMouseLeave: c ? i.onTrackLeave : null,
                onMouseOver: c ? i.onTrackOver : null,
                focusOnSelect: i.props.focusOnSelect && i.clickable ? i.selectHandler : null
            });
            var d;
            if (i.props.dots === !0 && i.state.slideCount >= i.props.slidesToShow) {
                var f = (0,
                Z.extractObject)(l, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"])
                  , y = i.props.pauseOnDotsHover;
                f = D(D({}, f), {}, {
                    clickHandler: i.changeSlide,
                    onMouseEnter: y ? i.onDotsLeave : null,
                    onMouseOver: y ? i.onDotsOver : null,
                    onMouseLeave: y ? i.onDotsLeave : null
                }),
                d = Se.default.createElement(lx.Dots, f)
            }
            var w, v, g = (0,
            Z.extractObject)(l, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
            g.clickHandler = i.changeSlide,
            i.props.arrows && (w = Se.default.createElement(Vc.PrevArrow, g),
            v = Se.default.createElement(Vc.NextArrow, g));
            var x = null;
            i.props.vertical && (x = {
                height: i.state.listHeight
            });
            var h = null;
            i.props.vertical === !1 ? i.props.centerMode === !0 && (h = {
                padding: "0px " + i.props.centerPadding
            }) : i.props.centerMode === !0 && (h = {
                padding: i.props.centerPadding + " 0px"
            });
            var p = D(D({}, x), h)
              , m = i.props.touchMove
              , b = {
                className: "slick-list",
                style: p,
                onClick: i.clickHandler,
                onMouseDown: m ? i.swipeStart : null,
                onMouseMove: i.state.dragging && m ? i.swipeMove : null,
                onMouseUp: m ? i.swipeEnd : null,
                onMouseLeave: i.state.dragging && m ? i.swipeEnd : null,
                onTouchStart: m ? i.swipeStart : null,
                onTouchMove: i.state.dragging && m ? i.swipeMove : null,
                onTouchEnd: m ? i.touchEnd : null,
                onTouchCancel: i.state.dragging && m ? i.swipeEnd : null,
                onKeyDown: i.props.accessibility ? i.keyHandler : null
            }
              , j = {
                className: s,
                dir: "ltr",
                style: i.props.style
            };
            return i.props.unslick && (b = {
                className: "slick-list"
            },
            j = {
                className: s
            }),
            Se.default.createElement("div", j, i.props.unslick ? "" : w, Se.default.createElement("div", Lo({
                ref: i.listRefHandler
            }, b), Se.default.createElement(sx.Track, Lo({
                ref: i.trackRefHandler
            }, u), i.props.children)), i.props.unslick ? "" : v, i.props.unslick ? "" : d)
        }),
        i.list = null,
        i.track = null,
        i.state = D(D({}, rx.default), {}, {
            currentSlide: i.props.initialSlide,
            targetSlide: i.props.initialSlide ? i.props.initialSlide : 0,
            slideCount: Se.default.Children.count(i.props.children)
        }),
        i.callbackTimers = [],
        i.clickable = !0,
        i.debouncedResize = null;
        var o = i.ssrInit();
        return i.state = D(D({}, i.state), o),
        i
    }
    return px(n, [{
        key: "didPropsChange",
        value: function(i) {
            for (var o = !1, s = 0, l = Object.keys(this.props); s < l.length; s++) {
                var u = l[s];
                if (!i.hasOwnProperty(u)) {
                    o = !0;
                    break
                }
                if (!(yn(i[u]) === "object" || typeof i[u] == "function" || isNaN(i[u])) && i[u] !== this.props[u]) {
                    o = !0;
                    break
                }
            }
            return o || Se.default.Children.count(this.props.children) !== Se.default.Children.count(i.children)
        }
    }]),
    n
}(Se.default.Component);
var gx = function(e) {
    return e.replace(/[A-Z]/g, function(t) {
        return "-" + t.toLowerCase()
    }).toLowerCase()
}, xx = gx, wx = xx, bx = function(e) {
    var t = /[height|width]$/;
    return t.test(e)
}, Kc = function(e) {
    var t = ""
      , n = Object.keys(e);
    return n.forEach(function(r, i) {
        var o = e[r];
        r = wx(r),
        bx(r) && typeof o == "number" && (o = o + "px"),
        o === !0 ? t += r : o === !1 ? t += "not " + r : t += "(" + r + ": " + o + ")",
        i < n.length - 1 && (t += " and ")
    }),
    t
}, Sx = function(e) {
    var t = "";
    return typeof e == "string" ? e : e instanceof Array ? (e.forEach(function(n, r) {
        t += Kc(n),
        r < e.length - 1 && (t += ", ")
    }),
    t) : Kc(e)
}, jx = Sx, Vs, Gc;
function kx() {
    if (Gc)
        return Vs;
    Gc = 1;
    function e(t) {
        this.options = t,
        !t.deferSetup && this.setup()
    }
    return e.prototype = {
        constructor: e,
        setup: function() {
            this.options.setup && this.options.setup(),
            this.initialised = !0
        },
        on: function() {
            !this.initialised && this.setup(),
            this.options.match && this.options.match()
        },
        off: function() {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(t) {
            return this.options === t || this.options.match === t
        }
    },
    Vs = e,
    Vs
}
var Qs, Yc;
function Eh() {
    if (Yc)
        return Qs;
    Yc = 1;
    function e(r, i) {
        var o = 0, s = r.length, l;
        for (o; o < s && (l = i(r[o], o),
        l !== !1); o++)
            ;
    }
    function t(r) {
        return Object.prototype.toString.apply(r) === "[object Array]"
    }
    function n(r) {
        return typeof r == "function"
    }
    return Qs = {
        isFunction: n,
        isArray: t,
        each: e
    },
    Qs
}
var Ks, Xc;
function Nx() {
    if (Xc)
        return Ks;
    Xc = 1;
    var e = kx()
      , t = Eh().each;
    function n(r, i) {
        this.query = r,
        this.isUnconditional = i,
        this.handlers = [],
        this.mql = window.matchMedia(r);
        var o = this;
        this.listener = function(s) {
            o.mql = s.currentTarget || s,
            o.assess()
        }
        ,
        this.mql.addListener(this.listener)
    }
    return n.prototype = {
        constuctor: n,
        addHandler: function(r) {
            var i = new e(r);
            this.handlers.push(i),
            this.matches() && i.on()
        },
        removeHandler: function(r) {
            var i = this.handlers;
            t(i, function(o, s) {
                if (o.equals(r))
                    return o.destroy(),
                    !i.splice(s, 1)
            })
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional
        },
        clear: function() {
            t(this.handlers, function(r) {
                r.destroy()
            }),
            this.mql.removeListener(this.listener),
            this.handlers.length = 0
        },
        assess: function() {
            var r = this.matches() ? "on" : "off";
            t(this.handlers, function(i) {
                i[r]()
            })
        }
    },
    Ks = n,
    Ks
}
var Gs, Jc;
function Ex() {
    if (Jc)
        return Gs;
    Jc = 1;
    var e = Nx()
      , t = Eh()
      , n = t.each
      , r = t.isFunction
      , i = t.isArray;
    function o() {
        if (!window.matchMedia)
            throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {},
        this.browserIsIncapable = !window.matchMedia("only all").matches
    }
    return o.prototype = {
        constructor: o,
        register: function(s, l, u) {
            var c = this.queries
              , d = u && this.browserIsIncapable;
            return c[s] || (c[s] = new e(s,d)),
            r(l) && (l = {
                match: l
            }),
            i(l) || (l = [l]),
            n(l, function(f) {
                r(f) && (f = {
                    match: f
                }),
                c[s].addHandler(f)
            }),
            this
        },
        unregister: function(s, l) {
            var u = this.queries[s];
            return u && (l ? u.removeHandler(l) : (u.clear(),
            delete this.queries[s])),
            this
        }
    },
    Gs = o,
    Gs
}
var Ys, Zc;
function _x() {
    if (Zc)
        return Ys;
    Zc = 1;
    var e = Ex();
    return Ys = new e,
    Ys
}
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = void 0;
    var t = s(N)
      , n = rs
      , r = s(jx)
      , i = s(fu)
      , o = C;
    function s(O) {
        return O && O.__esModule ? O : {
            default: O
        }
    }
    function l(O) {
        "@babel/helpers - typeof";
        return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(E) {
            return typeof E
        }
        : function(E) {
            return E && typeof Symbol == "function" && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E
        }
        ,
        l(O)
    }
    function u() {
        return u = Object.assign ? Object.assign.bind() : function(O) {
            for (var E = 1; E < arguments.length; E++) {
                var M = arguments[E];
                for (var z in M)
                    Object.prototype.hasOwnProperty.call(M, z) && (O[z] = M[z])
            }
            return O
        }
        ,
        u.apply(this, arguments)
    }
    function c(O, E) {
        var M = Object.keys(O);
        if (Object.getOwnPropertySymbols) {
            var z = Object.getOwnPropertySymbols(O);
            E && (z = z.filter(function(A) {
                return Object.getOwnPropertyDescriptor(O, A).enumerable
            })),
            M.push.apply(M, z)
        }
        return M
    }
    function d(O) {
        for (var E = 1; E < arguments.length; E++) {
            var M = arguments[E] != null ? arguments[E] : {};
            E % 2 ? c(Object(M), !0).forEach(function(z) {
                j(O, z, M[z])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(M)) : c(Object(M)).forEach(function(z) {
                Object.defineProperty(O, z, Object.getOwnPropertyDescriptor(M, z))
            })
        }
        return O
    }
    function f(O, E) {
        if (!(O instanceof E))
            throw new TypeError("Cannot call a class as a function")
    }
    function y(O, E) {
        for (var M = 0; M < E.length; M++) {
            var z = E[M];
            z.enumerable = z.enumerable || !1,
            z.configurable = !0,
            "value"in z && (z.writable = !0),
            Object.defineProperty(O, k(z.key), z)
        }
    }
    function w(O, E, M) {
        return E && y(O.prototype, E),
        Object.defineProperty(O, "prototype", {
            writable: !1
        }),
        O
    }
    function v(O, E) {
        if (typeof E != "function" && E !== null)
            throw new TypeError("Super expression must either be null or a function");
        O.prototype = Object.create(E && E.prototype, {
            constructor: {
                value: O,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(O, "prototype", {
            writable: !1
        }),
        E && g(O, E)
    }
    function g(O, E) {
        return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(z, A) {
            return z.__proto__ = A,
            z
        }
        ,
        g(O, E)
    }
    function x(O) {
        var E = m();
        return function() {
            var z = b(O), A;
            if (E) {
                var F = b(this).constructor;
                A = Reflect.construct(z, arguments, F)
            } else
                A = z.apply(this, arguments);
            return h(this, A)
        }
    }
    function h(O, E) {
        if (E && (l(E) === "object" || typeof E == "function"))
            return E;
        if (E !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return p(O)
    }
    function p(O) {
        if (O === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return O
    }
    function m() {
        try {
            var O = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch {}
        return (m = function() {
            return !!O
        }
        )()
    }
    function b(O) {
        return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(M) {
            return M.__proto__ || Object.getPrototypeOf(M)
        }
        ,
        b(O)
    }
    function j(O, E, M) {
        return E = k(E),
        E in O ? Object.defineProperty(O, E, {
            value: M,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : O[E] = M,
        O
    }
    function k(O) {
        var E = T(O, "string");
        return l(E) == "symbol" ? E : String(E)
    }
    function T(O, E) {
        if (l(O) != "object" || !O)
            return O;
        var M = O[Symbol.toPrimitive];
        if (M !== void 0) {
            var z = M.call(O, E || "default");
            if (l(z) != "object")
                return z;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (E === "string" ? String : Number)(O)
    }
    var P = (0,
    o.canUseDOM)() && _x();
    e.default = function(O) {
        v(M, O);
        var E = x(M);
        function M(z) {
            var A;
            return f(this, M),
            A = E.call(this, z),
            j(p(A), "innerSliderRefHandler", function(F) {
                return A.innerSlider = F
            }),
            j(p(A), "slickPrev", function() {
                return A.innerSlider.slickPrev()
            }),
            j(p(A), "slickNext", function() {
                return A.innerSlider.slickNext()
            }),
            j(p(A), "slickGoTo", function(F) {
                var ft = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                return A.innerSlider.slickGoTo(F, ft)
            }),
            j(p(A), "slickPause", function() {
                return A.innerSlider.pause("paused")
            }),
            j(p(A), "slickPlay", function() {
                return A.innerSlider.autoPlay("play")
            }),
            A.state = {
                breakpoint: null
            },
            A._responsiveMediaHandlers = [],
            A
        }
        return w(M, [{
            key: "media",
            value: function(A, F) {
                P.register(A, F),
                this._responsiveMediaHandlers.push({
                    query: A,
                    handler: F
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var A = this;
                if (this.props.responsive) {
                    var F = this.props.responsive.map(function(le) {
                        return le.breakpoint
                    });
                    F.sort(function(le, Ie) {
                        return le - Ie
                    }),
                    F.forEach(function(le, Ie) {
                        var R;
                        Ie === 0 ? R = (0,
                        r.default)({
                            minWidth: 0,
                            maxWidth: le
                        }) : R = (0,
                        r.default)({
                            minWidth: F[Ie - 1] + 1,
                            maxWidth: le
                        }),
                        (0,
                        o.canUseDOM)() && A.media(R, function() {
                            A.setState({
                                breakpoint: le
                            })
                        })
                    });
                    var ft = (0,
                    r.default)({
                        minWidth: F.slice(-1)[0]
                    });
                    (0,
                    o.canUseDOM)() && this.media(ft, function() {
                        A.setState({
                            breakpoint: null
                        })
                    })
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this._responsiveMediaHandlers.forEach(function(A) {
                    P.unregister(A.query, A.handler)
                })
            }
        }, {
            key: "render",
            value: function() {
                var A = this, F, ft;
                this.state.breakpoint ? (ft = this.props.responsive.filter(function(ht) {
                    return ht.breakpoint === A.state.breakpoint
                }),
                F = ft[0].settings === "unslick" ? "unslick" : d(d(d({}, i.default), this.props), ft[0].settings)) : F = d(d({}, i.default), this.props),
                F.centerMode && (F.slidesToScroll > 1,
                F.slidesToScroll = 1),
                F.fade && (F.slidesToShow > 1,
                F.slidesToScroll > 1,
                F.slidesToShow = 1,
                F.slidesToScroll = 1);
                var le = t.default.Children.toArray(this.props.children);
                le = le.filter(function(ht) {
                    return typeof ht == "string" ? !!ht.trim() : !!ht
                }),
                F.variableWidth && (F.rows > 1 || F.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),
                F.variableWidth = !1);
                for (var Ie = [], R = null, I = 0; I < le.length; I += F.rows * F.slidesPerRow) {
                    for (var $ = [], Q = I; Q < I + F.rows * F.slidesPerRow; Q += F.slidesPerRow) {
                        for (var ie = [], We = Q; We < Q + F.slidesPerRow && (F.variableWidth && le[We].props.style && (R = le[We].props.style.width),
                        !(We >= le.length)); We += 1)
                            ie.push(t.default.cloneElement(le[We], {
                                key: 100 * I + 10 * Q + We,
                                tabIndex: -1,
                                style: {
                                    width: "".concat(100 / F.slidesPerRow, "%"),
                                    display: "inline-block"
                                }
                            }));
                        $.push(t.default.createElement("div", {
                            key: 10 * I + Q
                        }, ie))
                    }
                    F.variableWidth ? Ie.push(t.default.createElement("div", {
                        key: I,
                        style: {
                            width: R
                        }
                    }, $)) : Ie.push(t.default.createElement("div", {
                        key: I
                    }, $))
                }
                if (F === "unslick") {
                    var pt = "regular slider " + (this.props.className || "");
                    return t.default.createElement("div", {
                        className: pt
                    }, le)
                } else
                    Ie.length <= F.slidesToShow && !F.infinite && (F.unslick = !0);
                return t.default.createElement(n.InnerSlider, u({
                    style: this.props.style,
                    ref: this.innerSliderRefHandler
                }, (0,
                o.filterSettings)(F)), Ie)
            }
        }]),
        M
    }(t.default.Component)
}
)(Qp);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.default = void 0;
    var t = n(Qp);
    function n(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
    e.default = t.default
}
)(Vp);
const _h = wd(Vp)
  , lr = () => a.jsxs("footer", {
    className: "bg-black text-white py-10",
    children: [a.jsx("div", {
        className: "container mx-auto px-4",
        children: a.jsxs("div", {
            className: "flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-8",
            children: [a.jsxs("div", {
                className: "flex flex-col",
                children: [a.jsx("h4", {
                    className: "font-extrabold mb-2",
                    children: "Product"
                }), a.jsxs("ul", {
                    className: "list-none",
                    children: [a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white",
                            children: "Features"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx("a", {
                            href: "/partnership",
                            className: "text-gray-400 hover:text-white",
                            children: "Integration"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/pricing",
                            className: "text-gray-400 hover:text-white",
                            children: "Pricing"
                        })
                    })]
                })]
            }), a.jsxs("div", {
                className: "flex flex-col",
                children: [a.jsx("h4", {
                    className: "font-extrabold mb-2",
                    children: "Resources"
                }), a.jsxs("ul", {
                    className: "list-none",
                    children: [a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx("a", {
                            href: "https://blog.talentid.app/",
                            className: "text-gray-400 hover:text-white",
                            children: "Blogs"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white",
                            children: "API documentation"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx("a", {
                            href: "https://talentid.tawk.help/",
                            className: "text-gray-400 hover:text-white",
                            children: "Knowledge base"
                        })
                    })]
                })]
            }), a.jsxs("div", {
                className: "flex flex-col",
                children: [a.jsx("h4", {
                    className: "font-extrabold mb-2",
                    children: "Company"
                }), a.jsxs("ul", {
                    className: "list-none",
                    children: [a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/aboutus",
                            className: "text-gray-400 hover:text-white",
                            children: "About us"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/contactus",
                            className: "text-gray-400 hover:text-white",
                            children: "Contact us"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/partnership",
                            className: "text-gray-400 hover:text-white",
                            children: "Partnerships"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/events",
                            className: "text-gray-400 hover:text-white",
                            children: "Events"
                        })
                    })]
                })]
            }), a.jsxs("div", {
                className: "flex flex-col",
                children: [a.jsx("h4", {
                    className: "font-extrabold mb-2",
                    children: "Legal"
                }), a.jsxs("ul", {
                    className: "list-none",
                    children: [a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white",
                            children: "Terms & Conditions"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/privacy-policy",
                            className: "text-gray-400 hover:text-white",
                            children: "Privacy Policy"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/refund",
                            className: "text-gray-400 hover:text-white",
                            children: "Refund policy"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/optform",
                            className: "text-gray-400 hover:text-white",
                            children: "Don't sell my info"
                        })
                    })]
                })]
            })]
        })
    }), a.jsxs("div", {
        className: "border-t border-gray-800 mt-8 pt-6",
        children: [a.jsx("div", {
            className: "flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0",
            children: a.jsxs("p", {
                className: "text-center mb-2 text-lg",
                children: ["Made with ", a.jsx("span", {
                    className: "text-red-600",
                    children: "❤️"
                }), " from India for the World"]
            })
        }), a.jsx("p", {
            className: "text-center text-sm",
            children: "© 2024 Talent ID (Brand of Hirexzo Solutions LLP) All Rights Reserved."
        })]
    })]
});
var Oh = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , ed = At.createContext && At.createContext(Oh)
  , Ox = ["attr", "size", "title"];
function Tx(e, t) {
    if (e == null)
        return {};
    var n = Cx(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function Cx(e, t) {
    if (e == null)
        return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0)
                continue;
            n[r] = e[r]
        }
    return n
}
function Io() {
    return Io = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Io.apply(this, arguments)
}
function td(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function Do(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? td(Object(n), !0).forEach(function(r) {
            Px(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : td(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function Px(e, t, n) {
    return t = Rx(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Rx(e) {
    var t = Lx(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function Lx(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function Th(e) {
    return e && e.map( (t, n) => At.createElement(t.tag, Do({
        key: n
    }, t.attr), Th(t.child)))
}
function Sn(e) {
    return t => At.createElement(zx, Io({
        attr: Do({}, e.attr)
    }, t), Th(e.child))
}
function zx(e) {
    var t = n => {
        var {attr: r, size: i, title: o} = e, s = Tx(e, Ox), l = i || n.size || "1em", u;
        return n.className && (u = n.className),
        e.className && (u = (u ? u + " " : "") + e.className),
        At.createElement("svg", Io({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, s, {
            className: u,
            style: Do(Do({
                color: e.color || n.color
            }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), o && At.createElement("title", null, o), e.children)
    }
    ;
    return ed !== void 0 ? At.createElement(ed.Consumer, null, n => t(n)) : t(Oh)
}
function Ch(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"
            },
            child: []
        }]
    })(e)
}
const ar = () => {
    const e = ot();
    return a.jsx("div", {
        className: " flex flex-col items-center",
        children: a.jsx("div", {
            className: "w-full px-4 md:px-0 md:w-[800px]",
            children: a.jsxs("div", {
                className: "bg-[#baaad3] relative mx-auto flex justify-between items-center rounded-full p-2 py-3 md:p-4 mt-10",
                children: [a.jsx("img", {
                    src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/logo3-CD2fE1xE_lqu78k",
                    alt: "Talent ID logo",
                    className: "h-6 md:h-10 mx-3 cursor-pointer",
                    onClick: () => {
                        e("/")
                    }
                }), a.jsxs("div", {
                    className: "flex items-center gap-4 md:gap-8",
                    children: [a.jsxs("div", {
                        className: "relative group",
                        children: [a.jsxs("div", {
                            className: " items-center cursor-pointer hidden sm:flex ",
                            children: [a.jsx("p", {
                                className: "text-black text-lg font-semibold hover:text-[#603998]",
                                children: "Products"
                            }), a.jsx(Ch, {
                                className: "mt-1"
                            })]
                        }), a.jsxs("div", {
                            className: "absolute w-full md:w-[300px] hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg mt-2 p-3 z-10",
                            children: [a.jsx("a", {
                                href: "https://cts.talentid.app/",
                                className: "py-2 px-4 hover:bg-gray-100 rounded-md text-sm font-medium text-black",
                                children: "Candidate Tracking System"
                            }), a.jsxs("div", {
                                className: "flex justify-between",
                                children: [a.jsx("a", {
                                    href: "#bgc",
                                    className: "py-2 px-4 hover:bg-gray-100 rounded-md text-sm font-medium text-black",
                                    children: "Background checks"
                                }), a.jsx("p", {
                                    className: "text-red-500 text-sm mt-2",
                                    children: "Coming soon!"
                                })]
                            }), a.jsxs("div", {
                                className: "flex justify-between",
                                children: [a.jsx("a", {
                                    href: "#offer-lens",
                                    className: "py-2 px-4 hover:bg-gray-100 rounded-md text-sm font-medium text-black",
                                    children: "Offer Lens"
                                }), a.jsx("p", {
                                    className: "text-red-500 text-sm mt-2",
                                    children: "Coming soon!"
                                })]
                            })]
                        })]
                    }), a.jsx("a", {
                        href: "/pricing",
                        className: "text-black hidden sm:block text-lg  font-semibold hover:text-[#603998]",
                        children: "Pricing"
                    }), a.jsx("a", {
                        href: "/aboutus",
                        className: "text-black hidden sm:block text-lg font-semibold hover:text-[#603998]",
                        children: "About"
                    })]
                }), a.jsxs("div", {
                    className: "flex justify-center items-center gap-3",
                    children: [a.jsx("div", {
                        className: "flex flex-col sm:flex-row items-center gap-4",
                        children: a.jsx("a", {
                            href: "https://cts.talentid.app/",
                            children: a.jsx("button", {
                                className: "bg-[#603998] rounded-full text-xs md:text-lg text-white font-semibold px-6 py-2 hover:bg-white hover:text-black",
                                children: "Login"
                            })
                        })
                    }), a.jsx("div", {
                        className: "bg-white hidden sm:block text-black text-xs md:text-base mb-5 hover:bg-[#2b1b44] hover:text-white mt-4 px-5 py-3 rounded-full font-bold",
                        onClick: () => window.open("https://calendly.com/jai-talentid/demo-talent-id?month=2024-11", "_blank"),
                        children: "Book a Demo"
                    })]
                })]
            })
        })
    })
}
  , Ix = () => {
    ot();
    const e = {
        dots: !0,
        infinite: !0,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }
      , t = [{
        src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/kym5sco05zqoyvfygiwz",
        alt: "Alpha Ed Logo"
    }, {
        src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/rftttuaoctvxm204v952",
        alt: "Bio Reform Logo"
    }, {
        src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/mgmky9jsvhvottghskd0",
        alt: "Gamology Logo"
    }, {
        src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/phmpylyzhyb8snxaoy4j",
        alt: "Goodmind Logo"
    }, {
        src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/kym5sco05zqoyvfygiwz",
        alt: "Alpha Ed Logo"
    }, {
        src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/rftttuaoctvxm204v952",
        alt: "Bio Reform Logo"
    }, {
        src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/mgmky9jsvhvottghskd0",
        alt: "Gamology Logo"
    }, {
        src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/phmpylyzhyb8snxaoy4j",
        alt: "Goodmind Logo"
    }];
    return a.jsxs("div", {
        className: "bg-white text-black",
        children: [a.jsx(ar, {}), a.jsx("div", {
            className: "bg-gray-200 mt-5 py-12",
            children: a.jsxs("div", {
                className: "max-w-6xl mx-auto bg-white rounded-3xl shadow-md flex flex-col md:flex-row items-center",
                children: [a.jsx("div", {
                    className: "p-8 w-full md:w-3/4",
                    children: a.jsxs("div", {
                        className: "text-base md:text-lg lg:text-xl text-justify",
                        children: [a.jsxs("h3", {
                            className: "font-bold text-xl md:text-2xl lg:text-3xl mb-2",
                            children: ["Talent ID - HireXzo solutions LLP ", a.jsx("br", {}), " ", a.jsx("br", {})]
                        }), a.jsx("p", {
                            className: "text-sm md:text-base lg:text-lg",
                            children: a.jsxs("ul", {
                                className: "space-y-4",
                                children: [a.jsx("li", {
                                    children: "We were born from frustration. The traditional methods of talent acquisition felt slow, clunky, and offered little insight into the effectiveness of our efforts. We saw a disconnect between the time and resources invested and the quality of candidates we attracted."
                                }), a.jsx("li", {
                                    children: "We knew it had to be user-friendly, data-driven, and powerful enough to transform the way companies find and hire their best people."
                                })]
                            })
                        })]
                    })
                }), a.jsx("div", {
                    className: "p-8 w-full md:w-1/4 flex justify-center",
                    children: a.jsx("img", {
                        src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/ynfiarpor3kxwwxzxtc8",
                        alt: "About Us Image",
                        className: "h-60 rounded-2xl shadow-md"
                    })
                })]
            })
        }), a.jsxs("div", {
            className: "text-center p-8",
            children: [a.jsx("h1", {
                className: "text-2xl md:text-3xl lg:text-4xl font-bold mb-4",
                children: "Talent ID’s Mission🎯"
            }), a.jsx("p", {
                className: "mb-12 max-w-prose text-base md:text-lg lg:text-xl mx-auto",
                children: "Talent ID aims to solve the problem of last minute dropouts and help 1000+ organizations make data driven solutions by 2025."
            }), a.jsx("h2", {
                className: "text-2xl md:text-3xl lg:text-4xl font-bold mb-12",
                children: "Helping business Grow"
            }), a.jsx("div", {
                className: "space-y-4 mb-16",
                children: a.jsx(_h, {
                    ...e,
                    children: t.map( (n, r) => a.jsx("div", {
                        className: "px-2",
                        children: a.jsx("img", {
                            src: n.src,
                            alt: n.alt,
                            className: "h-28 mx-auto"
                        })
                    }, r))
                })
            })]
        }), a.jsx(lr, {})]
    })
}
;
function Dx(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
            },
            child: []
        }]
    })(e)
}
function nd(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
            },
            child: []
        }]
    })(e)
}
function Mx(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 384 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            },
            child: []
        }]
    })(e)
}
function Ax(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
            },
            child: []
        }]
    })(e)
}
function Fx(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
            },
            child: []
        }]
    })(e)
}
function Ph(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: $x} = Object.prototype
  , {getPrototypeOf: hu} = Object
  , as = (e => t => {
    const n = $x.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , st = e => (e = e.toLowerCase(),
t => as(t) === e)
  , us = e => t => typeof t === e
  , {isArray: ur} = Array
  , ei = us("undefined");
function Ux(e) {
    return e !== null && !ei(e) && e.constructor !== null && !ei(e.constructor) && $e(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Rh = st("ArrayBuffer");
function Bx(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Rh(e.buffer),
    t
}
const Hx = us("string")
  , $e = us("function")
  , Lh = us("number")
  , cs = e => e !== null && typeof e == "object"
  , Wx = e => e === !0 || e === !1
  , Vi = e => {
    if (as(e) !== "object")
        return !1;
    const t = hu(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , qx = st("Date")
  , Vx = st("File")
  , Qx = st("Blob")
  , Kx = st("FileList")
  , Gx = e => cs(e) && $e(e.pipe)
  , Yx = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || $e(e.append) && ((t = as(e)) === "formdata" || t === "object" && $e(e.toString) && e.toString() === "[object FormData]"))
}
  , Xx = st("URLSearchParams")
  , [Jx,Zx,ew,tw] = ["ReadableStream", "Request", "Response", "Headers"].map(st)
  , nw = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ui(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, i;
    if (typeof e != "object" && (e = [e]),
    ur(e))
        for (r = 0,
        i = e.length; r < i; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , s = o.length;
        let l;
        for (r = 0; r < s; r++)
            l = o[r],
            t.call(null, e[l], l, e)
    }
}
function zh(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, i;
    for (; r-- > 0; )
        if (i = n[r],
        t === i.toLowerCase())
            return i;
    return null
}
const ln = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Ih = e => !ei(e) && e !== ln;
function sa() {
    const {caseless: e} = Ih(this) && this || {}
      , t = {}
      , n = (r, i) => {
        const o = e && zh(t, i) || i;
        Vi(t[o]) && Vi(r) ? t[o] = sa(t[o], r) : Vi(r) ? t[o] = sa({}, r) : ur(r) ? t[o] = r.slice() : t[o] = r
    }
    ;
    for (let r = 0, i = arguments.length; r < i; r++)
        arguments[r] && ui(arguments[r], n);
    return t
}
const rw = (e, t, n, {allOwnKeys: r}={}) => (ui(t, (i, o) => {
    n && $e(i) ? e[o] = Ph(i, n) : e[o] = i
}
, {
    allOwnKeys: r
}),
e)
  , iw = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , ow = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , sw = (e, t, n, r) => {
    let i, o, s;
    const l = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (i = Object.getOwnPropertyNames(e),
        o = i.length; o-- > 0; )
            s = i[o],
            (!r || r(s, e, t)) && !l[s] && (t[s] = e[s],
            l[s] = !0);
        e = n !== !1 && hu(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , lw = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , aw = e => {
    if (!e)
        return null;
    if (ur(e))
        return e;
    let t = e.length;
    if (!Lh(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , uw = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && hu(Uint8Array))
  , cw = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
        const o = i.value;
        t.call(e, o[0], o[1])
    }
}
  , dw = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , fw = st("HTMLFormElement")
  , pw = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
    return r.toUpperCase() + i
})
  , rd = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , hw = st("RegExp")
  , Dh = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    ui(n, (i, o) => {
        let s;
        (s = t(i, o, e)) !== !1 && (r[o] = s || i)
    }
    ),
    Object.defineProperties(e, r)
}
  , mw = e => {
    Dh(e, (t, n) => {
        if ($e(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if ($e(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , yw = (e, t) => {
    const n = {}
      , r = i => {
        i.forEach(o => {
            n[o] = !0
        }
        )
    }
    ;
    return ur(e) ? r(e) : r(String(e).split(t)),
    n
}
  , vw = () => {}
  , gw = (e, t) => e != null && Number.isFinite(e = +e) ? e : t
  , Xs = "abcdefghijklmnopqrstuvwxyz"
  , id = "0123456789"
  , Mh = {
    DIGIT: id,
    ALPHA: Xs,
    ALPHA_DIGIT: Xs + Xs.toUpperCase() + id
}
  , xw = (e=16, t=Mh.ALPHA_DIGIT) => {
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function ww(e) {
    return !!(e && $e(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const bw = e => {
    const t = new Array(10)
      , n = (r, i) => {
        if (cs(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[i] = r;
                const o = ur(r) ? [] : {};
                return ui(r, (s, l) => {
                    const u = n(s, i + 1);
                    !ei(u) && (o[l] = u)
                }
                ),
                t[i] = void 0,
                o
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , Sw = st("AsyncFunction")
  , jw = e => e && (cs(e) || $e(e)) && $e(e.then) && $e(e.catch)
  , Ah = ( (e, t) => e ? setImmediate : t ? ( (n, r) => (ln.addEventListener("message", ({source: i, data: o}) => {
    i === ln && o === n && r.length && r.shift()()
}
, !1),
i => {
    r.push(i),
    ln.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", $e(ln.postMessage))
  , kw = typeof queueMicrotask < "u" ? queueMicrotask.bind(ln) : typeof process < "u" && process.nextTick || Ah
  , S = {
    isArray: ur,
    isArrayBuffer: Rh,
    isBuffer: Ux,
    isFormData: Yx,
    isArrayBufferView: Bx,
    isString: Hx,
    isNumber: Lh,
    isBoolean: Wx,
    isObject: cs,
    isPlainObject: Vi,
    isReadableStream: Jx,
    isRequest: Zx,
    isResponse: ew,
    isHeaders: tw,
    isUndefined: ei,
    isDate: qx,
    isFile: Vx,
    isBlob: Qx,
    isRegExp: hw,
    isFunction: $e,
    isStream: Gx,
    isURLSearchParams: Xx,
    isTypedArray: uw,
    isFileList: Kx,
    forEach: ui,
    merge: sa,
    extend: rw,
    trim: nw,
    stripBOM: iw,
    inherits: ow,
    toFlatObject: sw,
    kindOf: as,
    kindOfTest: st,
    endsWith: lw,
    toArray: aw,
    forEachEntry: cw,
    matchAll: dw,
    isHTMLForm: fw,
    hasOwnProperty: rd,
    hasOwnProp: rd,
    reduceDescriptors: Dh,
    freezeMethods: mw,
    toObjectSet: yw,
    toCamelCase: pw,
    noop: vw,
    toFiniteNumber: gw,
    findKey: zh,
    global: ln,
    isContextDefined: Ih,
    ALPHABET: Mh,
    generateString: xw,
    isSpecCompliantForm: ww,
    toJSONObject: bw,
    isAsyncFn: Sw,
    isThenable: jw,
    setImmediate: Ah,
    asap: kw
};
function U(e, t, n, r, i) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i,
    this.status = i.status ? i.status : null)
}
S.inherits(U, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: S.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Fh = U.prototype
  , $h = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    $h[e] = {
        value: e
    }
}
);
Object.defineProperties(U, $h);
Object.defineProperty(Fh, "isAxiosError", {
    value: !0
});
U.from = (e, t, n, r, i, o) => {
    const s = Object.create(Fh);
    return S.toFlatObject(e, s, function(u) {
        return u !== Error.prototype
    }, l => l !== "isAxiosError"),
    U.call(s, e.message, t, n, r, i),
    s.cause = e,
    s.name = e.name,
    o && Object.assign(s, o),
    s
}
;
const Nw = null;
function la(e) {
    return S.isPlainObject(e) || S.isArray(e)
}
function Uh(e) {
    return S.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function od(e, t, n) {
    return e ? e.concat(t).map(function(i, o) {
        return i = Uh(i),
        !n && o ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}
function Ew(e) {
    return S.isArray(e) && !e.some(la)
}
const _w = S.toFlatObject(S, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function ds(e, t, n) {
    if (!S.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = S.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(g, x) {
        return !S.isUndefined(x[g])
    });
    const r = n.metaTokens
      , i = n.visitor || d
      , o = n.dots
      , s = n.indexes
      , u = (n.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(t);
    if (!S.isFunction(i))
        throw new TypeError("visitor must be a function");
    function c(v) {
        if (v === null)
            return "";
        if (S.isDate(v))
            return v.toISOString();
        if (!u && S.isBlob(v))
            throw new U("Blob is not supported. Use a Buffer instead.");
        return S.isArrayBuffer(v) || S.isTypedArray(v) ? u && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v
    }
    function d(v, g, x) {
        let h = v;
        if (v && !x && typeof v == "object") {
            if (S.endsWith(g, "{}"))
                g = r ? g : g.slice(0, -2),
                v = JSON.stringify(v);
            else if (S.isArray(v) && Ew(v) || (S.isFileList(v) || S.endsWith(g, "[]")) && (h = S.toArray(v)))
                return g = Uh(g),
                h.forEach(function(m, b) {
                    !(S.isUndefined(m) || m === null) && t.append(s === !0 ? od([g], b, o) : s === null ? g : g + "[]", c(m))
                }),
                !1
        }
        return la(v) ? !0 : (t.append(od(x, g, o), c(v)),
        !1)
    }
    const f = []
      , y = Object.assign(_w, {
        defaultVisitor: d,
        convertValue: c,
        isVisitable: la
    });
    function w(v, g) {
        if (!S.isUndefined(v)) {
            if (f.indexOf(v) !== -1)
                throw Error("Circular reference detected in " + g.join("."));
            f.push(v),
            S.forEach(v, function(h, p) {
                (!(S.isUndefined(h) || h === null) && i.call(t, h, S.isString(p) ? p.trim() : p, g, y)) === !0 && w(h, g ? g.concat(p) : [p])
            }),
            f.pop()
        }
    }
    if (!S.isObject(e))
        throw new TypeError("data must be an object");
    return w(e),
    t
}
function sd(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function mu(e, t) {
    this._pairs = [],
    e && ds(e, this, t)
}
const Bh = mu.prototype;
Bh.append = function(t, n) {
    this._pairs.push([t, n])
}
;
Bh.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, sd)
    }
    : sd;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
}
;
function Ow(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Hh(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || Ow
      , i = n && n.serialize;
    let o;
    if (i ? o = i(t, n) : o = S.isURLSearchParams(t) ? t.toString() : new mu(t,n).toString(r),
    o) {
        const s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class ld {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        S.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const Wh = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Tw = typeof URLSearchParams < "u" ? URLSearchParams : mu
  , Cw = typeof FormData < "u" ? FormData : null
  , Pw = typeof Blob < "u" ? Blob : null
  , Rw = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Tw,
        FormData: Cw,
        Blob: Pw
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , yu = typeof window < "u" && typeof document < "u"
  , aa = typeof navigator == "object" && navigator || void 0
  , Lw = yu && (!aa || ["ReactNative", "NativeScript", "NS"].indexOf(aa.product) < 0)
  , zw = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , Iw = yu && window.location.href || "http://localhost"
  , Dw = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: yu,
    hasStandardBrowserEnv: Lw,
    hasStandardBrowserWebWorkerEnv: zw,
    navigator: aa,
    origin: Iw
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Le = {
    ...Dw,
    ...Rw
};
function Mw(e, t) {
    return ds(e, new Le.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, i, o) {
            return Le.isNode && S.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function Aw(e) {
    return S.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function Fw(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++)
        o = n[r],
        t[o] = e[o];
    return t
}
function qh(e) {
    function t(n, r, i, o) {
        let s = n[o++];
        if (s === "__proto__")
            return !0;
        const l = Number.isFinite(+s)
          , u = o >= n.length;
        return s = !s && S.isArray(i) ? i.length : s,
        u ? (S.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r,
        !l) : ((!i[s] || !S.isObject(i[s])) && (i[s] = []),
        t(n, r, i[s], o) && S.isArray(i[s]) && (i[s] = Fw(i[s])),
        !l)
    }
    if (S.isFormData(e) && S.isFunction(e.entries)) {
        const n = {};
        return S.forEachEntry(e, (r, i) => {
            t(Aw(r), i, n, 0)
        }
        ),
        n
    }
    return null
}
function $w(e, t, n) {
    if (S.isString(e))
        try {
            return (t || JSON.parse)(e),
            S.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const ci = {
    transitional: Wh,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , i = r.indexOf("application/json") > -1
          , o = S.isObject(t);
        if (o && S.isHTMLForm(t) && (t = new FormData(t)),
        S.isFormData(t))
            return i ? JSON.stringify(qh(t)) : t;
        if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t) || S.isReadableStream(t))
            return t;
        if (S.isArrayBufferView(t))
            return t.buffer;
        if (S.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let l;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return Mw(t, this.formSerializer).toString();
            if ((l = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const u = this.env && this.env.FormData;
                return ds(l ? {
                    "files[]": t
                } : t, u && new u, this.formSerializer)
            }
        }
        return o || i ? (n.setContentType("application/json", !1),
        $w(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || ci.transitional
          , r = n && n.forcedJSONParsing
          , i = this.responseType === "json";
        if (S.isResponse(t) || S.isReadableStream(t))
            return t;
        if (t && S.isString(t) && (r && !this.responseType || i)) {
            const s = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t)
            } catch (l) {
                if (s)
                    throw l.name === "SyntaxError" ? U.from(l, U.ERR_BAD_RESPONSE, this, null, this.response) : l
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Le.classes.FormData,
        Blob: Le.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    ci.headers[e] = {}
}
);
const Uw = S.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , Bw = e => {
    const t = {};
    let n, r, i;
    return e && e.split(`
`).forEach(function(s) {
        i = s.indexOf(":"),
        n = s.substring(0, i).trim().toLowerCase(),
        r = s.substring(i + 1).trim(),
        !(!n || t[n] && Uw[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , ad = Symbol("internals");
function xr(e) {
    return e && String(e).trim().toLowerCase()
}
function Qi(e) {
    return e === !1 || e == null ? e : S.isArray(e) ? e.map(Qi) : String(e)
}
function Hw(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const Ww = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Js(e, t, n, r, i) {
    if (S.isFunction(r))
        return r.call(this, t, n);
    if (i && (t = n),
    !!S.isString(t)) {
        if (S.isString(r))
            return t.indexOf(r) !== -1;
        if (S.isRegExp(r))
            return r.test(t)
    }
}
function qw(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function Vw(e, t) {
    const n = S.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(i, o, s) {
                return this[r].call(this, t, i, o, s)
            },
            configurable: !0
        })
    }
    )
}
class ze {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;
        function o(l, u, c) {
            const d = xr(u);
            if (!d)
                throw new Error("header name must be a non-empty string");
            const f = S.findKey(i, d);
            (!f || i[f] === void 0 || c === !0 || c === void 0 && i[f] !== !1) && (i[f || u] = Qi(l))
        }
        const s = (l, u) => S.forEach(l, (c, d) => o(c, d, u));
        if (S.isPlainObject(t) || t instanceof this.constructor)
            s(t, n);
        else if (S.isString(t) && (t = t.trim()) && !Ww(t))
            s(Bw(t), n);
        else if (S.isHeaders(t))
            for (const [l,u] of t.entries())
                o(u, l, r);
        else
            t != null && o(n, t, r);
        return this
    }
    get(t, n) {
        if (t = xr(t),
        t) {
            const r = S.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n)
                    return i;
                if (n === !0)
                    return Hw(i);
                if (S.isFunction(n))
                    return n.call(this, i, r);
                if (S.isRegExp(n))
                    return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = xr(t),
        t) {
            const r = S.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || Js(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;
        function o(s) {
            if (s = xr(s),
            s) {
                const l = S.findKey(r, s);
                l && (!n || Js(r, r[l], l, n)) && (delete r[l],
                i = !0)
            }
        }
        return S.isArray(t) ? t.forEach(o) : o(t),
        i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , i = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || Js(this, this[o], o, t, !0)) && (delete this[o],
            i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this
          , r = {};
        return S.forEach(this, (i, o) => {
            const s = S.findKey(r, o);
            if (s) {
                n[s] = Qi(i),
                delete n[o];
                return
            }
            const l = t ? qw(o) : String(o).trim();
            l !== o && delete n[o],
            n[l] = Qi(i),
            r[l] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return S.forEach(this, (r, i) => {
            r != null && r !== !1 && (n[i] = t && S.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i => r.set(i)),
        r
    }
    static accessor(t) {
        const r = (this[ad] = this[ad] = {
            accessors: {}
        }).accessors
          , i = this.prototype;
        function o(s) {
            const l = xr(s);
            r[l] || (Vw(i, s),
            r[l] = !0)
        }
        return S.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
ze.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
S.reduceDescriptors(ze.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
S.freezeMethods(ze);
function Zs(e, t) {
    const n = this || ci
      , r = t || n
      , i = ze.from(r.headers);
    let o = r.data;
    return S.forEach(e, function(l) {
        o = l.call(n, o, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    o
}
function Vh(e) {
    return !!(e && e.__CANCEL__)
}
function cr(e, t, n) {
    U.call(this, e ?? "canceled", U.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
S.inherits(cr, U, {
    __CANCEL__: !0
});
function Qh(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new U("Request failed with status code " + n.status,[U.ERR_BAD_REQUEST, U.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function Qw(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function Kw(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let i = 0, o = 0, s;
    return t = t !== void 0 ? t : 1e3,
    function(u) {
        const c = Date.now()
          , d = r[o];
        s || (s = c),
        n[i] = u,
        r[i] = c;
        let f = o
          , y = 0;
        for (; f !== i; )
            y += n[f++],
            f = f % e;
        if (i = (i + 1) % e,
        i === o && (o = (o + 1) % e),
        c - s < t)
            return;
        const w = d && c - d;
        return w ? Math.round(y * 1e3 / w) : void 0
    }
}
function Gw(e, t) {
    let n = 0, r = 1e3 / t, i, o;
    const s = (c, d=Date.now()) => {
        n = d,
        i = null,
        o && (clearTimeout(o),
        o = null),
        e.apply(null, c)
    }
    ;
    return [ (...c) => {
        const d = Date.now()
          , f = d - n;
        f >= r ? s(c, d) : (i = c,
        o || (o = setTimeout( () => {
            o = null,
            s(i)
        }
        , r - f)))
    }
    , () => i && s(i)]
}
const Mo = (e, t, n=3) => {
    let r = 0;
    const i = Kw(50, 250);
    return Gw(o => {
        const s = o.loaded
          , l = o.lengthComputable ? o.total : void 0
          , u = s - r
          , c = i(u)
          , d = s <= l;
        r = s;
        const f = {
            loaded: s,
            total: l,
            progress: l ? s / l : void 0,
            bytes: u,
            rate: c || void 0,
            estimated: c && l && d ? (l - s) / c : void 0,
            event: o,
            lengthComputable: l != null,
            [t ? "download" : "upload"]: !0
        };
        e(f)
    }
    , n)
}
  , ud = (e, t) => {
    const n = e != null;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , cd = e => (...t) => S.asap( () => e(...t))
  , Yw = Le.hasStandardBrowserEnv ? function() {
    const t = Le.navigator && /(msie|trident)/i.test(Le.navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function i(o) {
        let s = o;
        return t && (n.setAttribute("href", s),
        s = n.href),
        n.setAttribute("href", s),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = i(window.location.href),
    function(s) {
        const l = S.isString(s) ? i(s) : s;
        return l.protocol === r.protocol && l.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}()
  , Xw = Le.hasStandardBrowserEnv ? {
    write(e, t, n, r, i, o) {
        const s = [e + "=" + encodeURIComponent(t)];
        S.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
        S.isString(r) && s.push("path=" + r),
        S.isString(i) && s.push("domain=" + i),
        o === !0 && s.push("secure"),
        document.cookie = s.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function Jw(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Zw(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Kh(e, t) {
    return e && !Jw(t) ? Zw(e, t) : t
}
const dd = e => e instanceof ze ? {
    ...e
} : e;
function vn(e, t) {
    t = t || {};
    const n = {};
    function r(c, d, f) {
        return S.isPlainObject(c) && S.isPlainObject(d) ? S.merge.call({
            caseless: f
        }, c, d) : S.isPlainObject(d) ? S.merge({}, d) : S.isArray(d) ? d.slice() : d
    }
    function i(c, d, f) {
        if (S.isUndefined(d)) {
            if (!S.isUndefined(c))
                return r(void 0, c, f)
        } else
            return r(c, d, f)
    }
    function o(c, d) {
        if (!S.isUndefined(d))
            return r(void 0, d)
    }
    function s(c, d) {
        if (S.isUndefined(d)) {
            if (!S.isUndefined(c))
                return r(void 0, c)
        } else
            return r(void 0, d)
    }
    function l(c, d, f) {
        if (f in t)
            return r(c, d);
        if (f in e)
            return r(void 0, c)
    }
    const u = {
        url: o,
        method: o,
        data: o,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        withXSRFToken: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: l,
        headers: (c, d) => i(dd(c), dd(d), !0)
    };
    return S.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
        const f = u[d] || i
          , y = f(e[d], t[d], d);
        S.isUndefined(y) && f !== l || (n[d] = y)
    }),
    n
}
const Gh = e => {
    const t = vn({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: s, auth: l} = t;
    t.headers = s = ze.from(s),
    t.url = Hh(Kh(t.baseURL, t.url), e.params, e.paramsSerializer),
    l && s.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : "")));
    let u;
    if (S.isFormData(n)) {
        if (Le.hasStandardBrowserEnv || Le.hasStandardBrowserWebWorkerEnv)
            s.setContentType(void 0);
        else if ((u = s.getContentType()) !== !1) {
            const [c,...d] = u ? u.split(";").map(f => f.trim()).filter(Boolean) : [];
            s.setContentType([c || "multipart/form-data", ...d].join("; "))
        }
    }
    if (Le.hasStandardBrowserEnv && (r && S.isFunction(r) && (r = r(t)),
    r || r !== !1 && Yw(t.url))) {
        const c = i && o && Xw.read(o);
        c && s.set(i, c)
    }
    return t
}
  , e1 = typeof XMLHttpRequest < "u"
  , t1 = e1 && function(e) {
    return new Promise(function(n, r) {
        const i = Gh(e);
        let o = i.data;
        const s = ze.from(i.headers).normalize();
        let {responseType: l, onUploadProgress: u, onDownloadProgress: c} = i, d, f, y, w, v;
        function g() {
            w && w(),
            v && v(),
            i.cancelToken && i.cancelToken.unsubscribe(d),
            i.signal && i.signal.removeEventListener("abort", d)
        }
        let x = new XMLHttpRequest;
        x.open(i.method.toUpperCase(), i.url, !0),
        x.timeout = i.timeout;
        function h() {
            if (!x)
                return;
            const m = ze.from("getAllResponseHeaders"in x && x.getAllResponseHeaders())
              , j = {
                data: !l || l === "text" || l === "json" ? x.responseText : x.response,
                status: x.status,
                statusText: x.statusText,
                headers: m,
                config: e,
                request: x
            };
            Qh(function(T) {
                n(T),
                g()
            }, function(T) {
                r(T),
                g()
            }, j),
            x = null
        }
        "onloadend"in x ? x.onloadend = h : x.onreadystatechange = function() {
            !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(h)
        }
        ,
        x.onabort = function() {
            x && (r(new U("Request aborted",U.ECONNABORTED,e,x)),
            x = null)
        }
        ,
        x.onerror = function() {
            r(new U("Network Error",U.ERR_NETWORK,e,x)),
            x = null
        }
        ,
        x.ontimeout = function() {
            let b = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
            const j = i.transitional || Wh;
            i.timeoutErrorMessage && (b = i.timeoutErrorMessage),
            r(new U(b,j.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED,e,x)),
            x = null
        }
        ,
        o === void 0 && s.setContentType(null),
        "setRequestHeader"in x && S.forEach(s.toJSON(), function(b, j) {
            x.setRequestHeader(j, b)
        }),
        S.isUndefined(i.withCredentials) || (x.withCredentials = !!i.withCredentials),
        l && l !== "json" && (x.responseType = i.responseType),
        c && ([y,v] = Mo(c, !0),
        x.addEventListener("progress", y)),
        u && x.upload && ([f,w] = Mo(u),
        x.upload.addEventListener("progress", f),
        x.upload.addEventListener("loadend", w)),
        (i.cancelToken || i.signal) && (d = m => {
            x && (r(!m || m.type ? new cr(null,e,x) : m),
            x.abort(),
            x = null)
        }
        ,
        i.cancelToken && i.cancelToken.subscribe(d),
        i.signal && (i.signal.aborted ? d() : i.signal.addEventListener("abort", d)));
        const p = Qw(i.url);
        if (p && Le.protocols.indexOf(p) === -1) {
            r(new U("Unsupported protocol " + p + ":",U.ERR_BAD_REQUEST,e));
            return
        }
        x.send(o || null)
    }
    )
}
  , n1 = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let r = new AbortController, i;
        const o = function(c) {
            if (!i) {
                i = !0,
                l();
                const d = c instanceof Error ? c : this.reason;
                r.abort(d instanceof U ? d : new cr(d instanceof Error ? d.message : d))
            }
        };
        let s = t && setTimeout( () => {
            s = null,
            o(new U(`timeout ${t} of ms exceeded`,U.ETIMEDOUT))
        }
        , t);
        const l = () => {
            e && (s && clearTimeout(s),
            s = null,
            e.forEach(c => {
                c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o)
            }
            ),
            e = null)
        }
        ;
        e.forEach(c => c.addEventListener("abort", o));
        const {signal: u} = r;
        return u.unsubscribe = () => S.asap(l),
        u
    }
}
  , r1 = function*(e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
        yield e;
        return
    }
    let r = 0, i;
    for (; r < n; )
        i = r + t,
        yield e.slice(r, i),
        r = i
}
  , i1 = async function*(e, t) {
    for await(const n of o1(e))
        yield*r1(n, t)
}
  , o1 = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: r} = await t.read();
            if (n)
                break;
            yield r
        }
    } finally {
        await t.cancel()
    }
}
  , fd = (e, t, n, r) => {
    const i = i1(e, t);
    let o = 0, s, l = u => {
        s || (s = !0,
        r && r(u))
    }
    ;
    return new ReadableStream({
        async pull(u) {
            try {
                const {done: c, value: d} = await i.next();
                if (c) {
                    l(),
                    u.close();
                    return
                }
                let f = d.byteLength;
                if (n) {
                    let y = o += f;
                    n(y)
                }
                u.enqueue(new Uint8Array(d))
            } catch (c) {
                throw l(c),
                c
            }
        },
        cancel(u) {
            return l(u),
            i.return()
        }
    },{
        highWaterMark: 2
    })
}
  , fs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , Yh = fs && typeof ReadableStream == "function"
  , s1 = fs && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , Xh = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , l1 = Yh && Xh( () => {
    let e = !1;
    const t = new Request(Le.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , pd = 64 * 1024
  , ua = Yh && Xh( () => S.isReadableStream(new Response("").body))
  , Ao = {
    stream: ua && (e => e.body)
};
fs && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !Ao[t] && (Ao[t] = S.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new U(`Response type '${t}' is not supported`,U.ERR_NOT_SUPPORT,r)
        }
        )
    }
    )
}
)(new Response);
const a1 = async e => {
    if (e == null)
        return 0;
    if (S.isBlob(e))
        return e.size;
    if (S.isSpecCompliantForm(e))
        return (await new Request(Le.origin,{
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
    if (S.isArrayBufferView(e) || S.isArrayBuffer(e))
        return e.byteLength;
    if (S.isURLSearchParams(e) && (e = e + ""),
    S.isString(e))
        return (await s1(e)).byteLength
}
  , u1 = async (e, t) => {
    const n = S.toFiniteNumber(e.getContentLength());
    return n ?? a1(t)
}
  , c1 = fs && (async e => {
    let {url: t, method: n, data: r, signal: i, cancelToken: o, timeout: s, onDownloadProgress: l, onUploadProgress: u, responseType: c, headers: d, withCredentials: f="same-origin", fetchOptions: y} = Gh(e);
    c = c ? (c + "").toLowerCase() : "text";
    let w = n1([i, o && o.toAbortSignal()], s), v;
    const g = w && w.unsubscribe && ( () => {
        w.unsubscribe()
    }
    );
    let x;
    try {
        if (u && l1 && n !== "get" && n !== "head" && (x = await u1(d, r)) !== 0) {
            let j = new Request(t,{
                method: "POST",
                body: r,
                duplex: "half"
            }), k;
            if (S.isFormData(r) && (k = j.headers.get("content-type")) && d.setContentType(k),
            j.body) {
                const [T,P] = ud(x, Mo(cd(u)));
                r = fd(j.body, pd, T, P)
            }
        }
        S.isString(f) || (f = f ? "include" : "omit");
        const h = "credentials"in Request.prototype;
        v = new Request(t,{
            ...y,
            signal: w,
            method: n.toUpperCase(),
            headers: d.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: h ? f : void 0
        });
        let p = await fetch(v);
        const m = ua && (c === "stream" || c === "response");
        if (ua && (l || m && g)) {
            const j = {};
            ["status", "statusText", "headers"].forEach(O => {
                j[O] = p[O]
            }
            );
            const k = S.toFiniteNumber(p.headers.get("content-length"))
              , [T,P] = l && ud(k, Mo(cd(l), !0)) || [];
            p = new Response(fd(p.body, pd, T, () => {
                P && P(),
                g && g()
            }
            ),j)
        }
        c = c || "text";
        let b = await Ao[S.findKey(Ao, c) || "text"](p, e);
        return !m && g && g(),
        await new Promise( (j, k) => {
            Qh(j, k, {
                data: b,
                headers: ze.from(p.headers),
                status: p.status,
                statusText: p.statusText,
                config: e,
                request: v
            })
        }
        )
    } catch (h) {
        throw g && g(),
        h && h.name === "TypeError" && /fetch/i.test(h.message) ? Object.assign(new U("Network Error",U.ERR_NETWORK,e,v), {
            cause: h.cause || h
        }) : U.from(h, h && h.code, e, v)
    }
}
)
  , ca = {
    http: Nw,
    xhr: t1,
    fetch: c1
};
S.forEach(ca, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const hd = e => `- ${e}`
  , d1 = e => S.isFunction(e) || e === null || e === !1
  , Jh = {
    getAdapter: e => {
        e = S.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const i = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let s;
            if (r = n,
            !d1(n) && (r = ca[(s = String(n)).toLowerCase()],
            r === void 0))
                throw new U(`Unknown adapter '${s}'`);
            if (r)
                break;
            i[s || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(i).map( ([l,u]) => `adapter ${l} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build"));
            let s = t ? o.length > 1 ? `since :
` + o.map(hd).join(`
`) : " " + hd(o[0]) : "as no adapter specified";
            throw new U("There is no suitable adapter to dispatch the request " + s,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: ca
};
function el(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new cr(null,e)
}
function md(e) {
    return el(e),
    e.headers = ze.from(e.headers),
    e.data = Zs.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Jh.getAdapter(e.adapter || ci.adapter)(e).then(function(r) {
        return el(e),
        r.data = Zs.call(e, e.transformResponse, r),
        r.headers = ze.from(r.headers),
        r
    }, function(r) {
        return Vh(r) || (el(e),
        r && r.response && (r.response.data = Zs.call(e, e.transformResponse, r.response),
        r.response.headers = ze.from(r.response.headers))),
        Promise.reject(r)
    })
}
const Zh = "1.7.7"
  , vu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    vu[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const yd = {};
vu.transitional = function(t, n, r) {
    function i(o, s) {
        return "[Axios v" + Zh + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "")
    }
    return (o, s, l) => {
        if (t === !1)
            throw new U(i(s, " has been removed" + (n ? " in " + n : "")),U.ERR_DEPRECATED);
        return n && !yd[s] && (yd[s] = !0,
        console.warn(i(s, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(o, s, l) : !0
    }
}
;
function f1(e, t, n) {
    if (typeof e != "object")
        throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
        const o = r[i]
          , s = t[o];
        if (s) {
            const l = e[o]
              , u = l === void 0 || s(l, o, e);
            if (u !== !0)
                throw new U("option " + o + " must be " + u,U.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new U("Unknown option " + o,U.ERR_BAD_OPTION)
    }
}
const da = {
    assertOptions: f1,
    validators: vu
}
  , Ot = da.validators;
class cn {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new ld,
            response: new ld
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let i;
                Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error;
                const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = vn(this.defaults, n);
        const {transitional: r, paramsSerializer: i, headers: o} = n;
        r !== void 0 && da.assertOptions(r, {
            silentJSONParsing: Ot.transitional(Ot.boolean),
            forcedJSONParsing: Ot.transitional(Ot.boolean),
            clarifyTimeoutError: Ot.transitional(Ot.boolean)
        }, !1),
        i != null && (S.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : da.assertOptions(i, {
            encode: Ot.function,
            serialize: Ot.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let s = o && S.merge(o.common, o[n.method]);
        o && S.forEach(["delete", "get", "head", "post", "put", "patch", "common"], v => {
            delete o[v]
        }
        ),
        n.headers = ze.concat(s, o);
        const l = [];
        let u = !0;
        this.interceptors.request.forEach(function(g) {
            typeof g.runWhen == "function" && g.runWhen(n) === !1 || (u = u && g.synchronous,
            l.unshift(g.fulfilled, g.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function(g) {
            c.push(g.fulfilled, g.rejected)
        });
        let d, f = 0, y;
        if (!u) {
            const v = [md.bind(this), void 0];
            for (v.unshift.apply(v, l),
            v.push.apply(v, c),
            y = v.length,
            d = Promise.resolve(n); f < y; )
                d = d.then(v[f++], v[f++]);
            return d
        }
        y = l.length;
        let w = n;
        for (f = 0; f < y; ) {
            const v = l[f++]
              , g = l[f++];
            try {
                w = v(w)
            } catch (x) {
                g.call(this, x);
                break
            }
        }
        try {
            d = md.call(this, w)
        } catch (v) {
            return Promise.reject(v)
        }
        for (f = 0,
        y = c.length; f < y; )
            d = d.then(c[f++], c[f++]);
        return d
    }
    getUri(t) {
        t = vn(this.defaults, t);
        const n = Kh(t.baseURL, t.url);
        return Hh(n, t.params, t.paramsSerializer)
    }
}
S.forEach(["delete", "get", "head", "options"], function(t) {
    cn.prototype[t] = function(n, r) {
        return this.request(vn(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
S.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, s, l) {
            return this.request(vn(l || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: s
            }))
        }
    }
    cn.prototype[t] = n(),
    cn.prototype[t + "Form"] = n(!0)
});
class gu {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        }
        );
        const r = this;
        this.promise.then(i => {
            if (!r._listeners)
                return;
            let o = r._listeners.length;
            for (; o-- > 0; )
                r._listeners[o](i);
            r._listeners = null
        }
        ),
        this.promise.then = i => {
            let o;
            const s = new Promise(l => {
                r.subscribe(l),
                o = l
            }
            ).then(i);
            return s.cancel = function() {
                r.unsubscribe(o)
            }
            ,
            s
        }
        ,
        t(function(o, s, l) {
            r.reason || (r.reason = new cr(o,s,l),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = r => {
            t.abort(r)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new gu(function(i) {
                t = i
            }
            ),
            cancel: t
        }
    }
}
function p1(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function h1(e) {
    return S.isObject(e) && e.isAxiosError === !0
}
const fa = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(fa).forEach( ([e,t]) => {
    fa[t] = e
}
);
function em(e) {
    const t = new cn(e)
      , n = Ph(cn.prototype.request, t);
    return S.extend(n, cn.prototype, t, {
        allOwnKeys: !0
    }),
    S.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(i) {
        return em(vn(e, i))
    }
    ,
    n
}
const se = em(ci);
se.Axios = cn;
se.CanceledError = cr;
se.CancelToken = gu;
se.isCancel = Vh;
se.VERSION = Zh;
se.toFormData = ds;
se.AxiosError = U;
se.Cancel = se.CanceledError;
se.all = function(t) {
    return Promise.all(t)
}
;
se.spread = p1;
se.isAxiosError = h1;
se.mergeConfig = vn;
se.AxiosHeaders = ze;
se.formToJSON = e => qh(S.isHTMLForm(e) ? new FormData(e) : e);
se.getAdapter = Jh.getAdapter;
se.HttpStatusCode = fa;
se.default = se;
let m1 = {
    data: ""
}
  , y1 = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
    innerHTML: " ",
    id: "_goober"
})).firstChild : e || m1
  , v1 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g
  , g1 = /\/\*[^]*?\*\/|  +/g
  , vd = /\n+/g
  , zt = (e, t) => {
    let n = ""
      , r = ""
      , i = "";
    for (let o in e) {
        let s = e[o];
        o[0] == "@" ? o[1] == "i" ? n = o + " " + s + ";" : r += o[1] == "f" ? zt(s, o) : o + "{" + zt(s, o[1] == "k" ? "" : t) + "}" : typeof s == "object" ? r += zt(s, t ? t.replace(/([^,])+/g, l => o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, u => /&/.test(u) ? u.replace(/&/g, l) : l ? l + " " + u : u)) : o) : s != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(),
        i += zt.p ? zt.p(o, s) : o + ":" + s + ";")
    }
    return n + (t && i ? t + "{" + i + "}" : i) + r
}
  , mt = {}
  , tm = e => {
    if (typeof e == "object") {
        let t = "";
        for (let n in e)
            t += n + tm(e[n]);
        return t
    }
    return e
}
  , x1 = (e, t, n, r, i) => {
    let o = tm(e)
      , s = mt[o] || (mt[o] = (u => {
        let c = 0
          , d = 11;
        for (; c < u.length; )
            d = 101 * d + u.charCodeAt(c++) >>> 0;
        return "go" + d
    }
    )(o));
    if (!mt[s]) {
        let u = o !== e ? e : (c => {
            let d, f, y = [{}];
            for (; d = v1.exec(c.replace(g1, "")); )
                d[4] ? y.shift() : d[3] ? (f = d[3].replace(vd, " ").trim(),
                y.unshift(y[0][f] = y[0][f] || {})) : y[0][d[1]] = d[2].replace(vd, " ").trim();
            return y[0]
        }
        )(e);
        mt[s] = zt(i ? {
            ["@keyframes " + s]: u
        } : u, n ? "" : "." + s)
    }
    let l = n && mt.g ? mt.g : null;
    return n && (mt.g = mt[s]),
    ( (u, c, d, f) => {
        f ? c.data = c.data.replace(f, u) : c.data.indexOf(u) === -1 && (c.data = d ? u + c.data : c.data + u)
    }
    )(mt[s], t, r, l),
    s
}
  , w1 = (e, t, n) => e.reduce( (r, i, o) => {
    let s = t[o];
    if (s && s.call) {
        let l = s(n)
          , u = l && l.props && l.props.className || /^go/.test(l) && l;
        s = u ? "." + u : l && typeof l == "object" ? l.props ? "" : zt(l, "") : l === !1 ? "" : l
    }
    return r + i + (s ?? "")
}
, "");
function ps(e) {
    let t = this || {}
      , n = e.call ? e(t.p) : e;
    return x1(n.unshift ? n.raw ? w1(n, [].slice.call(arguments, 1), t.p) : n.reduce( (r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {}) : n, y1(t.target), t.g, t.o, t.k)
}
let nm, pa, ha;
ps.bind({
    g: 1
});
let Nt = ps.bind({
    k: 1
});
function b1(e, t, n, r) {
    zt.p = t,
    nm = e,
    pa = n,
    ha = r
}
function Zt(e, t) {
    let n = this || {};
    return function() {
        let r = arguments;
        function i(o, s) {
            let l = Object.assign({}, o)
              , u = l.className || i.className;
            n.p = Object.assign({
                theme: pa && pa()
            }, l),
            n.o = / *go\d+/.test(u),
            l.className = ps.apply(n, r) + (u ? " " + u : "");
            let c = e;
            return e[0] && (c = l.as || e,
            delete l.as),
            ha && c[0] && ha(l),
            nm(c, l)
        }
        return i
    }
}
var S1 = e => typeof e == "function"
  , Fo = (e, t) => S1(e) ? e(t) : e
  , j1 = ( () => {
    let e = 0;
    return () => (++e).toString()
}
)()
  , rm = ( () => {
    let e;
    return () => {
        if (e === void 0 && typeof window < "u") {
            let t = matchMedia("(prefers-reduced-motion: reduce)");
            e = !t || t.matches
        }
        return e
    }
}
)()
  , k1 = 20
  , Ki = new Map
  , N1 = 1e3
  , gd = e => {
    if (Ki.has(e))
        return;
    let t = setTimeout( () => {
        Ki.delete(e),
        jn({
            type: 4,
            toastId: e
        })
    }
    , N1);
    Ki.set(e, t)
}
  , E1 = e => {
    let t = Ki.get(e);
    t && clearTimeout(t)
}
  , ma = (e, t) => {
    switch (t.type) {
    case 0:
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, k1)
        };
    case 1:
        return t.toast.id && E1(t.toast.id),
        {
            ...e,
            toasts: e.toasts.map(o => o.id === t.toast.id ? {
                ...o,
                ...t.toast
            } : o)
        };
    case 2:
        let {toast: n} = t;
        return e.toasts.find(o => o.id === n.id) ? ma(e, {
            type: 1,
            toast: n
        }) : ma(e, {
            type: 0,
            toast: n
        });
    case 3:
        let {toastId: r} = t;
        return r ? gd(r) : e.toasts.forEach(o => {
            gd(o.id)
        }
        ),
        {
            ...e,
            toasts: e.toasts.map(o => o.id === r || r === void 0 ? {
                ...o,
                visible: !1
            } : o)
        };
    case 4:
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(o => o.id !== t.toastId)
        };
    case 5:
        return {
            ...e,
            pausedAt: t.time
        };
    case 6:
        let i = t.time - (e.pausedAt || 0);
        return {
            ...e,
            pausedAt: void 0,
            toasts: e.toasts.map(o => ({
                ...o,
                pauseDuration: o.pauseDuration + i
            }))
        }
    }
}
  , Gi = []
  , Yi = {
    toasts: [],
    pausedAt: void 0
}
  , jn = e => {
    Yi = ma(Yi, e),
    Gi.forEach(t => {
        t(Yi)
    }
    )
}
  , _1 = {
    blank: 4e3,
    error: 4e3,
    success: 2e3,
    loading: 1 / 0,
    custom: 4e3
}
  , O1 = (e={}) => {
    let[t,n] = N.useState(Yi);
    N.useEffect( () => (Gi.push(n),
    () => {
        let i = Gi.indexOf(n);
        i > -1 && Gi.splice(i, 1)
    }
    ), [t]);
    let r = t.toasts.map(i => {
        var o, s;
        return {
            ...e,
            ...e[i.type],
            ...i,
            duration: i.duration || ((o = e[i.type]) == null ? void 0 : o.duration) || (e == null ? void 0 : e.duration) || _1[i.type],
            style: {
                ...e.style,
                ...(s = e[i.type]) == null ? void 0 : s.style,
                ...i.style
            }
        }
    }
    );
    return {
        ...t,
        toasts: r
    }
}
  , T1 = (e, t="blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: {
        role: "status",
        "aria-live": "polite"
    },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || j1()
})
  , di = e => (t, n) => {
    let r = T1(t, e, n);
    return jn({
        type: 2,
        toast: r
    }),
    r.id
}
  , Ae = (e, t) => di("blank")(e, t);
Ae.error = di("error");
Ae.success = di("success");
Ae.loading = di("loading");
Ae.custom = di("custom");
Ae.dismiss = e => {
    jn({
        type: 3,
        toastId: e
    })
}
;
Ae.remove = e => jn({
    type: 4,
    toastId: e
});
Ae.promise = (e, t, n) => {
    let r = Ae.loading(t.loading, {
        ...n,
        ...n == null ? void 0 : n.loading
    });
    return e.then(i => (Ae.success(Fo(t.success, i), {
        id: r,
        ...n,
        ...n == null ? void 0 : n.success
    }),
    i)).catch(i => {
        Ae.error(Fo(t.error, i), {
            id: r,
            ...n,
            ...n == null ? void 0 : n.error
        })
    }
    ),
    e
}
;
var C1 = (e, t) => {
    jn({
        type: 1,
        toast: {
            id: e,
            height: t
        }
    })
}
  , P1 = () => {
    jn({
        type: 5,
        time: Date.now()
    })
}
  , R1 = e => {
    let {toasts: t, pausedAt: n} = O1(e);
    N.useEffect( () => {
        if (n)
            return;
        let o = Date.now()
          , s = t.map(l => {
            if (l.duration === 1 / 0)
                return;
            let u = (l.duration || 0) + l.pauseDuration - (o - l.createdAt);
            if (u < 0) {
                l.visible && Ae.dismiss(l.id);
                return
            }
            return setTimeout( () => Ae.dismiss(l.id), u)
        }
        );
        return () => {
            s.forEach(l => l && clearTimeout(l))
        }
    }
    , [t, n]);
    let r = N.useCallback( () => {
        n && jn({
            type: 6,
            time: Date.now()
        })
    }
    , [n])
      , i = N.useCallback( (o, s) => {
        let {reverseOrder: l=!1, gutter: u=8, defaultPosition: c} = s || {}
          , d = t.filter(w => (w.position || c) === (o.position || c) && w.height)
          , f = d.findIndex(w => w.id === o.id)
          , y = d.filter( (w, v) => v < f && w.visible).length;
        return d.filter(w => w.visible).slice(...l ? [y + 1] : [0, y]).reduce( (w, v) => w + (v.height || 0) + u, 0)
    }
    , [t]);
    return {
        toasts: t,
        handlers: {
            updateHeight: C1,
            startPause: P1,
            endPause: r,
            calculateOffset: i
        }
    }
}
  , L1 = Nt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`
  , z1 = Nt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`
  , I1 = Nt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`
  , D1 = Zt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${z1} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${I1} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`
  , M1 = Nt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
  , A1 = Zt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${M1} 1s linear infinite;
`
  , F1 = Nt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`
  , $1 = Nt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`
  , U1 = Zt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${$1} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`
  , B1 = Zt("div")`
  position: absolute;
`
  , H1 = Zt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`
  , W1 = Nt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`
  , q1 = Zt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${W1} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`
  , V1 = ({toast: e}) => {
    let {icon: t, type: n, iconTheme: r} = e;
    return t !== void 0 ? typeof t == "string" ? N.createElement(q1, null, t) : t : n === "blank" ? null : N.createElement(H1, null, N.createElement(A1, {
        ...r
    }), n !== "loading" && N.createElement(B1, null, n === "error" ? N.createElement(D1, {
        ...r
    }) : N.createElement(U1, {
        ...r
    })))
}
  , Q1 = e => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`
  , K1 = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`
  , G1 = "0%{opacity:0;} 100%{opacity:1;}"
  , Y1 = "0%{opacity:1;} 100%{opacity:0;}"
  , X1 = Zt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`
  , J1 = Zt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`
  , Z1 = (e, t) => {
    let n = e.includes("top") ? 1 : -1
      , [r,i] = rm() ? [G1, Y1] : [Q1(n), K1(n)];
    return {
        animation: t ? `${Nt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Nt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
}
  , eb = N.memo( ({toast: e, position: t, style: n, children: r}) => {
    let i = e.height ? Z1(e.position || t || "top-center", e.visible) : {
        opacity: 0
    }
      , o = N.createElement(V1, {
        toast: e
    })
      , s = N.createElement(J1, {
        ...e.ariaProps
    }, Fo(e.message, e));
    return N.createElement(X1, {
        className: e.className,
        style: {
            ...i,
            ...n,
            ...e.style
        }
    }, typeof r == "function" ? r({
        icon: o,
        message: s
    }) : N.createElement(N.Fragment, null, o, s))
}
);
b1(N.createElement);
var tb = ({id: e, className: t, style: n, onHeightUpdate: r, children: i}) => {
    let o = N.useCallback(s => {
        if (s) {
            let l = () => {
                let u = s.getBoundingClientRect().height;
                r(e, u)
            }
            ;
            l(),
            new MutationObserver(l).observe(s, {
                subtree: !0,
                childList: !0,
                characterData: !0
            })
        }
    }
    , [e, r]);
    return N.createElement("div", {
        ref: o,
        className: t,
        style: n
    }, i)
}
  , nb = (e, t) => {
    let n = e.includes("top")
      , r = n ? {
        top: 0
    } : {
        bottom: 0
    }
      , i = e.includes("center") ? {
        justifyContent: "center"
    } : e.includes("right") ? {
        justifyContent: "flex-end"
    } : {};
    return {
        left: 0,
        right: 0,
        display: "flex",
        position: "absolute",
        transition: rm() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
        transform: `translateY(${t * (n ? 1 : -1)}px)`,
        ...r,
        ...i
    }
}
  , rb = ps`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`
  , Ri = 16
  , ib = ({reverseOrder: e, position: t="top-center", toastOptions: n, gutter: r, children: i, containerStyle: o, containerClassName: s}) => {
    let {toasts: l, handlers: u} = R1(n);
    return N.createElement("div", {
        style: {
            position: "fixed",
            zIndex: 9999,
            top: Ri,
            left: Ri,
            right: Ri,
            bottom: Ri,
            pointerEvents: "none",
            ...o
        },
        className: s,
        onMouseEnter: u.startPause,
        onMouseLeave: u.endPause
    }, l.map(c => {
        let d = c.position || t
          , f = u.calculateOffset(c, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t
        })
          , y = nb(d, f);
        return N.createElement(tb, {
            id: c.id,
            key: c.id,
            onHeightUpdate: u.updateHeight,
            className: c.visible ? rb : "",
            style: y
        }, c.type === "custom" ? Fo(c.message, c) : i ? i(c) : N.createElement(eb, {
            toast: c,
            position: d
        }))
    }
    ))
}
  , Lr = Ae;
const ob = () => {
    const e = ot()
      , t = "https://talentid-node-backend-ashen.vercel.app"
      , [n,r] = N.useState("")
      , [i,o] = N.useState({
        fullname: "",
        company: "",
        email: "",
        phone: "",
        message: ""
    })
      , s = c => {
        r(c.target.value)
    }
      , l = c => {
        const {name: d, value: f} = c.target;
        o({
            ...i,
            [d]: f
        })
    }
      , u = async c => {
        c.preventDefault();
        try {
            const d = await se.post(`${t}/api/contactus/contact-us`, {
                ...i,
                queryOptions: n
            });
            Lr.success("Form submitted successfully!"),
            o({
                fullname: "",
                company: "",
                email: "",
                phone: "",
                message: ""
            }),
            e("/")
        } catch (d) {
            Lr.error(d.response.data.error)
        }
    }
    ;
    return a.jsxs(a.Fragment, {
        children: [a.jsx(ar, {}), a.jsxs("div", {
            className: "flex flex-col md:flex-row justify-center items-center p-6 bg-gray-100",
            children: [a.jsxs("div", {
                className: "bg-white p-10 rounded-l-[24px] shadow-lg max-w-md ",
                children: [a.jsx("h2", {
                    className: "text-2xl font-bold mb-2",
                    children: "Contact us"
                }), a.jsx("p", {
                    className: "mb-4 max-w-[300px]",
                    children: "We can help your team hire better and faster."
                }), a.jsxs("div", {
                    className: "mb-4 flex items-center gap-4",
                    children: [a.jsx(nd, {
                        className: "text-lg"
                    }), a.jsx("p", {
                        children: "Support@talentid.app"
                    })]
                }), a.jsxs("div", {
                    className: "mb-4 flex items-center gap-4",
                    children: [a.jsx(Ax, {
                        className: "text-lg"
                    }), a.jsx("p", {
                        children: "+91 7799112167, 9505001969"
                    })]
                }), a.jsxs("div", {
                    className: "mb-4 flex items-center gap-4",
                    children: [a.jsx(Mx, {
                        className: "text-lg"
                    }), a.jsx("p", {
                        children: "HireXzo solutions LLP, Balaji Nagar, Mallapur, Balapur, RCI Road, Hyderabad Telangana, India - 500005"
                    })]
                })]
            }), a.jsxs("div", {
                className: "p-6 rounded-[24px] border border-black shadow-lg max-w-md md:mt-0",
                style: {
                    backgroundColor: " rgba(208, 172, 255, 0.67)"
                },
                children: [a.jsx("h2", {
                    className: "text-2xl font-semibold",
                    children: "Get in touch"
                }), a.jsx("label", {
                    className: "block text-md mb-4",
                    children: "You can reach us anytime"
                }), a.jsxs("form", {
                    onSubmit: u,
                    children: [a.jsxs("div", {
                        className: "md:flex gap-2",
                        children: [a.jsxs("div", {
                            className: "mb-4 relative",
                            children: [a.jsx(Fx, {
                                className: "absolute text-[15px] mt-3.5 ml-[15px]"
                            }), a.jsx("input", {
                                type: "text",
                                name: "fullname",
                                placeholder: "Full Name",
                                value: i.name,
                                onChange: l,
                                className: "pl-10 w-full p-2 border border-black rounded-[41px]",
                                "aria-label": "Full Name"
                            })]
                        }), a.jsxs("div", {
                            className: "mb-4 relative",
                            children: [a.jsx(Dx, {
                                className: "absolute text-[15px] mt-3.5 ml-[15px]"
                            }), a.jsx("input", {
                                type: "text",
                                name: "company",
                                placeholder: "Company",
                                value: i.company,
                                onChange: l,
                                className: "pl-10 w-full p-2 border border-black rounded-[41px]",
                                "aria-label": "Company"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "mb-4 relative",
                        children: [a.jsx(nd, {
                            className: "absolute text-[15px] mt-3 ml-[15px]"
                        }), a.jsx("input", {
                            type: "email",
                            name: "email",
                            placeholder: "Enter your email here",
                            value: i.email,
                            onChange: l,
                            className: "pl-10 w-full p-2 border border-black rounded-[41px]",
                            "aria-label": "Email Address"
                        })]
                    }), a.jsxs("div", {
                        className: "mb-4 relative",
                        children: [a.jsx("span", {
                            className: "absolute font-bold text-[15px] mt-3 ml-[15px]",
                            children: "+91"
                        }), a.jsx("input", {
                            type: "tel",
                            name: "phone",
                            placeholder: "Enter your mobile number",
                            value: i.phone,
                            onChange: l,
                            className: "pl-14 w-full p-2 border border-black rounded-[41px]",
                            "aria-label": "Mobile Number"
                        })]
                    }), a.jsx("h2", {
                        className: "block text-md font-bold mb-2",
                        children: "How can we help?"
                    }), a.jsxs("div", {
                        className: "mb-4 bg-white border border-black p-2 rounded-[26px]",
                        children: [a.jsx("div", {
                            className: "flex flex-wrap space-x-2 space-y-2",
                            children: ["Pricing Query", "Partnership issues", "Affiliate program", "Integration partnership", "Book a demo", "Others"].map(c => a.jsxs("label", {
                                className: "flex items-center",
                                children: [a.jsx("input", {
                                    type: "radio",
                                    name: "help",
                                    value: c,
                                    checked: n === c,
                                    onChange: s,
                                    className: "mr-[2px]"
                                }), c]
                            }, c))
                        }), a.jsx("div", {
                            className: "mb-4",
                            children: a.jsx("textarea", {
                                name: "message",
                                value: i.message,
                                onChange: l,
                                className: "w-[98%] p-4 border border-black mt-4 rounded-[26px] resize-none",
                                placeholder: "Message here...",
                                rows: "4",
                                "aria-label": "Message"
                            })
                        })]
                    }), a.jsx("button", {
                        type: "submit",
                        className: "w-full bg-purple-600 rounded-[26px] text-white p-2",
                        children: "Submit"
                    })]
                })]
            })]
        }), a.jsx(lr, {})]
    })
}
  , sb = () => {
    const e = ot();
    return a.jsxs("section", {
        className: "bg-white py-10 text-center",
        children: [a.jsx("h2", {
            className: "text-black text-4xl font-bold mb-4",
            children: "Let's Grow Together🌱"
        }), a.jsx("button", {
            onClick: () => e("/contactus"),
            className: "bg-purple-600 text-white py-2 px-6 rounded-full font-bold hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transition duration-300",
            children: "Convinced? Get Started →"
        }), a.jsx("div", {
            className: "mt-8",
            children: a.jsx("img", {
                src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/xingkqbfu0mbbraj8n8a",
                alt: "Growth Image",
                className: "mx-auto h-96"
            })
        })]
    })
}
  , lb = ({question: e, answer: t}) => {
    const [n,r] = N.useState(!1);
    return a.jsxs("div", {
        className: "mb-4 mt-0",
        children: [a.jsxs("button", {
            onClick: () => r(!n),
            className: "w-full py-4 px-4 bg-gray-200 rounded-lg shadow-md flex justify-between items-center",
            children: [a.jsx("span", {
                className: "text-lg text-black",
                children: e
            }), a.jsx("svg", {
                className: `transform transition-transform duration-200 ${n ? "rotate-180" : ""}`,
                width: "20",
                height: "20",
                fill: "none",
                strokeWidth: "1",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                stroke: "black",
                children: a.jsx("polyline", {
                    points: "6 9 12 15 18 9"
                })
            })]
        }), n && a.jsx("div", {
            className: "px-4 pt-2 pb-4 text-black bg-gray-50 rounded-b-lg w-full",
            children: t
        })]
    })
}
  , ab = () => {
    const e = [{
        question: "How do I become a partner with talentid.app?",
        answer: "You can contact our sales team through our website or email us at partners@talentid.app. We'd be happy to discuss your needs and how we can partner for success."
    }, {
        question: "Can we use talentid.app for internal recruitment as well as external hiring?",
        answer: "Absolutely! Talentid.app is a versatile platform that can be used for both internal and external recruitment. You can track applications, and collaborate with hiring managers effectively."
    }, {
        question: "Do I need to pay anything to join the partner program?",
        answer: "No joining fee! It’s absolutely free."
    }, {
        question: "What kind of marketing materials can I expect to receive as a partner?",
        answer: "As a partner, you'll have access to a variety of marketing materials, including joint press releases, social media content, and branded collateral. These materials will help you promote your partnership and reach a wider audience."
    }];
    return a.jsxs("div", {
        className: "max-w-5xl mx-auto",
        children: [a.jsx("h2", {
            className: "text-4xl font-bold text-center mb-6 text-black underline",
            children: "Frequently asked questions"
        }), a.jsx("div", {
            children: e.map( (t, n) => a.jsx(lb, {
                question: t.question,
                answer: t.answer
            }, n))
        })]
    })
}
;
function ub() {
    return a.jsx("div", {
        className: "bg-white min-h-screen flex items-center justify-center",
        children: a.jsx(ab, {})
    })
}
const cb = () => a.jsxs("div", {
    className: "bg-white text-black",
    children: [a.jsx(ar, {}), a.jsx("div", {
        className: "bg-gray-50 py-2 flex items-center justify-center",
        children: a.jsxs("div", {
            className: "max-w-6xl w-full flex flex-col md:flex-row items-center py-4",
            children: [a.jsx("div", {
                className: "p-10 md:w-1/2",
                children: a.jsxs("div", {
                    className: "text-xl text-justify",
                    children: [a.jsx("div", {
                        className: "flex items-center mb-4",
                        children: a.jsx("h3", {
                            className: "font-bold text-3xl",
                            children: "Help your clients hire better🤝"
                        })
                    }), a.jsx("p", {
                        className: "text-base",
                        children: "You're looking to grow your business, and we're here to help with the Talent ID partner program. Join the Talent ID family, and start providing HR services to clients around the world. Whether you're working with a staffing agency or internal HR, you can monetize your knowledge and grow with your customers."
                    }), a.jsx("div", {
                        className: "mt-4",
                        children: a.jsx("button", {
                            className: "bg-purple-500 text-white px-4 py-2 rounded-full font-bold hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transition duration-300",
                            onClick: () => window.location.href = "/contactus",
                            children: "Become a Partner"
                        })
                    })]
                })
            }), a.jsx("div", {
                className: "p-8 md:w-1/2 flex justify-center",
                children: a.jsx("img", {
                    src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/bt0zkwsdxhxcpdwn1jls",
                    alt: "About Us Image",
                    className: "h-64 w-auto"
                })
            })]
        })
    })]
})
  , db = [{
    id: 1,
    image: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/kyfqq7fta6nlkf8afffc"
}, {
    id: 2,
    image: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/htpsqkmkohpevuoyrnma"
}, {
    id: 3,
    image: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/ayx3u8loxloztsdzro4n"
}]
  , fb = () => {
    const e = {
        dots: !0,
        infinite: !0,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        arrows: !1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    };
    return a.jsxs("header", {
        className: "bg-white text-center py-10",
        children: [a.jsxs("div", {
            className: "flex flex-col items-center",
            children: [a.jsx("h2", {
                className: "text-black text-3xl font-bold",
                children: "Our Partners"
            }), a.jsx("p", {
                className: "text-black text-lg",
                children: "Let's build something great together"
            })]
        }), a.jsx("div", {
            className: "mt-10",
            children: a.jsx(_h, {
                ...e,
                children: db.map(t => a.jsx("div", {
                    className: "flex justify-center",
                    children: a.jsx("img", {
                        src: t.image,
                        alt: `Partner ${t.id}`,
                        className: "h-16"
                    })
                }, t.id))
            })
        })]
    })
}
  , pb = [{
    id: 1,
    title: "Parternship",
    description: "Our candidate tracking system collaborates with a range of partners to enhance its capabilities and reach. By working together, we ensure a seamless experience for our users, integrating cutting-edge technologies and industry expertise.",
    icon: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/kworx5lbk3plmf4h0vtw"
}, {
    id: 2,
    title: "Integration Partner",
    description: "As an integration partner, we connect with various platforms and tools to create a unified hiring ecosystem. This integration streamlines data flow, enhances functionality, and provides a cohesive user experience across all your hiring processes.",
    icon: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/kworx5lbk3plmf4h0vtw"
}, {
    id: 3,
    title: "Channel Partner",
    description: "Our channel partners help extend our reach to new markets and customers. By leveraging their networks and expertise, we can deliver our candidate tracking solutions to a broader audience, ensuring more companies benefit from our advanced hiring technology.",
    icon: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/kworx5lbk3plmf4h0vtw"
}, {
    id: 4,
    title: "Event Collaboration",
    description: "We collaborate with industry events and conferences to showcase our candidate tracking system and share insights with professionals. These collaborations allow us to connect with potential clients, stay updated on industry trends, and contribute to the growth of the hiring community.",
    icon: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/about%20us/kworx5lbk3plmf4h0vtw"
}]
  , hb = () => {
    const e = ot();
    return a.jsxs("section", {
        className: "bg-white py-6 px-2 md:px-10",
        children: [a.jsx("h2", {
            className: "text-black text-3xl font-bold mb-8 text-center underline",
            children: "Helping Business Grow"
        }), a.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-10 gap-x-0 justify-center justify-items-center",
            children: pb.map(t => a.jsxs("div", {
                className: "bg-white rounded-lg shadow-md p-6 flex flex-col items-center border-2 border-blue-400 transition-transform transform duration-300 hover:scale-105",
                style: {
                    maxWidth: "400px",
                    maxHeight: "350px"
                },
                children: [a.jsx("img", {
                    src: t.icon,
                    alt: "Service Icon",
                    className: "h-16 mb-4"
                }), a.jsx("h3", {
                    className: "text-black text-xl font-semibold mb-2 text-center",
                    children: t.title
                }), a.jsx("p", {
                    className: "text-gray-600 text-sm mb-4 text-justify",
                    children: t.description
                }), a.jsx("button", {
                    onClick: () => e("/contactus"),
                    className: "bg-purple-500 text-white py-2 px-4 rounded-full font-bold mt-auto",
                    children: "Become a Partner →"
                })]
            }, t.id))
        })]
    })
}
;
function mb() {
    return a.jsxs("div", {
        className: "App",
        children: [a.jsx(cb, {}), a.jsx(fb, {}), a.jsx(hb, {}), a.jsx(sb, {}), a.jsx(ub, {}), a.jsx(lr, {})]
    })
}
const yb = () => a.jsxs("div", {
    className: "bg-white py-8 sm:py-10 flex flex-col items-center",
    children: [a.jsx("h2", {
        className: "text-2xl sm:text-3xl font-extrabold text-black mb-4 sm:mb-6 text-center",
        children: "Ready to dive in?"
    }), a.jsx(ae, {
        to: "/pricing",
        className: "bg-black text-white py-3 px-8 sm:py-2 sm:px-12 rounded-full text-base sm:text-lg mb-3",
        children: "Get Started"
    }), a.jsx("p", {
        className: "text-gray-500 text-sm sm:text-base underline",
        children: "No credit card required"
    })]
});
function vb(e) {
    return Sn({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                strokeWidth: "2",
                d: "M12,13 C14.209139,13 16,11.209139 16,9 C16,6.790861 14.209139,5 12,5 C9.790861,5 8,6.790861 8,9 C8,11.209139 9.790861,13 12,13 Z M6,22 L6,19 C6,15.6862915 8.6862915,13 12,13 C15.3137085,13 18,15.6862915 18,19 L18,22 M13,5 C13.4037285,3.33566165 15.0151447,2 17,2 C19.172216,2 20.98052,3.790861 21,6 C20.98052,8.209139 19.172216,10 17,10 L16,10 L17,10 C20.287544,10 23,12.6862915 23,16 L23,18 M11,5 C10.5962715,3.33566165 8.98485529,2 7,2 C4.82778404,2 3.01948003,3.790861 3,6 C3.01948003,8.209139 4.82778404,10 7,10 L8,10 L7,10 C3.71245602,10 1,12.6862915 1,16 L1,18"
            },
            child: []
        }]
    })(e)
}
const gb = ({text: e, heading: t}) => a.jsxs("div", {
    className: "bg-white p-6 sm:p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg",
    children: [a.jsx("div", {
        className: "flex justify-center mb-4",
        children: a.jsx("div", {
            className: "bg-green-200 p-3 rounded-full",
            children: a.jsx(vb, {
                size: "24"
            })
        })
    }), a.jsx("h2", {
        className: "text-gray-800 text-lg sm:text-xl font-bold text-center mb-4",
        children: t
    }), a.jsx("p", {
        className: "text-gray-600 text-sm sm:text-base text-center",
        children: e
    })]
})
  , xb = () => {
    const e = [{
        heading: "Hire 3x faster",
        para: "Streamline your hiring process in just 2 clicks! Automatically create a pipeline to screen, assess, and select candidates through practical skills evaluations. Efficiently manage high volumes and speed up your hiring process by 3x, ensuring you find the best talent faster and more effectively."
    }, {
        heading: "Eliminate Dropouts",
        para: "Keep candidates engaged and reduce the risk of dropouts with our proactive communication tools. Automated reminders, personalized follow-ups, and timely updates ensure candidates remain committed and informed at every stage of the hiring process. Say goodbye to lost opportunities and missed hires."
    }, {
        heading: "Offer Intelligence",
        para: "Make informed decisions with our offer intelligence feature. Analyze historical data and current trends to craft compelling offers that attract top talent while optimizing your budget. Gain insights into offer acceptance rates and market trends to enhance your hiring strategy and secure the best candidates."
    }];
    return a.jsx("div", {
        className: "bg-gray-100 px-4 py-8  sm:py-16",
        children: a.jsx("div", {
            className: "container mx-auto flex space-y-6 flex-col items-center sm:flex-row sm:justify-center sm:space-x-10",
            children: e.map( (t, n) => a.jsx(gb, {
                heading: t.heading,
                text: t.para
            }, n))
        })
    })
}
  , wb = ({question: e, answer: t}) => {
    const [n,r] = N.useState(!1);
    return a.jsx("div", {
        className: "relative mb-4 w-full",
        children: a.jsxs("div", {
            onClick: () => r(!n),
            className: "relative flex flex-col max-w-6xl w-full py-4 px-4 bg-gray-200 rounded-lg shadow-md",
            children: [a.jsxs("div", {
                className: "relative flex w-full justify-between items-center",
                children: [a.jsx("p", {
                    className: "text-base sm:text-lg relative text-black",
                    children: e
                }), a.jsx("svg", {
                    className: `transform transition-transform duration-200 ${n ? "rotate-180" : ""}`,
                    width: "20",
                    height: "20",
                    fill: "none",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    stroke: "black",
                    children: a.jsx("polyline", {
                        points: "6 9 12 15 18 9"
                    })
                })]
            }), a.jsx("div", {
                className: `overflow-hidden transition-all duration-300 ${n ? "mt-4 mb-4 max-h-[500px]" : "max-h-0"}`,
                children: a.jsx("div", {
                    className: "relative px-4 pt-2 pb-4 text-black bg-gray-50 rounded-lg w-full",
                    children: a.jsx("p", {
                        className: "relative text-wrap text-base sm:text-lg",
                        children: t
                    })
                })
            })]
        })
    })
}
  , bb = () => {
    const e = [{
        question: "Do you offer a free trial?",
        answer: "Yes, we offer a 100 credits free trial for all new users to explore our platform and features."
    }, {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, UPI, Net Banking, Wallets, Paylater, and bank transfers."
    }, {
        question: "How many pricing plans do you offer?",
        answer: "We offer three pricing plans: Starter, Business, and Custom plans."
    }, {
        question: "Can I upgrade my plan at any time?",
        answer: "Yes, you can upgrade your plan at any time by emailing us at support@talentid.app"
    }, {
        question: "Do you offer custom pricing for large enterprises?",
        answer: "Yes, we provide custom pricing for large enterprises. Please contact our sales team support@talentid.app for more details."
    }];
    return a.jsx("div", {
        className: "relative w-full flex flex-col justify-center items-center",
        children: a.jsxs("div", {
            className: "max-w-5xl w-full flex flex-col justify-center items-center gap-9",
            children: [a.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [a.jsx("h2", {
                    className: "text-2xl sm:text-4xl font-bold text-center text-black ",
                    children: "Frequently Asked Questions"
                }), a.jsx("div", {
                    className: "h-[2px] w-full bg-black mx-auto"
                })]
            }), a.jsx("div", {
                className: "relative w-full cursor-pointer",
                children: e.map( (t, n) => a.jsx(wb, {
                    question: t.question,
                    answer: t.answer
                }, n))
            })]
        })
    })
}
;
function Sb() {
    return a.jsx("div", {
        className: "bg-white min-h-screen w-[100%] flex items-center justify-center",
        children: a.jsx(bb, {})
    })
}
const jb = () => a.jsxs("div", {
    className: "bg-purple-700 p-5 sm:p-10 flex flex-col sm:flex-row justify-around items-center rounded-lg",
    children: [a.jsxs("div", {
        className: "flex flex-col sm:flex-row items-center",
        children: [a.jsx("img", {
            src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/arblw0dqu447gxhxarpb",
            alt: "Hiring",
            className: "h-32 w-48 sm:h-40 sm:w-60"
        }), a.jsx("div", {
            className: "mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left",
            children: a.jsx("h2", {
                className: "text-white text-2xl sm:text-3xl font-bold",
                children: "Talk to us about your Hiring needs"
            })
        })]
    }), a.jsx("a", {
        href: "https://calendly.com/jai-talentid/demo-talent-id",
        className: "mt-4 sm:mt-0 bg-white text-purple-800 py-4 px-10 sm:py-6 sm:px-20 rounded-full font-bold text-lg sm:text-xl",
        children: "Book a Demo"
    })]
})
  , kb = () => {
    const [e,t] = N.useState("monthly");
    ot();
    const n = {
        starter: {
            monthly: 5e3
        },
        business: {
            yearly: 5e4
        },
        custom: {
            monthly: "Let’s Talk",
            yearly: "Let’s Talk"
        }
    }
      , r = ["Unlimited credits", "Custom integrations", "Dedicated account manger", "Early access to the new feature", "Priority email + call support "];
    return a.jsxs("div", {
        className: "bg-gradient-to-t from-gray-300 to-white text-black min-h-screen",
        children: [a.jsx(ar, {}), a.jsx("div", {
            className: "py-5 sm:py-10",
            children: a.jsxs("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-10 text-center",
                children: [a.jsxs("h1", {
                    className: "text-3xl sm:text-5xl font-extrabold mb-4",
                    children: [a.jsx("span", {
                        children: "Get started at no cost"
                    }), a.jsx("br", {}), a.jsx("span", {
                        children: "then pay as you go."
                    })]
                }), a.jsx("p", {
                    className: "text-gray-800 mb-6 sm:mb-10 text-lg sm:text-xl",
                    children: "We offer flexible pricing plans to suit businesses of all sizes."
                }), a.jsx("div", {
                    className: "flex justify-center mb-6 sm:mb-10",
                    children: a.jsxs("div", {
                        className: "inline-flex border-2 border-black rounded-full overflow-hidden",
                        children: [a.jsx("button", {
                            className: `px-10 py-2 sm:px-20 sm:py-3 font-bold focus:outline-none ${e === "monthly" ? "bg-purple-800 text-white" : "bg-white text-black"}`,
                            onClick: () => t("monthly"),
                            children: "Starter"
                        }), a.jsx("button", {
                            className: `px-10 py-2 sm:px-24 sm:py-3 font-bold focus:outline-none ${e === "yearly" ? "bg-purple-800 text-white" : "bg-white text-black"}`,
                            onClick: () => t("yearly"),
                            children: "Business"
                        })]
                    })
                }), a.jsxs("div", {
                    className: "flex flex-col sm:flex-row justify-center sm:items-center space-y-6 sm:space-y-0 sm:space-x-8",
                    children: [a.jsxs("div", {
                        className: "pricing-card border-2 border-purple-800 rounded-xl shadow-lg p-6 bg-white w-full sm:w-96 text-left transform transition-transform duration-300 ease-in-out hover:scale-105",
                        children: [a.jsx("div", {
                            className: "bg-purple-800 text-white font-bold rounded-full px-4 py-1 inline-block mb-4",
                            children: e === "monthly" ? "Starter" : "Business"
                        }), a.jsx("p", {
                            className: "text-lg mb-4",
                            children: "Suitable for small businesses, That has low hiring frequency."
                        }), a.jsxs("h2", {
                            className: "text-4xl font-bold",
                            children: ["₹", e === "monthly" ? n.starter.monthly : n.business.yearly]
                        }), a.jsx("p", {
                            className: "text-gray-600 mb-4",
                            children: "Per user"
                        }), a.jsxs("ul", {
                            className: "mb-4 space-y-2",
                            children: [a.jsxs("li", {
                                className: "flex items-center transition-transform duration-300 ease-in-out transform hover:scale-105",
                                children: [a.jsx("span", {
                                    className: "text-purple-800 mr-2",
                                    children: "✔"
                                }), e === "monthly" ? "100 credits" : "1200 credits"]
                            }), a.jsxs("li", {
                                className: "flex items-center transition-transform duration-300 ease-in-out transform hover:scale-105",
                                children: [a.jsx("span", {
                                    className: "text-purple-800 mr-2",
                                    children: "✔"
                                }), "Custom integrations"]
                            }), a.jsxs("li", {
                                className: "flex items-center mb-6 pb-10 transition-transform duration-300 ease-in-out transform hover:scale-105",
                                children: [a.jsx("span", {
                                    className: "text-purple-800 mr-2",
                                    children: "✔"
                                }), "Priority support"]
                            })]
                        }), a.jsx("a", {
                            href: " https://cts.talentid.app/profile ",
                            children: a.jsx("button", {
                                className: "bg-purple-800 text-white font-bold px-6 py-2 rounded-full w-full",
                                children: "Start a free trial"
                            })
                        }), a.jsx(ae, {
                            to: "/terms-and-conditions",
                            className: "text-gray-500 mt-1 text-xs cursor-pointer",
                            children: "Terms & Conditions"
                        })]
                    }), a.jsxs("div", {
                        className: "pricing-card border-2 border-purple-800 rounded-xl shadow-md p-6 bg-white w-full sm:w-80 text-left transform transition-transform duration-300 ease-in-out hover:scale-105",
                        children: [a.jsx("div", {
                            className: "bg-purple-800 text-white font-bold rounded-full px-4 py-1 inline-block mb-2",
                            children: "Custom"
                        }), a.jsx("p", {
                            className: "text-sm mb-4",
                            children: "For teams that require collaborative recruitment solutions."
                        }), a.jsx("h2", {
                            className: "text-2xl font-bold",
                            children: n.custom[e]
                        }), a.jsx("p", {
                            className: "text-gray-600 text-xs mb-4",
                            children: "Per user"
                        }), a.jsx("ul", {
                            className: "mb-4 space-y-2 text-xs",
                            children: r.map(i => a.jsxs("li", {
                                className: "flex items-center transition-transform duration-300 ease-in-out transform hover:scale-105",
                                children: [a.jsx("span", {
                                    className: "text-purple-800 mr-2",
                                    children: "✔"
                                }), i]
                            }))
                        }), a.jsx("a", {
                            href: "https://tally.so/r/3EBzql",
                            children: a.jsx("button", {
                                className: "bg-gray-400 text-white font-bold px-6 py-2 rounded-full w-full",
                                children: "Talk to sales"
                            })
                        }), a.jsx(ae, {
                            to: "/terms-and-conditions",
                            className: "text-gray-500 mt-1 text-xs cursor-pointer",
                            children: "Terms & Conditions"
                        })]
                    })]
                })]
            })
        })]
    })
}
;
function Nb() {
    return a.jsxs("div", {
        className: "",
        children: [a.jsx(kb, {}), a.jsx(yb, {}), a.jsx(xb, {}), a.jsx(jb, {}), a.jsx(Sb, {}), a.jsx(lr, {})]
    })
}
const Eb = () => {
    const [e,t] = N.useState(null)
      , n = ot()
      , r = o => {
        t(e === o ? null : o)
    }
      , i = [{
        question: "What is Talentid.app?",
        answer: "Talentid.app is a SaaS product offering a Candidate Tracking System (CTS) tailored for startups and enterprises."
    }, {
        question: "How can Talentid.app help my business?",
        answer: "With advanced features like candidate engagement tools, data-driven analytics, and competitive intelligence insights, you'll gain a competitive edge in attracting and securing top talent."
    }, {
        question: "What are the key features of Talentid.app?",
        answer: "Key features include candidate engagement tools, data-driven analytics for assessing joining probability, competitive intelligence insights, and streamlined recruitment workflows."
    }, {
        question: "Is Talentid.app suitable for startups?",
        answer: "Yes, Talentid.app is designed to cater to both rapidly growing startups and established enterprises."
    }, {
        question: "Does Talentid.app offer customer support?",
        answer: "Yes, Talentid.app provides 24/7 customer support to assist you with any queries or issues."
    }, {
        question: "What is the pricing model of Talentid.app?",
        answer: "Talentid.app offers flexible pricing plans to cater to the needs of both startups and enterprises. Please contact our sales team for more information."
    }];
    return a.jsxs(a.Fragment, {
        children: [a.jsx("div", {
            children: a.jsxs("div", {
                className: "bg-[#e6daf8] flex flex-col text-center items-center py-12 px-6",
                children: [a.jsx("h4", {
                    className: "text-3xl text-black font-extrabold",
                    children: "Grow with us as a partner🚀"
                }), a.jsx("p", {
                    className: "text-gray-700 text-lg font-light mt-2",
                    children: "We reached here with our hard work and dedication"
                }), a.jsx("button", {
                    onClick: () => n("/partnership"),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-block",
                    children: a.jsx("button", {
                        className: "mt-4 bg-black text-white py-2 px-8 rounded-full text-xl",
                        children: "Get Started"
                    })
                })]
            })
        }), a.jsxs("div", {
            className: "flex flex-wrap max-w-6xl mx-auto p-4 mt-16",
            children: [a.jsxs("div", {
                className: "w-full md:w-1/2 flex flex-col justify-center items-center p-4",
                children: [a.jsxs("h1", {
                    className: "text-4xl font-bold text-center",
                    children: ["Your questions? ", a.jsx("br", {}), a.jsx("span", {
                        className: "text-purple-600",
                        children: "our solutions!"
                    })]
                }), a.jsx("div", {
                    className: "mt-6 w-full border border-gray-300 rounded-lg p-4",
                    children: i.map( (o, s) => a.jsxs("div", {
                        className: "my-2",
                        children: [a.jsxs("button", {
                            onClick: () => r(s),
                            className: "w-full bg-white border border-gray-300 rounded-lg py-3 px-5 text-left flex justify-between items-center hover:bg-gray-50",
                            children: [a.jsx("span", {
                                children: o.question
                            }), a.jsx("span", {
                                children: e === s ? "v" : ">"
                            })]
                        }), e === s && a.jsx("div", {
                            className: "bg-gray-100 border border-gray-300 rounded-lg py-3 px-5 mt-2",
                            children: o.answer
                        })]
                    }, s))
                }), a.jsxs("p", {
                    className: "mt-4 text-gray-500",
                    children: ["Haven't seen yours?", " ", a.jsx("a", {
                        href: "mailto:support@talentid.app",
                        className: "text-blue-500 underline",
                        children: "ask one"
                    })]
                })]
            }), a.jsx("div", {
                className: "w-full md:w-1/2 flex justify-center items-center",
                children: a.jsx("img", {
                    src: "https://res.cloudinary.com/dfz0wkqij/image/upload/v1719035921/dfiybwgkbxqmenormx8b.png",
                    alt: "Questions and Solutions Graphic",
                    className: "w-full h-100"
                })
            })]
        })]
    })
}
  , _b = "/assets/Rectangle-Cayopw4W.png"
  , xd = "/assets/Rectangle45-BD4sDoe7.png"
  , Ob = "/assets/Rectangle81-BkCGXEv5.png"
  , Tb = () => {
    const e = [{
        id: 1,
        name: "Better Hiring",
        para: a.jsx("div", {
            children: a.jsxs("ul", {
                children: [a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Candidate Screening:"
                    }), " By accessing candidate interview data from multiple companies, recruiters can gain insights into a candidate's skills, experience, and performance during different interview processes. This can help them make more informed hiring decisions."]
                }), a.jsx("br", {}), a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Talent Acquisition:"
                    }), " Recruiters can identify and reach out to candidates who have successfully navigated interview processes at other companies, potentially securing top talent for their own organizations."]
                })]
            })
        }),
        avatar: xd
    }, {
        id: 2,
        name: "Loyalty Check",
        para: a.jsx("div", {
            children: a.jsxs("ul", {
                children: [a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Employee Monitoring:"
                    }), " Recruiters can use Talentid.app to monitor their current employees' interview activities at other companies. This information can serve as an indicator of potential disloyalty or flight risk, allowing employers to proactively address retention concerns."]
                }), a.jsx("br", {}), a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Counter-offers:"
                    }), " If an employee is actively interviewing elsewhere, employers can use the insights from Talentid.app to make informed counter-offers or implement retention strategies to keep valuable talent within the organization."]
                })]
            })
        }),
        avatar: Ob
    }, {
        id: 3,
        name: "Retention",
        para: a.jsx("div", {
            children: a.jsxs("ul", {
                children: [a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Competitive Intelligence:"
                    }), " By analyzing the interview pipelines and hiring practices of competitors, employers can gather insights into compensation, benefits, and work culture trends. This intelligence can help them refine their own retention strategies and remain competitive in the job market."]
                }), a.jsx("br", {}), a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Employee Engagement:"
                    }), " Employers can leverage the candidate data from Talentid.app to identify areas of improvement within their own interview processes, onboarding practices, and employee experience initiatives, ultimately enhancing employee satisfaction and retention."]
                })]
            })
        }),
        avatar: _b
    }, {
        id: 4,
        name: "Background Verification",
        para: a.jsx("div", {
            children: a.jsxs("ul", {
                children: [a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Employment History Validation:"
                    }), " Recruiters can use Talentid.app to verify a candidate's employment history and interview records with previous companies. This can help validate the accuracy of information provided by the candidate and identify any discrepancies or gaps in their professional background."]
                }), a.jsx("br", {}), a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Performance Evaluation:"
                    }), " By accessing a candidate's interview data from multiple companies, recruiters may gain insights into the candidate's performance during different stages of the interview process, such as technical assessments, case studies, or presentation rounds. This information can supplement traditional background checks and provide a more comprehensive evaluation of the candidate's abilities."]
                })]
            })
        }),
        avatar: xd
    }]
      , [t,n] = N.useState({
        id: 1,
        paragraph: e[0].para,
        image: e[0].avatar
    });
    return a.jsxs("div", {
        children: [a.jsx("div", {
            className: "bg-[#603998] flex justify-center mt-9",
            children: a.jsxs("div", {
                className: "bg-white shadow-[0px_5px_300px_10px_#7855A7] w-[1200px] -my-16 px-10 py-16 rounded-2xl grid grid-rows-1 md:grid-cols-5",
                children: [a.jsxs("div", {
                    className: "flex flex-col justify-center",
                    children: [a.jsxs("h3", {
                        className: "text-3xl font-bold text-left row-span-1 md:col-span-1",
                        children: ["By ", a.jsx("span", {
                            children: "UseCase"
                        })]
                    }), a.jsx("div", {
                        className: "text-lg flex flex-wrap justify-center md:flex-col text-gray-700 gap-3 mt-2",
                        children: e.map(r => a.jsx("div", {
                            onClick: () => n({
                                id: r.id,
                                image: r.avatar,
                                paragraph: r.para
                            }),
                            className: `font-semibold cursor-pointer ${r.id === t.id ? "underline" : ""}`,
                            children: r.name
                        }, r.id))
                    })]
                }), a.jsxs("div", {
                    className: "bg-[#7250a1] rounded-3xl flex flex-col items-center md:flex-row gap-2 py-10 px-10 row-span-5 md:col-span-4 mt-2",
                    children: [a.jsx("p", {
                        className: "text-white font-semibold flex-1",
                        children: t.paragraph
                    }), a.jsx("img", {
                        src: t.image,
                        alt: "",
                        className: "w-60 h-60 mx-auto mt-4"
                    })]
                })]
            })
        }), a.jsxs("div", {
            className: "flex flex-wrap items-center max-w-6xl mx-auto md:p-16 mt-10",
            children: [a.jsx("div", {
                className: "w-full md:w-1/2 flex justify-center items-center p-8",
                children: a.jsx("img", {
                    src: "https://res.cloudinary.com/dfz0wkqij/image/upload/v1719035920/gxluwxco94eftilboqqo.png",
                    alt: "Graphic",
                    className: "w-full h-auto"
                })
            }), a.jsxs("div", {
                className: "w-full md:w-1/2 p-8",
                children: [a.jsx("h4", {
                    className: "text-3xl font-bold",
                    children: "Make better hiring decisions"
                }), a.jsx("p", {
                    className: "text-justify mt-10",
                    children: "Talentid.app is a SaaS product offering a Candidate Tracking System (CTS) tailored for startups and enterprises. Our innovative CTS tackles the common challenge of candidate competition head-on, going beyond basic applicant tracking. With advanced features like candidate engagement tools, data-driven analytics for assessing joining probability, competitive intelligence insights, and streamlined recruitment workflows, you'll gain a competitive edge in attracting and securing top talent. Whether a rapidly growing startup or an established enterprise, our solution empowers you to effectively evaluate candidates while maintaining their interest throughout the process."
                })]
            })]
        }), a.jsx("div", {
            className: "bg-[#603998] p-3",
            children: a.jsxs("div", {
                className: "flex flex-col text-white justify-center items-center mt-2 py-8 gap-2",
                children: [a.jsx("h4", {
                    className: "text-3xl font-extrabold",
                    children: "Ready to dive in?"
                }), a.jsx("a", {
                    href: "/pricing",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-block",
                    children: a.jsx("button", {
                        className: "bg-[#baaad3] mt-4 py-3 px-7 text-black rounded-full font-bold text-lg md:text-xl hover:bg-[#2b1b44] hover:text-white",
                        children: "Get Started"
                    })
                }), a.jsx("p", {
                    className: "mt-3",
                    children: "No credit card required✌"
                })]
            })
        })]
    })
}
  , Cb = () => (ot(),
a.jsxs("footer", {
    className: "bg-black text-white py-10",
    children: [a.jsx("div", {
        className: "container mx-auto px-4",
        children: a.jsxs("div", {
            className: "flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-8",
            children: [a.jsxs("div", {
                className: "flex flex-col",
                children: [a.jsx("h4", {
                    className: "font-extrabold mb-2",
                    children: "Product"
                }), a.jsxs("ul", {
                    className: "list-none",
                    children: [a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white",
                            children: "Features"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx("a", {
                            href: "/partnership",
                            className: "text-gray-400 hover:text-white",
                            children: "Integration"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/pricing",
                            className: "text-gray-400 hover:text-white",
                            children: "Pricing"
                        })
                    })]
                })]
            }), a.jsxs("div", {
                className: "flex flex-col",
                children: [a.jsx("h4", {
                    className: "font-extrabold mb-2",
                    children: "Resources"
                }), a.jsxs("ul", {
                    className: "list-none",
                    children: [a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx("a", {
                            href: "https://blog.talentid.app/",
                            className: "text-gray-400 hover:text-white",
                            children: "Blogs"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx("a", {
                            href: "#",
                            className: "text-gray-400 hover:text-white",
                            children: "API documentation"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx("a", {
                            href: "https://talentid.tawk.help/",
                            className: "text-gray-400 hover:text-white",
                            children: "Knowledge base"
                        })
                    })]
                })]
            }), a.jsxs("div", {
                className: "flex flex-col",
                children: [a.jsx("h4", {
                    className: "font-extrabold mb-2",
                    children: "Company"
                }), a.jsxs("ul", {
                    className: "list-none",
                    children: [a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/aboutus",
                            className: "text-gray-400 hover:text-white",
                            children: "About us"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/contactus",
                            className: "text-gray-400 hover:text-white",
                            children: "Contact us"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/partnership",
                            className: "text-gray-400 hover:text-white",
                            children: "Partnerships"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/events",
                            className: "text-gray-400 hover:text-white",
                            children: "Events"
                        })
                    })]
                })]
            }), a.jsxs("div", {
                className: "flex flex-col",
                children: [a.jsx("h4", {
                    className: "font-extrabold mb-2",
                    children: "Legal"
                }), a.jsxs("ul", {
                    className: "list-none",
                    children: [a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/terms-and-conditions",
                            className: "text-gray-400 hover:text-white",
                            children: "Terms & Conditions"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/privacy-policy",
                            className: "text-gray-400 hover:text-white",
                            children: "Privacy Policy"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/refund",
                            className: "text-gray-400 hover:text-white",
                            children: "Refund Policy"
                        })
                    }), a.jsx("li", {
                        className: "mb-1",
                        children: a.jsx(ae, {
                            to: "/optform",
                            className: "text-gray-400 hover:text-white",
                            children: "Don't sell my info"
                        })
                    })]
                })]
            })]
        })
    }), a.jsxs("div", {
        className: "border-t border-gray-800 mt-8 pt-6",
        children: [a.jsx("div", {
            className: "flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0",
            children: a.jsxs("p", {
                className: "text-center mb-2 text-lg",
                children: ["Made with ", a.jsx("span", {
                    className: "text-red-600",
                    children: "❤️"
                }), " from India for the World"]
            })
        }), a.jsx("p", {
            className: "text-center text-sm",
            children: "© 2024 Talent ID (Brand of Hirexzo Solutions LLP) All Rights Reserved."
        })]
    })]
}))
  , Pb = () => (ot(),
a.jsx("div", {
    className: "bg-[#603998] flex flex-col items-center",
    children: a.jsxs("div", {
        className: "w-full px-4 md:px-0 md:w-[800px]",
        children: [a.jsxs("div", {
            className: "bg-[#baaad3] relative mx-auto flex justify-between items-center rounded-full p-2 md:p-4 mt-10",
            children: [a.jsx("img", {
                src: "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/logo3-CD2fE1xE_lqu78k",
                alt: "Talent ID logo",
                className: "h-6 md:h-10 mx-3"
            }), a.jsxs("div", {
                className: "flex items-center gap-4 md:gap-8",
                children: [a.jsxs("div", {
                    className: "relative group",
                    children: [a.jsxs("div", {
                        className: "items-center cursor-pointer hidden sm:flex",
                        children: [a.jsx("p", {
                            className: "text-black text-lg font-semibold hover:text-[#603998]",
                            children: "Products"
                        }), a.jsx(Ch, {
                            className: "mt-1"
                        })]
                    }), a.jsxs("div", {
                        className: "absolute w-full md:w-[300px] hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg mt-2 p-3 z-10",
                        children: [a.jsx("a", {
                            href: "https://cts.talentid.app/",
                            className: "py-2 px-4 hover:bg-gray-100 rounded-md text-sm font-medium text-black",
                            children: "Candidate Tracking System"
                        }), a.jsxs("div", {
                            className: "flex justify-between",
                            children: [a.jsx("a", {
                                href: "#bgc",
                                className: "py-2 px-4 hover:bg-gray-100 rounded-md text-sm font-medium text-black",
                                children: "Background checks"
                            }), a.jsx("p", {
                                className: "text-red-500 text-sm mt-2",
                                children: "Coming soon!"
                            })]
                        }), a.jsxs("div", {
                            className: "flex justify-between",
                            children: [a.jsx("a", {
                                href: "#offer-lens",
                                className: "py-2 px-4 hover:bg-gray-100 rounded-md text-sm font-medium text-black",
                                children: "Offer Lens"
                            }), a.jsx("p", {
                                className: "text-red-500 text-sm mt-2",
                                children: "Coming soon!"
                            })]
                        })]
                    })]
                }), a.jsx("a", {
                    href: "/pricing",
                    className: "text-black hidden sm:block text-lg  font-semibold hover:text-[#603998]",
                    children: "Pricing"
                }), a.jsx("a", {
                    href: "/aboutus",
                    className: "text-black hidden sm:block text-lg font-semibold hover:text-[#603998]",
                    children: "About"
                })]
            }), a.jsx("div", {
                className: "flex flex-col sm:flex-row items-center gap-4",
                children: a.jsx("a", {
                    href: "https://cts.talentid.app/",
                    children: a.jsx("button", {
                        className: "bg-[#603998] rounded-full text-xs md:text-md text-white font-semibold px-6 py-3 hover:bg-white hover:text-black",
                        children: "Login"
                    })
                })
            })]
        }), a.jsxs("div", {
            className: "flex flex-col gap-4 justify-center items-center mt-10 mb-12 md:mt-20",
            children: [a.jsx("h2", {
                className: "text-3xl md:text-5xl lg:text-6xl text-white text-center font-extrabold leading-tight",
                children: "World's First Candidate Tracking System"
            }), a.jsx("p", {
                className: "text-base md:text-xl text-white mt-4 text-center",
                children: "Check with our CTS whether you should HIRE or NOT!"
            })]
        }), a.jsx("div", {
            className: "bg-white w-fit mx-auto text-black cursor-pointer text-xs md:text-base mt-8 mb-8 px-5 py-3 rounded-full font-bold hover:bg-[#2b1b44] hover:text-white shadow-lg transition-all duration-300",
            onClick: () => window.open("https://calendly.com/jai-talentid/demo-talent-id?month=2024-11", "_blank"),
            children: "Book a Demo"
        }), a.jsx("div", {
            className: "mt-10 md:mt-20 mb-10 flex justify-center",
            children: a.jsx("img", {
                src: "https://res.cloudinary.com/dfz0wkqij/image/upload/v1732554141/knevj5dfaxsbpbqu4a5w.png",
                alt: "Questions and Solutions Graphic",
                className: "max-w-full"
            })
        })]
    })
}))
  , Rb = () => a.jsxs("div", {
    children: [a.jsx(Pb, {}), a.jsx(Tb, {}), a.jsx(Eb, {}), a.jsx(Cb, {})]
});
function Lb() {
    const e = ["https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/fl3lbfozfs1ohyk3s83n", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/otli89glo2omabdiwxvs", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/rjaufpkjvzdaovry1umw", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/yzw4a5vbcyfh9nvs7mgq", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/i0urexhy1vy17jkcgavf", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/rvltavfvlttyqyinhmws", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/zdcoth6t0mps0ciy2rco", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/yfsjcf9fw7udglpepmg0", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/sjbmp9ucx7ts0cy4opzz", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/cj9gxk9xkemajmfaq8lp", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/hskc739vv4f7nbrrfsak", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/xwpydxkunqfvhhf45f4e", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/hwzh3ou643tojj8k71zy", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/z7ixqemhmrwz3ugayq5n", "https://res.cloudinary.com/dfz0wkqij/image/upload/f_auto,q_auto/v1/events/x7x3ppzjsif7y2qxwqvj"]
      , [t,n] = N.useState(!1)
      , [r,i] = N.useState(null)
      , o = l => {
        i(l),
        n(!0)
    }
      , s = () => {
        n(!1),
        i(null)
    }
    ;
    return a.jsxs(a.Fragment, {
        children: [a.jsx(ar, {}), a.jsxs("div", {
            className: "max-w-screen-lg mx-auto px-0 py-8",
            children: [a.jsx("h1", {
                className: "text-4xl font-bold text-center mb-8 mt-0",
                children: "Photos/Videos"
            }), a.jsxs("div", {
                children: [a.jsx("h2", {
                    className: "text-2xl font-semibold mb-4",
                    children: "Photos"
                }), a.jsx("hr", {
                    className: "border-t-2 border-gray-300 mb-8"
                }), a.jsx("div", {
                    className: "grid grid-cols-3 gap-4 mb-16",
                    children: e.map( (l, u) => a.jsx("div", {
                        className: "h-48",
                        children: a.jsx("img", {
                            src: l,
                            alt: `Event ${u + 1}`,
                            className: "w-full h-full object-cover cursor-pointer",
                            onClick: () => o(l)
                        })
                    }, u))
                })]
            }), a.jsxs("div", {
                children: [a.jsx("h2", {
                    className: "text-2xl font-semibold mb-4",
                    children: "Videos"
                }), a.jsx("hr", {
                    className: "border-t-2 border-gray-300 mb-8"
                }), a.jsx("div", {
                    className: "my-20 flex justify-center items-center",
                    children: a.jsx("div", {
                        className: "w-full md:w-[90%] lg:w-[60%] aspect-video rounded-3xl overflow-hidden shadow-lg",
                        children: a.jsx("iframe", {
                            className: "w-full h-full",
                            src: "https://www.youtube.com/embed/eyvR7hCaB1Q",
                            title: "YouTube video player",
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0
                        })
                    })
                })]
            }), t && a.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50",
                children: a.jsxs("div", {
                    className: "relative",
                    children: [a.jsx("img", {
                        src: r,
                        alt: "Enlarged event",
                        className: "max-w-screen-lg max-h-screen"
                    }), a.jsx("button", {
                        className: "absolute top-5 right-5 bg-black text-white p-2",
                        onClick: s,
                        children: "X"
                    })]
                })
            })]
        }), a.jsx(lr, {})]
    })
}
function zb() {
    return a.jsxs(a.Fragment, {
        children: [a.jsx(ar, {}), a.jsxs("div", {
            className: "max-w-screen-lg mx-auto px-8 py-12",
            children: [a.jsx("h1", {
                className: "text-5xl font-bold text-center mb-12",
                children: "Privacy Policy"
            }), a.jsx("section", {
                className: "mb-8",
                children: a.jsxs("p", {
                    className: "text-sm md:text-base lg:text-lg",
                    children: ["Talent ID (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected and used by Talent ID. ", a.jsx("br", {}), " This Privacy Policy applies to our website, and its associated subdomains (collectively, our “Service”) alongside our application, Talent ID. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service. Please read the following carefully to understand our views and practices regarding your personal data.", " "]
                })
            }), a.jsxs("section", {
                className: "mb-8",
                children: [a.jsx("h2", {
                    className: "text-2xl font-semibold mb-4",
                    children: "Definitions and key terms"
                }), a.jsxs("p", {
                    className: "text-sm md:text-base lg:text-lg",
                    children: [a.jsxs("p", {
                        className: "mb-2",
                        children: [a.jsx("span", {
                            className: "text-l font-semibold",
                            children: "Company: "
                        }), "when this policy mentions “Company,” “we,” “us,” or “our,” it refers to Hirexzo Solutions LLP, House No. 8-57, C-70 plot number, Balaji Nagar, Mallapur, Balapur, Ranga Reddy district, Hyderabad, Telangana India - 500005 ", a.jsx("br", {})]
                    }), a.jsxs("p", {
                        className: "mb-2",
                        children: [a.jsx("span", {
                            className: "text-l font-semibold",
                            children: "Country: "
                        }), "Telangana, India.", a.jsx("br", {})]
                    }), a.jsxs("p", {
                        className: "mb-2",
                        children: [a.jsx("span", {
                            className: "text-l font-semibold",
                            children: "Customer: "
                        }), "refers to the company, organization or person that signs up to use the Talent ID Service to manage the relationships with your consumers or service users.", a.jsx("br", {})]
                    }), a.jsxs("p", {
                        className: "mb-2",
                        children: [a.jsx("span", {
                            className: "text-l font-semibold",
                            children: "Device: "
                        }), "any internet connected device such as a phone, tablet, computer or any other device that can be used to visit Talent ID and use the services.", a.jsx("br", {})]
                    }), a.jsxs("p", {
                        className: "mb-2",
                        children: [a.jsx("span", {
                            className: "text-l font-semibold",
                            children: "IP address: "
                        }), "Every device connected to the Internet is assigned a number known as an Internet protocol (IP) address. These numbers are usually assigned in geographic blocks. An IP address can often be used to identify the location from which a device is connecting to the Internet.", a.jsx("br", {})]
                    }), a.jsxs("p", {
                        className: "mb-2",
                        children: [a.jsx("span", {
                            className: "text-l font-semibold",
                            children: "Personnel: "
                        }), "refers to those individuals who are employed by Talent ID or are under contract to perform a service on behalf of one of the parties.", a.jsx("br", {})]
                    }), a.jsxs("p", {
                        className: "mb-2",
                        children: [a.jsx("span", {
                            className: "text-l font-semibold",
                            children: "Personal Data: "
                        }), "any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.", a.jsx("br", {})]
                    }), a.jsxs("p", {
                        className: "mb-2",
                        children: [a.jsx("span", {
                            className: "text-l font-semibold",
                            children: "Service: "
                        }), "refers to the service provided by Talent ID as described in the relative terms (if available) and on this platform.", a.jsx("br", {})]
                    }), a.jsxs("p", {
                        className: "mb-2",
                        children: [a.jsxs("span", {
                            className: "text-l font-semibold",
                            children: ["Third-party service:", " "]
                        }), "refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.", a.jsx("br", {})]
                    }), a.jsxs("p", {
                        className: "mb-2",
                        children: [a.jsx("span", {
                            className: "text-l font-semibold",
                            children: "Website: "
                        }), 'Talent ID."’s" site, which can be accessed via this URL: ', a.jsx("br", {}), a.jsx("a", {
                            href: "https://talentid.app/",
                            className: "text-blue-500 underline",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "https://talentid.app/"
                        }), a.jsx("br", {})]
                    }), a.jsxs("p", {
                        className: "mb-2",
                        children: [a.jsx("span", {
                            className: "text-l font-semibold",
                            children: "You: "
                        }), "a person or entity that is registered with Talent ID to use the Services.", a.jsx("br", {})]
                    })]
                })]
            }), a.jsxs("section", {
                className: "mb-8",
                children: [a.jsx("h2", {
                    className: "text-2xl font-semibold mb-4",
                    children: "Information We Collect:"
                }), a.jsxs("ul", {
                    className: "list-disc ml-8 mt-2 text-sm md:text-base lg:text-lg",
                    children: [a.jsx("li", {
                        children: "Personal information: Name, email address, contact details, etc."
                    }), a.jsx("li", {
                        children: "Professional information: Work experience, skills, education, etc."
                    }), a.jsx("li", {
                        children: "Usage data: IP address, device information, browser type, etc."
                    }), a.jsx("li", {
                        children: "Cookies and similar technologies: Usage analytics, preferences, etc."
                    })]
                })]
            }), a.jsxs("section", {
                className: "mb-8",
                children: [a.jsx("h2", {
                    className: "text-2xl font-semibold mb-4",
                    children: "How We Use Your Information:"
                }), a.jsxs("ul", {
                    className: "list-disc ml-8 mt-2 text-sm md:text-base lg:text-lg",
                    children: [a.jsx("li", {
                        children: "To provide and improve our services."
                    }), a.jsx("li", {
                        children: "To personalize your experience on our platform."
                    }), a.jsx("li", {
                        children: "To communicate with you regarding updates, features, and offers."
                    }), a.jsx("li", {
                        children: "To analyze and enhance the performance of our platform."
                    }), a.jsx("li", {
                        children: "To process payments."
                    })]
                })]
            }), a.jsxs("section", {
                className: "mb-8",
                children: [a.jsx("h2", {
                    className: "text-3xl font-semibold mb-4",
                    children: "Sharing of your Information"
                }), a.jsx("h3", {
                    className: "text-2xl font-semibold mb-4",
                    children: "Third Party Services"
                }), a.jsx("p", {
                    className: "text-sm md:text-base lg:text-lg",
                    children: "At times, you may be able to access other Third-Party Services/websites through the Site, for example by clicking on links to those Third-Party Services from within the Site. We are not responsible for the privacy policies and/or practices of these Third-Party Services, and you are responsible for reading and understanding those Third-Party Services’ privacy policies."
                })]
            }), a.jsxs("section", {
                className: "mb-8",
                children: [a.jsx("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: "When does Talent ID use end user information from third parties?"
                }), a.jsxs("p", {
                    className: "text-sm md:text-base lg:text-lg",
                    children: ["Talent ID will collect End User Data necessary to provide the Talent ID services to our customers. ", a.jsx("br", {}), "End users may voluntarily provide us with information they have made available on websites. If you provide us with any such information, we may collect publicly available information from the social media websites you have indicated. You can control how much of your information social media websites make public by visiting these websites and changing your privacy settings."]
                })]
            }), a.jsxs("section", {
                className: "mb-8",
                children: [a.jsx("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: "When does Talent ID use customer information from third parties?"
                }), a.jsx("p", {
                    className: "text-sm md:text-base lg:text-lg",
                    children: "We receive some information from the third parties when you search candidate from us. For example, when you submit your email address to us to use the services of Talent ID, we receive information from a third parties that provides data services to Talent ID. We also occasionally collect information that is made publicly available on social media websites. You can control how much of your information social media websites make public by visiting these websites and changing your privacy settings."
                })]
            }), a.jsxs("section", {
                className: "mb-8",
                children: [a.jsx("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: "Do we share the information we collect with third parties?"
                }), a.jsx("p", {
                    className: "text-sm md:text-base lg:text-lg mb-5",
                    children: "We may share the information that we collect, both personal and non-personal, with third parties such as advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you. We may also share it with our current and future affiliated companies and business partners, and if we are involved in a merger, asset sale or other business reorganization, we may also share or transfer your personal and non-personal information to our successors-in-interest."
                }), a.jsx("p", {
                    className: "text-sm md:text-base lg:text-lg mb-5",
                    children: "We may engage trusted third party service providers to perform functions and provide services to us, such as hosting and maintaining our servers and the website, database storage and management, e-mail management, storage marketing, credit card processing, Payment gateway, customer service and fulfilling orders for products and services you may purchase through the website. We will likely share your personal information, and possibly some non-personal information, with these third parties to enable them to perform these services for us and for you."
                }), a.jsx("p", {
                    className: "text-sm md:text-base lg:text-lg mb-5",
                    children: "We may share portions of our log file data, including IP addresses, for analytics purposes with third parties such as web analytics partners, application developers, and ad networks. If your IP address is shared, it may be used to estimate general location and other technographics such as connection speed, whether you have visited the website in a shared location, and type of the device used to visit the website. They may aggregate information about our advertising and what you see on the website and then provide auditing, research and reporting for us and our advertisers."
                }), a.jsx("p", {
                    className: "text-sm md:text-base lg:text-lg mb-5",
                    children: "We may also disclose personal and non-personal information about you to government or law enforcement officials or private parties as we, in our sole discretion, believe necessary or appropriate in order to respond to claims, legal process (including subpoenas), to protect our rights and interests or those of a third party, the safety of the public or any person, to prevent or stop any illegal, unethical, or legally actionable activity, or to otherwise comply with applicable court orders, laws, rules and regulations."
                })]
            }), a.jsxs("section", {
                className: "mb-8",
                children: [a.jsx("h2", {
                    className: "text-2xl font-semibold mb-4",
                    children: "Data Protection and Security:"
                }), a.jsx("p", {
                    className: "text-sm md:text-base lg:text-lg",
                    children: a.jsxs("ul", {
                        className: "list-disc ml-8 mt-2 mb-5",
                        children: [a.jsx("li", {
                            children: "We implement industry-standard security measures to protect your data."
                        }), a.jsx("li", {
                            children: "Your information is stored in secure servers and accessed only by authorized personnel."
                        })]
                    })
                }), a.jsx("h3", {
                    className: "text-xl font-semibold mb-2",
                    children: "Protecting Your Information"
                }), a.jsx("p", {
                    className: "text-sm md:text-base lg:text-lg",
                    children: "We prioritize data security and use robust measures to safeguard your personal details. Your information is encrypted and stored in secure databases. We cannot, however, ensure or warrant the absolute security of any information you transmit to Talent ID or guarantee that your information on the Service may not be accessed, disclosed, altered, or destroyed by a breach of any of our physical, technical, or managerial safeguards."
                })]
            }), a.jsxs("section", {
                className: "mb-8",
                children: [a.jsx("h2", {
                    className: "text-2xl font-bold mb-4",
                    children: "Kids' Privacy"
                }), a.jsx("p", {
                    className: "text-sm md:text-base lg:text-lg mb-4",
                    children: "We do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers."
                }), a.jsx("h3", {
                    className: "text-xl font-semibold mb-2",
                    children: "Changes to the privacy policy"
                }), a.jsx("p", {
                    className: "text-sm md:text-base lg:text-lg mb-10",
                    children: 'We may change this policy from time to time. If we make any changes to this policy, we will change the "Last Updated" date above. You agree that your continued use of our services after such changes have been published to our services will constitute your acceptance of such revised policy.'
                })]
            }), a.jsx("section", {
                className: "mb-8",
                children: a.jsx("p", {
                    className: "text-sm md:text-base lg:text-lg",
                    children: "If you have any questions (or comments) concerning this Privacy Policy, you are welcome to send us an email or otherwise contact us at support@talentid.app and we will make an effort to reply within a reasonable timeframe, and not over 30 business days"
                })
            }), a.jsx("button", {
                onClick: () => window.scrollTo(0, 0),
                children: "Scroll to Top"
            })]
        }), a.jsx(lr, {})]
    })
}
function Ib() {
    const e = "https://talentid-node-backend-ashen.vercel.app"
      , [t,n] = N.useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: ""
    })
      , [r,i] = N.useState("")
      , o = ot()
      , s = u => {
        const {name: c, value: d} = u.target;
        n({
            ...t,
            [c]: d
        })
    }
      , l = async u => {
        var c, d;
        if (u.preventDefault(),
        r) {
            Lr.error(r);
            return
        }
        try {
            const f = await se.post(`${e}/api/optout/createOptOutForm`, t);
            n({
                firstName: "",
                lastName: "",
                email: "",
                companyName: ""
            }),
            Lr.success("Form submitted successfully"),
            o("/")
        } catch (f) {
            Lr.error((d = (c = f == null ? void 0 : f.response) == null ? void 0 : c.data) == null ? void 0 : d.error)
        }
    }
    ;
    return a.jsx("div", {
        className: "flex justify-center items-center min-h-screen bg-[#9153e1] p-4",
        children: a.jsxs("div", {
            className: "bg-white shadow-lg rounded-lg p-8 w-full max-w-md",
            children: [a.jsx("h1", {
                className: "text-3xl font-bold text-purple-900 mb-4",
                children: "Opt Out form"
            }), a.jsxs("p", {
                className: "text-gray-600 mb-6",
                children: ["Your privacy is important to us. Fill out the form below to opt out and we will honor your request by removing your profile from our services, and we will retain the email address you enter solely for purposes of storing and respecting your opt-out preference. For further information, see", a.jsx("span", {
                    className: "text-purple-600 underline cursor-pointer ml-1",
                    onClick: () => o("/privacy-policy"),
                    children: "TalentId’s Privacy Policy"
                }), "."]
            }), a.jsxs("form", {
                onSubmit: l,
                className: "space-y-4",
                children: [a.jsxs("div", {
                    className: "flex space-x-4",
                    children: [a.jsxs("div", {
                        className: "w-1/2",
                        children: [a.jsx("label", {
                            className: "block text-gray-700",
                            children: "First Name:"
                        }), a.jsx("input", {
                            type: "text",
                            name: "firstName",
                            value: t.firstName,
                            onChange: s,
                            className: "w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500",
                            placeholder: "First Name"
                        })]
                    }), a.jsxs("div", {
                        className: "w-1/2",
                        children: [a.jsx("label", {
                            className: "block text-gray-700",
                            children: "Last Name:"
                        }), a.jsx("input", {
                            type: "text",
                            name: "lastName",
                            value: t.lastName,
                            onChange: s,
                            className: "w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500",
                            placeholder: "Last Name"
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "mb-4",
                    children: [a.jsx("label", {
                        className: "block text-gray-700",
                        children: "Email Address:"
                    }), a.jsx("input", {
                        type: "email",
                        name: "email",
                        value: t.email,
                        onChange: s,
                        className: "w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500",
                        required: !0
                    }), r && a.jsx("p", {
                        className: "text-red-500 text-sm mt-1",
                        children: r
                    })]
                }), a.jsxs("div", {
                    className: "mb-4",
                    children: [a.jsx("label", {
                        className: "block text-gray-700",
                        children: "Company Name:"
                    }), a.jsx("input", {
                        type: "text",
                        name: "companyName",
                        value: t.companyName,
                        onChange: s,
                        className: "w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500",
                        placeholder: "Company Name"
                    })]
                }), a.jsx("button", {
                    type: "submit",
                    className: "w-full py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-700 transition",
                    children: "Submit"
                })]
            })]
        })
    })
}
const Db = [{
    title: "Registration",
    content: "This End User License Agreement (the “Agreement”) is a binding agreement between you (“End User”,“you” or “your”) and Hirexzo Solutions LLP (“Company”,“we”, “us” or “our”). This Agreement governs the relationship between you and us, and your use of the Company Talent ID. Throughout this Agreement, End User and Company may each be referred to as a “Party” or collectively, the “Parties”."
}, {
    title: "No Warranties",
    content: "Although every effort has been made to provide accurate content on these pages, neither Talent ID, nor any of its employees, directors, shareholders, consultants, associates make any warranty, expressed or implied or assume any legal liability or responsibility for the accuracy or completeness of any information contained on this Website. Talent ID cannot be held responsible for the contents of any pages referenced by external sources. Reference herein to any company does not necessarily constitute or imply its endorsement or recommendation by Talent ID or any of its employees."
}, {
    title: "FREE TRIAL PERIOD",
    content: "The user's registration period begins with a free trial. This trial typically lasts up to 100 credits from the date of registration with Talent ID, unless an extension of the trial period is requested by the user and granted by the Service Provider at its sole discretion. The eligibility of the user(s) to avail the free trial is determined solely by the Service Provider to prevent abuse of the free trial offer. The Service Provider reserves the right to revoke the free trial, place the user's account on hold, or terminate the free trial if any terms outlined in the Terms of Use are violated by the user(s)."
}, {
    title: "Intellectual Property Rights",
    content: "Unless otherwise indicated or anything contained to the contrary or any proprietary material owned by a third party and so expressly mentioned, Talent ID owns all Intellectual Property Rights to and into the Talent ID, including, without limitation, any and all rights, title and interest in and to copyright, related rights, patents, utility models, trademarks, trade names, service marks, designs, know-how, trade secrets and inventions (whether patentable or not), goodwill, source code, meta tags, databases, text, content, graphics, icons, and hyperlinks. The User acknowledges and agrees that the user shall not use, reproduce or distribute any content from Talent ID belonging to Talent ID without obtaining authorization from Talent ID. Talent ID is not responsible for the content of any third party application(s)/service(s) and does not make any representations regarding the content or accuracy of material on such application(s)/service(s). If the user decide to link to any such third party websites, the user does so entirely at the user's own risk."
}, {
    title: "Modifications to Application",
    content: "Talent ID reserves the right to modify, suspend or discontinue, temporarily or permanently, the Application or any service to which it connects, with or without notice and without liability to you."
}, {
    title: "Term and Termination",
    content: "This Agreement shall remain in effect until terminated by you or Talent ID. Talent ID may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice."
}, {
    title: "Indemnification",
    content: "You agree to indemnify, defend and hold harmless Talent ID and its officers, directors, employees, agents, affiliates, successors, and assigns from and against any and all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind, including reasonable attorneys’ fees, arising from or relating to: i) your use or misuse of the Software; ii) your failure to comply with any applicable law, regulation, or government directive; iii) your breach of this Agreement; or iv) your agreement or relationship with an Organisation (if applicable) or any third party. Furthermore, you agree that Talent ID assumes no responsibility for the information or content you submit or make available through this Software or the content that is made available to you by third parties."
}, {
    title: "Limitation of Liability",
    content: "Notwithstanding any damages that you might incur, the entire liability of Talent ID and any of its suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by you for the Application. To the maximum extent permitted by applicable law, in no event shall Talent ID or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, for loss of data or other information, for business interruption, for personal injury, for loss of privacy arising out of or in any way related to the use of or inability to use the Application, third-party software and/or third-party hardware used with the Application, or otherwise in connection with any provision of this Agreement), even if Talent ID or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.  Some states/jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you."
}, {
    title: "Payment",
    content: "Talent ID has a pricing model to which users can subscibe to it and based on the package selected they will avail the functionalities of the platform. Users would be charged additionally the applicable Payment Gateway Charges / Convenience Charges / Collection Charges / Internet Handling Charges, etc by Talent ID. Any eligible re-funds will be in the form of “wallet balanceˮ which may be utilized for the permitted future services on Talent ID. Financial settlements between Talent ID and respective User (s) will be after the deduction of Talent IDʼs service charges and taxes as applicable. Talent ID reserve the right to change any policies from time to time. In particular, Talent ID may at its sole discretion introduce new services and modify some or all of the existing services offered on Talent ID. In such an event, Talent ID reserves the right to introduce fees for the new services offered or amend/introduce fees for existing services, as the case may be. Changes to the Policy shall be posted on Talent ID and such changes shall automatically become effective immediately after they are posted on the Talent ID."
}, {
    title: "Conditions of Use",
    content: "The User will not, nor allow third parties on the Userʼs behalf to (i) make and distribute copies of Talent ID (ii) attempt to copy, reproduce, alter, modify, reverse engineer, disassemble, decompile, transfer, exchange or translate the Application; or (iii) create derivative works of Talent ID of any kind whatsoever. The Service wherever made available to the User free of charge is for the user's personal, non-commercial use. We reserve the right to amend or withdraw the Service, or charge for Application or Service provided to the user in accordance with these terms, at any time and for any reason. The User acknowledges that the terms of agreement with the user's respective network provider (‘Internet Service Providerʼ) will continue to apply when using Talent ID. As a result, the user may be charged by the Internet Service Provider for access to network connection services for the duration of the connection while accessing Talent ID or availing of the Services or any such third party charges as may arise. The User accepts responsibility for any such charges that arise."
}, {
    title: "Security",
    content: "The transactions by Talent ID are secure and protected. The Userʼs credit or debit card information is not received, stored or retained by the Service Provider in any manner. This information is supplied by the User(s) directly to the relevant payment gateway which is authorized to handle the information provided and is compliant with the regulations and requirements of various banks and institutions and payment franchisees that it is associated with."
}, {
    title: "Third-Party Application listing",
    content: " Talent ID may be linked to application(s)/service(s) of third parties, affiliates and business partners. Talent ID has no control over, and is not liable or responsible for content, accuracy, validity, reliability, quality of such application(s)/service(s) made available by/through Talent ID. Inclusion of any link on Talent ID does not imply that the Talent ID endorses the linked application(s)/service(s). Users may use the links and these services at the Userʼs own risk."
}, {
    title: "Consent",
    content: " We may share the information that we collect, both personal and non-personal, with third parties such as advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you."
}, {
    title: "Communication",
    content: " The User will be required to provide a valid phone number and Email ID at the time of using the service through Talent ID. By registering the user's phone number and Email ID with us, the User gives consent to be contacted by us via phone calls and/or SMS and /or email notifications, in case of any service-related updates. We will not use the user's personal information to initiate any promotional phone calls or SMS or email."
}, {
    title: "Amendments to this Agreement",
    content: " Talent ID reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Application after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Application."
}, {
    title: "Governing Law",
    content: " The laws of India, excluding its conflicts of law rules, shall govern this Agreement and your use of the Application. Your use of the Application may also be subject to other local, state, national, or international laws."
}, {
    title: "No Employment or Agency Relationship",
    content: " No provision of this Agreement, or any part of relationship between you and Talent ID, is intended to create nor shall they be deemed or construed to create any relationship between you and Talent ID other than that of and end user of the website/app and services provided."
}, {
    title: "Geographic Restrictions",
    content: "The Company is based in India and provided for access and use primarily by persons located in India, and is maintains compliance with India laws and regulations. If you use the website/app from outside India, you are solely and exclusively responsible for compliance with local laws."
}, {
    title: "Entire Agreement",
    content: "The Agreement constitutes the entire agreement between you and Talent ID regarding your use of the Application and supersedes all prior and contemporaneous written or oral agreements between you and Talent ID."
}]
  , Mb = () => a.jsx("div", {
    className: "bg-purple-100 min-h-screen py-10 px-4 md:px-20",
    children: a.jsxs("div", {
        className: "bg-white max-w-4xl mx-auto p-8 rounded-lg shadow-lg",
        children: [a.jsx("h1", {
            className: "text-4xl font-bold text-purple-800 mb-8 text-center",
            children: "Terms and Conditions"
        }), a.jsxs("section", {
            className: "mb-6",
            children: [a.jsx("h2", {
                className: "text-2xl font-semibold text-purple-700 mb-2",
                children: "End-User License Agreement"
            }), a.jsx("p", {
                className: "text-gray-700",
                children: "Updated at 15 November 2024"
            }), a.jsxs("p", {
                className: "text-gray-700 mt-2",
                children: ["Talent ID hereby grants you access to", " ", a.jsx("a", {
                    href: "http:www.talentid.app/",
                    className: "text-purple-600 underline",
                    children: "http:www.talentid.app"
                }), " ", "(“the Website”) and invites you to purchase the services offered here."]
            })]
        }), a.jsxs("section", {
            className: "mb-6",
            children: [a.jsx("h2", {
                className: "text-2xl font-semibold text-purple-700 mb-2",
                children: "Definitions and Key Terms"
            }), a.jsxs("ul", {
                className: "list-disc list-inside text-gray-700",
                children: [a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Company:"
                    }), " when this policy mentions “Company,ˮ “we,ˮ “us,ˮ or “our,ˮ it refers to Hirexzo Solutions LLP, House No. 8-57, C-70 plot number, Balaji Nagar, Mallapur, Balapur, Ranga Reddy district, Hyderabad, Telangana India - 500005"]
                }), a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Country:"
                    }), " where Talent ID or the owners/founders of Talent ID are based, in this case is India."]
                }), a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Service:"
                    }), " refers to the service provided by Talent ID as described in the relative terms (if available) and on this platform."]
                }), a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Content:"
                    }), " shall mean the PDFʼs, images, statistical data and other documents that the Service Provider is authorized to access."]
                }), a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "SaaS:"
                    }), " shall mean “Software as a Serviceˮ which allows User(s) to connect to and use cloud-based apps over the Internet."]
                }), a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Subscription Plan:"
                    }), " shall mean a period from the date of commencement of the plan taken by the User from the Service Provider until the date of expiration, termination, or cancellation thereof."]
                }), a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "Third-party service:"
                    }), " refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you."]
                }), a.jsxs("li", {
                    children: [a.jsx("strong", {
                        children: "You:"
                    }), " a person or entity that is registered with Talent ID to use the Services."]
                })]
            })]
        }), Db.map( (e, t) => a.jsxs("section", {
            className: "mb-6",
            children: [a.jsx("h2", {
                className: "text-2xl font-semibold text-purple-700 mb-2",
                children: e.title
            }), a.jsx("p", {
                className: "text-gray-700 whitespace-pre-line",
                children: e.content
            })]
        }, t)), a.jsxs("section", {
            className: "mb-6",
            children: [a.jsx("h2", {
                className: "text-2xl font-semibold text-purple-700 mb-2",
                children: "Miscellaneous"
            }), a.jsx("p", {
                className: "text-gray-700 whitespace-pre-line",
                children: 'Any waiver of any rights available to Talent ID under these terms shall not mean that those rights are automatically waived. The User agrees, understands and confirms that his/her/it’s personal data including without limitation details relating to debit card/ credit card transmitted over the Internet may be susceptible to misuse, hacking, theft and/ or fraud and that Talent ID has no control over such matters. Although all reasonable care has been taken towards guarding against unauthorized use of any information transmitted by the User, Talent ID does not represent or guarantee that the use of Application provided by/ through it will not result in theft and/or unauthorized use of data over the Internet. Talent ID and its affiliates and associates shall not be liable, at any time, for any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communications line failure, theft or destruction or unauthorized access to, alteration of, or use of information contained on Talent ID. You may be subject to additional terms of use that apply when you use or purchase other Talent ID."’s" services, which Talent ID will provide to you at the time of such use or purchase.'
            }), a.jsxs("p", {
                children: ["Feel free to contact Us via", " ", a.jsx("a", {
                    href: "mailto:support@talentid.app",
                    className: "text-blue-900 underline",
                    children: "support@talentid.app"
                })]
            })]
        }), a.jsx("p", {
            className: "text-sm text-gray-600 text-center mt-8",
            children: "These Terms and Conditions are subject to change without notice."
        })]
    })
});
function Ab() {
    return a.jsx(a.Fragment, {
        children: a.jsxs("div", {
            className: "max-w-screen-lg mx-auto px-8 py-12",
            children: [a.jsx("h2", {
                className: "text-5xl font-bold text-center mb-12",
                children: "Refund and Cancellation Policy"
            }), a.jsxs("p", {
                className: "text-lg text-center text-gray-600 mb-8",
                children: ["100% refund provided if the service is not availed within 30 days of the payment. ", a.jsx("br", {}), "Customer to request the refund through email Talent ID. ", a.jsx("br", {}), "No refunds shall be issued for partial use of service. ", a.jsx("br", {}), "shall in no way be responsible for any contracts, payments or transactions not done through Talent ID."]
            })]
        })
    })
}
const Fb = () => {
    const {pathname: e} = li();
    return N.useLayoutEffect( () => {
        window.scrollTo(0, 0)
    }
    , [e]),
    null
}
  , $b = () => a.jsxs(_g, {
    children: [a.jsx(Fb, {}), a.jsxs(wg, {
        children: [a.jsx(Je, {
            path: "/",
            element: a.jsx(Rb, {})
        }), a.jsx(Je, {
            path: "/aboutus",
            element: a.jsx(Ix, {})
        }), a.jsx(Je, {
            path: "/optform",
            element: a.jsx(Ib, {})
        }), a.jsx(Je, {
            path: "/contactus",
            element: a.jsx(ob, {})
        }), a.jsx(Je, {
            path: "/partnership",
            element: a.jsx(mb, {})
        }), a.jsx(Je, {
            path: "/pricing",
            element: a.jsx(Nb, {})
        }), a.jsx(Je, {
            path: "/events",
            element: a.jsx(Lb, {})
        }), a.jsx(Je, {
            path: "/privacy-policy",
            element: a.jsx(zb, {})
        }), a.jsx(Je, {
            path: "/refund",
            element: a.jsx(Ab, {})
        }), a.jsx(Je, {
            path: "/terms-and-conditions",
            element: a.jsx(Mb, {})
        })]
    })]
});
zp(document.getElementById("root")).render(a.jsxs(N.StrictMode, {
    children: [a.jsx(ib, {}), a.jsx($b, {})]
}));

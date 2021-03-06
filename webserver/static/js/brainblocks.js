! function(e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("brainblocks", [], n) : "object" == typeof exports ? exports.brainblocks = n() : e.brainblocks = n()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        var t = {};
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, n.p = "", n(n.s = "./src/index.js")
    }({
        "./node_modules/beaver-logger/client/builders.js": function(e, n, t) {
            "use strict";

            function r(e) {
                s.push(e)
            }

            function o(e) {
                c.push(e)
            }

            function i(e) {
                u.push(e)
            }

            function a(e) {
                d.push(e)
            }
            t.d(n, "g", function() {
                return s
            }), t.d(n, "f", function() {
                return c
            }), t.d(n, "h", function() {
                return u
            }), t.d(n, "e", function() {
                return d
            }), n.c = r, n.b = o, n.d = i, n.a = a;
            var s = [],
                c = [],
                u = [],
                d = []
        },
        "./node_modules/beaver-logger/client/config.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            }), t.d(n, "b", function() {
                return o
            });
            var r = {
                    uri: "",
                    prefix: "",
                    initial_state_name: "init",
                    flushInterval: 6e5,
                    debounceInterval: 10,
                    sizeLimit: 300,
                    silent: !1,
                    heartbeat: !0,
                    heartbeatConsoleLog: !0,
                    heartbeatInterval: 5e3,
                    heartbeatTooBusy: !1,
                    heartbeatTooBusyThreshold: 1e4,
                    logLevel: "warn",
                    autoLog: ["warn", "error"],
                    logUnload: !0,
                    logPerformance: !0
                },
                o = ["error", "warn", "info", "debug"]
        },
        "./node_modules/beaver-logger/client/index.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/beaver-logger/client/interface.js");
            t.d(n, "a", function() {
                return r.config
            }), t.d(n, "b", function() {
                return r.error
            }), t.d(n, "c", function() {
                return r.flush
            }), t.d(n, "d", function() {
                return r.info
            }), t.d(n, "e", function() {
                return r.logLevels
            }), t.d(n, "f", function() {
                return r.warn
            })
        },
        "./node_modules/beaver-logger/client/init.js": function(e, n, t) {
            "use strict";

            function r(e) {
                Object(i.b)(o.a, e || {}), c || (c = !0, o.a.logPerformance && Object(a.b)(), o.a.heartbeat && Object(a.a)(), o.a.logUnload && (window.addEventListener("beforeunload", function() {
                    Object(s.g)("window_beforeunload"), Object(s.f)({
                        fireAndForget: !0
                    })
                }), window.addEventListener("unload", function() {
                    Object(s.g)("window_unload"), Object(s.f)({
                        fireAndForget: !0
                    })
                })), o.a.flushInterval && setInterval(s.d, o.a.flushInterval), window.beaverLogQueue && (window.beaverLogQueue.forEach(function(e) {
                    Object(s.h)(e.level, e.event, e)
                }), delete window.beaverLogQueue))
            }
            n.a = r;
            var o = t("./node_modules/beaver-logger/client/config.js"),
                i = t("./node_modules/beaver-logger/client/util.js"),
                a = t("./node_modules/beaver-logger/client/performance.js"),
                s = t("./node_modules/beaver-logger/client/logger.js"),
                c = !1
        },
        "./node_modules/beaver-logger/client/interface.js": function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = t("./node_modules/beaver-logger/client/logger.js");
            t.d(n, "track", function() {
                return r.l
            }), t.d(n, "buffer", function() {
                return r.a
            }), t.d(n, "tracking", function() {
                return r.m
            }), t.d(n, "getTransport", function() {
                return r.e
            }), t.d(n, "setTransport", function() {
                return r.k
            }), t.d(n, "print", function() {
                return r.j
            }), t.d(n, "immediateFlush", function() {
                return r.f
            }), t.d(n, "flush", function() {
                return r.d
            }), t.d(n, "log", function() {
                return r.h
            }), t.d(n, "prefix", function() {
                return r.i
            }), t.d(n, "debug", function() {
                return r.b
            }), t.d(n, "info", function() {
                return r.g
            }), t.d(n, "warn", function() {
                return r.n
            }), t.d(n, "error", function() {
                return r.c
            });
            var o = t("./node_modules/beaver-logger/client/init.js");
            t.d(n, "init", function() {
                return o.a
            });
            var i = t("./node_modules/beaver-logger/client/transitions.js");
            t.d(n, "startTransition", function() {
                return i.b
            }), t.d(n, "endTransition", function() {
                return i.a
            }), t.d(n, "transition", function() {
                return i.c
            });
            var a = t("./node_modules/beaver-logger/client/builders.js");
            t.d(n, "payloadBuilders", function() {
                return a.g
            }), t.d(n, "metaBuilders", function() {
                return a.f
            }), t.d(n, "trackingBuilders", function() {
                return a.h
            }), t.d(n, "headerBuilders", function() {
                return a.e
            }), t.d(n, "addPayloadBuilder", function() {
                return a.c
            }), t.d(n, "addMetaBuilder", function() {
                return a.b
            }), t.d(n, "addTrackingBuilder", function() {
                return a.d
            }), t.d(n, "addHeaderBuilder", function() {
                return a.a
            });
            var s = t("./node_modules/beaver-logger/client/config.js");
            t.d(n, "config", function() {
                return s.a
            }), t.d(n, "logLevels", function() {
                return s.b
            })
        },
        "./node_modules/beaver-logger/client/logger.js": function(e, n, t) {
            "use strict";

            function r() {
                return g
            }

            function o(e) {
                g = e
            }

            function i(e, n, t) {
                if ("undefined" != typeof window && window.console && window.console.log) {
                    if (!E) return setTimeout(function() {
                        return i(e, n, t)
                    }, 1);
                    var r = w.a.logLevel;
                    if (window.LOG_LEVEL && (r = window.LOG_LEVEL), !(w.b.indexOf(e) > w.b.indexOf(r))) {
                        t = t || {};
                        var o = [n];
                        Object(h.c)() && (t = JSON.stringify(t)), o.push(t), (t.error || t.warning) && o.push("\n\n", t.error || t.warning);
                        try {
                            window.console[e] && window.console[e].apply ? window.console[e].apply(window.console, o) : window.console.log && window.console.log.apply && window.console.log.apply(window.console, o)
                        } catch (e) {}
                    }
                }
            }

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.fireAndForget,
                    t = void 0 !== n && n;
                if ("undefined" != typeof window && w.a.uri) {
                    var r = y.length,
                        o = v.length;
                    if (r || o) {
                        for (var i = {}, a = b.f, s = Array.isArray(a), c = 0, a = s ? a : a[Symbol.iterator]();;) {
                            var u;
                            if (s) {
                                if (c >= a.length) break;
                                u = a[c++]
                            } else {
                                if (c = a.next(), c.done) break;
                                u = c.value
                            }
                            var d = u;
                            try {
                                Object(h.b)(i, d(i), !1)
                            } catch (e) {
                                console.error("Error in custom meta builder:", e.stack || e.toString())
                            }
                        }
                        for (var l = {}, f = b.e, p = Array.isArray(f), m = 0, f = p ? f : f[Symbol.iterator]();;) {
                            var E;
                            if (p) {
                                if (m >= f.length) break;
                                E = f[m++]
                            } else {
                                if (m = f.next(), m.done) break;
                                E = m.value
                            }
                            var _ = E;
                            try {
                                Object(h.b)(l, _(l), !1)
                            } catch (e) {
                                console.error("Error in custom header builder:", e.stack || e.toString())
                            }
                        }
                        var O = y,
                            j = g(l, {
                                events: O,
                                meta: i,
                                tracking: v
                            }, {
                                fireAndForget: t
                            });
                        return y = [], v = [], j
                    }
                }
            }

            function s(e, n, t) {
                y.push({
                    level: e,
                    event: n,
                    payload: t
                }), w.a.autoLog.indexOf(e) > -1 && _()
            }

            function c(e, n, t) {
                if ("undefined" != typeof window) {
                    w.a.prefix && (n = w.a.prefix + "_" + n), t = t || {}, "string" == typeof t ? t = {
                        message: t
                    } : t instanceof Error && (t = {
                        error: t.stack || t.toString()
                    });
                    try {
                        JSON.stringify(t)
                    } catch (e) {
                        return
                    }
                    t.timestamp = Date.now();
                    for (var r = b.g, o = Array.isArray(r), a = 0, r = o ? r : r[Symbol.iterator]();;) {
                        var c;
                        if (o) {
                            if (a >= r.length) break;
                            c = r[a++]
                        } else {
                            if (a = r.next(), a.done) break;
                            c = a.value
                        }
                        var u = c;
                        try {
                            Object(h.b)(t, u(t), !1)
                        } catch (e) {
                            console.error("Error in custom payload builder:", e.stack || e.toString())
                        }
                    }
                    w.a.silent || i(e, n, t), y.length === w.a.sizeLimit ? s("info", "logger_max_buffer_length") : y.length < w.a.sizeLimit && s(e, n, t)
                }
            }

            function u(e) {
                return {
                    debug: function(n, t) {
                        return c("debug", e + "_" + n, t)
                    },
                    info: function(n, t) {
                        return c("info", e + "_" + n, t)
                    },
                    warn: function(n, t) {
                        return c("warn", e + "_" + n, t)
                    },
                    error: function(n, t) {
                        return c("error", e + "_" + n, t)
                    },
                    track: function(e) {
                        return m(e)
                    },
                    flush: function() {
                        return _()
                    }
                }
            }

            function d(e, n) {
                return c("debug", e, n)
            }

            function l(e, n) {
                return c("info", e, n)
            }

            function f(e, n) {
                return c("warn", e, n)
            }

            function p(e, n) {
                return c("error", e, n)
            }

            function m(e) {
                if ("undefined" != typeof window && e) {
                    try {
                        JSON.stringify(e)
                    } catch (e) {
                        return
                    }
                    for (var n = b.h, t = Array.isArray(n), r = 0, n = t ? n : n[Symbol.iterator]();;) {
                        var o;
                        if (t) {
                            if (r >= n.length) break;
                            o = n[r++]
                        } else {
                            if (r = n.next(), r.done) break;
                            o = r.value
                        }
                        var a = o;
                        try {
                            Object(h.b)(e, a(e), !1)
                        } catch (e) {
                            console.error("Error in custom tracking builder:", e.stack || e.toString())
                        }
                    }
                    i("debug", "tracking", e), v.push(e)
                }
            }
            t.d(n, "l", function() {
                return m
            }), t.d(n, "a", function() {
                return y
            }), t.d(n, "m", function() {
                return v
            }), n.e = r, n.k = o, n.j = i, n.f = a, t.d(n, "d", function() {
                return _
            }), n.h = c, n.i = u, n.b = d, n.g = l, n.n = f, n.c = p;
            var h = t("./node_modules/beaver-logger/client/util.js"),
                b = t("./node_modules/beaver-logger/client/builders.js"),
                w = t("./node_modules/beaver-logger/client/config.js"),
                y = [],
                v = [],
                g = function(e, n, t) {
                    return Object(h.a)("post", w.a.uri, e, n, t)
                },
                E = !1;
            setTimeout(function() {
                E = !0
            }, 1);
            var _ = Object(h.e)(a, w.a.debounceInterval)
        },
        "./node_modules/beaver-logger/client/performance.js": function(e, n, t) {
            "use strict";

            function r() {
                return f ? performance.now() : Date.now()
            }

            function o(e) {
                return e = void 0 !== e ? e : r(), {
                    startTime: e,
                    elapsed: function() {
                        return parseInt(r() - e, 10)
                    },
                    reset: function() {
                        e = r()
                    }
                }
            }

            function i() {
                if (f) {
                    var e = window.performance.timing;
                    return parseInt(e.connectEnd - e.navigationStart, 10)
                }
            }

            function a() {
                var e = o(),
                    n = 0;
                Object(l.f)(function() {
                    if (!(c.a.heartbeatMaxThreshold && n > c.a.heartbeatMaxThreshold)) {
                        n += 1;
                        var t = e.elapsed(),
                            r = t - c.a.heartbeatInterval,
                            o = {
                                count: n,
                                elapsed: t
                            };
                        c.a.heartbeatTooBusy && (o.lag = r, r >= c.a.heartbeatTooBusyThreshold && Object(u.g)("toobusy", o, {
                            noConsole: !c.a.heartbeatConsoleLog
                        })), Object(u.g)("heartbeat", o, {
                            noConsole: !c.a.heartbeatConsoleLog
                        })
                    }
                }, c.a.heartbeatInterval)
            }

            function s() {
                if (!f) return Object(u.g)("no_performance_data");
                Object(d.c)(function() {
                    var e = {};
                    return e.client_elapsed = p.elapsed(), f && (e.req_elapsed = m.elapsed()), e
                }), Object(l.d)().then(function() {
                    var e = ["connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart"],
                        n = {};
                    e.forEach(function(e) {
                        n[e] = parseInt(window.performance.timing[e], 10) || 0
                    });
                    var t = n.connectEnd - n.navigationStart;
                    n.connectEnd && Object.keys(n).forEach(function(e) {
                        var r = n[e];
                        r && Object(u.g)("timing_" + e, {
                            client_elapsed: parseInt(r - n.connectEnd - (p.startTime - t), 10),
                            req_elapsed: parseInt(r - n.connectEnd, 10)
                        })
                    }), Object(u.g)("timing", n), Object(u.g)("memory", window.performance.memory), Object(u.g)("navigation", window.performance.navigation), window.performance.getEntries && window.performance.getEntries().forEach(function(e) {
                        ["link", "script", "img", "css"].indexOf(e.initiatorType) > -1 && Object(u.g)(e.initiatorType, e)
                    })
                })
            }
            n.c = r, n.d = i, n.a = a, n.b = s;
            var c = t("./node_modules/beaver-logger/client/config.js"),
                u = t("./node_modules/beaver-logger/client/logger.js"),
                d = t("./node_modules/beaver-logger/client/builders.js"),
                l = t("./node_modules/beaver-logger/client/util.js"),
                f = window && window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1e3 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0,
                p = o(),
                m = o(i())
        },
        "./node_modules/beaver-logger/client/transitions.js": function(e, n, t) {
            "use strict";

            function r() {
                m = Object(a.c)()
            }

            function o(e) {
                m = m || Object(a.d)();
                var n = Object(a.c)(),
                    t = void 0;
                void 0 !== m && (t = parseInt(n - m, 0));
                var r = "transition_" + p + "_to_" + e;
                Object(s.g)(r, {
                    duration: t
                }), Object(s.l)({
                    transition: r,
                    transition_time: t
                }), Object(s.f)(), m = n, p = e, f = Object(u.g)()
            }

            function i(e) {
                r(), o(e)
            }
            n.b = r, n.a = o, n.c = i;
            var a = t("./node_modules/beaver-logger/client/performance.js"),
                s = t("./node_modules/beaver-logger/client/logger.js"),
                c = t("./node_modules/beaver-logger/client/builders.js"),
                u = t("./node_modules/beaver-logger/client/util.js"),
                d = t("./node_modules/beaver-logger/client/config.js"),
                l = Object(u.g)(),
                f = Object(u.g)(),
                p = d.a.initial_state_name,
                m = void 0;
            Object(c.c)(function() {
                return {
                    windowID: l,
                    pageID: f
                }
            }), Object(c.b)(function() {
                return {
                    state: "ui_" + p
                }
            })
        },
        "./node_modules/beaver-logger/client/util.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                e = e || {}, n = n || {};
                for (var r in n) n.hasOwnProperty(r) && (!t && e.hasOwnProperty(r) || (e[r] = n[r]));
                return e
            }

            function o(e) {
                return window.location.protocol === e.split("/")[0]
            }

            function i(e) {
                var n = e.match(/https?:\/\/[^\/]+/);
                return !n || n[0] === window.location.protocol + "//" + window.location.host
            }

            function a(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                    s = a.fireAndForget,
                    c = void 0 !== s && s;
                return new f.a(function(a) {
                    var s = window.XMLHttpRequest || window.ActiveXObject;
                    if (window.XDomainRequest && !i(n)) {
                        if (!o(n)) return a();
                        s = window.XDomainRequest
                    }
                    var u = new s("MSXML2.XMLHTTP.3.0");
                    if (u.open(e.toUpperCase(), n, !0), "function" == typeof u.setRequestHeader) {
                        u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), u.setRequestHeader("Content-type", "application/json");
                        for (var d in t) t.hasOwnProperty(d) && u.setRequestHeader(d, t[d])
                    }
                    c ? a() : u.onreadystatechange = function() {
                        u.readyState > 3 && a()
                    }, u.send(JSON.stringify(r).replace(/&/g, "%26"))
                })
            }

            function s(e, n) {
                var t = {};
                return function() {
                    var r = arguments;
                    return t.timeout && (clearTimeout(t.timeout), delete t.timeout), t.timeout = setTimeout(function() {
                        var n = t.resolver,
                            o = t.rejector;
                        return delete t.promise, delete t.resolver, delete t.rejector, delete t.timeout, f.a.resolve().then(function() {
                            return e.apply(null, r)
                        }).then(n, o)
                    }, n), t.promise = t.promise || new f.a(function(e, n) {
                        t.resolver = e, t.rejector = n
                    }), t.promise
                }
            }

            function c() {
                return new f.a(function(e) {
                    "undefined" != typeof document && "complete" === document.readyState && e(), window.addEventListener("load", e)
                })
            }

            function u(e, n) {
                function t() {
                    r = setTimeout(function() {
                        e(), t()
                    }, n)
                }
                var r = void 0;
                return t(), {
                    cancel: function() {
                        clearTimeout(r)
                    }
                }
            }

            function d() {
                var e = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return e.charAt(Math.floor(Math.random() * e.length))
                })
            }

            function l() {
                return Boolean(window.document.documentMode)
            }
            n.b = r, n.a = a, n.e = s, n.d = c, n.f = u, n.g = d, n.c = l;
            var f = t("./node_modules/zalgo-promise/src/index.js")
        },
        "./node_modules/cross-domain-safe-weakmap/src/index.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/cross-domain-safe-weakmap/src/interface.js");
            t.d(n, "a", function() {
                return r.WeakMap
            })
        },
        "./node_modules/cross-domain-safe-weakmap/src/interface.js": function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = t("./node_modules/cross-domain-safe-weakmap/src/weakmap.js");
            t.d(n, "WeakMap", function() {
                return r.a
            })
        },
        "./node_modules/cross-domain-safe-weakmap/src/native.js": function(e, n, t) {
            "use strict";

            function r() {
                if ("undefined" == typeof WeakMap) return !1;
                if (void 0 === Object.freeze) return !1;
                try {
                    var e = new WeakMap,
                        n = {};
                    return Object.freeze(n), e.set(n, "__testvalue__"), "__testvalue__" === e.get(n)
                } catch (e) {
                    return !1
                }
            }
            n.a = r
        },
        "./node_modules/cross-domain-safe-weakmap/src/util.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                for (var t = 0; t < e.length; t++) try {
                    if (e[t] === n) return t
                } catch (e) {}
                return -1
            }

            function o() {}
            n.b = r, n.a = o
        },
        "./node_modules/cross-domain-safe-weakmap/src/weakmap.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            t.d(n, "a", function() {
                return u
            });
            var o = t("./node_modules/cross-domain-utils/src/index.js"),
                i = t("./node_modules/cross-domain-safe-weakmap/src/native.js"),
                a = t("./node_modules/cross-domain-safe-weakmap/src/util.js"),
                s = Object.defineProperty,
                c = Date.now() % 1e9,
                u = function() {
                    function e() {
                        if (r(this, e), c += 1, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__" + c, Object(i.a)()) try {
                            this.weakmap = new WeakMap
                        } catch (e) {}
                        this.keys = [], this.values = []
                    }
                    return e.prototype._cleanupClosedWindows = function() {
                        for (var e = this.weakmap, n = this.keys, t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (Object(o.w)(r) && Object(o.x)(r)) {
                                if (e) try {
                                    e.delete(r)
                                } catch (e) {}
                                n.splice(t, 1), this.values.splice(t, 1), t -= 1
                            }
                        }
                    }, e.prototype.isSafeToReadWrite = function(e) {
                        if (Object(o.w)(e)) return !1;
                        try {
                            Object(a.a)(e && e.self), Object(a.a)(e && e[this.name])
                        } catch (e) {
                            return !1
                        }
                        return !0
                    }, e.prototype.set = function(e, n) {
                        if (!e) throw new Error("WeakMap expected key");
                        var t = this.weakmap;
                        if (t) try {
                            t.set(e, n)
                        } catch (e) {
                            delete this.weakmap
                        }
                        if (this.isSafeToReadWrite(e)) try {
                            var r = this.name,
                                o = e[r];
                            return void(o && o[0] === e ? o[1] = n : s(e, r, {
                                value: [e, n],
                                writable: !0
                            }))
                        } catch (e) {}
                        this._cleanupClosedWindows();
                        var i = this.keys,
                            c = this.values,
                            u = Object(a.b)(i, e); - 1 === u ? (i.push(e), c.push(n)) : c[u] = n
                    }, e.prototype.get = function(e) {
                        if (!e) throw new Error("WeakMap expected key");
                        var n = this.weakmap;
                        if (n) try {
                            if (n.has(e)) return n.get(e)
                        } catch (e) {
                            delete this.weakmap
                        }
                        if (this.isSafeToReadWrite(e)) try {
                            var t = e[this.name];
                            if (t && t[0] === e) return t[1];
                            return
                        } catch (e) {}
                        this._cleanupClosedWindows();
                        var r = this.keys,
                            o = Object(a.b)(r, e);
                        if (-1 !== o) return this.values[o]
                    }, e.prototype.delete = function(e) {
                        if (!e) throw new Error("WeakMap expected key");
                        var n = this.weakmap;
                        if (n) try {
                            n.delete(e)
                        } catch (e) {
                            delete this.weakmap
                        }
                        if (this.isSafeToReadWrite(e)) try {
                            var t = e[this.name];
                            t && t[0] === e && (t[0] = t[1] = void 0)
                        } catch (e) {}
                        this._cleanupClosedWindows();
                        var r = this.keys,
                            o = Object(a.b)(r, e); - 1 !== o && (r.splice(o, 1), this.values.splice(o, 1))
                    }, e.prototype.has = function(e) {
                        if (!e) throw new Error("WeakMap expected key");
                        var n = this.weakmap;
                        if (n) try {
                            if (n.has(e)) return !0
                        } catch (e) {
                            delete this.weakmap
                        }
                        if (this.isSafeToReadWrite(e)) try {
                            var t = e[this.name];
                            return !(!t || t[0] !== e)
                        } catch (e) {}
                        return this._cleanupClosedWindows(), -1 !== Object(a.b)(this.keys, e)
                    }, e.prototype.getOrSet = function(e, n) {
                        if (this.has(e)) return this.get(e);
                        var t = n();
                        return this.set(e, t), t
                    }, e
                }()
        },
        "./node_modules/cross-domain-utils/src/constants.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            }), t.d(n, "b", function() {
                return o
            });
            var r = {
                    MOCK: "mock:",
                    FILE: "file:",
                    ABOUT: "about:"
                },
                o = "*"
        },
        "./node_modules/cross-domain-utils/src/index.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/cross-domain-utils/src/utils.js");
            t.d(n, "a", function() {
                return r.a
            }), t.d(n, "b", function() {
                return r.b
            }), t.d(n, "c", function() {
                return r.c
            }), t.d(n, "d", function() {
                return r.d
            }), t.d(n, "e", function() {
                return r.e
            }), t.d(n, "f", function() {
                return r.f
            }), t.d(n, "g", function() {
                return r.g
            }), t.d(n, "h", function() {
                return r.h
            }), t.d(n, "i", function() {
                return r.i
            }), t.d(n, "j", function() {
                return r.j
            }), t.d(n, "k", function() {
                return r.k
            }), t.d(n, "l", function() {
                return r.l
            }), t.d(n, "m", function() {
                return r.m
            }), t.d(n, "n", function() {
                return r.n
            }), t.d(n, "o", function() {
                return r.o
            }), t.d(n, "p", function() {
                return r.p
            }), t.d(n, "q", function() {
                return r.q
            }), t.d(n, "r", function() {
                return r.r
            }), t.d(n, "s", function() {
                return r.s
            }), t.d(n, "t", function() {
                return r.t
            }), t.d(n, "u", function() {
                return r.u
            }), t.d(n, "v", function() {
                return r.v
            }), t.d(n, "w", function() {
                return r.w
            }), t.d(n, "x", function() {
                return r.x
            }), t.d(n, "y", function() {
                return r.y
            }), t.d(n, "z", function() {
                return r.z
            }), t.d(n, "A", function() {
                return r.A
            }), t.d(n, "B", function() {
                return r.B
            });
            t("./node_modules/cross-domain-utils/src/types.js"), t("./node_modules/cross-domain-utils/src/constants.js")
        },
        "./node_modules/cross-domain-utils/src/types.js": function(e, n, t) {
            "use strict"
        },
        "./node_modules/cross-domain-utils/src/util.js": function(e, n, t) {
            "use strict";

            function r(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            }

            function o() {}
            n.a = r, n.b = o
        },
        "./node_modules/cross-domain-utils/src/utils.js": function(e, n, t) {
            "use strict";

            function r() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window).location.protocol === F.a.ABOUT
            }

            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                if (e) try {
                    if (e.parent && e.parent !== e) return e.parent
                } catch (e) {}
            }

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                if (e && !o(e)) try {
                    return e.opener
                } catch (e) {}
            }

            function a(e) {
                try {
                    return Object(B.b)(e && e.location && e.location.href), !0
                } catch (e) {}
                return !1
            }

            function s(e) {
                e = e || window;
                var n = e.location;
                if (!n) throw new Error("Can not read window location");
                var t = n.protocol;
                if (!t) throw new Error("Can not read window protocol");
                if (t === F.a.FILE) return F.a.FILE + "//";
                if (t === F.a.ABOUT) {
                    var r = o(e);
                    return r && a(r) ? s(r) : F.a.ABOUT + "//"
                }
                var i = n.host;
                if (!i) throw new Error("Can not read window host");
                return t + "//" + i
            }

            function c(e) {
                e = e || window;
                var n = s(e);
                return n && e.mockDomain && 0 === e.mockDomain.indexOf(F.a.MOCK) ? e.mockDomain : n
            }

            function u(e) {
                try {
                    if (e === window) return !0
                } catch (e) {}
                try {
                    var n = Object.getOwnPropertyDescriptor(e, "location");
                    if (n && !1 === n.enumerable) return !1
                } catch (e) {}
                try {
                    if (r(e) && a(e)) return !0
                } catch (e) {}
                try {
                    if (s(e) === s(window)) return !0
                } catch (e) {}
                return !1
            }

            function d(e) {
                if (!u(e)) return !1;
                try {
                    if (e === window) return !0;
                    if (r(e) && a(e)) return !0;
                    if (c(window) === c(e)) return !0
                } catch (e) {}
                return !1
            }

            function l(e) {
                var n = [];
                try {
                    for (; e.parent !== e;) n.push(e.parent), e = e.parent
                } catch (e) {}
                return n
            }

            function f(e, n) {
                if (!e || !n) return !1;
                var t = o(n);
                return t ? t === e : -1 !== l(n).indexOf(e)
            }

            function p(e) {
                var n = [],
                    t = void 0;
                try {
                    t = e.frames
                } catch (n) {
                    t = e
                }
                var r = void 0;
                try {
                    r = t.length
                } catch (e) {}
                if (0 === r) return n;
                if (r) {
                    for (var o = 0; o < r; o++) {
                        var i = void 0;
                        try {
                            i = t[o]
                        } catch (e) {
                            continue
                        }
                        n.push(i)
                    }
                    return n
                }
                for (var a = 0; a < 100; a++) {
                    var s = void 0;
                    try {
                        s = t[a]
                    } catch (e) {
                        return n
                    }
                    if (!s) return n;
                    n.push(s)
                }
                return n
            }

            function m(e) {
                for (var n = [], t = p(e), r = Array.isArray(t), o = 0, t = r ? t : t[Symbol.iterator]();;) {
                    var i;
                    if (r) {
                        if (o >= t.length) break;
                        i = t[o++]
                    } else {
                        if (o = t.next(), o.done) break;
                        i = o.value
                    }
                    var a = i;
                    n.push(a);
                    for (var s = m(a), c = Array.isArray(s), u = 0, s = c ? s : s[Symbol.iterator]();;) {
                        var d;
                        if (c) {
                            if (u >= s.length) break;
                            d = s[u++]
                        } else {
                            if (u = s.next(), u.done) break;
                            d = u.value
                        }
                        var l = d;
                        n.push(l)
                    }
                }
                return n
            }

            function h(e) {
                if (e) {
                    try {
                        if (e.top) return e.top
                    } catch (e) {}
                    if (o(e) === e) return e;
                    try {
                        if (f(window, e) && window.top) return window.top
                    } catch (e) {}
                    try {
                        if (f(e, window) && window.top) return window.top
                    } catch (e) {}
                    for (var n = m(e), t = Array.isArray(n), r = 0, n = t ? n : n[Symbol.iterator]();;) {
                        var i;
                        if (t) {
                            if (r >= n.length) break;
                            i = n[r++]
                        } else {
                            if (r = n.next(), r.done) break;
                            i = r.value
                        }
                        var a = i;
                        try {
                            if (a.top) return a.top
                        } catch (e) {}
                        if (o(a) === a) return a
                    }
                }
            }

            function b(e) {
                var n = h(e);
                if (!n) throw new Error("Can not determine top window");
                return [].concat(m(n), [n])
            }

            function w(e) {
                return e === h(e)
            }

            function y(e) {
                if (!e.contentWindow) return !0;
                if (!e.parentNode) return !0;
                var n = e.ownerDocument;
                return !(!n || !n.documentElement || n.documentElement.contains(e))
            }

            function v(e, n) {
                for (var t = 0; t < e.length; t++) try {
                    if (e[t] === n) return t
                } catch (e) {}
                return -1
            }

            function g(e) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                try {
                    if (e === window) return !1
                } catch (e) {
                    return !0
                }
                try {
                    if (!e) return !0
                } catch (e) {
                    return !0
                }
                try {
                    if (e.closed) return !0
                } catch (e) {
                    return !e || e.message !== H
                }
                if (n && d(e)) try {
                    if (e.mockclosed) return !0
                } catch (e) {}
                try {
                    if (!e.parent || !e.top) return !0
                } catch (e) {}
                try {
                    Object(B.b)(e === e)
                } catch (e) {
                    return !0
                }
                var t = v(q, e);
                if (-1 !== t) {
                    var r = Y[t];
                    if (r && y(r)) return !0
                }
                return !1
            }

            function E() {
                for (var e = 0; e < q.length; e++) {
                    var n = !1;
                    try {
                        n = q[e].closed
                    } catch (e) {}
                    n && (Y.splice(e, 1), q.splice(e, 1))
                }
            }

            function _(e) {
                if (E(), e && e.contentWindow) try {
                    q.push(e.contentWindow), Y.push(e)
                } catch (e) {}
            }

            function O(e) {
                return e = e || window, e.navigator.mockUserAgent || e.navigator.userAgent
            }

            function j(e, n) {
                for (var t = p(e), r = t, o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator]();;) {
                    var a;
                    if (o) {
                        if (i >= r.length) break;
                        a = r[i++]
                    } else {
                        if (i = r.next(), i.done) break;
                        a = i.value
                    }
                    var s = a;
                    try {
                        if (d(s) && s.name === n && -1 !== t.indexOf(s)) return s
                    } catch (e) {}
                }
                try {
                    if (-1 !== t.indexOf(e.frames[n])) return e.frames[n]
                } catch (e) {}
                try {
                    if (-1 !== t.indexOf(e[n])) return e[n]
                } catch (e) {}
            }

            function S(e, n) {
                var t = j(e, n);
                if (t) return t;
                for (var r = p(e), o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator]();;) {
                    var a;
                    if (o) {
                        if (i >= r.length) break;
                        a = r[i++]
                    } else {
                        if (i = r.next(), i.done) break;
                        a = i.value
                    }
                    var s = a,
                        c = S(s, n);
                    if (c) return c
                }
            }

            function A(e, n) {
                var t = void 0;
                return (t = j(e, n)) ? t : S(h(e) || e, n)
            }

            function x(e, n) {
                return e === i(n)
            }

            function T() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                e = e || window;
                var n = i(e);
                if (n) return n;
                var t = o(e);
                return t || void 0
            }

            function P(e, n) {
                var t = T(n);
                if (t) return t === e;
                if (n === e) return !1;
                if (h(n) === n) return !1;
                for (var r = p(e), o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator]();;) {
                    var a;
                    if (o) {
                        if (i >= r.length) break;
                        a = r[i++]
                    } else {
                        if (i = r.next(), i.done) break;
                        a = i.value
                    }
                    if (a === n) return !0
                }
                return !1
            }

            function C() {
                return Boolean(i(window))
            }

            function L() {
                return Boolean(o(window))
            }

            function I(e, n) {
                for (var t = e, r = Array.isArray(t), o = 0, t = r ? t : t[Symbol.iterator]();;) {
                    var i;
                    if (r) {
                        if (o >= t.length) break;
                        i = t[o++]
                    } else {
                        if (o = t.next(), o.done) break;
                        i = o.value
                    }
                    for (var a = i, s = n, c = Array.isArray(s), u = 0, s = c ? s : s[Symbol.iterator]();;) {
                        var d;
                        if (c) {
                            if (u >= s.length) break;
                            d = s[u++]
                        } else {
                            if (u = s.next(), u.done) break;
                            d = u.value
                        }
                        if (a === d) return !0
                    }
                }
                return !1
            }

            function N() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window, n = 0, t = e; t;)(t = o(t)) && (n += 1);
                return n
            }

            function k(e) {
                for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, t = e, r = 0; r < n; r++) {
                    if (!t) return;
                    t = o(t)
                }
                return t
            }

            function D(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return k(e, N(e) - n)
            }

            function R(e, n) {
                var t = h(e) || e,
                    r = h(n) || n;
                try {
                    if (t && r) return t === r
                } catch (e) {}
                var o = b(e),
                    a = b(n);
                if (I(o, a)) return !0;
                var s = i(t),
                    c = i(r);
                return (!s || !I(b(s), a)) && (c && I(b(c), o), !1)
            }

            function M(e, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof n) return e === F.b || n === e;
                    if (Object(B.a)(n)) return !1;
                    if (Array.isArray(n)) return !1
                }
                return Object(B.a)(e) ? Object(B.a)(n) ? e.toString() === n.toString() : !Array.isArray(n) && Boolean(n.match(e)) : !!Array.isArray(e) && (Array.isArray(n) ? JSON.stringify(e) === JSON.stringify(n) : !Object(B.a)(n) && e.some(function(e) {
                    return M(e, n)
                }))
            }

            function W(e) {
                return Array.isArray(e) ? "(" + e.join(" | ") + ")" : Object(B.a)(e) ? "RegExp(" + e.toString() : e.toString()
            }

            function G(e) {
                var n = void 0;
                return e.match(/^(https?|mock|file):\/\//) ? (n = e, n = n.split("/").slice(0, 3).join("/")) : c()
            }

            function z(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
                    o = void 0;
                return function i() {
                    if (g(e)) return o && clearTimeout(o), n();
                    r <= 0 ? clearTimeout(o) : (r -= t, o = setTimeout(i, t))
                }(), {
                    cancel: function() {
                        o && clearTimeout(o)
                    }
                }
            }

            function U(e) {
                try {
                    if (e === window) return !0
                } catch (e) {
                    if (e && e.message === H) return !0
                }
                try {
                    if ("[object Window]" === Object.prototype.toString.call(e)) return !0
                } catch (e) {
                    if (e && e.message === H) return !0
                }
                try {
                    if (window.Window && e instanceof window.Window) return !0
                } catch (e) {
                    if (e && e.message === H) return !0
                }
                try {
                    if (e && e.self === e) return !0
                } catch (e) {
                    if (e && e.message === H) return !0
                }
                try {
                    if (e && e.parent === e) return !0
                } catch (e) {
                    if (e && e.message === H) return !0
                }
                try {
                    if (e && e.top === e) return !0
                } catch (e) {
                    if (e && e.message === H) return !0
                }
                try {
                    if ("__unlikely_value__" === Object(B.b)(e === e)) return !1
                } catch (e) {
                    return !0
                }
                try {
                    if (e && "__unlikely_value__" === e.__cross_domain_utils_window_check__) return !1
                } catch (e) {
                    return !0
                }
                return !1
            }
            n.l = o, n.k = i, n.b = s, n.f = c, n.o = u, n.t = d, n.i = p, n.m = h, n.c = b, n.v = w, n.x = g, n.y = _, n.n = O, n.h = j, n.a = A, n.r = x, n.d = T, n.p = P, n.s = C, n.q = L, n.e = N, n.j = D, n.u = R, n.z = M, n.B = W, n.g = G, n.A = z, n.w = U;
            var B = t("./node_modules/cross-domain-utils/src/util.js"),
                F = t("./node_modules/cross-domain-utils/src/constants.js"),
                H = "Call was rejected by callee.\r\n",
                q = [],
                Y = []
        },
        "./node_modules/hi-base32/src/base32.js": function(e, n, t) {
            (function(e, n, r) {
                var o, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                /*
                 * [hi-base32]{@link https://github.com/emn178/hi-base32}
                 *
                 * @version 0.5.0
                 * @author Chen, Yi-Cyuan [emn178@gmail.com]
                 * @copyright Chen, Yi-Cyuan 2015-2018
                 * @license MIT
                 */
                ! function() {
                    "use strict";
                    var a = "object" === ("undefined" == typeof window ? "undefined" : i(window)) ? window : {};
                    !a.HI_BASE32_NO_NODE_JS && "object" === (void 0 === e ? "undefined" : i(e)) && e.versions && e.versions.node && (a = n);
                    var s = !a.HI_BASE32_NO_COMMON_JS && "object" === i(r) && r.exports,
                        c = t("./node_modules/webpack/buildin/amd-options.js"),
                        u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split(""),
                        d = {
                            A: 0,
                            B: 1,
                            C: 2,
                            D: 3,
                            E: 4,
                            F: 5,
                            G: 6,
                            H: 7,
                            I: 8,
                            J: 9,
                            K: 10,
                            L: 11,
                            M: 12,
                            N: 13,
                            O: 14,
                            P: 15,
                            Q: 16,
                            R: 17,
                            S: 18,
                            T: 19,
                            U: 20,
                            V: 21,
                            W: 22,
                            X: 23,
                            Y: 24,
                            Z: 25,
                            2: 26,
                            3: 27,
                            4: 28,
                            5: 29,
                            6: 30,
                            7: 31
                        },
                        l = [0, 0, 0, 0, 0, 0, 0, 0],
                        f = function(e, n) {
                            n.length > 10 && (n = "..." + n.substr(-10));
                            var t = new Error("Decoded data is not valid UTF-8. Maybe try base32.decode.asBytes()? Partial data after reading " + e + " bytes: " + n + " <-");
                            throw t.position = e, t
                        },
                        p = function(e) {
                            for (var n, t, r = "", o = e.length, i = 0, a = 0; i < o;)
                                if ((n = e[i++]) <= 127) r += String.fromCharCode(n);
                                else {
                                    n > 191 && n <= 223 ? (t = 31 & n, a = 1) : n <= 239 ? (t = 15 & n, a = 2) : n <= 247 ? (t = 7 & n, a = 3) : f(i, r);
                                    for (var s = 0; s < a; ++s) n = e[i++], (n < 128 || n > 191) && f(i, r), t <<= 6, t += 63 & n;
                                    t >= 55296 && t <= 57343 && f(i, r), t > 1114111 && f(i, r), t <= 65535 ? r += String.fromCharCode(t) : (t -= 65536, r += String.fromCharCode(55296 + (t >> 10)), r += String.fromCharCode(56320 + (1023 & t)))
                                }
                            return r
                        },
                        m = function(e) {
                            if (!/^[A-Z2-7=]+$/.test(e)) throw new Error("Invalid base32 characters");
                            e = e.replace(/=/g, "");
                            for (var n, t, r, o, i, a, s, c, u = [], l = 0, f = e.length, p = 0, m = f >> 3 << 3; p < m;) n = d[e.charAt(p++)], t = d[e.charAt(p++)], r = d[e.charAt(p++)], o = d[e.charAt(p++)], i = d[e.charAt(p++)], a = d[e.charAt(p++)], s = d[e.charAt(p++)], c = d[e.charAt(p++)], u[l++] = 255 & (n << 3 | t >>> 2), u[l++] = 255 & (t << 6 | r << 1 | o >>> 4), u[l++] = 255 & (o << 4 | i >>> 1), u[l++] = 255 & (i << 7 | a << 2 | s >>> 3), u[l++] = 255 & (s << 5 | c);
                            var h = f - m;
                            return 2 === h ? (n = d[e.charAt(p++)], t = d[e.charAt(p++)], u[l++] = 255 & (n << 3 | t >>> 2)) : 4 === h ? (n = d[e.charAt(p++)], t = d[e.charAt(p++)], r = d[e.charAt(p++)], o = d[e.charAt(p++)], u[l++] = 255 & (n << 3 | t >>> 2), u[l++] = 255 & (t << 6 | r << 1 | o >>> 4)) : 5 === h ? (n = d[e.charAt(p++)], t = d[e.charAt(p++)], r = d[e.charAt(p++)], o = d[e.charAt(p++)], i = d[e.charAt(p++)], u[l++] = 255 & (n << 3 | t >>> 2), u[l++] = 255 & (t << 6 | r << 1 | o >>> 4), u[l++] = 255 & (o << 4 | i >>> 1)) : 7 === h && (n = d[e.charAt(p++)], t = d[e.charAt(p++)], r = d[e.charAt(p++)], o = d[e.charAt(p++)], i = d[e.charAt(p++)], a = d[e.charAt(p++)], s = d[e.charAt(p++)], u[l++] = 255 & (n << 3 | t >>> 2), u[l++] = 255 & (t << 6 | r << 1 | o >>> 4), u[l++] = 255 & (o << 4 | i >>> 1), u[l++] = 255 & (i << 7 | a << 2 | s >>> 3)), u
                        },
                        h = function(e) {
                            for (var n, t, r, o, i, a = "", s = e.length, c = 0, d = 5 * parseInt(s / 5); c < d;) n = e.charCodeAt(c++), t = e.charCodeAt(c++), r = e.charCodeAt(c++), o = e.charCodeAt(c++), i = e.charCodeAt(c++), a += u[n >>> 3] + u[31 & (n << 2 | t >>> 6)] + u[t >>> 1 & 31] + u[31 & (t << 4 | r >>> 4)] + u[31 & (r << 1 | o >>> 7)] + u[o >>> 2 & 31] + u[31 & (o << 3 | i >>> 5)] + u[31 & i];
                            var l = s - d;
                            return 1 === l ? (n = e.charCodeAt(c), a += u[n >>> 3] + u[n << 2 & 31] + "======") : 2 === l ? (n = e.charCodeAt(c++), t = e.charCodeAt(c), a += u[n >>> 3] + u[31 & (n << 2 | t >>> 6)] + u[t >>> 1 & 31] + u[t << 4 & 31] + "====") : 3 === l ? (n = e.charCodeAt(c++), t = e.charCodeAt(c++), r = e.charCodeAt(c), a += u[n >>> 3] + u[31 & (n << 2 | t >>> 6)] + u[t >>> 1 & 31] + u[31 & (t << 4 | r >>> 4)] + u[r << 1 & 31] + "===") : 4 === l && (n = e.charCodeAt(c++), t = e.charCodeAt(c++), r = e.charCodeAt(c++), o = e.charCodeAt(c), a += u[n >>> 3] + u[31 & (n << 2 | t >>> 6)] + u[t >>> 1 & 31] + u[31 & (t << 4 | r >>> 4)] + u[31 & (r << 1 | o >>> 7)] + u[o >>> 2 & 31] + u[o << 3 & 31] + "="), a
                        },
                        b = function(e) {
                            var n, t, r, o, i, a, s, c = !1,
                                d = "",
                                f = 0,
                                p = 0,
                                m = 0,
                                h = e.length;
                            do {
                                for (l[0] = l[5], l[1] = l[6], l[2] = l[7], s = p; f < h && s < 5; ++f) a = e.charCodeAt(f), a < 128 ? l[s++] = a : a < 2048 ? (l[s++] = 192 | a >> 6, l[s++] = 128 | 63 & a) : a < 55296 || a >= 57344 ? (l[s++] = 224 | a >> 12, l[s++] = 128 | a >> 6 & 63, l[s++] = 128 | 63 & a) : (a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(++f)), l[s++] = 240 | a >> 18, l[s++] = 128 | a >> 12 & 63, l[s++] = 128 | a >> 6 & 63, l[s++] = 128 | 63 & a);
                                m += s - p, p = s - 5, f === h && ++f, f > h && s < 6 && (c = !0), n = l[0], s > 4 ? (t = l[1], r = l[2], o = l[3], i = l[4], d += u[n >>> 3] + u[31 & (n << 2 | t >>> 6)] + u[t >>> 1 & 31] + u[31 & (t << 4 | r >>> 4)] + u[31 & (r << 1 | o >>> 7)] + u[o >>> 2 & 31] + u[31 & (o << 3 | i >>> 5)] + u[31 & i]) : 1 === s ? d += u[n >>> 3] + u[n << 2 & 31] + "======" : 2 === s ? (t = l[1], d += u[n >>> 3] + u[31 & (n << 2 | t >>> 6)] + u[t >>> 1 & 31] + u[t << 4 & 31] + "====") : 3 === s ? (t = l[1], r = l[2], d += u[n >>> 3] + u[31 & (n << 2 | t >>> 6)] + u[t >>> 1 & 31] + u[31 & (t << 4 | r >>> 4)] + u[r << 1 & 31] + "===") : (t = l[1], r = l[2], o = l[3], d += u[n >>> 3] + u[31 & (n << 2 | t >>> 6)] + u[t >>> 1 & 31] + u[31 & (t << 4 | r >>> 4)] + u[31 & (r << 1 | o >>> 7)] + u[o >>> 2 & 31] + u[o << 3 & 31] + "=")
                            } while (!c);
                            return d
                        },
                        w = function(e) {
                            for (var n, t, r, o, i, a = "", s = e.length, c = 0, d = 5 * parseInt(s / 5); c < d;) n = e[c++], t = e[c++], r = e[c++], o = e[c++], i = e[c++], a += u[n >>> 3] + u[31 & (n << 2 | t >>> 6)] + u[t >>> 1 & 31] + u[31 & (t << 4 | r >>> 4)] + u[31 & (r << 1 | o >>> 7)] + u[o >>> 2 & 31] + u[31 & (o << 3 | i >>> 5)] + u[31 & i];
                            var l = s - d;
                            return 1 === l ? (n = e[c], a += u[n >>> 3] + u[n << 2 & 31] + "======") : 2 === l ? (n = e[c++], t = e[c], a += u[n >>> 3] + u[31 & (n << 2 | t >>> 6)] + u[t >>> 1 & 31] + u[t << 4 & 31] + "====") : 3 === l ? (n = e[c++], t = e[c++], r = e[c], a += u[n >>> 3] + u[31 & (n << 2 | t >>> 6)] + u[t >>> 1 & 31] + u[31 & (t << 4 | r >>> 4)] + u[r << 1 & 31] + "===") : 4 === l && (n = e[c++], t = e[c++], r = e[c++], o = e[c], a += u[n >>> 3] + u[31 & (n << 2 | t >>> 6)] + u[t >>> 1 & 31] + u[31 & (t << 4 | r >>> 4)] + u[31 & (r << 1 | o >>> 7)] + u[o >>> 2 & 31] + u[o << 3 & 31] + "="), a
                        },
                        y = function(e, n) {
                            var t = "string" != typeof e;
                            return t && e.constructor === ArrayBuffer && (e = new Uint8Array(e)), t ? w(e) : n ? h(e) : b(e)
                        },
                        v = function(e, n) {
                            if (!n) return p(m(e));
                            if (!/^[A-Z2-7=]+$/.test(e)) throw new Error("Invalid base32 characters");
                            var t, r, o, i, a, s, c, u, l = "",
                                f = e.indexOf("="); - 1 === f && (f = e.length);
                            for (var h = 0, b = f >> 3 << 3; h < b;) t = d[e.charAt(h++)], r = d[e.charAt(h++)], o = d[e.charAt(h++)], i = d[e.charAt(h++)], a = d[e.charAt(h++)], s = d[e.charAt(h++)], c = d[e.charAt(h++)], u = d[e.charAt(h++)], l += String.fromCharCode(255 & (t << 3 | r >>> 2)) + String.fromCharCode(255 & (r << 6 | o << 1 | i >>> 4)) + String.fromCharCode(255 & (i << 4 | a >>> 1)) + String.fromCharCode(255 & (a << 7 | s << 2 | c >>> 3)) + String.fromCharCode(255 & (c << 5 | u));
                            var w = f - b;
                            return 2 === w ? (t = d[e.charAt(h++)], r = d[e.charAt(h++)], l += String.fromCharCode(255 & (t << 3 | r >>> 2))) : 4 === w ? (t = d[e.charAt(h++)], r = d[e.charAt(h++)], o = d[e.charAt(h++)], i = d[e.charAt(h++)], l += String.fromCharCode(255 & (t << 3 | r >>> 2)) + String.fromCharCode(255 & (r << 6 | o << 1 | i >>> 4))) : 5 === w ? (t = d[e.charAt(h++)], r = d[e.charAt(h++)], o = d[e.charAt(h++)], i = d[e.charAt(h++)], a = d[e.charAt(h++)], l += String.fromCharCode(255 & (t << 3 | r >>> 2)) + String.fromCharCode(255 & (r << 6 | o << 1 | i >>> 4)) + String.fromCharCode(255 & (i << 4 | a >>> 1))) : 7 === w && (t = d[e.charAt(h++)], r = d[e.charAt(h++)], o = d[e.charAt(h++)], i = d[e.charAt(h++)], a = d[e.charAt(h++)], s = d[e.charAt(h++)], c = d[e.charAt(h++)], l += String.fromCharCode(255 & (t << 3 | r >>> 2)) + String.fromCharCode(255 & (r << 6 | o << 1 | i >>> 4)) + String.fromCharCode(255 & (i << 4 | a >>> 1)) + String.fromCharCode(255 & (a << 7 | s << 2 | c >>> 3))), l
                        },
                        g = {
                            encode: y,
                            decode: v
                        };
                    v.asBytes = m, s ? r.exports = g : (a.base32 = g, c && void 0 !== (o = function() {
                        return g
                    }.call(g, t, g, r)) && (r.exports = o))
                }()
            }).call(n, t("./node_modules/process/browser.js"), t("./node_modules/webpack/buildin/global.js"), t("./node_modules/webpack/buildin/module.js")(e))
        },
        "./node_modules/post-robot/src/bridge/bridge.js": function(e, n, t) {
            "use strict";

            function r(e) {
                try {
                    d.a.tunnelWindows[e] && delete d.a.tunnelWindows[e].source
                } catch (e) {}
                delete d.a.tunnelWindows[e]
            }

            function o() {
                for (var e = d.a.tunnelWindows, n = Object.keys(e), t = Array.isArray(n), o = 0, n = t ? n : n[Symbol.iterator]();;) {
                    var i;
                    if (t) {
                        if (o >= n.length) break;
                        i = n[o++]
                    } else {
                        if (o = n.next(), o.done) break;
                        i = o.value
                    }
                    var a = i,
                        c = e[a];
                    try {
                        Object(u.j)(c.source)
                    } catch (e) {
                        r(a);
                        continue
                    }
                    Object(s.x)(c.source) && r(a)
                }
            }

            function i(e) {
                var n = e.name,
                    t = e.source,
                    r = e.canary,
                    i = e.sendMessage;
                return o(), d.a.tunnelWindowId += 1, d.a.tunnelWindows[d.a.tunnelWindowId] = {
                    name: n,
                    source: t,
                    canary: r,
                    sendMessage: i
                }, d.a.tunnelWindowId
            }

            function a(e) {
                return d.a.tunnelWindows[e]
            }
            var s = (t("./node_modules/zalgo-promise/src/index.js"), t("./node_modules/cross-domain-utils/src/index.js")),
                c = t("./node_modules/post-robot/src/conf/index.js"),
                u = t("./node_modules/post-robot/src/lib/index.js"),
                d = t("./node_modules/post-robot/src/global.js");
            d.a.tunnelWindows = d.a.tunnelWindows || {}, d.a.tunnelWindowId = 0, d.a.openTunnelToParent = function(e) {
                var n = e.name,
                    t = e.source,
                    o = e.canary,
                    l = e.sendMessage,
                    f = Object(s.l)(window);
                if (!f) throw new Error("No parent window found to open tunnel to");
                var p = i({
                    name: n,
                    source: t,
                    canary: o,
                    sendMessage: l
                });
                return d.a.send(f, c.b.POST_MESSAGE_NAMES.OPEN_TUNNEL, {
                    name: n,
                    sendMessage: function() {
                        var e = a(p);
                        try {
                            Object(u.j)(e && e.source)
                        } catch (e) {
                            return void r(p)
                        }
                        if (e && e.source && !Object(s.x)(e.source)) {
                            try {
                                e.canary()
                            } catch (e) {
                                return
                            }
                            e.sendMessage.apply(this, arguments)
                        }
                    }
                }, {
                    domain: c.b.WILDCARD
                })
            }
        },
        "./node_modules/post-robot/src/bridge/child.js": function(e, n, t) {
            "use strict";

            function r() {
                return o.a.try(function() {
                    var e = Object(i.k)(window);
                    if (e && Object(u.e)({
                            win: e
                        })) return Object(u.j)(e), d(e).then(function(n) {
                        return n ? window.name ? n[a.b.WINDOW_PROPS.POSTROBOT].openTunnelToParent({
                            name: window.name,
                            source: window,
                            canary: function() {},
                            sendMessage: function(e) {
                                try {
                                    Object(s.j)(window)
                                } catch (e) {
                                    return
                                }
                                if (window && !window.closed) try {
                                    c.a.receiveMessage({
                                        data: e,
                                        origin: this.origin,
                                        source: this.source
                                    })
                                } catch (e) {
                                    o.a.reject(e)
                                }
                            }
                        }).then(function(n) {
                            var t = n.source,
                                r = n.origin,
                                o = n.data;
                            if (t !== e) throw new Error("Source does not match opener");
                            Object(u.i)(t, r, o.sendMessage)
                        }).catch(function(n) {
                            throw Object(u.k)(e, n), n
                        }) : Object(u.k)(e, new Error("Can not register with opener: window does not have a name")) : Object(u.k)(e, new Error("Can not register with opener: no bridge found in opener"))
                    })
                })
            }
            n.a = r;
            var o = t("./node_modules/zalgo-promise/src/index.js"),
                i = t("./node_modules/cross-domain-utils/src/index.js"),
                a = t("./node_modules/post-robot/src/conf/index.js"),
                s = t("./node_modules/post-robot/src/lib/index.js"),
                c = t("./node_modules/post-robot/src/global.js"),
                u = t("./node_modules/post-robot/src/bridge/common.js"),
                d = Object(s.r)(function(e) {
                    return o.a.try(function() {
                        for (var n = Object(i.i)(e), t = Array.isArray(n), r = 0, n = t ? n : n[Symbol.iterator]();;) {
                            var s;
                            if (t) {
                                if (r >= n.length) break;
                                s = n[r++]
                            } else {
                                if (r = n.next(), r.done) break;
                                s = r.value
                            }
                            var c = s;
                            try {
                                if (c && c !== window && Object(i.t)(c) && c[a.b.WINDOW_PROPS.POSTROBOT]) return c
                            } catch (e) {
                                continue
                            }
                        }
                        try {
                            var d = Object(i.h)(e, Object(u.c)(Object(i.f)()));
                            if (!d) return;
                            return Object(i.t)(d) && d[a.b.WINDOW_PROPS.POSTROBOT] ? d : new o.a(function(e) {
                                var n = void 0,
                                    t = void 0;
                                n = setInterval(function() {
                                    if (d && Object(i.t)(d) && d[a.b.WINDOW_PROPS.POSTROBOT]) return clearInterval(n), clearTimeout(t), e(d)
                                }, 100), t = setTimeout(function() {
                                    return clearInterval(n), e()
                                }, 2e3)
                            })
                        } catch (e) {}
                    })
                })
        },
        "./node_modules/post-robot/src/bridge/common.js": function(e, n, t) {
            "use strict";

            function r() {
                return !!Object(b.n)(window).match(/MSIE|trident|edge\/12|edge\/13/i) || !w.a.ALLOW_POSTMESSAGE_POPUP
            }

            function o(e) {
                return !Object(b.u)(window, e)
            }

            function i(e, n) {
                if (e) {
                    if (Object(b.f)() !== Object(b.g)(e)) return !0
                } else if (n && !Object(b.t)(n)) return !0;
                return !1
            }

            function a(e) {
                var n = e.win,
                    t = e.domain;
                return !!r() && (!(t && !i(t, n)) && !(n && !o(n)))
            }

            function s(e) {
                e = e || Object(b.g)(e);
                var n = e.replace(/[^a-zA-Z0-9]+/g, "_");
                return w.b.BRIDGE_NAME_PREFIX + "_" + n
            }

            function c() {
                return Boolean(window.name && window.name === s(Object(b.f)()))
            }

            function u(e) {
                y.a.remoteWindows.set(e, {
                    sendMessagePromise: new h.a
                })
            }

            function d(e) {
                return y.a.remoteWindows.get(e)
            }

            function l(e, n, t) {
                var r = d(e);
                if (!r) throw new Error("Window not found to register sendMessage to");
                var o = function(r, o, i) {
                    if (r !== e) throw new Error("Remote window does not match window");
                    if (!Object(b.z)(i, n)) throw new Error("Remote domain " + i + " does not match domain " + n);
                    t(o)
                };
                r.sendMessagePromise.resolve(o), r.sendMessagePromise = h.a.resolve(o)
            }

            function f(e, n) {
                var t = d(e);
                if (!t) throw new Error("Window not found on which to reject sendMessage");
                t.sendMessagePromise.asyncReject(n)
            }

            function p(e, n, t) {
                var r = Object(b.r)(window, e),
                    o = Object(b.r)(e, window);
                if (!r && !o) throw new Error("Can only send messages to and from parent and popup windows");
                var i = d(e);
                if (!i) throw new Error("Window not found to send message to");
                return i.sendMessagePromise.then(function(r) {
                    return r(e, n, t)
                })
            }
            n.f = r, n.h = o, n.g = i, n.e = a, n.c = s, n.d = c, t.d(n, "a", function() {
                return v
            }), n.j = u, n.b = d, n.i = l, n.k = f, n.l = p;
            var m = t("./node_modules/cross-domain-safe-weakmap/src/index.js"),
                h = t("./node_modules/zalgo-promise/src/index.js"),
                b = t("./node_modules/cross-domain-utils/src/index.js"),
                w = t("./node_modules/post-robot/src/conf/index.js"),
                y = t("./node_modules/post-robot/src/global.js"),
                v = new h.a(function(e) {
                    if (window.document && window.document.body) return e(window.document.body);
                    var n = setInterval(function() {
                        if (window.document && window.document.body) return clearInterval(n), e(window.document.body)
                    }, 10)
                });
            y.a.remoteWindows = y.a.remoteWindows || new m.a
        },
        "./node_modules/post-robot/src/bridge/index.js": function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = (t("./node_modules/post-robot/src/bridge/bridge.js"), t("./node_modules/post-robot/src/bridge/child.js"));
            t.d(n, "openTunnelToOpener", function() {
                return r.a
            });
            var o = t("./node_modules/post-robot/src/bridge/common.js");
            t.d(n, "needsBridgeForBrowser", function() {
                return o.f
            }), t.d(n, "needsBridgeForWin", function() {
                return o.h
            }), t.d(n, "needsBridgeForDomain", function() {
                return o.g
            }), t.d(n, "needsBridge", function() {
                return o.e
            }), t.d(n, "getBridgeName", function() {
                return o.c
            }), t.d(n, "isBridge", function() {
                return o.d
            }), t.d(n, "documentBodyReady", function() {
                return o.a
            }), t.d(n, "registerRemoteWindow", function() {
                return o.j
            }), t.d(n, "findRemoteWindow", function() {
                return o.b
            }), t.d(n, "registerRemoteSendMessage", function() {
                return o.i
            }), t.d(n, "rejectRemoteSendMessage", function() {
                return o.k
            }), t.d(n, "sendBridgeMessage", function() {
                return o.l
            });
            var i = t("./node_modules/post-robot/src/bridge/parent.js");
            t.d(n, "hasBridge", function() {
                return i.b
            }), t.d(n, "openBridge", function() {
                return i.d
            }), t.d(n, "linkUrl", function() {
                return i.c
            }), t.d(n, "destroyBridges", function() {
                return i.a
            })
        },
        "./node_modules/post-robot/src/bridge/interface.js": function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = t("./node_modules/post-robot/src/bridge/index.js");
            t.d(n, "openBridge", function() {
                return r.openBridge
            }), t.d(n, "linkUrl", function() {
                return r.linkUrl
            }), t.d(n, "isBridge", function() {
                return r.isBridge
            }), t.d(n, "needsBridge", function() {
                return r.needsBridge
            }), t.d(n, "needsBridgeForBrowser", function() {
                return r.needsBridgeForBrowser
            }), t.d(n, "hasBridge", function() {
                return r.hasBridge
            }), t.d(n, "needsBridgeForWin", function() {
                return r.needsBridgeForWin
            }), t.d(n, "needsBridgeForDomain", function() {
                return r.needsBridgeForDomain
            }), t.d(n, "openTunnelToOpener", function() {
                return r.openTunnelToOpener
            }), t.d(n, "destroyBridges", function() {
                return r.destroyBridges
            })
        },
        "./node_modules/post-robot/src/bridge/parent.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                m.a.on(f.b.POST_MESSAGE_NAMES.OPEN_TUNNEL, {
                    window: e,
                    domain: n
                }, function(e) {
                    var t = e.origin,
                        r = e.data;
                    if (t !== n) throw new Error("Domain " + n + " does not match origin " + t);
                    if (!r.name) throw new Error("Register window expected to be passed window name");
                    if (!r.sendMessage) throw new Error("Register window expected to be passed sendMessage method");
                    if (!m.a.popupWindowsByName[r.name]) throw new Error("Window with name " + r.name + " does not exist, or was not opened by this window");
                    if (!m.a.popupWindowsByName[r.name].domain) throw new Error("We do not have a registered domain for window " + r.name);
                    if (m.a.popupWindowsByName[r.name].domain !== t) throw new Error("Message origin " + t + " does not matched registered window origin " + m.a.popupWindowsByName[r.name].domain);
                    return Object(h.i)(m.a.popupWindowsByName[r.name].win, n, r.sendMessage), {
                        sendMessage: function(e) {
                            if (window && !window.closed) {
                                var n = m.a.popupWindowsByName[r.name];
                                if (n) try {
                                    m.a.receiveMessage({
                                        data: e,
                                        origin: n.domain,
                                        source: n.win
                                    })
                                } catch (e) {
                                    d.a.reject(e)
                                }
                            }
                        }
                    }
                })
            }

            function o(e, n) {
                var t = document.createElement("iframe");
                return t.setAttribute("name", e), t.setAttribute("id", e), t.setAttribute("style", "display: none; margin: 0; padding: 0; border: 0px none; overflow: hidden;"), t.setAttribute("frameborder", "0"), t.setAttribute("border", "0"), t.setAttribute("scrolling", "no"), t.setAttribute("allowTransparency", "true"), t.setAttribute("tabindex", "-1"), t.setAttribute("hidden", "true"), t.setAttribute("title", ""), t.setAttribute("role", "presentation"), t.src = n, t
            }

            function i(e, n) {
                return n = n || Object(l.g)(e), Boolean(m.a.bridges[n])
            }

            function a(e, n) {
                return n = n || Object(l.g)(e), m.a.bridges[n] ? m.a.bridges[n] : (m.a.bridges[n] = d.a.try(function() {
                    if (Object(l.f)() === n) throw new Error("Can not open bridge on the same domain as current domain: " + n);
                    var t = Object(h.c)(n);
                    if (Object(l.h)(window, t)) throw new Error("Frame with name " + t + " already exists on page");
                    var i = o(t, e);
                    return m.a.bridgeFrames[n] = i, h.a.then(function(t) {
                        t.appendChild(i);
                        var o = i.contentWindow;
                        return r(o, n), new d.a(function(e, n) {
                            i.onload = e, i.onerror = n
                        }).then(function() {
                            return Object(p.k)(o, f.a.BRIDGE_TIMEOUT, "Bridge " + e)
                        }).then(function() {
                            return o
                        })
                    })
                }), m.a.bridges[n])
            }

            function s(e, n) {
                var t = m.a.popupWindowsByWin.get(e);
                t && (t.domain = Object(l.g)(n), Object(h.j)(e))
            }

            function c() {
                for (var e = Object.keys(m.a.bridgeFrames), n = Array.isArray(e), t = 0, e = n ? e : e[Symbol.iterator]();;) {
                    var r;
                    if (n) {
                        if (t >= e.length) break;
                        r = e[t++]
                    } else {
                        if (t = e.next(), t.done) break;
                        r = t.value
                    }
                    var o = r,
                        i = m.a.bridgeFrames[o];
                    i.parentNode && i.parentNode.removeChild(i)
                }
                m.a.bridgeFrames = {}, m.a.bridges = {}
            }
            n.b = i, n.d = a, n.c = s, n.a = c;
            var u = t("./node_modules/cross-domain-safe-weakmap/src/index.js"),
                d = t("./node_modules/zalgo-promise/src/index.js"),
                l = t("./node_modules/cross-domain-utils/src/index.js"),
                f = t("./node_modules/post-robot/src/conf/index.js"),
                p = t("./node_modules/post-robot/src/lib/index.js"),
                m = t("./node_modules/post-robot/src/global.js"),
                h = t("./node_modules/post-robot/src/bridge/common.js");
            m.a.bridges = m.a.bridges || {}, m.a.bridgeFrames = m.a.bridgeFrames || {}, m.a.popupWindowsByWin = m.a.popupWindowsByWin || new u.a, m.a.popupWindowsByName = m.a.popupWindowsByName || {};
            var b = window.open;
            window.open = function(e, n, t, r) {
                var o = e;
                if (e && 0 === e.indexOf(f.b.MOCK_PROTOCOL)) {
                    var i = e.split("|");
                    o = i[0], e = i[1]
                }
                o && (o = Object(l.g)(o));
                var a = b.call(this, e, n, t, r);
                if (!a) return a;
                e && Object(h.j)(a);
                for (var s = Object.keys(m.a.popupWindowsByName), c = Array.isArray(s), u = 0, s = c ? s : s[Symbol.iterator]();;) {
                    var d;
                    if (c) {
                        if (u >= s.length) break;
                        d = s[u++]
                    } else {
                        if (u = s.next(), u.done) break;
                        d = u.value
                    }
                    var p = d;
                    Object(l.x)(m.a.popupWindowsByName[p].win) && delete m.a.popupWindowsByName[p]
                }
                if (n && a) {
                    var w = m.a.popupWindowsByWin.get(a) || m.a.popupWindowsByName[n] || {};
                    w.name = w.name || n, w.win = w.win || a, w.domain = w.domain || o, m.a.popupWindowsByWin.set(a, w), m.a.popupWindowsByName[n] = w
                }
                return a
            }
        },
        "./node_modules/post-robot/src/clean.js": function(e, n, t) {
            "use strict";

            function r(e) {
                var n = o.a.requestPromises.get(e);
                if (n)
                    for (var t = n, r = Array.isArray(t), i = 0, t = r ? t : t[Symbol.iterator]();;) {
                        var a;
                        if (r) {
                            if (i >= t.length) break;
                            a = t[i++]
                        } else {
                            if (i = t.next(), i.done) break;
                            a = i.value
                        }
                        var s = a;
                        s.reject(new Error("No response from window - cleaned up"))
                    }
                o.a.popupWindowsByWin && o.a.popupWindowsByWin.delete(e), o.a.remoteWindows && o.a.remoteWindows.delete(e), o.a.requestPromises.delete(e), o.a.methods.delete(e), o.a.readyPromises.delete(e)
            }
            n.a = r;
            var o = (t("./node_modules/cross-domain-utils/src/index.js"), t("./node_modules/post-robot/src/global.js"))
        },
        "./node_modules/post-robot/src/compat/ie.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                if (!i.a.ALLOW_POSTMESSAGE_POPUP && !1 === Object(o.u)(e, n)) throw new Error("Can not send and receive post messages between two different windows (disabled to emulate IE)")
            }
            n.a = r;
            var o = t("./node_modules/cross-domain-utils/src/index.js"),
                i = t("./node_modules/post-robot/src/conf/index.js")
        },
        "./node_modules/post-robot/src/compat/index.js": function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = t("./node_modules/post-robot/src/compat/ie.js");
            t.d(n, "emulateIERestrictions", function() {
                return r.a
            })
        },
        "./node_modules/post-robot/src/conf/config.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            });
            var r, o = t("./node_modules/post-robot/src/conf/constants.js"),
                i = {
                    ALLOW_POSTMESSAGE_POPUP: "__ALLOW_POSTMESSAGE_POPUP__" in window ? window.__ALLOW_POSTMESSAGE_POPUP__ : {
                        __IE_POPUP_SUPPORT__: !1,
                        __ALLOW_POSTMESSAGE_POPUP__: !0
                    }.__ALLOW_POSTMESSAGE_POPUP__,
                    BRIDGE_TIMEOUT: 5e3,
                    CHILD_WINDOW_TIMEOUT: 5e3,
                    ACK_TIMEOUT: -1 !== window.navigator.userAgent.match(/MSIE/i) ? 1e4 : 2e3,
                    RES_TIMEOUT: -1,
                    ALLOWED_POST_MESSAGE_METHODS: (r = {}, r[o.a.SEND_STRATEGIES.POST_MESSAGE] = !0, r[o.a.SEND_STRATEGIES.BRIDGE] = !0, r[o.a.SEND_STRATEGIES.GLOBAL] = !0, r),
                    ALLOW_SAME_ORIGIN: !1
                };
            0 === window.location.href.indexOf(o.a.FILE_PROTOCOL) && (i.ALLOW_POSTMESSAGE_POPUP = !0)
        },
        "./node_modules/post-robot/src/conf/constants.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            });
            var r = {
                    POST_MESSAGE_TYPE: {
                        REQUEST: "postrobot_message_request",
                        RESPONSE: "postrobot_message_response",
                        ACK: "postrobot_message_ack"
                    },
                    POST_MESSAGE_ACK: {
                        SUCCESS: "success",
                        ERROR: "error"
                    },
                    POST_MESSAGE_NAMES: {
                        METHOD: "postrobot_method",
                        HELLO: "postrobot_ready",
                        OPEN_TUNNEL: "postrobot_open_tunnel"
                    },
                    WINDOW_TYPES: {
                        FULLPAGE: "fullpage",
                        POPUP: "popup",
                        IFRAME: "iframe"
                    },
                    WINDOW_PROPS: {
                        POSTROBOT: "__postRobot__"
                    },
                    SERIALIZATION_TYPES: {
                        METHOD: "postrobot_method",
                        ERROR: "postrobot_error",
                        PROMISE: "postrobot_promise",
                        ZALGO_PROMISE: "postrobot_zalgo_promise",
                        REGEX: "regex"
                    },
                    SEND_STRATEGIES: {
                        POST_MESSAGE: "postrobot_post_message",
                        BRIDGE: "postrobot_bridge",
                        GLOBAL: "postrobot_global"
                    },
                    MOCK_PROTOCOL: "mock:",
                    FILE_PROTOCOL: "file:",
                    BRIDGE_NAME_PREFIX: "__postrobot_bridge__",
                    POSTROBOT_PROXY: "__postrobot_proxy__",
                    WILDCARD: "*"
                },
                o = {
                    METHOD: "postrobot_method",
                    HELLO: "postrobot_hello",
                    OPEN_TUNNEL: "postrobot_open_tunnel"
                };
            Object.keys(o).map(function(e) {
                return o[e]
            })
        },
        "./node_modules/post-robot/src/conf/index.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/post-robot/src/conf/config.js");
            t.d(n, "a", function() {
                return r.a
            });
            var o = t("./node_modules/post-robot/src/conf/constants.js");
            t.d(n, "b", function() {
                return o.a
            })
        },
        "./node_modules/post-robot/src/drivers/index.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/post-robot/src/drivers/receive/index.js");
            t.d(n, "d", function() {
                return r.a
            }), t.d(n, "f", function() {
                return r.b
            });
            var o = t("./node_modules/post-robot/src/drivers/send/index.js");
            t.d(n, "g", function() {
                return o.a
            });
            var i = t("./node_modules/post-robot/src/drivers/listeners.js");
            t.d(n, "a", function() {
                return i.a
            }), t.d(n, "b", function() {
                return i.b
            }), t.d(n, "c", function() {
                return i.c
            }), t.d(n, "e", function() {
                return i.g
            })
        },
        "./node_modules/post-robot/src/drivers/listeners.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                f.a.responseListeners[e] = n
            }

            function o(e) {
                return f.a.responseListeners[e]
            }

            function i(e) {
                delete f.a.responseListeners[e]
            }

            function a(e) {
                f.a.erroredResponseListeners[e] = !0
            }

            function s(e) {
                return Boolean(f.a.erroredResponseListeners[e])
            }

            function c(e) {
                var n = e.name,
                    t = e.win,
                    r = e.domain;
                if (t === m.b.WILDCARD && (t = null), r === m.b.WILDCARD && (r = null), !n) throw new Error("Name required to get request listener");
                var o = f.a.requestListeners[n];
                if (o)
                    for (var i = [t, f.a.WINDOW_WILDCARD], a = 0; a < i.length; a++) {
                        var s = i[a],
                            c = s && o.get(s);
                        if (c) {
                            if (r && "string" == typeof r) {
                                if (c[r]) return c[r];
                                if (c[h])
                                    for (var u = c[h], d = Array.isArray(u), p = 0, u = d ? u : u[Symbol.iterator]();;) {
                                        var b;
                                        if (d) {
                                            if (p >= u.length) break;
                                            b = u[p++]
                                        } else {
                                            if (p = u.next(), p.done) break;
                                            b = p.value
                                        }
                                        var w = b,
                                            y = w.regex,
                                            v = w.listener;
                                        if (Object(l.z)(y, r)) return v
                                    }
                            }
                            if (c[m.b.WILDCARD]) return c[m.b.WILDCARD]
                        }
                    }
            }

            function u(e, n) {
                var t = e.name,
                    r = e.win,
                    o = e.domain;
                if (!t || "string" != typeof t) throw new Error("Name required to add request listener");
                if (Array.isArray(r)) {
                    for (var i = [], a = r, s = Array.isArray(a), l = 0, a = s ? a : a[Symbol.iterator]();;) {
                        var b;
                        if (s) {
                            if (l >= a.length) break;
                            b = a[l++]
                        } else {
                            if (l = a.next(), l.done) break;
                            b = l.value
                        }
                        var w = b;
                        i.push(u({
                            name: t,
                            domain: o,
                            win: w
                        }, n))
                    }
                    return {
                        cancel: function() {
                            for (var e = i, n = Array.isArray(e), t = 0, e = n ? e : e[Symbol.iterator]();;) {
                                var r;
                                if (n) {
                                    if (t >= e.length) break;
                                    r = e[t++]
                                } else {
                                    if (t = e.next(), t.done) break;
                                    r = t.value
                                }
                                r.cancel()
                            }
                        }
                    }
                }
                if (Array.isArray(o)) {
                    for (var y = [], v = o, g = Array.isArray(v), E = 0, v = g ? v : v[Symbol.iterator]();;) {
                        var _;
                        if (g) {
                            if (E >= v.length) break;
                            _ = v[E++]
                        } else {
                            if (E = v.next(), E.done) break;
                            _ = E.value
                        }
                        var O = _;
                        y.push(u({
                            name: t,
                            win: r,
                            domain: O
                        }, n))
                    }
                    return {
                        cancel: function() {
                            for (var e = y, n = Array.isArray(e), t = 0, e = n ? e : e[Symbol.iterator]();;) {
                                var r;
                                if (n) {
                                    if (t >= e.length) break;
                                    r = e[t++]
                                } else {
                                    if (t = e.next(), t.done) break;
                                    r = t.value
                                }
                                r.cancel()
                            }
                        }
                    }
                }
                var j = c({
                    name: t,
                    win: r,
                    domain: o
                });
                if (r && r !== m.b.WILDCARD || (r = f.a.WINDOW_WILDCARD), o = o || m.b.WILDCARD, j) throw r && o ? new Error("Request listener already exists for " + t + " on domain " + o.toString() + " for " + (r === f.a.WINDOW_WILDCARD ? "wildcard" : "specified") + " window") : r ? new Error("Request listener already exists for " + t + " for " + (r === f.a.WINDOW_WILDCARD ? "wildcard" : "specified") + " window") : o ? new Error("Request listener already exists for " + t + " on domain " + o.toString()) : new Error("Request listener already exists for " + t);
                var S = f.a.requestListeners,
                    A = S[t];
                A || (A = new d.a, S[t] = A);
                var x = A.get(r);
                x || (x = {}, A.set(r, x));
                var T = o.toString(),
                    P = x[h],
                    C = void 0;
                return Object(p.e)(o) ? (P || (P = [], x[h] = P), C = {
                    regex: o,
                    listener: n
                }, P.push(C)) : x[T] = n, {
                    cancel: function() {
                        x && (delete x[T], r && 0 === Object.keys(x).length && A.delete(r), C && P.splice(P.indexOf(C, 1)))
                    }
                }
            }
            n.b = r, n.e = o, n.c = i, n.g = a, n.f = s, n.d = c, n.a = u;
            var d = (t("./node_modules/zalgo-promise/src/index.js"), t("./node_modules/cross-domain-safe-weakmap/src/index.js")),
                l = t("./node_modules/cross-domain-utils/src/index.js"),
                f = t("./node_modules/post-robot/src/global.js"),
                p = t("./node_modules/post-robot/src/lib/index.js"),
                m = t("./node_modules/post-robot/src/conf/index.js");
            f.a.responseListeners = f.a.responseListeners || {}, f.a.requestListeners = f.a.requestListeners || {}, f.a.WINDOW_WILDCARD = f.a.WINDOW_WILDCARD || new function() {}, f.a.erroredResponseListeners = f.a.erroredResponseListeners || {};
            var h = "__domain_regex__"
        },
        "./node_modules/post-robot/src/drivers/receive/index.js": function(e, n, t) {
            "use strict";

            function r(e) {
                var n = void 0;
                try {
                    n = Object(u.f)(e)
                } catch (e) {
                    return
                }
                if (n && "object" === (void 0 === n ? "undefined" : f(n)) && null !== n && (n = n[c.b.WINDOW_PROPS.POSTROBOT]) && "object" === (void 0 === n ? "undefined" : f(n)) && null !== n && n.type && "string" == typeof n.type && l.a[n.type]) return n
            }

            function o(e) {
                if (!window || window.closed) throw new Error("Message recieved in closed window");
                try {
                    if (!e.source) return
                } catch (e) {
                    return
                }
                var n = e.source,
                    t = e.origin,
                    o = e.data,
                    i = r(o);
                if (i) {
                    if (!i.sourceDomain || "string" != typeof i.sourceDomain) throw new Error("Expected message to have sourceDomain");
                    if (0 !== i.sourceDomain.indexOf(c.b.MOCK_PROTOCOL) && 0 !== i.sourceDomain.indexOf(c.b.FILE_PROTOCOL) || (t = i.sourceDomain), -1 === d.a.receivedMessages.indexOf(i.id)) {
                        d.a.receivedMessages.push(i.id);
                        Object(s.x)(n) && !i.fireAndForget || (i.data && (i.data = Object(u.b)(n, t, i.data)), l.a[i.type](n, t, i))
                    }
                }
            }

            function i(e) {
                try {
                    Object(u.j)(e.source)
                } catch (e) {
                    return
                }
                var n = {
                    source: e.source || e.sourceElement,
                    origin: e.origin || e.originalEvent && e.originalEvent.origin,
                    data: e.data
                };
                if ({
                        __IE_POPUP_SUPPORT__: !1,
                        __ALLOW_POSTMESSAGE_POPUP__: !0
                    }.__IE_POPUP_SUPPORT__) try {
                    t("./node_modules/post-robot/src/compat/index.js").emulateIERestrictions(n.source, window)
                } catch (e) {
                    return
                }
                o(n)
            }

            function a() {
                Object(u.a)(window, "message", i)
            }
            n.b = i, n.a = a;
            var s = t("./node_modules/cross-domain-utils/src/index.js"),
                c = t("./node_modules/post-robot/src/conf/index.js"),
                u = t("./node_modules/post-robot/src/lib/index.js"),
                d = t("./node_modules/post-robot/src/global.js"),
                l = t("./node_modules/post-robot/src/drivers/receive/types.js"),
                f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
            d.a.receivedMessages = d.a.receivedMessages || [], d.a.receiveMessage = o
        },
        "./node_modules/post-robot/src/drivers/receive/types.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return l
            });
            var r, o = t("./node_modules/zalgo-promise/src/index.js"),
                i = t("./node_modules/cross-domain-utils/src/index.js"),
                a = t("./node_modules/post-robot/src/conf/index.js"),
                s = t("./node_modules/post-robot/src/lib/index.js"),
                c = t("./node_modules/post-robot/src/drivers/send/index.js"),
                u = t("./node_modules/post-robot/src/drivers/listeners.js"),
                d = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                },
                l = (r = {}, r[a.b.POST_MESSAGE_TYPE.ACK] = function(e, n, t) {
                    if (!Object(u.f)(t.hash)) {
                        var r = Object(u.e)(t.hash);
                        if (!r) throw new Error("No handler found for post message ack for message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                        if (!Object(i.z)(r.domain, n)) throw new Error("Ack origin " + n + " does not match domain " + r.domain.toString());
                        r.ack = !0
                    }
                }, r[a.b.POST_MESSAGE_TYPE.REQUEST] = function(e, n, t) {
                    function r(r) {
                        return t.fireAndForget || Object(i.x)(e) ? o.a.resolve() : Object(c.a)(e, d({
                            target: t.originalSource,
                            hash: t.hash,
                            name: t.name
                        }, r), n)
                    }
                    var l = Object(u.d)({
                        name: t.name,
                        win: e,
                        domain: n
                    });
                    return o.a.all([r({
                        type: a.b.POST_MESSAGE_TYPE.ACK
                    }), o.a.try(function() {
                        if (!l) throw new Error("No handler found for post message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                        if (!Object(i.z)(l.domain, n)) throw new Error("Request origin " + n + " does not match domain " + l.domain.toString());
                        var r = t.data;
                        return l.handler({
                            source: e,
                            origin: n,
                            data: r
                        })
                    }).then(function(e) {
                        return r({
                            type: a.b.POST_MESSAGE_TYPE.RESPONSE,
                            ack: a.b.POST_MESSAGE_ACK.SUCCESS,
                            data: e
                        })
                    }, function(e) {
                        var n = Object(s.p)(e).replace(/^Error: /, ""),
                            t = e.code;
                        return r({
                            type: a.b.POST_MESSAGE_TYPE.RESPONSE,
                            ack: a.b.POST_MESSAGE_ACK.ERROR,
                            error: n,
                            code: t
                        })
                    })]).then(s.j).catch(function(e) {
                        if (l && l.handleError) return l.handleError(e);
                        throw e
                    })
                }, r[a.b.POST_MESSAGE_TYPE.RESPONSE] = function(e, n, t) {
                    if (!Object(u.f)(t.hash)) {
                        var r = Object(u.e)(t.hash);
                        if (!r) throw new Error("No handler found for post message response for message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                        if (!Object(i.z)(r.domain, n)) throw new Error("Response origin " + n + " does not match domain " + Object(i.B)(r.domain));
                        if (Object(u.c)(t.hash), t.ack === a.b.POST_MESSAGE_ACK.ERROR) {
                            var o = new Error(t.error);
                            return t.code && (o.code = t.code), r.respond(o, null)
                        }
                        if (t.ack === a.b.POST_MESSAGE_ACK.SUCCESS) {
                            var s = t.data || t.response;
                            return r.respond(null, {
                                source: e,
                                origin: n,
                                data: s
                            })
                        }
                    }
                }, r)
        },
        "./node_modules/post-robot/src/drivers/send/index.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = Object(c.q)(),
                    o = Object(c.c)(),
                    a = Object(i.f)(window);
                return d({}, n, t, {
                    sourceDomain: a,
                    id: n.id || r,
                    windowType: o
                })
            }

            function o(e, n, t) {
                return a.a.try(function() {
                    var o;
                    n = r(e, n, {
                        data: Object(c.o)(e, t, n.data),
                        domain: t
                    });
                    if (e === window && !s.a.ALLOW_SAME_ORIGIN) throw new Error("Attemping to send message to self");
                    if (Object(i.x)(e)) throw new Error("Window is closed");
                    var d = [],
                        l = Object(c.g)((o = {}, o[s.b.WINDOW_PROPS.POSTROBOT] = n, o), null, 2);
                    return a.a.map(Object.keys(u.a), function(n) {
                        return a.a.try(function() {
                            if (!s.a.ALLOWED_POST_MESSAGE_METHODS[n]) throw new Error("Strategy disallowed: " + n);
                            return u.a[n](e, l, t)
                        }).then(function() {
                            return d.push(n + ": success"), !0
                        }, function(e) {
                            return d.push(n + ": " + Object(c.p)(e) + "\n"), !1
                        })
                    }).then(function(e) {
                        var t = e.some(Boolean),
                            r = n.type + " " + n.name + " " + (t ? "success" : "error") + ":\n  - " + d.join("\n  - ") + "\n";
                        if (!t) throw new Error(r)
                    })
                })
            }
            n.a = o;
            var i = t("./node_modules/cross-domain-utils/src/index.js"),
                a = t("./node_modules/zalgo-promise/src/index.js"),
                s = t("./node_modules/post-robot/src/conf/index.js"),
                c = t("./node_modules/post-robot/src/lib/index.js"),
                u = t("./node_modules/post-robot/src/drivers/send/strategies.js"),
                d = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }
        },
        "./node_modules/post-robot/src/drivers/send/strategies.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return a
            });
            var r = t("./node_modules/cross-domain-utils/src/index.js"),
                o = t("./node_modules/post-robot/src/conf/index.js"),
                i = t("./node_modules/post-robot/src/lib/index.js"),
                a = {};
            if (a[o.b.SEND_STRATEGIES.POST_MESSAGE] = function(e, n, i) {
                    if ({
                            __IE_POPUP_SUPPORT__: !1,
                            __ALLOW_POSTMESSAGE_POPUP__: !0
                        }.__IE_POPUP_SUPPORT__) try {
                        t("./node_modules/post-robot/src/compat/index.js").emulateIERestrictions(window, e)
                    } catch (e) {
                        return
                    }
                    var a = void 0;
                    a = Array.isArray(i) ? i : "string" == typeof i ? [i] : [o.b.WILDCARD], a = a.map(function(n) {
                        if (0 === n.indexOf(o.b.MOCK_PROTOCOL)) {
                            if (window.location.protocol === o.b.FILE_PROTOCOL) return o.b.WILDCARD;
                            if (!Object(r.o)(e)) throw new Error("Attempting to send messsage to mock domain " + n + ", but window is actually cross-domain");
                            return Object(r.b)(e)
                        }
                        return 0 === n.indexOf(o.b.FILE_PROTOCOL) ? o.b.WILDCARD : n
                    }), a.forEach(function(t) {
                        return e.postMessage(n, t)
                    })
                }, {
                    __IE_POPUP_SUPPORT__: !1,
                    __ALLOW_POSTMESSAGE_POPUP__: !0
                }.__IE_POPUP_SUPPORT__) {
                var s = t("./node_modules/post-robot/src/bridge/index.js"),
                    c = s.sendBridgeMessage,
                    u = s.needsBridgeForBrowser,
                    d = s.isBridge;
                a[o.b.SEND_STRATEGIES.BRIDGE] = function(e, n, t) {
                    if (u() || d()) {
                        if (Object(r.t)(e)) throw new Error("Post message through bridge disabled between same domain windows");
                        if (!1 !== Object(r.u)(window, e)) throw new Error("Can only use bridge to communicate between two different windows, not between frames");
                        return c(e, n, t)
                    }
                }
            }(({
                __IE_POPUP_SUPPORT__: !1,
                __ALLOW_POSTMESSAGE_POPUP__: !0
            }).__IE_POPUP_SUPPORT__ || {
                __IE_POPUP_SUPPORT__: !1,
                __ALLOW_POSTMESSAGE_POPUP__: !0
            }.__GLOBAL_MESSAGE_SUPPORT__) && (a[o.b.SEND_STRATEGIES.GLOBAL] = function(e, n) {
                if (Object(i.i)()) {
                    if (!Object(r.t)(e)) throw new Error("Post message through global disabled between different domain windows");
                    if (!1 !== Object(r.u)(window, e)) throw new Error("Can only use global to communicate between two different windows, not between frames");
                    var t = e[o.b.WINDOW_PROPS.POSTROBOT];
                    if (!t) throw new Error("Can not find postRobot global on foreign window");
                    return t.receiveMessage({
                        source: window,
                        origin: Object(r.f)(),
                        data: n
                    })
                }
            })
        },
        "./node_modules/post-robot/src/global.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return o
            });
            var r = t("./node_modules/post-robot/src/conf/index.js"),
                o = window[r.b.WINDOW_PROPS.POSTROBOT] = window[r.b.WINDOW_PROPS.POSTROBOT] || {};
            o.registerSelf = function() {}
        },
        "./node_modules/post-robot/src/index.js": function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = t("./node_modules/post-robot/src/interface.js");
            t.d(n, "cleanUpWindow", function() {
                return r.cleanUpWindow
            }), t.d(n, "Promise", function() {
                return r.Promise
            }), t.d(n, "bridge", function() {
                return r.bridge
            }), t.d(n, "init", function() {
                return r.init
            }), t.d(n, "parent", function() {
                return r.parent
            }), t.d(n, "send", function() {
                return r.send
            }), t.d(n, "request", function() {
                return r.request
            }), t.d(n, "sendToParent", function() {
                return r.sendToParent
            }), t.d(n, "client", function() {
                return r.client
            }), t.d(n, "on", function() {
                return r.on
            }), t.d(n, "listen", function() {
                return r.listen
            }), t.d(n, "once", function() {
                return r.once
            }), t.d(n, "listener", function() {
                return r.listener
            }), t.d(n, "CONFIG", function() {
                return r.CONFIG
            }), t.d(n, "CONSTANTS", function() {
                return r.CONSTANTS
            }), t.d(n, "disable", function() {
                return r.disable
            }), n.default = r
        },
        "./node_modules/post-robot/src/interface.js": function(e, n, t) {
            "use strict";

            function r() {
                a.a.initialized || (Object(i.d)(), {
                    __IE_POPUP_SUPPORT__: !1,
                    __ALLOW_POSTMESSAGE_POPUP__: !0
                }.__IE_POPUP_SUPPORT__ && t("./node_modules/post-robot/src/bridge/index.js").openTunnelToOpener(), Object(o.d)(), Object(o.h)({
                    on: s.g,
                    send: s.k
                })), a.a.initialized = !0
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), t.d(n, "bridge", function() {
                return d
            }), n.init = r;
            var o = t("./node_modules/post-robot/src/lib/index.js"),
                i = t("./node_modules/post-robot/src/drivers/index.js"),
                a = t("./node_modules/post-robot/src/global.js"),
                s = t("./node_modules/post-robot/src/public/index.js");
            t.d(n, "parent", function() {
                return s.i
            }), t.d(n, "send", function() {
                return s.k
            }), t.d(n, "request", function() {
                return s.j
            }), t.d(n, "sendToParent", function() {
                return s.l
            }), t.d(n, "client", function() {
                return s.c
            }), t.d(n, "on", function() {
                return s.g
            }), t.d(n, "listen", function() {
                return s.e
            }), t.d(n, "once", function() {
                return s.h
            }), t.d(n, "listener", function() {
                return s.f
            }), t.d(n, "CONFIG", function() {
                return s.a
            }), t.d(n, "CONSTANTS", function() {
                return s.b
            }), t.d(n, "disable", function() {
                return s.d
            });
            var c = t("./node_modules/post-robot/src/clean.js");
            t.d(n, "cleanUpWindow", function() {
                return c.a
            });
            var u = t("./node_modules/zalgo-promise/src/index.js");
            t.d(n, "Promise", function() {
                return u.a
            });
            var d = {
                __IE_POPUP_SUPPORT__: !1,
                __ALLOW_POSTMESSAGE_POPUP__: !0
            }.__IE_POPUP_SUPPORT__ ? t("./node_modules/post-robot/src/bridge/interface.js") : null;
            r()
        },
        "./node_modules/post-robot/src/lib/index.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/post-robot/src/lib/util.js");
            t.d(n, "a", function() {
                return r.a
            }), t.d(n, "c", function() {
                return r.b
            }), t.d(n, "e", function() {
                return r.c
            }), t.d(n, "f", function() {
                return r.d
            }), t.d(n, "g", function() {
                return r.e
            }), t.d(n, "i", function() {
                return r.f
            }), t.d(n, "j", function() {
                return r.g
            }), t.d(n, "l", function() {
                return r.h
            }), t.d(n, "m", function() {
                return r.j
            }), t.d(n, "p", function() {
                return r.k
            }), t.d(n, "q", function() {
                return r.l
            }), t.d(n, "r", function() {
                return r.m
            });
            var o = t("./node_modules/post-robot/src/lib/serialize.js");
            t.d(n, "b", function() {
                return o.a
            }), t.d(n, "h", function() {
                return o.b
            }), t.d(n, "o", function() {
                return o.c
            });
            var i = t("./node_modules/post-robot/src/lib/ready.js");
            t.d(n, "d", function() {
                return i.a
            }), t.d(n, "k", function() {
                return i.b
            }), t.d(n, "n", function() {
                return i.c
            })
        },
        "./node_modules/post-robot/src/lib/ready.js": function(e, n, t) {
            "use strict";

            function r(e) {
                l.a.on(d.b.POST_MESSAGE_NAMES.HELLO, {
                    domain: d.b.WILDCARD
                }, function(n) {
                    var t = n.source,
                        r = n.origin;
                    return e({
                        source: t,
                        origin: r
                    })
                })
            }

            function o(e) {
                return l.a.send(e, d.b.POST_MESSAGE_NAMES.HELLO, {}, {
                    domain: d.b.WILDCARD,
                    timeout: -1
                }).then(function(e) {
                    return {
                        origin: e.origin
                    }
                })
            }

            function i() {
                r(function(e) {
                    var n = e.source,
                        t = e.origin,
                        r = l.a.readyPromises.get(n) || new u.a;
                    r.resolve({
                        origin: t
                    }), l.a.readyPromises.set(n, r)
                });
                var e = Object(c.d)();
                e && o(e).catch(f.g)
            }

            function a(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Window",
                    r = l.a.readyPromises.get(e);
                return r || (r = new u.a, l.a.readyPromises.set(e, r), -1 !== n && setTimeout(function() {
                    return r.reject(new Error(t + " did not load after " + n + "ms"))
                }, n), r)
            }
            n.c = o, n.a = i, n.b = a;
            var s = t("./node_modules/cross-domain-safe-weakmap/src/index.js"),
                c = t("./node_modules/cross-domain-utils/src/index.js"),
                u = t("./node_modules/zalgo-promise/src/index.js"),
                d = t("./node_modules/post-robot/src/conf/index.js"),
                l = t("./node_modules/post-robot/src/global.js"),
                f = t("./node_modules/post-robot/src/lib/util.js");
            l.a.readyPromises = l.a.readyPromises || new s.a
        },
        "./node_modules/post-robot/src/lib/serialize.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                return "object" === (void 0 === e ? "undefined" : _(e)) && null !== e && e.__type__ === n
            }

            function o(e, n, t, r) {
                var o = Object(E.l)(),
                    i = g.a.methods.get(e);
                return i || (i = {}, g.a.methods.set(e, i)), i[o] = {
                    domain: n,
                    method: t
                }, {
                    __type__: v.b.SERIALIZATION_TYPES.METHOD,
                    __id__: o,
                    __name__: r
                }
            }

            function i(e) {
                return {
                    __type__: v.b.SERIALIZATION_TYPES.ERROR,
                    __message__: Object(E.k)(e),
                    __code__: e.code
                }
            }

            function a(e, n, t, r) {
                return {
                    __type__: v.b.SERIALIZATION_TYPES.PROMISE,
                    __then__: o(e, n, function(e, n) {
                        return t.then(e, n)
                    }, r + ".then")
                }
            }

            function s(e, n, t, r) {
                return {
                    __type__: v.b.SERIALIZATION_TYPES.ZALGO_PROMISE,
                    __then__: o(e, n, function(e, n) {
                        return t.then(e, n)
                    }, r + ".then")
                }
            }

            function c(e) {
                return {
                    __type__: v.b.SERIALIZATION_TYPES.REGEX,
                    __source__: e.source
                }
            }

            function u(e, n, t) {
                return Object(E.i)({
                    obj: t
                }, function(t, r) {
                    return "function" == typeof t ? o(e, n, t, r.toString()) : t instanceof Error ? i(t) : window.Promise && t instanceof window.Promise ? a(e, n, t, r.toString()) : y.a.isPromise(t) ? s(e, n, t, r.toString()) : Object(E.c)(t) ? c(t) : void 0
                }).obj
            }

            function d(e, n, t) {
                function r() {
                    var r = Array.prototype.slice.call(arguments);
                    return g.a.send(e, v.b.POST_MESSAGE_NAMES.METHOD, {
                        id: t.__id__,
                        name: t.__name__,
                        args: r
                    }, {
                        domain: n,
                        timeout: -1
                    }).then(function(e) {
                        return e.data.result
                    }, function(e) {
                        throw e
                    })
                }
                return r.__name__ = t.__name__, r.__xdomain__ = !0, r.source = e, r.origin = n, r
            }

            function l(e, n, t) {
                var r = new Error(t.__message__);
                return t.__code__ && (r.code = t.__code__), r
            }

            function f(e, n, t) {
                return new y.a(function(r, o) {
                    return d(e, n, t.__then__)(r, o)
                })
            }

            function p(e, n, t) {
                return window.Promise ? new window.Promise(function(r, o) {
                    return d(e, n, t.__then__)(r, o)
                }) : f(e, n, t)
            }

            function m(e, n, t) {
                return new RegExp(t.__source__)
            }

            function h(e, n, t) {
                return Object(E.i)({
                    obj: t
                }, function(t) {
                    if ("object" === (void 0 === t ? "undefined" : _(t)) && null !== t) return r(t, v.b.SERIALIZATION_TYPES.METHOD) ? d(e, n, t) : r(t, v.b.SERIALIZATION_TYPES.ERROR) ? l(e, n, t) : r(t, v.b.SERIALIZATION_TYPES.PROMISE) ? p(e, n, t) : r(t, v.b.SERIALIZATION_TYPES.ZALGO_PROMISE) ? f(e, n, t) : r(t, v.b.SERIALIZATION_TYPES.REGEX) ? m(e, n, t) : void 0
                }).obj
            }
            t.d(n, "b", function() {
                return O
            }), n.c = u, n.a = h;
            var b = t("./node_modules/cross-domain-safe-weakmap/src/index.js"),
                w = t("./node_modules/cross-domain-utils/src/index.js"),
                y = t("./node_modules/zalgo-promise/src/index.js"),
                v = t("./node_modules/post-robot/src/conf/index.js"),
                g = t("./node_modules/post-robot/src/global.js"),
                E = t("./node_modules/post-robot/src/lib/util.js"),
                _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
            g.a.methods = g.a.methods || new b.a;
            var O = Object(E.h)(function() {
                g.a.on(v.b.POST_MESSAGE_NAMES.METHOD, {
                    origin: v.b.WILDCARD
                }, function(e) {
                    var n = e.source,
                        t = e.origin,
                        r = e.data,
                        o = g.a.methods.get(n);
                    if (!o) throw new Error("Could not find any methods this window has privileges to call");
                    var i = o[r.id];
                    if (!i) throw new Error("Could not find method with id: " + r.id);
                    if (!Object(w.z)(i.domain, t)) throw new Error("Method domain " + i.domain + " does not match origin " + t);
                    return y.a.try(function() {
                        return i.method.apply({
                            source: n,
                            origin: t,
                            data: r
                        }, r.args)
                    }).then(function(e) {
                        return {
                            result: e,
                            id: r.id,
                            name: r.name
                        }
                    })
                })
            })
        },
        "./node_modules/post-robot/src/lib/util.js": function(e, n, t) {
            "use strict";

            function r(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                if (n >= 3) return "stringifyError stack overflow";
                try {
                    if (!e) return "<unknown error: " + Object.prototype.toString.call(e) + ">";
                    if ("string" == typeof e) return e;
                    if (e instanceof Error) {
                        var t = e && e.stack,
                            o = e && e.message;
                        if (t && o) return -1 !== t.indexOf(o) ? t : o + "\n" + t;
                        if (t) return t;
                        if (o) return o
                    }
                    return "function" == typeof e.toString ? e.toString() : Object.prototype.toString.call(e)
                } catch (e) {
                    return "Error while stringifying error: " + r(e, n + 1)
                }
            }

            function o() {}

            function i(e, n, t) {
                return e.addEventListener ? e.addEventListener(n, t) : e.attachEvent("on" + n, t), {
                    cancel: function() {
                        e.removeEventListener ? e.removeEventListener(n, t) : e.detachEvent("on" + n, t)
                    }
                }
            }

            function a() {
                var e = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return e.charAt(Math.floor(Math.random() * e.length))
                })
            }

            function s(e, n) {
                for (var t = 0; t < e.length; t++) n(e[t], t)
            }

            function c(e, n) {
                for (var t in e) e.hasOwnProperty(t) && n(e[t], t)
            }

            function u(e, n) {
                Array.isArray(e) ? s(e, n) : "object" === (void 0 === e ? "undefined" : g(e)) && null !== e && c(e, n)
            }

            function d(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                if (t >= 100) throw new Error("Self-referential object passed, or object contained too many layers");
                var r = void 0;
                if ("object" !== (void 0 === e ? "undefined" : g(e)) || null === e || Array.isArray(e)) {
                    if (!Array.isArray(e)) throw new TypeError("Invalid type: " + (void 0 === e ? "undefined" : g(e)));
                    r = []
                } else r = {};
                return u(e, function(e, o) {
                    var i = n(e, o);
                    void 0 !== i ? r[o] = i : "object" === (void 0 === e ? "undefined" : g(e)) && null !== e ? r[o] = d(e, n, t + 1) : r[o] = e
                }), r
            }

            function l(e, n) {
                function t() {
                    r = setTimeout(t, n), e.call()
                }
                var r = void 0;
                return r = setTimeout(t, n), {
                    cancel: function() {
                        clearTimeout(r)
                    }
                }
            }

            function f(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            }

            function p() {
                return Object(y.s)() ? v.b.WINDOW_TYPES.POPUP : Object(y.q)() ? v.b.WINDOW_TYPES.IFRAME : v.b.WINDOW_TYPES.FULLPAGE
            }

            function m(e, n, t) {
                var r = void 0,
                    o = void 0;
                try {
                    if ("{}" !== JSON.stringify({}) && (r = Object.prototype.toJSON, delete Object.prototype.toJSON), "{}" !== JSON.stringify({})) throw new Error("Can not correctly serialize JSON objects");
                    if ("[]" !== JSON.stringify([]) && (o = Array.prototype.toJSON, delete Array.prototype.toJSON), "[]" !== JSON.stringify([])) throw new Error("Can not correctly serialize JSON objects")
                } catch (e) {
                    throw new Error("Can not repair JSON.stringify: " + e.message)
                }
                var i = JSON.stringify.call(this, e, n, t);
                try {
                    r && (Object.prototype.toJSON = r), o && (Array.prototype.toJSON = o)
                } catch (e) {
                    throw new Error("Can not repair JSON.stringify: " + e.message)
                }
                return i
            }

            function h(e) {
                return JSON.parse(e)
            }

            function b() {
                return !!Object(y.n)(window).match(/MSIE|trident|edge\/12|edge\/13/i) || !v.a.ALLOW_POSTMESSAGE_POPUP
            }
            n.k = r, t.d(n, "h", function() {
                return E
            }), n.g = o, n.a = i, n.l = a, n.i = d, n.j = l, n.c = f, t.d(n, "m", function() {
                return _
            }), n.b = p, n.e = m, n.d = h, n.f = b;
            var w = t("./node_modules/cross-domain-safe-weakmap/src/index.js"),
                y = t("./node_modules/cross-domain-utils/src/index.js"),
                v = t("./node_modules/post-robot/src/conf/index.js"),
                g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                E = function(e) {
                    if (!e) return e;
                    var n = !1;
                    return function() {
                        if (!n) return n = !0, e.apply(this, arguments)
                    }
                },
                _ = function(e) {
                    var n = new w.a;
                    return function(t) {
                        var r = n.get(t);
                        return void 0 !== r ? r : (r = e.call(this, t), void 0 !== r && n.set(t, r), r)
                    }
                }
        },
        "./node_modules/post-robot/src/public/client.js": function(e, n, t) {
            "use strict";

            function r(e) {
                return c.a.try(function() {
                    if (!e.name) throw new Error("Expected options.name");
                    var n = e.name,
                        t = void 0,
                        r = void 0;
                    if ("string" == typeof e.window) {
                        var o = document.getElementById(e.window);
                        if (!o) throw new Error("Expected options.window " + Object.prototype.toString.call(e.window) + " to be a valid element id");
                        if ("iframe" !== o.tagName.toLowerCase()) throw new Error("Expected options.window " + Object.prototype.toString.call(e.window) + " to be an iframe");
                        if (!o.contentWindow) throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");
                        t = o.contentWindow
                    } else if (e.window instanceof HTMLIFrameElement) {
                        if ("iframe" !== e.window.tagName.toLowerCase()) throw new Error("Expected options.window " + Object.prototype.toString.call(e.window) + " to be an iframe");
                        if (e.window && !e.window.contentWindow) throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");
                        e.window && e.window.contentWindow && (t = e.window.contentWindow)
                    } else t = e.window;
                    if (!t) throw new Error("Expected options.window to be a window object, iframe, or iframe element id.");
                    var i = t;
                    r = e.domain || d.b.WILDCARD;
                    var a = e.name + "_" + Object(f.q)();
                    if (Object(u.x)(i)) throw new Error("Target window is closed");
                    var s = !1,
                        m = p.a.requestPromises.get(i);
                    m || (m = [], p.a.requestPromises.set(i, m));
                    var h = c.a.try(function() {
                        if (Object(u.p)(window, i)) return Object(f.k)(i, e.timeout || d.a.CHILD_WINDOW_TIMEOUT)
                    }).then(function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.origin;
                        if (Object(f.e)(r) && !n) return Object(f.n)(i)
                    }).then(function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            o = t.origin;
                        if (Object(f.e)(r)) {
                            if (!Object(u.z)(r, o)) throw new Error("Remote window domain " + o + " does not match regex: " + r.toString());
                            r = o
                        }
                        if ("string" != typeof r && !Array.isArray(r)) throw new TypeError("Expected domain to be a string or array");
                        var p = r;
                        return new c.a(function(t, r) {
                            var o = void 0;
                            if (e.fireAndForget || (o = {
                                    name: n,
                                    window: i,
                                    domain: p,
                                    respond: function(e, n) {
                                        e || (s = !0, m.splice(m.indexOf(h, 1))), e ? r(e) : t(n)
                                    }
                                }, Object(l.b)(a, o)), Object(l.g)(i, {
                                    type: d.b.POST_MESSAGE_TYPE.REQUEST,
                                    hash: a,
                                    name: n,
                                    data: e.data,
                                    fireAndForget: e.fireAndForget
                                }, p).catch(r), e.fireAndForget) return t();
                            var c = d.a.ACK_TIMEOUT,
                                f = e.timeout || d.a.RES_TIMEOUT,
                                b = 100,
                                w = function t() {
                                    if (!s) {
                                        if (Object(u.x)(i)) return r(o.ack ? new Error("Window closed for " + n + " before response") : new Error("Window closed for " + n + " before ack"));
                                        c = Math.max(c - b, 0), -1 !== f && (f = Math.max(f - b, 0));
                                        if (o.ack) {
                                            if (-1 === f) return;
                                            b = Math.min(f, 2e3)
                                        } else {
                                            if (0 === c) return r(new Error("No ack for postMessage " + n + " in " + Object(u.f)() + " in " + d.a.ACK_TIMEOUT + "ms"));
                                            if (0 === f) return r(new Error("No response for postMessage " + n + " in " + Object(u.f)() + " in " + (e.timeout || d.a.RES_TIMEOUT) + "ms"))
                                        }
                                        setTimeout(t, b)
                                    }
                                };
                            setTimeout(w, b)
                        })
                    });
                    return h.catch(function() {
                        Object(l.e)(a), Object(l.c)(a)
                    }), m.push(h), h
                })
            }

            function o(e, n, t, o) {
                return o = o || {}, o.window = e, o.name = n, o.data = t, r(o)
            }

            function i(e, n, t) {
                var r = Object(u.d)();
                return r ? o(r, e, n, t) : new c.a(function(e, n) {
                    return n(new Error("Window does not have a parent"))
                })
            }

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!e.window) throw new Error("Expected options.window");
                var n = e.window;
                return {
                    send: function(t, r) {
                        return o(n, t, r, e)
                    }
                }
            }
            t.d(n, "c", function() {
                return o
            }), n.b = r, n.d = i, n.a = a;
            var s = t("./node_modules/cross-domain-safe-weakmap/src/index.js"),
                c = t("./node_modules/zalgo-promise/src/index.js"),
                u = t("./node_modules/cross-domain-utils/src/index.js"),
                d = t("./node_modules/post-robot/src/conf/index.js"),
                l = t("./node_modules/post-robot/src/drivers/index.js"),
                f = t("./node_modules/post-robot/src/lib/index.js"),
                p = t("./node_modules/post-robot/src/global.js");
            p.a.requestPromises = p.a.requestPromises || new s.a, p.a.send = o
        },
        "./node_modules/post-robot/src/public/config.js": function(e, n, t) {
            "use strict";

            function r() {
                delete window[o.b.WINDOW_PROPS.POSTROBOT], window.removeEventListener("message", i.f)
            }
            n.c = r;
            var o = t("./node_modules/post-robot/src/conf/index.js"),
                i = t("./node_modules/post-robot/src/drivers/index.js");
            t.d(n, "a", function() {
                return o.a
            }), t.d(n, "b", function() {
                return o.b
            })
        },
        "./node_modules/post-robot/src/public/index.js": function(e, n, t) {
            "use strict";
            t.d(n, "i", function() {
                return s
            });
            var r = t("./node_modules/cross-domain-utils/src/index.js"),
                o = t("./node_modules/post-robot/src/public/client.js");
            t.d(n, "c", function() {
                return o.a
            }), t.d(n, "j", function() {
                return o.b
            }), t.d(n, "k", function() {
                return o.c
            }), t.d(n, "l", function() {
                return o.d
            });
            var i = t("./node_modules/post-robot/src/public/server.js");
            t.d(n, "e", function() {
                return i.a
            }), t.d(n, "f", function() {
                return i.b
            }), t.d(n, "g", function() {
                return i.c
            }), t.d(n, "h", function() {
                return i.d
            });
            var a = t("./node_modules/post-robot/src/public/config.js");
            t.d(n, "a", function() {
                return a.a
            }), t.d(n, "b", function() {
                return a.b
            }), t.d(n, "d", function() {
                return a.c
            });
            var s = Object(r.d)()
        },
        "./node_modules/post-robot/src/public/server.js": function(e, n, t) {
            "use strict";

            function r(e) {
                if (!e.name) throw new Error("Expected options.name");
                if (!e.handler) throw new Error("Expected options.handler");
                var n = e.name,
                    t = e.window,
                    r = e.domain,
                    o = {
                        handler: e.handler,
                        handleError: e.errorHandler || function(e) {
                            throw e
                        },
                        window: t,
                        domain: r || l.b.WILDCARD,
                        name: n
                    },
                    i = Object(d.a)({
                        name: n,
                        win: t,
                        domain: r
                    }, o);
                if (e.once) {
                    var a = o.handler;
                    o.handler = Object(u.l)(function() {
                        return i.cancel(), a.apply(this, arguments)
                    })
                }
                if (o.window && e.errorOnClose) var c = Object(u.m)(function() {
                    t && "object" === (void 0 === t ? "undefined" : p(t)) && Object(s.x)(t) && (c.cancel(), o.handleError(new Error("Post message target window is closed")))
                }, 50);
                return {
                    cancel: function() {
                        i.cancel()
                    }
                }
            }

            function o(e, n, t) {
                return "function" == typeof n && (t = n, n = {}), n = n || {}, n.name = e, n.handler = t || n.handler, r(n)
            }

            function i(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = arguments[2];
                "function" == typeof n && (t = n, n = {}), n = n || {}, t = t || n.handler;
                var o = n.errorHandler,
                    i = new c.a(function(r, i) {
                        n = n || {}, n.name = e, n.once = !0, n.handler = function(e) {
                            if (r(e), t) return t(e)
                        }, n.errorHandler = function(e) {
                            if (i(e), o) return o(e)
                        }
                    }),
                    a = r(n);
                return i.cancel = a.cancel, i
            }

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    on: function(n, t) {
                        return o(n, e, t)
                    }
                }
            }
            t.d(n, "c", function() {
                return o
            }), n.a = r, n.d = i, n.b = a;
            var s = t("./node_modules/cross-domain-utils/src/index.js"),
                c = t("./node_modules/zalgo-promise/src/index.js"),
                u = t("./node_modules/post-robot/src/lib/index.js"),
                d = t("./node_modules/post-robot/src/drivers/index.js"),
                l = t("./node_modules/post-robot/src/conf/index.js"),
                f = t("./node_modules/post-robot/src/global.js"),
                p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
            f.a.on = o
        },
        "./node_modules/process/browser.js": function(e, n) {
            function t() {
                throw new Error("setTimeout has not been defined")
            }

            function r() {
                throw new Error("clearTimeout has not been defined")
            }

            function o(e) {
                if (d === setTimeout) return setTimeout(e, 0);
                if ((d === t || !d) && setTimeout) return d = setTimeout, setTimeout(e, 0);
                try {
                    return d(e, 0)
                } catch (n) {
                    try {
                        return d.call(null, e, 0)
                    } catch (n) {
                        return d.call(this, e, 0)
                    }
                }
            }

            function i(e) {
                if (l === clearTimeout) return clearTimeout(e);
                if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);
                try {
                    return l(e)
                } catch (n) {
                    try {
                        return l.call(null, e)
                    } catch (n) {
                        return l.call(this, e)
                    }
                }
            }

            function a() {
                h && p && (h = !1, p.length ? m = p.concat(m) : b = -1, m.length && s())
            }

            function s() {
                if (!h) {
                    var e = o(a);
                    h = !0;
                    for (var n = m.length; n;) {
                        for (p = m, m = []; ++b < n;) p && p[b].run();
                        b = -1, n = m.length
                    }
                    p = null, h = !1, i(e)
                }
            }

            function c(e, n) {
                this.fun = e, this.array = n
            }

            function u() {}
            var d, l, f = e.exports = {};
            ! function() {
                try {
                    d = "function" == typeof setTimeout ? setTimeout : t
                } catch (e) {
                    d = t
                }
                try {
                    l = "function" == typeof clearTimeout ? clearTimeout : r
                } catch (e) {
                    l = r
                }
            }();
            var p, m = [],
                h = !1,
                b = -1;
            f.nextTick = function(e) {
                var n = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
                m.push(new c(e, n)), 1 !== m.length || h || o(s)
            }, c.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function(e) {
                return []
            }, f.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, f.cwd = function() {
                return "/"
            }, f.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, f.umask = function() {
                return 0
            }
        },
        "./node_modules/webpack/buildin/amd-options.js": function(e, n) {
            (function(n) {
                e.exports = n
            }).call(n, {})
        },
        "./node_modules/webpack/buildin/global.js": function(e, n) {
            var t, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t = function() {
                return this
            }();
            try {
                t = t || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (t = window)
            }
            e.exports = t
        },
        "./node_modules/webpack/buildin/module.js": function(e, n) {
            e.exports = function(e) {
                return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i
                    }
                }), e.webpackPolyfill = 1), e
            }
        },
        "./node_modules/xcomponent/src/component/base.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e) {
                var n = [],
                    t = !1;
                return {
                    set: function(n, r) {
                        return t ? r : (e[n] = r, this.register(function() {
                            delete e[n]
                        }), r)
                    },
                    register: function(e, r) {
                        if ("function" == typeof e && (r = e, e = "<anonymous-cleanup-handler>"), "function" != typeof r) throw new TypeError("Expected to be passed function to clean.register");
                        if (t) return void r();
                        n.push({
                            complete: !1,
                            name: e,
                            run: function() {
                                this.complete || (this.complete = !0, r && r())
                            }
                        })
                    },
                    hasTasks: function() {
                        return Boolean(n.filter(function(e) {
                            return !e.complete
                        }).length)
                    },
                    all: function() {
                        var e = [];
                        for (t = !0; n.length;) e.push(n.pop().run());
                        return i.a.all(e).then(function() {})
                    },
                    run: function(e) {
                        for (var t = [], r = n, o = Array.isArray(r), a = 0, r = o ? r : r[Symbol.iterator]();;) {
                            var c;
                            if (o) {
                                if (a >= r.length) break;
                                c = r[a++]
                            } else {
                                if (a = r.next(), a.done) break;
                                c = a.value
                            }
                            var u = c;
                            u.name === e && t.push(u.run())
                        }
                        return i.a.all(t).then(s.I)
                    }
                }
            }
            t.d(n, "a", function() {
                return c
            });
            var i = t("./node_modules/zalgo-promise/src/index.js"),
                a = t("./node_modules/post-robot/src/index.js"),
                s = (t("./node_modules/cross-domain-utils/src/index.js"), t("./node_modules/xcomponent/src/lib/index.js")),
                c = function() {
                    function e() {
                        r(this, e), this.clean = o(this), this.event = Object(s.s)()
                    }
                    return e.prototype.addProp = function(e, n, t) {
                        Object(s.g)(e, this, n, t)
                    }, e.prototype.on = function(e, n) {
                        return this.event.on(e, n)
                    }, e.prototype.listeners = function() {
                        throw new Error("Expected listeners to be implemented")
                    }, e.prototype.error = function(e) {
                        throw new Error("Expected error to be implemented - got " + Object(s.X)(e))
                    }, e.prototype.listen = function(e, n) {
                        var t = this;
                        if (!e) throw this.component.createError("window to listen to not set");
                        if (!n) throw new Error("Must pass domain to listen to");
                        if (this.listeners)
                            for (var r = this.listeners(), o = Object.keys(r), i = Array.isArray(o), s = 0, o = i ? o : o[Symbol.iterator]();;) {
                                var c, u = function() {
                                    if (i) {
                                        if (s >= o.length) return "break";
                                        c = o[s++]
                                    } else {
                                        if (s = o.next(), s.done) return "break";
                                        c = s.value
                                    }
                                    var u = c,
                                        d = u.replace(/^xcomponent_/, ""),
                                        l = function(e) {
                                            t.error(e)
                                        },
                                        f = Object(a.on)(u, {
                                            window: e,
                                            domain: n,
                                            errorHandler: l
                                        }, function(e) {
                                            var n = e.source,
                                                o = e.data;
                                            return t.component.log("listener_" + d), r[u].call(t, n, o)
                                        }),
                                        p = Object(a.on)(u, {
                                            window: e,
                                            errorHandler: l
                                        }, function(e) {
                                            var r = e.origin;
                                            t.component.logError("unexpected_listener_" + d, {
                                                origin: r,
                                                domain: n.toString()
                                            }), t.error(new Error("Unexpected " + d + " message from domain " + r + " -- expected message from " + n.toString()))
                                        });
                                    t.clean.register(function() {
                                        f.cancel(), p.cancel()
                                    })
                                }();
                                if ("break" === u) break
                            }
                    }, e
                }()
        },
        "./node_modules/xcomponent/src/component/child/index.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, n) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != typeof n && "function" != typeof n ? e : n
            }

            function i(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
            }
            t.d(n, "a", function() {
                return y
            });
            var a = t("./node_modules/beaver-logger/client/index.js"),
                s = t("./node_modules/cross-domain-utils/src/index.js"),
                c = t("./node_modules/post-robot/src/index.js"),
                u = t("./node_modules/zalgo-promise/src/index.js"),
                d = t("./node_modules/xcomponent/src/component/base.js"),
                l = t("./node_modules/xcomponent/src/component/window.js"),
                f = t("./node_modules/xcomponent/src/lib/index.js"),
                p = t("./node_modules/xcomponent/src/constants.js"),
                m = t("./node_modules/xcomponent/src/error.js"),
                h = t("./node_modules/xcomponent/src/component/child/props.js"),
                b = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                },
                w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                y = function(e) {
                    function n(t) {
                        r(this, n);
                        var i = o(this, e.call(this));
                        if (i.component = t, !i.hasValidParentDomain()) return i.error(new m.c("Can not be rendered by domain: " + i.getParentDomain())), o(i);
                        i.component.log("construct_child"), i.onPropHandlers = [];
                        for (var a = [i.component, window], s = 0; s < a.length; s++) ! function() {
                            for (var e = a[s], n = [
                                    ["xchild", function() {
                                        return i
                                    }],
                                    ["xprops", function() {
                                        return i.props
                                    }]
                                ], t = 0; t < n.length; t++) ! function() {
                                var r = n[t],
                                    o = r[0],
                                    a = r[1];
                                Object.defineProperty(e, o, {
                                    configurable: !0,
                                    get: function() {
                                        return i.props || i.setProps(i.getInitialProps(), Object(l.d)()), delete e[o], e[o] = a(), e[o]
                                    }
                                })
                            }()
                        }();
                        return i.component.log("init_child"), i.setWindows(), i.listenForResize(), i.onInit = i.sendToParent(p.POST_MESSAGE.INIT, {
                            exports: i.exports()
                        }).then(function(e) {
                            var n = e.origin,
                                t = e.data;
                            return i.context = t.context, i.setProps(t.props, n), i.watchForResize(), i
                        }).catch(function(e) {
                            throw i.error(e), e
                        }), i
                    }
                    return i(n, e), n.prototype.listenForResize = function() {
                        var e = this;
                        this.component.listenForResize && (this.sendToParent(p.POST_MESSAGE.ONRESIZE, {}, {
                            fireAndForget: !0
                        }), window.addEventListener("resize", function() {
                            e.sendToParent(p.POST_MESSAGE.ONRESIZE, {}, {
                                fireAndForget: !0
                            })
                        }))
                    }, n.prototype.hasValidParentDomain = function() {
                        return Object(s.z)(this.component.allowedParentDomains, this.getParentDomain())
                    }, n.prototype.init = function() {
                        return this.onInit
                    }, n.prototype.getParentDomain = function() {
                        return Object(l.d)()
                    }, n.prototype.onProps = function(e) {
                        this.onPropHandlers.push(e)
                    }, n.prototype.getParentComponentWindow = function() {
                        return Object(l.c)()
                    }, n.prototype.getParentRenderWindow = function() {
                        return Object(l.e)()
                    }, n.prototype.getInitialProps = function() {
                        var e = this,
                            n = Object(l.b)(),
                            t = n.props;
                        if (t.type === p.INITIAL_PROPS.RAW) t = t.value;
                        else {
                            if (t.type !== p.INITIAL_PROPS.UID) throw new Error("Unrecognized props type: " + t.type);
                            var r = Object(l.c)();
                            if (!Object(s.t)(r)) {
                                if ("file:" === window.location.protocol) throw new Error("Can not get props from file:// domain");
                                throw new Error("Parent component window is on a different domain - expected " + Object(s.f)() + " - can not retrieve props")
                            }
                            var o = Object(f.z)(r);
                            if (!o) throw new Error("Can not find global for parent component - can not retrieve props");
                            t = JSON.parse(o.props[n.uid])
                        }
                        if (!t) throw new Error("Initial props not found");
                        return Object(f.k)(t, function(n) {
                            var t = n.fullKey,
                                r = n.self,
                                o = n.args;
                            return e.onInit.then(function() {
                                var n = Object(f.v)(e.props, t);
                                if ("function" != typeof n) throw new TypeError("Expected " + t + " to be function, got " + (void 0 === n ? "undefined" : w(n)));
                                return n.apply(r, o)
                            })
                        })
                    }, n.prototype.setProps = function(e, n) {
                        var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        this.props = this.props || {};
                        var r = Object(h.a)(this.component, e, n, t);
                        Object(f.t)(this.props, r), this.props.logLevel && Object(f.S)(this.props.logLevel);
                        for (var o = this.onPropHandlers, i = Array.isArray(o), a = 0, o = i ? o : o[Symbol.iterator]();;) {
                            var s;
                            if (i) {
                                if (a >= o.length) break;
                                s = o[a++]
                            } else {
                                if (a = o.next(), a.done) break;
                                s = a.value
                            }
                            s.call(this, this.props)
                        }
                    }, n.prototype.sendToParent = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = Object(l.c)();
                        if (!r) throw new Error("Can not find parent component window to message");
                        return this.component.log("send_to_parent_" + e), Object(c.send)(r, e, n, b({
                            domain: Object(l.d)()
                        }, t))
                    }, n.prototype.setWindows = function() {
                        if (window.__activeXComponent__) throw this.component.createError("Can not attach multiple components to the same window");
                        if (window.__activeXComponent__ = this, !Object(l.c)()) throw this.component.createError("Can not find parent window");
                        var e = Object(l.b)();
                        if (e.tag !== this.component.tag) throw this.component.createError("Parent is " + e.tag + " - can not attach " + this.component.tag);
                        this.watchForClose()
                    }, n.prototype.watchForClose = function() {
                        var e = this;
                        window.addEventListener("unload", function() {
                            return e.checkClose()
                        })
                    }, n.prototype.enableAutoResize = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.width,
                            t = void 0 === n || n,
                            r = e.height,
                            o = void 0 === r || r;
                        this.autoResize = {
                            width: t,
                            height: o
                        }, this.watchForResize()
                    }, n.prototype.getAutoResize = function() {
                        var e = !1,
                            n = !1,
                            t = this.autoResize || this.component.autoResize;
                        "object" === (void 0 === t ? "undefined" : w(t)) ? (e = Boolean(t.width), n = Boolean(t.height)) : t && (e = !0, n = !0);
                        var r = void 0;
                        return r = t.element ? Object(f.x)(t.element) : window.navigator.userAgent.match(/MSIE (9|10)\./) ? document.body : document.documentElement, {
                            width: e,
                            height: n,
                            element: r
                        }
                    }, n.prototype.watchForResize = function() {
                        var e = this,
                            n = this.getAutoResize(),
                            t = n.width,
                            r = n.height,
                            o = n.element;
                        if ((t || r) && this.context !== p.CONTEXT_TYPES.POPUP && !this.watchingForResize) return this.watchingForResize = !0, u.a.try(function() {
                            return f.n
                        }).then(function() {
                            if (!Object(f.m)(o, {
                                    width: t,
                                    height: r
                                })) return e.resizeToElement(o, {
                                width: t,
                                height: r
                            })
                        }).then(function() {
                            return Object(f.h)(function() {
                                return Object(f.K)(o, {
                                    width: t,
                                    height: r
                                }).then(function() {
                                    return e.resizeToElement(o, {
                                        width: t,
                                        height: r
                                    })
                                })
                            })
                        })
                    }, n.prototype.exports = function() {
                        var e = this;
                        return {
                            updateProps: function(n) {
                                var t = this;
                                return u.a.try(function() {
                                    return e.setProps(n, t.origin, !1)
                                })
                            },
                            close: function() {
                                return u.a.try(function() {
                                    return e.destroy()
                                })
                            }
                        }
                    }, n.prototype.resize = function(e, n) {
                        var t = this;
                        return u.a.resolve().then(function() {
                            if (t.component.log("resize", {
                                    width: Object(f.W)(e),
                                    height: Object(f.W)(n)
                                }), t.context !== p.CONTEXT_TYPES.POPUP) return t.sendToParent(p.POST_MESSAGE.RESIZE, {
                                width: e,
                                height: n
                            }).then(f.I)
                        })
                    }, n.prototype.resizeToElement = function(e, n) {
                        var t = this,
                            r = n.width,
                            o = n.height,
                            i = [];
                        return function n() {
                            return u.a.try(function() {
                                for (var a = Object(f.Z)(e, {
                                        width: r,
                                        height: o
                                    }), s = a.check(), c = s.dimensions, u = i, d = Array.isArray(u), l = 0, u = d ? u : u[Symbol.iterator]();;) {
                                    var p;
                                    if (d) {
                                        if (l >= u.length) break;
                                        p = u[l++]
                                    } else {
                                        if (l = u.next(), l.done) break;
                                        p = l.value
                                    }
                                    var m = p,
                                        h = !r || m.width === c.width,
                                        b = !o || m.height === c.height;
                                    if (h && b) return
                                }
                                return i.push({
                                    width: c.width,
                                    height: c.height
                                }), t.resize(r ? c.width : null, o ? c.height : null).then(function() {
                                    if (a.check().changed) return n()
                                })
                            })
                        }()
                    }, n.prototype.hide = function() {
                        return this.sendToParent(p.POST_MESSAGE.HIDE).then(f.I)
                    }, n.prototype.show = function() {
                        return this.sendToParent(p.POST_MESSAGE.SHOW).then(f.I)
                    }, n.prototype.userClose = function() {
                        return this.close(p.CLOSE_REASONS.USER_CLOSED)
                    }, n.prototype.close = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.CLOSE_REASONS.CHILD_CALL;
                        this.component.log("close_child"), this.sendToParent(p.POST_MESSAGE.CLOSE, {
                            reason: e
                        })
                    }, n.prototype.checkClose = function() {
                        this.sendToParent(p.POST_MESSAGE.CHECK_CLOSE, {}, {
                            fireAndForget: !0
                        })
                    }, n.prototype.destroy = function() {
                        return Object(a.c)().then(function() {
                            window.close()
                        })
                    }, n.prototype.focus = function() {
                        this.component.log("focus"), window.focus()
                    }, n.prototype.error = function(e) {
                        var n = Object(f.X)(e);
                        return this.component.logError("error", {
                            error: n
                        }), this.sendToParent(p.POST_MESSAGE.ERROR, {
                            error: n
                        }).then(f.I)
                    }, n
                }(d.a)
        },
        "./node_modules/xcomponent/src/component/child/props.js": function(e, n, t) {
            "use strict";

            function r(e, n, t, r) {
                var o = e.getProp(t);
                return o ? "function" == typeof o.childDecorate ? o.childDecorate(r) : r : e.looseProps ? r : void 0
            }

            function o(e, n, t) {
                for (var o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], a = {}, s = Object.keys(n), c = Array.isArray(s), u = 0, s = c ? s : s[Symbol.iterator]();;) {
                    var d;
                    if (c) {
                        if (u >= s.length) break;
                        d = s[u++]
                    } else {
                        if (u = s.next(), u.done) break;
                        d = u.value
                    }
                    var l = d,
                        f = e.getProp(l),
                        p = n[l];
                    f && f.sameDomain && t !== Object(i.f)(window) || (a[l] = r(e, n, l, p), f && f.alias && !a[f.alias] && (a[f.alias] = p))
                }
                if (o)
                    for (var m = e.getPropNames(), h = Array.isArray(m), b = 0, m = h ? m : m[Symbol.iterator]();;) {
                        var w;
                        if (h) {
                            if (b >= m.length) break;
                            w = m[b++]
                        } else {
                            if (b = m.next(), b.done) break;
                            w = b.value
                        }
                        var y = w;
                        n.hasOwnProperty(y) || (a[y] = r(e, n, y, n[y]))
                    }
                return a
            }
            n.a = o;
            var i = t("./node_modules/cross-domain-utils/src/index.js")
        },
        "./node_modules/xcomponent/src/component/component/index.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, n) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != typeof n && "function" != typeof n ? e : n
            }

            function i(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
            }
            t.d(n, "a", function() {
                return O
            });
            var a, s = t("./node_modules/post-robot/src/index.js"),
                c = t("./node_modules/zalgo-promise/src/index.js"),
                u = t("./node_modules/cross-domain-utils/src/index.js"),
                d = t("./node_modules/xcomponent/src/component/base.js"),
                l = t("./node_modules/xcomponent/src/component/child/index.js"),
                f = t("./node_modules/xcomponent/src/component/parent/index.js"),
                p = t("./node_modules/xcomponent/src/component/delegate/index.js"),
                m = t("./node_modules/xcomponent/src/component/window.js"),
                h = t("./node_modules/xcomponent/src/constants.js"),
                b = t("./node_modules/xcomponent/src/drivers/index.js"),
                w = t("./node_modules/xcomponent/src/lib/index.js"),
                y = t("./node_modules/xcomponent/src/component/component/validate.js"),
                v = t("./node_modules/xcomponent/src/component/component/templates/index.js"),
                g = t("./node_modules/xcomponent/src/component/component/props.js"),
                E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                _ = {
                    angular: b.angular,
                    angular2: b.angular2,
                    glimmer: b.glimmer,
                    react: b.react,
                    vue: b.vue,
                    script: b.script
                },
                O = (a = function(e) {
                    function n(t) {
                        r(this, n);
                        var i = o(this, e.call(this));
                        if (Object(y.a)(t), i.addProp(t, "tag"), i.addProp(t, "defaultLogLevel", "info"), i.addProp(t, "allowedParentDomains", h.WILDCARD), Object(w.S)(i.defaultLogLevel), n.components[i.tag]) throw new Error("Can not register multiple components with the same tag");
                        return i.addProp(t, "name", i.tag.replace(/-/g, "_")), i.builtinProps = Object(g.a)(), i.props = t.props || {}, t.props || (i.looseProps = !0), i.addProp(t, "dimensions"), i.addProp(t, "scrolling"), i.addProp(t, "listenForResize"), i.addProp(t, "version", "latest"), i.addProp(t, "defaultEnv"), i.addProp(t, "buildUrl"), i.addProp(t, "url"), i.addProp(t, "domain"), i.addProp(t, "bridgeUrl"), i.addProp(t, "bridgeDomain"), i.addProp(t, "attributes", {}), i.addProp(t, "contexts", {
                            iframe: !0,
                            popup: !1
                        }), i.addProp(t, "defaultContext"), i.addProp(t, "autoResize", !1), i.addProp(t, "containerTemplate", v.a), i.addProp(t, "prerenderTemplate", v.b), i.addProp(t, "validate"), i.addProp(t, "unsafeRenderTo", !1), n.components[i.tag] = i, i.registerDrivers(), i.registerChild(), i.listenDelegate(), i
                    }
                    return i(n, e), n.prototype.getPropNames = function() {
                        for (var e = Object.keys(this.props), n = Object.keys(this.builtinProps), t = Array.isArray(n), r = 0, n = t ? n : n[Symbol.iterator]();;) {
                            var o;
                            if (t) {
                                if (r >= n.length) break;
                                o = n[r++]
                            } else {
                                if (r = n.next(), r.done) break;
                                o = r.value
                            }
                            var i = o; - 1 === e.indexOf(i) && e.push(i)
                        }
                        return e
                    }, n.prototype.getProp = function(e) {
                        return this.props[e] || this.builtinProps[e]
                    }, n.prototype.registerDrivers = function() {
                        this.driverCache = {};
                        for (var e = Object.keys(_), n = Array.isArray(e), t = 0, e = n ? e : e[Symbol.iterator]();;) {
                            var r;
                            if (n) {
                                if (t >= e.length) break;
                                r = e[t++]
                            } else {
                                if (t = e.next(), t.done) break;
                                r = t.value
                            }
                            var o = r;
                            if (0 !== o.indexOf("_")) {
                                var i = _[o],
                                    a = i.global();
                                a && this.driver(o, a)
                            }
                        }
                    }, n.prototype.driver = function(e, n) {
                        if (!_[e]) throw new Error("Could not find driver for framework: " + e);
                        return this.driverCache[e] || (this.driverCache[e] = _[e].register(this, n)), this.driverCache[e]
                    }, n.prototype.registerChild = function() {
                        var e = this;
                        return c.a.try(function() {
                            if (e.isChild()) return new l.a(e)
                        })
                    }, n.prototype.listenDelegate = function() {
                        var e = this;
                        Object(s.on)(h.POST_MESSAGE.ALLOW_DELEGATE + "_" + this.name, function() {
                            return !0
                        }), Object(s.on)(h.POST_MESSAGE.DELEGATE + "_" + this.name, function(n) {
                            var t = n.source,
                                r = n.origin,
                                o = n.data,
                                i = e.getDomain(null, o.env || e.defaultEnv);
                            if (!i) throw new Error("Could not determine domain to allow remote render");
                            if (!Object(u.z)(i, r)) throw new Error("Can not render from " + r + " - expected " + i.toString());
                            var a = e.delegate(t, o.options);
                            return {
                                overrides: a.getOverrides(o.context),
                                destroy: function() {
                                    return a.destroy()
                                }
                            }
                        })
                    }, n.prototype.canRenderTo = function(e) {
                        return Object(s.send)(e, h.POST_MESSAGE.ALLOW_DELEGATE + "_" + this.name).then(function(e) {
                            return e.data
                        }).catch(function() {
                            return !1
                        })
                    }, n.prototype.getValidDomain = function(e) {
                        if (e) {
                            var n = Object(u.g)(e);
                            if ("string" == typeof this.domain && n === this.domain) return n;
                            var t = this.domain;
                            if (t && "object" === (void 0 === t ? "undefined" : E(t)) && !(t instanceof RegExp))
                                for (var r = Object.keys(t), o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator]();;) {
                                    var a;
                                    if (o) {
                                        if (i >= r.length) break;
                                        a = r[i++]
                                    } else {
                                        if (i = r.next(), i.done) break;
                                        a = i.value
                                    }
                                    var s = a;
                                    if ("test" !== s && n === t[s]) return n
                                }
                        }
                    }, n.prototype.getDomain = function(e, n) {
                        var t = this.getForEnv(this.domain, n);
                        if (t) return t;
                        if (t = this.getValidDomain(e)) return t;
                        var r = this.getForEnv(this.url, n);
                        return r ? Object(u.g)(r) : e ? Object(u.g)(e) : void 0
                    }, n.prototype.getBridgeUrl = function(e) {
                        return this.getForEnv(this.bridgeUrl, e)
                    }, n.prototype.getForEnv = function(e, n) {
                        if (e) {
                            if ("string" == typeof e || e instanceof RegExp) return e;
                            if (n || (n = this.defaultEnv), n) return n && "object" === (void 0 === e ? "undefined" : E(e)) && e[n] ? e[n] : void 0
                        }
                    }, n.prototype.getBridgeDomain = function(e) {
                        var n = this.getForEnv(this.bridgeDomain, e);
                        if (n) return n;
                        var t = this.getBridgeUrl(e);
                        return t ? Object(u.g)(t) : void 0
                    }, n.prototype.getUrl = function(e, n) {
                        var t = this.getForEnv(this.url, e);
                        if (t) return t;
                        if (this.buildUrl) return this.buildUrl(n);
                        throw new Error("Unable to get url")
                    }, n.prototype.isXComponent = function() {
                        return Object(m.g)()
                    }, n.prototype.isChild = function() {
                        return Object(m.g)() && Object(m.b)().tag === this.tag
                    }, n.prototype.createError = function(e, n) {
                        return new Error("[" + (n || this.tag) + "] " + e)
                    }, n.prototype.init = function(e, n, t) {
                        return new f.a(this, this.getRenderContext(n, t), {
                            props: e
                        })
                    }, n.prototype.delegate = function(e, n) {
                        return new p.a(this, e, n)
                    }, n.prototype.validateRenderContext = function(e, n) {
                        if (e && !this.contexts[e]) throw new Error("[" + this.tag + "] Can not render to " + e);
                        if (!n && e === h.CONTEXT_TYPES.IFRAME) throw new Error("[" + this.tag + "] Context type " + h.CONTEXT_TYPES.IFRAME + " requires an element selector")
                    }, n.prototype.getDefaultContext = function() {
                        if (this.defaultContext) return this.defaultContext;
                        if (this.contexts[h.CONTEXT_TYPES.IFRAME]) return h.CONTEXT_TYPES.IFRAME;
                        if (this.contexts[h.CONTEXT_TYPES.POPUP]) return h.CONTEXT_TYPES.POPUP;
                        throw new Error("Can not determine default context")
                    }, n.prototype.getRenderContext = function(e, n) {
                        return e = e || this.getDefaultContext(), this.validateRenderContext(e, n), e
                    }, n.prototype.render = function(e, n) {
                        var t = this;
                        return c.a.try(function() {
                            return new f.a(t, t.getRenderContext(null, n), {
                                props: e
                            }).render(n)
                        })
                    }, n.prototype.renderIframe = function(e, n) {
                        var t = this;
                        return c.a.try(function() {
                            return new f.a(t, t.getRenderContext(h.CONTEXT_TYPES.IFRAME, n), {
                                props: e
                            }).render(n)
                        })
                    }, n.prototype.renderPopup = function(e) {
                        var n = this;
                        return c.a.try(function() {
                            return new f.a(n, n.getRenderContext(h.CONTEXT_TYPES.POPUP), {
                                props: e
                            }).render()
                        })
                    }, n.prototype.renderTo = function(e, n, t) {
                        var r = this;
                        return c.a.try(function() {
                            return new f.a(r, r.getRenderContext(null, t), {
                                props: n
                            }).renderTo(e, t)
                        })
                    }, n.prototype.renderIframeTo = function(e, n, t) {
                        var r = this;
                        return c.a.try(function() {
                            return new f.a(r, r.getRenderContext(h.CONTEXT_TYPES.IFRAME, t), {
                                props: n
                            }).renderTo(e, t)
                        })
                    }, n.prototype.renderPopupTo = function(e, n) {
                        var t = this;
                        return c.a.try(function() {
                            return new f.a(t, t.getRenderContext(h.CONTEXT_TYPES.POPUP), {
                                props: n
                            }).renderTo(e)
                        })
                    }, n.prototype.prerender = function(e, n) {
                        var t = new f.a(this, this.getRenderContext(null, n), {
                            props: e
                        });
                        return t.prefetch(), {
                            render: function(e, n) {
                                return e && t.updateProps(e), t.render(n)
                            },
                            renderTo: function(e, n, r) {
                                return n && t.updateProps(n), t.renderTo(e, r)
                            },
                            get html() {
                                return t.html
                            },
                            set html(e) {
                                t.html = e
                            }
                        }
                    }, n.prototype.log = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        Object(w.C)(this.name, e, n)
                    }, n.prototype.logWarning = function(e, n) {
                        Object(w._1)(this.name, e, n)
                    }, n.prototype.logError = function(e, n) {
                        Object(w.r)(this.name, e, n)
                    }, n.getByTag = function(e) {
                        return n.components[e]
                    }, n
                }(d.a), function(e, n, t, r, o) {
                    var i = {};
                    return Object.keys(r).forEach(function(e) {
                        i[e] = r[e]
                    }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = t.slice().reverse().reduce(function(t, r) {
                        return r(e, n, t) || t
                    }, i), o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, n, i), i = null), i
                }(a.prototype, "getPropNames", [w.G], Object.getOwnPropertyDescriptor(a.prototype, "getPropNames"), a.prototype), a);
            O.components = {}
        },
        "./node_modules/xcomponent/src/component/component/props.js": function(e, n, t) {
            "use strict";

            function r() {
                return {
                    env: {
                        type: "string",
                        required: !1,
                        queryParam: !0,
                        def: function() {
                            return this.defaultEnv
                        }
                    },
                    uid: {
                        type: "string",
                        def: function() {
                            return Object(o._0)()
                        },
                        queryParam: !0
                    },
                    logLevel: {
                        type: "string",
                        required: !1,
                        queryParam: !0,
                        def: function() {
                            return this.defaultLogLevel
                        }
                    },
                    url: {
                        type: "string",
                        required: !1,
                        promise: !0,
                        sendToChild: !1
                    },
                    dimensions: {
                        type: "object",
                        required: !1
                    },
                    version: {
                        type: "string",
                        required: !1,
                        queryParam: !0,
                        def: function() {
                            return this.version
                        }
                    },
                    timeout: {
                        type: "number",
                        required: !1,
                        sendToChild: !1
                    },
                    onDisplay: {
                        type: "function",
                        required: !1,
                        noop: !0,
                        promisify: !0,
                        memoize: !0,
                        sendToChild: !1
                    },
                    onEnter: {
                        type: "function",
                        required: !1,
                        noop: !0,
                        promisify: !0,
                        sendToChild: !1
                    },
                    onRender: {
                        type: "function",
                        required: !1,
                        noop: !0,
                        promisify: !0,
                        sendToChild: !1
                    },
                    onClose: {
                        type: "function",
                        required: !1,
                        noop: !0,
                        once: !0,
                        promisify: !0,
                        sendToChild: !1
                    },
                    onTimeout: {
                        type: "function",
                        required: !1,
                        memoize: !0,
                        promisify: !0,
                        sendToChild: !1,
                        def: function() {
                            return function(e) {
                                if (this.props.onError) return this.props.onError(e);
                                throw e
                            }
                        }
                    },
                    onError: {
                        type: "function",
                        required: !1,
                        promisify: !0,
                        sendToChild: !0,
                        once: !0,
                        def: function() {
                            return function(e) {
                                setTimeout(function() {
                                    throw e
                                })
                            }
                        }
                    }
                }
            }
            n.a = r;
            var o = (t("./node_modules/zalgo-promise/src/index.js"), t("./node_modules/xcomponent/src/lib/index.js")),
                i = t("./node_modules/xcomponent/src/types.js");
            t.n(i)
        },
        "./node_modules/xcomponent/src/component/component/templates/component.jsx": function(e, n, t) {
            "use strict";

            function r(e) {
                var n = e.jsxDom;
                return n("html", null, n("head", null, n("style", null, "\n                        html, body {\n                            width: 100%;\n                            height: 100%;\n                            overflow: hidden;\n                            top: 0;\n                            left: 0;\n                            margin: 0;\n                            text-align: center;\n                        }\n\n                        .spinner {\n                            position: absolute;\n                            max-height: 60vmin;\n                            max-width: 60vmin;\n                            height: 40px;\n                            width: 40px;\n                            top: 50%;\n                            left: 50%;\n                            transform: translateX(-50%) translateY(-50%);\n                            z-index: 10;\n                        }\n\n                        .spinner .loader {\n                            height: 100%;\n                            width: 100%;\n                            box-sizing: border-box;\n                            border: 3px solid rgba(0, 0, 0, .2);\n                            border-top-color: rgba(33, 128, 192, 0.8);\n                            border-radius: 100%;\n                            animation: rotation .7s infinite linear;\n\n                        }\n\n                        @keyframes rotation {\n                            from {\n                                transform: rotate(0deg)\n                            }\n                            to {\n                                transform: rotate(359deg)\n                            }\n                        }\n                    ")), n("body", null, n("div", {
                    class: "spinner"
                }, n("div", {
                    id: "loader",
                    class: "loader"
                }))))
            }
            n.a = r;
            t("./node_modules/xcomponent/src/component/parent/index.js")
        },
        "./node_modules/xcomponent/src/component/component/templates/container.jsx": function(e, n, t) {
            "use strict";

            function r(e) {
                var n = e.id,
                    t = e.tag,
                    r = e.context,
                    o = e.CLASS,
                    i = e.outlet,
                    a = e.jsxDom,
                    s = e.dimensions,
                    c = s.width,
                    u = s.height;
                return a("div", {
                    id: n,
                    class: o.XCOMPONENT + " " + o.XCOMPONENT + "-tag-" + t + " " + o.XCOMPONENT + "-context-" + r
                }, a("style", null, "\n                    #" + n + ", #" + n + " > ." + o.OUTLET + " {\n                        width: " + c + ";\n                        height: " + u + ";\n                    }\n\n                    #" + n + " > ." + o.OUTLET + " {\n                        display: inline-block;\n                        position: relative;\n                    }\n\n                    #" + n + " > ." + o.OUTLET + " > iframe {\n                        height: 100%;\n                        width: 100%;\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        transition: opacity .2s ease-in-out;\n                    }\n\n                    #" + n + " > ." + o.OUTLET + " > iframe." + o.VISIBLE + " {\n                        opacity: 1;\n                    }\n\n                    #" + n + " > ." + o.OUTLET + " > iframe." + o.INVISIBLE + " {\n                        opacity: 0;\n                    }\n                "), i)
            }
            n.a = r;
            t("./node_modules/xcomponent/src/component/parent/index.js")
        },
        "./node_modules/xcomponent/src/component/component/templates/index.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/xcomponent/src/component/component/templates/container.jsx");
            t.d(n, "a", function() {
                return r.a
            });
            var o = t("./node_modules/xcomponent/src/component/component/templates/component.jsx");
            t.d(n, "b", function() {
                return o.a
            })
        },
        "./node_modules/xcomponent/src/component/component/validate.js": function(e, n, t) {
            "use strict";

            function r(e) {
                if (e.props && "object" !== s(e.props)) throw new Error("Expected options.props to be an object");
                if (e.props)
                    for (var n = Object.keys(e.props), t = Array.isArray(n), r = 0, n = t ? n : n[Symbol.iterator]();;) {
                        var o;
                        if (t) {
                            if (r >= n.length) break;
                            o = n[r++]
                        } else {
                            if (r = n.next(), r.done) break;
                            o = r.value
                        }
                        var a = o,
                            c = e.props[a];
                        if (!c || "object" !== (void 0 === c ? "undefined" : s(c))) throw new Error("Expected options.props." + a + " to be an object");
                        if (!c.type) throw new Error("Expected prop.type");
                        if (-1 === i.PROP_TYPES_LIST.indexOf(c.type)) throw new Error("Expected prop.type to be one of " + i.PROP_TYPES_LIST.join(", "));
                        if (c.required && c.def) throw new Error("Required prop can not have a default value")
                    }
            }

            function o(e) {
                if (!e) throw new Error("Expecred options to be passed");
                if (!e.tag || !e.tag.match(/^[a-z0-9-]+$/)) throw new Error("Invalid options.tag: " + e.tag);
                if (r(e), e.dimensions) {
                    if (e.dimensions && !Object(a.E)(e.dimensions.width) && !Object(a.D)(e.dimensions.width)) throw new Error("Expected options.dimensions.width to be a px or % string value");
                    if (e.dimensions && !Object(a.E)(e.dimensions.height) && !Object(a.D)(e.dimensions.height)) throw new Error("Expected options.dimensions.height to be a px or % string value")
                }
                if (e.contexts) {
                    if (e.contexts.popup && !{
                            __POPUP_SUPPORT__: !0
                        }.__POPUP_SUPPORT__) throw new Error("Popups not supported in this build -- please use the full xcomponent.js build");
                    for (var n = !1, t = Object.keys(e.contexts), o = Array.isArray(t), c = 0, t = o ? t : t[Symbol.iterator]();;) {
                        var u;
                        if (o) {
                            if (c >= t.length) break;
                            u = t[c++]
                        } else {
                            if (c = t.next(), c.done) break;
                            u = c.value
                        }
                        var d = u;
                        if (-1 === i.CONTEXT_TYPES_LIST.indexOf(d)) throw new Error("Unsupported context type: " + d);
                        (e.contexts && e.contexts[d] || e.contexts && void 0 === e.contexts[d]) && (n = !0)
                    }
                    if (!n) throw new Error("No context type is enabled")
                }
                if (e.defaultContext) {
                    if (-1 === i.CONTEXT_TYPES_LIST.indexOf(e.defaultContext)) throw new Error("Unsupported context type: " + (e.defaultContext || "unknown"));
                    if (e.contexts && e.defaultContext && !e.contexts[e.defaultContext]) throw new Error("Disallowed default context type: " + (e.defaultContext || "unknown"))
                }
                if (e.url && e.buildUrl) throw new Error("Can not pass both options.url and options.buildUrl");
                if (e.defaultEnv) {
                    if ("string" != typeof e.defaultEnv) throw new TypeError("Expected options.defaultEnv to be a string");
                    if (!e.buildUrl && "object" !== s(e.url)) throw new Error("Expected options.url to be an object mapping env->url");
                    if (e.url && "object" === s(e.url) && !e.url[e.defaultEnv]) throw new Error("No url found for default env: " + e.defaultEnv)
                }
                if (e.url && "object" === s(e.url)) {
                    if (!e.defaultEnv) throw new Error("Must pass options.defaultEnv with env->url mapping");
                    for (var l = Object.keys(e.url), f = Array.isArray(l), p = 0, l = f ? l : l[Symbol.iterator]();;) {
                        var m;
                        if (f) {
                            if (p >= l.length) break;
                            m = l[p++]
                        } else {
                            if (p = l.next(), p.done) break;
                            m = p.value
                        }
                        var h = m;
                        if (!e.url[h]) throw new Error("No url specified for env: " + h)
                    }
                }
                if (e.prerenderTemplate && "function" != typeof e.prerenderTemplate) throw new Error("Expected options.prerenderTemplate to be a function");
                if (e.containerTemplate && "function" != typeof e.containerTemplate) throw new Error("Expected options.containerTemplate to be a function")
            }
            n.a = o;
            var i = t("./node_modules/xcomponent/src/constants.js"),
                a = t("./node_modules/xcomponent/src/lib/index.js"),
                s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        },
        "./node_modules/xcomponent/src/component/delegate/index.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, n) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != typeof n && "function" != typeof n ? e : n
            }

            function i(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
            }
            t.d(n, "a", function() {
                return f
            });
            var a = t("./node_modules/cross-domain-utils/src/index.js"),
                s = (t("./node_modules/zalgo-promise/src/index.js"), t("./node_modules/xcomponent/src/component/base.js")),
                c = t("./node_modules/xcomponent/src/component/parent/index.js"),
                u = t("./node_modules/xcomponent/src/component/parent/drivers.js"),
                d = t("./node_modules/xcomponent/src/lib/index.js"),
                l = function() {
                    function e(e, n) {
                        for (var t = 0; t < n.length; t++) {
                            var r = n[t];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(n, t, r) {
                        return t && e(n.prototype, t), r && e(n, r), n
                    }
                }(),
                f = function(e) {
                    function n(t, i, a) {
                        r(this, n);
                        var s = o(this, e.call(this));
                        s.component = t, s.clean.set("source", i), s.context = a.context, s.props = {
                            uid: a.props.uid,
                            dimensions: a.props.dimensions,
                            onClose: a.props.onClose,
                            onDisplay: a.props.onDisplay
                        };
                        for (var l = t.getPropNames(), f = Array.isArray(l), p = 0, l = f ? l : l[Symbol.iterator]();;) {
                            var m;
                            if (f) {
                                if (p >= l.length) break;
                                m = l[p++]
                            } else {
                                if (p = l.next(), p.done) break;
                                m = p.value
                            }
                            var h = m;
                            s.component.getProp(h).allowDelegate && (s.props[h] = a.props[h])
                        }
                        s.focus = function() {
                            return a.overrides.focus.call(s)
                        }, s.clean.register("destroyFocusOverride", function() {
                            s.focus = d.I
                        }), s.userClose = a.overrides.userClose, s.getDomain = a.overrides.getDomain, s.error = a.overrides.error, s.on = a.overrides.on;
                        for (var b = u.a[a.context].delegateOverrides, w = Object.keys(b), y = Array.isArray(w), v = 0, w = y ? w : w[Symbol.iterator]();;) {
                            var g;
                            if (y) {
                                if (v >= w.length) break;
                                g = w[v++]
                            } else {
                                if (v = w.next(), v.done) break;
                                g = v.value
                            }
                            var E = g;
                            s[E] = c.a.prototype[E]
                        }
                        return s.childWindowName = a.childWindowName, c.a.prototype.registerActiveComponent.call(s), s.watchForClose(), s
                    }
                    return i(n, e), n.prototype.watchForClose = function() {
                        var e = this,
                            n = Object(a.A)(this.source, function() {
                                return e.destroy()
                            }, 3e3);
                        this.clean.register("destroyCloseWindowListener", n.cancel)
                    }, n.prototype.getOverrides = function(e) {
                        for (var n = u.a[e].delegateOverrides, t = {}, r = this, o = Object.keys(n), i = Array.isArray(o), a = 0, o = i ? o : o[Symbol.iterator]();;) {
                            var s;
                            if ("break" === function() {
                                    if (i) {
                                        if (a >= o.length) return "break";
                                        s = o[a++]
                                    } else {
                                        if (a = o.next(), a.done) return "break";
                                        s = a.value
                                    }
                                    var e = s;
                                    t[e] = function() {
                                        return c.a.prototype[e].apply(r, arguments)
                                    }
                                }()) break
                        }
                        return t
                    }, n.prototype.destroy = function() {
                        return this.clean.all()
                    }, l(n, [{
                        key: "driver",
                        get: function() {
                            if (!this.context) throw new Error("Context not set");
                            return u.a[this.context]
                        }
                    }]), n
                }(s.a)
        },
        "./node_modules/xcomponent/src/component/index.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/xcomponent/src/component/component/index.js");
            t.d(n, "a", function() {
                return r.a
            });
            t("./node_modules/xcomponent/src/component/parent/index.js"), t("./node_modules/xcomponent/src/component/child/index.js")
        },
        "./node_modules/xcomponent/src/component/parent/drivers.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return d
            });
            var r = t("./node_modules/zalgo-promise/src/index.js"),
                o = t("./node_modules/post-robot/src/index.js"),
                i = t("./node_modules/cross-domain-utils/src/index.js"),
                a = t("./node_modules/xcomponent/src/lib/index.js"),
                s = t("./node_modules/xcomponent/src/constants.js"),
                c = t("./node_modules/xcomponent/src/component/window.js"),
                u = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                },
                d = {};
            d[s.CONTEXT_TYPES.IFRAME] = {
                focusable: !1,
                renderedIntoContainerTemplate: !0,
                allowResize: !0,
                openOnClick: !1,
                needsBridge: !1,
                open: function(e) {
                    var n = this,
                        t = this.component.attributes.iframe || {};
                    return this.iframe = Object(a.B)({
                        url: e,
                        attributes: u({
                            name: this.childWindowName,
                            title: this.component.name,
                            scrolling: this.component.scrolling ? "yes" : "no"
                        }, t),
                        class: [s.CLASS_NAMES.COMPONENT_FRAME, s.CLASS_NAMES.INVISIBLE]
                    }, this.element), Object(a.f)(this.iframe).then(function(e) {
                        n.window = e;
                        var t = function() {
                                return r.a.try(function() {
                                    return n.props.onClose(s.CLOSE_REASONS.CLOSE_DETECTED)
                                }).finally(function() {
                                    return n.destroy()
                                })
                            },
                            i = Object(a._2)(n.iframe, t),
                            c = Object(a._2)(n.element, t);
                        n.clean.register("destroyWindow", function() {
                            i.cancel(), c.cancel(), Object(o.cleanUpWindow)(n.window), delete n.window, n.iframe && (Object(a.l)(n.iframe), delete n.iframe)
                        })
                    })
                },
                openPrerender: function() {
                    var e = this,
                        n = this.component.attributes.iframe || {};
                    return this.prerenderIframe = Object(a.B)({
                        attributes: u({
                            name: "__prerender__" + this.childWindowName,
                            scrolling: this.component.scrolling ? "yes" : "no"
                        }, n),
                        class: [s.CLASS_NAMES.PRERENDER_FRAME, s.CLASS_NAMES.VISIBLE]
                    }, this.element), Object(a.f)(this.prerenderIframe).then(function(n) {
                        e.prerenderWindow = n, e.clean.register("destroyPrerender", function() {
                            e.prerenderIframe && (Object(a.l)(e.prerenderIframe), delete e.prerenderIframe)
                        })
                    })
                },
                switchPrerender: function() {
                    var e = this;
                    Object(a.a)(this.prerenderIframe, s.CLASS_NAMES.INVISIBLE), Object(a.P)(this.prerenderIframe, s.CLASS_NAMES.VISIBLE), Object(a.a)(this.iframe, s.CLASS_NAMES.VISIBLE), Object(a.P)(this.iframe, s.CLASS_NAMES.INVISIBLE), setTimeout(function() {
                        e.prerenderIframe && Object(a.l)(e.prerenderIframe)
                    }, 1e3)
                },
                delegateOverrides: {
                    openContainer: s.DELEGATE.CALL_DELEGATE,
                    destroyComponent: s.DELEGATE.CALL_DELEGATE,
                    destroyContainer: s.DELEGATE.CALL_DELEGATE,
                    cancelContainerEvents: s.DELEGATE.CALL_DELEGATE,
                    createPrerenderTemplate: s.DELEGATE.CALL_DELEGATE,
                    elementReady: s.DELEGATE.CALL_DELEGATE,
                    showContainer: s.DELEGATE.CALL_DELEGATE,
                    showComponent: s.DELEGATE.CALL_DELEGATE,
                    hideContainer: s.DELEGATE.CALL_DELEGATE,
                    hideComponent: s.DELEGATE.CALL_DELEGATE,
                    hide: s.DELEGATE.CALL_DELEGATE,
                    show: s.DELEGATE.CALL_DELEGATE,
                    resize: s.DELEGATE.CALL_DELEGATE,
                    loadUrl: s.DELEGATE.CALL_DELEGATE,
                    hijackSubmit: s.DELEGATE.CALL_DELEGATE,
                    openPrerender: s.DELEGATE.CALL_DELEGATE,
                    switchPrerender: s.DELEGATE.CALL_DELEGATE,
                    renderTemplate: s.DELEGATE.CALL_ORIGINAL,
                    openContainerFrame: s.DELEGATE.CALL_ORIGINAL,
                    getOutlet: s.DELEGATE.CALL_ORIGINAL,
                    open: function(e, n) {
                        return function() {
                            var e = this;
                            return n.apply(this, arguments).then(function() {
                                if (e.clean.set("window", Object(i.a)(Object(c.c)(), e.childWindowName)), !e.window) throw new Error("Unable to find parent component iframe window")
                            })
                        }
                    }
                },
                resize: function(e, n) {
                    e && (this.container.style.width = Object(a.Y)(e), this.element.style.width = Object(a.Y)(e)), n && (this.container.style.height = Object(a.Y)(n), this.element.style.height = Object(a.Y)(n))
                },
                show: function() {
                    Object(a.V)(this.element)
                },
                hide: function() {
                    Object(a.A)(this.element)
                },
                loadUrl: function(e) {
                    this.iframe.setAttribute("src", e)
                }
            }, {
                __POPUP_SUPPORT__: !0
            }.__POPUP_SUPPORT__ && (d[s.CONTEXT_TYPES.POPUP] = {
                focusable: !0,
                renderedIntoContainerTemplate: !1,
                allowResize: !1,
                openOnClick: !0,
                needsBridge: !0,
                open: function() {
                    var e = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return r.a.try(function() {
                        var t = e.component.dimensions || {},
                            r = t.width,
                            i = void 0 === r ? s.DEFAULT_DIMENSIONS.WIDTH : r,
                            d = t.height,
                            l = void 0 === d ? s.DEFAULT_DIMENSIONS.HEIGHT : d;
                        i = Object(a.J)(i, window.outerWidth), l = Object(a.J)(l, window.outerWidth);
                        var f = Object(c.f)({
                                width: i,
                                height: l
                            }),
                            p = f.x,
                            m = f.y,
                            h = e.component.attributes.popup || {};
                        e.window = Object(a.M)(n || "", u({
                            name: e.childWindowName,
                            width: i,
                            height: l,
                            top: m,
                            left: p,
                            status: 1,
                            toolbar: 0,
                            menubar: 0,
                            resizable: 1,
                            scrollbars: 1
                        }, h)), e.prerenderWindow = e.window, e.clean.register("destroyWindow", function() {
                            e.window && (e.window.close(), Object(o.cleanUpWindow)(e.window), delete e.window, delete e.prerenderWindow)
                        }), e.resize(i, l)
                    })
                },
                openPrerender: function() {
                    return r.a.try(a.I)
                },
                resize: function() {},
                hide: function() {
                    throw new Error("Can not hide popup")
                },
                show: function() {
                    throw new Error("Can not show popup")
                },
                delegateOverrides: {
                    openContainer: s.DELEGATE.CALL_DELEGATE,
                    destroyContainer: s.DELEGATE.CALL_DELEGATE,
                    elementReady: s.DELEGATE.CALL_DELEGATE,
                    showContainer: s.DELEGATE.CALL_DELEGATE,
                    showComponent: s.DELEGATE.CALL_DELEGATE,
                    hideContainer: s.DELEGATE.CALL_DELEGATE,
                    hideComponent: s.DELEGATE.CALL_DELEGATE,
                    hide: s.DELEGATE.CALL_DELEGATE,
                    show: s.DELEGATE.CALL_DELEGATE,
                    cancelContainerEvents: s.DELEGATE.CALL_DELEGATE,
                    open: s.DELEGATE.CALL_ORIGINAL,
                    loadUrl: s.DELEGATE.CALL_ORIGINAL,
                    createPrerenderTemplate: s.DELEGATE.CALL_ORIGINAL,
                    destroyComponent: s.DELEGATE.CALL_ORIGINAL,
                    resize: s.DELEGATE.CALL_ORIGINAL,
                    renderTemplate: s.DELEGATE.CALL_ORIGINAL,
                    openContainerFrame: s.DELEGATE.CALL_ORIGINAL,
                    getOutlet: s.DELEGATE.CALL_ORIGINAL
                },
                loadUrl: function(e) {
                    if (Object(i.t)(this.window)) try {
                        if (this.window.location && this.window.location.replace) return void this.window.location.replace(e)
                    } catch (e) {}
                    this.window.location = e
                }
            })
        },
        "./node_modules/xcomponent/src/component/parent/index.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, n) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != typeof n && "function" != typeof n ? e : n
            }

            function i(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
            }

            function a(e, n, t, r, o) {
                var i = {};
                return Object.keys(r).forEach(function(e) {
                    i[e] = r[e]
                }), i.enumerable = !!i.enumerable, i.configurable = !!i.configurable, ("value" in i || i.initializer) && (i.writable = !0), i = t.slice().reverse().reduce(function(t, r) {
                    return r(e, n, t) || t
                }, i), o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0, i.initializer = void 0), void 0 === i.initializer && (Object.defineProperty(e, n, i), i = null), i
            }
            t.d(n, "a", function() {
                return O
            });
            var s, c = t("./node_modules/beaver-logger/client/index.js"),
                u = t("./node_modules/post-robot/src/index.js"),
                d = t("./node_modules/cross-domain-utils/src/index.js"),
                l = t("./node_modules/zalgo-promise/src/index.js"),
                f = t("./node_modules/xcomponent/src/component/base.js"),
                p = t("./node_modules/xcomponent/src/component/window.js"),
                m = t("./node_modules/xcomponent/src/lib/index.js"),
                h = t("./node_modules/xcomponent/src/constants.js"),
                b = t("./node_modules/xcomponent/src/error.js"),
                w = t("./node_modules/xcomponent/src/component/parent/drivers.js"),
                y = t("./node_modules/xcomponent/src/component/parent/validate.js"),
                v = t("./node_modules/xcomponent/src/component/parent/props.js"),
                g = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                },
                E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                _ = function() {
                    function e(e, n) {
                        for (var t = 0; t < n.length; t++) {
                            var r = n[t];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(n, t, r) {
                        return t && e(n.prototype, t), r && e(n, r), n
                    }
                }();
            m.y.props = m.y.props || {}, m.y.windows = m.y.windows || {};
            var O = (s = function(e) {
                function n(t, i, a) {
                    var s = a.props;
                    r(this, n);
                    var c = o(this, e.call(this));
                    return c.component = t, c.validateParentDomain(), c.context = i, c.setProps(s), c.props.logLevel && Object(m.S)(c.props.logLevel), c.childWindowName = c.buildChildWindowName({
                        renderTo: window
                    }), c.registerActiveComponent(), c.component.log("construct_parent"), c.watchForUnload(), c.onInit = new l.a, c.onInit.catch(function(e) {
                        return c.error(e)
                    }), c
                }
                return i(n, e), n.prototype.render = function(e) {
                    var n = this,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return this.tryInit(function() {
                        n.component.log("render_" + n.context, {
                            context: n.context,
                            element: e,
                            loadUrl: Object(m.W)(t)
                        });
                        var r = {};
                        return r.onRender = n.props.onRender(), r.getDomain = n.getDomain(), r.elementReady = l.a.try(function() {
                            if (e) return n.elementReady(e)
                        }), r.openContainer = r.elementReady.then(function() {
                            return n.openContainer(e)
                        }), r.showContainer = r.openContainer.then(function() {
                            return n.showContainer()
                        }), r.openPrerender = r.openContainer.then(function() {
                            return n.openPrerender()
                        }), r.switchPrerender = l.a.all([r.openPrerender, n.onInit]).then(function() {
                            return n.switchPrerender()
                        }), r.open = n.driver.openOnClick ? n.open() : r.openContainer.then(function() {
                            return n.open()
                        }), r.listen = l.a.all([r.getDomain, r.open]).then(function(e) {
                            var t = e[0];
                            n.listen(n.window, t)
                        }), r.watchForClose = r.open.then(function() {
                            return n.watchForClose()
                        }), r.linkDomain = l.a.all([r.getDomain, r.open]).then(function(e) {
                            var t = e[0];
                            if (u.bridge && "string" == typeof t) return u.bridge.linkUrl(n.window, t)
                        }), n.html || (r.createPrerenderTemplate = r.openPrerender.then(function() {
                            return n.createPrerenderTemplate()
                        }), r.showComponent = r.createPrerenderTemplate.then(function() {
                            return n.showComponent()
                        })), r.openBridge = l.a.all([r.getDomain, r.open]).then(function(e) {
                            var t = e[0];
                            return n.openBridge("string" == typeof t ? t : null)
                        }), n.html ? r.loadHTML = r.open.then(function() {
                            return n.loadHTML()
                        }) : t && (r.buildUrl = n.buildUrl(), r.loadUrl = l.a.all([r.buildUrl, r.open, r.linkDomain, r.listen, r.open, r.openBridge, r.createPrerenderTemplate]).then(function(e) {
                            var t = e[0];
                            return n.loadUrl(t)
                        }), r.runTimeout = r.loadUrl.then(function() {
                            return n.runTimeout()
                        })), l.a.hash(r)
                    }).then(function() {
                        return n.props.onEnter()
                    }).then(function() {
                        return n
                    })
                }, n.prototype.getOutlet = function() {
                    var e = document.createElement("div");
                    return Object(m.a)(e, h.CLASS_NAMES.OUTLET), e
                }, n.prototype.validateParentDomain = function() {
                    var e = Object(d.f)();
                    if (!Object(d.z)(this.component.allowedParentDomains, e)) throw new b.c("Can not be rendered by domain: " + e)
                }, n.prototype.renderTo = function(e, n) {
                    var t = this;
                    return this.tryInit(function() {
                        if (e === window) return t.render(n);
                        if (!Object(d.u)(window, e)) throw new Error("Can only renderTo an adjacent frame");
                        if (n && "string" != typeof n) throw new Error("Element passed to renderTo must be a string selector, got " + (void 0 === n ? "undefined" : E(n)) + " " + n);
                        return t.checkAllowRenderTo(e), t.component.log("render_" + t.context + "_to_win", {
                            element: Object(m.W)(n),
                            context: t.context
                        }), t.childWindowName = t.buildChildWindowName({
                            renderTo: e
                        }), t.delegate(e), t.render(n)
                    })
                }, n.prototype.prefetch = function() {
                    var e = this;
                    return l.a.try(function() {
                        e.html = e.buildUrl().then(function(e) {
                            return Object(m.N)(e).then(function(n) {
                                return '\n                        <base href="' + e.split("/").slice(0, 3).join("/") + '">\n\n                        ' + n + "\n\n                        <script>\n                            if (window.history && window.history.pushState) {\n                                window.history.pushState({}, '', '/" + e.split("/").slice(3).join("/") + "');\n                            }\n                        <\/script>\n                    "
                            })
                        })
                    })
                }, n.prototype.loadHTML = function() {
                    var e = this;
                    return l.a.try(function() {
                        if (!e.html) throw new Error("Html not prefetched");
                        return e.html.then(function(n) {
                            return Object(m._4)(e.window, n)
                        })
                    })
                }, n.prototype.checkAllowRenderTo = function(e) {
                    if (!e) throw this.component.createError("Must pass window to renderTo");
                    if (!Object(d.t)(e)) {
                        var n = Object(d.f)(),
                            t = this.component.getDomain(null, this.props.env);
                        if (!t) throw new Error("Could not determine domain to allow remote render");
                        if (!Object(d.z)(t, n)) throw new Error("Can not render remotely to " + t.toString() + " - can only render to " + n)
                    }
                }, n.prototype.registerActiveComponent = function() {
                    var e = this;
                    n.activeComponents.push(this), this.clean.register(function() {
                        n.activeComponents.splice(n.activeComponents.indexOf(e), 1)
                    })
                }, n.prototype.getComponentParentRef = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                    if (this.context === h.CONTEXT_TYPES.POPUP) return {
                        ref: h.WINDOW_REFERENCES.OPENER
                    };
                    if (e === window) return Object(d.v)(window) ? {
                        ref: h.WINDOW_REFERENCES.TOP
                    } : {
                        ref: h.WINDOW_REFERENCES.PARENT,
                        distance: Object(d.e)(window)
                    };
                    var n = Object(m._0)();
                    return m.y.windows[n] = window, this.clean.register(function() {
                        delete m.y.windows[n]
                    }), {
                        ref: h.WINDOW_REFERENCES.GLOBAL,
                        uid: n
                    }
                }, n.prototype.getRenderParentRef = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                    if (e === window) return this.getComponentParentRef(e);
                    var n = Object(m._0)();
                    return m.y.windows[n] = e, this.clean.register(function() {
                        delete m.y.windows[n]
                    }), {
                        ref: h.WINDOW_REFERENCES.GLOBAL,
                        uid: n
                    }
                }, n.prototype.buildChildWindowName = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.renderTo,
                        t = void 0 === n ? window : n,
                        r = Object(d.t)(t),
                        o = Object(m._0)(),
                        i = this.component.tag,
                        a = Object(m.R)(this.getPropsForChild()),
                        s = this.getComponentParentRef(t),
                        c = this.getRenderParentRef(t),
                        u = !r && !this.component.unsafeRenderTo,
                        l = u ? {
                            type: h.INITIAL_PROPS.UID,
                            uid: o
                        } : {
                            type: h.INITIAL_PROPS.RAW,
                            value: a
                        };
                    return l.type === h.INITIAL_PROPS.UID && (m.y.props[o] = JSON.stringify(a), this.clean.register(function() {
                        delete m.y.props[o]
                    })), Object(p.a)(this.component.name, this.component.version, {
                        uid: o,
                        tag: i,
                        componentParent: s,
                        renderParent: c,
                        props: l
                    })
                }, n.prototype.sendToParent = function(e, n) {
                    if (!Object(p.c)()) throw new Error("Can not find parent component window to message");
                    return this.component.log("send_to_parent_" + e), Object(u.send)(Object(p.c)(), e, n, {
                        domain: Object(p.d)()
                    })
                }, n.prototype.setProps = function(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    Object(y.a)(this.component, e, n), this.component.validate && this.component.validate(this.component, e), this.props = this.props || {}, Object(m.t)(this.props, Object(v.a)(this.component, this, e))
                }, n.prototype.buildUrl = function() {
                    var e = this;
                    return l.a.all([this.props.url, Object(v.b)(g({}, this.component.props, this.component.builtinProps), this.props)]).then(function(n) {
                        var t = n[0],
                            r = n[1];
                        return t && !e.component.getValidDomain(t) ? t : l.a.try(function() {
                            return t || e.component.getUrl(e.props.env, e.props)
                        }).then(function(e) {
                            return r[h.XCOMPONENT] = "1", Object(m.u)(e, {
                                query: r
                            })
                        })
                    })
                }, n.prototype.getDomain = function() {
                    var e = this;
                    return l.a.try(function() {
                        return e.props.url
                    }).then(function(n) {
                        var t = e.component.getDomain(n, e.props.env);
                        return t || (e.component.buildUrl ? l.a.try(function() {
                            return e.component.buildUrl(e.props)
                        }).then(function(n) {
                            return e.component.getDomain(n, e.props.env)
                        }) : void 0)
                    }).then(function(e) {
                        if (!e) throw new Error("Could not determine domain");
                        return e
                    })
                }, n.prototype.getPropsForChild = function() {
                    for (var e = {}, n = Object.keys(this.props), t = Array.isArray(n), r = 0, n = t ? n : n[Symbol.iterator]();;) {
                        var o;
                        if (t) {
                            if (r >= n.length) break;
                            o = n[r++]
                        } else {
                            if (r = n.next(), r.done) break;
                            o = r.value
                        }
                        var i = o,
                            a = this.component.getProp(i);
                        a && !1 === a.sendToChild || (e[i] = this.props[i])
                    }
                    return e
                }, n.prototype.updateProps = function(e) {
                    var n = this;
                    return this.setProps(e, !1), this.onInit.then(function() {
                        if (n.childExports) return n.childExports.updateProps(n.getPropsForChild());
                        throw new Error("Child exports were not available")
                    })
                }, n.prototype.openBridge = function(e) {
                    var n = this;
                    return l.a.try(function() {
                        if (u.bridge && n.driver.needsBridge) {
                            var t = {
                                win: n.window
                            };
                            e && (t.domain = e);
                            var r = u.bridge.needsBridge(t),
                                o = n.component.getBridgeUrl(n.props.env);
                            if (o) {
                                o = Object(m.u)(o, {
                                    query: {
                                        version: n.component.version
                                    }
                                });
                                var i = n.component.getBridgeDomain(n.props.env);
                                if (!i) throw new Error("Can not determine domain for bridge");
                                return r ? u.bridge.openBridge(o, i).then(function(e) {
                                    if (e) return e
                                }) : void 0
                            }
                            if (r && e && !u.bridge.hasBridge(e, e)) throw new Error("Bridge url needed to render " + n.context)
                        }
                    })
                }, n.prototype.open = function() {
                    var e = this;
                    return l.a.try(function() {
                        return e.component.log("open_" + e.context, {
                            windowName: e.childWindowName
                        }), e.driver.open.call(e)
                    })
                }, n.prototype.openPrerender = function() {
                    var e = this;
                    return l.a.try(function() {
                        if (e.component.prerenderTemplate) return e.driver.openPrerender.call(e)
                    })
                }, n.prototype.switchPrerender = function() {
                    var e = this;
                    return l.a.try(function() {
                        if (e.prerenderWindow && e.driver.switchPrerender) return e.driver.switchPrerender.call(e)
                    })
                }, n.prototype.elementReady = function(e) {
                    return Object(m.p)(e).then(m.I)
                }, n.prototype.delegate = function(e) {
                    var n = this;
                    this.component.log("delegate_" + this.context);
                    for (var t = {
                            uid: this.props.uid,
                            dimensions: this.props.dimensions,
                            onClose: this.props.onClose,
                            onDisplay: this.props.onDisplay
                        }, r = this.component.getPropNames(), o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator]();;) {
                        var a;
                        if (o) {
                            if (i >= r.length) break;
                            a = r[i++]
                        } else {
                            if (i = r.next(), i.done) break;
                            a = i.value
                        }
                        var s = a;
                        this.component.getProp(s).allowDelegate && (t[s] = this.props[s])
                    }
                    var c = Object(u.send)(e, h.POST_MESSAGE.DELEGATE + "_" + this.component.name, {
                            context: this.context,
                            env: this.props.env,
                            options: {
                                context: this.context,
                                childWindowName: this.childWindowName,
                                props: t,
                                overrides: {
                                    focus: function() {
                                        return n.focus()
                                    },
                                    userClose: function() {
                                        return n.userClose()
                                    },
                                    getDomain: function() {
                                        return n.getDomain()
                                    },
                                    error: function(e) {
                                        return n.error(e)
                                    },
                                    on: function(e, t) {
                                        return n.on(e, t)
                                    }
                                }
                            }
                        }).then(function(e) {
                            var t = e.data;
                            return n.clean.register(t.destroy), t
                        }).catch(function(e) {
                            throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + Object(m.X)(e))
                        }),
                        d = this.driver.delegateOverrides;
                    e: for (var l = Object.keys(d), f = Array.isArray(l), p = 0, l = f ? l : l[Symbol.iterator]();;) {
                        var b, w = function() {
                            if (f) {
                                if (p >= l.length) return "break";
                                b = l[p++]
                            } else {
                                if (p = l.next(), p.done) return "break";
                                b = p.value
                            }
                            var e = b,
                                t = d[e];
                            if (t === h.DELEGATE.CALL_ORIGINAL) return "continue";
                            var r = n[e];
                            n[e] = function() {
                                var n = this,
                                    o = arguments;
                                return c.then(function(i) {
                                    var a = i.overrides[e];
                                    if (t === h.DELEGATE.CALL_DELEGATE) return a.apply(n, o);
                                    if ("function" == typeof t) return t(r, a).apply(n, o);
                                    throw new Error("Expected delgate to be CALL_ORIGINAL, CALL_DELEGATE, or factory method")
                                })
                            }
                        }();
                        switch (w) {
                            case "break":
                                break e;
                            case "continue":
                                continue
                        }
                    }
                }, n.prototype.watchForClose = function() {
                    var e = this,
                        n = Object(d.A)(this.window, function() {
                            return e.component.log("detect_close_child"), l.a.try(function() {
                                return e.props.onClose(h.CLOSE_REASONS.CLOSE_DETECTED)
                            }).finally(function() {
                                return e.destroy()
                            })
                        }, 3e3);
                    this.clean.register("destroyCloseWindowListener", n.cancel)
                }, n.prototype.watchForUnload = function() {
                    var e = this,
                        n = Object(m.L)(function() {
                            e.component.log("navigate_away"), Object(c.c)(), e.destroyComponent()
                        }),
                        t = Object(m.b)(window, "unload", n);
                    this.clean.register("destroyUnloadWindowListener", t.cancel)
                }, n.prototype.loadUrl = function(e) {
                    var n = this;
                    return l.a.try(function() {
                        if (n.component.log("load_url"), window.location.href.split("#")[0] === e.split("#")[0]) {
                            var t;
                            e = Object(m.u)(e, {
                                query: (t = {}, t[Object(m._0)()] = "1", t)
                            })
                        }
                        return n.driver.loadUrl.call(n, e)
                    })
                }, n.prototype.hijack = function(e) {
                    e.target = this.childWindowName
                }, n.prototype.runTimeout = function() {
                    var e = this,
                        n = this.props.timeout;
                    if (n) {
                        var t = this.timeout = setTimeout(function() {
                            e.component.log("timed_out", {
                                timeout: n.toString()
                            });
                            var t = e.component.createError("Loading component timed out after " + n + " milliseconds");
                            e.onInit.reject(t), e.props.onTimeout(t)
                        }, n);
                        this.clean.register(function() {
                            clearTimeout(t), delete e.timeout
                        })
                    }
                }, n.prototype.listeners = function() {
                    var e;
                    return e = {}, e[h.POST_MESSAGE.INIT] = function(e, n) {
                        return this.childExports = n.exports, this.onInit.resolve(this), this.timeout && clearTimeout(this.timeout), {
                            props: this.getPropsForChild(),
                            context: this.context
                        }
                    }, e[h.POST_MESSAGE.CLOSE] = function(e, n) {
                        this.close(n.reason)
                    }, e[h.POST_MESSAGE.CHECK_CLOSE] = function() {
                        this.checkClose()
                    }, e[h.POST_MESSAGE.RESIZE] = function(e, n) {
                        var t = this;
                        return l.a.try(function() {
                            if (t.driver.allowResize) return t.resize(n.width, n.height)
                        })
                    }, e[h.POST_MESSAGE.ONRESIZE] = function() {
                        this.event.trigger("resize")
                    }, e[h.POST_MESSAGE.HIDE] = function() {
                        this.hide()
                    }, e[h.POST_MESSAGE.SHOW] = function() {
                        this.show()
                    }, e[h.POST_MESSAGE.ERROR] = function(e, n) {
                        this.error(new Error(n.error))
                    }, e
                }, n.prototype.resize = function(e, n) {
                    var t = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = r.waitForTransition,
                        i = void 0 === o || o;
                    return l.a.try(function() {
                        if (t.component.log("resize", {
                                height: Object(m.W)(n),
                                width: Object(m.W)(e)
                            }), t.driver.resize.call(t, e, n), i && (t.element || t.iframe)) {
                            var r = void 0;
                            return t.element && (r = Object(m.T)(t.element, "hidden")), Object(m.q)(t.element || t.iframe).then(function() {
                                r && r.reset()
                            })
                        }
                    })
                }, n.prototype.hide = function() {
                    return this.container && Object(m.A)(this.container), this.driver.hide.call(this)
                }, n.prototype.show = function() {
                    return this.container && Object(m.V)(this.container), this.driver.show.call(this)
                }, n.prototype.checkClose = function() {
                    var e = this,
                        n = Object(d.A)(this.window, function() {
                            e.userClose()
                        }, 50, 500);
                    this.clean.register(n.cancel)
                }, n.prototype.userClose = function() {
                    return this.close(h.CLOSE_REASONS.USER_CLOSED)
                }, n.prototype.close = function() {
                    var e = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.CLOSE_REASONS.PARENT_CALL;
                    return l.a.try(function() {
                        return e.component.log("close", {
                            reason: n
                        }), e.event.triggerOnce(h.EVENTS.CLOSE), e.props.onClose(n)
                    }).then(function() {
                        return l.a.all([e.closeComponent(), e.closeContainer()])
                    }).then(function() {
                        return e.destroy()
                    })
                }, n.prototype.closeContainer = function() {
                    var e = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.CLOSE_REASONS.PARENT_CALL;
                    return l.a.try(function() {
                        return e.event.triggerOnce(h.EVENTS.CLOSE), e.props.onClose(n)
                    }).then(function() {
                        return l.a.all([e.closeComponent(n), e.hideContainer()])
                    }).then(function() {
                        return e.destroyContainer()
                    })
                }, n.prototype.destroyContainer = function() {
                    var e = this;
                    return l.a.try(function() {
                        e.clean.run("destroyContainerEvents"), e.clean.run("destroyContainerTemplate")
                    })
                }, n.prototype.closeComponent = function() {
                    var e = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.CLOSE_REASONS.PARENT_CALL,
                        t = this.window;
                    return l.a.try(function() {
                        return e.cancelContainerEvents()
                    }).then(function() {
                        return e.event.triggerOnce(h.EVENTS.CLOSE), e.props.onClose(n)
                    }).then(function() {
                        return e.hideComponent()
                    }).then(function() {
                        return e.destroyComponent()
                    }).then(function() {
                        e.childExports && e.context === h.CONTEXT_TYPES.POPUP && !Object(d.x)(t) && e.childExports.close().catch(m.I)
                    })
                }, n.prototype.destroyComponent = function() {
                    this.clean.run("destroyUnloadWindowListener"), this.clean.run("destroyCloseWindowListener"), this.clean.run("destroyContainerEvents"), this.clean.run("destroyWindow")
                }, n.prototype.showContainer = function() {
                    var e = this;
                    return l.a.try(function() {
                        if (e.props.onDisplay) return e.props.onDisplay()
                    }).then(function() {
                        if (e.container) return Object(m.U)(e.container, h.ANIMATION_NAMES.SHOW_CONTAINER, e.clean.register)
                    })
                }, n.prototype.showComponent = function() {
                    var e = this;
                    return l.a.try(function() {
                        if (e.props.onDisplay) return e.props.onDisplay()
                    }).then(function() {
                        if (e.element) return Object(m.U)(e.element, h.ANIMATION_NAMES.SHOW_COMPONENT, e.clean.register)
                    })
                }, n.prototype.hideContainer = function() {
                    var e = this;
                    return l.a.try(function() {
                        return e.container ? Object(m.c)(e.container, h.ANIMATION_NAMES.HIDE_CONTAINER, e.clean.register) : l.a.resolve()
                    })
                }, n.prototype.hideComponent = function() {
                    var e = this;
                    return l.a.try(function() {
                        return e.element ? Object(m.c)(e.element, h.ANIMATION_NAMES.HIDE_COMPONENT, e.clean.register) : l.a.resolve()
                    })
                }, n.prototype.focus = function() {
                    if (!this.window || Object(d.x)(this.window)) throw new Error("No window to focus");
                    this.component.log("focus"), this.window.focus()
                }, n.prototype.createPrerenderTemplate = function() {
                    var e = this;
                    return l.a.try(function() {
                        return e.component.prerenderTemplate ? l.a.try(function() {
                            return e.prerenderIframe ? Object(m.e)(e.prerenderIframe).then(function() {
                                return e.prerenderWindow
                            }) : e.prerenderWindow
                        }).then(function(n) {
                            var t = void 0;
                            try {
                                t = n.document
                            } catch (e) {
                                return
                            }
                            var r = void 0;
                            try {
                                r = e.renderTemplate(e.component.prerenderTemplate, {
                                    jsxDom: m.F.bind(t),
                                    document: t
                                })
                            } catch (n) {
                                return e.component.logError("preprender_error", {
                                    err: n.stack ? n.stack : n.toString()
                                }), void console.error(n.stack ? n.stack : n)
                            }
                            try {
                                Object(m._3)(n, r)
                            } catch (n) {
                                e.component.logError("preprender_error", {
                                    err: n.stack ? n.stack : n.toString()
                                }), console.error(n.stack ? n.stack : n)
                            }
                        }) : l.a.resolve()
                    })
                }, n.prototype.renderTemplate = function(e) {
                    var n = this,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = this.component.dimensions || {},
                        o = r.width,
                        i = void 0 === o ? h.DEFAULT_DIMENSIONS.WIDTH + "px" : o,
                        a = r.height,
                        s = void 0 === a ? h.DEFAULT_DIMENSIONS.HEIGHT + "px" : a;
                    return e.call(this, g({
                        id: h.CLASS_NAMES.XCOMPONENT + "-" + this.component.tag + "-" + this.props.uid,
                        props: e.__xdomain__ ? null : this.props,
                        tag: this.component.tag,
                        context: this.context,
                        outlet: this.getOutlet(),
                        CLASS: h.CLASS_NAMES,
                        ANIMATION: h.ANIMATION_NAMES,
                        CONTEXT: h.CONTEXT_TYPES,
                        EVENT: h.EVENTS,
                        actions: {
                            close: function() {
                                return n.userClose()
                            },
                            focus: function() {
                                return n.focus()
                            }
                        },
                        on: function(e, t) {
                            return n.on(e, t)
                        },
                        jsxDom: m.F,
                        document: document,
                        dimensions: {
                            width: i,
                            height: s
                        }
                    }, t))
                }, n.prototype.openContainer = function(e) {
                    var n = this;
                    return l.a.try(function() {
                        var t = void 0;
                        if (!(t = e ? Object(m.x)(e) : document.body)) throw new Error("Could not find element to open container into");
                        if (n.component.containerTemplate) {
                            var r = n.renderTemplate(n.component.containerTemplate, {
                                container: t
                            });
                            if (n.container = r, Object(m.A)(n.container), Object(m.d)(t, n.container), n.driver.renderedIntoContainerTemplate) {
                                if (n.element = n.getOutlet(), Object(m.A)(n.element), !n.element) throw new Error("Could not find element to render component into");
                                Object(m.A)(n.element)
                            }
                            n.clean.register("destroyContainerTemplate", function() {
                                n.container && n.container.parentNode && n.container.parentNode.removeChild(n.container), delete n.container
                            })
                        } else if (n.driver.renderedIntoContainerTemplate) throw new Error("containerTemplate needed to render " + n.context)
                    })
                }, n.prototype.cancelContainerEvents = function() {
                    this.clean.run("destroyContainerEvents")
                }, n.prototype.destroy = function() {
                    var e = this;
                    return l.a.try(function() {
                        if (e.clean.hasTasks()) return e.component.log("destroy"), Object(c.c)(), e.clean.all()
                    })
                }, n.prototype.tryInit = function(e) {
                    var n = this;
                    return l.a.try(e).catch(function(e) {
                        n.onInit.reject(e)
                    }).then(function() {
                        return n.onInit
                    })
                }, n.prototype.error = function(e) {
                    var n = this;
                    return l.a.try(function() {
                        if (n.handledErrors = n.handledErrors || [], -1 === n.handledErrors.indexOf(e)) return n.handledErrors.push(e), n.onInit.reject(e), n.destroy()
                    }).then(function() {
                        if (n.props.onError) return n.props.onError(e)
                    }).catch(function(n) {
                        throw new Error("An error was encountered while handling error:\n\n " + Object(m.X)(e) + "\n\n" + Object(m.X)(n))
                    }).then(function() {
                        if (!n.props.onError) throw e
                    })
                }, n.destroyAll = function() {
                    for (var e = []; n.activeComponents.length;) e.push(n.activeComponents[0].destroy());
                    return l.a.all(e).then(m.I)
                }, _(n, [{
                    key: "driver",
                    get: function() {
                        if (!this.context) throw new Error("Context not set");
                        return w.a[this.context]
                    }
                }]), n
            }(f.a), a(s.prototype, "getOutlet", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "getOutlet"), s.prototype), a(s.prototype, "prefetch", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "prefetch"), s.prototype), a(s.prototype, "loadHTML", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "loadHTML"), s.prototype), a(s.prototype, "buildUrl", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "buildUrl"), s.prototype), a(s.prototype, "open", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "open"), s.prototype), a(s.prototype, "openPrerender", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "openPrerender"), s.prototype), a(s.prototype, "switchPrerender", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "switchPrerender"), s.prototype), a(s.prototype, "close", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "close"), s.prototype), a(s.prototype, "closeContainer", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "closeContainer"), s.prototype), a(s.prototype, "destroyContainer", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "destroyContainer"), s.prototype), a(s.prototype, "closeComponent", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "closeComponent"), s.prototype), a(s.prototype, "showContainer", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "showContainer"), s.prototype), a(s.prototype, "showComponent", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "showComponent"), s.prototype), a(s.prototype, "hideContainer", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "hideContainer"), s.prototype), a(s.prototype, "hideComponent", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "hideComponent"), s.prototype), a(s.prototype, "createPrerenderTemplate", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "createPrerenderTemplate"), s.prototype), a(s.prototype, "openContainer", [m.H], Object.getOwnPropertyDescriptor(s.prototype, "openContainer"), s.prototype), s);
            O.activeComponents = []
        },
        "./node_modules/xcomponent/src/component/parent/props.js": function(e, n, t) {
            "use strict";

            function r(e) {
                return null !== e && void 0 !== e && "" !== e
            }

            function o(e, n, t, o, i) {
                var a = e.getProp(o),
                    s = void 0;
                !(s = a.value ? a.value : !a.def || t.hasOwnProperty(o) && r(i) ? i : a.def.call(e, t)) && a.alias && t[a.alias] && (s = t[a.alias]);
                var c = !1;
                a.decorate && null !== s && void 0 !== s && (s = a.decorate.call(n, s, t), c = !0);
                var u = a.type;
                if ("boolean" === u) s = Boolean(s);
                else if ("function" === u) {
                    if (!s && a.noop && (s = d.I, !c && a.decorate && (s = a.decorate.call(n, d.I, t))), s && "function" == typeof s) {
                        s = s.bind(n), a.denodeify && (s = Object(d.j)(s)), a.promisify && (s = Object(d.O)(s));
                        var l = s;
                        s = function() {
                            return e.log("call_prop_" + o), l.apply(this, arguments)
                        }, a.once && (s = Object(d.L)(s)), a.memoize && (s = Object(d.G)(s))
                    }
                } else "string" === u || "object" === u || "number" === u && void 0 !== s && (s = parseInt(s, 10));
                return s
            }

            function i(e, n, t) {
                var r = {};
                t = t || {};
                for (var i = Object.keys(t), a = Array.isArray(i), s = 0, i = a ? i : i[Symbol.iterator]();;) {
                    var c;
                    if (a) {
                        if (s >= i.length) break;
                        c = i[s++]
                    } else {
                        if (s = i.next(), s.done) break;
                        c = s.value
                    }
                    var u = c; - 1 !== e.getPropNames().indexOf(u) ? r[u] = o(e, n, t, u, t[u]) : r[u] = t[u]
                }
                for (var d = e.getPropNames(), l = Array.isArray(d), f = 0, d = l ? d : d[Symbol.iterator]();;) {
                    var p;
                    if (l) {
                        if (f >= d.length) break;
                        p = d[f++]
                    } else {
                        if (f = d.next(), f.done) break;
                        p = f.value
                    }
                    var m = p;
                    if (!(t.hasOwnProperty(m) || n.props && n.props.hasOwnProperty(m))) {
                        var h = o(e, n, t, m, t[m]);
                        void 0 !== h && (r[m] = h)
                    }
                }
                return r
            }

            function a(e, n, t) {
                return u.a.try(function() {
                    return "function" == typeof e.queryParam ? e.queryParam(t) : "string" == typeof e.queryParam ? e.queryParam : n
                })
            }

            function s(e, n, t) {
                return u.a.try(function() {
                    return "function" == typeof e.queryValue ? e.queryValue(t) : t
                })
            }

            function c(e, n) {
                var t = {};
                return u.a.all(Object.keys(n).map(function(r) {
                    var o = e[r];
                    if (o) return u.a.resolve().then(function() {
                        var e = n[r];
                        if (e && o.queryParam) return e
                    }).then(function(e) {
                        if (e) return u.a.all([a(o, r, e), s(o, r, e)]).then(function(e) {
                            var n = e[0],
                                i = e[1],
                                a = void 0;
                            if ("boolean" == typeof i) a = "1";
                            else if ("string" == typeof i) a = i.toString();
                            else {
                                if ("function" == typeof i) return;
                                if ("object" === (void 0 === i ? "undefined" : l(i)) && null !== i) {
                                    if ("json" !== o.serialization) {
                                        a = Object(d.o)(i, r);
                                        for (var s = Object.keys(a), c = Array.isArray(s), u = 0, s = c ? s : s[Symbol.iterator]();;) {
                                            var f;
                                            if (c) {
                                                if (u >= s.length) break;
                                                f = s[u++]
                                            } else {
                                                if (u = s.next(), u.done) break;
                                                f = u.value
                                            }
                                            var p = f;
                                            t[p] = a[p]
                                        }
                                        return
                                    }
                                    a = JSON.stringify(i)
                                } else "number" == typeof i && (a = i.toString())
                            }
                            t[n] = a
                        })
                    })
                })).then(function() {
                    return Object.keys(t).forEach(function(e) {
                        t[e] = escape(t[e])
                    }), t
                })
            }
            n.a = i, n.b = c;
            var u = t("./node_modules/zalgo-promise/src/index.js"),
                d = t("./node_modules/xcomponent/src/lib/index.js"),
                l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        },
        "./node_modules/xcomponent/src/component/parent/validate.js": function(e, n, t) {
            "use strict";

            function r(e, n, t, r) {
                var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                if (null !== t && void 0 !== t && "" !== t) {
                    if (!t || "function" != typeof t.then || !e.promise) {
                        if ("function" === e.type) {
                            if ("function" != typeof t) throw new TypeError("Prop is not of type function: " + n)
                        } else if ("string" === e.type) {
                            if ("string" != typeof t) throw new TypeError("Prop is not of type string: " + n)
                        } else if ("object" === e.type) try {
                                JSON.stringify(t)
                            } catch (e) {
                                throw new Error("Unable to serialize prop: " + n)
                            } else if ("number" === e.type && isNaN(parseInt(t, 10))) throw new TypeError("Prop is not a number: " + n);
                            "function" == typeof e.validate && t && e.validate(t, r)
                    }
                } else if (o && !1 !== e.required && !e.hasOwnProperty("def")) throw new Error("Prop is required: " + n)
            }

            function o(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (n = n || {}, n.env && "object" === i(e.url) && !e.url[n.env]) throw new Error("Invalid env: " + n.env);
                for (var o = e.getPropNames(), a = Array.isArray(o), s = 0, o = a ? o : o[Symbol.iterator]();;) {
                    var c;
                    if (a) {
                        if (s >= o.length) break;
                        c = o[s++]
                    } else {
                        if (s = o.next(), s.done) break;
                        c = s.value
                    }
                    var u = c,
                        d = e.getProp(u);
                    if (d.alias && n.hasOwnProperty(d.alias)) {
                        var l = n[d.alias];
                        delete n[d.alias], n[u] || (n[u] = l)
                    }
                }
                for (var f = Object.keys(n), p = Array.isArray(f), m = 0, f = p ? f : f[Symbol.iterator]();;) {
                    var h;
                    if (p) {
                        if (m >= f.length) break;
                        h = f[m++]
                    } else {
                        if (m = f.next(), m.done) break;
                        h = m.value
                    }
                    var b = h,
                        w = e.getProp(b),
                        y = n[b];
                    w && r(w, b, y, n, t)
                }
                for (var v = e.getPropNames(), g = Array.isArray(v), E = 0, v = g ? v : v[Symbol.iterator]();;) {
                    var _;
                    if (g) {
                        if (E >= v.length) break;
                        _ = v[E++]
                    } else {
                        if (E = v.next(), E.done) break;
                        _ = E.value
                    }
                    var O = _,
                        j = e.getProp(O),
                        S = n[O];
                    j && !n.hasOwnProperty(O) && r(j, O, S, n, t)
                }
            }
            n.a = o;
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
        },
        "./node_modules/xcomponent/src/component/window.js": function(e, n, t) {
            "use strict";

            function r(e) {
                return e.replace(/^[^a-z0-9A-Z]+|[^a-z0-9A-Z]+$/g, "").replace(/[^a-z0-9A-Z]+/g, "_")
            }

            function o(e) {
                return f.a.encode(e).replace(/\=/g, "").toLowerCase()
            }

            function i(e) {
                return f.a.decode(e.toUpperCase())
            }

            function a(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                t.id = Object(p._0)(), t.domain = Object(d.f)(window);
                var i = r(e),
                    a = r(n),
                    s = o(JSON.stringify(t));
                if (!i) throw new Error("Invalid name: " + e + " - must contain alphanumeric characters");
                if (!a) throw new Error("Invalid version: " + n + " - must contain alphanumeric characters");
                return [m.XCOMPONENT, i, a, s, ""].join("__")
            }

            function s() {
                return b().domain
            }

            function c(e) {
                var n = e.ref,
                    t = e.uid,
                    r = e.distance,
                    o = void 0;
                if (n === m.WINDOW_REFERENCES.OPENER ? o = Object(d.k)(window) : n === m.WINDOW_REFERENCES.TOP ? o = Object(d.m)(window) : n === m.WINDOW_REFERENCES.PARENT && (o = r ? Object(d.j)(window, r) : Object(d.l)(window)), n === m.WINDOW_REFERENCES.GLOBAL) {
                    var i = Object(d.d)(window);
                    if (i)
                        for (var a = Object(d.c)(i), s = Array.isArray(a), c = 0, a = s ? a : a[Symbol.iterator]();;) {
                            var u;
                            if (s) {
                                if (c >= a.length) break;
                                u = a[c++]
                            } else {
                                if (c = a.next(), c.done) break;
                                u = c.value
                            }
                            var l = u,
                                f = Object(p.z)(l);
                            if (f && f.windows && f.windows[t]) {
                                o = f.windows[t];
                                break
                            }
                        }
                }
                if (!o) throw new Error("Unable to find window by ref");
                return o
            }

            function u(e) {
                var n = e.width,
                    t = e.height,
                    r = 0,
                    o = 0;
                return n && (window.outerWidth ? r = Math.round((window.outerWidth - n) / 2) + window.screenX : window.screen.width && (r = Math.round((window.screen.width - n) / 2))), t && (window.outerHeight ? o = Math.round((window.outerHeight - t) / 2) + window.screenY : window.screen.height && (o = Math.round((window.screen.height - t) / 2))), {
                    x: r,
                    y: o
                }
            }
            n.a = a, t.d(n, "g", function() {
                return h
            }), t.d(n, "b", function() {
                return b
            }), n.d = s, t.d(n, "c", function() {
                return w
            }), t.d(n, "e", function() {
                return y
            }), n.f = u;
            var d = t("./node_modules/cross-domain-utils/src/index.js"),
                l = t("./node_modules/hi-base32/src/base32.js"),
                f = t.n(l),
                p = t("./node_modules/xcomponent/src/lib/index.js"),
                m = t("./node_modules/xcomponent/src/constants.js"),
                h = Object(p.G)(function() {
                    return !!window.name && window.name.split("__")[0] === m.XCOMPONENT
                }),
                b = Object(p.G)(function() {
                    if (!window.name) throw new Error("Can not get component meta without window name");
                    var e = window.name.split("__"),
                        n = e[0],
                        t = e[1],
                        r = e[2],
                        o = e[3];
                    if (n !== m.XCOMPONENT) throw new Error("Window not rendered by xcomponent - got " + n);
                    var a = void 0;
                    try {
                        a = JSON.parse(i(o))
                    } catch (e) {
                        throw new Error("Can not decode component-meta: " + o + " " + Object(p.X)(e))
                    }
                    return a.name = t, a.version = r.replace(/_/g, "."), a
                }),
                w = Object(p.G)(function() {
                    var e = b();
                    if (!e) throw new Error("Can not get parent component window - window not rendered by xcomponent");
                    return c(e.componentParent)
                }),
                y = Object(p.G)(function() {
                    var e = b();
                    if (!e) throw new Error("Can not get parent component window - window not rendered by xcomponent");
                    return c(e.renderParent)
                })
        },
        "./node_modules/xcomponent/src/constants.js": function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), t.d(n, "XCOMPONENT", function() {
                return r
            }), t.d(n, "__XCOMPONENT__", function() {
                return o
            }), t.d(n, "POST_MESSAGE", function() {
                return i
            }), t.d(n, "PROP_TYPES", function() {
                return a
            }), t.d(n, "INITIAL_PROPS", function() {
                return s
            }), t.d(n, "WINDOW_REFERENCES", function() {
                return c
            }), t.d(n, "PROP_TYPES_LIST", function() {
                return u
            }), t.d(n, "CONTEXT_TYPES", function() {
                return d
            }), t.d(n, "CLASS_NAMES", function() {
                return l
            }), t.d(n, "EVENTS", function() {
                return f
            }), t.d(n, "ATTRIBUTES", function() {
                return p
            }), t.d(n, "ANIMATION_NAMES", function() {
                return m
            }), t.d(n, "EVENT_NAMES", function() {
                return h
            }), t.d(n, "CLOSE_REASONS", function() {
                return b
            }), t.d(n, "CONTEXT_TYPES_LIST", function() {
                return w
            }), t.d(n, "DELEGATE", function() {
                return y
            }), t.d(n, "WILDCARD", function() {
                return v
            }), t.d(n, "DEFAULT_DIMENSIONS", function() {
                return g
            });
            var r = "xcomponent",
                o = "__" + r + "__",
                i = {
                    INIT: r + "_init",
                    PROPS: r + "_props",
                    PROP_CALLBACK: r + "_prop_callback",
                    CLOSE: r + "_close",
                    CHECK_CLOSE: r + "_check_close",
                    REDIRECT: r + "_redirect",
                    RESIZE: r + "_resize",
                    ONRESIZE: r + "_onresize",
                    DELEGATE: r + "_delegate",
                    ALLOW_DELEGATE: r + "_allow_delegate",
                    ERROR: r + "_error",
                    HIDE: r + "_hide",
                    SHOW: r + "_show"
                },
                a = {
                    STRING: "string",
                    OBJECT: "object",
                    FUNCTION: "function",
                    BOOLEAN: "boolean",
                    NUMBER: "number"
                },
                s = {
                    RAW: "raw",
                    UID: "uid"
                },
                c = {
                    OPENER: "opener",
                    TOP: "top",
                    PARENT: "parent",
                    GLOBAL: "global"
                },
                u = Object.keys(a).map(function(e) {
                    return a[e]
                }),
                d = {
                    IFRAME: "iframe",
                    POPUP: "popup"
                },
                l = {
                    XCOMPONENT: "" + r,
                    OUTLET: r + "-outlet",
                    COMPONENT_FRAME: r + "-component-frame",
                    PRERENDER_FRAME: r + "-prerender-frame",
                    VISIBLE: r + "-visible",
                    INVISIBLE: r + "-invisible"
                },
                f = {
                    CLOSE: r + "-close"
                },
                p = {
                    IFRAME_PLACEHOLDER: "data-xcomponent-" + r + "-placeholder"
                },
                m = {
                    SHOW_CONTAINER: r + "-show-container",
                    SHOW_COMPONENT: r + "-show-component",
                    HIDE_CONTAINER: r + "-hide-container",
                    HIDE_COMPONENT: r + "-hide-component"
                },
                h = {
                    CLICK: "click"
                },
                b = {
                    PARENT_CALL: "parent_call",
                    CHILD_CALL: "child_call",
                    CLOSE_DETECTED: "close_detected",
                    USER_CLOSED: "user_closed",
                    PARENT_CLOSE_DETECTED: "parent_close_detected"
                },
                w = Object.keys(d).map(function(e) {
                    return d[e]
                }),
                y = {
                    CALL_ORIGINAL: "call_original",
                    CALL_DELEGATE: "call_delegate"
                },
                v = "*",
                g = {
                    WIDTH: 300,
                    HEIGHT: 150
                }
        },
        "./node_modules/xcomponent/src/drivers/angular.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return o
            });
            var r = t("./node_modules/xcomponent/src/lib/index.js"),
                o = {
                    global: function() {
                        return window.angular
                    },
                    register: function(e, n) {
                        return n.module(e.tag, []).directive(Object(r.i)(e.tag), function() {
                            for (var n = {}, t = e.getPropNames(), o = Array.isArray(t), i = 0, t = o ? t : t[Symbol.iterator]();;) {
                                var a;
                                if (o) {
                                    if (i >= t.length) break;
                                    a = t[i++]
                                } else {
                                    if (i = t.next(), i.done) break;
                                    a = i.value
                                }
                                n[a] = "="
                            }
                            return e.looseProps && (n.props = "="), {
                                scope: n,
                                restrict: "E",
                                controller: ["$scope", "$element", function(t, o) {
                                    function i() {
                                        if ("$apply" !== t.$root.$$phase && "$digest" !== t.$root.$$phase) try {
                                            t.$apply()
                                        } catch (e) {}
                                    }
                                    if (e.looseProps && !t.props) throw new Error("For angular bindings to work, prop definitions must be passed to xcomponent.create");
                                    e.log("instantiate_angular_component");
                                    var a = function() {
                                            var e = void 0;
                                            if (t.props) e = t.props;
                                            else {
                                                e = {};
                                                for (var o = Object.keys(n), a = Array.isArray(o), s = 0, o = a ? o : o[Symbol.iterator]();;) {
                                                    var c;
                                                    if (a) {
                                                        if (s >= o.length) break;
                                                        c = o[s++]
                                                    } else {
                                                        if (s = o.next(), s.done) break;
                                                        c = s.value
                                                    }
                                                    var u = c;
                                                    void 0 !== t[u] && (e[u] = t[u])
                                                }
                                            }
                                            return e = Object(r.Q)(e, {
                                                function: function(e) {
                                                    return function() {
                                                        var n = e.apply(this, arguments);
                                                        return i(), n
                                                    }
                                                }
                                            })
                                        },
                                        s = e.init(a(), null, o[0]);
                                    s.render(o[0]), t.$watch(function() {
                                        s.updateProps(a())
                                    })
                                }]
                            }
                        })
                    }
                }
        },
        "./node_modules/xcomponent/src/drivers/angular2.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            });
            var r = t("./node_modules/xcomponent/src/lib/index.js"),
                o = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                },
                i = {
                    global: function() {},
                    register: function(e, n) {
                        var t = n.Component,
                            i = n.NgModule,
                            a = n.ElementRef,
                            s = n.NgZone;
                        e.log("initializing angular2 component");
                        var c = function(e) {
                                return Object(r.Q)(o({}, e.internalProps, e.props), {
                                    function: function(n) {
                                        if ("function" == typeof n) return function() {
                                            var t = this,
                                                r = arguments;
                                            return e.zone.run(function() {
                                                return n.apply(t, r)
                                            })
                                        }
                                    }
                                })
                            },
                            u = t({
                                selector: e.tag,
                                template: "<div></div>",
                                inputs: ["props"]
                            }).Class({
                                constructor: [a, s, function(e, n) {
                                    this.elementRef = e, this.zone = n
                                }],
                                ngOnInit: function() {
                                    var n = this.elementRef.nativeElement,
                                        t = e.init(c(this), null, n);
                                    t.render(n), this.parent = t
                                },
                                ngOnChanges: function() {
                                    this.parent && this.parent.updateProps(c(this))
                                }
                            });
                        return i({
                            declarations: [u],
                            exports: [u]
                        }).Class({
                            constructor: function() {}
                        })
                    }
                }
        },
        "./node_modules/xcomponent/src/drivers/ember.js": function(e, n) {},
        "./node_modules/xcomponent/src/drivers/glimmer.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, n) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != typeof n && "function" != typeof n ? e : n
            }

            function i(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
            }
            t.d(n, "a", function() {
                return s
            });
            var a = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                },
                s = {
                    global: function() {},
                    register: function(e, n) {
                        return function(n) {
                            function t() {
                                return r(this, t), o(this, n.apply(this, arguments))
                            }
                            return i(t, n), t.prototype.didInsertElement = function() {
                                e.render(a({}, this.args), this.element)
                            }, t
                        }(n)
                    }
                }
        },
        "./node_modules/xcomponent/src/drivers/index.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/xcomponent/src/drivers/script.js");
            t.d(n, "script", function() {
                return r.a
            });
            var o = t("./node_modules/xcomponent/src/drivers/react.js");
            t.d(n, "react", function() {
                return o.a
            });
            var i = t("./node_modules/xcomponent/src/drivers/vue.js");
            t.d(n, "vue", function() {
                return i.a
            });
            var a = t("./node_modules/xcomponent/src/drivers/angular.js");
            t.d(n, "angular", function() {
                return a.a
            });
            var s = t("./node_modules/xcomponent/src/drivers/ember.js");
            t.n(s);
            t.o(s, "angular2") && t.d(n, "angular2", function() {
                return s.angular2
            }), t.o(s, "glimmer") && t.d(n, "glimmer", function() {
                return s.glimmer
            });
            var c = t("./node_modules/xcomponent/src/drivers/glimmer.js");
            t.d(n, "glimmer", function() {
                return c.a
            });
            var u = t("./node_modules/xcomponent/src/drivers/angular2.js");
            t.d(n, "angular2", function() {
                return u.a
            })
        },
        "./node_modules/xcomponent/src/drivers/react.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, n) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != typeof n && "function" != typeof n ? e : n
            }

            function i(e, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
            }
            t.d(n, "a", function() {
                return s
            });
            var a = t("./node_modules/xcomponent/src/lib/index.js"),
                s = {
                    global: function() {
                        if (window.React && window.ReactDOM) return {
                            React: window.React,
                            ReactDOM: window.ReactDOM
                        }
                    },
                    register: function(e, n) {
                        var t = n.React,
                            s = n.ReactDOM;
                        return t.createClass ? e.react = t.createClass({
                            render: function() {
                                return t.createElement("div", null)
                            },
                            componentDidMount: function() {
                                e.log("instantiate_react_component");
                                var n = s.findDOMNode(this),
                                    t = e.init(Object(a.t)({}, this.props), null, n);
                                this.setState({
                                    parent: t
                                }), t.render(n)
                            },
                            componentDidUpdate: function() {
                                this.state && this.state.parent && this.state.parent.updateProps(Object(a.t)({}, this.props))
                            },
                            componentWillUnmount: function() {
                                this.state && this.state.parent && this.state.parent.destroy()
                            }
                        }) : e.react = function(n) {
                            function c() {
                                return r(this, c), o(this, n.apply(this, arguments))
                            }
                            return i(c, n), c.prototype.render = function() {
                                return t.createElement("div", null)
                            }, c.prototype.componentDidMount = function() {
                                e.log("instantiate_react_component");
                                var n = s.findDOMNode(this),
                                    t = e.init(Object(a.t)({}, this.props), null, n);
                                this.setState({
                                    parent: t
                                }), t.render(n)
                            }, c.prototype.componentDidUpdate = function() {
                                this.state && this.state.parent && this.state.parent.updateProps(Object(a.t)({}, this.props))
                            }, c.prototype.componentWillUnmount = function() {
                                this.state && this.state.parent && this.state.parent.destroy()
                            }, c
                        }(t.Component), e.react
                    }
                }
        },
        "./node_modules/xcomponent/src/drivers/script.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return script
            });
            var script = {
                global: function() {
                    return window.document
                },
                register: function register(component, document) {
                    function render(element) {
                        if (element && element.tagName && "script" === element.tagName.toLowerCase() && element.attributes.type && "application/x-component" === element.attributes.type.value && element.parentNode) {
                            var tag = element.getAttribute("data-component");
                            if (tag && tag === component.tag) {
                                component.log("instantiate_script_component");
                                var props = element.innerText ? eval("(" + element.innerText + ")") : {},
                                    container = document.createElement("div");
                                if (!element.parentNode) throw new Error("Element has no parent");
                                element.parentNode.replaceChild(container, element), component.render(props, container)
                            }
                        }
                    }

                    function scan() {
                        for (var e = Array.prototype.slice.call(document.getElementsByTagName("script")), n = e, t = Array.isArray(n), r = 0, n = t ? n : n[Symbol.iterator]();;) {
                            var o;
                            if (t) {
                                if (r >= n.length) break;
                                o = n[r++]
                            } else {
                                if (r = n.next(), r.done) break;
                                o = r.value
                            }
                            render(o)
                        }
                    }
                    scan(), document.addEventListener("DOMContentLoaded", scan), window.addEventListener("load", scan), document.addEventListener("DOMNodeInserted", function(e) {
                        render(e.target)
                    })
                }
            }
        },
        "./node_modules/xcomponent/src/drivers/vue.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return o
            });
            var r = t("./node_modules/xcomponent/src/lib/index.js"),
                o = {
                    global: function() {},
                    register: function(e) {
                        return {
                            template: "<div></div>",
                            inheritAttrs: !1,
                            mounted: function() {
                                var n = this.$el;
                                this.parent = e.init(Object(r.t)({}, this.$attrs), null, n), this.parent.render(n)
                            },
                            beforeUpdate: function() {
                                this.parent && this.$attrs && this.parent.updateProps(Object(r.t)({}, this.$attrs))
                            }
                        }
                    }
                }
        },
        "./node_modules/xcomponent/src/error.js": function(e, n, t) {
            "use strict";

            function r(e) {
                this.message = e
            }

            function o(e) {
                this.message = e
            }

            function i(e) {
                this.message = e
            }
            n.b = r, n.a = o, n.c = i, r.prototype = Object.create(Error.prototype), o.prototype = Object.create(Error.prototype), i.prototype = Object.create(Error.prototype)
        },
        "./node_modules/xcomponent/src/index.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/xcomponent/src/interface.js");
            t.d(n, "a", function() {
                return r.create
            })
        },
        "./node_modules/xcomponent/src/interface.js": function(e, n, t) {
            "use strict";

            function r(e) {
                return new s.a(e)
            }

            function o(e) {
                return s.a.getByTag(e)
            }

            function i() {
                return c.a.destroyAll()
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.create = r, n.getByTag = o, n.destroyAll = i, t.d(n, "postRobot", function() {
                return f
            }), t.d(n, "CONSTANTS", function() {
                return p
            });
            var a = (t("./node_modules/zalgo-promise/src/index.js"), t("./node_modules/post-robot/src/index.js")),
                s = t("./node_modules/xcomponent/src/component/index.js"),
                c = t("./node_modules/xcomponent/src/component/parent/index.js"),
                u = t("./node_modules/xcomponent/src/constants.js"),
                d = t("./node_modules/xcomponent/src/lib/index.js");
            t.d(n, "getCurrentScriptDir", function() {
                return d.w
            });
            var l = t("./node_modules/xcomponent/src/error.js");
            t.d(n, "PopupOpenError", function() {
                return l.b
            }), t.d(n, "IntegrationError", function() {
                return l.a
            }), t.d(n, "RenderError", function() {
                return l.c
            });
            var f = a,
                p = u
        },
        "./node_modules/xcomponent/src/lib/css.js": function(e, n, t) {
            "use strict";

            function r(e) {
                return "string" == typeof e && /^[0-9]+%$/.test(e)
            }

            function o(e) {
                return "string" == typeof e && /^[0-9]+px$/.test(e)
            }

            function i(e) {
                if ("number" == typeof e) return e;
                var n = e.match(/^([0-9]+)(px|%)$/);
                if (!n) throw new Error("Could not match css value from " + e);
                return parseInt(n[1], 10)
            }

            function a(e) {
                return i(e) + "px"
            }

            function s(e) {
                return "number" == typeof e ? a(e) : r(e) ? e : a(e)
            }

            function c(e, n) {
                return parseInt(e * i(n) / 100, 10)
            }

            function u(e, n) {
                if ("number" == typeof e) return e;
                if (r(e)) return c(n, e);
                if (o(e)) return i(e);
                throw new Error("Can not normalize dimension: " + e)
            }
            n.a = r, n.b = o, n.d = s, n.c = u
        },
        "./node_modules/xcomponent/src/lib/decorators.js": function(e, n, t) {
            "use strict";

            function r(e, n, t) {
                var r = t.value;
                t.value = function() {
                    return this.__memoized__ = this.__memoized__ || {}, this.__memoized__.hasOwnProperty(n) || (this.__memoized__[n] = r.apply(this, arguments)), this.__memoized__[n]
                }, t.value.displayName = n + ":memoized"
            }
            n.a = r;
            t("./node_modules/zalgo-promise/src/index.js")
        },
        "./node_modules/xcomponent/src/lib/dom.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                e.appendChild(n)
            }

            function o(e) {
                return e instanceof window.Element || null !== e && "object" === (void 0 === e ? "undefined" : ne(e)) && 1 === e.nodeType && "object" === ne(e.style) && "object" === ne(e.ownerDocument)
            }

            function i(e, n) {
                return Array.prototype.slice.call(e.querySelectorAll(n))
            }

            function a(e) {
                if (o(e)) return e;
                if ("string" == typeof e) {
                    var n = document.getElementById(e);
                    if (n) return n;
                    if (document.querySelector && (n = document.querySelector(e)), n) return n
                }
            }

            function s(e) {
                var n = a(e);
                if (n) return n;
                throw new Error("Can not find element: " + Object($.k)(e))
            }

            function c() {
                return "complete" === window.document.readyState
            }

            function u(e) {
                return new Q.a(function(n, t) {
                    var r = Object($.k)(e),
                        o = a(e);
                    if (o) return n(o);
                    if (c()) return t(new Error("Document is ready and element " + r + " does not exist"));
                    var i = setInterval(function() {
                        return o = a(e), o ? (clearInterval(i), n(o)) : c() ? (clearInterval(i), t(new Error("Document is ready and element " + r + " does not exist"))) : void 0
                    }, 10)
                })
            }

            function d(e, n) {
                var t = Object.keys(n).map(function(e) {
                        if (n[e]) return e + "=" + Object($.k)(n[e])
                    }).filter(Boolean).join(","),
                    r = void 0;
                try {
                    r = window.open(e, n.name, t, !0)
                } catch (e) {
                    throw new V.b("Can not open popup window - " + (e.stack || e.message))
                }
                if (Object(Z.x)(r)) {
                    throw new V.b("Can not open popup window - blocked")
                }
                return r
            }

            function l(e, n) {
                try {
                    e.document.open(), e.document.write(n), e.document.close()
                } catch (t) {
                    try {
                        e.location = "javascript: document.open(); document.write(" + JSON.stringify(n) + "); document.close();"
                    } catch (e) {}
                }
            }

            function f(e, n) {
                var t = n.tagName.toLowerCase();
                if ("html" !== t) throw new Error("Expected element to be html, got " + t);
                for (var r = e.document.documentElement; r.children && r.children.length;) r.removeChild(r.children[0]);
                for (; n.children.length;) r.appendChild(n.children[0])
            }

            function p(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.document;
                e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(t.createTextNode(n))
            }

            function m() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = arguments[2];
                e = e.toLowerCase();
                var o = document.createElement(e);
                if (n.style && Object($.f)(o.style, n.style), n.class && (o.className = n.class.join(" ")), n.attributes)
                    for (var i = Object.keys(n.attributes), a = Array.isArray(i), s = 0, i = a ? i : i[Symbol.iterator]();;) {
                        var c;
                        if (a) {
                            if (s >= i.length) break;
                            c = i[s++]
                        } else {
                            if (s = i.next(), s.done) break;
                            c = s.value
                        }
                        var u = c;
                        o.setAttribute(u, n.attributes[u])
                    }
                if (n.styleSheet && p(o, n.styleSheet), t && r(t, o), n.html)
                    if ("iframe" === e) {
                        if (!t || !o.contentWindow) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                        l(o.contentWindow, n.html)
                    } else o.innerHTML = n.html;
                return o
            }

            function h(e) {
                if (re.has(e)) {
                    var n = re.get(e);
                    if (n) return n
                }
                var t = new Q.a(function(n, t) {
                    e.addEventListener("load", function() {
                        Object(Z.y)(e), n(e)
                    }), e.addEventListener("error", function(r) {
                        e.contentWindow ? n(e) : t(r)
                    })
                });
                return re.set(e, t), t
            }

            function b(e) {
                return e.contentWindow ? Q.a.resolve(e.contentWindow) : h(e).then(function(e) {
                    if (!e.contentWindow) throw new Error("Could not find window in iframe");
                    return e.contentWindow
                })
            }

            function w() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments[1],
                    t = s(n),
                    r = e.attributes || {},
                    o = e.style || {},
                    i = m("iframe", {
                        attributes: ee({
                            frameBorder: "0",
                            allowTransparency: "true"
                        }, r),
                        style: ee({
                            backgroundColor: "transparent"
                        }, o),
                        html: e.html,
                        class: e.class
                    });
                return h(i), t.appendChild(i), (e.url || window.navigator.userAgent.match(/MSIE|Edge/i)) && i.setAttribute("src", e.url || "about:blank"), i
            }

            function y(e, n, t) {
                return e.addEventListener(n, t), {
                    cancel: function() {
                        e.removeEventListener(n, t)
                    }
                }
            }

            function v() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object.keys(e).filter(function(n) {
                    return "string" == typeof e[n]
                }).map(function(n) {
                    return Object($.n)(n) + "=" + Object($.n)(e[n])
                }).join("&")
            }

            function g(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return n && Object.keys(n).length ? v(ee({}, oe(e), n)) : e
            }

            function E(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = n.query || {},
                    r = n.hash || {},
                    o = void 0,
                    i = void 0,
                    a = void 0,
                    s = e.split("#");
                o = s[0], a = s[1];
                var c = o.split("?");
                o = c[0], i = c[1];
                var u = g(i, t),
                    d = g(a, r);
                return u && (o = o + "?" + u), d && (o = o + "#" + d), o
            }

            function _(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3;
                return new Q.a(function(t, r) {
                    var o = s(e),
                        i = o.getBoundingClientRect(),
                        a = void 0,
                        c = void 0;
                    a = setInterval(function() {
                        var e = o.getBoundingClientRect();
                        if (i.top === e.top && i.bottom === e.bottom && i.left === e.left && i.right === e.right && i.width === e.width && i.height === e.height) return clearTimeout(c), clearInterval(a), t();
                        i = e
                    }, 50), c = setTimeout(function() {
                        clearInterval(a), r(new Error("Timed out waiting for element to stop animating after " + n + "ms"))
                    }, n)
                })
            }

            function O(e) {
                return {
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }

            function j(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "auto",
                    t = e.style,
                    r = t.overflow,
                    o = t.overflowX,
                    i = t.overflowY;
                return e.style.overflow = e.style.overflowX = e.style.overflowY = n, {
                    reset: function() {
                        e.style.overflow = r, e.style.overflowX = o, e.style.overflowY = i
                    }
                }
            }

            function S(e, n, t) {
                var r = t.width,
                    o = void 0 === r || r,
                    i = t.height,
                    a = void 0 === i || i,
                    s = t.threshold,
                    c = void 0 === s ? 0 : s;
                return !!(o && Math.abs(e.width - n.width) > c) || !!(a && Math.abs(e.height - n.height) > c)
            }

            function A(e, n) {
                var t = n.width,
                    r = void 0 === t || t,
                    o = n.height,
                    i = void 0 === o || o,
                    a = n.threshold,
                    s = void 0 === a ? 0 : a,
                    c = O(e);
                return {
                    check: function() {
                        var n = O(e);
                        return {
                            changed: S(c, n, {
                                width: r,
                                height: i,
                                threshold: s
                            }),
                            dimensions: n
                        }
                    },
                    reset: function() {
                        c = O(e)
                    }
                }
            }

            function x(e, n) {
                var t = n.width,
                    r = void 0 === t || t,
                    o = n.height,
                    i = void 0 === o || o,
                    a = n.delay,
                    s = void 0 === a ? 50 : a,
                    c = n.threshold,
                    u = void 0 === c ? 0 : c;
                return new Q.a(function(n) {
                    function t() {
                        var e = o.check(),
                            n = e.changed,
                            r = e.dimensions;
                        n && (o.reset(), window.removeEventListener("resize", t), c(r))
                    }
                    var o = A(e, {
                            width: r,
                            height: i,
                            threshold: u
                        }),
                        a = void 0,
                        c = Object(K.a)(function(e) {
                            return clearInterval(a), n(e)
                        }, 4 * s);
                    a = setInterval(function() {
                        var e = o.check(),
                            n = e.changed,
                            t = e.dimensions;
                        if (n) return o.reset(), c(t)
                    }, s), window.addEventListener("resize", t)
                })
            }

            function T(e, n) {
                var t = n.width,
                    r = n.height,
                    o = O(e);
                return (!t || o.width === window.innerWidth) && (!r || o.height === window.innerHeight)
            }

            function P(e, n, t) {
                t = Object(K.e)(t);
                for (var r = n, o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator]();;) {
                    var a;
                    if (o) {
                        if (i >= r.length) break;
                        a = r[i++]
                    } else {
                        if (i = r.next(), i.done) break;
                        a = i.value
                    }
                    var s = a;
                    e.addEventListener(s, t)
                }
                return {
                    cancel: Object(K.e)(function() {
                        for (var r = n, o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator]();;) {
                            var a;
                            if (o) {
                                if (i >= r.length) break;
                                a = r[i++]
                            } else {
                                if (i = r.next(), i.done) break;
                                a = i.value
                            }
                            var s = a;
                            e.removeEventListener(s, t)
                        }
                    })
                }
            }

            function C(e, n, t) {
                e.style[n] = t;
                for (var r = Object($.a)(n), o = ie, i = Array.isArray(o), a = 0, o = i ? o : o[Symbol.iterator]();;) {
                    var s;
                    if (i) {
                        if (a >= o.length) break;
                        s = o[a++]
                    } else {
                        if (a = o.next(), a.done) break;
                        s = a.value
                    }
                    var c = s;
                    e.style["" + c + r] = t
                }
            }

            function L(e, n) {
                var t = e.ownerDocument.styleSheets;
                try {
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r].cssRules;
                        if (o)
                            for (var i = 0; i < o.length; i++) {
                                var a = o[i];
                                if (a && (a.type === se && a.name === n)) return !0
                            }
                    }
                } catch (e) {
                    return !1
                }
                return !1
            }

            function I(e, n, t) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e3;
                return new Q.a(function(o, i) {
                    function a() {
                        C(c, "animationName", ""), clearTimeout(d), clearTimeout(l), f.cancel(), p.cancel()
                    }
                    var c = s(e);
                    if (!c || !L(c, n)) return o();
                    var u = !1,
                        d = void 0,
                        l = void 0,
                        f = void 0,
                        p = void 0;
                    f = P(c, ce, function(e) {
                        e.target === c && e.animationName === n && (clearTimeout(d), e.stopPropagation(), f.cancel(), u = !0, l = setTimeout(function() {
                            a(), o()
                        }, r))
                    }), p = P(c, ue, function(e) {
                        if (e.target === c && e.animationName === n) return a(), "string" == typeof e.animationName && e.animationName !== n ? i("Expected animation name to be " + n + ", found " + e.animationName) : o()
                    }), C(c, "animationName", n), d = setTimeout(function() {
                        if (!u) return a(), o()
                    }, 200), t && t(a)
                })
            }

            function N(e) {
                e.style.setProperty("display", "")
            }

            function k(e) {
                e.style.setProperty("display", de.DISPLAY.NONE, de.IMPORTANT)
            }

            function D(e) {
                e.parentNode && e.parentNode.removeChild(e)
            }

            function R(e, n, t) {
                var r = I(e, n, t);
                return N(e), r
            }

            function M(e, n, t) {
                return I(e, n, t).then(function() {
                    k(e)
                })
            }

            function W(e, n) {
                e.classList ? e.classList.add(n) : -1 === e.className.split(/\s+/).indexOf(n) && (e.className += " " + n)
            }

            function G(e, n) {
                e.classList ? e.classList.remove(n) : -1 !== e.className.split(/\s+/).indexOf(n) && (e.className = e.className.replace(n, ""))
            }

            function z() {
                return console.warn("Do not use xcomponent.getCurrentScriptDir() in production -- browser support is limited"), document.currentScript ? document.currentScript.src.split("/").slice(0, -1).join("/") : "."
            }

            function U(e) {
                return !e || !e.parentNode
            }

            function B(e, n) {
                n = Object(K.e)(n);
                var t = void 0;
                return U(e) ? n() : t = Object($.j)(function() {
                    U(e) && (t.cancel(), n())
                }, 50), {
                    cancel: function() {
                        t && t.cancel()
                    }
                }
            }

            function F(e, n) {
                return new Q.a(function(t, r) {
                    var o = new window.XMLHttpRequest;
                    o.open("GET", n), o.setRequestHeader("Accept", e), o.send(null), o.onload = function() {
                        t(o.responseText)
                    }, o.onerror = function() {
                        return r(new Error("prefetch failed"))
                    }
                })
            }

            function H(e) {
                return F("text/html", e)
            }

            function q(e) {
                return H(e)
            }

            function Y(e) {
                for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.document, t = i(e, "script"), r = Array.isArray(t), o = 0, t = r ? t : t[Symbol.iterator]();;) {
                    var a;
                    if (r) {
                        if (o >= t.length) break;
                        a = t[o++]
                    } else {
                        if (o = t.next(), o.done) break;
                        a = o.value
                    }
                    var s = a,
                        c = n.createElement("script");
                    c.text = s.textContent, s.parentNode.replaceChild(c, s)
                }
            }

            function X(e, n, t) {
                e = e.toLowerCase();
                var o = this && this.createElement ? this : window.document,
                    i = o.createElement(e);
                for (var a in n) a in le ? i.addEventListener(le[a], n[a]) : "innerHTML" === a ? (i.innerHTML = n[a], Y(i, o)) : i.setAttribute(a, n[a]);
                if ("style" === e) {
                    if ("string" != typeof t) throw new TypeError("Expected " + e + " tag content to be string, got " + (void 0 === t ? "undefined" : ne(t)));
                    if (arguments.length > 3) throw new Error("Expected only text content for " + e + " tag");
                    p(i, t, o)
                } else if ("iframe" === e) {
                    if (arguments.length > 3) throw new Error("Expected only single child node for iframe");
                    i.addEventListener("load", function() {
                        var e = i.contentWindow;
                        if (!e) throw new Error("Expected frame to have contentWindow");
                        "string" == typeof t ? l(e, t) : f(e, t)
                    })
                } else if ("script" === e) {
                    if ("string" != typeof t) throw new TypeError("Expected " + e + " tag content to be string, got " + (void 0 === t ? "undefined" : ne(t)));
                    if (arguments.length > 3) throw new Error("Expected only text content for " + e + " tag");
                    i.text = t
                } else
                    for (var s = 2; s < arguments.length; s++)
                        if ("string" == typeof arguments[s]) {
                            var c = o.createTextNode(arguments[s]);
                            r(i, c)
                        } else r(i, arguments[s]); return i
            }
            n.d = r, n.n = s, t.d(n, "i", function() {
                return te
            }), n.j = u, n.s = d, n.B = l, n.A = f, n.e = h, n.f = b, n.p = w, n.b = y, n.l = E, n.k = _, n.v = j, n.y = A, n.r = x, n.h = T, n.x = N, n.o = k, n.g = D, n.w = R, n.c = M, n.a = W, n.u = G, n.m = z, n.z = B, n.t = q, n.q = X;
            var Z = t("./node_modules/cross-domain-utils/src/index.js"),
                Q = t("./node_modules/zalgo-promise/src/index.js"),
                J = t("./node_modules/cross-domain-safe-weakmap/src/index.js"),
                V = t("./node_modules/xcomponent/src/error.js"),
                K = t("./node_modules/xcomponent/src/lib/fn.js"),
                $ = t("./node_modules/xcomponent/src/lib/util.js"),
                ee = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                },
                ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                te = new Q.a(function(e) {
                    if ("complete" === window.document.readyState) return e(window.document);
                    var n = setInterval(function() {
                        if ("complete" === window.document.readyState) return clearInterval(n), e(window.document)
                    }, 10)
                }),
                re = new J.a,
                oe = Object(K.c)(function(e) {
                    var n = {};
                    if (!e) return n;
                    if (-1 === e.indexOf("=")) throw new Error("Can not parse query string params: " + e);
                    for (var t = e.split("&"), r = Array.isArray(t), o = 0, t = r ? t : t[Symbol.iterator]();;) {
                        var i;
                        if (r) {
                            if (o >= t.length) break;
                            i = t[o++]
                        } else {
                            if (o = t.next(), o.done) break;
                            i = o.value
                        }
                        var a = i;
                        a = a.split("="), a[0] && a[1] && (n[decodeURIComponent(a[0])] = decodeURIComponent(a[1]))
                    }
                    return n
                }),
                ie = ["webkit", "moz", "ms", "o"],
                ae = window.CSSRule,
                se = ae.KEYFRAMES_RULE || ae.WEBKIT_KEYFRAMES_RULE || ae.MOZ_KEYFRAMES_RULE || ae.O_KEYFRAMES_RULE || ae.MS_KEYFRAMES_RULE,
                ce = ["animationstart", "webkitAnimationStart", "oAnimationStart", "MSAnimationStart"],
                ue = ["animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd"],
                de = {
                    DISPLAY: {
                        NONE: "none",
                        BLOCK: "block"
                    },
                    VISIBILITY: {
                        VISIBLE: "visible",
                        HIDDEN: "hidden"
                    },
                    IMPORTANT: "important"
                },
                le = {
                    onClick: "click"
                }
        },
        "./node_modules/xcomponent/src/lib/fn.js": function(e, n, t) {
            "use strict";

            function r() {}

            function o(e) {
                var n = !1,
                    t = void 0;
                return function() {
                    for (var r = arguments.length, o = Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                    return n ? t : (n = !0, t = e.apply(this, arguments))
                }
            }

            function i(e) {
                var n = {};
                return function() {
                    for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                    var i = void 0;
                    try {
                        i = JSON.stringify(Array.prototype.slice.call(arguments), function(e, n) {
                            return "function" == typeof n ? "xcomponent:memoize[" + Object(u.h)(n) + "]" : n
                        })
                    } catch (e) {
                        throw new Error("Arguments not serializable -- can not be used to memoize")
                    }
                    return n.hasOwnProperty(i) || (n[i] = e.apply(this, arguments)), n[i]
                }
            }

            function a(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                    t = void 0;
                return function() {
                    var r = this,
                        o = arguments;
                    clearTimeout(t), t = setTimeout(function() {
                        return e.apply(r, o)
                    }, n)
                }
            }

            function s(e) {
                return Object(u.i)(e, {
                    function: function() {
                        return {
                            __type__: "__function__"
                        }
                    }
                })
            }

            function c(e, n) {
                return Object(u.i)(e, {
                    object: function(e, t, r) {
                        if (e && "__function__" === e.__type__) return function() {
                            return n({
                                key: t,
                                fullKey: r,
                                self: this,
                                args: arguments
                            })
                        }
                    }
                })
            }
            n.d = r, n.e = o, n.c = i, n.a = a, n.f = s, n.b = c;
            var u = t("./node_modules/xcomponent/src/lib/util.js")
        },
        "./node_modules/xcomponent/src/lib/global.js": function(e, n, t) {
            "use strict";

            function r(e) {
                if (Object(o.t)(e)) return e[i.__XCOMPONENT__] || (e[i.__XCOMPONENT__] = {}), e[i.__XCOMPONENT__]
            }
            n.b = r, t.d(n, "a", function() {
                return a
            });
            var o = t("./node_modules/cross-domain-utils/src/index.js"),
                i = t("./node_modules/xcomponent/src/constants.js"),
                a = function() {
                    var e = r(window);
                    if (!e) throw new Error("Could not get local global");
                    return e
                }()
        },
        "./node_modules/xcomponent/src/lib/index.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/xcomponent/src/lib/dom.js");
            t.d(n, "a", function() {
                return r.a
            }), t.d(n, "b", function() {
                return r.b
            }), t.d(n, "c", function() {
                return r.c
            }), t.d(n, "d", function() {
                return r.d
            }), t.d(n, "e", function() {
                return r.e
            }), t.d(n, "f", function() {
                return r.f
            }), t.d(n, "l", function() {
                return r.g
            }), t.d(n, "m", function() {
                return r.h
            }), t.d(n, "n", function() {
                return r.i
            }), t.d(n, "p", function() {
                return r.j
            }), t.d(n, "q", function() {
                return r.k
            }), t.d(n, "u", function() {
                return r.l
            }), t.d(n, "w", function() {
                return r.m
            }), t.d(n, "x", function() {
                return r.n
            }), t.d(n, "A", function() {
                return r.o
            }), t.d(n, "B", function() {
                return r.p
            }), t.d(n, "F", function() {
                return r.q
            }), t.d(n, "K", function() {
                return r.r
            }), t.d(n, "M", function() {
                return r.s
            }), t.d(n, "N", function() {
                return r.t
            }), t.d(n, "P", function() {
                return r.u
            }), t.d(n, "T", function() {
                return r.v
            }), t.d(n, "U", function() {
                return r.w
            }), t.d(n, "V", function() {
                return r.x
            }), t.d(n, "Z", function() {
                return r.y
            }), t.d(n, "_2", function() {
                return r.z
            }), t.d(n, "_3", function() {
                return r.A
            }), t.d(n, "_4", function() {
                return r.B
            });
            var o = t("./node_modules/xcomponent/src/lib/fn.js");
            t.d(n, "k", function() {
                return o.b
            }), t.d(n, "G", function() {
                return o.c
            }), t.d(n, "I", function() {
                return o.d
            }), t.d(n, "L", function() {
                return o.e
            }), t.d(n, "R", function() {
                return o.f
            });
            var i = t("./node_modules/xcomponent/src/lib/promise.js");
            t.d(n, "h", function() {
                return i.a
            }), t.d(n, "j", function() {
                return i.b
            }), t.d(n, "O", function() {
                return i.c
            });
            var a = t("./node_modules/xcomponent/src/lib/util.js");
            t.d(n, "g", function() {
                return a.b
            }), t.d(n, "i", function() {
                return a.c
            }), t.d(n, "o", function() {
                return a.d
            }), t.d(n, "s", function() {
                return a.e
            }), t.d(n, "t", function() {
                return a.f
            }), t.d(n, "v", function() {
                return a.g
            }), t.d(n, "Q", function() {
                return a.i
            }), t.d(n, "W", function() {
                return a.k
            }), t.d(n, "X", function() {
                return a.l
            }), t.d(n, "_0", function() {
                return a.m
            });
            var s = t("./node_modules/xcomponent/src/lib/css.js");
            t.d(n, "D", function() {
                return s.a
            }), t.d(n, "E", function() {
                return s.b
            }), t.d(n, "J", function() {
                return s.c
            }), t.d(n, "Y", function() {
                return s.d
            });
            var c = t("./node_modules/xcomponent/src/lib/decorators.js");
            t.d(n, "H", function() {
                return c.a
            });
            var u = t("./node_modules/xcomponent/src/lib/logger.js");
            t.d(n, "r", function() {
                return u.a
            }), t.d(n, "C", function() {
                return u.b
            }), t.d(n, "S", function() {
                return u.c
            }), t.d(n, "_1", function() {
                return u.d
            });
            var d = t("./node_modules/xcomponent/src/lib/global.js");
            t.d(n, "y", function() {
                return d.a
            }), t.d(n, "z", function() {
                return d.b
            })
        },
        "./node_modules/xcomponent/src/lib/logger.js": function(e, n, t) {
            "use strict";

            function r(e) {
                if (-1 === c.e.indexOf(e)) throw new Error("Invalid logLevel: " + e);
                c.a.logLevel = e, s.CONFIG.LOG_LEVEL = e, window.LOG_LEVEL = e
            }

            function o(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(c.d)("xc_" + e + "_" + n, t)
            }

            function i(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(c.f)("xc_" + e + "_" + n, t)
            }

            function a(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(c.b)("xc_" + e + "_" + n, t)
            }
            n.c = r, n.b = o, n.d = i, n.a = a;
            var s = t("./node_modules/post-robot/src/index.js"),
                c = t("./node_modules/beaver-logger/client/index.js")
        },
        "./node_modules/xcomponent/src/lib/promise.js": function(e, n, t) {
            "use strict";

            function r(e) {
                return function() {
                    var n = this,
                        t = Array.prototype.slice.call(arguments);
                    return t.length >= e.length ? a.a.resolve(e.apply(n, t)) : new a.a(function(r, o) {
                        t.push(function(e, n) {
                            if (e && !(e instanceof Error)) throw new Error("Passed non-Error object in callback: [ " + e + " ] -- callbacks should either be called with callback(new Error(...)) or callback(null, result).");
                            return e ? o(e) : r(n)
                        }), e.apply(n, t)
                    })
                }
            }

            function o(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return a.a.try(function() {
                        return e.apply(n, t)
                    })
                }
            }

            function i(e) {
                return a.a.try(e).then(function() {
                    return i(e)
                })
            }
            n.b = r, n.c = o, n.a = i;
            var a = t("./node_modules/zalgo-promise/src/index.js")
        },
        "./node_modules/xcomponent/src/lib/util.js": function(e, n, t) {
            "use strict";

            function r(e) {
                return e.replace(/\?/g, "%3F").replace(/&/g, "%26").replace(/#/g, "%23").replace(/\+/g, "%2B")
            }

            function o(e) {
                return e.replace(/-([a-z])/g, function(e) {
                    return e[1].toUpperCase()
                })
            }

            function i(e, n) {
                if (!n) return e;
                for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
                return e
            }

            function a() {
                var e = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return e.charAt(Math.floor(Math.random() * e.length))
                })
            }

            function s(e) {
                return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
            }

            function c(e, n, t) {
                if (!n) return t;
                for (var r = n.split("."), o = 0; o < r.length; o++) {
                    if ("object" !== (void 0 === e ? "undefined" : y(e)) || null === e) return t;
                    e = e[r[o]]
                }
                return void 0 === e ? t : e
            }

            function u(e, n) {
                function t() {
                    r = setTimeout(t, n), e.call()
                }
                var r = void 0;
                return r = setTimeout(t, n), {
                    cancel: function() {
                        clearTimeout(r)
                    }
                }
            }

            function d(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                if (Array.isArray(e)) {
                    var r = function() {
                        for (var r = e.length, o = [], i = 0; i < r; i++) ! function(r) {
                            Object.defineProperty(o, r, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    var i = t ? t + "." + r : "" + r,
                                        a = e[r],
                                        s = void 0 === a ? "undefined" : y(a),
                                        c = n[s];
                                    if (c) {
                                        var u = c(a, r, i);
                                        if (void 0 !== u) return o[r] = u, o[r]
                                    }
                                    return "object" === (void 0 === a ? "undefined" : y(a)) && null !== a ? (o[r] = d(a, n, i), o[r]) : (o[r] = a, o[r])
                                },
                                set: function(e) {
                                    delete o[r], o[r] = e
                                }
                            })
                        }(i);
                        return {
                            v: o
                        }
                    }();
                    if ("object" === (void 0 === r ? "undefined" : y(r))) return r.v
                } else {
                    if ("object" !== (void 0 === e ? "undefined" : y(e)) || null === e) throw new Error("Pass an object or array");
                    var o = function() {
                        var r = {};
                        for (var o in e) {
                            (function(o) {
                                if (!e.hasOwnProperty(o)) return "continue";
                                Object.defineProperty(r, o, {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: function() {
                                        var i = t ? t + "." + o : "" + o,
                                            a = e[o],
                                            s = void 0 === a ? "undefined" : y(a),
                                            c = n[s];
                                        if (c) {
                                            var u = c(a, o, i);
                                            if (void 0 !== u) return r[o] = u, r[o]
                                        }
                                        return "object" === (void 0 === a ? "undefined" : y(a)) && null !== a ? (r[o] = d(a, n, i), r[o]) : (r[o] = a, r[o])
                                    },
                                    set: function(e) {
                                        delete r[o], r[o] = e
                                    }
                                })
                            })(o)
                        }
                        return {
                            v: r
                        }
                    }();
                    if ("object" === (void 0 === o ? "undefined" : y(o))) return o.v
                }
            }

            function l(e, n, t, r) {
                if (e.hasOwnProperty(t)) {
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    Object.defineProperty(n, t, o)
                } else n[t] = r
            }

            function f(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                n = n ? n + "." : n;
                for (var r in e) void 0 !== e[r] && null !== e[r] && "function" != typeof e[r] && (e[r] && Array.isArray(e[r]) && e[r].length && e[r].every(function(e) {
                    return "object" !== (void 0 === e ? "undefined" : y(e))
                }) ? t["" + n + r] = e[r].join(",") : e[r] && "object" === y(e[r]) ? t = f(e[r], "" + n + r, t) : t["" + n + r] = e[r].toString());
                return t
            }

            function p(e) {
                if (null === e || void 0 === e || "object" !== (void 0 === e ? "undefined" : y(e)) && "function" != typeof e) throw new Error("Invalid object");
                var n = v.get(e);
                return n || (n = (void 0 === e ? "undefined" : y(e)) + ":" + a(), v.set(e, n)), n
            }

            function m(e) {
                return "string" == typeof e ? e : e && "function" == typeof e.toString ? e.toString() : Object.prototype.toString.call(e)
            }

            function h(e) {
                if (e) {
                    var n = e.stack,
                        t = e.message;
                    if ("string" == typeof n) return n;
                    if ("string" == typeof t) return t
                }
                return m(e)
            }

            function b() {
                var e = {},
                    n = {};
                return {
                    on: function(e, t) {
                        var r = n[e] = n[e] || [];
                        r.push(t);
                        var o = !1;
                        return {
                            cancel: function() {
                                o || (o = !0, r.splice(r.indexOf(t), 1))
                            }
                        }
                    },
                    once: function(e, n) {
                        var t = this.on(e, function() {
                            t.cancel(), n()
                        });
                        return t
                    },
                    trigger: function(e) {
                        var t = n[e];
                        if (t)
                            for (var r = t, o = Array.isArray(r), i = 0, r = o ? r : r[Symbol.iterator]();;) {
                                var a;
                                if (o) {
                                    if (i >= r.length) break;
                                    a = r[i++]
                                } else {
                                    if (i = r.next(), i.done) break;
                                    a = i.value
                                }
                                var s = a;
                                s()
                            }
                    },
                    triggerOnce: function(n) {
                        e[n] || (e[n] = !0, this.trigger(n))
                    }
                }
            }
            n.n = r, n.c = o, n.f = i, n.m = a, n.a = s, n.g = c, n.j = u, n.i = d, n.b = l, n.d = f, n.h = p, n.k = m, n.l = h, n.e = b;
            var w = t("./node_modules/cross-domain-safe-weakmap/src/index.js"),
                y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                v = new w.a
        },
        "./node_modules/xcomponent/src/types.js": function(e, n) {},
        "./node_modules/zalgo-promise/src/exceptions.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                if (-1 === i.indexOf(e)) {
                    i.push(e), setTimeout(function() {
                        throw e
                    }, 1);
                    for (var t = 0; t < a.length; t++) a[t](e, n)
                }
            }

            function o(e) {
                return a.push(e), {
                    cancel: function() {
                        a.splice(a.indexOf(e), 1)
                    }
                }
            }
            n.a = r, n.b = o;
            var i = [],
                a = []
        },
        "./node_modules/zalgo-promise/src/flush.js": function(e, n, t) {
            "use strict";

            function r() {
                if (!s && c) {
                    var e = c;
                    c = null, e.resolve()
                }
            }

            function o() {
                s += 1
            }

            function i() {
                s -= 1, r()
            }

            function a(e) {
                var n = c = c || new e;
                return r(), n
            }
            n.c = o, n.b = i, n.a = a;
            var s = 0,
                c = void 0
        },
        "./node_modules/zalgo-promise/src/index.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/zalgo-promise/src/promise.js");
            t.d(n, "a", function() {
                return r.a
            })
        },
        "./node_modules/zalgo-promise/src/promise.js": function(e, n, t) {
            "use strict";

            function r(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            t.d(n, "a", function() {
                return s
            });
            var o = t("./node_modules/zalgo-promise/src/utils.js"),
                i = t("./node_modules/zalgo-promise/src/exceptions.js"),
                a = t("./node_modules/zalgo-promise/src/flush.js"),
                s = function() {
                    function e(n) {
                        var t = this;
                        if (r(this, e), this.resolved = !1, this.rejected = !1, this.errorHandled = !1, this.handlers = [], n) {
                            var o = void 0,
                                i = void 0,
                                s = !1,
                                c = !1,
                                u = !1;
                            Object(a.c)();
                            try {
                                n(function(e) {
                                    u ? t.resolve(e) : (s = !0, o = e)
                                }, function(e) {
                                    u ? t.reject(e) : (c = !0, i = e)
                                })
                            } catch (e) {
                                return Object(a.b)(), void this.reject(e)
                            }
                            Object(a.b)(), u = !0, s ? this.resolve(o) : c && this.reject(i)
                        }
                    }
                    return e.prototype.resolve = function(e) {
                        if (this.resolved || this.rejected) return this;
                        if (Object(o.a)(e)) throw new Error("Can not resolve promise with another promise");
                        return this.resolved = !0, this.value = e, this.dispatch(), this
                    }, e.prototype.reject = function(e) {
                        var n = this;
                        if (this.resolved || this.rejected) return this;
                        if (Object(o.a)(e)) throw new Error("Can not reject promise with another promise");
                        if (!e) {
                            var t = e && "function" == typeof e.toString ? e.toString() : Object.prototype.toString.call(e);
                            e = new Error("Expected reject to be called with Error, got " + t)
                        }
                        return this.rejected = !0, this.error = e, this.errorHandled || setTimeout(function() {
                            n.errorHandled || Object(i.a)(e, n)
                        }, 1), this.dispatch(), this
                    }, e.prototype.asyncReject = function(e) {
                        return this.errorHandled = !0, this.reject(e), this
                    }, e.prototype.dispatch = function() {
                        var n = this,
                            t = this.dispatching,
                            r = this.resolved,
                            i = this.rejected,
                            s = this.handlers;
                        if (!t && (r || i)) {
                            this.dispatching = !0, Object(a.c)();
                            for (var c = 0; c < s.length; c++) {
                                (function(t) {
                                    var a = s[t],
                                        c = a.onSuccess,
                                        u = a.onError,
                                        d = a.promise,
                                        l = void 0;
                                    if (r) try {
                                        l = c ? c(n.value) : n.value
                                    } catch (e) {
                                        return d.reject(e), "continue"
                                    } else if (i) {
                                        if (!u) return d.reject(n.error), "continue";
                                        try {
                                            l = u(n.error)
                                        } catch (e) {
                                            return d.reject(e), "continue"
                                        }
                                    }
                                    l instanceof e && (l.resolved || l.rejected) ? (l.resolved ? d.resolve(l.value) : d.reject(l.error), l.errorHandled = !0) : Object(o.a)(l) ? l instanceof e && (l.resolved || l.rejected) ? l.resolved ? d.resolve(l.value) : d.reject(l.error) : l.then(function(e) {
                                        d.resolve(e)
                                    }, function(e) {
                                        d.reject(e)
                                    }) : d.resolve(l)
                                })(c)
                            }
                            s.length = 0, this.dispatching = !1, Object(a.b)()
                        }
                    }, e.prototype.then = function(n, t) {
                        if (n && "function" != typeof n && !n.call) throw new Error("Promise.then expected a function for success handler");
                        if (t && "function" != typeof t && !t.call) throw new Error("Promise.then expected a function for error handler");
                        var r = new e;
                        return this.handlers.push({
                            promise: r,
                            onSuccess: n,
                            onError: t
                        }), this.errorHandled = !0, this.dispatch(), r
                    }, e.prototype.catch = function(e) {
                        return this.then(void 0, e)
                    }, e.prototype.finally = function(n) {
                        if (n && "function" != typeof n && !n.call) throw new Error("Promise.finally expected a function");
                        return this.then(function(t) {
                            return e.try(n).then(function() {
                                return t
                            })
                        }, function(t) {
                            return e.try(n).then(function() {
                                throw t
                            })
                        })
                    }, e.prototype.timeout = function(e, n) {
                        var t = this;
                        if (this.resolved || this.rejected) return this;
                        var r = setTimeout(function() {
                            t.resolved || t.rejected || t.reject(n || new Error("Promise timed out after " + e + "ms"))
                        }, e);
                        return this.then(function(e) {
                            return clearTimeout(r), e
                        })
                    }, e.prototype.toPromise = function() {
                        if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                        return Promise.resolve(this)
                    }, e.resolve = function(n) {
                        return n instanceof e ? n : Object(o.a)(n) ? new e(function(e, t) {
                            return n.then(e, t)
                        }) : (new e).resolve(n)
                    }, e.reject = function(n) {
                        return (new e).reject(n)
                    }, e.asyncReject = function(n) {
                        return (new e).asyncReject(n)
                    }, e.all = function(n) {
                        var t = new e,
                            r = n.length,
                            i = [];
                        if (!r) return t.resolve(i), t;
                        for (var a = 0; a < n.length; a++) {
                            (function(a) {
                                var s = n[a];
                                if (s instanceof e) {
                                    if (s.resolved) return i[a] = s.value, r -= 1, "continue"
                                } else if (!Object(o.a)(s)) return i[a] = s, r -= 1, "continue";
                                e.resolve(s).then(function(e) {
                                    i[a] = e, 0 === (r -= 1) && t.resolve(i)
                                }, function(e) {
                                    t.reject(e)
                                })
                            })(a)
                        }
                        return 0 === r && t.resolve(i), t
                    }, e.hash = function(n) {
                        var t = {};
                        return e.all(Object.keys(n).map(function(r) {
                            return e.resolve(n[r]).then(function(e) {
                                t[r] = e
                            })
                        })).then(function() {
                            return t
                        })
                    }, e.map = function(n, t) {
                        return e.all(n.map(t))
                    }, e.onPossiblyUnhandledException = function(e) {
                        return Object(i.b)(e)
                    }, e.try = function(n, t, r) {
                        if (n && "function" != typeof n && !n.call) throw new Error("Promise.try expected a function");
                        var o = void 0;
                        Object(a.c)();
                        try {
                            o = n.apply(t, r || [])
                        } catch (n) {
                            return Object(a.b)(), e.reject(n)
                        }
                        return Object(a.b)(), e.resolve(o)
                    }, e.delay = function(n) {
                        return new e(function(e) {
                            setTimeout(e, n)
                        })
                    }, e.isPromise = function(n) {
                        return !!(n && n instanceof e) || Object(o.a)(n)
                    }, e.flush = function() {
                        return Object(a.a)(e)
                    }, e
                }()
        },
        "./node_modules/zalgo-promise/src/utils.js": function(e, n, t) {
            "use strict";

            function r(e) {
                try {
                    if (!e) return !1;
                    if ("undefined" != typeof Promise && e instanceof Promise) return !0;
                    if ("undefined" != typeof window && window.Window && e instanceof window.Window) return !1;
                    if ("undefined" != typeof window && window.constructor && e instanceof window.constructor) return !1;
                    var n = {}.toString;
                    if (n) {
                        var t = n.call(e);
                        if ("[object Window]" === t || "[object global]" === t || "[object DOMWindow]" === t) return !1
                    }
                    if ("function" == typeof e.then) return !0
                } catch (e) {
                    return !1
                }
                return !1
            }
            n.a = r
        },
        "./src/button/component.jsx": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return u
            });
            var r = t("./node_modules/zalgo-promise/src/index.js"),
                o = t("./node_modules/xcomponent/src/index.js"),
                i = t("./src/button/template.jsx"),
                a = t("./src/button/container.jsx"),
                s = t("./src/config.js"),
                c = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                },
                u = Object(o.a)({
                    tag: "brainblocks-button",
                    defaultEnv: "production",
                    url: {
                        test: "/base/test/windows/button/index.htm",
                        local: "http://localhost:8000/button",
                        production: "https://brainblocks.io/button.htm"
                    },
                    dimensions: {
                        width: "300px",
                        height: "50px"
                    },
                    domain: {
                        test: "mock://www.my-site.com",
                        local: "http://localhost:8000",
                        production: "https://brainblocks.io"
                    },
                    props: {
                        logLevel: {
                            type: "string",
                            value: "warn",
                            required: !1
                        },
                        style: {
                            type: "object",
                            required: !1,
                            def: function() {
                                return {}
                            }
                        },
                        renderPayPal: {
                            type: "function",
                            required: !1,
                            get value() {
                                return function(e) {
                                    var n = e.client,
                                        t = e.style,
                                        o = e.commit,
                                        i = e.payment,
                                        a = e.onAuthorize;
                                    return new r.a(function(e, n) {
                                        if (window.paypal && window.paypal.Button) return e();
                                        var t = document.createElement("script");
                                        if (t.src = "https://www.paypalobjects.com/api/checkout.min.js", t.onload = e, t.onerror = n, !document.body) throw new Error("No document.body found");
                                        document.body.appendChild(t)
                                    }).then(function() {
                                        return window.paypal.Button.render({
                                            client: n,
                                            style: t,
                                            commit: o,
                                            payment: function(e, n) {
                                                return i(e, {
                                                    payment: n.payment,
                                                    order: n.order
                                                })
                                            },
                                            onAuthorize: function(e, n) {
                                                return a(e, {
                                                    payment: n.payment,
                                                    order: n.order
                                                })
                                            }
                                        }, "#paypal-button")
                                    }).then(function() {})
                                }
                            }
                        },
                        payment: {
                            type: "object",
                            required: !0,
                            validate: function(e) {
                                if (!e.destination) throw new Error("Expected payment.destination");
                                if (!e.destination.match(/((?:xrb_[13][a-km-zA-HJ-NP-Z0-9]{59})|(?:nano_[13][a-km-zA-HJ-NP-Z0-9]{59}))/)) throw new Error("Invalid nano address: " + e.destination);
                                if (!e.currency) throw new Error("Expected payment.currency");
                                if ("rai" !== e.currency && -1 === s.a.indexOf(e.currency)) throw new Error("Expected payment.currency to be rai or " + s.a.join(", ") + ", got " + e.currency);
                                if (!e.amount) throw new Error("Expected payment.amount");
                                if (!e.amount.toString().match(/^\d+(\.\d+)?$/)) throw new Error("Expected payment.mount to be a number, got " + e.amount);
                                if (e.paypal_email && ("rai" === e.currency || "nano" === e.currency)) throw new Error("Can only use PayPal with non-nano currency")
                            },
                            decorate: function(e) {
                                return c({}, e, {
                                    amount: e.amount.toString()
                                })
                            }
                        },
                        onToken: {
                            type: "function",
                            required: !1
                        },
                        onPayment: {
                            type: "function",
                            required: !0
                        },
                        onClick: {
                            type: "function",
                            required: !1
                        }
                    },
                    defaultContext: "iframe",
                    contexts: {
                        iframe: !0,
                        popup: !0
                    },
                    prerenderTemplate: function(e) {
                        var n = e.jsxDom,
                            t = e.props;
                        return n("html", null, n("head", null, n("style", null, "\n                            html, body {\n                                border: 0;\n                                padding: 0;\n                                margin: 0;\n                            }\n                        ")), n("body", null, Object(i.a)({
                            props: t
                        })))
                    },
                    containerTemplate: a.a
                })
        },
        "./src/button/container.jsx": function(e, n, t) {
            "use strict";

            function r(e) {
                var n = e.id,
                    t = e.tag,
                    r = e.context,
                    o = e.CLASS,
                    i = e.outlet,
                    a = e.jsxDom,
                    s = e.dimensions,
                    c = s.width,
                    u = s.height,
                    d = e.props;
                return a("div", {
                    id: n,
                    class: o.XCOMPONENT + " " + o.XCOMPONENT + "-tag-" + t + " " + o.XCOMPONENT + "-context-" + r
                }, a("style", null, "\n                    #" + n + ", #" + n + " > ." + o.OUTLET + " {\n                        transition: height 0.5s ease-in-out;\n                    }\n\n                    #" + n + " > ." + o.OUTLET + " {\n                        display: inline-block;\n                        max-width: 500px;\n                        min-width: 150px;\n                        width: " + ("responsive" === d.style.size ? "100%" : c) + ";\n                        height: " + u + ";\n                        display: inline-block;\n                        position: relative;\n                        transition: height 0.5s ease-in-out;\n                    }\n\n                    #" + n + " > ." + o.OUTLET + " > iframe {\n                        height: 100%;\n                        width: 100%;\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        transition: opacity .2s ease-in-out;\n                    }\n\n                    #" + n + " > ." + o.OUTLET + " > iframe." + o.VISIBLE + " {\n                        opacity: 1;\n                    }\n\n                    #" + n + " > ." + o.OUTLET + " > iframe." + o.INVISIBLE + " {\n                        opacity: 0;\n                    }\n\n                    #" + n + " #paypal-button {\n                        margin-top: 10px;\n                        border-top: 1px solid #eeee;\n                        padding-top: 15px;\n                        width: " + ("responsive" === d.style.size ? "100%" : c) + ";\n                    }\n                "), i, d.payment.paypal_email ? a("div", {
                    id: "paypal-button"
                }) : a("span", null))
            }
            n.a = r
        },
        "./src/button/index.js": function(e, n, t) {
            "use strict";
            var r = t("./src/button/component.jsx");
            t.d(n, "a", function() {
                return r.a
            });
            var o = t("./src/button/template.jsx");
            t.d(n, "b", function() {
                return o.a
            })
        },
        "./src/button/template.jsx": function(e, n, t) {
            "use strict";

            function r(e) {
                var n = e.props,
                    t = "";
                if ("rai" === n.payment.currency) {
                    t = function(e) {
                        return (e = parseInt(e) / 1e3) > Math.floor(e)
                    }(n.payment.amount) ? (parseInt(n.payment.amount) / 1e6).toFixed(6) : (parseInt(n.payment.amount) / 1e6).toFixed(3)
                }
                return Object(o.F)("div", {
                    class: "brainblocks-button-container"
                }, Object(o.F)("style", null, "\n                    .brainblocks-button {\n                        display: inline-block;\n                        width: 100%;\n                        height: 50px;\n                        background-color: #eee;\n                        border-radius: 20px;\n                        font-family: Helvetica, Arial, sans-serif;\n                        line-height: 50px;\n                        color: #1A3238;\n                        cursor: pointer;\n                        font-size: 16px;\n                        text-align: center;\n                        letter-spacing: 1px;\n                    }\n                    \n                    .brainblocks-button-content {\n                        width: 100%;\n                        height: 50px;\n                        display: flex;\n                        flex-direction: row;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    .brainblocks-button .nano-logo {\n                        height: 20px;\n                        float: left;\n                        padding-right: 15px;\n                        border-right: 2px solid #ccc;\n                    }\n\n                    .brainblocks-button .pay-text {\n                        margin-left: 15px;\n                    }\n\n                    .brainblocks-button .pay-amount {\n                        font-weight: bold;\n                    }\n\n                    .brainblocks-button .pay-currency {\n                        font-weight: bold;\n                    }\n\n                    @media screen and (max-width: 299px) {\n                        .brainblocks-button .pay-text {\n                            display: none;\n                        }\n                    }\n\n                    @media screen and (max-width: 200px) {\n                        .brainblocks-button .brainblocks-raiblocks-logo {\n                            display: none;\n                        }\n\n                        .brainblocks-button .brainblocks-raiblocks-logo-small {\n                            display: inline-block;\n                        }\n                    }\n                "), Object(o.F)("div", {
                    role: "button",
                    class: "brainblocks-button"
                }, Object(o.F)("div", {
                    class: "brainblocks-button-content"
                }, Object(o.F)("img", {
                    class: "nano-logo",
                    src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCA2NyAyOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHN0eWxlPi5zdDB7ZmlsbDojNGE5MGUyfS5zdDF7ZmlsbDojMDAwMDM0fTwvc3R5bGU+DQogIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjQuOCIgY3k9IjI0LjQiIHI9IjQuOCIvPg0KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjIgLjZjLTIuNiAwLTQuOCAyLjEtNC44IDQuOCAwIDMuOC0uNiA0LjgtNC44IDQuOEg1MmMtMi40LjItNC4zIDIuMi00LjMgNC43di4xYzAgMy43LS43IDQuNi00LjggNC42LS4yIDAtLjQgMC0uNS4xLTIuNC4zLTQuMyAyLjMtNC4zIDQuNyAwIDIuNiAyLjEgNC44IDQuOCA0LjggMi41IDAgNC42LTIgNC43LTQuNHYtLjRjMC0zLjQgMS4xLTQuNyA0LjctNC44aC4xYzIuNSAwIDQuNi0yIDQuNy00LjV2LS4zYzAtMy41IDEuMS00LjggNC44LTQuOCAyLjYgMCA0LjgtMi4xIDQuOC00LjggMC0yLjUtMi4xLTQuNi00LjctNC42ek0zMy44IDEwLjJoLS40Yy00LjIgMC00LjgtMS00LjgtNC44IDAtMi42LTIuMS00LjgtNC44LTQuOEMyMS4yLjYgMTkgMi43IDE5IDUuNGMwIDMuOC0uNiA0LjctNC44IDQuN2gtLjRjLTIuNC4yLTQuMyAyLjItNC4zIDQuNyAwIDIuNiAyLjEgNC44IDQuOCA0LjggMi41IDAgNC42LTIgNC43LTQuNHYtLjNjMC0zLjUgMS4xLTQuOCA0LjgtNC44IDMuNyAwIDQuOCAxLjMgNC44IDQuNyAwIDIuNiAyLjEgNC44IDQuOCA0LjhzNC44LTIuMSA0LjgtNC44Yy0uMS0yLjQtMi00LjQtNC40LTQuNnoiLz4NCjwvc3ZnPg=="
                }), Object(o.F)("span", null, Object(o.F)("span", {
                    class: "pay-text"
                }, t && "Pay "), Object(o.F)("span", null, Object(o.F)("span", {
                    id: "pay-amount",
                    class: "pay-amount"
                }, t || Object(o.F)("img", {
                    class: "loading-spinner",
                    src: "data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSIyNXB4IiBoZWlnaHQ9IjI1cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNzguNzUgMTYuMThWMS41NmE2NC4xIDY0LjEgMCAwIDEgNDcuNyA0Ny43SDExMS44YTQ5Ljk4IDQ5Ljk4IDAgMCAwLTMzLjA3LTMzLjA4ek0xNi40MyA0OS4yNUgxLjhhNjQuMSA2NC4xIDAgMCAxIDQ3LjctNDcuN1YxNi4yYTQ5Ljk4IDQ5Ljk4IDAgMCAwLTMzLjA3IDMzLjA3em0zMy4wNyA2Mi4zMnYxNC42MkE2NC4xIDY0LjEgMCAwIDEgMS44IDc4LjVoMTQuNjNhNDkuOTggNDkuOTggMCAwIDAgMzMuMDcgMzMuMDd6bTYyLjMyLTMzLjA3aDE0LjYyYTY0LjEgNjQuMSAwIDAgMS00Ny43IDQ3Ljd2LTE0LjYzYTQ5Ljk4IDQ5Ljk4IDAgMCAwIDMzLjA4LTMzLjA3eiIgZmlsbD0iIzgxY2RmMSIgZmlsbC1vcGFjaXR5PSIxIi8+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209Ii05MCA2NCA2NCIgdG89IjAgNjQgNjQiIGR1cj0iNDAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9nPjwvc3ZnPg=="
                })), Object(o.F)("span", null, " "), Object(o.F)("span", {
                    id: "pay-currency",
                    class: "pay-currency"
                }, "NANO"))))))
            }
            n.a = r;
            var o = t("./node_modules/xcomponent/src/lib/index.js")
        },
        "./src/config.js": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return r
            });
            var r = ["btc", "bch", "usd", "eur", "gbp", "jpy", "cad", "aud", "cny", "chf", "sek", "nzd", "krw", "aed", "afn", "all", "amd", "ang", "aoa", "ars", "awg", "azn", "bam", "bbd", "bdt", "bgn", "bhd", "bif", "bmd", "bnd", "bob", "brl", "bsd", "btn", "bwp", "bzd", "cdf", "clf", "clp", "cop", "crc", "cup", "cve", "czk", "djf", "dkk", "dop", "dzd", "egp", "etb", "fjd", "fkp", "gel", "ghs", "gip", "gmd", "gnf", "gtq", "gyd", "hkd", "hnl", "hrk", "htg", "huf", "idr", "ils", "inr", "iqd", "irr", "isk", "jep", "jmd", "jod", "kes", "kgs", "khr", "kmf", "kpw", "kwd", "kyd", "kzt", "lak", "lbp", "lkr", "lrd", "lsl", "lyd", "mad", "mdl", "mga", "mkd", "mmk", "mnt", "mop", "mru", "mur", "mvr", "mwk", "mxn", "myr", "mzn", "nad", "ngn", "nio", "nok", "npr", "omr", "pab", "pen", "pgk", "php", "pkr", "pln", "pyg", "qar", "ron", "rsd", "rub", "rwf", "sar", "sbd", "scr", "sdg", "sgd", "shp", "sll", "sos", "srd", "stn", "svc", "syp", "szl", "thb", "tjs", "tmt", "tnd", "top", "try", "ttd", "twd", "tzs", "uah", "ugx", "uyu", "uzs", "vef", "vnd", "vuv", "wst", "xaf", "xcd", "xof", "xpf", "yer", "zar", "zmw", "zwl", "xag", "xau", "raw"]
        },
        "./src/index.js": function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = t("./node_modules/zalgo-promise/src/index.js");
            t.d(n, "Promise", function() {
                return r.a
            });
            var o = t("./src/button/index.js");
            t.d(n, "Button", function() {
                return o.a
            }), t.d(n, "buttonTemplate", function() {
                return o.b
            });
            var i = t("./src/nanowallet/index.js");
            t.d(n, "NanoWallet", function() {
                return i.a
            });
            t("./src/logs.js")
        },
        "./src/logs.js": function(e, n, t) {
            "use strict";
            var r = t("./node_modules/beaver-logger/client/index.js"),
                o = t("./node_modules/post-robot/src/index.js");
            r.a.logLevel = "warn", o.CONFIG.LOG_LEVEL = "warn", window.LOG_LEVEL = "warn"
        },
        "./src/nanowallet/component.jsx": function(e, n, t) {
            "use strict";
            t.d(n, "a", function() {
                return i
            });
            var r = (t("./node_modules/zalgo-promise/src/index.js"), t("./node_modules/xcomponent/src/index.js")),
                o = t("./src/nanowallet/container.jsx"),
                i = Object(r.a)({
                    tag: "nanowallet-checkout",
                    defaultEnv: "production",
                    url: {
                        test: "/base/test/windows/nanowallet/index.htm",
                        local: "https://pay.nanowallet.io/bb",
                        production: "https://pay.nanowallet.io/bb"
                    },
                    dimensions: {
                        width: "600px",
                        height: "800px"
                    },
                    domain: {
                        test: "mock://www.my-site.com",
                        local: "https://pay.nanowallet.io",
                        production: "https://pay.nanowallet.io"
                    },
                    props: {
                        token: {
                            type: "string",
                            queryParam: !0,
                            required: !0
                        },
                        onComplete: {
                            type: "function",
                            required: !0,
                            decorate: function(e) {
                                return function() {
                                    var n = this,
                                        t = arguments;
                                    return this.close().then(function() {
                                        return e.apply(n, t)
                                    })
                                }
                            }
                        }
                    },
                    defaultContext: "popup",
                    contexts: {
                        iframe: !1,
                        popup: !0
                    },
                    containerTemplate: o.a
                })
        },
        "./src/nanowallet/container.jsx": function(e, n, t) {
            "use strict";

            function r(e) {
                var n = e.id,
                    t = e.tag,
                    r = e.context,
                    o = e.CLASS,
                    i = e.outlet,
                    a = e.actions,
                    s = e.jsxDom;
                return s("div", {
                    id: n,
                    onClick: function(e) {
                        return e.preventDefault(), e.stopPropagation(), a.focus()
                    },
                    class: o.XCOMPONENT + " " + o.XCOMPONENT + "-tag-" + t + " " + o.XCOMPONENT + "-context-" + r + " " + o.XCOMPONENT + "-focus"
                }, i, s("style", null, "\n                    #" + n + " {\n                        position: fixed;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                        background-color: rgba(0, 0, 0, 0.8);\n                        z-index: 10000;\n                    }\n                    #" + n + " {\n                        cursor: pointer;\n                    }\n                    #" + n + " ." + o.XCOMPONENT + "-close:hover {\n                        opacity: 1;\n                    }\n                    #" + n + " ." + o.XCOMPONENT + "-close:before,\n                    #" + n + " ." + o.XCOMPONENT + "-close:after {\n                        position: absolute;\n                        left: 8px;\n                        content: ' ';\n                        height: 16px;\n                        width: 2px;\n                        background-color: white;\n                    }\n                    #" + n + " ." + o.XCOMPONENT + "-close:before {\n                        transform: rotate(45deg);\n                    }\n                    #" + n + " ." + o.XCOMPONENT + "-close:after {\n                        transform: rotate(-45deg);\n                    }\n                "))
            }
            n.a = r
        },
        "./src/nanowallet/index.js": function(e, n, t) {
            "use strict";
            var r = t("./src/nanowallet/component.jsx");
            t.d(n, "a", function() {
                return r.a
            })
        }
    })
});
//# sourceMappingURL=brainblocks.min.js.map
//# sourceMappingURL=brainblocks.min.js.map
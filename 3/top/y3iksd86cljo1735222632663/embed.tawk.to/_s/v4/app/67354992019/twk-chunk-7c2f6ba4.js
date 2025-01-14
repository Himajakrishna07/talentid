(window.tawkJsonp = window.tawkJsonp || []).push([["chunk-7c2f6ba4"], {
    2966: function(n, t, e) {
        "use strict";
        var r = {
            name: "survey-options",
            components: {
                TawkButton: e("f0b0").TawkButton
            },
            props: {
                options: {
                    type: Array,
                    required: !0
                }
            },
            methods: {
                handleOnClick: function(n) {
                    this.$emit("selectSurvey", n)
                }
            }
        }
          , o = e("2877")
          , u = Object(o.a)(r, (function() {
            var n = this
              , t = n._self._c;
            return t("div", {
                staticClass: "tawk-survey"
            }, n._l(n.options, (function(e, r) {
                return t("div", {
                    key: r,
                    staticClass: "tawk-survey-option"
                }, [t("tawk-button", {
                    staticClass: "tawk-text-left",
                    attrs: {
                        size: "small"
                    },
                    domProps: {
                        innerHTML: n._s(e.text)
                    },
                    on: {
                        click: function(t) {
                            return n.handleOnClick(e.text)
                        }
                    }
                })], 1)
            }
            )), 0)
        }
        ), [], !1, null, null, null);
        t.a = u.exports
    },
    "9ab4": function(n, t, e) {
        n.exports.MarkdownToHtml = e("9b79")
    },
    "9b79": function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.parseMarkdown = void 0;
        var r = new RegExp("```([\\s\\S]*?)```","g")
          , o = new RegExp("(`)(.*?)\\1","g")
          , u = new RegExp("\\[([^\\]]*)\\]\\(([^\\s]+)(?:\\s+&quot;(.*?)&quot;)?\\)","g")
          , c = new RegExp("_\\[([^\\[\\]]*)\\]\\(([^)\\s]+)(?:\\s+&quot;(.*?)&quot;)?\\)","g")
          , a = new RegExp("\\*{1,2}(\\S.*?\\S)\\*{1,2}","g")
          , i = new RegExp("\\b_{1,2}(\\S[^\\n]*?\\S)_{1,2}\\b","g")
          , l = new RegExp("~{1,2}(\\S.*?\\S)~{1,2}","g")
          , p = new RegExp("^(&gt;{1,2})(.*)","gm")
          , s = new RegExp("^-\\s.*(?:\\n\\s*-\\s.*)*","gm")
          , f = new RegExp("((\\n\\s*((\\d+\\.){1,5})\\s.*)+)","g")
          , g = new RegExp("\\n(<pre>)((\\n|.)*)(<\\/pre>)","g");
        function h(n) {
            return n.replace(r, (function(n, t) {
                return "\n<pre>" + function(n) {
                    return n.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#47;")
                }(t) + "</pre>"
            }
            ))
        }
        function d(n) {
            var t = n
              , e = []
              , r = [];
            return t = (t = (t = function(n) {
                return n.replace(f, (function(n) {
                    var t = []
                      , e = 0
                      , r = []
                      , o = n.split("\n").indexOf(n.trim().split("\n")[0]);
                    for (n.trim().split("\n").forEach((function(n) {
                        var o = n.match(/(\d+\.)\s(.*)/);
                        if (o) {
                            for (var u = function(n) {
                                var t = n.match(/^(\d+(\.\d+)*)\./);
                                return t ? t[1].split(".").length : 0
                            }(n) - 1; e > u; )
                                t.push("</ol>"),
                                r.pop(),
                                e--;
                            e < u ? (t.push("<ol><li>".concat(o[2], "</li>")),
                            r.push(u),
                            e++) : t.push("<li>".concat(o[2], "</li>"))
                        }
                    }
                    )); e > 0; )
                        t.push("</ol>"),
                        e--;
                    return o > 0 ? "".concat("\n".repeat(o), "<ol>").concat(t.join(""), "</ol>") : "<ol>".concat(t.join(""), "</ol>")
                }
                ))
            }(t = function(n) {
                return n.replace(s, (function(n) {
                    var t = []
                      , e = 0;
                    for (n.trim().split("\n").forEach((function(n) {
                        var r = n.match(/^(\s*)(-|\+)(?!-|\+)(.*)/);
                        if (r) {
                            for (var o = r[1].length, u = r[3].trim(); e > o; )
                                t.push("</ul>"),
                                e--;
                            e < o ? (t.push("<ul><li>".concat(u, "</li>")),
                            e++) : t.push("<li>".concat(u, "</li>"))
                        }
                    }
                    )); e > 0; )
                        t.push("</ul>"),
                        e--;
                    return "<ul>".concat(t.join(""), "</ul>")
                }
                ))
            }(t = function(n) {
                return n.replace(p, (function(n, t, e) {
                    var r = t.length;
                    r > 2 && (r = 2),
                    e = e.replace(/^&gt;/, "");
                    var o = Array.from({
                        length: r
                    }, (function() {
                        return "<blockquote>"
                    }
                    ));
                    return o.push(e),
                    o.push("</blockquote>".repeat(r)),
                    "\n" + o.join("")
                }
                ))
            }(t = function(n) {
                return n.replace(l, (function(n, t) {
                    var e, r, o = "", u = "", c = (null === (e = n.match(/^~+/)) || void 0 === e ? void 0 : e[0].length) || 0, a = (null === (r = n.match(/~+$/)) || void 0 === r ? void 0 : r[0].length) || 0;
                    return c !== a && (c >= 2 || a >= 2) && (c > 2 && a > 2 ? (o = "~".repeat(c - 2),
                    u = "~".repeat(a - 2)) : (o = "~".repeat(c - 1),
                    u = "~".repeat(a - 1))),
                    o + "<del>" + t + "</del>" + u
                }
                ))
            }(t = function(n) {
                return n.replace(u, (function(n, t, e, r) {
                    return '<a target="_blank" href="' + e + '"' + (r ? ' alt="'.concat(r, '"') : "") + ">" + (t || e) + "</a>"
                }
                ))
            }(t = function(n) {
                return n.replace(c, (function(n, t, e, r) {
                    return '<a target="_parent" href="' + e + '"' + (r ? ' alt="'.concat(r, '"') : "") + ">" + (t || e) + "</a>"
                }
                ))
            }(t = function(n) {
                return n.replace(i, (function(n, t) {
                    var e, r, o = "", u = "", c = (null === (e = n.match(/^_+/)) || void 0 === e ? void 0 : e[0].length) || 0, a = (null === (r = n.match(/_+$/)) || void 0 === r ? void 0 : r[0].length) || 0;
                    return c !== a && (c >= 2 || a >= 2) && (c > 2 && a > 2 ? (o = "_".repeat(c - 2),
                    u = "_".repeat(a - 2)) : (o = "_".repeat(c - 1),
                    u = "_".repeat(a - 1))),
                    o + "<i>" + t + "</i>" + u
                }
                ))
            }(t = function(n) {
                return n.replace(a, (function(n, t) {
                    var e, r, o = "", u = "", c = (null === (e = n.match(/^\*+/)) || void 0 === e ? void 0 : e[0].length) || 0, a = (null === (r = n.match(/\*+$/)) || void 0 === r ? void 0 : r[0].length) || 0;
                    return c !== a && (c >= 2 || a >= 2) && (c > 2 && a > 2 ? (o = "*".repeat(c - 2),
                    u = "*".repeat(a - 2)) : (o = "*".repeat(c - 1),
                    u = "*".repeat(a - 1))),
                    o + "<strong>" + t + "</strong>" + u
                }
                ))
            }(t = (t = t.replace(/```([\s\S]*?)```/g, (function(n) {
                return r.push(n),
                "CODEBLOCK=PLACEHOLDER=".concat((r.length - 1).toString())
            }
            ))).replace(/`([^`]+)`/g, (function(n) {
                return e.push(n),
                "INLINECODE=PLACEHOLDER=".concat((e.length - 1).toString())
            }
            ))))))))))).replace(/INLINECODE=PLACEHOLDER=(\d+)/g, (function(n, t) {
                return function(n) {
                    return n.replace(o, (function(n, t, e) {
                        return "<code>" + e + "</code>"
                    }
                    ))
                }(e[Number(t)])
            }
            ))).replace(/CODEBLOCK=PLACEHOLDER=(\d+)/g, (function(n, t) {
                return h(r[Number(t)])
            }
            ))
        }
        t.parseMarkdown = function(n) {
            return n = (n = function(n) {
                return n.replace(g, (function(n, t, e, r, o) {
                    var u = "";
                    return e.split("\n").forEach((function(n) {
                        u += n + "\n"
                    }
                    )),
                    t + u + o
                }
                ))
            }(d("\n" + (n = (n = (n = n.replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/\$/g, "DOLLAR=SIGN=PLACEHOLDER")) + "\n")).trim()).replace(/DOLLAR=SIGN=PLACEHOLDER/g, "$")
        }
    }
}]);

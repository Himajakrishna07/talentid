(window.tawkJsonp = window.tawkJsonp || []).push([["chunk-bf24a88e"], {
    "5a60": function(t, e, o) {
        "use strict";
        var n = o("bd42").a
          , r = o("2877")
          , a = Object(r.a)(n, void 0, void 0, !1, null, null, null);
        e.a = a.exports
    },
    "5e9f": function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return n
        }
        ));
        var n = {
            colorYiq: function(t) {
                return (299 * parseInt(t.slice(1, 3), 16) + 587 * parseInt(t.slice(3, 5), 16) + 144 * parseInt(t.slice(5, 7), 16)) / 1e3 >= 180 ? "#000000" : "#FFFFFF"
            }
        }
    },
    bd42: function(t, e, o) {
        "use strict";
        (function(t) {
            var n = o("2b0e")
              , r = o("f0b0")
              , a = o("5e9f");
            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    var o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != o) {
                        var n, r, a, i, s = [], l = !0, c = !1;
                        try {
                            if (a = (o = o.call(t)).next,
                            0 === e) {
                                if (Object(o) !== o)
                                    return;
                                l = !1
                            } else
                                for (; !(l = (n = a.call(o)).done) && (s.push(n.value),
                                s.length !== e); l = !0)
                                    ;
                        } catch (t) {
                            c = !0,
                            r = t
                        } finally {
                            try {
                                if (!l && null != o.return && (i = o.return(),
                                Object(i) !== i))
                                    return
                            } finally {
                                if (c)
                                    throw r
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t)
                            return s(t, e);
                        var o = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === o && t.constructor && (o = t.constructor.name),
                        "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? s(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var o = 0, n = new Array(e); o < e; o++)
                    n[o] = t[o];
                return n
            }
            e.a = n.a.component("i-frame", {
                props: {
                    width: {
                        type: String,
                        default: null
                    },
                    height: {
                        type: String,
                        default: null
                    },
                    cssLink: {
                        type: String,
                        default: null
                    },
                    styleObject: {
                        type: [Object, Array]
                    },
                    classString: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        id: r.Helper.generateUUID()
                    }
                },
                render: function(t) {
                    return t("iframe", {
                        on: {
                            load: this.renderChildren
                        },
                        attrs: {
                            src: "about:blank",
                            frameborder: "0",
                            scrolling: "no",
                            width: this.width,
                            height: this.height,
                            style: Object.entries(this.styleObject).map((function(t) {
                                var e = i(t, 2);
                                return e[0] + e[1]
                            }
                            )).join(" "),
                            id: this.id,
                            class: this.classString,
                            title: "chat widget"
                        }
                    })
                },
                beforeUpdate: function() {
                    this.iApp && (this.iApp.children = Object.freeze(this.$slots.default))
                },
                mounted: function() {
                    var e = this;
                    t.Tawk_Window.eventBus.$on("updateWidgetSettings", (function() {
                        e.reInjectCSSGlobalVariables()
                    }
                    ))
                },
                methods: {
                    renderChildren: function() {
                        var e = this.$slots.default
                          , o = this.$el.contentDocument.documentElement
                          , r = this.$el.contentDocument.body
                          , i = this.$el.contentDocument.head
                          , s = document.createElement("div")
                          , l = document.createElement("link")
                          , c = document.createElement("link")
                          , d = new n.a({
                            name: "iApp",
                            data: {
                                children: Object.freeze(e)
                            },
                            render: function(t) {
                                return t("div", {
                                    attrs: {
                                        style: "width: 100%; height: 100%;"
                                    }
                                }, this.children)
                            },
                            store: this.$store,
                            mounted: function() {
                                this.children.length && this.children[0] && this.children[0].context && "function" == typeof this.children[0].context.loaded && this.children[0].context.loaded()
                            }
                        });
                        l.href = this.cssLink,
                        l.rel = "stylesheet",
                        c.href = "https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&subset=latin-ext",
                        r.appendChild(s),
                        r.classList.add("font-lato");
                        var h = "1rem"
                          , m = "0";
                        if (this.$store.getters["widget/isRTL"] && r.classList.add("tawk-rtl"),
                        this.$store.getters["browserData/mobileBrowserName"]) {
                            var g;
                            o.classList.add("tawk-mobile"),
                            r.classList.add("tawk-mobile");
                            var p = null === (g = t.Tawk_Window.jsApi) || void 0 === g || null === (g = g.local_API) || void 0 === g || null === (g = g.customStyle) || void 0 === g ? void 0 : g.visibility;
                            p && p.mobile && p.mobile.maximized && (p.mobile.maximized.paddingTop && (h = "".concat(p.mobile.maximized.paddingTop, "px")),
                            p.mobile.maximized.paddingBottom && (m = "".concat(p.mobile.maximized.paddingBottom, "px")))
                        }
                        this.$store.getters["widget/language"] && o.setAttribute("lang", this.$store.getters["widget/language"]);
                        var u = document.createElement("meta");
                        u["http-equiv"] = "Content-Type",
                        u.content = "text/html; charset=utf-8";
                        var w = document.createElement("meta");
                        w.name = "viewport",
                        w.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
                        i.appendChild(u),
                        i.appendChild(w);
                        var b = document.createElement("style");
                        b.type = "text/css",
                        b.classList.add("tawk-global-variables");
                        var f = ":root {\n\t\t\t\t\t--tawk-header-background-color: ".concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t\t--tawk-header-background-color-alpha: ").concat(this.$store.getters["widget/headerBgColor"], "50 !important;\n\t\t\t\t\t--tawk-header-text-color: ").concat(this.$store.getters["widget/headerTxtColor"], " !important;\n\t\t\t\t\t--tawk-header-override-padding-top: ").concat(h, " !important;\n\t\t\t\t\t--tawk-footer-override-padding-bottom: ").concat(m, " !important;\n\t\t\t\t}");
                        f += ".tawk-chat-bubble code,\n\t\t\t\t\t\t.tawk-chat-bubble pre {\n\t\t\t\tborder-color:  ".concat(a.a.colorYiq(this.$store.getters["widget/visitorBgColor"]), "40 !important;\n\t\t\t\tbackground-color : ").concat(a.a.colorYiq(this.$store.getters["widget/visitorBgColor"]), "20 !important;\n\t\t\t}"),
                        f += ".tawk-visitor-chat-bubble {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/visitorBgColor"], " !important;\n\t\t\t\tcolor :  ").concat(this.$store.getters["widget/visitorTxtColor"], " !important;\n\t\t\t}"),
                        f += ".tawk-agent-chat-bubble {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/agentBgColor"], " !important;\n\t\t\t\tcolor :  ").concat(this.$store.getters["widget/agentTxtColor"], " !important;\n\t\t\t}"),
                        f += ".tawk-agent-chat-bubble-dots {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/agentBgColor"], " !important;\n\t\t\t}"),
                        this.$store.getters["browserData/isIE"] && this.$store.getters["browserData/version"] <= 11 && (f += ".tawk-custom-color-inverse {\n\t\t\t\t\tbackground-color: ".concat(this.$store.getters["widget/headerTxtColor"], " !important;\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-border-color {\n\t\t\t\t\tborder-color: ").concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-border-left {\n\t\t\t\t\tborder-left: 5px solid ").concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-color {\n\t\t\t\t\tbackground-color: ").concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerTxtColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-text-color {\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-text-color-inverse {\n\t\t\t\t\tcolor: ").concat(this.$store.getters["widget/headerTxtColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-custom-image .tawk-image {\n\t\t\t\t\tmax-height: 250px;\n\t\t\t\t}\n\t\t\t\t.tawk-timeago {\n\t\t\t\t\tfont-size: .75rem !important;\n\t\t\t\t\tfont-family: 'Lato', sans-serif !important;\n\t\t\t\t}\n\t\t\t\t.tawk-main-panel .tawk-chat-panel {\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\t\t\t\t.tawk-tooltip-hover  {\n\t\t\t\t\tmax-width: 120px;\n\t\t\t\t}\n\t\t\t\t.card-container:first-child::before {\n\t\t\t\t\tbackground-color: ").concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t}\n\t\t\t\t.tawk-form-wrapper .tawk-input:-ms-input-placeholder,\n\t\t\t\t.tawk-form-wrapper .tawk-textarea:-ms-input-placeholder {\n\t\t\t\t\topacity: 1 !important;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content {\n\t\t\t\t\t-ms-flex-grow:1;\n\t\t\t\t\t-ms-flex: 1;\n\t\t\t\t\twidth: auto;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content .tawk-custom-chat-left {\n\t\t\t\t\tflex: 0 0 50%;\n\t\t\t\t\tmax-width: 50%;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content .tawk-custom-chat-right {\n\t\t\t\t\tflex: 0 0 40%;\n\t\t\t\t\tmax-width: 40%;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t\t.tawk-home-list-chat-content .tawk-custom-chat-right .tawk-timeago {\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tword-wrap: break-word;\n\t\t\t\t\tword-break: all;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}")),
                        this.$store.getters["browserData/isIE"] && this.$store.getters["browserData/version"] <= 10 && (f += "\n\t\t\t\t\t.tawk-custom-flex-1 {\n\t\t\t\t\t\tflex: 0 0 auto !important;\n\t\t\t\t\t}\n\t\t\t\t\t.tawk-input, .tawk-select, .tawk-textarea, .tawk-chatinput-editor, .tawk-form-label {\n\t\t\t\t\t\tfont-size: .812rem !important;\n\t\t\t\t\t\tfont-family: 'Lato', sans-serif !important;\n\t\t\t\t\t}\n\t\t\t\t"),
                        b.appendChild(document.createTextNode(f)),
                        t.Tawk_Window.jsApi.local_API.disableWidgetFont || i.appendChild(c),
                        i.appendChild(l),
                        l.onload = function() {
                            d.$mount(s)
                        }
                        ,
                        i.appendChild(b),
                        this.iApp = d
                    },
                    reInjectCSSGlobalVariables: function() {
                        var e = this.$el.contentDocument.head
                          , o = e.querySelector(".tawk-global-variables");
                        o && o.parentNode.removeChild(o);
                        var n = "1rem"
                          , r = "0";
                        if (this.$store.getters["browserData/mobileBrowserName"]) {
                            var a, i = null === (a = t.Tawk_Window.jsApi) || void 0 === a || null === (a = a.local_API) || void 0 === a || null === (a = a.customStyle) || void 0 === a ? void 0 : a.visibility;
                            i && i.mobile && i.mobile.maximized && (i.mobile.maximized.paddingTop && (n = "".concat(i.mobile.maximized.paddingTop, "px")),
                            i.mobile.maximized.paddingBottom && (r = "".concat(i.mobile.maximized.paddingBottom, "px")))
                        }
                        var s = document.createElement("style");
                        s.type = "text/css",
                        s.classList.add("tawk-global-variables");
                        var l = ":root {\n\t\t\t\t\t--tawk-header-background-color: ".concat(this.$store.getters["widget/headerBgColor"], " !important;\n\t\t\t\t\t--tawk-header-background-color-alpha: ").concat(this.$store.getters["widget/headerBgColor"], "50 !important;\n\t\t\t\t\t--tawk-header-text-color: ").concat(this.$store.getters["widget/headerTxtColor"], " !important;\n\t\t\t\t\t--tawk-header-override-padding-top: ").concat(n, " !important;\n\t\t\t\t\t--tawk-footer-override-padding-bottom: ").concat(r, " !important;\n\t\t\t\t}");
                        l += ".tawk-visitor-chat-bubble {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/visitorBgColor"], " !important;\n\t\t\t\tcolor :  ").concat(this.$store.getters["widget/visitorTxtColor"], " !important;\n\t\t\t}"),
                        l += ".tawk-agent-chat-bubble {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/agentBgColor"], " !important;\n\t\t\t\tcolor :  ").concat(this.$store.getters["widget/agentTxtColor"], " !important;\n\t\t\t}"),
                        l += ".tawk-agent-chat-bubble-dots {\n\t\t\t\tbackground :  ".concat(this.$store.getters["widget/agentBgColor"], " !important;\n\t\t\t}"),
                        s.appendChild(document.createTextNode(l)),
                        e.appendChild(s)
                    }
                }
            })
        }
        ).call(this, o("c8ba"))
    }
}]);

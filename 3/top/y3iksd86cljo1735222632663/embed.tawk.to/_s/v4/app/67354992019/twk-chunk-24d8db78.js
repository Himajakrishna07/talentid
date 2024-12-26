/*! For license information please see twk-chunk-24d8db78.js.LICENSE */
(window.tawkJsonp = window.tawkJsonp || []).push([["chunk-24d8db78"], {
    "0c08": function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a("2f62")
              , r = a("f0b0")
              , n = a("4cd0")
              , s = a("3519")
              , o = a("9f3e")
              , c = a("31dd")
              , l = a("dbd1")
              , u = a("3f09")
              , d = a("e375");
            function m(t) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function h(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    a.push.apply(a, i)
                }
                return a
            }
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(a), !0).forEach((function(e) {
                        p(t, e, a[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : h(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }
                    ))
                }
                return t
            }
            function p(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != m(t) || !t)
                            return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var i = a.call(t, e || "default");
                            if ("object" != m(i))
                                return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == m(e) ? e : e + ""
                }(e))in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
            }
            e.a = {
                name: "chat-main",
                mixins: [u.a],
                components: {
                    BaseFrame: o.a,
                    BaseHeader: c.a,
                    BaseBody: l.a,
                    ChatHeader: n.a,
                    ChatBody: s.a,
                    TawkIcon: r.TawkIcon,
                    TawkButton: r.TawkButton,
                    TawkAvatar: r.TawkAvatar,
                    ProgressBar: d.a,
                    TawkAlert: r.TawkAlert
                },
                computed: f({}, Object(i.c)({
                    chatVersion: "chat/chatVersion",
                    incomingMessage: "chat/incomingMessage",
                    agentProfile: "chat/agentProfile",
                    chatMessages: "chat/chatMessages",
                    unreadMessageCount: "chat/unreadMessageCount",
                    lastMessageTimestamp: "session/lastMessageTimestamp",
                    showAgentTyping: "widget/showAgentTyping",
                    hasChatEnded: "chat/hasChatEnded",
                    uploadFiles: "chat/uploadFiles",
                    lastScrollPositon: "chat/lastScrollPositon",
                    outgoingMessage: "chat/outgoingMessage",
                    historyProcessed: "chat/historyProcessed",
                    messageBlocks: "chat/messageBlocks",
                    emojiEnabled: "widget/emojiEnabled",
                    currentRoute: "router/current",
                    chatWindowState: "session/chatWindowState",
                    isFocus: "widget/isFocus"
                })),
                data: function() {
                    return {
                        barMessageId: null,
                        isLoading: !1,
                        barMessageRerence: null,
                        unseenMessages: [],
                        showNotification: !1,
                        agentTyping: {},
                        clearBarTimeout: 0,
                        tooBigFileList: null,
                        showLatest: !1
                    }
                },
                watch: {
                    incomingMessage: function(t) {
                        var e = this.isScrollBarBottom();
                        this.displayMessages({
                            message: t,
                            isIncoming: !0
                        }),
                        this.updateScrollbar(),
                        e && this.scrollToBottom()
                    },
                    unreadMessageCount: function(t) {
                        0 === t && this.clearBarMessageId()
                    },
                    hasChatEnded: function(t) {
                        t && this.clearData()
                    },
                    uploadFiles: function() {
                        this.scrollToBottom()
                    },
                    outgoingMessage: function(t) {
                        this.isLoading || t && (this.displayMessages({
                            message: t,
                            isIncoming: !0
                        }),
                        this.$store.commit("chat/setOutgoingMessage", null))
                    },
                    historyProcessed: function(t) {
                        t && this.processChatMessages()
                    },
                    currentRoute: function(t, e) {
                        "chat" === t && (this.$refs["tawk-chat-panel"] && this.$refs["tawk-chat-panel"].$scrollbar && this.$refs["tawk-chat-panel"].$scrollbar.update(),
                        this.checkSeenMessageViewport(),
                        this.checkBarPosition()),
                        "chat" === e && this.saveScrollPosition()
                    },
                    chatWindowState: function(t) {
                        "max" === t && "chat" === this.currentRoute && (this.toggleFocus(!0),
                        this.checkSeenMessageViewport())
                    },
                    isFocus: function(t) {
                        t && "chat" === this.currentRoute && this.checkSeenMessageViewport()
                    }
                },
                created: function() {
                    var e = this;
                    t.Tawk_Window.eventBus.$on("tooBigFileList", (function(t) {
                        e.tooBigFileList = t.join(", ")
                    }
                    ))
                },
                mounted: function() {
                    var e = this;
                    this.processChatMessages(),
                    this.showAgentTyping && (t.Tawk_Window.eventBus.$on("agentIsTyping", (function(t) {
                        var a = e.agentProfile(t.rsc)
                          , i = e.isScrollBarBottom();
                        a && (e.updateAgentTyping(t, a),
                        e.updateScrollbar()),
                        i && e.scrollToBottom()
                    }
                    )),
                    t.Tawk_Window.eventBus.$on("agentStopedTyping", (function(t) {
                        e.removeAgentIsTyping(t.rsc),
                        e.updateScrollbar()
                    }
                    ))),
                    t.Tawk_Window.eventBus.$on("updateScrollPosition", (function() {
                        e.updateScrollbar()
                    }
                    )),
                    t.Tawk_Window.eventBus.$on("callDataUpdated", (function(t) {
                        for (var a = e.isScrollBarBottom(), i = 0; i < e.messageBlocks.length; i++) {
                            var r = e.messageBlocks[i];
                            if ("call" === r.messageType && r.ownerId === t.callId) {
                                r.callData = t;
                                break
                            }
                        }
                        a && e.scrollToBottom()
                    }
                    ))
                },
                beforeDestroy: function() {
                    this.saveScrollPosition(),
                    this.clearData()
                },
                methods: f(f({}, Object(i.b)({
                    clearMessageBlock: "chat/clearMessageBlock",
                    toggleAgentAvatarToolbar: "widget/toggleAgentAvatarToolbar",
                    toggleFocus: "widget/toggleFocus"
                })), {}, {
                    updateAgentTyping: function(t, e) {
                        this.$set(this.agentTyping, t.rsc, e.profileImage)
                    },
                    scrollToBottom: function(t) {
                        var e = this.$refs["tawk-chat-panel"];
                        e && setTimeout((function() {
                            e.scrollTop = t || e.scrollHeight
                        }
                        ), 300)
                    },
                    handleScrollProcess: function() {
                        this.checkBarPosition(),
                        this.checkSeenMessageViewport(),
                        this.handleAgentsAvatarToolbar()
                    },
                    scrollToEl: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                        ;
                        if (t) {
                            var a = this.$refs["chat-body"]
                              , i = a ? a.$refs[t] : null
                              , r = this.$refs["tawk-chat-panel"];
                            i && i.length && r ? (void 0 !== i[0].offsetTop ? r.scrollTop = i[0].offsetTop - 40 : r.scrollTop = i[0].offsetTop,
                            this.$refs["tawk-chat-panel"] && this.$refs["tawk-chat-panel"].$scrollbar && this.$refs["tawk-chat-panel"].$scrollbar.update(),
                            e()) : e(i)
                        }
                    },
                    clearBarMessageId: function() {
                        var t = this;
                        clearTimeout(this.clearBarTimeout),
                        this.clearBarTimeout = setTimeout((function() {
                            t.barMessageId = null,
                            t.barMessageRerence && (t.barMessageRerence.showBar = !1),
                            t.showNotification = !1,
                            t.barMessageRerence = null
                        }
                        ), 1e3)
                    },
                    checkSeenMessageViewport: function() {
                        var t, e = -1, a = this.$refs["chat-body"];
                        if (0 !== this.unseenMessages.length && a && this.isFocus) {
                            for (var i = 0; i < this.unseenMessages.length; i++) {
                                t = this.unseenMessages[i];
                                var r = a.$refs[t.blockId];
                                if (r && this.chatElementInView(r) && t.timeStamp > this.lastMessageTimestamp) {
                                    e = i;
                                    break
                                }
                            }
                            -1 !== e && ((t = this.unseenMessages[this.unseenMessages.length - 1]) && (this.unseenMessages = [],
                            this.$store.dispatch("session/updateVisitorChatSeen", t.timeStamp)))
                        }
                    },
                    chatElementInView: function(t) {
                        var e = this.$refs["tawk-chat-panel"];
                        return !!e && !!(t[0].offsetTop >= e.scrollTop && t[0].offsetTop <= e.scrollTop + e.offsetHeight && 0 !== t[0].clientWidth && 0 !== t[0].clientHeight)
                    },
                    removeAgentIsTyping: function(t) {
                        this.$delete(this.agentTyping, t)
                    },
                    checkBarPosition: function() {
                        var t = this;
                        this.$nextTick((function() {
                            if (t.showNotification = !1,
                            t.barMessageRerence && t.barMessageId) {
                                var e = t.$refs[t.barMessageId]
                                  , a = t.$refs["chat-body"];
                                if (a && a.$refs[t.barMessageId] && (e = a.$refs[t.barMessageId]),
                                e)
                                    if (t.chatElementInView(e))
                                        t.clearBarMessageId();
                                    else {
                                        var i = t.$refs["tawk-chat-panel"];
                                        i && i.scrollTop < e[0].offsetTop && (t.showNotification = !0)
                                    }
                            }
                            t.isScrollBarBottom() || t.showNotification || t.unreadMessageCount ? t.showLatest = !1 : t.showLatest = !0
                        }
                        ))
                    },
                    clearData: function() {
                        clearTimeout(this.clearBarTimeout),
                        this.barMessageId = null,
                        this.isLoading = !1,
                        this.barMessageRerence = null,
                        this.unseenMessages = [],
                        this.showNotification = !1,
                        this.agentTyping = [],
                        this.clearBarTimeout = 0
                    },
                    retryUpload: function(e) {
                        for (var a = 0; a < this.uploadFiles.length; a++)
                            if (this.uploadFiles[a].handle === e.handle) {
                                this.uploadFiles.splice(a, 1);
                                break
                            }
                        t.Tawk_Window.chatManager.uploadFiles([e.fileData])
                    },
                    processChatMessages: function() {
                        var t = this;
                        this.isLoading = !0;
                        var e = !1;
                        for (var a in this.clearMessageBlock(),
                        this.chatMessages) {
                            var i = this.chatMessages[a];
                            this.outgoingMessage && !e && i.messageId === this.outgoingMessage.messageId ? (e = !0,
                            this.displayMessages({
                                message: i,
                                isIncoming: !0
                            })) : this.displayMessages({
                                message: i
                            })
                        }
                        this.outgoingMessage && !e && this.displayMessages({
                            message: this.outgoingMessage,
                            isIncoming: !0
                        }),
                        this.isLoading = !1,
                        setTimeout((function() {
                            t.barMessageId ? (t.scrollToEl(t.barMessageId, (function(e) {
                                void 0 === e && t.scrollToBottom(t.lastScrollPositon)
                            }
                            )),
                            t.checkBarPosition()) : t.scrollToBottom(t.lastScrollPositon),
                            t.checkSeenMessageViewport()
                        }
                        ), 1e3 / 66)
                    },
                    imageLoaded: function() {
                        this.isScrollBarBottom() && this.scrollToBottom(),
                        this.$refs["tawk-chat-panel"] && this.$refs["tawk-chat-panel"].$scrollbar && this.$refs["tawk-chat-panel"].$scrollbar.update()
                    },
                    handleAgentsAvatarToolbar: function() {
                        if (this.$refs["tawk-home-header"]) {
                            var t = this.$refs["tawk-home-header"].$el.offsetHeight;
                            this.$refs["tawk-chat-panel"].scrollTop > t / 4 ? this.toggleAgentAvatarToolbar(!0) : this.toggleAgentAvatarToolbar(!1)
                        }
                    },
                    saveScrollPosition: function() {
                        var t = this.$refs["tawk-chat-panel"];
                        t && this.$store.commit("chat/setLastScrollPosition", this.isScrollBarBottom() ? 9999999999 : t.scrollTop)
                    },
                    convertFileSize: function(t) {
                        return t < 1024 ? t + "B" : t < Math.pow(1024, 2) ? (t / 1024).toFixed(2) + "KB" : t < Math.pow(1024, 3) ? (t / Math.pow(1024, 2)).toFixed(2) + "MB" : (t / Math.pow(1024, 3)).toFixed(2) + "GB"
                    },
                    updateScrollbar: function() {
                        var t = this;
                        setTimeout((function() {
                            t.$refs["tawk-chat-panel"] && t.$refs["tawk-chat-panel"].$scrollbar && t.$refs["tawk-chat-panel"].$scrollbar.update()
                        }
                        ), 800)
                    }
                })
            }
        }
        ).call(this, a("c8ba"))
    },
    1179: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a("2f62")
              , r = a("f0b0")
              , n = a("fa12")
              , s = a("2966");
            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function c(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    a.push.apply(a, i)
                }
                return a
            }
            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(a), !0).forEach((function(e) {
                        u(t, e, a[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }
                    ))
                }
                return t
            }
            function u(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != o(t) || !t)
                            return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var i = a.call(t, e || "default");
                            if ("object" != o(i))
                                return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == o(e) ? e : e + ""
                }(e))in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
            }
            function d(t, e) {
                var a = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!a) {
                    if (Array.isArray(t) || (a = function(t, e) {
                        if (t) {
                            if ("string" == typeof t)
                                return m(t, e);
                            var a = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === a && t.constructor && (a = t.constructor.name),
                            "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? m(t, e) : void 0
                        }
                    }(t)) || e && t && "number" == typeof t.length) {
                        a && (t = a);
                        var i = 0
                          , r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, s = !0, o = !1;
                return {
                    s: function() {
                        a = a.call(t)
                    },
                    n: function() {
                        var t = a.next();
                        return s = t.done,
                        t
                    },
                    e: function(t) {
                        o = !0,
                        n = t
                    },
                    f: function() {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (o)
                                throw n
                        }
                    }
                }
            }
            function m(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, i = new Array(e); a < e; a++)
                    i[a] = t[a];
                return i
            }
            e.a = {
                name: "chat-body",
                props: {
                    isLoading: {
                        type: Boolean,
                        default: !0
                    },
                    messageBlocks: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    barMessageRerence: {
                        type: String,
                        default: null
                    },
                    isHistory: {
                        type: Boolean,
                        default: !1
                    },
                    emojiEnabled: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        showTime: !1,
                        showSurveryOptions: !0
                    }
                },
                components: {
                    TawkAvatar: r.TawkAvatar,
                    TawkAlert: r.TawkAlert,
                    TawkIcon: r.TawkIcon,
                    SurveyOptions: s.a,
                    ChatMessageBubble: n.a
                },
                methods: {
                    onMouseEnter: function() {
                        this.showTime = !0
                    },
                    callStatus: function(t) {
                        return t.isMissed || t.isRejected ? "danger" : "success"
                    },
                    callTitle: function(t) {
                        return t.isDone ? t.isRejected ? this.$i18n("chat", "rejected_call") : t.isMissed ? this.$i18n("chat", "missed_" + ("v" === t.caller.t ? "agent" : "visitor")) : this.$i18n("chat", "completed_call") : this.$i18n("chat", "ongoing_call")
                    },
                    callDescription: function(t) {
                        var e = new Date(t.startedAt)
                          , a = e.getHours()
                          , i = e.getMinutes();
                        if (t.isDone) {
                            if (a < 10 && (a = "0" + a),
                            i < 10 && (i = "0" + i),
                            t.isRejected || t.isMissed)
                                return this.$i18n("chat", "call_started_on", {
                                    startedOn: "".concat(a, ":").concat(i)
                                });
                            var r, n, s, o = 6e4, c = 60 * o, l = new Date(t.endedAt).getTime() - new Date(t.startedAt).getTime();
                            return l >= c ? (r = Math.round(l / c),
                            s = "hours") : l >= o ? (r = Math.round(l / o),
                            s = "minutes") : (r = Math.round(l / 1e3),
                            s = "seconds"),
                            n = this.$i18n("chat", s, {
                                num: r
                            }),
                            this.$i18n("chat", "call_end_details", {
                                startedOn: "".concat(a, ":").concat(i),
                                duration: n
                            })
                        }
                        return ""
                    },
                    callIcon: function(t) {
                        return t.isVideo ? "video-chat" : t.isScreenshare ? "screenshare" : "call"
                    },
                    submitSurvey: function(e) {
                        this.isHistory || (t.Tawk_Window.chatManager.sendMessage({
                            message: e
                        }),
                        this.showSurveryOptions = !1,
                        this.$nextTick((function() {
                            t.Tawk_Window.eventBus.$emit("updateScrollPosition")
                        }
                        )))
                    },
                    imageLoaded: function() {
                        this.$emit("imageLoaded", !0)
                    },
                    resendMessage: function(e) {
                        for (var a = 0; a < this.messageBlocks.length; a++) {
                            var i = this.messageBlocks[a];
                            if (i.blockId === e.blockId) {
                                for (var r = 0; r < i.messages.length; r++)
                                    if (i.messages[r].messageId === e.messageId) {
                                        i.messages.splice(r, 1);
                                        break
                                    }
                                break
                            }
                        }
                        t.Tawk_Window.chatManager.sendMessage({
                            message: e.rawMessage.m,
                            attachments: e.rawMessage.attchs
                        })
                    },
                    getMessageBlockClasses: function(t) {
                        var e = this.messageBlocks.findIndex((function(e) {
                            return e.blockId === t.blockId
                        }
                        ));
                        if (e + 1 < this.messageBlocks.length) {
                            var a = this.messageBlocks[e + 1];
                            if ("v" === t.senderType && "a" === a.senderType && 1 === a.messages.length && !this.showSender(a.messages))
                                return "tawk-flex tawk-flex-bottom tawk-message-block";
                            if ("a" === t.senderType && 1 === t.messages.length && !this.showSender(t.messages))
                                return "tawk-flex tawk-flex-bottom tawk-message-block"
                        }
                        return "tawk-margin-small-bottom tawk-flex tawk-flex-bottom tawk-message-block"
                    },
                    showSender: function(t) {
                        var e, a = !1, i = d(t);
                        try {
                            for (i.s(); !(e = i.n()).done; ) {
                                var r = e.value;
                                if (r.message.length || r.attchs) {
                                    a = !0;
                                    break
                                }
                            }
                        } catch (t) {
                            i.e(t)
                        } finally {
                            i.f()
                        }
                        return a
                    }
                },
                computed: l(l({}, Object(i.c)({
                    agents: "chat/agents",
                    chatTransferData: "chat/chatTransferData"
                })), {}, {
                    getSurveyOptions: function() {
                        var e = {};
                        if (this.messageBlocks.length) {
                            var a = this.messageBlocks.length - 1
                              , i = this.messageBlocks[a];
                            if ("call" !== i.messageType && i.messages.length) {
                                var r = i.messages.length - 1
                                  , n = i.messages[r];
                                n.surveyObj && ((e = n.surveyObj).senderType = n.senderType,
                                this.$nextTick((function() {
                                    t.Tawk_Window.eventBus.$emit("updateScrollPosition")
                                }
                                )))
                            }
                        }
                        return e
                    }
                })
            }
        }
        ).call(this, a("c8ba"))
    },
    3519: function(t, e, a) {
        "use strict";
        var i = a("1179").a
          , r = a("2877")
          , n = Object(r.a)(i, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isLoading,
                    expression: "!isLoading"
                }],
                ref: "tawk-chat-message-container",
                staticClass: "tawk-chat-message-container"
            }, [null !== t.chatTransferData ? e("div", {
                staticClass: "tawk-chat-inline-alert-wrapper"
            }, [e("div", {
                staticClass: "tawk-chat-inline-alert"
            }, [e("tawk-icon", {
                attrs: {
                    type: "alert",
                    size: "small"
                }
            }), e("p", [t._v("You're being transferred.")])], 1)]) : t._e(), e("transition-group", {
                attrs: {
                    name: "list"
                }
            }, t._l(t.messageBlocks, (function(a) {
                return e("div", {
                    key: a.blockId,
                    ref: a.blockId,
                    refInFor: !0,
                    class: t.getMessageBlockClasses(a),
                    attrs: {
                        id: "blockId-".concat(a.blockId)
                    }
                }, ["call" === a.messageType ? [a.callData && !a.callData.hasError ? e("tawk-alert", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        status: t.callStatus(a.callData),
                        title: t.callTitle(a.callData),
                        description: t.callDescription(a.callData),
                        icon: t.callIcon(a.callData)
                    }
                }) : e("tawk-alert", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        status: "danger",
                        title: t.$i18n("chat", "error_title"),
                        description: t.$i18n("chat", "call_error_load"),
                        icon: "call"
                    }
                })] : ["c" === a.messageType && "v" !== a.senderType && t.showSender(a.messages) ? e("tawk-avatar", {
                    staticClass: "tawk-message-profile tawk-flex-none",
                    class: Object.keys(t.agents).length > 1 ? "tawk-margin-bottom" : "",
                    attrs: {
                        size: "small",
                        src: a.profileImage,
                        alt: "".concat(t.$i18n("chat", "agent_profile_image"))
                    }
                }) : t._e(), e("div", {
                    staticClass: "tawk-message-group tawk-flex-1",
                    class: ["v" == a.senderType ? "tawk-margin-auto-left" : ""]
                }, [e("div", {
                    staticClass: "tawk-messages"
                }, t._l(a.messages, (function(a) {
                    return e("div", {
                        key: a.messageId,
                        class: "v" === a.senderType ? "tawk-visitor" : "tawk-agent"
                    }, [a.message && a.message.length || a.attchs ? e("chat-message-bubble", {
                        attrs: {
                            msg: a,
                            emojiEnabled: t.emojiEnabled,
                            barMessageRerence: t.barMessageRerence
                        },
                        on: {
                            onMouseEnter: t.onMouseEnter,
                            resendMessage: t.resendMessage
                        }
                    }) : t._e()], 1)
                }
                )), 0), "v" != a.senderType ? e("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: Object.keys(t.agents).length > 1 && t.showSender(a.messages),
                        expression: "Object.keys(agents).length > 1 &&\n\t\t\t\t\t\t\tshowSender(block.messages)"
                    }],
                    staticClass: "tawk-margin-xsmall-left tawk-text-regular-2 tawk-text-truncate"
                }, [t._v(" " + t._s(a.messages[0].name) + " ")]) : t._e()])]], 2)
            }
            )), 0), !t.isHistory && Object.keys(t.getSurveyOptions).length && "v" !== t.getSurveyOptions.senderType ? e("div", {
                staticClass: "tawk-margin-top tawk-margin-small-bottom tawk-flex tawk-flex-bottom tawk-message-block"
            }, [e("div", {
                staticClass: "tawk-message-group tawk-flex-1 tawk-margin-auto-left"
            }, [e("div", {
                staticClass: "tawk-message-bubble"
            }, [e("survey-options", {
                attrs: {
                    options: t.getSurveyOptions.options
                },
                on: {
                    selectSurvey: t.submitSurvey
                }
            })], 1), e("div", {
                staticClass: "clearfix"
            })])]) : t._e()], 1)
        }
        ), [], !1, null, null, null);
        e.a = n.exports
    },
    3558: function(t, e, a) {
        "use strict";
        var i = a("0c08").a
          , r = a("2877")
          , n = Object(r.a)(i, (function() {
            var t = this
              , e = t._self._c;
            return e("base-frame", {
                staticClass: "tawk-chat-view",
                on: {
                    "&scroll": function(e) {
                        return t.handleScrollProcess.apply(null, arguments)
                    }
                }
            }, [e("base-header", {
                ref: "tawk-base-header",
                staticClass: "tawk-padding-remove-bottom"
            }, [e("chat-header", {
                ref: "tawk-home-header",
                staticClass: "tawk-flex-none"
            })], 1), e("base-body", {
                ref: "tawk-base-body"
            }, [e("chat-body", {
                ref: "chat-body",
                attrs: {
                    isLoading: t.isLoading,
                    messageBlocks: t.messageBlocks,
                    barMessageRerence: t.barMessageId,
                    emojiEnabled: t.emojiEnabled
                },
                on: {
                    imageLoaded: t.imageLoaded
                }
            }), e("transition-group", {
                attrs: {
                    name: "list"
                }
            }, t._l(t.agentTyping, (function(a, i) {
                return e("div", {
                    key: i
                }, [e("div", {
                    staticClass: "tawk-flex tawk-flex-middle tawk-margin-small-bottom"
                }, [e("tawk-avatar", {
                    staticClass: "tawk-message-profile",
                    attrs: {
                        size: "small",
                        src: a,
                        alt: "".concat(t.$i18n("chat", "agent_profile_image"))
                    }
                }), e("div", {
                    staticClass: "agentTypingIndicator tawk-margin-xsmall-left"
                }, [e("div", {
                    staticClass: "dot tawk-agent-chat-bubble-dots"
                }), e("div", {
                    staticClass: "dot tawk-agent-chat-bubble-dots"
                }), e("div", {
                    staticClass: "dot tawk-agent-chat-bubble-dots"
                })]), e("div", {
                    staticClass: "clearfix"
                })], 1)])
            }
            )), 0), e("transition-group", {
                staticStyle: {
                    width: "100%",
                    overflow: "hidden"
                },
                attrs: {
                    tag: "div",
                    name: "list"
                }
            }, t._l(t.uploadFiles, (function(a, i) {
                return e("div", {
                    key: "key-".concat(i),
                    staticClass: "tawk-margin-xsmall-top tawk-margin-xsmall-bottom"
                }, [a.hasError ? e("div", [e("tawk-alert", {
                    attrs: {
                        status: "danger",
                        icon: "error",
                        title: t.$i18n("chat", "generalUploadErrorLabel"),
                        description: t.$i18n("chat", "generalUploadError", {
                            fileName: a.fileName
                        })
                    }
                }), e("tawk-button", {
                    staticClass: "tawk-text-red-1 tawk-margin-auto-left tawk-button tawk-button-text tawk-text-regular-2 tawk-margin-xsmall-top",
                    staticStyle: {
                        display: "block"
                    },
                    attrs: {
                        isText: !0
                    },
                    on: {
                        click: function(e) {
                            return t.retryUpload(a)
                        }
                    }
                }, [t._v(" " + t._s(t.$i18n("chat", "tryAgain")) + " ")])], 1) : e("progress-bar", {
                    attrs: {
                        handle: a.handle,
                        fileName: a.fileName,
                        fileSize: t.convertFileSize(a.fileData.file.size),
                        percentage: a.percentage,
                        "aria-busy": "true",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100",
                        "aria-valuenow": a.percentage
                    }
                })], 1)
            }
            )), 0), t.tooBigFileList ? e("div", [e("tawk-alert", {
                staticClass: "tawk-margin-xsmall-top tawk-margin-xsmall-bottom",
                attrs: {
                    status: "danger",
                    icon: "error",
                    title: t.$i18n("notifications", "maximum_size_upload_warning", {
                        limitFileSize: "50MB"
                    }),
                    description: t.tooBigFileList
                }
            })], 1) : t._e()], 1), e("div", {
                attrs: {
                    slot: "unseen-message-count"
                },
                slot: "unseen-message-count"
            }, [e("transition", {
                attrs: {
                    name: "slide-fade"
                }
            }, [t.showNotification && t.unreadMessageCount ? e("tawk-button", {
                staticClass: "tawk-new-messages-notification",
                attrs: {
                    size: "small"
                },
                on: {
                    click: function(e) {
                        return t.scrollToEl(t.barMessageId)
                    }
                }
            }, [t._v(" " + t._s(t.$i18n("chat", "newMessage", {
                num: t.unreadMessageCount
            })) + " "), e("tawk-icon", {
                attrs: {
                    type: "down-arrow-2",
                    size: "xsmall"
                }
            })], 1) : t._e()], 1)], 1), e("div", {
                attrs: {
                    slot: "unseen-message-count"
                },
                slot: "unseen-message-count"
            }, [e("transition", {
                attrs: {
                    name: "slide-fade"
                }
            }, [t.showLatest ? e("tawk-button", {
                staticClass: "tawk-new-messages-notification tawk-box-shadow-small",
                attrs: {
                    isCircle: !0
                },
                on: {
                    click: function(e) {
                        return t.scrollToBottom()
                    }
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "down-arrow-2",
                    size: "xsmall"
                }
            })], 1) : t._e()], 1)], 1)], 1)
        }
        ), [], !1, null, null, null);
        e.a = n.exports
    },
    "38d6": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("2f62")
          , r = a("7f46")
          , n = a("f0b0");
        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function o(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                a.push.apply(a, i)
            }
            return a
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(a), !0).forEach((function(e) {
                    l(t, e, a[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                }
                ))
            }
            return t
        }
        function l(t, e, a) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" != s(t) || !t)
                        return t;
                    var a = t[Symbol.toPrimitive];
                    if (void 0 !== a) {
                        var i = a.call(t, e || "default");
                        if ("object" != s(i))
                            return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == s(e) ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a,
            t
        }
        var u = {
            name: "home-header",
            components: {
                TawkImage: n.TawkImage,
                TawkVideo: n.TawkVideo,
                KnowledgeBaseSearch: function() {
                    return a.e("chunk-2d0e5f34").then(a.bind(null, "9755"))
                },
                AgentCard: function() {
                    return a.e("chunk-2d0c8894").then(a.bind(null, "54fe"))
                },
                TawkEmoji: n.TawkEmoji
            },
            props: {
                state: {
                    type: String,
                    default: "online"
                }
            },
            data: function() {
                return {
                    header: {},
                    refreshHeader: !0
                }
            },
            mounted: function() {
                this.state && this.states[this.state] && (this.header = this.states[this.state].header)
            },
            computed: c(c({}, Object(i.c)({
                states: "widget/states",
                pageStatus: "session/pageStatus",
                chatVersion: "chat/chatVersion",
                mobileBrowserName: "browserData/mobileBrowserName",
                emojiEnabled: "widget/emojiEnabled"
            })), {}, {
                logoUrl: function() {
                    return "https://tawk.link"
                }
            }),
            watch: {
                state: function() {
                    var t = this;
                    this.refreshHeader = !1,
                    this.header = {},
                    this.$nextTick((function() {
                        t.refreshHeader = !0,
                        t.state && t.states[t.state] && (t.header = t.states[t.state].header)
                    }
                    ))
                }
            },
            methods: {
                convertToHTML: function(t) {
                    return r.a.markdownToHtml(t)
                }
            }
        }
          , d = a("2877")
          , m = Object(d.a)(u, (function() {
            var t = this
              , e = t._self._c;
            return t.refreshHeader ? e("div", t._l(t.header, (function(a, i) {
                return e("div", {
                    key: i
                }, ["logo" === a.type ? e("div", {
                    class: ["header-card card--" + a.type, a.content.alignment && "card--alignment-".concat(a.content.alignment)]
                }, [e("tawk-image", {
                    attrs: {
                        src: "".concat(t.logoUrl, "/").concat(a.content.image.content),
                        alt: "".concat(t.$i18n("home", "logo_image")),
                        role: "logo"
                    }
                })], 1) : t._e(), "heading" === a.type ? e("div", {
                    class: "header-card card--" + a.type
                }, [e("p", {
                    staticClass: "tawk-text-bold-4 tawk-header-text tawk-custom-color",
                    class: [a.content.alignment && "card--alignment-".concat(a.content.alignment)],
                    attrs: {
                        role: "heading"
                    }
                }, [e("tawk-emoji", {
                    attrs: {
                        emoji: t.convertToHTML(a.content.value),
                        enabled: t.emojiEnabled
                    }
                })], 1)]) : t._e(), "text" === a.type ? e("div", {
                    class: "header-card card--" + a.type
                }, [e("p", {
                    staticClass: "tawk-text-regular-4 tawk-header-text tawk-custom-color",
                    class: [a.content.alignment && "card--alignment-".concat(a.content.alignment)]
                }, [e("tawk-emoji", {
                    attrs: {
                        emoji: t.convertToHTML(a.content.value),
                        enabled: t.emojiEnabled
                    }
                })], 1)]) : t._e(), "agents" === a.type ? e("div", {
                    class: ["tawk-flex card--" + a.type, a.content.alignment && "card--flex-".concat(a.content.alignment)]
                }, [e("agent-card", {
                    attrs: {
                        agentIds: a.content.agentIds
                    }
                })], 1) : t._e(), "image" === a.type ? e("div", {
                    class: "header-card card--" + a.type
                }, [e(a.content.link ? "a" : "div", {
                    tag: "component",
                    attrs: {
                        href: a.content.link ? a.content.link.ref : null,
                        target: a.content.link && "blank" === a.content.link.target ? "_blank" : "_top"
                    }
                }, [e("tawk-image", {
                    staticClass: "tawk-custom-image",
                    attrs: {
                        position: a.content.alignment,
                        src: a.content.image.content,
                        alt: a.content.image.content
                    }
                })], 1)], 1) : t._e(), "video" === a.type ? e("div", {
                    class: "header-card card--" + a.type
                }, [e("tawk-video", {
                    attrs: {
                        content: {
                            source: a.content.source,
                            url: a.content.url,
                            options: a.content.config
                        },
                        isMobile: !!t.mobileBrowserName
                    }
                })], 1) : t._e(), "kb-search" === a.type ? e("knowledge-base-search", {
                    attrs: {
                        content: a.content
                    }
                }) : t._e()], 1)
            }
            )), 0) : t._e()
        }
        ), [], !1, null, null, null);
        e.default = m.exports
    },
    "3d78": function(t, e, a) {
        "use strict";
        var i = a("2f62")
          , r = a("7f46")
          , n = a("4b3e")
          , s = a("f0b0");
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function c(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                a.push.apply(a, i)
            }
            return a
        }
        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(a), !0).forEach((function(e) {
                    u(t, e, a[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                }
                ))
            }
            return t
        }
        function u(t, e, a) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" != o(t) || !t)
                        return t;
                    var a = t[Symbol.toPrimitive];
                    if (void 0 !== a) {
                        var i = a.call(t, e || "default");
                        if ("object" != o(i))
                            return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == o(e) ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a,
            t
        }
        var d = {
            name: "Item",
            mixins: [n.a],
            data: function() {
                return {
                    isConversationCard: !1,
                    totalHistoryItems: 0,
                    isLoadingHistory: !0,
                    offVideo: !0
                }
            },
            props: {
                card: {
                    type: Object,
                    required: !0
                },
                isSubmitting: {
                    type: Boolean,
                    required: !0
                },
                isSubmitButtonLock: {
                    type: Boolean,
                    required: !0
                },
                submissionError: {
                    type: Boolean,
                    required: !1
                },
                body: {
                    type: Array,
                    required: !0
                },
                state: {
                    type: String,
                    required: !0
                },
                hasConversationCard: {
                    type: Boolean,
                    required: !0
                }
            },
            components: {
                TawkCard: s.TawkCard,
                TawkIcon: s.TawkIcon,
                TawkImage: s.TawkImage,
                TawkVideo: s.TawkVideo,
                TawkButton: s.TawkButton,
                KnowledgeBase: function() {
                    return Promise.all([a.e("chunk-2d221830"), a.e("chunk-2d0c02e2")]).then(a.bind(null, "414c"))
                },
                TawkAlert: s.TawkAlert,
                KnowledgeBaseSearch: function() {
                    return a.e("chunk-2d0e5f34").then(a.bind(null, "9755"))
                },
                Conversations: function() {
                    return a.e("chunk-5aa2faa9").then(a.bind(null, "30be"))
                },
                KbFeaturedArticle: function() {
                    return a.e("chunk-2d207f48").then(a.bind(null, "a377"))
                },
                TawkEmoji: s.TawkEmoji,
                TawkForm: function() {
                    return a.e("chunk-2d0b345a").then(a.bind(null, "2853"))
                }
            },
            mounted: function() {
                this.hasLiveChat && "previous-conversations" === this.card.type && (this.$emit("update:hasConversationCard", !0),
                this.isConversationCard = !0),
                this.$emit("contentCardLoaded")
            },
            computed: l(l({}, Object(i.c)({
                hasLiveChat: "widget/hasLiveChat",
                mobileBrowserName: "browserData/mobileBrowserName",
                hasChatStarted: "chat/hasChatStarted",
                isPrechatEnabled: "widget/isPrechatEnabled",
                prechatFormSubmitted: "session/prechatFormSubmitted",
                historyItems: "history/items",
                hasChatEnded: "chat/hasChatEnded",
                emojiEnabled: "widget/emojiEnabled",
                chatOrder: "chat/chatOrder",
                isNotValidEmail: "session/isNotValidEmail"
            })), {}, {
                isChatInputBottom: function() {
                    var t = !1;
                    return this.body && this.body.length && (t = "chat" === this.body[this.body.length - 1].type),
                    t
                },
                showStartChatButton: function() {
                    return !this.hasChatStarted && !this.hasChatEnded && (!this.isChatInputBottom || this.isPrechatEnabled && !this.prechatFormSubmitted)
                },
                showConversationCard: function() {
                    return this.isLoadingHistory || this.totalHistoryItems || this.chatOrder
                }
            }),
            methods: l(l({}, Object(i.b)({
                routerPush: "router/routerPush",
                showOverlay: "overlay/showOverlay"
            })), {}, {
                startChat: function() {
                    this.isPrechatEnabled && !this.prechatFormSubmitted ? this.routerPush("prechat") : (this.routerPush("chat"),
                    this.showOverlay(!1))
                },
                submitForm: function(t) {
                    this.$emit("submitForm", t)
                },
                convertToHTML: function(t) {
                    return r.a.markdownToHtml(t)
                },
                historyItemsLoaded: function(t) {
                    this.totalHistoryItems = t,
                    this.isLoadingHistory = !1
                }
            }),
            watch: {
                isNotValidEmail: function(t) {
                    t && (this.$emit("update:isSubmitting", !1),
                    this.$emit("update:isSubmitButtonLock", !1))
                }
            }
        }
          , m = a("2877")
          , h = Object(m.a)(d, (function() {
            var t = this
              , e = t._self._c;
            return !t.isConversationCard || t.isConversationCard && t.showConversationCard ? e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isConversationCard || t.isConversationCard && !t.isLoadingHistory,
                    expression: "!isConversationCard || (isConversationCard && !isLoadingHistory)"
                }],
                staticClass: "card-container",
                class: t.isConversationCard && t.chatOrder ? "tawk-flex-first" : ""
            }, ["heading" === t.card.type ? e("tawk-card", {
                staticClass: "tawk-box-shadow-xsmall",
                class: "card--" + t.card.type,
                attrs: {
                    color: "inverse",
                    size: "small"
                }
            }, [e("p", {
                staticClass: "tawk-text-bold-4",
                class: [t.card.content.alignment && "card--alignment-".concat(t.card.content.alignment)],
                attrs: {
                    role: "heading"
                }
            }, [e("tawk-emoji", {
                attrs: {
                    emoji: t.convertToHTML(t.card.content.value),
                    enabled: t.emojiEnabled
                }
            })], 1)]) : "text" === t.card.type ? e("tawk-card", {
                staticClass: "tawk-box-shadow-xsmall",
                class: "card--" + t.card.type,
                attrs: {
                    color: "inverse",
                    size: "small"
                }
            }, [e("p", {
                staticClass: "tawk-text-regular-4",
                class: [t.card.content.alignment && "card--alignment-".concat(t.card.content.alignment)]
            }, [e("tawk-emoji", {
                attrs: {
                    emoji: t.convertToHTML(t.card.content.value),
                    enabled: t.emojiEnabled
                }
            })], 1)]) : "image" === t.card.type ? e("tawk-card", {
                staticClass: "tawk-box-shadow-xsmall",
                class: "card--" + t.card.type,
                attrs: {
                    color: "inverse",
                    size: "small"
                }
            }, [e(t.card.content.link ? "a" : "div", {
                tag: "component",
                attrs: {
                    href: t.card.content.link ? t.card.content.link.ref : null,
                    target: t.card.content.link && "blank" === t.card.content.link.target ? "_blank" : "_top"
                }
            }, [e("tawk-image", {
                staticClass: "tawk-custom-image",
                attrs: {
                    position: t.card.content.alignment,
                    src: t.card.content.image.content,
                    alt: "".concat(t.$i18n("home", "banner_image")),
                    role: "banner"
                }
            })], 1)], 1) : "video" === t.card.type ? e("tawk-card", {
                staticClass: "tawk-box-shadow-xsmall",
                class: "card--" + t.card.type,
                attrs: {
                    color: "inverse",
                    size: "small"
                }
            }, [t.offVideo ? e("tawk-video", {
                attrs: {
                    content: {
                        source: t.card.content.source,
                        url: t.card.content.url,
                        options: t.card.content.config
                    },
                    isMobile: !!t.mobileBrowserName
                }
            }) : t._e()], 1) : "chat" === t.card.type ? [t.showStartChatButton && t.hasLiveChat ? e("tawk-card", {
                staticClass: "tawk-box-shadow-xsmall",
                class: "card--" + t.card.type,
                attrs: {
                    id: t.card.id,
                    color: "inverse",
                    size: "small"
                }
            }, [e("tawk-button", {
                staticClass: "tawk-button-hover tawk-custom-color tawk-custom-border-color",
                on: {
                    click: t.startChat
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "mobile-send"
                }
            }), t._v(" " + t._s(t.card.content.buttonText) + " ")], 1)], 1) : t._e()] : "kb-featured-articles" === t.card.type ? e("tawk-card", {
                staticClass: "tawk-home-kb-card",
                attrs: {
                    id: t.card.id,
                    color: "inverse",
                    size: "xsmall"
                }
            }, [e("knowledge-base", {
                attrs: {
                    state: t.state,
                    content: t.card.content
                }
            })], 1) : "kb-search" === t.card.type ? e("knowledge-base-search", {
                staticClass: "tawk-box-shadow-xsmall",
                attrs: {
                    content: t.card.content
                }
            }) : "kb-featured-article" == t.card.type ? e("kb-featured-article", {
                class: "card--" + t.card.type,
                attrs: {
                    content: t.card.content
                }
            }) : "form" === t.card.type ? e("div", {
                staticClass: "card--form",
                class: t.isSubmitting && "submitting"
            }, [e("tawk-form", {
                attrs: {
                    state: t.state,
                    submissionError: t.submissionError,
                    isSubmitting: t.isSubmitting,
                    isSubmitButtonLock: t.isSubmitButtonLock
                },
                on: {
                    "update:isSubmitting": [function(e) {
                        t.isSubmitting = e
                    }
                    , t.isSubmitting],
                    "update:is-submitting": function(e) {
                        t.isSubmitting = e
                    },
                    "update:isSubmitButtonLock": function(e) {
                        t.isSubmitButtonLock = e
                    },
                    "update:is-submit-button-lock": function(e) {
                        t.isSubmitButtonLock = e
                    },
                    onFormSubmit: t.submitForm
                }
            }), e("transition", {
                attrs: {
                    name: "slide-fade"
                }
            }, [t.submissionError ? e("tawk-alert", {
                staticClass: "tawk-form-error-alert",
                attrs: {
                    status: "danger",
                    icon: "error",
                    title: t.$i18n("form", "errorSaving"),
                    description: "",
                    isDismissable: !0,
                    isAutoDismissable: !0
                }
            }) : t._e()], 1)], 1) : t.isConversationCard ? e("tawk-card", {
                staticClass: "tawk-home-kb-card",
                attrs: {
                    id: t.card.id,
                    color: "inverse",
                    size: "xsmall"
                }
            }, [e("conversations", {
                on: {
                    historyItemsLoaded: t.historyItemsLoaded
                }
            })], 1) : t._e()], 2) : t._e()
        }
        ), [], !1, null, null, null);
        e.a = h.exports
    },
    "3f09": function(t, e, a) {
        "use strict";
        (function(t) {
            a.d(e, "a", (function() {
                return r
            }
            ));
            var i = a("f0b0")
              , r = {
                data: function() {
                    return {
                        headerClass: ""
                    }
                },
                methods: {
                    displayMessages: function(e) {
                        var a, r = e.message, n = void 0 === r ? {} : r, s = e.isIncoming, o = void 0 !== s && s, c = e.isLive, l = void 0 === c || c, u = this.isScrollBarBottom(), d = l ? this.$store.getters["chat/messageBlocks"] : this.$store.getters["history/messageBlocks"];
                        if (!n.profileImage && n.data && n.data.rsc) {
                            var m = this.$store.getters["chat/agentProfile"](n.data.rsc);
                            if (!m)
                                return;
                            n.profileImage = m.profileImage
                        }
                        if (d.length > 0 && "c" === n.type && ((a = d[d.length - 1]).ownerId === n.ownerId ? (n.blockId = a.blockId,
                        a.messages.push(n)) : a = null),
                        n.timeStamp > this.lastMessageTimestamp && ("v" === n.senderType ? this.$store.dispatch("session/updateVisitorChatSeen", n.timeStamp) : (this.unseenMessages.push(n),
                        "chat" === this.currentRoute && u && !this.isLoading || this.barMessageId || (n.showBar = !0,
                        this.barMessageId = n.messageId,
                        this.barMessageRerence = n))),
                        o && "a" === n.senderType && n.data && n.data.rsc && this.removeAgentIsTyping(n.data.rsc),
                        n.isCallView) {
                            t.Tawk_Window.chatManager.callStatusUpdate({
                                clid: n.callId,
                                f: {}
                            });
                            var h = {
                                ownerId: n.callId,
                                callData: n.callData,
                                messageType: "call",
                                blockId: i.Helper.generateUUID(),
                                callId: n.callId
                            };
                            l ? this.$store.dispatch("chat/addMessageBlock", h) : this.$store.dispatch("history/addMessageBlock", h)
                        } else if (!a) {
                            if (void 0 === n.ownerId && "n" === n.type)
                                return;
                            var f = {
                                ownerId: n.ownerId,
                                messages: [n],
                                senderType: n.senderType,
                                messageType: n.type,
                                blockId: i.Helper.generateUUID(),
                                profileImage: n.profileImage
                            };
                            n.blockId = f.blockId,
                            l ? this.$store.dispatch("chat/addMessageBlock", f) : this.$store.dispatch("history/addMessageBlock", f)
                        }
                        o && ("v" === n.senderType || u ? this.scrollToBottom() : this.checkBarPosition())
                    },
                    isScrollBarBottom: function() {
                        var t = this.$refs["tawk-chat-panel"];
                        if (t) {
                            var e = t.offsetHeight + 10;
                            return t.scrollHeight - (t.scrollTop + e) < 30
                        }
                    }
                }
            }
        }
        ).call(this, a("c8ba"))
    },
    "411f": function(t, e, a) {
        "use strict";
        var i = a("9ff9").a
          , r = a("2877")
          , n = Object(r.a)(i, (function() {
            var t = this
              , e = t._self._c;
            return e("base-frame", {
                ref: "tawk-frame",
                staticClass: "tawk-prechat-view"
            }, [e("base-header", {
                ref: "tawk-base-header",
                class: t.headerClass
            }, [e("home-header", {
                ref: "tawk-prechat-header",
                attrs: {
                    state: "prechat"
                }
            })], 1), e("base-body", [e("div", {
                staticStyle: {
                    width: "100%"
                }
            }, [e("home-body", {
                ref: "tawk-prechat-body",
                attrs: {
                    state: "prechat",
                    overwriteSubmit: !0
                },
                on: {
                    submitForm: t.submitForm,
                    homeLoaded: t.homeLoaded
                }
            })], 1)])], 1)
        }
        ), [], !1, null, null, null);
        e.a = n.exports
    },
    "4b3e": function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return o
        }
        ));
        var i = a("2f62");
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function n(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                a.push.apply(a, i)
            }
            return a
        }
        function s(t, e, a) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" != r(t) || !t)
                        return t;
                    var a = t[Symbol.toPrimitive];
                    if (void 0 !== a) {
                        var i = a.call(t, e || "default");
                        if ("object" != r(i))
                            return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == r(e) ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a,
            t
        }
        var o = {
            data: function() {
                return {
                    offVideo: !0
                }
            },
            computed: function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(a), !0).forEach((function(e) {
                        s(t, e, a[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }
                    ))
                }
                return t
            }({}, Object(i.c)({
                chatWindowState: "session/chatWindowState",
                currentRoute: "router/current"
            })),
            watch: {
                chatWindowState: function(t) {
                    "min" === t || "/" !== this.currentRoute && "kb-article" !== this.currentRoute ? this.offVideo = !1 : this.offVideo = !0
                },
                currentRoute: function(t) {
                    this.offVideo = "/" === t || "kb-article" === t
                }
            }
        }
    },
    "4cd0": function(t, e, a) {
        "use strict";
        var i = a("2f62")
          , r = a("7f46");
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function s(t, e) {
            var a = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                a.push.apply(a, i)
            }
            return a
        }
        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(a), !0).forEach((function(e) {
                    c(t, e, a[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                }
                ))
            }
            return t
        }
        function c(t, e, a) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" != n(t) || !t)
                        return t;
                    var a = t[Symbol.toPrimitive];
                    if (void 0 !== a) {
                        var i = a.call(t, e || "default");
                        if ("object" != n(i))
                            return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == n(e) ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a,
            t
        }
        var l = {
            name: "chat-header",
            components: {
                ChatAgents: function() {
                    return a.e("chunk-2d0a4ee2").then(a.bind(null, "0914"))
                },
                HomeHeader: function() {
                    return Promise.resolve().then(a.bind(null, "38d6"))
                }
            },
            mounted: function() {
                this.addWaitTime()
            },
            computed: o(o({}, Object(i.c)({
                states: "widget/states",
                pageStatus: "session/pageStatus",
                agents: "chat/agents",
                agentsCount: "chat/agentsCount",
                activeProfiles: "chat/activeProfiles",
                hasChatStarted: "chat/hasChatStarted",
                agentHasMessaged: "chat/agentHasMessaged",
                showEstimatedWaitTime: "widget/showEstimatedWaitTime",
                waitTime: "session/waitTime"
            })), {}, {
                header: function() {
                    return this.states[this.pageStatus] ? this.states[this.pageStatus].header : null
                },
                logoUrl: function() {
                    return "https://tawk.link"
                },
                hasHomeView: function() {
                    var t = this.states[this.pageStatus];
                    return !t || !t.body || 1 !== t.body.length || "chat" !== t.body[0].type
                }
            }),
            methods: o(o({}, Object(i.b)({
                routerPush: "router/routerPush",
                addWaitTime: "session/addWaitTime",
                showOverlay: "overlay/showOverlay"
            })), {}, {
                convertToHTML: function(t) {
                    return r.a.markdownToHtml(t)
                },
                changeView: function() {
                    this.routerPush("agents"),
                    this.showOverlay(!0)
                }
            })
        }
          , u = a("2877")
          , d = Object(u.a)(l, (function() {
            var t = this
              , e = t._self._c;
            return e("div", [0 === t.activeProfiles.length ? [!t.hasHomeView && t.header.length > 0 ? e("home-header", {
                staticClass: "tawk-margin-bottom",
                attrs: {
                    state: t.pageStatus
                }
            }) : t._e(), t.hasChatStarted && !t.agentHasMessaged && t.showEstimatedWaitTime && t.waitTime ? e("p", {
                staticClass: "tawk-margin-xsmall-bottom",
                domProps: {
                    innerHTML: t._s(t.$i18n("chat", "messageQueuedText", {
                        t: Math.ceil(t.waitTime / 6e4),
                        strongStart: "<b>",
                        strongEnd: "</b>"
                    }))
                }
            }) : t._e()] : e("chat-agents", {
                attrs: {
                    profiles: t.activeProfiles,
                    role: "button",
                    tabindex: "0"
                },
                nativeOn: {
                    click: function(e) {
                        return t.changeView.apply(null, arguments)
                    }
                }
            })], 2)
        }
        ), [], !1, null, null, null);
        e.a = d.exports
    },
    5688: function(t, e, a) {
        "use strict";
        var i = a("76a0").a
          , r = a("2877")
          , n = Object(r.a)(i, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: "adqe",
                class: t.wrapperClasses,
                style: {
                    borderRadius: t.borderRadiusTop
                }
            }, [e("div", {
                staticClass: "tawk-toolbar-nav",
                attrs: {
                    role: "navigation",
                    "aria-label": "primary"
                }
            }, [t.showBackButton ? e("div", {
                staticClass: "tawk-route-back tawk-flex tawk-flex-middle"
            }, [e("tawk-button", {
                directives: [{
                    name: "tawk-tooltip",
                    rawName: "v-tawk-tooltip"
                }],
                staticClass: "tawk-header-text tawk-button-hover",
                attrs: {
                    isText: !0,
                    inverse: !0,
                    "data-text": t.$i18n("rollover", "back"),
                    "aria-label": t.$i18n("rollover", "back")
                },
                on: {
                    click: t.routerBack
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "left-arrow",
                    size: "small"
                }
            })], 1), t.currentView.title && "agents" !== t.currentRoute ? e("span", {
                staticClass: "tawk-toolbar-title tawk-text-regular-3 tawk-header-text tawk-margin-xsmall-left tawk-custom-text-color-inverse"
            }, [t._v(" " + t._s(t.currentView.title()) + " ")]) : t._e()], 1) : t._e(), e("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [t.isAgentAvatarsVisible ? e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.toolbarOptions.showAgentAvatars,
                    expression: "toolbarOptions.showAgentAvatars"
                }],
                staticClass: "tawk-toolbar-agent-avatars",
                on: {
                    click: t.toggleAgentsList
                }
            }, [t._l(t.getActiveAgents, (function(a, i) {
                return e("tawk-avatar", {
                    key: i,
                    attrs: {
                        src: t.convertToAvatarLink(a.profileImage),
                        alt: "".concat(t.$i18n("chat", "agent_profile_image"))
                    }
                })
            }
            )), e("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [1 === t.activeProfiles.length ? e("div", {
                staticClass: "tawk-toolbar-agent-details"
            }, [e("p", {
                staticClass: "tawk-toolbar-agent-name tawk-text-truncate"
            }, [t._v(" " + t._s(t.getActiveAgents[0].displayName) + " ")]), e("p", {
                staticClass: "tawk-toolbar-agent-title tawk-text-truncate"
            }, [t._v(" " + t._s(t.getActiveAgents[0].profileTitle) + " ")])]) : e("tawk-avatar", {
                attrs: {
                    count: t.activeProfiles.length - 1
                }
            })], 1)], 2) : t._e()])], 1), e("div", {
                staticClass: "tawk-margin-auto-left tawk-flex-none tawk-flex tawk-flex-middle",
                attrs: {
                    role: "navigation",
                    "aria-label": "secondary"
                }
            }, [t.showWebrtcOptions && !t.needConsent ? e("div", [e("tawk-button", {
                directives: [{
                    name: "tawk-tooltip",
                    rawName: "v-tawk-tooltip"
                }],
                staticClass: "tawk-header-text tawk-button-hover",
                attrs: {
                    isText: !0,
                    inverse: !0,
                    disabled: t.ongoingCall,
                    "aria-label": t.$i18n("rollover", "voiceCall"),
                    "data-text": t.$i18n("rollover", "voiceCall")
                },
                on: {
                    click: t.initiateCall
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "call"
                }
            })], 1), t.webrtcOptions.video ? e("tawk-button", {
                directives: [{
                    name: "tawk-tooltip",
                    rawName: "v-tawk-tooltip"
                }],
                staticClass: "tawk-header-text tawk-button-hover",
                attrs: {
                    isText: !0,
                    inverse: !0,
                    disabled: t.ongoingCall,
                    "aria-label": t.$i18n("rollover", "videoCall"),
                    "data-text": t.$i18n("rollover", "videoCall")
                },
                on: {
                    click: function(e) {
                        return t.initiateCall(!0, !1)
                    }
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "video-chat"
                }
            })], 1) : t._e(), t.webrtcOptions.screen ? e("tawk-button", {
                directives: [{
                    name: "tawk-tooltip",
                    rawName: "v-tawk-tooltip"
                }],
                staticClass: "tawk-header-text tawk-button-hover",
                attrs: {
                    isText: !0,
                    inverse: !0,
                    disabled: t.ongoingCall,
                    "aria-label": t.$i18n("rollover", "screenShare"),
                    "data-text": t.$i18n("rollover", "screenShare")
                },
                on: {
                    click: function(e) {
                        return t.initiateCall(!1, !0)
                    }
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "screenshare"
                }
            })], 1) : t._e()], 1) : t._e(), t.isHamburgerMenuVisible && !t.needConsent ? e("tawk-dropdown", {
                ref: "toolbar-menu",
                staticClass: "tawk-toolbar-menu",
                attrs: {
                    isOpen: t.isOpen,
                    position: t.isRTL ? "left" : "right",
                    role: "menu"
                }
            }, [e("tawk-button", {
                directives: [{
                    name: "tawk-tooltip",
                    rawName: "v-tawk-tooltip"
                }],
                ref: "toolbar-button",
                staticClass: "tawk-header-text tawk-margin-auto-left tawk-flex-none tawk-button-hover",
                attrs: {
                    isText: !0,
                    inverse: !0,
                    "aria-label": t.$i18n("rollover", "chatMenu"),
                    "data-text": t.$i18n("rollover", "chatMenu")
                },
                nativeOn: {
                    click: function(e) {
                        return t.toggleDropdown.apply(null, arguments)
                    }
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "hamburger-menu"
                }
            })], 1), e("div", {
                attrs: {
                    slot: "menu"
                },
                slot: "menu"
            }, [e("tawk-button", {
                staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                attrs: {
                    isText: !0,
                    size: "small"
                },
                on: {
                    click: t.nameForm
                }
            }, [e("span", {
                staticStyle: {
                    width: "25px"
                }
            }, [e("tawk-icon", {
                staticStyle: {
                    width: "20px"
                },
                attrs: {
                    type: "change-name",
                    size: "small"
                }
            })], 1), t._v(" " + t._s(t.$i18n("menu", "change_name")) + " ")]), t.emailTranscriptEnabled ? e("tawk-button", {
                staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                attrs: {
                    isText: !0,
                    size: "small"
                },
                on: {
                    click: t.emailTranscriptForm
                }
            }, [e("span", {
                staticStyle: {
                    width: "25px"
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "email-transcript",
                    size: "small"
                }
            })], 1), t._v(" " + t._s(t.$i18n("menu", "email_transcript")) + " ")]) : t._e(), e("tawk-button", {
                staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                attrs: {
                    isText: !0,
                    size: "small"
                },
                on: {
                    click: t.toggleLocalSound
                }
            }, [t.isSoundEnabled && t.localSoundEnabled ? e("div", [e("span", {
                staticStyle: {
                    width: "1.6rem"
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "sound-on",
                    size: "medium"
                }
            })], 1), t._v(" " + t._s(t.$i18n("menu", "sound_on")) + " ")]) : e("div", [e("span", {
                staticStyle: {
                    width: "1.6rem"
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "sound-off",
                    size: "medium"
                }
            })], 1), t._v(" " + t._s(t.$i18n("menu", "sound_off")) + " ")])]), t.isWindowed ? t._e() : e("tawk-button", {
                staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                attrs: {
                    isText: !0,
                    size: "small"
                },
                on: {
                    click: t.popoutWidget
                }
            }, [e("span", {
                staticStyle: {
                    width: "1.6rem"
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "pop-out",
                    size: "medium"
                }
            })], 1), t._v(t._s(t.$i18n("menu", "popout_widget")) + " ")]), t.hasChatStarted ? e("tawk-button", {
                staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                attrs: {
                    isText: !0,
                    size: "small"
                },
                on: {
                    click: function(e) {
                        return t.$emit("showEndChat")
                    }
                }
            }, [e("span", {
                staticStyle: {
                    width: "1.6rem"
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "end-chat",
                    size: "small"
                }
            })], 1), t._v(" " + t._s(t.$i18n("menu", "end_chat_session")) + " ")]) : t._e(), t.branding && !t.branding.whitelabeled ? e("tawk-button", {
                staticClass: "tawk-text-left tawk-flex tawk-flex-middle",
                attrs: {
                    href: t.branding.url,
                    target: "blank",
                    isText: !0,
                    size: "small"
                }
            }, [e("span", {
                staticStyle: {
                    width: "1.6rem"
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "message",
                    size: "small"
                }
            })], 1), t._v(" " + t._s(t.$i18n("menu", "add_chat_to_your_website")) + " ")]) : t._e()], 1)], 1) : t._e(), t.isWindowed || t.isRoundWidget && !t.mobileBrowserName && "slide" !== this.onClick ? t._e() : e("tawk-button", {
                directives: [{
                    name: "tawk-tooltip",
                    rawName: "v-tawk-tooltip"
                }],
                staticClass: "tawk-header-text tawk-flex-none tawk-button-hover tawk-custom-color",
                attrs: {
                    isText: !0,
                    "data-text": t.$i18n("rollover", "minimize"),
                    "aria-label": t.$i18n("rollover", "minimize")
                },
                nativeOn: {
                    click: function(e) {
                        return t.toggleWidget.apply(null, arguments)
                    }
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "close",
                    size: "small"
                }
            })], 1)], 1)])
        }
        ), [], !1, null, null, null);
        e.a = n.exports
    },
    "733e": function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a("2f62")
              , r = a("f0b0")
              , n = a("9348")
              , s = a("bdd0")
              , o = a("9ab4")
              , c = a("5868");
            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function u() {
                u = function() {
                    return e
                }
                ;
                var t, e = {}, a = Object.prototype, i = a.hasOwnProperty, r = Object.defineProperty || function(t, e, a) {
                    t[e] = a.value
                }
                , n = "function" == typeof Symbol ? Symbol : {}, s = n.iterator || "@@iterator", o = n.asyncIterator || "@@asyncIterator", c = n.toStringTag || "@@toStringTag";
                function d(t, e, a) {
                    return Object.defineProperty(t, e, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    d({}, "")
                } catch (t) {
                    d = function(t, e, a) {
                        return t[e] = a
                    }
                }
                function m(t, e, a, i) {
                    var n = e && e.prototype instanceof b ? e : b
                      , s = Object.create(n.prototype)
                      , o = new _(i || []);
                    return r(s, "_invoke", {
                        value: $(t, a, o)
                    }),
                    s
                }
                function h(t, e, a) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, a)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = m;
                var f = "suspendedStart"
                  , p = "executing"
                  , g = "completed"
                  , w = {};
                function b() {}
                function v() {}
                function y() {}
                var k = {};
                d(k, s, (function() {
                    return this
                }
                ));
                var S = Object.getPrototypeOf
                  , O = S && S(S(F([])));
                O && O !== a && i.call(O, s) && (k = O);
                var T = y.prototype = b.prototype = Object.create(k);
                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        d(t, e, (function(t) {
                            return this._invoke(e, t)
                        }
                        ))
                    }
                    ))
                }
                function C(t, e) {
                    function a(r, n, s, o) {
                        var c = h(t[r], t, n);
                        if ("throw" !== c.type) {
                            var u = c.arg
                              , d = u.value;
                            return d && "object" == l(d) && i.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                a("next", t, s, o)
                            }
                            ), (function(t) {
                                a("throw", t, s, o)
                            }
                            )) : e.resolve(d).then((function(t) {
                                u.value = t,
                                s(u)
                            }
                            ), (function(t) {
                                return a("throw", t, s, o)
                            }
                            ))
                        }
                        o(c.arg)
                    }
                    var n;
                    r(this, "_invoke", {
                        value: function(t, i) {
                            function r() {
                                return new e((function(e, r) {
                                    a(t, i, e, r)
                                }
                                ))
                            }
                            return n = n ? n.then(r, r) : r()
                        }
                    })
                }
                function $(e, a, i) {
                    var r = f;
                    return function(n, s) {
                        if (r === p)
                            throw Error("Generator is already running");
                        if (r === g) {
                            if ("throw" === n)
                                throw s;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (i.method = n,
                        i.arg = s; ; ) {
                            var o = i.delegate;
                            if (o) {
                                var c = j(o, i);
                                if (c) {
                                    if (c === w)
                                        continue;
                                    return c
                                }
                            }
                            if ("next" === i.method)
                                i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if (r === f)
                                    throw r = g,
                                    i.arg;
                                i.dispatchException(i.arg)
                            } else
                                "return" === i.method && i.abrupt("return", i.arg);
                            r = p;
                            var l = h(e, a, i);
                            if ("normal" === l.type) {
                                if (r = i.done ? g : "suspendedYield",
                                l.arg === w)
                                    continue;
                                return {
                                    value: l.arg,
                                    done: i.done
                                }
                            }
                            "throw" === l.type && (r = g,
                            i.method = "throw",
                            i.arg = l.arg)
                        }
                    }
                }
                function j(e, a) {
                    var i = a.method
                      , r = e.iterator[i];
                    if (r === t)
                        return a.delegate = null,
                        "throw" === i && e.iterator.return && (a.method = "return",
                        a.arg = t,
                        j(e, a),
                        "throw" === a.method) || "return" !== i && (a.method = "throw",
                        a.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                        w;
                    var n = h(r, e.iterator, a.arg);
                    if ("throw" === n.type)
                        return a.method = "throw",
                        a.arg = n.arg,
                        a.delegate = null,
                        w;
                    var s = n.arg;
                    return s ? s.done ? (a[e.resultName] = s.value,
                    a.next = e.nextLoc,
                    "return" !== a.method && (a.method = "next",
                    a.arg = t),
                    a.delegate = null,
                    w) : s : (a.method = "throw",
                    a.arg = new TypeError("iterator result is not an object"),
                    a.delegate = null,
                    w)
                }
                function P(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function E(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function _(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(P, this),
                    this.reset(!0)
                }
                function F(e) {
                    if (e || "" === e) {
                        var a = e[s];
                        if (a)
                            return a.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var r = -1
                              , n = function a() {
                                for (; ++r < e.length; )
                                    if (i.call(e, r))
                                        return a.value = e[r],
                                        a.done = !1,
                                        a;
                                return a.value = t,
                                a.done = !0,
                                a
                            };
                            return n.next = n
                        }
                    }
                    throw new TypeError(l(e) + " is not iterable")
                }
                return v.prototype = y,
                r(T, "constructor", {
                    value: y,
                    configurable: !0
                }),
                r(y, "constructor", {
                    value: v,
                    configurable: !0
                }),
                v.displayName = d(y, c, "GeneratorFunction"),
                e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y,
                    d(t, c, "GeneratorFunction")),
                    t.prototype = Object.create(T),
                    t
                }
                ,
                e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                x(C.prototype),
                d(C.prototype, o, (function() {
                    return this
                }
                )),
                e.AsyncIterator = C,
                e.async = function(t, a, i, r, n) {
                    void 0 === n && (n = Promise);
                    var s = new C(m(t, a, i, r),n);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(t) {
                        return t.done ? t.value : s.next()
                    }
                    ))
                }
                ,
                x(T),
                d(T, c, "Generator"),
                d(T, s, (function() {
                    return this
                }
                )),
                d(T, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                e.keys = function(t) {
                    var e = Object(t)
                      , a = [];
                    for (var i in e)
                        a.push(i);
                    return a.reverse(),
                    function t() {
                        for (; a.length; ) {
                            var i = a.pop();
                            if (i in e)
                                return t.value = i,
                                t.done = !1,
                                t
                        }
                        return t.done = !0,
                        t
                    }
                }
                ,
                e.values = F,
                _.prototype = {
                    constructor: _,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = t,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = t,
                        this.tryEntries.forEach(E),
                        !e)
                            for (var a in this)
                                "t" === a.charAt(0) && i.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done)
                            throw e;
                        var a = this;
                        function r(i, r) {
                            return o.type = "throw",
                            o.arg = e,
                            a.next = i,
                            r && (a.method = "next",
                            a.arg = t),
                            !!r
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var s = this.tryEntries[n]
                              , o = s.completion;
                            if ("root" === s.tryLoc)
                                return r("end");
                            if (s.tryLoc <= this.prev) {
                                var c = i.call(s, "catchLoc")
                                  , l = i.call(s, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < s.catchLoc)
                                        return r(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc)
                                        return r(s.finallyLoc)
                                } else if (c) {
                                    if (this.prev < s.catchLoc)
                                        return r(s.catchLoc, !0)
                                } else {
                                    if (!l)
                                        throw Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc)
                                        return r(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var n = r;
                                break
                            }
                        }
                        n && ("break" === t || "continue" === t) && n.tryLoc <= e && e <= n.finallyLoc && (n = null);
                        var s = n ? n.completion : {};
                        return s.type = t,
                        s.arg = e,
                        n ? (this.method = "next",
                        this.next = n.finallyLoc,
                        w) : this.complete(s)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        w
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var a = this.tryEntries[e];
                            if (a.finallyLoc === t)
                                return this.complete(a.completion, a.afterLoc),
                                E(a),
                                w
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var a = this.tryEntries[e];
                            if (a.tryLoc === t) {
                                var i = a.completion;
                                if ("throw" === i.type) {
                                    var r = i.arg;
                                    E(a)
                                }
                                return r
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, a, i) {
                        return this.delegate = {
                            iterator: F(e),
                            resultName: a,
                            nextLoc: i
                        },
                        "next" === this.method && (this.arg = t),
                        w
                    }
                },
                e
            }
            function d(t, e, a, i, r, n, s) {
                try {
                    var o = t[n](s)
                      , c = o.value
                } catch (t) {
                    return void a(t)
                }
                o.done ? e(c) : Promise.resolve(c).then(i, r)
            }
            function m(t) {
                return function() {
                    var e = this
                      , a = arguments;
                    return new Promise((function(i, r) {
                        var n = t.apply(e, a);
                        function s(t) {
                            d(n, i, r, s, o, "next", t)
                        }
                        function o(t) {
                            d(n, i, r, s, o, "throw", t)
                        }
                        s(void 0)
                    }
                    ))
                }
            }
            function h(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    a.push.apply(a, i)
                }
                return a
            }
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(a), !0).forEach((function(e) {
                        p(t, e, a[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : h(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }
                    ))
                }
                return t
            }
            function p(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != l(t) || !t)
                            return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var i = a.call(t, e || "default");
                            if ("object" != l(i))
                                return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == l(e) ? e : e + ""
                }(e))in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
            }
            e.a = {
                name: "chat-body-messsage-bubble",
                components: {
                    TawkCard: r.TawkCard,
                    TawkSpinner: n.a,
                    TawkAlert: r.TawkAlert,
                    TawkEmoji: r.TawkEmoji,
                    TawkIcon: r.TawkIcon,
                    TawkButton: r.TawkButton,
                    TawkChatBubble: r.TawkChatBubble,
                    TawkInput: r.TawkInput,
                    TawkTextarea: r.TawkTextarea
                },
                data: function() {
                    return {
                        ticketForm: {
                            name: "",
                            email: "",
                            phone: "",
                            subject: "",
                            message: "",
                            referenceId: this.msg.ticketFormRef,
                            isSubmitting: !1,
                            submissionError: null,
                            submissionSuccess: !1,
                            invalid: {
                                name: null,
                                email: null,
                                phone: null,
                                subject: null,
                                message: null
                            }
                        },
                        leadForm: {
                            name: "",
                            email: "",
                            phone: "",
                            message: "",
                            referenceId: this.msg.leadFormRef,
                            isSubmitting: !1,
                            submissionError: null,
                            submissionSuccess: !1,
                            invalid: {
                                name: null,
                                email: null,
                                phone: null,
                                message: null
                            }
                        }
                    }
                },
                props: {
                    msg: {
                        type: Object,
                        required: !0
                    },
                    barMessageRerence: {
                        type: String,
                        default: null
                    },
                    emojiEnabled: {
                        type: Boolean,
                        default: !0
                    }
                },
                mounted: function() {
                    this.ticketForm.name = this.name,
                    this.ticketForm.email = this.email,
                    this.leadForm.name = this.name,
                    this.leadForm.email = this.email
                },
                watch: {
                    name: function(t, e) {
                        t !== e && (this.ticketForm.name = t,
                        this.leadForm.name = t)
                    },
                    email: function(t, e) {
                        t !== e && (this.ticketForm.email = t,
                        this.leadForm.email = t)
                    }
                },
                computed: f(f({}, Object(i.c)({
                    name: "visitor/name",
                    email: "visitor/getEmailValue",
                    formRefs: "chat/formRefs",
                    propertyId: "property/id",
                    widgetId: "widget/id",
                    os: "browserData/os"
                })), {}, {
                    getTicketImageUrl: function() {
                        return "".concat("https://embed.tawk.to/_s/v4/assets", "/images/ticket-submit-success.svg")
                    },
                    hasTicketFormSubmit: function() {
                        return !!this.msg.ticketFormRef && this.formRefs[this.msg.ticketFormRef]
                    },
                    hasLeadFormSubmit: function() {
                        return !!this.msg.leadFormRef && this.formRefs[this.msg.leadFormRef]
                    }
                }),
                methods: {
                    handleAttachmentProps: function(t) {
                        return m(u().mark((function e() {
                            var a, i;
                            return u().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return a = t.fileType,
                                        i = {},
                                        e.next = 4,
                                        t.attachments.forEach((function(e) {
                                            "image" === e.type ? i.images.push({
                                                source: e.fileLink,
                                                name: e.fileName
                                            }) : "video" === a ? i.videos.push({
                                                name: t.fileName,
                                                source: "selfhosted",
                                                url: t.fileLink,
                                                options: {
                                                    controls: "",
                                                    mute: !0,
                                                    loop: !1,
                                                    startTime: "0"
                                                },
                                                size: t.humanizeFileSize
                                            }) : "audio" === a ? i.audios.push({
                                                source: t.fileLink,
                                                type: t.data.file.mimetype,
                                                name: t.fileName,
                                                size: t.humanizeFileSize
                                            }) : i.files.push({
                                                source: t.fileLink,
                                                name: t.fileName,
                                                size: t.humanizeFileSize
                                            })
                                        }
                                        ));
                                    case 4:
                                        return e.abrupt("return", i);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))()
                    },
                    sendTicketForm: function() {
                        var e = this;
                        return m(u().mark((function a() {
                            var i, r, n;
                            return u().wrap((function(a) {
                                for (; ; )
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (e.ticketForm.submissionError = null,
                                        e.$refs["ticket-name-input"] && e.$refs["ticket-name-input"].validate(),
                                        e.$refs["ticket-email-input"] && e.$refs["ticket-email-input"].validate(),
                                        e.$refs["ticket-phone-input"] && e.$refs["ticket-phone-input"].validate(),
                                        e.$refs["ticket-subject-input"] && e.$refs["ticket-subject-input"].validate(),
                                        e.$refs["ticket-message-input"] && e.$refs["ticket-message-input"].validate(),
                                        !(e.ticketForm.invalid.name || e.ticketForm.invalid.email || e.ticketForm.invalid.subject || e.ticketForm.invalid.message)) {
                                            a.next = 8;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 8:
                                        return e.ticketForm.isSubmitting = !0,
                                        a.prev = 9,
                                        a.next = 12,
                                        e.$store.dispatch("session/checkTokenValidity");
                                    case 12:
                                        a.next = 18;
                                        break;
                                    case 14:
                                        return a.prev = 14,
                                        a.t0 = a.catch(9),
                                        console.error("[JSAPI/Login]", a.t0),
                                        a.abrupt("return");
                                    case 18:
                                        (i = t.Tawk_Window.sessionManager.getStoredToken()) && (r = {
                                            "X-Tawk-Token": i
                                        }),
                                        n = {
                                            referenceId: e.msg.ticketFormRef,
                                            name: e.ticketForm.name,
                                            email: e.ticketForm.email,
                                            phone: e.ticketForm.phone || void 0,
                                            subject: e.ticketForm.subject,
                                            message: e.ticketForm.message
                                        },
                                        s.a.post("".concat("https://va.tawk.to", "/v1/ticket/create"), n, r, (function(a, i) {
                                            if (a || i.error) {
                                                if (e.ticketForm.isSubmitting = !1,
                                                i && i.error) {
                                                    if ("InternalServerError" === i.error.code)
                                                        return void (e.ticketForm.submissionError = "The server is unavailable. Please try again.");
                                                    if ("TooManyRequestsError" === i.error.code)
                                                        return void (e.ticketForm.submissionError = "You have made too many requests.");
                                                    if ("GoneError" === i.error.code)
                                                        return void (e.ticketForm.submissionError = "Property is not available");
                                                    if ("NotFoundError" === i.error.code)
                                                        return void (e.ticketForm.submissionError = "Session not found")
                                                }
                                                e.ticketForm.submissionError = "Unable to submit form. Please try again"
                                            } else
                                                e.ticketForm.isSubmitting = !1,
                                                e.ticketForm.submissionSuccess = !0,
                                                e.$store.commit("chat/setFormRefs", {
                                                    id: e.msg.ticketFormRef,
                                                    done: !0
                                                }),
                                                e.$nextTick((function() {
                                                    t.Tawk_Window.eventBus.$emit("updateScrollPosition")
                                                }
                                                ))
                                        }
                                        ), !1, !0);
                                    case 22:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a, null, [[9, 14]])
                        }
                        )))()
                    },
                    sendLeadForm: function() {
                        var e = this;
                        return m(u().mark((function a() {
                            var i, r, n;
                            return u().wrap((function(a) {
                                for (; ; )
                                    switch (a.prev = a.next) {
                                    case 0:
                                        if (e.leadForm.submissionError = null,
                                        e.$refs["lead-name-input"] && e.$refs["lead-name-input"].validate(),
                                        e.$refs["lead-email-input"] && e.$refs["lead-email-input"].validate(),
                                        e.$refs["lead-phone-input"] && e.$refs["lead-phone-input"].validate(),
                                        e.$refs["lead-message-input"] && e.$refs["lead-message-input"].validate(),
                                        !(e.leadForm.invalid.name || e.leadForm.invalid.email || e.leadForm.invalid.phone || e.leadForm.invalid.message)) {
                                            a.next = 7;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 7:
                                        if ("" !== e.leadForm.name || "" !== e.leadForm.email || "" !== e.leadForm.phone || "" !== e.leadForm.message) {
                                            a.next = 10;
                                            break
                                        }
                                        return e.leadForm.submissionError = "Please fill up the fields",
                                        a.abrupt("return");
                                    case 10:
                                        return e.leadForm.isSubmitting = !0,
                                        a.prev = 11,
                                        a.next = 14,
                                        e.$store.dispatch("session/checkTokenValidity");
                                    case 14:
                                        a.next = 20;
                                        break;
                                    case 16:
                                        return a.prev = 16,
                                        a.t0 = a.catch(11),
                                        console.error("[JSAPI/Login]", a.t0),
                                        a.abrupt("return");
                                    case 20:
                                        (i = t.Tawk_Window.sessionManager.getStoredToken()) && (r = {
                                            "X-Tawk-Token": i
                                        }),
                                        n = {
                                            referenceId: e.leadForm.referenceId,
                                            name: e.leadForm.name || void 0,
                                            email: e.leadForm.email || void 0,
                                            phone: e.leadForm.phone || void 0,
                                            message: e.leadForm.message || void 0
                                        },
                                        s.a.post("".concat("https://va.tawk.to", "/v1/form/lead-capture/submit"), n, r, (function(a, i) {
                                            if (a || i.error) {
                                                if (e.leadForm.isSubmitting = !1,
                                                i && i.error) {
                                                    if ("BadRequestError" === i.error.code)
                                                        return void (e.leadForm.submissionError = "Invalid parameters");
                                                    if ("NotFoundError" === i.error.code)
                                                        return void (e.leadForm.submissionError = "Form reference not found.");
                                                    if ("ConflictError" === i.error.code)
                                                        return void (e.leadForm.submissionError = "Form already submitted");
                                                    if ("InternalServerError" === i.error.code)
                                                        return void (e.leadForm.submissionError = "The server is unavailable. Please try again.")
                                                }
                                                e.leadForm.submissionError = "Unable to submit form. Please try again"
                                            } else
                                                e.leadForm.isSubmitting = !1,
                                                e.leadForm.submissionSuccess = !0,
                                                e.$store.commit("chat/setFormRefs", {
                                                    id: e.leadForm.referenceId,
                                                    done: !0
                                                }),
                                                e.$nextTick((function() {
                                                    t.Tawk_Window.eventBus.$emit("updateScrollPosition")
                                                }
                                                ))
                                        }
                                        ), !1, !0);
                                    case 24:
                                    case "end":
                                        return a.stop()
                                    }
                            }
                            ), a, null, [[11, 16]])
                        }
                        )))()
                    },
                    handleResendMessage: function(t) {
                        this.$emit("resendMessage", t)
                    },
                    parseMDToHTML: function(e) {
                        try {
                            var a, i = o.MarkdownToHtml.parseMarkdown(e);
                            return ((i = i.replace(c.a.regLineBreaks, c.a.br))instanceof Error || void 0 === i) && t.Tawk_Window.logger.reportError({
                                error: i,
                                source: {
                                    name: "views/chat/body/message-bubble.vue",
                                    method: "parseMDToHTML()"
                                },
                                data: {
                                    propertyId: this.propertyId,
                                    widgetId: this.widgetId,
                                    os: this.os,
                                    userAgent: null === (a = navigator) || void 0 === a ? void 0 : a.userAgent
                                }
                            }),
                            i
                        } catch (a) {
                            var r;
                            return t.Tawk_Window.logger.reportError({
                                error: a,
                                source: {
                                    name: "views/chat/body/message-bubble.vue",
                                    method: "parseMDToHTML()"
                                },
                                data: {
                                    propertyId: this.propertyId,
                                    widgetId: this.widgetId,
                                    os: this.os,
                                    userAgent: null === (r = navigator) || void 0 === r ? void 0 : r.userAgent
                                }
                            }),
                            e
                        }
                    }
                }
            }
        }
        ).call(this, a("c8ba"))
    },
    "76a0": function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a("2f62")
              , r = a("f0b0");
            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function s(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    a.push.apply(a, i)
                }
                return a
            }
            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(a), !0).forEach((function(e) {
                        c(t, e, a[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }
                    ))
                }
                return t
            }
            function c(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != n(t) || !t)
                            return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var i = a.call(t, e || "default");
                            if ("object" != n(i))
                                return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == n(e) ? e : e + ""
                }(e))in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
            }
            e.a = {
                name: "toolbar",
                components: {
                    TawkIcon: r.TawkIcon,
                    TawkButton: r.TawkButton,
                    TawkDropdown: r.TawkDropdown,
                    TawkAvatar: r.TawkAvatar
                },
                directives: {
                    TawkTooltip: r.TawkTooltip
                },
                data: function() {
                    return {
                        isOpen: !1
                    }
                },
                props: {
                    currentView: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    },
                    borderRadiusTop: {
                        type: String,
                        default: "0px"
                    },
                    hasBackground: {
                        type: Boolean,
                        default: !0
                    },
                    showBackButton: {
                        default: !1
                    },
                    showWebRtcButtons: {
                        type: Boolean,
                        default: !1
                    },
                    showAgentAvatars: {
                        default: !1
                    }
                },
                computed: o(o({}, Object(i.c)({
                    isSoundEnabled: "widget/isSoundEnabled",
                    localSoundEnabled: "widget/localSoundEnabled",
                    isRoundWidget: "widget/isRoundWidget",
                    mobileBrowserName: "browserData/mobileBrowserName",
                    hasChatStarted: "chat/hasChatStarted",
                    isWindowed: "widget/isWindowed",
                    prechatFormSubmitted: "session/prechatFormSubmitted",
                    isPrechatEnabled: "widget/isPrechatEnabled",
                    pageStatus: "session/pageStatus",
                    isRTL: "widget/isRTL",
                    webrtcOptions: "widget/webrtcOptions",
                    hasLiveChat: "widget/hasLiveChat",
                    agentsCount: "chat/agentsCount",
                    needConsent: "session/needConsent",
                    currentRoute: "router/current",
                    components: "widget/components",
                    emailTranscriptEnabled: "widget/emailTranscriptEnabled",
                    activeProfiles: "chat/activeProfiles",
                    toolbarOptions: "widget/toolbarOptions",
                    branding: "widget/branding",
                    calls: "chat/calls",
                    messageBlocks: "chat/messageBlocks",
                    ongoingCall: "chat/ongoingCall",
                    onClick: "widget/onClick"
                })), {}, {
                    showWebrtcOptions: function() {
                        return this.components.webrtc && "offline" !== this.pageStatus && this.webrtcOptions && this.webrtcOptions.enabled && (!this.isPrechatEnabled || this.isPrechatEnabled && this.prechatFormSubmitted) && this.showWebRtcButtons && !this.isBotOnly
                    },
                    isBotOnly: function() {
                        if (0 === this.activeProfiles.length)
                            return !1;
                        var t = !1;
                        return this.activeProfiles[0].isBot && (t = !0),
                        t
                    },
                    wrapperClasses: function() {
                        return this.hasBackground ? ["tawk-toolbar", "tawk-card-primary", "tawk-flex", "tawk-card-small", "tawk-flex-none", "tawk-flex-middle", "tawk-custom-color"] : ["tawk-toolbar"]
                    },
                    isLiveChatFeatureEnabled: function() {
                        return !!(this.hasLiveChat || this.hasChatStarted && this.agentsCount > 0)
                    },
                    isHamburgerMenuVisible: function() {
                        return "offline" !== this.pageStatus && ("chat" === this.currentRoute || "agents" === this.currentRoute)
                    },
                    isAgentAvatarsVisible: function() {
                        return !(!this.showAgentAvatars || "chat" !== this.currentRoute && "agents" !== this.currentRoute || !(this.activeProfiles.length > 0))
                    },
                    getActiveAgents: function() {
                        var t = this.activeProfiles;
                        return t < 2 ? t : t.slice(0, 1)
                    }
                }),
                methods: o(o({}, Object(i.b)({
                    routerPush: "router/routerPush",
                    routerBack: "router/routerBack",
                    toggleLocalSound: "widget/toggleLocalSound",
                    toggleWidget: "session/toggleWidget",
                    showOverlay: "overlay/showOverlay"
                })), {}, {
                    initiateCall: function(e, a) {
                        t.Tawk_Window.chatManager.initiateCall(e, a)
                    },
                    popoutWidget: function() {
                        t.Tawk_Window.popoutWidget()
                    },
                    toggleDropdown: function() {
                        this.isOpen = !this.isOpen
                    },
                    nameForm: function() {
                        this.isOpen = !1,
                        this.routerPush("name-form"),
                        this.showOverlay(!0)
                    },
                    emailTranscriptForm: function() {
                        this.isOpen = !1,
                        this.routerPush("email-transcript-form"),
                        this.showOverlay(!0)
                    },
                    convertToAvatarLink: function(t) {
                        return t ? 0 === t.indexOf("https://s3.amazonaws.com/tawk-to-pi") || 0 === t.indexOf("https://embed.tawk.to/_s/v4/assets") ? t : "".concat("https://s3.amazonaws.com/tawk-to-pi", "/").concat(t) : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg")
                    },
                    toggleAgentsList: function() {
                        this.routerPush("agents"),
                        this.showOverlay(!0)
                    }
                }),
                mounted: function() {
                    var e = this;
                    t.Tawk_Window.eventBus.$on("widgetOnFocus", (function(t) {
                        e.$refs["toolbar-button"] && !e.$refs["toolbar-button"].$el.contains(t.target) && (e.isOpen = !1)
                    }
                    ))
                }
            }
        }
        ).call(this, a("c8ba"))
    },
    "7ea7": function(t, e, a) {
        "use strict";
        var i = a("f187").a
          , r = a("2877")
          , n = Object(r.a)(i, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: "main-footer",
                class: t.mainFooterClasses,
                style: {
                    borderRadius: t.borderRadiusBottom
                },
                on: {
                    dragover: t.dragover,
                    dragleave: t.dragleave,
                    drop: t.drop,
                    paste: t.paste
                }
            }, [t.showStartChatButton ? e("div", {
                staticClass: "tawk-max-footer-actions"
            }, [e("tawk-button", {
                staticClass: "tawk-max-footer-actions-button",
                attrs: {
                    isOutline: !0
                },
                on: {
                    click: t.startChat
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "mobile-send"
                }
            }), t._v(" " + t._s(t.$i18n("home", "chat_button")) + " ")], 1)], 1) : t._e(), t.showReturnToLiveChatBtton ? e("div", {
                staticClass: "tawk-max-footer-actions"
            }, [e("tawk-button", {
                staticClass: "tawk-max-footer-actions-button",
                attrs: {
                    isOutline: !0
                },
                on: {
                    click: t.returnToLiveChat
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "message"
                }
            }), t._v(" " + t._s(t.$i18n("chat", "return_to_live_chat")) + " ")], 1)], 1) : t._e(), e("tawk-branding", {
                staticClass: "tawk-text-center tawk-padding-small",
                attrs: {
                    whitelabel: t.whitelabel,
                    imageUrl: t.imageUrl,
                    tawkToUrl: t.branding.url
                }
            }), t.isDraggedOver ? e("div", {
                staticClass: "tawk-flex tawk-flex-column tawk-flex-center tawk-flex-middle",
                attrs: {
                    id: "tawk-dragover-container"
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "attach-file",
                    size: "xlarge"
                }
            }), e("p", [t._v(t._s(t.$i18n("rollover", "uploadFile")))])], 1) : t._e(), t.needConsent || "offline" === t.pageStatus || t.isPrechatEnabled && !t.prechatFormSubmitted || !t.isLiveChatFeatureEnabled ? t._e() : e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showChatInput,
                    expression: "showChatInput"
                }],
                ref: "tawk-chatinput-container",
                attrs: {
                    id: "tawk-chatinput-container"
                }
            }, [e("tawk-chat-input", {
                ref: "tawk-chatinput",
                attrs: {
                    placeholder: t.inputPlaceholder,
                    features: t.features
                },
                on: {
                    messageTyping: t.messageTyping,
                    sendMessage: t.sendMessage,
                    ratingClicked: t.ratingClicked,
                    focus: t.chatFocus,
                    blur: t.chatBlur
                }
            })], 1)], 1)
        }
        ), [], !1, null, null, null);
        e.a = n.exports
    },
    9348: function(t, e, a) {
        "use strict";
        var i = {
            name: "TawkSpinner"
        }
          , r = a("2877")
          , n = Object(r.a)(i, (function() {
            return this._self._c,
            this._m(0)
        }
        ), [function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "lds-spinner loader",
                attrs: {
                    role: "status"
                }
            }, [t("div", {
                staticClass: "spin spin-1"
            }), t("div", {
                staticClass: "spin spin-2"
            }), t("div", {
                staticClass: "spin spin-3"
            }), t("div", {
                staticClass: "spin spin-4"
            }), t("div", {
                staticClass: "spin spin-5"
            }), t("div", {
                staticClass: "spin spin-6"
            }), t("div", {
                staticClass: "spin spin-7"
            }), t("div", {
                staticClass: "spin spin-8"
            }), t("div", {
                staticClass: "spin spin-9"
            }), t("div", {
                staticClass: "spin spin-10"
            }), t("div", {
                staticClass: "spin spin-11"
            }), t("div", {
                staticClass: "spin spin-12"
            })])
        }
        ], !1, null, null, null);
        e.a = n.exports
    },
    "9ff9": function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a("2f62")
              , r = a("9f3e")
              , n = a("31dd")
              , s = a("dbd1")
              , o = a("f0b4")
              , c = a("38d6");
            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function u(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    a.push.apply(a, i)
                }
                return a
            }
            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(a), !0).forEach((function(e) {
                        m(t, e, a[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }
                    ))
                }
                return t
            }
            function m(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != l(t) || !t)
                            return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var i = a.call(t, e || "default");
                            if ("object" != l(i))
                                return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == l(e) ? e : e + ""
                }(e))in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
            }
            e.a = {
                name: "prechat-form",
                components: {
                    BaseFrame: r.a,
                    BaseHeader: n.a,
                    BaseBody: s.a,
                    HomeHeader: c.default,
                    HomeBody: o.a
                },
                data: function() {
                    return {
                        isDropdownOpen: !1,
                        isSubmitting: !1,
                        submissionError: !1,
                        submissionSuccess: !1,
                        headerClass: ""
                    }
                },
                computed: d({}, Object(i.c)({
                    states: "widget/states",
                    departments: "session/departments",
                    name: "visitor/name",
                    email: "visitor/getEmailValue",
                    pageStatus: "session/pageStatus"
                })),
                watch: {
                    pageStatus: function(t) {
                        "offline" === t && this.showOverlay(!1)
                    }
                },
                methods: d(d({}, Object(i.b)({
                    routerPush: "router/routerPush",
                    showOverlay: "overlay/showOverlay",
                    removeRoute: "router/removeRoute"
                })), {}, {
                    submitForm: function(e) {
                        var a = this;
                        e.hasError || (this.isSubmitting = !0,
                        this.submissionError = !1,
                        this.submissionSuccess = !1,
                        this.$store.commit("session/setIsNotValidEmail", null),
                        t.Tawk_Window.app.$socket.publish("notifyPrechat", e.formData, (function(i) {
                            var r = "";
                            if (a.isSubmitting = !1,
                            i)
                                return "InvalidArgument" === i.code && "email" === i.message ? (a.$store.commit("session/setIsNotValidEmail", "email"),
                                void a.$emit("update:isSubmitting", !1)) : void (a.submissionError = !0);
                            a.$store.commit("session/setPrechatSubmitted", !0),
                            t.Tawk_Window.jsApi.triggerApiHandlers("onPrechatSubmit", e.formData.questions),
                            a.$nextTick((function() {
                                if (e.formData.questions && e.formData.questions.length > 0)
                                    for (var i = 0, n = e.formData.questions.length; i < n; i++)
                                        r += "".concat(e.formData.questions[i].label, " : ").concat(e.formData.questions[i].answer),
                                        i !== n - 1 && (r += "\r\n");
                                r && t.Tawk_Window.chatManager.sendMessageToServer({
                                    message: r
                                }),
                                a.routerPush("chat"),
                                a.removeRoute("prechat"),
                                a.showOverlay(!1)
                            }
                            ))
                        }
                        )))
                    },
                    homeLoaded: function() {
                        var t = this;
                        setTimeout((function() {
                            t.$refs["tawk-chat-panel"] && t.$refs["tawk-chat-panel"].$scrollbar && t.$refs["tawk-chat-panel"].$scrollbar.update()
                        }
                        ), 500)
                    }
                }),
                mounted: function() {
                    setTimeout((function() {
                        t.Tawk_Window.eventBus.$emit("formOpened")
                    }
                    ), 50)
                },
                destroyed: function() {
                    t.Tawk_Window.eventBus.$emit("formClosed"),
                    this.$emit("homeLoaded")
                }
            }
        }
        ).call(this, a("c8ba"))
    },
    a7bf: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a("2f62")
              , r = a("f0b0")
              , n = a("3d78")
              , s = a("e49c");
            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function c(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    a.push.apply(a, i)
                }
                return a
            }
            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(a), !0).forEach((function(e) {
                        u(t, e, a[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }
                    ))
                }
                return t
            }
            function u(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != o(t) || !t)
                            return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var i = a.call(t, e || "default");
                            if ("object" != o(i))
                                return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == o(e) ? e : e + ""
                }(e))in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
            }
            e.a = {
                name: "HomeBody",
                mixins: [s.a],
                props: {
                    state: {
                        type: String,
                        default: "online"
                    },
                    overwriteSubmit: {
                        type: Boolean,
                        default: !1
                    },
                    isSubmitting: {
                        type: Boolean,
                        default: !1
                    }
                },
                components: {
                    TawkCard: r.TawkCard,
                    TawkIcon: r.TawkIcon,
                    TawkButton: r.TawkButton,
                    ContentCard: n.a,
                    Conversations: function() {
                        return a.e("chunk-5aa2faa9").then(a.bind(null, "30be"))
                    },
                    RestartChat: function() {
                        return a.e("chunk-3c7fc0e6").then(a.bind(null, "a3af"))
                    }
                },
                data: function() {
                    return {
                        submissionError: !1,
                        submissionSuccess: !1,
                        hasConversationCard: !1,
                        submittingValue: !1,
                        isSubmitButtonLock: !1
                    }
                },
                computed: l(l({}, Object(i.c)({
                    states: "widget/states",
                    chatOrder: "chat/chatOrder",
                    hasLiveChat: "widget/hasLiveChat",
                    hasChatEnded: "chat/hasChatEnded",
                    chatEndVersion: "chat/chatEndVersion",
                    pageStatus: "session/pageStatus"
                })), {}, {
                    body: function() {
                        return this.state && this.states[this.state] ? this.states[this.state].body : []
                    },
                    noPrechatForm: function() {
                        var t = !0;
                        if ("prechat" === this.state) {
                            for (var e = 0; e < this.body.length; e++)
                                if ("form" === this.body[e].type) {
                                    t = !1;
                                    break
                                }
                        } else
                            t = !1;
                        return t
                    },
                    isHistoryCardEnabled: function() {
                        for (var t = !1, e = 0; e < this.body.length; e++) {
                            if ("previous-conversations" === this.body[e].type) {
                                t = !0;
                                break
                            }
                        }
                        return t
                    }
                }),
                methods: l(l({}, Object(i.b)({
                    routerPush: "router/routerPush",
                    showOverlay: "overlay/showOverlay",
                    loadHistory: "history/load",
                    updateShowChat: "chat/updateShowChat"
                })), {}, {
                    submitForm: function(e) {
                        var a = this;
                        if (!e.hasError) {
                            if (this.submittingValue = !0,
                            this.$emit("update:isSubmitting", this.submittingValue),
                            this.submissionError = !1,
                            this.submissionSuccess = !1,
                            this.$store.commit("session/setIsNotValidEmail", null),
                            this.overwriteSubmit)
                                return this.$emit("submitForm", e);
                            e.formData.submittedFrom = window.location.href,
                            t.Tawk_Window.app.$socket.publish("notifyOfflineMessage", e.formData, (function(i) {
                                if (a.submittingValue = !1,
                                a.$emit("update:isSubmitting", a.submittingValue),
                                a.isSubmitButtonLock = !0,
                                a.$emit("update:isSubmitButtonLock", a.isSubmitButtonLock),
                                i)
                                    return "InvalidArgument" === i.code && "email" === i.message ? void a.$store.commit("session/setIsNotValidEmail", "email") : (a.isSubmitButtonLock = !1,
                                    a.$emit("update:isSubmitButtonLock", a.isSubmitButtonLock),
                                    void (a.submissionError = !0));
                                setTimeout((function() {
                                    a.isSubmitButtonLock = !1,
                                    a.$emit("update:isSubmitButtonLock", a.isSubmitButtonLock)
                                }
                                ), 3e4),
                                a.routerPush("offline-success"),
                                a.showOverlay(!0),
                                a.$store.dispatch("visitor/updateVisitorInformation", {
                                    n: e.formData.name,
                                    e: e.formData.email
                                }),
                                t.Tawk_Window.jsApi.triggerApiHandlers("onOfflineSubmit", e.formData)
                            }
                            ))
                        }
                    }
                })
            }
        }
        ).call(this, a("c8ba"))
    },
    b6e1: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a("2f62")
              , r = a("38d6")
              , n = a("f0b4")
              , s = a("9f3e")
              , o = a("31dd")
              , c = a("dbd1");
            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function u(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    a.push.apply(a, i)
                }
                return a
            }
            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(a), !0).forEach((function(e) {
                        m(t, e, a[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }
                    ))
                }
                return t
            }
            function m(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != l(t) || !t)
                            return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var i = a.call(t, e || "default");
                            if ("object" != l(i))
                                return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == l(e) ? e : e + ""
                }(e))in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
            }
            e.a = {
                name: "Home",
                components: {
                    BaseFrame: s.a,
                    BaseHeader: o.a,
                    BaseBody: c.a,
                    HomeHeader: r.default,
                    HomeBody: n.a,
                    ConsentForm: function() {
                        return a.e("chunk-01a3cd42").then(a.bind(null, "9114"))
                    }
                },
                props: {
                    isVisible: {
                        type: Boolean,
                        default: !0
                    }
                },
                computed: d({}, Object(i.c)({
                    states: "widget/states",
                    pageStatus: "session/pageStatus",
                    hasChatStarted: "chat/hasChatStarted",
                    prechatFormSubmitted: "session/prechatFormSubmitted",
                    needConsent: "session/needConsent"
                })),
                watch: {
                    pageStatus: function(e) {
                        this.homeLoaded(),
                        "offline" === e ? t.Tawk_Window.eventBus.$emit("formOpened") : t.Tawk_Window.eventBus.$emit("formClosed"),
                        this.$refs["tawk-chat-panel"].scrollTop = 0
                    },
                    isVisible: function() {
                        for (var t = this.$refs["tawk-main-panel"].querySelectorAll(".tawk-video-el"), e = 0; e < t.length; e++) {
                            var a = t[e];
                            "about:blank" !== a.src ? a.src = "about:blank" : a.getAttribute("data-src") && (a.src = a.getAttribute("data-src"))
                        }
                    }
                },
                data: function() {
                    return {
                        headerClass: ""
                    }
                },
                methods: d(d({}, Object(i.b)({
                    routerPush: "router/routerPush"
                })), {}, {
                    homeLoaded: function() {
                        var t = this;
                        setTimeout((function() {
                            t.$refs["tawk-chat-panel"] && t.$refs["tawk-chat-panel"].$scrollbar && t.$refs["tawk-chat-panel"].$scrollbar.update()
                        }
                        ), 500)
                    }
                }),
                mounted: function() {
                    "offline" === this.pageStatus && t.Tawk_Window.eventBus.$emit("formOpened")
                },
                destroyed: function() {
                    t.Tawk_Window.eventBus.$emit("formClosed")
                }
            }
        }
        ).call(this, a("c8ba"))
    },
    d6a3: function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("f604").a
          , r = a("2877")
          , n = Object(r.a)(i, (function() {
            var t = this
              , e = t._self._c;
            return e("i-frame", {
                key: t.key,
                ref: "max-widget",
                attrs: {
                    width: t.iframe.width,
                    height: t.iframe.height,
                    cssLink: t.cssLink,
                    styleObject: t.styleObject,
                    classString: t.classString
                }
            }, [e("transition", {
                attrs: {
                    tag: "div",
                    name: "tawk-max-slide"
                }
            }, [e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isVisible,
                    expression: "isVisible"
                }]
            }, [t.initialized ? e("div", {
                staticClass: "tawk-max-container tawk-flex tawk-flex-column",
                class: [!t.isToolbarElementsVisible && "tawk-no-toolbar-elements"],
                style: {
                    borderRadius: t.borderRadius
                },
                on: {
                    click: t.widgetFocus,
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.widgetFocus.apply(null, arguments)
                    }
                }
            }, [e("toolbar", {
                ref: "main-toolbar",
                attrs: {
                    borderRadiusTop: t.borderRadiusTop,
                    showBackButton: t.showBackButton,
                    currentView: t.currentView,
                    showWebRtcButtons: !0,
                    showAgentAvatars: !0
                },
                on: {
                    showEndChat: function(e) {
                        t.showEndChat = !0
                    }
                }
            }), t.isWebrtcEnabled ? e("call-widget") : t._e(), e("tawk-overlay", {
                ref: "view-overlay",
                style: {
                    borderRadius: t.borderRadius
                },
                attrs: {
                    isOpen: t.isOverlayOpen,
                    title: t.currentView && t.currentView.title ? t.currentView.title() : "",
                    backTooltipText: t.$i18n("rollover", "back"),
                    headerClass: "tawk-custom-color"
                },
                on: {
                    goBack: t.handleOverlayBack
                }
            }, [e("div", {
                attrs: {
                    slot: "options"
                },
                slot: "options"
            }, [e("toolbar", {
                attrs: {
                    borderRadiusTop: t.borderRadiusTop,
                    currentView: t.currentView
                },
                on: {
                    showEndChat: function(e) {
                        t.showEndChat = !0
                    }
                }
            })], 1), e("div", {
                staticClass: "tawk-flex tawk-flex-column",
                staticStyle: {
                    height: "100%",
                    overflow: "hidden"
                }
            }, [e("div", {
                staticClass: "tawk-flex tawk-flex-column tawk-flex-1 tawk-custom-flex-1"
            }, [e("div", {
                staticClass: "tawk-router-view tawk-flex tawk-flex-1 tawk-custom-flex-1"
            }, [e("tawk-router-view", {
                ref: "router-view"
            })], 1), e("maximize-footer", {
                ref: "overlay-footer"
            })], 1)])]), t.isInactive ? e("inactive-overlay") : t._e(), t.showEndChat && !t.hasChatEnded ? e("end-chat", {
                on: {
                    cancelEnd: function(e) {
                        t.showEndChat = !1
                    }
                }
            }) : t._e(), e("div", {
                staticClass: "tawk-flex tawk-flex-column tawk-flex-1"
            }, [e("div", {
                staticClass: "tawk-router-view tawk-flex tawk-flex-1"
            }, [t.isLoaded ? t._e() : e("div", {
                staticClass: "tawk-flex tawk-flex-middle tawk-flex-center",
                style: {
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0,
                    position: "absolute"
                }
            }, [e("div", {
                staticClass: "tawk-spinner-loader",
                style: {
                    margin: "1px"
                }
            })]), e("transition", {
                attrs: {
                    name: "slide-fade",
                    mode: "out-in"
                }
            }, [!t.hasLiveChat || t.needConsent || !t.chatOrder && !t.hasChatStarted && t.hasHomeView ? t._e() : e("chat-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "chat" === t.currentRoute || "agents" === t.currentRoute,
                    expression: "currentRoute === 'chat' || currentRoute === 'agents'"
                }],
                ref: "chat-view"
            })], 1), e("transition", {
                attrs: {
                    name: "slide-fade",
                    mode: "out-in"
                }
            }, [t.hasLiveChat && !t.needConsent && t.isPrechatEnabled && t.isReady && !t.prechatFormSubmitted && ("prechat" === t.currentRoute || !t.hasHomeView || t.hasPrechatHistory && !t.prechatFormSubmitted) ? e("prechat-view", {
                ref: "prechat-view"
            }) : t._e()], 1), e("transition", {
                attrs: {
                    name: "slide-fade",
                    mode: "out-in"
                }
            }, [t.hasHomeView || t.needConsent ? e("home-view", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isHomeViewVisible,
                    expression: "isHomeViewVisible"
                }],
                ref: "home-view",
                attrs: {
                    isVisible: t.isHomeViewVisible && !t.isOverlayOpen
                }
            }) : t._e()], 1)], 1), e("maximize-footer", {
                ref: "main-footer"
            })], 1), e("transition", {
                attrs: {
                    name: "slide-fade"
                }
            }, [t.isReconnecting ? e("tawk-alert", {
                staticStyle: {
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                    width: "auto",
                    "z-index": "10"
                },
                attrs: {
                    title: t.$i18n("notifications", "reconnecting"),
                    status: "danger",
                    description: "",
                    icon: "error"
                }
            }) : t._e()], 1)], 1) : t._e()])])], 1)
        }
        ), [], !1, null, null, null);
        e.default = n.exports
    },
    e375: function(t, e, a) {
        "use strict";
        var i = {
            name: "progress-bar",
            props: {
                handle: {
                    type: String,
                    default: ""
                },
                fileName: {
                    type: String,
                    default: ""
                },
                fileSize: {
                    type: String,
                    default: ""
                },
                percentage: {
                    type: Number,
                    default: 0
                }
            },
            computed: {
                progressWidth: function() {
                    return "width : ".concat(this.percentage, "%")
                }
            },
            methods: {
                beautifyFilename: function(t, e) {
                    var a = t.lastIndexOf(".")
                      , i = t.substring(0, a)
                      , r = ".".concat(t.substring(a + 1));
                    return i.length > 7 && (r = i.substring(i.length - 3) + r,
                    i = i.substring(0, i.length - 3)),
                    '<span class="tawk-text-truncate">'.concat(i, '</span><span class="tawk-flex-none">').concat(r, '</span><span class="tawk-flex-none">&nbsp;(').concat(e, ")</span>")
                }
            }
        }
          , r = a("2877")
          , n = Object(r.a)(i, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "file-upload-progress"
            }, [e("div", {
                staticClass: "tawk-flex tawk-flex-middle",
                domProps: {
                    innerHTML: t._s(t.beautifyFilename(t.fileName, t.fileSize))
                }
            }), e("div", {
                staticClass: "progress active tawk-margin-small-top"
            }, [e("div", {
                staticClass: "progress-bar",
                style: t.progressWidth,
                attrs: {
                    role: "progressbar"
                }
            })])])
        }
        ), [], !1, null, null, null);
        e.a = n.exports
    },
    e49c: function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return n
        }
        ));
        var i = a("f0b0")
          , r = a("7f46")
          , n = {
            methods: {
                setError: function(t, e) {
                    e.isError = t
                },
                setValue: function(t, e) {
                    e.value = t;
                    var a = e.value || "";
                    "string" == typeof t && (a = t.trim()),
                    ("text" === e.type || "phone" === e.type || "textarea" === e.type) && e.isRequired && a.length > 0 && (e.invalidType = "")
                },
                setInvalidType: function(t, e) {
                    e.invalidTypeValue = t
                },
                formatFields: function(t) {
                    for (var e = [], a = 0; a < t.length; a++) {
                        var r = t[a]
                          , n = {}
                          , s = "";
                        if (r.required && (n.required = this.$i18n("form", "RequiredErrorMessage")),
                        r.context && "email" === r.context && (n.email = this.$i18n("form", "EmailErrorMessage"),
                        s = this.email),
                        r.context && "name" === r.context && (s = this.name),
                        r.context && "phone" === r.context && (n.phone = this.$i18n("form", "PhoneErrorMessage")),
                        "department" === r.context && this.departments.length) {
                            for (var o = {
                                online: [],
                                offline: []
                            }, c = 0; c < this.departments.length; c++) {
                                var l = this.departments[c];
                                "online" === l.st ? o.online.push({
                                    status: l.st,
                                    text: l.n,
                                    rawText: l.n,
                                    value: l.did
                                }) : o.offline.push({
                                    status: l.st,
                                    text: l.n,
                                    rawText: l.n,
                                    value: l.did
                                })
                            }
                            for (var u in o)
                                o[u].sort((function(t, e) {
                                    var a = t.text.toUpperCase()
                                      , i = e.text.toUpperCase();
                                    return a < i ? -1 : a > i ? 1 : 0
                                }
                                ));
                            e.push({
                                label: r.label,
                                type: r.context,
                                isRequired: r.required,
                                selections: o || [],
                                id: i.Helper.generateUUID(),
                                errorMessage: n,
                                isError: !1,
                                invalidTypeValue: ""
                            })
                        } else
                            e.push({
                                label: r.label,
                                type: r.context || r.type,
                                isRequired: r.required,
                                selections: r.options ? this.formatOptions(r.options, r.type) : null,
                                value: "checkbox" === r.type ? [] : s,
                                id: i.Helper.generateUUID(),
                                errorMessage: n,
                                invalidTypeValue: ""
                            })
                    }
                    return e
                },
                formatOptions: function(t, e) {
                    var a, r = [];
                    "radio" === e && (a = i.Helper.generateUUID());
                    for (var n = 0; n < t.length; n++) {
                        var s = {
                            value: t[n],
                            label: t[n],
                            id: i.Helper.generateUUID(),
                            name: a
                        };
                        r.push(s)
                    }
                    return r
                },
                formatFormData: function() {
                    var t = {}
                      , e = !1;
                    t.questions = [];
                    for (var a = 0; a < this.formFields.length; a++) {
                        var i = this.formFields[a]
                          , n = i.value || "";
                        if ("string" == typeof n && (n = n.trim()),
                        "name" === i.type)
                            t.name = n;
                        else if ("email" === i.type)
                            t.email = n;
                        else if ("phone" === i.type && n.length > 0)
                            n = n.replace(/[- )(]/g, ""),
                            t.phone = n;
                        else if ("department" === i.type) {
                            if (i.isRequired && !this.selectedDepartment) {
                                if (!i.selections || !i.selections.online.length && !i.selections.offline.length)
                                    continue;
                                i.isError = !0,
                                e = !0;
                                continue
                            }
                            if (i.isError = !1,
                            !this.selectedDepartment)
                                continue;
                            t.department = this.selectedDepartment.value,
                            t.questions.push({
                                label: r.a.rawDecode(i.label),
                                answer: r.a.rawDecode(this.selectedDepartment.rawText)
                            })
                        }
                        i.isRequired && 0 === n.length && "department" !== i.type && (this.$refs[i.id] && this.$refs[i.id].length && this.$refs[i.id][0] && this.$refs[i.id][0].validate && this.$refs[i.id][0].validate(),
                        e = !0),
                        i.isError ? e = !0 : n && n.length && ("string" == typeof n ? t.questions.push({
                            label: r.a.rawDecode(i.label),
                            answer: n
                        }) : t.questions.push({
                            label: r.a.rawDecode(i.label),
                            answer: n.join(", ")
                        }))
                    }
                    return {
                        formData: t,
                        hasError: e
                    }
                }
            }
        }
    },
    f0b4: function(t, e, a) {
        "use strict";
        var i = a("a7bf").a
          , r = a("2877")
          , n = Object(r.a)(i, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "tawk-form-width-100 tawk-flex tawk-flex-column"
            }, [t.hasChatEnded && "prechat" !== t.state && "offline" !== t.state && t.chatEndVersion ? e("div", {
                staticClass: "card-container"
            }, [e("restart-chat")], 1) : t._e(), !t.isHistoryCardEnabled && t.chatOrder && t.hasLiveChat && "offline" !== t.pageStatus && "prechat" !== t.state ? e("div", {
                staticClass: "card-container tawk-flex-first"
            }, [e("tawk-card", {
                staticClass: "tawk-home-kb-card",
                attrs: {
                    color: "inverse",
                    size: "xsmall"
                }
            }, [e("conversations", {
                attrs: {
                    historyEnabled: t.isHistoryCardEnabled
                }
            })], 1)], 1) : t._e(), t._l(t.body, (function(a, i) {
                return e("content-card", {
                    key: i,
                    attrs: {
                        card: a,
                        isSubmitting: t.submittingValue,
                        isSubmitButtonLock: t.isSubmitButtonLock,
                        submissionError: t.submissionError,
                        body: t.body,
                        state: t.state,
                        hasConversationCard: t.hasConversationCard
                    },
                    on: {
                        "update:isSubmitting": function(e) {
                            t.submittingValue = e
                        },
                        "update:is-submitting": function(e) {
                            t.submittingValue = e
                        },
                        "update:isSubmitButtonLock": function(e) {
                            t.isSubmitButtonLock = e
                        },
                        "update:is-submit-button-lock": function(e) {
                            t.isSubmitButtonLock = e
                        },
                        "update:hasConversationCard": function(e) {
                            t.hasConversationCard = e
                        },
                        "update:has-conversation-card": function(e) {
                            t.hasConversationCard = e
                        },
                        submitForm: t.submitForm,
                        contentCardLoaded: function(e) {
                            return t.$emit("homeLoaded")
                        }
                    }
                })
            }
            )), t.noPrechatForm ? e("div", {
                staticClass: "card-container"
            }, [e("tawk-card", {
                staticClass: "tawk-box-shadow-xsmall",
                attrs: {
                    color: "inverse",
                    size: "small"
                }
            }, [e("tawk-button", {
                staticClass: "tawk-form-width-100 tawk-button-hover tawk-custom-color tawk-custom-border-color",
                on: {
                    click: function(e) {
                        return t.submitForm({
                            formData: {}
                        })
                    }
                }
            }, [e("tawk-icon", {
                attrs: {
                    type: "mobile-send"
                }
            }), t._v(" " + t._s(t.$i18n("form", "StartChatButton")) + " ")], 1)], 1)], 1) : t._e()], 2)
        }
        ), [], !1, null, null, null);
        e.a = n.exports
    },
    f187: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a("2f62")
              , r = a("f0b0")
              , n = a("7f46");
            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function o(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    a.push.apply(a, i)
                }
                return a
            }
            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(a), !0).forEach((function(e) {
                        l(t, e, a[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }
                    ))
                }
                return t
            }
            function l(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != s(t) || !t)
                            return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var i = a.call(t, e || "default");
                            if ("object" != s(i))
                                return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == s(e) ? e : e + ""
                }(e))in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
            }
            e.a = {
                name: "TawkMaximizeFooter",
                components: {
                    TawkChatInput: r.TawkChatInput,
                    TawkBranding: r.TawkBranding,
                    TawkIcon: r.TawkIcon,
                    TawkButton: r.TawkButton
                },
                data: function() {
                    return {
                        isDraggedOver: !1,
                        imageUrl: "".concat("https://embed.tawk.to/_s/v4/assets", "/images/Tawky_16x16.svg"),
                        powerImageURL: "".concat("https://embed.tawk.to/_s/v4/assets", "/images/power.svg")
                    }
                },
                computed: c(c({}, Object(i.c)({
                    isWindowed: "widget/isWindowed",
                    mobileBrowserName: "browserData/mobileBrowserName",
                    isEmbedded: "widget/isEmbedded",
                    hasLiveChat: "widget/hasLiveChat",
                    branding: "widget/branding",
                    needConsent: "session/needConsent",
                    pageStatus: "session/pageStatus",
                    prechatFormSubmitted: "session/prechatFormSubmitted",
                    isPrechatEnabled: "widget/isPrechatEnabled",
                    getHistory: "router/getHistory",
                    currentView: "router/getCurrentView",
                    features: "widget/features",
                    states: "widget/states",
                    hasChatStarted: "chat/hasChatStarted",
                    hasChatEnded: "chat/hasChatEnded"
                })), {}, {
                    borderRadiusBottom: function() {
                        return this.isWindowed || this.mobileBrowserName || this.isEmbedded ? "0px" : this.isRoundWidget ? "0 0 5px 5px" : "0px"
                    },
                    whitelabel: function() {
                        if (this.branding.whitelabeled) {
                            var t = n.a.markdownToHtml(this.branding.text);
                            return t && "Chat U+26A1 by <b>tawk.to</b>" === t && (t = t.replace("U+26A1", '<img src="'.concat(this.powerImageURL, '" style="max-width: 8px;" />'))),
                            t && ":tawky: Add free <b>live chat</b> to your site" === t && (t = t.replace(":tawky:", '<img src="'.concat(this.imageUrl, '" />'))),
                            {
                                label: t,
                                url: this.branding.url,
                                textColor: this.branding.textColor
                            }
                        }
                    },
                    isChatInputBottom: function() {
                        var t = !1
                          , e = this.states[this.pageStatus];
                        return e && e.body.length && (t = "chat" === e.body[e.body.length - 1].type),
                        t
                    },
                    isLiveChatFeatureEnabled: function() {
                        return !!(this.hasLiveChat || this.hasChatStarted && this.agentsCount > 0)
                    },
                    inputPlaceholder: function() {
                        var t, e = this.states[this.pageStatus];
                        if (e && e.body && e.body.length)
                            for (var a = 0; a < e.body.length; a++) {
                                var i = e.body[a];
                                if ("chat" === i.type) {
                                    t = i.content.inputPlaceholder;
                                    break
                                }
                            }
                        return t
                    },
                    mainFooterClasses: function() {
                        return ["tawk-card", "tawk-card-inverse", "tawk-card-xsmall", "tawk-footer", "tawk-flex-none", this.isDraggedOver ? "has-dragover" : ""]
                    },
                    showChatInput: function() {
                        return this.currentView && ("/" === this.currentView.path && (this.hasChatStarted || this.isChatInputBottom) || "chat" === this.currentView.path)
                    },
                    showStartChatButton: function() {
                        return this.hasLiveChat && "history-chat" === this.currentView.path && (!this.hasChatStarted || this.hasChatEnded)
                    },
                    showReturnToLiveChatBtton: function() {
                        return this.hasLiveChat && "history-chat" === this.currentView.path && this.hasChatStarted && !this.hasChatEnded
                    }
                }),
                methods: c(c({}, Object(i.b)({
                    routerPush: "router/routerPush",
                    showOverlay: "overlay/showOverlay",
                    clearHistory: "router/clearHistory"
                })), {}, {
                    dragover: function(t) {
                        t.preventDefault(),
                        this.features.upload && (this.isDraggedOver = !0)
                    },
                    dragleave: function(t) {
                        t.preventDefault(),
                        this.features.upload && (t.currentTarget.contains(t.relatedTarget) || (this.isDraggedOver = !1))
                    },
                    drop: function(t) {
                        this.hasLiveChat && this.features.upload && (t.preventDefault(),
                        this.isDraggedOver = !1,
                        this.$refs["tawk-chatinput"] && this.$refs["tawk-chatinput"].$refs && this.$refs["tawk-chatinput"].$refs.fileupload && (this.$refs["tawk-chatinput"].$refs.fileupload.files = t.dataTransfer.files,
                        this.$refs["tawk-chatinput"].onFileUpload()))
                    },
                    messageTyping: function(e) {
                        t.Tawk_Window.chatManager.sendMessagePreview(e)
                    },
                    sendMessage: function(e) {
                        var a = e.message
                          , i = e.attachments
                          , r = void 0 === i ? [] : i;
                        t.Tawk_Window.chatManager.sendMessage({
                            message: a,
                            attachments: r
                        }),
                        this.routerPush("chat"),
                        this.showOverlay(!1)
                    },
                    ratingClicked: function(e) {
                        t.Tawk_Window.chatManager.changeRating(e),
                        this.routerPush("chat"),
                        this.showOverlay(!1)
                    },
                    chatFocus: function() {
                        this.$refs["main-footer"].style.boxShadow = "0px -2px 8px rgba(0,0,0,.1)"
                    },
                    chatBlur: function() {
                        this.$refs["main-footer"].style.boxShadow = "0 0 0 transparent"
                    },
                    paste: function(t) {
                        var e, a = (t.originalEvent || t).clipboardData;
                        a && ((e = a.files).length && !this.features.uploads || e && e.length && (this.$refs["tawk-chatinput"].$refs.fileupload.files = e,
                        this.$refs["tawk-chatinput"].onFileUpload()))
                    },
                    startChat: function() {
                        this.showOverlay(!1),
                        this.clearHistory(),
                        this.isPrechatEnabled && !this.prechatFormSubmitted ? this.routerPush("prechat") : this.routerPush("chat")
                    },
                    returnToLiveChat: function() {
                        this.showOverlay(!1),
                        this.clearHistory(),
                        this.routerPush("chat")
                    },
                    autoFocusChatInput: function() {
                        this.$refs["tawk-chatinput"].$refs.chatinput.focus()
                    }
                }),
                watch: {
                    currentView: function(t) {
                        "chat" == t.path && this.autoFocusChatInput()
                    },
                    hasChatStarted: function() {
                        var t = this;
                        setTimeout((function() {
                            t.autoFocusChatInput()
                        }
                        ), 500)
                    }
                }
            }
        }
        ).call(this, a("c8ba"))
    },
    f2ef: function(t, e, a) {
        "use strict";
        var i = a("b6e1").a
          , r = a("2877")
          , n = Object(r.a)(i, (function() {
            var t = this
              , e = t._self._c;
            return e("base-frame", {
                staticClass: "tawk-home-view tawk-custom-flex-1"
            }, [e("base-header", {
                ref: "tawk-base-header",
                class: t.headerClass
            }, [t.needConsent ? t._e() : e("home-header", {
                ref: "tawk-home-header",
                attrs: {
                    state: t.pageStatus
                }
            })], 1), e("base-body", {
                ref: "tawk-home-body"
            }, [t.needConsent ? e("consent-form") : e("home-body", {
                attrs: {
                    state: t.pageStatus
                },
                on: {
                    homeLoaded: t.homeLoaded
                }
            })], 1)], 1)
        }
        ), [], !1, null, null, null);
        e.a = n.exports
    },
    f604: function(t, e, a) {
        "use strict";
        (function(t) {
            var i = a("2f62")
              , r = a("f0b0")
              , n = a("5a60")
              , s = a("5688")
              , o = a("7ea7")
              , c = a("f2ef")
              , l = a("3558")
              , u = a("411f")
              , d = a("87dd");
            function m(t) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function h(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    a.push.apply(a, i)
                }
                return a
            }
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(a), !0).forEach((function(e) {
                        p(t, e, a[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : h(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }
                    ))
                }
                return t
            }
            function p(t, e, a) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != m(t) || !t)
                            return t;
                        var a = t[Symbol.toPrimitive];
                        if (void 0 !== a) {
                            var i = a.call(t, e || "default");
                            if ("object" != m(i))
                                return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == m(e) ? e : e + ""
                }(e))in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a,
                t
            }
            e.a = {
                name: "MaximizeWidget",
                components: {
                    IFrame: n.a,
                    CallWidget: function() {
                        return a.e("chunk-495d98f9").then(a.bind(null, "bcae"))
                    },
                    EndChat: function() {
                        return a.e("chunk-2d0e982e").then(a.bind(null, "8e9d"))
                    },
                    InactiveOverlay: function() {
                        return a.e("chunk-2d0af2da").then(a.bind(null, "0ce6"))
                    },
                    Toolbar: s.a,
                    TawkAlert: r.TawkAlert,
                    TawkOverlay: r.TawkOverlay,
                    HomeView: c.a,
                    ChatView: l.a,
                    MaximizeFooter: o.a,
                    PrechatView: u.a
                },
                mixins: [d.a],
                data: function() {
                    return {
                        cssLink: "".concat("https://embed.tawk.to/_s/v4/app/67354992019", "/css/max-widget.css"),
                        classString: "",
                        showEndChat: !1,
                        noZoomMetaTag: null,
                        resizeHeightTo: null,
                        formIsOpen: !1,
                        isDraggedOver: !1,
                        originalBodyStyle: null,
                        isLoaded: !1,
                        isChatStatus: {},
                        routeLoadedTimeout: null,
                        powerImageUrl: "".concat("https://embed.tawk.to/_s/v4/assets", "/images/power.svg"),
                        initialized: !1,
                        iframe: {
                            height: "",
                            width: ""
                        },
                        isVisible: !1,
                        key: r.Helper.generateUUID(),
                        showConnected: !1
                    }
                },
                computed: f(f({}, Object(i.c)({
                    maxDimension: "widget/maxDesktop",
                    minDesktop: "widget/minDesktop",
                    chatWindowState: "session/chatWindowState",
                    states: "widget/states",
                    pageStatus: "session/pageStatus",
                    isRoundWidget: "widget/isRoundWidget",
                    branding: "widget/branding",
                    features: "widget/features",
                    currentView: "router/getCurrentView",
                    activeProfiles: "chat/activeProfiles",
                    hasChatStarted: "chat/hasChatStarted",
                    prechatFormSubmitted: "session/prechatFormSubmitted",
                    isPrechatEnabled: "widget/isPrechatEnabled",
                    isWindowed: "widget/isWindowed",
                    mobileBrowserName: "browserData/mobileBrowserName",
                    isEmbedded: "widget/isEmbedded",
                    hasChatEnded: "chat/hasChatEnded",
                    needConsent: "session/needConsent",
                    isInactive: "session/isInactive",
                    isRight: "widget/isRight",
                    isBottom: "widget/isBottom",
                    isCenter: "widget/isCenter",
                    isOverlayOpen: "overlay/isOpen",
                    getHistory: "router/getHistory",
                    hasLiveChat: "widget/hasLiveChat",
                    webrtcOptions: "widget/webrtcOptions",
                    agentsCount: "chat/agentsCount",
                    currentRoute: "router/current",
                    isReconnecting: "session/isReconnecting",
                    chatOrder: "chat/chatOrder",
                    unreadMessageCount: "chat/unreadMessageCount",
                    desktopVisibility: "widget/desktopVisibility",
                    showMessagePreview: "widget/showMessagePreview",
                    firstIncoming: "chat/firstIncoming",
                    isReady: "socket/isReady",
                    isConnecting: "socket/isConnecting",
                    isIE: "browserData/isIE",
                    components: "widget/components",
                    onClick: "widget/onClick"
                })), {}, {
                    xOffset: function() {
                        return t.Tawk_Window.widgetSettings.xOffset()
                    },
                    yOffset: function() {
                        return t.Tawk_Window.widgetSettings.yOffset()
                    },
                    styleObject: function() {
                        var e, a = null === (e = t.Tawk_Window.jsApi) || void 0 === e || null === (e = e.local_API) || void 0 === e || null === (e = e.customStyle) || void 0 === e ? void 0 : e.visibility, i = {
                            "border-radius:": "".concat(this.borderRadius, " !important;"),
                            "z-index:": "1000002 !important;",
                            "height:": "".concat(this.iframe.height, " !important;"),
                            "width:": "".concat(this.iframe.width, " !important;"),
                            "min-height:": "".concat(this.iframe.height, " !important;"),
                            "min-width:": "".concat(this.iframe.width, " !important;"),
                            "max-height:": "".concat(this.iframe.height, " !important;"),
                            "max-width:": "".concat(this.iframe.width, " !important;")
                        };
                        if (this.isWindowed || this.isEmbedded ? i["position:"] = "absolute !important;" : i["position:"] = "fixed !important;",
                        this.isWindowed || this.mobileBrowserName || this.isEmbedded) {
                            var r = 0
                              , n = 0
                              , s = 0
                              , o = 0;
                            this.mobileBrowserName && a && a.mobile && a.mobile.maximized && (a.mobile.maximized.bottomOffset && (r = a.mobile.maximized.bottomOffset),
                            a.mobile.maximized.topOffset && (o = a.mobile.maximized.topOffset),
                            a.mobile.maximized.leftOffset && (s = a.mobile.maximized.leftOffset),
                            a.mobile.maximized.rightOffset && (n = a.mobile.maximized.rightOffset),
                            i["height:"] = "calc(100% - ".concat(r + o, "px) !important;"),
                            i["min-height:"] = "calc(100% - ".concat(r + o, "px) !important;"),
                            i["max-height:"] = "calc(100% - ".concat(r + o, "px) !important;"),
                            i["width:"] = "calc(100% - ".concat(s + n, "px) !important;"),
                            i["min-width:"] = "calc(100% - ".concat(s + n, "px) !important;"),
                            i["max-width:"] = "calc(100% - ".concat(s + n, "px) !important;")),
                            i["bottom:"] = "".concat(r, "px !important;"),
                            i["right:"] = "".concat(n, "px !important;"),
                            i["left:"] = "".concat(s, "px !important;"),
                            i["top:"] = "".concat(o, "px !important;")
                        } else {
                            var c;
                            c = "slide" === this.onClick ? 0 : this.isCenter && this.isRoundWidget ? this.minDesktop.width + this.xOffset + 10 : this.xOffset - 10,
                            this.isRight ? i["right:"] = "".concat(c, "px !important;") : i["left:"] = "".concat(c, "px !important;"),
                            this.isRoundWidget && "slide" !== this.onClick ? this.isBottom ? i["bottom:"] = "".concat(this.minDesktop.height + this.yOffset + 10, "px !important;") : (i["top:"] = "".concat(this.minDesktop.height + this.yOffset + 10, "px !important;"),
                            i["bottom:"] = "auto !important;") : i["bottom:"] = "0px !important;"
                        }
                        return "max" === this.chatWindowState || this.isWindowed || this.isEmbedded ? i["display:"] = "block !important;" : i["display:"] = "none !important;",
                        f(f({}, this.genericStyles), i)
                    },
                    borderRadius: function() {
                        return this.isWindowed || this.mobileBrowserName || this.isEmbedded || "slide" === this.onClick ? "0px" : this.isRoundWidget ? "5px" : "5px 5px  0 0"
                    },
                    borderRadiusTop: function() {
                        return this.isWindowed || this.mobileBrowserName || this.isEmbedded || "slide" === this.onClick ? "0px" : "5px 5px 0 0"
                    },
                    hasHomeView: function() {
                        if (this.hasChatEnded)
                            return !0;
                        var t = this.states[this.pageStatus];
                        return !t || !t.body || 1 !== t.body.length || "chat" !== t.body[0].type
                    },
                    showBackButton: function() {
                        return this.currentView && ("chat" === this.currentView.path || "agents" === this.currentView.path || "prechat" === this.currentView.path) && this.hasHomeView && ("agents" === this.currentView.path || !this.isOverlayOpen)
                    },
                    isToolbarElementsVisible: function() {
                        return !(!this.mobileBrowserName && this.isRoundWidget && "/" === this.currentRoute && (void 0 === this.webrtcOptions || !this.webrtcOptions.enabled || this.isPrechatEnabled && !this.prechatFormSubmitted))
                    },
                    isChatInputBottom: function() {
                        var t = !1
                          , e = this.states[this.pageStatus];
                        return e && e.body.length && (t = "chat" === e.body[e.body.length - 1].type),
                        t
                    },
                    showChatInput: function() {
                        return this.currentView && ("/" === this.currentView.path && (this.hasChatStarted || this.isChatInputBottom) || "chat" === this.currentView.path)
                    },
                    hasPrechatHistory: function() {
                        if (0 === this.getHistory.length)
                            return !1;
                        var t = !1;
                        return this.getHistory.filter((function(e) {
                            "prechat" === e && (t = !0)
                        }
                        )),
                        t
                    },
                    isHomeViewVisible: function() {
                        return this.needConsent || "chat" !== this.currentRoute && "agents" !== this.currentRoute && "prechat" !== this.currentRoute && this.hasHomeView && (!this.hasPrechatHistory || this.prechatFormSubmitted)
                    },
                    isWebrtcEnabled: function() {
                        return this.components && this.components.webrtc
                    }
                }),
                watch: {
                    chatWindowState: function(t) {
                        var e = this;
                        "max" === t ? (this.classString = "open",
                        this.openView(),
                        this.formIsOpen && this.resizeFrame(),
                        this.isChatStatus["display:"] = "block !important;",
                        this.showMaxWidget()) : (this.classString = "closed",
                        this.noZoomMetaTag.content = "",
                        this.noZoomMetaTag.parentNode && this.noZoomMetaTag.parentNode.removeChild(this.noZoomMetaTag),
                        null !== this.originalBodyStyle && (document.body.style.cssText = this.originalBodyStyle),
                        this.mobileBrowserName ? this.isChatStatus["display:"] = "none !important;" : setTimeout((function() {
                            e.isChatStatus["display:"] = "none !important;"
                        }
                        ), 250),
                        this.hideMaxWidget())
                    },
                    pageStatus: function() {
                        "max" === this.chatWindowState && this.openView(),
                        "offline" === this.pageStatus && (this.showOverlay(!1),
                        this.routerPush("/"),
                        this.clearHistory())
                    },
                    unreadMessageCount: function(t) {
                        this.isWindowed || this.isEmbedded || (!this.mobileBrowserName && !this.desktopVisibility.show && t > 0 && "max" !== this.chatWindowState && this.updateChatWindowState("max"),
                        !this.firstIncoming || this.mobileBrowserName || this.showMessagePreview || "max" === this.chatWindowState || this.updateChatWindowState("max"))
                    },
                    isReady: function(t, e) {
                        var a = this;
                        t !== e && (this.showConnected = !0,
                        setTimeout((function() {
                            a.showConnected = !1
                        }
                        ), 1e3))
                    },
                    isReconnecting: function(t, e) {
                        var a = this;
                        t !== e && (this.showConnected = !0,
                        setTimeout((function() {
                            a.showConnected = !1
                        }
                        ), 1e3))
                    }
                },
                methods: f(f({}, Object(i.b)({
                    routerPush: "router/routerPush",
                    updateRoute: "router/updateRoute",
                    toggleWidget: "session/toggleWidget",
                    toggleLocalSound: "widget/toggleLocalSound",
                    showOverlay: "overlay/showOverlay",
                    routerBack: "router/routerBack",
                    clearHistory: "router/clearHistory",
                    updateChatWindowState: "session/updateChatWindowState",
                    toggleFocus: "widget/toggleFocus"
                })), {}, {
                    triggerClick: function() {
                        this.$store.dispatch("session/toggleWidget")
                    },
                    openView: function() {
                        if (this.initialized = !0,
                        this.showMaxWidget(),
                        this.mobileBrowserName) {
                            var e = document.querySelector("meta[name=viewport]") || document.querySelector("meta[name=VIEWPORT]");
                            t.Tawk_Window.isMobileOptimizedWebsite || null === this.noZoomMetaTag || (t.Tawk_Window.metaContent || "" !== this.noZoomMetaTag.content ? t.Tawk_Window.metaContent && !t.Tawk_Window.hasNoScale && e && e.setAttribute("content", t.Tawk_Window.metaContent + ", user-scalable=no") : (this.noZoomMetaTag.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
                            this.noZoomMetaTag.parentNode || document.getElementsByTagName("head")[0].appendChild(this.noZoomMetaTag)));
                            var a = document.body;
                            this.originalBodyStyle = a.style.cssText;
                            for (var i = ["height", "min-height", "max-height", "width", "min-width", "max-width"], r = 0; r < i.length; r++)
                                a.style.setProperty(i[r], "100%", "important");
                            a.style.setProperty("overflow", "hidden", "important"),
                            a.style.setProperty("position", "fixed", "important")
                        }
                        if (!this.currentView && this.hasHomeView && this.routerPush("/"),
                        "offline" !== this.pageStatus)
                            return this.hasHomeView || this.prechatFormSubmitted || !this.isPrechatEnabled ? void (this.currentView && ("/" !== this.currentRoute || this.hasHomeView) || (this.hasLiveChat && this.hasChatStarted || !this.hasHomeView ? (this.routerPush("chat"),
                            this.showOverlay(!1)) : this.showOverlay(!1))) : this.routerPush("prechat");
                        this.showOverlay(!1)
                    },
                    loaded: function() {
                        var e = this;
                        if (this.hasHomeView || (this.updateRoute({
                            path: "chat",
                            hasBack: !1
                        }),
                        this.updateRoute({
                            path: "prechat",
                            hasBack: !1
                        })),
                        this.isWindowed || this.isEmbedded || "max" === this.chatWindowState ? this.openView() : this.$refs["max-widget"].$el.style.setProperty("display", "none", "important"),
                        t.Tawk_Window.eventBus.$on("formOpened", (function() {
                            "max" === e.chatWindowState ? e.resizeFrame() : e.formIsOpen = !0
                        }
                        )),
                        t.Tawk_Window.eventBus.$on("formClosed", (function() {
                            e.resizeHeightTo = null,
                            e.formIsOpen = !1
                        }
                        )),
                        t.Tawk_Window.eventBus.$on("resetState", (function() {
                            e.$store.commit("router/changeCurrentView", "/"),
                            t.Tawk_Window.activityMonitor.setupMaxWidgetListeners()
                        }
                        )),
                        !this.isWindowed && !this.isEmbedded) {
                            var a, i, r = "", n = "tawkMaxOpen", s = "tawkMaxClose", o = this.$el.id;
                            this.isBottom ? (a = "transform:translate(0, 30px);",
                            i = "transform:translate(0, 0px);") : this.isCenter ? this.isRight ? (a = "transform:translate(30px,0);",
                            i = "transform:translate(0px,0);") : (a = "transform:translate(-30px,0);",
                            i = "transform:translate(0px,0);") : (a = "transform:translate(0, -30px);",
                            i = "transform:translate(0, 0px);");
                            var c, l = "{0%{opacity:0;" + a + ";}to{opacity:1;" + i + "}}";
                            r += "@keyframes " + n + l,
                            r += "@-moz-keyframes " + n + l,
                            r += "@-webkit-keyframes " + n + l,
                            r += "#" + o + ".open{animation : " + n + " .25s ease!important;}",
                            this.mobileBrowserName || (this.isRoundWidget,
                            r += "@keyframes " + s + (c = "{from{opacity: 1;" + i + ";}to{opacity: 0;" + a + ";}}"),
                            r += "@-moz-keyframes " + s + c,
                            r += "@-webkit-keyframes " + s + c,
                            r += "#" + o + ".closed{animation: " + s + " .25s ease!important}");
                            var u = document.head
                              , d = document.createDocumentFragment()
                              , m = document.createElement("style")
                              , h = document.createTextNode(r);
                            m.type = "text/css",
                            d.appendChild(m),
                            u.appendChild(d),
                            m.styleSheet ? m.styleSheet.cssText = h.nodeValue : m.appendChild(h)
                        }
                        t.Tawk_Window.activityMonitor.setupMaxWidgetListeners()
                    },
                    widgetFocus: function(e) {
                        t.Tawk_Window.eventBus.$emit("widgetOnFocus", e)
                    },
                    resizeFrame: function() {
                        var t = this
                          , e = 0
                          , a = 0
                          , i = 0;
                        this.isWindowed || this.mobileBrowserName || this.isEmbedded || setTimeout((function() {
                            if (!t.isOverlayOpen && t.$refs["main-toolbar"] && t.$refs["main-toolbar"].$el && (e = t.$refs["main-toolbar"].$el.offsetHeight),
                            t.isOverlayOpen && t.$refs["view-overlay"] && t.$refs["view-overlay"].$el.children[0] && (e = t.$refs["view-overlay"].$el.children[0].offsetHeight),
                            !t.isOverlayOpen && t.$refs["main-footer"] && (a = t.$refs["main-footer"].$el.offsetHeight),
                            t.isOverlayOpen && t.$refs["overlay-footer"] && (a = t.$refs["overlay-footer"].$el.offsetHeight),
                            t.$refs["router-view"] && t.$refs["router-view"].$children.length) {
                                var r = t.$refs["router-view"].$children.length ? t.$refs["router-view"].$children[0] : null;
                                r && r.$refs && r.$refs["tawk-inner-panel"] && (i = r.$refs["tawk-inner-panel"].offsetHeight)
                            }
                            if (!t.$refs["router-view"].$children.length) {
                                var n;
                                "chat" === t.currentRoute && t.$refs["chat-view"] ? n = t.$refs["chat-view"].$refs["tawk-inner-panel"] : "prechat" === t.currentRoute && t.$refs["prechat-view"] ? n = t.$refs["prechat-view"].$refs["tawk-inner-panel"] : t.$refs["home-view"] && (n = t.$refs["home-view"].$refs["tawk-inner-panel"]);
                                var s = n ? n.lastChild : null;
                                if (s && 0 === s.offsetHeight)
                                    return t.resizeHeightTo = null;
                                i = n ? n.offsetHeight : 0
                            }
                            return 0 === i ? t.resizeHeightTo = null : (i < 250 && (i = 250),
                            0 === i ? t.resizeHeightTo = null : void ((i += e + a) && t.maxDimension.height > i + 10 && (t.resizeHeightTo = i + 10)))
                        }
                        ), 300)
                    },
                    handleOverlayBack: function() {
                        this.routerBack(),
                        this.isDraggedOver = !1
                    },
                    checkRouteLoaded: function() {
                        var t = this;
                        clearTimeout(this.routeLoadedTimeout),
                        void 0 !== this.$refs["router-view"] ? this.isLoaded = !0 : this.routeLoadedTimeout = setTimeout((function() {
                            t.checkRouteLoaded()
                        }
                        ), 1e3)
                    },
                    handleFocus: function() {
                        this.toggleFocus(!0)
                    },
                    handleBlur: function() {
                        this.toggleFocus(!1)
                    },
                    calculateHeight: function() {
                        if (this.isWindowed || this.mobileBrowserName || this.isEmbedded || "slide" === this.onClick)
                            this.iframe.height = "100%";
                        else if (this.resizeHeightTo)
                            this.iframe.height = this.resizeHeightTo + "px";
                        else {
                            if (this.isRoundWidget) {
                                var t = this.minDesktop.height + this.yOffset + 10;
                                if (this.maxDimension.height + t > window.innerHeight)
                                    return void (this.iframe.height = "".concat(window.innerHeight - t - 10, "px"))
                            }
                            this.maxDimension.height >= window.innerHeight ? this.iframe.height = "".concat(window.innerHeight - 10, "px") : this.iframe.height = "".concat(this.maxDimension.height, "px")
                        }
                    },
                    calculateWidth: function() {
                        if (this.isWindowed || this.mobileBrowserName || this.isEmbedded)
                            this.iframe.width = "100%";
                        else {
                            if (this.isRoundWidget) {
                                var t = this.minDesktop.width + this.xOffset + 10;
                                if (this.maxDimension.width + t > window.innerWidth)
                                    return void (this.iframe.width = "".concat(window.innerWidth - t - 10, "px"))
                            }
                            this.maxDimension.width >= window.innerWidth ? this.iframe.width = "".concat(window.innerWidth - 10, "px") : this.iframe.width = this.maxDimension.width + "px"
                        }
                    },
                    calculateIframeSize: function() {
                        this.calculateHeight(),
                        this.calculateWidth()
                    },
                    showMaxWidget: function() {
                        var t = this;
                        this.$refs["max-widget"].$el.style.setProperty("display", "block", "important"),
                        setTimeout((function() {
                            t.isVisible = !0
                        }
                        ), 250)
                    },
                    hideMaxWidget: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.$refs["max-widget"].$el.style.setProperty("display", "block", "important"),
                            t.isVisible = !1
                        }
                        )),
                        setTimeout((function() {
                            t.$refs["max-widget"].$el.style.setProperty("display", "none", "important")
                        }
                        ), 250)
                    },
                    injectStyleNode: function() {
                        if (!this.mobileBrowserName && "slide" === this.onClick) {
                            var t = "-100%"
                              , e = this.$refs["max-widget"].$el.contentDocument
                              , a = document.createElement("style");
                            a.type = "text/css",
                            a.classList.add("tawk-dynamic-style"),
                            this.isRight && (t = "100%"),
                            a.appendChild(document.createTextNode("\n\t\t\t\t.tawk-max-slide-enter-active,\n\t\t\t\t.tawk-max-slide-leave-active {\n\t\t\t\t\ttransition: all 0.25s;\n\t\t\t\t\ttransition-timing-function: ease-in-out;\n\t\t\t\t}\n\n\t\t\t\t.tawk-max-slide-enter {\n\t\t\t\t\ttransform: translateX(".concat(t, ");\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\n\t\t\t\t.tawk-max-slide-enter-to {\n\t\t\t\t\ttransform: translateX(0%);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t.tawk-max-slide-leave {\n\t\t\t\t\ttransform: translateX(0%);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t.tawk-max-slide-leave-to {\n\t\t\t\t\ttransform: translateX(").concat(t, ");\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t"))),
                            e.head.appendChild(a)
                        }
                    },
                    removeStyleNode: function() {
                        var t = this.$refs["max-widget"].$el.contentDocument.querySelector(".tawk-dynamic-style");
                        t && t.parentNode.removeChild(t)
                    }
                }),
                mounted: function() {
                    var e = this;
                    this.calculateIframeSize(),
                    this.noZoomMetaTag = document.createElement("meta"),
                    this.noZoomMetaTag.name = "viewport",
                    this.checkRouteLoaded(),
                    this.$el.contentWindow.addEventListener("focus", this.handleFocus),
                    this.$el.contentWindow.addEventListener("blur", this.handleBlur),
                    window.addEventListener("resize", this.calculateIframeSize),
                    t.Tawk_Window.eventBus.$on("switchWidget", (function() {
                        e.key = r.Helper.generateUUID(),
                        e.calculateIframeSize(),
                        e.$nextTick((function() {
                            e.injectStyleNode()
                        }
                        ))
                    }
                    )),
                    t.Tawk_Window.eventBus.$on("forceUpdate", (function() {
                        e.initialized = !1,
                        e.$nextTick((function() {
                            e.initialized = !0
                        }
                        ))
                    }
                    )),
                    this.injectStyleNode(),
                    t.Tawk_Window.eventBus.$on("updateWidgetSettings", (function() {
                        e.removeStyleNode(),
                        e.$nextTick((function() {
                            e.injectStyleNode()
                        }
                        ))
                    }
                    ))
                },
                beforeDestroy: function() {
                    this.$el.contentWindow.removeEventListener("focus", this.handleFocus),
                    this.$el.contentWindow.removeEventListener("blur", this.handleBlur),
                    window.removeEventListener("resize", this.calculateIframeSize)
                }
            }
        }
        ).call(this, a("c8ba"))
    },
    fa12: function(t, e, a) {
        "use strict";
        var i = a("733e").a
          , r = a("2877")
          , n = Object(r.a)(i, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                ref: t.msg.messageId,
                staticClass: "tawk-message-bubble",
                attrs: {
                    id: "messageId-".concat(t.msg.messageId)
                }
            }, [t.msg.showBar && t.barMessageRerence ? e("div", {
                staticStyle: {
                    position: "relative"
                }
            }, [e("div", [e("span", {
                staticStyle: {
                    position: "absolute",
                    right: "0",
                    background: "#fff",
                    transform: "translate(0, -50%)",
                    padding: "0 10px"
                }
            }, [t._v(t._s(t.$i18n("chat", "newMessages")))]), e("hr")])]) : t._e(), "c" === t.msg.type ? [e("div", {
                staticClass: "tawk-flex tawk-flex-bottom",
                class: ["v" == t.msg.senderType ? "tawk-visitor-chat" : "tawk-agent-chat"],
                on: {
                    mouseenter: function(e) {
                        return t.$emit("onMouseEnter")
                    }
                }
            }, ["v" === t.msg.senderType ? e("div", {
                staticClass: "tawk-flex-none",
                staticStyle: {
                    "min-width": "40px"
                }
            }, [t.msg.time ? e("tawk-timeago", {
                staticClass: "tawk-time-display",
                attrs: {
                    datetime: t.msg.time,
                    isLive: !1,
                    timeOnly: !0
                }
            }) : t._e()], 1) : t._e(), e("div", {
                staticClass: "tawk-message-body tawk-margin-xsmall-left",
                class: ["v" !== t.msg.senderType ? "tawk-margin-xsmall-right" : ""]
            }, [t.msg.isPending ? e("tawk-spinner", {
                class: ["v" !== t.msg.senderType ? "lds-spinner-left" : ""]
            }) : t._e(), [t.msg.rawMessage.md && t.msg.rawMessage.md.rt ? e("div", {
                staticClass: "tawk-chat-rating"
            }, [e("tawk-icon", {
                attrs: {
                    type: t.msg.message,
                    size: "xxlarge"
                }
            })], 1) : t.msg.attchs || t.msg.message ? e("tawk-chat-bubble", {
                class: ["v" == t.msg.senderType ? "tawk-visitor-chat-bubble" : "tawk-agent-chat-bubble", "tawk-text-regular-4"],
                attrs: {
                    attachments: t.msg.attchs
                }
            }, [t.msg.message ? e("tawk-emoji", {
                attrs: {
                    emoji: t.parseMDToHTML(t.msg.message),
                    enabled: t.emojiEnabled
                }
            }) : t._e()], 1) : t._e(), "v" !== t.msg.senderType && t.msg.ticketFormRef ? e("div", {
                staticClass: "tawk-margin-small-top"
            }, [t.hasTicketFormSubmit || t.ticketForm.submissionSuccess ? [e("img", {
                staticStyle: {
                    "max-width": "200px"
                },
                attrs: {
                    src: t.getTicketImageUrl
                }
            }), e("p", {
                staticClass: "tawk-margin-small-top"
            }, [t._v(t._s(t.$i18n("form", "RequestSent")))])] : [e("tawk-input", {
                ref: "ticket-name-input",
                staticClass: "tawk-margin-small",
                attrs: {
                    label: t.$i18n("form", "name"),
                    isRequired: !0,
                    value: t.ticketForm.name,
                    invalidType: t.ticketForm.invalid.name,
                    errorMessage: {
                        required: t.$i18n("form", "RequiredErrorMessage")
                    }
                },
                on: {
                    "update:invalidType": function(e) {
                        return t.$set(t.ticketForm.invalid, "name", e)
                    },
                    "update:invalid-type": function(e) {
                        return t.$set(t.ticketForm.invalid, "name", e)
                    }
                },
                model: {
                    value: t.ticketForm.name,
                    callback: function(e) {
                        t.$set(t.ticketForm, "name", e)
                    },
                    expression: "ticketForm.name"
                }
            }), e("tawk-input", {
                ref: "ticket-email-input",
                staticClass: "tawk-margin-small",
                attrs: {
                    label: t.$i18n("form", "email"),
                    isRequired: !0,
                    value: t.ticketForm.email,
                    invalidType: t.ticketForm.invalid.email,
                    errorMessage: {
                        required: t.$i18n("form", "RequiredErrorMessage"),
                        email: t.$i18n("form", "EmailErrorMessage")
                    }
                },
                on: {
                    "update:invalidType": function(e) {
                        return t.$set(t.ticketForm.invalid, "email", e)
                    },
                    "update:invalid-type": function(e) {
                        return t.$set(t.ticketForm.invalid, "email", e)
                    }
                },
                model: {
                    value: t.ticketForm.email,
                    callback: function(e) {
                        t.$set(t.ticketForm, "email", e)
                    },
                    expression: "ticketForm.email"
                }
            }), e("tawk-input", {
                ref: "ticket-phone-input",
                staticClass: "tawk-margin-small",
                attrs: {
                    label: t.$i18n("form", "phone"),
                    isRequired: !1,
                    value: t.ticketForm.phone,
                    invalidType: t.ticketForm.invalid.phone,
                    errorMessage: {
                        required: t.$i18n("form", "RequiredErrorMessage")
                    }
                },
                on: {
                    "update:invalidType": function(e) {
                        return t.$set(t.ticketForm.invalid, "phone", e)
                    },
                    "update:invalid-type": function(e) {
                        return t.$set(t.ticketForm.invalid, "phone", e)
                    }
                },
                model: {
                    value: t.ticketForm.phone,
                    callback: function(e) {
                        t.$set(t.ticketForm, "phone", e)
                    },
                    expression: "ticketForm.phone"
                }
            }), e("tawk-input", {
                ref: "ticket-subject-input",
                staticClass: "tawk-margin-small",
                attrs: {
                    label: t.$i18n("form", "subject"),
                    isRequired: !0,
                    value: t.ticketForm.subject,
                    invalidType: t.ticketForm.invalid.subject,
                    errorMessage: {
                        required: t.$i18n("form", "RequiredErrorMessage")
                    }
                },
                on: {
                    "update:invalidType": function(e) {
                        return t.$set(t.ticketForm.invalid, "subject", e)
                    },
                    "update:invalid-type": function(e) {
                        return t.$set(t.ticketForm.invalid, "subject", e)
                    }
                },
                model: {
                    value: t.ticketForm.subject,
                    callback: function(e) {
                        t.$set(t.ticketForm, "subject", e)
                    },
                    expression: "ticketForm.subject"
                }
            }), e("tawk-textarea", {
                ref: "ticket-message-input",
                staticClass: "tawk-margin-small",
                attrs: {
                    label: t.$i18n("form", "message"),
                    isRequired: !0,
                    value: t.ticketForm.message,
                    invalidType: t.ticketForm.invalid.message,
                    errorMessage: {
                        required: t.$i18n("form", "RequiredErrorMessage")
                    }
                },
                on: {
                    "update:invalidType": function(e) {
                        return t.$set(t.ticketForm.invalid, "message", e)
                    },
                    "update:invalid-type": function(e) {
                        return t.$set(t.ticketForm.invalid, "message", e)
                    }
                },
                model: {
                    value: t.ticketForm.message,
                    callback: function(e) {
                        t.$set(t.ticketForm, "message", e)
                    },
                    expression: "ticketForm.message"
                }
            }), t.ticketForm.submissionError ? e("p", {
                staticClass: "tawk-margin-xsmall tawk-text-red-1 tawk-text-regular-1"
            }, [t._v(t._s(t.ticketForm.submissionError))]) : t._e(), e("tawk-button", {
                attrs: {
                    disabled: t.ticketForm.isSubmitting
                },
                on: {
                    click: function(e) {
                        return t.sendTicketForm()
                    }
                }
            }, [t.ticketForm.isSubmitting ? e("div", {
                staticClass: "tawk-flex tawk-flex-center"
            }, [e("div", {
                staticClass: "tawk-spinner-loader"
            })]) : [e("tawk-icon", {
                attrs: {
                    type: "mobile-send"
                }
            }), t._v(" " + t._s(t.$i18n("form", "SubmitButton")) + " ")]], 2)]], 2) : t._e(), "v" !== t.msg.senderType && t.msg.leadFormRef ? e("div", {
                staticClass: "tawk-margin-small-top"
            }, [t.hasLeadFormSubmit || t.leadForm.submissionSuccess ? [e("img", {
                staticStyle: {
                    "max-width": "200px"
                },
                attrs: {
                    src: t.getTicketImageUrl
                }
            }), e("p", {
                staticClass: "tawk-margin-small-top"
            }, [t._v(t._s(t.$i18n("form", "RequestSent")))])] : [e("tawk-input", {
                ref: "lead-name-input",
                staticClass: "tawk-margin-small",
                attrs: {
                    label: t.$i18n("form", "name"),
                    isRequired: !1,
                    value: t.leadForm.name,
                    invalidType: t.leadForm.invalid.name,
                    errorMessage: {
                        required: t.$i18n("form", "RequiredErrorMessage")
                    }
                },
                on: {
                    "update:invalidType": function(e) {
                        return t.$set(t.leadForm.invalid, "name", e)
                    },
                    "update:invalid-type": function(e) {
                        return t.$set(t.leadForm.invalid, "name", e)
                    }
                },
                model: {
                    value: t.leadForm.name,
                    callback: function(e) {
                        t.$set(t.leadForm, "name", e)
                    },
                    expression: "leadForm.name"
                }
            }), e("tawk-input", {
                ref: "lead-email-input",
                staticClass: "tawk-margin-small",
                attrs: {
                    label: t.$i18n("form", "email"),
                    isRequired: !1,
                    value: t.leadForm.email,
                    invalidType: t.leadForm.invalid.email,
                    errorMessage: {
                        required: t.$i18n("form", "RequiredErrorMessage"),
                        email: t.$i18n("form", "EmailErrorMessage")
                    }
                },
                on: {
                    "update:invalidType": function(e) {
                        return t.$set(t.leadForm.invalid, "email", e)
                    },
                    "update:invalid-type": function(e) {
                        return t.$set(t.leadForm.invalid, "email", e)
                    }
                },
                model: {
                    value: t.leadForm.email,
                    callback: function(e) {
                        t.$set(t.leadForm, "email", e)
                    },
                    expression: "leadForm.email"
                }
            }), e("tawk-input", {
                ref: "lead-phone-input",
                staticClass: "tawk-margin-small",
                attrs: {
                    label: t.$i18n("form", "phone"),
                    isRequired: !1,
                    value: t.leadForm.phone,
                    invalidType: t.leadForm.invalid.phone,
                    errorMessage: {
                        required: t.$i18n("form", "RequiredErrorMessage")
                    }
                },
                on: {
                    "update:invalidType": function(e) {
                        return t.$set(t.leadForm.invalid, "phone", e)
                    },
                    "update:invalid-type": function(e) {
                        return t.$set(t.leadForm.invalid, "phone", e)
                    }
                },
                model: {
                    value: t.leadForm.phone,
                    callback: function(e) {
                        t.$set(t.leadForm, "phone", e)
                    },
                    expression: "leadForm.phone"
                }
            }), e("tawk-textarea", {
                ref: "lead-message-input",
                staticClass: "tawk-margin-small",
                attrs: {
                    label: t.$i18n("form", "message"),
                    isRequired: !1,
                    value: t.leadForm.message,
                    invalidType: t.leadForm.invalid.message,
                    errorMessage: {
                        required: t.$i18n("form", "RequiredErrorMessage")
                    }
                },
                on: {
                    "update:invalidType": function(e) {
                        return t.$set(t.leadForm.invalid, "message", e)
                    },
                    "update:invalid-type": function(e) {
                        return t.$set(t.leadForm.invalid, "message", e)
                    }
                },
                model: {
                    value: t.leadForm.message,
                    callback: function(e) {
                        t.$set(t.leadForm, "message", e)
                    },
                    expression: "leadForm.message"
                }
            }), t.leadForm.submissionError ? e("p", {
                staticClass: "tawk-margin-xsmall tawk-text-red-1 tawk-text-regular-1"
            }, [t._v(t._s(t.leadForm.submissionError))]) : t._e(), e("tawk-button", {
                attrs: {
                    disabled: t.leadForm.isSubmitting
                },
                on: {
                    click: function(e) {
                        return t.sendLeadForm()
                    }
                }
            }, [t.leadForm.isSubmitting ? e("div", {
                staticClass: "tawk-flex tawk-flex-center"
            }, [e("div", {
                staticClass: "tawk-spinner-loader"
            })]) : [e("tawk-icon", {
                attrs: {
                    type: "mobile-send"
                }
            }), t._v(" " + t._s(t.$i18n("form", "SubmitButton")) + " ")]], 2)]], 2) : t._e()]], 2), "v" !== t.msg.senderType ? e("div", {
                staticClass: "tawk-flex-none",
                staticStyle: {
                    "min-width": "40px"
                }
            }, [t.msg.time ? e("tawk-timeago", {
                staticClass: "tawk-time-display",
                attrs: {
                    datetime: t.msg.time,
                    isLive: !1,
                    timeOnly: !0
                }
            }) : t._e()], 1) : t._e()]), t.msg.sendFailed ? e("div", {
                staticClass: "tawk-chat-resend"
            }, [e("p", [e("tawk-icon", {
                attrs: {
                    type: "error",
                    size: "small"
                }
            }), e("span", [t._v("Failed")])], 1), e("tawk-button", {
                attrs: {
                    isText: !0
                },
                on: {
                    click: function(e) {
                        return t.handleResendMessage(t.msg)
                    }
                }
            }, [t._v(" Resend ")])], 1) : t._e()] : t._e(), "v" === t.msg.senderType && "n" === t.msg.type ? e("div", [e("tawk-card", {
                attrs: {
                    color: "inverse",
                    size: "xsmall"
                }
            }, [e("tawk-alert", {
                attrs: {
                    title: t.msg.message,
                    description: "",
                    icon: "alert"
                }
            }, [e("tawk-timeago", {
                staticClass: "tawk-time-display",
                attrs: {
                    slot: "alert-description",
                    datetime: t.msg.time,
                    isLive: !1,
                    timeOnly: !0
                },
                slot: "alert-description"
            })], 1)], 1)], 1) : t._e(), e("div", {
                staticClass: "clearfix"
            })], 2)
        }
        ), [], !1, null, null, null);
        e.a = n.exports
    }
}]);
//# sourceMappingURL=twk-chunk-24d8db78.js.map

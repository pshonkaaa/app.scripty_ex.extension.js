! function(e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/", r(r.s = 1)
}({
    1: function(e, t, r) {
        e.exports = r("eY/z")
    },
    CckR: function(e, t, r) {
        "use strict";
        var n = r("TqZL");
        t.a = {
            browserClient: chrome,
            // browserClient: Object(n.a)(),
            selectors: {
                scriptButton: ".scriptButton",
                editButton: ".edit",
                addNewScriptButton: ".add-new-script",
                viewall: "#viewall",
                downloadScript: ".down-script"
            },
            scriptdb: "scriptdb",
            menuTitle: "Scripty",
            urls: {
                home: "https://scripty.abhisheksatre.com",
                edit: "https://scripty.abhisheksatre.com/#/edit",
                create: "https://scripty.abhisheksatre.com/#/create",
                welcome: "https://scripty.abhisheksatre.com/#/welcome",
                store: "https://scripty.abhisheksatre.com/#/store"
            },
            appDomains: ["localhost:8080", "scripty.abhisheksatre.com"],
            scriptStorageKey: "script_",
            triggerType: {
                automatic: "a",
                manual: "m"
            },
            triggerValue: {
                pageload: "pageload",
                beforeload: "beforeload"
            }
        }
    },
    R3Pk: function(e, t, r) {
        "use strict";
        var n = r("TqZL"),
            a = r("CckR"),
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }();
        var c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return o(e, null, [{
                key: "getScriptsForCurrentUrl",
                value: function(e, t) {
                    try {
                        new URL(e);
                    } catch(e) {
                        return false;
                    }
                    
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        type: a.a.triggerType.manual
                    };
                    if (!1 === Array.isArray(t)) return Object(n.c)("scriptArray is not an array"), [];
                    var i = new URL(e);
                    return Object(n.b)(i.origin) ? [] : t.filter(function(e) {
                        if (!0 === e.disable) return !1;
                        if (e.trigger.type !== r.type && "all" !== r.type) return !1;
                        if (r.type === a.a.triggerType.automatic && r.value !== e.trigger.value) return !1;
                        if ("all" === e.filter.value || "" === e.filter.value) return !0;
                        var t = i.href;
                        if ("url" === e.filter.identifier ? t = i.href : "path" === e.filter.identifier ? t = i.pathname : "host" === e.filter.identifier && (t = i.hostname), "contains" === e.filter.condition) return -1 !== t.indexOf(e.filter.value);
                        if ("equals" === e.filter.condition) return t == e.filter.value;
                        if ("regex" === e.filter.condition) {
                            var n = e.filter.value.replace(/.*\/([gimy]*)$/, "$1"),
                                o = e.filter.value.replace(new RegExp("^/(.*?)/" + n + "$"), "$1");
                            return new RegExp(o, n).test(t)
                        }
                        return !1
                    })
                }
            }, {
                key: "getScriptById",
                value: function(e, t) {
                    return e.find(function(e) {
                        return e.id == t
                    })
                }
            }, {
                key: "handleScriptRun",
                value: function(t, r, o) {
                    var c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    !1 === c && (c = e.getScriptById(t, r)), c && "object" === (void 0 === c ? "undefined" : i(c)) && a.a.browserClient.scripting.executeScript({
                        target: {
                            tabId: o,
                        },
                        args: [
                            c.script.value,
                        ],
                        func: function(code) {
                            eval(code);
                        },
                        world: 'MAIN',
                    }, function() {
                        var e = a.a.browserClient.runtime.lastError;
                        e && Object(n.c)("tab: " + o + " lastError: " + JSON.stringify(e))
                    })
                }
            }]), e
        }();
        t.a = c
    },
    TqZL: function(e, t, r) {
        "use strict";
        t.c = function() {}, t.a = function() {
            return chrome
        }, t.b = function(e) {
            if (-1 === e.indexOf("chrome://")) return !1;
            return !0
        }
    },
    "eY/z": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("CckR"),
            a = r("vnB8"),
            i = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }();
        var o = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.scriptList = []
                }
                return i(e, [{
                    key: "load",
                    value: function(e) {
                        var t = this;
                        n.a.browserClient.storage.local.get(null, function(r) {
                            var a = [];
                            for (var i in r) r.hasOwnProperty(i) && 0 === i.indexOf(n.a.scriptStorageKey) && a.push(r[i]);
                            t.scriptList = a, "function" == typeof e && e(a)
                        })
                    }
                }, {
                    key: "get",
                    value: function() {
                        return this.scriptList
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        var r = {};
                        r[e.id] = e, this._saveInStorage(r, t)
                    }
                }, {
                    key: "update",
                    value: function(e, t, r) {
                        var n = {};
                        t.id = e, n[e] = t, this._saveInStorage(n, r)
                    }
                }, {
                    key: "delete",
                    value: function(e, t) {
                        var r = this;
                        n.a.browserClient.storage.local.remove(e, function() {
                            r.load(function(e) {
                                n.a.browserClient.runtime.lastError ? t({
                                    success: !1
                                }) : t({
                                    success: !0,
                                    scripts: e
                                })
                            })
                        })
                    }
                }, {
                    key: "_saveInStorage",
                    value: function(e, t) {
                        var r = this;
                        n.a.browserClient.storage.local.set(e, function() {
                            r.load(function(e) {
                                n.a.browserClient.runtime.lastError ? t({
                                    success: !1
                                }) : t({
                                    success: !0,
                                    scripts: e
                                })
                            })
                        })
                    }
                }]), e
            }(),
            c = r("R3Pk"),
            u = r("TqZL"),
            s = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }();
        var l = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.storageApi = new o, this.storageApi.load(this.onStorageLoaded), this.initBrowserHooks()
            }
            return s(e, [{
                key: "onStorageLoaded",
                value: function() {}
            }, {
                key: "initBrowserHooks",
                value: function() {
                    var e = this;
                    n.a.browserClient.action.onClicked.addListener(function(e) {
                        n.a.browserClient.action.setPopup({
                            tabId: e.id,
                            popup: "popup.html"
                        })
                    }), n.a.browserClient.runtime.onMessage.addListener(function(t, r, n) {
                        if (t.action === a.a.getScriptListFromStorage) Object(u.c)("message from popup", t), n(e.storageApi.get());
                        else {
                            if (t.action === a.a.createScript) return Object(u.c)("createScript callback", t.id, t.data), e.storageApi.set(t.data, n), !0;
                            if (t.action === a.a.updateScript) return Object(u.c)("updateScript callback", t.id, t.data), e.storageApi.update(t.id, t.data, n), !0;
                            if (t.action === a.a.deleteScript) return Object(u.c)("DeleteScript callback", t.id), e.storageApi.delete(t.id, n), !0
                        }
                        return !1
                    }), n.a.browserClient.tabs.onActivated.addListener(function(t) {
                        n.a.browserClient.tabs.query({
                            active: !0,
                            currentWindow: !0
                        }, function(t) {
                            var r = t[0].url;
                            e.updateContextMenu(r)
                        })
                    }), n.a.browserClient.tabs.onUpdated.addListener(function(t, r, n) {
                        n.active && r.url && "complete" == r.status && (e.updateContextMenu(r.url), e.loadContentJs(t, r.url))
                    }), n.a.browserClient.contextMenus.onClicked.addListener(function(t, r) {
                        if (t.menuItemId === a.a.createScript) n.a.browserClient.tabs.create({
                            url: n.a.urls.create
                        });
                        else {
                            var i = e.storageApi.get(),
                                o = t.menuItemId.replace("menu-", "");
                            c.a.handleScriptRun(i, o, r.id)
                        }
                    }), n.a.browserClient.webNavigation.onCommitted.addListener(function(t) {
                        if (-1 === t.parentFrameId) {
                            Object(u.c)("Tab commited", t.tabId, t.parentFrameId, t.url);
                            var r = e.storageApi.get();
                            c.a.getScriptsForCurrentUrl(t.url, r, {
                                type: n.a.triggerType.automatic,
                                value: n.a.triggerValue.beforeload
                            }).forEach(function(e) {
                                c.a.handleScriptRun([], e.id, t.tabId, e)
                            })
                        }
                    }), n.a.browserClient.webNavigation.onDOMContentLoaded.addListener(function(t) {
                        -1 === t.parentFrameId && (e.updateContextMenu(t.url), e.loadContentJs(t.tabId, t.url), Object(u.c)("Tab dom loaded", t.tabId, t.parentFrameId, t.url))
                    }), n.a.browserClient.webNavigation.onCompleted.addListener(function(t) {
                        if (-1 === t.parentFrameId) {
                            Object(u.c)("Tab onCompleted", t.tabId, t.parentFrameId, t.url);
                            var r = e.storageApi.get();
                            c.a.getScriptsForCurrentUrl(t.url, r, {
                                type: n.a.triggerType.automatic,
                                value: n.a.triggerValue.pageload
                            }).forEach(function(e) {
                                c.a.handleScriptRun([], e.id, t.tabId, e)
                            })
                        }
                    }), n.a.browserClient.runtime.onInstalled.addListener(function() {
                        // return chrome.tabs.create({
                        //     url: "" + n.a.urls.welcome,
                        //     active: !0
                        // }), !1
                    })
                }
            }, {
                key: "updateContextMenu",
                value: function(e) {
                    Object(u.c)("meu update call");
                    var t = this.storageApi.get(),
                        r = c.a.getScriptsForCurrentUrl(e, t);
                    n.a.browserClient.contextMenus.removeAll(function() {
                        Object(u.b)(e) || (n.a.browserClient.contextMenus.create({
                            title: n.a.menuTitle,
                            id: "parent-scripty",
                            contexts: ["all"]
                        }), r.forEach(function(e) {
                            n.a.browserClient.contextMenus.create({
                                id: "menu-" + e.id,
                                title: e.title,
                                parentId: "parent-scripty",
                                contexts: ["all"]
                            })
                        }), n.a.browserClient.contextMenus.create({
                            type: "separator",
                            contexts: ["all"],
                            parentId: "parent-scripty"
                        }), n.a.browserClient.contextMenus.create({
                            title: "Create Script",
                            id: a.a.createScript,
                            parentId: "parent-scripty",
                            contexts: ["all"]
                        }))
                    })
                }
            }, {
                key: "loadContentJs",
                value: function(e, t) {
                    var r = new URL(t); - 1 !== n.a.appDomains.indexOf(r.host) && n.a.browserClient.tabs.sendMessage(e, {
                        action: a.a.pingContentScript
                    }, function(t) {
                        n.a.browserClient.runtime.lastError;
                        t || n.a.browserClient.scripting.executeScript({
                            target: {
                                tabId: e,
                            },
                            files: [
                                "content.js",
                            ],
                            // world: 'MAIN',
                        }, function() {
                            var t = n.a.browserClient.runtime.lastError;
                            t && Object(u.c)("tab: " + e + " lastError: " + JSON.stringify(t))
                        })
                    })
                }
            }]), e
        }();
        t.default = l;
        new l
    },
    vnB8: function(e, t, r) {
        "use strict";
        var n, a, i;
        t.a = (i = "createScript", (a = "createScript") in(n = {
            createScript: "createScript",
            updateScript: "updateScript",
            deleteScript: "deleteScript",
            getScriptListFromStorage: "getScriptListFromStorage",
            pingContentScript: "pingContentScript",
            scriptsLoadedFromCS: "scriptsLoadedFromCS",
            contentScriptLoaded: "contentScriptLoaded",
            scriptOperationDone: "scriptOperationDone"
        }) ? Object.defineProperty(n, a, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : n[a] = i, n)
    }
});
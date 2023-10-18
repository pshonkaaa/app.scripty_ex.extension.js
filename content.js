! function(t) {
    var e = {};

    function r(i) {
        if (e[i]) return e[i].exports;
        var a = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = t, r.c = e, r.d = function(t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "/", r(r.s = 0)
}({
    0: function(t, e, r) {
        r("xFsn"), t.exports = r("3CxF")
    },
    "3CxF": function(t, e) {},
    CckR: function(t, e, r) {
        "use strict";
        var i = r("TqZL");
        e.a = {
            browserClient: Object(i.a)(),
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
    TqZL: function(t, e, r) {
        "use strict";
        e.c = function() {}, e.a = function() {
            return chrome
        }, e.b = function(t) {
            if (-1 === t.indexOf("chrome://")) return !1;
            return !0
        }
    },
    vnB8: function(t, e, r) {
        "use strict";
        var i, a, n;
        e.a = (n = "createScript", (a = "createScript") in(i = {
            createScript: "createScript",
            updateScript: "updateScript",
            deleteScript: "deleteScript",
            getScriptListFromStorage: "getScriptListFromStorage",
            pingContentScript: "pingContentScript",
            scriptsLoadedFromCS: "scriptsLoadedFromCS",
            contentScriptLoaded: "contentScriptLoaded",
            scriptOperationDone: "scriptOperationDone"
        }) ? Object.defineProperty(i, a, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[a] = n, i)
    },
    xFsn: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = r("vnB8"),
            a = r("TqZL"),
            n = r("CckR");
        Object(a.c)("cs init"), document.documentElement.setAttribute("scripty", !0), n.a.browserClient.runtime.onMessage.addListener(function(t, e, r) {
            e.tab && e.tab.id;
            switch (t.action) {
                case i.a.pingContentScript:
                    r({
                        alive: !0
                    })
            }
        }), window.addEventListener("message", function(t) {
            if (t.source == window && t.data.type) try {
                t.data.type === i.a.getScriptListFromStorage ? n.a.browserClient.runtime.sendMessage({
                    action: i.a.getScriptListFromStorage
                }, function(t) {
                    document.dispatchEvent(new CustomEvent(i.a.scriptsLoadedFromCS, {
                        detail: {
                            scripts: t
                        }
                    }))
                }) : t.data.type === i.a.createScript ? n.a.browserClient.runtime.sendMessage({
                    action: i.a.createScript,
                    data: t.data.data
                }, function(e) {
                    n.a.browserClient.runtime.lastError;
                    Object(a.c)("create script response", e), e.opTitle = t.data.title, document.dispatchEvent(new CustomEvent(i.a.scriptOperationDone, {
                        detail: e
                    })), document.dispatchEvent(new CustomEvent(i.a.scriptsLoadedFromCS, {
                        detail: e
                    }))
                }) : t.data.type === i.a.updateScript ? n.a.browserClient.runtime.sendMessage({
                    action: i.a.updateScript,
                    data: t.data.data,
                    id: t.data.id
                }, function(e) {
                    n.a.browserClient.runtime.lastError;
                    Object(a.c)("update script response", e), e.opTitle = t.data.title, document.dispatchEvent(new CustomEvent(i.a.scriptOperationDone, {
                        detail: e
                    })), document.dispatchEvent(new CustomEvent(i.a.scriptsLoadedFromCS, {
                        detail: e
                    }))
                }) : t.data.type === i.a.deleteScript && n.a.browserClient.runtime.sendMessage({
                    action: i.a.deleteScript,
                    id: t.data.id
                }, function(t) {
                    n.a.browserClient.runtime.lastError;
                    Object(a.c)("delete script response", t), document.dispatchEvent(new CustomEvent(i.a.scriptsLoadedFromCS, {
                        detail: t
                    }))
                })
            } catch (t) {
                Object(a.c)(t)
            }
        }, !1), document.dispatchEvent(new CustomEvent(i.a.contentScriptLoaded, {
            detail: ""
        }))
    }
});
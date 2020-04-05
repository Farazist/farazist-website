/*!
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function (t) {
    t.en = Object.assign(t.en || {}, {
        a: "Cannot upload file:",
        b: "Image toolbar",
        c: "Table toolbar",
        d: "Bold",
        e: "Italic",
        f: "Underline",
        g: "Strikethrough",
        h: "Code",
        i: "Subscript",
        j: "Superscript",
        k: "Block quote",
        l: "Insert image or file",
        m: "Choose heading",
        n: "Heading",
        o: "image widget",
        p: "Full size image",
        q: "Side image",
        r: "Left aligned image",
        s: "Centered image",
        t: "Right aligned image",
        u: "Insert image",
        v: "Increase indent",
        w: "Decrease indent",
        x: "Numbered List",
        y: "Bulleted List",
        z: "Insert table",
        aa: "Header column",
        ab: "Insert column left",
        ac: "Insert column right",
        ad: "Delete column",
        ae: "Column",
        af: "Header row",
        ag: "Insert row below",
        ah: "Insert row above",
        ai: "Delete row",
        aj: "Row",
        ak: "Merge cell up",
        al: "Merge cell right",
        am: "Merge cell down",
        an: "Merge cell left",
        ao: "Split cell vertically",
        ap: "Split cell horizontally",
        aq: "Merge cells",
        ar: "Enter image caption",
        as: "Upload failed",
        at: "media widget",
        au: "Align left",
        av: "Align right",
        aw: "Align center",
        ax: "Justify",
        ay: "Text alignment",
        az: "Text alignment toolbar",
        ba: "Upload in progress",
        bb: "Widget toolbar",
        bc: "Insert media",
        bd: "The URL must not be empty.",
        be: "This media URL is not supported.",
        bf: "Horizontal line",
        bg: "Yellow marker",
        bh: "Green marker",
        bi: "Pink marker",
        bj: "Blue marker",
        bk: "Red pen",
        bl: "Green pen",
        bm: "Remove highlight",
        bn: "Highlight",
        bo: "Text highlight toolbar",
        bp: "Link",
        bq: "Could not obtain resized image URL.",
        br: "Selecting resized image failed",
        bs: "Could not insert image at the current position.",
        bt: "Inserting image failed",
        bu: "Change image text alternative",
        bv: "Dropdown toolbar",
        bw: "%0 of %1",
        bx: "Previous",
        by: "Next",
        bz: "Editor toolbar",
        ca: "Show more items",
        cb: "Rich Text Editor",
        cc: "Rich Text Editor, %0",
        cd: "Save",
        ce: "Cancel",
        cf: "Paste the media URL in the input.",
        cg: "Tip: Paste the URL into the content to embed faster.",
        ch: "Media URL",
        ci: "Unlink",
        cj: "Edit link",
        ck: "Open link in new tab",
        cl: "This link has no URL",
        cm: "Link URL",
        cn: "Text alternative",
        co: "Open in a new tab",
        cp: "Downloadable",
        cq: "Undo",
        cr: "Redo",
        cs: "Paragraph",
        ct: "Heading 1",
        cu: "Heading 2",
        cv: "Heading 3",
        cw: "Heading 4",
        cx: "Heading 5",
        cy: "Heading 6"
    })
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {})), function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClassicEditor = e() : t.ClassicEditor = e()
}(window, function () {
    return function (t) {
        var e = {};

        function i(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {i: n, l: !1, exports: {}};
            return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
        }

        return i.m = t, i.c = e, i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
        }, i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, i.t = function (t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var o in t) i.d(n, o, function (e) {
                return t[e]
            }.bind(null, o));
            return n
        }, i.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 103)
    }([function (t, e, i) {
        "use strict";
        i.d(e, "b", function () {
            return o
        }), i.d(e, "a", function () {
            return r
        });
        const n = "https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html";

        class o extends Error {
            constructor(t, e, i) {
                t = r(t), i && (t += " " + JSON.stringify(i)), super(t), this.name = "CKEditorError", this.context = e, this.data = i
            }

            is(t) {
                return "CKEditorError" === t
            }

            static rethrowUnexpectedError(t, e) {
                if (t.is && t.is("CKEditorError")) throw t;
                throw new o("unexpected-error", e, {originalError: {message: t.message, stack: t.stack, name: t.name}})
            }
        }

        function r(t) {
            const e = t.match(/^([^:]+):/);
            return e ? t + ` Read more: ${n}#error-${e[1]}\n` : t
        }
    }, function (t, e, i) {
        "use strict";
        var n = {}, o = function () {
            var t;
            return function () {
                return void 0 === t && (t = Boolean(window && document && document.all && !window.atob)), t
            }
        }(), r = function () {
            var t = {};
            return function (e) {
                if (void 0 === t[e]) {
                    var i = document.querySelector(e);
                    if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                        i = i.contentDocument.head
                    } catch (t) {
                        i = null
                    }
                    t[e] = i
                }
                return t[e]
            }
        }();

        function s(t, e) {
            for (var i = [], n = {}, o = 0; o < t.length; o++) {
                var r = t[o], s = e.base ? r[0] + e.base : r[0], a = {css: r[1], media: r[2], sourceMap: r[3]};
                n[s] ? n[s].parts.push(a) : i.push(n[s] = {id: s, parts: [a]})
            }
            return i
        }

        function a(t, e) {
            for (var i = 0; i < t.length; i++) {
                var o = t[i], r = n[o.id], s = 0;
                if (r) {
                    for (r.refs++; s < r.parts.length; s++) r.parts[s](o.parts[s]);
                    for (; s < o.parts.length; s++) r.parts.push(f(o.parts[s], e))
                } else {
                    for (var a = []; s < o.parts.length; s++) a.push(f(o.parts[s], e));
                    n[o.id] = {id: o.id, refs: 1, parts: a}
                }
            }
        }

        function c(t) {
            var e = document.createElement("style");
            if (void 0 === t.attributes.nonce) {
                var n = i.nc;
                n && (t.attributes.nonce = n)
            }
            if (Object.keys(t.attributes).forEach(function (i) {
                e.setAttribute(i, t.attributes[i])
            }), "function" == typeof t.insert) t.insert(e); else {
                var o = r(t.insert || "head");
                if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(e)
            }
            return e
        }

        var l = function () {
            var t = [];
            return function (e, i) {
                return t[e] = i, t.filter(Boolean).join("\n")
            }
        }();

        function d(t, e, i, n) {
            var o = i ? "" : n.css;
            if (t.styleSheet) t.styleSheet.cssText = l(e, o); else {
                var r = document.createTextNode(o), s = t.childNodes;
                s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(r, s[e]) : t.appendChild(r)
            }
        }

        var h = null, u = 0;

        function f(t, e) {
            var i, n, o;
            if (e.singleton) {
                var r = u++;
                i = h || (h = c(e)), n = d.bind(null, i, r, !1), o = d.bind(null, i, r, !0)
            } else i = c(e), n = function (t, e, i) {
                var n = i.css, o = i.media, r = i.sourceMap;
                if (o && t.setAttribute("media", o), r && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), t.styleSheet) t.styleSheet.cssText = n; else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }.bind(null, i, e), o = function () {
                !function (t) {
                    if (null === t.parentNode) return !1;
                    t.parentNode.removeChild(t)
                }(i)
            };
            return n(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    n(t = e)
                } else o()
            }
        }

        t.exports = function (t, e) {
            (e = e || {}).attributes = "object" == typeof e.attributes ? e.attributes : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o());
            var i = s(t, e);
            return a(i, e), function (t) {
                for (var o = [], r = 0; r < i.length; r++) {
                    var c = i[r], l = n[c.id];
                    l && (l.refs--, o.push(l))
                }
                t && a(s(t, e), e);
                for (var d = 0; d < o.length; d++) {
                    var h = o[d];
                    if (0 === h.refs) {
                        for (var u = 0; u < h.parts.length; u++) h.parts[u]();
                        delete n[h.id]
                    }
                }
            }
        }
    }, , function (t, e, i) {
        "use strict";
        var n = i(7), o = "object" == typeof self && self && self.Object === Object && self,
            r = n.a || o || Function("return this")();
        e.a = r
    }, function (t, e, i) {
        "use strict";
        (function (t) {
            var n = i(7), o = "object" == typeof exports && exports && !exports.nodeType && exports,
                r = o && "object" == typeof t && t && !t.nodeType && t, s = r && r.exports === o && n.a.process,
                a = function () {
                    try {
                        var t = r && r.require && r.require("util").types;
                        return t || s && s.binding && s.binding("util")
                    } catch (t) {
                    }
                }();
            e.a = a
        }).call(this, i(8)(t))
    }, function (t, e, i) {
        "use strict";
        (function (t) {
            var n = i(3), o = i(12), r = "object" == typeof exports && exports && !exports.nodeType && exports,
                s = r && "object" == typeof t && t && !t.nodeType && t, a = s && s.exports === r ? n.a.Buffer : void 0,
                c = (a ? a.isBuffer : void 0) || o.a;
            e.a = c
        }).call(this, i(8)(t))
    }, function (t, e, i) {
        "use strict";
        (function (t) {
            var e = i(14), n = i(0);
            const o = "object" == typeof window ? window : t;
            if (o.CKEDITOR_VERSION) throw new n.b("ckeditor-duplicated-modules: Some CKEditor 5 modules are duplicated.", null);
            o.CKEDITOR_VERSION = e.a
        }).call(this, i(9))
    }, function (t, e, i) {
        "use strict";
        (function (t) {
            var i = "object" == typeof t && t && t.Object === Object && t;
            e.a = i
        }).call(this, i(9))
    }, function (t, e) {
        t.exports = function (t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0, get: function () {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0, get: function () {
                        return e.i
                    }
                }), Object.defineProperty(e, "exports", {enumerable: !0}), e.webpackPolyfill = 1
            }
            return e
        }
    }, function (t, e) {
        var i;
        i = function () {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    }, function (t, e, i) {
        var n = i(45);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        var n = i(72);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e, i) {
        "use strict";
        e.a = function () {
            return !1
        }
    }, function (t, e, i) {
        "use strict";
        (function (t) {
            var n = i(3), o = "object" == typeof exports && exports && !exports.nodeType && exports,
                r = o && "object" == typeof t && t && !t.nodeType && t, s = r && r.exports === o ? n.a.Buffer : void 0,
                a = s ? s.allocUnsafe : void 0;
            e.a = function (t, e) {
                if (e) return t.slice();
                var i = t.length, n = a ? a(i) : new t.constructor(i);
                return t.copy(n), n
            }
        }).call(this, i(8)(t))
    }, function (t) {
        t.exports = JSON.parse('{"a":"15.0.0"}')
    }, function (t, e, i) {
        var n = i(16);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-placeholder:before,.ck .ck-placeholder:before{cursor:text;color:var(--ck-color-engine-placeholder-text)}"
    }, function (t, e, i) {
        var n = i(18);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999);--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border:#47a4f5;--ck-color-focus-shadow:rgba(119,186,248,0.5);--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,0.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}"
    }, function (t, e, i) {
        var n = i(20);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}"
    }, function (t, e, i) {
        var n = i(22);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}"
    }, function (t, e, i) {
        var n = i(24);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}"
    }, function (t, e, i) {
        var n = i(26);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block;will-change:transform}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{transform:translate3d(0,100%,0)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}:root{--ck-dropdown-arrow-size:calc(0.5*var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}"
    }, function (t, e, i) {
        var n = i(28);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}"
    }, function (t, e, i) {
        var n = i(30);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = '.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck-tooltip .ck-tooltip__text{display:inline-block}.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%}.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}'
    }, function (t, e, i) {
        var n = i(32);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button .ck-button__label,.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button .ck-button__label,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;border-color:transparent}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1*var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:calc(-1*var(--ck-spacing-small));margin-left:var(--ck-spacing-small)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"
    }, function (t, e, i) {
        var n = i(34);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;border:0;padding:calc(0.2*var(--ck-line-height-base)*var(--ck-font-size-base)) calc(0.4*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(1.2*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}"
    }, function (t, e, i) {
        var n = i(36);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:1.3846153847em}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(2*var(--ck-spacing-large))}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(2*var(--ck-spacing-large))}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(0.5*var(--ck-border-radius))}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:all .3s ease}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var(--ck-switch-button-translation))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(-1*var(--ck-switch-button-translation)))}"
    }, function (t, e, i) {
        var n = i(38);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-toolbar-dropdown .ck.ck-toolbar .ck.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}"
    }, function (t, e, i) {
        var n = i(40);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}"
    }, function (t, e, i) {
        var n = i(42);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row nowrap;align-items:center}.ck.ck-toolbar>.ck-toolbar__items{display:flex;flex-flow:row wrap;align-items:center;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar>.ck-toolbar__items>*{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar>.ck-toolbar__items>*,.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;width:1px;min-width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__grouped-dropdown,[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{padding-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__items>:last-child,[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__items>:last-child{margin-right:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_grouping>.ck-toolbar__items,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{margin-right:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__grouped-dropdown,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{padding-right:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__items>*,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__items>*{margin-left:var(--ck-spacing-small);margin-right:0}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__items>:last-child,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__items>:last-child{margin-left:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_grouping>.ck-toolbar__items,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{margin-left:var(--ck-spacing-small)}"
    }, function (t, e, i) {
        var n = i(44);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}"
    }, function (t, e) {
        t.exports = ".ck-content code{background-color:hsla(0,0%,78%,.3);padding:.15em;border-radius:2px}"
    }, function (t, e, i) {
        var n = i(47);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:5px solid #ccc}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}"
    }, function (t, e, i) {
        var n = i(49);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}"
    }, function (t, e, i) {
        var n = i(51);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-resizer-size:10px;--ck-resizer-border-width:1px;--ck-resizer-border-radius:2px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-tooltip-offset:10px;--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2}.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle:hover .ck-widget__selection-handle{visibility:visible}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);color:var(--ck-color-resizer-tooltip-text);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);font-size:var(--ck-font-size-tiny);display:block;padding:var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{top:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{top:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child,.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover .ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover .ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handle,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handle:hover,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handle,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-read-only .ck-widget{--ck-widget-outline-thickness:0}"
    }, function (t, e, i) {
        var n = i(53);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-labeled-input .ck-labeled-input__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-input .ck-labeled-input__status_error{color:var(--ck-color-base-error)}"
    }, function (t, e, i) {
        var n = i(55);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition-property:box-shadow,border;transition:.2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),var(--ck-inner-shadow)}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}"
    }, function (t, e, i) {
        var n = i(57);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-input{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-input{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}[dir=ltr] .ck.ck-text-alternative-form>:not(:first-child),[dir=rtl] .ck.ck-text-alternative-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-text-alternative-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-text-alternative-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-text-alternative-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-text-alternative-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-text-alternative-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-text-alternative-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"
    }, function (t, e, i) {
        var n = i(59);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}'
    }, function (t, e, i) {
        var n = i(61);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck .ck-balloon-rotator__navigation{display:flex;align-items:center;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}"
    }, function (t, e, i) {
        var n = i(63);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);width:100%;height:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}"
    }, function (t, e, i) {
        var n = i(65);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck-content .image{display:table;clear:both;text-align:center;margin:1em auto}.ck-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}"
    }, function (t, e, i) {
        var n = i(67);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-editor__editable .image{position:relative}.ck.ck-editor__editable .image .ck-progress-bar{position:absolute;top:0;left:0}.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"
    }, function (t, e, i) {
        var n = i(69);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = '.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}'
    }, function (t, e, i) {
        var n = i(71);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = '.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}'
    }, function (t, e) {
        t.exports = ".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}"
    }, function (t, e, i) {
        var n = i(74);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}"
    }, function (t, e, i) {
        var n = i(76);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center,.ck-content .image-style-align-left,.ck-content .image-style-align-right,.ck-content .image-style-side{max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}"
    }, function (t, e, i) {
        var n = i(78);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-input{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}[dir=ltr] .ck.ck-link-form>:not(:first-child),[dir=rtl] .ck.ck-link-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-link-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}.ck.ck-link-form_layout-vertical{padding:0;min-width:var(--ck-input-text-width)}.ck.ck-link-form_layout-vertical .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{padding:var(--ck-spacing-standard);margin:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin-left:0}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}"
    }, function (t, e, i) {
        var n = i(80);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):last-of-type{border-right:1px solid var(--ck-color-base-border)}}"
    }, function (t, e, i) {
        var n = i(82);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = '.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(3*var(--ck-spacing-standard));background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMDAzLjc4IDEuNjFoNDkuNjIxYzEuNjk0IDAgMy4xOS0uNzk4IDQuMTQ2LTIuMDM3eiIgZmlsbD0iIzVjODhjNSIvPjxwYXRoIGQ9Ik0yMjYuNzQyIDIyMi45ODhjLTkuMjY2IDAtMTYuNzc3IDcuMTctMTYuNzc3IDE2LjAxNC4wMDcgMi43NjIuNjYzIDUuNDc0IDIuMDkzIDcuODc1LjQzLjcwMy44MyAxLjQwOCAxLjE5IDIuMTA3LjMzMy41MDIuNjUgMS4wMDUuOTUgMS41MDguMzQzLjQ3Ny42NzMuOTU3Ljk4OCAxLjQ0IDEuMzEgMS43NjkgMi41IDMuNTAyIDMuNjM3IDUuMTY4Ljc5MyAxLjI3NSAxLjY4MyAyLjY0IDIuNDY2IDMuOTkgMi4zNjMgNC4wOTQgNC4wMDcgOC4wOTIgNC42IDEzLjkxNHYuMDEyYy4xODIuNDEyLjUxNi42NjYuODc5LjY2Ny40MDMtLjAwMS43NjgtLjMxNC45My0uNzk5LjYwMy01Ljc1NiAyLjIzOC05LjcyOSA0LjU4NS0xMy43OTQuNzgyLTEuMzUgMS42NzMtMi43MTUgMi40NjUtMy45OSAxLjEzNy0xLjY2NiAyLjMyOC0zLjQgMy42MzgtNS4xNjkuMzE1LS40ODIuNjQ1LS45NjIuOTg4LTEuNDM5LjMtLjUwMy42MTctMS4wMDYuOTUtMS41MDguMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0eiIgZmlsbD0iI2RkNGIzZSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48ZWxsaXBzZSByeT0iNS41NjQiIHJ4PSI1LjgyOCIgY3k9IjIzOS4wMDIiIGN4PSIyMjYuNzQyIiBmaWxsPSIjODAyZDI3IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0xOTAuMzAxIDIzNy4yODNjLTQuNjcgMC04LjQ1NyAzLjg1My04LjQ1NyA4LjYwNnMzLjc4NiA4LjYwNyA4LjQ1NyA4LjYwN2MzLjA0MyAwIDQuODA2LS45NTggNi4zMzctMi41MTYgMS41My0xLjU1NyAyLjA4Ny0zLjkxMyAyLjA4Ny02LjI5IDAtLjM2Mi0uMDIzLS43MjItLjA2NC0xLjA3OWgtOC4yNTd2My4wNDNoNC44NWMtLjE5Ny43NTktLjUzMSAxLjQ1LTEuMDU4IDEuOTg2LS45NDIuOTU4LTIuMDI4IDEuNTQ4LTMuOTAxIDEuNTQ4LTIuODc2IDAtNS4yMDgtMi4zNzItNS4yMDgtNS4yOTkgMC0yLjkyNiAyLjMzMi01LjI5OSA1LjIwOC01LjI5OSAxLjM5OSAwIDIuNjE4LjQwNyAzLjU4NCAxLjI5M2wyLjM4MS0yLjM4YzAtLjAwMi0uMDAzLS4wMDQtLjAwNC0uMDA1LTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTV6bTQuNDMgNS42NmwuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxNS4xODQgMjUxLjkyOWwtNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMjMzIDUuMjMzIDAgMDAuNDQ5LTIuMTIzdi0zMS4xNjVjLS40NjkuNjc1LS45MzQgMS4zNDktMS4zODIgMi4wMDUtLjc5MiAxLjI3NS0xLjY4MiAyLjY0LTIuNDY1IDMuOTktMi4zNDcgNC4wNjUtMy45ODIgOC4wMzgtNC41ODUgMTMuNzk0LS4xNjIuNDg1LS41MjcuNzk4LS45My43OTktLjM2My0uMDAxLS42OTctLjI1NS0uODc5LS42Njd2LS4wMTJjLS41OTMtNS44MjItMi4yMzctOS44Mi00LjYtMTMuOTE0LS43ODMtMS4zNS0xLjY3My0yLjcxNS0yLjQ2Ni0zLjk5LTEuMTM3LTEuNjY2LTIuMzI3LTMuNC0zLjYzNy01LjE2OWwtLjAwMi0uMDAzeiIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yMTIuOTgzIDI0OC40OTVsLTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAwNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAwLS45ODktMS40NCAzNS4xMjcgMzUuMTI3IDAgMDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMDA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c8,#b900b4,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}'
    }, function (t, e, i) {
        var n = i(84);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-input{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-input{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}.ck.ck-media-form{padding:var(--ck-spacing-standard)}.ck.ck-media-form:focus{outline:none}[dir=ltr] .ck.ck-media-form>:not(:first-child),[dir=rtl] .ck.ck-media-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-media-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-media-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-media-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-media-form .ck-labeled-input .ck-labeled-input__error{white-space:normal}.ck.ck-media-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-media-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-media-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-media-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-media-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"
    }, function (t, e, i) {
        var n = i(86);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck-content .media{clear:both;margin:1em 0;display:block;min-width:15em}"
    }, function (t, e, i) {
        var n = i(88);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ":root{--ck-color-table-focused-cell-background:#f5fafe}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}"
    }, function (t, e, i) {
        var n = i(90);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ":root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px;--ck-insert-table-dropdown-box-border-color:#bfbfbf;--ck-insert-table-dropdown-box-border-active-color:#53a0e4;--ck-insert-table-dropdown-box-active-background:#c7e5ff}.ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-insert-table-dropdown-box-border-color);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-insert-table-dropdown-box-border-active-color);background:var(--ck-insert-table-dropdown-box-active-background)}"
    }, function (t, e, i) {
        var n = i(92);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck-content .table{margin:1em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border-color:#d9d9d9}.ck-content .table table th{font-weight:700;background:#fafafa}"
    }, function (t, e, i) {
        var n = i(94);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;position:absolute;pointer-events:none;left:0;top:0;outline:1px solid var(--ck-color-resizer)}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{position:absolute;pointer-events:all;width:var(--ck-resizer-size);height:var(--ck-resizer-size);background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{top:var(--ck-resizer-offset);left:var(--ck-resizer-offset);cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{top:var(--ck-resizer-offset);right:var(--ck-resizer-offset);cursor:nesw-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset);cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset);cursor:nesw-resize}"
    }, function (t, e, i) {
        var n = i(96);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck-content .image.image_resized{max-width:100%;display:block;box-sizing:border-box}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}"
    }, function (t, e, i) {
        var n = i(98);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__action{border-top-right-radius:unset;border-bottom-right-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__action{border-top-left-radius:unset;border-bottom-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-radius:0}.ck-rounded-corners [dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow,[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:unset;border-bottom-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-top-right-radius:unset;border-bottom-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled){border-left-color:var(--ck-color-split-button-hover-border)}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled){border-right-color:var(--ck-color-split-button-hover-border)}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}"
    }, function (t, e, i) {
        var n = i(100);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ":root{--ck-highlight-marker-yellow:#fdfd77;--ck-highlight-marker-green:#63f963;--ck-highlight-marker-pink:#fc7999;--ck-highlight-marker-blue:#72cdfd;--ck-highlight-pen-red:#e91313;--ck-highlight-pen-green:#180}.marker-yellow{background-color:var(--ck-highlight-marker-yellow)}.marker-green{background-color:var(--ck-highlight-marker-green)}.marker-pink{background-color:var(--ck-highlight-marker-pink)}.marker-blue{background-color:var(--ck-highlight-marker-blue)}.pen-red{color:var(--ck-highlight-pen-red)}.pen-green,.pen-red{background-color:transparent}.pen-green{color:var(--ck-highlight-pen-green)}"
    }, function (t, e, i) {
        var n = i(102);
        "string" == typeof n && (n = [[t.i, n, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        i(1)(n, o);
        n.locals && (t.exports = n.locals)
    }, function (t, e) {
        t.exports = ".ck-editor__editable .ck-horizontal-line{overflow:hidden}.ck-content hr{border:solid #5e5e5e;border-width:1px 0 0;margin:0}.ck-editor__editable .ck-horizontal-line{padding:5px 0}"
    }, function (t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3), o = n.a.Symbol, r = Object.prototype, s = r.hasOwnProperty, a = r.toString,
            c = o ? o.toStringTag : void 0;
        var l = function (t) {
            var e = s.call(t, c), i = t[c];
            try {
                t[c] = void 0;
                var n = !0
            } catch (t) {
            }
            var o = a.call(t);
            return n && (e ? t[c] = i : delete t[c]), o
        }, d = Object.prototype.toString;
        var h = function (t) {
            return d.call(t)
        }, u = "[object Null]", f = "[object Undefined]", g = o ? o.toStringTag : void 0;
        var m = function (t) {
            return null == t ? void 0 === t ? f : u : g && g in Object(t) ? l(t) : h(t)
        };
        var p = function (t, e) {
            return function (i) {
                return t(e(i))
            }
        }, b = p(Object.getPrototypeOf, Object);
        var w = function (t) {
                return null != t && "object" == typeof t
            }, k = "[object Object]", _ = Function.prototype, v = Object.prototype, y = _.toString, x = v.hasOwnProperty,
            A = y.call(Object);
        var T = function (t) {
            if (!w(t) || m(t) != k) return !1;
            var e = b(t);
            if (null === e) return !0;
            var i = x.call(e, "constructor") && e.constructor;
            return "function" == typeof i && i instanceof i && y.call(i) == A
        };
        var C = function () {
            this.__data__ = [], this.size = 0
        };
        var P = function (t, e) {
            return t === e || t != t && e != e
        };
        var S = function (t, e) {
            for (var i = t.length; i--;) if (P(t[i][0], e)) return i;
            return -1
        }, E = Array.prototype.splice;
        var M = function (t) {
            var e = this.__data__, i = S(e, t);
            return !(i < 0 || (i == e.length - 1 ? e.pop() : E.call(e, i, 1), --this.size, 0))
        };
        var I = function (t) {
            var e = this.__data__, i = S(e, t);
            return i < 0 ? void 0 : e[i][1]
        };
        var N = function (t) {
            return S(this.__data__, t) > -1
        };
        var O = function (t, e) {
            var i = this.__data__, n = S(i, t);
            return n < 0 ? (++this.size, i.push([t, e])) : i[n][1] = e, this
        };

        function R(t) {
            var e = -1, i = null == t ? 0 : t.length;
            for (this.clear(); ++e < i;) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }

        R.prototype.clear = C, R.prototype.delete = M, R.prototype.get = I, R.prototype.has = N, R.prototype.set = O;
        var D = R;
        var L = function () {
            this.__data__ = new D, this.size = 0
        };
        var j = function (t) {
            var e = this.__data__, i = e.delete(t);
            return this.size = e.size, i
        };
        var z = function (t) {
            return this.__data__.get(t)
        };
        var V = function (t) {
            return this.__data__.has(t)
        };
        var B = function (t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }, F = "[object AsyncFunction]", H = "[object Function]", U = "[object GeneratorFunction]",
            W = "[object Proxy]";
        var q = function (t) {
            if (!B(t)) return !1;
            var e = m(t);
            return e == H || e == U || e == F || e == W
        }, $ = n.a["__core-js_shared__"], Y = function () {
            var t = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();
        var G = function (t) {
            return !!Y && Y in t
        }, Q = Function.prototype.toString;
        var K = function (t) {
                if (null != t) {
                    try {
                        return Q.call(t)
                    } catch (t) {
                    }
                    try {
                        return t + ""
                    } catch (t) {
                    }
                }
                return ""
            }, J = /^\[object .+?Constructor\]$/, Z = Function.prototype, X = Object.prototype, tt = Z.toString,
            et = X.hasOwnProperty,
            it = RegExp("^" + tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var nt = function (t) {
            return !(!B(t) || G(t)) && (q(t) ? it : J).test(K(t))
        };
        var ot = function (t, e) {
            return null == t ? void 0 : t[e]
        };
        var rt = function (t, e) {
            var i = ot(t, e);
            return nt(i) ? i : void 0
        }, st = rt(n.a, "Map"), at = rt(Object, "create");
        var ct = function () {
            this.__data__ = at ? at(null) : {}, this.size = 0
        };
        var lt = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e
        }, dt = "__lodash_hash_undefined__", ht = Object.prototype.hasOwnProperty;
        var ut = function (t) {
            var e = this.__data__;
            if (at) {
                var i = e[t];
                return i === dt ? void 0 : i
            }
            return ht.call(e, t) ? e[t] : void 0
        }, ft = Object.prototype.hasOwnProperty;
        var gt = function (t) {
            var e = this.__data__;
            return at ? void 0 !== e[t] : ft.call(e, t)
        }, mt = "__lodash_hash_undefined__";
        var pt = function (t, e) {
            var i = this.__data__;
            return this.size += this.has(t) ? 0 : 1, i[t] = at && void 0 === e ? mt : e, this
        };

        function bt(t) {
            var e = -1, i = null == t ? 0 : t.length;
            for (this.clear(); ++e < i;) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }

        bt.prototype.clear = ct, bt.prototype.delete = lt, bt.prototype.get = ut, bt.prototype.has = gt, bt.prototype.set = pt;
        var wt = bt;
        var kt = function () {
            this.size = 0, this.__data__ = {hash: new wt, map: new (st || D), string: new wt}
        };
        var _t = function (t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        };
        var vt = function (t, e) {
            var i = t.__data__;
            return _t(e) ? i["string" == typeof e ? "string" : "hash"] : i.map
        };
        var yt = function (t) {
            var e = vt(this, t).delete(t);
            return this.size -= e ? 1 : 0, e
        };
        var xt = function (t) {
            return vt(this, t).get(t)
        };
        var At = function (t) {
            return vt(this, t).has(t)
        };
        var Tt = function (t, e) {
            var i = vt(this, t), n = i.size;
            return i.set(t, e), this.size += i.size == n ? 0 : 1, this
        };

        function Ct(t) {
            var e = -1, i = null == t ? 0 : t.length;
            for (this.clear(); ++e < i;) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }

        Ct.prototype.clear = kt, Ct.prototype.delete = yt, Ct.prototype.get = xt, Ct.prototype.has = At, Ct.prototype.set = Tt;
        var Pt = Ct, St = 200;
        var Et = function (t, e) {
            var i = this.__data__;
            if (i instanceof D) {
                var n = i.__data__;
                if (!st || n.length < St - 1) return n.push([t, e]), this.size = ++i.size, this;
                i = this.__data__ = new Pt(n)
            }
            return i.set(t, e), this.size = i.size, this
        };

        function Mt(t) {
            var e = this.__data__ = new D(t);
            this.size = e.size
        }

        Mt.prototype.clear = L, Mt.prototype.delete = j, Mt.prototype.get = z, Mt.prototype.has = V, Mt.prototype.set = Et;
        var It = Mt;
        var Nt = function (t, e) {
            for (var i = -1, n = null == t ? 0 : t.length; ++i < n && !1 !== e(t[i], i, t);) ;
            return t
        }, Ot = function () {
            try {
                var t = rt(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {
            }
        }();
        var Rt = function (t, e, i) {
            "__proto__" == e && Ot ? Ot(t, e, {configurable: !0, enumerable: !0, value: i, writable: !0}) : t[e] = i
        }, Dt = Object.prototype.hasOwnProperty;
        var Lt = function (t, e, i) {
            var n = t[e];
            Dt.call(t, e) && P(n, i) && (void 0 !== i || e in t) || Rt(t, e, i)
        };
        var jt = function (t, e, i, n) {
            var o = !i;
            i || (i = {});
            for (var r = -1, s = e.length; ++r < s;) {
                var a = e[r], c = n ? n(i[a], t[a], a, i, t) : void 0;
                void 0 === c && (c = t[a]), o ? Rt(i, a, c) : Lt(i, a, c)
            }
            return i
        };
        var zt = function (t, e) {
            for (var i = -1, n = Array(t); ++i < t;) n[i] = e(i);
            return n
        }, Vt = "[object Arguments]";
        var Bt = function (t) {
            return w(t) && m(t) == Vt
        }, Ft = Object.prototype, Ht = Ft.hasOwnProperty, Ut = Ft.propertyIsEnumerable, Wt = Bt(function () {
            return arguments
        }()) ? Bt : function (t) {
            return w(t) && Ht.call(t, "callee") && !Ut.call(t, "callee")
        }, qt = Array.isArray, $t = i(5), Yt = 9007199254740991, Gt = /^(?:0|[1-9]\d*)$/;
        var Qt = function (t, e) {
            var i = typeof t;
            return !!(e = null == e ? Yt : e) && ("number" == i || "symbol" != i && Gt.test(t)) && t > -1 && t % 1 == 0 && t < e
        }, Kt = 9007199254740991;
        var Jt = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= Kt
        }, Zt = {};
        Zt["[object Float32Array]"] = Zt["[object Float64Array]"] = Zt["[object Int8Array]"] = Zt["[object Int16Array]"] = Zt["[object Int32Array]"] = Zt["[object Uint8Array]"] = Zt["[object Uint8ClampedArray]"] = Zt["[object Uint16Array]"] = Zt["[object Uint32Array]"] = !0, Zt["[object Arguments]"] = Zt["[object Array]"] = Zt["[object ArrayBuffer]"] = Zt["[object Boolean]"] = Zt["[object DataView]"] = Zt["[object Date]"] = Zt["[object Error]"] = Zt["[object Function]"] = Zt["[object Map]"] = Zt["[object Number]"] = Zt["[object Object]"] = Zt["[object RegExp]"] = Zt["[object Set]"] = Zt["[object String]"] = Zt["[object WeakMap]"] = !1;
        var Xt = function (t) {
            return w(t) && Jt(t.length) && !!Zt[m(t)]
        };
        var te = function (t) {
            return function (e) {
                return t(e)
            }
        }, ee = i(4), ie = ee.a && ee.a.isTypedArray, ne = ie ? te(ie) : Xt, oe = Object.prototype.hasOwnProperty;
        var re = function (t, e) {
            var i = qt(t), n = !i && Wt(t), o = !i && !n && Object($t.a)(t), r = !i && !n && !o && ne(t),
                s = i || n || o || r, a = s ? zt(t.length, String) : [], c = a.length;
            for (var l in t) !e && !oe.call(t, l) || s && ("length" == l || o && ("offset" == l || "parent" == l) || r && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Qt(l, c)) || a.push(l);
            return a
        }, se = Object.prototype;
        var ae = function (t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || se)
        }, ce = p(Object.keys, Object), le = Object.prototype.hasOwnProperty;
        var de = function (t) {
            if (!ae(t)) return ce(t);
            var e = [];
            for (var i in Object(t)) le.call(t, i) && "constructor" != i && e.push(i);
            return e
        };
        var he = function (t) {
            return null != t && Jt(t.length) && !q(t)
        };
        var ue = function (t) {
            return he(t) ? re(t) : de(t)
        };
        var fe = function (t, e) {
            return t && jt(e, ue(e), t)
        };
        var ge = function (t) {
            var e = [];
            if (null != t) for (var i in Object(t)) e.push(i);
            return e
        }, me = Object.prototype.hasOwnProperty;
        var pe = function (t) {
            if (!B(t)) return ge(t);
            var e = ae(t), i = [];
            for (var n in t) ("constructor" != n || !e && me.call(t, n)) && i.push(n);
            return i
        };
        var be = function (t) {
            return he(t) ? re(t, !0) : pe(t)
        };
        var we = function (t, e) {
            return t && jt(e, be(e), t)
        }, ke = i(13);
        var _e = function (t, e) {
            var i = -1, n = t.length;
            for (e || (e = Array(n)); ++i < n;) e[i] = t[i];
            return e
        };
        var ve = function (t, e) {
            for (var i = -1, n = null == t ? 0 : t.length, o = 0, r = []; ++i < n;) {
                var s = t[i];
                e(s, i, t) && (r[o++] = s)
            }
            return r
        };
        var ye = function () {
            return []
        }, xe = Object.prototype.propertyIsEnumerable, Ae = Object.getOwnPropertySymbols, Te = Ae ? function (t) {
            return null == t ? [] : (t = Object(t), ve(Ae(t), function (e) {
                return xe.call(t, e)
            }))
        } : ye;
        var Ce = function (t, e) {
            return jt(t, Te(t), e)
        };
        var Pe = function (t, e) {
            for (var i = -1, n = e.length, o = t.length; ++i < n;) t[o + i] = e[i];
            return t
        }, Se = Object.getOwnPropertySymbols ? function (t) {
            for (var e = []; t;) Pe(e, Te(t)), t = b(t);
            return e
        } : ye;
        var Ee = function (t, e) {
            return jt(t, Se(t), e)
        };
        var Me = function (t, e, i) {
            var n = e(t);
            return qt(t) ? n : Pe(n, i(t))
        };
        var Ie = function (t) {
            return Me(t, ue, Te)
        };
        var Ne = function (t) {
                return Me(t, be, Se)
            }, Oe = rt(n.a, "DataView"), Re = rt(n.a, "Promise"), De = rt(n.a, "Set"), Le = rt(n.a, "WeakMap"), je = K(Oe),
            ze = K(st), Ve = K(Re), Be = K(De), Fe = K(Le), He = m;
        (Oe && "[object DataView]" != He(new Oe(new ArrayBuffer(1))) || st && "[object Map]" != He(new st) || Re && "[object Promise]" != He(Re.resolve()) || De && "[object Set]" != He(new De) || Le && "[object WeakMap]" != He(new Le)) && (He = function (t) {
            var e = m(t), i = "[object Object]" == e ? t.constructor : void 0, n = i ? K(i) : "";
            if (n) switch (n) {
                case je:
                    return "[object DataView]";
                case ze:
                    return "[object Map]";
                case Ve:
                    return "[object Promise]";
                case Be:
                    return "[object Set]";
                case Fe:
                    return "[object WeakMap]"
            }
            return e
        });
        var Ue = He, We = Object.prototype.hasOwnProperty;
        var qe = function (t) {
            var e = t.length, i = new t.constructor(e);
            return e && "string" == typeof t[0] && We.call(t, "index") && (i.index = t.index, i.input = t.input), i
        }, $e = n.a.Uint8Array;
        var Ye = function (t) {
            var e = new t.constructor(t.byteLength);
            return new $e(e).set(new $e(t)), e
        };
        var Ge = function (t, e) {
            var i = e ? Ye(t.buffer) : t.buffer;
            return new t.constructor(i, t.byteOffset, t.byteLength)
        }, Qe = /\w*$/;
        var Ke = function (t) {
            var e = new t.constructor(t.source, Qe.exec(t));
            return e.lastIndex = t.lastIndex, e
        }, Je = o ? o.prototype : void 0, Ze = Je ? Je.valueOf : void 0;
        var Xe = function (t) {
            return Ze ? Object(Ze.call(t)) : {}
        };
        var ti = function (t, e) {
                var i = e ? Ye(t.buffer) : t.buffer;
                return new t.constructor(i, t.byteOffset, t.length)
            }, ei = "[object Boolean]", ii = "[object Date]", ni = "[object Map]", oi = "[object Number]",
            ri = "[object RegExp]", si = "[object Set]", ai = "[object String]", ci = "[object Symbol]",
            li = "[object ArrayBuffer]", di = "[object DataView]", hi = "[object Float32Array]",
            ui = "[object Float64Array]", fi = "[object Int8Array]", gi = "[object Int16Array]",
            mi = "[object Int32Array]", pi = "[object Uint8Array]", bi = "[object Uint8ClampedArray]",
            wi = "[object Uint16Array]", ki = "[object Uint32Array]";
        var _i = function (t, e, i) {
            var n = t.constructor;
            switch (e) {
                case li:
                    return Ye(t);
                case ei:
                case ii:
                    return new n(+t);
                case di:
                    return Ge(t, i);
                case hi:
                case ui:
                case fi:
                case gi:
                case mi:
                case pi:
                case bi:
                case wi:
                case ki:
                    return ti(t, i);
                case ni:
                    return new n;
                case oi:
                case ai:
                    return new n(t);
                case ri:
                    return Ke(t);
                case si:
                    return new n;
                case ci:
                    return Xe(t)
            }
        }, vi = Object.create, yi = function () {
            function t() {
            }

            return function (e) {
                if (!B(e)) return {};
                if (vi) return vi(e);
                t.prototype = e;
                var i = new t;
                return t.prototype = void 0, i
            }
        }();
        var xi = function (t) {
            return "function" != typeof t.constructor || ae(t) ? {} : yi(b(t))
        }, Ai = "[object Map]";
        var Ti = function (t) {
            return w(t) && Ue(t) == Ai
        }, Ci = ee.a && ee.a.isMap, Pi = Ci ? te(Ci) : Ti, Si = "[object Set]";
        var Ei = function (t) {
                return w(t) && Ue(t) == Si
            }, Mi = ee.a && ee.a.isSet, Ii = Mi ? te(Mi) : Ei, Ni = 1, Oi = 2, Ri = 4, Di = "[object Arguments]",
            Li = "[object Function]", ji = "[object GeneratorFunction]", zi = "[object Object]", Vi = {};
        Vi[Di] = Vi["[object Array]"] = Vi["[object ArrayBuffer]"] = Vi["[object DataView]"] = Vi["[object Boolean]"] = Vi["[object Date]"] = Vi["[object Float32Array]"] = Vi["[object Float64Array]"] = Vi["[object Int8Array]"] = Vi["[object Int16Array]"] = Vi["[object Int32Array]"] = Vi["[object Map]"] = Vi["[object Number]"] = Vi[zi] = Vi["[object RegExp]"] = Vi["[object Set]"] = Vi["[object String]"] = Vi["[object Symbol]"] = Vi["[object Uint8Array]"] = Vi["[object Uint8ClampedArray]"] = Vi["[object Uint16Array]"] = Vi["[object Uint32Array]"] = !0, Vi["[object Error]"] = Vi[Li] = Vi["[object WeakMap]"] = !1;
        var Bi = function t(e, i, n, o, r, s) {
            var a, c = i & Ni, l = i & Oi, d = i & Ri;
            if (n && (a = r ? n(e, o, r, s) : n(e)), void 0 !== a) return a;
            if (!B(e)) return e;
            var h = qt(e);
            if (h) {
                if (a = qe(e), !c) return _e(e, a)
            } else {
                var u = Ue(e), f = u == Li || u == ji;
                if (Object($t.a)(e)) return Object(ke.a)(e, c);
                if (u == zi || u == Di || f && !r) {
                    if (a = l || f ? {} : xi(e), !c) return l ? Ee(e, we(a, e)) : Ce(e, fe(a, e))
                } else {
                    if (!Vi[u]) return r ? e : {};
                    a = _i(e, u, c)
                }
            }
            s || (s = new It);
            var g = s.get(e);
            if (g) return g;
            s.set(e, a), Ii(e) ? e.forEach(function (o) {
                a.add(t(o, i, n, o, e, s))
            }) : Pi(e) && e.forEach(function (o, r) {
                a.set(r, t(o, i, n, r, e, s))
            });
            var m = d ? l ? Ne : Ie : l ? keysIn : ue, p = h ? void 0 : m(e);
            return Nt(p || e, function (o, r) {
                p && (o = e[r = o]), Lt(a, r, t(o, i, n, r, e, s))
            }), a
        }, Fi = 1, Hi = 4;
        var Ui = function (t, e) {
            return Bi(t, Fi | Hi, e = "function" == typeof e ? e : void 0)
        };
        var Wi = function (t) {
            return w(t) && 1 === t.nodeType && !T(t)
        };

        class qi {
            constructor(t, e) {
                this._config = {}, e && this.define(e), t && this._setObjectToTarget(this._config, t)
            }

            set(t, e) {
                this._setToTarget(this._config, t, e)
            }

            define(t, e) {
                this._setToTarget(this._config, t, e, !0)
            }

            get(t) {
                return this._getFromSource(this._config, t)
            }

            _setToTarget(t, e, i, n = !1) {
                if (T(e)) return void this._setObjectToTarget(t, e, n);
                const o = e.split(".");
                e = o.pop();
                for (const e of o) T(t[e]) || (t[e] = {}), t = t[e];
                if (T(i)) return T(t[e]) || (t[e] = {}), t = t[e], void this._setObjectToTarget(t, i, n);
                n && void 0 !== t[e] || (t[e] = i)
            }

            _getFromSource(t, e) {
                const i = e.split(".");
                e = i.pop();
                for (const e of i) {
                    if (!T(t[e])) {
                        t = null;
                        break
                    }
                    t = t[e]
                }
                return t ? function (t) {
                    return Ui(t, $i)
                }(t[e]) : void 0
            }

            _setObjectToTarget(t, e, i) {
                Object.keys(e).forEach(n => {
                    this._setToTarget(t, n, e[n], i)
                })
            }
        }

        function $i(t) {
            return Wi(t) ? t : void 0
        }

        var Yi = i(0);
        var Gi = function () {
            return function t() {
                t.called = !0
            }
        };

        class Qi {
            constructor(t, e) {
                this.source = t, this.name = e, this.path = [], this.stop = Gi(), this.off = Gi()
            }
        }

        function Ki() {
            let t = "e";
            for (let e = 0; e < 8; e++) t += Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            return t
        }

        var Ji = {
            get(t) {
                return "number" != typeof t ? this[t] || this.normal : t
            }, highest: 1e5, high: 1e3, normal: 0, low: -1e3, lowest: -1e5
        };
        i(6);
        const Zi = Symbol("listeningTo"), Xi = Symbol("emitterId");
        var tn = {
            on(t, e, i = {}) {
                this.listenTo(this, t, e, i)
            }, once(t, e, i) {
                let n = !1;
                this.listenTo(this, t, function (t, ...i) {
                    n || (n = !0, t.off(), e.call(this, t, ...i))
                }, i)
            }, off(t, e) {
                this.stopListening(this, t, e)
            }, listenTo(t, e, i, n = {}) {
                let o, r;
                this[Zi] || (this[Zi] = {});
                const s = this[Zi];
                nn(t) || en(t);
                const a = nn(t);
                (o = s[a]) || (o = s[a] = {
                    emitter: t,
                    callbacks: {}
                }), (r = o.callbacks[e]) || (r = o.callbacks[e] = []), r.push(i), function (t, e) {
                    const i = on(t);
                    if (i[e]) return;
                    let n = e, o = null;
                    const r = [];
                    for (; "" !== n && !i[n];) i[n] = {
                        callbacks: [],
                        childEvents: []
                    }, r.push(i[n]), o && i[n].childEvents.push(o), o = n, n = n.substr(0, n.lastIndexOf(":"));
                    if ("" !== n) {
                        for (const t of r) t.callbacks = i[n].callbacks.slice();
                        i[n].childEvents.push(o)
                    }
                }(t, e);
                const c = rn(t, e), l = Ji.get(n.priority), d = {callback: i, priority: l};
                for (const t of c) {
                    let e = !1;
                    for (let i = 0; i < t.length; i++) if (t[i].priority < l) {
                        t.splice(i, 0, d), e = !0;
                        break
                    }
                    e || t.push(d)
                }
            }, stopListening(t, e, i) {
                const n = this[Zi];
                let o = t && nn(t);
                const r = n && o && n[o], s = r && e && r.callbacks[e];
                if (!(!n || t && !r || e && !s)) if (i) an(t, e, i); else if (s) {
                    for (; i = s.pop();) an(t, e, i);
                    delete r.callbacks[e]
                } else if (r) {
                    for (e in r.callbacks) this.stopListening(t, e);
                    delete n[o]
                } else {
                    for (o in n) this.stopListening(n[o].emitter);
                    delete this[Zi]
                }
            }, fire(t, ...e) {
                try {
                    const i = t instanceof Qi ? t : new Qi(this, t), n = i.name;
                    let o = function t(e, i) {
                        let n;
                        if (!e._events || !(n = e._events[i]) || !n.callbacks.length) return i.indexOf(":") > -1 ? t(e, i.substr(0, i.lastIndexOf(":"))) : null;
                        return n.callbacks
                    }(this, n);
                    if (i.path.push(this), o) {
                        const t = [i, ...e];
                        o = Array.from(o);
                        for (let e = 0; e < o.length && (o[e].callback.apply(this, t), i.off.called && (delete i.off.called, an(this, n, o[e].callback)), !i.stop.called); e++) ;
                    }
                    if (this._delegations) {
                        const t = this._delegations.get(n), o = this._delegations.get("*");
                        t && sn(t, i, e), o && sn(o, i, e)
                    }
                    return i.return
                } catch (t) {
                    Yi.b.rethrowUnexpectedError(t, this)
                }
            }, delegate(...t) {
                return {
                    to: (e, i) => {
                        this._delegations || (this._delegations = new Map), t.forEach(t => {
                            const n = this._delegations.get(t);
                            n ? n.set(e, i) : this._delegations.set(t, new Map([[e, i]]))
                        })
                    }
                }
            }, stopDelegating(t, e) {
                if (this._delegations) if (t) if (e) {
                    const i = this._delegations.get(t);
                    i && i.delete(e)
                } else this._delegations.delete(t); else this._delegations.clear()
            }
        };

        function en(t, e) {
            t[Xi] || (t[Xi] = e || Ki())
        }

        function nn(t) {
            return t[Xi]
        }

        function on(t) {
            return t._events || Object.defineProperty(t, "_events", {value: {}}), t._events
        }

        function rn(t, e) {
            const i = on(t)[e];
            if (!i) return [];
            let n = [i.callbacks];
            for (let e = 0; e < i.childEvents.length; e++) {
                const o = rn(t, i.childEvents[e]);
                n = n.concat(o)
            }
            return n
        }

        function sn(t, e, i) {
            for (let [n, o] of t) {
                o ? "function" == typeof o && (o = o(e.name)) : o = e.name;
                const t = new Qi(e.source, o);
                t.path = [...e.path], n.fire(t, ...i)
            }
        }

        function an(t, e, i) {
            const n = rn(t, e);
            for (const t of n) for (let e = 0; e < t.length; e++) t[e].callback == i && (t.splice(e, 1), e--)
        }

        function cn(t, ...e) {
            e.forEach(e => {
                Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(i => {
                    if (i in t.prototype) return;
                    const n = Object.getOwnPropertyDescriptor(e, i);
                    n.enumerable = !1, Object.defineProperty(t.prototype, i, n)
                })
            })
        }

        function ln(t, e) {
            const i = Math.min(t.length, e.length);
            for (let n = 0; n < i; n++) if (t[n] != e[n]) return n;
            return t.length == e.length ? "same" : t.length < e.length ? "prefix" : "extension"
        }

        var dn = 4;
        var hn = function (t) {
            return Bi(t, dn)
        };

        class un {
            constructor() {
                this.parent = null
            }

            get index() {
                let t;
                if (!this.parent) return null;
                if (-1 == (t = this.parent.getChildIndex(this))) throw new Yi.b("view-node-not-found-in-parent: The node's parent does not contain this node.", this);
                return t
            }

            get nextSibling() {
                const t = this.index;
                return null !== t && this.parent.getChild(t + 1) || null
            }

            get previousSibling() {
                const t = this.index;
                return null !== t && this.parent.getChild(t - 1) || null
            }

            get root() {
                let t = this;
                for (; t.parent;) t = t.parent;
                return t
            }

            get document() {
                return this.parent instanceof un ? this.parent.document : null
            }

            getPath() {
                const t = [];
                let e = this;
                for (; e.parent;) t.unshift(e.index), e = e.parent;
                return t
            }

            getAncestors(t = {includeSelf: !1, parentFirst: !1}) {
                const e = [];
                let i = t.includeSelf ? this : this.parent;
                for (; i;) e[t.parentFirst ? "push" : "unshift"](i), i = i.parent;
                return e
            }

            getCommonAncestor(t, e = {}) {
                const i = this.getAncestors(e), n = t.getAncestors(e);
                let o = 0;
                for (; i[o] == n[o] && i[o];) o++;
                return 0 === o ? null : i[o - 1]
            }

            isBefore(t) {
                if (this == t) return !1;
                if (this.root !== t.root) return !1;
                const e = this.getPath(), i = t.getPath(), n = ln(e, i);
                switch (n) {
                    case"prefix":
                        return !0;
                    case"extension":
                        return !1;
                    default:
                        return e[n] < i[n]
                }
            }

            isAfter(t) {
                return this != t && (this.root === t.root && !this.isBefore(t))
            }

            _remove() {
                this.parent._removeChildren(this.index)
            }

            _fireChange(t, e) {
                this.fire("change:" + t, e), this.parent && this.parent._fireChange(t, e)
            }

            toJSON() {
                const t = hn(this);
                return delete t.parent, t
            }

            is(t) {
                return "node" == t || "view:node" == t
            }
        }

        cn(un, tn);

        class fn extends un {
            constructor(t) {
                super(), this._textData = t
            }

            is(t) {
                return "text" == t || "view:text" == t || super.is(t)
            }

            get data() {
                return this._textData
            }

            get _data() {
                return this.data
            }

            set _data(t) {
                this._fireChange("text", this), this._textData = t
            }

            isSimilar(t) {
                return t instanceof fn && (this === t || this.data === t.data)
            }

            _clone() {
                return new fn(this.data)
            }
        }

        class gn {
            constructor(t, e, i) {
                if (this.textNode = t, e < 0 || e > t.data.length) throw new Yi.b("view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.", this);
                if (i < 0 || e + i > t.data.length) throw new Yi.b("view-textproxy-wrong-length: Given length value is incorrect.", this);
                this.data = t.data.substring(e, e + i), this.offsetInText = e
            }

            get offsetSize() {
                return this.data.length
            }

            get isPartial() {
                return this.data.length !== this.textNode.data.length
            }

            get parent() {
                return this.textNode.parent
            }

            get root() {
                return this.textNode.root
            }

            get document() {
                return this.textNode.document
            }

            is(t) {
                return "textProxy" == t || "view:textProxy" == t
            }

            getAncestors(t = {includeSelf: !1, parentFirst: !1}) {
                const e = [];
                let i = t.includeSelf ? this.textNode : this.parent;
                for (; null !== i;) e[t.parentFirst ? "push" : "unshift"](i), i = i.parent;
                return e
            }
        }

        function mn(t) {
            const e = new Map;
            for (const i in t) e.set(i, t[i]);
            return e
        }

        function pn(t) {
            return !(!t || !t[Symbol.iterator])
        }

        class bn {
            constructor(...t) {
                this._patterns = [], this.add(...t)
            }

            add(...t) {
                for (let e of t) ("string" == typeof e || e instanceof RegExp) && (e = {name: e}), e.classes && ("string" == typeof e.classes || e.classes instanceof RegExp) && (e.classes = [e.classes]), this._patterns.push(e)
            }

            match(...t) {
                for (const e of t) for (const t of this._patterns) {
                    const i = wn(e, t);
                    if (i) return {element: e, pattern: t, match: i}
                }
                return null
            }

            matchAll(...t) {
                const e = [];
                for (const i of t) for (const t of this._patterns) {
                    const n = wn(i, t);
                    n && e.push({element: i, pattern: t, match: n})
                }
                return e.length > 0 ? e : null
            }

            getElementName() {
                if (1 !== this._patterns.length) return null;
                const t = this._patterns[0], e = t.name;
                return "function" == typeof t || !e || e instanceof RegExp ? null : e
            }
        }

        function wn(t, e) {
            if ("function" == typeof e) return e(t);
            const i = {};
            return e.name && (i.name = function (t, e) {
                if (t instanceof RegExp) return t.test(e);
                return t === e
            }(e.name, t.name), !i.name) ? null : e.attributes && (i.attributes = function (t, e) {
                const i = [];
                for (const n in t) {
                    const o = t[n];
                    if (!e.hasAttribute(n)) return null;
                    {
                        const t = e.getAttribute(n);
                        if (!0 === o) i.push(n); else if (o instanceof RegExp) {
                            if (!o.test(t)) return null;
                            i.push(n)
                        } else {
                            if (t !== o) return null;
                            i.push(n)
                        }
                    }
                }
                return i
            }(e.attributes, t), !i.attributes) ? null : !(e.classes && (i.classes = function (t, e) {
                const i = [];
                for (const n of t) if (n instanceof RegExp) {
                    const t = e.getClassNames();
                    for (const e of t) n.test(e) && i.push(e);
                    if (0 === i.length) return null
                } else {
                    if (!e.hasClass(n)) return null;
                    i.push(n)
                }
                return i
            }(e.classes, t), !i.classes)) && (!(e.styles && (i.styles = function (t, e) {
                const i = [];
                for (const n in t) {
                    const o = t[n];
                    if (!e.hasStyle(n)) return null;
                    {
                        const t = e.getStyle(n);
                        if (o instanceof RegExp) {
                            if (!o.test(t)) return null;
                            i.push(n)
                        } else {
                            if (t !== o) return null;
                            i.push(n)
                        }
                    }
                }
                return i
            }(e.styles, t), !i.styles)) && i)
        }

        class kn extends un {
            constructor(t, e, i) {
                if (super(), this.name = t, this._attrs = function (t) {
                    t = T(t) ? mn(t) : new Map(t);
                    for (const [e, i] of t) null === i ? t.delete(e) : "string" != typeof i && t.set(e, String(i));
                    return t
                }(e), this._children = [], i && this._insertChild(0, i), this._classes = new Set, this._attrs.has("class")) {
                    const t = this._attrs.get("class");
                    vn(this._classes, t), this._attrs.delete("class")
                }
                this._styles = new Map, this._attrs.has("style") && (_n(this._styles, this._attrs.get("style")), this._attrs.delete("style")), this._customProperties = new Map
            }

            get childCount() {
                return this._children.length
            }

            get isEmpty() {
                return 0 === this._children.length
            }

            is(t, e = null) {
                const i = t.replace(/^view:/, "");
                return e ? "element" == i && e == this.name : "element" == i || i == this.name || super.is(t)
            }

            getChild(t) {
                return this._children[t]
            }

            getChildIndex(t) {
                return this._children.indexOf(t)
            }

            getChildren() {
                return this._children[Symbol.iterator]()
            }

            * getAttributeKeys() {
                this._classes.size > 0 && (yield"class"), this._styles.size > 0 && (yield"style"), yield* this._attrs.keys()
            }

            * getAttributes() {
                yield* this._attrs.entries(), this._classes.size > 0 && (yield["class", this.getAttribute("class")]), this._styles.size > 0 && (yield["style", this.getAttribute("style")])
            }

            getAttribute(t) {
                if ("class" == t) return this._classes.size > 0 ? [...this._classes].join(" ") : void 0;
                if ("style" != t) return this._attrs.get(t);
                if (this._styles.size > 0) {
                    let t = "";
                    for (const [e, i] of this._styles) t += `${e}:${i};`;
                    return t
                }
            }

            hasAttribute(t) {
                return "class" == t ? this._classes.size > 0 : "style" == t ? this._styles.size > 0 : this._attrs.has(t)
            }

            isSimilar(t) {
                if (!(t instanceof kn)) return !1;
                if (this === t) return !0;
                if (this.name != t.name) return !1;
                if (this._attrs.size !== t._attrs.size || this._classes.size !== t._classes.size || this._styles.size !== t._styles.size) return !1;
                for (const [e, i] of this._attrs) if (!t._attrs.has(e) || t._attrs.get(e) !== i) return !1;
                for (const e of this._classes) if (!t._classes.has(e)) return !1;
                for (const [e, i] of this._styles) if (!t._styles.has(e) || t._styles.get(e) !== i) return !1;
                return !0
            }

            hasClass(...t) {
                for (const e of t) if (!this._classes.has(e)) return !1;
                return !0
            }

            getClassNames() {
                return this._classes.keys()
            }

            getStyle(t) {
                return this._styles.get(t)
            }

            getStyleNames() {
                return this._styles.keys()
            }

            hasStyle(...t) {
                for (const e of t) if (!this._styles.has(e)) return !1;
                return !0
            }

            findAncestor(...t) {
                const e = new bn(...t);
                let i = this.parent;
                for (; i;) {
                    if (e.match(i)) return i;
                    i = i.parent
                }
                return null
            }

            getCustomProperty(t) {
                return this._customProperties.get(t)
            }

            * getCustomProperties() {
                yield* this._customProperties.entries()
            }

            getIdentity() {
                const t = Array.from(this._classes).sort().join(","),
                    e = Array.from(this._styles).map(t => `${t[0]}:${t[1]}`).sort().join(";"),
                    i = Array.from(this._attrs).map(t => `${t[0]}="${t[1]}"`).sort().join(" ");
                return this.name + ("" == t ? "" : ` class="${t}"`) + ("" == e ? "" : ` style="${e}"`) + ("" == i ? "" : ` ${i}`)
            }

            _clone(t = !1) {
                const e = [];
                if (t) for (const i of this.getChildren()) e.push(i._clone(t));
                const i = new this.constructor(this.name, this._attrs, e);
                return i._classes = new Set(this._classes), i._styles = new Map(this._styles), i._customProperties = new Map(this._customProperties), i.getFillerOffset = this.getFillerOffset, i
            }

            _appendChild(t) {
                return this._insertChild(this.childCount, t)
            }

            _insertChild(t, e) {
                this._fireChange("children", this);
                let i = 0;
                const n = function (t) {
                    if ("string" == typeof t) return [new fn(t)];
                    pn(t) || (t = [t]);
                    return Array.from(t).map(t => "string" == typeof t ? new fn(t) : t instanceof gn ? new fn(t.data) : t)
                }(e);
                for (const e of n) null !== e.parent && e._remove(), e.parent = this, this._children.splice(t, 0, e), t++, i++;
                return i
            }

            _removeChildren(t, e = 1) {
                this._fireChange("children", this);
                for (let i = t; i < t + e; i++) this._children[i].parent = null;
                return this._children.splice(t, e)
            }

            _setAttribute(t, e) {
                e = String(e), this._fireChange("attributes", this), "class" == t ? vn(this._classes, e) : "style" == t ? _n(this._styles, e) : this._attrs.set(t, e)
            }

            _removeAttribute(t) {
                return this._fireChange("attributes", this), "class" == t ? this._classes.size > 0 && (this._classes.clear(), !0) : "style" == t ? this._styles.size > 0 && (this._styles.clear(), !0) : this._attrs.delete(t)
            }

            _addClass(t) {
                this._fireChange("attributes", this), (t = Array.isArray(t) ? t : [t]).forEach(t => this._classes.add(t))
            }

            _removeClass(t) {
                this._fireChange("attributes", this), (t = Array.isArray(t) ? t : [t]).forEach(t => this._classes.delete(t))
            }

            _setStyle(t, e) {
                if (this._fireChange("attributes", this), T(t)) {
                    const e = Object.keys(t);
                    for (const i of e) this._styles.set(i, t[i])
                } else this._styles.set(t, e)
            }

            _removeStyle(t) {
                this._fireChange("attributes", this), (t = Array.isArray(t) ? t : [t]).forEach(t => this._styles.delete(t))
            }

            _setCustomProperty(t, e) {
                this._customProperties.set(t, e)
            }

            _removeCustomProperty(t) {
                return this._customProperties.delete(t)
            }
        }

        function _n(t, e) {
            let i = null, n = 0, o = 0, r = null;
            if (t.clear(), "" !== e) {
                ";" != e.charAt(e.length - 1) && (e += ";");
                for (let s = 0; s < e.length; s++) {
                    const a = e.charAt(s);
                    if (null === i) switch (a) {
                        case":":
                            r || (r = e.substr(n, s - n), o = s + 1);
                            break;
                        case'"':
                        case"'":
                            i = a;
                            break;
                        case";": {
                            const i = e.substr(o, s - o);
                            r && t.set(r.trim(), i.trim()), r = null, n = s + 1;
                            break
                        }
                    } else a === i && (i = null)
                }
            }
        }

        function vn(t, e) {
            const i = e.split(/\s+/);
            t.clear(), i.forEach(e => t.add(e))
        }

        class yn extends kn {
            constructor(t, e, i) {
                super(t, e, i), this.getFillerOffset = xn
            }

            is(t, e = null) {
                const i = t && t.replace(/^view:/, "");
                return e ? "containerElement" == i && e == this.name || super.is(t, e) : "containerElement" == i || super.is(t)
            }
        }

        function xn() {
            const t = [...this.getChildren()], e = t[this.childCount - 1];
            if (e && e.is("element", "br")) return this.childCount;
            for (const e of t) if (!e.is("uiElement")) return null;
            return this.childCount
        }

        var An = function (t) {
            return t
        };
        var Tn = function (t, e, i) {
            switch (i.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, i[0]);
                case 2:
                    return t.call(e, i[0], i[1]);
                case 3:
                    return t.call(e, i[0], i[1], i[2])
            }
            return t.apply(e, i)
        }, Cn = Math.max;
        var Pn = function (t, e, i) {
            return e = Cn(void 0 === e ? t.length - 1 : e, 0), function () {
                for (var n = arguments, o = -1, r = Cn(n.length - e, 0), s = Array(r); ++o < r;) s[o] = n[e + o];
                o = -1;
                for (var a = Array(e + 1); ++o < e;) a[o] = n[o];
                return a[e] = i(s), Tn(t, this, a)
            }
        };
        var Sn = function (t) {
            return function () {
                return t
            }
        }, En = Ot ? function (t, e) {
            return Ot(t, "toString", {configurable: !0, enumerable: !1, value: Sn(e), writable: !0})
        } : An, Mn = 800, In = 16, Nn = Date.now;
        var On = function (t) {
            var e = 0, i = 0;
            return function () {
                var n = Nn(), o = In - (n - i);
                if (i = n, o > 0) {
                    if (++e >= Mn) return arguments[0]
                } else e = 0;
                return t.apply(void 0, arguments)
            }
        }(En);
        var Rn = function (t, e) {
            return On(Pn(t, e, An), t + "")
        };
        var Dn = function (t, e, i) {
            if (!B(i)) return !1;
            var n = typeof e;
            return !!("number" == n ? he(i) && Qt(e, i.length) : "string" == n && e in i) && P(i[e], t)
        };
        var Ln = function (t) {
            return Rn(function (e, i) {
                var n = -1, o = i.length, r = o > 1 ? i[o - 1] : void 0, s = o > 2 ? i[2] : void 0;
                for (r = t.length > 3 && "function" == typeof r ? (o--, r) : void 0, s && Dn(i[0], i[1], s) && (r = o < 3 ? void 0 : r, o = 1), e = Object(e); ++n < o;) {
                    var a = i[n];
                    a && t(e, a, n, r)
                }
                return e
            })
        }(function (t, e) {
            jt(e, be(e), t)
        });
        const jn = Symbol("observableProperties"), zn = Symbol("boundObservables"), Vn = Symbol("boundProperties"),
            Bn = {
                set(t, e) {
                    if (B(t)) return void Object.keys(t).forEach(e => {
                        this.set(e, t[e])
                    }, this);
                    Hn(this);
                    const i = this[jn];
                    if (t in this && !i.has(t)) throw new Yi.b("observable-set-cannot-override: Cannot override an existing property.", this);
                    Object.defineProperty(this, t, {
                        enumerable: !0, configurable: !0, get: () => i.get(t), set(e) {
                            const n = i.get(t);
                            let o = this.fire("set:" + t, t, e, n);
                            void 0 === o && (o = e), n === o && i.has(t) || (i.set(t, o), this.fire("change:" + t, t, o, n))
                        }
                    }), this[t] = e
                }, bind(...t) {
                    if (!t.length || !qn(t)) throw new Yi.b("observable-bind-wrong-properties: All properties must be strings.", this);
                    if (new Set(t).size !== t.length) throw new Yi.b("observable-bind-duplicate-properties: Properties must be unique.", this);
                    Hn(this);
                    const e = this[Vn];
                    t.forEach(t => {
                        if (e.has(t)) throw new Yi.b("observable-bind-rebind: Cannot bind the same property more that once.", this)
                    });
                    const i = new Map;
                    return t.forEach(t => {
                        const n = {property: t, to: []};
                        e.set(t, n), i.set(t, n)
                    }), {to: Un, toMany: Wn, _observable: this, _bindProperties: t, _to: [], _bindings: i}
                }, unbind(...t) {
                    if (!(jn in this)) return;
                    const e = this[Vn], i = this[zn];
                    if (t.length) {
                        if (!qn(t)) throw new Yi.b("observable-unbind-wrong-properties: Properties must be strings.", this);
                        t.forEach(t => {
                            const n = e.get(t);
                            if (!n) return;
                            let o, r, s, a;
                            n.to.forEach(t => {
                                o = t[0], r = t[1], s = i.get(o), (a = s[r]).delete(n), a.size || delete s[r], Object.keys(s).length || (i.delete(o), this.stopListening(o, "change"))
                            }), e.delete(t)
                        })
                    } else i.forEach((t, e) => {
                        this.stopListening(e, "change")
                    }), i.clear(), e.clear()
                }, decorate(t) {
                    const e = this[t];
                    if (!e) throw new Yi.b("observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.", this, {
                        object: this,
                        methodName: t
                    });
                    this.on(t, (t, i) => {
                        t.return = e.apply(this, i)
                    }), this[t] = function (...e) {
                        return this.fire(t, e)
                    }
                }
            };
        Ln(Bn, tn);
        var Fn = Bn;

        function Hn(t) {
            jn in t || (Object.defineProperty(t, jn, {value: new Map}), Object.defineProperty(t, zn, {value: new Map}), Object.defineProperty(t, Vn, {value: new Map}))
        }

        function Un(...t) {
            const e = function (...t) {
                if (!t.length) throw new Yi.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.", null);
                const e = {to: []};
                let i;
                "function" == typeof t[t.length - 1] && (e.callback = t.pop());
                return t.forEach(t => {
                    if ("string" == typeof t) i.properties.push(t); else {
                        if ("object" != typeof t) throw new Yi.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.", null);
                        i = {observable: t, properties: []}, e.to.push(i)
                    }
                }), e
            }(...t), i = Array.from(this._bindings.keys()), n = i.length;
            if (!e.callback && e.to.length > 1) throw new Yi.b("observable-bind-to-no-callback: Binding multiple observables only possible with callback.", this);
            if (n > 1 && e.callback) throw new Yi.b("observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.", this);
            e.to.forEach(t => {
                if (t.properties.length && t.properties.length !== n) throw new Yi.b("observable-bind-to-properties-length: The number of properties must match.", this);
                t.properties.length || (t.properties = this._bindProperties)
            }), this._to = e.to, e.callback && (this._bindings.get(i[0]).callback = e.callback), function (t, e) {
                e.forEach(e => {
                    const i = t[zn];
                    let n;
                    i.get(e.observable) || t.listenTo(e.observable, "change", (o, r) => {
                        (n = i.get(e.observable)[r]) && n.forEach(e => {
                            $n(t, e.property)
                        })
                    })
                })
            }(this._observable, this._to), function (t) {
                let e;
                t._bindings.forEach((i, n) => {
                    t._to.forEach(o => {
                        e = o.properties[i.callback ? 0 : t._bindProperties.indexOf(n)], i.to.push([o.observable, e]), function (t, e, i, n) {
                            const o = t[zn], r = o.get(i), s = r || {};
                            s[n] || (s[n] = new Set);
                            s[n].add(e), r || o.set(i, s)
                        }(t._observable, i, o.observable, e)
                    })
                })
            }(this), this._bindProperties.forEach(t => {
                $n(this._observable, t)
            })
        }

        function Wn(t, e, i) {
            if (this._bindings.size > 1) throw new Yi.b("observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().", this);
            this.to(...function (t, e) {
                const i = t.map(t => [t, e]);
                return Array.prototype.concat.apply([], i)
            }(t, e), i)
        }

        function qn(t) {
            return t.every(t => "string" == typeof t)
        }

        function $n(t, e) {
            const i = t[Vn].get(e);
            let n;
            n = i.callback ? i.callback.apply(t, i.to.map(t => t[0][t[1]])) : (n = i.to[0])[0][n[1]], t.hasOwnProperty(e) ? t[e] = n : t.set(e, n)
        }

        const Yn = Symbol("document");

        class Gn extends yn {
            constructor(t, e, i) {
                super(t, e, i), this.set("isReadOnly", !1), this.set("isFocused", !1)
            }

            is(t, e = null) {
                const i = t && t.replace(/^view:/, "");
                return e ? "editableElement" == i && e == this.name || super.is(t, e) : "editableElement" == i || super.is(t)
            }

            destroy() {
                this.stopListening()
            }

            get document() {
                return this.getCustomProperty(Yn)
            }

            set _document(t) {
                if (this.getCustomProperty(Yn)) throw new Yi.b("view-editableelement-document-already-set: View document is already set.", this);
                this._setCustomProperty(Yn, t), this.bind("isReadOnly").to(t), this.bind("isFocused").to(t, "isFocused", e => e && t.selection.editableElement == this), this.listenTo(t.selection, "change", () => {
                    this.isFocused = t.isFocused && t.selection.editableElement == this
                })
            }
        }

        cn(Gn, Fn);
        const Qn = Symbol("rootName");

        class Kn extends Gn {
            constructor(t) {
                super(t), this.rootName = "main"
            }

            is(t, e = null) {
                const i = t.replace(/^view:/, "");
                return e ? "rootElement" == i && e == this.name || super.is(t, e) : "rootElement" == i || super.is(t)
            }

            get rootName() {
                return this.getCustomProperty(Qn)
            }

            set rootName(t) {
                this._setCustomProperty(Qn, t)
            }

            set _name(t) {
                this.name = t
            }
        }

        class Jn {
            constructor(t = {}) {
                if (!t.boundaries && !t.startPosition) throw new Yi.b("view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.", null);
                if (t.direction && "forward" != t.direction && "backward" != t.direction) throw new Yi.b("view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.", t.startPosition, {direction: t.direction});
                this.boundaries = t.boundaries || null, t.startPosition ? this.position = Zn._createAt(t.startPosition) : this.position = Zn._createAt(t.boundaries["backward" == t.direction ? "end" : "start"]), this.direction = t.direction || "forward", this.singleCharacters = !!t.singleCharacters, this.shallow = !!t.shallow, this.ignoreElementEnd = !!t.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null
            }

            [Symbol.iterator]() {
                return this
            }

            skip(t) {
                let e, i, n;
                do {
                    n = this.position, ({done: e, value: i} = this.next())
                } while (!e && t(i));
                e || (this.position = n)
            }

            next() {
                return "forward" == this.direction ? this._next() : this._previous()
            }

            _next() {
                let t = this.position.clone();
                const e = this.position, i = t.parent;
                if (null === i.parent && t.offset === i.childCount) return {done: !0};
                if (i === this._boundaryEndParent && t.offset == this.boundaries.end.offset) return {done: !0};
                let n;
                if (i instanceof fn) {
                    if (t.isAtEnd) return this.position = Zn._createAfter(i), this._next();
                    n = i.data[t.offset]
                } else n = i.getChild(t.offset);
                if (n instanceof kn) return this.shallow ? t.offset++ : t = new Zn(n, 0), this.position = t, this._formatReturnValue("elementStart", n, e, t, 1);
                if (n instanceof fn) {
                    if (this.singleCharacters) return t = new Zn(n, 0), this.position = t, this._next();
                    {
                        let i, o = n.data.length;
                        return n == this._boundaryEndParent ? (o = this.boundaries.end.offset, i = new gn(n, 0, o), t = Zn._createAfter(i)) : (i = new gn(n, 0, n.data.length), t.offset++), this.position = t, this._formatReturnValue("text", i, e, t, o)
                    }
                }
                if ("string" == typeof n) {
                    let n;
                    if (this.singleCharacters) n = 1; else {
                        n = (i === this._boundaryEndParent ? this.boundaries.end.offset : i.data.length) - t.offset
                    }
                    const o = new gn(i, t.offset, n);
                    return t.offset += n, this.position = t, this._formatReturnValue("text", o, e, t, n)
                }
                return t = Zn._createAfter(i), this.position = t, this.ignoreElementEnd ? this._next() : this._formatReturnValue("elementEnd", i, e, t)
            }

            _previous() {
                let t = this.position.clone();
                const e = this.position, i = t.parent;
                if (null === i.parent && 0 === t.offset) return {done: !0};
                if (i == this._boundaryStartParent && t.offset == this.boundaries.start.offset) return {done: !0};
                let n;
                if (i instanceof fn) {
                    if (t.isAtStart) return this.position = Zn._createBefore(i), this._previous();
                    n = i.data[t.offset - 1]
                } else n = i.getChild(t.offset - 1);
                if (n instanceof kn) return this.shallow ? (t.offset--, this.position = t, this._formatReturnValue("elementStart", n, e, t, 1)) : (t = new Zn(n, n.childCount), this.position = t, this.ignoreElementEnd ? this._previous() : this._formatReturnValue("elementEnd", n, e, t));
                if (n instanceof fn) {
                    if (this.singleCharacters) return t = new Zn(n, n.data.length), this.position = t, this._previous();
                    {
                        let i, o = n.data.length;
                        if (n == this._boundaryStartParent) {
                            const e = this.boundaries.start.offset;
                            o = (i = new gn(n, e, n.data.length - e)).data.length, t = Zn._createBefore(i)
                        } else i = new gn(n, 0, n.data.length), t.offset--;
                        return this.position = t, this._formatReturnValue("text", i, e, t, o)
                    }
                }
                if ("string" == typeof n) {
                    let n;
                    if (this.singleCharacters) n = 1; else {
                        const e = i === this._boundaryStartParent ? this.boundaries.start.offset : 0;
                        n = t.offset - e
                    }
                    t.offset -= n;
                    const o = new gn(i, t.offset, n);
                    return this.position = t, this._formatReturnValue("text", o, e, t, n)
                }
                return t = Zn._createBefore(i), this.position = t, this._formatReturnValue("elementStart", i, e, t, 1)
            }

            _formatReturnValue(t, e, i, n, o) {
                return e instanceof gn && (e.offsetInText + e.data.length == e.textNode.data.length && ("forward" != this.direction || this.boundaries && this.boundaries.end.isEqual(this.position) ? i = Zn._createAfter(e.textNode) : (n = Zn._createAfter(e.textNode), this.position = n)), 0 === e.offsetInText && ("backward" != this.direction || this.boundaries && this.boundaries.start.isEqual(this.position) ? i = Zn._createBefore(e.textNode) : (n = Zn._createBefore(e.textNode), this.position = n))), {
                    done: !1,
                    value: {type: t, item: e, previousPosition: i, nextPosition: n, length: o}
                }
            }
        }

        class Zn {
            constructor(t, e) {
                this.parent = t, this.offset = e
            }

            get nodeAfter() {
                return this.parent.is("text") ? null : this.parent.getChild(this.offset) || null
            }

            get nodeBefore() {
                return this.parent.is("text") ? null : this.parent.getChild(this.offset - 1) || null
            }

            get isAtStart() {
                return 0 === this.offset
            }

            get isAtEnd() {
                const t = this.parent.is("text") ? this.parent.data.length : this.parent.childCount;
                return this.offset === t
            }

            get root() {
                return this.parent.root
            }

            get editableElement() {
                let t = this.parent;
                for (; !(t instanceof Gn);) {
                    if (!t.parent) return null;
                    t = t.parent
                }
                return t
            }

            getShiftedBy(t) {
                const e = Zn._createAt(this), i = e.offset + t;
                return e.offset = i < 0 ? 0 : i, e
            }

            getLastMatchingPosition(t, e = {}) {
                e.startPosition = this;
                const i = new Jn(e);
                return i.skip(t), i.position
            }

            getAncestors() {
                return this.parent.is("documentFragment") ? [this.parent] : this.parent.getAncestors({includeSelf: !0})
            }

            getCommonAncestor(t) {
                const e = this.getAncestors(), i = t.getAncestors();
                let n = 0;
                for (; e[n] == i[n] && e[n];) n++;
                return 0 === n ? null : e[n - 1]
            }

            is(t) {
                return "position" == t || "view:position" == t
            }

            isEqual(t) {
                return this.parent == t.parent && this.offset == t.offset
            }

            isBefore(t) {
                return "before" == this.compareWith(t)
            }

            isAfter(t) {
                return "after" == this.compareWith(t)
            }

            compareWith(t) {
                if (this.root !== t.root) return "different";
                if (this.isEqual(t)) return "same";
                const e = this.parent.is("node") ? this.parent.getPath() : [],
                    i = t.parent.is("node") ? t.parent.getPath() : [];
                e.push(this.offset), i.push(t.offset);
                const n = ln(e, i);
                switch (n) {
                    case"prefix":
                        return "before";
                    case"extension":
                        return "after";
                    default:
                        return e[n] < i[n] ? "before" : "after"
                }
            }

            getWalker(t = {}) {
                return t.startPosition = this, new Jn(t)
            }

            clone() {
                return new Zn(this.parent, this.offset)
            }

            static _createAt(t, e) {
                if (t instanceof Zn) return new this(t.parent, t.offset);
                {
                    const i = t;
                    if ("end" == e) e = i.is("text") ? i.data.length : i.childCount; else {
                        if ("before" == e) return this._createBefore(i);
                        if ("after" == e) return this._createAfter(i);
                        if (0 !== e && !e) throw new Yi.b("view-createPositionAt-offset-required: View#createPositionAt() requires the offset when the first parameter is a view item.", i)
                    }
                    return new Zn(i, e)
                }
            }

            static _createAfter(t) {
                if (t.is("textProxy")) return new Zn(t.textNode, t.offsetInText + t.data.length);
                if (!t.parent) throw new Yi.b("view-position-after-root: You can not make position after root.", t, {root: t});
                return new Zn(t.parent, t.index + 1)
            }

            static _createBefore(t) {
                if (t.is("textProxy")) return new Zn(t.textNode, t.offsetInText);
                if (!t.parent) throw new Yi.b("view-position-before-root: You can not make position before root.", t, {root: t});
                return new Zn(t.parent, t.index)
            }
        }

        class Xn {
            constructor(t, e = null) {
                this.start = t.clone(), this.end = e ? e.clone() : t.clone()
            }

            * [Symbol.iterator]() {
                yield* new Jn({boundaries: this, ignoreElementEnd: !0})
            }

            get isCollapsed() {
                return this.start.isEqual(this.end)
            }

            get isFlat() {
                return this.start.parent === this.end.parent
            }

            get root() {
                return this.start.root
            }

            getEnlarged() {
                let t = this.start.getLastMatchingPosition(to, {direction: "backward"}),
                    e = this.end.getLastMatchingPosition(to);
                return t.parent.is("text") && t.isAtStart && (t = Zn._createBefore(t.parent)), e.parent.is("text") && e.isAtEnd && (e = Zn._createAfter(e.parent)), new Xn(t, e)
            }

            getTrimmed() {
                let t = this.start.getLastMatchingPosition(to);
                if (t.isAfter(this.end) || t.isEqual(this.end)) return new Xn(t, t);
                let e = this.end.getLastMatchingPosition(to, {direction: "backward"});
                const i = t.nodeAfter, n = e.nodeBefore;
                return i && i.is("text") && (t = new Zn(i, 0)), n && n.is("text") && (e = new Zn(n, n.data.length)), new Xn(t, e)
            }

            isEqual(t) {
                return this == t || this.start.isEqual(t.start) && this.end.isEqual(t.end)
            }

            containsPosition(t) {
                return t.isAfter(this.start) && t.isBefore(this.end)
            }

            containsRange(t, e = !1) {
                t.isCollapsed && (e = !1);
                const i = this.containsPosition(t.start) || e && this.start.isEqual(t.start),
                    n = this.containsPosition(t.end) || e && this.end.isEqual(t.end);
                return i && n
            }

            getDifference(t) {
                const e = [];
                return this.isIntersecting(t) ? (this.containsPosition(t.start) && e.push(new Xn(this.start, t.start)), this.containsPosition(t.end) && e.push(new Xn(t.end, this.end))) : e.push(this.clone()), e
            }

            getIntersection(t) {
                if (this.isIntersecting(t)) {
                    let e = this.start, i = this.end;
                    return this.containsPosition(t.start) && (e = t.start), this.containsPosition(t.end) && (i = t.end), new Xn(e, i)
                }
                return null
            }

            getWalker(t = {}) {
                return t.boundaries = this, new Jn(t)
            }

            getCommonAncestor() {
                return this.start.getCommonAncestor(this.end)
            }

            clone() {
                return new Xn(this.start, this.end)
            }

            * getItems(t = {}) {
                t.boundaries = this, t.ignoreElementEnd = !0;
                const e = new Jn(t);
                for (const t of e) yield t.item
            }

            * getPositions(t = {}) {
                t.boundaries = this;
                const e = new Jn(t);
                yield e.position;
                for (const t of e) yield t.nextPosition
            }

            is(t) {
                return "range" == t || "view:range" == t
            }

            isIntersecting(t) {
                return this.start.isBefore(t.end) && this.end.isAfter(t.start)
            }

            static _createFromParentsAndOffsets(t, e, i, n) {
                return new this(new Zn(t, e), new Zn(i, n))
            }

            static _createFromPositionAndShift(t, e) {
                const i = t, n = t.getShiftedBy(e);
                return e > 0 ? new this(i, n) : new this(n, i)
            }

            static _createIn(t) {
                return this._createFromParentsAndOffsets(t, 0, t, t.childCount)
            }

            static _createOn(t) {
                const e = t.is("textProxy") ? t.offsetSize : 1;
                return this._createFromPositionAndShift(Zn._createBefore(t), e)
            }
        }

        function to(t) {
            return !(!t.item.is("attributeElement") && !t.item.is("uiElement"))
        }

        function eo(t) {
            let e = 0;
            for (const i of t) e++;
            return e
        }

        class io {
            constructor(t = null, e, i) {
                this._ranges = [], this._lastRangeBackward = !1, this._isFake = !1, this._fakeSelectionLabel = "", this.setTo(t, e, i)
            }

            get isFake() {
                return this._isFake
            }

            get fakeSelectionLabel() {
                return this._fakeSelectionLabel
            }

            get anchor() {
                if (!this._ranges.length) return null;
                const t = this._ranges[this._ranges.length - 1];
                return (this._lastRangeBackward ? t.end : t.start).clone()
            }

            get focus() {
                if (!this._ranges.length) return null;
                const t = this._ranges[this._ranges.length - 1];
                return (this._lastRangeBackward ? t.start : t.end).clone()
            }

            get isCollapsed() {
                return 1 === this.rangeCount && this._ranges[0].isCollapsed
            }

            get rangeCount() {
                return this._ranges.length
            }

            get isBackward() {
                return !this.isCollapsed && this._lastRangeBackward
            }

            get editableElement() {
                return this.anchor ? this.anchor.editableElement : null
            }

            * getRanges() {
                for (const t of this._ranges) yield t.clone()
            }

            getFirstRange() {
                let t = null;
                for (const e of this._ranges) t && !e.start.isBefore(t.start) || (t = e);
                return t ? t.clone() : null
            }

            getLastRange() {
                let t = null;
                for (const e of this._ranges) t && !e.end.isAfter(t.end) || (t = e);
                return t ? t.clone() : null
            }

            getFirstPosition() {
                const t = this.getFirstRange();
                return t ? t.start.clone() : null
            }

            getLastPosition() {
                const t = this.getLastRange();
                return t ? t.end.clone() : null
            }

            isEqual(t) {
                if (this.isFake != t.isFake) return !1;
                if (this.isFake && this.fakeSelectionLabel != t.fakeSelectionLabel) return !1;
                if (this.rangeCount != t.rangeCount) return !1;
                if (0 === this.rangeCount) return !0;
                if (!this.anchor.isEqual(t.anchor) || !this.focus.isEqual(t.focus)) return !1;
                for (const e of this._ranges) {
                    let i = !1;
                    for (const n of t._ranges) if (e.isEqual(n)) {
                        i = !0;
                        break
                    }
                    if (!i) return !1
                }
                return !0
            }

            isSimilar(t) {
                if (this.isBackward != t.isBackward) return !1;
                const e = eo(this.getRanges());
                if (e != eo(t.getRanges())) return !1;
                if (0 == e) return !0;
                for (let e of this.getRanges()) {
                    e = e.getTrimmed();
                    let i = !1;
                    for (let n of t.getRanges()) if (n = n.getTrimmed(), e.start.isEqual(n.start) && e.end.isEqual(n.end)) {
                        i = !0;
                        break
                    }
                    if (!i) return !1
                }
                return !0
            }

            getSelectedElement() {
                if (1 !== this.rangeCount) return null;
                const t = this.getFirstRange();
                let e = t.start.nodeAfter, i = t.end.nodeBefore;
                return t.start.parent.is("text") && t.start.isAtEnd && t.start.parent.nextSibling && (e = t.start.parent.nextSibling), t.end.parent.is("text") && t.end.isAtStart && t.end.parent.previousSibling && (i = t.end.parent.previousSibling), e instanceof kn && e == i ? e : null
            }

            setTo(t, e, i) {
                if (null === t) this._setRanges([]), this._setFakeOptions(e); else if (t instanceof io || t instanceof no) this._setRanges(t.getRanges(), t.isBackward), this._setFakeOptions({
                    fake: t.isFake,
                    label: t.fakeSelectionLabel
                }); else if (t instanceof Xn) this._setRanges([t], e && e.backward), this._setFakeOptions(e); else if (t instanceof Zn) this._setRanges([new Xn(t)]), this._setFakeOptions(e); else if (t instanceof un) {
                    const n = !!i && !!i.backward;
                    let o;
                    if (void 0 === e) throw new Yi.b("view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.", this);
                    o = "in" == e ? Xn._createIn(t) : "on" == e ? Xn._createOn(t) : new Xn(Zn._createAt(t, e)), this._setRanges([o], n), this._setFakeOptions(i)
                } else {
                    if (!pn(t)) throw new Yi.b("view-selection-setTo-not-selectable: Cannot set selection to given place.", this);
                    this._setRanges(t, e && e.backward), this._setFakeOptions(e)
                }
                this.fire("change")
            }

            setFocus(t, e) {
                if (null === this.anchor) throw new Yi.b("view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.", this);
                const i = Zn._createAt(t, e);
                if ("same" == i.compareWith(this.focus)) return;
                const n = this.anchor;
                this._ranges.pop(), "before" == i.compareWith(n) ? this._addRange(new Xn(i, n), !0) : this._addRange(new Xn(n, i)), this.fire("change")
            }

            is(t) {
                return "selection" == t || "view:selection" == t
            }

            _setRanges(t, e = !1) {
                t = Array.from(t), this._ranges = [];
                for (const e of t) this._addRange(e);
                this._lastRangeBackward = !!e
            }

            _setFakeOptions(t = {}) {
                this._isFake = !!t.fake, this._fakeSelectionLabel = t.fake && t.label || ""
            }

            _addRange(t, e = !1) {
                if (!(t instanceof Xn)) throw new Yi.b("view-selection-add-range-not-range: Selection range set to an object that is not an instance of view.Range", this);
                this._pushRange(t), this._lastRangeBackward = !!e
            }

            _pushRange(t) {
                for (const e of this._ranges) if (t.isIntersecting(e)) throw new Yi.b("view-selection-range-intersects: Trying to add a range that intersects with another range from selection.", this, {
                    addedRange: t,
                    intersectingRange: e
                });
                this._ranges.push(new Xn(t.start, t.end))
            }
        }

        cn(io, tn);

        class no {
            constructor(t = null, e, i) {
                this._selection = new io, this._selection.delegate("change").to(this), this._selection.setTo(t, e, i)
            }

            get isFake() {
                return this._selection.isFake
            }

            get fakeSelectionLabel() {
                return this._selection.fakeSelectionLabel
            }

            get anchor() {
                return this._selection.anchor
            }

            get focus() {
                return this._selection.focus
            }

            get isCollapsed() {
                return this._selection.isCollapsed
            }

            get rangeCount() {
                return this._selection.rangeCount
            }

            get isBackward() {
                return this._selection.isBackward
            }

            get editableElement() {
                return this._selection.editableElement
            }

            get _ranges() {
                return this._selection._ranges
            }

            * getRanges() {
                yield* this._selection.getRanges()
            }

            getFirstRange() {
                return this._selection.getFirstRange()
            }

            getLastRange() {
                return this._selection.getLastRange()
            }

            getFirstPosition() {
                return this._selection.getFirstPosition()
            }

            getLastPosition() {
                return this._selection.getLastPosition()
            }

            getSelectedElement() {
                return this._selection.getSelectedElement()
            }

            isEqual(t) {
                return this._selection.isEqual(t)
            }

            isSimilar(t) {
                return this._selection.isSimilar(t)
            }

            is(t) {
                return "selection" == t || "documentSelection" == t || "view:selection" == t || "view:documentSelection" == t
            }

            _setTo(t, e, i) {
                this._selection.setTo(t, e, i)
            }

            _setFocus(t, e) {
                this._selection.setFocus(t, e)
            }
        }

        cn(no, tn);

        class oo {
            constructor(t = {}) {
                this._items = [], this._itemMap = new Map, this._idProperty = t.idProperty || "id", this._bindToExternalToInternalMap = new WeakMap, this._bindToInternalToExternalMap = new WeakMap, this._skippedIndexesFromExternal = []
            }

            get length() {
                return this._items.length
            }

            get first() {
                return this._items[0] || null
            }

            get last() {
                return this._items[this.length - 1] || null
            }

            add(t, e) {
                let i;
                const n = this._idProperty;
                if (n in t) {
                    if ("string" != typeof (i = t[n])) throw new Yi.b("collection-add-invalid-id", this);
                    if (this.get(i)) throw new Yi.b("collection-add-item-already-exists", this)
                } else t[n] = i = Ki();
                if (void 0 === e) e = this._items.length; else if (e > this._items.length || e < 0) throw new Yi.b("collection-add-item-invalid-index", this);
                return this._items.splice(e, 0, t), this._itemMap.set(i, t), this.fire("add", t, e), this
            }

            get(t) {
                let e;
                if ("string" == typeof t) e = this._itemMap.get(t); else {
                    if ("number" != typeof t) throw new Yi.b("collection-get-invalid-arg: Index or id must be given.", this);
                    e = this._items[t]
                }
                return e || null
            }

            has(t) {
                if ("string" == typeof t) return this._itemMap.has(t);
                {
                    const e = t[this._idProperty];
                    return this._itemMap.has(e)
                }
            }

            getIndex(t) {
                let e;
                return e = "string" == typeof t ? this._itemMap.get(t) : t, this._items.indexOf(e)
            }

            remove(t) {
                let e, i, n, o = !1;
                const r = this._idProperty;
                if ("string" == typeof t ? (i = t, o = !(n = this._itemMap.get(i)), n && (e = this._items.indexOf(n))) : "number" == typeof t ? (e = t, o = !(n = this._items[e]), n && (i = n[r])) : (i = (n = t)[r], o = -1 == (e = this._items.indexOf(n)) || !this._itemMap.get(i)), o) throw new Yi.b("collection-remove-404: Item not found.", this);
                this._items.splice(e, 1), this._itemMap.delete(i);
                const s = this._bindToInternalToExternalMap.get(n);
                return this._bindToInternalToExternalMap.delete(n), this._bindToExternalToInternalMap.delete(s), this.fire("remove", n, e), n
            }

            map(t, e) {
                return this._items.map(t, e)
            }

            find(t, e) {
                return this._items.find(t, e)
            }

            filter(t, e) {
                return this._items.filter(t, e)
            }

            clear() {
                for (this._bindToCollection && (this.stopListening(this._bindToCollection), this._bindToCollection = null); this.length;) this.remove(0)
            }

            bindTo(t) {
                if (this._bindToCollection) throw new Yi.b("collection-bind-to-rebind: The collection cannot be bound more than once.", this);
                return this._bindToCollection = t, {
                    as: t => {
                        this._setUpBindToBinding(e => new t(e))
                    }, using: t => {
                        "function" == typeof t ? this._setUpBindToBinding(e => t(e)) : this._setUpBindToBinding(e => e[t])
                    }
                }
            }

            _setUpBindToBinding(t) {
                const e = this._bindToCollection, i = (i, n, o) => {
                    const r = e._bindToCollection == this, s = e._bindToInternalToExternalMap.get(n);
                    if (r && s) this._bindToExternalToInternalMap.set(n, s), this._bindToInternalToExternalMap.set(s, n); else {
                        const i = t(n);
                        if (!i) return void this._skippedIndexesFromExternal.push(o);
                        let r = o;
                        for (const t of this._skippedIndexesFromExternal) o > t && r--;
                        for (const t of e._skippedIndexesFromExternal) r >= t && r++;
                        this._bindToExternalToInternalMap.set(n, i), this._bindToInternalToExternalMap.set(i, n), this.add(i, r);
                        for (let t = 0; t < e._skippedIndexesFromExternal.length; t++) r <= e._skippedIndexesFromExternal[t] && e._skippedIndexesFromExternal[t]++
                    }
                };
                for (const t of e) i(0, t, e.getIndex(t));
                this.listenTo(e, "add", i), this.listenTo(e, "remove", (t, e, i) => {
                    const n = this._bindToExternalToInternalMap.get(e);
                    n && this.remove(n), this._skippedIndexesFromExternal = this._skippedIndexesFromExternal.reduce((t, e) => (i < e && t.push(e - 1), i > e && t.push(e), t), [])
                })
            }

            [Symbol.iterator]() {
                return this._items[Symbol.iterator]()
            }
        }

        cn(oo, tn);

        class ro {
            constructor() {
                this.selection = new no, this.roots = new oo({idProperty: "rootName"}), this.set("isReadOnly", !1), this.set("isFocused", !1), this.set("isComposing", !1), this._postFixers = new Set
            }

            getRoot(t = "main") {
                return this.roots.get(t)
            }

            registerPostFixer(t) {
                this._postFixers.add(t)
            }

            destroy() {
                this.roots.map(t => t.destroy()), this.stopListening()
            }

            _callPostFixers(t) {
                let e = !1;
                do {
                    for (const i of this._postFixers) if (e = i(t)) break
                } while (e)
            }
        }

        cn(ro, Fn);
        const so = 10;

        class ao extends kn {
            constructor(t, e, i) {
                super(t, e, i), this.getFillerOffset = co, this._priority = so, this._id = null, this._clonesGroup = null
            }

            get priority() {
                return this._priority
            }

            get id() {
                return this._id
            }

            getElementsWithSameId() {
                if (null === this.id) throw new Yi.b("attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.", this);
                return new Set(this._clonesGroup)
            }

            is(t, e = null) {
                const i = t && t.replace(/^view:/, "");
                return e ? "attributeElement" == i && e == this.name || super.is(t, e) : "attributeElement" == i || super.is(t)
            }

            isSimilar(t) {
                return null !== this.id || null !== t.id ? this.id === t.id : super.isSimilar(t) && this.priority == t.priority
            }

            _clone(t) {
                const e = super._clone(t);
                return e._priority = this._priority, e._id = this._id, e
            }
        }

        function co() {
            if (lo(this)) return null;
            let t = this.parent;
            for (; t && t.is("attributeElement");) {
                if (lo(t) > 1) return null;
                t = t.parent
            }
            return !t || lo(t) > 1 ? null : this.childCount
        }

        function lo(t) {
            return Array.from(t.getChildren()).filter(t => !t.is("uiElement")).length
        }

        ao.DEFAULT_PRIORITY = so;

        class ho extends kn {
            constructor(t, e, i) {
                super(t, e, i), this.getFillerOffset = uo
            }

            is(t, e = null) {
                const i = t.replace(/^view:/, "");
                return e ? "emptyElement" == i && e == this.name || super.is(t, e) : "emptyElement" == i || super.is(t)
            }

            _insertChild(t, e) {
                if (e && (e instanceof un || Array.from(e).length > 0)) throw new Yi.b("view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.", [this, e])
            }
        }

        function uo() {
            return null
        }

        const fo = navigator.userAgent.toLowerCase();
        var go = {
            isMac: function (t) {
                return t.indexOf("macintosh") > -1
            }(fo), isEdge: function (t) {
                return !!t.match(/edge\/(\d+.?\d*)/)
            }(fo), isGecko: function (t) {
                return !!t.match(/gecko\/\d+/)
            }(fo), isSafari: function (t) {
                return t.indexOf(" applewebkit/") > -1 && -1 === t.indexOf("chrome")
            }(fo), isAndroid: function (t) {
                return t.indexOf("android") > -1
            }(fo), features: {
                isRegExpUnicodePropertySupported: function () {
                    let t = !1;
                    try {
                        t = 0 === "ć".search(new RegExp("[\\p{L}]", "u"))
                    } catch (t) {
                    }
                    return t
                }()
            }
        };
        const mo = {"⌘": "ctrl", "⇧": "shift", "⌥": "alt"}, po = {ctrl: "⌘", shift: "⇧", alt: "⌥"}, bo = function () {
            const t = {
                arrowleft: 37,
                arrowup: 38,
                arrowright: 39,
                arrowdown: 40,
                backspace: 8,
                delete: 46,
                enter: 13,
                space: 32,
                esc: 27,
                tab: 9,
                ctrl: 1114112,
                cmd: 1114112,
                shift: 2228224,
                alt: 4456448
            };
            for (let e = 65; e <= 90; e++) {
                const i = String.fromCharCode(e);
                t[i.toLowerCase()] = e
            }
            for (let e = 48; e <= 57; e++) t[e - 48] = e;
            for (let e = 112; e <= 123; e++) t["f" + (e - 111)] = e;
            return t
        }();

        function wo(t) {
            let e;
            if ("string" == typeof t) {
                if (!(e = bo[t.toLowerCase()])) throw new Yi.b("keyboard-unknown-key: Unknown key name.", null, {key: t})
            } else e = t.keyCode + (t.altKey ? bo.alt : 0) + (t.ctrlKey ? bo.ctrl : 0) + (t.shiftKey ? bo.shift : 0);
            return e
        }

        function ko(t) {
            return "string" == typeof t && (t = _o(t)), t.map(t => "string" == typeof t ? wo(t) : t).reduce((t, e) => e + t, 0)
        }

        function _o(t) {
            return t.split(/\s*\+\s*/)
        }

        class vo extends kn {
            constructor(t, e, i) {
                super(t, e, i), this.getFillerOffset = xo
            }

            is(t, e = null) {
                const i = t.replace(/^view:/, "");
                return e ? "uiElement" == i && e == this.name || super.is(t, e) : "uiElement" == i || super.is(t)
            }

            _insertChild(t, e) {
                if (e && (e instanceof un || Array.from(e).length > 0)) throw new Yi.b("view-uielement-cannot-add: Cannot add child nodes to UIElement instance.", this)
            }

            render(t) {
                return this.toDomElement(t)
            }

            toDomElement(t) {
                const e = t.createElement(this.name);
                for (const t of this.getAttributeKeys()) e.setAttribute(t, this.getAttribute(t));
                return e
            }
        }

        function yo(t) {
            t.document.on("keydown", (e, i) => (function (t, e, i) {
                if (e.keyCode == bo.arrowright) {
                    const t = e.domTarget.ownerDocument.defaultView.getSelection(),
                        n = 1 == t.rangeCount && t.getRangeAt(0).collapsed;
                    if (n || e.shiftKey) {
                        const e = t.focusNode, o = t.focusOffset, r = i.domPositionToView(e, o);
                        if (null === r) return;
                        let s = !1;
                        const a = r.getLastMatchingPosition(t => (t.item.is("uiElement") && (s = !0), !(!t.item.is("uiElement") && !t.item.is("attributeElement"))));
                        if (s) {
                            const e = i.viewPositionToDom(a);
                            n ? t.collapse(e.parent, e.offset) : t.extend(e.parent, e.offset)
                        }
                    }
                }
            })(0, i, t.domConverter))
        }

        function xo() {
            return null
        }

        class Ao {
            constructor(t) {
                this._children = [], t && this._insertChild(0, t)
            }

            [Symbol.iterator]() {
                return this._children[Symbol.iterator]()
            }

            get childCount() {
                return this._children.length
            }

            get isEmpty() {
                return 0 === this.childCount
            }

            get root() {
                return this
            }

            get parent() {
                return null
            }

            is(t) {
                return "documentFragment" == t || "view:documentFragment" == t
            }

            _appendChild(t) {
                return this._insertChild(this.childCount, t)
            }

            getChild(t) {
                return this._children[t]
            }

            getChildIndex(t) {
                return this._children.indexOf(t)
            }

            getChildren() {
                return this._children[Symbol.iterator]()
            }

            _insertChild(t, e) {
                this._fireChange("children", this);
                let i = 0;
                const n = function (t) {
                    if ("string" == typeof t) return [new fn(t)];
                    pn(t) || (t = [t]);
                    return Array.from(t).map(t => "string" == typeof t ? new fn(t) : t instanceof gn ? new fn(t.data) : t)
                }(e);
                for (const e of n) null !== e.parent && e._remove(), e.parent = this, this._children.splice(t, 0, e), t++, i++;
                return i
            }

            _removeChildren(t, e = 1) {
                this._fireChange("children", this);
                for (let i = t; i < t + e; i++) this._children[i].parent = null;
                return this._children.splice(t, e)
            }

            _fireChange(t, e) {
                this.fire("change:" + t, e)
            }
        }

        cn(Ao, tn);

        class To {
            constructor(t) {
                this.document = t, this._cloneGroups = new Map
            }

            setSelection(t, e, i) {
                this.document.selection._setTo(t, e, i)
            }

            setSelectionFocus(t, e) {
                this.document.selection._setFocus(t, e)
            }

            createText(t) {
                return new fn(t)
            }

            createAttributeElement(t, e, i = {}) {
                const n = new ao(t, e);
                return i.priority && (n._priority = i.priority), i.id && (n._id = i.id), n
            }

            createContainerElement(t, e) {
                return new yn(t, e)
            }

            createEditableElement(t, e) {
                const i = new Gn(t, e);
                return i._document = this.document, i
            }

            createEmptyElement(t, e) {
                return new ho(t, e)
            }

            createUIElement(t, e, i) {
                const n = new vo(t, e);
                return i && (n.render = i), n
            }

            setAttribute(t, e, i) {
                i._setAttribute(t, e)
            }

            removeAttribute(t, e) {
                e._removeAttribute(t)
            }

            addClass(t, e) {
                e._addClass(t)
            }

            removeClass(t, e) {
                e._removeClass(t)
            }

            setStyle(t, e, i) {
                T(t) && void 0 === i && (i = e), i._setStyle(t, e)
            }

            removeStyle(t, e) {
                e._removeStyle(t)
            }

            setCustomProperty(t, e, i) {
                i._setCustomProperty(t, e)
            }

            removeCustomProperty(t, e) {
                return e._removeCustomProperty(t)
            }

            breakAttributes(t) {
                return t instanceof Zn ? this._breakAttributes(t) : this._breakAttributesRange(t)
            }

            breakContainer(t) {
                const e = t.parent;
                if (!e.is("containerElement")) throw new Yi.b("view-writer-break-non-container-element: Trying to break an element which is not a container element.", this.document);
                if (!e.parent) throw new Yi.b("view-writer-break-root: Trying to break root element.", this.document);
                if (t.isAtStart) return Zn._createBefore(e);
                if (!t.isAtEnd) {
                    const i = e._clone(!1);
                    this.insert(Zn._createAfter(e), i);
                    const n = new Xn(t, Zn._createAt(e, "end")), o = new Zn(i, 0);
                    this.move(n, o)
                }
                return Zn._createAfter(e)
            }

            mergeAttributes(t) {
                const e = t.offset, i = t.parent;
                if (i.is("text")) return t;
                if (i.is("attributeElement") && 0 === i.childCount) {
                    const t = i.parent, e = i.index;
                    return i._remove(), this._removeFromClonedElementsGroup(i), this.mergeAttributes(new Zn(t, e))
                }
                const n = i.getChild(e - 1), o = i.getChild(e);
                if (!n || !o) return t;
                if (n.is("text") && o.is("text")) return Mo(n, o);
                if (n.is("attributeElement") && o.is("attributeElement") && n.isSimilar(o)) {
                    const t = n.childCount;
                    return n._appendChild(o.getChildren()), o._remove(), this._removeFromClonedElementsGroup(o), this.mergeAttributes(new Zn(n, t))
                }
                return t
            }

            mergeContainers(t) {
                const e = t.nodeBefore, i = t.nodeAfter;
                if (!(e && i && e.is("containerElement") && i.is("containerElement"))) throw new Yi.b("view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.", this.document);
                const n = e.getChild(e.childCount - 1),
                    o = n instanceof fn ? Zn._createAt(n, "end") : Zn._createAt(e, "end");
                return this.move(Xn._createIn(i), Zn._createAt(e, "end")), this.remove(Xn._createOn(i)), o
            }

            insert(t, e) {
                (function t(e, i) {
                    for (const n of e) {
                        if (!Io.some(t => n instanceof t)) throw new Yi.b("view-writer-insert-invalid-node", i);
                        n.is("text") || t(n.getChildren(), i)
                    }
                })(e = pn(e) ? [...e] : [e], this.document);
                const i = Co(t);
                if (!i) throw new Yi.b("view-writer-invalid-position-container", this.document);
                const n = this._breakAttributes(t, !0), o = i._insertChild(n.offset, e);
                for (const t of e) this._addToClonedElementsGroup(t);
                const r = n.getShiftedBy(o), s = this.mergeAttributes(n);
                if (0 === o) return new Xn(s, s);
                {
                    s.isEqual(n) || r.offset--;
                    const t = this.mergeAttributes(r);
                    return new Xn(s, t)
                }
            }

            remove(t) {
                const e = t instanceof Xn ? t : Xn._createOn(t);
                if (Oo(e, this.document), e.isCollapsed) return new Ao;
                const {start: i, end: n} = this._breakAttributesRange(e, !0), o = i.parent, r = n.offset - i.offset,
                    s = o._removeChildren(i.offset, r);
                for (const t of s) this._removeFromClonedElementsGroup(t);
                const a = this.mergeAttributes(i);
                return e.start = a, e.end = a.clone(), new Ao(s)
            }

            clear(t, e) {
                Oo(t, this.document);
                const i = t.getWalker({direction: "backward", ignoreElementEnd: !0});
                for (const n of i) {
                    const i = n.item;
                    let o;
                    if (i.is("element") && e.isSimilar(i)) o = Xn._createOn(i); else if (!n.nextPosition.isAfter(t.start) && i.is("textProxy")) {
                        const t = i.getAncestors().find(t => t.is("element") && e.isSimilar(t));
                        t && (o = Xn._createIn(t))
                    }
                    o && (o.end.isAfter(t.end) && (o.end = t.end), o.start.isBefore(t.start) && (o.start = t.start), this.remove(o))
                }
            }

            move(t, e) {
                let i;
                if (e.isAfter(t.end)) {
                    const n = (e = this._breakAttributes(e, !0)).parent, o = n.childCount;
                    t = this._breakAttributesRange(t, !0), i = this.remove(t), e.offset += n.childCount - o
                } else i = this.remove(t);
                return this.insert(e, i)
            }

            wrap(t, e) {
                if (!(e instanceof ao)) throw new Yi.b("view-writer-wrap-invalid-attribute", this.document);
                if (Oo(t, this.document), t.isCollapsed) {
                    let i = t.start;
                    i.parent.is("element") && !function (t) {
                        return Array.from(t.getChildren()).some(t => !t.is("uiElement"))
                    }(i.parent) && (i = i.getLastMatchingPosition(t => t.item.is("uiElement"))), i = this._wrapPosition(i, e);
                    const n = this.document.selection;
                    return n.isCollapsed && n.getFirstPosition().isEqual(t.start) && this.setSelection(i), new Xn(i)
                }
                return this._wrapRange(t, e)
            }

            unwrap(t, e) {
                if (!(e instanceof ao)) throw new Yi.b("view-writer-unwrap-invalid-attribute", this.document);
                if (Oo(t, this.document), t.isCollapsed) return t;
                const {start: i, end: n} = this._breakAttributesRange(t, !0), o = i.parent,
                    r = this._unwrapChildren(o, i.offset, n.offset, e), s = this.mergeAttributes(r.start);
                s.isEqual(r.start) || r.end.offset--;
                const a = this.mergeAttributes(r.end);
                return new Xn(s, a)
            }

            rename(t, e) {
                const i = new yn(t, e.getAttributes());
                return this.insert(Zn._createAfter(e), i), this.move(Xn._createIn(e), Zn._createAt(i, 0)), this.remove(Xn._createOn(e)), i
            }

            clearClonedElementsGroup(t) {
                this._cloneGroups.delete(t)
            }

            createPositionAt(t, e) {
                return Zn._createAt(t, e)
            }

            createPositionAfter(t) {
                return Zn._createAfter(t)
            }

            createPositionBefore(t) {
                return Zn._createBefore(t)
            }

            createRange(t, e) {
                return new Xn(t, e)
            }

            createRangeOn(t) {
                return Xn._createOn(t)
            }

            createRangeIn(t) {
                return Xn._createIn(t)
            }

            createSelection(t, e, i) {
                return new io(t, e, i)
            }

            _wrapChildren(t, e, i, n) {
                let o = e;
                const r = [];
                for (; o < i;) {
                    const e = t.getChild(o), i = e.is("text"), s = e.is("attributeElement"), a = e.is("emptyElement"),
                        c = e.is("uiElement");
                    if (s && this._wrapAttributeElement(n, e)) r.push(new Zn(t, o)); else if (i || a || c || s && Po(n, e)) {
                        const i = n._clone();
                        e._remove(), i._appendChild(e), t._insertChild(o, i), this._addToClonedElementsGroup(i), r.push(new Zn(t, o))
                    } else s && this._wrapChildren(e, 0, e.childCount, n);
                    o++
                }
                let s = 0;
                for (const t of r) {
                    if (t.offset -= s, t.offset == e) continue;
                    this.mergeAttributes(t).isEqual(t) || (s++, i--)
                }
                return Xn._createFromParentsAndOffsets(t, e, t, i)
            }

            _unwrapChildren(t, e, i, n) {
                let o = e;
                const r = [];
                for (; o < i;) {
                    const e = t.getChild(o);
                    if (e.is("attributeElement")) if (e.isSimilar(n)) {
                        const n = e.getChildren(), s = e.childCount;
                        e._remove(), t._insertChild(o, n), this._removeFromClonedElementsGroup(e), r.push(new Zn(t, o), new Zn(t, o + s)), o += s, i += s - 1
                    } else this._unwrapAttributeElement(n, e) ? (r.push(new Zn(t, o), new Zn(t, o + 1)), o++) : (this._unwrapChildren(e, 0, e.childCount, n), o++); else o++
                }
                let s = 0;
                for (const t of r) {
                    if (t.offset -= s, t.offset == e || t.offset == i) continue;
                    this.mergeAttributes(t).isEqual(t) || (s++, i--)
                }
                return Xn._createFromParentsAndOffsets(t, e, t, i)
            }

            _wrapRange(t, e) {
                const {start: i, end: n} = this._breakAttributesRange(t, !0), o = i.parent,
                    r = this._wrapChildren(o, i.offset, n.offset, e), s = this.mergeAttributes(r.start);
                s.isEqual(r.start) || r.end.offset--;
                const a = this.mergeAttributes(r.end);
                return new Xn(s, a)
            }

            _wrapPosition(t, e) {
                if (e.isSimilar(t.parent)) return So(t.clone());
                t.parent.is("text") && (t = Eo(t));
                const i = this.createAttributeElement();
                i._priority = Number.POSITIVE_INFINITY, i.isSimilar = (() => !1), t.parent._insertChild(t.offset, i);
                const n = new Xn(t, t.getShiftedBy(1));
                this.wrap(n, e);
                const o = new Zn(i.parent, i.index);
                i._remove();
                const r = o.nodeBefore, s = o.nodeAfter;
                return r instanceof fn && s instanceof fn ? Mo(r, s) : So(o)
            }

            _wrapAttributeElement(t, e) {
                if (!Ro(t, e)) return !1;
                if (t.name !== e.name || t.priority !== e.priority) return !1;
                for (const i of t.getAttributeKeys()) if ("class" !== i && "style" !== i && e.hasAttribute(i) && e.getAttribute(i) !== t.getAttribute(i)) return !1;
                for (const i of t.getStyleNames()) if (e.hasStyle(i) && e.getStyle(i) !== t.getStyle(i)) return !1;
                for (const i of t.getAttributeKeys()) "class" !== i && "style" !== i && (e.hasAttribute(i) || this.setAttribute(i, t.getAttribute(i), e));
                for (const i of t.getStyleNames()) e.hasStyle(i) || this.setStyle(i, t.getStyle(i), e);
                for (const i of t.getClassNames()) e.hasClass(i) || this.addClass(i, e);
                return !0
            }

            _unwrapAttributeElement(t, e) {
                if (!Ro(t, e)) return !1;
                if (t.name !== e.name || t.priority !== e.priority) return !1;
                for (const i of t.getAttributeKeys()) if ("class" !== i && "style" !== i && (!e.hasAttribute(i) || e.getAttribute(i) !== t.getAttribute(i))) return !1;
                if (!e.hasClass(...t.getClassNames())) return !1;
                for (const i of t.getStyleNames()) if (!e.hasStyle(i) || e.getStyle(i) !== t.getStyle(i)) return !1;
                for (const i of t.getAttributeKeys()) "class" !== i && "style" !== i && this.removeAttribute(i, e);
                return this.removeClass(Array.from(t.getClassNames()), e), this.removeStyle(Array.from(t.getStyleNames()), e), !0
            }

            _breakAttributesRange(t, e = !1) {
                const i = t.start, n = t.end;
                if (Oo(t, this.document), t.isCollapsed) {
                    const i = this._breakAttributes(t.start, e);
                    return new Xn(i, i)
                }
                const o = this._breakAttributes(n, e), r = o.parent.childCount, s = this._breakAttributes(i, e);
                return o.offset += o.parent.childCount - r, new Xn(s, o)
            }

            _breakAttributes(t, e = !1) {
                const i = t.offset, n = t.parent;
                if (t.parent.is("emptyElement")) throw new Yi.b("view-writer-cannot-break-empty-element", this.document);
                if (t.parent.is("uiElement")) throw new Yi.b("view-writer-cannot-break-ui-element", this.document);
                if (!e && n.is("text") && No(n.parent)) return t.clone();
                if (No(n)) return t.clone();
                if (n.is("text")) return this._breakAttributes(Eo(t), e);
                if (i == n.childCount) {
                    const t = new Zn(n.parent, n.index + 1);
                    return this._breakAttributes(t, e)
                }
                if (0 === i) {
                    const t = new Zn(n.parent, n.index);
                    return this._breakAttributes(t, e)
                }
                {
                    const t = n.index + 1, o = n._clone();
                    n.parent._insertChild(t, o), this._addToClonedElementsGroup(o);
                    const r = n.childCount - i, s = n._removeChildren(i, r);
                    o._appendChild(s);
                    const a = new Zn(n.parent, t);
                    return this._breakAttributes(a, e)
                }
            }

            _addToClonedElementsGroup(t) {
                if (!t.root.is("rootElement")) return;
                if (t.is("element")) for (const e of t.getChildren()) this._addToClonedElementsGroup(e);
                const e = t.id;
                if (!e) return;
                let i = this._cloneGroups.get(e);
                i || (i = new Set, this._cloneGroups.set(e, i)), i.add(t), t._clonesGroup = i
            }

            _removeFromClonedElementsGroup(t) {
                if (t.is("element")) for (const e of t.getChildren()) this._removeFromClonedElementsGroup(e);
                const e = t.id;
                if (!e) return;
                const i = this._cloneGroups.get(e);
                i && i.delete(t)
            }
        }

        function Co(t) {
            let e = t.parent;
            for (; !No(e);) {
                if (!e) return;
                e = e.parent
            }
            return e
        }

        function Po(t, e) {
            return t.priority < e.priority || !(t.priority > e.priority) && t.getIdentity() < e.getIdentity()
        }

        function So(t) {
            const e = t.nodeBefore;
            if (e && e.is("text")) return new Zn(e, e.data.length);
            const i = t.nodeAfter;
            return i && i.is("text") ? new Zn(i, 0) : t
        }

        function Eo(t) {
            if (t.offset == t.parent.data.length) return new Zn(t.parent.parent, t.parent.index + 1);
            if (0 === t.offset) return new Zn(t.parent.parent, t.parent.index);
            const e = t.parent.data.slice(t.offset);
            return t.parent._data = t.parent.data.slice(0, t.offset), t.parent.parent._insertChild(t.parent.index + 1, new fn(e)), new Zn(t.parent.parent, t.parent.index + 1)
        }

        function Mo(t, e) {
            const i = t.data.length;
            return t._data += e.data, e._remove(), new Zn(t, i)
        }

        const Io = [fn, ao, yn, ho, vo];

        function No(t) {
            return t && (t.is("containerElement") || t.is("documentFragment"))
        }

        function Oo(t, e) {
            const i = Co(t.start), n = Co(t.end);
            if (!i || !n || i !== n) throw new Yi.b("view-writer-invalid-range-container", e)
        }

        function Ro(t, e) {
            return null === t.id && null === e.id
        }

        function Do(t) {
            return "[object Text]" == Object.prototype.toString.call(t)
        }

        const Lo = t => t.createTextNode(" "), jo = t => {
            const e = t.createElement("br");
            return e.dataset.ckeFiller = !0, e
        }, zo = 7, Vo = (() => {
            let t = "";
            for (let e = 0; e < zo; e++) t += "​";
            return t
        })();

        function Bo(t) {
            return Do(t) && t.data.substr(0, zo) === Vo
        }

        function Fo(t) {
            return t.data.length == zo && Bo(t)
        }

        function Ho(t) {
            return Bo(t) ? t.data.slice(zo) : t.data
        }

        function Uo(t, e) {
            if (e.keyCode == bo.arrowleft) {
                const t = e.domTarget.ownerDocument.defaultView.getSelection();
                if (1 == t.rangeCount && t.getRangeAt(0).collapsed) {
                    const e = t.getRangeAt(0).startContainer, i = t.getRangeAt(0).startOffset;
                    Bo(e) && i <= zo && t.collapse(e, 0)
                }
            }
        }

        function Wo(t, e, i, n = !1) {
            i = i || function (t, e) {
                return t === e
            }, Array.isArray(t) || (t = Array.from(t)), Array.isArray(e) || (e = Array.from(e));
            const o = function (t, e, i) {
                const n = qo(t, e, i);
                if (-1 === n) return {firstIndex: -1, lastIndexOld: -1, lastIndexNew: -1};
                const o = $o(t, n), r = $o(e, n), s = qo(o, r, i), a = t.length - s, c = e.length - s;
                return {firstIndex: n, lastIndexOld: a, lastIndexNew: c}
            }(t, e, i);
            return n ? function (t, e) {
                const {firstIndex: i, lastIndexOld: n, lastIndexNew: o} = t;
                if (-1 === i) return Array(e).fill("equal");
                let r = [];
                i > 0 && (r = r.concat(Array(i).fill("equal")));
                o - i > 0 && (r = r.concat(Array(o - i).fill("insert")));
                n - i > 0 && (r = r.concat(Array(n - i).fill("delete")));
                o < e && (r = r.concat(Array(e - o).fill("equal")));
                return r
            }(o, e.length) : function (t, e) {
                const i = [], {firstIndex: n, lastIndexOld: o, lastIndexNew: r} = e;
                r - n > 0 && i.push({index: n, type: "insert", values: t.slice(n, r)});
                o - n > 0 && i.push({index: n + (r - n), type: "delete", howMany: o - n});
                return i
            }(e, o)
        }

        function qo(t, e, i) {
            for (let n = 0; n < Math.max(t.length, e.length); n++) if (void 0 === t[n] || void 0 === e[n] || !i(t[n], e[n])) return n;
            return -1
        }

        function $o(t, e) {
            return t.slice(e).reverse()
        }

        function Yo(t, e, i) {
            i = i || function (t, e) {
                return t === e
            };
            const n = t.length, o = e.length;
            if (n > 200 || o > 200 || n + o > 300) return Yo.fastDiff(t, e, i, !0);
            let r, s;
            if (o < n) {
                const i = t;
                t = e, e = i, r = "delete", s = "insert"
            } else r = "insert", s = "delete";
            const a = t.length, c = e.length, l = c - a, d = {}, h = {};

            function u(n) {
                const o = (void 0 !== h[n - 1] ? h[n - 1] : -1) + 1, l = void 0 !== h[n + 1] ? h[n + 1] : -1,
                    u = o > l ? -1 : 1;
                d[n + u] && (d[n] = d[n + u].slice(0)), d[n] || (d[n] = []), d[n].push(o > l ? r : s);
                let f = Math.max(o, l), g = f - n;
                for (; g < a && f < c && i(t[g], e[f]);) g++, f++, d[n].push("equal");
                return f
            }

            let f, g = 0;
            do {
                for (f = -g; f < l; f++) h[f] = u(f);
                for (f = l + g; f > l; f--) h[f] = u(f);
                h[l] = u(l), g++
            } while (h[l] !== c);
            return d[l].slice(1)
        }

        function Go(t, e, i) {
            t.insertBefore(i, t.childNodes[e] || null)
        }

        function Qo(t) {
            const e = t.parentNode;
            e && e.removeChild(t)
        }

        function Ko(t) {
            if (t) {
                if (t.defaultView) return t instanceof t.defaultView.Document;
                if (t.ownerDocument && t.ownerDocument.defaultView) return t instanceof t.ownerDocument.defaultView.Node
            }
            return !1
        }

        Yo.fastDiff = Wo;

        class Jo {
            constructor(t, e) {
                this.domDocuments = new Set, this.domConverter = t, this.markedAttributes = new Set, this.markedChildren = new Set, this.markedTexts = new Set, this.selection = e, this.isFocused = !1, this._inlineFiller = null, this._fakeSelectionContainer = null
            }

            markToSync(t, e) {
                if ("text" === t) this.domConverter.mapViewToDom(e.parent) && this.markedTexts.add(e); else {
                    if (!this.domConverter.mapViewToDom(e)) return;
                    if ("attributes" === t) this.markedAttributes.add(e); else {
                        if ("children" !== t) throw new Yi.b("view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.", this);
                        this.markedChildren.add(e)
                    }
                }
            }

            render() {
                let t;
                for (const t of this.markedChildren) this._updateChildrenMappings(t);
                this._inlineFiller && !this._isSelectionInInlineFiller() && this._removeInlineFiller(), this._inlineFiller ? t = this._getInlineFillerPosition() : this._needsInlineFillerAtSelection() && (t = this.selection.getFirstPosition(), this.markedChildren.add(t.parent));
                for (const t of this.markedAttributes) this._updateAttrs(t);
                for (const e of this.markedChildren) this._updateChildren(e, {inlineFillerPosition: t});
                for (const e of this.markedTexts) !this.markedChildren.has(e.parent) && this.domConverter.mapViewToDom(e.parent) && this._updateText(e, {inlineFillerPosition: t});
                if (t) {
                    const e = this.domConverter.viewPositionToDom(t), i = e.parent.ownerDocument;
                    Bo(e.parent) ? this._inlineFiller = e.parent : this._inlineFiller = Zo(i, e.parent, e.offset)
                } else this._inlineFiller = null;
                this._updateSelection(), this._updateFocus(), this.markedTexts.clear(), this.markedAttributes.clear(), this.markedChildren.clear()
            }

            _updateChildrenMappings(t) {
                const e = this.domConverter.mapViewToDom(t);
                if (!e) return;
                const i = this.domConverter.mapViewToDom(t).childNodes,
                    n = Array.from(this.domConverter.viewChildrenToDom(t, e.ownerDocument, {withChildren: !1})),
                    o = this._diffNodeLists(i, n), r = this._findReplaceActions(o, i, n);
                if (-1 !== r.indexOf("replace")) {
                    const e = {equal: 0, insert: 0, delete: 0};
                    for (const o of r) if ("replace" === o) {
                        const o = e.equal + e.insert, r = e.equal + e.delete, s = t.getChild(o);
                        s && !s.is("uiElement") && this._updateElementMappings(s, i[r]), Qo(n[o]), e.equal++
                    } else e[o]++
                }
            }

            _updateElementMappings(t, e) {
                this.domConverter.unbindDomElement(e), this.domConverter.bindElements(e, t), this.markedChildren.add(t), this.markedAttributes.add(t)
            }

            _getInlineFillerPosition() {
                const t = this.selection.getFirstPosition();
                return t.parent.is("text") ? Zn._createBefore(this.selection.getFirstPosition().parent) : t
            }

            _isSelectionInInlineFiller() {
                if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
                const t = this.selection.getFirstPosition(), e = this.domConverter.viewPositionToDom(t);
                return !!(e && Do(e.parent) && Bo(e.parent))
            }

            _removeInlineFiller() {
                const t = this._inlineFiller;
                if (!Bo(t)) throw new Yi.b("view-renderer-filler-was-lost: The inline filler node was lost.", this);
                Fo(t) ? t.parentNode.removeChild(t) : t.data = t.data.substr(zo), this._inlineFiller = null
            }

            _needsInlineFillerAtSelection() {
                if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
                const t = this.selection.getFirstPosition(), e = t.parent, i = t.offset;
                if (!this.domConverter.mapViewToDom(e.root)) return !1;
                if (!e.is("element")) return !1;
                if (!function (t) {
                    if ("false" == t.getAttribute("contenteditable")) return !1;
                    const e = t.findAncestor(t => t.hasAttribute("contenteditable"));
                    return !e || "true" == e.getAttribute("contenteditable")
                }(e)) return !1;
                if (i === e.getFillerOffset()) return !1;
                const n = t.nodeBefore, o = t.nodeAfter;
                return !(n instanceof fn || o instanceof fn)
            }

            _updateText(t, e) {
                const i = this.domConverter.findCorrespondingDomText(t),
                    n = this.domConverter.viewToDom(t, i.ownerDocument), o = i.data;
                let r = n.data;
                const s = e.inlineFillerPosition;
                if (s && s.parent == t.parent && s.offset == t.index && (r = Vo + r), o != r) {
                    const t = Wo(o, r);
                    for (const e of t) "insert" === e.type ? i.insertData(e.index, e.values.join("")) : i.deleteData(e.index, e.howMany)
                }
            }

            _updateAttrs(t) {
                const e = this.domConverter.mapViewToDom(t);
                if (!e) return;
                const i = Array.from(e.attributes).map(t => t.name), n = t.getAttributeKeys();
                for (const i of n) e.setAttribute(i, t.getAttribute(i));
                for (const n of i) t.hasAttribute(n) || e.removeAttribute(n)
            }

            _updateChildren(t, e) {
                const i = this.domConverter.mapViewToDom(t);
                if (!i) return;
                const n = e.inlineFillerPosition, o = this.domConverter.mapViewToDom(t).childNodes,
                    r = Array.from(this.domConverter.viewChildrenToDom(t, i.ownerDocument, {
                        bind: !0,
                        inlineFillerPosition: n
                    }));
                n && n.parent === t && Zo(i.ownerDocument, r, n.offset);
                const s = this._diffNodeLists(o, r);
                let a = 0;
                const c = new Set;
                for (const t of s) "insert" === t ? (Go(i, a, r[a]), a++) : "delete" === t ? (c.add(o[a]), Qo(o[a])) : (this._markDescendantTextToSync(this.domConverter.domToView(r[a])), a++);
                for (const t of c) t.parentNode || this.domConverter.unbindDomElement(t)
            }

            _diffNodeLists(t, e) {
                return Yo(t = function (t, e) {
                    const i = Array.from(t);
                    if (0 == i.length || !e) return i;
                    i[i.length - 1] == e && i.pop();
                    return i
                }(t, this._fakeSelectionContainer), e, function (t, e, i) {
                    if (e === i) return !0;
                    if (Do(e) && Do(i)) return e.data === i.data;
                    if (t.isBlockFiller(e) && t.isBlockFiller(i)) return !0;
                    return !1
                }.bind(null, this.domConverter))
            }

            _findReplaceActions(t, e, i) {
                if (-1 === t.indexOf("insert") || -1 === t.indexOf("delete")) return t;
                let n = [], o = [], r = [];
                const s = {equal: 0, insert: 0, delete: 0};
                for (const a of t) "insert" === a ? r.push(i[s.equal + s.insert]) : "delete" === a ? o.push(e[s.equal + s.delete]) : ((n = n.concat(Yo(o, r, Xo).map(t => "equal" === t ? "replace" : t))).push("equal"), o = [], r = []), s[a]++;
                return n.concat(Yo(o, r, Xo).map(t => "equal" === t ? "replace" : t))
            }

            _markDescendantTextToSync(t) {
                if (t) if (t.is("text")) this.markedTexts.add(t); else if (t.is("element")) for (const e of t.getChildren()) this._markDescendantTextToSync(e)
            }

            _updateSelection() {
                if (0 === this.selection.rangeCount) return this._removeDomSelection(), void this._removeFakeSelection();
                const t = this.domConverter.mapViewToDom(this.selection.editableElement);
                this.isFocused && t && (this.selection.isFake ? this._updateFakeSelection(t) : (this._removeFakeSelection(), this._updateDomSelection(t)))
            }

            _updateFakeSelection(t) {
                const e = t.ownerDocument;
                this._fakeSelectionContainer || (this._fakeSelectionContainer = function (t) {
                    const e = t.createElement("div");
                    return Object.assign(e.style, {
                        position: "fixed",
                        top: 0,
                        left: "-9999px",
                        width: "42px"
                    }), e.textContent = " ", e
                }(e));
                const i = this._fakeSelectionContainer;
                if (this.domConverter.bindFakeSelection(i, this.selection), !this._fakeSelectionNeedsUpdate(t)) return;
                i.parentElement && i.parentElement == t || t.appendChild(i), i.textContent = this.selection.fakeSelectionLabel || " ";
                const n = e.getSelection(), o = e.createRange();
                n.removeAllRanges(), o.selectNodeContents(i), n.addRange(o)
            }

            _updateDomSelection(t) {
                const e = t.ownerDocument.defaultView.getSelection();
                if (!this._domSelectionNeedsUpdate(e)) return;
                const i = this.domConverter.viewPositionToDom(this.selection.anchor),
                    n = this.domConverter.viewPositionToDom(this.selection.focus);
                t.focus(), e.collapse(i.parent, i.offset), e.extend(n.parent, n.offset), go.isGecko && function (t, e) {
                    const i = t.parent;
                    if (i.nodeType != Node.ELEMENT_NODE || t.offset != i.childNodes.length - 1) return;
                    const n = i.childNodes[t.offset];
                    n && "BR" == n.tagName && e.addRange(e.getRangeAt(0))
                }(n, e)
            }

            _domSelectionNeedsUpdate(t) {
                if (!this.domConverter.isDomSelectionCorrect(t)) return !0;
                const e = t && this.domConverter.domSelectionToView(t);
                return (!e || !this.selection.isEqual(e)) && !(!this.selection.isCollapsed && this.selection.isSimilar(e))
            }

            _fakeSelectionNeedsUpdate(t) {
                const e = this._fakeSelectionContainer, i = t.ownerDocument.getSelection();
                return !e || e.parentElement !== t || (i.anchorNode !== e && !e.contains(i.anchorNode) || e.textContent !== this.selection.fakeSelectionLabel)
            }

            _removeDomSelection() {
                for (const t of this.domDocuments) {
                    if (t.getSelection().rangeCount) {
                        const e = t.activeElement, i = this.domConverter.mapDomToView(e);
                        e && i && t.getSelection().removeAllRanges()
                    }
                }
            }

            _removeFakeSelection() {
                const t = this._fakeSelectionContainer;
                t && t.remove()
            }

            _updateFocus() {
                if (this.isFocused) {
                    const t = this.selection.editableElement;
                    t && this.domConverter.focus(t)
                }
            }
        }

        function Zo(t, e, i) {
            const n = e instanceof Array ? e : e.childNodes, o = n[i];
            if (Do(o)) return o.data = Vo + o.data, o;
            {
                const o = t.createTextNode(Vo);
                return Array.isArray(e) ? n.splice(i, 0, o) : Go(e, i, o), o
            }
        }

        function Xo(t, e) {
            return Ko(t) && Ko(e) && !Do(t) && !Do(e) && t.tagName.toLowerCase() === e.tagName.toLowerCase()
        }

        cn(Jo, Fn);
        var tr = {window: window, document: document};

        function er(t) {
            let e = 0;
            for (; t.previousSibling;) t = t.previousSibling, e++;
            return e
        }

        function ir(t) {
            const e = [];
            for (; t && t.nodeType != Node.DOCUMENT_NODE;) e.unshift(t), t = t.parentNode;
            return e
        }

        const nr = jo(document);

        class or {
            constructor(t = {}) {
                this.blockFillerMode = t.blockFillerMode || "br", this.preElements = ["pre"], this.blockElements = ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "li", "dd", "dt", "figcaption"], this._blockFiller = "br" == this.blockFillerMode ? jo : Lo, this._domToViewMapping = new WeakMap, this._viewToDomMapping = new WeakMap, this._fakeSelectionMapping = new WeakMap
            }

            bindFakeSelection(t, e) {
                this._fakeSelectionMapping.set(t, new io(e))
            }

            fakeSelectionToView(t) {
                return this._fakeSelectionMapping.get(t)
            }

            bindElements(t, e) {
                this._domToViewMapping.set(t, e), this._viewToDomMapping.set(e, t)
            }

            unbindDomElement(t) {
                const e = this._domToViewMapping.get(t);
                if (e) {
                    this._domToViewMapping.delete(t), this._viewToDomMapping.delete(e);
                    for (const e of Array.from(t.childNodes)) this.unbindDomElement(e)
                }
            }

            bindDocumentFragments(t, e) {
                this._domToViewMapping.set(t, e), this._viewToDomMapping.set(e, t)
            }

            viewToDom(t, e, i = {}) {
                if (t.is("text")) {
                    const i = this._processDataFromViewText(t);
                    return e.createTextNode(i)
                }
                {
                    if (this.mapViewToDom(t)) return this.mapViewToDom(t);
                    let n;
                    if (t.is("documentFragment")) n = e.createDocumentFragment(), i.bind && this.bindDocumentFragments(n, t); else {
                        if (t.is("uiElement")) return n = t.render(e), i.bind && this.bindElements(n, t), n;
                        n = t.hasAttribute("xmlns") ? e.createElementNS(t.getAttribute("xmlns"), t.name) : e.createElement(t.name), i.bind && this.bindElements(n, t);
                        for (const e of t.getAttributeKeys()) n.setAttribute(e, t.getAttribute(e))
                    }
                    if (i.withChildren || void 0 === i.withChildren) for (const o of this.viewChildrenToDom(t, e, i)) n.appendChild(o);
                    return n
                }
            }

            * viewChildrenToDom(t, e, i = {}) {
                const n = t.getFillerOffset && t.getFillerOffset();
                let o = 0;
                for (const r of t.getChildren()) n === o && (yield this._blockFiller(e)), yield this.viewToDom(r, e, i), o++;
                n === o && (yield this._blockFiller(e))
            }

            viewRangeToDom(t) {
                const e = this.viewPositionToDom(t.start), i = this.viewPositionToDom(t.end),
                    n = document.createRange();
                return n.setStart(e.parent, e.offset), n.setEnd(i.parent, i.offset), n
            }

            viewPositionToDom(t) {
                const e = t.parent;
                if (e.is("text")) {
                    const i = this.findCorrespondingDomText(e);
                    if (!i) return null;
                    let n = t.offset;
                    return Bo(i) && (n += zo), {parent: i, offset: n}
                }
                {
                    let i, n, o;
                    if (0 === t.offset) {
                        if (!(i = this.mapViewToDom(e))) return null;
                        o = i.childNodes[0]
                    } else {
                        const e = t.nodeBefore;
                        if (!(n = e.is("text") ? this.findCorrespondingDomText(e) : this.mapViewToDom(t.nodeBefore))) return null;
                        i = n.parentNode, o = n.nextSibling
                    }
                    if (Do(o) && Bo(o)) return {parent: o, offset: zo};
                    return {parent: i, offset: n ? er(n) + 1 : 0}
                }
            }

            domToView(t, e = {}) {
                if (this.isBlockFiller(t, this.blockFillerMode)) return null;
                const i = this.getParentUIElement(t, this._domToViewMapping);
                if (i) return i;
                if (Do(t)) {
                    if (Fo(t)) return null;
                    {
                        const e = this._processDataFromDomText(t);
                        return "" === e ? null : new fn(e)
                    }
                }
                if (this.isComment(t)) return null;
                {
                    if (this.mapDomToView(t)) return this.mapDomToView(t);
                    let i;
                    if (this.isDocumentFragment(t)) i = new Ao, e.bind && this.bindDocumentFragments(t, i); else {
                        const n = e.keepOriginalCase ? t.tagName : t.tagName.toLowerCase();
                        i = new kn(n), e.bind && this.bindElements(t, i);
                        const o = t.attributes;
                        for (let t = o.length - 1; t >= 0; t--) i._setAttribute(o[t].name, o[t].value)
                    }
                    if (e.withChildren || void 0 === e.withChildren) for (const n of this.domChildrenToView(t, e)) i._appendChild(n);
                    return i
                }
            }

            * domChildrenToView(t, e = {}) {
                for (let i = 0; i < t.childNodes.length; i++) {
                    const n = t.childNodes[i], o = this.domToView(n, e);
                    null !== o && (yield o)
                }
            }

            domSelectionToView(t) {
                if (1 === t.rangeCount) {
                    let e = t.getRangeAt(0).startContainer;
                    Do(e) && (e = e.parentNode);
                    const i = this.fakeSelectionToView(e);
                    if (i) return i
                }
                const e = this.isDomSelectionBackward(t), i = [];
                for (let e = 0; e < t.rangeCount; e++) {
                    const n = t.getRangeAt(e), o = this.domRangeToView(n);
                    o && i.push(o)
                }
                return new io(i, {backward: e})
            }

            domRangeToView(t) {
                const e = this.domPositionToView(t.startContainer, t.startOffset),
                    i = this.domPositionToView(t.endContainer, t.endOffset);
                return e && i ? new Xn(e, i) : null
            }

            domPositionToView(t, e) {
                if (this.isBlockFiller(t, this.blockFillerMode)) return this.domPositionToView(t.parentNode, er(t));
                const i = this.mapDomToView(t);
                if (i && i.is("uiElement")) return Zn._createBefore(i);
                if (Do(t)) {
                    if (Fo(t)) return this.domPositionToView(t.parentNode, er(t));
                    const i = this.findCorrespondingViewText(t);
                    let n = e;
                    return i ? (Bo(t) && (n = (n -= zo) < 0 ? 0 : n), new Zn(i, n)) : null
                }
                if (0 === e) {
                    const e = this.mapDomToView(t);
                    if (e) return new Zn(e, 0)
                } else {
                    const i = t.childNodes[e - 1], n = Do(i) ? this.findCorrespondingViewText(i) : this.mapDomToView(i);
                    if (n && n.parent) return new Zn(n.parent, n.index + 1)
                }
                return null
            }

            mapDomToView(t) {
                return this.getParentUIElement(t) || this._domToViewMapping.get(t)
            }

            findCorrespondingViewText(t) {
                if (Fo(t)) return null;
                const e = this.getParentUIElement(t);
                if (e) return e;
                const i = t.previousSibling;
                if (i) {
                    if (!this.isElement(i)) return null;
                    const t = this.mapDomToView(i);
                    if (t) {
                        return t.nextSibling instanceof fn ? t.nextSibling : null
                    }
                } else {
                    const e = this.mapDomToView(t.parentNode);
                    if (e) {
                        const t = e.getChild(0);
                        return t instanceof fn ? t : null
                    }
                }
                return null
            }

            mapViewToDom(t) {
                return this._viewToDomMapping.get(t)
            }

            findCorrespondingDomText(t) {
                const e = t.previousSibling;
                return e && this.mapViewToDom(e) ? this.mapViewToDom(e).nextSibling : !e && t.parent && this.mapViewToDom(t.parent) ? this.mapViewToDom(t.parent).childNodes[0] : null
            }

            focus(t) {
                const e = this.mapViewToDom(t);
                if (e && e.ownerDocument.activeElement !== e) {
                    const {scrollX: t, scrollY: i} = tr.window, n = [];
                    sr(e, t => {
                        const {scrollLeft: e, scrollTop: i} = t;
                        n.push([e, i])
                    }), e.focus(), sr(e, t => {
                        const [e, i] = n.shift();
                        t.scrollLeft = e, t.scrollTop = i
                    }), tr.window.scrollTo(t, i)
                }
            }

            isElement(t) {
                return t && t.nodeType == Node.ELEMENT_NODE
            }

            isDocumentFragment(t) {
                return t && t.nodeType == Node.DOCUMENT_FRAGMENT_NODE
            }

            isComment(t) {
                return t && t.nodeType == Node.COMMENT_NODE
            }

            isBlockFiller(t) {
                return "br" == this.blockFillerMode ? t.isEqualNode(nr) : function (t, e) {
                    return Do(t) && " " == t.data && function (t, e) {
                        const i = t.parentNode;
                        return i && i.tagName && e.includes(i.tagName.toLowerCase())
                    }(t, e) && 1 === t.parentNode.childNodes.length
                }(t, this.blockElements)
            }

            isDomSelectionBackward(t) {
                if (t.isCollapsed) return !1;
                const e = document.createRange();
                e.setStart(t.anchorNode, t.anchorOffset), e.setEnd(t.focusNode, t.focusOffset);
                const i = e.collapsed;
                return e.detach(), i
            }

            getParentUIElement(t) {
                const e = ir(t);
                for (e.pop(); e.length;) {
                    const t = e.pop(), i = this._domToViewMapping.get(t);
                    if (i && i.is("uiElement")) return i
                }
                return null
            }

            isDomSelectionCorrect(t) {
                return this._isDomSelectionPositionCorrect(t.anchorNode, t.anchorOffset) && this._isDomSelectionPositionCorrect(t.focusNode, t.focusOffset)
            }

            _isDomSelectionPositionCorrect(t, e) {
                if (Do(t) && Bo(t) && e < zo) return !1;
                if (this.isElement(t) && Bo(t.childNodes[e])) return !1;
                const i = this.mapDomToView(t);
                return !i || !i.is("uiElement")
            }

            _processDataFromViewText(t) {
                let e = t.data;
                if (t.getAncestors().some(t => this.preElements.includes(t.name))) return e;
                if (" " == e.charAt(0)) {
                    const i = this._getTouchingViewTextNode(t, !1);
                    !(i && this._nodeEndsWithSpace(i)) && i || (e = " " + e.substr(1))
                }
                if (" " == e.charAt(e.length - 1)) {
                    const i = this._getTouchingViewTextNode(t, !0);
                    " " != e.charAt(e.length - 2) && i && " " != i.data.charAt(0) || (e = e.substr(0, e.length - 1) + " ")
                }
                return e.replace(/ {2}/g, "  ")
            }

            _nodeEndsWithSpace(t) {
                if (t.getAncestors().some(t => this.preElements.includes(t.name))) return !1;
                const e = this._processDataFromViewText(t);
                return " " == e.charAt(e.length - 1)
            }

            _processDataFromDomText(t) {
                let e = t.data;
                if (rr(t, this.preElements)) return Ho(t);
                e = e.replace(/[ \n\t\r]{1,}/g, " ");
                const i = this._getTouchingInlineDomNode(t, !1), n = this._getTouchingInlineDomNode(t, !0),
                    o = this._checkShouldLeftTrimDomText(i), r = this._checkShouldRightTrimDomText(t, n);
                return o && (e = e.replace(/^ /, "")), r && (e = e.replace(/ $/, "")), e = (e = Ho(new Text(e))).replace(/ \u00A0/g, "  "), (/( |\u00A0)\u00A0$/.test(e) || !n || n.data && " " == n.data.charAt(0)) && (e = e.replace(/\u00A0$/, " ")), o && (e = e.replace(/^\u00A0/, " ")), e
            }

            _checkShouldLeftTrimDomText(t) {
                return !t || (!!Wi(t) || /[^\S\u00A0]/.test(t.data.charAt(t.data.length - 1)))
            }

            _checkShouldRightTrimDomText(t, e) {
                return !e && !Bo(t)
            }

            _getTouchingViewTextNode(t, e) {
                const i = new Jn({
                    startPosition: e ? Zn._createAfter(t) : Zn._createBefore(t),
                    direction: e ? "forward" : "backward"
                });
                for (const t of i) {
                    if (t.item.is("containerElement")) return null;
                    if (t.item.is("br")) return null;
                    if (t.item.is("textProxy")) return t.item
                }
                return null
            }

            _getTouchingInlineDomNode(t, e) {
                if (!t.parentNode) return null;
                const i = e ? "nextNode" : "previousNode", n = t.ownerDocument, o = ir(t)[0],
                    r = n.createTreeWalker(o, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {acceptNode: t => Do(t) ? NodeFilter.FILTER_ACCEPT : "BR" == t.tagName ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP});
                r.currentNode = t;
                const s = r[i]();
                if (null !== s) {
                    const e = function (t, e) {
                        const i = ir(t), n = ir(e);
                        let o = 0;
                        for (; i[o] == n[o] && i[o];) o++;
                        return 0 === o ? null : i[o - 1]
                    }(t, s);
                    if (e && !rr(t, this.blockElements, e) && !rr(s, this.blockElements, e)) return s
                }
                return null
            }
        }

        function rr(t, e, i) {
            let n = ir(t);
            return i && (n = n.slice(n.indexOf(i) + 1)), n.some(t => t.tagName && e.includes(t.tagName.toLowerCase()))
        }

        function sr(t, e) {
            for (; t && t != tr.document;) e(t), t = t.parentNode
        }

        function ar(t) {
            const e = Object.prototype.toString.apply(t);
            return "[object Window]" == e || "[object global]" == e
        }

        var cr = Ln({}, tn, {
            listenTo(t, ...e) {
                if (Ko(t) || ar(t)) {
                    const i = this._getProxyEmitter(t) || new lr(t);
                    i.attach(...e), t = i
                }
                tn.listenTo.call(this, t, ...e)
            }, stopListening(t, e, i) {
                if (Ko(t) || ar(t)) {
                    const e = this._getProxyEmitter(t);
                    if (!e) return;
                    t = e
                }
                tn.stopListening.call(this, t, e, i), t instanceof lr && t.detach(e)
            }, _getProxyEmitter(t) {
                return function (t, e) {
                    return t[Zi] && t[Zi][e] ? t[Zi][e].emitter : null
                }(this, dr(t))
            }
        });

        class lr {
            constructor(t) {
                en(this, dr(t)), this._domNode = t
            }
        }

        function dr(t) {
            return t["data-ck-expando"] || (t["data-ck-expando"] = Ki())
        }

        Ln(lr.prototype, tn, {
            attach(t, e, i = {}) {
                if (this._domListeners && this._domListeners[t]) return;
                const n = this._createDomListener(t, !!i.useCapture);
                this._domNode.addEventListener(t, n, !!i.useCapture), this._domListeners || (this._domListeners = {}), this._domListeners[t] = n
            }, detach(t) {
                let e;
                !this._domListeners[t] || (e = this._events[t]) && e.callbacks.length || this._domListeners[t].removeListener()
            }, _createDomListener(t, e) {
                const i = e => {
                    this.fire(t, e)
                };
                return i.removeListener = (() => {
                    this._domNode.removeEventListener(t, i, e), delete this._domListeners[t]
                }), i
            }
        });

        class hr {
            constructor(t) {
                this.view = t, this.document = t.document, this.isEnabled = !1
            }

            enable() {
                this.isEnabled = !0
            }

            disable() {
                this.isEnabled = !1
            }

            destroy() {
                this.disable(), this.stopListening()
            }
        }

        cn(hr, cr);
        var ur = "__lodash_hash_undefined__";
        var fr = function (t) {
            return this.__data__.set(t, ur), this
        };
        var gr = function (t) {
            return this.__data__.has(t)
        };

        function mr(t) {
            var e = -1, i = null == t ? 0 : t.length;
            for (this.__data__ = new Pt; ++e < i;) this.add(t[e])
        }

        mr.prototype.add = mr.prototype.push = fr, mr.prototype.has = gr;
        var pr = mr;
        var br = function (t, e) {
            for (var i = -1, n = null == t ? 0 : t.length; ++i < n;) if (e(t[i], i, t)) return !0;
            return !1
        };
        var wr = function (t, e) {
            return t.has(e)
        }, kr = 1, _r = 2;
        var vr = function (t, e, i, n, o, r) {
            var s = i & kr, a = t.length, c = e.length;
            if (a != c && !(s && c > a)) return !1;
            var l = r.get(t);
            if (l && r.get(e)) return l == e;
            var d = -1, h = !0, u = i & _r ? new pr : void 0;
            for (r.set(t, e), r.set(e, t); ++d < a;) {
                var f = t[d], g = e[d];
                if (n) var m = s ? n(g, f, d, e, t, r) : n(f, g, d, t, e, r);
                if (void 0 !== m) {
                    if (m) continue;
                    h = !1;
                    break
                }
                if (u) {
                    if (!br(e, function (t, e) {
                        if (!wr(u, e) && (f === t || o(f, t, i, n, r))) return u.push(e)
                    })) {
                        h = !1;
                        break
                    }
                } else if (f !== g && !o(f, g, i, n, r)) {
                    h = !1;
                    break
                }
            }
            return r.delete(t), r.delete(e), h
        };
        var yr = function (t) {
            var e = -1, i = Array(t.size);
            return t.forEach(function (t, n) {
                i[++e] = [n, t]
            }), i
        };
        var xr = function (t) {
                var e = -1, i = Array(t.size);
                return t.forEach(function (t) {
                    i[++e] = t
                }), i
            }, Ar = 1, Tr = 2, Cr = "[object Boolean]", Pr = "[object Date]", Sr = "[object Error]", Er = "[object Map]",
            Mr = "[object Number]", Ir = "[object RegExp]", Nr = "[object Set]", Or = "[object String]",
            Rr = "[object Symbol]", Dr = "[object ArrayBuffer]", Lr = "[object DataView]",
            jr = o ? o.prototype : void 0, zr = jr ? jr.valueOf : void 0;
        var Vr = function (t, e, i, n, o, r, s) {
            switch (i) {
                case Lr:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                    t = t.buffer, e = e.buffer;
                case Dr:
                    return !(t.byteLength != e.byteLength || !r(new $e(t), new $e(e)));
                case Cr:
                case Pr:
                case Mr:
                    return P(+t, +e);
                case Sr:
                    return t.name == e.name && t.message == e.message;
                case Ir:
                case Or:
                    return t == e + "";
                case Er:
                    var a = yr;
                case Nr:
                    var c = n & Ar;
                    if (a || (a = xr), t.size != e.size && !c) return !1;
                    var l = s.get(t);
                    if (l) return l == e;
                    n |= Tr, s.set(t, e);
                    var d = vr(a(t), a(e), n, o, r, s);
                    return s.delete(t), d;
                case Rr:
                    if (zr) return zr.call(t) == zr.call(e)
            }
            return !1
        }, Br = 1, Fr = Object.prototype.hasOwnProperty;
        var Hr = function (t, e, i, n, o, r) {
                var s = i & Br, a = Ie(t), c = a.length;
                if (c != Ie(e).length && !s) return !1;
                for (var l = c; l--;) {
                    var d = a[l];
                    if (!(s ? d in e : Fr.call(e, d))) return !1
                }
                var h = r.get(t);
                if (h && r.get(e)) return h == e;
                var u = !0;
                r.set(t, e), r.set(e, t);
                for (var f = s; ++l < c;) {
                    var g = t[d = a[l]], m = e[d];
                    if (n) var p = s ? n(m, g, d, e, t, r) : n(g, m, d, t, e, r);
                    if (!(void 0 === p ? g === m || o(g, m, i, n, r) : p)) {
                        u = !1;
                        break
                    }
                    f || (f = "constructor" == d)
                }
                if (u && !f) {
                    var b = t.constructor, w = e.constructor;
                    b != w && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) && (u = !1)
                }
                return r.delete(t), r.delete(e), u
            }, Ur = 1, Wr = "[object Arguments]", qr = "[object Array]", $r = "[object Object]",
            Yr = Object.prototype.hasOwnProperty;
        var Gr = function (t, e, i, n, o, r) {
            var s = qt(t), a = qt(e), c = s ? qr : Ue(t), l = a ? qr : Ue(e), d = (c = c == Wr ? $r : c) == $r,
                h = (l = l == Wr ? $r : l) == $r, u = c == l;
            if (u && Object($t.a)(t)) {
                if (!Object($t.a)(e)) return !1;
                s = !0, d = !1
            }
            if (u && !d) return r || (r = new It), s || ne(t) ? vr(t, e, i, n, o, r) : Vr(t, e, c, i, n, o, r);
            if (!(i & Ur)) {
                var f = d && Yr.call(t, "__wrapped__"), g = h && Yr.call(e, "__wrapped__");
                if (f || g) {
                    var m = f ? t.value() : t, p = g ? e.value() : e;
                    return r || (r = new It), o(m, p, i, n, r)
                }
            }
            return !!u && (r || (r = new It), Hr(t, e, i, n, o, r))
        };
        var Qr = function t(e, i, n, o, r) {
            return e === i || (null == e || null == i || !w(e) && !w(i) ? e != e && i != i : Gr(e, i, n, o, t, r))
        };
        var Kr = function (t, e, i) {
            var n = (i = "function" == typeof i ? i : void 0) ? i(t, e) : void 0;
            return void 0 === n ? Qr(t, e, void 0, i) : !!n
        };

        class Jr extends hr {
            constructor(t) {
                super(t), this._config = {
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    subtree: !0
                }, this.domConverter = t.domConverter, this.renderer = t._renderer, this._domElements = [], this._mutationObserver = new window.MutationObserver(this._onMutations.bind(this))
            }

            flush() {
                this._onMutations(this._mutationObserver.takeRecords())
            }

            observe(t) {
                this._domElements.push(t), this.isEnabled && this._mutationObserver.observe(t, this._config)
            }

            enable() {
                super.enable();
                for (const t of this._domElements) this._mutationObserver.observe(t, this._config)
            }

            disable() {
                super.disable(), this._mutationObserver.disconnect()
            }

            destroy() {
                super.destroy(), this._mutationObserver.disconnect()
            }

            _onMutations(t) {
                if (0 === t.length) return;
                const e = this.domConverter, i = new Map, n = new Set;
                for (const i of t) if ("childList" === i.type) {
                    const t = e.mapDomToView(i.target);
                    if (t && t.is("uiElement")) continue;
                    t && !this._isBogusBrMutation(i) && n.add(t)
                }
                for (const o of t) {
                    const t = e.mapDomToView(o.target);
                    if ((!t || !t.is("uiElement")) && "characterData" === o.type) {
                        const t = e.findCorrespondingViewText(o.target);
                        t && !n.has(t.parent) ? i.set(t, {
                            type: "text",
                            oldText: t.data,
                            newText: Ho(o.target),
                            node: t
                        }) : !t && Bo(o.target) && n.add(e.mapDomToView(o.target.parentNode))
                    }
                }
                const o = [];
                for (const t of i.values()) this.renderer.markToSync("text", t.node), o.push(t);
                for (const t of n) {
                    const i = e.mapViewToDom(t), n = Array.from(t.getChildren()),
                        r = Array.from(e.domChildrenToView(i, {withChildren: !1}));
                    Kr(n, r, a) || (this.renderer.markToSync("children", t), o.push({
                        type: "children",
                        oldChildren: n,
                        newChildren: r,
                        node: t
                    }))
                }
                const r = t[0].target.ownerDocument.getSelection();
                let s = null;
                if (r && r.anchorNode) {
                    const t = e.domPositionToView(r.anchorNode, r.anchorOffset),
                        i = e.domPositionToView(r.focusNode, r.focusOffset);
                    t && i && (s = new io(t)).setFocus(i)
                }

                function a(t, e) {
                    if (!Array.isArray(t)) return t === e || !(!t.is("text") || !e.is("text")) && t.data === e.data
                }

                this.document.fire("mutations", o, s), this.view.forceRender()
            }

            _isBogusBrMutation(t) {
                let e = null;
                return null === t.nextSibling && 0 === t.removedNodes.length && 1 == t.addedNodes.length && (e = this.domConverter.domToView(t.addedNodes[0], {withChildren: !1})), e && e.is("element", "br")
            }
        }

        class Zr {
            constructor(t, e, i) {
                this.view = t, this.document = t.document, this.domEvent = e, this.domTarget = e.target, Ln(this, i)
            }

            get target() {
                return this.view.domConverter.mapDomToView(this.domTarget)
            }

            preventDefault() {
                this.domEvent.preventDefault()
            }

            stopPropagation() {
                this.domEvent.stopPropagation()
            }
        }

        class Xr extends hr {
            constructor(t) {
                super(t), this.useCapture = !1
            }

            observe(t) {
                ("string" == typeof this.domEventType ? [this.domEventType] : this.domEventType).forEach(e => {
                    this.listenTo(t, e, (t, e) => {
                        this.isEnabled && this.onDomEvent(e)
                    }, {useCapture: this.useCapture})
                })
            }

            fire(t, e, i) {
                this.isEnabled && this.document.fire(t, new Zr(this.view, e, i))
            }
        }

        class ts extends Xr {
            constructor(t) {
                super(t), this.domEventType = ["keydown", "keyup"]
            }

            onDomEvent(t) {
                this.fire(t.type, t, {
                    keyCode: t.keyCode,
                    altKey: t.altKey,
                    ctrlKey: t.ctrlKey || t.metaKey,
                    shiftKey: t.shiftKey,
                    get keystroke() {
                        return wo(this)
                    }
                })
            }
        }

        var es = function () {
            return n.a.Date.now()
        }, is = "[object Symbol]";
        var ns = function (t) {
            return "symbol" == typeof t || w(t) && m(t) == is
        }, os = NaN, rs = /^\s+|\s+$/g, ss = /^[-+]0x[0-9a-f]+$/i, as = /^0b[01]+$/i, cs = /^0o[0-7]+$/i, ls = parseInt;
        var ds = function (t) {
            if ("number" == typeof t) return t;
            if (ns(t)) return os;
            if (B(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = B(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(rs, "");
            var i = as.test(t);
            return i || cs.test(t) ? ls(t.slice(2), i ? 2 : 8) : ss.test(t) ? os : +t
        }, hs = "Expected a function", us = Math.max, fs = Math.min;
        var gs = function (t, e, i) {
            var n, o, r, s, a, c, l = 0, d = !1, h = !1, u = !0;
            if ("function" != typeof t) throw new TypeError(hs);

            function f(e) {
                var i = n, r = o;
                return n = o = void 0, l = e, s = t.apply(r, i)
            }

            function g(t) {
                var i = t - c;
                return void 0 === c || i >= e || i < 0 || h && t - l >= r
            }

            function m() {
                var t = es();
                if (g(t)) return p(t);
                a = setTimeout(m, function (t) {
                    var i = e - (t - c);
                    return h ? fs(i, r - (t - l)) : i
                }(t))
            }

            function p(t) {
                return a = void 0, u && n ? f(t) : (n = o = void 0, s)
            }

            function b() {
                var t = es(), i = g(t);
                if (n = arguments, o = this, c = t, i) {
                    if (void 0 === a) return function (t) {
                        return l = t, a = setTimeout(m, e), d ? f(t) : s
                    }(c);
                    if (h) return clearTimeout(a), a = setTimeout(m, e), f(c)
                }
                return void 0 === a && (a = setTimeout(m, e)), s
            }

            return e = ds(e) || 0, B(i) && (d = !!i.leading, r = (h = "maxWait" in i) ? us(ds(i.maxWait) || 0, e) : r, u = "trailing" in i ? !!i.trailing : u), b.cancel = function () {
                void 0 !== a && clearTimeout(a), l = 0, n = c = o = a = void 0
            }, b.flush = function () {
                return void 0 === a ? s : p(es())
            }, b
        };

        class ms extends hr {
            constructor(t) {
                super(t), this._fireSelectionChangeDoneDebounced = gs(t => this.document.fire("selectionChangeDone", t), 200)
            }

            observe() {
                const t = this.document;
                t.on("keydown", (e, i) => {
                    t.selection.isFake && function (t) {
                        return t == bo.arrowright || t == bo.arrowleft || t == bo.arrowup || t == bo.arrowdown
                    }(i.keyCode) && this.isEnabled && (i.preventDefault(), this._handleSelectionMove(i.keyCode))
                }, {priority: "lowest"})
            }

            destroy() {
                super.destroy(), this._fireSelectionChangeDoneDebounced.cancel()
            }

            _handleSelectionMove(t) {
                const e = this.document.selection, i = new io(e.getRanges(), {backward: e.isBackward, fake: !1});
                t != bo.arrowleft && t != bo.arrowup || i.setTo(i.getFirstPosition()), t != bo.arrowright && t != bo.arrowdown || i.setTo(i.getLastPosition());
                const n = {oldSelection: e, newSelection: i, domSelection: null};
                this.document.fire("selectionChange", n), this._fireSelectionChangeDoneDebounced(n)
            }
        }

        class ps extends hr {
            constructor(t) {
                super(t), this.mutationObserver = t.getObserver(Jr), this.selection = this.document.selection, this.domConverter = t.domConverter, this._documents = new WeakSet, this._fireSelectionChangeDoneDebounced = gs(t => this.document.fire("selectionChangeDone", t), 200), this._clearInfiniteLoopInterval = setInterval(() => this._clearInfiniteLoop(), 1e3), this._loopbackCounter = 0
            }

            observe(t) {
                const e = t.ownerDocument;
                this._documents.has(e) || (this.listenTo(e, "selectionchange", () => {
                    this._handleSelectionChange(e)
                }), this._documents.add(e))
            }

            destroy() {
                super.destroy(), clearInterval(this._clearInfiniteLoopInterval), this._fireSelectionChangeDoneDebounced.cancel()
            }

            _handleSelectionChange(t) {
                if (!this.isEnabled || !this.document.isFocused && !this.document.isReadOnly) return;
                this.mutationObserver.flush();
                const e = t.defaultView.getSelection(), i = this.domConverter.domSelectionToView(e);
                if (!(this.selection.isEqual(i) && this.domConverter.isDomSelectionCorrect(e) || ++this._loopbackCounter > 60)) if (this.selection.isSimilar(i)) this.view.forceRender(); else {
                    const t = {oldSelection: this.selection, newSelection: i, domSelection: e};
                    this.document.fire("selectionChange", t), this._fireSelectionChangeDoneDebounced(t)
                }
            }

            _clearInfiniteLoop() {
                this._loopbackCounter = 0
            }
        }

        class bs extends Xr {
            constructor(t) {
                super(t), this.domEventType = ["focus", "blur"], this.useCapture = !0;
                const e = this.document;
                e.on("focus", () => {
                    e.isFocused = !0, this._renderTimeoutId = setTimeout(() => t.forceRender(), 50)
                }), e.on("blur", (i, n) => {
                    const o = e.selection.editableElement;
                    null !== o && o !== n.target || (e.isFocused = !1, t.forceRender())
                })
            }

            onDomEvent(t) {
                this.fire(t.type, t)
            }

            destroy() {
                this._renderTimeoutId && clearTimeout(this._renderTimeoutId), super.destroy()
            }
        }

        class ws extends Xr {
            constructor(t) {
                super(t), this.domEventType = ["compositionstart", "compositionupdate", "compositionend"];
                const e = this.document;
                e.on("compositionstart", () => {
                    e.isComposing = !0
                }), e.on("compositionend", () => {
                    e.isComposing = !1
                })
            }

            onDomEvent(t) {
                this.fire(t.type, t)
            }
        }

        class ks extends Xr {
            constructor(t) {
                super(t), this.domEventType = ["beforeinput"]
            }

            onDomEvent(t) {
                this.fire(t.type, t)
            }
        }

        function _s(t) {
            return "[object Range]" == Object.prototype.toString.apply(t)
        }

        function vs(t) {
            const e = t.ownerDocument.defaultView.getComputedStyle(t);
            return {
                top: parseInt(e.borderTopWidth, 10),
                right: parseInt(e.borderRightWidth, 10),
                bottom: parseInt(e.borderBottomWidth, 10),
                left: parseInt(e.borderLeftWidth, 10)
            }
        }

        const ys = ["top", "right", "bottom", "left", "width", "height"];

        class xs {
            constructor(t) {
                const e = _s(t);
                if (Object.defineProperty(this, "_source", {
                    value: t._source || t,
                    writable: !0,
                    enumerable: !1
                }), Wi(t) || e) As(this, e ? xs.getDomRangeRects(t)[0] : t.getBoundingClientRect()); else if (ar(t)) {
                    const {innerWidth: e, innerHeight: i} = t;
                    As(this, {top: 0, right: e, bottom: i, left: 0, width: e, height: i})
                } else As(this, t)
            }

            clone() {
                return new xs(this)
            }

            moveTo(t, e) {
                return this.top = e, this.right = t + this.width, this.bottom = e + this.height, this.left = t, this
            }

            moveBy(t, e) {
                return this.top += e, this.right += t, this.left += t, this.bottom += e, this
            }

            getIntersection(t) {
                const e = {
                    top: Math.max(this.top, t.top),
                    right: Math.min(this.right, t.right),
                    bottom: Math.min(this.bottom, t.bottom),
                    left: Math.max(this.left, t.left)
                };
                return e.width = e.right - e.left, e.height = e.bottom - e.top, e.width < 0 || e.height < 0 ? null : new xs(e)
            }

            getIntersectionArea(t) {
                const e = this.getIntersection(t);
                return e ? e.getArea() : 0
            }

            getArea() {
                return this.width * this.height
            }

            getVisible() {
                const t = this._source;
                let e = this.clone();
                if (!Ts(t)) {
                    let i = t.parentNode || t.commonAncestorContainer;
                    for (; i && !Ts(i);) {
                        const t = new xs(i), n = e.getIntersection(t);
                        if (!n) return null;
                        n.getArea() < e.getArea() && (e = n), i = i.parentNode
                    }
                }
                return e
            }

            isEqual(t) {
                for (const e of ys) if (this[e] !== t[e]) return !1;
                return !0
            }

            contains(t) {
                const e = this.getIntersection(t);
                return !(!e || !e.isEqual(t))
            }

            excludeScrollbarsAndBorders() {
                const t = this._source;
                let e, i, n;
                if (ar(t)) e = t.innerWidth - t.document.documentElement.clientWidth, i = t.innerHeight - t.document.documentElement.clientHeight, n = t.getComputedStyle(t.document.documentElement).direction; else {
                    const o = vs(this._source);
                    e = t.offsetWidth - t.clientWidth - o.left - o.right, i = t.offsetHeight - t.clientHeight - o.top - o.bottom, n = t.ownerDocument.defaultView.getComputedStyle(t).direction, this.left += o.left, this.top += o.top, this.right -= o.right, this.bottom -= o.bottom, this.width = this.right - this.left, this.height = this.bottom - this.top
                }
                return this.width -= e, "ltr" === n ? this.right -= e : this.left += e, this.height -= i, this.bottom -= i, this
            }

            static getDomRangeRects(t) {
                const e = [], i = Array.from(t.getClientRects());
                if (i.length) for (const t of i) e.push(new xs(t)); else {
                    let i = t.startContainer;
                    Do(i) && (i = i.parentNode);
                    const n = new xs(i.getBoundingClientRect());
                    n.right = n.left, n.width = 0, e.push(n)
                }
                return e
            }
        }

        function As(t, e) {
            for (const i of ys) t[i] = e[i]
        }

        function Ts(t) {
            return !!Wi(t) && t === t.ownerDocument.body
        }

        function Cs({target: t, viewportOffset: e = 0}) {
            const i = Os(t);
            let n = i, o = null;
            for (; n;) {
                let r;
                Ss(r = Rs(n == i ? t : o), () => Ds(t, n));
                const s = Ds(t, n);
                if (Ps(n, s, e), n.parent != n) {
                    if (o = n.frameElement, n = n.parent, !o) return
                } else n = null
            }
        }

        function Ps(t, e, i) {
            const n = e.clone().moveBy(0, i), o = e.clone().moveBy(0, -i), r = new xs(t).excludeScrollbarsAndBorders();
            if (![o, n].every(t => r.contains(t))) {
                let {scrollX: s, scrollY: a} = t;
                Ms(o, r) ? a -= r.top - e.top + i : Es(n, r) && (a += e.bottom - r.bottom + i), Is(e, r) ? s -= r.left - e.left + i : Ns(e, r) && (s += e.right - r.right + i), t.scrollTo(s, a)
            }
        }

        function Ss(t, e) {
            const i = Os(t);
            let n, o;
            for (; t != i.document.body;) o = e(), (n = new xs(t).excludeScrollbarsAndBorders()).contains(o) || (Ms(o, n) ? t.scrollTop -= n.top - o.top : Es(o, n) && (t.scrollTop += o.bottom - n.bottom), Is(o, n) ? t.scrollLeft -= n.left - o.left : Ns(o, n) && (t.scrollLeft += o.right - n.right)), t = t.parentNode
        }

        function Es(t, e) {
            return t.bottom > e.bottom
        }

        function Ms(t, e) {
            return t.top < e.top
        }

        function Is(t, e) {
            return t.left < e.left
        }

        function Ns(t, e) {
            return t.right > e.right
        }

        function Os(t) {
            return _s(t) ? t.startContainer.ownerDocument.defaultView : t.ownerDocument.defaultView
        }

        function Rs(t) {
            if (_s(t)) {
                let e = t.commonAncestorContainer;
                return Do(e) && (e = e.parentNode), e
            }
            return t.parentNode
        }

        function Ds(t, e) {
            const i = Os(t), n = new xs(t);
            if (i === e) return n;
            {
                let t = i;
                for (; t != e;) {
                    const e = t.frameElement, i = new xs(e).excludeScrollbarsAndBorders();
                    n.moveBy(i.left, i.top), t = t.parent
                }
            }
            return n
        }

        Object.assign({}, {
            scrollViewportToShowTarget: Cs, scrollAncestorsToShowTarget: function (t) {
                Ss(Rs(t), () => new xs(t))
            }
        });

        class Ls {
            constructor() {
                this.document = new ro, this.domConverter = new or, this.domRoots = new Map, this.set("isRenderingInProgress", !1), this._renderer = new Jo(this.domConverter, this.document.selection), this._renderer.bind("isFocused").to(this.document), this._initialDomRootAttributes = new WeakMap, this._observers = new Map, this._ongoingChange = !1, this._postFixersInProgress = !1, this._renderingDisabled = !1, this._hasChangedSinceTheLastRendering = !1, this._writer = new To(this.document), this.addObserver(Jr), this.addObserver(ps), this.addObserver(bs), this.addObserver(ts), this.addObserver(ms), this.addObserver(ws), go.isAndroid && this.addObserver(ks), function (t) {
                    t.document.on("keydown", Uo)
                }(this), yo(this), this.on("render", () => {
                    this._render(), this.document.fire("layoutChanged"), this._hasChangedSinceTheLastRendering = !1
                }), this.listenTo(this.document.selection, "change", () => {
                    this._hasChangedSinceTheLastRendering = !0
                })
            }

            attachDomRoot(t, e = "main") {
                const i = this.document.getRoot(e);
                i._name = t.tagName.toLowerCase();
                const n = {};
                for (const {name: e, value: o} of Array.from(t.attributes)) n[e] = o, "class" === e ? this._writer.addClass(o.split(" "), i) : this._writer.setAttribute(e, o, i);
                this._initialDomRootAttributes.set(t, n);
                const o = () => {
                    this._writer.setAttribute("contenteditable", !i.isReadOnly, i), i.isReadOnly ? this._writer.addClass("ck-read-only", i) : this._writer.removeClass("ck-read-only", i)
                };
                o(), this.domRoots.set(e, t), this.domConverter.bindElements(t, i), this._renderer.markToSync("children", i), this._renderer.markToSync("attributes", i), this._renderer.domDocuments.add(t.ownerDocument), i.on("change:children", (t, e) => this._renderer.markToSync("children", e)), i.on("change:attributes", (t, e) => this._renderer.markToSync("attributes", e)), i.on("change:text", (t, e) => this._renderer.markToSync("text", e)), i.on("change:isReadOnly", () => this.change(o)), i.on("change", () => {
                    this._hasChangedSinceTheLastRendering = !0
                });
                for (const i of this._observers.values()) i.observe(t, e)
            }

            detachDomRoot(t) {
                const e = this.domRoots.get(t);
                Array.from(e.attributes).forEach(({name: t}) => e.removeAttribute(t));
                const i = this._initialDomRootAttributes.get(e);
                for (const t in i) e.setAttribute(t, i[t]);
                this.domRoots.delete(t), this.domConverter.unbindDomElement(e)
            }

            getDomRoot(t = "main") {
                return this.domRoots.get(t)
            }

            addObserver(t) {
                let e = this._observers.get(t);
                if (e) return e;
                e = new t(this), this._observers.set(t, e);
                for (const [t, i] of this.domRoots) e.observe(i, t);
                return e.enable(), e
            }

            getObserver(t) {
                return this._observers.get(t)
            }

            disableObservers() {
                for (const t of this._observers.values()) t.disable()
            }

            enableObservers() {
                for (const t of this._observers.values()) t.enable()
            }

            scrollToTheSelection() {
                const t = this.document.selection.getFirstRange();
                t && Cs({target: this.domConverter.viewRangeToDom(t), viewportOffset: 20})
            }

            focus() {
                if (!this.document.isFocused) {
                    const t = this.document.selection.editableElement;
                    t && (this.domConverter.focus(t), this.forceRender())
                }
            }

            change(t) {
                if (this.isRenderingInProgress || this._postFixersInProgress) throw new Yi.b("cannot-change-view-tree: Attempting to make changes to the view when it is in an incorrect state: rendering or post-fixers are in progress. This may cause some unexpected behavior and inconsistency between the DOM and the view.", this);
                try {
                    if (this._ongoingChange) return t(this._writer);
                    this._ongoingChange = !0;
                    const e = t(this._writer);
                    return this._ongoingChange = !1, !this._renderingDisabled && this._hasChangedSinceTheLastRendering && (this._postFixersInProgress = !0, this.document._callPostFixers(this._writer), this._postFixersInProgress = !1, this.fire("render")), e
                } catch (t) {
                    Yi.b.rethrowUnexpectedError(t, this)
                }
            }

            forceRender() {
                this._hasChangedSinceTheLastRendering = !0, this.change(() => {
                })
            }

            destroy() {
                for (const t of this._observers.values()) t.destroy();
                this.document.destroy(), this.stopListening()
            }

            createPositionAt(t, e) {
                return Zn._createAt(t, e)
            }

            createPositionAfter(t) {
                return Zn._createAfter(t)
            }

            createPositionBefore(t) {
                return Zn._createBefore(t)
            }

            createRange(t, e) {
                return new Xn(t, e)
            }

            createRangeOn(t) {
                return Xn._createOn(t)
            }

            createRangeIn(t) {
                return Xn._createIn(t)
            }

            createSelection(t, e, i) {
                return new io(t, e, i)
            }

            _disableRendering(t) {
                this._renderingDisabled = t, 0 == t && this.change(() => {
                })
            }

            _render() {
                this.isRenderingInProgress = !0, this.disableObservers(), this._renderer.render(), this.enableObservers(), this.isRenderingInProgress = !1
            }
        }

        function js(t) {
            return T(t) ? mn(t) : new Map(t)
        }

        cn(Ls, Fn);

        class zs {
            constructor(t) {
                this.parent = null, this._attrs = js(t)
            }

            get index() {
                let t;
                if (!this.parent) return null;
                if (null === (t = this.parent.getChildIndex(this))) throw new Yi.b("model-node-not-found-in-parent: The node's parent does not contain this node.", this);
                return t
            }

            get startOffset() {
                let t;
                if (!this.parent) return null;
                if (null === (t = this.parent.getChildStartOffset(this))) throw new Yi.b("model-node-not-found-in-parent: The node's parent does not contain this node.", this);
                return t
            }

            get offsetSize() {
                return 1
            }

            get endOffset() {
                return this.parent ? this.startOffset + this.offsetSize : null
            }

            get nextSibling() {
                const t = this.index;
                return null !== t && this.parent.getChild(t + 1) || null
            }

            get previousSibling() {
                const t = this.index;
                return null !== t && this.parent.getChild(t - 1) || null
            }

            get root() {
                let t = this;
                for (; t.parent;) t = t.parent;
                return t
            }

            get document() {
                return this.root == this ? null : this.root.document || null
            }

            getPath() {
                const t = [];
                let e = this;
                for (; e.parent;) t.unshift(e.startOffset), e = e.parent;
                return t
            }

            getAncestors(t = {includeSelf: !1, parentFirst: !1}) {
                const e = [];
                let i = t.includeSelf ? this : this.parent;
                for (; i;) e[t.parentFirst ? "push" : "unshift"](i), i = i.parent;
                return e
            }

            getCommonAncestor(t, e = {}) {
                const i = this.getAncestors(e), n = t.getAncestors(e);
                let o = 0;
                for (; i[o] == n[o] && i[o];) o++;
                return 0 === o ? null : i[o - 1]
            }

            isBefore(t) {
                if (this == t) return !1;
                if (this.root !== t.root) return !1;
                const e = this.getPath(), i = t.getPath(), n = ln(e, i);
                switch (n) {
                    case"prefix":
                        return !0;
                    case"extension":
                        return !1;
                    default:
                        return e[n] < i[n]
                }
            }

            isAfter(t) {
                return this != t && (this.root === t.root && !this.isBefore(t))
            }

            hasAttribute(t) {
                return this._attrs.has(t)
            }

            getAttribute(t) {
                return this._attrs.get(t)
            }

            getAttributes() {
                return this._attrs.entries()
            }

            getAttributeKeys() {
                return this._attrs.keys()
            }

            toJSON() {
                const t = {};
                return this._attrs.size && (t.attributes = Array.from(this._attrs).reduce((t, e) => (t[e[0]] = e[1], t), {})), t
            }

            is(t) {
                return "node" == t || "model:node" == t
            }

            _clone() {
                return new zs(this._attrs)
            }

            _remove() {
                this.parent._removeChildren(this.index)
            }

            _setAttribute(t, e) {
                this._attrs.set(t, e)
            }

            _setAttributesTo(t) {
                this._attrs = js(t)
            }

            _removeAttribute(t) {
                return this._attrs.delete(t)
            }

            _clearAttributes() {
                this._attrs.clear()
            }
        }

        class Vs extends zs {
            constructor(t, e) {
                super(e), this._data = t || ""
            }

            get offsetSize() {
                return this.data.length
            }

            get data() {
                return this._data
            }

            is(t) {
                return "text" == t || "model:text" == t || super.is(t)
            }

            toJSON() {
                const t = super.toJSON();
                return t.data = this.data, t
            }

            _clone() {
                return new Vs(this.data, this.getAttributes())
            }

            static fromJSON(t) {
                return new Vs(t.data, t.attributes)
            }
        }

        class Bs {
            constructor(t, e, i) {
                if (this.textNode = t, e < 0 || e > t.offsetSize) throw new Yi.b("model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.", this);
                if (i < 0 || e + i > t.offsetSize) throw new Yi.b("model-textproxy-wrong-length: Given length value is incorrect.", this);
                this.data = t.data.substring(e, e + i), this.offsetInText = e
            }

            get startOffset() {
                return null !== this.textNode.startOffset ? this.textNode.startOffset + this.offsetInText : null
            }

            get offsetSize() {
                return this.data.length
            }

            get endOffset() {
                return null !== this.startOffset ? this.startOffset + this.offsetSize : null
            }

            get isPartial() {
                return this.offsetSize !== this.textNode.offsetSize
            }

            get parent() {
                return this.textNode.parent
            }

            get root() {
                return this.textNode.root
            }

            get document() {
                return this.textNode.document
            }

            is(t) {
                return "textProxy" == t || "model:textProxy" == t
            }

            getPath() {
                const t = this.textNode.getPath();
                return t.length > 0 && (t[t.length - 1] += this.offsetInText), t
            }

            getAncestors(t = {includeSelf: !1, parentFirst: !1}) {
                const e = [];
                let i = t.includeSelf ? this : this.parent;
                for (; i;) e[t.parentFirst ? "push" : "unshift"](i), i = i.parent;
                return e
            }

            hasAttribute(t) {
                return this.textNode.hasAttribute(t)
            }

            getAttribute(t) {
                return this.textNode.getAttribute(t)
            }

            getAttributes() {
                return this.textNode.getAttributes()
            }

            getAttributeKeys() {
                return this.textNode.getAttributeKeys()
            }
        }

        class Fs {
            constructor(t) {
                this._nodes = [], t && this._insertNodes(0, t)
            }

            [Symbol.iterator]() {
                return this._nodes[Symbol.iterator]()
            }

            get length() {
                return this._nodes.length
            }

            get maxOffset() {
                return this._nodes.reduce((t, e) => t + e.offsetSize, 0)
            }

            getNode(t) {
                return this._nodes[t] || null
            }

            getNodeIndex(t) {
                const e = this._nodes.indexOf(t);
                return -1 == e ? null : e
            }

            getNodeStartOffset(t) {
                const e = this.getNodeIndex(t);
                return null === e ? null : this._nodes.slice(0, e).reduce((t, e) => t + e.offsetSize, 0)
            }

            indexToOffset(t) {
                if (t == this._nodes.length) return this.maxOffset;
                const e = this._nodes[t];
                if (!e) throw new Yi.b("model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.", this);
                return this.getNodeStartOffset(e)
            }

            offsetToIndex(t) {
                let e = 0;
                for (const i of this._nodes) {
                    if (t >= e && t < e + i.offsetSize) return this.getNodeIndex(i);
                    e += i.offsetSize
                }
                if (e != t) throw new Yi.b("model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.", this, {
                    offset: t,
                    nodeList: this
                });
                return this.length
            }

            _insertNodes(t, e) {
                for (const t of e) if (!(t instanceof zs)) throw new Yi.b("model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.", this);
                this._nodes.splice(t, 0, ...e)
            }

            _removeNodes(t, e = 1) {
                return this._nodes.splice(t, e)
            }

            toJSON() {
                return this._nodes.map(t => t.toJSON())
            }
        }

        class Hs extends zs {
            constructor(t, e, i) {
                super(e), this.name = t, this._children = new Fs, i && this._insertChild(0, i)
            }

            get childCount() {
                return this._children.length
            }

            get maxOffset() {
                return this._children.maxOffset
            }

            get isEmpty() {
                return 0 === this.childCount
            }

            is(t, e = null) {
                const i = t.replace(/^model:/, "");
                return e ? "element" == i && e == this.name : "element" == i || i == this.name || super.is(t)
            }

            getChild(t) {
                return this._children.getNode(t)
            }

            getChildren() {
                return this._children[Symbol.iterator]()
            }

            getChildIndex(t) {
                return this._children.getNodeIndex(t)
            }

            getChildStartOffset(t) {
                return this._children.getNodeStartOffset(t)
            }

            offsetToIndex(t) {
                return this._children.offsetToIndex(t)
            }

            getNodeByPath(t) {
                let e = this;
                for (const i of t) e = e.getChild(e.offsetToIndex(i));
                return e
            }

            toJSON() {
                const t = super.toJSON();
                if (t.name = this.name, this._children.length > 0) {
                    t.children = [];
                    for (const e of this._children) t.children.push(e.toJSON())
                }
                return t
            }

            _clone(t = !1) {
                const e = t ? Array.from(this._children).map(t => t._clone(!0)) : null;
                return new Hs(this.name, this.getAttributes(), e)
            }

            _appendChild(t) {
                this._insertChild(this.childCount, t)
            }

            _insertChild(t, e) {
                const i = function (t) {
                    if ("string" == typeof t) return [new Vs(t)];
                    pn(t) || (t = [t]);
                    return Array.from(t).map(t => "string" == typeof t ? new Vs(t) : t instanceof Bs ? new Vs(t.data, t.getAttributes()) : t)
                }(e);
                for (const t of i) null !== t.parent && t._remove(), t.parent = this;
                this._children._insertNodes(t, i)
            }

            _removeChildren(t, e = 1) {
                const i = this._children._removeNodes(t, e);
                for (const t of i) t.parent = null;
                return i
            }

            static fromJSON(t) {
                let e = null;
                if (t.children) {
                    e = [];
                    for (const i of t.children) i.name ? e.push(Hs.fromJSON(i)) : e.push(Vs.fromJSON(i))
                }
                return new Hs(t.name, t.attributes, e)
            }
        }

        class Us {
            constructor(t = {}) {
                if (!t.boundaries && !t.startPosition) throw new Yi.b("model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.", null);
                const e = t.direction || "forward";
                if ("forward" != e && "backward" != e) throw new Yi.b("model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.", t, {direction: e});
                this.direction = e, this.boundaries = t.boundaries || null, t.startPosition ? this.position = t.startPosition.clone() : this.position = $s._createAt(this.boundaries["backward" == this.direction ? "end" : "start"]), this.position.stickiness = "toNone", this.singleCharacters = !!t.singleCharacters, this.shallow = !!t.shallow, this.ignoreElementEnd = !!t.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null, this._visitedParent = this.position.parent
            }

            [Symbol.iterator]() {
                return this
            }

            skip(t) {
                let e, i, n, o;
                do {
                    n = this.position, o = this._visitedParent, ({done: e, value: i} = this.next())
                } while (!e && t(i));
                e || (this.position = n, this._visitedParent = o)
            }

            next() {
                return "forward" == this.direction ? this._next() : this._previous()
            }

            _next() {
                const t = this.position, e = this.position.clone(), i = this._visitedParent;
                if (null === i.parent && e.offset === i.maxOffset) return {done: !0};
                if (i === this._boundaryEndParent && e.offset == this.boundaries.end.offset) return {done: !0};
                const n = e.textNode ? e.textNode : e.nodeAfter;
                if (n instanceof Hs) return this.shallow ? e.offset++ : (e.path.push(0), this._visitedParent = n), this.position = e, Ws("elementStart", n, t, e, 1);
                if (n instanceof Vs) {
                    let o;
                    if (this.singleCharacters) o = 1; else {
                        let t = n.endOffset;
                        this._boundaryEndParent == i && this.boundaries.end.offset < t && (t = this.boundaries.end.offset), o = t - e.offset
                    }
                    const r = e.offset - n.startOffset, s = new Bs(n, r, o);
                    return e.offset += o, this.position = e, Ws("text", s, t, e, o)
                }
                return e.path.pop(), e.offset++, this.position = e, this._visitedParent = i.parent, this.ignoreElementEnd ? this._next() : Ws("elementEnd", i, t, e)
            }

            _previous() {
                const t = this.position, e = this.position.clone(), i = this._visitedParent;
                if (null === i.parent && 0 === e.offset) return {done: !0};
                if (i == this._boundaryStartParent && e.offset == this.boundaries.start.offset) return {done: !0};
                const n = e.textNode ? e.textNode : e.nodeBefore;
                if (n instanceof Hs) return e.offset--, this.shallow ? (this.position = e, Ws("elementStart", n, t, e, 1)) : (e.path.push(n.maxOffset), this.position = e, this._visitedParent = n, this.ignoreElementEnd ? this._previous() : Ws("elementEnd", n, t, e));
                if (n instanceof Vs) {
                    let o;
                    if (this.singleCharacters) o = 1; else {
                        let t = n.startOffset;
                        this._boundaryStartParent == i && this.boundaries.start.offset > t && (t = this.boundaries.start.offset), o = e.offset - t
                    }
                    const r = e.offset - n.startOffset, s = new Bs(n, r - o, o);
                    return e.offset -= o, this.position = e, Ws("text", s, t, e, o)
                }
                return e.path.pop(), this.position = e, this._visitedParent = i.parent, Ws("elementStart", i, t, e, 1)
            }
        }

        function Ws(t, e, i, n, o) {
            return {done: !1, value: {type: t, item: e, previousPosition: i, nextPosition: n, length: o}}
        }

        var qs = function (t) {
            var e = null == t ? 0 : t.length;
            return e ? t[e - 1] : void 0
        };

        class $s {
            constructor(t, e, i = "toNone") {
                if (!t.is("element") && !t.is("documentFragment")) throw new Yi.b("model-position-root-invalid: Position root invalid.", t);
                if (!(e instanceof Array) || 0 === e.length) throw new Yi.b("model-position-path-incorrect-format: Position path must be an array with at least one item.", t, {path: e});
                e = t.getPath().concat(e), t = t.root, this.root = t, this.path = e, this.stickiness = i
            }

            get offset() {
                return qs(this.path)
            }

            set offset(t) {
                this.path[this.path.length - 1] = t
            }

            get parent() {
                let t = this.root;
                for (let e = 0; e < this.path.length - 1; e++) if (!(t = t.getChild(t.offsetToIndex(this.path[e])))) throw new Yi.b("model-position-path-incorrect: The position's path is incorrect.", this, {position: this});
                if (t.is("text")) throw new Yi.b("model-position-path-incorrect: The position's path is incorrect.", this, {position: this});
                return t
            }

            get index() {
                return this.parent.offsetToIndex(this.offset)
            }

            get textNode() {
                const t = this.parent.getChild(this.index);
                return t instanceof Vs && t.startOffset < this.offset ? t : null
            }

            get nodeAfter() {
                return null === this.textNode ? this.parent.getChild(this.index) : null
            }

            get nodeBefore() {
                return null === this.textNode ? this.parent.getChild(this.index - 1) : null
            }

            get isAtStart() {
                return 0 === this.offset
            }

            get isAtEnd() {
                return this.offset == this.parent.maxOffset
            }

            compareWith(t) {
                if (this.root != t.root) return "different";
                const e = ln(this.path, t.path);
                switch (e) {
                    case"same":
                        return "same";
                    case"prefix":
                        return "before";
                    case"extension":
                        return "after";
                    default:
                        return this.path[e] < t.path[e] ? "before" : "after"
                }
            }

            getLastMatchingPosition(t, e = {}) {
                e.startPosition = this;
                const i = new Us(e);
                return i.skip(t), i.position
            }

            getParentPath() {
                return this.path.slice(0, -1)
            }

            getAncestors() {
                return this.parent.is("documentFragment") ? [this.parent] : this.parent.getAncestors({includeSelf: !0})
            }

            getCommonPath(t) {
                if (this.root != t.root) return [];
                const e = ln(this.path, t.path),
                    i = "string" == typeof e ? Math.min(this.path.length, t.path.length) : e;
                return this.path.slice(0, i)
            }

            getCommonAncestor(t) {
                const e = this.getAncestors(), i = t.getAncestors();
                let n = 0;
                for (; e[n] == i[n] && e[n];) n++;
                return 0 === n ? null : e[n - 1]
            }

            getShiftedBy(t) {
                const e = this.clone(), i = e.offset + t;
                return e.offset = i < 0 ? 0 : i, e
            }

            isAfter(t) {
                return "after" == this.compareWith(t)
            }

            isBefore(t) {
                return "before" == this.compareWith(t)
            }

            isEqual(t) {
                return "same" == this.compareWith(t)
            }

            isTouching(t) {
                let e = null, i = null;
                switch (this.compareWith(t)) {
                    case"same":
                        return !0;
                    case"before":
                        e = $s._createAt(this), i = $s._createAt(t);
                        break;
                    case"after":
                        e = $s._createAt(t), i = $s._createAt(this);
                        break;
                    default:
                        return !1
                }
                let n = e.parent;
                for (; e.path.length + i.path.length;) {
                    if (e.isEqual(i)) return !0;
                    if (e.path.length > i.path.length) {
                        if (e.offset !== n.maxOffset) return !1;
                        e.path = e.path.slice(0, -1), n = n.parent, e.offset++
                    } else {
                        if (0 !== i.offset) return !1;
                        i.path = i.path.slice(0, -1)
                    }
                }
            }

            is(t) {
                return "position" == t || "model:position" == t
            }

            hasSameParentAs(t) {
                if (this.root !== t.root) return !1;
                return "same" == ln(this.getParentPath(), t.getParentPath())
            }

            getTransformedByOperation(t) {
                let e;
                switch (t.type) {
                    case"insert":
                        e = this._getTransformedByInsertOperation(t);
                        break;
                    case"move":
                    case"remove":
                    case"reinsert":
                        e = this._getTransformedByMoveOperation(t);
                        break;
                    case"split":
                        e = this._getTransformedBySplitOperation(t);
                        break;
                    case"merge":
                        e = this._getTransformedByMergeOperation(t);
                        break;
                    default:
                        e = $s._createAt(this)
                }
                return e
            }

            _getTransformedByInsertOperation(t) {
                return this._getTransformedByInsertion(t.position, t.howMany)
            }

            _getTransformedByMoveOperation(t) {
                return this._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany)
            }

            _getTransformedBySplitOperation(t) {
                const e = t.movedRange;
                return e.containsPosition(this) || e.start.isEqual(this) && "toNext" == this.stickiness ? this._getCombined(t.splitPosition, t.moveTargetPosition) : t.graveyardPosition ? this._getTransformedByMove(t.graveyardPosition, t.insertionPosition, 1) : this._getTransformedByInsertion(t.insertionPosition, 1)
            }

            _getTransformedByMergeOperation(t) {
                const e = t.movedRange;
                let i;
                return e.containsPosition(this) || e.start.isEqual(this) ? (i = this._getCombined(t.sourcePosition, t.targetPosition), t.sourcePosition.isBefore(t.targetPosition) && (i = i._getTransformedByDeletion(t.deletionPosition, 1))) : i = this.isEqual(t.deletionPosition) ? $s._createAt(t.deletionPosition) : this._getTransformedByMove(t.deletionPosition, t.graveyardPosition, 1), i
            }

            _getTransformedByDeletion(t, e) {
                const i = $s._createAt(this);
                if (this.root != t.root) return i;
                if ("same" == ln(t.getParentPath(), this.getParentPath())) {
                    if (t.offset < this.offset) {
                        if (t.offset + e > this.offset) return null;
                        i.offset -= e
                    }
                } else if ("prefix" == ln(t.getParentPath(), this.getParentPath())) {
                    const n = t.path.length - 1;
                    if (t.offset <= this.path[n]) {
                        if (t.offset + e > this.path[n]) return null;
                        i.path[n] -= e
                    }
                }
                return i
            }

            _getTransformedByInsertion(t, e) {
                const i = $s._createAt(this);
                if (this.root != t.root) return i;
                if ("same" == ln(t.getParentPath(), this.getParentPath())) (t.offset < this.offset || t.offset == this.offset && "toPrevious" != this.stickiness) && (i.offset += e); else if ("prefix" == ln(t.getParentPath(), this.getParentPath())) {
                    const n = t.path.length - 1;
                    t.offset <= this.path[n] && (i.path[n] += e)
                }
                return i
            }

            _getTransformedByMove(t, e, i) {
                if (e = e._getTransformedByDeletion(t, i), t.isEqual(e)) return $s._createAt(this);
                const n = this._getTransformedByDeletion(t, i);
                return null === n || t.isEqual(this) && "toNext" == this.stickiness || t.getShiftedBy(i).isEqual(this) && "toPrevious" == this.stickiness ? this._getCombined(t, e) : n._getTransformedByInsertion(e, i)
            }

            _getCombined(t, e) {
                const i = t.path.length - 1, n = $s._createAt(e);
                return n.stickiness = this.stickiness, n.offset = n.offset + this.path[i] - t.offset, n.path = n.path.concat(this.path.slice(i + 1)), n
            }

            toJSON() {
                return {root: this.root.toJSON(), path: Array.from(this.path), stickiness: this.stickiness}
            }

            clone() {
                return new this.constructor(this.root, this.path, this.stickiness)
            }

            static _createAt(t, e, i = "toNone") {
                if (t instanceof $s) return new $s(t.root, t.path, t.stickiness);
                {
                    const n = t;
                    if ("end" == e) e = n.maxOffset; else {
                        if ("before" == e) return this._createBefore(n, i);
                        if ("after" == e) return this._createAfter(n, i);
                        if (0 !== e && !e) throw new Yi.b("model-createPositionAt-offset-required: Model#createPositionAt() requires the offset when the first parameter is a model item.", [this, t])
                    }
                    if (!n.is("element") && !n.is("documentFragment")) throw new Yi.b("model-position-parent-incorrect: Position parent have to be a element or document fragment.", [this, t]);
                    const o = n.getPath();
                    return o.push(e), new this(n.root, o, i)
                }
            }

            static _createAfter(t, e) {
                if (!t.parent) throw new Yi.b("model-position-after-root: You cannot make a position after root.", [this, t], {root: t});
                return this._createAt(t.parent, t.endOffset, e)
            }

            static _createBefore(t, e) {
                if (!t.parent) throw new Yi.b("model-position-before-root: You cannot make a position before root.", t, {root: t});
                return this._createAt(t.parent, t.startOffset, e)
            }

            static fromJSON(t, e) {
                if ("$graveyard" === t.root) {
                    const i = new $s(e.graveyard, t.path);
                    return i.stickiness = t.stickiness, i
                }
                if (!e.getRoot(t.root)) throw new Yi.b("model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.", e, {rootName: t.root});
                return new $s(e.getRoot(t.root), t.path, t.stickiness)
            }
        }

        class Ys {
            constructor(t, e = null) {
                this.start = $s._createAt(t), this.end = e ? $s._createAt(e) : $s._createAt(t), this.start.stickiness = this.isCollapsed ? "toNone" : "toNext", this.end.stickiness = this.isCollapsed ? "toNone" : "toPrevious"
            }

            * [Symbol.iterator]() {
                yield* new Us({boundaries: this, ignoreElementEnd: !0})
            }

            get isCollapsed() {
                return this.start.isEqual(this.end)
            }

            get isFlat() {
                return "same" == ln(this.start.getParentPath(), this.end.getParentPath())
            }

            get root() {
                return this.start.root
            }

            containsPosition(t) {
                return t.isAfter(this.start) && t.isBefore(this.end)
            }

            containsRange(t, e = !1) {
                t.isCollapsed && (e = !1);
                const i = this.containsPosition(t.start) || e && this.start.isEqual(t.start),
                    n = this.containsPosition(t.end) || e && this.end.isEqual(t.end);
                return i && n
            }

            containsItem(t) {
                const e = $s._createBefore(t);
                return this.containsPosition(e) || this.start.isEqual(e)
            }

            is(t) {
                return "range" == t || "model:range" == t
            }

            isEqual(t) {
                return this.start.isEqual(t.start) && this.end.isEqual(t.end)
            }

            isIntersecting(t) {
                return this.start.isBefore(t.end) && this.end.isAfter(t.start)
            }

            getDifference(t) {
                const e = [];
                return this.isIntersecting(t) ? (this.containsPosition(t.start) && e.push(new Ys(this.start, t.start)), this.containsPosition(t.end) && e.push(new Ys(t.end, this.end))) : e.push(new Ys(this.start, this.end)), e
            }

            getIntersection(t) {
                if (this.isIntersecting(t)) {
                    let e = this.start, i = this.end;
                    return this.containsPosition(t.start) && (e = t.start), this.containsPosition(t.end) && (i = t.end), new Ys(e, i)
                }
                return null
            }

            getMinimalFlatRanges() {
                const t = [], e = this.start.getCommonPath(this.end).length, i = $s._createAt(this.start);
                let n = i.parent;
                for (; i.path.length > e + 1;) {
                    const e = n.maxOffset - i.offset;
                    0 !== e && t.push(new Ys(i, i.getShiftedBy(e))), i.path = i.path.slice(0, -1), i.offset++, n = n.parent
                }
                for (; i.path.length <= this.end.path.length;) {
                    const e = this.end.path[i.path.length - 1], n = e - i.offset;
                    0 !== n && t.push(new Ys(i, i.getShiftedBy(n))), i.offset = e, i.path.push(0)
                }
                return t
            }

            getWalker(t = {}) {
                return t.boundaries = this, new Us(t)
            }

            * getItems(t = {}) {
                t.boundaries = this, t.ignoreElementEnd = !0;
                const e = new Us(t);
                for (const t of e) yield t.item
            }

            * getPositions(t = {}) {
                t.boundaries = this;
                const e = new Us(t);
                yield e.position;
                for (const t of e) yield t.nextPosition
            }

            getTransformedByOperation(t) {
                switch (t.type) {
                    case"insert":
                        return this._getTransformedByInsertOperation(t);
                    case"move":
                    case"remove":
                    case"reinsert":
                        return this._getTransformedByMoveOperation(t);
                    case"split":
                        return [this._getTransformedBySplitOperation(t)];
                    case"merge":
                        return [this._getTransformedByMergeOperation(t)]
                }
                return [new Ys(this.start, this.end)]
            }

            getTransformedByOperations(t) {
                const e = [new Ys(this.start, this.end)];
                for (const i of t) for (let t = 0; t < e.length; t++) {
                    const n = e[t].getTransformedByOperation(i);
                    e.splice(t, 1, ...n), t += n.length - 1
                }
                for (let t = 0; t < e.length; t++) {
                    const i = e[t];
                    for (let n = t + 1; n < e.length; n++) {
                        const t = e[n];
                        (i.containsRange(t) || t.containsRange(i) || i.isEqual(t)) && e.splice(n, 1)
                    }
                }
                return e
            }

            getCommonAncestor() {
                return this.start.getCommonAncestor(this.end)
            }

            toJSON() {
                return {start: this.start.toJSON(), end: this.end.toJSON()}
            }

            clone() {
                return new this.constructor(this.start, this.end)
            }

            _getTransformedByInsertOperation(t, e = !1) {
                return this._getTransformedByInsertion(t.position, t.howMany, e)
            }

            _getTransformedByMoveOperation(t, e = !1) {
                const i = t.sourcePosition, n = t.howMany, o = t.targetPosition;
                return this._getTransformedByMove(i, o, n, e)
            }

            _getTransformedBySplitOperation(t) {
                const e = this.start._getTransformedBySplitOperation(t);
                let i = this.end._getTransformedBySplitOperation(t);
                return this.end.isEqual(t.insertionPosition) && (i = this.end.getShiftedBy(1)), e.root != i.root && (i = this.end.getShiftedBy(-1)), new Ys(e, i)
            }

            _getTransformedByMergeOperation(t) {
                if (this.start.isEqual(t.targetPosition) && this.end.isEqual(t.deletionPosition)) return new Ys(this.start);
                let e = this.start._getTransformedByMergeOperation(t), i = this.end._getTransformedByMergeOperation(t);
                return e.root != i.root && (i = this.end.getShiftedBy(-1)), e.isAfter(i) ? (t.sourcePosition.isBefore(t.targetPosition) ? (e = $s._createAt(i)).offset = 0 : (t.deletionPosition.isEqual(e) || (i = t.deletionPosition), e = t.targetPosition), new Ys(e, i)) : new Ys(e, i)
            }

            _getTransformedByInsertion(t, e, i = !1) {
                if (i && this.containsPosition(t)) return [new Ys(this.start, t), new Ys(t.getShiftedBy(e), this.end._getTransformedByInsertion(t, e))];
                {
                    const i = new Ys(this.start, this.end);
                    return i.start = i.start._getTransformedByInsertion(t, e), i.end = i.end._getTransformedByInsertion(t, e), [i]
                }
            }

            _getTransformedByMove(t, e, i, n = !1) {
                if (this.isCollapsed) {
                    const n = this.start._getTransformedByMove(t, e, i);
                    return [new Ys(n)]
                }
                const o = Ys._createFromPositionAndShift(t, i), r = e._getTransformedByDeletion(t, i);
                if (this.containsPosition(e) && !n && (o.containsPosition(this.start) || o.containsPosition(this.end))) {
                    const n = this.start._getTransformedByMove(t, e, i), o = this.end._getTransformedByMove(t, e, i);
                    return [new Ys(n, o)]
                }
                let s;
                const a = this.getDifference(o);
                let c = null;
                const l = this.getIntersection(o);
                if (1 == a.length ? c = new Ys(a[0].start._getTransformedByDeletion(t, i), a[0].end._getTransformedByDeletion(t, i)) : 2 == a.length && (c = new Ys(this.start, this.end._getTransformedByDeletion(t, i))), s = c ? c._getTransformedByInsertion(r, i, null !== l || n) : [], l) {
                    const t = new Ys(l.start._getCombined(o.start, r), l.end._getCombined(o.start, r));
                    2 == s.length ? s.splice(1, 0, t) : s.push(t)
                }
                return s
            }

            _getTransformedByDeletion(t, e) {
                let i = this.start._getTransformedByDeletion(t, e), n = this.end._getTransformedByDeletion(t, e);
                return null == i && null == n ? null : (null == i && (i = t), null == n && (n = t), new Ys(i, n))
            }

            static _createFromPositionAndShift(t, e) {
                const i = t, n = t.getShiftedBy(e);
                return e > 0 ? new this(i, n) : new this(n, i)
            }

            static _createIn(t) {
                return new this($s._createAt(t, 0), $s._createAt(t, t.maxOffset))
            }

            static _createOn(t) {
                return this._createFromPositionAndShift($s._createBefore(t), t.offsetSize)
            }

            static _createFromRanges(t) {
                if (0 === t.length) throw new Yi.b("range-create-from-ranges-empty-array: At least one range has to be passed.", null);
                if (1 == t.length) return t[0].clone();
                const e = t[0];
                t.sort((t, e) => t.start.isAfter(e.start) ? 1 : -1);
                const i = t.indexOf(e), n = new this(e.start, e.end);
                if (i > 0) for (let e = i - 1; t[e].end.isEqual(n.start); e++) n.start = $s._createAt(t[e].start);
                for (let e = i + 1; e < t.length && t[e].start.isEqual(n.end); e++) n.end = $s._createAt(t[e].end);
                return n
            }

            static fromJSON(t, e) {
                return new this($s.fromJSON(t.start, e), $s.fromJSON(t.end, e))
            }
        }

        class Gs {
            constructor() {
                this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap, this._viewToModelLengthCallbacks = new Map, this._markerNameToElements = new Map, this._elementToMarkerNames = new Map, this._unboundMarkerNames = new Set, this.on("modelToViewPosition", (t, e) => {
                    if (e.viewPosition) return;
                    const i = this._modelToViewMapping.get(e.modelPosition.parent);
                    e.viewPosition = this._findPositionIn(i, e.modelPosition.offset)
                }, {priority: "low"}), this.on("viewToModelPosition", (t, e) => {
                    if (e.modelPosition) return;
                    const i = this.findMappedViewAncestor(e.viewPosition), n = this._viewToModelMapping.get(i),
                        o = this._toModelOffset(e.viewPosition.parent, e.viewPosition.offset, i);
                    e.modelPosition = $s._createAt(n, o)
                }, {priority: "low"})
            }

            bindElements(t, e) {
                this._modelToViewMapping.set(t, e), this._viewToModelMapping.set(e, t)
            }

            unbindViewElement(t) {
                const e = this.toModelElement(t);
                if (this._viewToModelMapping.delete(t), this._elementToMarkerNames.has(t)) for (const e of this._elementToMarkerNames.get(t)) this._unboundMarkerNames.add(e);
                this._modelToViewMapping.get(e) == t && this._modelToViewMapping.delete(e)
            }

            unbindModelElement(t) {
                const e = this.toViewElement(t);
                this._modelToViewMapping.delete(t), this._viewToModelMapping.get(e) == t && this._viewToModelMapping.delete(e)
            }

            bindElementToMarker(t, e) {
                const i = this._markerNameToElements.get(e) || new Set;
                i.add(t);
                const n = this._elementToMarkerNames.get(t) || new Set;
                n.add(e), this._markerNameToElements.set(e, i), this._elementToMarkerNames.set(t, n)
            }

            unbindElementFromMarkerName(t, e) {
                const i = this._markerNameToElements.get(e);
                i && (i.delete(t), 0 == i.size && this._markerNameToElements.delete(e));
                const n = this._elementToMarkerNames.get(t);
                n && (n.delete(e), 0 == n.size && this._elementToMarkerNames.delete(t))
            }

            flushUnboundMarkerNames() {
                const t = Array.from(this._unboundMarkerNames);
                return this._unboundMarkerNames.clear(), t
            }

            clearBindings() {
                this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap, this._markerNameToElements = new Map, this._elementToMarkerNames = new Map, this._unboundMarkerNames = new Set
            }

            toModelElement(t) {
                return this._viewToModelMapping.get(t)
            }

            toViewElement(t) {
                return this._modelToViewMapping.get(t)
            }

            toModelRange(t) {
                return new Ys(this.toModelPosition(t.start), this.toModelPosition(t.end))
            }

            toViewRange(t) {
                return new Xn(this.toViewPosition(t.start), this.toViewPosition(t.end))
            }

            toModelPosition(t) {
                const e = {viewPosition: t, mapper: this};
                return this.fire("viewToModelPosition", e), e.modelPosition
            }

            toViewPosition(t, e = {isPhantom: !1}) {
                const i = {modelPosition: t, mapper: this, isPhantom: e.isPhantom};
                return this.fire("modelToViewPosition", i), i.viewPosition
            }

            markerNameToElements(t) {
                const e = this._markerNameToElements.get(t);
                if (!e) return null;
                const i = new Set;
                for (const t of e) if (t.is("attributeElement")) for (const e of t.getElementsWithSameId()) i.add(e); else i.add(t);
                return i
            }

            registerViewToModelLength(t, e) {
                this._viewToModelLengthCallbacks.set(t, e)
            }

            findMappedViewAncestor(t) {
                let e = t.parent;
                for (; !this._viewToModelMapping.has(e);) e = e.parent;
                return e
            }

            _toModelOffset(t, e, i) {
                if (i != t) {
                    return this._toModelOffset(t.parent, t.index, i) + this._toModelOffset(t, e, t)
                }
                if (t.is("text")) return e;
                let n = 0;
                for (let i = 0; i < e; i++) n += this.getModelLength(t.getChild(i));
                return n
            }

            getModelLength(t) {
                if (this._viewToModelLengthCallbacks.get(t.name)) {
                    return this._viewToModelLengthCallbacks.get(t.name)(t)
                }
                if (this._viewToModelMapping.has(t)) return 1;
                if (t.is("text")) return t.data.length;
                if (t.is("uiElement")) return 0;
                {
                    let e = 0;
                    for (const i of t.getChildren()) e += this.getModelLength(i);
                    return e
                }
            }

            _findPositionIn(t, e) {
                let i, n = 0, o = 0, r = 0;
                if (t.is("text")) return new Zn(t, e);
                for (; o < e;) i = t.getChild(r), o += n = this.getModelLength(i), r++;
                return o == e ? this._moveViewPositionToTextNode(new Zn(t, r)) : this._findPositionIn(i, e - (o - n))
            }

            _moveViewPositionToTextNode(t) {
                const e = t.nodeBefore, i = t.nodeAfter;
                return e instanceof fn ? new Zn(e, e.data.length) : i instanceof fn ? new Zn(i, 0) : t
            }
        }

        cn(Gs, tn);

        class Qs {
            constructor() {
                this._consumable = new Map, this._textProxyRegistry = new Map
            }

            add(t, e) {
                e = Ks(e), t instanceof Bs && (t = this._getSymbolForTextProxy(t)), this._consumable.has(t) || this._consumable.set(t, new Map), this._consumable.get(t).set(e, !0)
            }

            consume(t, e) {
                return e = Ks(e), t instanceof Bs && (t = this._getSymbolForTextProxy(t)), !!this.test(t, e) && (this._consumable.get(t).set(e, !1), !0)
            }

            test(t, e) {
                e = Ks(e), t instanceof Bs && (t = this._getSymbolForTextProxy(t));
                const i = this._consumable.get(t);
                if (void 0 === i) return null;
                const n = i.get(e);
                return void 0 === n ? null : n
            }

            revert(t, e) {
                e = Ks(e), t instanceof Bs && (t = this._getSymbolForTextProxy(t));
                const i = this.test(t, e);
                return !1 === i ? (this._consumable.get(t).set(e, !0), !0) : !0 !== i && null
            }

            _getSymbolForTextProxy(t) {
                let e = null;
                const i = this._textProxyRegistry.get(t.startOffset);
                if (i) {
                    const n = i.get(t.endOffset);
                    n && (e = n.get(t.parent))
                }
                return e || (e = this._addSymbolForTextProxy(t.startOffset, t.endOffset, t.parent)), e
            }

            _addSymbolForTextProxy(t, e, i) {
                const n = Symbol("textProxySymbol");
                let o, r;
                return (o = this._textProxyRegistry.get(t)) || (o = new Map, this._textProxyRegistry.set(t, o)), (r = o.get(e)) || (r = new Map, o.set(e, r)), r.set(i, n), n
            }
        }

        function Ks(t) {
            const e = t.split(":");
            return e.length > 1 ? e[0] + ":" + e[1] : e[0]
        }

        class Js {
            constructor(t) {
                this.conversionApi = Ln({dispatcher: this}, t)
            }

            convertChanges(t, e, i) {
                for (const e of t.getMarkersToRemove()) this.convertMarkerRemove(e.name, e.range, i);
                for (const e of t.getChanges()) "insert" == e.type ? this.convertInsert(Ys._createFromPositionAndShift(e.position, e.length), i) : "remove" == e.type ? this.convertRemove(e.position, e.length, e.name, i) : this.convertAttribute(e.range, e.attributeKey, e.attributeOldValue, e.attributeNewValue, i);
                for (const t of this.conversionApi.mapper.flushUnboundMarkerNames()) {
                    const n = e.get(t).getRange();
                    this.convertMarkerRemove(t, n, i), this.convertMarkerAdd(t, n, i)
                }
                for (const e of t.getMarkersToAdd()) this.convertMarkerAdd(e.name, e.range, i)
            }

            convertInsert(t, e) {
                this.conversionApi.writer = e, this.conversionApi.consumable = this._createInsertConsumable(t);
                for (const e of t) {
                    const t = e.item,
                        i = {item: t, range: Ys._createFromPositionAndShift(e.previousPosition, e.length)};
                    this._testAndFire("insert", i);
                    for (const e of t.getAttributeKeys()) i.attributeKey = e, i.attributeOldValue = null, i.attributeNewValue = t.getAttribute(e), this._testAndFire(`attribute:${e}`, i)
                }
                this._clearConversionApi()
            }

            convertRemove(t, e, i, n) {
                this.conversionApi.writer = n, this.fire("remove:" + i, {
                    position: t,
                    length: e
                }, this.conversionApi), this._clearConversionApi()
            }

            convertAttribute(t, e, i, n, o) {
                this.conversionApi.writer = o, this.conversionApi.consumable = this._createConsumableForRange(t, `attribute:${e}`);
                for (const o of t) {
                    const t = {
                        item: o.item,
                        range: Ys._createFromPositionAndShift(o.previousPosition, o.length),
                        attributeKey: e,
                        attributeOldValue: i,
                        attributeNewValue: n
                    };
                    this._testAndFire(`attribute:${e}`, t)
                }
                this._clearConversionApi()
            }

            convertSelection(t, e, i) {
                const n = Array.from(e.getMarkersAtPosition(t.getFirstPosition()));
                if (this.conversionApi.writer = i, this.conversionApi.consumable = this._createSelectionConsumable(t, n), this.fire("selection", {selection: t}, this.conversionApi), t.isCollapsed) {
                    for (const e of n) {
                        const i = e.getRange();
                        if (!Zs(t.getFirstPosition(), e, this.conversionApi.mapper)) continue;
                        const n = {item: t, markerName: e.name, markerRange: i};
                        this.conversionApi.consumable.test(t, "addMarker:" + e.name) && this.fire("addMarker:" + e.name, n, this.conversionApi)
                    }
                    for (const e of t.getAttributeKeys()) {
                        const i = {
                            item: t,
                            range: t.getFirstRange(),
                            attributeKey: e,
                            attributeOldValue: null,
                            attributeNewValue: t.getAttribute(e)
                        };
                        this.conversionApi.consumable.test(t, "attribute:" + i.attributeKey) && this.fire("attribute:" + i.attributeKey + ":$text", i, this.conversionApi)
                    }
                    this._clearConversionApi()
                }
            }

            convertMarkerAdd(t, e, i) {
                if (!e.root.document || "$graveyard" == e.root.rootName) return;
                this.conversionApi.writer = i;
                const n = "addMarker:" + t, o = new Qs;
                if (o.add(e, n), this.conversionApi.consumable = o, this.fire(n, {
                    markerName: t,
                    markerRange: e
                }, this.conversionApi), o.test(e, n)) {
                    this.conversionApi.consumable = this._createConsumableForRange(e, n);
                    for (const i of e.getItems()) {
                        if (!this.conversionApi.consumable.test(i, n)) continue;
                        const o = {item: i, range: Ys._createOn(i), markerName: t, markerRange: e};
                        this.fire(n, o, this.conversionApi)
                    }
                    this._clearConversionApi()
                }
            }

            convertMarkerRemove(t, e, i) {
                e.root.document && "$graveyard" != e.root.rootName && (this.conversionApi.writer = i, this.fire("removeMarker:" + t, {
                    markerName: t,
                    markerRange: e
                }, this.conversionApi), this._clearConversionApi())
            }

            _createInsertConsumable(t) {
                const e = new Qs;
                for (const i of t) {
                    const t = i.item;
                    e.add(t, "insert");
                    for (const i of t.getAttributeKeys()) e.add(t, "attribute:" + i)
                }
                return e
            }

            _createConsumableForRange(t, e) {
                const i = new Qs;
                for (const n of t.getItems()) i.add(n, e);
                return i
            }

            _createSelectionConsumable(t, e) {
                const i = new Qs;
                i.add(t, "selection");
                for (const n of e) i.add(t, "addMarker:" + n.name);
                for (const e of t.getAttributeKeys()) i.add(t, "attribute:" + e);
                return i
            }

            _testAndFire(t, e) {
                if (!this.conversionApi.consumable.test(e.item, t)) return;
                const i = e.item.name || "$text";
                this.fire(t + ":" + i, e, this.conversionApi)
            }

            _clearConversionApi() {
                delete this.conversionApi.writer, delete this.conversionApi.consumable
            }
        }

        function Zs(t, e, i) {
            const n = e.getRange(), o = Array.from(t.getAncestors());
            return o.shift(), o.reverse(), !o.some(t => {
                if (n.containsItem(t)) {
                    return !!i.toViewElement(t).getCustomProperty("addHighlight")
                }
            })
        }

        cn(Js, tn);

        class Xs {
            constructor(t, e, i) {
                this._lastRangeBackward = !1, this._ranges = [], this._attrs = new Map, t && this.setTo(t, e, i)
            }

            get anchor() {
                if (this._ranges.length > 0) {
                    const t = this._ranges[this._ranges.length - 1];
                    return this._lastRangeBackward ? t.end : t.start
                }
                return null
            }

            get focus() {
                if (this._ranges.length > 0) {
                    const t = this._ranges[this._ranges.length - 1];
                    return this._lastRangeBackward ? t.start : t.end
                }
                return null
            }

            get isCollapsed() {
                return 1 === this._ranges.length && this._ranges[0].isCollapsed
            }

            get rangeCount() {
                return this._ranges.length
            }

            get isBackward() {
                return !this.isCollapsed && this._lastRangeBackward
            }

            isEqual(t) {
                if (this.rangeCount != t.rangeCount) return !1;
                if (0 === this.rangeCount) return !0;
                if (!this.anchor.isEqual(t.anchor) || !this.focus.isEqual(t.focus)) return !1;
                for (const e of this._ranges) {
                    let i = !1;
                    for (const n of t._ranges) if (e.isEqual(n)) {
                        i = !0;
                        break
                    }
                    if (!i) return !1
                }
                return !0
            }

            * getRanges() {
                for (const t of this._ranges) yield new Ys(t.start, t.end)
            }

            getFirstRange() {
                let t = null;
                for (const e of this._ranges) t && !e.start.isBefore(t.start) || (t = e);
                return t ? new Ys(t.start, t.end) : null
            }

            getLastRange() {
                let t = null;
                for (const e of this._ranges) t && !e.end.isAfter(t.end) || (t = e);
                return t ? new Ys(t.start, t.end) : null
            }

            getFirstPosition() {
                const t = this.getFirstRange();
                return t ? t.start.clone() : null
            }

            getLastPosition() {
                const t = this.getLastRange();
                return t ? t.end.clone() : null
            }

            setTo(t, e, i) {
                if (null === t) this._setRanges([]); else if (t instanceof Xs) this._setRanges(t.getRanges(), t.isBackward); else if (t && "function" == typeof t.getRanges) this._setRanges(t.getRanges(), t.isBackward); else if (t instanceof Ys) this._setRanges([t], !!e && !!e.backward); else if (t instanceof $s) this._setRanges([new Ys(t)]); else if (t instanceof zs) {
                    const n = !!i && !!i.backward;
                    let o;
                    if ("in" == e) o = Ys._createIn(t); else if ("on" == e) o = Ys._createOn(t); else {
                        if (void 0 === e) throw new Yi.b("model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.", [this, t]);
                        o = new Ys($s._createAt(t, e))
                    }
                    this._setRanges([o], n)
                } else {
                    if (!pn(t)) throw new Yi.b("model-selection-setTo-not-selectable: Cannot set the selection to the given place.", [this, t]);
                    this._setRanges(t, e && !!e.backward)
                }
            }

            _setRanges(t, e = !1) {
                const i = (t = Array.from(t)).some(e => {
                    if (!(e instanceof Ys)) throw new Yi.b("model-selection-set-ranges-not-range: Selection range set to an object that is not an instance of model.Range.", [this, t]);
                    return this._ranges.every(t => !t.isEqual(e))
                });
                if (t.length !== this._ranges.length || i) {
                    this._removeAllRanges();
                    for (const e of t) this._pushRange(e);
                    this._lastRangeBackward = !!e, this.fire("change:range", {directChange: !0})
                }
            }

            setFocus(t, e) {
                if (null === this.anchor) throw new Yi.b("model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.", [this, t]);
                const i = $s._createAt(t, e);
                if ("same" == i.compareWith(this.focus)) return;
                const n = this.anchor;
                this._ranges.length && this._popRange(), "before" == i.compareWith(n) ? (this._pushRange(new Ys(i, n)), this._lastRangeBackward = !0) : (this._pushRange(new Ys(n, i)), this._lastRangeBackward = !1), this.fire("change:range", {directChange: !0})
            }

            getAttribute(t) {
                return this._attrs.get(t)
            }

            getAttributes() {
                return this._attrs.entries()
            }

            getAttributeKeys() {
                return this._attrs.keys()
            }

            hasAttribute(t) {
                return this._attrs.has(t)
            }

            removeAttribute(t) {
                this.hasAttribute(t) && (this._attrs.delete(t), this.fire("change:attribute", {
                    attributeKeys: [t],
                    directChange: !0
                }))
            }

            setAttribute(t, e) {
                this.getAttribute(t) !== e && (this._attrs.set(t, e), this.fire("change:attribute", {
                    attributeKeys: [t],
                    directChange: !0
                }))
            }

            getSelectedElement() {
                if (1 !== this.rangeCount) return null;
                const t = this.getFirstRange(), e = t.start.nodeAfter, i = t.end.nodeBefore;
                return e instanceof Hs && e == i ? e : null
            }

            is(t) {
                return "selection" == t || "model:selection" == t
            }

            * getSelectedBlocks() {
                const t = new WeakSet;
                for (const e of this.getRanges()) {
                    const i = ia(e.start, t);
                    i && na(i, e) && (yield i);
                    for (const i of e.getWalker()) {
                        const n = i.item;
                        "elementEnd" == i.type && ea(n, t, e) && (yield n)
                    }
                    const n = ia(e.end, t);
                    n && !e.end.isTouching($s._createAt(n, 0)) && na(n, e) && (yield n)
                }
            }

            containsEntireContent(t = this.anchor.root) {
                const e = $s._createAt(t, 0), i = $s._createAt(t, "end");
                return e.isTouching(this.getFirstPosition()) && i.isTouching(this.getLastPosition())
            }

            _pushRange(t) {
                this._checkRange(t), this._ranges.push(new Ys(t.start, t.end))
            }

            _checkRange(t) {
                for (let e = 0; e < this._ranges.length; e++) if (t.isIntersecting(this._ranges[e])) throw new Yi.b("model-selection-range-intersects: Trying to add a range that intersects with another range in the selection.", [this, t], {
                    addedRange: t,
                    intersectingRange: this._ranges[e]
                })
            }

            _removeAllRanges() {
                for (; this._ranges.length > 0;) this._popRange()
            }

            _popRange() {
                this._ranges.pop()
            }
        }

        function ta(t, e) {
            return !e.has(t) && (e.add(t), t.document.model.schema.isBlock(t) && t.parent)
        }

        function ea(t, e, i) {
            return ta(t, e) && na(t, i)
        }

        function ia(t, e) {
            const i = t.parent.document.model.schema, n = t.parent.getAncestors({parentFirst: !0, includeSelf: !0});
            let o = !1;
            const r = n.find(t => !o && (!(o = i.isLimit(t)) && ta(t, e)));
            return n.forEach(t => e.add(t)), r
        }

        function na(t, e) {
            const i = function (t) {
                const e = t.document.model.schema;
                let i = t.parent;
                for (; i;) {
                    if (e.isBlock(i)) return i;
                    i = i.parent
                }
            }(t);
            return !i || !e.containsRange(Ys._createOn(i), !0)
        }

        cn(Xs, tn);

        class oa extends Ys {
            constructor(t, e) {
                super(t, e), function () {
                    this.listenTo(this.root.document.model, "applyOperation", (t, e) => {
                        const i = e[0];
                        i.isDocumentOperation && function (t) {
                            const e = this.getTransformedByOperation(t), i = Ys._createFromRanges(e),
                                n = !i.isEqual(this), o = function (t, e) {
                                    switch (e.type) {
                                        case"insert":
                                            return t.containsPosition(e.position);
                                        case"move":
                                        case"remove":
                                        case"reinsert":
                                        case"merge":
                                            return t.containsPosition(e.sourcePosition) || t.start.isEqual(e.sourcePosition) || t.containsPosition(e.targetPosition);
                                        case"split":
                                            return t.containsPosition(e.splitPosition) || t.containsPosition(e.insertionPosition)
                                    }
                                    return !1
                                }(this, t);
                            let r = null;
                            if (n) {
                                "$graveyard" == i.root.rootName && (r = "remove" == t.type ? t.sourcePosition : t.deletionPosition);
                                const e = this.toRange();
                                this.start = i.start, this.end = i.end, this.fire("change:range", e, {deletionPosition: r})
                            } else o && this.fire("change:content", this.toRange(), {deletionPosition: r})
                        }.call(this, i)
                    }, {priority: "low"})
                }.call(this)
            }

            detach() {
                this.stopListening()
            }

            is(t) {
                return "liveRange" == t || "model:liveRange" == t || super.is(t)
            }

            toRange() {
                return new Ys(this.start, this.end)
            }

            static fromRange(t) {
                return new oa(t.start, t.end)
            }
        }

        cn(oa, tn);
        const ra = "selection:";

        class sa {
            constructor(t) {
                this._selection = new aa(t), this._selection.delegate("change:range").to(this), this._selection.delegate("change:attribute").to(this)
            }

            get isCollapsed() {
                return this._selection.isCollapsed
            }

            get anchor() {
                return this._selection.anchor
            }

            get focus() {
                return this._selection.focus
            }

            get rangeCount() {
                return this._selection.rangeCount
            }

            get hasOwnRange() {
                return this._selection.hasOwnRange
            }

            get isBackward() {
                return this._selection.isBackward
            }

            get isGravityOverridden() {
                return this._selection.isGravityOverridden
            }

            get markers() {
                return this._selection.markers
            }

            get _ranges() {
                return this._selection._ranges
            }

            getRanges() {
                return this._selection.getRanges()
            }

            getFirstPosition() {
                return this._selection.getFirstPosition()
            }

            getLastPosition() {
                return this._selection.getLastPosition()
            }

            getFirstRange() {
                return this._selection.getFirstRange()
            }

            getLastRange() {
                return this._selection.getLastRange()
            }

            getSelectedBlocks() {
                return this._selection.getSelectedBlocks()
            }

            getSelectedElement() {
                return this._selection.getSelectedElement()
            }

            containsEntireContent(t) {
                return this._selection.containsEntireContent(t)
            }

            destroy() {
                this._selection.destroy()
            }

            getAttributeKeys() {
                return this._selection.getAttributeKeys()
            }

            getAttributes() {
                return this._selection.getAttributes()
            }

            getAttribute(t) {
                return this._selection.getAttribute(t)
            }

            hasAttribute(t) {
                return this._selection.hasAttribute(t)
            }

            refresh() {
                this._selection._updateMarkers(), this._selection._updateAttributes(!1)
            }

            is(t) {
                return "selection" == t || "model:selection" == t || "documentSelection" == t || "model:documentSelection" == t
            }

            _setFocus(t, e) {
                this._selection.setFocus(t, e)
            }

            _setTo(t, e, i) {
                this._selection.setTo(t, e, i)
            }

            _setAttribute(t, e) {
                this._selection.setAttribute(t, e)
            }

            _removeAttribute(t) {
                this._selection.removeAttribute(t)
            }

            _getStoredAttributes() {
                return this._selection._getStoredAttributes()
            }

            _overrideGravity() {
                return this._selection.overrideGravity()
            }

            _restoreGravity(t) {
                this._selection.restoreGravity(t)
            }

            static _getStoreAttributeKey(t) {
                return ra + t
            }

            static _isStoreAttributeKey(t) {
                return t.startsWith(ra)
            }
        }

        cn(sa, tn);

        class aa extends Xs {
            constructor(t) {
                super(), this.markers = new oo({idProperty: "name"}), this._model = t.model, this._document = t, this._attributePriority = new Map, this._fixGraveyardRangesData = [], this._hasChangedRange = !1, this._overriddenGravityRegister = new Set, this.listenTo(this._model, "applyOperation", (t, e) => {
                    const i = e[0];
                    if (i.isDocumentOperation && "marker" != i.type && "rename" != i.type && "noop" != i.type) {
                        for (; this._fixGraveyardRangesData.length;) {
                            const {liveRange: t, sourcePosition: e} = this._fixGraveyardRangesData.shift();
                            this._fixGraveyardSelection(t, e)
                        }
                        this._hasChangedRange && (this._hasChangedRange = !1, this.fire("change:range", {directChange: !1}))
                    }
                }, {priority: "lowest"}), this.on("change:range", () => {
                    for (const t of this.getRanges()) if (!this._document._validateSelectionRange(t)) throw new Yi.b("document-selection-wrong-position: Range from document selection starts or ends at incorrect position.", this, {range: t})
                }), this.listenTo(this._model.markers, "update", () => this._updateMarkers()), this.listenTo(this._document, "change", (t, e) => {
                    !function (t, e) {
                        const i = t.document.differ;
                        for (const n of i.getChanges()) {
                            if ("insert" != n.type) continue;
                            const i = n.position.parent, o = n.length === i.maxOffset;
                            o && t.enqueueChange(e, t => {
                                const e = Array.from(i.getAttributeKeys()).filter(t => t.startsWith(ra));
                                for (const n of e) t.removeAttribute(n, i)
                            })
                        }
                    }(this._model, e)
                })
            }

            get isCollapsed() {
                return 0 === this._ranges.length ? this._document._getDefaultRange().isCollapsed : super.isCollapsed
            }

            get anchor() {
                return super.anchor || this._document._getDefaultRange().start
            }

            get focus() {
                return super.focus || this._document._getDefaultRange().end
            }

            get rangeCount() {
                return this._ranges.length ? this._ranges.length : 1
            }

            get hasOwnRange() {
                return this._ranges.length > 0
            }

            get isGravityOverridden() {
                return !!this._overriddenGravityRegister.size
            }

            destroy() {
                for (let t = 0; t < this._ranges.length; t++) this._ranges[t].detach();
                this.stopListening()
            }

            * getRanges() {
                this._ranges.length ? yield* super.getRanges() : yield this._document._getDefaultRange()
            }

            getFirstRange() {
                return super.getFirstRange() || this._document._getDefaultRange()
            }

            getLastRange() {
                return super.getLastRange() || this._document._getDefaultRange()
            }

            setTo(t, e, i) {
                super.setTo(t, e, i), this._updateAttributes(!0)
            }

            setFocus(t, e) {
                super.setFocus(t, e), this._updateAttributes(!0)
            }

            setAttribute(t, e) {
                if (this._setAttribute(t, e)) {
                    const e = [t];
                    this.fire("change:attribute", {attributeKeys: e, directChange: !0})
                }
            }

            removeAttribute(t) {
                if (this._removeAttribute(t)) {
                    const e = [t];
                    this.fire("change:attribute", {attributeKeys: e, directChange: !0})
                }
            }

            overrideGravity() {
                const t = Ki();
                return this._overriddenGravityRegister.add(t), 1 === this._overriddenGravityRegister.size && this._updateAttributes(!0), t
            }

            restoreGravity(t) {
                if (!this._overriddenGravityRegister.has(t)) throw new Yi.b("document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.", this, {uid: t});
                this._overriddenGravityRegister.delete(t), this.isGravityOverridden || this._updateAttributes(!0)
            }

            _popRange() {
                this._ranges.pop().detach()
            }

            _pushRange(t) {
                const e = this._prepareRange(t);
                e && this._ranges.push(e)
            }

            _prepareRange(t) {
                if (this._checkRange(t), t.root == this._document.graveyard) return;
                const e = oa.fromRange(t);
                return e.on("change:range", (t, i, n) => {
                    this._hasChangedRange = !0, e.root == this._document.graveyard && this._fixGraveyardRangesData.push({
                        liveRange: e,
                        sourcePosition: n.deletionPosition
                    })
                }), e
            }

            _updateMarkers() {
                const t = [];
                for (const e of this._model.markers) {
                    const i = e.getRange();
                    for (const n of this.getRanges()) i.containsRange(n, !n.isCollapsed) && t.push(e)
                }
                for (const e of t) this.markers.has(e) || this.markers.add(e);
                for (const e of Array.from(this.markers)) t.includes(e) || this.markers.remove(e)
            }

            _updateAttributes(t) {
                const e = js(this._getSurroundingAttributes()), i = js(this.getAttributes());
                if (t) this._attributePriority = new Map, this._attrs = new Map; else for (const [t, e] of this._attributePriority) "low" == e && (this._attrs.delete(t), this._attributePriority.delete(t));
                this._setAttributesTo(e);
                const n = [];
                for (const [t, e] of this.getAttributes()) i.has(t) && i.get(t) === e || n.push(t);
                for (const [t] of i) this.hasAttribute(t) || n.push(t);
                n.length > 0 && this.fire("change:attribute", {attributeKeys: n, directChange: !1})
            }

            _setAttribute(t, e, i = !0) {
                const n = i ? "normal" : "low";
                return ("low" != n || "normal" != this._attributePriority.get(t)) && (super.getAttribute(t) !== e && (this._attrs.set(t, e), this._attributePriority.set(t, n), !0))
            }

            _removeAttribute(t, e = !0) {
                const i = e ? "normal" : "low";
                return ("low" != i || "normal" != this._attributePriority.get(t)) && (this._attributePriority.set(t, i), !!super.hasAttribute(t) && (this._attrs.delete(t), !0))
            }

            _setAttributesTo(t) {
                const e = new Set;
                for (const [e, i] of this.getAttributes()) t.get(e) !== i && this._removeAttribute(e, !1);
                for (const [i, n] of t) {
                    this._setAttribute(i, n, !1) && e.add(i)
                }
                return e
            }

            * _getStoredAttributes() {
                const t = this.getFirstPosition().parent;
                if (this.isCollapsed && t.isEmpty) for (const e of t.getAttributeKeys()) if (e.startsWith(ra)) {
                    yield[e.substr(ra.length), t.getAttribute(e)]
                }
            }

            _getSurroundingAttributes() {
                const t = this.getFirstPosition(), e = this._model.schema;
                let i = null;
                if (this.isCollapsed) {
                    const e = t.textNode ? t.textNode : t.nodeBefore, n = t.textNode ? t.textNode : t.nodeAfter;
                    if (this.isGravityOverridden || (i = ca(e)), i || (i = ca(n)), !this.isGravityOverridden && !i) {
                        let t = e;
                        for (; t && !i;) i = ca(t = t.previousSibling)
                    }
                    if (!i) {
                        let t = n;
                        for (; t && !i;) i = ca(t = t.nextSibling)
                    }
                    i || (i = this._getStoredAttributes())
                } else {
                    const t = this.getFirstRange();
                    for (const n of t) {
                        if (n.item.is("element") && e.isObject(n.item)) break;
                        if ("text" == n.type) {
                            i = n.item.getAttributes();
                            break
                        }
                    }
                }
                return i
            }

            _fixGraveyardSelection(t, e) {
                const i = e.clone(), n = this._model.schema.getNearestSelectionRange(i), o = this._ranges.indexOf(t);
                if (this._ranges.splice(o, 1), t.detach(), n) {
                    const t = this._prepareRange(n);
                    this._ranges.splice(o, 0, t)
                }
            }
        }

        function ca(t) {
            return t instanceof Bs || t instanceof Vs ? t.getAttributes() : null
        }

        class la {
            constructor(t) {
                this._dispatchers = t
            }

            add(t) {
                for (const e of this._dispatchers) t(e);
                return this
            }
        }

        var da = 1, ha = 4;
        var ua = function (t) {
            return Bi(t, da | ha)
        };

        class fa extends la {
            elementToElement(t) {
                return this.add(function (t) {
                    return (t = ua(t)).view = ma(t.view, "container"), e => {
                        e.on("insert:" + t.model, function (t) {
                            return (e, i, n) => {
                                const o = t(i.item, n.writer);
                                if (!o) return;
                                if (!n.consumable.consume(i.item, "insert")) return;
                                const r = n.mapper.toViewPosition(i.range.start);
                                n.mapper.bindElements(i.item, o), n.writer.insert(r, o)
                            }
                        }(t.view), {priority: t.converterPriority || "normal"})
                    }
                }(t))
            }

            attributeToElement(t) {
                return this.add(function (t) {
                    let e = "attribute:" + ((t = ua(t)).model.key ? t.model.key : t.model);
                    t.model.name && (e += ":" + t.model.name);
                    if (t.model.values) for (const e of t.model.values) t.view[e] = ma(t.view[e], "attribute"); else t.view = ma(t.view, "attribute");
                    const i = pa(t);
                    return n => {
                        n.on(e, function (t) {
                            return (e, i, n) => {
                                const o = t(i.attributeOldValue, n.writer), r = t(i.attributeNewValue, n.writer);
                                if (!o && !r) return;
                                if (!n.consumable.consume(i.item, e.name)) return;
                                const s = n.writer, a = s.document.selection;
                                if (i.item instanceof Xs || i.item instanceof sa) s.wrap(a.getFirstRange(), r); else {
                                    let t = n.mapper.toViewRange(i.range);
                                    null !== i.attributeOldValue && o && (t = s.unwrap(t, o)), null !== i.attributeNewValue && r && s.wrap(t, r)
                                }
                            }
                        }(i), {priority: t.converterPriority || "normal"})
                    }
                }(t))
            }

            attributeToAttribute(t) {
                return this.add(function (t) {
                    let e = "attribute:" + ((t = ua(t)).model.key ? t.model.key : t.model);
                    t.model.name && (e += ":" + t.model.name);
                    if (t.model.values) for (const e of t.model.values) t.view[e] = ba(t.view[e]); else t.view = ba(t.view);
                    const i = pa(t);
                    return n => {
                        n.on(e, function (t) {
                            return (e, i, n) => {
                                const o = t(i.attributeOldValue, i), r = t(i.attributeNewValue, i);
                                if (!o && !r) return;
                                if (!n.consumable.consume(i.item, e.name)) return;
                                const s = n.mapper.toViewElement(i.item), a = n.writer;
                                if (!s) throw new Yi.b("conversion-attribute-to-attribute-on-text: Trying to convert text node's attribute with attribute-to-attribute converter.", [i, n]);
                                if (null !== i.attributeOldValue && o) if ("class" == o.key) {
                                    const t = Array.isArray(o.value) ? o.value : [o.value];
                                    for (const e of t) a.removeClass(e, s)
                                } else if ("style" == o.key) {
                                    const t = Object.keys(o.value);
                                    for (const e of t) a.removeStyle(e, s)
                                } else a.removeAttribute(o.key, s);
                                if (null !== i.attributeNewValue && r) if ("class" == r.key) {
                                    const t = Array.isArray(r.value) ? r.value : [r.value];
                                    for (const e of t) a.addClass(e, s)
                                } else if ("style" == r.key) {
                                    const t = Object.keys(r.value);
                                    for (const e of t) a.setStyle(e, r.value[e], s)
                                } else a.setAttribute(r.key, r.value, s)
                            }
                        }(i), {priority: t.converterPriority || "normal"})
                    }
                }(t))
            }

            markerToElement(t) {
                return this.add(function (t) {
                    return (t = ua(t)).view = ma(t.view, "ui"), e => {
                        e.on("addMarker:" + t.model, function (t) {
                            return (e, i, n) => {
                                i.isOpening = !0;
                                const o = t(i, n.writer);
                                i.isOpening = !1;
                                const r = t(i, n.writer);
                                if (!o || !r) return;
                                const s = i.markerRange;
                                if (s.isCollapsed && !n.consumable.consume(s, e.name)) return;
                                for (const t of s) if (!n.consumable.consume(t.item, e.name)) return;
                                const a = n.mapper, c = n.writer;
                                c.insert(a.toViewPosition(s.start), o), n.mapper.bindElementToMarker(o, i.markerName), s.isCollapsed || (c.insert(a.toViewPosition(s.end), r), n.mapper.bindElementToMarker(r, i.markerName)), e.stop()
                            }
                        }(t.view), {priority: t.converterPriority || "normal"}), e.on("removeMarker:" + t.model, (t.view, (t, e, i) => {
                            const n = i.mapper.markerNameToElements(e.markerName);
                            if (n) {
                                for (const t of n) i.mapper.unbindElementFromMarkerName(t, e.markerName), i.writer.clear(i.writer.createRangeOn(t), t);
                                i.writer.clearClonedElementsGroup(e.markerName), t.stop()
                            }
                        }), {priority: t.converterPriority || "normal"})
                    }
                }(t))
            }

            markerToHighlight(t) {
                return this.add(function (t) {
                    return e => {
                        e.on("addMarker:" + t.model, function (t) {
                            return (e, i, n) => {
                                if (!i.item) return;
                                if (!(i.item instanceof Xs || i.item instanceof sa || i.item.is("textProxy"))) return;
                                const o = wa(t, i, n);
                                if (!o) return;
                                if (!n.consumable.consume(i.item, e.name)) return;
                                const r = ga(o), s = n.writer, a = s.document.selection;
                                if (i.item instanceof Xs || i.item instanceof sa) s.wrap(a.getFirstRange(), r, a); else {
                                    const t = n.mapper.toViewRange(i.range), e = s.wrap(t, r);
                                    for (const t of e.getItems()) if (t.is("attributeElement") && t.isSimilar(r)) {
                                        n.mapper.bindElementToMarker(t, i.markerName);
                                        break
                                    }
                                }
                            }
                        }(t.view), {priority: t.converterPriority || "normal"}), e.on("addMarker:" + t.model, function (t) {
                            return (e, i, n) => {
                                if (!i.item) return;
                                if (!(i.item instanceof Hs)) return;
                                const o = wa(t, i, n);
                                if (!o) return;
                                if (!n.consumable.test(i.item, e.name)) return;
                                const r = n.mapper.toViewElement(i.item);
                                if (r && r.getCustomProperty("addHighlight")) {
                                    n.consumable.consume(i.item, e.name);
                                    for (const t of Ys._createIn(i.item)) n.consumable.consume(t.item, e.name);
                                    r.getCustomProperty("addHighlight")(r, o, n.writer), n.mapper.bindElementToMarker(r, i.markerName)
                                }
                            }
                        }(t.view), {priority: t.converterPriority || "normal"}), e.on("removeMarker:" + t.model, function (t) {
                            return (e, i, n) => {
                                if (i.markerRange.isCollapsed) return;
                                const o = wa(t, i, n);
                                if (!o) return;
                                const r = ga(o), s = n.mapper.markerNameToElements(i.markerName);
                                if (s) {
                                    for (const t of s) n.mapper.unbindElementFromMarkerName(t, i.markerName), t.is("attributeElement") ? n.writer.unwrap(n.writer.createRangeOn(t), r) : t.getCustomProperty("removeHighlight")(t, o.id, n.writer);
                                    n.writer.clearClonedElementsGroup(i.markerName), e.stop()
                                }
                            }
                        }(t.view), {priority: t.converterPriority || "normal"})
                    }
                }(t))
            }
        }

        function ga(t) {
            const e = new ao("span", t.attributes);
            return t.classes && e._addClass(t.classes), t.priority && (e._priority = t.priority), e._id = t.id, e
        }

        function ma(t, e) {
            return "function" == typeof t ? t : (i, n) => (function (t, e, i) {
                "string" == typeof t && (t = {name: t});
                let n;
                const o = Object.assign({}, t.attributes);
                if ("container" == i) n = e.createContainerElement(t.name, o); else if ("attribute" == i) {
                    const i = {priority: t.priority || ao.DEFAULT_PRIORITY};
                    n = e.createAttributeElement(t.name, o, i)
                } else n = e.createUIElement(t.name, o);
                if (t.styles) {
                    const i = Object.keys(t.styles);
                    for (const o of i) e.setStyle(o, t.styles[o], n)
                }
                if (t.classes) {
                    const i = t.classes;
                    if ("string" == typeof i) e.addClass(i, n); else for (const t of i) e.addClass(t, n)
                }
                return n
            })(t, n, e)
        }

        function pa(t) {
            return t.model.values ? (e, i) => {
                const n = t.view[e];
                return n ? n(e, i) : null
            } : t.view
        }

        function ba(t) {
            return "string" == typeof t ? e => ({
                key: t,
                value: e
            }) : "object" == typeof t ? t.value ? () => t : e => ({key: t.key, value: e}) : t
        }

        function wa(t, e, i) {
            const n = "function" == typeof t ? t(e, i) : t;
            return n ? (n.priority || (n.priority = 10), n.id || (n.id = e.markerName), n) : null
        }

        class ka extends la {
            elementToElement(t) {
                return this.add(_a(t))
            }

            elementToAttribute(t) {
                return this.add(function (t) {
                    ya(t = ua(t));
                    const e = xa(t, !1), i = va(t.view), n = i ? "element:" + i : "element";
                    return i => {
                        i.on(n, e, {priority: t.converterPriority || "low"})
                    }
                }(t))
            }

            attributeToAttribute(t) {
                return this.add(function (t) {
                    let e = null;
                    ("string" == typeof (t = ua(t)).view || t.view.key) && (e = function (t) {
                        "string" == typeof t.view && (t.view = {key: t.view});
                        const e = t.view.key;
                        let i;
                        if ("class" == e || "style" == e) {
                            const n = "class" == e ? "classes" : "styles";
                            i = {[n]: t.view.value}
                        } else {
                            const n = void 0 === t.view.value ? /[\s\S]*/ : t.view.value;
                            i = {attributes: {[e]: n}}
                        }
                        t.view.name && (i.name = t.view.name);
                        return t.view = i, e
                    }(t));
                    ya(t, e);
                    const i = xa(t, !0);
                    return e => {
                        e.on("element", i, {priority: t.converterPriority || "low"})
                    }
                }(t))
            }

            elementToMarker(t) {
                return this.add(function (t) {
                    return function (t) {
                        const e = t.model;
                        t.model = ((t, i) => {
                            const n = "string" == typeof e ? e : e(t);
                            return i.createElement("$marker", {"data-name": n})
                        })
                    }(t = ua(t)), _a(t)
                }(t))
            }
        }

        function _a(t) {
            const e = function (t) {
                const e = t.view ? new bn(t.view) : null;
                return (i, n, o) => {
                    let r = {};
                    if (e) {
                        const t = e.match(n.viewItem);
                        if (!t) return;
                        r = t.match
                    }
                    r.name = !0;
                    const s = function (t, e, i) {
                        return t instanceof Function ? t(e, i) : i.createElement(t)
                    }(t.model, n.viewItem, o.writer);
                    if (!s) return;
                    if (!o.consumable.test(n.viewItem, r)) return;
                    const a = o.splitToAllowedParent(s, n.modelCursor);
                    if (!a) return;
                    o.writer.insert(s, a.position), o.convertChildren(n.viewItem, o.writer.createPositionAt(s, 0)), o.consumable.consume(n.viewItem, r);
                    const c = o.getSplitParts(s);
                    n.modelRange = new Ys(o.writer.createPositionBefore(s), o.writer.createPositionAfter(c[c.length - 1])), a.cursorParent ? n.modelCursor = o.writer.createPositionAt(a.cursorParent, 0) : n.modelCursor = n.modelRange.end
                }
            }(t = ua(t)), i = va(t.view), n = i ? "element:" + i : "element";
            return i => {
                i.on(n, e, {priority: t.converterPriority || "normal"})
            }
        }

        function va(t) {
            return "string" == typeof t ? t : "object" == typeof t && "string" == typeof t.name ? t.name : null
        }

        function ya(t, e = null) {
            const i = null === e || (t => t.getAttribute(e)), n = "object" != typeof t.model ? t.model : t.model.key,
                o = "object" != typeof t.model || void 0 === t.model.value ? i : t.model.value;
            t.model = {key: n, value: o}
        }

        function xa(t, e) {
            const i = new bn(t.view);
            return (n, o, r) => {
                const s = i.match(o.viewItem);
                if (!s) return;
                const a = t.model.key,
                    c = "function" == typeof t.model.value ? t.model.value(o.viewItem) : t.model.value;
                null !== c && (!function (t, e) {
                    const i = "function" == typeof t ? t(e) : t;
                    if ("object" == typeof i && !va(i)) return !1;
                    return !i.classes && !i.attributes && !i.styles
                }(t.view, o.viewItem) ? delete s.match.name : s.match.name = !0, r.consumable.test(o.viewItem, s.match) && (o.modelRange || (o = Object.assign(o, r.convertChildren(o.viewItem, o.modelCursor))), function (t, e, i, n) {
                    let o = !1;
                    for (const r of Array.from(t.getItems({shallow: i}))) n.schema.checkAttribute(r, e.key) && (n.writer.setAttribute(e.key, e.value, r), o = !0);
                    return o
                }(o.modelRange, {key: a, value: c}, e, r) && r.consumable.consume(o.viewItem, s.match)))
            }
        }

        class Aa {
            constructor(t) {
                this.model = t, this.view = new Ls, this.mapper = new Gs, this.downcastDispatcher = new Js({mapper: this.mapper});
                const e = this.model.document, i = e.selection, n = this.model.markers;
                this.listenTo(this.model, "_beforeChanges", () => {
                    this.view._disableRendering(!0)
                }, {priority: "highest"}), this.listenTo(this.model, "_afterChanges", () => {
                    this.view._disableRendering(!1)
                }, {priority: "lowest"}), this.listenTo(e, "change", () => {
                    this.view.change(t => {
                        this.downcastDispatcher.convertChanges(e.differ, n, t), this.downcastDispatcher.convertSelection(i, n, t)
                    })
                }, {priority: "low"}), this.listenTo(this.view.document, "selectionChange", function (t, e) {
                    return (i, n) => {
                        const o = n.newSelection, r = new Xs, s = [];
                        for (const t of o.getRanges()) s.push(e.toModelRange(t));
                        r.setTo(s, {backward: o.isBackward}), r.isEqual(t.document.selection) || t.change(t => {
                            t.setSelection(r)
                        })
                    }
                }(this.model, this.mapper)), this.downcastDispatcher.on("insert:$text", (t, e, i) => {
                    if (!i.consumable.consume(e.item, "insert")) return;
                    const n = i.writer, o = i.mapper.toViewPosition(e.range.start), r = n.createText(e.item.data);
                    n.insert(o, r)
                }, {priority: "lowest"}), this.downcastDispatcher.on("remove", (t, e, i) => {
                    const n = i.mapper.toViewPosition(e.position), o = e.position.getShiftedBy(e.length),
                        r = i.mapper.toViewPosition(o, {isPhantom: !0}), s = i.writer.createRange(n, r),
                        a = i.writer.remove(s.getTrimmed());
                    for (const t of i.writer.createRangeIn(a).getItems()) i.mapper.unbindViewElement(t)
                }, {priority: "low"}), this.downcastDispatcher.on("selection", (t, e, i) => {
                    const n = i.writer, o = n.document.selection;
                    for (const t of o.getRanges()) t.isCollapsed && t.end.parent.document && i.writer.mergeAttributes(t.start);
                    n.setSelection(null)
                }, {priority: "low"}), this.downcastDispatcher.on("selection", (t, e, i) => {
                    const n = e.selection;
                    if (n.isCollapsed) return;
                    if (!i.consumable.consume(n, "selection")) return;
                    const o = [];
                    for (const t of n.getRanges()) {
                        const e = i.mapper.toViewRange(t);
                        o.push(e)
                    }
                    i.writer.setSelection(o, {backward: n.isBackward})
                }, {priority: "low"}), this.downcastDispatcher.on("selection", (t, e, i) => {
                    const n = e.selection;
                    if (!n.isCollapsed) return;
                    if (!i.consumable.consume(n, "selection")) return;
                    const o = i.writer, r = n.getFirstPosition(), s = i.mapper.toViewPosition(r),
                        a = o.breakAttributes(s);
                    o.setSelection(a)
                }, {priority: "low"}), this.view.document.roots.bindTo(this.model.document.roots).using(t => {
                    if ("$graveyard" == t.rootName) return null;
                    const e = new Kn(t.name);
                    return e.rootName = t.rootName, e._document = this.view.document, this.mapper.bindElements(t, e), e
                })
            }

            destroy() {
                this.view.destroy(), this.stopListening()
            }
        }

        cn(Aa, Fn);

        class Ta {
            constructor(t, e = []) {
                this._editor = t, this._availablePlugins = new Map, this._plugins = new Map;
                for (const t of e) this._availablePlugins.set(t, t), t.pluginName && this._availablePlugins.set(t.pluginName, t)
            }

            * [Symbol.iterator]() {
                for (const t of this._plugins) "function" == typeof t[0] && (yield t)
            }

            get(t) {
                const e = this._plugins.get(t);
                if (!e) {
                    const e = "plugincollection-plugin-not-loaded: The requested plugin is not loaded.";
                    let i = t;
                    throw"function" == typeof t && (i = t.pluginName || t.name), new Yi.b(e, this._editor, {plugin: i})
                }
                return e
            }

            has(t) {
                return this._plugins.has(t)
            }

            init(t, e = []) {
                const i = this, n = this._editor, o = new Set, r = [], s = u(t), a = u(e), c = function (t) {
                    const e = [];
                    for (const i of t) h(i) || e.push(i);
                    return e.length ? e : null
                }(t);
                if (c) {
                    const t = "plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.";
                    return console.error(Object(Yi.a)(t), {plugins: c}), Promise.reject(new Yi.b(t, this._editor, {plugins: c}))
                }
                return Promise.all(s.map(l)).then(() => d(r, "init")).then(() => d(r, "afterInit")).then(() => r);

                function l(t) {
                    if (!a.includes(t) && !i._plugins.has(t) && !o.has(t)) return function (t) {
                        return new Promise(s => {
                            o.add(t), t.requires && t.requires.forEach(i => {
                                const o = h(i);
                                if (e.includes(o)) throw new Yi.b("plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.", n, {
                                    plugin: o,
                                    requiredBy: t
                                });
                                l(o)
                            });
                            const a = new t(n);
                            i._add(t, a), r.push(a), s()
                        })
                    }(t).catch(e => {
                        throw console.error(Object(Yi.a)("plugincollection-load: It was not possible to load the plugin."), {plugin: t}), e
                    })
                }

                function d(t, e) {
                    return t.reduce((t, i) => i[e] ? t.then(i[e].bind(i)) : t, Promise.resolve())
                }

                function h(t) {
                    return "function" == typeof t ? t : i._availablePlugins.get(t)
                }

                function u(t) {
                    return t.map(t => h(t)).filter(t => !!t)
                }
            }

            destroy() {
                const t = Array.from(this).map(([, t]) => t).filter(t => "function" == typeof t.destroy).map(t => t.destroy());
                return Promise.all(t)
            }

            _add(t, e) {
                this._plugins.set(t, e);
                const i = t.pluginName;
                if (i) {
                    if (this._plugins.has(i)) throw new Yi.b("plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.", null, {
                        pluginName: i,
                        plugin1: this._plugins.get(i).constructor,
                        plugin2: t
                    });
                    this._plugins.set(i, e)
                }
            }
        }

        cn(Ta, tn);

        class Ca {
            constructor() {
                this._commands = new Map
            }

            add(t, e) {
                this._commands.set(t, e)
            }

            get(t) {
                return this._commands.get(t)
            }

            execute(t, ...e) {
                const i = this.get(t);
                if (!i) throw new Yi.b("commandcollection-command-not-found: Command does not exist.", this, {commandName: t});
                i.execute(...e)
            }

            * names() {
                yield* this._commands.keys()
            }

            * commands() {
                yield* this._commands.values()
            }

            [Symbol.iterator]() {
                return this._commands[Symbol.iterator]()
            }

            destroy() {
                for (const t of this.commands()) t.destroy()
            }
        }

        function Pa(t, e) {
            const i = Object.keys(window.CKEDITOR_TRANSLATIONS).length;
            return 1 === i && (t = Object.keys(window.CKEDITOR_TRANSLATIONS)[0]), 0 !== i && function (t, e) {
                return t in window.CKEDITOR_TRANSLATIONS && e in window.CKEDITOR_TRANSLATIONS[t]
            }(t, e) ? window.CKEDITOR_TRANSLATIONS[t][e].replace(/ \[context: [^\]]+\]$/, "") : e.replace(/ \[context: [^\]]+\]$/, "")
        }

        window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {});
        const Sa = ["ar", "fa", "he", "ku", "ug"];

        class Ea {
            constructor(t = {}) {
                this.uiLanguage = t.uiLanguage || "en", this.contentLanguage = t.contentLanguage || this.uiLanguage, this.uiLanguageDirection = Ma(this.uiLanguage), this.contentLanguageDirection = Ma(this.contentLanguage), this.t = ((...t) => this._t(...t))
            }

            get language() {
                return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."), this.uiLanguage
            }

            _t(t, e) {
                let i = Pa(this.uiLanguage, t);
                return e && (i = i.replace(/%(\d+)/g, (t, i) => i < e.length ? e[i] : t)), i
            }
        }

        function Ma(t) {
            return Sa.includes(t) ? "rtl" : "ltr"
        }

        class Ia {
            constructor() {
                this._consumables = new Map
            }

            add(t, e) {
                let i;
                t.is("text") || t.is("documentFragment") ? this._consumables.set(t, !0) : (this._consumables.has(t) ? i = this._consumables.get(t) : (i = new Na, this._consumables.set(t, i)), i.add(e))
            }

            test(t, e) {
                const i = this._consumables.get(t);
                return void 0 === i ? null : t.is("text") || t.is("documentFragment") ? i : i.test(e)
            }

            consume(t, e) {
                return !!this.test(t, e) && (t.is("text") || t.is("documentFragment") ? this._consumables.set(t, !1) : this._consumables.get(t).consume(e), !0)
            }

            revert(t, e) {
                const i = this._consumables.get(t);
                void 0 !== i && (t.is("text") || t.is("documentFragment") ? this._consumables.set(t, !0) : i.revert(e))
            }

            static consumablesFromElement(t) {
                const e = {name: !0, attributes: [], classes: [], styles: []}, i = t.getAttributeKeys();
                for (const t of i) "style" != t && "class" != t && e.attributes.push(t);
                const n = t.getClassNames();
                for (const t of n) e.classes.push(t);
                const o = t.getStyleNames();
                for (const t of o) e.styles.push(t);
                return e
            }

            static createFrom(t, e) {
                if (e || (e = new Ia), t.is("text")) return e.add(t), e;
                t.is("element") && e.add(t, Ia.consumablesFromElement(t)), t.is("documentFragment") && e.add(t);
                for (const i of t.getChildren()) e = Ia.createFrom(i, e);
                return e
            }
        }

        class Na {
            constructor() {
                this._canConsumeName = null, this._consumables = {
                    attributes: new Map,
                    styles: new Map,
                    classes: new Map
                }
            }

            add(t) {
                t.name && (this._canConsumeName = !0);
                for (const e in this._consumables) e in t && this._add(e, t[e])
            }

            test(t) {
                if (t.name && !this._canConsumeName) return this._canConsumeName;
                for (const e in this._consumables) if (e in t) {
                    const i = this._test(e, t[e]);
                    if (!0 !== i) return i
                }
                return !0
            }

            consume(t) {
                t.name && (this._canConsumeName = !1);
                for (const e in this._consumables) e in t && this._consume(e, t[e])
            }

            revert(t) {
                t.name && (this._canConsumeName = !0);
                for (const e in this._consumables) e in t && this._revert(e, t[e])
            }

            _add(t, e) {
                const i = qt(e) ? e : [e], n = this._consumables[t];
                for (const e of i) {
                    if ("attributes" === t && ("class" === e || "style" === e)) throw new Yi.b("viewconsumable-invalid-attribute: Classes and styles should be handled separately.", this);
                    n.set(e, !0)
                }
            }

            _test(t, e) {
                const i = qt(e) ? e : [e], n = this._consumables[t];
                for (const e of i) if ("attributes" !== t || "class" !== e && "style" !== e) {
                    const t = n.get(e);
                    if (void 0 === t) return null;
                    if (!t) return !1
                } else {
                    const t = "class" == e ? "classes" : "styles", i = this._test(t, [...this._consumables[t].keys()]);
                    if (!0 !== i) return i
                }
                return !0
            }

            _consume(t, e) {
                const i = qt(e) ? e : [e], n = this._consumables[t];
                for (const e of i) if ("attributes" !== t || "class" !== e && "style" !== e) n.set(e, !1); else {
                    const t = "class" == e ? "classes" : "styles";
                    this._consume(t, [...this._consumables[t].keys()])
                }
            }

            _revert(t, e) {
                const i = qt(e) ? e : [e], n = this._consumables[t];
                for (const e of i) if ("attributes" !== t || "class" !== e && "style" !== e) {
                    !1 === n.get(e) && n.set(e, !0)
                } else {
                    const t = "class" == e ? "classes" : "styles";
                    this._revert(t, [...this._consumables[t].keys()])
                }
            }
        }

        class Oa {
            constructor() {
                this._sourceDefinitions = {}, this._attributeProperties = {}, this.decorate("checkChild"), this.decorate("checkAttribute"), this.on("checkAttribute", (t, e) => {
                    e[0] = new Ra(e[0])
                }, {priority: "highest"}), this.on("checkChild", (t, e) => {
                    e[0] = new Ra(e[0]), e[1] = this.getDefinition(e[1])
                }, {priority: "highest"})
            }

            register(t, e) {
                if (this._sourceDefinitions[t]) throw new Yi.b("schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.", this, {itemName: t});
                this._sourceDefinitions[t] = [Object.assign({}, e)], this._clearCache()
            }

            extend(t, e) {
                if (!this._sourceDefinitions[t]) throw new Yi.b("schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.", this, {itemName: t});
                this._sourceDefinitions[t].push(Object.assign({}, e)), this._clearCache()
            }

            getDefinitions() {
                return this._compiledDefinitions || this._compile(), this._compiledDefinitions
            }

            getDefinition(t) {
                let e;
                return e = "string" == typeof t ? t : t.is && (t.is("text") || t.is("textProxy")) ? "$text" : t.name, this.getDefinitions()[e]
            }

            isRegistered(t) {
                return !!this.getDefinition(t)
            }

            isBlock(t) {
                const e = this.getDefinition(t);
                return !(!e || !e.isBlock)
            }

            isLimit(t) {
                const e = this.getDefinition(t);
                return !!e && !(!e.isLimit && !e.isObject)
            }

            isObject(t) {
                const e = this.getDefinition(t);
                return !(!e || !e.isObject)
            }

            isInline(t) {
                const e = this.getDefinition(t);
                return !(!e || !e.isInline)
            }

            checkChild(t, e) {
                return !!e && this._checkContextMatch(e, t)
            }

            checkAttribute(t, e) {
                const i = this.getDefinition(t.last);
                return !!i && i.allowAttributes.includes(e)
            }

            checkMerge(t, e = null) {
                if (t instanceof $s) {
                    const e = t.nodeBefore, i = t.nodeAfter;
                    if (!(e instanceof Hs)) throw new Yi.b("schema-check-merge-no-element-before: The node before the merge position must be an element.", this);
                    if (!(i instanceof Hs)) throw new Yi.b("schema-check-merge-no-element-after: The node after the merge position must be an element.", this);
                    return this.checkMerge(e, i)
                }
                for (const i of e.getChildren()) if (!this.checkChild(t, i)) return !1;
                return !0
            }

            addChildCheck(t) {
                this.on("checkChild", (e, [i, n]) => {
                    if (!n) return;
                    const o = t(i, n);
                    "boolean" == typeof o && (e.stop(), e.return = o)
                }, {priority: "high"})
            }

            addAttributeCheck(t) {
                this.on("checkAttribute", (e, [i, n]) => {
                    const o = t(i, n);
                    "boolean" == typeof o && (e.stop(), e.return = o)
                }, {priority: "high"})
            }

            setAttributeProperties(t, e) {
                this._attributeProperties[t] = Object.assign(this.getAttributeProperties(t), e)
            }

            getAttributeProperties(t) {
                return this._attributeProperties[t] || {}
            }

            getLimitElement(t) {
                let e;
                if (t instanceof $s) e = t.parent; else {
                    e = (t instanceof Ys ? [t] : Array.from(t.getRanges())).reduce((t, e) => {
                        const i = e.getCommonAncestor();
                        return t ? t.getCommonAncestor(i, {includeSelf: !0}) : i
                    }, null)
                }
                for (; !this.isLimit(e) && e.parent;) e = e.parent;
                return e
            }

            checkAttributeInSelection(t, e) {
                if (t.isCollapsed) {
                    const i = [...t.getFirstPosition().getAncestors(), new Vs("", t.getAttributes())];
                    return this.checkAttribute(i, e)
                }
                {
                    const i = t.getRanges();
                    for (const t of i) for (const i of t) if (this.checkAttribute(i.item, e)) return !0
                }
                return !1
            }

            * getValidRanges(t, e) {
                t = function* (t) {
                    for (const e of t) yield* e.getMinimalFlatRanges()
                }(t);
                for (const i of t) yield* this._getValidRangesForRange(i, e)
            }

            getNearestSelectionRange(t, e = "both") {
                if (this.checkChild(t, "$text")) return new Ys(t);
                let i, n;
                "both" != e && "backward" != e || (i = new Us({
                    startPosition: t,
                    direction: "backward"
                })), "both" != e && "forward" != e || (n = new Us({startPosition: t}));
                for (const t of function* (t, e) {
                    let i = !1;
                    for (; !i;) {
                        if (i = !0, t) {
                            const e = t.next();
                            e.done || (i = !1, yield{walker: t, value: e.value})
                        }
                        if (e) {
                            const t = e.next();
                            t.done || (i = !1, yield{walker: e, value: t.value})
                        }
                    }
                }(i, n)) {
                    const e = t.walker == i ? "elementEnd" : "elementStart", n = t.value;
                    if (n.type == e && this.isObject(n.item)) return Ys._createOn(n.item);
                    if (this.checkChild(n.nextPosition, "$text")) return new Ys(n.nextPosition)
                }
                return null
            }

            findAllowedParent(t, e) {
                let i = t.parent;
                for (; i;) {
                    if (this.checkChild(i, e)) return i;
                    if (this.isLimit(i)) return null;
                    i = i.parent
                }
                return null
            }

            removeDisallowedAttributes(t, e) {
                for (const i of t) if (i.is("text")) qa(this, i, e); else {
                    const t = Ys._createIn(i).getPositions();
                    for (const i of t) {
                        qa(this, i.nodeBefore || i.parent, e)
                    }
                }
            }

            createContext(t) {
                return new Ra(t)
            }

            _clearCache() {
                this._compiledDefinitions = null
            }

            _compile() {
                const t = {}, e = this._sourceDefinitions, i = Object.keys(e);
                for (const n of i) t[n] = Da(e[n], n);
                for (const e of i) La(t, e);
                for (const e of i) ja(t, e);
                for (const e of i) za(t, e), Va(t, e);
                for (const e of i) Ba(t, e), Fa(t, e);
                this._compiledDefinitions = t
            }

            _checkContextMatch(t, e, i = e.length - 1) {
                const n = e.getItem(i);
                if (t.allowIn.includes(n.name)) {
                    if (0 == i) return !0;
                    {
                        const t = this.getDefinition(n);
                        return this._checkContextMatch(t, e, i - 1)
                    }
                }
                return !1
            }

            * _getValidRangesForRange(t, e) {
                let i = t.start, n = t.start;
                for (const o of t.getItems({shallow: !0})) o.is("element") && (yield* this._getValidRangesForRange(Ys._createIn(o), e)), this.checkAttribute(o, e) || (i.isEqual(n) || (yield new Ys(i, n)), i = $s._createAfter(o)), n = $s._createAfter(o);
                i.isEqual(n) || (yield new Ys(i, n))
            }
        }

        cn(Oa, Fn);

        class Ra {
            constructor(t) {
                if (t instanceof Ra) return t;
                "string" == typeof t ? t = [t] : Array.isArray(t) || (t = t.getAncestors({includeSelf: !0})), t[0] && "string" != typeof t[0] && t[0].is("documentFragment") && t.shift(), this._items = t.map(Wa)
            }

            get length() {
                return this._items.length
            }

            get last() {
                return this._items[this._items.length - 1]
            }

            [Symbol.iterator]() {
                return this._items[Symbol.iterator]()
            }

            push(t) {
                const e = new Ra([t]);
                return e._items = [...this._items, ...e._items], e
            }

            getItem(t) {
                return this._items[t]
            }

            * getNames() {
                yield* this._items.map(t => t.name)
            }

            endsWith(t) {
                return Array.from(this.getNames()).join(" ").endsWith(t)
            }
        }

        function Da(t, e) {
            const i = {
                name: e,
                allowIn: [],
                allowContentOf: [],
                allowWhere: [],
                allowAttributes: [],
                allowAttributesOf: [],
                inheritTypesFrom: []
            };
            return function (t, e) {
                for (const i of t) {
                    const t = Object.keys(i).filter(t => t.startsWith("is"));
                    for (const n of t) e[n] = i[n]
                }
            }(t, i), Ha(t, i, "allowIn"), Ha(t, i, "allowContentOf"), Ha(t, i, "allowWhere"), Ha(t, i, "allowAttributes"), Ha(t, i, "allowAttributesOf"), Ha(t, i, "inheritTypesFrom"), function (t, e) {
                for (const i of t) {
                    const t = i.inheritAllFrom;
                    t && (e.allowContentOf.push(t), e.allowWhere.push(t), e.allowAttributesOf.push(t), e.inheritTypesFrom.push(t))
                }
            }(t, i), i
        }

        function La(t, e) {
            for (const i of t[e].allowContentOf) if (t[i]) {
                Ua(t, i).forEach(t => {
                    t.allowIn.push(e)
                })
            }
            delete t[e].allowContentOf
        }

        function ja(t, e) {
            for (const i of t[e].allowWhere) {
                const n = t[i];
                if (n) {
                    const i = n.allowIn;
                    t[e].allowIn.push(...i)
                }
            }
            delete t[e].allowWhere
        }

        function za(t, e) {
            for (const i of t[e].allowAttributesOf) {
                const n = t[i];
                if (n) {
                    const i = n.allowAttributes;
                    t[e].allowAttributes.push(...i)
                }
            }
            delete t[e].allowAttributesOf
        }

        function Va(t, e) {
            const i = t[e];
            for (const e of i.inheritTypesFrom) {
                const n = t[e];
                if (n) {
                    const t = Object.keys(n).filter(t => t.startsWith("is"));
                    for (const e of t) e in i || (i[e] = n[e])
                }
            }
            delete i.inheritTypesFrom
        }

        function Ba(t, e) {
            const i = t[e], n = i.allowIn.filter(e => t[e]);
            i.allowIn = Array.from(new Set(n))
        }

        function Fa(t, e) {
            const i = t[e];
            i.allowAttributes = Array.from(new Set(i.allowAttributes))
        }

        function Ha(t, e, i) {
            for (const n of t) "string" == typeof n[i] ? e[i].push(n[i]) : Array.isArray(n[i]) && e[i].push(...n[i])
        }

        function Ua(t, e) {
            const i = t[e];
            return function (t) {
                return Object.keys(t).map(e => t[e])
            }(t).filter(t => t.allowIn.includes(i.name))
        }

        function Wa(t) {
            return "string" == typeof t ? {
                name: t, * getAttributeKeys() {
                }, getAttribute() {
                }
            } : {
                name: t.is("element") ? t.name : "$text", * getAttributeKeys() {
                    yield* t.getAttributeKeys()
                }, getAttribute: e => t.getAttribute(e)
            }
        }

        function qa(t, e, i) {
            for (const n of e.getAttributeKeys()) t.checkAttribute(e, n) || i.removeAttribute(n, e)
        }

        class $a {
            constructor(t = {}) {
                this._splitParts = new Map, this._modelCursor = null, this.conversionApi = Object.assign({}, t), this.conversionApi.convertItem = this._convertItem.bind(this), this.conversionApi.convertChildren = this._convertChildren.bind(this), this.conversionApi.splitToAllowedParent = this._splitToAllowedParent.bind(this), this.conversionApi.getSplitParts = this._getSplitParts.bind(this)
            }

            convert(t, e, i = ["$root"]) {
                this.fire("viewCleanup", t), this._modelCursor = function (t, e) {
                    let i;
                    for (const n of new Ra(t)) {
                        const t = {};
                        for (const e of n.getAttributeKeys()) t[e] = n.getAttribute(e);
                        const o = e.createElement(n.name, t);
                        i && e.append(o, i), i = $s._createAt(o, 0)
                    }
                    return i
                }(i, e), this.conversionApi.writer = e, this.conversionApi.consumable = Ia.createFrom(t), this.conversionApi.store = {};
                const {modelRange: n} = this._convertItem(t, this._modelCursor), o = e.createDocumentFragment();
                if (n) {
                    this._removeEmptyElements();
                    for (const t of Array.from(this._modelCursor.parent.getChildren())) e.append(t, o);
                    o.markers = function (t, e) {
                        const i = new Set, n = new Map, o = Ys._createIn(t).getItems();
                        for (const t of o) "$marker" == t.name && i.add(t);
                        for (const t of i) {
                            const i = t.getAttribute("data-name"), o = e.createPositionBefore(t);
                            n.has(i) ? n.get(i).end = o.clone() : n.set(i, new Ys(o.clone())), e.remove(t)
                        }
                        return n
                    }(o, e)
                }
                return this._modelCursor = null, this._splitParts.clear(), this.conversionApi.writer = null, this.conversionApi.store = null, o
            }

            _convertItem(t, e) {
                const i = Object.assign({viewItem: t, modelCursor: e, modelRange: null});
                if (t.is("element") ? this.fire("element:" + t.name, i, this.conversionApi) : t.is("text") ? this.fire("text", i, this.conversionApi) : this.fire("documentFragment", i, this.conversionApi), i.modelRange && !(i.modelRange instanceof Ys)) throw new Yi.b("view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.", this);
                return {modelRange: i.modelRange, modelCursor: i.modelCursor}
            }

            _convertChildren(t, e) {
                const i = new Ys(e);
                let n = e;
                for (const e of Array.from(t.getChildren())) {
                    const t = this._convertItem(e, n);
                    t.modelRange instanceof Ys && (i.end = t.modelRange.end, n = t.modelCursor)
                }
                return {modelRange: i, modelCursor: n}
            }

            _splitToAllowedParent(t, e) {
                const i = this.conversionApi.schema.findAllowedParent(e, t);
                if (!i) return null;
                if (i === e.parent) return {position: e};
                if (this._modelCursor.parent.getAncestors().includes(i)) return null;
                const n = this.conversionApi.writer.split(e, i), o = [];
                for (const t of n.range.getWalker()) if ("elementEnd" == t.type) o.push(t.item); else {
                    const e = o.pop(), i = t.item;
                    this._registerSplitPair(e, i)
                }
                return {position: n.position, cursorParent: n.range.end.parent}
            }

            _registerSplitPair(t, e) {
                this._splitParts.has(t) || this._splitParts.set(t, [t]);
                const i = this._splitParts.get(t);
                this._splitParts.set(e, i), i.push(e)
            }

            _getSplitParts(t) {
                let e;
                return e = this._splitParts.has(t) ? this._splitParts.get(t) : [t]
            }

            _removeEmptyElements() {
                let t = !1;
                for (const e of this._splitParts.keys()) e.isEmpty && (this.conversionApi.writer.remove(e), this._splitParts.delete(e), t = !0);
                t && this._removeEmptyElements()
            }
        }

        cn($a, tn);

        class Ya {
            constructor(t, e) {
                this.model = t, this.processor = e, this.mapper = new Gs, this.downcastDispatcher = new Js({mapper: this.mapper}), this.downcastDispatcher.on("insert:$text", (t, e, i) => {
                    if (!i.consumable.consume(e.item, "insert")) return;
                    const n = i.writer, o = i.mapper.toViewPosition(e.range.start), r = n.createText(e.item.data);
                    n.insert(o, r)
                }, {priority: "lowest"}), this.upcastDispatcher = new $a({schema: t.schema}), this.upcastDispatcher.on("text", (t, e, i) => {
                    if (i.schema.checkChild(e.modelCursor, "$text") && i.consumable.consume(e.viewItem)) {
                        const t = i.writer.createText(e.viewItem.data);
                        i.writer.insert(t, e.modelCursor), e.modelRange = Ys._createFromPositionAndShift(e.modelCursor, t.offsetSize), e.modelCursor = e.modelRange.end
                    }
                }, {priority: "lowest"}), this.upcastDispatcher.on("element", (t, e, i) => {
                    if (!e.modelRange && i.consumable.consume(e.viewItem, {name: !0})) {
                        const {modelRange: t, modelCursor: n} = i.convertChildren(e.viewItem, e.modelCursor);
                        e.modelRange = t, e.modelCursor = n
                    }
                }, {priority: "lowest"}), this.upcastDispatcher.on("documentFragment", (t, e, i) => {
                    if (!e.modelRange && i.consumable.consume(e.viewItem, {name: !0})) {
                        const {modelRange: t, modelCursor: n} = i.convertChildren(e.viewItem, e.modelCursor);
                        e.modelRange = t, e.modelCursor = n
                    }
                }, {priority: "lowest"}), this.decorate("init"), this.on("init", () => {
                    this.fire("ready")
                }, {priority: "lowest"})
            }

            get(t) {
                const {rootName: e = "main", trim: i = "empty"} = t || {};
                if (!this._checkIfRootsExists([e])) throw new Yi.b("datacontroller-get-non-existent-root: Attempting to get data from a non-existing root.", this);
                const n = this.model.document.getRoot(e);
                return "empty" !== i || this.model.hasContent(n, {ignoreWhitespaces: !0}) ? this.stringify(n) : ""
            }

            stringify(t) {
                const e = this.toView(t);
                return this.processor.toData(e)
            }

            toView(t) {
                this.mapper.clearBindings();
                const e = Ys._createIn(t), i = new Ao, n = new To(new ro);
                if (this.mapper.bindElements(t, i), this.downcastDispatcher.convertInsert(e, n), !t.is("documentFragment")) {
                    const e = function (t) {
                        const e = [], i = t.root.document;
                        if (!i) return [];
                        const n = Ys._createIn(t);
                        for (const t of i.model.markers) {
                            const i = n.getIntersection(t.getRange());
                            i && e.push([t.name, i])
                        }
                        return e
                    }(t);
                    for (const [t, i] of e) this.downcastDispatcher.convertMarkerAdd(t, i, n)
                }
                return i
            }

            init(t) {
                if (this.model.document.version) throw new Yi.b("datacontroller-init-document-not-empty: Trying to set initial data to not empty document.", this);
                let e = {};
                if ("string" == typeof t ? e.main = t : e = t, !this._checkIfRootsExists(Object.keys(e))) throw new Yi.b("datacontroller-init-non-existent-root: Attempting to init data on a non-existing root.", this);
                return this.model.enqueueChange("transparent", t => {
                    for (const i of Object.keys(e)) {
                        const n = this.model.document.getRoot(i);
                        t.insert(this.parse(e[i], n), n, 0)
                    }
                }), Promise.resolve()
            }

            set(t) {
                let e = {};
                if ("string" == typeof t ? e.main = t : e = t, !this._checkIfRootsExists(Object.keys(e))) throw new Yi.b("datacontroller-set-non-existent-root: Attempting to set data on a non-existing root.", this);
                this.model.enqueueChange("transparent", t => {
                    t.setSelection(null), t.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());
                    for (const i of Object.keys(e)) {
                        const n = this.model.document.getRoot(i);
                        t.remove(t.createRangeIn(n)), t.insert(this.parse(e[i], n), n, 0)
                    }
                })
            }

            parse(t, e = "$root") {
                const i = this.processor.toView(t);
                return this.toModel(i, e)
            }

            toModel(t, e = "$root") {
                return this.model.change(i => this.upcastDispatcher.convert(t, i, e))
            }

            destroy() {
                this.stopListening()
            }

            _checkIfRootsExists(t) {
                for (const e of t) if (!this.model.document.getRootNames().includes(e)) return !1;
                return !0
            }
        }

        cn(Ya, Fn);

        class Ga {
            constructor(t, e) {
                this._helpers = new Map, this._downcast = Array.isArray(t) ? t : [t], this._createConversionHelpers({
                    name: "downcast",
                    dispatchers: this._downcast,
                    isDowncast: !0
                }), this._upcast = Array.isArray(e) ? e : [e], this._createConversionHelpers({
                    name: "upcast",
                    dispatchers: this._upcast,
                    isDowncast: !1
                })
            }

            addAlias(t, e) {
                const i = this._downcast.includes(e);
                if (!this._upcast.includes(e) && !i) throw new Yi.b("conversion-add-alias-dispatcher-not-registered: Trying to register and alias for a dispatcher that nas not been registered.", this);
                this._createConversionHelpers({name: t, dispatchers: [e], isDowncast: i})
            }

            for(t) {
                if (!this._helpers.has(t)) throw new Yi.b("conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.", this);
                return this._helpers.get(t)
            }

            elementToElement(t) {
                this.for("downcast").elementToElement(t);
                for (const {model: e, view: i} of Qa(t)) this.for("upcast").elementToElement({
                    model: e,
                    view: i,
                    converterPriority: t.converterPriority
                })
            }

            attributeToElement(t) {
                this.for("downcast").attributeToElement(t);
                for (const {model: e, view: i} of Qa(t)) this.for("upcast").elementToAttribute({
                    view: i,
                    model: e,
                    converterPriority: t.converterPriority
                })
            }

            attributeToAttribute(t) {
                this.for("downcast").attributeToAttribute(t);
                for (const {model: e, view: i} of Qa(t)) this.for("upcast").attributeToAttribute({view: i, model: e})
            }

            _createConversionHelpers({name: t, dispatchers: e, isDowncast: i}) {
                if (this._helpers.has(t)) throw new Yi.b("conversion-group-exists: Trying to register a group name that has already been registered.", this);
                const n = i ? new fa(e) : new ka(e);
                this._helpers.set(t, n)
            }
        }

        function* Qa(t) {
            if (t.model.values) for (const e of t.model.values) {
                yield* Ka({key: t.model.key, value: e}, t.view[e], t.upcastAlso ? t.upcastAlso[e] : void 0)
            } else yield* Ka(t.model, t.view, t.upcastAlso)
        }

        function* Ka(t, e, i) {
            if (yield{model: t, view: e}, i) {
                i = Array.isArray(i) ? i : [i];
                for (const e of i) yield{model: t, view: e}
            }
        }

        class Ja {
            constructor(t = "default") {
                this.operations = [], this.type = t
            }

            get baseVersion() {
                for (const t of this.operations) if (null !== t.baseVersion) return t.baseVersion;
                return null
            }

            addOperation(t) {
                return t.batch = this, this.operations.push(t), t
            }
        }

        class Za {
            constructor(t) {
                this.baseVersion = t, this.isDocumentOperation = null !== this.baseVersion, this.batch = null
            }

            _validate() {
            }

            toJSON() {
                const t = Object.assign({}, this);
                return t.__className = this.constructor.className, delete t.batch, delete t.isDocumentOperation, t
            }

            static get className() {
                return "Operation"
            }

            static fromJSON(t) {
                return new this(t.baseVersion)
            }
        }

        class Xa {
            constructor(t) {
                this.markers = new Map, this._children = new Fs, t && this._insertChild(0, t)
            }

            [Symbol.iterator]() {
                return this.getChildren()
            }

            get childCount() {
                return this._children.length
            }

            get maxOffset() {
                return this._children.maxOffset
            }

            get isEmpty() {
                return 0 === this.childCount
            }

            get root() {
                return this
            }

            get parent() {
                return null
            }

            is(t) {
                return "documentFragment" == t || "model:documentFragment" == t
            }

            getChild(t) {
                return this._children.getNode(t)
            }

            getChildren() {
                return this._children[Symbol.iterator]()
            }

            getChildIndex(t) {
                return this._children.getNodeIndex(t)
            }

            getChildStartOffset(t) {
                return this._children.getNodeStartOffset(t)
            }

            getPath() {
                return []
            }

            getNodeByPath(t) {
                let e = this;
                for (const i of t) e = e.getChild(e.offsetToIndex(i));
                return e
            }

            offsetToIndex(t) {
                return this._children.offsetToIndex(t)
            }

            toJSON() {
                const t = [];
                for (const e of this._children) t.push(e.toJSON());
                return t
            }

            static fromJSON(t) {
                const e = [];
                for (const i of t) i.name ? e.push(Hs.fromJSON(i)) : e.push(Vs.fromJSON(i));
                return new Xa(e)
            }

            _appendChild(t) {
                this._insertChild(this.childCount, t)
            }

            _insertChild(t, e) {
                const i = function (t) {
                    if ("string" == typeof t) return [new Vs(t)];
                    pn(t) || (t = [t]);
                    return Array.from(t).map(t => "string" == typeof t ? new Vs(t) : t instanceof Bs ? new Vs(t.data, t.getAttributes()) : t)
                }(e);
                for (const t of i) null !== t.parent && t._remove(), t.parent = this;
                this._children._insertNodes(t, i)
            }

            _removeChildren(t, e = 1) {
                const i = this._children._removeNodes(t, e);
                for (const t of i) t.parent = null;
                return i
            }
        }

        function tc(t, e) {
            const i = (e = nc(e)).reduce((t, e) => t + e.offsetSize, 0), n = t.parent;
            rc(t);
            const o = t.index;
            return n._insertChild(o, e), oc(n, o + e.length), oc(n, o), new Ys(t, t.getShiftedBy(i))
        }

        function ec(t) {
            if (!t.isFlat) throw new Yi.b("operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.", this);
            const e = t.start.parent;
            rc(t.start), rc(t.end);
            const i = e._removeChildren(t.start.index, t.end.index - t.start.index);
            return oc(e, t.start.index), i
        }

        function ic(t, e) {
            if (!t.isFlat) throw new Yi.b("operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.", this);
            const i = ec(t);
            return tc(e = e._getTransformedByDeletion(t.start, t.end.offset - t.start.offset), i)
        }

        function nc(t) {
            const e = [];
            t instanceof Array || (t = [t]);
            for (let i = 0; i < t.length; i++) if ("string" == typeof t[i]) e.push(new Vs(t[i])); else if (t[i] instanceof Bs) e.push(new Vs(t[i].data, t[i].getAttributes())); else if (t[i] instanceof Xa || t[i] instanceof Fs) for (const n of t[i]) e.push(n); else t[i] instanceof zs && e.push(t[i]);
            for (let t = 1; t < e.length; t++) {
                const i = e[t], n = e[t - 1];
                i instanceof Vs && n instanceof Vs && sc(i, n) && (e.splice(t - 1, 2, new Vs(n.data + i.data, n.getAttributes())), t--)
            }
            return e
        }

        function oc(t, e) {
            const i = t.getChild(e - 1), n = t.getChild(e);
            if (i && n && i.is("text") && n.is("text") && sc(i, n)) {
                const o = new Vs(i.data + n.data, i.getAttributes());
                t._removeChildren(e - 1, 2), t._insertChild(e - 1, o)
            }
        }

        function rc(t) {
            const e = t.textNode, i = t.parent;
            if (e) {
                const n = t.offset - e.startOffset, o = e.index;
                i._removeChildren(o, 1);
                const r = new Vs(e.data.substr(0, n), e.getAttributes()),
                    s = new Vs(e.data.substr(n), e.getAttributes());
                i._insertChild(o, [r, s])
            }
        }

        function sc(t, e) {
            const i = t.getAttributes(), n = e.getAttributes();
            for (const t of i) {
                if (t[1] !== e.getAttribute(t[0])) return !1;
                n.next()
            }
            return n.next().done
        }

        var ac = function (t, e) {
            return Qr(t, e)
        };

        class cc extends Za {
            constructor(t, e, i, n, o) {
                super(o), this.range = t.clone(), this.key = e, this.oldValue = void 0 === i ? null : i, this.newValue = void 0 === n ? null : n
            }

            get type() {
                return null === this.oldValue ? "addAttribute" : null === this.newValue ? "removeAttribute" : "changeAttribute"
            }

            clone() {
                return new cc(this.range, this.key, this.oldValue, this.newValue, this.baseVersion)
            }

            getReversed() {
                return new cc(this.range, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
            }

            toJSON() {
                const t = super.toJSON();
                return t.range = this.range.toJSON(), t
            }

            _validate() {
                if (!this.range.isFlat) throw new Yi.b("attribute-operation-range-not-flat: The range to change is not flat.", this);
                for (const t of this.range.getItems({shallow: !0})) {
                    if (null !== this.oldValue && !ac(t.getAttribute(this.key), this.oldValue)) throw new Yi.b("attribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.", this, {
                        item: t,
                        key: this.key,
                        value: this.oldValue
                    });
                    if (null === this.oldValue && null !== this.newValue && t.hasAttribute(this.key)) throw new Yi.b("attribute-operation-attribute-exists: The attribute with given key already exists.", this, {
                        node: t,
                        key: this.key
                    })
                }
            }

            _execute() {
                ac(this.oldValue, this.newValue) || function (t, e, i) {
                    rc(t.start), rc(t.end);
                    for (const n of t.getItems({shallow: !0})) {
                        const t = n.is("textProxy") ? n.textNode : n;
                        null !== i ? t._setAttribute(e, i) : t._removeAttribute(e), oc(t.parent, t.index)
                    }
                    oc(t.end.parent, t.end.index)
                }(this.range, this.key, this.newValue)
            }

            static get className() {
                return "AttributeOperation"
            }

            static fromJSON(t, e) {
                return new cc(Ys.fromJSON(t.range, e), t.key, t.oldValue, t.newValue, t.baseVersion)
            }
        }

        class lc extends Za {
            constructor(t, e) {
                super(null), this.sourcePosition = t.clone(), this.howMany = e
            }

            get type() {
                return "detach"
            }

            toJSON() {
                const t = super.toJSON();
                return t.sourcePosition = this.sourcePosition.toJSON(), t
            }

            _validate() {
                if (this.sourcePosition.root.document) throw new Yi.b("detach-operation-on-document-node: Cannot detach document node.", this)
            }

            _execute() {
                ec(Ys._createFromPositionAndShift(this.sourcePosition, this.howMany))
            }

            static get className() {
                return "DetachOperation"
            }
        }

        class dc extends Za {
            constructor(t, e, i, n) {
                super(n), this.sourcePosition = t.clone(), this.sourcePosition.stickiness = "toNext", this.howMany = e, this.targetPosition = i.clone(), this.targetPosition.stickiness = "toNone"
            }

            get type() {
                return "$graveyard" == this.targetPosition.root.rootName ? "remove" : "$graveyard" == this.sourcePosition.root.rootName ? "reinsert" : "move"
            }

            clone() {
                return new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.baseVersion)
            }

            getMovedRangeStart() {
                return this.targetPosition._getTransformedByDeletion(this.sourcePosition, this.howMany)
            }

            getReversed() {
                const t = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany);
                return new this.constructor(this.getMovedRangeStart(), this.howMany, t, this.baseVersion + 1)
            }

            _validate() {
                const t = this.sourcePosition.parent, e = this.targetPosition.parent, i = this.sourcePosition.offset,
                    n = this.targetPosition.offset;
                if (i + this.howMany > t.maxOffset) throw new Yi.b("move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.", this);
                if (t === e && i < n && n < i + this.howMany) throw new Yi.b("move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.", this);
                if (this.sourcePosition.root == this.targetPosition.root && "prefix" == ln(this.sourcePosition.getParentPath(), this.targetPosition.getParentPath())) {
                    const t = this.sourcePosition.path.length - 1;
                    if (this.targetPosition.path[t] >= i && this.targetPosition.path[t] < i + this.howMany) throw new Yi.b("move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.", this)
                }
            }

            _execute() {
                ic(Ys._createFromPositionAndShift(this.sourcePosition, this.howMany), this.targetPosition)
            }

            toJSON() {
                const t = super.toJSON();
                return t.sourcePosition = this.sourcePosition.toJSON(), t.targetPosition = this.targetPosition.toJSON(), t
            }

            static get className() {
                return "MoveOperation"
            }

            static fromJSON(t, e) {
                const i = $s.fromJSON(t.sourcePosition, e), n = $s.fromJSON(t.targetPosition, e);
                return new this(i, t.howMany, n, t.baseVersion)
            }
        }

        class hc extends Za {
            constructor(t, e, i) {
                super(i), this.position = t.clone(), this.position.stickiness = "toNone", this.nodes = new Fs(nc(e)), this.shouldReceiveAttributes = !1
            }

            get type() {
                return "insert"
            }

            get howMany() {
                return this.nodes.maxOffset
            }

            clone() {
                const t = new Fs([...this.nodes].map(t => t._clone(!0))),
                    e = new hc(this.position, t, this.baseVersion);
                return e.shouldReceiveAttributes = this.shouldReceiveAttributes, e
            }

            getReversed() {
                const t = this.position.root.document.graveyard, e = new $s(t, [0]);
                return new dc(this.position, this.nodes.maxOffset, e, this.baseVersion + 1)
            }

            _validate() {
                const t = this.position.parent;
                if (!t || t.maxOffset < this.position.offset) throw new Yi.b("insert-operation-position-invalid: Insertion position is invalid.", this)
            }

            _execute() {
                const t = this.nodes;
                this.nodes = new Fs([...t].map(t => t._clone(!0))), tc(this.position, t)
            }

            toJSON() {
                const t = super.toJSON();
                return t.position = this.position.toJSON(), t.nodes = this.nodes.toJSON(), t
            }

            static get className() {
                return "InsertOperation"
            }

            static fromJSON(t, e) {
                const i = [];
                for (const e of t.nodes) e.name ? i.push(Hs.fromJSON(e)) : i.push(Vs.fromJSON(e));
                const n = new hc($s.fromJSON(t.position, e), i, t.baseVersion);
                return n.shouldReceiveAttributes = t.shouldReceiveAttributes, n
            }
        }

        class uc extends Za {
            constructor(t, e, i, n, o, r) {
                super(r), this.name = t, this.oldRange = e ? e.clone() : null, this.newRange = i ? i.clone() : null, this.affectsData = o, this._markers = n
            }

            get type() {
                return "marker"
            }

            clone() {
                return new uc(this.name, this.oldRange, this.newRange, this._markers, this.affectsData, this.baseVersion)
            }

            getReversed() {
                return new uc(this.name, this.newRange, this.oldRange, this._markers, this.affectsData, this.baseVersion + 1)
            }

            _execute() {
                const t = this.newRange ? "_set" : "_remove";
                this._markers[t](this.name, this.newRange, !0, this.affectsData)
            }

            toJSON() {
                const t = super.toJSON();
                return this.oldRange && (t.oldRange = this.oldRange.toJSON()), this.newRange && (t.newRange = this.newRange.toJSON()), delete t._markers, t
            }

            static get className() {
                return "MarkerOperation"
            }

            static fromJSON(t, e) {
                return new uc(t.name, t.oldRange ? Ys.fromJSON(t.oldRange, e) : null, t.newRange ? Ys.fromJSON(t.newRange, e) : null, e.model.markers, t.affectsData, t.baseVersion)
            }
        }

        class fc extends Za {
            constructor(t, e, i, n) {
                super(n), this.position = t, this.position.stickiness = "toNext", this.oldName = e, this.newName = i
            }

            get type() {
                return "rename"
            }

            clone() {
                return new fc(this.position.clone(), this.oldName, this.newName, this.baseVersion)
            }

            getReversed() {
                return new fc(this.position.clone(), this.newName, this.oldName, this.baseVersion + 1)
            }

            _validate() {
                const t = this.position.nodeAfter;
                if (!(t instanceof Hs)) throw new Yi.b("rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.", this);
                if (t.name !== this.oldName) throw new Yi.b("rename-operation-wrong-name: Element to change has different name than operation's old name.", this)
            }

            _execute() {
                this.position.nodeAfter.name = this.newName
            }

            toJSON() {
                const t = super.toJSON();
                return t.position = this.position.toJSON(), t
            }

            static get className() {
                return "RenameOperation"
            }

            static fromJSON(t, e) {
                return new fc($s.fromJSON(t.position, e), t.oldName, t.newName, t.baseVersion)
            }
        }

        class gc extends Za {
            constructor(t, e, i, n, o) {
                super(o), this.root = t, this.key = e, this.oldValue = i, this.newValue = n
            }

            get type() {
                return null === this.oldValue ? "addRootAttribute" : null === this.newValue ? "removeRootAttribute" : "changeRootAttribute"
            }

            clone() {
                return new gc(this.root, this.key, this.oldValue, this.newValue, this.baseVersion)
            }

            getReversed() {
                return new gc(this.root, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
            }

            _validate() {
                if (this.root != this.root.root || this.root.is("documentFragment")) throw new Yi.b("rootattribute-operation-not-a-root: The element to change is not a root element.", this, {
                    root: this.root,
                    key: this.key
                });
                if (null !== this.oldValue && this.root.getAttribute(this.key) !== this.oldValue) throw new Yi.b("rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.", this, {
                    root: this.root,
                    key: this.key
                });
                if (null === this.oldValue && null !== this.newValue && this.root.hasAttribute(this.key)) throw new Yi.b("rootattribute-operation-attribute-exists: The attribute with given key already exists.", this, {
                    root: this.root,
                    key: this.key
                })
            }

            _execute() {
                null !== this.newValue ? this.root._setAttribute(this.key, this.newValue) : this.root._removeAttribute(this.key)
            }

            toJSON() {
                const t = super.toJSON();
                return t.root = this.root.toJSON(), t
            }

            static get className() {
                return "RootAttributeOperation"
            }

            static fromJSON(t, e) {
                if (!e.getRoot(t.root)) throw new Yi.b("rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.", this, {rootName: t.root});
                return new gc(e.getRoot(t.root), t.key, t.oldValue, t.newValue, t.baseVersion)
            }
        }

        class mc extends Za {
            constructor(t, e, i, n, o) {
                super(o), this.sourcePosition = t.clone(), this.sourcePosition.stickiness = "toPrevious", this.howMany = e, this.targetPosition = i.clone(), this.targetPosition.stickiness = "toNext", this.graveyardPosition = n.clone()
            }

            get type() {
                return "merge"
            }

            get deletionPosition() {
                return new $s(this.sourcePosition.root, this.sourcePosition.path.slice(0, -1))
            }

            get movedRange() {
                const t = this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);
                return new Ys(this.sourcePosition, t)
            }

            clone() {
                return new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.graveyardPosition, this.baseVersion)
            }

            getReversed() {
                const t = this.targetPosition._getTransformedByMergeOperation(this),
                    e = this.sourcePosition.path.slice(0, -1),
                    i = new $s(this.sourcePosition.root, e)._getTransformedByMergeOperation(this),
                    n = new pc(t, this.howMany, this.graveyardPosition, this.baseVersion + 1);
                return n.insertionPosition = i, n
            }

            _validate() {
                const t = this.sourcePosition.parent, e = this.targetPosition.parent;
                if (!t.parent) throw new Yi.b("merge-operation-source-position-invalid: Merge source position is invalid.", this);
                if (!e.parent) throw new Yi.b("merge-operation-target-position-invalid: Merge target position is invalid.", this);
                if (this.howMany != t.maxOffset) throw new Yi.b("merge-operation-how-many-invalid: Merge operation specifies wrong number of nodes to move.", this)
            }

            _execute() {
                const t = this.sourcePosition.parent;
                ic(Ys._createIn(t), this.targetPosition), ic(Ys._createOn(t), this.graveyardPosition)
            }

            toJSON() {
                const t = super.toJSON();
                return t.sourcePosition = t.sourcePosition.toJSON(), t.targetPosition = t.targetPosition.toJSON(), t.graveyardPosition = t.graveyardPosition.toJSON(), t
            }

            static get className() {
                return "MergeOperation"
            }

            static fromJSON(t, e) {
                const i = $s.fromJSON(t.sourcePosition, e), n = $s.fromJSON(t.targetPosition, e),
                    o = $s.fromJSON(t.graveyardPosition, e);
                return new this(i, t.howMany, n, o, t.baseVersion)
            }
        }

        class pc extends Za {
            constructor(t, e, i, n) {
                super(n), this.splitPosition = t.clone(), this.splitPosition.stickiness = "toNext", this.howMany = e, this.insertionPosition = pc.getInsertionPosition(t), this.insertionPosition.stickiness = "toNone", this.graveyardPosition = i ? i.clone() : null, this.graveyardPosition && (this.graveyardPosition.stickiness = "toNext")
            }

            get type() {
                return "split"
            }

            get moveTargetPosition() {
                const t = this.insertionPosition.path.slice();
                return t.push(0), new $s(this.insertionPosition.root, t)
            }

            get movedRange() {
                const t = this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);
                return new Ys(this.splitPosition, t)
            }

            clone() {
                const t = new this.constructor(this.splitPosition, this.howMany, this.graveyardPosition, this.baseVersion);
                return t.insertionPosition = this.insertionPosition, t
            }

            getReversed() {
                const t = this.splitPosition.root.document.graveyard, e = new $s(t, [0]);
                return new mc(this.moveTargetPosition, this.howMany, this.splitPosition, e, this.baseVersion + 1)
            }

            _validate() {
                const t = this.splitPosition.parent, e = this.splitPosition.offset;
                if (!t || t.maxOffset < e) throw new Yi.b("split-operation-position-invalid: Split position is invalid.", this);
                if (!t.parent) throw new Yi.b("split-operation-split-in-root: Cannot split root element.", this);
                if (this.howMany != t.maxOffset - this.splitPosition.offset) throw new Yi.b("split-operation-how-many-invalid: Split operation specifies wrong number of nodes to move.", this);
                if (this.graveyardPosition && !this.graveyardPosition.nodeAfter) throw new Yi.b("split-operation-graveyard-position-invalid: Graveyard position invalid.", this)
            }

            _execute() {
                const t = this.splitPosition.parent;
                if (this.graveyardPosition) ic(Ys._createFromPositionAndShift(this.graveyardPosition, 1), this.insertionPosition); else {
                    const e = t._clone();
                    tc(this.insertionPosition, e)
                }
                ic(new Ys($s._createAt(t, this.splitPosition.offset), $s._createAt(t, t.maxOffset)), this.moveTargetPosition)
            }

            toJSON() {
                const t = super.toJSON();
                return t.splitPosition = this.splitPosition.toJSON(), t.insertionPosition = this.insertionPosition.toJSON(), this.graveyardPosition && (t.graveyardPosition = this.graveyardPosition.toJSON()), t
            }

            static get className() {
                return "SplitOperation"
            }

            static getInsertionPosition(t) {
                const e = t.path.slice(0, -1);
                return e[e.length - 1]++, new $s(t.root, e)
            }

            static fromJSON(t, e) {
                const i = $s.fromJSON(t.splitPosition, e), n = $s.fromJSON(t.insertionPosition, e),
                    o = t.graveyardPosition ? $s.fromJSON(t.graveyardPosition, e) : null,
                    r = new this(i, t.howMany, o, t.baseVersion);
                return r.insertionPosition = n, r
            }
        }

        class bc extends Hs {
            constructor(t, e, i = "main") {
                super(e), this._doc = t, this.rootName = i
            }

            get document() {
                return this._doc
            }

            is(t, e) {
                const i = t.replace("model:", "");
                return e ? "rootElement" == i && e == this.name || super.is(t, e) : "rootElement" == i || super.is(t)
            }

            toJSON() {
                return this.rootName
            }
        }

        class wc {
            constructor(t, e) {
                this.model = t, this.batch = e
            }

            createText(t, e) {
                return new Vs(t, e)
            }

            createElement(t, e) {
                return new Hs(t, e)
            }

            createDocumentFragment() {
                return new Xa
            }

            insert(t, e, i = 0) {
                if (this._assertWriterUsedCorrectly(), t instanceof Vs && "" == t.data) return;
                const n = $s._createAt(e, i);
                if (t.parent) {
                    if (xc(t.root, n.root)) return void this.move(Ys._createOn(t), n);
                    if (t.root.document) throw new Yi.b("model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree. It is forbidden to move a node that was already in a document outside of it.", this);
                    this.remove(t)
                }
                const o = n.root.document ? n.root.document.version : null, r = new hc(n, t, o);
                if (t instanceof Vs && (r.shouldReceiveAttributes = !0), this.batch.addOperation(r), this.model.applyOperation(r), t instanceof Xa) for (const [e, i] of t.markers) {
                    const t = $s._createAt(i.root, 0), o = {
                        range: new Ys(i.start._getCombined(t, n), i.end._getCombined(t, n)),
                        usingOperation: !0,
                        affectsData: !0
                    };
                    this.model.markers.has(e) ? this.updateMarker(e, o) : this.addMarker(e, o)
                }
            }

            insertText(t, e, i, n) {
                e instanceof Xa || e instanceof Hs || e instanceof $s ? this.insert(this.createText(t), e, i) : this.insert(this.createText(t, e), i, n)
            }

            insertElement(t, e, i, n) {
                e instanceof Xa || e instanceof Hs || e instanceof $s ? this.insert(this.createElement(t), e, i) : this.insert(this.createElement(t, e), i, n)
            }

            append(t, e) {
                this.insert(t, e, "end")
            }

            appendText(t, e, i) {
                e instanceof Xa || e instanceof Hs ? this.insert(this.createText(t), e, "end") : this.insert(this.createText(t, e), i, "end")
            }

            appendElement(t, e, i) {
                e instanceof Xa || e instanceof Hs ? this.insert(this.createElement(t), e, "end") : this.insert(this.createElement(t, e), i, "end")
            }

            setAttribute(t, e, i) {
                if (this._assertWriterUsedCorrectly(), i instanceof Ys) {
                    const n = i.getMinimalFlatRanges();
                    for (const i of n) kc(this, t, e, i)
                } else _c(this, t, e, i)
            }

            setAttributes(t, e) {
                for (const [i, n] of js(t)) this.setAttribute(i, n, e)
            }

            removeAttribute(t, e) {
                if (this._assertWriterUsedCorrectly(), e instanceof Ys) {
                    const i = e.getMinimalFlatRanges();
                    for (const e of i) kc(this, t, null, e)
                } else _c(this, t, null, e)
            }

            clearAttributes(t) {
                this._assertWriterUsedCorrectly();
                const e = t => {
                    for (const e of t.getAttributeKeys()) this.removeAttribute(e, t)
                };
                if (t instanceof Ys) for (const i of t.getItems()) e(i); else e(t)
            }

            move(t, e, i) {
                if (this._assertWriterUsedCorrectly(), !(t instanceof Ys)) throw new Yi.b("writer-move-invalid-range: Invalid range to move.", this);
                if (!t.isFlat) throw new Yi.b("writer-move-range-not-flat: Range to move is not flat.", this);
                const n = $s._createAt(e, i);
                if (n.isEqual(t.start)) return;
                if (this._addOperationForAffectedMarkers("move", t), !xc(t.root, n.root)) throw new Yi.b("writer-move-different-document: Range is going to be moved between different documents.", this);
                const o = t.root.document ? t.root.document.version : null,
                    r = new dc(t.start, t.end.offset - t.start.offset, n, o);
                this.batch.addOperation(r), this.model.applyOperation(r)
            }

            remove(t) {
                this._assertWriterUsedCorrectly();
                const e = (t instanceof Ys ? t : Ys._createOn(t)).getMinimalFlatRanges().reverse();
                for (const t of e) this._addOperationForAffectedMarkers("move", t), yc(t.start, t.end.offset - t.start.offset, this.batch, this.model)
            }

            merge(t) {
                this._assertWriterUsedCorrectly();
                const e = t.nodeBefore, i = t.nodeAfter;
                if (this._addOperationForAffectedMarkers("merge", t), !(e instanceof Hs)) throw new Yi.b("writer-merge-no-element-before: Node before merge position must be an element.", this);
                if (!(i instanceof Hs)) throw new Yi.b("writer-merge-no-element-after: Node after merge position must be an element.", this);
                t.root.document ? this._merge(t) : this._mergeDetached(t)
            }

            createPositionFromPath(t, e, i) {
                return this.model.createPositionFromPath(t, e, i)
            }

            createPositionAt(t, e) {
                return this.model.createPositionAt(t, e)
            }

            createPositionAfter(t) {
                return this.model.createPositionAfter(t)
            }

            createPositionBefore(t) {
                return this.model.createPositionBefore(t)
            }

            createRange(t, e) {
                return this.model.createRange(t, e)
            }

            createRangeIn(t) {
                return this.model.createRangeIn(t)
            }

            createRangeOn(t) {
                return this.model.createRangeOn(t)
            }

            createSelection(t, e, i) {
                return this.model.createSelection(t, e, i)
            }

            _mergeDetached(t) {
                const e = t.nodeBefore, i = t.nodeAfter;
                this.move(Ys._createIn(i), $s._createAt(e, "end")), this.remove(i)
            }

            _merge(t) {
                const e = $s._createAt(t.nodeBefore, "end"), i = $s._createAt(t.nodeAfter, 0),
                    n = t.root.document.graveyard, o = new $s(n, [0]), r = t.root.document.version,
                    s = new mc(i, t.nodeAfter.maxOffset, e, o, r);
                this.batch.addOperation(s), this.model.applyOperation(s)
            }

            rename(t, e) {
                if (this._assertWriterUsedCorrectly(), !(t instanceof Hs)) throw new Yi.b("writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.", this);
                const i = t.root.document ? t.root.document.version : null,
                    n = new fc($s._createBefore(t), t.name, e, i);
                this.batch.addOperation(n), this.model.applyOperation(n)
            }

            split(t, e) {
                this._assertWriterUsedCorrectly();
                let i, n, o = t.parent;
                if (!o.parent) throw new Yi.b("writer-split-element-no-parent: Element with no parent can not be split.", this);
                if (e || (e = o.parent), !t.parent.getAncestors({includeSelf: !0}).includes(e)) throw new Yi.b("writer-split-invalid-limit-element: Limit element is not a position ancestor.", this);
                do {
                    const e = o.root.document ? o.root.document.version : null, r = o.maxOffset - t.offset,
                        s = new pc(t, r, null, e);
                    this.batch.addOperation(s), this.model.applyOperation(s), i || n || (i = o, n = t.parent.nextSibling), o = (t = this.createPositionAfter(t.parent)).parent
                } while (o !== e);
                return {position: t, range: new Ys($s._createAt(i, "end"), $s._createAt(n, 0))}
            }

            wrap(t, e) {
                if (this._assertWriterUsedCorrectly(), !t.isFlat) throw new Yi.b("writer-wrap-range-not-flat: Range to wrap is not flat.", this);
                const i = e instanceof Hs ? e : new Hs(e);
                if (i.childCount > 0) throw new Yi.b("writer-wrap-element-not-empty: Element to wrap with is not empty.", this);
                if (null !== i.parent) throw new Yi.b("writer-wrap-element-attached: Element to wrap with is already attached to tree model.", this);
                this.insert(i, t.start);
                const n = new Ys(t.start.getShiftedBy(1), t.end.getShiftedBy(1));
                this.move(n, $s._createAt(i, 0))
            }

            unwrap(t) {
                if (this._assertWriterUsedCorrectly(), null === t.parent) throw new Yi.b("writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.", this);
                this.move(Ys._createIn(t), this.createPositionAfter(t)), this.remove(t)
            }

            addMarker(t, e) {
                if (this._assertWriterUsedCorrectly(), !e || "boolean" != typeof e.usingOperation) throw new Yi.b("writer-addMarker-no-usingOperation: The options.usingOperation parameter is required when adding a new marker.", this);
                const i = e.usingOperation, n = e.range, o = void 0 !== e.affectsData && e.affectsData;
                if (this.model.markers.has(t)) throw new Yi.b("writer-addMarker-marker-exists: Marker with provided name already exists.", this);
                if (!n) throw new Yi.b("writer-addMarker-no-range: Range parameter is required when adding a new marker.", this);
                return i ? (vc(this, t, null, n, o), this.model.markers.get(t)) : this.model.markers._set(t, n, i, o)
            }

            updateMarker(t, e) {
                this._assertWriterUsedCorrectly();
                const i = "string" == typeof t ? t : t.name, n = this.model.markers.get(i);
                if (!n) throw new Yi.b("writer-updateMarker-marker-not-exists: Marker with provided name does not exists.", this);
                if (!e) return void this.model.markers._refresh(n);
                const o = "boolean" == typeof e.usingOperation, r = "boolean" == typeof e.affectsData,
                    s = r ? e.affectsData : n.affectsData;
                if (!o && !e.range && !r) throw new Yi.b("writer-updateMarker-wrong-options: One of the options is required - provide range, usingOperations or affectsData.", this);
                const a = n.getRange(), c = e.range ? e.range : a;
                o && e.usingOperation !== n.managedUsingOperations ? e.usingOperation ? vc(this, i, null, c, s) : (vc(this, i, a, null, s), this.model.markers._set(i, c, void 0, s)) : n.managedUsingOperations ? vc(this, i, a, c, s) : this.model.markers._set(i, c, void 0, s)
            }

            removeMarker(t) {
                this._assertWriterUsedCorrectly();
                const e = "string" == typeof t ? t : t.name;
                if (!this.model.markers.has(e)) throw new Yi.b("writer-removeMarker-no-marker: Trying to remove marker which does not exist.", this);
                const i = this.model.markers.get(e);
                i.managedUsingOperations ? vc(this, e, i.getRange(), null, i.affectsData) : this.model.markers._remove(e)
            }

            setSelection(t, e, i) {
                this._assertWriterUsedCorrectly(), this.model.document.selection._setTo(t, e, i)
            }

            setSelectionFocus(t, e) {
                this._assertWriterUsedCorrectly(), this.model.document.selection._setFocus(t, e)
            }

            setSelectionAttribute(t, e) {
                if (this._assertWriterUsedCorrectly(), "string" == typeof t) this._setSelectionAttribute(t, e); else for (const [e, i] of js(t)) this._setSelectionAttribute(e, i)
            }

            removeSelectionAttribute(t) {
                if (this._assertWriterUsedCorrectly(), "string" == typeof t) this._removeSelectionAttribute(t); else for (const e of t) this._removeSelectionAttribute(e)
            }

            overrideSelectionGravity() {
                return this.model.document.selection._overrideGravity()
            }

            restoreSelectionGravity(t) {
                this.model.document.selection._restoreGravity(t)
            }

            _setSelectionAttribute(t, e) {
                const i = this.model.document.selection;
                if (i.isCollapsed && i.anchor.parent.isEmpty) {
                    const n = sa._getStoreAttributeKey(t);
                    this.setAttribute(n, e, i.anchor.parent)
                }
                i._setAttribute(t, e)
            }

            _removeSelectionAttribute(t) {
                const e = this.model.document.selection;
                if (e.isCollapsed && e.anchor.parent.isEmpty) {
                    const i = sa._getStoreAttributeKey(t);
                    this.removeAttribute(i, e.anchor.parent)
                }
                e._removeAttribute(t)
            }

            _assertWriterUsedCorrectly() {
                if (this.model._currentWriter !== this) throw new Yi.b("writer-incorrect-use: Trying to use a writer outside the change() block.", this)
            }

            _addOperationForAffectedMarkers(t, e) {
                for (const i of this.model.markers) {
                    if (!i.managedUsingOperations) continue;
                    const n = i.getRange();
                    let o = !1;
                    if ("move" == t) o = e.containsPosition(n.start) || e.start.isEqual(n.start) || e.containsPosition(n.end) || e.end.isEqual(n.end); else {
                        const t = e.nodeBefore, i = e.nodeAfter, r = n.start.parent == t && n.start.isAtEnd,
                            s = n.end.parent == i && 0 == n.end.offset, a = n.end.nodeAfter == i,
                            c = n.start.nodeAfter == i;
                        o = r || s || a || c
                    }
                    o && this.updateMarker(i.name, {range: n})
                }
            }
        }

        function kc(t, e, i, n) {
            const o = t.model, r = o.document;
            let s, a, c, l = n.start;
            for (const t of n.getWalker({shallow: !0})) c = t.item.getAttribute(e), s && a != c && (a != i && d(), l = s), s = t.nextPosition, a = c;

            function d() {
                const n = new Ys(l, s), c = n.root.document ? r.version : null, d = new cc(n, e, a, i, c);
                t.batch.addOperation(d), o.applyOperation(d)
            }

            s instanceof $s && s != l && a != i && d()
        }

        function _c(t, e, i, n) {
            const o = t.model, r = o.document, s = n.getAttribute(e);
            let a, c;
            if (s != i) {
                if (n.root === n) {
                    const t = n.document ? r.version : null;
                    c = new gc(n, e, s, i, t)
                } else {
                    const o = (a = new Ys($s._createBefore(n), t.createPositionAfter(n))).root.document ? r.version : null;
                    c = new cc(a, e, s, i, o)
                }
                t.batch.addOperation(c), o.applyOperation(c)
            }
        }

        function vc(t, e, i, n, o) {
            const r = t.model, s = r.document, a = new uc(e, i, n, r.markers, o, s.version);
            t.batch.addOperation(a), r.applyOperation(a)
        }

        function yc(t, e, i, n) {
            let o;
            if (t.root.document) {
                const i = n.document, r = new $s(i.graveyard, [0]);
                o = new dc(t, e, r, i.version)
            } else o = new lc(t, e);
            i.addOperation(o), n.applyOperation(o)
        }

        function xc(t, e) {
            return t === e || t instanceof bc && e instanceof bc
        }

        class Ac {
            constructor(t) {
                this._markerCollection = t, this._changesInElement = new Map, this._elementSnapshots = new Map, this._changedMarkers = new Map, this._changeCount = 0, this._cachedChanges = null, this._cachedChangesWithGraveyard = null
            }

            get isEmpty() {
                return 0 == this._changesInElement.size && 0 == this._changedMarkers.size
            }

            refreshItem(t) {
                if (this._isInInsertedElement(t.parent)) return;
                this._markRemove(t.parent, t.startOffset, t.offsetSize), this._markInsert(t.parent, t.startOffset, t.offsetSize);
                const e = Ys._createOn(t);
                for (const t of this._markerCollection.getMarkersIntersectingRange(e)) {
                    const e = t.getRange();
                    this.bufferMarkerChange(t.name, e, e, t.affectsData)
                }
                this._cachedChanges = null
            }

            bufferOperation(t) {
                switch (t.type) {
                    case"insert":
                        if (this._isInInsertedElement(t.position.parent)) return;
                        this._markInsert(t.position.parent, t.position.offset, t.nodes.maxOffset);
                        break;
                    case"addAttribute":
                    case"removeAttribute":
                    case"changeAttribute":
                        for (const e of t.range.getItems({shallow: !0})) this._isInInsertedElement(e.parent) || this._markAttribute(e);
                        break;
                    case"remove":
                    case"move":
                    case"reinsert": {
                        if (t.sourcePosition.isEqual(t.targetPosition) || t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition)) return;
                        const e = this._isInInsertedElement(t.sourcePosition.parent),
                            i = this._isInInsertedElement(t.targetPosition.parent);
                        e || this._markRemove(t.sourcePosition.parent, t.sourcePosition.offset, t.howMany), i || this._markInsert(t.targetPosition.parent, t.getMovedRangeStart().offset, t.howMany);
                        break
                    }
                    case"rename": {
                        if (this._isInInsertedElement(t.position.parent)) return;
                        this._markRemove(t.position.parent, t.position.offset, 1), this._markInsert(t.position.parent, t.position.offset, 1);
                        const e = Ys._createFromPositionAndShift(t.position, 1);
                        for (const t of this._markerCollection.getMarkersIntersectingRange(e)) {
                            const e = t.getRange();
                            this.bufferMarkerChange(t.name, e, e, t.affectsData)
                        }
                        break
                    }
                    case"split": {
                        const e = t.splitPosition.parent;
                        this._isInInsertedElement(e) || this._markRemove(e, t.splitPosition.offset, t.howMany), this._isInInsertedElement(t.insertionPosition.parent) || this._markInsert(t.insertionPosition.parent, t.insertionPosition.offset, 1), t.graveyardPosition && this._markRemove(t.graveyardPosition.parent, t.graveyardPosition.offset, 1);
                        break
                    }
                    case"merge": {
                        const e = t.sourcePosition.parent;
                        this._isInInsertedElement(e.parent) || this._markRemove(e.parent, e.startOffset, 1);
                        const i = t.graveyardPosition.parent;
                        this._markInsert(i, t.graveyardPosition.offset, 1);
                        const n = t.targetPosition.parent;
                        this._isInInsertedElement(n) || this._markInsert(n, t.targetPosition.offset, e.maxOffset);
                        break
                    }
                }
                this._cachedChanges = null
            }

            bufferMarkerChange(t, e, i, n) {
                const o = this._changedMarkers.get(t);
                o ? (o.newRange = i, o.affectsData = n, null == o.oldRange && null == o.newRange && this._changedMarkers.delete(t)) : this._changedMarkers.set(t, {
                    oldRange: e,
                    newRange: i,
                    affectsData: n
                })
            }

            getMarkersToRemove() {
                const t = [];
                for (const [e, i] of this._changedMarkers) null != i.oldRange && t.push({name: e, range: i.oldRange});
                return t
            }

            getMarkersToAdd() {
                const t = [];
                for (const [e, i] of this._changedMarkers) null != i.newRange && t.push({name: e, range: i.newRange});
                return t
            }

            getChangedMarkers() {
                return Array.from(this._changedMarkers).map(t => ({
                    name: t[0],
                    data: {oldRange: t[1].oldRange, newRange: t[1].newRange}
                }))
            }

            hasDataChanges() {
                for (const [, t] of this._changedMarkers) if (t.affectsData) return !0;
                return this._changesInElement.size > 0
            }

            getChanges(t = {includeChangesInGraveyard: !1}) {
                if (this._cachedChanges) return t.includeChangesInGraveyard ? this._cachedChangesWithGraveyard.slice() : this._cachedChanges.slice();
                const e = [];
                for (const t of this._changesInElement.keys()) {
                    const i = this._changesInElement.get(t).sort((t, e) => t.offset === e.offset ? t.type != e.type ? "remove" == t.type ? -1 : 1 : 0 : t.offset < e.offset ? -1 : 1),
                        n = this._elementSnapshots.get(t), o = Tc(t.getChildren()), r = Cc(n.length, i);
                    let s = 0, a = 0;
                    for (const i of r) if ("i" === i) e.push(this._getInsertDiff(t, s, o[s].name)), s++; else if ("r" === i) e.push(this._getRemoveDiff(t, s, n[a].name)), a++; else if ("a" === i) {
                        const i = o[s].attributes, r = n[a].attributes;
                        let c;
                        if ("$text" == o[s].name) c = new Ys($s._createAt(t, s), $s._createAt(t, s + 1)); else {
                            const e = t.offsetToIndex(s);
                            c = new Ys($s._createAt(t, s), $s._createAt(t.getChild(e), 0))
                        }
                        e.push(...this._getAttributesDiff(c, r, i)), s++, a++
                    } else s++, a++
                }
                e.sort((t, e) => t.position.root != e.position.root ? t.position.root.rootName < e.position.root.rootName ? -1 : 1 : t.position.isEqual(e.position) ? t.changeCount - e.changeCount : t.position.isBefore(e.position) ? -1 : 1);
                for (let t = 1; t < e.length; t++) {
                    const i = e[t - 1], n = e[t],
                        o = "remove" == i.type && "remove" == n.type && "$text" == i.name && "$text" == n.name && i.position.isEqual(n.position),
                        r = "insert" == i.type && "insert" == n.type && "$text" == i.name && "$text" == n.name && i.position.parent == n.position.parent && i.position.offset + i.length == n.position.offset,
                        s = "attribute" == i.type && "attribute" == n.type && i.position.parent == n.position.parent && i.range.isFlat && n.range.isFlat && i.position.offset + i.length == n.position.offset && i.attributeKey == n.attributeKey && i.attributeOldValue == n.attributeOldValue && i.attributeNewValue == n.attributeNewValue;
                    (o || r || s) && (e[t - 1].length++, s && (e[t - 1].range.end = e[t - 1].range.end.getShiftedBy(1)), e.splice(t, 1), t--)
                }
                for (const t of e) delete t.changeCount, "attribute" == t.type && (delete t.position, delete t.length);
                return this._changeCount = 0, this._cachedChangesWithGraveyard = e.slice(), this._cachedChanges = e.slice().filter(Pc), t.includeChangesInGraveyard ? this._cachedChangesWithGraveyard : this._cachedChanges
            }

            reset() {
                this._changesInElement.clear(), this._elementSnapshots.clear(), this._changedMarkers.clear(), this._cachedChanges = null
            }

            _markInsert(t, e, i) {
                const n = {type: "insert", offset: e, howMany: i, count: this._changeCount++};
                this._markChange(t, n)
            }

            _markRemove(t, e, i) {
                const n = {type: "remove", offset: e, howMany: i, count: this._changeCount++};
                this._markChange(t, n), this._removeAllNestedChanges(t, e, i)
            }

            _markAttribute(t) {
                const e = {type: "attribute", offset: t.startOffset, howMany: t.offsetSize, count: this._changeCount++};
                this._markChange(t.parent, e)
            }

            _markChange(t, e) {
                this._makeSnapshot(t);
                const i = this._getChangesForElement(t);
                this._handleChange(e, i), i.push(e);
                for (let t = 0; t < i.length; t++) i[t].howMany < 1 && (i.splice(t, 1), t--)
            }

            _getChangesForElement(t) {
                let e;
                return this._changesInElement.has(t) ? e = this._changesInElement.get(t) : (e = [], this._changesInElement.set(t, e)), e
            }

            _makeSnapshot(t) {
                this._elementSnapshots.has(t) || this._elementSnapshots.set(t, Tc(t.getChildren()))
            }

            _handleChange(t, e) {
                t.nodesToHandle = t.howMany;
                for (const i of e) {
                    const n = t.offset + t.howMany, o = i.offset + i.howMany;
                    if ("insert" == t.type && ("insert" == i.type && (t.offset <= i.offset ? i.offset += t.howMany : t.offset < o && (i.howMany += t.nodesToHandle, t.nodesToHandle = 0)), "remove" == i.type && t.offset < i.offset && (i.offset += t.howMany), "attribute" == i.type)) if (t.offset <= i.offset) i.offset += t.howMany; else if (t.offset < o) {
                        const o = i.howMany;
                        i.howMany = t.offset - i.offset, e.unshift({
                            type: "attribute",
                            offset: n,
                            howMany: o - i.howMany,
                            count: this._changeCount++
                        })
                    }
                    if ("remove" == t.type) {
                        if ("insert" == i.type) if (n <= i.offset) i.offset -= t.howMany; else if (n <= o) if (t.offset < i.offset) {
                            const e = n - i.offset;
                            i.offset = t.offset, i.howMany -= e, t.nodesToHandle -= e
                        } else i.howMany -= t.nodesToHandle, t.nodesToHandle = 0; else if (t.offset <= i.offset) t.nodesToHandle -= i.howMany, i.howMany = 0; else if (t.offset < o) {
                            const e = o - t.offset;
                            i.howMany -= e, t.nodesToHandle -= e
                        }
                        if ("remove" == i.type && (n <= i.offset ? i.offset -= t.howMany : t.offset < i.offset && (t.nodesToHandle += i.howMany, i.howMany = 0)), "attribute" == i.type) if (n <= i.offset) i.offset -= t.howMany; else if (t.offset < i.offset) {
                            const e = n - i.offset;
                            i.offset = t.offset, i.howMany -= e
                        } else if (t.offset < o) if (n <= o) {
                            const n = i.howMany;
                            i.howMany = t.offset - i.offset;
                            const o = n - i.howMany - t.nodesToHandle;
                            e.unshift({type: "attribute", offset: t.offset, howMany: o, count: this._changeCount++})
                        } else i.howMany -= o - t.offset
                    }
                    if ("attribute" == t.type) {
                        if ("insert" == i.type) if (t.offset < i.offset && n > i.offset) {
                            if (n > o) {
                                const t = {type: "attribute", offset: o, howMany: n - o, count: this._changeCount++};
                                this._handleChange(t, e), e.push(t)
                            }
                            t.nodesToHandle = i.offset - t.offset, t.howMany = t.nodesToHandle
                        } else t.offset >= i.offset && t.offset < o && (n > o ? (t.nodesToHandle = n - o, t.offset = o) : t.nodesToHandle = 0);
                        if ("remove" == i.type && t.offset < i.offset && n > i.offset) {
                            const o = {
                                type: "attribute",
                                offset: i.offset,
                                howMany: n - i.offset,
                                count: this._changeCount++
                            };
                            this._handleChange(o, e), e.push(o), t.nodesToHandle = i.offset - t.offset, t.howMany = t.nodesToHandle
                        }
                        "attribute" == i.type && (t.offset >= i.offset && n <= o ? (t.nodesToHandle = 0, t.howMany = 0, t.offset = 0) : t.offset <= i.offset && n >= o && (i.howMany = 0))
                    }
                }
                t.howMany = t.nodesToHandle, delete t.nodesToHandle
            }

            _getInsertDiff(t, e, i) {
                return {
                    type: "insert",
                    position: $s._createAt(t, e),
                    name: i,
                    length: 1,
                    changeCount: this._changeCount++
                }
            }

            _getRemoveDiff(t, e, i) {
                return {
                    type: "remove",
                    position: $s._createAt(t, e),
                    name: i,
                    length: 1,
                    changeCount: this._changeCount++
                }
            }

            _getAttributesDiff(t, e, i) {
                const n = [];
                i = new Map(i);
                for (const [o, r] of e) {
                    const e = i.has(o) ? i.get(o) : null;
                    e !== r && n.push({
                        type: "attribute",
                        position: t.start,
                        range: t.clone(),
                        length: 1,
                        attributeKey: o,
                        attributeOldValue: r,
                        attributeNewValue: e,
                        changeCount: this._changeCount++
                    }), i.delete(o)
                }
                for (const [e, o] of i) n.push({
                    type: "attribute",
                    position: t.start,
                    range: t.clone(),
                    length: 1,
                    attributeKey: e,
                    attributeOldValue: null,
                    attributeNewValue: o,
                    changeCount: this._changeCount++
                });
                return n
            }

            _isInInsertedElement(t) {
                const e = t.parent;
                if (!e) return !1;
                const i = this._changesInElement.get(e), n = t.startOffset;
                if (i) for (const t of i) if ("insert" == t.type && n >= t.offset && n < t.offset + t.howMany) return !0;
                return this._isInInsertedElement(e)
            }

            _removeAllNestedChanges(t, e, i) {
                const n = new Ys($s._createAt(t, e), $s._createAt(t, e + i));
                for (const t of n.getItems({shallow: !0})) t.is("element") && (this._elementSnapshots.delete(t), this._changesInElement.delete(t), this._removeAllNestedChanges(t, 0, t.maxOffset))
            }
        }

        function Tc(t) {
            const e = [];
            for (const i of t) if (i.is("text")) for (let t = 0; t < i.data.length; t++) e.push({
                name: "$text",
                attributes: new Map(i.getAttributes())
            }); else e.push({name: i.name, attributes: new Map(i.getAttributes())});
            return e
        }

        function Cc(t, e) {
            const i = [];
            let n = 0, o = 0;
            for (const t of e) {
                if (t.offset > n) {
                    for (let e = 0; e < t.offset - n; e++) i.push("e");
                    o += t.offset - n
                }
                if ("insert" == t.type) {
                    for (let e = 0; e < t.howMany; e++) i.push("i");
                    n = t.offset + t.howMany
                } else if ("remove" == t.type) {
                    for (let e = 0; e < t.howMany; e++) i.push("r");
                    n = t.offset, o += t.howMany
                } else i.push(..."a".repeat(t.howMany).split("")), n = t.offset + t.howMany, o += t.howMany
            }
            if (o < t) for (let e = 0; e < t - o - n; e++) i.push("e");
            return i
        }

        function Pc(t) {
            const e = t.position && "$graveyard" == t.position.root.rootName,
                i = t.range && "$graveyard" == t.range.root.rootName;
            return !e && !i
        }

        class Sc {
            constructor() {
                this._operations = [], this._undoPairs = new Map, this._undoneOperations = new Set
            }

            addOperation(t) {
                this._operations.includes(t) || this._operations.push(t)
            }

            getOperations(t = 0, e = Number.POSITIVE_INFINITY) {
                return t < 0 ? [] : this._operations.slice(t, e)
            }

            getOperation(t) {
                return this._operations[t]
            }

            setOperationAsUndone(t, e) {
                this._undoPairs.set(e, t), this._undoneOperations.add(t)
            }

            isUndoingOperation(t) {
                return this._undoPairs.has(t)
            }

            isUndoneOperation(t) {
                return this._undoneOperations.has(t)
            }

            getUndoneOperation(t) {
                return this._undoPairs.get(t)
            }
        }

        function Ec(t, e) {
            return function (t) {
                return !!t && 1 == t.length && /[\ud800-\udbff]/.test(t)
            }(t.charAt(e - 1)) && function (t) {
                return !!t && 1 == t.length && /[\udc00-\udfff]/.test(t)
            }(t.charAt(e))
        }

        function Mc(t, e) {
            return function (t) {
                return !!t && 1 == t.length && /[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t)
            }(t.charAt(e))
        }

        const Ic = "$graveyard";

        class Nc {
            constructor(t) {
                this.model = t, this.version = 0, this.history = new Sc(this), this.selection = new sa(this), this.roots = new oo({idProperty: "rootName"}), this.differ = new Ac(t.markers), this._postFixers = new Set, this._hasSelectionChangedFromTheLastChangeBlock = !1, this.createRoot("$root", Ic), this.listenTo(t, "applyOperation", (t, e) => {
                    const i = e[0];
                    if (i.isDocumentOperation && i.baseVersion !== this.version) throw new Yi.b("model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.", this, {operation: i})
                }, {priority: "highest"}), this.listenTo(t, "applyOperation", (t, e) => {
                    const i = e[0];
                    i.isDocumentOperation && this.differ.bufferOperation(i)
                }, {priority: "high"}), this.listenTo(t, "applyOperation", (t, e) => {
                    const i = e[0];
                    i.isDocumentOperation && (this.version++, this.history.addOperation(i))
                }, {priority: "low"}), this.listenTo(this.selection, "change", () => {
                    this._hasSelectionChangedFromTheLastChangeBlock = !0
                }), this.listenTo(t.markers, "update", (t, e, i, n) => {
                    this.differ.bufferMarkerChange(e.name, i, n, e.affectsData), null === i && e.on("change", (t, i) => {
                        this.differ.bufferMarkerChange(e.name, i, e.getRange(), e.affectsData)
                    })
                })
            }

            get graveyard() {
                return this.getRoot(Ic)
            }

            createRoot(t = "$root", e = "main") {
                if (this.roots.get(e)) throw new Yi.b("model-document-createRoot-name-exists: Root with specified name already exists.", this, {name: e});
                const i = new bc(this, t, e);
                return this.roots.add(i), i
            }

            destroy() {
                this.selection.destroy(), this.stopListening()
            }

            getRoot(t = "main") {
                return this.roots.get(t)
            }

            getRootNames() {
                return Array.from(this.roots, t => t.rootName).filter(t => t != Ic)
            }

            registerPostFixer(t) {
                this._postFixers.add(t)
            }

            toJSON() {
                const t = hn(this);
                return t.selection = "[engine.model.DocumentSelection]", t.model = "[engine.model.Model]", t
            }

            _handleChangeBlock(t) {
                this._hasDocumentChangedFromTheLastChangeBlock() && (this._callPostFixers(t), this.selection.refresh(), this.differ.hasDataChanges() ? this.fire("change:data", t.batch) : this.fire("change", t.batch), this.selection.refresh(), this.differ.reset()), this._hasSelectionChangedFromTheLastChangeBlock = !1
            }

            _hasDocumentChangedFromTheLastChangeBlock() {
                return !this.differ.isEmpty || this._hasSelectionChangedFromTheLastChangeBlock
            }

            _getDefaultRoot() {
                for (const t of this.roots) if (t !== this.graveyard) return t;
                return this.graveyard
            }

            _getDefaultRange() {
                const t = this._getDefaultRoot(), e = this.model, i = e.schema, n = e.createPositionFromPath(t, [0]);
                return i.getNearestSelectionRange(n) || e.createRange(n)
            }

            _validateSelectionRange(t) {
                return Oc(t.start) && Oc(t.end)
            }

            _callPostFixers(t) {
                let e = !1;
                do {
                    for (const i of this._postFixers) if (this.selection.refresh(), e = i(t)) break
                } while (e)
            }
        }

        function Oc(t) {
            const e = t.textNode;
            if (e) {
                const i = e.data, n = t.offset - e.startOffset;
                return !Ec(i, n) && !Mc(i, n)
            }
            return !0
        }

        cn(Nc, tn);

        class Rc {
            constructor() {
                this._markers = new Map
            }

            [Symbol.iterator]() {
                return this._markers.values()
            }

            has(t) {
                return this._markers.has(t)
            }

            get(t) {
                return this._markers.get(t) || null
            }

            _set(t, e, i = !1, n = !1) {
                const o = t instanceof Dc ? t.name : t, r = this._markers.get(o);
                if (r) {
                    const t = r.getRange();
                    let s = !1;
                    return t.isEqual(e) || (r._attachLiveRange(oa.fromRange(e)), s = !0), i != r.managedUsingOperations && (r._managedUsingOperations = i, s = !0), "boolean" == typeof n && n != r.affectsData && (r._affectsData = n, s = !0), s && this.fire("update:" + o, r, t, e), r
                }
                const s = oa.fromRange(e), a = new Dc(o, s, i, n);
                return this._markers.set(o, a), this.fire("update:" + o, a, null, e), a
            }

            _remove(t) {
                const e = t instanceof Dc ? t.name : t, i = this._markers.get(e);
                return !!i && (this._markers.delete(e), this.fire("update:" + e, i, i.getRange(), null), this._destroyMarker(i), !0)
            }

            _refresh(t) {
                const e = t instanceof Dc ? t.name : t, i = this._markers.get(e);
                if (!i) throw new Yi.b("markercollection-refresh-marker-not-exists: Marker with provided name does not exists.", this);
                const n = i.getRange();
                this.fire("update:" + e, i, n, n, i.managedUsingOperations, i.affectsData)
            }

            * getMarkersAtPosition(t) {
                for (const e of this) e.getRange().containsPosition(t) && (yield e)
            }

            * getMarkersIntersectingRange(t) {
                for (const e of this) null !== e.getRange().getIntersection(t) && (yield e)
            }

            destroy() {
                for (const t of this._markers.values()) this._destroyMarker(t);
                this._markers = null, this.stopListening()
            }

            * getMarkersGroup(t) {
                for (const e of this._markers.values()) e.name.startsWith(t + ":") && (yield e)
            }

            _destroyMarker(t) {
                t.stopListening(), t._detachLiveRange()
            }
        }

        cn(Rc, tn);

        class Dc {
            constructor(t, e, i, n) {
                this.name = t, this._liveRange = this._attachLiveRange(e), this._managedUsingOperations = i, this._affectsData = n
            }

            get managedUsingOperations() {
                if (!this._liveRange) throw new Yi.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
                return this._managedUsingOperations
            }

            get affectsData() {
                if (!this._liveRange) throw new Yi.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
                return this._affectsData
            }

            getStart() {
                if (!this._liveRange) throw new Yi.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
                return this._liveRange.start.clone()
            }

            getEnd() {
                if (!this._liveRange) throw new Yi.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
                return this._liveRange.end.clone()
            }

            getRange() {
                if (!this._liveRange) throw new Yi.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
                return this._liveRange.toRange()
            }

            is(t) {
                return "marker" == t || "model:marker" == t
            }

            _attachLiveRange(t) {
                return this._liveRange && this._detachLiveRange(), t.delegate("change:range").to(this), t.delegate("change:content").to(this), this._liveRange = t, t
            }

            _detachLiveRange() {
                this._liveRange.stopDelegating("change:range", this), this._liveRange.stopDelegating("change:content", this), this._liveRange.detach(), this._liveRange = null
            }
        }

        cn(Dc, tn);

        class Lc extends $s {
            constructor(t, e, i = "toNone") {
                if (super(t, e, i), !this.root.is("rootElement")) throw new Yi.b("model-liveposition-root-not-rootelement: LivePosition's root has to be an instance of RootElement.", t);
                (function () {
                    this.listenTo(this.root.document.model, "applyOperation", (t, e) => {
                        const i = e[0];
                        i.isDocumentOperation && function (t) {
                            const e = this.getTransformedByOperation(t);
                            if (!this.isEqual(e)) {
                                const t = this.toPosition();
                                this.path = e.path, this.root = e.root, this.fire("change", t)
                            }
                        }.call(this, i)
                    }, {priority: "low"})
                }).call(this)
            }

            detach() {
                this.stopListening()
            }

            is(t) {
                return "livePosition" == t || "model:livePosition" == t || super.is(t)
            }

            toPosition() {
                return new $s(this.root, this.path.slice(), this.stickiness)
            }

            static fromPosition(t, e) {
                return new this(t.root, t.path.slice(), e || t.stickiness)
            }
        }

        cn(Lc, tn);

        class jc {
            constructor(t, e, i) {
                this.model = t, this.writer = e, this.position = i, this.canMergeWith = new Set([this.position.parent]), this.schema = t.schema, this._filterAttributesOf = [], this._affectedStart = null, this._affectedEnd = null
            }

            handleNodes(t, e) {
                t = Array.from(t);
                for (let i = 0; i < t.length; i++) {
                    const n = t[i];
                    this._handleNode(n, {isFirst: 0 === i && e.isFirst, isLast: i === t.length - 1 && e.isLast})
                }
                this.schema.removeDisallowedAttributes(this._filterAttributesOf, this.writer), this._filterAttributesOf = []
            }

            getSelectionRange() {
                return this.nodeToSelect ? Ys._createOn(this.nodeToSelect) : this.model.schema.getNearestSelectionRange(this.position)
            }

            getAffectedRange() {
                return this._affectedStart ? new Ys(this._affectedStart, this._affectedEnd) : null
            }

            destroy() {
                this._affectedStart && this._affectedStart.detach(), this._affectedEnd && this._affectedEnd.detach()
            }

            _handleNode(t, e) {
                if (this.schema.isObject(t)) return void this._handleObject(t, e);
                this._checkAndSplitToAllowedPosition(t, e) ? (this._insert(t), this._mergeSiblingsOf(t, e)) : this._handleDisallowedNode(t, e)
            }

            _handleObject(t, e) {
                this._checkAndSplitToAllowedPosition(t) ? this._insert(t) : this._tryAutoparagraphing(t, e)
            }

            _handleDisallowedNode(t, e) {
                t.is("element") ? this.handleNodes(t.getChildren(), e) : this._tryAutoparagraphing(t, e)
            }

            _insert(t) {
                if (!this.schema.checkChild(this.position, t)) throw new Yi.b("insertcontent-wrong-position: Given node cannot be inserted on the given position.", this, {
                    node: t,
                    position: this.position
                });
                const e = Lc.fromPosition(this.position, "toNext");
                this._setAffectedBoundaries(this.position), this.writer.insert(t, this.position), this.position = e.toPosition(), e.detach(), this.schema.isObject(t) && !this.schema.checkChild(this.position, "$text") ? this.nodeToSelect = t : this.nodeToSelect = null, this._filterAttributesOf.push(t)
            }

            _setAffectedBoundaries(t) {
                this._affectedStart || (this._affectedStart = Lc.fromPosition(t, "toPrevious")), this._affectedEnd && !this._affectedEnd.isBefore(t) || (this._affectedEnd && this._affectedEnd.detach(), this._affectedEnd = Lc.fromPosition(t, "toNext"))
            }

            _mergeSiblingsOf(t, e) {
                if (!(t instanceof Hs)) return;
                const i = this._canMergeLeft(t, e), n = this._canMergeRight(t, e), o = Lc._createBefore(t);
                o.stickiness = "toNext";
                const r = Lc._createAfter(t);
                if (r.stickiness = "toNext", i) {
                    const t = Lc.fromPosition(this.position);
                    t.stickiness = "toNext", this._affectedStart.isEqual(o) && (this._affectedStart.detach(), this._affectedStart = Lc._createAt(o.nodeBefore, "end", "toPrevious")), this.writer.merge(o), o.isEqual(this._affectedEnd) && e.isLast && (this._affectedEnd.detach(), this._affectedEnd = Lc._createAt(o.nodeBefore, "end", "toNext")), this.position = t.toPosition(), t.detach()
                }
                if (n) {
                    if (!this.position.isEqual(r)) throw new Yi.b("insertcontent-invalid-insertion-position", this);
                    this.position = $s._createAt(r.nodeBefore, "end");
                    const t = Lc.fromPosition(this.position, "toPrevious");
                    this._affectedEnd.isEqual(r) && (this._affectedEnd.detach(), this._affectedEnd = Lc._createAt(r.nodeBefore, "end", "toNext")), this.writer.merge(r), r.getShiftedBy(-1).isEqual(this._affectedStart) && e.isFirst && (this._affectedStart.detach(), this._affectedStart = Lc._createAt(r.nodeBefore, 0, "toPrevious")), this.position = t.toPosition(), t.detach()
                }
                (i || n) && this._filterAttributesOf.push(this.position.parent), o.detach(), r.detach()
            }

            _canMergeLeft(t, e) {
                const i = t.previousSibling;
                return e.isFirst && i instanceof Hs && this.canMergeWith.has(i) && this.model.schema.checkMerge(i, t)
            }

            _canMergeRight(t, e) {
                const i = t.nextSibling;
                return e.isLast && i instanceof Hs && this.canMergeWith.has(i) && this.model.schema.checkMerge(t, i)
            }

            _tryAutoparagraphing(t, e) {
                const i = this.writer.createElement("paragraph");
                this._getAllowedIn(i, this.position.parent) && this.schema.checkChild(i, t) && (i._appendChild(t), this._handleNode(i, e))
            }

            _checkAndSplitToAllowedPosition(t) {
                const e = this._getAllowedIn(t, this.position.parent);
                if (!e) return !1;
                for (; e != this.position.parent;) {
                    if (this.schema.isLimit(this.position.parent)) return !1;
                    if (this.position.isAtStart) {
                        const t = this.position.parent;
                        this.position = this.writer.createPositionBefore(t), t.isEmpty && t.parent === e && this.writer.remove(t)
                    } else if (this.position.isAtEnd) this.position = this.writer.createPositionAfter(this.position.parent); else {
                        const t = this.writer.createPositionAfter(this.position.parent);
                        this._setAffectedBoundaries(this.position), this.writer.split(this.position), this.position = t, this.canMergeWith.add(this.position.nodeAfter)
                    }
                }
                return !0
            }

            _getAllowedIn(t, e) {
                return this.schema.checkChild(e, t) ? e : e.parent ? this._getAllowedIn(t, e.parent) : null
            }
        }

        function zc(t, e, i = {}) {
            if (e.isCollapsed) return;
            const n = e.getFirstRange();
            if ("$graveyard" == n.root.rootName) return;
            const o = t.schema;
            t.change(t => {
                if (!i.doNotResetEntireContent && function (t, e) {
                    const i = t.getLimitElement(e);
                    if (!e.containsEntireContent(i)) return !1;
                    const n = e.getFirstRange();
                    if (n.start.parent == n.end.parent) return !1;
                    return t.checkChild(i, "paragraph")
                }(o, e)) return void function (t, e) {
                    const i = t.model.schema.getLimitElement(e);
                    t.remove(t.createRangeIn(i)), Vc(t, t.createPositionAt(i, 0), e)
                }(t, e);
                const r = n.start, s = Lc.fromPosition(n.end, "toNext");
                if (n.start.isTouching(n.end) || t.remove(n), i.leaveUnmerged || (!function t(e, i, n) {
                    const o = i.parent;
                    const r = n.parent;
                    if (o == r) return;
                    if (e.model.schema.isLimit(o) || e.model.schema.isLimit(r)) return;
                    if (!function (t, e, i) {
                        const n = new Ys(t, e);
                        for (const t of n.getWalker()) if (i.isLimit(t.item)) return !1;
                        return !0
                    }(i, n, e.model.schema)) return;
                    i = e.createPositionAfter(o);
                    n = e.createPositionBefore(r);
                    n.isEqual(i) || e.insert(r, i);
                    e.merge(i);
                    for (; n.parent.isEmpty;) {
                        const t = n.parent;
                        n = e.createPositionBefore(t), e.remove(t)
                    }
                    t(e, i, n)
                }(t, r, s), o.removeDisallowedAttributes(r.parent.getChildren(), t)), Bc(t, e, r), function (t, e) {
                    const i = t.checkChild(e, "$text"), n = t.checkChild(e, "paragraph");
                    return !i && n
                }(o, r)) {
                    const n = o.getNearestSelectionRange(r);
                    i.doNotAutoparagraph && n ? Bc(t, e, n) : Vc(t, r, e)
                }
                s.detach()
            })
        }

        function Vc(t, e, i) {
            const n = t.createElement("paragraph");
            t.insert(n, e), Bc(t, i, t.createPositionAt(n, 0))
        }

        function Bc(t, e, i) {
            e instanceof sa ? t.setSelection(i) : e.setTo(i)
        }

        const Fc = ' ,.?!:;"-()';

        function Hc(t, e, i = {}) {
            const n = t.schema, o = "backward" != i.direction, r = i.unit ? i.unit : "character", s = e.focus,
                a = new Us({
                    boundaries: function (t, e) {
                        const i = t.root, n = $s._createAt(i, e ? "end" : 0);
                        return e ? new Ys(t, n) : new Ys(n, t)
                    }(s, o), singleCharacters: !0, direction: o ? "forward" : "backward"
                }), c = {walker: a, schema: n, isForward: o, unit: r};
            let l;
            for (; l = a.next();) {
                if (l.done) return;
                const i = Uc(c, l.value);
                if (i) return void (e instanceof sa ? t.change(t => {
                    t.setSelectionFocus(i)
                }) : e.setFocus(i))
            }
        }

        function Uc(t, e) {
            if ("text" == e.type) return "word" === t.unit ? function (t, e) {
                let i = t.position.textNode;
                if (i) {
                    let n = t.position.offset - i.startOffset;
                    for (; !Wc(i.data, n, e) && !qc(i, n, e);) {
                        t.next();
                        const o = e ? t.position.nodeAfter : t.position.nodeBefore;
                        if (o && o.is("text")) {
                            const n = o.data.charAt(e ? 0 : o.data.length - 1);
                            Fc.includes(n) || (t.next(), i = t.position.textNode)
                        }
                        n = t.position.offset - i.startOffset
                    }
                }
                return t.position
            }(t.walker, t.isForward) : function (t, e) {
                const i = t.position.textNode;
                if (i) {
                    const n = i.data;
                    let o = t.position.offset - i.startOffset;
                    for (; Ec(n, o) || "character" == e && Mc(n, o);) t.next(), o = t.position.offset - i.startOffset
                }
                return t.position
            }(t.walker, t.unit, t.isForward);
            if (e.type == (t.isForward ? "elementStart" : "elementEnd")) {
                if (t.schema.isObject(e.item)) return $s._createAt(e.item, t.isForward ? "after" : "before");
                if (t.schema.checkChild(e.nextPosition, "$text")) return e.nextPosition
            } else {
                if (t.schema.isLimit(e.item)) return void t.walker.skip(() => !0);
                if (t.schema.checkChild(e.nextPosition, "$text")) return e.nextPosition
            }
        }

        function Wc(t, e, i) {
            const n = e + (i ? 0 : -1);
            return Fc.includes(t.charAt(n))
        }

        function qc(t, e, i) {
            return e === (i ? t.endOffset : 0)
        }

        function $c(t, e) {
            const i = [];
            Array.from(t.getItems({direction: "backward"})).map(t => e.createRangeOn(t)).filter(e => {
                return (e.start.isAfter(t.start) || e.start.isEqual(t.start)) && (e.end.isBefore(t.end) || e.end.isEqual(t.end))
            }).forEach(t => {
                i.push(t.start.parent), e.remove(t)
            }), i.forEach(t => {
                let i = t;
                for (; i.parent && i.isEmpty;) {
                    const t = e.createRangeOn(i);
                    i = i.parent, e.remove(t)
                }
            })
        }

        function Yc(t) {
            t.document.registerPostFixer(e => (function (t, e) {
                const i = e.document.selection, n = e.schema, o = [];
                let r = !1;
                for (const t of i.getRanges()) {
                    const e = Gc(t, n);
                    e ? (o.push(e), r = !0) : o.push(t)
                }
                if (r) {
                    let e = o;
                    if (o.length > 1) {
                        const t = o[0].start, i = o[o.length - 1].end;
                        e = [new Ys(t, i)]
                    }
                    t.setSelection(e, {backward: i.isBackward})
                }
            })(e, t))
        }

        function Gc(t, e) {
            return t.isCollapsed ? function (t, e) {
                const i = t.start, n = e.getNearestSelectionRange(i);
                if (!n) return null;
                const o = n.start;
                if (i.isEqual(o)) return null;
                if (o.nodeAfter && e.isLimit(o.nodeAfter)) return new Ys(o, $s._createAfter(o.nodeAfter));
                return new Ys(o)
            }(t, e) : function (t, e) {
                const i = t.start, n = t.end, o = e.checkChild(i, "$text"), r = e.checkChild(n, "$text"),
                    s = e.getLimitElement(i), a = e.getLimitElement(n);
                if (s === a) {
                    if (o && r) return null;
                    if (function (t, e, i) {
                        const n = t.nodeAfter && !i.isLimit(t.nodeAfter) || i.checkChild(t, "$text"),
                            o = e.nodeBefore && !i.isLimit(e.nodeBefore) || i.checkChild(e, "$text");
                        return n || o
                    }(i, n, e)) {
                        const t = i.nodeAfter && e.isObject(i.nodeAfter),
                            o = t ? null : e.getNearestSelectionRange(i, "forward"),
                            r = n.nodeBefore && e.isObject(n.nodeBefore),
                            s = r ? null : e.getNearestSelectionRange(n, "backward"), a = o ? o.start : i,
                            c = s ? s.start : n;
                        return new Ys(a, c)
                    }
                }
                const c = s && !s.is("rootElement"), l = a && !a.is("rootElement");
                if (c || l) {
                    const t = i.nodeAfter && n.nodeBefore && i.nodeAfter.parent === n.nodeBefore.parent,
                        o = c && (!t || !Kc(i.nodeAfter, e)), r = l && (!t || !Kc(n.nodeBefore, e));
                    let d = i, h = n;
                    return o && (d = $s._createBefore(Qc(s, e))), r && (h = $s._createAfter(Qc(a, e))), new Ys(d, h)
                }
                return null
            }(t, e)
        }

        function Qc(t, e) {
            let i = t, n = i;
            for (; e.isLimit(n) && n.parent;) i = n, n = n.parent;
            return i
        }

        function Kc(t, e) {
            return t && e.isObject(t)
        }

        class Jc {
            constructor() {
                this.markers = new Rc, this.document = new Nc(this), this.schema = new Oa, this._pendingChanges = [], this._currentWriter = null, ["insertContent", "deleteContent", "modifySelection", "getSelectedContent", "applyOperation"].forEach(t => this.decorate(t)), this.on("applyOperation", (t, e) => {
                    e[0]._validate()
                }, {priority: "highest"}), this.schema.register("$root", {isLimit: !0}), this.schema.register("$block", {
                    allowIn: "$root",
                    isBlock: !0
                }), this.schema.register("$text", {
                    allowIn: "$block",
                    isInline: !0
                }), this.schema.register("$clipboardHolder", {
                    allowContentOf: "$root",
                    isLimit: !0
                }), this.schema.extend("$text", {allowIn: "$clipboardHolder"}), this.schema.register("$marker"), this.schema.addChildCheck((t, e) => {
                    if ("$marker" === e.name) return !0
                }), Yc(this)
            }

            change(t) {
                try {
                    return 0 === this._pendingChanges.length ? (this._pendingChanges.push({
                        batch: new Ja,
                        callback: t
                    }), this._runPendingChanges()[0]) : t(this._currentWriter)
                } catch (t) {
                    Yi.b.rethrowUnexpectedError(t, this)
                }
            }

            enqueueChange(t, e) {
                try {
                    "string" == typeof t ? t = new Ja(t) : "function" == typeof t && (e = t, t = new Ja), this._pendingChanges.push({
                        batch: t,
                        callback: e
                    }), 1 == this._pendingChanges.length && this._runPendingChanges()
                } catch (t) {
                    Yi.b.rethrowUnexpectedError(t, this)
                }
            }

            applyOperation(t) {
                t._execute()
            }

            insertContent(t, e, i) {
                return function (t, e, i, n) {
                    return t.change(o => {
                        let r;
                        const s = (r = i ? i instanceof Xs || i instanceof sa ? i : o.createSelection(i, n) : t.document.selection).getFirstPosition();
                        r.isCollapsed || t.deleteContent(r, {doNotAutoparagraph: !0});
                        const a = new jc(t, o, s);
                        let c;
                        c = e.is("documentFragment") ? e.getChildren() : [e], a.handleNodes(c, {
                            isFirst: !0,
                            isLast: !0
                        });
                        const l = a.getSelectionRange();
                        l && (r instanceof sa ? o.setSelection(l) : r.setTo(l));
                        const d = a.getAffectedRange() || t.createRange(s);
                        return a.destroy(), d
                    })
                }(this, t, e, i)
            }

            deleteContent(t, e) {
                zc(this, t, e)
            }

            modifySelection(t, e) {
                Hc(this, t, e)
            }

            getSelectedContent(t) {
                return function (t, e) {
                    return t.change(t => {
                        const i = t.createDocumentFragment(), n = e.getFirstRange();
                        if (!n || n.isCollapsed) return i;
                        const o = n.start.root, r = n.start.getCommonPath(n.end), s = o.getNodeByPath(r);
                        let a;
                        const c = (a = n.start.parent == n.end.parent ? n : t.createRange(t.createPositionAt(s, n.start.path[r.length]), t.createPositionAt(s, n.end.path[r.length] + 1))).end.offset - a.start.offset;
                        for (const e of a.getItems({shallow: !0})) e.is("textProxy") ? t.appendText(e.data, e.getAttributes(), i) : t.append(e._clone(!0), i);
                        if (a != n) {
                            const e = n._getTransformedByMove(a.start, t.createPositionAt(i, 0), c)[0],
                                o = t.createRange(t.createPositionAt(i, 0), e.start);
                            $c(t.createRange(e.end, t.createPositionAt(i, "end")), t), $c(o, t)
                        }
                        return i
                    })
                }(this, t)
            }

            hasContent(t, e) {
                const i = t instanceof Hs ? Ys._createIn(t) : t;
                if (i.isCollapsed) return !1;
                for (const t of this.markers.getMarkersIntersectingRange(i)) if (t.affectsData) return !0;
                const {ignoreWhitespaces: n = !1} = e || {};
                for (const t of i.getItems()) if (t.is("textProxy")) {
                    if (!n) return !0;
                    if (-1 !== t.data.search(/\S/)) return !0
                } else if (this.schema.isObject(t)) return !0;
                return !1
            }

            createPositionFromPath(t, e, i) {
                return new $s(t, e, i)
            }

            createPositionAt(t, e) {
                return $s._createAt(t, e)
            }

            createPositionAfter(t) {
                return $s._createAfter(t)
            }

            createPositionBefore(t) {
                return $s._createBefore(t)
            }

            createRange(t, e) {
                return new Ys(t, e)
            }

            createRangeIn(t) {
                return Ys._createIn(t)
            }

            createRangeOn(t) {
                return Ys._createOn(t)
            }

            createSelection(t, e, i) {
                return new Xs(t, e, i)
            }

            createBatch(t) {
                return new Ja(t)
            }

            destroy() {
                this.document.destroy(), this.stopListening()
            }

            _runPendingChanges() {
                const t = [];
                for (this.fire("_beforeChanges"); this._pendingChanges.length;) {
                    const e = this._pendingChanges[0].batch;
                    this._currentWriter = new wc(this, e);
                    const i = this._pendingChanges[0].callback(this._currentWriter);
                    t.push(i), this.document._handleChangeBlock(this._currentWriter), this._pendingChanges.shift(), this._currentWriter = null
                }
                return this.fire("_afterChanges"), t
            }
        }

        cn(Jc, Fn);

        class Zc {
            constructor() {
                this._listener = Object.create(cr)
            }

            listenTo(t) {
                this._listener.listenTo(t, "keydown", (t, e) => {
                    this._listener.fire("_keydown:" + wo(e), e)
                })
            }

            set(t, e, i = {}) {
                const n = ko(t), o = i.priority;
                this._listener.listenTo(this._listener, "_keydown:" + n, (t, i) => {
                    e(i, () => {
                        i.preventDefault(), i.stopPropagation(), t.stop()
                    }), t.return = !0
                }, {priority: o})
            }

            press(t) {
                return !!this._listener.fire("_keydown:" + wo(t), t)
            }

            destroy() {
                this._listener.stopListening()
            }
        }

        class Xc extends Zc {
            constructor(t) {
                super(), this.editor = t
            }

            set(t, e, i = {}) {
                if ("string" == typeof e) {
                    const t = e;
                    e = ((e, i) => {
                        this.editor.execute(t), i()
                    })
                }
                super.set(t, e, i)
            }
        }

        class tl {
            constructor(t) {
                const e = this.constructor.builtinPlugins;
                this.config = new qi(t, this.constructor.defaultConfig), this.config.define("plugins", e), this.plugins = new Ta(this, e), this.commands = new Ca;
                const i = this.config.get("language") || {};
                this.locale = new Ea({
                    uiLanguage: "string" == typeof i ? i : i.ui,
                    contentLanguage: this.config.get("language.content")
                }), this.t = this.locale.t, this.set("state", "initializing"), this.once("ready", () => this.state = "ready", {priority: "high"}), this.once("destroy", () => this.state = "destroyed", {priority: "high"}), this.set("isReadOnly", !1), this.model = new Jc, this.data = new Ya(this.model), this.editing = new Aa(this.model), this.editing.view.document.bind("isReadOnly").to(this), this.conversion = new Ga([this.editing.downcastDispatcher, this.data.downcastDispatcher], this.data.upcastDispatcher), this.conversion.addAlias("dataDowncast", this.data.downcastDispatcher), this.conversion.addAlias("editingDowncast", this.editing.downcastDispatcher), this.keystrokes = new Xc(this), this.keystrokes.listenTo(this.editing.view.document)
            }

            initPlugins() {
                const t = this.config, e = t.get("plugins") || [], i = t.get("removePlugins") || [],
                    n = t.get("extraPlugins") || [];
                return this.plugins.init(e.concat(n), i)
            }

            destroy() {
                let t = Promise.resolve();
                return "initializing" == this.state && (t = new Promise(t => this.once("ready", t))), t.then(() => {
                    this.fire("destroy"), this.stopListening(), this.commands.destroy()
                }).then(() => this.plugins.destroy()).then(() => {
                    this.model.destroy(), this.data.destroy(), this.editing.destroy(), this.keystrokes.destroy()
                })
            }

            execute(...t) {
                try {
                    this.commands.execute(...t)
                } catch (t) {
                    Yi.b.rethrowUnexpectedError(t, this)
                }
            }
        }

        cn(tl, Fn);
        var el = {
            setData(t) {
                this.data.set(t)
            }, getData(t) {
                return this.data.get(t)
            }
        };
        var il = {
            updateSourceElement() {
                if (!this.sourceElement) throw new Yi.b("editor-missing-sourceelement: Cannot update the source element of a detached editor.", this);
                !function (t, e) {
                    t instanceof HTMLTextAreaElement && (t.value = e), t.innerHTML = e
                }(this.sourceElement, this.data.get())
            }
        };

        class nl {
            getHtml(t) {
                const e = document.implementation.createHTMLDocument("").createElement("div");
                return e.appendChild(t), e.innerHTML
            }
        }

        class ol {
            constructor() {
                this._domParser = new DOMParser, this._domConverter = new or({blockFillerMode: "nbsp"}), this._htmlWriter = new nl
            }

            toData(t) {
                const e = this._domConverter.viewToDom(t, document);
                return this._htmlWriter.getHtml(e)
            }

            toView(t) {
                const e = this._toDom(t);
                return this._domConverter.domToView(e)
            }

            _toDom(t) {
                const e = this._domParser.parseFromString(t, "text/html"), i = e.createDocumentFragment(),
                    n = e.body.childNodes;
                for (; n.length > 0;) i.appendChild(n[0]);
                return i
            }
        }

        class rl {
            constructor(t) {
                this.editor = t, this._components = new Map
            }

            * names() {
                for (const t of this._components.values()) yield t.originalName
            }

            add(t, e) {
                if (this.has(t)) throw new Yi.b("componentfactory-item-exists: The item already exists in the component factory.", this, {name: t});
                this._components.set(sl(t), {callback: e, originalName: t})
            }

            create(t) {
                if (!this.has(t)) throw new Yi.b("componentfactory-item-missing: The required component is not registered in the factory.", this, {name: t});
                return this._components.get(sl(t)).callback(this.editor.locale)
            }

            has(t) {
                return this._components.has(sl(t))
            }
        }

        function sl(t) {
            return String(t).toLowerCase()
        }

        class al {
            constructor() {
                this.set("isFocused", !1), this.set("focusedElement", null), this._elements = new Set, this._nextEventLoopTimeout = null
            }

            add(t) {
                if (this._elements.has(t)) throw new Yi.b("focusTracker-add-element-already-exist", this);
                this.listenTo(t, "focus", () => this._focus(t), {useCapture: !0}), this.listenTo(t, "blur", () => this._blur(), {useCapture: !0}), this._elements.add(t)
            }

            remove(t) {
                t === this.focusedElement && this._blur(t), this._elements.has(t) && (this.stopListening(t), this._elements.delete(t))
            }

            destroy() {
                this.stopListening()
            }

            _focus(t) {
                clearTimeout(this._nextEventLoopTimeout), this.focusedElement = t, this.isFocused = !0
            }

            _blur() {
                clearTimeout(this._nextEventLoopTimeout), this._nextEventLoopTimeout = setTimeout(() => {
                    this.focusedElement = null, this.isFocused = !1
                }, 0)
            }
        }

        cn(al, cr), cn(al, Fn);

        class cl {
            constructor(t) {
                this.editor = t, this.componentFactory = new rl(t), this.focusTracker = new al, this._editableElementsMap = new Map, this.listenTo(t.editing.view.document, "layoutChanged", () => this.update())
            }

            get element() {
                return null
            }

            update() {
                this.fire("update")
            }

            destroy() {
                this.stopListening(), this.focusTracker.destroy();
                for (const t of this._editableElementsMap.values()) t.ckeditorInstance = null;
                this._editableElementsMap = new Map
            }

            setEditableElement(t, e) {
                this._editableElementsMap.set(t, e), e.ckeditorInstance || (e.ckeditorInstance = this.editor)
            }

            getEditableElement(t = "main") {
                return this._editableElementsMap.get(t)
            }

            getEditableElementsNames() {
                return this._editableElementsMap.keys()
            }

            get _editableElements() {
                return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.", {editorUI: this}), this._editableElementsMap
            }
        }

        cn(cl, tn);
        i(15);
        const ll = new WeakMap;

        function dl(t) {
            const {view: e, element: i, text: n, isDirectHost: o = !0} = t, r = e.document;
            ll.has(r) || (ll.set(r, new Map), r.registerPostFixer(t => ul(r, t))), ll.get(r).set(i, {
                text: n,
                isDirectHost: o
            }), e.change(t => ul(r, t))
        }

        function hl(t, e) {
            return !!e.hasClass("ck-placeholder") && (t.removeClass("ck-placeholder", e), !0)
        }

        function ul(t, e) {
            const i = ll.get(t);
            let n = !1;
            for (const [t, o] of i) fl(e, t, o) && (n = !0);
            return n
        }

        function fl(t, e, i) {
            const {text: n, isDirectHost: o} = i, r = o ? e : function (t) {
                if (1 === t.childCount) {
                    const e = t.getChild(0);
                    if (e.is("element") && !e.is("uiElement")) return e
                }
                return null
            }(e);
            let s = !1;
            return !!r && (i.hostElement = r, r.getAttribute("data-placeholder") !== n && (t.setAttribute("data-placeholder", n, r), s = !0), !function (t) {
                const e = t.document;
                if (!e) return !1;
                const i = !Array.from(t.getChildren()).some(t => !t.is("uiElement"));
                if (!e.isFocused && i) return !0;
                const n = e.selection.anchor;
                return !(!i || !n || n.parent === t)
            }(r) ? hl(t, r) && (s = !0) : function (t, e) {
                return !e.hasClass("ck-placeholder") && (t.addClass("ck-placeholder", e), !0)
            }(t, r) && (s = !0), s)
        }

        class gl {
            constructor() {
                this._replacedElements = []
            }

            replace(t, e) {
                this._replacedElements.push({
                    element: t,
                    newElement: e
                }), t.style.display = "none", e && t.parentNode.insertBefore(e, t.nextSibling)
            }

            restore() {
                this._replacedElements.forEach(({element: t, newElement: e}) => {
                    t.style.display = "", e && e.remove()
                }), this._replacedElements = []
            }
        }

        class ml extends cl {
            constructor(t, e) {
                super(t), this.view = e, this._toolbarConfig = function (t) {
                    return Array.isArray(t) ? {items: t} : t ? Object.assign({items: []}, t) : {items: []}
                }(t.config.get("toolbar")), this._elementReplacer = new gl
            }

            get element() {
                return this.view.element
            }

            init(t) {
                const e = this.editor, i = this.view, n = e.editing.view, o = i.editable, r = n.document.getRoot();
                o.name = r.rootName, i.render();
                const s = o.element;
                this.setEditableElement(o.name, s), this.focusTracker.add(s), i.editable.bind("isFocused").to(this.focusTracker), n.attachDomRoot(s), t && this._elementReplacer.replace(t, this.element), this._initPlaceholder(), this._initToolbar(), this.fire("ready")
            }

            destroy() {
                const t = this.view, e = this.editor.editing.view;
                this._elementReplacer.restore(), e.detachDomRoot(t.editable.name), t.destroy(), super.destroy()
            }

            _initToolbar() {
                const t = this.editor, e = this.view, i = t.editing.view;
                e.stickyPanel.bind("isActive").to(this.focusTracker, "isFocused"), e.stickyPanel.limiterElement = e.element, this._toolbarConfig.viewportTopOffset && (e.stickyPanel.viewportTopOffset = this._toolbarConfig.viewportTopOffset), e.toolbar.fillFromConfig(this._toolbarConfig.items, this.componentFactory), function ({origin: t, originKeystrokeHandler: e, originFocusTracker: i, toolbar: n, beforeFocus: o, afterBlur: r}) {
                    i.add(n.element), e.set("Alt+F10", (t, e) => {
                        i.isFocused && !n.focusTracker.isFocused && (o && o(), n.focus(), e())
                    }), n.keystrokes.set("Esc", (e, i) => {
                        n.focusTracker.isFocused && (t.focus(), r && r(), i())
                    })
                }({
                    origin: i,
                    originFocusTracker: this.focusTracker,
                    originKeystrokeHandler: t.keystrokes,
                    toolbar: e.toolbar
                })
            }

            _initPlaceholder() {
                const t = this.editor, e = t.editing.view, i = e.document.getRoot(), n = t.sourceElement,
                    o = t.config.get("placeholder") || n && "textarea" === n.tagName.toLowerCase() && n.getAttribute("placeholder");
                o && dl({view: e, element: i, text: o, isDirectHost: !1})
            }
        }

        class pl extends oo {
            constructor(t) {
                super({idProperty: "viewUid"}), this.on("add", (t, e, i) => {
                    e.isRendered || e.render(), e.element && this._parentElement && this._parentElement.insertBefore(e.element, this._parentElement.children[i])
                }), this.on("remove", (t, e) => {
                    e.element && this._parentElement && e.element.remove()
                }), this.locale = t, this._parentElement = null
            }

            destroy() {
                this.map(t => t.destroy())
            }

            setParent(t) {
                this._parentElement = t
            }

            delegate(...t) {
                if (!t.length || !function (t) {
                    return t.every(t => "string" == typeof t)
                }(t)) throw new Yi.b("ui-viewcollection-delegate-wrong-events: All event names must be strings.", this);
                return {
                    to: e => {
                        for (const i of this) for (const n of t) i.delegate(n).to(e);
                        this.on("add", (i, n) => {
                            for (const i of t) n.delegate(i).to(e)
                        }), this.on("remove", (i, n) => {
                            for (const i of t) n.stopDelegating(i, e)
                        })
                    }
                }
            }
        }

        const bl = "http://www.w3.org/1999/xhtml";

        class wl {
            constructor(t) {
                Object.assign(this, Pl(Cl(t))), this._isRendered = !1, this._revertData = null
            }

            render() {
                const t = this._renderNode({intoFragment: !0});
                return this._isRendered = !0, t
            }

            apply(t) {
                return this._revertData = {children: [], bindings: [], attributes: {}}, this._renderNode({
                    node: t,
                    isApplying: !0,
                    revertData: this._revertData
                }), t
            }

            revert(t) {
                if (!this._revertData) throw new Yi.b("ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.", [this, t]);
                this._revertTemplateFromNode(t, this._revertData)
            }

            * getViews() {
                yield* function* t(e) {
                    if (e.children) for (const i of e.children) Nl(i) ? yield i : Ol(i) && (yield* t(i))
                }(this)
            }

            static bind(t, e) {
                return {
                    to: (i, n) => new _l({
                        eventNameOrFunction: i,
                        attribute: i,
                        observable: t,
                        emitter: e,
                        callback: n
                    }), if: (i, n, o) => new vl({observable: t, emitter: e, attribute: i, valueIfTrue: n, callback: o})
                }
            }

            static extend(t, e) {
                if (t._isRendered) throw new Yi.b("template-extend-render: Attempting to extend a template which has already been rendered.", [this, t]);
                !function t(e, i) {
                    i.attributes && (e.attributes || (e.attributes = {}), Ml(e.attributes, i.attributes));
                    i.eventListeners && (e.eventListeners || (e.eventListeners = {}), Ml(e.eventListeners, i.eventListeners));
                    i.text && e.text.push(...i.text);
                    if (i.children && i.children.length) {
                        if (e.children.length != i.children.length) throw new Yi.b("ui-template-extend-children-mismatch: The number of children in extended definition does not match.", e);
                        let n = 0;
                        for (const o of i.children) t(e.children[n++], o)
                    }
                }(t, Pl(Cl(e)))
            }

            _renderNode(t) {
                let e;
                if (e = t.node ? this.tag && this.text : this.tag ? this.text : !this.text) throw new Yi.b('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.', this);
                return this.text ? this._renderText(t) : this._renderElement(t)
            }

            _renderElement(t) {
                let e = t.node;
                return e || (e = t.node = document.createElementNS(this.ns || bl, this.tag)), this._renderAttributes(t), this._renderElementChildren(t), this._setUpListeners(t), e
            }

            _renderText(t) {
                let e = t.node;
                return e ? t.revertData.text = e.textContent : e = t.node = document.createTextNode(""), yl(this.text) ? this._bindToObservable({
                    schema: this.text,
                    updater: function (t) {
                        return {
                            set(e) {
                                t.textContent = e
                            }, remove() {
                                t.textContent = ""
                            }
                        }
                    }(e),
                    data: t
                }) : e.textContent = this.text.join(""), e
            }

            _renderAttributes(t) {
                let e, i, n, o;
                if (!this.attributes) return;
                const r = t.node, s = t.revertData;
                for (e in this.attributes) if (n = r.getAttribute(e), i = this.attributes[e], s && (s.attributes[e] = n), o = B(i[0]) && i[0].ns ? i[0].ns : null, yl(i)) {
                    const a = o ? i[0].value : i;
                    s && Dl(e) && a.unshift(n), this._bindToObservable({schema: a, updater: Al(r, e, o), data: t})
                } else "style" == e && "string" != typeof i[0] ? this._renderStyleAttribute(i[0], t) : (s && n && Dl(e) && i.unshift(n), Il(i = i.map(t => t && t.value || t).reduce((t, e) => t.concat(e), []).reduce(El, "")) || r.setAttributeNS(o, e, i))
            }

            _renderStyleAttribute(t, e) {
                const i = e.node;
                for (const n in t) {
                    const o = t[n];
                    yl(o) ? this._bindToObservable({schema: [o], updater: Tl(i, n), data: e}) : i.style[n] = o
                }
            }

            _renderElementChildren(t) {
                const e = t.node, i = t.intoFragment ? document.createDocumentFragment() : e, n = t.isApplying;
                let o = 0;
                for (const r of this.children) if (Rl(r)) {
                    if (!n) {
                        r.setParent(e);
                        for (const t of r) i.appendChild(t.element)
                    }
                } else if (Nl(r)) n || (r.isRendered || r.render(), i.appendChild(r.element)); else if (Ko(r)) i.appendChild(r); else if (n) {
                    const e = {children: [], bindings: [], attributes: {}};
                    t.revertData.children.push(e), r._renderNode({
                        node: i.childNodes[o++],
                        isApplying: !0,
                        revertData: e
                    })
                } else i.appendChild(r.render());
                t.intoFragment && e.appendChild(i)
            }

            _setUpListeners(t) {
                if (this.eventListeners) for (const e in this.eventListeners) {
                    const i = this.eventListeners[e].map(i => {
                        const [n, o] = e.split("@");
                        return i.activateDomEventListener(n, o, t)
                    });
                    t.revertData && t.revertData.bindings.push(i)
                }
            }

            _bindToObservable({schema: t, updater: e, data: i}) {
                const n = i.revertData;
                xl(t, e, i);
                const o = t.filter(t => !Il(t)).filter(t => t.observable).map(n => n.activateAttributeListener(t, e, i));
                n && n.bindings.push(o)
            }

            _revertTemplateFromNode(t, e) {
                for (const t of e.bindings) for (const e of t) e();
                if (e.text) t.textContent = e.text; else {
                    for (const i in e.attributes) {
                        const n = e.attributes[i];
                        null === n ? t.removeAttribute(i) : t.setAttribute(i, n)
                    }
                    for (let i = 0; i < e.children.length; ++i) this._revertTemplateFromNode(t.childNodes[i], e.children[i])
                }
            }
        }

        cn(wl, tn);

        class kl {
            constructor(t) {
                Object.assign(this, t)
            }

            getValue(t) {
                const e = this.observable[this.attribute];
                return this.callback ? this.callback(e, t) : e
            }

            activateAttributeListener(t, e, i) {
                const n = () => xl(t, e, i);
                return this.emitter.listenTo(this.observable, "change:" + this.attribute, n), () => {
                    this.emitter.stopListening(this.observable, "change:" + this.attribute, n)
                }
            }
        }

        class _l extends kl {
            activateDomEventListener(t, e, i) {
                const n = (t, i) => {
                    e && !i.target.matches(e) || ("function" == typeof this.eventNameOrFunction ? this.eventNameOrFunction(i) : this.observable.fire(this.eventNameOrFunction, i))
                };
                return this.emitter.listenTo(i.node, t, n), () => {
                    this.emitter.stopListening(i.node, t, n)
                }
            }
        }

        class vl extends kl {
            getValue(t) {
                return !Il(super.getValue(t)) && (this.valueIfTrue || !0)
            }
        }

        function yl(t) {
            return !!t && (t.value && (t = t.value), Array.isArray(t) ? t.some(yl) : t instanceof kl)
        }

        function xl(t, e, {node: i}) {
            let n = function (t, e) {
                return t.map(t => t instanceof kl ? t.getValue(e) : t)
            }(t, i);
            Il(n = 1 == t.length && t[0] instanceof vl ? n[0] : n.reduce(El, "")) ? e.remove() : e.set(n)
        }

        function Al(t, e, i) {
            return {
                set(n) {
                    t.setAttributeNS(i, e, n)
                }, remove() {
                    t.removeAttributeNS(i, e)
                }
            }
        }

        function Tl(t, e) {
            return {
                set(i) {
                    t.style[e] = i
                }, remove() {
                    t.style[e] = null
                }
            }
        }

        function Cl(t) {
            return Ui(t, t => {
                if (t && (t instanceof kl || Ol(t) || Nl(t) || Rl(t))) return t
            })
        }

        function Pl(t) {
            if ("string" == typeof t ? t = function (t) {
                return {text: [t]}
            }(t) : t.text && function (t) {
                Array.isArray(t.text) || (t.text = [t.text])
            }(t), t.on && (t.eventListeners = function (t) {
                for (const e in t) Sl(t, e);
                return t
            }(t.on), delete t.on), !t.text) {
                t.attributes && function (t) {
                    for (const e in t) t[e].value && (t[e].value = [].concat(t[e].value)), Sl(t, e)
                }(t.attributes);
                const e = [];
                if (t.children) if (Rl(t.children)) e.push(t.children); else for (const i of t.children) Ol(i) || Nl(i) || Ko(i) ? e.push(i) : e.push(new wl(i));
                t.children = e
            }
            return t
        }

        function Sl(t, e) {
            Array.isArray(t[e]) || (t[e] = [t[e]])
        }

        function El(t, e) {
            return Il(e) ? t : Il(t) ? e : `${t} ${e}`
        }

        function Ml(t, e) {
            for (const i in e) t[i] ? t[i].push(...e[i]) : t[i] = e[i]
        }

        function Il(t) {
            return !t && 0 !== t
        }

        function Nl(t) {
            return t instanceof Ll
        }

        function Ol(t) {
            return t instanceof wl
        }

        function Rl(t) {
            return t instanceof pl
        }

        function Dl(t) {
            return "class" == t || "style" == t
        }

        i(17);

        class Ll {
            constructor(t) {
                this.element = null, this.isRendered = !1, this.locale = t, this.t = t && t.t, this._viewCollections = new oo, this._unboundChildren = this.createCollection(), this._viewCollections.on("add", (e, i) => {
                    i.locale = t
                }), this.decorate("render")
            }

            get bindTemplate() {
                return this._bindTemplate ? this._bindTemplate : this._bindTemplate = wl.bind(this, this)
            }

            createCollection() {
                const t = new pl;
                return this._viewCollections.add(t), t
            }

            registerChild(t) {
                pn(t) || (t = [t]);
                for (const e of t) this._unboundChildren.add(e)
            }

            deregisterChild(t) {
                pn(t) || (t = [t]);
                for (const e of t) this._unboundChildren.remove(e)
            }

            setTemplate(t) {
                this.template = new wl(t)
            }

            extendTemplate(t) {
                wl.extend(this.template, t)
            }

            render() {
                if (this.isRendered) throw new Yi.b("ui-view-render-already-rendered: This View has already been rendered.", this);
                this.template && (this.element = this.template.render(), this.registerChild(this.template.getViews())), this.isRendered = !0
            }

            destroy() {
                this.stopListening(), this._viewCollections.map(t => t.destroy()), this.template && this.template._revertData && this.template.revert(this.element)
            }
        }

        cn(Ll, cr), cn(Ll, Fn);
        i(19);

        class jl extends Ll {
            constructor(t) {
                super(t), this.body = this.createCollection()
            }

            render() {
                super.render(), this._renderBodyCollection()
            }

            destroy() {
                return this._bodyCollectionContainer.remove(), super.destroy()
            }

            _renderBodyCollection() {
                const t = this.locale, e = this._bodyCollectionContainer = new wl({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-reset_all", "ck-body", "ck-rounded-corners"],
                        dir: t.uiLanguageDirection
                    },
                    children: this.body
                }).render();
                document.body.appendChild(e)
            }
        }

        i(21);

        class zl extends Ll {
            constructor(t) {
                super(t), this.set("text"), this.set("for");
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: "label",
                    attributes: {class: ["ck", "ck-label"], for: e.to("for")},
                    children: [{text: e.to("text")}]
                })
            }
        }

        class Vl extends jl {
            constructor(t) {
                super(t);
                const e = Ki();
                this.top = this.createCollection(), this.main = this.createCollection(), this._voiceLabelView = this._createVoiceLabel(e), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-reset", "ck-editor", "ck-rounded-corners"],
                        role: "application",
                        dir: t.uiLanguageDirection,
                        lang: t.uiLanguage,
                        "aria-labelledby": `ck-editor__aria-label_${e}`
                    },
                    children: [this._voiceLabelView, {
                        tag: "div",
                        attributes: {class: ["ck", "ck-editor__top", "ck-reset_all"], role: "presentation"},
                        children: this.top
                    }, {
                        tag: "div",
                        attributes: {class: ["ck", "ck-editor__main"], role: "presentation"},
                        children: this.main
                    }]
                })
            }

            _createVoiceLabel(t) {
                const e = this.t, i = new zl;
                return i.text = e("cb"), i.extendTemplate({
                    attributes: {
                        id: `ck-editor__aria-label_${t}`,
                        class: "ck-voice-label"
                    }
                }), i
            }
        }

        class Bl extends Ll {
            constructor(t, e, i) {
                super(t), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-content", "ck-editor__editable", "ck-rounded-corners"],
                        lang: t.contentLanguage,
                        dir: t.contentLanguageDirection
                    }
                }), this.name = null, this.set("isFocused", !1), this._editableElement = i, this._hasExternalElement = !!this._editableElement, this._editingView = e
            }

            render() {
                super.render(), this._hasExternalElement ? this.template.apply(this.element = this._editableElement) : this._editableElement = this.element, this.on("change:isFocused", () => this._updateIsFocusedClasses()), this._updateIsFocusedClasses()
            }

            destroy() {
                this._hasExternalElement && this.template.revert(this._editableElement), super.destroy()
            }

            _updateIsFocusedClasses() {
                const t = this._editingView;

                function e(e) {
                    t.change(i => {
                        const n = t.document.getRoot(e.name);
                        i.addClass(e.isFocused ? "ck-focused" : "ck-blurred", n), i.removeClass(e.isFocused ? "ck-blurred" : "ck-focused", n)
                    })
                }

                t.isRenderingInProgress ? function i(n) {
                    t.once("change:isRenderingInProgress", (t, o, r) => {
                        r ? i(n) : e(n)
                    })
                }(this) : e(this)
            }
        }

        class Fl extends Bl {
            constructor(t, e, i) {
                super(t, e, i), this.extendTemplate({
                    attributes: {
                        role: "textbox",
                        class: "ck-editor__editable_inline"
                    }
                })
            }

            render() {
                super.render();
                const t = this._editingView, e = this.t;
                t.change(i => {
                    const n = t.document.getRoot(this.name);
                    i.setAttribute("aria-label", e("cc", [this.name]), n)
                })
            }
        }

        function Hl(t) {
            return e => e + t
        }

        i(23);
        const Ul = Hl("px");

        class Wl extends Ll {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("isActive", !1), this.set("isSticky", !1), this.set("limiterElement", null), this.set("limiterBottomOffset", 50), this.set("viewportTopOffset", 0), this.set("_marginLeft", null), this.set("_isStickyToTheLimiter", !1), this.set("_hasViewportTopOffset", !1), this.content = this.createCollection(), this._contentPanelPlaceholder = new wl({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-sticky-panel__placeholder"],
                        style: {
                            display: e.to("isSticky", t => t ? "block" : "none"),
                            height: e.to("isSticky", t => t ? Ul(this._panelRect.height) : null)
                        }
                    }
                }).render(), this._contentPanel = new wl({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-sticky-panel__content", e.if("isSticky", "ck-sticky-panel__content_sticky"), e.if("_isStickyToTheLimiter", "ck-sticky-panel__content_sticky_bottom-limit")],
                        style: {
                            width: e.to("isSticky", t => t ? Ul(this._contentPanelPlaceholder.getBoundingClientRect().width) : null),
                            top: e.to("_hasViewportTopOffset", t => t ? Ul(this.viewportTopOffset) : null),
                            bottom: e.to("_isStickyToTheLimiter", t => t ? Ul(this.limiterBottomOffset) : null),
                            marginLeft: e.to("_marginLeft")
                        }
                    },
                    children: this.content
                }).render(), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-sticky-panel"]},
                    children: [this._contentPanelPlaceholder, this._contentPanel]
                })
            }

            render() {
                super.render(), this._checkIfShouldBeSticky(), this.listenTo(tr.window, "scroll", () => {
                    this._checkIfShouldBeSticky()
                }), this.listenTo(this, "change:isActive", () => {
                    this._checkIfShouldBeSticky()
                })
            }

            _checkIfShouldBeSticky() {
                const t = this._panelRect = this._contentPanel.getBoundingClientRect();
                let e;
                this.limiterElement ? (e = this._limiterRect = this.limiterElement.getBoundingClientRect(), this.isSticky = this.isActive && e.top < this.viewportTopOffset && this._panelRect.height + this.limiterBottomOffset < e.height) : this.isSticky = !1, this.isSticky ? (this._isStickyToTheLimiter = e.bottom < t.height + this.limiterBottomOffset + this.viewportTopOffset, this._hasViewportTopOffset = !this._isStickyToTheLimiter && !!this.viewportTopOffset, this._marginLeft = this._isStickyToTheLimiter ? null : Ul(-tr.window.scrollX)) : (this._isStickyToTheLimiter = !1, this._hasViewportTopOffset = !1, this._marginLeft = null)
            }
        }

        class ql {
            constructor(t) {
                if (Object.assign(this, t), t.actions && t.keystrokeHandler) for (const e in t.actions) {
                    let i = t.actions[e];
                    "string" == typeof i && (i = [i]);
                    for (const n of i) t.keystrokeHandler.set(n, (t, i) => {
                        this[e](), i()
                    })
                }
            }

            get first() {
                return this.focusables.find($l) || null
            }

            get last() {
                return this.focusables.filter($l).slice(-1)[0] || null
            }

            get next() {
                return this._getFocusableItem(1)
            }

            get previous() {
                return this._getFocusableItem(-1)
            }

            get current() {
                let t = null;
                return null === this.focusTracker.focusedElement ? null : (this.focusables.find((e, i) => {
                    const n = e.element === this.focusTracker.focusedElement;
                    return n && (t = i), n
                }), t)
            }

            focusFirst() {
                this._focus(this.first)
            }

            focusLast() {
                this._focus(this.last)
            }

            focusNext() {
                this._focus(this.next)
            }

            focusPrevious() {
                this._focus(this.previous)
            }

            _focus(t) {
                t && t.focus()
            }

            _getFocusableItem(t) {
                const e = this.current, i = this.focusables.length;
                if (!i) return null;
                if (null === e) return this[1 === t ? "first" : "last"];
                let n = (e + i + t) % i;
                do {
                    const e = this.focusables.get(n);
                    if ($l(e)) return e;
                    n = (n + i + t) % i
                } while (n !== e);
                return null
            }
        }

        function $l(t) {
            return !(!t.focus || "none" == tr.window.getComputedStyle(t.element).display)
        }

        class Yl extends Ll {
            constructor(t) {
                super(t), this.setTemplate({tag: "span", attributes: {class: ["ck", "ck-toolbar__separator"]}})
            }
        }

        const Gl = 100;

        class Ql {
            constructor(t) {
                this._callback = t, this._elements = new Set, this._previousRects = new Map, this._periodicCheckTimeout = null
            }

            observe(t) {
                this._elements.add(t), 1 === this._elements.size && this._startPeriodicCheck()
            }

            unobserve(t) {
                this._elements.delete(t), this._previousRects.delete(t), this._elements.size || this._stopPeriodicCheck()
            }

            disconnect() {
                this._elements.forEach(t => this.unobserve(t))
            }

            _startPeriodicCheck() {
                const t = () => {
                    this._checkElementRectsAndExecuteCallback(), this._periodicCheckTimeout = setTimeout(t, Gl)
                };
                this.listenTo(tr.window, "resize", () => {
                    this._checkElementRectsAndExecuteCallback()
                }), t()
            }

            _stopPeriodicCheck() {
                clearTimeout(this._periodicCheckTimeout), this.stopListening(), this._previousRects.clear()
            }

            _checkElementRectsAndExecuteCallback() {
                const t = [];
                for (const e of this._elements) this._hasRectChanged(e) && t.push({
                    target: e,
                    contentRect: this._previousRects.get(e)
                });
                t.length && this._callback(t)
            }

            _hasRectChanged(t) {
                if (!t.ownerDocument.body.contains(t)) return !1;
                const e = new xs(t), i = this._previousRects.get(t), n = !i || !i.isEqual(e);
                return this._previousRects.set(t, e), n
            }
        }

        cn(Ql, cr);

        class Kl extends Ll {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("isVisible", !1), this.set("position", "se"), this.children = this.createCollection(), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-reset", "ck-dropdown__panel", e.to("position", t => `ck-dropdown__panel_${t}`), e.if("isVisible", "ck-dropdown__panel-visible")]},
                    children: this.children,
                    on: {selectstart: e.to(t => t.preventDefault())}
                })
            }

            focus() {
                this.children.length && this.children.first.focus()
            }

            focusLast() {
                if (this.children.length) {
                    const t = this.children.last;
                    "function" == typeof t.focusLast ? t.focusLast() : t.focus()
                }
            }
        }

        i(25);

        function Jl({element: t, target: e, positions: i, limiter: n, fitInViewport: o}) {
            q(e) && (e = e()), q(n) && (n = n());
            const r = function (t) {
                for (; t && "html" != t.tagName.toLowerCase();) {
                    if ("static" != tr.window.getComputedStyle(t).position) return t;
                    t = t.parentElement
                }
                return null
            }(t.parentElement), s = new xs(t), a = new xs(e);
            let c, l;
            if (n || o) {
                const t = n && new xs(n).getVisible(), e = o && new xs(tr.window);
                [l, c] = function (t, e, i, n, o) {
                    let r, s, a = 0, c = 0;
                    const l = i.getArea();
                    return t.some(t => {
                        const [d, h] = Zl(t, e, i);
                        let u, f;
                        if (n) if (o) {
                            const t = n.getIntersection(o);
                            u = t ? t.getIntersectionArea(h) : 0
                        } else u = n.getIntersectionArea(h);

                        function g() {
                            c = f, a = u, r = h, s = d
                        }

                        return o && (f = o.getIntersectionArea(h)), o && !n ? f > c && g() : !o && n ? u > a && g() : f > c && u >= a ? g() : f >= c && u > a && g(), u === l
                    }), r ? [s, r] : null
                }(i, a, s, t, e) || Zl(i[0], a, s)
            } else [l, c] = Zl(i[0], a, s);
            let {left: d, top: h} = Xl(c);
            if (r) {
                const t = Xl(new xs(r)), e = vs(r);
                d -= t.left, h -= t.top, d += r.scrollLeft, h += r.scrollTop, d -= e.left, h -= e.top
            }
            return {left: d, top: h, name: l}
        }

        function Zl(t, e, i) {
            const {left: n, top: o, name: r} = t(e, i);
            return [r, i.clone().moveTo(n, o)]
        }

        function Xl({left: t, top: e}) {
            const {scrollX: i, scrollY: n} = tr.window;
            return {left: t + i, top: e + n}
        }

        class td extends Ll {
            constructor(t, e, i) {
                super(t);
                const n = this.bindTemplate;
                this.buttonView = e, this.panelView = i, this.set("isOpen", !1), this.set("isEnabled", !0), this.set("class"), this.set("panelPosition", "auto"), this.focusTracker = new al, this.keystrokes = new Zc, this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-dropdown", n.to("class"), n.if("isEnabled", "ck-disabled", t => !t)]},
                    children: [e, i]
                }), e.extendTemplate({attributes: {class: ["ck-dropdown__button"]}})
            }

            render() {
                super.render(), this.listenTo(this.buttonView, "open", () => {
                    this.isOpen = !this.isOpen
                }), this.panelView.bind("isVisible").to(this, "isOpen"), this.on("change:isOpen", () => {
                    this.isOpen && ("auto" === this.panelPosition ? this.panelView.position = td._getOptimalPosition({
                        element: this.panelView.element,
                        target: this.buttonView.element,
                        fitInViewport: !0,
                        positions: this._panelPositions
                    }).name : this.panelView.position = this.panelPosition)
                }), this.keystrokes.listenTo(this.element), this.focusTracker.add(this.element);
                const t = (t, e) => {
                    this.isOpen && (this.buttonView.focus(), this.isOpen = !1, e())
                };
                this.keystrokes.set("arrowdown", (t, e) => {
                    this.buttonView.isEnabled && !this.isOpen && (this.isOpen = !0, e())
                }), this.keystrokes.set("arrowright", (t, e) => {
                    this.isOpen && e()
                }), this.keystrokes.set("arrowleft", t), this.keystrokes.set("esc", t)
            }

            focus() {
                this.buttonView.focus()
            }

            get _panelPositions() {
                const {southEast: t, southWest: e, northEast: i, northWest: n} = td.defaultPanelPositions;
                return "ltr" === this.locale.uiLanguageDirection ? [t, e, i, n] : [e, t, n, i]
            }
        }

        td.defaultPanelPositions = {
            southEast: t => ({top: t.bottom, left: t.left, name: "se"}),
            southWest: (t, e) => ({top: t.bottom, left: t.left - e.width + t.width, name: "sw"}),
            northEast: (t, e) => ({top: t.top - e.height, left: t.left, name: "ne"}),
            northWest: (t, e) => ({top: t.bottom - e.height, left: t.left - e.width + t.width, name: "nw"})
        }, td._getOptimalPosition = Jl;
        i(27);

        class ed extends Ll {
            constructor() {
                super();
                const t = this.bindTemplate;
                this.set("content", ""), this.set("viewBox", "0 0 20 20"), this.set("fillColor", ""), this.setTemplate({
                    tag: "svg",
                    ns: "http://www.w3.org/2000/svg",
                    attributes: {class: ["ck", "ck-icon"], viewBox: t.to("viewBox")}
                })
            }

            render() {
                super.render(), this._updateXMLContent(), this._colorFillPaths(), this.on("change:content", () => {
                    this._updateXMLContent(), this._colorFillPaths()
                }), this.on("change:fillColor", () => {
                    this._colorFillPaths()
                })
            }

            _updateXMLContent() {
                if (this.content) {
                    const t = (new DOMParser).parseFromString(this.content.trim(), "image/svg+xml").querySelector("svg"),
                        e = t.getAttribute("viewBox");
                    for (e && (this.viewBox = e), this.element.innerHTML = ""; t.childNodes.length > 0;) this.element.appendChild(t.childNodes[0])
                }
            }

            _colorFillPaths() {
                this.fillColor && this.element.querySelectorAll(".ck-icon__fill").forEach(t => {
                    t.style.fill = this.fillColor
                })
            }
        }

        i(29);

        class id extends Ll {
            constructor(t) {
                super(t), this.set("text", ""), this.set("position", "s");
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: "span",
                    attributes: {class: ["ck", "ck-tooltip", e.to("position", t => "ck-tooltip_" + t), e.if("text", "ck-hidden", t => !t.trim())]},
                    children: [{
                        tag: "span",
                        attributes: {class: ["ck", "ck-tooltip__text"]},
                        children: [{text: e.to("text")}]
                    }]
                })
            }
        }

        i(31);

        class nd extends Ll {
            constructor(t) {
                super(t);
                const e = this.bindTemplate, i = Ki();
                this.set("class"), this.set("labelStyle"), this.set("icon"), this.set("isEnabled", !0), this.set("isOn", !1), this.set("isVisible", !0), this.set("isToggleable", !1), this.set("keystroke"), this.set("label"), this.set("tabindex", -1), this.set("tooltip"), this.set("tooltipPosition", "s"), this.set("type", "button"), this.set("withText", !1), this.children = this.createCollection(), this.tooltipView = this._createTooltipView(), this.labelView = this._createLabelView(i), this.iconView = new ed, this.iconView.extendTemplate({attributes: {class: "ck-button__icon"}}), this.bind("_tooltipString").to(this, "tooltip", this, "label", this, "keystroke", this._getTooltipString.bind(this)), this.setTemplate({
                    tag: "button",
                    attributes: {
                        class: ["ck", "ck-button", e.to("class"), e.if("isEnabled", "ck-disabled", t => !t), e.if("isVisible", "ck-hidden", t => !t), e.to("isOn", t => t ? "ck-on" : "ck-off"), e.if("withText", "ck-button_with-text")],
                        type: e.to("type", t => t || "button"),
                        tabindex: e.to("tabindex"),
                        "aria-labelledby": `ck-editor__aria-label_${i}`,
                        "aria-disabled": e.if("isEnabled", !0, t => !t),
                        "aria-pressed": e.to("isOn", t => !!this.isToggleable && String(t))
                    },
                    children: this.children,
                    on: {
                        mousedown: e.to(t => {
                            t.preventDefault()
                        }), click: e.to(t => {
                            this.isEnabled ? this.fire("execute") : t.preventDefault()
                        })
                    }
                })
            }

            render() {
                super.render(), this.icon && (this.iconView.bind("content").to(this, "icon"), this.children.add(this.iconView)), this.children.add(this.tooltipView), this.children.add(this.labelView)
            }

            focus() {
                this.element.focus()
            }

            _createTooltipView() {
                const t = new id;
                return t.bind("text").to(this, "_tooltipString"), t.bind("position").to(this, "tooltipPosition"), t
            }

            _createLabelView(t) {
                const e = new Ll, i = this.bindTemplate;
                return e.setTemplate({
                    tag: "span",
                    attributes: {
                        class: ["ck", "ck-button__label"],
                        style: i.to("labelStyle"),
                        id: `ck-editor__aria-label_${t}`
                    },
                    children: [{text: this.bindTemplate.to("label")}]
                }), e
            }

            _getTooltipString(t, e, i) {
                return t ? "string" == typeof t ? t : (i && (i = function (t) {
                    return go.isMac ? _o(t).map(t => po[t.toLowerCase()] || t).reduce((t, e) => t.slice(-1) in mo ? t + e : t + "+" + e) : t
                }(i)), t instanceof Function ? t(e, i) : `${e}${i ? ` (${i})` : ""}`) : ""
            }
        }

        var od = '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';

        class rd extends nd {
            constructor(t) {
                super(t), this.arrowView = this._createArrowView(), this.extendTemplate({attributes: {"aria-haspopup": !0}}), this.delegate("execute").to(this, "open")
            }

            render() {
                super.render(), this.children.add(this.arrowView)
            }

            _createArrowView() {
                const t = new ed;
                return t.content = od, t.extendTemplate({attributes: {class: "ck-dropdown__arrow"}}), t
            }
        }

        i(33);

        class sd extends Ll {
            constructor() {
                super(), this.items = this.createCollection(), this.focusTracker = new al, this.keystrokes = new Zc, this._focusCycler = new ql({
                    focusables: this.items,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: "arrowup", focusNext: "arrowdown"}
                }), this.setTemplate({
                    tag: "ul",
                    attributes: {class: ["ck", "ck-reset", "ck-list"]},
                    children: this.items
                })
            }

            render() {
                super.render();
                for (const t of this.items) this.focusTracker.add(t.element);
                this.items.on("add", (t, e) => {
                    this.focusTracker.add(e.element)
                }), this.items.on("remove", (t, e) => {
                    this.focusTracker.remove(e.element)
                }), this.keystrokes.listenTo(this.element)
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            focusLast() {
                this._focusCycler.focusLast()
            }
        }

        class ad extends Ll {
            constructor(t) {
                super(t), this.children = this.createCollection(), this.setTemplate({
                    tag: "li",
                    attributes: {class: ["ck", "ck-list__item"]},
                    children: this.children
                })
            }

            focus() {
                this.children.first.focus()
            }
        }

        class cd extends Ll {
            constructor(t) {
                super(t), this.setTemplate({tag: "li", attributes: {class: ["ck", "ck-list__separator"]}})
            }
        }

        i(35);

        class ld extends nd {
            constructor(t) {
                super(t), this.isToggleable = !0, this.toggleSwitchView = this._createToggleView(), this.extendTemplate({attributes: {class: "ck-switchbutton"}})
            }

            render() {
                super.render(), this.children.add(this.toggleSwitchView)
            }

            _createToggleView() {
                const t = new Ll;
                return t.setTemplate({
                    tag: "span",
                    attributes: {class: ["ck", "ck-button__toggle"]},
                    children: [{tag: "span", attributes: {class: ["ck", "ck-button__toggle__inner"]}}]
                }), t
            }
        }

        function dd({emitter: t, activator: e, callback: i, contextElements: n}) {
            t.listenTo(document, "mousedown", (t, {target: o}) => {
                if (e()) {
                    for (const t of n) if (t.contains(o)) return;
                    i()
                }
            })
        }

        i(37), i(39);

        function hd(t, e = rd) {
            const i = new e(t), n = new Kl(t), o = new td(t, i, n);
            return i.bind("isEnabled").to(o), i instanceof rd ? i.bind("isOn").to(o, "isOpen") : i.arrowView.bind("isOn").to(o, "isOpen"), function (t) {
                (function (t) {
                    t.on("render", () => {
                        dd({
                            emitter: t, activator: () => t.isOpen, callback: () => {
                                t.isOpen = !1
                            }, contextElements: [t.element]
                        })
                    })
                })(t), function (t) {
                    t.on("execute", e => {
                        e.source instanceof ld || (t.isOpen = !1)
                    })
                }(t), function (t) {
                    t.keystrokes.set("arrowdown", (e, i) => {
                        t.isOpen && (t.panelView.focus(), i())
                    }), t.keystrokes.set("arrowup", (e, i) => {
                        t.isOpen && (t.panelView.focusLast(), i())
                    })
                }(t)
            }(o), o
        }

        function ud(t, e) {
            const i = t.locale, n = i.t, o = t.toolbarView = new md(i);
            o.set("ariaLabel", n("bv")), t.extendTemplate({attributes: {class: ["ck-toolbar-dropdown"]}}), e.map(t => o.items.add(t)), t.panelView.children.add(o), o.items.delegate("execute").to(t)
        }

        function fd(t, e) {
            const i = t.locale, n = t.listView = new sd(i);
            n.items.bindTo(e).using(({type: t, model: e}) => {
                if ("separator" === t) return new cd(i);
                if ("button" === t || "switchbutton" === t) {
                    const n = new ad(i);
                    let o;
                    return (o = "button" === t ? new nd(i) : new ld(i)).bind(...Object.keys(e)).to(e), o.delegate("execute").to(n), n.children.add(o), n
                }
            }), t.panelView.children.add(n), n.items.delegate("execute").to(t)
        }

        var gd = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>\n';
        i(41);

        class md extends Ll {
            constructor(t, e) {
                super(t);
                const i = this.bindTemplate, n = this.t;
                this.options = e || {}, this.set("ariaLabel", n("bz")), this.items = this.createCollection(), this.focusTracker = new al, this.keystrokes = new Zc, this.set("class"), this.itemsView = new pd(t), this.children = this.createCollection(), this.children.add(this.itemsView), this.focusables = this.createCollection(), this._focusCycler = new ql({
                    focusables: this.focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: ["arrowleft", "arrowup"], focusNext: ["arrowright", "arrowdown"]}
                }), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-toolbar", i.to("class")],
                        role: "toolbar",
                        "aria-label": i.to("ariaLabel")
                    },
                    children: this.children,
                    on: {
                        mousedown: function (t) {
                            return t.bindTemplate.to(e => {
                                e.target === t.element && e.preventDefault()
                            })
                        }(this)
                    }
                }), this._behavior = this.options.shouldGroupWhenFull ? new wd(this) : new bd(this)
            }

            render() {
                super.render();
                for (const t of this.items) this.focusTracker.add(t.element);
                this.items.on("add", (t, e) => {
                    this.focusTracker.add(e.element)
                }), this.items.on("remove", (t, e) => {
                    this.focusTracker.remove(e.element)
                }), this.keystrokes.listenTo(this.element), this._behavior.render(this)
            }

            destroy() {
                return this._behavior.destroy(), super.destroy()
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            focusLast() {
                this._focusCycler.focusLast()
            }

            fillFromConfig(t, e) {
                t.map(t => {
                    "|" == t ? this.items.add(new Yl) : e.has(t) ? this.items.add(e.create(t)) : console.warn(Object(Yi.a)("toolbarview-item-unavailable: The requested toolbar item is unavailable."), {name: t})
                })
            }
        }

        class pd extends Ll {
            constructor(t) {
                super(t), this.children = this.createCollection(), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-toolbar__items"]},
                    children: this.children
                })
            }
        }

        class bd {
            constructor(t) {
                const e = t.bindTemplate;
                t.set("isVertical", !1), t.itemsView.children.bindTo(t.items).using(t => t), t.focusables.bindTo(t.items).using(t => t), t.extendTemplate({attributes: {class: [e.if("isVertical", "ck-toolbar_vertical")]}})
            }

            render() {
            }

            destroy() {
            }
        }

        class wd {
            constructor(t) {
                this.viewChildren = t.children, this.viewFocusables = t.focusables, this.viewItemsView = t.itemsView, this.viewFocusTracker = t.focusTracker, this.viewLocale = t.locale, this.ungroupedItems = t.createCollection(), this.groupedItems = t.createCollection(), this.groupedItemsDropdown = this._createGroupedItemsDropdown(), this.resizeObserver = null, this.cachedPadding = null, t.itemsView.children.bindTo(this.ungroupedItems).using(t => t), this.ungroupedItems.on("add", this._updateFocusCycleableItems.bind(this)), this.ungroupedItems.on("remove", this._updateFocusCycleableItems.bind(this)), t.children.on("add", this._updateFocusCycleableItems.bind(this)), t.children.on("remove", this._updateFocusCycleableItems.bind(this)), t.items.on("add", (t, e, i) => {
                    i > this.ungroupedItems.length ? this.groupedItems.add(e, i - this.ungroupedItems.length) : this.ungroupedItems.add(e, i), this._updateGrouping()
                }), t.items.on("remove", (t, e, i) => {
                    i > this.ungroupedItems.length ? this.groupedItems.remove(e) : this.ungroupedItems.remove(e), this._updateGrouping()
                }), t.extendTemplate({attributes: {class: ["ck-toolbar_grouping"]}})
            }

            render(t) {
                this.viewElement = t.element, this._enableGroupingOnResize()
            }

            destroy() {
                this.groupedItemsDropdown.destroy(), this.resizeObserver.disconnect()
            }

            _updateGrouping() {
                if (!this.viewElement.ownerDocument.body.contains(this.viewElement)) return;
                let t;
                for (; this._areItemsOverflowing;) this._groupLastItem(), t = !0;
                if (!t && this.groupedItems.length) {
                    for (; this.groupedItems.length && !this._areItemsOverflowing;) this._ungroupFirstItem();
                    this._areItemsOverflowing && this._groupLastItem()
                }
            }

            get _areItemsOverflowing() {
                if (!this.ungroupedItems.length) return !1;
                const t = this.viewElement, e = this.viewLocale.uiLanguageDirection, i = new xs(t.lastChild),
                    n = new xs(t);
                if (!this.cachedPadding) {
                    const i = tr.window.getComputedStyle(t), n = "ltr" === e ? "paddingRight" : "paddingLeft";
                    this.cachedPadding = Number.parseInt(i[n])
                }
                return "ltr" === e ? i.right > n.right - this.cachedPadding : i.left < n.left + this.cachedPadding
            }

            _enableGroupingOnResize() {
                let t;
                this.resizeObserver = function (t) {
                    return "function" == typeof tr.window.ResizeObserver ? new tr.window.ResizeObserver(t) : new Ql(t)
                }(([e]) => {
                    t && t === e.contentRect.width || (this._updateGrouping(), t = e.contentRect.width)
                }), this.resizeObserver.observe(this.viewElement), this._updateGrouping()
            }

            _groupLastItem() {
                this.groupedItems.length || (this.viewChildren.add(new Yl), this.viewChildren.add(this.groupedItemsDropdown), this.viewFocusTracker.add(this.groupedItemsDropdown.element)), this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last), 0)
            }

            _ungroupFirstItem() {
                this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)), this.groupedItems.length || (this.viewChildren.remove(this.groupedItemsDropdown), this.viewChildren.remove(this.viewChildren.last), this.viewFocusTracker.remove(this.groupedItemsDropdown.element))
            }

            _createGroupedItemsDropdown() {
                const t = this.viewLocale, e = t.t, i = hd(t);
                return i.class = "ck-toolbar__grouped-dropdown", i.panelPosition = "ltr" === t.uiLanguageDirection ? "sw" : "se", ud(i, []), i.buttonView.set({
                    label: e("ca"),
                    tooltip: !0,
                    icon: gd
                }), i.toolbarView.items.bindTo(this.groupedItems).using(t => t), i
            }

            _updateFocusCycleableItems() {
                this.viewFocusables.clear(), this.ungroupedItems.map(t => {
                    this.viewFocusables.add(t)
                }), this.groupedItems.length && this.viewFocusables.add(this.groupedItemsDropdown)
            }
        }

        i(43);

        class kd extends Vl {
            constructor(t, e) {
                super(t), this.stickyPanel = new Wl(t), this.toolbar = new md(t, {shouldGroupWhenFull: !0}), this.editable = new Fl(t, e)
            }

            render() {
                super.render(), this.stickyPanel.content.add(this.toolbar), this.top.add(this.stickyPanel), this.main.add(this.editable)
            }
        }

        class _d extends tl {
            constructor(t, e) {
                super(e), Wi(t) && (this.sourceElement = t), this.data.processor = new ol, this.model.document.createRoot(), this.ui = new ml(this, new kd(this.locale, this.editing.view)), function (t) {
                    if (!q(t.updateSourceElement)) throw new Yi.b("attachtoform-missing-elementapi-interface: Editor passed to attachToForm() must implement ElementApi.", t);
                    const e = t.sourceElement;
                    if (e && "textarea" === e.tagName.toLowerCase() && e.form) {
                        let i;
                        const n = e.form, o = () => t.updateSourceElement();
                        q(n.submit) && (i = n.submit, n.submit = (() => {
                            o(), i.apply(n)
                        })), n.addEventListener("submit", o), t.on("destroy", () => {
                            n.removeEventListener("submit", o), i && (n.submit = i)
                        })
                    }
                }(this)
            }

            destroy() {
                return this.sourceElement && this.updateSourceElement(), this.ui.destroy(), super.destroy()
            }

            static create(t, e = {}) {
                return new Promise(i => {
                    const n = new this(t, e);
                    i(n.initPlugins().then(() => n.ui.init(Wi(t) ? t : null)).then(() => {
                        if (!Wi(t) && e.initialData) throw new Yi.b("editor-create-initial-data: The config.initialData option cannot be used together with initial data passed in Editor.create().", null);
                        const i = e.initialData || function (t) {
                            return Wi(t) ? function (t) {
                                return t instanceof HTMLTextAreaElement ? t.value : t.innerHTML
                            }(t) : t
                        }(t);
                        return n.data.init(i)
                    }).then(() => n.fire("ready")).then(() => n))
                })
            }
        }

        cn(_d, el), cn(_d, il);

        class vd {
            constructor(t) {
                this.editor = t
            }

            destroy() {
                this.stopListening()
            }
        }

        cn(vd, Fn);

        class yd {
            constructor(t) {
                this.files = function (t) {
                    const e = t.files ? Array.from(t.files) : [], i = t.items ? Array.from(t.items) : [];
                    if (e.length) return e;
                    return i.filter(t => "file" === t.kind).map(t => t.getAsFile())
                }(t), this._native = t
            }

            get types() {
                return this._native.types
            }

            getData(t) {
                return this._native.getData(t)
            }

            setData(t, e) {
                this._native.setData(t, e)
            }
        }

        class xd extends Xr {
            constructor(t) {
                super(t);
                const e = this.document;

                function i(t, i) {
                    i.preventDefault();
                    const n = i.dropRange ? [i.dropRange] : Array.from(e.selection.getRanges()),
                        o = new Qi(e, "clipboardInput");
                    e.fire(o, {dataTransfer: i.dataTransfer, targetRanges: n}), o.stop.called && i.stopPropagation()
                }

                this.domEventType = ["paste", "copy", "cut", "drop", "dragover"], this.listenTo(e, "paste", i, {priority: "low"}), this.listenTo(e, "drop", i, {priority: "low"})
            }

            onDomEvent(t) {
                const e = {dataTransfer: new yd(t.clipboardData ? t.clipboardData : t.dataTransfer)};
                "drop" == t.type && (e.dropRange = function (t, e) {
                    const i = e.target.ownerDocument, n = e.clientX, o = e.clientY;
                    let r;
                    i.caretRangeFromPoint && i.caretRangeFromPoint(n, o) ? r = i.caretRangeFromPoint(n, o) : e.rangeParent && ((r = i.createRange()).setStart(e.rangeParent, e.rangeOffset), r.collapse(!0));
                    return r ? t.domConverter.domRangeToView(r) : t.document.selection.getFirstRange()
                }(this.view, t)), this.fire(t.type, t, e)
            }
        }

        const Ad = ["figcaption", "li"];

        class Td extends vd {
            static get pluginName() {
                return "Clipboard"
            }

            init() {
                const t = this.editor, e = t.model.document, i = t.editing.view, n = i.document;

                function o(i, o) {
                    const r = o.dataTransfer;
                    o.preventDefault();
                    const s = t.data.toView(t.model.getSelectedContent(e.selection));
                    n.fire("clipboardOutput", {dataTransfer: r, content: s, method: i.name})
                }

                this._htmlDataProcessor = new ol, i.addObserver(xd), this.listenTo(n, "clipboardInput", e => {
                    t.isReadOnly && e.stop()
                }, {priority: "highest"}), this.listenTo(n, "clipboardInput", (t, e) => {
                    const n = e.dataTransfer;
                    let o = "";
                    n.getData("text/html") ? o = function (t) {
                        return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g, (t, e) => 1 == e.length ? " " : e)
                    }(n.getData("text/html")) : n.getData("text/plain") && (o = function (t) {
                        return (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "</p><p>").replace(/^\s/, "&nbsp;").replace(/\s$/, "&nbsp;").replace(/\s\s/g, " &nbsp;")).indexOf("</p><p>") > -1 && (t = `<p>${t}</p>`), t
                    }(n.getData("text/plain"))), o = this._htmlDataProcessor.toView(o), this.fire("inputTransformation", {
                        content: o,
                        dataTransfer: n
                    }), i.scrollToTheSelection()
                }, {priority: "low"}), this.listenTo(this, "inputTransformation", (t, e) => {
                    if (!e.content.isEmpty) {
                        const t = this.editor.data, i = this.editor.model, n = t.toModel(e.content, "$clipboardHolder");
                        if (0 == n.childCount) return;
                        i.insertContent(n)
                    }
                }, {priority: "low"}), this.listenTo(n, "copy", o, {priority: "low"}), this.listenTo(n, "cut", (e, i) => {
                    t.isReadOnly ? i.preventDefault() : o(e, i)
                }, {priority: "low"}), this.listenTo(n, "clipboardOutput", (i, n) => {
                    n.content.isEmpty || (n.dataTransfer.setData("text/html", this._htmlDataProcessor.toData(n.content)), n.dataTransfer.setData("text/plain", function t(e) {
                        let i = "";
                        if (e.is("text") || e.is("textProxy")) i = e.data; else if (e.is("img") && e.hasAttribute("alt")) i = e.getAttribute("alt"); else {
                            let n = null;
                            for (const o of e.getChildren()) {
                                const e = t(o);
                                n && (n.is("containerElement") || o.is("containerElement")) && (Ad.includes(n.name) || Ad.includes(o.name) ? i += "\n" : i += "\n\n"), i += e, n = o
                            }
                        }
                        return i
                    }(n.content))), "cut" == n.method && t.model.deleteContent(e.selection)
                }, {priority: "low"})
            }
        }

        class Cd {
            constructor(t) {
                this.editor = t, this.set("value", void 0), this.set("isEnabled", !1), this._disableStack = new Set, this.decorate("execute"), this.listenTo(this.editor.model.document, "change", () => {
                    this.refresh()
                }), this.on("execute", t => {
                    this.isEnabled || t.stop()
                }, {priority: "high"}), this.listenTo(t, "change:isReadOnly", (t, e, i) => {
                    i ? this.forceDisabled("readOnlyMode") : this.clearForceDisabled("readOnlyMode")
                })
            }

            refresh() {
                this.isEnabled = !0
            }

            forceDisabled(t) {
                this._disableStack.add(t), 1 == this._disableStack.size && (this.on("set:isEnabled", Pd, {priority: "highest"}), this.isEnabled = !1)
            }

            clearForceDisabled(t) {
                this._disableStack.delete(t), 0 == this._disableStack.size && (this.off("set:isEnabled", Pd), this.refresh())
            }

            execute() {
            }

            destroy() {
                this.stopListening()
            }
        }

        function Pd(t) {
            t.return = !1, t.stop()
        }

        function* Sd(t, e) {
            for (const i of e) i && t.getAttributeProperties(i[0]).copyOnEnter && (yield i)
        }

        cn(Cd, Fn);

        class Ed extends Cd {
            execute() {
                const t = this.editor.model, e = t.document;
                t.change(i => {
                    !function (t, e, i, n) {
                        const o = i.isCollapsed, r = i.getFirstRange(), s = r.start.parent, a = r.end.parent;
                        if (n.isLimit(s) || n.isLimit(a)) return void (o || s != a || t.deleteContent(i));
                        if (o) {
                            const t = Sd(e.model.schema, i.getAttributes());
                            Md(e, r.start), e.setSelectionAttribute(t)
                        } else {
                            const n = !(r.start.isAtStart && r.end.isAtEnd), o = s == a;
                            t.deleteContent(i, {leaveUnmerged: n}), n && (o ? Md(e, i.focus) : e.setSelection(a, 0))
                        }
                    }(this.editor.model, i, e.selection, t.schema), this.fire("afterExecute", {writer: i})
                })
            }
        }

        function Md(t, e) {
            t.split(e), t.setSelection(e.parent.nextSibling, 0)
        }

        class Id extends hr {
            constructor(t) {
                super(t);
                const e = this.document;
                e.on("keydown", (t, i) => {
                    if (this.isEnabled && i.keyCode == bo.enter) {
                        let n;
                        e.once("enter", t => n = t, {priority: "highest"}), e.fire("enter", new Zr(e, i.domEvent, {isSoft: i.shiftKey})), n && n.stop.called && t.stop()
                    }
                })
            }

            observe() {
            }
        }

        class Nd extends vd {
            static get pluginName() {
                return "Enter"
            }

            init() {
                const t = this.editor, e = t.editing.view, i = e.document;
                e.addObserver(Id), t.commands.add("enter", new Ed(t)), this.listenTo(i, "enter", (i, n) => {
                    n.preventDefault(), n.isSoft || (t.execute("enter"), e.scrollToTheSelection())
                }, {priority: "low"})
            }
        }

        class Od extends Cd {
            execute() {
                const t = this.editor.model, e = t.document;
                t.change(i => {
                    !function (t, e, i) {
                        const n = i.isCollapsed, o = i.getFirstRange(), r = o.start.parent, s = o.end.parent,
                            a = r == s;
                        if (n) {
                            const n = Sd(t.schema, i.getAttributes());
                            Rd(e, o.end), e.removeSelectionAttribute(i.getAttributeKeys()), e.setSelectionAttribute(n)
                        } else {
                            const n = !(o.start.isAtStart && o.end.isAtEnd);
                            t.deleteContent(i, {leaveUnmerged: n}), a ? Rd(e, i.focus) : n && e.setSelection(s, 0)
                        }
                    }(t, i, e.selection), this.fire("afterExecute", {writer: i})
                })
            }

            refresh() {
                const t = this.editor.model, e = t.document;
                this.isEnabled = function (t, e) {
                    if (e.rangeCount > 1) return !1;
                    const i = e.anchor;
                    if (!i || !t.checkChild(i, "softBreak")) return !1;
                    const n = e.getFirstRange(), o = n.start.parent, r = n.end.parent;
                    if ((Dd(o, t) || Dd(r, t)) && o !== r) return !1;
                    return !0
                }(t.schema, e.selection)
            }
        }

        function Rd(t, e) {
            const i = t.createElement("softBreak");
            t.insert(i, e), t.setSelection(i, "after")
        }

        function Dd(t, e) {
            return !t.is("rootElement") && (e.isLimit(t) || Dd(t.parent, e))
        }

        class Ld extends vd {
            static get pluginName() {
                return "ShiftEnter"
            }

            init() {
                const t = this.editor, e = t.model.schema, i = t.conversion, n = t.editing.view, o = n.document;
                e.register("softBreak", {
                    allowWhere: "$text",
                    isInline: !0
                }), i.for("upcast").elementToElement({
                    model: "softBreak",
                    view: "br"
                }), i.for("downcast").elementToElement({
                    model: "softBreak",
                    view: (t, e) => e.createEmptyElement("br")
                }), n.addObserver(Id), t.commands.add("shiftEnter", new Od(t)), this.listenTo(o, "enter", (e, i) => {
                    i.preventDefault(), i.isSoft && (t.execute("shiftEnter"), n.scrollToTheSelection())
                }, {priority: "low"})
            }
        }

        class jd {
            constructor(t, e = 20) {
                this.model = t, this.size = 0, this.limit = e, this.isLocked = !1, this._changeCallback = ((t, e) => {
                    "transparent" != e.type && e !== this._batch && this._reset(!0)
                }), this._selectionChangeCallback = (() => {
                    this._reset()
                }), this.model.document.on("change", this._changeCallback), this.model.document.selection.on("change:range", this._selectionChangeCallback), this.model.document.selection.on("change:attribute", this._selectionChangeCallback)
            }

            get batch() {
                return this._batch || (this._batch = this.model.createBatch()), this._batch
            }

            input(t) {
                this.size += t, this.size >= this.limit && this._reset(!0)
            }

            lock() {
                this.isLocked = !0
            }

            unlock() {
                this.isLocked = !1
            }

            destroy() {
                this.model.document.off("change", this._changeCallback), this.model.document.selection.off("change:range", this._selectionChangeCallback), this.model.document.selection.off("change:attribute", this._selectionChangeCallback)
            }

            _reset(t) {
                this.isLocked && !t || (this._batch = null, this.size = 0)
            }
        }

        class zd extends Cd {
            constructor(t, e) {
                super(t), this._buffer = new jd(t.model, e), this._batches = new WeakSet
            }

            get buffer() {
                return this._buffer
            }

            destroy() {
                super.destroy(), this._buffer.destroy()
            }

            execute(t = {}) {
                const e = this.editor.model, i = e.document, n = t.text || "", o = n.length,
                    r = t.range || i.selection.getFirstRange(), s = t.resultRange;
                e.enqueueChange(this._buffer.batch, t => {
                    const a = r.isCollapsed;
                    this._buffer.lock(), e.deleteContent(e.createSelection(r)), n && e.insertContent(t.createText(n, i.selection.getAttributes()), r.start), s ? t.setSelection(s) : a && t.setSelection(r.start.getShiftedBy(o)), this._buffer.unlock(), this._buffer.input(o), this._batches.add(this._buffer.batch)
                })
            }
        }

        function Vd(t) {
            let e = null;
            const i = t.model, n = t.editing.view, o = t.commands.get("input");

            function r(t) {
                const r = i.document, a = n.document.isComposing, c = e && e.isEqual(r.selection);
                e = null, o.isEnabled && (function (t) {
                    if (t.ctrlKey) return !0;
                    return Bd.includes(t.keyCode)
                }(t) || r.selection.isCollapsed || a && 229 === t.keyCode || !a && 229 === t.keyCode && c || s())
            }

            function s() {
                const t = o.buffer;
                t.lock(), i.enqueueChange(t.batch, () => {
                    i.deleteContent(i.document.selection)
                }), t.unlock()
            }

            go.isAndroid ? n.document.on("beforeinput", (t, e) => r(e), {priority: "lowest"}) : n.document.on("keydown", (t, e) => r(e), {priority: "lowest"}), n.document.on("compositionstart", function () {
                const t = i.document, e = 1 !== t.selection.rangeCount || t.selection.getFirstRange().isFlat;
                if (t.selection.isCollapsed || e) return;
                s()
            }, {priority: "lowest"}), n.document.on("compositionend", () => {
                e = i.createSelection(i.document.selection)
            }, {priority: "lowest"})
        }

        const Bd = [wo("arrowUp"), wo("arrowRight"), wo("arrowDown"), wo("arrowLeft"), 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 45, 91, 93, 144, 145, 173, 174, 175, 176, 177, 178, 179, 255];
        for (let t = 112; t <= 135; t++) Bd.push(t);

        function Fd(t) {
            if (t.newChildren.length - t.oldChildren.length != 1) return;
            const e = function (t, e) {
                const i = [];
                let n, o = 0;
                return t.forEach(t => {
                    "equal" == t ? (r(), o++) : "insert" == t ? (s("insert") ? n.values.push(e[o]) : (r(), n = {
                        type: "insert",
                        index: o,
                        values: [e[o]]
                    }), o++) : s("delete") ? n.howMany++ : (r(), n = {type: "delete", index: o, howMany: 1})
                }), r(), i;

                function r() {
                    n && (i.push(n), n = null)
                }

                function s(t) {
                    return n && n.type == t
                }
            }(Yo(t.oldChildren, t.newChildren, Hd), t.newChildren);
            if (e.length > 1) return;
            const i = e[0];
            return i.values[0] && i.values[0].is("text") ? i : void 0
        }

        function Hd(t, e) {
            return t && t.is("text") && e && e.is("text") ? t.data === e.data : t === e
        }

        class Ud {
            constructor(t) {
                this.editor = t, this.editing = this.editor.editing
            }

            handle(t, e) {
                if (function (t) {
                    if (0 == t.length) return !1;
                    for (const e of t) if ("children" === e.type && !Fd(e)) return !0;
                    return !1
                }(t)) this._handleContainerChildrenMutations(t, e); else for (const i of t) this._handleTextMutation(i, e), this._handleTextNodeInsertion(i)
            }

            _handleContainerChildrenMutations(t, e) {
                const i = function (t) {
                    const e = t.map(t => t.node).reduce((t, e) => t.getCommonAncestor(e, {includeSelf: !0}));
                    if (!e) return;
                    return e.getAncestors({
                        includeSelf: !0,
                        parentFirst: !0
                    }).find(t => t.is("containerElement") || t.is("rootElement"))
                }(t);
                if (!i) return;
                const n = this.editor.editing.view.domConverter.mapViewToDom(i), o = new or,
                    r = this.editor.data.toModel(o.domToView(n)).getChild(0),
                    s = this.editor.editing.mapper.toModelElement(i);
                if (!s) return;
                const a = Array.from(r.getChildren()), c = Array.from(s.getChildren()), l = a[a.length - 1],
                    d = c[c.length - 1];
                l && l.is("softBreak") && d && !d.is("softBreak") && a.pop();
                const h = this.editor.model.schema;
                if (!Wd(a, h) || !Wd(c, h)) return;
                const u = a.map(t => t.is("text") ? t.data : "@").join("").replace(/\u00A0/g, " "),
                    f = c.map(t => t.is("text") ? t.data : "@").join("").replace(/\u00A0/g, " ");
                if (f === u) return;
                const g = Yo(f, u), {firstChangeAt: m, insertions: p, deletions: b} = qd(g);
                let w = null;
                e && (w = this.editing.mapper.toModelRange(e.getFirstRange()));
                const k = u.substr(m, p),
                    _ = this.editor.model.createRange(this.editor.model.createPositionAt(s, m), this.editor.model.createPositionAt(s, m + b));
                this.editor.execute("input", {text: k, range: _, resultRange: w})
            }

            _handleTextMutation(t, e) {
                if ("text" != t.type) return;
                const i = t.newText.replace(/\u00A0/g, " "), n = t.oldText.replace(/\u00A0/g, " ");
                if (n === i) return;
                const o = Yo(n, i), {firstChangeAt: r, insertions: s, deletions: a} = qd(o);
                let c = null;
                e && (c = this.editing.mapper.toModelRange(e.getFirstRange()));
                const l = this.editing.view.createPositionAt(t.node, r), d = this.editing.mapper.toModelPosition(l),
                    h = this.editor.model.createRange(d, d.getShiftedBy(a)), u = i.substr(r, s);
                this.editor.execute("input", {text: u, range: h, resultRange: c})
            }

            _handleTextNodeInsertion(t) {
                if ("children" != t.type) return;
                const e = Fd(t), i = this.editing.view.createPositionAt(t.node, e.index),
                    n = this.editing.mapper.toModelPosition(i), o = e.values[0].data;
                this.editor.execute("input", {text: o.replace(/\u00A0/g, " "), range: this.editor.model.createRange(n)})
            }
        }

        function Wd(t, e) {
            return t.every(t => e.isInline(t))
        }

        function qd(t) {
            let e = null, i = null;
            for (let n = 0; n < t.length; n++) {
                "equal" != t[n] && (e = null === e ? n : e, i = n)
            }
            let n = 0, o = 0;
            for (let r = e; r <= i; r++) "insert" != t[r] && n++, "delete" != t[r] && o++;
            return {insertions: o, deletions: n, firstChangeAt: e}
        }

        class $d extends vd {
            static get pluginName() {
                return "Input"
            }

            init() {
                const t = this.editor, e = new zd(t, t.config.get("typing.undoStep") || 20);
                t.commands.add("input", e), Vd(t), function (t) {
                    t.editing.view.document.on("mutations", (e, i, n) => {
                        new Ud(t).handle(i, n)
                    })
                }(t)
            }

            isInput(t) {
                return this.editor.commands.get("input")._batches.has(t)
            }
        }

        class Yd extends Cd {
            constructor(t, e) {
                super(t), this.direction = e, this._buffer = new jd(t.model, t.config.get("typing.undoStep"))
            }

            get buffer() {
                return this._buffer
            }

            execute(t = {}) {
                const e = this.editor.model, i = e.document;
                e.enqueueChange(this._buffer.batch, n => {
                    this._buffer.lock();
                    const o = n.createSelection(t.selection || i.selection), r = o.isCollapsed;
                    if (o.isCollapsed && e.modifySelection(o, {
                        direction: this.direction,
                        unit: t.unit
                    }), this._shouldEntireContentBeReplacedWithParagraph(t.sequence || 1)) return void this._replaceEntireContentWithParagraph(n);
                    if (o.isCollapsed) return;
                    let s = 0;
                    o.getFirstRange().getMinimalFlatRanges().forEach(t => {
                        s += eo(t.getWalker({singleCharacters: !0, ignoreElementEnd: !0, shallow: !0}))
                    }), e.deleteContent(o, {doNotResetEntireContent: r}), this._buffer.input(s), n.setSelection(o), this._buffer.unlock()
                })
            }

            _shouldEntireContentBeReplacedWithParagraph(t) {
                if (t > 1) return !1;
                const e = this.editor.model, i = e.document.selection, n = e.schema.getLimitElement(i);
                if (!(i.isCollapsed && i.containsEntireContent(n))) return !1;
                if (!e.schema.checkChild(n, "paragraph")) return !1;
                const o = n.getChild(0);
                return !o || "paragraph" !== o.name
            }

            _replaceEntireContentWithParagraph(t) {
                const e = this.editor.model, i = e.document.selection, n = e.schema.getLimitElement(i),
                    o = t.createElement("paragraph");
                t.remove(t.createRangeIn(n)), t.insert(o, n), t.setSelection(o, 0)
            }
        }

        class Gd extends hr {
            constructor(t) {
                super(t);
                const e = t.document;
                let i = 0;

                function n(t, i, n) {
                    let o;
                    e.once("delete", t => o = t, {priority: Number.POSITIVE_INFINITY}), e.fire("delete", new Zr(e, i, n)), o && o.stop.called && t.stop()
                }

                e.on("keyup", (t, e) => {
                    e.keyCode != bo.delete && e.keyCode != bo.backspace || (i = 0)
                }), e.on("keydown", (t, e) => {
                    const o = {};
                    if (e.keyCode == bo.delete) o.direction = "forward", o.unit = "character"; else {
                        if (e.keyCode != bo.backspace) return;
                        o.direction = "backward", o.unit = "codePoint"
                    }
                    const r = go.isMac ? e.altKey : e.ctrlKey;
                    o.unit = r ? "word" : o.unit, o.sequence = ++i, n(t, e.domEvent, o)
                }), go.isAndroid && e.on("beforeinput", (e, i) => {
                    if ("deleteContentBackward" != i.domEvent.inputType) return;
                    const o = {unit: "codepoint", direction: "backward", sequence: 1},
                        r = i.domTarget.ownerDocument.defaultView.getSelection();
                    r.anchorNode == r.focusNode && r.anchorOffset + 1 != r.focusOffset && (o.selectionToRemove = t.domConverter.domSelectionToView(r)), n(e, i.domEvent, o)
                })
            }

            observe() {
            }
        }

        class Qd extends vd {
            static get pluginName() {
                return "Delete"
            }

            init() {
                const t = this.editor, e = t.editing.view, i = e.document;
                if (e.addObserver(Gd), t.commands.add("forwardDelete", new Yd(t, "forward")), t.commands.add("delete", new Yd(t, "backward")), this.listenTo(i, "delete", (i, n) => {
                    const o = {unit: n.unit, sequence: n.sequence};
                    if (n.selectionToRemove) {
                        const e = t.model.createSelection(), i = [];
                        for (const e of n.selectionToRemove.getRanges()) i.push(t.editing.mapper.toModelRange(e));
                        e.setTo(i), o.selection = e
                    }
                    t.execute("forward" == n.direction ? "forwardDelete" : "delete", o), n.preventDefault(), e.scrollToTheSelection()
                }), go.isAndroid) {
                    let t = null;
                    this.listenTo(i, "delete", (e, i) => {
                        const n = i.domTarget.ownerDocument.defaultView.getSelection();
                        t = {
                            anchorNode: n.anchorNode,
                            anchorOffset: n.anchorOffset,
                            focusNode: n.focusNode,
                            focusOffset: n.focusOffset
                        }
                    }, {priority: "lowest"}), this.listenTo(i, "keyup", (e, i) => {
                        if (t) {
                            const e = i.domTarget.ownerDocument.defaultView.getSelection();
                            e.collapse(t.anchorNode, t.anchorOffset), e.extend(t.focusNode, t.focusOffset), t = null
                        }
                    })
                }
            }
        }

        class Kd extends vd {
            static get requires() {
                return [$d, Qd]
            }

            static get pluginName() {
                return "Typing"
            }
        }

        class Jd extends Za {
            get type() {
                return "noop"
            }

            clone() {
                return new Jd(this.baseVersion)
            }

            getReversed() {
                return new Jd(this.baseVersion + 1)
            }

            _execute() {
            }

            static get className() {
                return "NoOperation"
            }
        }

        const Zd = new Map;

        function Xd(t, e, i) {
            let n = Zd.get(t);
            n || (n = new Map, Zd.set(t, n)), n.set(e, i)
        }

        function th(t) {
            return [t]
        }

        function eh(t, e, i = {}) {
            const n = function (t, e) {
                const i = Zd.get(t);
                return i && i.has(e) ? i.get(e) : th
            }(t.constructor, e.constructor);
            try {
                return n(t = t.clone(), e, i)
            } catch (t) {
                throw t
            }
        }

        function ih(t, e, i) {
            t = t.slice(), e = e.slice();
            const n = new nh(i.document, i.useRelations, i.forceWeakRemove);
            n.setOriginalOperations(t), n.setOriginalOperations(e);
            const o = n.originalOperations;
            if (0 == t.length || 0 == e.length) return {operationsA: t, operationsB: e, originalOperations: o};
            const r = new WeakMap;
            for (const e of t) r.set(e, 0);
            const s = {
                nextBaseVersionA: t[t.length - 1].baseVersion + 1,
                nextBaseVersionB: e[e.length - 1].baseVersion + 1,
                originalOperationsACount: t.length,
                originalOperationsBCount: e.length
            };
            let a = 0;
            for (; a < t.length;) {
                const i = t[a], o = r.get(i);
                if (o == e.length) {
                    a++;
                    continue
                }
                const s = e[o], c = eh(i, s, n.getContext(i, s, !0)), l = eh(s, i, n.getContext(s, i, !1));
                n.updateRelation(i, s), n.setOriginalOperations(c, i), n.setOriginalOperations(l, s);
                for (const t of c) r.set(t, o + l.length);
                t.splice(a, 1, ...c), e.splice(o, 1, ...l)
            }
            if (i.padWithNoOps) {
                const i = t.length - s.originalOperationsACount, n = e.length - s.originalOperationsBCount;
                rh(t, n - i), rh(e, i - n)
            }
            return oh(t, s.nextBaseVersionB), oh(e, s.nextBaseVersionA), {
                operationsA: t,
                operationsB: e,
                originalOperations: o
            }
        }

        class nh {
            constructor(t, e, i = !1) {
                this.originalOperations = new Map, this._history = t.history, this._useRelations = e, this._forceWeakRemove = !!i, this._relations = new Map
            }

            setOriginalOperations(t, e = null) {
                const i = e ? this.originalOperations.get(e) : null;
                for (const e of t) this.originalOperations.set(e, i || e)
            }

            updateRelation(t, e) {
                switch (t.constructor) {
                    case dc:
                        switch (e.constructor) {
                            case mc:
                                t.targetPosition.isEqual(e.sourcePosition) || e.movedRange.containsPosition(t.targetPosition) ? this._setRelation(t, e, "insertAtSource") : t.targetPosition.isEqual(e.deletionPosition) ? this._setRelation(t, e, "insertBetween") : t.targetPosition.isAfter(e.sourcePosition) && this._setRelation(t, e, "moveTargetAfter");
                                break;
                            case dc:
                                t.targetPosition.isEqual(e.sourcePosition) || t.targetPosition.isBefore(e.sourcePosition) ? this._setRelation(t, e, "insertBefore") : this._setRelation(t, e, "insertAfter")
                        }
                        break;
                    case pc:
                        switch (e.constructor) {
                            case mc:
                                t.splitPosition.isBefore(e.sourcePosition) && this._setRelation(t, e, "splitBefore");
                                break;
                            case dc:
                                (t.splitPosition.isEqual(e.sourcePosition) || t.splitPosition.isBefore(e.sourcePosition)) && this._setRelation(t, e, "splitBefore")
                        }
                        break;
                    case mc:
                        switch (e.constructor) {
                            case mc:
                                t.targetPosition.isEqual(e.sourcePosition) || this._setRelation(t, e, "mergeTargetNotMoved"), t.sourcePosition.isEqual(e.targetPosition) && this._setRelation(t, e, "mergeSourceNotMoved"), t.sourcePosition.isEqual(e.sourcePosition) && this._setRelation(t, e, "mergeSameElement");
                                break;
                            case pc:
                                t.sourcePosition.isEqual(e.splitPosition) && this._setRelation(t, e, "splitAtSource")
                        }
                        break;
                    case uc: {
                        const i = t.newRange;
                        if (!i) return;
                        switch (e.constructor) {
                            case dc: {
                                const n = Ys._createFromPositionAndShift(e.sourcePosition, e.howMany),
                                    o = n.containsPosition(i.start) || n.start.isEqual(i.start),
                                    r = n.containsPosition(i.end) || n.end.isEqual(i.end);
                                !o && !r || n.containsRange(i) || this._setRelation(t, e, {
                                    side: o ? "left" : "right",
                                    path: o ? i.start.path.slice() : i.end.path.slice()
                                });
                                break
                            }
                            case mc: {
                                const n = i.start.isEqual(e.targetPosition), o = i.start.isEqual(e.deletionPosition),
                                    r = i.end.isEqual(e.deletionPosition), s = i.end.isEqual(e.sourcePosition);
                                (n || o || r || s) && this._setRelation(t, e, {
                                    wasInLeftElement: n,
                                    wasStartBeforeMergedElement: o,
                                    wasEndBeforeMergedElement: r,
                                    wasInRightElement: s
                                });
                                break
                            }
                        }
                        break
                    }
                }
            }

            getContext(t, e, i) {
                return {
                    aIsStrong: i,
                    aWasUndone: this._wasUndone(t),
                    bWasUndone: this._wasUndone(e),
                    abRelation: this._useRelations ? this._getRelation(t, e) : null,
                    baRelation: this._useRelations ? this._getRelation(e, t) : null,
                    forceWeakRemove: this._forceWeakRemove
                }
            }

            _wasUndone(t) {
                const e = this.originalOperations.get(t);
                return e.wasUndone || this._history.isUndoneOperation(e)
            }

            _getRelation(t, e) {
                const i = this.originalOperations.get(e), n = this._history.getUndoneOperation(i);
                if (!n) return null;
                const o = this.originalOperations.get(t), r = this._relations.get(o);
                return r && r.get(n) || null
            }

            _setRelation(t, e, i) {
                const n = this.originalOperations.get(t), o = this.originalOperations.get(e);
                let r = this._relations.get(n);
                r || (r = new Map, this._relations.set(n, r)), r.set(o, i)
            }
        }

        function oh(t, e) {
            for (const i of t) i.baseVersion = e++
        }

        function rh(t, e) {
            for (let i = 0; i < e; i++) t.push(new Jd(0))
        }

        function sh(t, e, i) {
            const n = t.nodes.getNode(0).getAttribute(e);
            if (n == i) return null;
            const o = new Ys(t.position, t.position.getShiftedBy(t.howMany));
            return new cc(o, e, n, i, 0)
        }

        function ah(t, e) {
            return null === t.targetPosition._getTransformedByDeletion(e.sourcePosition, e.howMany)
        }

        function ch(t, e) {
            const i = [];
            for (let n = 0; n < t.length; n++) {
                const o = t[n], r = new dc(o.start, o.end.offset - o.start.offset, e, 0);
                i.push(r);
                for (let e = n + 1; e < t.length; e++) t[e] = t[e]._getTransformedByMove(r.sourcePosition, r.targetPosition, r.howMany)[0];
                e = e._getTransformedByMove(r.sourcePosition, r.targetPosition, r.howMany)
            }
            return i
        }

        Xd(cc, cc, (t, e, i) => {
            if (t.key === e.key) {
                const n = t.range.getDifference(e.range).map(e => new cc(e, t.key, t.oldValue, t.newValue, 0)),
                    o = t.range.getIntersection(e.range);
                return o && i.aIsStrong && n.push(new cc(o, e.key, e.newValue, t.newValue, 0)), 0 == n.length ? [new Jd(0)] : n
            }
            return [t]
        }), Xd(cc, hc, (t, e) => {
            if (t.range.start.hasSameParentAs(e.position) && t.range.containsPosition(e.position)) {
                const i = t.range._getTransformedByInsertion(e.position, e.howMany, !e.shouldReceiveAttributes).map(e => new cc(e, t.key, t.oldValue, t.newValue, t.baseVersion));
                if (e.shouldReceiveAttributes) {
                    const n = sh(e, t.key, t.oldValue);
                    n && i.unshift(n)
                }
                return i
            }
            return t.range = t.range._getTransformedByInsertion(e.position, e.howMany, !1)[0], [t]
        }), Xd(cc, mc, (t, e) => {
            const i = [];
            t.range.start.hasSameParentAs(e.deletionPosition) && (t.range.containsPosition(e.deletionPosition) || t.range.start.isEqual(e.deletionPosition)) && i.push(Ys._createFromPositionAndShift(e.graveyardPosition, 1));
            const n = t.range._getTransformedByMergeOperation(e);
            return n.isCollapsed || i.push(n), i.map(e => new cc(e, t.key, t.oldValue, t.newValue, t.baseVersion))
        }), Xd(cc, dc, (t, e) => {
            return function (t, e) {
                const i = Ys._createFromPositionAndShift(e.sourcePosition, e.howMany);
                let n = null, o = [];
                i.containsRange(t, !0) ? n = t : t.start.hasSameParentAs(i.start) ? (o = t.getDifference(i), n = t.getIntersection(i)) : o = [t];
                const r = [];
                for (let t of o) {
                    t = t._getTransformedByDeletion(e.sourcePosition, e.howMany);
                    const i = e.getMovedRangeStart(), n = t.start.hasSameParentAs(i);
                    t = t._getTransformedByInsertion(i, e.howMany, n), r.push(...t)
                }
                n && r.push(n._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany, !1)[0]);
                return r
            }(t.range, e).map(e => new cc(e, t.key, t.oldValue, t.newValue, t.baseVersion))
        }), Xd(cc, pc, (t, e) => {
            if (t.range.end.isEqual(e.insertionPosition)) return e.graveyardPosition || t.range.end.offset++, [t];
            if (t.range.start.hasSameParentAs(e.splitPosition) && t.range.containsPosition(e.splitPosition)) {
                const i = t.clone();
                return i.range = new Ys(e.moveTargetPosition.clone(), t.range.end._getCombined(e.splitPosition, e.moveTargetPosition)), t.range.end = e.splitPosition.clone(), t.range.end.stickiness = "toPrevious", [t, i]
            }
            return t.range = t.range._getTransformedBySplitOperation(e), [t]
        }), Xd(hc, cc, (t, e) => {
            const i = [t];
            if (t.shouldReceiveAttributes && t.position.hasSameParentAs(e.range.start) && e.range.containsPosition(t.position)) {
                const n = sh(t, e.key, e.newValue);
                n && i.push(n)
            }
            return i
        }), Xd(hc, hc, (t, e, i) => t.position.isEqual(e.position) && i.aIsStrong ? [t] : (t.position = t.position._getTransformedByInsertOperation(e), [t])), Xd(hc, dc, (t, e) => (t.position = t.position._getTransformedByMoveOperation(e), [t])), Xd(hc, pc, (t, e) => (t.position = t.position._getTransformedBySplitOperation(e), [t])), Xd(hc, mc, (t, e) => (t.position = t.position._getTransformedByMergeOperation(e), [t])), Xd(uc, hc, (t, e) => (t.oldRange && (t.oldRange = t.oldRange._getTransformedByInsertOperation(e)[0]), t.newRange && (t.newRange = t.newRange._getTransformedByInsertOperation(e)[0]), [t])), Xd(uc, uc, (t, e, i) => {
            if (t.name == e.name) {
                if (!i.aIsStrong) return [new Jd(0)];
                t.oldRange = e.newRange ? e.newRange.clone() : null
            }
            return [t]
        }), Xd(uc, mc, (t, e) => (t.oldRange && (t.oldRange = t.oldRange._getTransformedByMergeOperation(e)), t.newRange && (t.newRange = t.newRange._getTransformedByMergeOperation(e)), [t])), Xd(uc, dc, (t, e, i) => {
            if (t.oldRange && (t.oldRange = Ys._createFromRanges(t.oldRange._getTransformedByMoveOperation(e))), t.newRange) {
                if (i.abRelation) {
                    const n = Ys._createFromRanges(t.newRange._getTransformedByMoveOperation(e));
                    if ("left" == i.abRelation.side && e.targetPosition.isEqual(t.newRange.start)) return t.newRange.start.path = i.abRelation.path, t.newRange.end = n.end, [t];
                    if ("right" == i.abRelation.side && e.targetPosition.isEqual(t.newRange.end)) return t.newRange.start = n.start, t.newRange.end.path = i.abRelation.path, [t]
                }
                t.newRange = Ys._createFromRanges(t.newRange._getTransformedByMoveOperation(e))
            }
            return [t]
        }), Xd(uc, pc, (t, e, i) => {
            if (t.oldRange && (t.oldRange = t.oldRange._getTransformedBySplitOperation(e)), t.newRange) {
                if (i.abRelation) {
                    const n = t.newRange._getTransformedBySplitOperation(e);
                    return t.newRange.start.isEqual(e.splitPosition) && i.abRelation.wasStartBeforeMergedElement ? t.newRange.start = $s._createAt(e.insertionPosition) : t.newRange.start.isEqual(e.splitPosition) && !i.abRelation.wasInLeftElement && (t.newRange.start = $s._createAt(e.moveTargetPosition)), t.newRange.end.isEqual(e.splitPosition) && i.abRelation.wasInRightElement ? t.newRange.end = $s._createAt(e.moveTargetPosition) : t.newRange.end.isEqual(e.splitPosition) && i.abRelation.wasEndBeforeMergedElement ? t.newRange.end = $s._createAt(e.insertionPosition) : t.newRange.end = n.end, [t]
                }
                t.newRange = t.newRange._getTransformedBySplitOperation(e)
            }
            return [t]
        }), Xd(mc, hc, (t, e) => (t.sourcePosition.hasSameParentAs(e.position) && (t.howMany += e.howMany), t.sourcePosition = t.sourcePosition._getTransformedByInsertOperation(e), t.targetPosition = t.targetPosition._getTransformedByInsertOperation(e), [t])), Xd(mc, mc, (t, e, i) => {
            if (t.sourcePosition.isEqual(e.sourcePosition) && t.targetPosition.isEqual(e.targetPosition)) {
                if (i.bWasUndone) {
                    const i = e.graveyardPosition.path.slice();
                    return i.push(0), t.sourcePosition = new $s(e.graveyardPosition.root, i), t.howMany = 0, [t]
                }
                return [new Jd(0)]
            }
            if (t.sourcePosition.isEqual(e.sourcePosition) && !t.targetPosition.isEqual(e.targetPosition) && !i.bWasUndone && "splitAtSource" != i.abRelation) {
                const n = "$graveyard" == t.targetPosition.root.rootName,
                    o = "$graveyard" == e.targetPosition.root.rootName;
                if (o && !n || !(n && !o) && i.aIsStrong) {
                    const i = e.targetPosition._getTransformedByMergeOperation(e),
                        n = t.targetPosition._getTransformedByMergeOperation(e);
                    return [new dc(i, t.howMany, n, 0)]
                }
                return [new Jd(0)]
            }
            return t.sourcePosition.hasSameParentAs(e.targetPosition) && (t.howMany += e.howMany), t.sourcePosition = t.sourcePosition._getTransformedByMergeOperation(e), t.targetPosition = t.targetPosition._getTransformedByMergeOperation(e), t.graveyardPosition.isEqual(e.graveyardPosition) && i.aIsStrong || (t.graveyardPosition = t.graveyardPosition._getTransformedByMergeOperation(e)), [t]
        }), Xd(mc, dc, (t, e, i) => {
            const n = Ys._createFromPositionAndShift(e.sourcePosition, e.howMany);
            return "remove" == e.type && !i.bWasUndone && !i.forceWeakRemove && t.deletionPosition.hasSameParentAs(e.sourcePosition) && n.containsPosition(t.sourcePosition) ? [new Jd(0)] : (t.sourcePosition.hasSameParentAs(e.targetPosition) && (t.howMany += e.howMany), t.sourcePosition.hasSameParentAs(e.sourcePosition) && (t.howMany -= e.howMany), t.sourcePosition = t.sourcePosition._getTransformedByMoveOperation(e), t.targetPosition = t.targetPosition._getTransformedByMoveOperation(e), t.graveyardPosition.isEqual(e.targetPosition) || (t.graveyardPosition = t.graveyardPosition._getTransformedByMoveOperation(e)), [t])
        }), Xd(mc, pc, (t, e, i) => {
            if (e.graveyardPosition && (t.graveyardPosition = t.graveyardPosition._getTransformedByDeletion(e.graveyardPosition, 1), t.deletionPosition.isEqual(e.graveyardPosition) && (t.howMany = e.howMany)), t.targetPosition.isEqual(e.splitPosition)) {
                const n = 0 != e.howMany, o = e.graveyardPosition && t.deletionPosition.isEqual(e.graveyardPosition);
                if (n || o || "mergeTargetNotMoved" == i.abRelation) return t.sourcePosition = t.sourcePosition._getTransformedBySplitOperation(e), [t]
            }
            if (t.sourcePosition.isEqual(e.splitPosition)) {
                if ("mergeSourceNotMoved" == i.abRelation) return t.howMany = 0, t.targetPosition = t.targetPosition._getTransformedBySplitOperation(e), [t];
                if ("mergeSameElement" == i.abRelation || t.sourcePosition.offset > 0) return t.sourcePosition = e.moveTargetPosition.clone(), t.targetPosition = t.targetPosition._getTransformedBySplitOperation(e), [t]
            }
            return t.sourcePosition.hasSameParentAs(e.splitPosition) && (t.howMany = e.splitPosition.offset), t.sourcePosition = t.sourcePosition._getTransformedBySplitOperation(e), t.targetPosition = t.targetPosition._getTransformedBySplitOperation(e), [t]
        }), Xd(dc, hc, (t, e) => {
            const i = Ys._createFromPositionAndShift(t.sourcePosition, t.howMany)._getTransformedByInsertOperation(e, !1)[0];
            return t.sourcePosition = i.start, t.howMany = i.end.offset - i.start.offset, t.targetPosition.isEqual(e.position) || (t.targetPosition = t.targetPosition._getTransformedByInsertOperation(e)), [t]
        }), Xd(dc, dc, (t, e, i) => {
            const n = Ys._createFromPositionAndShift(t.sourcePosition, t.howMany),
                o = Ys._createFromPositionAndShift(e.sourcePosition, e.howMany);
            let r, s = i.aIsStrong, a = !i.aIsStrong;
            if ("insertBefore" == i.abRelation || "insertAfter" == i.baRelation ? a = !0 : "insertAfter" != i.abRelation && "insertBefore" != i.baRelation || (a = !1), r = t.targetPosition.isEqual(e.targetPosition) && a ? t.targetPosition._getTransformedByDeletion(e.sourcePosition, e.howMany) : t.targetPosition._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), ah(t, e) && ah(e, t)) return [e.getReversed()];
            if (n.containsPosition(e.targetPosition) && n.containsRange(o, !0)) return n.start = n.start._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), n.end = n.end._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), ch([n], r);
            if (o.containsPosition(t.targetPosition) && o.containsRange(n, !0)) return n.start = n.start._getCombined(e.sourcePosition, e.getMovedRangeStart()), n.end = n.end._getCombined(e.sourcePosition, e.getMovedRangeStart()), ch([n], r);
            const c = ln(t.sourcePosition.getParentPath(), e.sourcePosition.getParentPath());
            if ("prefix" == c || "extension" == c) return n.start = n.start._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), n.end = n.end._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), ch([n], r);
            "remove" != t.type || "remove" == e.type || i.aWasUndone || i.forceWeakRemove ? "remove" == t.type || "remove" != e.type || i.bWasUndone || i.forceWeakRemove || (s = !1) : s = !0;
            const l = [], d = n.getDifference(o);
            for (const t of d) {
                t.start = t.start._getTransformedByDeletion(e.sourcePosition, e.howMany), t.end = t.end._getTransformedByDeletion(e.sourcePosition, e.howMany);
                const i = "same" == ln(t.start.getParentPath(), e.getMovedRangeStart().getParentPath()),
                    n = t._getTransformedByInsertion(e.getMovedRangeStart(), e.howMany, i);
                l.push(...n)
            }
            const h = n.getIntersection(o);
            return null !== h && s && (h.start = h.start._getCombined(e.sourcePosition, e.getMovedRangeStart()), h.end = h.end._getCombined(e.sourcePosition, e.getMovedRangeStart()), 0 === l.length ? l.push(h) : 1 == l.length ? o.start.isBefore(n.start) || o.start.isEqual(n.start) ? l.unshift(h) : l.push(h) : l.splice(1, 0, h)), 0 === l.length ? [new Jd(t.baseVersion)] : ch(l, r)
        }), Xd(dc, pc, (t, e, i) => {
            let n = t.targetPosition.clone();
            t.targetPosition.isEqual(e.insertionPosition) && e.graveyardPosition && "moveTargetAfter" != i.abRelation || (n = t.targetPosition._getTransformedBySplitOperation(e));
            const o = Ys._createFromPositionAndShift(t.sourcePosition, t.howMany);
            if (o.end.isEqual(e.insertionPosition)) return e.graveyardPosition || t.howMany++, t.targetPosition = n, [t];
            if (o.start.hasSameParentAs(e.splitPosition) && o.containsPosition(e.splitPosition)) {
                let t = new Ys(e.splitPosition, o.end);
                return t = t._getTransformedBySplitOperation(e), ch([new Ys(o.start, e.splitPosition), t], n)
            }
            t.targetPosition.isEqual(e.splitPosition) && "insertAtSource" == i.abRelation && (n = e.moveTargetPosition), t.targetPosition.isEqual(e.insertionPosition) && "insertBetween" == i.abRelation && (n = t.targetPosition);
            const r = [o._getTransformedBySplitOperation(e)];
            if (e.graveyardPosition) {
                const n = o.start.isEqual(e.graveyardPosition) || o.containsPosition(e.graveyardPosition);
                t.howMany > 1 && n && !i.aWasUndone && r.push(Ys._createFromPositionAndShift(e.insertionPosition, 1))
            }
            return ch(r, n)
        }), Xd(dc, mc, (t, e, i) => {
            const n = Ys._createFromPositionAndShift(t.sourcePosition, t.howMany);
            if (e.deletionPosition.hasSameParentAs(t.sourcePosition) && n.containsPosition(e.sourcePosition)) if ("remove" != t.type || i.forceWeakRemove) {
                if (1 == t.howMany) return i.bWasUndone ? (t.sourcePosition = e.graveyardPosition.clone(), t.targetPosition = t.targetPosition._getTransformedByMergeOperation(e), [t]) : [new Jd(0)]
            } else if (!i.aWasUndone) {
                const i = [];
                let n = e.graveyardPosition.clone(), o = e.targetPosition._getTransformedByMergeOperation(e);
                t.howMany > 1 && (i.push(new dc(t.sourcePosition, t.howMany - 1, t.targetPosition, 0)), n = n._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany - 1), o = o._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany - 1));
                const r = e.deletionPosition._getCombined(t.sourcePosition, t.targetPosition), s = new dc(n, 1, r, 0),
                    a = s.getMovedRangeStart().path.slice();
                a.push(0);
                const c = new $s(s.targetPosition.root, a);
                o = o._getTransformedByMove(n, r, 1);
                const l = new dc(o, e.howMany, c, 0);
                return i.push(s), i.push(l), i
            }
            const o = Ys._createFromPositionAndShift(t.sourcePosition, t.howMany)._getTransformedByMergeOperation(e);
            return t.sourcePosition = o.start, t.howMany = o.end.offset - o.start.offset, t.targetPosition = t.targetPosition._getTransformedByMergeOperation(e), [t]
        }), Xd(fc, hc, (t, e) => (t.position = t.position._getTransformedByInsertOperation(e), [t])), Xd(fc, mc, (t, e) => t.position.isEqual(e.deletionPosition) ? (t.position = e.graveyardPosition.clone(), t.position.stickiness = "toNext", [t]) : (t.position = t.position._getTransformedByMergeOperation(e), [t])), Xd(fc, dc, (t, e) => (t.position = t.position._getTransformedByMoveOperation(e), [t])), Xd(fc, fc, (t, e, i) => {
            if (t.position.isEqual(e.position)) {
                if (!i.aIsStrong) return [new Jd(0)];
                t.oldName = e.newName
            }
            return [t]
        }), Xd(fc, pc, (t, e) => {
            if ("same" == ln(t.position.path, e.splitPosition.getParentPath()) && !e.graveyardPosition) {
                return [t, new fc(t.position.getShiftedBy(1), t.oldName, t.newName, 0)]
            }
            return t.position = t.position._getTransformedBySplitOperation(e), [t]
        }), Xd(gc, gc, (t, e, i) => {
            if (t.root === e.root && t.key === e.key) {
                if (!i.aIsStrong || t.newValue === e.newValue) return [new Jd(0)];
                t.oldValue = e.newValue
            }
            return [t]
        }), Xd(pc, hc, (t, e) => (t.splitPosition.hasSameParentAs(e.position) && t.splitPosition.offset < e.position.offset && (t.howMany += e.howMany), t.splitPosition = t.splitPosition._getTransformedByInsertOperation(e), t.insertionPosition = pc.getInsertionPosition(t.splitPosition), [t])), Xd(pc, mc, (t, e, i) => {
            if (!t.graveyardPosition && !i.bWasUndone && t.splitPosition.hasSameParentAs(e.sourcePosition)) {
                const i = e.graveyardPosition.path.slice();
                i.push(0);
                const n = new $s(e.graveyardPosition.root, i),
                    o = pc.getInsertionPosition(new $s(e.graveyardPosition.root, i)), r = new pc(n, 0, null, 0);
                return r.insertionPosition = o, t.splitPosition = t.splitPosition._getTransformedByMergeOperation(e), t.insertionPosition = pc.getInsertionPosition(t.splitPosition), t.graveyardPosition = r.insertionPosition.clone(), t.graveyardPosition.stickiness = "toNext", [r, t]
            }
            return t.splitPosition.hasSameParentAs(e.deletionPosition) && !t.splitPosition.isAfter(e.deletionPosition) && t.howMany--, t.splitPosition.hasSameParentAs(e.targetPosition) && (t.howMany += e.howMany), t.splitPosition = t.splitPosition._getTransformedByMergeOperation(e), t.insertionPosition = pc.getInsertionPosition(t.splitPosition), t.graveyardPosition && (t.graveyardPosition = t.graveyardPosition._getTransformedByMergeOperation(e)), [t]
        }), Xd(pc, dc, (t, e, i) => {
            const n = Ys._createFromPositionAndShift(e.sourcePosition, e.howMany);
            if (t.graveyardPosition) {
                const o = n.start.isEqual(t.graveyardPosition) || n.containsPosition(t.graveyardPosition);
                if (!i.bWasUndone && o) {
                    const i = t.splitPosition._getTransformedByMoveOperation(e),
                        n = t.graveyardPosition._getTransformedByMoveOperation(e), o = n.path.slice();
                    o.push(0);
                    const r = new $s(n.root, o);
                    return [new dc(i, t.howMany, r, 0)]
                }
                t.graveyardPosition = t.graveyardPosition._getTransformedByMoveOperation(e)
            }
            if (t.splitPosition.hasSameParentAs(e.sourcePosition) && n.containsPosition(t.splitPosition)) {
                const i = e.howMany - (t.splitPosition.offset - e.sourcePosition.offset);
                return t.howMany -= i, t.splitPosition.hasSameParentAs(e.targetPosition) && t.splitPosition.offset < e.targetPosition.offset && (t.howMany += e.howMany), t.splitPosition = e.sourcePosition.clone(), t.insertionPosition = pc.getInsertionPosition(t.splitPosition), [t]
            }
            return !t.splitPosition.isEqual(e.targetPosition) || "insertAtSource" != i.baRelation && "splitBefore" != i.abRelation ? (e.sourcePosition.isEqual(e.targetPosition) || (t.splitPosition.hasSameParentAs(e.sourcePosition) && t.splitPosition.offset <= e.sourcePosition.offset && (t.howMany -= e.howMany), t.splitPosition.hasSameParentAs(e.targetPosition) && t.splitPosition.offset < e.targetPosition.offset && (t.howMany += e.howMany)), t.splitPosition.stickiness = "toNone", t.splitPosition = t.splitPosition._getTransformedByMoveOperation(e), t.splitPosition.stickiness = "toNext", t.graveyardPosition ? t.insertionPosition = t.insertionPosition._getTransformedByMoveOperation(e) : t.insertionPosition = pc.getInsertionPosition(t.splitPosition), [t]) : (t.howMany += e.howMany, t.splitPosition = t.splitPosition._getTransformedByDeletion(e.sourcePosition, e.howMany), t.insertionPosition = pc.getInsertionPosition(t.splitPosition), [t])
        }), Xd(pc, pc, (t, e, i) => {
            if (t.splitPosition.isEqual(e.splitPosition)) {
                if (!t.graveyardPosition && !e.graveyardPosition) return [new Jd(0)];
                if (t.graveyardPosition && e.graveyardPosition && t.graveyardPosition.isEqual(e.graveyardPosition)) return [new Jd(0)];
                if ("splitBefore" == i.abRelation) return t.howMany = 0, t.graveyardPosition = t.graveyardPosition._getTransformedBySplitOperation(e), [t]
            }
            if (t.graveyardPosition && e.graveyardPosition && t.graveyardPosition.isEqual(e.graveyardPosition)) {
                const n = "$graveyard" == t.splitPosition.root.rootName,
                    o = "$graveyard" == e.splitPosition.root.rootName;
                if (o && !n || !(n && !o) && i.aIsStrong) {
                    const i = [];
                    return e.howMany && i.push(new dc(e.moveTargetPosition, e.howMany, e.splitPosition, 0)), t.howMany && i.push(new dc(t.splitPosition, t.howMany, t.moveTargetPosition, 0)), i
                }
                return [new Jd(0)]
            }
            if (t.graveyardPosition && (t.graveyardPosition = t.graveyardPosition._getTransformedBySplitOperation(e)), t.splitPosition.isEqual(e.insertionPosition) && "splitBefore" == i.abRelation) return t.howMany++, [t];
            if (e.splitPosition.isEqual(t.insertionPosition) && "splitBefore" == i.baRelation) {
                const i = e.insertionPosition.path.slice();
                i.push(0);
                const n = new $s(e.insertionPosition.root, i);
                return [t, new dc(t.insertionPosition, 1, n, 0)]
            }
            return t.splitPosition.hasSameParentAs(e.splitPosition) && t.splitPosition.offset < e.splitPosition.offset && (t.howMany -= e.howMany), t.splitPosition = t.splitPosition._getTransformedBySplitOperation(e), t.insertionPosition = pc.getInsertionPosition(t.splitPosition), [t]
        });

        class lh extends Cd {
            constructor(t) {
                super(t), this._stack = [], this._createdBatches = new WeakSet, this.refresh()
            }

            refresh() {
                this.isEnabled = this._stack.length > 0
            }

            addBatch(t) {
                const e = this.editor.model.document.selection,
                    i = {ranges: e.hasOwnRange ? Array.from(e.getRanges()) : [], isBackward: e.isBackward};
                this._stack.push({batch: t, selection: i}), this.refresh()
            }

            clearStack() {
                this._stack = [], this.refresh()
            }

            _restoreSelection(t, e, i) {
                const n = this.editor.model, o = n.document, r = [];
                for (const e of t) {
                    const t = dh(e, i).find(t => t.start.root != o.graveyard);
                    t && r.push(t)
                }
                r.length && n.change(t => {
                    t.setSelection(r, {backward: e})
                })
            }

            _undo(t, e) {
                const i = this.editor.model, n = i.document;
                this._createdBatches.add(e);
                const o = t.operations.slice().filter(t => t.isDocumentOperation);
                o.reverse();
                for (const t of o) {
                    const o = t.baseVersion + 1, r = Array.from(n.history.getOperations(o)),
                        s = ih([t.getReversed()], r, {
                            useRelations: !0,
                            document: this.editor.model.document,
                            padWithNoOps: !1,
                            forceWeakRemove: !0
                        }).operationsA;
                    for (const o of s) e.addOperation(o), i.applyOperation(o), n.history.setOperationAsUndone(t, o)
                }
            }
        }

        function dh(t, e) {
            const i = t.getTransformedByOperations(e);
            i.sort((t, e) => t.start.isBefore(e.start) ? -1 : 1);
            for (let t = 1; t < i.length; t++) {
                const e = i[t - 1], n = i[t];
                e.end.isTouching(n.start) && (e.end = n.end, i.splice(t, 1), t--)
            }
            return i
        }

        class hh extends lh {
            execute(t = null) {
                const e = t ? this._stack.findIndex(e => e.batch == t) : this._stack.length - 1,
                    i = this._stack.splice(e, 1)[0], n = this.editor.model.createBatch("transparent");
                this.editor.model.enqueueChange(n, () => {
                    this._undo(i.batch, n);
                    const t = this.editor.model.document.history.getOperations(i.batch.baseVersion);
                    this._restoreSelection(i.selection.ranges, i.selection.isBackward, t), this.fire("revert", i.batch, n)
                }), this.refresh()
            }
        }

        class uh extends lh {
            execute() {
                const t = this._stack.pop(), e = this.editor.model.createBatch("transparent");
                this.editor.model.enqueueChange(e, () => {
                    const i = t.batch.operations[t.batch.operations.length - 1].baseVersion + 1,
                        n = this.editor.model.document.history.getOperations(i);
                    this._restoreSelection(t.selection.ranges, t.selection.isBackward, n), this._undo(t.batch, e)
                }), this.refresh()
            }
        }

        class fh extends vd {
            static get pluginName() {
                return "UndoEditing"
            }

            constructor(t) {
                super(t), this._batchRegistry = new WeakSet
            }

            init() {
                const t = this.editor;
                this._undoCommand = new hh(t), this._redoCommand = new uh(t), t.commands.add("undo", this._undoCommand), t.commands.add("redo", this._redoCommand), this.listenTo(t.model, "applyOperation", (t, e) => {
                    const i = e[0];
                    if (!i.isDocumentOperation) return;
                    const n = i.batch, o = this._redoCommand._createdBatches.has(n),
                        r = this._undoCommand._createdBatches.has(n);
                    this._batchRegistry.has(n) || "transparent" == n.type && !o && !r || (o ? this._undoCommand.addBatch(n) : r || (this._undoCommand.addBatch(n), this._redoCommand.clearStack()), this._batchRegistry.add(n))
                }, {priority: "highest"}), this.listenTo(this._undoCommand, "revert", (t, e, i) => {
                    this._redoCommand.addBatch(i)
                }), t.keystrokes.set("CTRL+Z", "undo"), t.keystrokes.set("CTRL+Y", "redo"), t.keystrokes.set("CTRL+SHIFT+Z", "redo")
            }
        }

        var gh = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',
            mh = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';

        class ph extends vd {
            init() {
                const t = this.editor, e = t.locale, i = t.t, n = "ltr" == e.uiLanguageDirection ? gh : mh,
                    o = "ltr" == e.uiLanguageDirection ? mh : gh;
                this._addButton("undo", i("cq"), "CTRL+Z", n), this._addButton("redo", i("cr"), "CTRL+Y", o)
            }

            _addButton(t, e, i, n) {
                const o = this.editor;
                o.ui.componentFactory.add(t, r => {
                    const s = o.commands.get(t), a = new nd(r);
                    return a.set({
                        label: e,
                        icon: n,
                        keystroke: i,
                        tooltip: !0
                    }), a.bind("isEnabled").to(s, "isEnabled"), this.listenTo(a, "execute", () => o.execute(t)), a
                })
            }
        }

        class bh extends vd {
            static get requires() {
                return [fh, ph]
            }

            static get pluginName() {
                return "Undo"
            }
        }

        class wh extends vd {
            static get pluginName() {
                return "PendingActions"
            }

            init() {
                this.set("hasAny", !1), this._actions = new oo({idProperty: "_id"}), this._actions.delegate("add", "remove").to(this)
            }

            add(t) {
                if ("string" != typeof t) throw new Yi.b("pendingactions-add-invalid-message: The message must be a string.", this);
                const e = Object.create(Fn);
                return e.set("message", t), this._actions.add(e), this.hasAny = !0, e
            }

            remove(t) {
                this._actions.remove(t), this.hasAny = !!this._actions.length
            }

            get first() {
                return this._actions.get(0)
            }

            [Symbol.iterator]() {
                return this._actions[Symbol.iterator]()
            }
        }

        class kh {
            constructor() {
                const t = new window.FileReader;
                this._reader = t, this._data = void 0, this.set("loaded", 0), t.onprogress = (t => {
                    this.loaded = t.loaded
                })
            }

            get error() {
                return this._reader.error
            }

            get data() {
                return this._data
            }

            read(t) {
                const e = this._reader;
                return this.total = t.size, new Promise((i, n) => {
                    e.onload = (() => {
                        const t = e.result;
                        this._data = t, i(t)
                    }), e.onerror = (() => {
                        n("error")
                    }), e.onabort = (() => {
                        n("aborted")
                    }), this._reader.readAsDataURL(t)
                })
            }

            abort() {
                this._reader.abort()
            }
        }

        cn(kh, Fn);

        class _h extends vd {
            static get pluginName() {
                return "FileRepository"
            }

            static get requires() {
                return [wh]
            }

            init() {
                this.loaders = new oo, this.loaders.on("add", () => this._updatePendingAction()), this.loaders.on("remove", () => this._updatePendingAction()), this._loadersMap = new Map, this._pendingAction = null, this.set("uploaded", 0), this.set("uploadTotal", null), this.bind("uploadedPercent").to(this, "uploaded", this, "uploadTotal", (t, e) => e ? t / e * 100 : 0)
            }

            getLoader(t) {
                return this._loadersMap.get(t) || null
            }

            createLoader(t) {
                if (!this.createUploadAdapter) return console.warn(Object(Yi.a)("filerepository-no-upload-adapter: Upload adapter is not defined.")), null;
                const e = new vh(Promise.resolve(t), this.createUploadAdapter);
                return this.loaders.add(e), this._loadersMap.set(t, e), t instanceof Promise && e.file.then(t => {
                    this._loadersMap.set(t, e)
                }).catch(() => {
                }), e.on("change:uploaded", () => {
                    let t = 0;
                    for (const e of this.loaders) t += e.uploaded;
                    this.uploaded = t
                }), e.on("change:uploadTotal", () => {
                    let t = 0;
                    for (const e of this.loaders) e.uploadTotal && (t += e.uploadTotal);
                    this.uploadTotal = t
                }), e
            }

            destroyLoader(t) {
                const e = t instanceof vh ? t : this.getLoader(t);
                e._destroy(), this.loaders.remove(e), this._loadersMap.forEach((t, i) => {
                    t === e && this._loadersMap.delete(i)
                })
            }

            _updatePendingAction() {
                const t = this.editor.plugins.get(wh);
                if (this.loaders.length) {
                    if (!this._pendingAction) {
                        const e = this.editor.t, i = t => `${e("ba")} ${parseInt(t)}%.`;
                        this._pendingAction = t.add(i(this.uploadedPercent)), this._pendingAction.bind("message").to(this, "uploadedPercent", i)
                    }
                } else t.remove(this._pendingAction), this._pendingAction = null
            }
        }

        cn(_h, Fn);

        class vh {
            constructor(t, e) {
                this.id = Ki(), this._filePromiseWrapper = this._createFilePromiseWrapper(t), this._adapter = e(this), this._reader = new kh, this.set("status", "idle"), this.set("uploaded", 0), this.set("uploadTotal", null), this.bind("uploadedPercent").to(this, "uploaded", this, "uploadTotal", (t, e) => e ? t / e * 100 : 0), this.set("uploadResponse", null)
            }

            get file() {
                return this._filePromiseWrapper ? this._filePromiseWrapper.promise.then(t => this._filePromiseWrapper ? t : null) : Promise.resolve(null)
            }

            get data() {
                return this._reader.data
            }

            read() {
                if ("idle" != this.status) throw new Yi.b("filerepository-read-wrong-status: You cannot call read if the status is different than idle.", this);
                return this.status = "reading", this.file.then(t => this._reader.read(t)).then(t => {
                    if ("reading" !== this.status) throw this.status;
                    return this.status = "idle", t
                }).catch(t => {
                    if ("aborted" === t) throw this.status = "aborted", "aborted";
                    throw this.status = "error", this._reader.error ? this._reader.error : t
                })
            }

            upload() {
                if ("idle" != this.status) throw new Yi.b("filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.", this);
                return this.status = "uploading", this.file.then(() => this._adapter.upload()).then(t => (this.uploadResponse = t, this.status = "idle", t)).catch(t => {
                    if ("aborted" === this.status) throw"aborted";
                    throw this.status = "error", t
                })
            }

            abort() {
                const t = this.status;
                this.status = "aborted", this._filePromiseWrapper.isFulfilled ? "reading" == t ? this._reader.abort() : "uploading" == t && this._adapter.abort && this._adapter.abort() : (this._filePromiseWrapper.promise.catch(() => {
                }), this._filePromiseWrapper.rejecter("aborted")), this._destroy()
            }

            _destroy() {
                this._filePromiseWrapper = void 0, this._reader = void 0, this._adapter = void 0, this.uploadResponse = void 0
            }

            _createFilePromiseWrapper(t) {
                const e = {};
                return e.promise = new Promise((i, n) => {
                    e.rejecter = n, e.isFulfilled = !1, t.then(t => {
                        e.isFulfilled = !0, i(t)
                    }).catch(t => {
                        e.isFulfilled = !0, n(t)
                    })
                }), e
            }
        }

        cn(vh, Fn);
        const yh = "ckCsrfToken", xh = 40, Ah = "abcdefghijklmnopqrstuvwxyz0123456789";

        function Th() {
            let t = function (t) {
                t = t.toLowerCase();
                const e = document.cookie.split(";");
                for (const i of e) {
                    const e = i.split("="), n = decodeURIComponent(e[0].trim().toLowerCase());
                    if (n === t) return decodeURIComponent(e[1])
                }
                return null
            }(yh);
            return t && t.length == xh || (t = function (t) {
                let e = "";
                const i = new Uint8Array(t);
                window.crypto.getRandomValues(i);
                for (let t = 0; t < i.length; t++) {
                    const n = Ah.charAt(i[t] % Ah.length);
                    e += Math.random() > .5 ? n.toUpperCase() : n
                }
                return e
            }(xh), function (t, e) {
                document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + ";path=/"
            }(yh, t)), t
        }

        class Ch extends vd {
            static get requires() {
                return [_h]
            }

            static get pluginName() {
                return "CKFinderUploadAdapter"
            }

            init() {
                const t = this.editor.config.get("ckfinder.uploadUrl");
                t && (this.editor.plugins.get(_h).createUploadAdapter = (e => new Ph(e, t, this.editor.t)))
            }
        }

        class Ph {
            constructor(t, e, i) {
                this.loader = t, this.url = e, this.t = i
            }

            upload() {
                return this.loader.file.then(t => new Promise((e, i) => {
                    this._initRequest(), this._initListeners(e, i, t), this._sendRequest(t)
                }))
            }

            abort() {
                this.xhr && this.xhr.abort()
            }

            _initRequest() {
                const t = this.xhr = new XMLHttpRequest;
                t.open("POST", this.url, !0), t.responseType = "json"
            }

            _initListeners(t, e, i) {
                const n = this.xhr, o = this.loader, r = (0, this.t)("a") + ` ${i.name}.`;
                n.addEventListener("error", () => e(r)), n.addEventListener("abort", () => e()), n.addEventListener("load", () => {
                    const i = n.response;
                    if (!i || !i.uploaded) return e(i && i.error && i.error.message ? i.error.message : r);
                    t({default: i.url})
                }), n.upload && n.upload.addEventListener("progress", t => {
                    t.lengthComputable && (o.uploadTotal = t.total, o.uploaded = t.loaded)
                })
            }

            _sendRequest(t) {
                const e = new FormData;
                e.append("upload", t), e.append("ckCsrfToken", Th()), this.xhr.send(e)
            }
        }

        class Sh {
            static get pluginName() {
                return "BlockAutoformatEditing"
            }

            constructor(t, e, i) {
                let n, o = null;
                "function" == typeof i ? n = i : (o = t.commands.get(i), n = (() => {
                    t.execute(i)
                })), t.model.document.on("change", (i, r) => {
                    if (o && !o.isEnabled) return;
                    if ("transparent" == r.type) return;
                    const s = Array.from(t.model.document.differ.getChanges()), a = s[0];
                    if (1 != s.length || "insert" !== a.type || "$text" != a.name || 1 != a.length) return;
                    const c = a.position.textNode || a.position.nodeAfter;
                    if (!c.parent.is("paragraph")) return;
                    const l = e.exec(c.data);
                    l && t.model.enqueueChange(t => {
                        const e = t.createPositionAt(c.parent, 0), i = t.createPositionAt(c.parent, l[0].length),
                            o = new oa(e, i);
                        !1 !== n({match: l}) && t.remove(o), o.detach()
                    })
                })
            }
        }

        class Eh {
            static get pluginName() {
                return "InlineAutoformatEditing"
            }

            constructor(t, e, i) {
                let n, o, r, s;
                e instanceof RegExp ? n = e : r = e, "string" == typeof i ? o = i : s = i, r = r || (t => {
                    let e;
                    const i = [], o = [];
                    for (; null !== (e = n.exec(t)) && !(e && e.length < 4);) {
                        let {index: t, 1: n, 2: r, 3: s} = e;
                        const a = n + r + s, c = [t += e[0].length - a.length, t + n.length],
                            l = [t + n.length + r.length, t + n.length + r.length + s.length];
                        i.push(c), i.push(l), o.push([t + n.length, t + n.length + r.length])
                    }
                    return {remove: i, format: o}
                }), s = s || ((e, i) => {
                    const n = t.model.schema.getValidRanges(i, o);
                    for (const t of n) e.setAttribute(o, !0, t);
                    e.removeSelectionAttribute(o)
                }), t.model.document.on("change", (e, i) => {
                    if ("transparent" == i.type) return;
                    const n = t.model, o = n.document.selection;
                    if (!o.isCollapsed) return;
                    const a = Array.from(n.document.differ.getChanges()), c = a[0];
                    if (1 != a.length || "insert" !== c.type || "$text" != c.name || 1 != c.length) return;
                    const l = o.focus, d = l.parent, {text: h, range: u} = function (t, e) {
                            let i = t.start;
                            return {
                                text: Array.from(t.getItems()).reduce((t, n) => n.is("text") || n.is("textProxy") ? t + n.data : (i = e.createPositionAfter(n), ""), ""),
                                range: e.createRange(i, t.end)
                            }
                        }(n.createRange(n.createPositionAt(d, 0), l), n), f = r(h), g = Mh(u.start, f.format, n),
                        m = Mh(u.start, f.remove, n);
                    g.length && m.length && n.enqueueChange(t => {
                        if (!1 !== s(t, g)) for (const e of m.reverse()) t.remove(e)
                    })
                })
            }
        }

        function Mh(t, e, i) {
            return e.filter(t => void 0 !== t[0] && void 0 !== t[1]).map(e => i.createRange(t.getShiftedBy(e[0]), t.getShiftedBy(e[1])))
        }

        function Ih(t, e) {
            return (i, n) => {
                if (!t.commands.get(e).isEnabled) return !1;
                const o = t.model.schema.getValidRanges(n, e);
                for (const t of o) i.setAttribute(e, !0, t);
                i.removeSelectionAttribute(e)
            }
        }

        class Nh extends Cd {
            constructor(t, e) {
                super(t), this.attributeKey = e
            }

            refresh() {
                const t = this.editor.model, e = t.document;
                this.value = this._getValueFromFirstAllowedNode(), this.isEnabled = t.schema.checkAttributeInSelection(e.selection, this.attributeKey)
            }

            execute(t = {}) {
                const e = this.editor.model, i = e.document.selection,
                    n = void 0 === t.forceValue ? !this.value : t.forceValue;
                e.change(t => {
                    if (i.isCollapsed) n ? t.setSelectionAttribute(this.attributeKey, !0) : t.removeSelectionAttribute(this.attributeKey); else {
                        const o = e.schema.getValidRanges(i.getRanges(), this.attributeKey);
                        for (const e of o) n ? t.setAttribute(this.attributeKey, n, e) : t.removeAttribute(this.attributeKey, e)
                    }
                })
            }

            _getValueFromFirstAllowedNode() {
                const t = this.editor.model, e = t.schema, i = t.document.selection;
                if (i.isCollapsed) return i.hasAttribute(this.attributeKey);
                for (const t of i.getRanges()) for (const i of t.getItems()) if (e.checkAttribute(i, this.attributeKey)) return i.hasAttribute(this.attributeKey);
                return !1
            }
        }

        const Oh = "bold";

        class Rh extends vd {
            static get pluginName() {
                return "BoldEditing"
            }

            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {allowAttributes: Oh}), t.model.schema.setAttributeProperties(Oh, {
                    isFormatting: !0,
                    copyOnEnter: !0
                }), t.conversion.attributeToElement({
                    model: Oh, view: "strong", upcastAlso: ["b", t => {
                        const e = t.getStyle("font-weight");
                        return e ? "bold" == e || Number(e) >= 600 ? {name: !0, styles: ["font-weight"]} : void 0 : null
                    }]
                }), t.commands.add(Oh, new Nh(t, Oh)), t.keystrokes.set("CTRL+B", Oh)
            }
        }

        var Dh = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>';
        const Lh = "bold";

        class jh extends vd {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add(Lh, i => {
                    const n = t.commands.get(Lh), o = new nd(i);
                    return o.set({
                        label: e("d"),
                        icon: Dh,
                        keystroke: "CTRL+B",
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isOn", "isEnabled").to(n, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute(Lh)), o
                })
            }
        }

        const zh = "italic";

        class Vh extends vd {
            static get pluginName() {
                return "ItalicEditing"
            }

            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {allowAttributes: zh}), t.model.schema.setAttributeProperties(zh, {
                    isFormatting: !0,
                    copyOnEnter: !0
                }), t.conversion.attributeToElement({
                    model: zh,
                    view: "i",
                    upcastAlso: ["em", {styles: {"font-style": "italic"}}]
                }), t.commands.add(zh, new Nh(t, zh)), t.keystrokes.set("CTRL+I", zh)
            }
        }

        var Bh = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>';
        const Fh = "italic";

        class Hh extends vd {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add(Fh, i => {
                    const n = t.commands.get(Fh), o = new nd(i);
                    return o.set({
                        label: e("e"),
                        icon: Bh,
                        keystroke: "CTRL+I",
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isOn", "isEnabled").to(n, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute(Fh)), o
                })
            }
        }

        const Uh = "underline";

        class Wh extends vd {
            static get pluginName() {
                return "UnderlineEditing"
            }

            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {allowAttributes: Uh}), t.model.schema.setAttributeProperties(Uh, {
                    isFormatting: !0,
                    copyOnEnter: !0
                }), t.conversion.attributeToElement({
                    model: Uh,
                    view: "u",
                    upcastAlso: {styles: {"text-decoration": "underline"}}
                }), t.commands.add(Uh, new Nh(t, Uh)), t.keystrokes.set("CTRL+U", "underline")
            }
        }

        var qh = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-1.5h14V18zM5.2 10V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"/></svg>';
        const $h = "underline";

        class Yh extends vd {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add($h, i => {
                    const n = t.commands.get($h), o = new nd(i);
                    return o.set({
                        label: e("f"),
                        icon: qh,
                        keystroke: "CTRL+U",
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isOn", "isEnabled").to(n, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute($h)), o
                })
            }
        }

        const Gh = "strikethrough";

        class Qh extends vd {
            static get pluginName() {
                return "StrikethroughEditing"
            }

            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {allowAttributes: Gh}), t.model.schema.setAttributeProperties(Gh, {
                    isFormatting: !0,
                    copyOnEnter: !0
                }), t.conversion.attributeToElement({
                    model: Gh,
                    view: "s",
                    upcastAlso: ["del", "strike", {styles: {"text-decoration": "line-through"}}]
                }), t.commands.add(Gh, new Nh(t, Gh)), t.keystrokes.set("CTRL+SHIFT+X", "strikethrough")
            }
        }

        var Kh = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.4c-.8-.4-1.5-.9-2.2-1.5a.6.6 0 0 1-.2-.5l.3-.6h1c1 1.2 2.1 1.7 3.7 1.7 1 0 1.8-.3 2.3-.6.6-.4.6-1.2.6-1.3.2-1.2-.9-2.1-.9-2.1h2.1c.3.7.4 1.2.4 1.7v.8l-.6 1.2c-.6.8-1.1 1-1.6 1.2a6 6 0 0 1-2.4.6c-1 0-1.8-.3-2.5-.6zM6.8 9L6 8.3c-.4-.5-.5-.8-.5-1.6 0-.7.1-1.3.5-1.8.4-.6 1-1 1.6-1.3a6.3 6.3 0 0 1 4.7 0 4 4 0 0 1 1.7 1l.3.7c0 .1.2.4-.2.7-.4.2-.9.1-1 0a3 3 0 0 0-1.2-1c-.4-.2-1-.3-2-.4-.7 0-1.4.2-2 .6-.8.6-1 .8-1 1.5 0 .8.5 1 1.2 1.5.6.4 1.1.7 1.9 1H6.8z"/><path d="M3 10.5V9h14v1.5z"/></svg>';
        const Jh = "strikethrough";

        class Zh extends vd {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add(Jh, i => {
                    const n = t.commands.get(Jh), o = new nd(i);
                    return o.set({
                        label: e("g"),
                        icon: Kh,
                        keystroke: "CTRL+SHIFT+X",
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isOn", "isEnabled").to(n, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute(Jh)), o
                })
            }
        }

        const Xh = "code";

        class tu extends vd {
            static get pluginName() {
                return "CodeEditing"
            }

            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {allowAttributes: Xh}), t.model.schema.setAttributeProperties(Xh, {
                    isFormatting: !0,
                    copyOnEnter: !0
                }), t.conversion.attributeToElement({
                    model: Xh,
                    view: "code",
                    upcastAlso: {styles: {"word-wrap": "break-word"}}
                }), t.commands.add(Xh, new Nh(t, Xh))
            }
        }

        var eu = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 5.7l5.2 3.9v1.3l-5.6 4c-.1.2-.3.2-.5.2-.3-.1-.6-.7-.6-1l.3-.4 4.7-3.5L11.5 7l-.2-.2c-.1-.3-.1-.6 0-.8.2-.2.5-.4.8-.4a.8.8 0 0 1 .4.1zm-5.2 0L2 9.6v1.3l5.6 4c.1.2.3.2.5.2.3-.1.7-.7.6-1 0-.1 0-.3-.2-.4l-5-3.5L8.2 7l.2-.2c.1-.3.1-.6 0-.8-.2-.2-.5-.4-.8-.4a.8.8 0 0 0-.3.1z"/></svg>';
        i(10);
        const iu = "code";

        class nu extends vd {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add(iu, i => {
                    const n = t.commands.get(iu), o = new nd(i);
                    return o.set({
                        label: e("h"),
                        icon: eu,
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isOn", "isEnabled").to(n, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute(iu)), o
                })
            }
        }

        const ou = "subscript";

        class ru extends vd {
            static get pluginName() {
                return "SubscriptEditing"
            }

            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {allowAttributes: ou}), t.model.schema.setAttributeProperties(ou, {
                    isFormatting: !0,
                    copyOnEnter: !0
                }), t.conversion.attributeToElement({
                    model: ou,
                    view: "sub",
                    upcastAlso: [{styles: {"vertical-align": "sub"}}]
                }), t.commands.add(ou, new Nh(t, ou))
            }
        }

        var su = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.03 10.349l3.818-3.819a.8.8 0 1 1 1.132 1.132L8.16 11.48l3.819 3.818a.8.8 0 1 1-1.132 1.132L7.03 12.61l-3.818 3.82a.8.8 0 1 1-1.132-1.132L5.9 11.48 2.08 7.662A.8.8 0 1 1 3.212 6.53l3.818 3.82zm8.147 7.829h2.549c.254 0 .447.05.58.152a.49.49 0 0 1 .201.413.54.54 0 0 1-.159.393c-.105.108-.266.162-.48.162h-3.594c-.245 0-.435-.066-.572-.197a.621.621 0 0 1-.205-.463c0-.114.044-.265.132-.453a1.62 1.62 0 0 1 .288-.444c.433-.436.824-.81 1.172-1.122.348-.312.597-.517.747-.615.267-.183.49-.368.667-.553.177-.185.312-.375.405-.57.093-.194.139-.384.139-.57a1.008 1.008 0 0 0-.554-.917 1.197 1.197 0 0 0-.56-.133c-.426 0-.761.182-1.005.546a2.332 2.332 0 0 0-.164.39 1.609 1.609 0 0 1-.258.488c-.096.114-.237.17-.423.17a.558.558 0 0 1-.405-.156.568.568 0 0 1-.161-.427c0-.218.05-.446.151-.683.101-.238.252-.453.452-.646s.454-.349.762-.467a2.998 2.998 0 0 1 1.081-.178c.498 0 .923.076 1.274.228a1.916 1.916 0 0 1 1.004 1.032 1.984 1.984 0 0 1-.156 1.794c-.2.32-.405.572-.613.754-.208.182-.558.468-1.048.857-.49.39-.826.691-1.008.906a2.703 2.703 0 0 0-.24.309z"/></svg>';
        const au = "subscript";

        class cu extends vd {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add(au, i => {
                    const n = t.commands.get(au), o = new nd(i);
                    return o.set({
                        label: e("i"),
                        icon: su,
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isOn", "isEnabled").to(n, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute(au)), o
                })
            }
        }

        const lu = "superscript";

        class du extends vd {
            static get pluginName() {
                return "SuperscriptEditing"
            }

            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {allowAttributes: lu}), t.model.schema.setAttributeProperties(lu, {
                    isFormatting: !0,
                    copyOnEnter: !0
                }), t.conversion.attributeToElement({
                    model: lu,
                    view: "sup",
                    upcastAlso: [{styles: {"vertical-align": "super"}}]
                }), t.commands.add(lu, new Nh(t, lu))
            }
        }

        var hu = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.677 8.678h2.549c.254 0 .447.05.58.152a.49.49 0 0 1 .201.413.54.54 0 0 1-.159.393c-.105.108-.266.162-.48.162h-3.594c-.245 0-.435-.066-.572-.197a.621.621 0 0 1-.205-.463c0-.114.044-.265.132-.453a1.62 1.62 0 0 1 .288-.444c.433-.436.824-.81 1.172-1.122.348-.312.597-.517.747-.615.267-.183.49-.368.667-.553.177-.185.312-.375.405-.57.093-.194.139-.384.139-.57a1.008 1.008 0 0 0-.554-.917 1.197 1.197 0 0 0-.56-.133c-.426 0-.761.182-1.005.546a2.332 2.332 0 0 0-.164.39 1.609 1.609 0 0 1-.258.488c-.096.114-.237.17-.423.17a.558.558 0 0 1-.405-.156.568.568 0 0 1-.161-.427c0-.218.05-.446.151-.683.101-.238.252-.453.452-.646s.454-.349.762-.467a2.998 2.998 0 0 1 1.081-.178c.498 0 .923.076 1.274.228a1.916 1.916 0 0 1 1.004 1.032 1.984 1.984 0 0 1-.156 1.794c-.2.32-.405.572-.613.754-.208.182-.558.468-1.048.857-.49.39-.826.691-1.008.906a2.703 2.703 0 0 0-.24.309zM7.03 10.349l3.818-3.819a.8.8 0 1 1 1.132 1.132L8.16 11.48l3.819 3.818a.8.8 0 1 1-1.132 1.132L7.03 12.61l-3.818 3.82a.8.8 0 1 1-1.132-1.132L5.9 11.48 2.08 7.662A.8.8 0 1 1 3.212 6.53l3.818 3.82z"/></svg>';
        const uu = "superscript";

        class fu extends vd {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add(uu, i => {
                    const n = t.commands.get(uu), o = new nd(i);
                    return o.set({
                        label: e("j"),
                        icon: hu,
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isOn", "isEnabled").to(n, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute(uu)), o
                })
            }
        }

        function gu(t) {
            const e = t.next();
            return e.done ? null : e.value
        }

        class mu extends Cd {
            refresh() {
                this.value = this._getValue(), this.isEnabled = this._checkEnabled()
            }

            execute(t = {}) {
                const e = this.editor.model, i = e.schema, n = e.document.selection,
                    o = Array.from(n.getSelectedBlocks()), r = void 0 === t.forceValue ? !this.value : t.forceValue;
                e.change(t => {
                    if (r) {
                        const e = o.filter(t => pu(t) || wu(i, t));
                        this._applyQuote(t, e)
                    } else this._removeQuote(t, o.filter(pu))
                })
            }

            _getValue() {
                const t = gu(this.editor.model.document.selection.getSelectedBlocks());
                return !(!t || !pu(t))
            }

            _checkEnabled() {
                if (this.value) return !0;
                const t = this.editor.model.document.selection, e = this.editor.model.schema,
                    i = gu(t.getSelectedBlocks());
                return !!i && wu(e, i)
            }

            _removeQuote(t, e) {
                bu(t, e).reverse().forEach(e => {
                    if (e.start.isAtStart && e.end.isAtEnd) return void t.unwrap(e.start.parent);
                    if (e.start.isAtStart) {
                        const i = t.createPositionBefore(e.start.parent);
                        return void t.move(e, i)
                    }
                    e.end.isAtEnd || t.split(e.end);
                    const i = t.createPositionAfter(e.end.parent);
                    t.move(e, i)
                })
            }

            _applyQuote(t, e) {
                const i = [];
                bu(t, e).reverse().forEach(e => {
                    let n = pu(e.start);
                    n || (n = t.createElement("blockQuote"), t.wrap(e, n)), i.push(n)
                }), i.reverse().reduce((e, i) => e.nextSibling == i ? (t.merge(t.createPositionAfter(e)), e) : i)
            }
        }

        function pu(t) {
            return "blockQuote" == t.parent.name ? t.parent : null
        }

        function bu(t, e) {
            let i, n = 0;
            const o = [];
            for (; n < e.length;) {
                const r = e[n], s = e[n + 1];
                i || (i = t.createPositionBefore(r)), s && r.nextSibling == s || (o.push(t.createRange(i, t.createPositionAfter(r))), i = null), n++
            }
            return o
        }

        function wu(t, e) {
            const i = t.checkChild(e.parent, "blockQuote"), n = t.checkChild(["$root", "blockQuote"], e);
            return i && n
        }

        class ku extends vd {
            static get pluginName() {
                return "BlockQuoteEditing"
            }

            init() {
                const t = this.editor, e = t.model.schema;
                t.commands.add("blockQuote", new mu(t)), e.register("blockQuote", {
                    allowWhere: "$block",
                    allowContentOf: "$root"
                }), e.addChildCheck((t, e) => {
                    if (t.endsWith("blockQuote") && "blockQuote" == e.name) return !1
                }), t.conversion.elementToElement({
                    model: "blockQuote",
                    view: "blockquote"
                }), t.model.document.registerPostFixer(i => {
                    const n = t.model.document.differ.getChanges();
                    for (const t of n) if ("insert" == t.type) {
                        const n = t.position.nodeAfter;
                        if (!n) continue;
                        if (n.is("blockQuote") && n.isEmpty) return i.remove(n), !0;
                        if (n.is("blockQuote") && !e.checkChild(t.position, n)) return i.unwrap(n), !0;
                        if (n.is("element")) {
                            const t = i.createRangeIn(n);
                            for (const n of t.getItems()) if (n.is("blockQuote") && !e.checkChild(i.createPositionBefore(n), n)) return i.unwrap(n), !0
                        }
                    } else if ("remove" == t.type) {
                        const e = t.position.parent;
                        if (e.is("blockQuote") && e.isEmpty) return i.remove(e), !0
                    }
                    return !1
                })
            }

            afterInit() {
                const t = this.editor.commands.get("blockQuote");
                this.listenTo(this.editor.editing.view.document, "enter", (e, i) => {
                    const n = this.editor.model.document, o = n.selection.getLastPosition().parent;
                    n.selection.isCollapsed && o.isEmpty && t.value && (this.editor.execute("blockQuote"), this.editor.editing.view.scrollToTheSelection(), i.preventDefault(), e.stop())
                })
            }
        }

        var _u = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>';
        i(46);

        class vu extends vd {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add("blockQuote", i => {
                    const n = t.commands.get("blockQuote"), o = new nd(i);
                    return o.set({
                        label: e("k"),
                        icon: _u,
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isOn", "isEnabled").to(n, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute("blockQuote")), o
                })
            }
        }

        var yu = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>';

        class xu extends vd {
            static get pluginName() {
                return "CKFinderUI"
            }

            init() {
                const t = this.editor, e = t.ui.componentFactory, i = t.t;
                e.add("ckfinder", e => {
                    const n = t.commands.get("ckfinder"), o = new nd(e);
                    return o.set({
                        label: i("l"),
                        icon: yu,
                        tooltip: !0
                    }), o.bind("isEnabled").to(n), o.on("execute", () => {
                        t.execute("ckfinder"), t.editing.view.focus()
                    }), o
                })
            }
        }

        class Au extends hr {
            constructor(t) {
                super(t), this._observedElements = new Set
            }

            observe(t, e) {
                this.document.getRoot(e).on("change:children", (e, i) => {
                    this.view.once("render", () => this._updateObservedElements(t, i))
                })
            }

            _updateObservedElements(t, e) {
                if (!e.is("element") || e.is("attributeElement")) return;
                const i = this.view.domConverter.mapViewToDom(e);
                if (i) {
                    for (const t of i.querySelectorAll("img")) this._observedElements.has(t) || (this.listenTo(t, "load", (t, e) => this._fireEvents(e)), this._observedElements.add(t));
                    for (const e of this._observedElements) t.contains(e) || (this.stopListening(e), this._observedElements.delete(e))
                }
            }

            _fireEvents(t) {
                this.isEnabled && (this.document.fire("layoutChanged"), this.document.fire("imageLoaded", t))
            }

            destroy() {
                this._observedElements.clear(), super.destroy()
            }
        }

        function Tu(t) {
            return i => {
                i.on(`attribute:${t}:image`, e)
            };

            function e(t, e, i) {
                if (!i.consumable.consume(e.item, t.name)) return;
                const n = i.writer, o = i.mapper.toViewElement(e.item).getChild(0);
                null !== e.attributeNewValue ? n.setAttribute(e.attributeKey, e.attributeNewValue, o) : n.removeAttribute(e.attributeKey, o)
            }
        }

        class Cu {
            constructor() {
                this._stack = []
            }

            add(t, e) {
                const i = this._stack, n = i[0];
                this._insertDescriptor(t);
                const o = i[0];
                n === o || Pu(n, o) || this.fire("change:top", {oldDescriptor: n, newDescriptor: o, writer: e})
            }

            remove(t, e) {
                const i = this._stack, n = i[0];
                this._removeDescriptor(t);
                const o = i[0];
                n === o || Pu(n, o) || this.fire("change:top", {oldDescriptor: n, newDescriptor: o, writer: e})
            }

            _insertDescriptor(t) {
                const e = this._stack, i = e.findIndex(e => e.id === t.id);
                if (Pu(t, e[i])) return;
                i > -1 && e.splice(i, 1);
                let n = 0;
                for (; e[n] && Su(e[n], t);) n++;
                e.splice(n, 0, t)
            }

            _removeDescriptor(t) {
                const e = this._stack, i = e.findIndex(e => e.id === t);
                i > -1 && e.splice(i, 1)
            }
        }

        function Pu(t, e) {
            return t && e && t.priority == e.priority && Eu(t.classes) == Eu(e.classes)
        }

        function Su(t, e) {
            return t.priority > e.priority || !(t.priority < e.priority) && Eu(t.classes) > Eu(e.classes)
        }

        function Eu(t) {
            return Array.isArray(t) ? t.sort().join(",") : t
        }

        cn(Cu, tn);
        var Mu = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>';
        const Iu = "ck-widget", Nu = "ck-widget_selected";

        function Ou(t) {
            return !!t.is("element") && !!t.getCustomProperty("widget")
        }

        function Ru(t, e, i = {}) {
            return go.isEdge || e.setAttribute("contenteditable", "false", t), e.addClass(Iu, t), e.setCustomProperty("widget", !0, t), t.getFillerOffset = zu, i.label && function (t, e, i) {
                i.setCustomProperty("widgetLabel", e, t)
            }(t, i.label, e), i.hasSelectionHandle && function (t, e) {
                const i = e.createUIElement("div", {class: "ck ck-widget__selection-handle"}, function (t) {
                    const e = this.toDomElement(t), i = new ed;
                    return i.set("content", Mu), i.render(), e.appendChild(i.element), e
                });
                e.insert(e.createPositionAt(t, 0), i), e.addClass(["ck-widget_with-selection-handle"], t)
            }(t, e), function (t, e, i, n) {
                const o = new Cu;
                o.on("change:top", (e, o) => {
                    o.oldDescriptor && n(t, o.oldDescriptor, o.writer), o.newDescriptor && i(t, o.newDescriptor, o.writer)
                }), e.setCustomProperty("addHighlight", (t, e, i) => o.add(e, i), t), e.setCustomProperty("removeHighlight", (t, e, i) => o.remove(e, i), t)
            }(t, e, (t, e, i) => i.addClass(n(e.classes), t), (t, e, i) => i.removeClass(n(e.classes), t)), t;

            function n(t) {
                return Array.isArray(t) ? t : [t]
            }
        }

        function Du(t) {
            const e = t.getCustomProperty("widgetLabel");
            return e ? "function" == typeof e ? e() : e : ""
        }

        function Lu(t, e) {
            return e.addClass(["ck-editor__editable", "ck-editor__nested-editable"], t), go.isEdge || (e.setAttribute("contenteditable", t.isReadOnly ? "false" : "true", t), t.on("change:isReadOnly", (i, n, o) => {
                e.setAttribute("contenteditable", o ? "false" : "true", t)
            })), t.on("change:isFocused", (i, n, o) => {
                o ? e.addClass("ck-editor__nested-editable_focused", t) : e.removeClass("ck-editor__nested-editable_focused", t)
            }), t
        }

        function ju(t, e) {
            const i = t.getSelectedElement();
            if (i && e.schema.isBlock(i)) return e.createPositionAfter(i);
            const n = t.getSelectedBlocks().next().value;
            if (n) {
                if (n.isEmpty) return e.createPositionAt(n, 0);
                const i = e.createPositionAfter(n);
                return t.focus.isTouching(i) ? i : e.createPositionBefore(n)
            }
            return t.focus
        }

        function zu() {
            return null
        }

        function Vu(t) {
            const e = t.getSelectedElement();
            return e && function (t) {
                return !!t.getCustomProperty("image") && Ou(t)
            }(e) ? e : null
        }

        function Bu(t) {
            return !!t && t.is("image")
        }

        function Fu(t, e, i = {}) {
            const n = t.createElement("image", i), o = ju(e.document.selection, e);
            e.insertContent(n, o), n.parent && t.setSelection(n, "on")
        }

        function Hu(t) {
            const e = t.schema, i = t.document.selection;
            return function (t, e, i) {
                const n = function (t, e) {
                    const i = ju(t, e).parent;
                    if (i.isEmpty && !i.is("$root")) return i.parent;
                    return i
                }(t, i);
                return e.checkChild(n, "image")
            }(i, e, t) && !function (t, e) {
                const i = t.getSelectedElement();
                return i && e.isObject(i)
            }(i, e) && function (t) {
                return [...t.focus.getAncestors()].every(t => !t.is("image"))
            }(i)
        }

        class Uu extends Cd {
            refresh() {
                this.isEnabled = Hu(this.editor.model)
            }

            execute(t) {
                const e = this.editor.model;
                e.change(i => {
                    const n = Array.isArray(t.source) ? t.source : [t.source];
                    for (const t of n) Fu(i, e, {src: t})
                })
            }
        }

        class Wu extends vd {
            static get pluginName() {
                return "ImageEditing"
            }

            init() {
                const t = this.editor, e = t.model.schema, i = t.t, n = t.conversion;
                t.editing.view.addObserver(Au), e.register("image", {
                    isObject: !0,
                    isBlock: !0,
                    allowWhere: "$block",
                    allowAttributes: ["alt", "src", "srcset"]
                }), n.for("dataDowncast").elementToElement({
                    model: "image",
                    view: (t, e) => qu(e)
                }), n.for("editingDowncast").elementToElement({
                    model: "image", view: (t, e) => (function (t, e, i) {
                        return e.setCustomProperty("image", !0, t), Ru(t, e, {
                            label: function () {
                                const e = t.getChild(0).getAttribute("alt");
                                return e ? `${e} ${i}` : i
                            }
                        })
                    })(qu(e), e, i("o"))
                }), n.for("downcast").add(Tu("src")).add(Tu("alt")).add(function () {
                    return e => {
                        e.on("attribute:srcset:image", t)
                    };

                    function t(t, e, i) {
                        if (!i.consumable.consume(e.item, t.name)) return;
                        const n = i.writer, o = i.mapper.toViewElement(e.item).getChild(0);
                        if (null === e.attributeNewValue) {
                            const t = e.attributeOldValue;
                            t.data && (n.removeAttribute("srcset", o), n.removeAttribute("sizes", o), t.width && n.removeAttribute("width", o))
                        } else {
                            const t = e.attributeNewValue;
                            t.data && (n.setAttribute("srcset", t.data, o), n.setAttribute("sizes", "100vw", o), t.width && n.setAttribute("width", t.width, o))
                        }
                    }
                }()), n.for("upcast").elementToElement({
                    view: {name: "img", attributes: {src: !0}},
                    model: (t, e) => e.createElement("image", {src: t.getAttribute("src")})
                }).attributeToAttribute({
                    view: {name: "img", key: "alt"},
                    model: "alt"
                }).attributeToAttribute({
                    view: {name: "img", key: "srcset"}, model: {
                        key: "srcset", value: t => {
                            const e = {data: t.getAttribute("srcset")};
                            return t.hasAttribute("width") && (e.width = t.getAttribute("width")), e
                        }
                    }
                }).add(function () {
                    return e => {
                        e.on("element:figure", t)
                    };

                    function t(t, e, i) {
                        if (!i.consumable.test(e.viewItem, {name: !0, classes: "image"})) return;
                        const n = Array.from(e.viewItem.getChildren()).find(t => t.is("img"));
                        if (!n || !n.hasAttribute("src") || !i.consumable.test(n, {name: !0})) return;
                        const o = i.convertItem(n, e.modelCursor), r = gu(o.modelRange.getItems());
                        r && (i.convertChildren(e.viewItem, i.writer.createPositionAt(r, 0)), e.modelRange = o.modelRange, e.modelCursor = o.modelCursor)
                    }
                }()), t.commands.add("imageInsert", new Uu(t))
            }
        }

        function qu(t) {
            const e = t.createEmptyElement("img"), i = t.createContainerElement("figure", {class: "image"});
            return t.insert(t.createPositionAt(i, 0), e), i
        }

        function $u(t, e, i) {
            return i.createRange(Yu(t, e, !0, i), Yu(t, e, !1, i))
        }

        function Yu(t, e, i, n) {
            let o = t.textNode || (i ? t.nodeBefore : t.nodeAfter), r = null;
            for (; o && o.getAttribute("linkHref") == e;) r = o, o = i ? o.previousSibling : o.nextSibling;
            return r ? n.createPositionAt(r, i ? "before" : "after") : t
        }

        class Gu extends Cd {
            constructor(t) {
                super(t), this.manualDecorators = new oo
            }

            restoreManualDecoratorStates() {
                for (const t of this.manualDecorators) t.value = this._getDecoratorStateFromModel(t.id)
            }

            refresh() {
                const t = this.editor.model, e = t.document;
                this.value = e.selection.getAttribute("linkHref");
                for (const t of this.manualDecorators) t.value = this._getDecoratorStateFromModel(t.id);
                this.isEnabled = t.schema.checkAttributeInSelection(e.selection, "linkHref")
            }

            execute(t, e = {}) {
                const i = this.editor.model, n = i.document.selection, o = [], r = [];
                for (const t in e) e[t] ? o.push(t) : r.push(t);
                i.change(e => {
                    if (n.isCollapsed) {
                        const s = n.getFirstPosition();
                        if (n.hasAttribute("linkHref")) {
                            const a = $u(s, n.getAttribute("linkHref"), i);
                            e.setAttribute("linkHref", t, a), o.forEach(t => {
                                e.setAttribute(t, !0, a)
                            }), r.forEach(t => {
                                e.removeAttribute(t, a)
                            }), e.setSelection(a)
                        } else if ("" !== t) {
                            const r = js(n.getAttributes());
                            r.set("linkHref", t), o.forEach(t => {
                                r.set(t, !0)
                            });
                            const a = e.createText(t, r);
                            i.insertContent(a, s), e.setSelection(e.createRangeOn(a))
                        }
                    } else {
                        const s = i.schema.getValidRanges(n.getRanges(), "linkHref");
                        for (const i of s) e.setAttribute("linkHref", t, i), o.forEach(t => {
                            e.setAttribute(t, !0, i)
                        }), r.forEach(t => {
                            e.removeAttribute(t, i)
                        })
                    }
                })
            }

            _getDecoratorStateFromModel(t) {
                return this.editor.model.document.selection.getAttribute(t) || !1
            }
        }

        class Qu extends Cd {
            refresh() {
                this.isEnabled = this.editor.model.document.selection.hasAttribute("linkHref")
            }

            execute() {
                const t = this.editor, e = this.editor.model, i = e.document.selection, n = t.commands.get("link");
                e.change(t => {
                    const o = i.isCollapsed ? [$u(i.getFirstPosition(), i.getAttribute("linkHref"), e)] : i.getRanges();
                    for (const e of o) if (t.removeAttribute("linkHref", e), n) for (const i of n.manualDecorators) t.removeAttribute(i.id, e)
                })
            }
        }

        var Ku = function (t, e, i) {
            var n = -1, o = t.length;
            e < 0 && (e = -e > o ? 0 : o + e), (i = i > o ? o : i) < 0 && (i += o), o = e > i ? 0 : i - e >>> 0, e >>>= 0;
            for (var r = Array(o); ++n < o;) r[n] = t[n + e];
            return r
        };
        var Ju = function (t, e, i) {
            var n = t.length;
            return i = void 0 === i ? n : i, !e && i >= n ? t : Ku(t, e, i)
        }, Zu = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        var Xu = function (t) {
            return Zu.test(t)
        };
        var tf = function (t) {
                return t.split("")
            }, ef = "[\\ud800-\\udfff]", nf = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            of = "\\ud83c[\\udffb-\\udfff]", rf = "[^\\ud800-\\udfff]", sf = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            af = "[\\ud800-\\udbff][\\udc00-\\udfff]", cf = "(?:" + nf + "|" + of + ")" + "?",
            lf = "[\\ufe0e\\ufe0f]?" + cf + ("(?:\\u200d(?:" + [rf, sf, af].join("|") + ")[\\ufe0e\\ufe0f]?" + cf + ")*"),
            df = "(?:" + [rf + nf + "?", nf, sf, af, ef].join("|") + ")",
            hf = RegExp(of + "(?=" + of + ")|" + df + lf, "g");
        var uf = function (t) {
            return t.match(hf) || []
        };
        var ff = function (t) {
            return Xu(t) ? uf(t) : tf(t)
        };
        var gf = function (t, e) {
            for (var i = -1, n = null == t ? 0 : t.length, o = Array(n); ++i < n;) o[i] = e(t[i], i, t);
            return o
        }, mf = 1 / 0, pf = o ? o.prototype : void 0, bf = pf ? pf.toString : void 0;
        var wf = function t(e) {
            if ("string" == typeof e) return e;
            if (qt(e)) return gf(e, t) + "";
            if (ns(e)) return bf ? bf.call(e) : "";
            var i = e + "";
            return "0" == i && 1 / e == -mf ? "-0" : i
        };
        var kf = function (t) {
            return null == t ? "" : wf(t)
        };
        var _f = function (t) {
            return function (e) {
                e = kf(e);
                var i = Xu(e) ? ff(e) : void 0, n = i ? i[0] : e.charAt(0), o = i ? Ju(i, 1).join("") : e.slice(1);
                return n[t]() + o
            }
        }("toUpperCase");
        const vf = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,
            yf = /^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;

        function xf(t, e) {
            const i = e.createAttributeElement("a", {href: t}, {priority: 5});
            return e.setCustomProperty("link", !0, i), i
        }

        function Af(t) {
            return function (t) {
                return t.replace(vf, "").match(yf)
            }(t = String(t)) ? t : "#"
        }

        class Tf {
            constructor() {
                this._definitions = new Set
            }

            get length() {
                return this._definitions.size
            }

            add(t) {
                Array.isArray(t) ? t.forEach(t => this._definitions.add(t)) : this._definitions.add(t)
            }

            getDispatcher() {
                return t => {
                    t.on("attribute:linkHref", (t, e, i) => {
                        if (!i.consumable.test(e.item, "attribute:linkHref")) return;
                        const n = i.writer, o = n.document.selection;
                        for (const t of this._definitions) {
                            const r = n.createAttributeElement("a", t.attributes, {priority: 5});
                            n.setCustomProperty("link", !0, r), t.callback(e.attributeNewValue) ? e.item.is("selection") ? n.wrap(o.getFirstRange(), r) : n.wrap(i.mapper.toViewRange(e.range), r) : n.unwrap(i.mapper.toViewRange(e.range), r)
                        }
                    }, {priority: "high"})
                }
            }
        }

        class Cf {
            constructor({id: t, label: e, attributes: i}) {
                this.id = t, this.set("value"), this.label = e, this.attributes = i
            }
        }

        cn(Cf, Fn);

        class Pf {
            constructor(t, e, i) {
                this.model = t, this.attribute = i, this._modelSelection = t.document.selection, this._overrideUid = null, this._isNextGravityRestorationSkipped = !1, e.listenTo(this._modelSelection, "change:range", (t, e) => {
                    this._isNextGravityRestorationSkipped ? this._isNextGravityRestorationSkipped = !1 : this._isGravityOverridden && (!e.directChange && Sf(this._modelSelection.getFirstPosition(), i) || this._restoreGravity())
                })
            }

            handleForwardMovement(t, e) {
                const i = this.attribute;
                if (!(this._isGravityOverridden || t.isAtStart && this._hasSelectionAttribute)) return If(t, i) && this._hasSelectionAttribute ? (this._preventCaretMovement(e), this._removeSelectionAttribute(), !0) : Ef(t, i) ? (this._preventCaretMovement(e), this._overrideGravity(), !0) : Mf(t, i) && this._hasSelectionAttribute ? (this._preventCaretMovement(e), this._overrideGravity(), !0) : void 0
            }

            handleBackwardMovement(t, e) {
                const i = this.attribute;
                return this._isGravityOverridden ? If(t, i) && this._hasSelectionAttribute ? (this._preventCaretMovement(e), this._restoreGravity(), this._removeSelectionAttribute(), !0) : (this._preventCaretMovement(e), this._restoreGravity(), t.isAtStart && this._removeSelectionAttribute(), !0) : If(t, i) && !this._hasSelectionAttribute ? (this._preventCaretMovement(e), this._setSelectionAttributeFromTheNodeBefore(t), !0) : t.isAtEnd && Mf(t, i) ? this._hasSelectionAttribute ? void (Nf(t, i) && (this._skipNextAutomaticGravityRestoration(), this._overrideGravity())) : (this._preventCaretMovement(e), this._setSelectionAttributeFromTheNodeBefore(t), !0) : t.isAtStart ? this._hasSelectionAttribute ? (this._removeSelectionAttribute(), this._preventCaretMovement(e), !0) : void 0 : void (Nf(t, i) && (this._skipNextAutomaticGravityRestoration(), this._overrideGravity()))
            }

            get _isGravityOverridden() {
                return !!this._overrideUid
            }

            get _hasSelectionAttribute() {
                return this._modelSelection.hasAttribute(this.attribute)
            }

            _overrideGravity() {
                this._overrideUid = this.model.change(t => t.overrideSelectionGravity())
            }

            _restoreGravity() {
                this.model.change(t => {
                    t.restoreSelectionGravity(this._overrideUid), this._overrideUid = null
                })
            }

            _preventCaretMovement(t) {
                t.preventDefault()
            }

            _removeSelectionAttribute() {
                this.model.change(t => {
                    t.removeSelectionAttribute(this.attribute)
                })
            }

            _setSelectionAttributeFromTheNodeBefore(t) {
                const e = this.attribute;
                this.model.change(i => {
                    i.setSelectionAttribute(this.attribute, t.nodeBefore.getAttribute(e))
                })
            }

            _skipNextAutomaticGravityRestoration() {
                this._isNextGravityRestorationSkipped = !0
            }
        }

        function Sf(t, e) {
            return Ef(t, e) || Mf(t, e)
        }

        function Ef(t, e) {
            const {nodeBefore: i, nodeAfter: n} = t, o = !!i && i.hasAttribute(e);
            return !!n && n.hasAttribute(e) && (!o || i.getAttribute(e) !== n.getAttribute(e))
        }

        function Mf(t, e) {
            const {nodeBefore: i, nodeAfter: n} = t, o = !!i && i.hasAttribute(e), r = !!n && n.hasAttribute(e);
            return o && (!r || i.getAttribute(e) !== n.getAttribute(e))
        }

        function If(t, e) {
            const {nodeBefore: i, nodeAfter: n} = t, o = !!i && i.hasAttribute(e);
            if (!!n && n.hasAttribute(e) && o) return n.getAttribute(e) !== i.getAttribute(e)
        }

        function Nf(t, e) {
            return Sf(t.getShiftedBy(-1), e)
        }

        i(48);
        const Of = "ck-link_selected", Rf = "automatic", Df = "manual", Lf = /^(https?:)?\/\//;

        class jf extends vd {
            static get pluginName() {
                return "LinkEditing"
            }

            constructor(t) {
                super(t), t.config.define("link", {addTargetToExternalLinks: !1})
            }

            init() {
                const t = this.editor, e = t.locale;
                t.model.schema.extend("$text", {allowAttributes: "linkHref"}), t.conversion.for("dataDowncast").attributeToElement({
                    model: "linkHref",
                    view: xf
                }), t.conversion.for("editingDowncast").attributeToElement({
                    model: "linkHref",
                    view: (t, e) => xf(Af(t), e)
                }), t.conversion.for("upcast").elementToAttribute({
                    view: {name: "a", attributes: {href: !0}},
                    model: {key: "linkHref", value: t => t.getAttribute("href")}
                }), t.commands.add("link", new Gu(t)), t.commands.add("unlink", new Qu(t));
                const i = function (t, e) {
                    const i = {"Open in a new tab": t("co"), Downloadable: t("cp")};
                    return e.forEach(t => (t.label && i[t.label] && (t.label = i[t.label]), t)), e
                }(t.t, function (t) {
                    const e = [];
                    if (t) for (const [i, n] of Object.entries(t)) {
                        const t = Object.assign({}, n, {id: `link${_f(i)}`});
                        e.push(t)
                    }
                    return e
                }(t.config.get("link.decorators")));
                this._enableAutomaticDecorators(i.filter(t => t.mode === Rf)), this._enableManualDecorators(i.filter(t => t.mode === Df)), function ({view: t, model: e, emitter: i, attribute: n, locale: o}) {
                    const r = new Pf(e, i, n), s = e.document.selection;
                    i.listenTo(t.document, "keydown", (t, e) => {
                        if (!s.isCollapsed) return;
                        if (e.shiftKey || e.altKey || e.ctrlKey) return;
                        const i = e.keyCode == bo.arrowright, n = e.keyCode == bo.arrowleft;
                        if (!i && !n) return;
                        const a = s.getFirstPosition(), c = o.contentLanguageDirection;
                        let l;
                        (l = "ltr" === c && i || "rtl" === c && n ? r.handleForwardMovement(a, e) : r.handleBackwardMovement(a, e)) && t.stop()
                    }, {priority: Ji.get("high") + 1})
                }({
                    view: t.editing.view,
                    model: t.model,
                    emitter: this,
                    attribute: "linkHref",
                    locale: e
                }), this._setupLinkHighlight()
            }

            _enableAutomaticDecorators(t) {
                const e = this.editor, i = new Tf;
                e.config.get("link.addTargetToExternalLinks") && i.add({
                    id: "linkIsExternal",
                    mode: Rf,
                    callback: t => Lf.test(t),
                    attributes: {target: "_blank", rel: "noopener noreferrer"}
                }), i.add(t), i.length && e.conversion.for("downcast").add(i.getDispatcher())
            }

            _enableManualDecorators(t) {
                if (!t.length) return;
                const e = this.editor, i = e.commands.get("link").manualDecorators;
                t.forEach(t => {
                    e.model.schema.extend("$text", {allowAttributes: t.id}), i.add(new Cf(t)), e.conversion.for("downcast").attributeToElement({
                        model: t.id,
                        view: (e, n) => {
                            if (e) {
                                const e = i.get(t.id).attributes, o = n.createAttributeElement("a", e, {priority: 5});
                                return n.setCustomProperty("link", !0, o), o
                            }
                        }
                    }), e.conversion.for("upcast").elementToAttribute({
                        view: {
                            name: "a",
                            attributes: i.get(t.id).attributes
                        }, model: {key: t.id}
                    })
                })
            }

            _setupLinkHighlight() {
                const t = this.editor, e = t.editing.view, i = new Set;
                e.document.registerPostFixer(e => {
                    const n = t.model.document.selection;
                    let o = !1;
                    if (n.hasAttribute("linkHref")) {
                        const r = $u(n.getFirstPosition(), n.getAttribute("linkHref"), t.model),
                            s = t.editing.mapper.toViewRange(r);
                        for (const t of s.getItems()) t.is("a") && !t.hasClass(Of) && (e.addClass(Of, t), i.add(t), o = !0)
                    }
                    return o
                }), t.conversion.for("editingDowncast").add(t => {
                    function n() {
                        e.change(t => {
                            for (const e of i.values()) t.removeClass(Of, e), i.delete(e)
                        })
                    }

                    t.on("insert", n, {priority: "highest"}), t.on("remove", n, {priority: "highest"}), t.on("attribute", n, {priority: "highest"}), t.on("selection", n, {priority: "highest"})
                })
            }
        }

        class zf extends vd {
            static get pluginName() {
                return "Notification"
            }

            init() {
                this.on("show:warning", (t, e) => {
                    window.alert(e.message)
                }, {priority: "lowest"})
            }

            showSuccess(t, e = {}) {
                this._showNotification({message: t, type: "success", namespace: e.namespace, title: e.title})
            }

            showInfo(t, e = {}) {
                this._showNotification({message: t, type: "info", namespace: e.namespace, title: e.title})
            }

            showWarning(t, e = {}) {
                this._showNotification({message: t, type: "warning", namespace: e.namespace, title: e.title})
            }

            _showNotification(t) {
                const e = `show:${t.type}` + (t.namespace ? `:${t.namespace}` : "");
                this.fire(e, {message: t.message, type: t.type, title: t.title || ""})
            }
        }

        class Vf extends Cd {
            constructor(t) {
                super(t), this.stopListening(this.editor.model.document, "change"), this.listenTo(this.editor.model.document, "change", () => this.refresh(), {priority: "low"})
            }

            refresh() {
                const t = this.editor.commands.get("imageInsert"), e = this.editor.commands.get("link");
                this.isEnabled = t.isEnabled || e.isEnabled
            }

            execute() {
                const t = this.editor, e = this.editor.config.get("ckfinder.openerMethod") || "modal";
                if ("popup" != e && "modal" != e) throw new Yi.b('ckfinder-unknown-openerMethod: The openerMethod config option must by "popup" or "modal".', t);
                const i = this.editor.config.get("ckfinder.options") || {};
                i.chooseFiles = !0;
                const n = i.onInit;
                i.language || (i.language = t.locale.uiLanguage), i.onInit = (e => {
                    n && n(e), e.on("files:choose", i => {
                        const n = i.data.files.toArray(), o = n.filter(t => !t.isImage()),
                            r = n.filter(t => t.isImage());
                        for (const e of o) t.execute("link", e.getUrl());
                        const s = [];
                        for (const t of r) {
                            const i = t.getUrl();
                            s.push(i || e.request("file:getProxyUrl", {file: t}))
                        }
                        s.length && Bf(t, s)
                    }), e.on("file:choose:resizedImage", e => {
                        const i = e.data.resizedUrl;
                        if (i) Bf(t, [i]); else {
                            const e = t.plugins.get("Notification"), i = t.locale.t;
                            e.showWarning(i("bq"), {title: i("br"), namespace: "ckfinder"})
                        }
                    })
                }), window.CKFinder[e](i)
            }
        }

        function Bf(t, e) {
            if (t.commands.get("imageInsert").isEnabled) t.execute("imageInsert", {source: e}); else {
                const e = t.plugins.get("Notification"), i = t.locale.t;
                e.showWarning(i("bs"), {title: i("bt"), namespace: "ckfinder"})
            }
        }

        class Ff extends vd {
            static get pluginName() {
                return "CKFinderEditing"
            }

            static get requires() {
                return [zf, Wu, jf]
            }

            init() {
                const t = this.editor;
                t.commands.add("ckfinder", new Vf(t))
            }
        }

        const Hf = /^data:(\S*?);base64,/;

        class Uf {
            constructor(t, e, i) {
                if (!t) throw new Yi.b("fileuploader-missing-file: File must be provided as the first argument", null);
                if (!e) throw new Yi.b("fileuploader-missing-token: Token must be provided as the second argument.", null);
                if (!i) throw new Yi.b("fileuploader-missing-api-address: Api address must be provided as the third argument.", null);
                this.file = function (t) {
                    if ("string" != typeof t) return !1;
                    const e = t.match(Hf);
                    return !(!e || !e.length)
                }(t) ? function (t, e = 512) {
                    try {
                        const i = t.match(Hf)[1], n = atob(t.replace(Hf, "")), o = [];
                        for (let t = 0; t < n.length; t += e) {
                            const i = n.slice(t, t + e), r = new Array(i.length);
                            for (let t = 0; t < i.length; t++) r[t] = i.charCodeAt(t);
                            o.push(new Uint8Array(r))
                        }
                        return new Blob(o, {type: i})
                    } catch (t) {
                        throw new Yi.b("fileuploader-decoding-image-data-error: Problem with decoding Base64 image data.", null)
                    }
                }(t) : t, this._token = e, this._apiAddress = i
            }

            onProgress(t) {
                return this.on("progress", (e, i) => t(i)), this
            }

            onError(t) {
                return this.once("error", (e, i) => t(i)), this
            }

            abort() {
                this.xhr.abort()
            }

            send() {
                return this._prepareRequest(), this._attachXHRListeners(), this._sendRequest()
            }

            _prepareRequest() {
                const t = new XMLHttpRequest;
                t.open("POST", this._apiAddress), t.setRequestHeader("Authorization", this._token.value), t.responseType = "json", this.xhr = t
            }

            _attachXHRListeners() {
                const t = this, e = this.xhr;

                function i(e) {
                    return () => t.fire("error", e)
                }

                e.addEventListener("error", i("Network Error")), e.addEventListener("abort", i("Abort")), e.upload && e.upload.addEventListener("progress", t => {
                    t.lengthComputable && this.fire("progress", {total: t.total, uploaded: t.loaded})
                }), e.addEventListener("load", () => {
                    const t = e.status, i = e.response;
                    if (t < 200 || t > 299) return this.fire("error", i.message || i.error)
                })
            }

            _sendRequest() {
                const t = new FormData, e = this.xhr;
                return t.append("file", this.file), new Promise((i, n) => {
                    e.addEventListener("load", () => {
                        const t = e.status, o = e.response;
                        return t < 200 || t > 299 ? o.message ? n(new Yi.b("fileuploader-uploading-data-failed: Uploading file failed.", this, {message: o.message})) : n(o.error) : i(o)
                    }), e.addEventListener("error", () => n(new Error("Network Error"))), e.addEventListener("abort", () => n(new Error("Abort"))), e.send(t)
                })
            }
        }

        cn(Uf, tn);
        const Wf = {refreshInterval: 36e5, autoRefresh: !0};

        class qf {
            constructor(t, e = Wf) {
                if (!t) throw new Yi.b("token-missing-token-url: A `tokenUrl` must be provided as the first constructor argument.", this);
                this.set("value", e.initValue), this._refresh = "function" == typeof t ? t : () => (function (t) {
                    return new Promise((e, i) => {
                        const n = new XMLHttpRequest;
                        n.open("GET", t), n.addEventListener("load", () => {
                            const t = n.status, o = n.response;
                            return t < 200 || t > 299 ? i(new Yi.b("token-cannot-download-new-token: Cannot download new token from the provided url.", null)) : e(o)
                        }), n.addEventListener("error", () => i(new Error("Network Error"))), n.addEventListener("abort", () => i(new Error("Abort"))), n.send()
                    })
                })(t), this._options = Object.assign({}, Wf, e)
            }

            init() {
                return new Promise((t, e) => {
                    this._options.autoRefresh && this._startRefreshing(), this.value ? t(this) : this._refreshToken().then(t).catch(e)
                })
            }

            _refreshToken() {
                return this._refresh().then(t => this.set("value", t)).then(() => this)
            }

            destroy() {
                this._stopRefreshing()
            }

            _startRefreshing() {
                this._refreshInterval = setInterval(() => this._refreshToken(), this._options.refreshInterval)
            }

            _stopRefreshing() {
                clearInterval(this._refreshInterval)
            }

            static create(t, e = Wf) {
                return new qf(t, e).init()
            }
        }

        cn(qf, Fn);
        var $f = qf;

        class Yf extends vd {
            static get pluginName() {
                return "CloudServices"
            }

            init() {
                const t = this.editor.config.get("cloudServices") || {};
                for (const e in t) this[e] = t[e];
                if (this.tokenUrl) return this.token = new Yf.Token(this.tokenUrl), this.token.init();
                this.token = null
            }
        }

        Yf.Token = $f;

        class Gf extends vd {
            static get requires() {
                return [_h, Yf]
            }

            init() {
                const t = this.editor, e = t.plugins.get(Yf), i = e.token, n = e.uploadUrl;
                i && (this._uploadGateway = new Gf._UploadGateway(i, n), t.plugins.get(_h).createUploadAdapter = (t => new Qf(this._uploadGateway, t)))
            }
        }

        class Qf {
            constructor(t, e) {
                this.uploadGateway = t, this.loader = e
            }

            upload() {
                return this.loader.file.then(t => (this.fileUploader = this.uploadGateway.upload(t), this.fileUploader.on("progress", (t, e) => {
                    this.loader.uploadTotal = e.total, this.loader.uploaded = e.uploaded
                }), this.fileUploader.send()))
            }

            abort() {
                this.fileUploader.abort()
            }
        }

        Gf._UploadGateway = class {
            constructor(t, e) {
                if (!t) throw new Yi.b("uploadgateway-missing-token: Token must be provided.", null);
                if (!e) throw new Yi.b("uploadgateway-missing-api-address: Api address must be provided.", null);
                this._token = t, this._apiAddress = e
            }

            upload(t) {
                return new Uf(t, this._token, this._apiAddress)
            }
        };

        class Kf extends Xr {
            constructor(t) {
                super(t), this.domEventType = "mousedown"
            }

            onDomEvent(t) {
                this.fire(t.type, t)
            }
        }

        i(50);
        const Jf = ko("Ctrl+A");

        class Zf extends vd {
            static get pluginName() {
                return "Widget"
            }

            init() {
                const t = this.editor.editing.view, e = t.document;
                this._previouslySelected = new Set, this.editor.editing.downcastDispatcher.on("selection", (t, e, i) => {
                    this._clearPreviouslySelectedWidgets(i.writer);
                    const n = i.writer, o = n.document.selection, r = o.getSelectedElement();
                    let s = null;
                    for (const t of o.getRanges()) for (const e of t) {
                        const t = e.item;
                        Ou(t) && !Xf(t, s) && (n.addClass(Nu, t), this._previouslySelected.add(t), s = t, t == r && n.setSelection(o.getRanges(), {
                            fake: !0,
                            label: Du(r)
                        }))
                    }
                }, {priority: "low"}), t.addObserver(Kf), this.listenTo(e, "mousedown", (...t) => this._onMousedown(...t)), this.listenTo(e, "keydown", (...t) => this._onKeydown(...t), {priority: "high"}), this.listenTo(e, "delete", (t, e) => {
                    this._handleDelete("forward" == e.direction) && (e.preventDefault(), t.stop())
                }, {priority: "high"})
            }

            _onMousedown(t, e) {
                const i = this.editor, n = i.editing.view, o = n.document;
                let r = e.target;
                if (function (t) {
                    for (; t;) {
                        if (t.is("editableElement") && !t.is("rootElement")) return !0;
                        if (Ou(t)) return !1;
                        t = t.parent
                    }
                    return !1
                }(r)) {
                    if (go.isSafari && e.domEvent.detail >= 3) {
                        const t = i.editing.mapper.toModelElement(r);
                        this.editor.model.change(i => {
                            e.preventDefault(), i.setSelection(t, "in")
                        })
                    }
                    return
                }
                if (!Ou(r) && !(r = r.findAncestor(Ou))) return;
                e.preventDefault(), o.isFocused || n.focus();
                const s = i.editing.mapper.toModelElement(r);
                this._setSelectionOverElement(s)
            }

            _onKeydown(t, e) {
                const i = e.keyCode, n = "ltr" === this.editor.locale.contentLanguageDirection,
                    o = i == bo.arrowdown || i == bo[n ? "arrowright" : "arrowleft"];
                let r = !1;
                !function (t) {
                    return t == bo.arrowright || t == bo.arrowleft || t == bo.arrowup || t == bo.arrowdown
                }(i) ? !function (t) {
                    return wo(t) == Jf
                }(e) ? i === bo.enter && (r = this._handleEnterKey(e.shiftKey)) : r = this._selectAllNestedEditableContent() || this._selectAllContent() : r = this._handleArrowKeys(o), r && (e.preventDefault(), t.stop())
            }

            _handleDelete(t) {
                if (this.editor.isReadOnly) return;
                const e = this.editor.model.document.selection;
                if (!e.isCollapsed) return;
                const i = this._getObjectElementNextToSelection(t);
                return i ? (this.editor.model.change(t => {
                    let n = e.anchor.parent;
                    for (; n.isEmpty;) {
                        const e = n;
                        n = e.parent, t.remove(e)
                    }
                    this._setSelectionOverElement(i)
                }), !0) : void 0
            }

            _handleArrowKeys(t) {
                const e = this.editor.model, i = e.schema, n = e.document.selection, o = n.getSelectedElement();
                if (o && i.isObject(o)) {
                    const o = t ? n.getLastPosition() : n.getFirstPosition(),
                        r = i.getNearestSelectionRange(o, t ? "forward" : "backward");
                    return r && e.change(t => {
                        t.setSelection(r)
                    }), !0
                }
                if (!n.isCollapsed) return;
                const r = this._getObjectElementNextToSelection(t);
                return r && i.isObject(r) ? (this._setSelectionOverElement(r), !0) : void 0
            }

            _handleEnterKey(t) {
                const e = this.editor.model, i = e.document.selection.getSelectedElement();
                if (function (t, e) {
                    return t && e.isObject(t) && !e.isInline(t)
                }(i, e.schema)) return e.change(n => {
                    let o = n.createPositionAt(i, t ? "before" : "after");
                    const r = n.createElement("paragraph");
                    if (e.schema.isBlock(i.parent)) {
                        const t = e.schema.findAllowedParent(o, r);
                        o = n.split(o, t).position
                    }
                    n.insert(r, o), n.setSelection(r, "in")
                }), !0
            }

            _selectAllNestedEditableContent() {
                const t = this.editor.model, e = t.document.selection, i = t.schema.getLimitElement(e);
                return e.getFirstRange().root != i && (t.change(t => {
                    t.setSelection(t.createRangeIn(i))
                }), !0)
            }

            _selectAllContent() {
                const t = this.editor.model, e = this.editor.editing,
                    i = e.view.document.selection.getSelectedElement();
                if (i && Ou(i)) {
                    const n = e.mapper.toModelElement(i.parent);
                    return t.change(t => {
                        t.setSelection(t.createRangeIn(n))
                    }), !0
                }
                return !1
            }

            _setSelectionOverElement(t) {
                this.editor.model.change(e => {
                    e.setSelection(e.createRangeOn(t))
                })
            }

            _getObjectElementNextToSelection(t) {
                const e = this.editor.model, i = e.schema, n = e.document.selection, o = e.createSelection(n);
                e.modifySelection(o, {direction: t ? "forward" : "backward"});
                const r = t ? o.focus.nodeBefore : o.focus.nodeAfter;
                return r && i.isObject(r) ? r : null
            }

            _clearPreviouslySelectedWidgets(t) {
                for (const e of this._previouslySelected) t.removeClass(Nu, e);
                this._previouslySelected.clear()
            }
        }

        function Xf(t, e) {
            return !!e && Array.from(t.getAncestors()).includes(e)
        }

        class tg extends Cd {
            refresh() {
                const t = this.editor.model.document.selection.getSelectedElement();
                this.isEnabled = Bu(t), Bu(t) && t.hasAttribute("alt") ? this.value = t.getAttribute("alt") : this.value = !1
            }

            execute(t) {
                const e = this.editor.model, i = e.document.selection.getSelectedElement();
                e.change(e => {
                    e.setAttribute("alt", t.newValue, i)
                })
            }
        }

        class eg extends vd {
            static get pluginName() {
                return "ImageTextAlternativeEditing"
            }

            init() {
                this.editor.commands.add("imageTextAlternative", new tg(this.editor))
            }
        }

        i(52);

        class ig extends Ll {
            constructor(t, e) {
                super(t);
                const i = `ck-input-${Ki()}`, n = `ck-status-${Ki()}`;
                this.set("label"), this.set("value"), this.set("isReadOnly", !1), this.set("errorText", null), this.set("infoText", null), this.labelView = this._createLabelView(i), this.inputView = this._createInputView(e, i, n), this.statusView = this._createStatusView(n), this.bind("_statusText").to(this, "errorText", this, "infoText", (t, e) => t || e);
                const o = this.bindTemplate;
                this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-labeled-input", o.if("isReadOnly", "ck-disabled")]},
                    children: [this.labelView, this.inputView, this.statusView]
                })
            }

            _createLabelView(t) {
                const e = new zl(this.locale);
                return e.for = t, e.bind("text").to(this, "label"), e
            }

            _createInputView(t, e, i) {
                const n = new t(this.locale, i);
                return n.id = e, n.ariaDescribedById = i, n.bind("value").to(this), n.bind("isReadOnly").to(this), n.bind("hasError").to(this, "errorText", t => !!t), n.on("input", () => {
                    this.errorText = null
                }), n
            }

            _createStatusView(t) {
                const e = new Ll(this.locale), i = this.bindTemplate;
                return e.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-labeled-input__status", i.if("errorText", "ck-labeled-input__status_error"), i.if("_statusText", "ck-hidden", t => !t)],
                        id: t,
                        role: i.if("errorText", "alert")
                    },
                    children: [{text: i.to("_statusText")}]
                }), e
            }

            select() {
                this.inputView.select()
            }

            focus() {
                this.inputView.focus()
            }
        }

        i(54);

        class ng extends Ll {
            constructor(t) {
                super(t), this.set("value"), this.set("id"), this.set("placeholder"), this.set("isReadOnly", !1), this.set("hasError", !1), this.set("ariaDescribedById");
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: "input",
                    attributes: {
                        type: "text",
                        class: ["ck", "ck-input", "ck-input-text", e.if("hasError", "ck-error")],
                        id: e.to("id"),
                        placeholder: e.to("placeholder"),
                        readonly: e.to("isReadOnly"),
                        "aria-invalid": e.if("hasError", !0),
                        "aria-describedby": e.to("ariaDescribedById")
                    },
                    on: {input: e.to("input")}
                })
            }

            render() {
                super.render();
                const t = t => {
                    this.element.value = t || 0 === t ? t : ""
                };
                t(this.value), this.on("change:value", (e, i, n) => {
                    t(n)
                })
            }

            select() {
                this.element.select()
            }

            focus() {
                this.element.focus()
            }
        }

        function og({view: t}) {
            t.listenTo(t.element, "submit", (e, i) => {
                i.preventDefault(), t.fire("submit")
            }, {useCapture: !0})
        }

        var rg = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',
            sg = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>';
        i(56);

        class ag extends Ll {
            constructor(t) {
                super(t);
                const e = this.locale.t;
                this.focusTracker = new al, this.keystrokes = new Zc, this.labeledInput = this._createLabeledInputView(), this.saveButtonView = this._createButton(e("cd"), rg, "ck-button-save"), this.saveButtonView.type = "submit", this.cancelButtonView = this._createButton(e("ce"), sg, "ck-button-cancel", "cancel"), this._focusables = new pl, this._focusCycler = new ql({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: "shift + tab", focusNext: "tab"}
                }), this.setTemplate({
                    tag: "form",
                    attributes: {class: ["ck", "ck-text-alternative-form"], tabindex: "-1"},
                    children: [this.labeledInput, this.saveButtonView, this.cancelButtonView]
                })
            }

            render() {
                super.render(), this.keystrokes.listenTo(this.element), og({view: this}), [this.labeledInput, this.saveButtonView, this.cancelButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                })
            }

            _createButton(t, e, i, n) {
                const o = new nd(this.locale);
                return o.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), o.extendTemplate({attributes: {class: i}}), n && o.delegate("execute").to(this, n), o
            }

            _createLabeledInputView() {
                const t = this.locale.t, e = new ig(this.locale, ng);
                return e.label = t("cn"), e.inputView.placeholder = t("cn"), e
            }
        }

        i(58);
        const cg = Hl("px"), lg = tr.document.body;

        class dg extends Ll {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("top", 0), this.set("left", 0), this.set("position", "arrow_nw"), this.set("isVisible", !1), this.set("withArrow", !0), this.set("class"), this.content = this.createCollection(), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-balloon-panel", e.to("position", t => `ck-balloon-panel_${t}`), e.if("isVisible", "ck-balloon-panel_visible"), e.if("withArrow", "ck-balloon-panel_with-arrow"), e.to("class")],
                        style: {top: e.to("top", cg), left: e.to("left", cg)}
                    },
                    children: this.content
                })
            }

            show() {
                this.isVisible = !0
            }

            hide() {
                this.isVisible = !1
            }

            attachTo(t) {
                this.show();
                const e = dg.defaultPositions, i = Object.assign({}, {
                    element: this.element,
                    positions: [e.southArrowNorth, e.southArrowNorthWest, e.southArrowNorthEast, e.northArrowSouth, e.northArrowSouthWest, e.northArrowSouthEast],
                    limiter: lg,
                    fitInViewport: !0
                }, t), n = dg._getOptimalPosition(i), o = parseInt(n.left), r = parseInt(n.top), s = n.name;
                Object.assign(this, {top: r, left: o, position: s})
            }

            pin(t) {
                this.unpin(), this._pinWhenIsVisibleCallback = (() => {
                    this.isVisible ? this._startPinning(t) : this._stopPinning()
                }), this._startPinning(t), this.listenTo(this, "change:isVisible", this._pinWhenIsVisibleCallback)
            }

            unpin() {
                this._pinWhenIsVisibleCallback && (this._stopPinning(), this.stopListening(this, "change:isVisible", this._pinWhenIsVisibleCallback), this._pinWhenIsVisibleCallback = null, this.hide())
            }

            _startPinning(t) {
                this.attachTo(t);
                const e = hg(t.target), i = t.limiter ? hg(t.limiter) : lg;
                this.listenTo(tr.document, "scroll", (n, o) => {
                    const r = o.target, s = e && r.contains(e), a = i && r.contains(i);
                    !s && !a && e && i || this.attachTo(t)
                }, {useCapture: !0}), this.listenTo(tr.window, "resize", () => {
                    this.attachTo(t)
                })
            }

            _stopPinning() {
                this.stopListening(tr.document, "scroll"), this.stopListening(tr.window, "resize")
            }
        }

        function hg(t) {
            return Wi(t) ? t : _s(t) ? t.commonAncestorContainer : "function" == typeof t ? hg(t()) : null
        }

        function ug(t, e) {
            return t.top - e.height - dg.arrowVerticalOffset
        }

        function fg(t) {
            return t.bottom + dg.arrowVerticalOffset
        }

        dg.arrowHorizontalOffset = 25, dg.arrowVerticalOffset = 10, dg._getOptimalPosition = Jl, dg.defaultPositions = {
            northArrowSouth: (t, e) => ({top: ug(t, e), left: t.left + t.width / 2 - e.width / 2, name: "arrow_s"}),
            northArrowSouthEast: (t, e) => ({
                top: ug(t, e),
                left: t.left + t.width / 2 - e.width + dg.arrowHorizontalOffset,
                name: "arrow_se"
            }),
            northArrowSouthWest: (t, e) => ({
                top: ug(t, e),
                left: t.left + t.width / 2 - dg.arrowHorizontalOffset,
                name: "arrow_sw"
            }),
            northWestArrowSouth: (t, e) => ({top: ug(t, e), left: t.left - e.width / 2, name: "arrow_s"}),
            northWestArrowSouthWest: (t, e) => ({
                top: ug(t, e),
                left: t.left - dg.arrowHorizontalOffset,
                name: "arrow_sw"
            }),
            northWestArrowSouthEast: (t, e) => ({
                top: ug(t, e),
                left: t.left - e.width + dg.arrowHorizontalOffset,
                name: "arrow_se"
            }),
            northEastArrowSouth: (t, e) => ({top: ug(t, e), left: t.right - e.width / 2, name: "arrow_s"}),
            northEastArrowSouthEast: (t, e) => ({
                top: ug(t, e),
                left: t.right - e.width + dg.arrowHorizontalOffset,
                name: "arrow_se"
            }),
            northEastArrowSouthWest: (t, e) => ({
                top: ug(t, e),
                left: t.right - dg.arrowHorizontalOffset,
                name: "arrow_sw"
            }),
            southArrowNorth: (t, e) => ({top: fg(t), left: t.left + t.width / 2 - e.width / 2, name: "arrow_n"}),
            southArrowNorthEast: (t, e) => ({
                top: fg(t),
                left: t.left + t.width / 2 - e.width + dg.arrowHorizontalOffset,
                name: "arrow_ne"
            }),
            southArrowNorthWest: (t, e) => ({
                top: fg(t),
                left: t.left + t.width / 2 - dg.arrowHorizontalOffset,
                name: "arrow_nw"
            }),
            southWestArrowNorth: (t, e) => ({top: fg(t), left: t.left - e.width / 2, name: "arrow_n"}),
            southWestArrowNorthWest: (t, e) => ({
                top: fg(t),
                left: t.left - dg.arrowHorizontalOffset,
                name: "arrow_nw"
            }),
            southWestArrowNorthEast: (t, e) => ({
                top: fg(t),
                left: t.left - e.width + dg.arrowHorizontalOffset,
                name: "arrow_ne"
            }),
            southEastArrowNorth: (t, e) => ({top: fg(t), left: t.right - e.width / 2, name: "arrow_n"}),
            southEastArrowNorthEast: (t, e) => ({
                top: fg(t),
                left: t.right - e.width + dg.arrowHorizontalOffset,
                name: "arrow_ne"
            }),
            southEastArrowNorthWest: (t, e) => ({
                top: fg(t),
                left: t.right - dg.arrowHorizontalOffset,
                name: "arrow_nw"
            })
        };
        var gg = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z" /></svg>\n',
            mg = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>\n';
        i(60), i(62);
        const pg = Hl("px");

        class bg extends vd {
            static get pluginName() {
                return "ContextualBalloon"
            }

            constructor(t) {
                super(t), this.positionLimiter = (() => {
                    const t = this.editor.editing.view, e = t.document.selection.editableElement;
                    return e ? t.domConverter.mapViewToDom(e.root) : null
                }), this.set("visibleView", null), this.view = new dg(t.locale), t.ui.view.body.add(this.view), t.ui.focusTracker.add(this.view.element), this._viewToStack = new Map, this._idToStack = new Map, this.set("_numberOfStacks", 0), this.set("_singleViewMode", !1), this._rotatorView = this._createRotatorView(), this._fakePanelsView = this._createFakePanelsView()
            }

            hasView(t) {
                return Array.from(this._viewToStack.keys()).includes(t)
            }

            add(t) {
                if (this.hasView(t.view)) throw new Yi.b("contextualballoon-add-view-exist: Cannot add configuration of the same view twice.", [this, t]);
                const e = t.stackId || "main";
                if (!this._idToStack.has(e)) return this._idToStack.set(e, new Map([[t.view, t]])), this._viewToStack.set(t.view, this._idToStack.get(e)), this._numberOfStacks = this._idToStack.size, void (this._visibleStack && !t.singleViewMode || this.showStack(e));
                const i = this._idToStack.get(e);
                t.singleViewMode && this.showStack(e), i.set(t.view, t), this._viewToStack.set(t.view, i), i === this._visibleStack && this._showView(t)
            }

            remove(t) {
                if (!this.hasView(t)) throw new Yi.b("contextualballoon-remove-view-not-exist: Cannot remove the configuration of a non-existent view.", [this, t]);
                const e = this._viewToStack.get(t);
                this._singleViewMode && this.visibleView === t && (this._singleViewMode = !1), this.visibleView === t && (1 === e.size ? this._idToStack.size > 1 ? this._showNextStack() : (this.view.hide(), this.visibleView = null, this._rotatorView.hideView()) : this._showView(Array.from(e.values())[e.size - 2])), 1 === e.size ? (this._idToStack.delete(this._getStackId(e)), this._numberOfStacks = this._idToStack.size) : e.delete(t), this._viewToStack.delete(t)
            }

            updatePosition(t) {
                t && (this._visibleStack.get(this.visibleView).position = t), this.view.pin(this._getBalloonPosition()), this._fakePanelsView.updatePosition()
            }

            showStack(t) {
                this.visibleStack = t;
                const e = this._idToStack.get(t);
                if (!e) throw new Yi.b("contextualballoon-showstack-stack-not-exist: Cannot show a stack that does not exist.", this);
                this._visibleStack !== e && this._showView(Array.from(e.values()).pop())
            }

            get _visibleStack() {
                return this._viewToStack.get(this.visibleView)
            }

            _getStackId(t) {
                return Array.from(this._idToStack.entries()).find(e => e[1] === t)[0]
            }

            _showNextStack() {
                const t = Array.from(this._idToStack.values());
                let e = t.indexOf(this._visibleStack) + 1;
                t[e] || (e = 0), this.showStack(this._getStackId(t[e]))
            }

            _showPrevStack() {
                const t = Array.from(this._idToStack.values());
                let e = t.indexOf(this._visibleStack) - 1;
                t[e] || (e = t.length - 1), this.showStack(this._getStackId(t[e]))
            }

            _createRotatorView() {
                const t = new wg(this.editor.locale), e = this.editor.locale.t;
                return this.view.content.add(t), t.bind("isNavigationVisible").to(this, "_numberOfStacks", this, "_singleViewMode", (t, e) => !e && t > 1), t.on("change:isNavigationVisible", () => this.updatePosition(), {priority: "low"}), t.bind("counter").to(this, "visibleView", this, "_numberOfStacks", (t, i) => {
                    if (i < 2) return "";
                    const n = Array.from(this._idToStack.values()).indexOf(this._visibleStack) + 1;
                    return e("bw", [n, i])
                }), t.buttonNextView.on("execute", () => {
                    t.focusTracker.isFocused && this.editor.editing.view.focus(), this._showNextStack()
                }), t.buttonPrevView.on("execute", () => {
                    t.focusTracker.isFocused && this.editor.editing.view.focus(), this._showPrevStack()
                }), t
            }

            _createFakePanelsView() {
                const t = new kg(this.editor.locale, this.view);
                return t.bind("numberOfPanels").to(this, "_numberOfStacks", this, "_singleViewMode", (t, e) => {
                    return !e && t >= 2 ? Math.min(t - 1, 2) : 0
                }), t.listenTo(this.view, "change:top", () => t.updatePosition()), t.listenTo(this.view, "change:left", () => t.updatePosition()), this.editor.ui.view.body.add(t), t
            }

            _showView({view: t, balloonClassName: e = "", withArrow: i = !0, singleViewMode: n = !1}) {
                this.view.class = e, this.view.withArrow = i, this._rotatorView.showView(t), this.visibleView = t, this.view.pin(this._getBalloonPosition()), this._fakePanelsView.updatePosition(), n && (this._singleViewMode = !0)
            }

            _getBalloonPosition() {
                let t = Array.from(this._visibleStack.values()).pop().position;
                return t && !t.limiter && (t = Object.assign({}, t, {limiter: this.positionLimiter})), t
            }
        }

        class wg extends Ll {
            constructor(t) {
                super(t);
                const e = t.t, i = this.bindTemplate;
                this.set("isNavigationVisible", !0), this.focusTracker = new al, this.buttonPrevView = this._createButtonView(e("bx"), gg), this.buttonNextView = this._createButtonView(e("by"), mg), this.content = this.createCollection(), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-balloon-rotator"], "z-index": "-1"},
                    children: [{
                        tag: "div",
                        attributes: {class: ["ck-balloon-rotator__navigation", i.to("isNavigationVisible", t => t ? "" : "ck-hidden")]},
                        children: [this.buttonPrevView, {
                            tag: "span",
                            attributes: {class: ["ck-balloon-rotator__counter"]},
                            children: [{text: i.to("counter")}]
                        }, this.buttonNextView]
                    }, {tag: "div", attributes: {class: "ck-balloon-rotator__content"}, children: this.content}]
                })
            }

            render() {
                super.render(), this.focusTracker.add(this.element)
            }

            showView(t) {
                this.hideView(), this.content.add(t)
            }

            hideView() {
                this.content.clear()
            }

            _createButtonView(t, e) {
                const i = new nd(this.locale);
                return i.set({label: t, icon: e, tooltip: !0}), i
            }
        }

        class kg extends Ll {
            constructor(t, e) {
                super(t);
                const i = this.bindTemplate;
                this.set("top", 0), this.set("left", 0), this.set("height", 0), this.set("width", 0), this.set("numberOfPanels", 0), this.content = this.createCollection(), this._balloonPanelView = e, this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck-fake-panel", i.to("numberOfPanels", t => t ? "" : "ck-hidden")],
                        style: {
                            top: i.to("top", pg),
                            left: i.to("left", pg),
                            width: i.to("width", pg),
                            height: i.to("height", pg)
                        }
                    },
                    children: this.content
                }), this.on("change:numberOfPanels", (t, e, i, n) => {
                    i > n ? this._addPanels(i - n) : this._removePanels(n - i), this.updatePosition()
                })
            }

            _addPanels(t) {
                for (; t--;) {
                    const t = new Ll;
                    t.setTemplate({tag: "div"}), this.content.add(t), this.registerChild(t)
                }
            }

            _removePanels(t) {
                for (; t--;) {
                    const t = this.content.last;
                    this.content.remove(t), this.deregisterChild(t), t.destroy()
                }
            }

            updatePosition() {
                if (this.numberOfPanels) {
                    const {top: t, left: e} = this._balloonPanelView, {width: i, height: n} = new xs(this._balloonPanelView.element);
                    Object.assign(this, {top: t, left: e, width: i, height: n})
                }
            }
        }

        var _g = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>';

        function vg(t) {
            const e = t.editing.view, i = dg.defaultPositions;
            return {
                target: e.domConverter.viewToDom(e.document.selection.getSelectedElement()),
                positions: [i.northArrowSouth, i.northArrowSouthWest, i.northArrowSouthEast, i.southArrowNorth, i.southArrowNorthWest, i.southArrowNorthEast]
            }
        }

        class yg extends vd {
            static get requires() {
                return [bg]
            }

            static get pluginName() {
                return "ImageTextAlternativeUI"
            }

            init() {
                this._createButton(), this._createForm()
            }

            destroy() {
                super.destroy(), this._form.destroy()
            }

            _createButton() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add("imageTextAlternative", i => {
                    const n = t.commands.get("imageTextAlternative"), o = new nd(i);
                    return o.set({
                        label: e("bu"),
                        icon: _g,
                        tooltip: !0
                    }), o.bind("isEnabled").to(n, "isEnabled"), this.listenTo(o, "execute", () => this._showForm()), o
                })
            }

            _createForm() {
                const t = this.editor, e = t.editing.view.document;
                this._balloon = this.editor.plugins.get("ContextualBalloon"), this._form = new ag(t.locale), this._form.render(), this.listenTo(this._form, "submit", () => {
                    t.execute("imageTextAlternative", {newValue: this._form.labeledInput.inputView.element.value}), this._hideForm(!0)
                }), this.listenTo(this._form, "cancel", () => {
                    this._hideForm(!0)
                }), this._form.keystrokes.set("Esc", (t, e) => {
                    this._hideForm(!0), e()
                }), this.listenTo(t.ui, "update", () => {
                    Vu(e.selection) ? this._isVisible && function (t) {
                        const e = t.plugins.get("ContextualBalloon");
                        if (Vu(t.editing.view.document.selection)) {
                            const i = vg(t);
                            e.updatePosition(i)
                        }
                    }(t) : this._hideForm(!0)
                }), dd({
                    emitter: this._form,
                    activator: () => this._isVisible,
                    contextElements: [this._balloon.view.element],
                    callback: () => this._hideForm()
                })
            }

            _showForm() {
                if (this._isVisible) return;
                const t = this.editor, e = t.commands.get("imageTextAlternative"), i = this._form.labeledInput;
                this._isInBalloon || this._balloon.add({
                    view: this._form,
                    position: vg(t)
                }), i.value = i.inputView.element.value = e.value || "", this._form.labeledInput.select()
            }

            _hideForm(t) {
                this._isInBalloon && (this._form.focusTracker.isFocused && this._form.saveButtonView.focus(), this._balloon.remove(this._form), t && this.editor.editing.view.focus())
            }

            get _isVisible() {
                return this._balloon.visibleView === this._form
            }

            get _isInBalloon() {
                return this._balloon.hasView(this._form)
            }
        }

        class xg extends vd {
            static get requires() {
                return [eg, yg]
            }

            static get pluginName() {
                return "ImageTextAlternative"
            }
        }

        i(64);

        class Ag extends vd {
            static get requires() {
                return [Wu, Zf, xg]
            }

            static get pluginName() {
                return "Image"
            }
        }

        class Tg extends Ll {
            constructor(t) {
                super(t), this.buttonView = new nd(t), this._fileInputView = new Cg(t), this._fileInputView.bind("acceptedType").to(this), this._fileInputView.bind("allowMultipleFiles").to(this), this._fileInputView.delegate("done").to(this), this.setTemplate({
                    tag: "span",
                    attributes: {class: "ck-file-dialog-button"},
                    children: [this.buttonView, this._fileInputView]
                }), this.buttonView.on("execute", () => {
                    this._fileInputView.open()
                })
            }

            focus() {
                this.buttonView.focus()
            }
        }

        class Cg extends Ll {
            constructor(t) {
                super(t), this.set("acceptedType"), this.set("allowMultipleFiles", !1);
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: "input",
                    attributes: {
                        class: ["ck-hidden"],
                        type: "file",
                        tabindex: "-1",
                        accept: e.to("acceptedType"),
                        multiple: e.to("allowMultipleFiles")
                    },
                    on: {
                        change: e.to(() => {
                            this.element && this.element.files && this.element.files.length && this.fire("done", this.element.files), this.element.value = ""
                        })
                    }
                })
            }

            open() {
                this.element.click()
            }
        }

        var Pg = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>';

        function Sg(t) {
            const e = t.map(t => t.replace("+", "\\+"));
            return new RegExp(`^image\\/(${e.join("|")})$`)
        }

        function Eg(t) {
            return new Promise((e, i) => {
                const n = t.getAttribute("src");
                fetch(n).then(t => t.blob()).then(t => {
                    const o = function (t, e) {
                        return t.type ? t.type : e.match(/data:(image\/\w+);base64/) ? e.match(/data:(image\/\w+);base64/)[1].toLowerCase() : "image/jpeg"
                    }(t, n), r = function (t, e, i) {
                        try {
                            return new File([t], e, {type: i})
                        } catch (t) {
                            return null
                        }
                    }(t, `image.${o.replace("image/", "")}`, o);
                    r ? e(r) : i()
                }).catch(i)
            })
        }

        class Mg extends vd {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add("imageUpload", i => {
                    const n = new Tg(i), o = t.commands.get("imageUpload"), r = t.config.get("image.upload.types"),
                        s = Sg(r);
                    return n.set({
                        acceptedType: r.map(t => `image/${t}`).join(","),
                        allowMultipleFiles: !0
                    }), n.buttonView.set({
                        label: e("u"),
                        icon: Pg,
                        tooltip: !0
                    }), n.buttonView.bind("isEnabled").to(o), n.on("done", (e, i) => {
                        const n = Array.from(i).filter(t => s.test(t.type));
                        n.length && t.execute("imageUpload", {file: n})
                    }), n
                })
            }
        }

        var Ig = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><rect rx="4"/></svg>';
        i(66), i(68), i(70);

        class Ng extends vd {
            constructor(t) {
                super(t), this.placeholder = "data:image/svg+xml;utf8," + encodeURIComponent(Ig)
            }

            init() {
                this.editor.editing.downcastDispatcher.on("attribute:uploadStatus:image", (...t) => this.uploadStatusChange(...t))
            }

            uploadStatusChange(t, e, i) {
                const n = this.editor, o = e.item, r = o.getAttribute("uploadId");
                if (!i.consumable.consume(e.item, t.name)) return;
                const s = n.plugins.get(_h), a = r ? e.attributeNewValue : null, c = this.placeholder,
                    l = n.editing.mapper.toViewElement(o), d = i.writer;
                if ("reading" == a) return Og(l, d), void Rg(c, l, d);
                if ("uploading" == a) {
                    const t = s.loaders.get(r);
                    return Og(l, d), void (t ? (Dg(l, d), function (t, e, i, n) {
                        const o = function (t) {
                            const e = t.createUIElement("div", {class: "ck-progress-bar"});
                            return t.setCustomProperty("progressBar", !0, e), e
                        }(e);
                        e.insert(e.createPositionAt(t, "end"), o), i.on("change:uploadedPercent", (t, e, i) => {
                            n.change(t => {
                                t.setStyle("width", i + "%", o)
                            })
                        })
                    }(l, d, t, n.editing.view), function (t, e, i) {
                        if (i.data) {
                            const n = t.getChild(0);
                            e.setAttribute("src", i.data, n)
                        }
                    }(l, d, t)) : Rg(c, l, d))
                }
                "complete" == a && s.loaders.get(r) && !go.isEdge && function (t, e, i) {
                    const n = e.createUIElement("div", {class: "ck-image-upload-complete-icon"});
                    e.insert(e.createPositionAt(t, "end"), n), setTimeout(() => {
                        i.change(t => t.remove(t.createRangeOn(n)))
                    }, 3e3)
                }(l, d, n.editing.view), function (t, e) {
                    jg(t, e, "progressBar")
                }(l, d), Dg(l, d), function (t, e) {
                    e.removeClass("ck-appear", t)
                }(l, d)
            }
        }

        function Og(t, e) {
            t.hasClass("ck-appear") || e.addClass("ck-appear", t)
        }

        function Rg(t, e, i) {
            e.hasClass("ck-image-upload-placeholder") || i.addClass("ck-image-upload-placeholder", e);
            const n = e.getChild(0);
            n.getAttribute("src") !== t && i.setAttribute("src", t, n), Lg(e, "placeholder") || i.insert(i.createPositionAfter(n), function (t) {
                const e = t.createUIElement("div", {class: "ck-upload-placeholder-loader"});
                return t.setCustomProperty("placeholder", !0, e), e
            }(i))
        }

        function Dg(t, e) {
            t.hasClass("ck-image-upload-placeholder") && e.removeClass("ck-image-upload-placeholder", t), jg(t, e, "placeholder")
        }

        function Lg(t, e) {
            for (const i of t.getChildren()) if (i.getCustomProperty(e)) return i
        }

        function jg(t, e, i) {
            const n = Lg(t, i);
            n && e.remove(e.createRangeOn(n))
        }

        class zg {
            createDocumentFragment(t) {
                return new Ao(t)
            }

            createElement(t, e, i) {
                return new kn(t, e, i)
            }

            createText(t) {
                return new fn(t)
            }

            clone(t, e = !1) {
                return t._clone(e)
            }

            appendChild(t, e) {
                return e._appendChild(t)
            }

            insertChild(t, e, i) {
                return i._insertChild(t, e)
            }

            removeChildren(t, e, i) {
                return i._removeChildren(t, e)
            }

            remove(t) {
                const e = t.parent;
                return e ? this.removeChildren(e.getChildIndex(t), 1, e) : []
            }

            replace(t, e) {
                const i = t.parent;
                if (i) {
                    const n = i.getChildIndex(t);
                    return this.removeChildren(n, 1, i), this.insertChild(n, e, i), !0
                }
                return !1
            }

            unwrapElement(t) {
                const e = t.parent;
                if (e) {
                    const i = e.getChildIndex(t);
                    this.remove(t), this.insertChild(i, t.getChildren(), e)
                }
            }

            rename(t, e) {
                const i = new kn(t, e.getAttributes(), e.getChildren());
                return this.replace(e, i) ? i : null
            }

            setAttribute(t, e, i) {
                i._setAttribute(t, e)
            }

            removeAttribute(t, e) {
                e._removeAttribute(t)
            }

            addClass(t, e) {
                e._addClass(t)
            }

            removeClass(t, e) {
                e._removeClass(t)
            }

            setStyle(t, e, i) {
                T(t) && void 0 === i && (i = e), i._setStyle(t, e)
            }

            removeStyle(t, e) {
                e._removeStyle(t)
            }

            setCustomProperty(t, e, i) {
                i._setCustomProperty(t, e)
            }

            removeCustomProperty(t, e) {
                return e._removeCustomProperty(t)
            }

            createPositionAt(t, e) {
                return Zn._createAt(t, e)
            }

            createPositionAfter(t) {
                return Zn._createAfter(t)
            }

            createPositionBefore(t) {
                return Zn._createBefore(t)
            }

            createRange(t, e) {
                return new Xn(t, e)
            }

            createRangeOn(t) {
                return Xn._createOn(t)
            }

            createRangeIn(t) {
                return Xn._createIn(t)
            }

            createSelection(t, e, i) {
                return new io(t, e, i)
            }
        }

        class Vg extends Cd {
            refresh() {
                this.isEnabled = Hu(this.editor.model)
            }

            execute(t) {
                const e = this.editor, i = e.model, n = e.plugins.get(_h);
                i.change(e => {
                    const o = Array.isArray(t.file) ? t.file : [t.file];
                    for (const t of o) Bg(e, i, n, t)
                })
            }
        }

        function Bg(t, e, i, n) {
            const o = i.createLoader(n);
            o && Fu(t, e, {uploadId: o.id})
        }

        class Fg extends vd {
            static get requires() {
                return [_h, zf, Td]
            }

            static get pluginName() {
                return "ImageUploadEditing"
            }

            constructor(t) {
                super(t), t.config.define("image", {upload: {types: ["jpeg", "png", "gif", "bmp", "webp", "tiff"]}})
            }

            init() {
                const t = this.editor, e = t.model.document, i = t.model.schema, n = t.conversion,
                    o = t.plugins.get(_h), r = Sg(t.config.get("image.upload.types"));
                i.extend("image", {allowAttributes: ["uploadId", "uploadStatus"]}), t.commands.add("imageUpload", new Vg(t)), n.for("upcast").attributeToAttribute({
                    view: {
                        name: "img",
                        key: "uploadId"
                    }, model: "uploadId"
                }), this.listenTo(t.editing.view.document, "clipboardInput", (e, i) => {
                    if (function (t) {
                        return Array.from(t.types).includes("text/html") && "" !== t.getData("text/html")
                    }(i.dataTransfer)) return;
                    const n = Array.from(i.dataTransfer.files).filter(t => !!t && r.test(t.type)),
                        o = i.targetRanges.map(e => t.editing.mapper.toModelRange(e));
                    t.model.change(i => {
                        i.setSelection(o), n.length && (e.stop(), t.model.enqueueChange("default", () => {
                            t.execute("imageUpload", {file: n})
                        }))
                    })
                }), this.listenTo(t.plugins.get(Td), "inputTransformation", (e, i) => {
                    const n = Array.from(t.editing.view.createRangeIn(i.content)).filter(t => (function (t) {
                        return !(!t.is("element", "img") || !t.getAttribute("src")) && (t.getAttribute("src").match(/^data:image\/\w+;base64,/g) || t.getAttribute("src").match(/^blob:/g))
                    })(t.item) && !t.item.getAttribute("uploadProcessed")).map(t => ({
                        promise: Eg(t.item),
                        imageElement: t.item
                    }));
                    if (!n.length) return;
                    const r = new zg;
                    for (const t of n) {
                        r.setAttribute("uploadProcessed", !0, t.imageElement);
                        const e = o.createLoader(t.promise);
                        e && (r.setAttribute("src", "", t.imageElement), r.setAttribute("uploadId", e.id, t.imageElement))
                    }
                }), t.editing.view.document.on("dragover", (t, e) => {
                    e.preventDefault()
                }), e.on("change", () => {
                    const i = e.differ.getChanges({includeChangesInGraveyard: !0});
                    for (const e of i) if ("insert" == e.type && "$text" != e.name) {
                        const i = e.position.nodeAfter, n = "$graveyard" == e.position.root.rootName;
                        for (const e of Hg(t, i)) {
                            const t = e.getAttribute("uploadId");
                            if (!t) continue;
                            const i = o.loaders.get(t);
                            i && (n ? i.abort() : "idle" == i.status && this._readAndUpload(i, e))
                        }
                    }
                })
            }

            _readAndUpload(t, e) {
                const i = this.editor, n = i.model, o = i.locale.t, r = i.plugins.get(_h), s = i.plugins.get(zf);
                return n.enqueueChange("transparent", t => {
                    t.setAttribute("uploadStatus", "reading", e)
                }), t.read().then(() => {
                    const o = t.upload();
                    if (go.isSafari) {
                        const t = i.editing.mapper.toViewElement(e).getChild(0);
                        i.editing.view.once("render", () => {
                            if (!t.parent) return;
                            const e = i.editing.view.domConverter.mapViewToDom(t.parent);
                            if (!e) return;
                            const n = e.style.display;
                            e.style.display = "none", e._ckHack = e.offsetHeight, e.style.display = n
                        })
                    }
                    return n.enqueueChange("transparent", t => {
                        t.setAttribute("uploadStatus", "uploading", e)
                    }), o
                }).then(t => {
                    n.enqueueChange("transparent", i => {
                        i.setAttributes({
                            uploadStatus: "complete",
                            src: t.default
                        }, e), this._parseAndSetSrcsetAttributeOnImage(t, e, i)
                    }), a()
                }).catch(i => {
                    if ("error" !== t.status && "aborted" !== t.status) throw i;
                    "error" == t.status && i && s.showWarning(i, {
                        title: o("as"),
                        namespace: "upload"
                    }), a(), n.enqueueChange("transparent", t => {
                        t.remove(e)
                    })
                });

                function a() {
                    n.enqueueChange("transparent", t => {
                        t.removeAttribute("uploadId", e), t.removeAttribute("uploadStatus", e)
                    }), r.destroyLoader(t)
                }
            }

            _parseAndSetSrcsetAttributeOnImage(t, e, i) {
                let n = 0;
                const o = Object.keys(t).filter(t => {
                    const e = parseInt(t, 10);
                    if (!isNaN(e)) return n = Math.max(n, e), !0
                }).map(e => `${t[e]} ${e}w`).join(", ");
                "" != o && i.setAttribute("srcset", {data: o, width: n}, e)
            }
        }

        function Hg(t, e) {
            return Array.from(t.model.createRangeOn(e)).filter(t => t.item.is("image")).map(t => t.item)
        }

        class Ug extends vd {
            static get pluginName() {
                return "ImageUpload"
            }

            static get requires() {
                return [Fg, Mg, Ng]
            }
        }

        class Wg extends Cd {
            refresh() {
                const t = this.editor.model, e = gu(t.document.selection.getSelectedBlocks());
                this.value = !!e && e.is("paragraph"), this.isEnabled = !!e && qg(e, t.schema)
            }

            execute(t = {}) {
                const e = this.editor.model, i = e.document;
                e.change(n => {
                    const o = (t.selection || i.selection).getSelectedBlocks();
                    for (const t of o) !t.is("paragraph") && qg(t, e.schema) && n.rename(t, "paragraph")
                })
            }
        }

        function qg(t, e) {
            return e.checkChild(t.parent, "paragraph") && !e.isObject(t)
        }

        class $g extends vd {
            static get pluginName() {
                return "Paragraph"
            }

            init() {
                const t = this.editor, e = t.model, i = t.data;
                t.commands.add("paragraph", new Wg(t)), e.schema.register("paragraph", {inheritAllFrom: "$block"}), t.conversion.elementToElement({
                    model: "paragraph",
                    view: "p"
                }), t.conversion.for("upcast").elementToElement({
                    model: (t, e) => $g.paragraphLikeElements.has(t.name) ? t.isEmpty ? null : e.createElement("paragraph") : null,
                    converterPriority: "low"
                }), i.upcastDispatcher.on("element", (t, e, i) => {
                    i.consumable.test(e.viewItem, {name: e.viewItem.name}) && Gg(e.viewItem, e.modelCursor, i.schema) && Object.assign(e, Yg(e.viewItem, e.modelCursor, i))
                }, {priority: "low"}), i.upcastDispatcher.on("text", (t, e, i) => {
                    e.modelRange || Gg(e.viewItem, e.modelCursor, i.schema) && Object.assign(e, Yg(e.viewItem, e.modelCursor, i))
                }, {priority: "lowest"}), e.document.registerPostFixer(t => this._autoparagraphEmptyRoots(t)), t.data.on("ready", () => {
                    e.enqueueChange("transparent", t => this._autoparagraphEmptyRoots(t))
                }, {priority: "lowest"})
            }

            _autoparagraphEmptyRoots(t) {
                const e = this.editor.model;
                for (const i of e.document.getRootNames()) {
                    const n = e.document.getRoot(i);
                    if (n.isEmpty && "$graveyard" != n.rootName && e.schema.checkChild(n, "paragraph")) return t.insertElement("paragraph", n), !0
                }
            }
        }

        function Yg(t, e, i) {
            const n = i.writer.createElement("paragraph");
            return i.writer.insert(n, e), i.convertItem(t, i.writer.createPositionAt(n, 0))
        }

        function Gg(t, e, i) {
            const n = i.createContext(e);
            return !!i.checkChild(n, "paragraph") && !!i.checkChild(n.push("paragraph"), t)
        }

        $g.paragraphLikeElements = new Set(["blockquote", "dd", "div", "dt", "h1", "h2", "h3", "h4", "h5", "h6", "li", "p", "td"]);

        class Qg extends Cd {
            constructor(t, e) {
                super(t), this.modelElements = e
            }

            refresh() {
                const t = gu(this.editor.model.document.selection.getSelectedBlocks());
                this.value = !!t && this.modelElements.includes(t.name) && t.name, this.isEnabled = !!t && this.modelElements.some(e => Kg(t, e, this.editor.model.schema))
            }

            execute(t) {
                const e = this.editor.model, i = e.document, n = t.value;
                e.change(t => {
                    const o = Array.from(i.selection.getSelectedBlocks()).filter(t => Kg(t, n, e.schema));
                    for (const e of o) e.is(n) || t.rename(e, n)
                })
            }
        }

        function Kg(t, e, i) {
            return i.checkChild(t.parent, e) && !i.isObject(t)
        }

        const Jg = "paragraph";

        class Zg extends vd {
            static get pluginName() {
                return "HeadingEditing"
            }

            constructor(t) {
                super(t), t.config.define("heading", {
                    options: [{
                        model: "paragraph",
                        title: "Paragraph",
                        class: "ck-heading_paragraph"
                    }, {
                        model: "heading1",
                        view: "h2",
                        title: "Heading 1",
                        class: "ck-heading_heading1"
                    }, {
                        model: "heading2",
                        view: "h3",
                        title: "Heading 2",
                        class: "ck-heading_heading2"
                    }, {model: "heading3", view: "h4", title: "Heading 3", class: "ck-heading_heading3"}]
                })
            }

            static get requires() {
                return [$g]
            }

            init() {
                const t = this.editor, e = t.config.get("heading.options"), i = [];
                for (const n of e) n.model !== Jg && (t.model.schema.register(n.model, {inheritAllFrom: "$block"}), t.conversion.elementToElement(n), i.push(n.model));
                this._addDefaultH1Conversion(t), t.commands.add("heading", new Qg(t, i))
            }

            afterInit() {
                const t = this.editor, e = t.commands.get("enter"), i = t.config.get("heading.options");
                e && this.listenTo(e, "afterExecute", (e, n) => {
                    const o = t.model.document.selection.getFirstPosition().parent;
                    i.some(t => o.is(t.model)) && !o.is(Jg) && 0 === o.childCount && n.writer.rename(o, Jg)
                })
            }

            _addDefaultH1Conversion(t) {
                t.conversion.for("upcast").elementToElement({
                    model: "heading1",
                    view: "h1",
                    converterPriority: Ji.get("low") + 1
                })
            }
        }

        class Xg {
            constructor(t, e) {
                e && Ln(this, e), t && this.set(t)
            }
        }

        cn(Xg, Fn);
        i(11);

        class tm extends vd {
            init() {
                const t = this.editor, e = t.t, i = function (t) {
                    const e = t.t, i = {
                        Paragraph: e("cs"),
                        "Heading 1": e("ct"),
                        "Heading 2": e("cu"),
                        "Heading 3": e("cv"),
                        "Heading 4": e("cw"),
                        "Heading 5": e("cx"),
                        "Heading 6": e("cy")
                    };
                    return t.config.get("heading.options").map(t => {
                        const e = i[t.title];
                        return e && e != t.title && (t.title = e), t
                    })
                }(t), n = e("m"), o = e("n");
                t.ui.componentFactory.add("heading", e => {
                    const r = {}, s = new oo, a = t.commands.get("heading"), c = t.commands.get("paragraph"), l = [a];
                    for (const t of i) {
                        const e = {type: "button", model: new Xg({label: t.title, class: t.class, withText: !0})};
                        "paragraph" === t.model ? (e.model.bind("isOn").to(c, "value"), e.model.set("commandName", "paragraph"), l.push(c)) : (e.model.bind("isOn").to(a, "value", e => e === t.model), e.model.set({
                            commandName: "heading",
                            commandValue: t.model
                        })), s.add(e), r[t.model] = t.title
                    }
                    const d = hd(e);
                    return fd(d, s), d.buttonView.set({
                        isOn: !1,
                        withText: !0,
                        tooltip: o
                    }), d.extendTemplate({attributes: {class: ["ck-heading-dropdown"]}}), d.bind("isEnabled").toMany(l, "isEnabled", (...t) => t.some(t => t)), d.buttonView.bind("label").to(a, "value", c, "value", (t, e) => {
                        const i = t || e && "paragraph";
                        return r[i] ? r[i] : n
                    }), this.listenTo(d, "execute", e => {
                        t.execute(e.source.commandName, e.source.commandValue ? {value: e.source.commandValue} : void 0), t.editing.view.focus()
                    }), d
                })
            }
        }

        function em(t) {
            for (const e of t.getChildren()) if (e && e.is("caption")) return e;
            return null
        }

        function im(t) {
            const e = t.parent;
            return "figcaption" == t.name && e && "figure" == e.name && e.hasClass("image") ? {name: !0} : null
        }

        class nm extends vd {
            static get pluginName() {
                return "ImageCaptionEditing"
            }

            init() {
                const t = this.editor, e = t.editing.view, i = t.model.schema, n = t.data, o = t.editing, r = t.t;
                i.register("caption", {
                    allowIn: "image",
                    allowContentOf: "$block",
                    isLimit: !0
                }), t.model.document.registerPostFixer(t => this._insertMissingModelCaptionElement(t)), t.conversion.for("upcast").elementToElement({
                    view: im,
                    model: "caption"
                });
                n.downcastDispatcher.on("insert:caption", om(t => t.createContainerElement("figcaption"), !1));
                const s = function (t, e) {
                    return i => {
                        const n = i.createEditableElement("figcaption");
                        return i.setCustomProperty("imageCaption", !0, n), dl({view: t, element: n, text: e}), Lu(n, i)
                    }
                }(e, r("ar"));
                o.downcastDispatcher.on("insert:caption", om(s)), o.downcastDispatcher.on("insert", this._fixCaptionVisibility(t => t.item), {priority: "high"}), o.downcastDispatcher.on("remove", this._fixCaptionVisibility(t => t.position.parent), {priority: "high"}), e.document.registerPostFixer(t => this._updateCaptionVisibility(t))
            }

            _updateCaptionVisibility(t) {
                const e = this.editor.editing.mapper, i = this._lastSelectedCaption;
                let n;
                const o = this.editor.model.document.selection, r = o.getSelectedElement();
                if (r && r.is("image")) {
                    const t = em(r);
                    n = e.toViewElement(t)
                }
                const s = rm(o.getFirstPosition().parent);
                if (s && (n = e.toViewElement(s)), n) return i ? i === n ? am(n, t) : (sm(i, t), this._lastSelectedCaption = n, am(n, t)) : (this._lastSelectedCaption = n, am(n, t));
                if (i) {
                    const e = sm(i, t);
                    return this._lastSelectedCaption = null, e
                }
                return !1
            }

            _fixCaptionVisibility(t) {
                return (e, i, n) => {
                    const o = rm(t(i)), r = this.editor.editing.mapper, s = n.writer;
                    if (o) {
                        const t = r.toViewElement(o);
                        t && (o.childCount ? s.removeClass("ck-hidden", t) : s.addClass("ck-hidden", t))
                    }
                }
            }

            _insertMissingModelCaptionElement(t) {
                const e = this.editor.model, i = e.document.differ.getChanges(), n = [];
                for (const t of i) if ("insert" == t.type && "$text" != t.name) {
                    const i = t.position.nodeAfter;
                    if (i.is("image") && !em(i) && n.push(i), !i.is("image") && i.childCount) for (const t of e.createRangeIn(i).getItems()) t.is("image") && !em(t) && n.push(t)
                }
                for (const e of n) t.appendElement("caption", e);
                return !!n.length
            }
        }

        function om(t, e = !0) {
            return (i, n, o) => {
                const r = n.item;
                if ((r.childCount || e) && Bu(r.parent)) {
                    if (!o.consumable.consume(n.item, "insert")) return;
                    const e = o.mapper.toViewElement(n.range.start.parent), i = t(o.writer), s = o.writer;
                    r.childCount || s.addClass("ck-hidden", i), function (t, e, i, n) {
                        const o = n.writer.createPositionAt(i, "end");
                        n.writer.insert(o, t), n.mapper.bindElements(e, t)
                    }(i, n.item, e, o)
                }
            }
        }

        function rm(t) {
            const e = t.getAncestors({includeSelf: !0}).find(t => "caption" == t.name);
            return e && e.parent && "image" == e.parent.name ? e : null
        }

        function sm(t, e) {
            return !t.childCount && !t.hasClass("ck-hidden") && (e.addClass("ck-hidden", t), !0)
        }

        function am(t, e) {
            return !!t.hasClass("ck-hidden") && (e.removeClass("ck-hidden", t), !0)
        }

        i(73);

        class cm extends Cd {
            constructor(t, e) {
                super(t), this.defaultStyle = !1, this.styles = e.reduce((t, e) => (t[e.name] = e, e.isDefault && (this.defaultStyle = e.name), t), {})
            }

            refresh() {
                const t = this.editor.model.document.selection.getSelectedElement();
                if (this.isEnabled = Bu(t), t) if (t.hasAttribute("imageStyle")) {
                    const e = t.getAttribute("imageStyle");
                    this.value = !!this.styles[e] && e
                } else this.value = this.defaultStyle; else this.value = !1
            }

            execute(t) {
                const e = t.value, i = this.editor.model, n = i.document.selection.getSelectedElement();
                i.change(t => {
                    this.styles[e].isDefault ? t.removeAttribute("imageStyle", n) : t.setAttribute("imageStyle", e, n)
                })
            }
        }

        function lm(t, e) {
            for (const i of e) if (i.name === t) return i
        }

        var dm = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm2.5 3V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06c-.585 0-1.06-.407-1.06-.91V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></svg>',
            hm = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z"/></svg>',
            um = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm4.5 3V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></svg>',
            fm = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm0 3V6h5.674v1.5zm0 3V9h5.674v1.5zm0 3V12h5.674v1.5zm8.5-6V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></svg>';
        const gm = {
            full: {name: "full", title: "Full size image", icon: dm, isDefault: !0},
            side: {name: "side", title: "Side image", icon: fm, className: "image-style-side"},
            alignLeft: {name: "alignLeft", title: "Left aligned image", icon: hm, className: "image-style-align-left"},
            alignCenter: {
                name: "alignCenter",
                title: "Centered image",
                icon: um,
                className: "image-style-align-center"
            },
            alignRight: {
                name: "alignRight",
                title: "Right aligned image",
                icon: fm,
                className: "image-style-align-right"
            }
        }, mm = {full: dm, left: hm, right: fm, center: um};

        function pm(t = []) {
            return t.map(bm)
        }

        function bm(t) {
            if ("string" == typeof t) {
                const e = t;
                gm[e] ? t = Object.assign({}, gm[e]) : (console.warn(Object(Yi.a)("image-style-not-found: There is no such image style of given name."), {name: e}), t = {name: e})
            } else if (gm[t.name]) {
                const e = gm[t.name], i = Object.assign({}, t);
                for (const n in e) t.hasOwnProperty(n) || (i[n] = e[n]);
                t = i
            }
            return "string" == typeof t.icon && mm[t.icon] && (t.icon = mm[t.icon]), t
        }

        class wm extends vd {
            static get pluginName() {
                return "ImageStyleEditing"
            }

            init() {
                const t = this.editor, e = t.model.schema, i = t.data, n = t.editing;
                t.config.define("image.styles", ["full", "side"]);
                const o = pm(t.config.get("image.styles"));
                e.extend("image", {allowAttributes: "imageStyle"});
                const r = function (t) {
                    return (e, i, n) => {
                        if (!n.consumable.consume(i.item, e.name)) return;
                        const o = lm(i.attributeNewValue, t), r = lm(i.attributeOldValue, t),
                            s = n.mapper.toViewElement(i.item), a = n.writer;
                        r && a.removeClass(r.className, s), o && a.addClass(o.className, s)
                    }
                }(o);
                n.downcastDispatcher.on("attribute:imageStyle:image", r), i.downcastDispatcher.on("attribute:imageStyle:image", r), i.upcastDispatcher.on("element:figure", function (t) {
                    const e = t.filter(t => !t.isDefault);
                    return (t, i, n) => {
                        if (!i.modelRange) return;
                        const o = i.viewItem, r = gu(i.modelRange.getItems());
                        if (n.schema.checkAttribute(r, "imageStyle")) for (const t of e) n.consumable.consume(o, {classes: t.className}) && n.writer.setAttribute("imageStyle", t.name, r)
                    }
                }(o), {priority: "low"}), t.commands.add("imageStyle", new cm(t, o))
            }
        }

        i(75);

        class km extends vd {
            static get pluginName() {
                return "ImageStyleUI"
            }

            get localizedDefaultStylesTitles() {
                const t = this.editor.t;
                return {
                    "Full size image": t("p"),
                    "Side image": t("q"),
                    "Left aligned image": t("r"),
                    "Centered image": t("s"),
                    "Right aligned image": t("t")
                }
            }

            init() {
                const t = function (t, e) {
                    for (const i of t) e[i.title] && (i.title = e[i.title]);
                    return t
                }(pm(this.editor.config.get("image.styles")), this.localizedDefaultStylesTitles);
                for (const e of t) this._createButton(e)
            }

            _createButton(t) {
                const e = this.editor, i = `imageStyle:${t.name}`;
                e.ui.componentFactory.add(i, i => {
                    const n = e.commands.get("imageStyle"), o = new nd(i);
                    return o.set({
                        label: t.title,
                        icon: t.icon,
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isEnabled").to(n, "isEnabled"), o.bind("isOn").to(n, "value", e => e === t.name), this.listenTo(o, "execute", () => e.execute("imageStyle", {value: t.name})), o
                })
            }
        }

        class _m extends vd {
            static get requires() {
                return [bg]
            }

            static get pluginName() {
                return "WidgetToolbarRepository"
            }

            init() {
                const t = this.editor;
                if (t.plugins.has("BalloonToolbar")) {
                    const e = t.plugins.get("BalloonToolbar");
                    this.listenTo(e, "show", e => {
                        (function (t) {
                            const e = t.getSelectedElement();
                            return !(!e || !Ou(e))
                        })(t.editing.view.document.selection) && e.stop()
                    }, {priority: "high"})
                }
                this._toolbarDefinitions = new Map, this._balloon = this.editor.plugins.get("ContextualBalloon"), this.listenTo(t.ui, "update", () => {
                    this._updateToolbarsVisibility()
                }), this.listenTo(t.ui.focusTracker, "change:isFocused", () => {
                    this._updateToolbarsVisibility()
                }, {priority: "low"})
            }

            destroy() {
                super.destroy();
                for (const t of this._toolbarDefinitions.values()) t.view.destroy()
            }

            register(t, {ariaLabel: e, items: i, getRelatedElement: n, balloonClassName: o = "ck-toolbar-container"}) {
                const r = this.editor, s = r.t, a = new md(r.locale);
                if (a.ariaLabel = e || s("bb"), this._toolbarDefinitions.has(t)) throw new Yi.b("widget-toolbar-duplicated: Toolbar with the given id was already added.", this, {toolbarId: t});
                a.fillFromConfig(i, r.ui.componentFactory), this._toolbarDefinitions.set(t, {
                    view: a,
                    getRelatedElement: n,
                    balloonClassName: o
                })
            }

            _updateToolbarsVisibility() {
                let t = 0, e = null, i = null;
                for (const n of this._toolbarDefinitions.values()) {
                    const o = n.getRelatedElement(this.editor.editing.view.document.selection);
                    if (this.editor.ui.focusTracker.isFocused) if (o) {
                        const r = o.getAncestors().length;
                        r > t && (t = r, e = o, i = n)
                    } else this._isToolbarInBalloon(n) && this._hideToolbar(n); else this._isToolbarVisible(n) && this._hideToolbar(n)
                }
                i && this._showToolbar(i, e)
            }

            _hideToolbar(t) {
                this._balloon.remove(t.view), this.stopListening(this._balloon, "change:visibleView")
            }

            _showToolbar(t, e) {
                this._isToolbarVisible(t) ? vm(this.editor, e) : this._isToolbarInBalloon(t) || (this._balloon.add({
                    view: t.view,
                    position: ym(this.editor, e),
                    balloonClassName: t.balloonClassName
                }), this.listenTo(this._balloon, "change:visibleView", () => {
                    for (const t of this._toolbarDefinitions.values()) if (this._isToolbarVisible(t)) {
                        const e = t.getRelatedElement(this.editor.editing.view.document.selection);
                        vm(this.editor, e)
                    }
                }))
            }

            _isToolbarVisible(t) {
                return this._balloon.visibleView === t.view
            }

            _isToolbarInBalloon(t) {
                return this._balloon.hasView(t.view)
            }
        }

        function vm(t, e) {
            const i = t.plugins.get("ContextualBalloon"), n = ym(t, e);
            i.updatePosition(n)
        }

        function ym(t, e) {
            const i = t.editing.view, n = dg.defaultPositions;
            return {
                target: i.domConverter.mapViewToDom(e),
                positions: [n.northArrowSouth, n.northArrowSouthWest, n.northArrowSouthEast, n.southArrowNorth, n.southArrowNorthWest, n.southArrowNorthEast]
            }
        }

        class xm extends Cd {
            constructor(t) {
                super(t), this._childCommands = []
            }

            refresh() {
            }

            execute(...t) {
                this._getFirstEnabledCommand().execute(t)
            }

            registerChildCommand(t) {
                this._childCommands.push(t), t.on("change:isEnabled", () => this._checkEnabled()), this._checkEnabled()
            }

            _checkEnabled() {
                this.isEnabled = !!this._getFirstEnabledCommand()
            }

            _getFirstEnabledCommand() {
                return this._childCommands.find(t => t.isEnabled)
            }
        }

        class Am extends vd {
            static get pluginName() {
                return "IndentEditing"
            }

            init() {
                const t = this.editor;
                t.commands.add("indent", new xm(t)), t.commands.add("outdent", new xm(t))
            }
        }

        var Tm = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5z"/><path d="M1.632 6.95L5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>\n',
            Cm = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5z"/><path d="M4.368 6.95L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>\n';

        class Pm extends vd {
            static get pluginName() {
                return "IndentUI"
            }

            init() {
                const t = this.editor, e = t.locale, i = t.t, n = "ltr" == e.uiLanguageDirection ? Tm : Cm,
                    o = "ltr" == e.uiLanguageDirection ? Cm : Tm;
                this._defineButton("indent", i("v"), n), this._defineButton("outdent", i("w"), o)
            }

            _defineButton(t, e, i) {
                const n = this.editor;
                n.ui.componentFactory.add(t, o => {
                    const r = n.commands.get(t), s = new nd(o);
                    return s.set({
                        label: e,
                        icon: i,
                        tooltip: !0
                    }), s.bind("isOn", "isEnabled").to(r, "value", "isEnabled"), this.listenTo(s, "execute", () => n.execute(t)), s
                })
            }
        }

        class Sm extends Xr {
            constructor(t) {
                super(t), this.domEventType = "click"
            }

            onDomEvent(t) {
                this.fire(t.type, t)
            }
        }

        i(77);

        class Em extends Ll {
            constructor(t, e = []) {
                super(t);
                const i = t.t;
                this.focusTracker = new al, this.keystrokes = new Zc, this.urlInputView = this._createUrlInput(), this.saveButtonView = this._createButton(i("cd"), rg, "ck-button-save"), this.saveButtonView.type = "submit", this.cancelButtonView = this._createButton(i("ce"), sg, "ck-button-cancel", "cancel"), this._manualDecoratorSwitches = this._createManualDecoratorSwitches(e), this.children = this._createFormChildren(e), this._focusables = new pl, this._focusCycler = new ql({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: "shift + tab", focusNext: "tab"}
                });
                const n = ["ck", "ck-link-form"];
                e.length && n.push("ck-link-form_layout-vertical"), this.setTemplate({
                    tag: "form",
                    attributes: {class: n, tabindex: "-1"},
                    children: this.children
                })
            }

            getDecoratorSwitchesState() {
                return Array.from(this._manualDecoratorSwitches).reduce((t, e) => (t[e.name] = e.isOn, t), {})
            }

            render() {
                super.render(), og({view: this}), [this.urlInputView, ...this._manualDecoratorSwitches, this.saveButtonView, this.cancelButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                }), this.keystrokes.listenTo(this.element)
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            _createUrlInput() {
                const t = this.locale.t, e = new ig(this.locale, ng);
                return e.label = t("cm"), e.inputView.placeholder = "https://example.com", e
            }

            _createButton(t, e, i, n) {
                const o = new nd(this.locale);
                return o.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), o.extendTemplate({attributes: {class: i}}), n && o.delegate("execute").to(this, n), o
            }

            _createManualDecoratorSwitches(t) {
                const e = this.createCollection();
                for (const i of t) {
                    const t = new ld(this.locale);
                    t.set({
                        name: i.id,
                        label: i.label,
                        withText: !0
                    }), t.bind("isOn").to(i, "value"), t.on("execute", () => {
                        i.set("value", !t.isOn)
                    }), e.add(t)
                }
                return e
            }

            _createFormChildren(t) {
                const e = this.createCollection();
                if (e.add(this.urlInputView), t.length) {
                    const t = new Ll;
                    t.setTemplate({
                        tag: "ul",
                        children: this._manualDecoratorSwitches.map(t => ({
                            tag: "li",
                            children: [t],
                            attributes: {class: ["ck", "ck-list__item"]}
                        })),
                        attributes: {class: ["ck", "ck-reset", "ck-list"]}
                    }), e.add(t)
                }
                return e.add(this.saveButtonView), e.add(this.cancelButtonView), e
            }
        }

        var Mm = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',
            Im = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z"/></svg>';
        i(79);

        class Nm extends Ll {
            constructor(t) {
                super(t);
                const e = t.t;
                this.focusTracker = new al, this.keystrokes = new Zc, this.previewButtonView = this._createPreviewButton(), this.unlinkButtonView = this._createButton(e("ci"), Mm, "unlink"), this.editButtonView = this._createButton(e("cj"), Im, "edit"), this.set("href"), this._focusables = new pl, this._focusCycler = new ql({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: "shift + tab", focusNext: "tab"}
                }), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-link-actions"], tabindex: "-1"},
                    children: [this.previewButtonView, this.editButtonView, this.unlinkButtonView]
                })
            }

            render() {
                super.render(), [this.previewButtonView, this.editButtonView, this.unlinkButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                }), this.keystrokes.listenTo(this.element)
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            _createButton(t, e, i) {
                const n = new nd(this.locale);
                return n.set({label: t, icon: e, tooltip: !0}), n.delegate("execute").to(this, i), n
            }

            _createPreviewButton() {
                const t = new nd(this.locale), e = this.bindTemplate, i = this.t;
                return t.set({
                    withText: !0,
                    tooltip: i("ck")
                }), t.extendTemplate({
                    attributes: {
                        class: ["ck", "ck-link-actions__preview"],
                        href: e.to("href", t => t && Af(t)),
                        target: "_blank"
                    }
                }), t.bind("label").to(this, "href", t => t || i("cl")), t.bind("isEnabled").to(this, "href", t => !!t), t.template.tag = "a", t.template.eventListeners = {}, t
            }
        }

        var Om = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>';
        const Rm = "Ctrl+K";

        class Dm extends vd {
            static get requires() {
                return [bg]
            }

            static get pluginName() {
                return "LinkUI"
            }

            init() {
                const t = this.editor;
                t.editing.view.addObserver(Sm), this.actionsView = this._createActionsView(), this.formView = this._createFormView(), this._balloon = t.plugins.get(bg), this._createToolbarLinkButton(), this._enableUserBalloonInteractions()
            }

            destroy() {
                super.destroy(), this.formView.destroy()
            }

            _createActionsView() {
                const t = this.editor, e = new Nm(t.locale), i = t.commands.get("link"), n = t.commands.get("unlink");
                return e.bind("href").to(i, "value"), e.editButtonView.bind("isEnabled").to(i), e.unlinkButtonView.bind("isEnabled").to(n), this.listenTo(e, "edit", () => {
                    this._addFormView()
                }), this.listenTo(e, "unlink", () => {
                    t.execute("unlink"), this._hideUI()
                }), e.keystrokes.set("Esc", (t, e) => {
                    this._hideUI(), e()
                }), e.keystrokes.set(Rm, (t, e) => {
                    this._addFormView(), e()
                }), e
            }

            _createFormView() {
                const t = this.editor, e = t.commands.get("link"), i = new Em(t.locale, e.manualDecorators);
                return i.urlInputView.bind("value").to(e, "value"), i.urlInputView.bind("isReadOnly").to(e, "isEnabled", t => !t), i.saveButtonView.bind("isEnabled").to(e), this.listenTo(i, "submit", () => {
                    t.execute("link", i.urlInputView.inputView.element.value, i.getDecoratorSwitchesState()), this._closeFormView()
                }), this.listenTo(i, "cancel", () => {
                    this._closeFormView()
                }), i.keystrokes.set("Esc", (t, e) => {
                    this._closeFormView(), e()
                }), i
            }

            _createToolbarLinkButton() {
                const t = this.editor, e = t.commands.get("link"), i = t.t;
                t.keystrokes.set(Rm, (t, i) => {
                    i(), e.isEnabled && this._showUI(!0)
                }), t.ui.componentFactory.add("link", t => {
                    const n = new nd(t);
                    return n.isEnabled = !0, n.label = i("bp"), n.icon = Om, n.keystroke = Rm, n.tooltip = !0, n.isToggleable = !0, n.bind("isEnabled").to(e, "isEnabled"), n.bind("isOn").to(e, "value", t => !!t), this.listenTo(n, "execute", () => this._showUI(!0)), n
                })
            }

            _enableUserBalloonInteractions() {
                const t = this.editor.editing.view.document;
                this.listenTo(t, "click", () => {
                    this._getSelectedLinkElement() && this._showUI()
                }), this.editor.keystrokes.set("Tab", (t, e) => {
                    this._areActionsVisible && !this.actionsView.focusTracker.isFocused && (this.actionsView.focus(), e())
                }, {priority: "high"}), this.editor.keystrokes.set("Esc", (t, e) => {
                    this._isUIVisible && (this._hideUI(), e())
                }), dd({
                    emitter: this.formView,
                    activator: () => this._isUIInPanel,
                    contextElements: [this._balloon.view.element],
                    callback: () => this._hideUI()
                })
            }

            _addActionsView() {
                this._areActionsInPanel || this._balloon.add({
                    view: this.actionsView,
                    position: this._getBalloonPositionData()
                })
            }

            _addFormView() {
                if (this._isFormInPanel) return;
                const t = this.editor.commands.get("link");
                this._balloon.add({
                    view: this.formView,
                    position: this._getBalloonPositionData()
                }), this._balloon.visibleView === this.formView && this.formView.urlInputView.select(), this.formView.urlInputView.inputView.element.value = t.value || ""
            }

            _closeFormView() {
                const t = this.editor.commands.get("link");
                t.restoreManualDecoratorStates(), void 0 !== t.value ? this._removeFormView() : this._hideUI()
            }

            _removeFormView() {
                this._isFormInPanel && (this.formView.saveButtonView.focus(), this._balloon.remove(this.formView), this.editor.editing.view.focus())
            }

            _showUI(t = !1) {
                this.editor.commands.get("link").isEnabled && (this._getSelectedLinkElement() ? (this._areActionsVisible ? this._addFormView() : this._addActionsView(), t && this._balloon.showStack("main")) : (this._addActionsView(), t && this._balloon.showStack("main"), this._addFormView()), this._startUpdatingUI())
            }

            _hideUI() {
                if (!this._isUIInPanel) return;
                const t = this.editor;
                this.stopListening(t.ui, "update"), this.stopListening(this._balloon, "change:visibleView"), t.editing.view.focus(), this._removeFormView(), this._balloon.remove(this.actionsView)
            }

            _startUpdatingUI() {
                const t = this.editor, e = t.editing.view.document;
                let i = this._getSelectedLinkElement(), n = r();
                const o = () => {
                    const t = this._getSelectedLinkElement(), e = r();
                    i && !t || !i && e !== n ? this._hideUI() : this._isUIVisible && this._balloon.updatePosition(this._getBalloonPositionData()), i = t, n = e
                };

                function r() {
                    return e.selection.focus.getAncestors().reverse().find(t => t.is("element"))
                }

                this.listenTo(t.ui, "update", o), this.listenTo(this._balloon, "change:visibleView", o)
            }

            get _isFormInPanel() {
                return this._balloon.hasView(this.formView)
            }

            get _areActionsInPanel() {
                return this._balloon.hasView(this.actionsView)
            }

            get _areActionsVisible() {
                return this._balloon.visibleView === this.actionsView
            }

            get _isUIInPanel() {
                return this._isFormInPanel || this._areActionsInPanel
            }

            get _isUIVisible() {
                return this._balloon.visibleView == this.formView || this._areActionsVisible
            }

            _getBalloonPositionData() {
                const t = this.editor.editing.view, e = t.document, i = this._getSelectedLinkElement();
                return {target: i ? t.domConverter.mapViewToDom(i) : t.domConverter.viewRangeToDom(e.selection.getFirstRange())}
            }

            _getSelectedLinkElement() {
                const t = this.editor.editing.view, e = t.document.selection;
                if (e.isCollapsed) return Lm(e.getFirstPosition());
                {
                    const i = e.getFirstRange().getTrimmed(), n = Lm(i.start), o = Lm(i.end);
                    return n && n == o && t.createRangeIn(n).getTrimmed().isEqual(i) ? n : null
                }
            }
        }

        function Lm(t) {
            return t.getAncestors().find(t => (function (t) {
                return t.is("attributeElement") && !!t.getCustomProperty("link")
            })(t))
        }

        class jm extends Cd {
            constructor(t, e) {
                super(t), this.type = e
            }

            refresh() {
                this.value = this._getValue(), this.isEnabled = this._checkEnabled()
            }

            execute() {
                const t = this.editor.model, e = t.document,
                    i = Array.from(e.selection.getSelectedBlocks()).filter(e => Vm(e, t.schema)), n = !0 === this.value;
                t.change(t => {
                    if (n) {
                        let e = i[i.length - 1].nextSibling, n = Number.POSITIVE_INFINITY, o = [];
                        for (; e && "listItem" == e.name && 0 !== e.getAttribute("listIndent");) {
                            const t = e.getAttribute("listIndent");
                            t < n && (n = t);
                            const i = t - n;
                            o.push({element: e, listIndent: i}), e = e.nextSibling
                        }
                        o = o.reverse();
                        for (const e of o) t.setAttribute("listIndent", e.listIndent, e.element)
                    }
                    if (!n) {
                        let t = Number.POSITIVE_INFINITY;
                        for (const e of i) e.is("listItem") && e.getAttribute("listIndent") < t && (t = e.getAttribute("listIndent"));
                        zm(i, !0, t = 0 === t ? 1 : t), zm(i, !1, t)
                    }
                    for (const e of i.reverse()) n && "listItem" == e.name ? t.rename(e, "paragraph") : n || "listItem" == e.name ? n || "listItem" != e.name || e.getAttribute("listType") == this.type || t.setAttribute("listType", this.type, e) : (t.setAttributes({
                        listType: this.type,
                        listIndent: 0
                    }, e), t.rename(e, "listItem"))
                })
            }

            _getValue() {
                const t = gu(this.editor.model.document.selection.getSelectedBlocks());
                return !!t && t.is("listItem") && t.getAttribute("listType") == this.type
            }

            _checkEnabled() {
                if (this.value) return !0;
                const t = this.editor.model.document.selection, e = this.editor.model.schema,
                    i = gu(t.getSelectedBlocks());
                return !!i && Vm(i, e)
            }
        }

        function zm(t, e, i) {
            const n = e ? t[0] : t[t.length - 1];
            if (n.is("listItem")) {
                let o = n[e ? "previousSibling" : "nextSibling"], r = n.getAttribute("listIndent");
                for (; o && o.is("listItem") && o.getAttribute("listIndent") >= i;) r > o.getAttribute("listIndent") && (r = o.getAttribute("listIndent")), o.getAttribute("listIndent") == r && t[e ? "unshift" : "push"](o), o = o[e ? "previousSibling" : "nextSibling"]
            }
        }

        function Vm(t, e) {
            return e.checkChild(t.parent, "listItem") && !e.isObject(t)
        }

        class Bm extends Cd {
            constructor(t, e) {
                super(t), this._indentBy = "forward" == e ? 1 : -1
            }

            refresh() {
                this.isEnabled = this._checkEnabled()
            }

            execute() {
                const t = this.editor.model, e = t.document;
                let i = Array.from(e.selection.getSelectedBlocks());
                t.change(t => {
                    const e = i[i.length - 1];
                    let n = e.nextSibling;
                    for (; n && "listItem" == n.name && n.getAttribute("listIndent") > e.getAttribute("listIndent");) i.push(n), n = n.nextSibling;
                    this._indentBy < 0 && (i = i.reverse());
                    for (const e of i) {
                        const i = e.getAttribute("listIndent") + this._indentBy;
                        i < 0 ? t.rename(e, "paragraph") : t.setAttribute("listIndent", i, e)
                    }
                })
            }

            _checkEnabled() {
                const t = gu(this.editor.model.document.selection.getSelectedBlocks());
                if (!t || !t.is("listItem")) return !1;
                if (this._indentBy > 0) {
                    const e = t.getAttribute("listIndent"), i = t.getAttribute("listType");
                    let n = t.previousSibling;
                    for (; n && n.is("listItem") && n.getAttribute("listIndent") >= e;) {
                        if (n.getAttribute("listIndent") == e) return n.getAttribute("listType") == i;
                        n = n.previousSibling
                    }
                    return !1
                }
                return !0
            }
        }

        function Fm(t, e) {
            const i = e.mapper, n = e.writer, o = "numbered" == t.getAttribute("listType") ? "ol" : "ul",
                r = function (t) {
                    const e = t.createContainerElement("li");
                    return e.getFillerOffset = Ym, e
                }(n), s = n.createContainerElement(o, null);
            return n.insert(n.createPositionAt(s, 0), r), i.bindElements(t, r), r
        }

        function Hm(t, e, i, n) {
            const o = e.parent, r = i.mapper, s = i.writer;
            let a = r.toViewPosition(n.createPositionBefore(t));
            const c = qm(t.previousSibling, {
                sameIndent: !0,
                smallerIndent: !0,
                listIndent: t.getAttribute("listIndent")
            }), l = t.previousSibling;
            if (c && c.getAttribute("listIndent") == t.getAttribute("listIndent")) {
                const t = r.toViewElement(c);
                a = s.breakContainer(s.createPositionAfter(t))
            } else a = l && "listItem" == l.name ? r.toViewPosition(n.createPositionAt(l, "end")) : r.toViewPosition(n.createPositionBefore(t));
            if (a = Wm(a), s.insert(a, o), l && "listItem" == l.name) {
                const t = r.toViewElement(l),
                    i = s.createRange(s.createPositionAt(t, 0), a).getWalker({ignoreElementEnd: !0});
                for (const t of i) if (t.item.is("li")) {
                    const n = s.breakContainer(s.createPositionBefore(t.item)), o = t.item.parent,
                        r = s.createPositionAt(e, "end");
                    Um(s, r.nodeBefore, r.nodeAfter), s.move(s.createRangeOn(o), r), i.position = n
                }
            } else {
                const i = o.nextSibling;
                if (i && (i.is("ul") || i.is("ol"))) {
                    let n = null;
                    for (const e of i.getChildren()) {
                        const i = r.toModelElement(e);
                        if (!(i && i.getAttribute("listIndent") > t.getAttribute("listIndent"))) break;
                        n = e
                    }
                    n && (s.breakContainer(s.createPositionAfter(n)), s.move(s.createRangeOn(n.parent), s.createPositionAt(e, "end")))
                }
            }
            Um(s, o, o.nextSibling), Um(s, o.previousSibling, o)
        }

        function Um(t, e, i) {
            return !e || !i || "ul" != e.name && "ol" != e.name ? null : e.name != i.name || e.getAttribute("class") !== i.getAttribute("class") ? null : t.mergeContainers(t.createPositionAfter(e))
        }

        function Wm(t) {
            return t.getLastMatchingPosition(t => t.item.is("uiElement"))
        }

        function qm(t, e) {
            const i = !!e.sameIndent, n = !!e.smallerIndent, o = e.listIndent;
            let r = t;
            for (; r && "listItem" == r.name;) {
                const t = r.getAttribute("listIndent");
                if (i && o == t || n && o > t) return r;
                r = r.previousSibling
            }
            return null
        }

        function $m(t, e, i, n) {
            t.ui.componentFactory.add(e, o => {
                const r = t.commands.get(e), s = new nd(o);
                return s.set({
                    label: i,
                    icon: n,
                    tooltip: !0,
                    isToggleable: !0
                }), s.bind("isOn", "isEnabled").to(r, "value", "isEnabled"), s.on("execute", () => t.execute(e)), s
            })
        }

        function Ym() {
            const t = !this.isEmpty && ("ul" == this.getChild(0).name || "ol" == this.getChild(0).name);
            return this.isEmpty || t ? 0 : xn.call(this)
        }

        function Gm(t) {
            return (e, i, n) => {
                const o = n.consumable;
                if (!o.test(i.item, "insert") || !o.test(i.item, "attribute:listType") || !o.test(i.item, "attribute:listIndent")) return;
                o.consume(i.item, "insert"), o.consume(i.item, "attribute:listType"), o.consume(i.item, "attribute:listIndent");
                const r = i.item;
                Hm(r, Fm(r, n), n, t)
            }
        }

        function Qm(t, e, i) {
            if (!i.consumable.consume(e.item, "attribute:listType")) return;
            const n = i.mapper.toViewElement(e.item), o = i.writer;
            o.breakContainer(o.createPositionBefore(n)), o.breakContainer(o.createPositionAfter(n));
            const r = n.parent, s = "numbered" == e.attributeNewValue ? "ol" : "ul";
            o.rename(s, r)
        }

        function Km(t, e, i) {
            const n = i.mapper.toViewElement(e.item).parent, o = i.writer;
            Um(o, n, n.nextSibling), Um(o, n.previousSibling, n);
            for (const t of e.item.getChildren()) i.consumable.consume(t, "insert")
        }

        function Jm(t, e, i) {
            if ("listItem" != e.item.name) {
                let t = i.mapper.toViewPosition(e.range.start);
                const n = i.writer, o = [];
                for (; ("ul" == t.parent.name || "ol" == t.parent.name) && "li" == (t = n.breakContainer(t)).parent.name;) {
                    const e = t, i = n.createPositionAt(t.parent, "end");
                    if (!e.isEqual(i)) {
                        const t = n.remove(n.createRange(e, i));
                        o.push(t)
                    }
                    t = n.createPositionAfter(t.parent)
                }
                if (o.length > 0) {
                    for (let e = 0; e < o.length; e++) {
                        const i = t.nodeBefore;
                        if (t = n.insert(t, o[e]).end, e > 0) {
                            const e = Um(n, i, i.nextSibling);
                            e && e.parent == i && t.offset--
                        }
                    }
                    Um(n, t.nodeBefore, t.nodeAfter)
                }
            }
        }

        function Zm(t, e, i) {
            const n = i.mapper.toViewPosition(e.position), o = n.nodeBefore, r = n.nodeAfter;
            Um(i.writer, o, r)
        }

        function Xm(t, e, i) {
            if (i.consumable.consume(e.viewItem, {name: !0})) {
                const t = i.writer, n = t.createElement("listItem"), o = function (t) {
                    let e = 0, i = t.parent;
                    for (; i;) {
                        if (i.is("li")) e++; else {
                            const t = i.previousSibling;
                            t && t.is("li") && e++
                        }
                        i = i.parent
                    }
                    return e
                }(e.viewItem);
                t.setAttribute("listIndent", o, n);
                const r = e.viewItem.parent && "ol" == e.viewItem.parent.name ? "numbered" : "bulleted";
                t.setAttribute("listType", r, n);
                const s = i.splitToAllowedParent(n, e.modelCursor);
                if (!s) return;
                t.insert(n, s.position);
                const a = function (t, e, i) {
                    const {writer: n, schema: o} = i;
                    let r = n.createPositionAfter(t);
                    for (const s of e) if ("ul" == s.name || "ol" == s.name) r = i.convertItem(s, r).modelCursor; else {
                        const e = i.convertItem(s, n.createPositionAt(t, "end")), a = e.modelRange.start.nodeAfter,
                            c = a && a.is("element") && !o.checkChild(t, a.name);
                        c && (t = e.modelCursor.parent.is("listItem") ? e.modelCursor.parent : op(e.modelCursor), r = n.createPositionAfter(t))
                    }
                    return r
                }(n, e.viewItem.getChildren(), i);
                e.modelRange = t.createRange(e.modelCursor, a), s.cursorParent ? e.modelCursor = t.createPositionAt(s.cursorParent, 0) : e.modelCursor = e.modelRange.end
            }
        }

        function tp(t, e, i) {
            if (i.consumable.test(e.viewItem, {name: !0})) {
                const t = Array.from(e.viewItem.getChildren());
                for (const e of t) {
                    !(e.is("li") || sp(e)) && e._remove()
                }
            }
        }

        function ep(t, e, i) {
            if (i.consumable.test(e.viewItem, {name: !0})) {
                if (0 === e.viewItem.childCount) return;
                const t = [...e.viewItem.getChildren()];
                let i = !1, n = !0;
                for (const e of t) i && !sp(e) && e._remove(), e.is("text") ? (n && (e._data = e.data.replace(/^\s+/, "")), e.nextSibling && !sp(e.nextSibling) || (e._data = e.data.replace(/\s+$/, ""))) : sp(e) && (i = !0), n = !1
            }
        }

        function ip(t) {
            return (e, i) => {
                if (i.isPhantom) return;
                const n = i.modelPosition.nodeBefore;
                if (n && n.is("listItem")) {
                    const e = i.mapper.toViewElement(n), o = e.getAncestors().find(sp),
                        r = t.createPositionAt(e, 0).getWalker();
                    for (const t of r) {
                        if ("elementStart" == t.type && t.item.is("li")) {
                            i.viewPosition = t.previousPosition;
                            break
                        }
                        if ("elementEnd" == t.type && t.item == o) {
                            i.viewPosition = t.nextPosition;
                            break
                        }
                    }
                }
            }
        }

        function np(t, [e, i]) {
            let n, o = e.is("documentFragment") ? e.getChild(0) : e;
            if (n = i ? this.createSelection(i) : this.document.selection, o && o.is("listItem")) {
                const t = n.getFirstPosition();
                let e = null;
                if (t.parent.is("listItem") ? e = t.parent : t.nodeBefore && t.nodeBefore.is("listItem") && (e = t.nodeBefore), e) {
                    const t = e.getAttribute("listIndent");
                    if (t > 0) for (; o && o.is("listItem");) o._setAttribute("listIndent", o.getAttribute("listIndent") + t), o = o.nextSibling
                }
            }
        }

        function op(t) {
            const e = new Us({startPosition: t});
            let i;
            do {
                i = e.next()
            } while (!i.value.item.is("listItem"));
            return i.value.item
        }

        function rp(t, e, i, n, o, r) {
            const s = qm(e.nodeBefore, {sameIndent: !0, smallerIndent: !0, listIndent: t, foo: "b"}), a = o.mapper,
                c = o.writer, l = s ? s.getAttribute("listIndent") : null;
            let d;
            if (s) if (l == t) {
                const t = a.toViewElement(s).parent;
                d = c.createPositionAfter(t)
            } else {
                const t = r.createPositionAt(s, "end");
                d = a.toViewPosition(t)
            } else d = i;
            d = Wm(d);
            for (const t of [...n.getChildren()]) sp(t) && (d = c.move(c.createRangeOn(t), d).end, Um(c, t, t.nextSibling), Um(c, t.previousSibling, t))
        }

        function sp(t) {
            return t.is("ol") || t.is("ul")
        }

        class ap extends vd {
            static get pluginName() {
                return "ListEditing"
            }

            static get requires() {
                return [$g]
            }

            init() {
                const t = this.editor;
                t.model.schema.register("listItem", {
                    inheritAllFrom: "$block",
                    allowAttributes: ["listType", "listIndent"]
                });
                const e = t.data, i = t.editing;
                t.model.document.registerPostFixer(e => (function (t, e) {
                    const i = t.document.differ.getChanges(), n = new Map;
                    let o = !1;
                    for (const n of i) if ("insert" == n.type && "listItem" == n.name) r(n.position); else if ("insert" == n.type && "listItem" != n.name) {
                        if ("$text" != n.name) {
                            const i = n.position.nodeAfter;
                            i.hasAttribute("listIndent") && (e.removeAttribute("listIndent", i), o = !0), i.hasAttribute("listType") && (e.removeAttribute("listType", i), o = !0);
                            for (const e of Array.from(t.createRangeIn(i)).filter(t => t.item.is("listItem"))) r(e.previousPosition)
                        }
                        r(n.position.getShiftedBy(n.length))
                    } else "remove" == n.type && "listItem" == n.name ? r(n.position) : "attribute" == n.type && "listIndent" == n.attributeKey ? r(n.range.start) : "attribute" == n.type && "listType" == n.attributeKey && r(n.range.start);
                    for (const t of n.values()) s(t), a(t);
                    return o;

                    function r(t) {
                        const e = t.nodeBefore;
                        if (e && e.is("listItem")) {
                            let i = e;
                            if (n.has(i)) return;
                            for (; i.previousSibling && i.previousSibling.is("listItem");) if (i = i.previousSibling, n.has(i)) return;
                            n.set(t.nodeBefore, i)
                        } else {
                            const e = t.nodeAfter;
                            e && e.is("listItem") && n.set(e, e)
                        }
                    }

                    function s(t) {
                        let i = 0, n = null;
                        for (; t && t.is("listItem");) {
                            const r = t.getAttribute("listIndent");
                            if (r > i) {
                                let s;
                                null === n ? (n = r - i, s = i) : (n > r && (n = r), s = r - n), e.setAttribute("listIndent", s, t), o = !0
                            } else n = null, i = t.getAttribute("listIndent") + 1;
                            t = t.nextSibling
                        }
                    }

                    function a(t) {
                        let i = [], n = null;
                        for (; t && t.is("listItem");) {
                            const r = t.getAttribute("listIndent");
                            if (n && n.getAttribute("listIndent") > r && (i = i.slice(0, r + 1)), 0 != r) if (i[r]) {
                                const n = i[r];
                                t.getAttribute("listType") != n && (e.setAttribute("listType", n, t), o = !0)
                            } else i[r] = t.getAttribute("listType");
                            n = t, t = t.nextSibling
                        }
                    }
                })(t.model, e)), i.mapper.registerViewToModelLength("li", cp), e.mapper.registerViewToModelLength("li", cp), i.mapper.on("modelToViewPosition", ip(i.view)), i.mapper.on("viewToModelPosition", function (t) {
                    return (e, i) => {
                        const n = i.viewPosition, o = n.parent, r = i.mapper;
                        if ("ul" == o.name || "ol" == o.name) {
                            if (n.isAtEnd) {
                                const e = r.toModelElement(n.nodeBefore), o = r.getModelLength(n.nodeBefore);
                                i.modelPosition = t.createPositionBefore(e).getShiftedBy(o)
                            } else {
                                const e = r.toModelElement(n.nodeAfter);
                                i.modelPosition = t.createPositionBefore(e)
                            }
                            e.stop()
                        } else if ("li" == o.name && n.nodeBefore && ("ul" == n.nodeBefore.name || "ol" == n.nodeBefore.name)) {
                            const s = r.toModelElement(o);
                            let a = 1, c = n.nodeBefore;
                            for (; c && sp(c);) a += r.getModelLength(c), c = c.previousSibling;
                            i.modelPosition = t.createPositionBefore(s).getShiftedBy(a), e.stop()
                        }
                    }
                }(t.model)), e.mapper.on("modelToViewPosition", ip(i.view)), i.downcastDispatcher.on("insert", Jm, {priority: "high"}), i.downcastDispatcher.on("insert:listItem", Gm(t.model)), e.downcastDispatcher.on("insert", Jm, {priority: "high"}), e.downcastDispatcher.on("insert:listItem", Gm(t.model)), i.downcastDispatcher.on("attribute:listType:listItem", Qm, {priority: "high"}), i.downcastDispatcher.on("attribute:listType:listItem", Km, {priority: "low"}), i.downcastDispatcher.on("attribute:listIndent:listItem", function (t) {
                    return (e, i, n) => {
                        if (!n.consumable.consume(i.item, "attribute:listIndent")) return;
                        const o = n.mapper.toViewElement(i.item), r = n.writer;
                        r.breakContainer(r.createPositionBefore(o)), r.breakContainer(r.createPositionAfter(o));
                        const s = o.parent, a = s.previousSibling, c = r.createRangeOn(s);
                        r.remove(c), a && a.nextSibling && Um(r, a, a.nextSibling), rp(i.attributeOldValue + 1, i.range.start, c.start, o, n, t), Hm(i.item, o, n, t);
                        for (const t of i.item.getChildren()) n.consumable.consume(t, "insert")
                    }
                }(t.model)), i.downcastDispatcher.on("remove:listItem", function (t) {
                    return (e, i, n) => {
                        const o = n.mapper.toViewPosition(i.position).getLastMatchingPosition(t => !t.item.is("li")).nodeAfter,
                            r = n.writer;
                        r.breakContainer(r.createPositionBefore(o)), r.breakContainer(r.createPositionAfter(o));
                        const s = o.parent, a = s.previousSibling, c = r.createRangeOn(s), l = r.remove(c);
                        a && a.nextSibling && Um(r, a, a.nextSibling), rp(n.mapper.toModelElement(o).getAttribute("listIndent") + 1, i.position, c.start, o, n, t);
                        for (const t of r.createRangeIn(l).getItems()) n.mapper.unbindViewElement(t);
                        e.stop()
                    }
                }(t.model)), i.downcastDispatcher.on("remove", Zm, {priority: "low"}), e.upcastDispatcher.on("element:ul", tp, {priority: "high"}), e.upcastDispatcher.on("element:ol", tp, {priority: "high"}), e.upcastDispatcher.on("element:li", ep, {priority: "high"}), e.upcastDispatcher.on("element:li", Xm), t.model.on("insertContent", np, {priority: "high"}), t.commands.add("numberedList", new jm(t, "numbered")), t.commands.add("bulletedList", new jm(t, "bulleted")), t.commands.add("indentList", new Bm(t, "forward")), t.commands.add("outdentList", new Bm(t, "backward"));
                const n = i.view.document;
                this.listenTo(n, "enter", (t, e) => {
                    const i = this.editor.model.document, n = i.selection.getLastPosition().parent;
                    i.selection.isCollapsed && "listItem" == n.name && n.isEmpty && (this.editor.execute("outdentList"), e.preventDefault(), t.stop())
                }), this.listenTo(n, "delete", (t, e) => {
                    if ("backward" !== e.direction) return;
                    const i = this.editor.model.document.selection;
                    if (!i.isCollapsed) return;
                    const n = i.getFirstPosition();
                    if (!n.isAtStart) return;
                    const o = n.parent;
                    "listItem" === o.name && (o.previousSibling && "listItem" === o.previousSibling.name || (this.editor.execute("outdentList"), e.preventDefault(), t.stop()))
                }, {priority: "high"});
                const o = t => (e, i) => {
                    this.editor.commands.get(t).isEnabled && (this.editor.execute(t), i())
                };
                t.keystrokes.set("Tab", o("indentList")), t.keystrokes.set("Shift+Tab", o("outdentList"))
            }

            afterInit() {
                const t = this.editor.commands, e = t.get("indent"), i = t.get("outdent");
                e && e.registerChildCommand(t.get("indentList")), i && i.registerChildCommand(t.get("outdentList"))
            }
        }

        function cp(t) {
            let e = 1;
            for (const i of t.getChildren()) if ("ul" == i.name || "ol" == i.name) for (const t of i.getChildren()) e += cp(t);
            return e
        }

        var lp = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>',
            dp = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>';

        class hp extends vd {
            init() {
                const t = this.editor.t;
                $m(this.editor, "numberedList", t("x"), lp), $m(this.editor, "bulletedList", t("y"), dp)
            }
        }

        function up(t, e) {
            return t => {
                t.on("attribute:url:media", i)
            };

            function i(i, n, o) {
                if (!o.consumable.consume(n.item, i.name)) return;
                const r = n.attributeNewValue, s = o.writer, a = o.mapper.toViewElement(n.item);
                s.remove(s.createRangeIn(a));
                const c = t.getMediaViewElement(s, r, e);
                s.insert(s.createPositionAt(a, 0), c)
            }
        }

        function fp(t, e, i, n) {
            const o = t.createContainerElement("figure", {class: "media"});
            return o.getFillerOffset = pp, t.insert(t.createPositionAt(o, 0), e.getMediaViewElement(t, i, n)), o
        }

        function gp(t) {
            const e = t.getSelectedElement();
            return e && e.is("media") ? e : null
        }

        function mp(t, e, i) {
            t.change(n => {
                const o = n.createElement("media", {url: e});
                t.insertContent(o, i), n.setSelection(o, "on")
            })
        }

        function pp() {
            return null
        }

        class bp extends Cd {
            refresh() {
                const t = this.editor.model, e = t.document.selection, i = t.schema, n = e.getFirstPosition(),
                    o = gp(e);
                let r = n.parent;
                r != r.root && (r = r.parent), this.value = o ? o.getAttribute("url") : null, this.isEnabled = i.checkChild(r, "media")
            }

            execute(t) {
                const e = this.editor.model, i = e.document.selection, n = gp(i);
                if (n) e.change(e => {
                    e.setAttribute("url", t, n)
                }); else {
                    const n = ju(i, e);
                    mp(e, t, n)
                }
            }
        }

        var wp = '<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>';
        const kp = "0 0 64 42";

        class _p {
            constructor(t, e) {
                const i = e.providers, n = e.extraProviders || [], o = new Set(e.removeProviders),
                    r = i.concat(n).filter(t => {
                        const e = t.name;
                        return e ? !o.has(e) : (console.warn(Object(Yi.a)("media-embed-no-provider-name: The configured media provider has no name and cannot be used."), {provider: t}), !1)
                    });
                this.locale = t, this.providerDefinitions = r
            }

            hasMedia(t) {
                return !!this._getMedia(t)
            }

            getMediaViewElement(t, e, i) {
                return this._getMedia(e).getViewElement(t, i)
            }

            _getMedia(t) {
                if (!t) return new vp(this.locale);
                t = t.trim();
                for (const e of this.providerDefinitions) {
                    const i = e.html;
                    let n = e.url;
                    Array.isArray(n) || (n = [n]);
                    for (const e of n) {
                        const n = this._getUrlMatches(t, e);
                        if (n) return new vp(this.locale, t, n, i)
                    }
                }
                return null
            }

            _getUrlMatches(t, e) {
                let i = t.match(e);
                if (i) return i;
                let n = t.replace(/^https?:\/\//, "");
                return (i = n.match(e)) ? i : (i = (n = n.replace(/^www\./, "")).match(e)) || null
            }
        }

        class vp {
            constructor(t, e, i, n) {
                this.url = this._getValidUrl(e), this._t = t.t, this._match = i, this._previewRenderer = n
            }

            getViewElement(t, e) {
                const i = {};
                if (e.renderForEditingView || e.renderMediaPreview && this.url && this._previewRenderer) {
                    this.url && (i["data-oembed-url"] = this.url), e.renderForEditingView && (i.class = "ck-media__wrapper");
                    const n = this._getPreviewHtml(e);
                    return t.createUIElement("div", i, function (t) {
                        const e = this.toDomElement(t);
                        return e.innerHTML = n, e
                    })
                }
                return this.url && (i.url = this.url), t.createEmptyElement("oembed", i)
            }

            _getPreviewHtml(t) {
                return this._previewRenderer ? this._previewRenderer(this._match) : this.url && t.renderForEditingView ? this._getPlaceholderHtml() : ""
            }

            _getPlaceholderHtml() {
                const t = new id, e = new ed;
                return t.text = this._t("Open media in new tab"), e.content = wp, e.viewBox = kp, new wl({
                    tag: "div",
                    attributes: {class: "ck ck-reset_all ck-media__placeholder"},
                    children: [{
                        tag: "div",
                        attributes: {class: "ck-media__placeholder__icon"},
                        children: [e]
                    }, {
                        tag: "a",
                        attributes: {
                            class: "ck-media__placeholder__url",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: this.url
                        },
                        children: [{
                            tag: "span",
                            attributes: {class: "ck-media__placeholder__url__text"},
                            children: [this.url]
                        }, t]
                    }]
                }).render().outerHTML
            }

            _getValidUrl(t) {
                return t ? t.match(/^https?/) ? t : "https://" + t : null
            }
        }

        i(81);

        class yp extends vd {
            static get pluginName() {
                return "MediaEmbedEditing"
            }

            constructor(t) {
                super(t), t.config.define("mediaEmbed", {
                    providers: [{
                        name: "dailymotion", url: /^dailymotion\.com\/video\/(\w+)/, html: t => {
                            return '<div style="position: relative; padding-bottom: 100%; height: 0; ">' + `<iframe src="https://www.dailymotion.com/embed/video/${t[1]}" ` + 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>'
                        }
                    }, {
                        name: "spotify",
                        url: [/^open\.spotify\.com\/(artist\/\w+)/, /^open\.spotify\.com\/(album\/\w+)/, /^open\.spotify\.com\/(track\/\w+)/],
                        html: t => {
                            return '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;">' + `<iframe src="https://open.spotify.com/embed/${t[1]}" ` + 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>'
                        }
                    }, {
                        name: "youtube",
                        url: [/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/, /^(?:m\.)?youtube\.com\/v\/([\w-]+)/, /^youtube\.com\/embed\/([\w-]+)/, /^youtu\.be\/([\w-]+)/],
                        html: t => {
                            return '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' + `<iframe src="https://www.youtube.com/embed/${t[1]}" ` + 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'
                        }
                    }, {
                        name: "vimeo",
                        url: [/^vimeo\.com\/(\d+)/, /^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/, /^vimeo\.com\/album\/[^/]+\/video\/(\d+)/, /^vimeo\.com\/channels\/[^/]+\/(\d+)/, /^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/, /^vimeo\.com\/ondemand\/[^/]+\/(\d+)/, /^player\.vimeo\.com\/video\/(\d+)/],
                        html: t => {
                            return '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' + `<iframe src="https://player.vimeo.com/video/${t[1]}" ` + 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
                        }
                    }, {name: "instagram", url: /^instagram\.com\/p\/(\w+)/}, {
                        name: "twitter",
                        url: /^twitter\.com/
                    }, {name: "googleMaps", url: /^google\.com\/maps/}, {
                        name: "flickr",
                        url: /^flickr\.com/
                    }, {name: "facebook", url: /^facebook\.com/}]
                }), this.registry = new _p(t.locale, t.config.get("mediaEmbed"))
            }

            init() {
                const t = this.editor, e = t.model.schema, i = t.t, n = t.conversion,
                    o = t.config.get("mediaEmbed.previewsInData"), r = this.registry;
                t.commands.add("mediaEmbed", new bp(t)), e.register("media", {
                    isObject: !0,
                    isBlock: !0,
                    allowWhere: "$block",
                    allowAttributes: ["url"]
                }), n.for("dataDowncast").elementToElement({
                    model: "media", view: (t, e) => {
                        const i = t.getAttribute("url");
                        return fp(e, r, i, {renderMediaPreview: i && o})
                    }
                }), n.for("dataDowncast").add(up(r, {renderMediaPreview: o})), n.for("editingDowncast").elementToElement({
                    model: "media",
                    view: (t, e) => {
                        const n = t.getAttribute("url");
                        return function (t, e, i) {
                            return e.setCustomProperty("media", !0, t), Ru(t, e, {label: i})
                        }(fp(e, r, n, {renderForEditingView: !0}), e, i("at"))
                    }
                }), n.for("editingDowncast").add(up(r, {renderForEditingView: !0})), n.for("upcast").elementToElement({
                    view: {
                        name: "oembed",
                        attributes: {url: !0}
                    }, model: (t, e) => {
                        const i = t.getAttribute("url");
                        if (r.hasMedia(i)) return e.createElement("media", {url: i})
                    }
                }).elementToElement({
                    view: {name: "div", attributes: {"data-oembed-url": !0}}, model: (t, e) => {
                        const i = t.getAttribute("data-oembed-url");
                        if (r.hasMedia(i)) return e.createElement("media", {url: i})
                    }
                })
            }
        }

        const xp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;

        class Ap extends vd {
            static get requires() {
                return [Td, bh]
            }

            static get pluginName() {
                return "AutoMediaEmbed"
            }

            constructor(t) {
                super(t), this._timeoutId = null, this._positionToInsert = null
            }

            init() {
                const t = this.editor, e = t.model.document;
                this.listenTo(t.plugins.get(Td), "inputTransformation", () => {
                    const t = e.selection.getFirstRange(), i = Lc.fromPosition(t.start);
                    i.stickiness = "toPrevious";
                    const n = Lc.fromPosition(t.end);
                    n.stickiness = "toNext", e.once("change:data", () => {
                        this._embedMediaBetweenPositions(i, n), i.detach(), n.detach()
                    }, {priority: "high"})
                }), t.commands.get("undo").on("execute", () => {
                    this._timeoutId && (tr.window.clearTimeout(this._timeoutId), this._positionToInsert.detach(), this._timeoutId = null, this._positionToInsert = null)
                }, {priority: "high"})
            }

            _embedMediaBetweenPositions(t, e) {
                const i = this.editor, n = i.plugins.get(yp).registry, o = new oa(t, e),
                    r = o.getWalker({ignoreElementEnd: !0});
                let s = "";
                for (const t of r) t.item.is("textProxy") && (s += t.item.data);
                if (!(s = s.trim()).match(xp)) return;
                if (!n.hasMedia(s)) return;
                i.commands.get("mediaEmbed").isEnabled && (this._positionToInsert = Lc.fromPosition(t), this._timeoutId = tr.window.setTimeout(() => {
                    i.model.change(t => {
                        let e;
                        this._timeoutId = null, t.remove(o), "$graveyard" !== this._positionToInsert.root.rootName && (e = this._positionToInsert), mp(i.model, s, e), this._positionToInsert.detach(), this._positionToInsert = null
                    })
                }, 100))
            }
        }

        i(83);

        class Tp extends Ll {
            constructor(t, e) {
                super(e);
                const i = e.t;
                this.focusTracker = new al, this.keystrokes = new Zc, this.urlInputView = this._createUrlInput(), this.saveButtonView = this._createButton(i("cd"), rg, "ck-button-save"), this.saveButtonView.type = "submit", this.cancelButtonView = this._createButton(i("ce"), sg, "ck-button-cancel", "cancel"), this._focusables = new pl, this._focusCycler = new ql({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: "shift + tab", focusNext: "tab"}
                }), this._validators = t, this.setTemplate({
                    tag: "form",
                    attributes: {class: ["ck", "ck-media-form"], tabindex: "-1"},
                    children: [this.urlInputView, this.saveButtonView, this.cancelButtonView]
                })
            }

            render() {
                super.render(), og({view: this}), [this.urlInputView, this.saveButtonView, this.cancelButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                }), this.keystrokes.listenTo(this.element);
                const t = t => t.stopPropagation();
                this.keystrokes.set("arrowright", t), this.keystrokes.set("arrowleft", t), this.keystrokes.set("arrowup", t), this.keystrokes.set("arrowdown", t), this.listenTo(this.urlInputView.element, "selectstart", (t, e) => {
                    e.stopPropagation()
                }, {priority: "high"})
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            get url() {
                return this.urlInputView.inputView.element.value.trim()
            }

            set url(t) {
                this.urlInputView.inputView.element.value = t.trim()
            }

            isValid() {
                this.resetFormStatus();
                for (const t of this._validators) {
                    const e = t(this);
                    if (e) return this.urlInputView.errorText = e, !1
                }
                return !0
            }

            resetFormStatus() {
                this.urlInputView.errorText = null, this.urlInputView.infoText = this._urlInputViewInfoDefault
            }

            _createUrlInput() {
                const t = this.locale.t, e = new ig(this.locale, ng), i = e.inputView;
                return this._urlInputViewInfoDefault = t("cf"), this._urlInputViewInfoTip = t("cg"), e.label = t("ch"), e.infoText = this._urlInputViewInfoDefault, i.placeholder = "https://example.com", i.on("input", () => {
                    e.infoText = i.element.value ? this._urlInputViewInfoTip : this._urlInputViewInfoDefault
                }), e
            }

            _createButton(t, e, i, n) {
                const o = new nd(this.locale);
                return o.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), o.extendTemplate({attributes: {class: i}}), n && o.delegate("execute").to(this, n), o
            }
        }

        var Cp = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18.68 2.53c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.08c0-.58-.01-.55.6-.55h17.38zM15.77 14.5v-10H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 6.677a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V6.676z"/></svg>';

        class Pp extends vd {
            static get requires() {
                return [yp]
            }

            static get pluginName() {
                return "MediaEmbedUI"
            }

            init() {
                const t = this.editor, e = t.commands.get("mediaEmbed"), i = t.plugins.get(yp).registry;
                this.form = new Tp(function (t, e) {
                    return [e => {
                        if (!e.url.length) return t("bd")
                    }, i => {
                        if (!e.hasMedia(i.url)) return t("be")
                    }]
                }(t.t, i), t.locale), t.ui.componentFactory.add("mediaEmbed", i => {
                    const n = hd(i);
                    return this._setUpDropdown(n, this.form, e, t), this._setUpForm(this.form, n, e), n
                })
            }

            _setUpDropdown(t, e, i) {
                const n = this.editor, o = n.t, r = t.buttonView;

                function s() {
                    n.editing.view.focus(), t.isOpen = !1
                }

                t.bind("isEnabled").to(i), t.panelView.children.add(e), r.set({
                    label: o("bc"),
                    icon: Cp,
                    tooltip: !0
                }), r.on("open", () => {
                    e.url = i.value || "", e.urlInputView.select(), e.focus()
                }, {priority: "low"}), t.on("submit", () => {
                    e.isValid() && (n.execute("mediaEmbed", e.url), s())
                }), t.on("change:isOpen", () => e.resetFormStatus()), t.on("cancel", () => s())
            }

            _setUpForm(t, e, i) {
                t.delegate("submit", "cancel").to(e), t.urlInputView.bind("value").to(i, "value"), t.urlInputView.bind("isReadOnly").to(i, "isEnabled", t => !t), t.saveButtonView.bind("isEnabled").to(i)
            }
        }

        i(85);

        function Sp(t, e) {
            if (!t.childCount) return;
            const i = new zg, n = function (t, e) {
                const i = e.createRangeIn(t), n = new bn({name: /^p|h\d+$/, styles: {"mso-list": /.*/}}), o = [];
                for (const t of i) if ("elementStart" === t.type && n.match(t.item)) {
                    const e = Ep(t.item);
                    o.push({element: t.item, id: e.id, order: e.order, indent: e.indent})
                }
                return o
            }(t, i);
            if (!n.length) return;
            let o = null;
            n.forEach((t, r) => {
                if (!o || function (t, e) {
                    if (t.id !== e.id) return !0;
                    const i = e.element.previousSibling;
                    if (!i) return !0;
                    return !function (t) {
                        return t.is("ol") || t.is("ul")
                    }(i)
                }(n[r - 1], t)) {
                    const n = function (t, e) {
                        const i = /mso-level-number-format:([^;]*);/gi,
                            n = new RegExp(`@list l${t.id}:level${t.indent}\\s*({[^}]*)`, "gi").exec(e);
                        let o = "decimal";
                        if (n && n[1]) {
                            const t = i.exec(n[1]);
                            t && t[1] && (o = t[1].trim())
                        }
                        return {type: "bullet" !== o && "image" !== o ? "ol" : "ul", style: o}
                    }(t, e);
                    o = function (t, e, i) {
                        const n = new kn(t.type), o = e.parent.getChildIndex(e);
                        return i.insertChild(o, n, e.parent), n
                    }(n, t.element, i)
                }
                const s = function (t, e) {
                    return function (t, e) {
                        const i = new bn({name: "span", styles: {"mso-list": "Ignore"}}), n = e.createRangeIn(t);
                        for (const t of n) "elementStart" === t.type && i.match(t.item) && e.remove(t.item)
                    }(t, e), e.rename("li", t)
                }(t.element, i);
                i.appendChild(s, o)
            })
        }

        function Ep(t) {
            const e = {}, i = t.getStyle("mso-list");
            return i && (e.id = parseInt(i.match(/(^|\s+)l(\d+)/i)[2]), e.order = parseInt(i.match(/\s*lfo(\d+)/i)[1]), e.indent = parseInt(i.match(/\s*level(\d+)/i)[1])), e
        }

        const Mp = /id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;

        class Ip {
            isActive(t) {
                return Mp.test(t)
            }

            execute(t) {
                const e = new zg;
                !function (t, e) {
                    for (const i of t.getChildren()) if (i.is("b") && "normal" === i.getStyle("font-weight")) {
                        const n = t.getChildIndex(i);
                        e.remove(i), e.insertChild(n, i.getChildren(), t)
                    }
                }(t.content, e), function (t, e) {
                    for (const i of e.createRangeIn(t)) {
                        const t = i.item;
                        if (t.is("li")) {
                            const i = t.getChild(0);
                            i.is("p") && e.unwrapElement(i)
                        }
                    }
                }(t.content, e)
            }
        }

        function Np(t) {
            return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g, (t, e) => 1 === e.length ? " " : Array(e.length + 1).join("  ").substr(0, e.length))
        }

        function Op(t) {
            const e = new DOMParser, i = function (t) {
                return Np(Np(t)).replace(/(<span style=['"]mso-spacerun:yes['"]>[\s]*?)[\r\n]+(\s*<\/span>)/g, "$1$2").replace(/<span style=['"]mso-spacerun:yes['"]><\/span>/g, "").replace(/ <\//g, " </").replace(/ <o:p><\/o:p>/g, " <o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g, "").replace(/>(\s*[\r\n]\s*)</g, "><")
            }(function (t) {
                const e = t.match(/<\/body>(.*?)(<\/html>|$)/);
                e && e[1] && (t = t.slice(0, e.index) + t.slice(e.index).replace(e[1], ""));
                return t
            }(t = t.replace(/<!--\[if gte vml 1]>/g, ""))), n = e.parseFromString(i, "text/html");
            !function (t) {
                t.querySelectorAll("span[style*=spacerun]").forEach(t => {
                    const e = t.childNodes[0].data.length;
                    t.innerHTML = Array(e + 1).join("  ").substr(0, e)
                })
            }(n);
            const o = n.body.innerHTML, r = function (t) {
                const e = new or({blockFillerMode: "nbsp"}), i = t.createDocumentFragment(), n = t.body.childNodes;
                for (; n.length > 0;) i.appendChild(n[0]);
                return e.domToView(i)
            }(n), s = function (t) {
                const e = [], i = [], n = Array.from(t.getElementsByTagName("style"));
                for (const t of n) t.sheet && t.sheet.cssRules && t.sheet.cssRules.length && (e.push(t.sheet), i.push(t.innerHTML));
                return {styles: e, stylesString: i.join(" ")}
            }(n);
            return {body: r, bodyString: o, styles: s.styles, stylesString: s.stylesString}
        }

        function Rp(t, e) {
            if (!t.childCount) return;
            const i = new zg;
            !function (t, e, i) {
                const n = i.createRangeIn(e), o = new bn({name: "img"}), r = [];
                for (const e of n) if (o.match(e.item)) {
                    const i = e.item, n = i.getAttribute("v:shapes") ? i.getAttribute("v:shapes").split(" ") : [];
                    n.length && n.every(e => t.indexOf(e) > -1) ? r.push(i) : i.getAttribute("src") || r.push(i)
                }
                for (const t of r) i.remove(t)
            }(function (t, e) {
                const i = e.createRangeIn(t), n = new bn({name: /v:(.+)/}), o = [];
                for (const t of i) {
                    const e = t.item, i = e.previousSibling && e.previousSibling.name || null;
                    n.match(e) && e.getAttribute("o:gfxdata") && "v:shapetype" !== i && o.push(t.item.getAttribute("id"))
                }
                return o
            }(t, i), t, i), function (t, e) {
                const i = e.createRangeIn(t), n = new bn({name: /v:(.+)/}), o = [];
                for (const t of i) n.match(t.item) && o.push(t.item);
                for (const t of o) e.remove(t)
            }(t, i);
            const n = function (t, e) {
                const i = e.createRangeIn(t), n = new bn({name: "img"}), o = [];
                for (const t of i) n.match(t.item) && t.item.getAttribute("src").startsWith("file://") && o.push(t.item);
                return o
            }(t, i);
            n.length && function (t, e, i) {
                if (t.length === e.length) for (let n = 0; n < t.length; n++) {
                    const o = `data:${e[n].type};base64,${Dp(e[n].hex)}`;
                    i.setAttribute("src", o, t[n])
                }
            }(n, function (t) {
                if (!t) return [];
                const e = /{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,
                    i = new RegExp("(?:(" + e.source + "))([\\da-fA-F\\s]+)\\}", "g"), n = t.match(i), o = [];
                if (n) for (const t of n) {
                    let i = !1;
                    t.includes("\\pngblip") ? i = "image/png" : t.includes("\\jpegblip") && (i = "image/jpeg"), i && o.push({
                        hex: t.replace(e, "").replace(/[^\da-fA-F]/g, ""),
                        type: i
                    })
                }
                return o
            }(e), i)
        }

        function Dp(t) {
            return btoa(t.match(/\w{2}/g).map(t => String.fromCharCode(parseInt(t, 16))).join(""))
        }

        const Lp = /<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,
            jp = /xmlns:o="urn:schemas-microsoft-com/i;

        class zp {
            isActive(t) {
                return Lp.test(t) || jp.test(t)
            }

            execute(t) {
                const {body: e, stylesString: i} = Op(t.dataTransfer.getData("text/html"));
                Sp(e, i), Rp(e, t.dataTransfer.getData("text/rtf")), t.content = e
            }
        }

        function Vp(t, e) {
            let i = e.parent;
            for (; i;) {
                if (i.name === t) return i;
                i = i.parent
            }
        }

        function Bp(t, e, i, n, o = 1) {
            e > o ? n.setAttribute(t, e, i) : n.removeAttribute(t, i)
        }

        function Fp(t, e, i = {}) {
            const n = t.createElement("tableCell", i);
            t.insertElement("paragraph", n), t.insert(n, e)
        }

        function Hp() {
            return t => {
                t.on("element:table", (t, e, i) => {
                    const n = e.viewItem;
                    if (!i.consumable.test(n, {name: !0})) return;
                    const {rows: o, headingRows: r, headingColumns: s} = function (t) {
                        const e = {headingRows: 0, headingColumns: 0}, i = [], n = [];
                        let o;
                        for (const r of Array.from(t.getChildren())) if ("tbody" === r.name || "thead" === r.name || "tfoot" === r.name) {
                            "thead" !== r.name || o || (o = r);
                            const t = Array.from(r.getChildren()).filter(t => t.is("element", "tr"));
                            for (const r of t) if ("thead" === r.parent.name && r.parent === o) e.headingRows++, i.push(r); else {
                                n.push(r);
                                const t = Wp(r);
                                t > e.headingColumns && (e.headingColumns = t)
                            }
                        }
                        return e.rows = [...i, ...n], e
                    }(n), a = {};
                    s && (a.headingColumns = s), r && (a.headingRows = r);
                    const c = i.writer.createElement("table", a), l = i.splitToAllowedParent(c, e.modelCursor);
                    if (l) {
                        if (i.writer.insert(c, l.position), i.consumable.consume(n, {name: !0}), o.length) o.forEach(t => i.convertItem(t, i.writer.createPositionAt(c, "end"))); else {
                            const t = i.writer.createElement("tableRow");
                            i.writer.insert(t, i.writer.createPositionAt(c, "end")), Fp(i.writer, i.writer.createPositionAt(t, "end"))
                        }
                        e.modelRange = i.writer.createRange(i.writer.createPositionBefore(c), i.writer.createPositionAfter(c)), l.cursorParent ? e.modelCursor = i.writer.createPositionAt(l.cursorParent, 0) : e.modelCursor = e.modelRange.end
                    }
                })
            }
        }

        function Up(t) {
            return e => {
                e.on(`element:${t}`, (t, e, i) => {
                    const n = e.viewItem;
                    if (!i.consumable.test(n, {name: !0})) return;
                    const o = i.writer.createElement("tableCell"), r = i.splitToAllowedParent(o, e.modelCursor);
                    if (!r) return;
                    i.writer.insert(o, r.position), i.consumable.consume(n, {name: !0});
                    const s = i.writer.createPositionAt(o, 0);
                    i.convertChildren(n, s), o.childCount || i.writer.insertElement("paragraph", s), e.modelRange = i.writer.createRange(i.writer.createPositionBefore(o), i.writer.createPositionAfter(o)), e.modelCursor = e.modelRange.end
                })
            }
        }

        function Wp(t) {
            let e = 0, i = 0;
            const n = Array.from(t.getChildren()).filter(t => "th" === t.name || "td" === t.name);
            for (; i < n.length && "th" === n[i].name;) {
                const t = n[i];
                e += parseInt(t.getAttribute("colspan") || 1), i++
            }
            return e
        }

        class qp {
            constructor(t, e = {}) {
                this.table = t, this.startRow = e.startRow || 0, this.endRow = "number" == typeof e.endRow ? e.endRow : void 0, this.includeSpanned = !!e.includeSpanned, this.column = "number" == typeof e.column ? e.column : void 0, this._skipRows = new Set, this._row = 0, this._column = 0, this._cellIndex = 0, this._spannedCells = new Map, this._nextCellAtColumn = -1
            }

            [Symbol.iterator]() {
                return this
            }

            next() {
                const t = this.table.getChild(this._row);
                if (!t || this._isOverEndRow()) return {done: !0};
                let e, i, n;
                if (this._isSpanned(this._row, this._column)) e = this._getSpanned(this._row, this._column), i = !this.includeSpanned || this._shouldSkipRow() || this._shouldSkipColumn(), n = this._formatOutValue(e, this._column, !0); else {
                    if (!(e = t.getChild(this._cellIndex))) return this._row++, this._column = 0, this._cellIndex = 0, this._nextCellAtColumn = -1, this.next();
                    const o = parseInt(e.getAttribute("colspan") || 1), r = parseInt(e.getAttribute("rowspan") || 1);
                    (o > 1 || r > 1) && this._recordSpans(this._row, this._column, r, o, e), this._nextCellAtColumn = this._column + o, i = this._shouldSkipRow() || this._shouldSkipColumn(), n = this._formatOutValue(e, this._column, !1, r, o)
                }
                return this._column++, this._column == this._nextCellAtColumn && this._cellIndex++, i ? this.next() : n
            }

            skipRow(t) {
                this._skipRows.add(t)
            }

            _isOverEndRow() {
                return void 0 !== this.endRow && this._row > this.endRow
            }

            _formatOutValue(t, e, i, n = 1, o = 1) {
                return {
                    done: !1,
                    value: {
                        cell: t,
                        row: this._row,
                        column: e,
                        isSpanned: i,
                        rowspan: n,
                        colspan: o,
                        cellIndex: this._cellIndex
                    }
                }
            }

            _shouldSkipRow() {
                const t = this._row < this.startRow, e = this._skipRows.has(this._row);
                return t || e
            }

            _shouldSkipColumn() {
                return void 0 !== this.column && this.column != this._column
            }

            _isSpanned(t, e) {
                if (!this._spannedCells.has(t)) return !1;
                return this._spannedCells.get(t).has(e)
            }

            _getSpanned(t, e) {
                return this._spannedCells.get(t).get(e)
            }

            _recordSpans(t, e, i, n, o) {
                for (let i = e + 1; i <= e + n - 1; i++) this._markSpannedCell(t, i, o);
                for (let r = t + 1; r < t + i; r++) for (let t = e; t <= e + n - 1; t++) this._markSpannedCell(r, t, o)
            }

            _markSpannedCell(t, e, i) {
                this._spannedCells.has(t) || this._spannedCells.set(t, new Map), this._spannedCells.get(t).set(e, i)
            }
        }

        function $p(t) {
            return !!t.getCustomProperty("table") && Ou(t)
        }

        function Yp(t) {
            const e = t.getSelectedElement();
            return e && $p(e) ? e : null
        }

        function Gp(t) {
            const e = Vp("table", t.getFirstPosition());
            return e && $p(e.parent) ? e.parent : null
        }

        function Qp(t = {}) {
            return e => e.on("insert:table", (e, i, n) => {
                const o = i.item;
                if (!n.consumable.consume(o, "insert")) return;
                n.consumable.consume(o, "attribute:headingRows:table"), n.consumable.consume(o, "attribute:headingColumns:table");
                const r = t && t.asWidget, s = n.writer.createContainerElement("figure", {class: "table"}),
                    a = n.writer.createContainerElement("table");
                let c;
                n.writer.insert(n.writer.createPositionAt(s, 0), a), r && (c = function (t, e) {
                    return e.setCustomProperty("table", !0, t), Ru(t, e, {hasSelectionHandle: !0})
                }(s, n.writer));
                const l = new qp(o), d = {
                    headingRows: o.getAttribute("headingRows") || 0,
                    headingColumns: o.getAttribute("headingColumns") || 0
                }, h = new Map;
                for (const e of l) {
                    const {row: i, cell: r} = e, s = sb(rb(i, d), a, n), c = o.getChild(i),
                        l = h.get(i) || nb(c, i, s, n);
                    h.set(i, l), n.consumable.consume(r, "insert"), ib(e, d, n.writer.createPositionAt(l, "end"), n, t)
                }
                const u = n.mapper.toViewPosition(i.range.start);
                n.mapper.bindElements(o, r ? c : s), n.writer.insert(u, r ? c : s)
            })
        }

        function Kp(t = {}) {
            return e => e.on("insert:tableRow", (e, i, n) => {
                const o = i.item;
                if (!n.consumable.consume(o, "insert")) return;
                const r = o.parent, s = db(n.mapper.toViewElement(r)), a = r.getChildIndex(o),
                    c = new qp(r, {startRow: a, endRow: a}), l = {
                        headingRows: r.getAttribute("headingRows") || 0,
                        headingColumns: r.getAttribute("headingColumns") || 0
                    }, d = new Map;
                for (const e of c) {
                    const i = sb(rb(a, l), s, n), r = d.get(a) || nb(o, a, i, n);
                    d.set(a, r), n.consumable.consume(e.cell, "insert"), ib(e, l, n.writer.createPositionAt(r, "end"), n, t)
                }
            })
        }

        function Jp(t = {}) {
            return e => e.on("insert:tableCell", (e, i, n) => {
                const o = i.item;
                if (!n.consumable.consume(o, "insert")) return;
                const r = o.parent, s = r.parent, a = s.getChildIndex(r), c = new qp(s, {startRow: a, endRow: a}), l = {
                    headingRows: s.getAttribute("headingRows") || 0,
                    headingColumns: s.getAttribute("headingColumns") || 0
                };
                for (const e of c) if (e.cell === o) {
                    const i = n.mapper.toViewElement(r);
                    return void ib(e, l, n.writer.createPositionAt(i, r.getChildIndex(o)), n, t)
                }
            })
        }

        function Zp(t = {}) {
            const e = !!t.asWidget;
            return t => t.on("attribute:headingRows:table", (t, i, n) => {
                const o = i.item;
                if (!n.consumable.consume(i.item, t.name)) return;
                const r = db(n.mapper.toViewElement(o)), s = i.attributeOldValue, a = i.attributeNewValue;
                if (a > s) {
                    const t = Array.from(o.getChildren()).filter(({index: t}) => c(t, s - 1, a));
                    lb(t, sb("thead", r, n), n, "end");
                    for (const i of t) for (const t of i.getChildren()) tb(t, "th", n, e);
                    cb("tbody", r, n)
                } else {
                    lb(Array.from(o.getChildren()).filter(({index: t}) => c(t, a - 1, s)).reverse(), sb("tbody", r, n), n, 0);
                    const t = new qp(o, {startRow: a ? a - 1 : a, endRow: s - 1}), i = {
                        headingRows: o.getAttribute("headingRows") || 0,
                        headingColumns: o.getAttribute("headingColumns") || 0
                    };
                    for (const o of t) eb(o, i, n, e);
                    cb("thead", r, n)
                }

                function c(t, e, i) {
                    return t > e && t < i
                }
            })
        }

        function Xp(t = {}) {
            const e = !!t.asWidget;
            return t => t.on("attribute:headingColumns:table", (t, i, n) => {
                const o = i.item;
                if (!n.consumable.consume(i.item, t.name)) return;
                const r = {
                    headingRows: o.getAttribute("headingRows") || 0,
                    headingColumns: o.getAttribute("headingColumns") || 0
                }, s = i.attributeOldValue, a = i.attributeNewValue, c = (s > a ? s : a) - 1;
                for (const t of new qp(o)) t.column > c || eb(t, r, n, e)
            })
        }

        function tb(t, e, i, n) {
            const o = i.writer, r = i.mapper.toViewElement(t);
            if (!r) return;
            let s;
            if (n) {
                s = Lu(o.createEditableElement(e, r.getAttributes()), o), o.insert(o.createPositionAfter(r), s), o.move(o.createRangeIn(r), o.createPositionAt(s, 0)), o.remove(o.createRangeOn(r))
            } else s = o.rename(e, r);
            i.mapper.unbindViewElement(r), i.mapper.bindElements(t, s)
        }

        function eb(t, e, i, n) {
            const {cell: o} = t, r = ob(t, e), s = i.mapper.toViewElement(o);
            s && s.name !== r && tb(o, r, i, n)
        }

        function ib(t, e, i, n, o) {
            const r = o && o.asWidget, s = ob(t, e),
                a = r ? Lu(n.writer.createEditableElement(s), n.writer) : n.writer.createContainerElement(s),
                c = t.cell, l = c.getChild(0), d = 1 === c.childCount && "paragraph" === l.name;
            if (n.writer.insert(i, a), d && !function (t) {
                return !![...t.getAttributeKeys()].length
            }(l)) {
                const t = c.getChild(0), e = n.writer.createPositionAt(a, "end");
                if (n.consumable.consume(t, "insert"), o.asWidget) {
                    const i = n.writer.createContainerElement("span");
                    n.mapper.bindElements(t, i), n.writer.insert(e, i), n.mapper.bindElements(c, a)
                } else n.mapper.bindElements(c, a), n.mapper.bindElements(t, a)
            } else n.mapper.bindElements(c, a)
        }

        function nb(t, e, i, n) {
            n.consumable.consume(t, "insert");
            const o = n.writer.createContainerElement("tr");
            n.mapper.bindElements(t, o);
            const r = t.parent.getAttribute("headingRows") || 0, s = r > 0 && e >= r ? e - r : e,
                a = n.writer.createPositionAt(i, s);
            return n.writer.insert(a, o), o
        }

        function ob(t, e) {
            const {row: i, column: n} = t, {headingColumns: o, headingRows: r} = e;
            return r && r > i ? "th" : o && o > n ? "th" : "td"
        }

        function rb(t, e) {
            return t < e.headingRows ? "thead" : "tbody"
        }

        function sb(t, e, i) {
            const n = ab(t, e);
            return n || function (t, e, i) {
                const n = i.writer.createContainerElement(t),
                    o = i.writer.createPositionAt(e, "tbody" == t ? "end" : 0);
                return i.writer.insert(o, n), n
            }(t, e, i)
        }

        function ab(t, e) {
            for (const i of e.getChildren()) if (i.name == t) return i
        }

        function cb(t, e, i) {
            const n = ab(t, e);
            n && 0 === n.childCount && i.writer.remove(i.writer.createRangeOn(n))
        }

        function lb(t, e, i, n) {
            for (const o of t) {
                const t = i.mapper.toViewElement(o);
                t && i.writer.move(i.writer.createRangeOn(t), i.writer.createPositionAt(e, n))
            }
        }

        function db(t) {
            for (const e of t.getChildren()) if ("table" === e.name) return e
        }

        class hb extends Cd {
            refresh() {
                const t = this.editor.model, e = t.document.selection, i = t.schema, n = function (t) {
                    const e = t.parent;
                    return e === e.root ? e : e.parent
                }(e.getFirstPosition());
                this.isEnabled = i.checkChild(n, "table")
            }

            execute(t = {}) {
                const e = this.editor.model, i = e.document.selection, n = this.editor.plugins.get("TableUtils"),
                    o = parseInt(t.rows) || 2, r = parseInt(t.columns) || 2, s = ju(i, e);
                e.change(t => {
                    const i = n.createTable(t, o, r);
                    e.insertContent(i, s), t.setSelection(t.createPositionAt(i.getNodeByPath([0, 0, 0]), 0))
                })
            }
        }

        class ub extends Cd {
            constructor(t, e = {}) {
                super(t), this.order = e.order || "below"
            }

            refresh() {
                const t = Vp("table", this.editor.model.document.selection.getFirstPosition());
                this.isEnabled = !!t
            }

            execute() {
                const t = this.editor, e = t.model.document.selection, i = t.plugins.get("TableUtils"),
                    n = Vp("tableCell", e.getFirstPosition()).parent, o = n.parent, r = o.getChildIndex(n),
                    s = "below" === this.order ? r + 1 : r;
                i.insertRows(o, {rows: 1, at: s})
            }
        }

        class fb extends Cd {
            constructor(t, e = {}) {
                super(t), this.order = e.order || "right"
            }

            refresh() {
                const t = Vp("table", this.editor.model.document.selection.getFirstPosition());
                this.isEnabled = !!t
            }

            execute() {
                const t = this.editor, e = t.model.document.selection, i = t.plugins.get("TableUtils"),
                    n = Vp("tableCell", e.getFirstPosition()), o = n.parent.parent, {column: r} = i.getCellLocation(n),
                    s = "right" === this.order ? r + 1 : r;
                i.insertColumns(o, {columns: 1, at: s})
            }
        }

        class gb extends Cd {
            constructor(t, e = {}) {
                super(t), this.direction = e.direction || "horizontally"
            }

            refresh() {
                const t = Vp("tableCell", this.editor.model.document.selection.getFirstPosition());
                this.isEnabled = !!t
            }

            execute() {
                const t = Vp("tableCell", this.editor.model.document.selection.getFirstPosition()),
                    e = "horizontally" === this.direction, i = this.editor.plugins.get("TableUtils");
                e ? i.splitCellHorizontally(t, 2) : i.splitCellVertically(t, 2)
            }
        }

        class mb extends Cd {
            constructor(t, e) {
                super(t), this.direction = e.direction, this.isHorizontal = "right" == this.direction || "left" == this.direction
            }

            refresh() {
                const t = this._getMergeableCell();
                this.value = t, this.isEnabled = !!t
            }

            execute() {
                const t = this.editor.model, e = Vp("tableCell", t.document.selection.getFirstPosition()),
                    i = this.value, n = this.direction;
                t.change(t => {
                    const o = "right" == n || "down" == n, r = o ? e : i, s = o ? i : e, a = s.parent;
                    !function (t, e, i) {
                        pb(t) || (pb(e) && i.remove(i.createRangeIn(e)), i.move(i.createRangeIn(t), i.createPositionAt(e, "end")));
                        i.remove(t)
                    }(s, r, t);
                    const c = this.isHorizontal ? "colspan" : "rowspan", l = parseInt(e.getAttribute(c) || 1),
                        d = parseInt(i.getAttribute(c) || 1);
                    t.setAttribute(c, l + d, r), t.setSelection(t.createRangeIn(r)), a.childCount || function (t, e) {
                        const i = t.parent, n = i.getChildIndex(t);
                        for (const {cell: t, row: o, rowspan: r} of new qp(i, {endRow: n})) {
                            const i = o + r - 1 >= n;
                            i && Bp("rowspan", r - 1, t, e)
                        }
                        e.remove(t)
                    }(a, t)
                })
            }

            _getMergeableCell() {
                const t = Vp("tableCell", this.editor.model.document.selection.getFirstPosition());
                if (!t) return;
                const e = this.editor.plugins.get("TableUtils"), i = this.isHorizontal ? function (t, e, i) {
                    const n = "right" == e ? t.nextSibling : t.previousSibling;
                    if (!n) return;
                    const o = "right" == e ? t : n,
                        r = "right" == e ? n : t, {column: s} = i.getCellLocation(o), {column: a} = i.getCellLocation(r),
                        c = parseInt(o.getAttribute("colspan") || 1);
                    return s + c === a ? n : void 0
                }(t, this.direction, e) : function (t, e) {
                    const i = t.parent, n = i.parent, o = n.getChildIndex(i);
                    if ("down" == e && o === n.childCount - 1 || "up" == e && 0 === o) return;
                    const r = parseInt(t.getAttribute("rowspan") || 1), s = n.getAttribute("headingRows") || 0;
                    if (s && ("down" == e && o + r === s || "up" == e && o === s)) return;
                    const a = parseInt(t.getAttribute("rowspan") || 1), c = "down" == e ? o + a : o,
                        l = [...new qp(n, {endRow: c})], d = l.find(e => e.cell === t).column,
                        h = l.find(({row: t, rowspan: i, column: n}) => n === d && ("down" == e ? t === c : c === t + i));
                    return h && h.cell
                }(t, this.direction);
                if (!i) return;
                const n = this.isHorizontal ? "rowspan" : "colspan", o = parseInt(t.getAttribute(n) || 1);
                return parseInt(i.getAttribute(n) || 1) === o ? i : void 0
            }
        }

        function pb(t) {
            return 1 == t.childCount && t.getChild(0).is("paragraph") && t.getChild(0).isEmpty
        }

        class bb extends Cd {
            refresh() {
                const t = Vp("tableCell", this.editor.model.document.selection.getFirstPosition());
                this.isEnabled = !!t && t.parent.parent.childCount > 1
            }

            execute() {
                const t = this.editor.model, e = Vp("tableCell", t.document.selection.getFirstPosition()).parent,
                    i = e.parent, n = i.getChildIndex(e), o = i.getAttribute("headingRows") || 0;
                t.change(t => {
                    o && n <= o && Bp("headingRows", o - 1, i, t, 0);
                    const r = [...new qp(i, {endRow: n})], s = new Map;
                    r.filter(({row: t, rowspan: e}) => t === n && e > 1).forEach(({column: t, cell: e, rowspan: i}) => s.set(t, {
                        cell: e,
                        rowspanToSet: i - 1
                    })), r.filter(({row: t, rowspan: e}) => t <= n - 1 && t + e > n).forEach(({cell: e, rowspan: i}) => Bp("rowspan", i - 1, e, t));
                    const a = n + 1, c = new qp(i, {includeSpanned: !0, startRow: a, endRow: a});
                    let l;
                    for (const {row: e, column: n, cell: o} of [...c]) if (s.has(n)) {
                        const {cell: o, rowspanToSet: r} = s.get(n),
                            a = l ? t.createPositionAfter(l) : t.createPositionAt(i.getChild(e), 0);
                        t.move(t.createRangeOn(o), a), Bp("rowspan", r, o, t), l = o
                    } else l = o;
                    t.remove(e)
                })
            }
        }

        class wb extends Cd {
            refresh() {
                const t = this.editor, e = t.model.document.selection, i = t.plugins.get("TableUtils"),
                    n = Vp("tableCell", e.getFirstPosition());
                this.isEnabled = !!n && i.getColumns(n.parent.parent) > 1
            }

            execute() {
                const t = this.editor.model, e = Vp("tableCell", t.document.selection.getFirstPosition()), i = e.parent,
                    n = i.parent, o = n.getAttribute("headingColumns") || 0, r = n.getChildIndex(i), s = [...new qp(n)],
                    a = s.find(t => t.cell === e).column;
                t.change(t => {
                    o && r <= o && t.setAttribute("headingColumns", o - 1, n);
                    for (const {cell: e, column: i, colspan: n} of s) i <= a && n > 1 && i + n > a ? Bp("colspan", n - 1, e, t) : i === a && t.remove(e)
                })
            }
        }

        class kb extends Cd {
            refresh() {
                const t = Vp("tableCell", this.editor.model.document.selection.getFirstPosition()), e = !!t;
                this.isEnabled = e, this.value = e && this._isInHeading(t, t.parent.parent)
            }

            execute(t = {}) {
                const e = this.editor.model, i = Vp("tableCell", e.document.selection.getFirstPosition()).parent,
                    n = i.parent, o = n.getAttribute("headingRows") || 0, r = i.index;
                if (t.forceValue === this.value) return;
                const s = this.value ? r : r + 1;
                e.change(t => {
                    if (s) {
                        const e = function (t, e, i) {
                            const n = [], o = new qp(t, {startRow: e > i ? i : 0, endRow: e - 1});
                            for (const {row: t, rowspan: i, cell: r} of o) i > 1 && t + i > e && n.push(r);
                            return n
                        }(n, s, o);
                        for (const i of e) _b(i, s, t)
                    }
                    Bp("headingRows", s, n, t, 0)
                })
            }

            _isInHeading(t, e) {
                const i = parseInt(e.getAttribute("headingRows") || 0);
                return !!i && t.parent.index < i
            }
        }

        function _b(t, e, i) {
            const n = t.parent, o = n.parent, r = e - n.index, s = {}, a = parseInt(t.getAttribute("rowspan")) - r;
            a > 1 && (s.rowspan = a);
            const c = parseInt(t.getAttribute("colspan") || 1);
            c > 1 && (s.colspan = c);
            const l = o.getChildIndex(n), d = l + r, h = [...new qp(o, {startRow: l, endRow: d, includeSpanned: !0})];
            let u;
            for (const {row: e, column: n, cell: r, cellIndex: a} of h) if (r === t && void 0 === u && (u = n), void 0 !== u && u === n && e === d) {
                const t = o.getChild(e);
                Fp(i, i.createPositionAt(t, a), s)
            }
            Bp("rowspan", r, t, i)
        }

        class vb extends Cd {
            refresh() {
                const t = Vp("tableCell", this.editor.model.document.selection.getFirstPosition()), e = !!t;
                this.isEnabled = e, this.value = e && this._isInHeading(t, t.parent.parent)
            }

            execute(t = {}) {
                const e = this.editor.model, i = e.document.selection, n = this.editor.plugins.get("TableUtils"),
                    o = Vp("tableCell", i.getFirstPosition()), r = o.parent.parent, {column: s} = n.getCellLocation(o);
                if (t.forceValue === this.value) return;
                const a = this.value ? s : s + 1;
                e.change(t => {
                    Bp("headingColumns", a, r, t, 0)
                })
            }

            _isInHeading(t, e) {
                const i = parseInt(e.getAttribute("headingColumns") || 0),
                    n = this.editor.plugins.get("TableUtils"), {column: o} = n.getCellLocation(t);
                return !!i && o < i
            }
        }

        class yb extends vd {
            static get pluginName() {
                return "TableUtils"
            }

            getCellLocation(t) {
                const e = t.parent, i = e.parent, n = i.getChildIndex(e), o = new qp(i, {startRow: n, endRow: n});
                for (const {cell: e, row: i, column: n} of o) if (e === t) return {row: i, column: n}
            }

            createTable(t, e, i) {
                const n = t.createElement("table");
                return xb(t, n, 0, e, i), n
            }

            insertRows(t, e = {}) {
                const i = this.editor.model, n = e.at || 0, o = e.rows || 1;
                i.change(e => {
                    const i = t.getAttribute("headingRows") || 0;
                    if (i > n && e.setAttribute("headingRows", i + o, t), 0 === n || n === t.childCount) return void xb(e, t, n, o, this.getColumns(t));
                    const r = new qp(t, {endRow: n});
                    let s = 0;
                    for (const {row: t, rowspan: i, colspan: a, cell: c} of r) {
                        t < n && t + i > n && e.setAttribute("rowspan", i + o, c), t === n && (s += a)
                    }
                    xb(e, t, n, o, s)
                })
            }

            insertColumns(t, e = {}) {
                const i = this.editor.model, n = e.at || 0, o = e.columns || 1;
                i.change(e => {
                    const i = t.getAttribute("headingColumns");
                    n < i && e.setAttribute("headingColumns", i + o, t);
                    const r = this.getColumns(t);
                    if (0 === n || r === n) {
                        for (const i of t.getChildren()) Ab(o, e, e.createPositionAt(i, n ? "end" : 0));
                        return
                    }
                    const s = new qp(t, {column: n, includeSpanned: !0});
                    for (const {row: i, cell: r, cellIndex: a} of s) {
                        const c = parseInt(r.getAttribute("rowspan") || 1),
                            l = parseInt(r.getAttribute("colspan") || 1);
                        if (r.index !== n && l > 1) {
                            if (e.setAttribute("colspan", l + o, r), s.skipRow(i), c > 1) for (let t = i + 1; t < i + c; t++) s.skipRow(t)
                        } else {
                            const n = e.createPositionAt(t.getChild(i), a);
                            Ab(o, e, n)
                        }
                    }
                })
            }

            splitCellVertically(t, e = 2) {
                const i = this.editor.model, n = t.parent.parent, o = parseInt(t.getAttribute("rowspan") || 1),
                    r = parseInt(t.getAttribute("colspan") || 1);
                i.change(i => {
                    if (r > 1) {
                        const {newCellsSpan: n, updatedSpan: s} = Tb(r, e);
                        Bp("colspan", s, t, i);
                        const a = {};
                        n > 1 && (a.colspan = n), o > 1 && (a.rowspan = o), Ab(r > e ? e - 1 : r - 1, i, i.createPositionAfter(t), a)
                    }
                    if (r < e) {
                        const s = e - r, a = [...new qp(n)], {column: c} = a.find(({cell: e}) => e === t),
                            l = a.filter(({cell: e, colspan: i, column: n}) => {
                                return e !== t && n === c || n < c && n + i > c
                            });
                        for (const {cell: t, colspan: e} of l) i.setAttribute("colspan", e + s, t);
                        const d = {};
                        o > 1 && (d.rowspan = o), Ab(s, i, i.createPositionAfter(t), d);
                        const h = n.getAttribute("headingColumns") || 0;
                        h > c && Bp("headingColumns", h + s, n, i)
                    }
                })
            }

            splitCellHorizontally(t, e = 2) {
                const i = this.editor.model, n = t.parent, o = n.parent, r = o.getChildIndex(n),
                    s = parseInt(t.getAttribute("rowspan") || 1), a = parseInt(t.getAttribute("colspan") || 1);
                i.change(i => {
                    if (s > 1) {
                        const n = [...new qp(o, {
                            startRow: r,
                            endRow: r + s - 1,
                            includeSpanned: !0
                        })], {newCellsSpan: c, updatedSpan: l} = Tb(s, e);
                        Bp("rowspan", l, t, i);
                        const {column: d} = n.find(({cell: e}) => e === t), h = {};
                        c > 1 && (h.rowspan = c), a > 1 && (h.colspan = a);
                        for (const {column: t, row: e, cellIndex: s} of n) {
                            if (e >= r + l && t === d && (e + r + l) % c == 0) {
                                Ab(1, i, i.createPositionAt(o.getChild(e), s), h)
                            }
                        }
                    }
                    if (s < e) {
                        const n = e - s, c = [...new qp(o, {startRow: 0, endRow: r})];
                        for (const {cell: e, rowspan: o, row: s} of c) if (e !== t && s + o > r) {
                            const t = o + n;
                            i.setAttribute("rowspan", t, e)
                        }
                        const l = {};
                        a > 1 && (l.colspan = a), xb(i, o, r + 1, n, 1, l);
                        const d = o.getAttribute("headingRows") || 0;
                        d > r && Bp("headingRows", d + n, o, i)
                    }
                })
            }

            getColumns(t) {
                return [...t.getChild(0).getChildren()].reduce((t, e) => {
                    return t + parseInt(e.getAttribute("colspan") || 1)
                }, 0)
            }
        }

        function xb(t, e, i, n, o, r = {}) {
            for (let s = 0; s < n; s++) {
                const n = t.createElement("tableRow");
                t.insert(n, e, i), Ab(o, t, t.createPositionAt(n, "end"), r)
            }
        }

        function Ab(t, e, i, n = {}) {
            for (let o = 0; o < t; o++) Fp(e, i, n)
        }

        function Tb(t, e) {
            if (t < e) return {newCellsSpan: 1, updatedSpan: 1};
            const i = Math.floor(t / e);
            return {newCellsSpan: i, updatedSpan: t - i * e + i}
        }

        function Cb(t) {
            t.document.registerPostFixer(e => (function (t, e) {
                const i = e.document.differ.getChanges();
                let n = !1;
                const o = new Set;
                for (const e of i) {
                    let i;
                    "table" == e.name && "insert" == e.type && (i = e.position.nodeAfter), "tableRow" != e.name && "tableCell" != e.name || (i = Vp("table", e.position)), Eb(e) && (i = Vp("table", e.range.start)), i && !o.has(i) && (n = Pb(i, t) || n, n = Sb(i, t) || n, o.add(i))
                }
                return n
            })(e, t))
        }

        function Pb(t, e) {
            let i = !1;
            const n = function (t) {
                const e = parseInt(t.getAttribute("headingRows") || 0), i = t.childCount, n = [];
                for (const {row: o, rowspan: r, cell: s} of new qp(t)) {
                    if (r < 2) continue;
                    const t = o < e, a = t ? e : i;
                    if (o + r > a) {
                        const t = a - o;
                        n.push({cell: s, rowspan: t})
                    }
                }
                return n
            }(t);
            if (n.length) {
                i = !0;
                for (const t of n) Bp("rowspan", t.rowspan, t.cell, e, 1)
            }
            return i
        }

        function Sb(t, e) {
            let i = !1;
            const n = function (t) {
                const e = {};
                for (const {row: i} of new qp(t, {includeSpanned: !0})) e[i] || (e[i] = 0), e[i] += 1;
                return e
            }(t), o = n[0];
            if (!Object.values(n).every(t => t === o)) {
                const o = Object.values(n).reduce((t, e) => e > t ? e : t, 0);
                for (const [r, s] of Object.entries(n)) {
                    const n = o - s;
                    if (n) {
                        for (let i = 0; i < n; i++) Fp(e, e.createPositionAt(t.getChild(r), "end"));
                        i = !0
                    }
                }
            }
            return i
        }

        function Eb(t) {
            const e = "attribute" === t.type, i = t.attributeKey;
            return e && ("headingRows" === i || "colspan" === i || "rowspan" === i)
        }

        function Mb(t) {
            t.document.registerPostFixer(e => (function (t, e) {
                const i = e.document.differ.getChanges();
                let n = !1;
                for (const e of i) "insert" == e.type && "table" == e.name && (n = Ib(e.position.nodeAfter, t) || n), "insert" == e.type && "tableRow" == e.name && (n = Nb(e.position.nodeAfter, t) || n), "insert" == e.type && "tableCell" == e.name && (n = Ob(e.position.nodeAfter, t) || n), Rb(e) && (n = Ob(e.position.parent, t) || n);
                return n
            })(e, t))
        }

        function Ib(t, e) {
            let i = !1;
            for (const n of t.getChildren()) i = Nb(n, e) || i;
            return i
        }

        function Nb(t, e) {
            let i = !1;
            for (const n of t.getChildren()) i = Ob(n, e) || i;
            return i
        }

        function Ob(t, e) {
            if (0 == t.childCount) return e.insertElement("paragraph", t), !0;
            const i = Array.from(t.getChildren()).filter(t => t.is("text"));
            for (const t of i) e.wrap(e.createRangeOn(t), "paragraph");
            return !!i.length
        }

        function Rb(t) {
            return !(!t.position || !t.position.parent.is("tableCell")) && ("insert" == t.type && "$text" == t.name || "remove" == t.type)
        }

        function Db(t) {
            t.document.registerPostFixer(() => (function (t) {
                const e = t.document.differ, i = new Set;
                for (const t of e.getChanges()) {
                    const e = "insert" == t.type || "remove" == t.type ? t.position.parent : t.range.start.parent;
                    e.is("tableCell") && Lb(e, t.type) && i.add(e)
                }
                if (i.size) {
                    for (const t of i.values()) e.refreshItem(t);
                    return !0
                }
                return !1
            })(t))
        }

        function Lb(t, e) {
            if (!Array.from(t.getChildren()).some(t => t.is("paragraph"))) return !1;
            if ("attribute" == e) {
                const e = Array.from(t.getChild(0).getAttributeKeys()).length;
                return 1 === t.childCount && e < 2
            }
            return t.childCount <= ("insert" == e ? 2 : 1)
        }

        i(87);

        class jb extends vd {
            static get pluginName() {
                return "TableEditing"
            }

            init() {
                const t = this.editor, e = t.model, i = e.schema, n = t.conversion;
                i.register("table", {
                    allowWhere: "$block",
                    allowAttributes: ["headingRows", "headingColumns"],
                    isLimit: !0,
                    isObject: !0,
                    isBlock: !0
                }), i.register("tableRow", {
                    allowIn: "table",
                    isLimit: !0
                }), i.register("tableCell", {
                    allowIn: "tableRow",
                    allowAttributes: ["colspan", "rowspan"],
                    isLimit: !0
                }), i.extend("$block", {allowIn: "tableCell"}), i.addChildCheck((t, e) => {
                    if ("table" == e.name && Array.from(t.getNames()).includes("table")) return !1
                }), n.for("upcast").add(Hp()), n.for("editingDowncast").add(Qp({asWidget: !0})), n.for("dataDowncast").add(Qp()), n.for("upcast").elementToElement({
                    model: "tableRow",
                    view: "tr"
                }), n.for("editingDowncast").add(Kp({asWidget: !0})), n.for("dataDowncast").add(Kp()), n.for("downcast").add(t => t.on("remove:tableRow", (t, e, i) => {
                    t.stop();
                    const n = i.writer, o = i.mapper,
                        r = o.toViewPosition(e.position).getLastMatchingPosition(t => !t.item.is("tr")).nodeAfter,
                        s = r.parent, a = n.createRangeOn(r), c = n.remove(a);
                    for (const t of n.createRangeIn(c).getItems()) o.unbindViewElement(t);
                    s.childCount || n.remove(n.createRangeOn(s))
                }, {priority: "higher"})), n.for("upcast").add(Up("td")), n.for("upcast").add(Up("th")), n.for("editingDowncast").add(Jp({asWidget: !0})), n.for("dataDowncast").add(Jp()), n.attributeToAttribute({
                    model: "colspan",
                    view: "colspan"
                }), n.attributeToAttribute({
                    model: "rowspan",
                    view: "rowspan"
                }), n.for("editingDowncast").add(Xp({asWidget: !0})), n.for("dataDowncast").add(Xp()), n.for("editingDowncast").add(Zp({asWidget: !0})), n.for("dataDowncast").add(Zp()), t.commands.add("insertTable", new hb(t)), t.commands.add("insertTableRowAbove", new ub(t, {order: "above"})), t.commands.add("insertTableRowBelow", new ub(t, {order: "below"})), t.commands.add("insertTableColumnLeft", new fb(t, {order: "left"})), t.commands.add("insertTableColumnRight", new fb(t, {order: "right"})), t.commands.add("removeTableRow", new bb(t)), t.commands.add("removeTableColumn", new wb(t)), t.commands.add("splitTableCellVertically", new gb(t, {direction: "vertically"})), t.commands.add("splitTableCellHorizontally", new gb(t, {direction: "horizontally"})), t.commands.add("mergeTableCellRight", new mb(t, {direction: "right"})), t.commands.add("mergeTableCellLeft", new mb(t, {direction: "left"})), t.commands.add("mergeTableCellDown", new mb(t, {direction: "down"})), t.commands.add("mergeTableCellUp", new mb(t, {direction: "up"})), t.commands.add("setTableColumnHeader", new vb(t)), t.commands.add("setTableRowHeader", new kb(t)), Cb(e), Db(e), Mb(e), this.editor.keystrokes.set("Tab", (...t) => this._handleTabOnSelectedTable(...t), {priority: "low"}), this.editor.keystrokes.set("Tab", this._getTabHandler(!0), {priority: "low"}), this.editor.keystrokes.set("Shift+Tab", this._getTabHandler(!1), {priority: "low"})
            }

            static get requires() {
                return [yb]
            }

            _handleTabOnSelectedTable(t, e) {
                const i = this.editor, n = i.model.document.selection;
                if (!n.isCollapsed && 1 === n.rangeCount && n.getFirstRange().isFlat) {
                    const t = n.getSelectedElement();
                    if (!t || !t.is("table")) return;
                    e(), i.model.change(e => {
                        e.setSelection(e.createRangeIn(t.getChild(0).getChild(0)))
                    })
                }
            }

            _getTabHandler(t) {
                const e = this.editor;
                return (i, n) => {
                    const o = Vp("tableCell", e.model.document.selection.getFirstPosition());
                    if (!o) return;
                    n();
                    const r = o.parent, s = r.parent, a = s.getChildIndex(r), c = r.getChildIndex(o), l = 0 === c;
                    if (!t && l && 0 === a) return;
                    const d = c === r.childCount - 1, h = a === s.childCount - 1;
                    if (t && h && d && (e.execute("insertTableRowBelow"), a === s.childCount - 1)) return;
                    let u;
                    if (t && d) {
                        const t = s.getChild(a + 1);
                        u = t.getChild(0)
                    } else if (!t && l) {
                        const t = s.getChild(a - 1);
                        u = t.getChild(t.childCount - 1)
                    } else u = r.getChild(c + (t ? 1 : -1));
                    e.model.change(t => {
                        t.setSelection(t.createRangeIn(u))
                    })
                }
            }
        }

        i(89);

        class zb extends Ll {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.items = this.createCollection(), this.set("rows", 0), this.set("columns", 0), this.bind("label").to(this, "columns", this, "rows", (t, e) => `${e} × ${t}`), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck"]},
                    children: [{
                        tag: "div",
                        attributes: {class: ["ck-insert-table-dropdown__grid"]},
                        children: this.items
                    }, {
                        tag: "div",
                        attributes: {class: ["ck-insert-table-dropdown__label"]},
                        children: [{text: e.to("label")}]
                    }],
                    on: {
                        mousedown: e.to(t => {
                            t.preventDefault()
                        }), click: e.to(() => {
                            this.fire("execute")
                        })
                    }
                });
                for (let t = 0; t < 100; t++) {
                    const e = new Vb;
                    e.on("over", () => {
                        const e = Math.floor(t / 10), i = t % 10;
                        this.set("rows", e + 1), this.set("columns", i + 1)
                    }), this.items.add(e)
                }
                this.on("change:columns", () => {
                    this._highlightGridBoxes()
                }), this.on("change:rows", () => {
                    this._highlightGridBoxes()
                })
            }

            focus() {
            }

            focusLast() {
            }

            _highlightGridBoxes() {
                const t = this.rows, e = this.columns;
                this.items.map((i, n) => {
                    const o = Math.floor(n / 10) < t && n % 10 < e;
                    i.set("isOn", o)
                })
            }
        }

        class Vb extends Ll {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("isOn", !1), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck-insert-table-dropdown-grid-box", e.if("isOn", "ck-on")]},
                    on: {mouseover: e.to("over")}
                })
            }
        }

        var Bb = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',
            Fb = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',
            Hb = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',
            Ub = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>';

        class Wb extends vd {
            init() {
                const t = this.editor, e = this.editor.t, i = "ltr" === t.locale.contentLanguageDirection;
                t.ui.componentFactory.add("insertTable", i => {
                    const n = t.commands.get("insertTable"), o = hd(i);
                    o.bind("isEnabled").to(n), o.buttonView.set({icon: Bb, label: e("z"), tooltip: !0});
                    const r = new zb(i);
                    return o.panelView.children.add(r), r.delegate("execute").to(o), o.buttonView.on("open", () => {
                        r.rows = 0, r.columns = 0
                    }), o.on("execute", () => {
                        t.execute("insertTable", {rows: r.rows, columns: r.columns}), t.editing.view.focus()
                    }), o
                }), t.ui.componentFactory.add("tableColumn", t => {
                    const n = [{
                        type: "switchbutton",
                        model: {commandName: "setTableColumnHeader", label: e("aa"), bindIsOn: !0}
                    }, {type: "separator"}, {
                        type: "button",
                        model: {commandName: i ? "insertTableColumnLeft" : "insertTableColumnRight", label: e("ab")}
                    }, {
                        type: "button",
                        model: {commandName: i ? "insertTableColumnRight" : "insertTableColumnLeft", label: e("ac")}
                    }, {type: "button", model: {commandName: "removeTableColumn", label: e("ad")}}];
                    return this._prepareDropdown(e("ae"), Fb, n, t)
                }), t.ui.componentFactory.add("tableRow", t => {
                    const i = [{
                        type: "switchbutton",
                        model: {commandName: "setTableRowHeader", label: e("af"), bindIsOn: !0}
                    }, {type: "separator"}, {
                        type: "button",
                        model: {commandName: "insertTableRowBelow", label: e("ag")}
                    }, {type: "button", model: {commandName: "insertTableRowAbove", label: e("ah")}}, {
                        type: "button",
                        model: {commandName: "removeTableRow", label: e("ai")}
                    }];
                    return this._prepareDropdown(e("aj"), Hb, i, t)
                }), t.ui.componentFactory.add("mergeTableCells", t => {
                    const n = [{
                        type: "button",
                        model: {commandName: "mergeTableCellUp", label: e("ak")}
                    }, {
                        type: "button",
                        model: {commandName: i ? "mergeTableCellRight" : "mergeTableCellLeft", label: e("al")}
                    }, {type: "button", model: {commandName: "mergeTableCellDown", label: e("am")}}, {
                        type: "button",
                        model: {commandName: i ? "mergeTableCellLeft" : "mergeTableCellRight", label: e("an")}
                    }, {type: "separator"}, {
                        type: "button",
                        model: {commandName: "splitTableCellVertically", label: e("ao")}
                    }, {type: "button", model: {commandName: "splitTableCellHorizontally", label: e("ap")}}];
                    return this._prepareDropdown(e("aq"), Ub, n, t)
                })
            }

            _prepareDropdown(t, e, i, n) {
                const o = this.editor, r = hd(n), s = [], a = new oo;
                for (const t of i) qb(t, o, s, a);
                return fd(r, a), r.buttonView.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), r.bind("isEnabled").toMany(s, "isEnabled", (...t) => t.some(t => t)), this.listenTo(r, "execute", t => {
                    o.execute(t.source.commandName), o.editing.view.focus()
                }), r
            }
        }

        function qb(t, e, i, n) {
            const o = t.model = new Xg(t.model), {commandName: r, bindIsOn: s} = t.model;
            if ("separator" !== t.type) {
                const t = e.commands.get(r);
                i.push(t), o.set({commandName: r}), o.bind("isEnabled").to(t), s && o.bind("isOn").to(t, "value")
            }
            o.set({withText: !0}), n.add(t)
        }

        i(91);
        const $b = ["left", "right", "center", "justify"];

        function Yb(t) {
            return $b.includes(t)
        }

        function Gb(t, e) {
            return "rtl" == e.contentLanguageDirection ? "right" === t : "left" === t
        }

        const Qb = "alignment";

        class Kb extends Cd {
            refresh() {
                const t = this.editor.locale, e = gu(this.editor.model.document.selection.getSelectedBlocks());
                this.isEnabled = !!e && this._canBeAligned(e), this.isEnabled && e.hasAttribute("alignment") ? this.value = e.getAttribute("alignment") : this.value = "rtl" === t.contentLanguageDirection ? "right" : "left"
            }

            execute(t = {}) {
                const e = this.editor, i = e.locale, n = e.model, o = n.document, r = t.value;
                n.change(t => {
                    const e = Array.from(o.selection.getSelectedBlocks()).filter(t => this._canBeAligned(t)),
                        n = e[0].getAttribute("alignment");
                    Gb(r, i) || n === r || !r ? function (t, e) {
                        for (const i of t) e.removeAttribute(Qb, i)
                    }(e, t) : function (t, e, i) {
                        for (const n of t) e.setAttribute(Qb, i, n)
                    }(e, t, r)
                })
            }

            _canBeAligned(t) {
                return this.editor.model.schema.checkAttribute(t, Qb)
            }
        }

        class Jb extends vd {
            static get pluginName() {
                return "AlignmentEditing"
            }

            constructor(t) {
                super(t), t.config.define("alignment", {options: [...$b]})
            }

            init() {
                const t = this.editor, e = t.locale, i = t.model.schema,
                    n = t.config.get("alignment.options").filter(Yb);
                i.extend("$block", {allowAttributes: "alignment"}), t.model.schema.setAttributeProperties("alignment", {isFormatting: !0});
                const o = function (t) {
                    const e = {model: {key: "alignment", values: t.slice()}, view: {}};
                    for (const i of t) e.view[i] = {key: "style", value: {"text-align": i}};
                    return e
                }(n.filter(t => !Gb(t, e)));
                t.conversion.attributeToAttribute(o), t.commands.add("alignment", new Kb(t))
            }
        }

        var Zb = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',
            Xb = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>';
        const tw = new Map([["left", Zb], ["right", Xb], ["center", '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>'], ["justify", '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>']]);

        class ew extends vd {
            get localizedOptionTitles() {
                const t = this.editor.t;
                return {left: t("au"), right: t("av"), center: t("aw"), justify: t("ax")}
            }

            static get pluginName() {
                return "AlignmentUI"
            }

            init() {
                const t = this.editor, e = t.ui.componentFactory, i = t.t, n = t.config.get("alignment.options");
                n.filter(Yb).forEach(t => this._addButton(t)), e.add("alignment", t => {
                    const o = hd(t), r = n.map(t => e.create(`alignment:${t}`));
                    ud(o, r), o.buttonView.set({
                        label: i("ay"),
                        tooltip: !0
                    }), o.toolbarView.isVertical = !0, o.toolbarView.ariaLabel = i("az"), o.extendTemplate({attributes: {class: "ck-alignment-dropdown"}});
                    const s = "rtl" === t.contentLanguageDirection ? Xb : Zb;
                    return o.buttonView.bind("icon").toMany(r, "isOn", (...t) => {
                        const e = t.findIndex(t => t);
                        return e < 0 ? s : r[e].icon
                    }), o.bind("isEnabled").toMany(r, "isEnabled", (...t) => t.some(t => t)), o
                })
            }

            _addButton(t) {
                const e = this.editor;
                e.ui.componentFactory.add(`alignment:${t}`, i => {
                    const n = e.commands.get("alignment"), o = new nd(i);
                    return o.set({
                        label: this.localizedOptionTitles[t],
                        icon: tw.get(t),
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isEnabled").to(n), o.bind("isOn").to(n, "value", e => e === t), this.listenTo(o, "execute", () => {
                        e.execute("alignment", {value: t}), e.editing.view.focus()
                    }), o
                })
            }
        }

        class iw {
            constructor(t, e) {
                this.loader = t, this.options = e
            }

            upload() {
                return this.loader.file.then(t => new Promise((e, i) => {
                    this._initRequest(), this._initListeners(e, i, t), this._sendRequest(t)
                }))
            }

            abort() {
                this.xhr && this.xhr.abort()
            }

            _initRequest() {
                const t = this.xhr = new XMLHttpRequest;
                t.open("POST", this.options.uploadUrl, !0), t.responseType = "json"
            }

            _initListeners(t, e, i) {
                const n = this.xhr, o = this.loader, r = `Couldn't upload file: ${i.name}.`;
                n.addEventListener("error", () => e(r)), n.addEventListener("abort", () => e()), n.addEventListener("load", () => {
                    const i = n.response;
                    if (!i || i.error) return e(i && i.error && i.error.message ? i.error.message : r);
                    t(i.url ? {default: i.url} : i.urls)
                }), n.upload && n.upload.addEventListener("progress", t => {
                    t.lengthComputable && (o.uploadTotal = t.total, o.uploaded = t.loaded)
                })
            }

            _sendRequest(t) {
                const e = this.options.headers || {};
                for (const t of Object.keys(e)) this.xhr.setRequestHeader(t, e[t]);
                const i = new FormData;
                i.append("upload", t), this.xhr.send(i)
            }
        }

        class nw {
            constructor(t) {
                this.set("activeHandlePosition", null), this.set("proposedWidthPercents", null), this.set("proposedWidth", null), this.set("proposedHeight", null), this.set("proposedHandleHostWidth", null), this.set("proposedHandleHostHeight", null), this._options = t, this._referenceCoordinates = null
            }

            begin(t, e, i) {
                const n = new xs(e);
                this.activeHandlePosition = function (t) {
                    const e = ["top-left", "top-right", "bottom-right", "bottom-left"];
                    for (const i of e) if (t.classList.contains(ow(i))) return i
                }(t), this._referenceCoordinates = function (t, e) {
                    const i = new xs(t), n = e.split("-"),
                        o = {x: "right" == n[1] ? i.right : i.left, y: "bottom" == n[0] ? i.bottom : i.top};
                    return o.x += t.ownerDocument.defaultView.scrollX, o.y += t.ownerDocument.defaultView.scrollY, o
                }(e, function (t) {
                    const e = t.split("-"), i = {top: "bottom", bottom: "top", left: "right", right: "left"};
                    return `${i[e[0]]}-${i[e[1]]}`
                }(this.activeHandlePosition)), this.originalWidth = n.width, this.originalHeight = n.height, this.aspectRatio = n.width / n.height;
                const o = i.style.width;
                o && o.match(/^\d+\.?\d*%$/) ? this.originalWidthPercents = parseFloat(o) : this.originalWidthPercents = function (t, e) {
                    const i = t.parentElement, n = parseFloat(i.ownerDocument.defaultView.getComputedStyle(i).width);
                    return e.width / n * 100
                }(i, n)
            }

            update(t) {
                this.proposedWidth = t.width, this.proposedHeight = t.height, this.proposedWidthPercents = t.widthPercents, this.proposedHandleHostWidth = t.handleHostWidth, this.proposedHandleHostHeight = t.handleHostHeight
            }
        }

        function ow(t) {
            return `ck-widget__resizer__handle-${t}`
        }

        cn(nw, Fn);

        class rw {
            constructor(t) {
                this._options = t, this._domResizerWrapper = null, this.set("isEnabled", !0), this.decorate("begin"), this.decorate("cancel"), this.decorate("commit"), this.decorate("updateSize")
            }

            attach() {
                const t = this, e = this._options.viewElement, i = this._options.downcastWriter,
                    n = i.createUIElement("div", {class: "ck ck-reset_all ck-widget__resizer"}, function (e) {
                        const i = this.toDomElement(e);
                        return t._appendHandles(i), t._appendSizeUI(i), t._domResizerWrapper = i, t.on("change:isEnabled", (t, e, n) => {
                            i.style.display = n ? "" : "none"
                        }), i.style.display = t.isEnabled ? "" : "none", i
                    });
                i.insert(i.createPositionAt(e, "end"), n), i.addClass("ck-widget_with-resizer", e)
            }

            begin(t) {
                this.state = new nw(this._options), this._sizeUI.bindToState(this._options, this.state), this.state.begin(t, this._getHandleHost(), this._getResizeHost())
            }

            updateSize(t) {
                const e = this._getHandleHost(), i = this._getResizeHost(), n = this._options.unit,
                    o = this._proposeNewSize(t);
                i.style.width = ("%" === n ? o.widthPercents : o.width) + this._options.unit;
                const r = new xs(e);
                o.handleHostWidth = Math.round(r.width), o.handleHostHeight = Math.round(r.height);
                const s = new xs(e);
                o.width = Math.round(s.width), o.height = Math.round(s.height), this.redraw(r), this.state.update(o)
            }

            commit() {
                const t = ("%" === this._options.unit ? this.state.proposedWidthPercents : this.state.proposedWidth) + this._options.unit;
                this._options.onCommit(t), this._cleanup()
            }

            cancel() {
                this._cleanup()
            }

            destroy() {
                this.cancel()
            }

            redraw(t) {
                const e = this._domResizerWrapper;
                if (function (t) {
                    return t && t.ownerDocument && t.ownerDocument.contains(t)
                }(e)) {
                    const i = e.parentElement, n = this._getHandleHost(), o = t || new xs(n);
                    e.style.width = o.width + "px", e.style.height = o.height + "px";
                    const r = {left: n.offsetLeft, top: n.offsetTop, height: n.offsetHeight, width: n.offsetWidth};
                    i.isSameNode(n) || (e.style.left = r.left + "px", e.style.top = r.top + "px", e.style.height = r.height + "px", e.style.width = r.width + "px")
                }
            }

            containsHandle(t) {
                return this._domResizerWrapper.contains(t)
            }

            static isResizeHandle(t) {
                return t.classList.contains("ck-widget__resizer__handle")
            }

            _cleanup() {
                this._sizeUI.dismiss(), this._sizeUI.isVisible = !1
            }

            _proposeNewSize(t) {
                const e = this.state, i = function (t) {
                    return {x: t.pageX, y: t.pageY}
                }(t), n = !this._options.isCentered || this._options.isCentered(this), o = {
                    x: e._referenceCoordinates.x - (i.x + e.originalWidth),
                    y: i.y - e.originalHeight - e._referenceCoordinates.y
                };
                n && e.activeHandlePosition.endsWith("-right") && (o.x = i.x - (e._referenceCoordinates.x + e.originalWidth)), n && (o.x *= 2);
                const r = {width: Math.abs(e.originalWidth + o.x), height: Math.abs(e.originalHeight + o.y)};
                r.dominant = r.width / e.aspectRatio > r.height ? "width" : "height", r.max = r[r.dominant];
                const s = {width: r.width, height: r.height};
                return "width" == r.dominant ? s.height = s.width / e.aspectRatio : s.width = s.height * e.aspectRatio, {
                    width: Math.round(s.width),
                    height: Math.round(s.height),
                    widthPercents: Math.min(Math.round(e.originalWidthPercents / e.originalWidth * s.width * 100) / 100, 100)
                }
            }

            _getResizeHost() {
                const t = this._domResizerWrapper.parentElement;
                return this._options.getResizeHost(t)
            }

            _getHandleHost() {
                const t = this._domResizerWrapper.parentElement;
                return this._options.getHandleHost(t)
            }

            _appendHandles(t) {
                const e = ["top-left", "top-right", "bottom-right", "bottom-left"];
                for (const i of e) t.appendChild(new wl({
                    tag: "div",
                    attributes: {class: `ck-widget__resizer__handle ${aw(i)}`}
                }).render())
            }

            _appendSizeUI(t) {
                const e = new sw;
                e.render(), this._sizeUI = e, t.appendChild(e.element)
            }

            _getHandlePosition(t) {
                const e = ["top-left", "top-right", "bottom-right", "bottom-left"];
                for (const i of e) if (t.classList.contains(aw(i))) return i
            }
        }

        cn(rw, Fn);

        class sw extends Ll {
            constructor() {
                super();
                const t = this.bindTemplate;
                this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-size-view", t.to("activeHandlePosition", t => t ? `ck-orientation-${t}` : "")],
                        style: {display: t.if("isVisible", "none", t => !t)}
                    },
                    children: [{text: t.to("label")}]
                })
            }

            bindToState(t, e) {
                this.bind("isVisible").to(e, "proposedWidth", e, "proposedHeight", (t, e) => null !== t && null !== e), this.bind("label").to(e, "proposedHandleHostWidth", e, "proposedHandleHostHeight", e, "proposedWidthPercents", (e, i, n) => "px" === t.unit ? `${e}×${i}` : `${n}%`), this.bind("activeHandlePosition").to(e)
            }

            dismiss() {
                this.unbind(), this.isVisible = !1
            }
        }

        function aw(t) {
            return `ck-widget__resizer__handle-${t}`
        }

        var cw = "Expected a function";
        var lw = function (t, e, i) {
            var n = !0, o = !0;
            if ("function" != typeof t) throw new TypeError(cw);
            return B(i) && (n = "leading" in i ? !!i.leading : n, o = "trailing" in i ? !!i.trailing : o), gs(t, e, {
                leading: n,
                maxWait: e,
                trailing: o
            })
        };
        i(93);

        class dw extends vd {
            static get pluginName() {
                return "WidgetResize"
            }

            init() {
                this.set("_visibleResizer", null), this.set("_activeResizer", null), this._resizers = new Map;
                const t = tr.window.document;
                this.editor.model.schema.setAttributeProperties("width", {isFormatting: !0}), this._observer = Object.create(cr), this._observer.listenTo(t, "mousedown", (t, e) => {
                    if (!rw.isResizeHandle(e.target)) return;
                    const i = e.target;
                    this._activeResizer = this._getResizerByHandle(i), this._activeResizer && this._activeResizer.begin(i)
                }), this._observer.listenTo(t, "mousemove", (t, e) => {
                    this._activeResizer && this._activeResizer.updateSize(e)
                }), this._observer.listenTo(t, "mouseup", () => {
                    this._activeResizer && (this._activeResizer.commit(), this._activeResizer = null)
                });
                const e = () => {
                    this._visibleResizer && this._visibleResizer.redraw()
                }, i = lw(e, 200);
                this.on("change:_visibleResizer", e), this.editor.ui.on("update", i), this._observer.listenTo(tr.window, "resize", i);
                const n = this.editor.editing.view.document.selection;
                n.on("change", () => {
                    const t = n.getSelectedElement();
                    this._visibleResizer = this._getResizerByViewElement(t) || null
                })
            }

            destroy() {
                this._observer.stopListening()
            }

            attachTo(t) {
                const e = new rw(t);
                return e.attach(), this._resizers.set(t.viewElement, e), e
            }

            _getResizerByHandle(t) {
                for (const e of this._resizers.values()) if (e.containsHandle(t)) return e
            }

            _getResizerByViewElement(t) {
                return this._resizers.get(t)
            }
        }

        cn(dw, Fn);

        class hw extends Cd {
            refresh() {
                const t = this.editor.model.document.selection.getSelectedElement();
                this.isEnabled = Bu(t), t && t.hasAttribute("width") ? this.value = {
                    width: t.getAttribute("width"),
                    height: null
                } : this.value = null
            }

            execute(t) {
                const e = this.editor.model, i = e.document.selection.getSelectedElement();
                e.change(e => {
                    e.setAttribute("width", t.width, i)
                })
            }
        }

        i(95);

        class uw extends Cd {
            refresh() {
                const t = this.editor.model, e = t.document;
                this.value = e.selection.getAttribute("highlight"), this.isEnabled = t.schema.checkAttributeInSelection(e.selection, "highlight")
            }

            execute(t = {}) {
                const e = this.editor.model, i = e.document.selection, n = t.value;
                e.change(t => {
                    const o = e.schema.getValidRanges(i.getRanges(), "highlight");
                    if (i.isCollapsed) {
                        const e = i.getFirstPosition();
                        if (i.hasAttribute("highlight")) {
                            const i = t => t.item.hasAttribute("highlight") && t.item.getAttribute("highlight") === this.value,
                                o = e.getLastMatchingPosition(i, {direction: "backward"}),
                                r = e.getLastMatchingPosition(i), s = t.createRange(o, r);
                            n && this.value !== n ? (t.setAttribute("highlight", n, s), t.setSelectionAttribute("highlight", n)) : (t.removeAttribute("highlight", s), t.removeSelectionAttribute("highlight"))
                        } else n && t.setSelectionAttribute("highlight", n)
                    } else for (const e of o) n ? t.setAttribute("highlight", n, e) : t.removeAttribute("highlight", e)
                })
            }
        }

        class fw extends vd {
            static get pluginName() {
                return "HighlightEditing"
            }

            constructor(t) {
                super(t), t.config.define("highlight", {
                    options: [{
                        model: "yellowMarker",
                        class: "marker-yellow",
                        title: "Yellow marker",
                        color: "var(--ck-highlight-marker-yellow)",
                        type: "marker"
                    }, {
                        model: "greenMarker",
                        class: "marker-green",
                        title: "Green marker",
                        color: "var(--ck-highlight-marker-green)",
                        type: "marker"
                    }, {
                        model: "pinkMarker",
                        class: "marker-pink",
                        title: "Pink marker",
                        color: "var(--ck-highlight-marker-pink)",
                        type: "marker"
                    }, {
                        model: "blueMarker",
                        class: "marker-blue",
                        title: "Blue marker",
                        color: "var(--ck-highlight-marker-blue)",
                        type: "marker"
                    }, {
                        model: "redPen",
                        class: "pen-red",
                        title: "Red pen",
                        color: "var(--ck-highlight-pen-red)",
                        type: "pen"
                    }, {
                        model: "greenPen",
                        class: "pen-green",
                        title: "Green pen",
                        color: "var(--ck-highlight-pen-green)",
                        type: "pen"
                    }]
                })
            }

            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {allowAttributes: "highlight"});
                const e = t.config.get("highlight.options");
                t.conversion.attributeToElement(function (t) {
                    const e = {model: {key: "highlight", values: []}, view: {}};
                    for (const i of t) e.model.values.push(i.model), e.view[i.model] = {name: "mark", classes: i.class};
                    return e
                }(e)), t.commands.add("highlight", new uw(t))
            }
        }

        var gw = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path class="ck-icon__fill" d="M10.798 1.59L3.002 12.875l1.895 1.852 2.521 1.402 6.997-12.194z"/><path d="M2.556 16.727l.234-.348c-.297-.151-.462-.293-.498-.426-.036-.137.002-.416.115-.837.094-.25.15-.449.169-.595a4.495 4.495 0 0 0 0-.725c-.209-.621-.303-1.041-.284-1.26.02-.218.178-.506.475-.862l6.77-9.414c.539-.91 1.605-.85 3.199.18 1.594 1.032 2.188 1.928 1.784 2.686l-5.877 10.36c-.158.412-.333.673-.526.782-.193.108-.604.179-1.232.21-.362.131-.608.237-.738.318-.13.081-.305.238-.526.47-.293.265-.504.397-.632.397-.096 0-.27-.075-.524-.226l-.31.41-1.6-1.12zm-.279.415l1.575 1.103-.392.515H1.19l1.087-1.618zm8.1-13.656l-4.953 6.9L8.75 12.57l4.247-7.574c.175-.25-.188-.647-1.092-1.192-.903-.546-1.412-.652-1.528-.32zM8.244 18.5L9.59 17h9.406v1.5H8.245z"/></svg>',
            mw = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path class="ck-icon__fill" d="M10.126 2.268L2.002 13.874l1.895 1.852 2.521 1.402L14.47 5.481l-1.543-2.568-2.801-.645z"/><path d="M4.5 18.088l-2.645-1.852-.04-2.95-.006-.005.006-.008v-.025l.011.008L8.73 2.97c.165-.233.356-.417.567-.557l-1.212.308L4.604 7.9l-.83-.558 3.694-5.495 2.708-.69 1.65 1.145.046.018.85-1.216 2.16 1.512-.856 1.222c.828.967 1.144 2.141.432 3.158L7.55 17.286l.006.005-3.055.797H4.5zm-.634.166l-1.976.516-.026-1.918 2.002 1.402zM9.968 3.817l-.006-.004-6.123 9.184 3.277 2.294 6.108-9.162.005.003c.317-.452-.16-1.332-1.064-1.966-.891-.624-1.865-.776-2.197-.349zM8.245 18.5L9.59 17h9.406v1.5H8.245z"/></svg>',
            pw = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.636 9.531l-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>';
        i(97);

        class bw extends Ll {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("icon"), this.set("isEnabled", !0), this.set("isOn", !1), this.set("isToggleable", !1), this.set("isVisible", !0), this.set("keystroke"), this.set("label"), this.set("tabindex", -1), this.set("tooltip"), this.set("tooltipPosition", "s"), this.set("type", "button"), this.set("withText", !1), this.children = this.createCollection(), this.actionView = this._createActionView(), this.arrowView = this._createArrowView(), this.keystrokes = new Zc, this.focusTracker = new al, this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-splitbutton", e.if("isVisible", "ck-hidden", t => !t), this.arrowView.bindTemplate.if("isOn", "ck-splitbutton_open")]},
                    children: this.children
                })
            }

            render() {
                super.render(), this.children.add(this.actionView), this.children.add(this.arrowView), this.focusTracker.add(this.actionView.element), this.focusTracker.add(this.arrowView.element), this.keystrokes.listenTo(this.element), this.keystrokes.set("arrowright", (t, e) => {
                    this.focusTracker.focusedElement === this.actionView.element && (this.arrowView.focus(), e())
                }), this.keystrokes.set("arrowleft", (t, e) => {
                    this.focusTracker.focusedElement === this.arrowView.element && (this.actionView.focus(), e())
                })
            }

            focus() {
                this.actionView.focus()
            }

            _createActionView() {
                const t = new nd;
                return t.bind("icon", "isEnabled", "isOn", "isToggleable", "keystroke", "label", "tabindex", "tooltip", "tooltipPosition", "type", "withText").to(this), t.extendTemplate({attributes: {class: "ck-splitbutton__action"}}), t.delegate("execute").to(this), t
            }

            _createArrowView() {
                const t = new nd, e = t.bindTemplate;
                return t.icon = od, t.extendTemplate({
                    attributes: {
                        class: "ck-splitbutton__arrow",
                        "aria-haspopup": !0,
                        "aria-expanded": e.to("isOn", t => String(t))
                    }
                }), t.bind("isEnabled").to(this), t.delegate("execute").to(this, "open"), t
            }
        }

        i(99);

        class ww extends vd {
            get localizedOptionTitles() {
                const t = this.editor.t;
                return {
                    "Yellow marker": t("bg"),
                    "Green marker": t("bh"),
                    "Pink marker": t("bi"),
                    "Blue marker": t("bj"),
                    "Red pen": t("bk"),
                    "Green pen": t("bl")
                }
            }

            static get pluginName() {
                return "HighlightUI"
            }

            init() {
                const t = this.editor.config.get("highlight.options");
                for (const e of t) this._addHighlighterButton(e);
                this._addRemoveHighlightButton(), this._addDropdown(t)
            }

            _addRemoveHighlightButton() {
                const t = this.editor.t;
                this._addButton("removeHighlight", t("bm"), pw)
            }

            _addHighlighterButton(t) {
                const e = this.editor.commands.get("highlight");
                this._addButton("highlight:" + t.model, t.title, kw(t.type), t.model, function (i) {
                    i.bind("isEnabled").to(e, "isEnabled"), i.bind("isOn").to(e, "value", e => e === t.model), i.iconView.fillColor = t.color, i.isToggleable = !0
                })
            }

            _addButton(t, e, i, n, o = (() => {
            })) {
                const r = this.editor;
                r.ui.componentFactory.add(t, t => {
                    const s = new nd(t), a = this.localizedOptionTitles[e] ? this.localizedOptionTitles[e] : e;
                    return s.set({label: a, icon: i, tooltip: !0}), s.on("execute", () => {
                        r.execute("highlight", {value: n}), r.editing.view.focus()
                    }), o(s), s
                })
            }

            _addDropdown(t) {
                const e = this.editor, i = e.t, n = e.ui.componentFactory, o = t[0],
                    r = t.reduce((t, e) => (t[e.model] = e, t), {});
                n.add("highlight", s => {
                    const a = e.commands.get("highlight"), c = hd(s, bw), l = c.buttonView;
                    l.set({
                        tooltip: i("bn"),
                        lastExecuted: o.model,
                        commandValue: o.model,
                        isToggleable: !0
                    }), l.bind("icon").to(a, "value", t => kw(h(t, "type"))), l.bind("color").to(a, "value", t => h(t, "color")), l.bind("commandValue").to(a, "value", t => h(t, "model")), l.bind("isOn").to(a, "value", t => !!t), l.delegate("execute").to(c);
                    const d = t.map(t => {
                        const e = n.create("highlight:" + t.model);
                        return this.listenTo(e, "execute", () => c.buttonView.set({lastExecuted: t.model})), e
                    });

                    function h(t, e) {
                        const i = t && t !== l.lastExecuted ? t : l.lastExecuted;
                        return r[i][e]
                    }

                    return c.bind("isEnabled").toMany(d, "isEnabled", (...t) => t.some(t => t)), d.push(new Yl), d.push(n.create("removeHighlight")), ud(c, d), function (t) {
                        t.buttonView.actionView.iconView.bind("fillColor").to(t.buttonView, "color")
                    }(c), c.toolbarView.ariaLabel = i("bo"), l.on("execute", () => {
                        e.execute("highlight", {value: l.commandValue}), e.editing.view.focus()
                    }), c
                })
            }
        }

        function kw(t) {
            return "marker" === t ? gw : mw
        }

        class _w extends Cd {
            refresh() {
                this.isEnabled = function (t) {
                    const e = t.schema, i = t.document.selection;
                    return function (t, e, i) {
                        const n = function (t, e) {
                            const i = ju(t, e).parent;
                            if (i.isEmpty && !i.is("$root")) return i.parent;
                            return i
                        }(t, i);
                        return e.checkChild(n, "horizontalLine")
                    }(i, e, t) && !function (t, e) {
                        const i = t.getSelectedElement();
                        return i && e.isObject(i)
                    }(i, e)
                }(this.editor.model)
            }

            execute() {
                const t = this.editor.model;
                t.change(e => {
                    const i = e.createElement("horizontalLine");
                    t.insertContent(i);
                    let n = i.nextSibling;
                    !(n && t.schema.checkChild(n, "$text")) && t.schema.checkChild(i.parent, "paragraph") && (n = e.createElement("paragraph"), e.insert(n, e.createPositionAfter(i))), n && e.setSelection(n, 0)
                })
            }
        }

        i(101);

        class vw extends vd {
            static get pluginName() {
                return "HorizontalLineEditing"
            }

            init() {
                const t = this.editor, e = t.model.schema, i = t.t, n = t.conversion;
                e.register("horizontalLine", {
                    isObject: !0,
                    allowWhere: "$block"
                }), n.for("dataDowncast").elementToElement({
                    model: "horizontalLine",
                    view: (t, e) => e.createEmptyElement("hr")
                }), n.for("editingDowncast").elementToElement({
                    model: "horizontalLine", view: (t, e) => {
                        const n = i("bf"), o = e.createContainerElement("div"), r = e.createEmptyElement("hr");
                        return e.addClass("ck-horizontal-line", o), e.setCustomProperty("hr", !0, o), e.insert(e.createPositionAt(o, 0), r), function (t, e, i) {
                            return e.setCustomProperty("horizontalLine", !0, t), Ru(t, e, {label: i})
                        }(o, e, n)
                    }
                }), n.for("upcast").elementToElement({
                    view: "hr",
                    model: "horizontalLine"
                }), t.commands.add("horizontalLine", new _w(t))
            }
        }

        var yw = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9h16v2H2z" /></svg>\n';

        class xw extends vd {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add("horizontalLine", i => {
                    const n = t.commands.get("horizontalLine"), o = new nd(i);
                    return o.set({
                        label: e("bf"),
                        icon: yw,
                        tooltip: !0
                    }), o.bind("isEnabled").to(n, "isEnabled"), this.listenTo(o, "execute", () => t.execute("horizontalLine")), o
                })
            }
        }

        i.d(e, "default", function () {
            return Aw
        });

        class Aw extends _d {
        }

        Aw.builtinPlugins = [class extends vd {
            static get requires() {
                return [Td, Nd, Ld, Kd, bh]
            }

            static get pluginName() {
                return "Essentials"
            }
        }, Ch, class extends vd {
            static get pluginName() {
                return "Autoformat"
            }

            afterInit() {
                this._addListAutoformats(), this._addBasicStylesAutoformats(), this._addHeadingAutoformats(), this._addBlockQuoteAutoformats()
            }

            _addListAutoformats() {
                const t = this.editor.commands;
                t.get("bulletedList") && new Sh(this.editor, /^[*-]\s$/, "bulletedList"), t.get("numberedList") && new Sh(this.editor, /^1[.|)]\s$/, "numberedList")
            }

            _addBasicStylesAutoformats() {
                const t = this.editor.commands;
                if (t.get("bold")) {
                    const t = Ih(this.editor, "bold");
                    new Eh(this.editor, /(\*\*)([^*]+)(\*\*)$/g, t), new Eh(this.editor, /(__)([^_]+)(__)$/g, t)
                }
                if (t.get("italic")) {
                    const t = Ih(this.editor, "italic");
                    new Eh(this.editor, /(?:^|[^*])(\*)([^*_]+)(\*)$/g, t), new Eh(this.editor, /(?:^|[^_])(_)([^_]+)(_)$/g, t)
                }
                if (t.get("code")) {
                    const t = Ih(this.editor, "code");
                    new Eh(this.editor, /(`)([^`]+)(`)$/g, t)
                }
            }

            _addHeadingAutoformats() {
                const t = this.editor.commands.get("heading");
                t && t.modelElements.filter(t => t.match(/^heading[1-6]$/)).forEach(e => {
                    const i = e[7], n = new RegExp(`^(#{${i}})\\s$`);
                    new Sh(this.editor, n, () => {
                        if (!t.isEnabled) return !1;
                        this.editor.execute("heading", {value: e})
                    })
                })
            }

            _addBlockQuoteAutoformats() {
                this.editor.commands.get("blockQuote") && new Sh(this.editor, /^>\s$/, "blockQuote")
            }
        }, class extends vd {
            static get requires() {
                return [Rh, jh]
            }

            static get pluginName() {
                return "Bold"
            }
        }, class extends vd {
            static get requires() {
                return [Vh, Hh]
            }

            static get pluginName() {
                return "Italic"
            }
        }, class extends vd {
            static get requires() {
                return [Wh, Yh]
            }

            static get pluginName() {
                return "Underline"
            }
        }, class extends vd {
            static get requires() {
                return [Qh, Zh]
            }

            static get pluginName() {
                return "Strikethrough"
            }
        }, class extends vd {
            static get requires() {
                return [tu, nu]
            }

            static get pluginName() {
                return "Code"
            }
        }, class extends vd {
            static get requires() {
                return [ru, cu]
            }

            static get pluginName() {
                return "Subscript"
            }
        }, class extends vd {
            static get requires() {
                return [du, fu]
            }

            static get pluginName() {
                return "Superscript"
            }
        }, class extends vd {
            static get requires() {
                return [ku, vu]
            }

            static get pluginName() {
                return "BlockQuote"
            }
        }, class extends vd {
            static get pluginName() {
                return "CKFinder"
            }

            static get requires() {
                return [Ff, xu, Ch]
            }
        }, class extends vd {
            static get requires() {
                return [Gf, Ag, Ug]
            }

            static get pluginName() {
                return "EasyImage"
            }
        }, class extends vd {
            static get requires() {
                return [Zg, tm]
            }

            static get pluginName() {
                return "Heading"
            }
        }, Ag, class extends vd {
            static get requires() {
                return [nm]
            }

            static get pluginName() {
                return "ImageCaption"
            }
        }, class extends vd {
            static get requires() {
                return [wm, km]
            }

            static get pluginName() {
                return "ImageStyle"
            }
        }, class extends vd {
            static get requires() {
                return [_m]
            }

            static get pluginName() {
                return "ImageToolbar"
            }

            afterInit() {
                const t = this.editor, e = t.t;
                t.plugins.get(_m).register("image", {
                    ariaLabel: e("b"),
                    items: t.config.get("image.toolbar") || [],
                    getRelatedElement: Vu
                })
            }
        }, Ug, class extends vd {
            static get pluginName() {
                return "Indent"
            }

            static get requires() {
                return [Am, Pm]
            }
        }, class extends vd {
            static get requires() {
                return [jf, Dm]
            }

            static get pluginName() {
                return "Link"
            }
        }, class extends vd {
            static get requires() {
                return [ap, hp]
            }

            static get pluginName() {
                return "List"
            }
        }, class extends vd {
            static get requires() {
                return [yp, Pp, Ap, Zf]
            }

            static get pluginName() {
                return "MediaEmbed"
            }
        }, $g, class extends vd {
            static get pluginName() {
                return "PasteFromOffice"
            }

            static get requires() {
                return [Td]
            }

            init() {
                const t = this.editor, e = [];
                e.push(new zp), e.push(new Ip), t.plugins.get("Clipboard").on("inputTransformation", (t, i) => {
                    if (i.isTransformedWithPasteFromOffice) return;
                    const n = i.dataTransfer.getData("text/html"), o = e.find(t => t.isActive(n));
                    o && (o.execute(i), i.isTransformedWithPasteFromOffice = !0)
                }, {priority: "high"})
            }
        }, class extends vd {
            static get requires() {
                return [jb, Wb, Zf]
            }

            static get pluginName() {
                return "Table"
            }
        }, class extends vd {
            static get requires() {
                return [_m]
            }

            static get pluginName() {
                return "TableToolbar"
            }

            afterInit() {
                const t = this.editor, e = t.t, i = t.plugins.get(_m), n = t.config.get("table.contentToolbar"),
                    o = t.config.get("table.tableToolbar");
                n && i.register("tableContent", {
                    ariaLabel: e("c"),
                    items: n,
                    getRelatedElement: Gp
                }), o && i.register("table", {ariaLabel: e("c"), items: o, getRelatedElement: Yp})
            }
        }, class extends vd {
            static get requires() {
                return [Jb, ew]
            }

            static get pluginName() {
                return "Alignment"
            }
        }, class extends vd {
            static get requires() {
                return [_h]
            }

            static get pluginName() {
                return "SimpleUploadAdapter"
            }

            init() {
                const t = this.editor.config.get("simpleUpload");
                t && (t.uploadUrl ? this.editor.plugins.get(_h).createUploadAdapter = (e => new iw(e, t)) : console.warn(Object(Yi.a)('simple-upload-adapter-missing-uploadUrl: Missing the "uploadUrl" property in the "simpleUpload" editor configuration.')))
            }
        }, class extends vd {
            static get requires() {
                return [dw]
            }

            static get pluginName() {
                return "ImageResize"
            }

            init() {
                const t = this.editor, e = new hw(t);
                this._registerSchema(), this._registerConverters(), t.commands.add("imageResize", e), t.editing.downcastDispatcher.on("insert:image", (i, n, o) => {
                    const r = o.mapper.toViewElement(n.item), s = t.plugins.get(dw).attachTo({
                        unit: t.config.get("image.resizeUnit") || "%",
                        modelElement: n.item,
                        viewElement: r,
                        downcastWriter: o.writer,
                        getHandleHost: t => t.querySelector("img"),
                        getResizeHost: t => t,
                        isCentered() {
                            const t = n.item.getAttribute("imageStyle");
                            return !t || "full" == t || "alignCenter" == t
                        },
                        onCommit(e) {
                            t.execute("imageResize", {width: e})
                        }
                    });
                    s.on("updateSize", () => {
                        r.hasClass("image_resized") || t.editing.view.change(t => {
                            t.addClass("image_resized", r)
                        })
                    }), s.bind("isEnabled").to(e)
                }, {priority: "low"})
            }

            _registerSchema() {
                this.editor.model.schema.extend("image", {allowAttributes: "width"})
            }

            _registerConverters() {
                const t = this.editor;
                t.conversion.for("downcast").add(t => t.on("attribute:width:image", (t, e, i) => {
                    if (!i.consumable.consume(e.item, t.name)) return;
                    const n = i.writer, o = i.mapper.toViewElement(e.item);
                    null !== e.attributeNewValue ? (n.setStyle("width", e.attributeNewValue, o), n.addClass("image_resized", o)) : (n.removeStyle("width", o), n.removeClass("image_resized", o))
                })), t.conversion.for("upcast").attributeToAttribute({
                    view: {name: "figure", styles: {width: /.+/}},
                    model: {key: "width", value: t => t.getStyle("width")}
                })
            }
        }, class extends vd {
            static get requires() {
                return [fw, ww]
            }

            static get pluginName() {
                return "Highlight"
            }
        }, class extends vd {
            static get requires() {
                return [vw, xw]
            }

            static get pluginName() {
                return "HorizontalLine"
            }
        }], Aw.defaultConfig = {
            toolbar: ["heading", "|", "alignment", "bold", "italic", "underline", "strikethrough", "code", "subscript", "superscript", "bulletedList", "numberedList", "|", "indent", "outdent", "|", "highlight", "imageUpload", "horizontalLine", "blockQuote", "link", "insertTable", "mediaEmbed", "ckfinder", "undo", "redo"],
            image: {
                toolbar: ["imageTextAlternative", "|", "imageStyle:full", "imageStyle:alignRight", "imageStyle:alignCenter", "imageStyle:alignLeft"],
                styles: ["full", "alignRight", "alignCenter", "alignLeft"]
            },
            table: {contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]},
            highlight: {
                options: [{
                    model: "yellowMarker",
                    class: "marker-yellow",
                    title: "Yellow Marker",
                    color: "var(--ck-highlight-marker-yellow)",
                    type: "marker"
                }, {
                    model: "greenMarker",
                    class: "marker-green",
                    title: "Green marker",
                    color: "var(--ck-highlight-marker-green)",
                    type: "marker"
                }, {
                    model: "pinkMarker",
                    class: "marker-pink",
                    title: "Pink marker",
                    color: "var(--ck-highlight-marker-pink)",
                    type: "marker"
                }, {
                    model: "blueMarker",
                    class: "marker-blue",
                    title: "Blue marker",
                    color: "var(--ck-highlight-marker-blue)",
                    type: "marker"
                }, {
                    model: "redPen",
                    class: "pen-red",
                    title: "Red pen",
                    color: "var(--ck-highlight-pen-red)",
                    type: "pen"
                }, {
                    model: "greenPen",
                    class: "pen-green",
                    title: "Green pen",
                    color: "var(--ck-highlight-pen-green)",
                    type: "pen"
                }]
            },
            language: {ui: "fa", content: "fa"},
            ckfinder: {openerMethod: "popup"}
        }
    }]).default
});
//# sourceMappingURL=ckeditor.js.map

this.gcal = this.gcal || {};
(function(_) {
    var window = this;
    try {
        _._F_toggles_initialize = function(a) {
            (typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this)._F_toggles = a || []
        }
        ;
        (0,
        _._F_toggles_initialize)([0x1, ]);
        /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
        var f = function() {
            let a = null;
            if (!e)
                return a;
            try {
                const b = c => {
                    return c
                }
                ;
                a = e.createPolicy("goog#html", {
                    createHTML: b,
                    createScript: b,
                    createScriptURL: b
                })
            } catch (b) {}
            return a
        }
          , l = function(a) {
            g === void 0 && (g = f());
            var b = g;
            return new k(b ? b.createScriptURL(a) : a)
        }
          , n = function(a) {
            if (m.test(a))
                return a
        }
          , q = function(a, b) {
            a.removeAttribute("srcdoc");
            if (b instanceof k)
                throw new p("TrustedResourceUrl",2);
            var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
            a.setAttribute("sandbox", "");
            for (let d = 0; d < c.length; d++)
                a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
            b = n(b);
            b !== void 0 && (a.src = b)
        }
          , t = function(a, b) {
            if (b instanceof k) {
                if (b instanceof k)
                    b = b.h;
                else
                    throw Error("b");
                a.href = b.toString();
                a.rel = "stylesheet"
            } else {
                if (r.indexOf("stylesheet") === -1)
                    throw Error("c`stylesheet");
                b = n(b);
                b !== void 0 && (a.href = b,
                a.rel = "stylesheet")
            }
        }
          , u = function(a, ...b) {
            if (b.length === 0)
                return l(a[0]);
            let c = a[0];
            for (let d = 0; d < b.length; d++)
                c += encodeURIComponent(b[d]) + a[d + 1];
            return l(c)
        }
          , v = function() {
            const a = document.createElement("span");
            a.textContent = "close";
            a.classList.add("material-icons");
            a.classList.add("L0Dvsd");
            const b = document.createElement("div");
            b.textContent = "Sluiten";
            b.classList.add("uE25ec");
            const c = document.createElement("button");
            c.appendChild(a);
            c.appendChild(b);
            c.classList.add("Xfsokf");
            return c
        }
          , x = function(a, b) {
            var c = v();
            w = document.createElement("div");
            w.classList.add("hur54b");
            w.appendChild(c);
            w.appendChild(a);
            c.onclick = () => {
                w && (w.remove(),
                w = null);
                b.focus()
            }
            ;
            w.onclick = () => {
                w && (w.remove(),
                w = null);
                b.focus()
            }
            ;
            return w
        }
          , y = function(a, b) {
            const c = document.createElement("iframe");
            c.title = b;
            c.classList.add("mmGMM");
            q(c, a);
            c.onload = () => {
                c.contentWindow.focus()
            }
            ;
            return c
        }
          , C = function(a) {
            const b = document.createElement("button");
            b.textContent = a.label;
            b.classList.add("button");
            b.onclick = () => {
                const c = document.body
                  , d = x(y(a.url, a.label), b);
                c.appendChild(d)
            }
            ;
            return b
        }
          , D = Object.defineProperty
          , E = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math)
                    return c
            }
            throw Error("a");
        }
          , F = E(this)
          , G = function(a, b) {
            if (b)
                a: {
                    var c = F;
                    a = a.split(".");
                    for (var d = 0; d < a.length - 1; d++) {
                        var h = a[d];
                        if (!(h in c))
                            break a;
                        c = c[h]
                    }
                    a = a[a.length - 1];
                    d = c[a];
                    b = b(d);
                    b != d && b != null && D(c, a, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
        }
          , H = Object.create
          , I = Object.setPrototypeOf;
        G("Reflect.setPrototypeOf", function(a) {
            return a ? a : I ? function(b, c) {
                try {
                    return I(b, c),
                    !0
                } catch (d) {
                    return !1
                }
            }
            : null
        });
        G("Object.setPrototypeOf", function(a) {
            return a || I
        });
        G("globalThis", function(a) {
            return a || F
        });
        var e = globalThis.trustedTypes, g;
        var k = function(a) {
            this.h = a
        };
        k.prototype.toString = function() {
            return this.h + ""
        }
        ;
        var m = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
        var J = {
            l: 0,
            i: 1,
            j: 2,
            0: "FORMATTED_HTML_CONTENT",
            1: "EMBEDDED_INTERNAL_CONTENT",
            2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        }
          , p = function(a, b) {
            b = Error.call(this, `${a} cannot be used with intent ${J[b]}`);
            this.message = b.message;
            "stack"in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIframeIntentError"
        }
          , K = Error;
        p.prototype = H(K.prototype);
        p.prototype.constructor = p;
        I(p, K);
        var r = "alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");
        var L = !1
          , M = !1;
        var w;
        /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
        var N = /#(.)(.)(.)/
          , B = function(a) {
            if (!O.test(a))
                throw Error("d`" + a);
            a.length == 4 && (a = a.replace(N, "#$1$1$2$2$3$3"));
            a = a.toLowerCase();
            a = parseInt(a.slice(1), 16);
            return [a >> 16, a >> 8 & 255, a & 255]
        }
          , z = function(a) {
            var b = a[0]
              , c = a[1];
            a = a[2];
            b = Number(b);
            c = Number(c);
            a = Number(a);
            if (b != (b & 255) || c != (c & 255) || a != (a & 255))
                throw Error("e`" + b + "`" + c + "`" + a);
            c = b << 16 | c << 8 | a;
            return b < 16 ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16)
        }
          , O = /^#(?:[0-9a-f]{3}){1,2}$/i
          , A = function(a) {
            var b = [P, Q];
            const c = [];
            for (let d = 0; d < b.length; d++)
                c.push({
                    color: b[d],
                    g: Math.abs(R(b[d]) - R(a)) + S(b[d], a)
                });
            c.sort(function(d, h) {
                return h.g - d.g
            });
            return c[0].color
        }
          , R = function(a) {
            return Math.round((a[0] * 299 + a[1] * 587 + a[2] * 114) / 1E3)
        }
          , S = function(a, b) {
            return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2])
        };
        var P = B("#ffffff")
          , Q = B("#000000");
        window.calendar = window.calendar || {};
        window.calendar.schedulingButton = {
            load: function(a) {
                var b = a.target;
                a = C(a);
                b.insertAdjacentElement("afterend", a);
                L || (b = document.createElement("link"),
                t(b, u`https://fonts.googleapis.com/css?family=Google+Sans_old:400,500`),
                document.head.appendChild(b));
                L = !0;
                M || (b = document.createElement("link"),
                t(b, u`https://fonts.googleapis.com/icon?family=Material+Icons`),
                document.head.appendChild(b));
                M = !0
            }
        };
    } catch (e) {
        _._DumpException(e)
    }
}
)(this.gcal);
// Google Inc.

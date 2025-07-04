/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var RE = Object.create;
  var In = Object.defineProperty;
  var CE = Object.getOwnPropertyDescriptor;
  var PE = Object.getOwnPropertyNames;
  var LE = Object.getPrototypeOf,
    NE = Object.prototype.hasOwnProperty;
  var ne = (e, t) => () => (e && (t = e((e = 0))), t);
  var f = (e, t) => () => (
      t ||
        e(
          (t = {
            exports: {},
          }).exports,
          t
        ),
      t.exports
    ),
    me = (e, t) => {
      for (var n in t)
        In(e, n, {
          get: t[n],
          enumerable: !0,
        });
    },
    ra = (e, t, n, r) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of PE(t))
          !NE.call(e, i) &&
            i !== n &&
            In(e, i, {
              get: () => t[i],
              enumerable: !(r = CE(t, i)) || r.enumerable,
            });
      return e;
    };
  var $ = (e, t, n) => (
      (n = e != null ? RE(LE(e)) : {}),
      ra(
        t || !e || !e.__esModule
          ? In(n, "default", {
              value: e,
              enumerable: !0,
            })
          : n,
        e
      )
    ),
    Me = (e) =>
      ra(
        In({}, "__esModule", {
          value: !0,
        }),
        e
      );
  var Fr = f(() => {
    "use strict";
    window.tram = (function (e) {
      function t(c, h) {
        var m = new le.Bare();
        return m.init(c, h);
      }
      function n(c) {
        return c.replace(/[A-Z]/g, function (h) {
          return "-" + h.toLowerCase();
        });
      }
      function r(c) {
        var h = parseInt(c.slice(1), 16),
          m = (h >> 16) & 255,
          T = (h >> 8) & 255,
          R = 255 & h;
        return [m, T, R];
      }
      function i(c, h, m) {
        return "#" + ((1 << 24) | (c << 16) | (h << 8) | m).toString(16).slice(1);
      }
      function o() {}
      function a(c, h) {
        l("Type warning: Expected: [" + c + "] Got: [" + typeof h + "] " + h);
      }
      function s(c, h, m) {
        l("Units do not match [" + c + "]: " + h + ", " + m);
      }
      function u(c, h, m) {
        if ((h !== void 0 && (m = h), c === void 0)) return m;
        var T = m;
        return (
          SE.test(c) || !na.test(c) ? (T = parseInt(c, 10)) : na.test(c) && (T = 1e3 * parseFloat(c)),
          0 > T && (T = 0),
          T === T ? T : m
        );
      }
      function l(c) {
        Ee.debug && window && window.console.warn(c);
      }
      function g(c) {
        for (var h = -1, m = c ? c.length : 0, T = []; ++h < m; ) {
          var R = c[h];
          R && T.push(R);
        }
        return T;
      }
      var p = (function (c, h, m) {
          function T(H) {
            return typeof H == "object";
          }
          function R(H) {
            return typeof H == "function";
          }
          function S() {}
          function X(H, te) {
            function N() {
              var fe = new K();
              return R(fe.init) && fe.init.apply(fe, arguments), fe;
            }
            function K() {}
            te === m && ((te = H), (H = Object)), (N.Bare = K);
            var j,
              oe = (S[c] = H[c]),
              Ne = (K[c] = N[c] = new S());
            return (
              (Ne.constructor = N),
              (N.mixin = function (fe) {
                return (K[c] = N[c] = X(N, fe)[c]), N;
              }),
              (N.open = function (fe) {
                if (((j = {}), R(fe) ? (j = fe.call(N, Ne, oe, N, H)) : T(fe) && (j = fe), T(j)))
                  for (var Bt in j) h.call(j, Bt) && (Ne[Bt] = j[Bt]);
                return R(Ne.init) || (Ne.init = H), N;
              }),
              N.open(te)
            );
          }
          return X;
        })("prototype", {}.hasOwnProperty),
        d = {
          ease: [
            "ease",
            function (c, h, m, T) {
              var R = (c /= T) * c,
                S = R * c;
              return h + m * (-2.75 * S * R + 11 * R * R + -15.5 * S + 8 * R + 0.25 * c);
            },
          ],
          "ease-in": [
            "ease-in",
            function (c, h, m, T) {
              var R = (c /= T) * c,
                S = R * c;
              return h + m * (-1 * S * R + 3 * R * R + -3 * S + 2 * R);
            },
          ],
          "ease-out": [
            "ease-out",
            function (c, h, m, T) {
              var R = (c /= T) * c,
                S = R * c;
              return h + m * (0.3 * S * R + -1.6 * R * R + 2.2 * S + -1.8 * R + 1.9 * c);
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (c, h, m, T) {
              var R = (c /= T) * c,
                S = R * c;
              return h + m * (2 * S * R + -5 * R * R + 2 * S + 2 * R);
            },
          ],
          linear: [
            "linear",
            function (c, h, m, T) {
              return (m * c) / T + h;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (c, h, m, T) {
              return m * (c /= T) * c + h;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (c, h, m, T) {
              return -m * (c /= T) * (c - 2) + h;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (c, h, m, T) {
              return (c /= T / 2) < 1 ? (m / 2) * c * c + h : (-m / 2) * (--c * (c - 2) - 1) + h;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (c, h, m, T) {
              return m * (c /= T) * c * c + h;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (c, h, m, T) {
              return m * ((c = c / T - 1) * c * c + 1) + h;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (c, h, m, T) {
              return (c /= T / 2) < 1 ? (m / 2) * c * c * c + h : (m / 2) * ((c -= 2) * c * c + 2) + h;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (c, h, m, T) {
              return m * (c /= T) * c * c * c + h;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (c, h, m, T) {
              return -m * ((c = c / T - 1) * c * c * c - 1) + h;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (c, h, m, T) {
              return (c /= T / 2) < 1 ? (m / 2) * c * c * c * c + h : (-m / 2) * ((c -= 2) * c * c * c - 2) + h;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (c, h, m, T) {
              return m * (c /= T) * c * c * c * c + h;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (c, h, m, T) {
              return m * ((c = c / T - 1) * c * c * c * c + 1) + h;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (c, h, m, T) {
              return (c /= T / 2) < 1 ? (m / 2) * c * c * c * c * c + h : (m / 2) * ((c -= 2) * c * c * c * c + 2) + h;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (c, h, m, T) {
              return -m * Math.cos((c / T) * (Math.PI / 2)) + m + h;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (c, h, m, T) {
              return m * Math.sin((c / T) * (Math.PI / 2)) + h;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (c, h, m, T) {
              return (-m / 2) * (Math.cos((Math.PI * c) / T) - 1) + h;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (c, h, m, T) {
              return c === 0 ? h : m * Math.pow(2, 10 * (c / T - 1)) + h;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (c, h, m, T) {
              return c === T ? h + m : m * (-Math.pow(2, (-10 * c) / T) + 1) + h;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (c, h, m, T) {
              return c === 0
                ? h
                : c === T
                  ? h + m
                  : (c /= T / 2) < 1
                    ? (m / 2) * Math.pow(2, 10 * (c - 1)) + h
                    : (m / 2) * (-Math.pow(2, -10 * --c) + 2) + h;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (c, h, m, T) {
              return -m * (Math.sqrt(1 - (c /= T) * c) - 1) + h;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (c, h, m, T) {
              return m * Math.sqrt(1 - (c = c / T - 1) * c) + h;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (c, h, m, T) {
              return (c /= T / 2) < 1
                ? (-m / 2) * (Math.sqrt(1 - c * c) - 1) + h
                : (m / 2) * (Math.sqrt(1 - (c -= 2) * c) + 1) + h;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (c, h, m, T, R) {
              return R === void 0 && (R = 1.70158), m * (c /= T) * c * ((R + 1) * c - R) + h;
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (c, h, m, T, R) {
              return R === void 0 && (R = 1.70158), m * ((c = c / T - 1) * c * ((R + 1) * c + R) + 1) + h;
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (c, h, m, T, R) {
              return (
                R === void 0 && (R = 1.70158),
                (c /= T / 2) < 1
                  ? (m / 2) * c * c * (((R *= 1.525) + 1) * c - R) + h
                  : (m / 2) * ((c -= 2) * c * (((R *= 1.525) + 1) * c + R) + 2) + h
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        _ = document,
        v = window,
        b = "bkwld-tram",
        y = /[\-\.0-9]/g,
        O = /[A-Z]/,
        A = "number",
        w = /^(rgb|#)/,
        C = /(em|cm|mm|in|pt|pc|px)$/,
        x = /(em|cm|mm|in|pt|pc|px|%)$/,
        D = /(deg|rad|turn)$/,
        F = "unitless",
        G = /(all|none) 0s ease 0s/,
        U = /^(width|height)$/,
        B = " ",
        L = _.createElement("a"),
        I = ["Webkit", "Moz", "O", "ms"],
        P = ["-webkit-", "-moz-", "-o-", "-ms-"],
        q = function (c) {
          if (c in L.style)
            return {
              dom: c,
              css: c,
            };
          var h,
            m,
            T = "",
            R = c.split("-");
          for (h = 0; h < R.length; h++) T += R[h].charAt(0).toUpperCase() + R[h].slice(1);
          for (h = 0; h < I.length; h++)
            if (((m = I[h] + T), m in L.style))
              return {
                dom: m,
                css: P[h] + c,
              };
        },
        M = (t.support = {
          bind: Function.prototype.bind,
          transform: q("transform"),
          transition: q("transition"),
          backface: q("backface-visibility"),
          timing: q("transition-timing-function"),
        });
      if (M.transition) {
        var W = M.timing.dom;
        if (((L.style[W] = d["ease-in-back"][0]), !L.style[W])) for (var k in E) d[k][0] = E[k];
      }
      var J = (t.frame = (function () {
          var c =
            v.requestAnimationFrame ||
            v.webkitRequestAnimationFrame ||
            v.mozRequestAnimationFrame ||
            v.oRequestAnimationFrame ||
            v.msRequestAnimationFrame;
          return c && M.bind
            ? c.bind(v)
            : function (h) {
                v.setTimeout(h, 16);
              };
        })()),
        Te = (t.now = (function () {
          var c = v.performance,
            h = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
          return h && M.bind
            ? h.bind(c)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        je = p(function (c) {
          function h(V, Y) {
            var re = g(("" + V).split(B)),
              Q = re[0];
            Y = Y || {};
            var de = Dr[Q];
            if (!de) return l("Unsupported property: " + Q);
            if (!Y.weak || !this.props[Q]) {
              var Oe = de[0],
                ye = this.props[Q];
              return ye || (ye = this.props[Q] = new Oe.Bare()), ye.init(this.$el, re, de, Y), ye;
            }
          }
          function m(V, Y, re) {
            if (V) {
              var Q = typeof V;
              if (
                (Y || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)), Q == "number" && Y)
              )
                return (
                  (this.timer = new vn({
                    duration: V,
                    context: this,
                    complete: S,
                  })),
                  void (this.active = !0)
                );
              if (Q == "string" && Y) {
                switch (V) {
                  case "hide":
                    N.call(this);
                    break;
                  case "stop":
                    X.call(this);
                    break;
                  case "redraw":
                    K.call(this);
                    break;
                  default:
                    h.call(this, V, re && re[1]);
                }
                return S.call(this);
              }
              if (Q == "function") return void V.call(this, this);
              if (Q == "object") {
                var de = 0;
                Ne.call(
                  this,
                  V,
                  function (ae, wE) {
                    ae.span > de && (de = ae.span), ae.stop(), ae.animate(wE);
                  },
                  function (ae) {
                    "wait" in ae && (de = u(ae.wait, 0));
                  }
                ),
                  oe.call(this),
                  de > 0 &&
                    ((this.timer = new vn({
                      duration: de,
                      context: this,
                    })),
                    (this.active = !0),
                    Y && (this.timer.complete = S));
                var Oe = this,
                  ye = !1,
                  _n = {};
                J(function () {
                  Ne.call(Oe, V, function (ae) {
                    ae.active && ((ye = !0), (_n[ae.name] = ae.nextStyle));
                  }),
                    ye && Oe.$el.css(_n);
                });
              }
            }
          }
          function T(V) {
            (V = u(V, 0)),
              this.active
                ? this.queue.push({
                    options: V,
                  })
                : ((this.timer = new vn({
                    duration: V,
                    context: this,
                    complete: S,
                  })),
                  (this.active = !0));
          }
          function R(V) {
            return this.active
              ? (this.queue.push({
                  options: V,
                  args: arguments,
                }),
                void (this.timer.complete = S))
              : l("No active transition timer. Use start() or wait() before then().");
          }
          function S() {
            if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
              var V = this.queue.shift();
              m.call(this, V.options, !0, V.args);
            }
          }
          function X(V) {
            this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1);
            var Y;
            typeof V == "string" ? ((Y = {}), (Y[V] = 1)) : (Y = typeof V == "object" && V != null ? V : this.props),
              Ne.call(this, Y, fe),
              oe.call(this);
          }
          function H(V) {
            X.call(this, V), Ne.call(this, V, Bt, OE);
          }
          function te(V) {
            typeof V != "string" && (V = "block"), (this.el.style.display = V);
          }
          function N() {
            X.call(this), (this.el.style.display = "none");
          }
          function K() {
            this.el.offsetHeight;
          }
          function j() {
            X.call(this), e.removeData(this.el, b), (this.$el = this.el = null);
          }
          function oe() {
            var V,
              Y,
              re = [];
            this.upstream && re.push(this.upstream);
            for (V in this.props) (Y = this.props[V]), Y.active && re.push(Y.string);
            (re = re.join(",")), this.style !== re && ((this.style = re), (this.el.style[M.transition.dom] = re));
          }
          function Ne(V, Y, re) {
            var Q,
              de,
              Oe,
              ye,
              _n = Y !== fe,
              ae = {};
            for (Q in V)
              (Oe = V[Q]),
                Q in Ye
                  ? (ae.transform || (ae.transform = {}), (ae.transform[Q] = Oe))
                  : (O.test(Q) && (Q = n(Q)), Q in Dr ? (ae[Q] = Oe) : (ye || (ye = {}), (ye[Q] = Oe)));
            for (Q in ae) {
              if (((Oe = ae[Q]), (de = this.props[Q]), !de)) {
                if (!_n) continue;
                de = h.call(this, Q);
              }
              Y.call(this, de, Oe);
            }
            re && ye && re.call(this, ye);
          }
          function fe(V) {
            V.stop();
          }
          function Bt(V, Y) {
            V.set(Y);
          }
          function OE(V) {
            this.$el.css(V);
          }
          function Se(V, Y) {
            c[V] = function () {
              return this.children ? xE.call(this, Y, arguments) : (this.el && Y.apply(this, arguments), this);
            };
          }
          function xE(V, Y) {
            var re,
              Q = this.children.length;
            for (re = 0; Q > re; re++) V.apply(this.children[re], Y);
            return this;
          }
          (c.init = function (V) {
            if (
              ((this.$el = e(V)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              Ee.keepInherited && !Ee.fallback)
            ) {
              var Y = ea(this.el, "transition");
              Y && !G.test(Y) && (this.upstream = Y);
            }
            M.backface && Ee.hideBackface && lt(this.el, M.backface.css, "hidden");
          }),
            Se("add", h),
            Se("start", m),
            Se("wait", T),
            Se("then", R),
            Se("next", S),
            Se("stop", X),
            Se("set", H),
            Se("show", te),
            Se("hide", N),
            Se("redraw", K),
            Se("destroy", j);
        }),
        le = p(je, function (c) {
          function h(m, T) {
            var R = e.data(m, b) || e.data(m, b, new je.Bare());
            return R.el || R.init(m), T ? R.start(T) : R;
          }
          c.init = function (m, T) {
            var R = e(m);
            if (!R.length) return this;
            if (R.length === 1) return h(R[0], T);
            var S = [];
            return (
              R.each(function (X, H) {
                S.push(h(H, T));
              }),
              (this.children = S),
              this
            );
          };
        }),
        z = p(function (c) {
          function h() {
            var S = this.get();
            this.update("auto");
            var X = this.get();
            return this.update(S), X;
          }
          function m(S, X, H) {
            return X !== void 0 && (H = X), S in d ? S : H;
          }
          function T(S) {
            var X = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(S);
            return (X ? i(X[1], X[2], X[3]) : S).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var R = {
            duration: 500,
            ease: "ease",
            delay: 0,
          };
          (c.init = function (S, X, H, te) {
            (this.$el = S), (this.el = S[0]);
            var N = X[0];
            H[2] && (N = H[2]),
              ta[N] && (N = ta[N]),
              (this.name = N),
              (this.type = H[1]),
              (this.duration = u(X[1], this.duration, R.duration)),
              (this.ease = m(X[2], this.ease, R.ease)),
              (this.delay = u(X[3], this.delay, R.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = U.test(this.name)),
              (this.unit = te.unit || this.unit || Ee.defaultUnit),
              (this.angle = te.angle || this.angle || Ee.defaultAngle),
              Ee.fallback || te.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    B +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? B + d[this.ease][0] : "") +
                    (this.delay ? B + this.delay + "ms" : "")));
          }),
            (c.set = function (S) {
              (S = this.convert(S, this.type)), this.update(S), this.redraw();
            }),
            (c.transition = function (S) {
              (this.active = !0),
                (S = this.convert(S, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()),
                  S == "auto" && (S = h.call(this))),
                (this.nextStyle = S);
            }),
            (c.fallback = function (S) {
              var X = this.el.style[this.name] || this.convert(this.get(), this.type);
              (S = this.convert(S, this.type)),
                this.auto &&
                  (X == "auto" && (X = this.convert(this.get(), this.type)), S == "auto" && (S = h.call(this))),
                (this.tween = new Ut({
                  from: X,
                  to: S,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (c.get = function () {
              return ea(this.el, this.name);
            }),
            (c.update = function (S) {
              lt(this.el, this.name, S);
            }),
            (c.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1), (this.nextStyle = null), lt(this.el, this.name, this.get()));
              var S = this.tween;
              S && S.context && S.destroy();
            }),
            (c.convert = function (S, X) {
              if (S == "auto" && this.auto) return S;
              var H,
                te = typeof S == "number",
                N = typeof S == "string";
              switch (X) {
                case A:
                  if (te) return S;
                  if (N && S.replace(y, "") === "") return +S;
                  H = "number(unitless)";
                  break;
                case w:
                  if (N) {
                    if (S === "" && this.original) return this.original;
                    if (X.test(S)) return S.charAt(0) == "#" && S.length == 7 ? S : T(S);
                  }
                  H = "hex or rgb string";
                  break;
                case C:
                  if (te) return S + this.unit;
                  if (N && X.test(S)) return S;
                  H = "number(px) or string(unit)";
                  break;
                case x:
                  if (te) return S + this.unit;
                  if (N && X.test(S)) return S;
                  H = "number(px) or string(unit or %)";
                  break;
                case D:
                  if (te) return S + this.angle;
                  if (N && X.test(S)) return S;
                  H = "number(deg) or string(angle)";
                  break;
                case F:
                  if (te || (N && x.test(S))) return S;
                  H = "number(unitless) or string(unit or %)";
              }
              return a(H, S), S;
            }),
            (c.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        be = p(z, function (c, h) {
          c.init = function () {
            h.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), w));
          };
        }),
        Vt = p(z, function (c, h) {
          (c.init = function () {
            h.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (c.get = function () {
              return this.$el[this.name]();
            }),
            (c.update = function (m) {
              this.$el[this.name](m);
            });
        }),
        mn = p(z, function (c, h) {
          function m(T, R) {
            var S, X, H, te, N;
            for (S in T)
              (te = Ye[S]), (H = te[0]), (X = te[1] || S), (N = this.convert(T[S], H)), R.call(this, X, N, H);
          }
          (c.init = function () {
            h.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                Ye.perspective &&
                  Ee.perspective &&
                  ((this.current.perspective = Ee.perspective),
                  lt(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (c.set = function (T) {
              m.call(this, T, function (R, S) {
                this.current[R] = S;
              }),
                lt(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (c.transition = function (T) {
              var R = this.values(T);
              this.tween = new Jo({
                current: this.current,
                values: R,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var S,
                X = {};
              for (S in this.current) X[S] = S in R ? R[S] : this.current[S];
              (this.active = !0), (this.nextStyle = this.style(X));
            }),
            (c.fallback = function (T) {
              var R = this.values(T);
              this.tween = new Jo({
                current: this.current,
                values: R,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (c.update = function () {
              lt(this.el, this.name, this.style(this.current));
            }),
            (c.style = function (T) {
              var R,
                S = "";
              for (R in T) S += R + "(" + T[R] + ") ";
              return S;
            }),
            (c.values = function (T) {
              var R,
                S = {};
              return (
                m.call(this, T, function (X, H, te) {
                  (S[X] = H),
                    this.current[X] === void 0 &&
                      ((R = 0), ~X.indexOf("scale") && (R = 1), (this.current[X] = this.convert(R, te)));
                }),
                S
              );
            });
        }),
        Ut = p(function (c) {
          function h(N) {
            H.push(N) === 1 && J(m);
          }
          function m() {
            var N,
              K,
              j,
              oe = H.length;
            if (oe) for (J(m), K = Te(), N = oe; N--; ) (j = H[N]), j && j.render(K);
          }
          function T(N) {
            var K,
              j = e.inArray(N, H);
            j >= 0 && ((K = H.slice(j + 1)), (H.length = j), K.length && (H = H.concat(K)));
          }
          function R(N) {
            return Math.round(N * te) / te;
          }
          function S(N, K, j) {
            return i(N[0] + j * (K[0] - N[0]), N[1] + j * (K[1] - N[1]), N[2] + j * (K[2] - N[2]));
          }
          var X = {
            ease: d.ease[1],
            from: 0,
            to: 1,
          };
          (c.init = function (N) {
            (this.duration = N.duration || 0), (this.delay = N.delay || 0);
            var K = N.ease || X.ease;
            d[K] && (K = d[K][1]),
              typeof K != "function" && (K = X.ease),
              (this.ease = K),
              (this.update = N.update || o),
              (this.complete = N.complete || o),
              (this.context = N.context || this),
              (this.name = N.name);
            var j = N.from,
              oe = N.to;
            j === void 0 && (j = X.from),
              oe === void 0 && (oe = X.to),
              (this.unit = N.unit || ""),
              typeof j == "number" && typeof oe == "number"
                ? ((this.begin = j), (this.change = oe - j))
                : this.format(oe, j),
              (this.value = this.begin + this.unit),
              (this.start = Te()),
              N.autoplay !== !1 && this.play();
          }),
            (c.play = function () {
              this.active || (this.start || (this.start = Te()), (this.active = !0), h(this));
            }),
            (c.stop = function () {
              this.active && ((this.active = !1), T(this));
            }),
            (c.render = function (N) {
              var K,
                j = N - this.start;
              if (this.delay) {
                if (j <= this.delay) return;
                j -= this.delay;
              }
              if (j < this.duration) {
                var oe = this.ease(j, 0, 1, this.duration);
                return (
                  (K = this.startRGB ? S(this.startRGB, this.endRGB, oe) : R(this.begin + oe * this.change)),
                  (this.value = K + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (K = this.endHex || this.begin + this.change),
                (this.value = K + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (c.format = function (N, K) {
              if (((K += ""), (N += ""), N.charAt(0) == "#"))
                return (
                  (this.startRGB = r(K)),
                  (this.endRGB = r(N)),
                  (this.endHex = N),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var j = K.replace(y, ""),
                  oe = N.replace(y, "");
                j !== oe && s("tween", K, N), (this.unit = j);
              }
              (K = parseFloat(K)), (N = parseFloat(N)), (this.begin = this.value = K), (this.change = N - K);
            }),
            (c.destroy = function () {
              this.stop(), (this.context = null), (this.ease = this.update = this.complete = o);
            });
          var H = [],
            te = 1e3;
        }),
        vn = p(Ut, function (c) {
          (c.init = function (h) {
            (this.duration = h.duration || 0),
              (this.complete = h.complete || o),
              (this.context = h.context),
              this.play();
          }),
            (c.render = function (h) {
              var m = h - this.start;
              m < this.duration || (this.complete.call(this.context), this.destroy());
            });
        }),
        Jo = p(Ut, function (c, h) {
          (c.init = function (m) {
            (this.context = m.context), (this.update = m.update), (this.tweens = []), (this.current = m.current);
            var T, R;
            for (T in m.values)
              (R = m.values[T]),
                this.current[T] !== R &&
                  this.tweens.push(
                    new Ut({
                      name: T,
                      from: this.current[T],
                      to: R,
                      duration: m.duration,
                      delay: m.delay,
                      ease: m.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (c.render = function (m) {
              var T,
                R,
                S = this.tweens.length,
                X = !1;
              for (T = S; T--; )
                (R = this.tweens[T]), R.context && (R.render(m), (this.current[R.name] = R.value), (X = !0));
              return X ? void (this.update && this.update.call(this.context)) : this.destroy();
            }),
            (c.destroy = function () {
              if ((h.destroy.call(this), this.tweens)) {
                var m,
                  T = this.tweens.length;
                for (m = T; m--; ) this.tweens[m].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        Ee = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !M.transition,
          agentTests: [],
        });
      (t.fallback = function (c) {
        if (!M.transition) return (Ee.fallback = !0);
        Ee.agentTests.push("(" + c + ")");
        var h = new RegExp(Ee.agentTests.join("|"), "i");
        Ee.fallback = h.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (c) {
          return new Ut(c);
        }),
        (t.delay = function (c, h, m) {
          return new vn({
            complete: h,
            duration: c,
            context: m,
          });
        }),
        (e.fn.tram = function (c) {
          return t.call(null, this, c);
        });
      var lt = e.style,
        ea = e.css,
        ta = {
          transform: M.transform && M.transform.css,
        },
        Dr = {
          color: [be, w],
          background: [be, w, "background-color"],
          "outline-color": [be, w],
          "border-color": [be, w],
          "border-top-color": [be, w],
          "border-right-color": [be, w],
          "border-bottom-color": [be, w],
          "border-left-color": [be, w],
          "border-width": [z, C],
          "border-top-width": [z, C],
          "border-right-width": [z, C],
          "border-bottom-width": [z, C],
          "border-left-width": [z, C],
          "border-spacing": [z, C],
          "letter-spacing": [z, C],
          margin: [z, C],
          "margin-top": [z, C],
          "margin-right": [z, C],
          "margin-bottom": [z, C],
          "margin-left": [z, C],
          padding: [z, C],
          "padding-top": [z, C],
          "padding-right": [z, C],
          "padding-bottom": [z, C],
          "padding-left": [z, C],
          "outline-width": [z, C],
          opacity: [z, A],
          top: [z, x],
          right: [z, x],
          bottom: [z, x],
          left: [z, x],
          "font-size": [z, x],
          "text-indent": [z, x],
          "word-spacing": [z, x],
          width: [z, x],
          "min-width": [z, x],
          "max-width": [z, x],
          height: [z, x],
          "min-height": [z, x],
          "max-height": [z, x],
          "line-height": [z, F],
          "scroll-top": [Vt, A, "scrollTop"],
          "scroll-left": [Vt, A, "scrollLeft"],
        },
        Ye = {};
      M.transform &&
        ((Dr.transform = [mn]),
        (Ye = {
          x: [x, "translateX"],
          y: [x, "translateY"],
          rotate: [D],
          rotateX: [D],
          rotateY: [D],
          scale: [A],
          scaleX: [A],
          scaleY: [A],
          skew: [D],
          skewX: [D],
          skewY: [D],
        })),
        M.transform &&
          M.backface &&
          ((Ye.z = [x, "translateZ"]), (Ye.rotateZ = [D]), (Ye.scaleZ = [A]), (Ye.perspective = [C]));
      var SE = /ms/,
        na = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var oa = f((lF, ia) => {
    "use strict";
    var ME = window.$,
      DE = Fr() && ME.tram;
    ia.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        n = Array.prototype,
        r = Object.prototype,
        i = Function.prototype,
        o = n.push,
        a = n.slice,
        s = n.concat,
        u = r.toString,
        l = r.hasOwnProperty,
        g = n.forEach,
        p = n.map,
        d = n.reduce,
        E = n.reduceRight,
        _ = n.filter,
        v = n.every,
        b = n.some,
        y = n.indexOf,
        O = n.lastIndexOf,
        A = Array.isArray,
        w = Object.keys,
        C = i.bind,
        x =
          (e.each =
          e.forEach =
            function (I, P, q) {
              if (I == null) return I;
              if (g && I.forEach === g) I.forEach(P, q);
              else if (I.length === +I.length) {
                for (var M = 0, W = I.length; M < W; M++) if (P.call(q, I[M], M, I) === t) return;
              } else
                for (var k = e.keys(I), M = 0, W = k.length; M < W; M++) if (P.call(q, I[k[M]], k[M], I) === t) return;
              return I;
            });
      (e.map = e.collect =
        function (I, P, q) {
          var M = [];
          return I == null
            ? M
            : p && I.map === p
              ? I.map(P, q)
              : (x(I, function (W, k, J) {
                  M.push(P.call(q, W, k, J));
                }),
                M);
        }),
        (e.find = e.detect =
          function (I, P, q) {
            var M;
            return (
              D(I, function (W, k, J) {
                if (P.call(q, W, k, J)) return (M = W), !0;
              }),
              M
            );
          }),
        (e.filter = e.select =
          function (I, P, q) {
            var M = [];
            return I == null
              ? M
              : _ && I.filter === _
                ? I.filter(P, q)
                : (x(I, function (W, k, J) {
                    P.call(q, W, k, J) && M.push(W);
                  }),
                  M);
          });
      var D =
        (e.some =
        e.any =
          function (I, P, q) {
            P || (P = e.identity);
            var M = !1;
            return I == null
              ? M
              : b && I.some === b
                ? I.some(P, q)
                : (x(I, function (W, k, J) {
                    if (M || (M = P.call(q, W, k, J))) return t;
                  }),
                  !!M);
          });
      (e.contains = e.include =
        function (I, P) {
          return I == null
            ? !1
            : y && I.indexOf === y
              ? I.indexOf(P) != -1
              : D(I, function (q) {
                  return q === P;
                });
        }),
        (e.delay = function (I, P) {
          var q = a.call(arguments, 2);
          return setTimeout(function () {
            return I.apply(null, q);
          }, P);
        }),
        (e.defer = function (I) {
          return e.delay.apply(e, [I, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (I) {
          var P, q, M;
          return function () {
            P ||
              ((P = !0),
              (q = arguments),
              (M = this),
              DE.frame(function () {
                (P = !1), I.apply(M, q);
              }));
          };
        }),
        (e.debounce = function (I, P, q) {
          var M,
            W,
            k,
            J,
            Te,
            je = function () {
              var le = e.now() - J;
              le < P ? (M = setTimeout(je, P - le)) : ((M = null), q || ((Te = I.apply(k, W)), (k = W = null)));
            };
          return function () {
            (k = this), (W = arguments), (J = e.now());
            var le = q && !M;
            return M || (M = setTimeout(je, P)), le && ((Te = I.apply(k, W)), (k = W = null)), Te;
          };
        }),
        (e.defaults = function (I) {
          if (!e.isObject(I)) return I;
          for (var P = 1, q = arguments.length; P < q; P++) {
            var M = arguments[P];
            for (var W in M) I[W] === void 0 && (I[W] = M[W]);
          }
          return I;
        }),
        (e.keys = function (I) {
          if (!e.isObject(I)) return [];
          if (w) return w(I);
          var P = [];
          for (var q in I) e.has(I, q) && P.push(q);
          return P;
        }),
        (e.has = function (I, P) {
          return l.call(I, P);
        }),
        (e.isObject = function (I) {
          return I === Object(I);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var F = /(.)^/,
        G = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        U = /\\|'|\r|\n|\u2028|\u2029/g,
        B = function (I) {
          return "\\" + G[I];
        },
        L = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (I, P, q) {
          !P && q && (P = q), (P = e.defaults({}, P, e.templateSettings));
          var M = RegExp(
              [(P.escape || F).source, (P.interpolate || F).source, (P.evaluate || F).source].join("|") + "|$",
              "g"
            ),
            W = 0,
            k = "__p+='";
          I.replace(M, function (le, z, be, Vt, mn) {
            return (
              (k += I.slice(W, mn).replace(U, B)),
              (W = mn + le.length),
              z
                ? (k +=
                    `'+
            ((__t=(` +
                    z +
                    `))==null?'':_.escape(__t))+
            '`)
                : be
                  ? (k +=
                      `'+
            ((__t=(` +
                      be +
                      `))==null?'':__t)+
            '`)
                  : Vt &&
                    (k +=
                      `';
            ` +
                      Vt +
                      `
            __p+='`),
              le
            );
          }),
            (k += `';
            `);
          var J = P.variable;
          if (J) {
            if (!L.test(J)) throw new Error("variable is not a bare identifier: " + J);
          } else
            (k =
              `with(obj||{}){
            ` +
              k +
              `}
            `),
              (J = "obj");
          k =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
            ` +
            k +
            `return __p;
            `;
          var Te;
          try {
            Te = new Function(P.variable || "obj", "_", k);
          } catch (le) {
            throw ((le.source = k), le);
          }
          var je = function (le) {
            return Te.call(this, le, e);
          };
          return (
            (je.source =
              "function(" +
              J +
              `){
            ` +
              k +
              "}"),
            je
          );
        }),
        e
      );
    })();
  });
  var Be = f((fF, pa) => {
    "use strict";
    var Z = {},
      ft = {},
      dt = [],
      Gr = window.Webflow || [],
      $e = window.jQuery,
      we = $e(window),
      FE = $e(document),
      De = $e.isFunction,
      xe = (Z._ = oa()),
      sa = (Z.tram = Fr() && $e.tram),
      An = !1,
      Xr = !1;
    sa.config.hideBackface = !1;
    sa.config.keepInherited = !0;
    Z.define = function (e, t, n) {
      ft[e] && ca(ft[e]);
      var r = (ft[e] = t($e, xe, n) || {});
      return ua(r), r;
    };
    Z.require = function (e) {
      return ft[e];
    };
    function ua(e) {
      Z.env() && (De(e.design) && we.on("__wf_design", e.design), De(e.preview) && we.on("__wf_preview", e.preview)),
        De(e.destroy) && we.on("__wf_destroy", e.destroy),
        e.ready && De(e.ready) && qE(e);
    }
    function qE(e) {
      if (An) {
        e.ready();
        return;
      }
      xe.contains(dt, e.ready) || dt.push(e.ready);
    }
    function ca(e) {
      De(e.design) && we.off("__wf_design", e.design),
        De(e.preview) && we.off("__wf_preview", e.preview),
        De(e.destroy) && we.off("__wf_destroy", e.destroy),
        e.ready && De(e.ready) && GE(e);
    }
    function GE(e) {
      dt = xe.filter(dt, function (t) {
        return t !== e.ready;
      });
    }
    Z.push = function (e) {
      if (An) {
        De(e) && e();
        return;
      }
      Gr.push(e);
    };
    Z.env = function (e) {
      var t = window.__wf_design,
        n = typeof t < "u";
      if (!e) return n;
      if (e === "design") return n && t;
      if (e === "preview") return n && !t;
      if (e === "slug") return n && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Tn = navigator.userAgent.toLowerCase(),
      la = (Z.env.touch =
        "ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
      XE = (Z.env.chrome =
        /chrome/.test(Tn) && /Google/.test(navigator.vendor) && parseInt(Tn.match(/chrome\/(\d+)\./)[1], 10)),
      VE = (Z.env.ios = /(ipod|iphone|ipad)/.test(Tn));
    Z.env.safari = /safari/.test(Tn) && !XE && !VE;
    var qr;
    la &&
      FE.on("touchstart mousedown", function (e) {
        qr = e.target;
      });
    Z.validClick = la
      ? function (e) {
          return e === qr || $e.contains(e, qr);
        }
      : function () {
          return !0;
        };
    var fa = "resize.webflow orientationchange.webflow load.webflow",
      UE = "scroll.webflow " + fa;
    Z.resize = Vr(we, fa);
    Z.scroll = Vr(we, UE);
    Z.redraw = Vr();
    function Vr(e, t) {
      var n = [],
        r = {};
      return (
        (r.up = xe.throttle(function (i) {
          xe.each(n, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, r.up),
        (r.on = function (i) {
          typeof i == "function" && (xe.contains(n, i) || n.push(i));
        }),
        (r.off = function (i) {
          if (!arguments.length) {
            n = [];
            return;
          }
          n = xe.filter(n, function (o) {
            return o !== i;
          });
        }),
        r
      );
    }
    Z.location = function (e) {
      window.location = e;
    };
    Z.env() && (Z.location = function () {});
    Z.ready = function () {
      (An = !0), Xr ? BE() : xe.each(dt, aa), xe.each(Gr, aa), Z.resize.up();
    };
    function aa(e) {
      De(e) && e();
    }
    function BE() {
      (Xr = !1), xe.each(ft, ua);
    }
    var nt;
    Z.load = function (e) {
      nt.then(e);
    };
    function da() {
      nt && (nt.reject(), we.off("load", nt.resolve)), (nt = new $e.Deferred()), we.on("load", nt.resolve);
    }
    Z.destroy = function (e) {
      (e = e || {}),
        (Xr = !0),
        we.triggerHandler("__wf_destroy"),
        e.domready != null && (An = e.domready),
        xe.each(ft, ca),
        Z.resize.off(),
        Z.scroll.off(),
        Z.redraw.off(),
        (dt = []),
        (Gr = []),
        nt.state() === "pending" && da();
    };
    $e(Z.ready);
    da();
    pa.exports = window.Webflow = Z;
  });
  var Ea = f((dF, ha) => {
    "use strict";
    var ga = Be();
    ga.define(
      "brand",
      (ha.exports = function (e) {
        var t = {},
          n = document,
          r = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          l;
        t.ready = function () {
          var E = r.attr("data-wf-status"),
            _ = r.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(_) && a.hostname !== _ && (E = !0),
            E && !s && ((l = l || p()), d(), setTimeout(d, 500), e(n).off(u, g).on(u, g));
        };
        function g() {
          var E =
            n.fullScreen ||
            n.mozFullScreen ||
            n.webkitIsFullScreen ||
            n.msFullscreenElement ||
            !!n.webkitFullscreenElement;
          e(l).attr("style", E ? "display: none !important;" : "");
        }
        function p() {
          // var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
          //   _ = e("<img>")
          //     .attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg")
          //     .attr("alt", "")
          //     .css({
          //       marginRight: "4px",
          //       width: "26px",
          //     }),
          //   v = e("<img>")
          //     .attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg")
          //     .attr("alt", "Made in Webflow");
          // return E.append(_, v), E[0];
        }
        function d() {
          var E = i.children(o),
            _ = E.length && E.get(0) === l,
            v = ga.env("editor");
          if (_) {
            v && E.remove();
            return;
          }
          E.length && E.remove(), v || i.append(l);
        }
        return t;
      })
    );
  });
  var ma = f((pF, ya) => {
    "use strict";
    var Ur = Be();
    Ur.define(
      "edit",
      (ya.exports = function (e, t, n) {
        if (((n = n || {}), (Ur.env("test") || Ur.env("frame")) && !n.fixture && !HE()))
          return {
            exit: 1,
          };
        var r = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          l = n.load || d,
          g = !1;
        try {
          g = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
        } catch {}
        g
          ? l()
          : a.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l()
            : i.on(s, p).triggerHandler(s);
        function p() {
          u || (/\?edit/.test(a.hash) && l());
        }
        function d() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, p),
            O(function (w) {
              e.ajax({
                url: y("https://editor-api.webflow.com/api/editor/view"),
                data: {
                  siteId: o.attr("data-wf-site"),
                },
                xhrFields: {
                  withCredentials: !0,
                },
                dataType: "json",
                crossDomain: !0,
                success: E(w),
              });
            });
        }
        function E(w) {
          return function (C) {
            if (!C) {
              console.error("Could not load editor data");
              return;
            }
            (C.thirdPartyCookiesSupported = w),
              _(b(C.scriptPath), function () {
                window.WebflowEditor(C);
              });
          };
        }
        function _(w, C) {
          e.ajax({
            type: "GET",
            url: w,
            dataType: "script",
            cache: !0,
          }).then(C, v);
        }
        function v(w, C, x) {
          throw (console.error("Could not load editor script: " + C), x);
        }
        function b(w) {
          return w.indexOf("//") >= 0 ? w : y("https://editor-api.webflow.com" + w);
        }
        function y(w) {
          return w.replace(/([^:])\/\//g, "$1/");
        }
        function O(w) {
          var C = window.document.createElement("iframe");
          (C.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (C.style.display = "none"),
            (C.sandbox = "allow-scripts allow-same-origin");
          var x = function (D) {
            D.data === "WF_third_party_cookies_unsupported"
              ? (A(C, x), w(!1))
              : D.data === "WF_third_party_cookies_supported" && (A(C, x), w(!0));
          };
          (C.onerror = function () {
            A(C, x), w(!1);
          }),
            window.addEventListener("message", x, !1),
            window.document.body.appendChild(C);
        }
        function A(w, C) {
          window.removeEventListener("message", C, !1), w.remove();
        }
        return r;
      })
    );
    function HE() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var _a = f((gF, va) => {
    "use strict";
    var kE = Be();
    kE.define(
      "focus-visible",
      (va.exports = function () {
        function e(n) {
          var r = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(A) {
            return !!(
              A &&
              A !== document &&
              A.nodeName !== "HTML" &&
              A.nodeName !== "BODY" &&
              "classList" in A &&
              "contains" in A.classList
            );
          }
          function u(A) {
            var w = A.type,
              C = A.tagName;
            return !!(
              (C === "INPUT" && a[w] && !A.readOnly) ||
              (C === "TEXTAREA" && !A.readOnly) ||
              A.isContentEditable
            );
          }
          function l(A) {
            A.getAttribute("data-wf-focus-visible") || A.setAttribute("data-wf-focus-visible", "true");
          }
          function g(A) {
            A.getAttribute("data-wf-focus-visible") && A.removeAttribute("data-wf-focus-visible");
          }
          function p(A) {
            A.metaKey || A.altKey || A.ctrlKey || (s(n.activeElement) && l(n.activeElement), (r = !0));
          }
          function d() {
            r = !1;
          }
          function E(A) {
            s(A.target) && (r || u(A.target)) && l(A.target);
          }
          function _(A) {
            s(A.target) &&
              A.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              g(A.target));
          }
          function v() {
            document.visibilityState === "hidden" && (i && (r = !0), b());
          }
          function b() {
            document.addEventListener("mousemove", O),
              document.addEventListener("mousedown", O),
              document.addEventListener("mouseup", O),
              document.addEventListener("pointermove", O),
              document.addEventListener("pointerdown", O),
              document.addEventListener("pointerup", O),
              document.addEventListener("touchmove", O),
              document.addEventListener("touchstart", O),
              document.addEventListener("touchend", O);
          }
          function y() {
            document.removeEventListener("mousemove", O),
              document.removeEventListener("mousedown", O),
              document.removeEventListener("mouseup", O),
              document.removeEventListener("pointermove", O),
              document.removeEventListener("pointerdown", O),
              document.removeEventListener("pointerup", O),
              document.removeEventListener("touchmove", O),
              document.removeEventListener("touchstart", O),
              document.removeEventListener("touchend", O);
          }
          function O(A) {
            (A.target.nodeName && A.target.nodeName.toLowerCase() === "html") || ((r = !1), y());
          }
          document.addEventListener("keydown", p, !0),
            document.addEventListener("mousedown", d, !0),
            document.addEventListener("pointerdown", d, !0),
            document.addEventListener("touchstart", d, !0),
            document.addEventListener("visibilitychange", v, !0),
            b(),
            n.addEventListener("focus", E, !0),
            n.addEventListener("blur", _, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return {
          ready: t,
        };
      })
    );
  });
  var Aa = f((hF, Ta) => {
    "use strict";
    var Ia = Be();
    Ia.define(
      "focus",
      (Ta.exports = function () {
        var e = [],
          t = !1;
        function n(a) {
          t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a));
        }
        function r(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          r(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Ia.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", n, !0),
            document.addEventListener("click", n, !0));
        }
        return {
          ready: o,
        };
      })
    );
  });
  var Oa = f((EF, Sa) => {
    "use strict";
    var Br = window.jQuery,
      Fe = {},
      bn = [],
      ba = ".w-ix",
      Sn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro || ((t.__wf_intro = !0), Br(t).triggerHandler(Fe.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro && ((t.__wf_intro = null), Br(t).triggerHandler(Fe.types.OUTRO));
        },
      };
    Fe.triggers = {};
    Fe.types = {
      INTRO: "w-ix-intro" + ba,
      OUTRO: "w-ix-outro" + ba,
    };
    Fe.init = function () {
      for (var e = bn.length, t = 0; t < e; t++) {
        var n = bn[t];
        n[0](0, n[1]);
      }
      (bn = []), Br.extend(Fe.triggers, Sn);
    };
    Fe.async = function () {
      for (var e in Sn) {
        var t = Sn[e];
        Sn.hasOwnProperty(e) &&
          (Fe.triggers[e] = function (n, r) {
            bn.push([t, r]);
          });
      }
    };
    Fe.async();
    Sa.exports = Fe;
  });
  var Ca = f((yF, Ra) => {
    "use strict";
    var Hr = Oa();
    function xa(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var WE = window.jQuery,
      On = {},
      wa = ".w-ix",
      zE = {
        reset: function (e, t) {
          Hr.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Hr.triggers.intro(e, t), xa(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Hr.triggers.outro(e, t), xa(t, "COMPONENT_INACTIVE");
        },
      };
    On.triggers = {};
    On.types = {
      INTRO: "w-ix-intro" + wa,
      OUTRO: "w-ix-outro" + wa,
    };
    WE.extend(On.triggers, zE);
    Ra.exports = On;
  });
  var kr = f((mF, Pa) => {
    var KE = typeof global == "object" && global && global.Object === Object && global;
    Pa.exports = KE;
  });
  var Re = f((vF, La) => {
    var jE = kr(),
      YE = typeof self == "object" && self && self.Object === Object && self,
      $E = jE || YE || Function("return this")();
    La.exports = $E;
  });
  var pt = f((_F, Na) => {
    var QE = Re(),
      ZE = QE.Symbol;
    Na.exports = ZE;
  });
  var qa = f((IF, Fa) => {
    var Ma = pt(),
      Da = Object.prototype,
      JE = Da.hasOwnProperty,
      ey = Da.toString,
      Ht = Ma ? Ma.toStringTag : void 0;
    function ty(e) {
      var t = JE.call(e, Ht),
        n = e[Ht];
      try {
        e[Ht] = void 0;
        var r = !0;
      } catch {}
      var i = ey.call(e);
      return r && (t ? (e[Ht] = n) : delete e[Ht]), i;
    }
    Fa.exports = ty;
  });
  var Xa = f((TF, Ga) => {
    var ny = Object.prototype,
      ry = ny.toString;
    function iy(e) {
      return ry.call(e);
    }
    Ga.exports = iy;
  });
  var Qe = f((AF, Ba) => {
    var Va = pt(),
      oy = qa(),
      ay = Xa(),
      sy = "[object Null]",
      uy = "[object Undefined]",
      Ua = Va ? Va.toStringTag : void 0;
    function cy(e) {
      return e == null ? (e === void 0 ? uy : sy) : Ua && Ua in Object(e) ? oy(e) : ay(e);
    }
    Ba.exports = cy;
  });
  var Wr = f((bF, Ha) => {
    function ly(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    Ha.exports = ly;
  });
  var zr = f((SF, ka) => {
    var fy = Wr(),
      dy = fy(Object.getPrototypeOf, Object);
    ka.exports = dy;
  });
  var He = f((OF, Wa) => {
    function py(e) {
      return e != null && typeof e == "object";
    }
    Wa.exports = py;
  });
  var Kr = f((xF, Ka) => {
    var gy = Qe(),
      hy = zr(),
      Ey = He(),
      yy = "[object Object]",
      my = Function.prototype,
      vy = Object.prototype,
      za = my.toString,
      _y = vy.hasOwnProperty,
      Iy = za.call(Object);
    function Ty(e) {
      if (!Ey(e) || gy(e) != yy) return !1;
      var t = hy(e);
      if (t === null) return !0;
      var n = _y.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && za.call(n) == Iy;
    }
    Ka.exports = Ty;
  });
  var ja = f((jr) => {
    "use strict";
    Object.defineProperty(jr, "__esModule", {
      value: !0,
    });
    jr.default = Ay;
    function Ay(e) {
      var t,
        n = e.Symbol;
      return (
        typeof n == "function"
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Ya = f(($r, Yr) => {
    "use strict";
    Object.defineProperty($r, "__esModule", {
      value: !0,
    });
    var by = ja(),
      Sy = Oy(by);
    function Oy(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    var gt;
    typeof self < "u"
      ? (gt = self)
      : typeof window < "u"
        ? (gt = window)
        : typeof global < "u"
          ? (gt = global)
          : typeof Yr < "u"
            ? (gt = Yr)
            : (gt = Function("return this")());
    var xy = (0, Sy.default)(gt);
    $r.default = xy;
  });
  var Qr = f((kt) => {
    "use strict";
    kt.__esModule = !0;
    kt.ActionTypes = void 0;
    kt.default = Ja;
    var wy = Kr(),
      Ry = Za(wy),
      Cy = Ya(),
      $a = Za(Cy);
    function Za(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    var Qa = (kt.ActionTypes = {
      INIT: "@@redux/INIT",
    });
    function Ja(e, t, n) {
      var r;
      if ((typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)), typeof n < "u")) {
        if (typeof n != "function") throw new Error("Expected the enhancer to be a function.");
        return n(Ja)(e, t);
      }
      if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function l() {
        s === a && (s = a.slice());
      }
      function g() {
        return o;
      }
      function p(v) {
        if (typeof v != "function") throw new Error("Expected listener to be a function.");
        var b = !0;
        return (
          l(),
          s.push(v),
          function () {
            if (b) {
              (b = !1), l();
              var O = s.indexOf(v);
              s.splice(O, 1);
            }
          }
        );
      }
      function d(v) {
        if (!(0, Ry.default)(v))
          throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (typeof v.type > "u")
          throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, v));
        } finally {
          u = !1;
        }
        for (var b = (a = s), y = 0; y < b.length; y++) b[y]();
        return v;
      }
      function E(v) {
        if (typeof v != "function") throw new Error("Expected the nextReducer to be a function.");
        (i = v),
          d({
            type: Qa.INIT,
          });
      }
      function _() {
        var v,
          b = p;
        return (
          (v = {
            subscribe: function (O) {
              if (typeof O != "object") throw new TypeError("Expected the observer to be an object.");
              function A() {
                O.next && O.next(g());
              }
              A();
              var w = b(A);
              return {
                unsubscribe: w,
              };
            },
          }),
          (v[$a.default] = function () {
            return this;
          }),
          v
        );
      }
      return (
        d({
          type: Qa.INIT,
        }),
        (r = {
          dispatch: d,
          subscribe: p,
          getState: g,
          replaceReducer: E,
        }),
        (r[$a.default] = _),
        r
      );
    }
  });
  var Jr = f((Zr) => {
    "use strict";
    Zr.__esModule = !0;
    Zr.default = Py;
    function Py(e) {
      typeof console < "u" && typeof console.error == "function" && console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var ns = f((ei) => {
    "use strict";
    ei.__esModule = !0;
    ei.default = Fy;
    var es = Qr(),
      Ly = Kr(),
      PF = ts(Ly),
      Ny = Jr(),
      LF = ts(Ny);
    function ts(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    function My(e, t) {
      var n = t && t.type,
        r = (n && '"' + n.toString() + '"') || "an action";
      return (
        "Given action " +
        r +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Dy(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t],
          r = n(void 0, {
            type: es.ActionTypes.INIT,
          });
        if (typeof r > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
        if (
          typeof n(void 0, {
            type: i,
          }) > "u"
        )
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " + es.ActionTypes.INIT + ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function Fy(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        typeof e[i] == "function" && (n[i] = e[i]);
      }
      var o = Object.keys(n);
      if (!1) var a;
      var s;
      try {
        Dy(n);
      } catch (u) {
        s = u;
      }
      return function () {
        var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
          g = arguments[1];
        if (s) throw s;
        if (!1) var p;
        for (var d = !1, E = {}, _ = 0; _ < o.length; _++) {
          var v = o[_],
            b = n[v],
            y = l[v],
            O = b(y, g);
          if (typeof O > "u") {
            var A = My(v, g);
            throw new Error(A);
          }
          (E[v] = O), (d = d || O !== y);
        }
        return d ? E : l;
      };
    }
  });
  var is = f((ti) => {
    "use strict";
    ti.__esModule = !0;
    ti.default = qy;
    function rs(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function qy(e, t) {
      if (typeof e == "function") return rs(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
        var o = n[i],
          a = e[o];
        typeof a == "function" && (r[o] = rs(a, t));
      }
      return r;
    }
  });
  var ri = f((ni) => {
    "use strict";
    ni.__esModule = !0;
    ni.default = Gy;
    function Gy() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var r = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(
          function (o, a) {
            return a(o);
          },
          r.apply(void 0, arguments)
        );
      };
    }
  });
  var os = f((ii) => {
    "use strict";
    ii.__esModule = !0;
    var Xy =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    ii.default = Hy;
    var Vy = ri(),
      Uy = By(Vy);
    function By(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    function Hy() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return function (r) {
        return function (i, o, a) {
          var s = r(i, o, a),
            u = s.dispatch,
            l = [],
            g = {
              getState: s.getState,
              dispatch: function (d) {
                return u(d);
              },
            };
          return (
            (l = t.map(function (p) {
              return p(g);
            })),
            (u = Uy.default.apply(void 0, l)(s.dispatch)),
            Xy({}, s, {
              dispatch: u,
            })
          );
        };
      };
    }
  });
  var oi = f((Ae) => {
    "use strict";
    Ae.__esModule = !0;
    Ae.compose = Ae.applyMiddleware = Ae.bindActionCreators = Ae.combineReducers = Ae.createStore = void 0;
    var ky = Qr(),
      Wy = ht(ky),
      zy = ns(),
      Ky = ht(zy),
      jy = is(),
      Yy = ht(jy),
      $y = os(),
      Qy = ht($y),
      Zy = ri(),
      Jy = ht(Zy),
      em = Jr(),
      qF = ht(em);
    function ht(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    Ae.createStore = Wy.default;
    Ae.combineReducers = Ky.default;
    Ae.bindActionCreators = Yy.default;
    Ae.applyMiddleware = Qy.default;
    Ae.compose = Jy.default;
  });
  var Ce,
    ai,
    qe,
    tm,
    nm,
    xn,
    rm,
    si = ne(() => {
      "use strict";
      (Ce = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (ai = {
          ELEMENT: "ELEMENT",
          CLASS: "CLASS",
          PAGE: "PAGE",
        }),
        (qe = {
          ELEMENT: "ELEMENT",
          VIEWPORT: "VIEWPORT",
        }),
        (tm = {
          X_AXIS: "X_AXIS",
          Y_AXIS: "Y_AXIS",
        }),
        (nm = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (xn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (rm = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var pe,
    im,
    wn = ne(() => {
      "use strict";
      (pe = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (im = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var om,
    as = ne(() => {
      "use strict";
      om = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var am,
    sm,
    um,
    cm,
    lm,
    fm,
    dm,
    ui,
    ss = ne(() => {
      "use strict";
      wn();
      ({
        TRANSFORM_MOVE: am,
        TRANSFORM_SCALE: sm,
        TRANSFORM_ROTATE: um,
        TRANSFORM_SKEW: cm,
        STYLE_SIZE: lm,
        STYLE_FILTER: fm,
        STYLE_FONT_VARIATION: dm,
      } = pe),
        (ui = {
          [am]: !0,
          [sm]: !0,
          [um]: !0,
          [cm]: !0,
          [lm]: !0,
          [fm]: !0,
          [dm]: !0,
        });
    });
  var se = {};
  me(se, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Rm,
    IX2_ANIMATION_FRAME_CHANGED: () => Am,
    IX2_CLEAR_REQUESTED: () => _m,
    IX2_ELEMENT_STATE_CHANGED: () => wm,
    IX2_EVENT_LISTENER_ADDED: () => Im,
    IX2_EVENT_STATE_CHANGED: () => Tm,
    IX2_INSTANCE_ADDED: () => Sm,
    IX2_INSTANCE_REMOVED: () => xm,
    IX2_INSTANCE_STARTED: () => Om,
    IX2_MEDIA_QUERIES_DEFINED: () => Pm,
    IX2_PARAMETER_CHANGED: () => bm,
    IX2_PLAYBACK_REQUESTED: () => mm,
    IX2_PREVIEW_REQUESTED: () => ym,
    IX2_RAW_DATA_IMPORTED: () => pm,
    IX2_SESSION_INITIALIZED: () => gm,
    IX2_SESSION_STARTED: () => hm,
    IX2_SESSION_STOPPED: () => Em,
    IX2_STOP_REQUESTED: () => vm,
    IX2_TEST_FRAME_RENDERED: () => Lm,
    IX2_VIEWPORT_WIDTH_CHANGED: () => Cm,
  });
  var pm,
    gm,
    hm,
    Em,
    ym,
    mm,
    vm,
    _m,
    Im,
    Tm,
    Am,
    bm,
    Sm,
    Om,
    xm,
    wm,
    Rm,
    Cm,
    Pm,
    Lm,
    us = ne(() => {
      "use strict";
      (pm = "IX2_RAW_DATA_IMPORTED"),
        (gm = "IX2_SESSION_INITIALIZED"),
        (hm = "IX2_SESSION_STARTED"),
        (Em = "IX2_SESSION_STOPPED"),
        (ym = "IX2_PREVIEW_REQUESTED"),
        (mm = "IX2_PLAYBACK_REQUESTED"),
        (vm = "IX2_STOP_REQUESTED"),
        (_m = "IX2_CLEAR_REQUESTED"),
        (Im = "IX2_EVENT_LISTENER_ADDED"),
        (Tm = "IX2_EVENT_STATE_CHANGED"),
        (Am = "IX2_ANIMATION_FRAME_CHANGED"),
        (bm = "IX2_PARAMETER_CHANGED"),
        (Sm = "IX2_INSTANCE_ADDED"),
        (Om = "IX2_INSTANCE_STARTED"),
        (xm = "IX2_INSTANCE_REMOVED"),
        (wm = "IX2_ELEMENT_STATE_CHANGED"),
        (Rm = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (Cm = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (Pm = "IX2_MEDIA_QUERIES_DEFINED"),
        (Lm = "IX2_TEST_FRAME_RENDERED");
    });
  var ce = {};
  me(ce, {
    ABSTRACT_NODE: () => Cv,
    AUTO: () => vv,
    BACKGROUND: () => pv,
    BACKGROUND_COLOR: () => dv,
    BAR_DELIMITER: () => Tv,
    BORDER_COLOR: () => gv,
    BOUNDARY_SELECTOR: () => qm,
    CHILDREN: () => Av,
    COLON_DELIMITER: () => Iv,
    COLOR: () => hv,
    COMMA_DELIMITER: () => _v,
    CONFIG_UNIT: () => Wm,
    CONFIG_VALUE: () => Um,
    CONFIG_X_UNIT: () => Bm,
    CONFIG_X_VALUE: () => Gm,
    CONFIG_Y_UNIT: () => Hm,
    CONFIG_Y_VALUE: () => Xm,
    CONFIG_Z_UNIT: () => km,
    CONFIG_Z_VALUE: () => Vm,
    DISPLAY: () => Ev,
    FILTER: () => uv,
    FLEX: () => yv,
    FONT_VARIATION_SETTINGS: () => cv,
    HEIGHT: () => fv,
    HTML_ELEMENT: () => wv,
    IMMEDIATE_CHILDREN: () => bv,
    IX2_ID_DELIMITER: () => Nm,
    OPACITY: () => sv,
    PARENT: () => Ov,
    PLAIN_OBJECT: () => Rv,
    PRESERVE_3D: () => xv,
    RENDER_GENERAL: () => Lv,
    RENDER_PLUGIN: () => Mv,
    RENDER_STYLE: () => Nv,
    RENDER_TRANSFORM: () => Pv,
    ROTATE_X: () => tv,
    ROTATE_Y: () => nv,
    ROTATE_Z: () => rv,
    SCALE_3D: () => ev,
    SCALE_X: () => Qm,
    SCALE_Y: () => Zm,
    SCALE_Z: () => Jm,
    SIBLINGS: () => Sv,
    SKEW: () => iv,
    SKEW_X: () => ov,
    SKEW_Y: () => av,
    TRANSFORM: () => zm,
    TRANSLATE_3D: () => $m,
    TRANSLATE_X: () => Km,
    TRANSLATE_Y: () => jm,
    TRANSLATE_Z: () => Ym,
    WF_PAGE: () => Mm,
    WIDTH: () => lv,
    WILL_CHANGE: () => mv,
    W_MOD_IX: () => Fm,
    W_MOD_JS: () => Dm,
  });
  var Nm,
    Mm,
    Dm,
    Fm,
    qm,
    Gm,
    Xm,
    Vm,
    Um,
    Bm,
    Hm,
    km,
    Wm,
    zm,
    Km,
    jm,
    Ym,
    $m,
    Qm,
    Zm,
    Jm,
    ev,
    tv,
    nv,
    rv,
    iv,
    ov,
    av,
    sv,
    uv,
    cv,
    lv,
    fv,
    dv,
    pv,
    gv,
    hv,
    Ev,
    yv,
    mv,
    vv,
    _v,
    Iv,
    Tv,
    Av,
    bv,
    Sv,
    Ov,
    xv,
    wv,
    Rv,
    Cv,
    Pv,
    Lv,
    Nv,
    Mv,
    cs = ne(() => {
      "use strict";
      (Nm = "|"),
        (Mm = "data-wf-page"),
        (Dm = "w-mod-js"),
        (Fm = "w-mod-ix"),
        (qm = ".w-dyn-item"),
        (Gm = "xValue"),
        (Xm = "yValue"),
        (Vm = "zValue"),
        (Um = "value"),
        (Bm = "xUnit"),
        (Hm = "yUnit"),
        (km = "zUnit"),
        (Wm = "unit"),
        (zm = "transform"),
        (Km = "translateX"),
        (jm = "translateY"),
        (Ym = "translateZ"),
        ($m = "translate3d"),
        (Qm = "scaleX"),
        (Zm = "scaleY"),
        (Jm = "scaleZ"),
        (ev = "scale3d"),
        (tv = "rotateX"),
        (nv = "rotateY"),
        (rv = "rotateZ"),
        (iv = "skew"),
        (ov = "skewX"),
        (av = "skewY"),
        (sv = "opacity"),
        (uv = "filter"),
        (cv = "font-variation-settings"),
        (lv = "width"),
        (fv = "height"),
        (dv = "backgroundColor"),
        (pv = "background"),
        (gv = "borderColor"),
        (hv = "color"),
        (Ev = "display"),
        (yv = "flex"),
        (mv = "willChange"),
        (vv = "AUTO"),
        (_v = ","),
        (Iv = ":"),
        (Tv = "|"),
        (Av = "CHILDREN"),
        (bv = "IMMEDIATE_CHILDREN"),
        (Sv = "SIBLINGS"),
        (Ov = "PARENT"),
        (xv = "preserve-3d"),
        (wv = "HTML_ELEMENT"),
        (Rv = "PLAIN_OBJECT"),
        (Cv = "ABSTRACT_NODE"),
        (Pv = "RENDER_TRANSFORM"),
        (Lv = "RENDER_GENERAL"),
        (Nv = "RENDER_STYLE"),
        (Mv = "RENDER_PLUGIN");
    });
  var ls = {};
  me(ls, {
    ActionAppliesTo: () => im,
    ActionTypeConsts: () => pe,
    EventAppliesTo: () => ai,
    EventBasedOn: () => qe,
    EventContinuousMouseAxes: () => tm,
    EventLimitAffectedElements: () => nm,
    EventTypeConsts: () => Ce,
    IX2EngineActionTypes: () => se,
    IX2EngineConstants: () => ce,
    InteractionTypeConsts: () => om,
    QuickEffectDirectionConsts: () => rm,
    QuickEffectIds: () => xn,
    ReducedMotionTypes: () => ui,
  });
  var ve = ne(() => {
    "use strict";
    si();
    wn();
    as();
    ss();
    us();
    cs();
    wn();
    si();
  });
  var Dv,
    fs,
    ds = ne(() => {
      "use strict";
      ve();
      ({ IX2_RAW_DATA_IMPORTED: Dv } = se),
        (fs = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case Dv:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Et = f((ie) => {
    "use strict";
    Object.defineProperty(ie, "__esModule", {
      value: !0,
    });
    var Fv =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ie.clone = Cn;
    ie.addLast = hs;
    ie.addFirst = Es;
    ie.removeLast = ys;
    ie.removeFirst = ms;
    ie.insert = vs;
    ie.removeAt = _s;
    ie.replaceAt = Is;
    ie.getIn = Pn;
    ie.set = Ln;
    ie.setIn = Nn;
    ie.update = As;
    ie.updateIn = bs;
    ie.merge = Ss;
    ie.mergeDeep = Os;
    ie.mergeIn = xs;
    ie.omit = ws;
    ie.addDefaults = Rs;
    var ps = "INVALID_ARGS";
    function gs(e) {
      throw new Error(e);
    }
    function ci(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t;
    }
    var qv = {}.hasOwnProperty;
    function Cn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = ci(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        n[i] = e[i];
      }
      return n;
    }
    function _e(e, t, n) {
      var r = n;
      r == null && gs(ps);
      for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var l = a[u];
        if (l != null) {
          var g = ci(l);
          if (g.length)
            for (var p = 0; p <= g.length; p++) {
              var d = g[p];
              if (!(e && r[d] !== void 0)) {
                var E = l[d];
                t && Rn(r[d]) && Rn(E) && (E = _e(e, t, r[d], E)),
                  !(E === void 0 || E === r[d]) && (i || ((i = !0), (r = Cn(r))), (r[d] = E));
              }
            }
        }
      }
      return r;
    }
    function Rn(e) {
      var t = typeof e > "u" ? "undefined" : Fv(e);
      return e != null && (t === "object" || t === "function");
    }
    function hs(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Es(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function ys(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function ms(e) {
      return e.length ? e.slice(1) : e;
    }
    function vs(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function _s(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Is(e, t, n) {
      if (e[t] === n) return e;
      for (var r = e.length, i = Array(r), o = 0; o < r; o++) i[o] = e[o];
      return (i[t] = n), i;
    }
    function Pn(e, t) {
      if ((!Array.isArray(t) && gs(ps), e != null)) {
        for (var n = e, r = 0; r < t.length; r++) {
          var i = t[r];
          if (((n = n?.[i]), n === void 0)) return n;
        }
        return n;
      }
    }
    function Ln(e, t, n) {
      var r = typeof t == "number" ? [] : {},
        i = e ?? r;
      if (i[t] === n) return i;
      var o = Cn(i);
      return (o[t] = n), o;
    }
    function Ts(e, t, n, r) {
      var i = void 0,
        o = t[r];
      if (r === t.length - 1) i = n;
      else {
        var a = Rn(e) && Rn(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
        i = Ts(a, t, n, r + 1);
      }
      return Ln(e, o, i);
    }
    function Nn(e, t, n) {
      return t.length ? Ts(e, t, n, 0) : n;
    }
    function As(e, t, n) {
      var r = e?.[t],
        i = n(r);
      return Ln(e, t, i);
    }
    function bs(e, t, n) {
      var r = Pn(e, t),
        i = n(r);
      return Nn(e, t, i);
    }
    function Ss(e, t, n, r, i, o) {
      for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
      return s.length ? _e.call.apply(_e, [null, !1, !1, e, t, n, r, i, o].concat(s)) : _e(!1, !1, e, t, n, r, i, o);
    }
    function Os(e, t, n, r, i, o) {
      for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
      return s.length ? _e.call.apply(_e, [null, !1, !0, e, t, n, r, i, o].concat(s)) : _e(!1, !0, e, t, n, r, i, o);
    }
    function xs(e, t, n, r, i, o, a) {
      var s = Pn(e, t);
      s == null && (s = {});
      for (var u = void 0, l = arguments.length, g = Array(l > 7 ? l - 7 : 0), p = 7; p < l; p++)
        g[p - 7] = arguments[p];
      return (
        g.length
          ? (u = _e.call.apply(_e, [null, !1, !1, s, n, r, i, o, a].concat(g)))
          : (u = _e(!1, !1, s, n, r, i, o, a)),
        Nn(e, t, u)
      );
    }
    function ws(e, t) {
      for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
        if (qv.call(e, n[i])) {
          r = !0;
          break;
        }
      if (!r) return e;
      for (var o = {}, a = ci(e), s = 0; s < a.length; s++) {
        var u = a[s];
        n.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Rs(e, t, n, r, i, o) {
      for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
      return s.length ? _e.call.apply(_e, [null, !0, !1, e, t, n, r, i, o].concat(s)) : _e(!0, !1, e, t, n, r, i, o);
    }
    var Gv = {
      clone: Cn,
      addLast: hs,
      addFirst: Es,
      removeLast: ys,
      removeFirst: ms,
      insert: vs,
      removeAt: _s,
      replaceAt: Is,
      getIn: Pn,
      set: Ln,
      setIn: Nn,
      update: As,
      updateIn: bs,
      merge: Ss,
      mergeDeep: Os,
      mergeIn: xs,
      omit: ws,
      addDefaults: Rs,
    };
    ie.default = Gv;
  });
  var Ps,
    Xv,
    Vv,
    Uv,
    Bv,
    Hv,
    Cs,
    Ls,
    Ns = ne(() => {
      "use strict";
      ve();
      (Ps = $(Et())),
        ({
          IX2_PREVIEW_REQUESTED: Xv,
          IX2_PLAYBACK_REQUESTED: Vv,
          IX2_STOP_REQUESTED: Uv,
          IX2_CLEAR_REQUESTED: Bv,
        } = se),
        (Hv = {
          preview: {},
          playback: {},
          stop: {},
          clear: {},
        }),
        (Cs = Object.create(null, {
          [Xv]: {
            value: "preview",
          },
          [Vv]: {
            value: "playback",
          },
          [Uv]: {
            value: "stop",
          },
          [Bv]: {
            value: "clear",
          },
        })),
        (Ls = (e = Hv, t) => {
          if (t.type in Cs) {
            let n = [Cs[t.type]];
            return (0, Ps.setIn)(e, [n], {
              ...t.payload,
            });
          }
          return e;
        });
    });
  var ge,
    kv,
    Wv,
    zv,
    Kv,
    jv,
    Yv,
    $v,
    Qv,
    Zv,
    Jv,
    Ms,
    e_,
    Ds,
    Fs = ne(() => {
      "use strict";
      ve();
      (ge = $(Et())),
        ({
          IX2_SESSION_INITIALIZED: kv,
          IX2_SESSION_STARTED: Wv,
          IX2_TEST_FRAME_RENDERED: zv,
          IX2_SESSION_STOPPED: Kv,
          IX2_EVENT_LISTENER_ADDED: jv,
          IX2_EVENT_STATE_CHANGED: Yv,
          IX2_ANIMATION_FRAME_CHANGED: $v,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Qv,
          IX2_VIEWPORT_WIDTH_CHANGED: Zv,
          IX2_MEDIA_QUERIES_DEFINED: Jv,
        } = se),
        (Ms = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (e_ = 20),
        (Ds = (e = Ms, t) => {
          switch (t.type) {
            case kv: {
              let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
              return (0, ge.merge)(e, {
                hasBoundaryNodes: n,
                reducedMotion: r,
              });
            }
            case Wv:
              return (0, ge.set)(e, "active", !0);
            case zv: {
              let {
                payload: { step: n = e_ },
              } = t;
              return (0, ge.set)(e, "tick", e.tick + n);
            }
            case Kv:
              return Ms;
            case $v: {
              let {
                payload: { now: n },
              } = t;
              return (0, ge.set)(e, "tick", n);
            }
            case jv: {
              let n = (0, ge.addLast)(e.eventListeners, t.payload);
              return (0, ge.set)(e, "eventListeners", n);
            }
            case Yv: {
              let { stateKey: n, newState: r } = t.payload;
              return (0, ge.setIn)(e, ["eventState", n], r);
            }
            case Qv: {
              let { actionListId: n, isPlaying: r } = t.payload;
              return (0, ge.setIn)(e, ["playbackState", n], r);
            }
            case Zv: {
              let { width: n, mediaQueries: r } = t.payload,
                i = r.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: l } = r[a];
                if (n >= u && n <= l) {
                  o = s;
                  break;
                }
              }
              return (0, ge.merge)(e, {
                viewportWidth: n,
                mediaQueryKey: o,
              });
            }
            case Jv:
              return (0, ge.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Gs = f((r2, qs) => {
    function t_() {
      (this.__data__ = []), (this.size = 0);
    }
    qs.exports = t_;
  });
  var Mn = f((i2, Xs) => {
    function n_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Xs.exports = n_;
  });
  var Wt = f((o2, Vs) => {
    var r_ = Mn();
    function i_(e, t) {
      for (var n = e.length; n--; ) if (r_(e[n][0], t)) return n;
      return -1;
    }
    Vs.exports = i_;
  });
  var Bs = f((a2, Us) => {
    var o_ = Wt(),
      a_ = Array.prototype,
      s_ = a_.splice;
    function u_(e) {
      var t = this.__data__,
        n = o_(t, e);
      if (n < 0) return !1;
      var r = t.length - 1;
      return n == r ? t.pop() : s_.call(t, n, 1), --this.size, !0;
    }
    Us.exports = u_;
  });
  var ks = f((s2, Hs) => {
    var c_ = Wt();
    function l_(e) {
      var t = this.__data__,
        n = c_(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    Hs.exports = l_;
  });
  var zs = f((u2, Ws) => {
    var f_ = Wt();
    function d_(e) {
      return f_(this.__data__, e) > -1;
    }
    Ws.exports = d_;
  });
  var js = f((c2, Ks) => {
    var p_ = Wt();
    function g_(e, t) {
      var n = this.__data__,
        r = p_(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
    }
    Ks.exports = g_;
  });
  var zt = f((l2, Ys) => {
    var h_ = Gs(),
      E_ = Bs(),
      y_ = ks(),
      m_ = zs(),
      v_ = js();
    function yt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    yt.prototype.clear = h_;
    yt.prototype.delete = E_;
    yt.prototype.get = y_;
    yt.prototype.has = m_;
    yt.prototype.set = v_;
    Ys.exports = yt;
  });
  var Qs = f((f2, $s) => {
    var __ = zt();
    function I_() {
      (this.__data__ = new __()), (this.size = 0);
    }
    $s.exports = I_;
  });
  var Js = f((d2, Zs) => {
    function T_(e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    }
    Zs.exports = T_;
  });
  var tu = f((p2, eu) => {
    function A_(e) {
      return this.__data__.get(e);
    }
    eu.exports = A_;
  });
  var ru = f((g2, nu) => {
    function b_(e) {
      return this.__data__.has(e);
    }
    nu.exports = b_;
  });
  var Ge = f((h2, iu) => {
    function S_(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    iu.exports = S_;
  });
  var li = f((E2, ou) => {
    var O_ = Qe(),
      x_ = Ge(),
      w_ = "[object AsyncFunction]",
      R_ = "[object Function]",
      C_ = "[object GeneratorFunction]",
      P_ = "[object Proxy]";
    function L_(e) {
      if (!x_(e)) return !1;
      var t = O_(e);
      return t == R_ || t == C_ || t == w_ || t == P_;
    }
    ou.exports = L_;
  });
  var su = f((y2, au) => {
    var N_ = Re(),
      M_ = N_["__core-js_shared__"];
    au.exports = M_;
  });
  var lu = f((m2, cu) => {
    var fi = su(),
      uu = (function () {
        var e = /[^.]+$/.exec((fi && fi.keys && fi.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function D_(e) {
      return !!uu && uu in e;
    }
    cu.exports = D_;
  });
  var di = f((v2, fu) => {
    var F_ = Function.prototype,
      q_ = F_.toString;
    function G_(e) {
      if (e != null) {
        try {
          return q_.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    fu.exports = G_;
  });
  var pu = f((_2, du) => {
    var X_ = li(),
      V_ = lu(),
      U_ = Ge(),
      B_ = di(),
      H_ = /[\\^$.*+?()[\]{}|]/g,
      k_ = /^\[object .+?Constructor\]$/,
      W_ = Function.prototype,
      z_ = Object.prototype,
      K_ = W_.toString,
      j_ = z_.hasOwnProperty,
      Y_ = RegExp(
        "^" +
          K_.call(j_)
            .replace(H_, "\\$&")
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
          "$"
      );
    function $_(e) {
      if (!U_(e) || V_(e)) return !1;
      var t = X_(e) ? Y_ : k_;
      return t.test(B_(e));
    }
    du.exports = $_;
  });
  var hu = f((I2, gu) => {
    function Q_(e, t) {
      return e?.[t];
    }
    gu.exports = Q_;
  });
  var Ze = f((T2, Eu) => {
    var Z_ = pu(),
      J_ = hu();
    function eI(e, t) {
      var n = J_(e, t);
      return Z_(n) ? n : void 0;
    }
    Eu.exports = eI;
  });
  var Dn = f((A2, yu) => {
    var tI = Ze(),
      nI = Re(),
      rI = tI(nI, "Map");
    yu.exports = rI;
  });
  var Kt = f((b2, mu) => {
    var iI = Ze(),
      oI = iI(Object, "create");
    mu.exports = oI;
  });
  var Iu = f((S2, _u) => {
    var vu = Kt();
    function aI() {
      (this.__data__ = vu ? vu(null) : {}), (this.size = 0);
    }
    _u.exports = aI;
  });
  var Au = f((O2, Tu) => {
    function sI(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Tu.exports = sI;
  });
  var Su = f((x2, bu) => {
    var uI = Kt(),
      cI = "__lodash_hash_undefined__",
      lI = Object.prototype,
      fI = lI.hasOwnProperty;
    function dI(e) {
      var t = this.__data__;
      if (uI) {
        var n = t[e];
        return n === cI ? void 0 : n;
      }
      return fI.call(t, e) ? t[e] : void 0;
    }
    bu.exports = dI;
  });
  var xu = f((w2, Ou) => {
    var pI = Kt(),
      gI = Object.prototype,
      hI = gI.hasOwnProperty;
    function EI(e) {
      var t = this.__data__;
      return pI ? t[e] !== void 0 : hI.call(t, e);
    }
    Ou.exports = EI;
  });
  var Ru = f((R2, wu) => {
    var yI = Kt(),
      mI = "__lodash_hash_undefined__";
    function vI(e, t) {
      var n = this.__data__;
      return (this.size += this.has(e) ? 0 : 1), (n[e] = yI && t === void 0 ? mI : t), this;
    }
    wu.exports = vI;
  });
  var Pu = f((C2, Cu) => {
    var _I = Iu(),
      II = Au(),
      TI = Su(),
      AI = xu(),
      bI = Ru();
    function mt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    mt.prototype.clear = _I;
    mt.prototype.delete = II;
    mt.prototype.get = TI;
    mt.prototype.has = AI;
    mt.prototype.set = bI;
    Cu.exports = mt;
  });
  var Mu = f((P2, Nu) => {
    var Lu = Pu(),
      SI = zt(),
      OI = Dn();
    function xI() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Lu(),
          map: new (OI || SI)(),
          string: new Lu(),
        });
    }
    Nu.exports = xI;
  });
  var Fu = f((L2, Du) => {
    function wI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
    }
    Du.exports = wI;
  });
  var jt = f((N2, qu) => {
    var RI = Fu();
    function CI(e, t) {
      var n = e.__data__;
      return RI(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    qu.exports = CI;
  });
  var Xu = f((M2, Gu) => {
    var PI = jt();
    function LI(e) {
      var t = PI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Gu.exports = LI;
  });
  var Uu = f((D2, Vu) => {
    var NI = jt();
    function MI(e) {
      return NI(this, e).get(e);
    }
    Vu.exports = MI;
  });
  var Hu = f((F2, Bu) => {
    var DI = jt();
    function FI(e) {
      return DI(this, e).has(e);
    }
    Bu.exports = FI;
  });
  var Wu = f((q2, ku) => {
    var qI = jt();
    function GI(e, t) {
      var n = qI(this, e),
        r = n.size;
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
    }
    ku.exports = GI;
  });
  var Fn = f((G2, zu) => {
    var XI = Mu(),
      VI = Xu(),
      UI = Uu(),
      BI = Hu(),
      HI = Wu();
    function vt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    vt.prototype.clear = XI;
    vt.prototype.delete = VI;
    vt.prototype.get = UI;
    vt.prototype.has = BI;
    vt.prototype.set = HI;
    zu.exports = vt;
  });
  var ju = f((X2, Ku) => {
    var kI = zt(),
      WI = Dn(),
      zI = Fn(),
      KI = 200;
    function jI(e, t) {
      var n = this.__data__;
      if (n instanceof kI) {
        var r = n.__data__;
        if (!WI || r.length < KI - 1) return r.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new zI(r);
      }
      return n.set(e, t), (this.size = n.size), this;
    }
    Ku.exports = jI;
  });
  var pi = f((V2, Yu) => {
    var YI = zt(),
      $I = Qs(),
      QI = Js(),
      ZI = tu(),
      JI = ru(),
      eT = ju();
    function _t(e) {
      var t = (this.__data__ = new YI(e));
      this.size = t.size;
    }
    _t.prototype.clear = $I;
    _t.prototype.delete = QI;
    _t.prototype.get = ZI;
    _t.prototype.has = JI;
    _t.prototype.set = eT;
    Yu.exports = _t;
  });
  var Qu = f((U2, $u) => {
    var tT = "__lodash_hash_undefined__";
    function nT(e) {
      return this.__data__.set(e, tT), this;
    }
    $u.exports = nT;
  });
  var Ju = f((B2, Zu) => {
    function rT(e) {
      return this.__data__.has(e);
    }
    Zu.exports = rT;
  });
  var tc = f((H2, ec) => {
    var iT = Fn(),
      oT = Qu(),
      aT = Ju();
    function qn(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.__data__ = new iT(); ++t < n; ) this.add(e[t]);
    }
    qn.prototype.add = qn.prototype.push = oT;
    qn.prototype.has = aT;
    ec.exports = qn;
  });
  var rc = f((k2, nc) => {
    function sT(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
      return !1;
    }
    nc.exports = sT;
  });
  var oc = f((W2, ic) => {
    function uT(e, t) {
      return e.has(t);
    }
    ic.exports = uT;
  });
  var gi = f((z2, ac) => {
    var cT = tc(),
      lT = rc(),
      fT = oc(),
      dT = 1,
      pT = 2;
    function gT(e, t, n, r, i, o) {
      var a = n & dT,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var l = o.get(e),
        g = o.get(t);
      if (l && g) return l == t && g == e;
      var p = -1,
        d = !0,
        E = n & pT ? new cT() : void 0;
      for (o.set(e, t), o.set(t, e); ++p < s; ) {
        var _ = e[p],
          v = t[p];
        if (r) var b = a ? r(v, _, p, t, e, o) : r(_, v, p, e, t, o);
        if (b !== void 0) {
          if (b) continue;
          d = !1;
          break;
        }
        if (E) {
          if (
            !lT(t, function (y, O) {
              if (!fT(E, O) && (_ === y || i(_, y, n, r, o))) return E.push(O);
            })
          ) {
            d = !1;
            break;
          }
        } else if (!(_ === v || i(_, v, n, r, o))) {
          d = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), d;
    }
    ac.exports = gT;
  });
  var uc = f((K2, sc) => {
    var hT = Re(),
      ET = hT.Uint8Array;
    sc.exports = ET;
  });
  var lc = f((j2, cc) => {
    function yT(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r, i) {
          n[++t] = [i, r];
        }),
        n
      );
    }
    cc.exports = yT;
  });
  var dc = f((Y2, fc) => {
    function mT(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r) {
          n[++t] = r;
        }),
        n
      );
    }
    fc.exports = mT;
  });
  var yc = f(($2, Ec) => {
    var pc = pt(),
      gc = uc(),
      vT = Mn(),
      _T = gi(),
      IT = lc(),
      TT = dc(),
      AT = 1,
      bT = 2,
      ST = "[object Boolean]",
      OT = "[object Date]",
      xT = "[object Error]",
      wT = "[object Map]",
      RT = "[object Number]",
      CT = "[object RegExp]",
      PT = "[object Set]",
      LT = "[object String]",
      NT = "[object Symbol]",
      MT = "[object ArrayBuffer]",
      DT = "[object DataView]",
      hc = pc ? pc.prototype : void 0,
      hi = hc ? hc.valueOf : void 0;
    function FT(e, t, n, r, i, o, a) {
      switch (n) {
        case DT:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
          (e = e.buffer), (t = t.buffer);
        case MT:
          return !(e.byteLength != t.byteLength || !o(new gc(e), new gc(t)));
        case ST:
        case OT:
        case RT:
          return vT(+e, +t);
        case xT:
          return e.name == t.name && e.message == t.message;
        case CT:
        case LT:
          return e == t + "";
        case wT:
          var s = IT;
        case PT:
          var u = r & AT;
          if ((s || (s = TT), e.size != t.size && !u)) return !1;
          var l = a.get(e);
          if (l) return l == t;
          (r |= bT), a.set(e, t);
          var g = _T(s(e), s(t), r, i, o, a);
          return a.delete(e), g;
        case NT:
          if (hi) return hi.call(e) == hi.call(t);
      }
      return !1;
    }
    Ec.exports = FT;
  });
  var Gn = f((Q2, mc) => {
    function qT(e, t) {
      for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
      return e;
    }
    mc.exports = qT;
  });
  var ue = f((Z2, vc) => {
    var GT = Array.isArray;
    vc.exports = GT;
  });
  var Ei = f((J2, _c) => {
    var XT = Gn(),
      VT = ue();
    function UT(e, t, n) {
      var r = t(e);
      return VT(e) ? r : XT(r, n(e));
    }
    _c.exports = UT;
  });
  var Tc = f((eq, Ic) => {
    function BT(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
        var a = e[n];
        t(a, n, e) && (o[i++] = a);
      }
      return o;
    }
    Ic.exports = BT;
  });
  var yi = f((tq, Ac) => {
    function HT() {
      return [];
    }
    Ac.exports = HT;
  });
  var mi = f((nq, Sc) => {
    var kT = Tc(),
      WT = yi(),
      zT = Object.prototype,
      KT = zT.propertyIsEnumerable,
      bc = Object.getOwnPropertySymbols,
      jT = bc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                kT(bc(e), function (t) {
                  return KT.call(e, t);
                }));
          }
        : WT;
    Sc.exports = jT;
  });
  var xc = f((rq, Oc) => {
    function YT(e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    }
    Oc.exports = YT;
  });
  var Rc = f((iq, wc) => {
    var $T = Qe(),
      QT = He(),
      ZT = "[object Arguments]";
    function JT(e) {
      return QT(e) && $T(e) == ZT;
    }
    wc.exports = JT;
  });
  var Yt = f((oq, Lc) => {
    var Cc = Rc(),
      eA = He(),
      Pc = Object.prototype,
      tA = Pc.hasOwnProperty,
      nA = Pc.propertyIsEnumerable,
      rA = Cc(
        (function () {
          return arguments;
        })()
      )
        ? Cc
        : function (e) {
            return eA(e) && tA.call(e, "callee") && !nA.call(e, "callee");
          };
    Lc.exports = rA;
  });
  var Mc = f((aq, Nc) => {
    function iA() {
      return !1;
    }
    Nc.exports = iA;
  });
  var Xn = f(($t, It) => {
    var oA = Re(),
      aA = Mc(),
      qc = typeof $t == "object" && $t && !$t.nodeType && $t,
      Dc = qc && typeof It == "object" && It && !It.nodeType && It,
      sA = Dc && Dc.exports === qc,
      Fc = sA ? oA.Buffer : void 0,
      uA = Fc ? Fc.isBuffer : void 0,
      cA = uA || aA;
    It.exports = cA;
  });
  var Vn = f((sq, Gc) => {
    var lA = 9007199254740991,
      fA = /^(?:0|[1-9]\d*)$/;
    function dA(e, t) {
      var n = typeof e;
      return (t = t ?? lA), !!t && (n == "number" || (n != "symbol" && fA.test(e))) && e > -1 && e % 1 == 0 && e < t;
    }
    Gc.exports = dA;
  });
  var Un = f((uq, Xc) => {
    var pA = 9007199254740991;
    function gA(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pA;
    }
    Xc.exports = gA;
  });
  var Uc = f((cq, Vc) => {
    var hA = Qe(),
      EA = Un(),
      yA = He(),
      mA = "[object Arguments]",
      vA = "[object Array]",
      _A = "[object Boolean]",
      IA = "[object Date]",
      TA = "[object Error]",
      AA = "[object Function]",
      bA = "[object Map]",
      SA = "[object Number]",
      OA = "[object Object]",
      xA = "[object RegExp]",
      wA = "[object Set]",
      RA = "[object String]",
      CA = "[object WeakMap]",
      PA = "[object ArrayBuffer]",
      LA = "[object DataView]",
      NA = "[object Float32Array]",
      MA = "[object Float64Array]",
      DA = "[object Int8Array]",
      FA = "[object Int16Array]",
      qA = "[object Int32Array]",
      GA = "[object Uint8Array]",
      XA = "[object Uint8ClampedArray]",
      VA = "[object Uint16Array]",
      UA = "[object Uint32Array]",
      ee = {};
    ee[NA] = ee[MA] = ee[DA] = ee[FA] = ee[qA] = ee[GA] = ee[XA] = ee[VA] = ee[UA] = !0;
    ee[mA] =
      ee[vA] =
      ee[PA] =
      ee[_A] =
      ee[LA] =
      ee[IA] =
      ee[TA] =
      ee[AA] =
      ee[bA] =
      ee[SA] =
      ee[OA] =
      ee[xA] =
      ee[wA] =
      ee[RA] =
      ee[CA] =
        !1;
    function BA(e) {
      return yA(e) && EA(e.length) && !!ee[hA(e)];
    }
    Vc.exports = BA;
  });
  var Hc = f((lq, Bc) => {
    function HA(e) {
      return function (t) {
        return e(t);
      };
    }
    Bc.exports = HA;
  });
  var Wc = f((Qt, Tt) => {
    var kA = kr(),
      kc = typeof Qt == "object" && Qt && !Qt.nodeType && Qt,
      Zt = kc && typeof Tt == "object" && Tt && !Tt.nodeType && Tt,
      WA = Zt && Zt.exports === kc,
      vi = WA && kA.process,
      zA = (function () {
        try {
          var e = Zt && Zt.require && Zt.require("util").types;
          return e || (vi && vi.binding && vi.binding("util"));
        } catch {}
      })();
    Tt.exports = zA;
  });
  var Bn = f((fq, jc) => {
    var KA = Uc(),
      jA = Hc(),
      zc = Wc(),
      Kc = zc && zc.isTypedArray,
      YA = Kc ? jA(Kc) : KA;
    jc.exports = YA;
  });
  var _i = f((dq, Yc) => {
    var $A = xc(),
      QA = Yt(),
      ZA = ue(),
      JA = Xn(),
      eb = Vn(),
      tb = Bn(),
      nb = Object.prototype,
      rb = nb.hasOwnProperty;
    function ib(e, t) {
      var n = ZA(e),
        r = !n && QA(e),
        i = !n && !r && JA(e),
        o = !n && !r && !i && tb(e),
        a = n || r || i || o,
        s = a ? $A(e.length, String) : [],
        u = s.length;
      for (var l in e)
        (t || rb.call(e, l)) &&
          !(
            a &&
            (l == "length" ||
              (i && (l == "offset" || l == "parent")) ||
              (o && (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
              eb(l, u))
          ) &&
          s.push(l);
      return s;
    }
    Yc.exports = ib;
  });
  var Hn = f((pq, $c) => {
    var ob = Object.prototype;
    function ab(e) {
      var t = e && e.constructor,
        n = (typeof t == "function" && t.prototype) || ob;
      return e === n;
    }
    $c.exports = ab;
  });
  var Zc = f((gq, Qc) => {
    var sb = Wr(),
      ub = sb(Object.keys, Object);
    Qc.exports = ub;
  });
  var kn = f((hq, Jc) => {
    var cb = Hn(),
      lb = Zc(),
      fb = Object.prototype,
      db = fb.hasOwnProperty;
    function pb(e) {
      if (!cb(e)) return lb(e);
      var t = [];
      for (var n in Object(e)) db.call(e, n) && n != "constructor" && t.push(n);
      return t;
    }
    Jc.exports = pb;
  });
  var rt = f((Eq, el) => {
    var gb = li(),
      hb = Un();
    function Eb(e) {
      return e != null && hb(e.length) && !gb(e);
    }
    el.exports = Eb;
  });
  var Jt = f((yq, tl) => {
    var yb = _i(),
      mb = kn(),
      vb = rt();
    function _b(e) {
      return vb(e) ? yb(e) : mb(e);
    }
    tl.exports = _b;
  });
  var rl = f((mq, nl) => {
    var Ib = Ei(),
      Tb = mi(),
      Ab = Jt();
    function bb(e) {
      return Ib(e, Ab, Tb);
    }
    nl.exports = bb;
  });
  var al = f((vq, ol) => {
    var il = rl(),
      Sb = 1,
      Ob = Object.prototype,
      xb = Ob.hasOwnProperty;
    function wb(e, t, n, r, i, o) {
      var a = n & Sb,
        s = il(e),
        u = s.length,
        l = il(t),
        g = l.length;
      if (u != g && !a) return !1;
      for (var p = u; p--; ) {
        var d = s[p];
        if (!(a ? d in t : xb.call(t, d))) return !1;
      }
      var E = o.get(e),
        _ = o.get(t);
      if (E && _) return E == t && _ == e;
      var v = !0;
      o.set(e, t), o.set(t, e);
      for (var b = a; ++p < u; ) {
        d = s[p];
        var y = e[d],
          O = t[d];
        if (r) var A = a ? r(O, y, d, t, e, o) : r(y, O, d, e, t, o);
        if (!(A === void 0 ? y === O || i(y, O, n, r, o) : A)) {
          v = !1;
          break;
        }
        b || (b = d == "constructor");
      }
      if (v && !b) {
        var w = e.constructor,
          C = t.constructor;
        w != C &&
          "constructor" in e &&
          "constructor" in t &&
          !(typeof w == "function" && w instanceof w && typeof C == "function" && C instanceof C) &&
          (v = !1);
      }
      return o.delete(e), o.delete(t), v;
    }
    ol.exports = wb;
  });
  var ul = f((_q, sl) => {
    var Rb = Ze(),
      Cb = Re(),
      Pb = Rb(Cb, "DataView");
    sl.exports = Pb;
  });
  var ll = f((Iq, cl) => {
    var Lb = Ze(),
      Nb = Re(),
      Mb = Lb(Nb, "Promise");
    cl.exports = Mb;
  });
  var dl = f((Tq, fl) => {
    var Db = Ze(),
      Fb = Re(),
      qb = Db(Fb, "Set");
    fl.exports = qb;
  });
  var Ii = f((Aq, pl) => {
    var Gb = Ze(),
      Xb = Re(),
      Vb = Gb(Xb, "WeakMap");
    pl.exports = Vb;
  });
  var Wn = f((bq, _l) => {
    var Ti = ul(),
      Ai = Dn(),
      bi = ll(),
      Si = dl(),
      Oi = Ii(),
      vl = Qe(),
      At = di(),
      gl = "[object Map]",
      Ub = "[object Object]",
      hl = "[object Promise]",
      El = "[object Set]",
      yl = "[object WeakMap]",
      ml = "[object DataView]",
      Bb = At(Ti),
      Hb = At(Ai),
      kb = At(bi),
      Wb = At(Si),
      zb = At(Oi),
      it = vl;
    ((Ti && it(new Ti(new ArrayBuffer(1))) != ml) ||
      (Ai && it(new Ai()) != gl) ||
      (bi && it(bi.resolve()) != hl) ||
      (Si && it(new Si()) != El) ||
      (Oi && it(new Oi()) != yl)) &&
      (it = function (e) {
        var t = vl(e),
          n = t == Ub ? e.constructor : void 0,
          r = n ? At(n) : "";
        if (r)
          switch (r) {
            case Bb:
              return ml;
            case Hb:
              return gl;
            case kb:
              return hl;
            case Wb:
              return El;
            case zb:
              return yl;
          }
        return t;
      });
    _l.exports = it;
  });
  var wl = f((Sq, xl) => {
    var xi = pi(),
      Kb = gi(),
      jb = yc(),
      Yb = al(),
      Il = Wn(),
      Tl = ue(),
      Al = Xn(),
      $b = Bn(),
      Qb = 1,
      bl = "[object Arguments]",
      Sl = "[object Array]",
      zn = "[object Object]",
      Zb = Object.prototype,
      Ol = Zb.hasOwnProperty;
    function Jb(e, t, n, r, i, o) {
      var a = Tl(e),
        s = Tl(t),
        u = a ? Sl : Il(e),
        l = s ? Sl : Il(t);
      (u = u == bl ? zn : u), (l = l == bl ? zn : l);
      var g = u == zn,
        p = l == zn,
        d = u == l;
      if (d && Al(e)) {
        if (!Al(t)) return !1;
        (a = !0), (g = !1);
      }
      if (d && !g) return o || (o = new xi()), a || $b(e) ? Kb(e, t, n, r, i, o) : jb(e, t, u, n, r, i, o);
      if (!(n & Qb)) {
        var E = g && Ol.call(e, "__wrapped__"),
          _ = p && Ol.call(t, "__wrapped__");
        if (E || _) {
          var v = E ? e.value() : e,
            b = _ ? t.value() : t;
          return o || (o = new xi()), i(v, b, n, r, o);
        }
      }
      return d ? (o || (o = new xi()), Yb(e, t, n, r, i, o)) : !1;
    }
    xl.exports = Jb;
  });
  var wi = f((Oq, Pl) => {
    var e0 = wl(),
      Rl = He();
    function Cl(e, t, n, r, i) {
      return e === t ? !0 : e == null || t == null || (!Rl(e) && !Rl(t)) ? e !== e && t !== t : e0(e, t, n, r, Cl, i);
    }
    Pl.exports = Cl;
  });
  var Nl = f((xq, Ll) => {
    var t0 = pi(),
      n0 = wi(),
      r0 = 1,
      i0 = 2;
    function o0(e, t, n, r) {
      var i = n.length,
        o = i,
        a = !r;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = n[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = n[i];
        var u = s[0],
          l = e[u],
          g = s[1];
        if (a && s[2]) {
          if (l === void 0 && !(u in e)) return !1;
        } else {
          var p = new t0();
          if (r) var d = r(l, g, u, e, t, p);
          if (!(d === void 0 ? n0(g, l, r0 | i0, r, p) : d)) return !1;
        }
      }
      return !0;
    }
    Ll.exports = o0;
  });
  var Ri = f((wq, Ml) => {
    var a0 = Ge();
    function s0(e) {
      return e === e && !a0(e);
    }
    Ml.exports = s0;
  });
  var Fl = f((Rq, Dl) => {
    var u0 = Ri(),
      c0 = Jt();
    function l0(e) {
      for (var t = c0(e), n = t.length; n--; ) {
        var r = t[n],
          i = e[r];
        t[n] = [r, i, u0(i)];
      }
      return t;
    }
    Dl.exports = l0;
  });
  var Ci = f((Cq, ql) => {
    function f0(e, t) {
      return function (n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
      };
    }
    ql.exports = f0;
  });
  var Xl = f((Pq, Gl) => {
    var d0 = Nl(),
      p0 = Fl(),
      g0 = Ci();
    function h0(e) {
      var t = p0(e);
      return t.length == 1 && t[0][2]
        ? g0(t[0][0], t[0][1])
        : function (n) {
            return n === e || d0(n, e, t);
          };
    }
    Gl.exports = h0;
  });
  var en = f((Lq, Vl) => {
    var E0 = Qe(),
      y0 = He(),
      m0 = "[object Symbol]";
    function v0(e) {
      return typeof e == "symbol" || (y0(e) && E0(e) == m0);
    }
    Vl.exports = v0;
  });
  var Kn = f((Nq, Ul) => {
    var _0 = ue(),
      I0 = en(),
      T0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      A0 = /^\w*$/;
    function b0(e, t) {
      if (_0(e)) return !1;
      var n = typeof e;
      return n == "number" || n == "symbol" || n == "boolean" || e == null || I0(e)
        ? !0
        : A0.test(e) || !T0.test(e) || (t != null && e in Object(t));
    }
    Ul.exports = b0;
  });
  var kl = f((Mq, Hl) => {
    var Bl = Fn(),
      S0 = "Expected a function";
    function Pi(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function")) throw new TypeError(S0);
      var n = function () {
        var r = arguments,
          i = t ? t.apply(this, r) : r[0],
          o = n.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, r);
        return (n.cache = o.set(i, a) || o), a;
      };
      return (n.cache = new (Pi.Cache || Bl)()), n;
    }
    Pi.Cache = Bl;
    Hl.exports = Pi;
  });
  var zl = f((Dq, Wl) => {
    var O0 = kl(),
      x0 = 500;
    function w0(e) {
      var t = O0(e, function (r) {
          return n.size === x0 && n.clear(), r;
        }),
        n = t.cache;
      return t;
    }
    Wl.exports = w0;
  });
  var jl = f((Fq, Kl) => {
    var R0 = zl(),
      C0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      P0 = /\\(\\)?/g,
      L0 = R0(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(C0, function (n, r, i, o) {
            t.push(i ? o.replace(P0, "$1") : r || n);
          }),
          t
        );
      });
    Kl.exports = L0;
  });
  var Li = f((qq, Yl) => {
    function N0(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e);
      return i;
    }
    Yl.exports = N0;
  });
  var tf = f((Gq, ef) => {
    var $l = pt(),
      M0 = Li(),
      D0 = ue(),
      F0 = en(),
      q0 = 1 / 0,
      Ql = $l ? $l.prototype : void 0,
      Zl = Ql ? Ql.toString : void 0;
    function Jl(e) {
      if (typeof e == "string") return e;
      if (D0(e)) return M0(e, Jl) + "";
      if (F0(e)) return Zl ? Zl.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -q0 ? "-0" : t;
    }
    ef.exports = Jl;
  });
  var rf = f((Xq, nf) => {
    var G0 = tf();
    function X0(e) {
      return e == null ? "" : G0(e);
    }
    nf.exports = X0;
  });
  var tn = f((Vq, of) => {
    var V0 = ue(),
      U0 = Kn(),
      B0 = jl(),
      H0 = rf();
    function k0(e, t) {
      return V0(e) ? e : U0(e, t) ? [e] : B0(H0(e));
    }
    of.exports = k0;
  });
  var bt = f((Uq, af) => {
    var W0 = en(),
      z0 = 1 / 0;
    function K0(e) {
      if (typeof e == "string" || W0(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -z0 ? "-0" : t;
    }
    af.exports = K0;
  });
  var jn = f((Bq, sf) => {
    var j0 = tn(),
      Y0 = bt();
    function $0(e, t) {
      t = j0(t, e);
      for (var n = 0, r = t.length; e != null && n < r; ) e = e[Y0(t[n++])];
      return n && n == r ? e : void 0;
    }
    sf.exports = $0;
  });
  var Yn = f((Hq, uf) => {
    var Q0 = jn();
    function Z0(e, t, n) {
      var r = e == null ? void 0 : Q0(e, t);
      return r === void 0 ? n : r;
    }
    uf.exports = Z0;
  });
  var lf = f((kq, cf) => {
    function J0(e, t) {
      return e != null && t in Object(e);
    }
    cf.exports = J0;
  });
  var df = f((Wq, ff) => {
    var eS = tn(),
      tS = Yt(),
      nS = ue(),
      rS = Vn(),
      iS = Un(),
      oS = bt();
    function aS(e, t, n) {
      t = eS(t, e);
      for (var r = -1, i = t.length, o = !1; ++r < i; ) {
        var a = oS(t[r]);
        if (!(o = e != null && n(e, a))) break;
        e = e[a];
      }
      return o || ++r != i ? o : ((i = e == null ? 0 : e.length), !!i && iS(i) && rS(a, i) && (nS(e) || tS(e)));
    }
    ff.exports = aS;
  });
  var gf = f((zq, pf) => {
    var sS = lf(),
      uS = df();
    function cS(e, t) {
      return e != null && uS(e, t, sS);
    }
    pf.exports = cS;
  });
  var Ef = f((Kq, hf) => {
    var lS = wi(),
      fS = Yn(),
      dS = gf(),
      pS = Kn(),
      gS = Ri(),
      hS = Ci(),
      ES = bt(),
      yS = 1,
      mS = 2;
    function vS(e, t) {
      return pS(e) && gS(t)
        ? hS(ES(e), t)
        : function (n) {
            var r = fS(n, e);
            return r === void 0 && r === t ? dS(n, e) : lS(t, r, yS | mS);
          };
    }
    hf.exports = vS;
  });
  var $n = f((jq, yf) => {
    function _S(e) {
      return e;
    }
    yf.exports = _S;
  });
  var Ni = f((Yq, mf) => {
    function IS(e) {
      return function (t) {
        return t?.[e];
      };
    }
    mf.exports = IS;
  });
  var _f = f(($q, vf) => {
    var TS = jn();
    function AS(e) {
      return function (t) {
        return TS(t, e);
      };
    }
    vf.exports = AS;
  });
  var Tf = f((Qq, If) => {
    var bS = Ni(),
      SS = _f(),
      OS = Kn(),
      xS = bt();
    function wS(e) {
      return OS(e) ? bS(xS(e)) : SS(e);
    }
    If.exports = wS;
  });
  var Je = f((Zq, Af) => {
    var RS = Xl(),
      CS = Ef(),
      PS = $n(),
      LS = ue(),
      NS = Tf();
    function MS(e) {
      return typeof e == "function"
        ? e
        : e == null
          ? PS
          : typeof e == "object"
            ? LS(e)
              ? CS(e[0], e[1])
              : RS(e)
            : NS(e);
    }
    Af.exports = MS;
  });
  var Mi = f((Jq, bf) => {
    var DS = Je(),
      FS = rt(),
      qS = Jt();
    function GS(e) {
      return function (t, n, r) {
        var i = Object(t);
        if (!FS(t)) {
          var o = DS(n, 3);
          (t = qS(t)),
            (n = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, n, r);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    bf.exports = GS;
  });
  var Di = f((e1, Sf) => {
    function XS(e, t, n, r) {
      for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; ) if (t(e[o], o, e)) return o;
      return -1;
    }
    Sf.exports = XS;
  });
  var xf = f((t1, Of) => {
    var VS = /\s/;
    function US(e) {
      for (var t = e.length; t-- && VS.test(e.charAt(t)); );
      return t;
    }
    Of.exports = US;
  });
  var Rf = f((n1, wf) => {
    var BS = xf(),
      HS = /^\s+/;
    function kS(e) {
      return e && e.slice(0, BS(e) + 1).replace(HS, "");
    }
    wf.exports = kS;
  });
  var Qn = f((r1, Lf) => {
    var WS = Rf(),
      Cf = Ge(),
      zS = en(),
      Pf = 0 / 0,
      KS = /^[-+]0x[0-9a-f]+$/i,
      jS = /^0b[01]+$/i,
      YS = /^0o[0-7]+$/i,
      $S = parseInt;
    function QS(e) {
      if (typeof e == "number") return e;
      if (zS(e)) return Pf;
      if (Cf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Cf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = WS(e);
      var n = jS.test(e);
      return n || YS.test(e) ? $S(e.slice(2), n ? 2 : 8) : KS.test(e) ? Pf : +e;
    }
    Lf.exports = QS;
  });
  var Df = f((i1, Mf) => {
    var ZS = Qn(),
      Nf = 1 / 0,
      JS = 17976931348623157e292;
    function eO(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = ZS(e)), e === Nf || e === -Nf)) {
        var t = e < 0 ? -1 : 1;
        return t * JS;
      }
      return e === e ? e : 0;
    }
    Mf.exports = eO;
  });
  var Fi = f((o1, Ff) => {
    var tO = Df();
    function nO(e) {
      var t = tO(e),
        n = t % 1;
      return t === t ? (n ? t - n : t) : 0;
    }
    Ff.exports = nO;
  });
  var Gf = f((a1, qf) => {
    var rO = Di(),
      iO = Je(),
      oO = Fi(),
      aO = Math.max;
    function sO(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var i = n == null ? 0 : oO(n);
      return i < 0 && (i = aO(r + i, 0)), rO(e, iO(t, 3), i);
    }
    qf.exports = sO;
  });
  var qi = f((s1, Xf) => {
    var uO = Mi(),
      cO = Gf(),
      lO = uO(cO);
    Xf.exports = lO;
  });
  var Bf = {};
  me(Bf, {
    ELEMENT_MATCHES: () => fO,
    FLEX_PREFIXED: () => Gi,
    IS_BROWSER_ENV: () => Pe,
    TRANSFORM_PREFIXED: () => et,
    TRANSFORM_STYLE_PREFIXED: () => Jn,
    withBrowser: () => Zn,
  });
  var Uf,
    Pe,
    Zn,
    fO,
    Gi,
    et,
    Vf,
    Jn,
    er = ne(() => {
      "use strict";
      (Uf = $(qi())),
        (Pe = typeof window < "u"),
        (Zn = (e, t) => (Pe ? e() : t)),
        (fO = Zn(() =>
          (0, Uf.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Gi = Zn(() => {
          let e = document.createElement("i"),
            t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
            n = "";
          try {
            let { length: r } = t;
            for (let i = 0; i < r; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return n;
          } catch {
            return n;
          }
        }, "flex")),
        (et = Zn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              n = "Transform",
              { length: r } = t;
            for (let i = 0; i < r; i++) {
              let o = t[i] + n;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Vf = et.split("transform")[0]),
        (Jn = Vf ? Vf + "TransformStyle" : "transformStyle");
    });
  var Xi = f((u1, Kf) => {
    var dO = 4,
      pO = 0.001,
      gO = 1e-7,
      hO = 10,
      nn = 11,
      tr = 1 / (nn - 1),
      EO = typeof Float32Array == "function";
    function Hf(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function kf(e, t) {
      return 3 * t - 6 * e;
    }
    function Wf(e) {
      return 3 * e;
    }
    function nr(e, t, n) {
      return ((Hf(t, n) * e + kf(t, n)) * e + Wf(t)) * e;
    }
    function zf(e, t, n) {
      return 3 * Hf(t, n) * e * e + 2 * kf(t, n) * e + Wf(t);
    }
    function yO(e, t, n, r, i) {
      var o,
        a,
        s = 0;
      do (a = t + (n - t) / 2), (o = nr(a, r, i) - e), o > 0 ? (n = a) : (t = a);
      while (Math.abs(o) > gO && ++s < hO);
      return a;
    }
    function mO(e, t, n, r) {
      for (var i = 0; i < dO; ++i) {
        var o = zf(t, n, r);
        if (o === 0) return t;
        var a = nr(t, n, r) - e;
        t -= a / o;
      }
      return t;
    }
    Kf.exports = function (t, n, r, i) {
      if (!(0 <= t && t <= 1 && 0 <= r && r <= 1)) throw new Error("bezier x values must be in [0, 1] range");
      var o = EO ? new Float32Array(nn) : new Array(nn);
      if (t !== n || r !== i) for (var a = 0; a < nn; ++a) o[a] = nr(a * tr, t, r);
      function s(u) {
        for (var l = 0, g = 1, p = nn - 1; g !== p && o[g] <= u; ++g) l += tr;
        --g;
        var d = (u - o[g]) / (o[g + 1] - o[g]),
          E = l + d * tr,
          _ = zf(E, t, r);
        return _ >= pO ? mO(u, E, t, r) : _ === 0 ? E : yO(u, l, l + tr, t, r);
      }
      return function (l) {
        return t === n && r === i ? l : l === 0 ? 0 : l === 1 ? 1 : nr(s(l), n, i);
      };
    };
  });
  var on = {};
  me(on, {
    bounce: () => ex,
    bouncePast: () => tx,
    ease: () => vO,
    easeIn: () => _O,
    easeInOut: () => TO,
    easeOut: () => IO,
    inBack: () => WO,
    inCirc: () => UO,
    inCubic: () => OO,
    inElastic: () => jO,
    inExpo: () => GO,
    inOutBack: () => KO,
    inOutCirc: () => HO,
    inOutCubic: () => wO,
    inOutElastic: () => $O,
    inOutExpo: () => VO,
    inOutQuad: () => SO,
    inOutQuart: () => PO,
    inOutQuint: () => MO,
    inOutSine: () => qO,
    inQuad: () => AO,
    inQuart: () => RO,
    inQuint: () => LO,
    inSine: () => DO,
    outBack: () => zO,
    outBounce: () => kO,
    outCirc: () => BO,
    outCubic: () => xO,
    outElastic: () => YO,
    outExpo: () => XO,
    outQuad: () => bO,
    outQuart: () => CO,
    outQuint: () => NO,
    outSine: () => FO,
    swingFrom: () => ZO,
    swingFromTo: () => QO,
    swingTo: () => JO,
  });
  function AO(e) {
    return Math.pow(e, 2);
  }
  function bO(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function SO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function OO(e) {
    return Math.pow(e, 3);
  }
  function xO(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function wO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function RO(e) {
    return Math.pow(e, 4);
  }
  function CO(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function PO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function LO(e) {
    return Math.pow(e, 5);
  }
  function NO(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function MO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function DO(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function FO(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function qO(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function GO(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function XO(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function VO(e) {
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function UO(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function BO(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function HO(e) {
    return (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function kO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function WO(e) {
    let t = ke;
    return e * e * ((t + 1) * e - t);
  }
  function zO(e) {
    let t = ke;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function KO(e) {
    let t = ke;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function jO(e) {
    let t = ke,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1 ? ((r = 1), (t = n / 4)) : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / n)));
  }
  function YO(e) {
    let t = ke,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1 ? ((r = 1), (t = n / 4)) : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) + 1);
  }
  function $O(e) {
    let t = ke,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
        ? 1
        : (n || (n = 0.3 * 1.5),
          r < 1 ? ((r = 1), (t = n / 4)) : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          e < 1
            ? -0.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / n))
            : r * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / n) * 0.5 + 1);
  }
  function QO(e) {
    let t = ke;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function ZO(e) {
    let t = ke;
    return e * e * ((t + 1) * e - t);
  }
  function JO(e) {
    let t = ke;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function ex(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function tx(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var rn,
    ke,
    vO,
    _O,
    IO,
    TO,
    Vi = ne(() => {
      "use strict";
      (rn = $(Xi())),
        (ke = 1.70158),
        (vO = (0, rn.default)(0.25, 0.1, 0.25, 1)),
        (_O = (0, rn.default)(0.42, 0, 1, 1)),
        (IO = (0, rn.default)(0, 0, 0.58, 1)),
        (TO = (0, rn.default)(0.42, 0, 0.58, 1));
    });
  var Yf = {};
  me(Yf, {
    applyEasing: () => rx,
    createBezierEasing: () => nx,
    optimizeFloat: () => an,
  });
  function an(e, t = 5, n = 10) {
    let r = Math.pow(n, t),
      i = Number(Math.round(e * r) / r);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function nx(e) {
    return (0, jf.default)(...e);
  }
  function rx(e, t, n) {
    return t === 0 ? 0 : t === 1 ? 1 : an(n ? (t > 0 ? n(t) : t) : t > 0 && e && on[e] ? on[e](t) : t);
  }
  var jf,
    Ui = ne(() => {
      "use strict";
      Vi();
      jf = $(Xi());
    });
  var Zf = {};
  me(Zf, {
    createElementState: () => Qf,
    ixElements: () => yx,
    mergeActionState: () => Bi,
  });
  function Qf(e, t, n, r, i) {
    let o = n === ix ? (0, St.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, St.mergeIn)(e, [r], {
      id: r,
      ref: t,
      refId: o,
      refType: n,
    });
  }
  function Bi(e, t, n, r, i) {
    let o = vx(i);
    return (0, St.mergeIn)(e, [t, Ex, n], r, o);
  }
  function vx(e) {
    let { config: t } = e;
    return mx.reduce((n, r) => {
      let i = r[0],
        o = r[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (n[o] = s), n;
    }, {});
  }
  var St,
    l1,
    ix,
    f1,
    ox,
    ax,
    sx,
    ux,
    cx,
    lx,
    fx,
    dx,
    px,
    gx,
    hx,
    $f,
    Ex,
    yx,
    mx,
    Jf = ne(() => {
      "use strict";
      St = $(Et());
      ve();
      ({
        HTML_ELEMENT: l1,
        PLAIN_OBJECT: ix,
        ABSTRACT_NODE: f1,
        CONFIG_X_VALUE: ox,
        CONFIG_Y_VALUE: ax,
        CONFIG_Z_VALUE: sx,
        CONFIG_VALUE: ux,
        CONFIG_X_UNIT: cx,
        CONFIG_Y_UNIT: lx,
        CONFIG_Z_UNIT: fx,
        CONFIG_UNIT: dx,
      } = ce),
        ({ IX2_SESSION_STOPPED: px, IX2_INSTANCE_ADDED: gx, IX2_ELEMENT_STATE_CHANGED: hx } = se),
        ($f = {}),
        (Ex = "refState"),
        (yx = (e = $f, t = {}) => {
          switch (t.type) {
            case px:
              return $f;
            case gx: {
              let { elementId: n, element: r, origin: i, actionItem: o, refType: a } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (0, St.getIn)(u, [n, r]) !== r && (u = Qf(u, r, a, n, o)), Bi(u, n, s, i, o);
            }
            case hx: {
              let { elementId: n, actionTypeId: r, current: i, actionItem: o } = t.payload;
              return Bi(e, n, r, i, o);
            }
            default:
              return e;
          }
        });
      mx = [
        [ox, cx],
        [ax, lx],
        [sx, fx],
        [ux, dx],
      ];
    });
  var ed = f((Hi) => {
    "use strict";
    Object.defineProperty(Hi, "__esModule", {
      value: !0,
    });
    function _x(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n],
        });
    }
    _x(Hi, {
      clearPlugin: function () {
        return xx;
      },
      createPluginInstance: function () {
        return Sx;
      },
      getPluginConfig: function () {
        return Ix;
      },
      getPluginDestination: function () {
        return bx;
      },
      getPluginDuration: function () {
        return Tx;
      },
      getPluginOrigin: function () {
        return Ax;
      },
      renderPlugin: function () {
        return Ox;
      },
    });
    var Ix = (e) => e.value,
      Tx = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let n = parseFloat(e.getAttribute("data-duration"));
        return n > 0 ? n * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      Ax = (e) =>
        e || {
          value: 0,
        },
      bx = (e) => ({
        value: e.value,
      }),
      Sx = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      Ox = (e, t, n) => {
        if (!e) return;
        let r = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * r);
      },
      xx = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var nd = f((ki) => {
    "use strict";
    Object.defineProperty(ki, "__esModule", {
      value: !0,
    });
    function wx(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n],
        });
    }
    wx(ki, {
      clearPlugin: function () {
        return Gx;
      },
      createPluginInstance: function () {
        return Fx;
      },
      getPluginConfig: function () {
        return Lx;
      },
      getPluginDestination: function () {
        return Dx;
      },
      getPluginDuration: function () {
        return Nx;
      },
      getPluginOrigin: function () {
        return Mx;
      },
      renderPlugin: function () {
        return qx;
      },
    });
    var Rx = (e) => document.querySelector(`[data-w-id="${e}"]`),
      Cx = () => window.Webflow.require("spline"),
      Px = (e, t) => e.filter((n) => !t.includes(n)),
      Lx = (e, t) => e.value[t],
      Nx = () => null,
      td = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      Mx = (e, t) => {
        let n = t.config.value,
          r = Object.keys(n);
        if (e) {
          let o = Object.keys(e),
            a = Px(r, o);
          return a.length ? a.reduce((u, l) => ((u[l] = td[l]), u), e) : e;
        }
        return r.reduce((o, a) => ((o[a] = td[a]), o), {});
      },
      Dx = (e) => e.value,
      Fx = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? Rx(n) : null;
      },
      qx = (e, t, n) => {
        let r = Cx(),
          i = r.getInstance(e),
          o = n.config.target.objectId,
          a = (s) => {
            if (!s) throw new Error("Invalid spline app passed to renderSpline");
            let u = o && s.findObjectById(o);
            if (!u) return;
            let { PLUGIN_SPLINE: l } = t;
            l.positionX != null && (u.position.x = l.positionX),
              l.positionY != null && (u.position.y = l.positionY),
              l.positionZ != null && (u.position.z = l.positionZ),
              l.rotationX != null && (u.rotation.x = l.rotationX),
              l.rotationY != null && (u.rotation.y = l.rotationY),
              l.rotationZ != null && (u.rotation.z = l.rotationZ),
              l.scaleX != null && (u.scale.x = l.scaleX),
              l.scaleY != null && (u.scale.y = l.scaleY),
              l.scaleZ != null && (u.scale.z = l.scaleZ);
          };
        i ? a(i.spline) : r.setLoadHandler(e, a);
      },
      Gx = () => null;
  });
  var rd = f((Ki) => {
    "use strict";
    Object.defineProperty(Ki, "__esModule", {
      value: !0,
    });
    function Xx(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n],
        });
    }
    Xx(Ki, {
      clearPlugin: function () {
        return jx;
      },
      createPluginInstance: function () {
        return zx;
      },
      getPluginConfig: function () {
        return Bx;
      },
      getPluginDestination: function () {
        return Wx;
      },
      getPluginDuration: function () {
        return Hx;
      },
      getPluginOrigin: function () {
        return kx;
      },
      renderPlugin: function () {
        return Kx;
      },
    });
    var Wi = "--wf-rive-fit",
      zi = "--wf-rive-alignment",
      Vx = (e) => document.querySelector(`[data-w-id="${e}"]`),
      Ux = () => window.Webflow.require("rive"),
      Bx = (e, t) => e.value.inputs[t],
      Hx = () => null,
      kx = (e, t) => {
        if (e) return e;
        let n = {},
          { inputs: r = {} } = t.config.value;
        for (let i in r) r[i] == null && (n[i] = 0);
        return n;
      },
      Wx = (e) => e.value.inputs ?? {},
      zx = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let r = t?.config?.target?.pluginElement;
        return r ? Vx(r) : null;
      },
      Kx = (e, { PLUGIN_RIVE: t }, n) => {
        let r = Ux(),
          i = r.getInstance(e),
          o = r.rive.StateMachineInputType,
          { name: a, inputs: s = {} } = n.config.value || {};
        function u(l) {
          if (l.loaded) g();
          else {
            let p = () => {
              g(), l?.off("load", p);
            };
            l?.on("load", p);
          }
          function g() {
            let p = l.stateMachineInputs(a);
            if (p != null) {
              if ((l.isPlaying || l.play(a, !1), Wi in s || zi in s)) {
                let d = l.layout,
                  E = s[Wi] ?? d.fit,
                  _ = s[zi] ?? d.alignment;
                (E !== d.fit || _ !== d.alignment) &&
                  (l.layout = d.copyWith({
                    fit: E,
                    alignment: _,
                  }));
              }
              for (let d in s) {
                if (d === Wi || d === zi) continue;
                let E = p.find((_) => _.name === d);
                if (E != null)
                  switch (E.type) {
                    case o.Boolean: {
                      if (s[d] != null) {
                        let _ = !!s[d];
                        E.value = _;
                      }
                      break;
                    }
                    case o.Number: {
                      let _ = t[d];
                      _ != null && (E.value = _);
                      break;
                    }
                    case o.Trigger: {
                      s[d] && E.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        i?.rive ? u(i.rive) : r.setLoadHandler(e, u);
      },
      jx = (e, t) => null;
  });
  var Yi = f((ji) => {
    "use strict";
    Object.defineProperty(ji, "__esModule", {
      value: !0,
    });
    Object.defineProperty(ji, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return Yx;
      },
    });
    var id = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function Yx(e) {
      let t,
        n,
        r,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof id[o] == "string" ? id[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3 || u.length === 4
          ? ((t = parseInt(u[0] + u[0], 16)),
            (n = parseInt(u[1] + u[1], 16)),
            (r = parseInt(u[2] + u[2], 16)),
            u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255))
          : (u.length === 6 || u.length === 8) &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (n = parseInt(u.substring(2, 4), 16)),
            (r = parseInt(u.substring(4, 6), 16)),
            u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)), (n = parseInt(u[1], 10)), (r = parseInt(u[2], 10)), (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)), (n = parseInt(u[1], 10)), (r = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          g = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let d = (1 - Math.abs(2 * p - 1)) * g,
          E = d * (1 - Math.abs(((l / 60) % 2) - 1)),
          _ = p - d / 2,
          v,
          b,
          y;
        l >= 0 && l < 60
          ? ((v = d), (b = E), (y = 0))
          : l >= 60 && l < 120
            ? ((v = E), (b = d), (y = 0))
            : l >= 120 && l < 180
              ? ((v = 0), (b = d), (y = E))
              : l >= 180 && l < 240
                ? ((v = 0), (b = E), (y = d))
                : l >= 240 && l < 300
                  ? ((v = E), (b = 0), (y = d))
                  : ((v = d), (b = 0), (y = E)),
          (t = Math.round((v + _) * 255)),
          (n = Math.round((b + _) * 255)),
          (r = Math.round((y + _) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          g = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100,
          d = (1 - Math.abs(2 * p - 1)) * g,
          E = d * (1 - Math.abs(((l / 60) % 2) - 1)),
          _ = p - d / 2,
          v,
          b,
          y;
        l >= 0 && l < 60
          ? ((v = d), (b = E), (y = 0))
          : l >= 60 && l < 120
            ? ((v = E), (b = d), (y = 0))
            : l >= 120 && l < 180
              ? ((v = 0), (b = d), (y = E))
              : l >= 180 && l < 240
                ? ((v = 0), (b = E), (y = d))
                : l >= 240 && l < 300
                  ? ((v = E), (b = 0), (y = d))
                  : ((v = d), (b = 0), (y = E)),
          (t = Math.round((v + _) * 255)),
          (n = Math.round((b + _) * 255)),
          (r = Math.round((y + _) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
        throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
      return {
        red: t,
        green: n,
        blue: r,
        alpha: i,
      };
    }
  });
  var od = f(($i) => {
    "use strict";
    Object.defineProperty($i, "__esModule", {
      value: !0,
    });
    function $x(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n],
        });
    }
    $x($i, {
      clearPlugin: function () {
        return iw;
      },
      createPluginInstance: function () {
        return nw;
      },
      getPluginConfig: function () {
        return Zx;
      },
      getPluginDestination: function () {
        return tw;
      },
      getPluginDuration: function () {
        return Jx;
      },
      getPluginOrigin: function () {
        return ew;
      },
      renderPlugin: function () {
        return rw;
      },
    });
    var Qx = Yi(),
      Zx = (e, t) => e.value[t],
      Jx = () => null,
      ew = (e, t) => {
        if (e) return e;
        let n = t.config.value,
          r = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(r);
        if (n.size != null)
          return {
            size: parseInt(i, 10),
          };
        if (n.red != null && n.green != null && n.blue != null) return (0, Qx.normalizeColor)(i);
      },
      tw = (e) => e.value,
      nw = () => null,
      rw = (e, t, n) => {
        let r = n.config.target.objectId,
          i = n.config.value.unit,
          { PLUGIN_VARIABLE: o } = t,
          { size: a, red: s, green: u, blue: l, alpha: g } = o,
          p;
        a != null && (p = a + i),
          s != null && l != null && u != null && g != null && (p = `rgba(${s}, ${u}, ${l}, ${g})`),
          p != null && document.documentElement.style.setProperty(r, p);
      },
      iw = (e, t) => {
        let n = t.config.target.objectId;
        document.documentElement.style.removeProperty(n);
      };
  });
  var sd = f((Qi) => {
    "use strict";
    Object.defineProperty(Qi, "__esModule", {
      value: !0,
    });
    Object.defineProperty(Qi, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return cw;
      },
    });
    var rr = (ve(), Me(ls)),
      ow = ir(ed()),
      aw = ir(nd()),
      sw = ir(rd()),
      uw = ir(od());
    function ad(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (ad = function (r) {
        return r ? n : t;
      })(e);
    }
    function ir(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return {
          default: e,
        };
      var n = ad(t);
      if (n && n.has(e)) return n.get(e);
      var r = {
          __proto__: null,
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var cw = new Map([
      [
        rr.ActionTypeConsts.PLUGIN_LOTTIE,
        {
          ...ow,
        },
      ],
      [
        rr.ActionTypeConsts.PLUGIN_SPLINE,
        {
          ...aw,
        },
      ],
      [
        rr.ActionTypeConsts.PLUGIN_RIVE,
        {
          ...sw,
        },
      ],
      [
        rr.ActionTypeConsts.PLUGIN_VARIABLE,
        {
          ...uw,
        },
      ],
    ]);
  });
  var ud = {};
  me(ud, {
    clearPlugin: () => ro,
    createPluginInstance: () => fw,
    getPluginConfig: () => Ji,
    getPluginDestination: () => to,
    getPluginDuration: () => lw,
    getPluginOrigin: () => eo,
    isPluginType: () => ot,
    renderPlugin: () => no,
  });
  function ot(e) {
    return Zi.pluginMethodMap.has(e);
  }
  var Zi,
    at,
    Ji,
    eo,
    lw,
    to,
    fw,
    no,
    ro,
    io = ne(() => {
      "use strict";
      er();
      Zi = $(sd());
      (at = (e) => (t) => {
        if (!Pe) return () => null;
        let n = Zi.pluginMethodMap.get(t);
        if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
        let r = n[e];
        if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
        return r;
      }),
        (Ji = at("getPluginConfig")),
        (eo = at("getPluginOrigin")),
        (lw = at("getPluginDuration")),
        (to = at("getPluginDestination")),
        (fw = at("createPluginInstance")),
        (no = at("renderPlugin")),
        (ro = at("clearPlugin"));
    });
  var ld = f((v1, cd) => {
    function dw(e, t) {
      return e == null || e !== e ? t : e;
    }
    cd.exports = dw;
  });
  var dd = f((_1, fd) => {
    function pw(e, t, n, r) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
      return n;
    }
    fd.exports = pw;
  });
  var gd = f((I1, pd) => {
    function gw(e) {
      return function (t, n, r) {
        for (var i = -1, o = Object(t), a = r(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (n(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    pd.exports = gw;
  });
  var Ed = f((T1, hd) => {
    var hw = gd(),
      Ew = hw();
    hd.exports = Ew;
  });
  var oo = f((A1, yd) => {
    var yw = Ed(),
      mw = Jt();
    function vw(e, t) {
      return e && yw(e, t, mw);
    }
    yd.exports = vw;
  });
  var vd = f((b1, md) => {
    var _w = rt();
    function Iw(e, t) {
      return function (n, r) {
        if (n == null) return n;
        if (!_w(n)) return e(n, r);
        for (var i = n.length, o = t ? i : -1, a = Object(n); (t ? o-- : ++o < i) && r(a[o], o, a) !== !1; );
        return n;
      };
    }
    md.exports = Iw;
  });
  var ao = f((S1, _d) => {
    var Tw = oo(),
      Aw = vd(),
      bw = Aw(Tw);
    _d.exports = bw;
  });
  var Td = f((O1, Id) => {
    function Sw(e, t, n, r, i) {
      return (
        i(e, function (o, a, s) {
          n = r ? ((r = !1), o) : t(n, o, a, s);
        }),
        n
      );
    }
    Id.exports = Sw;
  });
  var bd = f((x1, Ad) => {
    var Ow = dd(),
      xw = ao(),
      ww = Je(),
      Rw = Td(),
      Cw = ue();
    function Pw(e, t, n) {
      var r = Cw(e) ? Ow : Rw,
        i = arguments.length < 3;
      return r(e, ww(t, 4), n, i, xw);
    }
    Ad.exports = Pw;
  });
  var Od = f((w1, Sd) => {
    var Lw = Di(),
      Nw = Je(),
      Mw = Fi(),
      Dw = Math.max,
      Fw = Math.min;
    function qw(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var i = r - 1;
      return n !== void 0 && ((i = Mw(n)), (i = n < 0 ? Dw(r + i, 0) : Fw(i, r - 1))), Lw(e, Nw(t, 3), i, !0);
    }
    Sd.exports = qw;
  });
  var wd = f((R1, xd) => {
    var Gw = Mi(),
      Xw = Od(),
      Vw = Gw(Xw);
    xd.exports = Vw;
  });
  function Rd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function Uw(e, t) {
    if (Rd(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    let n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++) if (!Object.hasOwn(t, n[i]) || !Rd(e[n[i]], t[n[i]])) return !1;
    return !0;
  }
  var so,
    Cd = ne(() => {
      "use strict";
      so = Uw;
    });
  var jd = {};
  me(jd, {
    cleanupHTMLElement: () => GR,
    clearAllStyles: () => qR,
    clearObjectCache: () => iR,
    getActionListProgress: () => VR,
    getAffectedElements: () => po,
    getComputedStyle: () => dR,
    getDestinationValues: () => vR,
    getElementId: () => uR,
    getInstanceId: () => aR,
    getInstanceOrigin: () => hR,
    getItemConfigByKey: () => mR,
    getMaxDurationItemIndex: () => Kd,
    getNamespacedParameterId: () => HR,
    getRenderType: () => kd,
    getStyleProp: () => _R,
    mediaQueriesEqual: () => WR,
    observeStore: () => fR,
    reduceListToGroup: () => UR,
    reifyState: () => cR,
    renderHTMLElement: () => IR,
    shallowEqual: () => so,
    shouldAllowMediaQuery: () => kR,
    shouldNamespaceEventParameter: () => BR,
    stringifyTarget: () => zR,
  });
  function iR() {
    or.clear();
  }
  function aR() {
    return "i" + oR++;
  }
  function uR(e, t) {
    for (let n in e) {
      let r = e[n];
      if (r && r.ref === t) return r.id;
    }
    return "e" + sR++;
  }
  function cR({ events: e, actionLists: t, site: n } = {}) {
    let r = (0, cr.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = n && n.mediaQueries,
      o = [];
    return (
      i ? (o = i.map((a) => a.key)) : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: r,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function fR({ store: e, select: t, onChange: n, comparator: r = lR }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let l = t(i());
      if (l == null) {
        a();
        return;
      }
      r(l, s) || ((s = l), n(s, e));
    }
    return a;
  }
  function Nd(e) {
    let t = typeof e;
    if (t === "string")
      return {
        id: e,
      };
    if (e != null && t === "object") {
      let { id: n, objectId: r, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s } = e;
      return {
        id: n,
        objectId: r,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function po({ config: e, event: t, eventTarget: n, elementRoot: r, elementApi: i }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (L, I) =>
          L.concat(
            po({
              config: {
                target: I,
              },
              event: t,
              eventTarget: n,
              elementRoot: r,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: l,
        getSiblingElements: g,
        matchSelector: p,
        elementContains: d,
        isSiblingNode: E,
      } = i,
      { target: _ } = e;
    if (!_) return [];
    let { id: v, objectId: b, selector: y, selectorGuids: O, appliesTo: A, useEventTarget: w } = Nd(_);
    if (b) return [or.has(b) ? or.get(b) : or.set(b, {}).get(b)];
    if (A === ai.PAGE) {
      let L = a(v);
      return L ? [L] : [];
    }
    let x = (t?.action?.config?.affectedElements ?? {})[v || y] || {},
      D = !!(x.id || x.selector),
      F,
      G,
      U,
      B = t && s(Nd(t.target));
    if (
      (D
        ? ((F = x.limitAffectedElements), (G = B), (U = s(x)))
        : (G = U =
            s({
              id: v,
              selector: y,
              selectorGuids: O,
            })),
      t && w)
    ) {
      let L = n && (U || w === !0) ? [n] : u(B);
      if (U) {
        if (w === tR) return u(U).filter((I) => L.some((P) => d(I, P)));
        if (w === Pd) return u(U).filter((I) => L.some((P) => d(P, I)));
        if (w === Ld) return u(U).filter((I) => L.some((P) => E(P, I)));
      }
      return L;
    }
    return G == null || U == null
      ? []
      : Pe && r
        ? u(U).filter((L) => r.contains(L))
        : F === Pd
          ? u(G, U)
          : F === eR
            ? l(u(G)).filter(p(U))
            : F === Ld
              ? g(u(G)).filter(p(U))
              : u(U);
  }
  function dR({ element: e, actionItem: t }) {
    if (!Pe) return {};
    let { actionTypeId: n } = t;
    switch (n) {
      case Ct:
      case Pt:
      case Lt:
      case Nt:
      case fr:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function hR(e, t = {}, n = {}, r, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = r;
    if (ot(a)) return eo(a)(t[a], r);
    switch (r.actionTypeId) {
      case xt:
      case wt:
      case Rt:
      case ln:
        return t[r.actionTypeId] || go[r.actionTypeId];
      case fn:
        return pR(t[r.actionTypeId], r.config.filters);
      case dn:
        return gR(t[r.actionTypeId], r.config.fontVariations);
      case Ud:
        return {
          value: (0, We.default)(parseFloat(o(e, sr)), 1),
        };
      case Ct: {
        let s = o(e, Xe),
          u = o(e, Ve),
          l,
          g;
        return (
          r.config.widthUnit === tt
            ? (l = Md.test(s) ? parseFloat(s) : parseFloat(n.width))
            : (l = (0, We.default)(parseFloat(s), parseFloat(n.width))),
          r.config.heightUnit === tt
            ? (g = Md.test(u) ? parseFloat(u) : parseFloat(n.height))
            : (g = (0, We.default)(parseFloat(u), parseFloat(n.height))),
          {
            widthValue: l,
            heightValue: g,
          }
        );
      }
      case Pt:
      case Lt:
      case Nt:
        return MR({
          element: e,
          actionTypeId: r.actionTypeId,
          computedStyle: n,
          getStyle: o,
        });
      case fr:
        return {
          value: (0, We.default)(o(e, ur), n.display),
        };
      case rR:
        return (
          t[r.actionTypeId] || {
            value: 0,
          }
        );
      default:
        return;
    }
  }
  function vR({ element: e, actionItem: t, elementApi: n }) {
    if (ot(t.actionTypeId)) return to(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case xt:
      case wt:
      case Rt:
      case ln: {
        let { xValue: r, yValue: i, zValue: o } = t.config;
        return {
          xValue: r,
          yValue: i,
          zValue: o,
        };
      }
      case Ct: {
        let { getStyle: r, setStyle: i, getProperty: o } = n,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: l } = t.config;
        if (!Pe)
          return {
            widthValue: u,
            heightValue: l,
          };
        if (a === tt) {
          let g = r(e, Xe);
          i(e, Xe, ""), (u = o(e, "offsetWidth")), i(e, Xe, g);
        }
        if (s === tt) {
          let g = r(e, Ve);
          i(e, Ve, ""), (l = o(e, "offsetHeight")), i(e, Ve, g);
        }
        return {
          widthValue: u,
          heightValue: l,
        };
      }
      case Pt:
      case Lt:
      case Nt: {
        let { rValue: r, gValue: i, bValue: o, aValue: a, globalSwatchId: s } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = n,
            l = u(e, s),
            g = (0, qd.normalizeColor)(l);
          return {
            rValue: g.red,
            gValue: g.green,
            bValue: g.blue,
            aValue: g.alpha,
          };
        }
        return {
          rValue: r,
          gValue: i,
          bValue: o,
          aValue: a,
        };
      }
      case fn:
        return t.config.filters.reduce(ER, {});
      case dn:
        return t.config.fontVariations.reduce(yR, {});
      default: {
        let { value: r } = t.config;
        return {
          value: r,
        };
      }
    }
  }
  function kd(e) {
    if (/^TRANSFORM_/.test(e)) return Xd;
    if (/^STYLE_/.test(e)) return lo;
    if (/^GENERAL_/.test(e)) return co;
    if (/^PLUGIN_/.test(e)) return Vd;
  }
  function _R(e, t) {
    return e === lo ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function IR(e, t, n, r, i, o, a, s, u) {
    switch (s) {
      case Xd:
        return OR(e, t, n, i, a);
      case lo:
        return DR(e, t, n, i, o, a);
      case co:
        return FR(e, i, a);
      case Vd: {
        let { actionTypeId: l } = i;
        if (ot(l)) return no(l)(u, t, i);
      }
    }
  }
  function OR(e, t, n, r, i) {
    let o = SR.map((s) => {
        let u = go[s],
          {
            xValue: l = u.xValue,
            yValue: g = u.yValue,
            zValue: p = u.zValue,
            xUnit: d = "",
            yUnit: E = "",
            zUnit: _ = "",
          } = t[s] || {};
        switch (s) {
          case xt:
            return `${kw}(${l}${d}, ${g}${E}, ${p}${_})`;
          case wt:
            return `${Ww}(${l}${d}, ${g}${E}, ${p}${_})`;
          case Rt:
            return `${zw}(${l}${d}) ${Kw}(${g}${E}) ${jw}(${p}${_})`;
          case ln:
            return `${Yw}(${l}${d}, ${g}${E})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    st(e, et, i), a(e, et, o), RR(r, n) && a(e, Jn, $w);
  }
  function xR(e, t, n, r) {
    let i = (0, cr.default)(t, (a, s, u) => `${a} ${u}(${s}${bR(u, n)})`, ""),
      { setStyle: o } = r;
    st(e, sn, r), o(e, sn, i);
  }
  function wR(e, t, n, r) {
    let i = (0, cr.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
      { setStyle: o } = r;
    st(e, un, r), o(e, un, i);
  }
  function RR({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
    return (e === xt && r !== void 0) || (e === wt && r !== void 0) || (e === Rt && (t !== void 0 || n !== void 0));
  }
  function NR(e, t) {
    let n = e.exec(t);
    return n ? n[1] : "";
  }
  function MR({ element: e, actionTypeId: t, computedStyle: n, getStyle: r }) {
    let i = fo[t],
      o = r(e, i),
      a = PR.test(o) ? o : n[i],
      s = NR(LR, a).split(cn);
    return {
      rValue: (0, We.default)(parseInt(s[0], 10), 255),
      gValue: (0, We.default)(parseInt(s[1], 10), 255),
      bValue: (0, We.default)(parseInt(s[2], 10), 255),
      aValue: (0, We.default)(parseFloat(s[3]), 1),
    };
  }
  function DR(e, t, n, r, i, o) {
    let { setStyle: a } = o;
    switch (r.actionTypeId) {
      case Ct: {
        let { widthUnit: s = "", heightUnit: u = "" } = r.config,
          { widthValue: l, heightValue: g } = n;
        l !== void 0 && (s === tt && (s = "px"), st(e, Xe, o), a(e, Xe, l + s)),
          g !== void 0 && (u === tt && (u = "px"), st(e, Ve, o), a(e, Ve, g + u));
        break;
      }
      case fn: {
        xR(e, n, r.config, o);
        break;
      }
      case dn: {
        wR(e, n, r.config, o);
        break;
      }
      case Pt:
      case Lt:
      case Nt: {
        let s = fo[r.actionTypeId],
          u = Math.round(n.rValue),
          l = Math.round(n.gValue),
          g = Math.round(n.bValue),
          p = n.aValue;
        st(e, s, o), a(e, s, p >= 1 ? `rgb(${u},${l},${g})` : `rgba(${u},${l},${g},${p})`);
        break;
      }
      default: {
        let { unit: s = "" } = r.config;
        st(e, i, o), a(e, i, n.value + s);
        break;
      }
    }
  }
  function FR(e, t, n) {
    let { setStyle: r } = n;
    switch (t.actionTypeId) {
      case fr: {
        let { value: i } = t.config;
        i === Qw && Pe ? r(e, ur, Gi) : r(e, ur, i);
        return;
      }
    }
  }
  function st(e, t, n) {
    if (!Pe) return;
    let r = Hd[t];
    if (!r) return;
    let { getStyle: i, setStyle: o } = n,
      a = i(e, Ot);
    if (!a) {
      o(e, Ot, r);
      return;
    }
    let s = a.split(cn).map(Bd);
    s.indexOf(r) === -1 && o(e, Ot, s.concat(r).join(cn));
  }
  function Wd(e, t, n) {
    if (!Pe) return;
    let r = Hd[t];
    if (!r) return;
    let { getStyle: i, setStyle: o } = n,
      a = i(e, Ot);
    !a ||
      a.indexOf(r) === -1 ||
      o(
        e,
        Ot,
        a
          .split(cn)
          .map(Bd)
          .filter((s) => s !== r)
          .join(cn)
      );
  }
  function qR({ store: e, elementApi: t }) {
    let { ixData: n } = e.getState(),
      { events: r = {}, actionLists: i = {} } = n;
    Object.keys(r).forEach((o) => {
      let a = r[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        l = i[u];
      l &&
        Dd({
          actionList: l,
          event: a,
          elementApi: t,
        });
    }),
      Object.keys(i).forEach((o) => {
        Dd({
          actionList: i[o],
          elementApi: t,
        });
      });
  }
  function Dd({ actionList: e = {}, event: t, elementApi: n }) {
    let { actionItemGroups: r, continuousParameterGroups: i } = e;
    r &&
      r.forEach((o) => {
        Fd({
          actionGroup: o,
          event: t,
          elementApi: n,
        });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Fd({
              actionGroup: s,
              event: t,
              elementApi: n,
            });
          });
        });
  }
  function Fd({ actionGroup: e, event: t, elementApi: n }) {
    let { actionItems: r } = e;
    r.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      ot(o)
        ? (s = (u) => ro(o)(u, i))
        : (s = zd({
            effect: XR,
            actionTypeId: o,
            elementApi: n,
          })),
        po({
          config: a,
          event: t,
          elementApi: n,
        }).forEach(s);
    });
  }
  function GR(e, t, n) {
    let { setStyle: r, getStyle: i } = n,
      { actionTypeId: o } = t;
    if (o === Ct) {
      let { config: a } = t;
      a.widthUnit === tt && r(e, Xe, ""), a.heightUnit === tt && r(e, Ve, "");
    }
    i(e, Ot) &&
      zd({
        effect: Wd,
        actionTypeId: o,
        elementApi: n,
      })(e);
  }
  function XR(e, t, n) {
    let { setStyle: r } = n;
    Wd(e, t, n), r(e, t, ""), t === et && r(e, Jn, "");
  }
  function Kd(e) {
    let t = 0,
      n = 0;
    return (
      e.forEach((r, i) => {
        let { config: o } = r,
          a = o.delay + o.duration;
        a >= t && ((t = a), (n = i));
      }),
      n
    );
  }
  function VR(e, t) {
    let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      n.forEach((u, l) => {
        if (r && l === 0) return;
        let { actionItems: g } = u,
          p = g[Kd(g)],
          { config: d, actionTypeId: E } = p;
        i.id === p.id && (s = a + o);
        let _ = kd(E) === co ? 0 : d.duration;
        a += d.delay + _;
      }),
      a > 0 ? an(s / a) : 0
    );
  }
  function UR({ actionList: e, actionItemId: t, rawData: n }) {
    let { actionItemGroups: r, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push(
          (0, lr.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0,
          })
        ),
        s.id === t
      );
    return (
      r && r.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: l }) => l.some(a));
        }),
      (0, lr.setIn)(n, ["actionLists"], {
        [e.id]: {
          id: e.id,
          actionItemGroups: [
            {
              actionItems: o,
            },
          ],
        },
      })
    );
  }
  function BR(e, { basedOn: t }) {
    return (e === Ce.SCROLLING_IN_VIEW && (t === qe.ELEMENT || t == null)) || (e === Ce.MOUSE_MOVE && t === qe.ELEMENT);
  }
  function HR(e, t) {
    return e + nR + t;
  }
  function kR(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function WR(e, t) {
    return so(e && e.sort(), t && t.sort());
  }
  function zR(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + uo + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
    return t + uo + n + uo + r;
  }
  var We,
    cr,
    ar,
    lr,
    qd,
    Bw,
    Hw,
    kw,
    Ww,
    zw,
    Kw,
    jw,
    Yw,
    $w,
    Qw,
    sr,
    sn,
    un,
    Xe,
    Ve,
    Gd,
    Zw,
    Jw,
    Pd,
    eR,
    Ld,
    tR,
    ur,
    Ot,
    tt,
    cn,
    nR,
    uo,
    Xd,
    co,
    lo,
    Vd,
    xt,
    wt,
    Rt,
    ln,
    Ud,
    fn,
    dn,
    Ct,
    Pt,
    Lt,
    Nt,
    fr,
    rR,
    Bd,
    fo,
    Hd,
    or,
    oR,
    sR,
    lR,
    Md,
    pR,
    gR,
    ER,
    yR,
    mR,
    go,
    TR,
    AR,
    bR,
    SR,
    CR,
    PR,
    LR,
    zd,
    Yd = ne(() => {
      "use strict";
      (We = $(ld())), (cr = $(bd())), (ar = $(wd())), (lr = $(Et()));
      ve();
      Cd();
      Ui();
      qd = $(Yi());
      io();
      er();
      ({
        BACKGROUND: Bw,
        TRANSFORM: Hw,
        TRANSLATE_3D: kw,
        SCALE_3D: Ww,
        ROTATE_X: zw,
        ROTATE_Y: Kw,
        ROTATE_Z: jw,
        SKEW: Yw,
        PRESERVE_3D: $w,
        FLEX: Qw,
        OPACITY: sr,
        FILTER: sn,
        FONT_VARIATION_SETTINGS: un,
        WIDTH: Xe,
        HEIGHT: Ve,
        BACKGROUND_COLOR: Gd,
        BORDER_COLOR: Zw,
        COLOR: Jw,
        CHILDREN: Pd,
        IMMEDIATE_CHILDREN: eR,
        SIBLINGS: Ld,
        PARENT: tR,
        DISPLAY: ur,
        WILL_CHANGE: Ot,
        AUTO: tt,
        COMMA_DELIMITER: cn,
        COLON_DELIMITER: nR,
        BAR_DELIMITER: uo,
        RENDER_TRANSFORM: Xd,
        RENDER_GENERAL: co,
        RENDER_STYLE: lo,
        RENDER_PLUGIN: Vd,
      } = ce),
        ({
          TRANSFORM_MOVE: xt,
          TRANSFORM_SCALE: wt,
          TRANSFORM_ROTATE: Rt,
          TRANSFORM_SKEW: ln,
          STYLE_OPACITY: Ud,
          STYLE_FILTER: fn,
          STYLE_FONT_VARIATION: dn,
          STYLE_SIZE: Ct,
          STYLE_BACKGROUND_COLOR: Pt,
          STYLE_BORDER: Lt,
          STYLE_TEXT_COLOR: Nt,
          GENERAL_DISPLAY: fr,
          OBJECT_VALUE: rR,
        } = pe),
        (Bd = (e) => e.trim()),
        (fo = Object.freeze({
          [Pt]: Gd,
          [Lt]: Zw,
          [Nt]: Jw,
        })),
        (Hd = Object.freeze({
          [et]: Hw,
          [Gd]: Bw,
          [sr]: sr,
          [sn]: sn,
          [Xe]: Xe,
          [Ve]: Ve,
          [un]: un,
        })),
        (or = new Map());
      oR = 1;
      sR = 1;
      lR = (e, t) => e === t;
      (Md = /px/),
        (pR = (e, t) => t.reduce((n, r) => (n[r.type] == null && (n[r.type] = TR[r.type]), n), e || {})),
        (gR = (e, t) =>
          t.reduce((n, r) => (n[r.type] == null && (n[r.type] = AR[r.type] || r.defaultValue || 0), n), e || {}));
      (ER = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (yR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (mR = (e, t, n) => {
          if (ot(e)) return Ji(e)(n, t);
          switch (e) {
            case fn: {
              let r = (0, ar.default)(n.filters, ({ type: i }) => i === t);
              return r ? r.value : 0;
            }
            case dn: {
              let r = (0, ar.default)(n.fontVariations, ({ type: i }) => i === t);
              return r ? r.value : 0;
            }
            default:
              return n[t];
          }
        });
      (go = {
        [xt]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0,
        }),
        [wt]: Object.freeze({
          xValue: 1,
          yValue: 1,
          zValue: 1,
        }),
        [Rt]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0,
        }),
        [ln]: Object.freeze({
          xValue: 0,
          yValue: 0,
        }),
      }),
        (TR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (AR = Object.freeze({
          wght: 0,
          opsz: 0,
          wdth: 0,
          slnt: 0,
        })),
        (bR = (e, t) => {
          let n = (0, ar.default)(t.filters, ({ type: r }) => r === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (SR = Object.keys(go));
      (CR = "\\(([^)]+)\\)"), (PR = /^rgb/), (LR = RegExp(`rgba?${CR}`));
      zd =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (r) => {
          switch (t) {
            case xt:
            case wt:
            case Rt:
            case ln:
              e(r, et, n);
              break;
            case fn:
              e(r, sn, n);
              break;
            case dn:
              e(r, un, n);
              break;
            case Ud:
              e(r, sr, n);
              break;
            case Ct:
              e(r, Xe, n), e(r, Ve, n);
              break;
            case Pt:
            case Lt:
            case Nt:
              e(r, fo[t], n);
              break;
            case fr:
              e(r, ur, n);
              break;
          }
        };
    });
  var ut = f((ho) => {
    "use strict";
    Object.defineProperty(ho, "__esModule", {
      value: !0,
    });
    function KR(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n],
        });
    }
    KR(ho, {
      IX2BrowserSupport: function () {
        return jR;
      },
      IX2EasingUtils: function () {
        return $R;
      },
      IX2Easings: function () {
        return YR;
      },
      IX2ElementsReducer: function () {
        return QR;
      },
      IX2VanillaPlugins: function () {
        return ZR;
      },
      IX2VanillaUtils: function () {
        return JR;
      },
    });
    var jR = Mt((er(), Me(Bf))),
      YR = Mt((Vi(), Me(on))),
      $R = Mt((Ui(), Me(Yf))),
      QR = Mt((Jf(), Me(Zf))),
      ZR = Mt((io(), Me(ud))),
      JR = Mt((Yd(), Me(jd)));
    function $d(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return ($d = function (r) {
        return r ? n : t;
      })(e);
    }
    function Mt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return {
          default: e,
        };
      var n = $d(t);
      if (n && n.has(e)) return n.get(e);
      var r = {
          __proto__: null,
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var pr,
    ze,
    eC,
    tC,
    nC,
    rC,
    iC,
    oC,
    dr,
    Qd,
    aC,
    sC,
    Eo,
    uC,
    cC,
    lC,
    fC,
    Zd,
    Jd = ne(() => {
      "use strict";
      ve();
      (pr = $(ut())),
        (ze = $(Et())),
        ({
          IX2_RAW_DATA_IMPORTED: eC,
          IX2_SESSION_STOPPED: tC,
          IX2_INSTANCE_ADDED: nC,
          IX2_INSTANCE_STARTED: rC,
          IX2_INSTANCE_REMOVED: iC,
          IX2_ANIMATION_FRAME_CHANGED: oC,
        } = se),
        ({ optimizeFloat: dr, applyEasing: Qd, createBezierEasing: aC } = pr.IX2EasingUtils),
        ({ RENDER_GENERAL: sC } = ce),
        ({ getItemConfigByKey: Eo, getRenderType: uC, getStyleProp: cC } = pr.IX2VanillaUtils),
        (lC = (e, t) => {
          let {
              position: n,
              parameterId: r,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: l,
              skipMotion: g,
              skipToValue: p,
            } = e,
            { parameters: d } = t.payload,
            E = Math.max(1 - a, 0.01),
            _ = d[r];
          _ == null && ((E = 1), (_ = s));
          let v = Math.max(_, 0) || 0,
            b = dr(v - n),
            y = g ? p : dr(n + b * E),
            O = y * 100;
          if (y === n && e.current) return e;
          let A, w, C, x;
          for (let F = 0, { length: G } = i; F < G; F++) {
            let { keyframe: U, actionItems: B } = i[F];
            if ((F === 0 && (A = B[0]), O >= U)) {
              A = B[0];
              let L = i[F + 1],
                I = L && O !== U;
              (w = I ? L.actionItems[0] : null), I && ((C = U / 100), (x = (L.keyframe - U) / 100));
            }
          }
          let D = {};
          if (A && !w)
            for (let F = 0, { length: G } = o; F < G; F++) {
              let U = o[F];
              D[U] = Eo(u, U, A.config);
            }
          else if (A && w && C !== void 0 && x !== void 0) {
            let F = (y - C) / x,
              G = A.config.easing,
              U = Qd(G, F, l);
            for (let B = 0, { length: L } = o; B < L; B++) {
              let I = o[B],
                P = Eo(u, I, A.config),
                W = (Eo(u, I, w.config) - P) * U + P;
              D[I] = W;
            }
          }
          return (0, ze.merge)(e, {
            position: y,
            current: D,
          });
        }),
        (fC = (e, t) => {
          let {
              active: n,
              origin: r,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: l,
              destinationKeys: g,
              pluginDuration: p,
              instanceDelay: d,
              customEasingFn: E,
              skipMotion: _,
            } = e,
            v = u.config.easing,
            { duration: b, delay: y } = u.config;
          p != null && (b = p), (y = d ?? y), a === sC ? (b = 0) : (o || _) && (b = y = 0);
          let { now: O } = t.payload;
          if (n && r) {
            let A = O - (i + y);
            if (s) {
              let F = O - i,
                G = b + y,
                U = dr(Math.min(Math.max(0, F / G), 1));
              e = (0, ze.set)(e, "verboseTimeElapsed", G * U);
            }
            if (A < 0) return e;
            let w = dr(Math.min(Math.max(0, A / b), 1)),
              C = Qd(v, w, E),
              x = {},
              D = null;
            return (
              g.length &&
                (D = g.reduce((F, G) => {
                  let U = l[G],
                    B = parseFloat(r[G]) || 0,
                    I = (parseFloat(U) - B) * C + B;
                  return (F[G] = I), F;
                }, {})),
              (x.current = D),
              (x.position = w),
              w === 1 && ((x.active = !1), (x.complete = !0)),
              (0, ze.merge)(e, x)
            );
          }
          return e;
        }),
        (Zd = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case eC:
              return t.payload.ixInstances || Object.freeze({});
            case tC:
              return Object.freeze({});
            case nC: {
              let {
                  instanceId: n,
                  elementId: r,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: l,
                  isCarrier: g,
                  origin: p,
                  destination: d,
                  immediate: E,
                  verbose: _,
                  continuous: v,
                  parameterId: b,
                  actionGroups: y,
                  smoothing: O,
                  restingValue: A,
                  pluginInstance: w,
                  pluginDuration: C,
                  instanceDelay: x,
                  skipMotion: D,
                  skipToValue: F,
                } = t.payload,
                { actionTypeId: G } = i,
                U = uC(G),
                B = cC(U, G),
                L = Object.keys(d).filter((P) => d[P] != null && typeof d[P] != "string"),
                { easing: I } = i.config;
              return (0, ze.set)(e, n, {
                id: n,
                elementId: r,
                active: !1,
                position: 0,
                start: 0,
                origin: p,
                destination: d,
                destinationKeys: L,
                immediate: E,
                verbose: _,
                current: null,
                actionItem: i,
                actionTypeId: G,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: l,
                renderType: U,
                isCarrier: g,
                styleProp: B,
                continuous: v,
                parameterId: b,
                actionGroups: y,
                smoothing: O,
                restingValue: A,
                pluginInstance: w,
                pluginDuration: C,
                instanceDelay: x,
                skipMotion: D,
                skipToValue: F,
                customEasingFn: Array.isArray(I) && I.length === 4 ? aC(I) : void 0,
              });
            }
            case rC: {
              let { instanceId: n, time: r } = t.payload;
              return (0, ze.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: r,
              });
            }
            case iC: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let r = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== n && (r[s] = e[s]);
              }
              return r;
            }
            case oC: {
              let n = e,
                r = Object.keys(e),
                { length: i } = r;
              for (let o = 0; o < i; o++) {
                let a = r[o],
                  s = e[a],
                  u = s.continuous ? lC : fC;
                n = (0, ze.set)(n, a, u(s, t));
              }
              return n;
            }
            default:
              return e;
          }
        });
    });
  var dC,
    pC,
    gC,
    ep,
    tp = ne(() => {
      "use strict";
      ve();
      ({ IX2_RAW_DATA_IMPORTED: dC, IX2_SESSION_STOPPED: pC, IX2_PARAMETER_CHANGED: gC } = se),
        (ep = (e = {}, t) => {
          switch (t.type) {
            case dC:
              return t.payload.ixParameters || {};
            case pC:
              return {};
            case gC: {
              let { key: n, value: r } = t.payload;
              return (e[n] = r), e;
            }
            default:
              return e;
          }
        });
    });
  var ip = {};
  me(ip, {
    default: () => EC,
  });
  var np,
    rp,
    hC,
    EC,
    op = ne(() => {
      "use strict";
      np = $(oi());
      ds();
      Ns();
      Fs();
      rp = $(ut());
      Jd();
      tp();
      ({ ixElements: hC } = rp.IX2ElementsReducer),
        (EC = (0, np.combineReducers)({
          ixData: fs,
          ixRequest: Ls,
          ixSession: Ds,
          ixElements: hC,
          ixInstances: Zd,
          ixParameters: ep,
        }));
    });
  var sp = f((K1, ap) => {
    var yC = Qe(),
      mC = ue(),
      vC = He(),
      _C = "[object String]";
    function IC(e) {
      return typeof e == "string" || (!mC(e) && vC(e) && yC(e) == _C);
    }
    ap.exports = IC;
  });
  var cp = f((j1, up) => {
    var TC = Ni(),
      AC = TC("length");
    up.exports = AC;
  });
  var fp = f((Y1, lp) => {
    var bC = "\\ud800-\\udfff",
      SC = "\\u0300-\\u036f",
      OC = "\\ufe20-\\ufe2f",
      xC = "\\u20d0-\\u20ff",
      wC = SC + OC + xC,
      RC = "\\ufe0e\\ufe0f",
      CC = "\\u200d",
      PC = RegExp("[" + CC + bC + wC + RC + "]");
    function LC(e) {
      return PC.test(e);
    }
    lp.exports = LC;
  });
  var _p = f(($1, vp) => {
    var pp = "\\ud800-\\udfff",
      NC = "\\u0300-\\u036f",
      MC = "\\ufe20-\\ufe2f",
      DC = "\\u20d0-\\u20ff",
      FC = NC + MC + DC,
      qC = "\\ufe0e\\ufe0f",
      GC = "[" + pp + "]",
      yo = "[" + FC + "]",
      mo = "\\ud83c[\\udffb-\\udfff]",
      XC = "(?:" + yo + "|" + mo + ")",
      gp = "[^" + pp + "]",
      hp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Ep = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      VC = "\\u200d",
      yp = XC + "?",
      mp = "[" + qC + "]?",
      UC = "(?:" + VC + "(?:" + [gp, hp, Ep].join("|") + ")" + mp + yp + ")*",
      BC = mp + yp + UC,
      HC = "(?:" + [gp + yo + "?", yo, hp, Ep, GC].join("|") + ")",
      dp = RegExp(mo + "(?=" + mo + ")|" + HC + BC, "g");
    function kC(e) {
      for (var t = (dp.lastIndex = 0); dp.test(e); ) ++t;
      return t;
    }
    vp.exports = kC;
  });
  var Tp = f((Q1, Ip) => {
    var WC = cp(),
      zC = fp(),
      KC = _p();
    function jC(e) {
      return zC(e) ? KC(e) : WC(e);
    }
    Ip.exports = jC;
  });
  var bp = f((Z1, Ap) => {
    var YC = kn(),
      $C = Wn(),
      QC = rt(),
      ZC = sp(),
      JC = Tp(),
      eP = "[object Map]",
      tP = "[object Set]";
    function nP(e) {
      if (e == null) return 0;
      if (QC(e)) return ZC(e) ? JC(e) : e.length;
      var t = $C(e);
      return t == eP || t == tP ? e.size : YC(e).length;
    }
    Ap.exports = nP;
  });
  var Op = f((J1, Sp) => {
    var rP = "Expected a function";
    function iP(e) {
      if (typeof e != "function") throw new TypeError(rP);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Sp.exports = iP;
  });
  var vo = f((eG, xp) => {
    var oP = Ze(),
      aP = (function () {
        try {
          var e = oP(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    xp.exports = aP;
  });
  var _o = f((tG, Rp) => {
    var wp = vo();
    function sP(e, t, n) {
      t == "__proto__" && wp
        ? wp(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0,
          })
        : (e[t] = n);
    }
    Rp.exports = sP;
  });
  var Pp = f((nG, Cp) => {
    var uP = _o(),
      cP = Mn(),
      lP = Object.prototype,
      fP = lP.hasOwnProperty;
    function dP(e, t, n) {
      var r = e[t];
      (!(fP.call(e, t) && cP(r, n)) || (n === void 0 && !(t in e))) && uP(e, t, n);
    }
    Cp.exports = dP;
  });
  var Mp = f((rG, Np) => {
    var pP = Pp(),
      gP = tn(),
      hP = Vn(),
      Lp = Ge(),
      EP = bt();
    function yP(e, t, n, r) {
      if (!Lp(e)) return e;
      t = gP(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = EP(t[i]),
          l = n;
        if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
        if (i != a) {
          var g = s[u];
          (l = r ? r(g, u, s) : void 0), l === void 0 && (l = Lp(g) ? g : hP(t[i + 1]) ? [] : {});
        }
        pP(s, u, l), (s = s[u]);
      }
      return e;
    }
    Np.exports = yP;
  });
  var Fp = f((iG, Dp) => {
    var mP = jn(),
      vP = Mp(),
      _P = tn();
    function IP(e, t, n) {
      for (var r = -1, i = t.length, o = {}; ++r < i; ) {
        var a = t[r],
          s = mP(e, a);
        n(s, a) && vP(o, _P(a, e), s);
      }
      return o;
    }
    Dp.exports = IP;
  });
  var Gp = f((oG, qp) => {
    var TP = Gn(),
      AP = zr(),
      bP = mi(),
      SP = yi(),
      OP = Object.getOwnPropertySymbols,
      xP = OP
        ? function (e) {
            for (var t = []; e; ) TP(t, bP(e)), (e = AP(e));
            return t;
          }
        : SP;
    qp.exports = xP;
  });
  var Vp = f((aG, Xp) => {
    function wP(e) {
      var t = [];
      if (e != null) for (var n in Object(e)) t.push(n);
      return t;
    }
    Xp.exports = wP;
  });
  var Bp = f((sG, Up) => {
    var RP = Ge(),
      CP = Hn(),
      PP = Vp(),
      LP = Object.prototype,
      NP = LP.hasOwnProperty;
    function MP(e) {
      if (!RP(e)) return PP(e);
      var t = CP(e),
        n = [];
      for (var r in e) (r == "constructor" && (t || !NP.call(e, r))) || n.push(r);
      return n;
    }
    Up.exports = MP;
  });
  var kp = f((uG, Hp) => {
    var DP = _i(),
      FP = Bp(),
      qP = rt();
    function GP(e) {
      return qP(e) ? DP(e, !0) : FP(e);
    }
    Hp.exports = GP;
  });
  var zp = f((cG, Wp) => {
    var XP = Ei(),
      VP = Gp(),
      UP = kp();
    function BP(e) {
      return XP(e, UP, VP);
    }
    Wp.exports = BP;
  });
  var jp = f((lG, Kp) => {
    var HP = Li(),
      kP = Je(),
      WP = Fp(),
      zP = zp();
    function KP(e, t) {
      if (e == null) return {};
      var n = HP(zP(e), function (r) {
        return [r];
      });
      return (
        (t = kP(t)),
        WP(e, n, function (r, i) {
          return t(r, i[0]);
        })
      );
    }
    Kp.exports = KP;
  });
  var $p = f((fG, Yp) => {
    var jP = Je(),
      YP = Op(),
      $P = jp();
    function QP(e, t) {
      return $P(e, YP(jP(t)));
    }
    Yp.exports = QP;
  });
  var Zp = f((dG, Qp) => {
    var ZP = kn(),
      JP = Wn(),
      eL = Yt(),
      tL = ue(),
      nL = rt(),
      rL = Xn(),
      iL = Hn(),
      oL = Bn(),
      aL = "[object Map]",
      sL = "[object Set]",
      uL = Object.prototype,
      cL = uL.hasOwnProperty;
    function lL(e) {
      if (e == null) return !0;
      if (nL(e) && (tL(e) || typeof e == "string" || typeof e.splice == "function" || rL(e) || oL(e) || eL(e)))
        return !e.length;
      var t = JP(e);
      if (t == aL || t == sL) return !e.size;
      if (iL(e)) return !ZP(e).length;
      for (var n in e) if (cL.call(e, n)) return !1;
      return !0;
    }
    Qp.exports = lL;
  });
  var eg = f((pG, Jp) => {
    var fL = _o(),
      dL = oo(),
      pL = Je();
    function gL(e, t) {
      var n = {};
      return (
        (t = pL(t, 3)),
        dL(e, function (r, i, o) {
          fL(n, i, t(r, i, o));
        }),
        n
      );
    }
    Jp.exports = gL;
  });
  var ng = f((gG, tg) => {
    function hL(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; );
      return e;
    }
    tg.exports = hL;
  });
  var ig = f((hG, rg) => {
    var EL = $n();
    function yL(e) {
      return typeof e == "function" ? e : EL;
    }
    rg.exports = yL;
  });
  var ag = f((EG, og) => {
    var mL = ng(),
      vL = ao(),
      _L = ig(),
      IL = ue();
    function TL(e, t) {
      var n = IL(e) ? mL : vL;
      return n(e, _L(t));
    }
    og.exports = TL;
  });
  var ug = f((yG, sg) => {
    var AL = Re(),
      bL = function () {
        return AL.Date.now();
      };
    sg.exports = bL;
  });
  var fg = f((mG, lg) => {
    var SL = Ge(),
      Io = ug(),
      cg = Qn(),
      OL = "Expected a function",
      xL = Math.max,
      wL = Math.min;
    function RL(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = 0,
        g = !1,
        p = !1,
        d = !0;
      if (typeof e != "function") throw new TypeError(OL);
      (t = cg(t) || 0),
        SL(n) &&
          ((g = !!n.leading),
          (p = "maxWait" in n),
          (o = p ? xL(cg(n.maxWait) || 0, t) : o),
          (d = "trailing" in n ? !!n.trailing : d));
      function E(x) {
        var D = r,
          F = i;
        return (r = i = void 0), (l = x), (a = e.apply(F, D)), a;
      }
      function _(x) {
        return (l = x), (s = setTimeout(y, t)), g ? E(x) : a;
      }
      function v(x) {
        var D = x - u,
          F = x - l,
          G = t - D;
        return p ? wL(G, o - F) : G;
      }
      function b(x) {
        var D = x - u,
          F = x - l;
        return u === void 0 || D >= t || D < 0 || (p && F >= o);
      }
      function y() {
        var x = Io();
        if (b(x)) return O(x);
        s = setTimeout(y, v(x));
      }
      function O(x) {
        return (s = void 0), d && r ? E(x) : ((r = i = void 0), a);
      }
      function A() {
        s !== void 0 && clearTimeout(s), (l = 0), (r = u = i = s = void 0);
      }
      function w() {
        return s === void 0 ? a : O(Io());
      }
      function C() {
        var x = Io(),
          D = b(x);
        if (((r = arguments), (i = this), (u = x), D)) {
          if (s === void 0) return _(u);
          if (p) return clearTimeout(s), (s = setTimeout(y, t)), E(u);
        }
        return s === void 0 && (s = setTimeout(y, t)), a;
      }
      return (C.cancel = A), (C.flush = w), C;
    }
    lg.exports = RL;
  });
  var pg = f((vG, dg) => {
    var CL = fg(),
      PL = Ge(),
      LL = "Expected a function";
    function NL(e, t, n) {
      var r = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(LL);
      return (
        PL(n) && ((r = "leading" in n ? !!n.leading : r), (i = "trailing" in n ? !!n.trailing : i)),
        CL(e, t, {
          leading: r,
          maxWait: t,
          trailing: i,
        })
      );
    }
    dg.exports = NL;
  });
  var hg = {};
  me(hg, {
    actionListPlaybackChanged: () => Ft,
    animationFrameChanged: () => hr,
    clearRequested: () => iN,
    elementStateChanged: () => Ro,
    eventListenerAdded: () => gr,
    eventStateChanged: () => Oo,
    instanceAdded: () => xo,
    instanceRemoved: () => wo,
    instanceStarted: () => Er,
    mediaQueriesDefined: () => Po,
    parameterChanged: () => Dt,
    playbackRequested: () => nN,
    previewRequested: () => tN,
    rawDataImported: () => To,
    sessionInitialized: () => Ao,
    sessionStarted: () => bo,
    sessionStopped: () => So,
    stopRequested: () => rN,
    testFrameRendered: () => oN,
    viewportWidthChanged: () => Co,
  });
  var gg,
    ML,
    DL,
    FL,
    qL,
    GL,
    XL,
    VL,
    UL,
    BL,
    HL,
    kL,
    WL,
    zL,
    KL,
    jL,
    YL,
    $L,
    QL,
    ZL,
    JL,
    eN,
    To,
    Ao,
    bo,
    So,
    tN,
    nN,
    rN,
    iN,
    gr,
    oN,
    Oo,
    hr,
    Dt,
    xo,
    Er,
    wo,
    Ro,
    Ft,
    Co,
    Po,
    yr = ne(() => {
      "use strict";
      ve();
      (gg = $(ut())),
        ({
          IX2_RAW_DATA_IMPORTED: ML,
          IX2_SESSION_INITIALIZED: DL,
          IX2_SESSION_STARTED: FL,
          IX2_SESSION_STOPPED: qL,
          IX2_PREVIEW_REQUESTED: GL,
          IX2_PLAYBACK_REQUESTED: XL,
          IX2_STOP_REQUESTED: VL,
          IX2_CLEAR_REQUESTED: UL,
          IX2_EVENT_LISTENER_ADDED: BL,
          IX2_TEST_FRAME_RENDERED: HL,
          IX2_EVENT_STATE_CHANGED: kL,
          IX2_ANIMATION_FRAME_CHANGED: WL,
          IX2_PARAMETER_CHANGED: zL,
          IX2_INSTANCE_ADDED: KL,
          IX2_INSTANCE_STARTED: jL,
          IX2_INSTANCE_REMOVED: YL,
          IX2_ELEMENT_STATE_CHANGED: $L,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: QL,
          IX2_VIEWPORT_WIDTH_CHANGED: ZL,
          IX2_MEDIA_QUERIES_DEFINED: JL,
        } = se),
        ({ reifyState: eN } = gg.IX2VanillaUtils),
        (To = (e) => ({
          type: ML,
          payload: {
            ...eN(e),
          },
        })),
        (Ao = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: DL,
          payload: {
            hasBoundaryNodes: e,
            reducedMotion: t,
          },
        })),
        (bo = () => ({
          type: FL,
        })),
        (So = () => ({
          type: qL,
        })),
        (tN = ({ rawData: e, defer: t }) => ({
          type: GL,
          payload: {
            defer: t,
            rawData: e,
          },
        })),
        (nN = ({
          actionTypeId: e = pe.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: r,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: XL,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: a,
            eventId: r,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (rN = (e) => ({
          type: VL,
          payload: {
            actionListId: e,
          },
        })),
        (iN = () => ({
          type: UL,
        })),
        (gr = (e, t) => ({
          type: BL,
          payload: {
            target: e,
            listenerParams: t,
          },
        })),
        (oN = (e = 1) => ({
          type: HL,
          payload: {
            step: e,
          },
        })),
        (Oo = (e, t) => ({
          type: kL,
          payload: {
            stateKey: e,
            newState: t,
          },
        })),
        (hr = (e, t) => ({
          type: WL,
          payload: {
            now: e,
            parameters: t,
          },
        })),
        (Dt = (e, t) => ({
          type: zL,
          payload: {
            key: e,
            value: t,
          },
        })),
        (xo = (e) => ({
          type: KL,
          payload: {
            ...e,
          },
        })),
        (Er = (e, t) => ({
          type: jL,
          payload: {
            instanceId: e,
            time: t,
          },
        })),
        (wo = (e) => ({
          type: YL,
          payload: {
            instanceId: e,
          },
        })),
        (Ro = (e, t, n, r) => ({
          type: $L,
          payload: {
            elementId: e,
            actionTypeId: t,
            current: n,
            actionItem: r,
          },
        })),
        (Ft = ({ actionListId: e, isPlaying: t }) => ({
          type: QL,
          payload: {
            actionListId: e,
            isPlaying: t,
          },
        })),
        (Co = ({ width: e, mediaQueries: t }) => ({
          type: ZL,
          payload: {
            width: e,
            mediaQueries: t,
          },
        })),
        (Po = () => ({
          type: JL,
        }));
    });
  var he = {};
  me(he, {
    elementContains: () => Mo,
    getChildElements: () => hN,
    getClosestElement: () => pn,
    getProperty: () => lN,
    getQuerySelector: () => No,
    getRefType: () => Do,
    getSiblingElements: () => EN,
    getStyle: () => cN,
    getValidDocument: () => dN,
    isSiblingNode: () => gN,
    matchSelector: () => fN,
    queryDocument: () => pN,
    setStyle: () => uN,
  });
  function uN(e, t, n) {
    e.style[t] = n;
  }
  function cN(e, t) {
    return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t];
  }
  function lN(e, t) {
    return e[t];
  }
  function fN(e) {
    return (t) => t[Lo](e);
  }
  function No({ id: e, selector: t }) {
    if (e) {
      let n = e;
      if (e.indexOf(Eg) !== -1) {
        let r = e.split(Eg),
          i = r[0];
        if (((n = r[1]), i !== document.documentElement.getAttribute(mg))) return null;
      }
      return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
    }
    return t;
  }
  function dN(e) {
    return e == null || e === document.documentElement.getAttribute(mg) ? document : null;
  }
  function pN(e, t) {
    return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e));
  }
  function Mo(e, t) {
    return e.contains(t);
  }
  function gN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function hN(e) {
    let t = [];
    for (let n = 0, { length: r } = e || []; n < r; n++) {
      let { children: i } = e[n],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function EN(e = []) {
    let t = [],
      n = [];
    for (let r = 0, { length: i } = e; r < i; r++) {
      let { parentNode: o } = e[r];
      if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1) continue;
      n.push(o);
      let a = o.firstElementChild;
      for (; a != null; ) e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function Do(e) {
    return e != null && typeof e == "object" ? (e instanceof Element ? aN : sN) : null;
  }
  var yg,
    Lo,
    Eg,
    aN,
    sN,
    mg,
    pn,
    vg = ne(() => {
      "use strict";
      yg = $(ut());
      ve();
      ({ ELEMENT_MATCHES: Lo } = yg.IX2BrowserSupport),
        ({ IX2_ID_DELIMITER: Eg, HTML_ELEMENT: aN, PLAIN_OBJECT: sN, WF_PAGE: mg } = ce);
      pn = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[Lo] && n[Lo](t)) return n;
              n = n.parentNode;
            } while (n != null);
            return null;
          };
    });
  var Fo = f((TG, Ig) => {
    var yN = Ge(),
      _g = Object.create,
      mN = (function () {
        function e() {}
        return function (t) {
          if (!yN(t)) return {};
          if (_g) return _g(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    Ig.exports = mN;
  });
  var mr = f((AG, Tg) => {
    function vN() {}
    Tg.exports = vN;
  });
  var _r = f((bG, Ag) => {
    var _N = Fo(),
      IN = mr();
    function vr(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    vr.prototype = _N(IN.prototype);
    vr.prototype.constructor = vr;
    Ag.exports = vr;
  });
  var xg = f((SG, Og) => {
    var bg = pt(),
      TN = Yt(),
      AN = ue(),
      Sg = bg ? bg.isConcatSpreadable : void 0;
    function bN(e) {
      return AN(e) || TN(e) || !!(Sg && e && e[Sg]);
    }
    Og.exports = bN;
  });
  var Cg = f((OG, Rg) => {
    var SN = Gn(),
      ON = xg();
    function wg(e, t, n, r, i) {
      var o = -1,
        a = e.length;
      for (n || (n = ON), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && n(s) ? (t > 1 ? wg(s, t - 1, n, r, i) : SN(i, s)) : r || (i[i.length] = s);
      }
      return i;
    }
    Rg.exports = wg;
  });
  var Lg = f((xG, Pg) => {
    var xN = Cg();
    function wN(e) {
      var t = e == null ? 0 : e.length;
      return t ? xN(e, 1) : [];
    }
    Pg.exports = wN;
  });
  var Mg = f((wG, Ng) => {
    function RN(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    Ng.exports = RN;
  });
  var qg = f((RG, Fg) => {
    var CN = Mg(),
      Dg = Math.max;
    function PN(e, t, n) {
      return (
        (t = Dg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (var r = arguments, i = -1, o = Dg(r.length - t, 0), a = Array(o); ++i < o; ) a[i] = r[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = r[i];
          return (s[t] = n(a)), CN(e, this, s);
        }
      );
    }
    Fg.exports = PN;
  });
  var Xg = f((CG, Gg) => {
    function LN(e) {
      return function () {
        return e;
      };
    }
    Gg.exports = LN;
  });
  var Bg = f((PG, Ug) => {
    var NN = Xg(),
      Vg = vo(),
      MN = $n(),
      DN = Vg
        ? function (e, t) {
            return Vg(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: NN(t),
              writable: !0,
            });
          }
        : MN;
    Ug.exports = DN;
  });
  var kg = f((LG, Hg) => {
    var FN = 800,
      qN = 16,
      GN = Date.now;
    function XN(e) {
      var t = 0,
        n = 0;
      return function () {
        var r = GN(),
          i = qN - (r - n);
        if (((n = r), i > 0)) {
          if (++t >= FN) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Hg.exports = XN;
  });
  var zg = f((NG, Wg) => {
    var VN = Bg(),
      UN = kg(),
      BN = UN(VN);
    Wg.exports = BN;
  });
  var jg = f((MG, Kg) => {
    var HN = Lg(),
      kN = qg(),
      WN = zg();
    function zN(e) {
      return WN(kN(e, void 0, HN), e + "");
    }
    Kg.exports = zN;
  });
  var Qg = f((DG, $g) => {
    var Yg = Ii(),
      KN = Yg && new Yg();
    $g.exports = KN;
  });
  var Jg = f((FG, Zg) => {
    function jN() {}
    Zg.exports = jN;
  });
  var qo = f((qG, th) => {
    var eh = Qg(),
      YN = Jg(),
      $N = eh
        ? function (e) {
            return eh.get(e);
          }
        : YN;
    th.exports = $N;
  });
  var rh = f((GG, nh) => {
    var QN = {};
    nh.exports = QN;
  });
  var Go = f((XG, oh) => {
    var ih = rh(),
      ZN = Object.prototype,
      JN = ZN.hasOwnProperty;
    function eM(e) {
      for (var t = e.name + "", n = ih[t], r = JN.call(ih, t) ? n.length : 0; r--; ) {
        var i = n[r],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    oh.exports = eM;
  });
  var Tr = f((VG, ah) => {
    var tM = Fo(),
      nM = mr(),
      rM = 4294967295;
    function Ir(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = rM),
        (this.__views__ = []);
    }
    Ir.prototype = tM(nM.prototype);
    Ir.prototype.constructor = Ir;
    ah.exports = Ir;
  });
  var uh = f((UG, sh) => {
    function iM(e, t) {
      var n = -1,
        r = e.length;
      for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
      return t;
    }
    sh.exports = iM;
  });
  var lh = f((BG, ch) => {
    var oM = Tr(),
      aM = _r(),
      sM = uh();
    function uM(e) {
      if (e instanceof oM) return e.clone();
      var t = new aM(e.__wrapped__, e.__chain__);
      return (t.__actions__ = sM(e.__actions__)), (t.__index__ = e.__index__), (t.__values__ = e.__values__), t;
    }
    ch.exports = uM;
  });
  var ph = f((HG, dh) => {
    var cM = Tr(),
      fh = _r(),
      lM = mr(),
      fM = ue(),
      dM = He(),
      pM = lh(),
      gM = Object.prototype,
      hM = gM.hasOwnProperty;
    function Ar(e) {
      if (dM(e) && !fM(e) && !(e instanceof cM)) {
        if (e instanceof fh) return e;
        if (hM.call(e, "__wrapped__")) return pM(e);
      }
      return new fh(e);
    }
    Ar.prototype = lM.prototype;
    Ar.prototype.constructor = Ar;
    dh.exports = Ar;
  });
  var hh = f((kG, gh) => {
    var EM = Tr(),
      yM = qo(),
      mM = Go(),
      vM = ph();
    function _M(e) {
      var t = mM(e),
        n = vM[t];
      if (typeof n != "function" || !(t in EM.prototype)) return !1;
      if (e === n) return !0;
      var r = yM(n);
      return !!r && e === r[0];
    }
    gh.exports = _M;
  });
  var vh = f((WG, mh) => {
    var Eh = _r(),
      IM = jg(),
      TM = qo(),
      Xo = Go(),
      AM = ue(),
      yh = hh(),
      bM = "Expected a function",
      SM = 8,
      OM = 32,
      xM = 128,
      wM = 256;
    function RM(e) {
      return IM(function (t) {
        var n = t.length,
          r = n,
          i = Eh.prototype.thru;
        for (e && t.reverse(); r--; ) {
          var o = t[r];
          if (typeof o != "function") throw new TypeError(bM);
          if (i && !a && Xo(o) == "wrapper") var a = new Eh([], !0);
        }
        for (r = a ? r : n; ++r < n; ) {
          o = t[r];
          var s = Xo(o),
            u = s == "wrapper" ? TM(o) : void 0;
          u && yh(u[0]) && u[1] == (xM | SM | OM | wM) && !u[4].length && u[9] == 1
            ? (a = a[Xo(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && yh(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var l = arguments,
            g = l[0];
          if (a && l.length == 1 && AM(g)) return a.plant(g).value();
          for (var p = 0, d = n ? t[p].apply(this, l) : g; ++p < n; ) d = t[p].call(this, d);
          return d;
        };
      });
    }
    mh.exports = RM;
  });
  var Ih = f((zG, _h) => {
    var CM = vh(),
      PM = CM();
    _h.exports = PM;
  });
  var Ah = f((KG, Th) => {
    function LM(e, t, n) {
      return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e;
    }
    Th.exports = LM;
  });
  var Sh = f((jG, bh) => {
    var NM = Ah(),
      Vo = Qn();
    function MM(e, t, n) {
      return (
        n === void 0 && ((n = t), (t = void 0)),
        n !== void 0 && ((n = Vo(n)), (n = n === n ? n : 0)),
        t !== void 0 && ((t = Vo(t)), (t = t === t ? t : 0)),
        NM(Vo(e), t, n)
      );
    }
    bh.exports = MM;
  });
  var Mh,
    Dh,
    Fh,
    qh,
    DM,
    FM,
    qM,
    GM,
    XM,
    VM,
    UM,
    BM,
    HM,
    kM,
    WM,
    zM,
    KM,
    jM,
    YM,
    Gh,
    Xh,
    $M,
    QM,
    ZM,
    Vh,
    JM,
    eD,
    Uh,
    tD,
    Uo,
    Bh,
    Oh,
    xh,
    Hh,
    hn,
    nD,
    Ue,
    kh,
    rD,
    Ie,
    Le,
    En,
    Wh,
    Bo,
    wh,
    Ho,
    iD,
    gn,
    oD,
    aD,
    sD,
    zh,
    Rh,
    uD,
    Ch,
    cD,
    lD,
    fD,
    Ph,
    br,
    Sr,
    Lh,
    Nh,
    Kh,
    jh = ne(() => {
      "use strict";
      (Mh = $(Ih())), (Dh = $(Yn())), (Fh = $(Sh()));
      ve();
      ko();
      yr();
      (qh = $(ut())),
        ({
          MOUSE_CLICK: DM,
          MOUSE_SECOND_CLICK: FM,
          MOUSE_DOWN: qM,
          MOUSE_UP: GM,
          MOUSE_OVER: XM,
          MOUSE_OUT: VM,
          DROPDOWN_CLOSE: UM,
          DROPDOWN_OPEN: BM,
          SLIDER_ACTIVE: HM,
          SLIDER_INACTIVE: kM,
          TAB_ACTIVE: WM,
          TAB_INACTIVE: zM,
          NAVBAR_CLOSE: KM,
          NAVBAR_OPEN: jM,
          MOUSE_MOVE: YM,
          PAGE_SCROLL_DOWN: Gh,
          SCROLL_INTO_VIEW: Xh,
          SCROLL_OUT_OF_VIEW: $M,
          PAGE_SCROLL_UP: QM,
          SCROLLING_IN_VIEW: ZM,
          PAGE_FINISH: Vh,
          ECOMMERCE_CART_CLOSE: JM,
          ECOMMERCE_CART_OPEN: eD,
          PAGE_START: Uh,
          PAGE_SCROLL: tD,
        } = Ce),
        (Uo = "COMPONENT_ACTIVE"),
        (Bh = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Oh } = ce),
        ({ getNamespacedParameterId: xh } = qh.IX2VanillaUtils),
        (Hh = (e) => (t) => (typeof t == "object" && e(t) ? !0 : t)),
        (hn = Hh(({ element: e, nativeEvent: t }) => e === t.target)),
        (nD = Hh(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (Ue = (0, Mh.default)([hn, nD])),
        (kh = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: r } = n,
              i = r[t];
            if (i && !iD[i.eventTypeId]) return i;
          }
          return null;
        }),
        (rD = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: r } = n.config;
          return !!kh(e, r);
        }),
        (Ie = ({ store: e, event: t, element: n, eventStateKey: r }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            l = kh(e, u);
          return (
            l &&
              qt({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + Oh + r.split(Oh)[1],
                actionListId: (0, Dh.default)(l, "action.config.actionListId"),
              }),
            qt({
              store: e,
              eventId: a,
              eventTarget: n,
              eventStateKey: r,
              actionListId: s,
            }),
            yn({
              store: e,
              eventId: a,
              eventTarget: n,
              eventStateKey: r,
              actionListId: s,
            }),
            i
          );
        }),
        (Le = (e, t) => (n, r) => (e(n, r) === !0 ? t(n, r) : r)),
        (En = {
          handler: Le(Ue, Ie),
        }),
        (Wh = {
          ...En,
          types: [Uo, Bh].join(" "),
        }),
        (Bo = [
          {
            target: window,
            types: "resize orientationchange",
            throttle: !0,
          },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (wh = "mouseover mouseout"),
        (Ho = {
          types: Bo,
        }),
        (iD = {
          PAGE_START: Uh,
          PAGE_FINISH: Vh,
        }),
        (gn = (() => {
          let e = window.pageXOffset !== void 0,
            n = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : n.scrollLeft,
            scrollTop: e ? window.pageYOffset : n.scrollTop,
            stiffScrollTop: (0, Fh.default)(
              e ? window.pageYOffset : n.scrollTop,
              0,
              n.scrollHeight - window.innerHeight
            ),
            scrollWidth: n.scrollWidth,
            scrollHeight: n.scrollHeight,
            clientWidth: n.clientWidth,
            clientHeight: n.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (oD = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)),
        (aD = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: r, relatedTarget: i } = t,
            o = e.contains(r);
          if (n === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(n === "mouseout" && o && a);
        }),
        (sD = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: r, clientHeight: i } = gn(),
            o = n.scrollOffsetValue,
            u = n.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return oD(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: r,
            bottom: i - u,
          });
        }),
        (zh = (e) => (t, n) => {
          let { type: r } = t.nativeEvent,
            i = [Uo, Bh].indexOf(r) !== -1 ? r === Uo : n.isActive,
            o = {
              ...n,
              isActive: i,
            };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        }),
        (Rh = (e) => (t, n) => {
          let r = {
            elementHovered: aD(t),
          };
          return ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r)) || r;
        }),
        (uD = (e) => (t, n) => {
          let r = {
            ...n,
            elementVisible: sD(t),
          };
          return ((n ? r.elementVisible !== n.elementVisible : r.elementVisible) && e(t, r)) || r;
        }),
        (Ch =
          (e) =>
          (t, n = {}) => {
            let { stiffScrollTop: r, scrollHeight: i, innerHeight: o } = gn(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: l } = a,
              g = l === "PX",
              p = i - o,
              d = Number((r / p).toFixed(2));
            if (n && n.percentTop === d) return n;
            let E = (g ? u : (o * (u || 0)) / 100) / p,
              _,
              v,
              b = 0;
            n && ((_ = d > n.percentTop), (v = n.scrollingDown !== _), (b = v ? d : n.anchorTop));
            let y = s === Gh ? d >= b + E : d <= b - E,
              O = {
                ...n,
                percentTop: d,
                inBounds: y,
                anchorTop: b,
                scrollingDown: _,
              };
            return (n && y && (v || O.inBounds !== n.inBounds) && e(t, O)) || O;
          }),
        (cD = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom),
        (lD = (e) => (t, n) => {
          let r = {
            finished: document.readyState === "complete",
          };
          return r.finished && !(n && n.finshed) && e(t), r;
        }),
        (fD = (e) => (t, n) => {
          let r = {
            started: !0,
          };
          return n || e(t), r;
        }),
        (Ph =
          (e) =>
          (
            t,
            n = {
              clickCount: 0,
            }
          ) => {
            let r = {
              clickCount: (n.clickCount % 2) + 1,
            };
            return (r.clickCount !== n.clickCount && e(t, r)) || r;
          }),
        (br = (e = !0) => ({
          ...Wh,
          handler: Le(
            e ? Ue : hn,
            zh((t, n) => (n.isActive ? En.handler(t, n) : n))
          ),
        })),
        (Sr = (e = !0) => ({
          ...Wh,
          handler: Le(
            e ? Ue : hn,
            zh((t, n) => (n.isActive ? n : En.handler(t, n)))
          ),
        })),
        (Lh = {
          ...Ho,
          handler: uD((e, t) => {
            let { elementVisible: n } = t,
              { event: r, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[r.action.config.autoStopEventId] && t.triggered
              ? t
              : (r.eventTypeId === Xh) === n
                ? (Ie(e),
                  {
                    ...t,
                    triggered: !0,
                  })
                : t;
          }),
        }),
        (Nh = 0.05),
        (Kh = {
          [HM]: br(),
          [kM]: Sr(),
          [BM]: br(),
          [UM]: Sr(),
          [jM]: br(!1),
          [KM]: Sr(!1),
          [WM]: br(),
          [zM]: Sr(),
          [eD]: {
            types: "ecommerce-cart-open",
            handler: Le(Ue, Ie),
          },
          [JM]: {
            types: "ecommerce-cart-close",
            handler: Le(Ue, Ie),
          },
          [DM]: {
            types: "click",
            handler: Le(
              Ue,
              Ph((e, { clickCount: t }) => {
                rD(e) ? t === 1 && Ie(e) : Ie(e);
              })
            ),
          },
          [FM]: {
            types: "click",
            handler: Le(
              Ue,
              Ph((e, { clickCount: t }) => {
                t === 2 && Ie(e);
              })
            ),
          },
          [qM]: {
            ...En,
            types: "mousedown",
          },
          [GM]: {
            ...En,
            types: "mouseup",
          },
          [XM]: {
            types: wh,
            handler: Le(
              Ue,
              Rh((e, t) => {
                t.elementHovered && Ie(e);
              })
            ),
          },
          [VM]: {
            types: wh,
            handler: Le(
              Ue,
              Rh((e, t) => {
                t.elementHovered || Ie(e);
              })
            ),
          },
          [YM]: {
            types: "mousemove mouseout scroll",
            handler: (
              { store: e, element: t, eventConfig: n, nativeEvent: r, eventStateKey: i },
              o = {
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
              }
            ) => {
              let { basedOn: a, selectedAxis: s, continuousParameterGroupId: u, reverse: l, restingState: g = 0 } = n,
                { clientX: p = o.clientX, clientY: d = o.clientY, pageX: E = o.pageX, pageY: _ = o.pageY } = r,
                v = s === "X_AXIS",
                b = r.type === "mouseout",
                y = g / 100,
                O = u,
                A = !1;
              switch (a) {
                case qe.VIEWPORT: {
                  y = v
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(d, window.innerHeight) / window.innerHeight;
                  break;
                }
                case qe.PAGE: {
                  let { scrollLeft: w, scrollTop: C, scrollWidth: x, scrollHeight: D } = gn();
                  y = v ? Math.min(w + E, x) / x : Math.min(C + _, D) / D;
                  break;
                }
                case qe.ELEMENT:
                default: {
                  O = xh(i, u);
                  let w = r.type.indexOf("mouse") === 0;
                  if (
                    w &&
                    Ue({
                      element: t,
                      nativeEvent: r,
                    }) !== !0
                  )
                    break;
                  let C = t.getBoundingClientRect(),
                    { left: x, top: D, width: F, height: G } = C;
                  if (
                    !w &&
                    !cD(
                      {
                        left: p,
                        top: d,
                      },
                      C
                    )
                  )
                    break;
                  (A = !0), (y = v ? (p - x) / F : (d - D) / G);
                  break;
                }
              }
              return (
                b && (y > 1 - Nh || y < Nh) && (y = Math.round(y)),
                (a !== qe.ELEMENT || A || A !== o.elementHovered) && ((y = l ? 1 - y : y), e.dispatch(Dt(O, y))),
                {
                  elementHovered: A,
                  clientX: p,
                  clientY: d,
                  pageX: E,
                  pageY: _,
                }
              );
            },
          },
          [tD]: {
            types: Bo,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: r } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = gn(),
                s = i / (o - a);
              (s = r ? 1 - s : s), e.dispatch(Dt(n, s));
            },
          },
          [ZM]: {
            types: Bo,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: r },
              i = {
                scrollPercent: 0,
              }
            ) => {
              let { scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: u, clientHeight: l } = gn(),
                {
                  basedOn: g,
                  selectedAxis: p,
                  continuousParameterGroupId: d,
                  startsEntering: E,
                  startsExiting: _,
                  addEndOffset: v,
                  addStartOffset: b,
                  addOffsetValue: y = 0,
                  endOffsetValue: O = 0,
                } = n,
                A = p === "X_AXIS";
              if (g === qe.VIEWPORT) {
                let w = A ? o / s : a / u;
                return (
                  w !== i.scrollPercent && t.dispatch(Dt(d, w)),
                  {
                    scrollPercent: w,
                  }
                );
              } else {
                let w = xh(r, d),
                  C = e.getBoundingClientRect(),
                  x = (b ? y : 0) / 100,
                  D = (v ? O : 0) / 100;
                (x = E ? x : 1 - x), (D = _ ? D : 1 - D);
                let F = C.top + Math.min(C.height * x, l),
                  U = C.top + C.height * D - F,
                  B = Math.min(l + U, u),
                  I = Math.min(Math.max(0, l - F), B) / B;
                return (
                  I !== i.scrollPercent && t.dispatch(Dt(w, I)),
                  {
                    scrollPercent: I,
                  }
                );
              }
            },
          },
          [Xh]: Lh,
          [$M]: Lh,
          [Gh]: {
            ...Ho,
            handler: Ch((e, t) => {
              t.scrollingDown && Ie(e);
            }),
          },
          [QM]: {
            ...Ho,
            handler: Ch((e, t) => {
              t.scrollingDown || Ie(e);
            }),
          },
          [Vh]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Le(hn, lD(Ie)),
          },
          [Uh]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Le(hn, fD(Ie)),
          },
        });
    });
  var fE = {};
  me(fE, {
    observeRequests: () => PD,
    startActionGroup: () => yn,
    startEngine: () => Pr,
    stopActionGroup: () => qt,
    stopAllActionGroups: () => uE,
    stopEngine: () => Lr,
  });
  function PD(e) {
    ct({
      store: e,
      select: ({ ixRequest: t }) => t.preview,
      onChange: MD,
    }),
      ct({
        store: e,
        select: ({ ixRequest: t }) => t.playback,
        onChange: DD,
      }),
      ct({
        store: e,
        select: ({ ixRequest: t }) => t.stop,
        onChange: FD,
      }),
      ct({
        store: e,
        select: ({ ixRequest: t }) => t.clear,
        onChange: qD,
      });
  }
  function LD(e) {
    ct({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Lr(e),
          iE({
            store: e,
            elementApi: he,
          }),
          Pr({
            store: e,
            allowEvents: !0,
          }),
          oE();
      },
    });
  }
  function ND(e, t) {
    let n = ct({
      store: e,
      select: ({ ixSession: r }) => r.tick,
      onChange: (r) => {
        t(r), n();
      },
    });
  }
  function MD({ rawData: e, defer: t }, n) {
    let r = () => {
      Pr({
        store: n,
        rawData: e,
        allowEvents: !0,
      }),
        oE();
    };
    t ? setTimeout(r, 0) : r();
  }
  function oE() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function DD(e, t) {
    let {
        actionTypeId: n,
        actionListId: r,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: l = !0,
      } = e,
      { rawData: g } = e;
    if (r && i && g && s) {
      let p = g.actionLists[r];
      p &&
        (g = _D({
          actionList: p,
          actionItemId: i,
          rawData: g,
        }));
    }
    if (
      (Pr({
        store: t,
        rawData: g,
        allowEvents: a,
        testManual: u,
      }),
      (r && n === pe.GENERAL_START_ACTION) || Wo(n))
    ) {
      qt({
        store: t,
        actionListId: r,
      }),
        sE({
          store: t,
          actionListId: r,
          eventId: o,
        });
      let p = yn({
        store: t,
        eventId: o,
        actionListId: r,
        immediate: s,
        verbose: l,
      });
      l &&
        p &&
        t.dispatch(
          Ft({
            actionListId: r,
            isPlaying: !s,
          })
        );
    }
  }
  function FD({ actionListId: e }, t) {
    e
      ? qt({
          store: t,
          actionListId: e,
        })
      : uE({
          store: t,
        }),
      Lr(t);
  }
  function qD(e, t) {
    Lr(t),
      iE({
        store: t,
        elementApi: he,
      });
  }
  function Pr({ store: e, rawData: t, allowEvents: n, testManual: r }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(To(t)),
      i.active ||
        (e.dispatch(
          Ao({
            hasBoundaryNodes: !!document.querySelector(xr),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        n && (HD(e), GD(), e.getState().ixSession.hasDefinedMediaQueries && LD(e)),
        e.dispatch(bo()),
        XD(e, r));
  }
  function GD() {
    let { documentElement: e } = document;
    e.className.indexOf(Yh) === -1 && (e.className += ` ${Yh}`);
  }
  function XD(e, t) {
    let n = (r) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active && (e.dispatch(hr(r, o)), t ? ND(e, n) : requestAnimationFrame(n));
    };
    n(window.performance.now());
  }
  function Lr(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: n } = t;
      n.forEach(VD), bD(), e.dispatch(So());
    }
  }
  function VD({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function UD({
    store: e,
    eventStateKey: t,
    eventTarget: n,
    eventId: r,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: l, ixSession: g } = e.getState(),
      { events: p } = l,
      d = p[r],
      { eventTypeId: E } = d,
      _ = {},
      v = {},
      b = [],
      { continuousActionGroups: y } = a,
      { id: O } = a;
    ID(E, i) && (O = TD(t, O));
    let A = g.hasBoundaryNodes && n ? pn(n, xr) : null;
    y.forEach((w) => {
      let { keyframe: C, actionItems: x } = w;
      x.forEach((D) => {
        let { actionTypeId: F } = D,
          { target: G } = D.config;
        if (!G) return;
        let U = G.boundaryMode ? A : null,
          B = SD(G) + zo + F;
        if (((v[B] = BD(v[B], C, D)), !_[B])) {
          _[B] = !0;
          let { config: L } = D;
          wr({
            config: L,
            event: d,
            eventTarget: n,
            elementRoot: U,
            elementApi: he,
          }).forEach((I) => {
            b.push({
              element: I,
              key: B,
            });
          });
        }
      });
    }),
      b.forEach(({ element: w, key: C }) => {
        let x = v[C],
          D = (0, Ke.default)(x, "[0].actionItems[0]", {}),
          { actionTypeId: F } = D,
          U = (F === pe.PLUGIN_RIVE ? (D.config?.target?.selectorGuids || []).length === 0 : Cr(F))
            ? jo(F)(w, D)
            : null,
          B = Ko(
            {
              element: w,
              actionItem: D,
              elementApi: he,
            },
            U
          );
        Yo({
          store: e,
          element: w,
          eventId: r,
          actionListId: o,
          actionItem: D,
          destination: B,
          continuous: !0,
          parameterId: O,
          actionGroups: x,
          smoothing: s,
          restingValue: u,
          pluginInstance: U,
        });
      });
  }
  function BD(e = [], t, n) {
    let r = [...e],
      i;
    return (
      r.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null &&
        ((i = r.length),
        r.push({
          keyframe: t,
          actionItems: [],
        })),
      r[i].actionItems.push(n),
      r
    );
  }
  function HD(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: n } = t;
    aE(e),
      (0, Gt.default)(n, (i, o) => {
        let a = Kh[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        YD({
          logic: a,
          store: e,
          events: i,
        });
      });
    let { ixSession: r } = e.getState();
    r.eventListeners.length && WD(e);
  }
  function WD(e) {
    let t = () => {
      aE(e);
    };
    kD.forEach((n) => {
      window.addEventListener(n, t), e.dispatch(gr(window, [n, t]));
    }),
      t();
  }
  function aE(e) {
    let { ixSession: t, ixData: n } = e.getState(),
      r = window.innerWidth;
    if (r !== t.viewportWidth) {
      let { mediaQueries: i } = n;
      e.dispatch(
        Co({
          width: r,
          mediaQueries: i,
        })
      );
    }
  }
  function YD({ logic: e, store: t, events: n }) {
    $D(n);
    let { types: r, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = zD(n, jD);
    if (!(0, Zh.default)(s)) return;
    (0, Gt.default)(s, (p, d) => {
      let E = n[d],
        { action: _, id: v, mediaQueries: b = o.mediaQueryKeys } = E,
        { actionListId: y } = _.config;
      OD(b, o.mediaQueryKeys) || t.dispatch(Po()),
        _.actionTypeId === pe.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((A) => {
            let { continuousParameterGroupId: w } = A,
              C = (0, Ke.default)(a, `${y}.continuousParameterGroups`, []),
              x = (0, Qh.default)(C, ({ id: G }) => G === w),
              D = (A.smoothing || 0) / 100,
              F = (A.restingState || 0) / 100;
            x &&
              p.forEach((G, U) => {
                let B = v + zo + U;
                UD({
                  store: t,
                  eventStateKey: B,
                  eventTarget: G,
                  eventId: v,
                  eventConfig: A,
                  actionListId: y,
                  parameterGroup: x,
                  smoothing: D,
                  restingValue: F,
                });
              });
          }),
        (_.actionTypeId === pe.GENERAL_START_ACTION || Wo(_.actionTypeId)) &&
          sE({
            store: t,
            actionListId: y,
            eventId: v,
          });
    });
    let u = (p) => {
        let { ixSession: d } = t.getState();
        KD(s, (E, _, v) => {
          let b = n[_],
            y = d.eventState[v],
            { action: O, mediaQueries: A = o.mediaQueryKeys } = b;
          if (!Rr(A, d.mediaQueryKey)) return;
          let w = (C = {}) => {
            let x = i(
              {
                store: t,
                element: E,
                event: b,
                eventConfig: C,
                nativeEvent: p,
                eventStateKey: v,
              },
              y
            );
            xD(x, y) || t.dispatch(Oo(v, x));
          };
          O.actionTypeId === pe.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(b.config) ? b.config : [b.config]).forEach(w)
            : w();
        });
      },
      l = (0, nE.default)(u, CD),
      g = ({ target: p = document, types: d, throttle: E }) => {
        d.split(" ")
          .filter(Boolean)
          .forEach((_) => {
            let v = E ? l : u;
            p.addEventListener(_, v), t.dispatch(gr(p, [_, v]));
          });
      };
    Array.isArray(r) ? r.forEach(g) : typeof r == "string" && g(e);
  }
  function $D(e) {
    if (!RD) return;
    let t = {},
      n = "";
    for (let r in e) {
      let { eventTypeId: i, target: o } = e[r],
        a = No(o);
      t[a] ||
        ((i === Ce.MOUSE_CLICK || i === Ce.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0), (n += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (n) {
      let r = document.createElement("style");
      (r.textContent = n), document.body.appendChild(r);
    }
  }
  function sE({ store: e, actionListId: t, eventId: n }) {
    let { ixData: r, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = r,
      s = a[n],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let l = (0, Ke.default)(u, "actionItemGroups[0].actionItems", []),
        g = (0, Ke.default)(s, "mediaQueries", r.mediaQueryKeys);
      if (!Rr(g, i.mediaQueryKey)) return;
      l.forEach((p) => {
        let { config: d, actionTypeId: E } = p,
          _ =
            d?.target?.useEventTarget === !0 && d?.target?.objectId == null
              ? {
                  target: s.target,
                  targets: s.targets,
                }
              : d,
          v = wr({
            config: _,
            event: s,
            elementApi: he,
          }),
          b = Cr(E);
        v.forEach((y) => {
          let O = b ? jo(E)(y, p) : null;
          Yo({
            destination: Ko(
              {
                element: y,
                actionItem: p,
                elementApi: he,
              },
              O
            ),
            immediate: !0,
            store: e,
            element: y,
            eventId: n,
            actionItem: p,
            actionListId: t,
            pluginInstance: O,
          });
        });
      });
    }
  }
  function uE({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, Gt.default)(t, (n) => {
      if (!n.continuous) {
        let { actionListId: r, verbose: i } = n;
        $o(n, e),
          i &&
            e.dispatch(
              Ft({
                actionListId: r,
                isPlaying: !1,
              })
            );
      }
    });
  }
  function qt({ store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: i }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && n ? pn(n, xr) : null;
    (0, Gt.default)(o, (u) => {
      let l = (0, Ke.default)(u, "actionItem.config.target.boundaryMode"),
        g = r ? u.eventStateKey === r : !0;
      if (u.actionListId === i && u.eventId === t && g) {
        if (s && l && !Mo(s, u.element)) return;
        $o(u, e),
          u.verbose &&
            e.dispatch(
              Ft({
                actionListId: i,
                isPlaying: !1,
              })
            );
      }
    });
  }
  function yn({
    store: e,
    eventId: t,
    eventTarget: n,
    eventStateKey: r,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: l } = e.getState(),
      { events: g } = u,
      p = g[t] || {},
      { mediaQueries: d = u.mediaQueryKeys } = p,
      E = (0, Ke.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: _, useFirstGroupAsInitialState: v } = E;
    if (!_ || !_.length) return !1;
    o >= _.length && (0, Ke.default)(p, "config.loop") && (o = 0), o === 0 && v && o++;
    let y = (o === 0 || (o === 1 && v)) && Wo(p.action?.actionTypeId) ? p.config.delay : void 0,
      O = (0, Ke.default)(_, [o, "actionItems"], []);
    if (!O.length || !Rr(d, l.mediaQueryKey)) return !1;
    let A = l.hasBoundaryNodes && n ? pn(n, xr) : null,
      w = yD(O),
      C = !1;
    return (
      O.forEach((x, D) => {
        let { config: F, actionTypeId: G } = x,
          U = Cr(G),
          { target: B } = F;
        if (!B) return;
        let L = B.boundaryMode ? A : null;
        wr({
          config: F,
          event: p,
          eventTarget: n,
          elementRoot: L,
          elementApi: he,
        }).forEach((P, q) => {
          let M = U ? jo(G)(P, x) : null,
            W = U ? wD(G)(P, x) : null;
          C = !0;
          let k = w === D && q === 0,
            J = mD({
              element: P,
              actionItem: x,
            }),
            Te = Ko(
              {
                element: P,
                actionItem: x,
                elementApi: he,
              },
              M
            );
          Yo({
            store: e,
            element: P,
            actionItem: x,
            eventId: t,
            eventTarget: n,
            eventStateKey: r,
            actionListId: i,
            groupIndex: o,
            isCarrier: k,
            computedStyle: J,
            destination: Te,
            immediate: a,
            verbose: s,
            pluginInstance: M,
            pluginDuration: W,
            instanceDelay: y,
          });
        });
      }),
      C
    );
  }
  function Yo(e) {
    let { store: t, computedStyle: n, ...r } = e,
      { element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: u, restingValue: l, eventId: g } = r,
      p = !u,
      d = hD(),
      { ixElements: E, ixSession: _, ixData: v } = t.getState(),
      b = gD(E, i),
      { refState: y } = E[b] || {},
      O = Do(i),
      A = _.reducedMotion && ui[o.actionTypeId],
      w;
    if (A && u)
      switch (v.events[g]?.eventTypeId) {
        case Ce.MOUSE_MOVE:
        case Ce.MOUSE_MOVE_IN_VIEWPORT:
          w = l;
          break;
        default:
          w = 0.5;
          break;
      }
    let C = vD(i, y, n, o, he, s);
    if (
      (t.dispatch(
        xo({
          instanceId: d,
          elementId: b,
          origin: C,
          refType: O,
          skipMotion: A,
          skipToValue: w,
          ...r,
        })
      ),
      cE(document.body, "ix2-animation-started", d),
      a)
    ) {
      QD(t, d);
      return;
    }
    ct({
      store: t,
      select: ({ ixInstances: x }) => x[d],
      onChange: lE,
    }),
      p && t.dispatch(Er(d, _.tick));
  }
  function $o(e, t) {
    cE(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: n, actionItem: r } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[n] || {};
    a === rE && AD(o, r, he), t.dispatch(wo(e.id));
  }
  function cE(e, t, n) {
    let r = document.createEvent("CustomEvent");
    r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
  }
  function QD(e, t) {
    let { ixParameters: n } = e.getState();
    e.dispatch(Er(t, 0)), e.dispatch(hr(performance.now(), n));
    let { ixInstances: r } = e.getState();
    lE(r[t], e);
  }
  function lE(e, t) {
    let {
        active: n,
        continuous: r,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: l,
        groupIndex: g,
        eventId: p,
        eventTarget: d,
        eventStateKey: E,
        actionListId: _,
        isCarrier: v,
        styleProp: b,
        verbose: y,
        pluginInstance: O,
      } = e,
      { ixData: A, ixSession: w } = t.getState(),
      { events: C } = A,
      x = C && C[p] ? C[p] : {},
      { mediaQueries: D = A.mediaQueryKeys } = x;
    if (Rr(D, w.mediaQueryKey) && (r || n || i)) {
      if (l || (u === pD && i)) {
        t.dispatch(Ro(o, s, l, a));
        let { ixElements: F } = t.getState(),
          { ref: G, refType: U, refState: B } = F[o] || {},
          L = B && B[s];
        (U === rE || Cr(s)) && ED(G, B, L, p, a, b, he, u, O);
      }
      if (i) {
        if (v) {
          let F = yn({
            store: t,
            eventId: p,
            eventTarget: d,
            eventStateKey: E,
            actionListId: _,
            groupIndex: g + 1,
            verbose: y,
          });
          y &&
            !F &&
            t.dispatch(
              Ft({
                actionListId: _,
                isPlaying: !1,
              })
            );
        }
        $o(e, t);
      }
    }
  }
  var Qh,
    Ke,
    Zh,
    Jh,
    eE,
    tE,
    Gt,
    nE,
    Or,
    dD,
    Wo,
    zo,
    xr,
    rE,
    pD,
    Yh,
    wr,
    gD,
    Ko,
    ct,
    hD,
    ED,
    iE,
    yD,
    mD,
    vD,
    _D,
    ID,
    TD,
    Rr,
    AD,
    bD,
    SD,
    OD,
    xD,
    Cr,
    jo,
    wD,
    $h,
    RD,
    CD,
    kD,
    zD,
    KD,
    jD,
    ko = ne(() => {
      "use strict";
      (Qh = $(qi())),
        (Ke = $(Yn())),
        (Zh = $(bp())),
        (Jh = $($p())),
        (eE = $(Zp())),
        (tE = $(eg())),
        (Gt = $(ag())),
        (nE = $(pg()));
      ve();
      Or = $(ut());
      yr();
      vg();
      jh();
      (dD = Object.keys(xn)),
        (Wo = (e) => dD.includes(e)),
        ({ COLON_DELIMITER: zo, BOUNDARY_SELECTOR: xr, HTML_ELEMENT: rE, RENDER_GENERAL: pD, W_MOD_IX: Yh } = ce),
        ({
          getAffectedElements: wr,
          getElementId: gD,
          getDestinationValues: Ko,
          observeStore: ct,
          getInstanceId: hD,
          renderHTMLElement: ED,
          clearAllStyles: iE,
          getMaxDurationItemIndex: yD,
          getComputedStyle: mD,
          getInstanceOrigin: vD,
          reduceListToGroup: _D,
          shouldNamespaceEventParameter: ID,
          getNamespacedParameterId: TD,
          shouldAllowMediaQuery: Rr,
          cleanupHTMLElement: AD,
          clearObjectCache: bD,
          stringifyTarget: SD,
          mediaQueriesEqual: OD,
          shallowEqual: xD,
        } = Or.IX2VanillaUtils),
        ({ isPluginType: Cr, createPluginInstance: jo, getPluginDuration: wD } = Or.IX2VanillaPlugins),
        ($h = navigator.userAgent),
        (RD = $h.match(/iPad/i) || $h.match(/iPhone/)),
        (CD = 12);
      kD = ["resize", "orientationchange"];
      (zD = (e, t) => (0, Jh.default)((0, tE.default)(e, t), eE.default)),
        (KD = (e, t) => {
          (0, Gt.default)(e, (n, r) => {
            n.forEach((i, o) => {
              let a = r + zo + o;
              t(i, r, a);
            });
          });
        }),
        (jD = (e) => {
          let t = {
            target: e.target,
            targets: e.targets,
          };
          return wr({
            config: t,
            elementApi: he,
          });
        });
    });
  var gE = f((Zo) => {
    "use strict";
    Object.defineProperty(Zo, "__esModule", {
      value: !0,
    });
    function ZD(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n],
        });
    }
    ZD(Zo, {
      actions: function () {
        return tF;
      },
      destroy: function () {
        return pE;
      },
      init: function () {
        return oF;
      },
      setEnv: function () {
        return iF;
      },
      store: function () {
        return Nr;
      },
    });
    var JD = oi(),
      eF = nF((op(), Me(ip))),
      Qo = (ko(), Me(fE)),
      tF = rF((yr(), Me(hg)));
    function nF(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    function dE(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (dE = function (r) {
        return r ? n : t;
      })(e);
    }
    function rF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return {
          default: e,
        };
      var n = dE(t);
      if (n && n.has(e)) return n.get(e);
      var r = {
          __proto__: null,
        },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var Nr = (0, JD.createStore)(eF.default);
    function iF(e) {
      e() && (0, Qo.observeRequests)(Nr);
    }
    function oF(e) {
      pE(),
        (0, Qo.startEngine)({
          store: Nr,
          rawData: e,
          allowEvents: !0,
        });
    }
    function pE() {
      (0, Qo.stopEngine)(Nr);
    }
  });
  var mE = f((iX, yE) => {
    "use strict";
    var hE = Be(),
      EE = gE();
    EE.setEnv(hE.env);
    hE.define(
      "ix2",
      (yE.exports = function () {
        return EE;
      })
    );
  });
  var _E = f((oX, vE) => {
    "use strict";
    var Xt = Be();
    Xt.define(
      "links",
      (vE.exports = function (e, t) {
        var n = {},
          r = e(window),
          i,
          o = Xt.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          l = /index\.(html|php)$/,
          g = /\/$/,
          p,
          d;
        n.ready = n.design = n.preview = E;
        function E() {
          (i = o && Xt.env("design")), (d = Xt.env("slug") || a.pathname || ""), Xt.scroll.off(v), (p = []);
          for (var y = document.links, O = 0; O < y.length; ++O) _(y[O]);
          p.length && (Xt.scroll.on(v), v());
        }
        function _(y) {
          if (!y.getAttribute("hreflang")) {
            var O = (i && y.getAttribute("href-disabled")) || y.getAttribute("href");
            if (((s.href = O), !(O.indexOf(":") >= 0))) {
              var A = e(y);
              if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var w = e(s.hash);
                w.length &&
                  p.push({
                    link: A,
                    sec: w,
                    active: !1,
                  });
                return;
              }
              if (!(O === "#" || O === "")) {
                var C = s.href === a.href || O === d || (l.test(O) && g.test(d));
                b(A, u, C);
              }
            }
          }
        }
        function v() {
          var y = r.scrollTop(),
            O = r.height();
          t.each(p, function (A) {
            if (!A.link.attr("hreflang")) {
              var w = A.link,
                C = A.sec,
                x = C.offset().top,
                D = C.outerHeight(),
                F = O * 0.5,
                G = C.is(":visible") && x + D - F >= y && x + F <= y + O;
              A.active !== G && ((A.active = G), b(w, u, G));
            }
          });
        }
        function b(y, O, A) {
          var w = y.hasClass(O);
          (A && w) || (!A && !w) || (A ? y.addClass(O) : y.removeClass(O));
        }
        return n;
      })
    );
  });
  var TE = f((aX, IE) => {
    "use strict";
    var Mr = Be();
    Mr.define(
      "scroll",
      (IE.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          n = window.location,
          r = _() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (L) {
              window.setTimeout(L, 15);
            },
          u = Mr.env("editor") ? ".w-editor-body" : "body",
          l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
          g = 'a[href="#"]',
          p = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
          d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(d));
        function _() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var v = /^#[a-zA-Z0-9][\w:.-]*$/;
        function b(L) {
          return v.test(L.hash) && L.host + L.pathname === n.host + n.pathname;
        }
        let y = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
        function O() {
          return document.body.getAttribute("data-wf-scroll-motion") === "none" || y.matches;
        }
        function A(L, I) {
          var P;
          switch (I) {
            case "add":
              (P = L.attr("tabindex")), P ? L.attr("data-wf-tabindex-swap", P) : L.attr("tabindex", "-1");
              break;
            case "remove":
              (P = L.attr("data-wf-tabindex-swap")),
                P ? (L.attr("tabindex", P), L.removeAttr("data-wf-tabindex-swap")) : L.removeAttr("tabindex");
              break;
          }
          L.toggleClass("wf-force-outline-none", I === "add");
        }
        function w(L) {
          var I = L.currentTarget;
          if (!(Mr.env("design") || (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(I.className)))) {
            var P = b(I) ? I.hash : "";
            if (P !== "") {
              var q = e(P);
              q.length &&
                (L && (L.preventDefault(), L.stopPropagation()),
                C(P, L),
                window.setTimeout(
                  function () {
                    x(q, function () {
                      A(q, "add"),
                        q.get(0).focus({
                          preventScroll: !0,
                        }),
                        A(q, "remove");
                    });
                  },
                  L ? 0 : 300
                ));
            }
          }
        }
        function C(L) {
          if (n.hash !== L && r && r.pushState && !(Mr.env.chrome && n.protocol === "file:")) {
            var I = r.state && r.state.hash;
            I !== L &&
              r.pushState(
                {
                  hash: L,
                },
                "",
                L
              );
          }
        }
        function x(L, I) {
          var P = i.scrollTop(),
            q = D(L);
          if (P !== q) {
            var M = F(L, P, q),
              W = Date.now(),
              k = function () {
                var J = Date.now() - W;
                window.scroll(0, G(P, q, J, M)), J <= M ? s(k) : typeof I == "function" && I();
              };
            s(k);
          }
        }
        function D(L) {
          var I = e(l),
            P = I.css("position") === "fixed" ? I.outerHeight() : 0,
            q = L.offset().top - P;
          if (L.data("scroll") === "mid") {
            var M = i.height() - P,
              W = L.outerHeight();
            W < M && (q -= Math.round((M - W) / 2));
          }
          return q;
        }
        function F(L, I, P) {
          if (O()) return 0;
          var q = 1;
          return (
            a.add(L).each(function (M, W) {
              var k = parseFloat(W.getAttribute("data-scroll-time"));
              !isNaN(k) && k >= 0 && (q = k);
            }),
            (472.143 * Math.log(Math.abs(I - P) + 125) - 2e3) * q
          );
        }
        function G(L, I, P, q) {
          return P > q ? I : L + (I - L) * U(P / q);
        }
        function U(L) {
          return L < 0.5 ? 4 * L * L * L : (L - 1) * (2 * L - 2) * (2 * L - 2) + 1;
        }
        function B() {
          var { WF_CLICK_EMPTY: L, WF_CLICK_SCROLL: I } = t;
          o.on(I, p, w),
            o.on(L, g, function (P) {
              P.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return {
          ready: B,
        };
      })
    );
  });
  var bE = f((sX, AE) => {
    "use strict";
    var aF = Be();
    aF.define(
      "touch",
      (AE.exports = function (e) {
        var t = {},
          n = window.getSelection;
        (e.event.special.tap = {
          bindType: "click",
          delegateType: "click",
        }),
          (t.init = function (o) {
            return (o = typeof o == "string" ? e(o).get(0) : o), o ? new r(o) : null;
          });
        function r(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            l,
            g;
          o.addEventListener("touchstart", p, !1),
            o.addEventListener("touchmove", d, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", _, !1),
            o.addEventListener("mousedown", p, !1),
            o.addEventListener("mousemove", d, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", _, !1);
          function p(b) {
            var y = b.touches;
            (y && y.length > 1) || ((a = !0), y ? ((s = !0), (l = y[0].clientX)) : (l = b.clientX), (g = l));
          }
          function d(b) {
            if (a) {
              if (s && b.type === "mousemove") {
                b.preventDefault(), b.stopPropagation();
                return;
              }
              var y = b.touches,
                O = y ? y[0].clientX : b.clientX,
                A = O - g;
              (g = O),
                Math.abs(A) > u &&
                  n &&
                  String(n()) === "" &&
                  (i("swipe", b, {
                    direction: A > 0 ? "right" : "left",
                  }),
                  _());
            }
          }
          function E(b) {
            if (a && ((a = !1), s && b.type === "mouseup")) {
              b.preventDefault(), b.stopPropagation(), (s = !1);
              return;
            }
          }
          function _() {
            a = !1;
          }
          function v() {
            o.removeEventListener("touchstart", p, !1),
              o.removeEventListener("touchmove", d, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", _, !1),
              o.removeEventListener("mousedown", p, !1),
              o.removeEventListener("mousemove", d, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", _, !1),
              (o = null);
          }
          this.destroy = v;
        }
        function i(o, a, s) {
          var u = e.Event(o, {
            originalEvent: a,
          });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  Ea();
  ma();
  _a();
  Aa();
  Ca();
  mE();
  _E();
  TE();
  bE();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
            
            timm/lib/timm.js:
              (*!
               * Timm
               *
               * Immutability helpers with fast reads and acceptable writes.
               *
               * @copyright Guillermo Grau Panea 2016
               * @license MIT
               *)
            */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-162": {
      id: "e-162",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-95",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-95-p",
          smoothing: 90,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1539991888867,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-96",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|5439f2d7-1b03-1310-68e3-a7014984a1e4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|5439f2d7-1b03-1310-68e3-a7014984a1e4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-96-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1539992864421,
    },
    "e-164": {
      id: "e-164",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-141",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|41df2db4-abbb-f935-792d-7fd75c33ec9f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|41df2db4-abbb-f935-792d-7fd75c33ec9f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-141-p",
          smoothing: 80,
          startsEntering: false,
          addStartOffset: true,
          addOffsetValue: 20,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1539995172552,
    },
    "e-166": {
      id: "e-166",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-99",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|28d856cb-5292-0ddf-b203-6dadb72d592b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|28d856cb-5292-0ddf-b203-6dadb72d592b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-99-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 2,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1539995313514,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-62",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-168",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5f59990b-0652-e81d-fcfa-d7629bf5b26e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5f59990b-0652-e81d-fcfa-d7629bf5b26e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540104208991,
    },
    "e-168": {
      id: "e-168",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-63",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-167",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5f59990b-0652-e81d-fcfa-d7629bf5b26e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5f59990b-0652-e81d-fcfa-d7629bf5b26e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540104208991,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-62",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-170",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5f59990b-0652-e81d-fcfa-d7629bf5b268",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5f59990b-0652-e81d-fcfa-d7629bf5b268",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540104208991,
    },
    "e-170": {
      id: "e-170",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-63",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-169",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5f59990b-0652-e81d-fcfa-d7629bf5b268",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5f59990b-0652-e81d-fcfa-d7629bf5b268",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540104208991,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-110",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|441162c4-e22b-be01-2484-74fd5dc3a169",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|441162c4-e22b-be01-2484-74fd5dc3a169",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-110-p",
          smoothing: 85,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 19,
        },
      ],
      createdOn: 1540108310012,
    },
    "e-174": {
      id: "e-174",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-98",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|835ba117-0cd5-2ab7-c800-d3fe922c3020",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|835ba117-0cd5-2ab7-c800-d3fe922c3020",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-98-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1540110199741,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-100",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|ba23c016-ec7d-b4b1-f361-d17aad6106cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|ba23c016-ec7d-b4b1-f361-d17aad6106cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-100-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: true,
          addOffsetValue: 20,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1540112463776,
    },
    "e-176": {
      id: "e-176",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-101",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|560b45f5-2652-e8fb-bc77-458919206ffb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|560b45f5-2652-e8fb-bc77-458919206ffb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-101-p",
          smoothing: 70,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1540112534061,
    },
    "e-188": {
      id: "e-188",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-67",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-189",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540623864084,
    },
    "e-191": {
      id: "e-191",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-64",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-190",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1540623877327,
    },
    "e-192": {
      id: "e-192",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-109",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|e3781b35-607c-361d-7d30-668d7219d034",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|e3781b35-607c-361d-7d30-668d7219d034",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-109-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: true,
          addOffsetValue: 20,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1541094844512,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-112",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-112-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1541308900492,
    },
    "e-194": {
      id: "e-194",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-108",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5f59990b-0652-e81d-fcfa-d7629bf5b274",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5f59990b-0652-e81d-fcfa-d7629bf5b274",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-108-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 85,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-108-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 85,
          restingState: 50,
        },
      ],
      createdOn: 1541311538623,
    },
    "e-199": {
      id: "e-199",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-108",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: "._w-logo-ts",
        originalId: "5fde6b6899797c06e1f8f61c|df1d733d-5e10-3248-55e5-9acd03d1f5c8",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: "._w-logo-ts",
          originalId: "5fde6b6899797c06e1f8f61c|df1d733d-5e10-3248-55e5-9acd03d1f5c8",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-108-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-108-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1542610869165,
    },
    "e-252": {
      id: "e-252",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-123",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797cc8e5f8f620|3c4c4253-6745-3c30-e9ca-f7a1154aa95b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797cc8e5f8f620|3c4c4253-6745-3c30-e9ca-f7a1154aa95b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-123-p",
          smoothing: 89,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1544073246628,
    },
    "e-256": {
      id: "e-256",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-131",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-257",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|02927b82-8d7d-ba26-859c-18a64eba8239",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|02927b82-8d7d-ba26-859c-18a64eba8239",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544257817887,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-136",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c1943f8f62a|5bd552ce28b2e4cfed8770ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c1943f8f62a|5bd552ce28b2e4cfed8770ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-136-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1544415793647,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-139",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-270",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5fde6b6899797c06e1f8f61c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544679839786,
    },
    "e-272": {
      id: "e-272",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-140",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-273",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|5439f2d7-1b03-1310-68e3-a7014984a1e4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|5439f2d7-1b03-1310-68e3-a7014984a1e4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 80,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1544834614433,
    },
    "e-274": {
      id: "e-274",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-142",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|835ba117-0cd5-2ab7-c800-d3fe922c3020",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|835ba117-0cd5-2ab7-c800-d3fe922c3020",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-142-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1547663624424,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-143",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|441162c4-e22b-be01-2484-74fd5dc3a169",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|441162c4-e22b-be01-2484-74fd5dc3a169",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-143-p",
          smoothing: 85,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 19,
        },
      ],
      createdOn: 1547738824560,
    },
    "e-276": {
      id: "e-276",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-137",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-277",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|0eb380eb-dc9c-63a1-327c-ca119bd4dece",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|0eb380eb-dc9c-63a1-327c-ca119bd4dece",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 45,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548207934212,
    },
    "e-278": {
      id: "e-278",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-144",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5fde6b6899797cc8e5f8f620|5bd552ce28b2e4cfed8770ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797cc8e5f8f620|5bd552ce28b2e4cfed8770ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-144-p",
          smoothing: 70,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 20,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 10,
        },
      ],
      createdOn: 1548209231949,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-62",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-284",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5fde6b6899797c1943f8f62a|4efdee0d-8825-2f9f-57a2-0596d680b11f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c1943f8f62a|4efdee0d-8825-2f9f-57a2-0596d680b11f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548789817888,
    },
    "e-284": {
      id: "e-284",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-63",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-283",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5fde6b6899797c1943f8f62a|4efdee0d-8825-2f9f-57a2-0596d680b11f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c1943f8f62a|4efdee0d-8825-2f9f-57a2-0596d680b11f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548789817888,
    },
    "e-285": {
      id: "e-285",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-62",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-286",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5fde6b6899797c1943f8f62a|e7606591-320a-c478-5121-7c5a3da991cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c1943f8f62a|e7606591-320a-c478-5121-7c5a3da991cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548789827493,
    },
    "e-286": {
      id: "e-286",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-63",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-285",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5fde6b6899797c1943f8f62a|e7606591-320a-c478-5121-7c5a3da991cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c1943f8f62a|e7606591-320a-c478-5121-7c5a3da991cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548789827493,
    },
    "e-287": {
      id: "e-287",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-62",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-288",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5fde6b6899797c1943f8f62a|11a1e2d4-4e5d-1a87-dc3f-81ab876d26a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c1943f8f62a|11a1e2d4-4e5d-1a87-dc3f-81ab876d26a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548789992234,
    },
    "e-288": {
      id: "e-288",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-63",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-287",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "5fde6b6899797c1943f8f62a|11a1e2d4-4e5d-1a87-dc3f-81ab876d26a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c1943f8f62a|11a1e2d4-4e5d-1a87-dc3f-81ab876d26a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1548789992234,
    },
    "e-289": {
      id: "e-289",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-67",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-290",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797cc8e5f8f620",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797cc8e5f8f620",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1550207190521,
    },
    "e-292": {
      id: "e-292",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-125",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-291",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797cc8e5f8f620",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797cc8e5f8f620",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1550207218894,
    },
    "e-293": {
      id: "e-293",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: {
          actionListId: "a-146",
          affectedElements: {},
          duration: 0,
        },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797cc8e5f8f620|5bd552ce28b2e4cfed8770ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797cc8e5f8f620|5bd552ce28b2e4cfed8770ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-146-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1550688633372,
    },
    "e-294": {
      id: "e-294",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-137",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-295",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5fde6b6899797c06e1f8f61c|d2176909-e0cf-ce9c-747a-f57035f70477",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5fde6b6899797c06e1f8f61c|d2176909-e0cf-ce9c-747a-f57035f70477",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1600636063755,
    },
  },
  actionLists: {
    "a-95": {
      id: "a-95",
      title: "main-scroll",
      continuousParameterGroups: [
        {
          id: "a-95-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-95-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|e059fb9b-e09c-30f0-6005-aca67126dcc2",
                    },
                    yValue: 100,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-7",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|3e2c62fd-4ae3-9693-3f3f-d5be3d34f55d",
                    },
                    widthValue: 400,
                    heightValue: 400,
                    widthUnit: "PX",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-95-n-9",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|bfe35df8-5281-6e5f-13b3-6a5ba7f872b3",
                    },
                    yValue: 100,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|3e2c62fd-4ae3-9693-3f3f-d5be3d34f55d",
                    },
                    xValue: 25,
                    yValue: -80,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-11",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|3e2c62fd-4ae3-9693-3f3f-d5be3d34f55d",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-14",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|f314823e-a265-a25e-f277-84ab995cb271",
                    },
                    xValue: 0,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-20",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-2",
                      selectorGuids: ["b1fac6d9-9cdd-639c-49e7-3228895c9cfb"],
                    },
                    xValue: 39,
                    yValue: -100,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-22",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-3",
                      selectorGuids: ["c5d42553-d403-1e6e-faca-116f52b59a75"],
                    },
                    xValue: 18,
                    yValue: -103,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-24",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-4",
                      selectorGuids: ["789b1d10-7213-b87c-c761-976755a98846"],
                    },
                    xValue: 9,
                    yValue: -60,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-26",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-5",
                      selectorGuids: ["c7ede7c4-dcac-4c84-4115-7a1de1cab534"],
                    },
                    xValue: 41,
                    yValue: -64,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-28",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-6",
                      selectorGuids: ["aaac0bb7-d276-7cd8-7584-0d64495672ec"],
                    },
                    xValue: 39,
                    yValue: -123,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-42",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-2",
                      selectorGuids: ["b1fac6d9-9cdd-639c-49e7-3228895c9cfb"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-43",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-3",
                      selectorGuids: ["c5d42553-d403-1e6e-faca-116f52b59a75"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-44",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-4",
                      selectorGuids: ["789b1d10-7213-b87c-c761-976755a98846"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-45",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-5",
                      selectorGuids: ["c7ede7c4-dcac-4c84-4115-7a1de1cab534"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-46",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-6",
                      selectorGuids: ["aaac0bb7-d276-7cd8-7584-0d64495672ec"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-47",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-3",
                      selectorGuids: ["c5d42553-d403-1e6e-faca-116f52b59a75"],
                    },
                    widthValue: 360,
                    heightValue: 420,
                    widthUnit: "PX",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-95-n-49",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-2",
                      selectorGuids: ["b1fac6d9-9cdd-639c-49e7-3228895c9cfb"],
                    },
                    widthValue: 360,
                    heightValue: 400,
                    widthUnit: "PX",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-95-n-53",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|f64ff7fd-e226-876a-b8c0-7dbeb1a5c64c",
                    },
                    xValue: 0,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-55",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|bfe35df8-5281-6e5f-13b3-6a5ba7f872b3",
                    },
                    xValue: 0.7500000000000012,
                    yValue: 0.7500000000000012,
                    locked: true,
                  },
                },
                {
                  id: "a-95-n-57",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|27276687-9ecb-4ce6-8f07-15eee8bfb886",
                    },
                    xValue: 0.7000000000000006,
                    yValue: 0.7000000000000006,
                    locked: true,
                  },
                },
                {
                  id: "a-95-n-59",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|2036e878-fa44-310d-6b8e-5fcab104e7df",
                    },
                    yValue: -239,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-80",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|46566e6c-9271-9e0d-9198-afe6953df2a8",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-82",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".inner__content",
                      selectorGuids: ["e2882ef5-4cb1-9ef0-cfb8-9b5c494f09e1"],
                    },
                    globalSwatchId: "",
                    rValue: 0,
                    bValue: 255,
                    gValue: 152,
                    aValue: 0,
                  },
                },
              ],
            },
            {
              keyframe: 2,
              actionItems: [
                {
                  id: "a-95-n-84",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|84903a8c-24c7-12f4-a0da-210f9a5fe5df",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 3.2,
              actionItems: [
                {
                  id: "a-95-n-85",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|84903a8c-24c7-12f4-a0da-210f9a5fe5df",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 4,
              actionItems: [
                {
                  id: "a-95-n-13",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|3e2c62fd-4ae3-9693-3f3f-d5be3d34f55d",
                    },
                    zValue: 33,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-32",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-2",
                      selectorGuids: ["b1fac6d9-9cdd-639c-49e7-3228895c9cfb"],
                    },
                    zValue: -24,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-33",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-3",
                      selectorGuids: ["c5d42553-d403-1e6e-faca-116f52b59a75"],
                    },
                    zValue: 22,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-34",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-4",
                      selectorGuids: ["789b1d10-7213-b87c-c761-976755a98846"],
                    },
                    zValue: -12,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-35",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-5",
                      selectorGuids: ["c7ede7c4-dcac-4c84-4115-7a1de1cab534"],
                    },
                    zValue: 17,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-36",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-6",
                      selectorGuids: ["aaac0bb7-d276-7cd8-7584-0d64495672ec"],
                    },
                    zValue: -20,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 6.99,
              actionItems: [
                {
                  id: "a-95-n-31",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|ede531bd-dbae-f952-8c90-933fdf7c1cdc",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 7,
              actionItems: [
                {
                  id: "a-95-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|e059fb9b-e09c-30f0-6005-aca67126dcc2",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|3e2c62fd-4ae3-9693-3f3f-d5be3d34f55d",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-8",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|3e2c62fd-4ae3-9693-3f3f-d5be3d34f55d",
                    },
                    widthValue: 360,
                    heightValue: 269,
                    widthUnit: "PX",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-95-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|bfe35df8-5281-6e5f-13b3-6a5ba7f872b3",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-12",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|3e2c62fd-4ae3-9693-3f3f-d5be3d34f55d",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-19",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|d239e00c-ff1a-6c9a-7f62-5a862df4cfbf",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-95-n-16",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|3e2c62fd-4ae3-9693-3f3f-d5be3d34f55d",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-95-n-21",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-2",
                      selectorGuids: ["b1fac6d9-9cdd-639c-49e7-3228895c9cfb"],
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-23",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-3",
                      selectorGuids: ["c5d42553-d403-1e6e-faca-116f52b59a75"],
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-25",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-4",
                      selectorGuids: ["789b1d10-7213-b87c-c761-976755a98846"],
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-27",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-5",
                      selectorGuids: ["c7ede7c4-dcac-4c84-4115-7a1de1cab534"],
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-29",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-6",
                      selectorGuids: ["aaac0bb7-d276-7cd8-7584-0d64495672ec"],
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-37",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-2",
                      selectorGuids: ["b1fac6d9-9cdd-639c-49e7-3228895c9cfb"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-38",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-3",
                      selectorGuids: ["c5d42553-d403-1e6e-faca-116f52b59a75"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-39",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-4",
                      selectorGuids: ["789b1d10-7213-b87c-c761-976755a98846"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-40",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-5",
                      selectorGuids: ["c7ede7c4-dcac-4c84-4115-7a1de1cab534"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-41",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-6",
                      selectorGuids: ["aaac0bb7-d276-7cd8-7584-0d64495672ec"],
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-95-n-30",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|ede531bd-dbae-f952-8c90-933fdf7c1cdc",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-95-n-48",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-3",
                      selectorGuids: ["c5d42553-d403-1e6e-faca-116f52b59a75"],
                    },
                    widthValue: 360,
                    heightValue: 269,
                    widthUnit: "PX",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-95-n-50",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".picture-2",
                      selectorGuids: ["b1fac6d9-9cdd-639c-49e7-3228895c9cfb"],
                    },
                    widthValue: 360,
                    heightValue: 269,
                    widthUnit: "PX",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-95-n-56",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|bfe35df8-5281-6e5f-13b3-6a5ba7f872b3",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-95-n-58",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|27276687-9ecb-4ce6-8f07-15eee8bfb886",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-95-n-60",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|2036e878-fa44-310d-6b8e-5fcab104e7df",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 7.01,
              actionItems: [
                {
                  id: "a-95-n-18",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|d239e00c-ff1a-6c9a-7f62-5a862df4cfbf",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 8,
              actionItems: [
                {
                  id: "a-95-n-17",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|3e2c62fd-4ae3-9693-3f3f-d5be3d34f55d",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-95-n-52",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|f314823e-a265-a25e-f277-84ab995cb271",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 14,
              actionItems: [
                {
                  id: "a-95-n-51",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|f314823e-a265-a25e-f277-84ab995cb271",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 15,
              actionItems: [
                {
                  id: "a-95-n-15",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outQuart",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|f314823e-a265-a25e-f277-84ab995cb271",
                    },
                    xValue: -180,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 20,
              actionItems: [
                {
                  id: "a-95-n-61",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 31,
                    bValue: 31,
                    gValue: 31,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 25,
              actionItems: [
                {
                  id: "a-95-n-79",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".ui__line",
                      selectorGuids: ["a74f67e9-bf9e-c8bd-1c43-20fd7bc79652"],
                    },
                    globalSwatchId: "",
                    rValue: 105,
                    bValue: 105,
                    gValue: 105,
                    aValue: 0.15000000000000022,
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-95-n-62",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 79,
                    bValue: 170,
                    gValue: 137,
                    aValue: 1,
                  },
                },
                {
                  id: "a-95-n-76",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".ui__line",
                      selectorGuids: ["a74f67e9-bf9e-c8bd-1c43-20fd7bc79652"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 0.08,
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: "a-95-n-67",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 84,
                    bValue: 103,
                    gValue: 124,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-95-n-68",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 184,
                    bValue: 107,
                    gValue: 71,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 60,
              actionItems: [
                {
                  id: "a-95-n-70",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 155,
                    bValue: 151,
                    gValue: 73,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 70,
              actionItems: [
                {
                  id: "a-95-n-71",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 65,
                    bValue: 126,
                    gValue: 60,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 88,
              actionItems: [
                {
                  id: "a-95-n-77",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".ui__line",
                      selectorGuids: ["a74f67e9-bf9e-c8bd-1c43-20fd7bc79652"],
                    },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 0.08,
                  },
                },
              ],
            },
            {
              keyframe: 90,
              actionItems: [
                {
                  id: "a-95-n-54",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|f64ff7fd-e226-876a-b8c0-7dbeb1a5c64c",
                    },
                    xValue: 16,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-75",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 24,
                    bValue: 24,
                    gValue: 24,
                    aValue: 1,
                  },
                },
                {
                  id: "a-95-n-78",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".ui__line",
                      selectorGuids: ["a74f67e9-bf9e-c8bd-1c43-20fd7bc79652"],
                    },
                    globalSwatchId: "",
                    rValue: 105,
                    bValue: 105,
                    gValue: 105,
                    aValue: 0.15000000000000022,
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-95-n-81",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuint",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|46566e6c-9271-9e0d-9198-afe6953df2a8",
                    },
                    yValue: -300,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-95-n-83",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".inner__content",
                      selectorGuids: ["e2882ef5-4cb1-9ef0-cfb8-9b5c494f09e1"],
                    },
                    globalSwatchId: "",
                    rValue: 0,
                    bValue: 255,
                    gValue: 152,
                    aValue: 0,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1539991904430,
    },
    "a-96": {
      id: "a-96",
      title: "aaaappp-0",
      continuousParameterGroups: [
        {
          id: "a-96-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-96-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".app-sc.fold.cc-revolution",
                      selectorGuids: [
                        "3d87b1c6-a378-266e-3767-f4bd54ce9d19",
                        "9870f77a-9ff6-8512-32ad-a73283ae7d5d",
                        "8e6f0832-f4b8-cd25-c960-7bbb12e40219",
                      ],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 13,
              actionItems: [
                {
                  id: "a-96-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".app-sc",
                      selectorGuids: ["3d87b1c6-a378-266e-3767-f4bd54ce9d19"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-96-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".app-sc.fold.cc-revolution",
                      selectorGuids: [
                        "3d87b1c6-a378-266e-3767-f4bd54ce9d19",
                        "9870f77a-9ff6-8512-32ad-a73283ae7d5d",
                        "8e6f0832-f4b8-cd25-c960-7bbb12e40219",
                      ],
                    },
                    yValue: -730,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-96-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".app-sc",
                      selectorGuids: ["3d87b1c6-a378-266e-3767-f4bd54ce9d19"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1539992866935,
    },
    "a-141": {
      id: "a-141",
      title: "aaaappp-1-feed-mobile",
      continuousParameterGroups: [
        {
          id: "a-141-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-141-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._01-app-feed",
                      selectorGuids: ["f8e64484-a6e0-1ce5-54cf-81d964d65969"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-141-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-feed",
                      selectorGuids: ["7a66246d-f331-6474-47c6-fc622f377cc9"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-141-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-feed",
                      selectorGuids: ["7a66246d-f331-6474-47c6-fc622f377cc9"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-141-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".nav-bar",
                      selectorGuids: ["ea87c06e-d0c8-badd-4c9e-a5004eb08b7e"],
                    },
                    yValue: 170,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 5,
              actionItems: [
                {
                  id: "a-141-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-feed",
                      selectorGuids: ["7a66246d-f331-6474-47c6-fc622f377cc9"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 12,
              actionItems: [
                {
                  id: "a-141-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".app-sc.fold.cc-revolution",
                      selectorGuids: [
                        "3d87b1c6-a378-266e-3767-f4bd54ce9d19",
                        "9870f77a-9ff6-8512-32ad-a73283ae7d5d",
                        "8e6f0832-f4b8-cd25-c960-7bbb12e40219",
                      ],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-141-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".nav-bar",
                      selectorGuids: ["ea87c06e-d0c8-badd-4c9e-a5004eb08b7e"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 45,
              actionItems: [
                {
                  id: "a-141-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outQuart",
                    duration: 500,
                    target: {
                      selector: "._w-title-feed",
                      selectorGuids: ["7a66246d-f331-6474-47c6-fc622f377cc9"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-141-n-9",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".app-sc.fold.cc-revolution",
                      selectorGuids: [
                        "3d87b1c6-a378-266e-3767-f4bd54ce9d19",
                        "9870f77a-9ff6-8512-32ad-a73283ae7d5d",
                        "8e6f0832-f4b8-cd25-c960-7bbb12e40219",
                      ],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-141-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outQuart",
                    duration: 500,
                    target: {
                      selector: "._01-app-feed",
                      selectorGuids: ["f8e64484-a6e0-1ce5-54cf-81d964d65969"],
                    },
                    yValue: -1300,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1539992866935,
    },
    "a-99": {
      id: "a-99",
      title: "aaaappp-3-search",
      continuousParameterGroups: [
        {
          id: "a-99-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-99-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._03-app-search",
                      selectorGuids: ["c486c61a-4f56-887c-50c1-4e59e5abeaf1"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-99-n-13",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-friends",
                      selectorGuids: ["b4a2f78c-060c-f970-1f50-649b804b392e"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-99-n-11",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-search",
                      selectorGuids: ["0ade9432-fd26-e1c1-3115-669add5e2963"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 0.0001,
              actionItems: [
                {
                  id: "a-99-n-14",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-friends",
                      selectorGuids: ["b4a2f78c-060c-f970-1f50-649b804b392e"],
                    },
                    yValue: 35,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 2,
              actionItems: [
                {
                  id: "a-99-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-search",
                      selectorGuids: ["0ade9432-fd26-e1c1-3115-669add5e2963"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 5,
              actionItems: [
                {
                  id: "a-99-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-search",
                      selectorGuids: ["0ade9432-fd26-e1c1-3115-669add5e2963"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-99-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._02-app-friends",
                      selectorGuids: ["86a5f154-f6af-30ce-a3e4-ce5a80a41d81"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-99-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-search",
                      selectorGuids: ["0ade9432-fd26-e1c1-3115-669add5e2963"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: "a-99-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._03-app-search",
                      selectorGuids: ["c486c61a-4f56-887c-50c1-4e59e5abeaf1"],
                    },
                    yValue: -730,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: "a-99-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._02-app-friends",
                      selectorGuids: ["86a5f154-f6af-30ce-a3e4-ce5a80a41d81"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1539992866935,
    },
    "a-62": {
      id: "a-62",
      title: "hover-nav-links",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-62-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fill-hover",
                  selectorGuids: ["18efa799-0312-8ed6-bf81-674aa9268445"],
                },
                xValue: -103,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-62-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fill-hover",
                  selectorGuids: ["18efa799-0312-8ed6-bf81-674aa9268445"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1534053354690,
    },
    "a-63": {
      id: "a-63",
      title: "out-hover-nav",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-63-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".fill-hover",
                  selectorGuids: ["18efa799-0312-8ed6-bf81-674aa9268445"],
                },
                xValue: -103,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1534053462726,
    },
    "a-110": {
      id: "a-110",
      title: "every-day",
      continuousParameterGroups: [
        {
          id: "a-110-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-110-n-17",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|bfe35df8-5281-6e5f-13b3-6a5ba7f872b3",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-110-n-19",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|6738a2ab-0569-ccba-6d3a-9ab97053e001",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 1.99,
              actionItems: [
                {
                  id: "a-110-n-7",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|d2176909-e0cf-ce9c-747a-f57035f70477",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 2,
              actionItems: [
                {
                  id: "a-110-n-18",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|bfe35df8-5281-6e5f-13b3-6a5ba7f872b3",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-110-n-20",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|6738a2ab-0569-ccba-6d3a-9ab97053e001",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-110-n-9",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|67d75cb0-7f39-94e0-d7ff-9227122057b2",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-11",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|67d75cb0-7f39-94e0-d7ff-9227122057b2",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-110-n-13",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-15",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-110-n-24",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|890b4fb9-f5a6-e787-1576-ec105f374d5d",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-8",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|d2176909-e0cf-ce9c-747a-f57035f70477",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-110-n-27",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|35223df9-6dc6-73d4-6d94-3db1a045180e",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-33",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-73673226283b",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-110-n-35",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-73673226283b",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-25",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-46",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-110-n-49",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|35223df9-6dc6-73d4-6d94-3db1a045180e",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 6.5,
              actionItems: [
                {
                  id: "a-110-n-41",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|67d75cb0-7f39-94e0-d7ff-9227122057b2",
                    },
                    zValue: 13,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-110-n-42",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    zValue: -23,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-110-n-50",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|35223df9-6dc6-73d4-6d94-3db1a045180e",
                    },
                    zValue: 29,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-110-n-31",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1e908f87-7d51-11c4-e730-2b97589f27bf",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-45",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1e908f87-7d51-11c4-e730-2b97589f27bf",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-110-n-47",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    zValue: -10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 14,
              actionItems: [
                {
                  id: "a-110-n-43",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1e908f87-7d51-11c4-e730-2b97589f27bf",
                    },
                    zValue: 26,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 15,
              actionItems: [
                {
                  id: "a-110-n-34",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-73673226283b",
                    },
                    xValue: 0.8,
                    yValue: 0.8,
                    locked: true,
                  },
                },
                {
                  id: "a-110-n-36",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-73673226283b",
                    },
                    yValue: -4,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-29",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-73673226283b",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 15.5,
              actionItems: [
                {
                  id: "a-110-n-30",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-73673226283b",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 20,
              actionItems: [
                {
                  id: "a-110-n-14",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    xValue: 0,
                    yValue: 42,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-16",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    zValue: 23,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 25,
              actionItems: [
                {
                  id: "a-110-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|67d75cb0-7f39-94e0-d7ff-9227122057b2",
                    },
                    xValue: 6,
                    yValue: 55,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-12",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|67d75cb0-7f39-94e0-d7ff-9227122057b2",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-110-n-26",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    xValue: -4,
                    yValue: 10,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-48",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    zValue: 15,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 45,
              actionItems: [
                {
                  id: "a-110-n-23",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|890b4fb9-f5a6-e787-1576-ec105f374d5d",
                    },
                    xValue: 25,
                    yValue: 20,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 47,
              actionItems: [
                {
                  id: "a-110-n-54",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    xValue: 20,
                    yValue: 50,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-57",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-110-n-55",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    xValue: 10,
                    yValue: 30,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-56",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-110-n-28",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|35223df9-6dc6-73d4-6d94-3db1a045180e",
                    },
                    xValue: 36,
                    yValue: 28,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-51",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|35223df9-6dc6-73d4-6d94-3db1a045180e",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 55,
              actionItems: [
                {
                  id: "a-110-n-32",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1e908f87-7d51-11c4-e730-2b97589f27bf",
                    },
                    xValue: 23,
                    yValue: -10,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-110-n-44",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1e908f87-7d51-11c4-e730-2b97589f27bf",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1541104196805,
    },
    "a-98": {
      id: "a-98",
      title: "aaaappp-2-friends",
      continuousParameterGroups: [
        {
          id: "a-98-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-98-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._02-app-friends",
                      selectorGuids: ["86a5f154-f6af-30ce-a3e4-ce5a80a41d81"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-98-n-13",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-friends",
                      selectorGuids: ["b4a2f78c-060c-f970-1f50-649b804b392e"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-98-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-friends",
                      selectorGuids: ["b4a2f78c-060c-f970-1f50-649b804b392e"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-98-n-15",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-feed",
                      selectorGuids: ["7a66246d-f331-6474-47c6-fc622f377cc9"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 0.0001,
              actionItems: [
                {
                  id: "a-98-n-16",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-feed",
                      selectorGuids: ["7a66246d-f331-6474-47c6-fc622f377cc9"],
                    },
                    yValue: 33,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 5,
              actionItems: [
                {
                  id: "a-98-n-14",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-friends",
                      selectorGuids: ["b4a2f78c-060c-f970-1f50-649b804b392e"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-98-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._01-app-feed",
                      selectorGuids: ["f8e64484-a6e0-1ce5-54cf-81d964d65969"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-98-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outQuart",
                    duration: 500,
                    target: {
                      selector: "._w-title-friends",
                      selectorGuids: ["b4a2f78c-060c-f970-1f50-649b804b392e"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: "a-98-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outQuart",
                    duration: 500,
                    target: {
                      selector: "._02-app-friends",
                      selectorGuids: ["86a5f154-f6af-30ce-a3e4-ce5a80a41d81"],
                    },
                    yValue: -730,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: "a-98-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._01-app-feed",
                      selectorGuids: ["f8e64484-a6e0-1ce5-54cf-81d964d65969"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1539992866935,
    },
    "a-100": {
      id: "a-100",
      title: "aaaappp-4-news",
      continuousParameterGroups: [
        {
          id: "a-100-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-100-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._04-app-news",
                      selectorGuids: ["bde1a025-092c-bf81-66a5-4ce5360fd52c"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-100-n-13",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-search",
                      selectorGuids: ["0ade9432-fd26-e1c1-3115-669add5e2963"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-100-n-11",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-news",
                      selectorGuids: ["a4027ae3-2e30-928d-9916-a246cc6f854f"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 0.0001,
              actionItems: [
                {
                  id: "a-100-n-14",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-search",
                      selectorGuids: ["0ade9432-fd26-e1c1-3115-669add5e2963"],
                    },
                    yValue: 25,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 2,
              actionItems: [
                {
                  id: "a-100-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-news",
                      selectorGuids: ["a4027ae3-2e30-928d-9916-a246cc6f854f"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 5,
              actionItems: [
                {
                  id: "a-100-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-news",
                      selectorGuids: ["a4027ae3-2e30-928d-9916-a246cc6f854f"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-100-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._03-app-search",
                      selectorGuids: ["c486c61a-4f56-887c-50c1-4e59e5abeaf1"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-100-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-news",
                      selectorGuids: ["a4027ae3-2e30-928d-9916-a246cc6f854f"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: "a-100-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._04-app-news",
                      selectorGuids: ["bde1a025-092c-bf81-66a5-4ce5360fd52c"],
                    },
                    yValue: -730,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: "a-100-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._03-app-search",
                      selectorGuids: ["c486c61a-4f56-887c-50c1-4e59e5abeaf1"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1539992866935,
    },
    "a-101": {
      id: "a-101",
      title: "aaaappp-slot-6",
      continuousParameterGroups: [
        {
          id: "a-101-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-101-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._06-app-slot",
                      selectorGuids: ["d320a0cf-0420-b45c-8b4c-a7ad6fbf42d2"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-101-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._05-app-profile",
                      selectorGuids: ["b0a7eb65-45cc-9c5c-182d-e87739d67fe5"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-101-n-56",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-profile",
                      selectorGuids: ["45896ed6-4bf1-a5e7-fb1d-e32a3f7bb79e"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-101-n-53",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-slot",
                      selectorGuids: ["08d00f1d-f1d1-32e5-350c-ad2419aa5b04"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 0.00001,
              actionItems: [
                {
                  id: "a-101-n-57",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-profile",
                      selectorGuids: ["45896ed6-4bf1-a5e7-fb1d-e32a3f7bb79e"],
                    },
                    yValue: 25,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 2,
              actionItems: [
                {
                  id: "a-101-n-54",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-slot",
                      selectorGuids: ["08d00f1d-f1d1-32e5-350c-ad2419aa5b04"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 5,
              actionItems: [
                {
                  id: "a-101-n-45",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-slot",
                      selectorGuids: ["08d00f1d-f1d1-32e5-350c-ad2419aa5b04"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-101-n-46",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-slot",
                      selectorGuids: ["08d00f1d-f1d1-32e5-350c-ad2419aa5b04"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-101-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._06-app-slot",
                      selectorGuids: ["d320a0cf-0420-b45c-8b4c-a7ad6fbf42d2"],
                    },
                    yValue: -730,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 46,
              actionItems: [
                {
                  id: "a-101-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._05-app-profile",
                      selectorGuids: ["b0a7eb65-45cc-9c5c-182d-e87739d67fe5"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 80,
              actionItems: [
                {
                  id: "a-101-n-51",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".h1-section",
                      selectorGuids: ["9acf228f-d7da-322b-3a16-d0304a54e390"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-101-n-52",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".h1-section",
                      selectorGuids: ["9acf228f-d7da-322b-3a16-d0304a54e390"],
                    },
                    yValue: 200,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1539992866935,
    },
    "a-67": {
      id: "a-67",
      title: "action-loader",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-67-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".loader__wrapper",
                  selectorGuids: ["a3cad9aa-6cea-44be-9f8b-69b669d8c79f"],
                },
                value: "flex",
              },
            },
            {
              id: "a-67-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 300,
                target: {
                  selector: ".bar-loader",
                  selectorGuids: ["7c33a062-7cfa-42a9-fc7c-6eadd7976dc2"],
                },
                widthValue: 1,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-67-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 1000,
                target: {
                  selector: ".bar-loader",
                  selectorGuids: ["7c33a062-7cfa-42a9-fc7c-6eadd7976dc2"],
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1535694967204,
    },
    "a-64": {
      id: "a-64",
      title: "hero-load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-64-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|506e0e73-44d4-e5a6-0dc6-6b80db2ea668",
                },
                xValue: 35,
                yValue: 30,
                xUnit: "VW",
                yUnit: "VH",
                zUnit: "PX",
              },
            },
            {
              id: "a-64-n-45",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".text-block-18",
                  selectorGuids: ["1e2fa39a-ee67-5986-aaaf-d6b08e4b913d"],
                },
                yValue: 57,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-64-n-43",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|e6b3e3b1-42bf-1da6-2b66-e6f392454509",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-64-n-39",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|3e2c62fd-4ae3-9693-3f3f-d5be3d34f55d",
                },
                xValue: 0.4,
                yValue: 0.4,
                locked: true,
              },
            },
            {
              id: "a-64-n-26",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|589fa596-63c0-1bda-fc75-3c46359c46d5",
                },
                value: "flex",
              },
            },
            {
              id: "a-64-n-31",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|6ed06a05-42e8-e28a-2c26-c8102d031f93",
                },
                xValue: 0.5,
                yValue: 0.5,
                locked: true,
              },
            },
            {
              id: "a-64-n-29",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|51316fe1-6065-aeef-3742-b4af07823946",
                },
                xValue: 0.6000000000000006,
                yValue: 0.6000000000000006,
                locked: true,
              },
            },
            {
              id: "a-64-n-33",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|98ebdd7b-d4ca-9a4e-0dd1-24e7a526bec8",
                },
                xValue: 0.3000000000000003,
                yValue: 0.3000000000000003,
                locked: true,
              },
            },
            {
              id: "a-64-n-35",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|e6b3e3b1-42bf-1da6-2b66-e6f392454509",
                },
                xValue: 0.5,
                yValue: 0.5,
                locked: true,
              },
            },
            {
              id: "a-64-n-37",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|c68dd869-1cef-443d-9f79-25249bdd4444",
                },
                xValue: 0.4,
                yValue: 0.4,
                locked: true,
              },
            },
            {
              id: "a-64-n-48",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|84903a8c-24c7-12f4-a0da-210f9a5fe5df",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-64-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|bf4aa045-6138-c9e1-bca5-d2709e076f9a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-64-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutExpo",
                duration: 1500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|dbac27fd-0c76-785b-c672-cae1b0870828",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "VH",
                zUnit: "PX",
              },
            },
            {
              id: "a-64-n-38",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 100,
                easing: "inOutQuint",
                duration: 2000,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|c68dd869-1cef-443d-9f79-25249bdd4444",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-64-n-34",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 100,
                easing: "inOutQuint",
                duration: 1600,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|98ebdd7b-d4ca-9a4e-0dd1-24e7a526bec8",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-64-n-40",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 100,
                easing: "inOutQuint",
                duration: 1800,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|3e2c62fd-4ae3-9693-3f3f-d5be3d34f55d",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-64-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutExpo",
                duration: 1000,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|039e3f74-912e-f9ce-bcd6-10e466d2430f",
                },
                yValue: -50,
                xUnit: "PX",
                yUnit: "VH",
                zUnit: "PX",
              },
            },
            {
              id: "a-64-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 230,
                easing: "inOutExpo",
                duration: 2500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|506e0e73-44d4-e5a6-0dc6-6b80db2ea668",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "VW",
                yUnit: "VH",
                zUnit: "PX",
              },
            },
            {
              id: "a-64-n-32",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 250,
                easing: "inOutQuart",
                duration: 1700,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|6ed06a05-42e8-e28a-2c26-c8102d031f93",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-64-n-30",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 300,
                easing: "inOutQuart",
                duration: 2000,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|51316fe1-6065-aeef-3742-b4af07823946",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-64-n-36",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 300,
                easing: "inOutQuint",
                duration: 2500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|e6b3e3b1-42bf-1da6-2b66-e6f392454509",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-64-n-44",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "",
                duration: 600,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|e6b3e3b1-42bf-1da6-2b66-e6f392454509",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-64-n-46",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1800,
                easing: "outQuart",
                duration: 1000,
                target: {
                  selector: ".text-block-18",
                  selectorGuids: ["1e2fa39a-ee67-5986-aaaf-d6b08e4b913d"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-64-n-47",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2000,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|84903a8c-24c7-12f4-a0da-210f9a5fe5df",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-64-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".loader__wrapper",
                  selectorGuids: ["a3cad9aa-6cea-44be-9f8b-69b669d8c79f"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1535672005495,
    },
    "a-109": {
      id: "a-109",
      title: "aaaappp-5-profile",
      continuousParameterGroups: [
        {
          id: "a-109-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-109-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._05-app-profile",
                      selectorGuids: ["b0a7eb65-45cc-9c5c-182d-e87739d67fe5"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-109-n-13",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-news",
                      selectorGuids: ["a4027ae3-2e30-928d-9916-a246cc6f854f"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-109-n-11",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-profile",
                      selectorGuids: ["45896ed6-4bf1-a5e7-fb1d-e32a3f7bb79e"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 0.00001,
              actionItems: [
                {
                  id: "a-109-n-14",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-news",
                      selectorGuids: ["a4027ae3-2e30-928d-9916-a246cc6f854f"],
                    },
                    yValue: 25,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 2,
              actionItems: [
                {
                  id: "a-109-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-profile",
                      selectorGuids: ["45896ed6-4bf1-a5e7-fb1d-e32a3f7bb79e"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 5,
              actionItems: [
                {
                  id: "a-109-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-profile",
                      selectorGuids: ["45896ed6-4bf1-a5e7-fb1d-e32a3f7bb79e"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-109-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._04-app-news",
                      selectorGuids: ["bde1a025-092c-bf81-66a5-4ce5360fd52c"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-109-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-title-profile",
                      selectorGuids: ["45896ed6-4bf1-a5e7-fb1d-e32a3f7bb79e"],
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: "a-109-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._05-app-profile",
                      selectorGuids: ["b0a7eb65-45cc-9c5c-182d-e87739d67fe5"],
                    },
                    yValue: -730,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: "a-109-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._04-app-news",
                      selectorGuids: ["bde1a025-092c-bf81-66a5-4ce5360fd52c"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1539992866935,
    },
    "a-112": {
      id: "a-112",
      title: "main-scroll-mobile",
      continuousParameterGroups: [
        {
          id: "a-112-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-112-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|e059fb9b-e09c-30f0-6005-aca67126dcc2",
                    },
                    yValue: 100,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|bfe35df8-5281-6e5f-13b3-6a5ba7f872b3",
                    },
                    yValue: 100,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._w-hero-ttitle",
                      selectorGuids: ["4dc853f8-217a-fef0-000b-37f2cdac4275"],
                    },
                    xValue: 0,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-11",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163abe",
                    },
                    xValue: -20,
                    yValue: -45,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-16",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163abe",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-19",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".pin-scroll",
                      selectorGuids: ["ccf6f770-a9ec-9cda-2ba9-921d9d127e12"],
                    },
                    xValue: 0,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac2",
                    },
                    xValue: 39,
                    yValue: -40,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-12",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac2",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-13",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac1",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac1",
                    },
                    xValue: 18,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-14",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac0",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-9",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac0",
                    },
                    xValue: 9,
                    yValue: -60,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-15",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163abf",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163abf",
                    },
                    xValue: 41,
                    yValue: -64,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|9f30c897-a9bb-0a15-0ecb-cc1fbfbf4b2e",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|9f30c897-a9bb-0a15-0ecb-cc1fbfbf4b2e",
                    },
                    xValue: 25,
                    yValue: -58,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-53",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac2",
                    },
                    widthValue: 252,
                    heightValue: 180,
                    widthUnit: "PX",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-112-n-55",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac1",
                    },
                    widthValue: 252,
                    heightValue: 180,
                    widthUnit: "PX",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-112-n-59",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|27276687-9ecb-4ce6-8f07-15eee8bfb886",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-112-n-61",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|bfe35df8-5281-6e5f-13b3-6a5ba7f872b3",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-112-n-74",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|46566e6c-9271-9e0d-9198-afe6953df2a8",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-78",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b83a1e5e-ad84-5ec4-ac90-7c5e267e4730",
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 4,
              actionItems: [
                {
                  id: "a-112-n-21",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac2",
                    },
                    zValue: -24,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-25",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163abe",
                    },
                    zValue: -20,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-22",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac1",
                    },
                    zValue: 22,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-23",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac0",
                    },
                    zValue: -12,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-24",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163abf",
                    },
                    zValue: 17,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-20",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|9f30c897-a9bb-0a15-0ecb-cc1fbfbf4b2e",
                    },
                    zValue: 33,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-60",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|27276687-9ecb-4ce6-8f07-15eee8bfb886",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-112-n-62",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|bfe35df8-5281-6e5f-13b3-6a5ba7f872b3",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-112-n-76",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|2036e878-fa44-310d-6b8e-5fcab104e7df",
                    },
                    yValue: -74,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 6.99,
              actionItems: [
                {
                  id: "a-112-n-26",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163abd",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-112-n-79",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b83a1e5e-ad84-5ec4-ac90-7c5e267e4730",
                    },
                    xValue: -10,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 7,
              actionItems: [
                {
                  id: "a-112-n-27",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|e059fb9b-e09c-30f0-6005-aca67126dcc2",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-30",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|bfe35df8-5281-6e5f-13b3-6a5ba7f872b3",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-32",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|d239e00c-ff1a-6c9a-7f62-5a862df4cfbf",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-112-n-34",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac2",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-38",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163abe",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-39",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac2",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-43",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163abe",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-44",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163abd",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-112-n-40",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac1",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-35",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac1",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-41",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac0",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-36",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac0",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-42",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163abf",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-37",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163abf",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-31",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|9f30c897-a9bb-0a15-0ecb-cc1fbfbf4b2e",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-112-n-33",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|9f30c897-a9bb-0a15-0ecb-cc1fbfbf4b2e",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-112-n-28",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|9f30c897-a9bb-0a15-0ecb-cc1fbfbf4b2e",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-54",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac2",
                    },
                    widthValue: 252,
                    heightValue: 180,
                    widthUnit: "PX",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
                {
                  id: "a-112-n-56",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id: "5fde6b6899797c06e1f8f61c|cd107204-2f99-110b-8b2f-58c33e163ac1",
                    },
                    widthValue: 252,
                    heightValue: 180,
                    widthUnit: "PX",
                    heightUnit: "PX",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 7.01,
              actionItems: [
                {
                  id: "a-112-n-47",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|d239e00c-ff1a-6c9a-7f62-5a862df4cfbf",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-112-n-77",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|2036e878-fa44-310d-6b8e-5fcab104e7df",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 8,
              actionItems: [
                {
                  id: "a-112-n-48",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|9f30c897-a9bb-0a15-0ecb-cc1fbfbf4b2e",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-112-n-49",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._w-hero-ttitle",
                      selectorGuids: ["4dc853f8-217a-fef0-000b-37f2cdac4275"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-112-n-63",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 31,
                    bValue: 31,
                    gValue: 31,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 12,
              actionItems: [
                {
                  id: "a-112-n-50",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._w-hero-ttitle",
                      selectorGuids: ["4dc853f8-217a-fef0-000b-37f2cdac4275"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-112-n-65",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".inner__content",
                      selectorGuids: ["e2882ef5-4cb1-9ef0-cfb8-9b5c494f09e1"],
                    },
                    globalSwatchId: "",
                    rValue: 34,
                    bValue: 34,
                    gValue: 34,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 13,
              actionItems: [
                {
                  id: "a-112-n-51",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outQuart",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: "._w-hero-ttitle",
                      selectorGuids: ["4dc853f8-217a-fef0-000b-37f2cdac4275"],
                    },
                    xValue: -180,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 15,
              actionItems: [
                {
                  id: "a-112-n-64",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 84,
                    bValue: 103,
                    gValue: 124,
                    aValue: 1,
                  },
                },
                {
                  id: "a-112-n-66",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".inner__content",
                      selectorGuids: ["e2882ef5-4cb1-9ef0-cfb8-9b5c494f09e1"],
                    },
                    globalSwatchId: "",
                    rValue: 71,
                    bValue: 79,
                    gValue: 88,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-112-n-67",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 184,
                    bValue: 107,
                    gValue: 71,
                    aValue: 1,
                  },
                },
                {
                  id: "a-112-n-73",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".inner__content",
                      selectorGuids: ["e2882ef5-4cb1-9ef0-cfb8-9b5c494f09e1"],
                    },
                    globalSwatchId: "",
                    rValue: 131,
                    bValue: 79,
                    gValue: 55,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 45,
              actionItems: [
                {
                  id: "a-112-n-68",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 155,
                    bValue: 151,
                    gValue: 73,
                    aValue: 1,
                  },
                },
                {
                  id: "a-112-n-72",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".inner__content",
                      selectorGuids: ["e2882ef5-4cb1-9ef0-cfb8-9b5c494f09e1"],
                    },
                    globalSwatchId: "",
                    rValue: 105,
                    bValue: 103,
                    gValue: 61,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 60,
              actionItems: [
                {
                  id: "a-112-n-69",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 65,
                    bValue: 126,
                    gValue: 60,
                    aValue: 1,
                  },
                },
                {
                  id: "a-112-n-71",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".inner__content",
                      selectorGuids: ["e2882ef5-4cb1-9ef0-cfb8-9b5c494f09e1"],
                    },
                    globalSwatchId: "",
                    rValue: 42,
                    bValue: 78,
                    gValue: 39,
                    aValue: 1,
                  },
                },
              ],
            },
            {
              keyframe: 80,
              actionItems: [
                {
                  id: "a-112-n-80",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b83a1e5e-ad84-5ec4-ac90-7c5e267e4730",
                    },
                    xValue: -10,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 90,
              actionItems: [
                {
                  id: "a-112-n-52",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".pin-scroll",
                      selectorGuids: ["ccf6f770-a9ec-9cda-2ba9-921d9d127e12"],
                    },
                    xValue: 16,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-112-n-70",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|5bca679bbae718229c49a9d1",
                    },
                    globalSwatchId: "",
                    rValue: 24,
                    bValue: 24,
                    gValue: 24,
                    aValue: 1,
                  },
                },
                {
                  id: "a-112-n-81",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b83a1e5e-ad84-5ec4-ac90-7c5e267e4730",
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-112-n-75",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|46566e6c-9271-9e0d-9198-afe6953df2a8",
                    },
                    yValue: -300,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1539991904430,
    },
    "a-108": {
      id: "a-108",
      title: "logo-move",
      continuousParameterGroups: [
        {
          id: "a-108-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-108-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-logo-ts",
                      selectorGuids: ["32cbf17f-febb-a3d8-1ad9-f44e4675e396"],
                    },
                    xValue: -4,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-108-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-logo-ts",
                      selectorGuids: ["32cbf17f-febb-a3d8-1ad9-f44e4675e396"],
                    },
                    xValue: 4,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-108-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-108-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: "._w-logo-ts",
                      selectorGuids: ["32cbf17f-febb-a3d8-1ad9-f44e4675e396"],
                    },
                    yValue: -3,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-108-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "inOutQuart",
                    duration: 500,
                    target: {
                      selector: "._w-logo-ts",
                      selectorGuids: ["32cbf17f-febb-a3d8-1ad9-f44e4675e396"],
                    },
                    yValue: 5,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1540619531485,
    },
    "a-123": {
      id: "a-123",
      title: "about-sc",
      continuousParameterGroups: [
        {
          id: "a-123-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-123-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".headling_xlarge",
                      selectorGuids: ["5c8aefb8-64c3-84cc-4b1d-8df92a5a8154"],
                    },
                    xValue: 0,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-123-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".headling_xlarge",
                      selectorGuids: ["5c8aefb8-64c3-84cc-4b1d-8df92a5a8154"],
                    },
                    xValue: -190,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1543197293778,
    },
    "a-131": {
      id: "a-131",
      title: "friends-effect",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-131-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 700,
                target: {
                  selector: ".ui-friends-header",
                  selectorGuids: ["c7bdc79b-1348-4c50-4179-5c5f8073db89"],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-131-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 700,
                target: {
                  selector: ".user-dj",
                  selectorGuids: ["2d452882-9431-3072-4d81-50547f45b347"],
                },
                yValue: -35,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-131-n-4",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 700,
                target: {
                  selector: ".ui-friends-header",
                  selectorGuids: ["c7bdc79b-1348-4c50-4179-5c5f8073db89"],
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-131-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 700,
                target: {
                  selector: ".user-dj",
                  selectorGuids: ["2d452882-9431-3072-4d81-50547f45b347"],
                },
                xValue: 0.4,
                yValue: 0.4,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1544256671616,
    },
    "a-136": {
      id: "a-136",
      title: "second-bg 2",
      continuousParameterGroups: [
        {
          id: "a-136-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-136-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c1943f8f62a|1333589c-f374-6154-d145-18288ae10414",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-136-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c1943f8f62a|1333589c-f374-6154-d145-18288ae10414",
                    },
                    yValue: -300,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1544073361037,
    },
    "a-139": {
      id: "a-139",
      title: "add-slot",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-139-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 700,
                easing: "",
                duration: 0,
                target: {},
                yValue: -16.66,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-139-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 700,
                easing: "",
                duration: 0,
                target: {},
                yValue: -32.6,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-139-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 700,
                easing: "",
                duration: 0,
                target: {},
                yValue: -49.19000000000001,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-139-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 700,
                easing: "",
                duration: 0,
                target: {},
                yValue: -65.4,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-139-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 700,
                easing: "",
                duration: 0,
                target: {},
                yValue: -81.6,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1544676520902,
    },
    "a-140": {
      id: "a-140",
      title: "w-slot",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-140-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "",
                duration: 0,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|91feef94-58d9-adcc-6326-3bb7b85d3a82",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-140-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "",
                duration: 0,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|91feef94-58d9-adcc-6326-3bb7b85d3a82",
                },
                yValue: -740,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-140-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "",
                duration: 0,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|91feef94-58d9-adcc-6326-3bb7b85d3a82",
                },
                yValue: -1480,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-140-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "",
                duration: 0,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|91feef94-58d9-adcc-6326-3bb7b85d3a82",
                },
                yValue: -2220,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-140-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "",
                duration: 0,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|91feef94-58d9-adcc-6326-3bb7b85d3a82",
                },
                yValue: -2960,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-140-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "",
                duration: 0,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|91feef94-58d9-adcc-6326-3bb7b85d3a82",
                },
                yValue: -3700,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-140-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "",
                duration: 0,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|91feef94-58d9-adcc-6326-3bb7b85d3a82",
                },
                yValue: -4440,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1544834616741,
    },
    "a-142": {
      id: "a-142",
      title: "aaaappp-2-friends-mobile",
      continuousParameterGroups: [
        {
          id: "a-142-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-142-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-736732262841",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-142-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|33803530-58ee-4227-3e41-de0f3e76e93f",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-142-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|33803530-58ee-4227-3e41-de0f3e76e93f",
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-142-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|aade15b4-4e1d-14bd-2468-77ce79f55a07",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 0.0001,
              actionItems: [
                {
                  id: "a-142-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|aade15b4-4e1d-14bd-2468-77ce79f55a07",
                    },
                    yValue: 33,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 5,
              actionItems: [
                {
                  id: "a-142-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|33803530-58ee-4227-3e41-de0f3e76e93f",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-142-n-7",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-736732262840",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-142-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outQuart",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|33803530-58ee-4227-3e41-de0f3e76e93f",
                    },
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: "a-142-n-9",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "outQuart",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-736732262841",
                    },
                    yValue: -730,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: "a-142-n-10",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-736732262840",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1539992866935,
    },
    "a-143": {
      id: "a-143",
      title: "every-day-mobile",
      continuousParameterGroups: [
        {
          id: "a-143-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-143-n",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|bfe35df8-5281-6e5f-13b3-6a5ba7f872b3",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-143-n-2",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|6738a2ab-0569-ccba-6d3a-9ab97053e001",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 1.99,
              actionItems: [
                {
                  id: "a-143-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|d2176909-e0cf-ce9c-747a-f57035f70477",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 2,
              actionItems: [
                {
                  id: "a-143-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|bfe35df8-5281-6e5f-13b3-6a5ba7f872b3",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-143-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|6738a2ab-0569-ccba-6d3a-9ab97053e001",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-143-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|67d75cb0-7f39-94e0-d7ff-9227122057b2",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-7",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|67d75cb0-7f39-94e0-d7ff-9227122057b2",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-143-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-9",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-143-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|890b4fb9-f5a6-e787-1576-ec105f374d5d",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-11",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|d2176909-e0cf-ce9c-747a-f57035f70477",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-143-n-12",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|35223df9-6dc6-73d4-6d94-3db1a045180e",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-13",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-73673226283b",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-143-n-14",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-73673226283b",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-15",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-16",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-143-n-17",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|35223df9-6dc6-73d4-6d94-3db1a045180e",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 6.5,
              actionItems: [
                {
                  id: "a-143-n-18",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|67d75cb0-7f39-94e0-d7ff-9227122057b2",
                    },
                    zValue: 15,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-143-n-19",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    zValue: -23,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-143-n-20",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|35223df9-6dc6-73d4-6d94-3db1a045180e",
                    },
                    zValue: 29,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-143-n-21",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1e908f87-7d51-11c4-e730-2b97589f27bf",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-22",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1e908f87-7d51-11c4-e730-2b97589f27bf",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-143-n-23",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    zValue: -10,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 14,
              actionItems: [
                {
                  id: "a-143-n-24",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1e908f87-7d51-11c4-e730-2b97589f27bf",
                    },
                    zValue: 26,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 15,
              actionItems: [
                {
                  id: "a-143-n-25",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-73673226283b",
                    },
                    xValue: 0.8,
                    yValue: 0.8,
                    locked: true,
                  },
                },
                {
                  id: "a-143-n-26",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-73673226283b",
                    },
                    yValue: -4,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-27",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-73673226283b",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 15.5,
              actionItems: [
                {
                  id: "a-143-n-28",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|b793fa7b-0a0f-d91a-35da-73673226283b",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 20,
              actionItems: [
                {
                  id: "a-143-n-29",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    xValue: 0,
                    yValue: 42,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-30",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    zValue: 23,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 25,
              actionItems: [
                {
                  id: "a-143-n-31",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|67d75cb0-7f39-94e0-d7ff-9227122057b2",
                    },
                    xValue: -20,
                    yValue: 55,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-32",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|67d75cb0-7f39-94e0-d7ff-9227122057b2",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-143-n-33",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    xValue: -4,
                    yValue: 10,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-34",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    zValue: 15,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-143-n-47",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1e908f87-7d51-11c4-e730-2b97589f27bf",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-143-n-48",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|890b4fb9-f5a6-e787-1576-ec105f374d5d",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-143-n-50",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-143-n-52",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|35223df9-6dc6-73d4-6d94-3db1a045180e",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-143-n-54",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|67d75cb0-7f39-94e0-d7ff-9227122057b2",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-143-n-56",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 45,
              actionItems: [
                {
                  id: "a-143-n-35",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|890b4fb9-f5a6-e787-1576-ec105f374d5d",
                    },
                    xValue: 13,
                    yValue: 50,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-36",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|45545f66-7e2c-8343-7253-0e17e30da0e2",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 47,
              actionItems: [
                {
                  id: "a-143-n-37",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    xValue: 29,
                    yValue: 55,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-38",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: "a-143-n-39",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|45545f66-7e2c-8343-7253-0e17e30da0e2",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-143-n-40",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    xValue: -18,
                    yValue: 46,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-41",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-143-n-42",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|35223df9-6dc6-73d4-6d94-3db1a045180e",
                    },
                    xValue: 23,
                    yValue: 50,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-43",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|35223df9-6dc6-73d4-6d94-3db1a045180e",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 51,
              actionItems: [
                {
                  id: "a-143-n-51",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|623cdc5a-83be-27d9-bb6f-1c428f15df35",
                    },
                    xValue: 0.8,
                    yValue: 0.8,
                    locked: true,
                  },
                },
                {
                  id: "a-143-n-46",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1e908f87-7d51-11c4-e730-2b97589f27bf",
                    },
                    xValue: 0.8,
                    yValue: 0.8,
                    locked: true,
                  },
                },
                {
                  id: "a-143-n-49",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|890b4fb9-f5a6-e787-1576-ec105f374d5d",
                    },
                    xValue: 0.8,
                    yValue: 0.8,
                    locked: true,
                  },
                },
                {
                  id: "a-143-n-53",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|35223df9-6dc6-73d4-6d94-3db1a045180e",
                    },
                    xValue: 0.8,
                    yValue: 0.8,
                    locked: true,
                  },
                },
                {
                  id: "a-143-n-55",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|67d75cb0-7f39-94e0-d7ff-9227122057b2",
                    },
                    xValue: 0.8,
                    yValue: 0.8,
                    locked: true,
                  },
                },
                {
                  id: "a-143-n-57",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1780c7f3-8674-6c07-e5ce-69a740fe54b0",
                    },
                    xValue: 0.8,
                    yValue: 0.8,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 55,
              actionItems: [
                {
                  id: "a-143-n-44",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1e908f87-7d51-11c4-e730-2b97589f27bf",
                    },
                    xValue: -13,
                    yValue: 43,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-143-n-45",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797c06e1f8f61c|1e908f87-7d51-11c4-e730-2b97589f27bf",
                    },
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1541104196805,
    },
    "a-137": {
      id: "a-137",
      title: "every-day-section",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-137-n-11",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|98ddae8a-42dc-c6c2-ef22-390e41d5f1a9",
                },
                xValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-137-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|45545f66-7e2c-8343-7253-0e17e30da0e2",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-137-n-15",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|f27d67f3-313f-dfb5-0638-246d84da92c9",
                },
                widthValue: 0.1,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-137-n-10",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|6f94f813-96d6-024b-173b-55693bde54d6",
                },
                xValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-137-n-9",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|1766d0e4-9c1a-9be0-5d52-61bd3150ceb8",
                },
                xValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-137-n-14",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 800,
                easing: "inOutSine",
                duration: 1000,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|1766d0e4-9c1a-9be0-5d52-61bd3150ceb8",
                },
                xValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-137-n-13",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 800,
                easing: "inOutSine",
                duration: 800,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|6f94f813-96d6-024b-173b-55693bde54d6",
                },
                xValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-137-n-12",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 800,
                easing: "inOutSine",
                duration: 900,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|98ddae8a-42dc-c6c2-ef22-390e41d5f1a9",
                },
                xValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-137-n-16",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 2000,
                easing: "outQuart",
                duration: 800,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|f27d67f3-313f-dfb5-0638-246d84da92c9",
                },
                widthValue: 100,
                widthUnit: "AUTO",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-137-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2300,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797c06e1f8f61c|45545f66-7e2c-8343-7253-0e17e30da0e2",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1544422275645,
    },
    "a-144": {
      id: "a-144",
      title: "3d",
      continuousParameterGroups: [
        {
          id: "a-144-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-144-n-32",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|4fbcef3b-e871-2a7d-b077-18a83943aba6",
                    },
                    xValue: 0,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-144-n-42",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-50",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-144-n-52",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 0.1,
              actionItems: [
                {
                  id: "a-144-n-57",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|61a7504e-be54-835b-fa7b-8b48b5daf045",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-144-n-69",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a85",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-144-n-71",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a86",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 0.2,
              actionItems: [
                {
                  id: "a-144-n-58",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|61a7504e-be54-835b-fa7b-8b48b5daf045",
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-144-n-70",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a85",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-144-n-72",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a86",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 0.49,
              actionItems: [
                {
                  id: "a-144-n-47",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a89",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 0.5,
              actionItems: [
                {
                  id: "a-144-n-48",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a89",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-144-n-45",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|034604fa-590f-a049-576c-af59c810e3fe",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-144-n",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 0.51,
              actionItems: [
                {
                  id: "a-144-n-46",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|034604fa-590f-a049-576c-af59c810e3fe",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 4,
              actionItems: [
                {
                  id: "a-144-n-55",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 0,
                    yValue: 5,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 8,
              actionItems: [
                {
                  id: "a-144-n-25",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-144-n-56",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 8,
                    yValue: 5,
                    zValue: -7,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 13,
              actionItems: [
                {
                  id: "a-144-n-49",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    xValue: 0.8,
                    yValue: 0.8,
                    locked: true,
                  },
                },
                {
                  id: "a-144-n-43",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    xValue: 60,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 14,
              actionItems: [
                {
                  id: "a-144-n-26",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 20,
              actionItems: [
                {
                  id: "a-144-n-13",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a85",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: -300,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-144-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a85",
                    },
                    xValue: 0,
                    yValue: -90,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-59",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a87",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 21,
              actionItems: [
                {
                  id: "a-144-n-60",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a87",
                    },
                    value: 0.8,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 25,
              actionItems: [
                {
                  id: "a-144-n-7",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a86",
                    },
                    xValue: 0,
                    yValue: 90,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 26,
              actionItems: [
                {
                  id: "a-144-n-9",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a87",
                    },
                    xValue: 90,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-11",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a88",
                    },
                    xValue: -90,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-21",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a89",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-23",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a89",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "VH",
                  },
                },
                {
                  id: "a-144-n-15",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a86",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: -300,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-144-n-19",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a88",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: -300,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-144-n-17",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a87",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: -300,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 28,
              actionItems: [
                {
                  id: "a-144-n-29",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: "a-144-n-51",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 55,
              actionItems: [
                {
                  id: "a-144-n-63",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|3e713aa9-dafb-628e-9388-6175012df6bf",
                    },
                    xValue: -35,
                    yValue: -15,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 65,
              actionItems: [
                {
                  id: "a-144-n-33",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|4fbcef3b-e871-2a7d-b077-18a83943aba6",
                    },
                    xValue: -320,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-144-n-64",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|3e713aa9-dafb-628e-9388-6175012df6bf",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-65",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|6313d42b-7ba6-1281-bf93-e16d18e965b8",
                    },
                    xValue: -35,
                    yValue: -15,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 80,
              actionItems: [
                {
                  id: "a-144-n-66",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|6313d42b-7ba6-1281-bf93-e16d18e965b8",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-67",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c2a7705b-817f-38ba-92aa-0c9684920d83",
                    },
                    xValue: -35,
                    yValue: -15,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-73",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|3e713aa9-dafb-628e-9388-6175012df6bf",
                    },
                    xValue: 15,
                    yValue: -29,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 90,
              actionItems: [
                {
                  id: "a-144-n-68",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c2a7705b-817f-38ba-92aa-0c9684920d83",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-74",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|6313d42b-7ba6-1281-bf93-e16d18e965b8",
                    },
                    xValue: 15,
                    yValue: 25,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-144-n-2",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 147,
                    yValue: 141,
                    zValue: 85,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 33,
                    yValue: 44,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-144-n-6",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a85",
                    },
                    xValue: 0,
                    yValue: -90,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-10",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a87",
                    },
                    xValue: 90,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-18",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a87",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: -100,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-144-n-20",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a88",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 200,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-144-n-12",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a88",
                    },
                    xValue: -95,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-22",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a89",
                    },
                    xValue: 10,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-24",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a89",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 70,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "VH",
                  },
                },
                {
                  id: "a-144-n-16",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a86",
                    },
                    xValue: 8,
                    yValue: 0,
                    zValue: -300,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-144-n-8",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a86",
                    },
                    xValue: 0,
                    yValue: 90,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-30",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 1.4,
                    yValue: 1.4,
                    locked: true,
                  },
                },
                {
                  id: "a-144-n-31",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 180,
                    yValue: 177,
                    zValue: 43,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-144-n-14",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a85",
                    },
                    xValue: -10,
                    yValue: 20,
                    zValue: 200,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1548209234627,
    },
    "a-125": {
      id: "a-125",
      title: "hero-load-vision",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-125-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797cc8e5f8f620|5c5e5646-14f4-9844-bfeb-01bf33296107",
                },
                xValue: 35,
                yValue: 20,
                xUnit: "VW",
                yUnit: "VH",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-125-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "",
                duration: 500,
                target: {
                  id: "5fde6b6899797cc8e5f8f620|98587059-7400-fc3e-1baa-4857a665145d",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-125-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutExpo",
                duration: 1500,
                target: {
                  id: "5fde6b6899797cc8e5f8f620|98587059-7400-fc3e-1baa-4857a6651460",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "VH",
                zUnit: "PX",
              },
            },
            {
              id: "a-125-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutExpo",
                duration: 1800,
                target: {
                  id: "5fde6b6899797cc8e5f8f620|5c5e5646-14f4-9844-bfeb-01bf33296107",
                },
                xValue: 0,
                yValue: 0,
                xUnit: "VW",
                yUnit: "VH",
                zUnit: "PX",
              },
            },
            {
              id: "a-125-n-24",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutExpo",
                duration: 1500,
                target: {
                  id: "5fde6b6899797cc8e5f8f620|98587059-7400-fc3e-1baa-4857a665145f",
                },
                yValue: -50,
                xUnit: "PX",
                yUnit: "VH",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-125-n-23",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".loader__wrapper",
                  selectorGuids: ["a3cad9aa-6cea-44be-9f8b-69b669d8c79f"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1535672005495,
    },
    "a-146": {
      id: "a-146",
      title: "3d -  mobile",
      continuousParameterGroups: [
        {
          id: "a-146-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-146-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|4fbcef3b-e871-2a7d-b077-18a83943aba6",
                    },
                    xValue: 0,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-146-n-2",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-3",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-146-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-146-n-48",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a85",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-146-n-50",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a86",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-146-n-52",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".text-block-20",
                      selectorGuids: ["e4b5b33f-b513-a97a-536f-031257ccbc55"],
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 0.1,
              actionItems: [
                {
                  id: "a-146-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|61a7504e-be54-835b-fa7b-8b48b5daf045",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-146-n-49",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a85",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-146-n-51",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a86",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 0.2,
              actionItems: [
                {
                  id: "a-146-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|61a7504e-be54-835b-fa7b-8b48b5daf045",
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 0.49,
              actionItems: [
                {
                  id: "a-146-n-7",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a89",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 0.5,
              actionItems: [
                {
                  id: "a-146-n-8",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a89",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-146-n-9",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|034604fa-590f-a049-576c-af59c810e3fe",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-146-n-10",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-11",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 0.51,
              actionItems: [
                {
                  id: "a-146-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|034604fa-590f-a049-576c-af59c810e3fe",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 4,
              actionItems: [
                {
                  id: "a-146-n-13",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 0,
                    yValue: 5,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 8,
              actionItems: [
                {
                  id: "a-146-n-14",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-146-n-15",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 8,
                    yValue: 5,
                    zValue: -7,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 13,
              actionItems: [
                {
                  id: "a-146-n-16",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    xValue: 0.8,
                    yValue: 0.8,
                    locked: true,
                  },
                },
                {
                  id: "a-146-n-17",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    xValue: 60,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 14,
              actionItems: [
                {
                  id: "a-146-n-18",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 20,
              actionItems: [
                {
                  id: "a-146-n-19",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a85",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: -180,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-146-n-20",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a85",
                    },
                    xValue: 0,
                    yValue: -90,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-21",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a87",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 21,
              actionItems: [
                {
                  id: "a-146-n-22",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a87",
                    },
                    value: 0.8,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 25,
              actionItems: [
                {
                  id: "a-146-n-23",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a86",
                    },
                    xValue: 0,
                    yValue: 90,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-24",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 26,
              actionItems: [
                {
                  id: "a-146-n-25",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a87",
                    },
                    xValue: 90,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-26",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a88",
                    },
                    xValue: -90,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-27",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a89",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-28",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a89",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "VH",
                  },
                },
                {
                  id: "a-146-n-29",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a86",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: -180,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-146-n-30",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a88",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: -180,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-146-n-31",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a87",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: -180,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: "a-146-n-32",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|841dc035-3b55-db3a-618f-1d99f1593c8f",
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-146-n-33",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|4fbcef3b-e871-2a7d-b077-18a83943aba6",
                    },
                    xValue: -470,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-146-n-34",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 147,
                    yValue: 141,
                    zValue: 85,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-35",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 33,
                    yValue: 44,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-146-n-36",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a85",
                    },
                    xValue: 0,
                    yValue: -90,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-37",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a87",
                    },
                    xValue: 90,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-38",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a87",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: -100,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-146-n-39",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a88",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 200,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-146-n-40",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a88",
                    },
                    xValue: -95,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-41",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a89",
                    },
                    xValue: 10,
                    yValue: 0,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-42",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a89",
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 70,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "VH",
                  },
                },
                {
                  id: "a-146-n-43",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a86",
                    },
                    xValue: 8,
                    yValue: 0,
                    zValue: -300,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-146-n-44",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a86",
                    },
                    xValue: 0,
                    yValue: 90,
                    zValue: 0,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-45",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 1.4,
                    yValue: 1.4,
                    locked: true,
                  },
                },
                {
                  id: "a-146-n-46",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a84",
                    },
                    xValue: 180,
                    yValue: 177,
                    zValue: 43,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-146-n-47",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      id: "5fde6b6899797cc8e5f8f620|c08377dd-65d3-5b1a-377e-e9c0075c9a85",
                    },
                    xValue: -10,
                    yValue: 20,
                    zValue: 200,
                    xUnit: "VW",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1548209234627,
    },
  },
  site: {
    mediaQueries: [
      {
        key: "main",
        min: 992,
        max: 10000,
      },
      {
        key: "medium",
        min: 768,
        max: 991,
      },
      {
        key: "small",
        min: 480,
        max: 767,
      },
      {
        key: "tiny",
        min: 0,
        max: 479,
      },
    ],
  },
});

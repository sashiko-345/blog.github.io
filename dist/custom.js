!(function (e) {
  "function" == typeof define && define.amd ? define(e) : e();
})(function () {
  "use strict";
  var t,
    e =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function n(t, e) {
    var n,
      i = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        i.push.apply(i, n)),
      i
    );
  }
  function c(i) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? n(Object(r), !0).forEach(function (e) {
            var t, n;
            (t = i),
              (e = r[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
        : n(Object(r)).forEach(function (e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e));
          });
    }
    return i;
  }
  function i(e) {
    return (i =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  (t = { exports: {} }),
    (function (e, i, t) {
      if ("customElements" in e) t();
      else {
        if (e.AWAITING_WEB_COMPONENTS_POLYFILL)
          return e.AWAITING_WEB_COMPONENTS_POLYFILL.then(t);
        var n = (e.AWAITING_WEB_COMPONENTS_POLYFILL = o());
        n.then(t);
        var r =
            e.WEB_COMPONENTS_POLYFILL ||
            "//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",
          t =
            e.ES6_CORE_POLYFILL ||
            "//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";
        "Promise" in e
          ? a(r).then(function () {
              (n.isDone = !0), n.exec();
            })
          : a(t).then(function () {
              a(r).then(function () {
                (n.isDone = !0), n.exec();
              });
            });
      }
      function o() {
        var t = [];
        return (
          (t.isDone = !1),
          (t.exec = function () {
            t.splice(0).forEach(function (e) {
              e();
            });
          }),
          (t.then = function (e) {
            return t.isDone ? e() : t.push(e), t;
          }),
          t
        );
      }
      function a(e) {
        var t = o(),
          n = i.createElement("script");
        return (
          (n.type = "text/javascript"),
          n.readyState
            ? (n.onreadystatechange = function () {
                ("loaded" != n.readyState && "complete" != n.readyState) ||
                  ((n.onreadystatechange = null), (t.isDone = !0), t.exec());
              })
            : (n.onload = function () {
                (t.isDone = !0), t.exec();
              }),
          (n.src = e),
          i.getElementsByTagName("head")[0].appendChild(n),
          (n.then = t.then),
          n
        );
      }
    })(window, document, function () {
      var e = function () {
        return (
          (n = [
            function (e, t) {
              e.exports = function (o) {
                var a = [];
                return (
                  (a.toString = function () {
                    return this.map(function (r) {
                      var e = (function () {
                        var e = r[1] || "",
                          t = r[3];
                        if (!t) return e;
                        if (o && "function" == typeof btoa) {
                          var n =
                              "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                              btoa(
                                unescape(encodeURIComponent(JSON.stringify(t)))
                              ) +
                              " */",
                            i = t.sources.map(function (e) {
                              return (
                                "/*# sourceURL=" + t.sourceRoot + e + " */"
                              );
                            });
                          return [e].concat(i).concat([n]).join("\n");
                        }
                        return [e].join("\n");
                      })();
                      return r[2] ? "@media " + r[2] + "{" + e + "}" : e;
                    }).join("");
                  }),
                  (a.i = function (e, t) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var n = {}, i = 0; i < this.length; i++) {
                      var r = this[i][0];
                      "number" == typeof r && (n[r] = !0);
                    }
                    for (i = 0; i < e.length; i++) {
                      var o = e[i];
                      ("number" == typeof o[0] && n[o[0]]) ||
                        (t && !o[2]
                          ? (o[2] = t)
                          : t && (o[2] = "(" + o[2] + ") and (" + t + ")"),
                        a.push(o));
                    }
                  }),
                  a
                );
              };
            },
            function (e, t, n) {
              n = n(3);
              e.exports = "string" == typeof n ? n : n.toString();
            },
            function (e, t, n) {
              n = n(4);
              e.exports = "string" == typeof n ? n : n.toString();
            },
            function (e, t, n) {
              (e.exports = n(0)(!1)).push([
                e.i,
                "@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",
                "",
              ]);
            },
            function (e, t, n) {
              (e.exports = n(0)(!1)).push([
                e.i,
                '.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',
                "",
              ]);
            },
            function (e, t, n) {
              n.r(t),
                n.d(t, "BoxIconElement", function () {
                  return m;
                });
              var i,
                r,
                o,
                a = n(1),
                s = n.n(a),
                l = n(2),
                c = n.n(l),
                a =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                n = function (e, t, n) {
                  return t && p(e.prototype, t), n && p(e, n), e;
                },
                a =
                  ((i =
                    (l = Object).getPrototypeOf ||
                    function (e) {
                      return e.__proto__;
                    }),
                  (r =
                    l.setPrototypeOf ||
                    function (e, t) {
                      return (e.__proto__ = t), e;
                    }),
                  (o =
                    "object" ===
                    ("undefined" == typeof Reflect ? "undefined" : a(Reflect))
                      ? Reflect.construct
                      : function (e, t, n) {
                          var i = [null];
                          return (
                            i.push.apply(i, t),
                            (i = e.bind.apply(e, i)),
                            r(new i(), n.prototype)
                          );
                        }),
                  function (e) {
                    var t = i(e);
                    return r(
                      e,
                      r(function () {
                        return o(t, arguments, i(this).constructor);
                      }, t)
                    );
                  }),
                u = window,
                d = {},
                h = document.createElement("template"),
                f = function () {
                  return !!u.ShadyCSS;
                };
              function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    "value" in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
                }
              }
              h.innerHTML =
                '\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n' +
                s.a +
                "\n" +
                c.a +
                '\n</style>\n<div id="icon"></div>';
              var m = a(
                ((function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(g, HTMLElement),
                n(g, null, [
                  {
                    key: "getIconSvg",
                    value: function (e, t) {
                      var i = this.cdnUrl + "/regular/bx-" + e + ".svg";
                      return (
                        "solid" === t
                          ? (i = this.cdnUrl + "/solid/bxs-" + e + ".svg")
                          : "logo" === t &&
                            (i = this.cdnUrl + "/logos/bxl-" + e + ".svg"),
                        (i && d[i]) ||
                          (d[i] = new Promise(function (e, t) {
                            var n = new XMLHttpRequest();
                            n.addEventListener("load", function () {
                              this.status < 200 || 300 <= this.status
                                ? t(
                                    new Error(
                                      this.status + " " + this.responseText
                                    )
                                  )
                                : e(this.responseText);
                            }),
                              (n.onerror = t),
                              (n.onabort = t),
                              n.open("GET", i),
                              n.send();
                          })),
                        d[i]
                      );
                    },
                  },
                  {
                    key: "define",
                    value: function (e) {
                      (e = e || this.tagName),
                        f() && u.ShadyCSS.prepareTemplate(h, e),
                        customElements.define(e, this);
                    },
                  },
                  {
                    key: "cdnUrl",
                    get: function () {
                      return "//unpkg.com/boxicons@2.0.9/svg";
                    },
                  },
                  {
                    key: "tagName",
                    get: function () {
                      return "box-icon";
                    },
                  },
                  {
                    key: "observedAttributes",
                    get: function () {
                      return [
                        "type",
                        "name",
                        "color",
                        "size",
                        "rotate",
                        "flip",
                        "animation",
                        "border",
                        "pull",
                      ];
                    },
                  },
                ]),
                n(g, [
                  {
                    key: "attributeChangedCallback",
                    value: function (e, t, n) {
                      var i,
                        r,
                        o,
                        a,
                        s,
                        l = this._state.$iconHolder;
                      switch (e) {
                        case "type":
                          (a = n),
                            ((s = (o = this)._state).$iconHolder.textContent =
                              ""),
                            s.type && (s.type = null),
                            (s.type =
                              !a || ("solid" !== a && "logo" !== a)
                                ? "regular"
                                : a),
                            void 0 !== s.currentName &&
                              o.constructor
                                .getIconSvg(s.currentName, s.type)
                                .then(function (e) {
                                  s.type === a && (s.$iconHolder.innerHTML = e);
                                })
                                .catch(function (e) {
                                  console.error(
                                    "Failed to load icon: " +
                                      s.currentName +
                                      "\n" +
                                      e
                                  );
                                });
                          break;
                        case "name":
                          (i = n),
                            ((r = (o = this)._state).currentName = i),
                            (r.$iconHolder.textContent = ""),
                            i &&
                              void 0 !== r.type &&
                              o.constructor
                                .getIconSvg(i, r.type)
                                .then(function (e) {
                                  r.currentName === i &&
                                    (r.$iconHolder.innerHTML = e);
                                })
                                .catch(function (e) {
                                  console.error(
                                    "Failed to load icon: " + i + "\n" + e
                                  );
                                });
                          break;
                        case "color":
                          l.style.fill = n || "";
                          break;
                        case "size":
                          !(function (e, t) {
                            e = e._state;
                            e.size &&
                              ((e.$iconHolder.style.width =
                                e.$iconHolder.style.height =
                                  ""),
                              (e.size = e.sizeType = null)),
                              t &&
                                !/^(xs|sm|md|lg)$/.test(e.size) &&
                                ((e.size = t.trim()),
                                (e.$iconHolder.style.width =
                                  e.$iconHolder.style.height =
                                    e.size));
                          })(this, n);
                          break;
                        case "rotate":
                          t && l.classList.remove("bx-rotate-" + t),
                            n && l.classList.add("bx-rotate-" + n);
                          break;
                        case "flip":
                          t && l.classList.remove("bx-flip-" + t),
                            n && l.classList.add("bx-flip-" + n);
                          break;
                        case "animation":
                          t && l.classList.remove("bx-" + t),
                            n && l.classList.add("bx-" + n);
                      }
                    },
                  },
                  {
                    key: "connectedCallback",
                    value: function () {
                      f() && u.ShadyCSS.styleElement(this);
                    },
                  },
                ]),
                g)
              );
              function g() {
                !(function (e) {
                  if (!(e instanceof g))
                    throw new TypeError("Cannot call a class as a function");
                })(this);
                var e = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this));
                return (
                  (e.$ui = e.attachShadow({ mode: "open" })),
                  e.$ui.appendChild(e.ownerDocument.importNode(h.content, !0)),
                  f() && u.ShadyCSS.styleElement(e),
                  (e._state = {
                    $iconHolder: e.$ui.getElementById("icon"),
                    type: e.getAttribute("type"),
                  }),
                  e
                );
              }
              (t.default = m).define();
            },
          ]),
          (i = {}),
          (r.m = n),
          (r.c = i),
          (r.d = function (e, t, n) {
            r.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: n });
          }),
          (r.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (r.t = function (t, e) {
            if ((1 & e && (t = r(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
              (r.r(n),
              Object.defineProperty(n, "default", { enumerable: !0, value: t }),
              2 & e && "string" != typeof t)
            )
              for (var i in t)
                r.d(
                  n,
                  i,
                  function (e) {
                    return t[e];
                  }.bind(null, i)
                );
            return n;
          }),
          (r.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return r.d(t, "a", t), t;
          }),
          (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (r.p = ""),
          r((r.s = 5))
        );
        function r(e) {
          if (i[e]) return i[e].exports;
          var t = (i[e] = { i: e, l: !1, exports: {} });
          return n[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
        }
        var n, i;
      };
      t.exports = e();
    });
  var o = {
      backdrop: !0,
      button: !0,
      navbar: !0,
      title: !0,
      toolbar: !0,
      className: "",
      container: "body",
      filter: null,
      fullscreen: !0,
      inheritedAttributes: [
        "crossOrigin",
        "decoding",
        "isMap",
        "loading",
        "referrerPolicy",
        "sizes",
        "srcset",
        "useMap",
      ],
      initialViewIndex: 0,
      inline: !1,
      interval: 5e3,
      keyboard: !0,
      focus: !0,
      loading: !0,
      loop: !0,
      minWidth: 200,
      minHeight: 100,
      movable: !0,
      rotatable: !0,
      scalable: !0,
      zoomable: !0,
      zoomOnTouch: !0,
      zoomOnWheel: !0,
      slideOnTouch: !0,
      toggleOnDblclick: !0,
      tooltip: !0,
      transition: !0,
      zIndex: 2015,
      zIndexInline: 0,
      zoomRatio: 0.1,
      minZoomRatio: 0.01,
      maxZoomRatio: 100,
      url: "src",
      ready: null,
      show: null,
      shown: null,
      hide: null,
      hidden: null,
      view: null,
      viewed: null,
      move: null,
      moved: null,
      rotate: null,
      rotated: null,
      scale: null,
      scaled: null,
      zoom: null,
      zoomed: null,
      play: null,
      stop: null,
    },
    a = "undefined" != typeof window && void 0 !== window.document,
    s = a ? window : {},
    l =
      !(!a || !s.document.documentElement) &&
      "ontouchstart" in s.document.documentElement,
    u = a && "PointerEvent" in s,
    p = "viewer",
    d = "move",
    h = "switch",
    f = "zoom",
    m = "".concat(p, "-active"),
    g = "".concat(p, "-close"),
    v = "".concat(p, "-fade"),
    y = "".concat(p, "-fixed"),
    b = "".concat(p, "-fullscreen"),
    w = "".concat(p, "-fullscreen-exit"),
    x = "".concat(p, "-hide"),
    T = "".concat(p, "-hide-md-down"),
    k = "".concat(p, "-hide-sm-down"),
    C = "".concat(p, "-hide-xs-down"),
    E = "".concat(p, "-in"),
    S = "".concat(p, "-invisible"),
    D = "".concat(p, "-loading"),
    A = "".concat(p, "-move"),
    N = "".concat(p, "-open"),
    j = "".concat(p, "-show"),
    L = "".concat(p, "-transition"),
    O = "click",
    q = "dblclick",
    I = "dragstart",
    P = "focusin",
    z = "keydown",
    H = "load",
    R = "error",
    M = u ? "pointerdown" : l ? "touchstart" : "mousedown",
    F = u ? "pointermove" : l ? "touchmove" : "mousemove",
    X = u ? "pointerup pointercancel" : l ? "touchend touchcancel" : "mouseup",
    _ = "resize",
    W = "transitionend",
    B = "wheel",
    Y = "ready",
    $ = "viewed",
    U = "rotated",
    V = "".concat(p, "Action"),
    G = /\s\s*/,
    K = [
      "zoom-in",
      "zoom-out",
      "one-to-one",
      "reset",
      "prev",
      "play",
      "next",
      "rotate-left",
      "rotate-right",
      "flip-horizontal",
      "flip-vertical",
    ];
  function J(e) {
    return "string" == typeof e;
  }
  var Q = Number.isNaN || s.isNaN;
  function Z(e) {
    return "number" == typeof e && !Q(e);
  }
  function ee(e) {
    return void 0 === e;
  }
  function te(e) {
    return "object" === i(e) && null !== e;
  }
  var ne = Object.prototype.hasOwnProperty;
  function ie(e) {
    if (!te(e)) return !1;
    try {
      var t = e.constructor,
        n = t.prototype;
      return t && n && ne.call(n, "isPrototypeOf");
    } catch (e) {
      return !1;
    }
  }
  function re(e) {
    return "function" == typeof e;
  }
  function oe(t, n) {
    if (t && re(n))
      if (Array.isArray(t) || Z(t.length))
        for (
          var e = t.length, i = 0;
          i < e && !1 !== n.call(t, t[i], i, t);
          i += 1
        );
      else
        te(t) &&
          Object.keys(t).forEach(function (e) {
            n.call(t, t[e], e, t);
          });
    return t;
  }
  var ae =
      Object.assign ||
      function (n) {
        for (
          var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          t[i - 1] = arguments[i];
        return (
          te(n) &&
            0 < t.length &&
            t.forEach(function (t) {
              te(t) &&
                Object.keys(t).forEach(function (e) {
                  n[e] = t[e];
                });
            }),
          n
        );
      },
    se = /^(?:width|height|left|top|marginLeft|marginTop)$/;
  function le(e, t) {
    var n = e.style;
    oe(t, function (e, t) {
      se.test(t) && Z(e) && (e += "px"), (n[t] = e);
    });
  }
  function ce(e, t) {
    return (
      e &&
      t &&
      (e.classList ? e.classList.contains(t) : -1 < e.className.indexOf(t))
    );
  }
  function ue(e, t) {
    var n;
    e &&
      t &&
      (Z(e.length)
        ? oe(e, function (e) {
            ue(e, t);
          })
        : e.classList
        ? e.classList.add(t)
        : (n = e.className.trim())
        ? n.indexOf(t) < 0 && (e.className = "".concat(n, " ").concat(t))
        : (e.className = t));
  }
  function de(e, t) {
    e &&
      t &&
      (Z(e.length)
        ? oe(e, function (e) {
            de(e, t);
          })
        : e.classList
        ? e.classList.remove(t)
        : 0 <= e.className.indexOf(t) &&
          (e.className = e.className.replace(t, "")));
  }
  function he(e, t, n) {
    t &&
      (Z(e.length)
        ? oe(e, function (e) {
            he(e, t, n);
          })
        : (n ? ue : de)(e, t));
  }
  var fe = /([a-z\d])([A-Z])/g;
  function pe(e) {
    return e.replace(fe, "$1-$2").toLowerCase();
  }
  function me(e, t) {
    return te(e[t])
      ? e[t]
      : e.dataset
      ? e.dataset[t]
      : e.getAttribute("data-".concat(pe(t)));
  }
  function ge(e, t, n) {
    te(n)
      ? (e[t] = n)
      : e.dataset
      ? (e.dataset[t] = n)
      : e.setAttribute("data-".concat(pe(t)), n);
  }
  var ve,
    ye,
    be =
      ((ye = !1),
      a &&
        ((ve = !1),
        (je = function () {}),
        (Le = Object.defineProperty({}, "once", {
          get: function () {
            return (ye = !0), ve;
          },
          set: function (e) {
            ve = e;
          },
        })),
        s.addEventListener("test", je, Le),
        s.removeEventListener("test", je, Le)),
      ye);
  function we(n, e, i, t) {
    var r = 3 < arguments.length && void 0 !== t ? t : {},
      o = i;
    e.trim()
      .split(G)
      .forEach(function (e) {
        var t;
        be ||
          ((t = n.listeners) &&
            t[e] &&
            t[e][i] &&
            ((o = t[e][i]),
            delete t[e][i],
            0 === Object.keys(t[e]).length && delete t[e],
            0 === Object.keys(t).length && delete n.listeners)),
          n.removeEventListener(e, o, r);
      });
  }
  function xe(o, e, a, t) {
    var s = 3 < arguments.length && void 0 !== t ? t : {},
      l = a;
    e.trim()
      .split(G)
      .forEach(function (i) {
        var e, r;
        s.once &&
          !be &&
          ((e = o.listeners),
          (l = function () {
            delete r[i][a], o.removeEventListener(i, l, s);
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            a.apply(o, t);
          }),
          (r = void 0 === e ? {} : e)[i] || (r[i] = {}),
          r[i][a] && o.removeEventListener(i, r[i][a], s),
          (r[i][a] = l),
          (o.listeners = r)),
          o.addEventListener(i, l, s);
      });
  }
  function Te(e, t, n, i) {
    var r;
    return (
      re(Event) && re(CustomEvent)
        ? (r = new CustomEvent(
            t,
            c({ bubbles: !0, cancelable: !0, detail: n }, i)
          ))
        : (r = document.createEvent("CustomEvent")).initCustomEvent(
            t,
            !0,
            !0,
            n
          ),
      e.dispatchEvent(r)
    );
  }
  function ke(e) {
    var t = e.rotate,
      n = e.scaleX,
      i = e.scaleY,
      r = e.translateX,
      o = e.translateY,
      e = [];
    Z(r) && 0 !== r && e.push("translateX(".concat(r, "px)")),
      Z(o) && 0 !== o && e.push("translateY(".concat(o, "px)")),
      Z(t) && 0 !== t && e.push("rotate(".concat(t, "deg)")),
      Z(n) && 1 !== n && e.push("scaleX(".concat(n, ")")),
      Z(i) && 1 !== i && e.push("scaleY(".concat(i, ")"));
    e = e.length ? e.join(" ") : "none";
    return { WebkitTransform: e, msTransform: e, transform: e };
  }
  var Ce =
    s.navigator &&
    /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(s.navigator.userAgent);
  function Ee(n, e, t) {
    var i = document.createElement("img");
    if (n.naturalWidth && !Ce) return t(n.naturalWidth, n.naturalHeight), i;
    var r = document.body || document.documentElement;
    return (
      (i.onload = function () {
        t(i.width, i.height), Ce || r.removeChild(i);
      }),
      oe(e.inheritedAttributes, function (e) {
        var t = n.getAttribute(e);
        null !== t && i.setAttribute(e, t);
      }),
      (i.src = n.src),
      Ce ||
        ((i.style.cssText =
          "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;"),
        r.appendChild(i)),
      i
    );
  }
  function Se(e) {
    switch (e) {
      case 2:
        return C;
      case 3:
        return k;
      case 4:
        return T;
      default:
        return "";
    }
  }
  function De(e, t) {
    var n = e.pageX,
      i = e.pageY,
      e = { endX: n, endY: i };
    return t ? e : c({ timeStamp: Date.now(), startX: n, startY: i }, e);
  }
  var Ae,
    Ne = {
      render: function () {
        this.initContainer(),
          this.initViewer(),
          this.initList(),
          this.renderViewer();
      },
      initBody: function () {
        var e = this.element.ownerDocument,
          t = e.body || e.documentElement;
        (this.body = t),
          (this.scrollbarWidth =
            window.innerWidth - e.documentElement.clientWidth),
          (this.initialBodyPaddingRight = t.style.paddingRight),
          (this.initialBodyComputedPaddingRight =
            window.getComputedStyle(t).paddingRight);
      },
      initContainer: function () {
        this.containerData = {
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      initViewer: function () {
        var e,
          t = this.options,
          n = this.parent;
        t.inline &&
          ((e = {
            width: Math.max(n.offsetWidth, t.minWidth),
            height: Math.max(n.offsetHeight, t.minHeight),
          }),
          (this.parentData = e)),
          (!this.fulled && e) || (e = this.containerData),
          (this.viewerData = ae({}, e));
      },
      renderViewer: function () {
        this.options.inline && !this.fulled && le(this.viewer, this.viewerData);
      },
      initList: function () {
        var s = this,
          e = this.element,
          l = this.options,
          c = this.list,
          u = [];
        (c.innerHTML = ""),
          oe(this.images, function (n, e) {
            var t,
              i,
              r = n.src,
              o =
                n.alt ||
                (J((t = r))
                  ? decodeURIComponent(
                      t.replace(/^.*\//, "").replace(/[?&#].*$/, "")
                    )
                  : ""),
              a = s.getImageURL(n);
            (r || a) &&
              ((t = document.createElement("li")),
              (i = document.createElement("img")),
              oe(l.inheritedAttributes, function (e) {
                var t = n.getAttribute(e);
                null !== t && i.setAttribute(e, t);
              }),
              (i.src = r || a),
              (i.alt = o),
              i.setAttribute("data-original-url", a || r),
              t.setAttribute("data-index", e),
              t.setAttribute("data-viewer-action", "view"),
              t.setAttribute("role", "button"),
              l.keyboard && t.setAttribute("tabindex", 0),
              t.appendChild(i),
              c.appendChild(t),
              u.push(t));
          }),
          oe((this.items = u), function (t) {
            var e,
              n,
              i = t.firstElementChild;
            ge(i, "filled", !0),
              l.loading && ue(t, D),
              xe(
                i,
                H,
                (e = function (e) {
                  we(i, R, n), l.loading && de(t, D), s.loadImage(e);
                }),
                { once: !0 }
              ),
              xe(
                i,
                R,
                (n = function () {
                  we(i, H, e), l.loading && de(t, D);
                }),
                { once: !0 }
              );
          }),
          l.transition &&
            xe(
              e,
              $,
              function () {
                ue(c, L);
              },
              { once: !0 }
            );
      },
      renderList: function () {
        var e,
          t,
          n = this.index,
          i = this.items[n];
        i &&
          ((t = i.nextElementSibling),
          (e = parseInt(window.getComputedStyle(t || i).marginLeft, 10)),
          (t = i.offsetWidth),
          le(
            this.list,
            ae(
              { width: (i = t + e) * this.length - e },
              ke({ translateX: (this.viewerData.width - t) / 2 - i * n })
            )
          ));
      },
      resetList: function () {
        var e = this.list;
        (e.innerHTML = ""), de(e, L), le(e, ke({ translateX: 0 }));
      },
      initImage: function (s) {
        var e,
          l = this,
          c = this.options,
          t = this.image,
          n = this.viewerData,
          i = this.footer.offsetHeight,
          u = n.width,
          d = Math.max(n.height - i, i),
          h = this.imageData || {};
        (this.imageInitializing = {
          abort: function () {
            e.onload = null;
          },
        }),
          (e = Ee(t, c, function (e, t) {
            var n = e / t,
              i = u,
              r = d;
            (l.imageInitializing = !1), u < d * n ? (r = u / n) : (i = d * n);
            var i = Math.min(0.9 * i, e),
              r = Math.min(0.9 * r, t),
              o = (u - i) / 2,
              a = (d - r) / 2,
              e = {
                left: o,
                top: a,
                x: o,
                y: a,
                width: i,
                height: r,
                oldRatio: 1,
                ratio: i / e,
                aspectRatio: n,
                naturalWidth: e,
                naturalHeight: t,
              },
              t = ae({}, e);
            c.rotatable && ((e.rotate = h.rotate || 0), (t.rotate = 0)),
              c.scalable &&
                ((e.scaleX = h.scaleX || 1),
                (e.scaleY = h.scaleY || 1),
                (t.scaleX = 1),
                (t.scaleY = 1)),
              (l.imageData = e),
              (l.initialImageData = t),
              s && s();
          }));
      },
      renderImage: function (e) {
        var t,
          n = this,
          i = this.image,
          r = this.imageData;
        le(
          i,
          ae(
            {
              width: r.width,
              height: r.height,
              marginLeft: r.x,
              marginTop: r.y,
            },
            ke(r)
          )
        ),
          e &&
            ((this.viewing ||
              this.moving ||
              this.rotating ||
              this.scaling ||
              this.zooming) &&
            this.options.transition &&
            ce(i, L)
              ? ((t = function () {
                  (n.imageRendering = !1), e();
                }),
                (this.imageRendering = {
                  abort: function () {
                    we(i, W, t);
                  },
                }),
                xe(i, W, t, { once: !0 }))
              : e());
      },
      resetImage: function () {
        var e;
        (this.viewing || this.viewed) &&
          ((e = this.image),
          this.viewing && this.viewing.abort(),
          e.parentNode.removeChild(e),
          (this.image = null));
      },
    },
    u = {
      bind: function () {
        var e = this.options,
          t = this.viewer,
          n = this.canvas,
          i = this.element.ownerDocument;
        xe(t, O, (this.onClick = this.click.bind(this))),
          xe(t, I, (this.onDragStart = this.dragstart.bind(this))),
          xe(n, M, (this.onPointerDown = this.pointerdown.bind(this))),
          xe(i, F, (this.onPointerMove = this.pointermove.bind(this))),
          xe(i, X, (this.onPointerUp = this.pointerup.bind(this))),
          xe(i, z, (this.onKeyDown = this.keydown.bind(this))),
          xe(window, _, (this.onResize = this.resize.bind(this))),
          e.zoomable &&
            e.zoomOnWheel &&
            xe(t, B, (this.onWheel = this.wheel.bind(this)), {
              passive: !1,
              capture: !0,
            }),
          e.toggleOnDblclick &&
            xe(n, q, (this.onDblclick = this.dblclick.bind(this)));
      },
      unbind: function () {
        var e = this.options,
          t = this.viewer,
          n = this.canvas,
          i = this.element.ownerDocument;
        we(t, O, this.onClick),
          we(t, I, this.onDragStart),
          we(n, M, this.onPointerDown),
          we(i, F, this.onPointerMove),
          we(i, X, this.onPointerUp),
          we(i, z, this.onKeyDown),
          we(window, _, this.onResize),
          e.zoomable &&
            e.zoomOnWheel &&
            we(t, B, this.onWheel, { passive: !1, capture: !0 }),
          e.toggleOnDblclick && we(n, q, this.onDblclick);
      },
    },
    a = {
      click: function (e) {
        var t = this.options,
          n = this.imageData,
          i = e.target,
          r = me(i, V);
        switch (
          (r ||
            "img" !== i.localName ||
            "li" !== i.parentElement.localName ||
            (r = me((i = i.parentElement), V)),
          l &&
            e.isTrusted &&
            i === this.canvas &&
            clearTimeout(this.clickCanvasTimeout),
          r)
        ) {
          case "mix":
            this.played
              ? this.stop()
              : t.inline
              ? this.fulled
                ? this.exit()
                : this.full()
              : this.hide();
            break;
          case "hide":
            this.hide();
            break;
          case "view":
            this.view(me(i, "index"));
            break;
          case "zoom-in":
            this.zoom(0.1, !0);
            break;
          case "zoom-out":
            this.zoom(-0.1, !0);
            break;
          case "one-to-one":
            this.toggle();
            break;
          case "reset":
            this.reset();
            break;
          case "prev":
            this.prev(t.loop);
            break;
          case "play":
            this.play(t.fullscreen);
            break;
          case "next":
            this.next(t.loop);
            break;
          case "rotate-left":
            this.rotate(-90);
            break;
          case "rotate-right":
            this.rotate(90);
            break;
          case "flip-horizontal":
            this.scaleX(-n.scaleX || -1);
            break;
          case "flip-vertical":
            this.scaleY(-n.scaleY || -1);
            break;
          default:
            this.played && this.stop();
        }
      },
      dblclick: function (e) {
        e.preventDefault(),
          this.viewed &&
            e.target === this.image &&
            (l && e.isTrusted && clearTimeout(this.doubleClickImageTimeout),
            this.toggle(e));
      },
      load: function () {
        var e = this;
        this.timeout && (clearTimeout(this.timeout), (this.timeout = !1));
        var t = this.element,
          n = this.options,
          i = this.image,
          r = this.index,
          o = this.viewerData;
        de(i, S),
          n.loading && de(this.canvas, D),
          (i.style.cssText =
            "height:0;" +
            "margin-left:".concat(o.width / 2, "px;") +
            "margin-top:".concat(o.height / 2, "px;") +
            "max-width:none!important;position:relative;width:0;"),
          this.initImage(function () {
            he(i, A, n.movable),
              he(i, L, n.transition),
              e.renderImage(function () {
                (e.viewed = !0),
                  (e.viewing = !1),
                  re(n.viewed) && xe(t, $, n.viewed, { once: !0 }),
                  Te(
                    t,
                    $,
                    { originalImage: e.images[r], index: r, image: i },
                    { cancelable: !1 }
                  );
              });
          });
      },
      loadImage: function (e) {
        var i = e.target,
          e = i.parentNode,
          r = e.offsetWidth || 30,
          o = e.offsetHeight || 50,
          a = !!me(i, "filled");
        Ee(i, this.options, function (e, t) {
          var n = e / t,
            e = r,
            t = o;
          r < o * n
            ? a
              ? (e = o * n)
              : (t = r / n)
            : a
            ? (t = r / n)
            : (e = o * n),
            le(
              i,
              ae(
                { width: e, height: t },
                ke({ translateX: (r - e) / 2, translateY: (o - t) / 2 })
              )
            );
        });
      },
      keydown: function (e) {
        var t = this.options;
        if (t.keyboard) {
          var n = e.keyCode || e.which || e.charCode;
          if (
            (13 === n && this.viewer.contains(e.target) && this.click(e),
            this.fulled)
          )
            switch (n) {
              case 27:
                this.played
                  ? this.stop()
                  : t.inline
                  ? this.fulled && this.exit()
                  : this.hide();
                break;
              case 32:
                this.played && this.stop();
                break;
              case 37:
                this.prev(t.loop);
                break;
              case 38:
                e.preventDefault(), this.zoom(t.zoomRatio, !0);
                break;
              case 39:
                this.next(t.loop);
                break;
              case 40:
                e.preventDefault(), this.zoom(-t.zoomRatio, !0);
                break;
              case 48:
              case 49:
                e.ctrlKey && (e.preventDefault(), this.toggle());
            }
        }
      },
      dragstart: function (e) {
        "img" === e.target.localName && e.preventDefault();
      },
      pointerdown: function (e) {
        var t = this.options,
          n = this.pointers,
          i = e.buttons,
          r = e.button;
        !this.viewed ||
          this.showing ||
          this.viewing ||
          this.hiding ||
          (("mousedown" === e.type ||
            ("pointerdown" === e.type && "mouse" === e.pointerType)) &&
            ((Z(i) && 1 !== i) || (Z(r) && 0 !== r) || e.ctrlKey)) ||
          (e.preventDefault(),
          e.changedTouches
            ? oe(e.changedTouches, function (e) {
                n[e.identifier] = De(e);
              })
            : (n[e.pointerId || 0] = De(e)),
          (r = !!t.movable && d),
          t.zoomOnTouch && t.zoomable && 1 < Object.keys(n).length
            ? (r = f)
            : t.slideOnTouch &&
              ("touch" === e.pointerType || "touchstart" === e.type) &&
              this.isSwitchable() &&
              (r = h),
          !t.transition || (r !== d && r !== f) || de(this.image, L),
          (this.action = r));
      },
      pointermove: function (e) {
        var t = this.pointers,
          n = this.action;
        this.viewed &&
          n &&
          (e.preventDefault(),
          e.changedTouches
            ? oe(e.changedTouches, function (e) {
                ae(t[e.identifier] || {}, De(e, !0));
              })
            : ae(t[e.pointerId || 0] || {}, De(e, !0)),
          this.change(e));
      },
      pointerup: function (e) {
        var t,
          n = this,
          i = this.options,
          r = this.action,
          o = this.pointers;
        e.changedTouches
          ? oe(e.changedTouches, function (e) {
              (t = o[e.identifier]), delete o[e.identifier];
            })
          : ((t = o[e.pointerId || 0]), delete o[e.pointerId || 0]),
          r &&
            (e.preventDefault(),
            !i.transition || (r !== d && r !== f) || ue(this.image, L),
            (this.action = !1),
            l &&
              r !== f &&
              t &&
              Date.now() - t.timeStamp < 500 &&
              (clearTimeout(this.clickCanvasTimeout),
              clearTimeout(this.doubleClickImageTimeout),
              i.toggleOnDblclick && this.viewed && e.target === this.image
                ? this.imageClicked
                  ? ((this.imageClicked = !1),
                    (this.doubleClickImageTimeout = setTimeout(function () {
                      Te(n.image, q);
                    }, 50)))
                  : ((this.imageClicked = !0),
                    (this.doubleClickImageTimeout = setTimeout(function () {
                      n.imageClicked = !1;
                    }, 500)))
                : ((this.imageClicked = !1),
                  i.backdrop &&
                    "static" !== i.backdrop &&
                    e.target === this.canvas &&
                    (this.clickCanvasTimeout = setTimeout(function () {
                      Te(n.canvas, O);
                    }, 50)))));
      },
      resize: function () {
        var t = this;
        this.isShown &&
          !this.hiding &&
          (this.fulled && (this.close(), this.initBody(), this.open()),
          this.initContainer(),
          this.initViewer(),
          this.renderViewer(),
          this.renderList(),
          this.viewed &&
            this.initImage(function () {
              t.renderImage();
            }),
          this.played &&
            (!this.options.fullscreen ||
            !this.fulled ||
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
              ? oe(this.player.getElementsByTagName("img"), function (e) {
                  xe(e, H, t.loadImage.bind(t), { once: !0 }), Te(e, H);
                })
              : this.stop()));
      },
      wheel: function (e) {
        var t,
          n,
          i = this;
        this.viewed &&
          (e.preventDefault(),
          this.wheeling ||
            ((this.wheeling = !0),
            setTimeout(function () {
              i.wheeling = !1;
            }, 50),
            (t = Number(this.options.zoomRatio) || 0.1),
            (n = 1),
            e.deltaY
              ? (n = 0 < e.deltaY ? 1 : -1)
              : e.wheelDelta
              ? (n = -e.wheelDelta / 120)
              : e.detail && (n = 0 < e.detail ? 1 : -1),
            this.zoom(-n * t, !0, e)));
      },
    },
    je = {
      show: function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
          t = this.element,
          n = this.options;
        if (n.inline || this.showing || this.isShown || this.showing)
          return this;
        if (!this.ready) return this.build(), this.ready && this.show(e), this;
        if (
          (re(n.show) && xe(t, "show", n.show, { once: !0 }),
          !1 === Te(t, "show") || !this.ready)
        )
          return this;
        this.hiding && this.transitioning.abort(),
          (this.showing = !0),
          this.open();
        var i,
          r = this.viewer;
        return (
          de(r, x),
          r.setAttribute("role", "dialog"),
          r.setAttribute("aria-labelledby", this.title.id),
          r.setAttribute("aria-modal", !0),
          r.removeAttribute("aria-hidden"),
          n.transition && !e
            ? ((i = this.shown.bind(this)),
              (this.transitioning = {
                abort: function () {
                  we(r, W, i), de(r, E);
                },
              }),
              ue(r, L),
              (r.initialOffsetWidth = r.offsetWidth),
              xe(r, W, i, { once: !0 }),
              ue(r, E))
            : (ue(r, E), this.shown()),
          this
        );
      },
      hide: function () {
        var n = this,
          e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
          t = this.element,
          i = this.options;
        if (i.inline || this.hiding || (!this.isShown && !this.showing))
          return this;
        if (
          (re(i.hide) && xe(t, "hide", i.hide, { once: !0 }),
          !1 === Te(t, "hide"))
        )
          return this;
        this.showing && this.transitioning.abort(),
          (this.hiding = !0),
          this.played ? this.stop() : this.viewing && this.viewing.abort();
        var r,
          o,
          a = this.viewer,
          s = this.image,
          l = function () {
            de(a, E), n.hidden();
          };
        return (
          i.transition && !e
            ? ((r = function e(t) {
                t && t.target === a && (we(a, W, e), n.hidden());
              }),
              (o = function () {
                ce(a, L) ? (xe(a, W, r), de(a, E)) : l();
              }),
              (this.transitioning = {
                abort: function () {
                  n.viewed && ce(s, L) ? we(s, W, o) : ce(a, L) && we(a, W, r);
                },
              }),
              this.viewed && ce(s, L)
                ? (xe(s, W, o, { once: !0 }), this.zoomTo(0, !1, null, !0))
                : o())
            : l(),
          this
        );
      },
      view: function () {
        var n = this,
          e =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : this.options.initialViewIndex,
          e = Number(e) || 0;
        if (
          this.hiding ||
          this.played ||
          e < 0 ||
          e >= this.length ||
          (this.viewed && e === this.index)
        )
          return this;
        if (!this.isShown) return (this.index = e), this.show();
        this.viewing && this.viewing.abort();
        var t = this.element,
          i = this.options,
          r = this.title,
          o = this.canvas,
          a = this.items[e],
          s = a.querySelector("img"),
          l = me(s, "originalUrl"),
          c = s.getAttribute("alt"),
          u = document.createElement("img");
        if (
          (oe(i.inheritedAttributes, function (e) {
            var t = s.getAttribute(e);
            null !== t && u.setAttribute(e, t);
          }),
          (u.src = l),
          (u.alt = c),
          re(i.view) && xe(t, "view", i.view, { once: !0 }),
          !1 ===
            Te(t, "view", {
              originalImage: this.images[e],
              index: e,
              image: u,
            }) ||
            !this.isShown ||
            this.hiding ||
            this.played)
        )
          return this;
        l = this.items[this.index];
        l && (de(l, m), l.removeAttribute("aria-selected")),
          ue(a, m),
          a.setAttribute("aria-selected", !0),
          i.focus && a.focus(),
          (this.image = u),
          (this.viewed = !1),
          (this.index = e),
          (this.imageData = {}),
          ue(u, S),
          i.loading && ue(o, D),
          (o.innerHTML = ""),
          o.appendChild(u),
          this.renderList(),
          (r.innerHTML = "");
        function d() {
          var e = n.imageData,
            t = Array.isArray(i.title) ? i.title[1] : i.title;
          r.innerHTML = J(
            (e = re(t)
              ? t.call(n, u, e)
              : ""
                  .concat(c, " (")
                  .concat(e.naturalWidth, " × ")
                  .concat(e.naturalHeight, ")"))
          )
            ? e
                .replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
            : e;
        }
        var h, f;
        return (
          xe(t, $, d, { once: !0 }),
          (this.viewing = {
            abort: function () {
              we(t, $, d),
                u.complete
                  ? n.imageRendering
                    ? n.imageRendering.abort()
                    : n.imageInitializing && n.imageInitializing.abort()
                  : ((u.src = ""),
                    we(u, H, h),
                    n.timeout && clearTimeout(n.timeout));
            },
          }),
          u.complete
            ? this.load()
            : (xe(
                u,
                H,
                (h = function () {
                  we(u, R, f), n.load();
                }),
                { once: !0 }
              ),
              xe(
                u,
                R,
                (f = function () {
                  we(u, H, h),
                    n.timeout && (clearTimeout(n.timeout), (n.timeout = !1)),
                    de(u, S),
                    i.loading && de(n.canvas, D);
                }),
                { once: !0 }
              ),
              this.timeout && clearTimeout(this.timeout),
              (this.timeout = setTimeout(function () {
                de(u, S), (n.timeout = !1);
              }, 1e3))),
          this
        );
      },
      prev: function () {
        var e = this.index - 1;
        return (
          e < 0 &&
            (e =
              0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                ? this.length - 1
                : 0),
          this.view(e),
          this
        );
      },
      next: function () {
        var e = this.length - 1,
          t = this.index + 1;
        return (
          this.view(
            (t =
              e < t
                ? 0 < arguments.length &&
                  void 0 !== arguments[0] &&
                  arguments[0]
                  ? 0
                  : e
                : t)
          ),
          this
        );
      },
      move: function (e) {
        var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : e,
          n = this.imageData;
        return (
          this.moveTo(ee(e) ? e : n.x + Number(e), ee(t) ? t : n.y + Number(t)),
          this
        );
      },
      moveTo: function (e) {
        var t = this,
          n =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : e,
          i =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          r = this.element,
          o = this.options,
          a = this.imageData;
        if (
          ((e = Number(e)),
          (n = Number(n)),
          this.viewed && !this.played && o.movable)
        ) {
          var s = a.x,
            l = a.y,
            c = !1;
          if ((Z(e) ? (c = !0) : (e = s), Z(n) ? (c = !0) : (n = l), c)) {
            if (
              (re(o.move) && xe(r, "move", o.move, { once: !0 }),
              !1 ===
                Te(r, "move", {
                  x: e,
                  y: n,
                  oldX: s,
                  oldY: l,
                  originalEvent: i,
                }))
            )
              return this;
            (a.x = e),
              (a.y = n),
              (a.left = e),
              (a.top = n),
              (this.moving = !0),
              this.renderImage(function () {
                (t.moving = !1),
                  re(o.moved) && xe(r, "moved", o.moved, { once: !0 }),
                  Te(
                    r,
                    "moved",
                    { x: e, y: n, oldX: s, oldY: l, originalEvent: i },
                    { cancelable: !1 }
                  );
              });
          }
        }
        return this;
      },
      rotate: function (e) {
        return this.rotateTo((this.imageData.rotate || 0) + Number(e)), this;
      },
      rotateTo: function (e) {
        var t = this,
          n = this.element,
          i = this.options,
          r = this.imageData;
        if (Z((e = Number(e))) && this.viewed && !this.played && i.rotatable) {
          var o = r.rotate;
          if (
            (re(i.rotate) && xe(n, "rotate", i.rotate, { once: !0 }),
            !1 === Te(n, "rotate", { degree: e, oldDegree: o }))
          )
            return this;
          (r.rotate = e),
            (this.rotating = !0),
            this.renderImage(function () {
              (t.rotating = !1),
                re(i.rotated) && xe(n, U, i.rotated, { once: !0 }),
                Te(n, U, { degree: e, oldDegree: o }, { cancelable: !1 });
            });
        }
        return this;
      },
      scaleX: function (e) {
        return this.scale(e, this.imageData.scaleY), this;
      },
      scaleY: function (e) {
        return this.scale(this.imageData.scaleX, e), this;
      },
      scale: function (e) {
        var t = this,
          n =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : e,
          i = this.element,
          r = this.options,
          o = this.imageData;
        if (
          ((e = Number(e)),
          (n = Number(n)),
          this.viewed && !this.played && r.scalable)
        ) {
          var a = o.scaleX,
            s = o.scaleY,
            l = !1;
          if ((Z(e) ? (l = !0) : (e = a), Z(n) ? (l = !0) : (n = s), l)) {
            if (
              (re(r.scale) && xe(i, "scale", r.scale, { once: !0 }),
              !1 ===
                Te(i, "scale", {
                  scaleX: e,
                  scaleY: n,
                  oldScaleX: a,
                  oldScaleY: s,
                }))
            )
              return this;
            (o.scaleX = e),
              (o.scaleY = n),
              (this.scaling = !0),
              this.renderImage(function () {
                (t.scaling = !1),
                  re(r.scaled) && xe(i, "scaled", r.scaled, { once: !0 }),
                  Te(
                    i,
                    "scaled",
                    { scaleX: e, scaleY: n, oldScaleX: a, oldScaleY: s },
                    { cancelable: !1 }
                  );
              });
          }
        }
        return this;
      },
      zoom: function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          i = this.imageData;
        return (
          (e = Number(e)),
          this.zoomTo(
            (i.width * (e = e < 0 ? 1 / (1 - e) : 1 + e)) / i.naturalWidth,
            t,
            n
          ),
          this
        );
      },
      zoomTo: function (e) {
        var n,
          i,
          r,
          t = this,
          o = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          a =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          s = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
          l = this.element,
          c = this.options,
          u = this.pointers,
          d = this.imageData,
          h = d.x,
          f = d.y,
          p = d.width,
          m = d.height,
          g = d.naturalWidth,
          v = d.naturalHeight;
        if (
          Z((e = Math.max(0, e))) &&
          this.viewed &&
          !this.played &&
          (s || c.zoomable)
        ) {
          s ||
            ((y = Math.max(0.01, c.minZoomRatio)),
            (b = Math.min(100, c.maxZoomRatio)),
            (e = Math.min(Math.max(e, y), b)));
          var s =
              g *
              (e = a && 0.055 <= c.zoomRatio && 0.95 < e && e < 1.05 ? 1 : e),
            y = v * e,
            b = s - p,
            g = y - m,
            w = d.ratio;
          if (
            (re(c.zoom) && xe(l, "zoom", c.zoom, { once: !0 }),
            !1 === Te(l, "zoom", { ratio: e, oldRatio: w, originalEvent: a }))
          )
            return this;
          (this.zooming = !0),
            a
              ? ((v = {
                  left:
                    (v = (v = this.viewer).getBoundingClientRect()).left +
                    (window.pageXOffset - document.documentElement.clientLeft),
                  top:
                    v.top +
                    (window.pageYOffset - document.documentElement.clientTop),
                }),
                (u =
                  u && Object.keys(u).length
                    ? ((r = i = n = 0),
                      oe(u, function (e) {
                        var t = e.startX,
                          e = e.startY;
                        (n += t), (i += e), (r += 1);
                      }),
                      { pageX: (n /= r), pageY: (i /= r) })
                    : { pageX: a.pageX, pageY: a.pageY }),
                (d.x -= ((u.pageX - v.left - h) / p) * b),
                (d.y -= ((u.pageY - v.top - f) / m) * g))
              : ((d.x -= b / 2), (d.y -= g / 2)),
            (d.left = d.x),
            (d.top = d.y),
            (d.width = s),
            (d.height = y),
            (d.oldRatio = w),
            (d.ratio = e),
            this.renderImage(function () {
              (t.zooming = !1),
                re(c.zoomed) && xe(l, "zoomed", c.zoomed, { once: !0 }),
                Te(
                  l,
                  "zoomed",
                  { ratio: e, oldRatio: w, originalEvent: a },
                  { cancelable: !1 }
                );
            }),
            o && this.tooltip();
        }
        return this;
      },
      play: function () {
        var t = this,
          e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        if (!this.isShown || this.played) return this;
        var n = this.element,
          r = this.options;
        if (
          (re(r.play) && xe(n, "play", r.play, { once: !0 }),
          !1 === Te(n, "play"))
        )
          return this;
        var o = this.player,
          a = this.loadImage.bind(this),
          s = [],
          l = 0,
          c = 0;
        return (
          (this.played = !0),
          (this.onLoadWhenPlay = a),
          e && this.requestFullscreen(e),
          ue(o, j),
          oe(this.items, function (e, t) {
            var n = e.querySelector("img"),
              i = document.createElement("img");
            (i.src = me(n, "originalUrl")),
              (i.alt = n.getAttribute("alt")),
              (i.referrerPolicy = n.referrerPolicy),
              (l += 1),
              ue(i, v),
              he(i, L, r.transition),
              ce(e, m) && (ue(i, E), (c = t)),
              s.push(i),
              xe(i, H, a, { once: !0 }),
              o.appendChild(i);
          }),
          Z(r.interval) &&
            0 < r.interval &&
            1 < l &&
            (function e() {
              t.playing = setTimeout(function () {
                de(s[c], E), ue(s[(c = (c += 1) < l ? c : 0)], E), e();
              }, r.interval);
            })(),
          this
        );
      },
      stop: function () {
        var t = this;
        if (!this.played) return this;
        var e = this.element,
          n = this.options;
        if (
          (re(n.stop) && xe(e, "stop", n.stop, { once: !0 }),
          !1 === Te(e, "stop"))
        )
          return this;
        e = this.player;
        return (
          (this.played = !1),
          clearTimeout(this.playing),
          oe(e.getElementsByTagName("img"), function (e) {
            we(e, H, t.onLoadWhenPlay);
          }),
          de(e, j),
          (e.innerHTML = ""),
          this.exitFullscreen(),
          this
        );
      },
      full: function () {
        var e = this,
          t = this.options,
          n = this.viewer,
          i = this.image,
          r = this.list;
        return (
          !this.isShown ||
            this.played ||
            this.fulled ||
            !t.inline ||
            ((this.fulled = !0),
            this.open(),
            ue(this.button, w),
            t.transition && (de(r, L), this.viewed && de(i, L)),
            ue(n, y),
            n.setAttribute("role", "dialog"),
            n.setAttribute("aria-labelledby", this.title.id),
            n.setAttribute("aria-modal", !0),
            n.removeAttribute("style"),
            le(n, { zIndex: t.zIndex }),
            t.focus && this.enforceFocus(),
            this.initContainer(),
            (this.viewerData = ae({}, this.containerData)),
            this.renderList(),
            this.viewed &&
              this.initImage(function () {
                e.renderImage(function () {
                  t.transition &&
                    setTimeout(function () {
                      ue(i, L), ue(r, L);
                    }, 0);
                });
              })),
          this
        );
      },
      exit: function () {
        var e = this,
          t = this.options,
          n = this.viewer,
          i = this.image,
          r = this.list;
        return (
          this.isShown &&
            !this.played &&
            this.fulled &&
            t.inline &&
            ((this.fulled = !1),
            this.close(),
            de(this.button, w),
            t.transition && (de(r, L), this.viewed && de(i, L)),
            t.focus && this.clearEnforceFocus(),
            n.removeAttribute("role"),
            n.removeAttribute("aria-labelledby"),
            n.removeAttribute("aria-modal"),
            de(n, y),
            le(n, { zIndex: t.zIndexInline }),
            (this.viewerData = ae({}, this.parentData)),
            this.renderViewer(),
            this.renderList(),
            this.viewed &&
              this.initImage(function () {
                e.renderImage(function () {
                  t.transition &&
                    setTimeout(function () {
                      ue(i, L), ue(r, L);
                    }, 0);
                });
              })),
          this
        );
      },
      tooltip: function () {
        var e = this,
          t = this.options,
          n = this.tooltipBox,
          i = this.imageData;
        return (
          this.viewed &&
            !this.played &&
            t.tooltip &&
            ((n.textContent = "".concat(Math.round(100 * i.ratio), "%")),
            this.tooltipping
              ? clearTimeout(this.tooltipping)
              : t.transition
              ? (this.fading && Te(n, W),
                ue(n, j),
                ue(n, v),
                ue(n, L),
                n.removeAttribute("aria-hidden"),
                (n.initialOffsetWidth = n.offsetWidth),
                ue(n, E))
              : (ue(n, j), n.removeAttribute("aria-hidden")),
            (this.tooltipping = setTimeout(function () {
              t.transition
                ? (xe(
                    n,
                    W,
                    function () {
                      de(n, j),
                        de(n, v),
                        de(n, L),
                        n.setAttribute("aria-hidden", !0),
                        (e.fading = !1);
                    },
                    { once: !0 }
                  ),
                  de(n, E),
                  (e.fading = !0))
                : (de(n, j), n.setAttribute("aria-hidden", !0)),
                (e.tooltipping = !1);
            }, 1e3))),
          this
        );
      },
      toggle: function () {
        var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
        return (
          1 === this.imageData.ratio
            ? this.zoomTo(this.imageData.oldRatio, !0, e)
            : this.zoomTo(1, !0, e),
          this
        );
      },
      reset: function () {
        return (
          this.viewed &&
            !this.played &&
            ((this.imageData = ae({}, this.initialImageData)),
            this.renderImage()),
          this
        );
      },
      update: function () {
        var t = this,
          e = this.element,
          n = this.options,
          i = this.isImg;
        if (i && !e.parentNode) return this.destroy();
        var r,
          o = [];
        return (
          oe(i ? [e] : e.querySelectorAll("img"), function (e) {
            re(n.filter)
              ? n.filter.call(t, e) && o.push(e)
              : t.getImageURL(e) && o.push(e);
          }),
          o.length &&
            ((this.images = o),
            (this.length = o.length),
            this.ready
              ? ((r = []),
                oe(this.items, function (e, t) {
                  var n = e.querySelector("img"),
                    e = o[t];
                  (e && n && e.src === n.src && e.alt === n.alt) || r.push(t);
                }),
                le(this.list, { width: "auto" }),
                this.initList(),
                this.isShown &&
                  (this.length
                    ? this.viewed &&
                      (0 <= (e = r.indexOf(this.index))
                        ? ((this.viewed = !1),
                          this.view(
                            Math.max(
                              Math.min(this.index - e, this.length - 1),
                              0
                            )
                          ))
                        : (ue((e = this.items[this.index]), m),
                          e.setAttribute("aria-selected", !0)))
                    : ((this.image = null),
                      (this.viewed = !1),
                      (this.index = 0),
                      (this.imageData = {}),
                      (this.canvas.innerHTML = ""),
                      (this.title.innerHTML = ""))))
              : this.build()),
          this
        );
      },
      destroy: function () {
        var e = this.element,
          t = this.options;
        return (
          e[p] &&
            ((this.destroyed = !0),
            this.ready
              ? (this.played && this.stop(),
                t.inline
                  ? (this.fulled && this.exit(), this.unbind())
                  : this.isShown
                  ? (this.viewing &&
                      (this.imageRendering
                        ? this.imageRendering.abort()
                        : this.imageInitializing &&
                          this.imageInitializing.abort()),
                    this.hiding && this.transitioning.abort(),
                    this.hidden())
                  : this.showing && (this.transitioning.abort(), this.hidden()),
                (this.ready = !1),
                this.viewer.parentNode.removeChild(this.viewer))
              : t.inline &&
                (this.delaying
                  ? this.delaying.abort()
                  : this.initializing && this.initializing.abort()),
            t.inline || we(e, O, this.onStart),
            (e[p] = void 0)),
          this
        );
      },
    },
    Le = {
      getImageURL: function (e) {
        var t = this.options.url;
        return (t = J(t) ? e.getAttribute(t) : re(t) ? t.call(this, e) : "");
      },
      enforceFocus: function () {
        var n = this;
        this.clearEnforceFocus(),
          xe(
            document,
            P,
            (this.onFocusin = function (e) {
              var t = n.viewer,
                e = e.target;
              e === document ||
                e === t ||
                t.contains(e) ||
                (null !== e.getAttribute("tabindex") &&
                  "true" === e.getAttribute("aria-modal")) ||
                t.focus();
            })
          );
      },
      clearEnforceFocus: function () {
        this.onFocusin &&
          (we(document, P, this.onFocusin), (this.onFocusin = null));
      },
      open: function () {
        var e = this.body;
        ue(e, N),
          (e.style.paddingRight = "".concat(
            this.scrollbarWidth +
              (parseFloat(this.initialBodyComputedPaddingRight) || 0),
            "px"
          ));
      },
      close: function () {
        var e = this.body;
        de(e, N), (e.style.paddingRight = this.initialBodyPaddingRight);
      },
      shown: function () {
        var e = this.element,
          t = this.options,
          n = this.viewer;
        (this.fulled = !0),
          (this.isShown = !0),
          this.render(),
          this.bind(),
          (this.showing = !1),
          t.focus && (n.focus(), this.enforceFocus()),
          re(t.shown) && xe(e, "shown", t.shown, { once: !0 }),
          !1 !== Te(e, "shown") &&
            this.ready &&
            this.isShown &&
            !this.hiding &&
            this.view(this.index);
      },
      hidden: function () {
        var e = this.element,
          t = this.options,
          n = this.viewer;
        t.fucus && this.clearEnforceFocus(),
          (this.fulled = !1),
          (this.viewed = !1),
          (this.isShown = !1),
          this.close(),
          this.unbind(),
          ue(n, x),
          n.removeAttribute("role"),
          n.removeAttribute("aria-labelledby"),
          n.removeAttribute("aria-modal"),
          n.setAttribute("aria-hidden", !0),
          this.resetList(),
          this.resetImage(),
          (this.hiding = !1),
          this.destroyed ||
            (re(t.hidden) && xe(e, "hidden", t.hidden, { once: !0 }),
            Te(e, "hidden", null, { cancelable: !1 }));
      },
      requestFullscreen: function (e) {
        var t = this.element.ownerDocument;
        this.fulled &&
          !(
            t.fullscreenElement ||
            t.webkitFullscreenElement ||
            t.mozFullScreenElement ||
            t.msFullscreenElement
          ) &&
          ((t = t.documentElement).requestFullscreen
            ? ie(e)
              ? t.requestFullscreen(e)
              : t.requestFullscreen()
            : t.webkitRequestFullscreen
            ? t.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
            : t.mozRequestFullScreen
            ? t.mozRequestFullScreen()
            : t.msRequestFullscreen && t.msRequestFullscreen());
      },
      exitFullscreen: function () {
        var e = this.element.ownerDocument;
        this.fulled &&
          (e.fullscreenElement ||
            e.webkitFullscreenElement ||
            e.mozFullScreenElement ||
            e.msFullscreenElement) &&
          (e.exitFullscreen
            ? e.exitFullscreen()
            : e.webkitExitFullscreen
            ? e.webkitExitFullscreen()
            : e.mozCancelFullScreen
            ? e.mozCancelFullScreen()
            : e.msExitFullscreen && e.msExitFullscreen());
      },
      change: function (e) {
        var t = this.options,
          n = this.pointers,
          i = n[Object.keys(n)[0]];
        if (i) {
          var o,
            a,
            r = i.endX - i.startX,
            s = i.endY - i.startY;
          switch (this.action) {
            case d:
              this.move(r, s, e);
              break;
            case f:
              this.zoom(
                ((o = c({}, (l = n))),
                (a = []),
                oe(l, function (r, e) {
                  delete o[e],
                    oe(o, function (e) {
                      var t = Math.abs(r.startX - e.startX),
                        n = Math.abs(r.startY - e.startY),
                        i = Math.abs(r.endX - e.endX),
                        e = Math.abs(r.endY - e.endY),
                        n = Math.sqrt(t * t + n * n),
                        e = Math.sqrt(i * i + e * e);
                      a.push((e - n) / n);
                    });
                }),
                a.sort(function (e, t) {
                  return Math.abs(e) < Math.abs(t);
                }),
                a[0]),
                !1,
                e
              );
              break;
            case h:
              this.action = "switched";
              var l = Math.abs(r);
              1 < l &&
                l > Math.abs(s) &&
                ((this.pointers = {}),
                1 < r ? this.prev(t.loop) : r < -1 && this.next(t.loop));
          }
          oe(n, function (e) {
            (e.startX = e.endX), (e.startY = e.endY);
          });
        }
      },
      isSwitchable: function () {
        var e = this.imageData,
          t = this.viewerData;
        return (
          1 < this.length &&
          0 <= e.x &&
          0 <= e.y &&
          e.width <= t.width &&
          e.height <= t.height
        );
      },
    },
    Oe = s.Viewer,
    qe =
      ((Ae = -1),
      function () {
        return (Ae += 1);
      }),
    Ie = (function () {
      function n(e) {
        var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          (!(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
          !e || 1 !== e.nodeType)
        )
          throw new Error(
            "The first argument is required and must be an element."
          );
        (this.element = e),
          (this.options = ae({}, o, ie(t) && t)),
          (this.action = !1),
          (this.fading = !1),
          (this.fulled = !1),
          (this.hiding = !1),
          (this.imageClicked = !1),
          (this.imageData = {}),
          (this.index = this.options.initialViewIndex),
          (this.isImg = !1),
          (this.isShown = !1),
          (this.length = 0),
          (this.moving = !1),
          (this.played = !1),
          (this.playing = !1),
          (this.pointers = {}),
          (this.ready = !1),
          (this.rotating = !1),
          (this.scaling = !1),
          (this.showing = !1),
          (this.timeout = !1),
          (this.tooltipping = !1),
          (this.viewed = !1),
          (this.viewing = !1),
          (this.wheeling = !1),
          (this.zooming = !1),
          (this.id = qe()),
          this.init();
      }
      var e, t, i;
      return (
        (e = n),
        (i = [
          {
            key: "noConflict",
            value: function () {
              return (window.Viewer = Oe), n;
            },
          },
          {
            key: "setDefaults",
            value: function (e) {
              ae(o, ie(e) && e);
            },
          },
        ]),
        (t = [
          {
            key: "init",
            value: function () {
              var e,
                t,
                n,
                i,
                r = this,
                o = this.element,
                a = this.options;
              o[p] ||
                ((o[p] = this),
                a.focus && !a.keyboard && (a.focus = !1),
                (e = "img" === o.localName),
                (t = []),
                oe(e ? [o] : o.querySelectorAll("img"), function (e) {
                  re(a.filter)
                    ? a.filter.call(r, e) && t.push(e)
                    : r.getImageURL(e) && t.push(e);
                }),
                (this.isImg = e),
                (this.length = t.length),
                (this.images = t),
                this.initBody(),
                ee(document.createElement(p).style.transition) &&
                  (a.transition = !1),
                a.inline
                  ? ((n = 0),
                    (i = function () {
                      var e;
                      (n += 1) === r.length &&
                        ((r.initializing = !1),
                        (r.delaying = {
                          abort: function () {
                            clearTimeout(e);
                          },
                        }),
                        (e = setTimeout(function () {
                          (r.delaying = !1), r.build();
                        }, 0)));
                    }),
                    (this.initializing = {
                      abort: function () {
                        oe(t, function (e) {
                          e.complete || we(e, H, i);
                        });
                      },
                    }),
                    oe(t, function (e) {
                      e.complete ? i() : xe(e, H, i, { once: !0 });
                    }))
                  : xe(
                      o,
                      O,
                      (this.onStart = function (e) {
                        e = e.target;
                        "img" !== e.localName ||
                          (re(a.filter) && !a.filter.call(r, e)) ||
                          r.view(r.images.indexOf(e));
                      })
                    ));
            },
          },
          {
            key: "build",
            value: function () {
              var e, o, t, n, i, r, a, s, l, c, u, d, h, f;
              this.ready ||
                ((e = this.element),
                (o = this.options),
                (t = e.parentNode),
                ((h = document.createElement("div")).innerHTML =
                  '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>'),
                (i = (n = h.querySelector(
                  ".".concat(p, "-container")
                )).querySelector(".".concat(p, "-title"))),
                (r = n.querySelector(".".concat(p, "-toolbar"))),
                (a = n.querySelector(".".concat(p, "-navbar"))),
                (f = n.querySelector(".".concat(p, "-button"))),
                (h = n.querySelector(".".concat(p, "-canvas"))),
                (this.parent = t),
                (this.viewer = n),
                (this.title = i),
                (this.toolbar = r),
                (this.navbar = a),
                (this.button = f),
                (this.canvas = h),
                (this.footer = n.querySelector(".".concat(p, "-footer"))),
                (this.tooltipBox = n.querySelector(".".concat(p, "-tooltip"))),
                (this.player = n.querySelector(".".concat(p, "-player"))),
                (this.list = n.querySelector(".".concat(p, "-list"))),
                (n.id = "".concat(p).concat(this.id)),
                (i.id = "".concat(p, "Title").concat(this.id)),
                ue(
                  i,
                  o.title
                    ? Se(Array.isArray(o.title) ? o.title[0] : o.title)
                    : x
                ),
                ue(a, o.navbar ? Se(o.navbar) : x),
                he(f, x, !o.button),
                o.keyboard && f.setAttribute("tabindex", 0),
                o.backdrop &&
                  (ue(n, "".concat(p, "-backdrop")),
                  o.inline || "static" === o.backdrop || ge(h, V, "hide")),
                J(o.className) &&
                  o.className &&
                  o.className.split(G).forEach(function (e) {
                    ue(n, e);
                  }),
                o.toolbar
                  ? ((s = document.createElement("ul")),
                    (l = ie(o.toolbar)),
                    (c = K.slice(0, 3)),
                    (u = K.slice(7, 9)),
                    (d = K.slice(9)),
                    l || ue(r, Se(o.toolbar)),
                    oe(l ? o.toolbar : K, function (e, t) {
                      var n = l && ie(e),
                        i = l ? pe(t) : e,
                        r = n && !ee(e.show) ? e.show : e;
                      !r ||
                        (!o.zoomable && -1 !== c.indexOf(i)) ||
                        (!o.rotatable && -1 !== u.indexOf(i)) ||
                        (!o.scalable && -1 !== d.indexOf(i)) ||
                        ((t = n && !ee(e.size) ? e.size : e),
                        (n = n && !ee(e.click) ? e.click : e),
                        (e = document.createElement("li")),
                        o.keyboard && e.setAttribute("tabindex", 0),
                        e.setAttribute("role", "button"),
                        ue(e, "".concat(p, "-").concat(i)),
                        re(n) || ge(e, V, i),
                        Z(r) && ue(e, Se(r)),
                        -1 !== ["small", "large"].indexOf(t)
                          ? ue(e, "".concat(p, "-").concat(t))
                          : "play" === i && ue(e, "".concat(p, "-large")),
                        re(n) && xe(e, O, n),
                        s.appendChild(e));
                    }),
                    r.appendChild(s))
                  : ue(r, x),
                o.rotatable ||
                  (ue((h = r.querySelectorAll('li[class*="rotate"]')), S),
                  oe(h, function (e) {
                    r.appendChild(e);
                  })),
                o.inline
                  ? (ue(f, b),
                    le(n, { zIndex: o.zIndexInline }),
                    "static" === window.getComputedStyle(t).position &&
                      le(t, { position: "relative" }),
                    t.insertBefore(n, e.nextSibling))
                  : (ue(f, g),
                    ue(n, y),
                    ue(n, v),
                    ue(n, x),
                    le(n, { zIndex: o.zIndex }),
                    (f =
                      (f = J((f = o.container))
                        ? e.ownerDocument.querySelector(f)
                        : f) || this.body).appendChild(n)),
                o.inline && (this.render(), this.bind(), (this.isShown = !0)),
                (this.ready = !0),
                re(o.ready) && xe(e, Y, o.ready, { once: !0 }),
                !1 !== Te(e, Y)
                  ? this.ready && o.inline && this.view(this.index)
                  : (this.ready = !1));
            },
          },
        ]) && r(e.prototype, t),
        i && r(e, i),
        n
      );
    })();
  ae(Ie.prototype, Ne, u, a, je, Le);
  var Pe,
    Le = { exports: {} };
  (e = "undefined" != typeof window ? window : e),
    (Pe = function (T, e) {
      function m(e) {
        return t.concat.apply([], e);
      }
      function g(e) {
        return (
          "function" == typeof e &&
          "number" != typeof e.nodeType &&
          "function" != typeof e.item
        );
      }
      function v(e) {
        return null != e && e === e.window;
      }
      var t = [],
        n = Object.getPrototypeOf,
        s = t.slice,
        l = t.push,
        r = t.indexOf,
        i = {},
        o = i.toString,
        y = i.hasOwnProperty,
        a = y.toString,
        c = a.call(Object),
        b = {},
        k = T.document,
        u = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var i,
          r,
          o = (n = n || k).createElement("script");
        if (((o.text = e), t))
          for (i in u)
            (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
              o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function p(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? i[o.call(e)] || "object"
          : typeof e;
      }
      var C = function (e, t) {
        return new C.fn.init(e, t);
      };
      function d(e) {
        var t = !!e && "length" in e && e.length,
          n = p(e);
        return (
          !g(e) &&
          !v(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && 0 < t && t - 1 in e))
        );
      }
      (C.fn = C.prototype =
        {
          jquery: "3.6.0",
          constructor: C,
          length: 0,
          toArray: function () {
            return s.call(this);
          },
          get: function (e) {
            return null == e
              ? s.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            e = C.merge(this.constructor(), e);
            return (e.prevObject = this), e;
          },
          each: function (e) {
            return C.each(this, e);
          },
          map: function (n) {
            return this.pushStack(
              C.map(this, function (e, t) {
                return n.call(e, t, e);
              })
            );
          },
          slice: function () {
            return this.pushStack(s.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              C.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              C.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: l,
          sort: t.sort,
          splice: t.splice,
        }),
        (C.extend = C.fn.extend =
          function () {
            var e,
              t,
              n,
              i,
              r,
              o = arguments[0] || {},
              a = 1,
              s = arguments.length,
              l = !1;
            for (
              "boolean" == typeof o && ((l = o), (o = arguments[a] || {}), a++),
                "object" == typeof o || g(o) || (o = {}),
                a === s && ((o = this), a--);
              a < s;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (n = e[t]),
                    "__proto__" !== t &&
                      o !== n &&
                      (l && n && (C.isPlainObject(n) || (i = Array.isArray(n)))
                        ? ((r = o[t]),
                          (r =
                            i && !Array.isArray(r)
                              ? []
                              : i || C.isPlainObject(r)
                              ? r
                              : {}),
                          (i = !1),
                          (o[t] = C.extend(l, r, n)))
                        : void 0 !== n && (o[t] = n));
            return o;
          }),
        C.extend({
          expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            return (
              !(!e || "[object Object]" !== o.call(e)) &&
              (!(e = n(e)) ||
                ("function" ==
                  typeof (e = y.call(e, "constructor") && e.constructor) &&
                  a.call(e) === c))
            );
          },
          isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            w(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (d(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          makeArray: function (e, t) {
            t = t || [];
            return (
              null != e &&
                (d(Object(e))
                  ? C.merge(t, "string" == typeof e ? [e] : e)
                  : l.call(t, e)),
              t
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : r.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
              e[r++] = t[i];
            return (e.length = r), e;
          },
          grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
              !t(e[r], r) != a && i.push(e[r]);
            return i;
          },
          map: function (e, t, n) {
            var i,
              r,
              o = 0,
              a = [];
            if (d(e))
              for (i = e.length; o < i; o++)
                null != (r = t(e[o], o, n)) && a.push(r);
            else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return m(a);
          },
          guid: 1,
          support: b,
        }),
        "function" == typeof Symbol &&
          (C.fn[Symbol.iterator] = t[Symbol.iterator]),
        C.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            i["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var h = (function (n) {
        function d(e, t) {
          return (
            (e = "0x" + e.slice(1) - 65536),
            t ||
              (e < 0
                ? String.fromCharCode(65536 + e)
                : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320))
          );
        }
        function h(e, t) {
          return t
            ? "\0" === e
              ? "�"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        }
        function i() {
          T();
        }
        var e,
          f,
          w,
          o,
          r,
          p,
          m,
          g,
          x,
          l,
          c,
          T,
          k,
          a,
          C,
          v,
          s,
          u,
          y,
          E = "sizzle" + +new Date(),
          b = n.document,
          S = 0,
          D = 0,
          A = le(),
          N = le(),
          j = le(),
          L = le(),
          O = function (e, t) {
            return e === t && (c = !0), 0;
          },
          q = {}.hasOwnProperty,
          t = [],
          I = t.pop,
          P = t.push,
          z = t.push,
          H = t.slice,
          R = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
          },
          M =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          F = "[\\x20\\t\\r\\n\\f]",
          X =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            F +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          _ =
            "\\[" +
            F +
            "*(" +
            X +
            ")(?:" +
            F +
            "*([*^$|!~]?=)" +
            F +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            X +
            "))|)" +
            F +
            "*\\]",
          W =
            ":(" +
            X +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            _ +
            ")*)|.*)\\)|)",
          B = new RegExp(F + "+", "g"),
          Y = new RegExp(
            "^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$",
            "g"
          ),
          $ = new RegExp("^" + F + "*," + F + "*"),
          U = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
          V = new RegExp(F + "|>"),
          G = new RegExp(W),
          K = new RegExp("^" + X + "$"),
          J = {
            ID: new RegExp("^#(" + X + ")"),
            CLASS: new RegExp("^\\.(" + X + ")"),
            TAG: new RegExp("^(" + X + "|[*])"),
            ATTR: new RegExp("^" + _),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                F +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                F +
                "*(?:([+-]|)" +
                F +
                "*(\\d+)|))" +
                F +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + M + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                F +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                F +
                "*((?:-\\d)?\\d*)" +
                F +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          Q = /HTML$/i,
          Z = /^(?:input|select|textarea|button)$/i,
          ee = /^h\d$/i,
          te = /^[^{]+\{\s*\[native \w/,
          ne = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ie = /[+~]/,
          re = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ae = ye(
            function (e) {
              return (
                !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          z.apply((t = H.call(b.childNodes)), b.childNodes),
            t[b.childNodes.length].nodeType;
        } catch (e) {
          z = {
            apply: t.length
              ? function (e, t) {
                  P.apply(e, H.call(t));
                }
              : function (e, t) {
                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                  e.length = n - 1;
                },
          };
        }
        function se(t, e, n, i) {
          var r,
            o,
            a,
            s,
            l,
            c,
            u = e && e.ownerDocument,
            d = e ? e.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))
          )
            return n;
          if (!i && (T(e), (e = e || k), C)) {
            if (11 !== d && (s = ne.exec(t)))
              if ((c = s[1])) {
                if (9 === d) {
                  if (!(o = e.getElementById(c))) return n;
                  if (o.id === c) return n.push(o), n;
                } else if (
                  u &&
                  (o = u.getElementById(c)) &&
                  y(e, o) &&
                  o.id === c
                )
                  return n.push(o), n;
              } else {
                if (s[2]) return z.apply(n, e.getElementsByTagName(t)), n;
                if (
                  (c = s[3]) &&
                  f.getElementsByClassName &&
                  e.getElementsByClassName
                )
                  return z.apply(n, e.getElementsByClassName(c)), n;
              }
            if (
              f.qsa &&
              !L[t + " "] &&
              (!v || !v.test(t)) &&
              (1 !== d || "object" !== e.nodeName.toLowerCase())
            ) {
              if (((c = t), (u = e), 1 === d && (V.test(t) || U.test(t)))) {
                for (
                  ((u = (ie.test(t) && me(e.parentNode)) || e) === e &&
                    f.scope) ||
                    ((a = e.getAttribute("id"))
                      ? (a = a.replace(oe, h))
                      : e.setAttribute("id", (a = E))),
                    r = (l = p(t)).length;
                  r--;

                )
                  l[r] = (a ? "#" + a : ":scope") + " " + ve(l[r]);
                c = l.join(",");
              }
              try {
                return z.apply(n, u.querySelectorAll(c)), n;
              } catch (e) {
                L(t, !0);
              } finally {
                a === E && e.removeAttribute("id");
              }
            }
          }
          return g(t.replace(Y, "$1"), e, n, i);
        }
        function le() {
          var n = [];
          function i(e, t) {
            return (
              n.push(e + " ") > w.cacheLength && delete i[n.shift()],
              (i[e + " "] = t)
            );
          }
          return i;
        }
        function ce(e) {
          return (e[E] = !0), e;
        }
        function ue(e) {
          var t = k.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t);
          }
        }
        function de(e, t) {
          for (var n = e.split("|"), i = n.length; i--; )
            w.attrHandle[n[i]] = t;
        }
        function he(e, t) {
          var n = t && e,
            i =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              e.sourceIndex - t.sourceIndex;
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function fe(t) {
          return function (e) {
            return "form" in e
              ? e.parentNode && !1 === e.disabled
                ? "label" in e
                  ? "label" in e.parentNode
                    ? e.parentNode.disabled === t
                    : e.disabled === t
                  : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
                : e.disabled === t
              : "label" in e && e.disabled === t;
          };
        }
        function pe(a) {
          return ce(function (o) {
            return (
              (o = +o),
              ce(function (e, t) {
                for (var n, i = a([], e.length, o), r = i.length; r--; )
                  e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
              })
            );
          });
        }
        function me(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in ((f = se.support = {}),
        (r = se.isXML =
          function (e) {
            var t = e && e.namespaceURI,
              e = e && (e.ownerDocument || e).documentElement;
            return !Q.test(t || (e && e.nodeName) || "HTML");
          }),
        (T = se.setDocument =
          function (e) {
            var t,
              e = e ? e.ownerDocument || e : b;
            return (
              e != k &&
                9 === e.nodeType &&
                e.documentElement &&
                ((a = (k = e).documentElement),
                (C = !r(k)),
                b != k &&
                  (t = k.defaultView) &&
                  t.top !== t &&
                  (t.addEventListener
                    ? t.addEventListener("unload", i, !1)
                    : t.attachEvent && t.attachEvent("onunload", i)),
                (f.scope = ue(function (e) {
                  return (
                    a.appendChild(e).appendChild(k.createElement("div")),
                    void 0 !== e.querySelectorAll &&
                      !e.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (f.attributes = ue(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (f.getElementsByTagName = ue(function (e) {
                  return (
                    e.appendChild(k.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (f.getElementsByClassName = te.test(k.getElementsByClassName)),
                (f.getById = ue(function (e) {
                  return (
                    (a.appendChild(e).id = E),
                    !k.getElementsByName || !k.getElementsByName(E).length
                  );
                })),
                f.getById
                  ? ((w.filter.ID = function (e) {
                      var t = e.replace(re, d);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (w.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && C) {
                        e = t.getElementById(e);
                        return e ? [e] : [];
                      }
                    }))
                  : ((w.filter.ID = function (e) {
                      var t = e.replace(re, d);
                      return function (e) {
                        e =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return e && e.value === t;
                      };
                    }),
                    (w.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && C) {
                        var n,
                          i,
                          r,
                          o = t.getElementById(e);
                        if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                          for (
                            r = t.getElementsByName(e), i = 0;
                            (o = r[i++]);

                          )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                        }
                        return [];
                      }
                    })),
                (w.find.TAG = f.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : f.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" !== e) return o;
                      for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }),
                (w.find.CLASS =
                  f.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && C)
                      return t.getElementsByClassName(e);
                  }),
                (s = []),
                (v = []),
                (f.qsa = te.test(k.querySelectorAll)) &&
                  (ue(function (e) {
                    var t;
                    (a.appendChild(e).innerHTML =
                      "<a id='" +
                      E +
                      "'></a><select id='" +
                      E +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        v.push("[*^$]=" + F + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        v.push("\\[" + F + "*(?:value|" + M + ")"),
                      e.querySelectorAll("[id~=" + E + "-]").length ||
                        v.push("~="),
                      (t = k.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        v.push(
                          "\\[" + F + "*name" + F + "*=" + F + "*(?:''|\"\")"
                        ),
                      e.querySelectorAll(":checked").length ||
                        v.push(":checked"),
                      e.querySelectorAll("a#" + E + "+*").length ||
                        v.push(".#.+[+~]"),
                      e.querySelectorAll("\\\f"),
                      v.push("[\\r\\n\\f]");
                  }),
                  ue(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = k.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        v.push("name" + F + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        v.push(":enabled", ":disabled"),
                      (a.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        v.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      v.push(",.*:");
                  })),
                (f.matchesSelector = te.test(
                  (u =
                    a.matches ||
                    a.webkitMatchesSelector ||
                    a.mozMatchesSelector ||
                    a.oMatchesSelector ||
                    a.msMatchesSelector)
                )) &&
                  ue(function (e) {
                    (f.disconnectedMatch = u.call(e, "*")),
                      u.call(e, "[s!='']:x"),
                      s.push("!=", W);
                  }),
                (v = v.length && new RegExp(v.join("|"))),
                (s = s.length && new RegExp(s.join("|"))),
                (t = te.test(a.compareDocumentPosition)),
                (y =
                  t || te.test(a.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          t = t && t.parentNode;
                        return (
                          e === t ||
                          !(
                            !t ||
                            1 !== t.nodeType ||
                            !(n.contains
                              ? n.contains(t)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(t))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (O = t
                  ? function (e, t) {
                      if (e === t) return (c = !0), 0;
                      var n =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        n ||
                        (1 &
                          (n =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!f.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e == k || (e.ownerDocument == b && y(b, e))
                            ? -1
                            : t == k || (t.ownerDocument == b && y(b, t))
                            ? 1
                            : l
                            ? R(l, e) - R(l, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (c = !0), 0;
                      var n,
                        i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                      if (!r || !o)
                        return e == k
                          ? -1
                          : t == k
                          ? 1
                          : r
                          ? -1
                          : o
                          ? 1
                          : l
                          ? R(l, e) - R(l, t)
                          : 0;
                      if (r === o) return he(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (; a[i] === s[i]; ) i++;
                      return i
                        ? he(a[i], s[i])
                        : a[i] == b
                        ? -1
                        : s[i] == b
                        ? 1
                        : 0;
                    })),
              k
            );
          }),
        (se.matches = function (e, t) {
          return se(e, null, null, t);
        }),
        (se.matchesSelector = function (e, t) {
          if (
            (T(e),
            f.matchesSelector &&
              C &&
              !L[t + " "] &&
              (!s || !s.test(t)) &&
              (!v || !v.test(t)))
          )
            try {
              var n = u.call(e, t);
              if (
                n ||
                f.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return n;
            } catch (e) {
              L(t, !0);
            }
          return 0 < se(t, k, null, [e]).length;
        }),
        (se.contains = function (e, t) {
          return (e.ownerDocument || e) != k && T(e), y(e, t);
        }),
        (se.attr = function (e, t) {
          (e.ownerDocument || e) != k && T(e);
          var n = w.attrHandle[t.toLowerCase()],
            n =
              n && q.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
          return void 0 !== n
            ? n
            : f.attributes || !C
            ? e.getAttribute(t)
            : (n = e.getAttributeNode(t)) && n.specified
            ? n.value
            : null;
        }),
        (se.escape = function (e) {
          return (e + "").replace(oe, h);
        }),
        (se.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (se.uniqueSort = function (e) {
          var t,
            n = [],
            i = 0,
            r = 0;
          if (
            ((c = !f.detectDuplicates),
            (l = !f.sortStable && e.slice(0)),
            e.sort(O),
            c)
          ) {
            for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
            for (; i--; ) e.splice(n[i], 1);
          }
          return (l = null), e;
        }),
        (o = se.getText =
          function (e) {
            var t,
              n = "",
              i = 0,
              r = e.nodeType;
            if (r) {
              if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
              } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += o(t);
            return n;
          }),
        ((w = se.selectors =
          {
            cacheLength: 50,
            createPseudo: ce,
            match: J,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(re, d)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(re, d)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || se.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && se.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return J.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        G.test(n) &&
                        (t = p(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(re, d).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = A[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) &&
                    A(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, n, i) {
                return function (e) {
                  e = se.attr(e, t);
                  return null == e
                    ? "!=" === n
                    : !n ||
                        ((e += ""),
                        "=" === n
                          ? e === i
                          : "!=" === n
                          ? e !== i
                          : "^=" === n
                          ? i && 0 === e.indexOf(i)
                          : "*=" === n
                          ? i && -1 < e.indexOf(i)
                          : "$=" === n
                          ? i && e.slice(-i.length) === i
                          : "~=" === n
                          ? -1 < (" " + e.replace(B, " ") + " ").indexOf(i)
                          : "|=" === n &&
                            (e === i || e.slice(0, i.length + 1) === i + "-"));
                };
              },
              CHILD: function (p, e, t, m, g) {
                var v = "nth" !== p.slice(0, 3),
                  y = "last" !== p.slice(-4),
                  b = "of-type" === e;
                return 1 === m && 0 === g
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (e, t, n) {
                      var i,
                        r,
                        o,
                        a,
                        s,
                        l,
                        c = v != y ? "nextSibling" : "previousSibling",
                        u = e.parentNode,
                        d = b && e.nodeName.toLowerCase(),
                        h = !n && !b,
                        f = !1;
                      if (u) {
                        if (v) {
                          for (; c; ) {
                            for (a = e; (a = a[c]); )
                              if (
                                b
                                  ? a.nodeName.toLowerCase() === d
                                  : 1 === a.nodeType
                              )
                                return !1;
                            l = c = "only" === p && !l && "nextSibling";
                          }
                          return !0;
                        }
                        if (((l = [y ? u.firstChild : u.lastChild]), y && h)) {
                          for (
                            f =
                              (s =
                                (i =
                                  (r =
                                    (o = (a = u)[E] || (a[E] = {}))[
                                      a.uniqueID
                                    ] || (o[a.uniqueID] = {}))[p] || [])[0] ===
                                  S && i[1]) && i[2],
                              a = s && u.childNodes[s];
                            (a = (++s && a && a[c]) || (f = s = 0) || l.pop());

                          )
                            if (1 === a.nodeType && ++f && a === e) {
                              r[p] = [S, s, f];
                              break;
                            }
                        } else if (
                          !1 ===
                          (f = h
                            ? (s =
                                (i =
                                  (r =
                                    (o = (a = e)[E] || (a[E] = {}))[
                                      a.uniqueID
                                    ] || (o[a.uniqueID] = {}))[p] || [])[0] ===
                                  S && i[1])
                            : f)
                        )
                          for (
                            ;
                            (a =
                              (++s && a && a[c]) || (f = s = 0) || l.pop()) &&
                            ((b
                              ? a.nodeName.toLowerCase() !== d
                              : 1 !== a.nodeType) ||
                              !++f ||
                              (h &&
                                ((r =
                                  (o = a[E] || (a[E] = {}))[a.uniqueID] ||
                                  (o[a.uniqueID] = {}))[p] = [S, f]),
                              a !== e));

                          );
                        return (f -= g) === m || (f % m == 0 && 0 <= f / m);
                      }
                    };
              },
              PSEUDO: function (e, o) {
                var t,
                  a =
                    w.pseudos[e] ||
                    w.setFilters[e.toLowerCase()] ||
                    se.error("unsupported pseudo: " + e);
                return a[E]
                  ? a(o)
                  : 1 < a.length
                  ? ((t = [e, e, "", o]),
                    w.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ce(function (e, t) {
                          for (var n, i = a(e, o), r = i.length; r--; )
                            e[(n = R(e, i[r]))] = !(t[n] = i[r]);
                        })
                      : function (e) {
                          return a(e, 0, t);
                        })
                  : a;
              },
            },
            pseudos: {
              not: ce(function (e) {
                var i = [],
                  r = [],
                  s = m(e.replace(Y, "$1"));
                return s[E]
                  ? ce(function (e, t, n, i) {
                      for (var r, o = s(e, null, i, []), a = e.length; a--; )
                        (r = o[a]) && (e[a] = !(t[a] = r));
                    })
                  : function (e, t, n) {
                      return (
                        (i[0] = e), s(i, null, n, r), (i[0] = null), !r.pop()
                      );
                    };
              }),
              has: ce(function (t) {
                return function (e) {
                  return 0 < se(t, e).length;
                };
              }),
              contains: ce(function (t) {
                return (
                  (t = t.replace(re, d)),
                  function (e) {
                    return -1 < (e.textContent || o(e)).indexOf(t);
                  }
                );
              }),
              lang: ce(function (n) {
                return (
                  K.test(n || "") || se.error("unsupported lang: " + n),
                  (n = n.replace(re, d).toLowerCase()),
                  function (e) {
                    var t;
                    do {
                      if (
                        (t = C
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (t = t.toLowerCase()) === n ||
                          0 === t.indexOf(n + "-")
                        );
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var t = n.location && n.location.hash;
                return t && t.slice(1) === e.id;
              },
              root: function (e) {
                return e === a;
              },
              focus: function (e) {
                return (
                  e === k.activeElement &&
                  (!k.hasFocus || k.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: fe(!1),
              disabled: fe(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !w.pseudos.empty(e);
              },
              header: function (e) {
                return ee.test(e.nodeName);
              },
              input: function (e) {
                return Z.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (e = e.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: pe(function () {
                return [0];
              }),
              last: pe(function (e, t) {
                return [t - 1];
              }),
              eq: pe(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: pe(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: pe(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: pe(function (e, t, n) {
                for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                  e.push(i);
                return e;
              }),
              gt: pe(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                return e;
              }),
            },
          }).pseudos.nth = w.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          w.pseudos[e] = (function (t) {
            return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
          })(e);
        for (e in { submit: !0, reset: !0 })
          w.pseudos[e] = (function (n) {
            return function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t || "button" === t) && e.type === n;
            };
          })(e);
        function ge() {}
        function ve(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i;
        }
        function ye(a, e, t) {
          var s = e.dir,
            l = e.next,
            c = l || s,
            u = t && "parentNode" === c,
            d = D++;
          return e.first
            ? function (e, t, n) {
                for (; (e = e[s]); )
                  if (1 === e.nodeType || u) return a(e, t, n);
                return !1;
              }
            : function (e, t, n) {
                var i,
                  r,
                  o = [S, d];
                if (n) {
                  for (; (e = e[s]); )
                    if ((1 === e.nodeType || u) && a(e, t, n)) return !0;
                } else
                  for (; (e = e[s]); )
                    if (1 === e.nodeType || u)
                      if (
                        ((i =
                          (r = e[E] || (e[E] = {}))[e.uniqueID] ||
                          (r[e.uniqueID] = {})),
                        l && l === e.nodeName.toLowerCase())
                      )
                        e = e[s] || e;
                      else {
                        if ((r = i[c]) && r[0] === S && r[1] === d)
                          return (o[2] = r[2]);
                        if (((i[c] = o)[2] = a(e, t, n))) return !0;
                      }
                return !1;
              };
        }
        function be(r) {
          return 1 < r.length
            ? function (e, t, n) {
                for (var i = r.length; i--; ) if (!r[i](e, t, n)) return !1;
                return !0;
              }
            : r[0];
        }
        function we(e, t, n, i, r) {
          for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
            (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), c && t.push(s)));
          return a;
        }
        function xe(f, p, m, g, v, e) {
          return (
            g && !g[E] && (g = xe(g)),
            v && !v[E] && (v = xe(v, e)),
            ce(function (e, t, n, i) {
              var r,
                o,
                a,
                s = [],
                l = [],
                c = t.length,
                u =
                  e ||
                  (function (e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                    return n;
                  })(p || "*", n.nodeType ? [n] : n, []),
                d = !f || (!e && p) ? u : we(u, s, f, n, i),
                h = m ? (v || (e ? f : c || g) ? [] : t) : d;
              if ((m && m(d, h, n, i), g))
                for (r = we(h, l), g(r, [], n, i), o = r.length; o--; )
                  (a = r[o]) && (h[l[o]] = !(d[l[o]] = a));
              if (e) {
                if (v || f) {
                  if (v) {
                    for (r = [], o = h.length; o--; )
                      (a = h[o]) && r.push((d[o] = a));
                    v(null, (h = []), r, i);
                  }
                  for (o = h.length; o--; )
                    (a = h[o]) &&
                      -1 < (r = v ? R(e, a) : s[o]) &&
                      (e[r] = !(t[r] = a));
                }
              } else (h = we(h === t ? h.splice(c, h.length) : h)), v ? v(null, t, h, i) : z.apply(t, h);
            })
          );
        }
        function Te(g, v) {
          function e(e, t, n, i, r) {
            var o,
              a,
              s,
              l = 0,
              c = "0",
              u = e && [],
              d = [],
              h = x,
              f = e || (b && w.find.TAG("*", r)),
              p = (S += null == h ? 1 : Math.random() || 0.1),
              m = f.length;
            for (
              r && (x = t == k || t || r);
              c !== m && null != (o = f[c]);
              c++
            ) {
              if (b && o) {
                for (
                  a = 0, t || o.ownerDocument == k || (T(o), (n = !C));
                  (s = g[a++]);

                )
                  if (s(o, t || k, n)) {
                    i.push(o);
                    break;
                  }
                r && (S = p);
              }
              y && ((o = !s && o) && l--, e && u.push(o));
            }
            if (((l += c), y && c !== l)) {
              for (a = 0; (s = v[a++]); ) s(u, d, t, n);
              if (e) {
                if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = I.call(i));
                d = we(d);
              }
              z.apply(i, d),
                r && !e && 0 < d.length && 1 < l + v.length && se.uniqueSort(i);
            }
            return r && ((S = p), (x = h)), u;
          }
          var y = 0 < v.length,
            b = 0 < g.length;
          return y ? ce(e) : e;
        }
        return (
          (ge.prototype = w.filters = w.pseudos),
          (w.setFilters = new ge()),
          (p = se.tokenize =
            function (e, t) {
              var n,
                i,
                r,
                o,
                a,
                s,
                l,
                c = N[e + " "];
              if (c) return t ? 0 : c.slice(0);
              for (a = e, s = [], l = w.preFilter; a; ) {
                for (o in ((n && !(i = $.exec(a))) ||
                  (i && (a = a.slice(i[0].length) || a), s.push((r = []))),
                (n = !1),
                (i = U.exec(a)) &&
                  ((n = i.shift()),
                  r.push({ value: n, type: i[0].replace(Y, " ") }),
                  (a = a.slice(n.length))),
                w.filter))
                  !(i = J[o].exec(a)) ||
                    (l[o] && !(i = l[o](i))) ||
                    ((n = i.shift()),
                    r.push({ value: n, type: o, matches: i }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? se.error(e) : N(e, s).slice(0);
            }),
          (m = se.compile =
            function (e, t) {
              var n,
                i = [],
                r = [],
                o = j[e + " "];
              if (!o) {
                for (n = (t = t || p(e)).length; n--; )
                  ((o = (function e(t) {
                    for (
                      var i,
                        n,
                        r,
                        o = t.length,
                        a = w.relative[t[0].type],
                        s = a || w.relative[" "],
                        l = a ? 1 : 0,
                        c = ye(
                          function (e) {
                            return e === i;
                          },
                          s,
                          !0
                        ),
                        u = ye(
                          function (e) {
                            return -1 < R(i, e);
                          },
                          s,
                          !0
                        ),
                        d = [
                          function (e, t, n) {
                            return (
                              (n =
                                (!a && (n || t !== x)) ||
                                ((i = t).nodeType ? c : u)(e, t, n)),
                              (i = null),
                              n
                            );
                          },
                        ];
                      l < o;
                      l++
                    )
                      if ((n = w.relative[t[l].type])) d = [ye(be(d), n)];
                      else {
                        if (
                          (n = w.filter[t[l].type].apply(null, t[l].matches))[E]
                        ) {
                          for (r = ++l; r < o && !w.relative[t[r].type]; r++);
                          return xe(
                            1 < l && be(d),
                            1 < l &&
                              ve(
                                t.slice(0, l - 1).concat({
                                  value: " " === t[l - 2].type ? "*" : "",
                                })
                              ).replace(Y, "$1"),
                            n,
                            l < r && e(t.slice(l, r)),
                            r < o && e((t = t.slice(r))),
                            r < o && ve(t)
                          );
                        }
                        d.push(n);
                      }
                    return be(d);
                  })(t[n]))[E]
                    ? i
                    : r
                  ).push(o);
                (o = j(e, Te(r, i))).selector = e;
              }
              return o;
            }),
          (g = se.select =
            function (e, t, n, i) {
              var r,
                o,
                a,
                s,
                l,
                c = "function" == typeof e && e,
                u = !i && p((e = c.selector || e));
              if (((n = n || []), 1 === u.length)) {
                if (
                  2 < (o = u[0] = u[0].slice(0)).length &&
                  "ID" === (a = o[0]).type &&
                  9 === t.nodeType &&
                  C &&
                  w.relative[o[1].type]
                ) {
                  if (
                    !(t = (w.find.ID(a.matches[0].replace(re, d), t) || [])[0])
                  )
                    return n;
                  c && (t = t.parentNode),
                    (e = e.slice(o.shift().value.length));
                }
                for (
                  r = J.needsContext.test(e) ? 0 : o.length;
                  r-- && ((a = o[r]), !w.relative[(s = a.type)]);

                )
                  if (
                    (l = w.find[s]) &&
                    (i = l(
                      a.matches[0].replace(re, d),
                      (ie.test(o[0].type) && me(t.parentNode)) || t
                    ))
                  ) {
                    if ((o.splice(r, 1), !(e = i.length && ve(o))))
                      return z.apply(n, i), n;
                    break;
                  }
              }
              return (
                (c || m(e, u))(
                  i,
                  t,
                  !C,
                  n,
                  !t || (ie.test(e) && me(t.parentNode)) || t
                ),
                n
              );
            }),
          (f.sortStable = E.split("").sort(O).join("") === E),
          (f.detectDuplicates = !!c),
          T(),
          (f.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(k.createElement("fieldset"));
          })),
          ue(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              "#" === e.firstChild.getAttribute("href")
            );
          }) ||
            de("type|href|height|width", function (e, t, n) {
              if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
          (f.attributes &&
            ue(function (e) {
              return (
                (e.innerHTML = "<input/>"),
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
              );
            })) ||
            de("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          ue(function (e) {
            return null == e.getAttribute("disabled");
          }) ||
            de(M, function (e, t, n) {
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (t = e.getAttributeNode(t)) && t.specified
                  ? t.value
                  : null;
            }),
          se
        );
      })(T);
      (C.find = h),
        (C.expr = h.selectors),
        (C.expr[":"] = C.expr.pseudos),
        (C.uniqueSort = C.unique = h.uniqueSort),
        (C.text = h.getText),
        (C.isXMLDoc = h.isXML),
        (C.contains = h.contains),
        (C.escapeSelector = h.escape);
      function f(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (r && C(e).is(n)) break;
            i.push(e);
          }
        return i;
      }
      function x(e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      }
      var E = C.expr.match.needsContext;
      function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function A(e, n, i) {
        return g(n)
          ? C.grep(e, function (e, t) {
              return !!n.call(e, t, e) !== i;
            })
          : n.nodeType
          ? C.grep(e, function (e) {
              return (e === n) !== i;
            })
          : "string" != typeof n
          ? C.grep(e, function (e) {
              return -1 < r.call(n, e) !== i;
            })
          : C.filter(n, e, i);
      }
      (C.filter = function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? C.find.matchesSelector(i, e)
              ? [i]
              : []
            : C.find.matches(
                e,
                C.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        C.fn.extend({
          find: function (e) {
            var t,
              n,
              i = this.length,
              r = this;
            if ("string" != typeof e)
              return this.pushStack(
                C(e).filter(function () {
                  for (t = 0; t < i; t++) if (C.contains(r[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
            return 1 < i ? C.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(A(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(A(this, e || [], !0));
          },
          is: function (e) {
            return !!A(
              this,
              "string" == typeof e && E.test(e) ? C(e) : e || [],
              !1
            ).length;
          },
        });
      var N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (C.fn.init = function (e, t, n) {
        if (!e) return this;
        if (((n = n || j), "string" != typeof e))
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : g(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(C)
            : C.makeArray(e, this);
        if (
          !(i =
            "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
              ? [null, e, null]
              : N.exec(e)) ||
          (!i[1] && t)
        )
          return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
          if (
            ((t = t instanceof C ? t[0] : t),
            C.merge(
              this,
              C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : k, !0)
            ),
            D.test(i[1]) && C.isPlainObject(t))
          )
            for (var i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this;
        }
        return (
          (e = k.getElementById(i[2])) && ((this[0] = e), (this.length = 1)),
          this
        );
      }).prototype = C.fn;
      var j = C(k),
        L = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
      function q(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      C.fn.extend({
        has: function (e) {
          var t = C(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            i = 0,
            r = this.length,
            o = [],
            a = "string" != typeof e && C(e);
          if (!E.test(e))
            for (; i < r; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? -1 < a.index(n)
                    : 1 === n.nodeType && C.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(1 < o.length ? C.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? r.call(C(e), this[0])
              : r.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        C.each(
          {
            parent: function (e) {
              e = e.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (e) {
              return f(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return f(e, "parentNode", n);
            },
            next: function (e) {
              return q(e, "nextSibling");
            },
            prev: function (e) {
              return q(e, "previousSibling");
            },
            nextAll: function (e) {
              return f(e, "nextSibling");
            },
            prevAll: function (e) {
              return f(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return f(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return f(e, "previousSibling", n);
            },
            siblings: function (e) {
              return x((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return x(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && n(e.contentDocument)
                ? e.contentDocument
                : (S(e, "template") && (e = e.content || e),
                  C.merge([], e.childNodes));
            },
          },
          function (i, r) {
            C.fn[i] = function (e, t) {
              var n = C.map(this, r, e);
              return (
                (t = "Until" !== i.slice(-5) ? e : t) &&
                  "string" == typeof t &&
                  (n = C.filter(t, n)),
                1 < this.length &&
                  (O[i] || C.uniqueSort(n), L.test(i) && n.reverse()),
                this.pushStack(n)
              );
            };
          }
        );
      var I = /[^\x20\t\r\n\f]+/g;
      function P(e) {
        return e;
      }
      function z(e) {
        throw e;
      }
      function H(e, t, n, i) {
        var r;
        try {
          e && g((r = e.promise))
            ? r.call(e).done(t).fail(n)
            : e && g((r = e.then))
            ? r.call(e, t, n)
            : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (C.Callbacks = function (i) {
        var e, n;
        i =
          "string" == typeof i
            ? ((e = i),
              (n = {}),
              C.each(e.match(I) || [], function (e, t) {
                n[t] = !0;
              }),
              n)
            : C.extend({}, i);
        function r() {
          for (s = s || i.once, a = o = !0; c.length; u = -1)
            for (t = c.shift(); ++u < l.length; )
              !1 === l[u].apply(t[0], t[1]) &&
                i.stopOnFalse &&
                ((u = l.length), (t = !1));
          i.memory || (t = !1), (o = !1), s && (l = t ? [] : "");
        }
        var o,
          t,
          a,
          s,
          l = [],
          c = [],
          u = -1,
          d = {
            add: function () {
              return (
                l &&
                  (t && !o && ((u = l.length - 1), c.push(t)),
                  (function n(e) {
                    C.each(e, function (e, t) {
                      g(t)
                        ? (i.unique && d.has(t)) || l.push(t)
                        : t && t.length && "string" !== p(t) && n(t);
                    });
                  })(arguments),
                  t && !o && r()),
                this
              );
            },
            remove: function () {
              return (
                C.each(arguments, function (e, t) {
                  for (var n; -1 < (n = C.inArray(t, l, n)); )
                    l.splice(n, 1), n <= u && u--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? -1 < C.inArray(e, l) : 0 < l.length;
            },
            empty: function () {
              return (l = l && []), this;
            },
            disable: function () {
              return (s = c = []), (l = t = ""), this;
            },
            disabled: function () {
              return !l;
            },
            lock: function () {
              return (s = c = []), t || o || (l = t = ""), this;
            },
            locked: function () {
              return !!s;
            },
            fireWith: function (e, t) {
              return (
                s ||
                  ((t = [e, (t = t || []).slice ? t.slice() : t]),
                  c.push(t),
                  o || r()),
                this
              );
            },
            fire: function () {
              return d.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!a;
            },
          };
        return d;
      }),
        C.extend({
          Deferred: function (e) {
            var o = [
                [
                  "notify",
                  "progress",
                  C.Callbacks("memory"),
                  C.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              a = {
                state: function () {
                  return r;
                },
                always: function () {
                  return s.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return a.then(null, e);
                },
                pipe: function () {
                  var r = arguments;
                  return C.Deferred(function (i) {
                    C.each(o, function (e, t) {
                      var n = g(r[t[4]]) && r[t[4]];
                      s[t[1]](function () {
                        var e = n && n.apply(this, arguments);
                        e && g(e.promise)
                          ? e
                              .promise()
                              .progress(i.notify)
                              .done(i.resolve)
                              .fail(i.reject)
                          : i[t[0] + "With"](this, n ? [e] : arguments);
                      });
                    }),
                      (r = null);
                  }).promise();
                },
                then: function (t, n, i) {
                  var l = 0;
                  function c(r, o, a, s) {
                    return function () {
                      function e() {
                        var e, t;
                        if (!(r < l)) {
                          if ((e = a.apply(n, i)) === o.promise())
                            throw new TypeError("Thenable self-resolution");
                          (t =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            g(t)
                              ? s
                                ? t.call(e, c(l, o, P, s), c(l, o, z, s))
                                : (l++,
                                  t.call(
                                    e,
                                    c(l, o, P, s),
                                    c(l, o, z, s),
                                    c(l, o, P, o.notifyWith)
                                  ))
                              : (a !== P && ((n = void 0), (i = [e])),
                                (s || o.resolveWith)(n, i));
                        }
                      }
                      var n = this,
                        i = arguments,
                        t = s
                          ? e
                          : function () {
                              try {
                                e();
                              } catch (e) {
                                C.Deferred.exceptionHook &&
                                  C.Deferred.exceptionHook(e, t.stackTrace),
                                  l <= r + 1 &&
                                    (a !== z && ((n = void 0), (i = [e])),
                                    o.rejectWith(n, i));
                              }
                            };
                      r
                        ? t()
                        : (C.Deferred.getStackHook &&
                            (t.stackTrace = C.Deferred.getStackHook()),
                          T.setTimeout(t));
                    };
                  }
                  return C.Deferred(function (e) {
                    o[0][3].add(c(0, e, g(i) ? i : P, e.notifyWith)),
                      o[1][3].add(c(0, e, g(t) ? t : P)),
                      o[2][3].add(c(0, e, g(n) ? n : z));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? C.extend(e, a) : a;
                },
              },
              s = {};
            return (
              C.each(o, function (e, t) {
                var n = t[2],
                  i = t[5];
                (a[t[1]] = n.add),
                  i &&
                    n.add(
                      function () {
                        r = i;
                      },
                      o[3 - e][2].disable,
                      o[3 - e][3].disable,
                      o[0][2].lock,
                      o[0][3].lock
                    ),
                  n.add(t[3].fire),
                  (s[t[0]] = function () {
                    return (
                      s[t[0] + "With"](this === s ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (s[t[0] + "With"] = n.fireWith);
              }),
              a.promise(s),
              e && e.call(s, s),
              s
            );
          },
          when: function (e) {
            function t(t) {
              return function (e) {
                (r[t] = this),
                  (o[t] = 1 < arguments.length ? s.call(arguments) : e),
                  --n || a.resolveWith(r, o);
              };
            }
            var n = arguments.length,
              i = n,
              r = Array(i),
              o = s.call(arguments),
              a = C.Deferred();
            if (
              n <= 1 &&
              (H(e, a.done(t(i)).resolve, a.reject, !n),
              "pending" === a.state() || g(o[i] && o[i].then))
            )
              return a.then();
            for (; i--; ) H(o[i], t(i), a.reject);
            return a.promise();
          },
        });
      var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (C.Deferred.exceptionHook = function (e, t) {
        T.console &&
          T.console.warn &&
          e &&
          R.test(e.name) &&
          T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (C.readyException = function (e) {
          T.setTimeout(function () {
            throw e;
          });
        });
      var M = C.Deferred();
      function F() {
        k.removeEventListener("DOMContentLoaded", F),
          T.removeEventListener("load", F),
          C.ready();
      }
      (C.fn.ready = function (e) {
        return (
          M.then(e).catch(function (e) {
            C.readyException(e);
          }),
          this
        );
      }),
        C.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --C.readyWait : C.isReady) ||
              ((C.isReady = !0) !== e && 0 < --C.readyWait) ||
              M.resolveWith(k, [C]);
          },
        }),
        (C.ready.then = M.then),
        "complete" === k.readyState ||
        ("loading" !== k.readyState && !k.documentElement.doScroll)
          ? T.setTimeout(C.ready)
          : (k.addEventListener("DOMContentLoaded", F),
            T.addEventListener("load", F));
      function X(e, t, n, i, r, o, a) {
        var s = 0,
          l = e.length,
          c = null == n;
        if ("object" === p(n))
          for (s in ((r = !0), n)) X(e, t, s, n[s], !0, o, a);
        else if (
          void 0 !== i &&
          ((r = !0),
          g(i) || (a = !0),
          (t = c
            ? a
              ? (t.call(e, i), null)
              : ((c = t),
                function (e, t, n) {
                  return c.call(C(e), n);
                })
            : t))
        )
          for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
      }
      var _ = /^-ms-/,
        W = /-([a-z])/g;
      function B(e, t) {
        return t.toUpperCase();
      }
      function Y(e) {
        return e.replace(_, "ms-").replace(W, B);
      }
      function $(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      }
      function U() {
        this.expando = C.expando + U.uid++;
      }
      (U.uid = 1),
        (U.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                $(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var i,
              r = this.cache(e);
            if ("string" == typeof t) r[Y(t)] = n;
            else for (i in t) r[Y(i)] = t[i];
            return r;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][Y(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(Y)
                  : (t = Y(t)) in i
                  ? [t]
                  : t.match(I) || []).length;
                for (; n--; ) delete i[t[n]];
              }
              (void 0 !== t && !C.isEmptyObject(i)) ||
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            e = e[this.expando];
            return void 0 !== e && !C.isEmptyObject(e);
          },
        });
      var V = new U(),
        G = new U(),
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
      function Q(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((i = "data-" + t.replace(J, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(i)))
          ) {
            try {
              n =
                "true" === (r = n) ||
                ("false" !== r &&
                  ("null" === r
                    ? null
                    : r === +r + ""
                    ? +r
                    : K.test(r)
                    ? JSON.parse(r)
                    : r));
            } catch (e) {}
            G.set(e, t, n);
          } else n = void 0;
        return n;
      }
      C.extend({
        hasData: function (e) {
          return G.hasData(e) || V.hasData(e);
        },
        data: function (e, t, n) {
          return G.access(e, t, n);
        },
        removeData: function (e, t) {
          G.remove(e, t);
        },
        _data: function (e, t, n) {
          return V.access(e, t, n);
        },
        _removeData: function (e, t) {
          V.remove(e, t);
        },
      }),
        C.fn.extend({
          data: function (n, e) {
            var t,
              i,
              r,
              o = this[0],
              a = o && o.attributes;
            if (void 0 !== n)
              return "object" == typeof n
                ? this.each(function () {
                    G.set(this, n);
                  })
                : X(
                    this,
                    function (e) {
                      var t;
                      return o && void 0 === e
                        ? void 0 !== (t = G.get(o, n)) ||
                          void 0 !== (t = Q(o, n))
                          ? t
                          : void 0
                        : void this.each(function () {
                            G.set(this, n, e);
                          });
                    },
                    null,
                    e,
                    1 < arguments.length,
                    null,
                    !0
                  );
            if (
              this.length &&
              ((r = G.get(o)), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))
            ) {
              for (t = a.length; t--; )
                a[t] &&
                  0 === (i = a[t].name).indexOf("data-") &&
                  ((i = Y(i.slice(5))), Q(o, i, r[i]));
              V.set(o, "hasDataAttrs", !0);
            }
            return r;
          },
          removeData: function (e) {
            return this.each(function () {
              G.remove(this, e);
            });
          },
        }),
        C.extend({
          queue: function (e, t, n) {
            var i;
            if (e)
              return (
                (i = V.get(e, (t = (t || "fx") + "queue"))),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = V.access(e, t, C.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
              i = n.length,
              r = n.shift(),
              o = C._queueHooks(e, t);
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                r.call(
                  e,
                  function () {
                    C.dequeue(e, t);
                  },
                  o
                )),
              !i && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              V.get(e, n) ||
              V.access(e, n, {
                empty: C.Callbacks("once memory").add(function () {
                  V.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        C.fn.extend({
          queue: function (t, n) {
            var e = 2;
            return (
              "string" != typeof t && ((n = t), (t = "fx"), e--),
              arguments.length < e
                ? C.queue(this[0], t)
                : void 0 === n
                ? this
                : this.each(function () {
                    var e = C.queue(this, t, n);
                    C._queueHooks(this, t),
                      "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              C.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            function n() {
              --r || o.resolveWith(a, [a]);
            }
            var i,
              r = 1,
              o = C.Deferred(),
              a = this,
              s = this.length;
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (i = V.get(a[s], e + "queueHooks")) &&
                i.empty &&
                (r++, i.empty.add(n));
            return n(), o.promise(t);
          },
        });
      var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"),
        te = ["Top", "Right", "Bottom", "Left"],
        ne = k.documentElement,
        ie = function (e) {
          return C.contains(e.ownerDocument, e);
        },
        re = { composed: !0 };
      ne.getRootNode &&
        (ie = function (e) {
          return (
            C.contains(e.ownerDocument, e) ||
            e.getRootNode(re) === e.ownerDocument
          );
        });
      function oe(e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && ie(e) && "none" === C.css(e, "display"))
        );
      }
      function ae(e, t, n, i) {
        var r,
          o,
          a = 20,
          s = i
            ? function () {
                return i.cur();
              }
            : function () {
                return C.css(e, t, "");
              },
          l = s(),
          c = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
          u =
            e.nodeType &&
            (C.cssNumber[t] || ("px" !== c && +l)) &&
            ee.exec(C.css(e, t));
        if (u && u[3] !== c) {
          for (c = c || u[3], u = +(l /= 2) || 1; a--; )
            C.style(e, t, u + c),
              (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
              (u /= o);
          C.style(e, t, (u *= 2) + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = c), (i.start = u), (i.end = r))),
          r
        );
      }
      var se = {};
      function le(e, t) {
        for (var n, i, r, o, a, s = [], l = 0, c = e.length; l < c; l++)
          (i = e[l]).style &&
            ((n = i.style.display),
            t
              ? ("none" === n &&
                  ((s[l] = V.get(i, "display") || null),
                  s[l] || (i.style.display = "")),
                "" === i.style.display &&
                  oe(i) &&
                  (s[l] =
                    ((a = o = void 0),
                    (o = (r = i).ownerDocument),
                    (a = r.nodeName),
                    (r = se[a]) ||
                      ((o = o.body.appendChild(o.createElement(a))),
                      (r = C.css(o, "display")),
                      o.parentNode.removeChild(o),
                      (se[a] = r = "none" === r ? "block" : r)))))
              : "none" !== n && ((s[l] = "none"), V.set(i, "display", n)));
        for (l = 0; l < c; l++) null != s[l] && (e[l].style.display = s[l]);
        return e;
      }
      C.fn.extend({
        show: function () {
          return le(this, !0);
        },
        hide: function () {
          return le(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                oe(this) ? C(this).show() : C(this).hide();
              });
        },
      });
      var ce = /^(?:checkbox|radio)$/i,
        ue = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        de = /^$|^module$|\/(?:java|ecma)script/i;
      (Ut = k.createDocumentFragment().appendChild(k.createElement("div"))),
        (h = k.createElement("input")).setAttribute("type", "radio"),
        h.setAttribute("checked", "checked"),
        h.setAttribute("name", "t"),
        Ut.appendChild(h),
        (b.checkClone = Ut.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (Ut.innerHTML = "<textarea>x</textarea>"),
        (b.noCloneChecked = !!Ut.cloneNode(!0).lastChild.defaultValue),
        (Ut.innerHTML = "<option></option>"),
        (b.option = !!Ut.lastChild);
      var he = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function fe(e, t) {
        var n =
          void 0 !== e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : [];
        return void 0 === t || (t && S(e, t)) ? C.merge([e], n) : n;
      }
      function pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"));
      }
      (he.tbody = he.tfoot = he.colgroup = he.caption = he.thead),
        (he.th = he.td),
        b.option ||
          (he.optgroup = he.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var me = /<|&#?\w+;/;
      function ge(e, t, n, i, r) {
        for (
          var o,
            a,
            s,
            l,
            c,
            u = t.createDocumentFragment(),
            d = [],
            h = 0,
            f = e.length;
          h < f;
          h++
        )
          if ((o = e[h]) || 0 === o)
            if ("object" === p(o)) C.merge(d, o.nodeType ? [o] : o);
            else if (me.test(o)) {
              for (
                a = a || u.appendChild(t.createElement("div")),
                  s = (ue.exec(o) || ["", ""])[1].toLowerCase(),
                  s = he[s] || he._default,
                  a.innerHTML = s[1] + C.htmlPrefilter(o) + s[2],
                  c = s[0];
                c--;

              )
                a = a.lastChild;
              C.merge(d, a.childNodes), ((a = u.firstChild).textContent = "");
            } else d.push(t.createTextNode(o));
        for (u.textContent = "", h = 0; (o = d[h++]); )
          if (i && -1 < C.inArray(o, i)) r && r.push(o);
          else if (
            ((l = ie(o)), (a = fe(u.appendChild(o), "script")), l && pe(a), n)
          )
            for (c = 0; (o = a[c++]); ) de.test(o.type || "") && n.push(o);
        return u;
      }
      var ve = /^([^.]*)(?:\.(.+)|)/;
      function ye() {
        return !0;
      }
      function be() {
        return !1;
      }
      function we(e, t) {
        return (
          (e ===
            (function () {
              try {
                return k.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function xe(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
            xe(e, s, n, i, t[s], o);
          return e;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = be;
        else if (!r) return e;
        return (
          1 === o &&
            ((a = r),
            ((r = function (e) {
              return C().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = C.guid++))),
          e.each(function () {
            C.event.add(this, t, r, i, n);
          })
        );
      }
      function Te(e, r, o) {
        o
          ? (V.set(e, r, !1),
            C.event.add(e, r, {
              namespace: !1,
              handler: function (e) {
                var t,
                  n,
                  i = V.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                  if (i.length)
                    (C.event.special[r] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((i = s.call(arguments)),
                    V.set(this, r, i),
                    (t = o(this, r)),
                    this[r](),
                    i !== (n = V.get(this, r)) || t
                      ? V.set(this, r, !1)
                      : (n = {}),
                    i !== n)
                  )
                    return (
                      e.stopImmediatePropagation(),
                      e.preventDefault(),
                      n && n.value
                    );
                } else
                  i.length &&
                    (V.set(this, r, {
                      value: C.event.trigger(
                        C.extend(i[0], C.Event.prototype),
                        i.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === V.get(e, r) && C.event.add(e, r, ye);
      }
      (C.event = {
        global: {},
        add: function (t, e, n, i, r) {
          var o,
            a,
            s,
            l,
            c,
            u,
            d,
            h,
            f,
            p = V.get(t);
          if ($(t))
            for (
              n.handler && ((n = (o = n).handler), (r = o.selector)),
                r && C.find.matchesSelector(ne, r),
                n.guid || (n.guid = C.guid++),
                (s = p.events) || (s = p.events = Object.create(null)),
                (a = p.handle) ||
                  (a = p.handle =
                    function (e) {
                      return void 0 !== C && C.event.triggered !== e.type
                        ? C.event.dispatch.apply(t, arguments)
                        : void 0;
                    }),
                l = (e = (e || "").match(I) || [""]).length;
              l--;

            )
              (d = f = (c = ve.exec(e[l]) || [])[1]),
                (h = (c[2] || "").split(".").sort()),
                d &&
                  ((u = C.event.special[d] || {}),
                  (d = (r ? u.delegateType : u.bindType) || d),
                  (u = C.event.special[d] || {}),
                  (c = C.extend(
                    {
                      type: d,
                      origType: f,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && C.expr.match.needsContext.test(r),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (f = s[d]) ||
                    (((f = s[d] = []).delegateCount = 0),
                    (u.setup && !1 !== u.setup.call(t, i, h, a)) ||
                      (t.addEventListener && t.addEventListener(d, a))),
                  u.add &&
                    (u.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  r ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                  (C.event.global[d] = !0));
        },
        remove: function (e, t, n, i, r) {
          var o,
            a,
            s,
            l,
            c,
            u,
            d,
            h,
            f,
            p,
            m,
            g = V.hasData(e) && V.get(e);
          if (g && (l = g.events)) {
            for (c = (t = (t || "").match(I) || [""]).length; c--; )
              if (
                ((f = m = (s = ve.exec(t[c]) || [])[1]),
                (p = (s[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  d = C.event.special[f] || {},
                    h = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = o = h.length;
                  o--;

                )
                  (u = h[o]),
                    (!r && m !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (s && !s.test(u.namespace)) ||
                      (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                      (h.splice(o, 1),
                      u.selector && h.delegateCount--,
                      d.remove && d.remove.call(e, u));
                a &&
                  !h.length &&
                  ((d.teardown && !1 !== d.teardown.call(e, p, g.handle)) ||
                    C.removeEvent(e, f, g.handle),
                  delete l[f]);
              } else for (f in l) C.event.remove(e, f + t[c], n, i, !0);
            C.isEmptyObject(l) && V.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            i,
            r,
            o,
            a = new Array(arguments.length),
            s = C.event.fix(e),
            l = (V.get(this, "events") || Object.create(null))[s.type] || [],
            e = C.event.special[s.type] || {};
          for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (
            ((s.delegateTarget = this),
            !e.preDispatch || !1 !== e.preDispatch.call(this, s))
          ) {
            for (
              o = C.event.handlers.call(this, s, l), t = 0;
              (i = o[t++]) && !s.isPropagationStopped();

            )
              for (
                s.currentTarget = i.elem, n = 0;
                (r = i.handlers[n++]) && !s.isImmediatePropagationStopped();

              )
                (s.rnamespace &&
                  !1 !== r.namespace &&
                  !s.rnamespace.test(r.namespace)) ||
                  ((s.handleObj = r),
                  (s.data = r.data),
                  void 0 !==
                    (r = (
                      (C.event.special[r.origType] || {}).handle || r.handler
                    ).apply(i.elem, a)) &&
                    !1 === (s.result = r) &&
                    (s.preventDefault(), s.stopPropagation()));
            return e.postDispatch && e.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            r,
            o,
            a,
            s = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (o = [], a = {}, n = 0; n < l; n++)
                  void 0 === a[(r = (i = t[n]).selector + " ")] &&
                    (a[r] = i.needsContext
                      ? -1 < C(r, this).index(c)
                      : C.find(r, this, null, [c]).length),
                    a[r] && o.push(i);
                o.length && s.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            l < t.length && s.push({ elem: c, handlers: t.slice(l) }),
            s
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(C.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: g(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (e) {
          return e[C.expando] ? e : new C.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              e = this || e;
              return (
                ce.test(e.type) &&
                  e.click &&
                  S(e, "input") &&
                  Te(e, "click", ye),
                !1
              );
            },
            trigger: function (e) {
              e = this || e;
              return (
                ce.test(e.type) && e.click && S(e, "input") && Te(e, "click"),
                !0
              );
            },
            _default: function (e) {
              e = e.target;
              return (
                (ce.test(e.type) &&
                  e.click &&
                  S(e, "input") &&
                  V.get(e, "click")) ||
                S(e, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (C.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (C.Event = function (e, t) {
          if (!(this instanceof C.Event)) return new C.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? ye
                  : be),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && C.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[C.expando] = !0);
        }),
        (C.Event.prototype = {
          constructor: C.Event,
          isDefaultPrevented: be,
          isPropagationStopped: be,
          isImmediatePropagationStopped: be,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = ye),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = ye),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = ye),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        C.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          C.event.addProp
        ),
        C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          C.event.special[e] = {
            setup: function () {
              return Te(this, e, we), !1;
            },
            trigger: function () {
              return Te(this, e), !0;
            },
            _default: function () {
              return !0;
            },
            delegateType: t,
          };
        }),
        C.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, r) {
            C.event.special[e] = {
              delegateType: r,
              bindType: r,
              handle: function (e) {
                var t,
                  n = e.relatedTarget,
                  i = e.handleObj;
                return (
                  (n && (n === this || C.contains(this, n))) ||
                    ((e.type = i.origType),
                    (t = i.handler.apply(this, arguments)),
                    (e.type = r)),
                  t
                );
              },
            };
          }
        ),
        C.fn.extend({
          on: function (e, t, n, i) {
            return xe(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return xe(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                C(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" != typeof e)
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = be),
                this.each(function () {
                  C.event.remove(this, e, n, t);
                })
              );
            for (r in e) this.off(r, t, e[r]);
            return this;
          },
        });
      var ke = /<script|<style|<link/i,
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Se(e, t) {
        return (
          (S(e, "table") &&
            S(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            C(e).children("tbody")[0]) ||
          e
        );
      }
      function De(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Ae(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Ne(e, t) {
        var n, i, r, o;
        if (1 === t.nodeType) {
          if (V.hasData(e) && (o = V.get(e).events))
            for (r in (V.remove(t, "handle events"), o))
              for (n = 0, i = o[r].length; n < i; n++)
                C.event.add(t, r, o[r][n]);
          G.hasData(e) &&
            ((e = G.access(e)), (e = C.extend({}, e)), G.set(t, e));
        }
      }
      function je(n, i, r, o) {
        i = m(i);
        var e,
          t,
          a,
          s,
          l,
          c,
          u = 0,
          d = n.length,
          h = d - 1,
          f = i[0],
          p = g(f);
        if (p || (1 < d && "string" == typeof f && !b.checkClone && Ce.test(f)))
          return n.each(function (e) {
            var t = n.eq(e);
            p && (i[0] = f.call(this, e, t.html())), je(t, i, r, o);
          });
        if (
          d &&
          ((t = (e = ge(i, n[0].ownerDocument, !1, n, o)).firstChild),
          1 === e.childNodes.length && (e = t),
          t || o)
        ) {
          for (s = (a = C.map(fe(e, "script"), De)).length; u < d; u++)
            (l = e),
              u !== h &&
                ((l = C.clone(l, !0, !0)), s && C.merge(a, fe(l, "script"))),
              r.call(n[u], l, u);
          if (s)
            for (
              c = a[a.length - 1].ownerDocument, C.map(a, Ae), u = 0;
              u < s;
              u++
            )
              (l = a[u]),
                de.test(l.type || "") &&
                  !V.access(l, "globalEval") &&
                  C.contains(c, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? C._evalUrl &&
                      !l.noModule &&
                      C._evalUrl(
                        l.src,
                        { nonce: l.nonce || l.getAttribute("nonce") },
                        c
                      )
                    : w(l.textContent.replace(Ee, ""), l, c));
        }
        return n;
      }
      function Le(e, t, n) {
        for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || C.cleanData(fe(i)),
            i.parentNode &&
              (n && ie(i) && pe(fe(i, "script")), i.parentNode.removeChild(i));
        return e;
      }
      C.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var i,
            r,
            o,
            a,
            s,
            l,
            c,
            u = e.cloneNode(!0),
            d = ie(e);
          if (
            !(
              b.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              C.isXMLDoc(e)
            )
          )
            for (a = fe(u), i = 0, r = (o = fe(e)).length; i < r; i++)
              (s = o[i]),
                (l = a[i]),
                (c = void 0),
                "input" === (c = l.nodeName.toLowerCase()) && ce.test(s.type)
                  ? (l.checked = s.checked)
                  : ("input" !== c && "textarea" !== c) ||
                    (l.defaultValue = s.defaultValue);
          if (t)
            if (n)
              for (
                o = o || fe(e), a = a || fe(u), i = 0, r = o.length;
                i < r;
                i++
              )
                Ne(o[i], a[i]);
            else Ne(e, u);
          return (
            0 < (a = fe(u, "script")).length && pe(a, !d && fe(e, "script")), u
          );
        },
        cleanData: function (e) {
          for (
            var t, n, i, r = C.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if ($(n)) {
              if ((t = n[V.expando])) {
                if (t.events)
                  for (i in t.events)
                    r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                n[V.expando] = void 0;
              }
              n[G.expando] && (n[G.expando] = void 0);
            }
        },
      }),
        C.fn.extend({
          detach: function (e) {
            return Le(this, e, !0);
          },
          remove: function (e) {
            return Le(this, e);
          },
          text: function (e) {
            return X(
              this,
              function (e) {
                return void 0 === e
                  ? C.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return je(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Se(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return je(this, arguments, function (e) {
              var t;
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                (t = Se(this, e)).insertBefore(e, t.firstChild);
            });
          },
          before: function () {
            return je(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return je(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (C.cleanData(fe(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return C.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return X(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !ke.test(e) &&
                  !he[(ue.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = C.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (C.cleanData(fe(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var n = [];
            return je(
              this,
              arguments,
              function (e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 &&
                  (C.cleanData(fe(this)), t && t.replaceChild(e, this));
              },
              n
            );
          },
        }),
        C.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, a) {
            C.fn[e] = function (e) {
              for (
                var t, n = [], i = C(e), r = i.length - 1, o = 0;
                o <= r;
                o++
              )
                (t = o === r ? this : this.clone(!0)),
                  C(i[o])[a](t),
                  l.apply(n, t.get());
              return this.pushStack(n);
            };
          }
        );
      function Oe(e) {
        var t = e.ownerDocument.defaultView;
        return (t = !t || !t.opener ? T : t).getComputedStyle(e);
      }
      function qe(e, t, n) {
        var i,
          r = {};
        for (i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((n = n.call(e)), t)) e.style[i] = r[i];
        return n;
      }
      var Ie,
        Pe,
        ze,
        He,
        Re,
        Me,
        Fe,
        Xe,
        _e = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        We = new RegExp(te.join("|"), "i");
      function Be() {
        var e;
        Xe &&
          ((Fe.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (Xe.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ne.appendChild(Fe).appendChild(Xe),
          (e = T.getComputedStyle(Xe)),
          (Ie = "1%" !== e.top),
          (Me = 12 === Ye(e.marginLeft)),
          (Xe.style.right = "60%"),
          (He = 36 === Ye(e.right)),
          (Pe = 36 === Ye(e.width)),
          (Xe.style.position = "absolute"),
          (ze = 12 === Ye(Xe.offsetWidth / 3)),
          ne.removeChild(Fe),
          (Xe = null));
      }
      function Ye(e) {
        return Math.round(parseFloat(e));
      }
      function $e(e, t, n) {
        var i,
          r,
          o = e.style;
        return (
          (n = n || Oe(e)) &&
            ("" !== (r = n.getPropertyValue(t) || n[t]) ||
              ie(e) ||
              (r = C.style(e, t)),
            !b.pixelBoxStyles() &&
              _e.test(r) &&
              We.test(t) &&
              ((i = o.width),
              (e = o.minWidth),
              (t = o.maxWidth),
              (o.minWidth = o.maxWidth = o.width = r),
              (r = n.width),
              (o.width = i),
              (o.minWidth = e),
              (o.maxWidth = t))),
          void 0 !== r ? r + "" : r
        );
      }
      function Ue(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      (Fe = k.createElement("div")),
        (Xe = k.createElement("div")).style &&
          ((Xe.style.backgroundClip = "content-box"),
          (Xe.cloneNode(!0).style.backgroundClip = ""),
          (b.clearCloneStyle = "content-box" === Xe.style.backgroundClip),
          C.extend(b, {
            boxSizingReliable: function () {
              return Be(), Pe;
            },
            pixelBoxStyles: function () {
              return Be(), He;
            },
            pixelPosition: function () {
              return Be(), Ie;
            },
            reliableMarginLeft: function () {
              return Be(), Me;
            },
            scrollboxSize: function () {
              return Be(), ze;
            },
            reliableTrDimensions: function () {
              var e, t, n;
              return (
                null == Re &&
                  ((e = k.createElement("table")),
                  (t = k.createElement("tr")),
                  (n = k.createElement("div")),
                  (e.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (t.style.cssText = "border:1px solid"),
                  (t.style.height = "1px"),
                  (n.style.height = "9px"),
                  (n.style.display = "block"),
                  ne.appendChild(e).appendChild(t).appendChild(n),
                  (n = T.getComputedStyle(t)),
                  (Re =
                    parseInt(n.height, 10) +
                      parseInt(n.borderTopWidth, 10) +
                      parseInt(n.borderBottomWidth, 10) ===
                    t.offsetHeight),
                  ne.removeChild(e)),
                Re
              );
            },
          }));
      var Ve = ["Webkit", "Moz", "ms"],
        Ge = k.createElement("div").style,
        Ke = {};
      function Je(e) {
        var t = C.cssProps[e] || Ke[e];
        return (
          t ||
          (e in Ge
            ? e
            : (Ke[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
                    n--;

                  )
                    if ((e = Ve[n] + t) in Ge) return e;
                })(e) || e))
        );
      }
      var Qe = /^(none|table(?!-c[ea]).+)/,
        Ze = /^--/,
        et = { position: "absolute", visibility: "hidden", display: "block" },
        tt = { letterSpacing: "0", fontWeight: "400" };
      function nt(e, t, n) {
        var i = ee.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function it(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (l += C.css(e, n + te[a], !0, r)),
            i
              ? ("content" === n && (l -= C.css(e, "padding" + te[a], !0, r)),
                "margin" !== n &&
                  (l -= C.css(e, "border" + te[a] + "Width", !0, r)))
              : ((l += C.css(e, "padding" + te[a], !0, r)),
                "padding" !== n
                  ? (l += C.css(e, "border" + te[a] + "Width", !0, r))
                  : (s += C.css(e, "border" + te[a] + "Width", !0, r)));
        return (
          !i &&
            0 <= o &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    l -
                    s -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function rt(e, t, n) {
        var i = Oe(e),
          r =
            (!b.boxSizingReliable() || n) &&
            "border-box" === C.css(e, "boxSizing", !1, i),
          o = r,
          a = $e(e, t, i),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (_e.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!b.boxSizingReliable() && r) ||
            (!b.reliableTrDimensions() && S(e, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === C.css(e, "display", !1, i))) &&
            e.getClientRects().length &&
            ((r = "border-box" === C.css(e, "boxSizing", !1, i)),
            (o = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) +
            it(e, t, n || (r ? "border" : "content"), o, i, a) +
            "px"
        );
      }
      function ot(e, t, n, i, r) {
        return new ot.prototype.init(e, t, n, i, r);
      }
      C.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                e = $e(e, "opacity");
                return "" === e ? "1" : e;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
              o,
              a,
              s = Y(t),
              l = Ze.test(t),
              c = e.style;
            if (
              (l || (t = Je(s)),
              (a = C.cssHooks[t] || C.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (r = a.get(e, !1, i))
                ? r
                : c[t];
            "string" === (o = typeof n) &&
              (r = ee.exec(n)) &&
              r[1] &&
              ((n = ae(e, t, r)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  l ||
                  (n += (r && r[3]) || (C.cssNumber[s] ? "" : "px")),
                b.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, i) {
          var r,
            o = Y(t);
          return (
            Ze.test(t) || (t = Je(o)),
            "normal" ===
              (r =
                void 0 ===
                (r =
                  (o = C.cssHooks[t] || C.cssHooks[o]) && "get" in o
                    ? o.get(e, !0, n)
                    : r)
                  ? $e(e, t, i)
                  : r) &&
              t in tt &&
              (r = tt[t]),
            "" === n || n
              ? ((t = parseFloat(r)), !0 === n || isFinite(t) ? t || 0 : r)
              : r
          );
        },
      }),
        C.each(["height", "width"], function (e, s) {
          C.cssHooks[s] = {
            get: function (e, t, n) {
              if (t)
                return !Qe.test(C.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? rt(e, s, n)
                  : qe(e, et, function () {
                      return rt(e, s, n);
                    });
            },
            set: function (e, t, n) {
              var i,
                r = Oe(e),
                o = !b.scrollboxSize() && "absolute" === r.position,
                a = (o || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                n = n ? it(e, s, n, a, r) : 0;
              return (
                a &&
                  o &&
                  (n -= Math.ceil(
                    e["offset" + s[0].toUpperCase() + s.slice(1)] -
                      parseFloat(r[s]) -
                      it(e, s, "border", !1, r) -
                      0.5
                  )),
                n &&
                  (i = ee.exec(t)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[s] = t), (t = C.css(e, s))),
                nt(0, t, n)
              );
            },
          };
        }),
        (C.cssHooks.marginLeft = Ue(b.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat($e(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  qe(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        C.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
          (C.cssHooks[r + o] = {
            expand: function (e) {
              for (
                var t = 0,
                  n = {},
                  i = "string" == typeof e ? e.split(" ") : [e];
                t < 4;
                t++
              )
                n[r + te[t] + o] = i[t] || i[t - 2] || i[0];
              return n;
            },
          }),
            "margin" !== r && (C.cssHooks[r + o].set = nt);
        }),
        C.fn.extend({
          css: function (e, t) {
            return X(
              this,
              function (e, t, n) {
                var i,
                  r,
                  o = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (i = Oe(e), r = t.length; a < r; a++)
                    o[t[a]] = C.css(e, t[a], !1, i);
                  return o;
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
              },
              e,
              t,
              1 < arguments.length
            );
          },
        }),
        (((C.Tween = ot).prototype = {
          constructor: ot,
          init: function (e, t, n, i, r, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = r || C.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (C.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = ot.propHooks[this.prop];
            return (e && e.get ? e : ot.propHooks._default).get(this);
          },
          run: function (e) {
            var t,
              n = ot.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    C.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              (n && n.set ? n : ot.propHooks._default).set(this),
              this
            );
          },
        }).init.prototype = ot.prototype),
        ((ot.propHooks = {
          _default: {
            get: function (e) {
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (e = C.css(e.elem, e.prop, "")) && "auto" !== e
                ? e
                : 0;
            },
            set: function (e) {
              C.fx.step[e.prop]
                ? C.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!C.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : C.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }).scrollTop = ot.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (C.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (C.fx = ot.prototype.init),
        (C.fx.step = {});
      var at,
        st,
        lt = /^(?:toggle|show|hide)$/,
        ct = /queueHooks$/;
      function ut() {
        st &&
          (!1 === k.hidden && T.requestAnimationFrame
            ? T.requestAnimationFrame(ut)
            : T.setTimeout(ut, C.fx.interval),
          C.fx.tick());
      }
      function dt() {
        return (
          T.setTimeout(function () {
            at = void 0;
          }),
          (at = Date.now())
        );
      }
      function ht(e, t) {
        var n,
          i = 0,
          r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          r["margin" + (n = te[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
      }
      function ft(e, t, n) {
        for (
          var i,
            r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
            o = 0,
            a = r.length;
          o < a;
          o++
        )
          if ((i = r[o].call(n, t, e))) return i;
      }
      function pt(r, e, t) {
        var n,
          o,
          i = 0,
          a = pt.prefilters.length,
          s = C.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (o) return !1;
            for (
              var e = at || dt(),
                e = Math.max(0, c.startTime + c.duration - e),
                t = 1 - (e / c.duration || 0),
                n = 0,
                i = c.tweens.length;
              n < i;
              n++
            )
              c.tweens[n].run(t);
            return (
              s.notifyWith(r, [c, t, e]),
              t < 1 && i
                ? e
                : (i || s.notifyWith(r, [c, 1, 0]), s.resolveWith(r, [c]), !1)
            );
          },
          c = s.promise({
            elem: r,
            props: C.extend({}, e),
            opts: C.extend(
              !0,
              { specialEasing: {}, easing: C.easing._default },
              t
            ),
            originalProperties: e,
            originalOptions: t,
            startTime: at || dt(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
              e = C.Tween(
                r,
                c.opts,
                e,
                t,
                c.opts.specialEasing[e] || c.opts.easing
              );
              return c.tweens.push(e), e;
            },
            stop: function (e) {
              var t = 0,
                n = e ? c.tweens.length : 0;
              if (o) return this;
              for (o = !0; t < n; t++) c.tweens[t].run(1);
              return (
                e
                  ? (s.notifyWith(r, [c, 1, 0]), s.resolveWith(r, [c, e]))
                  : s.rejectWith(r, [c, e]),
                this
              );
            },
          }),
          u = c.props;
        for (
          !(function (e, t) {
            var n, i, r, o, a;
            for (n in e)
              if (
                ((r = t[(i = Y(n))]),
                (o = e[n]),
                Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                n !== i && ((e[i] = o), delete e[n]),
                (a = C.cssHooks[i]) && ("expand" in a))
              )
                for (n in ((o = a.expand(o)), delete e[i], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = r));
              else t[i] = r;
          })(u, c.opts.specialEasing);
          i < a;
          i++
        )
          if ((n = pt.prefilters[i].call(c, r, u, c.opts)))
            return (
              g(n.stop) &&
                (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
              n
            );
        return (
          C.map(u, ft, c),
          g(c.opts.start) && c.opts.start.call(r, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          C.fx.timer(C.extend(l, { elem: r, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (C.Animation = C.extend(pt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ae(n.elem, e, ee.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          for (
            var n, i = 0, r = (e = g(e) ? ((t = e), ["*"]) : e.match(I)).length;
            i < r;
            i++
          )
            (n = e[i]),
              (pt.tweeners[n] = pt.tweeners[n] || []),
              pt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var i,
              r,
              o,
              a,
              s,
              l,
              c,
              u = "width" in t || "height" in t,
              d = this,
              h = {},
              f = e.style,
              p = e.nodeType && oe(e),
              m = V.get(e, "fxshow");
            for (i in (n.queue ||
              (null == (a = C._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || s();
                })),
              a.unqueued++,
              d.always(function () {
                d.always(function () {
                  a.unqueued--, C.queue(e, "fx").length || a.empty.fire();
                });
              })),
            t))
              if (((r = t[i]), lt.test(r))) {
                if (
                  (delete t[i],
                  (o = o || "toggle" === r),
                  r === (p ? "hide" : "show"))
                ) {
                  if ("show" !== r || !m || void 0 === m[i]) continue;
                  p = !0;
                }
                h[i] = (m && m[i]) || C.style(e, i);
              }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
              for (i in (u &&
                1 === e.nodeType &&
                ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                null == (c = m && m.display) && (c = V.get(e, "display")),
                "none" === (u = C.css(e, "display")) &&
                  (c
                    ? (u = c)
                    : (le([e], !0),
                      (c = e.style.display || c),
                      (u = C.css(e, "display")),
                      le([e]))),
                ("inline" === u || ("inline-block" === u && null != c)) &&
                  "none" === C.css(e, "float") &&
                  (l ||
                    (d.done(function () {
                      f.display = c;
                    }),
                    null == c &&
                      ((u = f.display), (c = "none" === u ? "" : u))),
                  (f.display = "inline-block"))),
              n.overflow &&
                ((f.overflow = "hidden"),
                d.always(function () {
                  (f.overflow = n.overflow[0]),
                    (f.overflowX = n.overflow[1]),
                    (f.overflowY = n.overflow[2]);
                })),
              (l = !1),
              h))
                l ||
                  (m
                    ? "hidden" in m && (p = m.hidden)
                    : (m = V.access(e, "fxshow", { display: c })),
                  o && (m.hidden = !p),
                  p && le([e], !0),
                  d.done(function () {
                    for (i in (p || le([e]), V.remove(e, "fxshow"), h))
                      C.style(e, i, h[i]);
                  })),
                  (l = ft(p ? m[i] : 0, i, d)),
                  i in m ||
                    ((m[i] = l.start), p && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
      })),
        (C.speed = function (e, t, n) {
          var i =
            e && "object" == typeof e
              ? C.extend({}, e)
              : {
                  complete: n || (!n && t) || (g(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !g(t) && t),
                };
          return (
            C.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in C.fx.speeds
                  ? (i.duration = C.fx.speeds[i.duration])
                  : (i.duration = C.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              g(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
            }),
            i
          );
        }),
        C.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(oe)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function (t, e, n, i) {
            var r = C.isEmptyObject(t),
              o = C.speed(e, n, i),
              i = function () {
                var e = pt(this, C.extend({}, t), o);
                (r || V.get(this, "finish")) && e.stop(!0);
              };
            return (
              (i.finish = i),
              r || !1 === o.queue ? this.each(i) : this.queue(o.queue, i)
            );
          },
          stop: function (r, e, o) {
            function a(e) {
              var t = e.stop;
              delete e.stop, t(o);
            }
            return (
              "string" != typeof r && ((o = e), (e = r), (r = void 0)),
              e && this.queue(r || "fx", []),
              this.each(function () {
                var e = !0,
                  t = null != r && r + "queueHooks",
                  n = C.timers,
                  i = V.get(this);
                if (t) i[t] && i[t].stop && a(i[t]);
                else for (t in i) i[t] && i[t].stop && ct.test(t) && a(i[t]);
                for (t = n.length; t--; )
                  n[t].elem !== this ||
                    (null != r && n[t].queue !== r) ||
                    (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                (!e && o) || C.dequeue(this, r);
              })
            );
          },
          finish: function (a) {
            return (
              !1 !== a && (a = a || "fx"),
              this.each(function () {
                var e,
                  t = V.get(this),
                  n = t[a + "queue"],
                  i = t[a + "queueHooks"],
                  r = C.timers,
                  o = n ? n.length : 0;
                for (
                  t.finish = !0,
                    C.queue(this, a, []),
                    i && i.stop && i.stop.call(this, !0),
                    e = r.length;
                  e--;

                )
                  r[e].elem === this &&
                    r[e].queue === a &&
                    (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++)
                  n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
              })
            );
          },
        }),
        C.each(["toggle", "show", "hide"], function (e, i) {
          var r = C.fn[i];
          C.fn[i] = function (e, t, n) {
            return null == e || "boolean" == typeof e
              ? r.apply(this, arguments)
              : this.animate(ht(i, !0), e, t, n);
          };
        }),
        C.each(
          {
            slideDown: ht("show"),
            slideUp: ht("hide"),
            slideToggle: ht("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, i) {
            C.fn[e] = function (e, t, n) {
              return this.animate(i, e, t, n);
            };
          }
        ),
        (C.timers = []),
        (C.fx.tick = function () {
          var e,
            t = 0,
            n = C.timers;
          for (at = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || C.fx.stop(), (at = void 0);
        }),
        (C.fx.timer = function (e) {
          C.timers.push(e), C.fx.start();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
          st || ((st = !0), ut());
        }),
        (C.fx.stop = function () {
          st = null;
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (i, e) {
          return (
            (i = (C.fx && C.fx.speeds[i]) || i),
            this.queue((e = e || "fx"), function (e, t) {
              var n = T.setTimeout(e, i);
              t.stop = function () {
                T.clearTimeout(n);
              };
            })
          );
        }),
        (Ut = k.createElement("input")),
        (Z = k.createElement("select").appendChild(k.createElement("option"))),
        (Ut.type = "checkbox"),
        (b.checkOn = "" !== Ut.value),
        (b.optSelected = Z.selected),
        ((Ut = k.createElement("input")).value = "t"),
        (Ut.type = "radio"),
        (b.radioValue = "t" === Ut.value);
      var mt,
        gt = C.expr.attrHandle;
      C.fn.extend({
        attr: function (e, t) {
          return X(this, C.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
          return this.each(function () {
            C.removeAttr(this, e);
          });
        },
      }),
        C.extend({
          attr: function (e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? C.prop(e, t, n)
                : ((1 === o && C.isXMLDoc(e)) ||
                    (r =
                      C.attrHooks[t.toLowerCase()] ||
                      (C.expr.match.bool.test(t) ? mt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void C.removeAttr(e, t)
                      : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : !(r && "get" in r && null !== (i = r.get(e, t))) &&
                      null == (i = C.find.attr(e, t))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!b.radioValue && "radio" === t && S(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              r = t && t.match(I);
            if (r && 1 === e.nodeType)
              for (; (n = r[i++]); ) e.removeAttribute(n);
          },
        }),
        (mt = {
          set: function (e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var a = gt[t] || C.find.attr;
          gt[t] = function (e, t, n) {
            var i,
              r,
              o = t.toLowerCase();
            return (
              n ||
                ((r = gt[o]),
                (gt[o] = i),
                (i = null != a(e, t, n) ? o : null),
                (gt[o] = r)),
              i
            );
          };
        });
      var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
      function bt(e) {
        return (e.match(I) || []).join(" ");
      }
      function wt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function xt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(I)) || [];
      }
      C.fn.extend({
        prop: function (e, t) {
          return X(this, C.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[C.propFix[e] || e];
          });
        },
      }),
        C.extend({
          prop: function (e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && C.isXMLDoc(e)) ||
                  ((t = C.propFix[t] || t), (r = C.propHooks[t])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = C.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        b.optSelected ||
          (C.propHooks.selected = {
            get: function (e) {
              e = e.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (e) {
              e = e.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        C.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            C.propFix[this.toLowerCase()] = this;
          }
        ),
        C.fn.extend({
          addClass: function (t) {
            var e,
              n,
              i,
              r,
              o,
              a,
              s = 0;
            if (g(t))
              return this.each(function (e) {
                C(this).addClass(t.call(this, e, wt(this)));
              });
            if ((e = xt(t)).length)
              for (; (n = this[s++]); )
                if (
                  ((a = wt(n)), (i = 1 === n.nodeType && " " + bt(a) + " "))
                ) {
                  for (o = 0; (r = e[o++]); )
                    i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                  a !== (a = bt(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              n,
              i,
              r,
              o,
              a,
              s = 0;
            if (g(t))
              return this.each(function (e) {
                C(this).removeClass(t.call(this, e, wt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((e = xt(t)).length)
              for (; (n = this[s++]); )
                if (
                  ((a = wt(n)), (i = 1 === n.nodeType && " " + bt(a) + " "))
                ) {
                  for (o = 0; (r = e[o++]); )
                    for (; -1 < i.indexOf(" " + r + " "); )
                      i = i.replace(" " + r + " ", " ");
                  a !== (a = bt(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (r, t) {
            var o = typeof r,
              a = "string" == o || Array.isArray(r);
            return "boolean" == typeof t && a
              ? t
                ? this.addClass(r)
                : this.removeClass(r)
              : g(r)
              ? this.each(function (e) {
                  C(this).toggleClass(r.call(this, e, wt(this), t), t);
                })
              : this.each(function () {
                  var e, t, n, i;
                  if (a)
                    for (t = 0, n = C(this), i = xt(r); (e = i[t++]); )
                      n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                  else
                    (void 0 !== r && "boolean" != o) ||
                      ((e = wt(this)) && V.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          (!e && !1 !== r && V.get(this, "__className__")) || ""
                        ));
                });
          },
          hasClass: function (e) {
            for (var t, n = 0, i = " " + e + " "; (t = this[n++]); )
              if (1 === t.nodeType && -1 < (" " + bt(wt(t)) + " ").indexOf(i))
                return !0;
            return !1;
          },
        });
      var Tt = /\r/g;
      C.fn.extend({
        val: function (t) {
          var n,
            e,
            i,
            r = this[0];
          return arguments.length
            ? ((i = g(t)),
              this.each(function (e) {
                1 === this.nodeType &&
                  (null == (e = i ? t.call(this, e, C(this).val()) : t)
                    ? (e = "")
                    : "number" == typeof e
                    ? (e += "")
                    : Array.isArray(e) &&
                      (e = C.map(e, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((n =
                    C.valHooks[this.type] ||
                    C.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in n &&
                    void 0 !== n.set(this, e, "value")) ||
                    (this.value = e));
              }))
            : r
            ? (n =
                C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) &&
              "get" in n &&
              void 0 !== (e = n.get(r, "value"))
              ? e
              : "string" == typeof (e = r.value)
              ? e.replace(Tt, "")
              : null == e
              ? ""
              : e
            : void 0;
        },
      }),
        C.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = C.find.attr(e, "value");
                return null != t ? t : bt(C.text(e));
              },
            },
            select: {
              get: function (e) {
                for (
                  var t,
                    n = e.options,
                    i = e.selectedIndex,
                    r = "select-one" === e.type,
                    o = r ? null : [],
                    a = r ? i + 1 : n.length,
                    s = i < 0 ? a : r ? i : 0;
                  s < a;
                  s++
                )
                  if (
                    ((t = n[s]).selected || s === i) &&
                    !t.disabled &&
                    (!t.parentNode.disabled || !S(t.parentNode, "optgroup"))
                  ) {
                    if (((t = C(t).val()), r)) return t;
                    o.push(t);
                  }
                return o;
              },
              set: function (e, t) {
                for (
                  var n, i, r = e.options, o = C.makeArray(t), a = r.length;
                  a--;

                )
                  ((i = r[a]).selected =
                    -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        C.each(["radio", "checkbox"], function () {
          (C.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = -1 < C.inArray(C(e).val(), t));
            },
          }),
            b.checkOn ||
              (C.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (b.focusin = "onfocusin" in T);
      function kt(e) {
        e.stopPropagation();
      }
      var Ct = /^(?:focusinfocus|focusoutblur)$/;
      C.extend(C.event, {
        trigger: function (e, t, n, i) {
          var r,
            o,
            a,
            s,
            l,
            c,
            u,
            d = [n || k],
            h = y.call(e, "type") ? e.type : e,
            f = y.call(e, "namespace") ? e.namespace.split(".") : [],
            p = (u = o = n = n || k);
          if (
            3 !== n.nodeType &&
            8 !== n.nodeType &&
            !Ct.test(h + C.event.triggered) &&
            (-1 < h.indexOf(".") &&
              ((h = (f = h.split(".")).shift()), f.sort()),
            (s = h.indexOf(":") < 0 && "on" + h),
            ((e = e[C.expando]
              ? e
              : new C.Event(h, "object" == typeof e && e)).isTrigger = i
              ? 2
              : 3),
            (e.namespace = f.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = null == t ? [e] : C.makeArray(t, [e])),
            (c = C.event.special[h] || {}),
            i || !c.trigger || !1 !== c.trigger.apply(n, t))
          ) {
            if (!i && !c.noBubble && !v(n)) {
              for (
                a = c.delegateType || h, Ct.test(a + h) || (p = p.parentNode);
                p;
                p = p.parentNode
              )
                d.push(p), (o = p);
              o === (n.ownerDocument || k) &&
                d.push(o.defaultView || o.parentWindow || T);
            }
            for (r = 0; (p = d[r++]) && !e.isPropagationStopped(); )
              (u = p),
                (e.type = 1 < r ? a : c.bindType || h),
                (l =
                  (V.get(p, "events") || Object.create(null))[e.type] &&
                  V.get(p, "handle")) && l.apply(p, t),
                (l = s && p[s]) &&
                  l.apply &&
                  $(p) &&
                  ((e.result = l.apply(p, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = h),
              i ||
                e.isDefaultPrevented() ||
                (c._default && !1 !== c._default.apply(d.pop(), t)) ||
                !$(n) ||
                (s &&
                  g(n[h]) &&
                  !v(n) &&
                  ((o = n[s]) && (n[s] = null),
                  (C.event.triggered = h),
                  e.isPropagationStopped() && u.addEventListener(h, kt),
                  n[h](),
                  e.isPropagationStopped() && u.removeEventListener(h, kt),
                  (C.event.triggered = void 0),
                  o && (n[s] = o))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          e = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
          C.event.trigger(e, null, t);
        },
      }),
        C.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              C.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0);
          },
        }),
        b.focusin ||
          C.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
            function r(e) {
              C.event.simulate(i, e.target, C.event.fix(e));
            }
            C.event.special[i] = {
              setup: function () {
                var e = this.ownerDocument || this.document || this,
                  t = V.access(e, i);
                t || e.addEventListener(n, r, !0), V.access(e, i, (t || 0) + 1);
              },
              teardown: function () {
                var e = this.ownerDocument || this.document || this,
                  t = V.access(e, i) - 1;
                t
                  ? V.access(e, i, t)
                  : (e.removeEventListener(n, r, !0), V.remove(e, i));
              },
            };
          });
      var Et = T.location,
        St = { guid: Date.now() },
        Dt = /\?/;
      C.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
          t = new T.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
          (n = t && t.getElementsByTagName("parsererror")[0]),
          (t && !n) ||
            C.error(
              "Invalid XML: " +
                (n
                  ? C.map(n.childNodes, function (e) {
                      return e.textContent;
                    }).join("\n")
                  : e)
            ),
          t
        );
      };
      var At = /\[\]$/,
        Nt = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
      (C.param = function (e, t) {
        function n(e, t) {
          (t = g(t) ? t() : t),
            (r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == t ? "" : t));
        }
        var i,
          r = [];
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
          C.each(e, function () {
            n(this.name, this.value);
          });
        else
          for (i in e)
            !(function n(i, e, r, o) {
              if (Array.isArray(e))
                C.each(e, function (e, t) {
                  r || At.test(i)
                    ? o(i, t)
                    : n(
                        i +
                          "[" +
                          ("object" == typeof t && null != t ? e : "") +
                          "]",
                        t,
                        r,
                        o
                      );
                });
              else if (r || "object" !== p(e)) o(i, e);
              else for (var t in e) n(i + "[" + t + "]", e[t], r, o);
            })(i, e[i], t, n);
        return r.join("&");
      }),
        C.fn.extend({
          serialize: function () {
            return C.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = C.prop(this, "elements");
              return e ? C.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !C(this).is(":disabled") &&
                  Lt.test(this.nodeName) &&
                  !jt.test(e) &&
                  (this.checked || !ce.test(e))
                );
              })
              .map(function (e, t) {
                var n = C(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? C.map(n, function (e) {
                      return { name: t.name, value: e.replace(Nt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Nt, "\r\n") };
              })
              .get();
          },
        });
      var Ot = /%20/g,
        qt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        zt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Rt = {},
        Mt = {},
        Ft = "*/".concat("*"),
        Xt = k.createElement("a");
      function _t(o) {
        return function (e, t) {
          "string" != typeof e && ((t = e), (e = "*"));
          var n,
            i = 0,
            r = e.toLowerCase().match(I) || [];
          if (g(t))
            for (; (n = r[i++]); )
              "+" === n[0]
                ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
                : (o[n] = o[n] || []).push(t);
        };
      }
      function Wt(t, i, r, o) {
        var a = {},
          s = t === Mt;
        function l(e) {
          var n;
          return (
            (a[e] = !0),
            C.each(t[e] || [], function (e, t) {
              t = t(i, r, o);
              return "string" != typeof t || s || a[t]
                ? s
                  ? !(n = t)
                  : void 0
                : (i.dataTypes.unshift(t), l(t), !1);
            }),
            n
          );
        }
        return l(i.dataTypes[0]) || (!a["*"] && l("*"));
      }
      function Bt(e, t) {
        var n,
          i,
          r = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : (i = i || {}))[n] = t[n]);
        return i && C.extend(!0, e, i), e;
      }
      (Xt.href = Et.href),
        C.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                Et.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Ft,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": C.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Bt(Bt(e, C.ajaxSettings), t) : Bt(C.ajaxSettings, e);
          },
          ajaxPrefilter: _t(Rt),
          ajaxTransport: _t(Mt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0));
            var l,
              c,
              u,
              n,
              d,
              h,
              f,
              i,
              r,
              p = C.ajaxSetup({}, (t = t || {})),
              m = p.context || p,
              g = p.context && (m.nodeType || m.jquery) ? C(m) : C.event,
              v = C.Deferred(),
              y = C.Callbacks("once memory"),
              b = p.statusCode || {},
              o = {},
              a = {},
              s = "canceled",
              w = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (h) {
                    if (!n)
                      for (n = {}; (t = Pt.exec(u)); )
                        n[t[1].toLowerCase() + " "] = (
                          n[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = n[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return h ? u : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == h &&
                      ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e),
                      (o[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == h && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  if (e)
                    if (h) w.always(e[w.status]);
                    else for (var t in e) b[t] = [b[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  e = e || s;
                  return l && l.abort(e), x(0, e), this;
                },
              };
            if (
              (v.promise(w),
              (p.url = ((e || p.url || Et.href) + "").replace(
                Ht,
                Et.protocol + "//"
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              r = k.createElement("a");
              try {
                (r.href = p.url),
                  (r.href = r.href),
                  (p.crossDomain =
                    Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = C.param(p.data, p.traditional)),
              Wt(Rt, p, t, w),
              h)
            )
              return w;
            for (i in ((f = C.event && p.global) &&
              0 == C.active++ &&
              C.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !zt.test(p.type)),
            (c = p.url.replace(qt, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(Ot, "+"))
              : ((r = p.url.slice(c.length)),
                p.data &&
                  (p.processData || "string" == typeof p.data) &&
                  ((c += (Dt.test(c) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((c = c.replace(It, "$1")),
                  (r = (Dt.test(c) ? "&" : "?") + "_=" + St.guid++ + r)),
                (p.url = c + r)),
            p.ifModified &&
              (C.lastModified[c] &&
                w.setRequestHeader("If-Modified-Since", C.lastModified[c]),
              C.etag[c] && w.setRequestHeader("If-None-Match", C.etag[c])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              w.setRequestHeader("Content-Type", p.contentType),
            w.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + Ft + "; q=0.01" : "")
                : p.accepts["*"]
            ),
            p.headers))
              w.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (!1 === p.beforeSend.call(m, w, p) || h))
              return w.abort();
            if (
              ((s = "abort"),
              y.add(p.complete),
              w.done(p.success),
              w.fail(p.error),
              (l = Wt(Mt, p, t, w)))
            ) {
              if (((w.readyState = 1), f && g.trigger("ajaxSend", [w, p]), h))
                return w;
              p.async &&
                0 < p.timeout &&
                (d = T.setTimeout(function () {
                  w.abort("timeout");
                }, p.timeout));
              try {
                (h = !1), l.send(o, x);
              } catch (e) {
                if (h) throw e;
                x(-1, e);
              }
            } else x(-1, "No Transport");
            function x(e, t, n, i) {
              var r,
                o,
                a,
                s = t;
              h ||
                ((h = !0),
                d && T.clearTimeout(d),
                (l = void 0),
                (u = i || ""),
                (w.readyState = 0 < e ? 4 : 0),
                (i = (200 <= e && e < 300) || 304 === e),
                n &&
                  (a = (function (e, t, n) {
                    for (
                      var i, r, o, a, s = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                      for (r in s)
                        if (s[r] && s[r].test(i)) {
                          l.unshift(r);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (r in n) {
                        if (!l[0] || e.converters[r + " " + l[0]]) {
                          o = r;
                          break;
                        }
                        a = a || r;
                      }
                      o = o || a;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(p, w, n)),
                !i &&
                  -1 < C.inArray("script", p.dataTypes) &&
                  C.inArray("json", p.dataTypes) < 0 &&
                  (p.converters["text script"] = function () {}),
                (a = (function (e, t, n, i) {
                  var r,
                    o,
                    a,
                    s,
                    l,
                    c = {},
                    u = e.dataTypes.slice();
                  if (u[1])
                    for (a in e.converters)
                      c[a.toLowerCase()] = e.converters[a];
                  for (o = u.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !l &&
                        i &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = o),
                      (o = u.shift()))
                    )
                      if ("*" === o) o = l;
                      else if ("*" !== l && l !== o) {
                        if (!(a = c[l + " " + o] || c["* " + o]))
                          for (r in c)
                            if (
                              (s = r.split(" "))[1] === o &&
                              (a = c[l + " " + s[0]] || c["* " + s[0]])
                            ) {
                              !0 === a
                                ? (a = c[r])
                                : !0 !== c[r] && ((o = s[0]), u.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? e
                                  : "No conversion from " + l + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(p, a, w, i)),
                i
                  ? (p.ifModified &&
                      ((n = w.getResponseHeader("Last-Modified")) &&
                        (C.lastModified[c] = n),
                      (n = w.getResponseHeader("etag")) && (C.etag[c] = n)),
                    204 === e || "HEAD" === p.type
                      ? (s = "nocontent")
                      : 304 === e
                      ? (s = "notmodified")
                      : ((s = a.state), (r = a.data), (i = !(o = a.error))))
                  : ((o = s), (!e && s) || ((s = "error"), e < 0 && (e = 0))),
                (w.status = e),
                (w.statusText = (t || s) + ""),
                i ? v.resolveWith(m, [r, s, w]) : v.rejectWith(m, [w, s, o]),
                w.statusCode(b),
                (b = void 0),
                f &&
                  g.trigger(i ? "ajaxSuccess" : "ajaxError", [w, p, i ? r : o]),
                y.fireWith(m, [w, s]),
                f &&
                  (g.trigger("ajaxComplete", [w, p]),
                  --C.active || C.event.trigger("ajaxStop")));
            }
            return w;
          },
          getJSON: function (e, t, n) {
            return C.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return C.get(e, void 0, t, "script");
          },
        }),
        C.each(["get", "post"], function (e, r) {
          C[r] = function (e, t, n, i) {
            return (
              g(t) && ((i = i || n), (n = t), (t = void 0)),
              C.ajax(
                C.extend(
                  { url: e, type: r, dataType: i, data: t, success: n },
                  C.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        C.ajaxPrefilter(function (e) {
          for (var t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (C._evalUrl = function (e, t, n) {
          return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              C.globalEval(e, t, n);
            },
          });
        }),
        C.fn.extend({
          wrapAll: function (e) {
            return (
              this[0] &&
                (g(e) && (e = e.call(this[0])),
                (e = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (n) {
            return g(n)
              ? this.each(function (e) {
                  C(this).wrapInner(n.call(this, e));
                })
              : this.each(function () {
                  var e = C(this),
                    t = e.contents();
                  t.length ? t.wrapAll(n) : e.append(n);
                });
          },
          wrap: function (t) {
            var n = g(t);
            return this.each(function (e) {
              C(this).wrapAll(n ? t.call(this, e) : t);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  C(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (C.expr.pseudos.hidden = function (e) {
          return !C.expr.pseudos.visible(e);
        }),
        (C.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (C.ajaxSettings.xhr = function () {
          try {
            return new T.XMLHttpRequest();
          } catch (e) {}
        });
      var Yt = { 0: 200, 1223: 204 },
        $t = C.ajaxSettings.xhr();
      (b.cors = !!$t && "withCredentials" in $t),
        (b.ajax = $t = !!$t),
        C.ajaxTransport(function (r) {
          var o, a;
          if (b.cors || ($t && !r.crossDomain))
            return {
              send: function (e, t) {
                var n,
                  i = r.xhr();
                if (
                  (i.open(r.type, r.url, r.async, r.username, r.password),
                  r.xhrFields)
                )
                  for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in (r.mimeType &&
                  i.overrideMimeType &&
                  i.overrideMimeType(r.mimeType),
                r.crossDomain ||
                  e["X-Requested-With"] ||
                  (e["X-Requested-With"] = "XMLHttpRequest"),
                e))
                  i.setRequestHeader(n, e[n]);
                (o = function (e) {
                  return function () {
                    o &&
                      ((o =
                        a =
                        i.onload =
                        i.onerror =
                        i.onabort =
                        i.ontimeout =
                        i.onreadystatechange =
                          null),
                      "abort" === e
                        ? i.abort()
                        : "error" === e
                        ? "number" != typeof i.status
                          ? t(0, "error")
                          : t(i.status, i.statusText)
                        : t(
                            Yt[i.status] || i.status,
                            i.statusText,
                            "text" !== (i.responseType || "text") ||
                              "string" != typeof i.responseText
                              ? { binary: i.response }
                              : { text: i.responseText },
                            i.getAllResponseHeaders()
                          ));
                  };
                }),
                  (i.onload = o()),
                  (a = i.onerror = i.ontimeout = o("error")),
                  void 0 !== i.onabort
                    ? (i.onabort = a)
                    : (i.onreadystatechange = function () {
                        4 === i.readyState &&
                          T.setTimeout(function () {
                            o && a();
                          });
                      }),
                  (o = o("abort"));
                try {
                  i.send((r.hasContent && r.data) || null);
                } catch (e) {
                  if (o) throw e;
                }
              },
              abort: function () {
                o && o();
              },
            };
        }),
        C.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        C.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return C.globalEval(e), e;
            },
          },
        }),
        C.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        C.ajaxTransport("script", function (n) {
          var i, r;
          if (n.crossDomain || n.scriptAttrs)
            return {
              send: function (e, t) {
                (i = C("<script>")
                  .attr(n.scriptAttrs || {})
                  .prop({ charset: n.scriptCharset, src: n.url })
                  .on(
                    "load error",
                    (r = function (e) {
                      i.remove(),
                        (r = null),
                        e && t("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  k.head.appendChild(i[0]);
              },
              abort: function () {
                r && r();
              },
            };
        });
      var Ut,
        Vt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
      C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Vt.pop() || C.expando + "_" + St.guid++;
          return (this[e] = !0), e;
        },
      }),
        C.ajaxPrefilter("json jsonp", function (e, t, n) {
          var i,
            r,
            o,
            a =
              !1 !== e.jsonp &&
              (Gt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Gt.test(e.data) &&
                  "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (i = e.jsonpCallback =
                g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(Gt, "$1" + i))
                : !1 !== e.jsonp &&
                  (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return o || C.error(i + " was not called"), o[0];
              }),
              (e.dataTypes[0] = "json"),
              (r = T[i]),
              (T[i] = function () {
                o = arguments;
              }),
              n.always(function () {
                void 0 === r ? C(T).removeProp(i) : (T[i] = r),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(i)),
                  o && g(r) && r(o[0]),
                  (o = r = void 0);
              }),
              "script"
            );
        }),
        (b.createHTMLDocument =
          (((Ut = k.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Ut.childNodes.length)),
        (C.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (b.createHTMLDocument
                  ? (((i = (t =
                      k.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = k.location.href),
                    t.head.appendChild(i))
                  : (t = k)),
              (i = !n && []),
              (n = D.exec(e))
                ? [t.createElement(n[1])]
                : ((n = ge([e], t, i)),
                  i && i.length && C(i).remove(),
                  C.merge([], n.childNodes)));
          var i;
        }),
        (C.fn.load = function (e, t, n) {
          var i,
            r,
            o,
            a = this,
            s = e.indexOf(" ");
          return (
            -1 < s && ((i = bt(e.slice(s))), (e = e.slice(0, s))),
            g(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (r = "POST"),
            0 < a.length &&
              C.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    a.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (C.expr.pseudos.animated = function (t) {
          return C.grep(C.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (C.offset = {
          setOffset: function (e, t, n) {
            var i,
              r,
              o,
              a,
              s = C.css(e, "position"),
              l = C(e),
              c = {};
            "static" === s && (e.style.position = "relative"),
              (o = l.offset()),
              (i = C.css(e, "top")),
              (a = C.css(e, "left")),
              (a =
                ("absolute" === s || "fixed" === s) &&
                -1 < (i + a).indexOf("auto")
                  ? ((r = (s = l.position()).top), s.left)
                  : ((r = parseFloat(i) || 0), parseFloat(a) || 0)),
              null != (t = g(t) ? t.call(e, n, C.extend({}, o)) : t).top &&
                (c.top = t.top - o.top + r),
              null != t.left && (c.left = t.left - o.left + a),
              "using" in t ? t.using.call(e, c) : l.css(c);
          },
        }),
        C.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    C.offset.setOffset(this, t, e);
                  });
            var e,
              n = this[0];
            return n
              ? n.getClientRects().length
                ? ((e = n.getBoundingClientRect()),
                  (n = n.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ("fixed" === C.css(i, "position"))
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === C.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  (((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0)),
                  (r.left += C.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - r.top - C.css(i, "marginTop", !0),
                left: t.left - r.left - C.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === C.css(e, "position");

              )
                e = e.offsetParent;
              return e || ne;
            });
          },
        }),
        C.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, r) {
            var o = "pageYOffset" === r;
            C.fn[t] = function (e) {
              return X(
                this,
                function (e, t, n) {
                  var i;
                  return (
                    v(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                    void 0 === n
                      ? i
                        ? i[r]
                        : e[t]
                      : void (i
                          ? i.scrollTo(
                              o ? i.pageXOffset : n,
                              o ? n : i.pageYOffset
                            )
                          : (e[t] = n))
                  );
                },
                t,
                e,
                arguments.length
              );
            };
          }
        ),
        C.each(["top", "left"], function (e, n) {
          C.cssHooks[n] = Ue(b.pixelPosition, function (e, t) {
            if (t)
              return (t = $e(e, n)), _e.test(t) ? C(e).position()[n] + "px" : t;
          });
        }),
        C.each({ Height: "height", Width: "width" }, function (a, s) {
          C.each(
            { padding: "inner" + a, content: s, "": "outer" + a },
            function (i, o) {
              C.fn[o] = function (e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                  r = i || (!0 === e || !0 === t ? "margin" : "border");
                return X(
                  this,
                  function (e, t, n) {
                    var i;
                    return v(e)
                      ? 0 === o.indexOf("outer")
                        ? e["inner" + a]
                        : e.document.documentElement["client" + a]
                      : 9 === e.nodeType
                      ? ((i = e.documentElement),
                        Math.max(
                          e.body["scroll" + a],
                          i["scroll" + a],
                          e.body["offset" + a],
                          i["offset" + a],
                          i["client" + a]
                        ))
                      : void 0 === n
                      ? C.css(e, t, r)
                      : C.style(e, t, n, r);
                  },
                  s,
                  n ? e : void 0,
                  n
                );
              };
            }
          );
        }),
        C.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            C.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        C.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        C.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, n) {
            C.fn[n] = function (e, t) {
              return 0 < arguments.length
                ? this.on(n, null, e, t)
                : this.trigger(n);
            };
          }
        );
      var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (C.proxy = function (e, t) {
        var n, i;
        if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), g(e)))
          return (
            (n = s.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, n.concat(s.call(arguments)));
            }).guid = e.guid =
              e.guid || C.guid++),
            i
          );
      }),
        (C.holdReady = function (e) {
          e ? C.readyWait++ : C.ready(!0);
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = S),
        (C.isFunction = g),
        (C.isWindow = v),
        (C.camelCase = Y),
        (C.type = p),
        (C.now = Date.now),
        (C.isNumeric = function (e) {
          var t = C.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (C.trim = function (e) {
          return null == e ? "" : (e + "").replace(Kt, "");
        });
      var Jt = T.jQuery,
        Qt = T.$;
      return (
        (C.noConflict = function (e) {
          return (
            T.$ === C && (T.$ = Qt), e && T.jQuery === C && (T.jQuery = Jt), C
          );
        }),
        void 0 === e && (T.jQuery = T.$ = C),
        C
      );
    });
  var ze,
    He,
    Re = (Le.exports = e.document
      ? Pe(e, !0)
      : function (e) {
          if (!e.document)
            throw new Error("jQuery requires a window with a document");
          return Pe(e);
        });
  function Me(e, t) {
    if (e) {
      "string" == typeof e
        ? (e = document.querySelectorAll(e))
        : e.tagName && (e = [e]);
      for (var n = 0; n < e.length; n++)
        (" " + e[n].className + " ").indexOf(" " + t + " ") < 0 &&
          (e[n].className += " " + t);
    }
  }
  function Fe(e, t) {
    if (e) {
      "string" == typeof e
        ? (e = document.querySelectorAll(e))
        : e.tagName && (e = [e]);
      for (
        var n = new RegExp("(^| )" + t + "($| )", "g"), i = 0;
        i < e.length;
        i++
      )
        e[i].className = e[i].className.replace(n, " ");
    }
  }
  function Xe(n, i) {
    var r;
    return function () {
      var e = i || this,
        t = arguments;
      r =
        r ||
        setTimeout(function () {
          n.apply(e, t), (r = null);
        }, 80);
    };
  }
  Re &&
    Re.fn &&
    Ie &&
    ((ze = Re.fn.viewer),
    (He = "viewer"),
    (Re.fn.viewer = function (a) {
      for (
        var s, e = arguments.length, l = new Array(1 < e ? e - 1 : 0), t = 1;
        t < e;
        t++
      )
        l[t - 1] = arguments[t];
      return (
        this.each(function (e, t) {
          var n = Re(t),
            i = "destroy" === a;
          if (!(o = n.data(He))) {
            if (i) return;
            var r = Re.extend({}, n.data(), Re.isPlainObject(a) && a),
              o = new Ie(t, r);
            n.data(He, o);
          }
          "string" == typeof a &&
            ((r = o[a]),
            Re.isFunction(r) &&
              ((s = r.apply(o, l)) === o && (s = void 0),
              i && n.removeData(He)));
        }),
        void 0 !== s ? s : this
      );
    }),
    (Re.fn.viewer.Constructor = Ie),
    (Re.fn.viewer.setDefaults = Ie.setDefaults),
    (Re.fn.viewer.noConflict = function () {
      return (Re.fn.viewer = ze), this;
    })),
    (function () {
      document.querySelectorAll(".cases .item").forEach(function (t) {
        t.addEventListener(
          "mouseover",
          function (e) {
            e.preventDefault(),
              Fe(document.getElementsByClassName("img__active"), "img__active"),
              Fe(document.getElementsByClassName("sub__active"), "sub__active"),
              Me(t.children[0], "img__active"),
              Me(
                document.getElementById("sub-" + t.dataset.icon),
                "sub__active"
              );
          },
          !1
        );
      }),
        document.querySelectorAll("pre code").forEach(function (e) {
          hljs.highlightBlock(e);
        }),
        document.querySelector(".post-toc-html") &&
          document.querySelector(".post-inner-html") &&
          tocbot.init({
            tocSelector: ".post-toc-html",
            contentSelector: ".post-inner-html",
            headingSelector: "h1, h2, h3",
          });
      var t =
          document.body.scrollHeight || document.documentElement.scrollHeight,
        n = window.innerHeight || document.documentElement.clientHeight;
      window.addEventListener(
        "scroll",
        Xe(function () {
          var e = document.body.scrollTop || document.documentElement.scrollTop;
          NProgress.set(e / (t - n));
        })
      ),
        NProgress.configure({ showSpinner: !1, minimum: 0 }),
        Re("#backtop").click(function () {
          Re("html, body").animate({ scrollTop: 0 }, 800);
        }),
        Re(".share > .share-item").hover(
          function () {
            Me(
              Re(this).children(".n-icon"),
              Re(this).children(".n-icon")[0].classList[1] + "-select"
            );
          },
          function () {
            Fe(
              Re(this).children(".n-icon"),
              Re(this).children(".n-icon")[0].classList[2]
            );
          }
        ),
        Re(".footer-info > .social").hover(
          function () {
            Me(
              Re(this).children(".n-icon"),
              Re(this).children(".n-icon")[0].classList[1] + "-select"
            );
          },
          function () {
            Fe(
              Re(this).children(".n-icon"),
              Re(this).children(".n-icon")[0].classList[2]
            );
          }
        ),
        Re("#mobile-menu-open").click(function () {
          Re(".header-menu-mobile-menu").fadeIn(300),
            Me(Re("body"), "mobile-menu-fixed");
        }),
        Re("#mobile-menu-close").click(function () {
          Re(".header-menu-mobile-menu").fadeOut(300),
            Fe(Re("body"), "mobile-menu-fixed");
        }),
        window.addEventListener(
          "scroll",
          Xe(function () {
            100 <
            (document.documentElement.scrollTop || document.body.scrollTop)
              ? (Me(".sidebar", "sidebar-fixed"),
                Me(".about", "about-fixed"),
                Re("#backtop").fadeIn(300))
              : (Fe(".sidebar", "sidebar-fixed"),
                Re("#backtop").fadeOut(300),
                Fe(".about", "about-fixed"));
          })
        );
      var i,
        e = document.querySelector("#widget");
      e && new PerfectScrollbar(e),
        window.aomori_logo_typed_animated &&
          new Typed("#typed", {
            stringsElement: "#typed-strings",
            fadeOut: !0,
            fadeOutDelay: 800,
            typeSpeed: 100,
            showCursor: !1,
          }),
        window.aomori_search_algolia &&
          ((r = document.querySelector("#search-ps")) &&
            new PerfectScrollbar(r),
          (o = document.querySelector(
            'meta[property="algolia:search"]'
          ).dataset),
          (i = algoliasearch(o.applicationId, o.apiKey).initIndex(o.indexName)),
          Re("#search").on(
            "keyup",
            Xe(function (e) {
              i.search(Re("#search").val()).then(function (e) {
                var t,
                  e = e.hits;
                Re(".search-result").slideDown(),
                  e.length
                    ? ((t = ""),
                      e.forEach(function (e) {
                        t += '<a class="search-result-item" href="'
                          .concat(e.permalink, '"><h1>')
                          .concat(e.title, "</h1><p>")
                          .concat(
                            dayjs(e.date).format("YYYY-MM-DD"),
                            "</p></a>"
                          );
                      }),
                      Re(".search-result").html(t))
                    : Re(".search-result").html("Nothing at all.");
              });
            })
          ),
          Re("#search").on("focusin", function () {
            Me(Re(".search"), "search-focus");
          }),
          Re("#search").on("focusout", function () {
            Fe(Re(".search"), "search-focus"), Re(".search-result").slideUp();
          }));
      var r = new Swiper(".swiper-container", {
        autoplay: { delay: 1e4 },
        autoHeight: !0,
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "article-gallery-active",
        },
      });
      r.slides && r.slides.length <= 1 && r.destroy();
      var o = {
          title: !1,
          toolbar: { zoomIn: !0, zoomOut: !0, reset: !0, prev: !0, next: !0 },
          keyboard: !1,
        },
        r = Re(".article-gallery");
      r && 0 < r.length && r.viewer(o);
      r = Re(".article-entry");
      r && 0 < r.length && r.viewer(o);
      r = Re(".photography-item");
      r &&
        0 < r.length &&
        ((o = Object.assign(o, {
          url: function (e) {
            return e.dataset.original;
          },
          toolbar: { zoomIn: !0, zoomOut: !0, reset: !0, prev: !1, next: !1 },
          navbar: !1,
        })),
        r.viewer(o)),
        window.isPost &&
          Array.from(Re("article video")).map(function (e) {
            return new Plyr(e);
          }),
        Array.from(Re("article .article-video-plyr")).map(function (e) {
          return new Plyr(e);
        }),
        new LazyLoad(),
        window.aomori.disqusjs &&
          window.aomori.disqusjs.enable &&
          new DisqusJS({
            shortname: window.aomori.disqusjs.shortname,
            siteName: window.aomori.disqusjs.siteName,
            api: window.aomori.disqusjs.api,
            apikey: window.aomori.disqusjs.apikey,
            nesting: window.aomori.disqusjs.nesting,
            nocomment: window.aomori.disqusjs.nocomment,
            admin: window.aomori.disqusjs.admin,
            adminLabel: window.aomori.disqusjs.adminLabel,
          });
    })(),
    window.aomori &&
      window.aomori.gitalk &&
      ((window.aomori.gitalk.id = md5(window.location.href)),
      new Gitalk(window.aomori.gitalk).render("gitalk-container")),
    window.aomori.valine &&
      window.aomori.valine.enable &&
      new Valine({
        el: "#valine-container",
        appId: window.aomori.valine.appId,
        appKey: window.aomori.valine.appKey,
      });
});

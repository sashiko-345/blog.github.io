/*! algoliasearch-lite.umd.js | 4.10.3 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).algoliasearch = t());
})(this, function () {
  "use strict";
  function e(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function t(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function r(r) {
    for (var n = 1; n < arguments.length; n++) {
      var o = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? t(Object(o), !0).forEach(function (t) {
            e(r, t, o[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : t(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return r;
  }
  function n(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = (function (e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++)
        (r = a[n]),
          t.indexOf(r) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
  }
  function o(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if (
          !(
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
        )
          return;
        var r = [],
          n = !0,
          o = !1,
          a = void 0;
        try {
          for (
            var u, i = e[Symbol.iterator]();
            !(n = (u = i.next()).done) &&
            (r.push(u.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          (o = !0), (a = e);
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (o) throw a;
          }
        }
        return r;
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      })()
    );
  }
  function a(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = new Array(e.length); t < e.length; t++)
            r[t] = e[t];
          return r;
        }
      })(e) ||
      (function (e) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      })(e) ||
      (function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      })()
    );
  }
  function u(e) {
    var t,
      r = "algoliasearch-client-js-".concat(e.key),
      n = function () {
        return void 0 === t && (t = e.localStorage || window.localStorage), t;
      },
      a = function () {
        return JSON.parse(n().getItem(r) || "{}");
      };
    return {
      get: function (e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {
                miss: function () {
                  return Promise.resolve();
                },
              };
        return Promise.resolve()
          .then(function () {
            var r = JSON.stringify(e),
              n = a()[r];
            return Promise.all([n || t(), void 0 !== n]);
          })
          .then(function (e) {
            var t = o(e, 2),
              n = t[0],
              a = t[1];
            return Promise.all([n, a || r.miss(n)]);
          })
          .then(function (e) {
            return o(e, 1)[0];
          });
      },
      set: function (e, t) {
        return Promise.resolve().then(function () {
          var o = a();
          return (
            (o[JSON.stringify(e)] = t), n().setItem(r, JSON.stringify(o)), t
          );
        });
      },
      delete: function (e) {
        return Promise.resolve().then(function () {
          var t = a();
          delete t[JSON.stringify(e)], n().setItem(r, JSON.stringify(t));
        });
      },
      clear: function () {
        return Promise.resolve().then(function () {
          n().removeItem(r);
        });
      },
    };
  }
  function i(e) {
    var t = a(e.caches),
      r = t.shift();
    return void 0 === r
      ? {
          get: function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {
                      miss: function () {
                        return Promise.resolve();
                      },
                    },
              n = t();
            return n
              .then(function (e) {
                return Promise.all([e, r.miss(e)]);
              })
              .then(function (e) {
                return o(e, 1)[0];
              });
          },
          set: function (e, t) {
            return Promise.resolve(t);
          },
          delete: function (e) {
            return Promise.resolve();
          },
          clear: function () {
            return Promise.resolve();
          },
        }
      : {
          get: function (e, n) {
            var o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                    miss: function () {
                      return Promise.resolve();
                    },
                  };
            return r.get(e, n, o).catch(function () {
              return i({ caches: t }).get(e, n, o);
            });
          },
          set: function (e, n) {
            return r.set(e, n).catch(function () {
              return i({ caches: t }).set(e, n);
            });
          },
          delete: function (e) {
            return r.delete(e).catch(function () {
              return i({ caches: t }).delete(e);
            });
          },
          clear: function () {
            return r.clear().catch(function () {
              return i({ caches: t }).clear();
            });
          },
        };
  }
  function s() {
    var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : { serializable: !0 },
      t = {};
    return {
      get: function (r, n) {
        var o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve();
                  },
                },
          a = JSON.stringify(r);
        if (a in t)
          return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
        var u = n(),
          i =
            (o && o.miss) ||
            function () {
              return Promise.resolve();
            };
        return u
          .then(function (e) {
            return i(e);
          })
          .then(function () {
            return u;
          });
      },
      set: function (r, n) {
        return (
          (t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n),
          Promise.resolve(n)
        );
      },
      delete: function (e) {
        return delete t[JSON.stringify(e)], Promise.resolve();
      },
      clear: function () {
        return (t = {}), Promise.resolve();
      },
    };
  }
  function c(e) {
    for (var t = e.length - 1; t > 0; t--) {
      var r = Math.floor(Math.random() * (t + 1)),
        n = e[t];
      (e[t] = e[r]), (e[r] = n);
    }
    return e;
  }
  function l(e, t) {
    return t
      ? (Object.keys(t).forEach(function (r) {
          e[r] = t[r](e);
        }),
        e)
      : e;
  }
  function f(e) {
    for (
      var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      r[n - 1] = arguments[n];
    var o = 0;
    return e.replace(/%s/g, function () {
      return encodeURIComponent(r[o++]);
    });
  }
  var h = { WithinQueryParameters: 0, WithinHeaders: 1 };
  function d(e, t) {
    var r = e || {},
      n = r.data || {};
    return (
      Object.keys(r).forEach(function (e) {
        -1 ===
          [
            "timeout",
            "headers",
            "queryParameters",
            "data",
            "cacheable",
          ].indexOf(e) && (n[e] = r[e]);
      }),
      {
        data: Object.entries(n).length > 0 ? n : void 0,
        timeout: r.timeout || t,
        headers: r.headers || {},
        queryParameters: r.queryParameters || {},
        cacheable: r.cacheable,
      }
    );
  }
  var m = { Read: 1, Write: 2, Any: 3 },
    p = 1,
    v = 2,
    y = 3;
  function g(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
    return r(r({}, e), {}, { status: t, lastUpdate: Date.now() });
  }
  function b(e) {
    return "string" == typeof e
      ? { protocol: "https", url: e, accept: m.Any }
      : {
          protocol: e.protocol || "https",
          url: e.url,
          accept: e.accept || m.Any,
        };
  }
  var O = "GET",
    P = "POST";
  function q(e, t) {
    return Promise.all(
      t.map(function (t) {
        return e.get(t, function () {
          return Promise.resolve(g(t));
        });
      })
    ).then(function (e) {
      var r = e.filter(function (e) {
          return (function (e) {
            return e.status === p || Date.now() - e.lastUpdate > 12e4;
          })(e);
        }),
        n = e.filter(function (e) {
          return (function (e) {
            return e.status === y && Date.now() - e.lastUpdate <= 12e4;
          })(e);
        }),
        o = [].concat(a(r), a(n));
      return {
        getTimeout: function (e, t) {
          return (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t;
        },
        statelessHosts:
          o.length > 0
            ? o.map(function (e) {
                return b(e);
              })
            : t,
      };
    });
  }
  function j(e, t, n, o) {
    var u = [],
      i = (function (e, t) {
        if (e.method === O || (void 0 === e.data && void 0 === t.data)) return;
        var n = Array.isArray(e.data) ? e.data : r(r({}, e.data), t.data);
        return JSON.stringify(n);
      })(n, o),
      s = (function (e, t) {
        var n = r(r({}, e.headers), t.headers),
          o = {};
        return (
          Object.keys(n).forEach(function (e) {
            var t = n[e];
            o[e.toLowerCase()] = t;
          }),
          o
        );
      })(e, o),
      c = n.method,
      l = n.method !== O ? {} : r(r({}, n.data), o.data),
      f = r(
        r(r({ "x-algolia-agent": e.userAgent.value }, e.queryParameters), l),
        o.queryParameters
      ),
      h = 0,
      d = function t(r, a) {
        var l = r.pop();
        if (void 0 === l)
          throw {
            name: "RetryError",
            message:
              "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
            transporterStackTrace: A(u),
          };
        var d = {
            data: i,
            headers: s,
            method: c,
            url: S(l, n.path, f),
            connectTimeout: a(h, e.timeouts.connect),
            responseTimeout: a(h, o.timeout),
          },
          m = function (e) {
            var t = { request: d, response: e, host: l, triesLeft: r.length };
            return u.push(t), t;
          },
          p = {
            onSuccess: function (e) {
              return (function (e) {
                try {
                  return JSON.parse(e.content);
                } catch (t) {
                  throw (function (e, t) {
                    return {
                      name: "DeserializationError",
                      message: e,
                      response: t,
                    };
                  })(t.message, e);
                }
              })(e);
            },
            onRetry: function (n) {
              var o = m(n);
              return (
                n.isTimedOut && h++,
                Promise.all([
                  e.logger.info("Retryable failure", x(o)),
                  e.hostsCache.set(l, g(l, n.isTimedOut ? y : v)),
                ]).then(function () {
                  return t(r, a);
                })
              );
            },
            onFail: function (e) {
              throw (
                (m(e),
                (function (e, t) {
                  var r = e.content,
                    n = e.status,
                    o = r;
                  try {
                    o = JSON.parse(r).message;
                  } catch (e) {}
                  return (function (e, t, r) {
                    return {
                      name: "ApiError",
                      message: e,
                      status: t,
                      transporterStackTrace: r,
                    };
                  })(o, n, t);
                })(e, A(u)))
              );
            },
          };
        return e.requester.send(d).then(function (e) {
          return (function (e, t) {
            return (function (e) {
              var t = e.status;
              return (
                e.isTimedOut ||
                (function (e) {
                  var t = e.isTimedOut,
                    r = e.status;
                  return !t && 0 == ~~r;
                })(e) ||
                (2 != ~~(t / 100) && 4 != ~~(t / 100))
              );
            })(e)
              ? t.onRetry(e)
              : 2 == ~~(e.status / 100)
              ? t.onSuccess(e)
              : t.onFail(e);
          })(e, p);
        });
      };
    return q(e.hostsCache, t).then(function (e) {
      return d(a(e.statelessHosts).reverse(), e.getTimeout);
    });
  }
  function w(e) {
    var t = {
      value: "Algolia for JavaScript (".concat(e, ")"),
      add: function (e) {
        var r = "; "
          .concat(e.segment)
          .concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
        return (
          -1 === t.value.indexOf(r) && (t.value = "".concat(t.value).concat(r)),
          t
        );
      },
    };
    return t;
  }
  function S(e, t, r) {
    var n = T(r),
      o = ""
        .concat(e.protocol, "://")
        .concat(e.url, "/")
        .concat("/" === t.charAt(0) ? t.substr(1) : t);
    return n.length && (o += "?".concat(n)), o;
  }
  function T(e) {
    return Object.keys(e)
      .map(function (t) {
        return f(
          "%s=%s",
          t,
          ((r = e[t]),
          "[object Object]" === Object.prototype.toString.call(r) ||
          "[object Array]" === Object.prototype.toString.call(r)
            ? JSON.stringify(e[t])
            : e[t])
        );
        var r;
      })
      .join("&");
  }
  function A(e) {
    return e.map(function (e) {
      return x(e);
    });
  }
  function x(e) {
    var t = e.request.headers["x-algolia-api-key"]
      ? { "x-algolia-api-key": "*****" }
      : {};
    return r(
      r({}, e),
      {},
      {
        request: r(
          r({}, e.request),
          {},
          { headers: r(r({}, e.request.headers), t) }
        ),
      }
    );
  }
  var N = function (e) {
      var t = e.appId,
        n = (function (e, t, r) {
          var n = { "x-algolia-api-key": r, "x-algolia-application-id": t };
          return {
            headers: function () {
              return e === h.WithinHeaders ? n : {};
            },
            queryParameters: function () {
              return e === h.WithinQueryParameters ? n : {};
            },
          };
        })(void 0 !== e.authMode ? e.authMode : h.WithinHeaders, t, e.apiKey),
        a = (function (e) {
          var t = e.hostsCache,
            r = e.logger,
            n = e.requester,
            a = e.requestsCache,
            u = e.responsesCache,
            i = e.timeouts,
            s = e.userAgent,
            c = e.hosts,
            l = e.queryParameters,
            f = {
              hostsCache: t,
              logger: r,
              requester: n,
              requestsCache: a,
              responsesCache: u,
              timeouts: i,
              userAgent: s,
              headers: e.headers,
              queryParameters: l,
              hosts: c.map(function (e) {
                return b(e);
              }),
              read: function (e, t) {
                var r = d(t, f.timeouts.read),
                  n = function () {
                    return j(
                      f,
                      f.hosts.filter(function (e) {
                        return 0 != (e.accept & m.Read);
                      }),
                      e,
                      r
                    );
                  };
                if (!0 !== (void 0 !== r.cacheable ? r.cacheable : e.cacheable))
                  return n();
                var a = {
                  request: e,
                  mappedRequestOptions: r,
                  transporter: {
                    queryParameters: f.queryParameters,
                    headers: f.headers,
                  },
                };
                return f.responsesCache.get(
                  a,
                  function () {
                    return f.requestsCache.get(a, function () {
                      return f.requestsCache
                        .set(a, n())
                        .then(
                          function (e) {
                            return Promise.all([f.requestsCache.delete(a), e]);
                          },
                          function (e) {
                            return Promise.all([
                              f.requestsCache.delete(a),
                              Promise.reject(e),
                            ]);
                          }
                        )
                        .then(function (e) {
                          var t = o(e, 2);
                          t[0];
                          return t[1];
                        });
                    });
                  },
                  {
                    miss: function (e) {
                      return f.responsesCache.set(a, e);
                    },
                  }
                );
              },
              write: function (e, t) {
                return j(
                  f,
                  f.hosts.filter(function (e) {
                    return 0 != (e.accept & m.Write);
                  }),
                  e,
                  d(t, f.timeouts.write)
                );
              },
            };
          return f;
        })(
          r(
            r(
              {
                hosts: [
                  { url: "".concat(t, "-dsn.algolia.net"), accept: m.Read },
                  { url: "".concat(t, ".algolia.net"), accept: m.Write },
                ].concat(
                  c([
                    { url: "".concat(t, "-1.algolianet.com") },
                    { url: "".concat(t, "-2.algolianet.com") },
                    { url: "".concat(t, "-3.algolianet.com") },
                  ])
                ),
              },
              e
            ),
            {},
            {
              headers: r(
                r(r({}, n.headers()), {
                  "content-type": "application/x-www-form-urlencoded",
                }),
                e.headers
              ),
              queryParameters: r(r({}, n.queryParameters()), e.queryParameters),
            }
          )
        );
      return l(
        {
          transporter: a,
          appId: t,
          addAlgoliaAgent: function (e, t) {
            a.userAgent.add({ segment: e, version: t });
          },
          clearCache: function () {
            return Promise.all([
              a.requestsCache.clear(),
              a.responsesCache.clear(),
            ]).then(function () {});
          },
        },
        e.methods
      );
    },
    C = function (e) {
      return function (t) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = { transporter: e.transporter, appId: e.appId, indexName: t };
        return l(n, r.methods);
      };
    },
    k = function (e) {
      return function (t, n) {
        var o = t.map(function (e) {
          return r(r({}, e), {}, { params: T(e.params || {}) });
        });
        return e.transporter.read(
          {
            method: P,
            path: "1/indexes/*/queries",
            data: { requests: o },
            cacheable: !0,
          },
          n
        );
      };
    },
    J = function (e) {
      return function (t, o) {
        return Promise.all(
          t.map(function (t) {
            var a = t.params,
              u = a.facetName,
              i = a.facetQuery,
              s = n(a, ["facetName", "facetQuery"]);
            return C(e)(t.indexName, {
              methods: { searchForFacetValues: F },
            }).searchForFacetValues(u, i, r(r({}, o), s));
          })
        );
      };
    },
    E = function (e) {
      return function (t, r, n) {
        return e.transporter.read(
          {
            method: P,
            path: f("1/answers/%s/prediction", e.indexName),
            data: { query: t, queryLanguages: r },
            cacheable: !0,
          },
          n
        );
      };
    },
    I = function (e) {
      return function (t, r) {
        return e.transporter.read(
          {
            method: P,
            path: f("1/indexes/%s/query", e.indexName),
            data: { query: t },
            cacheable: !0,
          },
          r
        );
      };
    },
    F = function (e) {
      return function (t, r, n) {
        return e.transporter.read(
          {
            method: P,
            path: f("1/indexes/%s/facets/%s/query", e.indexName, t),
            data: { facetQuery: r },
            cacheable: !0,
          },
          n
        );
      };
    },
    R = 1,
    D = 2,
    W = 3;
  function H(e, t, n) {
    var o,
      a = {
        appId: e,
        apiKey: t,
        timeouts: { connect: 1, read: 2, write: 30 },
        requester: {
          send: function (e) {
            return new Promise(function (t) {
              var r = new XMLHttpRequest();
              r.open(e.method, e.url, !0),
                Object.keys(e.headers).forEach(function (t) {
                  return r.setRequestHeader(t, e.headers[t]);
                });
              var n,
                o = function (e, n) {
                  return setTimeout(function () {
                    r.abort(), t({ status: 0, content: n, isTimedOut: !0 });
                  }, 1e3 * e);
                },
                a = o(e.connectTimeout, "Connection timeout");
              (r.onreadystatechange = function () {
                r.readyState > r.OPENED &&
                  void 0 === n &&
                  (clearTimeout(a),
                  (n = o(e.responseTimeout, "Socket timeout")));
              }),
                (r.onerror = function () {
                  0 === r.status &&
                    (clearTimeout(a),
                    clearTimeout(n),
                    t({
                      content: r.responseText || "Network request failed",
                      status: r.status,
                      isTimedOut: !1,
                    }));
                }),
                (r.onload = function () {
                  clearTimeout(a),
                    clearTimeout(n),
                    t({
                      content: r.responseText,
                      status: r.status,
                      isTimedOut: !1,
                    });
                }),
                r.send(e.data);
            });
          },
        },
        logger:
          ((o = W),
          {
            debug: function (e, t) {
              return R >= o && console.debug(e, t), Promise.resolve();
            },
            info: function (e, t) {
              return D >= o && console.info(e, t), Promise.resolve();
            },
            error: function (e, t) {
              return console.error(e, t), Promise.resolve();
            },
          }),
        responsesCache: s(),
        requestsCache: s({ serializable: !1 }),
        hostsCache: i({
          caches: [u({ key: "".concat("4.10.3", "-").concat(e) }), s()],
        }),
        userAgent: w("4.10.3").add({ segment: "Browser", version: "lite" }),
        authMode: h.WithinQueryParameters,
      };
    return N(
      r(
        r(r({}, a), n),
        {},
        {
          methods: {
            search: k,
            searchForFacetValues: J,
            multipleQueries: k,
            multipleSearchForFacetValues: J,
            initIndex: function (e) {
              return function (t) {
                return C(e)(t, {
                  methods: {
                    search: I,
                    searchForFacetValues: F,
                    findAnswers: E,
                  },
                });
              };
            },
          },
        }
      )
    );
  }
  return (H.version = "4.10.3"), H;
});

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs =
        e());
})(this, function () {
  "use strict";
  var t = 1e3,
    e = 6e4,
    n = 36e5,
    r = "millisecond",
    i = "second",
    s = "minute",
    u = "hour",
    a = "day",
    o = "week",
    f = "month",
    h = "quarter",
    c = "year",
    d = "date",
    $ = "Invalid Date",
    l =
      /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
    y =
      /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
    M = {
      name: "en",
      weekdays:
        "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months:
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
    },
    m = function (t, e, n) {
      var r = String(t);
      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    },
    g = {
      s: m,
      z: function (t) {
        var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
        return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
      },
      m: function t(e, n) {
        if (e.date() < n.date()) return -t(n, e);
        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, f),
          s = n - i < 0,
          u = e.clone().add(r + (s ? -1 : 1), f);
        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
      },
      a: function (t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function (t) {
        return (
          { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t] ||
          String(t || "")
            .toLowerCase()
            .replace(/s$/, "")
        );
      },
      u: function (t) {
        return void 0 === t;
      },
    },
    D = "en",
    v = {};
  v[D] = M;
  var p = function (t) {
      return t instanceof _;
    },
    S = function (t, e, n) {
      var r;
      if (!t) return D;
      if ("string" == typeof t) v[t] && (r = t), e && ((v[t] = e), (r = t));
      else {
        var i = t.name;
        (v[i] = t), (r = i);
      }
      return !n && r && (D = r), r || (!n && D);
    },
    w = function (t, e) {
      if (p(t)) return t.clone();
      var n = "object" == typeof e ? e : {};
      return (n.date = t), (n.args = arguments), new _(n);
    },
    O = g;
  (O.l = S),
    (O.i = p),
    (O.w = function (t, e) {
      return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
    });
  var _ = (function () {
      function M(t) {
        (this.$L = S(t.locale, null, !0)), this.parse(t);
      }
      var m = M.prototype;
      return (
        (m.parse = function (t) {
          (this.$d = (function (t) {
            var e = t.date,
              n = t.utc;
            if (null === e) return new Date(NaN);
            if (O.u(e)) return new Date();
            if (e instanceof Date) return new Date(e);
            if ("string" == typeof e && !/Z$/i.test(e)) {
              var r = e.match(l);
              if (r) {
                var i = r[2] - 1 || 0,
                  s = (r[7] || "0").substring(0, 3);
                return n
                  ? new Date(
                      Date.UTC(
                        r[1],
                        i,
                        r[3] || 1,
                        r[4] || 0,
                        r[5] || 0,
                        r[6] || 0,
                        s
                      )
                    )
                  : new Date(
                      r[1],
                      i,
                      r[3] || 1,
                      r[4] || 0,
                      r[5] || 0,
                      r[6] || 0,
                      s
                    );
              }
            }
            return new Date(e);
          })(t)),
            (this.$x = t.x || {}),
            this.init();
        }),
        (m.init = function () {
          var t = this.$d;
          (this.$y = t.getFullYear()),
            (this.$M = t.getMonth()),
            (this.$D = t.getDate()),
            (this.$W = t.getDay()),
            (this.$H = t.getHours()),
            (this.$m = t.getMinutes()),
            (this.$s = t.getSeconds()),
            (this.$ms = t.getMilliseconds());
        }),
        (m.$utils = function () {
          return O;
        }),
        (m.isValid = function () {
          return !(this.$d.toString() === $);
        }),
        (m.isSame = function (t, e) {
          var n = w(t);
          return this.startOf(e) <= n && n <= this.endOf(e);
        }),
        (m.isAfter = function (t, e) {
          return w(t) < this.startOf(e);
        }),
        (m.isBefore = function (t, e) {
          return this.endOf(e) < w(t);
        }),
        (m.$g = function (t, e, n) {
          return O.u(t) ? this[e] : this.set(n, t);
        }),
        (m.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }),
        (m.valueOf = function () {
          return this.$d.getTime();
        }),
        (m.startOf = function (t, e) {
          var n = this,
            r = !!O.u(e) || e,
            h = O.p(t),
            $ = function (t, e) {
              var i = O.w(
                n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t),
                n
              );
              return r ? i : i.endOf(a);
            },
            l = function (t, e) {
              return O.w(
                n
                  .toDate()
                  [t].apply(
                    n.toDate("s"),
                    (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                  ),
                n
              );
            },
            y = this.$W,
            M = this.$M,
            m = this.$D,
            g = "set" + (this.$u ? "UTC" : "");
          switch (h) {
            case c:
              return r ? $(1, 0) : $(31, 11);
            case f:
              return r ? $(1, M) : $(0, M + 1);
            case o:
              var D = this.$locale().weekStart || 0,
                v = (y < D ? y + 7 : y) - D;
              return $(r ? m - v : m + (6 - v), M);
            case a:
            case d:
              return l(g + "Hours", 0);
            case u:
              return l(g + "Minutes", 1);
            case s:
              return l(g + "Seconds", 2);
            case i:
              return l(g + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }),
        (m.endOf = function (t) {
          return this.startOf(t, !1);
        }),
        (m.$set = function (t, e) {
          var n,
            o = O.p(t),
            h = "set" + (this.$u ? "UTC" : ""),
            $ = ((n = {}),
            (n[a] = h + "Date"),
            (n[d] = h + "Date"),
            (n[f] = h + "Month"),
            (n[c] = h + "FullYear"),
            (n[u] = h + "Hours"),
            (n[s] = h + "Minutes"),
            (n[i] = h + "Seconds"),
            (n[r] = h + "Milliseconds"),
            n)[o],
            l = o === a ? this.$D + (e - this.$W) : e;
          if (o === f || o === c) {
            var y = this.clone().set(d, 1);
            y.$d[$](l),
              y.init(),
              (this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d);
          } else $ && this.$d[$](l);
          return this.init(), this;
        }),
        (m.set = function (t, e) {
          return this.clone().$set(t, e);
        }),
        (m.get = function (t) {
          return this[O.p(t)]();
        }),
        (m.add = function (r, h) {
          var d,
            $ = this;
          r = Number(r);
          var l = O.p(h),
            y = function (t) {
              var e = w($);
              return O.w(e.date(e.date() + Math.round(t * r)), $);
            };
          if (l === f) return this.set(f, this.$M + r);
          if (l === c) return this.set(c, this.$y + r);
          if (l === a) return y(1);
          if (l === o) return y(7);
          var M = ((d = {}), (d[s] = e), (d[u] = n), (d[i] = t), d)[l] || 1,
            m = this.$d.getTime() + r * M;
          return O.w(m, this);
        }),
        (m.subtract = function (t, e) {
          return this.add(-1 * t, e);
        }),
        (m.format = function (t) {
          var e = this,
            n = this.$locale();
          if (!this.isValid()) return n.invalidDate || $;
          var r = t || "YYYY-MM-DDTHH:mm:ssZ",
            i = O.z(this),
            s = this.$H,
            u = this.$m,
            a = this.$M,
            o = n.weekdays,
            f = n.months,
            h = function (t, n, i, s) {
              return (t && (t[n] || t(e, r))) || i[n].substr(0, s);
            },
            c = function (t) {
              return O.s(s % 12 || 12, t, "0");
            },
            d =
              n.meridiem ||
              function (t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
              },
            l = {
              YY: String(this.$y).slice(-2),
              YYYY: this.$y,
              M: a + 1,
              MM: O.s(a + 1, 2, "0"),
              MMM: h(n.monthsShort, a, f, 3),
              MMMM: h(f, a),
              D: this.$D,
              DD: O.s(this.$D, 2, "0"),
              d: String(this.$W),
              dd: h(n.weekdaysMin, this.$W, o, 2),
              ddd: h(n.weekdaysShort, this.$W, o, 3),
              dddd: o[this.$W],
              H: String(s),
              HH: O.s(s, 2, "0"),
              h: c(1),
              hh: c(2),
              a: d(s, u, !0),
              A: d(s, u, !1),
              m: String(u),
              mm: O.s(u, 2, "0"),
              s: String(this.$s),
              ss: O.s(this.$s, 2, "0"),
              SSS: O.s(this.$ms, 3, "0"),
              Z: i,
            };
          return r.replace(y, function (t, e) {
            return e || l[t] || i.replace(":", "");
          });
        }),
        (m.utcOffset = function () {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }),
        (m.diff = function (r, d, $) {
          var l,
            y = O.p(d),
            M = w(r),
            m = (M.utcOffset() - this.utcOffset()) * e,
            g = this - M,
            D = O.m(this, M);
          return (
            (D =
              ((l = {}),
              (l[c] = D / 12),
              (l[f] = D),
              (l[h] = D / 3),
              (l[o] = (g - m) / 6048e5),
              (l[a] = (g - m) / 864e5),
              (l[u] = g / n),
              (l[s] = g / e),
              (l[i] = g / t),
              l)[y] || g),
            $ ? D : O.a(D)
          );
        }),
        (m.daysInMonth = function () {
          return this.endOf(f).$D;
        }),
        (m.$locale = function () {
          return v[this.$L];
        }),
        (m.locale = function (t, e) {
          if (!t) return this.$L;
          var n = this.clone(),
            r = S(t, e, !0);
          return r && (n.$L = r), n;
        }),
        (m.clone = function () {
          return O.w(this.$d, this);
        }),
        (m.toDate = function () {
          return new Date(this.valueOf());
        }),
        (m.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }),
        (m.toISOString = function () {
          return this.$d.toISOString();
        }),
        (m.toString = function () {
          return this.$d.toUTCString();
        }),
        M
      );
    })(),
    b = _.prototype;
  return (
    (w.prototype = b),
    [
      ["$ms", r],
      ["$s", i],
      ["$m", s],
      ["$H", u],
      ["$W", a],
      ["$M", f],
      ["$y", c],
      ["$D", d],
    ].forEach(function (t) {
      b[t[1]] = function (e) {
        return this.$g(e, t[0], t[1]);
      };
    }),
    (w.extend = function (t, e) {
      return t.$i || (t(e, _, w), (t.$i = !0)), w;
    }),
    (w.locale = S),
    (w.isDayjs = p),
    (w.unix = function (t) {
      return w(1e3 * t);
    }),
    (w.en = v[D]),
    (w.Ls = v),
    (w.p = {}),
    w
  );
});
/*!
  Highlight.js v11.1.0 (git: 83ad2fbd99)
  (c) 2006-2021 Ivan Sagalaev and other contributors
  License: BSD-3-Clause
 */
var hljs = (function () {
  "use strict";
  var e = { exports: {} };
  function n(e) {
    return (
      e instanceof Map
        ? (e.clear =
            e.delete =
            e.set =
              () => {
                throw Error("map is read-only");
              })
        : e instanceof Set &&
          (e.add =
            e.clear =
            e.delete =
              () => {
                throw Error("set is read-only");
              }),
      Object.freeze(e),
      Object.getOwnPropertyNames(e).forEach((t) => {
        var a = e[t];
        "object" != typeof a || Object.isFrozen(a) || n(a);
      }),
      e
    );
  }
  (e.exports = n), (e.exports.default = n);
  var t = e.exports;
  class a {
    constructor(e) {
      void 0 === e.data && (e.data = {}),
        (this.data = e.data),
        (this.isMatchIgnored = !1);
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function i(e) {
    return e
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;");
  }
  function s(e, ...n) {
    const t = Object.create(null);
    for (const n in e) t[n] = e[n];
    return (
      n.forEach((e) => {
        for (const n in e) t[n] = e[n];
      }),
      t
    );
  }
  const r = (e) => !!e.kind;
  class o {
    constructor(e, n) {
      (this.buffer = ""), (this.classPrefix = n.classPrefix), e.walk(this);
    }
    addText(e) {
      this.buffer += i(e);
    }
    openNode(e) {
      if (!r(e)) return;
      let n = e.kind;
      (n = e.sublanguage
        ? "language-" + n
        : ((e, { prefix: n }) => {
            if (e.includes(".")) {
              const t = e.split(".");
              return [
                `${n}${t.shift()}`,
                ...t.map((e, n) => `${e}${"_".repeat(n + 1)}`),
              ].join(" ");
            }
            return `${n}${e}`;
          })(n, { prefix: this.classPrefix })),
        this.span(n);
    }
    closeNode(e) {
      r(e) && (this.buffer += "</span>");
    }
    value() {
      return this.buffer;
    }
    span(e) {
      this.buffer += `<span class="${e}">`;
    }
  }
  class l {
    constructor() {
      (this.rootNode = {
        children: [],
      }),
        (this.stack = [this.rootNode]);
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(e) {
      this.top.children.push(e);
    }
    openNode(e) {
      const n = { kind: e, children: [] };
      this.add(n), this.stack.push(n);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); );
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(e) {
      return this.constructor._walk(e, this.rootNode);
    }
    static _walk(e, n) {
      return (
        "string" == typeof n
          ? e.addText(n)
          : n.children &&
            (e.openNode(n),
            n.children.forEach((n) => this._walk(e, n)),
            e.closeNode(n)),
        e
      );
    }
    static _collapse(e) {
      "string" != typeof e &&
        e.children &&
        (e.children.every((e) => "string" == typeof e)
          ? (e.children = [e.children.join("")])
          : e.children.forEach((e) => {
              l._collapse(e);
            }));
    }
  }
  class c extends l {
    constructor(e) {
      super(), (this.options = e);
    }
    addKeyword(e, n) {
      "" !== e && (this.openNode(n), this.addText(e), this.closeNode());
    }
    addText(e) {
      "" !== e && this.add(e);
    }
    addSublanguage(e, n) {
      const t = e.root;
      (t.kind = n), (t.sublanguage = !0), this.add(t);
    }
    toHTML() {
      return new o(this, this.options).value();
    }
    finalize() {
      return !0;
    }
  }
  function d(e) {
    return e ? ("string" == typeof e ? e : e.source) : null;
  }
  function g(e) {
    return b("(?=", e, ")");
  }
  function u(e) {
    return b("(?:", e, ")?");
  }
  function b(...e) {
    return e.map((e) => d(e)).join("");
  }
  function m(...e) {
    return (
      "(" +
      (((e) => {
        const n = e[e.length - 1];
        return "object" == typeof n && n.constructor === Object
          ? (e.splice(e.length - 1, 1), n)
          : {};
      })(e).capture
        ? ""
        : "?:") +
      e.map((e) => d(e)).join("|") +
      ")"
    );
  }
  function p(e) {
    return RegExp(e.toString() + "|").exec("").length - 1;
  }
  const _ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function h(e, { joinWith: n }) {
    let t = 0;
    return e
      .map((e) => {
        t += 1;
        const n = t;
        let a = d(e),
          i = "";
        for (; a.length > 0; ) {
          const e = _.exec(a);
          if (!e) {
            i += a;
            break;
          }
          (i += a.substring(0, e.index)),
            (a = a.substring(e.index + e[0].length)),
            "\\" === e[0][0] && e[1]
              ? (i += "\\" + (Number(e[1]) + n))
              : ((i += e[0]), "(" === e[0] && t++);
        }
        return i;
      })
      .map((e) => `(${e})`)
      .join(n);
  }
  const f = "[a-zA-Z]\\w*",
    E = "[a-zA-Z_]\\w*",
    y = "\\b\\d+(\\.\\d+)?",
    N =
      "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    w = "\\b(0b[01]+)",
    v = {
      begin: "\\\\[\\s\\S]",
      relevance: 0,
    },
    O = {
      scope: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [v],
    },
    M = {
      scope: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [v],
    },
    x = (e, n, t = {}) => {
      const a = s({ scope: "comment", begin: e, end: n, contains: [] }, t);
      a.contains.push({
        scope: "doctag",
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: !0,
        relevance: 0,
      });
      const i = m(
        "I",
        "a",
        "is",
        "so",
        "us",
        "to",
        "at",
        "if",
        "in",
        "it",
        "on",
        /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
        /[A-Za-z]+[-][a-z]+/,
        /[A-Za-z][a-z]{2,}/
      );
      return (
        a.contains.push({
          begin: b(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}"),
        }),
        a
      );
    },
    S = x("//", "$"),
    k = x("/\\*", "\\*/"),
    A = x("#", "$");
  var C = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: /\b\B/,
    IDENT_RE: f,
    UNDERSCORE_IDENT_RE: E,
    NUMBER_RE: y,
    C_NUMBER_RE: N,
    BINARY_NUMBER_RE: w,
    RE_STARTERS_RE:
      "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: (e = {}) => {
      const n = /^#![ ]*\//;
      return (
        e.binary && (e.begin = b(n, /.*\b/, e.binary, /\b.*/)),
        s(
          {
            scope: "meta",
            begin: n,
            end: /$/,
            relevance: 0,
            "on:begin": (e, n) => {
              0 !== e.index && n.ignoreMatch();
            },
          },
          e
        )
      );
    },
    BACKSLASH_ESCAPE: v,
    APOS_STRING_MODE: O,
    QUOTE_STRING_MODE: M,
    PHRASAL_WORDS_MODE: {
      begin:
        /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    },
    COMMENT: x,
    C_LINE_COMMENT_MODE: S,
    C_BLOCK_COMMENT_MODE: k,
    HASH_COMMENT_MODE: A,
    NUMBER_MODE: { scope: "number", begin: y, relevance: 0 },
    C_NUMBER_MODE: { scope: "number", begin: N, relevance: 0 },
    BINARY_NUMBER_MODE: { scope: "number", begin: w, relevance: 0 },
    REGEXP_MODE: {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [
        {
          scope: "regexp",
          begin: /\//,
          end: /\/[gimuy]*/,
          illegal: /\n/,
          contains: [
            v,
            { begin: /\[/, end: /\]/, relevance: 0, contains: [v] },
          ],
        },
      ],
    },
    TITLE_MODE: { scope: "title", begin: f, relevance: 0 },
    UNDERSCORE_TITLE_MODE: { scope: "title", begin: E, relevance: 0 },
    METHOD_GUARD: {
      begin: "\\.\\s*[a-zA-Z_]\\w*",
      relevance: 0,
    },
    END_SAME_AS_BEGIN: (e) =>
      Object.assign(e, {
        "on:begin": (e, n) => {
          n.data._beginMatch = e[1];
        },
        "on:end": (e, n) => {
          n.data._beginMatch !== e[1] && n.ignoreMatch();
        },
      }),
  });
  function T(e, n) {
    "." === e.input[e.index - 1] && n.ignoreMatch();
  }
  function R(e, n) {
    void 0 !== e.className && ((e.scope = e.className), delete e.className);
  }
  function D(e, n) {
    n &&
      e.beginKeywords &&
      ((e.begin =
        "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)"),
      (e.__beforeBegin = T),
      (e.keywords = e.keywords || e.beginKeywords),
      delete e.beginKeywords,
      void 0 === e.relevance && (e.relevance = 0));
  }
  function I(e, n) {
    Array.isArray(e.illegal) && (e.illegal = m(...e.illegal));
  }
  function L(e, n) {
    if (e.match) {
      if (e.begin || e.end)
        throw Error("begin & end are not supported with match");
      (e.begin = e.match), delete e.match;
    }
  }
  function B(e, n) {
    void 0 === e.relevance && (e.relevance = 1);
  }
  const $ = (e, n) => {
      if (!e.beforeMatch) return;
      if (e.starts) throw Error("beforeMatch cannot be used with starts");
      const t = Object.assign({}, e);
      Object.keys(e).forEach((n) => {
        delete e[n];
      }),
        (e.keywords = t.keywords),
        (e.begin = b(t.beforeMatch, g(t.begin))),
        (e.starts = {
          relevance: 0,
          contains: [Object.assign(t, { endsParent: !0 })],
        }),
        (e.relevance = 0),
        delete t.beforeMatch;
    },
    z = [
      "of",
      "and",
      "for",
      "in",
      "not",
      "or",
      "if",
      "then",
      "parent",
      "list",
      "value",
    ];
  function F(e, n, t = "keyword") {
    const a = Object.create(null);
    return (
      "string" == typeof e
        ? i(t, e.split(" "))
        : Array.isArray(e)
        ? i(t, e)
        : Object.keys(e).forEach((t) => {
            Object.assign(a, F(e[t], n, t));
          }),
      a
    );
    function i(e, t) {
      n && (t = t.map((e) => e.toLowerCase())),
        t.forEach((n) => {
          const t = n.split("|");
          a[t[0]] = [e, j(t[0], t[1])];
        });
    }
  }
  function j(e, n) {
    return n ? Number(n) : ((e) => z.includes(e.toLowerCase()))(e) ? 0 : 1;
  }
  const U = {},
    P = (e) => {
      console.error(e);
    },
    K = (e, ...n) => {
      console.log("WARN: " + e, ...n);
    },
    q = (e, n) => {
      U[`${e}/${n}`] ||
        (console.log(`Deprecated as of ${e}. ${n}`), (U[`${e}/${n}`] = !0));
    },
    H = Error();
  function G(e, n, { key: t }) {
    let a = 0;
    const i = e[t],
      s = {},
      r = {};
    for (let e = 1; e <= n.length; e++)
      (r[e + a] = i[e]), (s[e + a] = !0), (a += p(n[e - 1]));
    (e[t] = r), (e[t]._emit = s), (e[t]._multi = !0);
  }
  function Z(e) {
    ((e) => {
      e.scope &&
        "object" == typeof e.scope &&
        null !== e.scope &&
        ((e.beginScope = e.scope), delete e.scope);
    })(e),
      "string" == typeof e.beginScope &&
        (e.beginScope = {
          _wrap: e.beginScope,
        }),
      "string" == typeof e.endScope && (e.endScope = { _wrap: e.endScope }),
      ((e) => {
        if (Array.isArray(e.begin)) {
          if (e.skip || e.excludeBegin || e.returnBegin)
            throw (
              (P(
                "skip, excludeBegin, returnBegin not compatible with beginScope: {}"
              ),
              H)
            );
          if ("object" != typeof e.beginScope || null === e.beginScope)
            throw (P("beginScope must be object"), H);
          G(e, e.begin, { key: "beginScope" }),
            (e.begin = h(e.begin, { joinWith: "" }));
        }
      })(e),
      ((e) => {
        if (Array.isArray(e.end)) {
          if (e.skip || e.excludeEnd || e.returnEnd)
            throw (
              (P(
                "skip, excludeEnd, returnEnd not compatible with endScope: {}"
              ),
              H)
            );
          if ("object" != typeof e.endScope || null === e.endScope)
            throw (P("endScope must be object"), H);
          G(e, e.end, { key: "endScope" }),
            (e.end = h(e.end, { joinWith: "" }));
        }
      })(e);
  }
  function W(e) {
    function n(n, t) {
      return RegExp(
        d(n),
        "m" + (e.case_insensitive ? "i" : "") + (t ? "g" : "")
      );
    }
    class t {
      constructor() {
        (this.matchIndexes = {}),
          (this.regexes = []),
          (this.matchAt = 1),
          (this.position = 0);
      }
      addRule(e, n) {
        (n.position = this.position++),
          (this.matchIndexes[this.matchAt] = n),
          this.regexes.push([n, e]),
          (this.matchAt += p(e) + 1);
      }
      compile() {
        0 === this.regexes.length && (this.exec = () => null);
        const e = this.regexes.map((e) => e[1]);
        (this.matcherRe = n(h(e, { joinWith: "|" }), !0)), (this.lastIndex = 0);
      }
      exec(e) {
        this.matcherRe.lastIndex = this.lastIndex;
        const n = this.matcherRe.exec(e);
        if (!n) return null;
        const t = n.findIndex((e, n) => n > 0 && void 0 !== e),
          a = this.matchIndexes[t];
        return n.splice(0, t), Object.assign(n, a);
      }
    }
    class a {
      constructor() {
        (this.rules = []),
          (this.multiRegexes = []),
          (this.count = 0),
          (this.lastIndex = 0),
          (this.regexIndex = 0);
      }
      getMatcher(e) {
        if (this.multiRegexes[e]) return this.multiRegexes[e];
        const n = new t();
        return (
          this.rules.slice(e).forEach(([e, t]) => n.addRule(e, t)),
          n.compile(),
          (this.multiRegexes[e] = n),
          n
        );
      }
      resumingScanAtSamePosition() {
        return 0 !== this.regexIndex;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(e, n) {
        this.rules.push([e, n]), "begin" === n.type && this.count++;
      }
      exec(e) {
        const n = this.getMatcher(this.regexIndex);
        n.lastIndex = this.lastIndex;
        let t = n.exec(e);
        if (this.resumingScanAtSamePosition())
          if (t && t.index === this.lastIndex);
          else {
            const n = this.getMatcher(0);
            (n.lastIndex = this.lastIndex + 1), (t = n.exec(e));
          }
        return (
          t &&
            ((this.regexIndex += t.position + 1),
            this.regexIndex === this.count && this.considerAll()),
          t
        );
      }
    }
    if (
      (e.compilerExtensions || (e.compilerExtensions = []),
      e.contains && e.contains.includes("self"))
    )
      throw Error(
        "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
      );
    return (
      (e.classNameAliases = s(e.classNameAliases || {})),
      (function t(i, r) {
        const o = i;
        if (i.isCompiled) return o;
        [R, L, Z, $].forEach((e) => e(i, r)),
          e.compilerExtensions.forEach((e) => e(i, r)),
          (i.__beforeBegin = null),
          [D, I, B].forEach((e) => e(i, r)),
          (i.isCompiled = !0);
        let l = null;
        return (
          "object" == typeof i.keywords &&
            i.keywords.$pattern &&
            ((i.keywords = Object.assign({}, i.keywords)),
            (l = i.keywords.$pattern),
            delete i.keywords.$pattern),
          (l = l || /\w+/),
          i.keywords && (i.keywords = F(i.keywords, e.case_insensitive)),
          (o.keywordPatternRe = n(l, !0)),
          r &&
            (i.begin || (i.begin = /\B|\b/),
            (o.beginRe = n(i.begin)),
            i.end || i.endsWithParent || (i.end = /\B|\b/),
            i.end && (o.endRe = n(i.end)),
            (o.terminatorEnd = d(i.end) || ""),
            i.endsWithParent &&
              r.terminatorEnd &&
              (o.terminatorEnd += (i.end ? "|" : "") + r.terminatorEnd)),
          i.illegal && (o.illegalRe = n(i.illegal)),
          i.contains || (i.contains = []),
          (i.contains = [].concat(
            ...i.contains.map((e) =>
              ((e) => (
                e.variants &&
                  !e.cachedVariants &&
                  (e.cachedVariants = e.variants.map((n) =>
                    s(
                      e,
                      {
                        variants: null,
                      },
                      n
                    )
                  )),
                e.cachedVariants
                  ? e.cachedVariants
                  : Q(e)
                  ? s(e, {
                      starts: e.starts ? s(e.starts) : null,
                    })
                  : Object.isFrozen(e)
                  ? s(e)
                  : e
              ))("self" === e ? i : e)
            )
          )),
          i.contains.forEach((e) => {
            t(e, o);
          }),
          i.starts && t(i.starts, r),
          (o.matcher = ((e) => {
            const n = new a();
            return (
              e.contains.forEach((e) =>
                n.addRule(e.begin, { rule: e, type: "begin" })
              ),
              e.terminatorEnd && n.addRule(e.terminatorEnd, { type: "end" }),
              e.illegal && n.addRule(e.illegal, { type: "illegal" }),
              n
            );
          })(o)),
          o
        );
      })(e)
    );
  }
  function Q(e) {
    return !!e && (e.endsWithParent || Q(e.starts));
  }
  const X = i,
    V = s,
    J = Symbol("nomatch");
  var Y = ((e) => {
    const n = Object.create(null),
      i = Object.create(null),
      s = [];
    let r = !0;
    const o =
        "Could not find the language '{}', did you forget to load/include a language module?",
      l = {
        disableAutodetect: !0,
        name: "Plain text",
        contains: [],
      };
    let d = {
      ignoreUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      __emitter: c,
    };
    function g(e) {
      return d.noHighlightRe.test(e);
    }
    function u(e, n, t) {
      let a = "",
        i = "";
      "object" == typeof n
        ? ((a = e), (t = n.ignoreIllegals), (i = n.language))
        : (q("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
          q(
            "10.7.0",
            "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"
          ),
          (i = e),
          (a = n)),
        void 0 === t && (t = !0);
      const s = { code: a, language: i };
      N("before:highlight", s);
      const r = s.result ? s.result : b(s.language, s.code, t);
      return (r.code = s.code), N("after:highlight", r), r;
    }
    function b(e, t, i, s) {
      const l = Object.create(null);
      function c() {
        if (!M.keywords) return void S.addText(k);
        let e = 0;
        M.keywordPatternRe.lastIndex = 0;
        let n = M.keywordPatternRe.exec(k),
          t = "";
        for (; n; ) {
          t += k.substring(e, n.index);
          const i = w.case_insensitive ? n[0].toLowerCase() : n[0],
            s = ((a = i), M.keywords[a]);
          if (s) {
            const [e, a] = s;
            if (
              (S.addText(t),
              (t = ""),
              (l[i] = (l[i] || 0) + 1),
              l[i] <= 7 && (A += a),
              e.startsWith("_"))
            )
              t += n[0];
            else {
              const t = w.classNameAliases[e] || e;
              S.addKeyword(n[0], t);
            }
          } else t += n[0];
          (e = M.keywordPatternRe.lastIndex), (n = M.keywordPatternRe.exec(k));
        }
        var a;
        (t += k.substr(e)), S.addText(t);
      }
      function g() {
        null != M.subLanguage
          ? (() => {
              if ("" === k) return;
              let e = null;
              if ("string" == typeof M.subLanguage) {
                if (!n[M.subLanguage]) return void S.addText(k);
                (e = b(M.subLanguage, k, !0, x[M.subLanguage])),
                  (x[M.subLanguage] = e._top);
              } else e = m(k, M.subLanguage.length ? M.subLanguage : null);
              M.relevance > 0 && (A += e.relevance),
                S.addSublanguage(e._emitter, e.language);
            })()
          : c(),
          (k = "");
      }
      function u(e, n) {
        let t = 1;
        for (; void 0 !== n[t]; ) {
          if (!e._emit[t]) {
            t++;
            continue;
          }
          const a = w.classNameAliases[e[t]] || e[t],
            i = n[t];
          a ? S.addKeyword(i, a) : ((k = i), c(), (k = "")), t++;
        }
      }
      function p(e, n) {
        return (
          e.scope &&
            "string" == typeof e.scope &&
            S.openNode(w.classNameAliases[e.scope] || e.scope),
          e.beginScope &&
            (e.beginScope._wrap
              ? (S.addKeyword(
                  k,
                  w.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap
                ),
                (k = ""))
              : e.beginScope._multi && (u(e.beginScope, n), (k = ""))),
          (M = Object.create(e, {
            parent: {
              value: M,
            },
          })),
          M
        );
      }
      function _(e, n, t) {
        let i = ((e, n) => {
          const t = e && e.exec(n);
          return t && 0 === t.index;
        })(e.endRe, t);
        if (i) {
          if (e["on:end"]) {
            const t = new a(e);
            e["on:end"](n, t), t.isMatchIgnored && (i = !1);
          }
          if (i) {
            for (; e.endsParent && e.parent; ) e = e.parent;
            return e;
          }
        }
        if (e.endsWithParent) return _(e.parent, n, t);
      }
      function h(e) {
        return 0 === M.matcher.regexIndex ? ((k += e[0]), 1) : ((R = !0), 0);
      }
      function E(e) {
        const n = e[0],
          a = t.substr(e.index),
          i = _(M, e, a);
        if (!i) return J;
        const s = M;
        M.endScope && M.endScope._wrap
          ? (g(), S.addKeyword(n, M.endScope._wrap))
          : M.endScope && M.endScope._multi
          ? (g(), u(M.endScope, e))
          : s.skip
          ? (k += n)
          : (s.returnEnd || s.excludeEnd || (k += n),
            g(),
            s.excludeEnd && (k = n));
        do {
          M.scope && !M.isMultiClass && S.closeNode(),
            M.skip || M.subLanguage || (A += M.relevance),
            (M = M.parent);
        } while (M !== i.parent);
        return i.starts && p(i.starts, e), s.returnEnd ? 0 : n.length;
      }
      let y = {};
      function N(n, s) {
        const o = s && s[0];
        if (((k += n), null == o)) return g(), 0;
        if (
          "begin" === y.type &&
          "end" === s.type &&
          y.index === s.index &&
          "" === o
        ) {
          if (((k += t.slice(s.index, s.index + 1)), !r)) {
            const n = Error(`0 width match regex (${e})`);
            throw ((n.languageName = e), (n.badRule = y.rule), n);
          }
          return 1;
        }
        if (((y = s), "begin" === s.type))
          return ((e) => {
            const n = e[0],
              t = e.rule,
              i = new a(t),
              s = [t.__beforeBegin, t["on:begin"]];
            for (const t of s)
              if (t && (t(e, i), i.isMatchIgnored)) return h(n);
            return (
              t.skip
                ? (k += n)
                : (t.excludeBegin && (k += n),
                  g(),
                  t.returnBegin || t.excludeBegin || (k = n)),
              p(t, e),
              t.returnBegin ? 0 : n.length
            );
          })(s);
        if ("illegal" === s.type && !i) {
          const e = Error(
            'Illegal lexeme "' +
              o +
              '" for mode "' +
              (M.scope || "<unnamed>") +
              '"'
          );
          throw ((e.mode = M), e);
        }
        if ("end" === s.type) {
          const e = E(s);
          if (e !== J) return e;
        }
        if ("illegal" === s.type && "" === o) return 1;
        if (T > 1e5 && T > 3 * s.index)
          throw Error(
            "potential infinite loop, way more iterations than matches"
          );
        return (k += o), o.length;
      }
      const w = f(e);
      if (!w)
        throw (P(o.replace("{}", e)), Error('Unknown language: "' + e + '"'));
      const v = W(w);
      let O = "",
        M = s || v;
      const x = {},
        S = new d.__emitter(d);
      (() => {
        const e = [];
        for (let n = M; n !== w; n = n.parent) n.scope && e.unshift(n.scope);
        e.forEach((e) => S.openNode(e));
      })();
      let k = "",
        A = 0,
        C = 0,
        T = 0,
        R = !1;
      try {
        for (M.matcher.considerAll(); ; ) {
          T++,
            R ? (R = !1) : M.matcher.considerAll(),
            (M.matcher.lastIndex = C);
          const e = M.matcher.exec(t);
          if (!e) break;
          const n = N(t.substring(C, e.index), e);
          C = e.index + n;
        }
        return (
          N(t.substr(C)),
          S.closeAllNodes(),
          S.finalize(),
          (O = S.toHTML()),
          {
            language: e,
            value: O,
            relevance: A,
            illegal: !1,
            _emitter: S,
            _top: M,
          }
        );
      } catch (n) {
        if (n.message && n.message.includes("Illegal"))
          return {
            language: e,
            value: X(t),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: n.message,
              index: C,
              context: t.slice(C - 100, C + 100),
              mode: n.mode,
              resultSoFar: O,
            },
            _emitter: S,
          };
        if (r)
          return {
            language: e,
            value: X(t),
            illegal: !1,
            relevance: 0,
            errorRaised: n,
            _emitter: S,
            _top: M,
          };
        throw n;
      }
    }
    function m(e, t) {
      t = t || d.languages || Object.keys(n);
      const a = ((e) => {
          const n = {
            value: X(e),
            illegal: !1,
            relevance: 0,
            _top: l,
            _emitter: new d.__emitter(d),
          };
          return n._emitter.addText(e), n;
        })(e),
        i = t
          .filter(f)
          .filter(y)
          .map((n) => b(n, e, !1));
      i.unshift(a);
      const s = i.sort((e, n) => {
          if (e.relevance !== n.relevance) return n.relevance - e.relevance;
          if (e.language && n.language) {
            if (f(e.language).supersetOf === n.language) return 1;
            if (f(n.language).supersetOf === e.language) return -1;
          }
          return 0;
        }),
        [r, o] = s,
        c = r;
      return (c.secondBest = o), c;
    }
    function p(e) {
      let n = null;
      const t = ((e) => {
        let n = e.className + " ";
        n += e.parentNode ? e.parentNode.className : "";
        const t = d.languageDetectRe.exec(n);
        if (t) {
          const n = f(t[1]);
          return (
            n ||
              (K(o.replace("{}", t[1])),
              K("Falling back to no-highlight mode for this block.", e)),
            n ? t[1] : "no-highlight"
          );
        }
        return n.split(/\s+/).find((e) => g(e) || f(e));
      })(e);
      if (g(t)) return;
      N("before:highlightElement", { el: e, language: t }),
        !d.ignoreUnescapedHTML &&
          e.children.length > 0 &&
          (console.warn(
            "One of your code blocks includes unescaped HTML. This is a potentially serious security risk."
          ),
          console.warn(
            "https://github.com/highlightjs/highlight.js/issues/2886"
          ),
          console.warn(e)),
        (n = e);
      const a = n.textContent,
        s = t ? u(a, { language: t, ignoreIllegals: !0 }) : m(a);
      (e.innerHTML = s.value),
        ((e, n, t) => {
          const a = (n && i[n]) || t;
          e.classList.add("hljs"), e.classList.add("language-" + a);
        })(e, t, s.language),
        (e.result = {
          language: s.language,
          re: s.relevance,
          relevance: s.relevance,
        }),
        s.secondBest &&
          (e.secondBest = {
            language: s.secondBest.language,
            relevance: s.secondBest.relevance,
          }),
        N("after:highlightElement", { el: e, result: s, text: a });
    }
    let _ = !1;
    function h() {
      "loading" !== document.readyState
        ? document.querySelectorAll(d.cssSelector).forEach(p)
        : (_ = !0);
    }
    function f(e) {
      return (e = (e || "").toLowerCase()), n[e] || n[i[e]];
    }
    function E(e, { languageName: n }) {
      "string" == typeof e && (e = [e]),
        e.forEach((e) => {
          i[e.toLowerCase()] = n;
        });
    }
    function y(e) {
      const n = f(e);
      return n && !n.disableAutodetect;
    }
    function N(e, n) {
      const t = e;
      s.forEach((e) => {
        e[t] && e[t](n);
      });
    }
    "undefined" != typeof window &&
      window.addEventListener &&
      window.addEventListener(
        "DOMContentLoaded",
        () => {
          _ && h();
        },
        !1
      ),
      Object.assign(e, {
        highlight: u,
        highlightAuto: m,
        highlightAll: h,
        highlightElement: p,
        highlightBlock: (e) => (
          q("10.7.0", "highlightBlock will be removed entirely in v12.0"),
          q("10.7.0", "Please use highlightElement now."),
          p(e)
        ),
        configure: (e) => {
          d = V(d, e);
        },
        initHighlighting: () => {
          h(),
            q(
              "10.6.0",
              "initHighlighting() deprecated.  Use highlightAll() now."
            );
        },
        initHighlightingOnLoad: () => {
          h(),
            q(
              "10.6.0",
              "initHighlightingOnLoad() deprecated.  Use highlightAll() now."
            );
        },
        registerLanguage: (t, a) => {
          let i = null;
          try {
            i = a(e);
          } catch (e) {
            if (
              (P(
                "Language definition for '{}' could not be registered.".replace(
                  "{}",
                  t
                )
              ),
              !r)
            )
              throw e;
            P(e), (i = l);
          }
          i.name || (i.name = t),
            (n[t] = i),
            (i.rawDefinition = a.bind(null, e)),
            i.aliases &&
              E(i.aliases, {
                languageName: t,
              });
        },
        unregisterLanguage: (e) => {
          delete n[e];
          for (const n of Object.keys(i)) i[n] === e && delete i[n];
        },
        listLanguages: () => Object.keys(n),
        getLanguage: f,
        registerAliases: E,
        autoDetection: y,
        inherit: V,
        addPlugin: (e) => {
          ((e) => {
            e["before:highlightBlock"] &&
              !e["before:highlightElement"] &&
              (e["before:highlightElement"] = (n) => {
                e["before:highlightBlock"](Object.assign({ block: n.el }, n));
              }),
              e["after:highlightBlock"] &&
                !e["after:highlightElement"] &&
                (e["after:highlightElement"] = (n) => {
                  e["after:highlightBlock"](Object.assign({ block: n.el }, n));
                });
          })(e),
            s.push(e);
        },
      }),
      (e.debugMode = () => {
        r = !1;
      }),
      (e.safeMode = () => {
        r = !0;
      }),
      (e.versionString = "11.1.0");
    for (const e in C) "object" == typeof C[e] && t(C[e]);
    return Object.assign(e, C), e;
  })({});
  const ee = (e) => ({
      IMPORTANT: { scope: "meta", begin: "!important" },
      HEXCOLOR: {
        scope: "number",
        begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})",
      },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: "selector-attr",
        begin: /\[/,
        end: /\]/,
        illegal: "$",
        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
      },
      CSS_NUMBER_MODE: {
        scope: "number",
        begin:
          e.NUMBER_RE +
          "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0,
      },
      CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ },
    }),
    ne = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "p",
      "q",
      "quote",
      "samp",
      "section",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video",
    ],
    te = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height",
    ],
    ae = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where",
    ],
    ie = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error",
    ],
    se = [
      "align-content",
      "align-items",
      "align-self",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "auto",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "border",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "clear",
      "clip",
      "clip-path",
      "color",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "content",
      "counter-increment",
      "counter-reset",
      "cursor",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-variant-ligatures",
      "font-variation-settings",
      "font-weight",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inherit",
      "initial",
      "justify-content",
      "left",
      "letter-spacing",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-bottom",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "max-height",
      "max-width",
      "min-height",
      "min-width",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-bottom",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "resize",
      "right",
      "src",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-last",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-indent",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-position",
      "top",
      "transform",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "unicode-bidi",
      "vertical-align",
      "visibility",
      "white-space",
      "widows",
      "width",
      "word-break",
      "word-spacing",
      "word-wrap",
      "z-index",
    ].reverse(),
    re = ae.concat(ie);
  var oe = "\\.([0-9](_*[0-9])*)",
    le = "[0-9a-fA-F](_*[0-9a-fA-F])*",
    ce = {
      className: "number",
      variants: [
        {
          begin: `(\\b([0-9](_*[0-9])*)((${oe})|\\.)?|(${oe}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`,
        },
        { begin: `\\b([0-9](_*[0-9])*)((${oe})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
        {
          begin: `(${oe})[fFdD]?\\b`,
        },
        { begin: "\\b([0-9](_*[0-9])*)[fFdD]\\b" },
        {
          begin: `\\b0[xX]((${le})\\.?|(${le})?\\.(${le}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`,
        },
        { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
        { begin: `\\b0[xX](${le})[lL]?\\b` },
        {
          begin: "\\b0(_*[0-7])*[lL]?\\b",
        },
        { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
      ],
      relevance: 0,
    };
  function de(e, n, t) {
    return -1 === t ? "" : e.replace(n, (a) => de(e, n, t - 1));
  }
  const ge = "[A-Za-z$_][0-9A-Za-z$_]*",
    ue = [
      "as",
      "in",
      "of",
      "if",
      "for",
      "while",
      "finally",
      "var",
      "new",
      "function",
      "do",
      "return",
      "void",
      "else",
      "break",
      "catch",
      "instanceof",
      "with",
      "throw",
      "case",
      "default",
      "try",
      "switch",
      "continue",
      "typeof",
      "delete",
      "let",
      "yield",
      "const",
      "class",
      "debugger",
      "async",
      "await",
      "static",
      "import",
      "from",
      "export",
      "extends",
    ],
    be = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    me = [
      "Intl",
      "DataView",
      "Number",
      "Math",
      "Date",
      "String",
      "RegExp",
      "Object",
      "Function",
      "Boolean",
      "Error",
      "Symbol",
      "Set",
      "Map",
      "WeakSet",
      "WeakMap",
      "Proxy",
      "Reflect",
      "JSON",
      "Promise",
      "Float64Array",
      "Int16Array",
      "Int32Array",
      "Int8Array",
      "Uint16Array",
      "Uint32Array",
      "Float32Array",
      "Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "ArrayBuffer",
      "BigInt64Array",
      "BigUint64Array",
      "BigInt",
    ],
    pe = [
      "EvalError",
      "InternalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ],
    _e = [
      "setInterval",
      "setTimeout",
      "clearInterval",
      "clearTimeout",
      "require",
      "exports",
      "eval",
      "isFinite",
      "isNaN",
      "parseFloat",
      "parseInt",
      "decodeURI",
      "decodeURIComponent",
      "encodeURI",
      "encodeURIComponent",
      "escape",
      "unescape",
    ],
    he = [
      "arguments",
      "this",
      "super",
      "console",
      "window",
      "document",
      "localStorage",
      "module",
      "global",
    ],
    fe = [].concat(_e, me, pe);
  function Ee(e) {
    const n = ge,
      t = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (e, n) => {
          const t = e[0].length + e.index,
            a = e.input[t];
          "<" !== a
            ? ">" === a &&
              (((e, { after: n }) => {
                const t = "</" + e[0].slice(1);
                return -1 !== e.input.indexOf(t, n);
              })(e, { after: t }) ||
                n.ignoreMatch())
            : n.ignoreMatch();
        },
      },
      a = {
        $pattern: ge,
        keyword: ue,
        literal: be,
        built_in: fe,
        "variable.language": he,
      },
      i = "\\.([0-9](_?[0-9])*)",
      s = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
      r = {
        className: "number",
        variants: [
          {
            begin: `(\\b(${s})((${i})|\\.)?|(${i}))[eE][+-]?([0-9](_?[0-9])*)\\b`,
          },
          {
            begin: `\\b(${s})\\b((${i})\\b|\\.)?|(${i})\\b`,
          },
          {
            begin: "\\b(0|[1-9](_?[0-9])*)n\\b",
          },
          {
            begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b",
          },
          {
            begin: "\\b0[bB][0-1](_?[0-1])*n?\\b",
          },
          { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
          {
            begin: "\\b0[0-7]+n?\\b",
          },
        ],
        relevance: 0,
      },
      o = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: a,
        contains: [],
      },
      l = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [e.BACKSLASH_ESCAPE, o],
          subLanguage: "xml",
        },
      },
      c = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [e.BACKSLASH_ESCAPE, o],
          subLanguage: "css",
        },
      },
      d = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [e.BACKSLASH_ESCAPE, o],
      },
      u = {
        className: "comment",
        variants: [
          e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  { className: "doctag", begin: "@[A-Za-z]+" },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0,
                  },
                  {
                    className: "variable",
                    begin: n + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0,
                  },
                  { begin: /(?=[^\n])\s/, relevance: 0 },
                ],
              },
            ],
          }),
          e.C_BLOCK_COMMENT_MODE,
          e.C_LINE_COMMENT_MODE,
        ],
      },
      m = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, l, c, d, r, e.REGEXP_MODE];
    o.contains = m.concat({
      begin: /\{/,
      end: /\}/,
      keywords: a,
      contains: ["self"].concat(m),
    });
    const p = [].concat(u, o.contains),
      _ = p.concat([
        { begin: /\(/, end: /\)/, keywords: a, contains: ["self"].concat(p) },
      ]),
      h = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: a,
        contains: _,
      },
      f = {
        variants: [
          {
            match: [/class/, /\s+/, n],
            scope: { 1: "keyword", 3: "title.class" },
          },
          {
            match: [/extends/, /\s+/, b(n, "(", b(/\./, n), ")*")],
            scope: { 1: "keyword", 3: "title.class.inherited" },
          },
        ],
      },
      E = {
        relevance: 0,
        match: /\b[A-Z][a-z]+([A-Z][a-z]+)*/,
        className: "title.class",
        keywords: {
          _: [...me, ...pe],
        },
      },
      y = {
        variants: [
          { match: [/function/, /\s+/, n, /(?=\s*\()/] },
          {
            match: [/function/, /\s*(?=\()/],
          },
        ],
        className: { 1: "keyword", 3: "title.function" },
        label: "func.def",
        contains: [h],
        illegal: /%/,
      },
      N = {
        match: b(
          /\b/,
          ((w = [..._e, "super"]), b("(?!", w.join("|"), ")")),
          n,
          g(/\(/)
        ),
        className: "title.function",
        relevance: 0,
      };
    var w;
    const v = {
        begin: b(/\./, g(b(n, /(?![0-9A-Za-z$_(])/))),
        end: n,
        excludeBegin: !0,
        keywords: "prototype",
        className: "property",
        relevance: 0,
      },
      O = {
        match: [/get|set/, /\s+/, n, /(?=\()/],
        className: { 1: "keyword", 3: "title.function" },
        contains: [{ begin: /\(\)/ }, h],
      },
      M =
        "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
        e.UNDERSCORE_IDENT_RE +
        ")\\s*=>",
      x = {
        match: [/const|var|let/, /\s+/, n, /\s*/, /=\s*/, g(M)],
        className: { 1: "keyword", 3: "title.function" },
        contains: [h],
      };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: a,
      exports: { PARAMS_CONTAINS: _ },
      illegal: /#(?![$_A-z])/,
      contains: [
        e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
        {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          begin: /^\s*['"]use (strict|asm)['"]/,
        },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        l,
        c,
        d,
        u,
        r,
        E,
        { className: "attr", begin: n + g(":"), relevance: 0 },
        x,
        {
          begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            u,
            e.REGEXP_MODE,
            {
              className: "function",
              begin: M,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: !0,
                    },
                    {
                      begin: /\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: a,
                      contains: _,
                    },
                  ],
                },
              ],
            },
            { begin: /,/, relevance: 0 },
            { match: /\s+/, relevance: 0 },
            {
              variants: [
                { begin: "<>", end: "</>" },
                { begin: t.begin, "on:begin": t.isTrulyOpeningTag, end: t.end },
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: t.begin,
                  end: t.end,
                  skip: !0,
                  contains: ["self"],
                },
              ],
            },
          ],
        },
        y,
        {
          beginKeywords: "while if switch catch for",
        },
        {
          begin:
            "\\b(?!function)" +
            e.UNDERSCORE_IDENT_RE +
            "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [
            h,
            e.inherit(e.TITLE_MODE, { begin: n, className: "title.function" }),
          ],
        },
        { match: /\.\.\./, relevance: 0 },
        v,
        { match: "\\$" + n, relevance: 0 },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [h],
        },
        N,
        {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant",
        },
        f,
        O,
        { match: /\$[(.]/ },
      ],
    };
  }
  const ye = (e) => b(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
    Ne = ["Protocol", "Type"].map(ye),
    we = ["init", "self"].map(ye),
    ve = ["Any", "Self"],
    Oe = [
      "actor",
      "associatedtype",
      "async",
      "await",
      /as\?/,
      /as!/,
      "as",
      "break",
      "case",
      "catch",
      "class",
      "continue",
      "convenience",
      "default",
      "defer",
      "deinit",
      "didSet",
      "do",
      "dynamic",
      "else",
      "enum",
      "extension",
      "fallthrough",
      /fileprivate\(set\)/,
      "fileprivate",
      "final",
      "for",
      "func",
      "get",
      "guard",
      "if",
      "import",
      "indirect",
      "infix",
      /init\?/,
      /init!/,
      "inout",
      /internal\(set\)/,
      "internal",
      "in",
      "is",
      "lazy",
      "let",
      "mutating",
      "nonmutating",
      /open\(set\)/,
      "open",
      "operator",
      "optional",
      "override",
      "postfix",
      "precedencegroup",
      "prefix",
      /private\(set\)/,
      "private",
      "protocol",
      /public\(set\)/,
      "public",
      "repeat",
      "required",
      "rethrows",
      "return",
      "set",
      "some",
      "static",
      "struct",
      "subscript",
      "super",
      "switch",
      "throws",
      "throw",
      /try\?/,
      /try!/,
      "try",
      "typealias",
      /unowned\(safe\)/,
      /unowned\(unsafe\)/,
      "unowned",
      "var",
      "weak",
      "where",
      "while",
      "willSet",
    ],
    Me = ["false", "nil", "true"],
    xe = [
      "assignment",
      "associativity",
      "higherThan",
      "left",
      "lowerThan",
      "none",
      "right",
    ],
    Se = [
      "#colorLiteral",
      "#column",
      "#dsohandle",
      "#else",
      "#elseif",
      "#endif",
      "#error",
      "#file",
      "#fileID",
      "#fileLiteral",
      "#filePath",
      "#function",
      "#if",
      "#imageLiteral",
      "#keyPath",
      "#line",
      "#selector",
      "#sourceLocation",
      "#warn_unqualified_access",
      "#warning",
    ],
    ke = [
      "abs",
      "all",
      "any",
      "assert",
      "assertionFailure",
      "debugPrint",
      "dump",
      "fatalError",
      "getVaList",
      "isKnownUniquelyReferenced",
      "max",
      "min",
      "numericCast",
      "pointwiseMax",
      "pointwiseMin",
      "precondition",
      "preconditionFailure",
      "print",
      "readLine",
      "repeatElement",
      "sequence",
      "stride",
      "swap",
      "swift_unboxFromSwiftValueWithType",
      "transcode",
      "type",
      "unsafeBitCast",
      "unsafeDowncast",
      "withExtendedLifetime",
      "withUnsafeMutablePointer",
      "withUnsafePointer",
      "withVaList",
      "withoutActuallyEscaping",
      "zip",
    ],
    Ae = m(
      /[/=\-+!*%<>&|^~?]/,
      /[\u00A1-\u00A7]/,
      /[\u00A9\u00AB]/,
      /[\u00AC\u00AE]/,
      /[\u00B0\u00B1]/,
      /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
      /[\u2016-\u2017]/,
      /[\u2020-\u2027]/,
      /[\u2030-\u203E]/,
      /[\u2041-\u2053]/,
      /[\u2055-\u205E]/,
      /[\u2190-\u23FF]/,
      /[\u2500-\u2775]/,
      /[\u2794-\u2BFF]/,
      /[\u2E00-\u2E7F]/,
      /[\u3001-\u3003]/,
      /[\u3008-\u3020]/,
      /[\u3030]/
    ),
    Ce = m(
      Ae,
      /[\u0300-\u036F]/,
      /[\u1DC0-\u1DFF]/,
      /[\u20D0-\u20FF]/,
      /[\uFE00-\uFE0F]/,
      /[\uFE20-\uFE2F]/
    ),
    Te = b(Ae, Ce, "*"),
    Re = m(
      /[a-zA-Z_]/,
      /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
      /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
      /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
      /[\u1E00-\u1FFF]/,
      /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
      /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
      /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
      /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
      /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
      /[\uFE47-\uFEFE\uFF00-\uFFFD]/
    ),
    De = m(Re, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    Ie = b(Re, De, "*"),
    Le = b(/[A-Z]/, De, "*"),
    Be = [
      "autoclosure",
      b(/convention\(/, m("swift", "block", "c"), /\)/),
      "discardableResult",
      "dynamicCallable",
      "dynamicMemberLookup",
      "escaping",
      "frozen",
      "GKInspectable",
      "IBAction",
      "IBDesignable",
      "IBInspectable",
      "IBOutlet",
      "IBSegueAction",
      "inlinable",
      "main",
      "nonobjc",
      "NSApplicationMain",
      "NSCopying",
      "NSManaged",
      b(/objc\(/, Ie, /\)/),
      "objc",
      "objcMembers",
      "propertyWrapper",
      "requires_stored_property_inits",
      "resultBuilder",
      "testable",
      "UIApplicationMain",
      "unknown",
      "usableFromInline",
    ],
    $e = [
      "iOS",
      "iOSApplicationExtension",
      "macOS",
      "macOSApplicationExtension",
      "macCatalyst",
      "macCatalystApplicationExtension",
      "watchOS",
      "watchOSApplicationExtension",
      "tvOS",
      "tvOSApplicationExtension",
      "swift",
    ];
  var ze = Object.freeze({
    __proto__: null,
    grmr_bash: (e) => {
      const n = {},
        t = {
          begin: /\$\{/,
          end: /\}/,
          contains: ["self", { begin: /:-/, contains: [n] }],
        };
      Object.assign(n, {
        className: "variable",
        variants: [
          {
            begin: b(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])"),
          },
          t,
        ],
      });
      const a = {
          className: "subst",
          begin: /\$\(/,
          end: /\)/,
          contains: [e.BACKSLASH_ESCAPE],
        },
        i = {
          begin: /<<-?\s*(?=\w+)/,
          starts: {
            contains: [
              e.END_SAME_AS_BEGIN({
                begin: /(\w+)/,
                end: /(\w+)/,
                className: "string",
              }),
            ],
          },
        },
        s = {
          className: "string",
          begin: /"/,
          end: /"/,
          contains: [e.BACKSLASH_ESCAPE, n, a],
        };
      a.contains.push(s);
      const r = {
          begin: /\$\(\(/,
          end: /\)\)/,
          contains: [
            { begin: /\d+#[0-9a-f]+/, className: "number" },
            e.NUMBER_MODE,
            n,
          ],
        },
        o = e.SHEBANG({
          binary: "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",
          relevance: 10,
        }),
        l = {
          className: "function",
          begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
          returnBegin: !0,
          contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
          relevance: 0,
        };
      return {
        name: "Bash",
        aliases: ["sh"],
        keywords: {
          $pattern: /\b[a-z._-]+\b/,
          keyword: [
            "if",
            "then",
            "else",
            "elif",
            "fi",
            "for",
            "while",
            "in",
            "do",
            "done",
            "case",
            "esac",
            "function",
          ],
          literal: ["true", "false"],
          built_in:
            "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
        },
        contains: [
          o,
          e.SHEBANG(),
          l,
          r,
          e.HASH_COMMENT_MODE,
          i,
          s,
          { className: "", begin: /\\"/ },
          { className: "string", begin: /'/, end: /'/ },
          n,
        ],
      };
    },
    grmr_c: (e) => {
      const n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
        t = "[a-zA-Z_]\\w*::",
        a =
          "(decltype\\(auto\\)|" + u(t) + "[a-zA-Z_]\\w*" + u("<[^<>]+>") + ")",
        i = {
          className: "type",
          variants: [
            { begin: "\\b[a-z\\d_]*_t\\b" },
            {
              match: /\batomic_[a-z]{3,6}\b/,
            },
          ],
        },
        s = {
          className: "string",
          variants: [
            {
              begin: '(u8?|U|L)?"',
              end: '"',
              illegal: "\\n",
              contains: [e.BACKSLASH_ESCAPE],
            },
            {
              begin:
                "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
              end: "'",
              illegal: ".",
            },
            e.END_SAME_AS_BEGIN({
              begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
              end: /\)([^()\\ ]{0,16})"/,
            }),
          ],
        },
        r = {
          className: "number",
          variants: [
            { begin: "\\b(0b[01']+)" },
            {
              begin:
                "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
            },
            {
              begin:
                "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
            },
          ],
          relevance: 0,
        },
        o = {
          className: "meta",
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: {
            keyword:
              "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
          },
          contains: [
            { begin: /\\\n/, relevance: 0 },
            e.inherit(s, { className: "string" }),
            {
              className: "string",
              begin: /<.*?>/,
            },
            n,
            e.C_BLOCK_COMMENT_MODE,
          ],
        },
        l = {
          className: "title",
          begin: u(t) + e.IDENT_RE,
          relevance: 0,
        },
        c = u(t) + e.IDENT_RE + "\\s*\\(",
        d = {
          keyword: [
            "asm",
            "auto",
            "break",
            "case",
            "const",
            "continue",
            "default",
            "do",
            "else",
            "enum",
            "extern",
            "for",
            "fortran",
            "goto",
            "if",
            "inline",
            "register",
            "restrict",
            "return",
            "sizeof",
            "static",
            "struct",
            "switch",
            "typedef",
            "union",
            "volatile",
            "while",
            "_Alignas",
            "_Alignof",
            "_Atomic",
            "_Generic",
            "_Noreturn",
            "_Static_assert",
            "_Thread_local",
            "alignas",
            "alignof",
            "noreturn",
            "static_assert",
            "thread_local",
            "_Pragma",
          ],
          type: [
            "float",
            "double",
            "signed",
            "unsigned",
            "int",
            "short",
            "long",
            "char",
            "void",
            "_Bool",
            "_Complex",
            "_Imaginary",
            "_Decimal32",
            "_Decimal64",
            "_Decimal128",
            "complex",
            "bool",
            "imaginary",
          ],
          literal: "true false NULL",
          built_in:
            "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
        },
        g = [o, i, n, e.C_BLOCK_COMMENT_MODE, r, s],
        b = {
          variants: [
            { begin: /=/, end: /;/ },
            {
              begin: /\(/,
              end: /\)/,
            },
            { beginKeywords: "new throw return else", end: /;/ },
          ],
          keywords: d,
          contains: g.concat([
            {
              begin: /\(/,
              end: /\)/,
              keywords: d,
              contains: g.concat(["self"]),
              relevance: 0,
            },
          ]),
          relevance: 0,
        },
        m = {
          begin: "(" + a + "[\\*&\\s]+)+" + c,
          returnBegin: !0,
          end: /[{;=]/,
          excludeEnd: !0,
          keywords: d,
          illegal: /[^\w\s\*&:<>.]/,
          contains: [
            { begin: "decltype\\(auto\\)", keywords: d, relevance: 0 },
            {
              begin: c,
              returnBegin: !0,
              contains: [
                e.inherit(l, {
                  className: "title.function",
                }),
              ],
              relevance: 0,
            },
            { relevance: 0, match: /,/ },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: d,
              relevance: 0,
              contains: [
                n,
                e.C_BLOCK_COMMENT_MODE,
                s,
                r,
                i,
                {
                  begin: /\(/,
                  end: /\)/,
                  keywords: d,
                  relevance: 0,
                  contains: ["self", n, e.C_BLOCK_COMMENT_MODE, s, r, i],
                },
              ],
            },
            i,
            n,
            e.C_BLOCK_COMMENT_MODE,
            o,
          ],
        };
      return {
        name: "C",
        aliases: ["h"],
        keywords: d,
        disableAutodetect: !0,
        illegal: "</",
        contains: [].concat(b, m, g, [
          o,
          {
            begin: e.IDENT_RE + "::",
            keywords: d,
          },
          {
            className: "class",
            beginKeywords: "enum class struct union",
            end: /[{;:<>=]/,
            contains: [
              {
                beginKeywords: "final class struct",
              },
              e.TITLE_MODE,
            ],
          },
        ]),
        exports: { preprocessor: o, strings: s, keywords: d },
      };
    },
    grmr_cpp: (e) => {
      const n = e.COMMENT("//", "$", {
          contains: [
            {
              begin: /\\\n/,
            },
          ],
        }),
        t = "[a-zA-Z_]\\w*::",
        a =
          "(?!struct)(decltype\\(auto\\)|" +
          u(t) +
          "[a-zA-Z_]\\w*" +
          u("<[^<>]+>") +
          ")",
        i = {
          className: "type",
          begin: "\\b[a-z\\d_]*_t\\b",
        },
        s = {
          className: "string",
          variants: [
            {
              begin: '(u8?|U|L)?"',
              end: '"',
              illegal: "\\n",
              contains: [e.BACKSLASH_ESCAPE],
            },
            {
              begin:
                "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
              end: "'",
              illegal: ".",
            },
            e.END_SAME_AS_BEGIN({
              begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
              end: /\)([^()\\ ]{0,16})"/,
            }),
          ],
        },
        r = {
          className: "number",
          variants: [
            { begin: "\\b(0b[01']+)" },
            {
              begin:
                "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
            },
            {
              begin:
                "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
            },
          ],
          relevance: 0,
        },
        o = {
          className: "meta",
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: {
            keyword:
              "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
          },
          contains: [
            { begin: /\\\n/, relevance: 0 },
            e.inherit(s, { className: "string" }),
            {
              className: "string",
              begin: /<.*?>/,
            },
            n,
            e.C_BLOCK_COMMENT_MODE,
          ],
        },
        l = {
          className: "title",
          begin: u(t) + e.IDENT_RE,
          relevance: 0,
        },
        c = u(t) + e.IDENT_RE + "\\s*\\(",
        d = {
          type: [
            "bool",
            "char",
            "char16_t",
            "char32_t",
            "char8_t",
            "double",
            "float",
            "int",
            "long",
            "short",
            "void",
            "wchar_t",
          ],
          keyword: [
            "alignas",
            "alignof",
            "and",
            "and_eq",
            "asm",
            "atomic_cancel",
            "atomic_commit",
            "atomic_noexcept",
            "auto",
            "bitand",
            "bitor",
            "break",
            "case",
            "catch",
            "class",
            "co_await",
            "co_return",
            "co_yield",
            "compl",
            "concept",
            "const",
            "const_cast|10",
            "consteval",
            "constexpr",
            "constinit",
            "continue",
            "decltype",
            "default",
            "delete",
            "do",
            "dynamic_cast|10",
            "else",
            "enum",
            "explicit",
            "export",
            "extern",
            "false",
            "final",
            "for",
            "friend",
            "goto",
            "if",
            "import",
            "inline",
            "module",
            "mutable",
            "namespace",
            "new",
            "noexcept",
            "not",
            "not_eq",
            "nullptr",
            "operator",
            "or",
            "or_eq",
            "override",
            "private",
            "protected",
            "public",
            "reflexpr",
            "register",
            "reinterpret_cast|10",
            "requires",
            "return",
            "signed",
            "sizeof",
            "static",
            "static_assert",
            "static_cast|10",
            "struct",
            "switch",
            "synchronized",
            "template",
            "this",
            "thread_local",
            "throw",
            "transaction_safe",
            "transaction_safe_dynamic",
            "true",
            "try",
            "typedef",
            "typeid",
            "typename",
            "union",
            "unsigned",
            "using",
            "virtual",
            "volatile",
            "while",
            "xor",
            "xor_eq,",
          ],
          literal: ["NULL", "false", "nullopt", "nullptr", "true"],
          built_in: ["_Pragma"],
          _type_hints: [
            "any",
            "auto_ptr",
            "barrier",
            "binary_semaphore",
            "bitset",
            "complex",
            "condition_variable",
            "condition_variable_any",
            "counting_semaphore",
            "deque",
            "false_type",
            "future",
            "imaginary",
            "initializer_list",
            "istringstream",
            "jthread",
            "latch",
            "lock_guard",
            "multimap",
            "multiset",
            "mutex",
            "optional",
            "ostringstream",
            "packaged_task",
            "pair",
            "promise",
            "priority_queue",
            "queue",
            "recursive_mutex",
            "recursive_timed_mutex",
            "scoped_lock",
            "set",
            "shared_future",
            "shared_lock",
            "shared_mutex",
            "shared_timed_mutex",
            "shared_ptr",
            "stack",
            "string_view",
            "stringstream",
            "timed_mutex",
            "thread",
            "true_type",
            "tuple",
            "unique_lock",
            "unique_ptr",
            "unordered_map",
            "unordered_multimap",
            "unordered_multiset",
            "unordered_set",
            "variant",
            "vector",
            "weak_ptr",
            "wstring",
            "wstring_view",
          ],
        },
        m = {
          className: "function.dispatch",
          relevance: 0,
          keywords: {
            _hint: [
              "abort",
              "abs",
              "acos",
              "apply",
              "as_const",
              "asin",
              "atan",
              "atan2",
              "calloc",
              "ceil",
              "cerr",
              "cin",
              "clog",
              "cos",
              "cosh",
              "cout",
              "declval",
              "endl",
              "exchange",
              "exit",
              "exp",
              "fabs",
              "floor",
              "fmod",
              "forward",
              "fprintf",
              "fputs",
              "free",
              "frexp",
              "fscanf",
              "future",
              "invoke",
              "isalnum",
              "isalpha",
              "iscntrl",
              "isdigit",
              "isgraph",
              "islower",
              "isprint",
              "ispunct",
              "isspace",
              "isupper",
              "isxdigit",
              "labs",
              "launder",
              "ldexp",
              "log",
              "log10",
              "make_pair",
              "make_shared",
              "make_shared_for_overwrite",
              "make_tuple",
              "make_unique",
              "malloc",
              "memchr",
              "memcmp",
              "memcpy",
              "memset",
              "modf",
              "move",
              "pow",
              "printf",
              "putchar",
              "puts",
              "realloc",
              "scanf",
              "sin",
              "sinh",
              "snprintf",
              "sprintf",
              "sqrt",
              "sscanf",
              "std",
              "stderr",
              "stdin",
              "stdout",
              "strcat",
              "strchr",
              "strcmp",
              "strcpy",
              "strcspn",
              "strlen",
              "strncat",
              "strncmp",
              "strncpy",
              "strpbrk",
              "strrchr",
              "strspn",
              "strstr",
              "swap",
              "tan",
              "tanh",
              "terminate",
              "to_underlying",
              "tolower",
              "toupper",
              "vfprintf",
              "visit",
              "vprintf",
              "vsprintf",
            ],
          },
          begin: b(
            /\b/,
            /(?!decltype)/,
            /(?!if)/,
            /(?!for)/,
            /(?!while)/,
            e.IDENT_RE,
            g(/(<[^<>]+>|)\s*\(/)
          ),
        },
        p = [m, o, i, n, e.C_BLOCK_COMMENT_MODE, r, s],
        _ = {
          variants: [
            { begin: /=/, end: /;/ },
            {
              begin: /\(/,
              end: /\)/,
            },
            { beginKeywords: "new throw return else", end: /;/ },
          ],
          keywords: d,
          contains: p.concat([
            {
              begin: /\(/,
              end: /\)/,
              keywords: d,
              contains: p.concat(["self"]),
              relevance: 0,
            },
          ]),
          relevance: 0,
        },
        h = {
          className: "function",
          begin: "(" + a + "[\\*&\\s]+)+" + c,
          returnBegin: !0,
          end: /[{;=]/,
          excludeEnd: !0,
          keywords: d,
          illegal: /[^\w\s\*&:<>.]/,
          contains: [
            { begin: "decltype\\(auto\\)", keywords: d, relevance: 0 },
            { begin: c, returnBegin: !0, contains: [l], relevance: 0 },
            {
              begin: /::/,
              relevance: 0,
            },
            { begin: /:/, endsWithParent: !0, contains: [s, r] },
            {
              relevance: 0,
              match: /,/,
            },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: d,
              relevance: 0,
              contains: [
                n,
                e.C_BLOCK_COMMENT_MODE,
                s,
                r,
                i,
                {
                  begin: /\(/,
                  end: /\)/,
                  keywords: d,
                  relevance: 0,
                  contains: ["self", n, e.C_BLOCK_COMMENT_MODE, s, r, i],
                },
              ],
            },
            i,
            n,
            e.C_BLOCK_COMMENT_MODE,
            o,
          ],
        };
      return {
        name: "C++",
        aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
        keywords: d,
        illegal: "</",
        classNameAliases: { "function.dispatch": "built_in" },
        contains: [].concat(_, h, m, p, [
          o,
          {
            begin:
              "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<",
            end: ">",
            keywords: d,
            contains: ["self", i],
          },
          { begin: e.IDENT_RE + "::", keywords: d },
          {
            match: [
              /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
              /\s+/,
              /\w+/,
            ],
            className: { 1: "keyword", 3: "title.class" },
          },
        ]),
      };
    },
    grmr_csharp: (e) => {
      const n = {
          keyword: [
            "abstract",
            "as",
            "base",
            "break",
            "case",
            "catch",
            "class",
            "const",
            "continue",
            "do",
            "else",
            "event",
            "explicit",
            "extern",
            "finally",
            "fixed",
            "for",
            "foreach",
            "goto",
            "if",
            "implicit",
            "in",
            "interface",
            "internal",
            "is",
            "lock",
            "namespace",
            "new",
            "operator",
            "out",
            "override",
            "params",
            "private",
            "protected",
            "public",
            "readonly",
            "record",
            "ref",
            "return",
            "sealed",
            "sizeof",
            "stackalloc",
            "static",
            "struct",
            "switch",
            "this",
            "throw",
            "try",
            "typeof",
            "unchecked",
            "unsafe",
            "using",
            "virtual",
            "void",
            "volatile",
            "while",
          ].concat([
            "add",
            "alias",
            "and",
            "ascending",
            "async",
            "await",
            "by",
            "descending",
            "equals",
            "from",
            "get",
            "global",
            "group",
            "init",
            "into",
            "join",
            "let",
            "nameof",
            "not",
            "notnull",
            "on",
            "or",
            "orderby",
            "partial",
            "remove",
            "select",
            "set",
            "unmanaged",
            "value|0",
            "var",
            "when",
            "where",
            "with",
            "yield",
          ]),
          built_in: [
            "bool",
            "byte",
            "char",
            "decimal",
            "delegate",
            "double",
            "dynamic",
            "enum",
            "float",
            "int",
            "long",
            "nint",
            "nuint",
            "object",
            "sbyte",
            "short",
            "string",
            "ulong",
            "uint",
            "ushort",
          ],
          literal: ["default", "false", "null", "true"],
        },
        t = e.inherit(e.TITLE_MODE, {
          begin: "[a-zA-Z](\\.?\\w)*",
        }),
        a = {
          className: "number",
          variants: [
            {
              begin: "\\b(0b[01']+)",
            },
            {
              begin:
                "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)",
            },
            {
              begin:
                "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
            },
          ],
          relevance: 0,
        },
        i = {
          className: "string",
          begin: '@"',
          end: '"',
          contains: [{ begin: '""' }],
        },
        s = e.inherit(i, { illegal: /\n/ }),
        r = { className: "subst", begin: /\{/, end: /\}/, keywords: n },
        o = e.inherit(r, { illegal: /\n/ }),
        l = {
          className: "string",
          begin: /\$"/,
          end: '"',
          illegal: /\n/,
          contains: [
            { begin: /\{\{/ },
            { begin: /\}\}/ },
            e.BACKSLASH_ESCAPE,
            o,
          ],
        },
        c = {
          className: "string",
          begin: /\$@"/,
          end: '"',
          contains: [
            {
              begin: /\{\{/,
            },
            { begin: /\}\}/ },
            { begin: '""' },
            r,
          ],
        },
        d = e.inherit(c, {
          illegal: /\n/,
          contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, o],
        });
      (r.contains = [
        c,
        l,
        i,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        a,
        e.C_BLOCK_COMMENT_MODE,
      ]),
        (o.contains = [
          d,
          l,
          s,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          a,
          e.inherit(e.C_BLOCK_COMMENT_MODE, {
            illegal: /\n/,
          }),
        ]);
      const g = {
          variants: [c, l, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
        },
        u = {
          begin: "<",
          end: ">",
          contains: [{ beginKeywords: "in out" }, t],
        },
        b =
          e.IDENT_RE +
          "(<" +
          e.IDENT_RE +
          "(\\s*,\\s*" +
          e.IDENT_RE +
          ")*>)?(\\[\\])?",
        m = {
          begin: "@" + e.IDENT_RE,
          relevance: 0,
        };
      return {
        name: "C#",
        aliases: ["cs", "c#"],
        keywords: n,
        illegal: /::/,
        contains: [
          e.COMMENT("///", "$", {
            returnBegin: !0,
            contains: [
              {
                className: "doctag",
                variants: [
                  { begin: "///", relevance: 0 },
                  {
                    begin: "\x3c!--|--\x3e",
                  },
                  { begin: "</?", end: ">" },
                ],
              },
            ],
          }),
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            className: "meta",
            begin: "#",
            end: "$",
            keywords: {
              keyword:
                "if else elif endif define undef warning error line region endregion pragma checksum",
            },
          },
          g,
          a,
          {
            beginKeywords: "class interface",
            relevance: 0,
            end: /[{;=]/,
            illegal: /[^\s:,]/,
            contains: [
              { beginKeywords: "where class" },
              t,
              u,
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
            ],
          },
          {
            beginKeywords: "namespace",
            relevance: 0,
            end: /[{;=]/,
            illegal: /[^\s:]/,
            contains: [t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
          },
          {
            beginKeywords: "record",
            relevance: 0,
            end: /[{;=]/,
            illegal: /[^\s:]/,
            contains: [t, u, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
          },
          {
            className: "meta",
            begin: "^\\s*\\[(?=[\\w])",
            excludeBegin: !0,
            end: "\\]",
            excludeEnd: !0,
            contains: [
              {
                className: "string",
                begin: /"/,
                end: /"/,
              },
            ],
          },
          {
            beginKeywords: "new return throw await else",
            relevance: 0,
          },
          {
            className: "function",
            begin: "(" + b + "\\s+)+" + e.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
            returnBegin: !0,
            end: /\s*[{;=]/,
            excludeEnd: !0,
            keywords: n,
            contains: [
              {
                beginKeywords:
                  "public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
                relevance: 0,
              },
              {
                begin: e.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
                returnBegin: !0,
                contains: [e.TITLE_MODE, u],
                relevance: 0,
              },
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: n,
                relevance: 0,
                contains: [g, a, e.C_BLOCK_COMMENT_MODE],
              },
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
            ],
          },
          m,
        ],
      };
    },
    grmr_css: (e) => {
      const n = ee(e),
        t = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
      return {
        name: "CSS",
        case_insensitive: !0,
        illegal: /[=|'\$]/,
        keywords: { keyframePosition: "from to" },
        classNameAliases: { keyframePosition: "selector-tag" },
        contains: [
          e.C_BLOCK_COMMENT_MODE,
          { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
          n.CSS_NUMBER_MODE,
          { className: "selector-id", begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
          {
            className: "selector-class",
            begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
            relevance: 0,
          },
          n.ATTRIBUTE_SELECTOR_MODE,
          {
            className: "selector-pseudo",
            variants: [
              {
                begin: ":(" + ae.join("|") + ")",
              },
              { begin: "::(" + ie.join("|") + ")" },
            ],
          },
          n.CSS_VARIABLE,
          {
            className: "attribute",
            begin: "\\b(" + se.join("|") + ")\\b",
          },
          {
            begin: ":",
            end: "[;}]",
            contains: [
              n.HEXCOLOR,
              n.IMPORTANT,
              n.CSS_NUMBER_MODE,
              ...t,
              {
                begin: /(url|data-uri)\(/,
                end: /\)/,
                relevance: 0,
                keywords: { built_in: "url data-uri" },
                contains: [
                  {
                    className: "string",
                    begin: /[^)]/,
                    endsWithParent: !0,
                    excludeEnd: !0,
                  },
                ],
              },
              { className: "built_in", begin: /[\w-]+(?=\()/ },
            ],
          },
          {
            begin: g(/@/),
            end: "[{;]",
            relevance: 0,
            illegal: /:/,
            contains: [
              { className: "keyword", begin: /@-?\w[\w]*(-\w+)*/ },
              {
                begin: /\s/,
                endsWithParent: !0,
                excludeEnd: !0,
                relevance: 0,
                keywords: {
                  $pattern: /[a-z-]+/,
                  keyword: "and or not only",
                  attribute: te.join(" "),
                },
                contains: [
                  {
                    begin: /[a-z-]+(?=:)/,
                    className: "attribute",
                  },
                  ...t,
                  n.CSS_NUMBER_MODE,
                ],
              },
            ],
          },
          {
            className: "selector-tag",
            begin: "\\b(" + ne.join("|") + ")\\b",
          },
        ],
      };
    },
    grmr_diff: (e) => ({
      name: "Diff",
      aliases: ["patch"],
      contains: [
        {
          className: "meta",
          relevance: 10,
          match: m(
            /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
            /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
            /^--- +\d+,\d+ +----$/
          ),
        },
        {
          className: "comment",
          variants: [
            {
              begin: m(
                /Index: /,
                /^index/,
                /={3,}/,
                /^-{3}/,
                /^\*{3} /,
                /^\+{3}/,
                /^diff --git/
              ),
              end: /$/,
            },
            { match: /^\*{15}$/ },
          ],
        },
        { className: "addition", begin: /^\+/, end: /$/ },
        {
          className: "deletion",
          begin: /^-/,
          end: /$/,
        },
        { className: "addition", begin: /^!/, end: /$/ },
      ],
    }),
    grmr_go: (e) => {
      const n = {
        keyword: [
          "break",
          "default",
          "func",
          "interface",
          "select",
          "case",
          "map",
          "struct",
          "chan",
          "else",
          "goto",
          "package",
          "switch",
          "const",
          "fallthrough",
          "if",
          "range",
          "type",
          "continue",
          "for",
          "import",
          "return",
          "var",
          "go",
          "defer",
          "bool",
          "byte",
          "complex64",
          "complex128",
          "float32",
          "float64",
          "int8",
          "int16",
          "int32",
          "int64",
          "string",
          "uint8",
          "uint16",
          "uint32",
          "uint64",
          "int",
          "uint",
          "uintptr",
          "rune",
        ],
        literal: ["true", "false", "iota", "nil"],
        built_in: [
          "append",
          "cap",
          "close",
          "complex",
          "copy",
          "imag",
          "len",
          "make",
          "new",
          "panic",
          "print",
          "println",
          "real",
          "recover",
          "delete",
        ],
      };
      return {
        name: "Go",
        aliases: ["golang"],
        keywords: n,
        illegal: "</",
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            className: "string",
            variants: [
              e.QUOTE_STRING_MODE,
              e.APOS_STRING_MODE,
              { begin: "`", end: "`" },
            ],
          },
          {
            className: "number",
            variants: [
              { begin: e.C_NUMBER_RE + "[i]", relevance: 1 },
              e.C_NUMBER_MODE,
            ],
          },
          { begin: /:=/ },
          {
            className: "function",
            beginKeywords: "func",
            end: "\\s*(\\{|$)",
            excludeEnd: !0,
            contains: [
              e.TITLE_MODE,
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: n,
                illegal: /["']/,
              },
            ],
          },
        ],
      };
    },
    grmr_ini: (e) => {
      const n = {
          className: "number",
          relevance: 0,
          variants: [
            { begin: /([+-]+)?[\d]+_[\d_]+/ },
            {
              begin: e.NUMBER_RE,
            },
          ],
        },
        t = e.COMMENT();
      t.variants = [
        { begin: /;/, end: /$/ },
        { begin: /#/, end: /$/ },
      ];
      const a = {
          className: "variable",
          variants: [
            { begin: /\$[\w\d"][\w\d_]*/ },
            {
              begin: /\$\{(.*?)\}/,
            },
          ],
        },
        i = { className: "literal", begin: /\bon|off|true|false|yes|no\b/ },
        s = {
          className: "string",
          contains: [e.BACKSLASH_ESCAPE],
          variants: [
            { begin: "'''", end: "'''", relevance: 10 },
            {
              begin: '"""',
              end: '"""',
              relevance: 10,
            },
            { begin: '"', end: '"' },
            { begin: "'", end: "'" },
          ],
        },
        r = {
          begin: /\[/,
          end: /\]/,
          contains: [t, i, a, s, n, "self"],
          relevance: 0,
        },
        o = m(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/);
      return {
        name: "TOML, also INI",
        aliases: ["toml"],
        case_insensitive: !0,
        illegal: /\S/,
        contains: [
          t,
          {
            className: "section",
            begin: /\[+/,
            end: /\]+/,
          },
          {
            begin: b(o, "(\\s*\\.\\s*", o, ")*", g(/\s*=\s*[^#\s]/)),
            className: "attr",
            starts: {
              end: /$/,
              contains: [t, r, i, a, s, n],
            },
          },
        ],
      };
    },
    grmr_java: (e) => {
      const n = "[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",
        t = n + de("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2),
        a = {
          keyword: [
            "synchronized",
            "abstract",
            "private",
            "var",
            "static",
            "if",
            "const ",
            "for",
            "while",
            "strictfp",
            "finally",
            "protected",
            "import",
            "native",
            "final",
            "void",
            "enum",
            "else",
            "break",
            "transient",
            "catch",
            "instanceof",
            "volatile",
            "case",
            "assert",
            "package",
            "default",
            "public",
            "try",
            "switch",
            "continue",
            "throws",
            "protected",
            "public",
            "private",
            "module",
            "requires",
            "exports",
            "do",
          ],
          literal: ["false", "true", "null"],
          type: [
            "char",
            "boolean",
            "long",
            "float",
            "int",
            "byte",
            "short",
            "double",
          ],
          built_in: ["super", "this"],
        },
        i = {
          className: "meta",
          begin: "@" + n,
          contains: [
            {
              begin: /\(/,
              end: /\)/,
              contains: ["self"],
            },
          ],
        },
        s = {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: a,
          relevance: 0,
          contains: [e.C_BLOCK_COMMENT_MODE],
          endsParent: !0,
        };
      return {
        name: "Java",
        aliases: ["jsp"],
        keywords: a,
        illegal: /<\/|#/,
        contains: [
          e.COMMENT("/\\*\\*", "\\*/", {
            relevance: 0,
            contains: [
              { begin: /\w+@/, relevance: 0 },
              { className: "doctag", begin: "@[A-Za-z]+" },
            ],
          }),
          {
            begin: /import java\.[a-z]+\./,
            keywords: "import",
            relevance: 2,
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          {
            match: [
              /\b(?:class|interface|enum|extends|implements|new)/,
              /\s+/,
              n,
            ],
            className: {
              1: "keyword",
              3: "title.class",
            },
          },
          {
            begin: [n, /\s+/, n, /\s+/, /=/],
            className: { 1: "type", 3: "variable", 5: "operator" },
          },
          {
            begin: [/record/, /\s+/, n],
            className: { 1: "keyword", 3: "title.class" },
            contains: [s, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
          },
          {
            beginKeywords: "new throw return else",
            relevance: 0,
          },
          {
            begin: ["(?:" + t + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
            className: {
              2: "title.function",
            },
            keywords: a,
            contains: [
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: a,
                relevance: 0,
                contains: [
                  i,
                  e.APOS_STRING_MODE,
                  e.QUOTE_STRING_MODE,
                  ce,
                  e.C_BLOCK_COMMENT_MODE,
                ],
              },
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
            ],
          },
          ce,
          i,
        ],
      };
    },
    grmr_javascript: Ee,
    grmr_json: (e) => ({
      name: "JSON",
      contains: [
        {
          className: "attr",
          begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
          relevance: 1.01,
        },
        { match: /[{}[\],:]/, className: "punctuation", relevance: 0 },
        e.QUOTE_STRING_MODE,
        {
          beginKeywords: "true false null",
        },
        e.C_NUMBER_MODE,
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
      ],
      illegal: "\\S",
    }),
    grmr_kotlin: (e) => {
      const n = {
          keyword:
            "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
          built_in:
            "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
          literal: "true false null",
        },
        t = { className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "@" },
        a = {
          className: "subst",
          begin: /\$\{/,
          end: /\}/,
          contains: [e.C_NUMBER_MODE],
        },
        i = {
          className: "variable",
          begin: "\\$" + e.UNDERSCORE_IDENT_RE,
        },
        s = {
          className: "string",
          variants: [
            { begin: '"""', end: '"""(?=[^"])', contains: [i, a] },
            {
              begin: "'",
              end: "'",
              illegal: /\n/,
              contains: [e.BACKSLASH_ESCAPE],
            },
            {
              begin: '"',
              end: '"',
              illegal: /\n/,
              contains: [e.BACKSLASH_ESCAPE, i, a],
            },
          ],
        };
      a.contains.push(s);
      const r = {
          className: "meta",
          begin:
            "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" +
            e.UNDERSCORE_IDENT_RE +
            ")?",
        },
        o = {
          className: "meta",
          begin: "@" + e.UNDERSCORE_IDENT_RE,
          contains: [
            {
              begin: /\(/,
              end: /\)/,
              contains: [e.inherit(s, { className: "string" })],
            },
          ],
        },
        l = ce,
        c = e.COMMENT("/\\*", "\\*/", { contains: [e.C_BLOCK_COMMENT_MODE] }),
        d = {
          variants: [
            { className: "type", begin: e.UNDERSCORE_IDENT_RE },
            { begin: /\(/, end: /\)/, contains: [] },
          ],
        },
        g = d;
      return (
        (g.variants[1].contains = [d]),
        (d.variants[1].contains = [g]),
        {
          name: "Kotlin",
          aliases: ["kt", "kts"],
          keywords: n,
          contains: [
            e.COMMENT("/\\*\\*", "\\*/", {
              relevance: 0,
              contains: [{ className: "doctag", begin: "@[A-Za-z]+" }],
            }),
            e.C_LINE_COMMENT_MODE,
            c,
            {
              className: "keyword",
              begin: /\b(break|continue|return|this)\b/,
              starts: { contains: [{ className: "symbol", begin: /@\w+/ }] },
            },
            t,
            r,
            o,
            {
              className: "function",
              beginKeywords: "fun",
              end: "[(]|$",
              returnBegin: !0,
              excludeEnd: !0,
              keywords: n,
              relevance: 5,
              contains: [
                {
                  begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                  returnBegin: !0,
                  relevance: 0,
                  contains: [e.UNDERSCORE_TITLE_MODE],
                },
                {
                  className: "type",
                  begin: /</,
                  end: />/,
                  keywords: "reified",
                  relevance: 0,
                },
                {
                  className: "params",
                  begin: /\(/,
                  end: /\)/,
                  endsParent: !0,
                  keywords: n,
                  relevance: 0,
                  contains: [
                    {
                      begin: /:/,
                      end: /[=,\/]/,
                      endsWithParent: !0,
                      contains: [d, e.C_LINE_COMMENT_MODE, c],
                      relevance: 0,
                    },
                    e.C_LINE_COMMENT_MODE,
                    c,
                    r,
                    o,
                    s,
                    e.C_NUMBER_MODE,
                  ],
                },
                c,
              ],
            },
            {
              className: "class",
              beginKeywords: "class interface trait",
              end: /[:\{(]|$/,
              excludeEnd: !0,
              illegal: "extends implements",
              contains: [
                {
                  beginKeywords:
                    "public protected internal private constructor",
                },
                e.UNDERSCORE_TITLE_MODE,
                {
                  className: "type",
                  begin: /</,
                  end: />/,
                  excludeBegin: !0,
                  excludeEnd: !0,
                  relevance: 0,
                },
                {
                  className: "type",
                  begin: /[,:]\s*/,
                  end: /[<\(,]|$/,
                  excludeBegin: !0,
                  returnEnd: !0,
                },
                r,
                o,
              ],
            },
            s,
            {
              className: "meta",
              begin: "^#!/usr/bin/env",
              end: "$",
              illegal: "\n",
            },
            l,
          ],
        }
      );
    },
    grmr_less: (e) => {
      const n = ee(e),
        t = re,
        a = "([\\w-]+|@\\{[\\w-]+\\})",
        i = [],
        s = [],
        r = (e) => ({
          className: "string",
          begin: "~?" + e + ".*?" + e,
        }),
        o = (e, n, t) => ({ className: e, begin: n, relevance: t }),
        l = {
          $pattern: /[a-z-]+/,
          keyword: "and or not only",
          attribute: te.join(" "),
        },
        c = {
          begin: "\\(",
          end: "\\)",
          contains: s,
          keywords: l,
          relevance: 0,
        };
      s.push(
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        r("'"),
        r('"'),
        n.CSS_NUMBER_MODE,
        {
          begin: "(url|data-uri)\\(",
          starts: { className: "string", end: "[\\)\\n]", excludeEnd: !0 },
        },
        n.HEXCOLOR,
        c,
        o("variable", "@@?[\\w-]+", 10),
        o("variable", "@\\{[\\w-]+\\}"),
        o("built_in", "~?`[^`]*?`"),
        {
          className: "attribute",
          begin: "[\\w-]+\\s*:",
          end: ":",
          returnBegin: !0,
          excludeEnd: !0,
        },
        n.IMPORTANT
      );
      const d = s.concat({ begin: /\{/, end: /\}/, contains: i }),
        g = {
          beginKeywords: "when",
          endsWithParent: !0,
          contains: [{ beginKeywords: "and not" }].concat(s),
        },
        u = {
          begin: a + "\\s*:",
          returnBegin: !0,
          end: /[;}]/,
          relevance: 0,
          contains: [
            { begin: /-(webkit|moz|ms|o)-/ },
            n.CSS_VARIABLE,
            {
              className: "attribute",
              begin: "\\b(" + se.join("|") + ")\\b",
              end: /(?=:)/,
              starts: {
                endsWithParent: !0,
                illegal: "[<=$]",
                relevance: 0,
                contains: s,
              },
            },
          ],
        },
        b = {
          className: "keyword",
          begin:
            "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
          starts: {
            end: "[;{}]",
            keywords: l,
            returnEnd: !0,
            contains: s,
            relevance: 0,
          },
        },
        m = {
          className: "variable",
          variants: [
            { begin: "@[\\w-]+\\s*:", relevance: 15 },
            {
              begin: "@[\\w-]+",
            },
          ],
          starts: { end: "[;}]", returnEnd: !0, contains: d },
        },
        p = {
          variants: [
            {
              begin: "[\\.#:&\\[>]",
              end: "[;{}]",
            },
            { begin: a, end: /\{/ },
          ],
          returnBegin: !0,
          returnEnd: !0,
          illegal: "[<='$\"]",
          relevance: 0,
          contains: [
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            g,
            o("keyword", "all\\b"),
            o("variable", "@\\{[\\w-]+\\}"),
            {
              begin: "\\b(" + ne.join("|") + ")\\b",
              className: "selector-tag",
            },
            o("selector-tag", a + "%?", 0),
            o("selector-id", "#" + a),
            o("selector-class", "\\." + a, 0),
            o("selector-tag", "&", 0),
            n.ATTRIBUTE_SELECTOR_MODE,
            {
              className: "selector-pseudo",
              begin: ":(" + ae.join("|") + ")",
            },
            {
              className: "selector-pseudo",
              begin: "::(" + ie.join("|") + ")",
            },
            { begin: /\(/, end: /\)/, relevance: 0, contains: d },
            { begin: "!important" },
          ],
        },
        _ = {
          begin: `[\\w-]+:(:)?(${t.join("|")})`,
          returnBegin: !0,
          contains: [p],
        };
      return (
        i.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, b, m, _, u, p),
        {
          name: "Less",
          case_insensitive: !0,
          illegal: "[=>'/<($\"]",
          contains: i,
        }
      );
    },
    grmr_lua: (e) => {
      const n = "\\[=*\\[",
        t = "\\]=*\\]",
        a = { begin: n, end: t, contains: ["self"] },
        i = [
          e.COMMENT("--(?!\\[=*\\[)", "$"),
          e.COMMENT("--\\[=*\\[", t, { contains: [a], relevance: 10 }),
        ];
      return {
        name: "Lua",
        keywords: {
          $pattern: e.UNDERSCORE_IDENT_RE,
          literal: "true false nil",
          keyword:
            "and break do else elseif end for goto if in local not or repeat return then until while",
          built_in:
            "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove",
        },
        contains: i.concat([
          {
            className: "function",
            beginKeywords: "function",
            end: "\\)",
            contains: [
              e.inherit(e.TITLE_MODE, {
                begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",
              }),
              {
                className: "params",
                begin: "\\(",
                endsWithParent: !0,
                contains: i,
              },
            ].concat(i),
          },
          e.C_NUMBER_MODE,
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
          {
            className: "string",
            begin: n,
            end: t,
            contains: [a],
            relevance: 5,
          },
        ]),
      };
    },
    grmr_makefile: (e) => {
      const n = {
          className: "variable",
          variants: [
            {
              begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
              contains: [e.BACKSLASH_ESCAPE],
            },
            { begin: /\$[@%<?\^\+\*]/ },
          ],
        },
        t = {
          className: "string",
          begin: /"/,
          end: /"/,
          contains: [e.BACKSLASH_ESCAPE, n],
        },
        a = {
          className: "variable",
          begin: /\$\([\w-]+\s/,
          end: /\)/,
          keywords: {
            built_in:
              "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value",
          },
          contains: [n],
        },
        i = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" },
        s = {
          className: "section",
          begin: /^[^\s]+:/,
          end: /$/,
          contains: [n],
        };
      return {
        name: "Makefile",
        aliases: ["mk", "mak", "make"],
        keywords: {
          $pattern: /[\w-]+/,
          keyword:
            "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
        },
        contains: [
          e.HASH_COMMENT_MODE,
          n,
          t,
          a,
          i,
          {
            className: "meta",
            begin: /^\.PHONY:/,
            end: /$/,
            keywords: { $pattern: /[\.\w]+/, keyword: ".PHONY" },
          },
          s,
        ],
      };
    },
    grmr_xml: (e) => {
      const n = b(/[A-Z_]/, u(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/),
        t = { className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
        a = {
          begin: /\s/,
          contains: [
            {
              className: "keyword",
              begin: /#?[a-z_][a-z1-9_-]+/,
              illegal: /\n/,
            },
          ],
        },
        i = e.inherit(a, {
          begin: /\(/,
          end: /\)/,
        }),
        s = e.inherit(e.APOS_STRING_MODE, { className: "string" }),
        r = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
        o = {
          endsWithParent: !0,
          illegal: /</,
          relevance: 0,
          contains: [
            { className: "attr", begin: /[A-Za-z0-9._:-]+/, relevance: 0 },
            {
              begin: /=\s*/,
              relevance: 0,
              contains: [
                {
                  className: "string",
                  endsParent: !0,
                  variants: [
                    { begin: /"/, end: /"/, contains: [t] },
                    { begin: /'/, end: /'/, contains: [t] },
                    { begin: /[^\s"'=<>`]+/ },
                  ],
                },
              ],
            },
          ],
        };
      return {
        name: "HTML, XML",
        aliases: [
          "html",
          "xhtml",
          "rss",
          "atom",
          "xjb",
          "xsd",
          "xsl",
          "plist",
          "wsf",
          "svg",
        ],
        case_insensitive: !0,
        contains: [
          {
            className: "meta",
            begin: /<![a-z]/,
            end: />/,
            relevance: 10,
            contains: [
              a,
              r,
              s,
              i,
              {
                begin: /\[/,
                end: /\]/,
                contains: [
                  {
                    className: "meta",
                    begin: /<![a-z]/,
                    end: />/,
                    contains: [a, i, r, s],
                  },
                ],
              },
            ],
          },
          e.COMMENT(/<!--/, /-->/, {
            relevance: 10,
          }),
          { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
          t,
          {
            className: "meta",
            begin: /<\?xml/,
            end: /\?>/,
            relevance: 10,
          },
          {
            className: "tag",
            begin: /<style(?=\s|>)/,
            end: />/,
            keywords: { name: "style" },
            contains: [o],
            starts: {
              end: /<\/style>/,
              returnEnd: !0,
              subLanguage: ["css", "xml"],
            },
          },
          {
            className: "tag",
            begin: /<script(?=\s|>)/,
            end: />/,
            keywords: { name: "script" },
            contains: [o],
            starts: {
              end: /<\/script>/,
              returnEnd: !0,
              subLanguage: ["javascript", "handlebars", "xml"],
            },
          },
          {
            className: "tag",
            begin: /<>|<\/>/,
          },
          {
            className: "tag",
            begin: b(/</, g(b(n, m(/\/>/, />/, /\s/)))),
            end: /\/?>/,
            contains: [
              { className: "name", begin: n, relevance: 0, starts: o },
            ],
          },
          {
            className: "tag",
            begin: b(/<\//, g(b(n, />/))),
            contains: [
              { className: "name", begin: n, relevance: 0 },
              { begin: />/, relevance: 0, endsParent: !0 },
            ],
          },
        ],
      };
    },
    grmr_markdown: (e) => {
      const n = {
          begin: /<\/?[A-Za-z_]/,
          end: ">",
          subLanguage: "xml",
          relevance: 0,
        },
        t = {
          variants: [
            { begin: /\[.+?\]\[.*?\]/, relevance: 0 },
            {
              begin:
                /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
              relevance: 2,
            },
            {
              begin: b(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
              relevance: 2,
            },
            { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
            {
              begin: /\[.*?\]\(.*?\)/,
              relevance: 0,
            },
          ],
          returnBegin: !0,
          contains: [
            { match: /\[(?=\])/ },
            {
              className: "string",
              relevance: 0,
              begin: "\\[",
              end: "\\]",
              excludeBegin: !0,
              returnEnd: !0,
            },
            {
              className: "link",
              relevance: 0,
              begin: "\\]\\(",
              end: "\\)",
              excludeBegin: !0,
              excludeEnd: !0,
            },
            {
              className: "symbol",
              relevance: 0,
              begin: "\\]\\[",
              end: "\\]",
              excludeBegin: !0,
              excludeEnd: !0,
            },
          ],
        },
        a = {
          className: "strong",
          contains: [],
          variants: [
            { begin: /_{2}/, end: /_{2}/ },
            { begin: /\*{2}/, end: /\*{2}/ },
          ],
        },
        i = {
          className: "emphasis",
          contains: [],
          variants: [
            { begin: /\*(?!\*)/, end: /\*/ },
            {
              begin: /_(?!_)/,
              end: /_/,
              relevance: 0,
            },
          ],
        };
      a.contains.push(i), i.contains.push(a);
      let s = [n, t];
      return (
        (a.contains = a.contains.concat(s)),
        (i.contains = i.contains.concat(s)),
        (s = s.concat(a, i)),
        {
          name: "Markdown",
          aliases: ["md", "mkdown", "mkd"],
          contains: [
            {
              className: "section",
              variants: [
                { begin: "^#{1,6}", end: "$", contains: s },
                {
                  begin: "(?=^.+?\\n[=-]{2,}$)",
                  contains: [
                    { begin: "^[=-]*$" },
                    { begin: "^", end: "\\n", contains: s },
                  ],
                },
              ],
            },
            n,
            {
              className: "bullet",
              begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
              end: "\\s+",
              excludeEnd: !0,
            },
            a,
            i,
            { className: "quote", begin: "^>\\s+", contains: s, end: "$" },
            {
              className: "code",
              variants: [
                { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
                {
                  begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*",
                },
                { begin: "```", end: "```+[ ]*$" },
                {
                  begin: "~~~",
                  end: "~~~+[ ]*$",
                },
                { begin: "`.+?`" },
                {
                  begin: "(?=^( {4}|\\t))",
                  contains: [{ begin: "^( {4}|\\t)", end: "(\\n)$" }],
                  relevance: 0,
                },
              ],
            },
            {
              begin: "^[-\\*]{3,}",
              end: "$",
            },
            t,
            {
              begin: /^\[[^\n]+\]:/,
              returnBegin: !0,
              contains: [
                {
                  className: "symbol",
                  begin: /\[/,
                  end: /\]/,
                  excludeBegin: !0,
                  excludeEnd: !0,
                },
                {
                  className: "link",
                  begin: /:\s*/,
                  end: /$/,
                  excludeBegin: !0,
                },
              ],
            },
          ],
        }
      );
    },
    grmr_objectivec: (e) => {
      const n = /[a-zA-Z@][a-zA-Z0-9_]*/,
        t = {
          $pattern: n,
          keyword: ["@interface", "@class", "@protocol", "@implementation"],
        };
      return {
        name: "Objective-C",
        aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
        keywords: {
          $pattern: n,
          keyword: [
            "int",
            "float",
            "while",
            "char",
            "export",
            "sizeof",
            "typedef",
            "const",
            "struct",
            "for",
            "union",
            "unsigned",
            "long",
            "volatile",
            "static",
            "bool",
            "mutable",
            "if",
            "do",
            "return",
            "goto",
            "void",
            "enum",
            "else",
            "break",
            "extern",
            "asm",
            "case",
            "short",
            "default",
            "double",
            "register",
            "explicit",
            "signed",
            "typename",
            "this",
            "switch",
            "continue",
            "wchar_t",
            "inline",
            "readonly",
            "assign",
            "readwrite",
            "self",
            "@synchronized",
            "id",
            "typeof",
            "nonatomic",
            "super",
            "unichar",
            "IBOutlet",
            "IBAction",
            "strong",
            "weak",
            "copy",
            "in",
            "out",
            "inout",
            "bycopy",
            "byref",
            "oneway",
            "__strong",
            "__weak",
            "__block",
            "__autoreleasing",
            "@private",
            "@protected",
            "@public",
            "@try",
            "@property",
            "@end",
            "@throw",
            "@catch",
            "@finally",
            "@autoreleasepool",
            "@synthesize",
            "@dynamic",
            "@selector",
            "@optional",
            "@required",
            "@encode",
            "@package",
            "@import",
            "@defs",
            "@compatibility_alias",
            "__bridge",
            "__bridge_transfer",
            "__bridge_retained",
            "__bridge_retain",
            "__covariant",
            "__contravariant",
            "__kindof",
            "_Nonnull",
            "_Nullable",
            "_Null_unspecified",
            "__FUNCTION__",
            "__PRETTY_FUNCTION__",
            "__attribute__",
            "getter",
            "setter",
            "retain",
            "unsafe_unretained",
            "nonnull",
            "nullable",
            "null_unspecified",
            "null_resettable",
            "class",
            "instancetype",
            "NS_DESIGNATED_INITIALIZER",
            "NS_UNAVAILABLE",
            "NS_REQUIRES_SUPER",
            "NS_RETURNS_INNER_POINTER",
            "NS_INLINE",
            "NS_AVAILABLE",
            "NS_DEPRECATED",
            "NS_ENUM",
            "NS_OPTIONS",
            "NS_SWIFT_UNAVAILABLE",
            "NS_ASSUME_NONNULL_BEGIN",
            "NS_ASSUME_NONNULL_END",
            "NS_REFINED_FOR_SWIFT",
            "NS_SWIFT_NAME",
            "NS_SWIFT_NOTHROW",
            "NS_DURING",
            "NS_HANDLER",
            "NS_ENDHANDLER",
            "NS_VALUERETURN",
            "NS_VOIDRETURN",
          ],
          literal: [
            "false",
            "true",
            "FALSE",
            "TRUE",
            "nil",
            "YES",
            "NO",
            "NULL",
          ],
          built_in: [
            "BOOL",
            "dispatch_once_t",
            "dispatch_queue_t",
            "dispatch_sync",
            "dispatch_async",
            "dispatch_once",
          ],
        },
        illegal: "</",
        contains: [
          {
            className: "built_in",
            begin:
              "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+",
          },
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          e.C_NUMBER_MODE,
          e.QUOTE_STRING_MODE,
          e.APOS_STRING_MODE,
          {
            className: "string",
            variants: [
              {
                begin: '@"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE],
              },
            ],
          },
          {
            className: "meta",
            begin: /#\s*[a-z]+\b/,
            end: /$/,
            keywords: {
              keyword:
                "if else elif endif define undef warning error line pragma ifdef ifndef include",
            },
            contains: [
              { begin: /\\\n/, relevance: 0 },
              e.inherit(e.QUOTE_STRING_MODE, {
                className: "string",
              }),
              { className: "string", begin: /<.*?>/, end: /$/, illegal: "\\n" },
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
            ],
          },
          {
            className: "class",
            begin: "(" + t.keyword.join("|") + ")\\b",
            end: /(\{|$)/,
            excludeEnd: !0,
            keywords: t,
            contains: [e.UNDERSCORE_TITLE_MODE],
          },
          { begin: "\\." + e.UNDERSCORE_IDENT_RE, relevance: 0 },
        ],
      };
    },
    grmr_perl: (e) => {
      const n = /[dualxmsipngr]{0,12}/,
        t = {
          $pattern: /[\w.]+/,
          keyword:
            "abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0",
        },
        a = { className: "subst", begin: "[$@]\\{", end: "\\}", keywords: t },
        i = { begin: /->\{/, end: /\}/ },
        s = {
          variants: [
            { begin: /\$\d/ },
            {
              begin: b(
                /[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
                "(?![A-Za-z])(?![@$%])"
              ),
            },
            { begin: /[$%@][^\s\w{]/, relevance: 0 },
          ],
        },
        r = [e.BACKSLASH_ESCAPE, a, s],
        o = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
        l = (e, t, a = "\\1") => {
          const i = "\\1" === a ? a : b(a, t);
          return b(
            b("(?:", e, ")"),
            t,
            /(?:\\.|[^\\\/])*?/,
            i,
            /(?:\\.|[^\\\/])*?/,
            a,
            n
          );
        },
        c = (e, t, a) => b(b("(?:", e, ")"), t, /(?:\\.|[^\\\/])*?/, a, n),
        d = [
          s,
          e.HASH_COMMENT_MODE,
          e.COMMENT(/^=\w/, /=cut/, {
            endsWithParent: !0,
          }),
          i,
          {
            className: "string",
            contains: r,
            variants: [
              {
                begin: "q[qwxr]?\\s*\\(",
                end: "\\)",
                relevance: 5,
              },
              { begin: "q[qwxr]?\\s*\\[", end: "\\]", relevance: 5 },
              { begin: "q[qwxr]?\\s*\\{", end: "\\}", relevance: 5 },
              {
                begin: "q[qwxr]?\\s*\\|",
                end: "\\|",
                relevance: 5,
              },
              { begin: "q[qwxr]?\\s*<", end: ">", relevance: 5 },
              { begin: "qw\\s+q", end: "q", relevance: 5 },
              { begin: "'", end: "'", contains: [e.BACKSLASH_ESCAPE] },
              { begin: '"', end: '"' },
              { begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE] },
              { begin: /\{\w+\}/, relevance: 0 },
              {
                begin: "-?\\w+\\s*=>",
                relevance: 0,
              },
            ],
          },
          {
            className: "number",
            begin:
              "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            relevance: 0,
          },
          {
            begin:
              "(\\/\\/|" +
              e.RE_STARTERS_RE +
              "|\\b(split|return|print|reverse|grep)\\b)\\s*",
            keywords: "split return print reverse grep",
            relevance: 0,
            contains: [
              e.HASH_COMMENT_MODE,
              {
                className: "regexp",
                variants: [
                  {
                    begin: l("s|tr|y", m(...o, { capture: !0 })),
                  },
                  { begin: l("s|tr|y", "\\(", "\\)") },
                  {
                    begin: l("s|tr|y", "\\[", "\\]"),
                  },
                  { begin: l("s|tr|y", "\\{", "\\}") },
                ],
                relevance: 2,
              },
              {
                className: "regexp",
                variants: [
                  { begin: /(m|qr)\/\//, relevance: 0 },
                  {
                    begin: c("(?:m|qr)?", /\//, /\//),
                  },
                  { begin: c("m|qr", m(...o, { capture: !0 }), /\1/) },
                  {
                    begin: c("m|qr", /\(/, /\)/),
                  },
                  { begin: c("m|qr", /\[/, /\]/) },
                  {
                    begin: c("m|qr", /\{/, /\}/),
                  },
                ],
              },
            ],
          },
          {
            className: "function",
            beginKeywords: "sub",
            end: "(\\s*\\(.*?\\))?[;{]",
            excludeEnd: !0,
            relevance: 5,
            contains: [e.TITLE_MODE],
          },
          {
            begin: "-\\w\\b",
            relevance: 0,
          },
          {
            begin: "^__DATA__$",
            end: "^__END__$",
            subLanguage: "mojolicious",
            contains: [{ begin: "^@@.*", end: "$", className: "comment" }],
          },
        ];
      return (
        (a.contains = d),
        (i.contains = d),
        { name: "Perl", aliases: ["pl", "pm"], keywords: t, contains: d }
      );
    },
    grmr_php: (e) => {
      const n = {
          className: "variable",
          begin:
            "\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*(?![A-Za-z0-9])(?![$])",
        },
        t = {
          className: "meta",
          variants: [
            { begin: /<\?php/, relevance: 10 },
            { begin: /<\?[=]?/ },
            {
              begin: /\?>/,
            },
          ],
        },
        a = {
          className: "subst",
          variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }],
        },
        i = e.inherit(e.APOS_STRING_MODE, { illegal: null }),
        s = e.inherit(e.QUOTE_STRING_MODE, {
          illegal: null,
          contains: e.QUOTE_STRING_MODE.contains.concat(a),
        }),
        r = e.END_SAME_AS_BEGIN({
          begin: /<<<[ \t]*(\w+)\n/,
          end: /[ \t]*(\w+)\b/,
          contains: e.QUOTE_STRING_MODE.contains.concat(a),
        }),
        o = {
          className: "string",
          contains: [e.BACKSLASH_ESCAPE, t],
          variants: [
            e.inherit(i, { begin: "b'", end: "'" }),
            e.inherit(s, { begin: 'b"', end: '"' }),
            s,
            i,
            r,
          ],
        },
        l = {
          className: "number",
          variants: [
            {
              begin: "\\b0b[01]+(?:_[01]+)*\\b",
            },
            { begin: "\\b0o[0-7]+(?:_[0-7]+)*\\b" },
            {
              begin: "\\b0x[\\da-f]+(?:_[\\da-f]+)*\\b",
            },
            {
              begin:
                "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:e[+-]?\\d+)?",
            },
          ],
          relevance: 0,
        },
        c = {
          keyword:
            "__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile enum eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 mixed new object or private protected public real return string switch throw trait try unset use var void while xor yield",
          literal: "false null true",
          built_in:
            "Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException UnhandledMatchError ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Stringable Throwable Traversable WeakReference WeakMap Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass",
        };
      return {
        case_insensitive: !0,
        keywords: c,
        contains: [
          e.HASH_COMMENT_MODE,
          e.COMMENT("//", "$", { contains: [t] }),
          e.COMMENT("/\\*", "\\*/", {
            contains: [{ className: "doctag", begin: "@[A-Za-z]+" }],
          }),
          e.COMMENT("__halt_compiler.+?;", !1, {
            endsWithParent: !0,
            keywords: "__halt_compiler",
          }),
          t,
          { className: "keyword", begin: /\$this\b/ },
          n,
          {
            begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
          },
          {
            className: "function",
            relevance: 0,
            beginKeywords: "fn function",
            end: /[;{]/,
            excludeEnd: !0,
            illegal: "[$%\\[]",
            contains: [
              { beginKeywords: "use" },
              e.UNDERSCORE_TITLE_MODE,
              {
                begin: "=>",
                endsParent: !0,
              },
              {
                className: "params",
                begin: "\\(",
                end: "\\)",
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: c,
                contains: ["self", n, e.C_BLOCK_COMMENT_MODE, o, l],
              },
            ],
          },
          {
            className: "class",
            variants: [
              {
                beginKeywords: "enum",
                illegal: /[($"]/,
              },
              { beginKeywords: "class interface trait", illegal: /[:($"]/ },
            ],
            relevance: 0,
            end: /\{/,
            excludeEnd: !0,
            contains: [
              {
                beginKeywords: "extends implements",
              },
              e.UNDERSCORE_TITLE_MODE,
            ],
          },
          {
            beginKeywords: "namespace",
            relevance: 0,
            end: ";",
            illegal: /[.']/,
            contains: [e.UNDERSCORE_TITLE_MODE],
          },
          {
            beginKeywords: "use",
            relevance: 0,
            end: ";",
            contains: [e.UNDERSCORE_TITLE_MODE],
          },
          o,
          l,
        ],
      };
    },
    grmr_php_template: (e) => ({
      name: "PHP template",
      subLanguage: "xml",
      contains: [
        {
          begin: /<\?(php|=)?/,
          end: /\?>/,
          subLanguage: "php",
          contains: [
            { begin: "/\\*", end: "\\*/", skip: !0 },
            { begin: 'b"', end: '"', skip: !0 },
            { begin: "b'", end: "'", skip: !0 },
            e.inherit(e.APOS_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0,
            }),
            e.inherit(e.QUOTE_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0,
            }),
          ],
        },
      ],
    }),
    grmr_plaintext: (e) => ({
      name: "Plain text",
      aliases: ["text", "txt"],
      disableAutodetect: !0,
    }),
    grmr_python: (e) => {
      const n = {
          $pattern: /[A-Za-z]\w+|__\w+__/,
          keyword: [
            "and",
            "as",
            "assert",
            "async",
            "await",
            "break",
            "class",
            "continue",
            "def",
            "del",
            "elif",
            "else",
            "except",
            "finally",
            "for",
            "from",
            "global",
            "if",
            "import",
            "in",
            "is",
            "lambda",
            "nonlocal|10",
            "not",
            "or",
            "pass",
            "raise",
            "return",
            "try",
            "while",
            "with",
            "yield",
          ],
          built_in: [
            "__import__",
            "abs",
            "all",
            "any",
            "ascii",
            "bin",
            "bool",
            "breakpoint",
            "bytearray",
            "bytes",
            "callable",
            "chr",
            "classmethod",
            "compile",
            "complex",
            "delattr",
            "dict",
            "dir",
            "divmod",
            "enumerate",
            "eval",
            "exec",
            "filter",
            "float",
            "format",
            "frozenset",
            "getattr",
            "globals",
            "hasattr",
            "hash",
            "help",
            "hex",
            "id",
            "input",
            "int",
            "isinstance",
            "issubclass",
            "iter",
            "len",
            "list",
            "locals",
            "map",
            "max",
            "memoryview",
            "min",
            "next",
            "object",
            "oct",
            "open",
            "ord",
            "pow",
            "print",
            "property",
            "range",
            "repr",
            "reversed",
            "round",
            "set",
            "setattr",
            "slice",
            "sorted",
            "staticmethod",
            "str",
            "sum",
            "super",
            "tuple",
            "type",
            "vars",
            "zip",
          ],
          literal: [
            "__debug__",
            "Ellipsis",
            "False",
            "None",
            "NotImplemented",
            "True",
          ],
          type: [
            "Any",
            "Callable",
            "Coroutine",
            "Dict",
            "List",
            "Literal",
            "Generic",
            "Optional",
            "Sequence",
            "Set",
            "Tuple",
            "Type",
            "Union",
          ],
        },
        t = { className: "meta", begin: /^(>>>|\.\.\.) / },
        a = {
          className: "subst",
          begin: /\{/,
          end: /\}/,
          keywords: n,
          illegal: /#/,
        },
        i = { begin: /\{\{/, relevance: 0 },
        s = {
          className: "string",
          contains: [e.BACKSLASH_ESCAPE],
          variants: [
            {
              begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
              end: /'''/,
              contains: [e.BACKSLASH_ESCAPE, t],
              relevance: 10,
            },
            {
              begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
              end: /"""/,
              contains: [e.BACKSLASH_ESCAPE, t],
              relevance: 10,
            },
            {
              begin: /([fF][rR]|[rR][fF]|[fF])'''/,
              end: /'''/,
              contains: [e.BACKSLASH_ESCAPE, t, i, a],
            },
            {
              begin: /([fF][rR]|[rR][fF]|[fF])"""/,
              end: /"""/,
              contains: [e.BACKSLASH_ESCAPE, t, i, a],
            },
            { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
            { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
            {
              begin: /([bB]|[bB][rR]|[rR][bB])'/,
              end: /'/,
            },
            { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
            {
              begin: /([fF][rR]|[rR][fF]|[fF])'/,
              end: /'/,
              contains: [e.BACKSLASH_ESCAPE, i, a],
            },
            {
              begin: /([fF][rR]|[rR][fF]|[fF])"/,
              end: /"/,
              contains: [e.BACKSLASH_ESCAPE, i, a],
            },
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
          ],
        },
        r = "[0-9](_?[0-9])*",
        o = `(\\b(${r}))?\\.(${r})|\\b(${r})\\.`,
        l = {
          className: "number",
          relevance: 0,
          variants: [
            {
              begin: `(\\b(${r})|(${o}))[eE][+-]?(${r})[jJ]?\\b`,
            },
            { begin: `(${o})[jJ]?` },
            {
              begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b",
            },
            {
              begin: "\\b0[bB](_?[01])+[lL]?\\b",
            },
            { begin: "\\b0[oO](_?[0-7])+[lL]?\\b" },
            {
              begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b",
            },
            { begin: `\\b(${r})[jJ]\\b` },
          ],
        },
        c = {
          className: "comment",
          begin: g(/# type:/),
          end: /$/,
          keywords: n,
          contains: [
            {
              begin: /# type:/,
            },
            { begin: /#/, end: /\b\B/, endsWithParent: !0 },
          ],
        },
        d = {
          className: "params",
          variants: [
            { className: "", begin: /\(\s*\)/, skip: !0 },
            {
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: n,
              contains: ["self", t, l, s, e.HASH_COMMENT_MODE],
            },
          ],
        };
      return (
        (a.contains = [s, l, t]),
        {
          name: "Python",
          aliases: ["py", "gyp", "ipython"],
          keywords: n,
          illegal: /(<\/|->|\?)|=>/,
          contains: [
            t,
            l,
            { begin: /\bself\b/ },
            { beginKeywords: "if", relevance: 0 },
            s,
            c,
            e.HASH_COMMENT_MODE,
            {
              match: [/def/, /\s+/, E],
              scope: { 1: "keyword", 3: "title.function" },
              contains: [d],
            },
            {
              variants: [
                {
                  match: [/class/, /\s+/, E, /\s*/, /\(\s*/, E, /\s*\)/],
                },
                { match: [/class/, /\s+/, E] },
              ],
              scope: {
                1: "keyword",
                3: "title.class",
                6: "title.class.inherited",
              },
            },
            {
              className: "meta",
              begin: /^[\t ]*@/,
              end: /(?=#)|$/,
              contains: [l, d, s],
            },
          ],
        }
      );
    },
    grmr_python_repl: (e) => ({
      aliases: ["pycon"],
      contains: [
        {
          className: "meta",
          starts: {
            end: / |$/,
            starts: { end: "$", subLanguage: "python" },
          },
          variants: [
            {
              begin: /^>>>(?=[ ]|$)/,
            },
            { begin: /^\.\.\.(?=[ ]|$)/ },
          ],
        },
      ],
    }),
    grmr_r: (e) => {
      const n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
        t = m(
          /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
          /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
          /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
        ),
        a = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,
        i = m(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
      return {
        name: "R",
        keywords: {
          $pattern: n,
          keyword: "function if in break next repeat else for while",
          literal:
            "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
          built_in:
            "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm",
        },
        contains: [
          e.COMMENT(/#'/, /$/, {
            contains: [
              {
                scope: "doctag",
                match: /@examples/,
                starts: {
                  end: g(m(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)),
                  endsParent: !0,
                },
              },
              {
                scope: "doctag",
                begin: "@param",
                end: /$/,
                contains: [
                  {
                    scope: "variable",
                    variants: [
                      {
                        match: n,
                      },
                      { match: /`(?:\\.|[^`\\])+`/ },
                    ],
                    endsParent: !0,
                  },
                ],
              },
              { scope: "doctag", match: /@[a-zA-Z]+/ },
              { scope: "keyword", match: /\\[a-zA-Z]+/ },
            ],
          }),
          e.HASH_COMMENT_MODE,
          {
            scope: "string",
            contains: [e.BACKSLASH_ESCAPE],
            variants: [
              e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\(/, end: /\)(-*)"/ }),
              e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\{/, end: /\}(-*)"/ }),
              e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\[/, end: /\](-*)"/ }),
              e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\(/, end: /\)(-*)'/ }),
              e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\{/, end: /\}(-*)'/ }),
              e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }),
              { begin: '"', end: '"', relevance: 0 },
              { begin: "'", end: "'", relevance: 0 },
            ],
          },
          {
            relevance: 0,
            variants: [
              {
                scope: {
                  1: "operator",
                  2: "number",
                },
                match: [a, t],
              },
              { scope: { 1: "operator", 2: "number" }, match: [/%[^%]*%/, t] },
              { scope: { 1: "punctuation", 2: "number" }, match: [i, t] },
              {
                scope: {
                  2: "number",
                },
                match: [/[^a-zA-Z0-9._]|^/, t],
              },
            ],
          },
          { scope: { 3: "operator" }, match: [n, /\s+/, /<-/, /\s+/] },
          {
            scope: "operator",
            relevance: 0,
            variants: [
              { match: a },
              {
                match: /%[^%]*%/,
              },
            ],
          },
          { scope: "punctuation", relevance: 0, match: i },
          { begin: "`", end: "`", contains: [{ begin: /\\./ }] },
        ],
      };
    },
    grmr_ruby: (e) => {
      const n =
          "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
        t = {
          keyword:
            "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
          built_in: "proc lambda",
          literal: "true false nil",
        },
        a = { className: "doctag", begin: "@[A-Za-z]+" },
        i = { begin: "#<", end: ">" },
        s = [
          e.COMMENT("#", "$", { contains: [a] }),
          e.COMMENT("^=begin", "^=end", { contains: [a], relevance: 10 }),
          e.COMMENT("^__END__", "\\n$"),
        ],
        r = { className: "subst", begin: /#\{/, end: /\}/, keywords: t },
        o = {
          className: "string",
          contains: [e.BACKSLASH_ESCAPE, r],
          variants: [
            {
              begin: /'/,
              end: /'/,
            },
            { begin: /"/, end: /"/ },
            { begin: /`/, end: /`/ },
            { begin: /%[qQwWx]?\(/, end: /\)/ },
            { begin: /%[qQwWx]?\[/, end: /\]/ },
            { begin: /%[qQwWx]?\{/, end: /\}/ },
            {
              begin: /%[qQwWx]?</,
              end: />/,
            },
            { begin: /%[qQwWx]?\//, end: /\// },
            { begin: /%[qQwWx]?%/, end: /%/ },
            { begin: /%[qQwWx]?-/, end: /-/ },
            { begin: /%[qQwWx]?\|/, end: /\|/ },
            {
              begin: /\B\?(\\\d{1,3})/,
            },
            { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
            {
              begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/,
            },
            {
              begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/,
            },
            {
              begin: /\B\?\\(c|C-)[\x20-\x7e]/,
            },
            { begin: /\B\?\\?\S/ },
            {
              begin: b(
                /<<[-~]?'?/,
                g(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
              ),
              contains: [
                e.END_SAME_AS_BEGIN({
                  begin: /(\w+)/,
                  end: /(\w+)/,
                  contains: [e.BACKSLASH_ESCAPE, r],
                }),
              ],
            },
          ],
        },
        l = "[0-9](_?[0-9])*",
        c = {
          className: "number",
          relevance: 0,
          variants: [
            {
              begin: `\\b([1-9](_?[0-9])*|0)(\\.(${l}))?([eE][+-]?(${l})|r)?i?\\b`,
            },
            {
              begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b",
            },
            { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
            { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
            {
              begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b",
            },
            {
              begin: "\\b0(_?[0-7])+r?i?\\b",
            },
          ],
        },
        d = {
          className: "params",
          begin: "\\(",
          end: "\\)",
          endsParent: !0,
          keywords: t,
        },
        u = [
          o,
          {
            className: "class",
            beginKeywords: "class module",
            end: "$|;",
            illegal: /=/,
            contains: [
              e.inherit(e.TITLE_MODE, {
                begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?",
              }),
              {
                begin: "<\\s*",
                contains: [
                  {
                    begin: "(" + e.IDENT_RE + "::)?" + e.IDENT_RE,
                    relevance: 0,
                  },
                ],
              },
            ].concat(s),
          },
          {
            className: "function",
            begin: b(/def\s+/, g(n + "\\s*(\\(|;|$)")),
            relevance: 0,
            keywords: "def",
            end: "$|;",
            contains: [e.inherit(e.TITLE_MODE, { begin: n }), d].concat(s),
          },
          { begin: e.IDENT_RE + "::" },
          {
            className: "symbol",
            begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
            relevance: 0,
          },
          {
            className: "symbol",
            begin: ":(?!\\s)",
            contains: [o, { begin: n }],
            relevance: 0,
          },
          c,
          {
            className: "variable",
            begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])",
          },
          {
            className: "params",
            begin: /\|/,
            end: /\|/,
            relevance: 0,
            keywords: t,
          },
          {
            begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
            keywords: "unless",
            contains: [
              {
                className: "regexp",
                contains: [e.BACKSLASH_ESCAPE, r],
                illegal: /\n/,
                variants: [
                  {
                    begin: "/",
                    end: "/[a-z]*",
                  },
                  { begin: /%r\{/, end: /\}[a-z]*/ },
                  { begin: "%r\\(", end: "\\)[a-z]*" },
                  { begin: "%r!", end: "![a-z]*" },
                  { begin: "%r\\[", end: "\\][a-z]*" },
                ],
              },
            ].concat(i, s),
            relevance: 0,
          },
        ].concat(i, s);
      (r.contains = u), (d.contains = u);
      const m = [
        {
          begin: /^\s*=>/,
          starts: { end: "$", contains: u },
        },
        {
          className: "meta",
          begin:
            "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
          starts: { end: "$", contains: u },
        },
      ];
      return (
        s.unshift(i),
        {
          name: "Ruby",
          aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
          keywords: t,
          illegal: /\/\*/,
          contains: [e.SHEBANG({ binary: "ruby" })]
            .concat(m)
            .concat(s)
            .concat(u),
        }
      );
    },
    grmr_rust: (e) => {
      const n = {
          className: "title.function.invoke",
          relevance: 0,
          begin: b(/\b/, /(?!let\b)/, e.IDENT_RE, g(/\s*\(/)),
        },
        t = "([ui](8|16|32|64|128|size)|f(32|64))?",
        a = [
          "drop ",
          "Copy",
          "Send",
          "Sized",
          "Sync",
          "Drop",
          "Fn",
          "FnMut",
          "FnOnce",
          "ToOwned",
          "Clone",
          "Debug",
          "PartialEq",
          "PartialOrd",
          "Eq",
          "Ord",
          "AsRef",
          "AsMut",
          "Into",
          "From",
          "Default",
          "Iterator",
          "Extend",
          "IntoIterator",
          "DoubleEndedIterator",
          "ExactSizeIterator",
          "SliceConcatExt",
          "ToString",
          "assert!",
          "assert_eq!",
          "bitflags!",
          "bytes!",
          "cfg!",
          "col!",
          "concat!",
          "concat_idents!",
          "debug_assert!",
          "debug_assert_eq!",
          "env!",
          "panic!",
          "file!",
          "format!",
          "format_args!",
          "include_bin!",
          "include_str!",
          "line!",
          "local_data_key!",
          "module_path!",
          "option_env!",
          "print!",
          "println!",
          "select!",
          "stringify!",
          "try!",
          "unimplemented!",
          "unreachable!",
          "vec!",
          "write!",
          "writeln!",
          "macro_rules!",
          "assert_ne!",
          "debug_assert_ne!",
        ];
      return {
        name: "Rust",
        aliases: ["rs"],
        keywords: {
          $pattern: e.IDENT_RE + "!?",
          type: [
            "i8",
            "i16",
            "i32",
            "i64",
            "i128",
            "isize",
            "u8",
            "u16",
            "u32",
            "u64",
            "u128",
            "usize",
            "f32",
            "f64",
            "str",
            "char",
            "bool",
            "Box",
            "Option",
            "Result",
            "String",
            "Vec",
          ],
          keyword: [
            "abstract",
            "as",
            "async",
            "await",
            "become",
            "box",
            "break",
            "const",
            "continue",
            "crate",
            "do",
            "dyn",
            "else",
            "enum",
            "extern",
            "false",
            "final",
            "fn",
            "for",
            "if",
            "impl",
            "in",
            "let",
            "loop",
            "macro",
            "match",
            "mod",
            "move",
            "mut",
            "override",
            "priv",
            "pub",
            "ref",
            "return",
            "self",
            "Self",
            "static",
            "struct",
            "super",
            "trait",
            "true",
            "try",
            "type",
            "typeof",
            "unsafe",
            "unsized",
            "use",
            "virtual",
            "where",
            "while",
            "yield",
          ],
          literal: ["true", "false", "Some", "None", "Ok", "Err"],
          built_in: a,
        },
        illegal: "</",
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
          e.inherit(e.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }),
          {
            className: "string",
            variants: [
              { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
              {
                begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/,
              },
            ],
          },
          { className: "symbol", begin: /'[a-zA-Z_][a-zA-Z0-9_]*/ },
          {
            className: "number",
            variants: [
              {
                begin: "\\b0b([01_]+)" + t,
              },
              { begin: "\\b0o([0-7_]+)" + t },
              {
                begin: "\\b0x([A-Fa-f0-9_]+)" + t,
              },
              {
                begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + t,
              },
            ],
            relevance: 0,
          },
          {
            begin: [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE],
            className: { 1: "keyword", 3: "title.function" },
          },
          {
            className: "meta",
            begin: "#!?\\[",
            end: "\\]",
            contains: [
              {
                className: "string",
                begin: /"/,
                end: /"/,
              },
            ],
          },
          {
            begin: [/let/, /\s+/, /(?:mut\s+)?/, e.UNDERSCORE_IDENT_RE],
            className: { 1: "keyword", 3: "keyword", 4: "variable" },
          },
          {
            begin: [/for/, /\s+/, e.UNDERSCORE_IDENT_RE, /\s+/, /in/],
            className: { 1: "keyword", 3: "variable", 5: "keyword" },
          },
          {
            begin: [/type/, /\s+/, e.UNDERSCORE_IDENT_RE],
            className: { 1: "keyword", 3: "title.class" },
          },
          {
            begin: [
              /(?:trait|enum|struct|union|impl|for)/,
              /\s+/,
              e.UNDERSCORE_IDENT_RE,
            ],
            className: { 1: "keyword", 3: "title.class" },
          },
          {
            begin: e.IDENT_RE + "::",
            keywords: {
              keyword: "Self",
              built_in: a,
            },
          },
          { className: "punctuation", begin: "->" },
          n,
        ],
      };
    },
    grmr_scss: (e) => {
      const n = ee(e),
        t = ie,
        a = ae,
        i = "@[a-z-]+",
        s = { className: "variable", begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b" };
      return {
        name: "SCSS",
        case_insensitive: !0,
        illegal: "[=/|']",
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          {
            className: "selector-id",
            begin: "#[A-Za-z0-9_-]+",
            relevance: 0,
          },
          {
            className: "selector-class",
            begin: "\\.[A-Za-z0-9_-]+",
            relevance: 0,
          },
          n.ATTRIBUTE_SELECTOR_MODE,
          {
            className: "selector-tag",
            begin: "\\b(" + ne.join("|") + ")\\b",
            relevance: 0,
          },
          { className: "selector-pseudo", begin: ":(" + a.join("|") + ")" },
          { className: "selector-pseudo", begin: "::(" + t.join("|") + ")" },
          s,
          { begin: /\(/, end: /\)/, contains: [n.CSS_NUMBER_MODE] },
          n.CSS_VARIABLE,
          { className: "attribute", begin: "\\b(" + se.join("|") + ")\\b" },
          {
            begin:
              "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b",
          },
          {
            begin: ":",
            end: ";",
            contains: [
              s,
              n.HEXCOLOR,
              n.CSS_NUMBER_MODE,
              e.QUOTE_STRING_MODE,
              e.APOS_STRING_MODE,
              n.IMPORTANT,
            ],
          },
          {
            begin: "@(page|font-face)",
            keywords: { $pattern: i, keyword: "@page @font-face" },
          },
          {
            begin: "@",
            end: "[{;]",
            returnBegin: !0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: "and or not only",
              attribute: te.join(" "),
            },
            contains: [
              { begin: i, className: "keyword" },
              { begin: /[a-z-]+(?=:)/, className: "attribute" },
              s,
              e.QUOTE_STRING_MODE,
              e.APOS_STRING_MODE,
              n.HEXCOLOR,
              n.CSS_NUMBER_MODE,
            ],
          },
        ],
      };
    },
    grmr_shell: (e) => ({
      name: "Shell Session",
      aliases: ["console", "shellsession"],
      contains: [
        {
          className: "meta",
          begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
          starts: {
            end: /[^\\](?=\s*$)/,
            subLanguage: "bash",
          },
        },
      ],
    }),
    grmr_sql: (e) => {
      const n = e.COMMENT("--", "$"),
        t = ["true", "false", "unknown"],
        a = [
          "bigint",
          "binary",
          "blob",
          "boolean",
          "char",
          "character",
          "clob",
          "date",
          "dec",
          "decfloat",
          "decimal",
          "float",
          "int",
          "integer",
          "interval",
          "nchar",
          "nclob",
          "national",
          "numeric",
          "real",
          "row",
          "smallint",
          "time",
          "timestamp",
          "varchar",
          "varying",
          "varbinary",
        ],
        i = [
          "abs",
          "acos",
          "array_agg",
          "asin",
          "atan",
          "avg",
          "cast",
          "ceil",
          "ceiling",
          "coalesce",
          "corr",
          "cos",
          "cosh",
          "count",
          "covar_pop",
          "covar_samp",
          "cume_dist",
          "dense_rank",
          "deref",
          "element",
          "exp",
          "extract",
          "first_value",
          "floor",
          "json_array",
          "json_arrayagg",
          "json_exists",
          "json_object",
          "json_objectagg",
          "json_query",
          "json_table",
          "json_table_primitive",
          "json_value",
          "lag",
          "last_value",
          "lead",
          "listagg",
          "ln",
          "log",
          "log10",
          "lower",
          "max",
          "min",
          "mod",
          "nth_value",
          "ntile",
          "nullif",
          "percent_rank",
          "percentile_cont",
          "percentile_disc",
          "position",
          "position_regex",
          "power",
          "rank",
          "regr_avgx",
          "regr_avgy",
          "regr_count",
          "regr_intercept",
          "regr_r2",
          "regr_slope",
          "regr_sxx",
          "regr_sxy",
          "regr_syy",
          "row_number",
          "sin",
          "sinh",
          "sqrt",
          "stddev_pop",
          "stddev_samp",
          "substring",
          "substring_regex",
          "sum",
          "tan",
          "tanh",
          "translate",
          "translate_regex",
          "treat",
          "trim",
          "trim_array",
          "unnest",
          "upper",
          "value_of",
          "var_pop",
          "var_samp",
          "width_bucket",
        ],
        s = [
          "create table",
          "insert into",
          "primary key",
          "foreign key",
          "not null",
          "alter table",
          "add constraint",
          "grouping sets",
          "on overflow",
          "character set",
          "respect nulls",
          "ignore nulls",
          "nulls first",
          "nulls last",
          "depth first",
          "breadth first",
        ],
        r = i,
        o = [
          "abs",
          "acos",
          "all",
          "allocate",
          "alter",
          "and",
          "any",
          "are",
          "array",
          "array_agg",
          "array_max_cardinality",
          "as",
          "asensitive",
          "asin",
          "asymmetric",
          "at",
          "atan",
          "atomic",
          "authorization",
          "avg",
          "begin",
          "begin_frame",
          "begin_partition",
          "between",
          "bigint",
          "binary",
          "blob",
          "boolean",
          "both",
          "by",
          "call",
          "called",
          "cardinality",
          "cascaded",
          "case",
          "cast",
          "ceil",
          "ceiling",
          "char",
          "char_length",
          "character",
          "character_length",
          "check",
          "classifier",
          "clob",
          "close",
          "coalesce",
          "collate",
          "collect",
          "column",
          "commit",
          "condition",
          "connect",
          "constraint",
          "contains",
          "convert",
          "copy",
          "corr",
          "corresponding",
          "cos",
          "cosh",
          "count",
          "covar_pop",
          "covar_samp",
          "create",
          "cross",
          "cube",
          "cume_dist",
          "current",
          "current_catalog",
          "current_date",
          "current_default_transform_group",
          "current_path",
          "current_role",
          "current_row",
          "current_schema",
          "current_time",
          "current_timestamp",
          "current_path",
          "current_role",
          "current_transform_group_for_type",
          "current_user",
          "cursor",
          "cycle",
          "date",
          "day",
          "deallocate",
          "dec",
          "decimal",
          "decfloat",
          "declare",
          "default",
          "define",
          "delete",
          "dense_rank",
          "deref",
          "describe",
          "deterministic",
          "disconnect",
          "distinct",
          "double",
          "drop",
          "dynamic",
          "each",
          "element",
          "else",
          "empty",
          "end",
          "end_frame",
          "end_partition",
          "end-exec",
          "equals",
          "escape",
          "every",
          "except",
          "exec",
          "execute",
          "exists",
          "exp",
          "external",
          "extract",
          "false",
          "fetch",
          "filter",
          "first_value",
          "float",
          "floor",
          "for",
          "foreign",
          "frame_row",
          "free",
          "from",
          "full",
          "function",
          "fusion",
          "get",
          "global",
          "grant",
          "group",
          "grouping",
          "groups",
          "having",
          "hold",
          "hour",
          "identity",
          "in",
          "indicator",
          "initial",
          "inner",
          "inout",
          "insensitive",
          "insert",
          "int",
          "integer",
          "intersect",
          "intersection",
          "interval",
          "into",
          "is",
          "join",
          "json_array",
          "json_arrayagg",
          "json_exists",
          "json_object",
          "json_objectagg",
          "json_query",
          "json_table",
          "json_table_primitive",
          "json_value",
          "lag",
          "language",
          "large",
          "last_value",
          "lateral",
          "lead",
          "leading",
          "left",
          "like",
          "like_regex",
          "listagg",
          "ln",
          "local",
          "localtime",
          "localtimestamp",
          "log",
          "log10",
          "lower",
          "match",
          "match_number",
          "match_recognize",
          "matches",
          "max",
          "member",
          "merge",
          "method",
          "min",
          "minute",
          "mod",
          "modifies",
          "module",
          "month",
          "multiset",
          "national",
          "natural",
          "nchar",
          "nclob",
          "new",
          "no",
          "none",
          "normalize",
          "not",
          "nth_value",
          "ntile",
          "null",
          "nullif",
          "numeric",
          "octet_length",
          "occurrences_regex",
          "of",
          "offset",
          "old",
          "omit",
          "on",
          "one",
          "only",
          "open",
          "or",
          "order",
          "out",
          "outer",
          "over",
          "overlaps",
          "overlay",
          "parameter",
          "partition",
          "pattern",
          "per",
          "percent",
          "percent_rank",
          "percentile_cont",
          "percentile_disc",
          "period",
          "portion",
          "position",
          "position_regex",
          "power",
          "precedes",
          "precision",
          "prepare",
          "primary",
          "procedure",
          "ptf",
          "range",
          "rank",
          "reads",
          "real",
          "recursive",
          "ref",
          "references",
          "referencing",
          "regr_avgx",
          "regr_avgy",
          "regr_count",
          "regr_intercept",
          "regr_r2",
          "regr_slope",
          "regr_sxx",
          "regr_sxy",
          "regr_syy",
          "release",
          "result",
          "return",
          "returns",
          "revoke",
          "right",
          "rollback",
          "rollup",
          "row",
          "row_number",
          "rows",
          "running",
          "savepoint",
          "scope",
          "scroll",
          "search",
          "second",
          "seek",
          "select",
          "sensitive",
          "session_user",
          "set",
          "show",
          "similar",
          "sin",
          "sinh",
          "skip",
          "smallint",
          "some",
          "specific",
          "specifictype",
          "sql",
          "sqlexception",
          "sqlstate",
          "sqlwarning",
          "sqrt",
          "start",
          "static",
          "stddev_pop",
          "stddev_samp",
          "submultiset",
          "subset",
          "substring",
          "substring_regex",
          "succeeds",
          "sum",
          "symmetric",
          "system",
          "system_time",
          "system_user",
          "table",
          "tablesample",
          "tan",
          "tanh",
          "then",
          "time",
          "timestamp",
          "timezone_hour",
          "timezone_minute",
          "to",
          "trailing",
          "translate",
          "translate_regex",
          "translation",
          "treat",
          "trigger",
          "trim",
          "trim_array",
          "true",
          "truncate",
          "uescape",
          "union",
          "unique",
          "unknown",
          "unnest",
          "update",
          "upper",
          "user",
          "using",
          "value",
          "values",
          "value_of",
          "var_pop",
          "var_samp",
          "varbinary",
          "varchar",
          "varying",
          "versioning",
          "when",
          "whenever",
          "where",
          "width_bucket",
          "window",
          "with",
          "within",
          "without",
          "year",
          "add",
          "asc",
          "collation",
          "desc",
          "final",
          "first",
          "last",
          "view",
        ].filter((e) => !i.includes(e)),
        l = {
          begin: b(/\b/, m(...r), /\s*\(/),
          relevance: 0,
          keywords: { built_in: r },
        };
      return {
        name: "SQL",
        case_insensitive: !0,
        illegal: /[{}]|<\//,
        keywords: {
          $pattern: /\b[\w\.]+/,
          keyword: ((e, { exceptions: n, when: t } = {}) => {
            const a = t;
            return (
              (n = n || []),
              e.map((e) =>
                e.match(/\|\d+$/) || n.includes(e) ? e : a(e) ? e + "|0" : e
              )
            );
          })(o, { when: (e) => e.length < 3 }),
          literal: t,
          type: a,
          built_in: [
            "current_catalog",
            "current_date",
            "current_default_transform_group",
            "current_path",
            "current_role",
            "current_schema",
            "current_transform_group_for_type",
            "current_user",
            "session_user",
            "system_time",
            "system_user",
            "current_time",
            "localtime",
            "current_timestamp",
            "localtimestamp",
          ],
        },
        contains: [
          {
            begin: m(...s),
            relevance: 0,
            keywords: {
              $pattern: /[\w\.]+/,
              keyword: o.concat(s),
              literal: t,
              type: a,
            },
          },
          {
            className: "type",
            begin: m(
              "double precision",
              "large object",
              "with timezone",
              "without timezone"
            ),
          },
          l,
          { className: "variable", begin: /@[a-z0-9]+/ },
          {
            className: "string",
            variants: [
              {
                begin: /'/,
                end: /'/,
                contains: [{ begin: /''/ }],
              },
            ],
          },
          {
            begin: /"/,
            end: /"/,
            contains: [
              {
                begin: /""/,
              },
            ],
          },
          e.C_NUMBER_MODE,
          e.C_BLOCK_COMMENT_MODE,
          n,
          {
            className: "operator",
            begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
            relevance: 0,
          },
        ],
      };
    },
    grmr_swift: (e) => {
      const n = { match: /\s+/, relevance: 0 },
        t = e.COMMENT("/\\*", "\\*/", {
          contains: ["self"],
        }),
        a = [e.C_LINE_COMMENT_MODE, t],
        i = { match: [/\./, m(...Ne, ...we)], className: { 2: "keyword" } },
        s = { match: b(/\./, m(...Oe)), relevance: 0 },
        r = Oe.filter((e) => "string" == typeof e).concat(["_|0"]),
        o = {
          variants: [
            {
              className: "keyword",
              match: m(
                ...Oe.filter((e) => "string" != typeof e)
                  .concat(ve)
                  .map(ye),
                ...we
              ),
            },
          ],
        },
        l = {
          $pattern: m(/\b\w+/, /#\w+/),
          keyword: r.concat(Se),
          literal: Me,
        },
        c = [i, s, o],
        d = [
          {
            match: b(/\./, m(...ke)),
            relevance: 0,
          },
          { className: "built_in", match: b(/\b/, m(...ke), /(?=\()/) },
        ],
        u = { match: /->/, relevance: 0 },
        p = [
          u,
          {
            className: "operator",
            relevance: 0,
            variants: [{ match: Te }, { match: `\\.(\\.|${Ce})+` }],
          },
        ],
        _ = "([0-9a-fA-F]_*)+",
        h = {
          className: "number",
          relevance: 0,
          variants: [
            {
              match:
                "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b",
            },
            {
              match: `\\b0x(${_})(\\.(${_}))?([pP][+-]?(([0-9]_*)+))?\\b`,
            },
            {
              match: /\b0o([0-7]_*)+\b/,
            },
            { match: /\b0b([01]_*)+\b/ },
          ],
        },
        f = (e = "") => ({
          className: "subst",
          variants: [
            { match: b(/\\/, e, /[0\\tnr"']/) },
            {
              match: b(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/),
            },
          ],
        }),
        E = (e = "") => ({
          className: "subst",
          match: b(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/),
        }),
        y = (e = "") => ({
          className: "subst",
          label: "interpol",
          begin: b(/\\/, e, /\(/),
          end: /\)/,
        }),
        N = (e = "") => ({
          begin: b(e, /"""/),
          end: b(/"""/, e),
          contains: [f(e), E(e), y(e)],
        }),
        w = (e = "") => ({
          begin: b(e, /"/),
          end: b(/"/, e),
          contains: [f(e), y(e)],
        }),
        v = {
          className: "string",
          variants: [
            N(),
            N("#"),
            N("##"),
            N("###"),
            w(),
            w("#"),
            w("##"),
            w("###"),
          ],
        },
        O = {
          match: b(/`/, Ie, /`/),
        },
        M = [
          O,
          { className: "variable", match: /\$\d+/ },
          {
            className: "variable",
            match: `\\$${De}+`,
          },
        ],
        x = [
          {
            match: /(@|#)available/,
            className: "keyword",
            starts: {
              contains: [
                {
                  begin: /\(/,
                  end: /\)/,
                  keywords: $e,
                  contains: [...p, h, v],
                },
              ],
            },
          },
          { className: "keyword", match: b(/@/, m(...Be)) },
          {
            className: "meta",
            match: b(/@/, Ie),
          },
        ],
        S = {
          match: g(/\b[A-Z]/),
          relevance: 0,
          contains: [
            {
              className: "type",
              match: b(
                /(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,
                De,
                "+"
              ),
            },
            { className: "type", match: Le, relevance: 0 },
            { match: /[?!]+/, relevance: 0 },
            {
              match: /\.\.\./,
              relevance: 0,
            },
            { match: b(/\s+&\s+/, g(Le)), relevance: 0 },
          ],
        },
        k = {
          begin: /</,
          end: />/,
          keywords: l,
          contains: [...a, ...c, ...x, u, S],
        };
      S.contains.push(k);
      const A = {
          begin: /\(/,
          end: /\)/,
          relevance: 0,
          keywords: l,
          contains: [
            "self",
            {
              match: b(Ie, /\s*:/),
              keywords: "_|0",
              relevance: 0,
            },
            ...a,
            ...c,
            ...d,
            ...p,
            h,
            v,
            ...M,
            ...x,
            S,
          ],
        },
        C = { begin: /</, end: />/, contains: [...a, S] },
        T = {
          begin: /\(/,
          end: /\)/,
          keywords: l,
          contains: [
            {
              begin: m(g(b(Ie, /\s*:/)), g(b(Ie, /\s+/, Ie, /\s*:/))),
              end: /:/,
              relevance: 0,
              contains: [
                { className: "keyword", match: /\b_\b/ },
                { className: "params", match: Ie },
              ],
            },
            ...a,
            ...c,
            ...p,
            h,
            v,
            ...x,
            S,
            A,
          ],
          endsParent: !0,
          illegal: /["']/,
        },
        R = {
          match: [/func/, /\s+/, m(O.match, Ie, Te)],
          className: { 1: "keyword", 3: "title.function" },
          contains: [C, T, n],
          illegal: [/\[/, /%/],
        },
        D = {
          match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
          className: { 1: "keyword" },
          contains: [C, T, n],
          illegal: /\[|%/,
        },
        I = {
          match: [/operator/, /\s+/, Te],
          className: {
            1: "keyword",
            3: "title",
          },
        },
        L = {
          begin: [/precedencegroup/, /\s+/, Le],
          className: {
            1: "keyword",
            3: "title",
          },
          contains: [S],
          keywords: [...xe, ...Me],
          end: /}/,
        };
      for (const e of v.variants) {
        const n = e.contains.find((e) => "interpol" === e.label);
        n.keywords = l;
        const t = [...c, ...d, ...p, h, v, ...M];
        n.contains = [
          ...t,
          { begin: /\(/, end: /\)/, contains: ["self", ...t] },
        ];
      }
      return {
        name: "Swift",
        keywords: l,
        contains: [
          ...a,
          R,
          D,
          {
            beginKeywords: "struct protocol class extension enum actor",
            end: "\\{",
            excludeEnd: !0,
            keywords: l,
            contains: [
              e.inherit(e.TITLE_MODE, {
                className: "title.class",
                begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/,
              }),
              ...c,
            ],
          },
          I,
          L,
          { beginKeywords: "import", end: /$/, contains: [...a], relevance: 0 },
          ...c,
          ...d,
          ...p,
          h,
          v,
          ...M,
          ...x,
          S,
          A,
        ],
      };
    },
    grmr_typescript: (e) => {
      const n = {
          $pattern: ge,
          keyword: ue.concat([
            "type",
            "namespace",
            "typedef",
            "interface",
            "public",
            "private",
            "protected",
            "implements",
            "declare",
            "abstract",
            "readonly",
          ]),
          literal: be,
          built_in: fe.concat([
            "any",
            "void",
            "number",
            "boolean",
            "string",
            "object",
            "never",
            "enum",
          ]),
          "variable.language": he,
        },
        t = { className: "meta", begin: "@[A-Za-z$_][0-9A-Za-z$_]*" },
        a = (e, n, t) => {
          const a = e.contains.findIndex((e) => e.label === n);
          if (-1 === a) throw Error("can not find mode to replace");
          e.contains.splice(a, 1, t);
        },
        i = Ee(e);
      return (
        Object.assign(i.keywords, n),
        i.exports.PARAMS_CONTAINS.push(t),
        (i.contains = i.contains.concat([
          t,
          {
            beginKeywords: "namespace",
            end: /\{/,
            excludeEnd: !0,
          },
          {
            beginKeywords: "interface",
            end: /\{/,
            excludeEnd: !0,
            keywords: "interface extends",
          },
        ])),
        a(i, "shebang", e.SHEBANG()),
        a(i, "use_strict", {
          className: "meta",
          relevance: 10,
          begin: /^\s*['"]use strict['"]/,
        }),
        (i.contains.find((e) => "func.def" === e.label).relevance = 0),
        Object.assign(i, {
          name: "TypeScript",
          aliases: ["ts", "tsx"],
        }),
        i
      );
    },
    grmr_vbnet: (e) => {
      const n = /\d{1,2}\/\d{1,2}\/\d{4}/,
        t = /\d{4}-\d{1,2}-\d{1,2}/,
        a = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
        i = /\d{1,2}(:\d{1,2}){1,2}/,
        s = {
          className: "literal",
          variants: [
            { begin: b(/# */, m(t, n), / *#/) },
            {
              begin: b(/# */, i, / *#/),
            },
            { begin: b(/# */, a, / *#/) },
            {
              begin: b(/# */, m(t, n), / +/, m(a, i), / *#/),
            },
          ],
        },
        r = e.COMMENT(/'''/, /$/, {
          contains: [
            {
              className: "doctag",
              begin: /<\/?/,
              end: />/,
            },
          ],
        }),
        o = e.COMMENT(null, /$/, {
          variants: [
            {
              begin: /'/,
            },
            { begin: /([\t ]|^)REM(?=\s)/ },
          ],
        });
      return {
        name: "Visual Basic .NET",
        aliases: ["vb"],
        case_insensitive: !0,
        classNameAliases: { label: "symbol" },
        keywords: {
          keyword:
            "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
          built_in:
            "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
          type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
          literal: "true false nothing",
        },
        illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
        contains: [
          {
            className: "string",
            begin: /"(""|[^/n])"C\b/,
          },
          {
            className: "string",
            begin: /"/,
            end: /"/,
            illegal: /\n/,
            contains: [{ begin: /""/ }],
          },
          s,
          {
            className: "number",
            relevance: 0,
            variants: [
              {
                begin:
                  /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/,
              },
              { begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ },
              { begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ },
              {
                begin: /&O[0-7_]+((U?[SIL])|[%&])?/,
              },
              { begin: /&B[01_]+((U?[SIL])|[%&])?/ },
            ],
          },
          {
            className: "label",
            begin: /^\w+:/,
          },
          r,
          o,
          {
            className: "meta",
            begin:
              /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
            end: /$/,
            keywords: {
              keyword:
                "const disable else elseif enable end externalsource if region then",
            },
            contains: [o],
          },
        ],
      };
    },
    grmr_yaml: (e) => {
      const n = "true false yes no null",
        t = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
        a = {
          className: "string",
          relevance: 0,
          variants: [
            { begin: /'/, end: /'/ },
            { begin: /"/, end: /"/ },
            { begin: /\S+/ },
          ],
          contains: [
            e.BACKSLASH_ESCAPE,
            {
              className: "template-variable",
              variants: [
                { begin: /\{\{/, end: /\}\}/ },
                { begin: /%\{/, end: /\}/ },
              ],
            },
          ],
        },
        i = e.inherit(a, {
          variants: [
            { begin: /'/, end: /'/ },
            { begin: /"/, end: /"/ },
            { begin: /[^\s,{}[\]]+/ },
          ],
        }),
        s = {
          end: ",",
          endsWithParent: !0,
          excludeEnd: !0,
          keywords: n,
          relevance: 0,
        },
        r = {
          begin: /\{/,
          end: /\}/,
          contains: [s],
          illegal: "\\n",
          relevance: 0,
        },
        o = {
          begin: "\\[",
          end: "\\]",
          contains: [s],
          illegal: "\\n",
          relevance: 0,
        },
        l = [
          {
            className: "attr",
            variants: [
              {
                begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)",
              },
              { begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' },
              {
                begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)",
              },
            ],
          },
          { className: "meta", begin: "^---\\s*$", relevance: 10 },
          {
            className: "string",
            begin:
              "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*",
          },
          {
            begin: "<%[%=-]?",
            end: "[%-]?%>",
            subLanguage: "ruby",
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0,
          },
          { className: "type", begin: "!\\w+!" + t },
          { className: "type", begin: "!<" + t + ">" },
          { className: "type", begin: "!" + t },
          { className: "type", begin: "!!" + t },
          { className: "meta", begin: "&" + e.UNDERSCORE_IDENT_RE + "$" },
          { className: "meta", begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$" },
          { className: "bullet", begin: "-(?=[ ]|$)", relevance: 0 },
          e.HASH_COMMENT_MODE,
          { beginKeywords: n, keywords: { literal: n } },
          {
            className: "number",
            begin:
              "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b",
          },
          { className: "number", begin: e.C_NUMBER_RE + "\\b", relevance: 0 },
          r,
          o,
          a,
        ],
        c = [...l];
      return (
        c.pop(),
        c.push(i),
        (s.contains = c),
        { name: "YAML", case_insensitive: !0, aliases: ["yml"], contains: l }
      );
    },
  });
  const Fe = Y;
  for (const e of Object.keys(ze)) {
    const n = e.replace("grmr_", "").replace("_", "-");
    Fe.registerLanguage(n, ze[e]);
  }
  return Fe;
})();
"object" == typeof exports &&
  "undefined" != typeof module &&
  (module.exports = hljs);
!(function (n) {
  "use strict";
  function d(n, t) {
    var r = (65535 & n) + (65535 & t);
    return (((n >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
  }
  function f(n, t, r, e, o, u) {
    return d(((c = d(d(t, n), d(e, u))) << (f = o)) | (c >>> (32 - f)), r);
    var c, f;
  }
  function l(n, t, r, e, o, u, c) {
    return f((t & r) | (~t & e), n, t, o, u, c);
  }
  function v(n, t, r, e, o, u, c) {
    return f((t & e) | (r & ~e), n, t, o, u, c);
  }
  function g(n, t, r, e, o, u, c) {
    return f(t ^ r ^ e, n, t, o, u, c);
  }
  function m(n, t, r, e, o, u, c) {
    return f(r ^ (t | ~e), n, t, o, u, c);
  }
  function i(n, t) {
    var r, e, o, u;
    (n[t >> 5] |= 128 << t % 32), (n[14 + (((t + 64) >>> 9) << 4)] = t);
    for (
      var c = 1732584193, f = -271733879, i = -1732584194, a = 271733878, h = 0;
      h < n.length;
      h += 16
    )
      (c = l((r = c), (e = f), (o = i), (u = a), n[h], 7, -680876936)),
        (a = l(a, c, f, i, n[h + 1], 12, -389564586)),
        (i = l(i, a, c, f, n[h + 2], 17, 606105819)),
        (f = l(f, i, a, c, n[h + 3], 22, -1044525330)),
        (c = l(c, f, i, a, n[h + 4], 7, -176418897)),
        (a = l(a, c, f, i, n[h + 5], 12, 1200080426)),
        (i = l(i, a, c, f, n[h + 6], 17, -1473231341)),
        (f = l(f, i, a, c, n[h + 7], 22, -45705983)),
        (c = l(c, f, i, a, n[h + 8], 7, 1770035416)),
        (a = l(a, c, f, i, n[h + 9], 12, -1958414417)),
        (i = l(i, a, c, f, n[h + 10], 17, -42063)),
        (f = l(f, i, a, c, n[h + 11], 22, -1990404162)),
        (c = l(c, f, i, a, n[h + 12], 7, 1804603682)),
        (a = l(a, c, f, i, n[h + 13], 12, -40341101)),
        (i = l(i, a, c, f, n[h + 14], 17, -1502002290)),
        (c = v(
          c,
          (f = l(f, i, a, c, n[h + 15], 22, 1236535329)),
          i,
          a,
          n[h + 1],
          5,
          -165796510
        )),
        (a = v(a, c, f, i, n[h + 6], 9, -1069501632)),
        (i = v(i, a, c, f, n[h + 11], 14, 643717713)),
        (f = v(f, i, a, c, n[h], 20, -373897302)),
        (c = v(c, f, i, a, n[h + 5], 5, -701558691)),
        (a = v(a, c, f, i, n[h + 10], 9, 38016083)),
        (i = v(i, a, c, f, n[h + 15], 14, -660478335)),
        (f = v(f, i, a, c, n[h + 4], 20, -405537848)),
        (c = v(c, f, i, a, n[h + 9], 5, 568446438)),
        (a = v(a, c, f, i, n[h + 14], 9, -1019803690)),
        (i = v(i, a, c, f, n[h + 3], 14, -187363961)),
        (f = v(f, i, a, c, n[h + 8], 20, 1163531501)),
        (c = v(c, f, i, a, n[h + 13], 5, -1444681467)),
        (a = v(a, c, f, i, n[h + 2], 9, -51403784)),
        (i = v(i, a, c, f, n[h + 7], 14, 1735328473)),
        (c = g(
          c,
          (f = v(f, i, a, c, n[h + 12], 20, -1926607734)),
          i,
          a,
          n[h + 5],
          4,
          -378558
        )),
        (a = g(a, c, f, i, n[h + 8], 11, -2022574463)),
        (i = g(i, a, c, f, n[h + 11], 16, 1839030562)),
        (f = g(f, i, a, c, n[h + 14], 23, -35309556)),
        (c = g(c, f, i, a, n[h + 1], 4, -1530992060)),
        (a = g(a, c, f, i, n[h + 4], 11, 1272893353)),
        (i = g(i, a, c, f, n[h + 7], 16, -155497632)),
        (f = g(f, i, a, c, n[h + 10], 23, -1094730640)),
        (c = g(c, f, i, a, n[h + 13], 4, 681279174)),
        (a = g(a, c, f, i, n[h], 11, -358537222)),
        (i = g(i, a, c, f, n[h + 3], 16, -722521979)),
        (f = g(f, i, a, c, n[h + 6], 23, 76029189)),
        (c = g(c, f, i, a, n[h + 9], 4, -640364487)),
        (a = g(a, c, f, i, n[h + 12], 11, -421815835)),
        (i = g(i, a, c, f, n[h + 15], 16, 530742520)),
        (c = m(
          c,
          (f = g(f, i, a, c, n[h + 2], 23, -995338651)),
          i,
          a,
          n[h],
          6,
          -198630844
        )),
        (a = m(a, c, f, i, n[h + 7], 10, 1126891415)),
        (i = m(i, a, c, f, n[h + 14], 15, -1416354905)),
        (f = m(f, i, a, c, n[h + 5], 21, -57434055)),
        (c = m(c, f, i, a, n[h + 12], 6, 1700485571)),
        (a = m(a, c, f, i, n[h + 3], 10, -1894986606)),
        (i = m(i, a, c, f, n[h + 10], 15, -1051523)),
        (f = m(f, i, a, c, n[h + 1], 21, -2054922799)),
        (c = m(c, f, i, a, n[h + 8], 6, 1873313359)),
        (a = m(a, c, f, i, n[h + 15], 10, -30611744)),
        (i = m(i, a, c, f, n[h + 6], 15, -1560198380)),
        (f = m(f, i, a, c, n[h + 13], 21, 1309151649)),
        (c = m(c, f, i, a, n[h + 4], 6, -145523070)),
        (a = m(a, c, f, i, n[h + 11], 10, -1120210379)),
        (i = m(i, a, c, f, n[h + 2], 15, 718787259)),
        (f = m(f, i, a, c, n[h + 9], 21, -343485551)),
        (c = d(c, r)),
        (f = d(f, e)),
        (i = d(i, o)),
        (a = d(a, u));
    return [c, f, i, a];
  }
  function a(n) {
    for (var t = "", r = 32 * n.length, e = 0; e < r; e += 8)
      t += String.fromCharCode((n[e >> 5] >>> e % 32) & 255);
    return t;
  }
  function h(n) {
    var t = [];
    for (t[(n.length >> 2) - 1] = void 0, e = 0; e < t.length; e += 1) t[e] = 0;
    for (var r = 8 * n.length, e = 0; e < r; e += 8)
      t[e >> 5] |= (255 & n.charCodeAt(e / 8)) << e % 32;
    return t;
  }
  function e(n) {
    for (var t, r = "0123456789abcdef", e = "", o = 0; o < n.length; o += 1)
      (t = n.charCodeAt(o)), (e += r.charAt((t >>> 4) & 15) + r.charAt(15 & t));
    return e;
  }
  function r(n) {
    return unescape(encodeURIComponent(n));
  }
  function o(n) {
    return a(i(h((t = r(n))), 8 * t.length));
    var t;
  }
  function u(n, t) {
    return (function (n, t) {
      var r,
        e,
        o = h(n),
        u = [],
        c = [];
      for (
        u[15] = c[15] = void 0,
          16 < o.length && (o = i(o, 8 * n.length)),
          r = 0;
        r < 16;
        r += 1
      )
        (u[r] = 909522486 ^ o[r]), (c[r] = 1549556828 ^ o[r]);
      return (
        (e = i(u.concat(h(t)), 512 + 8 * t.length)), a(i(c.concat(e), 640))
      );
    })(r(n), r(t));
  }
  function t(n, t, r) {
    return t ? (r ? u(t, n) : e(u(t, n))) : r ? o(n) : e(o(n));
  }
  "function" == typeof define && define.amd
    ? define(function () {
        return t;
      })
    : "object" == typeof module && module.exports
    ? (module.exports = t)
    : (n.md5 = t);
})(this);
//# sourceMappingURL=md5.min.js.map
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }
})(this, function () {
  var NProgress = {};

  NProgress.version = "0.2.0";

  var Settings = (NProgress.settings = {
    minimum: 0.08,
    easing: "linear",
    positionUsing: "",
    speed: 200,
    trickle: true,
    trickleSpeed: 200,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: "body",
    template:
      '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
  });

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function (options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key))
        Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function (n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = n === 1 ? null : n;

    var progress = NProgress.render(!started),
      bar = progress.querySelector(Settings.barSelector),
      speed = Settings.speed,
      ease = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function (next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === "")
        Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // // Fade out
        // css(progress, {
        //   transition: 'none',
        //   opacity: 1
        // });
        // progress.offsetWidth; /* Repaint */
        // setTimeout(function() {
        //   css(progress, {
        //     transition: 'all ' + speed + 'ms linear',
        //     opacity: 0
        //   });
        //   setTimeout(function() {
        //     NProgress.remove();
        //     next();
        //   }, speed);
        // }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function () {
    return typeof NProgress.status === "number";
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function () {
    if (!NProgress.status) NProgress.set(0);

    var work = function () {
      setTimeout(function () {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function (force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function (amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else if (n > 1) {
      return;
    } else {
      if (typeof amount !== "number") {
        if (n >= 0 && n < 0.2) {
          amount = 0.1;
        } else if (n >= 0.2 && n < 0.5) {
          amount = 0.04;
        } else if (n >= 0.5 && n < 0.8) {
          amount = 0.02;
        } else if (n >= 0.8 && n < 0.99) {
          amount = 0.005;
        } else {
          amount = 0;
        }
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function () {
    return NProgress.inc();
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function () {
    var initial = 0,
      current = 0;

    NProgress.promise = function ($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function () {
        current--;
        if (current === 0) {
          initial = 0;
          NProgress.done();
        } else {
          NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };
  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function (fromStart) {
    if (NProgress.isRendered()) return document.getElementById("nprogress");

    addClass(document.documentElement, "nprogress-busy");

    var progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = Settings.template;

    var bar = progress.querySelector(Settings.barSelector),
      perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0),
      parent = document.querySelector(Settings.parent),
      spinner;

    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)",
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, "nprogress-custom-parent");
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function () {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(
      document.querySelector(Settings.parent),
      "nprogress-custom-parent"
    );
    var progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function () {
    return !!document.getElementById("nprogress");
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function () {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix =
      "WebkitTransform" in bodyStyle
        ? "Webkit"
        : "MozTransform" in bodyStyle
        ? "Moz"
        : "msTransform" in bodyStyle
        ? "ms"
        : "OTransform" in bodyStyle
        ? "O"
        : "";

    if (vendorPrefix + "Perspective" in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return "translate3d";
    } else if (vendorPrefix + "Transform" in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return "translate";
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return "margin";
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }

  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === "translate3d") {
      barCSS = { transform: "translate3d(" + toBarPerc(n) + "%,0,0)" };
    } else if (Settings.positionUsing === "translate") {
      barCSS = { transform: "translate(" + toBarPerc(n) + "%,0)" };
    } else {
      barCSS = { "margin-left": toBarPerc(n) + "%" };
    }

    barCSS.transition = "all " + speed + "ms " + ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function () {
    var pending = [];

    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function (fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function () {
    var cssPrefixes = ["Webkit", "O", "Moz", "ms"],
      cssProps = {};

    function camelCase(string) {
      return string
        .replace(/^-ms-/, "ms-")
        .replace(/-([\da-z])/gi, function (match, letter) {
          return letter.toUpperCase();
        });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
        capName = name.charAt(0).toUpperCase() + name.slice(1),
        vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function (element, properties) {
      var args = arguments,
        prop,
        value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop))
            applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    };
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == "string" ? element : classList(element);
    return list.indexOf(" " + name + " ") >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
      newList = oldList + name;

    if (hasClass(oldList, name)) return;

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
      newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(" " + name + " ", " ");

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element.
   * The list is wrapped with a single space on each end to facilitate finding
   * matches within the list.
   */

  function classList(element) {
    return (" " + ((element && element.className) || "") + " ").replace(
      /\s+/gi,
      " "
    );
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});

/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */ (function (a, b) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = b())
    : "function" == typeof define && define.amd
    ? define(b)
    : ((a = a || self), (a.PerfectScrollbar = b()));
})(this, function () {
  "use strict";
  var u = Math.abs,
    v = Math.floor;
  function a(a) {
    return getComputedStyle(a);
  }
  function b(a, b) {
    for (var c in b) {
      var d = b[c];
      "number" == typeof d && (d += "px"), (a.style[c] = d);
    }
    return a;
  }
  function c(a) {
    var b = document.createElement("div");
    return (b.className = a), b;
  }
  function d(a, b) {
    if (!w) throw new Error("No element matching method supported");
    return w.call(a, b);
  }
  function e(a) {
    a.remove ? a.remove() : a.parentNode && a.parentNode.removeChild(a);
  }
  function f(a, b) {
    return Array.prototype.filter.call(a.children, function (a) {
      return d(a, b);
    });
  }
  function g(a, b) {
    var c = a.element.classList,
      d = z.state.scrolling(b);
    c.contains(d) ? clearTimeout(A[b]) : c.add(d);
  }
  function h(a, b) {
    A[b] = setTimeout(function () {
      return a.isAlive && a.element.classList.remove(z.state.scrolling(b));
    }, a.settings.scrollingThreshold);
  }
  function j(a, b) {
    g(a, b), h(a, b);
  }
  function k(a) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(a);
    var b = document.createEvent("CustomEvent");
    return b.initCustomEvent(a, !1, !1, void 0), b;
  }
  function l(a, b, c, d, e) {
    void 0 === d && (d = !0), void 0 === e && (e = !1);
    var f;
    if ("top" === b)
      f = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
    else if ("left" === b)
      f = [
        "contentWidth",
        "containerWidth",
        "scrollLeft",
        "x",
        "left",
        "right",
      ];
    else throw new Error("A proper axis should be provided");
    m(a, c, f, d, e);
  }
  function m(a, b, c, d, e) {
    var f = c[0],
      g = c[1],
      h = c[2],
      i = c[3],
      l = c[4],
      m = c[5];
    void 0 === d && (d = !0), void 0 === e && (e = !1);
    var n = a.element; // reset reach
    (a.reach[i] = null),
      1 > n[h] && (a.reach[i] = "start"),
      n[h] > a[f] - a[g] - 1 && (a.reach[i] = "end"),
      b &&
        (n.dispatchEvent(k("ps-scroll-" + i)),
        0 > b
          ? n.dispatchEvent(k("ps-scroll-" + l))
          : 0 < b && n.dispatchEvent(k("ps-scroll-" + m)),
        d && j(a, i)),
      a.reach[i] &&
        (b || e) &&
        n.dispatchEvent(k("ps-" + i + "-reach-" + a.reach[i]));
  }
  function n(a) {
    return parseInt(a, 10) || 0;
  }
  function o(a) {
    return (
      d(a, "input,[contenteditable]") ||
      d(a, "select,[contenteditable]") ||
      d(a, "textarea,[contenteditable]") ||
      d(a, "button,[contenteditable]")
    );
  }
  function p(b) {
    var c = a(b);
    return (
      n(c.width) +
      n(c.paddingLeft) +
      n(c.paddingRight) +
      n(c.borderLeftWidth) +
      n(c.borderRightWidth)
    );
  }
  function q(a) {
    var b = Math.ceil,
      c = a.element,
      d = v(c.scrollTop),
      g = c.getBoundingClientRect();
    (a.containerWidth = b(g.width)),
      (a.containerHeight = b(g.height)),
      (a.contentWidth = c.scrollWidth),
      (a.contentHeight = c.scrollHeight),
      c.contains(a.scrollbarXRail) ||
        (f(c, z.element.rail("x")).forEach(function (a) {
          return e(a);
        }),
        c.appendChild(a.scrollbarXRail)),
      c.contains(a.scrollbarYRail) ||
        (f(c, z.element.rail("y")).forEach(function (a) {
          return e(a);
        }),
        c.appendChild(a.scrollbarYRail)),
      !a.settings.suppressScrollX &&
      a.containerWidth + a.settings.scrollXMarginOffset < a.contentWidth
        ? ((a.scrollbarXActive = !0),
          (a.railXWidth = a.containerWidth - a.railXMarginWidth),
          (a.railXRatio = a.containerWidth / a.railXWidth),
          (a.scrollbarXWidth = r(
            a,
            n((a.railXWidth * a.containerWidth) / a.contentWidth)
          )),
          (a.scrollbarXLeft = n(
            ((a.negativeScrollAdjustment + c.scrollLeft) *
              (a.railXWidth - a.scrollbarXWidth)) /
              (a.contentWidth - a.containerWidth)
          )))
        : (a.scrollbarXActive = !1),
      !a.settings.suppressScrollY &&
      a.containerHeight + a.settings.scrollYMarginOffset < a.contentHeight
        ? ((a.scrollbarYActive = !0),
          (a.railYHeight = a.containerHeight - a.railYMarginHeight),
          (a.railYRatio = a.containerHeight / a.railYHeight),
          (a.scrollbarYHeight = r(
            a,
            n((a.railYHeight * a.containerHeight) / a.contentHeight)
          )),
          (a.scrollbarYTop = n(
            (d * (a.railYHeight - a.scrollbarYHeight)) /
              (a.contentHeight - a.containerHeight)
          )))
        : (a.scrollbarYActive = !1),
      a.scrollbarXLeft >= a.railXWidth - a.scrollbarXWidth &&
        (a.scrollbarXLeft = a.railXWidth - a.scrollbarXWidth),
      a.scrollbarYTop >= a.railYHeight - a.scrollbarYHeight &&
        (a.scrollbarYTop = a.railYHeight - a.scrollbarYHeight),
      s(c, a),
      a.scrollbarXActive
        ? c.classList.add(z.state.active("x"))
        : (c.classList.remove(z.state.active("x")),
          (a.scrollbarXWidth = 0),
          (a.scrollbarXLeft = 0),
          (c.scrollLeft = !0 === a.isRtl ? a.contentWidth : 0)),
      a.scrollbarYActive
        ? c.classList.add(z.state.active("y"))
        : (c.classList.remove(z.state.active("y")),
          (a.scrollbarYHeight = 0),
          (a.scrollbarYTop = 0),
          (c.scrollTop = 0));
  }
  function r(a, b) {
    var c = Math.min,
      d = Math.max;
    return (
      a.settings.minScrollbarLength &&
        (b = d(b, a.settings.minScrollbarLength)),
      a.settings.maxScrollbarLength &&
        (b = c(b, a.settings.maxScrollbarLength)),
      b
    );
  }
  function s(a, c) {
    var d = { width: c.railXWidth },
      e = v(a.scrollTop);
    (d.left = c.isRtl
      ? c.negativeScrollAdjustment +
        a.scrollLeft +
        c.containerWidth -
        c.contentWidth
      : a.scrollLeft),
      c.isScrollbarXUsingBottom
        ? (d.bottom = c.scrollbarXBottom - e)
        : (d.top = c.scrollbarXTop + e),
      b(c.scrollbarXRail, d);
    var f = { top: e, height: c.railYHeight };
    c.isScrollbarYUsingRight
      ? c.isRtl
        ? (f.right =
            c.contentWidth -
            (c.negativeScrollAdjustment + a.scrollLeft) -
            c.scrollbarYRight -
            c.scrollbarYOuterWidth -
            9)
        : (f.right = c.scrollbarYRight - a.scrollLeft)
      : c.isRtl
      ? (f.left =
          c.negativeScrollAdjustment +
          a.scrollLeft +
          2 * c.containerWidth -
          c.contentWidth -
          c.scrollbarYLeft -
          c.scrollbarYOuterWidth)
      : (f.left = c.scrollbarYLeft + a.scrollLeft),
      b(c.scrollbarYRail, f),
      b(c.scrollbarX, {
        left: c.scrollbarXLeft,
        width: c.scrollbarXWidth - c.railBorderXWidth,
      }),
      b(c.scrollbarY, {
        top: c.scrollbarYTop,
        height: c.scrollbarYHeight - c.railBorderYWidth,
      });
  }
  function t(a, b) {
    function c(b) {
      b.touches && b.touches[0] && (b[k] = b.touches[0].pageY),
        (s[o] = t + v * (b[k] - u)),
        g(a, p),
        q(a),
        b.stopPropagation(),
        b.preventDefault();
    }
    function d() {
      h(a, p),
        a[r].classList.remove(z.state.clicking),
        a.event.unbind(a.ownerDocument, "mousemove", c);
    }
    function f(b, e) {
      (t = s[o]),
        e && b.touches && (b[k] = b.touches[0].pageY),
        (u = b[k]),
        (v = (a[j] - a[i]) / (a[l] - a[n])),
        e
          ? a.event.bind(a.ownerDocument, "touchmove", c)
          : (a.event.bind(a.ownerDocument, "mousemove", c),
            a.event.once(a.ownerDocument, "mouseup", d),
            b.preventDefault()),
        a[r].classList.add(z.state.clicking),
        b.stopPropagation();
    }
    var i = b[0],
      j = b[1],
      k = b[2],
      l = b[3],
      m = b[4],
      n = b[5],
      o = b[6],
      p = b[7],
      r = b[8],
      s = a.element,
      t = null,
      u = null,
      v = null;
    a.event.bind(a[m], "mousedown", function (a) {
      f(a);
    }),
      a.event.bind(a[m], "touchstart", function (a) {
        f(a, !0);
      });
  }
  var w =
      "undefined" != typeof Element &&
      (Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector),
    z = {
      main: "ps",
      rtl: "ps__rtl",
      element: {
        thumb: function (a) {
          return "ps__thumb-" + a;
        },
        rail: function (a) {
          return "ps__rail-" + a;
        },
        consuming: "ps__child--consume",
      },
      state: {
        focus: "ps--focus",
        clicking: "ps--clicking",
        active: function (a) {
          return "ps--active-" + a;
        },
        scrolling: function (a) {
          return "ps--scrolling-" + a;
        },
      },
    },
    A = { x: null, y: null },
    B = function (a) {
      (this.element = a), (this.handlers = {});
    },
    C = { isEmpty: { configurable: !0 } };
  (B.prototype.bind = function (a, b) {
    "undefined" == typeof this.handlers[a] && (this.handlers[a] = []),
      this.handlers[a].push(b),
      this.element.addEventListener(a, b, !1);
  }),
    (B.prototype.unbind = function (a, b) {
      var c = this;
      this.handlers[a] = this.handlers[a].filter(function (d) {
        return (
          !!(b && d !== b) || (c.element.removeEventListener(a, d, !1), !1)
        );
      });
    }),
    (B.prototype.unbindAll = function () {
      for (var a in this.handlers) this.unbind(a);
    }),
    (C.isEmpty.get = function () {
      var a = this;
      return Object.keys(this.handlers).every(function (b) {
        return 0 === a.handlers[b].length;
      });
    }),
    Object.defineProperties(B.prototype, C);
  var D = function () {
    this.eventElements = [];
  };
  (D.prototype.eventElement = function (a) {
    var b = this.eventElements.filter(function (b) {
      return b.element === a;
    })[0];
    return b || ((b = new B(a)), this.eventElements.push(b)), b;
  }),
    (D.prototype.bind = function (a, b, c) {
      this.eventElement(a).bind(b, c);
    }),
    (D.prototype.unbind = function (a, b, c) {
      var d = this.eventElement(a);
      d.unbind(b, c),
        d.isEmpty &&
          this.eventElements.splice(this.eventElements.indexOf(d), 1);
    }),
    (D.prototype.unbindAll = function () {
      this.eventElements.forEach(function (a) {
        return a.unbindAll();
      }),
        (this.eventElements = []);
    }),
    (D.prototype.once = function (a, b, c) {
      var d = this.eventElement(a),
        e = function (a) {
          d.unbind(b, e), c(a);
        };
      d.bind(b, e);
    });
  var E = {
      isWebKit:
        "undefined" != typeof document &&
        "WebkitAppearance" in document.documentElement.style,
      supportsTouch:
        "undefined" != typeof window &&
        ("ontouchstart" in window ||
          ("maxTouchPoints" in window.navigator &&
            0 < window.navigator.maxTouchPoints) ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
      supportsIePointer:
        "undefined" != typeof navigator && navigator.msMaxTouchPoints,
      isChrome:
        "undefined" != typeof navigator &&
        /Chrome/i.test(navigator && navigator.userAgent),
    },
    F = function () {
      return {
        handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
        maxScrollbarLength: null,
        minScrollbarLength: null,
        scrollingThreshold: 1e3,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        suppressScrollX: !1,
        suppressScrollY: !1,
        swipeEasing: !0,
        useBothWheelAxes: !1,
        wheelPropagation: !0,
        wheelSpeed: 1,
      };
    },
    G = {
      "click-rail": function (a) {
        a.element;
        a.event.bind(a.scrollbarY, "mousedown", function (a) {
          return a.stopPropagation();
        }),
          a.event.bind(a.scrollbarYRail, "mousedown", function (b) {
            var c =
                b.pageY -
                window.pageYOffset -
                a.scrollbarYRail.getBoundingClientRect().top,
              d = c > a.scrollbarYTop ? 1 : -1;
            (a.element.scrollTop += d * a.containerHeight),
              q(a),
              b.stopPropagation();
          }),
          a.event.bind(a.scrollbarX, "mousedown", function (a) {
            return a.stopPropagation();
          }),
          a.event.bind(a.scrollbarXRail, "mousedown", function (b) {
            var c =
                b.pageX -
                window.pageXOffset -
                a.scrollbarXRail.getBoundingClientRect().left,
              d = c > a.scrollbarXLeft ? 1 : -1;
            (a.element.scrollLeft += d * a.containerWidth),
              q(a),
              b.stopPropagation();
          });
      },
      "drag-thumb": function (a) {
        t(a, [
          "containerWidth",
          "contentWidth",
          "pageX",
          "railXWidth",
          "scrollbarX",
          "scrollbarXWidth",
          "scrollLeft",
          "x",
          "scrollbarXRail",
        ]),
          t(a, [
            "containerHeight",
            "contentHeight",
            "pageY",
            "railYHeight",
            "scrollbarY",
            "scrollbarYHeight",
            "scrollTop",
            "y",
            "scrollbarYRail",
          ]);
      },
      keyboard: function (a) {
        function b(b, d) {
          var e = v(c.scrollTop);
          if (0 === b) {
            if (!a.scrollbarYActive) return !1;
            if (
              (0 === e && 0 < d) ||
              (e >= a.contentHeight - a.containerHeight && 0 > d)
            )
              return !a.settings.wheelPropagation;
          }
          var f = c.scrollLeft;
          if (0 === d) {
            if (!a.scrollbarXActive) return !1;
            if (
              (0 === f && 0 > b) ||
              (f >= a.contentWidth - a.containerWidth && 0 < b)
            )
              return !a.settings.wheelPropagation;
          }
          return !0;
        }
        var c = a.element,
          f = function () {
            return d(c, ":hover");
          },
          g = function () {
            return d(a.scrollbarX, ":focus") || d(a.scrollbarY, ":focus");
          };
        a.event.bind(a.ownerDocument, "keydown", function (d) {
          if (
            !(
              (d.isDefaultPrevented && d.isDefaultPrevented()) ||
              d.defaultPrevented
            ) &&
            (f() || g())
          ) {
            var e = document.activeElement
              ? document.activeElement
              : a.ownerDocument.activeElement;
            if (e) {
              if ("IFRAME" === e.tagName) e = e.contentDocument.activeElement;
              // go deeper if element is a webcomponent
              else for (; e.shadowRoot; ) e = e.shadowRoot.activeElement;
              if (o(e)) return;
            }
            var h = 0,
              i = 0;
            switch (d.which) {
              case 37:
                h = d.metaKey
                  ? -a.contentWidth
                  : d.altKey
                  ? -a.containerWidth
                  : -30;
                break;
              case 38:
                i = d.metaKey
                  ? a.contentHeight
                  : d.altKey
                  ? a.containerHeight
                  : 30;
                break;
              case 39:
                h = d.metaKey
                  ? a.contentWidth
                  : d.altKey
                  ? a.containerWidth
                  : 30;
                break;
              case 40:
                i = d.metaKey
                  ? -a.contentHeight
                  : d.altKey
                  ? -a.containerHeight
                  : -30;
                break;
              case 32:
                i = d.shiftKey ? a.containerHeight : -a.containerHeight;
                break;
              case 33:
                i = a.containerHeight;
                break;
              case 34:
                i = -a.containerHeight;
                break;
              case 36:
                i = a.contentHeight;
                break;
              case 35:
                i = -a.contentHeight;
                break;
              default:
                return;
            }
            (a.settings.suppressScrollX && 0 !== h) ||
              (a.settings.suppressScrollY && 0 !== i) ||
              ((c.scrollTop -= i),
              (c.scrollLeft += h),
              q(a),
              b(h, i) && d.preventDefault());
          }
        });
      },
      wheel: function (b) {
        function c(a, c) {
          var d,
            e = v(h.scrollTop),
            f = 0 === h.scrollTop,
            g = e + h.offsetHeight === h.scrollHeight,
            i = 0 === h.scrollLeft,
            j = h.scrollLeft + h.offsetWidth === h.scrollWidth;
          return (
            (d = u(c) > u(a) ? f || g : i || j),
            !d || !b.settings.wheelPropagation
          );
        }
        function d(a) {
          var b = a.deltaX,
            c = -1 * a.deltaY;
          return (
            ("undefined" == typeof b || "undefined" == typeof c) &&
              ((b = (-1 * a.wheelDeltaX) / 6), (c = a.wheelDeltaY / 6)),
            a.deltaMode && 1 === a.deltaMode && ((b *= 10), (c *= 10)),
            b !== b &&
              c !== c /* NaN checks */ &&
              ((b = 0), (c = a.wheelDelta)),
            a.shiftKey ? [-c, -b] : [b, c]
          );
        }
        function f(b, c, d) {
          // FIXME: this is a workaround for <select> issue in FF and IE #571
          if (!E.isWebKit && h.querySelector("select:focus")) return !0;
          if (!h.contains(b)) return !1;
          for (var e = b; e && e !== h; ) {
            if (e.classList.contains(z.element.consuming)) return !0;
            var f = a(e); // if deltaY && vertical scrollable
            if (d && f.overflowY.match(/(scroll|auto)/)) {
              var g = e.scrollHeight - e.clientHeight;
              if (
                0 < g &&
                ((0 < e.scrollTop && 0 > d) || (e.scrollTop < g && 0 < d))
              )
                return !0;
            } // if deltaX && horizontal scrollable
            if (c && f.overflowX.match(/(scroll|auto)/)) {
              var i = e.scrollWidth - e.clientWidth;
              if (
                0 < i &&
                ((0 < e.scrollLeft && 0 > c) || (e.scrollLeft < i && 0 < c))
              )
                return !0;
            }
            e = e.parentNode;
          }
          return !1;
        }
        function g(a) {
          var e = d(a),
            g = e[0],
            i = e[1];
          if (!f(a.target, g, i)) {
            var j = !1;
            b.settings.useBothWheelAxes
              ? b.scrollbarYActive && !b.scrollbarXActive
                ? (i
                    ? (h.scrollTop -= i * b.settings.wheelSpeed)
                    : (h.scrollTop += g * b.settings.wheelSpeed),
                  (j = !0))
                : b.scrollbarXActive &&
                  !b.scrollbarYActive &&
                  (g
                    ? (h.scrollLeft += g * b.settings.wheelSpeed)
                    : (h.scrollLeft -= i * b.settings.wheelSpeed),
                  (j = !0))
              : ((h.scrollTop -= i * b.settings.wheelSpeed),
                (h.scrollLeft += g * b.settings.wheelSpeed)),
              q(b),
              (j = j || c(g, i)),
              j && !a.ctrlKey && (a.stopPropagation(), a.preventDefault());
          }
        }
        var h = b.element;
        "undefined" == typeof window.onwheel
          ? "undefined" != typeof window.onmousewheel &&
            b.event.bind(h, "mousewheel", g)
          : b.event.bind(h, "wheel", g);
      },
      touch: function (b) {
        function c(a, c) {
          var d = v(l.scrollTop),
            e = l.scrollLeft,
            f = u(a),
            g = u(c);
          if (g > f) {
            // user is perhaps trying to swipe up/down the page
            if (
              (0 > c && d === b.contentHeight - b.containerHeight) ||
              (0 < c && 0 === d)
            )
              // set prevent for mobile Chrome refresh
              return 0 === window.scrollY && 0 < c && E.isChrome;
          } else if (
            f > g &&
            ((0 > a && e === b.contentWidth - b.containerWidth) ||
              (0 < a && 0 === e))
          )
            // user is perhaps trying to swipe left/right across the page
            return !0;
          return !0;
        }
        function d(a, c) {
          (l.scrollTop -= c), (l.scrollLeft -= a), q(b);
        }
        function f(a) {
          return a.targetTouches ? a.targetTouches[0] : a;
        }
        function g(a) {
          return (
            !(a.pointerType && "pen" === a.pointerType && 0 === a.buttons) &&
            (!!(a.targetTouches && 1 === a.targetTouches.length) ||
              !!(
                a.pointerType &&
                "mouse" !== a.pointerType &&
                a.pointerType !== a.MSPOINTER_TYPE_MOUSE
              ))
          );
        }
        function h(a) {
          if (g(a)) {
            var b = f(a);
            (m.pageX = b.pageX),
              (m.pageY = b.pageY),
              (n = new Date().getTime()),
              null !== p && clearInterval(p);
          }
        }
        function i(b, c, d) {
          if (!l.contains(b)) return !1;
          for (var e = b; e && e !== l; ) {
            if (e.classList.contains(z.element.consuming)) return !0;
            var f = a(e); // if deltaY && vertical scrollable
            if (d && f.overflowY.match(/(scroll|auto)/)) {
              var g = e.scrollHeight - e.clientHeight;
              if (
                0 < g &&
                ((0 < e.scrollTop && 0 > d) || (e.scrollTop < g && 0 < d))
              )
                return !0;
            } // if deltaX && horizontal scrollable
            if (c && f.overflowX.match(/(scroll|auto)/)) {
              var h = e.scrollWidth - e.clientWidth;
              if (
                0 < h &&
                ((0 < e.scrollLeft && 0 > c) || (e.scrollLeft < h && 0 < c))
              )
                return !0;
            }
            e = e.parentNode;
          }
          return !1;
        }
        function j(a) {
          if (g(a)) {
            var b = f(a),
              e = { pageX: b.pageX, pageY: b.pageY },
              h = e.pageX - m.pageX,
              j = e.pageY - m.pageY;
            if (i(a.target, h, j)) return;
            d(h, j), (m = e);
            var k = new Date().getTime(),
              l = k - n;
            0 < l && ((o.x = h / l), (o.y = j / l), (n = k)),
              c(h, j) && a.preventDefault();
          }
        }
        function k() {
          b.settings.swipeEasing &&
            (clearInterval(p),
            (p = setInterval(function () {
              return b.isInitialized
                ? void clearInterval(p)
                : o.x || o.y
                ? 0.01 > u(o.x) && 0.01 > u(o.y)
                  ? void clearInterval(p)
                  : void (d(30 * o.x, 30 * o.y), (o.x *= 0.8), (o.y *= 0.8))
                : void clearInterval(p);
            }, 10)));
        }
        if (E.supportsTouch || E.supportsIePointer) {
          var l = b.element,
            m = {},
            n = 0,
            o = {},
            p = null;
          E.supportsTouch
            ? (b.event.bind(l, "touchstart", h),
              b.event.bind(l, "touchmove", j),
              b.event.bind(l, "touchend", k))
            : E.supportsIePointer &&
              (window.PointerEvent
                ? (b.event.bind(l, "pointerdown", h),
                  b.event.bind(l, "pointermove", j),
                  b.event.bind(l, "pointerup", k))
                : window.MSPointerEvent &&
                  (b.event.bind(l, "MSPointerDown", h),
                  b.event.bind(l, "MSPointerMove", j),
                  b.event.bind(l, "MSPointerUp", k)));
        }
      },
    },
    H = function (d, e) {
      var f = this;
      if (
        (void 0 === e && (e = {}),
        "string" == typeof d && (d = document.querySelector(d)),
        !d || !d.nodeName)
      )
        throw new Error(
          "no element is specified to initialize PerfectScrollbar"
        );
      for (var g in ((this.element = d),
      d.classList.add(z.main),
      (this.settings = F()),
      e))
        this.settings[g] = e[g];
      (this.containerWidth = null),
        (this.containerHeight = null),
        (this.contentWidth = null),
        (this.contentHeight = null);
      var h = function () {
          return d.classList.add(z.state.focus);
        },
        i = function () {
          return d.classList.remove(z.state.focus);
        };
      (this.isRtl = "rtl" === a(d).direction),
        !0 === this.isRtl && d.classList.add(z.rtl),
        (this.isNegativeScroll = (function () {
          var a = d.scrollLeft,
            b = null;
          return (
            (d.scrollLeft = -1), (b = 0 > d.scrollLeft), (d.scrollLeft = a), b
          );
        })()),
        (this.negativeScrollAdjustment = this.isNegativeScroll
          ? d.scrollWidth - d.clientWidth
          : 0),
        (this.event = new D()),
        (this.ownerDocument = d.ownerDocument || document),
        (this.scrollbarXRail = c(z.element.rail("x"))),
        d.appendChild(this.scrollbarXRail),
        (this.scrollbarX = c(z.element.thumb("x"))),
        this.scrollbarXRail.appendChild(this.scrollbarX),
        this.scrollbarX.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarX, "focus", h),
        this.event.bind(this.scrollbarX, "blur", i),
        (this.scrollbarXActive = null),
        (this.scrollbarXWidth = null),
        (this.scrollbarXLeft = null);
      var j = a(this.scrollbarXRail);
      (this.scrollbarXBottom = parseInt(j.bottom, 10)),
        isNaN(this.scrollbarXBottom)
          ? ((this.isScrollbarXUsingBottom = !1),
            (this.scrollbarXTop = n(j.top)))
          : (this.isScrollbarXUsingBottom = !0),
        (this.railBorderXWidth = n(j.borderLeftWidth) + n(j.borderRightWidth)),
        b(this.scrollbarXRail, { display: "block" }),
        (this.railXMarginWidth = n(j.marginLeft) + n(j.marginRight)),
        b(this.scrollbarXRail, { display: "" }),
        (this.railXWidth = null),
        (this.railXRatio = null),
        (this.scrollbarYRail = c(z.element.rail("y"))),
        d.appendChild(this.scrollbarYRail),
        (this.scrollbarY = c(z.element.thumb("y"))),
        this.scrollbarYRail.appendChild(this.scrollbarY),
        this.scrollbarY.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarY, "focus", h),
        this.event.bind(this.scrollbarY, "blur", i),
        (this.scrollbarYActive = null),
        (this.scrollbarYHeight = null),
        (this.scrollbarYTop = null);
      var k = a(this.scrollbarYRail);
      (this.scrollbarYRight = parseInt(k.right, 10)),
        isNaN(this.scrollbarYRight)
          ? ((this.isScrollbarYUsingRight = !1),
            (this.scrollbarYLeft = n(k.left)))
          : (this.isScrollbarYUsingRight = !0),
        (this.scrollbarYOuterWidth = this.isRtl ? p(this.scrollbarY) : null),
        (this.railBorderYWidth = n(k.borderTopWidth) + n(k.borderBottomWidth)),
        b(this.scrollbarYRail, { display: "block" }),
        (this.railYMarginHeight = n(k.marginTop) + n(k.marginBottom)),
        b(this.scrollbarYRail, { display: "" }),
        (this.railYHeight = null),
        (this.railYRatio = null),
        (this.reach = {
          x:
            0 >= d.scrollLeft
              ? "start"
              : d.scrollLeft >= this.contentWidth - this.containerWidth
              ? "end"
              : null,
          y:
            0 >= d.scrollTop
              ? "start"
              : d.scrollTop >= this.contentHeight - this.containerHeight
              ? "end"
              : null,
        }),
        (this.isAlive = !0),
        this.settings.handlers.forEach(function (a) {
          return G[a](f);
        }),
        (this.lastScrollTop = v(d.scrollTop)),
        (this.lastScrollLeft = d.scrollLeft),
        this.event.bind(this.element, "scroll", function (a) {
          return f.onScroll(a);
        }),
        q(this);
    };
  return (
    (H.prototype.update = function () {
      this.isAlive && // Recalcuate negative scrollLeft adjustment
        // Recalculate rail margins
        // Hide scrollbars not to affect scrollWidth and scrollHeight
        ((this.negativeScrollAdjustment = this.isNegativeScroll
          ? this.element.scrollWidth - this.element.clientWidth
          : 0),
        b(this.scrollbarXRail, { display: "block" }),
        b(this.scrollbarYRail, { display: "block" }),
        (this.railXMarginWidth =
          n(a(this.scrollbarXRail).marginLeft) +
          n(a(this.scrollbarXRail).marginRight)),
        (this.railYMarginHeight =
          n(a(this.scrollbarYRail).marginTop) +
          n(a(this.scrollbarYRail).marginBottom)),
        b(this.scrollbarXRail, { display: "none" }),
        b(this.scrollbarYRail, { display: "none" }),
        q(this),
        l(this, "top", 0, !1, !0),
        l(this, "left", 0, !1, !0),
        b(this.scrollbarXRail, { display: "" }),
        b(this.scrollbarYRail, { display: "" }));
    }),
    (H.prototype.onScroll = function () {
      this.isAlive &&
        (q(this),
        l(this, "top", this.element.scrollTop - this.lastScrollTop),
        l(this, "left", this.element.scrollLeft - this.lastScrollLeft),
        (this.lastScrollTop = v(this.element.scrollTop)),
        (this.lastScrollLeft = this.element.scrollLeft));
    }),
    (H.prototype.destroy = function () {
      this.isAlive && // unset elements
        (this.event.unbindAll(),
        e(this.scrollbarX),
        e(this.scrollbarY),
        e(this.scrollbarXRail),
        e(this.scrollbarYRail),
        this.removePsClasses(),
        (this.element = null),
        (this.scrollbarX = null),
        (this.scrollbarY = null),
        (this.scrollbarXRail = null),
        (this.scrollbarYRail = null),
        (this.isAlive = !1));
    }),
    (H.prototype.removePsClasses = function () {
      this.element.className = this.element.className
        .split(" ")
        .filter(function (a) {
          return !a.match(/^ps([-_].+|)$/);
        })
        .join(" ");
    }),
    H
  );
});
//# sourceMappingURL=perfect-scrollbar.min.js.map

/**
 * Swiper 6.3.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 9, 2020
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).Swiper = t());
})(this, function () {
  "use strict";
  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      (s.enumerable = s.enumerable || !1),
        (s.configurable = !0),
        "value" in s && (s.writable = !0),
        Object.defineProperty(e, s.key, s);
    }
  }
  function t() {
    return (t =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          for (var s in i)
            Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
        }
        return e;
      }).apply(this, arguments);
  }
  function i(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function s(e, t) {
    void 0 === e && (e = {}),
      void 0 === t && (t = {}),
      Object.keys(t).forEach(function (a) {
        void 0 === e[a]
          ? (e[a] = t[a])
          : i(t[a]) && i(e[a]) && Object.keys(t[a]).length > 0 && s(e[a], t[a]);
      });
  }
  var a = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: { blur: function () {}, nodeName: "" },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return { initEvent: function () {} };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        },
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function r() {
    var e = "undefined" != typeof document ? document : {};
    return s(e, a), e;
  }
  var n = {
    document: a,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {},
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return "";
        },
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
    requestAnimationFrame: function (e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function (e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function l() {
    var e = "undefined" != typeof window ? window : {};
    return s(e, n), e;
  }
  function o(e) {
    return (o = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function d(e, t) {
    return (d =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function h() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function p(e, t, i) {
    return (p = h()
      ? Reflect.construct
      : function (e, t, i) {
          var s = [null];
          s.push.apply(s, t);
          var a = new (Function.bind.apply(e, s))();
          return i && d(a, i.prototype), a;
        }).apply(null, arguments);
  }
  function u(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (u = function (e) {
      if (
        null === e ||
        ((i = e), -1 === Function.toString.call(i).indexOf("[native code]"))
      )
        return e;
      var i;
      if ("function" != typeof e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, s);
      }
      function s() {
        return p(e, arguments, o(this).constructor);
      }
      return (
        (s.prototype = Object.create(e.prototype, {
          constructor: {
            value: s,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        d(s, e)
      );
    })(e);
  }
  var c = (function (e) {
    var t, i;
    function s(t) {
      var i, s, a;
      return (
        (i = e.call.apply(e, [this].concat(t)) || this),
        (s = (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(i)),
        (a = s.__proto__),
        Object.defineProperty(s, "__proto__", {
          get: function () {
            return a;
          },
          set: function (e) {
            a.__proto__ = e;
          },
        }),
        i
      );
    }
    return (
      (i = e),
      ((t = s).prototype = Object.create(i.prototype)),
      (t.prototype.constructor = t),
      (t.__proto__ = i),
      s
    );
  })(u(Array));
  function v(e) {
    void 0 === e && (e = []);
    var t = [];
    return (
      e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
      }),
      t
    );
  }
  function f(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function m(e, t) {
    var i = l(),
      s = r(),
      a = [];
    if (!t && e instanceof c) return e;
    if (!e) return new c(a);
    if ("string" == typeof e) {
      var n = e.trim();
      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        var o = "div";
        0 === n.indexOf("<li") && (o = "ul"),
          0 === n.indexOf("<tr") && (o = "tbody"),
          (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (o = "tr"),
          0 === n.indexOf("<tbody") && (o = "table"),
          0 === n.indexOf("<option") && (o = "select");
        var d = s.createElement(o);
        d.innerHTML = n;
        for (var h = 0; h < d.childNodes.length; h += 1)
          a.push(d.childNodes[h]);
      } else
        a = (function (e, t) {
          if ("string" != typeof e) return [e];
          for (
            var i = [], s = t.querySelectorAll(e), a = 0;
            a < s.length;
            a += 1
          )
            i.push(s[a]);
          return i;
        })(e.trim(), t || s);
    } else if (e.nodeType || e === i || e === s) a.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof c) return e;
      a = e;
    }
    return new c(
      (function (e) {
        for (var t = [], i = 0; i < e.length; i += 1)
          -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t;
      })(a)
    );
  }
  m.fn = c.prototype;
  var g,
    w,
    y,
    b = {
      addClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var s = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).add.apply(t, s);
          }),
          this
        );
      },
      removeClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var s = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).remove.apply(t, s);
          }),
          this
        );
      },
      hasClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var s = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        return (
          f(this, function (e) {
            return (
              s.filter(function (t) {
                return e.classList.contains(t);
              }).length > 0
            );
          }).length > 0
        );
      },
      toggleClass: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var s = v(
          t.map(function (e) {
            return e.split(" ");
          })
        );
        this.forEach(function (e) {
          s.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (var s in e) (this[i][s] = e[s]), this[i].setAttribute(s, e[s]);
        return this;
      },
      removeAttr: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].style.transition = "string" != typeof e ? e + "ms" : e;
        return this;
      },
      on: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
        function l(e) {
          var t = e.target;
          if (t) {
            var i = e.target.dom7EventData || [];
            if ((i.indexOf(e) < 0 && i.unshift(e), m(t).is(a))) r.apply(t, i);
            else
              for (var s = m(t).parents(), n = 0; n < s.length; n += 1)
                m(s[n]).is(a) && r.apply(s[n], i);
          }
        }
        function o(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }
        "function" == typeof t[1] &&
          ((s = t[0]), (r = t[1]), (n = t[2]), (a = void 0)),
          n || (n = !1);
        for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
          var u = this[p];
          if (a)
            for (d = 0; d < h.length; d += 1) {
              var c = h[d];
              u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                u.dom7LiveListeners[c] || (u.dom7LiveListeners[c] = []),
                u.dom7LiveListeners[c].push({ listener: r, proxyListener: l }),
                u.addEventListener(c, l, n);
            }
          else
            for (d = 0; d < h.length; d += 1) {
              var v = h[d];
              u.dom7Listeners || (u.dom7Listeners = {}),
                u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
                u.dom7Listeners[v].push({ listener: r, proxyListener: o }),
                u.addEventListener(v, o, n);
            }
        }
        return this;
      },
      off: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
        "function" == typeof t[1] &&
          ((s = t[0]), (r = t[1]), (n = t[2]), (a = void 0)),
          n || (n = !1);
        for (var l = s.split(" "), o = 0; o < l.length; o += 1)
          for (var d = l[o], h = 0; h < this.length; h += 1) {
            var p = this[h],
              u = void 0;
            if (
              (!a && p.dom7Listeners
                ? (u = p.dom7Listeners[d])
                : a && p.dom7LiveListeners && (u = p.dom7LiveListeners[d]),
              u && u.length)
            )
              for (var c = u.length - 1; c >= 0; c -= 1) {
                var v = u[c];
                (r && v.listener === r) ||
                (r &&
                  v.listener &&
                  v.listener.dom7proxy &&
                  v.listener.dom7proxy === r)
                  ? (p.removeEventListener(d, v.proxyListener, n),
                    u.splice(c, 1))
                  : r ||
                    (p.removeEventListener(d, v.proxyListener, n),
                    u.splice(c, 1));
              }
          }
        return this;
      },
      trigger: function () {
        for (
          var e = l(), t = arguments.length, i = new Array(t), s = 0;
          s < t;
          s++
        )
          i[s] = arguments[s];
        for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
          for (var o = a[n], d = 0; d < this.length; d += 1) {
            var h = this[d];
            if (e.CustomEvent) {
              var p = new e.CustomEvent(o, {
                detail: r,
                bubbles: !0,
                cancelable: !0,
              });
              (h.dom7EventData = i.filter(function (e, t) {
                return t > 0;
              })),
                h.dispatchEvent(p),
                (h.dom7EventData = []),
                delete h.dom7EventData;
            }
          }
        return this;
      },
      transitionEnd: function (e) {
        var t = this;
        return (
          e &&
            t.on("transitionend", function i(s) {
              s.target === this && (e.call(this, s), t.off("transitionend", i));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue("margin-right")) +
              parseFloat(t.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue("margin-top")) +
              parseFloat(t.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          var e = l(),
            t = r(),
            i = this[0],
            s = i.getBoundingClientRect(),
            a = t.body,
            n = i.clientTop || a.clientTop || 0,
            o = i.clientLeft || a.clientLeft || 0,
            d = i === e ? e.scrollY : i.scrollTop,
            h = i === e ? e.scrollX : i.scrollLeft;
          return { top: s.top + d - n, left: s.left + h - o };
        }
        return null;
      },
      css: function (e, t) {
        var i,
          s = l();
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (var a in e) this[i].style[a] = e[a];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach(function (t, i) {
              e.apply(t, [t, i]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        var t,
          i,
          s = l(),
          a = r(),
          n = this[0];
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (t = m(e), i = 0; i < t.length; i += 1) if (t[i] === n) return !0;
          return !1;
        }
        if (e === a) return n === a;
        if (e === s) return n === s;
        if (e.nodeType || e instanceof c) {
          for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
            if (t[i] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        var e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return m([]);
        if (e < 0) {
          var i = t + e;
          return m(i < 0 ? [] : [this[i]]);
        }
        return m([this[e]]);
      },
      append: function () {
        for (var e, t = r(), i = 0; i < arguments.length; i += 1) {
          e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          for (var s = 0; s < this.length; s += 1)
            if ("string" == typeof e) {
              var a = t.createElement("div");
              for (a.innerHTML = e; a.firstChild; )
                this[s].appendChild(a.firstChild);
            } else if (e instanceof c)
              for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
            else this[s].appendChild(e);
        }
        return this;
      },
      prepend: function (e) {
        var t,
          i,
          s = r();
        for (t = 0; t < this.length; t += 1)
          if ("string" == typeof e) {
            var a = s.createElement("div");
            for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)
              this[t].insertBefore(a.childNodes[i], this[t].childNodes[0]);
          } else if (e instanceof c)
            for (i = 0; i < e.length; i += 1)
              this[t].insertBefore(e[i], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e)
              ? m([this[0].nextElementSibling])
              : m([])
            : this[0].nextElementSibling
            ? m([this[0].nextElementSibling])
            : m([])
          : m([]);
      },
      nextAll: function (e) {
        var t = [],
          i = this[0];
        if (!i) return m([]);
        for (; i.nextElementSibling; ) {
          var s = i.nextElementSibling;
          e ? m(s).is(e) && t.push(s) : t.push(s), (i = s);
        }
        return m(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          var t = this[0];
          return e
            ? t.previousElementSibling && m(t.previousElementSibling).is(e)
              ? m([t.previousElementSibling])
              : m([])
            : t.previousElementSibling
            ? m([t.previousElementSibling])
            : m([]);
        }
        return m([]);
      },
      prevAll: function (e) {
        var t = [],
          i = this[0];
        if (!i) return m([]);
        for (; i.previousElementSibling; ) {
          var s = i.previousElementSibling;
          e ? m(s).is(e) && t.push(s) : t.push(s), (i = s);
        }
        return m(t);
      },
      parent: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return m(t);
      },
      parents: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var s = this[i].parentNode; s; )
            e ? m(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
        return m(t);
      },
      closest: function (e) {
        var t = this;
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1)
            t.push(s[a]);
        return m(t);
      },
      children: function (e) {
        for (var t = [], i = 0; i < this.length; i += 1)
          for (var s = this[i].children, a = 0; a < s.length; a += 1)
            (e && !m(s[a]).is(e)) || t.push(s[a]);
        return m(t);
      },
      filter: function (e) {
        return m(f(this, e));
      },
      remove: function () {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
  function E(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function x() {
    return Date.now();
  }
  function T(e, t) {
    void 0 === t && (t = "x");
    var i,
      s,
      a,
      r = l(),
      n = r.getComputedStyle(e, null);
    return (
      r.WebKitCSSMatrix
        ? ((s = n.transform || n.webkitTransform).split(",").length > 6 &&
            (s = s
              .split(", ")
              .map(function (e) {
                return e.replace(",", ".");
              })
              .join(", ")),
          (a = new r.WebKitCSSMatrix("none" === s ? "" : s)))
        : (i = (a =
            n.MozTransform ||
            n.OTransform ||
            n.MsTransform ||
            n.msTransform ||
            n.transform ||
            n
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,"))
            .toString()
            .split(",")),
      "x" === t &&
        (s = r.WebKitCSSMatrix
          ? a.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (s = r.WebKitCSSMatrix
          ? a.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      s || 0
    );
  }
  function C(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      e.constructor === Object
    );
  }
  function S() {
    for (
      var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1;
      t < arguments.length;
      t += 1
    ) {
      var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (null != i)
        for (
          var s = Object.keys(Object(i)), a = 0, r = s.length;
          a < r;
          a += 1
        ) {
          var n = s[a],
            l = Object.getOwnPropertyDescriptor(i, n);
          void 0 !== l &&
            l.enumerable &&
            (C(e[n]) && C(i[n])
              ? S(e[n], i[n])
              : !C(e[n]) && C(i[n])
              ? ((e[n] = {}), S(e[n], i[n]))
              : (e[n] = i[n]));
        }
    }
    return e;
  }
  function M(e, t) {
    Object.keys(t).forEach(function (i) {
      C(t[i]) &&
        Object.keys(t[i]).forEach(function (s) {
          "function" == typeof t[i][s] && (t[i][s] = t[i][s].bind(e));
        }),
        (e[i] = t[i]);
    });
  }
  function z() {
    return (
      g ||
        (g = (function () {
          var e = l(),
            t = r();
          return {
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            pointerEvents:
              !!e.PointerEvent &&
              "maxTouchPoints" in e.navigator &&
              e.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
            passiveListener: (function () {
              var t = !1;
              try {
                var i = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, i);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      g
    );
  }
  function P(e) {
    return (
      void 0 === e && (e = {}),
      w ||
        (w = (function (e) {
          var t = (void 0 === e ? {} : e).userAgent,
            i = z(),
            s = l(),
            a = s.navigator.platform,
            r = t || s.navigator.userAgent,
            n = { ios: !1, android: !1 },
            o = s.screen.width,
            d = s.screen.height,
            h = r.match(/(Android);?[\s\/]+([\d.]+)?/),
            p = r.match(/(iPad).*OS\s([\d_]+)/),
            u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            c = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            v = "Win32" === a,
            f = "MacIntel" === a;
          return (
            !p &&
              f &&
              i.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(o + "x" + d) >= 0 &&
              ((p = r.match(/(Version)\/([\d.]+)/)) || (p = [0, 1, "13_0_0"]),
              (f = !1)),
            h && !v && ((n.os = "android"), (n.android = !0)),
            (p || c || u) && ((n.os = "ios"), (n.ios = !0)),
            n
          );
        })(e)),
      w
    );
  }
  function k() {
    return (
      y ||
        (y = (function () {
          var e,
            t = l();
          return {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari:
              ((e = t.navigator.userAgent.toLowerCase()),
              e.indexOf("safari") >= 0 &&
                e.indexOf("chrome") < 0 &&
                e.indexOf("android") < 0),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              t.navigator.userAgent
            ),
          };
        })()),
      y
    );
  }
  Object.keys(b).forEach(function (e) {
    m.fn[e] = b[e];
  });
  var $ = {
      name: "resize",
      create: function () {
        var e = this;
        S(e, {
          resize: {
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function (e) {
          var t = l();
          t.addEventListener("resize", e.resize.resizeHandler),
            t.addEventListener(
              "orientationchange",
              e.resize.orientationChangeHandler
            );
        },
        destroy: function (e) {
          var t = l();
          t.removeEventListener("resize", e.resize.resizeHandler),
            t.removeEventListener(
              "orientationchange",
              e.resize.orientationChangeHandler
            );
        },
      },
    },
    L = {
      attach: function (e, t) {
        void 0 === t && (t = {});
        var i = l(),
          s = this,
          a = new (i.MutationObserver || i.WebkitMutationObserver)(function (
            e
          ) {
            if (1 !== e.length) {
              var t = function () {
                s.emit("observerUpdate", e[0]);
              };
              i.requestAnimationFrame
                ? i.requestAnimationFrame(t)
                : i.setTimeout(t, 0);
            } else s.emit("observerUpdate", e[0]);
          });
        a.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          s.observer.observers.push(a);
      },
      init: function () {
        if (this.support.observer && this.params.observer) {
          if (this.params.observeParents)
            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
              this.observer.attach(e[t]);
          this.observer.attach(this.$el[0], {
            childList: this.params.observeSlideChildren,
          }),
            this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    I = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function () {
        M(this, { observer: t(t({}, L), {}, { observers: [] }) });
      },
      on: {
        init: function (e) {
          e.observer.init();
        },
        destroy: function (e) {
          e.observer.destroy();
        },
      },
    };
  function O(e) {
    var t = r(),
      i = l(),
      s = this.touchEventsData,
      a = this.params,
      n = this.touches;
    if (!this.animating || !a.preventInteractionOnTransition) {
      var o = e;
      o.originalEvent && (o = o.originalEvent);
      var d = m(o.target);
      if (
        ("wrapper" !== a.touchEventsTarget ||
          d.closest(this.wrapperEl).length) &&
        ((s.isTouchEvent = "touchstart" === o.type),
        (s.isTouchEvent || !("which" in o) || 3 !== o.which) &&
          !(
            (!s.isTouchEvent && "button" in o && o.button > 0) ||
            (s.isTouched && s.isMoved)
          ))
      )
        if (
          a.noSwiping &&
          d.closest(
            a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass
          )[0]
        )
          this.allowClick = !0;
        else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
          (n.currentX =
            "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
            (n.currentY =
              "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY);
          var h = n.currentX,
            p = n.currentY,
            u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
            c = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
          if (!u || !(h <= c || h >= i.screen.width - c)) {
            if (
              (S(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
              (n.startX = h),
              (n.startY = p),
              (s.touchStartTime = x()),
              (this.allowClick = !0),
              this.updateSize(),
              (this.swipeDirection = void 0),
              a.threshold > 0 && (s.allowThresholdMove = !1),
              "touchstart" !== o.type)
            ) {
              var v = !0;
              d.is(s.formElements) && (v = !1),
                t.activeElement &&
                  m(t.activeElement).is(s.formElements) &&
                  t.activeElement !== d[0] &&
                  t.activeElement.blur();
              var f = v && this.allowTouchMove && a.touchStartPreventDefault;
              (a.touchStartForcePreventDefault || f) && o.preventDefault();
            }
            this.emit("touchStart", o);
          }
        }
    }
  }
  function A(e) {
    var t = r(),
      i = this.touchEventsData,
      s = this.params,
      a = this.touches,
      n = this.rtlTranslate,
      l = e;
    if ((l.originalEvent && (l = l.originalEvent), i.isTouched)) {
      if (!i.isTouchEvent || "touchmove" === l.type) {
        var o =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          d = "touchmove" === l.type ? o.pageX : l.pageX,
          h = "touchmove" === l.type ? o.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (a.startX = d), void (a.startY = h);
        if (!this.allowTouchMove)
          return (
            (this.allowClick = !1),
            void (
              i.isTouched &&
              (S(a, { startX: d, startY: h, currentX: d, currentY: h }),
              (i.touchStartTime = x()))
            )
          );
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (this.isVertical()) {
            if (
              (h < a.startY && this.translate <= this.maxTranslate()) ||
              (h > a.startY && this.translate >= this.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (d < a.startX && this.translate <= this.maxTranslate()) ||
            (d > a.startX && this.translate >= this.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          m(l.target).is(i.formElements)
        )
          return (i.isMoved = !0), void (this.allowClick = !1);
        if (
          (i.allowTouchCallbacks && this.emit("touchMove", l),
          !(l.targetTouches && l.targetTouches.length > 1))
        ) {
          (a.currentX = d), (a.currentY = h);
          var p = a.currentX - a.startX,
            u = a.currentY - a.startY;
          if (
            !(
              this.params.threshold &&
              Math.sqrt(Math.pow(p, 2) + Math.pow(u, 2)) < this.params.threshold
            )
          ) {
            var c;
            if (void 0 === i.isScrolling)
              (this.isHorizontal() && a.currentY === a.startY) ||
              (this.isVertical() && a.currentX === a.startX)
                ? (i.isScrolling = !1)
                : p * p + u * u >= 25 &&
                  ((c = (180 * Math.atan2(Math.abs(u), Math.abs(p))) / Math.PI),
                  (i.isScrolling = this.isHorizontal()
                    ? c > s.touchAngle
                    : 90 - c > s.touchAngle));
            if (
              (i.isScrolling && this.emit("touchMoveOpposite", l),
              void 0 === i.startMoving &&
                ((a.currentX === a.startX && a.currentY === a.startY) ||
                  (i.startMoving = !0)),
              i.isScrolling)
            )
              i.isTouched = !1;
            else if (i.startMoving) {
              (this.allowClick = !1),
                !s.cssMode && l.cancelable && l.preventDefault(),
                s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
                i.isMoved ||
                  (s.loop && this.loopFix(),
                  (i.startTranslate = this.getTranslate()),
                  this.setTransition(0),
                  this.animating &&
                    this.$wrapperEl.trigger(
                      "webkitTransitionEnd transitionend"
                    ),
                  (i.allowMomentumBounce = !1),
                  !s.grabCursor ||
                    (!0 !== this.allowSlideNext &&
                      !0 !== this.allowSlidePrev) ||
                    this.setGrabCursor(!0),
                  this.emit("sliderFirstMove", l)),
                this.emit("sliderMove", l),
                (i.isMoved = !0);
              var v = this.isHorizontal() ? p : u;
              (a.diff = v),
                (v *= s.touchRatio),
                n && (v = -v),
                (this.swipeDirection = v > 0 ? "prev" : "next"),
                (i.currentTranslate = v + i.startTranslate);
              var f = !0,
                g = s.resistanceRatio;
              if (
                (s.touchReleaseOnEdges && (g = 0),
                v > 0 && i.currentTranslate > this.minTranslate()
                  ? ((f = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        this.minTranslate() -
                        1 +
                        Math.pow(
                          -this.minTranslate() + i.startTranslate + v,
                          g
                        )))
                  : v < 0 &&
                    i.currentTranslate < this.maxTranslate() &&
                    ((f = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        this.maxTranslate() +
                        1 -
                        Math.pow(
                          this.maxTranslate() - i.startTranslate - v,
                          g
                        ))),
                f && (l.preventedByNestedSwiper = !0),
                !this.allowSlideNext &&
                  "next" === this.swipeDirection &&
                  i.currentTranslate < i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                !this.allowSlidePrev &&
                  "prev" === this.swipeDirection &&
                  i.currentTranslate > i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                s.threshold > 0)
              ) {
                if (!(Math.abs(v) > s.threshold || i.allowThresholdMove))
                  return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove)
                  return (
                    (i.allowThresholdMove = !0),
                    (a.startX = a.currentX),
                    (a.startY = a.currentY),
                    (i.currentTranslate = i.startTranslate),
                    void (a.diff = this.isHorizontal()
                      ? a.currentX - a.startX
                      : a.currentY - a.startY)
                  );
              }
              s.followFinger &&
                !s.cssMode &&
                ((s.freeMode ||
                  s.watchSlidesProgress ||
                  s.watchSlidesVisibility) &&
                  (this.updateActiveIndex(), this.updateSlidesClasses()),
                s.freeMode &&
                  (0 === i.velocities.length &&
                    i.velocities.push({
                      position: a[this.isHorizontal() ? "startX" : "startY"],
                      time: i.touchStartTime,
                    }),
                  i.velocities.push({
                    position: a[this.isHorizontal() ? "currentX" : "currentY"],
                    time: x(),
                  })),
                this.updateProgress(i.currentTranslate),
                this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
  }
  function D(e) {
    var t = this,
      i = t.touchEventsData,
      s = t.params,
      a = t.touches,
      r = t.rtlTranslate,
      n = t.$wrapperEl,
      l = t.slidesGrid,
      o = t.snapGrid,
      d = e;
    if (
      (d.originalEvent && (d = d.originalEvent),
      i.allowTouchCallbacks && t.emit("touchEnd", d),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && s.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    var h,
      p = x(),
      u = p - i.touchStartTime;
    if (
      (t.allowClick &&
        (t.updateClickedSlide(d),
        t.emit("tap click", d),
        u < 300 &&
          p - i.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", d)),
      (i.lastClickTime = x()),
      E(function () {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
        0 === a.diff ||
        i.currentTranslate === i.startTranslate)
    )
      return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (h = s.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      !s.cssMode)
    )
      if (s.freeMode) {
        if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (h > -t.maxTranslate())
          return void (t.slides.length < o.length
            ? t.slideTo(o.length - 1)
            : t.slideTo(t.slides.length - 1));
        if (s.freeModeMomentum) {
          if (i.velocities.length > 1) {
            var c = i.velocities.pop(),
              v = i.velocities.pop(),
              f = c.position - v.position,
              m = c.time - v.time;
            (t.velocity = f / m),
              (t.velocity /= 2),
              Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                (t.velocity = 0),
              (m > 150 || x() - c.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;
          (t.velocity *= s.freeModeMomentumVelocityRatio),
            (i.velocities.length = 0);
          var g = 1e3 * s.freeModeMomentumRatio,
            w = t.velocity * g,
            y = t.translate + w;
          r && (y = -y);
          var b,
            T,
            C = !1,
            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
          if (y < t.maxTranslate())
            s.freeModeMomentumBounce
              ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                (b = t.maxTranslate()),
                (C = !0),
                (i.allowMomentumBounce = !0))
              : (y = t.maxTranslate()),
              s.loop && s.centeredSlides && (T = !0);
          else if (y > t.minTranslate())
            s.freeModeMomentumBounce
              ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                (b = t.minTranslate()),
                (C = !0),
                (i.allowMomentumBounce = !0))
              : (y = t.minTranslate()),
              s.loop && s.centeredSlides && (T = !0);
          else if (s.freeModeSticky) {
            for (var M, z = 0; z < o.length; z += 1)
              if (o[z] > -y) {
                M = z;
                break;
              }
            y = -(y =
              Math.abs(o[M] - y) < Math.abs(o[M - 1] - y) ||
              "next" === t.swipeDirection
                ? o[M]
                : o[M - 1]);
          }
          if (
            (T &&
              t.once("transitionEnd", function () {
                t.loopFix();
              }),
            0 !== t.velocity)
          ) {
            if (
              ((g = r
                ? Math.abs((-y - t.translate) / t.velocity)
                : Math.abs((y - t.translate) / t.velocity)),
              s.freeModeSticky)
            ) {
              var P = Math.abs((r ? -y : y) - t.translate),
                k = t.slidesSizesGrid[t.activeIndex];
              g = P < k ? s.speed : P < 2 * k ? 1.5 * s.speed : 2.5 * s.speed;
            }
          } else if (s.freeModeSticky) return void t.slideToClosest();
          s.freeModeMomentumBounce && C
            ? (t.updateProgress(b),
              t.setTransition(g),
              t.setTranslate(y),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              n.transitionEnd(function () {
                t &&
                  !t.destroyed &&
                  i.allowMomentumBounce &&
                  (t.emit("momentumBounce"),
                  t.setTransition(s.speed),
                  setTimeout(function () {
                    t.setTranslate(b),
                      n.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd();
                      });
                  }, 0));
              }))
            : t.velocity
            ? (t.updateProgress(y),
              t.setTransition(g),
              t.setTranslate(y),
              t.transitionStart(!0, t.swipeDirection),
              t.animating ||
                ((t.animating = !0),
                n.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                })))
            : t.updateProgress(y),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        } else if (s.freeModeSticky) return void t.slideToClosest();
        (!s.freeModeMomentum || u >= s.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (
          var $ = 0, L = t.slidesSizesGrid[0], I = 0;
          I < l.length;
          I += I < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          var O = I < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== l[I + O]
            ? h >= l[I] && h < l[I + O] && (($ = I), (L = l[I + O] - l[I]))
            : h >= l[I] && (($ = I), (L = l[l.length - 1] - l[l.length - 2]));
        }
        var A = (h - l[$]) / L,
          D = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (u > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (A >= s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)),
            "prev" === t.swipeDirection &&
              (A > 1 - s.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
            ? d.target === t.navigation.nextEl
              ? t.slideTo($ + D)
              : t.slideTo($)
            : ("next" === t.swipeDirection && t.slideTo($ + D),
              "prev" === t.swipeDirection && t.slideTo($));
        }
      }
  }
  function G() {
    var e = this.params,
      t = this.el;
    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
        s = this.allowSlidePrev,
        a = this.snapGrid;
      (this.allowSlideNext = !0),
        (this.allowSlidePrev = !0),
        this.updateSize(),
        this.updateSlides(),
        this.updateSlidesClasses(),
        ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
        this.isEnd &&
        !this.isBeginning &&
        !this.params.centeredSlides
          ? this.slideTo(this.slides.length - 1, 0, !1, !0)
          : this.slideTo(this.activeIndex, 0, !1, !0),
        this.autoplay &&
          this.autoplay.running &&
          this.autoplay.paused &&
          this.autoplay.run(),
        (this.allowSlidePrev = s),
        (this.allowSlideNext = i),
        this.params.watchOverflow &&
          a !== this.snapGrid &&
          this.checkOverflow();
    }
  }
  function N(e) {
    this.allowClick ||
      (this.params.preventClicks && e.preventDefault(),
      this.params.preventClicksPropagation &&
        this.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function B() {
    var e = this.wrapperEl,
      t = this.rtlTranslate;
    (this.previousTranslate = this.translate),
      this.isHorizontal()
        ? (this.translate = t
            ? e.scrollWidth - e.offsetWidth - e.scrollLeft
            : -e.scrollLeft)
        : (this.translate = -e.scrollTop),
      -0 === this.translate && (this.translate = 0),
      this.updateActiveIndex(),
      this.updateSlidesClasses();
    var i = this.maxTranslate() - this.minTranslate();
    (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !==
      this.progress &&
      this.updateProgress(t ? -this.translate : this.translate),
      this.emit("setTranslate", this.translate, !1);
  }
  var H = !1;
  function X() {}
  var Y = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      nested: !1,
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    },
    V = {
      modular: {
        useParams: function (e) {
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (i) {
              var s = t.modules[i];
              s.params && S(e, s.params);
            });
        },
        useModules: function (e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules &&
            Object.keys(t.modules).forEach(function (i) {
              var s = t.modules[i],
                a = e[i] || {};
              s.on &&
                t.on &&
                Object.keys(s.on).forEach(function (e) {
                  t.on(e, s.on[e]);
                }),
                s.create && s.create.bind(t)(a);
            });
        },
      },
      eventsEmitter: {
        on: function (e, t, i) {
          var s = this;
          if ("function" != typeof t) return s;
          var a = i ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              s.eventsListeners[e] || (s.eventsListeners[e] = []),
                s.eventsListeners[e][a](t);
            }),
            s
          );
        },
        once: function (e, t, i) {
          var s = this;
          if ("function" != typeof t) return s;
          function a() {
            s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
              r[n] = arguments[n];
            t.apply(s, r);
          }
          return (a.__emitterProxy = t), s.on(e, a, i);
        },
        onAny: function (e, t) {
          if ("function" != typeof e) return this;
          var i = t ? "unshift" : "push";
          return (
            this.eventsAnyListeners.indexOf(e) < 0 &&
              this.eventsAnyListeners[i](e),
            this
          );
        },
        offAny: function (e) {
          if (!this.eventsAnyListeners) return this;
          var t = this.eventsAnyListeners.indexOf(e);
          return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
        },
        off: function (e, t) {
          var i = this;
          return i.eventsListeners
            ? (e.split(" ").forEach(function (e) {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach(function (s, a) {
                      (s === t ||
                        (s.__emitterProxy && s.__emitterProxy === t)) &&
                        i.eventsListeners[e].splice(a, 1);
                    });
              }),
              i)
            : i;
        },
        emit: function () {
          var e,
            t,
            i,
            s = this;
          if (!s.eventsListeners) return s;
          for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
            r[n] = arguments[n];
          "string" == typeof r[0] || Array.isArray(r[0])
            ? ((e = r[0]), (t = r.slice(1, r.length)), (i = s))
            : ((e = r[0].events), (t = r[0].data), (i = r[0].context || s)),
            t.unshift(i);
          var l = Array.isArray(e) ? e : e.split(" ");
          return (
            l.forEach(function (e) {
              if (
                (s.eventsAnyListeners &&
                  s.eventsAnyListeners.length &&
                  s.eventsAnyListeners.forEach(function (s) {
                    s.apply(i, [e].concat(t));
                  }),
                s.eventsListeners && s.eventsListeners[e])
              ) {
                var a = [];
                s.eventsListeners[e].forEach(function (e) {
                  a.push(e);
                }),
                  a.forEach(function (e) {
                    e.apply(i, t);
                  });
              }
            }),
            s
          );
        },
      },
      update: {
        updateSize: function () {
          var e,
            t,
            i = this.$el;
          (e =
            void 0 !== this.params.width && null !== this.params.width
              ? this.params.width
              : i[0].clientWidth),
            (t =
              void 0 !== this.params.height && null !== this.params.width
                ? this.params.height
                : i[0].clientHeight),
            (0 === e && this.isHorizontal()) ||
              (0 === t && this.isVertical()) ||
              ((e =
                e -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              S(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = l(),
            t = this.params,
            i = this.$wrapperEl,
            s = this.size,
            a = this.rtlTranslate,
            r = this.wrongRTL,
            n = this.virtual && t.virtual.enabled,
            o = n ? this.virtual.slides.length : this.slides.length,
            d = i.children("." + this.params.slideClass),
            h = n ? this.virtual.slides.length : d.length,
            p = [],
            u = [],
            c = [];
          function v(e, i) {
            return !t.cssMode || i !== d.length - 1;
          }
          var f = t.slidesOffsetBefore;
          "function" == typeof f && (f = t.slidesOffsetBefore.call(this));
          var m = t.slidesOffsetAfter;
          "function" == typeof m && (m = t.slidesOffsetAfter.call(this));
          var g = this.snapGrid.length,
            w = this.snapGrid.length,
            y = t.spaceBetween,
            b = -f,
            E = 0,
            x = 0;
          if (void 0 !== s) {
            var T, C;
            "string" == typeof y &&
              y.indexOf("%") >= 0 &&
              (y = (parseFloat(y.replace("%", "")) / 100) * s),
              (this.virtualSize = -y),
              a
                ? d.css({ marginLeft: "", marginTop: "" })
                : d.css({ marginRight: "", marginBottom: "" }),
              t.slidesPerColumn > 1 &&
                ((T =
                  Math.floor(h / t.slidesPerColumn) ===
                  h / this.params.slidesPerColumn
                    ? h
                    : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn),
                "auto" !== t.slidesPerView &&
                  "row" === t.slidesPerColumnFill &&
                  (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
            for (
              var M,
                z = t.slidesPerColumn,
                P = T / z,
                k = Math.floor(h / t.slidesPerColumn),
                $ = 0;
              $ < h;
              $ += 1
            ) {
              C = 0;
              var L = d.eq($);
              if (t.slidesPerColumn > 1) {
                var I = void 0,
                  O = void 0,
                  A = void 0;
                if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                  var D = Math.floor(
                      $ / (t.slidesPerGroup * t.slidesPerColumn)
                    ),
                    G = $ - t.slidesPerColumn * t.slidesPerGroup * D,
                    N =
                      0 === D
                        ? t.slidesPerGroup
                        : Math.min(
                            Math.ceil((h - D * z * t.slidesPerGroup) / z),
                            t.slidesPerGroup
                          );
                  (I =
                    (O =
                      G - (A = Math.floor(G / N)) * N + D * t.slidesPerGroup) +
                    (A * T) / z),
                    L.css({
                      "-webkit-box-ordinal-group": I,
                      "-moz-box-ordinal-group": I,
                      "-ms-flex-order": I,
                      "-webkit-order": I,
                      order: I,
                    });
                } else
                  "column" === t.slidesPerColumnFill
                    ? ((A = $ - (O = Math.floor($ / z)) * z),
                      (O > k || (O === k && A === z - 1)) &&
                        (A += 1) >= z &&
                        ((A = 0), (O += 1)))
                    : (O = $ - (A = Math.floor($ / P)) * P);
                L.css(
                  "margin-" + (this.isHorizontal() ? "top" : "left"),
                  0 !== A && t.spaceBetween && t.spaceBetween + "px"
                );
              }
              if ("none" !== L.css("display")) {
                if ("auto" === t.slidesPerView) {
                  var B = e.getComputedStyle(L[0], null),
                    H = L[0].style.transform,
                    X = L[0].style.webkitTransform;
                  if (
                    (H && (L[0].style.transform = "none"),
                    X && (L[0].style.webkitTransform = "none"),
                    t.roundLengths)
                  )
                    C = this.isHorizontal()
                      ? L.outerWidth(!0)
                      : L.outerHeight(!0);
                  else if (this.isHorizontal()) {
                    var Y = parseFloat(B.getPropertyValue("width") || 0),
                      V = parseFloat(B.getPropertyValue("padding-left") || 0),
                      F = parseFloat(B.getPropertyValue("padding-right") || 0),
                      R = parseFloat(B.getPropertyValue("margin-left") || 0),
                      W = parseFloat(B.getPropertyValue("margin-right") || 0),
                      q = B.getPropertyValue("box-sizing");
                    if (q && "border-box" === q) C = Y + R + W;
                    else {
                      var j = L[0],
                        _ = j.clientWidth;
                      C = Y + V + F + R + W + (j.offsetWidth - _);
                    }
                  } else {
                    var U = parseFloat(B.getPropertyValue("height") || 0),
                      K = parseFloat(B.getPropertyValue("padding-top") || 0),
                      Z = parseFloat(B.getPropertyValue("padding-bottom") || 0),
                      J = parseFloat(B.getPropertyValue("margin-top") || 0),
                      Q = parseFloat(B.getPropertyValue("margin-bottom") || 0),
                      ee = B.getPropertyValue("box-sizing");
                    if (ee && "border-box" === ee) C = U + J + Q;
                    else {
                      var te = L[0],
                        ie = te.clientHeight;
                      C = U + K + Z + J + Q + (te.offsetHeight - ie);
                    }
                  }
                  H && (L[0].style.transform = H),
                    X && (L[0].style.webkitTransform = X),
                    t.roundLengths && (C = Math.floor(C));
                } else
                  (C = (s - (t.slidesPerView - 1) * y) / t.slidesPerView),
                    t.roundLengths && (C = Math.floor(C)),
                    d[$] &&
                      (this.isHorizontal()
                        ? (d[$].style.width = C + "px")
                        : (d[$].style.height = C + "px"));
                d[$] && (d[$].swiperSlideSize = C),
                  c.push(C),
                  t.centeredSlides
                    ? ((b = b + C / 2 + E / 2 + y),
                      0 === E && 0 !== $ && (b = b - s / 2 - y),
                      0 === $ && (b = b - s / 2 - y),
                      Math.abs(b) < 0.001 && (b = 0),
                      t.roundLengths && (b = Math.floor(b)),
                      x % t.slidesPerGroup == 0 && p.push(b),
                      u.push(b))
                    : (t.roundLengths && (b = Math.floor(b)),
                      (x - Math.min(this.params.slidesPerGroupSkip, x)) %
                        this.params.slidesPerGroup ==
                        0 && p.push(b),
                      u.push(b),
                      (b = b + C + y)),
                  (this.virtualSize += C + y),
                  (E = C),
                  (x += 1);
              }
            }
            if (
              ((this.virtualSize = Math.max(this.virtualSize, s) + m),
              a &&
                r &&
                ("slide" === t.effect || "coverflow" === t.effect) &&
                i.css({ width: this.virtualSize + t.spaceBetween + "px" }),
              t.setWrapperSize &&
                (this.isHorizontal()
                  ? i.css({ width: this.virtualSize + t.spaceBetween + "px" })
                  : i.css({
                      height: this.virtualSize + t.spaceBetween + "px",
                    })),
              t.slidesPerColumn > 1 &&
                ((this.virtualSize = (C + t.spaceBetween) * T),
                (this.virtualSize =
                  Math.ceil(this.virtualSize / t.slidesPerColumn) -
                  t.spaceBetween),
                this.isHorizontal()
                  ? i.css({ width: this.virtualSize + t.spaceBetween + "px" })
                  : i.css({ height: this.virtualSize + t.spaceBetween + "px" }),
                t.centeredSlides))
            ) {
              M = [];
              for (var se = 0; se < p.length; se += 1) {
                var ae = p[se];
                t.roundLengths && (ae = Math.floor(ae)),
                  p[se] < this.virtualSize + p[0] && M.push(ae);
              }
              p = M;
            }
            if (!t.centeredSlides) {
              M = [];
              for (var re = 0; re < p.length; re += 1) {
                var ne = p[re];
                t.roundLengths && (ne = Math.floor(ne)),
                  p[re] <= this.virtualSize - s && M.push(ne);
              }
              (p = M),
                Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) >
                  1 && p.push(this.virtualSize - s);
            }
            if (
              (0 === p.length && (p = [0]),
              0 !== t.spaceBetween &&
                (this.isHorizontal()
                  ? a
                    ? d.filter(v).css({ marginLeft: y + "px" })
                    : d.filter(v).css({ marginRight: y + "px" })
                  : d.filter(v).css({ marginBottom: y + "px" })),
              t.centeredSlides && t.centeredSlidesBounds)
            ) {
              var le = 0;
              c.forEach(function (e) {
                le += e + (t.spaceBetween ? t.spaceBetween : 0);
              });
              var oe = (le -= t.spaceBetween) - s;
              p = p.map(function (e) {
                return e < 0 ? -f : e > oe ? oe + m : e;
              });
            }
            if (t.centerInsufficientSlides) {
              var de = 0;
              if (
                (c.forEach(function (e) {
                  de += e + (t.spaceBetween ? t.spaceBetween : 0);
                }),
                (de -= t.spaceBetween) < s)
              ) {
                var he = (s - de) / 2;
                p.forEach(function (e, t) {
                  p[t] = e - he;
                }),
                  u.forEach(function (e, t) {
                    u[t] = e + he;
                  });
              }
            }
            S(this, {
              slides: d,
              snapGrid: p,
              slidesGrid: u,
              slidesSizesGrid: c,
            }),
              h !== o && this.emit("slidesLengthChange"),
              p.length !== g &&
                (this.params.watchOverflow && this.checkOverflow(),
                this.emit("snapGridLengthChange")),
              u.length !== w && this.emit("slidesGridLengthChange"),
              (t.watchSlidesProgress || t.watchSlidesVisibility) &&
                this.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (e) {
          var t,
            i = [],
            s = 0;
          if (
            ("number" == typeof e
              ? this.setTransition(e)
              : !0 === e && this.setTransition(this.params.speed),
            "auto" !== this.params.slidesPerView &&
              this.params.slidesPerView > 1)
          )
            if (this.params.centeredSlides)
              this.visibleSlides.each(function (e) {
                i.push(e);
              });
            else
              for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                var a = this.activeIndex + t;
                if (a > this.slides.length) break;
                i.push(this.slides.eq(a)[0]);
              }
          else i.push(this.slides.eq(this.activeIndex)[0]);
          for (t = 0; t < i.length; t += 1)
            if (void 0 !== i[t]) {
              var r = i[t].offsetHeight;
              s = r > s ? r : s;
            }
          s && this.$wrapperEl.css("height", s + "px");
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this.params,
            i = this.slides,
            s = this.rtlTranslate;
          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
            var a = -e;
            s && (a = e),
              i.removeClass(t.slideVisibleClass),
              (this.visibleSlidesIndexes = []),
              (this.visibleSlides = []);
            for (var r = 0; r < i.length; r += 1) {
              var n = i[r],
                l =
                  (a +
                    (t.centeredSlides ? this.minTranslate() : 0) -
                    n.swiperSlideOffset) /
                  (n.swiperSlideSize + t.spaceBetween);
              if (
                t.watchSlidesVisibility ||
                (t.centeredSlides && t.autoHeight)
              ) {
                var o = -(a - n.swiperSlideOffset),
                  d = o + this.slidesSizesGrid[r];
                ((o >= 0 && o < this.size - 1) ||
                  (d > 1 && d <= this.size) ||
                  (o <= 0 && d >= this.size)) &&
                  (this.visibleSlides.push(n),
                  this.visibleSlidesIndexes.push(r),
                  i.eq(r).addClass(t.slideVisibleClass));
              }
              n.progress = s ? -l : l;
            }
            this.visibleSlides = m(this.visibleSlides);
          }
        },
        updateProgress: function (e) {
          if (void 0 === e) {
            var t = this.rtlTranslate ? -1 : 1;
            e = (this && this.translate && this.translate * t) || 0;
          }
          var i = this.params,
            s = this.maxTranslate() - this.minTranslate(),
            a = this.progress,
            r = this.isBeginning,
            n = this.isEnd,
            l = r,
            o = n;
          0 === s
            ? ((a = 0), (r = !0), (n = !0))
            : ((r = (a = (e - this.minTranslate()) / s) <= 0), (n = a >= 1)),
            S(this, { progress: a, isBeginning: r, isEnd: n }),
            (i.watchSlidesProgress ||
              i.watchSlidesVisibility ||
              (i.centeredSlides && i.autoHeight)) &&
              this.updateSlidesProgress(e),
            r && !l && this.emit("reachBeginning toEdge"),
            n && !o && this.emit("reachEnd toEdge"),
            ((l && !r) || (o && !n)) && this.emit("fromEdge"),
            this.emit("progress", a);
        },
        updateSlidesClasses: function () {
          var e,
            t = this.slides,
            i = this.params,
            s = this.$wrapperEl,
            a = this.activeIndex,
            r = this.realIndex,
            n = this.virtual && i.virtual.enabled;
          t.removeClass(
            i.slideActiveClass +
              " " +
              i.slideNextClass +
              " " +
              i.slidePrevClass +
              " " +
              i.slideDuplicateActiveClass +
              " " +
              i.slideDuplicateNextClass +
              " " +
              i.slideDuplicatePrevClass
          ),
            (e = n
              ? this.$wrapperEl.find(
                  "." + i.slideClass + '[data-swiper-slide-index="' + a + '"]'
                )
              : t.eq(a)).addClass(i.slideActiveClass),
            i.loop &&
              (e.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        r +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        r +
                        '"]'
                    )
                    .addClass(i.slideDuplicateActiveClass));
          var l = e
            .nextAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slideNextClass);
          i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
          var o = e
            .prevAll("." + i.slideClass)
            .eq(0)
            .addClass(i.slidePrevClass);
          i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass),
            i.loop &&
              (l.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        l.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        l.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicateNextClass),
              o.hasClass(i.slideDuplicateClass)
                ? s
                    .children(
                      "." +
                        i.slideClass +
                        ":not(." +
                        i.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        o.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)
                : s
                    .children(
                      "." +
                        i.slideClass +
                        "." +
                        i.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        o.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(i.slideDuplicatePrevClass)),
            this.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            i = this.rtlTranslate ? this.translate : -this.translate,
            s = this.slidesGrid,
            a = this.snapGrid,
            r = this.params,
            n = this.activeIndex,
            l = this.realIndex,
            o = this.snapIndex,
            d = e;
          if (void 0 === d) {
            for (var h = 0; h < s.length; h += 1)
              void 0 !== s[h + 1]
                ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2
                  ? (d = h)
                  : i >= s[h] && i < s[h + 1] && (d = h + 1)
                : i >= s[h] && (d = h);
            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (a.indexOf(i) >= 0) t = a.indexOf(i);
          else {
            var p = Math.min(r.slidesPerGroupSkip, d);
            t = p + Math.floor((d - p) / r.slidesPerGroup);
          }
          if ((t >= a.length && (t = a.length - 1), d !== n)) {
            var u = parseInt(
              this.slides.eq(d).attr("data-swiper-slide-index") || d,
              10
            );
            S(this, {
              snapIndex: t,
              realIndex: u,
              previousIndex: n,
              activeIndex: d,
            }),
              this.emit("activeIndexChange"),
              this.emit("snapIndexChange"),
              l !== u && this.emit("realIndexChange"),
              (this.initialized || this.params.runCallbacksOnInit) &&
                this.emit("slideChange");
          } else
            t !== o && ((this.snapIndex = t), this.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t = this.params,
            i = m(e.target).closest("." + t.slideClass)[0],
            s = !1;
          if (i)
            for (var a = 0; a < this.slides.length; a += 1)
              this.slides[a] === i && (s = !0);
          if (!i || !s)
            return (
              (this.clickedSlide = void 0), void (this.clickedIndex = void 0)
            );
          (this.clickedSlide = i),
            this.virtual && this.params.virtual.enabled
              ? (this.clickedIndex = parseInt(
                  m(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (this.clickedIndex = m(i).index()),
            t.slideToClickedSlide &&
              void 0 !== this.clickedIndex &&
              this.clickedIndex !== this.activeIndex &&
              this.slideToClickedSlide();
        },
      },
      translate: {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this.params,
            i = this.rtlTranslate,
            s = this.translate,
            a = this.$wrapperEl;
          if (t.virtualTranslate) return i ? -s : s;
          if (t.cssMode) return s;
          var r = T(a[0], e);
          return i && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          var i = this.rtlTranslate,
            s = this.params,
            a = this.$wrapperEl,
            r = this.wrapperEl,
            n = this.progress,
            l = 0,
            o = 0;
          this.isHorizontal() ? (l = i ? -e : e) : (o = e),
            s.roundLengths && ((l = Math.floor(l)), (o = Math.floor(o))),
            s.cssMode
              ? (r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  this.isHorizontal() ? -l : -o)
              : s.virtualTranslate ||
                a.transform("translate3d(" + l + "px, " + o + "px, 0px)"),
            (this.previousTranslate = this.translate),
            (this.translate = this.isHorizontal() ? l : o);
          var d = this.maxTranslate() - this.minTranslate();
          (0 === d ? 0 : (e - this.minTranslate()) / d) !== n &&
            this.updateProgress(e),
            this.emit("setTranslate", this.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, i, s, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === s && (s = !0);
          var r = this,
            n = r.params,
            l = r.wrapperEl;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o,
            d = r.minTranslate(),
            h = r.maxTranslate();
          if (
            ((o = s && e > d ? d : s && e < h ? h : e),
            r.updateProgress(o),
            n.cssMode)
          ) {
            var p,
              u = r.isHorizontal();
            if (0 === t) l[u ? "scrollLeft" : "scrollTop"] = -o;
            else if (l.scrollTo)
              l.scrollTo(
                (((p = {})[u ? "left" : "top"] = -o),
                (p.behavior = "smooth"),
                p)
              );
            else l[u ? "scrollLeft" : "scrollTop"] = -o;
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(o),
                i &&
                  (r.emit("beforeTransitionStart", t, a),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(o),
                i &&
                  (r.emit("beforeTransitionStart", t, a),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        i && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      },
      transition: {
        setTransition: function (e, t) {
          this.params.cssMode || this.$wrapperEl.transition(e),
            this.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          var i = this.activeIndex,
            s = this.params,
            a = this.previousIndex;
          if (!s.cssMode) {
            s.autoHeight && this.updateAutoHeight();
            var r = t;
            if (
              (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
              this.emit("transitionStart"),
              e && i !== a)
            ) {
              if ("reset" === r)
                return void this.emit("slideResetTransitionStart");
              this.emit("slideChangeTransitionStart"),
                "next" === r
                  ? this.emit("slideNextTransitionStart")
                  : this.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          var i = this.activeIndex,
            s = this.previousIndex,
            a = this.params;
          if (((this.animating = !1), !a.cssMode)) {
            this.setTransition(0);
            var r = t;
            if (
              (r || (r = i > s ? "next" : i < s ? "prev" : "reset"),
              this.emit("transitionEnd"),
              e && i !== s)
            ) {
              if ("reset" === r)
                return void this.emit("slideResetTransitionEnd");
              this.emit("slideChangeTransitionEnd"),
                "next" === r
                  ? this.emit("slideNextTransitionEnd")
                  : this.emit("slidePrevTransitionEnd");
            }
          }
        },
      },
      slide: {
        slideTo: function (e, t, i, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
          var a = this,
            r = e;
          r < 0 && (r = 0);
          var n = a.params,
            l = a.snapGrid,
            o = a.slidesGrid,
            d = a.previousIndex,
            h = a.activeIndex,
            p = a.rtlTranslate,
            u = a.wrapperEl;
          if (a.animating && n.preventInteractionOnTransition) return !1;
          var c = Math.min(a.params.slidesPerGroupSkip, r),
            v = c + Math.floor((r - c) / a.params.slidesPerGroup);
          v >= l.length && (v = l.length - 1),
            (h || n.initialSlide || 0) === (d || 0) &&
              i &&
              a.emit("beforeSlideChangeStart");
          var f,
            m = -l[v];
          if ((a.updateProgress(m), n.normalizeSlideIndex))
            for (var g = 0; g < o.length; g += 1)
              -Math.floor(100 * m) >= Math.floor(100 * o[g]) && (r = g);
          if (a.initialized && r !== h) {
            if (!a.allowSlideNext && m < a.translate && m < a.minTranslate())
              return !1;
            if (
              !a.allowSlidePrev &&
              m > a.translate &&
              m > a.maxTranslate() &&
              (h || 0) !== r
            )
              return !1;
          }
          if (
            ((f = r > h ? "next" : r < h ? "prev" : "reset"),
            (p && -m === a.translate) || (!p && m === a.translate))
          )
            return (
              a.updateActiveIndex(r),
              n.autoHeight && a.updateAutoHeight(),
              a.updateSlidesClasses(),
              "slide" !== n.effect && a.setTranslate(m),
              "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)),
              !1
            );
          if (n.cssMode) {
            var w,
              y = a.isHorizontal(),
              b = -m;
            if ((p && (b = u.scrollWidth - u.offsetWidth - b), 0 === t))
              u[y ? "scrollLeft" : "scrollTop"] = b;
            else if (u.scrollTo)
              u.scrollTo(
                (((w = {})[y ? "left" : "top"] = b), (w.behavior = "smooth"), w)
              );
            else u[y ? "scrollLeft" : "scrollTop"] = b;
            return !0;
          }
          return (
            0 === t
              ? (a.setTransition(0),
                a.setTranslate(m),
                a.updateActiveIndex(r),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, s),
                a.transitionStart(i, f),
                a.transitionEnd(i, f))
              : (a.setTransition(t),
                a.setTranslate(m),
                a.updateActiveIndex(r),
                a.updateSlidesClasses(),
                a.emit("beforeTransitionStart", t, s),
                a.transitionStart(i, f),
                a.animating ||
                  ((a.animating = !0),
                  a.onSlideToWrapperTransitionEnd ||
                    (a.onSlideToWrapperTransitionEnd = function (e) {
                      a &&
                        !a.destroyed &&
                        e.target === this &&
                        (a.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          a.onSlideToWrapperTransitionEnd
                        ),
                        a.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          a.onSlideToWrapperTransitionEnd
                        ),
                        (a.onSlideToWrapperTransitionEnd = null),
                        delete a.onSlideToWrapperTransitionEnd,
                        a.transitionEnd(i, f));
                    }),
                  a.$wrapperEl[0].addEventListener(
                    "transitionend",
                    a.onSlideToWrapperTransitionEnd
                  ),
                  a.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    a.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function (e, t, i, s) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0);
          var a = e;
          return (
            this.params.loop && (a += this.loopedSlides),
            this.slideTo(a, t, i, s)
          );
        },
        slideNext: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var s = this.params,
            a = this.animating,
            r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
          if (s.loop) {
            if (a && s.loopPreventsSlide) return !1;
            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
          }
          return this.slideTo(this.activeIndex + r, e, t, i);
        },
        slidePrev: function (e, t, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var s = this.params,
            a = this.animating,
            r = this.snapGrid,
            n = this.slidesGrid,
            l = this.rtlTranslate;
          if (s.loop) {
            if (a && s.loopPreventsSlide) return !1;
            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
          }
          function o(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var d,
            h = o(l ? this.translate : -this.translate),
            p = r.map(function (e) {
              return o(e);
            }),
            u = (r[p.indexOf(h)], r[p.indexOf(h) - 1]);
          return (
            void 0 === u &&
              s.cssMode &&
              r.forEach(function (e) {
                !u && h >= e && (u = e);
              }),
            void 0 !== u &&
              (d = n.indexOf(u)) < 0 &&
              (d = this.activeIndex - 1),
            this.slideTo(d, e, t, i)
          );
        },
        slideReset: function (e, t, i) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, i)
          );
        },
        slideToClosest: function (e, t, i, s) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === s && (s = 0.5);
          var a = this.activeIndex,
            r = Math.min(this.params.slidesPerGroupSkip, a),
            n = r + Math.floor((a - r) / this.params.slidesPerGroup),
            l = this.rtlTranslate ? this.translate : -this.translate;
          if (l >= this.snapGrid[n]) {
            var o = this.snapGrid[n];
            l - o > (this.snapGrid[n + 1] - o) * s &&
              (a += this.params.slidesPerGroup);
          } else {
            var d = this.snapGrid[n - 1];
            l - d <= (this.snapGrid[n] - d) * s &&
              (a -= this.params.slidesPerGroup);
          }
          return (
            (a = Math.max(a, 0)),
            (a = Math.min(a, this.slidesGrid.length - 1)),
            this.slideTo(a, e, t, i)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            i = t.params,
            s = t.$wrapperEl,
            a =
              "auto" === i.slidesPerView
                ? t.slidesPerViewDynamic()
                : i.slidesPerView,
            r = t.clickedIndex;
          if (i.loop) {
            if (t.animating) return;
            (e = parseInt(
              m(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              i.centeredSlides
                ? r < t.loopedSlides - a / 2 ||
                  r > t.slides.length - t.loopedSlides + a / 2
                  ? (t.loopFix(),
                    (r = s
                      .children(
                        "." +
                          i.slideClass +
                          '[data-swiper-slide-index="' +
                          e +
                          '"]:not(.' +
                          i.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    E(function () {
                      t.slideTo(r);
                    }))
                  : t.slideTo(r)
                : r > t.slides.length - a
                ? (t.loopFix(),
                  (r = s
                    .children(
                      "." +
                        i.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        i.slideDuplicateClass +
                        ")"
                    )
                    .eq(0)
                    .index()),
                  E(function () {
                    t.slideTo(r);
                  }))
                : t.slideTo(r);
          } else t.slideTo(r);
        },
      },
      loop: {
        loopCreate: function () {
          var e = this,
            t = r(),
            i = e.params,
            s = e.$wrapperEl;
          s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
          var a = s.children("." + i.slideClass);
          if (i.loopFillGroupWithBlank) {
            var n = i.slidesPerGroup - (a.length % i.slidesPerGroup);
            if (n !== i.slidesPerGroup) {
              for (var l = 0; l < n; l += 1) {
                var o = m(t.createElement("div")).addClass(
                  i.slideClass + " " + i.slideBlankClass
                );
                s.append(o);
              }
              a = s.children("." + i.slideClass);
            }
          }
          "auto" !== i.slidesPerView ||
            i.loopedSlides ||
            (i.loopedSlides = a.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(i.loopedSlides || i.slidesPerView, 10)
            )),
            (e.loopedSlides += i.loopAdditionalSlides),
            e.loopedSlides > a.length && (e.loopedSlides = a.length);
          var d = [],
            h = [];
          a.each(function (t, i) {
            var s = m(t);
            i < e.loopedSlides && h.push(t),
              i < a.length && i >= a.length - e.loopedSlides && d.push(t),
              s.attr("data-swiper-slide-index", i);
          });
          for (var p = 0; p < h.length; p += 1)
            s.append(m(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
          for (var u = d.length - 1; u >= 0; u -= 1)
            s.prepend(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
        },
        loopFix: function () {
          this.emit("beforeLoopFix");
          var e,
            t = this.activeIndex,
            i = this.slides,
            s = this.loopedSlides,
            a = this.allowSlidePrev,
            r = this.allowSlideNext,
            n = this.snapGrid,
            l = this.rtlTranslate;
          (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
          var o = -n[t] - this.getTranslate();
          if (t < s)
            (e = i.length - 3 * s + t),
              (e += s),
              this.slideTo(e, 0, !1, !0) &&
                0 !== o &&
                this.setTranslate((l ? -this.translate : this.translate) - o);
          else if (t >= i.length - s) {
            (e = -i.length + t + s),
              (e += s),
              this.slideTo(e, 0, !1, !0) &&
                0 !== o &&
                this.setTranslate((l ? -this.translate : this.translate) - o);
          }
          (this.allowSlidePrev = a),
            (this.allowSlideNext = r),
            this.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this.$wrapperEl,
            t = this.params,
            i = this.slides;
          e
            .children(
              "." +
                t.slideClass +
                "." +
                t.slideDuplicateClass +
                ",." +
                t.slideClass +
                "." +
                t.slideBlankClass
            )
            .remove(),
            i.removeAttr("data-swiper-slide-index");
        },
      },
      grabCursor: {
        setGrabCursor: function (e) {
          if (
            !(
              this.support.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode
            )
          ) {
            var t = this.el;
            (t.style.cursor = "move"),
              (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (t.style.cursor = e ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function () {
          this.support.touch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode ||
            (this.el.style.cursor = "");
        },
      },
      manipulation: {
        appendSlide: function (e) {
          var t = this.$wrapperEl,
            i = this.params;
          if (
            (i.loop && this.loopDestroy(),
            "object" == typeof e && "length" in e)
          )
            for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
          else t.append(e);
          i.loop && this.loopCreate(),
            (i.observer && this.support.observer) || this.update();
        },
        prependSlide: function (e) {
          var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
          t.loop && this.loopDestroy();
          var a = s + 1;
          if ("object" == typeof e && "length" in e) {
            for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
            a = s + e.length;
          } else i.prepend(e);
          t.loop && this.loopCreate(),
            (t.observer && this.support.observer) || this.update(),
            this.slideTo(a, 0, !1);
        },
        addSlide: function (e, t) {
          var i = this.$wrapperEl,
            s = this.params,
            a = this.activeIndex;
          s.loop &&
            ((a -= this.loopedSlides),
            this.loopDestroy(),
            (this.slides = i.children("." + s.slideClass)));
          var r = this.slides.length;
          if (e <= 0) this.prependSlide(t);
          else if (e >= r) this.appendSlide(t);
          else {
            for (var n = a > e ? a + 1 : a, l = [], o = r - 1; o >= e; o -= 1) {
              var d = this.slides.eq(o);
              d.remove(), l.unshift(d);
            }
            if ("object" == typeof t && "length" in t) {
              for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
              n = a > e ? a + t.length : a;
            } else i.append(t);
            for (var p = 0; p < l.length; p += 1) i.append(l[p]);
            s.loop && this.loopCreate(),
              (s.observer && this.support.observer) || this.update(),
              s.loop
                ? this.slideTo(n + this.loopedSlides, 0, !1)
                : this.slideTo(n, 0, !1);
          }
        },
        removeSlide: function (e) {
          var t = this.params,
            i = this.$wrapperEl,
            s = this.activeIndex;
          t.loop &&
            ((s -= this.loopedSlides),
            this.loopDestroy(),
            (this.slides = i.children("." + t.slideClass)));
          var a,
            r = s;
          if ("object" == typeof e && "length" in e) {
            for (var n = 0; n < e.length; n += 1)
              (a = e[n]),
                this.slides[a] && this.slides.eq(a).remove(),
                a < r && (r -= 1);
            r = Math.max(r, 0);
          } else
            (a = e),
              this.slides[a] && this.slides.eq(a).remove(),
              a < r && (r -= 1),
              (r = Math.max(r, 0));
          t.loop && this.loopCreate(),
            (t.observer && this.support.observer) || this.update(),
            t.loop
              ? this.slideTo(r + this.loopedSlides, 0, !1)
              : this.slideTo(r, 0, !1);
        },
        removeAllSlides: function () {
          for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
          this.removeSlide(e);
        },
      },
      events: {
        attachEvents: function () {
          var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support;
          (this.onTouchStart = O.bind(this)),
            (this.onTouchMove = A.bind(this)),
            (this.onTouchEnd = D.bind(this)),
            t.cssMode && (this.onScroll = B.bind(this)),
            (this.onClick = N.bind(this));
          var o = !!t.nested;
          if (!l.touch && l.pointerEvents)
            s.addEventListener(i.start, this.onTouchStart, !1),
              e.addEventListener(i.move, this.onTouchMove, o),
              e.addEventListener(i.end, this.onTouchEnd, !1);
          else {
            if (l.touch) {
              var d = !(
                "touchstart" !== i.start ||
                !l.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.addEventListener(i.start, this.onTouchStart, d),
                s.addEventListener(
                  i.move,
                  this.onTouchMove,
                  l.passiveListener ? { passive: !1, capture: o } : o
                ),
                s.addEventListener(i.end, this.onTouchEnd, d),
                i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, d),
                H || (e.addEventListener("touchstart", X), (H = !0));
            }
            ((t.simulateTouch && !n.ios && !n.android) ||
              (t.simulateTouch && !l.touch && n.ios)) &&
              (s.addEventListener("mousedown", this.onTouchStart, !1),
              e.addEventListener("mousemove", this.onTouchMove, o),
              e.addEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            s.addEventListener("click", this.onClick, !0),
            t.cssMode && a.addEventListener("scroll", this.onScroll),
            t.updateOnWindowResize
              ? this.on(
                  n.ios || n.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  G,
                  !0
                )
              : this.on("observerUpdate", G, !0);
        },
        detachEvents: function () {
          var e = r(),
            t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            n = this.device,
            l = this.support,
            o = !!t.nested;
          if (!l.touch && l.pointerEvents)
            s.removeEventListener(i.start, this.onTouchStart, !1),
              e.removeEventListener(i.move, this.onTouchMove, o),
              e.removeEventListener(i.end, this.onTouchEnd, !1);
          else {
            if (l.touch) {
              var d = !(
                "onTouchStart" !== i.start ||
                !l.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.removeEventListener(i.start, this.onTouchStart, d),
                s.removeEventListener(i.move, this.onTouchMove, o),
                s.removeEventListener(i.end, this.onTouchEnd, d),
                i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, d);
            }
            ((t.simulateTouch && !n.ios && !n.android) ||
              (t.simulateTouch && !l.touch && n.ios)) &&
              (s.removeEventListener("mousedown", this.onTouchStart, !1),
              e.removeEventListener("mousemove", this.onTouchMove, o),
              e.removeEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            s.removeEventListener("click", this.onClick, !0),
            t.cssMode && a.removeEventListener("scroll", this.onScroll),
            this.off(
              n.ios || n.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              G
            );
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides,
            s = void 0 === i ? 0 : i,
            a = this.params,
            r = this.$el,
            n = a.breakpoints;
          if (n && (!n || 0 !== Object.keys(n).length)) {
            var l = this.getBreakpoint(n);
            if (l && this.currentBreakpoint !== l) {
              var o = l in n ? n[l] : void 0;
              o &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn",
                ].forEach(function (e) {
                  var t = o[e];
                  void 0 !== t &&
                    (o[e] =
                      "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                        ? "slidesPerView" === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : "auto");
                });
              var d = o || this.originalParams,
                h = a.slidesPerColumn > 1,
                p = d.slidesPerColumn > 1;
              h && !p
                ? (r.removeClass(
                    a.containerModifierClass +
                      "multirow " +
                      a.containerModifierClass +
                      "multirow-column"
                  ),
                  this.emitContainerClasses())
                : !h &&
                  p &&
                  (r.addClass(a.containerModifierClass + "multirow"),
                  "column" === d.slidesPerColumnFill &&
                    r.addClass(a.containerModifierClass + "multirow-column"),
                  this.emitContainerClasses());
              var u = d.direction && d.direction !== a.direction,
                c = a.loop && (d.slidesPerView !== a.slidesPerView || u);
              u && t && this.changeDirection(),
                S(this.params, d),
                S(this, {
                  allowTouchMove: this.params.allowTouchMove,
                  allowSlideNext: this.params.allowSlideNext,
                  allowSlidePrev: this.params.allowSlidePrev,
                }),
                (this.currentBreakpoint = l),
                this.emit("_beforeBreakpoint", d),
                c &&
                  t &&
                  (this.loopDestroy(),
                  this.loopCreate(),
                  this.updateSlides(),
                  this.slideTo(e - s + this.loopedSlides, 0, !1)),
                this.emit("breakpoint", d);
            }
          }
        },
        getBreakpoint: function (e) {
          var t = l();
          if (e) {
            var i = !1,
              s = Object.keys(e).map(function (e) {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  var i = parseFloat(e.substr(1));
                  return { value: t.innerHeight * i, point: e };
                }
                return { value: e, point: e };
              });
            s.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var a = 0; a < s.length; a += 1) {
              var r = s[a],
                n = r.point;
              r.value <= t.innerWidth && (i = n);
            }
            return i || "max";
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this.params,
            t = this.isLocked,
            i =
              this.slides.length > 0 &&
              e.slidesOffsetBefore +
                e.spaceBetween * (this.slides.length - 1) +
                this.slides[0].offsetWidth * this.slides.length;
          e.slidesOffsetBefore && e.slidesOffsetAfter && i
            ? (this.isLocked = i <= this.size)
            : (this.isLocked = 1 === this.snapGrid.length),
            (this.allowSlideNext = !this.isLocked),
            (this.allowSlidePrev = !this.isLocked),
            t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
            t &&
              t !== this.isLocked &&
              ((this.isEnd = !1), this.navigation && this.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = this.device,
            r = [];
          r.push("initialized"),
            r.push(t.direction),
            t.freeMode && r.push("free-mode"),
            t.autoHeight && r.push("autoheight"),
            i && r.push("rtl"),
            t.slidesPerColumn > 1 &&
              (r.push("multirow"),
              "column" === t.slidesPerColumnFill && r.push("multirow-column")),
            a.android && r.push("android"),
            a.ios && r.push("ios"),
            t.cssMode && r.push("css-mode"),
            r.forEach(function (i) {
              e.push(t.containerModifierClass + i);
            }),
            s.addClass(e.join(" ")),
            this.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      },
      images: {
        loadImage: function (e, t, i, s, a, r) {
          var n,
            o = l();
          function d() {
            r && r();
          }
          m(e).parent("picture")[0] || (e.complete && a)
            ? d()
            : t
            ? (((n = new o.Image()).onload = d),
              (n.onerror = d),
              s && (n.sizes = s),
              i && (n.srcset = i),
              t && (n.src = t))
            : d();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var i = 0; i < e.imagesToLoad.length; i += 1) {
            var s = e.imagesToLoad[i];
            e.loadImage(
              s,
              s.currentSrc || s.getAttribute("src"),
              s.srcset || s.getAttribute("srcset"),
              s.sizes || s.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    F = {},
    R = (function () {
      function t() {
        for (
          var e, i, s = arguments.length, a = new Array(s), r = 0;
          r < s;
          r++
        )
          a[r] = arguments[r];
        1 === a.length && a[0].constructor && a[0].constructor === Object
          ? (i = a[0])
          : ((e = a[0]), (i = a[1])),
          i || (i = {}),
          (i = S({}, i)),
          e && !i.el && (i.el = e);
        var n = this;
        (n.support = z()),
          (n.device = P({ userAgent: i.userAgent })),
          (n.browser = k()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          void 0 === n.modules && (n.modules = {}),
          Object.keys(n.modules).forEach(function (e) {
            var t = n.modules[e];
            if (t.params) {
              var s = Object.keys(t.params)[0],
                a = t.params[s];
              if ("object" != typeof a || null === a) return;
              if (!(s in i) || !("enabled" in a)) return;
              !0 === i[s] && (i[s] = { enabled: !0 }),
                "object" != typeof i[s] ||
                  "enabled" in i[s] ||
                  (i[s].enabled = !0),
                i[s] || (i[s] = { enabled: !1 });
            }
          });
        var l = S({}, Y);
        n.useParams(l),
          (n.params = S({}, l, F, i)),
          (n.originalParams = S({}, n.params)),
          (n.passedParams = S({}, i)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach(function (e) {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = m);
        var o = m(n.params.el);
        if ((e = o[0])) {
          if (o.length > 1) {
            var d = [];
            return (
              o.each(function (e) {
                var s = S({}, i, { el: e });
                d.push(new t(s));
              }),
              d
            );
          }
          var h, p, u;
          return (
            (e.swiper = n),
            e && e.shadowRoot && e.shadowRoot.querySelector
              ? ((h = m(
                  e.shadowRoot.querySelector("." + n.params.wrapperClass)
                )).children = function (e) {
                  return o.children(e);
                })
              : (h = o.children("." + n.params.wrapperClass)),
            S(n, {
              $el: o,
              el: e,
              $wrapperEl: h,
              wrapperEl: h[0],
              classNames: [],
              slides: m(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === n.params.direction;
              },
              isVertical: function () {
                return "vertical" === n.params.direction;
              },
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction"),
              rtlTranslate:
                "horizontal" === n.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === o.css("direction")),
              wrongRTL: "-webkit-box" === h.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: n.params.allowSlideNext,
              allowSlidePrev: n.params.allowSlidePrev,
              touchEvents:
                ((p = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                (u = ["mousedown", "mousemove", "mouseup"]),
                n.support.pointerEvents &&
                  (u = ["pointerdown", "pointermove", "pointerup"]),
                (n.touchEventsTouch = {
                  start: p[0],
                  move: p[1],
                  end: p[2],
                  cancel: p[3],
                }),
                (n.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  "input, select, option, textarea, button, video, label",
                lastClickTime: x(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: n.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            n.useModules(),
            n.emit("_swiper"),
            n.params.init && n.init(),
            n
          );
        }
      }
      var i,
        s,
        a,
        r = t.prototype;
      return (
        (r.emitContainerClasses = function () {
          var e = this;
          if (e.params._emitClasses && e.el) {
            var t = e.el.className.split(" ").filter(function (t) {
              return (
                0 === t.indexOf("swiper-container") ||
                0 === t.indexOf(e.params.containerModifierClass)
              );
            });
            e.emit("_containerClasses", t.join(" "));
          }
        }),
        (r.getSlideClasses = function (e) {
          var t = this;
          return e.className
            .split(" ")
            .filter(function (e) {
              return (
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
              );
            })
            .join(" ");
        }),
        (r.emitSlidesClasses = function () {
          var e = this;
          e.params._emitClasses &&
            e.el &&
            e.slides.each(function (t) {
              var i = e.getSlideClasses(t);
              e.emit("_slideClass", t, i);
            });
        }),
        (r.slidesPerViewDynamic = function () {
          var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            s = this.size,
            a = this.activeIndex,
            r = 1;
          if (e.centeredSlides) {
            for (
              var n, l = t[a].swiperSlideSize, o = a + 1;
              o < t.length;
              o += 1
            )
              t[o] &&
                !n &&
                ((r += 1), (l += t[o].swiperSlideSize) > s && (n = !0));
            for (var d = a - 1; d >= 0; d -= 1)
              t[d] &&
                !n &&
                ((r += 1), (l += t[d].swiperSlideSize) > s && (n = !0));
          } else
            for (var h = a + 1; h < t.length; h += 1)
              i[h] - i[a] < s && (r += 1);
          return r;
        }),
        (r.update = function () {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              i = e.params;
            i.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (s(), e.params.autoHeight && e.updateAutoHeight())
                : (("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
              i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update");
          }
          function s() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
        }),
        (r.changeDirection = function (e, t) {
          void 0 === t && (t = !0);
          var i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.$el
                .removeClass("" + this.params.containerModifierClass + i)
                .addClass("" + this.params.containerModifierClass + e),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.each(function (t) {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }),
        (r.init = function () {
          this.initialized ||
            (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop
              ? this.slideTo(
                  this.params.initialSlide + this.loopedSlides,
                  0,
                  this.params.runCallbacksOnInit
                )
              : this.slideTo(
                  this.params.initialSlide,
                  0,
                  this.params.runCallbacksOnInit
                ),
            this.attachEvents(),
            (this.initialized = !0),
            this.emit("init"),
            this.emit("afterInit"));
        }),
        (r.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var i,
            s = this,
            a = s.params,
            r = s.$el,
            n = s.$wrapperEl,
            l = s.slides;
          return (
            void 0 === s.params ||
              s.destroyed ||
              (s.emit("beforeDestroy"),
              (s.initialized = !1),
              s.detachEvents(),
              a.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                r.removeAttr("style"),
                n.removeAttr("style"),
                l &&
                  l.length &&
                  l
                    .removeClass(
                      [
                        a.slideVisibleClass,
                        a.slideActiveClass,
                        a.slideNextClass,
                        a.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              s.emit("destroy"),
              Object.keys(s.eventsListeners).forEach(function (e) {
                s.off(e);
              }),
              !1 !== e &&
                ((s.$el[0].swiper = null),
                (i = s),
                Object.keys(i).forEach(function (e) {
                  try {
                    i[e] = null;
                  } catch (e) {}
                  try {
                    delete i[e];
                  } catch (e) {}
                })),
              (s.destroyed = !0)),
            null
          );
        }),
        (t.extendDefaults = function (e) {
          S(F, e);
        }),
        (t.installModule = function (e) {
          t.prototype.modules || (t.prototype.modules = {});
          var i = e.name || Object.keys(t.prototype.modules).length + "_" + x();
          t.prototype.modules[i] = e;
        }),
        (t.use = function (e) {
          return Array.isArray(e)
            ? (e.forEach(function (e) {
                return t.installModule(e);
              }),
              t)
            : (t.installModule(e), t);
        }),
        (i = t),
        (a = [
          {
            key: "extendedDefaults",
            get: function () {
              return F;
            },
          },
          {
            key: "defaults",
            get: function () {
              return Y;
            },
          },
        ]),
        (s = null) && e(i.prototype, s),
        a && e(i, a),
        t
      );
    })();
  Object.keys(V).forEach(function (e) {
    Object.keys(V[e]).forEach(function (t) {
      R.prototype[t] = V[e][t];
    });
  }),
    R.use([$, I]);
  var W = {
      update: function (e) {
        var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.params.virtual,
          l = n.addSlidesBefore,
          o = n.addSlidesAfter,
          d = t.virtual,
          h = d.from,
          p = d.to,
          u = d.slides,
          c = d.slidesGrid,
          v = d.renderSlide,
          f = d.offset;
        t.updateActiveIndex();
        var m,
          g,
          w,
          y = t.activeIndex || 0;
        (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          r
            ? ((g = Math.floor(s / 2) + a + o), (w = Math.floor(s / 2) + a + l))
            : ((g = s + (a - 1) + o), (w = a + l));
        var b = Math.max((y || 0) - w, 0),
          E = Math.min((y || 0) + g, u.length - 1),
          x = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
        function T() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (S(t.virtual, {
            from: b,
            to: E,
            offset: x,
            slidesGrid: t.slidesGrid,
          }),
          h === b && p === E && !e)
        )
          return (
            t.slidesGrid !== c && x !== f && t.slides.css(m, x + "px"),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: x,
              from: b,
              to: E,
              slides: (function () {
                for (var e = [], t = b; t <= E; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void (t.params.virtual.renderExternalUpdate && T())
          );
        var C = [],
          M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var z = h; z <= p; z += 1)
            (z < b || z > E) &&
              t.$wrapperEl
                .find(
                  "." +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    z +
                    '"]'
                )
                .remove();
        for (var P = 0; P < u.length; P += 1)
          P >= b &&
            P <= E &&
            (void 0 === p || e
              ? M.push(P)
              : (P > p && M.push(P), P < h && C.push(P)));
        M.forEach(function (e) {
          t.$wrapperEl.append(v(u[e], e));
        }),
          C.sort(function (e, t) {
            return t - e;
          }).forEach(function (e) {
            t.$wrapperEl.prepend(v(u[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(m, x + "px"),
          T();
      },
      renderSlide: function (e, t) {
        var i = this.params.virtual;
        if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
        var s = i.renderSlide
          ? m(i.renderSlide.call(this, e, t))
          : m(
              '<div class="' +
                this.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                "</div>"
            );
        return (
          s.attr("data-swiper-slide-index") ||
            s.attr("data-swiper-slide-index", t),
          i.cache && (this.virtual.cache[t] = s),
          s
        );
      },
      appendSlide: function (e) {
        if ("object" == typeof e && "length" in e)
          for (var t = 0; t < e.length; t += 1)
            e[t] && this.virtual.slides.push(e[t]);
        else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this.activeIndex,
          i = t + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a += 1)
            e[a] && this.virtual.slides.unshift(e[a]);
          (i = t + e.length), (s = e.length);
        } else this.virtual.slides.unshift(e);
        if (this.params.virtual.cache) {
          var r = this.virtual.cache,
            n = {};
          Object.keys(r).forEach(function (e) {
            var t = r[e],
              i = t.attr("data-swiper-slide-index");
            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
              (n[parseInt(e, 10) + s] = t);
          }),
            (this.virtual.cache = n);
        }
        this.virtual.update(!0), this.slideTo(i, 0);
      },
      removeSlide: function (e) {
        if (null != e) {
          var t = this.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; i >= 0; i -= 1)
              this.virtual.slides.splice(e[i], 1),
                this.params.virtual.cache && delete this.virtual.cache[e[i]],
                e[i] < t && (t -= 1),
                (t = Math.max(t, 0));
          else
            this.virtual.slides.splice(e, 1),
              this.params.virtual.cache && delete this.virtual.cache[e],
              e < t && (t -= 1),
              (t = Math.max(t, 0));
          this.virtual.update(!0), this.slideTo(t, 0);
        }
      },
      removeAllSlides: function () {
        (this.virtual.slides = []),
          this.params.virtual.cache && (this.virtual.cache = {}),
          this.virtual.update(!0),
          this.slideTo(0, 0);
      },
    },
    q = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        M(this, {
          virtual: t(
            t({}, W),
            {},
            { slides: this.params.virtual.slides, cache: {} }
          ),
        });
      },
      on: {
        beforeInit: function (e) {
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = { watchSlidesProgress: !0 };
            S(e.params, t),
              S(e.originalParams, t),
              e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function (e) {
          e.params.virtual.enabled && e.virtual.update();
        },
      },
    },
    j = {
      handle: function (e) {
        var t = l(),
          i = r(),
          s = this.rtlTranslate,
          a = e;
        a.originalEvent && (a = a.originalEvent);
        var n = a.keyCode || a.charCode,
          o = this.params.keyboard.pageUpDown,
          d = o && 33 === n,
          h = o && 34 === n,
          p = 37 === n,
          u = 39 === n,
          c = 38 === n,
          v = 40 === n;
        if (
          !this.allowSlideNext &&
          ((this.isHorizontal() && u) || (this.isVertical() && v) || h)
        )
          return !1;
        if (
          !this.allowSlidePrev &&
          ((this.isHorizontal() && p) || (this.isVertical() && c) || d)
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (i.activeElement &&
              i.activeElement.nodeName &&
              ("input" === i.activeElement.nodeName.toLowerCase() ||
                "textarea" === i.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            this.params.keyboard.onlyInViewport &&
            (d || h || p || u || c || v)
          ) {
            var f = !1;
            if (
              this.$el.parents("." + this.params.slideClass).length > 0 &&
              0 === this.$el.parents("." + this.params.slideActiveClass).length
            )
              return;
            var m = t.innerWidth,
              g = t.innerHeight,
              w = this.$el.offset();
            s && (w.left -= this.$el[0].scrollLeft);
            for (
              var y = [
                  [w.left, w.top],
                  [w.left + this.width, w.top],
                  [w.left, w.top + this.height],
                  [w.left + this.width, w.top + this.height],
                ],
                b = 0;
              b < y.length;
              b += 1
            ) {
              var E = y[b];
              E[0] >= 0 && E[0] <= m && E[1] >= 0 && E[1] <= g && (f = !0);
            }
            if (!f) return;
          }
          this.isHorizontal()
            ? ((d || h || p || u) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((h || u) && !s) || ((d || p) && s)) && this.slideNext(),
              (((d || p) && !s) || ((h || u) && s)) && this.slidePrev())
            : ((d || h || c || v) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (h || v) && this.slideNext(),
              (d || c) && this.slidePrev()),
            this.emit("keyPress", n);
        }
      },
      enable: function () {
        var e = r();
        this.keyboard.enabled ||
          (m(e).on("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !0));
      },
      disable: function () {
        var e = r();
        this.keyboard.enabled &&
          (m(e).off("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !1));
      },
    },
    _ = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
      create: function () {
        M(this, { keyboard: t({ enabled: !1 }, j) });
      },
      on: {
        init: function (e) {
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function (e) {
          e.keyboard.enabled && e.keyboard.disable();
        },
      },
    };
  var U = {
      lastScrollTime: x(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function () {
        return l().navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function () {
              var e = r(),
                t = "onwheel" in e;
              if (!t) {
                var i = e.createElement("div");
                i.setAttribute("onwheel", "return;"),
                  (t = "function" == typeof i.onwheel);
              }
              return (
                !t &&
                  e.implementation &&
                  e.implementation.hasFeature &&
                  !0 !== e.implementation.hasFeature("", "") &&
                  (t = e.implementation.hasFeature("Events.wheel", "3.0")),
                t
              );
            })()
          ? "wheel"
          : "mousewheel";
      },
      normalize: function (e) {
        var t = 0,
          i = 0,
          s = 0,
          a = 0;
        return (
          "detail" in e && (i = e.detail),
          "wheelDelta" in e && (i = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
          (s = 10 * t),
          (a = 10 * i),
          "deltaY" in e && (a = e.deltaY),
          "deltaX" in e && (s = e.deltaX),
          e.shiftKey && !s && ((s = a), (a = 0)),
          (s || a) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((s *= 40), (a *= 40))
              : ((s *= 800), (a *= 800))),
          s && !t && (t = s < 1 ? -1 : 1),
          a && !i && (i = a < 1 ? -1 : 1),
          { spinX: t, spinY: i, pixelX: s, pixelY: a }
        );
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var t = e,
          i = this,
          s = i.params.mousewheel;
        i.params.cssMode && t.preventDefault();
        var a = i.$el;
        if (
          ("container" !== i.params.mousewheel.eventsTarget &&
            (a = m(i.params.mousewheel.eventsTarget)),
          !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges)
        )
          return !0;
        t.originalEvent && (t = t.originalEvent);
        var r = 0,
          n = i.rtlTranslate ? -1 : 1,
          l = U.normalize(t);
        if (s.forceToAxis)
          if (i.isHorizontal()) {
            if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
            r = -l.pixelX * n;
          } else {
            if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
            r = -l.pixelY;
          }
        else
          r =
            Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
        if (0 === r) return !0;
        if ((s.invert && (r = -r), i.params.freeMode)) {
          var o = { time: x(), delta: Math.abs(r), direction: Math.sign(r) },
            d = i.mousewheel.lastEventBeforeSnap,
            h =
              d &&
              o.time < d.time + 500 &&
              o.delta <= d.delta &&
              o.direction === d.direction;
          if (!h) {
            (i.mousewheel.lastEventBeforeSnap = void 0),
              i.params.loop && i.loopFix();
            var p = i.getTranslate() + r * s.sensitivity,
              u = i.isBeginning,
              c = i.isEnd;
            if (
              (p >= i.minTranslate() && (p = i.minTranslate()),
              p <= i.maxTranslate() && (p = i.maxTranslate()),
              i.setTransition(0),
              i.setTranslate(p),
              i.updateProgress(),
              i.updateActiveIndex(),
              i.updateSlidesClasses(),
              ((!u && i.isBeginning) || (!c && i.isEnd)) &&
                i.updateSlidesClasses(),
              i.params.freeModeSticky)
            ) {
              clearTimeout(i.mousewheel.timeout),
                (i.mousewheel.timeout = void 0);
              var v = i.mousewheel.recentWheelEvents;
              v.length >= 15 && v.shift();
              var f = v.length ? v[v.length - 1] : void 0,
                g = v[0];
              if (
                (v.push(o),
                f && (o.delta > f.delta || o.direction !== f.direction))
              )
                v.splice(0);
              else if (
                v.length >= 15 &&
                o.time - g.time < 500 &&
                g.delta - o.delta >= 1 &&
                o.delta <= 6
              ) {
                var w = r > 0 ? 0.8 : 0.2;
                (i.mousewheel.lastEventBeforeSnap = o),
                  v.splice(0),
                  (i.mousewheel.timeout = E(function () {
                    i.slideToClosest(i.params.speed, !0, void 0, w);
                  }, 0));
              }
              i.mousewheel.timeout ||
                (i.mousewheel.timeout = E(function () {
                  (i.mousewheel.lastEventBeforeSnap = o),
                    v.splice(0),
                    i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (h || i.emit("scroll", t),
              i.params.autoplay &&
                i.params.autoplayDisableOnInteraction &&
                i.autoplay.stop(),
              p === i.minTranslate() || p === i.maxTranslate())
            )
              return !0;
          }
        } else {
          var y = {
              time: x(),
              delta: Math.abs(r),
              direction: Math.sign(r),
              raw: e,
            },
            b = i.mousewheel.recentWheelEvents;
          b.length >= 2 && b.shift();
          var T = b.length ? b[b.length - 1] : void 0;
          if (
            (b.push(y),
            T
              ? (y.direction !== T.direction ||
                  y.delta > T.delta ||
                  y.time > T.time + 150) &&
                i.mousewheel.animateSlider(y)
              : i.mousewheel.animateSlider(y),
            i.mousewheel.releaseScroll(y))
          )
            return !0;
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
      },
      animateSlider: function (e) {
        var t = l();
        return (
          !(
            this.params.mousewheel.thresholdDelta &&
            e.delta < this.params.mousewheel.thresholdDelta
          ) &&
          !(
            this.params.mousewheel.thresholdTime &&
            x() - this.mousewheel.lastScrollTime <
              this.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && x() - this.mousewheel.lastScrollTime < 60) ||
            (e.direction < 0
              ? (this.isEnd && !this.params.loop) ||
                this.animating ||
                (this.slideNext(), this.emit("scroll", e.raw))
              : (this.isBeginning && !this.params.loop) ||
                this.animating ||
                (this.slidePrev(), this.emit("scroll", e.raw)),
            (this.mousewheel.lastScrollTime = new t.Date().getTime()),
            !1))
        );
      },
      releaseScroll: function (e) {
        var t = this.params.mousewheel;
        if (e.direction < 0) {
          if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
        } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
          return !0;
        return !1;
      },
      enable: function () {
        var e = U.event();
        if (this.params.cssMode)
          return (
            this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0
          );
        if (!e) return !1;
        if (this.mousewheel.enabled) return !1;
        var t = this.$el;
        return (
          "container" !== this.params.mousewheel.eventsTarget &&
            (t = m(this.params.mousewheel.eventsTarget)),
          t.on("mouseenter", this.mousewheel.handleMouseEnter),
          t.on("mouseleave", this.mousewheel.handleMouseLeave),
          t.on(e, this.mousewheel.handle),
          (this.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function () {
        var e = U.event();
        if (this.params.cssMode)
          return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (!this.mousewheel.enabled) return !1;
        var t = this.$el;
        return (
          "container" !== this.params.mousewheel.eventsTarget &&
            (t = m(this.params.mousewheel.eventsTarget)),
          t.off(e, this.mousewheel.handle),
          (this.mousewheel.enabled = !1),
          !0
        );
      },
    },
    K = {
      update: function () {
        var e = this.params.navigation;
        if (!this.params.loop) {
          var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          s &&
            s.length > 0 &&
            (this.isBeginning
              ? s.addClass(e.disabledClass)
              : s.removeClass(e.disabledClass),
            s[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](e.lockClass)),
            i &&
              i.length > 0 &&
              (this.isEnd
                ? i.addClass(e.disabledClass)
                : i.removeClass(e.disabledClass),
              i[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](e.lockClass));
        }
      },
      onPrevClick: function (e) {
        e.preventDefault(),
          (this.isBeginning && !this.params.loop) || this.slidePrev();
      },
      onNextClick: function (e) {
        e.preventDefault(),
          (this.isEnd && !this.params.loop) || this.slideNext();
      },
      init: function () {
        var e,
          t,
          i = this.params.navigation;
        (i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = m(i.nextEl)),
            this.params.uniqueNavElements &&
              "string" == typeof i.nextEl &&
              e.length > 1 &&
              1 === this.$el.find(i.nextEl).length &&
              (e = this.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = m(i.prevEl)),
            this.params.uniqueNavElements &&
              "string" == typeof i.prevEl &&
              t.length > 1 &&
              1 === this.$el.find(i.prevEl).length &&
              (t = this.$el.find(i.prevEl))),
          e && e.length > 0 && e.on("click", this.navigation.onNextClick),
          t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
          S(this.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }));
      },
      destroy: function () {
        var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
        t &&
          t.length &&
          (t.off("click", this.navigation.onNextClick),
          t.removeClass(this.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", this.navigation.onPrevClick),
            i.removeClass(this.params.navigation.disabledClass));
      },
    },
    Z = {
      update: function () {
        var e = this.rtl,
          t = this.params.pagination;
        if (
          t.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var i,
            s =
              this.virtual && this.params.virtual.enabled
                ? this.virtual.slides.length
                : this.slides.length,
            a = this.pagination.$el,
            r = this.params.loop
              ? Math.ceil(
                  (s - 2 * this.loopedSlides) / this.params.slidesPerGroup
                )
              : this.snapGrid.length;
          if (
            (this.params.loop
              ? ((i = Math.ceil(
                  (this.activeIndex - this.loopedSlides) /
                    this.params.slidesPerGroup
                )) >
                  s - 1 - 2 * this.loopedSlides &&
                  (i -= s - 2 * this.loopedSlides),
                i > r - 1 && (i -= r),
                i < 0 &&
                  "bullets" !== this.params.paginationType &&
                  (i = r + i))
              : (i =
                  void 0 !== this.snapIndex
                    ? this.snapIndex
                    : this.activeIndex || 0),
            "bullets" === t.type &&
              this.pagination.bullets &&
              this.pagination.bullets.length > 0)
          ) {
            var n,
              l,
              o,
              d = this.pagination.bullets;
            if (
              (t.dynamicBullets &&
                ((this.pagination.bulletSize = d
                  .eq(0)
                  [this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                a.css(
                  this.isHorizontal() ? "width" : "height",
                  this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"
                ),
                t.dynamicMainBullets > 1 &&
                  void 0 !== this.previousIndex &&
                  ((this.pagination.dynamicBulletIndex +=
                    i - this.previousIndex),
                  this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
                    ? (this.pagination.dynamicBulletIndex =
                        t.dynamicMainBullets - 1)
                    : this.pagination.dynamicBulletIndex < 0 &&
                      (this.pagination.dynamicBulletIndex = 0)),
                (n = i - this.pagination.dynamicBulletIndex),
                (o =
                  ((l = n + (Math.min(d.length, t.dynamicMainBullets) - 1)) +
                    n) /
                  2)),
              d.removeClass(
                t.bulletActiveClass +
                  " " +
                  t.bulletActiveClass +
                  "-next " +
                  t.bulletActiveClass +
                  "-next-next " +
                  t.bulletActiveClass +
                  "-prev " +
                  t.bulletActiveClass +
                  "-prev-prev " +
                  t.bulletActiveClass +
                  "-main"
              ),
              a.length > 1)
            )
              d.each(function (e) {
                var s = m(e),
                  a = s.index();
                a === i && s.addClass(t.bulletActiveClass),
                  t.dynamicBullets &&
                    (a >= n &&
                      a <= l &&
                      s.addClass(t.bulletActiveClass + "-main"),
                    a === n &&
                      s
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev-prev"),
                    a === l &&
                      s
                        .next()
                        .addClass(t.bulletActiveClass + "-next")
                        .next()
                        .addClass(t.bulletActiveClass + "-next-next"));
              });
            else {
              var h = d.eq(i),
                p = h.index();
              if ((h.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                for (var u = d.eq(n), c = d.eq(l), v = n; v <= l; v += 1)
                  d.eq(v).addClass(t.bulletActiveClass + "-main");
                if (this.params.loop)
                  if (p >= d.length - t.dynamicMainBullets) {
                    for (var f = t.dynamicMainBullets; f >= 0; f -= 1)
                      d.eq(d.length - f).addClass(
                        t.bulletActiveClass + "-main"
                      );
                    d.eq(d.length - t.dynamicMainBullets - 1).addClass(
                      t.bulletActiveClass + "-prev"
                    );
                  } else
                    u
                      .prev()
                      .addClass(t.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(t.bulletActiveClass + "-prev-prev"),
                      c
                        .next()
                        .addClass(t.bulletActiveClass + "-next")
                        .next()
                        .addClass(t.bulletActiveClass + "-next-next");
                else
                  u
                    .prev()
                    .addClass(t.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(t.bulletActiveClass + "-prev-prev"),
                    c
                      .next()
                      .addClass(t.bulletActiveClass + "-next")
                      .next()
                      .addClass(t.bulletActiveClass + "-next-next");
              }
            }
            if (t.dynamicBullets) {
              var g = Math.min(d.length, t.dynamicMainBullets + 4),
                w =
                  (this.pagination.bulletSize * g -
                    this.pagination.bulletSize) /
                    2 -
                  o * this.pagination.bulletSize,
                y = e ? "right" : "left";
              d.css(this.isHorizontal() ? y : "top", w + "px");
            }
          }
          if (
            ("fraction" === t.type &&
              (a
                .find("." + t.currentClass)
                .text(t.formatFractionCurrent(i + 1)),
              a.find("." + t.totalClass).text(t.formatFractionTotal(r))),
            "progressbar" === t.type)
          ) {
            var b;
            b = t.progressbarOpposite
              ? this.isHorizontal()
                ? "vertical"
                : "horizontal"
              : this.isHorizontal()
              ? "horizontal"
              : "vertical";
            var E = (i + 1) / r,
              x = 1,
              T = 1;
            "horizontal" === b ? (x = E) : (T = E),
              a
                .find("." + t.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")"
                )
                .transition(this.params.speed);
          }
          "custom" === t.type && t.renderCustom
            ? (a.html(t.renderCustom(this, i + 1, r)),
              this.emit("paginationRender", a[0]))
            : this.emit("paginationUpdate", a[0]),
            a[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](t.lockClass);
        }
      },
      render: function () {
        var e = this.params.pagination;
        if (
          e.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var t =
              this.virtual && this.params.virtual.enabled
                ? this.virtual.slides.length
                : this.slides.length,
            i = this.pagination.$el,
            s = "";
          if ("bullets" === e.type) {
            for (
              var a = this.params.loop
                  ? Math.ceil(
                      (t - 2 * this.loopedSlides) / this.params.slidesPerGroup
                    )
                  : this.snapGrid.length,
                r = 0;
              r < a;
              r += 1
            )
              e.renderBullet
                ? (s += e.renderBullet.call(this, r, e.bulletClass))
                : (s +=
                    "<" +
                    e.bulletElement +
                    ' class="' +
                    e.bulletClass +
                    '"></' +
                    e.bulletElement +
                    ">");
            i.html(s), (this.pagination.bullets = i.find("." + e.bulletClass));
          }
          "fraction" === e.type &&
            ((s = e.renderFraction
              ? e.renderFraction.call(this, e.currentClass, e.totalClass)
              : '<span class="' +
                e.currentClass +
                '"></span> / <span class="' +
                e.totalClass +
                '"></span>'),
            i.html(s)),
            "progressbar" === e.type &&
              ((s = e.renderProgressbar
                ? e.renderProgressbar.call(this, e.progressbarFillClass)
                : '<span class="' + e.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== e.type &&
              this.emit("paginationRender", this.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var i = m(t.el);
          0 !== i.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              i.length > 1 &&
              (i = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              i.addClass(t.progressbarOppositeClass),
            t.clickable &&
              i.on("click", "." + t.bulletClass, function (t) {
                t.preventDefault();
                var i = m(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
              }),
            S(e.pagination, { $el: i, el: i[0] }));
        }
      },
      destroy: function () {
        var e = this.params.pagination;
        if (
          e.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            this.pagination.bullets &&
              this.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off("click", "." + e.bulletClass);
        }
      },
    },
    J = {
      setTranslate: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            l = this.params.scrollbar,
            o = s,
            d = (a - s) * i;
          t
            ? (d = -d) > 0
              ? ((o = s - d), (d = 0))
              : -d + s > a && (o = a + d)
            : d < 0
            ? ((o = s + d), (d = 0))
            : d + s > a && (o = a - d),
            this.isHorizontal()
              ? (r.transform("translate3d(" + d + "px, 0, 0)"),
                (r[0].style.width = o + "px"))
              : (r.transform("translate3d(0px, " + d + "px, 0)"),
                (r[0].style.height = o + "px")),
            l.hide &&
              (clearTimeout(this.scrollbar.timeout),
              (n[0].style.opacity = 1),
              (this.scrollbar.timeout = setTimeout(function () {
                (n[0].style.opacity = 0), n.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
          (t[0].style.width = ""), (t[0].style.height = "");
          var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
          (s =
            "auto" === this.params.scrollbar.dragSize
              ? a * r
              : parseInt(this.params.scrollbar.dragSize, 10)),
            this.isHorizontal()
              ? (t[0].style.width = s + "px")
              : (t[0].style.height = s + "px"),
            (i[0].style.display = r >= 1 ? "none" : ""),
            this.params.scrollbar.hide && (i[0].style.opacity = 0),
            S(e, { trackSize: a, divider: r, moveDivider: n, dragSize: s }),
            e.$el[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](this.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      },
      setDragPosition: function (e) {
        var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          l = i.dragStartPos;
        (t =
          (i.getPointerPosition(e) -
            a.offset()[this.isHorizontal() ? "left" : "top"] -
            (null !== l ? l : r / 2)) /
          (n - r)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
        var o =
          this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
        this.updateProgress(o),
          this.setTranslate(o),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
        (this.scrollbar.isTouched = !0),
          (this.scrollbar.dragStartPos =
            e.target === r[0] || e.target === r
              ? i.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  this.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          r.transition(100),
          i.setDragPosition(e),
          clearTimeout(this.scrollbar.dragTimeout),
          a.transition(0),
          t.hide && a.css("opacity", 1),
          this.params.cssMode &&
            this.$wrapperEl.css("scroll-snap-type", "none"),
          this.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
        this.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          a.transition(0),
          this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
        this.scrollbar.isTouched &&
          ((this.scrollbar.isTouched = !1),
          this.params.cssMode &&
            (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
          t.hide &&
            (clearTimeout(this.scrollbar.dragTimeout),
            (this.scrollbar.dragTimeout = E(function () {
              a.css("opacity", 0), a.transition(400);
            }, 1e3))),
          this.emit("scrollbarDragEnd", e),
          t.snapOnRelease && this.slideToClosest());
      },
      enableDraggable: function () {
        if (this.params.scrollbar.el) {
          var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!n.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          n.touch
            ? (l.addEventListener(i.start, this.scrollbar.onDragStart, o),
              l.addEventListener(i.move, this.scrollbar.onDragMove, o),
              l.addEventListener(i.end, this.scrollbar.onDragEnd, d))
            : (l.addEventListener(s.start, this.scrollbar.onDragStart, o),
              e.addEventListener(s.move, this.scrollbar.onDragMove, o),
              e.addEventListener(s.end, this.scrollbar.onDragEnd, d));
        }
      },
      disableDraggable: function () {
        if (this.params.scrollbar.el) {
          var e = r(),
            t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            n = this.support,
            l = t.$el[0],
            o = !(!n.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!n.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          n.touch
            ? (l.removeEventListener(i.start, this.scrollbar.onDragStart, o),
              l.removeEventListener(i.move, this.scrollbar.onDragMove, o),
              l.removeEventListener(i.end, this.scrollbar.onDragEnd, d))
            : (l.removeEventListener(s.start, this.scrollbar.onDragStart, o),
              e.removeEventListener(s.move, this.scrollbar.onDragMove, o),
              e.removeEventListener(s.end, this.scrollbar.onDragEnd, d));
        }
      },
      init: function () {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            s = m(i.el);
          this.params.uniqueNavElements &&
            "string" == typeof i.el &&
            s.length > 1 &&
            1 === t.find(i.el).length &&
            (s = t.find(i.el));
          var a = s.find("." + this.params.scrollbar.dragClass);
          0 === a.length &&
            ((a = m(
              '<div class="' + this.params.scrollbar.dragClass + '"></div>'
            )),
            s.append(a)),
            S(e, { $el: s, el: s[0], $dragEl: a, dragEl: a[0] }),
            i.draggable && e.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    Q = {
      setTransform: function (e, t) {
        var i = this.rtl,
          s = m(e),
          a = i ? -1 : 1,
          r = s.attr("data-swiper-parallax") || "0",
          n = s.attr("data-swiper-parallax-x"),
          l = s.attr("data-swiper-parallax-y"),
          o = s.attr("data-swiper-parallax-scale"),
          d = s.attr("data-swiper-parallax-opacity");
        if (
          (n || l
            ? ((n = n || "0"), (l = l || "0"))
            : this.isHorizontal()
            ? ((n = r), (l = "0"))
            : ((l = r), (n = "0")),
          (n =
            n.indexOf("%") >= 0
              ? parseInt(n, 10) * t * a + "%"
              : n * t * a + "px"),
          (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
          null != d)
        ) {
          var h = d - (d - 1) * (1 - Math.abs(t));
          s[0].style.opacity = h;
        }
        if (null == o) s.transform("translate3d(" + n + ", " + l + ", 0px)");
        else {
          var p = o - (o - 1) * (1 - Math.abs(t));
          s.transform(
            "translate3d(" + n + ", " + l + ", 0px) scale(" + p + ")"
          );
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.$el,
          i = e.slides,
          s = e.progress,
          a = e.snapGrid;
        t
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t) {
            e.parallax.setTransform(t, s);
          }),
          i.each(function (t, i) {
            var r = t.progress;
            e.params.slidesPerGroup > 1 &&
              "auto" !== e.params.slidesPerView &&
              (r += Math.ceil(i / 2) - s * (a.length - 1)),
              (r = Math.min(Math.max(r, -1), 1)),
              m(t)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each(function (t) {
                  e.parallax.setTransform(t, r);
                });
          });
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed);
        this.$el
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t) {
            var i = m(t),
              s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (s = 0), i.transition(s);
          });
      },
    },
    ee = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
      },
      onGestureStart: function (e) {
        var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;
        if (
          ((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !t.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureTouched = !0),
            (a.scaleStart = ee.getDistanceBetweenTouches(e));
        }
        (a.$slideEl && a.$slideEl.length) ||
        ((a.$slideEl = m(e.target).closest("." + this.params.slideClass)),
        0 === a.$slideEl.length &&
          (a.$slideEl = this.slides.eq(this.activeIndex)),
        (a.$imageEl = a.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        )),
        (a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass)),
        (a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
        0 !== a.$imageWrapEl.length)
          ? (a.$imageEl && a.$imageEl.transition(0), (this.zoom.isScaling = !0))
          : (a.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this.support,
          i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;
        if (!t.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureMoved = !0),
            (a.scaleMove = ee.getDistanceBetweenTouches(e));
        }
        a.$imageEl && 0 !== a.$imageEl.length
          ? (t.gestures
              ? (s.scale = e.scale * s.currentScale)
              : (s.scale = (a.scaleMove / a.scaleStart) * s.currentScale),
            s.scale > a.maxRatio &&
              (s.scale =
                a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, 0.5)),
            s.scale < i.minRatio &&
              (s.scale =
                i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, 0.5)),
            a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")"))
          : "gesturechange" === e.type && s.onGestureStart(e);
      },
      onGestureEnd: function (e) {
        var t = this.device,
          i = this.support,
          s = this.params.zoom,
          a = this.zoom,
          r = a.gesture;
        if (!i.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !t.android)
          )
            return;
          (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
        }
        r.$imageEl &&
          0 !== r.$imageEl.length &&
          ((a.scale = Math.max(Math.min(a.scale, r.maxRatio), s.minRatio)),
          r.$imageEl
            .transition(this.params.speed)
            .transform("translate3d(0,0,0) scale(" + a.scale + ")"),
          (a.currentScale = a.scale),
          (a.isScaling = !1),
          1 === a.scale && (r.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.device,
          i = this.zoom,
          s = i.gesture,
          a = i.image;
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          (a.isTouched ||
            (t.android && e.cancelable && e.preventDefault(),
            (a.isTouched = !0),
            (a.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (a.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((this.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = T(i.$imageWrapEl[0], "x") || 0),
            (s.startY = T(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
          var r = s.width * t.scale,
            n = s.height * t.scale;
          if (!(r < i.slideWidth && n < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - n / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !t.isScaling)
            ) {
              if (
                this.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !this.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.cancelable && e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
              a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
              a.prevTime || (a.prevTime = Date.now()),
              (a.x =
                (s.touchesCurrent.x - a.prevPositionX) /
                (Date.now() - a.prevTime) /
                2),
              (a.y =
                (s.touchesCurrent.y - a.prevPositionY) /
                (Date.now() - a.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
              Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
              (a.prevPositionX = s.touchesCurrent.x),
              (a.prevPositionY = s.touchesCurrent.y),
              (a.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved)
            return (i.isTouched = !1), void (i.isMoved = !1);
          (i.isTouched = !1), (i.isMoved = !1);
          var a = 300,
            r = 300,
            n = s.x * a,
            l = i.currentX + n,
            o = s.y * r,
            d = i.currentY + o;
          0 !== s.x && (a = Math.abs((l - i.currentX) / s.x)),
            0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
          var h = Math.max(a, r);
          (i.currentX = l), (i.currentY = d);
          var p = i.width * e.scale,
            u = i.height * e.scale;
          (i.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
            (i.maxX = -i.minX),
            (i.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
            (i.maxY = -i.minY),
            (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
            (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
            t.$imageWrapEl
              .transition(h)
              .transform(
                "translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
          (e.scale = 1),
          (e.currentScale = 1),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          i,
          s,
          a,
          r,
          n,
          l,
          o,
          d,
          h,
          p,
          u,
          c,
          v,
          f,
          m,
          g = this.zoom,
          w = this.params.zoom,
          y = g.gesture,
          b = g.image;
        (y.$slideEl ||
          (this.params.virtual && this.params.virtual.enabled && this.virtual
            ? (y.$slideEl = this.$wrapperEl.children(
                "." + this.params.slideActiveClass
              ))
            : (y.$slideEl = this.slides.eq(this.activeIndex)),
          (y.$imageEl = y.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass))),
        y.$imageEl && 0 !== y.$imageEl.length) &&
          (y.$slideEl.addClass("" + w.zoomedSlideClass),
          void 0 === b.touchesStart.x && e
            ? ((t =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((t = b.touchesStart.x), (i = b.touchesStart.y)),
          (g.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          (g.currentScale =
            y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          e
            ? ((f = y.$slideEl[0].offsetWidth),
              (m = y.$slideEl[0].offsetHeight),
              (s = y.$slideEl.offset().left + f / 2 - t),
              (a = y.$slideEl.offset().top + m / 2 - i),
              (l = y.$imageEl[0].offsetWidth),
              (o = y.$imageEl[0].offsetHeight),
              (d = l * g.scale),
              (h = o * g.scale),
              (c = -(p = Math.min(f / 2 - d / 2, 0))),
              (v = -(u = Math.min(m / 2 - h / 2, 0))),
              (r = s * g.scale) < p && (r = p),
              r > c && (r = c),
              (n = a * g.scale) < u && (n = u),
              n > v && (n = v))
            : ((r = 0), (n = 0)),
          y.$imageWrapEl
            .transition(300)
            .transform("translate3d(" + r + "px, " + n + "px,0)"),
          y.$imageEl
            .transition(300)
            .transform("translate3d(0,0,0) scale(" + g.scale + ")"));
      },
      out: function () {
        var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
        i.$slideEl ||
          (this.params.virtual && this.params.virtual.enabled && this.virtual
            ? (i.$slideEl = this.$wrapperEl.children(
                "." + this.params.slideActiveClass
              ))
            : (i.$slideEl = this.slides.eq(this.activeIndex)),
          (i.$imageEl = i.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((e.scale = 1),
            (e.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            (i.$slideEl = void 0));
      },
      toggleGestures: function (e) {
        var t = this.zoom,
          i = t.slideSelector,
          s = t.passiveListener;
        this.$wrapperEl[e]("gesturestart", i, t.onGestureStart, s),
          this.$wrapperEl[e]("gesturechange", i, t.onGestureChange, s),
          this.$wrapperEl[e]("gestureend", i, t.onGestureEnd, s);
      },
      enableGestures: function () {
        this.zoom.gesturesEnabled ||
          ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
      },
      disableGestures: function () {
        this.zoom.gesturesEnabled &&
          ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
      },
      enable: function () {
        var e = this.support,
          t = this.zoom;
        if (!t.enabled) {
          t.enabled = !0;
          var i = !(
              "touchstart" !== this.touchEvents.start ||
              !e.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            s = !e.passiveListener || { passive: !1, capture: !0 },
            a = "." + this.params.slideClass;
          (this.zoom.passiveListener = i),
            (this.zoom.slideSelector = a),
            e.gestures
              ? (this.$wrapperEl.on(
                  this.touchEvents.start,
                  this.zoom.enableGestures,
                  i
                ),
                this.$wrapperEl.on(
                  this.touchEvents.end,
                  this.zoom.disableGestures,
                  i
                ))
              : "touchstart" === this.touchEvents.start &&
                (this.$wrapperEl.on(
                  this.touchEvents.start,
                  a,
                  t.onGestureStart,
                  i
                ),
                this.$wrapperEl.on(
                  this.touchEvents.move,
                  a,
                  t.onGestureChange,
                  s
                ),
                this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i),
                this.touchEvents.cancel &&
                  this.$wrapperEl.on(
                    this.touchEvents.cancel,
                    a,
                    t.onGestureEnd,
                    i
                  )),
            this.$wrapperEl.on(
              this.touchEvents.move,
              "." + this.params.zoom.containerClass,
              t.onTouchMove,
              s
            );
        }
      },
      disable: function () {
        var e = this.zoom;
        if (e.enabled) {
          var t = this.support;
          this.zoom.enabled = !1;
          var i = !(
              "touchstart" !== this.touchEvents.start ||
              !t.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            s = !t.passiveListener || { passive: !1, capture: !0 },
            a = "." + this.params.slideClass;
          t.gestures
            ? (this.$wrapperEl.off(
                this.touchEvents.start,
                this.zoom.enableGestures,
                i
              ),
              this.$wrapperEl.off(
                this.touchEvents.end,
                this.zoom.disableGestures,
                i
              ))
            : "touchstart" === this.touchEvents.start &&
              (this.$wrapperEl.off(
                this.touchEvents.start,
                a,
                e.onGestureStart,
                i
              ),
              this.$wrapperEl.off(
                this.touchEvents.move,
                a,
                e.onGestureChange,
                s
              ),
              this.$wrapperEl.off(this.touchEvents.end, a, e.onGestureEnd, i),
              this.touchEvents.cancel &&
                this.$wrapperEl.off(
                  this.touchEvents.cancel,
                  a,
                  e.onGestureEnd,
                  i
                )),
            this.$wrapperEl.off(
              this.touchEvents.move,
              "." + this.params.zoom.containerClass,
              e.onTouchMove,
              s
            );
        }
      },
    },
    te = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var i = this,
          s = i.params.lazy;
        if (void 0 !== e && 0 !== i.slides.length) {
          var a =
              i.virtual && i.params.virtual.enabled
                ? i.$wrapperEl.children(
                    "." +
                      i.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : i.slides.eq(e),
            r = a.find(
              "." +
                s.elementClass +
                ":not(." +
                s.loadedClass +
                "):not(." +
                s.loadingClass +
                ")"
            );
          !a.hasClass(s.elementClass) ||
            a.hasClass(s.loadedClass) ||
            a.hasClass(s.loadingClass) ||
            r.push(a[0]),
            0 !== r.length &&
              r.each(function (e) {
                var r = m(e);
                r.addClass(s.loadingClass);
                var n = r.attr("data-background"),
                  l = r.attr("data-src"),
                  o = r.attr("data-srcset"),
                  d = r.attr("data-sizes"),
                  h = r.parent("picture");
                i.loadImage(r[0], l || n, o, d, !1, function () {
                  if (null != i && i && (!i || i.params) && !i.destroyed) {
                    if (
                      (n
                        ? (r.css("background-image", 'url("' + n + '")'),
                          r.removeAttr("data-background"))
                        : (o &&
                            (r.attr("srcset", o), r.removeAttr("data-srcset")),
                          d && (r.attr("sizes", d), r.removeAttr("data-sizes")),
                          h.length &&
                            h.children("source").each(function (e) {
                              var t = m(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          l && (r.attr("src", l), r.removeAttr("data-src"))),
                      r.addClass(s.loadedClass).removeClass(s.loadingClass),
                      a.find("." + s.preloaderClass).remove(),
                      i.params.loop && t)
                    ) {
                      var e = a.attr("data-swiper-slide-index");
                      if (a.hasClass(i.params.slideDuplicateClass)) {
                        var p = i.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            i.params.slideDuplicateClass +
                            ")"
                        );
                        i.lazy.loadInSlide(p.index(), !1);
                      } else {
                        var u = i.$wrapperEl.children(
                          "." +
                            i.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        i.lazy.loadInSlide(u.index(), !1);
                      }
                    }
                    i.emit("lazyImageReady", a[0], r[0]),
                      i.params.autoHeight && i.updateAutoHeight();
                  }
                }),
                  i.emit("lazyImageLoad", a[0], r[0]);
              });
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          i = e.params,
          s = e.slides,
          a = e.activeIndex,
          r = e.virtual && i.virtual.enabled,
          n = i.lazy,
          l = i.slidesPerView;
        function o(e) {
          if (r) {
            if (
              t.children(
                "." + i.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0;
          } else if (s[e]) return !0;
          return !1;
        }
        function d(e) {
          return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
        }
        if (
          ("auto" === l && (l = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children("." + i.slideVisibleClass).each(function (t) {
            var i = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
            e.lazy.loadInSlide(i);
          });
        else if (l > 1)
          for (var h = a; h < a + l; h += 1) o(h) && e.lazy.loadInSlide(h);
        else e.lazy.loadInSlide(a);
        if (n.loadPrevNext)
          if (l > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
            for (
              var p = n.loadPrevNextAmount,
                u = l,
                c = Math.min(a + u + Math.max(p, u), s.length),
                v = Math.max(a - Math.max(u, p), 0),
                f = a + l;
              f < c;
              f += 1
            )
              o(f) && e.lazy.loadInSlide(f);
            for (var g = v; g < a; g += 1) o(g) && e.lazy.loadInSlide(g);
          } else {
            var w = t.children("." + i.slideNextClass);
            w.length > 0 && e.lazy.loadInSlide(d(w));
            var y = t.children("." + i.slidePrevClass);
            y.length > 0 && e.lazy.loadInSlide(d(y));
          }
      },
    },
    ie = {
      LinearSpline: function (e, t) {
        var i,
          s,
          a,
          r,
          n,
          l = function (e, t) {
            for (s = -1, i = e.length; i - s > 1; )
              e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
            return i;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = l(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        this.controller.spline ||
          (this.controller.spline = this.params.loop
            ? new ie.LinearSpline(this.slidesGrid, e.slidesGrid)
            : new ie.LinearSpline(this.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var i,
          s,
          a = this,
          r = a.controller.control,
          n = a.constructor;
        function l(e) {
          var t = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by &&
            (a.controller.getInterpolateFunction(e),
            (s = -a.controller.spline.interpolate(-t))),
            (s && "container" !== a.params.controller.by) ||
              ((i =
                (e.maxTranslate() - e.minTranslate()) /
                (a.maxTranslate() - a.minTranslate())),
              (s = (t - a.minTranslate()) * i + e.minTranslate())),
            a.params.controller.inverse && (s = e.maxTranslate() - s),
            e.updateProgress(s),
            e.setTranslate(s, a),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof n && l(r[o]);
        else r instanceof n && t !== r && l(r);
      },
      setTransition: function (e, t) {
        var i,
          s = this,
          a = s.constructor,
          r = s.controller.control;
        function n(t) {
          t.setTransition(e, s),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                E(function () {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(function () {
                r &&
                  (t.params.loop &&
                    "slide" === s.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        if (Array.isArray(r))
          for (i = 0; i < r.length; i += 1)
            r[i] !== t && r[i] instanceof a && n(r[i]);
        else r instanceof a && t !== r && n(r);
      },
    },
    se = {
      getRandomNumber: function (e) {
        void 0 === e && (e = 16);
        return "x".repeat(e).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16);
        });
      },
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      makeElNotFocusable: function (e) {
        return e.attr("tabIndex", "-1"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElRoleDescription: function (e, t) {
        return e.attr("aria-role-description", t), e;
      },
      addElControls: function (e, t) {
        return e.attr("aria-controls", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      addElId: function (e, t) {
        return e.attr("id", t), e;
      },
      addElLive: function (e, t) {
        return e.attr("aria-live", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function (e) {
        var t = this.params.a11y;
        if (13 === e.keyCode) {
          var i = m(e.target);
          this.navigation &&
            this.navigation.$nextEl &&
            i.is(this.navigation.$nextEl) &&
            ((this.isEnd && !this.params.loop) || this.slideNext(),
            this.isEnd
              ? this.a11y.notify(t.lastSlideMessage)
              : this.a11y.notify(t.nextSlideMessage)),
            this.navigation &&
              this.navigation.$prevEl &&
              i.is(this.navigation.$prevEl) &&
              ((this.isBeginning && !this.params.loop) || this.slidePrev(),
              this.isBeginning
                ? this.a11y.notify(t.firstSlideMessage)
                : this.a11y.notify(t.prevSlideMessage)),
            this.pagination &&
              i.is("." + this.params.pagination.bulletClass) &&
              i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        if (!this.params.loop && this.navigation) {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          i &&
            i.length > 0 &&
            (this.isBeginning
              ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i))
              : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))),
            t &&
              t.length > 0 &&
              (this.isEnd
                ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t))
                : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
        }
      },
      updatePagination: function () {
        var e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (i) {
            var s = m(i);
            e.a11y.makeElFocusable(s),
              e.params.pagination.renderBullet ||
                (e.a11y.addElRole(s, "button"),
                e.a11y.addElLabel(
                  s,
                  t.paginationBulletMessage.replace(
                    /\{\{index\}\}/,
                    s.index() + 1
                  )
                ));
          });
      },
      init: function () {
        var e = this,
          t = e.params.a11y;
        e.$el.append(e.a11y.liveRegion);
        var i = e.$el;
        t.containerRoleDescriptionMessage &&
          e.a11y.addElRoleDescription(i, t.containerRoleDescriptionMessage),
          t.containerMessage && e.a11y.addElLabel(i, t.containerMessage);
        var s,
          a,
          r,
          n = e.$wrapperEl,
          l = n.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16);
        e.a11y.addElId(n, l),
          (s =
            e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite"),
          e.a11y.addElLive(n, s),
          t.itemRoleDescriptionMessage &&
            e.a11y.addElRoleDescription(
              m(e.slides),
              t.itemRoleDescriptionMessage
            ),
          e.a11y.addElRole(m(e.slides), "group"),
          e.slides.each(function (t) {
            var i = m(t);
            e.a11y.addElLabel(i, i.index() + 1 + " / " + e.slides.length);
          }),
          e.navigation && e.navigation.$nextEl && (a = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (r = e.navigation.$prevEl),
          a &&
            a.length &&
            (e.a11y.makeElFocusable(a),
            "BUTTON" !== a[0].tagName &&
              (e.a11y.addElRole(a, "button"),
              a.on("keydown", e.a11y.onEnterKey)),
            e.a11y.addElLabel(a, t.nextSlideMessage),
            e.a11y.addElControls(a, l)),
          r &&
            r.length &&
            (e.a11y.makeElFocusable(r),
            "BUTTON" !== r[0].tagName &&
              (e.a11y.addElRole(r, "button"),
              r.on("keydown", e.a11y.onEnterKey)),
            e.a11y.addElLabel(r, t.prevSlideMessage),
            e.a11y.addElControls(r, l)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              "keydown",
              "." + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
      destroy: function () {
        var e, t;
        this.a11y.liveRegion &&
          this.a11y.liveRegion.length > 0 &&
          this.a11y.liveRegion.remove(),
          this.navigation &&
            this.navigation.$nextEl &&
            (e = this.navigation.$nextEl),
          this.navigation &&
            this.navigation.$prevEl &&
            (t = this.navigation.$prevEl),
          e && e.off("keydown", this.a11y.onEnterKey),
          t && t.off("keydown", this.a11y.onEnterKey),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.off(
              "keydown",
              "." + this.params.pagination.bulletClass,
              this.a11y.onEnterKey
            );
      },
    },
    ae = {
      init: function () {
        var e = l();
        if (this.params.history) {
          if (!e.history || !e.history.pushState)
            return (
              (this.params.history.enabled = !1),
              void (this.params.hashNavigation.enabled = !0)
            );
          var t = this.history;
          (t.initialized = !0),
            (t.paths = ae.getPathValues(this.params.url)),
            (t.paths.key || t.paths.value) &&
              (t.scrollToSlide(
                0,
                t.paths.value,
                this.params.runCallbacksOnInit
              ),
              this.params.history.replaceState ||
                e.addEventListener(
                  "popstate",
                  this.history.setHistoryPopState
                ));
        }
      },
      destroy: function () {
        var e = l();
        this.params.history.replaceState ||
          e.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        (this.history.paths = ae.getPathValues(this.params.url)),
          this.history.scrollToSlide(
            this.params.speed,
            this.history.paths.value,
            !1
          );
      },
      getPathValues: function (e) {
        var t = l(),
          i = (e ? new URL(e) : t.location).pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          s = i.length;
        return { key: i[s - 2], value: i[s - 1] };
      },
      setHistory: function (e, t) {
        var i = l();
        if (this.history.initialized && this.params.history.enabled) {
          var s;
          s = this.params.url ? new URL(this.params.url) : i.location;
          var a = this.slides.eq(t),
            r = ae.slugify(a.attr("data-history"));
          s.pathname.includes(e) || (r = e + "/" + r);
          var n = i.history.state;
          (n && n.value === r) ||
            (this.params.history.replaceState
              ? i.history.replaceState({ value: r }, null, r)
              : i.history.pushState({ value: r }, null, r));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, i) {
        if (t)
          for (var s = 0, a = this.slides.length; s < a; s += 1) {
            var r = this.slides.eq(s);
            if (
              ae.slugify(r.attr("data-history")) === t &&
              !r.hasClass(this.params.slideDuplicateClass)
            ) {
              var n = r.index();
              this.slideTo(n, e, i);
            }
          }
        else this.slideTo(0, e, i);
      },
    },
    re = {
      onHashCange: function () {
        var e = r();
        this.emit("hashChange");
        var t = e.location.hash.replace("#", "");
        if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
          var i = this.$wrapperEl
            .children("." + this.params.slideClass + '[data-hash="' + t + '"]')
            .index();
          if (void 0 === i) return;
          this.slideTo(i);
        }
      },
      setHash: function () {
        var e = l(),
          t = r();
        if (
          this.hashNavigation.initialized &&
          this.params.hashNavigation.enabled
        )
          if (
            this.params.hashNavigation.replaceState &&
            e.history &&
            e.history.replaceState
          )
            e.history.replaceState(
              null,
              null,
              "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""
            ),
              this.emit("hashSet");
          else {
            var i = this.slides.eq(this.activeIndex),
              s = i.attr("data-hash") || i.attr("data-history");
            (t.location.hash = s || ""), this.emit("hashSet");
          }
      },
      init: function () {
        var e = r(),
          t = l();
        if (
          !(
            !this.params.hashNavigation.enabled ||
            (this.params.history && this.params.history.enabled)
          )
        ) {
          this.hashNavigation.initialized = !0;
          var i = e.location.hash.replace("#", "");
          if (i)
            for (var s = 0, a = this.slides.length; s < a; s += 1) {
              var n = this.slides.eq(s);
              if (
                (n.attr("data-hash") || n.attr("data-history")) === i &&
                !n.hasClass(this.params.slideDuplicateClass)
              ) {
                var o = n.index();
                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
              }
            }
          this.params.hashNavigation.watchState &&
            m(t).on("hashchange", this.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        var e = l();
        this.params.hashNavigation.watchState &&
          m(e).off("hashchange", this.hashNavigation.onHashCange);
      },
    },
    ne = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = E(function () {
            var t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    e.emit("autoplay"))
                : ((t = e.slidePrev(e.params.speed, !0, !0)),
                  e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)),
                  e.emit("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), e.emit("autoplay")),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) &&
                e.autoplay.run();
          }, i));
      },
      start: function () {
        return (
          void 0 === this.autoplay.timeout &&
          !this.autoplay.running &&
          ((this.autoplay.running = !0),
          this.emit("autoplayStart"),
          this.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        return (
          !!this.autoplay.running &&
          void 0 !== this.autoplay.timeout &&
          (this.autoplay.timeout &&
            (clearTimeout(this.autoplay.timeout),
            (this.autoplay.timeout = void 0)),
          (this.autoplay.running = !1),
          this.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        this.autoplay.running &&
          (this.autoplay.paused ||
            (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
            (this.autoplay.paused = !0),
            0 !== e && this.params.autoplay.waitForTransition
              ? (this.$wrapperEl[0].addEventListener(
                  "transitionend",
                  this.autoplay.onTransitionEnd
                ),
                this.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  this.autoplay.onTransitionEnd
                ))
              : ((this.autoplay.paused = !1), this.autoplay.run())));
      },
      onVisibilityChange: function () {
        var e = r();
        "hidden" === e.visibilityState &&
          this.autoplay.running &&
          this.autoplay.pause(),
          "visible" === e.visibilityState &&
            this.autoplay.paused &&
            (this.autoplay.run(), (this.autoplay.paused = !1));
      },
      onTransitionEnd: function (e) {
        this &&
          !this.destroyed &&
          this.$wrapperEl &&
          e.target === this.$wrapperEl[0] &&
          (this.$wrapperEl[0].removeEventListener(
            "transitionend",
            this.autoplay.onTransitionEnd
          ),
          this.$wrapperEl[0].removeEventListener(
            "webkitTransitionEnd",
            this.autoplay.onTransitionEnd
          ),
          (this.autoplay.paused = !1),
          this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
      },
    },
    le = {
      setTranslate: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
          this.params.virtualTranslate || (s -= this.translate);
          var a = 0;
          this.isHorizontal() || ((a = s), (s = 0));
          var r = this.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: r }).transform(
            "translate3d(" + s + "px, " + a + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.$wrapperEl;
        if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var a = !1;
          i.transitionEnd(function () {
            if (!a && t && !t.destroyed) {
              (a = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                i < e.length;
                i += 1
              )
                s.trigger(e[i]);
            }
          });
        }
      },
    },
    oe = {
      setTranslate: function () {
        var e,
          t = this.$el,
          i = this.$wrapperEl,
          s = this.slides,
          a = this.width,
          r = this.height,
          n = this.rtlTranslate,
          l = this.size,
          o = this.browser,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          u = 0;
        d.shadow &&
          (h
            ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                ((e = m('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: a + "px" }))
            : 0 === (e = t.find(".swiper-cube-shadow")).length &&
              ((e = m('<div class="swiper-cube-shadow"></div>')), t.append(e)));
        for (var c = 0; c < s.length; c += 1) {
          var v = s.eq(c),
            f = c;
          p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var g = 90 * f,
            w = Math.floor(g / 360);
          n && ((g = -g), (w = Math.floor(-g / 360)));
          var y = Math.max(Math.min(v[0].progress, 1), -1),
            b = 0,
            E = 0,
            x = 0;
          f % 4 == 0
            ? ((b = 4 * -w * l), (x = 0))
            : (f - 1) % 4 == 0
            ? ((b = 0), (x = 4 * -w * l))
            : (f - 2) % 4 == 0
            ? ((b = l + 4 * w * l), (x = l))
            : (f - 3) % 4 == 0 && ((b = -l), (x = 3 * l + 4 * l * w)),
            n && (b = -b),
            h || ((E = b), (b = 0));
          var T =
            "rotateX(" +
            (h ? 0 : -g) +
            "deg) rotateY(" +
            (h ? g : 0) +
            "deg) translate3d(" +
            b +
            "px, " +
            E +
            "px, " +
            x +
            "px)";
          if (
            (y <= 1 &&
              y > -1 &&
              ((u = 90 * f + 90 * y), n && (u = 90 * -f - 90 * y)),
            v.transform(T),
            d.slideShadows)
          ) {
            var C = h
                ? v.find(".swiper-slide-shadow-left")
                : v.find(".swiper-slide-shadow-top"),
              S = h
                ? v.find(".swiper-slide-shadow-right")
                : v.find(".swiper-slide-shadow-bottom");
            0 === C.length &&
              ((C = m(
                '<div class="swiper-slide-shadow-' +
                  (h ? "left" : "top") +
                  '"></div>'
              )),
              v.append(C)),
              0 === S.length &&
                ((S = m(
                  '<div class="swiper-slide-shadow-' +
                    (h ? "right" : "bottom") +
                    '"></div>'
                )),
                v.append(S)),
              C.length && (C[0].style.opacity = Math.max(-y, 0)),
              S.length && (S[0].style.opacity = Math.max(y, 0));
          }
        }
        if (
          (i.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px",
          }),
          d.shadow)
        )
          if (h)
            e.transform(
              "translate3d(0px, " +
                (a / 2 + d.shadowOffset) +
                "px, " +
                -a / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                d.shadowScale +
                ")"
            );
          else {
            var M = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              z =
                1.5 -
                (Math.sin((2 * M * Math.PI) / 360) / 2 +
                  Math.cos((2 * M * Math.PI) / 360) / 2),
              P = d.shadowScale,
              k = d.shadowScale / z,
              $ = d.shadowOffset;
            e.transform(
              "scale3d(" +
                P +
                ", 1, " +
                k +
                ") translate3d(0px, " +
                (r / 2 + $) +
                "px, " +
                -r / 2 / k +
                "px) rotateX(-90deg)"
            );
          }
        var L = o.isSafari || o.isWebView ? -l / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            L +
            "px) rotateX(" +
            (this.isHorizontal() ? 0 : u) +
            "deg) rotateY(" +
            (this.isHorizontal() ? -u : 0) +
            "deg)"
        );
      },
      setTransition: function (e) {
        var t = this.$el;
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            t.find(".swiper-cube-shadow").transition(e);
      },
    },
    de = {
      setTranslate: function () {
        for (
          var e = this.slides, t = this.rtlTranslate, i = 0;
          i < e.length;
          i += 1
        ) {
          var s = e.eq(i),
            a = s[0].progress;
          this.params.flipEffect.limitRotation &&
            (a = Math.max(Math.min(s[0].progress, 1), -1));
          var r = -180 * a,
            n = 0,
            l = -s[0].swiperSlideOffset,
            o = 0;
          if (
            (this.isHorizontal()
              ? t && (r = -r)
              : ((o = l), (l = 0), (n = -r), (r = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length),
            this.params.flipEffect.slideShadows)
          ) {
            var d = this.isHorizontal()
                ? s.find(".swiper-slide-shadow-left")
                : s.find(".swiper-slide-shadow-top"),
              h = this.isHorizontal()
                ? s.find(".swiper-slide-shadow-right")
                : s.find(".swiper-slide-shadow-bottom");
            0 === d.length &&
              ((d = m(
                '<div class="swiper-slide-shadow-' +
                  (this.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              s.append(d)),
              0 === h.length &&
                ((h = m(
                  '<div class="swiper-slide-shadow-' +
                    (this.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                s.append(h)),
              d.length && (d[0].style.opacity = Math.max(-a, 0)),
              h.length && (h[0].style.opacity = Math.max(a, 0));
          }
          s.transform(
            "translate3d(" +
              l +
              "px, " +
              o +
              "px, 0px) rotateX(" +
              n +
              "deg) rotateY(" +
              r +
              "deg)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;
        if (
          (i
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          i.eq(s).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              (r = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                i < e.length;
                i += 1
              )
                a.trigger(e[i]);
            }
          });
        }
      },
    },
    he = {
      setTranslate: function () {
        for (
          var e = this.width,
            t = this.height,
            i = this.slides,
            s = this.slidesSizesGrid,
            a = this.params.coverflowEffect,
            r = this.isHorizontal(),
            n = this.translate,
            l = r ? e / 2 - n : t / 2 - n,
            o = r ? a.rotate : -a.rotate,
            d = a.depth,
            h = 0,
            p = i.length;
          h < p;
          h += 1
        ) {
          var u = i.eq(h),
            c = s[h],
            v = ((l - u[0].swiperSlideOffset - c / 2) / c) * a.modifier,
            f = r ? o * v : 0,
            g = r ? 0 : o * v,
            w = -d * Math.abs(v),
            y = a.stretch;
          "string" == typeof y &&
            -1 !== y.indexOf("%") &&
            (y = (parseFloat(a.stretch) / 100) * c);
          var b = r ? 0 : y * v,
            E = r ? y * v : 0,
            x = 1 - (1 - a.scale) * Math.abs(v);
          Math.abs(E) < 0.001 && (E = 0),
            Math.abs(b) < 0.001 && (b = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(f) < 0.001 && (f = 0),
            Math.abs(g) < 0.001 && (g = 0),
            Math.abs(x) < 0.001 && (x = 0);
          var T =
            "translate3d(" +
            E +
            "px," +
            b +
            "px," +
            w +
            "px)  rotateX(" +
            g +
            "deg) rotateY(" +
            f +
            "deg) scale(" +
            x +
            ")";
          if (
            (u.transform(T),
            (u[0].style.zIndex = 1 - Math.abs(Math.round(v))),
            a.slideShadows)
          ) {
            var C = r
                ? u.find(".swiper-slide-shadow-left")
                : u.find(".swiper-slide-shadow-top"),
              S = r
                ? u.find(".swiper-slide-shadow-right")
                : u.find(".swiper-slide-shadow-bottom");
            0 === C.length &&
              ((C = m(
                '<div class="swiper-slide-shadow-' +
                  (r ? "left" : "top") +
                  '"></div>'
              )),
              u.append(C)),
              0 === S.length &&
                ((S = m(
                  '<div class="swiper-slide-shadow-' +
                    (r ? "right" : "bottom") +
                    '"></div>'
                )),
                u.append(S)),
              C.length && (C[0].style.opacity = v > 0 ? v : 0),
              S.length && (S[0].style.opacity = -v > 0 ? -v : 0);
          }
        }
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    },
    pe = {
      init: function () {
        var e = this.params.thumbs;
        if (this.thumbs.initialized) return !1;
        this.thumbs.initialized = !0;
        var t = this.constructor;
        return (
          e.swiper instanceof t
            ? ((this.thumbs.swiper = e.swiper),
              S(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              S(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : C(e.swiper) &&
              ((this.thumbs.swiper = new t(
                S({}, e.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                })
              )),
              (this.thumbs.swiperCreated = !0)),
          this.thumbs.swiper.$el.addClass(
            this.params.thumbs.thumbsContainerClass
          ),
          this.thumbs.swiper.on("tap", this.thumbs.onThumbClick),
          !0
        );
      },
      onThumbClick: function () {
        var e = this.thumbs.swiper;
        if (e) {
          var t = e.clickedIndex,
            i = e.clickedSlide;
          if (
            !(
              (i && m(i).hasClass(this.params.thumbs.slideThumbActiveClass)) ||
              null == t
            )
          ) {
            var s;
            if (
              ((s = e.params.loop
                ? parseInt(
                    m(e.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : t),
              this.params.loop)
            ) {
              var a = this.activeIndex;
              this.slides.eq(a).hasClass(this.params.slideDuplicateClass) &&
                (this.loopFix(),
                (this._clientLeft = this.$wrapperEl[0].clientLeft),
                (a = this.activeIndex));
              var r = this.slides
                  .eq(a)
                  .prevAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index(),
                n = this.slides
                  .eq(a)
                  .nextAll('[data-swiper-slide-index="' + s + '"]')
                  .eq(0)
                  .index();
              s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r;
            }
            this.slideTo(s);
          }
        }
      },
      update: function (e) {
        var t = this.thumbs.swiper;
        if (t) {
          var i =
              "auto" === t.params.slidesPerView
                ? t.slidesPerViewDynamic()
                : t.params.slidesPerView,
            s = this.params.thumbs.autoScrollOffset,
            a = s && !t.params.loop;
          if (this.realIndex !== t.realIndex || a) {
            var r,
              n,
              l = t.activeIndex;
            if (t.params.loop) {
              t.slides.eq(l).hasClass(t.params.slideDuplicateClass) &&
                (t.loopFix(),
                (t._clientLeft = t.$wrapperEl[0].clientLeft),
                (l = t.activeIndex));
              var o = t.slides
                  .eq(l)
                  .prevAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                  .eq(0)
                  .index(),
                d = t.slides
                  .eq(l)
                  .nextAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                  .eq(0)
                  .index();
              (r =
                void 0 === o
                  ? d
                  : void 0 === d
                  ? o
                  : d - l == l - o
                  ? l
                  : d - l < l - o
                  ? d
                  : o),
                (n = this.activeIndex > this.previousIndex ? "next" : "prev");
            } else
              n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";
            a && (r += "next" === n ? s : -1 * s),
              t.visibleSlidesIndexes &&
                t.visibleSlidesIndexes.indexOf(r) < 0 &&
                (t.params.centeredSlides
                  ? (r =
                      r > l
                        ? r - Math.floor(i / 2) + 1
                        : r + Math.floor(i / 2) - 1)
                  : r > l && (r = r - i + 1),
                t.slideTo(r, e ? 0 : void 0));
          }
          var h = 1,
            p = this.params.thumbs.slideThumbActiveClass;
          if (
            (this.params.slidesPerView > 1 &&
              !this.params.centeredSlides &&
              (h = this.params.slidesPerView),
            this.params.thumbs.multipleActiveThumbs || (h = 1),
            (h = Math.floor(h)),
            t.slides.removeClass(p),
            t.params.loop || (t.params.virtual && t.params.virtual.enabled))
          )
            for (var u = 0; u < h; u += 1)
              t.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (this.realIndex + u) + '"]'
                )
                .addClass(p);
          else
            for (var c = 0; c < h; c += 1)
              t.slides.eq(this.realIndex + c).addClass(p);
        }
      },
    },
    ue = [
      q,
      _,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
          },
        },
        create: function () {
          M(this, {
            mousewheel: {
              enabled: !1,
              lastScrollTime: x(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
              enable: U.enable,
              disable: U.disable,
              handle: U.handle,
              handleMouseEnter: U.handleMouseEnter,
              handleMouseLeave: U.handleMouseLeave,
              animateSlider: U.animateSlider,
              releaseScroll: U.releaseScroll,
            },
          });
        },
        on: {
          init: function (e) {
            !e.params.mousewheel.enabled &&
              e.params.cssMode &&
              e.mousewheel.disable(),
              e.params.mousewheel.enabled && e.mousewheel.enable();
          },
          destroy: function (e) {
            e.params.cssMode && e.mousewheel.enable(),
              e.mousewheel.enabled && e.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          M(this, { navigation: t({}, K) });
        },
        on: {
          init: function (e) {
            e.navigation.init(), e.navigation.update();
          },
          toEdge: function (e) {
            e.navigation.update();
          },
          fromEdge: function (e) {
            e.navigation.update();
          },
          destroy: function (e) {
            e.navigation.destroy();
          },
          click: function (e, t) {
            var i,
              s = e.navigation,
              a = s.$nextEl,
              r = s.$prevEl;
            !e.params.navigation.hideOnClick ||
              m(t.target).is(r) ||
              m(t.target).is(a) ||
              (a
                ? (i = a.hasClass(e.params.navigation.hiddenClass))
                : r && (i = r.hasClass(e.params.navigation.hiddenClass)),
              !0 === i ? e.emit("navigationShow") : e.emit("navigationHide"),
              a && a.toggleClass(e.params.navigation.hiddenClass),
              r && r.toggleClass(e.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          M(this, { pagination: t({ dynamicBulletIndex: 0 }, Z) });
        },
        on: {
          init: function (e) {
            e.pagination.init(), e.pagination.render(), e.pagination.update();
          },
          activeIndexChange: function (e) {
            (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
          },
          snapIndexChange: function (e) {
            e.params.loop || e.pagination.update();
          },
          slidesLengthChange: function (e) {
            e.params.loop && (e.pagination.render(), e.pagination.update());
          },
          snapGridLengthChange: function (e) {
            e.params.loop || (e.pagination.render(), e.pagination.update());
          },
          destroy: function (e) {
            e.pagination.destroy();
          },
          click: function (e, t) {
            e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              e.pagination.$el.length > 0 &&
              !m(t.target).hasClass(e.params.pagination.bulletClass) &&
              (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass)
                ? e.emit("paginationShow")
                : e.emit("paginationHide"),
              e.pagination.$el.toggleClass(e.params.pagination.hiddenClass));
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create: function () {
          M(this, {
            scrollbar: t(
              { isTouched: !1, timeout: null, dragTimeout: null },
              J
            ),
          });
        },
        on: {
          init: function (e) {
            e.scrollbar.init(),
              e.scrollbar.updateSize(),
              e.scrollbar.setTranslate();
          },
          update: function (e) {
            e.scrollbar.updateSize();
          },
          resize: function (e) {
            e.scrollbar.updateSize();
          },
          observerUpdate: function (e) {
            e.scrollbar.updateSize();
          },
          setTranslate: function (e) {
            e.scrollbar.setTranslate();
          },
          setTransition: function (e, t) {
            e.scrollbar.setTransition(t);
          },
          destroy: function (e) {
            e.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function () {
          M(this, { parallax: t({}, Q) });
        },
        on: {
          beforeInit: function (e) {
            e.params.parallax.enabled &&
              ((e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          init: function (e) {
            e.params.parallax.enabled && e.parallax.setTranslate();
          },
          setTranslate: function (e) {
            e.params.parallax.enabled && e.parallax.setTranslate();
          },
          setTransition: function (e, t) {
            e.params.parallax.enabled && e.parallax.setTransition(t);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create: function () {
          var e = this;
          M(e, {
            zoom: t(
              {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              },
              ee
            ),
          });
          var i = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: function () {
              return i;
            },
            set: function (t) {
              if (i !== t) {
                var s = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  a = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0;
                e.emit("zoomChange", t, s, a);
              }
              i = t;
            },
          });
        },
        on: {
          init: function (e) {
            e.params.zoom.enabled && e.zoom.enable();
          },
          destroy: function (e) {
            e.zoom.disable();
          },
          touchStart: function (e, t) {
            e.zoom.enabled && e.zoom.onTouchStart(t);
          },
          touchEnd: function (e, t) {
            e.zoom.enabled && e.zoom.onTouchEnd(t);
          },
          doubleTap: function (e, t) {
            e.params.zoom.enabled &&
              e.zoom.enabled &&
              e.params.zoom.toggle &&
              e.zoom.toggle(t);
          },
          transitionEnd: function (e) {
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
          },
          slideChange: function (e) {
            e.zoom.enabled &&
              e.params.zoom.enabled &&
              e.params.cssMode &&
              e.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function () {
          M(this, { lazy: t({ initialImageLoaded: !1 }, te) });
        },
        on: {
          beforeInit: function (e) {
            e.params.lazy.enabled &&
              e.params.preloadImages &&
              (e.params.preloadImages = !1);
          },
          init: function (e) {
            e.params.lazy.enabled &&
              !e.params.loop &&
              0 === e.params.initialSlide &&
              e.lazy.load();
          },
          scroll: function (e) {
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
          },
          resize: function (e) {
            e.params.lazy.enabled && e.lazy.load();
          },
          scrollbarDragMove: function (e) {
            e.params.lazy.enabled && e.lazy.load();
          },
          transitionStart: function (e) {
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart &&
                  !e.lazy.initialImageLoaded)) &&
              e.lazy.load();
          },
          transitionEnd: function (e) {
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              e.lazy.load();
          },
          slideChange: function (e) {
            e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function () {
          M(this, {
            controller: t({ control: this.params.controller.control }, ie),
          });
        },
        on: {
          update: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          resize: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          observerUpdate: function (e) {
            e.controller.control &&
              e.controller.spline &&
              ((e.controller.spline = void 0), delete e.controller.spline);
          },
          setTranslate: function (e, t, i) {
            e.controller.control && e.controller.setTranslate(t, i);
          },
          setTransition: function (e, t, i) {
            e.controller.control && e.controller.setTransition(t, i);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
          },
        },
        create: function () {
          M(this, {
            a11y: t(
              t({}, se),
              {},
              {
                liveRegion: m(
                  '<span class="' +
                    this.params.a11y.notificationClass +
                    '" aria-live="assertive" aria-atomic="true"></span>'
                ),
              }
            ),
          });
        },
        on: {
          afterInit: function (e) {
            e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
          },
          toEdge: function (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation();
          },
          fromEdge: function (e) {
            e.params.a11y.enabled && e.a11y.updateNavigation();
          },
          paginationUpdate: function (e) {
            e.params.a11y.enabled && e.a11y.updatePagination();
          },
          destroy: function (e) {
            e.params.a11y.enabled && e.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create: function () {
          M(this, { history: t({}, ae) });
        },
        on: {
          init: function (e) {
            e.params.history.enabled && e.history.init();
          },
          destroy: function (e) {
            e.params.history.enabled && e.history.destroy();
          },
          transitionEnd: function (e) {
            e.history.initialized &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
          slideChange: function (e) {
            e.history.initialized &&
              e.params.cssMode &&
              e.history.setHistory(e.params.history.key, e.activeIndex);
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create: function () {
          M(this, { hashNavigation: t({ initialized: !1 }, re) });
        },
        on: {
          init: function (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.init();
          },
          destroy: function (e) {
            e.params.hashNavigation.enabled && e.hashNavigation.destroy();
          },
          transitionEnd: function (e) {
            e.hashNavigation.initialized && e.hashNavigation.setHash();
          },
          slideChange: function (e) {
            e.hashNavigation.initialized &&
              e.params.cssMode &&
              e.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          M(this, { autoplay: t(t({}, ne), {}, { running: !1, paused: !1 }) });
        },
        on: {
          init: function (e) {
            e.params.autoplay.enabled &&
              (e.autoplay.start(),
              r().addEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              ));
          },
          beforeTransitionStart: function (e, t, i) {
            e.autoplay.running &&
              (i || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(t)
                : e.autoplay.stop());
          },
          sliderFirstMove: function (e) {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction
                ? e.autoplay.stop()
                : e.autoplay.pause());
          },
          touchEnd: function (e) {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              e.autoplay.run();
          },
          destroy: function (e) {
            e.autoplay.running && e.autoplay.stop(),
              r().removeEventListener(
                "visibilitychange",
                e.autoplay.onVisibilityChange
              );
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          M(this, { fadeEffect: t({}, le) });
        },
        on: {
          beforeInit: function (e) {
            if ("fade" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "fade");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "fade" === e.params.effect && e.fadeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "fade" === e.params.effect && e.fadeEffect.setTransition(t);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          M(this, { cubeEffect: t({}, oe) });
        },
        on: {
          beforeInit: function (e) {
            if ("cube" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "cube"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "cube" === e.params.effect && e.cubeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "cube" === e.params.effect && e.cubeEffect.setTransition(t);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          M(this, { flipEffect: t({}, de) });
        },
        on: {
          beforeInit: function (e) {
            if ("flip" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "flip"),
                e.classNames.push(e.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              S(e.params, t), S(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "flip" === e.params.effect && e.flipEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "flip" === e.params.effect && e.flipEffect.setTransition(t);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          M(this, { coverflowEffect: t({}, he) });
        },
        on: {
          beforeInit: function (e) {
            "coverflow" === e.params.effect &&
              (e.classNames.push(e.params.containerModifierClass + "coverflow"),
              e.classNames.push(e.params.containerModifierClass + "3d"),
              (e.params.watchSlidesProgress = !0),
              (e.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function (e) {
            "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "coverflow" === e.params.effect &&
              e.coverflowEffect.setTransition(t);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create: function () {
          M(this, { thumbs: t({ swiper: null, initialized: !1 }, pe) });
        },
        on: {
          beforeInit: function (e) {
            var t = e.params.thumbs;
            t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
          },
          slideChange: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          update: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          resize: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          observerUpdate: function (e) {
            e.thumbs.swiper && e.thumbs.update();
          },
          setTransition: function (e, t) {
            var i = e.thumbs.swiper;
            i && i.setTransition(t);
          },
          beforeDestroy: function (e) {
            var t = e.thumbs.swiper;
            t && e.thumbs.swiperCreated && t && t.destroy();
          },
        },
      },
    ];
  return R.use(ue), R;
});
//# sourceMappingURL=swiper-bundle.min.js.map
!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var l = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var l in e)
          n.d(
            o,
            l,
            function (t) {
              return e[t];
            }.bind(null, l)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    (function (o) {
      var l, r, i, s;
      (s = void 0 !== o ? o : this.window || this.global),
        (r = []),
        (l = (function (e) {
          "use strict";
          var t,
            o,
            l,
            r = n(2),
            i = {},
            s = {},
            c = n(3),
            a = n(4),
            u = n(5),
            d = !!(
              e &&
              e.document &&
              e.document.querySelector &&
              e.addEventListener
            );
          if ("undefined" != typeof window || d) {
            var f = Object.prototype.hasOwnProperty;
            return (
              (s.destroy = function () {
                if (!i.skipRendering)
                  try {
                    document.querySelector(i.tocSelector).innerHTML = "";
                  } catch (e) {
                    console.warn("Element not found: " + i.tocSelector);
                  }
                i.scrollContainer && document.querySelector(i.scrollContainer)
                  ? (document
                      .querySelector(i.scrollContainer)
                      .removeEventListener("scroll", this._scrollListener, !1),
                    document
                      .querySelector(i.scrollContainer)
                      .removeEventListener("resize", this._scrollListener, !1),
                    t &&
                      document
                        .querySelector(i.scrollContainer)
                        .removeEventListener("click", this._clickListener, !1))
                  : (document.removeEventListener(
                      "scroll",
                      this._scrollListener,
                      !1
                    ),
                    document.removeEventListener(
                      "resize",
                      this._scrollListener,
                      !1
                    ),
                    t &&
                      document.removeEventListener(
                        "click",
                        this._clickListener,
                        !1
                      ));
              }),
              (s.init = function (e) {
                if (
                  d &&
                  ((i = (function () {
                    for (var e = {}, t = 0; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var o in n) f.call(n, o) && (e[o] = n[o]);
                    }
                    return e;
                  })(r, e || {})),
                  (this.options = i),
                  (this.state = {}),
                  i.scrollSmooth &&
                    ((i.duration = i.scrollSmoothDuration),
                    (i.offset = i.scrollSmoothOffset),
                    (s.scrollSmooth = n(6).initSmoothScrolling(i))),
                  (t = c(i)),
                  (o = a(i)),
                  (this._buildHtml = t),
                  (this._parseContent = o),
                  s.destroy(),
                  null !==
                    (l = o.selectHeadings(
                      i.contentSelector,
                      i.headingSelector
                    )))
                ) {
                  var h = o.nestHeadingsArray(l).nest;
                  i.skipRendering || t.render(i.tocSelector, h),
                    (this._scrollListener = m(function (e) {
                      t.updateToc(l), !i.disableTocScrollSync && u(i);
                      var n =
                        e &&
                        e.target &&
                        e.target.scrollingElement &&
                        0 === e.target.scrollingElement.scrollTop;
                      ((e &&
                        (0 === e.eventPhase || null === e.currentTarget)) ||
                        n) &&
                        (t.updateToc(l),
                        i.scrollEndCallback && i.scrollEndCallback(e));
                    }, i.throttleTimeout)),
                    this._scrollListener(),
                    i.scrollContainer &&
                    document.querySelector(i.scrollContainer)
                      ? (document
                          .querySelector(i.scrollContainer)
                          .addEventListener("scroll", this._scrollListener, !1),
                        document
                          .querySelector(i.scrollContainer)
                          .addEventListener("resize", this._scrollListener, !1))
                      : (document.addEventListener(
                          "scroll",
                          this._scrollListener,
                          !1
                        ),
                        document.addEventListener(
                          "resize",
                          this._scrollListener,
                          !1
                        ));
                  var p = null;
                  return (
                    (this._clickListener = m(function (e) {
                      i.scrollSmooth && t.disableTocAnimation(e),
                        t.updateToc(l),
                        p && clearTimeout(p),
                        (p = setTimeout(function () {
                          t.enableTocAnimation();
                        }, i.scrollSmoothDuration));
                    }, i.throttleTimeout)),
                    i.scrollContainer &&
                    document.querySelector(i.scrollContainer)
                      ? document
                          .querySelector(i.scrollContainer)
                          .addEventListener("click", this._clickListener, !1)
                      : document.addEventListener(
                          "click",
                          this._clickListener,
                          !1
                        ),
                    this
                  );
                }
              }),
              (s.refresh = function (e) {
                s.destroy(), s.init(e || this.options);
              }),
              (e.tocbot = s),
              s
            );
          }
          function m(e, t, n) {
            var o, l;
            return (
              t || (t = 250),
              function () {
                var r = n || this,
                  i = +new Date(),
                  s = arguments;
                o && i < o + t
                  ? (clearTimeout(l),
                    (l = setTimeout(function () {
                      (o = i), e.apply(r, s);
                    }, t)))
                  : ((o = i), e.apply(r, s));
              }
            );
          }
        })(s)),
        void 0 === (i = "function" == typeof l ? l.apply(t, r) : l) ||
          (e.exports = i);
    }.call(this, n(1)));
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    e.exports = {
      tocSelector: ".js-toc",
      contentSelector: ".js-toc-content",
      headingSelector: "h1, h2, h3",
      ignoreSelector: ".js-toc-ignore",
      hasInnerContainers: !1,
      linkClass: "toc-link",
      extraLinkClasses: "",
      activeLinkClass: "is-active-link",
      listClass: "toc-list",
      extraListClasses: "",
      isCollapsedClass: "is-collapsed",
      collapsibleClass: "is-collapsible",
      listItemClass: "toc-list-item",
      activeListItemClass: "is-active-li",
      collapseDepth: 0,
      scrollSmooth: !0,
      scrollSmoothDuration: 420,
      scrollSmoothOffset: 0,
      scrollEndCallback: function (e) {},
      headingsOffset: 1,
      throttleTimeout: 50,
      positionFixedSelector: null,
      positionFixedClass: "is-position-fixed",
      fixedSidebarOffset: "auto",
      includeHtml: !1,
      onClick: function (e) {},
      orderedList: !0,
      scrollContainer: null,
      skipRendering: !1,
      headingLabelCallback: !1,
      ignoreHiddenElements: !1,
      headingObjectCallback: null,
      basePath: "",
      disableTocScrollSync: !1,
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = [].forEach,
        n = [].some,
        o = document.body,
        l = !0;
      function r(n, o) {
        var l = o.appendChild(
          (function (n) {
            var o = document.createElement("li"),
              l = document.createElement("a");
            e.listItemClass && o.setAttribute("class", e.listItemClass);
            e.onClick && (l.onclick = e.onClick);
            e.includeHtml && n.childNodes.length
              ? t.call(n.childNodes, function (e) {
                  l.appendChild(e.cloneNode(!0));
                })
              : (l.textContent = n.textContent);
            return (
              l.setAttribute("href", e.basePath + "#" + n.id),
              l.setAttribute(
                "class",
                e.linkClass +
                  " node-name--" +
                  n.nodeName +
                  " " +
                  e.extraLinkClasses
              ),
              o.appendChild(l),
              o
            );
          })(n)
        );
        if (n.children.length) {
          var s = i(n.isCollapsed);
          n.children.forEach(function (e) {
            r(e, s);
          }),
            l.appendChild(s);
        }
      }
      function i(t) {
        var n = e.orderedList ? "ol" : "ul",
          o = document.createElement(n),
          l = e.listClass + " " + e.extraListClasses;
        return (
          t &&
            ((l += " " + e.collapsibleClass), (l += " " + e.isCollapsedClass)),
          o.setAttribute("class", l),
          o
        );
      }
      return {
        enableTocAnimation: function () {
          l = !0;
        },
        disableTocAnimation: function (t) {
          var n = t.target || t.srcElement;
          "string" == typeof n.className &&
            -1 !== n.className.indexOf(e.linkClass) &&
            (l = !1);
        },
        render: function (e, t) {
          var n = i(!1);
          t.forEach(function (e) {
            r(e, n);
          });
          var o = document.querySelector(e);
          if (null !== o)
            return (
              o.firstChild && o.removeChild(o.firstChild),
              0 === t.length ? o : o.appendChild(n)
            );
        },
        updateToc: function (r) {
          var i;
          (i =
            e.scrollContainer && document.querySelector(e.scrollContainer)
              ? document.querySelector(e.scrollContainer).scrollTop
              : document.documentElement.scrollTop || o.scrollTop),
            e.positionFixedSelector &&
              (function () {
                var t;
                t =
                  e.scrollContainer && document.querySelector(e.scrollContainer)
                    ? document.querySelector(e.scrollContainer).scrollTop
                    : document.documentElement.scrollTop || o.scrollTop;
                var n = document.querySelector(e.positionFixedSelector);
                "auto" === e.fixedSidebarOffset &&
                  (e.fixedSidebarOffset = document.querySelector(
                    e.tocSelector
                  ).offsetTop),
                  t > e.fixedSidebarOffset
                    ? -1 === n.className.indexOf(e.positionFixedClass) &&
                      (n.className += " " + e.positionFixedClass)
                    : (n.className = n.className
                        .split(" " + e.positionFixedClass)
                        .join(""));
              })();
          var s,
            c = r;
          if (
            l &&
            null !== document.querySelector(e.tocSelector) &&
            c.length > 0
          ) {
            n.call(c, function (t, n) {
              return (function t(n) {
                var o = 0;
                return (
                  n !==
                    document.querySelector(e.contentSelector && null != n) &&
                    ((o = n.offsetTop),
                    e.hasInnerContainers && (o += t(n.offsetParent))),
                  o
                );
              })(t) >
                i + e.headingsOffset + 10
                ? ((s = c[0 === n ? n : n - 1]), !0)
                : n === c.length - 1
                ? ((s = c[c.length - 1]), !0)
                : void 0;
            });
            var a = document
              .querySelector(e.tocSelector)
              .querySelectorAll("." + e.linkClass);
            t.call(a, function (t) {
              t.className = t.className.split(" " + e.activeLinkClass).join("");
            });
            var u = document
              .querySelector(e.tocSelector)
              .querySelectorAll("." + e.listItemClass);
            t.call(u, function (t) {
              t.className = t.className
                .split(" " + e.activeListItemClass)
                .join("");
            });
            var d = document
              .querySelector(e.tocSelector)
              .querySelector(
                "." +
                  e.linkClass +
                  ".node-name--" +
                  s.nodeName +
                  '[href="' +
                  e.basePath +
                  "#" +
                  s.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g, "\\$1") +
                  '"]'
              );
            -1 === d.className.indexOf(e.activeLinkClass) &&
              (d.className += " " + e.activeLinkClass);
            var f = d.parentNode;
            f &&
              -1 === f.className.indexOf(e.activeListItemClass) &&
              (f.className += " " + e.activeListItemClass);
            var m = document
              .querySelector(e.tocSelector)
              .querySelectorAll("." + e.listClass + "." + e.collapsibleClass);
            t.call(m, function (t) {
              -1 === t.className.indexOf(e.isCollapsedClass) &&
                (t.className += " " + e.isCollapsedClass);
            }),
              d.nextSibling &&
                -1 !== d.nextSibling.className.indexOf(e.isCollapsedClass) &&
                (d.nextSibling.className = d.nextSibling.className
                  .split(" " + e.isCollapsedClass)
                  .join("")),
              (function t(n) {
                if (
                  -1 !== n.className.indexOf(e.collapsibleClass) &&
                  -1 !== n.className.indexOf(e.isCollapsedClass)
                )
                  return (
                    (n.className = n.className
                      .split(" " + e.isCollapsedClass)
                      .join("")),
                    t(n.parentNode.parentNode)
                  );
                return n;
              })(d.parentNode.parentNode);
          }
        },
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = [].reduce;
      function n(e) {
        return e[e.length - 1];
      }
      function o(e) {
        return +e.nodeName.split("H").join("");
      }
      function l(t) {
        if (!(t instanceof window.HTMLElement)) return t;
        if (e.ignoreHiddenElements && (!t.offsetHeight || !t.offsetParent))
          return null;
        var n = {
          id: t.id,
          children: [],
          nodeName: t.nodeName,
          headingLevel: o(t),
          textContent: e.headingLabelCallback
            ? String(e.headingLabelCallback(t.textContent))
            : t.textContent.trim(),
        };
        return (
          e.includeHtml && (n.childNodes = t.childNodes),
          e.headingObjectCallback ? e.headingObjectCallback(n, t) : n
        );
      }
      return {
        nestHeadingsArray: function (o) {
          return t.call(
            o,
            function (t, o) {
              var r = l(o);
              return (
                r &&
                  (function (t, o) {
                    for (
                      var r = l(t),
                        i = r.headingLevel,
                        s = o,
                        c = n(s),
                        a = i - (c ? c.headingLevel : 0);
                      a > 0;

                    )
                      (c = n(s)) && void 0 !== c.children && (s = c.children),
                        a--;
                    i >= e.collapseDepth && (r.isCollapsed = !0), s.push(r);
                  })(r, t.nest),
                t
              );
            },
            { nest: [] }
          );
        },
        selectHeadings: function (t, n) {
          var o = n;
          e.ignoreSelector &&
            (o = n.split(",").map(function (t) {
              return t.trim() + ":not(" + e.ignoreSelector + ")";
            }));
          try {
            return document.querySelector(t).querySelectorAll(o);
          } catch (e) {
            return console.warn("Element not found: " + t), null;
          }
        },
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = document.querySelector(e.tocSelector);
      if (t && t.scrollHeight > t.clientHeight) {
        var n = t.querySelector("." + e.activeListItemClass);
        n && (t.scrollTop = n.offsetTop);
      }
    };
  },
  function (e, t) {
    t.initSmoothScrolling = function (e) {
      document.documentElement.style;
      var t = e.duration,
        n = e.offset,
        o = location.hash ? l(location.href) : location.href;
      function l(e) {
        return e.slice(0, e.lastIndexOf("#"));
      }
      document.body.addEventListener(
        "click",
        function (r) {
          var i;
          "a" !== (i = r.target).tagName.toLowerCase() ||
            !(i.hash.length > 0 || "#" === i.href.charAt(i.href.length - 1)) ||
            (l(i.href) !== o && l(i.href) + "#" !== o) ||
            r.target.className.indexOf("no-smooth-scroll") > -1 ||
            ("#" === r.target.href.charAt(r.target.href.length - 2) &&
              "!" === r.target.href.charAt(r.target.href.length - 1)) ||
            -1 === r.target.className.indexOf(e.linkClass) ||
            (function (e, t) {
              var n,
                o,
                l = window.pageYOffset,
                r = {
                  duration: t.duration,
                  offset: t.offset || 0,
                  callback: t.callback,
                  easing:
                    t.easing ||
                    function (e, t, n, o) {
                      return (e /= o / 2) < 1
                        ? (n / 2) * e * e + t
                        : (e--, (-n / 2) * (e * (e - 2) - 1) + t);
                    },
                },
                i = document.querySelector(
                  '[id="' + decodeURI(e).split("#").join("") + '"]'
                ),
                s =
                  "string" == typeof e
                    ? r.offset +
                      (e
                        ? (i && i.getBoundingClientRect().top) || 0
                        : -(
                            document.documentElement.scrollTop ||
                            document.body.scrollTop
                          ))
                    : e,
                c =
                  "function" == typeof r.duration ? r.duration(s) : r.duration;
              function a(e) {
                (o = e - n),
                  window.scrollTo(0, r.easing(o, l, s, c)),
                  o < c
                    ? requestAnimationFrame(a)
                    : (window.scrollTo(0, l + s),
                      "function" == typeof r.callback && r.callback());
              }
              requestAnimationFrame(function (e) {
                (n = e), a(e);
              });
            })(r.target.hash, {
              duration: t,
              offset: n,
              callback: function () {
                var e, t;
                (e = r.target.hash),
                  (t = document.getElementById(e.substring(1))) &&
                    (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) ||
                      (t.tabIndex = -1),
                    t.focus());
              },
            });
        },
        !1
      );
    };
  },
]);
/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Typed = e())
    : (t.Typed = e());
})(this, function () {
  return (function (t) {
    function e(n) {
      if (s[n]) return s[n].exports;
      var i = (s[n] = { exports: {}, id: n, loaded: !1 });
      return t[n].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports;
    }
    var s = {};
    return (e.m = t), (e.c = s), (e.p = ""), e(0);
  })([
    function (t, e, s) {
      "use strict";
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = (function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e;
          };
        })(),
        r = s(1),
        o = s(3),
        a = (function () {
          function t(e, s) {
            n(this, t), r.initializer.load(this, s, e), this.begin();
          }
          return (
            i(t, [
              {
                key: "toggle",
                value: function () {
                  this.pause.status ? this.start() : this.stop();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.typingComplete ||
                    this.pause.status ||
                    (this.toggleBlinking(!0),
                    (this.pause.status = !0),
                    this.options.onStop(this.arrayPos, this));
                },
              },
              {
                key: "start",
                value: function () {
                  this.typingComplete ||
                    (this.pause.status &&
                      ((this.pause.status = !1),
                      this.pause.typewrite
                        ? this.typewrite(
                            this.pause.curString,
                            this.pause.curStrPos
                          )
                        : this.backspace(
                            this.pause.curString,
                            this.pause.curStrPos
                          ),
                      this.options.onStart(this.arrayPos, this)));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.reset(!1), this.options.onDestroy(this);
                },
              },
              {
                key: "reset",
                value: function () {
                  var t =
                    arguments.length <= 0 ||
                    void 0 === arguments[0] ||
                    arguments[0];
                  clearInterval(this.timeout),
                    this.replaceText(""),
                    this.cursor &&
                      this.cursor.parentNode &&
                      (this.cursor.parentNode.removeChild(this.cursor),
                      (this.cursor = null)),
                    (this.strPos = 0),
                    (this.arrayPos = 0),
                    (this.curLoop = 0),
                    t &&
                      (this.insertCursor(),
                      this.options.onReset(this),
                      this.begin());
                },
              },
              {
                key: "begin",
                value: function () {
                  var t = this;
                  this.options.onBegin(this),
                    (this.typingComplete = !1),
                    this.shuffleStringsIfNeeded(this),
                    this.insertCursor(),
                    this.bindInputFocusEvents && this.bindFocusEvents(),
                    (this.timeout = setTimeout(function () {
                      t.currentElContent && 0 !== t.currentElContent.length
                        ? t.backspace(
                            t.currentElContent,
                            t.currentElContent.length
                          )
                        : t.typewrite(
                            t.strings[t.sequence[t.arrayPos]],
                            t.strPos
                          );
                    }, this.startDelay));
                },
              },
              {
                key: "typewrite",
                value: function (t, e) {
                  var s = this;
                  this.fadeOut &&
                    this.el.classList.contains(this.fadeOutClass) &&
                    (this.el.classList.remove(this.fadeOutClass),
                    this.cursor &&
                      this.cursor.classList.remove(this.fadeOutClass));
                  var n = this.humanizer(this.typeSpeed),
                    i = 1;
                  return this.pause.status === !0
                    ? void this.setPauseStatus(t, e, !0)
                    : void (this.timeout = setTimeout(function () {
                        e = o.htmlParser.typeHtmlChars(t, e, s);
                        var n = 0,
                          r = t.substr(e);
                        if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                          var a = 1;
                          (r = /\d+/.exec(r)[0]),
                            (a += r.length),
                            (n = parseInt(r)),
                            (s.temporaryPause = !0),
                            s.options.onTypingPaused(s.arrayPos, s),
                            (t = t.substring(0, e) + t.substring(e + a)),
                            s.toggleBlinking(!0);
                        }
                        if ("`" === r.charAt(0)) {
                          for (
                            ;
                            "`" !== t.substr(e + i).charAt(0) &&
                            (i++, !(e + i > t.length));

                          );
                          var u = t.substring(0, e),
                            l = t.substring(u.length + 1, e + i),
                            c = t.substring(e + i + 1);
                          (t = u + l + c), i--;
                        }
                        s.timeout = setTimeout(function () {
                          s.toggleBlinking(!1),
                            e >= t.length
                              ? s.doneTyping(t, e)
                              : s.keepTyping(t, e, i),
                            s.temporaryPause &&
                              ((s.temporaryPause = !1),
                              s.options.onTypingResumed(s.arrayPos, s));
                        }, n);
                      }, n));
                },
              },
              {
                key: "keepTyping",
                value: function (t, e, s) {
                  0 === e &&
                    (this.toggleBlinking(!1),
                    this.options.preStringTyped(this.arrayPos, this)),
                    (e += s);
                  var n = t.substr(0, e);
                  this.replaceText(n), this.typewrite(t, e);
                },
              },
              {
                key: "doneTyping",
                value: function (t, e) {
                  var s = this;
                  this.options.onStringTyped(this.arrayPos, this),
                    this.toggleBlinking(!0),
                    (this.arrayPos === this.strings.length - 1 &&
                      (this.complete(),
                      this.loop === !1 || this.curLoop === this.loopCount)) ||
                      (this.timeout = setTimeout(function () {
                        s.backspace(t, e);
                      }, this.backDelay));
                },
              },
              {
                key: "backspace",
                value: function (t, e) {
                  var s = this;
                  if (this.pause.status === !0)
                    return void this.setPauseStatus(t, e, !0);
                  if (this.fadeOut) return this.initFadeOut();
                  this.toggleBlinking(!1);
                  var n = this.humanizer(this.backSpeed);
                  this.timeout = setTimeout(function () {
                    e = o.htmlParser.backSpaceHtmlChars(t, e, s);
                    var n = t.substr(0, e);
                    if ((s.replaceText(n), s.smartBackspace)) {
                      var i = s.strings[s.arrayPos + 1];
                      i && n === i.substr(0, e)
                        ? (s.stopNum = e)
                        : (s.stopNum = 0);
                    }
                    e > s.stopNum
                      ? (e--, s.backspace(t, e))
                      : e <= s.stopNum &&
                        (s.arrayPos++,
                        s.arrayPos === s.strings.length
                          ? ((s.arrayPos = 0),
                            s.options.onLastStringBackspaced(),
                            s.shuffleStringsIfNeeded(),
                            s.begin())
                          : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
                  }, n);
                },
              },
              {
                key: "complete",
                value: function () {
                  this.options.onComplete(this),
                    this.loop ? this.curLoop++ : (this.typingComplete = !0);
                },
              },
              {
                key: "setPauseStatus",
                value: function (t, e, s) {
                  (this.pause.typewrite = s),
                    (this.pause.curString = t),
                    (this.pause.curStrPos = e);
                },
              },
              {
                key: "toggleBlinking",
                value: function (t) {
                  this.cursor &&
                    (this.pause.status ||
                      (this.cursorBlinking !== t &&
                        ((this.cursorBlinking = t),
                        t
                          ? this.cursor.classList.add("typed-cursor--blink")
                          : this.cursor.classList.remove(
                              "typed-cursor--blink"
                            ))));
                },
              },
              {
                key: "humanizer",
                value: function (t) {
                  return Math.round((Math.random() * t) / 2) + t;
                },
              },
              {
                key: "shuffleStringsIfNeeded",
                value: function () {
                  this.shuffle &&
                    (this.sequence = this.sequence.sort(function () {
                      return Math.random() - 0.5;
                    }));
                },
              },
              {
                key: "initFadeOut",
                value: function () {
                  var t = this;
                  return (
                    (this.el.className += " " + this.fadeOutClass),
                    this.cursor &&
                      (this.cursor.className += " " + this.fadeOutClass),
                    setTimeout(function () {
                      t.arrayPos++,
                        t.replaceText(""),
                        t.strings.length > t.arrayPos
                          ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)
                          : (t.typewrite(t.strings[0], 0), (t.arrayPos = 0));
                    }, this.fadeOutDelay)
                  );
                },
              },
              {
                key: "replaceText",
                value: function (t) {
                  this.attr
                    ? this.el.setAttribute(this.attr, t)
                    : this.isInput
                    ? (this.el.value = t)
                    : "html" === this.contentType
                    ? (this.el.innerHTML = t)
                    : (this.el.textContent = t);
                },
              },
              {
                key: "bindFocusEvents",
                value: function () {
                  var t = this;
                  this.isInput &&
                    (this.el.addEventListener("focus", function (e) {
                      t.stop();
                    }),
                    this.el.addEventListener("blur", function (e) {
                      (t.el.value && 0 !== t.el.value.length) || t.start();
                    }));
                },
              },
              {
                key: "insertCursor",
                value: function () {
                  this.showCursor &&
                    (this.cursor ||
                      ((this.cursor = document.createElement("span")),
                      (this.cursor.className = "typed-cursor"),
                      (this.cursor.innerHTML = this.cursorChar),
                      this.el.parentNode &&
                        this.el.parentNode.insertBefore(
                          this.cursor,
                          this.el.nextSibling
                        )));
                },
              },
            ]),
            t
          );
        })();
      (e["default"] = a), (t.exports = e["default"]);
    },
    function (t, e, s) {
      "use strict";
      function n(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var s = arguments[e];
              for (var n in s)
                Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
            }
            return t;
          },
        o = (function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e;
          };
        })(),
        a = s(2),
        u = n(a),
        l = (function () {
          function t() {
            i(this, t);
          }
          return (
            o(t, [
              {
                key: "load",
                value: function (t, e, s) {
                  if (
                    ("string" == typeof s
                      ? (t.el = document.querySelector(s))
                      : (t.el = s),
                    (t.options = r({}, u["default"], e)),
                    (t.isInput = "input" === t.el.tagName.toLowerCase()),
                    (t.attr = t.options.attr),
                    (t.bindInputFocusEvents = t.options.bindInputFocusEvents),
                    (t.showCursor = !t.isInput && t.options.showCursor),
                    (t.cursorChar = t.options.cursorChar),
                    (t.cursorBlinking = !0),
                    (t.elContent = t.attr
                      ? t.el.getAttribute(t.attr)
                      : t.el.textContent),
                    (t.contentType = t.options.contentType),
                    (t.typeSpeed = t.options.typeSpeed),
                    (t.startDelay = t.options.startDelay),
                    (t.backSpeed = t.options.backSpeed),
                    (t.smartBackspace = t.options.smartBackspace),
                    (t.backDelay = t.options.backDelay),
                    (t.fadeOut = t.options.fadeOut),
                    (t.fadeOutClass = t.options.fadeOutClass),
                    (t.fadeOutDelay = t.options.fadeOutDelay),
                    (t.isPaused = !1),
                    (t.strings = t.options.strings.map(function (t) {
                      return t.trim();
                    })),
                    "string" == typeof t.options.stringsElement
                      ? (t.stringsElement = document.querySelector(
                          t.options.stringsElement
                        ))
                      : (t.stringsElement = t.options.stringsElement),
                    t.stringsElement)
                  ) {
                    (t.strings = []), (t.stringsElement.style.display = "none");
                    var n = Array.prototype.slice.apply(
                        t.stringsElement.children
                      ),
                      i = n.length;
                    if (i)
                      for (var o = 0; o < i; o += 1) {
                        var a = n[o];
                        t.strings.push(a.innerHTML.trim());
                      }
                  }
                  (t.strPos = 0),
                    (t.arrayPos = 0),
                    (t.stopNum = 0),
                    (t.loop = t.options.loop),
                    (t.loopCount = t.options.loopCount),
                    (t.curLoop = 0),
                    (t.shuffle = t.options.shuffle),
                    (t.sequence = []),
                    (t.pause = {
                      status: !1,
                      typewrite: !0,
                      curString: "",
                      curStrPos: 0,
                    }),
                    (t.typingComplete = !1);
                  for (var o in t.strings) t.sequence[o] = o;
                  (t.currentElContent = this.getCurrentElContent(t)),
                    (t.autoInsertCss = t.options.autoInsertCss),
                    this.appendAnimationCss(t);
                },
              },
              {
                key: "getCurrentElContent",
                value: function (t) {
                  var e = "";
                  return (e = t.attr
                    ? t.el.getAttribute(t.attr)
                    : t.isInput
                    ? t.el.value
                    : "html" === t.contentType
                    ? t.el.innerHTML
                    : t.el.textContent);
                },
              },
              {
                key: "appendAnimationCss",
                value: function (t) {
                  var e = "data-typed-js-css";
                  if (
                    t.autoInsertCss &&
                    (t.showCursor || t.fadeOut) &&
                    !document.querySelector("[" + e + "]")
                  ) {
                    var s = document.createElement("style");
                    (s.type = "text/css"), s.setAttribute(e, !0);
                    var n = "";
                    t.showCursor &&
                      (n +=
                        "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
                      t.fadeOut &&
                        (n +=
                          "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
                      0 !== s.length &&
                        ((s.innerHTML = n), document.body.appendChild(s));
                  }
                },
              },
            ]),
            t
          );
        })();
      e["default"] = l;
      var c = new l();
      e.initializer = c;
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = {
        strings: [
          "These are the default values...",
          "You know what you should do?",
          "Use your own!",
          "Have a great day!",
        ],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        smartBackspace: !0,
        shuffle: !1,
        backDelay: 700,
        fadeOut: !1,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 500,
        loop: !1,
        loopCount: 1 / 0,
        showCursor: !0,
        cursorChar: "|",
        autoInsertCss: !0,
        attr: null,
        bindInputFocusEvents: !1,
        contentType: "html",
        onBegin: function (t) {},
        onComplete: function (t) {},
        preStringTyped: function (t, e) {},
        onStringTyped: function (t, e) {},
        onLastStringBackspaced: function (t) {},
        onTypingPaused: function (t, e) {},
        onTypingResumed: function (t, e) {},
        onReset: function (t) {},
        onStop: function (t, e) {},
        onStart: function (t, e) {},
        onDestroy: function (t) {},
      };
      (e["default"] = s), (t.exports = e["default"]);
    },
    function (t, e) {
      "use strict";
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = (function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e;
          };
        })(),
        i = (function () {
          function t() {
            s(this, t);
          }
          return (
            n(t, [
              {
                key: "typeHtmlChars",
                value: function (t, e, s) {
                  if ("html" !== s.contentType) return e;
                  var n = t.substr(e).charAt(0);
                  if ("<" === n || "&" === n) {
                    var i = "";
                    for (
                      i = "<" === n ? ">" : ";";
                      t.substr(e + 1).charAt(0) !== i &&
                      (e++, !(e + 1 > t.length));

                    );
                    e++;
                  }
                  return e;
                },
              },
              {
                key: "backSpaceHtmlChars",
                value: function (t, e, s) {
                  if ("html" !== s.contentType) return e;
                  var n = t.substr(e).charAt(0);
                  if (">" === n || ";" === n) {
                    var i = "";
                    for (
                      i = ">" === n ? "<" : "&";
                      t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0));

                    );
                    e--;
                  }
                  return e;
                },
              },
            ]),
            t
          );
        })();
      e["default"] = i;
      var r = new i();
      e.htmlParser = r;
    },
  ]);
});
//# sourceMappingURL=typed.min.js.map

"object" == typeof navigator &&
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Plyr", t)
      : ((e = e || self).Plyr = t());
  })(this, function () {
    "use strict";
    function e(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function t(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function i(e, i, n) {
      return i && t(e.prototype, i), n && t(e, n), e;
    }
    function n(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    function a(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? a(Object(i), !0).forEach(function (t) {
              n(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
          : a(Object(i)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(i, t)
              );
            });
      }
      return e;
    }
    function r(e, t) {
      if (null == e) return {};
      var i,
        n,
        a = (function (e, t) {
          if (null == e) return {};
          var i,
            n,
            a = {},
            s = Object.keys(e);
          for (n = 0; n < s.length; n++)
            (i = s[n]), t.indexOf(i) >= 0 || (a[i] = e[i]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++)
          (i = s[n]),
            t.indexOf(i) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, i) &&
                (a[i] = e[i]));
      }
      return a;
    }
    function o(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var i = [],
            n = !0,
            a = !1,
            s = void 0;
          try {
            for (
              var r, o = e[Symbol.iterator]();
              !(n = (r = o.next()).done) &&
              (i.push(r.value), !t || i.length !== t);
              n = !0
            );
          } catch (e) {
            (a = !0), (s = e);
          } finally {
            try {
              n || null == o.return || o.return();
            } finally {
              if (a) throw s;
            }
          }
          return i;
        })(e, t) ||
        c(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function l(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return u(e);
        })(e) ||
        (function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        c(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function c(e, t) {
      if (e) {
        if ("string" == typeof e) return u(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === i && e.constructor && (i = e.constructor.name),
          "Map" === i || "Set" === i
            ? Array.from(e)
            : "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            ? u(e, t)
            : void 0
        );
      }
    }
    function u(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
      return n;
    }
    function d(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function h(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    function p(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function m(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? p(Object(i), !0).forEach(function (t) {
              h(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
          : p(Object(i)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(i, t)
              );
            });
      }
      return e;
    }
    var f = { addCSS: !0, thumbWidth: 15, watch: !0 };
    function g(e, t) {
      return function () {
        return Array.from(document.querySelectorAll(t)).includes(this);
      }.call(e, t);
    }
    var y = function (e) {
        return null != e ? e.constructor : null;
      },
      v = function (e, t) {
        return !!(e && t && e instanceof t);
      },
      b = function (e) {
        return null == e;
      },
      w = function (e) {
        return y(e) === Object;
      },
      k = function (e) {
        return y(e) === String;
      },
      T = function (e) {
        return Array.isArray(e);
      },
      C = function (e) {
        return v(e, NodeList);
      },
      A = k,
      S = T,
      P = C,
      E = function (e) {
        return v(e, Element);
      },
      N = function (e) {
        return v(e, Event);
      },
      M = function (e) {
        return (
          b(e) ||
          ((k(e) || T(e) || C(e)) && !e.length) ||
          (w(e) && !Object.keys(e).length)
        );
      };
    function x(e, t) {
      if (1 > t) {
        var i = (function (e) {
          var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
          return t
            ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0))
            : 0;
        })(t);
        return parseFloat(e.toFixed(i));
      }
      return Math.round(e / t) * t;
    }
    var I,
      L,
      O,
      _ = (function () {
        function e(t, i) {
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            E(t)
              ? (this.element = t)
              : A(t) && (this.element = document.querySelector(t)),
            E(this.element) &&
              M(this.element.rangeTouch) &&
              ((this.config = m({}, f, {}, i)), this.init());
        }
        return (
          (function (e, t, i) {
            t && d(e.prototype, t), i && d(e, i);
          })(
            e,
            [
              {
                key: "init",
                value: function () {
                  e.enabled &&
                    (this.config.addCSS &&
                      ((this.element.style.userSelect = "none"),
                      (this.element.style.webKitUserSelect = "none"),
                      (this.element.style.touchAction = "manipulation")),
                    this.listeners(!0),
                    (this.element.rangeTouch = this));
                },
              },
              {
                key: "destroy",
                value: function () {
                  e.enabled &&
                    (this.config.addCSS &&
                      ((this.element.style.userSelect = ""),
                      (this.element.style.webKitUserSelect = ""),
                      (this.element.style.touchAction = "")),
                    this.listeners(!1),
                    (this.element.rangeTouch = null));
                },
              },
              {
                key: "listeners",
                value: function (e) {
                  var t = this,
                    i = e ? "addEventListener" : "removeEventListener";
                  ["touchstart", "touchmove", "touchend"].forEach(function (e) {
                    t.element[i](
                      e,
                      function (e) {
                        return t.set(e);
                      },
                      !1
                    );
                  });
                },
              },
              {
                key: "get",
                value: function (t) {
                  if (!e.enabled || !N(t)) return null;
                  var i,
                    n = t.target,
                    a = t.changedTouches[0],
                    s = parseFloat(n.getAttribute("min")) || 0,
                    r = parseFloat(n.getAttribute("max")) || 100,
                    o = parseFloat(n.getAttribute("step")) || 1,
                    l = n.getBoundingClientRect(),
                    c = ((100 / l.width) * (this.config.thumbWidth / 2)) / 100;
                  return (
                    0 > (i = (100 / l.width) * (a.clientX - l.left))
                      ? (i = 0)
                      : 100 < i && (i = 100),
                    50 > i
                      ? (i -= (100 - 2 * i) * c)
                      : 50 < i && (i += 2 * (i - 50) * c),
                    s + x((i / 100) * (r - s), o)
                  );
                },
              },
              {
                key: "set",
                value: function (t) {
                  e.enabled &&
                    N(t) &&
                    !t.target.disabled &&
                    (t.preventDefault(),
                    (t.target.value = this.get(t)),
                    (function (e, t) {
                      if (e && t) {
                        var i = new Event(t, { bubbles: !0 });
                        e.dispatchEvent(i);
                      }
                    })(t.target, "touchend" === t.type ? "change" : "input"));
                },
              },
            ],
            [
              {
                key: "setup",
                value: function (t) {
                  var i =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = null;
                  if (
                    (M(t) || A(t)
                      ? (n = Array.from(
                          document.querySelectorAll(
                            A(t) ? t : 'input[type="range"]'
                          )
                        ))
                      : E(t)
                      ? (n = [t])
                      : P(t)
                      ? (n = Array.from(t))
                      : S(t) && (n = t.filter(E)),
                    M(n))
                  )
                    return null;
                  var a = m({}, f, {}, i);
                  if (A(t) && a.watch) {
                    var s = new MutationObserver(function (i) {
                      Array.from(i).forEach(function (i) {
                        Array.from(i.addedNodes).forEach(function (i) {
                          E(i) && g(i, t) && new e(i, a);
                        });
                      });
                    });
                    s.observe(document.body, { childList: !0, subtree: !0 });
                  }
                  return n.map(function (t) {
                    return new e(t, i);
                  });
                },
              },
              {
                key: "enabled",
                get: function () {
                  return "ontouchstart" in document.documentElement;
                },
              },
            ]
          ),
          e
        );
      })(),
      j = function (e) {
        return null != e ? e.constructor : null;
      },
      q = function (e, t) {
        return Boolean(e && t && e instanceof t);
      },
      D = function (e) {
        return null == e;
      },
      H = function (e) {
        return j(e) === Object;
      },
      F = function (e) {
        return j(e) === String;
      },
      R = function (e) {
        return j(e) === Function;
      },
      V = function (e) {
        return Array.isArray(e);
      },
      B = function (e) {
        return q(e, NodeList);
      },
      U = function (e) {
        return (
          D(e) ||
          ((F(e) || V(e) || B(e)) && !e.length) ||
          (H(e) && !Object.keys(e).length)
        );
      },
      W = D,
      z = H,
      K = function (e) {
        return j(e) === Number && !Number.isNaN(e);
      },
      Y = F,
      Q = function (e) {
        return j(e) === Boolean;
      },
      X = R,
      $ = V,
      J = B,
      G = function (e) {
        return q(e, Element);
      },
      Z = function (e) {
        return q(e, Event);
      },
      ee = function (e) {
        return q(e, KeyboardEvent);
      },
      te = function (e) {
        return q(e, TextTrack) || (!D(e) && F(e.kind));
      },
      ie = function (e) {
        return q(e, Promise) && R(e.then);
      },
      ne = function (e) {
        if (q(e, window.URL)) return !0;
        if (!F(e)) return !1;
        var t = e;
        (e.startsWith("http://") && e.startsWith("https://")) ||
          (t = "http://".concat(e));
        try {
          return !U(new URL(t).hostname);
        } catch (e) {
          return !1;
        }
      },
      ae = U,
      se =
        ((I = document.createElement("span")),
        (L = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        }),
        (O = Object.keys(L).find(function (e) {
          return void 0 !== I.style[e];
        })),
        !!Y(O) && L[O]);
    function re(e, t) {
      setTimeout(function () {
        try {
          (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
        } catch (e) {}
      }, t);
    }
    var oe = {
      isIE:
        /* @cc_on!@ */
        !!document.documentMode,
      isEdge: window.navigator.userAgent.includes("Edge"),
      isWebkit:
        "WebkitAppearance" in document.documentElement.style &&
        !/Edge/.test(navigator.userAgent),
      isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
      isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform),
    };
    function le(e, t) {
      return t.split(".").reduce(function (e, t) {
        return e && e[t];
      }, e);
    }
    function ce() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length,
          i = new Array(t > 1 ? t - 1 : 0),
          a = 1;
        a < t;
        a++
      )
        i[a - 1] = arguments[a];
      if (!i.length) return e;
      var s = i.shift();
      return z(s)
        ? (Object.keys(s).forEach(function (t) {
            z(s[t])
              ? (Object.keys(e).includes(t) || Object.assign(e, n({}, t, {})),
                ce(e[t], s[t]))
              : Object.assign(e, n({}, t, s[t]));
          }),
          ce.apply(void 0, [e].concat(i)))
        : e;
    }
    function ue(e, t) {
      var i = e.length ? e : [e];
      Array.from(i)
        .reverse()
        .forEach(function (e, i) {
          var n = i > 0 ? t.cloneNode(!0) : t,
            a = e.parentNode,
            s = e.nextSibling;
          n.appendChild(e), s ? a.insertBefore(n, s) : a.appendChild(n);
        });
    }
    function de(e, t) {
      G(e) &&
        !ae(t) &&
        Object.entries(t)
          .filter(function (e) {
            var t = o(e, 2)[1];
            return !W(t);
          })
          .forEach(function (t) {
            var i = o(t, 2),
              n = i[0],
              a = i[1];
            return e.setAttribute(n, a);
          });
    }
    function he(e, t, i) {
      var n = document.createElement(e);
      return z(t) && de(n, t), Y(i) && (n.innerText = i), n;
    }
    function pe(e, t, i, n) {
      G(t) && t.appendChild(he(e, i, n));
    }
    function me(e) {
      J(e) || $(e)
        ? Array.from(e).forEach(me)
        : G(e) && G(e.parentNode) && e.parentNode.removeChild(e);
    }
    function fe(e) {
      if (G(e))
        for (var t = e.childNodes.length; t > 0; )
          e.removeChild(e.lastChild), (t -= 1);
    }
    function ge(e, t) {
      return G(t) && G(t.parentNode) && G(e)
        ? (t.parentNode.replaceChild(e, t), e)
        : null;
    }
    function ye(e, t) {
      if (!Y(e) || ae(e)) return {};
      var i = {},
        n = ce({}, t);
      return (
        e.split(",").forEach(function (e) {
          var t = e.trim(),
            a = t.replace(".", ""),
            s = t.replace(/[[\]]/g, "").split("="),
            r = o(s, 1)[0],
            l = s.length > 1 ? s[1].replace(/["']/g, "") : "";
          switch (t.charAt(0)) {
            case ".":
              Y(n.class)
                ? (i.class = "".concat(n.class, " ").concat(a))
                : (i.class = a);
              break;
            case "#":
              i.id = t.replace("#", "");
              break;
            case "[":
              i[r] = l;
          }
        }),
        ce(n, i)
      );
    }
    function ve(e, t) {
      if (G(e)) {
        var i = t;
        Q(i) || (i = !e.hidden), (e.hidden = i);
      }
    }
    function be(e, t, i) {
      if (J(e))
        return Array.from(e).map(function (e) {
          return be(e, t, i);
        });
      if (G(e)) {
        var n = "toggle";
        return (
          void 0 !== i && (n = i ? "add" : "remove"),
          e.classList[n](t),
          e.classList.contains(t)
        );
      }
      return !1;
    }
    function we(e, t) {
      return G(e) && e.classList.contains(t);
    }
    function ke(e, t) {
      var i = Element.prototype;
      return (
        i.matches ||
        i.webkitMatchesSelector ||
        i.mozMatchesSelector ||
        i.msMatchesSelector ||
        function () {
          return Array.from(document.querySelectorAll(t)).includes(this);
        }
      ).call(e, t);
    }
    function Te(e) {
      return this.elements.container.querySelectorAll(e);
    }
    function Ce(e) {
      return this.elements.container.querySelector(e);
    }
    function Ae() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      G(e) &&
        (e.focus({ preventScroll: !0 }),
        t && be(e, this.config.classNames.tabFocus));
    }
    var Se,
      Pe = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora",
      },
      Ee = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check: function (e, t, i) {
          var n = oe.isIPhone && i && Ee.playsinline,
            a = Ee[e] || "html5" !== t;
          return {
            api: a,
            ui: a && Ee.rangeInput && ("video" !== e || !oe.isIPhone || n),
          };
        },
        pip: !(
          oe.isIPhone ||
          (!X(he("video").webkitSetPresentationMode) &&
            (!document.pictureInPictureEnabled ||
              he("video").disablePictureInPicture))
        ),
        airplay: X(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime: function (e) {
          if (ae(e)) return !1;
          var t = o(e.split("/"), 1)[0],
            i = e;
          if (!this.isHTML5 || t !== this.type) return !1;
          Object.keys(Pe).includes(i) && (i += '; codecs="'.concat(Pe[e], '"'));
          try {
            return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
          } catch (e) {
            return !1;
          }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput:
          ((Se = document.createElement("input")),
          (Se.type = "range"),
          "range" === Se.type),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== se,
        reducedMotion:
          "matchMedia" in window &&
          window.matchMedia("(prefers-reduced-motion)").matches,
      },
      Ne = (function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              return (e = !0), null;
            },
          });
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (e) {}
        return e;
      })();
    function Me(e, t, i) {
      var n = this,
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (e && "addEventListener" in e && !ae(t) && X(i)) {
        var o = t.split(" "),
          l = r;
        Ne && (l = { passive: s, capture: r }),
          o.forEach(function (t) {
            n &&
              n.eventListeners &&
              a &&
              n.eventListeners.push({
                element: e,
                type: t,
                callback: i,
                options: l,
              }),
              e[a ? "addEventListener" : "removeEventListener"](t, i, l);
          });
      }
    }
    function xe(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 ? arguments[2] : void 0,
        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      Me.call(this, e, t, i, !0, n, a);
    }
    function Ie(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 ? arguments[2] : void 0,
        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      Me.call(this, e, t, i, !1, n, a);
    }
    function Le(e) {
      var t = this,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = function r() {
          Ie(e, i, r, a, s);
          for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++)
            l[c] = arguments[c];
          n.apply(t, l);
        };
      Me.call(this, e, i, r, !0, a, s);
    }
    function Oe(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (G(e) && !ae(t)) {
        var a = new CustomEvent(t, {
          bubbles: i,
          detail: s(s({}, n), {}, { plyr: this }),
        });
        e.dispatchEvent(a);
      }
    }
    function _e() {
      this &&
        this.eventListeners &&
        (this.eventListeners.forEach(function (e) {
          var t = e.element,
            i = e.type,
            n = e.callback,
            a = e.options;
          t.removeEventListener(i, n, a);
        }),
        (this.eventListeners = []));
    }
    function je() {
      var e = this;
      return new Promise(function (t) {
        return e.ready
          ? setTimeout(t, 0)
          : xe.call(e, e.elements.container, "ready", t);
      }).then(function () {});
    }
    function qe(e) {
      ie(e) && e.then(null, function () {});
    }
    function De(e) {
      return (
        !!($(e) || (Y(e) && e.includes(":"))) &&
        ($(e) ? e : e.split(":")).map(Number).every(K)
      );
    }
    function He(e) {
      if (!$(e) || !e.every(K)) return null;
      var t = o(e, 2),
        i = t[0],
        n = t[1],
        a = (function e(t, i) {
          return 0 === i ? t : e(i, t % i);
        })(i, n);
      return [i / a, n / a];
    }
    function Fe(e) {
      var t = function (e) {
          return De(e) ? e.split(":").map(Number) : null;
        },
        i = t(e);
      if (
        (null === i && (i = t(this.config.ratio)),
        null === i &&
          !ae(this.embed) &&
          $(this.embed.ratio) &&
          (i = this.embed.ratio),
        null === i && this.isHTML5)
      ) {
        var n = this.media;
        i = He([n.videoWidth, n.videoHeight]);
      }
      return i;
    }
    function Re(e) {
      if (!this.isVideo) return {};
      var t = this.elements.wrapper,
        i = Fe.call(this, e),
        n = o($(i) ? i : [0, 0], 2),
        a = (100 / n[0]) * n[1];
      if (
        ((t.style.paddingBottom = "".concat(a, "%")),
        this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
      ) {
        var s =
            (100 / this.media.offsetWidth) *
            parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
          r = (s - a) / (s / 50);
        this.media.style.transform = "translateY(-".concat(r, "%)");
      } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== i);
      return { padding: a, ratio: i };
    }
    var Ve = {
      getSources: function () {
        var e = this;
        return this.isHTML5
          ? Array.from(this.media.querySelectorAll("source")).filter(function (
              t
            ) {
              var i = t.getAttribute("type");
              return !!ae(i) || Ee.mime.call(e, i);
            })
          : [];
      },
      getQualityOptions: function () {
        return this.config.quality.forced
          ? this.config.quality.options
          : Ve.getSources
              .call(this)
              .map(function (e) {
                return Number(e.getAttribute("size"));
              })
              .filter(Boolean);
      },
      setup: function () {
        if (this.isHTML5) {
          var e = this;
          (e.options.speed = e.config.speed.options),
            ae(this.config.ratio) || Re.call(e),
            Object.defineProperty(e.media, "quality", {
              get: function () {
                var t = Ve.getSources.call(e).find(function (t) {
                  return t.getAttribute("src") === e.source;
                });
                return t && Number(t.getAttribute("size"));
              },
              set: function (t) {
                if (e.quality !== t) {
                  if (e.config.quality.forced && X(e.config.quality.onChange))
                    e.config.quality.onChange(t);
                  else {
                    var i = Ve.getSources.call(e).find(function (e) {
                      return Number(e.getAttribute("size")) === t;
                    });
                    if (!i) return;
                    var n = e.media,
                      a = n.currentTime,
                      s = n.paused,
                      r = n.preload,
                      o = n.readyState,
                      l = n.playbackRate;
                    (e.media.src = i.getAttribute("src")),
                      ("none" !== r || o) &&
                        (e.once("loadedmetadata", function () {
                          (e.speed = l), (e.currentTime = a), s || qe(e.play());
                        }),
                        e.media.load());
                  }
                  Oe.call(e, e.media, "qualitychange", !1, { quality: t });
                }
              },
            });
        }
      },
      cancelRequests: function () {
        this.isHTML5 &&
          (me(Ve.getSources.call(this)),
          this.media.setAttribute("src", this.config.blankVideo),
          this.media.load(),
          this.debug.log("Cancelled network requests"));
      },
    };
    function Be(e) {
      return $(e)
        ? e.filter(function (t, i) {
            return e.indexOf(t) === i;
          })
        : e;
    }
    function Ue(e) {
      for (
        var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
      )
        i[n - 1] = arguments[n];
      return ae(e)
        ? e
        : e.toString().replace(/{(\d+)}/g, function (e, t) {
            return i[t].toString();
          });
    }
    var We = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return e.replace(
          new RegExp(
            t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
            "g"
          ),
          i.toString()
        );
      },
      ze = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.toString().replace(/\w\S*/g, function (e) {
          return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
        });
      };
    function Ke() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = e.toString();
      return (
        (t = We(t, "-", " ")),
        (t = We(t, "_", " ")),
        (t = ze(t)),
        We(t, " ", "")
      );
    }
    function Ye(e) {
      var t = document.createElement("div");
      return t.appendChild(e), t.innerHTML;
    }
    var Qe = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube",
      },
      Xe = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (ae(e) || ae(t)) return "";
        var i = le(t.i18n, e);
        if (ae(i)) return Object.keys(Qe).includes(e) ? Qe[e] : "";
        var n = { "{seektime}": t.seekTime, "{title}": t.title };
        return (
          Object.entries(n).forEach(function (e) {
            var t = o(e, 2),
              n = t[0],
              a = t[1];
            i = We(i, n, a);
          }),
          i
        );
      },
      $e = (function () {
        function t(i) {
          e(this, t),
            (this.enabled = i.config.storage.enabled),
            (this.key = i.config.storage.key);
        }
        return (
          i(
            t,
            [
              {
                key: "get",
                value: function (e) {
                  if (!t.supported || !this.enabled) return null;
                  var i = window.localStorage.getItem(this.key);
                  if (ae(i)) return null;
                  var n = JSON.parse(i);
                  return Y(e) && e.length ? n[e] : n;
                },
              },
              {
                key: "set",
                value: function (e) {
                  if (t.supported && this.enabled && z(e)) {
                    var i = this.get();
                    ae(i) && (i = {}),
                      ce(i, e),
                      window.localStorage.setItem(this.key, JSON.stringify(i));
                  }
                },
              },
            ],
            [
              {
                key: "supported",
                get: function () {
                  try {
                    if (!("localStorage" in window)) return !1;
                    return (
                      window.localStorage.setItem("___test", "___test"),
                      window.localStorage.removeItem("___test"),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                },
              },
            ]
          ),
          t
        );
      })();
    function Je(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
      return new Promise(function (i, n) {
        try {
          var a = new XMLHttpRequest();
          if (!("withCredentials" in a)) return;
          a.addEventListener("load", function () {
            if ("text" === t)
              try {
                i(JSON.parse(a.responseText));
              } catch (e) {
                i(a.responseText);
              }
            else i(a.response);
          }),
            a.addEventListener("error", function () {
              throw new Error(a.status);
            }),
            a.open("GET", e, !0),
            (a.responseType = t),
            a.send();
        } catch (e) {
          n(e);
        }
      });
    }
    function Ge(e, t) {
      if (Y(e)) {
        var i = Y(t),
          n = function () {
            return null !== document.getElementById(t);
          },
          a = function (e, t) {
            (e.innerHTML = t),
              (i && n()) ||
                document.body.insertAdjacentElement("afterbegin", e);
          };
        if (!i || !n()) {
          var s = $e.supported,
            r = document.createElement("div");
          if ((r.setAttribute("hidden", ""), i && r.setAttribute("id", t), s)) {
            var o = window.localStorage.getItem(
              "".concat("cache", "-").concat(t)
            );
            if (null !== o) {
              var l = JSON.parse(o);
              a(r, l.content);
            }
          }
          Je(e)
            .then(function (e) {
              ae(e) ||
                (s &&
                  window.localStorage.setItem(
                    "".concat("cache", "-").concat(t),
                    JSON.stringify({ content: e })
                  ),
                a(r, e));
            })
            .catch(function () {});
        }
      }
    }
    var Ze = function (e) {
        return Math.trunc((e / 60 / 60) % 60, 10);
      },
      et = function (e) {
        return Math.trunc((e / 60) % 60, 10);
      },
      tt = function (e) {
        return Math.trunc(e % 60, 10);
      };
    function it() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!K(e)) return it(void 0, t, i);
      var n = function (e) {
          return "0".concat(e).slice(-2);
        },
        a = Ze(e),
        s = et(e),
        r = tt(e);
      return (
        (a = t || a > 0 ? "".concat(a, ":") : ""),
        ""
          .concat(i && e > 0 ? "-" : "")
          .concat(a)
          .concat(n(s), ":")
          .concat(n(r))
      );
    }
    var nt = {
      getIconUrl: function () {
        var e =
          new URL(this.config.iconUrl, window.location).host !==
            window.location.host ||
          (oe.isIE && !window.svg4everybody);
        return { url: this.config.iconUrl, cors: e };
      },
      findElements: function () {
        try {
          return (
            (this.elements.controls = Ce.call(
              this,
              this.config.selectors.controls.wrapper
            )),
            (this.elements.buttons = {
              play: Te.call(this, this.config.selectors.buttons.play),
              pause: Ce.call(this, this.config.selectors.buttons.pause),
              restart: Ce.call(this, this.config.selectors.buttons.restart),
              rewind: Ce.call(this, this.config.selectors.buttons.rewind),
              fastForward: Ce.call(
                this,
                this.config.selectors.buttons.fastForward
              ),
              mute: Ce.call(this, this.config.selectors.buttons.mute),
              pip: Ce.call(this, this.config.selectors.buttons.pip),
              airplay: Ce.call(this, this.config.selectors.buttons.airplay),
              settings: Ce.call(this, this.config.selectors.buttons.settings),
              captions: Ce.call(this, this.config.selectors.buttons.captions),
              fullscreen: Ce.call(
                this,
                this.config.selectors.buttons.fullscreen
              ),
            }),
            (this.elements.progress = Ce.call(
              this,
              this.config.selectors.progress
            )),
            (this.elements.inputs = {
              seek: Ce.call(this, this.config.selectors.inputs.seek),
              volume: Ce.call(this, this.config.selectors.inputs.volume),
            }),
            (this.elements.display = {
              buffer: Ce.call(this, this.config.selectors.display.buffer),
              currentTime: Ce.call(
                this,
                this.config.selectors.display.currentTime
              ),
              duration: Ce.call(this, this.config.selectors.display.duration),
            }),
            G(this.elements.progress) &&
              (this.elements.display.seekTooltip =
                this.elements.progress.querySelector(
                  ".".concat(this.config.classNames.tooltip)
                )),
            !0
          );
        } catch (e) {
          return (
            this.debug.warn(
              "It looks like there is a problem with your custom controls HTML",
              e
            ),
            this.toggleNativeControls(!0),
            !1
          );
        }
      },
      createIcon: function (e, t) {
        var i = nt.getIconUrl.call(this),
          n = ""
            .concat(i.cors ? "" : i.url, "#")
            .concat(this.config.iconPrefix),
          a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        de(a, ce(t, { "aria-hidden": "true", focusable: "false" }));
        var s = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          r = "".concat(n, "-").concat(e);
        return (
          "href" in s &&
            s.setAttributeNS("http://www.w3.org/1999/xlink", "href", r),
          s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r),
          a.appendChild(s),
          a
        );
      },
      createLabel: function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = Xe(e, this.config),
          n = s(
            s({}, t),
            {},
            {
              class: [t.class, this.config.classNames.hidden]
                .filter(Boolean)
                .join(" "),
            }
          );
        return he("span", n, i);
      },
      createBadge: function (e) {
        if (ae(e)) return null;
        var t = he("span", { class: this.config.classNames.menu.value });
        return (
          t.appendChild(
            he("span", { class: this.config.classNames.menu.badge }, e)
          ),
          t
        );
      },
      createButton: function (e, t) {
        var i = this,
          n = ce({}, t),
          a = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t = e.toString();
            return (t = Ke(t)).charAt(0).toLowerCase() + t.slice(1);
          })(e),
          s = {
            element: "button",
            toggle: !1,
            label: null,
            icon: null,
            labelPressed: null,
            iconPressed: null,
          };
        switch (
          (["element", "icon", "label"].forEach(function (e) {
            Object.keys(n).includes(e) && ((s[e] = n[e]), delete n[e]);
          }),
          "button" !== s.element ||
            Object.keys(n).includes("type") ||
            (n.type = "button"),
          Object.keys(n).includes("class")
            ? n.class.split(" ").some(function (e) {
                return e === i.config.classNames.control;
              }) ||
              ce(n, {
                class: ""
                  .concat(n.class, " ")
                  .concat(this.config.classNames.control),
              })
            : (n.class = this.config.classNames.control),
          e)
        ) {
          case "play":
            (s.toggle = !0),
              (s.label = "play"),
              (s.labelPressed = "pause"),
              (s.icon = "play"),
              (s.iconPressed = "pause");
            break;
          case "mute":
            (s.toggle = !0),
              (s.label = "mute"),
              (s.labelPressed = "unmute"),
              (s.icon = "volume"),
              (s.iconPressed = "muted");
            break;
          case "captions":
            (s.toggle = !0),
              (s.label = "enableCaptions"),
              (s.labelPressed = "disableCaptions"),
              (s.icon = "captions-off"),
              (s.iconPressed = "captions-on");
            break;
          case "fullscreen":
            (s.toggle = !0),
              (s.label = "enterFullscreen"),
              (s.labelPressed = "exitFullscreen"),
              (s.icon = "enter-fullscreen"),
              (s.iconPressed = "exit-fullscreen");
            break;
          case "play-large":
            (n.class += " ".concat(
              this.config.classNames.control,
              "--overlaid"
            )),
              (a = "play"),
              (s.label = "play"),
              (s.icon = "play");
            break;
          default:
            ae(s.label) && (s.label = a), ae(s.icon) && (s.icon = e);
        }
        var r = he(s.element);
        return (
          s.toggle
            ? (r.appendChild(
                nt.createIcon.call(this, s.iconPressed, {
                  class: "icon--pressed",
                })
              ),
              r.appendChild(
                nt.createIcon.call(this, s.icon, { class: "icon--not-pressed" })
              ),
              r.appendChild(
                nt.createLabel.call(this, s.labelPressed, {
                  class: "label--pressed",
                })
              ),
              r.appendChild(
                nt.createLabel.call(this, s.label, {
                  class: "label--not-pressed",
                })
              ))
            : (r.appendChild(nt.createIcon.call(this, s.icon)),
              r.appendChild(nt.createLabel.call(this, s.label))),
          ce(n, ye(this.config.selectors.buttons[a], n)),
          de(r, n),
          "play" === a
            ? ($(this.elements.buttons[a]) || (this.elements.buttons[a] = []),
              this.elements.buttons[a].push(r))
            : (this.elements.buttons[a] = r),
          r
        );
      },
      createRange: function (e, t) {
        var i = he(
          "input",
          ce(
            ye(this.config.selectors.inputs[e]),
            {
              type: "range",
              min: 0,
              max: 100,
              step: 0.01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": Xe(e, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0,
            },
            t
          )
        );
        return (
          (this.elements.inputs[e] = i),
          nt.updateRangeFill.call(this, i),
          _.setup(i),
          i
        );
      },
      createProgress: function (e, t) {
        var i = he(
          "progress",
          ce(
            ye(this.config.selectors.display[e]),
            {
              min: 0,
              max: 100,
              value: 0,
              role: "progressbar",
              "aria-hidden": !0,
            },
            t
          )
        );
        if ("volume" !== e) {
          i.appendChild(he("span", null, "0"));
          var n = { played: "played", buffer: "buffered" }[e],
            a = n ? Xe(n, this.config) : "";
          i.innerText = "% ".concat(a.toLowerCase());
        }
        return (this.elements.display[e] = i), i;
      },
      createTime: function (e, t) {
        var i = ye(this.config.selectors.display[e], t),
          n = he(
            "div",
            ce(i, {
              class: ""
                .concat(i.class ? i.class : "", " ")
                .concat(this.config.classNames.display.time, " ")
                .trim(),
              "aria-label": Xe(e, this.config),
            }),
            "00:00"
          );
        return (this.elements.display[e] = n), n;
      },
      bindMenuItemShortcuts: function (e, t) {
        var i = this;
        xe.call(
          this,
          e,
          "keydown keyup",
          function (n) {
            if (
              [32, 38, 39, 40].includes(n.which) &&
              (n.preventDefault(), n.stopPropagation(), "keydown" !== n.type)
            ) {
              var a,
                s = ke(e, '[role="menuitemradio"]');
              if (!s && [32, 39].includes(n.which))
                nt.showMenuPanel.call(i, t, !0);
              else
                32 !== n.which &&
                  (40 === n.which || (s && 39 === n.which)
                    ? ((a = e.nextElementSibling),
                      G(a) || (a = e.parentNode.firstElementChild))
                    : ((a = e.previousElementSibling),
                      G(a) || (a = e.parentNode.lastElementChild)),
                  Ae.call(i, a, !0));
            }
          },
          !1
        ),
          xe.call(this, e, "keyup", function (e) {
            13 === e.which && nt.focusFirstMenuItem.call(i, null, !0);
          });
      },
      createMenuItem: function (e) {
        var t = this,
          i = e.value,
          n = e.list,
          a = e.type,
          s = e.title,
          r = e.badge,
          o = void 0 === r ? null : r,
          l = e.checked,
          c = void 0 !== l && l,
          u = ye(this.config.selectors.inputs[a]),
          d = he(
            "button",
            ce(u, {
              type: "button",
              role: "menuitemradio",
              class: ""
                .concat(this.config.classNames.control, " ")
                .concat(u.class ? u.class : "")
                .trim(),
              "aria-checked": c,
              value: i,
            })
          ),
          h = he("span");
        (h.innerHTML = s),
          G(o) && h.appendChild(o),
          d.appendChild(h),
          Object.defineProperty(d, "checked", {
            enumerable: !0,
            get: function () {
              return "true" === d.getAttribute("aria-checked");
            },
            set: function (e) {
              e &&
                Array.from(d.parentNode.children)
                  .filter(function (e) {
                    return ke(e, '[role="menuitemradio"]');
                  })
                  .forEach(function (e) {
                    return e.setAttribute("aria-checked", "false");
                  }),
                d.setAttribute("aria-checked", e ? "true" : "false");
            },
          }),
          this.listeners.bind(
            d,
            "click keyup",
            function (e) {
              if (!ee(e) || 32 === e.which) {
                switch (
                  (e.preventDefault(), e.stopPropagation(), (d.checked = !0), a)
                ) {
                  case "language":
                    t.currentTrack = Number(i);
                    break;
                  case "quality":
                    t.quality = i;
                    break;
                  case "speed":
                    t.speed = parseFloat(i);
                }
                nt.showMenuPanel.call(t, "home", ee(e));
              }
            },
            a,
            !1
          ),
          nt.bindMenuItemShortcuts.call(this, d, a),
          n.appendChild(d);
      },
      formatTime: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!K(e)) return e;
        var i = Ze(this.duration) > 0;
        return it(e, i, t);
      },
      updateTimeDisplay: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        G(e) && K(t) && (e.innerText = nt.formatTime(t, i));
      },
      updateVolume: function () {
        this.supported.ui &&
          (G(this.elements.inputs.volume) &&
            nt.setRange.call(
              this,
              this.elements.inputs.volume,
              this.muted ? 0 : this.volume
            ),
          G(this.elements.buttons.mute) &&
            (this.elements.buttons.mute.pressed =
              this.muted || 0 === this.volume));
      },
      setRange: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        G(e) && ((e.value = t), nt.updateRangeFill.call(this, e));
      },
      updateProgress: function (e) {
        var t = this;
        if (this.supported.ui && Z(e)) {
          var i,
            n,
            a = 0;
          if (e)
            switch (e.type) {
              case "timeupdate":
              case "seeking":
              case "seeked":
                (i = this.currentTime),
                  (n = this.duration),
                  (a =
                    0 === i || 0 === n || Number.isNaN(i) || Number.isNaN(n)
                      ? 0
                      : ((i / n) * 100).toFixed(2)),
                  "timeupdate" === e.type &&
                    nt.setRange.call(this, this.elements.inputs.seek, a);
                break;
              case "playing":
              case "progress":
                !(function (e, i) {
                  var n = K(i) ? i : 0,
                    a = G(e) ? e : t.elements.display.buffer;
                  if (G(a)) {
                    a.value = n;
                    var s = a.getElementsByTagName("span")[0];
                    G(s) && (s.childNodes[0].nodeValue = n);
                  }
                })(this.elements.display.buffer, 100 * this.buffered);
            }
        }
      },
      updateRangeFill: function (e) {
        var t = Z(e) ? e.target : e;
        if (G(t) && "range" === t.getAttribute("type")) {
          if (ke(t, this.config.selectors.inputs.seek)) {
            t.setAttribute("aria-valuenow", this.currentTime);
            var i = nt.formatTime(this.currentTime),
              n = nt.formatTime(this.duration),
              a = Xe("seekLabel", this.config);
            t.setAttribute(
              "aria-valuetext",
              a.replace("{currentTime}", i).replace("{duration}", n)
            );
          } else if (ke(t, this.config.selectors.inputs.volume)) {
            var s = 100 * t.value;
            t.setAttribute("aria-valuenow", s),
              t.setAttribute("aria-valuetext", "".concat(s.toFixed(1), "%"));
          } else t.setAttribute("aria-valuenow", t.value);
          oe.isWebkit &&
            t.style.setProperty(
              "--value",
              "".concat((t.value / t.max) * 100, "%")
            );
        }
      },
      updateSeekTooltip: function (e) {
        var t = this;
        if (
          this.config.tooltips.seek &&
          G(this.elements.inputs.seek) &&
          G(this.elements.display.seekTooltip) &&
          0 !== this.duration
        ) {
          var i = "".concat(this.config.classNames.tooltip, "--visible"),
            n = function (e) {
              return be(t.elements.display.seekTooltip, i, e);
            };
          if (this.touch) n(!1);
          else {
            var a = 0,
              s = this.elements.progress.getBoundingClientRect();
            if (Z(e)) a = (100 / s.width) * (e.pageX - s.left);
            else {
              if (!we(this.elements.display.seekTooltip, i)) return;
              a = parseFloat(this.elements.display.seekTooltip.style.left, 10);
            }
            a < 0 ? (a = 0) : a > 100 && (a = 100),
              nt.updateTimeDisplay.call(
                this,
                this.elements.display.seekTooltip,
                (this.duration / 100) * a
              ),
              (this.elements.display.seekTooltip.style.left = "".concat(
                a,
                "%"
              )),
              Z(e) &&
                ["mouseenter", "mouseleave"].includes(e.type) &&
                n("mouseenter" === e.type);
          }
        }
      },
      timeUpdate: function (e) {
        var t = !G(this.elements.display.duration) && this.config.invertTime;
        nt.updateTimeDisplay.call(
          this,
          this.elements.display.currentTime,
          t ? this.duration - this.currentTime : this.currentTime,
          t
        ),
          (e && "timeupdate" === e.type && this.media.seeking) ||
            nt.updateProgress.call(this, e);
      },
      durationUpdate: function () {
        if (
          this.supported.ui &&
          (this.config.invertTime || !this.currentTime)
        ) {
          if (this.duration >= Math.pow(2, 32))
            return (
              ve(this.elements.display.currentTime, !0),
              void ve(this.elements.progress, !0)
            );
          G(this.elements.inputs.seek) &&
            this.elements.inputs.seek.setAttribute(
              "aria-valuemax",
              this.duration
            );
          var e = G(this.elements.display.duration);
          !e &&
            this.config.displayDuration &&
            this.paused &&
            nt.updateTimeDisplay.call(
              this,
              this.elements.display.currentTime,
              this.duration
            ),
            e &&
              nt.updateTimeDisplay.call(
                this,
                this.elements.display.duration,
                this.duration
              ),
            nt.updateSeekTooltip.call(this);
        }
      },
      toggleMenuButton: function (e, t) {
        ve(this.elements.settings.buttons[e], !t);
      },
      updateSetting: function (e, t, i) {
        var n = this.elements.settings.panels[e],
          a = null,
          s = t;
        if ("captions" === e) a = this.currentTrack;
        else {
          if (
            ((a = ae(i) ? this[e] : i),
            ae(a) && (a = this.config[e].default),
            !ae(this.options[e]) && !this.options[e].includes(a))
          )
            return void this.debug.warn(
              "Unsupported value of '".concat(a, "' for ").concat(e)
            );
          if (!this.config[e].options.includes(a))
            return void this.debug.warn(
              "Disabled value of '".concat(a, "' for ").concat(e)
            );
        }
        if ((G(s) || (s = n && n.querySelector('[role="menu"]')), G(s))) {
          this.elements.settings.buttons[e].querySelector(
            ".".concat(this.config.classNames.menu.value)
          ).innerHTML = nt.getLabel.call(this, e, a);
          var r = s && s.querySelector('[value="'.concat(a, '"]'));
          G(r) && (r.checked = !0);
        }
      },
      getLabel: function (e, t) {
        switch (e) {
          case "speed":
            return 1 === t
              ? Xe("normal", this.config)
              : "".concat(t, "&times;");
          case "quality":
            if (K(t)) {
              var i = Xe("qualityLabel.".concat(t), this.config);
              return i.length ? i : "".concat(t, "p");
            }
            return ze(t);
          case "captions":
            return rt.getLabel.call(this);
          default:
            return null;
        }
      },
      setQualityMenu: function (e) {
        var t = this;
        if (G(this.elements.settings.panels.quality)) {
          var i =
            this.elements.settings.panels.quality.querySelector(
              '[role="menu"]'
            );
          $(e) &&
            (this.options.quality = Be(e).filter(function (e) {
              return t.config.quality.options.includes(e);
            }));
          var n = !ae(this.options.quality) && this.options.quality.length > 1;
          if (
            (nt.toggleMenuButton.call(this, "quality", n),
            fe(i),
            nt.checkMenu.call(this),
            n)
          ) {
            var a = function (e) {
              var i = Xe("qualityBadge.".concat(e), t.config);
              return i.length ? nt.createBadge.call(t, i) : null;
            };
            this.options.quality
              .sort(function (e, i) {
                var n = t.config.quality.options;
                return n.indexOf(e) > n.indexOf(i) ? 1 : -1;
              })
              .forEach(function (e) {
                nt.createMenuItem.call(t, {
                  value: e,
                  list: i,
                  type: "quality",
                  title: nt.getLabel.call(t, "quality", e),
                  badge: a(e),
                });
              }),
              nt.updateSetting.call(this, "quality", i);
          }
        }
      },
      setCaptionsMenu: function () {
        var e = this;
        if (G(this.elements.settings.panels.captions)) {
          var t =
              this.elements.settings.panels.captions.querySelector(
                '[role="menu"]'
              ),
            i = rt.getTracks.call(this),
            n = Boolean(i.length);
          if (
            (nt.toggleMenuButton.call(this, "captions", n),
            fe(t),
            nt.checkMenu.call(this),
            n)
          ) {
            var a = i.map(function (i, n) {
              return {
                value: n,
                checked: e.captions.toggled && e.currentTrack === n,
                title: rt.getLabel.call(e, i),
                badge:
                  i.language &&
                  nt.createBadge.call(e, i.language.toUpperCase()),
                list: t,
                type: "language",
              };
            });
            a.unshift({
              value: -1,
              checked: !this.captions.toggled,
              title: Xe("disabled", this.config),
              list: t,
              type: "language",
            }),
              a.forEach(nt.createMenuItem.bind(this)),
              nt.updateSetting.call(this, "captions", t);
          }
        }
      },
      setSpeedMenu: function () {
        var e = this;
        if (G(this.elements.settings.panels.speed)) {
          var t =
            this.elements.settings.panels.speed.querySelector('[role="menu"]');
          this.options.speed = this.options.speed.filter(function (t) {
            return t >= e.minimumSpeed && t <= e.maximumSpeed;
          });
          var i = !ae(this.options.speed) && this.options.speed.length > 1;
          nt.toggleMenuButton.call(this, "speed", i),
            fe(t),
            nt.checkMenu.call(this),
            i &&
              (this.options.speed.forEach(function (i) {
                nt.createMenuItem.call(e, {
                  value: i,
                  list: t,
                  type: "speed",
                  title: nt.getLabel.call(e, "speed", i),
                });
              }),
              nt.updateSetting.call(this, "speed", t));
        }
      },
      checkMenu: function () {
        var e = this.elements.settings.buttons,
          t =
            !ae(e) &&
            Object.values(e).some(function (e) {
              return !e.hidden;
            });
        ve(this.elements.settings.menu, !t);
      },
      focusFirstMenuItem: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.elements.settings.popup.hidden) {
          var i = e;
          G(i) ||
            (i = Object.values(this.elements.settings.panels).find(function (
              e
            ) {
              return !e.hidden;
            }));
          var n = i.querySelector('[role^="menuitem"]');
          Ae.call(this, n, t);
        }
      },
      toggleMenu: function (e) {
        var t = this.elements.settings.popup,
          i = this.elements.buttons.settings;
        if (G(t) && G(i)) {
          var n = t.hidden,
            a = n;
          if (Q(e)) a = e;
          else if (ee(e) && 27 === e.which) a = !1;
          else if (Z(e)) {
            var s = X(e.composedPath) ? e.composedPath()[0] : e.target,
              r = t.contains(s);
            if (r || (!r && e.target !== i && a)) return;
          }
          i.setAttribute("aria-expanded", a),
            ve(t, !a),
            be(this.elements.container, this.config.classNames.menu.open, a),
            a && ee(e)
              ? nt.focusFirstMenuItem.call(this, null, !0)
              : a || n || Ae.call(this, i, ee(e));
        }
      },
      getMenuSize: function (e) {
        var t = e.cloneNode(!0);
        (t.style.position = "absolute"),
          (t.style.opacity = 0),
          t.removeAttribute("hidden"),
          e.parentNode.appendChild(t);
        var i = t.scrollWidth,
          n = t.scrollHeight;
        return me(t), { width: i, height: n };
      },
      showMenuPanel: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = this.elements.container.querySelector(
            "#plyr-settings-".concat(this.id, "-").concat(t)
          );
        if (G(n)) {
          var a = n.parentNode,
            s = Array.from(a.children).find(function (e) {
              return !e.hidden;
            });
          if (Ee.transitions && !Ee.reducedMotion) {
            (a.style.width = "".concat(s.scrollWidth, "px")),
              (a.style.height = "".concat(s.scrollHeight, "px"));
            var r = nt.getMenuSize.call(this, n),
              o = function t(i) {
                i.target === a &&
                  ["width", "height"].includes(i.propertyName) &&
                  ((a.style.width = ""),
                  (a.style.height = ""),
                  Ie.call(e, a, se, t));
              };
            xe.call(this, a, se, o),
              (a.style.width = "".concat(r.width, "px")),
              (a.style.height = "".concat(r.height, "px"));
          }
          ve(s, !0), ve(n, !1), nt.focusFirstMenuItem.call(this, n, i);
        }
      },
      setDownloadUrl: function () {
        var e = this.elements.buttons.download;
        G(e) && e.setAttribute("href", this.download);
      },
      create: function (e) {
        var t = this,
          i = nt.bindMenuItemShortcuts,
          n = nt.createButton,
          a = nt.createProgress,
          s = nt.createRange,
          r = nt.createTime,
          o = nt.setQualityMenu,
          l = nt.setSpeedMenu,
          c = nt.showMenuPanel;
        (this.elements.controls = null),
          $(this.config.controls) &&
            this.config.controls.includes("play-large") &&
            this.elements.container.appendChild(n.call(this, "play-large"));
        var u = he("div", ye(this.config.selectors.controls.wrapper));
        this.elements.controls = u;
        var d = { class: "plyr__controls__item" };
        return (
          Be($(this.config.controls) ? this.config.controls : []).forEach(
            function (o) {
              if (
                ("restart" === o && u.appendChild(n.call(t, "restart", d)),
                "rewind" === o && u.appendChild(n.call(t, "rewind", d)),
                "play" === o && u.appendChild(n.call(t, "play", d)),
                "fast-forward" === o &&
                  u.appendChild(n.call(t, "fast-forward", d)),
                "progress" === o)
              ) {
                var l = he("div", {
                    class: "".concat(d.class, " plyr__progress__container"),
                  }),
                  h = he("div", ye(t.config.selectors.progress));
                if (
                  (h.appendChild(
                    s.call(t, "seek", { id: "plyr-seek-".concat(e.id) })
                  ),
                  h.appendChild(a.call(t, "buffer")),
                  t.config.tooltips.seek)
                ) {
                  var p = he(
                    "span",
                    { class: t.config.classNames.tooltip },
                    "00:00"
                  );
                  h.appendChild(p), (t.elements.display.seekTooltip = p);
                }
                (t.elements.progress = h),
                  l.appendChild(t.elements.progress),
                  u.appendChild(l);
              }
              if (
                ("current-time" === o &&
                  u.appendChild(r.call(t, "currentTime", d)),
                "duration" === o && u.appendChild(r.call(t, "duration", d)),
                "mute" === o || "volume" === o)
              ) {
                var m = t.elements.volume;
                if (
                  ((G(m) && u.contains(m)) ||
                    ((m = he(
                      "div",
                      ce({}, d, {
                        class: "".concat(d.class, " plyr__volume").trim(),
                      })
                    )),
                    (t.elements.volume = m),
                    u.appendChild(m)),
                  "mute" === o && m.appendChild(n.call(t, "mute")),
                  "volume" === o && !oe.isIos)
                ) {
                  var f = { max: 1, step: 0.05, value: t.config.volume };
                  m.appendChild(
                    s.call(
                      t,
                      "volume",
                      ce(f, { id: "plyr-volume-".concat(e.id) })
                    )
                  );
                }
              }
              if (
                ("captions" === o && u.appendChild(n.call(t, "captions", d)),
                "settings" === o && !ae(t.config.settings))
              ) {
                var g = he(
                  "div",
                  ce({}, d, {
                    class: "".concat(d.class, " plyr__menu").trim(),
                    hidden: "",
                  })
                );
                g.appendChild(
                  n.call(t, "settings", {
                    "aria-haspopup": !0,
                    "aria-controls": "plyr-settings-".concat(e.id),
                    "aria-expanded": !1,
                  })
                );
                var y = he("div", {
                    class: "plyr__menu__container",
                    id: "plyr-settings-".concat(e.id),
                    hidden: "",
                  }),
                  v = he("div"),
                  b = he("div", { id: "plyr-settings-".concat(e.id, "-home") }),
                  w = he("div", { role: "menu" });
                b.appendChild(w),
                  v.appendChild(b),
                  (t.elements.settings.panels.home = b),
                  t.config.settings.forEach(function (n) {
                    var a = he(
                      "button",
                      ce(ye(t.config.selectors.buttons.settings), {
                        type: "button",
                        class: ""
                          .concat(t.config.classNames.control, " ")
                          .concat(t.config.classNames.control, "--forward"),
                        role: "menuitem",
                        "aria-haspopup": !0,
                        hidden: "",
                      })
                    );
                    i.call(t, a, n),
                      xe.call(t, a, "click", function () {
                        c.call(t, n, !1);
                      });
                    var s = he("span", null, Xe(n, t.config)),
                      r = he("span", { class: t.config.classNames.menu.value });
                    (r.innerHTML = e[n]),
                      s.appendChild(r),
                      a.appendChild(s),
                      w.appendChild(a);
                    var o = he("div", {
                        id: "plyr-settings-".concat(e.id, "-").concat(n),
                        hidden: "",
                      }),
                      l = he("button", {
                        type: "button",
                        class: ""
                          .concat(t.config.classNames.control, " ")
                          .concat(t.config.classNames.control, "--back"),
                      });
                    l.appendChild(
                      he("span", { "aria-hidden": !0 }, Xe(n, t.config))
                    ),
                      l.appendChild(
                        he(
                          "span",
                          { class: t.config.classNames.hidden },
                          Xe("menuBack", t.config)
                        )
                      ),
                      xe.call(
                        t,
                        o,
                        "keydown",
                        function (e) {
                          37 === e.which &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            c.call(t, "home", !0));
                        },
                        !1
                      ),
                      xe.call(t, l, "click", function () {
                        c.call(t, "home", !1);
                      }),
                      o.appendChild(l),
                      o.appendChild(he("div", { role: "menu" })),
                      v.appendChild(o),
                      (t.elements.settings.buttons[n] = a),
                      (t.elements.settings.panels[n] = o);
                  }),
                  y.appendChild(v),
                  g.appendChild(y),
                  u.appendChild(g),
                  (t.elements.settings.popup = y),
                  (t.elements.settings.menu = g);
              }
              if (
                ("pip" === o && Ee.pip && u.appendChild(n.call(t, "pip", d)),
                "airplay" === o &&
                  Ee.airplay &&
                  u.appendChild(n.call(t, "airplay", d)),
                "download" === o)
              ) {
                var k = ce({}, d, {
                  element: "a",
                  href: t.download,
                  target: "_blank",
                });
                t.isHTML5 && (k.download = "");
                var T = t.config.urls.download;
                !ne(T) &&
                  t.isEmbed &&
                  ce(k, {
                    icon: "logo-".concat(t.provider),
                    label: t.provider,
                  }),
                  u.appendChild(n.call(t, "download", k));
              }
              "fullscreen" === o && u.appendChild(n.call(t, "fullscreen", d));
            }
          ),
          this.isHTML5 && o.call(this, Ve.getQualityOptions.call(this)),
          l.call(this),
          u
        );
      },
      inject: function () {
        var e = this;
        if (this.config.loadSprite) {
          var t = nt.getIconUrl.call(this);
          t.cors && Ge(t.url, "sprite-plyr");
        }
        this.id = Math.floor(1e4 * Math.random());
        var i = null;
        this.elements.controls = null;
        var n = {
            id: this.id,
            seektime: this.config.seekTime,
            title: this.config.title,
          },
          a = !0;
        X(this.config.controls) &&
          (this.config.controls = this.config.controls.call(this, n)),
          this.config.controls || (this.config.controls = []),
          G(this.config.controls) || Y(this.config.controls)
            ? (i = this.config.controls)
            : ((i = nt.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: rt.getLabel.call(this),
              })),
              (a = !1));
        var s, r;
        if (
          (a &&
            Y(this.config.controls) &&
            ((s = i),
            Object.entries(n).forEach(function (e) {
              var t = o(e, 2),
                i = t[0],
                n = t[1];
              s = We(s, "{".concat(i, "}"), n);
            }),
            (i = s)),
          Y(this.config.selectors.controls.container) &&
            (r = document.querySelector(
              this.config.selectors.controls.container
            )),
          G(r) || (r = this.elements.container),
          r[G(i) ? "insertAdjacentElement" : "insertAdjacentHTML"](
            "afterbegin",
            i
          ),
          G(this.elements.controls) || nt.findElements.call(this),
          !ae(this.elements.buttons))
        ) {
          var l = function (t) {
            var i = e.config.classNames.controlPressed;
            Object.defineProperty(t, "pressed", {
              enumerable: !0,
              get: function () {
                return we(t, i);
              },
              set: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                be(t, i, e);
              },
            });
          };
          Object.values(this.elements.buttons)
            .filter(Boolean)
            .forEach(function (e) {
              $(e) || J(e) ? Array.from(e).filter(Boolean).forEach(l) : l(e);
            });
        }
        if ((oe.isEdge && re(r), this.config.tooltips.controls)) {
          var c = this.config,
            u = c.classNames,
            d = c.selectors,
            h = ""
              .concat(d.controls.wrapper, " ")
              .concat(d.labels, " .")
              .concat(u.hidden),
            p = Te.call(this, h);
          Array.from(p).forEach(function (t) {
            be(t, e.config.classNames.hidden, !1),
              be(t, e.config.classNames.tooltip, !0);
          });
        }
      },
    };
    function at(e) {
      var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        i = e;
      if (t) {
        var n = document.createElement("a");
        (n.href = i), (i = n.href);
      }
      try {
        return new URL(i);
      } catch (e) {
        return null;
      }
    }
    function st(e) {
      var t = new URLSearchParams();
      return (
        z(e) &&
          Object.entries(e).forEach(function (e) {
            var i = o(e, 2),
              n = i[0],
              a = i[1];
            t.set(n, a);
          }),
        t
      );
    }
    var rt = {
        setup: function () {
          if (this.supported.ui)
            if (
              !this.isVideo ||
              this.isYouTube ||
              (this.isHTML5 && !Ee.textTracks)
            )
              $(this.config.controls) &&
                this.config.controls.includes("settings") &&
                this.config.settings.includes("captions") &&
                nt.setCaptionsMenu.call(this);
            else {
              if (
                (G(this.elements.captions) ||
                  ((this.elements.captions = he(
                    "div",
                    ye(this.config.selectors.captions)
                  )),
                  (function (e, t) {
                    G(e) && G(t) && t.parentNode.insertBefore(e, t.nextSibling);
                  })(this.elements.captions, this.elements.wrapper)),
                oe.isIE && window.URL)
              ) {
                var e = this.media.querySelectorAll("track");
                Array.from(e).forEach(function (e) {
                  var t = e.getAttribute("src"),
                    i = at(t);
                  null !== i &&
                    i.hostname !== window.location.href.hostname &&
                    ["http:", "https:"].includes(i.protocol) &&
                    Je(t, "blob")
                      .then(function (t) {
                        e.setAttribute("src", window.URL.createObjectURL(t));
                      })
                      .catch(function () {
                        me(e);
                      });
                });
              }
              var t = Be(
                  (
                    navigator.languages || [
                      navigator.language || navigator.userLanguage || "en",
                    ]
                  ).map(function (e) {
                    return e.split("-")[0];
                  })
                ),
                i = (
                  this.storage.get("language") ||
                  this.config.captions.language ||
                  "auto"
                ).toLowerCase();
              if ("auto" === i) i = o(t, 1)[0];
              var n = this.storage.get("captions");
              if (
                (Q(n) || (n = this.config.captions.active),
                Object.assign(this.captions, {
                  toggled: !1,
                  active: n,
                  language: i,
                  languages: t,
                }),
                this.isHTML5)
              ) {
                var a = this.config.captions.update
                  ? "addtrack removetrack"
                  : "removetrack";
                xe.call(this, this.media.textTracks, a, rt.update.bind(this));
              }
              setTimeout(rt.update.bind(this), 0);
            }
        },
        update: function () {
          var e = this,
            t = rt.getTracks.call(this, !0),
            i = this.captions,
            n = i.active,
            a = i.language,
            s = i.meta,
            r = i.currentTrackNode,
            o = Boolean(
              t.find(function (e) {
                return e.language === a;
              })
            );
          this.isHTML5 &&
            this.isVideo &&
            t
              .filter(function (e) {
                return !s.get(e);
              })
              .forEach(function (t) {
                e.debug.log("Track added", t),
                  s.set(t, { default: "showing" === t.mode }),
                  "showing" === t.mode && (t.mode = "hidden"),
                  xe.call(e, t, "cuechange", function () {
                    return rt.updateCues.call(e);
                  });
              }),
            ((o && this.language !== a) || !t.includes(r)) &&
              (rt.setLanguage.call(this, a), rt.toggle.call(this, n && o)),
            be(
              this.elements.container,
              this.config.classNames.captions.enabled,
              !ae(t)
            ),
            $(this.config.controls) &&
              this.config.controls.includes("settings") &&
              this.config.settings.includes("captions") &&
              nt.setCaptionsMenu.call(this);
        },
        toggle: function (e) {
          var t = this,
            i =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
          if (this.supported.ui) {
            var n = this.captions.toggled,
              a = this.config.classNames.captions.active,
              s = W(e) ? !n : e;
            if (s !== n) {
              if (
                (i ||
                  ((this.captions.active = s),
                  this.storage.set({ captions: s })),
                !this.language && s && !i)
              ) {
                var r = rt.getTracks.call(this),
                  o = rt.findTrack.call(
                    this,
                    [this.captions.language].concat(l(this.captions.languages)),
                    !0
                  );
                return (
                  (this.captions.language = o.language),
                  void rt.set.call(this, r.indexOf(o))
                );
              }
              this.elements.buttons.captions &&
                (this.elements.buttons.captions.pressed = s),
                be(this.elements.container, a, s),
                (this.captions.toggled = s),
                nt.updateSetting.call(this, "captions"),
                Oe.call(
                  this,
                  this.media,
                  s ? "captionsenabled" : "captionsdisabled"
                );
            }
            setTimeout(function () {
              s &&
                t.captions.toggled &&
                (t.captions.currentTrackNode.mode = "hidden");
            });
          }
        },
        set: function (e) {
          var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1],
            i = rt.getTracks.call(this);
          if (-1 !== e)
            if (K(e))
              if (e in i) {
                if (this.captions.currentTrack !== e) {
                  this.captions.currentTrack = e;
                  var n = i[e],
                    a = n || {},
                    s = a.language;
                  (this.captions.currentTrackNode = n),
                    nt.updateSetting.call(this, "captions"),
                    t ||
                      ((this.captions.language = s),
                      this.storage.set({ language: s })),
                    this.isVimeo && this.embed.enableTextTrack(s),
                    Oe.call(this, this.media, "languagechange");
                }
                rt.toggle.call(this, !0, t),
                  this.isHTML5 && this.isVideo && rt.updateCues.call(this);
              } else this.debug.warn("Track not found", e);
            else this.debug.warn("Invalid caption argument", e);
          else rt.toggle.call(this, !1, t);
        },
        setLanguage: function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (Y(e)) {
            var i = e.toLowerCase();
            this.captions.language = i;
            var n = rt.getTracks.call(this),
              a = rt.findTrack.call(this, [i]);
            rt.set.call(this, n.indexOf(a), t);
          } else this.debug.warn("Invalid language argument", e);
        },
        getTracks: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = Array.from((this.media || {}).textTracks || []);
          return i
            .filter(function (i) {
              return !e.isHTML5 || t || e.captions.meta.has(i);
            })
            .filter(function (e) {
              return ["captions", "subtitles"].includes(e.kind);
            });
        },
        findTrack: function (e) {
          var t,
            i = this,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = rt.getTracks.call(this),
            s = function (e) {
              return Number((i.captions.meta.get(e) || {}).default);
            },
            r = Array.from(a).sort(function (e, t) {
              return s(t) - s(e);
            });
          return (
            e.every(function (e) {
              return !(t = r.find(function (t) {
                return t.language === e;
              }));
            }),
            t || (n ? r[0] : void 0)
          );
        },
        getCurrentTrack: function () {
          return rt.getTracks.call(this)[this.currentTrack];
        },
        getLabel: function (e) {
          var t = e;
          return (
            !te(t) &&
              Ee.textTracks &&
              this.captions.toggled &&
              (t = rt.getCurrentTrack.call(this)),
            te(t)
              ? ae(t.label)
                ? ae(t.language)
                  ? Xe("enabled", this.config)
                  : e.language.toUpperCase()
                : t.label
              : Xe("disabled", this.config)
          );
        },
        updateCues: function (e) {
          if (this.supported.ui)
            if (G(this.elements.captions))
              if (W(e) || Array.isArray(e)) {
                var t = e;
                if (!t) {
                  var i = rt.getCurrentTrack.call(this);
                  t = Array.from((i || {}).activeCues || [])
                    .map(function (e) {
                      return e.getCueAsHTML();
                    })
                    .map(Ye);
                }
                var n = t
                  .map(function (e) {
                    return e.trim();
                  })
                  .join("\n");
                if (n !== this.elements.captions.innerHTML) {
                  fe(this.elements.captions);
                  var a = he("span", ye(this.config.selectors.caption));
                  (a.innerHTML = n),
                    this.elements.captions.appendChild(a),
                    Oe.call(this, this.media, "cuechange");
                }
              } else this.debug.warn("updateCues: Invalid input", e);
            else this.debug.warn("No captions element to render to");
        },
      },
      ot = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.6.2/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
          default: 576,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
          forced: !1,
          onChange: null,
        },
        loop: { active: !1 },
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
        keyboard: { focused: !0, global: !1 },
        tooltips: { controls: !1, seek: !0 },
        captions: { active: !1, language: "auto", update: !1 },
        fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
        storage: { enabled: !0, key: "plyr" },
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "airplay",
          "fullscreen",
        ],
        settings: ["captions", "quality", "speed"],
        i18n: {
          restart: "Restart",
          rewind: "Rewind {seektime}s",
          play: "Play",
          pause: "Pause",
          fastForward: "Forward {seektime}s",
          seek: "Seek",
          seekLabel: "{currentTime} of {duration}",
          played: "Played",
          buffered: "Buffered",
          currentTime: "Current time",
          duration: "Duration",
          volume: "Volume",
          mute: "Mute",
          unmute: "Unmute",
          enableCaptions: "Enable captions",
          disableCaptions: "Disable captions",
          download: "Download",
          enterFullscreen: "Enter fullscreen",
          exitFullscreen: "Exit fullscreen",
          frameTitle: "Player for {title}",
          captions: "Captions",
          settings: "Settings",
          pip: "PIP",
          menuBack: "Go back to previous menu",
          speed: "Speed",
          normal: "Normal",
          quality: "Quality",
          loop: "Loop",
          start: "Start",
          end: "End",
          all: "All",
          reset: "Reset",
          disabled: "Disabled",
          enabled: "Enabled",
          advertisement: "Ad",
          qualityBadge: {
            2160: "4K",
            1440: "HD",
            1080: "HD",
            720: "HD",
            576: "SD",
            480: "SD",
          },
        },
        urls: {
          download: null,
          vimeo: {
            sdk: "https://player.vimeo.com/api/player.js",
            iframe: "https://player.vimeo.com/video/{0}?{1}",
            api: "https://vimeo.com/api/v2/video/{0}.json",
          },
          youtube: {
            sdk: "https://www.youtube.com/iframe_api",
            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
          },
          googleIMA: {
            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
          },
        },
        listeners: {
          seek: null,
          play: null,
          pause: null,
          restart: null,
          rewind: null,
          fastForward: null,
          mute: null,
          volume: null,
          captions: null,
          download: null,
          fullscreen: null,
          pip: null,
          airplay: null,
          speed: null,
          quality: null,
          loop: null,
          language: null,
        },
        events: [
          "ended",
          "progress",
          "stalled",
          "playing",
          "waiting",
          "canplay",
          "canplaythrough",
          "loadstart",
          "loadeddata",
          "loadedmetadata",
          "timeupdate",
          "volumechange",
          "play",
          "pause",
          "error",
          "seeking",
          "seeked",
          "emptied",
          "ratechange",
          "cuechange",
          "download",
          "enterfullscreen",
          "exitfullscreen",
          "captionsenabled",
          "captionsdisabled",
          "languagechange",
          "controlshidden",
          "controlsshown",
          "ready",
          "statechange",
          "qualitychange",
          "adsloaded",
          "adscontentpause",
          "adscontentresume",
          "adstarted",
          "adsmidpoint",
          "adscomplete",
          "adsallcomplete",
          "adsimpression",
          "adsclick",
        ],
        selectors: {
          editable: "input, textarea, select, [contenteditable]",
          container: ".plyr",
          controls: { container: null, wrapper: ".plyr__controls" },
          labels: "[data-plyr]",
          buttons: {
            play: '[data-plyr="play"]',
            pause: '[data-plyr="pause"]',
            restart: '[data-plyr="restart"]',
            rewind: '[data-plyr="rewind"]',
            fastForward: '[data-plyr="fast-forward"]',
            mute: '[data-plyr="mute"]',
            captions: '[data-plyr="captions"]',
            download: '[data-plyr="download"]',
            fullscreen: '[data-plyr="fullscreen"]',
            pip: '[data-plyr="pip"]',
            airplay: '[data-plyr="airplay"]',
            settings: '[data-plyr="settings"]',
            loop: '[data-plyr="loop"]',
          },
          inputs: {
            seek: '[data-plyr="seek"]',
            volume: '[data-plyr="volume"]',
            speed: '[data-plyr="speed"]',
            language: '[data-plyr="language"]',
            quality: '[data-plyr="quality"]',
          },
          display: {
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration",
            buffer: ".plyr__progress__buffer",
            loop: ".plyr__progress__loop",
            volume: ".plyr__volume--display",
          },
          progress: ".plyr__progress",
          captions: ".plyr__captions",
          caption: ".plyr__caption",
        },
        classNames: {
          type: "plyr--{0}",
          provider: "plyr--{0}",
          video: "plyr__video-wrapper",
          embed: "plyr__video-embed",
          videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
          embedContainer: "plyr__video-embed__container",
          poster: "plyr__poster",
          posterEnabled: "plyr__poster-enabled",
          ads: "plyr__ads",
          control: "plyr__control",
          controlPressed: "plyr__control--pressed",
          playing: "plyr--playing",
          paused: "plyr--paused",
          stopped: "plyr--stopped",
          loading: "plyr--loading",
          hover: "plyr--hover",
          tooltip: "plyr__tooltip",
          cues: "plyr__cues",
          hidden: "plyr__sr-only",
          hideControls: "plyr--hide-controls",
          isIos: "plyr--is-ios",
          isTouch: "plyr--is-touch",
          uiSupported: "plyr--full-ui",
          noTransition: "plyr--no-transition",
          display: { time: "plyr__time" },
          menu: {
            value: "plyr__menu__value",
            badge: "plyr__badge",
            open: "plyr--menu-open",
          },
          captions: {
            enabled: "plyr--captions-enabled",
            active: "plyr--captions-active",
          },
          fullscreen: {
            enabled: "plyr--fullscreen-enabled",
            fallback: "plyr--fullscreen-fallback",
          },
          pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" },
          airplay: {
            supported: "plyr--airplay-supported",
            active: "plyr--airplay-active",
          },
          tabFocus: "plyr__tab-focus",
          previewThumbnails: {
            thumbContainer: "plyr__preview-thumb",
            thumbContainerShown: "plyr__preview-thumb--is-shown",
            imageContainer: "plyr__preview-thumb__image-container",
            timeContainer: "plyr__preview-thumb__time-container",
            scrubbingContainer: "plyr__preview-scrubbing",
            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
          },
        },
        attributes: {
          embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" },
        },
        ads: { enabled: !1, publisherId: "", tagUrl: "" },
        previewThumbnails: { enabled: !1, src: "" },
        vimeo: {
          byline: !1,
          portrait: !1,
          title: !1,
          speed: !0,
          transparent: !1,
          premium: !1,
          referrerPolicy: null,
        },
        youtube: {
          noCookie: !0,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
        },
      },
      lt = "picture-in-picture",
      ct = "inline",
      ut = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      dt = "audio",
      ht = "video";
    var pt = function () {},
      mt = (function () {
        function t() {
          var i =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          e(this, t),
            (this.enabled = window.console && i),
            this.enabled && this.log("Debugging enabled");
        }
        return (
          i(t, [
            {
              key: "log",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.log, console)
                  : pt;
              },
            },
            {
              key: "warn",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.warn, console)
                  : pt;
              },
            },
            {
              key: "error",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.error, console)
                  : pt;
              },
            },
          ]),
          t
        );
      })(),
      ft = (function () {
        function t(i) {
          var n = this;
          e(this, t),
            (this.player = i),
            (this.prefix = t.prefix),
            (this.property = t.property),
            (this.scrollPosition = { x: 0, y: 0 }),
            (this.forceFallback = "force" === i.config.fullscreen.fallback),
            (this.player.elements.fullscreen =
              i.config.fullscreen.container &&
              (function (e, t) {
                return (
                  Element.prototype.closest ||
                  function () {
                    var e = this;
                    do {
                      if (ke.matches(e, t)) return e;
                      e = e.parentElement || e.parentNode;
                    } while (null !== e && 1 === e.nodeType);
                    return null;
                  }
                ).call(e, t);
              })(
                this.player.elements.container,
                i.config.fullscreen.container
              )),
            xe.call(
              this.player,
              document,
              "ms" === this.prefix
                ? "MSFullscreenChange"
                : "".concat(this.prefix, "fullscreenchange"),
              function () {
                n.onChange();
              }
            ),
            xe.call(
              this.player,
              this.player.elements.container,
              "dblclick",
              function (e) {
                (G(n.player.elements.controls) &&
                  n.player.elements.controls.contains(e.target)) ||
                  n.toggle();
              }
            ),
            xe.call(
              this,
              this.player.elements.container,
              "keydown",
              function (e) {
                return n.trapFocus(e);
              }
            ),
            this.update();
        }
        return (
          i(
            t,
            [
              {
                key: "onChange",
                value: function () {
                  if (this.enabled) {
                    var e = this.player.elements.buttons.fullscreen;
                    G(e) && (e.pressed = this.active),
                      Oe.call(
                        this.player,
                        this.target,
                        this.active ? "enterfullscreen" : "exitfullscreen",
                        !0
                      );
                  }
                },
              },
              {
                key: "toggleFallback",
                value: function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  if (
                    (e
                      ? (this.scrollPosition = {
                          x: window.scrollX || 0,
                          y: window.scrollY || 0,
                        })
                      : window.scrollTo(
                          this.scrollPosition.x,
                          this.scrollPosition.y
                        ),
                    (document.body.style.overflow = e ? "hidden" : ""),
                    be(
                      this.target,
                      this.player.config.classNames.fullscreen.fallback,
                      e
                    ),
                    oe.isIos)
                  ) {
                    var t = document.head.querySelector(
                        'meta[name="viewport"]'
                      ),
                      i = "viewport-fit=cover";
                    t ||
                      (t = document.createElement("meta")).setAttribute(
                        "name",
                        "viewport"
                      );
                    var n = Y(t.content) && t.content.includes(i);
                    e
                      ? ((this.cleanupViewport = !n),
                        n || (t.content += ",".concat(i)))
                      : this.cleanupViewport &&
                        (t.content = t.content
                          .split(",")
                          .filter(function (e) {
                            return e.trim() !== i;
                          })
                          .join(","));
                  }
                  this.onChange();
                },
              },
              {
                key: "trapFocus",
                value: function (e) {
                  if (
                    !oe.isIos &&
                    this.active &&
                    "Tab" === e.key &&
                    9 === e.keyCode
                  ) {
                    var t = document.activeElement,
                      i = Te.call(
                        this.player,
                        "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
                      ),
                      n = o(i, 1)[0],
                      a = i[i.length - 1];
                    t !== a || e.shiftKey
                      ? t === n && e.shiftKey && (a.focus(), e.preventDefault())
                      : (n.focus(), e.preventDefault());
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  var e;
                  this.enabled
                    ? ((e = this.forceFallback
                        ? "Fallback (forced)"
                        : t.native
                        ? "Native"
                        : "Fallback"),
                      this.player.debug.log(
                        "".concat(e, " fullscreen enabled")
                      ))
                    : this.player.debug.log(
                        "Fullscreen not supported and fallback disabled"
                      );
                  be(
                    this.player.elements.container,
                    this.player.config.classNames.fullscreen.enabled,
                    this.enabled
                  );
                },
              },
              {
                key: "enter",
                value: function () {
                  this.enabled &&
                    (oe.isIos && this.player.config.fullscreen.iosNative
                      ? this.target.webkitEnterFullscreen()
                      : !t.native || this.forceFallback
                      ? this.toggleFallback(!0)
                      : this.prefix
                      ? ae(this.prefix) ||
                        this.target[
                          ""
                            .concat(this.prefix, "Request")
                            .concat(this.property)
                        ]()
                      : this.target.requestFullscreen({
                          navigationUI: "hide",
                        }));
                },
              },
              {
                key: "exit",
                value: function () {
                  if (this.enabled)
                    if (oe.isIos && this.player.config.fullscreen.iosNative)
                      this.target.webkitExitFullscreen(),
                        qe(this.player.play());
                    else if (!t.native || this.forceFallback)
                      this.toggleFallback(!1);
                    else if (this.prefix) {
                      if (!ae(this.prefix)) {
                        var e = "moz" === this.prefix ? "Cancel" : "Exit";
                        document[
                          "".concat(this.prefix).concat(e).concat(this.property)
                        ]();
                      }
                    } else
                      (
                        document.cancelFullScreen || document.exitFullscreen
                      ).call(document);
                },
              },
              {
                key: "toggle",
                value: function () {
                  this.active ? this.exit() : this.enter();
                },
              },
              {
                key: "usingNative",
                get: function () {
                  return t.native && !this.forceFallback;
                },
              },
              {
                key: "enabled",
                get: function () {
                  return (
                    (t.native || this.player.config.fullscreen.fallback) &&
                    this.player.config.fullscreen.enabled &&
                    this.player.supported.ui &&
                    this.player.isVideo
                  );
                },
              },
              {
                key: "active",
                get: function () {
                  if (!this.enabled) return !1;
                  if (!t.native || this.forceFallback)
                    return we(
                      this.target,
                      this.player.config.classNames.fullscreen.fallback
                    );
                  var e = this.prefix
                    ? document[
                        "".concat(this.prefix).concat(this.property, "Element")
                      ]
                    : document.fullscreenElement;
                  return e && e.shadowRoot
                    ? e === this.target.getRootNode().host
                    : e === this.target;
                },
              },
              {
                key: "target",
                get: function () {
                  return oe.isIos && this.player.config.fullscreen.iosNative
                    ? this.player.media
                    : this.player.elements.fullscreen ||
                        this.player.elements.container;
                },
              },
            ],
            [
              {
                key: "native",
                get: function () {
                  return !!(
                    document.fullscreenEnabled ||
                    document.webkitFullscreenEnabled ||
                    document.mozFullScreenEnabled ||
                    document.msFullscreenEnabled
                  );
                },
              },
              {
                key: "prefix",
                get: function () {
                  if (X(document.exitFullscreen)) return "";
                  var e = "";
                  return (
                    ["webkit", "moz", "ms"].some(function (t) {
                      return (
                        !(
                          !X(document["".concat(t, "ExitFullscreen")]) &&
                          !X(document["".concat(t, "CancelFullScreen")])
                        ) && ((e = t), !0)
                      );
                    }),
                    e
                  );
                },
              },
              {
                key: "property",
                get: function () {
                  return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
                },
              },
            ]
          ),
          t
        );
      })();
    function gt(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new Promise(function (i, n) {
        var a = new Image(),
          s = function () {
            delete a.onload, delete a.onerror, (a.naturalWidth >= t ? i : n)(a);
          };
        Object.assign(a, { onload: s, onerror: s, src: e });
      });
    }
    var yt = {
        addStyleHook: function () {
          be(
            this.elements.container,
            this.config.selectors.container.replace(".", ""),
            !0
          ),
            be(
              this.elements.container,
              this.config.classNames.uiSupported,
              this.supported.ui
            );
        },
        toggleNativeControls: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          e && this.isHTML5
            ? this.media.setAttribute("controls", "")
            : this.media.removeAttribute("controls");
        },
        build: function () {
          var e = this;
          if ((this.listeners.media(), !this.supported.ui))
            return (
              this.debug.warn(
                "Basic support only for "
                  .concat(this.provider, " ")
                  .concat(this.type)
              ),
              void yt.toggleNativeControls.call(this, !0)
            );
          G(this.elements.controls) ||
            (nt.inject.call(this), this.listeners.controls()),
            yt.toggleNativeControls.call(this),
            this.isHTML5 && rt.setup.call(this),
            (this.volume = null),
            (this.muted = null),
            (this.loop = null),
            (this.quality = null),
            (this.speed = null),
            nt.updateVolume.call(this),
            nt.timeUpdate.call(this),
            yt.checkPlaying.call(this),
            be(
              this.elements.container,
              this.config.classNames.pip.supported,
              Ee.pip && this.isHTML5 && this.isVideo
            ),
            be(
              this.elements.container,
              this.config.classNames.airplay.supported,
              Ee.airplay && this.isHTML5
            ),
            be(this.elements.container, this.config.classNames.isIos, oe.isIos),
            be(
              this.elements.container,
              this.config.classNames.isTouch,
              this.touch
            ),
            (this.ready = !0),
            setTimeout(function () {
              Oe.call(e, e.media, "ready");
            }, 0),
            yt.setTitle.call(this),
            this.poster &&
              yt.setPoster.call(this, this.poster, !1).catch(function () {}),
            this.config.duration && nt.durationUpdate.call(this);
        },
        setTitle: function () {
          var e = Xe("play", this.config);
          if (
            (Y(this.config.title) &&
              !ae(this.config.title) &&
              (e += ", ".concat(this.config.title)),
            Array.from(this.elements.buttons.play || []).forEach(function (t) {
              t.setAttribute("aria-label", e);
            }),
            this.isEmbed)
          ) {
            var t = Ce.call(this, "iframe");
            if (!G(t)) return;
            var i = ae(this.config.title) ? "video" : this.config.title,
              n = Xe("frameTitle", this.config);
            t.setAttribute("title", n.replace("{title}", i));
          }
        },
        togglePoster: function (e) {
          be(this.elements.container, this.config.classNames.posterEnabled, e);
        },
        setPoster: function (e) {
          var t = this,
            i =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
          return i && this.poster
            ? Promise.reject(new Error("Poster already set"))
            : (this.media.setAttribute("data-poster", e),
              je
                .call(this)
                .then(function () {
                  return gt(e);
                })
                .catch(function (i) {
                  throw (e === t.poster && yt.togglePoster.call(t, !1), i);
                })
                .then(function () {
                  if (e !== t.poster)
                    throw new Error(
                      "setPoster cancelled by later call to setPoster"
                    );
                })
                .then(function () {
                  return (
                    Object.assign(t.elements.poster.style, {
                      backgroundImage: "url('".concat(e, "')"),
                      backgroundSize: "",
                    }),
                    yt.togglePoster.call(t, !0),
                    e
                  );
                }));
        },
        checkPlaying: function (e) {
          var t = this;
          be(
            this.elements.container,
            this.config.classNames.playing,
            this.playing
          ),
            be(
              this.elements.container,
              this.config.classNames.paused,
              this.paused
            ),
            be(
              this.elements.container,
              this.config.classNames.stopped,
              this.stopped
            ),
            Array.from(this.elements.buttons.play || []).forEach(function (e) {
              Object.assign(e, { pressed: t.playing }),
                e.setAttribute(
                  "aria-label",
                  Xe(t.playing ? "pause" : "play", t.config)
                );
            }),
            (Z(e) && "timeupdate" === e.type) || yt.toggleControls.call(this);
        },
        checkLoading: function (e) {
          var t = this;
          (this.loading = ["stalled", "waiting"].includes(e.type)),
            clearTimeout(this.timers.loading),
            (this.timers.loading = setTimeout(
              function () {
                be(
                  t.elements.container,
                  t.config.classNames.loading,
                  t.loading
                ),
                  yt.toggleControls.call(t);
              },
              this.loading ? 250 : 0
            ));
        },
        toggleControls: function (e) {
          var t = this.elements.controls;
          if (t && this.config.hideControls) {
            var i = this.touch && this.lastSeekTime + 2e3 > Date.now();
            this.toggleControls(
              Boolean(
                e || this.loading || this.paused || t.pressed || t.hover || i
              )
            );
          }
        },
        migrateStyles: function () {
          var e = this;
          Object.values(s({}, this.media.style))
            .filter(function (e) {
              return !ae(e) && e.startsWith("--plyr");
            })
            .forEach(function (t) {
              e.elements.container.style.setProperty(
                t,
                e.media.style.getPropertyValue(t)
              ),
                e.media.style.removeProperty(t);
            }),
            ae(this.media.style) && this.media.removeAttribute("style");
        },
      },
      vt = (function () {
        function t(i) {
          e(this, t),
            (this.player = i),
            (this.lastKey = null),
            (this.focusTimer = null),
            (this.lastKeyDown = null),
            (this.handleKey = this.handleKey.bind(this)),
            (this.toggleMenu = this.toggleMenu.bind(this)),
            (this.setTabFocus = this.setTabFocus.bind(this)),
            (this.firstTouch = this.firstTouch.bind(this));
        }
        return (
          i(t, [
            {
              key: "handleKey",
              value: function (e) {
                var t = this.player,
                  i = t.elements,
                  n = e.keyCode ? e.keyCode : e.which,
                  a = "keydown" === e.type,
                  s = a && n === this.lastKey;
                if (
                  !(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) &&
                  K(n)
                ) {
                  if (a) {
                    var r = document.activeElement;
                    if (G(r)) {
                      var o = t.config.selectors.editable;
                      if (r !== i.inputs.seek && ke(r, o)) return;
                      if (32 === e.which && ke(r, 'button, [role^="menuitem"]'))
                        return;
                    }
                    switch (
                      ([
                        32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57,
                        67, 70, 73, 75, 76, 77, 79,
                      ].includes(n) &&
                        (e.preventDefault(), e.stopPropagation()),
                      n)
                    ) {
                      case 48:
                      case 49:
                      case 50:
                      case 51:
                      case 52:
                      case 53:
                      case 54:
                      case 55:
                      case 56:
                      case 57:
                        s || (t.currentTime = (t.duration / 10) * (n - 48));
                        break;
                      case 32:
                      case 75:
                        s || qe(t.togglePlay());
                        break;
                      case 38:
                        t.increaseVolume(0.1);
                        break;
                      case 40:
                        t.decreaseVolume(0.1);
                        break;
                      case 77:
                        s || (t.muted = !t.muted);
                        break;
                      case 39:
                        t.forward();
                        break;
                      case 37:
                        t.rewind();
                        break;
                      case 70:
                        t.fullscreen.toggle();
                        break;
                      case 67:
                        s || t.toggleCaptions();
                        break;
                      case 76:
                        t.loop = !t.loop;
                    }
                    27 === n &&
                      !t.fullscreen.usingNative &&
                      t.fullscreen.active &&
                      t.fullscreen.toggle(),
                      (this.lastKey = n);
                  } else this.lastKey = null;
                }
              },
            },
            {
              key: "toggleMenu",
              value: function (e) {
                nt.toggleMenu.call(this.player, e);
              },
            },
            {
              key: "firstTouch",
              value: function () {
                var e = this.player,
                  t = e.elements;
                (e.touch = !0),
                  be(t.container, e.config.classNames.isTouch, !0);
              },
            },
            {
              key: "setTabFocus",
              value: function (e) {
                var t = this.player,
                  i = t.elements;
                if (
                  (clearTimeout(this.focusTimer),
                  "keydown" !== e.type || 9 === e.which)
                ) {
                  "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                  var n,
                    a = e.timeStamp - this.lastKeyDown <= 20;
                  if ("focus" !== e.type || a)
                    (n = t.config.classNames.tabFocus),
                      be(Te.call(t, ".".concat(n)), n, !1),
                      "focusout" !== e.type &&
                        (this.focusTimer = setTimeout(function () {
                          var e = document.activeElement;
                          i.container.contains(e) &&
                            be(
                              document.activeElement,
                              t.config.classNames.tabFocus,
                              !0
                            );
                        }, 10));
                }
              },
            },
            {
              key: "global",
              value: function () {
                var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  t = this.player;
                t.config.keyboard.global &&
                  Me.call(t, window, "keydown keyup", this.handleKey, e, !1),
                  Me.call(t, document.body, "click", this.toggleMenu, e),
                  Le.call(t, document.body, "touchstart", this.firstTouch),
                  Me.call(
                    t,
                    document.body,
                    "keydown focus blur focusout",
                    this.setTabFocus,
                    e,
                    !1,
                    !0
                  );
              },
            },
            {
              key: "container",
              value: function () {
                var e = this.player,
                  t = e.config,
                  i = e.elements,
                  n = e.timers;
                !t.keyboard.global &&
                  t.keyboard.focused &&
                  xe.call(e, i.container, "keydown keyup", this.handleKey, !1),
                  xe.call(
                    e,
                    i.container,
                    "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                    function (t) {
                      var a = i.controls;
                      a &&
                        "enterfullscreen" === t.type &&
                        ((a.pressed = !1), (a.hover = !1));
                      var s = 0;
                      ["touchstart", "touchmove", "mousemove"].includes(
                        t.type
                      ) &&
                        (yt.toggleControls.call(e, !0),
                        (s = e.touch ? 3e3 : 2e3)),
                        clearTimeout(n.controls),
                        (n.controls = setTimeout(function () {
                          return yt.toggleControls.call(e, !1);
                        }, s));
                    }
                  );
                var a = function (t) {
                    if (!t) return Re.call(e);
                    var n = i.container.getBoundingClientRect(),
                      a = n.width,
                      s = n.height;
                    return Re.call(e, "".concat(a, ":").concat(s));
                  },
                  s = function () {
                    clearTimeout(n.resized), (n.resized = setTimeout(a, 50));
                  };
                xe.call(
                  e,
                  i.container,
                  "enterfullscreen exitfullscreen",
                  function (t) {
                    var n = e.fullscreen,
                      r = n.target,
                      l = n.usingNative;
                    if (
                      r === i.container &&
                      (e.isEmbed || !ae(e.config.ratio))
                    ) {
                      var c = "enterfullscreen" === t.type,
                        u = a(c);
                      u.padding;
                      !(function (t, i, n) {
                        if (e.isVimeo && !e.config.vimeo.premium) {
                          var a = e.elements.wrapper.firstChild,
                            s = o(t, 2)[1],
                            r = o(Fe.call(e), 2),
                            l = r[0],
                            c = r[1];
                          (a.style.maxWidth = n
                            ? "".concat((s / c) * l, "px")
                            : null),
                            (a.style.margin = n ? "0 auto" : null);
                        }
                      })(u.ratio, 0, c),
                        l ||
                          (c
                            ? xe.call(e, window, "resize", s)
                            : Ie.call(e, window, "resize", s));
                    }
                  }
                );
              },
            },
            {
              key: "media",
              value: function () {
                var e = this,
                  t = this.player,
                  i = t.elements;
                if (
                  (xe.call(
                    t,
                    t.media,
                    "timeupdate seeking seeked",
                    function (e) {
                      return nt.timeUpdate.call(t, e);
                    }
                  ),
                  xe.call(
                    t,
                    t.media,
                    "durationchange loadeddata loadedmetadata",
                    function (e) {
                      return nt.durationUpdate.call(t, e);
                    }
                  ),
                  xe.call(t, t.media, "ended", function () {
                    t.isHTML5 &&
                      t.isVideo &&
                      t.config.resetOnEnd &&
                      (t.restart(), t.pause());
                  }),
                  xe.call(
                    t,
                    t.media,
                    "progress playing seeking seeked",
                    function (e) {
                      return nt.updateProgress.call(t, e);
                    }
                  ),
                  xe.call(t, t.media, "volumechange", function (e) {
                    return nt.updateVolume.call(t, e);
                  }),
                  xe.call(
                    t,
                    t.media,
                    "playing play pause ended emptied timeupdate",
                    function (e) {
                      return yt.checkPlaying.call(t, e);
                    }
                  ),
                  xe.call(
                    t,
                    t.media,
                    "waiting canplay seeked playing",
                    function (e) {
                      return yt.checkLoading.call(t, e);
                    }
                  ),
                  t.supported.ui && t.config.clickToPlay && !t.isAudio)
                ) {
                  var n = Ce.call(t, ".".concat(t.config.classNames.video));
                  if (!G(n)) return;
                  xe.call(t, i.container, "click", function (a) {
                    ([i.container, n].includes(a.target) ||
                      n.contains(a.target)) &&
                      ((t.touch && t.config.hideControls) ||
                        (t.ended
                          ? (e.proxy(a, t.restart, "restart"),
                            e.proxy(
                              a,
                              function () {
                                qe(t.play());
                              },
                              "play"
                            ))
                          : e.proxy(
                              a,
                              function () {
                                qe(t.togglePlay());
                              },
                              "play"
                            )));
                  });
                }
                t.supported.ui &&
                  t.config.disableContextMenu &&
                  xe.call(
                    t,
                    i.wrapper,
                    "contextmenu",
                    function (e) {
                      e.preventDefault();
                    },
                    !1
                  ),
                  xe.call(t, t.media, "volumechange", function () {
                    t.storage.set({ volume: t.volume, muted: t.muted });
                  }),
                  xe.call(t, t.media, "ratechange", function () {
                    nt.updateSetting.call(t, "speed"),
                      t.storage.set({ speed: t.speed });
                  }),
                  xe.call(t, t.media, "qualitychange", function (e) {
                    nt.updateSetting.call(t, "quality", null, e.detail.quality);
                  }),
                  xe.call(t, t.media, "ready qualitychange", function () {
                    nt.setDownloadUrl.call(t);
                  });
                var a = t.config.events.concat(["keyup", "keydown"]).join(" ");
                xe.call(t, t.media, a, function (e) {
                  var n = e.detail,
                    a = void 0 === n ? {} : n;
                  "error" === e.type && (a = t.media.error),
                    Oe.call(t, i.container, e.type, !0, a);
                });
              },
            },
            {
              key: "proxy",
              value: function (e, t, i) {
                var n = this.player,
                  a = n.config.listeners[i],
                  s = !0;
                X(a) && (s = a.call(n, e)), !1 !== s && X(t) && t.call(n, e);
              },
            },
            {
              key: "bind",
              value: function (e, t, i, n) {
                var a = this,
                  s =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4],
                  r = this.player,
                  o = r.config.listeners[n],
                  l = X(o);
                xe.call(
                  r,
                  e,
                  t,
                  function (e) {
                    return a.proxy(e, i, n);
                  },
                  s && !l
                );
              },
            },
            {
              key: "controls",
              value: function () {
                var e = this,
                  t = this.player,
                  i = t.elements,
                  n = oe.isIE ? "change" : "input";
                if (
                  (i.buttons.play &&
                    Array.from(i.buttons.play).forEach(function (i) {
                      e.bind(
                        i,
                        "click",
                        function () {
                          qe(t.togglePlay());
                        },
                        "play"
                      );
                    }),
                  this.bind(i.buttons.restart, "click", t.restart, "restart"),
                  this.bind(i.buttons.rewind, "click", t.rewind, "rewind"),
                  this.bind(
                    i.buttons.fastForward,
                    "click",
                    t.forward,
                    "fastForward"
                  ),
                  this.bind(
                    i.buttons.mute,
                    "click",
                    function () {
                      t.muted = !t.muted;
                    },
                    "mute"
                  ),
                  this.bind(i.buttons.captions, "click", function () {
                    return t.toggleCaptions();
                  }),
                  this.bind(
                    i.buttons.download,
                    "click",
                    function () {
                      Oe.call(t, t.media, "download");
                    },
                    "download"
                  ),
                  this.bind(
                    i.buttons.fullscreen,
                    "click",
                    function () {
                      t.fullscreen.toggle();
                    },
                    "fullscreen"
                  ),
                  this.bind(
                    i.buttons.pip,
                    "click",
                    function () {
                      t.pip = "toggle";
                    },
                    "pip"
                  ),
                  this.bind(i.buttons.airplay, "click", t.airplay, "airplay"),
                  this.bind(
                    i.buttons.settings,
                    "click",
                    function (e) {
                      e.stopPropagation(),
                        e.preventDefault(),
                        nt.toggleMenu.call(t, e);
                    },
                    null,
                    !1
                  ),
                  this.bind(
                    i.buttons.settings,
                    "keyup",
                    function (e) {
                      var i = e.which;
                      [13, 32].includes(i) &&
                        (13 !== i
                          ? (e.preventDefault(),
                            e.stopPropagation(),
                            nt.toggleMenu.call(t, e))
                          : nt.focusFirstMenuItem.call(t, null, !0));
                    },
                    null,
                    !1
                  ),
                  this.bind(i.settings.menu, "keydown", function (e) {
                    27 === e.which && nt.toggleMenu.call(t, e);
                  }),
                  this.bind(i.inputs.seek, "mousedown mousemove", function (e) {
                    var t = i.progress.getBoundingClientRect(),
                      n = (100 / t.width) * (e.pageX - t.left);
                    e.currentTarget.setAttribute("seek-value", n);
                  }),
                  this.bind(
                    i.inputs.seek,
                    "mousedown mouseup keydown keyup touchstart touchend",
                    function (e) {
                      var i = e.currentTarget,
                        n = e.keyCode ? e.keyCode : e.which;
                      if (!ee(e) || 39 === n || 37 === n) {
                        t.lastSeekTime = Date.now();
                        var a = i.hasAttribute("play-on-seeked"),
                          s = ["mouseup", "touchend", "keyup"].includes(e.type);
                        a && s
                          ? (i.removeAttribute("play-on-seeked"), qe(t.play()))
                          : !s &&
                            t.playing &&
                            (i.setAttribute("play-on-seeked", ""), t.pause());
                      }
                    }
                  ),
                  oe.isIos)
                ) {
                  var a = Te.call(t, 'input[type="range"]');
                  Array.from(a).forEach(function (t) {
                    return e.bind(t, n, function (e) {
                      return re(e.target);
                    });
                  });
                }
                this.bind(
                  i.inputs.seek,
                  n,
                  function (e) {
                    var i = e.currentTarget,
                      n = i.getAttribute("seek-value");
                    ae(n) && (n = i.value),
                      i.removeAttribute("seek-value"),
                      (t.currentTime = (n / i.max) * t.duration);
                  },
                  "seek"
                ),
                  this.bind(
                    i.progress,
                    "mouseenter mouseleave mousemove",
                    function (e) {
                      return nt.updateSeekTooltip.call(t, e);
                    }
                  ),
                  this.bind(i.progress, "mousemove touchmove", function (e) {
                    var i = t.previewThumbnails;
                    i && i.loaded && i.startMove(e);
                  }),
                  this.bind(
                    i.progress,
                    "mouseleave touchend click",
                    function () {
                      var e = t.previewThumbnails;
                      e && e.loaded && e.endMove(!1, !0);
                    }
                  ),
                  this.bind(i.progress, "mousedown touchstart", function (e) {
                    var i = t.previewThumbnails;
                    i && i.loaded && i.startScrubbing(e);
                  }),
                  this.bind(i.progress, "mouseup touchend", function (e) {
                    var i = t.previewThumbnails;
                    i && i.loaded && i.endScrubbing(e);
                  }),
                  oe.isWebkit &&
                    Array.from(Te.call(t, 'input[type="range"]')).forEach(
                      function (i) {
                        e.bind(i, "input", function (e) {
                          return nt.updateRangeFill.call(t, e.target);
                        });
                      }
                    ),
                  t.config.toggleInvert &&
                    !G(i.display.duration) &&
                    this.bind(i.display.currentTime, "click", function () {
                      0 !== t.currentTime &&
                        ((t.config.invertTime = !t.config.invertTime),
                        nt.timeUpdate.call(t));
                    }),
                  this.bind(
                    i.inputs.volume,
                    n,
                    function (e) {
                      t.volume = e.target.value;
                    },
                    "volume"
                  ),
                  this.bind(i.controls, "mouseenter mouseleave", function (e) {
                    i.controls.hover = !t.touch && "mouseenter" === e.type;
                  }),
                  i.fullscreen &&
                    Array.from(i.fullscreen.children)
                      .filter(function (e) {
                        return !e.contains(i.container);
                      })
                      .forEach(function (n) {
                        e.bind(n, "mouseenter mouseleave", function (e) {
                          i.controls.hover =
                            !t.touch && "mouseenter" === e.type;
                        });
                      }),
                  this.bind(
                    i.controls,
                    "mousedown mouseup touchstart touchend touchcancel",
                    function (e) {
                      i.controls.pressed = ["mousedown", "touchstart"].includes(
                        e.type
                      );
                    }
                  ),
                  this.bind(i.controls, "focusin", function () {
                    var n = t.config,
                      a = t.timers;
                    be(i.controls, n.classNames.noTransition, !0),
                      yt.toggleControls.call(t, !0),
                      setTimeout(function () {
                        be(i.controls, n.classNames.noTransition, !1);
                      }, 0);
                    var s = e.touch ? 3e3 : 4e3;
                    clearTimeout(a.controls),
                      (a.controls = setTimeout(function () {
                        return yt.toggleControls.call(t, !1);
                      }, s));
                  }),
                  this.bind(
                    i.inputs.volume,
                    "wheel",
                    function (e) {
                      var i = e.webkitDirectionInvertedFromDevice,
                        n = o(
                          [e.deltaX, -e.deltaY].map(function (e) {
                            return i ? -e : e;
                          }),
                          2
                        ),
                        a = n[0],
                        s = n[1],
                        r = Math.sign(Math.abs(a) > Math.abs(s) ? a : s);
                      t.increaseVolume(r / 50);
                      var l = t.media.volume;
                      ((1 === r && l < 1) || (-1 === r && l > 0)) &&
                        e.preventDefault();
                    },
                    "volume",
                    !1
                  );
              },
            },
          ]),
          t
        );
      })();
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self && self;
    var bt = (function (e, t) {
      return e((t = { exports: {} }), t.exports), t.exports;
    })(function (e, t) {
      e.exports = (function () {
        var e = function () {},
          t = {},
          i = {},
          n = {};
        function a(e, t) {
          if (e) {
            var a = n[e];
            if (((i[e] = t), a)) for (; a.length; ) a[0](e, t), a.splice(0, 1);
          }
        }
        function s(t, i) {
          t.call && (t = { success: t }),
            i.length ? (t.error || e)(i) : (t.success || e)(t);
        }
        function r(t, i, n, a) {
          var s,
            o,
            l = document,
            c = n.async,
            u = (n.numRetries || 0) + 1,
            d = n.before || e,
            h = t.replace(/[\?|#].*$/, ""),
            p = t.replace(/^(css|img)!/, "");
          (a = a || 0),
            /(^css!|\.css$)/.test(h)
              ? (((o = l.createElement("link")).rel = "stylesheet"),
                (o.href = p),
                (s = "hideFocus" in o) &&
                  o.relList &&
                  ((s = 0), (o.rel = "preload"), (o.as = "style")))
              : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h)
              ? ((o = l.createElement("img")).src = p)
              : (((o = l.createElement("script")).src = t),
                (o.async = void 0 === c || c)),
            (o.onload =
              o.onerror =
              o.onbeforeload =
                function (e) {
                  var l = e.type[0];
                  if (s)
                    try {
                      o.sheet.cssText.length || (l = "e");
                    } catch (e) {
                      18 != e.code && (l = "e");
                    }
                  if ("e" == l) {
                    if ((a += 1) < u) return r(t, i, n, a);
                  } else if ("preload" == o.rel && "style" == o.as)
                    return (o.rel = "stylesheet");
                  i(t, l, e.defaultPrevented);
                }),
            !1 !== d(t, o) && l.head.appendChild(o);
        }
        function o(e, i, n) {
          var o, l;
          if ((i && i.trim && (o = i), (l = (o ? n : i) || {}), o)) {
            if (o in t) throw "LoadJS";
            t[o] = !0;
          }
          function c(t, i) {
            !(function (e, t, i) {
              var n,
                a,
                s = (e = e.push ? e : [e]).length,
                o = s,
                l = [];
              for (
                n = function (e, i, n) {
                  if (("e" == i && l.push(e), "b" == i)) {
                    if (!n) return;
                    l.push(e);
                  }
                  --s || t(l);
                },
                  a = 0;
                a < o;
                a++
              )
                r(e[a], n, i);
            })(
              e,
              function (e) {
                s(l, e), t && s({ success: t, error: i }, e), a(o, e);
              },
              l
            );
          }
          if (l.returnPromise) return new Promise(c);
          c();
        }
        return (
          (o.ready = function (e, t) {
            return (
              (function (e, t) {
                e = e.push ? e : [e];
                var a,
                  s,
                  r,
                  o = [],
                  l = e.length,
                  c = l;
                for (
                  a = function (e, i) {
                    i.length && o.push(e), --c || t(o);
                  };
                  l--;

                )
                  (s = e[l]),
                    (r = i[s]) ? a(s, r) : (n[s] = n[s] || []).push(a);
              })(e, function (e) {
                s(t, e);
              }),
              o
            );
          }),
          (o.done = function (e) {
            a(e, []);
          }),
          (o.reset = function () {
            (t = {}), (i = {}), (n = {});
          }),
          (o.isDefined = function (e) {
            return e in t;
          }),
          o
        );
      })();
    });
    function wt(e) {
      return new Promise(function (t, i) {
        bt(e, { success: t, error: i });
      });
    }
    function kt(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          Oe.call(this, this.media, e ? "play" : "pause"));
    }
    var Tt = {
      setup: function () {
        var e = this;
        be(e.elements.wrapper, e.config.classNames.embed, !0),
          (e.options.speed = e.config.speed.options),
          Re.call(e),
          z(window.Vimeo)
            ? Tt.ready.call(e)
            : wt(e.config.urls.vimeo.sdk)
                .then(function () {
                  Tt.ready.call(e);
                })
                .catch(function (t) {
                  e.debug.warn("Vimeo SDK (player.js) failed to load", t);
                });
      },
      ready: function () {
        var e = this,
          t = this,
          i = t.config.vimeo,
          n = i.premium,
          a = i.referrerPolicy,
          l = r(i, ["premium", "referrerPolicy"]);
        n && Object.assign(l, { controls: !1, sidedock: !1 });
        var c = st(
            s(
              {
                loop: t.config.loop.active,
                autoplay: t.autoplay,
                muted: t.muted,
                gesture: "media",
                playsinline: !this.config.fullscreen.iosNative,
              },
              l
            )
          ),
          u = t.media.getAttribute("src");
        ae(u) && (u = t.media.getAttribute(t.config.attributes.embed.id));
        var d,
          h = ae((d = u))
            ? null
            : K(Number(d))
            ? d
            : d.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
            ? RegExp.$2
            : d,
          p = he("iframe"),
          m = Ue(t.config.urls.vimeo.iframe, h, c);
        p.setAttribute("src", m),
          p.setAttribute("allowfullscreen", ""),
          p.setAttribute("allow", "autoplay,fullscreen,picture-in-picture"),
          ae(a) || p.setAttribute("referrerPolicy", a);
        var f = t.poster;
        if (n) p.setAttribute("data-poster", f), (t.media = ge(p, t.media));
        else {
          var g = he("div", {
            class: t.config.classNames.embedContainer,
            "data-poster": f,
          });
          g.appendChild(p), (t.media = ge(g, t.media));
        }
        Je(Ue(t.config.urls.vimeo.api, h), "json").then(function (e) {
          if (!ae(e)) {
            var i = new URL(e[0].thumbnail_large);
            (i.pathname = "".concat(i.pathname.split("_")[0], ".jpg")),
              yt.setPoster.call(t, i.href).catch(function () {});
          }
        }),
          (t.embed = new window.Vimeo.Player(p, {
            autopause: t.config.autopause,
            muted: t.muted,
          })),
          (t.media.paused = !0),
          (t.media.currentTime = 0),
          t.supported.ui && t.embed.disableTextTrack(),
          (t.media.play = function () {
            return kt.call(t, !0), t.embed.play();
          }),
          (t.media.pause = function () {
            return kt.call(t, !1), t.embed.pause();
          }),
          (t.media.stop = function () {
            t.pause(), (t.currentTime = 0);
          });
        var y = t.media.currentTime;
        Object.defineProperty(t.media, "currentTime", {
          get: function () {
            return y;
          },
          set: function (e) {
            var i = t.embed,
              n = t.media,
              a = t.paused,
              s = t.volume,
              r = a && !i.hasPlayed;
            (n.seeking = !0),
              Oe.call(t, n, "seeking"),
              Promise.resolve(r && i.setVolume(0))
                .then(function () {
                  return i.setCurrentTime(e);
                })
                .then(function () {
                  return r && i.pause();
                })
                .then(function () {
                  return r && i.setVolume(s);
                })
                .catch(function () {});
          },
        });
        var v = t.config.speed.selected;
        Object.defineProperty(t.media, "playbackRate", {
          get: function () {
            return v;
          },
          set: function (e) {
            t.embed
              .setPlaybackRate(e)
              .then(function () {
                (v = e), Oe.call(t, t.media, "ratechange");
              })
              .catch(function () {
                t.options.speed = [1];
              });
          },
        });
        var b = t.config.volume;
        Object.defineProperty(t.media, "volume", {
          get: function () {
            return b;
          },
          set: function (e) {
            t.embed.setVolume(e).then(function () {
              (b = e), Oe.call(t, t.media, "volumechange");
            });
          },
        });
        var w = t.config.muted;
        Object.defineProperty(t.media, "muted", {
          get: function () {
            return w;
          },
          set: function (e) {
            var i = !!Q(e) && e;
            t.embed.setVolume(i ? 0 : t.config.volume).then(function () {
              (w = i), Oe.call(t, t.media, "volumechange");
            });
          },
        });
        var k,
          T = t.config.loop;
        Object.defineProperty(t.media, "loop", {
          get: function () {
            return T;
          },
          set: function (e) {
            var i = Q(e) ? e : t.config.loop.active;
            t.embed.setLoop(i).then(function () {
              T = i;
            });
          },
        }),
          t.embed
            .getVideoUrl()
            .then(function (e) {
              (k = e), nt.setDownloadUrl.call(t);
            })
            .catch(function (t) {
              e.debug.warn(t);
            }),
          Object.defineProperty(t.media, "currentSrc", {
            get: function () {
              return k;
            },
          }),
          Object.defineProperty(t.media, "ended", {
            get: function () {
              return t.currentTime === t.duration;
            },
          }),
          Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(
            function (i) {
              var n = o(i, 2),
                a = n[0],
                s = n[1];
              (t.embed.ratio = [a, s]), Re.call(e);
            }
          ),
          t.embed.setAutopause(t.config.autopause).then(function (e) {
            t.config.autopause = e;
          }),
          t.embed.getVideoTitle().then(function (i) {
            (t.config.title = i), yt.setTitle.call(e);
          }),
          t.embed.getCurrentTime().then(function (e) {
            (y = e), Oe.call(t, t.media, "timeupdate");
          }),
          t.embed.getDuration().then(function (e) {
            (t.media.duration = e), Oe.call(t, t.media, "durationchange");
          }),
          t.embed.getTextTracks().then(function (e) {
            (t.media.textTracks = e), rt.setup.call(t);
          }),
          t.embed.on("cuechange", function (e) {
            var i = e.cues,
              n = (void 0 === i ? [] : i).map(function (e) {
                return (function (e) {
                  var t = document.createDocumentFragment(),
                    i = document.createElement("div");
                  return (
                    t.appendChild(i), (i.innerHTML = e), t.firstChild.innerText
                  );
                })(e.text);
              });
            rt.updateCues.call(t, n);
          }),
          t.embed.on("loaded", function () {
            (t.embed.getPaused().then(function (e) {
              kt.call(t, !e), e || Oe.call(t, t.media, "playing");
            }),
            G(t.embed.element) && t.supported.ui) &&
              t.embed.element.setAttribute("tabindex", -1);
          }),
          t.embed.on("bufferstart", function () {
            Oe.call(t, t.media, "waiting");
          }),
          t.embed.on("bufferend", function () {
            Oe.call(t, t.media, "playing");
          }),
          t.embed.on("play", function () {
            kt.call(t, !0), Oe.call(t, t.media, "playing");
          }),
          t.embed.on("pause", function () {
            kt.call(t, !1);
          }),
          t.embed.on("timeupdate", function (e) {
            (t.media.seeking = !1),
              (y = e.seconds),
              Oe.call(t, t.media, "timeupdate");
          }),
          t.embed.on("progress", function (e) {
            (t.media.buffered = e.percent),
              Oe.call(t, t.media, "progress"),
              1 === parseInt(e.percent, 10) &&
                Oe.call(t, t.media, "canplaythrough"),
              t.embed.getDuration().then(function (e) {
                e !== t.media.duration &&
                  ((t.media.duration = e),
                  Oe.call(t, t.media, "durationchange"));
              });
          }),
          t.embed.on("seeked", function () {
            (t.media.seeking = !1), Oe.call(t, t.media, "seeked");
          }),
          t.embed.on("ended", function () {
            (t.media.paused = !0), Oe.call(t, t.media, "ended");
          }),
          t.embed.on("error", function (e) {
            (t.media.error = e), Oe.call(t, t.media, "error");
          }),
          setTimeout(function () {
            return yt.build.call(t);
          }, 0);
      },
    };
    function Ct(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          Oe.call(this, this.media, e ? "play" : "pause"));
    }
    function At(e) {
      return e.noCookie
        ? "https://www.youtube-nocookie.com"
        : "http:" === window.location.protocol
        ? "http://www.youtube.com"
        : void 0;
    }
    var St = {
        setup: function () {
          var e = this;
          if (
            (be(this.elements.wrapper, this.config.classNames.embed, !0),
            z(window.YT) && X(window.YT.Player))
          )
            St.ready.call(this);
          else {
            var t = window.onYouTubeIframeAPIReady;
            (window.onYouTubeIframeAPIReady = function () {
              X(t) && t(), St.ready.call(e);
            }),
              wt(this.config.urls.youtube.sdk).catch(function (t) {
                e.debug.warn("YouTube API failed to load", t);
              });
          }
        },
        getTitle: function (e) {
          var t = this;
          Je(Ue(this.config.urls.youtube.api, e))
            .then(function (e) {
              if (z(e)) {
                var i = e.title,
                  n = e.height,
                  a = e.width;
                (t.config.title = i),
                  yt.setTitle.call(t),
                  (t.embed.ratio = [a, n]);
              }
              Re.call(t);
            })
            .catch(function () {
              Re.call(t);
            });
        },
        ready: function () {
          var e = this,
            t = e.media && e.media.getAttribute("id");
          if (ae(t) || !t.startsWith("youtube-")) {
            var i = e.media.getAttribute("src");
            ae(i) &&
              (i = e.media.getAttribute(this.config.attributes.embed.id));
            var n,
              a,
              s = ae((n = i))
                ? null
                : n.match(
                    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                  )
                ? RegExp.$2
                : n,
              r =
                ((a = e.provider),
                "".concat(a, "-").concat(Math.floor(1e4 * Math.random()))),
              o = he("div", { id: r, "data-poster": e.poster });
            e.media = ge(o, e.media);
            var l = function (e) {
              return "https://i.ytimg.com/vi/"
                .concat(s, "/")
                .concat(e, "default.jpg");
            };
            gt(l("maxres"), 121)
              .catch(function () {
                return gt(l("sd"), 121);
              })
              .catch(function () {
                return gt(l("hq"));
              })
              .then(function (t) {
                return yt.setPoster.call(e, t.src);
              })
              .then(function (t) {
                t.includes("maxres") ||
                  (e.elements.poster.style.backgroundSize = "cover");
              })
              .catch(function () {});
            var c = e.config.youtube;
            e.embed = new window.YT.Player(r, {
              videoId: s,
              host: At(c),
              playerVars: ce(
                {},
                {
                  autoplay: e.config.autoplay ? 1 : 0,
                  hl: e.config.hl,
                  controls: e.supported.ui ? 0 : 1,
                  disablekb: 1,
                  playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                  cc_load_policy: e.captions.active ? 1 : 0,
                  cc_lang_pref: e.config.captions.language,
                  widget_referrer: window ? window.location.href : null,
                },
                c
              ),
              events: {
                onError: function (t) {
                  if (!e.media.error) {
                    var i = t.data,
                      n =
                        {
                          2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                          5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                          100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                          101: "The owner of the requested video does not allow it to be played in embedded players.",
                          150: "The owner of the requested video does not allow it to be played in embedded players.",
                        }[i] || "An unknown error occured";
                    (e.media.error = { code: i, message: n }),
                      Oe.call(e, e.media, "error");
                  }
                },
                onPlaybackRateChange: function (t) {
                  var i = t.target;
                  (e.media.playbackRate = i.getPlaybackRate()),
                    Oe.call(e, e.media, "ratechange");
                },
                onReady: function (t) {
                  if (!X(e.media.play)) {
                    var i = t.target;
                    St.getTitle.call(e, s),
                      (e.media.play = function () {
                        Ct.call(e, !0), i.playVideo();
                      }),
                      (e.media.pause = function () {
                        Ct.call(e, !1), i.pauseVideo();
                      }),
                      (e.media.stop = function () {
                        i.stopVideo();
                      }),
                      (e.media.duration = i.getDuration()),
                      (e.media.paused = !0),
                      (e.media.currentTime = 0),
                      Object.defineProperty(e.media, "currentTime", {
                        get: function () {
                          return Number(i.getCurrentTime());
                        },
                        set: function (t) {
                          e.paused && !e.embed.hasPlayed && e.embed.mute(),
                            (e.media.seeking = !0),
                            Oe.call(e, e.media, "seeking"),
                            i.seekTo(t);
                        },
                      }),
                      Object.defineProperty(e.media, "playbackRate", {
                        get: function () {
                          return i.getPlaybackRate();
                        },
                        set: function (e) {
                          i.setPlaybackRate(e);
                        },
                      });
                    var n = e.config.volume;
                    Object.defineProperty(e.media, "volume", {
                      get: function () {
                        return n;
                      },
                      set: function (t) {
                        (n = t),
                          i.setVolume(100 * n),
                          Oe.call(e, e.media, "volumechange");
                      },
                    });
                    var a = e.config.muted;
                    Object.defineProperty(e.media, "muted", {
                      get: function () {
                        return a;
                      },
                      set: function (t) {
                        var n = Q(t) ? t : a;
                        (a = n),
                          i[n ? "mute" : "unMute"](),
                          Oe.call(e, e.media, "volumechange");
                      },
                    }),
                      Object.defineProperty(e.media, "currentSrc", {
                        get: function () {
                          return i.getVideoUrl();
                        },
                      }),
                      Object.defineProperty(e.media, "ended", {
                        get: function () {
                          return e.currentTime === e.duration;
                        },
                      });
                    var r = i.getAvailablePlaybackRates();
                    (e.options.speed = r.filter(function (t) {
                      return e.config.speed.options.includes(t);
                    })),
                      e.supported.ui && e.media.setAttribute("tabindex", -1),
                      Oe.call(e, e.media, "timeupdate"),
                      Oe.call(e, e.media, "durationchange"),
                      clearInterval(e.timers.buffering),
                      (e.timers.buffering = setInterval(function () {
                        (e.media.buffered = i.getVideoLoadedFraction()),
                          (null === e.media.lastBuffered ||
                            e.media.lastBuffered < e.media.buffered) &&
                            Oe.call(e, e.media, "progress"),
                          (e.media.lastBuffered = e.media.buffered),
                          1 === e.media.buffered &&
                            (clearInterval(e.timers.buffering),
                            Oe.call(e, e.media, "canplaythrough"));
                      }, 200)),
                      setTimeout(function () {
                        return yt.build.call(e);
                      }, 50);
                  }
                },
                onStateChange: function (t) {
                  var i = t.target;
                  switch (
                    (clearInterval(e.timers.playing),
                    e.media.seeking &&
                      [1, 2].includes(t.data) &&
                      ((e.media.seeking = !1), Oe.call(e, e.media, "seeked")),
                    t.data)
                  ) {
                    case -1:
                      Oe.call(e, e.media, "timeupdate"),
                        (e.media.buffered = i.getVideoLoadedFraction()),
                        Oe.call(e, e.media, "progress");
                      break;
                    case 0:
                      Ct.call(e, !1),
                        e.media.loop
                          ? (i.stopVideo(), i.playVideo())
                          : Oe.call(e, e.media, "ended");
                      break;
                    case 1:
                      e.config.autoplay || !e.media.paused || e.embed.hasPlayed
                        ? (Ct.call(e, !0),
                          Oe.call(e, e.media, "playing"),
                          (e.timers.playing = setInterval(function () {
                            Oe.call(e, e.media, "timeupdate");
                          }, 50)),
                          e.media.duration !== i.getDuration() &&
                            ((e.media.duration = i.getDuration()),
                            Oe.call(e, e.media, "durationchange")))
                        : e.media.pause();
                      break;
                    case 2:
                      e.muted || e.embed.unMute(), Ct.call(e, !1);
                      break;
                    case 3:
                      Oe.call(e, e.media, "waiting");
                  }
                  Oe.call(e, e.elements.container, "statechange", !1, {
                    code: t.data,
                  });
                },
              },
            });
          }
        },
      },
      Pt = {
        setup: function () {
          this.media
            ? (be(
                this.elements.container,
                this.config.classNames.type.replace("{0}", this.type),
                !0
              ),
              be(
                this.elements.container,
                this.config.classNames.provider.replace("{0}", this.provider),
                !0
              ),
              this.isEmbed &&
                be(
                  this.elements.container,
                  this.config.classNames.type.replace("{0}", "video"),
                  !0
                ),
              this.isVideo &&
                ((this.elements.wrapper = he("div", {
                  class: this.config.classNames.video,
                })),
                ue(this.media, this.elements.wrapper),
                (this.elements.poster = he("div", {
                  class: this.config.classNames.poster,
                })),
                this.elements.wrapper.appendChild(this.elements.poster)),
              this.isHTML5
                ? Ve.setup.call(this)
                : this.isYouTube
                ? St.setup.call(this)
                : this.isVimeo && Tt.setup.call(this))
            : this.debug.warn("No media element found!");
        },
      },
      Et = (function () {
        function t(i) {
          var n = this;
          e(this, t),
            (this.player = i),
            (this.config = i.config.ads),
            (this.playing = !1),
            (this.initialized = !1),
            (this.elements = { container: null, displayContainer: null }),
            (this.manager = null),
            (this.loader = null),
            (this.cuePoints = null),
            (this.events = {}),
            (this.safetyTimer = null),
            (this.countdownTimer = null),
            (this.managerPromise = new Promise(function (e, t) {
              n.on("loaded", e), n.on("error", t);
            })),
            this.load();
        }
        return (
          i(t, [
            {
              key: "load",
              value: function () {
                var e = this;
                this.enabled &&
                  (z(window.google) && z(window.google.ima)
                    ? this.ready()
                    : wt(this.player.config.urls.googleIMA.sdk)
                        .then(function () {
                          e.ready();
                        })
                        .catch(function () {
                          e.trigger(
                            "error",
                            new Error("Google IMA SDK failed to load")
                          );
                        }));
              },
            },
            {
              key: "ready",
              value: function () {
                var e,
                  t = this;
                this.enabled ||
                  ((e = this).manager && e.manager.destroy(),
                  e.elements.displayContainer &&
                    e.elements.displayContainer.destroy(),
                  e.elements.container.remove()),
                  this.startSafetyTimer(12e3, "ready()"),
                  this.managerPromise.then(function () {
                    t.clearSafetyTimer("onAdsManagerLoaded()");
                  }),
                  this.listeners(),
                  this.setupIMA();
              },
            },
            {
              key: "setupIMA",
              value: function () {
                var e = this;
                (this.elements.container = he("div", {
                  class: this.player.config.classNames.ads,
                })),
                  this.player.elements.container.appendChild(
                    this.elements.container
                  ),
                  google.ima.settings.setVpaidMode(
                    google.ima.ImaSdkSettings.VpaidMode.ENABLED
                  ),
                  google.ima.settings.setLocale(
                    this.player.config.ads.language
                  ),
                  google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                    this.player.config.playsinline
                  ),
                  (this.elements.displayContainer =
                    new google.ima.AdDisplayContainer(
                      this.elements.container,
                      this.player.media
                    )),
                  (this.loader = new google.ima.AdsLoader(
                    this.elements.displayContainer
                  )),
                  this.loader.addEventListener(
                    google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                    function (t) {
                      return e.onAdsManagerLoaded(t);
                    },
                    !1
                  ),
                  this.loader.addEventListener(
                    google.ima.AdErrorEvent.Type.AD_ERROR,
                    function (t) {
                      return e.onAdError(t);
                    },
                    !1
                  ),
                  this.requestAds();
              },
            },
            {
              key: "requestAds",
              value: function () {
                var e = this.player.elements.container;
                try {
                  var t = new google.ima.AdsRequest();
                  (t.adTagUrl = this.tagUrl),
                    (t.linearAdSlotWidth = e.offsetWidth),
                    (t.linearAdSlotHeight = e.offsetHeight),
                    (t.nonLinearAdSlotWidth = e.offsetWidth),
                    (t.nonLinearAdSlotHeight = e.offsetHeight),
                    (t.forceNonLinearFullSlot = !1),
                    t.setAdWillPlayMuted(!this.player.muted),
                    this.loader.requestAds(t);
                } catch (e) {
                  this.onAdError(e);
                }
              },
            },
            {
              key: "pollCountdown",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                if (!t)
                  return (
                    clearInterval(this.countdownTimer),
                    void this.elements.container.removeAttribute(
                      "data-badge-text"
                    )
                  );
                var i = function () {
                  var t = it(Math.max(e.manager.getRemainingTime(), 0)),
                    i = ""
                      .concat(Xe("advertisement", e.player.config), " - ")
                      .concat(t);
                  e.elements.container.setAttribute("data-badge-text", i);
                };
                this.countdownTimer = setInterval(i, 100);
              },
            },
            {
              key: "onAdsManagerLoaded",
              value: function (e) {
                var t = this;
                if (this.enabled) {
                  var i = new google.ima.AdsRenderingSettings();
                  (i.restoreCustomPlaybackStateOnAdBreakComplete = !0),
                    (i.enablePreloading = !0),
                    (this.manager = e.getAdsManager(this.player, i)),
                    (this.cuePoints = this.manager.getCuePoints()),
                    this.manager.addEventListener(
                      google.ima.AdErrorEvent.Type.AD_ERROR,
                      function (e) {
                        return t.onAdError(e);
                      }
                    ),
                    Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
                      t.manager.addEventListener(
                        google.ima.AdEvent.Type[e],
                        function (e) {
                          return t.onAdEvent(e);
                        }
                      );
                    }),
                    this.trigger("loaded");
                }
              },
            },
            {
              key: "addCuePoints",
              value: function () {
                var e = this;
                ae(this.cuePoints) ||
                  this.cuePoints.forEach(function (t) {
                    if (0 !== t && -1 !== t && t < e.player.duration) {
                      var i = e.player.elements.progress;
                      if (G(i)) {
                        var n = (100 / e.player.duration) * t,
                          a = he("span", {
                            class: e.player.config.classNames.cues,
                          });
                        (a.style.left = "".concat(n.toString(), "%")),
                          i.appendChild(a);
                      }
                    }
                  });
              },
            },
            {
              key: "onAdEvent",
              value: function (e) {
                var t = this,
                  i = this.player.elements.container,
                  n = e.getAd(),
                  a = e.getAdData();
                switch (
                  ((function (e) {
                    Oe.call(
                      t.player,
                      t.player.media,
                      "ads".concat(e.replace(/_/g, "").toLowerCase())
                    );
                  })(e.type),
                  e.type)
                ) {
                  case google.ima.AdEvent.Type.LOADED:
                    this.trigger("loaded"),
                      this.pollCountdown(!0),
                      n.isLinear() ||
                        ((n.width = i.offsetWidth),
                        (n.height = i.offsetHeight));
                    break;
                  case google.ima.AdEvent.Type.STARTED:
                    this.manager.setVolume(this.player.volume);
                    break;
                  case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                    this.player.ended
                      ? this.loadAds()
                      : this.loader.contentComplete();
                    break;
                  case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                    this.pauseContent();
                    break;
                  case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                    this.pollCountdown(), this.resumeContent();
                    break;
                  case google.ima.AdEvent.Type.LOG:
                    a.adError &&
                      this.player.debug.warn(
                        "Non-fatal ad error: ".concat(a.adError.getMessage())
                      );
                }
              },
            },
            {
              key: "onAdError",
              value: function (e) {
                this.cancel(), this.player.debug.warn("Ads error", e);
              },
            },
            {
              key: "listeners",
              value: function () {
                var e,
                  t = this,
                  i = this.player.elements.container;
                this.player.on("canplay", function () {
                  t.addCuePoints();
                }),
                  this.player.on("ended", function () {
                    t.loader.contentComplete();
                  }),
                  this.player.on("timeupdate", function () {
                    e = t.player.currentTime;
                  }),
                  this.player.on("seeked", function () {
                    var i = t.player.currentTime;
                    ae(t.cuePoints) ||
                      t.cuePoints.forEach(function (n, a) {
                        e < n &&
                          n < i &&
                          (t.manager.discardAdBreak(),
                          t.cuePoints.splice(a, 1));
                      });
                  }),
                  window.addEventListener("resize", function () {
                    t.manager &&
                      t.manager.resize(
                        i.offsetWidth,
                        i.offsetHeight,
                        google.ima.ViewMode.NORMAL
                      );
                  });
              },
            },
            {
              key: "play",
              value: function () {
                var e = this,
                  t = this.player.elements.container;
                this.managerPromise || this.resumeContent(),
                  this.managerPromise
                    .then(function () {
                      e.manager.setVolume(e.player.volume),
                        e.elements.displayContainer.initialize();
                      try {
                        e.initialized ||
                          (e.manager.init(
                            t.offsetWidth,
                            t.offsetHeight,
                            google.ima.ViewMode.NORMAL
                          ),
                          e.manager.start()),
                          (e.initialized = !0);
                      } catch (t) {
                        e.onAdError(t);
                      }
                    })
                    .catch(function () {});
              },
            },
            {
              key: "resumeContent",
              value: function () {
                (this.elements.container.style.zIndex = ""),
                  (this.playing = !1),
                  qe(this.player.media.play());
              },
            },
            {
              key: "pauseContent",
              value: function () {
                (this.elements.container.style.zIndex = 3),
                  (this.playing = !0),
                  this.player.media.pause();
              },
            },
            {
              key: "cancel",
              value: function () {
                this.initialized && this.resumeContent(),
                  this.trigger("error"),
                  this.loadAds();
              },
            },
            {
              key: "loadAds",
              value: function () {
                var e = this;
                this.managerPromise
                  .then(function () {
                    e.manager && e.manager.destroy(),
                      (e.managerPromise = new Promise(function (t) {
                        e.on("loaded", t), e.player.debug.log(e.manager);
                      })),
                      (e.initialized = !1),
                      e.requestAds();
                  })
                  .catch(function () {});
              },
            },
            {
              key: "trigger",
              value: function (e) {
                for (
                  var t = this,
                    i = arguments.length,
                    n = new Array(i > 1 ? i - 1 : 0),
                    a = 1;
                  a < i;
                  a++
                )
                  n[a - 1] = arguments[a];
                var s = this.events[e];
                $(s) &&
                  s.forEach(function (e) {
                    X(e) && e.apply(t, n);
                  });
              },
            },
            {
              key: "on",
              value: function (e, t) {
                return (
                  $(this.events[e]) || (this.events[e] = []),
                  this.events[e].push(t),
                  this
                );
              },
            },
            {
              key: "startSafetyTimer",
              value: function (e, t) {
                var i = this;
                this.player.debug.log("Safety timer invoked from: ".concat(t)),
                  (this.safetyTimer = setTimeout(function () {
                    i.cancel(), i.clearSafetyTimer("startSafetyTimer()");
                  }, e));
              },
            },
            {
              key: "clearSafetyTimer",
              value: function (e) {
                W(this.safetyTimer) ||
                  (this.player.debug.log(
                    "Safety timer cleared from: ".concat(e)
                  ),
                  clearTimeout(this.safetyTimer),
                  (this.safetyTimer = null));
              },
            },
            {
              key: "enabled",
              get: function () {
                var e = this.config;
                return (
                  this.player.isHTML5 &&
                  this.player.isVideo &&
                  e.enabled &&
                  (!ae(e.publisherId) || ne(e.tagUrl))
                );
              },
            },
            {
              key: "tagUrl",
              get: function () {
                var e = this.config;
                if (ne(e.tagUrl)) return e.tagUrl;
                var t = {
                  AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                  AV_CHANNELID: "5a0458dc28a06145e4519d21",
                  AV_URL: window.location.hostname,
                  cb: Date.now(),
                  AV_WIDTH: 640,
                  AV_HEIGHT: 480,
                  AV_CDIM2: e.publisherId,
                };
                return ""
                  .concat("https://go.aniview.com/api/adserver6/vast/", "?")
                  .concat(st(t));
              },
            },
          ]),
          t
        );
      })(),
      Nt = function (e, t) {
        var i = {};
        return (
          e > t.width / t.height
            ? ((i.width = t.width), (i.height = (1 / e) * t.width))
            : ((i.height = t.height), (i.width = e * t.height)),
          i
        );
      },
      Mt = (function () {
        function t(i) {
          e(this, t),
            (this.player = i),
            (this.thumbnails = []),
            (this.loaded = !1),
            (this.lastMouseMoveTime = Date.now()),
            (this.mouseDown = !1),
            (this.loadedImages = []),
            (this.elements = { thumb: {}, scrubbing: {} }),
            this.load();
        }
        return (
          i(t, [
            {
              key: "load",
              value: function () {
                var e = this;
                this.player.elements.display.seekTooltip &&
                  (this.player.elements.display.seekTooltip.hidden =
                    this.enabled),
                  this.enabled &&
                    this.getThumbnails().then(function () {
                      e.enabled &&
                        (e.render(),
                        e.determineContainerAutoSizing(),
                        (e.loaded = !0));
                    });
              },
            },
            {
              key: "getThumbnails",
              value: function () {
                var e = this;
                return new Promise(function (t) {
                  var i = e.player.config.previewThumbnails.src;
                  if (ae(i))
                    throw new Error(
                      "Missing previewThumbnails.src config attribute"
                    );
                  var n = function () {
                    e.thumbnails.sort(function (e, t) {
                      return e.height - t.height;
                    }),
                      e.player.debug.log("Preview thumbnails", e.thumbnails),
                      t();
                  };
                  if (X(i))
                    i(function (t) {
                      (e.thumbnails = t), n();
                    });
                  else {
                    var a = (Y(i) ? [i] : i).map(function (t) {
                      return e.getThumbnail(t);
                    });
                    Promise.all(a).then(n);
                  }
                });
              },
            },
            {
              key: "getThumbnail",
              value: function (e) {
                var t = this;
                return new Promise(function (i) {
                  Je(e).then(function (n) {
                    var a,
                      s,
                      r = {
                        frames:
                          ((a = n),
                          (s = []),
                          a.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
                            var t = {};
                            e.split(/\r\n|\n|\r/).forEach(function (e) {
                              if (K(t.startTime)) {
                                if (!ae(e.trim()) && ae(t.text)) {
                                  var i = e.trim().split("#xywh="),
                                    n = o(i, 1);
                                  if (((t.text = n[0]), i[1])) {
                                    var a = o(i[1].split(","), 4);
                                    (t.x = a[0]),
                                      (t.y = a[1]),
                                      (t.w = a[2]),
                                      (t.h = a[3]);
                                  }
                                }
                              } else {
                                var s = e.match(
                                  /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                                );
                                s &&
                                  ((t.startTime =
                                    60 * Number(s[1] || 0) * 60 +
                                    60 * Number(s[2]) +
                                    Number(s[3]) +
                                    Number("0.".concat(s[4]))),
                                  (t.endTime =
                                    60 * Number(s[6] || 0) * 60 +
                                    60 * Number(s[7]) +
                                    Number(s[8]) +
                                    Number("0.".concat(s[9]))));
                              }
                            }),
                              t.text && s.push(t);
                          }),
                          s),
                        height: null,
                        urlPrefix: "",
                      };
                    r.frames[0].text.startsWith("/") ||
                      r.frames[0].text.startsWith("http://") ||
                      r.frames[0].text.startsWith("https://") ||
                      (r.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                    var l = new Image();
                    (l.onload = function () {
                      (r.height = l.naturalHeight),
                        (r.width = l.naturalWidth),
                        t.thumbnails.push(r),
                        i();
                    }),
                      (l.src = r.urlPrefix + r.frames[0].text);
                  });
                });
              },
            },
            {
              key: "startMove",
              value: function (e) {
                if (
                  this.loaded &&
                  Z(e) &&
                  ["touchmove", "mousemove"].includes(e.type) &&
                  this.player.media.duration
                ) {
                  if ("touchmove" === e.type)
                    this.seekTime =
                      this.player.media.duration *
                      (this.player.elements.inputs.seek.value / 100);
                  else {
                    var t =
                        this.player.elements.progress.getBoundingClientRect(),
                      i = (100 / t.width) * (e.pageX - t.left);
                    (this.seekTime = this.player.media.duration * (i / 100)),
                      this.seekTime < 0 && (this.seekTime = 0),
                      this.seekTime > this.player.media.duration - 1 &&
                        (this.seekTime = this.player.media.duration - 1),
                      (this.mousePosX = e.pageX),
                      (this.elements.thumb.time.innerText = it(this.seekTime));
                  }
                  this.showImageAtCurrentTime();
                }
              },
            },
            {
              key: "endMove",
              value: function () {
                this.toggleThumbContainer(!1, !0);
              },
            },
            {
              key: "startScrubbing",
              value: function (e) {
                (W(e.button) || !1 === e.button || 0 === e.button) &&
                  ((this.mouseDown = !0),
                  this.player.media.duration &&
                    (this.toggleScrubbingContainer(!0),
                    this.toggleThumbContainer(!1, !0),
                    this.showImageAtCurrentTime()));
              },
            },
            {
              key: "endScrubbing",
              value: function () {
                var e = this;
                (this.mouseDown = !1),
                  Math.ceil(this.lastTime) ===
                  Math.ceil(this.player.media.currentTime)
                    ? this.toggleScrubbingContainer(!1)
                    : Le.call(
                        this.player,
                        this.player.media,
                        "timeupdate",
                        function () {
                          e.mouseDown || e.toggleScrubbingContainer(!1);
                        }
                      );
              },
            },
            {
              key: "listeners",
              value: function () {
                var e = this;
                this.player.on("play", function () {
                  e.toggleThumbContainer(!1, !0);
                }),
                  this.player.on("seeked", function () {
                    e.toggleThumbContainer(!1);
                  }),
                  this.player.on("timeupdate", function () {
                    e.lastTime = e.player.media.currentTime;
                  });
              },
            },
            {
              key: "render",
              value: function () {
                (this.elements.thumb.container = he("div", {
                  class:
                    this.player.config.classNames.previewThumbnails
                      .thumbContainer,
                })),
                  (this.elements.thumb.imageContainer = he("div", {
                    class:
                      this.player.config.classNames.previewThumbnails
                        .imageContainer,
                  })),
                  this.elements.thumb.container.appendChild(
                    this.elements.thumb.imageContainer
                  );
                var e = he("div", {
                  class:
                    this.player.config.classNames.previewThumbnails
                      .timeContainer,
                });
                (this.elements.thumb.time = he("span", {}, "00:00")),
                  e.appendChild(this.elements.thumb.time),
                  this.elements.thumb.container.appendChild(e),
                  G(this.player.elements.progress) &&
                    this.player.elements.progress.appendChild(
                      this.elements.thumb.container
                    ),
                  (this.elements.scrubbing.container = he("div", {
                    class:
                      this.player.config.classNames.previewThumbnails
                        .scrubbingContainer,
                  })),
                  this.player.elements.wrapper.appendChild(
                    this.elements.scrubbing.container
                  );
              },
            },
            {
              key: "destroy",
              value: function () {
                this.elements.thumb.container &&
                  this.elements.thumb.container.remove(),
                  this.elements.scrubbing.container &&
                    this.elements.scrubbing.container.remove();
              },
            },
            {
              key: "showImageAtCurrentTime",
              value: function () {
                var e = this;
                this.mouseDown
                  ? this.setScrubbingContainerSize()
                  : this.setThumbContainerSizeAndPos();
                var t = this.thumbnails[0].frames.findIndex(function (t) {
                    return e.seekTime >= t.startTime && e.seekTime <= t.endTime;
                  }),
                  i = t >= 0,
                  n = 0;
                this.mouseDown || this.toggleThumbContainer(i),
                  i &&
                    (this.thumbnails.forEach(function (i, a) {
                      e.loadedImages.includes(i.frames[t].text) && (n = a);
                    }),
                    t !== this.showingThumb &&
                      ((this.showingThumb = t), this.loadImage(n)));
              },
            },
            {
              key: "loadImage",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  i = this.showingThumb,
                  n = this.thumbnails[t],
                  a = n.urlPrefix,
                  s = n.frames[i],
                  r = n.frames[i].text,
                  o = a + r;
                if (
                  this.currentImageElement &&
                  this.currentImageElement.dataset.filename === r
                )
                  this.showImage(this.currentImageElement, s, t, i, r, !1),
                    (this.currentImageElement.dataset.index = i),
                    this.removeOldImages(this.currentImageElement);
                else {
                  this.loadingImage &&
                    this.usingSprites &&
                    (this.loadingImage.onload = null);
                  var l = new Image();
                  (l.src = o),
                    (l.dataset.index = i),
                    (l.dataset.filename = r),
                    (this.showingThumbFilename = r),
                    this.player.debug.log("Loading image: ".concat(o)),
                    (l.onload = function () {
                      return e.showImage(l, s, t, i, r, !0);
                    }),
                    (this.loadingImage = l),
                    this.removeOldImages(l);
                }
              },
            },
            {
              key: "showImage",
              value: function (e, t, i, n, a) {
                var s =
                  !(arguments.length > 5 && void 0 !== arguments[5]) ||
                  arguments[5];
                this.player.debug.log(
                  "Showing thumb: "
                    .concat(a, ". num: ")
                    .concat(n, ". qual: ")
                    .concat(i, ". newimg: ")
                    .concat(s)
                ),
                  this.setImageSizeAndOffset(e, t),
                  s &&
                    (this.currentImageContainer.appendChild(e),
                    (this.currentImageElement = e),
                    this.loadedImages.includes(a) || this.loadedImages.push(a)),
                  this.preloadNearby(n, !0)
                    .then(this.preloadNearby(n, !1))
                    .then(this.getHigherQuality(i, e, t, a));
              },
            },
            {
              key: "removeOldImages",
              value: function (e) {
                var t = this;
                Array.from(this.currentImageContainer.children).forEach(
                  function (i) {
                    if ("img" === i.tagName.toLowerCase()) {
                      var n = t.usingSprites ? 500 : 1e3;
                      if (
                        i.dataset.index !== e.dataset.index &&
                        !i.dataset.deleting
                      ) {
                        i.dataset.deleting = !0;
                        var a = t.currentImageContainer;
                        setTimeout(function () {
                          a.removeChild(i),
                            t.player.debug.log(
                              "Removing thumb: ".concat(i.dataset.filename)
                            );
                        }, n);
                      }
                    }
                  }
                );
              },
            },
            {
              key: "preloadNearby",
              value: function (e) {
                var t = this,
                  i =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return new Promise(function (n) {
                  setTimeout(function () {
                    var a = t.thumbnails[0].frames[e].text;
                    if (t.showingThumbFilename === a) {
                      var s;
                      s = i
                        ? t.thumbnails[0].frames.slice(e)
                        : t.thumbnails[0].frames.slice(0, e).reverse();
                      var r = !1;
                      s.forEach(function (e) {
                        var i = e.text;
                        if (i !== a && !t.loadedImages.includes(i)) {
                          (r = !0),
                            t.player.debug.log(
                              "Preloading thumb filename: ".concat(i)
                            );
                          var s = t.thumbnails[0].urlPrefix + i,
                            o = new Image();
                          (o.src = s),
                            (o.onload = function () {
                              t.player.debug.log(
                                "Preloaded thumb filename: ".concat(i)
                              ),
                                t.loadedImages.includes(i) ||
                                  t.loadedImages.push(i),
                                n();
                            });
                        }
                      }),
                        r || n();
                    }
                  }, 300);
                });
              },
            },
            {
              key: "getHigherQuality",
              value: function (e, t, i, n) {
                var a = this;
                if (e < this.thumbnails.length - 1) {
                  var s = t.naturalHeight;
                  this.usingSprites && (s = i.h),
                    s < this.thumbContainerHeight &&
                      setTimeout(function () {
                        a.showingThumbFilename === n &&
                          (a.player.debug.log(
                            "Showing higher quality thumb for: ".concat(n)
                          ),
                          a.loadImage(e + 1));
                      }, 300);
                }
              },
            },
            {
              key: "toggleThumbContainer",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  i =
                    this.player.config.classNames.previewThumbnails
                      .thumbContainerShown;
                this.elements.thumb.container.classList.toggle(i, e),
                  !e &&
                    t &&
                    ((this.showingThumb = null),
                    (this.showingThumbFilename = null));
              },
            },
            {
              key: "toggleScrubbingContainer",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t =
                    this.player.config.classNames.previewThumbnails
                      .scrubbingContainerShown;
                this.elements.scrubbing.container.classList.toggle(t, e),
                  e ||
                    ((this.showingThumb = null),
                    (this.showingThumbFilename = null));
              },
            },
            {
              key: "determineContainerAutoSizing",
              value: function () {
                (this.elements.thumb.imageContainer.clientHeight > 20 ||
                  this.elements.thumb.imageContainer.clientWidth > 20) &&
                  (this.sizeSpecifiedInCSS = !0);
              },
            },
            {
              key: "setThumbContainerSizeAndPos",
              value: function () {
                if (this.sizeSpecifiedInCSS) {
                  if (
                    this.elements.thumb.imageContainer.clientHeight > 20 &&
                    this.elements.thumb.imageContainer.clientWidth < 20
                  ) {
                    var e = Math.floor(
                      this.elements.thumb.imageContainer.clientHeight *
                        this.thumbAspectRatio
                    );
                    this.elements.thumb.imageContainer.style.width = "".concat(
                      e,
                      "px"
                    );
                  } else if (
                    this.elements.thumb.imageContainer.clientHeight < 20 &&
                    this.elements.thumb.imageContainer.clientWidth > 20
                  ) {
                    var t = Math.floor(
                      this.elements.thumb.imageContainer.clientWidth /
                        this.thumbAspectRatio
                    );
                    this.elements.thumb.imageContainer.style.height = "".concat(
                      t,
                      "px"
                    );
                  }
                } else {
                  var i = Math.floor(
                    this.thumbContainerHeight * this.thumbAspectRatio
                  );
                  (this.elements.thumb.imageContainer.style.height = "".concat(
                    this.thumbContainerHeight,
                    "px"
                  )),
                    (this.elements.thumb.imageContainer.style.width = "".concat(
                      i,
                      "px"
                    ));
                }
                this.setThumbContainerPos();
              },
            },
            {
              key: "setThumbContainerPos",
              value: function () {
                var e = this.player.elements.progress.getBoundingClientRect(),
                  t = this.player.elements.container.getBoundingClientRect(),
                  i = this.elements.thumb.container,
                  n = t.left - e.left + 10,
                  a = t.right - e.left - i.clientWidth - 10,
                  s = this.mousePosX - e.left - i.clientWidth / 2;
                s < n && (s = n),
                  s > a && (s = a),
                  (i.style.left = "".concat(s, "px"));
              },
            },
            {
              key: "setScrubbingContainerSize",
              value: function () {
                var e = Nt(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight,
                  }),
                  t = e.width,
                  i = e.height;
                (this.elements.scrubbing.container.style.width = "".concat(
                  t,
                  "px"
                )),
                  (this.elements.scrubbing.container.style.height = "".concat(
                    i,
                    "px"
                  ));
              },
            },
            {
              key: "setImageSizeAndOffset",
              value: function (e, t) {
                if (this.usingSprites) {
                  var i = this.thumbContainerHeight / t.h;
                  (e.style.height = "".concat(e.naturalHeight * i, "px")),
                    (e.style.width = "".concat(e.naturalWidth * i, "px")),
                    (e.style.left = "-".concat(t.x * i, "px")),
                    (e.style.top = "-".concat(t.y * i, "px"));
                }
              },
            },
            {
              key: "enabled",
              get: function () {
                return (
                  this.player.isHTML5 &&
                  this.player.isVideo &&
                  this.player.config.previewThumbnails.enabled
                );
              },
            },
            {
              key: "currentImageContainer",
              get: function () {
                return this.mouseDown
                  ? this.elements.scrubbing.container
                  : this.elements.thumb.imageContainer;
              },
            },
            {
              key: "usingSprites",
              get: function () {
                return Object.keys(this.thumbnails[0].frames[0]).includes("w");
              },
            },
            {
              key: "thumbAspectRatio",
              get: function () {
                return this.usingSprites
                  ? this.thumbnails[0].frames[0].w /
                      this.thumbnails[0].frames[0].h
                  : this.thumbnails[0].width / this.thumbnails[0].height;
              },
            },
            {
              key: "thumbContainerHeight",
              get: function () {
                return this.mouseDown
                  ? Nt(this.thumbAspectRatio, {
                      width: this.player.media.clientWidth,
                      height: this.player.media.clientHeight,
                    }).height
                  : this.sizeSpecifiedInCSS
                  ? this.elements.thumb.imageContainer.clientHeight
                  : Math.floor(
                      this.player.media.clientWidth / this.thumbAspectRatio / 4
                    );
              },
            },
            {
              key: "currentImageElement",
              get: function () {
                return this.mouseDown
                  ? this.currentScrubbingImageElement
                  : this.currentThumbnailImageElement;
              },
              set: function (e) {
                this.mouseDown
                  ? (this.currentScrubbingImageElement = e)
                  : (this.currentThumbnailImageElement = e);
              },
            },
          ]),
          t
        );
      })(),
      xt = {
        insertElements: function (e, t) {
          var i = this;
          Y(t)
            ? pe(e, this.media, { src: t })
            : $(t) &&
              t.forEach(function (t) {
                pe(e, i.media, t);
              });
        },
        change: function (e) {
          var t = this;
          le(e, "sources.length")
            ? (Ve.cancelRequests.call(this),
              this.destroy.call(
                this,
                function () {
                  (t.options.quality = []),
                    me(t.media),
                    (t.media = null),
                    G(t.elements.container) &&
                      t.elements.container.removeAttribute("class");
                  var i = e.sources,
                    n = e.type,
                    a = o(i, 1)[0],
                    s = a.provider,
                    r = void 0 === s ? ut.html5 : s,
                    l = a.src,
                    c = "html5" === r ? n : "div",
                    u = "html5" === r ? {} : { src: l };
                  Object.assign(t, {
                    provider: r,
                    type: n,
                    supported: Ee.check(n, r, t.config.playsinline),
                    media: he(c, u),
                  }),
                    t.elements.container.appendChild(t.media),
                    Q(e.autoplay) && (t.config.autoplay = e.autoplay),
                    t.isHTML5 &&
                      (t.config.crossorigin &&
                        t.media.setAttribute("crossorigin", ""),
                      t.config.autoplay && t.media.setAttribute("autoplay", ""),
                      ae(e.poster) || (t.poster = e.poster),
                      t.config.loop.active && t.media.setAttribute("loop", ""),
                      t.config.muted && t.media.setAttribute("muted", ""),
                      t.config.playsinline &&
                        t.media.setAttribute("playsinline", "")),
                    yt.addStyleHook.call(t),
                    t.isHTML5 && xt.insertElements.call(t, "source", i),
                    (t.config.title = e.title),
                    Pt.setup.call(t),
                    t.isHTML5 &&
                      Object.keys(e).includes("tracks") &&
                      xt.insertElements.call(t, "track", e.tracks),
                    (t.isHTML5 || (t.isEmbed && !t.supported.ui)) &&
                      yt.build.call(t),
                    t.isHTML5 && t.media.load(),
                    ae(e.previewThumbnails) ||
                      (Object.assign(
                        t.config.previewThumbnails,
                        e.previewThumbnails
                      ),
                      t.previewThumbnails &&
                        t.previewThumbnails.loaded &&
                        (t.previewThumbnails.destroy(),
                        (t.previewThumbnails = null)),
                      t.config.previewThumbnails.enabled &&
                        (t.previewThumbnails = new Mt(t))),
                    t.fullscreen.update();
                },
                !0
              ))
            : this.debug.warn("Invalid source format");
        },
      };
    var It,
      Lt = (function () {
        function t(i, n) {
          var a = this;
          if (
            (e(this, t),
            (this.timers = {}),
            (this.ready = !1),
            (this.loading = !1),
            (this.failed = !1),
            (this.touch = Ee.touch),
            (this.media = i),
            Y(this.media) &&
              (this.media = document.querySelectorAll(this.media)),
            ((window.jQuery && this.media instanceof jQuery) ||
              J(this.media) ||
              $(this.media)) &&
              (this.media = this.media[0]),
            (this.config = ce(
              {},
              ot,
              t.defaults,
              n || {},
              (function () {
                try {
                  return JSON.parse(a.media.getAttribute("data-plyr-config"));
                } catch (e) {
                  return {};
                }
              })()
            )),
            (this.elements = {
              container: null,
              fullscreen: null,
              captions: null,
              buttons: {},
              display: {},
              progress: {},
              inputs: {},
              settings: { popup: null, menu: null, panels: {}, buttons: {} },
            }),
            (this.captions = {
              active: null,
              currentTrack: -1,
              meta: new WeakMap(),
            }),
            (this.fullscreen = { active: !1 }),
            (this.options = { speed: [], quality: [] }),
            (this.debug = new mt(this.config.debug)),
            this.debug.log("Config", this.config),
            this.debug.log("Support", Ee),
            !W(this.media) && G(this.media))
          )
            if (this.media.plyr) this.debug.warn("Target already setup");
            else if (this.config.enabled)
              if (Ee.check().api) {
                var s = this.media.cloneNode(!0);
                (s.autoplay = !1), (this.elements.original = s);
                var r = this.media.tagName.toLowerCase(),
                  o = null,
                  l = null;
                switch (r) {
                  case "div":
                    if (((o = this.media.querySelector("iframe")), G(o))) {
                      if (
                        ((l = at(o.getAttribute("src"))),
                        (this.provider = (function (e) {
                          return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                            e
                          )
                            ? ut.youtube
                            : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                                e
                              )
                            ? ut.vimeo
                            : null;
                        })(l.toString())),
                        (this.elements.container = this.media),
                        (this.media = o),
                        (this.elements.container.className = ""),
                        l.search.length)
                      ) {
                        var c = ["1", "true"];
                        c.includes(l.searchParams.get("autoplay")) &&
                          (this.config.autoplay = !0),
                          c.includes(l.searchParams.get("loop")) &&
                            (this.config.loop.active = !0),
                          this.isYouTube
                            ? ((this.config.playsinline = c.includes(
                                l.searchParams.get("playsinline")
                              )),
                              (this.config.youtube.hl =
                                l.searchParams.get("hl")))
                            : (this.config.playsinline = !0);
                      }
                    } else
                      (this.provider = this.media.getAttribute(
                        this.config.attributes.embed.provider
                      )),
                        this.media.removeAttribute(
                          this.config.attributes.embed.provider
                        );
                    if (
                      ae(this.provider) ||
                      !Object.keys(ut).includes(this.provider)
                    )
                      return void this.debug.error(
                        "Setup failed: Invalid provider"
                      );
                    this.type = ht;
                    break;
                  case "video":
                  case "audio":
                    (this.type = r),
                      (this.provider = ut.html5),
                      this.media.hasAttribute("crossorigin") &&
                        (this.config.crossorigin = !0),
                      this.media.hasAttribute("autoplay") &&
                        (this.config.autoplay = !0),
                      (this.media.hasAttribute("playsinline") ||
                        this.media.hasAttribute("webkit-playsinline")) &&
                        (this.config.playsinline = !0),
                      this.media.hasAttribute("muted") &&
                        (this.config.muted = !0),
                      this.media.hasAttribute("loop") &&
                        (this.config.loop.active = !0);
                    break;
                  default:
                    return void this.debug.error(
                      "Setup failed: unsupported type"
                    );
                }
                (this.supported = Ee.check(
                  this.type,
                  this.provider,
                  this.config.playsinline
                )),
                  this.supported.api
                    ? ((this.eventListeners = []),
                      (this.listeners = new vt(this)),
                      (this.storage = new $e(this)),
                      (this.media.plyr = this),
                      G(this.elements.container) ||
                        ((this.elements.container = he("div", { tabindex: 0 })),
                        ue(this.media, this.elements.container)),
                      yt.migrateStyles.call(this),
                      yt.addStyleHook.call(this),
                      Pt.setup.call(this),
                      this.config.debug &&
                        xe.call(
                          this,
                          this.elements.container,
                          this.config.events.join(" "),
                          function (e) {
                            a.debug.log("event: ".concat(e.type));
                          }
                        ),
                      (this.fullscreen = new ft(this)),
                      (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                        yt.build.call(this),
                      this.listeners.container(),
                      this.listeners.global(),
                      this.config.ads.enabled && (this.ads = new Et(this)),
                      this.isHTML5 &&
                        this.config.autoplay &&
                        setTimeout(function () {
                          return qe(a.play());
                        }, 10),
                      (this.lastSeekTime = 0),
                      this.config.previewThumbnails.enabled &&
                        (this.previewThumbnails = new Mt(this)))
                    : this.debug.error("Setup failed: no support");
              } else this.debug.error("Setup failed: no support");
            else this.debug.error("Setup failed: disabled by config");
          else this.debug.error("Setup failed: no suitable element passed");
        }
        return (
          i(
            t,
            [
              {
                key: "play",
                value: function () {
                  var e = this;
                  return X(this.media.play)
                    ? (this.ads &&
                        this.ads.enabled &&
                        this.ads.managerPromise
                          .then(function () {
                            return e.ads.play();
                          })
                          .catch(function () {
                            return qe(e.media.play());
                          }),
                      this.media.play())
                    : null;
                },
              },
              {
                key: "pause",
                value: function () {
                  return this.playing && X(this.media.pause)
                    ? this.media.pause()
                    : null;
                },
              },
              {
                key: "togglePlay",
                value: function (e) {
                  return (Q(e) ? e : !this.playing)
                    ? this.play()
                    : this.pause();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.isHTML5
                    ? (this.pause(), this.restart())
                    : X(this.media.stop) && this.media.stop();
                },
              },
              {
                key: "restart",
                value: function () {
                  this.currentTime = 0;
                },
              },
              {
                key: "rewind",
                value: function (e) {
                  this.currentTime -= K(e) ? e : this.config.seekTime;
                },
              },
              {
                key: "forward",
                value: function (e) {
                  this.currentTime += K(e) ? e : this.config.seekTime;
                },
              },
              {
                key: "increaseVolume",
                value: function (e) {
                  var t = this.media.muted ? 0 : this.volume;
                  this.volume = t + (K(e) ? e : 0);
                },
              },
              {
                key: "decreaseVolume",
                value: function (e) {
                  this.increaseVolume(-e);
                },
              },
              {
                key: "toggleCaptions",
                value: function (e) {
                  rt.toggle.call(this, e, !1);
                },
              },
              {
                key: "airplay",
                value: function () {
                  Ee.airplay && this.media.webkitShowPlaybackTargetPicker();
                },
              },
              {
                key: "toggleControls",
                value: function (e) {
                  if (this.supported.ui && !this.isAudio) {
                    var t = we(
                        this.elements.container,
                        this.config.classNames.hideControls
                      ),
                      i = void 0 === e ? void 0 : !e,
                      n = be(
                        this.elements.container,
                        this.config.classNames.hideControls,
                        i
                      );
                    if (
                      (n &&
                        $(this.config.controls) &&
                        this.config.controls.includes("settings") &&
                        !ae(this.config.settings) &&
                        nt.toggleMenu.call(this, !1),
                      n !== t)
                    ) {
                      var a = n ? "controlshidden" : "controlsshown";
                      Oe.call(this, this.media, a);
                    }
                    return !n;
                  }
                  return !1;
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  xe.call(this, this.elements.container, e, t);
                },
              },
              {
                key: "once",
                value: function (e, t) {
                  Le.call(this, this.elements.container, e, t);
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  Ie(this.elements.container, e, t);
                },
              },
              {
                key: "destroy",
                value: function (e) {
                  var t = this,
                    i =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (this.ready) {
                    var n = function () {
                      (document.body.style.overflow = ""),
                        (t.embed = null),
                        i
                          ? (Object.keys(t.elements).length &&
                              (me(t.elements.buttons.play),
                              me(t.elements.captions),
                              me(t.elements.controls),
                              me(t.elements.wrapper),
                              (t.elements.buttons.play = null),
                              (t.elements.captions = null),
                              (t.elements.controls = null),
                              (t.elements.wrapper = null)),
                            X(e) && e())
                          : (_e.call(t),
                            ge(t.elements.original, t.elements.container),
                            Oe.call(t, t.elements.original, "destroyed", !0),
                            X(e) && e.call(t.elements.original),
                            (t.ready = !1),
                            setTimeout(function () {
                              (t.elements = null), (t.media = null);
                            }, 200));
                    };
                    this.stop(),
                      clearTimeout(this.timers.loading),
                      clearTimeout(this.timers.controls),
                      clearTimeout(this.timers.resized),
                      this.isHTML5
                        ? (yt.toggleNativeControls.call(this, !0), n())
                        : this.isYouTube
                        ? (clearInterval(this.timers.buffering),
                          clearInterval(this.timers.playing),
                          null !== this.embed &&
                            X(this.embed.destroy) &&
                            this.embed.destroy(),
                          n())
                        : this.isVimeo &&
                          (null !== this.embed && this.embed.unload().then(n),
                          setTimeout(n, 200));
                  }
                },
              },
              {
                key: "supports",
                value: function (e) {
                  return Ee.mime.call(this, e);
                },
              },
              {
                key: "isHTML5",
                get: function () {
                  return this.provider === ut.html5;
                },
              },
              {
                key: "isEmbed",
                get: function () {
                  return this.isYouTube || this.isVimeo;
                },
              },
              {
                key: "isYouTube",
                get: function () {
                  return this.provider === ut.youtube;
                },
              },
              {
                key: "isVimeo",
                get: function () {
                  return this.provider === ut.vimeo;
                },
              },
              {
                key: "isVideo",
                get: function () {
                  return this.type === ht;
                },
              },
              {
                key: "isAudio",
                get: function () {
                  return this.type === dt;
                },
              },
              {
                key: "playing",
                get: function () {
                  return Boolean(this.ready && !this.paused && !this.ended);
                },
              },
              {
                key: "paused",
                get: function () {
                  return Boolean(this.media.paused);
                },
              },
              {
                key: "stopped",
                get: function () {
                  return Boolean(this.paused && 0 === this.currentTime);
                },
              },
              {
                key: "ended",
                get: function () {
                  return Boolean(this.media.ended);
                },
              },
              {
                key: "currentTime",
                set: function (e) {
                  if (this.duration) {
                    var t = K(e) && e > 0;
                    (this.media.currentTime = t
                      ? Math.min(e, this.duration)
                      : 0),
                      this.debug.log(
                        "Seeking to ".concat(this.currentTime, " seconds")
                      );
                  }
                },
                get: function () {
                  return Number(this.media.currentTime);
                },
              },
              {
                key: "buffered",
                get: function () {
                  var e = this.media.buffered;
                  return K(e)
                    ? e
                    : e && e.length && this.duration > 0
                    ? e.end(0) / this.duration
                    : 0;
                },
              },
              {
                key: "seeking",
                get: function () {
                  return Boolean(this.media.seeking);
                },
              },
              {
                key: "duration",
                get: function () {
                  var e = parseFloat(this.config.duration),
                    t = (this.media || {}).duration,
                    i = K(t) && t !== 1 / 0 ? t : 0;
                  return e || i;
                },
              },
              {
                key: "volume",
                set: function (e) {
                  var t = e;
                  Y(t) && (t = Number(t)),
                    K(t) || (t = this.storage.get("volume")),
                    K(t) || (t = this.config.volume),
                    t > 1 && (t = 1),
                    t < 0 && (t = 0),
                    (this.config.volume = t),
                    (this.media.volume = t),
                    !ae(e) && this.muted && t > 0 && (this.muted = !1);
                },
                get: function () {
                  return Number(this.media.volume);
                },
              },
              {
                key: "muted",
                set: function (e) {
                  var t = e;
                  Q(t) || (t = this.storage.get("muted")),
                    Q(t) || (t = this.config.muted),
                    (this.config.muted = t),
                    (this.media.muted = t);
                },
                get: function () {
                  return Boolean(this.media.muted);
                },
              },
              {
                key: "hasAudio",
                get: function () {
                  return (
                    !this.isHTML5 ||
                    !!this.isAudio ||
                    Boolean(this.media.mozHasAudio) ||
                    Boolean(this.media.webkitAudioDecodedByteCount) ||
                    Boolean(
                      this.media.audioTracks && this.media.audioTracks.length
                    )
                  );
                },
              },
              {
                key: "speed",
                set: function (e) {
                  var t = this,
                    i = null;
                  K(e) && (i = e),
                    K(i) || (i = this.storage.get("speed")),
                    K(i) || (i = this.config.speed.selected);
                  var n = this.minimumSpeed,
                    a = this.maximumSpeed;
                  (i = (function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 255;
                    return Math.min(Math.max(e, t), i);
                  })(i, n, a)),
                    (this.config.speed.selected = i),
                    setTimeout(function () {
                      t.media.playbackRate = i;
                    }, 0);
                },
                get: function () {
                  return Number(this.media.playbackRate);
                },
              },
              {
                key: "minimumSpeed",
                get: function () {
                  return this.isYouTube
                    ? Math.min.apply(Math, l(this.options.speed))
                    : this.isVimeo
                    ? 0.5
                    : 0.0625;
                },
              },
              {
                key: "maximumSpeed",
                get: function () {
                  return this.isYouTube
                    ? Math.max.apply(Math, l(this.options.speed))
                    : this.isVimeo
                    ? 2
                    : 16;
                },
              },
              {
                key: "quality",
                set: function (e) {
                  var t = this.config.quality,
                    i = this.options.quality;
                  if (i.length) {
                    var n = [
                        !ae(e) && Number(e),
                        this.storage.get("quality"),
                        t.selected,
                        t.default,
                      ].find(K),
                      a = !0;
                    if (!i.includes(n)) {
                      var s = (function (e, t) {
                        return $(e) && e.length
                          ? e.reduce(function (e, i) {
                              return Math.abs(i - t) < Math.abs(e - t) ? i : e;
                            })
                          : null;
                      })(i, n);
                      this.debug.warn(
                        "Unsupported quality option: "
                          .concat(n, ", using ")
                          .concat(s, " instead")
                      ),
                        (n = s),
                        (a = !1);
                    }
                    (t.selected = n),
                      (this.media.quality = n),
                      a && this.storage.set({ quality: n });
                  }
                },
                get: function () {
                  return this.media.quality;
                },
              },
              {
                key: "loop",
                set: function (e) {
                  var t = Q(e) ? e : this.config.loop.active;
                  (this.config.loop.active = t), (this.media.loop = t);
                },
                get: function () {
                  return Boolean(this.media.loop);
                },
              },
              {
                key: "source",
                set: function (e) {
                  xt.change.call(this, e);
                },
                get: function () {
                  return this.media.currentSrc;
                },
              },
              {
                key: "download",
                get: function () {
                  var e = this.config.urls.download;
                  return ne(e) ? e : this.source;
                },
                set: function (e) {
                  ne(e) &&
                    ((this.config.urls.download = e),
                    nt.setDownloadUrl.call(this));
                },
              },
              {
                key: "poster",
                set: function (e) {
                  this.isVideo
                    ? yt.setPoster.call(this, e, !1).catch(function () {})
                    : this.debug.warn("Poster can only be set for video");
                },
                get: function () {
                  return this.isVideo
                    ? this.media.getAttribute("poster") ||
                        this.media.getAttribute("data-poster")
                    : null;
                },
              },
              {
                key: "ratio",
                get: function () {
                  if (!this.isVideo) return null;
                  var e = He(Fe.call(this));
                  return $(e) ? e.join(":") : e;
                },
                set: function (e) {
                  this.isVideo
                    ? Y(e) && De(e)
                      ? ((this.config.ratio = e), Re.call(this))
                      : this.debug.error(
                          "Invalid aspect ratio specified (".concat(e, ")")
                        )
                    : this.debug.warn("Aspect ratio can only be set for video");
                },
              },
              {
                key: "autoplay",
                set: function (e) {
                  var t = Q(e) ? e : this.config.autoplay;
                  this.config.autoplay = t;
                },
                get: function () {
                  return Boolean(this.config.autoplay);
                },
              },
              {
                key: "currentTrack",
                set: function (e) {
                  rt.set.call(this, e, !1);
                },
                get: function () {
                  var e = this.captions,
                    t = e.toggled,
                    i = e.currentTrack;
                  return t ? i : -1;
                },
              },
              {
                key: "language",
                set: function (e) {
                  rt.setLanguage.call(this, e, !1);
                },
                get: function () {
                  return (rt.getCurrentTrack.call(this) || {}).language;
                },
              },
              {
                key: "pip",
                set: function (e) {
                  if (Ee.pip) {
                    var t = Q(e) ? e : !this.pip;
                    X(this.media.webkitSetPresentationMode) &&
                      this.media.webkitSetPresentationMode(t ? lt : ct),
                      X(this.media.requestPictureInPicture) &&
                        (!this.pip && t
                          ? this.media.requestPictureInPicture()
                          : this.pip && !t && document.exitPictureInPicture());
                  }
                },
                get: function () {
                  return Ee.pip
                    ? ae(this.media.webkitPresentationMode)
                      ? this.media === document.pictureInPictureElement
                      : this.media.webkitPresentationMode === lt
                    : null;
                },
              },
            ],
            [
              {
                key: "supported",
                value: function (e, t, i) {
                  return Ee.check(e, t, i);
                },
              },
              {
                key: "loadSprite",
                value: function (e, t) {
                  return Ge(e, t);
                },
              },
              {
                key: "setup",
                value: function (e) {
                  var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = null;
                  return (
                    Y(e)
                      ? (n = Array.from(document.querySelectorAll(e)))
                      : J(e)
                      ? (n = Array.from(e))
                      : $(e) && (n = e.filter(G)),
                    ae(n)
                      ? null
                      : n.map(function (e) {
                          return new t(e, i);
                        })
                  );
                },
              },
            ]
          ),
          t
        );
      })();
    return (Lt.defaults = ((It = ot), JSON.parse(JSON.stringify(It)))), Lt;
  });
//# sourceMappingURL=plyr.js.map

!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((n = n || self).LazyLoad = t());
})(this, function () {
  "use strict";
  function n() {
    return (n =
      Object.assign ||
      function (n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t];
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
        }
        return n;
      }).apply(this, arguments);
  }
  var t = "undefined" != typeof window,
    e =
      (t && !("onscroll" in window)) ||
      ("undefined" != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    i = t && "IntersectionObserver" in window,
    a = t && "classList" in document.createElement("p"),
    o = t && window.devicePixelRatio > 1,
    r = {
      elements_selector: ".lazy",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_bg_hidpi: "bg-hidpi",
      data_bg_multi: "bg-multi",
      data_bg_multi_hidpi: "bg-multi-hidpi",
      data_poster: "poster",
      class_applied: "applied",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      unobserve_completed: !0,
      unobserve_entered: !1,
      cancel_on_exit: !0,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: !1,
    },
    c = function (t) {
      return n({}, r, t);
    },
    l = function (n, t) {
      var e,
        i = new n(t);
      try {
        e = new CustomEvent("LazyLoad::Initialized", {
          detail: { instance: i },
        });
      } catch (n) {
        (e = document.createEvent("CustomEvent")).initCustomEvent(
          "LazyLoad::Initialized",
          !1,
          !1,
          { instance: i }
        );
      }
      window.dispatchEvent(e);
    },
    s = function (n, t) {
      return n.getAttribute("data-" + t);
    },
    u = function (n, t, e) {
      var i = "data-" + t;
      null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
    },
    d = function (n) {
      return s(n, "ll-status");
    },
    f = function (n, t) {
      return u(n, "ll-status", t);
    },
    _ = function (n) {
      return f(n, null);
    },
    g = function (n) {
      return null === d(n);
    },
    v = function (n) {
      return "native" === d(n);
    },
    p = ["loading", "loaded", "applied", "error"],
    b = function (n, t, e, i) {
      n && (void 0 === i ? (void 0 === e ? n(t) : n(t, e)) : n(t, e, i));
    },
    h = function (n, t) {
      a ? n.classList.add(t) : (n.className += (n.className ? " " : "") + t);
    },
    m = function (n, t) {
      a
        ? n.classList.remove(t)
        : (n.className = n.className
            .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, ""));
    },
    E = function (n) {
      return n.llTempImage;
    },
    I = function (n, t) {
      if (t) {
        var e = t._observer;
        e && e.unobserve(n);
      }
    },
    y = function (n, t) {
      n && (n.loadingCount += t);
    },
    A = function (n, t) {
      n && (n.toLoadCount = t);
    },
    L = function (n) {
      for (var t, e = [], i = 0; (t = n.children[i]); i += 1)
        "SOURCE" === t.tagName && e.push(t);
      return e;
    },
    w = function (n, t, e) {
      e && n.setAttribute(t, e);
    },
    z = function (n, t) {
      n.removeAttribute(t);
    },
    k = function (n) {
      return !!n.llOriginalAttrs;
    },
    O = function (n) {
      if (!k(n)) {
        var t = {};
        (t.src = n.getAttribute("src")),
          (t.srcset = n.getAttribute("srcset")),
          (t.sizes = n.getAttribute("sizes")),
          (n.llOriginalAttrs = t);
      }
    },
    C = function (n) {
      if (k(n)) {
        var t = n.llOriginalAttrs;
        w(n, "src", t.src), w(n, "srcset", t.srcset), w(n, "sizes", t.sizes);
      }
    },
    N = function (n, t) {
      w(n, "sizes", s(n, t.data_sizes)),
        w(n, "srcset", s(n, t.data_srcset)),
        w(n, "src", s(n, t.data_src));
    },
    x = function (n) {
      z(n, "src"), z(n, "srcset"), z(n, "sizes");
    },
    M = function (n, t) {
      var e = n.parentNode;
      e && "PICTURE" === e.tagName && L(e).forEach(t);
    },
    R = function (n, t) {
      L(n).forEach(t);
    },
    G = {
      IMG: function (n, t) {
        M(n, function (n) {
          O(n), N(n, t);
        }),
          O(n),
          N(n, t);
      },
      IFRAME: function (n, t) {
        w(n, "src", s(n, t.data_src));
      },
      VIDEO: function (n, t) {
        R(n, function (n) {
          w(n, "src", s(n, t.data_src));
        }),
          w(n, "poster", s(n, t.data_poster)),
          w(n, "src", s(n, t.data_src)),
          n.load();
      },
    },
    T = function (n, t) {
      var e = G[n.tagName];
      e && e(n, t);
    },
    D = function (n, t, e) {
      y(e, 1),
        h(n, t.class_loading),
        f(n, "loading"),
        b(t.callback_loading, n, e);
    },
    F = {
      IMG: function (n, t) {
        u(n, t.data_src, null),
          u(n, t.data_srcset, null),
          u(n, t.data_sizes, null),
          M(n, function (n) {
            u(n, t.data_srcset, null), u(n, t.data_sizes, null);
          });
      },
      IFRAME: function (n, t) {
        u(n, t.data_src, null);
      },
      VIDEO: function (n, t) {
        u(n, t.data_src, null),
          u(n, t.data_poster, null),
          R(n, function (n) {
            u(n, t.data_src, null);
          });
      },
    },
    V = function (n, t) {
      u(n, t.data_bg_multi, null), u(n, t.data_bg_multi_hidpi, null);
    },
    j = function (n, t) {
      var e = F[n.tagName];
      e
        ? e(n, t)
        : (function (n, t) {
            u(n, t.data_bg, null), u(n, t.data_bg_hidpi, null);
          })(n, t);
    },
    P = ["IMG", "IFRAME", "VIDEO"],
    S = function (n, t) {
      !t ||
        (function (n) {
          return n.loadingCount > 0;
        })(t) ||
        (function (n) {
          return n.toLoadCount > 0;
        })(t) ||
        b(n.callback_finish, t);
    },
    U = function (n, t, e) {
      n.addEventListener(t, e), (n.llEvLisnrs[t] = e);
    },
    $ = function (n, t, e) {
      n.removeEventListener(t, e);
    },
    q = function (n) {
      return !!n.llEvLisnrs;
    },
    H = function (n) {
      if (q(n)) {
        var t = n.llEvLisnrs;
        for (var e in t) {
          var i = t[e];
          $(n, e, i);
        }
        delete n.llEvLisnrs;
      }
    },
    B = function (n, t, e) {
      !(function (n) {
        delete n.llTempImage;
      })(n),
        y(e, -1),
        (function (n) {
          n && (n.toLoadCount -= 1);
        })(e),
        m(n, t.class_loading),
        t.unobserve_completed && I(n, e);
    },
    J = function (n, t, e) {
      var i = E(n) || n;
      q(i) ||
        (function (n, t, e) {
          q(n) || (n.llEvLisnrs = {});
          var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
          U(n, i, t), U(n, "error", e);
        })(
          i,
          function (a) {
            !(function (n, t, e, i) {
              var a = v(t);
              B(t, e, i),
                h(t, e.class_loaded),
                f(t, "loaded"),
                j(t, e),
                b(e.callback_loaded, t, i),
                a || S(e, i);
            })(0, n, t, e),
              H(i);
          },
          function (a) {
            !(function (n, t, e, i) {
              var a = v(t);
              B(t, e, i),
                h(t, e.class_error),
                f(t, "error"),
                b(e.callback_error, t, i),
                a || S(e, i);
            })(0, n, t, e),
              H(i);
          }
        );
    },
    K = function (n, t, e) {
      !(function (n) {
        n.llTempImage = document.createElement("IMG");
      })(n),
        J(n, t, e),
        (function (n, t, e) {
          var i = s(n, t.data_bg),
            a = s(n, t.data_bg_hidpi),
            r = o && a ? a : i;
          r &&
            ((n.style.backgroundImage = 'url("'.concat(r, '")')),
            E(n).setAttribute("src", r),
            D(n, t, e));
        })(n, t, e),
        (function (n, t, e) {
          var i = s(n, t.data_bg_multi),
            a = s(n, t.data_bg_multi_hidpi),
            r = o && a ? a : i;
          r &&
            ((n.style.backgroundImage = r),
            (function (n, t, e) {
              h(n, t.class_applied),
                f(n, "applied"),
                V(n, t),
                t.unobserve_completed && I(n, t),
                b(t.callback_applied, n, e);
            })(n, t, e));
        })(n, t, e);
    },
    Q = function (n, t, e) {
      !(function (n) {
        return P.indexOf(n.tagName) > -1;
      })(n)
        ? K(n, t, e)
        : (function (n, t, e) {
            J(n, t, e), T(n, t), D(n, t, e);
          })(n, t, e);
    },
    W = ["IMG", "IFRAME"],
    X = function (n) {
      return n.use_native && "loading" in HTMLImageElement.prototype;
    },
    Y = function (n, t, e) {
      n.forEach(function (n) {
        return (function (n) {
          return n.isIntersecting || n.intersectionRatio > 0;
        })(n)
          ? (function (n, t, e, i) {
              f(n, "entered"),
                (function (n, t, e) {
                  t.unobserve_entered && I(n, e);
                })(n, e, i),
                b(e.callback_enter, n, t, i),
                (function (n) {
                  return p.indexOf(d(n)) >= 0;
                })(n) || Q(n, e, i);
            })(n.target, n, t, e)
          : (function (n, t, e, i) {
              g(n) ||
                ((function (n, t, e, i) {
                  e.cancel_on_exit &&
                    (function (n) {
                      return "loading" === d(n);
                    })(n) &&
                    "IMG" === n.tagName &&
                    (H(n),
                    (function (n) {
                      M(n, function (n) {
                        x(n);
                      }),
                        x(n);
                    })(n),
                    (function (n) {
                      M(n, function (n) {
                        C(n);
                      }),
                        C(n);
                    })(n),
                    m(n, e.class_loading),
                    y(i, -1),
                    _(n),
                    b(e.callback_cancel, n, t, i));
                })(n, t, e, i),
                b(e.callback_exit, n, t, i));
            })(n.target, n, t, e);
      });
    },
    Z = function (n) {
      return Array.prototype.slice.call(n);
    },
    nn = function (n) {
      return n.container.querySelectorAll(n.elements_selector);
    },
    tn = function (n) {
      return (function (n) {
        return "error" === d(n);
      })(n);
    },
    en = function (n, t) {
      return (function (n) {
        return Z(n).filter(g);
      })(n || nn(t));
    },
    an = function (n, e) {
      var a = c(n);
      (this._settings = a),
        (this.loadingCount = 0),
        (function (n, t) {
          i &&
            !X(n) &&
            (t._observer = new IntersectionObserver(
              function (e) {
                Y(e, n, t);
              },
              (function (n) {
                return {
                  root: n.container === document ? null : n.container,
                  rootMargin: n.thresholds || n.threshold + "px",
                };
              })(n)
            ));
        })(a, this),
        (function (n, e) {
          t &&
            window.addEventListener("online", function () {
              !(function (n, t) {
                var e;
                ((e = nn(n)), Z(e).filter(tn)).forEach(function (t) {
                  m(t, n.class_error), _(t);
                }),
                  t.update();
              })(n, e);
            });
        })(a, this),
        this.update(e);
    };
  return (
    (an.prototype = {
      update: function (n) {
        var t,
          a,
          o = this._settings,
          r = en(n, o);
        A(this, r.length),
          !e && i
            ? X(o)
              ? (function (n, t, e) {
                  n.forEach(function (n) {
                    -1 !== W.indexOf(n.tagName) &&
                      (n.setAttribute("loading", "lazy"),
                      (function (n, t, e) {
                        J(n, t, e), T(n, t), j(n, t), f(n, "native");
                      })(n, t, e));
                  }),
                    A(e, 0);
                })(r, o, this)
              : ((a = r),
                (function (n) {
                  n.disconnect();
                })((t = this._observer)),
                (function (n, t) {
                  t.forEach(function (t) {
                    n.observe(t);
                  });
                })(t, a))
            : this.loadAll(r);
      },
      destroy: function () {
        this._observer && this._observer.disconnect(),
          nn(this._settings).forEach(function (n) {
            delete n.llOriginalAttrs;
          }),
          delete this._observer,
          delete this._settings,
          delete this.loadingCount,
          delete this.toLoadCount;
      },
      loadAll: function (n) {
        var t = this,
          e = this._settings;
        en(n, e).forEach(function (n) {
          I(n, t), Q(n, e, t);
        });
      },
    }),
    (an.load = function (n, t) {
      var e = c(t);
      Q(n, e);
    }),
    (an.resetStatus = function (n) {
      _(n);
    }),
    t &&
      (function (n, t) {
        if (t)
          if (t.length) for (var e, i = 0; (e = t[i]); i += 1) l(n, e);
          else l(n, t);
      })(an, window.lazyLoadOptions),
    an
  );
});

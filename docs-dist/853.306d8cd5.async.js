(self.webpackChunkreact_virtual_keyboard =
  self.webpackChunkreact_virtual_keyboard || []).push([
  [853],
  {
    29253: function (N, C, t) {
      'use strict';
      t.d(C, {
        r: function () {
          return O;
        },
      });
      var e = t(75271),
        A = Object.defineProperty,
        j = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        D = Object.prototype.propertyIsEnumerable,
        z = (I, L, b) =>
          L in I
            ? A(I, L, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: b,
              })
            : (I[L] = b),
        k = (I, L) => {
          for (var b in L || (L = {})) h.call(L, b) && z(I, b, L[b]);
          if (j) for (var b of j(L)) D.call(L, b) && z(I, b, L[b]);
          return I;
        };
      const O = (I) =>
        e.createElement(
          'svg',
          k({ viewBox: '64 64 896 896' }, I),
          e.createElement('path', {
            d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
          }),
        );
      var T =
        'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjwvc3ZnPg==';
    },
    93213: function (N, C, t) {
      'use strict';
      t.r(C),
        t.d(C, {
          default: function () {
            return w;
          },
        });
      var e = t(75271),
        A = Object.defineProperty,
        j = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        D = Object.prototype.propertyIsEnumerable,
        z = (r, n, u) =>
          n in r
            ? A(r, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: u,
              })
            : (r[n] = u),
        k = (r, n) => {
          for (var u in n || (n = {})) h.call(n, u) && z(r, u, n[u]);
          if (j) for (var u of j(n)) D.call(n, u) && z(r, u, n[u]);
          return r;
        };
      const O = (r) =>
        e.createElement(
          'svg',
          k({ viewBox: '64 64 896 896' }, r),
          e.createElement('path', {
            d: 'M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z',
          }),
        );
      var T =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMTIwIDIzMGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em0wIDQyNGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em03ODQgMTQwSDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6bTAtNDI0SDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+',
        I = t(94161),
        L = t(95269),
        b = t(75735),
        x = t(68626),
        g = t(98082),
        y = t(82755),
        a = t(21119),
        v = t(14385),
        M = t(48135),
        E = t(682);
      function P(r, n) {
        return J(r) || R(r, n) || U(r, n) || B();
      }
      function B() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function U(r, n) {
        if (r) {
          if (typeof r == 'string') return V(r, n);
          var u = Object.prototype.toString.call(r).slice(8, -1);
          if (
            (u === 'Object' && r.constructor && (u = r.constructor.name),
            u === 'Map' || u === 'Set')
          )
            return Array.from(r);
          if (
            u === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
          )
            return V(r, n);
        }
      }
      function V(r, n) {
        (n == null || n > r.length) && (n = r.length);
        for (var u = 0, Q = new Array(n); u < n; u++) Q[u] = r[u];
        return Q;
      }
      function R(r, n) {
        var u =
          r == null
            ? null
            : (typeof Symbol != 'undefined' && r[Symbol.iterator]) ||
              r['@@iterator'];
        if (u != null) {
          var Q,
            K,
            X,
            S,
            l = [],
            o = !0,
            f = !1;
          try {
            if (((X = (u = u.call(r)).next), n === 0)) {
              if (Object(u) !== u) return;
              o = !1;
            } else
              for (
                ;
                !(o = (Q = X.call(u)).done) &&
                (l.push(Q.value), l.length !== n);
                o = !0
              );
          } catch (Y) {
            (f = !0), (K = Y);
          } finally {
            try {
              if (!o && u.return != null && ((S = u.return()), Object(S) !== S))
                return;
            } finally {
              if (f) throw K;
            }
          }
          return l;
        }
      }
      function J(r) {
        if (Array.isArray(r)) return r;
      }
      var _ = function () {
          var n = (0, L.YB)(),
            u = (0, L.pC)(),
            Q = (0, L.tx)(),
            K = (0, L.TH)(),
            X = K.hash,
            S = K.pathname,
            l = (0, L.WF)(),
            o = l.loading,
            f = l.hostname,
            Y = (0, e.useState)(!1),
            H = P(Y, 2),
            Z = H[0],
            i = H[1],
            s = (0, L.eL)(),
            c = s.frontmatter,
            F = c.sidebar !== !1 && (Q == null ? void 0 : Q.length) > 0;
          return (
            (0, e.useEffect)(
              function () {
                var W = X.replace('#', '');
                W &&
                  setTimeout(function () {
                    var G = document.getElementById(decodeURIComponent(W));
                    G && (0, I.Z)(G.offsetTop - 80, { maxDuration: 300 });
                  }, 1);
              },
              [o, X],
            ),
            e.createElement(
              'div',
              {
                className: 'dumi-default-doc-layout',
                'data-mobile-sidebar-active': Z || void 0,
                onClick: function () {
                  return i(!1);
                },
              },
              e.createElement(
                L.ql,
                null,
                e.createElement('html', { lang: n.locale.replace(/-.+$/, '') }),
                c.title && e.createElement('title', null, c.title),
                c.title &&
                  e.createElement('meta', {
                    property: 'og:title',
                    content: c.title,
                  }),
                c.description &&
                  e.createElement('meta', {
                    name: 'description',
                    content: c.description,
                  }),
                c.description &&
                  e.createElement('meta', {
                    property: 'og:description',
                    content: c.description,
                  }),
                c.keywords &&
                  e.createElement('meta', {
                    name: 'keywords',
                    content: c.keywords.join(','),
                  }),
                c.keywords &&
                  c.keywords.map(function (W) {
                    return e.createElement('meta', {
                      key: W,
                      property: 'article:tag',
                      content: W,
                    });
                  }),
                f && e.createElement('link', { rel: 'canonical', href: f + S }),
              ),
              e.createElement(a.Z, null),
              e.createElement(v.Z, null),
              e.createElement(g.Z, null),
              F &&
                e.createElement(
                  'div',
                  { className: 'dumi-default-doc-layout-mobile-bar' },
                  e.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'dumi-default-sidebar-btn',
                      onClick: function (G) {
                        G.stopPropagation(),
                          i(function ($) {
                            return !$;
                          });
                      },
                    },
                    e.createElement(O, null),
                    n.formatMessage({ id: 'layout.sidebar.btn' }),
                  ),
                ),
              e.createElement(
                'main',
                null,
                F && e.createElement(M.Z, null),
                e.createElement(
                  b.Z,
                  null,
                  e.createElement('article', null, u),
                  e.createElement(x.Z, null),
                  e.createElement(y.Z, null),
                ),
                c.toc === 'content' &&
                  e.createElement(
                    'div',
                    { className: 'dumi-default-doc-layout-toc-wrapper' },
                    e.createElement('h4', null, 'TABLE OF CONTENTS'),
                    e.createElement(E.Z, null),
                  ),
              ),
            )
          );
        },
        w = _;
    },
    41434: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return g;
        },
      });
      var e = t(95269),
        A = t(75271);
      function j(y, a) {
        return O(y) || k(y, a) || D(y, a) || h();
      }
      function h() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function D(y, a) {
        if (y) {
          if (typeof y == 'string') return z(y, a);
          var v = Object.prototype.toString.call(y).slice(8, -1);
          if (
            (v === 'Object' && y.constructor && (v = y.constructor.name),
            v === 'Map' || v === 'Set')
          )
            return Array.from(y);
          if (
            v === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)
          )
            return z(y, a);
        }
      }
      function z(y, a) {
        (a == null || a > y.length) && (a = y.length);
        for (var v = 0, M = new Array(a); v < a; v++) M[v] = y[v];
        return M;
      }
      function k(y, a) {
        var v =
          y == null
            ? null
            : (typeof Symbol != 'undefined' && y[Symbol.iterator]) ||
              y['@@iterator'];
        if (v != null) {
          var M,
            E,
            P,
            B,
            U = [],
            V = !0,
            R = !1;
          try {
            if (((P = (v = v.call(y)).next), a === 0)) {
              if (Object(v) !== v) return;
              V = !1;
            } else
              for (
                ;
                !(V = (M = P.call(v)).done) &&
                (U.push(M.value), U.length !== a);
                V = !0
              );
          } catch (J) {
            (R = !0), (E = J);
          } finally {
            try {
              if (!V && v.return != null && ((B = v.return()), Object(B) !== B))
                return;
            } finally {
              if (R) throw E;
            }
          }
          return U;
        }
      }
      function O(y) {
        if (Array.isArray(y)) return y;
      }
      var T = function () {
          return A.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            A.createElement('path', {
              d: 'M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z',
            }),
          );
        },
        I = function () {
          return A.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            A.createElement('path', {
              d: 'M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z',
            }),
          );
        },
        L = function () {
          return A.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            A.createElement('path', {
              d: 'M14.595 8a6.595 6.595 0 1 1-13.19 0 6.595 6.595 0 0 1 13.19 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 2.014v11.972A5.986 5.986 0 0 0 8 2.014Z',
            }),
          );
        },
        b = { light: I, dark: T, auto: L },
        x = function () {
          var a = (0, e.WF)(),
            v = a.themeConfig.prefersColor.default,
            M = (0, e.YB)(),
            E = (0, e.OI)(),
            P = j(E, 3),
            B = P[1],
            U = B === void 0 ? v : B,
            V = P[2],
            R = b[U];
          return A.createElement(
            'span',
            {
              className: 'dumi-default-color-switch',
              'data-dumi-tooltip': M.formatMessage({
                id: 'header.color.mode.'.concat(U),
              }),
              'data-dumi-tooltip-bottom': !0,
            },
            R && A.createElement(R, null),
            A.createElement(
              'select',
              {
                onChange: function (_) {
                  return V(_.target.value);
                },
                value: U,
                onClick: function (_) {
                  return _.stopPropagation();
                },
              },
              ['light', 'dark', 'auto'].map(function (J) {
                return A.createElement(
                  'option',
                  { value: J, key: J },
                  M.formatMessage({ id: 'header.color.mode.'.concat(J) }),
                );
              }),
            ),
          );
        },
        g = x;
    },
    48983: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return w;
        },
      });
      var e = t(75271),
        A = Object.defineProperty,
        j = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        D = Object.prototype.propertyIsEnumerable,
        z = (r, n, u) =>
          n in r
            ? A(r, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: u,
              })
            : (r[n] = u),
        k = (r, n) => {
          for (var u in n || (n = {})) h.call(n, u) && z(r, u, n[u]);
          if (j) for (var u of j(n)) D.call(n, u) && z(r, u, n[u]);
          return r;
        };
      const O = (r) =>
        e.createElement(
          'svg',
          k({ viewBox: '64 64 896 896' }, r),
          e.createElement('path', {
            d: 'M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
          }),
        );
      var T =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODcyIDQ3NEgyODYuOWwzNTAuMi0zMDRjNS42LTQuOSAyLjItMTQtNS4yLTE0aC04OC41Yy0zLjkgMC03LjYgMS40LTEwLjUgMy45TDE1NSA0ODcuOGEzMS45NiAzMS45NiAwIDAgMCAwIDQ4LjNMNTM1LjEgODY2YzEuNSAxLjMgMy4zIDIgNS4yIDJoOTEuNWM3LjQgMCAxMC44LTkuMiA1LjItMTRMMjg2LjkgNTUwSDg3MmM0LjQgMCA4LTMuNiA4LTh2LTYwYzAtNC40LTMuNi04LTgtOHoiLz48L3N2Zz4=',
        I = Object.defineProperty,
        L = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        g = (r, n, u) =>
          n in r
            ? I(r, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: u,
              })
            : (r[n] = u),
        y = (r, n) => {
          for (var u in n || (n = {})) b.call(n, u) && g(r, u, n[u]);
          if (L) for (var u of L(n)) x.call(n, u) && g(r, u, n[u]);
          return r;
        };
      const a = (r) =>
        e.createElement(
          'svg',
          y({ viewBox: '64 64 896 896' }, r),
          e.createElement('path', {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
          }),
          e.createElement('path', {
            d: 'M686.7 638.6 544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z',
          }),
        );
      var v =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIvPjxwYXRoIGQ9Ik02ODYuNyA2MzguNiA1NDQuMSA1MzUuNVYyODhjMC00LjQtMy42LTgtOC04SDQ4OGMtNC40IDAtOCAzLjYtOCA4djI3NS40YzAgMi42IDEuMiA1IDMuMyA2LjVsMTY1LjQgMTIwLjZjMy42IDIuNiA4LjYgMS44IDExLjItMS43bDI4LjYtMzljMi42LTMuNyAxLjgtOC43LTEuOC0xMS4yeiIvPjwvc3ZnPg==',
        M = t(91950),
        E = t(95269);
      function P(r, n) {
        return J(r) || R(r, n) || U(r, n) || B();
      }
      function B() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function U(r, n) {
        if (r) {
          if (typeof r == 'string') return V(r, n);
          var u = Object.prototype.toString.call(r).slice(8, -1);
          if (
            (u === 'Object' && r.constructor && (u = r.constructor.name),
            u === 'Map' || u === 'Set')
          )
            return Array.from(r);
          if (
            u === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
          )
            return V(r, n);
        }
      }
      function V(r, n) {
        (n == null || n > r.length) && (n = r.length);
        for (var u = 0, Q = new Array(n); u < n; u++) Q[u] = r[u];
        return Q;
      }
      function R(r, n) {
        var u =
          r == null
            ? null
            : (typeof Symbol != 'undefined' && r[Symbol.iterator]) ||
              r['@@iterator'];
        if (u != null) {
          var Q,
            K,
            X,
            S,
            l = [],
            o = !0,
            f = !1;
          try {
            if (((X = (u = u.call(r)).next), n === 0)) {
              if (Object(u) !== u) return;
              o = !1;
            } else
              for (
                ;
                !(o = (Q = X.call(u)).done) &&
                (l.push(Q.value), l.length !== n);
                o = !0
              );
          } catch (Y) {
            (f = !0), (K = Y);
          } finally {
            try {
              if (!o && u.return != null && ((S = u.return()), Object(S) !== S))
                return;
            } finally {
              if (f) throw K;
            }
          }
          return l;
        }
      }
      function J(r) {
        if (Array.isArray(r)) return r;
      }
      var _ = function () {
          var n = (0, E.TH)(),
            u = n.pathname,
            Q = (0, E.tx)(),
            K = (0, E.WF)(),
            X = K.themeConfig,
            S = (0, E.eL)(),
            l = S.frontmatter,
            o = (0, E.YB)(),
            f = (0, e.useState)(void 0),
            Y = P(f, 2),
            H = Y[0],
            Z = Y[1],
            i = (0, e.useState)(void 0),
            s = P(i, 2),
            c = s[0],
            F = s[1],
            W = (0, e.useState)(''),
            G = P(W, 2),
            $ = G[0],
            oe = G[1],
            ne = (0, e.useState)(''),
            te = P(ne, 2),
            ae = te[0],
            le = te[1],
            re = X.editLink && l.filename,
            ee = X.lastUpdated && l.lastUpdated;
          return (
            (0, e.useLayoutEffect)(
              function () {
                if (Q) {
                  var q = Q.reduce(function (se, Me) {
                      return se.concat(Me.children);
                    }, []),
                    ce = q.findIndex(function (se) {
                      return se.link === u;
                    });
                  Z(q[ce - 1]), F(q[ce + 1]);
                }
              },
              [u, Q],
            ),
            (0, e.useLayoutEffect)(
              function () {
                ee &&
                  (oe(new Date(l.lastUpdated).toISOString()),
                  le(
                    new Intl.DateTimeFormat(void 0, {
                      dateStyle: 'short',
                      timeStyle: 'short',
                    }).format(l.lastUpdated),
                  ));
              },
              [ee],
            ),
            e.createElement(
              'footer',
              { className: 'dumi-default-content-footer' },
              e.createElement(
                'dl',
                null,
                ee &&
                  e.createElement(
                    'dd',
                    null,
                    e.createElement(a, null),
                    e.createElement(
                      'span',
                      { className: 'dumi-default-mobile-hidden' },
                      e.createElement(E._H, {
                        id: 'content.footer.last.updated',
                      }),
                    ),
                    e.createElement('time', { dateTime: $ }, ae),
                  ),
                re &&
                  e.createElement(
                    'dd',
                    null,
                    e.createElement(
                      'a',
                      {
                        target: '_blank',
                        href: ''.concat(
                          o.formatMessage(
                            { id: '$internal.edit.link' },
                            { filename: l.filename },
                          ),
                        ),
                        rel: 'noreferrer',
                      },
                      e.createElement(M.r, null),
                      e.createElement(E._H, {
                        id: 'content.footer.actions.edit',
                      }),
                    ),
                  ),
              ),
              e.createElement(
                'nav',
                null,
                H &&
                  e.createElement(
                    E.rU,
                    { to: H.link, 'data-prev': !0 },
                    e.createElement(
                      'small',
                      null,
                      e.createElement(O, null),
                      e.createElement(E._H, {
                        id: 'content.footer.actions.previous',
                      }),
                    ),
                    H.title,
                  ),
                c &&
                  e.createElement(
                    E.rU,
                    { to: c.link, 'data-next': !0 },
                    e.createElement(
                      'small',
                      null,
                      e.createElement(E._H, {
                        id: 'content.footer.actions.next',
                      }),
                      e.createElement(O, null),
                    ),
                    c.title,
                  ),
              ),
            )
          );
        },
        w = _;
    },
    13766: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return h;
        },
      });
      var e = t(95269),
        A = t(75271),
        j = function (z) {
          var k = (0, e.tx)(),
            O = (0, e.WF)(),
            T = O.themeConfig,
            I = (0, e.eL)(),
            L = I.frontmatter;
          return A.createElement(
            'div',
            {
              className: 'dumi-default-content',
              'data-no-sidebar': !k || L.sidebar === !1 || void 0,
              'data-no-footer': T.footer === !1 || void 0,
            },
            z.children,
          );
        },
        h = j;
    },
    30332: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return h;
        },
      });
      var e = t(95269),
        A = t(75271),
        j = function () {
          var z,
            k = (0, e.eL)(),
            O = k.frontmatter;
          return !((z = O.features) === null || z === void 0) && z.length
            ? A.createElement(
                'div',
                {
                  className: 'dumi-default-features',
                  'data-cols':
                    [3, 2].find(function (T) {
                      return O.features.length % T === 0;
                    }) || 3,
                },
                O.features.map(function (T) {
                  var I = T.title,
                    L = T.description,
                    b = T.emoji,
                    x = T.link,
                    g;
                  return (
                    x &&
                      (g = /^(\w+:)\/\/|^(mailto|tel):/.test(x)
                        ? A.createElement(
                            'a',
                            { href: x, target: '_blank', rel: 'noreferrer' },
                            I,
                          )
                        : A.createElement(e.rU, { to: x }, I)),
                    A.createElement(
                      'div',
                      { key: I, className: 'dumi-default-features-item' },
                      b && A.createElement('i', null, b),
                      I && A.createElement('h3', null, g || I),
                      L &&
                        A.createElement('p', {
                          dangerouslySetInnerHTML: { __html: L },
                        }),
                    )
                  );
                }),
              )
            : null;
        },
        h = j;
    },
    73882: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return h;
        },
      });
      var e = t(95269),
        A = t(75271),
        j = function () {
          var z = (0, e.WF)(),
            k = z.themeConfig;
          return k.footer
            ? A.createElement('div', {
                className: 'dumi-default-footer',
                dangerouslySetInnerHTML: { __html: k.footer },
              })
            : null;
        },
        h = j;
    },
    21868: function (N, C, t) {
      'use strict';
      var e = t(75271),
        A = function () {
          return e.createElement(e.Fragment, null);
        };
      C.Z = A;
    },
    37798: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return S;
        },
      });
      var e = t(75271),
        A = Object.defineProperty,
        j = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        D = Object.prototype.propertyIsEnumerable,
        z = (l, o, f) =>
          o in l
            ? A(l, o, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: f,
              })
            : (l[o] = f),
        k = (l, o) => {
          for (var f in o || (o = {})) h.call(o, f) && z(l, f, o[f]);
          if (j) for (var f of j(o)) D.call(o, f) && z(l, f, o[f]);
          return l;
        };
      const O = (l) =>
        e.createElement(
          'svg',
          k({ fillRule: 'evenodd', viewBox: '64 64 896 896' }, l),
          e.createElement('path', {
            d: 'M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 0 1 0 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 0 1 0 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 0 1-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 0 1-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7a.169.169 0 0 1-.06-.07.12.12 0 0 1 0-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7a.199.199 0 0 1-.06-.09.12.12 0 0 1 0-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 0 1 .07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 0 1 .07 0z',
          }),
        );
      var T =
          'data:image/svg+xml;base64,PHN2ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiPjxwYXRoIGQ9Ik03OTkuODYgMTY2LjMxYy4wMiAwIC4wNC4wMi4wOC4wNmw1Ny42OSA1Ny43Yy4wNC4wMy4wNS4wNS4wNi4wOGEuMTIuMTIgMCAwIDEgMCAuMDZjMCAuMDMtLjAyLjA1LS4wNi4wOUw1NjkuOTMgNTEybDI4Ny43IDI4Ny43Yy4wNC4wNC4wNS4wNi4wNi4wOWEuMTIuMTIgMCAwIDEgMCAuMDdjMCAuMDItLjAyLjA0LS4wNi4wOGwtNTcuNyA1Ny42OWMtLjAzLjA0LS4wNS4wNS0uMDcuMDZhLjEyLjEyIDAgMCAxLS4wNyAwYy0uMDMgMC0uMDUtLjAyLS4wOS0uMDZMNTEyIDU2OS45M2wtMjg3LjcgMjg3LjdjLS4wNC4wNC0uMDYuMDUtLjA5LjA2YS4xMi4xMiAwIDAgMS0uMDcgMGMtLjAyIDAtLjA0LS4wMi0uMDgtLjA2bC01Ny42OS01Ny43YS4xNjkuMTY5IDAgMCAxLS4wNi0uMDcuMTIuMTIgMCAwIDEgMC0uMDdjMC0uMDMuMDItLjA1LjA2LS4wOUw0NTQuMDcgNTEybC0yODcuNy0yODcuN2EuMTk5LjE5OSAwIDAgMS0uMDYtLjA5LjEyLjEyIDAgMCAxIDAtLjA3YzAtLjAyLjAyLS4wNC4wNi0uMDhsNTcuNy01Ny42OWMuMDMtLjA0LjA1LS4wNS4wNy0uMDZhLjEyLjEyIDAgMCAxIC4wNyAwYy4wMyAwIC4wNS4wMi4wOS4wNkw1MTIgNDU0LjA3bDI4Ny43LTI4Ny43Yy4wNC0uMDQuMDYtLjA1LjA5LS4wNmEuMTIuMTIgMCAwIDEgLjA3IDB6Ii8+PC9zdmc+',
        I = Object.defineProperty,
        L = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        g = (l, o, f) =>
          o in l
            ? I(l, o, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: f,
              })
            : (l[o] = f),
        y = (l, o) => {
          for (var f in o || (o = {})) b.call(o, f) && g(l, f, o[f]);
          if (L) for (var f of L(o)) x.call(o, f) && g(l, f, o[f]);
          return l;
        };
      const a = (l) =>
        e.createElement(
          'svg',
          y({ viewBox: '64 64 896 896' }, l),
          e.createElement('path', {
            d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
          }),
        );
      var v =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA0IDE2MEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wIDYyNEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wLTMxMkgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04eiIvPjwvc3ZnPg==',
        M = t(95269),
        E = t(69334),
        P = t(65208),
        B = t(83824),
        U = t(57374),
        V = t(70729),
        R = t(55746),
        J = t(91922),
        _ = t(42972);
      function w(l, o) {
        return K(l) || Q(l, o) || n(l, o) || r();
      }
      function r() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function n(l, o) {
        if (l) {
          if (typeof l == 'string') return u(l, o);
          var f = Object.prototype.toString.call(l).slice(8, -1);
          if (
            (f === 'Object' && l.constructor && (f = l.constructor.name),
            f === 'Map' || f === 'Set')
          )
            return Array.from(l);
          if (
            f === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)
          )
            return u(l, o);
        }
      }
      function u(l, o) {
        (o == null || o > l.length) && (o = l.length);
        for (var f = 0, Y = new Array(o); f < o; f++) Y[f] = l[f];
        return Y;
      }
      function Q(l, o) {
        var f =
          l == null
            ? null
            : (typeof Symbol != 'undefined' && l[Symbol.iterator]) ||
              l['@@iterator'];
        if (f != null) {
          var Y,
            H,
            Z,
            i,
            s = [],
            c = !0,
            F = !1;
          try {
            if (((Z = (f = f.call(l)).next), o === 0)) {
              if (Object(f) !== f) return;
              c = !1;
            } else
              for (
                ;
                !(c = (Y = Z.call(f)).done) &&
                (s.push(Y.value), s.length !== o);
                c = !0
              );
          } catch (W) {
            (F = !0), (H = W);
          } finally {
            try {
              if (!c && f.return != null && ((i = f.return()), Object(i) !== i))
                return;
            } finally {
              if (F) throw H;
            }
          }
          return s;
        }
      }
      function K(l) {
        if (Array.isArray(l)) return l;
      }
      var X = function () {
          var o = (0, M.eL)(),
            f = o.frontmatter,
            Y = (0, e.useState)(!1),
            H = w(Y, 2),
            Z = H[0],
            i = H[1],
            s = (0, M.WF)(),
            c = s.themeConfig,
            F = (0, e.useMemo)(
              function () {
                return c.socialLinks
                  ? Object.keys(c.socialLinks)
                      .slice(0, 5)
                      .map(function (W) {
                        return { icon: W, link: c.socialLinks[W] };
                      })
                  : [];
              },
              [c.socialLinks],
            );
          return e.createElement(
            'div',
            {
              className: 'dumi-default-header',
              'data-static': !!f.hero || void 0,
              'data-mobile-active': Z || void 0,
              onClick: function () {
                return i(!1);
              },
            },
            e.createElement(
              'div',
              { className: 'dumi-default-header-content' },
              e.createElement(
                'section',
                { className: 'dumi-default-header-left' },
                e.createElement(U.Z, null),
              ),
              e.createElement(
                'section',
                { className: 'dumi-default-header-right' },
                e.createElement(V.Z, null),
                e.createElement(
                  'div',
                  { className: 'dumi-default-header-right-aside' },
                  e.createElement(J.ZP, null),
                  e.createElement(B.Z, null),
                  e.createElement(R.Z, null),
                  c.prefersColor.switch && e.createElement(E.Z, null),
                  F.map(function (W) {
                    return e.createElement(_.Z, {
                      icon: W.icon,
                      link: W.link,
                      key: W.link,
                    });
                  }),
                  e.createElement(P.Z, null),
                ),
              ),
              e.createElement(
                'button',
                {
                  type: 'button',
                  className: 'dumi-default-header-menu-btn',
                  onClick: function (G) {
                    G.stopPropagation(),
                      i(function ($) {
                        return !$;
                      });
                  },
                },
                Z ? e.createElement(O, null) : e.createElement(a, null),
              ),
            ),
          );
        },
        S = X;
    },
    69096: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return j;
        },
      });
      var e = t(75271),
        A = function (D) {
          return e.createElement(
            'h1',
            { className: 'dumi-default-hero-title' },
            e.createElement('span', null, D.children),
          );
        },
        j = A;
    },
    30142: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return D;
        },
      });
      var e = t(95269),
        A = t(93419),
        j = t(75271),
        h = function () {
          var k,
            O = (0, e.eL)(),
            T = O.frontmatter;
          return 'hero' in T
            ? j.createElement(
                'div',
                { className: 'dumi-default-hero' },
                T.hero.title && j.createElement(A.Z, null, T.hero.title),
                T.hero.description &&
                  j.createElement('p', {
                    dangerouslySetInnerHTML: { __html: T.hero.description },
                  }),
                !!(
                  !((k = T.hero.actions) === null || k === void 0) && k.length
                ) &&
                  j.createElement(
                    'div',
                    { className: 'dumi-default-hero-actions' },
                    T.hero.actions.map(function (I) {
                      var L = I.text,
                        b = I.link;
                      return /^(\w+:)\/\/|^(mailto|tel):/.test(b)
                        ? j.createElement(
                            'a',
                            {
                              href: b,
                              target: '_blank',
                              rel: 'noreferrer',
                              key: L,
                            },
                            L,
                          )
                        : j.createElement(e.rU, { key: L, to: b }, L);
                    }),
                  ),
              )
            : null;
        },
        D = h;
    },
    40371: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return x;
        },
      });
      var e = t(29253),
        A = t(95269),
        j = t(75271);
      function h(g, y) {
        return T(g) || O(g, y) || z(g, y) || D();
      }
      function D() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function z(g, y) {
        if (g) {
          if (typeof g == 'string') return k(g, y);
          var a = Object.prototype.toString.call(g).slice(8, -1);
          if (
            (a === 'Object' && g.constructor && (a = g.constructor.name),
            a === 'Map' || a === 'Set')
          )
            return Array.from(g);
          if (
            a === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
          )
            return k(g, y);
        }
      }
      function k(g, y) {
        (y == null || y > g.length) && (y = g.length);
        for (var a = 0, v = new Array(y); a < y; a++) v[a] = g[a];
        return v;
      }
      function O(g, y) {
        var a =
          g == null
            ? null
            : (typeof Symbol != 'undefined' && g[Symbol.iterator]) ||
              g['@@iterator'];
        if (a != null) {
          var v,
            M,
            E,
            P,
            B = [],
            U = !0,
            V = !1;
          try {
            if (((E = (a = a.call(g)).next), y === 0)) {
              if (Object(a) !== a) return;
              U = !1;
            } else
              for (
                ;
                !(U = (v = E.call(a)).done) &&
                (B.push(v.value), B.length !== y);
                U = !0
              );
          } catch (R) {
            (V = !0), (M = R);
          } finally {
            try {
              if (!U && a.return != null && ((P = a.return()), Object(P) !== P))
                return;
            } finally {
              if (V) throw M;
            }
          }
          return B;
        }
      }
      function T(g) {
        if (Array.isArray(g)) return g;
      }
      function I(g) {
        var y = g.pathname,
          a = g.current,
          v = g.target,
          M =
            'base' in a
              ? y.replace(a.base.replace(/\/$/, ''), '') || '/'
              : y.replace(new RegExp(''.concat(a.suffix, '$')), '');
        return 'base' in v
          ? ''
              .concat(v.base.replace(/\/$/, ''))
              .concat(M)
              .replace(/([^/])\/$/, '$1')
          : ''.concat(M).concat(v.suffix);
      }
      var L = function (y) {
          var a = y.locale,
            v = y.current,
            M = (0, A.TH)(),
            E = M.pathname,
            P = (0, j.useState)(function () {
              return I({ pathname: E, current: v, target: a });
            }),
            B = h(P, 2),
            U = B[0],
            V = B[1];
          return (
            (0, j.useEffect)(
              function () {
                V(I({ pathname: E, current: v, target: a }));
              },
              [E, v.id, a.id],
            ),
            j.createElement(
              A.rU,
              { className: 'dumi-default-lang-switch', to: U },
              a.name,
            )
          );
        },
        b = function () {
          var y = (0, A.WF)(),
            a = y.locales,
            v = (0, A.YB)(),
            M = v.locale,
            E = (0, A.bU)();
          return a.length <= 1
            ? null
            : a.length > 2
            ? j.createElement(
                'div',
                { className: 'dumi-default-lang-select' },
                j.createElement(
                  'select',
                  {
                    defaultValue: M,
                    onChange: function (B) {
                      A.m8.push(
                        I({
                          pathname: A.m8.location.pathname,
                          current: E,
                          target: a.find(function (U) {
                            var V = U.id;
                            return V === B.target.value;
                          }),
                        }),
                      );
                    },
                  },
                  a.map(function (P) {
                    return j.createElement(
                      'option',
                      { key: P.id, value: P.id },
                      P.name,
                    );
                  }),
                ),
                j.createElement(e.r, null),
              )
            : j.createElement(L, {
                locale: a.find(function (P) {
                  var B = P.id;
                  return B !== M;
                }),
                current: E,
              });
        },
        x = b;
    },
    17230: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return h;
        },
      });
      var e = t(95269),
        A = t(75271),
        j = function () {
          var z = (0, e.WF)(),
            k = z.themeConfig,
            O = (0, e.bU)();
          return A.createElement(
            e.rU,
            { className: 'dumi-default-logo', to: 'base' in O ? O.base : '/' },
            k.logo !== !1 &&
              A.createElement('img', {
                src:
                  k.logo ||
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACCCAMAAACww5CIAAACf1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8YkP8AAAACCxMamv/6+voaGhoXi/YYjv8aoP8cq/8dr/8bo/8cqP8bpv8Ykv8drv8BAwUcrP8Zlf8Xjf/s7OzLy8scp/8anP8ZmP/d3d0BBArg4ODT09O7u7sEGCsKCgoanf8YlP/8/Pz09PTIyMgMTIV1dXUGKEVEREQ0NDQODg4GBgYdsv8dsf8Zl//m5uYVgOXj4+MWgtfW1tYTc87BwcERbLWzs7Ovr6+np6cQX6OgoKCTk5MMSXlwcHBra2tiYmIVFRUetf/39/fp6ekWhOkXi+QVfNvY2NjPz88TdcUSb7u6urq3t7cPYK0NUJGQkJCLi4ttbW0JO2cINFtVVVVRUVEHMFEHLEs6OjoEHDEiIiIcHBwXj/vx8fEWh+4Sb8gRbL+rq6upqakOVZiWlpaJiYmGhoYMSIF9fX15eXkKPnQLRHJMTExHR0c9PT0FHzkqKiomJiYEFyUBBw8bovfu7u4Wht4UedsUeMrFxcW9vb0RZrOkpKSampoPXZqAgIALQmtlZWUJOGJZWVkIMFcFIUExMTEwMDAtLS0DEh8Zl/v4+PgXj/QWhvEWhvAYku8YjuwUfNcUfNAVfc0RaLkSaKsRZ6kPWqENUYlbW1sCEBhkSPCkAAAAOHRSTlMA87y4BeKrltbFnUDo0MCup6D67t7ayZKGemtmWS8rEwLNso1wVEpFGaR+UDUlHwmBYls5i1oN/DMym4YAAAfTSURBVHjaxNndS1NxHMfxX5s6t1Kz1KzsuazMnqjgyxv03ovtQrYxUBEfLkREVBQf0AsFBRUUQvEiSVFQ0YsuiiIiqKC/oH+o31lzjtPZg55zttfVNnbx5ffw+X53pmx5UFl2+XLZ4zpVOPWlJFTntYyiBwF/VbX39Sv9upYU9/QHjbXe6qqayrrnylXXi0kov3GVuFiMuNqbHhIu3FcuuohZZ+jDh7mdXkwqlGtKMGmOSFzrGiYe5ZL4+vdsd/SHFyYxtIQlIdiD4ftCa39osTlxRtzwHO1tUOLm0XYk6T3asMRtdKHdUs6qv+L1l/vKgak2SYjqN+1yYg2G5NgR4Pd5/F7fk9sO3YhSkoYkaW40KCk2Rj9KUoikqmtOn8YpydE6J7xFyq5yUhxIjvZJcUfZ5EOb6oxGQmPdtEQlR4Mxupc6IoOdzWiVypabaF1BiesIS876OiSufRXtvO0DcSi2dAN+ZcclYFZsCaOps3nYUOKprDTiSWzqAioCnpIX9ep03pxkw7jYtMWx0pdn7Jb2i1jixN3cM6OGFCti0zgpyopOsw6xiZHoyHIPLIhNHdD7bWR+c7znFD3+PNp+vxhmRkNi28BoWAzBPbQHKhdlQLe4ogsoVTl4ijYjrmiKATdUdvfjh9Ely8DVHFvWe3HJMBBQ2QWAd+KSeeBxjtuxKC7ZzG07Ht0DusQlfwDfs2wZ4b2EYVBcESHO81BlcIWESXHFV7Qss5aXY1FxRSj7L7QAhv3tsaVBMVn8Ou1MFUtjW3sYKjL0jO6QWJiA7iZxysBbtDplpRT4KZbQWkUbHRMnGFUUKwuNaH1iaRJ+Tf8bDbqcWJH2HuCV+l9DpkuxtdsuGlpYHNAJ1FqNMjnE9QocOXJCPwJ309zPT9la8e5yUJwwC/jTBNWQ5EkIqEyzHROSJzvWSeFDW5M8OUArsdgMq2EmanOyGB4WSyMYAhZp2TwkJouw2mZvmusUSwtraA//m7DXZ8SsBxiQM5tGSxNuv3+ZU/NmIpfN9qDXxp1sO4LDNrE202J6cHE1TVq2f1uNiA39K9/7JJ0JwGe6nvOSZ4OA1/R0bFbyrBWoMUX2nOTZAOA3pcSXjFW7UOJnU17VAYeZv98pTvsB1KsTRVXAtqQVA/rFWSNo11SKiuRYZeknEBRn7WJ4rZKuX8pcROvBj6g4rLUZQ8NJYBo2Jb/ax2KkhKYf6I1I3oWngKqUhfgkBTCL1pics1elICaS/5Y9jk+XBdEBeJKhHZGCCLZAWTIkBqQgNlr+NbGi2wHgS1tTAbQNAxW3i1R58WWgd725ANZ7gXPFNaqagrvwt1t7aW0qiOIAPlErPqJCq6JWrW8r1ar1xf0n4NxnnpCELEKyCNmkJZSQRSCbQltooS4sVApiC10U2kWhFRUEEdGF4vuNH8g7c9NQ2pjepPcB/r5ADjlnzp2ZM+QMXHeYb+1WfO5hi5QfveYe33XJ4+d8a3MNQHbI75KhMt9z9wF4FRNcIi3wO94bAHJiQHCHNgmgh3QD8D1MCK6I+KeNCUgbgFFRcEX8Qwhov014o/juUlEoxeqrgpsA7oWp4AZprnpv1ANgShFcoU4a+36jMgOuVGYmnuJ1Wb0hKWqCC8QCgI4dqyfRbNCFoqDBX7Xz6C0AS660K3UKQCdhuqAbdqFT+B8mAXQTbhtbpM7ng4Yn1oytOwFMu5AP9QGAa4Qz8lFwvFWIH6G7Qjijc8/LDueDyvd4z151EYBvwOF+lRFTAK6TGi+ACWdLk0ozANqvkpojAFJKRnCSlFt3m8pLc9bJTylVn64ty9rJfEl1cpVKbH3uJ2v1QleUqOCI2h9xeeP0aVqLCA4JSLk6s7hu6CbkqOAIGpyB7iRZ5xLvFWlHEkITyjK/41/v9h0AC3lngpCz0PXWf0yDUcmBhFDt0T/flx8CkNL8VLAZjUhvAHSQek5AtyALdqP5e9BdbPCkZsbuFRKVvlRHs/W1AfC902yNgoriWwCeqw1fSL+J2VkWNBF8vckr6mPQ3ZcjtkVBA/3z4Ju6Bs5ANzck2BQFpUMTxlVZQ4ege95vUxRUHoPOe5s01OWBbryf2hEFDX4Fc4Vs4gaYZ3ZEQeXBJPgMcFPnwYzJVmeE6jGsGCNAE/rAlPIBamkMQv9YCLpzxJRjYMr5BLXyg5EvgTlKTOoEkw2LUct6dTz4ojqCNO04mMm4ZE150mhMuQ+jHppwAUxqUM5QK9qkPLIE5jhpygkvmHJYiW45FaL8IwmdZy9pUtc2MK9HtvgloZngJyMVp3tJ846ASb7Q1NYrg1JN+ukDs4e05LwHTO5bUKG0tRBEeXAKzJ3rpEXdB8C9fBIWKW0hhOBIBdy2K6R11zvALY6EFYE21yHF4OdKEkz7ObIlXXvAhV4OquoApaYbpCo9qayA29lLturibhimSgOSFjG1ILRwYnwShn09xArnT8PwdnHML6n+hl+2gD8Wjj+rLMOwq49Y5dZpVKUWS++VcCwdCdT5/Uhck5SH45VpVO3qJFbq2Y5Vvly2VBgQY5KqKWI6HY+n06KiqVJMSQyP/37wB6v29xGrnThyEDWh5dyr+fJscbQw/OjRcGG0OFvO3n+QSqKm7exlYgsvNgolkyFs1HGV2OQgTGsjNjnVBtO8Owj3nwbhgWnttgWxy2PaoWaC+AuAXqWYKHupMgAAAABJRU5ErkJggg==',
                alt: k.name,
              }),
            k.name,
          );
        },
        h = j;
    },
    68790: function (N, C, t) {
      'use strict';
      var e = t(75271),
        A = function () {
          return e.createElement(e.Fragment, null);
        };
      C.Z = A;
    },
    74168: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return y;
        },
      });
      var e = t(29253),
        A = t(95269),
        j = t(60385),
        h = t(75271);
      function D() {
        return (
          (D = Object.assign
            ? Object.assign.bind()
            : function (a) {
                for (var v = 1; v < arguments.length; v++) {
                  var M = arguments[v];
                  for (var E in M)
                    Object.prototype.hasOwnProperty.call(M, E) && (a[E] = M[E]);
                }
                return a;
              }),
          D.apply(this, arguments)
        );
      }
      function z(a, v) {
        return L(a) || I(a, v) || O(a, v) || k();
      }
      function k() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function O(a, v) {
        if (a) {
          if (typeof a == 'string') return T(a, v);
          var M = Object.prototype.toString.call(a).slice(8, -1);
          if (
            (M === 'Object' && a.constructor && (M = a.constructor.name),
            M === 'Map' || M === 'Set')
          )
            return Array.from(a);
          if (
            M === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)
          )
            return T(a, v);
        }
      }
      function T(a, v) {
        (v == null || v > a.length) && (v = a.length);
        for (var M = 0, E = new Array(v); M < v; M++) E[M] = a[M];
        return E;
      }
      function I(a, v) {
        var M =
          a == null
            ? null
            : (typeof Symbol != 'undefined' && a[Symbol.iterator]) ||
              a['@@iterator'];
        if (M != null) {
          var E,
            P,
            B,
            U,
            V = [],
            R = !0,
            J = !1;
          try {
            if (((B = (M = M.call(a)).next), v === 0)) {
              if (Object(M) !== M) return;
              R = !1;
            } else
              for (
                ;
                !(R = (E = B.call(M)).done) &&
                (V.push(E.value), V.length !== v);
                R = !0
              );
          } catch (_) {
            (J = !0), (P = _);
          } finally {
            try {
              if (!R && M.return != null && ((U = M.return()), Object(U) !== U))
                return;
            } finally {
              if (J) throw P;
            }
          }
          return V;
        }
      }
      function L(a) {
        if (Array.isArray(a)) return a;
      }
      var b = function (v) {
          var M = v.data,
            E = (0, A.TH)(),
            P = E.pathname,
            B = (0, h.useState)(function () {
              var n;
              return (n = M.children) === null || n === void 0
                ? void 0
                : n.some(function (u) {
                    var Q = u.activePath || u.link;
                    return Q && P.startsWith(Q);
                  });
            }),
            U = z(B, 2),
            V = U[0],
            R = U[1],
            J =
              M.children &&
              h.createElement(
                'button',
                {
                  className: 'dumi-default-navbar-collapse-btn',
                  type: 'button',
                  onClick: function (u) {
                    u.stopPropagation(),
                      R(function (Q) {
                        return !Q;
                      });
                  },
                  'data-collapsed': V || void 0,
                },
                h.createElement(e.r, null),
              ),
            _ =
              M.children &&
              h.createElement(
                'ul',
                {
                  className: 'dumi-default-navbar-dropdown',
                  'data-collapsed': V || void 0,
                },
                h.createElement(x, { data: M.children }),
              ),
            w = M.activePath || M.link,
            r = w && P.startsWith(w) ? { className: 'active' } : {};
          return M.link
            ? h.createElement(
                h.Fragment,
                null,
                h.createElement(A.rU, D({ to: M.link }, r), M.title),
                J,
                _,
              )
            : h.createElement(
                h.Fragment,
                null,
                h.createElement(
                  'span',
                  D(
                    {
                      onClick: function (u) {
                        u.stopPropagation(),
                          R(function (Q) {
                            return !Q;
                          });
                      },
                    },
                    r,
                  ),
                  M.title,
                ),
                J,
                _,
              );
        },
        x = function (v) {
          var M = v.data;
          return h.createElement(
            h.Fragment,
            null,
            M.map(function (E) {
              return h.createElement(
                'li',
                { key: E.activePath || E.link || E.title },
                E.link && /^(\w+:)\/\/|^(mailto|tel):/.test(E.link)
                  ? h.createElement(
                      'a',
                      { href: E.link, target: '_blank', rel: 'noreferrer' },
                      E.title,
                    )
                  : h.createElement(b, { data: E }),
              );
            }),
          );
        },
        g = function () {
          var v = (0, A.OK)();
          return h.createElement(
            'ul',
            { className: 'dumi-default-navbar' },
            h.createElement(x, { data: v }),
            h.createElement(j.Z, null),
          );
        },
        y = g;
    },
    97920: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return x;
        },
      });
      var e = t(95269),
        A = t(75271);
      function j(g, y) {
        return O(g) || k(g, y) || D(g, y) || h();
      }
      function h() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function D(g, y) {
        if (g) {
          if (typeof g == 'string') return z(g, y);
          var a = Object.prototype.toString.call(g).slice(8, -1);
          if (
            (a === 'Object' && g.constructor && (a = g.constructor.name),
            a === 'Map' || a === 'Set')
          )
            return Array.from(g);
          if (
            a === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
          )
            return z(g, y);
        }
      }
      function z(g, y) {
        (y == null || y > g.length) && (y = g.length);
        for (var a = 0, v = new Array(y); a < y; a++) v[a] = g[a];
        return v;
      }
      function k(g, y) {
        var a =
          g == null
            ? null
            : (typeof Symbol != 'undefined' && g[Symbol.iterator]) ||
              g['@@iterator'];
        if (a != null) {
          var v,
            M,
            E,
            P,
            B = [],
            U = !0,
            V = !1;
          try {
            if (((E = (a = a.call(g)).next), y === 0)) {
              if (Object(a) !== a) return;
              U = !1;
            } else
              for (
                ;
                !(U = (v = E.call(a)).done) &&
                (B.push(v.value), B.length !== y);
                U = !0
              );
          } catch (R) {
            (V = !0), (M = R);
          } finally {
            try {
              if (!U && a.return != null && ((P = a.return()), Object(P) !== P))
                return;
            } finally {
              if (V) throw M;
            }
          }
          return B;
        }
      }
      function O(g) {
        if (Array.isArray(g)) return g;
      }
      var T = function () {
          return A.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            A.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847Zm7.988 11.332H2.73l.8-.674c.274-.2.324-.674.124-.923-.2-.275-.674-.325-.923-.125L.735 12.53c-.275.275-.4.525-.4.874 0 .325.125.674.4.874l1.997 1.597a.829.829 0 0 0 .4.125c.199 0 .398-.075.523-.275.2-.274.2-.723-.125-.923l-.998-.799h10.459c.399 0 .674-.274.674-.674 0-.424-.275-.674-.674-.674Z',
            }),
          );
        },
        I = function () {
          return A.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            A.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847ZM1.01 12.655h10.26l-.8-.674c-.274-.2-.324-.674-.124-.923.2-.275.674-.325.923-.125l1.997 1.597c.275.275.4.525.4.874 0 .325-.125.674-.4.874l-1.997 1.597a.829.829 0 0 1-.399.125.59.59 0 0 1-.524-.275c-.2-.274-.2-.723.125-.923l.998-.799H1.009c-.399 0-.674-.274-.674-.674 0-.424.275-.674.674-.674Z',
            }),
          );
        },
        L = 'dumi:rtl',
        b = function () {
          var y = (0, A.useState)(!1),
            a = j(y, 2),
            v = a[0],
            M = a[1],
            E = (0, e.WF)(),
            P = E.themeConfig;
          return (
            (0, A.useEffect)(function () {
              localStorage.getItem(L) &&
                (M(!0),
                document.documentElement.setAttribute('data-direction', 'rtl'));
            }, []),
            P.rtl
              ? A.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'dumi-default-rtl-switch',
                    onClick: function () {
                      v
                        ? (document.documentElement.removeAttribute(
                            'data-direction',
                          ),
                          localStorage.removeItem(L))
                        : (document.documentElement.setAttribute(
                            'data-direction',
                            'rtl',
                          ),
                          localStorage.setItem(L, '1')),
                        M(!v);
                    },
                    'data-dumi-tooltip': v ? 'RTL' : 'LTR',
                    'data-dumi-tooltip-bottom': !0,
                  },
                  v ? A.createElement(T, null) : A.createElement(I, null),
                )
              : null
          );
        },
        x = b;
    },
    12375: function (N, C, t) {
      'use strict';
      t.d(C, {
        ZP: function () {
          return Z;
        },
      });
      var e = t(75271),
        A = Object.defineProperty,
        j = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        D = Object.prototype.propertyIsEnumerable,
        z = (i, s, c) =>
          s in i
            ? A(i, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: c,
              })
            : (i[s] = c),
        k = (i, s) => {
          for (var c in s || (s = {})) h.call(s, c) && z(i, c, s[c]);
          if (j) for (var c of j(s)) D.call(s, c) && z(i, c, s[c]);
          return i;
        };
      const O = (i) =>
        e.createElement(
          'svg',
          k({ viewBox: '64 64 896 896' }, i),
          e.createElement('path', {
            d: 'M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z',
          }),
        );
      var T =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODYyIDQ2NS4zaC04MWMtNC42IDAtOSAyLTEyLjEgNS41TDU1MCA3MjMuMVYxNjBjMC00LjQtMy42LTgtOC04aC02MGMtNC40IDAtOCAzLjYtOCA4djU2My4xTDI1NS4xIDQ3MC44Yy0zLTMuNS03LjQtNS41LTEyLjEtNS41aC04MWMtNi44IDAtMTAuNSA4LjEtNiAxMy4yTDQ4Ny45IDg2MWEzMS45NiAzMS45NiAwIDAgMCA0OC4zIDBMODY4IDQ3OC41YzQuNS01LjIuOC0xMy4yLTYtMTMuMnoiLz48L3N2Zz4=',
        I = Object.defineProperty,
        L = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        g = (i, s, c) =>
          s in i
            ? I(i, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: c,
              })
            : (i[s] = c),
        y = (i, s) => {
          for (var c in s || (s = {})) b.call(s, c) && g(i, c, s[c]);
          if (L) for (var c of L(s)) x.call(s, c) && g(i, c, s[c]);
          return i;
        };
      const a = (i) =>
        e.createElement(
          'svg',
          y({ viewBox: '64 64 896 896' }, i),
          e.createElement('path', {
            d: 'M868 545.5 536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z',
          }),
        );
      var v =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODY4IDU0NS41IDUzNi4xIDE2M2EzMS45NiAzMS45NiAwIDAgMC00OC4zIDBMMTU2IDU0NS41YTcuOTcgNy45NyAwIDAgMCA2IDEzLjJoODFjNC42IDAgOS0yIDEyLjEtNS41TDQ3NCAzMDAuOVY4NjRjMCA0LjQgMy42IDggOCA4aDYwYzQuNCAwIDgtMy42IDgtOFYzMDAuOWwyMTguOSAyNTIuM2MzIDMuNSA3LjQgNS41IDEyLjEgNS41aDgxYzYuOCAwIDEwLjUtOCA2LTEzLjJ6Ii8+PC9zdmc+',
        M = Object.defineProperty,
        E = Object.getOwnPropertySymbols,
        P = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        U = (i, s, c) =>
          s in i
            ? M(i, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: c,
              })
            : (i[s] = c),
        V = (i, s) => {
          for (var c in s || (s = {})) P.call(s, c) && U(i, c, s[c]);
          if (E) for (var c of E(s)) B.call(s, c) && U(i, c, s[c]);
          return i;
        };
      const R = (i) =>
        e.createElement(
          'svg',
          V({ viewBox: '64 64 896 896' }, i),
          e.createElement('path', {
            d: 'M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
          }),
        );
      var J =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA5LjYgODU0LjUgNjQ5LjkgNTk0LjhDNjkwLjIgNTQyLjcgNzEyIDQ3OSA3MTIgNDEyYzAtODAuMi0zMS4zLTE1NS40LTg3LjktMjEyLjEtNTYuNi01Ni43LTEzMi04Ny45LTIxMi4xLTg3LjlzLTE1NS41IDMxLjMtMjEyLjEgODcuOUMxNDMuMiAyNTYuNSAxMTIgMzMxLjggMTEyIDQxMmMwIDgwLjEgMzEuMyAxNTUuNSA4Ny45IDIxMi4xQzI1Ni41IDY4MC44IDMzMS44IDcxMiA0MTIgNzEyYzY3IDAgMTMwLjYtMjEuOCAxODIuNy02MmwyNTkuNyAyNTkuNmE4LjIgOC4yIDAgMCAwIDExLjYgMGw0My42LTQzLjVhOC4yIDguMiAwIDAgMCAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiLz48L3N2Zz4=',
        _ = t(95269),
        w = t(1263),
        r = (0, e.forwardRef)(function (i, s) {
          var c = (0, _.YB)(),
            F = (0, e.useRef)(!1),
            W = (0, e.useRef)(null);
          return (
            (0, e.useImperativeHandle)(s, function () {
              return W.current;
            }),
            e.createElement('input', {
              className: 'dumi-default-search-bar-input',
              onCompositionStart: function () {
                return (F.current = !0);
              },
              onCompositionEnd: function ($) {
                (F.current = !1), i.onChange($.currentTarget.value);
              },
              onFocus: i.onFocus,
              onBlur: i.onBlur,
              onMouseEnter: i.onMouseEnter,
              onKeyDown: function ($) {
                ['ArrowDown', 'ArrowUp'].includes($.key) && $.preventDefault(),
                  $.key === 'Escape' && !F.current && $.currentTarget.blur();
              },
              onChange: function ($) {
                var oe = $.target.value;
                setTimeout(function () {
                  F.current || i.onChange(oe);
                }, 1);
              },
              placeholder: c.formatMessage({ id: 'header.search.placeholder' }),
              ref: W,
            })
          );
        }),
        n = function (s) {
          return (
            (0, e.useEffect)(
              function () {
                if (s.visible) document.body.style.overflow = 'hidden';
                else if (document.body.style.overflow) {
                  var c;
                  (document.body.style.overflow = ''),
                    (c = s.onClose) === null || c === void 0 || c.call(s);
                }
              },
              [s.visible],
            ),
            s.visible
              ? e.createElement(
                  'div',
                  { className: 'dumi-default-search-modal' },
                  e.createElement('div', {
                    className: 'dumi-default-search-modal-mask',
                    onClick: s.onMaskClick,
                  }),
                  e.createElement(
                    'div',
                    { className: 'dumi-default-search-modal-content' },
                    s.children,
                  ),
                )
              : null
          );
        },
        u;
      function Q(i, s) {
        return o(i) || l(i, s) || X(i, s) || K();
      }
      function K() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function X(i, s) {
        if (i) {
          if (typeof i == 'string') return S(i, s);
          var c = Object.prototype.toString.call(i).slice(8, -1);
          if (
            (c === 'Object' && i.constructor && (c = i.constructor.name),
            c === 'Map' || c === 'Set')
          )
            return Array.from(i);
          if (
            c === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return S(i, s);
        }
      }
      function S(i, s) {
        (s == null || s > i.length) && (s = i.length);
        for (var c = 0, F = new Array(s); c < s; c++) F[c] = i[c];
        return F;
      }
      function l(i, s) {
        var c =
          i == null
            ? null
            : (typeof Symbol != 'undefined' && i[Symbol.iterator]) ||
              i['@@iterator'];
        if (c != null) {
          var F,
            W,
            G,
            $,
            oe = [],
            ne = !0,
            te = !1;
          try {
            if (((G = (c = c.call(i)).next), s === 0)) {
              if (Object(c) !== c) return;
              ne = !1;
            } else
              for (
                ;
                !(ne = (F = G.call(c)).done) &&
                (oe.push(F.value), oe.length !== s);
                ne = !0
              );
          } catch (ae) {
            (te = !0), (W = ae);
          } finally {
            try {
              if (
                !ne &&
                c.return != null &&
                (($ = c.return()), Object($) !== $)
              )
                return;
            } finally {
              if (te) throw W;
            }
          }
          return oe;
        }
      }
      function o(i) {
        if (Array.isArray(i)) return i;
      }
      var f = /(mac|iphone|ipod|ipad)/i.test(
          typeof navigator != 'undefined'
            ? (u = navigator) === null || u === void 0
              ? void 0
              : u.platform
            : '',
        ),
        Y = function (s) {
          return (
            ['TEXTAREA', 'INPUT'].includes(s.tagName) ||
            s.contentEditable === 'true'
          );
        },
        H = function () {
          var s = (0, e.useState)(!1),
            c = Q(s, 2),
            F = c[0],
            W = c[1],
            G = (0, e.useRef)(null),
            $ = (0, e.useRef)(null),
            oe = (0, e.useState)('\u2318'),
            ne = Q(oe, 2),
            te = ne[0],
            ae = ne[1],
            le = (0, _.OO)(),
            re = le.keywords,
            ee = le.setKeywords,
            q = le.result,
            ce = le.loading,
            se = le.load,
            Me = (0, e.useState)(!1),
            fe = Q(Me, 2),
            de = fe[0],
            me = fe[1];
          return (
            (0, e.useEffect)(function () {
              f || ae('Ctrl');
              var ue = function (ie) {
                if (
                  (((f ? ie.metaKey : ie.ctrlKey) && ie.key === 'k') ||
                    (ie.key === '/' && !Y(ie.target))) &&
                  (ie.preventDefault(), G.current)
                ) {
                  var ye = G.current.getBoundingClientRect(),
                    Ae = ye.top,
                    ve = ye.bottom,
                    Ne = ye.left,
                    Le = ye.right,
                    p =
                      Ae >= 0 &&
                      Ne >= 0 &&
                      ve <= window.innerHeight &&
                      Le <= window.innerWidth;
                  p
                    ? G.current.focus()
                    : (ee(''),
                      me(!0),
                      setTimeout(function () {
                        var m;
                        (m = $.current) === null || m === void 0 || m.focus();
                      }));
                }
                ie.key === 'Escape' && (ie.preventDefault(), me(!1));
              };
              return (
                document.addEventListener('keydown', ue),
                function () {
                  return document.removeEventListener('keydown', ue);
                }
              );
            }, []),
            e.createElement(
              'div',
              { className: 'dumi-default-search-bar' },
              e.createElement(R, { className: 'dumi-default-search-bar-svg' }),
              e.createElement(r, {
                onFocus: function () {
                  W(!0), se();
                },
                onMouseEnter: function () {
                  se();
                },
                onBlur: function () {
                  setTimeout(function () {
                    W(!1);
                  }, 1);
                },
                onChange: function (ge) {
                  return ee(ge);
                },
                ref: G,
              }),
              e.createElement(
                'span',
                { className: 'dumi-default-search-shortcut' },
                te,
                ' K',
              ),
              re.trim() &&
                F &&
                !de &&
                e.createElement(
                  'div',
                  { className: 'dumi-default-search-popover' },
                  e.createElement(
                    'section',
                    null,
                    e.createElement(w.Z, { data: q, loading: ce }),
                  ),
                ),
              e.createElement(
                n,
                {
                  visible: de,
                  onMaskClick: function () {
                    me(!1);
                  },
                  onClose: function () {
                    return ee('');
                  },
                },
                e.createElement(
                  'div',
                  { style: { position: 'relative' } },
                  e.createElement(R, {
                    className: 'dumi-default-search-bar-svg',
                  }),
                  e.createElement(r, {
                    onFocus: function () {
                      return W(!0);
                    },
                    onBlur: function () {
                      setTimeout(function () {
                        W(!1);
                      }, 1);
                    },
                    onChange: function (ge) {
                      return ee(ge);
                    },
                    ref: $,
                  }),
                ),
                e.createElement(w.Z, {
                  data: q,
                  loading: ce,
                  onItemSelect: function () {
                    me(!1);
                  },
                }),
                e.createElement(
                  'footer',
                  null,
                  e.createElement(
                    'ul',
                    { className: 'dumi-default-search-modal-commands' },
                    e.createElement(
                      'li',
                      { className: 'dumi-default-search-modal-commands-arrow' },
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(a, {
                          width: '10px',
                          height: '10px',
                          fill: 'rgba(0, 0, 0, 0.45)',
                        }),
                      ),
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(O, {
                          width: '10px',
                          height: '10px',
                          fill: 'rgba(0, 0, 0, 0.45)',
                        }),
                      ),
                      e.createElement(
                        'span',
                        {
                          className: 'dumi-default-search-modal-commands-text',
                        },
                        'to navigate',
                      ),
                    ),
                    e.createElement(
                      'li',
                      null,
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        'esc',
                      ),
                      e.createElement(
                        'span',
                        {
                          className: 'dumi-default-search-modal-commands-text',
                        },
                        'to close',
                      ),
                    ),
                  ),
                ),
              ),
            )
          );
        },
        Z = H;
    },
    39277: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return _;
        },
      });
      var e = t(75271),
        A = Object.defineProperty,
        j = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        D = Object.prototype.propertyIsEnumerable,
        z = (w, r, n) =>
          r in w
            ? A(w, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (w[r] = n),
        k = (w, r) => {
          for (var n in r || (r = {})) h.call(r, n) && z(w, n, r[n]);
          if (j) for (var n of j(r)) D.call(r, n) && z(w, n, r[n]);
          return w;
        };
      const O = (w) =>
        e.createElement(
          'svg',
          k({ viewBox: '0 0 1024 1024' }, w),
          e.createElement('path', {
            d: 'm885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z',
          }),
        );
      var T =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=',
        I = t(94161),
        L = t(95269);
      function b(w, r) {
        return v(w) || a(w, r) || g(w, r) || x();
      }
      function x() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function g(w, r) {
        if (w) {
          if (typeof w == 'string') return y(w, r);
          var n = Object.prototype.toString.call(w).slice(8, -1);
          if (
            (n === 'Object' && w.constructor && (n = w.constructor.name),
            n === 'Map' || n === 'Set')
          )
            return Array.from(w);
          if (
            n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return y(w, r);
        }
      }
      function y(w, r) {
        (r == null || r > w.length) && (r = w.length);
        for (var n = 0, u = new Array(r); n < r; n++) u[n] = w[n];
        return u;
      }
      function a(w, r) {
        var n =
          w == null
            ? null
            : (typeof Symbol != 'undefined' && w[Symbol.iterator]) ||
              w['@@iterator'];
        if (n != null) {
          var u,
            Q,
            K,
            X,
            S = [],
            l = !0,
            o = !1;
          try {
            if (((K = (n = n.call(w)).next), r === 0)) {
              if (Object(n) !== n) return;
              l = !1;
            } else
              for (
                ;
                !(l = (u = K.call(n)).done) &&
                (S.push(u.value), S.length !== r);
                l = !0
              );
          } catch (f) {
            (o = !0), (Q = f);
          } finally {
            try {
              if (!l && n.return != null && ((X = n.return()), Object(X) !== X))
                return;
            } finally {
              if (o) throw Q;
            }
          }
          return S;
        }
      }
      function v(w) {
        if (Array.isArray(w)) return w;
      }
      var M = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z',
            }),
            e.createElement('path', {
              d: 'M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z',
            }),
            e.createElement('path', {
              d: 'M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z',
            }),
          );
        },
        E = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z',
            }),
          );
        },
        P = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z',
            }),
          );
        },
        B = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z',
            }),
          );
        },
        U = { title: M, page: E, content: P, demo: B },
        V = function (r) {
          return e.createElement(
            e.Fragment,
            null,
            r.texts.map(function (n, u) {
              return e.createElement(
                e.Fragment,
                { key: u },
                n.highlighted ? e.createElement('mark', null, n.text) : n.text,
              );
            }),
          );
        },
        R = function (r) {
          var n = (0, e.useCallback)(
              function () {
                var S = 0,
                  l = [];
                return (
                  r.forEach(function (o) {
                    o.title &&
                      l.push({ type: 'title', value: { title: o.title } }),
                      o.hints.forEach(function (f) {
                        l.push({ type: 'hint', activeIndex: S++, value: f });
                      });
                  }),
                  [l, S]
                );
              },
              [r],
            ),
            u = (0, e.useState)(n),
            Q = b(u, 2),
            K = Q[0],
            X = Q[1];
          return (
            (0, e.useEffect)(
              function () {
                X(n);
              },
              [r],
            ),
            K
          );
        },
        J = function (r) {
          var n = R(r.data),
            u = b(n, 2),
            Q = u[0],
            K = u[1],
            X = (0, e.useState)(-1),
            S = b(X, 2),
            l = S[0],
            o = S[1],
            f = (0, L.TH)(),
            Y = f.pathname,
            H = function (s) {
              var c;
              (c = r.onItemSelect) === null || c === void 0 || c.call(r, s);
              var F = new URL(s == null ? void 0 : s.link, location.origin);
              (F == null ? void 0 : F.pathname) === Y &&
                !F.hash &&
                setTimeout(function () {
                  (0, I.Z)(0, { maxDuration: 300 });
                }, 1);
            };
          (0, e.useEffect)(function () {
            var i = function (c) {
              if (c.key === 'ArrowDown') o((l + 1) % K);
              else if (c.key === 'ArrowUp') o((l + K - 1) % K);
              else if (c.key === 'Enter' && l >= 0) {
                var F = Q.find(function (W) {
                  return W.type === 'hint' && W.activeIndex === l;
                }).value;
                L.m8.push(F.link),
                  H == null || H(F),
                  document.activeElement.blur();
              }
              ['Escape', 'Enter'].includes(c.key) && o(-1);
            };
            return (
              document.addEventListener('keydown', i),
              function () {
                return document.removeEventListener('keydown', i);
              }
            );
          });
          var Z = null;
          return (
            r.loading
              ? (Z = e.createElement(
                  'div',
                  { className: 'dumi-default-search-empty' },
                  e.createElement(O, null),
                  e.createElement(L._H, { id: 'search.loading' }),
                ))
              : r.data.length
              ? (Z = e.createElement(
                  'dl',
                  null,
                  Q.map(function (i, s) {
                    return i.type === 'title'
                      ? e.createElement('dt', { key: String(s) }, i.value.title)
                      : e.createElement(
                          'dd',
                          { key: String(s) },
                          e.createElement(
                            L.rU,
                            {
                              to: i.value.link,
                              'data-active': l === i.activeIndex || void 0,
                              onClick: function () {
                                return H == null ? void 0 : H(i.value);
                              },
                            },
                            e.createElement(U[i.value.type]),
                            e.createElement(
                              'h4',
                              null,
                              e.createElement(V, {
                                texts: i.value.highlightTitleTexts,
                              }),
                            ),
                            e.createElement(
                              'p',
                              null,
                              e.createElement(V, {
                                texts: i.value.highlightTexts,
                              }),
                            ),
                          ),
                        );
                  }),
                ))
              : (Z = e.createElement(
                  'div',
                  { className: 'dumi-default-search-empty' },
                  e.createElement(O, null),
                  e.createElement(L._H, { id: 'search.not.found' }),
                )),
            e.createElement(
              'div',
              {
                className: 'dumi-default-search-result',
                onMouseEnter: function () {
                  return o(-1);
                },
                onMouseDownCapture: function (s) {
                  return s.preventDefault();
                },
                onMouseUpCapture: function () {
                  document.activeElement.blur();
                },
              },
              Z,
            )
          );
        },
        _ = J;
    },
    56596: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return D;
        },
      });
      var e = t(95269),
        A = t(682),
        j = t(75271),
        h = function () {
          var k = (0, e.TH)(),
            O = k.pathname,
            T = (0, e.eL)(),
            I = (0, e.tx)();
          return I
            ? j.createElement(
                'div',
                { className: 'dumi-default-sidebar' },
                I.map(function (L, b) {
                  return j.createElement(
                    'dl',
                    { className: 'dumi-default-sidebar-group', key: String(b) },
                    L.title && j.createElement('dt', null, L.title),
                    L.children.map(function (x) {
                      return j.createElement(
                        'dd',
                        { key: x.link },
                        j.createElement(
                          e.OL,
                          { to: x.link, title: x.title, end: !0 },
                          x.title,
                        ),
                        x.link === O &&
                          T.frontmatter.toc === 'menu' &&
                          j.createElement(A.Z, null),
                      );
                    }),
                  );
                }),
              )
            : null;
        },
        D = h;
    },
    94118: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return Le;
        },
      });
      var e = t(75271),
        A = Object.defineProperty,
        j = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        D = Object.prototype.propertyIsEnumerable,
        z = (p, m, d) =>
          m in p
            ? A(p, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: d,
              })
            : (p[m] = d),
        k = (p, m) => {
          for (var d in m || (m = {})) h.call(m, d) && z(p, d, m[d]);
          if (j) for (var d of j(m)) D.call(m, d) && z(p, d, m[d]);
          return p;
        };
      const O = (p) =>
        e.createElement(
          'svg',
          k({ viewBox: '64 64 896 896' }, p),
          e.createElement('path', {
            d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z',
          }),
        );
      var T =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODgwIDExMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjczNmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg3MzZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTQ0YzAtMTcuNy0xNC4zLTMyLTMyLTMyem0tMzIgNzM2SDY2My45VjYwMi4yaDEwNGwxNS42LTEyMC43SDY2My45di03Ny4xYzAtMzUgOS43LTU4LjggNTkuOC01OC44aDYzLjl2LTEwOGMtMTEuMS0xLjUtNDktNC44LTkzLjItNC44LTkyLjIgMC0xNTUuMyA1Ni4zLTE1NS4zIDE1OS42djg5SDQzNC45djEyMC43aDEwNC4zVjg0OEgxNzZWMTc2aDY3MnY2NzJ6Ii8+PC9zdmc+',
        I = Object.defineProperty,
        L = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        g = (p, m, d) =>
          m in p
            ? I(p, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: d,
              })
            : (p[m] = d),
        y = (p, m) => {
          for (var d in m || (m = {})) b.call(m, d) && g(p, d, m[d]);
          if (L) for (var d of L(m)) x.call(m, d) && g(p, d, m[d]);
          return p;
        };
      const a = (p) =>
        e.createElement(
          'svg',
          y({ viewBox: '64 64 896 896' }, p),
          e.createElement('path', {
            d: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
          }),
        );
      var v =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTExLjYgNzYuM0MyNjQuMyA3Ni4yIDY0IDI3Ni40IDY0IDUyMy41IDY0IDcxOC45IDE4OS4zIDg4NSAzNjMuOCA5NDZjMjMuNSA1LjkgMTkuOS0xMC44IDE5LjktMjIuMnYtNzcuNWMtMTM1LjcgMTUuOS0xNDEuMi03My45LTE1MC4zLTg4LjlDMjE1IDcyNiAxNzEuNSA3MTggMTg0LjUgNzAzYzMwLjktMTUuOSA2Mi40IDQgOTguOSA1Ny45IDI2LjQgMzkuMSA3Ny45IDMyLjUgMTA0IDI2IDUuNy0yMy41IDE3LjktNDQuNSAzNC43LTYwLjgtMTQwLjYtMjUuMi0xOTkuMi0xMTEtMTk5LjItMjEzIDAtNDkuNSAxNi4zLTk1IDQ4LjMtMTMxLjctMjAuNC02MC41IDEuOS0xMTIuMyA0LjktMTIwIDU4LjEtNS4yIDExOC41IDQxLjYgMTIzLjIgNDUuMyAzMy04LjkgNzAuNy0xMy42IDExMi45LTEzLjYgNDIuNCAwIDgwLjIgNC45IDExMy41IDEzLjkgMTEuMy04LjYgNjcuMy00OC44IDEyMS4zLTQzLjkgMi45IDcuNyAyNC43IDU4LjMgNS41IDExOCAzMi40IDM2LjggNDguOSA4Mi43IDQ4LjkgMTMyLjMgMCAxMDIuMi01OSAxODguMS0yMDAgMjEyLjlhMTI3LjUgMTI3LjUgMCAwIDEgMzguMSA5MXYxMTIuNWMuOCA5IDAgMTcuOSAxNSAxNy45IDE3Ny4xLTU5LjcgMzA0LjYtMjI3IDMwNC42LTQyNC4xIDAtMjQ3LjItMjAwLjQtNDQ3LjMtNDQ3LjUtNDQ3LjN6Ii8+PC9zdmc+',
        M = Object.defineProperty,
        E = Object.getOwnPropertySymbols,
        P = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        U = (p, m, d) =>
          m in p
            ? M(p, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: d,
              })
            : (p[m] = d),
        V = (p, m) => {
          for (var d in m || (m = {})) P.call(m, d) && U(p, d, m[d]);
          if (E) for (var d of E(m)) B.call(m, d) && U(p, d, m[d]);
          return p;
        };
      const R = (p) =>
        e.createElement(
          'svg',
          V({ viewBox: '64 64 896 896' }, p),
          e.createElement('path', {
            d: 'M913.9 552.2 805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776 405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9 207.3-276.7 29.5 99.2-236.8 177.5z',
          }),
        );
      var J =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTEzLjkgNTUyLjIgODA1IDE4MS40di0uMWMtNy42LTIyLjktMjUuNy0zNi41LTQ4LjMtMzYuNS0yMy40IDAtNDIuNSAxMy41LTQ5LjcgMzUuMmwtNzEuNCAyMTNIMzg4LjhsLTcxLjQtMjEzYy03LjItMjEuNy0yNi4zLTM1LjItNDkuNy0zNS4yLTIzLjEgMC00Mi41IDE0LjgtNDguNCAzNi42TDExMC41IDU1Mi4yYy00LjQgMTQuNyAxLjIgMzEuNCAxMy41IDQwLjdsMzY4LjUgMjc2LjRjMi42IDMuNiA2LjIgNi4zIDEwLjQgNy44bDguNiA2LjQgOC41LTYuNGM0LjktMS43IDktNC43IDExLjktOC45bDM2OC40LTI3NS40YzEyLjQtOS4yIDE4LTI1LjkgMTMuNi00MC42ek03NTEuNyAxOTMuNGMxLTEuOCAyLjktMS45IDMuNS0xLjkgMS4xIDAgMi41LjMgMy40IDNMODE4IDM5NC4zSDY4NC41bDY3LjItMjAwLjl6bS00ODcuNCAxYy45LTIuNiAyLjMtMi45IDMuNC0yLjkgMi43IDAgMi45LjEgMy40IDEuN2w2Ny4zIDIwMS4ySDIwNi41bDU3LjgtMjAwek0xNTguOCA1NTguN2wyOC4yLTk3LjMgMjAyLjQgMjcwLjItMjMwLjYtMTcyLjl6bTczLjktMTE2LjRoMTIyLjFsOTAuOCAyODQuMy0yMTIuOS0yODQuM3pNNTEyLjkgNzc2IDQwNS43IDQ0Mi4zSDYyMEw1MTIuOSA3NzZ6bTE1Ny45LTMzMy43aDExOS41TDU4MCA3MjMuMWw5MC44LTI4MC44em0tNDAuNyAyOTMuOSAyMDcuMy0yNzYuNyAyOS41IDk5LjItMjM2LjggMTc3LjV6Ii8+PC9zdmc+',
        _ = Object.defineProperty,
        w = Object.getOwnPropertySymbols,
        r = Object.prototype.hasOwnProperty,
        n = Object.prototype.propertyIsEnumerable,
        u = (p, m, d) =>
          m in p
            ? _(p, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: d,
              })
            : (p[m] = d),
        Q = (p, m) => {
          for (var d in m || (m = {})) r.call(m, d) && u(p, d, m[d]);
          if (w) for (var d of w(m)) n.call(m, d) && u(p, d, m[d]);
          return p;
        };
      const K = (p) =>
        e.createElement(
          'svg',
          Q({ viewBox: '64 64 896 896' }, p),
          e.createElement('path', {
            d: 'M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z',
          }),
        );
      var X =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODQ3LjcgMTEySDE3Ni4zYy0zNS41IDAtNjQuMyAyOC44LTY0LjMgNjQuM3Y2NzEuNGMwIDM1LjUgMjguOCA2NC4zIDY0LjMgNjQuM2g2NzEuNGMzNS41IDAgNjQuMy0yOC44IDY0LjMtNjQuM1YxNzYuM2MwLTM1LjUtMjguOC02NC4zLTY0LjMtNjQuM3ptMCA3MzZjLTQ0Ny44LS4xLTY3MS43LS4yLTY3MS43LS4zLjEtNDQ3LjguMi02NzEuNy4zLTY3MS43IDQ0Ny44LjEgNjcxLjcuMiA2NzEuNy4zLS4xIDQ0Ny44LS4yIDY3MS43LS4zIDY3MS43ek0yMzAuNiA0MTEuOWgxMTguN3YzODEuOEgyMzAuNnptNTkuNC01Mi4yYzM3LjkgMCA2OC44LTMwLjggNjguOC02OC44YTY4LjggNjguOCAwIDEgMC0xMzcuNiAwYy0uMSAzOCAzMC43IDY4LjggNjguOCA2OC44em0yNTIuMyAyNDUuMWMwLTQ5LjggOS41LTk4IDcxLjItOTggNjAuOCAwIDYxLjcgNTYuOSA2MS43IDEwMS4ydjE4NS43aDExOC42VjU4NC4zYzAtMTAyLjgtMjIuMi0xODEuOS0xNDIuMy0xODEuOS01Ny43IDAtOTYuNCAzMS43LTExMi4zIDYxLjdoLTEuNnYtNTIuMkg0MjMuN3YzODEuOGgxMTguNlY2MDQuOHoiLz48L3N2Zz4=',
        S = Object.defineProperty,
        l = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        Y = (p, m, d) =>
          m in p
            ? S(p, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: d,
              })
            : (p[m] = d),
        H = (p, m) => {
          for (var d in m || (m = {})) o.call(m, d) && Y(p, d, m[d]);
          if (l) for (var d of l(m)) f.call(m, d) && Y(p, d, m[d]);
          return p;
        };
      const Z = (p) =>
        e.createElement(
          'svg',
          H({ viewBox: '64 64 896 896' }, p),
          e.createElement('path', {
            d: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
          }),
        );
      var i =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTI4IDI1NC4zYy0zMC42IDEzLjItNjMuOSAyMi43LTk4LjIgMjYuNGExNzAuMSAxNzAuMSAwIDAgMCA3NS05NCAzMzYuNjQgMzM2LjY0IDAgMCAxLTEwOC4yIDQxLjJBMTcwLjEgMTcwLjEgMCAwIDAgNjcyIDE3NGMtOTQuNSAwLTE3MC41IDc2LjYtMTcwLjUgMTcwLjYgMCAxMy4yIDEuNiAyNi40IDQuMiAzOS4xLTE0MS41LTcuNC0yNjcuNy03NS0zNTEuNi0xNzguNWExNjkuMzIgMTY5LjMyIDAgMCAwLTIzLjIgODYuMWMwIDU5LjIgMzAuMSAxMTEuNCA3NiAxNDIuMWExNzIgMTcyIDAgMCAxLTc3LjEtMjEuN3YyLjFjMCA4Mi45IDU4LjYgMTUxLjYgMTM2LjcgMTY3LjRhMTgwLjYgMTgwLjYgMCAwIDEtNDQuOSA1LjhjLTExLjEgMC0yMS42LTEuMS0zMi4yLTIuNkMyMTEgNjUyIDI3My45IDcwMS4xIDM0OC44IDcwMi43Yy01OC42IDQ1LjktMTMyIDcyLjktMjExLjcgNzIuOS0xNC4zIDAtMjcuNS0uNS00MS4yLTIuMUMxNzEuNSA4MjIgMjYxLjIgODUwIDM1Ny44IDg1MCA2NzEuNCA4NTAgODQzIDU5MC4yIDg0MyAzNjQuN2MwLTcuNCAwLTE0LjgtLjUtMjIuMiAzMy4yLTI0LjMgNjIuMy01NC40IDg1LjUtODguMnoiLz48L3N2Zz4=',
        s = Object.defineProperty,
        c = Object.getOwnPropertySymbols,
        F = Object.prototype.hasOwnProperty,
        W = Object.prototype.propertyIsEnumerable,
        G = (p, m, d) =>
          m in p
            ? s(p, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: d,
              })
            : (p[m] = d),
        $ = (p, m) => {
          for (var d in m || (m = {})) F.call(m, d) && G(p, d, m[d]);
          if (c) for (var d of c(m)) W.call(m, d) && G(p, d, m[d]);
          return p;
        };
      const oe = (p) =>
        e.createElement(
          'svg',
          $({ viewBox: '64 64 896 896' }, p),
          e.createElement('path', {
            d: 'M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 0 0-106-34.3 28.45 28.45 0 0 0-21.9 33.8 28.39 28.39 0 0 0 33.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0 1 11.3 53.3 28.45 28.45 0 0 0 18.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 0 0-25.4 39.3 33.12 33.12 0 0 0 39.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z',
          }),
        );
      var ne =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDU3LjMgNTQzYy02OC4xLTE3LjctMTQ1IDE2LjItMTc0LjYgNzYuMi0zMC4xIDYxLjItMSAxMjkuMSA2Ny44IDE1MS4zIDcxLjIgMjMgMTU1LjItMTIuMiAxODQuNC03OC4zIDI4LjctNjQuNi03LjItMTMxLTc3LjYtMTQ5LjJ6bS01MiAxNTYuMmMtMTMuOCAyMi4xLTQzLjUgMzEuNy02NS44IDIxLjYtMjItMTAtMjguNS0zNS43LTE0LjYtNTcuMiAxMy43LTIxLjQgNDIuMy0zMSA2NC40LTIxLjcgMjIuNCA5LjUgMjkuNiAzNSAxNiA1Ny4zem00NS41LTU4LjVjLTUgOC42LTE2LjEgMTIuNy0yNC43IDkuMS04LjUtMy41LTExLjItMTMuMS02LjQtMjEuNSA1LTguNCAxNS42LTEyLjQgMjQuMS05LjEgOC43IDMuMiAxMS44IDEyLjkgNyAyMS41em0zMzQuNS0xOTcuMmMxNSA0LjggMzEtMy40IDM1LjktMTguMyAxMS44LTM2LjYgNC40LTc4LjQtMjMuMi0xMDlhMTExLjM5IDExMS4zOSAwIDAgMC0xMDYtMzQuMyAyOC40NSAyOC40NSAwIDAgMC0yMS45IDMzLjggMjguMzkgMjguMzkgMCAwIDAgMzMuOCAyMS44YzE4LjQtMy45IDM4LjMgMS44IDUxLjkgMTYuN2E1NC4yIDU0LjIgMCAwIDEgMTEuMyA1My4zIDI4LjQ1IDI4LjQ1IDAgMCAwIDE4LjIgMzZ6bTk5LjgtMjA2Yy01Ni43LTYyLjktMTQwLjQtODYuOS0yMTcuNy03MC41YTMyLjk4IDMyLjk4IDAgMCAwLTI1LjQgMzkuMyAzMy4xMiAzMy4xMiAwIDAgMCAzOS4zIDI1LjVjNTUtMTEuNyAxMTQuNCA1LjQgMTU0LjggNTAuMSA0MC4zIDQ0LjcgNTEuMiAxMDUuNyAzNCAxNTkuMS01LjYgMTcuNCAzLjkgMzYgMjEuMyA0MS43IDE3LjQgNS42IDM2LTMuOSA0MS42LTIxLjJ2LS4xYzI0LjEtNzUuNCA4LjktMTYxLjEtNDcuOS0yMjMuOXpNNzI5IDQ5OWMtMTIuMi0zLjYtMjAuNS02LjEtMTQuMS0yMi4xIDEzLjgtMzQuNyAxNS4yLTY0LjcuMy04Ni0yOC00MC4xLTEwNC44LTM3LjktMTkyLjgtMS4xIDAgMC0yNy42IDEyLjEtMjAuNi05LjggMTMuNS00My41IDExLjUtNzkuOS05LjYtMTAxLTQ3LjctNDcuOC0xNzQuNiAxLjgtMjgzLjUgMTEwLjZDMTI3LjMgNDcxLjEgODAgNTU3LjUgODAgNjMyLjIgODAgNzc1LjEgMjYzLjIgODYyIDQ0Mi41IDg2MmMyMzUgMCAzOTEuMy0xMzYuNSAzOTEuMy0yNDUgMC02NS41LTU1LjItMTAyLjYtMTA0LjgtMTE4ek00NDMgODEwLjhjLTE0MyAxNC4xLTI2Ni41LTUwLjUtMjc1LjgtMTQ0LjUtOS4zLTkzLjkgOTkuMi0xODEuNSAyNDIuMi0xOTUuNiAxNDMtMTQuMiAyNjYuNSA1MC41IDI3NS44IDE0NC40QzY5NC40IDcwOSA1ODYgNzk2LjYgNDQzIDgxMC44eiIvPjwvc3ZnPg==',
        te = Object.defineProperty,
        ae = Object.getOwnPropertySymbols,
        le = Object.prototype.hasOwnProperty,
        re = Object.prototype.propertyIsEnumerable,
        ee = (p, m, d) =>
          m in p
            ? te(p, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: d,
              })
            : (p[m] = d),
        q = (p, m) => {
          for (var d in m || (m = {})) le.call(m, d) && ee(p, d, m[d]);
          if (ae) for (var d of ae(m)) re.call(m, d) && ee(p, d, m[d]);
          return p;
        };
      const ce = (p) =>
        e.createElement(
          'svg',
          q({ viewBox: '64 64 896 896' }, p),
          e.createElement('path', {
            d: 'M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 .1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6zm-204.1 334c-10.6 0-26.2.1-46.8.3l-23.6.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z',
          }),
        );
      var se =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODU0LjYgMzcwLjZjLTkuOS0zOS40IDkuOS0xMDIuMiA3My40LTEyNC40bC02Ny45LTMuNnMtMjUuNy05MC0xNDMuNi05OGMtMTE3LjgtOC4xLTE5NC45LTMtMTk1LTMgLjEgMCA4Ny40IDU1LjYgNTIuNCAxNTQuNy0yNS42IDUyLjUtNjUuOCA5NS42LTEwOC44IDE0NC43LTEuMyAxLjMtMi41IDIuNi0zLjUgMy43QzMxOS40IDYwNSA5NiA4NjAgOTYgODYwYzI0NS45IDY0LjQgNDEwLjctNi4zIDUwOC4yLTkxLjEgMjAuNS0uMiAzNS45LS4zIDQ2LjMtLjMgMTM1LjggMCAyNTAuNi0xMTcuNiAyNDUuOS0yNDguNC0zLjItODkuOS0zMS45LTExMC4yLTQxLjgtMTQ5LjZ6bS0yMDQuMSAzMzRjLTEwLjYgMC0yNi4yLjEtNDYuOC4zbC0yMy42LjItMTcuOCAxNS41Yy00Ny4xIDQxLTEwNC40IDcxLjUtMTcxLjQgODcuNi01Mi41IDEyLjYtMTEwIDE2LjItMTcyLjcgOS42IDE4LTIwLjUgMzYuNS00MS42IDU1LjQtNjMuMSA5Mi0xMDQuNiAxNzMuOC0xOTcuNSAyMzYuOS0yNjguNWwxLjQtMS40IDEuMy0xLjVjNC4xLTQuNiAyMC42LTIzLjMgMjQuNy0yOC4xIDkuNy0xMS4xIDE3LjMtMTkuOSAyNC41LTI4LjYgMzAuNy0zNi43IDUyLjItNjcuOCA2OS0xMDIuMmwxLjYtMy4zIDEuMi0zLjRjMTMuNy0zOC44IDE1LjQtNzYuOSA2LjItMTEyLjggMjIuNS43IDQ2LjUgMS45IDcxLjcgMy42IDMzLjMgMi4zIDU1LjUgMTIuOSA3MS4xIDI5LjIgNS44IDYgMTAuMiAxMi41IDEzLjQgMTguNyAxIDIgMS43IDMuNiAyLjMgNWw1IDE3LjdjLTE1LjcgMzQuNS0xOS45IDczLjMtMTEuNCAxMDcuMiAzIDExLjggNi45IDIyLjQgMTIuMyAzNC40IDIuMSA0LjcgOS41IDIwLjEgMTEgMjMuMyAxMC4zIDIyLjcgMTUuNCA0MyAxNi43IDc4LjcgMy4zIDk0LjYtODIuNyAxODEuOS0xODIgMTgxLjl6Ii8+PC9zdmc+',
        Me = Object.defineProperty,
        fe = Object.getOwnPropertySymbols,
        de = Object.prototype.hasOwnProperty,
        me = Object.prototype.propertyIsEnumerable,
        ue = (p, m, d) =>
          m in p
            ? Me(p, m, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: d,
              })
            : (p[m] = d),
        ge = (p, m) => {
          for (var d in m || (m = {})) de.call(m, d) && ue(p, d, m[d]);
          if (fe) for (var d of fe(m)) me.call(m, d) && ue(p, d, m[d]);
          return p;
        };
      const ie = (p) =>
        e.createElement(
          'svg',
          ge({ viewBox: '64 64 896 896' }, p),
          e.createElement('path', {
            d: 'M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z',
          }),
        );
      var ye =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTY0LjcgMjMwLjFWODAzaDYwbDI1LjIgNzEuNEw3NTYuMyA4MDNoMTMxLjVWMjMwLjFINTY0Ljd6bTI0Ny43IDQ5N2gtNTkuOWwtNzUuMSA1MC40LTE3LjgtNTAuNGgtMThWMzA4LjNoMTcwLjd2NDE4Ljh6TTUyNi4xIDQ4Ni45SDM5My4zYzIuMS00NC45IDQuMy0xMDQuMyA2LjYtMTcyLjloMTMwLjlsLS4xLTguMWMwLS42LS4yLTE0LjctMi4zLTI5LjEtMi4xLTE1LTYuNi0zNC45LTIxLTM0LjlIMjg3LjhjNC40LTIwLjYgMTUuNy02OS43IDI5LjQtOTMuOGw2LjQtMTEuMi0xMi45LS43Yy0uOCAwLTE5LjYtLjktNDEuNCAxMC42LTM1LjcgMTktNTEuNyA1Ni40LTU4LjcgODQuNC0xOC40IDczLjEtNDQuNiAxMjMuOS01NS43IDE0NS42LTMuMyA2LjQtNS4zIDEwLjItNi4yIDEyLjgtMS44IDQuOS0uOCA5LjggMi44IDEzIDEwLjUgOS41IDM4LjItMi45IDM4LjUtMyAuNi0uMyAxLjMtLjYgMi4yLTEgMTMuOS02LjMgNTUuMS0yNSA2OS44LTg0LjVoNTYuN2MuNyAzMi4yIDMuMSAxMzguNCAyLjkgMTcyLjloLTE0MWwtMi4xIDEuNWMtMjMuMSAxNi45LTMwLjUgNjMuMi0zMC44IDY1LjJsLTEuNCA5LjJoMTY3Yy0xMi4zIDc4LjMtMjYuNSAxMTMuNC0zNCAxMjcuNC0zLjcgNy03LjMgMTQtMTAuNyAyMC44LTIxLjMgNDIuMi00My40IDg1LjgtMTI2LjMgMTUzLjYtMy42IDIuOC03IDgtNC44IDEzLjcgMi40IDYuMyA5LjMgOS4xIDI0LjYgOS4xIDUuNCAwIDExLjgtLjMgMTkuNC0xIDQ5LjktNC40IDEwMC44LTE4IDEzNS4xLTg3LjYgMTctMzUuMSAzMS43LTcxLjcgNDMuOS0xMDguOUw0OTcgODUwbDUtMTJjLjgtMS45IDE5LTQ2LjMgNS4xLTk1LjlsLS41LTEuOC0xMDguMS0xMjMtMjIgMTYuNmM2LjQtMjYuMSAxMC42LTQ5LjkgMTIuNS03MS4xaDE1OC43di04YzAtNDAuMS0xOC41LTYzLjktMTkuMi02NC45bC0yLjQtM3oiLz48L3N2Zz4=',
        Ae = t(10693),
        ve = {
          github: a,
          weibo: oe,
          twitter: Z,
          gitlab: R,
          facebook: O,
          zhihu: ie,
          yuque: ce,
          linkedin: K,
        },
        Ne = function (m) {
          var d = m.icon,
            je = m.link,
            pe = (0, Ae.Z)(),
            Ie = (0, e.useMemo)(
              function () {
                return { Icon: ve[d], link: je };
              },
              [d, je],
            );
          return e.createElement(
            'a',
            {
              className: 'dumi-default-icon',
              'data-dumi-tooltip': pe.formatMessage({
                id: 'header.social.'.concat(d),
              }),
              'data-dumi-tooltip-bottom': !0,
              target: '_blank',
              href: Ie.link,
              rel: 'noreferrer',
            },
            e.createElement(Ie.Icon, null),
          );
        },
        Le = Ne;
    },
    5405: function (N, C, t) {
      'use strict';
      t.d(C, {
        Z: function () {
          return X;
        },
      });
      var e = t(15558),
        A = t.n(e),
        j = t(48305),
        h = t.n(j),
        D = t(75271),
        z = t(25298),
        k = t.n(z),
        O = t(17069),
        T = t.n(O),
        I = t(62657),
        L = t.n(I),
        b = t(21742),
        x = t.n(b),
        g = t(83136),
        y = t.n(g),
        a = t(82092),
        v = t.n(a),
        M = T()(function S() {
          k()(this, S);
        }),
        E = (function (S) {
          x()(o, S);
          var l = y()(o);
          function o(f) {
            var Y;
            return (
              k()(this, o),
              (Y = l.call(this)),
              v()(L()(Y), 'el', void 0),
              (Y.el = f),
              Y
            );
          }
          return (
            T()(
              o,
              [
                {
                  key: 'top',
                  get: function () {
                    return this.el.getBoundingClientRect().top;
                  },
                },
                {
                  key: 'outerHeight',
                  get: function () {
                    return this.el.getBoundingClientRect().height;
                  },
                },
                {
                  key: 'scrollTop',
                  get: function () {
                    return this.el.scrollTop;
                  },
                },
                {
                  key: 'scrollHeight',
                  get: function () {
                    return this.el.scrollHeight;
                  },
                },
                {
                  key: 'isScrolledToBottom',
                  value: function () {
                    return (
                      this.scrollTop + this.outerHeight >= this.scrollHeight
                    );
                  },
                },
                {
                  key: 'registerScrollEvent',
                  value: function (Y) {
                    this.el.addEventListener('scroll', Y);
                  },
                },
                {
                  key: 'unregisterScrollEvent',
                  value: function (Y) {
                    this.el.removeEventListener('scroll', Y);
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function (Y) {
                    var H = document.querySelector(Y);
                    if (!H) throw new Error('element is not found.');
                    return new o(H);
                  },
                },
              ],
            ),
            o
          );
        })(M),
        P = (function (S) {
          x()(o, S);
          var l = y()(o);
          function o() {
            return k()(this, o), l.apply(this, arguments);
          }
          return (
            T()(
              o,
              [
                {
                  key: 'outerHeight',
                  get: function () {
                    return window.innerHeight;
                  },
                },
                {
                  key: 'scrollTop',
                  get: function () {
                    return document.documentElement.scrollTop;
                  },
                },
                {
                  key: 'scrollHeight',
                  get: function () {
                    return document.documentElement.scrollHeight;
                  },
                },
                {
                  key: 'isScrolledToBottom',
                  value: function () {
                    return (
                      this.scrollTop + this.outerHeight >= this.scrollHeight
                    );
                  },
                },
                {
                  key: 'registerScrollEvent',
                  value: function (Y) {
                    document.addEventListener('scroll', Y);
                  },
                },
                {
                  key: 'unregisterScrollEvent',
                  value: function (Y) {
                    document.removeEventListener('scroll', Y);
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function () {
                    return new o();
                  },
                },
              ],
            ),
            o
          );
        })(M),
        B = (function () {
          function S() {
            k()(this, S);
          }
          return (
            T()(S, null, [
              {
                key: 'create',
                value: function (o) {
                  return o ? E.create(o) : P.create();
                },
              },
            ]),
            S
          );
        })(),
        U = function (l) {
          var o = l.sectionRefs,
            f = l.rootSelector,
            Y = l.offset,
            H = Y === void 0 ? 0 : Y,
            Z = (0, D.useRef)(null);
          (0, D.useEffect)(
            function () {
              Z.current = B.create(f);
            },
            [f],
          );
          var i = (0, D.useCallback)(
              function () {
                return Z.current ? Z.current.isScrolledToBottom() : !1;
              },
              [Z],
            ),
            s = (0, D.useCallback)(
              function (te) {
                if (!Z.current) return !1;
                var ae = Z.current.scrollTop,
                  le = ae + Z.current.outerHeight,
                  re = te.getBoundingClientRect(),
                  ee =
                    Z.current instanceof E
                      ? ae + re.top - Z.current.top + H
                      : ae + re.top + H,
                  q = ee + re.height;
                return [ee < le, q > ae].every(function (ce) {
                  return ce;
                });
              },
              [Z, H],
            ),
            c = (0, D.useCallback)(
              function () {
                return o.map(function (te) {
                  return te.current ? s(te.current) : !1;
                });
              },
              [s, o],
            ),
            F = (0, D.useState)([]),
            W = h()(F, 2),
            G = W[0],
            $ = W[1],
            oe = (0, D.useMemo)(
              function () {
                return G.findIndex(function (te) {
                  return te;
                });
              },
              [G],
            ),
            ne = (0, D.useCallback)(
              function () {
                var te = i()
                  ? [].concat(
                      A()(
                        new Array(o.length - 1).fill(!1).map(function (ae) {
                          return ae;
                        }),
                      ),
                      [!0],
                    )
                  : c();
                $(te);
              },
              [c, i, o],
            );
          return (
            (0, D.useEffect)(
              function () {
                return (
                  ne(),
                  Z.current && Z.current.registerScrollEvent(ne),
                  function () {
                    Z.current && Z.current.unregisterScrollEvent(ne);
                  }
                );
              },
              [ne],
            ),
            { elementsStatusInViewport: G, currentElementIndexInViewport: oe }
          );
        },
        V = function (l) {
          var o = l.children,
            f = l.sectionRefs,
            Y = l.rootSelector,
            H = l.offset,
            Z = U({ sectionRefs: f, rootSelector: Y, offset: H }),
            i = Z.elementsStatusInViewport,
            s = Z.currentElementIndexInViewport;
          return o({
            elementsStatusInViewport: i,
            currentElementIndexInViewport: s,
          });
        },
        R = t(95269);
      function J() {
        return (
          (J = Object.assign
            ? Object.assign.bind()
            : function (S) {
                for (var l = 1; l < arguments.length; l++) {
                  var o = arguments[l];
                  for (var f in o)
                    Object.prototype.hasOwnProperty.call(o, f) && (S[f] = o[f]);
                }
                return S;
              }),
          J.apply(this, arguments)
        );
      }
      function _(S, l) {
        return Q(S) || u(S, l) || r(S, l) || w();
      }
      function w() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function r(S, l) {
        if (S) {
          if (typeof S == 'string') return n(S, l);
          var o = Object.prototype.toString.call(S).slice(8, -1);
          if (
            (o === 'Object' && S.constructor && (o = S.constructor.name),
            o === 'Map' || o === 'Set')
          )
            return Array.from(S);
          if (
            o === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          )
            return n(S, l);
        }
      }
      function n(S, l) {
        (l == null || l > S.length) && (l = S.length);
        for (var o = 0, f = new Array(l); o < l; o++) f[o] = S[o];
        return f;
      }
      function u(S, l) {
        var o =
          S == null
            ? null
            : (typeof Symbol != 'undefined' && S[Symbol.iterator]) ||
              S['@@iterator'];
        if (o != null) {
          var f,
            Y,
            H,
            Z,
            i = [],
            s = !0,
            c = !1;
          try {
            if (((H = (o = o.call(S)).next), l === 0)) {
              if (Object(o) !== o) return;
              s = !1;
            } else
              for (
                ;
                !(s = (f = H.call(o)).done) &&
                (i.push(f.value), i.length !== l);
                s = !0
              );
          } catch (F) {
            (c = !0), (Y = F);
          } finally {
            try {
              if (!s && o.return != null && ((Z = o.return()), Object(Z) !== Z))
                return;
            } finally {
              if (c) throw Y;
            }
          }
          return i;
        }
      }
      function Q(S) {
        if (Array.isArray(S)) return S;
      }
      var K = function () {
          var l = (0, R.TH)(),
            o = l.pathname,
            f = l.search,
            Y = l.hash,
            H = (0, R.eL)(),
            Z = (0, R.zh)(),
            i = (0, R.WF)(),
            s = i.loading,
            c = (0, D.useRef)(0),
            F = (0, D.useState)([]),
            W = _(F, 2),
            G = W[0],
            $ = W[1],
            oe = (0, D.useState)(0),
            ne = _(oe, 2),
            te = ne[0],
            ae = ne[1],
            le = D.useMemo(
              function () {
                var re = H.toc;
                return (
                  Z && (re = Z.toc),
                  re.filter(function (ee) {
                    var q = ee.depth;
                    return q > 1 && q < 4;
                  })
                );
              },
              [H, Z],
            );
          return (
            (0, D.useEffect)(
              function () {
                if (!s) {
                  var re = le.map(function (ee) {
                    var q = ee.id;
                    return { current: document.getElementById(q) };
                  });
                  $(re);
                }
              },
              [o, f, s, le],
            ),
            (0, D.useEffect)(
              function () {
                if (G.length > 0) {
                  var re = document.querySelector('.dumi-default-header');
                  ae(re ? re.clientHeight : 0);
                }
              },
              [G],
            ),
            G.length
              ? D.createElement(
                  V,
                  { sectionRefs: G, offset: -te },
                  function (re) {
                    var ee = re.currentElementIndexInViewport;
                    return (
                      ee > -1 && (c.current = ee),
                      D.createElement(
                        'ul',
                        { className: 'dumi-default-toc' },
                        le
                          .filter(function (q) {
                            var ce = q.depth;
                            return ce > 1 && ce < 4;
                          })
                          .map(function (q, ce) {
                            var se = ''
                                .concat(f, '#')
                                .concat(encodeURIComponent(q.id)),
                              Me = ee > -1 ? ee : c.current;
                            return D.createElement(
                              'li',
                              { key: q.id, 'data-depth': q.depth },
                              D.createElement(
                                R.rU,
                                J(
                                  {
                                    to: se,
                                    onClickCapture: function () {
                                      decodeURIComponent(Y).slice(1) === q.id &&
                                        R.m8.replace(''.concat(o).concat(f));
                                    },
                                    title: q.title,
                                  },
                                  Me === ce ? { className: 'active' } : {},
                                ),
                                q.title,
                              ),
                            );
                          }),
                      )
                    );
                  },
                )
              : null
          );
        },
        X = K;
    },
    38498: function (N, C, t) {
      var e = t(78770);
      function A(j) {
        if (Array.isArray(j)) return e(j);
      }
      (N.exports = A),
        (N.exports.__esModule = !0),
        (N.exports.default = N.exports);
    },
    62657: function (N) {
      function C(t) {
        if (t === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return t;
      }
      (N.exports = C),
        (N.exports.__esModule = !0),
        (N.exports.default = N.exports);
    },
    83136: function (N, C, t) {
      var e = t(38836),
        A = t(68919),
        j = t(75254);
      function h(D) {
        var z = A();
        return function () {
          var O = e(D),
            T;
          if (z) {
            var I = e(this).constructor;
            T = Reflect.construct(O, arguments, I);
          } else T = O.apply(this, arguments);
          return j(this, T);
        };
      }
      (N.exports = h),
        (N.exports.__esModule = !0),
        (N.exports.default = N.exports);
    },
    38836: function (N) {
      function C(t) {
        return (
          (N.exports = C =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (A) {
                  return A.__proto__ || Object.getPrototypeOf(A);
                }),
          (N.exports.__esModule = !0),
          (N.exports.default = N.exports),
          C(t)
        );
      }
      (N.exports = C),
        (N.exports.__esModule = !0),
        (N.exports.default = N.exports);
    },
    21742: function (N, C, t) {
      var e = t(80038);
      function A(j, h) {
        if (typeof h != 'function' && h !== null)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (j.prototype = Object.create(h && h.prototype, {
          constructor: { value: j, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(j, 'prototype', { writable: !1 }),
          h && e(j, h);
      }
      (N.exports = A),
        (N.exports.__esModule = !0),
        (N.exports.default = N.exports);
    },
    68919: function (N) {
      function C() {
        if (
          typeof Reflect == 'undefined' ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      (N.exports = C),
        (N.exports.__esModule = !0),
        (N.exports.default = N.exports);
    },
    20698: function (N) {
      function C(t) {
        if (
          (typeof Symbol != 'undefined' && t[Symbol.iterator] != null) ||
          t['@@iterator'] != null
        )
          return Array.from(t);
      }
      (N.exports = C),
        (N.exports.__esModule = !0),
        (N.exports.default = N.exports);
    },
    91162: function (N) {
      function C() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      (N.exports = C),
        (N.exports.__esModule = !0),
        (N.exports.default = N.exports);
    },
    75254: function (N, C, t) {
      var e = t(31759).default,
        A = t(62657);
      function j(h, D) {
        if (D && (e(D) === 'object' || typeof D == 'function')) return D;
        if (D !== void 0)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          );
        return A(h);
      }
      (N.exports = j),
        (N.exports.__esModule = !0),
        (N.exports.default = N.exports);
    },
    80038: function (N) {
      function C(t, e) {
        return (
          (N.exports = C =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (j, h) {
                  return (j.__proto__ = h), j;
                }),
          (N.exports.__esModule = !0),
          (N.exports.default = N.exports),
          C(t, e)
        );
      }
      (N.exports = C),
        (N.exports.__esModule = !0),
        (N.exports.default = N.exports);
    },
    15558: function (N, C, t) {
      var e = t(38498),
        A = t(20698),
        j = t(31479),
        h = t(91162);
      function D(z) {
        return e(z) || A(z) || j(z) || h();
      }
      (N.exports = D),
        (N.exports.__esModule = !0),
        (N.exports.default = N.exports);
    },
    94161: function (N, C) {
      'use strict';
      var t = function (O, T, I, L) {
        function b(x) {
          return x instanceof I
            ? x
            : new I(function (g) {
                g(x);
              });
        }
        return new (I || (I = Promise))(function (x, g) {
          function y(M) {
            try {
              v(L.next(M));
            } catch (E) {
              g(E);
            }
          }
          function a(M) {
            try {
              v(L.throw(M));
            } catch (E) {
              g(E);
            }
          }
          function v(M) {
            M.done ? x(M.value) : b(M.value).then(y, a);
          }
          v((L = L.apply(O, T || [])).next());
        });
      };
      function e(O) {
        let T = 0,
          I = 0,
          L = O;
        do
          (T += L.offsetTop || 0),
            (I += L.offsetLeft || 0),
            (L = L.offsetParent);
        while (L);
        return { top: T, left: I };
      }
      class A {
        constructor(T) {
          this.element = T;
        }
        getHorizontalScroll() {
          return this.element.scrollLeft;
        }
        getVerticalScroll() {
          return this.element.scrollTop;
        }
        getMaxHorizontalScroll() {
          return this.element.scrollWidth - this.element.clientWidth;
        }
        getMaxVerticalScroll() {
          return this.element.scrollHeight - this.element.clientHeight;
        }
        getHorizontalElementScrollOffset(T, I) {
          return e(T).left - e(I).left;
        }
        getVerticalElementScrollOffset(T, I) {
          return e(T).top - e(I).top;
        }
        scrollTo(T, I) {
          (this.element.scrollLeft = T), (this.element.scrollTop = I);
        }
      }
      class j {
        constructor() {
          this.element = window;
        }
        getHorizontalScroll() {
          return window.scrollX || document.documentElement.scrollLeft;
        }
        getVerticalScroll() {
          return window.scrollY || document.documentElement.scrollTop;
        }
        getMaxHorizontalScroll() {
          return (
            Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.body.clientWidth,
              document.documentElement.clientWidth,
            ) - window.innerWidth
          );
        }
        getMaxVerticalScroll() {
          return (
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.offsetHeight,
              document.body.clientHeight,
              document.documentElement.clientHeight,
            ) - window.innerHeight
          );
        }
        getHorizontalElementScrollOffset(T) {
          return (
            (window.scrollX || document.documentElement.scrollLeft) +
            T.getBoundingClientRect().left
          );
        }
        getVerticalElementScrollOffset(T) {
          return (
            (window.scrollY || document.documentElement.scrollTop) +
            T.getBoundingClientRect().top
          );
        }
        scrollTo(T, I) {
          window.scrollTo(T, I);
        }
      }
      const h = {
          elements: [],
          cancelMethods: [],
          add: (O, T) => {
            h.elements.push(O), h.cancelMethods.push(T);
          },
          remove: (O, T) => {
            const I = h.elements.indexOf(O);
            I > -1 &&
              (T && h.cancelMethods[I](),
              h.elements.splice(I, 1),
              h.cancelMethods.splice(I, 1));
          },
        },
        D = typeof window != 'undefined',
        z = {
          cancelOnUserAction: !0,
          easing: (O) => --O * O * O + 1,
          elementToScroll: D ? window : null,
          horizontalOffset: 0,
          maxDuration: 3e3,
          minDuration: 250,
          speed: 500,
          verticalOffset: 0,
        };
      function k(O, T = {}) {
        return t(this, void 0, void 0, function* () {
          if (D) {
            if (!window.Promise)
              throw "Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";
          } else
            return new Promise((r) => {
              r(!1);
            });
          let I,
            L,
            b,
            x = Object.assign(Object.assign({}, z), T);
          const g = x.elementToScroll === window,
            y = !!x.elementToScroll.nodeName;
          if (!g && !y)
            throw 'Element to scroll needs to be either window or DOM element.';
          const a = g ? document.documentElement : x.elementToScroll;
          getComputedStyle(a).getPropertyValue('scroll-behavior') ===
            'smooth' &&
            console.warn(
              `${a.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`,
            );
          const M = g ? new j() : new A(x.elementToScroll);
          if (O instanceof Element) {
            if (
              ((b = O),
              y &&
                (!x.elementToScroll.contains(b) ||
                  x.elementToScroll.isSameNode(b)))
            )
              throw 'options.elementToScroll has to be a parent of scrollToElement';
            (I = M.getHorizontalElementScrollOffset(b, x.elementToScroll)),
              (L = M.getVerticalElementScrollOffset(b, x.elementToScroll));
          } else if (typeof O == 'number')
            (I = M.getHorizontalScroll()), (L = O);
          else if (Array.isArray(O) && O.length === 2)
            (I = O[0] === null ? M.getHorizontalScroll() : O[0]),
              (L = O[1] === null ? M.getVerticalScroll() : O[1]);
          else
            throw `Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;
          (I += x.horizontalOffset), (L += x.verticalOffset);
          const E = M.getMaxHorizontalScroll(),
            P = M.getHorizontalScroll();
          I > E && (I = E);
          const B = I - P,
            U = M.getMaxVerticalScroll(),
            V = M.getVerticalScroll();
          L > U && (L = U);
          const R = L - V,
            J = Math.abs(Math.round((B / 1e3) * x.speed)),
            _ = Math.abs(Math.round((R / 1e3) * x.speed));
          let w = J > _ ? J : _;
          return (
            w < x.minDuration
              ? (w = x.minDuration)
              : w > x.maxDuration && (w = x.maxDuration),
            new Promise((r, n) => {
              B === 0 && R === 0 && r(!0), h.remove(M.element, !0);
              let u;
              const Q = () => {
                o(), cancelAnimationFrame(u), r(!1);
              };
              h.add(M.element, Q);
              const K = (H) => H.preventDefault(),
                X = x.cancelOnUserAction ? Q : K,
                S = x.cancelOnUserAction ? { passive: !0 } : { passive: !1 },
                l = ['wheel', 'touchstart', 'keydown', 'mousedown'],
                o = () => {
                  l.forEach((H) => {
                    M.element.removeEventListener(H, X, S);
                  });
                };
              l.forEach((H) => {
                M.element.addEventListener(H, X, S);
              });
              const f = Date.now(),
                Y = () => {
                  var H = Date.now() - f,
                    Z = H / w;
                  const i = Math.round(P + B * x.easing(Z)),
                    s = Math.round(V + R * x.easing(Z));
                  H < w && (i !== I || s !== L)
                    ? (M.scrollTo(i, s), (u = requestAnimationFrame(Y)))
                    : (M.scrollTo(I, L),
                      cancelAnimationFrame(u),
                      o(),
                      h.remove(M.element, !1),
                      r(!0));
                };
              u = requestAnimationFrame(Y);
            })
          );
        });
      }
      C.Z = k;
    },
  },
]);
